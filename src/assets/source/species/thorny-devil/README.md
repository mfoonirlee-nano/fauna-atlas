# Thorny Devil image set

Six original 1536 × 1024 source PNGs for the _Moloch horridus_ profile. Codex's built-in image generation tool produced the base images on 2026-09-04. Frames 02, 03, 05 and 06 passed original-resolution review on the first attempt. Frame 04 needed a shorter tongue and smaller ants. Cover revisions first solved viewport and overlay collisions, then restored a readable complete animal. The accepted cover keeps that animal between the current copy and carousel-panel components at all tested animation endpoints. TinyPNG compressed the accepted PNGs in place, and the repository `cwebp` workflow generated the runtime files.

## Files

| Frame | Source PNG | Runtime WebP | Purpose |
| --- | --- | --- | --- |
| 01 | `01-red-sand-after-rain-cover-source.png` | `01-red-sand-after-rain-cover.webp` | Wide red-sand cover with a readable complete subject and quiet left side |
| 02 | `02-full-body-diagnostic-profile-source.png` | `02-full-body-diagnostic-profile.webp` | Full-body external morphology |
| 03 | `03-rain-water-collection-source.png` | `03-rain-water-collection.webp` | Rainwater in contact with the spined surface |
| 04 | `04-ant-trail-feeding-source.png` | `04-ant-trail-feeding.webp` | Short-tongued feeding beside a small ant trail |
| 05 | `05-false-head-defense-source.png` | `05-false-head-defense.webp` | Lowered true head and prominent nuchal “false head” |
| 06 | `06-nesting-burrow-source.png` | `06-nesting-burrow.webp` | Digging beside a small sand-burrow entrance |

## Accepted observations and limits

Frame 01 shows exactly one readable, complete left-facing thorny devil on the right of a broad red-sand landscape. The blunt head, supraocular spines, nuchal hump, four limbs, feet and tail tip remain visible. The left 40 percent contains only subdued sand, sky and vegetation. The filename and generation prompt refer to rain, but the pixels cannot establish recent rainfall, rainfall amount, locality, body size, sex, age, activity state or individual identity.

Frame 02 shows one complete adult-appearing thorny devil in a three-quarter lateral view. It supports the broad flattened body, short limbs, blunt head, supraocular spines, nuchal hump and mottled spined outline. Overlapping toe ends and fine spines cannot be counted reliably, and the pixels do not supply a calibrated measurement or sex diagnosis.

Frame 03 shows one complete thorny devil on rain-darkened sand with small water beads on parts of its surface. The image does not reveal the microscopic interscalar channels, prove that water reached the mouth, show swallowing or support transcutaneous absorption.

Frame 04 shows one complete thorny devil with a short exposed tongue beside several small ants in a loose trail. The generated ants cannot be identified to genus or species. A still cannot prove capture, ingestion, daily intake, diet proportion or a field-observed event.

Frame 05 shows one complete thorny devil with its true head lowered and the spined nuchal hump prominent. No predator appears. The posture cannot prove threat detection, mistaken identity by a predator or defensive success. The rounded hump contains no generated face.

Frame 06 shows one complete stout thorny devil digging beside a small opening in red sand. The still does not establish sex, gravidity, nest construction, tunnel layout, chamber depth, clutch size or incubation duration. No egg is visible.

No frame is evidence of a measured biological event, population condition or conservation status. The accepted files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks. Scientific boundaries are documented in [the Thorny Devil research brief](../../../../../docs/research/thorny-devil-profile.md).

## Generation outputs

The generation calls stored outputs under `/Users/chris.li/.codex/generated_images/01a06b1e-70f0-71f0-9a66-fdfe0e3b627c/`; an earlier edge-only cover edit used `/Users/chris.li/.codex/generated_images/01a06b1e-c653-7f73-bfb4-6a9395288b56/`. Only the final accepted pixels were copied into the repository before compression.

