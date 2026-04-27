---
description: "Datashelter pricing: Free covers 10GB and 2 services. Pro is 5€/server/month plus 7€/TB/month for managed storage—or use your own S3 to skip storage fees."
---

# How is my billing calculated?

## Available subscriptions

We currently have two different subscriptions:
- **Free plan:** free up to 10GB of storage and 2 services (database or file path) on a same server. This doesn't require any credit card so you will never receive any bill
- **Pro plan:** starts with a 14-day free trial and then billed monthly based on your usage, wiht the following items:
  - **Licencing fee:** 5€/server/month prorated every 24 hours based on the number of servers active in your account. A server is considered active if it has at least one backup configured on it.
  - **Storage fee:** 7€/TB/month for the managed storage used beyond the free-tier of 10GB. We keep track of the maximum storage used during your billing period (basically a month) to calculate your bill at the end of the month.

### Notes about storage fee
- We track the storage consumption of your whole project. Which means that if you have multiple servers in your account, we will sum the storage used by all these servers to calculate your bill.
- We do not charge storage costs if you decide to use your own S3-compatible storage (AWS S3, Backblaze B2, Wasabi, etc.) instead of our managed storage.


## Storage calculation example
Let's say you have a server with 3 backups configured on it, and you are using our managed storage. During the month, you used 800GB of storage for your backups. Your bill for that month would be calculated as follows:
- Licencing fee: 5€ (for one server)
- Storage fee: 7€ (for 790GB of storage used beyond the free-tier of 10GB, calculated as 7€/TB/month)
- Total bill: 12€
