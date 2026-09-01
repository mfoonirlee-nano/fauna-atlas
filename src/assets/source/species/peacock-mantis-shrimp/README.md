# Peacock Mantis Shrimp image set

Codex's built-in image generation tool created these six original project images on 2026-09-01 for the complete Fauna Atlas _Odontodactylus scyllarus_ profile. They show a reef-burrow portrait, external morphology, a reconstructed club strike, compound-eye midbands, burrow maintenance, and egg-mass care. They do not document named animals, sites, specimens, field observations, strikes, force trials, visual experiments, nests, broods, or reproductive events.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/peacock-mantis-shrimp/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/peacock-mantis-shrimp/*.png` with TinyPNG
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成科学情景重建`

| No. | Source file                                  | Runtime file                           | Accepted observation                                                                                                                               |
| --- | -------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | `01-reef-burrow-portrait-source.png`         | `01-reef-burrow-portrait.webp`         | One complete green-blue stomatopod stands beside a rubble burrow; the left side retains open sand and water                                        |
| 02  | `02-external-morphology-source.png`          | `02-external-morphology.webp`          | One complete elongated stomatopod shows stalked eyes, antennae, broad antennal scales, folded front appendages, a segmented abdomen, and tail fan  |
| 03  | `03-raptorial-club-strike-source.png`        | `03-raptorial-club-strike.webp`        | One complete stomatopod extends one jointed front appendage to an empty shell while sand grains rise beside the contact point                       |
| 04  | `04-compound-eye-midband-source.png`         | `04-compound-eye-midband.webp`         | One head fills the frame with two complete stalked compound eyes; each eye has a visible horizontal equatorial band                                 |
| 05  | `05-burrow-maintenance-source.png`           | `05-burrow-maintenance.webp`           | One stomatopod emerges from a rubble tunnel behind a flat dead-coral fragment and a recently shifted entrance apron                                |
| 06  | `06-egg-mass-care-source.png`                | `06-egg-mass-care.webp`                | One stomatopod holds one cohesive orange-brown granular mass beneath the front of its body inside a rubble chamber                                  |

## Static verification

Codex inspected the compressed source PNGs and runtime WebPs at original resolution on 2026-09-01. ImageMagick decoded all 12 files at 1536 × 1024 in sRGB and reported each file as opaque and single-frame. Source and runtime inspection confirmed the complete silhouette and left-side negative space in frame 01, the readable external body plan in frame 02, the single animal and empty shell in frame 03, both complete eye midbands in frame 04, the rubble entrance and fragment in frame 05, and the single cohesive brood-like mass in frame 06. All 12 files have distinct SHA-256 hashes.

## Evidence boundaries

- AI-generated external form cannot identify _Odontodactylus scyllarus_. Species determination requires diagnostic morphology, taxonomic literature, locality context, and specimen examination.
- Frames 01 and 02 show a representative colorful smasher-stomatopod form. They do not establish sex, age, total length, geographic origin, molt stage, spine counts, or diagnostic character states.
- Frame 01 reconstructs a generalized tropical Indo-West Pacific reef flat. It does not identify a site, depth, territory, home range, abundance, or native-country record.
- Frame 03 reconstructs contact between a raptorial appendage and an empty shell. It does not record a strike or measure speed, acceleration, force, pressure, temperature, cavitation, shell strength, prey handling, or success.
- Frame 04 shows only visible eye surfaces. It cannot reveal receptor count, spectral channels, polarization sensitivity, neural processing, acuity, or the colors perceived by the animal.
- Frame 05 reconstructs activity at one tunnel entrance. It does not prove who excavated the tunnel, its shape or length, residence time, construction rate, territorial ownership, or a species-wide substrate preference.
- Frame 06 reconstructs care of a brood-like mass. It cannot establish sex from appearance, egg number, embryo stage, brood age, feeding state, paternity, pair bond, hatching success, or a universal schedule.
- No frame establishes distribution, population size or trend, harvest pressure, aquarium-trade volume, conservation status, or ecological effect size.

## Shared morphology anchor

The prompts requested one elongated stomatopod with two independently movable stalked compound eyes, paired antennae, broad antennal scales, a short carapace, two folded hammer-like second thoracic appendages, exposed thoracic and abdominal segmentation, ventral swimmerets, and a broad uropod-and-telson tail fan. Full-body frames kept the animal and its antennae and tail inside the canvas. The prompts excluded praying mantises, decapod shrimp, lobsters, crayfish, crabs, oversized pincers, duplicate eyes, extra tail fans, text, labels, logos, and watermarks. These instructions support visual continuity; they cannot turn generated anatomy into a voucher or diagnostic plate.

## Final prompts

### 01 · Reef-burrow portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Odontodactylus scyllarus cover image 1 of 6, horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original natural-history underwater photograph of exactly one complete adult peacock mantis shrimp, Odontodactylus scyllarus, paused at the entrance of its burrow on a shallow tropical Indo-Pacific coral-rubble seabed.
Scene/backdrop: Clear blue-green reef water over coarse coral rubble and pale sand, with a dark natural burrow opening behind the animal and distant soft-focus reef structure. No identifiable dive site, aquarium equipment, diver, other animal, or prey.
Subject: One anatomically coherent elongated stomatopod, not a decapod shrimp. Show two independently oriented stalked compound eyes, paired long antennae, broad antennal scales, a vivid green-to-turquoise segmented body with restrained orange-red limb accents and blue-violet markings, two powerful folded hammer-like raptorial appendages tucked beneath the head, three pairs of walking legs behind them, five paired abdominal swimmerets, and one broad multicolored tail fan with a central armored telson. Keep the entire animal, antennae, appendages, and tail fan inside frame. Natural individual color variation is acceptable; preserve credible anatomy.
Style/medium: Original photorealistic professional underwater macro wildlife photography, museum-publication color, real shell texture, suspended particles, and optical depth; no illustration or CGI look.
Composition/framing: Exact landscape 3:2. Place the complete animal center-right around x=0.67 y=0.56, facing left in a low three-quarter view, with broad calm darker open-water and sand negative space on the left for responsive page typography.
Lighting/mood: Soft filtered tropical daylight with subtle reef caustics, quiet alert posture, restrained saturation.
Evidence boundary: Generalized AI scientific reconstruction, not a voucher, locality record, size measurement, sex determination, or diagnostic plate.
Constraints: Exactly one complete mantis shrimp and no other animal; visible stalked eyes, folded raptorial clubs, elongated segmented abdomen, swimmerets, telson, and tail fan; no attack, injury, broken shell, text, labels, arrows, scale bar, logo, signature, border, or watermark.
Avoid: praying mantis insect, lobster, crayfish, crab, ordinary decapod shrimp, oversized lobster claws, spearing appendages, duplicated eyes, extra antennae, missing tail, cropped anatomy, monster scale, neon fantasy glow, aquarium décor, stock-photo gloss, CGI, illustration, painting, oversaturation.
```

