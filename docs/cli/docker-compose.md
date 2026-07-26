---
description: "Discover Docker Compose databases and named volumes, then back them up and restore them with Snaper CLI or Agent Mode."
---

# Docker Compose backups

Snaper can discover Docker Compose v2 projects on a Linux Docker Engine host. It can back up and restore PostgreSQL, MySQL/MariaDB, and MongoDB databases from inside their running containers. Named Docker volumes can be protected as independent services when you select them.

## Requirements

- Docker Engine and the `docker compose` v2 plugin must be installed on the Snaper host.
- The user running Snaper must be allowed to use the Docker daemon.
- Database client tools must exist in the database container. The official PostgreSQL, MySQL, MariaDB, and MongoDB images include the required tools.
- The host must be able to pull `busybox:1.36.1` for volume backup and restore. Set `SNAPER_DOCKER_VOLUME_HELPER_IMAGE` to use an approved mirrored image.

::: callout warning
Access to the Docker socket is effectively root-level access to the host. Only grant it to the dedicated, trusted Snaper agent account and protect that account's credentials.
:::

The systemd agent unit preserves `DOCKER_HOST`, `DOCKER_CONTEXT`, `DOCKER_CONFIG`, and `XDG_RUNTIME_DIR`, so rootless or remote Docker contexts can be selected when installing the service.

## Discover resources

```bash
snaper compose discover
snaper compose discover --json
```

Discovery uses Docker Compose labels, so it does not depend on a fixed Compose file location. It reports projects, services, replicas, detected databases, mounts, and named volumes. The dashboard exposes the same discovery from the server setup wizard and the **Docker Compose** action on an existing server.

Snaper reads the standard variables used by official images, including Docker secret variants ending in `_FILE`:

- PostgreSQL: `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_PASSWORD_FILE`, `POSTGRES_DB`
- MySQL/MariaDB: `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_PASSWORD_FILE`, `MYSQL_ROOT_PASSWORD`, `MYSQL_ROOT_PASSWORD_FILE`
- MongoDB: `MONGO_INITDB_ROOT_USERNAME`, `MONGO_INITDB_ROOT_PASSWORD`, `MONGO_INITDB_ROOT_PASSWORD_FILE`

Passwords are read only inside the target container command environment. Agent command objects do not accept passwords, so they are never used as a remote queue secret transport or uploaded in `backups.yaml`.

## Back up a Compose database

Configure without running the first backup:

```bash
snaper backup db appdb \
  --type postgresql \
  --compose-project production \
  --compose-service postgres \
  --compose-replica 1 \
  --configure
```

When multiple projects contain the same database name, give each backup service a unique alias and identify the database with `--source-name`:

```bash
snaper backup db production-postgres-1-appdb \
  --source-name appdb \
  --type postgresql \
  --compose-project production \
  --compose-service postgres \
  --compose-replica 1 \
  --configure
```

The dashboard generates these project/service-scoped aliases automatically.

Run the configured backup later:

```bash
snaper backup db appdb --type postgresql
```

Snaper resolves the current container from Compose labels for every operation. Recreating the container does not require updating a stored container ID.

PostgreSQL dumps are transactionally consistent. MySQL/MariaDB dumps use `--single-transaction` by default, which protects transactional tables such as InnoDB but not non-transactional tables. MongoDB standalone dumps are not a point-in-time snapshot while writes continue; for replica sets, plan a second batch to expose and validate an oplog-aware backup mode. Use a maintenance window or stop writers when consistency is mandatory.

Restore a snapshot into the configured Compose database:

```bash
snaper restore db appdb --type postgresql --latest --yes
snaper restore db appdb --type postgresql --snapshot dump_20260718120000.sql --clean --yes
```

`--clean` drops and recreates the target database before importing. Without it, restore uses the engine's normal import behavior against the existing database.

## Back up a named volume

Each configured volume is a separate Datashelter service with its own quota slot, schedule, retention policy, snapshots, and restore history.

```bash
snaper backup volume \
  --name production-postgres-data \
  --volume production_postgres-data \
  --compose-project production \
  --configure

snaper backup volume --name production-postgres-data
snaper list volume --name production-postgres-data
```

Volume backups are live filesystem snapshots. This avoids downtime, but it does not create an application-consistent database snapshot. Prefer the database backup for database recovery; select its data volume only when you also need a filesystem-level copy.

Snaper chooses the most capable safe representation for each run:

