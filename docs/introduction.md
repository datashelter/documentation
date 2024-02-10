---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Datashelter is a SaaS platform that automates your backups in a simple and secure manner. All you need to do is configure your server using our CLI, and let us handle the rest (storage, alerting, and retention policies).

To facilitate this, we developed snaper, a CLI tool that assists you in configuring your server and managing your backups.

## How it works

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
    1. Creates an index of your files, including name, size, modification date, and hash
    2. Generates a differential index compared to the previous index
    3. Sends changed files to S3-compatible storage, compressing and encrypting them on-the-fly
  </TabItem>
  <TabItem value="databases" label="Databases">
    1. Use your database client (mysql, postgresql, mongodb) to create a dump of your database
    2. Transfer the dump to an S3-compatible storage system, making sure to compress and encrypt it on-the-fly
  </TabItem>
</Tabs>


### Why is snaper different ?

snaper creates incremental backups with file-level deduplication. Unlike traditional methods such as rsync incrementals, which only store changed or added files, snaper takes it a step further. It indexes and stores the complete state of your files, whether they have been added, changed, or deleted. This feature ensures snaper's ability to **restore your files at any point in time (including deletions)**.

In short, snaper aids in creating **storage-efficient** backups, courtesy of its compression and deduplication capabilities.

### Where do you store my data ?

At Datashelter, we prioritize the security and sovereignty of your data. That's why we exclusively store your files in France 🇫🇷 - currently leveraging OVH Object Storage, a trusted and reliable S3-compatible solution.

Our ambition is to become a sovereign European 🇪🇺 alternative solution for data backup. We aim to provide an interface between your servers - whether they're dedicated, VPS, or on-premise - and object storage.

**Just give us a try and you will see 🚀**
