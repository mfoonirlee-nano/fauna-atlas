# Pacific Barreleye image set

Six original 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Sources live here; runtime WebPs live in `public/images/species/barreleye/`.

## Prompts

[Six generation prompts](./prompts.json) and [final cover edit](./cover-edit.txt). No CLI fallback. Only accepted source images are retained. The cover edit reduced and repositioned the fish for hero clearance.

## Visual review

The full-subject boundary in the cover is `{ left: 1130, top: 328, right: 1258, bottom: 393 }` in source pixels, including the mouth, transparent dome, visible fin tips and forked tail. Its horizontal center is 77.7% of source width. The left 40% is quiet dark water. Committed focal point: `{ x: 0.86, y: 0.38 }`.

The cover fish is small; gallery 02 and 03 supply identification detail. All images are illustrative reconstructions. Eye optics, tissue texture, fin rays and body proportions are not anatomical measurements. Gallery 03 intentionally crops the body and does not demonstrate a complete eye rotation. Gallery 05 includes a fish despite the animal-free prompt; the accepted caption describes the actual fish and midwater scene. Gallery 06 depicts a generic ROV with illustrative size and distance, not a specific MBARI dive. Generated images do not establish a feeding event, population size or depth measurement.

## Compression

All six source PNGs were processed with TinyPNG. Visual inspection found palette dithering on the small cover fish, so the accepted cover instead uses the original generated pixels with local lossless PNG24 compression (`magick -strip -define png:compression-level=9`). The five gallery sources retain their TinyPNG outputs. WebP conversion used `cwebp -q 82 -m 6 -mt` through `npm run convert:webp`. No palette fallback.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `2eb1ff82187d75a87d080b577ade88eada868a88269d6ce85f499aa2db7bef63` | `37ec95640b26cb0d36c436e67e79275ea7ebfac76a94586efa3412b97bbb09a7` |
| 02 | `814bb79fd47743cf803d3eb258853302bad256e38ddc9d5e3ca4130cb6d864df` | `5c84d905a9b7217f3c662af49c77ac7d673c3e4fbdc20989948309788c053d3f` |
| 03 | `bf866987e6c8ab03c52f0db03571eace9a606e63b34ecff2b1c05998508aad81` | `0b17086d1d6180c0fe7d0662b6fef7459435917698d697025230c17b5e1d5b36` |
| 04 | `7d47604cb89569cfb9f5daf536c25e30820f021a56e3195fa7c35f49b5c07dfd` | `301c79e67e10ff08363f6018801e581832fd5379b2f8cf2d39e10840e4e910d4` |
| 05 | `605d76229cd6321b81991582d4ef01377b724c0c7f2bab13f9504f14d28dddf3` | `cc81caf36e48a8e146dc126c308ef070651e9bc8179302bd51e51d4b4ae64377` |
| 06 | `ff60120070d0925087f905643829da6e78d6eed69e7fa633f55dc346fddd7092` | `813b6bb1e77b8ba48ef68bd8cfca96f3f8723c69351787bfb998123cddf46600` |

## Hero acceptance

Inspected all six generated sources, the accepted losslessly compressed cover PNG and all six runtime WebPs at original resolution. No GUI or headless browser was used. The runtime cover hash above binds the full-subject boundary to `tests/hero-carousel.test.mjs`. Every required viewport and animation endpoint passes the 24 CSS pixel checks against the viewport edges, hero copy and carousel panel.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content sources

MBARI's animal account supports a maximum length of 15 cm, a 600–800 m observation range, North Pacific distribution and zooplankton diet. Its 2009 research release supports rotating tubular eyes and distinguishes green eyes from facial olfactory organs. The stealing of prey from siphonophore tentacles, protective function of the dome and filtering role of green pigment remain hypotheses. FishBase's indexed account explicitly lists Not Evaluated under IUCN version 2025-2, and records bycatch; no global abundance trend or assessment year is invented. Direct FishBase access returned 403, so indexed page text was used. FishBase and NCBI agree on Argentiniformes / Opisthoproctidae / Macropinna; the older Osmeriformes placement in ITIS was not mixed into this path. UTMSI corroborates the North Pacific range. Source URLs and access dates are recorded in the profile.

## Verification

`npm test` passed all 165 tests, including taxonomy and six-image integration, hero clearance, and HTTP assets under a deployment subpath. `npm run typecheck` and the production build passed. The build refreshed tracked `dist/` output and retained the existing JavaScript chunk-size warning. `git diff --check` passed.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-midwater-cover.webp` SHA-256: `37ec95640b26cb0d36c436e67e79275ea7ebfac76a94586efa3412b97bbb09a7`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.86, "y": 0.38}`. Conservative full-subject boundary: `{"left": 718, "top": 256, "right": 1496, "bottom": 730}`, 778×474 source pixels (previously 128×65). Boundary center is 72.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the transparent head dome, mouth, all visible fin edges and forked tail. Two green upward-looking eye caps sit inside the dome, distinct from the small facial olfactory pits. Fin rays, tissue optics and proportions remain illustrative rather than anatomical measurements. The accepted edit corrects initial head intrusion and tail-edge proximity. Real water surrounds all extremities. Left 40% contains quiet dark navy water. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 95.0×48.2 → 272.0×165.7 | 24.00 | 53.14 | 45.14 | Pass |
| 390×760 | 95.0×48.2 → 288.9×176.0 | 50.56 | 48.00 | 40.00 | Pass |
| 1366×768 | 113.8×57.8 → 559.7×341.0 | 72.00 | 51.32 | 91.51 | Pass |
| 1920×900 | 160.0×81.2 → 825.6×503.0 | 72.00 | 62.40 | 76.50 | Pass |
| 2560×900 | 213.3×108.3 → 919.2×560.0 | 96.00 | 182.02 | 48.00 | Pass |
| 3840×900 | 320.0×162.5 → 919.2×560.0 | 96.00 | 514.82 | 48.00 | Pass |

`npm run test:carousel`: all 86 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
