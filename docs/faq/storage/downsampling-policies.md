# What are downsampling policies?

Downsampling policies reduce the number of stored backup versions over time—keeping more recent versions and fewer older ones. This helps optimize storage usage while maintaining adequate protection.

This feature is especially useful for database backups, where file-level deduplication is ineffective. That’s why it’s enabled by default for database backups.

Here’s how the default downsampling policy works:
* Keep all backups from the last 7 days (1 per day)
* Keep 3 backups per week for the last 4 weeks
* Keep 1 backup per week for the last 12 weeks
* Keep 1 backup per month for the last 12 months

## Customization
You can tailor this policy to your needs. For example, you can keep more or fewer recent backups, or adjust the frequency retained for older periods.

It’s common to back up an e-commerce database hourly, since losing recent customer orders can be impactful. In that case, you might keep 24 hourly backups for the last 24 hours, then apply the default downsampling policy for older backups.

## Quantified example
Suppose you perform daily database backups, each 1 GB compressed.
* Without downsampling, after 1 year you’d have 365 backups, i.e., about 365 GB of data.
* With the default downsampling policy, you’d have around 33 backups, i.e., about 33 GB—more than 90% storage savings.