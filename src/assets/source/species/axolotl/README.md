# Axolotl image set

These six original project images were generated with Codex's built-in image generation tool for the complete Fauna Atlas axolotl profile. They use the dark mottled wild phenotype throughout, keep Xochimilco and its fixed chinampa landscape visible at habitat scale, and avoid presenting the familiar pink captive morph as a wild animal. They also avoid aquarium staging, exposed regeneration wounds, exact refuge locations and claims that a short-term conservation intervention has restored the wild population.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/axolotl/*.webp`
- Dimensions: 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | File | Observation |
| --- | --- | --- |
| 01 | `01-wild-type-canal-portrait-source.png` | One complete dark wild-type adult at the right of a softly turbid Xochimilco canal; cover and featured card |
| 02 | `02-external-gills-and-fin-source.png` | Complete side profile showing three near-side gill stalks, dark mottling and the continuous dorsal-tail fin |
| 03 | `03-chinampa-canal-habitat-source.png` | One small dark adult below a fixed raised chinampa, ahuejote willows and a narrow connected canal |
| 04 | `04-suction-feeding-source.png` | One adult using a short suction flow on one biologically small aquatic larva |
| 05 | `05-eggs-on-aquatic-plants-source.png` | Separate gelatinous eggs attached individually to submerged plants, with one non-guarding adult in the background |
| 06 | `06-chinampa-refuge-canal-source.png` | One small adult inside a vegetated side canal separated by a modest permeable filter and fish barrier |

Static inspection accepted all six finals. Every source and runtime image is RGB, 3:2 and 1536 × 1024. Frame 04 replaces an initial generation whose tail ended at the right crop; the accepted targeted edit reduced and shifted the same animal so the complete tail is visible. Frame 05 uses roughly twelve eggs as a visual sample and does not claim a wild clutch size. Frames 03 and 06 keep chinampas as fixed raised fields rather than floating rafts. The refuge structure in frame 06 is an explanatory representation of the coarse filtering and invasive-fish exclusion principle, not a reproducible engineering plan or identifiable site.

## Final prompts

### 01 · Wild-type canal portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas axolotl species-detail cover and featured editorial card, exact 3:2 horizontal landscape, original project asset
Primary request: Create a restrained natural-history underwater portrait of exactly one anatomically accurate adult wild-type Mexican axolotl (Ambystoma mexicanum) resting alertly in a remnant Xochimilco canal.
Scene/backdrop: Cool shallow canal water in Xochimilco, Mexico City, with a fine dark silt bottom, native submerged ribbon-like plants, a few thin roots and decaying natural leaf fragments, gently suspended particles and soft olive depth. Wild wetland only; no aquarium glass, gravel, plastic plant, cave ornament, feeding dish, human trace, boat or skyline.
Subject: Exactly one adult wild-type A. mexicanum with natural dark charcoal-brown to olive-brown mottled skin and subtle gold speckling, broad flattened head, tiny lidless black eyes, closed mouth, exactly three matched pairs of moderately feathery external gill stalks swept back from the head with dark burgundy-brown filaments, elongated body, a continuous low dorsal-to-tail fin and laterally compressed complete tail. Four short coherent limbs, four unwebbed digits per forefoot and five per hind foot. Calm low quadrupedal posture on the silt, complete silhouette and tail tip visible.
Style/medium: Original photorealistic documentary freshwater wildlife photography, understated natural-history museum-publication quality, realistic amphibian skin, translucent gill filaments, plant texture and water particles; restrained processing.
Composition/framing: Exact 1536 x 1024, 3:2 horizontal. Place the complete axolotl in the right third near x=0.68, y=0.58, occupying about 38 percent of image width. Preserve broad quiet underwater negative space across the left half for interface typography and responsive crops. Low water-bottom eye-level viewpoint, all limbs and tail tip inside frame with breathing room.
Lighting/mood: Soft diffuse overcast daylight filtered through shallow canal water, quiet and scientifically grounded, no theatrical rim light.
Color palette: Muted olive, charcoal brown, dark silt gray, restrained aquatic green and subtle natural gold flecks; gills dark brown-burgundy, never neon.
Constraints: Exactly one animal; unmistakable wild dark phenotype; anatomically coherent external gills, limbs, digits and finned tail; no injury; no text, labels, logo, signature, border or watermark.
Avoid: pink, white, leucistic, albino, golden or pet-trade morph; bright red oversized fluffy gills; smiley cartoon face; salamander with eyelids; fish scales; frog body; missing, duplicated or fused limbs; extra digits; detached gills; cropped tail; other animals; visible eggs; regeneration wound; aquarium equipment; fantasy, illustration, CGI, oversaturation or glossy stock-photo style.
```

### 02 · External gills and fin

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas morphology gallery image, exact 1536×1024 horizontal 3:2
Primary request: One complete adult wild-type Mexican axolotl (Ambystoma mexicanum) in a calm left-facing side profile underwater in a Xochimilco canal.
Scene/backdrop: fine dark silt, sparse submerged plants, softly turbid olive-brown natural canal water; no aquarium.
Subject: exactly one dark gray-brown to olive-brown mottled axolotl with subtle gold flecks; broad flat head, tiny lidless black eye, closed mouth; three separate moderately feathery external gill stalks on the near side, dark burgundy-brown; elongated trunk; continuous low dorsal fin merging into a tall laterally compressed complete tail; four short coherent limbs, four unwebbed digits on forefeet and five on hind feet.
Style/medium: photorealistic freshwater natural-history field photography, restrained museum-publication quality.
Composition/framing: entire animal from snout to tail tip centered in the safe area, about 70 percent of width, every foot inside frame, strict side view, survives centered 16:9 crop.
Lighting/mood: soft diffuse shallow-water daylight, clear morphology, natural colors.
Constraints: exactly one animal, wild dark phenotype, anatomically coherent, no text, label, logo, border or watermark.
Avoid: pink/white/leucistic/albino/golden pet morph, bright red oversized gills, cartoon smile, eyelids, fish scales, frog body, missing or duplicated limbs, extra digits, detached gills, cropped tail, injury, other animals, eggs, aquarium equipment, illustration, CGI, fantasy, oversaturation.
```

