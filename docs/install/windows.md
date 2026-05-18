# Windows (`.msi`)

Tested on Windows 10 (1909+) and Windows 11.

## Install

1. Download `siwit-seal-<version>-win-x64.msi` from either source:
    - [GitHub Releases](https://github.com/SiliconWit/siwit-seal-releases/releases) (official source)
    - [Google Drive mirror](https://drive.google.com/file/d/1_sCuSeqJO8JbBs8dWMn0VtlgerIXMrI3/view?usp=sharing) (exact same `.msi`, mirrored for convenience)
2. Double-click the `.msi` and follow the installer.
3. Launch **SiliconWit Seal** from the Start menu.

The two downloads are **identical files** (same filename, same SHA-256). Use whichever loads faster for you.

## Expected warnings, and why not to worry

SiliconWit Seal is a new open-source project, so neither the file nor the publisher has built up a "reputation" with browsers, Google Drive, or Windows yet. You will almost certainly see one or more of these warnings during download and install. They are normal for new open-source software, not a sign that anything is wrong:

- **Browser "this type of file can harm your computer" or "isn't commonly downloaded".** Chrome, Edge, and Firefox flag uncommon executables by default. Choose **Keep** or **Keep anyway**.
- **Google Drive "can't scan this file for viruses".** Drive cannot scan files larger than about 25 MB. Click **Download anyway**.
- **Windows SmartScreen "Windows protected your PC"** when you double-click the `.msi`. Until the installer is signed with an EV certificate, SmartScreen warns on unrecognized publishers. Click **More info**, then **Run anyway**.
- **User Account Control (UAC) prompt.** Normal for any installer; click **Yes**.

If you'd like to verify you've got the right file, compare its SHA-256 against the checksum published on the [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases) page (see [Verifying downloads](index.md#verifying-downloads)).

## Uninstall

Settings → Apps → Installed apps → **SiliconWit Seal** → Uninstall.

## Notes

- GnuPG is bundled inside the install directory; no separate Gpg4win install needed.
- User config and keys live under `%APPDATA%\siwit-seal\`.
