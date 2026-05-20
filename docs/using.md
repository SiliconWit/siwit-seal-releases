# Using Seal

A tour of every tab in the app, what it is for, and the buttons you will find there. The left sidebar is the same on every screen:

- **↑ Send.** Encrypt files to one or more recipients.
- **↓ Receive.** Decrypt a `.gpg`, `.pgp`, or `.asc` you were sent.
- **● Contacts.** Public keys of people you send to.
- **⚿ My Keys.** Your own identities (you can have more than one).
- **⚙ Settings.** Defaults, files location, theme.
- **? Help and Support.** Diagnostics, donations, links.

The bottom of the sidebar shows the **active account**, the identity Seal currently signs and encrypts-to-self with.

## Send

Encrypt files for one or more recipients. The page is split into two cards side by side.

### Signing-as banner

A blue pill at the top labelled **Signing as:** with a dropdown. Use it to switch between your accounts without leaving the page. Whatever you pick here is the account used for **Sign with my key** and **Also encrypt to me**.

### Files to send (left card)

Three ways to add files:

- **Browse files...** Pick one or many files from a dialog.
- **Add folder...** Pick a folder; sub-folders are preserved inside the bundle.
- **Drag** files and folders directly onto the drop area.

The list below shows what is queued. Use **Clear all** to start over.

Loose files (no folder) are automatically wrapped inside one folder named after the output bundle, so the recipient gets one tidy folder when they unzip instead of files scattered into wherever they extracted.

### Recipients (right card)

- **Quick pick** dropdown. Adds one contact in a single click. The dropdown is replaced with an "Add a contact" banner if your address book is empty.
- **Search** box. Filters the list below by name, email, or fingerprint.
- **Multi-select list.** Hold **Ctrl** (or **Cmd**) and click to add more than one. A ✓ badge means you have marked that contact as verified.
- **Selected recipients** strip. Every picked contact appears as a chip with an **×** button so you can confirm and trim the list at a glance.
- **Also encrypt to me (so I can open it later).** Recommended ON. Without this, you cannot re-open what you sent.
- **Sign with my key (proves it's from me).** OFF by default. When ON, you will be asked for your passphrase; the recipient needs your public key to verify the signature.

### Encrypt and Save

Saves the bundle. Default location: `Documents/SILICONWIT-SEAL/Sent/`. The file is named after the first file you queued plus your default suffix (`.zip.pgp` or `.zip.gpg`).

A copy of your **public key** is dropped in the same folder so you can attach it alongside the bundle. Attach both to your email. The recipient uses your public key to add you as a contact and verify your signature.

The success dialog lists every recipient the bundle was encrypted to, with their short fingerprint, so you can double-check you sent to the right people. **Show in folder** opens the destination.

## Receive

Drop an encrypted file onto the area at the top, type your passphrase, and Seal decrypts it into `Documents/SILICONWIT-SEAL/Received/<bundle-name>/`. If a folder with that name exists, Seal makes a new one named `<bundle-name> (2)`, `(3)`, and so on, so previous extractions are never overwritten.

The bottom card lists every extracted file, with paths relative to the extracted root so the folder structure is visible at a glance. **Double-click** any row to open the file, or click **Open folder** to reveal the folder in your file manager.

If the bundle was signed and the sender's public key is in **Contacts**, Seal verifies the signature and tells you who signed it. If the sender is unknown, Seal still decrypts but warns you that the signature could not be verified.

## Contacts

The address book of public keys you might send to.

- **Search** filters by name, email, or fingerprint.
- **+ Add contact** opens a dialog where you can:
    - Paste an armoured `-----BEGIN PGP PUBLIC KEY BLOCK-----` block.
    - Or click **Or import one or more .asc files...** to import several at once.
- The detail pane (right) shows the selected contact's name, email, fingerprint (with a **Copy** button), and any notes you added.
- **Mark verified** sets the ✓ badge. Do this only after you have confirmed the fingerprint over a trusted channel.
- **Remove** deletes the contact and the underlying public key from your keyring.

!!! tip "Why private-key files are blocked from Contacts"
    A private-key backup file (`-----BEGIN PGP PRIVATE KEY BLOCK-----`) imported here would silently load someone's secret material into your keyring. Seal refuses these and tells you to import them through **My Keys** instead.

## My Keys

Your own identities. The active account here is the one used everywhere else in the app.

### Active account switcher

- **Dropdown.** Pick which of your identities is active.
- **+ Add another account.** Opens the same wizard as first-run so you can set up a second identity (for example one for work, one for personal).

### Identity card

Shows the name, email, algorithm (RSA 4096), creation date, expiry, and full fingerprint of the active account. The **Copy** button next to the fingerprint puts it on the clipboard ready to read aloud or paste into a chat.

### Private key card (red)

- **Re-export private-key backup.** Saves a fresh passphrase-protected `.asc` to `Documents/SILICONWIT-SEAL/Backups/`. Use this if your original backup is lost.
- **Re-export revocation certificate.** Saves a fresh revocation certificate to `Documents/SILICONWIT-SEAL/Revocations/`. You need this if your key is ever stolen.
- **Replace this key.** Generates a brand-new key for the same name and email. The old key stays in the keyring so you can still open historical files, but it is no longer used for new ones. Use this if you have lost the passphrase or suspect the key was compromised.

### Public key card (blue)

- **Copy public key to clipboard.** Armoured text ready to paste into an email or chat.
- **Save public key as file.** Saves a `.asc` to `Documents/SILICONWIT-SEAL/Public keys/`.

## Settings

### Encryption defaults

- **Always use ASCII armor.** Produces text-only output. Useful when an email client is picky about binary attachments. OFF by default.
- **Always encrypt to me too.** Controls the default state of the Send checkbox. Recommended ON.
- **Sign my outgoing files by default.** Controls the default state of the Send checkbox. OFF by default because some recipients' tools refuse to display content when they cannot verify a signature.
- **Default suffix.** `.zip.pgp` (default) or `.zip.gpg`. Same OpenPGP format either way; pick whichever your recipients' tools accept.

### Files location

Shows the full path to your `SILICONWIT-SEAL` folder.

- **Open folder** reveals it in your file manager.
- **Change...** lets you pick a different parent. Seal always creates a `SILICONWIT-SEAL` subfolder inside whatever you choose, so its files never spill into your other documents.
- **Reset to default** points the location back at `Documents/SILICONWIT-SEAL/`. Existing files at the custom path are not deleted.

### Appearance

- **Theme.** Auto, Light, or Dark. (Note: full dark styling for cards and page bodies is still in progress.)

## Help and Support

Links to documentation, the diagnostics log (helpful when reporting a bug), and a donation link if you want to support development.

The diagnostics log records what went wrong on the technical side but **never** records your passphrase, private-key material, or file contents.
