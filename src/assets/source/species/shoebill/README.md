# Shoebill image set

Six original 1536 × 1024 source PNGs for the _Balaeniceps rex_ profile. Codex's built-in image generation tool produced the images on 2026-09-04. Frames 02, 04, 05 and 06 passed visual review on their stored base outputs. Frame 01 needed a much smaller, more distant bird for responsive cover crops. Frame 03 needed more real habitat beyond its left wingtip. One correction produced the accepted version of each frame. TinyPNG compressed the accepted source PNGs in place, and the repository `cwebp` workflow generated the runtime copies.

## Files

| Frame | Source PNG | Runtime WebP | Purpose |
| --- | --- | --- | --- |
| 01 | `01-papyrus-wetland-adult-cover-source.png` | `01-papyrus-wetland-adult-cover.webp` | Wide wetland cover with one distant adult and quiet left-side water |
| 02 | `02-full-body-diagnostic-profile-source.png` | `02-full-body-diagnostic-profile.webp` | Full-body external morphology |
| 03 | `03-collapse-strike-source.png` | `03-collapse-strike.webp` | Forward collapse strike with both wings open for balance |
| 04 | `04-fish-prey-source.png` | `04-fish-prey.webp` | One adult holding one generalized fish prey item |
| 05 | `05-nest-cooling-source.png` | `05-nest-cooling.webp` | One adult pouring water onto one nestling |
| 06 | `06-distance-wetland-monitoring-source.png` | `06-distance-wetland-monitoring.webp` | Two distant monitors observing one shoebill across open water |

## Accepted observations and limits

Frame 01 shows exactly one complete adult-appearing shoebill standing in shallow water on the right side of a broad misty freshwater marsh. Its large shoe-shaped bill, pale eye, small ragged crest, gray plumage, folded wings, tail, long legs and feet remain inside real habitat margins. The left side contains only low-detail water, low vegetation and mist. The frame cannot identify a real wetland, individual, sex, age, body size, season, water depth, territory or duration of the posture.

Frame 02 shows exactly one complete adult-appearing shoebill in three-quarter side view on wet floating vegetation. The image supports the visible combination of a broad hooked bill, pale eye, short ragged crest, layered gray plumage, long dark legs and separated long toes. It cannot supply a calibrated bill length, height, wingspan or weight, or establish sex, age, locality or individual identity.

Frame 03 shows exactly one complete shoebill pitched forward with its bill in shallow water, both wings open, one support leg and foot clearly distinguishable, and a modest splash around the bill. The accepted correction leaves real marsh beyond both wingtips. A still reconstruction cannot prove the preceding stalk, the motion or speed of a collapse strike, water depth, a prey target, contact, capture success, the obscured leg's placement or subsequent prey handling.

Frame 04 shows exactly one complete shoebill holding exactly one intact medium-sized fish crosswise near the tip of its bill. The generated fish can be identified only as a generalized finned fish. The frame cannot establish its species, whether it was captured alive, the capture location, prey frequency or diet proportion, or whether swallowing succeeded.

Frame 05 shows exactly one complete adult-appearing shoebill beside one small gray downy chick on a low vegetation nest platform. A visible stream runs from the adult's tilted bill toward the chick. The still cannot verify where the water came from, its volume or temperature, a cooling effect, the chick's age, parentage, condition or survival, or the sequence and result of the behavior.

Frame 06 shows exactly two adult people on a distant dry bank, one using binoculars and one writing in a notebook, separated by a broad water channel from exactly one shoebill on a low vegetation platform. The frame cannot identify the people as community monitors, establish a named project or site, measure the separation distance, prove that the platform is an occupied nest, document a survey protocol or demonstrate a conservation outcome.

No frame records a field-observed event, supplies a calibrated measurement or proves population condition or conservation status. The people in frame 06 do not represent identifiable real people. The accepted files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

Scientific source boundaries are documented in [the Shoebill research brief](../../../../../docs/research/shoebill-profile.md).

## Generation outputs

The generator stored every listed output under `/Users/chris.li/.codex/generated_images/01a06adb-b113-7961-9897-2ad11144fc62/`. Codex copied only the accepted outputs into the repository before compression.

