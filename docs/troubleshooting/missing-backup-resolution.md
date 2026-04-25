---
description: "Backup incident troubleshooting: Check dashboard service list for outdated snapshot dates, review logs in /tmp/snaper or dashboard, retry manual backup, then contact support with server name, service name, and error details."
---

# Backup incident troubleshooting guide

This guide walks you through the steps to identify and resolve backup issues reported via email. The goal is to help you fix the problem quickly, or gather the right information before reaching out to our support team.

## Step 1: Spot services with errors

1. Log in to your Datashelter dashboard.
2. Click on **Servers**, then select the server in question.
3. You'll see a list of your services, each showing the date of the last snapshot.
4. If a service has no date, or the date looks outdated, it's likely where the issue is.

> **Tip:** keeping an eye on snapshot dates helps catch problems early.

![Services list](/assets/troubleshooting/services_list.png)

## Step 2: Check the backup logs

If you are running [agent mode](/faq/agent/migrate-to-agent), open the affected backup from your dashboard — the full log of the last run is displayed there, no SSH required.

If you prefer to read them directly on the server, logs are stored in `/tmp/snaper`. For example, the `crimson-surf` backup log lives at `/tmp/snaper/crimson-surf.log`:

```bash
tail -n 100 /tmp/snaper/crimson-surf.log
```

You can list every backup configured on the server and its path with:

```bash
snaper list files
```

Example output:

```
BACKUP NAME    PATH
-----------    ----
crimson-surf   /etc/nginx/sites-available
summer-sea     /etc/letsencrypt
damp-cloud     /var/www/blog
spring-fog     /var/www/blog-fr
purple-tree    /var/www/datashelter.tech
```

## Step 3: Try a manual backup

Once you've identified the service, re-run its backup manually:

```bash
snaper backup <files/database> --name <servicename>
```

Example:

```bash
snaper backup files --name crimson-surf
```

If the backup completes successfully, you're done. If it fails again, move on to the next step.

## Step 4: Get in touch with support

Still stuck? We're here to help.

You can contact us:
- Through the live chat on your dashboard
- By email at [support@datashelter.tech](mailto:support@datashelter.tech)

To help us assist you quickly, please provide:
- The name of your server
- The name of the affected service
- If possible, the error message you're seeing
