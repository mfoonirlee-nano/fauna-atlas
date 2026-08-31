# Australian Lungfish image set

OpenAI's built-in imagegen created these six original project images on 2026-08-31 for the Fauna Atlas _Neoceratodus forsteri_ profile. The set covers adult form, surface breathing, nocturnal feeding, one adhesive egg and river-water monitoring. Each scene reconstructs a generalized scientific scenario rather than a named animal, river reach, spawning event or survey. Two later review calls tried to narrow the exposed area in frame 03; both alternatives exposed at least as much of the snout, so the project retained the first output and narrowed its caption to the visible surfacing event.

- Generation tool: OpenAI built-in imagegen
- Generation modes: `photorealistic-natural`, `scientific-educational with photorealistic underwater rendering`, `scientific-educational with photorealistic macro rendering`, and `photorealistic conservation fieldwork`
- Input mode: seven brand-new generations and one precise edit; the accepted set comes from the first six brand-new generations
- Research brief: [`docs/research/australian-lungfish-profile.md`](../../../../../docs/research/australian-lungfish-profile.md)
- Source directory: `src/assets/source/species/australian-lungfish/`
- Runtime directory: `public/images/species/australian-lungfish/`
- Source format: 1536 × 1024 opaque single-frame sRGB PNG
- Runtime format: 1536 × 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: eight, comprising six accepted initial generations, one rejected precise edit and one rejected fresh replacement
- Compression: TinyPNG returned HTTP 429 for all six source files without rewriting them. The fallback used pngquant 3.0.3 with `--quality 80-95 --speed 1 --strip`. Runtime conversion used the repository's cwebp settings: quality 82, method 6 and multithreading.
- Byte totals: 5,938,805 bytes across the six compressed source PNGs; 1,192,212 bytes across the six runtime WebPs; 7,131,017 bytes across both sets

## Accepted files and visual boundaries

| No. | Source file | Runtime file | Static review result | Scientific boundary |
| ---: | --- | --- | --- | --- |
| 01 | `01-permanent-river-pool-adult-cover-source.png` | `01-permanent-river-pool-adult-cover.webp` | One complete left-facing adult occupies the centre-right of a permanent river pool. The broad head, large scales, leaf-shaped paired fins and continuous median fin remain readable. | The pixels cannot establish sex, age, body measurements, individual identity or river system. |
| 02 | `02-leaf-shaped-fins-diagnostic-profile-source.png` | `02-leaf-shaped-fins-diagnostic-profile.webp` | One complete adult appears in a clean lateral profile. The near-side pectoral and pelvic fins read as fleshy leaf-shaped paddles, and the continuous median fin wraps around the pointed tail. | Perspective and overlap prevent a fin count or calibrated morphometric comparison. |
| 03 | `03-facultative-surface-air-breath-source.png` | `03-facultative-surface-air-breath.webp` | One complete fish angles upward, with the upper snout briefly breaking the surface while the rest of the head, body, fins and tail stay underwater. One modest ripple marks the surfacing point. | The pixels do not show whether the mouth opens or a breath is completed. A still frame cannot establish breathing frequency, dissolved oxygen, activity level or physiological need. |
| 04 | `04-nocturnal-snail-foraging-encounter-source.png` | `04-nocturnal-snail-foraging-encounter.webp` | One complete lungfish approaches one intact freshwater snail at night. A visible water gap separates the closed mouth and prey, with no electric-field effect. | Proximity does not prove detection mechanism, prey choice, capture or diet proportion. |
| 05 | `05-single-adhesive-egg-macrophyte-source.png` | `05-single-adhesive-egg-macrophyte.webp` | Exactly one amber egg sits inside a clear envelope attached to one short submerged leaf. No animal, clutch, nest or guardian appears. | The generated egg does not provide a calibrated diameter, developmental stage, viability, parentage or spawning-site record. |
| 06 | `06-river-water-edna-monitoring-source.png` | `06-river-water-edna-monitoring.webp` | Exactly one ecologist samples surface water with one bottle from the bank. The image contains no visible fish or other animal. | One generic sampling scene cannot establish eDNA detection, abundance, reproduction, trend, protocol, institution or locality. |