| Call | Generator output | Decision |
| --- | --- | --- |
| 01 base | `exec-917b99ee-e46b-4405-af49-6f84fb02180d.png` | Rejected because the bird was too tall for the responsive hero crops |
| 01 correction | `exec-22ed6565-db5c-4f6b-b6af-c1dccd8abdc2.png` | Accepted with a smaller, more distant complete bird and broader quiet marsh |
| 02 base | `exec-aff3c4d4-6941-46ed-8551-287baa94cb56.png` | Accepted first pass |
| 03 base | `exec-c008a5de-5c43-4b49-ac72-40d1201772f6.png` | Rejected because the left wingtip lacked a safe source-edge margin |
| 03 correction | `exec-0d940e53-0e83-48de-a6a8-088db0cde96c.png` | Accepted after shrinking and centering the action while preserving the pose |
| 04 base | `exec-d1001743-8b28-4b29-80b5-6a203e960292.png` | Accepted first pass |
| 05 base | `exec-7ea0bbf6-8f46-4be3-90ee-50f836ca3051.png` | Accepted first pass |
| 06 base | `exec-6f9aca65-59af-49d4-84a3-e3960f7c03b8.png` | Accepted first pass |

## Effective prompt set

### 01 · Distant adult in a freshwater marsh

The rejected base request was:

```text
Create a 3:2 landscape, 1536×1024, photorealistic natural-history wildlife photograph for a website hero cover. One adult shoebill (Balaeniceps rex) stands motionless in a generalized East-Central African freshwater swamp mosaic at soft overcast dawn. The entire bird must be visible from ragged nuchal crest through tail, both long dark legs, and every extremely long separate unwebbed toe, with real wet vegetation and shallow water surrounding its silhouette. Anatomical priorities: very large broad bulbous shoe-shaped bill, mottled pale yellow-gray bill with a sharp downcurved terminal hook, pale eye, blue-gray plumage, long legs, compact ragged crest; it must not look like a pelican, heron, or stork and must have no throat pouch. Composition is strict: place the small complete bird on the right, with its full visible boundary approximately x=990–1160 and y=385–665 on a 1536×1024 canvas; keep the left 45% calm, low-detail negative space of muted reeds, open water, and light mist for white headline text. Preserve generous real background on all sides of the bird. Eye-level documentary camera, restrained slate gray and green palette, realistic diffuse light, fine feather detail, subtle reflection. No text, labels, borders, watermark, frame, people, buildings, extra birds, eggs, prey, clipped anatomy, bokeh circles, dramatic fantasy light, or oversaturated colors.
```

The accepted correction used this stronger wide-establishing request:

```text
Create a 3:2 landscape, 1536×1024, photorealistic long-lens environmental wildlife photograph for an ultrawide responsive website hero. This is an EXTREME WIDE ESTABLISHING VIEW of a vast quiet East-Central African freshwater marsh at misty overcast dawn. Exactly one adult shoebill (Balaeniceps rex) appears SMALL AND DISTANT on the right side. Strict geometry is the top priority: the entire bird, from crest through bill, folded wings, tail, both legs and all toes, must fit inside a compact imaginary box about 240 pixels wide by 285 pixels tall on the 1536×1024 canvas; target that box at x=1030–1270 and y=365–650. The bird must occupy no more than 28% of canvas height. Preserve at least 300 pixels of real marsh background above and below it and ample background to its right. Keep x=0–700 as quiet, low-detail open water, muted low reeds and mist for white headline copy. Do not make a portrait or close-up. Despite the distance, preserve recognizable anatomy: massive broad bulbous shoe-shaped mottled pale yellow-gray bill with sharp hooked tip, pale eye, gray plumage, slight ragged crest, long dark legs and very long separate unwebbed toes; no throat pouch. Sober gray-green palette, diffuse light, subtle water reflection, documentary realism. No text, watermark, border, people, buildings, extra birds, prey, nest, clipped anatomy, foreground reeds crossing the bird, bokeh circles, fantasy light, or oversaturation.
```

The accepted pixels do not need to match the prompt's target box literally. Review used the conservative measured boundary in the cover geometry section.

### 02 · Full-body diagnostic profile