### 02 · External morphology

```text
Use case: scientific-educational
Asset type: Fauna Atlas Odontodactylus scyllarus morphology gallery image 2 of 6, horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original high-resolution underwater natural-history photograph of exactly one complete adult peacock mantis shrimp in a clean dorsal three-quarter orientation so its stomatopod body plan is readable.
Scene/backdrop: Level pale coral sand with a sparse rim of muted reef rubble against deep blue-gray seawater. No burrow obscuring the body, prey, other animal, diver, aquarium equipment, text, or specimen tools.
Subject and anatomy: One coherent elongated Odontodactylus scyllarus, head facing left and tail facing right. Show two stalked compound eyes with distinct equatorial midbands, paired long antennae, two broad antennal scales, a short carapace that leaves thoracic segments exposed, two folded hammer-like raptorial second appendages beneath the head, three paired walking legs, six clearly segmented abdominal somites, paired swimmerets beneath the abdomen, and a broad symmetrical tail fan around one armored central telson. Use restrained natural green, teal, orange-red, blue, and violet markings characteristic of the species. Keep every antenna tip, limb, abdominal segment, uropod, and telson inside generous margins.
Style/medium: Photorealistic scientific underwater macro photography with restrained museum-publication color, crisp shell texture, subtle suspended particles, and credible optical depth; no diagram, illustration, cutout, or CGI look.
Composition/framing: Exact landscape 3:2. Center the complete animal around x=0.52 y=0.52, almost dorsal but slightly low enough to show the folded raptorial clubs and walking legs. Preserve an uncluttered silhouette.
Lighting/mood: Even filtered daylight with gentle edge contrast and no dramatic glow.
Evidence boundary: Representative generated external morphology cannot identify a specimen to species, confirm sex or age, count diagnostic spines, or provide a body-length measurement.
Constraints: Exactly one complete stomatopod; two eyes, two antennal scales, one coherent abdomen, one symmetric tail fan; no other animal; no cropped or hidden anatomy; no text, labels, arrows, scale bar, ruler, logo, signature, border, or watermark.
Avoid: praying mantis insect, lobster, crab, crayfish, ordinary shrimp, giant pincers, spearing forelimbs, duplicate heads, three or more eyes, extra tail fans, missing telson, asymmetric amputated limbs, curled cooked shrimp, neon fantasy glow, CGI, vector art, painting, oversaturation.
```

