# Install

Pick your operating system:

- [Linux (`.deb`)](linux.md): Debian, Ubuntu, Mint, and derivatives
- [Windows (`.msi`)](windows.md): Windows 10 and 11
- [macOS](macos.md): Apple Silicon and Intel

All builds are published as assets on the [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases) page. Always download from the official Releases page, never from a third-party mirror.

## Verifying downloads

Each release includes SHA-256 checksums. To verify on Linux/macOS:

```bash
sha256sum -c siwit-seal-<version>.sha256
```

On Windows PowerShell:

```powershell
Get-FileHash siwit-seal-<version>.msi -Algorithm SHA256
```

Compare the output to the value in the published checksum file.
