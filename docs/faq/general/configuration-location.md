---
description: "Snaper config lives in ~/.config/snaper/. Main files: config.yaml, .encryption_key, index_cache/, and lock files for process safety and key integrity."
---

# Where is my config located?

Snaper's configuration lives in the `~/.config/snaper` directory. You will typically find the following files there:

- **`config.yaml`** — your main configuration file, edited through the `snaper init` and `snaper config` commands.
- **`.encryption_key`** — holds your encryption key.
- **`.<hash>.key.lock`** — a small marker file that records which encryption key your backups were created with. It prevents you from silently switching key mid-flight, which would make every previous backup impossible to restore.
- **`config.yaml.lock`** — a process lock used to make sure two Snaper commands do not try to mutate the config at the same time.
- **`index_cache/`** — keeps your latest backup indexes on disk for faster runs. We retain the most recent index locally; older ones are pulled from S3 on demand.
