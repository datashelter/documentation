---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Datashelter est une solution de sauvegarde entièrement intégrée, conçue pour simplifier le processus de sauvegarde de vos serveurs Linux. En seulement quelques étapes, vous pouvez protéger vos données critiques en sauvegardant vos fichiers et bases de données sur un système de stockage compatible S3.
Datashelter propose une configuration simple, une gestion automatisée des sauvegardes et des fonctionnalités de récupération puissantes—tout en garantissant que vos données sont chiffrées, compressées et dédupliquées.

## Fonctionnalités principales

- **Configuration rapide :** Sauvegardez vos serveurs en quelques minutes grâce à notre outil CLI facile à installer.
- **Gestion automatisée :** Après votre première sauvegarde, Datashelter gère tout automatiquement. Vous serez informé si un problème survient.
- **Sauvegarde complète :** Prend en charge les fichiers et les principales bases de données (MySQL, PostgreSQL, MongoDB).
- **Chiffrement de bout en bout :** Toutes les sauvegardes sont chiffrées avec le chiffrement AES-256.
- **Stockage optimisé :** La compression ZSTD et la déduplication garantissent une utilisation minimale du stockage.
- **Restauration facile :** Récupérez vos fichiers ou bases de données rapidement et sans effort.

## Comment ça fonctionne

Snaper est l'outil en ligne de commande (CLI) qui gère le processus de sauvegarde pour Datashelter. Conçu en Golang, Snaper est un outil puissant et léger, conçu pour effectuer des sauvegardes de manière efficace et sécurisée depuis le côté client. Il prend en charge tout, de la sauvegarde de fichiers et de bases de données à la compression, au chiffrement et au transfert vers le stockage—le tout dans un seul binaire facile à utiliser.

Ce qui distingue Snaper des solutions de sauvegarde traditionnelles, c'est sa capacité de sauvegarde incrémentale avec déduplication au niveau des fichiers. Contrairement aux outils comme rsync, qui ne sauvegardent que les fichiers modifiés ou ajoutés, Snaper utilise une méthode de sauvegarde basée sur des index. Lisez notre article dédié Qu'est-ce qu'une sauvegarde basée sur des index pour en savoir plus !

![Snaper schema](assets/snaper_schema.png)

En résumé, Snaper offre une restauration à des points précis dans le temps avec une utilisation efficace du stockage, vous garantissant ainsi de pouvoir récupérer vos données exactement telles qu'elles étaient à tout moment de la sauvegarde.

### Où Datashelter stocke-t-il vos données ?

Chez Datashelter, nous nous engageons à garantir la sécurité, la confidentialité et la fiabilité de vos données. Actuellement, nous utilisons l'infrastructure OVHcloud pour stocker vos sauvegardes, offrant un accès à cinq zones de disponibilité réparties entre la France 🇫🇷 (Gravelines), l'Allemagne 🇩🇪 (Francfort), la Pologne 🇵🇱 (Varsovie), le Royaume-Uni 🇬🇧 (Londres), et le Canada 🇨🇦 (Beauharnois). Ce partenariat stratégique avec OVHcloud nous permet de proposer un stockage fiable à un prix compétitif dans des régions qui répondent à vos besoins opérationnels et réglementaires.

De plus, en tant que solution entièrement compatible avec S3, Datashelter vous offre la flexibilité de connecter votre propre bucket S3. Cela vous permet de stocker vos sauvegardes à l'endroit le plus pratique pour vos besoins—que ce soit au sein de votre infrastructure cloud existante, sur site, ou dans une autre région de votre choix.

En alliant flexibilité et accessibilité, Datashelter garantit que vos données restent sécurisées, conformes et facilement accessibles, sans compromettre les coûts.

Essayez et vous verrez ! 🚀