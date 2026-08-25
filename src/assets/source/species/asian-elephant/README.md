# Asian elephant image set

Codex's built-in image generation tool created these six original project images on 2026-08-25 for the complete Fauna Atlas _Elephas maximus_ profile. The set covers adult female and male morphology, forest and river habitat, feeding, matrilineal care and aerial observation of movement through a mixed landscape. Each image is a generic scientific reconstruction. None records a named elephant, subspecies, site, migration route, population count or monitoring project.

The image set follows the evidence boundaries in [`docs/research/asian-elephant-profile.md`](../../../../../docs/research/asian-elephant-profile.md).

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/asian-elephant/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/asian-elephant/*.png` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file                                | Runtime file                         | Accepted observation                                                                                           |
| --- | ------------------------------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 01  | `01-rainforest-female-portrait-source.png` | `01-rainforest-female-portrait.webp` | One complete tuskless adult female stands in the right third of a wet tropical forest clearing                 |
| 02  | `02-tusked-bull-morphology-source.png`     | `02-tusked-bull-morphology.webp`     | One complete adult bull walks through dry deciduous woodland with two modest separated tusks                   |
| 03  | `03-forest-river-mosaic-source.png`        | `03-forest-river-mosaic.webp`        | One small complete tuskless adult female stands beside a river while connected forest dominates the frame      |
| 04  | `04-wild-grass-foraging-source.png`        | `04-wild-grass-foraging.webp`        | One complete tuskless adult female gathers a visible bunch of wild grass with her trunk                        |
| 05  | `05-matrilineal-calf-care-source.png`      | `05-matrilineal-calf-care.webp`      | Exactly two complete adult females accompany one calf, which reaches its trunk toward the right adult          |
| 06  | `06-aerial-corridor-monitoring-source.png` | `06-aerial-corridor-monitoring.webp` | Exactly four separated elephants move through a forest, stream and fallow-land corridor in a high oblique view |

## Evidence boundaries

- Small rounded ears, a paired-domed forehead, a convex to level back and one dorsal projection at the trunk tip anchor the set to _Elephas maximus_. A generated image cannot establish wild provenance, age, sex, subspecies or locality by itself.
- Images 01, 03 and 04 reconstruct tuskless adult females. Image 05 reconstructs two tuskless adult females and a calf. Lack of visible tusks in one frame does not prove sex, because tusk expression varies across sexes and populations.
- Image 02 reconstructs one tusked adult bull. It does not imply that every male grows long tusks or support a tusk-length measurement.
- Image 03 presents one forest, grassland and river mosaic. It cannot represent every tropical forest, shrubland, grassland or human-modified habitat used across the 13 range countries.
- Image 04 supports visible contact between a trunk and wild grass. It does not identify a plant species, measure intake or define the whole diet.
- Image 05 supports proximity and one trunk contact. It cannot prove parentage, age, social rank or the structure of a wider elephant network.
- Image 06 shows a generic group moving through one landscape. It does not reconstruct the 2020 to 2021 Yunnan event, prove seasonal migration, reveal a route or provide an abundance estimate.

## Shared morphology anchor

The prompts use this species-level anchor:

```text
Depict Elephas maximus with relatively small rounded ears that do not extend below the neck, paired domes on the forehead separated by a shallow central groove, a gently convex to level back, dark gray-brown wrinkled skin with restrained pale mottling around the forehead, ear edges and trunk, and exactly one long coherent trunk ending in one dorsal finger-like projection. Keep four sturdy legs, four complete feet and one thin tail with a sparse dark hair tuft.

Adult females and calves should have no visible tusks unless a scene specifically calls for small tushes. A tusked adult male may carry exactly two modest naturally unequal forward-curving tusks. Tusk expression varies among males and populations, so one reconstruction must not stand for every individual.

Avoid the very large fan-shaped ears, concave saddle back and two trunk-tip fingers of an African savanna elephant. Avoid saddles, chains, bells, paint, mahouts, tourist camps, zoo staging, malformed joints, fused feet, extra trunks, duplicated tusks, text, logos and watermarks.
```

## Final prompts

Image 1 served only as a style and morphology reference for images 02 through 06. Each later call generated a new scene.

### 01 · Rainforest female portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Asian elephant species-detail cover, exact 1536 × 1024 horizontal 3:2 website asset
Primary request: Create a brand-new original natural-history photograph of exactly one complete adult female Asian elephant (Elephas maximus) standing alert at the edge of a tropical seasonal forest clearing.
Scene/backdrop: Generalized South or Southeast Asian moist-deciduous forest and tall-grass clearing after light rain, layered broadleaf foliage, bamboo and low mist; no named landmark, plantation rows, road, building or human trace.
Subject: One healthy mature female Asian elephant in a calm left-facing three-quarter stance. Show the diagnostic combination: relatively small rounded ears that do not extend below the neck, paired domes on the forehead with a shallow central groove, a gently convex to level back highest near the middle, dark gray-brown wrinkled skin with restrained pale mottling on the forehead, ear edges and trunk, exactly one long coherent trunk ending in one dorsal finger-like projection, and no externally visible tusks. Show four sturdy legs, four complete feet, and one thin tail ending in a sparse dark hair tuft. Do not give her African-elephant proportions.
Style/medium: Original photorealistic professional wildlife photography, restrained natural-history editorial color, realistic wet skin, mud, grass and humid atmospheric depth.
Composition/framing: Eye-level medium-wide horizontal environmental portrait. Place the complete elephant in the right third near x=0.67, y=0.58. Keep every foot, ear, trunk tip and tail inside generous margins. Reserve the left half as quiet layered forest clearing for responsive page copy.
Lighting/mood: Soft overcast monsoon-morning light, calm vigilance, muted deep greens and mineral gray-brown.
Constraints: Exactly one animal; one head; two small rounded ears; one continuous trunk; four legs; four feet; one tail; no visible tusks; no other wildlife; no text, labels, logo, signature, border or watermark.
Avoid: African savanna elephant, African forest elephant, huge fan-shaped ears, concave saddle back, two finger projections at trunk tip, long tusks, white or pink domestic-elephant depigmentation, saddle, chains, bells, paint, mahout, zoo staging, tourist camp, anthropomorphic expression, malformed joints, extra trunk, extra legs, duplicated ears, fantasy, illustration, CGI, oversaturation or glossy advertising polish.
```

### 02 · Tusked bull morphology

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Asian elephant male-morphology gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is a visual style and species-morphology reference only; create a brand-new original scene rather than editing or copying its composition.
Primary request: Create a natural-history side portrait of exactly one complete mature adult male Asian elephant (Elephas maximus) walking slowly through an open tropical dry-deciduous forest glade.
Scene/backdrop: Generalized South Asian dry-deciduous woodland with muted teak-like broad leaves, sparse bamboo, dry grass and reddish soil; no named park, road, structure or people.
Subject/action: One healthy adult bull in clean left-facing side-three-quarter view. Show relatively small rounded ears, a clear paired-domed forehead with shallow central groove, gently convex back, dark gray wrinkled skin with restrained mottling on ear edges and trunk, exactly one continuous trunk, exactly two modest naturally unequal forward-curving tusks, four individually traceable sturdy legs and feet, and one thin tail with an open sparse hair tuft. Keep tusks and trunk separated. This frame illustrates one tusked male; it must not imply that every male has long tusks.
Style/medium: Original photorealistic professional wildlife photography matching Image 1's restrained natural-history editorial realism, skin texture and natural color.
Composition/framing: Eye-level medium-wide horizontal frame. Keep the entire bull within generous margins, including trunk tip, tusk tips, all feet and tail. Quiet woodland gaps around the silhouette.
Lighting/mood: Soft warm dry-season morning light, calm and observational.
Constraints: Exactly one elephant; one head; two small ears; one trunk; two tusks; four legs; four feet; one tail; no other animals; no text, logo, signature, border or watermark.
Avoid: African-elephant giant ears or concave back, female body with oversized tusks, crossed or fused trunk and tusks, extra trunk, extra tusk, missing leg, fused feet, saddle, chain, paint, bell, mahout, tourism, zoo, charging, fantasy, CGI, illustration, oversaturation or glossy advertising.
```

### 03 · Forest and river mosaic

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Asian elephant habitat gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is a visual style and species-morphology reference only; create a brand-new original scene rather than editing or copying its composition.
Primary request: Create a wide natural-history landscape showing exactly one complete adult female Asian elephant (Elephas maximus) as a small secondary subject within a tropical forest–grassland–river mosaic.
Scene/backdrop: Generalized South and Southeast Asian landscape after monsoon rain: dense evergreen and moist-deciduous forest on low hills, bamboo and tall grasses around an open glade, a shallow natural river bend and muddy bank. No plantation rows, crop field, village, road, fence or identifiable landmark.
Subject: One healthy tuskless adult female near the middle-right river margin, small enough that the connected habitat dominates. Preserve the Asian-elephant combination of small rounded ears, paired forehead domes, gently convex back, one trunk, four legs and one tail. Her full silhouette remains readable and all feet stay visible.
Style/medium: Original photorealistic professional conservation landscape photography matching Image 1's restrained editorial color and humid atmospheric realism.
Composition/framing: Very wide eye-level establishing frame. Landscape occupies about 80 percent of visual attention. Put the complete elephant at x=0.68, y=0.62 with broad continuous habitat around her; keep sky restrained.
Lighting/mood: Soft broken-cloud morning light after rain, spacious and quiet.
Constraints: Exactly one elephant; complete anatomy; no other wildlife; no humans, buildings, infrastructure, crop rows, text, logo, signature, border or watermark.
Avoid: African savanna, acacia trees, giant African ears, deep-water swimming, tourist postcard, dramatic flood, plantation advertising, zoo, fantasy, CGI, illustration, oversaturation or glossy stock-photo polish.
```

### 04 · Wild grass foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Asian elephant feeding gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is a visual style and species-morphology reference only; create a brand-new original scene rather than editing or copying its composition.
Primary request: Create a close but complete natural-history photograph of exactly one adult female Asian elephant (Elephas maximus) gathering a loose bunch of wild grasses with her trunk in a forest glade.
Scene/backdrop: Generalized tropical moist-deciduous forest edge with wild grasses, bamboo and leaf litter; no farm crop, plantation row, structure or human trace.
Subject/action: One healthy tuskless female in right-facing three-quarter profile, full body visible. Extend the single trunk downward and forward in a loose natural curve. Show its tip in clean side view with exactly one dorsal finger-like projection pressing a small bunch of still-rooted wild grasses against the underside of the trunk; do not create two opposing fingers. Keep trunk tip, mouth and forefeet visually separate. Show small rounded ears, paired forehead domes, gently convex back, four complete legs and one tail with sparse tuft.
Style/medium: Original photorealistic professional wildlife field photography matching Image 1's restrained natural-history realism, realistic grass, skin folds and leaf litter.
Composition/framing: Horizontal medium-wide at elephant shoulder height, entire animal and grass interaction inside generous margins; quiet background behind the trunk tip.
Lighting/mood: Filtered soft morning light, focused and unhurried.
Constraints: Exactly one elephant; one trunk with one dorsal finger projection; no visible tusks; four legs; four feet; one tail; no other animals; no text, logo, signature, border or watermark.
Avoid: two finger projections, African-elephant ears, trunk loop, trunk fused to grass or mouth, cut grass bundle floating in air, extra trunk, missing leg, crops, feeding by tourists, zoo, saddle, chains, fantasy, CGI, illustration, oversaturation.
```

### 05 · Matrilineal calf care

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Asian elephant social-care gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is a visual style and species-morphology reference only; create a brand-new original scene rather than editing or copying its composition.
Primary request: Create a quiet natural-history photograph of exactly two adult female Asian elephants (Elephas maximus) calmly accompanying exactly one young calf in a matrilineal family unit.
Scene/backdrop: Open tropical forest glade with low grass, bamboo and softly layered broadleaf woodland; wild habitat with no human trace.
Subjects/action: Exactly three Asian elephants total. Place the small calf in the center with the probable mother on the right and another adult female relative on the left in a shallow separated arc. The calf lightly touches the mother's lowered trunk with its short trunk; the second female stands close in a relaxed protective orientation without touching. All three are tuskless and anatomically complete, with small rounded ears, paired forehead domes, gently convex backs, one coherent trunk and one visible tail each. Keep all twelve feet individually traceable and bodies separated. Do not claim the second female is the mother.
Style/medium: Original photorealistic professional wildlife photography matching Image 1's restrained natural-history editorial realism, realistic skin, dust and grass.
Composition/framing: Horizontal environmental group portrait. Keep all three complete elephants inside the central safe region with open margins, visible ground beneath every foot, and clean gaps between trunks, legs and tails.
Lighting/mood: Soft dappled early-morning light, attentive and observational without sentimentality.
Constraints: Exactly three elephants; two adult females and one calf; only calf and mother trunks touch; no tusks; no other animals; no people, roads, fences, collars, tags, text, logo, signature, border or watermark.
Avoid: African-elephant ears, adult bull leading the group, human-like hug or smile, tangled or fused trunks, fused bodies, hidden or extra legs, identical cloned adults, calf tusks, distress, zoo, tourism, fantasy, CGI, illustration, oversaturation or commercial-family-ad gloss.
```

### 06 · Aerial corridor monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Asian elephant movement-and-monitoring gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is a visual style and species-morphology reference only; create a brand-new original scene rather than editing or copying its composition.
Primary request: Create a restrained high oblique aerial natural-history photograph of exactly four Asian elephants (Elephas maximus) moving calmly through a connected tropical forest and fallow-land corridor, evoking non-invasive aerial monitoring without depicting a named event or exact location.
Scene/backdrop: Generalized southwestern China or mainland Southeast Asia forest edge: broadleaf forest blocks, bamboo, a shallow stream, irregular fallow grass and one narrow unpaved field path. No active crop rows, houses, city, road traffic, power lines, fences, signs or identifiable landmark.
Subjects/action: Exactly four elephants in a loose single-file matrilineal group: one adult female leading, one second adult female, one juvenile and one calf protected between them. Each elephant is visually separated, complete and anatomically coherent, with small rounded ears, convex backs, one trunk, four legs and one tail. No visible tusks. They walk toward the lower-left forest cover without running. The group should occupy no more than 30 percent of the frame.
Style/medium: Original photorealistic conservation aerial photography matching Image 1's restrained natural-history color, realistic vegetation and documentary processing; plausible drone-height perspective but no drone visible.
Composition/framing: Wide high-oblique 3:2 establishing view. The connected habitat and route dominate; all four elephants remain readable with no overlaps or cropped bodies. No map graphics or coordinate overlays.
Lighting/mood: Soft late-afternoon cloud light, calm, watchful and non-catastrophic.
Constraints: Exactly four elephants; complete separated bodies; no humans, drone, vehicle, buildings, active crops, other wildlife, text, arrows, map lines, logo, signature, border or watermark.
Avoid: claiming universal migration, stampede, pursuit, crowd, disaster scene, African-elephant anatomy, overlapping or fused bodies, duplicated trunks or legs, zoo, tourism, fantasy, CGI, illustration, oversaturation or news-spectacle styling.
```

## QA correction prompts

The built-in image generator used the initial accepted scenes as edit targets for these two anatomy corrections. Static inspection accepted both corrected results.

### 02 · Separate fourth leg and open tail tuft

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Asian elephant source asset, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is the edit target.
Primary request: Make two anatomy corrections to this existing adult male Asian elephant photograph while preserving the accepted animal, pose and dry-deciduous forest scene.

Leg correction: The current far-side foreleg is hidden behind the near-side foreleg. Separate it visibly. Show exactly four anatomically coherent weight-bearing legs and exactly four complete feet, each with its own readable path from shoulder or hip to a distinct ground contact. Keep the current walking gait. Place the far-side front foot slightly behind and to the image-right of the near-side front foot, with a narrow clean gap between their lower legs and separate toes. Do not add a fifth leg or alter the hind legs.

Tail correction: Replace only the closed leaf-shaped hair mass at the end of the existing tail with one short open asymmetrical tuft of sparse coarse dark hairs. Show separated tapered strands and visible gaps between their ends. Keep one thin continuous tail from rump to tuft. The tuft must not form a loop, leaf, teardrop, ribbon, braid, hook or enclosed outline.

Constraints: Preserve the same single adult bull, Asian-elephant identity, small ears, paired-domed forehead, convex back, exact two modest separated tusks, one continuous trunk, head, skin texture, body proportions, overall stance, lighting, shadows, woodland, camera angle, framing and colors. Keep the entire elephant inside frame. Exact final anatomy: one elephant, one trunk, two tusks, four legs, four feet, one tail. Preserve 1536 × 1024 dimensions. No text, logo, watermark, people, structures or other animals.
```

### 05 · Restore the adult and calf tails

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Asian elephant source asset, exact 1536 × 1024 horizontal 3:2
Input images: Image 1 is the edit target.
Primary request: Add the two missing tails to this existing photograph while preserving the accepted three-elephant family composition and calf-to-right-adult trunk contact.

Left adult tail: Add exactly one thin continuous tail attached naturally to the left adult female's rump. Angle it gently down-left into the clean green gap behind her hindquarters. End it in one short open asymmetrical tuft of sparse coarse dark hairs. Keep it separate from both hind legs, the body edge, vegetation and the calf.

Calf tail: Add exactly one short age-appropriate tail attached naturally to the calf's rump. Extend it gently backward into the clean green gap between the calf and the left adult, ending in a tiny open sparse hair tuft. Keep it separate from every leg, body and trunk.

Existing right adult tail: Preserve the right adult female's existing visible tail unchanged. The final image must show exactly three separate tails total, one per elephant, with no tail touching another animal.

Constraints: Change only the two missing-tail regions. Preserve exactly two adult females and one calf, their identities, sizes, positions, Asian-elephant morphology, tuskless heads, all twelve existing legs and feet, every trunk, the calf's raised trunk touching only the right adult's trunk, ears, lighting, shadows, forest background, camera angle, framing and colors. Do not turn the calf's open lower lip into a second trunk. Preserve exact 1536 × 1024 dimensions. No extra animal, trunk, leg or tail; no text, logo or watermark.
```

## Static validation

- All six compressed source files decode as opaque 1536 × 1024, 8-bit sRGB PNG files.
- All six runtime files decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files.
- Source and runtime basenames form six one-to-one pairs.
- The provisional focal points, in frame order, are `(0.68, 0.58)`, `(0.50, 0.54)`, `(0.68, 0.61)`, `(0.53, 0.57)`, `(0.51, 0.58)` and `(0.54, 0.55)`.
- Original-resolution inspection found one tuskless female cover; one tusked bull; one habitat-dominant river scene; one grass-feeding female; exactly two adult females and one calf; and exactly four separated elephants in the aerial frame.
- Static inspection found no readable text, logos, watermarks, zoo cues, restraints, collars, handling or provisioning.
- Verification used no GUI or headless browser.
