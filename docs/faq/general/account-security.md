---
description: "Account compromise protection: attackers can't access encrypted backups without your server keys. Soft deletion and 7-day retention prevent data loss."
---

# What happens if my account is compromised?

Datashelter is designed with **security by design** to protect your backups even in the event of a compromised account. Two main scenarios are possible:

1. An attacker gains access to your **Datashelter account**
2. An attacker gains access to your **server and its Datashelter credentials**

## Scenario 1: An attacker accesses your Datashelter account

If an attacker manages to log into your Datashelter account (for example if **two-factor authentication is not enabled**), they still **cannot access the contents of your backups**.

All backups are **encrypted locally on your server before being sent to Datashelter**. Without the encryption keys stored on your server, the data cannot be decrypted.

In this situation, the attacker could only:

* View the **names of your servers and backups**
* Modify **backup retention policies** (for example reducing retention duration)
* Attempt to **delete backups**

### Built-in protections

Datashelter includes safeguards to reduce the impact of malicious or accidental actions:

* **Soft deletion protection**
  When backups are deleted from the dashboard or using `snaper delete`, they are **retained for 14 days**. Our support team can restore them during this period.

* **Minimum retention policy**
  Datashelter always keeps **at least one backup per day for the last 7 days**, preventing attackers from removing all recent backups by modifying retention settings.

## Scenario 2: An attacker accesses your server

If an attacker gains access to your server and retrieves its **Datashelter credentials**, they could potentially interact with your backups.

However, Datashelter uses **immutable storage**, which prevents existing backups from being **modified, overwritten, or deleted** once they are stored.

### How to secure your account

If you suspect that your server credentials have been compromised, you can **reset them immediately** from the dashboard:

1. Go to **Servers**
2. Click the **gear icon** next to your server
3. Select **Configure my server**
4. Click **Reset credentials**

This action **invalidates the old credentials**, preventing any further access using them.

---

For additional protection, we strongly recommend enabling **two-factor authentication (2FA)** on your Datashelter account.
