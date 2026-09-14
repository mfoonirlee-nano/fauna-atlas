# Totoro Velvet Worm image set

Six 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Sources are in this directory; runtime files are in `public/images/species/totoro-velvet-worm/`.

## Final prompts

[Generation prompts](./prompts.json) and [accepted cover and head edits](./edits.json). Cover 01 uses the smaller, repositioned animal edit. Head 03 uses the two-claw correction. Other images use their original generations. No CLI fallback.

## Cover review

All six compressed sources and all six runtime WebPs inspected at original resolution. Source dimensions: 1536 × 1024. Complete visible subject boundary, including antennae, feet and rear end: `{ left: 1134, top: 375, right: 1284, bottom: 413 }`. Horizontal center: 78.7%. Committed focal point: `{ x: 0.92, y: 0.32 }`. The left 40% is dark defocused forest litter, with real background surrounding the animal.

Runtime cover SHA-256: `9601f3a4a024a3eb67d6f2b80994426012a50951cf2cc0f32b5a486a000fed25`.

The full-subject regression checks 24 CSS pixel clearance from viewport edges, hero copy and carousel panels across the six animation endpoints below. Static geometry and image inspection only; no browser launched.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Visual limitations

The cover animal is small to accommodate hero layouts; gallery 02 provides a close view. Generated leg counts, surface papillae, ventral markings and sensory structures are illustrative, not species diagnoses. Head 03 was corrected from multiple toe-like claws to paired claws. Gallery 04 illustrates onychophoran adhesive hunting, not a documented E. totoro encounter: thread geometry is simplified and the insect does not establish a wild prey record. Gallery 05 illustrates soft feet and claws, not diagnostic foot-pad anatomy. Habitat 06 is not a geolocated field photograph. Compression softens fine skin and claw detail. All images are AI reconstructions.

## Content evidence and scope

Sources accessed 2026-09-07:

- [Oliveira et al. 2013](https://doi.org/10.1016/j.jcz.2013.01.001): original species description. Indexed publisher abstract and section snippets support Cát Tiên National Park, Dong Nai, Vietnam, specimens under stones, formal description date, and use of microscopic morphological and molecular comparisons. Full PDF extraction was unavailable in this environment; no unverified length, sex-specific leg count or reproductive metrics enter the profile.
- [ITIS species record](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=1184699): valid name, Peripatidae and Eoperipatus. ITIS omits class/order for this group.
- [NCBI species lineage](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?lvl=0&name=Eoperipatus+totoro), [Udeonychophora class](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=2082881&mode=Info), and [Euonychophora order](https://www.ncbi.nlm.nih.gov/datasets/taxonomy/2082882/): explicit six-rank catalogue path. Chinese higher-rank labels are display translations; the scientific names identify the adopted NCBI scope. The profile explains the difference from ITIS rather than treating omitted ranks as disputed species identity.
- [Concha et al. 2015](https://www.nature.com/articles/ncomms7292): adhesive prey capture and fluid–elastic oscillation experiments on other velvet worms, including Peripatus solorzanoi. The profile does not transfer jet speed, duration or frequency to E. totoro, or mistake jet speed for animal movement.

No verified global IUCN assessment was located. NE is a provisional catalogue value with an explicit evidence note, no assessment year and unknown trend. Population, longevity, reproductive biology and numeric body-size fields remain empty. Habitat actions are recommendations, not quantified species-specific threat findings. Known locality is not asserted to delimit the entire range.

## Compression and accepted hashes

TinyPNG compressed all six PNGs successfully; no fallback. Runtime conversion used the repository script with `cwebp -q 82 -m 6 -mt`. Source total: 5577.0 KB; runtime total: 1288.8 KB.

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `98020ca768b0c42e6e913f46cc7f0ba7386ef0023d51eb5a54f560de4d6ffff4` | `7f9abe29d73d61a4e828244deca1114e7be3c09cb89eeab1763d28b4a7cd8905` |
| 02 | `b4e32204e0efad01274730e110a7e20c2e03450399b856380765198b9298d7d2` | `0577c5a51db7fc316fb7caf25b4ac0c4d674539d946b1f25c92940b83fc44b36` |
| 03 | `b671cf9d8c19ca5d0dc679347df194296ee398770edd3039ae6d25e3a9f42f2e` | `5f1d3a12a0afab74c5b9068f96d231039cde0f2adc380a26aa4c543e6436c9d7` |
| 04 | `518962079c9704539201e413a39b59f55294aa5776c2f744670cababc8ae8310` | `fa2b22948993c537a21ebbc95485f8a15baf83dc4bfa647f33a237a8bf149ed7` |
| 05 | `5a8319b1b3e93411cb608cc967503948454abc4785699bb747dac748e98e0208` | `98057101743af8b0cc25ffe5e1deb4fda814546d8e7c7a42b5a777984fd2262c` |
| 06 | `bba93108d2126e12d9663c6ceaba1c4271eeee84a82fcc8bdb5f9542ce897bf8` | `cd35af1a46fdde859d0996b228f86fad1f0db34a904355aa4479f53538dd2dbf` |

## Verification

`npm test` passed all 171 tests, including the new phylum integration, six-image dimensions and accepted hashes, hero safe areas and HTTP delivery below a deployment subpath. `npm run typecheck` and `git diff --check` passed. The production build refreshed tracked `dist/` files and retained the existing large JavaScript chunk warning.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-forest-cover.webp` SHA-256: `7f9abe29d73d61a4e828244deca1114e7be3c09cb89eeab1763d28b4a7cd8905`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.92, "y": 0.32}`. Conservative full-subject boundary: `{"left": 644, "top": 248, "right": 1458, "bottom": 728}`, 814×480 source pixels (previously 150×38). Boundary center is 68.4% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both ringed antennae, shorter oral papillae, body edge, rear end and visible paired-claw feet. Far-side feet partly overlap; the image does not establish an exact bilateral leg count or species diagnosis. The accepted edit corrects initial antenna intrusion and rear-edge proximity. Real bark background surrounds all extremities. Left 40% contains defocused dark leaf litter. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 111.3×28.2 → 272.0×160.4 | 24.00 | 55.80 | 47.80 | Pass |
| 390×760 | 111.3×28.2 → 298.5×176.0 | 45.77 | 48.00 | 40.00 | Pass |
| 1366×768 | 133.4×33.8 → 559.7×330.0 | 72.00 | 51.32 | 96.98 | Pass |
| 1920×900 | 187.5×47.5 → 825.6×486.8 | 72.00 | 62.40 | 84.58 | Pass |
| 2560×900 | 250.0×63.3 → 949.7×560.0 | 96.00 | 166.77 | 48.00 | Pass |
| 3840×900 | 375.0×95.0 → 949.7×560.0 | 96.00 | 499.57 | 48.00 | Pass |

`npm run test:carousel`: all 85 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
