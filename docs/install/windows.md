# Windows (`.msi`)

Tested on Windows 10 (1909+) and Windows 11.

## Install

1. Download `siwit-seal-<version>-win-x64.msi` from [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases).
2. Double-click the `.msi` and follow the installer.
3. Launch **SiliconWit Seal** from the Start menu.

!!! warning "SmartScreen"
    Until the installer is signed with an EV certificate, Windows SmartScreen may show a "Windows protected your PC" warning. Click **More info → Run anyway** if you're sure the file came from the official Releases page and the SHA-256 matches.

## Uninstall

Settings → Apps → Installed apps → **SiliconWit Seal** → Uninstall.

## Notes

- GnuPG is bundled inside the install directory; no separate Gpg4win install needed.
- User config and keys live under `%APPDATA%\siwit-seal\`.