```text
Create a 3:2 landscape, 1536×1024, photorealistic museum-grade natural-history photograph. Exactly one adult shoebill (Balaeniceps rex) in a clear three-quarter side profile, standing on floating wetland vegetation beside shallow water in an East-Central African papyrus-and-reed swamp mosaic. Show the complete animal with generous margins: whole ragged crest, tail, both wings folded, both long dark legs, feet, and every very long separate unwebbed toe visible. Anatomical priorities: enormous broad deep shoe-shaped bill with mottled pale yellow-gray surface and a distinct sharp terminal hook, pale eye, blue-gray feathers, heavy head, long legs; no pelican throat pouch and no webbed feet. Place the bird slightly right of center and make diagnostic anatomy easy to inspect, while retaining an environmental context. Natural soft daylight, high fidelity feathers, bill texture, vegetation and water, sober scientific-documentary mood. No text, diagram, labels, watermark, border, extra animals, people, nests, prey, blood, clipped feet, clipped bill, stylization, fantasy color, or studio backdrop.
```

### 03 · Collapse strike

```text
Create a 3:2 landscape, 1536×1024, photorealistic high-speed natural-history photograph of exactly one adult shoebill (Balaeniceps rex) performing its characteristic forward “collapse” strike into very shallow swamp water from a flat floating vegetation platform. Freeze the instant as the bird lunges bill-first, body pitched forward and both broad wings spread for balance; the entire bird must remain visible, including both wingtips, ragged crest, massive shoe-shaped mottled yellow-gray bill with hooked tip, long dark legs, feet, and long separate unwebbed toes. Show a modest natural splash and bent vegetation, but no visible prey and no blood. Generalized East-Central African freshwater marsh with low papyrus and sedges, bright natural overcast light, accurate gray plumage, documentary realism, enough surrounding habitat to understand the behavior. It must not resemble a pelican or heron and must have no throat pouch. No text, labels, watermark, border, extra birds, fish, people, nests, severed anatomy, clipped wings, clipped feet, excessive splash, cinematic explosions, fantasy, or oversaturation.
```

The base frame left too little background beyond the left wingtip. The accepted frame adds this targeted edit:

```text
Use case: precise object edit of the supplied 1536×1024 shoebill collapse-strike photograph. Keep exactly the same single adult shoebill, the same forward bill-first strike pose, spread wings, modest splash, floating vegetation, camera viewpoint, overcast light, photorealistic style, anatomy and canvas dimensions. Uniformly shrink the complete bird and its immediate splash to about 78 percent of the current size and reposition the whole action slightly toward the center so every feature has generous real habitat around it. Require at least 120 source pixels of continuous sky or wetland background beyond the left wingtip and at least 100 pixels beyond the right wingtip; keep crest, bill, both entire wings, both wingtips, long legs, feet and every visible toe complete. Reconstruct newly exposed background as coherent papyrus-and-sedge marsh and shallow water matching the original depth, light and texture. Do not change the species, pose, wing-feather arrangement, bill shape, number of birds, or add prey. No text, watermark, border, extra bird, fish, blood, duplicate limb, clipped anatomy, throat pouch, webbed feet, fantasy, or oversaturation.
```

### 04 · One generalized fish prey item

```text
Create a 3:2 landscape, 1536×1024, photorealistic natural-history photograph. Exactly one adult shoebill (Balaeniceps rex) stands in shallow water on a low floating vegetation mat while holding exactly one medium elongated fish crosswise near the tip of its enormous bill, an honest generalized prey depiction rather than a claim of a precisely identifiable fish species. The full shoebill and the full fish must be visible with generous margins. Show its pale eye, small ragged nuchal crest, blue-gray plumage, very large broad deep shoe-shaped mottled yellow-gray bill with sharp terminal hook, both long dark legs, feet, and long separate unwebbed toes. The fish is intact and wet; no injury, blood, torn flesh, or swallowing. Generalized East-Central African freshwater swamp mosaic with papyrus, reeds, floating plants and open shallow channel; natural subdued morning light; rigorous wildlife documentary realism. No text, labels, watermark, border, people, nest, eggs, chicks, extra birds, extra fish, clipped anatomy, pelican pouch, webbed feet, fantasy, or oversaturation.
```

### 05 · Water carried to one nestling

