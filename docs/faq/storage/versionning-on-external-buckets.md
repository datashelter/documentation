# Why do I need to enable versioning on my external buckets?

We enforce versioning on your external S3 buckets so you can benefit from immutable backups. We protect your backups against accidental or malicious deletion using specific logic at the `s3.datashelter.cloud` proxy.

Concretely, DELETE object requests are ignored, and requests that attempt to overwrite an object are accepted. If we accept an overwrite, we must keep the previous version of the object to maintain backup consistency. That’s why versioning must be enabled on your bucket.

