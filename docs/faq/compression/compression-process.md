---
description: "Snaper automatically compresses files with ZSTD before encryption and upload to S3. You can disable compression in config.yaml, but not retroactively."
---

# How is compression handled?

Our CLI tool, Snaper, automatically compresses your files **before encrypting and uploading them to S3**.

We use the **ZSTD** algorithm, which provides an optimal balance between **compression speed and efficiency**.

## Can I disable compression?

Yes, you can disable compression by setting the `general.enable_compression` value to `false` in your *~/.config/snaper/config.yaml* file.

**Important:** You cannot disable compression after backups have already been performed. Doing so would cause issues, as Snaper expects all previous files to be compressed and will attempt to decompress them, leading to errors in your S3 bucket.
