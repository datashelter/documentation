# Politiques de conservation dégressive

Les politiques de conservation dégressive permettent de réduire progressivement le nombre de versions de sauvegarde stockées au fil du temps, en conservant plus de versions récentes et moins de versions plus anciennes. Cela aide à optimiser l'utilisation de l'espace de stockage tout en assurant une protection adéquate des données.

Cette fonctionnalité est particulièrement utile pour les sauvegardes de bases de données, pour lesquelles la déduplication du niveau du fichier n'est pas efficace. C'est pourquoi elle est activée par défaut pour vos sauvegardes de base de données.

Voici comment fonctionne la **politique de conservation dégressive par défaut** :
* Conserver toutes les sauvegardes des 7 derniers jours (1 par jour)
* Conserver 3 sauvegardes par semaine pour les 4 dernières semaines
* Conserver 1 sauvegarde par semaine pour les 12 dernières semaines
* Conserver 1 sauvegarde par mois pour les 12 derniers mois

## Personnalisation
Vous pouvez personnaliser cette politique en fonction de vos besoins spécifiques. Par exemple, vous pouvez choisir de conserver plus ou moins de sauvegardes récentes, ou d'ajuster la fréquence des sauvegardes conservées pour les périodes plus anciennes.

Il est par exemple fréquent de sauvegarder la base de données d'un site e-commerce toutes les heures, étant donné que la perte des dernières commandes client peut avoir un impact significatif. Dans ce cas, vous pouvez choisir de conserver 24 sauvegardes quotidiennes pour les 24 dernières heures, puis appliquer la politique de conservation dégressive par défaut pour les sauvegardes plus anciennes.

## Exemple chiffré
Supposons que vous effectuez des sauvegardes quotidiennes de votre base de données, et que leur taille compressée est de 1Go.
* Sans politique de conservation dégressive, après 1 an, vous auriez 365 sauvegardes, soit **365Go de données**.
* Avec la politique de conservation dégressive par défaut, vous auriez environ 33 sauvegardes, soit environ **33Go de données**, ce qui représente **une économie de stockage de plus de 90%**.
