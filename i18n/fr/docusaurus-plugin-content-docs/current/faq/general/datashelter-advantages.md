# Pourquoi ne pas gérer mes sauvegardes moi-même ?

Il est légitime de vous questionner sur l'intérêt d'une solution de Backup as a Service (BaaS) comme Datashelter, surtout si vous disposez déjà de compétence en administration système.

Il vous faut cependant garder à l'esprit qu'intégrer les différentes fonctionnalités nécessaires pour des sauvegardes fiables sont chronophages et et nécessite d'aller au delà de la simple sauvegarde via des outils comme `rsync` ou `restic`.

Voici quelques avantages clés à utiliser Datashelter pour vos sauvegardes :
1. **Simplicité d'installation et d'utilisation**: vous n'aurez pas à tester différents outils de sauvegarde, pour trouver un outil couvrant les fonctionnalités de base (chiffrement côté client, déduplication, compression, planification, rétention, etc.)
2. **Alerting en cas d'incident sur vos sauvegardes**: nous vous alertons en cas d'échec, anomalie de taille ou problème d'intégrité de vos sauvegardes grâce à un système externe vous garantissant la fiabilité des alertes. Rien de pire que de découvrir que vos sauvegardes sont corrompues ou incomplètes le jour où vous en avez besoin, n'est-ce pas ?
3. **Sauvegardes immuables**: grâce à un surcouche logicielle devant le endpoint s3.datashelter.cloud, vos sauvegardes sont protégées contre toute modification ou suppression. Cela garantit la disponibilité de vos sauvegardes même en cas de compromission de votre serveur ou de votre compte Datashelter.
4. **Support et maintenance**: vous bénéficiez par défaut et en illimité d'un support technique d'experts, qui parlent votre language et sauront vous accompagner au cas de crise.
5. **Vous ne payez que ce que vous utilisez**: notre modèle de tarification se base sur l'usage réel de vos sauvegardes (volume stocké et serveurs sauvegardés). Vous ne payez donc que ce que vous utilisez réellement.
