---
sidebar_position: 6
description: Supprimer une sauvegarde de la liste des sauvegardes (fichiers ou bases de données)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# delete

:::note
**snaper ne peut pas supprimer les instantanés du stockage distant.** Elle ne peut que supprimer une sauvegarde de la liste des sauvegardes (utile pour réparer les commandes erronées).

La suppression d'un instantané ne peut être effectuée que par le biais de règles de cycle de vie sur le stockage distant. Veuillez [contacter notre support](/support) pour en savoir plus sur cette fonctionnalité
:::

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
        ```
        Delete a file backup from backups list

        Usage:
        snaper delete files [flags]

        Aliases:
        files, fs, filesystem

        Flags:
        -h, --help          help for files
        -n, --name string   Name of the backup
        -p, --path string   Path of the backup (if you don't know the name)
        ```
  </TabItem>
  <TabItem value="databases" label="Databases">
        ```
        Delete a database from backups list

        Usage:
        snaper delete database [flags]

        Aliases:
        database, db, databases

        Flags:
        -h, --help          help for database
        -n, --name string   Name of the database
        ```
  </TabItem>
</Tabs>
