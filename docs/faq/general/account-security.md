# What if my account is compromised?

We take the security of your backups very seriously. That's why we designed Datashelter to provide you with maximum security "by design". We identify two possible scenarios in case of account compromise:
- An attacker accesses your account but not your server
- An attacker accesses your server and retrieves its Datashelter credentials

## An attacker accesses your account but not your server
Unless you have enabled two-factor authentication (2FA), an attacker could log into your Datashelter account. However, without access to your server, they could not access your backups.

Indeed, backups are encrypted locally on your server before being sent to Datashelter. Without the encryption keys stored on your server, the data remains inaccessible.

The only actions an attacker could perform are:
- View the names of your servers and backups
- Modify your backup retention policies (for example, reduce the retention duration of backups)
- Delete your backups from our servers

To limit the impact, we enforce the following two security rules on all accounts:
- Your backups are **kept for 14 days after deletion** from the dashboard or via the `snaper delete` command. Our support team is therefore able to restore your backups deleted by mistake or maliciously, even after their deletion on the dashboard.
- Retention policies **keep at least one backup per day for the last 7 days**. This ensures the availability of backups even in case of accidental compromise of your account, where the attacker would try to delete your backups by reducing the data retention policy to the maximum.

## An attacker accesses your server and retrieves its Datashelter credentials

If an attacker manages to access your server and retrieve its Datashelter credentials, they could potentially access your backups. However, it will be **impossible for them to delete or overwrite an existing backup** thanks to our native immutable storage feature.

Furthermore, you have the ability to reset your server's Datashelter credentials via the dashboard by going to the "*Servers*" section and clicking on the gear icon "*Configure my server*", then "*Reset credentials*". This will invalidate the old credentials, thus preventing any unauthorized access to your backups.

