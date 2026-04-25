---
description: "Receive email alerts when scheduled backups fail or go missing. Ad-hoc manual backups don't trigger alerts. Datashelter monitors backups scheduled through agent mode or managed crontabs for you."
---

# Which email alerts will I receive?

You will receive email alerts for every backup that is **scheduled from your dashboard** — whether scheduling is handled by [agent mode](/faq/agent/migrate-to-agent) or by a [managed crontab](/faq/backup_scheduling/manage-crontabs-parameter).

Two situations trigger an alert:

- **A scheduled backup fails** — the job ran but did not complete successfully.
- **A scheduled backup is missing** — Datashelter did not receive the backup within the time window it was supposed to run in.

Ad-hoc backups you launch manually (for example, `snaper backup files` for testing) never trigger alerts, so you don't get paged for one-off runs.

::: callout info
With agent mode, you can also review the full log of each backup run directly from the dashboard — no SSH required. See [How to access backup logs](/faq/backup_logs/access-backup-logs).
:::