### 03 · Chinampa canal habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas axolotl habitat gallery image 3 of 6, exact 1536×1024 horizontal 3:2
Primary request: A restrained split-level environmental photograph showing exactly one small wild-type Mexican axolotl within the scale of a traditional Xochimilco chinampa canal.
Scene/backdrop: one coherent real scene at the waterline. Above water: a fixed raised chinampa agricultural plot with dark soil, modest vegetable rows, dense bank roots and mature ahuejote willow trees; a narrow calm canal, reeds and wetland vegetation. Below water: softly turbid olive water, fine silt bottom, submerged plants and willow roots. Chinampa is fixed land stabilized by soil and tree roots, never a floating island. No restoration barrier in this frame.
Animal: exactly one complete, small but findable adult wild-type Ambystoma mexicanum underwater in the middle ground near x=0.64 y=0.72, only 8–10 percent of image width. Dark olive-brown mottled skin with subtle gold flecks, broad flat head, tiny lidless eyes, three paired external gills, short limbs, continuous dorsal-tail fin and complete laterally flattened tail. No other animal.
Style/medium: original photorealistic environmental natural-history documentary photography, understated museum-publication quality, believable waterline optics and humid agricultural textures.
Composition/framing: 3:2 wide establishing view, camera half above and half below water, deep habitat scale, complete axolotl recognizable on inspection but not dominant.
Lighting/mood: soft overcast morning, cool diffuse underwater light, quiet living landscape.
Constraints: exactly one animal; fixed chinampa, connected canal, natural dark wild phenotype; no text, signs, map pins, logo, border or watermark.
Avoid: pink/white/leucistic pet axolotl, giant foreground animal, floating garden raft, colorful tourist boats, city skyline, aquarium, concrete pool, restoration filter barrier, other fish or amphibians, tropical jungle spectacle, collage, infographic, illustration, CGI, fantasy or oversaturation.
```

### 04 · Suction feeding

The accepted frame began with this generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas axolotl feeding gallery image 4 of 6, exact 3:2 horizontal landscape, original project asset
Primary request: Create a scientifically restrained underwater natural-history photograph of exactly one wild-type Mexican axolotl (Ambystoma mexicanum) using suction feeding on one tiny aquatic worm or insect larva in a Xochimilco canal.
Scene/backdrop: A cool, softly turbid vegetated canal remnant in Xochimilco, Mexico City: fine dark silt bottom, a few native submerged plant stems and roots, suspended natural particles, muted underwater depth; no aquarium, glass, tank decor, feeding tool, human trace or tourism prop.
Subject/action: Exactly one anatomically accurate adult wild-type A. mexicanum in a low forward posture just above the silty bottom. Natural dark charcoal-brown to olive-brown mottled skin with subtle gold speckling, broad flattened head, tiny lidless dark eyes, three matched pairs of moderately feathery external gill stalks swept back from the head, elongated body, continuous low dorsal-to-tail fin and laterally compressed tail, four short coherent limbs, four unwebbed digits on each forefoot and five on each hind foot. Capture the instant the mouth opens only slightly to create a short suction flow toward exactly one biologically tiny dark aquatic worm or insect larva several centimeters ahead; prey remains separate from the mouth, with subtle displaced silt/particles indicating water flow. No tongue, teeth or bite.
Style/medium: Original photorealistic documentary freshwater wildlife photography, natural-history museum publication quality, realistic amphibian skin, translucent gill filaments, silt and water; restrained processing.
Composition/framing: Exact 1536 x 1024, 3:2 horizontal. Complete axolotl in a central-right three-quarter side view, occupying about 48 percent of image width and surviving a centered 16:9 crop; head and prey clearly readable, every limb and tail tip inside frame with breathing room.
Lighting/mood: Soft diffuse overcast daylight filtered through shallow canal water, quiet observational moment, no dramatic spotlight.
Color palette: Muted olive brown, charcoal, silt gray, restrained aquatic green; gills dark reddish-brown, never neon.
Constraints: Exactly one axolotl and exactly one tiny prey animal; unmistakable wild dark phenotype; all anatomy coherent; mouth only naturally slightly open; no visible injury; no text, labels, logo, signature, border or watermark.
Avoid: pink, white, leucistic, albino, golden or pet-trade morph; bright red oversized fluffy gills; smiley cartoon face; salamander with eyelids; fish scales; frog body; missing or duplicated limbs; extra digits; detached gills; large fish prey; chewing, long tongue, visible teeth, blood, gore, magical suction vortex, bubbles from an aerator, aquarium gravel, plastic plants, CGI, illustration, fantasy, oversaturation or stock-photo gloss.
```

