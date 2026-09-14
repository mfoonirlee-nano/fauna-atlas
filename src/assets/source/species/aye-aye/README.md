# Aye-aye image set

Six original 1536 × 1024 source PNGs for the _Daubentonia madagascariensis_ profile. Codex's built-in image generation tool produced the images on 2026-09-02. Frame 05 required a multi-pass hand-anatomy correction: the initial four-digit base became five digits, review then corrected the relative digit lengths and claws, and a final cleanup removed an extra digit introduced during that correction. TinyPNG compressed the accepted PNGs in place, and the repository WebP workflow generated the runtime copies.

## Files

| Frame | Source PNG                                   | Runtime WebP                           | Purpose                                           |
| ----- | -------------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| 01    | 01-night-rainforest-canopy-cover-source.png  | 01-night-rainforest-canopy-cover.webp  | Night-forest adult cover portrait                 |
| 02    | 02-full-body-diagnostic-profile-source.png   | 02-full-body-diagnostic-profile.webp   | Full-body external morphology                     |
| 03    | 03-percussive-tap-scanning-source.png        | 03-percussive-tap-scanning.webp        | Third-finger tap scanning                         |
| 04    | 04-middle-finger-larva-extraction-source.png | 04-middle-finger-larva-extraction.webp | Finger extraction through a gnawed opening        |
| 05    | 05-third-and-fourth-digit-closeup-source.png | 05-third-and-fourth-digit-closeup.webp | Five-digit hand and contrasting digits III and IV |
| 06    | 06-ramy-nut-gnawing-source.png               | 06-ramy-nut-gnawing.webp               | Hard-seed feeding beyond wood-boring prey         |

## Accepted observations and limits

Frame 01 shows one plausible adult on a broad branch in a humid Madagascar forest at night. The pale face, large bare ears, dark shaggy coat, pale guard hairs and long bushy tail remain readable. It does not document a field individual, exact locality, elevation, sex, age or population condition.

Frame 02 keeps one complete animal and the major external diagnostic combination in view. Perspective and overlap prevent a scientific count of every digit. Fur color, apparent body proportions and pose cannot supply measurements or establish the identity of a wild specimen.

Frame 03 reconstructs the contact phase of percussive tap scanning on intact wood. One hand grips while an elongated digit touches the search area, and one large ear remains visible. A still image cannot establish ear orientation, reveal a hidden cavity or prey, or measure tap interval, sound spectrum, detection distance or decision sequence.

Frame 04 shows one narrow digit continuing into a small gnawed opening with one pale larva visible inside the wood. It cannot establish the prey taxon, tunnel geometry, which digit handled every stage, extraction success or the share of this food in a wild diet.

Frame 05 shows exactly five connected primary digits. Digit III is the exceptionally thin digit; digit IV is the longest and thicker. The image does not expose internal joints, tendons, force or the radial sesamoid and cartilage of the pseudothumb. No sixth projecting digit appears.

Frame 06 shows one animal holding and opening one small hard seed. The image broadens the visual diet story beyond deadwood larvae, but pixels cannot confirm _Canarium madagascariensis_, seed maturity, the complete feeding sequence, nutrient intake or population-wide diet proportions.

No frame documents a field-observed event or proves conservation status. The accepted files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation outputs

The built-in generator saved its original outputs outside the repository under `/Users/chris.li/.codex/generated_images/01a06096-cd87-7302-80e8-f702ccfbaa0f/`. The accepted files were copied here before compression. An earlier frame 04 request stalled without returning an asset and was abandoned.

| Frame | Base generation                               | Accepted output                               |
| ----- | --------------------------------------------- | --------------------------------------------- |
| 01    | exec-0a387a18-b183-414f-880c-e7ca99858e1f.png | Base accepted                                 |
| 02    | exec-ef1c1e40-7b42-499f-88f0-7dbe87264be2.png | Base accepted                                 |
| 03    | exec-e361a6e6-72e7-4ab3-bd6a-9900a5c0040f.png | Base accepted                                 |
| 04    | exec-42b4d56a-21ad-4f08-b43c-2d38e4f9c54a.png | Base accepted                                 |
| 05    | exec-783dec59-a02c-4ee6-a48c-0eccd1be3863.png | exec-c0b5b027-67a1-4006-84af-ed9f6b6bec29.png |
| 06    | exec-60933799-b044-4e77-b7f3-0ffa091a78dd.png | Base accepted                                 |

