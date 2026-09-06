# Common Raccoon image set

Six original 1536 × 1024 PNGs generated with the built-in imagegen tool on 2026-09-06. Runtime images live in `public/images/species/common-raccoon/`. All depict AI scientific scene reconstructions, not field records.

## Cover review

The initial cover was rejected because the animal sat too low for mobile copy. The accepted edit, compressed source and runtime WebP were inspected at original resolution.

- Source and runtime dimensions: 1536 × 1024.
- Visually measured complete subject boundary: left 1060, top 315, right 1225, bottom 414 source pixels; includes muzzle, ears, visible feet and full tail.
- Subject center: 74.4% of source width; left 40% contains quiet water and soft woodland.
- Committed focal point: `{ x: 0.85, y: 0.34 }`.
- Runtime cover SHA-256: `fe4efd53e9041d14197d8af9c5c8e75bbacc177b26b53b1c5ad4bee529424281`.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

All 36 states preserve at least 24 CSS pixels to viewport edges and the copy/carousel rectangles. The full-subject case in `tests/hero-carousel.test.mjs` uses runtime dimensions, object-fit cover, the saved focal point and CSS animation endpoints. `npm run test:carousel` passed. No browser was launched.

Known cover limitation: the environmental composition makes the animal small in the detail view; gallery 02 provides a larger morphology portrait. Fur and far-side toes overlap, so the picture cannot establish a visible digit count, sex or age.


## Gallery prompts

### 02-field-marks

```text
Create an original photorealistic natural-history wildlife photograph, exact 1536x1024 horizontal, opaque sRGB. Species: common raccoon Procyon lotor, accurate stocky proportions, black eye mask edged pale, small rounded ears, gray-brown fur, five long digits on each paw, bushy dark-ringed tail. Soft natural light, restrained colors and credible forest habitat. No text, watermark, logo, ruler, collage, zoo, pet collar, cartoon, extra limbs or raccoon dog. One adult raccoon in full body side view walking left on woodland leaf litter; black eye mask bordered pale, rounded ears, gray-brown fur and entire bushy ringed tail. Large readable animal centered with 15 percent background margin.
```

Output: `exec-c76ab2b1-26b0-47d8-97a0-33304e7c34dc.png`.

### 03-shallow-water-foraging

```text
Create an original photorealistic natural-history wildlife photograph, exact 1536x1024 horizontal, opaque sRGB. Species: common raccoon Procyon lotor, accurate stocky proportions, black eye mask edged pale, small rounded ears, gray-brown fur, five long digits on each paw, bushy dark-ringed tail. Soft natural light, restrained colors and credible forest habitat. No text, watermark, logo, ruler, collage, zoo, pet collar, cartoon, extra limbs or raccoon dog. One complete adult raccoon at a shallow clear creek, hind feet on bank and front paws reaching into shallow water among small stones. Entire face, body, all feet and ringed tail inside frame. Show exploratory paw use, no bowl, no human food, no soap.
```

Output: `exec-55e5a391-c689-4f60-af35-b69808dd6916.png`.

### 04-forest-fruit

```text
Create an original photorealistic natural-history wildlife photograph, exact 1536x1024 horizontal, opaque sRGB. Species: common raccoon Procyon lotor, accurate stocky proportions, black eye mask edged pale, small rounded ears, gray-brown fur, five long digits on each paw, bushy dark-ringed tail. Soft natural light, restrained colors and credible forest habitat. No text, watermark, logo, ruler, collage, zoo, pet collar, cartoon, extra limbs or raccoon dog. One complete adult raccoon seated naturally on woodland floor, holding a small fallen berry between front paws close to mouth, a few fallen berries nearby, full ringed tail on ground. All limbs naturally connected, no human hands.
```

Output: `exec-76925bb0-fda9-4f92-ad34-3df982b03ec4.png`.

### 05-tree-climbing

```text
Create an original photorealistic natural-history wildlife photograph, exact 1536x1024 horizontal, opaque sRGB. Species: common raccoon Procyon lotor, accurate stocky proportions, black eye mask edged pale, small rounded ears, gray-brown fur, five long digits on each paw, bushy dark-ringed tail. Soft natural light, restrained colors and credible forest habitat. No text, watermark, logo, ruler, collage, zoo, pet collar, cartoon, extra limbs or raccoon dog. One complete adult raccoon climbing diagonally along a thick sloping woodland trunk. All four paws gripping bark naturally, entire mask face and bushy ringed tail visible, generous margin, no cut-off body parts.
```

Output: `exec-609be427-852c-4b95-9731-8f0509d2b527.png`.

### 06-family-den

