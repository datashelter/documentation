# Comment la compression est-elle gérée ?

Notre outil CLI, Snaper, compresse automatiquement vos fichiers **avant de les chiffrer et de les télécharger sur S3.**

Nous utilisons l'algorithme ZSTD, qui offre un équilibre optimal entre **vitesse de compression et efficacité**.

### Puis-je désactiver la compression ?

Oui, vous pouvez désactiver la compression en définissant la valeur `general.enable_compression` à `false` dans le fichier *~/.config/snaper/config.yaml*.

**Important :** Vous ne pouvez pas désactiver la compression après que des sauvegardes ont déjà été effectuées. Cela entraînerait des problèmes, car Snaper s'attend à ce que tous les fichiers précédents soient compressés et tentera de les décompresser, ce qui provoquerait des erreurs dans votre bucket S3.
