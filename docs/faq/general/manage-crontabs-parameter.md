# What is manage_crontab parameter?

As of July 2024, we introduced a new crontab management feature on snaper. Linked to the panel, it allows you to set a recurrence for your backups (eg: dump my database everyday at 2 PM)

![Automatic scheduling](../../assets/faq/crontab_scheduling.png)

Under the hood, snaper will manage it’s own crontab list on your server by adding a new crontab for each backup you set a recurrence for:
    
    ```bash
# SNAPER MANAGED CRONTABS
5 1 * * * /usr/local/bin/snaper backup files --name lingering-moon >> /tmp/snaper.log 2>&1
# END OF SNAPER MANAGED CRONTABS
    ```
