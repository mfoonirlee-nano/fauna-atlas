# Electric Eel image set

Six 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Sources live in this directory; runtime WebPs live in `public/images/species/electric-eel/`.

## Prompts

[Six original prompts](./prompts.json), [body proportion correction](./body-edit.txt), and [cover position correction](./cover-edit.txt). No CLI fallback. The body edit narrowed the overly deep initial profile. The cover edit moved the animal farther right than requested; acceptance uses its measured position.

## Original-resolution visual review

Inspected all six final compressed source PNGs and all six runtime WebPs at original resolution. The complete cover boundary is `{ left: 1218, top: 323, right: 1412, bottom: 395 }`, including snout, visible fins and curled tail tip. Horizontal center: 85.6% of source width. Committed focal point: `{ x: 0.97, y: 0.38 }`. The left 40% contains quiet river water, with real water around the complete subject.

The cover animal is small, with a foreshortened curled tail and limited contrast. Gallery 02 provides a slender side profile. All skin patterns, head shapes and fin rays are illustrative and cannot diagnose the three Electrophorus species. Gallery 03 intentionally crops the body to show the long anal fin. Gallery 04 crops the posterior body and shows the mouth at the water surface, without demonstrating internal gas exchange. Gallery 05 shows an eel approaching a small fish; the tail is broad in perspective, and neither a discharge nor prey immobilization can be inferred from the still image. Gallery 06 is an animal-free habitat reconstruction, not a geolocated photograph. Compression leaves fine palette grain and some softened edge detail. None is a field photograph or an anatomical measurement.

## Compression

All accepted PNGs were compressed with TinyPNG; no fallback. Final source total: 4163.9 KB. The repository conversion script used `cwebp -q 82 -m 6 -mt`, producing 1043.7 KB of runtime WebPs. Both edited images were compressed again before conversion.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `6b762f09b7137c33f46bd47d654248a5fb0bb22770d42a13124ec53295cbf043` | `314edef747eac64bbe6e30b2d7b7cac202aa8f0c44382f8fe3eea99cda12d766` |
| 02 | `62153f77baba796baa97bef6f8fbc7595e5590b2dc6bc7e90bbd44ad4fd4fca7` | `8d0309621bc803a60979d99927cb6b6711338cde648737086b6979cea88b74c2` |
| 03 | `0307178c167d82f857a87d72e1213ab72ebd40d4ed978aef7caa5bda3619668d` | `f540bd0e61d8280d4c1d1e9dbd8106eaacf335b61a44507ae05421b8a8f7f84d` |
| 04 | `c171d7f81930b9e35caf799dfd5318987b3deeb6192e336f9f4e9582b603c59c` | `97c2002f881fbbca4663af087d5e563d33404d64de8bd17e9c9f090c03e03562` |
| 05 | `9e632d69b5069740ccf7ff23552244851e2c90a2787a6b98256d7349c034c158` | `f7be011702d1672048e06d1f39d52e940584e381f3885c1b03585954a305ec3e` |
| 06 | `4471bfc6b202903c5ea3d38055dc9758d121bcbba8be2642b92797a2b6125082` | `fdfb9a3d792482910001bafff146a1ed7b1f61f40abbd4a7049de2d83c779fbb` |

## Hero acceptance

`npm run test:carousel` passes. The case binds the reviewed runtime cover hash to the complete subject boundary above. The animal clears viewport edges, hero copy and the carousel panel by at least 24 CSS pixels at each endpoint. Verification used static inspection and geometry; no GUI or headless browser.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content sources and decisions

Accessed 2026-09-07. [de Santana et al. 2019](https://www.nature.com/articles/s41467-019-11690-z) establishes the three-species treatment, Guiana Shield distribution, and the 480 V measurement from one 760 mm E. electricus. The 100 cm length field is explicitly the largest specimen examined in that revision, not a species maximum. The 860 V record belongs to E. voltai. We omit broad pre-revision length extremes and group-hunting accounts of E. voltai.

[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/electric-eel) supports external form, anal-fin movement, air breathing and the general roles of electrical organs. Its broad historical range is not reused. [Smithsonian's revision announcement](https://www.si.edu/es/newsdesk/releases/smithsonian-scientists-triple-number-known-electric-eel-species) corroborates the narrower range.

[FishBase](https://fishbase.org/summary/SpeciesSummary.php?genusname=Electrophorus&speciesname=electricus) search-index text lists Gymnotiformes / Gymnotidae / Electrophorus and LC, assessed 12 August 2020, under IUCN version 2025-2. Direct page fetch failed; the indexed field-guide and country-summary records agree. Global population trend remains unknown. Habitat pressures are framed as potential monitoring concerns, without inventing a species-specific decline or threat severity.

## Verification

`npm test` passed all 167 tests, including taxonomy integration, six-image dimensions and hashes, hero geometry, and HTTP image delivery under a deployment subpath. `npm run typecheck` and the production build passed. The build refreshed tracked `dist/` output and retained the existing large JavaScript chunk warning. `git diff --check` passed.
