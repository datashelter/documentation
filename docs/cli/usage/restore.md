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
        snaper restore files --snapshot <snapshot_name> --name <backup_name> --path /where/to/restore

        Flags:
            --all                          Restore all directories configured
            --concurrent int               Desired number of concurrent workers
            --encryption-key string        Encryption key to use for encrypting data
            --encryption-key-file string   Encryption key file to read for encrypting data
        -f, --force                        Ignore errors that could occur during restore
        -h, --help                         help for files
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

##  Examples
### Restore a database using a different name 

You can restore a database using a different name by using the `--restore-as` flag. 

```
snaper restore database --name <database_name> --snapshot <snapshot_name> --restore-as <new_database_name>
```

### Restore only specific files
Our indexes are CSV files, so you can edit them for a fine-grained restore. You can find your index file in the _.config/snaper/index_cache_ directory

Then, execute the following command to restore the index:

```
snaper restore --name <backup_name> --snapshot <index_filename> --path <path_where_to_restore>
```

### Export a database dump to a file
You can export a database dump to a file by using the `--export` flag. It will create a file with the name of the database in your current directory.

```
snaper restore database --name <database_name> --snapshot <snapshot_name> --export
```