Frame 05's first edit, `exec-44b77217-063c-4b54-94a9-fa7b542d910a.png`, restored five countable digits but left digit III longer than digit IV and the tips too blunt. Review attempts `exec-ca2a27c9-6ff0-4460-bbcf-24f0185607ce.png` and `exec-97500664-4460-483c-b203-2424e2fab65c.png` each showed six projecting digits and were not accepted as standalone assets. The final cleanup used the latter as input, removed the specific extra digit, thickened the longest digit IV and retained the thin digit III.

## Normalized final prompt set

### 01 · Adult in a night rainforest canopy

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aye-aye cover image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original natural-history photograph of exactly one adult Aye-aye, Daubentonia madagascariensis, on a broad branch in eastern Madagascar rainforest at night.
Scene/backdrop: Humid canopy with rough bark, lichen, dark leaves and a gap of cool blue forest haze; no enclosure or human structure.
Subject: One anatomically coherent adult with dark brown-black shaggy fur, pale-tipped guard hairs, a paler face, pinkish short muzzle, huge bare movable ears, yellow-orange eyes, black hands and feet, five primary digits, an exceptionally thin third digit, opposable big toes and a full bushy tail longer than the head-body length.
Composition/framing: Wide editorial landscape; animal in the middle-right facing left, complete tail and limbs inside the frame, calm negative space on the left.
Lighting/mood: Restrained moonlit canopy with soft natural fill, alert rather than frightening.
Constraints: One animal only; no text, labels, arrows, logo, signature, border or watermark.
Avoid: rodent, squirrel, rabbit, tarsier, ringed tail, exposed teeth, horror styling, extra or fused limbs, all fingers equally thin, fantasy glow, CGI, illustration, oversaturation or stock-photo gloss.
```

### 02 · Full-body diagnostic profile

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aye-aye morphology gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show exactly one adult Aye-aye in a natural side-three-quarter stance on a horizontal Madagascar forest branch at dusk.
Subject: Keep the whole body visible. Show dark shaggy guard hairs, pale face, large bare ears, yellow-orange eyes, short muzzle, five primary digits per hand, one thin third digit, opposable big toes and a full bushy tail longer than the body.
Style/medium: Photorealistic museum natural-history editorial photography with credible fur, skin, bark and low-light optics.
Composition/framing: The complete animal fills the center without cropping feet or tail; background stays quiet enough for the silhouette to read.
Constraints: Natural limb attachment and grip, one animal, no text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: squirrel, rat, rabbit, tarsier, ring-tailed lemur, human hand, extra or fused digits, aggressive pose, horror styling, CGI, illustration or oversaturation.
```

### 03 · Percussive tap scanning

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Aye-aye foraging gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct one adult Aye-aye tap scanning an intact upright dead limb at night before any opening has been made.
Subject/action: One hand grips the bark. The other hand has exactly one exceptionally thin connected third digit touching the intact search surface. The large bare ears orient toward the contact point; the animal's full bushy tail remains mostly visible.
Style/medium: Photorealistic high-speed natural-history field reconstruction with credible wood, fur and hand anatomy.
Constraints: No hole, exposed prey, sound waves, arrows, motion graphics, text, logo, signature, border or watermark.
Avoid: punching, clawing, bat sonar graphics, detached or extra fingers, human hand, rat, squirrel, horror styling, CGI or illustration.
```

### 04 · Finger extraction from a gnawed opening

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Aye-aye larval-foraging gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct one adult Aye-aye beside one small freshly gnawed opening in dead wood, with one thin third digit continuing naturally from the hand into the opening.
Subject/action: Keep the mouth closed after gnawing. Show one small pale beetle larva inside the wood near the opening, not dangling outside. Other digits grip the bark without merging into the probing finger.
Style/medium: Photorealistic museum natural-history macro reconstruction, non-graphic and anatomically coherent.
Constraints: One animal, one opening, one probing finger and one larva; no cutaway diagram, text, labels, arrows, logo, signature, border or watermark.
Avoid: gore, injury, giant grub, exposed bone, detached finger, extra fingers, all digits equally thin, exaggerated rat teeth, CGI or illustration.
```

