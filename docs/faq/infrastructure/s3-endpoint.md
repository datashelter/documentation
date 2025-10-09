# Why does my server communicate with s3.datashelter.cloud?

Snaper communicates exclusively via HTTPS calls to S3-compatible endpoints, signed with the S3 Signature v4 authentication algorithm.

To provide immutable storage (WORM) features, your data transits through a dedicated S3 proxy hosted at `s3.datashelter.cloud`.

There are two ways to alter an object in object storage: deletion (DELETE) and overwrite (PUT that replaces an existing key). The proxy applies different rules to prevent irreversible alteration:

- Blocking object deletion requests (DELETE): the proxy accepts the request at the protocol level but performs no deletion in storage.
- Versioning on overwrite attempts: when a rewrite occurs, the proxy creates a new version of the object instead of overwriting the previous one.

These mechanisms ensure the non-alteration of your data, even if your server’s S3 credentials are compromised.