```text
Create an original photorealistic natural-history wildlife photograph, exact 1536x1024 horizontal, opaque sRGB. Species: common raccoon Procyon lotor, accurate stocky proportions, black eye mask edged pale, small rounded ears, gray-brown fur, five long digits on each paw, bushy dark-ringed tail. Soft natural light, restrained colors and credible forest habitat. No text, watermark, logo, ruler, collage, zoo, pet collar, cartoon, extra limbs or raccoon dog. One adult raccoon and exactly two smaller juvenile raccoons resting together on a broad natural hollow tree ledge near ground, full bodies with three separate ringed tails visible, adult alert and juveniles close by. No feeding or birth, no hidden babies. Wide enough for complete animals.
```

Output: `exec-e475c157-5ee1-487f-bdbd-576518adaf82.png`.

## Final cover prompts

### Initial cover (rejected)

```text
Create an original photorealistic natural-history wildlife photograph for Fauna Atlas. Exact 1536x1024 landscape. One adult common raccoon Procyon lotor standing on all fours facing left on a quiet wooded stream bank, gray brown fur, black eye mask edged white, rounded ears, pointed muzzle and complete bushy dark-ringed tail extending right. Wide environmental shot with the entire animal SMALL in the right part: full animal boundary including ears, paws and tail within x=1100..1370 y=370..480 pixels. Keep left 60 percent quiet softly focused woodland and water. Natural subdued dawn light, realistic anatomy, four connected legs and five toes per foot though far feet may be occluded. Complete animal with generous background, no cropping. No other animal, no humans, text, logo, watermark, collage, illustration or artificial glow.
```

### Accepted edit

Input: initial cover `exec-64d37833-3c13-4a3f-9eab-15b0a9fc4b9a.png`.
Accepted output: `exec-64354082-9aa2-4959-a04e-b4bbec1c9b75.png`.
Prompt coordinates were guidance; the review above records actual pixels.

```text
Edit this photograph, preserving woodland stream environment, photorealistic style, exact 1536x1024 canvas and the SAME one anatomically accurate raccoon. Move the entire raccoon UP and slightly RIGHT, uniformly reduce it slightly: strict full silhouette boundary including ears feet and tail x=1140..1350, y=340..440. All animal pixels must fit that box. Rebuild bank naturally beneath paws so it stands on real ground. Keep left 60 percent quiet. No other animals, no text or marks. Do not leave original animal behind.
```

## Compression and final inspection

All six sources were compressed with TinyPNG before their first commit, then converted with `cwebp -q 82 -m 6 -mt` through the repository scripts. No fallback compressor was needed. Original generated PNGs and final WebPs were visually inspected at original resolution; the compressed cover PNG was also inspected at original resolution. All source dimensions are 1536 × 1024. Runtime copies in `dist` match `public` byte for byte.

| Runtime file | Compressed PNG bytes | WebP bytes | Accepted WebP SHA-256 |
| --- | --- | --- | --- |
| 01-woodland-stream-cover.webp | 882,199 | 173,318 | `fe4efd53e9041d14197d8af9c5c8e75bbacc177b26b53b1c5ad4bee529424281` |
| 02-field-marks.webp | 930,791 | 247,798 | `fa3084fd9197f59d345157e3acaf9bdfb262c2cc3245ec3b44632ac9b124d1aa` |
| 03-shallow-water-foraging.webp | 905,195 | 219,550 | `a9241ace48f389536c51f2bf2f48baedbbe1a0ecbf07f971b2774c7d5bf8abd8` |
| 04-forest-fruit.webp | 953,049 | 185,354 | `251880133924c1ca8d9e6f9263b9a59fab26f8937524a4a7d99da99c9d231506` |
| 05-tree-climbing.webp | 947,819 | 228,968 | `4fd58d0186d6d2b307f605c8437a188fad51b4c0118eec97dda701874441e9b5` |
| 06-family-den.webp | 1,115,806 | 256,440 | `f638b76184e7c692761c40e49d0a8e545ba37fca6b29402d3156420f33874dd8` |

Gallery review: 02 shows a complete walking animal with overlapping toe ends; 03 shows forepaws at shallow water with no identifiable prey; 04 shows a fruit near the mouth, without identifying the fruit species; 05 has the far hind foot hidden by body/trunk; 06 shows one adult and two juveniles, with the adult tail and several feet occluded. The family prompt requested three visible tails, but this was not achieved. The accepted caption does not claim visible tail counts or actual parentage. These gallery occlusions do not affect the full-subject cover gate. No text, logos or watermarks were visible.

Verification: taxonomy and interaction suites passed; cover regression passed all 36 states; the final build and subpath asset test passed after all six runtime files were present.
