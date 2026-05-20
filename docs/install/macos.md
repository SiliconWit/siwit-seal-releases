# macOS

Targeting macOS 12 Monterey and later, both Apple Silicon and Intel.

!!! note "Coming soon"
    macOS builds are not yet published. Watch the [Releases page](https://github.com/SiliconWit/siwit-seal-releases/releases) and the [issue tracker](https://github.com/SiliconWit/siwit-seal-releases/issues) for progress.

## Install (planned steps)

1. Download `SiliconWit-Seal-<version>.dmg` from [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases).
2. Open the `.dmg` and drag **SiliconWit Seal** into the `Applications` folder.
3. The first time you launch it, **right-click → Open → confirm**. After that, double-click works normally.

## Why right-click on first launch

The build is not yet notarized by Apple, so Gatekeeper holds the binary on first run. **Right-click → Open** is the supported override (System Settings → Privacy & Security can also be used, but right-click is faster). Once you have done it once, Gatekeeper remembers your decision and double-click works for every subsequent launch.

## Uninstall

Drag **SiliconWit Seal** from `Applications` to the Trash. This leaves your keys and contacts in place. To remove **everything** (irreversible), also delete `~/Library/Application Support/Seal/` and the `SILICONWIT-SEAL` folder under your Documents.

## Where your files live

| Type                            | Location                                       |
|---------------------------------|------------------------------------------------|
| Keyring (private and public)    | `~/Library/Application Support/Seal/gnupg/`    |
| Contacts database               | `~/Library/Application Support/Seal/contacts.sqlite` |
| Visible saved files             | `~/Documents/SILICONWIT-SEAL/`                 |

You do not need a separate GPG Suite install. GnuPG ships inside the app.

## After install

First launch runs the [setup wizard](../quickstart.md#1-first-run-create-your-key). Save the **private-key backup** and **revocation certificate** to a USB stick or password manager **before** you start sealing real files.
