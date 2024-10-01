# Estimation de l'espace de stockage pour vos sauvegardes

En fonction de l'applicatif que vous sauvegardez, cela peut varier fortement. Cependant voici quelques éléments qui vous aideront à estimer la taille nécessaire pour vos sauvegardes.

## Sauvegarde de fichiers
snaper vous permet de réduire condidérablement grâce à deux mécanismes :
- **Déduplication des fichiers:** si un fichier est identique à un autre, il ne sera envoyé et stocké qu'une seule fois
- **Compression des fichiers:** les fichiers sont compressés avant d'être envoyés, ce qui réduit leur taille. Pour les fichiers texte, la réduction de taille peut atteindre les 95%

## Sauvegarde de bases de données
Lorsque nous sauvegardons une base de données avec snaper, nous effectuons un dump de la base de données puis nous le compressons. Cette étape de compression permet de réduire d'environ 80% la taille de la sauvegarde.

Pour sauvegarder votre base de données de 100Mo pendant un mois, il vous faudrait donc prévoir environ 600Mo (30x0.80x100) d'espace de stockage.

Cependant en activant la **fonctionnalité de downsampling**, cela passerait à 320Mo d'espace de stockage nécessaire avec la politique suivante:
- 1 sauvegarde par jour pendant 7 jours
- 3 sauvegardes par semaine pendant 4 semaines
- 4 sauvegardes par mois pendant 12 mois

## Concrètement, combien d'espace dois-je prévoir ?
Supposons que vous sauvegardiez un gros site e-commerce contenant:
- 300Go de fichiers
- 60Go de base de données

Vous devriez utiliser environ 700Go de stockage au rythme d'une sauvegarde par jours pendant un an.
