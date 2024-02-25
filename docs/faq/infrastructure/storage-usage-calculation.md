---
sidebar_position: 1
description: Storage usage calculation
---

# Storage usage calculation

We simply calculate the total size of the objects in your buckets. This means that the calculation of the used storage space does not take into account the storage space savings achieved thanks to these two snaper features:

- **File level deduplication:** if the file has not changed, it is included in the new snapshot without using additional storage space.
- **Compression of your data:** snaper compresses your data before sending it to remote storage. For text files like your log files or your source code, this can save you up to 95% of storage space.

Compared to traditional backup techniques, our solution requires up to 30 times less disk space to store your data. This allows us to be more efficient and save you money! 💵