### 03 · Raptorial club strike

```text
Use case: scientific-educational
Asset type: Fauna Atlas Odontodactylus scyllarus raptorial-strike gallery image 3 of 6, horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original ultra-high-speed underwater macro photograph reconstructing one peacock mantis shrimp striking an empty gastropod shell with one hammer-like raptorial club.
Scene/backdrop: Shallow tropical coral-rubble seabed in clear blue-green water. One unoccupied thick spiral snail shell rests on sand in front of the animal. No living prey, tissue, blood, diver, aquarium wall, or other animal.
Subject and action: Exactly one coherent Odontodactylus scyllarus in low lateral three-quarter view, complete body visible. Preserve two stalked compound eyes, long antennae, broad antennal scales, segmented green-teal abdomen, walking legs, swimmerets, and full tail fan. One second thoracic raptorial appendage remains folded beneath the head while the other extends forward, its swollen heel-like dactyl club contacting the outer lip of the empty shell. Show a restrained impact plume of sand grains and tiny vapor-like bubbles beside the contact point, plus a small fresh chip in the shell edge. The striking appendage must originate beneath the head, not from the mouth, tail, or a lobster pincer.
Style/medium: Photorealistic high-speed scientific underwater photography, restrained museum-publication color, crisp shell and exoskeleton texture, natural motion blur limited to the moving club and nearby particles; no diagram or CGI look.
Composition/framing: Exact landscape 3:2. Place the complete animal across the center-right facing left; put the empty shell near x=0.29 y=0.62 with visible water and sand separating all forms. Keep antenna tips and tail fan inside frame.
Lighting/mood: Bright filtered reef daylight, analytical rather than violent.
Evidence boundary: Generalized mechanism reconstruction. The frame cannot measure strike speed, acceleration, force, pressure, temperature, cavitation, shell strength, prey handling, or success.
Constraints: Exactly one complete mantis shrimp and one empty shell; one extended club and one folded club; no living prey or injury; no text, numbers, labels, arrows, scale bar, logo, signature, border, or watermark.
Avoid: punching fist, boxing glove, spear, knife, oversized lobster claw, crab, praying mantis insect, shell with visible mollusc, gore, explosion, lightning, magical shockwave, giant bubbles hiding anatomy, shattered shell debris covering the animal, cropped tail, duplicated limbs, CGI, illustration, painting, neon fantasy colors.
```

The accepted image received this targeted correction after the first generation:

```text
Use case: precise-object-edit
Primary request: Correct only the striking raptorial appendage. Replace the oversized round orange mallet with a much smaller anatomically plausible stomatopod dactyl club: a compact thickened heel-shaped terminal segment attached to the folded lever-like second thoracic appendage, striking the shell lip. The club should be no wider than the animal's eye and should read as part of a jointed crustacean limb, not a human hammer, boxing glove, drumstick, or suction cup.
Constraints: Keep the animal's identity, eyes, antennae, body, other folded club, legs, tail fan, empty shell, sand plume, underwater background, camera angle, composition, lighting, colors, and exact horizontal 3:2 framing unchanged. Keep exactly one mantis shrimp and one empty shell. No text, labels, logos, border, or watermark.
```

### 04 · Compound-eye midbands

