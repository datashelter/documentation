# Infrastructure details

## What's under the hood?

Datashelter is built around the S3 protocol, with additional custom components that provide features such as:
- **Alerts:** We continuously monitor your backups and notify you if something goes wrong. For instance, if your last backup hasn't been received, you'll receive an email alert.
- **Retention:** We manage the retention of your backups, making it easy to configure downsampling rules for database dumps. For example, you can choose to keep 1 backup per day for the last 7 days, 1 backup per week for the last 4 weeks, 1 backup per month for the last 6 months, etc. For file backups, we retain all indexes for 1 year through deduplication.
- **Data tampering protection:** With our custom S3 gateway, your backups are secure even if your S3 credentials are compromised. Your backups are immutable, meaning they cannot be deleted or modified. You will only have read access to them.
- **High segmentation:** Every server created in Datashelter is isolated from the others, each with its own dedicated bucket and credentials. This ensures that if one server is compromised, the others remain unaffected.

![Datashelter infrastructure](../../assets/faq/datashelter_infrastructure_schema.png)

## Want to know more?

If you're interested in learning more about our unique security features, we invite you to read our blog post: [How Datashelter ensures the security of your backups](https://datashelter.tech/blog/datashelter-security-features/).

For further information, our support team is happy to assist and provide additional details about how Datashelter works. Feel free to reach out to us at contact@datashelter.tech.