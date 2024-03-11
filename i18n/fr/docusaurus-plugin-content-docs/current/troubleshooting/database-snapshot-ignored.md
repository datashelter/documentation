# Mes snapshots de base de données sont ignorés avec crontab

Certains utilisateurs ont rapporté que les snapshots de leur base de données n'étaient pas correctement exécutés lorsqu'ils utilisaient crontab. Ce problème est souvent causé par le fait que la commande `mongodump` ou `mongorestore` n'est pas trouvée par snaper dans la variable d'environnement PATH.

Pour résoudre ce problème, vous pouvez mettre à jour votre crontab en ajoutant `PATH=$PATH:/usr/local/bin` comme suit :

```bash
0 0 * * * PATH=$PATH:/usr/local/bin /usr/local/bin/snaper backup --all >> /tmp/snaper.log
```

:::note
Dans certains cas, ces commandes peuvent se trouver ailleurs sur votre système. Vous pouvez le vérifier en lançant
    
``bash
which mongodump
which mongorestore
```
:: :