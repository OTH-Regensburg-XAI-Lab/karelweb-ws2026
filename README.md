# Karel Studio — WS 2026

Static website: https://oth-regensburg-xai-lab.github.io/karelweb-ws2026/

This repository publishes the standalone **program Editor and World Editor**, plus
an independent fourteen-lesson tutorial. All three views use the same modal
**Impressum / Privacy**, generated from one source file in Karelweb. The short
privacy notice describes local browser processing/storage and GitHub Pages hosting.
The linked names
Prof. Dr. Stephan Scheele and Prof. Dr. Titus Dose appear directly below each other
above OTH Regensburg and the shared address. No email is included.

- `index.html`: programming view, simulator and local JSON world import.
- `test.html`: World Editor with integrated programming/simulation, named worlds,
  JSON editing and load/save.
- `tutorial/index.html`: guided tutorial with separate browser progress/drafts.
- `impressum.html` and `tutorial/impressum.html`: printable direct-link fallbacks;
  ordinary footer activation opens a modal in the current application.
- `assets/` and `tutorial/assets/`: generated browser code, styles and workers.
- `tutorial/content/`: public lessons, illustrations and prepared worlds.
- `THIRD_PARTY_NOTICES.txt`: runtime dependency licenses, also copied into tutorial.
- `.nojekyll`: serves generated files directly on GitHub Pages.

## Build provenance

Built on 2026-10-03 from the Karelweb working tree on
`codex/f-03-privacy-notice`, based on source commit
[`bed0c37`](https://gitlab.oth-regensburg.de/IM/labor_kiti/adki/karelweb/-/commit/bed0c37305d64ba7b0e481697ca705ec06a587e3),
including the uncommitted minimal privacy-notice follow-up. The owner explicitly
requested building and pushing both applications, without tests. Both production
builds completed; no test suite was run for this publication.

Source snapshot SHA-256:
`38b057666b3e587000e39f2918ae7f3f4bb53b73d9fe1cb047a879627c7f6021`.
This covers 383 sorted tracked/nonignored files under `apps/shared`,
`apps/standalone`, `apps/tutorial`, `packages`, plus `package.json`,
`package-lock.json` and `tsconfig.base.json`; hash each relative path, NUL, bytes,
NUL. Generated distributions and unrelated local files are excluded.

## Rebuild and publish

Run from the Karelweb source repository after installing dependencies:

```sh
npm run build:static-page
npm run build --workspace @karel/tutorial -- --base=/karelweb-ws2026/tutorial/
```

The first command builds shared libraries and the full standalone distribution
with base `/karelweb-ws2026/`. The second builds the tutorial using those libraries.
Copy `static-page/` contents into this repository's root and `static-tutorial/`
contents into `tutorial/`, including dotfiles and notices. Remove obsolete
**generated** assets in those destinations, preserving `.git`, this README,
hosting configuration and unrelated files. Do not copy source tests or internal
pre-upgrade fixtures. Commit and push to `main` to trigger GitHub Pages.

Maintain the imprint once in the source repository's `apps/shared/imprint.json`,
then rebuild both distributions. Do not edit generated HTML or bundled code.
Standalone and tutorial keep their own browser storage. Existing saved programs
are restored unchanged; the language accepts `int main()` / `int main(void)`.
A saved legacy `void main()` program needs a manual correction.

A project license has not yet been selected. Third-party notices do not license
Karel Studio's own code. The short technical privacy notice is not a certification
of legal completeness;
controller classification and applicable legal bases remain to be confirmed.
