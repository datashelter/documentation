---
sidebar_position: 3
description: Prise d'instantané d'un répertoire/d'une base de données et envoi vers Datashelter
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
    MySQL et PostgreSQL supportent les connexions par socket. Cette méthode sera essayée par défaut si vous spécifiez "localhost" comme hôte (valeur par défaut). Si vous souhaitez forcer la connexion par TCP/IP, spécifier 127.0.0.1 à la place
:::

##  Exemples d'utilisation
### Sauvegarde d'un répertoire en excluant des fichiers
```bash
# Exclure les répertoires de cache et de logs
snaper backup files /path/to/backup --exclude "var/cache*,var/log*"

# Inclure uniquement les fichiers Python, sauf les tests
snaper backup files /project --include "*.py" --exclude "*test*.py,*_test.py"

# Exclure tous les node_modules, à n’importe quelle profondeur
snaper backup files ./app --exclude "**/node_modules"

# Exclure tous les .log sauf error.log à la racine
snaper backup files /app --include "error.log" --exclude "*.log"
```

## Options de filtrage (pattern matching)

### Règles de correspondance

* Les chemins sont **relatifs au répertoire sauvegardé**.
  Ex : sauvegarder `/home/user` → `Documents` correspond à `/home/user/Documents`.

* Le slash (`/`) a une importance :

  * `myfile` → tous les fichiers nommés *myfile*
  * `dir/myfile` → seulement ceux dans `dir`
  * `/myfile` → uniquement à la racine

* Motifs utiles :

  * `*` → n’importe quelle chaîne (`*.log`, `cache*`)
  * `**` → récursif (`**/logs/**`)
  * `?` → un seul caractère (`file?.txt`

### Ordre de priorité

1. Les **inclusions** sont évaluées **avant** les exclusions.
2. Si un fichier correspond aux deux, **il est exclu**.

Exemple :

```bash
snaper backup files /project \
  --include "*.py" \
  --exclude "*test*.py"
```

Les fichiers Python sont inclus, mais les fichiers de test sont ignorés.