### 05 · Digits III and IV

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Aye-aye hand-anatomy gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a close natural view of one living Aye-aye forehand resting open against bark while the face and one large ear remain softly visible behind it.
Required hand layout: Exactly five distinct connected primary digits, all countable from palm to tip. Keep a short bent thumb, a normal index finger, exactly one exceptionally thin wire-like middle digit III, a longest and visibly thicker digit IV, and a shorter thicker digit V.
Style/medium: Photorealistic museum natural-history macro with living leathery skin and credible joints.
Constraints: No projecting sixth digit, exposed bone, text, labels, arrows, logo, signature, border or watermark.
Avoid: four fingers, six fingers, detached finger, human hand, all fingers equally thick or equally thin, skeletal hand, injury, gore, CGI or diagram.
```

Targeted edit:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Aye-aye hand-anatomy gallery image 5 of 6
Input images: Image 1 is the edit target
Primary request: change only the visible forehand so it has exactly five distinct connected primary digits, all countable from palm to tip
Required hand layout: preserve the short bent thumb on the left side of the palm; add or separate a normal index finger; make exactly one middle digit, digit III, exceptionally thin and wire-like; keep digit IV the longest and visibly thicker; keep digit V shorter and thicker. Show five primary digits total, with no overlap hiding a digit. All five must attach naturally to the same palm.
Constraints: preserve the aye-aye's face, eyes, ear, fur, forearm, tree bark, background, lighting, framing, photorealistic style and exact horizontal 3:2 canvas unchanged; living leathery skin, no exposed bone; no sixth projecting digit; no text, labels or watermark
Avoid: four fingers, six fingers, detached finger, human hand, all fingers equally thick, all fingers equally thin, skeletal hand, injury, gore. Change only the hand anatomy.
```

Review correction pass:

```text
Use case: precise-object-edit
Input image: Image 1 is the only edit target
Primary request: keep the existing hand at exactly five digits and change only the relative lengths of the existing thin third digit and thick fourth digit
Exact existing layout, from left to right:
1. one short bent thumb at far left
2. one upright thick index finger
3. one exceptionally thin wire-like digit III in the middle
4. one thick diagonal digit IV pointing upper-right
5. one thick lower-right digit V
Do not add, split, duplicate, separate or reveal any additional digit.
Required edit:
- Shorten only the existing wire-like digit III slightly.
- Extend only the existing thick diagonal digit IV upward and to the right so its tip clearly reaches farther from the palm than digit III. Digit IV must be the longest of the five.
- Keep digit V shorter than digit IV.
- Replace the rounded tip of each existing digit with one subtle dark curved claw, without creating any new branch or digit.
- Preserve exactly five connected digits total, countable from the same palm to their tips.
Constraints: preserve the face, eyes, ear, fur, forearm, palm position, bark, background, lighting, framing, photorealistic style and exact 1536 × 1024 horizontal canvas; no sixth digit; no text, labels, arrows, logo, border or watermark
Avoid: six digits, extra normal index finger, extra line between index and digit III, forked digit, detached digit, digit III longer than digit IV, rounded suction-cup fingertips, human hand, skeletal hand, injury or gore. This is a minimal length-and-fingertip edit only.
```

The correction pass produced six visible digits, so the final cleanup removed the specific extra digit:

```text
Use case: precise-object-edit
Input image: Image 1 is the only edit target
Primary request: remove one specific extra finger and correct the thickness of one existing finger; do not create any new anatomy
The current image visibly has six projecting digits. Make it exactly five.
Specific removal: completely remove the thick diagonal extra finger whose curved tip sits near pixel x=1370, y=390, normalized x=0.89, y=0.38. This is the upper of the two thick right-pointing diagonal fingers. Repair only the bark behind it and its attachment area at the palm.
Specific preservation:
- Keep the short bent thumb at far left.
- Keep the upright thick index finger.
- Keep the shorter exceptionally thin central digit III whose claw ends near x=1200, y=230.
- Keep the longest upper-right digit IV whose claw ends near x=1370, y=90, but thicken its shaft to roughly the index finger's width while retaining its greater length and curved claw.
- Keep the lower-right thick digit V whose claw ends near x=1380, y=590.
Final count: exactly five distinct connected primary digits total, listed above, all attached to the same unchanged palm. Digit III remains exceptionally thin. Digit IV remains longest and clearly thicker than digit III.
Constraints: preserve the face, eyes, ear, fur, forearm, palm, all four retained digits plus thumb, bark, background, lighting, framing, photorealistic style and exact 1536 × 1024 canvas; no sixth digit; no text, labels, arrows, logo, border or watermark
Avoid: adding, splitting, duplicating or revealing a finger; four digits; six digits; two central wire fingers; detached anatomy; human hand; rounded suction-cup tips; skeletal hand; injury or gore. Perform only the stated deletion, bark repair and shaft thickening.
```

