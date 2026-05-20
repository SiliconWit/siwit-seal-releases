# SiliconWit Seal

A simple, polished desktop app for encrypting and decrypting files with **OpenPGP**.

Built for people who need to send confidential files (exam papers, contracts, payroll, medical records) but should not have to learn `gpg` on the command line. The files you send are standard OpenPGP (RFC 4880), so recipients can open them with **Kleopatra** (Windows), **GPG Suite** (macOS), **Thunderbird**, **Mailvelope**, or any other OpenPGP-compatible tool. They do not need to install Seal.

> Casual short name: **Siwit Seal**. In-app name: **Seal**.

## Get it

[:material-download: Download for your OS](install/index.md){ .md-button .md-button--primary }
[:material-rocket-launch: Quick start](quickstart.md){ .md-button }
[:material-compass: Using Seal](using.md){ .md-button }
[:material-file-pdf-box: Install slides (PDF)](assets/install.pdf){ .md-button }

## What it does

- **Send.** Drag files or folders in, pick recipients, click **Encrypt and Save**. Seal zips everything, encrypts it to each recipient's public key, and drops a copy of your public key alongside the bundle so they can reply back.
- **Receive.** Drag a `.gpg`, `.pgp`, or `.asc` file in, type your passphrase, and the contents extract into a tidy folder named after the bundle.
- **Auto-encrypt-to-self** is on by default, so you can always re-open anything you sent.
- **Optional signing.** Off by default. Turn it on per-send when you want the recipient to be able to verify the file really came from you.
- **First-run wizard** generates your key pair, walks you through choosing a passphrase, and prompts you to save a **private-key backup** plus a **revocation certificate** before you start.
- **Contacts** stores your recipients' public keys with an optional "verified" flag once you have confirmed the fingerprint over a trusted channel.
- **Multiple accounts.** Switch between identities (work, personal, exam committee) without leaving the Send page.
- **Bundled GnuPG.** No separate Gpg4win, GPG Suite, or `apt install gnupg` step on any platform.

## How Seal organizes your files

Everything Seal saves goes into one folder under your **Documents**, so encrypted bundles and key backups never mix in with unrelated documents:

```
Documents/
└── SILICONWIT-SEAL/
    ├── Sent/          encrypted bundles you sealed
    ├── Received/      decrypted contents, one subfolder per bundle
    ├── Backups/       private-key backup files (.asc)
    ├── Revocations/   revocation certificates (.asc)
    └── Public keys/   your exported public keys (.asc)
```

You can change this location from **Settings**, then **Files location**, at any time.

## Status

Pre-1.0. Expect rapid iteration. See [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases) for downloads and change notes.
