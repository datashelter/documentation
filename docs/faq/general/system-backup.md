# Can I backup my entire system with Datashelter?

Datashelter supports complete system backup. This functionality requires precise configuration and understanding of technical constraints.

## System Backup Script

Our team has validated this complete system backup/restore approach. The following script targets essential system components while excluding incompatible paths:

```bash
#!/bin/bash
set -e

# Common exclusions (comma-separated, single argument)
EXCLUDES="/proc/*,/sys/*,/dev/*,/run/*,/tmp/*,/var/tmp/*,/var/cache/*,/var/lock/*,/var/run/*,/mnt/*,/media/*,/lost+found,/swapfile,\
/root/.config/snaper/*,/home/*/.config/snaper/*,/usr/local/bin/snaper,\
/var/backups/*,\
/etc/fstab,/etc/hostname,/etc/hosts,/etc/machine-id,\
/etc/netplan/*,/etc/network/*,/etc/systemd/network/*,/etc/udev/rules.d/70-persistent-net.rules,\
/etc/default/grub,/etc/initramfs-tools/*"

# Top-level directories to back up
# (Skip /boot entirely since it's excluded above)
for dir in /etc /root /home /usr/local /opt /var/lib /var/www /srv; do
  name=$(basename "$dir" | tr '/' '-')
  echo "==> Backing up $dir ..."
  snaper backup files --path "$dir" \
    --name "${name}-backup" \
    --exclude "$EXCLUDES"
done
```

:::note
This approach is generic. Adapt paths according to your specific application configuration.
:::

## System Exclusions

The following exclusions are mandatory to prevent system conflicts:

- **Virtual filesystems**: `/proc`, `/sys`, `/dev`, `/run` - These are created at boot time
- **Temporary files**: `/tmp`, `/var/tmp`, `/var/cache` - Temporary data that shouldn't be restored
- **Network configuration**: `/etc/netplan`, `/etc/network` - Hardware-specific network settings
- **System identifiers**: `/etc/machine-id`, `/etc/hostname` - Should be unique per machine
- **Boot configuration**: `/boot`, `/etc/default/grub` - Hardware and system-specific

## Restoration Validation

Restoration testing confirms the following results:

### Validated Functionality

- **Service continuity**: Services restart automatically and maintain operational status
- **Application recovery**: Web applications, databases, and user data are fully functional

Example of service status after restoration:
```bash
root@restored-server:~# systemctl status nginx
● nginx.service - LSB: starts the nginx web server
     Loaded: loaded (/etc/init.d/nginx; generated)
     Active: active (exited) since Mon 2025-10-13 13:03:05 UTC; 31s ago
```

### Technical Constraints

**Primary limitation**: Restoration may damage the system depending on the destination machine. Hardware and software incompatibilities generate critical malfunctions:

- **Boot failures**: Hardware configuration incompatibilities
- **Network conflicts**: Divergent interfaces and network configurations
- **System dependencies**: Drivers and configurations tied to original hardware

## Security Requirements

:::danger
**MANDATORY**: System restoration must exclusively be performed on a fresh machine. Any restoration on a production system presents risks of irreversible corruption.
:::

## Implementation Guidelines

1. **Prior validation**: Systematically test the procedure in an isolated environment
2. **Custom configuration**: Adapt exclusions according to your system architecture
3. **Technical documentation**: Maintain an inventory of hardware dependencies
4. **Disaster recovery usage**: Reserve this method for disaster recovery scenarios
5. **Complementary solutions**: Implement specialized solutions for critical production components

This solution provides a robust standard for system backup. Its deployment requires complete validation in your technical environment.