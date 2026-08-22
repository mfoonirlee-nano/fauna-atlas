# Chinese pangolin image set

These six original project images were generated on 2026-08-22 with Codex's built-in image generation tool for the complete Fauna Atlas Chinese pangolin profile. The set follows *Manis pentadactyla* sensu stricto after the 2026 revalidation of *Manis aurita*: it uses Taiwan and southern/eastern China as conservative visual anchors and does not portray the former Himalayan lineage as this species. No image is an occurrence record, voucher specimen or reliable species diagnosis.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/chinese-pangolin/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-forest-floor-portrait-source.png` | `01-forest-floor-portrait.webp` | One complete adult walking on a wet forest floor, with dark negative space on the left |
| 02 | `02-scale-and-claw-anatomy-source.png` | `02-scale-and-claw-anatomy.webp` | One complete close adult with a rounded pinna, broad overlapping scales and three visibly enlarged central claws; the outer digits are partly hidden by angle |
| 03 | `03-core-natural-habitat-source.png` | `03-core-natural-habitat.webp` | One small, short-tailed animal within a habitat-dominant forest mosaic; the bare soil patch is not claimed as a visible burrow |
| 04 | `04-ant-foraging-source.png` | `04-ant-foraging.webp` | One animal extending a narrow tongue into a crevice in decaying wood; prey individuals are not reliably visible or countable |
| 05 | `05-mother-and-single-pup-source.png` | `05-mother-and-single-pup.webp` | Exactly one short-tailed mother carrying exactly one pup at the proximal tail and lower back at night |
| 06 | `06-burrow-camera-monitoring-source.png` | `06-burrow-camera-monitoring.webp` | Exactly two researchers, one clipboard and one camera trap facing one candidate burrow; no animal or handling |

## Evidence boundaries

- The accepted taxon is narrow-sense *Manis pentadactyla*. A 2026 integrative revision restored the southern Himalayan lineage as *M. aurita*. The images therefore avoid using Nepal, the southern Tibetan margin or northeastern India as visual locations, while the unresolved northern Myanmar contact zone remains an explicit data limitation.
- A relatively compact build, visible rounded pinna, broad overlapping scales, large central digging claws and a tail shorter than the head-and-body length are conservative reconstruction anchors. They cannot identify an individual without provenance, specimens and, where needed, genetic evidence.
- Pangolin scales are keratin, not an armadillo-like bony shell. The face, throat and belly remain unscaled and sparsely haired. Some digits or limbs are occluded by natural camera angles; product alt text does not claim that all five toes are countable in image 02.
- Image 03 contains only a naturally bare or lightly disturbed soil patch. It is not described as an occupied burrow, and one patch, hole or camera detection cannot be converted into one animal or a population estimate.
- Image 04 illustrates a feeding mechanism rather than a daily ration or fixed prey composition. The crevice is a prompted suspected ant nest, but neither its identity nor individual prey can be confirmed from the accepted frame alone.
- Image 05 follows the well-supported usual single-pup framework and a documented maternal carrying behavior. The frame cannot establish the pup's scale texture by touch or independently identify the background opening as a nursing burrow, and it does not turn a small Taiwan field sample into a universal gestation or care schedule.
- Image 06 is a generalized, non-contact monitoring reconstruction with no location marker. Its accepted edit turns the camera toward the candidate burrow; it does not show capture, excavation, baiting or a confirmed occupied den.

## Shared morphology anchor

The following anchor was carried through the animal-focused prompts:

```text
Depict Manis pentadactyla sensu stricto, the Chinese or short-tailed pangolin: a compact Asian pangolin with a long tapered toothless snout, tiny dark eye, clearly visible rounded external ear, dark gray-brown skin, broad overlapping dark chestnut rhomboid keratin scales, and an unscaled face, throat and belly with sparse coarse hair. Show four anatomically coherent limbs. Each forefoot has five digits, with the three central curved digging claws especially enlarged and naturally turned inward while walking; the outer digits may be partly hidden by angle. The thick tail is complete, tapers naturally and is shorter than the head-and-body length. Keep realistic wildlife scale and anatomy. Avoid an armadillo, anteater, reptile, bony armor bands, a very long prehensile tail, giant ears, teeth, horn, extra limbs, duplicated claws, fantasy armor, text, logo, watermark or identifiable locality.
```

## Final prompts

