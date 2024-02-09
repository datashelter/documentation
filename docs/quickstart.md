---
sidebar_position: 2
---

# Quickstart

## Create an account on Datashelter

Create an account on [Datashelter](https://app.datashelter.tech).


## Add you first server

Add your first server to the dashboard. You will be prompted to install the snaper CLI on your server and configure it.

## Setup recurring backups

Once the snaper CLI is installed and configured, you can setup crontabs to schedule your backups.

```
crontab -e
---
# Backup your files every day at 3am
0 3 * * * /usr/local/bin/snaper backup files --all 2>&1 >> /var/log/snaper.log
```

## Enjoy 🚀
Relax and focus on your business while we handle your backups. We'll alert you of any issues and keep your backups safe and secure.
