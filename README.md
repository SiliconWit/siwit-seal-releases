# SiliconWit Seal: Releases and Docs

Public home for **SiliconWit Seal** (`siwit-seal`):

- **Downloads** (`.deb`, `.msi`, macOS): see the [Releases](https://github.com/SiliconWit/siwit-seal-releases/releases) tab.
- **Documentation**: published at <https://siliconwit.github.io/siwit-seal-releases/>.

The application source lives in a separate, private repository.

## Building the docs locally

```bash
python3.10 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

Then open <http://127.0.0.1:8000>.

## Publishing

The site is built and deployed to GitHub Pages automatically on every push to `main` (see `.github/workflows/docs.yml`).

To enable Pages:

1. Push at least one commit to `main`.
2. In the repo settings → Pages, set **Source** to **GitHub Actions**.
