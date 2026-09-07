# Ramazzottius varieornatus image set

Six 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Source PNGs live here; runtime WebPs live in `public/images/species/ramazzottius-varieornatus/`. No CLI fallback.

## Final prompts

See [prompts.json](./prompts.json) and accepted [edits.json](./edits.json). The active-body image uses a correction adding the fourth, posterior pair of legs.

## Content evidence and scope

Sources accessed 2026-09-07:

- [NCBI taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=947166&lvl=0): Tardigrada → Eutardigrada → Parachela → Ramazzottiidae → Ramazzottius. The profile explains the older Hypsibiidae placement. Chinese names are catalogue display labels; water bear is a broader group name.
- [Horikawa et al. 2008](https://doi.org/10.1089/ast.2007.0139): accessible publisher abstract supports Chlorella vulgaris culture food, average egg hatching at 5.7 ± 1.1 days, first oviposition at day 9 after hatching, and anhydrobiosis in eggs, juveniles and adults. These are culture observations, not wild population metrics. No exposure-temperature record is presented without duration.
- [Hashimoto et al. 2016](https://www.nature.com/articles/ncomms12808): four leg pairs, reversible contracted anhydrobiosis, tolerance of rapid desiccation, candidate protection mechanisms, and Dsup experiments in human cultured cells. Cell results are not human clinical outcomes or a complete explanation of survival. No universal revival time or guaranteed recovery is claimed.
- [JAXA research presentation](https://jaxa.repo.nii.ac.jp/record/17667/files/SA6000008059.pdf): cultured material collected from mosses in Sapporo, Japan. Map and country list record this verified origin, not the full global range or endemism.

No verified global IUCN assessment was found. NE is provisional catalogue handling, without assessment year; population trend is unknown. Numeric body size, wild longevity and population fields remain empty. Habitat actions are recommendations, not measured species-specific threats.

## Visual limitations

All six images are AI scientific reconstructions. Cuticle color, mouth shape, claw branching and internal structures are simplified and cannot diagnose the species. The tun image exaggerates surface relief to explain contraction; rehydration is an illustrative posture, not a recorded time series. Algal cells are enlarged for visibility and do not establish a wild diet. Moss habitat is not a geolocated field photograph. The small cover animal accommodates hero copy and controls; the gallery provides close views.

## Cover review

Source and runtime cover inspected at original resolution. Source dimensions: 1536 × 1024. Visually measured complete animal boundary including visible claws: `{ left: 1188, top: 408, right: 1328, bottom: 467 }`. Horizontal center: 81.9%. Committed focal point: `{ x: 0.92, y: 0.32 }`. The left 40% is calm defocused olive background, with real background around the complete subject.

Runtime cover SHA-256: `a1ff461d20b6e49cbae3431cfd7d96c47289182a570648e5780c148f13d94aa9`.

Static geometry regression verifies at least 24 CSS pixels of clearance from viewport edges, hero copy and carousel panels. No browser launched.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Compression and accepted hashes

TinyPNG compressed all six sources successfully. Runtime conversion used `cwebp -q 82 -m 6 -mt` via the repository script. All six runtime images were inspected at original resolution. Compression softens microscopic details; none are diagnostic images.

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `ed7a4a409198df75c04758108ff1d63a50e9e8c94d59ae3577d9cd53b8a52369` | `a1ff461d20b6e49cbae3431cfd7d96c47289182a570648e5780c148f13d94aa9` |
| 02 | `12964845f2243d67251727f2db54d5e400e8b364345e70279fda26020f3dbca4` | `4648106ef964b94da49087880ee20fb62098da5b0b724d2535563878ea239e6d` |
| 03 | `f50a591f6825952e648e3685df4d70f868d80d849a19f93dc92c7c25f7ea2ffc` | `5b5fc1ffcbe21d6949752eff5f1103b6f6ba44b6570c3d07718c487bcef552ad` |
| 04 | `0180f83e819a3769daf5a354004f424ac503b9a96ae823de7f59241d2f439123` | `39a3e2c9f33311ba1d27998ab3df8eeddfc792a05cabb267a4ca9a433e39a7bd` |
| 05 | `09d7f186876379effba62b78e3a9052565207e4a33c47cb87a1a6fed398770cf` | `dc137fb81a3a5c9be0b7fc79ecbef734e760eb9a3806af44403f6ed909865ad3` |
| 06 | `37f5bdd5eb3950438fc7439eb804aebeb6049cc9d5615ce6c30242d4700bb857` | `613dc826d78f6eb30dcdd12414ab15052c4bbe9c2a6c59ce5fec9d8c1f49ac02` |

## Verification

`npm test` passed all 172 tests, including the first tardigrade taxonomy branch, six-image dimensions and accepted hashes, complete-subject hero geometry, and image delivery under a deployment subpath. `npm run typecheck` and `git diff --check` passed. Production build refreshed tracked `dist/` files; Vite retained its existing large JavaScript chunk warning.
