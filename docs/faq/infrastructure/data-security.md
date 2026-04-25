---
description: "Datashelter security: client-side AES-256 encryption, S3-only communication, push-only model with no SSH access, per-server credentials, immutable backups, 14-day safe deletion delay, and OVHcloud ISO 27001 certified hosting."
---

# How Datashelter keeps your data secure

Security is at the core of everything we do at Datashelter. Our solution is designed to provide strong, auditable guarantees that go well beyond a typical outsourced backup service.

## Secure by design, from the start

Snaper, our backup agent, protects your data from the moment it leaves your servers through four key principles.

### S3 API communications only

All interactions use the standard S3 protocol, signed with S3 Signature v4:

- **Confidentiality in transit** — every call is encrypted with TLS (HTTPS).
- **Request integrity** — S3 SigV4 protects against request tampering and replay attacks.
- **Simple network controls** — you can restrict outbound rules to allow only HTTPS connections to `s3.datashelter.cloud`.

### Push-only model

Your servers push backups out. Datashelter never initiates connections back to them:

- **Reduced attack surface** — no inbound ports to expose.
- **Compatible with strict environments** — works behind NAT and firewalls that only allow outbound traffic.
- **Operationally simple** — no inbound authentication or publicly exposed services to manage.

### No SSH access required

Unlike some solutions, we never need direct access to your servers. That removes a whole class of risk:

- No Datashelter-side accounts, SSH keys, or bastion hosts to manage.
- No vendor service accounts to audit or key rotations to plan.

### Client-side encryption (AES-256)

All data is encrypted locally before it is sent, using a key you alone control:

- **Client-side encryption** — data is encrypted before it leaves your infrastructure. Even if storage is compromised, the data is unreadable without your key.
- **Algorithm** — AES-256, a widely trusted symmetric cipher.
- **Key management** — you retain exclusive control of the encryption key. Datashelter does not store an unencrypted copy.

We strongly recommend backing up your key off-site (HSM, key vault, or a KMS you control).

## Infrastructure built for resilience

Once your data is received, it lands in a highly secure storage environment.

### Per-server segmentation

Each server has its own credentials and bucket, which limits the blast radius if one is compromised:

- **Logical isolation** — each source has unique credentials and isolated storage policies, enforcing least privilege.
- **Least-privilege IAM** — permissions are restricted to what is required to write objects and inspect related backups.
- **Traceability** — every operation is logged with the source ID for audits and investigations.

### Immutable storage

Objects cannot be deleted or modified after upload. Even under attack, your backups stay intact:

- Object locking (WORM) and versioning preserve prior versions.
- Strict access controls prevent direct deletions outside a controlled workflow.
- Accidental or malicious deletions cannot immediately erase a protected backup.

### Controlled deletion

Only deletions you explicitly request — or ones dictated by your retention policy — are executed, and always after a 14-day safety delay:

- Deletion requests trigger a timestamped, recorded workflow.
- The 14-day window gives you time to cancel in case of error or compromise.
- Every deletion request and action is recorded in immutable audit logs.

### Certified hosting

Data is stored on OVHcloud infrastructure, certified ISO 27001 and HDS (with SecNumCloud in progress), and replicated across multiple data centers in Europe and Canada:

- **Compliance** — ISO 27001 attests to a mature information security management system. HDS covers French health-data requirements.
- **Physical security** — OVHcloud data centers provide access control, power redundancy, fire suppression, and 24/7 monitoring.
- **Geographic resilience** — backups are replicated across multiple data centers to withstand localized failures.
- **Data sovereignty** — you choose your storage region (EU or Canada) to meet residency requirements. Copies at rest are protected by the same client-side encryption described above.