### 01 · Forest-floor portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Pangolin species-detail cover and featured editorial card, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create an original scientifically grounded natural-history photograph of exactly one adult Manis pentadactyla sensu stricto walking quietly across a subtropical forest floor in southern or eastern China at night.
Scene/backdrop: Intact humid evergreen forest just after rain, with dark wet leaf litter, small mossy roots, restrained ferns and no recognizable site or human trace.
Subject: Exactly one complete compact Chinese pangolin. Use the shared morphology anchor: tapered toothless snout, tiny eye, visible rounded pinna, dark gray-brown exposed skin, broad overlapping dark-chestnut rhomboid scales, sparse hair on the unscaled underside, four coherent limbs, enlarged central foreclaws turned inward, and a thick complete tail shorter than the head-and-body length. It walks naturally with head lowered and is not curled.
Style/medium: Original photorealistic professional nocturnal wildlife photography, restrained natural-history museum publication quality, realistic keratin and wet-leaf textures.
Composition/framing: Exact 1536 x 1024 horizontal 3:2. Place the complete animal in the central-right safe area around x=0.66 y=0.60 and preserve calm dark negative space across the left side for responsive page copy. Keep snout, claws and tail safely inside frame.
Lighting/mood: Low moonlit forest ambience with subtle warm natural fill and a small catchlight, quiet and observational rather than theatrical.
Constraints: Exactly one animal; no prey, burrow, person, dog, trap, road, building, text, logo, signature, border or watermark.
Avoid: armadillo bands, reptile skin, anteater proportions, very long tail, giant pink ears, exposed teeth, extra limbs or claws, defensive ball, attack pose, fantasy armor, CGI, illustration, oversaturation or glossy stock-photo staging.
```

### 02 · Scale and claw anatomy

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Pangolin diagnostic gallery image 2 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original scientifically restrained full-animal close field photograph showing the external anatomy of one adult Manis pentadactyla sensu stricto on damp leaf litter.
Scene/backdrop: Generalized southern or eastern Chinese evergreen forest floor after rain, with a softly blurred root and moss background and no locality cue.
Subject: Exactly one complete compact adult in a calm side-three-quarter stance. Show a conical toothless snout, tiny eye, clearly rounded pinna, sparse facial and ventral hair, broad overlapping chestnut rhomboid scales, two powerful forefeet whose three central digging claws are especially enlarged and turn naturally inward, smaller hindfeet, four coherent limbs, and the entire tail shorter than the head-and-body length. The outside digits may be naturally occluded, but do not invent or duplicate claws.
Style/medium: Original photorealistic professional natural-history photography, fine keratin growth texture, wet leaves and restrained museum-publication processing.
Composition/framing: Exact 1536 x 1024 horizontal 3:2, animal at eye level in the center-left, with the whole snout, limbs and tail inside generous margins and anatomy sharper than the background.
Lighting/mood: Soft diffuse daytime forest shade, calm comparative observation and natural color.
Constraints: Exactly one animal; closed mouth; no ruler, labels, arrows, inset, specimen handling, text, logo, signature, border or watermark.
Avoid: armadillo shell, giant ears, teeth, exposed tongue, extra toes, duplicated claws, clipped tail, aggressive pose, other animals, aquarium, CGI, illustration, painting or oversaturation.
```

### 03 · Core natural habitat