```text
Create a 3:2 landscape, 1536×1024, photorealistic natural-history documentary photograph based on observed shoebill parental cooling behavior. Exactly one adult shoebill (Balaeniceps rex) stands beside a low floating vegetation nest at water level in an East-Central African freshwater wetland, gently tilting its enormous bill so a small clear stream of carried water pours onto exactly one small gray downy chick in the nest during warm midday light. Show the complete adult, complete chick, and entire nest with generous margins; no other adult, no eggs. Anatomical accuracy: massive broad shoe-shaped mottled pale yellow-gray bill with sharp hooked tip, pale eye, blue-gray adult plumage, ragged crest, long dark legs and long separate unwebbed toes; chick has proportionally large early shoebill bill and gray down. Calm caregiving behavior, natural sedges and papyrus, no human objects. No text, labels, watermark, border, extra animals, food, blood, distress, fantasy, sentimental staging, clipped anatomy, pelican pouch, or webbed feet.
```

### 06 · Distant wetland monitoring

```text
Create a 3:2 landscape, 1536×1024, photorealistic conservation-documentary photograph in a generalized central African floodplain wetland, without identifying a real site, project, or person. Exactly two adult local wetland field monitors stand together on a dry raised bank in the distant left background, wearing plain neutral field clothing without uniforms, logos, or badges; one holds binoculars and the other records observations in a paper notebook. Across a broad open shallow-water channel on the right, exactly one adult shoebill (Balaeniceps rex) stands beside a low floating vegetation nest. Preserve a conspicuously large respectful buffer of open water between people and bird. The shoebill must be recognizable by its gray body, massive broad shoe-shaped bill and long legs, but is calm and undisturbed. Wide environmental composition emphasizing distance, wetland habitat and low-impact observation; realistic papyrus, sedges, floating plants and natural late-afternoon light; sober wildlife-reportage color. No text, logos, signs, vehicles, buildings, boats, weapons, touching or approaching the bird, extra people, extra birds, eggs, chicks, blood, uniforms, fantasy, posed tourism, or cinematic spectacle.
```

## Cover full-subject geometry

Image 01 uses the committed focal point `{ x: 0.77, y: 0.51 }`. Original-resolution inspection of the compressed source PNG and decoded runtime WebP produced the conservative outward-rounded bird boundary `B = [1055, 415, 1195, 625]` in source pixels: left, top, right and bottom. The boundary includes the crest, full bill, folded wings, tail, both legs, feet and long toes. It excludes the water reflection because the reflection is not part of the complete animal.

- Boundary center: `(1125, 520)`; its horizontal center is `73.24%` of the 1536-pixel source width.
- Left 40 percent: `x=0..614`; the bird starts at `x=1055`, leaving 441 source pixels between the copy zone and the reviewed boundary.
- Requested quiet left 45 percent: `x=0..691`; the reviewed boundary begins another 364 source pixels to the right.
- Source-edge background: 1055 pixels left, 341 right, 415 top and 399 bottom around the reviewed boundary.
- Runtime cover SHA-256: `384e0758e7b41f817603a6e57e363c2724b51f5cb9fbeb9f2fcd3fdba7246064`.

The calculation matches the corresponding case in `tests/hero-carousel.test.mjs`. For each viewport, the base cover scale is `s0 = max(viewportWidth / 1536, viewportHeight / 1024)`. The visible source dimensions equal the viewport dimensions divided by `s0`; crop origins apply the committed percentage object position. The calculation projects `B` through that crop, then applies each animation scale around the viewport center and adds `viewportWidth × translateX`. Values below round to 0.1 CSS pixel. `T/R/B/L` lists clearance from the complete boundary to the four viewport edges.

| Viewport | Visible source crop at settled state |
| --- | --- |
| `320×760` | `x=850.7..1281.9, y=0..1024` |
| `390×760` | `x=778.1..1303.6, y=0..1024` |
| `1366×768` | `x=0..1536, y=81.8..945.4` |
| `1920×900` | `x=0..1536, y=155..875` |
| `2560×900` | `x=0..1536, y=246.8..786.8` |
| `3840×900` | `x=0..1536, y=338.6..698.6` |

