# Should I store logs on Datashelter ?

While you can technically store your logs on Datashelter, it's not advisable for a few reasons.

First, due to file deduplication, editing even a single line in your file results in storing a new file, thus increasing storage usage.

Additionally, if you're storing logs for legal compliance, such as under GDPR, it's better to use specialized solutions like [Elasticsearch](https://www.elastic.co/fr/elasticsearch/). These platforms are specifically designed for log management, offering a more suitable experience.

Keep in mind that you can easily [exclude a directory from being backed up](../../cli/usage/backup) by adding it to the exclusion list as below:
```bash
snaper backup files --path /var --exclude /var/log,/var/myotherlogdir
```
