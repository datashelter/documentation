---
description: "The Snaper agent cannot run arbitrary commands on your machine—only hard-coded actions like backup, list, delete, browse, and update, all signed and scoped."
---

# Can the Snaper agent run arbitrary commands on my machine?

No. The agent does not expose a shell, an SSH session, or any generic "run command" endpoint. It only reads instructions from your private Datashelter S3 bucket and executes a fixed, hard-coded set of actions.

## What the agent can do

When the agent polls its bucket, it will only act on these command types:

- **`backup`** — trigger a configured file, database, or Docker volume backup
- **`restore`** — restore an explicitly selected database or Docker volume snapshot
- **`compose`** — discover Docker Compose projects using the fixed `discover --json` action
- **`list`** — list existing backups
- **`delete`** — delete a backup from the index
- **`browse`** — build or refresh the remote browse index so you can explore your backups from the dashboard
- **`db_discover`** — probe local database engines to list reachable instances
- **`configure_db`** — refresh the database connection parameters stored in your config
- **`update`** — upgrade the Snaper binary to the latest released version

Any other payload is ignored.

Database and Docker volume restores can be queued from the dashboard. File restore continues to use the generated Snaper command or the fine-grained file restore workflow.

## Why this is safe

- The agent never opens an inbound port. It only makes outbound calls to your S3 bucket and to Datashelter's API.
- The command list is hard-coded in the binary. A malicious payload cannot ask the agent to run `rm -rf` or any other shell command.
- Commands are scoped to the configured agent queue prefix. The agent validates the command type and rejects command payloads that carry environment variables, so the queue cannot act as a secret or arbitrary process-environment transport.
- You can audit exactly what the agent is doing at any time with `snaper agent status` and the logs under `/tmp/snaper`.
