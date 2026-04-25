---
description: "The Snaper agent automatically manages crontabs when installed. It removes the SNAPER MANAGED CRONTABS block on startup and restores it if you disable agent mode, preventing duplicate backup runs."
---

# How does the agent manage my crontabs?

Agent mode and crontab-based scheduling both want to be in charge of running your backups. To avoid running every backup twice (once from cron, once from the agent), the Snaper agent actively manages the `SNAPER MANAGED CRONTABS` block for you.

## When the agent scheduler is enabled

On startup, the agent:

1. Reads your current crontab.
2. Removes the `SNAPER MANAGED CRONTABS` block (the one Snaper writes when `manage_crontab` is on).
3. Saves a copy of that block in its working directory, at `state/crontab-backup.txt`.
4. Runs as a daemon and triggers your backups itself based on the schedules configured on the dashboard.

From that point on, your crontab no longer contains any Snaper entries, and the agent is the only thing running your backups.

::: callout info
Hand-written crontab entries that are not inside the `SNAPER MANAGED CRONTABS` block are never touched. The agent only removes the block it owns.
:::

## When you switch back to manual scheduling

If you disable the agent scheduler (or stop the agent), Snaper puts things back the way it found them:

1. Reads the backup it saved at `state/crontab-backup.txt`.
2. Writes the `SNAPER MANAGED CRONTABS` block back into your crontab.

You end up exactly in the state you were in before installing the agent — no lost schedules, no duplicated runs.

## TL;DR

- **Agent mode on** → crontab block removed, agent runs backups as a daemon.
- **Agent mode off** → crontab block restored, Snaper runs backups through cron again.

You do not have to touch your crontab manually during this transition. If you want to migrate to agent mode, follow the [migration guide](/faq/agent/migrate-to-agent).
