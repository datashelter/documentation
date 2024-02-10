# failed to decompress stream: invalid input: magic number mismatch

This error arises when snaper **fails to decompress data properly**. This issue often occurs when trying to restore data on another system with an incorrect encryption key.

To resolve this, update the encryption key stored in `~/.config/snaper/.encryption_key` and attempt to restore the data again.

**If your problem persists**, set `log_level` parameter in *~/.config/snaper/config.yaml* to `debug` and **[reach out to us](/support) attaching your logs**!