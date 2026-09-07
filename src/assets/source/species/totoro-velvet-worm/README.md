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
| 01 | `3cce6ae18901fa9741b1224a2c873f83204c2bd3b0dbc95ac612d724792c1082` | `9601f3a4a024a3eb67d6f2b80994426012a50951cf2cc0f32b5a486a000fed25` |
| 02 | `b4e32204e0efad01274730e110a7e20c2e03450399b856380765198b9298d7d2` | `0577c5a51db7fc316fb7caf25b4ac0c4d674539d946b1f25c92940b83fc44b36` |
| 03 | `b671cf9d8c19ca5d0dc679347df194296ee398770edd3039ae6d25e3a9f42f2e` | `5f1d3a12a0afab74c5b9068f96d231039cde0f2adc380a26aa4c543e6436c9d7` |
| 04 | `518962079c9704539201e413a39b59f55294aa5776c2f744670cababc8ae8310` | `fa2b22948993c537a21ebbc95485f8a15baf83dc4bfa647f33a237a8bf149ed7` |
| 05 | `5a8319b1b3e93411cb608cc967503948454abc4785699bb747dac748e98e0208` | `98057101743af8b0cc25ffe5e1deb4fda814546d8e7c7a42b5a777984fd2262c` |
| 06 | `bba93108d2126e12d9663c6ceaba1c4271eeee84a82fcc8bdb5f9542ce897bf8` | `cd35af1a46fdde859d0996b228f86fad1f0db34a904355aa4479f53538dd2dbf` |

## Verification

`npm test` passed all 171 tests, including the new phylum integration, six-image dimensions and accepted hashes, hero safe areas and HTTP delivery below a deployment subpath. `npm run typecheck` and `git diff --check` passed. The production build refreshed tracked `dist/` files and retained the existing large JavaScript chunk warning.