No frame contains readable text, a logo, watermark, border, collage, marine habitat or aquarium wall. Frames 01 through 04 retain the diagnostic broad head, thick overlapping scales, fleshy paired fins and continuous dorsal-caudal-anal fin. Frame 05 isolates one egg to avoid implying a clutch. Frame 06 keeps all animals out of view so the fieldwork image cannot serve as a species occurrence record.

## Imagegen output ledger

All eight outputs share this generator directory:

`/Users/chris.li/.codex/generated_images/01a055e7-e94d-7ba3-8e69-a020b7745a9c/`

| No. | Mode | Generator output | Decision |
| ---: | --- | --- | --- |
| 01 | Brand-new | `exec-5afe4e8d-b597-43ea-9135-1332598c1915.png` | Accepted as `01-permanent-river-pool-adult-cover-source.png`. |
| 02 | Brand-new | `exec-970f3e29-8e37-4d6e-b9a8-e6d58e97eded.png` | Accepted as `02-leaf-shaped-fins-diagnostic-profile-source.png`. |
| 03 | Brand-new | `exec-34306b02-c84f-4280-9f15-f50e17b828ce.png` | Accepted as `03-facultative-surface-air-breath-source.png`, with a caption boundary for the visible upper-snout exposure. |
| 04 | Brand-new | `exec-ccbb04d3-408f-47ae-a8a7-3d7d13ac2562.png` | Accepted as `04-nocturnal-snail-foraging-encounter-source.png`. |
| 05 | Brand-new | `exec-9bba5546-2b57-4f2e-a282-487590de9e39.png` | Accepted as `05-single-adhesive-egg-macrophyte-source.png`. |
| 06 | Brand-new | `exec-83fc709f-bbe8-43cf-976e-22687d20dfeb.png` | Accepted as `06-river-water-edna-monitoring-source.png`. |
| 07 | Precise edit of call 03 | `exec-86e324fb-5cb1-4c4f-811e-a1c444ba63cd.png` | Rejected because the upper snout still protruded above the surface. |
| 08 | Brand-new replacement attempt | `exec-551ae1f5-5dd3-43a0-9a1f-590a7cb29d67.png` | Rejected because a larger part of the snout protruded above the surface. |

The generator originals and both rejected review outputs remain in the directory above. The project copies preserve the six accepted frames and give each scene a stable source basename.

## Final prompt record

These blocks reproduce the six prompts that produced the accepted image set. Calls 07 and 08 were review corrections rather than part of the final set; the output ledger records their mode, path and rejection reason.

