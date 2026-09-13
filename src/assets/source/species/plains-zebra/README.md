# Plains Zebra image set

Six 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Sources live here; runtime WebPs live in `public/images/species/plains-zebra/`. No CLI fallback.

## Final prompts

[Prompt set](./prompts.json) contains six original generation prompts and the accepted cover edit. Gallery images use their original prompts. The first cover placed the animal too far left and low; the edit moved it right and up. The accepted position differs from the prompt's target, so acceptance uses the inspected pixel boundary below.

## Visual inspection and limitations

Inspected all six compressed source PNGs and all six runtime WebPs at original resolution. Cover full-subject boundary: `{ left: 1137, top: 329, right: 1233, bottom: 416 }`, including ears, muzzle, mane, legs, hooves and tail. Source dimensions: 1536 × 1024. Horizontal subject center: 77.1%. Focal point: `{ x: 0.92, y: 0.32 }`. Left 40% contains quiet grassland and sky, with real background around the complete subject.

The cover zebra is small to fit the supported hero layouts. Its distant far-side legs overlap and fine hoof detail softens after compression; gallery 02 provides a larger full-body view. Generated stripes are illustrative and cannot identify real individuals or determine a subspecies. Gallery 04 does not establish adult sex or family relationships from anatomy. Gallery 05 depicts a mother and foal conceptually, with some adult hindlimbs hidden behind the foal; it cannot establish age. Gallery 06 is an animal-free habitat reconstruction, not a geolocated photograph. None of these images is field or laboratory photography.

## Hero acceptance

`npm run test:carousel` passed the full-subject case with at least 24 CSS pixels of clearance from viewport edges, copy and carousel panels. Static image inspection and crop geometry only; no browser was launched.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content evidence

Accessed 2026-09-07. [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1006127/) supplies the accepted species, order, family, genus and country list; Somalia is marked uncertain and omitted. Its country list is a broad occurrence record, not a current abundance survey. The older Animal Diversity Web page under this binomial describes the extinct quagga and was not used as a living-species account.

[San Diego Zoo Wildlife Alliance](https://animals.sandiegozoo.org/animals/zebra) supports individual stripe identification, exterior traits, grazing and family groups. The page covers three zebra species, so Grevy's zebra size and social claims are not transferred to plains zebra. Unverified size, speed, longevity and reproductive timings are omitted.

[IUCN 2016 assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41013A45172424.en), read through the [author-hosted assessment PDF](https://www.researchgate.net/profile/Sarah_King6/publication/324115410_Equus_quagga_Plains_Zebra/links/5abead34a6fdcccda65a06cf/Equus-quagga-Plains-Zebra.pdf), supplies NT, decreasing trend and assessment date 2016-06-20, plus partial migration, hunting and fence pressures. The live IUCN page did not load; the profile explicitly dates the assessment and does not claim a 2026 census or verified newest assessment. Historical inferred mature-individual estimates are not included in current metrics.

[Caro et al. 2019](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210831) studied captive plains zebras, domestic horses and horses wearing different coats. The profile distinguishes approach from successful landing and describes reduced deceleration near zebra pelage. This does not establish a single exclusive evolutionary function of stripes.

## Compression and accepted hashes

TinyPNG compressed all six final sources; no palette fallback. Runtime conversion uses the repository script with `cwebp -q 82 -m 6 -mt`. Final source total: 4925.2 KB. Runtime total: 1021.3 KB.

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `015d93c81683b8d0c58df78a228eb1859cf5720f080b603079ecb30501c11937` | `78a91deecad8048f30422ca6d9ba1a223fabf45376226d48e335ea9a192445b3` |
| 02 | `99d3805c96d0b14cf885325f73c29045da4ec2013167eccd227b2ab8633c6d81` | `8ef92972b41d9fbabe14344b644f1f78c691f309044a06b7cb72d0eea964a8b6` |
| 03 | `418e39326d13d699da5e55bb3e870460806f497f8224e9c39a47abda9d175c58` | `140123c8ea8a3097b1dfd5f010fc3161ad6cc1e7ea59300f3b3805e97256d46d` |
| 04 | `1a90c2a562a719d86d601fcaf778cb5d2423bfd9b46db6014579a940010afbe4` | `ce83cd708d94cde1f506f76177e7c99f323addb2124e1d9beb1267635e2883c4` |
| 05 | `039e012e0444981ddac228a322cb7f5b4faa078406ebdee995a5cb5cec8a122c` | `85b87b293ec95061af9ed92e8e2693567282a74506571d0d14acd9eb0f06e01c` |
| 06 | `deaebe72518234d8fbfbb8ce0e7631e6da7d998ff8676ef3204b552a56518512` | `ee8fbfc87b20a79210d0894f4d286f9985cace3835f6ec726d5fb1c03698efce` |

Runtime cover SHA-256: `78a91deecad8048f30422ca6d9ba1a223fabf45376226d48e335ea9a192445b3`.

## Verification

`npm test` passed all 170 tests, including taxonomy/media integration, PNG and WebP dimensions and accepted hashes, full-subject hero geometry and subpath image delivery. `npm run typecheck` passed. The production build refreshed tracked `dist/` output and reported the existing large JavaScript chunk warning. `git diff --check` passed.

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-savanna-cover.webp` SHA-256: `6f7565fd98b7276869e6f245204f90d94ee27c299437a9449219d467431869be`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.92, "y": 0.32}`. Conservative full-subject boundary: `{"left": 699, "top": 92, "right": 1483, "bottom": 914}`, 784×822 source pixels (previously 96×87). Boundary center is 71.0% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both ears, mane, muzzle hairs, four hooves and entire tail tuft. Limb roots naturally overlap while all four hooves remain clear on earth. Real background remains around every visible extremity. The enlarged animal occupies the right side and the left 40% remains quiet defocused savanna. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 71.2×64.6 → 167.9×176.0 | 76.07 | 48.00 | 40.00 | Pass |
| 390×760 | 71.2×64.6 → 167.9×176.0 | 111.07 | 48.00 | 40.00 | Pass |
| 1366×768 | 85.4×77.4 → 408.2×428.0 | 96.00 | 127.05 | 48.00 | Pass |
| 1920×900 | 120.0×108.8 → 534.1×560.0 | 96.00 | 208.14 | 48.00 | Pass |
| 2560×900 | 160.0×145.0 → 534.1×560.0 | 96.00 | 374.54 | 48.00 | Pass |
| 3840×900 | 240.0×217.5 → 534.1×560.0 | 96.00 | 707.34 | 48.00 | Pass |

`npm run test:carousel`: all 67 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