The accepted final then used this single targeted edit:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas axolotl feeding gallery image 4 of 6, exact 3:2 horizontal landscape
Input images: Image 1 is the edit target, an otherwise accepted underwater field photograph of one wild-type Mexican axolotl suction-feeding near one tiny aquatic larva.
Primary request: Change only the framing and subject scale so the axolotl is about 12 percent smaller and shifted slightly left, revealing its complete laterally compressed tail and tail tip with comfortable water-and-vegetation breathing room before the right edge. Preserve the exact feeding moment, the single tiny prey at left, and the existing natural underwater setting.
Constraints: Keep the same single dark mottled wild-type axolotl identity, broad head, small lidless eyes, exactly three paired external gill stalks, subtle dorsal-to-tail fin, slightly open mouth, all four coherent limbs, forefeet with four unwebbed digits, hind feet with five, same pose, same prey, silt flow, lighting, colors, camera height, 1536×1024 3:2 framing and photorealism. Exactly one axolotl and one prey animal. No text, logo, border or watermark.
Avoid: cropped tail, changed action, new animals, extra prey, pink/leucistic coloration, bright red gills, added or missing limbs, malformed or extra digits, altered background, aquarium elements, illustration or CGI.
```

### 05 · Eggs on aquatic plants

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas axolotl reproduction gallery image 5 of 6, exact 3:2 horizontal landscape, original project asset
Primary request: Create a scientifically restrained underwater natural-history photograph showing individually deposited Mexican axolotl eggs attached to aquatic plants in a Xochimilco canal, with exactly one adult wild-type female passing in the soft background and showing no parental care.
Scene/backdrop: Cool, softly turbid vegetated canal remnant in Xochimilco, Mexico City, with fine dark silt, native submerged ribbon-like leaves and stems, suspended natural particles and muted underwater depth; no aquarium, glass, tank gravel, breeding mop, human trace or staged prop.
Primary subject: In the sharp foreground and central safe area, show about twelve separate, biologically small, nearly spherical transparent gelatinous eggs, each individually adhered at spaced intervals to the undersides or sides of several real plant leaves and stems. Each egg has one small dark developing embryo inside; natural slight variation in orientation and focus. They are separate individual capsules, not one communal mass, not strings, foam, beads or caviar.
Background animal: Exactly one anatomically accurate adult female wild-type Ambystoma mexicanum swims calmly in the middle-background, separated clearly from the eggs and neither touching nor guarding them. Dark charcoal-brown to olive-brown mottled skin with subtle gold speckling, broad flattened head, tiny lidless dark eyes, three paired moderately feathery external gills, elongated body, continuous low dorsal-to-tail fin, laterally compressed tail, four short coherent limbs. Entire animal recognizable but softly focused; no sex-identification anatomy claim beyond contextual adult female.
Style/medium: Original photorealistic freshwater field macro photography, natural-history museum publication quality, realistic gelatin, embryos, plant surfaces, amphibian skin and water; restrained documentary processing.
Composition/framing: Exact 1536 x 1024, 3:2 horizontal. Egg-bearing plants cross the central and left foreground; complete adult in the middle-background at right, occupying about 24 percent of width. Frame survives a centered 16:9 crop and retains all egg capsules and the animal silhouette.
Lighting/mood: Soft diffuse overcast daylight filtered through shallow water, intimate, cool and observational.
Color palette: Muted olive green, silt brown, transparent gray jelly, charcoal-gold animal; gills dark reddish-brown, never neon.
Constraints: About twelve separate individual eggs and exactly one adult axolotl; eggs attached individually to plants; no adult contact with eggs and no implication of guarding; unmistakable wild dark phenotype; no text, labels, logo, signature, border or watermark.
Avoid: clustered frogspawn mass, bead necklace, long fish-egg string, foam nest, eggs carried on body, eggs inside mouth, nest, brooding, parental care, mating, spermatophore, larvae already hatched, multiple adults, pink/white/leucistic/golden pet morph, bright red fluffy gills, cartoon face, aquarium equipment, plastic plants, illustration, CGI, fantasy, oversaturation or stock-photo gloss.
```

