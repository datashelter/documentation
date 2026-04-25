---
description: "Migrate from cron-based to agent mode in three commands. The agent replaces crontab scheduling, enables remote backup browsing, and keeps Snaper automatically updated without manual intervention required."
---

# How do I migrate from legacy mode to agent mode?

Agent mode replaces the previous "cron + one-shot `snaper backup`" model with a long-running service that handles scheduling, browsing, and updates for you.

## What changes

- **Scheduling** — you no longer pick an exact time. You pick a one-hour window on the dashboard, and Datashelter automatically assigns the precise minute inside that window to spread load across servers.
- **No more crontabs** — if automatic scheduling is enabled, the agent runs backups itself. You can remove the `snaper` entries from your crontab.
- **Remote browsing** — the agent maintains a remote index of your backups so you can browse files and databases directly from the dashboard.
- **Automatic updates** — the agent keeps Snaper up to date on its own when a new release is published.

## How to migrate

Three commands, on the server you want to migrate:

```bash
snaper update
snaper agent install
snaper agent status
```

- `snaper update` makes sure you are on a version that ships the agent.
- `snaper agent install` registers the agent as a service (`systemd` or `supervisord` depending on your host) and starts it.
- `snaper agent status` confirms the service is running and shows a health snapshot (browse index state, queued/running tasks, last remote poll).

Once the agent is running, delete any leftover `snaper` crontab entries so backups only run once.

::: callout info
See the [`snaper agent` command reference](/cli/usage/agent) for all the subcommands (`start`, `stop`, `restart`, `uninstall`, `info`, `reset`, …).
:::
