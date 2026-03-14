# How to access backup logs?

## Where are backup logs stored?
Backup logs are stored locally on your server in the `/tmp/snaper` directory. Each backup has its own log file named after the backup. For example, if you have a backup named `crimson-surf`, its logs will be available in the file `/tmp/snaper/crimson-surf.log`.

## How to view backup logs?
The easiet way to view the logs of a specific backup is to use the `tail` command in your terminal. For example, to view the last 100 lines of the `crimson-surf` backup logs, you can run:

```bash
tail -n 100 /tmp/snaper/crimson-surf.log
```

## How to find the backup name associated with a specific path?
You can list all the backups configured on your server along with their corresponding paths using the following command:
```bash
snaper list files
```

This command will display a table with the backup names and their associated paths. For example, the output might look like this:
```
BACKUP NAME    PATH
-----------    ----
crimson-surf   /etc/nginx/sites-available
summer-sea     /etc/letsencrypt
damp-cloud     /var/www/blog
spring-fog     /var/www/blog-fr
purple-tree    /var/www/datashelter.tech
```
