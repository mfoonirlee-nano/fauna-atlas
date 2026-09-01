# Emperor Scorpion image set

Codex's built-in image generation tool created these six original project images on 2026-09-01 for the complete Fauna Atlas *Pandinus imperator* profile. They show a forest-refuge portrait, a full-body morphology view, ultraviolet-excited cuticular fluorescence, paired pectines, pedipalp prey restraint, and maternal brood care. They do not document named animals, sites, specimens, field observations, experiments, trade shipments, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/emperor-scorpion/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/emperor-scorpion/*.png` with TinyPNG
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成科学情景重建`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-forest-refuge-portrait-source.png` | `01-forest-refuge-portrait.webp` | One complete black adult rests at a small earthen refuge beneath decayed wood; the left side retains dark leaf-litter negative space |
| 02 | `02-dorsal-morphology-source.png` | `02-dorsal-morphology.webp` | One complete adult on plain soil keeps both robust claws, four walking-leg pairs, one metasoma, one telson, and the full sting inside frame |
| 03 | `03-ultraviolet-fluorescence-source.png` | `03-ultraviolet-fluorescence.webp` | One complete adult emits cyan-green cuticular fluorescence under external ultraviolet illumination against dark leaf litter |
| 04 | `04-pectine-sensory-combs-source.png` | `04-pectine-sensory-combs.webp` | A deliberate underside macro makes two pale, attached comb-shaped pectines readable without a dissection or detached anatomy |
| 05 | `05-pedipalp-prey-restraint-source.png` | `05-pedipalp-prey-restraint.webp` | One adult holds one intact dark beetle-like arthropod between its claws while the telson remains separate from the prey |
| 06 | `06-maternal-brood-care-source.png` | `06-maternal-brood-care.webp` | One adult female carries a dense cluster of pale first-instar young on her back at a refuge threshold; no young appears on the soil |

## Static verification

The compressed source PNGs and runtime WebPs passed original-resolution visual inspection on 2026-09-01. ImageMagick decoded all 12 files at 1536 × 1024 in sRGB and reported each file as opaque and single-frame. Review at source and runtime resolution preserved the complete subject in frames 01 through 03, both pectines in frame 04, physical separation between the sting and prey in frame 05, and the brood's placement on the female in frame 06. All 12 files have distinct SHA-256 hashes.

## Evidence boundaries

- AI-generated external form cannot identify *Pandinus imperator*. A species determination requires locality, diagnostic characters, taxonomic literature, and often a specialist or specimen examination.
- Frames 01 and 02 show a plausible black adult with robust pedipalps. They do not establish sex, age, body length, mass, geographic origin, or diagnostic trichobothrial counts.
- Frame 01 reconstructs a generalized West African forest and savanna refuge. It does not identify a country, reserve, burrow, termite mound, population, or microclimate.
- Frame 03 shows fluorescence under external ultraviolet excitation. It does not depict bioluminescence or independently test Fasel et al.'s 1997 conclusion that the emitted light plays no biological role.
- Frame 04 shows representative pectine placement and paired form. Generated teeth cannot support tooth counts, sex determination, sensory thresholds, substrate chemistry, or species diagnosis.
- Frame 05 refers to experimental evidence that sting use changes with body and prey size. It does not identify a natural prey species, document a wild encounter, prove that adults never sting prey, or establish diet proportions.
- Frame 06 reconstructs maternal carrying after birth. It cannot establish a fixed brood size, embryo count, birth date, maternal identity, survival rate, or the duration of family cohesion.
- No frame establishes distribution, abundance, population trend, IUCN status, CITES controls, trade volume, venom severity, or medical risk.

## Shared morphology anchor

The prompts requested one broad, low, glossy black scorpion with two massive rounded granular pedipalp claws, four walking-leg pairs, and one coherent five-segmented metasoma ending in one dark reddish-brown telson and one curved aculeus. Full-body frames kept the animal and its appendages inside the canvas. The prompts excluded extra claws, extra legs, multiple tails, lobster or crab anatomy, spider bodies, human contact, text, labels, logos, and watermarks. These instructions supported visual consistency; they do not make the generated animal a voucher or diagnostic plate.

## Final prompts

