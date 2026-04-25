---
description: "Database autodiscovery probes MySQL, PostgreSQL, and MongoDB via Unix sockets (preferred for local) or TCP/IP (remote). Requires minimal privileges: connect and list databases. Timeouts keep autodiscovery fast."
---

# Which database access is needed for autodiscovery?

When the agent runs database autodiscovery, it tries to reach each supported engine (MySQL/MariaDB, PostgreSQL, MongoDB) using two connection methods, in this order:

- **Unix socket** — the default for local installations of MariaDB, MySQL, and PostgreSQL. Peer/socket authentication lets Snaper connect as a local user without needing an IP address or a network-exposed port. This is the recommended path when the database runs on the same server.
- **TCP/IP** — the classic network connection, using a host, a port, and a username/password pair. Used when the database is on a different host or when socket authentication is not available.

Each probe has a short timeout (a few seconds per engine) and probes run in parallel, so autodiscovery stays fast even when some engines are unreachable.

## What the probing account needs

The account used by the agent only needs enough privileges to:

1. Connect to the server.
2. List the existing databases (e.g. `SHOW DATABASES` on MySQL, `SELECT datname FROM pg_database` on PostgreSQL).

If the account can connect but cannot list databases (common with hardened backup roles), autodiscovery will still report the instance as reachable and let you enter the database name manually from the dashboard.
