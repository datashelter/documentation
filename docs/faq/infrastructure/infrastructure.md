# Our infrastructure

## Under the hood of Datashelter

Datashelter is built on the S3 protocol, with additional custom components that provide features such as:

- **Alerts:** We continuously monitor your backups and notify you if something goes wrong. For instance, if your last backup hasn't been received, you'll receive an email alert.
- **Retention:** We manage the retention of your backups, making it easy to configure downsampling rules for database dumps. For example, you can keep 1 backup per day for the last 7 days, 1 per week for the last 4 weeks, 1 per month for the last 6 months, etc. **For file backups, we keep indexes for 1 year thanks to deduplication.**
- **Data tampering protection:** With our custom S3 gateway, your backups remain secure even if your S3 credentials are compromised. Your backups are immutable, meaning they cannot be deleted or modified. You will have read-only access.
- **Strong segmentation:** Each server created in Datashelter is isolated from the others, with a dedicated bucket and credentials. This ensures that if one server is compromised, others are not impacted.

![Datashelter infrastructure](../../assets/faq/datashelter_infrastructure_schema.png)

## Learn more

If you want to dive deeper into our unique security features, check out our blog post: [How does Datashelter guarantee the security of your backups?](https://datashelter.tech/blog/datashelter-security-features/)

For any additional information, our support team is available to provide more details about how Datashelter works. Contact us at support@datashelter.tech.