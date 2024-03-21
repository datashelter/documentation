---
title: Pourquoi Datashelter ?
description: Comprennez pourquoi DataShelter a été créé et comment il peut vous aider à sécuriser vos données.
slug: pourquoi-datashelter
authors:
  - name: Malo Paletou
    title: Fondateur de DataShelter
    url: https://github.com/mpaletou
    image_url: https://github.com/mpaletou.png
tags: [reflexions, why]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Le 10 mars 2021, un des centres de données strasbourgeois d’OVH s’enflamme, emportant avec lui 3.6 millions de sites web. Beaucoup de développeurs, consultants et agences web s’en souviennent, et le JT de 20h en fait la une de son journal.

A cette époque là, je suis consultant infrastructure. D’abord réveillé par les appels d’astreinte, je me retrouve rapidement submergé d’appels par mes clients. Malo, combien de temps est-ce que cela va durer ? Est-ce que l’on peut restaurer nos sites ailleurs ? Malo, que devons-nous annoncer à nos clients ?

Ce jour-là, deux sujets ont pris une importance toute particulière: la localisation des sauvegardes et l’aisance quant à leur restauration

Pour de trop nombreuses entreprises qui offraient une confiance aveugle à leur hébergeur pour réaliser et maintenir leurs sauvegardes, cet incident s’est avéré critique, voir fatal.

Certaines entreprise ont pu restaurer une sauvegarde avec plusieurs jours de délais, quand d’autres ont perdu l’intégralité de leurs données. Il ne s’agissait pas de sauvegardes mais de snapshots, stockées sur le même serveur que leur production. 

Cet exemple illustre parfaitement **deux de mes préoccupations principales aujourd’hui**:

- réaliser des sauvegardes off-site est essentiel
- une sauvegarde qui n’est pas en état d’être restauré n’en est pas une

### La sauvegarde de données n’est pas un sujet sexy

Fort heureusement mes clients avaient des sauvegardes à restaurer 😜. Mais cet incident m’a amené à réfléchir et me demander pourquoi ce type d’incident a fait mal à autant d’entreprises. Pourquoi est-ce que tant d’entreprises n’avaient pas de processus de sauvegarde résilient en place ?

Selon moi, il y a **deux raisons** à cela:

- **freins importants** à la mise en place
- **complexité** de la procédure

Pour commencer, la complexité. Quel logiciel dois-je utiliser ? Quelle politique de sauvegarde mettre en oeuvre ? Comment vais-je restaurer mes données ?

On ne peut jamais éliminer la complexité, mais on peut l’abstraire afin de proposer une expérience simple et intuitive pour l’utilisateur. A la façon de Qonto dans la banque ou Alan dans l’assurance.

Ensuite, lorsque l’on entame la réflexion sur le sujet des sauvegardes en entreprise, on rencontre rapidement de nombreux freins. Où dois-je stocker mes données ? Faut-il de la sauvegarde de données structurées ou non structurées ? Combien est-ce que cela va me coûter ?

On finit donc généralement par adopter une de ces 3 solutions:

- développer un petit script python/bash qui fera le minimum
- payer des licences chères chez Veeam ou Acronis, où le tarif n’est jamais clair
- ignorer le problème ou le repousser à plus tard

## Datashelter est enfin là

C’est pourquoi j’ai créé Datashelter. Nous voulons proposer une solution clé en main et souveraine d’automatisation des sauvegardes de données à destination des TPE/PME. Cette solution complète qui s’articule autour d’un **tarif simple et prédictible (2€/serveur connecté + 5€/To)** et vous permet en quelques clics d’avoir des **sauvegardes résilientes**, être alerté en cas d’anomalie et être accompagné lorsque vous en avez le plus besoin.

Tout simplement, nous voulons être un no-brainer pour sécuriser les données de votre entreprise à moindre coût. Que vous louiez un **petit VPS** ou hébergiez des **centaines d’applicatifs** avec des contraintes de disponibilité des plus exigeantes. 

**Nous croyons que Datashelter sera cet outil qui vous simplifie la vie.** Alors nous vous offrons 30 jours pour l’essayer, et [mettre en place vos premières sauvegardes gratuitement](https://app.datashelter.tech/auth/register)