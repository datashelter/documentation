# Que se passe-t-il si mon compte est compromis ?

Nous prenons la sécurité de vos sauvegardes très au sérieux. C'est pourquoi nous avons conçu Datashelter pour vous apporter un maximum de sécurit  "by design". Nous recençons deux scénarios possibles en cas de compromission de votre compte :
- Un attaquant accède à votre compte mais pas à votre serveur
- Un attaquant accède à votre serveur et récupère ses identifiants Datashelter

## Un attaquant accède à votre compte mais pas à votre serveur
A moins que vous ayez activé la double-authentification (2FA), un attaquant pourrait se connecter à votre compte Datashelter. Cependant, sans accès à votre serveur, il ne pourrait pas accéder à vos sauvegardes.

En effet, les sauvegardes sont chiffrées localement sur votre serveur avant d'être envoyées à Datashelter. Sans les clés de chiffrement stockées sur votre serveur, les données restent inaccessibles.

Les seules actions qu'un attaquant pourrait effectuer sont :
- Voir les noms de vos serveur et de vos sauvegardes
- Modifier les politiques de rétention de vos sauvegardes (par exemple, réduire la durée de conservation des sauvegardes)
- Supprimer vos sauvegardes de nos serveurs

Afin de limiter les impacts, nous forçons sur tous les comptes les deux règles de sécurité suivantes :
- Vos sauvegardes sont **conservées 14 jours après la suppression** depuis le dashboard ou via la commande `snaper delete`. Notre équipe de support est donc en capacité de restaurer vos sauvegardes supprimées par erreur ou malveillance, même après leur suppression sur le dashboard.
- Les politiques de rétention **conservent au minimum une sauvegarde par jour pendant les 7 derniers jours**. Cela permet de garantir la disponibilité de sauvegardes même dans le cas d'une compromissions accidentelle de votre compte, où l'attaquant tenterait de supprimer vos sauvegardes en réduisant la politique de rétention des données au maximum.

## Un attaquant accède à votre serveur et récupère ses identifiants Datashelter

Si un attaquant parvient à accéder à votre serveur et à récupérer ses identifiants Datashelter, il pourrait potentiellement accéder à vos sauvegardes. Cependant, il lui sera **impossible de supprimer ou réécrire une sauvegarde existante** grâce à notre fonctionnalité native de stockage immuable.

Par ailleurs, vous avez la possibilité de réinitialiser les identifiants Datashelter de votre serveur via le dashboard en vous rendant dans la section "*Serveurs*" et en cliquant sur la roue crantée "*Configuration de mon serveur*", puis "*Réinitialiser les identifiants*". Cela invalidera les anciens identifiants, empêchant ainsi tout accès non autorisé à vos sauvegardes.
