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
        snaper restore files --name <backup_name> --path /where/to/restore --snapshot <snapshot_name>

        Flags:
            --all                          Restore all directories configured
            --concurrent int               Desired number of concurrent workers
            --encryption-key string        Encryption key to use for encrypting data
            --encryption-key-file string   Encryption key file to read for encrypting data
            --exclude strings              Exclude files matching the pattern (comma separated)
            --export                       Export restored files to a .tar.gz archive (specified with --path)
        -f, --force                        Ignore errors that could occur during restore
        -h, --help                         help for files
            --ignore-existing              Skip files that already exist at the restore destination
            --include strings              Include only files matching the pattern (comma separated)
            --latest                       Select latest snapshot existing on remote
        -n, --name string                  Backup name to restore
        -p, --path string                  Path where to restore
        -s, --snapshot string              Index name of the snapshot to restore
        -y, --yes                          Do not ask for confirmation

        Global Flags:
            --log string   Path to log file (creates directory if needed)
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

## Restaurer mes sauvegardes sur un nouveau serveur
Nous vous invitons à consulter l'article que nous avons rédigé à ce sujet: "[Restaurer mes sauvegardes sur un nouveau serveur](https://datashelter.tech/fr/blog/restaurer-mes-sauvegardes-sur-un-nouveau-serveur/)".

##  Exemples d'utilisation
### Restaurer une base de données en utilisant un nom différent

Vous pouvez restaurer une base de données avec un nom différent en utilisant l'option `--restore-as`. 

```
snaper restore database --name <nom_de_la_base_de_données> --snapshot <nom_de_l'instantané> --restore-as <nouveau_nom_de_la_base_de_données>
```

### Restaurer seulement certains fichiers
**Méthode 1:**
Vous pouvez utiliser le paramètre --include pour restaurer uniquement des fichiers spécifiques. Le paramètre accepte une liste de patterns séparés par des virgules.
```
snaper restore files --name <nom_de_la_sauvegarde> --include "directory/*,README.md" --path <répertoire_de_restauration> --latest
```

**Méthode 2:**
Vous pouvez également ré-éditer un index (format CSV) pour une restauration plus fine. Vos derniers fichiers d'index se situent dans le répertoire _.config/snaper/index_cache_.

Copier un index sous un autre nom et éditez-le à votre guise, par exemple en supprimant des lignes. Restaurez-le ensuite en utilisant la commande:
```
snaper restore --name <nom_de_la_sauvegarde> --snapshot <fichier_index> --path <chemin_où_restaurer>
```

### Exporter une sauvegarde de base de données vers un fichier
Vous pouvez exporter un dump de base de données vers un fichier en utilisant l'option `--export`. Cela créera un fichier portant le nom de la base de données dans votre répertoire actuel.

```
snaper restore database --name <database_name> --snapshot <snapshot_name> --export
```
