# Spider-tailed Horned Viper image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-07. These are AI scientific scene reconstructions, not field records. Runtime assets live in `public/images/species/spider-tailed-horned-viper/`.

## Prompts

The complete generation and edit prompts are in [prompts.json](./prompts.json). The accepted cover uses gallery 04 as an anatomical reference. Earlier cover attempts were rejected for excess size, extra head-like anatomy, misplaced subject or floating appearance. Gallery 02 received a tail and horn correction using gallery 03 as reference. No CLI fallback was used.

## Visual review

The accepted cover has one complete coiled snake resting on limestone with a contact shadow. Full-subject boundary with padding: left 1035, top 330, right 1238, bottom 445 source pixels, including head, horns, coils and terminal lure. Center is 74.0% of source width; the left 40% is quiet rock texture. Source dimensions: 1536 × 1024. Committed focal point: `{ x: 0.8, y: 0.38 }`.

The cover keeps the snake small to accommodate the hero crops. Its fine tail scales cannot establish species identity. Gallery 02 shows the complete body; 03 intentionally crops to the attached tail, with a bulb and elongated scales. Gallery 04 shows a rock fissure; 05 shows a static tail-forward posture. In 05 and 06, the generated tail fringe looks more brushlike than a measured anatomical plate, so captions state the simplification. Gallery 06 contains a snake although its prompt requested an empty habitat; its caption describes the actual result. None of these still images demonstrates tail motion, bird attraction, hunting success, scale counts or a specific location.

## Compression

All six sources passed TinyPNG, reducing 18539.0 KiB to 7263.8 KiB. Runtime conversion uses the repository script with `cwebp -q 82 -m 6 -mt`. No compression fallback used.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `5b22fb23b76369b1984a1a6616656302eef6aacbcddcdd5f4127d15c75637a2c` | `7922cb6e63ed023e9ebcd378f269a0f8ee958fdbfd7319f4c4ae288e2ca1d1d5` |
| 02 | `6f1d4f331644542e1a9710c8c754449f35652b8f35e55d43b91cbf30f9925941` | `338a616cc2198bffd5ba482c464620363580cc4fc56e40cbf21080f5bce21842` |
| 03 | `c89e3c9cc6e3b1ac9dec24a6654c63b984c4480ba0c3f76d21a3f0adceb0c7f1` | `54c5b300997ee14a2a26e05fc9fab2d04137ba8026eed9404b0d189ec44a8e2b` |
| 04 | `86724313dda0c2dd331955a7014b9c6f4656c2dc8595405a6313468283b665bb` | `5c87ba4348127668be6c55f3ea623289c69bd026a7781b63e8789dc215043b32` |
| 05 | `d999eb836fa67a6106636e055a97ba5bd49f70aa160a6b51f9fef5d39a241cf7` | `2343c455cddfce5b509c896db3144825c7e950b294c1397679cfca24f7396480` |
| 06 | `46aeb30ccaf3d3c6c9980c7ff01433e2c629795c4f3547afc171f54844d5763e` | `1516eea957185980b1dcb575fa2d62ca88d286a421b73c32c0a07704f1d837a9` |

## Hero acceptance

Original-resolution inspection covered the generated source images, the compressed cover PNG, and all six runtime WebPs. The cover boundary includes the entire visible subject, not only its head. The runtime cover SHA-256 is the 01 runtime hash in the accepted table above.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

`npm run test:carousel` verifies all 36 states against the reviewed complete-subject boundary and runtime hash, with at least 24 CSS pixels of clearance from viewport edges and the copy/carousel panel rectangles. The original y=0.34 focal point failed the 3840 × 900 panel clearance; y=0.38 passes. No GUI or headless browser was used.

## Verification

All 161 repository tests passed through `npm test`, including taxonomy/media integrity, complete-subject hero clearance and HTTP asset loading below a subpath. Type checking and the production build passed. The tracked `dist/` now includes the profile and six WebPs. Vite reports the existing JavaScript chunk-size warning. `git diff --check` passed.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-limestone-cover.webp` SHA-256: `7922cb6e63ed023e9ebcd378f269a0f8ee958fdbfd7319f4c4ae288e2ca1d1d5`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.8, "y": 0.38}`. Conservative full-subject boundary: `{"left": 656, "top": 214, "right": 1468, "bottom": 714}`, 812×500 source pixels (previously 203×115). Boundary center is 69.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes one head, short supraocular horns, full outer coils and the attached terminal bulb with elongated scale fringe. The accepted edit replaces the first candidate fingerlike starburst with a distinct terminal bulb and narrower fringe. Coils overlap naturally; fine fringe shapes and scale counts remain illustrative, not measured anatomy. The tail remains visibly continuous with the body. Real rock surrounds the full outline. Left 40% contains subdued rock. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 150.7×85.4 → 272.0×167.5 | 24.00 | 52.26 | 44.26 | Pass |
| 390×760 | 150.7×85.4 → 285.8×176.0 | 52.09 | 48.00 | 40.00 | Pass |
| 1366×768 | 180.5×102.3 → 559.7×344.6 | 72.00 | 51.32 | 89.68 | Pass |
| 1920×900 | 253.8×143.8 → 825.6×508.4 | 72.00 | 62.40 | 73.81 | Pass |
| 2560×900 | 338.3×191.7 → 909.4×560.0 | 96.00 | 186.88 | 48.00 | Pass |
| 3840×900 | 507.5×287.5 → 909.4×560.0 | 96.00 | 519.68 | 48.00 | Pass |

`npm run test:carousel`: all 87 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
