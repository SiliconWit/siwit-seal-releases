# FAQ

## Is this compatible with other OpenPGP tools?

Yes. Seal produces standard OpenPGP (RFC 4880) with no custom metadata or container. The encrypted files you send can be opened with any compliant tool, including:

- **Kleopatra** (Gpg4win) on Windows
- **GPG Suite** on macOS
- **Thunderbird** (built-in OpenPGP) on any platform
- **Mailvelope** in the browser
- The `gpg` command line, on any platform

Your recipients do **not** need to install Seal to read what you send.

## Do I need to install GnuPG separately?

No. GnuPG is bundled inside the app on every platform. You do not need Gpg4win on Windows, GPG Suite on macOS, or `apt install gnupg` on Linux.

## What if I forget my passphrase?

There is no recovery. The passphrase is the only thing protecting your private key, and it never leaves your computer. If you forget it:

1. Publish the **revocation certificate** you saved during onboarding so your contacts know to stop trusting the old key.
2. Generate a new key from **My Keys → Replace this key**.
3. Share the new public key with your contacts.

The old encrypted files cannot be recovered, but the old key cannot be misused either.

## Where does Seal save my files?

Anything you save through Seal goes under a single folder you control:

| What                             | Default location                                   |
|----------------------------------|----------------------------------------------------|
| Encrypted bundles you sent       | `Documents/SILICONWIT-SEAL/Sent/`                  |
| Decrypted contents you received  | `Documents/SILICONWIT-SEAL/Received/<bundle>/`     |
| Private-key backups              | `Documents/SILICONWIT-SEAL/Backups/`               |
| Revocation certificates          | `Documents/SILICONWIT-SEAL/Revocations/`           |
| Exported public keys             | `Documents/SILICONWIT-SEAL/Public keys/`           |

Change this from **Settings**, then **Files location**. Seal always creates a `SILICONWIT-SEAL` subfolder inside whatever parent you pick, so its files never mix in with the rest of your documents.

## Where is the keyring itself stored?

The GnuPG home and contacts database are kept hidden away from your documents folder, in the platform's app-data location:

| Platform | Location                                          |
|----------|---------------------------------------------------|
| Linux    | `~/.local/share/Seal/`                            |
| macOS    | `~/Library/Application Support/Seal/`             |
| Windows  | `%APPDATA%\Seal\` (or `%LOCALAPPDATA%\Seal\`)     |

Inside is a `gnupg/` folder (mode 700) and `contacts.sqlite`. Back up the `SILICONWIT-SEAL/Backups/` folder under Documents if you want a portable identity; you do not normally need to back up the hidden keyring directory.

## Can I import an existing OpenPGP key?

Yes.

- **Someone else's public key.** Paste it or import the `.asc` from **Contacts**, then **+ Add contact**.
- **Your own private key.** For now, the official path is **My Keys**, then **Replace this key** if you already have a key on this machine, or set the GnuPG home up first and then open Seal. Direct import of a `.asc` backup file through the UI is on the roadmap.

## Why is signing off by default?

Some OpenPGP tools refuse to display the contents of a signed message when they cannot verify the signature, which looks like "cannot decrypt" to the recipient. With signing **off** there is no signature to verify, so the recipient just gets the file.

Turn signing **on** per-send when you want the recipient to be able to verify the file came from you, and make sure they have your public key (Seal drops a copy of it next to the bundle automatically when you click Encrypt and Save).

## Can I have more than one identity?

Yes. **My Keys → + Add another account** runs the wizard a second time so you can keep a personal key and a work key on the same machine. The active-account switcher at the top of My Keys, on the Send page, and the pill at the bottom of the sidebar all stay in sync.

## What is the difference between `.gpg` and `.pgp`?

Nothing. They are the same OpenPGP format with a different file extension. Some tools accept only one, some accept both. Pick the default in **Settings**, then **Default suffix**.

## Is the source code open?

The application source is in a separate repository and is currently private. This **siwit-seal-releases** repo hosts the public binaries, documentation, and issue tracker. The on-disk file format is the OpenPGP standard, so you are never locked into Seal: you can switch to any other OpenPGP tool with the same key.

## How do I report a bug or request a feature?

Open an issue on the releases repo: <https://github.com/SiliconWit/siwit-seal-releases/issues>.

Before filing, please attach the diagnostics log shown on the **Help and Support** page if the issue is technical. The log records what went wrong but **never** records your passphrase, private key, or file contents.
