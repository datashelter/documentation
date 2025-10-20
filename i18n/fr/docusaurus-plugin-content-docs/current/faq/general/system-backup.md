# Puis-je sauvegarder tout mon système avec Datashelter ?

Datashelter permet la sauvegarde complète du système. Cette fonctionnalité requiert une configuration précise et une compréhension des contraintes techniques.

## Script de Sauvegarde Système

Notre équipe a validé cette approche de sauvegarde/restauration système complète. Le script suivant cible les composants système essentiels tout en excluant les chemins incompatibles :

```bash
#!/bin/bash
set -e

# Exclusions communes (séparées par des virgules, un seul argument)
EXCLUDES="/proc/*,/sys/*,/dev/*,/run/*,/tmp/*,/var/tmp/*,/var/cache/*,/var/lock/*,/var/run/*,/mnt/*,/media/*,/lost+found,/swapfile,\
/root/.config/snaper/*,/home/*/.config/snaper/*,/usr/local/bin/snaper,\
/var/backups/*,\
/etc/fstab,/etc/hostname,/etc/hosts,/etc/machine-id,\
/etc/netplan/*,/etc/network/*,/etc/systemd/network/*,/etc/udev/rules.d/70-persistent-net.rules,\
/etc/default/grub,/etc/initramfs-tools/*"

# Répertoires de niveau supérieur à sauvegarder
for dir in /etc /root /home /usr/local /opt /var/lib /var/www /srv; do
  name=$(basename "$dir" | tr '/' '-')
  echo "==> Sauvegarde de $dir ..."
  snaper backup files --path "$dir" \
    --name "${name}-backup" \
    --exclude "$EXCLUDES"
done
```

:::note
Cette approche est générique. Adaptez les chemins selon votre configuration applicative spécifique.
:::

## Exclusions Système

Les exclusions suivantes sont impératives pour éviter les conflits système :

- **Systèmes de fichiers virtuels** : `/proc`, `/sys`, `/dev`, `/run` - Créés au démarrage
- **Fichiers temporaires** : `/tmp`, `/var/tmp`, `/var/cache` - Données temporaires qui ne doivent pas être restaurées
- **Configuration réseau** : `/etc/netplan`, `/etc/network` - Paramètres réseau spécifiques au matériel
- **Identifiants système** : `/etc/machine-id`, `/etc/hostname` - Doivent être uniques par machine
- **Configuration de démarrage** : `/boot`, `/etc/default/grub` - Spécifiques au matériel et au système

## Validation de la Restauration

Les tests de restauration confirment les résultats suivants :

### Fonctionnalités Validées

- **Continuité des services** : Les services redémarrent automatiquement et maintiennent leur état opérationnel
- **Récupération applicative** : Les applications web, bases de données et données utilisateur sont fonctionnelles

Exemple de statut de service après restauration :
```bash
root@serveur-restaure:~# systemctl status nginx
● nginx.service - LSB: starts the nginx web server
     Loaded: loaded (/etc/init.d/nginx; generated)
     Active: active (exited) since Mon 2025-10-13 13:03:05 UTC; 31s ago
```

### Contraintes Techniques

**Limitation principale** : La restauration peut endommager le système selon la machine de destination. Les incompatibilités matérielles et logicielles génèrent des dysfonctionnements critiques :

- **Échecs de démarrage** : Incompatibilité des configurations matérielles
- **Conflits réseau** : Interfaces et configurations réseau divergentes
- **Dépendances système** : Pilotes et configurations liés au matériel d'origine

## Prérequis de Sécurité

:::danger
**OBLIGATOIRE** : La restauration système doit exclusivement s'effectuer sur une machine neuve. Toute restauration sur un système en production présente des risques de corruption irréversibles.
:::

## Directives d'Implémentation

1. **Validation préalable** : Testez systématiquement la procédure sur un environnement isolé
2. **Configuration sur mesure** : Adaptez les exclusions selon votre architecture système
3. **Documentation technique** : Maintenez un inventaire des dépendances matérielles
4. **Usage en reprise d'activité** : Réservez cette méthode aux scénarios de disaster recovery
5. **Solutions complémentaires** : Implémentez des solutions spécialisées pour les composants critiques en production

Cette solution constitue un standard robuste pour la sauvegarde système. Son déploiement exige une validation complète dans votre environnement technique.