| Viewport | Static state | Transform | T/R/B/L clearance, CSS px | Minimum | Result |
| --- | --- | --- | --- | --- | --- |
| `320×760` | settled | `scale(1)` | `308.0 / 64.5 / 296.1 / 151.6` | `64.5` | pass |
| `320×760` | initial-from | `scale(1.04)` | `305.1 / 60.7 / 292.8 / 151.3` | `60.7` | pass |
| `320×760` | enter-forward-from | `translateX(5%) scale(1.025)` | `306.2 / 46.1 / 294.0 / 167.4` | `46.1` | pass |
| `320×760` | leave-forward-to | `translateX(-4%) scale(1.015)` | `306.9 / 75.9 / 294.9 / 138.7` | `75.9` | pass |
| `320×760` | enter-backward-from | `translateX(-5%) scale(1.025)` | `306.2 / 78.1 / 294.0 / 135.4` | `78.1` | pass |
| `320×760` | leave-backward-to | `translateX(4%) scale(1.015)` | `306.9 / 50.3 / 294.9 / 164.3` | `50.3` | pass |
| `390×760` | settled | `scale(1)` | `308.0 / 80.6 / 296.1 / 205.5` | `80.6` | pass |
| `390×760` | initial-from | `scale(1.04)` | `305.1 / 76.0 / 292.8 / 205.9` | `76.0` | pass |
| `390×760` | enter-forward-from | `translateX(5%) scale(1.025)` | `306.2 / 58.2 / 294.0 / 225.3` | `58.2` | pass |
| `390×760` | leave-forward-to | `translateX(-4%) scale(1.015)` | `306.9 / 94.5 / 294.9 / 190.1` | `94.5` | pass |
| `390×760` | enter-backward-from | `translateX(-5%) scale(1.025)` | `306.2 / 97.2 / 294.0 / 186.3` | `97.2` | pass |
| `390×760` | leave-backward-to | `translateX(4%) scale(1.015)` | `306.9 / 63.3 / 294.9 / 221.3` | `63.3` | pass |
| `1366×768` | settled | `scale(1)` | `296.3 / 303.3 / 284.9 / 938.2` | `284.9` | pass |
| `1366×768` | initial-from | `scale(1.04)` | `292.8 / 288.1 / 281.0 / 948.4` | `281.0` | pass |
| `1366×768` | enter-forward-from | `translateX(5%) scale(1.025)` | `294.1 / 225.5 / 282.5 / 1012.9` | `225.5` | pass |
| `1366×768` | leave-forward-to | `translateX(-4%) scale(1.015)` | `295.0 / 352.2 / 283.4 / 887.4` | `283.4` | pass |
| `1366×768` | enter-backward-from | `translateX(-5%) scale(1.025)` | `294.1 / 362.1 / 282.5 / 876.3` | `282.5` | pass |
| `1366×768` | leave-backward-to | `translateX(4%) scale(1.015)` | `295.0 / 242.9 / 283.4 / 996.7` | `242.9` | pass |
| `1920×900` | settled | `scale(1)` | `325.0 / 426.3 / 312.5 / 1318.8` | `312.5` | pass |
| `1920×900` | initial-from | `scale(1.04)` | `319.9 / 404.9 / 307.1 / 1333.1` | `307.1` | pass |
| `1920×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `321.8 / 316.9 / 309.1 / 1423.7` | `309.1` | pass |
| `1920×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `323.1 / 495.0 / 310.5 / 1247.3` | `310.5` | pass |
| `1920×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `321.8 / 508.9 / 309.1 / 1231.7` | `309.1` | pass |
| `1920×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `323.1 / 341.4 / 310.5 / 1400.9` | `310.5` | pass |
| `2560×900` | settled | `scale(1)` | `280.3 / 568.3 / 269.7 / 1758.3` | `269.7` | pass |
| `2560×900` | initial-from | `scale(1.04)` | `273.5 / 539.9 / 262.5 / 1777.5` | `262.5` | pass |
| `2560×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `276.0 / 422.5 / 265.2 / 1898.3` | `265.2` | pass |
| `2560×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `277.7 / 660.1 / 267.0 / 1663.1` | `267.0` | pass |
| `2560×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `276.0 / 678.5 / 265.2 / 1642.3` | `265.2` | pass |
| `2560×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `277.7 / 455.3 / 267.0 / 1867.9` | `267.0` | pass |
| `3840×900` | settled | `scale(1)` | `190.9 / 852.5 / 184.1 / 2637.5` | `184.1` | pass |
| `3840×900` | initial-from | `scale(1.04)` | `180.5 / 809.8 / 173.5 / 2666.2` | `173.5` | pass |
| `3840×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `184.4 / 633.8 / 177.5 / 2847.4` | `177.5` | pass |
| `3840×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `187.0 / 990.1 / 180.1 / 2494.7` | `180.1` | pass |
| `3840×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `184.4 / 1017.8 / 177.5 / 2463.4` | `177.5` | pass |
| `3840×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `187.0 / 682.9 / 180.1 / 2801.9` | `180.1` | pass |

