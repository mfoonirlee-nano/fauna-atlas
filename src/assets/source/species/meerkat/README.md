# Meerkat image set

Six original 1536 × 1024 source PNGs for the _Suricata suricatta_ profile. Codex's built-in image generation tool produced the images on 2026-09-04 through six base calls. The reviewer accepted frames 02, 04, 05 and 06 on the first pass. Frame 01 needed a smaller sentinel and more negative space. Frame 03 needed the lower-left forager moved away from the source edge. One targeted edit corrected each frame before acceptance. TinyPNG compressed the six accepted PNGs in place, and the repository `cwebp` workflow generated the runtime copies.

## Files

| Frame | Source PNG | Runtime WebP | Purpose |
| --- | --- | --- | --- |
| 01 | `01-sentinel-mound-cover-source.png` | `01-sentinel-mound-cover.webp` | Wide cover with one sentinel and left-side negative space |
| 02 | `02-full-body-diagnostic-profile-source.png` | `02-full-body-diagnostic-profile.webp` | Full-body external morphology |
| 03 | `03-sentinel-above-foraging-group-source.png` | `03-sentinel-above-foraging-group.webp` | One elevated sentinel above four foragers |
| 04 | `04-sand-foraging-dig-source.png` | `04-sand-foraging-dig.webp` | Foreclaw digging in loose sand |
| 05 | `05-pup-provisioning-source.png` | `05-pup-provisioning.webp` | Adult-pup food presentation |
| 06 | `06-morning-burrow-group-source.png` | `06-morning-burrow-group.webp` | Four-animal morning group at two burrow entrances |

## Accepted observations and limits

Frame 01 shows one complete meerkat standing upright on a low sandy mound in open arid scrub. Its pointed muzzle, dark eye patches, rounded ears, narrow body, transverse dorsal bands, feet and dark-tipped tail remain visible. The frame cannot establish an active sentinel shift, an alarm call, a nearby group, a predator, a named locality, sex, age or body size.

Frame 02 shows one complete left-facing meerkat walking in lateral view. The image supports only the visible body shape, dark eye patch, dorsal banding and long dark-tipped tail. The final generation prompt incorrectly requested five toes on the nearer forefoot and four on the nearer hind foot even though the research brief established four toes on every foot. Toe tips overlap at original resolution, so the accepted pixels do not support a reliable count. The page alt text and caption make no digit-count claim.

Frame 03 contains exactly five complete meerkats: one upright animal on the mound and four animals foraging at ground level. The image cannot prove which individual held a sentinel role, whether it called, how the group rotated duties, what the lower animals found, or how long the arrangement lasted.

Frame 04 shows one complete meerkat raking loose sand with its forefeet. A small spray of sand makes the action readable while leaving the head, forelimbs, hind feet and tail visible. The frame cannot identify buried prey, prove that the behavior was feeding rather than investigation, measure digging depth or duration, or establish foraging success.

Frame 05 shows one larger meerkat holding one small brown arthropod at its muzzle while one smaller pup-like animal reaches toward it beside a burrow entrance. The still cannot identify the prey, prove that transfer or ingestion completed, establish the animals' sex or kinship, identify a helper role, or quantify provisioning frequency.

Frame 06 shows exactly four visible meerkats on a sandy mound with two visible entrances in warm morning light. Two adults or older animals stand on all fours, one individual sits upright while grooming its own flank, and one smaller pup-like animal stands lower on the mound. The image cannot establish individual identity, age class, kinship, dominance, emergence order, grooming duration, group size beyond the frame or the underground burrow layout.

No frame records a field-observed event, supplies a calibrated measurement or proves population condition or conservation status. The accepted files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

Scientific source boundaries are documented in [the Meerkat research brief](../../../../../docs/research/meerkat-profile.md).

## Generation outputs

The generator stored the outputs in two session directories under `/Users/chris.li/.codex/generated_images/`. Codex copied only the accepted outputs into the repository before compression.

