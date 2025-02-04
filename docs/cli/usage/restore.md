---
sidebar_position: 5
description: Restore a snapshot (directory or database) to specified path
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# restore

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
        ```
        Restore a specified snapshot from remote to specified path

        Usage:
        snaper restore files [flags]

        Aliases:
        files, fs, filesystem

        Examples:
        snaper restore files --name <backup_name> --path /where/to/restore --snapshot <snapshot_name>

        Flags:
            --all                          Restore all directories configured
            --concurrent int               Desired number of concurrent workers
            --encryption-key string        Encryption key to use for encrypting data
            --encryption-key-file string   Encryption key file to read for encrypting data
            --exclude strings              Exclude files matching the pattern (comma separated)
        -f, --force                        Ignore errors that could occur during restore
        -h, --help                         help for files
            --include strings              Include only files matching the pattern (comma separated)
            --latest                       Select latest snapshot existing on remote
        -n, --name string                  Backup name to restore
        -p, --path string                  Path where to restore
        -s, --snapshot string              Index name of the snapshot to restore
        -y, --yes                          Do not ask for confirmation
        ```
  </TabItem>
  <TabItem value="databases" label="Databases">
        ```
        Restore a specified database dump from remote to specified path

        Usage:
        snaper restore database [flags]

        Aliases:
        database, db, databases

        Examples:
        snaper restore db --snapshot <snapshot_name> --name mydb --type mysql

        Flags:
            --all                          Restore all databases configured in config.yaml
            --encryption-key string        Encryption key to use for encrypting data
            --encryption-key-file string   Encryption key file to read for encrypting data
            --export                       Export the database dump to a file
        -h, --help                         help for database
        -H, --host string                  Hostname of the database server (default "localhost")
            --latest                       Retrieve latest snapshot from remote
        -n, --name string                  Database name to restore
        -p, --password string              Password to use to restore the database
        -P, --port int                     Port of the database server
            --restore-as string            Restore database with a different name
        -s, --snapshot string              Name of the snapshot to be retrieved (ignored if --all or --latest)
        -t, --type string                  Database type (mysql, postgresql)
        -u, --username string              Username to use to restore the database
        ```
  </TabItem>
</Tabs>

## Restore backups on a new server
Please take a look on our blogpost "[How to restore your backups on a new server](https://datashelter.tech/blog/restore-my-backups-on-a-new-server/)" to know more.

##  Examples
### Restore a database using a different name 

You can restore a database using a different name by using the `--restore-as` flag. 

```
snaper restore database --name <database_name> --snapshot <snapshot_name> --restore-as <new_database_name>
```

### Restore only specific files
**Method 1:**
You can use the parameter --include to restore only specific files. The parameter accepts a comma-separated list of patterns.
```
snaper restore files --name <backup_name> --include "directory/*,README.md" --path <path_where_to_restore> --latest
```

**Method 2:**
Alternatively, you can edit CSV index files to restore only specific files. You can find your last index files in the _.config/snaper/index_cache_ directory

Modify one of the index files and restore it using the following command:
```
snaper restore --name <backup_name> --snapshot <index_filename> --path <path_where_to_restore>
```

### Export a database dump to a file
You can export a database dump to a file by using the `--export` flag. It will create a file with the name of the database in your current directory.

```
snaper restore database --name <database_name> --snapshot <snapshot_name> --export
```
