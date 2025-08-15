---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installer Snaper

## Qu’est-ce que Snaper ?
Snaper est l’agent de sauvegarde et de snapshot de Datashelter, exécuté sur vos serveurs. Il crée des instantanés cohérents de fichiers et de bases de données (MySQL, PostgreSQL et MongoDB). Snaper est un binaire unique écrit en Go, ce qui rend l’installation et les mises à jour rapides et fiables.

## Installation automatique (recommandée)
Snaper est un outil en ligne de commande conçu pour créer efficacement des instantanés de fichiers et de bases de données (MySQL, PostgreSQL et MongoDB). Il est écrit en Go, ce qui permet de l'installer facilement à l'aide d'une seule commande :

```bash
curl -sSL https://dl.datashelter.cloud/scripts/install-snaper.sh | bash
```

## Installation manuelle

Alternativement, vous pouvez installer Snaper manuellement en suivant les instructions ci-dessous :

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

## Mettre à jour Snaper

- Si votre version actuelle de Snaper est 3.9.0 ou plus récente, mettez à jour directement :

```bash
snaper update
```

- Si votre version est antérieure à 3.9.0, mettez à jour en réinstallant selon la même méthode que l’installation (relancez le script d’installation automatique ou téléchargez le binaire le plus récent pour votre système et remplacez le binaire `snaper` existant).

## Vérifier l’installation

```bash
snaper --version
```
