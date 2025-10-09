# Comment Datashelter garantit la sécurité de vos données

Chez Datashelter, la sécurité est au cœur de tout ce que nous faisons. Nous avons conçu notre solution pour offrir des garanties de sécurité robustes et auditables, bien au-delà des standards habituels des services de sauvegarde externalisés.

## 🔒 Une sauvegarde sécurisée dès l’origine

Notre outil de sauvegarde, Snaper (CLI), assure la sécurité de vos données dès leur envoi vers Datashelter grâce à quatre principes fondamentaux :

### Communications via l’API S3 uniquement
Toutes les interactions passent par le protocole standard S3, reconnu pour sa fiabilité et sa sécurité (authentification S3 v4).

Nous utilisons exclusivement des appels HTTPS vers des points de terminaison compatibles S3, signés avec l'algorithme d'authentification S3 v4. Cela implique plusieurs garanties pratiques :

- Confidentialité en transit : tous les appels sont chiffrés par TLS (HTTPS).
- Intégrité des requêtes : la signature S3 v4 protège contre la modification des requêtes et empêche la réutilisation d'une requête signée par un tiers.
- Contrôles réseaux simplifiés : vous pouvez restreindre les règles sortantes de vos serveurs pour n'autoriser que des connexions HTTPS sortantes vers le endpoint S3/HTTPS `s3.datashelter.cloud`.


### Modèle “push-only”
Vos serveurs envoient les sauvegardes, mais Datashelter ne peut jamais initier de connexion vers eux.

Concrètement, l'agent Snaper initie toutes les communications : il ouvre des connexions sortantes vers l'infrastructure de stockage. Aucune connexion entrante (SSH, RPC, API interne) n'est requise ni possible depuis Datashelter vers vos machines.

**Conséquences et avantages :**

- Réduction de la surface d'attaque : pas de ports ouverts vers l'extérieur.
- Compatibilité avec des environnements stricts : fonctionne derrière NAT ou pare-feu avec uniquement sorties autorisées.
- Simplicité d'exploitation : pas d'authentification entrante à gérer ni de service exposé publiquement.


### Aucun accès SSH requis
Contrairement à d’autres solutions, nous n’avons jamais besoin d’un accès direct à vos serveurs.

Cela évite de devoir gérer des comptes, des clés SSH ou des bastions qui pourraient eux-mêmes devenir des vecteurs d'attaque.

**Points pratiques :**

- Pas de configuration d'utilisateur distant ni de clés privées côté Datashelter.
- Moins de contraintes pour la gouvernance interne (pas de comptes service à auditer, pas de rotation SSH à prévoir côté fournisseur).

### Chiffrement côté client (AES-256)
Toutes les données sont chiffrées localement avant d’être envoyées, avec une clé que vous seul détenez.

**Explication détaillée et recommandations :**

- Principes : le chiffrement côté client (client-side encryption) garantit que les données sont chiffrées avant de quitter votre infrastructure. Même si le stockage est compromis, les données restent illisibles sans la clé.
- Algorithme : nous utilisons un chiffrement symétrique robuste (AES-256).
- Gestion des clés : la sécurité dépend fortement de la protection des clés. Vous gardez la maîtrise exclusive de la clé de chiffrement (ou des matériaux de clé) : Datashelter ne conserve pas de copie non chiffrée.

**Bonnes pratiques de gestion des clés :**

- Sauvegardez vos clés hors site (HSM, coffre-fort de clés, ou solution KMS que vous contrôlez).

## 🧱 Une infrastructure conçue pour la résilience

Une fois vos données reçues, elles bénéficient d’un environnement de stockage ultra-sécurisé :

### Segmentation par serveur
Chaque serveur dispose de ses propres identifiants et de son propre bucket, limitant tout risque en cas de compromission.

**Détails techniques et avantages :**

- Isolation logique : chaque source (serveur ou instance) a des identifiants uniques et des politiques de stockage isolées (bucket ou préfixe dédié), appliquant le principe du moindre privilège.
- Contrôles IAM : les permissions appliquées sont restreintes à ce qui est nécessaire pour écrire des objets et lister/consulter les sauvegardes associées.
- Traçabilité : chaque opération (upload, liste, suppression demandée) est journalisée avec l'identifiant de la source pour faciliter les audits et les enquêtes.


### Stockage immuable
Impossible de supprimer ou de modifier un fichier après son envoi. En cas d’attaque, vos sauvegardes restent intactes.

**Comment cela est mis en œuvre (approche générale) :**

- Verrouillage des objets (WORM / Write Once Read Many) et/ou versioning avec règles de rétention. Les mécanismes concrets peuvent combiner :
  - versioning pour conserver les versions antérieures et empêcher les suppressions définitives instantanées,
  - contrôles d'accès stricts empêchant les suppressions directes hors du workflow contrôlé.

**Conséquences pour les opérations :**

- Les suppressions accidentelles ou malveillantes ne peuvent pas effacer immédiatement une sauvegarde protégée.
- Pour se conformer aux politiques (RGPD, etc.), les suppressions planifiées s'effectuent via un workflow contrôlé et auditable.

### Suppression contrôlée
Seules les suppressions demandées par l’utilisateur ou dictées par la politique de rétention sont exécutées, après un délai de sécurité de 14 jours.

**Processus et sécurité :**

- Demande de suppression : une suppression initiée via l'interface ou l'API déclenche un workflow enregistré et horodaté.
- Délai de sécurité : la période de 14 jours permet d'intervenir en cas d'erreur ou de compromission avérée (possibilité d'annuler la demande pendant ce délai).
- Auditabilité : toutes les demandes et actions de suppression sont consignées dans des journaux d'audit immuables. Les administrateurs peuvent consulter l'historique et obtenir des preuves d'actions.

### Hébergement certifié
Les données sont stockées sur une infrastructure OVHcloud certifiée ISO 27001 et HDS, bientôt SecNumCloud, avec réplication multi-datacenter en Europe et au Canada.

**Conformité et résilience :**

- Certifications : ISO 27001 atteste d'un SMSI (Système de Management de la Sécurité de l'Information). HDS (Hébergement de Données de Santé) répond aux exigences françaises pour les données de santé.
- Sécurité physique et organisationnelle : les centres de données OVHcloud offrent contrôle d'accès physique, redondance énergétique, systèmes anti-incendie et surveillance 24/7.
- Réplication géographique : les sauvegardes sont répliquées sur plusieurs datacenters pour résister aux pannes localisées et assurer la continuité.

**Respect de la souveraineté des données :**

- Vous pouvez choisir la région de stockage pour respecter des exigences de résidence des données (par ex. UE vs Canada).
- Les copies sont chiffrées au repos et ne sont lisibles qu'avec les clés appropriées (cf. chiffrement côté client).

