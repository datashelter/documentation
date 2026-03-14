---
description: Delete a backup from backups list (files or databases)
---


# delete

::: callout info
**Snaper cannot delete any snapshots from remote storage.** It can only remove a backup from the list of backups (useful to repair mistyped commands).

Snapshot deletion can only be performed through lifecycle rules on the remote storage. Please [contact our support](/support) to learn more about this feature.
:::

::: tabs

    == tab "Files"
                ```
                Delete a file backup from backups list

                Usage:
                snaper delete files [flags]

                Aliases:
                files, fs, filesystem

                Flags:
                -h, --help          help for files
                -n, --name string   Name of the backup
                -p, --path string   Path of the backup (if you don't know the name)
                ```


    == tab "Databases"
                ```
                Delete a database from backups list

                Usage:
                snaper delete database [flags]

                Aliases:
                database, db, databases

                Flags:
                -h, --help          help for database
                -n, --name string   Name of the database
                ```


:::

## Delete a misconfigured service from snaper
You may have misconfigured a service and want to delete it from snaper (this change will also be reflected on your dashboard). To do so, just launch the following command in your terminal, replacing `<service_name>` with the name of the backup you want to delete:

```bash
snaper delete [files|db] --name <service_name>
```