| Call | Generator output | Decision |
| --- | --- | --- |
| 01 base | `exec-77818737-6a5b-4f80-b3a2-c0e53196bbc2.png` | Rejected because the lizard was too large for the responsive hero |
| 01 first correction | `exec-1b485829-dd7d-4cd5-b4e0-c2c5bf44f87a.png` | Superseded because the complete-subject test had only about 2 CSS pixels of tolerance |
| 01 edge-only correction | `exec-08e19678-c2e3-4f29-bca5-22dc571d1086.png` | Superseded: it cleared the viewport edges but crossed the desktop carousel panel and mobile copy |
| 01 alternate correction | `exec-5062de52-e2d0-42cf-9507-332c43faaee4.png` | Rejected for subject-center or geometry drift |
| 01 alternate correction | `exec-61f424e3-f472-445e-bc5f-4a3299e50110.png` | Rejected for subject-center or geometry drift |
| 01 composed-area translation attempt | `exec-69015896-e70c-4ca7-885a-cdfa344fef83.png` | Rejected because the animal remained too low and too far left |
| 01 composed-area translation attempt | `exec-85669f61-7005-4284-a06d-002e98ff07b5.png` | Rejected because the animal remained too low and too far left |
| 01 extreme-wide regeneration | `exec-78f41514-2bbe-43e4-a61b-34a24056145f.png` | Superseded to add more horizontal clearance from the desktop copy column |
| 01 composed-area correction | `exec-60d9eb2c-9289-4f24-81d2-ed83319cdc12.png` | Superseded after original-resolution review found the 122×86 source-pixel animal too small to read |
| 01 readability regeneration | `exec-921f5618-25e5-4f28-b60b-6692ea8e7e95.png` | Superseded because the readable animal landed too far right and too low |
| 01 left-and-up correction | `exec-dcb26feb-46cc-4bd8-ba7c-95f7213cf920.png` | Superseded: readable morphology, but the approximate `[975, 325, 1275, 430]` boundary could not clear the desktop copy |
| 01 horizontal correction | `exec-ac4f615f-18b9-4692-9e63-8775e9dbf915.png` | Superseded: readable and horizontally close, but the approximate `[1028, 425, 1334, 530]` boundary crossed mobile copy and the desktop panel |
| 01 final vertical correction | `exec-436aa4a6-9e66-4185-8a0d-6463b3ce9888.png` | Accepted after original-resolution readability, viewport-edge and exact component-rectangle review |
| 02 base | `exec-a1d6b069-c786-4277-87ee-004766cddd70.png` | Accepted first pass |
| 03 base | `exec-1af5091f-4b51-48e6-8a69-d1988b3be6c4.png` | Accepted first pass |
| 04 base | `exec-d9abb3e1-e761-4598-818d-588ecb39c7a6.png` | Rejected because the tongue and ants were disproportionately large |
| 04 correction | `exec-4d509812-4a90-4610-895f-f0a61566ab26.png` | Accepted with a short tongue and smaller ants |
| 05 base | `exec-ee156d44-218e-42e3-aab7-1482066d5f53.png` | Accepted first pass |
| 06 base | `exec-000ad5d7-f481-4ff7-8064-e9769f4d23f7.png` | Accepted first pass |

## Effective prompt set

### 01 · Complete animal in a wide red-sand setting

The base request was:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas landing-page species cover
Primary request: an anatomically accurate adult thorny devil lizard (Moloch horridus) standing calmly on red desert sand in arid inland Australia after a light rain
Scene/backdrop: natural red sand plain with sparse spinifex tussocks and low arid scrub, distant soft dunes, no standing puddle, no people
Subject: exactly one adult thorny devil, broad flattened body, short legs, short tail, small blunt head, dense conical spines, a large spiny hump or false head behind the neck, paired curved spines above the eyes, mottled ochre tan rust and dark brown camouflage; unmistakably Moloch horridus and not a horned lizard, bearded dragon, iguana, chameleon, dinosaur, or fantasy creature
Style/medium: photorealistic natural-history editorial wildlife photography, scientifically grounded, realistic scale texture and desert detail
Composition/framing: 3:2 wide landscape; place the entire lizard on the right, its visual center near 72 percent of image width; animal occupies about 18 percent of image width and 20 percent of image height; show every visible spine, head, all four feet and toes, full tail tip with generous real sand around the complete silhouette; keep the left 45 percent quiet and low contrast for website text; eye-level low camera but enough side view to read the whole body
Lighting/mood: soft overcast dawn just after a brief desert shower, calm and observational
Color palette: muted red earth, ochre, sand, gray-green spinifex, restrained natural contrast
Materials/textures: crisp overlapping scales and conical spines, damp granular sand, realistic plant fibers
Constraints: landscape image exactly; exactly one animal; complete uncut body; no prey; no visible water streams or diagrams; no text, labels, logo, watermark, border, cage, road, buildings, humans, other animals, fantasy anatomy, oversized horns, spikes made of bone or metal
Avoid: centered subject, close-up, cropped feet or tail, aggressive pose, open mouth, stock-photo gloss, oversaturation, cinematic fantasy
```

The first correction was:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas landing-page species cover
Input images: Image 1 is the edit target
Primary request: make only the thorny devil lizard much smaller in the frame, about 55 percent of its current linear size, while keeping it on the right and preserving the same animal identity, pose, anatomy, sharp detail, camera perspective, lighting, and entire desert backdrop
Composition/framing: keep the lizard's visual center near 72 percent of image width; its complete silhouette should occupy no more than about 20 percent of image width and 18 percent of image height; show the head, every visible spine, all four feet and toes, and the full tail tip with generous real sand around it; keep the left 45 percent quiet
Constraints: change only the animal scale and seamlessly reconstruct the sand uncovered around it; keep the 3:2 landscape canvas and all background features unchanged; exactly one animal; no cropping; no new plants, animals, objects, water, text, labels, logo, watermark, border, or fantasy anatomy
```

