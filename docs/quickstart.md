---
sidebar_position: 2
---

# Quickstart

## Create an account on Datashelter

Create an account on [Datashelter](https://app.datashelter.tech).


## Add you first server

Add your first server on the dashboard. You will be prompted to install the snaper CLI on your server and to configure it.

## Setup recurring backups

Once the snaper CLI is installed and configured, you can setup crontabs to schedule your backups.

```
crontab -e
---
# Backup your files every day at 3am
0 3 * * * /usr/local/bin/snaper backup --all 2>&1 >> /var/log/snaper.log
```

## Enjoy 🚀

We will take care of the rest for you. You can now relax and focus on your business. We’ll alert you if something goes wrong and keep your backups safe and secure.