| Call | Generator output | Decision |
| --- | --- | --- |
| 01 base | `01a06a68-8eef-7e32-93a4-246f0a9aef6e/exec-fdecce3f-5a35-4b33-94bd-2586eba98a8a.png` | Rejected because the sentinel was too large for the responsive cover |
| 01 correction | `01a06a68-8eef-7e32-93a4-246f0a9aef6e/exec-b5326947-3af1-4a19-875d-1ad62e5d41ec.png` | Accepted after shrinking and repositioning the complete animal |
| 02 base | `01a06a6d-a921-70c0-a763-a94f921a90d8/exec-d89fc540-895d-4811-8a09-8c6028efcbd6.png` | Accepted first pass with the digit-count prompt defect recorded below |
| 03 base | `01a06a6d-a921-70c0-a763-a94f921a90d8/exec-237fdb38-123b-4510-aa92-463694de08a9.png` | Rejected because the lower-left animal's tail tip touched the source edge |
| 03 correction | `01a06a6d-a921-70c0-a763-a94f921a90d8/exec-eaeb8ff9-3c9c-473e-ae06-2fc6efe2a687.png` | Accepted after shrinking and moving that animal right |
| 04 base | `01a06a68-8eef-7e32-93a4-246f0a9aef6e/exec-7da1ffa4-c984-430b-9a60-1a1fcdcbd3fe.png` | Accepted first pass |
| 05 base | `01a06a68-8eef-7e32-93a4-246f0a9aef6e/exec-49e29365-8514-45e8-9bce-723dd2641ad6.png` | Accepted first pass |
| 06 base | `01a06a68-8eef-7e32-93a4-246f0a9aef6e/exec-6acc557a-ddf6-43f0-a733-7303ffea203a.png` | Accepted first pass |

## Normalized final prompt set

### 01 · Sentinel on a low mound

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Meerkat species-profile cover, original project asset, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a scientifically grounded natural-history photograph of exactly one complete adult meerkat (Suricata suricatta) standing upright as a sentinel on a low sandy mound in generalized southern African arid scrub.
Scene/backdrop: Open sandy plain with scattered low gray-green shrubs, sparse dry grass and a low horizon beneath a pale blue sky. No named reserve, settlement, fence, road, people or other animals.
Subject accuracy: One slender small mongoose with a pointed muzzle, black eye patches, small rounded dark ears, sandy gray-tan coat, dark transverse bands across the back, narrow limbs, long foreclaws and a long tapering tail with a dark tip. The animal stands upright on its hind feet with forepaws held loosely against the belly and the tail resting on the mound for balance.
Style/medium: Photorealistic field-documentary wildlife photography with restrained museum-publication color, natural fur, sand and atmospheric depth.
Composition/framing: Wide environmental view. Place the complete animal in the right-middle and preserve the left 45 percent as quiet habitat for hero copy. Keep the head, forepaws, hind feet and full tail inside generous background margins.
Lighting/mood: Clear soft morning light, calm and watchful, without theatrical rim light.
Scientific boundary: A generalized sentinel-posture reconstruction. A still image cannot prove an alarm call, duty rotation, predator detection, nearby group membership, sex, age, locality or duration.
Constraints: exactly one complete animal; right-weighted subject; opaque image; no text, labels, arrows, logo, signature, border or watermark.
Avoid: prairie dog, ground squirrel, marmot, mongoose without dorsal bands, raccoon mask, ringed tail, upright human posture, cropped feet or tail, second animal, prey, predator, den interior, zoo fixture, collar, fantasy, CGI, illustration, painting or stock-photo oversaturation.
```

The base output made the sentinel too large. The accepted frame combines the base request with this targeted edit:

```text
Use case: precise-object-edit
Input image: the frame 01 base image of one upright meerkat on a low sandy mound
Primary request: Uniformly shrink the complete meerkat to about one-third of its current height and reposition it into a compact right-middle cover-safe area. Target the whole animal, including muzzle, ears, forepaws, hind feet and tail tip, around source x=940..1120 and y=380..610.
Composition: Keep the animal's visual center beyond 60 percent of source width and preserve at least the left 45 percent as uninterrupted quiet scrub and sky. Reconstruct all newly exposed sand, vegetation and background with the same optical depth.
Preserve: the same single meerkat, upright pose, mound, camera position, horizon, lighting, palette, photorealism and 1536 × 1024 landscape canvas.
Constraints: one complete animal only; no crop, duplicate, anatomy change, added object, text, logo, signature, border or watermark.
```

The edit did not need to hit the prompt's target box literally. Review accepted the final conservative pixel boundary recorded in the cover geometry section.

### 02 · Full-body diagnostic profile

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Meerkat morphology gallery image 2 of 6, original project asset, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a clean natural-history lateral portrait of exactly one complete adult meerkat (Suricata suricatta) walking left across firm sandy ground in generalized arid scrub.
Subject accuracy: Show the pointed muzzle, black eye patch, small rounded dark ear, sandy gray coat, dark transverse dorsal bands, slender torso, long legs, long foreclaws and long tapering dark-tipped tail. Show five separate toes on the nearer forefoot and four on the nearer hind foot.
Style/medium: Photorealistic museum natural-history field portrait with credible fur, claws, ground texture and restrained color.
Composition/framing: Keep the entire animal from nose to tail tip and every visible foot inside the frame. Use a low side-on camera and enough background separation to read the silhouette.
Lighting/mood: Soft neutral daylight with clear coat texture.
Scientific boundary: The image supports qualitative morphology only. It cannot provide a calibrated length, weight, age, sex, locality or reliable digit count.
Constraints: exactly one complete animal; opaque image; no text, ruler, arrows, labels, logo, signature, border or watermark.
Avoid: prairie dog, ground squirrel, marmot, raccoon, ringed tail, stocky body, missing eye patch, cropped tail or feet, duplicated limb, zoo enclosure, fantasy, CGI, illustration or painting.
```

