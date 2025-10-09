---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installer Snaper

Cette page explique comment installer le binaire Snaper. Elle inclut un installateur automatique rapide (recommandé), des téléchargements manuels pour différents systèmes/architectures, comment vérifier l'installation, les instructions de mise à jour et une courte section de dépannage.

## Prérequis

- Un shell compatible POSIX (bash, zsh, etc.).
- curl installé et accès réseau vers dl.datashelter.cloud.
- Permission pour déplacer des fichiers dans un répertoire système (sudo) ou un répertoire en écriture présent dans votre PATH si vous préférez une installation locale.
- Plateformes supportées : Linux, macOS (Darwin), FreeBSD. Architectures supportées : amd64 et arm64.

## Installation

### Installation rapide (recommandée)

Installez Snaper avec une seule commande. C'est la méthode la plus simple et recommandée :

```bash
curl -sSL https://dl.datashelter.cloud/scripts/install-snaper.sh | bash
```

L'installateur placera le binaire `snaper` dans un emplacement système (typiquement `/usr/local/bin`) ou dans l'emplacement que vous choisirez lors de l'exécution du script.

### Installation manuelle

Si vous préférez ne pas exécuter le script d'installation, téléchargez le binaire correspondant à votre système d'exploitation et à votre architecture, rendez-le exécutable et déplacez-le vers un répertoire présent dans votre PATH.

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
    <Tabs groupId="arch" defaultValue="amd64">
        <TabItem value="amd64" label="amd64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/linux/amd64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
        <TabItem value="arm64" label="arm64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/linux/arm64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="darwin" label="Darwin">
      <Tabs groupId="arch" defaultValue="amd64">
        <TabItem value="amd64" label="amd64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/darwin/amd64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
        <TabItem value="arm64" label="arm64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/darwin/arm64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="freebsd" label="FreeBSD">
      <Tabs groupId="arch" defaultValue="amd64">
        <TabItem value="amd64" label="amd64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/freebsd/amd64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
        <TabItem value="arm64" label="arm64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/freebsd/arm64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

Notes :
- Si vous ne souhaitez pas utiliser `sudo` ou ne pouvez pas écrire dans `/usr/local/bin`, déplacez le binaire vers un autre répertoire présent dans votre PATH (par exemple `$HOME/bin`) et assurez-vous que ce répertoire est dans votre PATH.
- L'option `-k` est utilisée dans les commandes curl ci‑dessus pour préserver le comportement original ; si vous préférez une vérification TLS stricte, vous pouvez supprimer `-k`.

## Vérifier l'installation

Exécutez :

```bash
snaper --version
```

Vous devriez voir la chaîne de version installée.

## Mettre à jour Snaper

- Si votre version actuelle de Snaper est 3.9.0 ou plus récente, mettez à jour en place :

```bash
snaper update
```

- Si votre version est antérieure à 3.9.0, mettez à jour en réinstallant en utilisant la même méthode que pour l'installation (relancez l'installateur automatique ou téléchargez le binaire le plus récent pour votre OS/architecture et remplacez le binaire `snaper`).

## Désinstaller

Pour supprimer le binaire système installé dans `/usr/local/bin` :

```bash
sudo rm /usr/local/bin/snaper
```

Si vous avez installé le binaire ailleurs (par exemple `$HOME/bin`), supprimez-le depuis cet emplacement à la place.

## Dépannage

- snaper: commande introuvable — vérifiez que le binaire est sur votre PATH et possède les permissions d'exécution. Pour un contrôle rapide :

```bash
which snaper || echo "$HOME/bin/snaper"
ls -l $(which snaper 2>/dev/null || true)
```
- Permission refusée lors du déplacement du binaire — relancez l'étape mv avec `sudo` ou choisissez un répertoire en écriture.
- Si l'installateur automatique échoue, essayez le téléchargement manuel pour votre plateforme.

Si vous avez toujours des problèmes, consultez la page de support ou ouvrez une demande de support.
