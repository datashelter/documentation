# Où sont stockés les fichiers de configuration ?

La configuration de Snaper est située dans le répertoire `~/.config/snaper`. Vous y trouverez

- `config.yaml` : votre fichier de configuration principal
- `.encryption_key` : fichier contenant votre clé de chiffrement
- `.xxx.lock` : verrou de votre clé de chiffrement → assurez-vous de ne pas le changer en vol
- `index_cache` : contient vos derniers index pour une exécution plus rapide. Nous conservons généralement les 5 derniers index, les autres sont extraits de S3 lorsque cela est nécessaire.