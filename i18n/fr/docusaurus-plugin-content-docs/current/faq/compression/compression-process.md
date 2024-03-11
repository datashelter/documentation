# Comment la compression est-elle réalisée avec Snaper ?

Nous utilisons l'algorithme ZSTD pour compresser tous les fichiers envoyés sur S3 (*cette fonctionnalité peut être désactivée en option*).

Nous avons choisi cet algorithme car il offre l'un des meilleurs rapports vitesse/compression.