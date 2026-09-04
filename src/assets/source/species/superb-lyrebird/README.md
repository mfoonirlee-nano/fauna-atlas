# Superb Lyrebird image set

OpenAI's built-in image generation tool created these six original project images on 2026-09-03 UTC, spanning 2026-09-03 and 2026-09-04 in Asia/Shanghai, for the Fauna Atlas *Menura novaehollandiae* profile. The set reconstructs a rainforest cover, adult-male field marks, two male display states, leaf-litter foraging and a female-at-nest scene. It does not document named birds, subspecies, sites, nests or behavioral trials.

- Generation modes: `photorealistic-natural`, `scientific-educational natural-history reconstruction` and `precise-object-edit`
- Editable sources: TinyPNG-compressed `*-source.png`
- Runtime assets: `public/images/species/superb-lyrebird/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: source files are 8-bit indexed-color PNGs in RGB space; runtime files are opaque lossy VP8 WebP; no accepted file has alpha
- Runtime conversion: repository `cwebp -q 82 -m 6 -mt` workflow
- Product credit: `Fauna Atlas · AI 生成科学情景重建`

## Files

| No. | Source file | Runtime file | Purpose and accepted observation |
| --- | --- | --- | --- |
| 01 | `01-female-rainforest-cover-source.png` | `01-female-rainforest-cover.webp` | Cover. Exactly one complete plain-tailed lyrebird stands on a mossy fallen log in the right half of a wet fern forest; the bill, crown, folded wings, two legs, two feet and full tail remain inside frame, while the left 40 percent contains quiet forest. |
| 02 | `02-adult-male-field-marks-source.png` | `02-adult-male-field-marks.webp` | Morphology. Exactly one complete adult-male reconstruction stands in side view on damp litter with a lowered ornamental train; the full bill, feet and tail fit inside the source. |
| 03 | `03-inverted-tail-courtship-display-source.png` | `03-inverted-tail-courtship-display.webp` | Courtship posture. Exactly one complete adult-male reconstruction stands on a cleared mound with the ornamental tail inverted forward above the back and head. |
| 04 | `04-leaf-litter-foraging-source.png` | `04-leaf-litter-foraging.webp` | Foraging. Exactly one complete plain-tailed lyrebird makes one backward foot-scratch in damp leaf litter; both feet and the full ordinary tail remain visible, and no prey appears. |
| 05 | `05-mound-song-display-source.png` | `05-mound-song-display.webp` | Display. Exactly one complete adult-male reconstruction stands on a low mound with an open bill and lowered ornamental tail; no visible sound device or sound graphic appears. |
| 06 | `06-female-domed-nest-source.png` | `06-female-domed-nest.webp` | Breeding scene. Exactly one complete plain-tailed lyrebird stands beside one complete side-entry domed nest; exactly one mottled egg is visible and no chick or second bird appears. |

## Accepted observations and limits

- Grey-brown plumage, subdued rufous-brown folded wings, a slender dark bill, strong long legs and non-webbed feet anchor all six birds to the Superb Lyrebird. The scenes remain generic wet southeastern Australian forest reconstructions; pixels cannot establish locality, subspecies or wild provenance.
- Images 01, 04 and 06 intentionally depict adult females with ordinary graduated tails. A still image of a plain-tailed bird cannot exclude an immature male, so product copy may describe the reconstruction's intent but must not treat plumage alone as demographic proof.
- Images 02, 03 and 05 depict adult males through the ornamental tail. The accepted images show broad patterned lyrates, narrow median wires and filamentary texture, but overlap and AI reconstruction prevent a reliable count of all 16 rectrices. None serves as a measurement plate or feather-by-feather anatomical diagram.
- Image 03 records one plausible inverted-tail display instant. The still cannot identify a song type, dance sequence, audience, mating result or the male's intent. The terminal vane shapes and filament spacing remain approximate.
- Image 04 shows foot contact with disturbed litter. It does not reveal prey, quantify intake or demonstrate the published annual litter-and-soil turnover rate.
- Image 05 shows an open bill. It supplies no audio evidence for song, mimicry, a mobbing-flock illusion or communication function.
- Image 06 reconstructs one visible egg in a side-entry dome. The frame cannot establish parentage, incubation state, clutch history, nest success or the sex of the visible plain-tailed bird from appearance alone.
- No accepted image contains text, labels, arrows, musical notes, sound waves, logos, watermarks, borders, collages, people, research equipment or recognizable landmarks.

## Generation outputs

The table uses UTC timestamps from the generation session. Direct pixel inspection and the recovered effective prompts identify `exec-48b3630e…` as frame 02's base and `exec-f6e827b3…` as frame 04's base. They were not frame 03 or frame 05 candidates.

| UTC time | Frame | Generation output | Decision and pixel-based reason |
| --- | --- | --- | --- |
| 2026-09-03 15:47:23 | 01 male cover draft | `exec-6d545ef6-cd14-422b-959b-c486be2bf705.png` | Rejected. The male and its complex inverted tail occupied too much height; thin outer tips left little crop tolerance, and the tail structure was not stable enough for the hero's ultra-wide crop. |
| 2026-09-03 15:50:31 | 01 folded-tail male draft | `exec-8668c5cb-04fe-4180-ad54-a37de7e35de1.png` | Rejected. The generated bird carried an unnatural male-style narrow ornamental train that extended almost the full image height, and the complete subject remained too large for responsive hero motion. |
| 2026-09-03 15:52:38 | 01 female base | `exec-4b7c225a-9be3-4448-983f-77e5a67710cc.png` | Retained as edit input, rejected as the final cover. The plain tail solved the unstable male-tail problem, but the bird still occupied too much height. |
| 2026-09-03 15:54:03 | 01 final shrink edit | `exec-ab36ea4c-55bc-46a3-aef3-f6ff55a4150d.png` | Accepted as frame 01. The complete plain-tailed bird is small, right-weighted and surrounded by forest; the visually reviewed boundary passes the 36 static hero states below. |
| 2026-09-03 15:59:45 | 02 male field-mark base | `exec-48b3630e-50b5-4c74-a00c-31e92f54aa61.png` | Retained as edit input, rejected as final. The bird filled most of the width and the longest tail tips met or crossed the right edge. |
| 2026-09-03 16:05:46 | 02 final shrink edit | `exec-ad1ab001-97dd-41ea-9537-ff27c4a8854c.png` | Accepted as frame 02. An 18 percent shrink restored forest margin around the complete train and both feet. |
| 2026-09-03 16:00:42 | 03 inverted display | `exec-4d6a465d-a12d-4b79-a378-2bcfd9a3d65b.png` | Accepted as frame 03. One complete male, mound and inverted tail fit inside the source; individual feather count remains outside the visual claim. |
| 2026-09-03 16:01:18 | 04 foraging base | `exec-f6e827b3-1076-479c-b60e-352d07cda0b2.png` | Retained as edit input, rejected as final. The bird was oversized and the ordinary tail ran through the right edge. |
| 2026-09-03 16:06:15 | 04 final shrink edit | `exec-5d8f8ba7-c5bd-4109-8d4d-46097dd1aea6.png` | Accepted as frame 04. An 18 percent shrink preserves the scratching posture while keeping the tail and both feet inside natural litter margin. |
| 2026-09-03 16:01:48 | 05 mound display | `exec-0fe87aff-c2f9-4f1b-8ad4-069a92e38fa3.png` | Accepted as frame 05. One complete open-billed male and lowered train remain inside frame with no graphic representation of sound. |
| 2026-09-03 16:02:58 | 06 female and nest | `exec-73844d50-d59b-4c47-a669-89f4ccba2940.png` | Accepted as frame 06. One complete plain-tailed bird, one dome and exactly one visible egg remain distinct; no chick or second bird appears. |

## Exact service-revised prompt set

The generation session retained each image call's `revisedPrompt`. The following blocks reproduce those effective prompts verbatim; headings and code fences are the only additions. Museum references mentioned by the gallery prompts supplied anatomy and posture context during generation and are not repository assets or occurrence evidence.

### 01 · Female rainforest cover

#### Rejected adult-male display cover · `exec-6d545ef6-cd14-422b-959b-c486be2bf705`

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Superb Lyrebird species cover, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a natural-history editorial wildlife photograph of exactly one complete adult male Superb Lyrebird, Menura novaehollandiae, giving its courtship display on a low cleared mound in a cool wet southeastern Australian forest.
Scene/backdrop: dim fern-rich temperate rainforest with damp leaf litter, moss, soft trunks and restrained morning mist; the left 45 percent is quiet layered forest with no animal or bright object.
Subject: one anatomically accurate male Superb Lyrebird, grey-brown body, small head, sturdy legs and feet visible, long ornamental tail inverted forward over the back in the species-typical display. The tail must show two broad pale silver-and-rufous outer lyre-shaped feathers, two very narrow dark central wire feathers, and fine lacy filamentous feathers, without resembling a peacock fan.
Style/medium: photorealistic field-documentary photography, museum natural-history quality, realistic feather microtexture.
Composition/framing: keep the entire bird, bill, crown, both feet, body, both wing outlines and every tail tip inside a compact boundary in the upper-right-middle of the source. Subject boundary target about x 900–1190 and y 235–650 pixels; visual center at or beyond 60 percent of source width. Leave real forest background around all outer feathers and at least 90 source pixels from every image edge. Bird should remain readable but occupy no more than about 30 percent of image width and 48 percent of image height.
Lighting/mood: soft overcast forest light with gentle warm highlights on tail, subdued greens and brown.
Constraints: exact one bird; complete uncropped silhouette; no other animals; no text, label, logo, watermark, border, collage or artificial stage.
Avoid: peacock, pheasant, turkey, bird-of-paradise, fan of eye-spotted feathers, rainbow plumage, huge centered animal, cropped tail, cropped feet, duplicate feathers, extra wings or legs, human objects, microphone, visible sound waves, musical notes, fantasy glow, stock-photo oversaturation.
```

