---
sidebar_position: 5
description: Restauration d'un instantané (répertoire ou base de données) dans le chemin spécifié
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

##  Exemples d'utilisation
### Restaurer une base de données en utilisant un nom différent

Vous pouvez restaurer une base de données avec un nom différent en utilisant l'option `--restore-as`. 

```
snaper restore database --name <nom_de_la_base_de_données> --snapshot <nom_de_l'instantané> --restore-as <nouveau_nom_de_la_base_de_données>
```

### Restaurer un ensemble de fichiers spécifiques
Nos index sont des fichiers CSV, vous pouvez donc les éditer pour une restauration plus fine. Vous pouvez trouver votre fichier d'index dans le répertoire _.config/snaper/index_cache_.

Ensuite, exécutez la commande suivante pour restaurer l'index :

```
snaper restore --name <nom_backup> --snapshot <fichier_index> --path <chemin_où_restaurer>
```

### Exporter une sauvegarde de base de données vers un fichier
Vous pouvez exporter un dump de base de données vers un fichier en utilisant l'option `--export`. Cela créera un fichier portant le nom de la base de données dans votre répertoire actuel.

```
snaper restore database --name <database_name> --snapshot <snapshot_name> --export
```
