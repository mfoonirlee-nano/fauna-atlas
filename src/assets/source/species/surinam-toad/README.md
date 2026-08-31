# Surinam Toad image set

OpenAI's built-in imagegen created eight outputs on 2026-08-30 for the Fauna Atlas _Pipa pipa_ profile. Six calls started new images. Two precise-object edit calls targeted frame 02's terminal finger anatomy and frame 05's closed dorsal brood-chamber surface. Review accepted six source frames covering a leaf-litter portrait, external form, floodplain habitat, a feeding reconstruction, closed dorsal brood chambers and field survey work. The frame-02 edit improved the small rounded terminal organs but did not resolve the exact four-lobed star morphology. The frame-05 edit replaced mound-like caps with shallow closed polygonal skin-toned chamber lids.

- Generation tool: OpenAI built-in imagegen
- New-generation modes: photorealistic-natural for frames 01 and 03; scientific-educational with photorealistic-natural rendering for frames 02, 04 and 05; photorealistic-natural conservation fieldwork for frame 06
- Edit mode: two precise-object edits, one for frame 02 and one for frame 05
- Research brief: [`docs/research/surinam-toad-profile.md`](../../../../../docs/research/surinam-toad-profile.md)
- Source directory: `src/assets/source/species/surinam-toad/`
- Runtime directory: `public/images/species/surinam-toad/`
- Source format: 1536 × 1024 opaque 8-bit sRGB palette PNG
- Runtime format: 1536 × 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 8, comprising 6 brand-new generations and 2 precise-object edits
- Compression: TinyPNG returned HTTP 429 for all six scoped source files without changing them. The local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. Runtime WebPs use cwebp 1.6.0 with quality 82, method 6 and multithreading.
- Byte totals: 16,795,732 bytes across the six accepted generator PNGs before compression; 6,121,585 bytes across the six compressed source PNGs; 1,345,848 bytes across the six runtime WebPs; 7,467,433 bytes across both accepted on-disk sets

## Accepted files and visual boundaries

| No. | Source file                                   | Runtime file                            | Accepted observation                                                                                                                                                                                              | Boundary                                                                                                                                                                                                                                                                                          |
| --- | --------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | `01-leaf-litter-adult-cover-source.png`       | `01-leaf-litter-adult-cover.webp`       | One complete mottled brown adult rests low on dark silt and decomposing leaves beneath tannin-stained water. Its broad flattened body, triangular head, tiny eyes, forelimbs and webbed hind feet remain visible. | The generalized bottom scene cannot identify a country, river, reserve, sex, age, body length, population, water chemistry or undisturbed wild encounter. The frame does not establish camouflage performance or a preferred resting substrate.                                                   |
| 02  | `02-flattened-body-and-fingertips-source.png` | `02-flattened-body-and-fingertips.webp` | One complete adult shows a broad flattened torso, triangular integrated head, tiny dorsal eyes, long unwebbed front fingers with small rounded terminal organs and broad webbed hind feet.                        | The pixels do not resolve the exact four-lobed star morphology. Product captions, alt text and tests must not claim that they do. The image cannot prove fingertip sensory function, provide a calibrated size, establish sex or age, or exclude every similar _Pipa_ species from pixels alone.  |
| 03  | `03-floodplain-blackwater-habitat-source.png` | `03-floodplain-blackwater-habitat.webp` | One complete small mottled frog rests among submerged leaves and roots in a connected blackwater floodplain scene.                                                                                                | The generalized reconstruction cannot identify a river, season, hydroperiod, occupied site, water depth, water quality or habitat preference frequency. The single visible animal cannot establish abundance, density or detectability.                                                           |
| 04  | `04-suction-feeding-small-fish-source.png`    | `04-suction-feeding-small-fish.webp`    | One complete frog faces exactly one intact small fish underwater. The fish remains outside the frog's short open mouth while fine suspended particles cross the space between them.                               | A still image cannot prove suction, measure force or event speed, quantify trunk-volume change, establish prey detection distance, diet frequency or capture success. The frame must not support a tongue-strike, bite, injury or fish-inside-mouth claim.                                        |
| 05  | `05-closed-dorsal-brood-chambers-source.png`  | `05-closed-dorsal-brood-chambers.webp`  | One complete adult has many shallow closed round-to-polygonal skin-toned chamber lids integrated across an intact dorsal surface. Zero young, eggs, embryos or open cavities appear.                              | The image shows closed, intact, non-graphic skin with zero visible young. Captions must not claim emergence, open brood cells, visible offspring, internal anatomy, embryo count, viability, developmental age or imminent hatching. Exterior pixels alone cannot establish biological sex.       |
| 06  | `06-floodplain-water-survey-source.png`       | `06-floodplain-water-survey.webp`       | Exactly two field researchers work beside one tannin-stained pool. One uses one small water-sampling bottle; the other holds one recording board and one writing implement. Zero animals appear.                  | The anonymous reconstruction cannot establish an eDNA protocol, species detection or absence, abundance, population trend, water-quality result, named institution, exact locality or conservation outcome. Pixels cannot establish the writing implement's type or reveal readable observations. |

