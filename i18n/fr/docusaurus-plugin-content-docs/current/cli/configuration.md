# Paramètres de configuration
## Paramètres généraux

| Paramètre               | Type    | Valeur par défaut                   | Utilisation / Description                                                      | Valeurs possibles                |
|------------------------|---------|-------------------------------------|--------------------------------------------------------------------------------|----------------------------------|
| LogLevel               | string  | "info"                             | Niveau de verbosité des logs. Contrôle le niveau de sortie des logs.           | debug, info, warn, error         |
| IndexCacheDir          | string  | "$CONFIG_DIR/index_cache"          | Répertoire de stockage des fichiers de cache d'index.                          | Tout chemin valide               |
| TmpFileLocation        | string  | Répertoire temporaire de l'OS       | Répertoire pour les fichiers temporaires.                                      | Tout chemin valide               |
| TmpFileThreshold       | int64   | 10485760 (10 Mo)                    | Seuil (en octets) pour l'utilisation de fichiers temporaires.                  | Tout entier positif              |
| BlockFileThreshold     | int64   | 4194304 (4 Mo)                      | Seuil (en octets) pour le découpage des fichiers en blocs.                     | Tout entier positif              |
| EncryptionKeyFile      | string  | "$CONFIG_DIR/.encryption_key"      | Chemin du fichier contenant la clé de chiffrement.                             | Tout chemin valide               |
| EncryptionKey          | string  | ""                                 | La clé de chiffrement elle-même (lue depuis le fichier).                       | Toute chaîne de caractères       |
| EnableCompression      | bool    | true                                | Active la compression ZSTD pour les uploads/downloads.                         | true, false                      |
| EnableMD5Checksum      | bool    | false                               | Active le calcul de la somme de contrôle MD5 pour les fichiers.                | true, false                      |
| ConcurrentWorkers      | int     | 10                                  | Nombre de workers concurrents pour les opérations de sauvegarde/restauration.  | Tout entier positif              |
| ManageCrontabs         | bool    | true                                | Permet à Snaper de gérer les crontabs système pour les sauvegardes planifiées. | true, false                      |

## Paramètres S3

| Paramètre               | Type    | Valeur par défaut                   | Utilisation / Description                                                      | Valeurs possibles                |
|------------------------|---------|-------------------------------------|--------------------------------------------------------------------------------|----------------------------------|
| Bucket                 | string  | ""                                 | Nom du bucket S3. Peut $etre définie  via la variable d'env DATASHELTER_BUCKET.                               | Toute chaîne de caractères       |
| AccessKey              | string  | ""                                 | Clé d'accès S3. Peut être définie via la variable d'env AWS_ACCESS_KEY_ID.     | Toute chaîne de caractères       |
| SecretKey              | string  | ""                                 | Clé secrète S3. Peut être définie via la variable d'env AWS_SECRET_ACCESS_KEY. | Toute chaîne de caractères       |
| Endpoint               | string  | "https://s3.datashelter.cloud"     | URL de l'endpoint S3. Pour fournisseurs S3 personnalisés (ex : Scaleway).      | Toute URL valide                 |
| Region                 | string  | "eu-west-1"                        | Région S3. Peut être définie via la variable d'env AWS_REGION.                 | eu-west-1                        |
| DisableSSL             | bool    | false                               | Désactive SSL pour les connexions S3 (mettre à true si endpoint en http).      | true, false                      |
| StorageClass           | string  | "STANDARD"                         | Classe de stockage S3 pour les objets uploadés.                                | STANDARD, STANDARD_IA, ONEZONE_IA |
| MaxRetries             | int     | 10                                  | Nombre maximal de tentatives pour les opérations S3.                           | Tout entier positif              |
| MultipartPartSize      | string  | "5GB"                              | Taille des parties pour les uploads S3 multipart (ex : "5GB" ou "100MB").    | Toute taille valide (ex : 100MB, 5GB) |
| MultipartConcurrency   | int     | 5                                   | Nombre de parties concurrentes pour les uploads S3 multipart.                  | Tout entier positif              |

## Backups.Files (Sauvegarde de fichiers)

| Paramètre         | Type      | Défaut | Utilisation / Description                                         | Valeurs possibles |
|-------------------|-----------|--------|-------------------------------------------------------------------|-------------------|
| Name              | string    | ""    | Nom de l'ensemble de sauvegarde. Sert de référence à la sauvegarde.| Toute chaîne      |
| IncludedPaths     | []string  | []     | Liste des chemins à inclure dans la sauvegarde.                   | Tout chemin valide|
| ExcludedPaths     | []string  | []     | Liste des chemins à exclure de la sauvegarde.                     | Tout chemin valide|
| FollowSymlinks    | bool      | false  | Suivre ou non les liens symboliques lors de la sauvegarde.        | true, false       |

## Backups.Databases (Sauvegarde de bases de données)

| Paramètre         | Type      | Défaut | Utilisation / Description                                         | Valeurs possibles |
|-------------------|-----------|--------|-------------------------------------------------------------------|-------------------|
| Name              | string    | ""    | Nom de la sauvegarde de la base de données.                       | Toute chaîne      |
| Type              | string    | ""    | Type de base de données (ex : mysql, postgres).                   | mysql, postgres, ... |
| DBLaunchOpts      | []string  | []     | Options supplémentaires pour lancer la commande de sauvegarde.     | Tout tableau de chaînes |

---

### Notes

- **Surcharges par variables d'environnement :**
  Certains paramètres S3 (AccessKey, SecretKey, Bucket, Region) peuvent être surchargés par des variables d'environnement.
- **Emplacement du fichier de configuration :**
  Le fichier de configuration se trouve généralement dans `~/.config/snaper/config.yaml`.
- **Chiffrement :**
  Si le chiffrement est activé, la clé est stockée dans un fichier référencé par EncryptionKeyFile.
- **Section Backups :**
  La section Backups est une liste d'ensembles de sauvegarde (fichiers et bases de données), chacun avec ses propres paramètres.