An early safety edit used this prompt:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Thorny Devil species cover geometry correction
Input image: Image 1 is the only edit target and the only visual reference.
Primary request: Perform one restrained geometric edit only. Reduce the complete Thorny Devil by exactly about 12 percent in both width and height, keeping 88 percent of its current linear size. Do not make it 80 percent or smaller. Keep the animal's visual center fixed at source coordinate (1147, 661), with no horizontal or vertical translation.
Required final geometry: The original complete-animal boundary is x=992..1302 and y=604..718. The edited complete animal, including outermost head spine, every dorsal and lateral spine, all four feet and visible toes, and the tail tip, should occupy approximately x=1011..1283 and y=611..711. Treat this target rectangle and fixed center as higher priority than any artistic reinterpretation. In particular, keep the complete tail extending to about x=1283 and the complete head beginning near x=1011.
Subject invariants: Preserve the exact same single Moloch horridus individual, exact identity, left-facing direction, pose, gaze, thorn pattern, false head, coloration, body proportions, limb placement, ground contact, and anatomy. Uniform scaling only. Scale its natural contact shadow by the same amount.
Scene invariants: Preserve all sky, horizon, red-sand terrain, pebbles, shrubs, grasses, lighting, color, focus, perspective, and camera framing. Fill only the narrow ring of pixels vacated by the 12 percent shrink with seamless matching red sand, matching nearby grain, pebbles, damp texture, focus, and shadow. Remove every trace of the former larger silhouette.
Canvas: exactly 1536×1024 pixels, unchanged. No crop, extension, rotation, reframing, or resampling of the full canvas.
Constraints: exactly one complete animal; no duplicate, residual ghost, detached spine, extra limb, extra tail, new shadow, or silhouette remnant. Change only the animal's uniform scale and the immediately exposed red-sand pixels.
Avoid: shrinking by 20 percent or more, shifting the animal left, shifting it right, shifting it up or down, additional animals, additional or moved plants, text, labels, logo, watermark, border, collage, changed weather, changed light, changed horizon, fantasy anatomy, oversaturation, artificial blur.
```

That candidate was superseded after the composed overlay audit. The overlay-safe branch started with this extreme-wide regeneration:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Thorny Devil species cover, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original extreme-wide environmental natural-history photograph of exactly one complete adult thorny devil (Moloch horridus) on red sand in arid inland Australia shortly after light rain.
Critical layout geometry: the animal must be small and distant, with its entire silhouette contained inside the compact source-pixel box x=1080–1260 and y=395–485 on the 1536 × 1024 canvas. The center of the animal should be near x=1170, y=440. This placement and small scale are strict. Leave real visible sand around every extremity. Keep the whole left 60 percent and the entire lower 48 percent of the frame as quiet low-detail red sand or soft habitat background for overlaid interface copy. Put the animal on a subtle low rise so this upper-middle-right placement remains physically believable.
Subject: one anatomically coherent left-facing thorny devil; broad flattened spiny body; small narrow head; two prominent head spines; conical dorsal spines; mottled ochre, rust, tan and dark-brown camouflage; four short complete legs with all feet visible; complete gently curved tail. Natural calm walking posture.
Scene/backdrop: vast red-sand plain, sparse pale spinifex and low distant scrub, low horizon; tiny damp patches after rain without puddle spectacle. No plant, rock, or bright object may overlap the animal or occupy the quiet left field.
Style/medium: photorealistic long-lens wildlife documentary, restrained museum-publication color, fine natural texture, overcast post-rain light, sober and scientifically grounded.
Composition/framing: extreme wide establishing view; animal occupies no more than 12 percent of canvas width and no more than 9 percent of canvas height; exact right-upper-middle target box takes priority over portrait readability; generous background above, below, and to the right.
Constraints: exactly one complete animal; no clipped snout, horns, feet, belly, tail, or spines; no text, labels, logo, watermark, border, humans, road, buildings, vehicles, other animals, fantasy elements, dramatic rays, oversaturation, duplicated anatomy, or macro close-up.
Avoid: centered subject, lower-half subject placement, lizard larger than the target box, foreground portrait, horned toad, bearded dragon, desert iguana, extra limb, missing foot, fused tail, artificial cutout edge.
```