All 36 full-subject checks exceed the 24 CSS pixel gate. The tightest result is 46.1 pixels at the right edge of the `320×760` `enter-forward-from` state. Static source inspection found no second animal or isolated bright object in the left 45 percent. The mobile carousel panel remains in the upper band above the bird, and the desktop copy and carousel panel cross only background outside the reviewed boundary. These checks use current CSS geometry and do not replace the hash-locked regression case.

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/shoebill/*-source.png
npm run convert:webp -- src/assets/source/species/shoebill/*-source.png
```

The accepted frame 03 correction was compressed and converted again after it replaced the rejected base file.

| Frame | Compressed PNG | Runtime WebP | PNG-to-WebP PSNR |
| --- | ---: | ---: | ---: |
| 01 | 839.6 KB | 45.8 KB | 41.4005 dB |
| 02 | 838.4 KB | 244.0 KB | 34.7508 dB |
| 03 | 834.2 KB | 178.9 KB | 37.0031 dB |
| 04 | 800.3 KB | 153.1 KB | 36.7921 dB |
| 05 | 893.0 KB | 261.7 KB | 35.1374 dB |
| 06 | 784.1 KB | 203.0 KB | 35.6660 dB |
| Total | 4,989.6 KB | 1,086.5 KB | n/a |

- The first TinyPNG batch reported 15,463.0 KB before compression, but that input set contained the frame 03 base that visual review later rejected. The accepted frame 03 correction was generated and compressed afterward, so this document does not claim an aggregate before-to-after percentage for the final accepted PNG set.
- The repository WebP conversion reduced the final 4,989.6 KB compressed PNG set to 1,086.5 KB, a further 78.2 percent reduction.
- `file` and ImageMagick identify all twelve accepted files as 1536 × 1024 sRGB, opaque, single-frame images. PNG and WebP basenames form six one-to-one pairs.
- Original-detail inspection covered every compressed PNG and decoded runtime WebP. Conversion introduced no missing bill tip, crest, wingtip, tail, leg, foot, toe, fish, chick, person or field item and no material content drift.
- Inspection confirmed one adult-appearing shoebill in each of frames 01 through 05, plus one chick in frame 05; two people and one shoebill in frame 06; one fish only in frame 04; and no person in frames 01 through 05. Frame 03 contains no visible prey. Frame 05 contains no egg or second adult. Frame 06 contains no egg, chick, logo, vehicle, weapon or contact between people and bird.
- Verification used static file inspection, project geometry and `view_image` at original detail. It did not use a GUI or headless browser.

## Accepted asset hashes

Hashes were computed with `shasum -a 256` after source compression and runtime conversion.

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `162b66a73150ff6b93ff7349fbbdfaf0a1dd8784bf69c8b501724ac1cbe0825c` | `384e0758e7b41f817603a6e57e363c2724b51f5cb9fbeb9f2fcd3fdba7246064` |
| 02 | `fb924857e6b7ab7375185f83523e09e1bfc60346cd80975804bb2ced6130882a` | `a81ccb2fa29ea86d628d39a83b37ae5b55ba993ad335243b259b152544c0b81c` |
| 03 | `919f214d232b082170a8add63e6f4b9c4d20b2a793767b0b2b0c4952b6f9b11e` | `93c6802d46d9ec57bef9823debfe29f3fa6f511ef581d152c4628c7b97a71335` |
| 04 | `5a30fe9b7df6844dfc7e7f0ed6f4a5c0b5c51333e5d4c2c352cf16f840b60367` | `94cb3cc83b33486b0f91d572b6aa757b3ee8d4c2712a140ee4d697e46c10ddbe` |
| 05 | `0aa6823123b631f1776a38e3fed9ffffb053f1b0c18e7f950bf1aa8b83a652df` | `a309b1f9860b416892e3001fdd77de4b4c61beee66d056a036ce99f72a419c6b` |
| 06 | `9f6e5559d58f50ba8b12bba9825241e2ea781aaa29344f264632f08085050736` | `f8bdfadb9b7a80318cc717c8a6d85c9285742a92e1efd3e6f21064f56657343e` |
