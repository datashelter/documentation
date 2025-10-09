---
sidebar_position: 1
description: Storage usage calculation
---

# Storage usage calculation

We simply calculate the total size of the objects in your buckets. This means the used storage reflects savings from Snaper’s compression and deduplication features:

- **File-level deduplication:** if a file hasn't changed, it’s indexed in the new backup without being re-sent or re-stored.
- **Data compression:** Snaper compresses your data and indexes using the Zstandard (zstd) algorithm before sending them to remote storage. For text files like logs or source code, this can save up to 95% of storage.

Compared to traditional backup techniques, our solution can require up to 30x less disk space to store your data. That makes us more efficient—and saves you money! 💵