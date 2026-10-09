# Verification — 2026-10-09

- `npm run lint`: ESLint and TypeScript passed after final source edits.
- `npm run render -- --log=error`: complete 592-frame H.264 render passed.
- `npm run still -- --log=error`: frame 480 poster rendered successfully.
- FFprobe: 720×1280, 60 fps, 592 decoded video frames, 9.866667 seconds; AAC 48 kHz audio. Audio duration is 9.877 seconds, approximately 10 ms longer from AAC packet padding.
- `ffmpeg -v error -i out/mindset.mp4 -f null -`: full video/audio decode passed without errors.
- Studio loaded the Mindset composition in the browser with local fonts and assets.
- Sampled visual review: reference contact sheets and rendered contact sheet inspected, including opening, both text groups, zoom and lateral transition. See `docs/render-contact.jpg`.
- Scope: technical validation and sampled visual comparison completed. No claim of exhaustive subjective A/V playback or pixel-perfect equivalence. Fonts, brain pose, background curve/grid and fine timing remain approximate.

Source MP4 and secrets are outside the repository. Before publication the staged file set is scanned for bearer tokens, signed URL parameters and the source storage host.
