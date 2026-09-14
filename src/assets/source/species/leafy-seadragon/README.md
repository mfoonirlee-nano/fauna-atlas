# Leafy Seadragon image set

Six original 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Runtime WebPs live in `public/images/species/leafy-seadragon/`.

## Prompts

[Six generation prompts](./prompts.json) and [accepted cover edit](./cover-edit.txt). No CLI fallback. The edit reduced and repositioned the cover animal for hero clearance.

## Visual review

Inspected all six source PNGs and runtime WebPs at original resolution. The complete cover boundary is `{ left: 1142, top: 324, right: 1253, bottom: 397 }`, including the snout, leaf tips, visible fins and tail. Its horizontal center is 78.0% of the 1536px source width. Focal point: `{ x: 0.86, y: 0.38 }`. The left 40% is quiet teal water.

The cover fish is small and low contrast against the water; gallery 02 supplies identification detail. Generated leaf branching, body proportions and fin rays are illustrative, not measurements. Gallery 03 exaggerates fin visibility for explanation and intentionally crops the body. Gallery 04 shows a shrimp near the mouth, not a measured suction event. Gallery 05 shows exposed tail eggs with schematic placement and count; some upper appendages are cropped. Gallery 06 includes a fish despite the animal-free prompt, and its accepted alt text describes the actual fish among seagrass and algae. None of these images is a field photograph.

## Compression

All six sources were compressed with TinyPNG (12,807.1 KB to 3,929.9 KB). No fallback. WebP conversion used the repository script, `cwebp -q 82 -m 6 -mt`, producing 724.3 KB total. Fine palette grain and softened detail remain visible on the small cover animal.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `edbca42fec61afad481fc8fa7f3169a8dbbc07426ce5948390dfab4f985db8ea` | `6c5056c49f7fc5e04e43e3ba7624c8d366e62ab5c52724ce101e9bae0d67eeb7` |
| 02 | `fd482ca319afe0ce11f018137b21b4722e21af3b381f49ea9d338f1f4d601b55` | `dc2ca07d02eef138b9f2506453e35b1ea80677d1ad0772da97d1d0e6f386a085` |
| 03 | `de41810437e809661321bb6269c5cb4a7bd8508827484fa323896cc4ccc10033` | `8aaf21c3f61928773c413db0b3a73bd103d0e5efb1abdd70aeba8163032b60a4` |
| 04 | `575e2630323f7a60a71892b126a6a93b216d163deabb0311c7520f02111ca363` | `3f454f4664216fcb3fde00471e56fe8a6a600033ccd55b3f461df173f1431342` |
| 05 | `7b9d0ff2937aaf44aa871597cf36f95b99fbc0d3d5e1a4e43b680230fe5d4959` | `cfd75918e8f07996d7a1f9d46a090bda12e652b4792a7be746898e0e33c49b9b` |
| 06 | `a48d3fa8905fe5a94c06c0b2ee9b70e23e2002cc3a307be018210089e9c35b7d` | `c01543248ac6c9a83a42f51b9c3dc1a2594074050ef31596bc65b77a49c7455c` |

## Hero acceptance

`npm run test:carousel` passes. The runtime cover hash above binds the visually reviewed full-subject boundary to its regression case. The subject clears viewport edges, copy and carousel panel by at least 24 CSS pixels at every required endpoint. Verification used geometry and static image inspection; no GUI or headless browser.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content sources and decisions

Accessed 2026-09-07. [Fishes of Australia](https://fishesofaustralia.net.au/home/species/3126) supplies classification, range, 4–50 m depth and 35 cm total length. [NCBI](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=693459) corroborates Syngnathiformes / Syngnathidae / Phycodurus. [FishBase](https://www.fishbase.org/summary/Phycodurus_eques.html) lists LC, assessed 12 May 2016, in its IUCN version 2025-2 field. Fishes of Australia's quick facts agree on LC, while its detailed table retains NT; the profile does not reuse that stale field or its unsupported CITES claim. Global trend remains unknown because it was not established in the consulted assessment summary.

[Monterey Bay Aquarium](https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/leafy-sea-dragon) supports exposed male tail brooding without a closed pouch and habitat pressures. [Waikīkī Aquarium](https://www.waikikiaquarium.org/experience/animal-guide/fishes/seahorses-seadragons-and-pipefishes/leafy-seadragon/) supports dorsal propulsion, small pectoral fins and suction feeding. Aquarium accounts report up to 50 cm; the profile explicitly selects the 35 cm fish-catalogue convention. Incubation durations differ across sources, so the profile does not turn a single duration into a fixed rule. No abundance estimate is invented.

## Verification

`npm test` passed all 166 tests, including the six-image integration and hash checks, full-subject hero geometry and HTTP asset checks under a deployment subpath. `npm run typecheck` and the production build passed. The build refreshed tracked `dist/` output and retained the existing JavaScript chunk-size warning. `git diff --check` passed.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-kelp-cover.webp` SHA-256: `6c5056c49f7fc5e04e43e3ba7624c8d366e62ab5c52724ce101e9bae0d67eeb7`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.86, "y": 0.38}`. Conservative full-subject boundary: `{"left": 734, "top": 188, "right": 1420, "bottom": 830}`, 686×642 source pixels (previously 111×73). Boundary center is 70.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the tubular snout, all visible branching leaf tips, transparent fin edges and entire non-coiled tail. Leaf appendages naturally overlap in side view. The first candidate intruded into the left field; the accepted edit shifts the complete animal right. Real water remains around every visible extremity. The left 40% remains quiet teal water. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 82.4×54.2 → 188.1×176.0 | 65.97 | 48.00 | 40.00 | Pass |
| 390×760 | 82.4×54.2 → 188.1×176.0 | 100.97 | 48.00 | 40.00 | Pass |
| 1366×768 | 98.7×64.9 → 457.3×428.0 | 96.00 | 102.49 | 48.00 | Pass |
| 1920×900 | 138.8×91.2 → 598.4×560.0 | 96.00 | 176.01 | 48.00 | Pass |
| 2560×900 | 185.0×121.7 → 598.4×560.0 | 96.00 | 342.41 | 48.00 | Pass |
| 3840×900 | 277.5×182.5 → 598.4×560.0 | 96.00 | 675.21 | 48.00 | Pass |

`npm run test:carousel`: all 71 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
