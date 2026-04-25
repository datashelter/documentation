---
description: "Datashelter sends alerts for missing or failed backups, suspicious 80%+ data changes between backups (ransomware indicator), and monthly integrity checks on external S3 buckets for backup authenticity."
---

# Which email alerts may I receive for my backups?

We currently have three different scenarios in which you will receive email alerts:
- **missing backup/backup failure:** you will receive an alert if the platform does not receive a backup from your server during a period when one was expected. This may happen for various reasons, such as:
  - backup failure
  - server downtime
  - network outage
  
- **big size delta between backups:** you will be notified if more than 80% of your data changes between two consecutive backups. A sudden and significant increase in changed data may indicate abnormal activity, such as a potential ransomware attack.

- **integrity check failure (Bring Your Own Storage only):** we run a monthly integrity check on backups stored in your own S3 bucket. Our logical immutable storage protects backups from modification, but it cannot prevent someone with separate S3 credentials from deleting objects directly from the bucket. If external deletions affect a snapshot, you will receive an alert indicating which snapshot may have been compromised.