### 01 · Permanent river-pool adult cover

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Australian Lungfish species-profile cover.
Primary request: Create an original species-profile cover at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete adult Australian lungfish (Neoceratodus forsteri) resting just above the bed of a generalized permanent freshwater river pool in south-eastern Queensland. Use a low underwater three-quarter view. Place the fish at centre-right facing left and leave broad open water on the left for interface copy.
Scene/backdrop: Subdued green-brown freshwater with fine suspended particles, a sand-gravel-cobble bed, one submerged weathered log, one boulder and patches of short submerged macrophytes.
Subject: A stout elongated fish with a broad flattened conical head, one small dark eye, a small closed terminal mouth, large thick overlapping scales, olive-brown back and sides with muted darker blotches, pale cream-to-salmon underside, and strong fleshy leaf-shaped paired fins with narrow bases. The low dorsal fin begins near the middle of the back and continues around one long pointed tail into the anal fin as one continuous median fin margin, without a separate forked caudal fin.
Style/medium: Photorealistic museum-quality natural-history editorial photography.
Composition/framing: Keep the whole fish and every visible fin inside frame; centre-right subject; broad calm negative water on the left.
Lighting/mood: Filtered natural daylight, restrained and scientifically grounded.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one animal; no text, logo, watermark, border or collage.
Avoid: second fish, eel body, thread-like paired fins, legs, toes, external gills, barbels, exposed gill slits, forked tail, separate dorsal and caudal fins, coelacanth three-part tail, coral, marine shell, aquarium wall, diver, fishing gear, oversaturation, CGI.
```

### 02 · Leaf-shaped fins diagnostic profile

```text
Use case: scientific-educational with photorealistic underwater rendering.
Asset type: Fauna Atlas Australian Lungfish diagnostic gallery image.
Primary request: Create an original external-morphology field still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete adult Australian lungfish (Neoceratodus forsteri) in a clean left-facing lateral profile over a plain pale sand-and-fine-gravel freshwater bottom.
Subject: A heavy elongated trunk, broad flattened conical head, small eye, small closed mouth, one smooth fleshy gill cover, large overlapping scales, olive-brown dorsal coloration and pale cream-to-salmon lower surface. Show one near-side pectoral fin and one near-side pelvic fin as strong fleshy leaf-shaped paddles that taper to narrow attachment points; let far-side partners appear only where perspective permits. Place the pelvic fin well behind the pectoral fin. The low dorsal fin begins around mid-back and remains continuous around the long pointed tail into the anal fin.
Style/medium: Photorealistic museum-quality natural-history photography, scientifically restrained.
Composition/framing: Exact horizontal 3:2; generous margin around snout, fins and tail; full animal in strict lateral profile.
Constraints: Exact 1536 × 1024; opaque single-frame sRGB; exactly one complete animal; no labels, arrows, ruler, text, logo, watermark, border or collage.
Avoid: specimen tray, exposed skeleton, cutaway, open toothed mouth, thread-like fins, fin filaments, limb joints, digits, external gills, shark gill slits, separate dorsal fins, forked tail, round fan tail, coelacanth three-lobed tail, extra fins, duplicated anatomy, aquarium, marine habitat, CGI.
```

### 03 · Facultative surface air breath

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Australian Lungfish respiration gallery image.
Primary request: Create an original respiration-behaviour still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete Australian lungfish (Neoceratodus forsteri) rising through a permanent freshwater pool at dusk. Use an underwater side three-quarter camera with the calm air-water boundary across the upper fifth of the frame.
Subject/action: Angle the fish upward so its small mouth alone reaches the air-water interface and forms one modest ring of surface ripples. Keep the head, trunk, paired fins and complete pointed tail below water and inside frame. Preserve a stout olive-brown scaled body, pale underside, broad flattened head, small eye, strong leaf-shaped fleshy paired fins, and one low median fin that starts at mid-back and continues around the pointed tail into the anal edge.
Scene/backdrop: Natural permanent freshwater river pool, muted underwater plants and bank shadows, calm surface.
Style/medium: Photorealistic natural-history field photography.
Composition/framing: Full animal visible beneath surface; calm water-air boundary; no dramatic splash or bubble cloud.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one animal; no text, logo, watermark, border or collage.
Avoid: fish on land, exposed body on mud, mud chamber, cocoon, drought crack, walking posture, paired human-like lungs, transparent torso, blowhole, nostril jet, gaping jaw, visible gas stream, glowing oxygen, external gills, thread-like fins, forked tail, second animal, aquarium, CGI.
```