The toe sentence above is the final generation prompt as issued, including its error. The research brief states that meerkats have four toes on each foot. Original-resolution review found overlapping toe ends and could not verify a count, so the reviewer accepted this frame only for the body form, eye patch, dorsal bands and long tail. The page alt text and caption do not mention digit count.

### 03 · Sentinel above a foraging group

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Meerkat sentinel-behavior gallery image 3 of 6, original project asset, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct exactly five complete meerkats (Suricata suricatta) in one coherent open arid-scrub scene: exactly one upright animal on a low mound and exactly four animals foraging separately at ground level.
Subjects: Give every animal the species' pointed muzzle, dark eye patches, rounded dark ears, sandy coat, dark dorsal bands and long dark-tipped tail. The standing animal scans the horizon with a closed mouth. Each lower animal keeps its nose near the ground without overlapping another body.
Scene/backdrop: Flat sandy southern African scrub with sparse low shrubs and a pale open sky. No named locality, person, vehicle, fence, predator or additional animal.
Style/medium: Photorealistic wide wildlife documentary reconstruction with natural depth, restrained color and coherent morning light.
Composition/framing: Place the standing animal on a mound in the upper-right-middle and distribute four lower foragers across the lower field. Keep all five complete, separated from frame edges and readable as one group.
Scientific boundary: The arrangement illustrates a sentinel above foragers. A still cannot establish role assignment, duty rotation, an alarm call, predator detection, food capture, kinship, group hierarchy or duration.
Constraints: exactly five complete meerkats total, one upright and four low foragers; no text, labels, arrows, logo, signature, border or watermark.
Avoid: six animals, hidden duplicate, cropped tail, overlapping fused bodies, prairie dogs, ground squirrels, synchronized upright group, open calling mouth, visible alarm graphics, predator, zoo setting, fantasy, CGI, illustration or painting.
```

The base frame left the lower-left forager's tail tip against the source edge. The accepted frame adds this targeted correction:

```text
Use case: precise-object-edit
Input image: the frame 03 base image with one standing sentinel and four ground-level foragers
Primary request: Change only the complete lower-left forager. Uniformly shrink that one animal slightly and move it right until its tail tip has at least 80 source pixels of real sandy background before the left edge.
Preserve: the animal's head-down foraging pose, anatomy, coat pattern and full tail; the standing sentinel; the other three foragers; exactly five animals total; mound, shrubs, sky, lighting, focus, color and exact 1536 × 1024 framing.
Repair: Fill the vacated left-edge area with continuous sand and sparse vegetation that matches the existing scene.
Constraints: do not add, delete, duplicate, crop or alter any of the other four meerkats; no text, logo, signature, border or watermark.
```

### 04 · Digging in loose sand

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Meerkat foraging gallery image 4 of 6, original project asset, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a natural-history action photograph of exactly one complete adult meerkat (Suricata suricatta) digging into loose sandy soil with both forefeet.
Scene/backdrop: Generalized open southern African arid scrub with fine tan sand, scattered low plants and no identifiable landmark, person or other animal.
Subject/action: One low, forward-leaning meerkat rakes sand backward with long curved foreclaws. Keep the pointed muzzle close to the excavation, the dark eye patch and dorsal bands visible, hind feet braced and the long dark-tipped tail extended along the ground. Use one restrained spray of loose sand without hiding the limbs.
Style/medium: Photorealistic high-speed field-documentary wildlife photography with believable fur, claws, grains and natural optical depth.
Composition/framing: Three-quarter side view at ground level. Keep the complete head, body, all visible feet and tail inside wide margins, with the digging point near center-left.
Lighting/mood: Warm low morning light with natural shadows and no spotlight.
Scientific boundary: The frame shows excavation but cannot identify buried prey, prove ingestion, measure depth or duration, or establish foraging success.
Constraints: exactly one complete animal; one shallow excavation; opaque image; no visible prey, text, arrows, logo, signature, border or watermark.
Avoid: burrow cutaway, giant hole, dust cloud hiding anatomy, shovel-like paws, missing claws, cropped tail, extra limbs, prairie dog, ground squirrel, human tool, fantasy, CGI, illustration or painting.
```