### 01 · Forest refuge portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Emperor Scorpion cover image 1 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original natural-history photograph of exactly one complete adult Emperor Scorpion, Pandinus imperator, emerging calmly from a shallow earthen refuge beneath a decaying log on a generalized West African forest–savanna mosaic floor after rain.
Subject: One large glossy black scorpion with a broad low body, two exceptionally robust rounded granular pedipalp claws with sparse sensory hairs, exactly four pairs of walking legs, and one coherent five-segmented metasoma ending in one dark reddish-brown bulbous telson and one curved aculeus. Keep both claws, all eight walking legs, the full tail and sting inside frame. The animal is calm, low to the ground, and not attacking.
Scene/backdrop: Damp reddish-brown soil, leaf litter, small roots, a weathered fallen log and a modest dark burrow entrance. No identifiable country, reserve, landmark, enclosure or human object.
Style/medium: Original photorealistic professional field-macro wildlife photography, restrained museum-publication color, credible granular cuticle, damp soil and decayed wood.
Composition/framing: Exact landscape 3:2. Place the complete scorpion across the center-right around x=0.67 y=0.58, facing slightly left. Preserve broad darker leaf-litter negative space on the left for responsive page typography.
Lighting/mood: Soft diffuse dusk light after rain, quiet observational mood, natural highlights on black cuticle without plastic shine or horror styling.
Evidence boundary: This is a generalized AI natural-history reconstruction, not a voucher, locality record, size measurement or diagnostic image.
Constraints: Exactly one complete scorpion and no other animal; two pedipalp claws, eight walking legs, one tail and one sting; no cropped appendage; no text, numbers, labels, arrows, ruler, logo, signature, border or watermark.
Avoid: extra claws, extra legs, two tails, lobster anatomy, crab body, spider abdomen, giant monster scale, raised attack tail, venom droplet, prey, blood, human hand, terrarium, UV glow, CGI, illustration, painting, fantasy color or oversaturation.
```

### 02 · Dorsal morphology

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas Emperor Scorpion full-body morphology gallery image 2 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original high-oblique near-dorsal natural-history morphology photograph of exactly one complete adult Pandinus imperator resting on a simple patch of dark compact soil.
Subject and anatomy: Present one coherent large black scorpion from the front chelicerae and paired massive rounded granular pedipalp claws to the final curved sting. Show exactly four pairs of walking legs attached to the body, a broad prosoma, segmented abdomen, and one five-segmented tail narrowing to one dark reddish telson. The claws should look unusually broad and powerful, with visible granulation and sparse hairs. Keep every claw tip, walking-leg tip and the entire tail inside generous margins. The animal rests neutrally with tail laid in a loose side curve, not poised to strike.
Scene/backdrop: One matte dark brown soil plane with a few fine leaf fragments for scale, no burrow, prey, second animal, specimen pin, tray or laboratory label.
Style/medium: Photorealistic museum-reference field photography with natural cuticle texture and restrained color, not an illustration, diagram, composite or cutout.
Composition/framing: Exact landscape 3:2, near-orthographic high-oblique view. Center the whole scorpion around x=0.52 y=0.53 with clear separation between the claws, each walking leg and tail segments.
Lighting/mood: Broad diffuse overhead illumination with soft contact shadows, neutral scientific presentation.
Evidence boundary: The image teaches representative external form but cannot identify a specimen to species or verify exact diagnostic setae and trichobothria.
Constraints: Exactly one complete scorpion; exactly two claws, eight walking legs, one tail, one telson and one sting; no other animal, text, numbers, tick marks, scale bar, labels, arrows, logo, signature, border or watermark.
Avoid: extra appendages, merged legs, two tails, crab or lobster claws detached from pedipalps, spider body, wing, antennae, specimen pin, white seamless studio, ruler, infographic, X-ray, cutaway, UV glow, CGI, illustration, fantasy color or attack pose.
```