Base generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Pangolin habitat gallery image 3 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a habitat-dominant original conservation photograph of a low-disturbance subtropical East Asian forest mosaic suitable for Manis pentadactyla sensu stricto.
Scene/backdrop: Mature and secondary broadleaf forest transitioning to bamboo, shrub and a small grass opening after rain; deep leaf litter, fallen wood, moist diggable clay-loam soil and continuous cover; generalized inland southern China or Hong Kong with no recognizable location.
Subject: Exactly one small but anatomically legible adult Chinese pangolin in the lower-right around x=0.72 y=0.72. Habitat occupies at least 85 percent of the frame. Give it a tapered snout, visible small rounded ear, broad dark scales, coherent limbs and a tail shorter than the head-and-body length. Beside it is only a natural patch of bare or lightly disturbed soil, not a clearly open burrow.
Style/medium: Original photorealistic professional conservation-landscape photography with credible scale, atmospheric depth and understated scientific-publication color.
Composition/framing: Exact 1536 x 1024 horizontal 3:2, forest structure and habitat connectivity dominant, the single animal secondary and safely inside frame.
Lighting/mood: Natural overcast daylight after rain, quiet and documentary.
Constraints: Exactly one small animal; no clear cave or occupied-burrow claim; no people, buildings, road, signs, dogs, traps, other wildlife, coordinates, text, logo or watermark.
Avoid: giant foreground animal, long tail, field of holes, oversized cave, staged den entrance, clear-cutting spectacle, zoo habitat, CGI, illustration or oversaturation.
```

Targeted correction applied to the first result:

```text
Use case: precise-anatomy-edit
Asset type: Corrected Fauna Atlas Chinese Pangolin habitat gallery image, exact 1536 x 1024 horizontal 3:2
Input image: The existing habitat-dominant forest photograph with one small pangolin in the lower-right.
Primary request: Shorten only the pangolin's tail so its visible length is approximately 55–65 percent of the head-and-body length, with a thick natural base and a gradual blunt taper appropriate for Manis pentadactyla sensu stricto.
Invariants: Preserve the exact animal position, head, ear, scales, all limbs, forest, bare soil patch, framing, camera angle, lighting, color and every other pixel-level scene relationship. Keep the animal small and the habitat dominant.
Constraints: Change only the tail length and the tiny background patch revealed by that correction; do not add a burrow, animal, person, text, logo or watermark.
Avoid: a long prehensile tail, amputated stump, thin rat tail, duplicated tail, altered body scale, new cave, CGI or illustration.
```

### 04 · Ant foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Pangolin feeding gallery image 4 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original scientifically restrained behavioral photograph of exactly one adult Manis pentadactyla sensu stricto feeding on ants from a small nest inside decaying wood.
Scene/backdrop: Damp subtropical forest floor at night, dark wet leaf litter and one fallen rotten log, with no recognizable location or human trace.
Subject/action: One complete compact Chinese pangolin braces naturally beside the log, opens only a small pocket of rotten wood with its enlarged central foreclaws, lowers its tapered toothless snout to the opening and briefly extends one narrow plausible sticky tongue into the crack. Show only a few small ants near the opening. Keep the full body and short complete tail readable.
Style/medium: Original photorealistic professional nocturnal behavior photography, realistic low-light documentary flash softened by forest ambience, crisp claws and tongue, restrained museum-publication finish.
Composition/framing: Exact 1536 x 1024 horizontal 3:2, action readable near x=0.51 y=0.58 with all anatomy and the log opening inside frame.
Constraints: Exactly one animal, one small nest opening, one tongue and only a few ants; no text, diagram, logo, signature, border or watermark.
Avoid: giant termite mound, insect carpet or swarm, gore, chewing, visible teeth, forked tongue, mammal prey, extra limbs, very long tail, armadillo, anteater, CGI, illustration or sensational attack imagery.
```

### 05 · Mother and single pup