### 05 · Provisioning one pup

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Meerkat cooperative-care gallery image 5 of 6, original project asset, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct one larger adult meerkat (Suricata suricatta) offering exactly one small brown arthropod to exactly one smaller pup beside a natural burrow entrance.
Scene/backdrop: Sandy arid scrub with dry grass, sparse thorny vegetation and one dark entrance in a low earthen mound. No named locality, enclosure or other animal.
Subjects/action: The complete adult stands on the left and holds one tiny intact non-stinging arthropod at the front of its closed jaws. The complete pup stands on the right and reaches its muzzle toward the item. Keep a small visible gap or light contact at the transfer point; show no injury, blood or enlarged prey.
Style/medium: Photorealistic respectful wildlife documentary reconstruction with coherent age-size contrast, natural fur and restrained museum-publication color.
Composition/framing: Place both full animals across the middle of the frame, facing each other. Keep both tails, all visible feet and the single food item readable against open ground.
Lighting/mood: Soft daylight, calm social interaction.
Scientific boundary: The still cannot identify the prey, prove completed transfer or ingestion, determine either animal's sex or kinship, identify a helper, or measure provisioning frequency.
Constraints: exactly two meerkats and one small arthropod; no additional pup, prey pile, text, labels, arrows, logo, signature, border or watermark.
Avoid: mouth-to-mouth regurgitation, nursing, blood, giant scorpion, snake, detached body part, aggressive fight, fused muzzles, cropped tails, prairie dog, ground squirrel, human hand, fantasy, CGI, illustration or painting.
```

### 06 · Morning group at a burrow mound

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Meerkat social-group gallery image 6 of 6, original project asset, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a wide natural-history photograph of exactly four complete meerkats (Suricata suricatta) gathered on a sandy communal burrow mound in early morning.
Scene/backdrop: Generalized southern African arid scrub with a low irregular earthen mound, exactly two visible dark entrance openings, scattered dry grass and thorny shrubs. Do not show an underground cutaway or named reserve.
Subjects/action: Arrange two alert adults or older animals standing on all fours across the left and center of the mound, one separate individual sitting upright at the upper right while grooming its own flank, and one visibly smaller pup lower on the right slope. Give each animal a pointed muzzle, dark eye patches, rounded dark ears, dorsal bands and a complete dark-tipped tail. Keep every body separate and anatomically coherent.
Style/medium: Photorealistic wildlife documentary photography with natural group spacing, textured sand and restrained editorial color.
Composition/framing: Wide environmental frame at low eye level. Keep all four animals and both entrance rims inside the source with open ground around the group.
Lighting/mood: Warm low sunrise light with long soft shadows, quiet rather than theatrical.
Scientific boundary: The image cannot identify individuals, sex, age, kinship, dominance, exact social behavior, group size outside the frame, emergence order, den occupancy or underground tunnel structure.
Constraints: exactly four complete meerkats; two animals on all fours, one separate self-grooming individual and one smaller pup; exactly two visible entrances; opaque image; no text, labels, arrows, logo, signature, border or watermark.
Avoid: fifth animal, hidden duplicate, social-grooming pair, fused body, crowded zoo exhibit, concrete tunnel, collapsed burrow, prairie dog, ground squirrel, hyena, predator, people, fantasy, CGI, illustration or painting.
```

