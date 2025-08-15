---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Snaper

## What is Snaper?
Snaper is Datashelter’s backup and snapshot agent that runs on your servers. It creates consistent snapshots of files and popular databases (MySQL, PostgreSQL, and MongoDB). Snaper is a single, self-contained binary written in Go, making installation and updates fast and reliable.

## Automatic install (recommended)
Install Snaper with one command:

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

## Update Snaper

- If your current Snaper version is 3.9.0 or newer, update in place:

```bash
snaper update
```

- If your version is older than 3.9.0, update by reinstalling using the same method you used to install (either rerun the automatic installer or download the newest binary for your OS/architecture and replace the existing `snaper` binary).

## Verify the installation

```bash
snaper --version
```