# Linux (`.deb`)

Tested on Ubuntu 22.04+, Debian 12+, Linux Mint 21+.

## Install

1. Grab `siwit-seal_<version>_amd64.deb` from [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases).
2. Install it:

   ```bash
   sudo apt install ./siwit-seal_<version>_amd64.deb
   ```

   Using `apt install ./<file>` lets apt resolve dependencies automatically. If you prefer `dpkg`, run `sudo apt -f install` afterwards to fix any missing dependencies.

3. Launch from your applications menu, or run `siwit-seal` in a terminal.

## Uninstall

```bash
sudo apt remove siwit-seal
```

## Notes

- GnuPG is bundled, so there's nothing else to install.
- User config and keys live under `~/.config/siwit-seal/` and `~/.local/share/siwit-seal/`.
