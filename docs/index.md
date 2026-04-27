---
description: "Datashelter is a lightweight backup platform for Linux servers. Snaper, its CLI, encrypts, compresses, and deduplicates data to any S3-compatible storage."
---

# Introduction

Datashelter is a straightforward, integrated backup solution for Linux servers.
It’s built to make backups actually manageable: no complex setup, no scripts to maintain.
With a few commands, you can back up your files and databases to any S3-compatible storage, securely and automatically.

Datashelter handles encryption, compression, deduplication, and scheduling for you — so your backups stay lightweight, safe, and easy to restore when things go wrong.

## How it works

At the core of Datashelter is Snaper, a lightweight CLI written in Go.
Snaper runs directly on your servers and takes care of every step of the backup process:
- Scans and tracks changes at the file level
- Compresses and encrypts data locally
- Uploads it to your S3 storage (yours or ours)
- Manages incremental and deduplicated backups automatically

Unlike tools like rsync, Snaper doesn’t just copy changed files — it uses an index-based backup method that identifies changes inside files and only transfers what’s necessary.
This makes backups faster, smaller, and more efficient.


## Explore the docs

::: card 🚀 Get started
Step-by-step quickstart to create an account, add your first server, and configure Snaper.

[Let's start](/quickstart)
:::

::: card 💻 Install/Configure Snaper
Reference for Snaper commands, configuration parameters, and environment variables.

[Install Snaper](/cli/requisites/install)
:::

<div class="ds-explore-cards-end"></div>