### 03 · Ultraviolet fluorescence

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas Emperor Scorpion ultraviolet-fluorescence gallery image 3 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original nocturnal field-macro photograph of exactly one complete adult Pandinus imperator on leaf litter while its cuticle fluoresces cyan-green under ultraviolet excitation.
Subject and anatomy: One coherent emperor scorpion with two very broad rounded pedipalp claws, exactly four pairs of walking legs and one curved segmented tail ending in one telson and sting. Under ultraviolet illumination, the hardened cuticle emits a restrained blue-green/cyan fluorescence while joints and deep shadows remain darker. Keep the full animal and all appendages inside frame. It is resting calmly, not attacking.
Scene/backdrop: Generalized West African forest-floor leaf litter at night, mostly dark violet-brown with small natural textures. No visible lamp, flashlight, person, enclosure or second animal.
Style/medium: Credible photorealistic ultraviolet natural-history photography, museum documentation quality. Make fluorescence look like external-light-excited cuticular fluorescence, not self-produced bioluminescence, radioactive glow or magical aura.
Composition/framing: Exact landscape 3:2. Use a high oblique view with the animal centered around x=0.56 y=0.54 and a readable complete silhouette.
Lighting/mood: Local ultraviolet excitation with controlled cyan-green emission and faint ambient night detail; scientific and restrained.
Evidence boundary: The scene demonstrates fluorescence under external UV. It does not depict a behavioral experiment, independently test Fasel et al.'s 1997 no-biological-role conclusion, or diagnose the species.
Constraints: Exactly one complete scorpion; two claws, eight walking legs, one tail and sting; no other animal, text, labels, arrows, lamp, human hand, logo, signature, border or watermark.
Avoid: glowing eyes, internal light source, neon aura, fireflies, fantasy magic, radioactive symbols, laser beams, extra legs or claws, two tails, attack pose, prey, blood, terrarium, CGI, illustration, painting or oversaturation.
```

### 04 · Pectine sensory combs

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas Emperor Scorpion pectine sensory-organ gallery image 4 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original extreme field-macro view of the underside and rear body of exactly one calm adult Pandinus imperator walking slowly over fine dark soil, making its paired pectines readable.
Subject and anatomy: Show part of one coherent black emperor scorpion from a low rear-side angle. The broad abdomen is supported naturally by exactly four pairs of walking legs. On the ventral surface just behind the final walking-leg pair, show exactly two small pale cream comb-shaped pectines, one on each side, with short parallel teeth lightly contacting or hovering just above the soil. They are attached sensory organs, not wings, feathers or gills. Continue one coherent segmented tail out of the upper background; the giant claws may sit softly out of focus in the front background. A deliberate close crop through appendage tips is allowed because this is a structure macro.
Scene/backdrop: Fine dark reddish-brown soil with subtle grains and a few tiny leaf fibers, no prey, second animal, hand, instrument, tray or enclosure.
Style/medium: Original photorealistic professional macro natural-history photography, museum educational quality, credible cuticle, fine sensory hairs and shallow controlled depth of field.
Composition/framing: Exact landscape 3:2. Place the paired pectines around x=0.51 y=0.54 and keep both organs fully visible, separate and attached to the underside.
Lighting/mood: Soft raking diffuse light that separates the pale comb teeth from black cuticle and soil; neutral, not clinical or horrific.
Evidence boundary: This reconstruction teaches the position and paired form of pectines. It cannot measure tooth count, prove a specific sensory response or identify a specimen to species.
Constraints: Exactly one scorpion; exactly two attached comb-like pectines; one body and one tail; no detached anatomy, dissection, cutaway, text, labels, arrows, ruler, logo, signature, border or watermark.
Avoid: bird feathers, insect wings, fish gills, exposed organs, wound, blood, overturned dead scorpion, extra pectines, extra tails, crab underside, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 05 · Pedipalp prey restraint

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Emperor Scorpion prey-capture gallery image 5 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original nocturnal natural-history reconstruction of exactly one adult Pandinus imperator restraining exactly one intact dark beetle-like arthropod between its huge pedipalp claws on leaf litter, while the tail stays relaxed and does not touch the prey.
Scorpion: One large glossy black emperor scorpion with two massive broad rounded granular claws, exactly four pairs of walking legs and one coherent five-segmented tail ending in one telson. Both claws hold the beetle at ground level. The tail curves loosely to the side with the sting clearly separated from the prey and not in a strike pose.
Prey: Exactly one modest-size dark brown broad beetle-like arthropod, intact and partly enclosed by the claws. No other prey, no severed parts, fluid, wound or blood.
Scene/backdrop: Generalized West African forest–savanna leaf litter at night beside a root and damp soil, no enclosure or human object.
Style/medium: Original photorealistic professional field-macro wildlife photography, restrained documentary color and credible textures.
Composition/framing: Exact landscape 3:2. Keep both complete animals inside frame, with the scorpion around x=0.55 y=0.55 and a clear view of the relaxed tail separated from the prey.
Lighting/mood: Soft low-angle nocturnal field light, calm observation without action-movie drama or horror.
Evidence boundary: Captive trials show size-dependent sting use and powerful pedipalpal restraint; this generated field scene does not document a wild prey species, feeding rate or universal refusal to sting.
Constraints: Exactly one complete scorpion and one intact beetle-like arthropod; the sting does not contact the prey; no injury, blood, venom droplet, text, label, arrow, logo, signature, border or watermark.
Avoid: multiple insects, feeding swarm, mouse, lizard, torn prey, raised striking tail, sting entering prey, monster scale, extra claws or legs, two tails, human hand, terrarium, CGI, illustration, painting, fantasy color or oversaturation.
```

