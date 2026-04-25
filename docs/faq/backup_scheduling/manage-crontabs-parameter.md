---
description: "The manage_crontab parameter lets Snaper write its own crontab block based on dashboard schedules. Agent mode is now recommended, but this legacy option still works for systems preferring cron-based automation."
---

# What is the `manage_crontab` parameter?

`manage_crontab` lets Snaper write and update its own block of crontab entries based on the schedules you set from your dashboard. It was the original way to automate backups before [agent mode](/faq/agent/migrate-to-agent) was introduced.

When enabled, Snaper maintains a dedicated block in your crontab:

```bash
# SNAPER MANAGED CRONTABS
5 1 * * * /usr/local/bin/snaper backup files --name lingering-moon >> /tmp/snaper.log 2>&1
# END OF SNAPER MANAGED CRONTABS
```

Anything outside this block is never touched.

::: callout info
Agent mode is now the recommended way to schedule backups. The agent runs as a daemon, removes this crontab block on startup, and triggers backups itself. `manage_crontab` still exists for legacy setups and is restored automatically if you ever switch the agent scheduler off. See [How does the agent manage my crontabs?](/faq/agent/agent-crontab-management).
:::