The accepted set treats the Surinam Toad as a broad dorsoventrally flattened aquatic frog with a triangular head continuous with the body, tiny dorsal eyes, slender unwebbed forefingers and broadly webbed hind feet. Frame 02 supports only small rounded terminal organs, not the exact four-lobed star morphology requested in the prompts. Frame 04 depicts a controlled feeding reconstruction rather than direct evidence of suction. Frame 05 preserves closed integrated dorsal skin without openings, wounds or visible young.

## Imagegen output ledger

All generator outputs share this parent directory:

`/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/`

| Call | Mode                                                                               | Generator output                                | Decision                                                                                                                                                                                                                                       |
| ---: | ---------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   01 | Brand-new generation, photorealistic-natural                                       | `exec-0c14f2fe-402a-482b-a3a8-bab992a46238.png` | Accepted as frame 01 and copied to `01-leaf-litter-adult-cover-source.png`.                                                                                                                                                                    |
|   02 | Brand-new generation, scientific-educational with photorealistic-natural rendering | `exec-e56293c3-941d-4396-9368-e373cafc6efb.png` | Rejected in favor of a precise-object edit because the exact four-lobed terminal finger anatomy remained unresolved.                                                                                                                           |
|   03 | Brand-new generation, photorealistic-natural                                       | `exec-2582561c-e107-4cf4-bac0-45195afffc88.png` | Accepted as frame 03 and copied to `03-floodplain-blackwater-habitat-source.png`.                                                                                                                                                              |
|   04 | Brand-new generation, scientific-educational with photorealistic-natural rendering | `exec-9b386877-bb6c-40c2-b106-40629d4cd2ac.png` | Accepted as frame 04 and copied to `04-suction-feeding-small-fish-source.png`.                                                                                                                                                                 |
|   05 | Brand-new generation, scientific-educational with photorealistic-natural rendering | `exec-e783e34e-3cf3-45b4-994e-43e5b07bbee1.png` | Rejected in favor of a precise-object edit because the dorsal chamber lids looked too mound-like.                                                                                                                                              |
|   06 | Brand-new generation, photorealistic-natural conservation fieldwork                | `exec-fe91bec1-c7ca-4408-b9d4-f619fb418bb1.png` | Accepted as frame 06 and copied to `06-floodplain-water-survey-source.png`.                                                                                                                                                                    |
|   07 | Precise-object edit of call 02                                                     | `exec-c116d89d-fcf5-4c71-b6b1-73444eb9232c.png` | Accepted as frame 02 only for its flat body, triangular head, long unwebbed fingers and small rounded terminal organs, then copied to `02-flattened-body-and-fingertips-source.png`. The exact four-lobed terminal anatomy remains unresolved. |
|   08 | Precise-object edit of call 05                                                     | `exec-647f0ad3-5401-4f90-87c4-90db5bab22e7.png` | Accepted as frame 05 with shallow closed polygonal skin-toned chamber lids and zero visible young, then copied to `05-closed-dorsal-brood-chambers-source.png`.                                                                                |

## Exact prompts and modes

