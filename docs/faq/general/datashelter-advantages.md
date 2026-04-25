---
description: "Datashelter replaces DIY backup scripts (rsync, restic) with managed encryption, retention, immutable storage, and reliable alerting—no scripts to maintain."
---

# Why should I use Datashelter instead of managing my backups by myself?

It's legitimate to question the value of a Backup as a Service (BaaS) solution like Datashelter, especially if you already have system administration skills. Datashelter main value proposition is to provide you with a reliable, secure, and easy-to-use backup solution that takes care of all the complexities and challenges associated with managing backups on your own.

While setting up your own backup system using tools like `rsync`, `restic` would require you to maintain scripts, ensure your backups integrity over time, and set up monitoring and alerting for backup failures, Datashelter takes care of all these aspects for you so you are ready to go in 5 minutes.

Said otherwise, Datashelter is an easy answer to the following questions:
### Which backup tool should I use ?
  Datashelter uses Snaper, a backup agent built from the ground up to be efficient, secure, and easy to use. It encrypts your data with AES-256 using your own key before it ever leaves your server, compresses and deduplicates it to cut storage costs, and ships it to your S3 storage (yours or ours) — all from a single binary.

### Where should I store my backups ?
  Store your backups in one of our 5 managed storage locations (France, United-kingdom, Germany, Poland, Canada) or connect your own S3-compatible storage (AWS S3, Backblaze B2, Wasabi, etc.). With Datashelter, you can easily switch between storage locations without changing your backup configuration.

### How do I setup retention policies to optimize my storage costs ?
  Configure your retention policies in a human-friendly way with Datashelter, and benefits from our smart pruning system that automatically applies your retention policies to keep only the backups you need while optimizing your storage costs.

### How do I make my backups immutable ?
  With Datashelter, your backups are immutable by design. Even if your S3 credentials are compromised, your data cannot be altered or deleted thanks to our dedicated S3 proxy that applies specific logic to ensure the non-alteration of your data.

### How do I make sure I'll receive an alert if something goes wrong with my backups ?
  Making sure you'll indeed receive an alert if something goes wrong is harder than just adding an email command to your backup crontabs. Without an external system monitoring your backups, you'll face the Dead man's switch problem: how do you know if you didn't receive an alert because your backup succeeded or because your alerting system is broken ?
  With Datashelter, you can be sure you'll receive an alert in case of backup failure, and that you'll be notified if the alerting system itself is not working properly.
