---
description: "Snaper stores temp files in general.tmp_file_location/snaper. Files under 10MB use RAM for compression/encryption buffering; larger ones use disk. Tune general.tmp_file_threshold to adjust."
---

# Why is my temporary partition full of Snaper files?

Snaper stores temporary files under `general.tmp_file_location/snaper`. If `general.tmp_file_location` is not configured, the operating system temp directory is used, usually `/tmp`, so the default location is often `/tmp/snaper`.

We need to store temporary files to perform compression or encryption on your data, as it cannot always be processed as a stream.

By default, compression and encryption buffers smaller than 10 MB stay in RAM, while larger buffers spill to the temporary directory. You can modify this behavior by editing the `general.tmp_file_threshold` configuration value in _~/.config/snaper/config.yaml_.

For large database backups, make sure the temporary location has enough free space for the raw dump and, when compression or encryption is enabled, an additional processed copy during upload.

Example:

```yaml
general:
  tmp_file_location: /home/app/large-tmp
```

With this configuration, Snaper writes temporary files under `/home/app/large-tmp/snaper`.

After upload, Snaper automatically removes its temporary files. Recent versions also clean stale database dump temporary files older than 24 hours before starting a new backup of the same database.

If the process was killed or the host crashed, older Snaper versions may leave files behind. When no Snaper backup or restore is running, you can inspect and remove old leftovers from the configured temp directory:

```bash
ls -lh /path/to/tmp/snaper
rm -f /path/to/tmp/snaper/dump-<database_name>*
rm -f /path/to/tmp/snaper/compressed-*
rm -f /path/to/tmp/snaper/encrypted-*
```