#### Rejected folded-tail male cover · `exec-8668c5cb-04fe-4180-ad54-a37de7e35de1`

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Superb Lyrebird species cover, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a natural-history editorial wildlife photograph of exactly one complete adult male Superb Lyrebird, Menura novaehollandiae, calmly perched on a low moss-covered fallen log in cool wet southeastern Australian forest. This is a non-display posture chosen to keep the full animal compact.
Scene/backdrop: fern-rich temperate rainforest, damp leaf litter, soft trunks and restrained morning mist. Keep the left 50 percent quiet, dark and free of animals or bright objects.
Subject: one anatomically accurate male, plain grey-brown head and body, slender pointed bill, sturdy long legs, both feet visibly gripping the log, short rounded folded wings, and the species' long 16-feather ornamental tail held tightly folded as a narrow train that hangs almost vertically behind the log. The folded tail must have two broad pale silver-and-rufous outer feathers forming a narrow lyre outline, two extremely narrow dark central wire feathers, and fine lacy filament feathers contained inside the folded outline. No swollen bulbs or black balls at feather tips.
Style/medium: photorealistic field-documentary photography, museum natural-history quality, fine feather microtexture.
Composition/framing: make the bird intentionally small and narrow. Entire boundary including bill, crown, folded wings, both feet and every tail tip should target x 935–1145 and y 215–720 pixels. Visual center at or beyond 60 percent source width. Preserve at least 100 source pixels of real forest background around all outer feathers. Subject no wider than 16 percent and no taller than 52 percent of the source.
Lighting/mood: soft overcast forest light, subdued brown and fern green.
Constraints: exactly one bird; complete uncropped silhouette; non-display folded-tail posture; no other animals; no text, logo, watermark, border or collage.
Avoid: courtship fan, raised tail over head, peacock, pheasant, turkey, bird-of-paradise, eye-spotted feathers, black bulbous feather tips, paddle ends, antenna-like rods, rainbow plumage, centered subject, cropped tail or feet, extra feathers, duplicate wings or legs, artificial perch, microphone, sound graphics, fantasy.
```

#### Female cover base · `exec-4b7c225a-9be3-4448-983f-77e5a67710cc`

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Superb Lyrebird species cover, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a natural-history editorial wildlife photograph of exactly one complete adult FEMALE Superb Lyrebird, Menura novaehollandiae, perched calmly on a low moss-covered fallen log in cool wet southeastern Australian forest. Use a female because her ordinary folded tail makes a compact, truthful full-body cover; do not give her a male display tail.
Scene/backdrop: fern-rich temperate rainforest, damp leaf litter, soft trunks and mist. Keep the left 50 percent quiet and dark with no animals or bright objects.
Subject: one anatomically accurate adult female Superb Lyrebird: warm grey-brown upperparts, slightly rufous wings, paler grey-brown underparts, small head, slender pointed dark bill, strong long grey legs, both feet gripping the log, short rounded folded wings, and a long plain dark-rufous-brown graduated tail held tightly folded and hanging almost vertically behind the log. The tail consists only of normal-looking closed feathers, with no male lyre feathers, wires, filaments, lace, fan, paddles, bulbs or ornaments.
Style/medium: photorealistic field-documentary photography, restrained museum natural-history quality, realistic feathers.
Composition/framing: make the female intentionally small and narrow. Entire boundary including bill, crown, folded wings, both feet and every tail tip should lie around x 935–1155 and y 235–750 pixels. Visual center at or beyond 60 percent source width. Preserve at least 100 source pixels of real forest background around every outer feature. Subject no wider than 18 percent and no taller than 54 percent of source.
Lighting/mood: soft overcast forest light, subdued brown and fern green.
Constraints: exactly one female bird; complete uncropped silhouette; ordinary folded female tail; no other animals; no text, logo, watermark, border or collage.
Avoid: adult male display tail, lyre-shaped feathers, raised tail, lace tail, wires, black balls, swollen tips, peacock, pheasant, turkey, eye spots, centered subject, cropped tail or feet, extra feathers, duplicate wings or legs, microphone, sound graphics, fantasy.
```