### Call 01 · New generation · accepted frame 01

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Surinam Toad species-profile cover and featured card, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a restrained underwater natural-history photograph of exactly one complete adult Surinam Toad (Pipa pipa) resting on a silty leaf-litter bottom in a generalized tropical South American floodplain pool.
Scene/backdrop: Shallow tannin-stained slow water with dark brown silt, several decomposing broad leaves, one submerged branch, fine roots and sparse aquatic vegetation. The site represents an Amazonian or Guiana lowland waterbody without identifying a country, river or reserve. No aquarium, glass, gravel, plastic plants, road, building, boat or person.
Subject morphology: One broad, extremely dorsoventrally flattened frog whose outline resembles a dead leaf. Show a wide triangular wedge-shaped head merging into the torso without a neck, tiny dark lidless eyes set on the dorsal head, a broad closed mouth, mottled brown to olive-brown tuberculate skin, short forelimbs with slim fingers, muscular hind limbs and broad webbed hind feet. Keep the body low against the substrate. No inflated throat, parotoid glands, projecting tongue or tail.
Style/medium: Original photorealistic underwater wildlife photography with natural silt, skin and leaf texture; restrained museum-publication color.
Composition/framing: Place the complete animal in the right 58 percent, facing left, and keep every limb and foot inside the frame. Let the frog occupy about 48 percent of image width. Preserve quiet dark water and leaf litter across the left side for interface typography.
Lighting/mood: Diffuse daylight filtered through tannin-stained water, calm and cryptic, with mild suspended particles and no theatrical spotlight.
Scientific boundary: The reconstruction shows a plausible external form and bottom-resting context. It cannot establish sex, age, length, locality, population, water chemistry or an undisturbed wild encounter.
Constraints: Exactly one complete frog and zero other animals; no eggs, brood chambers, young, prey, people, tools, text, labels, logo, signature, border or watermark.
Avoid: round upright toad body, cane toad, horned frog, African bullfrog, clawed frog, bright green skin, smooth toy skin, huge eyes, visible tongue, teeth, external gills, tail, extra limbs, malformed feet, exposed brood cavities, fantasy, illustration, painting, CGI or stock-photo gloss.
```

### Call 02 · New generation · rejected frame-02 initial

```text
Use case: scientific-educational with photorealistic-natural rendering.
Asset type: Fauna Atlas Surinam Toad morphology gallery image 2 of 6, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a clean underwater dorsal three-quarter portrait of exactly one complete adult Surinam Toad (Pipa pipa), with the flattened body, triangular head, tiny eyes and one near forefoot readable in the same view.
Scene/backdrop: Pale brown submerged silt with a few small leaf fragments and fine roots. Keep the water clear enough for morphology while retaining slight natural turbidity. No specimen tray, ruler, hand, aquarium or inset panel.
Subject morphology: One broad leaf-like adult with a very flat rectangular torso, a wide triangular head continuous with the body, tiny bead-like lidless dark eyes directed upward, a broad closed mouth and mottled medium-brown to dark olive-brown skin with low tubercles. Show two short forelimbs. Each forefoot has exactly four long unwebbed fingers. On the near forefoot, each visible fingertip ends in one small fleshy four-lobed star-like terminal organ, subtle in scale and joined to the finger rather than shaped like a separate starfish. Show two strong hind limbs and broad feet with five toes joined by extensive webbing.
Style/medium: Original photorealistic museum diagnostic photography under water, with crisp external anatomy and restrained color.
Composition/framing: Keep the complete frog centered in a shallow diagonal pose, occupying about 64 percent of image width. Angle the near forefoot toward the camera enough to read its four fingers and lobed tips without enlarging the hand beyond biological scale. Keep the full body, all four limbs and every visible toe inside the frame.
Lighting/mood: Soft diffuse daylight with neutral scientific presentation and no flash glare.
Scientific boundary: The image may show qualitative external traits. It cannot prove fingertip sensory function, resolve microscopic lobules, determine sex or age, supply a calibrated size or exclude every similar Pipa species by pixels alone.
Constraints: Exactly one complete frog; exactly four fingers on each forefoot and five toes on each hind foot where anatomy remains visible; no tongue, prey, eggs, brood chambers, young, people, tools, labels, arrows, text, logo, signature, border or watermark.
Avoid: webbed front fingers, adhesive tree-frog discs, claws, fingers shaped as five-point graphic stars, starfish hands, extra digits, long tentacles, huge eyes, pointed snout, rounded high-backed toad, parotoid glands, bright markings, malformed limbs, collage, cutaway, illustration or CGI.
```

### Call 03 · New generation · accepted frame 03

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Surinam Toad habitat gallery image 3 of 6, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a wide underwater environmental photograph showing exactly one small adult Surinam Toad within a generalized lowland tropical South American floodplain waterbody.
Scene/backdrop: One coherent slow-water scene beneath flooded forest or palm-swamp cover: tea-brown water, silty bottom, layered decomposing leaves, submerged woody roots, one fallen branch and sparse soft aquatic plants. Show gentle depth toward a shaded bank. No rapids, waterfall, coral, open ocean, aquarium, settlement or identifiable landmark.
Animal: Exactly one complete mottled brown Pipa pipa rests among dead leaves in the middle-right. Its flat leaf-like body, triangular head and spread webbed hind feet remain recognizable on inspection. The frog occupies 8–10 percent of image width and stays separate from every leaf.
Style/medium: Original photorealistic environmental natural-history photography with believable underwater haze, leaf decay and root texture.
Composition/framing: Let habitat fill the frame. Place the frog near x=0.66, y=0.69 with its complete silhouette visible against silt. Keep foreground leaves, midground roots and dark water depth connected in one camera view.
Lighting/mood: Low diffuse canopy light, tannin-brown water and quiet floodplain atmosphere.
Scientific boundary: The image represents habitat structure reported for the species. It cannot identify a river, season, hydroperiod, occupied site, water depth, water quality or habitat preference frequency.
Constraints: Exactly one frog and zero other animals; no fish, tadpoles, people, traps, signs, text, logo, signature, border or watermark.
Avoid: giant foreground frog, hidden duplicate frog, clear blue aquarium water, gravel tank, dramatic swamp disaster, tropical tourism scene, floating island, fast river, terrestrial frog pose, bright green animal, tongue, brood chambers, fantasy, illustration or CGI.
```

