# Garden Snail image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-06. Source PNGs live here; runtime WebPs live in `public/images/species/garden-snail/`. These are AI scientific scene reconstructions, not field records.

## Generation prompts

### Initial cover (rejected: subject too far left)

```text
Use case: photorealistic-natural. Create a scientific natural-history environmental macro photograph, exact 1536x1024 landscape. ONE garden snail Cornu aspersum on a damp flat brown garden stone, diffuse morning light, subdued olive and brown background with soft moss at distant edges. Accurate globose low-spired brown shell mottled ochre with interrupted dark spiral bands, gray-brown pebbled soft body, two long upper eyestalks with dark tiny eyes at tips and two short lower feelers, broad foot and tapered tail, facing LEFT. CRITICAL hero layout: snail is VERY SMALL; the ENTIRE animal including all tentacles and tail must fit strictly within x=1210..1370 and y=330..415 pixels. Center at 84 percent canvas width and 36 percent height. Left 65 percent is quiet softly blurred stone and distant foliage for text. Camera pulled far back, no close-up crop. Keep real background around entire animal. Anatomical realism, no extra animals, no text, no border, no watermark, no collage.
```

### Final cover edit

```text
Edit this exact 1536x1024 photo. Move the one snail 330 pixels to the RIGHT and shrink it to 65 percent of its current linear size around its center. Final complete snail including all tentacles and tail should be within x=1210..1370 y=330..410. Keep its center at y=370. Rebuild wet stone where the old snail was. Keep the environmental photograph and accurate brown banded Cornu aspersum anatomy. ONE snail only. No text or other changes.
```

### 02-field-marks

```text
Use case: photorealistic-natural. Original scientific natural-history macro photograph, exact 1536x1024 landscape. Anatomically accurate Cornu aspersum garden snail: globose low-spired ochre and brown mottled shell with interrupted dark spiral bands, gray-brown pebbled soft body, TWO long upper tentacles with tiny eyes at their tips and TWO much shorter lower tentacles near mouth, one broad muscular foot, tapered tail. Natural restrained colors, soft diffuse light. No extra appendages, no text, watermark, collage or diagram. Close dorsal three-quarter side view of ONE entire snail crawling LEFT on a damp brown leaf. Snail occupies middle 65 percent width; head, all tentacle tips, shell and tail remain fully inside frame. Focus stack makes all four tentacles visible and distinct with background bokeh.
```

### 03-four-tentacles

```text
Use case: photorealistic-natural. Original scientific natural-history macro photograph, exact 1536x1024 landscape. Anatomically accurate Cornu aspersum garden snail: globose low-spired ochre and brown mottled shell with interrupted dark spiral bands, gray-brown pebbled soft body, TWO long upper tentacles with tiny eyes at their tips and TWO much shorter lower tentacles near mouth, one broad muscular foot, tapered tail. Natural restrained colors, soft diffuse light. No extra appendages, no text, watermark, collage or diagram. ONE snail crawling toward the camera at a three-quarter angle on a damp moss-edged stone. Head in sharp focus: exactly four tentacles, upper pair long with tiny dark eyes, lower pair short and near mouth. Entire shell and foot visible with 15 percent margins. Camera at snail eye level, botanical garden background blurred.
```

### 04-leaf-feeding

```text
Use case: photorealistic-natural. Original scientific natural-history macro photograph, exact 1536x1024 landscape. Anatomically accurate Cornu aspersum garden snail: globose low-spired ochre and brown mottled shell with interrupted dark spiral bands, gray-brown pebbled soft body, TWO long upper tentacles with tiny eyes at their tips and TWO much shorter lower tentacles near mouth, one broad muscular foot, tapered tail. Natural restrained colors, soft diffuse light. No extra appendages, no text, watermark, collage or diagram. ONE complete snail with mouth pressed against a ragged edge of a green garden leaf resting on moist soil. Side view facing left, show whole shell, eyestalks, lower tentacles partly occluded naturally by leaf, foot and tail inside frame, animal middle 60 percent of width. Small feeding notch in leaf. Do not show enlarged teeth or expose internal organs.
```

### 05-shell-retreat

```text
Use case: photorealistic-natural. Original scientific natural-history macro photograph, exact 1536x1024 landscape. Anatomically accurate Cornu aspersum garden snail: globose low-spired ochre and brown mottled shell with interrupted dark spiral bands, gray-brown pebbled soft body, TWO long upper tentacles with tiny eyes at their tips and TWO much shorter lower tentacles near mouth, one broad muscular foot, tapered tail. Natural restrained colors, soft diffuse light. No extra appendages, no text, watermark, collage or diagram. ONE snail resting attached to the shaded vertical side of a weathered garden rock under an overhanging leaf. Body and ALL tentacles fully withdrawn INSIDE its shell, only accurate brown mottled globose shell visible, opening facing stone so sealing membrane not visible. Quiet dry garden afternoon with soft shade. Shell fills center 35 percent frame, generous environmental space, no additional snails.
```

### 06-mucus-trail