## Cover full-subject geometry

Image 01 uses the committed focal point `{ x: 0.77, y: 0.65 }`. Original-resolution inspection of the compressed source PNG and decoded runtime WebP produced the conservative outward-rounded full-subject boundary `B = [1055, 465, 1210, 755]` in source pixels: left, top, right and bottom. The boundary includes the muzzle, ears, crown, both forepaws, both hind feet and the complete dark-tipped tail.

- Boundary center: `(1132.5, 610)`; its horizontal center is `73.73%` of the 1536-pixel source width.
- Left 40 percent: `x=0..614`; the animal starts at `x=1055`, leaving 441 source pixels between the copy zone and the reviewed boundary.
- Requested quiet left 45 percent: `x=0..691`; the reviewed boundary begins another 364 source pixels to the right.
- Source-edge background: 1055 pixels left, 326 right, 465 top and 269 bottom around the reviewed boundary.
- Runtime cover SHA-256: `5c8c1d8a8e3b1043ca339a2bf3bfe3a8904d3e4616b557ea1df332cf7a77289c`.

The calculation matches `tests/hero-carousel.test.mjs`. For each viewport, the base cover scale is `s0 = max(viewportWidth / 1536, viewportHeight / 1024)`. The visible source dimensions equal the viewport dimensions divided by `s0`; crop origins apply the committed percentage object position. The calculation projects `B` through that crop, then applies each animation scale around the viewport center and adds `viewportWidth × translateX`. Values below round to 0.1 CSS pixel. `T/R/B/L` lists clearance from the complete boundary to the four viewport edges.

| Viewport | Visible source crop at settled state |
| --- | --- |
| `320×760` | `x=850.7..1281.9, y=0..1024` |
| `390×760` | `x=778.1..1303.6, y=0..1024` |
| `1366×768` | `x=0..1536, y=104.3..967.9` |
| `1920×900` | `x=0..1536, y=197.6..917.6` |
| `2560×900` | `x=0..1536, y=314.6..854.6` |
| `3840×900` | `x=0..1536, y=431.6..791.6` |

