---
sidebar_position: 1
description: Calcul de l'utilisation du stockage
---

# Calcul de l'utilisation du stockage

Nous calculons simplement la taille totale des objets dans vos buckets. Cela signifie que le calcul de l'espace de stockage utilisé prend en compte les économies d'espace de stockage réalisées grâce aux fonctionnalités de compression et déduplication de snaper :

- **Déduplication au niveau du fichier:** si le fichier n'a pas changé, il est indexé dans la nouvelle sauvegarde sans être renvoyé ni stocké à nouveau.
- **Compression de vos données:** snaper compresse vos données ainsi que vos indexes avec l'algorithme Zstandard (zstd) avant de les envoyer vers le stockage distant. Pour les fichiers texte tels que vos fichiers journaux ou votre code source, cela vous permet d'économiser jusqu'à 95% d'espace de stockage.

Par rapport aux techniques de sauvegarde traditionnelles, notre solution nécessite jusqu'à 30 fois moins d'espace disque pour stocker vos données. Cela nous permet d'être plus efficaces et de vous faire économiser de l'argent ! 💵
