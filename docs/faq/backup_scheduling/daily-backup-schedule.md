---
description: "Pick a one-hour backup window in the dashboard; the agent assigns the exact minute inside that window to spread load. Backups run consistently each day."
---

# How are my daily backups scheduled?

With the agent, you no longer pick an exact time for your backups. Instead, you select a **one-hour window** on the dashboard during which you want the backup to run.

Datashelter then automatically assigns the exact minute inside that window when the agent will trigger the backup. The minute is chosen once and stays stable, so your backups run at the same time every day — it is simply picked for you to spread load evenly across all servers.

## Why this matters

- **Even load** — running thousands of backups at `00:00` sharp would spike network and storage on both ends. Spreading them across a full hour keeps transfers smooth.
- **Same guarantee** — your backup still runs every day, within the window you picked. You keep control of *when*, Datashelter picks the exact *minute*.
- **No crontab to edit** — schedules are managed from the dashboard and applied by the agent automatically.

If you prefer to keep full manual control over the minute, you can still use [manual scheduling](/faq/backup_scheduling/stay-with-manual-scheduling) via your own crontabs.
