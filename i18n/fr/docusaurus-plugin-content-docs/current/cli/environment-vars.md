---
description: Toutes les variables d'environnement disponibles avec snaper.
---

# Variables d'environnement

### SNAPER_ENCRYPTION_KEY

(Optionnel) Contient la clé d'encryptage en texte clair. Il est recommandé d'utiliser le fichier d'encryptage tel qu'il a été configuré lors de `snaper init`.

### SNAPER_ENCRYPTION_KEY_FILE

(Facultatif) Contient le chemin vers le fichier contenant la clé de chiffrement. Vous devriez le définir en utilisant la commande `snaper init`, à moins que vous ne sachiez ce que vous faites.

### AWS_ACCESS_KEY_ID

(Facultatif) Contient la clé d'accès au bucket S3.

### AWS_SECRET_ACCESS_KEY

(Facultatif) Contient la clé secrète du bucket S3.

### DATASHELTER_BUCKET

(Facultatif) Contient le nom du bucket.

### AWS_REGION

(Facultatif) Contient la région du bucket S3.

### PGPASSWORD

(Facultatif) Contient le mot de passe de la base de données PostgreSQL configurée. Il est prioritaire sur la valeur configurée.

### MYSQL_PASSWORD

(Facultatif) Contient le mot de passe de la base de données MySQL configurée. Il est prioritaire sur la valeur configurée.

### MONGODB_PASSWORD

(Facultatif) Contient le mot de passe de la base de données MongoDB configurée. Il est prioritaire sur la valeur configurée.