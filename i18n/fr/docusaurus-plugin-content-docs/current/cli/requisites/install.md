---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installer Snaper

Snaper est un outil en ligne de commande conçu pour créer efficacement des instantanés de fichiers et de bases de données (MySQL, PostgreSQL et MongoDB). Il est écrit en Go, ce qui permet de l'installer facilement à l'aide d'une seule commande :

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