| Viewport | Static state | Transform | T/R/B/L clearance, CSS px | Minimum | Result |
| --- | --- | --- | --- | --- | --- |
| `320×760` | settled | `scale(1)` | `345.1 / 53.4 / 199.6 / 151.6` | `53.4` | pass |
| `320×760` | initial-from | `scale(1.04)` | `343.7 / 49.1 / 192.4 / 151.3` | `49.1` | pass |
| `320×760` | enter-forward-from | `translateX(5%) scale(1.025)` | `344.2 / 34.7 / 195.1 / 167.4` | `34.7` | pass |
| `320×760` | leave-forward-to | `translateX(-4%) scale(1.015)` | `344.6 / 64.6 / 196.9 / 138.7` | `64.6` | pass |
| `320×760` | enter-backward-from | `translateX(-5%) scale(1.025)` | `344.2 / 66.7 / 195.1 / 135.4` | `66.7` | pass |
| `320×760` | leave-backward-to | `translateX(4%) scale(1.015)` | `344.6 / 39.0 / 196.9 / 164.3` | `39.0` | pass |
| `390×760` | settled | `scale(1)` | `345.1 / 69.5 / 199.6 / 205.5` | `69.5` | pass |
| `390×760` | initial-from | `scale(1.04)` | `343.7 / 64.4 / 192.4 / 205.9` | `64.4` | pass |
| `390×760` | enter-forward-from | `translateX(5%) scale(1.025)` | `344.2 / 46.8 / 195.1 / 225.3` | `46.8` | pass |
| `390×760` | leave-forward-to | `translateX(-4%) scale(1.015)` | `344.6 / 83.2 / 196.9 / 190.1` | `83.2` | pass |
| `390×760` | enter-backward-from | `translateX(-5%) scale(1.025)` | `344.2 / 85.8 / 195.1 / 186.3` | `85.8` | pass |
| `390×760` | leave-backward-to | `translateX(4%) scale(1.015)` | `344.6 / 52.0 / 196.9 / 221.3` | `52.0` | pass |
| `1366×768` | settled | `scale(1)` | `320.8 / 289.9 / 189.3 / 938.2` | `189.3` | pass |
| `1366×768` | initial-from | `scale(1.04)` | `318.3 / 274.2 / 181.5 / 948.4` | `181.5` | pass |
| `1366×768` | enter-forward-from | `translateX(5%) scale(1.025)` | `319.2 / 211.8 / 184.4 / 1012.9` | `184.4` | pass |
| `1366×768` | leave-forward-to | `translateX(-4%) scale(1.015)` | `319.9 / 338.7 / 186.4 / 887.4` | `186.4` | pass |
| `1366×768` | enter-backward-from | `translateX(-5%) scale(1.025)` | `319.2 / 348.4 / 184.4 / 876.3` | `184.4` | pass |
| `1366×768` | leave-backward-to | `translateX(4%) scale(1.015)` | `319.9 / 229.4 / 186.4 / 996.7` | `186.4` | pass |
| `1920×900` | settled | `scale(1)` | `334.3 / 407.5 / 203.3 / 1318.8` | `203.3` | pass |
| `1920×900` | initial-from | `scale(1.04)` | `329.6 / 385.4 / 193.4 / 1333.1` | `193.4` | pass |
| `1920×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `331.4 / 297.7 / 197.1 / 1423.7` | `197.1` | pass |
| `1920×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `332.5 / 476.0 / 199.5 / 1247.3` | `199.5` | pass |
| `1920×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `331.4 / 489.7 / 197.1 / 1231.7` | `197.1` | pass |
| `1920×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `332.5 / 322.4 / 199.5 / 1400.9` | `199.5` | pass |
| `2560×900` | settled | `scale(1)` | `250.7 / 543.3 / 166.0 / 1758.3` | `166.0` | pass |
| `2560×900` | initial-from | `scale(1.04)` | `242.7 / 513.9 / 154.6 / 1777.5` | `154.6` | pass |
| `2560×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `245.7 / 396.9 / 158.9 / 1898.3` | `158.9` | pass |
| `2560×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `247.7 / 634.7 / 161.7 / 1663.1` | `161.7` | pass |
| `2560×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `245.7 / 652.9 / 158.9 / 1642.3` | `158.9` | pass |
| `2560×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `247.7 / 429.9 / 161.7 / 1867.9` | `161.7` | pass |
| `3840×900` | settled | `scale(1)` | `83.5 / 815.0 / 91.5 / 2637.5` | `83.5` | pass |
| `3840×900` | initial-from | `scale(1.04)` | `68.8 / 770.8 / 77.2 / 2666.2` | `68.8` | pass |
| `3840×900` | enter-forward-from | `translateX(5%) scale(1.025)` | `74.3 / 595.4 / 82.5 / 2847.4` | `74.3` | pass |
| `3840×900` | leave-forward-to | `translateX(-4%) scale(1.015)` | `78.0 / 952.0 / 86.1 / 2494.7` | `78.0` | pass |
| `3840×900` | enter-backward-from | `translateX(-5%) scale(1.025)` | `74.3 / 979.4 / 82.5 / 2463.4` | `74.3` | pass |
| `3840×900` | leave-backward-to | `translateX(4%) scale(1.015)` | `78.0 / 644.8 / 86.1 / 2801.9` | `78.0` | pass |

