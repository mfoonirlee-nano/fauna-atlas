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
| 01 | `50023ddc826088e03344fbecb690f98df766b82e6201ba5c21d9fb8eb999a8ae` | `b0d49814ffda461cfdf7a61f46de776cfac47644eaaf053de772826c48aac1ed` |
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
