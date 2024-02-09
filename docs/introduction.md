---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Datashelter is a SaaS platform that automate your backups with a simple and secure way. We just need you to configure your server using our CLI and we will take care of the rest for you (storage, alerting, retention policies).

For this purpose, we developed snaper which is a CLI tool that will help you to configure your server and manage your backups.

## How it works

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
    1. Make an index of your files (name, size, modification date, hash)
    2. Generate a differential index with previous index
    3. Send changed files on S3 (compressed & encrypted on the fly)
  </TabItem>
  <TabItem value="databases" label="Databases">
    1. Dump your database using your database client (mysql, postgresql, mongodb)
    2. Send the dump on S3 (compressed & encrypted on the fly)
  </TabItem>
</Tabs>


### Why is snaper different ?

snaper makes incremental backups with deduplication at file level. When rsync incrementals are only storing changed/added files, snaper is making an index of your files and store the whole status of your files (added, changed, deleted). So we are able to **restore your files at any point in time (even deletions)**.

To be short, snaper helps you to make **storage efficient** backups (thanks to compression & deduplication).

### Where do you store my data ?

Your files are stored in France 🇫🇷 on an S3 compatible storage (we currently rely on OVH Object storage).

Our ambition is to become a sovereign European 🇪🇺 alternative for data backup. We aim to provide an interface between your servers (dedicated, VPS, on-premise) and object storage.

**Just give us a try and you will see 🚀**