# SiliconWit Seal

A simple, polished desktop app for encrypting and decrypting files with **OpenPGP**.

Designed for people who need secure file sharing (for example, sending exam papers
by email) but shouldn't have to learn GPG on the command line. Files produced are
standard OpenPGP (RFC 4880), so recipients can open them with Kleopatra, GPG Suite,
Thunderbird, Mailvelope, or any other OpenPGP tool.

> Casual / short name: **Siwit Seal**. In-app name: **Seal**.

## Get it

[:material-download: Download for your OS](install/index.md){ .md-button .md-button--primary }
[:material-rocket-launch: Quick start](quickstart.md){ .md-button }

## What it does

- Drag-drop files → auto-zip, encrypt, ready to attach
- Drag-drop `.gpg` / `.pgp` → auto-decrypt, unzipped contents
- **Auto-encrypt-to-self** so you can always open what you sent
- Optional signing (off by default; turn on per-send when you want recipients to verify it came from you)
- First-run onboarding: generate key, export private-key backup and revocation cert
- Contacts manager with fingerprint verification (human-friendly word list)
- Bundled GnuPG, no separate install, zero friction on Windows, macOS, Linux

## Status

Pre-1.0. Expect rapid iteration. See [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases) for downloads and change notes.
