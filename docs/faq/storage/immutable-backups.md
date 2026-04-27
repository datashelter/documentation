---
description: "Datashelter backups are immutable by default. They cannot be deleted or modified, even with compromised S3 credentials—read-only is enforced at the proxy."
---

# Are my backups immutable?

Immutable storage for your backups is a native Datashelter feature. This means your backups cannot be deleted or modified—even if your S3 credentials are compromised.

You will have read-only access.

This is enforced logically at the `s3.datashelter.cloud` proxy we use to interact with your S3 bucket, whether hosted by us or by a third-party provider.