All 36 full-subject checks exceed the 24 CSS pixel gate. The tightest result is 34.7 pixels at the right edge of the `320×760` `enter-forward-from` state. Static source and CSS inspection also found no second animal or isolated bright object in the left 45 percent. The mobile carousel panel stays in the upper band above the animal, and the desktop copy and carousel panel cross only background outside the reviewed boundary. These checks use current CSS geometry and do not replace the hash-locked regression case.

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/meerkat/*-source.png
npm run convert:webp -- src/assets/source/species/meerkat/*-source.png
```

- TinyPNG reduced the six accepted source PNGs from 17,104.5 KB to 6,041.1 KB, a 64.7 percent reduction.
- The repository WebP conversion reduced the 6,041.1 KB compressed PNG set to 1,414.7 KB, a further 76.6 percent reduction.
- `file`, `sips` and ImageMagick identify all twelve accepted files as 1536 × 1024 sRGB, opaque, single-frame images. PNG and WebP basenames form six one-to-one pairs.
- Original-detail inspection covered every compressed PNG and runtime WebP. The conversion introduced no missing muzzle, ear, foot, tail tip, animal, prey item or burrow entrance and no material content drift.
- PNG-to-WebP PSNR, in frame order, is `38.6076`, `37.2405`, `37.0525`, `35.9994`, `36.3116` and `34.1962` dB.
- Inspection confirmed one animal in frames 01, 02 and 04; five in frame 03; two in frame 05; and four in frame 06. Frame 06 contains two animals on all fours, one separate self-grooming individual and one smaller pup-like animal. Inspection found one small arthropod only in frame 05, two visible burrow entrances only in frame 06, and no person, text, logo or watermark.
- Verification used static file inspection, project geometry and `view_image` at original detail. It did not use a GUI or headless browser.

## Accepted asset hashes

Hashes were computed with `shasum -a 256` after source compression and runtime conversion.

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `a491c27690f2165468649576e3b132703ec4dab909e12f6b185081eb31eef37e` | `5c8c1d8a8e3b1043ca339a2bf3bfe3a8904d3e4616b557ea1df332cf7a77289c` |
| 02 | `a78cbe5d0e64472970c9d960605935291b934016fe213022583d3dbaadcae80f` | `7cfbdb855ca7506a4c60d050f664d459d43e0f3dd525d193de8a0f3dbae75467` |
| 03 | `fdb1c3adfc875f9251b861716f255444c3055dabb6ceb84a30ed856d2dc9d9cd` | `2421f3a8fdb85fc189c5ecabe68759c7ef5486a901f0e7170c98f9bcdaa7df03` |
| 04 | `94cbcf62d0df29c28a0decfaa12a16ef6d6b6d72006863db7740ba45eeaefbfc` | `ad036dffb9db194283f70c4e6266dc25906f96f9f845623c313f69b4952132cd` |
| 05 | `ec66aaa46f3d374d1781ffd726736b5995f272079c9840a9392b6b312d9c05a0` | `636b6c6e48fb8494147609b0861a5d4e65488402e31bd9336af0212ffeed8765` |
| 06 | `60fbdf5cfad2cd0a8a176186bc4c1a1d9476565b0401557c9c4f28a9dd8aeb0b` | `8beccbc17b7f2353ca13487334c988846da8b869ae5052c2e4fb9a271fc0beba` |
