# Reference analysis

Reference: https://motionface.cc/?recording=ac82ea9f-f45b-48bc-91ba-0be113ac9040

Inspected locally: H.264, 720 × 1280, 60 fps, 592 frames, 9.866667 seconds. Stereo AAC, 48 kHz. Examined opening, 2.5s, 2.7s and a 40-sample contact sheet; measured red foreground bounds at 18 timestamps. Source metadata mentions Remotion 4.0.438; this reconstruction uses 4.0.534.

| Time | Observed layout and motion | Implementation |
| --- | --- | --- |
| 0–0.4s | Large black `br[brain]ins`, small `our`, grayscale brain, thin downward stem, upper-right @frameco | HTML text, grayscale sprite, SVG arrow |
| 0.45–1.85s | `operates in two distinct modes` builds word by word; modes is pink and larger | Independent word opacity ramps |
| 2.13–2.7s | Coral brain enters from bottom, rises to center; headline dissolves; pale curved stripe and dotted grid appear | Eased position tracks and SVG background |
| 3.06–3.5s | Brain enlarges, right edge crops beyond frame | Sprite width grows 420→688 px, x remains near 150 |
| 3.22–5.55s | Upper-left italic `Fast`, `Automatic`, `Unconscious` build with a short blur | Separate editable Word nodes |
| 5.55–6.17s | Brain moves left and up continuously; first list exits left | Shared deterministic camera-like position tracks |
| 6.28–9.87s | Lower-right `Slow`, `Conscious`, `Effortfull` appear sequentially, then text fades | Second Word group; reference spelling retained |

Background is an approximate #e8e8e8–#ffffff radial gradient with a low-contrast #d8d8d8 arc and sparse gray grid. The brain has coral highlights, deep reddish folds, and no separate heavy drop shadow. Typography is a bold grotesque headline plus tight Times-like italic descriptions. Font identities are inferred: bundled Roboto and Tinos are reproducible substitutes, not verified source font identities.

The static brain asset is cropped from the provided reference at 2.7 seconds, with a red-channel separation alpha matte. It is not a recovered 3D model. All timing, text, background shapes and camera movement are recreated in React/SVG, with no reference video playback layer. Source audio is retained. The gray opening uses the same brain silhouette, which differs slightly from the reference opening pose. Curve geometry, font metrics, fine motion and matte edges are approximations. This is an editable reconstruction, not a claim of pixel-identical recovery.

