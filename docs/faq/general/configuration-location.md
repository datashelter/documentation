# Configuration files location

Snaper's configuration is located in `~/.config/snaper` directory. You will find into:

- `config.yaml`: your main configuration file
- `.encryption_key`: file containing your encryption key
- `.xxx.lock`: lock of your encryption key → ensure that you don’t change it on flight
- `index_cache`: contains your latests indexes for faster run. We usually retain your latest 5 indexes, the other ones are pulled from S3 when needed
