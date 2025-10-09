# How Datashelter keeps your data secure

At Datashelter, security is at the core of everything we do. We designed our solution to provide strong, auditable guarantees—well beyond typical outsourced backup services.

## 🔒 Secure by design from the start

Our backup tool, Snaper (CLI), ensures your data is protected from the moment it leaves your servers through four key principles:

### S3 API communications only
All interactions use the standard S3 protocol, known for reliability and security (S3 Signature v4).

We exclusively perform HTTPS calls to S3-compatible endpoints, signed with the S3 SigV4 authentication algorithm. This provides several practical guarantees:

- Confidentiality in transit: all calls are encrypted with TLS (HTTPS).
- Request integrity: S3 SigV4 protects against request tampering and prevents replay of signed requests by third parties.
- Simplified network controls: you can restrict outbound rules on your servers to allow only HTTPS connections to the S3/HTTPS endpoint `s3.datashelter.cloud`.

### Push-only model
Your servers push backups out; Datashelter never initiates connections back to them.

Concretely, the Snaper agent initiates all communications by opening outbound connections to the storage infrastructure. No inbound connections (SSH, RPC, internal APIs) are required or possible from Datashelter to your machines.

Benefits:

- Reduced attack surface: no inbound ports to expose.
- Works in strict environments: compatible with NAT/firewalls allowing only outbound traffic.
- Operational simplicity: no inbound authentication or publicly exposed services to manage.

### No SSH access required
Unlike other solutions, we never need direct access to your servers.

This removes the need to manage accounts, SSH keys, or bastion hosts that could themselves become attack vectors.

Practical implications:

- No remote user configuration or private keys on the Datashelter side.
- Fewer governance constraints (no vendor-side service accounts to audit, no SSH key rotations to plan).

### Client-side encryption (AES-256)
All data is encrypted locally before being sent, with a key you alone control.

Details and recommendations:

- Principle: client-side encryption ensures data is encrypted before leaving your infrastructure. Even if storage is compromised, data remains unreadable without the key.
- Algorithm: we use robust symmetric encryption (AES-256).
- Key management: security depends heavily on key protection. You retain exclusive control over the encryption key (or key material); Datashelter does not store an unencrypted copy.

Key management best practice:

- Back up your keys off-site (HSM, key vault, or a KMS you control).

## 🧱 An infrastructure built for resilience

Once your data is received, it benefits from a highly secure storage environment:

### Per-server segmentation
Each server has its own credentials and bucket, limiting blast radius in case of compromise.

Technical details and advantages:

- Logical isolation: each source (server/instance) has unique credentials and isolated storage policies (dedicated bucket or prefix), enforcing least privilege.
- IAM controls: permissions are restricted to what’s required to write objects and list/inspect related backups.
- Traceability: every operation (upload, list, requested deletion) is logged with the source ID to facilitate audits and investigations.

### Immutable storage
Objects cannot be deleted or modified after upload. Even under attack, your backups remain intact.

How this is implemented (general approach):

- Object locking (WORM / Write Once Read Many) and/or versioning with retention rules. In practice, mechanisms typically combine:
	- versioning to preserve prior versions and prevent immediate permanent deletion;
	- strict access controls preventing direct deletions outside a controlled workflow.

Operational consequences:

- Accidental or malicious deletions cannot immediately erase a protected backup.
- To meet policies (e.g., GDPR), deletions are performed via a controlled, auditable workflow.

### Controlled deletion
Only deletions requested by the user—or dictated by retention policy—are executed, after a 14-day safety delay.

Process and safeguards:

- Deletion request: a deletion initiated via the UI or API triggers a timestamped, recorded workflow.
- Safety delay: the 14-day window allows intervention in case of error or compromise (requests can be canceled during this period).
- Auditability: all deletion requests and actions are recorded in immutable audit logs. Administrators can review history and obtain evidence of actions.

### Certified hosting
Data is stored on OVHcloud infrastructure certified ISO 27001 and HDS, with SecNumCloud in progress, and multi–data center replication across Europe and Canada.

Compliance and resilience:

- Certifications: ISO 27001 attests to an ISMS. HDS (Hébergement de Données de Santé) addresses French requirements for health data.
- Physical and organizational security: OVHcloud data centers provide physical access control, power redundancy, fire suppression, and 24/7 monitoring.
- Geographic replication: backups are replicated across multiple data centers to withstand localized failures and ensure continuity.

Data sovereignty:

- You can choose your storage region to meet data residency requirements (e.g., EU vs Canada).
- Copies are encrypted at rest and readable only with appropriate keys (and are protected by client-side encryption as described above).