### 06 · Maternal brood care

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas Emperor Scorpion maternal-care gallery image 6 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original close natural-history photograph of exactly one adult female Pandinus imperator sheltering calmly at a burrow threshold while carrying a dense cohesive brood of pale first-instar young on the upper surface of her abdomen.
Mother: One complete glossy black emperor scorpion with two massive rounded granular claws, exactly four pairs of walking legs, and one coherent curved tail ending in one telson and sting. She rests low and protective, not attacking. Keep her full outline, both claws and full tail inside frame.
Brood: A cohesive layer of about 18 to 24 tiny milky-white first-instar scorpions clustered only on the mother's back, each reading as a soft-bodied miniature scorpion with small paired claws, legs and a short curled tail. They are live young, not eggs, maggots, spiders or beetles. No young lies on the ground and none floats or merges into the mother's cuticle.
Scene/backdrop: Quiet earthen burrow threshold under decayed wood in a generalized West African forest setting, dark soil and a few leaves, no second adult or human object.
Style/medium: Original photorealistic professional macro natural-history photography, sober museum-publication treatment, believable black cuticle and pale soft juveniles.
Composition/framing: Exact landscape 3:2. Place the complete mother around x=0.56 y=0.57, viewed from high oblique so the full brood cluster and maternal outline remain readable.
Lighting/mood: Soft diffuse dawn light entering the refuge, protective and observational, no horror styling.
Evidence boundary: This is a generalized maternal-care reconstruction. It does not state a fixed brood size, document a birth event or establish how long every family remains together.
Constraints: Exactly one adult female; about 18 to 24 young only on her back; no egg sac, loose eggs, second adult, prey, wound, blood, text, labels, arrows, logo, signature, border or watermark.
Avoid: baby spiders, insect larvae, white beads, eggs, young scattered on soil, fused mass, extra adult, cannibalism, attack pose, raised sting, human hand, terrarium, CGI, illustration, painting, fantasy color or oversaturation.
```

## Accepted file hashes

| No. | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `2d0382f7a9d57d2e24e2e374678a771c2b26e4f21ef3ad9e4df2c97299027d95` | `73a6942f0b56435d458c10dd61dd99898f24e8bce8a19b865d9b58276f44d373` |
| 02 | `fb87e0a459e052fc279584a2966d47afef4e41de486e6e8f7a3dde200083f742` | `b70931e42a96d5be481496f9567c08f65bb1cdcefd57b92942ac6df098051304` |
| 03 | `fa5ead72e1bbac5973cd75ed6c868f14b379be144958e1c1a75edadc709207eb` | `da5c299cd58f6ce54eea1e640f27a5582c4924fbb8f523c3690f603c6739a257` |
| 04 | `7e137e2ed90159e4ecae608854016c2e0bddaedfaa601c28bbdb4ee4b772ff4c` | `f07bd85e0ece5a0b8e114d922c5634010df29db93fa85e9f2ba1b09d8eba8315` |
| 05 | `f2b58a86306e90483d8dd3c7ca691908f292b4dccaf66af3de60012374b0a2dd` | `b44479068143d79dc002a6f09e673089b1084a2549c207a7b14c41974866fb36` |
| 06 | `5fbce6688165c2a38e2359890b06db31f2989e7f165bd4cb2194cfaedea654f5` | `70928aeef1e7c6f66bdabaf4f20fd013f0316f2e76c27c730cf0291b956067ec` |
