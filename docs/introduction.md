---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Introduction

Datashelter is a straightforward, integrated backup solution for Linux servers.
It’s built to make backups actually manageable: no complex setup, no scripts to maintain.
With a few commands, you can back up your files and databases to any S3-compatible storage, securely and automatically.

Datashelter handles encryption, compression, deduplication, and scheduling for you — so your backups stay lightweight, safe, and easy to restore when things go wrong.

### How it works

At the core of Datashelter is Snaper, a lightweight CLI written in Go.
Snaper runs directly on your servers and takes care of every step of the backup process:
- Scans and tracks changes at the file level
- Compresses and encrypts data locally
- Uploads it to your S3 storage (yours or ours)
- Manages incremental and deduplicated backups automatically

Unlike tools like rsync, Snaper doesn’t just copy changed files — it uses an index-based backup method that identifies changes inside files and only transfers what’s necessary.
This makes backups faster, smaller, and more efficient.


---
## Explore the docs

<div className="row">
	<div className="col col--6">
		<div className="card margin-vert--md">
			<div className="card__body">
				<h3>Get started</h3>
				<p>Step-by-step quickstart to create an account, add your first server and configure Snaper.</p>
				<Link to="/quickstart" className="button button--secondary">Let's start</Link>
			</div>
		</div>
	</div>

	<div className="col col--6">
		<div className="card margin-vert--md">
			<div className="card__body">
				<h3>Install/Configure snaper</h3>
				<p>Reference for Snaper commands, configuration parameters and environment variables.</p>
				<Link to="/cli/requisites/install/" className="button button--secondary">Install snaper</Link>
			</div>
		</div>
	</div>
</div>

