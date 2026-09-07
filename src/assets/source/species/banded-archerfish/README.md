# Banded Archerfish image set

Six 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Sources live here; runtime WebPs live in `public/images/species/banded-archerfish/`.

## Final prompts

[Original prompts](./prompts.json), [first edits](./edits.json), [rejected waterline edit](./waterline-edit.json), and [accepted aerial-shot regeneration](./aerial-shot-final-prompt.json). Cover 01 uses the first cover edit. Gallery 03 uses the final regeneration: prior edits failed to align the mouth and surface. Other images use their original prompts. No CLI fallback.

## Visual inspection and limitations

Inspected all six final compressed PNGs and all six runtime WebPs at original resolution. Cover full-subject boundary: `{ left: 1183, top: 350, right: 1305, bottom: 402 }`, including snout, dorsal, pectoral, pelvic and anal fins and full tail. Source dimensions: 1536 × 1024. Horizontal subject center: 81.0%. Committed focal point: `{ x: 0.92, y: 0.32 }`. The left 40% contains quiet water; real background surrounds the complete fish.

Cover fish is deliberately small for the supported hero layouts; gallery 02 supplies a large profile. Generated band shapes and fin rays are illustrative, not diagnostic counts. Gallery 03 places the lips at the water surface with eyes and gills submerged; the waterline and jet are simplified and do not measure refraction or shooting angles. Gallery 04 does not establish water speed, force or actual insect anatomy. Gallery 05 exaggerates jet visibility underwater and depicts an indistinct small prey item rather than a diagnostic insect larva. Gallery 06 is an animal-free habitat reconstruction, not a geolocated field record. Compression softens fine scales, fins and water detail. None of these images is field or laboratory photography.

## Hero acceptance

Runtime cover SHA-256: `5d5954eb1057b0c9aa59c1661f3291ee090b7765b1d8e7f55c754884cbc400ae`.

`npm run test:carousel` passed the full-subject case and the 24 CSS pixel gaps from viewport edges, hero copy and carousel panels. Static image inspection and crop geometry only; no browser was launched.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content evidence

Accessed 2026-09-07. [Eschmeyer's Catalog of Fishes](https://research.calacademy.org/research/ichthyology/catalog/SpeciesByFamily.asp) places Toxotidae under Carangiformes. The [FAO guide, pp. 3211–3215](https://www.fao.org/4/y0770e/y0770e41.pdf) supplies identification, habitat, range and total lengths; its historical Perciformes placement is not used for the current order. [FishBase](https://www.fishbase.se/summary/8229) corroborates the accepted binomial, freshwater entry, surface feeding and LC assessment dated 2011-09-16. A common length of 20cm and maximum 30cm are not an adult min/max interval. Global population trend remains unverified.

[Vailati et al. 2012](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047867) supports water accumulating at the jet tip; [Gerullis and Schuster 2014](https://pubmed.ncbi.nlm.nih.gov/25201684/) supports distance-dependent mouth-opening timing and focusing close to impact. [Timmermans 2001](https://www.sciencedirect.com/science/article/pii/S0376635701001723) discusses oblique shooting and refraction; its indexed abstract was available, full publisher access failed. The profile does not claim a proven neural algorithm or innate-versus-learned explanation. [Dewenter et al. 2017](https://journals.biologists.com/jeb/article/220/6/1019/18834/Archerfish-use-their-shooting-technique-to-produce) records initial underwater jetting observations in T. jaculatrix and T. chatareus; the main mouth-timing and substrate experiments used five further T. chatareus. The profile distinguishes those scopes. Conservation actions are habitat recommendations, not quantified species-specific threat findings. Reproduction, longevity and abundance are omitted without verified evidence.

## Compression and accepted hashes

TinyPNG compressed all final sources. No palette fallback. Runtime conversion uses the repository script with `cwebp -q 82 -m 6 -mt`.

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `95386676665755d2ceb4eb7b5aaf272f1f566b54068a28c36cf509da8033cd94` | `5d5954eb1057b0c9aa59c1661f3291ee090b7765b1d8e7f55c754884cbc400ae` |
| 02 | `df10b7a5d2ef01aa4f3b161121833982934c502d903317e017ee867cc4a27ae1` | `63c398ae60bda2072c8c74840fae67188323a22def6e63cace5851df6c6a93c3` |
| 03 | `dc7d0f0075156e17e2c63da5532c48eca9a8765844acb01f8e98cd44cd5a52ed` | `8d4280c088f4e85b1c70dec5730645a73476c477b63c0dba66b5d3653c0e3aa8` |
| 04 | `ec76a210142731d43efff9f74b430c400750e53fc5eb234461f92ab1f06afbd6` | `93d385c6b30fb10dbaa55c772cbd537c409313490b004e664f5b5da6f4a8aff9` |
| 05 | `6e74f623282c5951e607fadac9fb84a1d839e8acf73ec2692457d2d8ec9eef6c` | `d56b10b7596b0eb03b33b14ae4f56c5d28b2c15791edecfa71e13db26d85fa58` |
| 06 | `23ca2390e7888341547819d4502a26577d536d6bb06acaa8f09eeb63c803d4ba` | `23db215c36dd09b562ac9996b712fd35dff177ec682af051414961ceedce59e5` |

Final source total: 4480.1 KB. Runtime total: 1016.9 KB.

## Verification

`npm test` passed all 169 tests, including taxonomy/media integration, accepted source/runtime hashes and dimensions, the full-body hero case and HTTP image delivery below a deployment subpath. `npm run typecheck` passed. After clarifying the species scope of the underwater study, `npm run test:dist-subpath` rebuilt the final content and passed again. The production build refreshed tracked `dist/` assets and reported the existing large JavaScript chunk warning. `git diff --check` passed.