#### Accepted shrink edit · `exec-ab36ea4c-55bc-46a3-aef3-f6ff55a4150d`

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Superb Lyrebird cover, 1536 × 1024
Input images: Image 1 is the edit target.
Primary request: Uniformly shrink the complete female Superb Lyrebird to 58 percent of its current size and move it, with a proportionally smaller mossy perch, into a compact safe box centered in the upper-right-middle. The entire bird from bill to both feet and tail tip must fit within x 945–1095 and y 345–625 pixels. Reconstruct all newly exposed rainforest and the shortened perch naturally.
Constraints: change only animal scale/position and supporting perch. Preserve exactly one adult female, her grey-brown and rufous plumage, long plain folded tail, both legs and feet, proportions, camera, light, background and quiet left half. Keep the bird at least 110 source pixels from every image edge.
Avoid: male ornamental tail, tail fan, lyre feathers, black bulbs, missing foot, crop, second bird, text, logo, watermark.
```

### 02 · Adult-male field marks

#### Base · `exec-48b3630e-50b5-4c74-a00c-31e92f54aa61`

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Superb Lyrebird gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Input images: Image 1 is a museum anatomy reference for the plain-bodied bird and female tail; Image 2 is a Museum Victoria anatomy-and-posture reference for the adult male's 16-feather ornamental tail. Use them only for species anatomy, feather structure and proportions. Create an original natural setting and camera composition.
Style/medium: photorealistic field-documentary wildlife photography, realistic feather microtexture, restrained natural color.
Constraints: Menura novaehollandiae anatomy; all requested birds fully inside frame; no text, labels, arrows, watermark, logo, border, collage, zoo fixtures, specimen mount or scale bar.
Avoid: peacock eye spots, pheasant, turkey, bird-of-paradise, rainbow plumage, extra or fused legs, duplicate wings, impossible tail attachment, decorative fantasy feathers.
Primary request: exactly one complete adult male Superb Lyrebird in strict side profile, standing calmly on damp leaf litter with his ornamental tail lowered and loosely folded behind him, for a diagnostic field-mark image.
Subject: slate-grey head and body, rufous-brown wings, pale lower underparts, pointed bill, long strong grey legs and feet, rounded folded wings. Show the whole long adult male tail as 16 coherent feathers: two broad outer lyrates with patterned rufous-and-dark vanes and pale edges, two narrow dark median wires, and twelve fine filamentary feathers. In resting posture the feathers align as a long loose train rather than a courtship fan.
Composition/framing: bird centered with generous margins; bill, crown, both feet and every tail tip visible; lateral view readable.
Scene/backdrop: cool southeastern Australian wet forest floor, ferns softly out of focus.
Avoid: raised tail over head, courtship fan, cropped train, black spherical ornaments, tail longer than frame, more than one bird.
```

