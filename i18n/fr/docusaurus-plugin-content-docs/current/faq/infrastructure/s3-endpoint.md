# Mon serveur communique avec s3.datashelter.cloud

Snaper communique exclusivement par des appels HTTPS vers des points de terminaison compatibles S3, signés avec l'algorithme d'authentification S3 v4.

Pour vous faire bénéficier des fonctionnalités de stockage immuable (WORM), vos données transitent par un proxy S3 dédié, hébergé à l'adresse `s3.datashelter.cloud`.

Il existe deux manières d'altérer une donnée dans un stockage objet : la suppression (DELETE) et la réécriture / l'écrasement (PUT qui remplace une clé existante). Le proxy applique des règles différentes selon le cas afin d'empêcher toute altération irréversible :

- Blocage des requêtes de suppression d'objet (DELETE) : le proxy accepte la requête au niveau du protocole mais n'effectue aucune suppression sur le stockage.
- Versioning pour les tentatives de réécriture : lorsqu'une réécriture est effectuée, le proxy crée une nouvelle version de l'objet au lieu d'écraser l'ancienne.

Ces mécanismes garantissent la non-altération de vos données, même en cas de compromission des identifiants S3 de votre serveur.
