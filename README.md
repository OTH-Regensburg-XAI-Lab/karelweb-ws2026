# Karel Studio — WS 2026

Static website: https://oth-regensburg-xai-lab.github.io/karelweb-ws2026/

This repository publishes the standalone version **without the world editor**.
The programming editor, simulator, JSON world import, English diagnostics and
project footer are included. The shipped program uses `int main()`;
`int main(void)` is also accepted, while `void main()` is rejected. `test.html` and world-editor-only assets are not deployed.

- `index.html`: programming view, simulator and JSON world import.
- `assets/`: browser code, analysis worker, fallback interpreter and styles.
- `THIRD_PARTY_NOTICES.txt`: licenses and copyright notices of runtime dependencies.
- `.nojekyll`: serves the generated files directly on GitHub Pages.

## Rebuild and publish

Built on 2026-10-01 from Karelweb source commit
[`096d33a`](https://gitlab.oth-regensburg.de/IM/labor_kiti/adki/karelweb/-/commit/096d33a792f65d5de2223e1eaf489bb1b5f2b916).
The correction is on `codex/l-03-standalone-starter`, based on `main` at `b96f165`.
Translations and project credits now come from the source repository; generated
bundles do not require local patches.

Run in the Karelweb source repository after installing its dependencies:

```sh
npm run build:static-page:without-world-editor
node scripts/static-page-smoke.mjs static-page-without-world-editor without-world-editor
```

Copy the contents of `static-page-without-world-editor/` into this repository's
root, replacing the old generated files and removing obsolete assets and
`test.html`. Preserve `.git`, this README and any hosting configuration. The build
uses `/karelweb-ws2026/` as its base path. Commit and push to `main` to trigger the
existing GitHub Pages deployment.

The actual delivery directory can also be tested from the source repository:

```sh
node scripts/static-page-smoke.mjs /Users/snk/containers/karelweb-ws2026 without-world-editor
```

The smoke test first compiles and executes the shipped `int main()` program.
It covers Chromium, Firefox and WebKit, including execution, JSON
import, English UI with a German browser locale, footer links, licenses, worker
loading, a narrow viewport and absence of the world editor.

Previously saved browser programs are restored unchanged. If a saved program
still declares `void main()`, change that line to `int main()` once in the editor.

A project license has not yet been selected. The third-party notices do not
license Karel Studio's own code.