### Call 04 · New generation · accepted frame 04

```text
Use case: scientific-educational with photorealistic-natural rendering.
Asset type: Fauna Atlas Surinam Toad feeding gallery image 4 of 6, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Reconstruct one restrained instant of exactly one adult Surinam Toad (Pipa pipa) using underwater suction feeding toward exactly one biologically small fish.
Scene/backdrop: A dim, slow tropical floodplain pool with brown silt, dead leaves, one submerged root and suspended particles. No aquarium, feeding tool, human trace or staged enclosure.
Frog/action: One complete mottled brown, dorsoventrally flattened adult faces the small fish at close range. Show its triangular head, tiny dorsal eyes, short forelimbs held forward, star-tipped fingers spread near the prey, broad webbed hind feet and complete body. The broad mouth has a short natural opening. Show a narrow local displacement of fine particles toward the mouth and mild expansion of the front trunk. Keep the effect subtle and physical.
Prey: Exactly one small plain silvery-brown fish remains fully outside the mouth, several centimeters ahead of the snout, intact and without blood or injury.
Style/medium: Original photorealistic high-speed natural-history reconstruction with realistic water motion and restrained scientific color.
Composition/framing: Place the complete frog across the center-right, occupying about 52 percent of image width. Put the single fish in the central-left safe area. Keep the frog’s hind feet, forefingers and the whole prey inside the frame.
Lighting/mood: Diffuse underwater light with enough contrast to read the short feeding event; no spotlight or spectacle.
Scientific boundary: The still may illustrate the alignment of frog, prey and inward particle movement. It cannot measure suction force, event speed, trunk-volume change, prey detection distance, diet frequency or capture success.
Constraints: Exactly one frog and exactly one fish; no second prey; no tongue, exposed teeth, bite, wound, blood, bubbles from equipment, text, label, arrow, logo, signature, border or watermark.
Avoid: projected or sticky tongue, chewing, fish already inside mouth, giant prey, dramatic whirlpool, magical vortex, inflated balloon body, shark-like teeth, forelimbs fused with prey, extra fish, malformed digits, aquarium glass, gore, fantasy, illustration or CGI.
```

### Call 05 · New generation · rejected frame-05 initial

