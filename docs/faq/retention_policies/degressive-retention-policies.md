# What are degressive retention policies?

You can define simple retention policies (90 days or 365 days) or degressive retention policies (also called downsampling). Degressive retention policies reduce the number of stored backup versions over time, keeping more recent versions and fewer older ones. This helps optimize storage costs while ensuring that you have access to recent backups when needed

We typically recommend going for degressive retention policies for your database backups. Even though database dumps have good compression ratio (80% on average), they can still take up a lot of storage space as deduplication is not effective on them.

## Standard degressive retention policy
We recommend a standard degressive retention policy for databases. It is the default downsampling policy applied when you pick the "degressive" option in your retention settings.

Here’s how this standard degressive retention policy works:
* Keep all backups from the last 7 days (7 backups, 7 day retention period)
* Keep 3 backups per week for the next 3 weeks (9 backups, 1 month retention period)
* Keep 1 backup per week for the next 8 weeks (8 backups, 2 month retention period)
* Keep 1 backup per month for the next 12 months (11 backups, 1 year retention period)

## Customization
You can tailor this policy to your needs. For example, you can keep more or fewer recent backups, or adjust the frequency retained for older periods.

It’s common to back up an e-commerce database hourly, since losing recent customer orders can be impactful. In that case, you might keep 24 hourly backups for the last 24 hours, then apply the default downsampling policy for older backups.

## Quantified example
Suppose you perform daily database backups, of a 100MB database, with an 80% compression ratio. Here’s how storage requirements would differ with and without downsampling after one year:
* Without degressive retention policy: 365 backups, i.e., about 29.2GB of data (365 x 0.80 x 100MB)
* With the standard degressive retention policy: 35 backups, i.e., about 2.8GB of data (35 x 0.80 x 100MB)

This means that you can save more than 90% of the storage space with a degressive retention policy!