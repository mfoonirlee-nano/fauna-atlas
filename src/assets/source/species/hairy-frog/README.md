# Hairy Frog image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-07. These are AI scientific scene reconstructions, not field photographs. Runtime assets are in `public/images/species/hairy-frog/`.

## Prompts and edits

[Complete prompts](./prompts.json) include six generation prompts and two edits. No CLI fallback was used. The cover edit moved the complete frog across the rock to meet hero clearance. Gallery 05 received an anatomical correction removing filaments from the foreleg.

## Visual review

Original-resolution inspection covered all generated scenes, the final compressed cover PNG, and all six runtime WebPs. The cover shows a complete crouched frog on a wet rock with a contact shadow. Its padded full-subject boundary is `{ left: 1122, top: 322, right: 1284, bottom: 410 }` in the 1536 × 1024 source, including visible toes and all limb tips. The horizontal center is 78.3% of source width. The left 40% contains quiet forest and stream background. Focal point: `{ x: 0.86, y: 0.34 }`.

The first cover failed desktop copy clearance at 1366 × 768 during a leave endpoint. The final edited cover passes the complete-subject test. The frog remains deliberately small for responsive hero crops; its papillae are not resolved well enough to establish sex or species identity. Gallery 02 shows the male body and flank projections; 03 depicts a female without those projections. Gallery 04 is habitat only. Gallery 05 intentionally crops the animal to show the flank; the projections look thicker than in gallery 02 and are an external reconstruction, not a histological plate. Gallery 06 has short, simplified flank projections. None of the images documents bone-claw deployment, vascular anatomy, respiration, egg guarding, activity frequency, or an exact field location.

## Compression

All six accepted sources passed TinyPNG. Gallery 02 needed one retry after a TLS connection failure. No palette fallback was used. Runtime conversion used `cwebp -q 82 -m 6 -mt` through the repository script.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1cf93b890542b548c891dbcc474903a5179c16bd483aabd5ae7250a522ffd7c5` | `7f04b42b9b71f451a01a3a296558230dbc7092b8a381545c6ccb1490389c0dd4` |
| 02 | `5627119bd9d9e811f533aefb8af9f6911a4ebefda53b03058a0b99d652551fc1` | `302d8d45caf6fd469d846135cc57fca0e1d7394dbaf0678b04e9d103e316debd` |
| 03 | `85c2bd3cbe50ca495c88f7733902e13a53c0e20c2e9b90cdcbb7dbd1ec1b7ecf` | `40021bcae69169001ab4706a7d1c1de18989f7c140264f6bc5e1f8848b5460e1` |
| 04 | `478a925fa8b5fecd8619b4fdc8775fb47fa071caf50937730dca01775c419287` | `0f398b69d28275f43a84991100fc413189d0a4e81075a967dca092a5ab74d05b` |
| 05 | `6c221c9e999f862de56ee53d67704a78cbcf4685b0d4bc6e66261d5bc2832e11` | `48a731f863d9b2d07a3cf7f8a9a829681c91f71e392e3168f54fac7f6b673469` |
| 06 | `4d200c945f9d06dffe8f08b5a1a09eba2d1eed2984554d1eb60ef9f571131bb5` | `93ce5a90a3c7d9279e1e0046b39e86fd0c84b6d9977c267453ab40219d23a1d7` |

## Hero acceptance

The cover runtime hash is the 01 runtime SHA-256 above. `tests/hero-carousel.test.mjs` binds that hash to the visually reviewed complete-subject boundary, checks viewport clearance of at least 24 CSS pixels, and checks the copy and carousel panel rectangles with the same gap.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

No GUI or headless browser was used.

## Content provenance

The profile follows AMNH Amphibian Species of the World for `Astylosternus robustus`, retaining `Trichobatrachus robustus` as a searchable alias. The genus display uses its scientific name because a Chinese genus name was not verified. The 2008 Blackburn et al. paper supports the bone-claw account; the text distinguishes release from the distal bony nodule from fracturing the entire phalanx. ZSL supports the breeding-male papillae and egg attendance account, with oxygen uptake stated as a hypothesis. IUCN's regional situation analysis lists LC and food use; the independent assessment date and global trend were not verified. Wikipedia supplies supplementary diet and life-history information. Each source URL and access date appears in the profile.

## Verification

`npm test` passed all 162 tests, including the new accepted-genus/alias/media integration case and all hero states. The test command also completed TypeScript checking, a production build and HTTP image checks below a deployment subpath. The build refreshed tracked `dist/` assets. Vite reported the existing JavaScript chunk-size warning. Static inspection confirmed six 1536 × 1024 source PNGs and matching runtime WebPs. `git diff --check` passed.
