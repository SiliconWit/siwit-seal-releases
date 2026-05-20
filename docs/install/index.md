# Install

Pick your operating system:

- [Linux (`.deb`)](linux.md) for Debian, Ubuntu, Linux Mint, and derivatives
- [Windows (`.msi`)](windows.md) for Windows 10 (1909+) and 11
- [macOS](macos.md) for Apple Silicon and Intel, macOS 12+

All builds are published as assets on the [Releases page](https://github.com/SiliconWit/siwit-seal-releases/releases). Always download from the official Releases page (or the linked mirrors), never from a third-party site.

GnuPG is bundled inside every build, so there is nothing else to install on any platform.

## Prefer a printable / shareable version?

[:material-file-pdf-box: Download the install slides (PDF)](../assets/install.pdf){ .md-button }

A 13-slide walkthrough you can email to colleagues, print, or hand to non-technical recipients. Includes block diagrams of the key-pair concept, the send flow, the receive flow, and where Seal saves your files.

## Verifying downloads

Each release includes SHA-256 checksums next to the installer. You do not have to verify, but it is the easiest way to confirm your download is byte-for-byte identical to what was published.

**Linux / macOS:**

```bash
sha256sum -c siwit-seal-<version>.sha256
```

**Windows PowerShell:**

```powershell
Get-FileHash siwit-seal-<version>.msi -Algorithm SHA256
```

Compare the printed value to the one on the [Releases page](https://github.com/SiliconWit/siwit-seal-releases/releases). They should match exactly.

## After install

The first time you launch Seal, the **First-time setup** wizard runs automatically and generates your key. See the [Quick start](../quickstart.md) for what to expect step by step, then [Using Seal](../using.md) for a tour of every tab.