#### Accepted shrink edit · `exec-ad1ab001-97dd-41ea-9537-ff27c4a8854c`

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Superb Lyrebird diagnostic gallery image 2
Input images: Image 1 is the edit target.
Primary request: Uniformly shrink the entire male Superb Lyrebird, including every ornamental tail feather, by 18 percent and recenter it so the complete bill, crown, both feet and every tail tip have at least 90 pixels of visible forest background before each edge. Reconstruct revealed leaf litter and forest naturally.
Constraints: preserve exactly one male, strict side profile, body proportions, grey body, rufous wing, two broad patterned outer lyrates, two narrow median wires, filamentary tail feathers, lowered resting tail, lighting and camera.
Avoid: cropped feather tips, missing foot, display fan, black spherical ornaments, extra bird, text, logo, watermark.
```

### 03 · Inverted-tail courtship display

#### Accepted generation · `exec-4d6a465d-a12d-4b79-a378-2bcfd9a3d65b`

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Superb Lyrebird gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Input images: Image 1 is a museum anatomy reference for the plain-bodied bird and female tail; Image 2 is a Museum Victoria anatomy-and-posture reference for the adult male's 16-feather ornamental tail. Use them only for species anatomy, feather structure and proportions. Create an original natural setting and camera composition.
Style/medium: photorealistic field-documentary wildlife photography, realistic feather microtexture, restrained natural color.
Constraints: Menura novaehollandiae anatomy; all requested birds fully inside frame; no text, labels, arrows, watermark, logo, border, collage, zoo fixtures, specimen mount or scale bar.
Avoid: peacock eye spots, pheasant, turkey, bird-of-paradise, rainbow plumage, extra or fused legs, duplicate wings, impossible tail attachment, decorative fantasy feathers.
Primary request: exactly one complete adult male Superb Lyrebird performing the species-typical inverted-tail courtship display on a small cleared earthen mound.
Subject/action: grey-brown male with rufous wings, head and both strong legs visible beneath the tail; the 16-feather tail is turned forward over head and back. Two broad lyrates form the outer curved frame with pale silver-white outer webs and dark/rufous barred inner webs; two extremely narrow dark median wires arc independently; twelve filamentary feathers form a translucent silvery lace curtain. Use Image 2 to keep the unusual orientation believable.
Composition/framing: three-quarter side view, entire male and every feather tip inside frame, no female.
Scene/backdrop: damp winter forest, low ferns, clear display mound.
Avoid: upright peacock fan, eye spots, symmetrical heart logo, detached feathers, thick rods, balloons, cropped feather tips, multiple birds.
```

