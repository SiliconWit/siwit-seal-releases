# FAQ

## Is this compatible with other PGP tools?

Yes. SiliconWit Seal produces standard OpenPGP (RFC 4880). Recipients can decrypt with **Kleopatra** (Gpg4win), **GPG Suite** (macOS), **Thunderbird**, **Mailvelope**, or any other OpenPGP-compatible tool.

## Do I need to install GnuPG separately?

No. GnuPG is bundled inside the app on all platforms.

## What if I forget my passphrase?

There is no recovery. The whole point of the passphrase is that it's only known to you. Use the **revocation certificate** you saved during onboarding to publicly invalidate the lost key, and generate a new one.

## Where are my keys stored?

| Platform | Location |
|----------|----------|
| Linux    | `~/.local/share/siwit-seal/` |
| macOS    | `~/Library/Application Support/siwit-seal/` |
| Windows  | `%APPDATA%\siwit-seal\` |

## Can I import an existing OpenPGP key?

Yes. The **Keys** tab has an **Import** action. Both ASCII-armored (`.asc`) and binary (`.gpg`) keys are supported.

## Why is signing off by default?

Signing reveals who sent a file, which is sometimes the goal but isn't always desirable. You can flip it on per-send when you want recipients to be able to verify the file came from you.

## Is the source code open?

The source is in a separate repository and is currently private. This **siwit-seal-releases** repo hosts the public binaries, documentation, and issue tracker.

## How do I report a bug or request a feature?

Open an issue on this repo: <https://github.com/SiliconWit/siwit-seal-releases/issues>.
