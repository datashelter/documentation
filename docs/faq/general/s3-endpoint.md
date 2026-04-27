---
description: "Datashelter routes backups through s3.datashelter.cloud, a custom proxy that enforces immutable storage (WORM) by blocking deletions and versioning overwrites."
---

# Why is my S3 endpoint `s3.datashelter.cloud`?

Snaper communicates with Datashelter exclusively using S3-compatible calls (built on top of HTTPS).

To provide immutable storage (WORM) features, your data transits through a dedicated S3 proxy hosted at `s3.datashelter.cloud` exposing only the routes snaper needs to perform its operations. This proxy applies specific logic to ensure that your data cannot be altered or deleted, even if your S3 credentials are compromised.

## Backup immutability

There are two ways to alter an object in object storage: deletion (DELETE) and overwrite (PUT that replaces an existing key). The proxy applies different rules to prevent irreversible alteration:

- Blocking object deletion requests (DELETE): the proxy accepts the request at the protocol level but performs no deletion in storage.
- Versioning on overwrite attempts: when a rewrite occurs, the proxy creates a new version of the object instead of overwriting the previous one.

These mechanisms ensure the non-alteration of your data, even if your server’s S3 credentials are compromised.
