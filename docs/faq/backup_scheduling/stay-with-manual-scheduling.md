---
description: "Keep Snaper out of your crontab and run backups manually if you prefer. Warning: you'll miss alerts when expected backups are missing—you only receive alerts for active backup failures without automatic scheduling."
---

# Can I keep running my backups on manual crontabs?

Yes. Agent mode is the recommended setup, but nothing forces you to use it — if you prefer to keep Snaper out of your crontab and run backups from your own cron entries, that is entirely supported.

::: callout warning
If Snaper does not manage your scheduling (neither through the agent nor through `manage_crontab`), Datashelter cannot know *when* a backup was supposed to run. You will **not** receive email alerts when an expected backup is missing, only when one actively fails. This is a meaningful downgrade of your monitoring — make sure it is what you want.
:::

If you are on the fence, see:

- [How to migrate from manual crontabs to automatic scheduling](/faq/backup_scheduling/migrate-to-automatic-scheduling)
- [How to migrate from legacy mode to agent mode](/faq/agent/migrate-to-agent)

Still unsure? Reach out to [support@datashelter.tech](mailto:support@datashelter.tech) and we'll help you pick the right setup for your server.
