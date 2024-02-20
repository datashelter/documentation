---
sidebar_position: 3
description: Snapshot a directory/database and upload it to remote
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# backup

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
        ```
        Snapshot a directory and upload it to remote

        Usage:
        snaper backup files [flags]

        Aliases:
        files, fs, filesystem

        Flags:
            --all                          Backup all directories configured
            --concurrent int               Number of concurrent workers to use for upload
            --encryption-key string        Encryption key to use for encrypting data
            --encryption-key-file string   Encryption key file to read for encrypting data
            --exclude strings              Paths to exclude from backup (separated by commas)
        -h, --help                         help for files
        -n, --name string                  Name of the backup (optional)
        -p, --path string                  Directory path to backup (optional)
        ```
  </TabItem>
  <TabItem value="databases" label="Databases">
        ```
        Dump a database and upload it to remote

        Usage:
        snaper backup database [flags]

        Aliases:
        database, db

        Flags:
            --all                          Backup all databases configured in config.yaml
            --all-databases                Backup all databases existing on the server
            --encryption-key string        Encryption key to use for encrypting data
            --encryption-key-file string   Encryption key file to read for encrypting data
        -h, --help                         help for database
        -H, --host string                  Hostname of the database server (default "localhost")
        -n, --name string                  Database name to backup
        -p, --password string              Password to use for connecting to the database
        -P, --port int                     Port of the database server
        -t, --type string                  Database type (mysql, postgresql)
        -u, --username string              Username to use for connecting to the database
        ```
  </TabItem>
</Tabs>