### 04 · Nocturnal snail-foraging encounter

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Australian Lungfish feeding-ecology gallery image.
Primary request: Create an original feeding-ecology still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one complete Australian lungfish (Neoceratodus forsteri) moving close to the bed of a permanent freshwater river pool at night and exactly one small intact freshwater snail on a cobble ahead of it. Keep one visible water gap between the closed mouth and the snail.
Subject: Stout olive-brown scaled body, pale lower surface, broad flattened head, small eye, small closed mouth, strong leaf-shaped fleshy paired fins, and one low continuous median fin around a long pointed tail.
Scene/backdrop: Sparse short macrophytes, gravel, cobble and a submerged branch in dim blue-green freshwater. A restrained field-light effect comes from outside frame.
Style/medium: Photorealistic museum-quality natural-history editorial photography.
Composition/framing: Keep the fish and snail complete; the snail is small but readable; no contact between them.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one fish and exactly one freshwater snail; no text, logo, watermark, border or collage.
Avoid: contact, bite, swallowed prey, broken shell, blood, carcass, extra prey, frog, fish school, marine snail, coral, visible electric field, lightning, glow, sensory rays, open toothy jaw, herbivory scene, person, gear, aquarium, CGI.
```

### 05 · Single adhesive egg on macrophyte

```text
Use case: scientific-educational with photorealistic macro rendering.
Asset type: Fauna Atlas Australian Lungfish early-life-history gallery image.
Primary request: Create an original early-life-history macro still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one very small Australian lungfish egg attached by a clear adhesive envelope to one short submerged macrophyte leaf in shallow flowing freshwater.
Subject: One small yolk-rich amber sphere inside a delicate transparent jelly envelope. Keep its attachment point, the leaf surface and nearby fine plant texture in focus. Keep the egg small relative to the plant rather than marble-sized.
Scene/backdrop: A dense bed of short submerged native plants fading into the background under low-turbidity water with a mild current.
Style/medium: Photorealistic scientific macro natural-history reconstruction, restrained and plausible.
Composition/framing: Close macro with the single egg and attachment point sharp; underwater plant habitat remains readable.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one egg; zero animals; no text, logo, watermark, border or collage.
Avoid: egg pair, egg mass, frogspawn string, nest, burrow, gravel clutch, parental fish, guarding behaviour, salamander larva, external gills, developed miniature adult, fungus, rot, stagnant algal slime, ruler, label, arrow, giant glass marble, CGI.
```

### 06 · River-water eDNA monitoring

```text
Use case: photorealistic conservation fieldwork.
Asset type: Fauna Atlas Australian Lungfish monitoring gallery image.
Primary request: Create an original monitoring still at exactly 1536 × 1024, horizontal 3:2, opaque single-frame sRGB. Show exactly one adult field ecologist on a shaded south-eastern Queensland freshwater riverbank collecting exactly one water sample with a plain sterile bottle mounted on a clean short sampling pole. Keep the worker on the bank and the bottle at the water surface.
Scene/backdrop: A permanent river margin with visible submerged macrophyte beds, one partly submerged log, an undercut vegetated bank and calm green-brown water. Include one closed plain equipment case on dry ground.
Subject/action: One field ecologist in ordinary muted field clothing and nitrile gloves, using unbranded equipment. All labels and screens remain blank.
Style/medium: Photorealistic conservation field photography, natural overcast light.
Composition/framing: Environmental wide-medium view; sampling gesture and river habitat both readable.
Constraints: Exact 1536 × 1024; horizontal 3:2; opaque single-frame sRGB; exactly one person; zero fish and zero other animals; exactly one sample bottle; no text, logo, watermark, border or collage.
Avoid: captured or handled lungfish, fish silhouette, net, electrofishing unit, hook, trap, bait, tag, syringe, blood, boat, dam, laboratory bench, oversized glassware, glowing DNA helix, readable data, institution mark, extra people, CGI.
```

## Static inspection

ImageMagick identified all twelve source and runtime assets as 1536 × 1024, sRGB, opaque and single-frame. The source assets decode as 8-bit PNG. The runtime assets decode as lossy VP8 WebP without alpha or animation. Full-resolution visual review found the requested animal count and scene boundary in each frame:

- Frame 01 keeps one complete adult, the interface-copy space and the permanent-pool setting.
- Frame 02 exposes the lateral body outline, leaf-shaped paired fins and continuous pointed tail.
- Frame 03 keeps the body underwater while the upper snout briefly breaks the surface; the pixels do not confirm mouth opening or a completed breath.
- Frame 04 contains one fish and one intact snail with a visible gap and no electric effect.
- Frame 05 contains one adhesive egg and no animal, clutch or nest.
- Frame 06 contains one ecologist, one bottle and no visible animal.

The runtime WebPs keep the source basenames without `-source` and preserve the same composition. SHA-256 inspection found six unique hashes within the PNG set and six unique hashes within the WebP set.
