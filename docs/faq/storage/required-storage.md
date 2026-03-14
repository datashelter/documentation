# Estimating storage for your backups

The storage required for backups depends mainly on **how much data you have, how often it changes, and your retention policy**.

Snaper minimizes storage usage through **deduplication, compression, and incremental snapshots**, meaning only new or modified data is stored between backups.

## File Backups

For file-level backups, two mechanisms significantly reduce storage usage:

* **File deduplication** – identical files are stored only once.
* **Compression** – files are compressed before being stored. Text-based files (configs, code, etc.) can sometimes shrink by **up to 95%**.

As a result, storage growth mostly depends on **how much data changes between backups**, not the total size of your filesystem.

## Database Backups

For databases, Snaper performs a **dump followed by compression**.

On average, database dumps compress by **about 80%**.

Example:

* Database size: **100 MB**
* Compressed backup: **~20 MB**

With **daily backups for 30 days**, the required storage would normally be approximately:

**30 × 20 MB ≈ 600 MB**

However, we apply by default a **degressive retention policy** that keeps fewer backups as they get older, which further reduces long-term storage needs (see below).

## Retention Policies

Snaper uses **retention policies** to control how long backups are kept.

By default, it uses a **degressive retention policy**, which keeps recent backups more frequently and older ones less frequently:

* **Daily backups** for 7 days
* **3 backups per week** for the next 4 weeks
* **1 backup per week** for 3 months
* **1 backup per month** afterward

This approach significantly reduces long-term storage requirements while keeping enough restore points.

## Example: E-commerce Website

For an infrastructure with:

* **200 GB of files**
* **60 GB database**

Using Snaper’s **compression, deduplication, and degressive retention policy**, a full year of backups would typically require **around 600 GB of storage**.