The last edit in that overlay-safe branch used this prompt:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Thorny Devil cover final geometry adjustment
Input image: edit the supplied 1536 × 1024 image.
Primary request: Translate the one complete thorny devil horizontally 35 source pixels to the right. Keep its vertical position and exact scale unchanged. Target its complete silhouette inside approximately x=1070–1200 and y=398–488. Seamlessly reconstruct only the small revealed patch of red sand.
Exact invariants: preserve the same single left-facing animal, raised curved tail, complete anatomy, pose, size, sharpness, lighting, colors, red-sand scene, horizon, vegetation, sky, camera, broad quiet left and lower fields, and exact 1536 × 1024 framing. Make no other visible change.
Constraints: exactly one complete thorny devil with all feet, snout, head spines, dorsal spines and tail fully visible; real sand margin around it; no enlargement, rotation, second animal, foreground object, text, logo, watermark, border, human object, extra limb, clipped feature or artificial cutout edge.
```

Original-resolution review then found that branch too small to read. A morphology-focused regeneration produced `exec-921f5618-25e5-4f28-b60b-6692ea8e7e95.png`. The following positioning correction produced `exec-dcb26feb-46cc-4bd8-ba7c-95f7213cf920.png`:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Thorny Devil cover final responsive correction
Input image: edit the supplied 1536 × 1024 image.
Primary request: Preserve the same detailed thorny devil exactly, but translate the complete animal about 65 source pixels left and 45 source pixels upward, and reduce its linear size by only about 6 percent. Target the conservative complete-animal boundary x=1060–1350 and y=350–470. Keep the animal horizontally broad and readable, approximately 290 pixels wide and 120 pixels tall. Seamlessly reconstruct the small revealed patch of red sand.
Exact subject invariants: exactly one complete left-facing Moloch horridus; retain the broad flattened ground-hugging body, blunt true head, paired curved supraocular spines, rounded spiny nuchal hump, dense conical spines, short splayed legs, all four sand-contacting feet, moderately short low tail, color pattern, pose, anatomy, focus, sharpness and lighting. Uniform scale plus translation only.
Exact scene invariants: preserve all sky, horizon, red sand, low sand rise, distant vegetation, lighting, camera, color, broad quiet left and lower fields, and exact 1536 × 1024 canvas. Do not add, remove, move or reshape any plant, rock, track or bright object outside the immediately vacated sand.
Constraints: the snout must begin no farther left than x=1060; the tail tip must end no farther right than x=1350; highest spine must remain below y=350 only if the visible silhouette still stays within the target; every foot and the contact shadow must end above y=470. Exactly one animal, no clipped feature, ghost, duplicate, extra limb, extra tail, text, logo, watermark or border.
Avoid: enlarging the animal, moving it right or down, making it tiny or blurry, high curled tail, long-legged generic lizard, horned toad, bearded dragon, iguana, fantasy anatomy, close portrait or centered subject.
```