- An accessible `local`-driver volume is backed up with the normal Snaper file/index snapshot engine. This keeps deduplication, fine-grained restore, encryption, compression, integrity handling, and the normal file-snapshot storage layout. Its snapshot names are `index_<timestamp>.csv`.
- A Docker plugin volume, remote Docker daemon, or inaccessible host mountpoint falls back to a portable Docker helper archive. Archive names are `snapshot_<timestamp>.<random>.tar` or `.tar.zst` when compression is enabled. The helper has no network access; archive staging requires temporary disk space for at least the uncompressed volume contents, plus compression/encryption working space, in `general.tmp_file_location`.

Use `--snapshot-mode files` to require the indexed mode (and fail rather than fall back), `--snapshot-mode archive` to always use the portable helper, or leave the default `auto` to prefer indexed snapshots.

### Volume drivers and plugins

For an accessible built-in `local` volume, Snaper reads the Docker mountpoint with its normal file engine. Docker plugin volumes are not accessed through a driver-specific host path. Instead, the fallback asks Docker to mount the same volume in a short-lived helper container and archives its contents. Docker volume plugins expose a mount operation per consuming container, so the driver decides the attachment and locking behavior.

The built-in `local` driver is covered by the automated end-to-end backup/restore test. NFS, CIFS, block-storage, CSI, and vendor Docker plugins are **not yet certified**: they are not categorically blocked, but operators must validate backup and restore on their specific driver before production use. In particular, verify that the driver permits the additional helper mount, respects the read-only backup mount, and has a documented behavior for concurrent mounts and application consistency.

Bind mounts and `tmpfs` mounts are not Docker named volumes and are not eligible for this feature. Discovery reports the named volume's driver to make driver-specific validation possible.

Restore overlays the archived files by default:

```bash
snaper restore volume --name production-postgres-data --latest --yes
```

Use `--clear` to remove current contents first:

```bash
snaper restore volume \
  --name production-postgres-data \
  --snapshot index_20260718120000.csv \
  --clear \
  --yes
```

The restore command recognizes both formats. An indexed `index_*.csv` snapshot needs an accessible `local`-driver mountpoint on the restoring host; a portable `snapshot_*.tar[.zst]` archive is restored through Docker and is the appropriate choice for supported plugin drivers.

Stop every container using the volume before restoring. Snaper refuses to restore a mounted volume by default; `--allow-live-volume` is an explicit break-glass override for an operator who understands the consistency and data-loss risk.

## Restore a Compose deployment on a new host

Use this runbook when the new host must recover the Docker volumes and database dumps held in the same Datashelter bucket. Test it with the exact Compose project and volume driver before using it for an incident.

1. Install Docker Engine, Compose v2, and Snaper on the new host. Configure Snaper with the same object-storage bucket, credentials, and encryption key or key file as the original host. Without the original encryption material, encrypted snapshots cannot be restored.
2. Copy the Compose files, `.env` files, Docker secrets, and the relevant Snaper backup configuration. Keep the same Compose project name and named-volume names. For plugin-backed volumes, install and configure the same volume driver first.
3. Create the target named volumes but do **not** start application containers. Use the physical Docker volume name saved in the Snaper volume backup configuration (the `volume` field), not an assumed `<project>_<volume>` name: Compose `name:` and `external: true` declarations can use another physical name. Use the driver-specific creation command/options when applicable.
4. Restore every named-volume service while no container mounts it. An indexed `index_*.csv` snapshot requires the `local` Docker driver and a host-accessible mountpoint. Select a portable archive snapshot for a plugin-backed volume:

   ```bash
   snaper restore volume --name <backup-service-name> --latest --clear --yes
   ```

   Do not use `--allow-live-volume` for a new-host recovery. If the restore reports a mounted container, stop it and retry.
5. Start only the database services. Restore the native database dumps when they are part of the recovery plan:

   ```bash
   docker compose up -d postgres mysql mongo
   snaper restore db <backup-service-name> --type postgresql --latest --clean --yes
   ```

   Use the applicable database service/type for each backup. A native database restore is generally preferable to relying on a live filesystem snapshot of a database data directory.
6. Verify database/application health, then start the remaining services with `docker compose up -d`. Confirm the expected snapshot dates, schedules, and retention policies before declaring recovery complete.

Keep the original host offline or ensure that it cannot write to the same application database during recovery. For remote volume plugins, validate the driver's cross-host and multi-attach semantics separately; restoring files does not replace a driver-level replication or snapshot procedure.

## Agent Mode

Install or refresh the agent service after configuring the Docker environment:

```bash
snaper agent install
snaper agent status
```

The heartbeat reports Docker Engine and Compose availability. From the dashboard you can discover projects, configure databases and volumes, run backups, apply schedules and retention policies, and queue database or volume restores. Command logs are available while agent jobs run.

## Remove configuration

```bash
snaper delete db --name appdb --type postgresql
snaper delete volume --name production-postgres-data
```

Deleting a service configuration does not delete the Docker container or Docker volume.
