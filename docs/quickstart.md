# Quick start

This guide walks through the three things you'll do most often.

## 1. First-run: create your key

The first time you open SiliconWit Seal, the onboarding wizard will:

1. Ask for your name and email (these go on your public key).
2. Ask for a passphrase (memorize this; there is no recovery).
3. Generate a new OpenPGP key pair.
4. Prompt you to save a **private-key backup** and a **revocation certificate** to a safe location (e.g., a USB drive or password manager).

!!! danger "The passphrase cannot be reset"
    If you forget your passphrase, your encrypted files cannot be opened, even by you. Save the backup and revocation cert somewhere you trust.

## 2. Send encrypted files

1. Open the **Send** tab.
2. Drag-drop one or more files into the drop zone (a folder is auto-zipped).
3. Pick the recipient(s) from your **Contacts**.
4. Click **Encrypt**. The output `.gpg` file appears in the same folder, ready to attach to email.

By default, the file is also encrypted to **yourself** so you can re-open what you sent.

## 3. Receive encrypted files

1. Open the **Receive** tab.
2. Drag-drop the `.gpg` or `.pgp` file you received.
3. Enter your passphrase when prompted.
4. The decrypted contents appear in a folder beside the original file. If it was a zipped bundle, it's auto-extracted.

## Verifying a contact's fingerprint

Before encrypting to a new recipient, verify their key is really theirs:

1. **Contacts** tab → select the contact → **Fingerprint**.
2. Read the human-friendly word list to them over a trusted channel (phone, in person).
3. They confirm the same words. Mark the contact as **verified**.
