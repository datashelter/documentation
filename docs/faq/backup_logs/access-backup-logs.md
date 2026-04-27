---
description: "View backup logs from the Datashelter dashboard with agent mode, or locally in /tmp/snaper/. Use 'snaper list files' to find backup names and paths."
---

# How to access backup logs?

## From the dashboard (recommended)

Since the release of [agent mode](/faq/agent/migrate-to-agent), backup logs are uploaded to your Datashelter bucket and can be viewed directly from the dashboard, next to each backup run. This is the easiest way to debug a failed backup or audit a successful one — no SSH required.

::: callout info
This requires the agent to be installed and running on your server. If you are still using legacy mode, follow the [migration guide](/faq/agent/migrate-to-agent) first, then your next backups will automatically publish their logs to the dashboard.
:::

## From the server

Backup logs are also written locally in the `/tmp/snaper` directory. Each backup has its own log file named after the backup. For example, if you have a backup named `crimson-surf`, its log will be available at `/tmp/snaper/crimson-surf.log`.

The easiest way to view it is with `tail`:

```bash
tail -n 100 /tmp/snaper/crimson-surf.log
```

## How to find the backup name associated with a specific path?
You can list all the backups configured on your server along with their corresponding paths using the following command:
```bash
snaper list files
```

This command will display a table with the backup names and their associated paths. For example, the output might look like this:
```
BACKUP NAME    PATH
-----------    ----
crimson-surf   /etc/nginx/sites-available
summer-sea     /etc/letsencrypt
damp-cloud     /var/www/blog
spring-fog     /var/www/blog-fr
purple-tree    /var/www/datashelter.tech
```
