---
description: "Backup logs follow the same retention rules as their backups—kept and pruned together. No extra config; logs add negligible cost and provide audit trails."
---

# How long are my backup logs kept?

Backup logs follow the exact same retention rules as the backups they describe. A log is kept for as long as its corresponding backup is kept, and is pruned at the same time.

## Why we did it this way

- **Simplicity** — one retention policy to configure, not two. If a backup is still in your history, its log is too.
- **Negligible cost** — a backup log is usually a few kilobytes at most, so keeping it alongside the backup adds no meaningful storage cost.
- **Useful trail** — you always have a matching execution log for any backup you can still restore, which is exactly when you are most likely to need it (debugging, audit, incident review).

No extra configuration is required: pick the retention policy that fits your backups, and your logs will follow.
