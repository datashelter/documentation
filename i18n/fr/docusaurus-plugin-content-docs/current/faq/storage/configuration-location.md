# Puis-je sauvegarder mes logs sur Datashelter ?

Bien que vous puissiez techniquement sauvegarder vos journaux sur Datashelter, ce n'est pas conseillé pour plusieurs raisons.

Tout d'abord, en raison de la déduplication des fichiers, la modification d'une seule ligne de votre fichier entraîne le stockage d'un nouveau fichier, ce qui augmente l'utilisation de l'espace de stockage.

En outre, si vous stockez des journaux pour des raisons de conformité légale, comme dans le cadre du GDPR, il est préférable d'utiliser des solutions conçues pour cet usage telles que [Elasticsearch](https://www.elastic.co/fr/elasticsearch/).

Gardez à l'esprit que vous pouvez facilement [exclure un répertoire de la sauvegarde](/cli/usage/backup/) en l'ajoutant à la liste d'exclusion comme ci-dessous :
```bash
snaper backup files --path /var --exclude /var/log,/var/myotherlogdir
```
