# Which path should I specify when configuring my server?

When configuring your server, you should specify the path where you want your backups to be stored. This could be a local directory on your server or a path in an external storage service (like AWS S3, Google Cloud Storage, etc.) if you're using one.

The local path where the files to be backed up are located (e.g., /var/lib/mysql).

Explanation

When setting up your server in Datashelter, you need to specify the local path(s) that the Snaper agent should back up.

Examples:

/etc for system configurations

/var/lib/mysql for MySQL databases

/home/app/data for application data

👉 This field precisely determines which data is protected.