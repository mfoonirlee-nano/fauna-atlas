# Purple Frog image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-07. Runtime WebPs live in `public/images/species/purple-frog/`. These are AI scientific scene reconstructions.

## Prompts

[Complete generation and edit prompts](./prompts.json). Six generation calls and three cover edits; no CLI fallback. The first cover placed the frog too low and large. The edits reduced and relocated the frog while reconstructing the forest floor. Only the final accepted cover is stored here.

## Visual review

Original-resolution inspection covered the final compressed cover PNG and all six runtime WebPs. Each generated gallery scene was also inspected before compression. No GUI or headless browser was used.

The cover's padded complete-subject boundary is `{ left: 1090, top: 348, right: 1270, bottom: 452 }` in the 1536 × 1024 source, including the snout, body, visible limbs and toe tips. Its horizontal center is 76.8% of source width. The left 40% contains quiet dark forest. Committed focal point: `{ x: 0.85, y: 0.38 }`.

The cover depicts a small frog resting on forest soil. The small scale limits identification detail; gallery 02 supplies the closer body view. Gallery 03 intentionally conceals most of the animal in a shallow burrow entrance; its opening is staged for visibility and does not establish burrow depth or calling behavior. Gallery 04 is habitat only. Gallery 05 intentionally crops the torso for a head detail. Gallery 06 shows a frog beside water without depicting an actual reproductive event. Generated toe shapes, skin texture and body proportions are illustrative, not diagnostic measurements. The images do not document tadpole anatomy, exact locations, sex, or internal structures.

## Compression

All six accepted PNG sources passed TinyPNG; no local fallback was needed. Runtime conversion used the repository script with `cwebp -q 82 -m 6 -mt`.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `006bfbe5bc830c3ee205b4a52581b8510fc389d70234da56eccb8f34f5433fdc` | `d112b046ee8428674e26db4d1795cac2320202a7906b024c236611989f7674df` |
| 02 | `582cc539b776a95b565c041a6cc1ac3c350b706f624e1e82122f8c20202d3db1` | `7f7bcd47ae48258d198f124e46bba97bfa88b737d3042ee4bc71142e3685528c` |
| 03 | `3914a762eda27bd6d90449b46967dfcff086541f8a4a3717de6ba6e1292745ef` | `e92736d9e1fc2b79e85782c71283c731fff7f6b13d56be1f31aee5f32b7ba815` |
| 04 | `a7f379fc36b9c71ea91719f0eb52785940e5cc0dedff9934872fa2a82407dd59` | `62d36c8426b604c87cfa585178e5533261f3bfcfd0246e78f2a9c627dc1014ef` |
| 05 | `6ce11753fbd155bfc6f60d6aa0b5d4a865fce71b6657d0b32d5294383240455e` | `fc1a59ff3d75ac7fef9be8a2340db775880c5dfd3767ad35722ec6aff9572e35` |
| 06 | `5ceaba5ee7be2a968407830465d6072ef649254e31819d736104f539b6395266` | `604050ce4636cd6f47930dbbea74389e6ad81d9e12036e57253bdd647327572a` |

## Hero acceptance

The 01 runtime SHA-256 above binds the tested image to its full-subject boundary in `tests/hero-carousel.test.mjs`. The geometric review checks at least 24 CSS pixels of clearance from the viewport, hero copy and carousel panel at every endpoint. The minimum modeled clearance across all checks is 54.5 CSS pixels.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content provenance

AMNH supports the accepted taxonomy and 2003 description. Thomas et al. (2014) documents underground calls; Senevirathne et al. (2016) supports the transition from torrent-clinging larvae to fossorial frogs. ZSL EDGE supports diet and breeding ecology. Its older EN status is superseded here by the IUCN 2022-2 category-change search index and KFRI's Monsoon Croaks 2023 report (PDF page 14), which lists NT. Direct access to the IUCN assessment and category-change PDF returned 403; the assessment date, criteria and global trend remain unset or unknown. The 2022 list-release year is not used as an assessment year. Source URLs and access dates are recorded in the species profile.

## Verification

`npm test` passed all 163 tests, including taxonomy/media integration, complete-subject hero clearance, and HTTP asset checks below a deployment subpath. TypeScript checking and the production build passed. The build refreshed tracked `dist/` output and retained the existing JavaScript chunk-size warning. `git diff --check` passed.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-monsoon-cover.webp` SHA-256: `b1fee2afbd854b856dee9c5697d7e6f2722d6d1e7982700926614e3b59b5bf06`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.85, "y": 0.38}`. Conservative full-subject boundary: `{"left": 656, "top": 274, "right": 1482, "bottom": 812}`, 826×538 source pixels (previously 180×104). Boundary center is 69.6% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the pointed snout, rounded body edge and all visible toe tips. Far-side limbs naturally overlap; fine toe counts and diagnostic body measurements are not asserted. Skin remains subdued purplish brown. Real soil background surrounds all visible extremities. The left 40% contains softly blurred dark forest soil and vegetation. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 133.6×77.2 → 270.2×176.0 | 24.89 | 48.00 | 40.00 | Pass |
| 390×760 | 133.6×77.2 → 270.2×176.0 | 59.89 | 48.00 | 40.00 | Pass |
| 1366×768 | 160.1×92.5 → 559.7×364.5 | 72.00 | 51.32 | 79.73 | Pass |
| 1920×900 | 225.0×130.0 → 825.6×537.7 | 72.00 | 62.40 | 59.13 | Pass |
| 2560×900 | 300.0×173.3 → 859.8×560.0 | 96.00 | 211.71 | 48.00 | Pass |
| 3840×900 | 450.0×260.0 → 859.8×560.0 | 96.00 | 544.51 | 48.00 | Pass |

`npm run test:carousel`: all 79 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