That output moved too far left. The subsequent horizontal correction produced `exec-ac4f615f-18b9-4692-9e63-8775e9dbf915.png` but left the subject too low. The accepted `exec-436aa4a6-9e66-4185-8a0d-6463b3ce9888.png` used this final vertical correction:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Thorny Devil cover final vertical correction
Input image: edit the supplied 1536 × 1024 image.
Primary request: Move the entire thorny devil and its contact shadow upward by about 90 source pixels and rightward by about 30 source pixels. Preserve its current size exactly. Target the conservative complete-animal boundary x=1060–1360 and y=335–445. Seamlessly reconstruct only the vacated red sand.
Non-negotiable placement: put the animal in the horizontal red-sand strip immediately below the distant vegetation, clearly higher in the frame than it is now. The highest back spine must be near y=335–340. The lowest foot and contact shadow must finish by y=445. The snout must start at or right of x=1060. The tail tip must finish at or left of x=1360. Keep the subject approximately 300 pixels wide and 105 pixels tall.
Exact subject invariants: exactly one complete left-facing Moloch horridus; preserve the same broad flattened ground-hugging body, blunt true head, paired curved supraocular spines, rounded spiny nuchal hump, dense conical spines, short splayed legs, all four sand-contacting feet, moderately short low tail, color pattern, pose, anatomy, proportions, scale, focus, sharpness and lighting. Translation only. No redesign and no scale change.
Exact scene invariants: preserve the exact 1536 × 1024 canvas, sky, horizon, distant vegetation, red-sand rise, lighting, camera, color and broad quiet left/lower fields. Preserve every scene feature outside the animal and immediately vacated sand as closely as possible. Do not add, remove, move, brighten or reshape any plant, rock, track or object.
Avoid: leaving the animal at its current low position; moving down or left; enlarging or shrinking; making it tiny or blurry; high curled tail; long-legged generic lizard; horned toad; bearded dragon; iguana; fantasy anatomy; centered subject; extra limb; extra tail; duplicate; ghost; text; logo; watermark; border.
```

Review used the conservative boundary recorded below rather than assuming that a generated output matched its requested box exactly.

### 02 · Full-body diagnostic profile

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Thorny Devil morphology gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a scientifically grounded natural-history photograph of exactly one complete adult thorny devil (Moloch horridus) in a clear three-quarter side profile on red sand in generalized arid inland Australia.
Subject accuracy: Broad flattened body, small blunt head, short splayed limbs, short tapering tail, dense conical spines, paired curved supraocular spines, a prominent spined nuchal hump, mottled ochre, tan, rust and dark-brown camouflage. It must not resemble a horned lizard, bearded dragon, iguana, chameleon, dinosaur or fantasy animal.
Composition: Show the complete animal, every limb, visible foot and tail tip with generous real sand around the silhouette. Keep diagnostic anatomy easy to inspect.
Style: Photorealistic museum-grade field portrait with restrained color, natural scale texture and soft daylight.
Scientific boundary: Qualitative external morphology only; no calibrated length, weight, sex, age, locality or reliable fine-spine or digit count.
Constraints: exactly one complete animal; no prey, text, ruler, labels, arrows, logo, watermark, border, clipped anatomy, oversized horns, bone or metal spikes, fantasy, CGI, illustration or painting.
```

### 03 · Rainwater touching the skin

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Thorny Devil water-collection gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show exactly one complete thorny devil (Moloch horridus) on naturally rain-darkened red sand just after a light shower, with small realistic water beads touching parts of the spined dorsal and lateral surface.
Subject accuracy: Preserve the broad flattened body, blunt head, supraocular spines, nuchal hump, short limbs, full tail and mottled desert coloration.
Composition: Three-quarter view with the whole animal, four limbs, feet and tail tip inside generous habitat margins.
Style: Photorealistic field-documentary wildlife image in soft overcast light; subtle water and damp granular sand.
Scientific boundary: Do not visualize hidden capillary channels, internal flow or absorption. The frame shows contact with water only.
Constraints: exactly one complete animal; no standing flood, pouring stream, diagram, arrows, glowing paths, transparent skin, cutaway, text, logo, watermark, border, cropped anatomy, other animal, fantasy, CGI, illustration or painting.
```

### 04 · Feeding beside an ant trail

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Thorny Devil feeding gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a natural-history action photograph of exactly one complete thorny devil (Moloch horridus) paused beside a sparse trail of tiny ants on red sand, lowering its blunt head and extending only a short natural tongue toward the nearest ant.
Subject accuracy: Broad flattened spined body, paired supraocular spines, nuchal hump, short limbs and complete tail; ants remain small relative to the lizard and cannot be assigned to a precise species.
Composition: Low three-quarter side view; keep the full lizard, feet, tongue and tail tip visible with open sand around them.
Style: Photorealistic restrained wildlife documentary image with natural scale, sand and insect detail.
Scientific boundary: A single reconstructed feeding instant; it cannot prove capture, ingestion, diet proportion, daily intake or locality.
Constraints: exactly one complete lizard; only a sparse small ant trail; no giant insects, prey pile, long chameleon tongue, open jaws, blood, text, logo, watermark, border, cropped anatomy, other vertebrate, fantasy, CGI, illustration or painting.
```

