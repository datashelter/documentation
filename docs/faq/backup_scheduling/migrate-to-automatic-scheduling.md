---
sidebar_position: 1
---

# How to migrate from manual crontabs to automatic scheduling?

If you already had set crontabs for snaper’s execution, you can follow one of these two options:
1. Define `manage_crontab` parameter to false (or just never set them on the dashboard) → **not recommended as you won’t receive email alerts if something goes wrong**
2. Remove the crontabs you already had set and set them from your dashboard. If you didn’t notice, you now have a dedicated button on your dashboard to do so

![Automatic scheduling](../../assets/faq/crontab_scheduling.png)