### 06 · Chinampa-refuge canal

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas axolotl conservation gallery image 6 of 6, exact 3:2 horizontal landscape, original project asset
Primary request: Create a restrained split-level freshwater conservation photograph of a small chinampa-refuge canal in Xochimilco, showing how a vegetated side canal is connected to yet protected from the larger canal by a simple ecological filter and invasive-fish barrier; exactly one small wild-type Mexican axolotl is visible underwater inside the refuge.
Scene/backdrop: One coherent real Xochimilco chinampa-edge scene. Above water: a fixed raised agricultural plot edged by soil, reeds, roots and mature ahuejote willow trees, with modest vegetable beds set back from the bank; no chemical spraying. A narrow calm side canal runs beside it. Near one side of the frame, the refuge inlet visibly but unobtrusively uses a simple field-built barrier/filter of untreated wood stakes, coarse mesh contained between slats, bundled native aquatic vegetation and porous local stone, allowing water exchange while excluding carp and tilapia. The larger main canal continues beyond. Below water: clearer but naturally particulate refuge water, silt, submerged native plants and roots.
Animal: Exactly one small, anatomically accurate adult wild-type Ambystoma mexicanum rests underwater among plants well inside the protected side canal. Dark charcoal-brown to olive mottled skin with subtle gold speckling, broad head, tiny lidless eyes, three paired moderately feathery external gills, elongated body, low dorsal-to-tail fin, laterally compressed tail and four short coherent limbs. The animal is findable but only about 10 percent of image width, conveying habitat scale.
Style/medium: Original photorealistic environmental conservation and natural-history documentary photography; believable field infrastructure, waterline optics, agricultural texture and aquatic habitat; understated museum-publication quality, restrained processing.
Composition/framing: Exact 1536 x 1024, 3:2 horizontal, single split-level camera view at the waterline, not a collage or diagram. Chinampa bank and willows establish the upper half, underwater refuge habitat fills the lower half, the modest filter inlet sits near the left third, and the complete small axolotl is near x=0.66 y=0.72. Preserve clear visual flow between refuge and main canal.
Lighting/mood: Soft overcast morning, cool filtered underwater light, practical restoration rather than triumphal spectacle.
Color palette: Earth brown, willow gray-green, muted reed green, cool olive water, dark mottled animal.
Constraints: Exactly one animal total; unmistakable dark wild phenotype; fixed chinampa landform, not floating; the barrier remains permeable and ecologically modest, not a concrete dam; no claim of population recovery; no exact location marker; no text, label, sign, logo, signature, border or watermark.
Avoid: pink/white/leucistic/golden pet axolotl, multiple axolotls, carp, tilapia or other visible animals, scientist holding animal, release ceremony, aquarium, tank, pool liner, fish farm, concrete swimming pool, giant engineered dam, industrial filter, plastic bottles, trash-disaster imagery, floating garden island, tourist trajinera, colorful boats, Mexico City skyline, map pin, dramatic before-after split, collage, infographic, illustration, CGI, fantasy, oversaturation or glossy eco-advertising.
```
