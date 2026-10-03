# Karel Studio — WS 2026

Static website: https://oth-regensburg-xai-lab.github.io/karelweb-ws2026/

This repository publishes the standalone **program Editor and World Editor**, plus
an independent fourteen-lesson tutorial. All three views use the same modal
**Impressum**, generated from one source file in Karelweb. The linked names
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
`codex/f-02-world-editor-ui`, based on source commit
[`44330b8`](https://gitlab.oth-regensburg.de/IM/labor_kiti/adki/karelweb/-/commit/44330b8f8a98a1f02ec7a372216bfb815ca62584),
including the uncommitted F-03 shared-imprint implementation and latest content
revision. The owner explicitly requested building and publishing both applications
and requested no further tests. Both production builds completed; no test suite
was run for this publication.

Source snapshot SHA-256:
`8dc3675093ad311867d262f97dff5c3c644df55bafe986985db7d06227a0796d`.
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
Karel Studio's own code. The contact-only imprint does not include a privacy policy.