```text
Use case: scientific-educational with photorealistic-natural rendering.
Asset type: Fauna Atlas Surinam Toad reproduction gallery image 5 of 6, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a clinical, non-graphic underwater natural-history portrait of exactly one complete brooding female Surinam Toad (Pipa pipa) whose dorsal skin contains closed brood chambers.
Scene/backdrop: Quiet shallow tannin-stained water over soft brown silt, a few dead leaves and fine roots. Use a natural field setting with no aquarium equipment, hand, tray or medical staging.
Female morphology: One complete broad, flattened, mottled brown adult in an elevated dorsal three-quarter view. Keep the triangular head, tiny dorsal eyes, all four limbs and broad webbed hind feet visible. Across the central back, show one continuous area of thickened living skin containing many individually bounded shallow round-to-polygonal brood chambers. Each chamber remains closed by a flush or gently raised brown skin-toned cap. The skin between chambers stays intact, moist and continuous, with soft irregular spacing and no perfect grid.
Tone and tissue boundary: Treat the dorsal surface as normal specialized amphibian skin. Show zero open cavities, zero visible eggs, zero embryos, zero tadpoles and zero emerging froglets. Show no blood, exposed tissue, loose membranes, fluid, swelling, infection or wound.
Style/medium: Original photorealistic scientific natural-history photography, respectful documentary tone, moderate viewing distance and realistic skin texture.
Composition/framing: Keep the complete female centered, filling about 60 percent of image width. Make the dorsal chamber field readable without a macro crop. Preserve clear water and substrate around the full body.
Lighting/mood: Soft diffuse underwater daylight, neutral and calm.
Scientific boundary: The visible pattern may support a caption about dorsal skin incubation. The image cannot count embryos, establish chamber viability, date development, measure incubation duration, show internal anatomy or prove an imminent emergence event.
Constraints: Exactly one adult female and zero visible offspring or other animals; no text, labels, arrows, numbers, logo, signature, border or watermark.
Avoid: open honeycomb holes, black empty pits, drilled pores, lotus-seed pattern, exposed froglet heads, bursting young, translucent windows, eggs glued on top of skin, bloody tissue, torn skin, pus, parasites, disease imagery, trypophobia spectacle, body-horror lighting, extra limbs, tongue, fantasy, illustration or CGI.
```

### Call 06 · New generation · accepted frame 06

```text
Use case: photorealistic-natural, conservation fieldwork.
Asset type: Fauna Atlas Surinam Toad research and conservation gallery image 6 of 6, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a restrained documentary photograph of exactly two adult field researchers conducting a low-disturbance habitat and water survey beside a generalized tropical South American floodplain pool. Show no animal.
Scene/backdrop: Shaded lowland forest edge with one slow tannin-stained pool, muddy bank, leaf litter, exposed roots and flooded vegetation. Keep the location anonymous. No road, building, boat, crowds, waste dump or disaster staging.
Researchers and equipment: Exactly two unidentifiable adults in plain unbranded field clothing remain on a firm bank. One kneeling researcher dips exactly one small plain water-sampling bottle at the edge without entering or stirring the pool. One standing researcher holds exactly one waterproof recording board and one pencil. Show no readable writing. Their posture stays calm and task-focused.
Style/medium: Original photorealistic conservation field-documentary photography with natural forest color and practical equipment.
Composition/framing: Use a wide bank-level frame. Place the pool and submerged leaf habitat across the left two-thirds; keep both complete researchers on the right at modest scale. Preserve the water surface and bank connection.
Lighting/mood: Soft overcast canopy light with restrained earth tones and no heroic staging.
Scientific boundary: The image represents non-contact habitat documentation and water sampling. It cannot establish an eDNA protocol, species detection or absence, abundance, population trend, water-quality result, named institution, exact locality or conservation outcome.
Constraints: Exactly two people, one bottle, one recording board and one pencil; zero visible animals; no nets, traps, hooks, bags, handling, excavation, chemicals, labels, readable notes, text, logo, signature, border or watermark.
Avoid: captured or held frog, release ceremony, aquarium, pitfall trap, dip net, electrofishing gear, needles, surgery, dead animal, pollution spectacle, deforestation machinery, branded uniforms, map pin, celebratory pose, infographic, illustration or CGI.
```

### Call 07 · Precise-object edit · accepted frame 02 with boundary

```text
Use case: precise-object-edit.
Input image: Image 1 is the edit target, a complete underwater Surinam Toad morphology portrait.
Primary request: Change only the terminal anatomy of the two front hands, with the near front hand as the clearest target. Keep exactly four long unwebbed fingers on each forefoot. Make the end of each finger a small, biologically subtle, fleshy four-lobed rosette-like tactile organ joined directly to the finger. Each terminal organ should look organic and tiny, not like a graphic five-point star, suction cup, adhesive disc, claw, flower, starfish or separate object.
Invariants: Preserve the same single complete frog, flattened body, triangular head, tiny eyes, mottled brown skin, all limb positions, broad webbed hind feet, substrate, underwater lighting, exact framing and photorealism. Do not crop, add digits, remove digits, change rear feet, change body shape or add other subjects.
Constraints: exactly one complete frog; no text, labels, arrows, logo, signature, border or watermark.
```