### 04 · Leaf-litter foraging

#### Base · `exec-f6e827b3-1076-479c-b60e-352d07cda0b2`

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Superb Lyrebird gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Input images: Image 1 is a museum anatomy reference for the plain-bodied bird and female tail; Image 2 is a Museum Victoria anatomy-and-posture reference for the adult male's 16-feather ornamental tail. Use them only for species anatomy, feather structure and proportions. Create an original natural setting and camera composition.
Style/medium: photorealistic field-documentary wildlife photography, realistic feather microtexture, restrained natural color.
Constraints: Menura novaehollandiae anatomy; all requested birds fully inside frame; no text, labels, arrows, watermark, logo, border, collage, zoo fixtures, specimen mount or scale bar.
Avoid: peacock eye spots, pheasant, turkey, bird-of-paradise, rainbow plumage, extra or fused legs, duplicate wings, impossible tail attachment, decorative fantasy feathers.
Primary request: exactly one complete adult female Superb Lyrebird foraging by scratching damp leaf litter with one foot while the other supports her body.
Subject/action: plain warm grey-brown female with rufous wings, long ordinary graduated tail, pointed bill, strong long legs; one backward scrape reveals a modest patch of moist soil with small invertebrates implied only by disturbed litter, not enlarged.
Composition/framing: low side three-quarter view, entire bird, both feet and tail visible, natural motion without blur.
Scene/backdrop: fern gully floor with fallen leaves and small twigs.
Avoid: male ornamental tail, feeding from hand, giant visible worm, excavated crater, two birds, nest, cropped foot or tail.
```

#### Accepted shrink edit · `exec-5d8f8ba7-c5bd-4109-8d4d-46097dd1aea6`

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Superb Lyrebird foraging gallery image 4
Input images: Image 1 is the edit target.
Primary request: Uniformly shrink the complete female Superb Lyrebird by 18 percent and shift it slightly toward the frame center so the entire plain graduated tail, bill, body, both legs and both feet are visible with at least 90 pixels of natural forest floor around every outer feature. Reconstruct revealed leaf litter naturally. Keep one foot making a backward scratch through a small patch of damp litter while the other supports the body.
Constraints: preserve exactly one plain-tailed female, grey-brown body, rufous wing, long ordinary tail, foraging posture, forest, light and camera.
Avoid: cropped tail, missing foot, male ornamental tail, giant prey, nest, second bird, text, logo, watermark.
```

### 05 · Mound song display

