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
| 01 | `8856441b3d0f2eabe0df63d3e36c33ae654b9e12581037f651697b75c18da7e1` | `3c7f57f7a04e816f2f813e19b186559069fd490e7ced0a07f134e1c1c9423051` |
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

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-forest-cover.webp` SHA-256: `3c7f57f7a04e816f2f813e19b186559069fd490e7ced0a07f134e1c1c9423051`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.9, "y": 0.38}`. Conservative full-subject boundary: `{"left": 692, "top": 264, "right": 1432, "bottom": 826}`, 740×562 source pixels (previously 185×100). Boundary center is 69.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the short pointed snout, body edge, visible limbs and toe tips. The initial candidate had an incorrect hornlike eye projection; the accepted edit removes it and shortens the snout. Far limbs overlap naturally; fine toe counts and diagnostic body measurements are not asserted. Real leaf background surrounds all visible extremities. The left 40% contains softly blurred dark leaf litter. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 137.3×74.2 → 231.7×176.0 | 44.13 | 48.00 | 40.00 | Pass |
| 390×760 | 137.3×74.2 → 231.7×176.0 | 79.13 | 48.00 | 40.00 | Pass |
| 1366×768 | 164.5×88.9 → 559.7×425.1 | 72.00 | 51.32 | 49.47 | Pass |
| 1920×900 | 231.2×125.0 → 737.4×560.0 | 96.00 | 106.52 | 48.00 | Pass |
| 2560×900 | 308.3×166.7 → 737.4×560.0 | 96.00 | 272.92 | 48.00 | Pass |
| 3840×900 | 462.5×250.0 → 737.4×560.0 | 96.00 | 605.72 | 48.00 | Pass |

`npm run test:carousel`: all 80 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
