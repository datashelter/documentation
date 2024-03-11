---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration du client de base de données

Comme la plupart des bases de données nécessitent une forte cohérence entre le client et le serveur, snaper **repose sur le client de base de données installé sur votre serveur**.

Pour cette raison, vous devez installer le client de base de données sur votre serveur avant d'utiliser snaper pour sauvegarder et restaurer vos bases de données.

<Tabs groupId="database_type">
  <TabItem value="mysql" label="MySQL">
    **Installer**

    Installez le **client MySQL** en exécutant la commande suivante :
    ```
    sudo apt update
    sudo apt install mariadb-client # ou "mysql-client" si non disponible
    ```

    **Vérifier l'installation**
    
    Assurez-vous que votre client est **correctement installé** en exécutant :
    ```
    mysql --version
    ```
  </TabItem>
  <TabItem value="postgresql" label="PostgreSQL">
    **Installer**

    Installez le **client PostgreSQL** en exécutant la commande suivante :
    ```
    sudo apt update
    sudo apt install postgres
    ```

    **Vérifier l'installation**

    Assurez-vous que votre client est **correctement installé** en exécutant :
    ```
    psql --version
    ```
  </TabItem>
  <TabItem value="mongodb" label="MongoDB">
    **Installer**

    Suivez la [documentation officielle] (https://docs.mongodb.com/manual/installation/) pour installer le **client MongoDB** : 

    Vous trouverez des binaires pour la plupart des systèmes d'exploitation et des distributions sur le [Centre de téléchargement MongoDB](https://www.mongodb.com/try/download/database-tools).

    **Vérifier l'installation**

    Assurez-vous que votre client est **correctement installé** en exécutant :
    ```
    mongodump --version
    ```
  </TabItem>
</Tabs>