```text
Use case: photorealistic-natural. Original scientific natural-history macro photograph, exact 1536x1024 landscape. Anatomically accurate Cornu aspersum garden snail: globose low-spired ochre and brown mottled shell with interrupted dark spiral bands, gray-brown pebbled soft body, TWO long upper tentacles with tiny eyes at their tips and TWO much shorter lower tentacles near mouth, one broad muscular foot, tapered tail. Natural restrained colors, soft diffuse light. No extra appendages, no text, watermark, collage or diagram. ONE complete snail walking RIGHT across a dark damp garden stone after rain; a thin irregular glistening mucus trail lies on stone behind its tail. Low side view, whole animal takes middle 50 percent width, tentacles inside frame. Tiny rain droplets on stone, natural overcast light and blurred leaves. Mucus trail is subtle translucent sheen not thick white rope, no motion blur.
```

## Cover review

Accepted output: `exec-4b9e1996-c3dc-484c-93e3-80846aba74f8.png`. Actual placement differs from the prompt; the measured boundary controls acceptance.

- Source and runtime: 1536 × 1024, opaque sRGB.
- Visually measured full-subject boundary, with conservative padding: left 1145, top 328, right 1295, bottom 405 pixels. Includes visible tentacle tips, shell, foot and tail.
- Subject center: 79.4% of source width. Left 40% contains quiet blurred stone.
- Committed focal point: `{ x: 0.88, y: 0.34 }`.
- Original-resolution review: generated source, TinyPNG-compressed source and runtime WebP inspected. The cover keeps the snail small; gallery 02 and 03 provide close views. Fine tentacle details cannot establish species identity in the cover. No visible text or watermark.

## Hero acceptance

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

`npm run test:carousel` passed the full-subject case for all 36 states, including at least 24 CSS pixels of separation from viewport edges and the copy/carousel panel rectangles. No GUI or headless browser was used.

## Compression and gallery inspection

All six sources passed TinyPNG after retrying with network permission, then converted with `cwebp -q 82 -m 6 -mt`. Sources total 4731.6 KiB; runtime WebPs total 964.5 KiB. No fallback compressor used. Generated gallery images and final runtime WebPs were inspected at original resolution. Gallery 02 and 03 show two long and two short tentacles; 04 has a foreshortened upper tentacle, 05 hides the soft body and shell opening, and 06 occludes the far lower tentacle. The radula, sealing membrane, locomotor waves and chemical composition of mucus are not visible. Captions preserve these limits.

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `828457e4914cadcbfb3836d7de1759e5d9a2065f629fccb901842404637dd66e` | `4d48d10fcdba93fa165dd86a1e51185c78b05a59d4bad8668c8e42375705012c` |
| 02 | `562ca772e996993e94e9d3fa19831472880dc585f638bc79f10b4206cc7e37bd` | `2aa5ad1fb5a8921b094d4caa66c4f07d3fcb3a601333415ae8d2b065366dd9b3` |
| 03 | `8a15fea73fe1b5ae7cb32211ef837dbd7087c1c362129a54c9c9becbe5ce2dd6` | `194f9a950c19912057f4a7a47365dd2bf386644483bde4728ad55a1ae939c048` |
| 04 | `3f0d20db79d58f8c9c3830c11b8fa87003efd27f4929dbecab96ff44441f124b` | `abf36949d2e268be25dbcc7245b9fd0050fe2b43e7cf0dcdb8c4b3656f5fd117` |
| 05 | `e245c27472b5bb2ba1d5f4ec53e1abe80e2d222285f2cebcacd3665ba66b586b` | `9b138a3517555ebb6efdf6b9bcfaba56d8f6521d3736ac3f525f1876dbca0b3d` |
| 06 | `1a87203416807436d21bfbeabd818da9010ff2d0f52e0d2d71d1af71a3a0f05f` | `70cb334494b83e679621495cbcd58b796d43837a2fada16d220e7fc504761b4b` |

Verification: all 158 repository tests passed, including the subpath HTTP test rerun with local-listener permission after sandbox `listen EPERM`. Type checking and the production build passed. Vite still reports the existing large JavaScript chunk warning. The tracked `dist/` output includes this species and its six runtime assets.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-garden-stone-cover.webp` SHA-256: `4d48d10fcdba93fa165dd86a1e51185c78b05a59d4bad8668c8e42375705012c`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.88, "y": 0.34}`. Conservative full-subject boundary: `{"left": 614, "top": 274, "right": 1464, "bottom": 706}`, 850×432 source pixels (previously 150×77). Boundary center is 67.6% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both upper eyestalk tips, both short lower feelers, the entire shell edge, muscular foot and tapered rear tip. All four tentacles are distinct. The leftmost eyestalk tip sits at approximately 40% of source width; left field contains stone and softly blurred garden plants without another animal. Real background margins surround all visible extremities. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 111.3×57.1 → 272.0×138.2 | 24.00 | 66.88 | 58.88 | Pass |
| 390×760 | 111.3×57.1 → 342.0×173.8 | 24.00 | 49.09 | 41.09 | Pass |
| 1366×768 | 133.4×68.5 → 559.7×284.4 | 72.00 | 51.32 | 119.78 | Pass |
| 1920×900 | 187.5×96.2 → 825.6×419.6 | 72.00 | 62.40 | 118.20 | Pass |
| 2560×900 | 250.0×128.3 → 1101.9×560.0 | 87.47 | 90.67 | 48.00 | Pass |
| 3840×900 | 375.0×192.5 → 1101.9×560.0 | 96.00 | 423.47 | 48.00 | Pass |

`npm run test:carousel`: all 75 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
