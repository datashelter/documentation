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

        Examples:
        snaper backup files /path/to/backup
        snaper backup files mybackup

        Flags:
              --all                          Backup all directories configured
              --concurrent int               Number of concurrent workers to use for upload
              --configure                    Only configure the backup without running it
              --encryption-key string        Encryption key to use for encrypting data
              --encryption-key-file string   Encryption key file to read for encrypting data
              --exclude strings              Paths to exclude from backup (separated by commas)
              --follow-symlinks              Follow symlinks when backing up files
          -h, --help                         help for files
              --ignore-existing              Check for existing files on S3 and ignore them (only for bug fixing)
              --include strings              Paths to include in backup (separated by commas)
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
          database, db, databases

        Examples:
        snaper backup db mydatabase --type mysql
        snaper backup db --all

        Flags:
              --all                          Backup all databases configured in config.yaml
              --all-databases                Backup all databases existing on the server
              --auth-db string               Authentication database (mongodb only)
              --configure                    Only configure the backup without running it
              --direct-connection            Use direct connection to the database (mongodb only)
              --encryption-key string        Encryption key to use for encrypting data
              --encryption-key-file string   Encryption key file to read for encrypting data
          -h, --help                         help for database
              --hex-blob                     Dump binary columns using hexadecimal notation (mysql only)
          -H, --host string                  Hostname of the database server (default "localhost")
          -n, --name string                  Database name to backup
          -p, --password string              Password to use for connecting to the database (prefer using MYSQL_PASSWORD/PGPASSWORD/MONGODB_PASSWORD)
          -P, --port int                     Port of the database server
              --routines                     Backup database routines like functions of procedures (mysql only)
              --single-transaction           Dump all tables in a single transaction (mysql only)
              --triggers                     Backup database triggers (mysql only)
          -t, --type string                  Database type (mysql, postgresql)
          -u, --username string              Username to use for connecting to the database

        Global Flags:
              --concurrent   Run file and database backups concurrently
        ```
  </TabItem>
</Tabs>

:::note
  MySQL and PostgreSQL support socket connections. This method will be attempted by default if you specify "localhost" as the host (which is the default value). If you want to force a TCP/IP connection instead, specify 127.0.0.1.
:::

## Examples
### Backup excluding cache and log directories
```bash
snaper backup files /path/to/backup --exclude "var/cache*,var/log*"
```
