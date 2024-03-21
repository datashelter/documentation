---
title: "50 nuances de sauvegardes: émergence d'une nouvelle typologie"
description: Découvrez les différents types de sauvegardes et comment elles ont évolué au fil du temps
slug: fifty-shades-of-backups
authors:
  - name: Malo Paletou
    title: Fondateur de Datashelter
    url: https://github.com/mpaletou
    image_url: https://github.com/mpaletou.png
tags: [reflexions, data, backups, typology]
image: https://i.imgur.com/ADGdCrv.png
hide_table_of_contents: false
---

La sauvegarde des données est un sujet qui revient forcément en entreprise, lorsque vous êtes administrateur système ou tout simplement développeur le plus qualifié pour installer et maintenir le parc de serveur. Cependant l’on a vite fait de se perdre lorsque l’on se documente sur les différentes typologies de sauvegardes.

Cet article aura pour objectif de présenter ces différentes typologies, ainsi que d’ouvrir le débat sur une nouveau paradigme de sauvegarde.

### Typologies de sauvegardes traditionnelles

Malgré l’émergence de nombreuses solutions innovantes sur le marché, les blogs parlent principalement du fait qu’il existe trois typologies de sauvegarde:

- **complète:** duplique bêtement et simplement le support de production sur un second support de stockage
- **incrémentale:** démarre d’une sauvegarde complète. Ensuite, on ajoute seulement les fichiers modifiés depuis la dernière sauvegarde
- **différentielle:** démarre d’une sauvegarde complète. Ensuite, on ajoute les fichiers modifiés depuis la dernière sauvegarde complète

Chacune de ces typologies de sauvegardes a ses avantages et inconvénients. La sauvegarde complète permet une restauration rapide et et simple au détriment de l’espace de stockage nécessaire.

Les sauvegardes incrémentales et différentielles permettent elles d’optimiser l’espace de stockage utilisé mais complexifient le processus de restauration. L’avantage du différentiel par rapport à l’incrémental est que sa restauration ne nécessite que le différentiel en question et sa dernière sauvegarde complète associée (lorsque l’incrémental nécessite tous les incrémentaux précédents). 

Cependant on omet trop souvent qu’une dernière typologie existe, regroupant tous les avantages des typologies évoquées précédemment: la sauvegarde basée sur un index

### Sauvegarde basée sur un index

Le seul point noir de la sauvegarde basée sur les indexes est qu’elle dépend d’un index pour restaurer les données, et souvent aussi d’un logiciel (cet index ayant un format particulier). En contrepartie, elle y ajoute un avantage de taille: la restauration des fichiers supprimés

De nombreuses technologies modernes se basent sur ce principe comme [restic](https://restic.net/), [borgbackup](https://www.borgbackup.org/), [snaper (Datashelter)](https://datashelter.tech) ou [Synology HyperBackup](https://www.synology.com/fr-fr/dsm/feature/hyper_backup).

Cette nouvelle méthode prend encore plus de sens avec la démocratisation des stockage objet. En effet, il n’y a plus aucune limite ni de nombre de fichiers ni de taille globale du bucket. Les données stockées pourraient être représentées de la sorte:

- /data
    - blobs de fichiers représentant un fichier complet ou un bloc de données
- /index
    - index_1
    - index_2

### Récapitulatif

Pour récapituler, nous pourrions résumer les avantages et inconvénients de chacune de ces typologies de sauvegarde au travers du tableau suivant:

|  | Stockage nécessaire | Temps de sauvegarde | Facilité de restauration | Prise en compte des suppressions | Interdépendance entre les sauvegardes |
| --- | --- | --- | --- | --- | --- |
| Complète | ++++ | ++++ | ++++ | Oui | Aucune |
| Incrémental | + | + | ++ | Non | Totale |
| Différentiel | ++ | ++ | +++ | Non | Partielle |
| Index based | + | + | ++++ | Oui | Aucune |
