# Mindset · FrameCo — Remotion reconstruction

Editable 720×1280, 60 fps, 592-frame reconstruction of the [reference clip](https://motionface.cc/?recording=ac82ea9f-f45b-48bc-91ba-0be113ac9040).

## Run

Node.js 22+ and npm are recommended.

```sh
npm ci
npm run dev
```

Select **Mindset** in Remotion Studio. All fonts and media are local; the expired reference URL is never needed. The renderer may download Chrome Headless Shell on its first run.

## Render and check

```sh
npm run lint
npm run render
npm run still
```

Outputs: `out/mindset.mp4` and `out/poster.png`. The MP4 includes the reference audio track. `out/` is intentionally ignored by Git.

## Edit

`src/Composition.tsx` contains `Background`, `Opening`, `Brain`, `Word`, and `Mindset`. Adjust timestamp arrays, positions, colors and Word text directly. Animation is driven entirely by Remotion frames, with no CSS animation or remote media requests. Native HTML/SVG rebuild the composition; the brain is a single transparent raster sprite, not a video layer or a recovered 3D model.

See [ANALYSIS.md](ANALYSIS.md) for timing and reference observations, [ASSETS.md](ASSETS.md) for asset provenance, and [VERIFICATION.md](VERIFICATION.md) for actual checks and known differences. Font and fine-motion matching are approximate; this is not certified pixel-identical.

Remotion interpolation API: https://www.remotion.dev/docs/interpolate
