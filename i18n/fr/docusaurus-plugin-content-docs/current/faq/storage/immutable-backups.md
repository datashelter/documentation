# Mes sauvegardes sont-elles immuables ?

Le stockage immuable de vos sauvegardes est une fonctionnalité native de Datashelter. Cela signifie que vos sauvegardes ne peuvent ni être supprimées ni modifiées, même si vos identifiants S3 sont compromis.

Vous aurez uniquement un accès en lecture.

Il s'agit d'une protection logique au niveau du proxy `s3.datashelter.cloud` que nous utilisons pour interagir avec votre bucket S3, qu'il soit hébergé chez nous ou chez un fournisseur tiers.