Base generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Pangolin reproduction gallery image 5 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a quiet original nocturnal natural-history photograph of exactly one adult female Manis pentadactyla sensu stricto carrying exactly one older dependent pup near a discreet nursing-burrow entrance in a Taiwan secondary-forest slope.
Scene/backdrop: Humid leaf-littered forest at night with one modest dark burrow behind and no identifiable site.
Subjects/action: Exactly two pangolins total: one complete adult mother walking calmly and one pup about one third of her mass gripping securely at the proximal tail and lower back, not standing upright. The pup has softer gray developing scales. Both heads and limbs remain anatomically coherent and the mother has a thick complete tail shorter than her head-and-body length.
Style/medium: Original photorealistic professional nocturnal wildlife photography, restrained documentary light and natural keratin, soil and leaf textures.
Composition/framing: Exact 1536 x 1024 horizontal 3:2. Keep the whole mother, whole tail, single pup and modest entrance in frame around x=0.54 y=0.58.
Constraints: Exactly one mother and exactly one pup; calm, unhandled animals; no male, second pup, egg, exposed nest chamber, person, predator, readable sign, text, logo or watermark.
Avoid: multiple young, miniature hard-shelled clone, pup on the distal tail tip, human-like riding pose, very long maternal tail, armadillo anatomy, CGI, illustration, gore or sentimental stock-photo gloss.
```

Targeted correction applied to the first result:

```text
Use case: precise-anatomy-edit
Asset type: Corrected Fauna Atlas Chinese Pangolin mother-and-pup gallery image, exact 1536 x 1024 horizontal 3:2
Input image: The existing nocturnal forest photograph containing exactly one mother and one pup.
Primary request: Shorten only the mother's tail by approximately 30 percent so it is visibly shorter than her head-and-body length, while retaining a thick natural base and gradual pangolin taper. Keep the single pup securely at the proximal tail and lower back rather than moving it toward the tip.
Invariants: Preserve exactly one mother, exactly one pup, both heads and limbs, the pup's scale texture and pose, the burrow, forest, framing, lighting, color and every other scene element.
Constraints: Change only the mother's tail length and the tiny ground patch revealed by the edit; add or remove no animal or object; no text, logo or watermark.
Avoid: long prehensile tail, stump, thin tail, duplicated tail, second pup, displaced pup, altered faces, CGI or illustration.
```

### 06 · Burrow camera monitoring

Base generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Pangolin non-contact monitoring gallery image 6 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original scientifically plausible conservation-documentary photograph of non-contact camera monitoring beside one candidate Chinese pangolin resting burrow in a protected subtropical East Asian secondary forest.
Scene/backdrop: Intact forest in natural daylight, leaf litter, a sloped bank and exactly one modest single-entrance candidate burrow with no recognizable landmark or locality marker.
Human activity: Exactly two adult field researchers in plain muted practical clothing. One attaches and tests exactly one small unbranded infrared camera trap on a tree several metres from the candidate burrow; the other records on exactly one plain clipboard. The camera lens faces the burrow. People remain away from the entrance and do not touch, probe, open, bait or excavate it. No pangolin is visible.
Style/medium: Original photorealistic professional field-science documentary photography, ecologically credible equipment and understated scientific-publication processing.
Composition/framing: Exact 1536 x 1024 horizontal 3:2. Researchers and tree occupy the left half, one candidate entrance remains readable at right, and all people and equipment stay inside frame.
Lighting/mood: Soft natural overcast daylight, careful low-impact work, calm and observational rather than staged publicity.
Constraints: Exactly two researchers, one camera trap, one clipboard, one candidate entrance and zero animals; no extra notebook, measuring tape, bait, cage, shovel, weapon, readable display, map, coordinates, label, brand, text, logo, signature, border or watermark.
Avoid: handling, capture, digging, flash crowd, tourist, dog, trap, multiple cameras, camera pointed at viewer, occupied-den certainty, identifiable station, CGI, illustration or stock-photo smiles.
```

Targeted correction applied to the first result:

```text
Use case: precise-object-edit
Asset type: Corrected Fauna Atlas Chinese Pangolin monitoring gallery image, exact 1536 x 1024 horizontal 3:2
Input image: The existing daylight forest monitoring photograph with exactly two researchers, one tree-mounted camera trap, one clipboard, one candidate burrow and no animal.
Primary request: Rotate only the single camera trap so its sensor and lens face toward the candidate burrow on the right. From the viewer's angle, show the camera mostly from its side or back rather than with the lens facing the viewer.
Invariants: Preserve the exact two researchers, faces, poses, clothing, tree, strap, clipboard, candidate entrance, forest, camera position, framing, lighting, color and every other scene element.
Constraints: Change only the camera's orientation and its tiny attachment details; exactly one camera, one clipboard, two researchers and zero animals; no new tool, text, logo or watermark.
Avoid: camera still facing the viewer, second camera, disconnected or floating camera, altered people, handling or digging, bait, cage, measuring tape, CGI or illustration.
```

## Static validation

- All six compressed source files decode as opaque 1536 × 1024, 8-bit sRGB PNG files.
- All six runtime files decode as opaque 1536 × 1024 WebP files; `file` identifies VP8 WebP data rather than renamed PNG data.
- Source and runtime basenames form six one-to-one pairs.
- Runtime files were encoded with `cwebp -q 82 -m 6 -mt` after scoped TinyPNG source compression.
- Pixel means and entropies are non-zero for all 12 files, ruling out blank or single-color output.
- Static visual inspection checks one complete cover animal with left-side negative space; readable pinna, scales and enlarged central claws; habitat-dominant scale and corrected short tail in image 03; one feeding animal with a narrow tongue; exactly one short-tailed mother plus one pup in image 05; and exactly two researchers, one clipboard and one camera facing the candidate burrow in image 06.
- No GUI or headless browser was used for verification.
