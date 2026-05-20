# Linux (`.deb`)

Tested on Ubuntu 22.04+, Debian 12+, Linux Mint 21+.

## Install

1. Grab `siwit-seal_<version>_amd64.deb` from the [Releases page](https://github.com/SiliconWit/siwit-seal-releases/releases). Always pick the latest version unless you have a reason not to.
2. Install with `apt` from the directory containing the file:

    ```bash
    sudo apt install ./siwit-seal_<version>_amd64.deb
    ```

    The leading `./` is important. It tells `apt` to treat the file as a local package and resolve its dependencies automatically. If you prefer `dpkg`, run `sudo apt -f install` afterwards to fix any missing dependencies.

3. Launch from your applications menu (search for **SiliconWit Seal**), or run `siwit-seal` in a terminal.

## What is installed

- The Seal binary and Qt libraries
- A bundled GnuPG (no separate `apt install gnupg` needed)
- A `.desktop` entry so the app shows up in your launcher

## Uninstall

```bash
sudo apt remove siwit-seal
```

This leaves your keys and contacts in place. To remove **everything** including your keys (irreversible), also delete `~/.local/share/Seal/` and the `SILICONWIT-SEAL` folder under your Documents.

## Where your files live

| Type                            | Location                                |
|---------------------------------|-----------------------------------------|
| Keyring (private and public)    | `~/.local/share/Seal/gnupg/`            |
| Contacts database               | `~/.local/share/Seal/contacts.sqlite`   |
| Visible saved files             | `~/Documents/SILICONWIT-SEAL/`          |

## After install

First launch runs the [setup wizard](../quickstart.md#1-first-run-create-your-key). Save the **private-key backup** and **revocation certificate** to a USB stick or password manager **before** you start sealing real files.