#### Accepted generation · `exec-0fe87aff-c2f9-4f1b-8ad4-069a92e38fa3`

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Superb Lyrebird gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Input images: Image 1 is a museum anatomy reference for the plain-bodied bird and female tail; Image 2 is a Museum Victoria anatomy-and-posture reference for the adult male's 16-feather ornamental tail. Use them only for species anatomy, feather structure and proportions. Create an original natural setting and camera composition.
Style/medium: photorealistic field-documentary wildlife photography, realistic feather microtexture, restrained natural color.
Constraints: Menura novaehollandiae anatomy; all requested birds fully inside frame; no text, labels, arrows, watermark, logo, border, collage, zoo fixtures, specimen mount or scale bar.
Avoid: peacock eye spots, pheasant, turkey, bird-of-paradise, rainbow plumage, extra or fused legs, duplicate wings, impossible tail attachment, decorative fantasy feathers.
Primary request: exactly one complete adult male Superb Lyrebird singing on a low display mound with bill naturally open and throat engaged, tail lowered in a loose resting curve behind him.
Subject/action: grey body, rufous wings, strong legs, adult ornamental tail present and coherent but not inverted; alert singing posture. The still image must contain no visible sound representation.
Composition/framing: medium-wide side view, complete bird and tail, forest depth around it.
Scene/backdrop: dim wet forest at early morning.
Avoid: microphone, speaker, camera, human objects, musical notes, captions, visible sound waves, chainsaw or other mimicked object, open screaming gape, courtship fan, extra bird.
```

### 06 · Female beside a domed nest

#### Accepted generation · `exec-73844d50-d59b-4c47-a669-89f4ccba2940`

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Superb Lyrebird gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Input images: Image 1 is a museum anatomy reference for the plain-bodied bird and female tail; Image 2 is a Museum Victoria anatomy-and-posture reference for the adult male's 16-feather ornamental tail. Use them only for species anatomy, feather structure and proportions. Create an original natural setting and camera composition.
Style/medium: photorealistic field-documentary wildlife photography, realistic feather microtexture, restrained natural color.
Constraints: Menura novaehollandiae anatomy; all requested birds fully inside frame; no text, labels, arrows, watermark, logo, border, collage, zoo fixtures, specimen mount or scale bar.
Avoid: peacock eye spots, pheasant, turkey, bird-of-paradise, rainbow plumage, extra or fused legs, duplicate wings, impossible tail attachment, decorative fantasy feathers.
Primary request: exactly one complete adult female Superb Lyrebird beside her moss-and-plant-fibre domed nest in a sheltered earthen bank, with exactly one mottled egg visible through the side entrance.
Subject/action: plain female outside the nest, long ordinary tail and both feet fully visible; compact domed nest made from sticks, bark strips, moss, roots and plant fibre, with one side entrance and one egg, no chick.
Composition/framing: female and entire nest both readable, gentle side view, no cutaway.
Scene/backdrop: shaded damp forest bank with ferns.
Avoid: male tail, open cup nest, tree-hole nest, woven basket, more than one egg, chick, second adult, human hand, exposed cross-section, crop.
```

## Cover full-subject geometry

Image 01 uses the committed focal point `{ x: 0.724, y: 0.562 }`. Original-resolution inspection of the compressed PNG and decoded runtime WebP produced a conservative outward-rounded full-subject boundary of `B = [950, 402, 1092, 703]` in source pixels: left, top, right and bottom. The boundary includes the bill tip, crown, both folded-wing edges, both legs, both feet and the plain tail tip.

- Boundary center: `(1021, 552.5)`; horizontal center is `66.47%` of the 1536-pixel source width.
- Left 40 percent: `x=0..614`; the bird starts at `x=950`, leaving 336 source pixels between that copy zone and the reviewed boundary.
- Source-edge background: 950 pixels left, 444 right, 402 top and 321 bottom around the reviewed boundary.
- Runtime cover SHA-256: `4e87b6137edd07bee2d95db6ee68eba161bcd179a3102efc7318bea3f0b96ee1`.

The calculation matches `tests/hero-carousel.test.mjs`: `object-fit: cover`, percentage `object-position`, a center-center transform origin, and horizontal translations measured against the image box. Values below are rounded to 0.1 CSS pixel. `T/R/B/L` lists the complete boundary's clearance from the viewport edges.

| Viewport | Visible source crop at settled state |
| --- | --- |
| `320×760` | `x=799.9..1231.1, y=0..1024` |
| `390×760` | `x=731.6..1257.1, y=0..1024` |
| `1366×768` | `x=0..1536, y=90.2..953.7` |
| `1920×900` | `x=0..1536, y=170.8..890.8` |
| `2560×900` | `x=0..1536, y=272.0..812.0` |
| `3840×900` | `x=0..1536, y=373.2..733.2` |

