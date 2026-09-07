# Southern Darwin’s Frog image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-07. Sources live in this directory; runtime WebPs live in `public/images/species/darwins-frog/`. All images are AI scientific scene reconstructions.

## Prompts

[Complete generation and edit prompts](./prompts.json). Six generation calls and four cover edits; no CLI fallback. The cover edits moved and reduced the frog to clear the hero copy and carousel controls. Only accepted images are retained in the repository.

## Visual review

Inspected all generated gallery images, the final compressed source cover PNG, and all six runtime WebPs at original resolution. No GUI or headless browser was used.

The padded full-subject boundary is `{ left: 1165, top: 300, right: 1350, bottom: 400 }` in the 1536 × 1024 source. It includes the pointed snout, body, visible limbs and toe tips. The horizontal center lies at 81.9% of the source width. The left 40% contains subdued forest background. Committed focal point: `{ x: 0.9, y: 0.38 }`.

The small cover frog limits identification detail; gallery 02 supplies a closer body view. Generated toes, skin texture and proportions are illustrative. Gallery 03 stages an adult beside eggs on damp leaf litter; egg size, number, arrangement and developmental stage are not measurements of a real clutch. Gallery 04 depicts an opaque rounded throat, not internal anatomy or proof of brooding. Gallery 05 depicts a froglet without a scale bar. Gallery 06 is a generalized habitat scene, not a geolocated photograph. These images do not document a real reproductive event or establish the sex of a photographed animal.

## Compression

All six final source PNGs passed TinyPNG. Runtime conversion used `npm run convert:webp` with `cwebp -q 82 -m 6 -mt`. No palette fallback was needed.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `a110b9fb402736cd1ef9c43bb867a50d08ef76962b0af72d9208f99b95bd51e3` | `7447ef467e913e22fc80b712b0bdcb3923ede4b8881dcae7d126611460553123` |
| 02 | `208ba7df5fb26309d962572c6a57965f895c88b72dbfcd0cf12f4061bea996de` | `1c6aa36553fd1ad05999f617a8c2201d7d40d2f4e8ee4f6237020f2282ab95cb` |
| 03 | `eab54e0cdd1c2f063bd5a4176732378d2a9f8e29abfbe2b4ef39f42f074d5e20` | `d588dfc7e071f9a2c400e760e3e4126ee1b8c5ddb4b48960402abc79b59a8339` |
| 04 | `1a1f24f0e43fd9cb26dd730dc751a3758c5abf39372223b913fd27bb3e7800b6` | `2f08a1ea2641844facba02f3618d823701bf4ad970d4e4dbb06d4dfc1b2436da` |
| 05 | `be5cb8d78ba9dd033a8c78ab4c2c3f9275bb94ffe4a1c98482c54b5f33c26b70` | `2fc8349774d9f8cb6f7d4b1310a7380de1fceba98bb609a7102e280c2a467459` |
| 06 | `3ac1a71ba3840cd2b37fb5d8c3c1bc09f7ee2c4f8a4c8d424a17c8742cd232d8` | `a463113a934866657a7f224842c475dbdbc7b18896258a24d4c5832681003369` |

## Hero acceptance

The cover hash above binds the visually measured full-subject boundary to the tested runtime image in `tests/hero-carousel.test.mjs`. Every viewport and animation endpoint passes the 24 CSS pixel clearance checks against the viewport, hero copy and carousel panel. The source and runtime inspections confirm the quiet copy area and complete subject.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content provenance

The profile records source URLs and access dates. AMNH supports the current family Rhinodermatidae, genus Rhinoderma and Chile–Argentina range; its account keeps R. darwinii and R. rufum separate pending further evidence. Animal Diversity Web supports body length, coloration, diet, terrestrial eggs and metamorphosis in the male vocal sac; its old family and VU status are not adopted. London Zoo supports vocal-sac brooding through the froglet stage. IUCN’s conservation action-plan article confirms EN, and the Oryx action plan documents habitat decline and fragmentation. ZSL’s 2026 research update supports declining populations, terrestrial disease transmission and conservation breeding. Local outbreak losses are not presented as a global population estimate. The individual Red List assessment date was not verified, so assessedYear remains absent rather than using an article publication year. Brooding duration is presented as about six to eight weeks, reflecting the consulted accounts rather than a fixed deadline.

## Verification

`npm test` passed all 164 tests, including taxonomy and media integration, hero clearance and HTTP asset checks under a deployment subpath. `npm run typecheck` and the production build passed. The build refreshed tracked `dist/` output and retained the existing JavaScript chunk-size warning. `git diff --check` passed.
