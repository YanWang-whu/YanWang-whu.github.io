# Yan Wang's personal website

A static website for research, manuscripts and conference abstracts, reading notes, and life outside the lab. It runs without a build step or package installation.

## Edit the site

- `index.html`: homepage, research experience, publications, education, skills, activities, awards, contact, and photos.
- `interest-data.js`: torpor papers, personal reading notes, researcher profiles, and cognition questions. Keep `source`, publication status, species, and caveats accurate when updating papers.
- `interest-maps.js` and `reading-room.js`: map, filtering, and reading-dialog behavior.
- `site.js`: navigation, expandable sections, and the photo gallery.
- `polish.css`: current visual refinements. `style.css` retains the original base styles; `reading-room.css` styles the reading interfaces.
- `Yan Wang_CV.pdf`: the current CV. Older PDFs are historical files and are not linked from the homepage.

All asset links use relative paths so the site can also run under a GitHub project path. The main CV contains the current personal domain; update that field when moving to a different account.

## Preview

Serve this directory with any static HTTP server. For example, with Python installed:

```sh
python -m http.server 8765
```

Open `http://localhost:8765/`. Changes require a browser refresh.

## Publication status

The review manuscript and SfN 2026 abstract are listed as **submitted**. Update the status only after a journal decision or conference acceptance is available. A conference submission's finalized state does not indicate acceptance.

## Deployment

The existing GitHub Pages site publishes this repository's `main` branch. Before publishing, check the local site at desktop and mobile widths, inspect the reading dialogs and CV, and save a recoverable source snapshot.
