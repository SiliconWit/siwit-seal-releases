# Quick start

The three things you will do most often: set up your key, send a file, and receive a file. Allow about five minutes for first-time setup.

## 1. First run, create your key

The first time you open Seal, the **First-time setup** wizard runs automatically. It has six steps shown down the left:

1. **Welcome.** A one-screen explanation of the two keys you are about to create:
    - **Private key.** Stays on this computer. Never shared. It is what unlocks files sent to you.
    - **Public key.** Shareable padlock. Hand it out to anyone who should send you encrypted files.
2. **Your identity.** Enter your real name and an email you plan to keep. Pick an expiry (3 years is the recommended default; you can extend it later).
3. **Your passphrase.** Type a strong passphrase twice. A short sentence of several words is stronger and easier to remember than a short password. Save it in a password manager. There is **no recovery**.
4. **Generate keys.** Seal creates a 4096-bit RSA key pair locally. This takes up to a minute.
5. **Back up your keys.** Save **two** files to a safe place (USB stick, password manager, encrypted cloud folder):
    - **Private-key backup** (passphrase-protected). Restores your identity on a new computer.
    - **Revocation certificate.** Lets you publicly invalidate the key later if it is ever lost or compromised.
6. **You're ready.** Seal shows your full fingerprint. Read it aloud to your contacts (or check it in person) so they can confirm the public key they receive really is yours.

!!! danger "The passphrase cannot be reset"
    If you forget your passphrase, your encrypted files cannot be opened, even by you. Save the backup and the revocation certificate **before** you start sealing real material.

## 2. Send encrypted files

1. Click **Send** in the left sidebar (it is the first tab).
2. **Add files** in the "Files to send" panel by any of these methods:
    - Click **Browse files...** (one or many files).
    - Click **Add folder...** (one folder, sub-folders preserved).
    - Drag files and folders directly onto the drop area.
3. **Pick recipients** in the "Recipients" panel:
    - The quick-pick dropdown adds a contact in one click.
    - Or use the multi-select list below. Hold **Ctrl** (or **Cmd** on Mac) and click to add more than one.
    - Selected recipients appear as removable chips so you can verify who can open the file before sending.
4. Leave the two checkboxes at their defaults unless you have a reason to change them:
    - **Also encrypt to me (so I can open it later).** Recommended ON.
    - **Sign with my key (proves it's from me).** OFF by default. Turn on per-send when the recipient needs to verify the sender; they will need your public key to verify the signature.
5. Click **Encrypt and Save**. Seal:
    - Zips the files (loose files get wrapped in a single folder named after the bundle).
    - Encrypts to every selected recipient (and to yourself if the box is checked).
    - Saves the bundle in `Documents/SILICONWIT-SEAL/Sent/` by default. You can pick a different location from the save dialog.
    - **Drops a copy of your public key in the same folder** so you can attach both to your email. The recipient uses the public key to add you as a contact and to verify your signature (if you signed).
6. Email the encrypted bundle and your public-key `.asc` file as attachments.

By default the bundle filename ends in `.zip.pgp`. If your recipient's tool only recognises `.zip.gpg`, switch the default in **Settings**, then **Encryption defaults**, then **Default suffix**. Both extensions hold the exact same OpenPGP format.

## 3. Receive encrypted files

1. Click **Receive** in the left sidebar.
2. Drag the encrypted file (`.gpg`, `.pgp`, or `.asc`) onto the drop area, or click **Browse...** to pick it.
3. Click **Decrypt** and enter your passphrase.
4. Seal extracts the contents into `Documents/SILICONWIT-SEAL/Received/<bundle-name>/`, with a numbered suffix `(2)`, `(3)`, and so on if you decrypt the same bundle more than once, so nothing is overwritten.
5. **Double-click** any file in the list to open it, or click **Open folder** to reveal the extracted folder in your file manager.

If the sender signed the bundle and you already have their public key in **Contacts**, Seal verifies the signature and tells you so. If the sender is unknown, Seal still decrypts the file but warns you it could not verify the signature.

## Verify a contact's fingerprint

A fingerprint is a 40-character hash that uniquely identifies a public key. Before you encrypt sensitive material to a new contact, verify their fingerprint over a **trusted channel** (in person, voice call, signed video). Do not use the same email channel you received the key on.

1. Open the **Contacts** tab and select the contact.
2. Read the **Fingerprint** aloud, four characters at a time. Seal pretty-prints it in groups of four for exactly this reason.
3. They confirm every group matches the one Seal shows them.
4. Click **Mark verified**. The contact now shows a ✓ badge in the recipients list so you can tell at a glance which keys you have actually checked.

You can also share **your** fingerprint the same way. It is shown in **My Keys** below your identity card.
