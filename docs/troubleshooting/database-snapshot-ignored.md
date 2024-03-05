# My database snapshots are ignored with crontab

Some users have reported that their database snapshots are not properly executed when using crontab. This issue is often caused by the `mongodump` or `mongorestore` command not being found  by snaper in the PATH environment variable.

To resolve this, you can update your crontab by adding `PATH=$PATH:/usr/local/bin` as follows:

```bash
0 0 * * * PATH=$PATH:/usr/local/bin /usr/local/bin/snaper backup --all >> /tmp/snaper.log
```

:::note
In some cases, these commands may be elsewhere on your system. You can check this by launching:
    
```bash
which mongodump
which mongorestore
```
:::