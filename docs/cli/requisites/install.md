---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Snaper

## Automatic install (recommended)
Snaper is a command-line tool designed for efficient snapshot creation for files and databases (MySQL, PostgreSQL, and MongoDB). It's written in Go, allowing for easy installation with just a single command:

```bash
curl -sSL https://dl.datashelter.cloud/scripts/install-snaper.sh | bash
```

## Manual install

Alternatively, you can manually install Snaper by following the instructions below:

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