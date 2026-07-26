---
description: "A focused verification checklist for Snaper Docker Compose database and volume backup support."
---

# Test Docker Compose support

Use a disposable Compose project with PostgreSQL, MySQL or MariaDB, and MongoDB. Add one named volume per engine and insert a recognizable row or document in each database.

## CLI smoke test

1. Run `snaper compose discover --json` and confirm the project, services, database names, replica number, and named volumes are present.
2. Configure one database using `--compose-project` and `--compose-service`, then run `snaper backup db <name> --type <type>`.
3. Modify the source data, restore the snapshot with `--clean --yes`, and verify the original data returns. For MySQL/MariaDB, include an InnoDB write workload; for MongoDB, test under the topology and write-consistency policy used in production.
4. Configure an accessible `local` named volume, back it up, and confirm the listed snapshot is `index_*.csv` rather than a tar archive. Create an extra file in the volume, then confirm restore refuses while a container mounts it. Stop every container using the volume, restore with `--clear --yes`, and verify the extra file is gone.
5. Configure a plugin-backed volume (or force `--snapshot-mode archive`) and verify the fallback snapshot is `.tar` without compression or `.tar.zst` with compression. Repeat the mutate/restore test.
6. Recreate the database container with `docker compose up -d --force-recreate`; run the configured backup again to prove container IDs are resolved dynamically.
7. Repeat credential discovery with a standard password environment variable and with its `_FILE` Docker secret variant.

## Agent and dashboard smoke test

1. Confirm the heartbeat reports both Docker and Compose as available.
2. Run Compose discovery from the setup wizard or the server's Docker Compose action.
3. Select a database and a volume. Confirm each consumes one service quota slot and receives its own schedule and retention policy.
4. Start both backups and follow each command log until completion.
5. Open the database snapshot and queue a clean restore. For a volume, stop all containers using it before queueing an overlay restore or a clear restore; verify the dashboard requires an explicit confirmation.
6. Confirm no password appears in the gateway command object, command log, heartbeat, or uploaded `backups.yaml`.

## Failure cases

- Remove Docker socket access and confirm discovery reports an actionable capability error.
- Stop a database container and confirm backup fails without falling back to a stale container ID.
- Select an unavailable volume and confirm configuration fails before it is written.
- Exceed the service quota and confirm the dashboard rejects the batch before commands are queued.
- Use a container image without the database client tool and confirm discovery or backup reports the missing executable.
- Start a restore without `--yes` in the CLI and confirm it refuses to proceed non-interactively.
- Attempt a volume restore while a running container mounts it and confirm the agent reports the mounted-volume safeguard instead of downloading or overwriting data.
- For each non-`local` volume driver in use, run the same backup/mutate/restore cycle in a non-production environment and verify the driver accepts the additional helper-container mount.

Volume snapshots are intentionally live. For consistency-sensitive workloads, test with application writers stopped and rely on the engine-native database backup as the primary recovery path.