The accepted frame adds this targeted correction:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas species gallery feeding reconstruction
Input images: Image 1 is the edit target
Primary request: shorten only the visible pink tongue so it projects a small natural distance from the mouth and just touches the nearest ant; reduce every ant to about half its current size while preserving their natural trail
Constraints: keep the thorny devil's identity, anatomy, full-body pose, spines, feet, tail, lighting, focus, sand, spinifex, camera, composition, and 3:2 canvas unchanged; exactly one lizard; no extra insects; no text, logo, watermark, border, fantasy anatomy, blood, or prey inside the mouth
```

### 05 · Lowered head and nuchal hump

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Thorny Devil defensive-posture gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show exactly one complete thorny devil (Moloch horridus) on open red sand with its true head lowered naturally so the rounded spined nuchal hump is conspicuous above it.
Subject accuracy: Keep the hump as a normal spined structure without eyes or a literal second face. Preserve the broad body, short limbs, complete feet and full tail.
Composition: Three-quarter view with generous real habitat around the entire silhouette and no predator in the scene.
Style: Photorealistic sober natural-history reconstruction, soft desert daylight and restrained earth colors.
Scientific boundary: The posture can display the structure but cannot prove that a predator mistook it for a head or that the response succeeded.
Constraints: exactly one complete animal; no second head, face on the hump, predator, attack, blood, text, labels, arrows, logo, watermark, border, cropped anatomy, fantasy, CGI, illustration or painting.
```

