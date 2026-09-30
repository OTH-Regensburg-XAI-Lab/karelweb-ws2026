# Karel Studio — WS 2026

Static website: https://oth-regensburg-xai-lab.github.io/karelweb-ws2026/

- `index.html`: programming view and simulator.
- `test.html`: world editor and five examples. Exercise 2.1 is intentionally excluded.
- `assets/`: browser code, worker, fallback interpreter and styles.
- `THIRD_PARTY_NOTICES.txt`: licenses and copyright notices of runtime dependencies.

This deployment has local English translations, including parser, runtime and
world-file diagnostics, plus project credits in both page footers. These changes
are specific to this repository; rebuilding from the separate `karelweb` source
repository will overwrite them unless they are ported there first. Keep asset
references and cache-busting filenames in sync when changing JavaScript bundles.

A project license has not yet been selected. The third-party notices do not
license Karel Studio's own code.
