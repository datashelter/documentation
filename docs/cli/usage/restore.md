---
sidebar_position: 5
---

# restore



### Restore only specific files
Locate the snapshot you want to restore. By default, your indexes are stored in the .config/snaper/index_cache.

As this is a CSV file, you can remove the files you don't want and save it back to local storage.

Then, execute the following command to restore the index:

```markdown
snaper restore --name <backup_name> --snapshot <index_filename> --path <path_where_to_restore>

```