### 06 · Digging beside a sand burrow

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Thorny Devil nesting gallery image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show exactly one complete stout adult-appearing thorny devil (Moloch horridus) using its forefeet to move loose red sand beside one small natural burrow entrance in generalized arid inland Australia.
Subject accuracy: Broad spined body, blunt head, supraocular spines, nuchal hump, short limbs and complete tail; preserve plausible ground contact and a shallow natural opening.
Composition: Wide three-quarter side view with the full animal, every limb, feet, tail tip and burrow rim inside the frame.
Style: Photorealistic wildlife-documentary reconstruction with realistic loose sand, sparse spinifex and natural daylight.
Scientific boundary: Body shape and digging do not diagnose sex or gravidity and do not establish nest use, tunnel depth, clutch size or incubation time.
Constraints: exactly one complete animal and one small opening; no eggs, hatchlings, cutaway, giant tunnel, text, ruler, labels, arrows, logo, watermark, border, cropped anatomy, fantasy, CGI, illustration or painting.
```

## Cover full-subject geometry

Frame 01 uses focal point `{ x: 0.872, y: 0.301 }`. Original-resolution inspection of the compressed source PNG and decoded runtime WebP produced the conservative outward-rounded complete-animal boundary `B = [1050, 305, 1325, 410]` in source pixels. It includes the snout, head and back spines, all four limbs and visible feet, the contact-shadow edge used for review, and the tail tip. The 275×105 source-pixel subject remains readable without entering the interface components measured below.

- Boundary center: `(1187.5, 357.5)`; its horizontal center is `77.31%` of source width.
- Left 40 percent: `x=0..614`; the reviewed subject starts 436 source pixels to its right.
- Requested quiet left 45 percent: `x=0..691`; the reviewed subject starts 359 source pixels to its right.
- Source-edge background: 1050 pixels left, 211 right, 305 top and 614 bottom.
- Source PNG SHA-256: `fc8100a4f0fbd6ba9c0775db2002d29c626e1a71195c3f5415ea17c5380770ee`.
- Runtime cover SHA-256: `3a49e9ca0dd36d2a13a30e5bf4f6306faacdac1d79c9423bce98cd5454de0213`.

The calculation matches the registered case in `tests/hero-carousel.test.mjs`. It projects `B` through the current `cover` crop at six viewports, then applies each animation endpoint around the viewport center. Values below round to 0.1 CSS pixel. `T/R/B/L` means clearance to the top, right, bottom and left viewport edges.

| Viewport | State | T/R/B/L clearance, CSS px | Minimum | Result |
| --- | --- | --- | --- | --- |
| `320×760` | settled | `226.4 / 51.6 / 455.7 / 64.3` | `51.6` | pass |
| `320×760` | initial-from | `220.2 / 47.3 / 458.7 / 60.4` | `47.3` | pass |
| `320×760` | enter-forward-from | `222.5 / 32.9 / 457.6 / 77.9` | `32.9` | pass |
| `320×760` | leave-forward-to | `224.1 / 62.8 / 456.8 / 50.0` | `50.0` | pass |
| `320×760` | enter-backward-from | `222.5 / 64.9 / 457.6 / 45.9` | `45.9` | pass |
| `320×760` | leave-backward-to | `224.1 / 37.2 / 456.8 / 75.6` | `37.2` | pass |
| `390×760` | settled | `226.4 / 60.6 / 455.7 / 125.3` | `60.6` | pass |
| `390×760` | initial-from | `220.2 / 55.2 / 458.7 / 122.5` | `55.2` | pass |
| `390×760` | enter-forward-from | `222.5 / 37.7 / 457.6 / 143.1` | `37.7` | pass |
| `390×760` | leave-forward-to | `224.1 / 74.2 / 456.8 / 108.7` | `74.2` | pass |
| `390×760` | enter-backward-from | `222.5 / 76.7 / 457.6 / 104.1` | `76.7` | pass |
| `390×760` | leave-backward-to | `224.1 / 43.0 / 456.8 / 139.9` | `43.0` | pass |
| `1366×768` | settled | `228.3 / 187.6 / 446.3 / 933.8` | `187.6` | pass |
| `1366×768` | initial-from | `222.1 / 167.8 / 448.8 / 943.8` | `167.8` | pass |
| `1366×768` | enter-forward-from | `224.4 / 107.0 / 447.9 / 1008.4` | `107.0` | pass |
| `1366×768` | leave-forward-to | `226.0 / 234.9 / 447.3 / 882.9` | `226.0` | pass |
| `1366×768` | enter-backward-from | `224.4 / 243.6 / 447.9 / 871.8` | `224.4` | pass |
| `1366×768` | leave-backward-to | `226.0 / 125.6 / 447.3 / 992.2` | `125.6` | pass |
| `1920×900` | settled | `266.9 / 263.8 / 501.9 / 1312.5` | `263.8` | pass |
| `1920×900` | initial-from | `259.5 / 235.9 / 504.0 / 1326.6` | `235.9` | pass |
| `1920×900` | enter-forward-from | `262.3 / 150.3 / 503.2 / 1417.3` | `150.3` | pass |
| `1920×900` | leave-forward-to | `264.1 / 330.1 / 502.7 / 1241.0` | `264.1` | pass |
| `1920×900` | enter-backward-from | `262.3 / 342.3 / 503.2 / 1225.3` | `262.3` | pass |
| `1920×900` | leave-backward-to | `264.1 / 176.5 / 502.7 / 1394.6` | `176.5` | pass |
| `2560×900` | settled | `265.5 / 351.7 / 459.5 / 1750.0` | `265.5` | pass |
| `2560×900` | initial-from | `258.1 / 314.5 / 459.9 / 1768.8` | `258.1` | pass |
| `2560×900` | enter-forward-from | `260.9 / 200.5 / 459.7 / 1889.8` | `200.5` | pass |
| `2560×900` | leave-forward-to | `262.8 / 440.1 / 459.6 / 1654.6` | `262.8` | pass |
| `2560×900` | enter-backward-from | `260.9 / 456.5 / 459.7 / 1633.8` | `260.9` | pass |
| `2560×900` | leave-backward-to | `262.8 / 235.3 / 459.6 / 1859.5` | `235.3` | pass |
| `3840×900` | settled | `262.8 / 527.5 / 374.7 / 2625.0` | `262.8` | pass |
| `3840×900` | initial-from | `255.4 / 471.8 / 371.6 / 2653.2` | `255.4` | pass |
| `3840×900` | enter-forward-from | `258.2 / 300.7 / 372.8 / 2834.6` | `258.2` | pass |
| `3840×900` | leave-forward-to | `260.0 / 660.2 / 373.5 / 2482.0` | `260.0` | pass |
| `3840×900` | enter-backward-from | `258.2 / 684.7 / 372.8 / 2450.6` | `258.2` | pass |
| `3840×900` | leave-backward-to | `260.0 / 353.0 / 373.5 / 2789.2` | `260.0` | pass |

All 36 viewport-edge checks exceed the 24 CSS pixel gate. The minimum is 32.9 CSS pixels at the right edge of the `320×760` `enter-forward-from` endpoint.

The composed-area regression uses the current component rectangles without extending them to the viewport edges. It applies a separate 24 CSS pixel separation gate to each rectangle at all six animation endpoints.

| Viewport | Copy component | Carousel panel component | Minimum copy clearance | Minimum panel clearance |
| --- | --- | --- | ---: | ---: |
| `320×760` | `x=0..320, y=390..682` | `x=32..302, y=92..188` | `85.7` | `32.2` |
| `390×760` | `x=0..390, y=390..682` | `x=102..372, y=92..188` | `85.7` | `32.2` |
| `1366×768` | `x=0..832, y=0..768` | `x=1038..1279, y=430..663` | `39.8` | `108.3` |
| `1920×900` | `x=0..1127, y=0..900` | `x=1386..1626, y=560..795` | `98.3` | `161.9` |
| `2560×900` | `x=0..1447, y=0..900` | `x=1706..1946, y=560..795` | `186.8` | `119.5` |
| `3840×900` | `x=0..2087, y=0..900` | `x=2346..2586, y=560..795` | `363.6` | `32.8` |

The smallest composed-component separation is 32.2 CSS pixels, below the mobile carousel panel during `initial-from`. Original-resolution inspection found no second animal or isolated bright object in the quiet left field. Both the source PNG and runtime WebP retain the complete silhouette and the same geometry.

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/thorny-devil/*-source.png
npm run convert:webp -- src/assets/source/species/thorny-devil/*-source.png
```

