---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Snaper

This page explains how to install the Snaper CLI. It includes a quick, automatic installer (recommended), manual downloads for different OS/architectures, how to verify the installation, update instructions and a short troubleshooting section.

## Prerequisites

- A POSIX-compatible shell (bash, zsh, etc.).
- curl installed and network access to dl.datashelter.cloud.
- Permission to move files into a system directory (sudo) or a writable directory on your PATH if you prefer a local install.
- Supported platforms: Linux, macOS (Darwin), FreeBSD. Supported architectures: amd64 and arm64.

## Install

### Quick install (recommended)

Install Snaper with one command. This is the simplest and recommended method:

```bash
curl -sSL https://dl.datashelter.cloud/scripts/install-snaper.sh | bash
```

The installer will place the `snaper` binary in a system location (typically `/usr/local/bin`) or a location you choose during the script run.

### Manual install

If you prefer not to run the installer script, download the correct binary for your operating system and architecture, make it executable and move it to a directory on your PATH.

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux" default>
    <Tabs groupId="arch" defaultValue="amd64">
        <TabItem value="amd64" label="amd64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/linux/amd64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
        <TabItem value="arm64" label="arm64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/linux/arm64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="darwin" label="Darwin">
      <Tabs groupId="arch" defaultValue="amd64">
        <TabItem value="amd64" label="amd64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/darwin/amd64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
        <TabItem value="arm64" label="arm64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/darwin/arm64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="freebsd" label="FreeBSD">
      <Tabs groupId="arch" defaultValue="amd64">
        <TabItem value="amd64" label="amd64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/freebsd/amd64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
        <TabItem value="arm64" label="arm64">
            ```bash
            curl -LO -k https://dl.datashelter.cloud/release/latest/bin/freebsd/arm64/snaper \
            && chmod +x ./snaper \
            && sudo mv ./snaper /usr/local/bin/snaper \
            && snaper --version
            ```
        </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

Notes:
- If you do not want to use `sudo` or cannot write to `/usr/local/bin`, move the binary to another directory on your PATH (for example, `$HOME/bin`) and ensure that directory is in your PATH.
- The `-k` option is used in the curl commands above to preserve the original behavior; if you prefer strict TLS verification you can remove `-k`.

## Verify the installation

Run:

```bash
snaper --version
```

You should see the installed version string.

## Update Snaper

- If your current Snaper version is 3.9.0 or newer, update in place:

```bash
snaper update
```

- If your version is older than 3.9.0, update by reinstalling using the same method you used to install (rerun the automatic installer or download the newest binary for your OS/architecture and replace the existing `snaper` binary).

## Uninstall

To remove the system-wide binary installed to `/usr/local/bin`:

```bash
sudo rm /usr/local/bin/snaper
```

If you installed the binary elsewhere (for example `$HOME/bin`), remove it from that location instead.

## Troubleshooting

- snaper: command not found — ensure the binary is on your PATH and has execute permissions. For a quick check:

```bash
which snaper || echo "$HOME/bin/snaper"
ls -l $(which snaper 2>/dev/null || true)
```
- Permission denied when moving the binary — re-run the mv step with `sudo` or choose a writable directory.
- If the automatic installer fails, try the manual download for your platform.

If you still have issues, check the support page or open a support request.