| Viewport | Static state | Transform | T/R/B/L clearance, CSS px | Minimum | Result |
| --- | --- | --- | --- | --- | --- |
| `320×760` | settled | `scale(1)` | `298.4 / 103.2 / 238.2 / 111.4` | `103.2` | pass |
| `320×760` | initial-from | `scale(1.04)` | `295.1 / 100.9 / 232.6 / 109.5` | `100.9` | pass |
| `320×760` | enter-forward-from | `translateX(5%) scale(1.025)` | `296.3 / 85.8 / 234.7 / 126.2` | `85.8` | pass |
| `320×760` | leave-forward-to | `translateX(-4%) scale(1.015)` | `297.1 / 115.2 / 236.1 / 97.9` | `97.9` | pass |
| `320×760` | enter-backward-from | `translateX(-5%) scale(1.025)` | `296.3 / 117.8 / 234.7 / 94.2` | `94.2` | pass |
| `320×760` | leave-backward-to | `translateX(4%) scale(1.015)` | `297.1 / 89.6 / 236.1 / 123.5` | `89.6` | pass |
| `390×760` | settled | `scale(1)` | `298.4 / 122.5 / 238.2 / 162.1` | `122.5` | pass |
| `390×760` | initial-from | `scale(1.04)` | `295.1 / 119.6 / 232.6 / 160.8` | `119.6` | pass |
| `390×760` | enter-forward-from | `translateX(5%) scale(1.025)` | `296.3 / 101.2 / 234.7 / 180.8` | `101.2` | pass |
| `390×760` | leave-forward-to | `translateX(-4%) scale(1.015)` | `297.1 / 137.0 / 236.1 / 146.0` | `137.0` | pass |
| `390×760` | enter-backward-from | `translateX(-5%) scale(1.025)` | `296.3 / 140.2 / 234.7 / 141.8` | `140.2` | pass |
| `390×760` | leave-backward-to | `translateX(4%) scale(1.015)` | `297.1 / 105.8 / 236.1 / 177.2` | `105.8` | pass |
| `1366×768` | settled | `scale(1)` | `277.3 / 394.9 / 223.0 / 844.9` | `223.0` | pass |
| `1366×768` | initial-from | `scale(1.04)` | `273.1 / 383.3 / 216.5 / 851.3` | `216.5` | pass |
| `1366×768` | enter-forward-from | `translateX(5%) scale(1.025)` | `274.7 / 319.4 / 219.0 / 917.2` | `219.0` | pass |
| `1366×768` | leave-forward-to | `translateX(-4%) scale(1.015)` | `275.7 / 445.2 / 220.6 / 792.6` | `220.6` | pass |
| `1366×768` | enter-backward-from | `translateX(-5%) scale(1.025)` | `274.7 / 456.0 / 219.0 / 780.6` | `219.0` | pass |
| `1366×768` | leave-backward-to | `translateX(4%) scale(1.015)` | `275.7 / 335.9 / 220.6 / 901.9` | `220.6` | pass |
| `1920×900` | settled | `scale(1)` | `288.9 / 555.0 / 234.8 / 1187.5` | `234.8` | pass |
| `1920×900` | initial-from | `scale(1.04)` | `282.5 / 538.8 / 226.2 / 1196.6` | `226.2` | pass |
| `1920×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `284.9 / 448.9 / 229.4 / 1289.2` | `229.4` | pass |
| `1920×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `286.5 / 625.7 / 231.6 / 1114.1` | `231.6` | pass |
| `1920×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `284.9 / 640.9 / 229.4 / 1097.2` | `229.4` | pass |
| `1920×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `286.5 / 472.1 / 231.6 / 1267.7` | `231.6` | pass |
| `2560×900` | settled | `scale(1)` | `216.7 / 740.0 / 181.7 / 1583.3` | `181.7` | pass |
| `2560×900` | initial-from | `scale(1.04)` | `207.3 / 718.4 / 170.9 / 1595.5` | `170.9` | pass |
| `2560×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `210.8 / 598.5 / 175.0 / 1718.9` | `175.0` | pass |
| `2560×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `213.2 / 834.3 / 177.7 / 1485.5` | `177.7` | pass |
| `2560×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `210.8 / 854.5 / 175.0 / 1462.9` | `175.0` | pass |
| `2560×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `213.2 / 629.5 / 177.7 / 1690.3` | `177.7` | pass |
| `3840×900` | settled | `scale(1)` | `72.1 / 1110.0 / 75.4 / 2375.0` | `72.1` | pass |
| `3840×900` | initial-from | `scale(1.04)` | `57.0 / 1077.6 / 60.4 / 2393.2` | `57.0` | pass |
| `3840×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `62.6 / 897.8 / 66.1 / 2578.4` | `62.6` | pass |
| `3840×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `66.4 / 1251.4 / 69.8 / 2228.2` | `66.4` | pass |
| `3840×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `62.6 / 1281.8 / 66.1 / 2194.4` | `62.6` | pass |
| `3840×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `66.4 / 944.3 / 69.8 / 2535.4` | `66.4` | pass |