```text
Use case: scientific-educational
Asset type: Fauna Atlas Odontodactylus scyllarus compound-eye gallery image 4 of 6, horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original extreme underwater macro photograph of the head and both stalked compound eyes of one peacock mantis shrimp, emphasizing the visible equatorial midband architecture without labels or imagined visual effects.
Scene/backdrop: Soft dark teal reef-water background with a blurred burrow entrance and a few suspended particles. No other animal, prey, diver, aquarium hardware, chart, or laboratory instrument.
Subject: The front head and upper carapace of exactly one Odontodactylus scyllarus, viewed nearly head-on. Show exactly two independently angled stalked compound eyes. Each eye is a coherent oval compound eye divided into an upper hemisphere, a lower hemisphere, and one narrow horizontal equatorial midband made of fine orderly ommatidial rows. Include paired antennae and broad antennal scales low in frame, with restrained natural green, teal, violet, and amber shell colors. Preserve compound-eye texture; the midband must look biological rather than like a painted stripe or camera display.
Style/medium: Photorealistic scientific underwater macro photography at museum-publication quality, shallow depth of field, fine ommatidial texture, natural water optics; no infographic, cutaway, illustration, or CGI look.
Composition/framing: Exact landscape 3:2. Place both eyes symmetrically around x=0.50 y=0.44, each fully inside frame, with the head filling the lower middle and calm dark water around it.
Lighting/mood: Soft directional reef light revealing eye facets and shell texture; quiet observational mood, no neon glow.
Evidence boundary: External eye anatomy alone cannot reveal receptor count, spectral channels, polarization sensitivity, neural coding, acuity, perceived colors, or behavior.
Constraints: Exactly one animal head and exactly two complete stalked eyes; one midband per eye; no detached eyes, extra pupils, human iris, text, labels, arrows, spectrum, rainbow beams, scale bar, logo, signature, border, or watermark.
Avoid: three or more eyes, camera lenses, robot eyes, googly eyes, human sclera, giant central pupil, painted rainbow bands, laser beams, hologram, magical vision overlay, lobster or crab head, praying mantis insect, gore, dissection, CGI, vector illustration, painting, oversaturation.
```

### 05 · Burrow maintenance

```text
Use case: scientific-educational
Asset type: Fauna Atlas Odontodactylus scyllarus burrow-maintenance gallery image 5 of 6, horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original underwater natural-history photograph of exactly one peacock mantis shrimp maintaining a rubble-lined burrow entrance on a tropical reef flat.
Scene/backdrop: A natural dark tunnel entrance under consolidated coral rubble, bordered by coarse sand, small dead-coral pieces, and a few empty shell fragments in clear shallow Indo-Pacific reef water. No living coral colony being broken, no aquarium pipe, diver, other animal, or prey.
Subject and action: One coherent adult Odontodactylus scyllarus emerges halfway from the burrow in a low three-quarter view. Its two stalked eyes and antennae survey the entrance while its front appendages carefully grip and reposition one palm-sized flat dead-coral fragment at the burrow rim. Keep both hammer-like raptorial clubs folded and readable beneath the head; do not turn them into lobster pincers. Show the segmented green-teal anterior body and enough abdomen to identify a stomatopod, while the rear remains naturally inside the tunnel. A small fresh fan of shifted sand and an orderly rubble lip suggest repeated maintenance without arrows or time-lapse effects.
Style/medium: Photorealistic documentary underwater macro wildlife photography, restrained museum-publication color, credible coral rubble, sand, shell texture, and water haze; no staged aquarium gloss, diagram, or CGI look.
Composition/framing: Exact landscape 3:2. Place the burrow mouth center-right around x=0.62 y=0.48 and the animal around x=0.57 y=0.57, with the fragment visible near the front limbs and open sand on the left.
Lighting/mood: Dappled filtered daylight, calm purposeful behavior, dark but readable tunnel interior.
Evidence boundary: A single generated frame cannot prove who built the tunnel, its length or shape, residence time, construction rate, territorial ownership, or a species-wide preference.
Constraints: Exactly one mantis shrimp; one fragment being moved; no other animal; folded raptorial clubs; no text, labels, arrows, scale bar, logo, signature, border, or watermark.
Avoid: construction tools, human hands, PVC pipe, glass aquarium, lobster claws, crab, ordinary shrimp, praying mantis insect, animal carrying an entire boulder, damaged living coral, attack, gore, collapsed tunnel, fantasy architecture, neon glow, CGI, illustration, painting, oversaturation.
```

