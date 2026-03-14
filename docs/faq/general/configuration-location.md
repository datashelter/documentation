# Where is my config located?

Snaper's configuration is located in `~/.config/snaper` directory. This directory contains the following files:

- `config.yaml`: your main configuration file (edited with `snaper init` command)
- `.encryption_key`: holds your encryption key
- `.xxx.lock`: locks your encryption key → ensure that you don’t change it on flight, which would make your backups inaccessible
- `index_cache`: keep your latest indexes as cache for faster run. We usually retain your latest index, while the other ones are pulled from S3 when needed