All 36 rectangular full-subject checks exceed the 24 CSS pixel gate. The tightest result is 57.0 pixels at the top of the `3840×900` initial frame. Source inspection also confirms that `x=0..614` contains no second bird or bright isolated object. The mobile carousel panel occupies the top region above the bird; desktop copy uses the quiet left side. These static checks use current CSS geometry and do not replace the hash-locked full-subject regression case required by the species cover rule. This README-only task does not alter that test.

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/superb-lyrebird/01-female-rainforest-cover-source.png src/assets/source/species/superb-lyrebird/02-adult-male-field-marks-source.png src/assets/source/species/superb-lyrebird/03-inverted-tail-courtship-display-source.png src/assets/source/species/superb-lyrebird/04-leaf-litter-foraging-source.png src/assets/source/species/superb-lyrebird/05-mound-song-display-source.png src/assets/source/species/superb-lyrebird/06-female-domed-nest-source.png
npm run convert:webp -- src/assets/source/species/superb-lyrebird/01-female-rainforest-cover-source.png src/assets/source/species/superb-lyrebird/02-adult-male-field-marks-source.png src/assets/source/species/superb-lyrebird/03-inverted-tail-courtship-display-source.png src/assets/source/species/superb-lyrebird/04-leaf-litter-foraging-source.png src/assets/source/species/superb-lyrebird/05-mound-song-display-source.png src/assets/source/species/superb-lyrebird/06-female-domed-nest-source.png
```

- TinyPNG reduced the six generated PNGs from 17,870.6 KB to 6,113.9 KB, a 65.8 percent reduction.
- The repository WebP conversion reduced the 6,113.9 KB compressed PNG set to 1,574.3 KB, a further 74.3 percent reduction.
- `file` and `sips` identify all twelve accepted files as 1536 × 1024, 8-bit RGB, opaque images. PNG and WebP basenames form six one-to-one pairs.
- Original-detail inspection covered every compressed PNG and decoded WebP. No runtime file introduced a missing bill, foot, tail tip, egg, filament break, text artifact or material content drift.
- PNG-to-WebP PSNR, in frame order, is `37.1602`, `35.9474`, `36.1647`, `35.2767`, `36.2563` and `34.8466` dB.
- Inspection confirmed one bird in every frame; one egg only in frame 06; no other animal, person, text, logo or watermark; and the scene-specific observations in the file table.
- Verification used static file inspection and `view_image` at original detail. It did not use a GUI or headless browser.

## Accepted asset hashes

Hashes were computed with `shasum -a 256` after source compression and runtime conversion.

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `83ac8c4d748b4adcd026c9486f1564b740cb92a53aba3fd4966fb679f96993a6` | `4e87b6137edd07bee2d95db6ee68eba161bcd179a3102efc7318bea3f0b96ee1` |
| 02 | `47927a2d03c46c7a27eca4e94f8d5e935bc365297d5092358ef0f4df69981e74` | `b0ddb68cc27e0de68fd77b60fd025ac8b1f884cfbf8d3b907e459c025f63a7f5` |
| 03 | `ec5d9bda6488e5b43829723ff321c246358b75fdd23420596bfe3f3e24a4cb25` | `b98d2c656160783d5b93129bd0e94b44561f38700b9bb36bae149830f5d0d5af` |
| 04 | `736687a74dd2758c240ca55886e83c613a700c4138220bd49a60b2a15fb84fb5` | `4d4bfe1e40cf23b3661247b30336061f1210fee604db56396c65f585bcc1a7c3` |
| 05 | `7f1cc54dbf9b98b157324e17824b6217dcfde3ccb3dc8af82e9a54c42390af16` | `1f761529cb6c1cd1a72023be95fcd230c9e04143f70d82c566de6a06c9a0639a` |
| 06 | `ce484ab66b3319f79fe80aede81feb9483938a79e0c8090aaa407cad3a77bd69` | `a88f75fed86b62c7b12c7510d94447a3f6f54986ccfaa780da157f7092a287be` |
