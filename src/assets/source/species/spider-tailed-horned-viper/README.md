# Spider-tailed Horned Viper image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-07. These are AI scientific scene reconstructions, not field records. Runtime assets live in `public/images/species/spider-tailed-horned-viper/`.

## Prompts

The complete generation and edit prompts are in [prompts.json](./prompts.json). The accepted cover uses gallery 04 as an anatomical reference. Earlier cover attempts were rejected for excess size, extra head-like anatomy, misplaced subject or floating appearance. Gallery 02 received a tail and horn correction using gallery 03 as reference. No CLI fallback was used.

## Visual review

The accepted cover has one complete coiled snake resting on limestone with a contact shadow. Full-subject boundary with padding: left 1035, top 330, right 1238, bottom 445 source pixels, including head, horns, coils and terminal lure. Center is 74.0% of source width; the left 40% is quiet rock texture. Source dimensions: 1536 × 1024. Committed focal point: `{ x: 0.8, y: 0.38 }`.

The cover keeps the snake small to accommodate the hero crops. Its fine tail scales cannot establish species identity. Gallery 02 shows the complete body; 03 intentionally crops to the attached tail, with a bulb and elongated scales. Gallery 04 shows a rock fissure; 05 shows a static tail-forward posture. In 05 and 06, the generated tail fringe looks more brushlike than a measured anatomical plate, so captions state the simplification. Gallery 06 contains a snake although its prompt requested an empty habitat; its caption describes the actual result. None of these still images demonstrates tail motion, bird attraction, hunting success, scale counts or a specific location.

## Compression

All six sources passed TinyPNG, reducing 18539.0 KiB to 7263.8 KiB. Runtime conversion uses the repository script with `cwebp -q 82 -m 6 -mt`. No compression fallback used.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `8e4b4c68bb1849d1799347987f27f0f9d99f6f4e9061d43a276b6d00f3de5578` | `ef6fde6b403090d9e6ed5a305f840a88b36a96618043923dd19b9ba51d2be0d1` |
| 02 | `6f1d4f331644542e1a9710c8c754449f35652b8f35e55d43b91cbf30f9925941` | `338a616cc2198bffd5ba482c464620363580cc4fc56e40cbf21080f5bce21842` |
| 03 | `c89e3c9cc6e3b1ac9dec24a6654c63b984c4480ba0c3f76d21a3f0adceb0c7f1` | `54c5b300997ee14a2a26e05fc9fab2d04137ba8026eed9404b0d189ec44a8e2b` |
| 04 | `86724313dda0c2dd331955a7014b9c6f4656c2dc8595405a6313468283b665bb` | `5c87ba4348127668be6c55f3ea623289c69bd026a7781b63e8789dc215043b32` |
| 05 | `d999eb836fa67a6106636e055a97ba5bd49f70aa160a6b51f9fef5d39a241cf7` | `2343c455cddfce5b509c896db3144825c7e950b294c1397679cfca24f7396480` |
| 06 | `46aeb30ccaf3d3c6c9980c7ff01433e2c629795c4f3547afc171f54844d5763e` | `1516eea957185980b1dcb575fa2d62ca88d286a421b73c32c0a07704f1d837a9` |

## Hero acceptance

Original-resolution inspection covered the generated source images, the compressed cover PNG, and all six runtime WebPs. The cover boundary includes the entire visible subject, not only its head. The runtime cover SHA-256 is the 01 runtime hash in the accepted table above.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

`npm run test:carousel` verifies all 36 states against the reviewed complete-subject boundary and runtime hash, with at least 24 CSS pixels of clearance from viewport edges and the copy/carousel panel rectangles. The original y=0.34 focal point failed the 3840 × 900 panel clearance; y=0.38 passes. No GUI or headless browser was used.

## Verification

All 161 repository tests passed through `npm test`, including taxonomy/media integrity, complete-subject hero clearance and HTTP asset loading below a subpath. Type checking and the production build passed. The tracked `dist/` now includes the profile and six WebPs. Vite reports the existing JavaScript chunk-size warning. `git diff --check` passed.
