# Can I backup logs with Datashelter?

While it is technically possible to back up logs with Datashelter, it is generally **not recommended** for several reasons.

First, because of file deduplication, **even a small change in a log file (such as adding a single line)** results in a new file version being stored. Since log files are constantly updated, this can quickly increase storage usage.

Additionally, if you are storing logs for **compliance purposes** (for example under GDPR), it is usually better to rely on **dedicated log management solutions** such as Elasticsearch. These tools are specifically designed to handle log ingestion, indexing, and long-term retention efficiently.

### Excluding Log Directories from Backups

If your logs are stored in directories such as `/var/log`, you can easily **exclude them from your backups** by adding them to the exclusion list:

```bash
snaper backup files --path /var --exclude /var/log,**/*.log
```

See more details about backup exclusions [here](https://docs.datashelter.tech/cli/usage/backup/#backup-a-directory-while-excluding-files).