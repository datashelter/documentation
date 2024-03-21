---
title: "50 shades of backups: emergence of a new typology"
description: Discover the different types of backups and how it evolved over time.
slug: fifty-shades-of-backups
authors:
  - name: Malo Paletou
    title: Founder of Datashelter
    url: https://github.com/mpaletou
    image_url: https://github.com/mpaletou.png
tags: [reflexions, data, backups, typology]
image: https://i.imgur.com/ADGdCrv.png
hide_table_of_contents: false
---

Backups is a subject that inevitably comes up in the workplace, whether you're a system administrator or simply the developer best qualified to install and maintain a server farm. However, it's easy to get lost when it comes to documenting the different types of backup.

The aim of this article is to present these different typologies, and to open the debate on a new backup paradigm.

### Traditional backup typologies

Despite the emergence of numerous innovative solutions on the market, blogs mainly talk about the fact that there are three backup typologies:
- **complete:** simply duplicates the production medium on a second storage medium
- **incremental:** starts from a full backup. Only files modified since the last backup are added.
- **differential:** starts from a full backup. Then, files modified since the last full backup are added.

Each of these types of backup has its advantages and disadvantages. Full backups are quick and easy to restore, at the expense of storage space.

Incremental and differential backups, on the other hand, optimize the amount of storage space used, but make the restoration process more complex. The advantage of differential over incremental backups is that restoration requires only the differential in question and its last associated full backup (whereas incremental backups require all previous increments). 

However, it is all too often overlooked that a final typology exists, combining all the advantages of the above-mentioned typologies: index-based backup.

### Index based backup

The only drawback of index-based backup is that it relies on an index to restore data, and often on software as well (this index having a particular format). On the other hand, it offers a major advantage: the restoration of deleted files.

Many modern technologies are based on this principle, such as [restic](https://restic.net/), [borgbackup](https://www.borgbackup.org/), [snaper (Datashelter)](https://datashelter.tech) or [Synology HyperBackup](https://www.synology.com/fr-fr/dsm/feature/hyper_backup).

This new method makes even more sense with the democratization of object storage. Indeed, there is no longer any limit either to the number of files or to the overall size of the bucket. Stored data could be represented in this way:

- /data
    - file blobs representing a complete file or a block of data
- /index
    - index_1
    - index_2

### Summary

To sum up, we can summarize the advantages and disadvantages of each of these backup typologies in the following table:

| Storage requirements | Backup time | Ease of restoration | Consideration of deletions | Interdependence between backups |
|----------------------|-------------|----------------------|----------------------------|---------------------------------|
| Complete             | ++++        | ++++                 | Yes                        | None                            |
| Incremental          | +           | ++                   | No                         | Total                           |
| Differential         | ++          | ++                   | No                         | Partial                         |
| Index based          | +           | ++++                 | Yes                        | None                            |
