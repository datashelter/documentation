---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Datashelter est une plateforme SaaS qui vous permet d'automatiser vos sauvegardes de manière simple et sécurisée. Il vous suffit de configurer votre serveur à l'aide de notre CLI snaper, et Datashelter s'occupe du reste (stockage, alertes et politiques de rétention).

Notre CLI snaper s'installe sur votre serveur à sauvegarder et vous permet de configurer simplement vos sauvegardes. Il se charge de réaliser vos sauvegardes, les compresser, les chiffrer et les envoyer vers Datashelter au travers d'une API S3.

## Comment ça marche ?

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
    1. Crée un index de vos fichiers, comprenant le nom, la taille, la date de modification et un checksum (si activé)
    2. Génère un index différentiel en se basant sur l'index précédent
    3. Envoi les fichiers modifiés vers Datashelter (au travers de l'API S3), en les compressant et en les chiffrant à la volée
  </TabItem>
  <TabItem value="databases" label="Databases">
    1. Utilise votre client de base de données (mysql, postgresql, mongodb) pour créer un dump de votre base de données
    2. Transfère le dump vers Datashelter (au travers de l'API S3), en veillant à le compresser et à le chiffrer à la volée
  </TabItem>
</Tabs>


### En quoi Snaper se différencie ?

snaper crée des instantanés avec déduplication au niveau des fichiers. Contrairement aux méthodes traditionnelles telles que les sauvegardes incrémentales rsync qui ne stockent que les fichiers modifiés ou ajoutés, snaper va plus loin.

Il indexe et stocke l'état complet de vos fichiers, qu'ils aient été ajoutés, modifiés ou supprimés. Cette fonctionnalité garantit la capacité de snaper à **restaurer vos systèmes de fichiers à l'indentique**.

### Où sont stockées mes données ?

Chez Datashelter, nous donnons la priorité à la sécurité et à la souveraineté de vos données. C'est pourquoi nous stockons exclusivement vos fichiers en France 🇫🇷 - en nous appuyant actuellement sur OVH Object Storage, une solution compatible S3 fiable et de confiance.

Notre ambition est de devenir une solution alternative européenne souveraine 🇪🇺 pour la sauvegarde des données. Notre objectif est de fournir une interface entre vos serveurs - qu'ils soient dédiés, VPS ou sur site - et le stockage objet.

**Just give it a try  🚀**
