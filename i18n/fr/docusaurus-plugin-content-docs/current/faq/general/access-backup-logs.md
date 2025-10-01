# Comment accéder aux journaux de sauvegarde ?

- Les journaux de sauvegarde sont stockés localement sur votre serveur dans `/tmp/snaper`.
  Par exemple, pour la sauvegarde `crimson-surf`, vos logs sont disponibles dans le fichier `/tmp/snaper/crimson-surf.log`.

  ```bash
  tail -n 100 /tmp/snaper/crimson-surf.log
  ```

- Listez les sauvegardes configurées sur votre serveur (et leurs chemins correspondants) avec la commande suivante :

  ```bash
  snaper list files
  ```

  Exemple de sortie:

  ```
  BACKUP NAME    PATH
  -----------    ----
  crimson-surf   /etc/nginx/sites-available
  summer-sea     /etc/letsencrypt
  damp-cloud     /var/www/blog
  spring-fog     /var/www/blog-fr
  purple-tree    /var/www/datashelter.tech