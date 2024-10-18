# Estimating required storage for your backups

The required storage space for backups varies significantly depending on the application. Below, we provide guidelines to help you estimate the necessary storage capacity for your backups using snaper.

## File backup

Snaper offers efficient mechanisms to minimize backup size:

- **File deduplication:** identical files are stored only once, avoiding redundant storage.
- **Compression:** files are compressed before storage, significantly reducing their size. For example, text files can experience up to a 95% reduction in size.

## Database backup

For database backups, snaper performs a dump followed by compression, typically achieving an 80% reduction in size. For instance, a 100MB database would require approximately 600MB for a month's backups (30 days x 0.80 x 100MB).
Downsampling Strategy

Implementing a **downsampling strategy** can further reduce storage needs:

- Daily backups for the first week (7 days)
- Three backups weekly for the next four weeks
- Four monthly backups for the remainder of the year

With this approach, a month's backup for a 100MB database would require around 320MB.

## Practical example: E-commerce site backup

Consider backing up a large e-commerce platform with the following data:

- **Files:** 300GB
- **Database:** 60GB

Utilizing snaper's backup mechanisms, you would need approximately 700GB of storage for daily backups over a year.