### 06 · Egg-mass care

```text
Use case: scientific-educational
Asset type: Fauna Atlas Odontodactylus scyllarus egg-care gallery image 6 of 6, horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original underwater macro photograph reconstructing one adult female peacock mantis shrimp tending a cohesive egg mass inside a reef-rubble burrow.
Scene/backdrop: Quiet shaded chamber just inside a natural coral-rubble tunnel, with dark teal water, pale sand, and a softly lit entrance in the distance. No aquarium pipe, diver, laboratory equipment, mate, predator, or other adult.
Subject: Exactly one coherent Odontodactylus scyllarus in a low frontal three-quarter view, with two stalked compound eyes, paired antennae and antennal scales, restrained green-teal-orange shell colors, and both hammer-like raptorial clubs folded. Beneath and slightly in front of the thorax, the animal gently holds one cohesive rounded orange-beige egg mass with its smaller mouth-associated appendages. The egg mass should read as thousands of minute eggs bound together into one textured cluster, not as a few giant beads. It is carried under the front of the body, not glued along the abdomen or swimmerets. Keep the animal calm and the eggs intact, with no hatching event.
Style/medium: Photorealistic scientific underwater macro wildlife photography, restrained museum-publication color, credible egg texture, exoskeleton detail, natural water haze and shallow depth of field; no diagram, illustration, or CGI look.
Composition/framing: Exact landscape 3:2. Place the animal and egg mass near x=0.55 y=0.55; keep both eyes, front appendages, and full egg mass visible, with the tunnel wall framing the scene.
Lighting/mood: Soft reflected daylight from the entrance, protective and observational rather than sentimental.
Evidence boundary: Generalized parental-care reconstruction. The frame cannot establish sex from external appearance, egg number, embryo stage, brood age, fasting duration, paternity, pair bond, hatching success, or a universal behavior schedule.
Constraints: Exactly one adult mantis shrimp and one cohesive egg mass; eggs held by front mouth-associated appendages beneath the thorax; raptorial clubs folded; no other animal, loose eggs, feeding, injury, text, labels, arrows, scale bar, logo, signature, border, or watermark.
Avoid: eggs attached beneath the abdomen like a decapod shrimp, fish eggs scattered on rock, frogspawn, grapes, caviar bowl, giant individual eggs, mammalian pregnancy, baby shrimp outside eggs, second adult, attacking posture, lobster claws, praying mantis insect, gore, aquarium décor, neon glow, CGI, illustration, painting, oversaturation.
```

## Accepted file hashes

| No. | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01  | `73d24745544ab1c7431f7047b88d841e102cff200b16d7b1a18e49bf6bbd99cf` | `f3c0c6ae2af24b0c069b27d50e10ea62b669911ba0a72535c2531b2de4bdf034` |
| 02  | `03960aaffdda9d0a2bd6d1d97f065bd96318e59c379d87735877c4896e26d69b` | `eaeff9c32282baeba69462063ad9dfa4aa06f47c12341804ef9fa3158340e45d` |
| 03  | `7195bdbf96ebd577be96a2cb62b10868af5069fda4bcac59d0ae855f328576a2` | `3fbce051bafa6b66fb6301708f35e3ebc39be9b7c75799ec0068b6ca8a536492` |
| 04  | `183605788552335eb7674e9607db8cbcaa4b2980aae48dc2607f05bf8bc2eec7` | `0ba7d72761a651842dee15e178afdcf542e12978a031b348fad4adf69ed24370` |
| 05  | `62bc30dc38ce6b64b45c1e554549a8628300ce8b60c582606e5467acbeb1784d` | `f01924fbe49fa362e242fbada27300a7b3231ffbf11b9eb945f10b1d478945c9` |
| 06  | `8706ca8ac9df8602e94751c493c6eb33932fae79f9ac393ddbfcb0c55bc00bbe` | `32bc44d5faa1cd58e45a1d6959261bfb3e6a89d516a9727868ec190024ffebda` |
