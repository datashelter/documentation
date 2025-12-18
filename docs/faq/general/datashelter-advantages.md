# Can I manage my backups by myself?

It's legitimate to question the value of a Backup as a Service (BaaS) solution like Datashelter, especially if you already have system administration skills.

However, you should keep in mind that integrating the various features necessary for reliable backups is time-consuming and requires going beyond simple backups using tools like `rsync` or `restic`.

Here are some key advantages of using Datashelter for your backups:
1. **Simplicity of installation and use**: you won't have to test different backup tools to find one that covers the basic features (client-side encryption, deduplication, compression, scheduling, retention, etc.)
2. **Alerting in case of backup incidents**: we alert you in case of failure, size anomaly, or integrity issues with your backups through an external system, guaranteeing the reliability of alerts. Nothing worse than discovering your backups are corrupted or incomplete the day you need them, right?
3. **Immutable backups**: thanks to a software layer in front of the s3.datashelter.cloud endpoint, your backups are protected against any modification or deletion. This ensures the availability of your backups even in case of compromise of your server or your Datashelter account.
4. **Support and maintenance**: you benefit by default and unlimited from technical support from experts who speak your language and will know how to support you in case of crisis.
5. **You only pay for what you use**: our pricing model is based on the actual usage of your backups (volume stored and backed-up servers). You therefore only pay for what you actually use.

