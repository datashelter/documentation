---
sidebar_position: 4
description: List available snapshots for a a backup (files or databases)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# list
    

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
        ```
        List available snapshots for a specified name/path

        Usage:
        snaper list files [flags]

        Flags:
        -h, --help          help for files
        -n, --name string   Name of the backup
        -p, --path string   Backuped path
        ```
  </TabItem>
  <TabItem value="databases" label="Databases">
        ```
        List available dumps for a specified database name

        Usage:
        snaper list database [flags]

        Aliases:
        database, db

        Flags:
        -h, --help          help for database
        -n, --name string   Database name
        -t, --type string   Database type (mysql, postgresql)
        ```
  </TabItem>
</Tabs>