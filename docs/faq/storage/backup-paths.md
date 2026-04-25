---
description: "Back up application data and system configs: /etc, /home, /var/www, /var/lib. Skip temporary data, cache, logs, and dependencies. File-level backups let you choose exactly what to protect."
---

# Which paths should I back up?

Datashelter performs **file-level backups**, meaning you choose exactly which directories and files should be protected. The goal is typically to back up **application data and system configurations** that would be required to restore your services after an incident.

The exact paths depend on your operating system and application stack, but some common locations include:

* **`/etc`** — System and application configuration files
* **`/home`** — User data and personal files
* **`/var/www`** — Website files and web application code

Depending on your setup, you may also want to back up directories containing **application data**, such as `/var/lib`.

### What should not usually be backed up

With file-level backups, it is generally unnecessary to back up **temporary or reproducible data**, such as:

* cache directories
* temporary files
* system logs
* application dependencies that can be reinstalled

Excluding these paths helps **reduce backup size and improve efficiency**.