### 06 · Opening one hard ramy seed

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Aye-aye plant-food gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one wild adult Aye-aye opening and eating one hard ramy, Canarium madagascariensis, seed or fruit on a Madagascar forest branch at night.
Subject/action: One hand holds one small oval hard seed against the branch. The short muzzle and incisors make one small opening in its shell. The other hand's thin third digit approaches the opening. Keep the large bare ears, pale face, dark shaggy fur and bushy tail natural.
Style/medium: Photorealistic natural-history field reconstruction with credible seed shell, bark, fur and low-light optics.
Constraints: One animal and one seed only; no text, labels, arrows, logo, signature, border or watermark.
Avoid: coconut, large fruit, fruit clusters, many seeds, exposed oversized rat incisors, detached finger, gore, squirrel, CGI, illustration or oversaturation.
```

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/aye-aye/*-source.png
npm run convert:webp -- src/assets/source/species/aye-aye/*-source.png
```

ImageMagick reported all twelve accepted files as opaque, single-frame sRGB images at 1536 × 1024.

## Accepted asset hashes

| Frame | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| ----- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01 | `5473c4aa72e53121bc2fd97eff3f6ef323c111a5487770a16dd63cbcdea66eef` | `e7f164c822af624d29fdfa570f1704244bd1330648c63807c48c23237fc27f59` |
| 02    | `0560fc6c5dcc7477139e4c5a3cc3f1f261cc6f6cb01477ef0ba584a608c07beb` | `d516730ab85408b199cbae6e1d8e7c05a4e39860ce27d757f0b98de1c8f4f396` |
| 03    | `d8b279d37c3a320f960a3ebdaea22f9cd1d7787d6cc1ad9d8c5bc8136b460e94` | `459e7377c2ccfa5d03b0f8ef03e30473cad943693a1cd4e376fa85ea5eef0664` |
| 04    | `5dcf1b44b3eb3618e4b8151d1a3826818ee347dbc2c1a69524c00c8e2484c34d` | `b08e603cdee9f83e87a2066a9a95452a2ee5138db062b12f328b3444ce7cfc17` |
| 05    | `ae626e8bc1c03b3426c7a6c56371c87df0f97b14d633bcdccd085e3c5c374011` | `8c893098d5b4309845603c0624d6ec822c91ee7a5213d58c7c8811d1b436a051` |
| 06    | `8f2beb9e859114b71058d532598ff5b73070e449f32345f9c91b7656008041ef` | `b7d3a2dc4898e3ed09a659fb8d43a5e01102de1a4b46d7fb2c105aecce5fa548` |

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-night-rainforest-canopy-cover.webp` SHA-256: `e7f164c822af624d29fdfa570f1704244bd1330648c63807c48c23237fc27f59`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.62, "y": 0.51}`. Conservative full-subject boundary: `{"left": 700, "top": 90, "right": 1428, "bottom": 982}`, 728×892 source pixels (previously 1020×432). Boundary center is 69.3% of source width.

Inspected the PNG and runtime WebP at original resolution. The full boundary includes ears, whiskers, pale guard hairs, visible fingers and toes, and the complete bushy tail fringe. One edit increased head and tail margins, refined the thin near-hand finger and subdued the branch in the left field. The thumb wraps partly around wood and far-side limbs naturally overlap branch or body; this pose does not expose a complete diagnostic digit count. Dark forest background remains around the full fur silhouette, including a conservative 42-pixel margin below the tail fringe. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical visible-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 757.0×320.6 → 143.6×176.0 | 88.18 | 48.00 | 40.00 | Pass |
| 390×760 | 757.0×320.6 → 143.6×176.0 | 123.18 | 48.00 | 40.00 | Pass |
| 1366×768 | 907.1×384.2 → 349.3×428.0 | 96.00 | 156.51 | 48.00 | Pass |
| 1920×900 | 1275.0×540.0 → 457.0×560.0 | 96.00 | 246.68 | 48.00 | Pass |
| 2560×900 | 1700.0×720.0 → 457.0×560.0 | 96.00 | 413.08 | 48.00 | Pass |
| 3840×900 | 2550.0×1080.0 → 457.0×560.0 | 96.00 | 745.88 | 48.00 | Pass |

`npm run test:carousel`: all 161 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
