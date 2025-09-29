# How to access backup logs?

- Backup logs are stored locally on your server in `/tmp/snaper`.
  For example, for the `crimson-surf` backup, your logs are available in the file `/tmp/snaper/crimson-surf.log`.

  ```bash
  tail -n 100 /tmp/snaper/crimson-surf.log
  ```

- List the backups configured on your server (and their corresponding paths) with the following command :

  ```bash
  snaper list files
  ```

  Example output:

  ```
  BACKUP NAME    PATH
  -----------    ----
  crimson-surf   /etc/nginx/sites-available
  summer-sea     /etc/letsencrypt
  damp-cloud     /var/www/blog
  spring-fog     /var/www/blog-fr
  purple-tree    /var/www/datashelter.tech