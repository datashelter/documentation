# Configuration parameters
## General Parameters

| Parameter             | Type    | Default Value                      | Usage / Description                                                        | Possible Values                  |
|-----------------------|---------|------------------------------------|----------------------------------------------------------------------------|----------------------------------|
| LogLevel              | string  | "info"                            | Logging verbosity. Controls log output level.                              | debug, info, warn, error         |
| IndexCacheDir         | string  | "$CONFIG_DIR/index_cache"         | Directory for storing index cache files.                                   | Any valid path                   |
| TmpFileLocation       | string  | OS temp dir                        | Directory for temporary files.                                             | Any valid path                   |
| TmpFileThreshold      | int64   | 10485760 (10 MB)                   | Threshold (in bytes) for using temp files.                                 | Any positive integer             |
| BlockFileThreshold    | int64   | 4194304 (4 MB)                     | Threshold (in bytes) for splitting files into blocks.                      | Any positive integer             |
| EncryptionKeyFile     | string  | "$CONFIG_DIR/.encryption_key"     | Path to file containing the encryption key.                                | Any valid path                   |
| EncryptionKey         | string  | ""                                | The encryption key itself (read from file).                                | Any string                       |
| EnableCompression     | bool    | true                               | Enable ZSTD compression for uploads/downloads.                             | true, false                      |
| EnableMD5Checksum     | bool    | false                              | Enable MD5 checksum calculation for files.                                 | true, false                      |
| ConcurrentWorkers     | int     | 10                                 | Number of concurrent workers for backup/restore operations.                | Any positive integer             |
| ManageCrontabs        | bool    | true                               | Allow Snaper to manage system crontabs for scheduled backups.              | true, false                      |

## S3 Parameters

| Parameter             | Type    | Default Value                      | Usage / Description                                                        | Possible Values                  |
|-----------------------|---------|------------------------------------|----------------------------------------------------------------------------|----------------------------------|
| Bucket                | string  | ""                                | S3 bucket name. Can be set via env DATASHELTER_BUCKET                                | Any string                       |
| AccessKey             | string  | ""                                | S3 access key. Can be set via env AWS_ACCESS_KEY_ID.                       | Any string                       |
| SecretKey             | string  | ""                                | S3 secret key. Can be set via env AWS_SECRET_ACCESS_KEY.                   | Any string                       |
| Endpoint              | string  | "https://s3.datashelter.cloud"    | S3 endpoint URL. Used for custom S3 providers (e.g., Scaleway).            | Any valid URL                    |
| Region                | string  | "eu-west-1"                       | S3 region. Can be set via env AWS_REGION.                                  | eu-west-1 |
| DisableSSL            | bool    | false                              | Disable SSL for S3 connections (set true if endpoint is http).             | true, false                      |
| StorageClass          | string  | "STANDARD"                        | S3 storage class for uploaded objects.                                     | STANDARD, STANDARD_IA, ONEZONE_IA |
| MaxRetries            | int     | 10                                 | Maximum number of retries for S3 operations.                               | Any positive integer             |
| MultipartPartSize     | string  | "5GB"                             | Part size for S3 multipart uploads (e.g., "5GB" or "100MB").           | Any valid size string (e.g., 100MB, 5GB) |
| MultipartConcurrency  | int     | 5                                  | Number of concurrent parts for S3 multipart uploads.                       | Any positive integer             |

## Backups.Files (FileBackup)

| Parameter         | Type      | Default | Usage / Description                                         | Possible Values |
|-------------------|-----------|---------|-------------------------------------------------------------|-----------------|
| Name              | string    | ""      | Name of the backup set. Used to reference the backup.       | Any string      |
| IncludedPaths     | []string  | []      | List of paths to include in the backup.                     | Any valid paths |
| ExcludedPaths     | []string  | []      | List of paths to exclude from the backup.                   | Any valid paths |
| FollowSymlinks    | bool      | false   | Whether to follow symlinks during backup.                   | true, false     |

## Backups.Databases (DatabaseBackup)

| Parameter         | Type      | Default | Usage / Description                                         | Possible Values |
|-------------------|-----------|---------|-------------------------------------------------------------|-----------------|
| Name              | string    | ""      | Name of the database backup.                                | Any string      |
| Type              | string    | ""      | Database type (e.g., mysql, postgres).                      | mysql, postgres, ... |
| DBLaunchOpts      | []string  | []      | Additional options for launching the database backup command.| Any string array |

---

### Notes

- **Environment Variable Overrides:**
  Some S3 config parameters (AccessKey, SecretKey, Bucket, Region) can be overridden by environment variables.
- **Config File Location:**
  The config file is typically located in `~/.config/snaper/config.yaml`.
- **Encryption:**
  If encryption is enabled, the key is stored in a file and referenced by EncryptionKeyFile.
- **Backups Section:**
  The Backups section is a list of backup sets (files and databases), each with its own parameters.
