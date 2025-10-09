# Où sont stockés les fichiers de configuration ?

Snaper stocke sa configuration dans le répertoire `~/.config/snaper`. Vous pourrez y trouver les fichiers suivants :

- `config.yaml` : votre fichier de configuration principal. Vous pouvez le modifier en lançant la commande `snaper init` ou en l'éditant directement.
- `.encryption_key` : contient votre clé de chiffrement. Nous vous recommandons de la conserver dans un gestionnaire de mots de passe ou dans votre tête.
- `.xxx.lock` : verrou de votre clé de chiffrement. Il permet de garantir que votre clé de chiffrement ne change pas entre deux sauvegardes, afin d'éviter toute corruption de vos sauvegardes.
- `index_cache` : contient vos derniers index pour une exécution plus rapide. Nous conservons généralement le dernier index en cache afin d'accélérer l'étape de déduplication lors de votre prochaine sauvegarde.