The edit improved the terminal scale and separation, but the accepted pixels show only small rounded terminal organs. They do not resolve the exact four-lobed star morphology. Product captions, alt text and tests must not claim that morphology from this frame.

### Call 08 · Precise-object edit · accepted frame 05

```text
Use case: precise-object-edit.
Input image: Image 1 is the edit target, a complete brooding female Surinam Toad underwater.
Primary request: Change only the dorsal brood-chamber field. Replace the prominent rounded mound-like bumps with many shallow, flush-to-gently-raised, irregular round-to-polygonal brown skin-toned chamber lids integrated into one continuous living dorsal skin surface. Keep subtle seams between chambers and intact skin between them. The surface should read as specialized brood-incubating amphibian skin, not stones or tumors.
Invariants: Preserve the same single complete female, exact flattened body, triangular head, all four limbs, webbed hind feet, pose, substrate, underwater lighting, composition, color and photorealism. Keep every chamber closed. Keep zero visible eggs, embryos, tadpoles or froglets.
Constraints: no open holes, black pits, drilled pores, lotus-seed pattern, translucent windows, blood, wound, exposed tissue, fluid, infection, parasites, body-horror lighting, text, logo, signature, border or watermark.
```

The accepted output presents shallow closed polygonal skin-toned lids as one intact dorsal surface. No open cavity, egg, embryo, tadpole or froglet appears.

## Static validation

- Source and runtime directories contain the six accepted image basenames. Removing `-source` from each PNG basename produces its WebP basename.
- All twelve accepted files decode as 1536 × 1024, sRGB, opaque, single-frame images. Source files use 8-bit palette PNG; runtime files use lossy VP8 WebP.
- The twelve accepted files have twelve distinct SHA-256 hashes.
- Original-resolution review must preserve one complete frog and zero other animals in frames 01 through 03; one complete frog and exactly one intact fish in frame 04; one complete adult with closed intact dorsal skin and zero visible young in frame 05; and exactly two people with zero visible animals in frame 06.
- Frame 02 supports long unwebbed front fingers with small rounded terminal organs. Tests, alt text and captions must not claim that the pixels resolve the exact four-lobed star morphology.
- Frame 04 serves as a feeding reconstruction and cannot prove suction from a still image. Frame 05 must retain closed, intact, non-graphic skin with zero visible young, eggs, embryos or open chambers.
- Review must reject any output that introduces a tongue strike, exposed teeth, extra limbs, malformed feet, open brood cavities, visible young, blood, wound, readable text, logo, signature, watermark or border.
- ImageMagick 7.1.2-22 metadata checks, webpinfo inspection and original-resolution source/runtime contact sheets supplied static verification. Repository policy excluded GUI and headless-browser verification.

## Accepted file hashes

| No. | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01  | `d9f66e16a7e030c0d0488b0f34c4fd59ea908079e820d870b23172de68c7fbbd` | `a000eea1657b19658ebd581e1536fe0677b254a6aae39978fd2d71f9c2d4e799` |
| 02  | `701e687e43c72ba455eb51f4b6075d9758f42520649c190222e6c7c05e817158` | `b713055213adfce0206831777c625d0f7afb9becb19ab0a410335a6f49761a08` |
| 03  | `73c7754c4ab360c71f93cde1080630e7db97539c49761bbbb4d66cc17ba998e7` | `5a6425e1e339c4a8c7788538ae37d3f6fab9866210866fd67e701448e759a5f1` |
| 04  | `f1ede733b74b6c043979e71c7d6aff5cf377cbb5832233c7a2d7f38e0da3fc1c` | `d388fc97123cf7daf5372265cdf74114b23068d546e192419f1da422ecab562d` |
| 05  | `f6c2b4996aff5730db02d5f2684eb130f00551abd5cca9d9c4d3f22ae615d85e` | `2113192f6d881b97d09986477875eddaaa221205d0fe03c083c503a1ba274870` |
| 06  | `7833cbc7d5c88218acc2959fb171a3c719b5ac8f84ad10544d5e183940be94a1` | `ab64719f9840fc4c1cf71859c8a2b1d80fec3f998860540910f73a2335f1f5e3` |
