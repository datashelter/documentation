---
description: "Snapshot a directory/database and upload it to remote"
---


# backup

::: tabs

    == tab "Files"
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


    == tab "Databases"
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


:::

::: callout info
  MySQL and PostgreSQL support socket connections. This method will be attempted by default if you specify "localhost" as the host (which is the default value). If you want to force a TCP/IP connection instead, specify 127.0.0.1.
:::

## Usage Examples
### Backup a directory while excluding files
```bash
# Exclude a specific directory and all its contents
# When backing up /var, exclude /var/cache and everything inside it
snaper backup files /var --exclude "/var/cache"

# Exclude multiple subdirectories (cache and log)
snaper backup files /path/to/backup --exclude "var/cache,var/log"

# Exclude all node_modules directories at any depth
snaper backup files ./app --exclude "**/node_modules"

# Exclude all .log files at any depth
snaper backup files /app --exclude "*.log"

# Include one directory and all of its contents
snaper backup files /project --include "src"

# Include only Python files, except tests (using ** for recursive matching)
snaper backup files /project --include "**/*.py" --exclude "**/*test*.py,**/*_test.py"
```

## Filtering Options (Pattern Matching)

### Try a filter before running it

Use the [file-filter builder](/cli/usage/file-filter-builder) to edit a backup command, test it against sample paths, and generate the matching configuration values.

### Matching Rules

* Patterns match against the **full absolute path** of files and directories.
  Ex: backing up `/home/user` with pattern `Documents` → matches `/home/user/Documents`.

* Relative patterns are converted to absolute:
  * `logs` becomes `/path/to/backup/logs`

* A literal path (one without wildcard characters) selects that path. If it is a directory, it selects the directory and all of its contents. A trailing slash is optional:

  * `myfile` → `/path/to/backup/myfile`
  * `dir` or `dir/` → `/path/to/backup/dir` and everything below it
  * `/path/to/backup/cache` or `/path/to/backup/cache/` → the same cache subtree

* Patterns containing wildcard characters are glob patterns. Snaper currently evaluates them against the whole path, so `*` and `**` can both span directory separators. Use `**` when you want to make recursive intent explicit:

  * `**/myfile` → any file named `myfile` at any depth
  * `*.log` or `**/*.log` → `.log` files at any depth
  * `**/node_modules` → any `node_modules` directory and all of its contents
  * `?` → a single-character wildcard (`file?.txt`)

The same rules apply to the `included_paths` and `excluded_paths` values in the backup configuration.

### Priority Order

1. **Inclusions** select the paths eligible for backup.
2. **Exclusions** are then applied. If a path matches both, **it is excluded**.

Example:

```bash
snaper backup files /project \
  --include "**/*.py" \
  --exclude "**/*test*.py"
```

All Python files are included, but test files are excluded.
