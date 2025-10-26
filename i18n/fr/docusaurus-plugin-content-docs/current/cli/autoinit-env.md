# Configuration automatique via variables d’environnement

Depuis la version v3.12.0, Snaper peut démarrer sans nécessiter d’étape d’initialisation manuelle (`snaper init`) ou de fichier de configuration préexistant. Si aucun fichier de configuration n’est trouvé, Snaper va automatiquement tenter de le générer à partir d’un ensemble de variables d’environnement.

## Pourquoi cette évolution ?

Ce mode de fonctionnement simplifie considérablement le déploiement de Snaper dans tous les environnements où la gestion de fichiers de configuration est peu pratique ou impossible :
- Conteneurs Docker éphémères (CI/CD, jobs ponctuels…)
- Orchestrateurs comme Kubernetes (utilisation de `Secret` et de `ConfigMap`)
- Environnements serveurs partagés ou hébergements mutualisés (exécution via cron)
- Cas d’automatisation où l’initialisation doit être totalement scriptée

## Fonctionnement

- Au lancement, si le fichier de configuration Snaper n’existe pas, il sera automatiquement généré à partir des variables d’environnement (listées ci-dessous).
- Si toutes les variables nécessaires sont présentes, l’exécution continue normalement et le fichier de configuration est sauvegardé pour les exécutions suivantes.
- Si certaines variables requises sont absentes, Snaper s’arrête et indique lesquelles doivent être ajoutées.

## Variables d’environnement prises en charge

Variables **obligatoires** :
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DATASHELTER_BUCKET`

Variables **optionnelles** recommandées :
- `SNAPER_ENCRYPTION_KEY` : clé d’encryption (persistée automatiquement)
- `SNAPER_MANAGE_CRONTABS` : pour désactiver la gestion automatique des crontabs (`false`, `0`)

## Exemples d’utilisation

### 1. Docker

Lancement ponctuel :
```sh
docker run --rm \
  -e AWS_ACCESS_KEY_ID=AKIA... \
  -e AWS_SECRET_ACCESS_KEY=secret \
  -e DATASHELTER_BUCKET=my-bucket \
  -e SNAPER_ENCRYPTION_KEY=my-encryption-key \
  datashelter/snaper:latest snaper backup
```

### 2. Docker Compose

```yaml
services:
  snaper:
    image: datashelter/snaper:latest
    environment:
      - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
      - DATASHELTER_BUCKET=${DATASHELTER_BUCKET}
      - SNAPER_ENCRYPTION_KEY=${SNAPER_ENCRYPTION_KEY}
```

### 3. Kubernetes

Injectez les variables via un `Secret` :

```yaml
envFrom:
  - secretRef:
      name: snaper-secret
```

## Points d’attention

- Si une variable obligatoire est manquante, Snaper affiche une erreur claire avec la liste des variables à ajouter.
- Si vous fournissez une clé d’encryption (`SNAPER_ENCRYPTION_KEY`), elle sera persistée sur disque : veillez à sécuriser le répertoire de configuration.
- Pour les environnements persistants, vous pouvez monter un volume pour conserver le fichier de configuration généré automatiquement.

## Sécurité

- Privilégiez l’utilisation de systèmes de gestion de secrets natifs (Docker secrets, Kubernetes Secrets…) pour injecter les variables sensibles.
- Évitez d’exposer les clés dans le code source, les images ou les logs.
