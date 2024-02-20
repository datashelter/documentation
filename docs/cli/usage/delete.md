---
sidebar_position: 6
description: Delete a backup from backups list (files or databases)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# delete

:::note
**snaper cannot delete any snapshots from remote storage.** It can only remove a backup from the list of backups (usefull to repair mistaped commands).

Snapshot deletion can only be performed through lifecycle rules on the remote storage. Please [contact our support](/support) to know more about this feature.
:::

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
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
  </TabItem>
  <TabItem value="databases" label="Databases">
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
  </TabItem>
</Tabs>