All twelve repository files decode as one opaque sRGB frame at 1536 × 1024. Runtime sizes and source-to-runtime PSNR after conversion follow. Frame 01 contains 975,083 source bytes and 182,046 runtime bytes; the table expresses sizes in 1024-byte KB to match the existing asset records.

| Frame | Source PNG | Runtime WebP | PSNR |
| --- | ---: | ---: | ---: |
| 01 | 952.2 KB | 177.8 KB | 37.2369 dB |
| 02 | 1040.8 KB | 253.7 KB | 35.6118 dB |
| 03 | 834.6 KB | 238.6 KB | 35.1959 dB |
| 04 | 966.7 KB | 289.3 KB | 35.2565 dB |
| 05 | 967.1 KB | 227.5 KB | 35.7909 dB |
| 06 | 1007.8 KB | 266.5 KB | 35.1151 dB |

## Accepted hashes

The taxonomy regression reads these rows and rejects changed source or runtime pixels until a new original-resolution review updates the record.

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `fc8100a4f0fbd6ba9c0775db2002d29c626e1a71195c3f5415ea17c5380770ee` | `3a49e9ca0dd36d2a13a30e5bf4f6306faacdac1d79c9423bce98cd5454de0213` |
| 02 | `813661239a74e68b0835ceb234ea07cc110ee376c1890aba8b582e12b867347c` | `fa3970b304896ece8ab0b912969a3c1bb3bf29e49376479471204db4efb746fc` |
| 03 | `1ec7bb67d4af9ed69b189639862f94d57b4eb106da1ab38b9f4ddaa055115d03` | `9abb6fa75f16f8f3e4ffdf3f32d00f79b37d88e4f4e1bae418d410ccebef0efa` |
| 04 | `5cdee1fc16a6eb727291798e6c65462b45fc7315c1323b38df065789a517cd06` | `db983bbd0a2f9650af9cc773cd7df257222783ab1e1ed4c2ee1023319ec041ef` |
| 05 | `7a1f54ef02d720d2204b9750394bc1c4af09b05148465a388ab1252354912f23` | `1399a89a931dd2bae3062c5bae017e29b95dfd78e766099be58bd64aa13d13a9` |
| 06 | `7c36ff766b87e02c20a4879b4548a6ab8ae3d91a57b854607b16dfe92b9c3cad` | `7aba4b3748f1a8530cf66b5239edebacd489b508b7b4beb0d632a8f840c0384f` |

Static inspection used the original source PNGs and decoded runtime WebPs. No GUI or headless browser was used.
