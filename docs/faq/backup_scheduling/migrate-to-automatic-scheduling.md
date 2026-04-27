---
description: "Migrate from manual crontabs to automatic Datashelter scheduling. Recommended: agent mode managed from the dashboard. Legacy: a Snaper-managed crontab block."
---

# How to migrate from manual crontabs to automatic scheduling?

If you already had crontabs set for Snaper, you have two options to move to automatic scheduling.

## Recommended: use agent mode

With [agent mode](/faq/agent/migrate-to-agent), you do not manage crontabs at all anymore. The agent runs as a daemon and triggers your backups itself, based on the schedules you set on the dashboard. On install, it also cleans up any `SNAPER MANAGED CRONTABS` block it finds so you do not end up running each backup twice.

Three commands on the server:

```bash
snaper update
snaper agent install
snaper agent status
```

Then remove any remaining manual `snaper` entries from your crontab, and set the schedules from the dashboard.

## Legacy: keep using crontabs

If you cannot (or do not want to) install the agent yet, you can still let Snaper manage crontabs for you:

1. Remove the crontabs you had set by hand.
2. Set the schedules from your dashboard — there is a dedicated button for it.

![Automatic scheduling](/assets/faq/crontab_scheduling.png)

Snaper will then write its own managed block in your crontab (see [What is `manage_crontab`?](/faq/backup_scheduling/manage-crontabs-parameter)).

::: callout warning
Setting `manage_crontab` to `false` and keeping your hand-written crontabs is **not recommended**: you will not receive email alerts when a backup fails.
:::
