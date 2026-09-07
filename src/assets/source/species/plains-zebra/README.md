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
