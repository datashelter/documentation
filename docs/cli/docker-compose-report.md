---
description: "Implementation report, operating model, validation plan, and known limits for Docker Compose backup support."
---

# Docker Compose support: delivery report

## What the feature does

Snaper discovers Docker Compose v2 projects from Docker labels, not from a fixed Compose file path. A user can select an individual database service/replica or named volume and configure it as a normal Datashelter service. The dashboard uses the same agent API as the CLI.

| Resource | Backup method | Restore method |
| --- | --- | --- |
| PostgreSQL | Runs the client dump inside the selected live container | Runs the matching import in that container; `--clean` is explicit |
| MySQL/MariaDB | Runs the client dump inside the selected live container | Imports into the selected container; `--clean` is explicit |
| MongoDB | Runs the client dump inside the selected live container | Imports into the selected container; `--clean` is explicit |
| Docker named volume | Attaches a read-only helper container and streams a tar archive to the configured S3-compatible storage | Refuses a mounted volume by default, then streams the archive into an isolated helper container |

Snapshots are stored as S3 objects. Named-volume archives use the prefix `volumes/<backup-service-name>/`; the Docker volume driver is the source mechanism, not the storage backend.

## Key implementation changes

- **Snaper:** adds `compose` and `volume` CLI commands, Compose label-based project/service/replica resolution, database-container execution, named-volume backup/restore, backup configuration and scheduling support, encryption/compression propagation, and agent snapshot log publication.
- **Agent security:** remote command payloads no longer accept environment variables. Passwords must remain on the agent host or in the database container; they are not serialized into the S3 command queue.
- **Restore safety:** all destructive restores require confirmation. Volume restore also checks for running containers using the target volume, before it downloads or modifies data. `--allow-live-volume` is an explicit break-glass override only.
- **Gateway:** adds Compose discovery and volume/database backup/restore endpoints, validates all batch intents before queueing, restricts dashboard database options to a safe allowlist, reports partial queue failures per item with HTTP `207`, and regenerates Swagger.
- **Dashboard:** adds the Compose setup path, existing-server configuration, service quota/schedule/retention handling for volumes, restore confirmation, volume log display, localized copy, and batch-error rendering.
- **Runtime image:** includes Docker CLI and the Compose v2 plugin, so an agent container with a deliberately granted Docker socket can execute discovery and named-volume operations.

## Simple usage

Discover resources:

```bash
snaper compose discover --json
```

Configure and run a named-volume backup:

```bash
snaper backup volume --name app-data --volume production_app-data --configure
snaper backup volume --name app-data
```

Restore it safely after stopping its consumers:

```bash
snaper restore volume --name app-data --latest --clear --yes
```

See [Docker Compose backups](/cli/docker-compose) for database examples, driver considerations, and the new-host recovery runbook.

## Compatibility and limits

- Docker Engine and Compose v2 are required. The agent identity must be explicitly allowed to use the Docker socket.
- Named Docker volumes are supported through Docker's standard helper-container mounting mechanism. The built-in `local` driver is covered by the automated E2E test.
- NFS, CIFS, CSI, cloud, and vendor plugins are not globally rejected, but are not certified yet. Their attach, locking, multi-mount, and consistency semantics must be tested per driver before production use.
- Bind mounts and `tmpfs` mounts are outside the named-volume feature.
- Volume snapshots are filesystem snapshots. Use native database dumps as the preferred recovery mechanism for databases, and stop writers when application consistency matters.
- A restore on a new host requires the original S3 credentials and encryption material, the same volume driver configuration, and the original Compose project/volume naming.

## Validation completed

- Snaper unit, vet, and build checks: `go test ./...`, `go vet ./...`, `go build ./...`.
- Gateway unit, vet, and build checks.
- Dashboard backend lint/build and frontend lint/production build.
- Documentation production build.
- Docker named-volume E2E: image build, MinIO readiness, seed volume, backup, mutation, `--latest --clear --yes` restore, content verification, and temporary-volume cleanup.

## Acceptance checklist

Run the following on each target Docker driver and database image before production rollout:

1. Confirm `snaper compose discover --json` lists the expected project, service, replica, database, named volume, and volume driver.
2. Configure each selected service through both CLI and dashboard; verify quota, schedule, retention, and service aliases.
3. Run database backup/restore against PostgreSQL, MySQL/MariaDB, and MongoDB, including a credential supplied through the image's `_FILE` convention.
4. For each volume driver, seed a disposable volume, back it up, mutate it, stop all consumers, restore with `--clear`, and compare the original content.
5. Confirm a volume restore fails while a writer container is running, and use `--allow-live-volume` only in a disposable test.
6. Repeat volume backup/restore with compression and encryption enabled; restore using the original key material.
7. Force missing Docker socket access, unavailable helper image, S3 failure, and a batch containing one invalid item; verify actionable errors and no false success.
8. Perform the [new-host recovery runbook](/cli/docker-compose#restore-a-compose-deployment-on-a-new-host) in a non-production environment.

## Follow-up batch: driver certification

The next implementation batch should add a driver certification registry and E2E matrix. For each supported plugin it should record the driver version, creation options, concurrent mount behavior, read-only behavior, and expected recovery procedure. It should also add optional application quiesce hooks or driver-native snapshot integrations where a live tar archive is not sufficiently consistent.
