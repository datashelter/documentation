---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Datashelter offers a cutting-edge SaaS platform designed to streamline and fortify your backup processes effortlessly. With our intuitive solution, you can automate backups seamlessly, ensuring simplicity and security every step of the way. All it takes is configuring your server using our user-friendly CLI, and from there, we handle everything else – from storage management to alerting and retention policies.

To facilitate this seamless experience, we've developed Snaper, a powerful CLI tool crafted to simplify server configuration and backup management tasks. With Snaper at your disposal, you can confidently navigate your backup operations with ease and efficiency.

## How it works

<Tabs groupId="backup_type">
  <TabItem value="files" label="Files">
    1. Creating an index of your files (name, size, modification date, hash)
    2. Generating a differential index with the previous one
    3. Send changed files on S3-compatible storage (compressed & encrypted on-the-fly)
  </TabItem>
  <TabItem value="databases" label="Databases">
    1. Dump your database using your database client (mysql, postgresql, mongodb)
    2. Send the dump on S3-compatible storage (compressed & encrypted on-the-fly)
  </TabItem>
</Tabs>


### Why is snaper different ?

Snaper offers incremental backups with deduplication at the file level. While traditional methods like rsync incremental mode focus solely on changed or added files, Snaper goes one step further, indexing and storing the complete state of your files whether they've been added, changed, or even deleted. It ensures our ability to **restore your data at any desired point in time (including deleted files)**.

In a nutshell, snaper helps you make **storage-saving** backups thanks to compression and deduplication. That provides you with unmatched control and peace of mind, making data recovery a seamless and stress-free experience.

### Where do you store my data ?

At Datashelter, we prioritize the security and sovereignty of your data. That's why we've chosen to store your files in France 🇫🇷 - currently leveraging OVH Object Storage, a trusted and reliable S3-compatible solution.

Our ambition is to become a sovereign European 🇪🇺 alternative solution for data backup. We aim to provide an interface between your servers - whether they're dedicated, VPS, or on-premise - and object storage.

**Just give it a try and you will see 🚀**
