# Gila Monster image set

OpenAI's built-in imagegen created seven original outputs on 2026-08-30 for the Fauna Atlas _Heloderma suspectum_ profile. Review accepted six frames covering rocky desert habitat, diagnostic form, a rock-shelter entrance, ground-nest foraging, a defensive mouth posture and radio-telemetry fieldwork. Reviewers rejected one unlabeled venom-system concept because its visible gland count and duct layout could be mistaken for verified anatomy.

- Generation mode: OpenAI built-in imagegen
- Use cases: photorealistic-natural for frames 01 through 05; conservation-documentary for frame 06
- Research brief: [`docs/research/gila-monster-profile.md`](../../../../../docs/research/gila-monster-profile.md)
- Source directory: `src/assets/source/species/gila-monster/`
- Runtime directory: `public/images/species/gila-monster/`
- Source format: 1536 × 1024 opaque sRGB PNG
- Runtime format: 1536 × 1024 opaque lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 7 brand-new generations. Review accepted six and rejected one anatomical concept. The set used no edit calls.
- Compression: TinyPNG returned HTTP 429 for all six scoped source files. The documented fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. Runtime WebPs use cwebp 1.6.0 with repository settings quality 82, method 6 and multithreading.

## Files and review decisions

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | `01-rocky-desert-scrub-adult-portrait-source.png` | `01-rocky-desert-scrub-adult-portrait.webp` | One complete adult rests on a rocky desert-scrub slope; its black snout, salmon-orange bead-like scales, visible limbs and thick tapering tail remain readable. | The far-side limbs are partly occluded. The generalized Sonoran-style setting cannot identify a park, country, subspecies, sex, age, origin or calibrated body size. |
| 02 | `02-beaded-scales-diagnostic-profile-source.png` | `02-beaded-scales-diagnostic-profile.webp` | One complete adult forms a low left-facing side profile on pale gravel, with a blunt head, bead-like dorsal scales, stout limbs and a short thick tail. | Perspective hides parts of the far-side feet. Pixels cannot verify every toe, diagnose a traditional subspecies or establish sex, age, mass or total length. |
| 03 | `03-rock-burrow-entrance-source.png` | `03-rock-burrow-entrance.webp` | One complete adult lies outside one dark opening beneath a rock slab; the animal, entrance, roots and dry rocky ground remain separate and readable. | The frame cannot prove that the animal dug, occupied or emerged from the opening, identify a season or expose any tunnel, chamber, nest or co-occupant. |
| 04 | `04-ground-nest-egg-foraging-source.png` | `04-ground-nest-egg-foraging.webp` | One complete adult extends one black forked tongue near one unattended ground nest containing three intact pale, quail-sized eggs with fine speckles. | Three eggs serve the controlled composition. The still cannot identify the bird, prove scent detection or consumption, supply a complete clutch count or quantify diet. |
| 05 | `05-defensive-mouth-posture-source.png` | `05-defensive-mouth-posture.webp` | One complete adult braces on four limbs and raises its head with the jaws open; the oral cavity is visible, while the small teeth are not clearly resolved. No person, predator, wound, blood, saliva strand or visible venom appears. | The posture cannot establish hissing, attack intent, an impending bite, venom flow, gland anatomy or delivery rate. The frame cannot support a claim about tooth form. |
| 06 | `06-radio-telemetry-habitat-monitoring-source.png` | `06-radio-telemetry-habitat-monitoring.webp` | Two field workers use one directional antenna, receiver and clipboard at a distance from one complete Gila Monster in rocky desert habitat. | The image cannot prove that the visible animal carries a transmitter, that the receiver detects its signal or that the workers know its identity, sex, movement, survival or population status. |

All six accepted source files passed original-resolution inspection before and after the local compression fallback. The source PNGs and runtime WebPs contain the requested animal, egg, person and equipment counts, coherent bodies and no readable text, label, logo, signature, watermark or border. The first five frames show complete tails within the canvas. Frame 06 keeps one complete animal separate from both field workers.

The accepted animals use a species-level mix of irregular salmon-orange bands, blotches and reticulation on a black ground. Traditional `cinctum` and `suspectum` pattern labels do not provide a secure image-level subspecies diagnosis, so neither prompts nor product captions assign a subspecies.

## Imagegen output ledger

All outputs share this parent directory:

`/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/`

| Call | Generator output | Decision |
| ---: | --- | --- |
| 01 | `exec-df6c2975-b49d-438a-9dff-25cae291c843.png` | Accepted as frame 01. |
| 02 | `exec-fefb6302-bded-48bf-9377-58ca613f0ef4.png` | Accepted as frame 02 with the far-side toe-visibility boundary. |
| 03 | `exec-d5447afa-752b-4027-bc57-f07685444be0.png` | Accepted as frame 03. |
| 04 | `exec-f3af84da-6bd5-4492-bab7-30e73bee96f6.png` | Accepted as frame 04 with three intact eggs. |
| 05 | `exec-fbdad821-ff8f-48f0-bef2-ed6bf94daa8c.png` | Rejected. The cutaway showed a countable row of isolated bead-like lower-jaw structures and unverified branching lines, inviting false gland-count and duct-topology claims. No source or runtime asset uses this output. |
| 06 | `exec-4b499711-f7dd-4399-89bb-05cbcae650f9.png` | Accepted as a separate brand-new natural-history generation for frame 05. |
| 07 | `exec-5e45aab7-c79a-4ba9-94c2-eb59e8db204e.png` | Accepted as frame 06. |

## Final accepted prompt set

### 01 · Rocky desert-scrub adult portrait

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Gila Monster species-profile cover, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a restrained natural-history wildlife photograph of one complete adult Gila Monster (Heloderma suspectum) resting on a rocky desert-scrub slope in a generalized Sonoran-style landscape.
Scene/backdrop: Dark volcanic gravel and broken rock on a low bajada or canyon slope, sparse thorny shrubs, a dry wash descending at left, scattered distant columnar cacti and subdued hills beneath a pale cloudy sky. The setting has no identifiable park, border, road or structure.
Subject: One heavy-bodied terrestrial lizard with a large blunt head, black snout, small dark eyes, short stout limbs, five short clawed toes where visible, a short thick rounded tail tapering to one point, and bead-like dorsal scales. Use a black ground color with irregular salmon-orange or pink-orange bands, blotches and reticulation. Keep the pattern at species level and assign no traditional subspecies.
Style/medium: Original photorealistic professional natural-history field photography, realistic scales, rock and dry vegetation, restrained museum-publication color.
Composition/framing: Exact 1536 x 1024 horizontal frame. Place the complete animal in the right foreground, occupying about half the image width. Keep the snout, four limbs, feet and full tail inside generous margins. Leave broad habitat context and calm negative space at left.
Lighting/mood: Soft cool desert daylight under thin cloud, calm and watchful.
Scientific boundary: The frame represents generalized habitat and cannot identify a locality, subspecies, sex, age, origin or body measurement.
Constraints: One animal; one coherent head, four limbs and one continuous tail; closed mouth; no tongue display, prey, nest, eggs, people, equipment, text, label, logo, signature, border or watermark.
Avoid: Mexican-beaded-lizard label, snake body, monitor-lizard whip tail, iguana crest or dewlap, gecko toe pads, salamander skin, hollow fangs, dorsal spikes, neon orange, perfect costume-like symmetry, missing tail, extra limbs, terrarium, road, fantasy monster, CGI, illustration, painting or oversaturation.
~~~

### 02 · Beaded-scale diagnostic profile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Gila Monster diagnostic gallery image 2 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a clean full-body diagnostic portrait of one adult Gila Monster (Heloderma suspectum) in a low left-facing side profile on pale desert gravel.
Subject: One complete stocky lizard with a broad blunt black head, small dark eye, thick neck, low rounded body, short sturdy legs, feet with short curved claws, bead-like black scales carrying irregular salmon-pink bands and reticulation, and one short thick tail tapering to a rounded point. The jaws remain closed and the tongue stays hidden.
Backdrop: Neutral pale gravel, small stones and a few dry grass clumps in a blurred arid setting with no landmark or human object.
Style/medium: Photorealistic museum diagnostic field portrait with crisp scale texture and neutral documentary color.
Composition/framing: Exact 3:2 horizontal frame. Keep the entire animal from snout through tail tip inside the canvas. The animal occupies the central 70 percent of the width. Keep near-side limbs and feet readable; accept natural perspective and body occlusion on the far side.
Lighting/mood: Soft overcast daylight with low contrast and an earth-tone palette.
Scientific boundary: The image supports qualitative morphology and cannot count every hidden toe or establish subspecies, sex, age, weight or calibrated length.
Constraints: One animal, one head, four coherent limbs and one continuous complete tail; no open mouth, tongue, prey, person, ruler, tag, text, logo, signature, border or watermark.
Avoid: smooth skink scales, long monitor-lizard body, whip tail, snake fangs, bright symmetric rings, extra toes, duplicated legs, clipped anatomy, studio backdrop, pet enclosure, fantasy, CGI, illustration or painting.
~~~

### 03 · Rock-shelter entrance

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Gila Monster shelter gallery image 3 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a cautious natural-history photograph of one complete adult Gila Monster (Heloderma suspectum) resting on dry rocky ground outside one dark shelter opening beneath a broad rock slab.
Scene/backdrop: A natural arid canyon or rocky bajada with one low irregular opening under a weathered boulder, compacted soil, loose stones, exposed roots, dry grass and sparse thorn scrub. Show no underground cutaway or artificial excavation.
Subject: One complete stocky Gila Monster lies with its entire body outside the opening in a calm low posture. Show a black blunt head, closed jaws, bead-like black and muted pink-orange scales, four short coherent limbs and one thick banded tail tapering to a visible point. Keep a clear ground gap between the animal and opening.
Style/medium: Original photorealistic natural-history field photography, sharp mineral and scale texture, restrained editorial treatment.
Composition/framing: Exact horizontal 3:2. Place the shelter entrance in the upper-left third and the complete animal across the lower center-right. Keep the tail, feet and snout away from the image edges.
Lighting/mood: Clear mild desert morning light with natural shadows under the rock slab.
Scientific boundary: The still shows one animal beside one opening. It cannot prove excavation, occupancy, emergence, winter dormancy, season, tunnel form, nesting or co-occupancy.
Constraints: One animal and one shelter opening; no transparent earth, chamber, pool, eggs, other wildlife, person, tool, telemetry gear, road, text, label, logo, signature, border or watermark.
Avoid: animal with part of its body in the hole, cropped tail, cave maze, underground room, sleeping cutaway, giant cavern, snow, lush tropical habitat, open attack mouth, extra limbs, fantasy, CGI, illustration or painting.
~~~

### 04 · Ground-nest egg foraging

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Gila Monster nest-foraging gallery image 4 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a restrained natural-history photograph of one complete adult Gila Monster (Heloderma suspectum) using its forked tongue near one unattended shallow ground bird nest containing three intact eggs.
Scene/backdrop: Dry rocky desert scrub beneath a low thorny shrub, with gravel, twigs, sparse grass and dappled morning shade. One small ground nest sits unobstructed in the left foreground.
Subject and action: One complete stocky Gila Monster approaches from the right with its head lowered and one natural black to blue-black tongue with two separated tips extended toward the nest without touching an egg. Show bead-like black scales with irregular salmon-orange patterning, four short coherent limbs, feet with short curved claws and one complete thick tapering tail.
Nest: One unattended shallow nest made from dry grasses and fine twigs. It contains three complete pale eggs with fine brown speckling, each about quail size. Show no adult bird, chick, broken shell, fluid or blood.
Style/medium: Original photorealistic natural-history feeding-ecology photography, realistic scales, nest fiber and desert ground, restrained museum-publication processing.
Composition/framing: Exact 3:2 horizontal frame. Keep the three eggs countable at lower-left and the whole lizard readable across center-right. Preserve space between tongue and eggs; retain all feet and the tail tip inside the frame.
Lighting/mood: Soft broken morning light, quiet searching behavior without spectacle.
Scientific boundary: Three eggs serve this composition. The still cannot identify the bird species, define a complete clutch, prove scent detection or ingestion or quantify the diet.
Constraints: One lizard, one forked tongue, one nest and three intact eggs; no other animals, venom, bite, broken egg, text, label, logo, signature, border or watermark.
Avoid: pink gecko tongue, snake-length tongue, three tongue tips, tongue touching an egg, oversized chicken eggs, crowded clutch, hatchlings, parent bird, chase, gore, glowing scent trail, extra limbs, clipped tail, fantasy, CGI, illustration or painting.
~~~

### 05 · Defensive mouth posture

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Gila Monster defensive-behavior gallery image 5 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a restrained natural-history photograph of one complete adult Gila Monster (Heloderma suspectum) holding a stationary open-mouth warning posture in rocky desert scrub.
Scene/backdrop: Warm mineral rocks, gravel and sparse desert shrubs in a generalized North American arid canyon. Show no person, predator, prey or human object.
Subject and posture: One stocky Gila Monster braces on four short limbs, raises its broad blunt black head and opens its jaws. The mouth shows an ordinary natural lizard tooth row and dark moist oral tissue. Keep the body grounded with no lunge, bite or contact. Show bead-like black scales with irregular salmon-orange patterning and one complete thick tail tapering to a visible point.
Style/medium: Original photorealistic professional wildlife photography, realistic mouth, scale and rock textures, sober natural-history color.
Composition/framing: Exact horizontal 3:2 medium environmental portrait. Keep the entire animal, all four limbs and the full tail inside comfortable margins. Place the raised head in the left third against a quiet rock background so the mouth remains readable.
Lighting/mood: Neutral warm daylight, alert without horror styling.
Scientific boundary: A silent still can show an open-mouth posture. It cannot prove hissing, attack intent, a coming bite, venom secretion, gland anatomy or delivery rate.
Constraints: One complete animal; no attacker, handling, wound, blood, saliva strand, visible venom, gland cutaway, hollow fang, glowing liquid, text, label, logo, signature, border or watermark.
Avoid: snake-style hinged fangs, exposed venom sacs, spray, attack leap, human hand, restraint, giant teeth, gore, duplicated jaw, missing tail, extra limbs, fantasy monster, CGI, illustration, painting or oversaturation.
~~~

The prompt above is preserved verbatim as the generator input. The accepted output shows the oral cavity but does not clearly resolve the small teeth. Review accepted it because no false fang anatomy is visible; the product caption makes no tooth-form claim.

### 06 · Radio-telemetry habitat monitoring

~~~text
Use case: conservation-documentary
Asset type: Fauna Atlas Gila Monster conservation-monitoring gallery image 6 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a wide conservation field photograph of two researchers using one directional radio-telemetry antenna while one complete Gila Monster (Heloderma suspectum) remains undisturbed at a distance in rocky desert habitat.
Scene/backdrop: A broad generalized Sonoran-style rocky valley with low washes, scattered shrubs, columnar cacti and low brown hills under soft cloud. Show no road, vehicle, building, fence or named landmark.
Animal: One complete Gila Monster rests among rocks in the lower-right foreground or middle ground. Show the broad black head, bead-like black and pale salmon pattern, four short limbs and one complete thick tail. Add no visible transmitter, collar, tag, wound or restraint.
People and equipment: Two adult field workers stand together on the left across a broad strip of open rocky habitat. One holds one plausible directional Yagi antenna connected to a compact handheld receiver. The second writes on one plain clipboard. Use unbranded muted field clothing and natural working postures. No person approaches or touches the animal.
Style/medium: Original photorealistic conservation documentary photography, believable field equipment and environmental scale, restrained museum-publication treatment.
Composition/framing: Exact 3:2 horizontal wide view. Keep both people, the antenna and the entire animal inside the frame. Use terrain and distance to separate people from the lizard; let habitat occupy most of the canvas.
Lighting/mood: Soft cool morning light, patient fieldwork without staged heroism.
Scientific boundary: The reconstruction cannot prove that the animal carries a transmitter, that the receiver detects its signal or that the workers know its identity, sex, movement, survival or population status.
Constraints: Two people, one directional antenna, one receiver, one clipboard and one Gila Monster; no handling, capture, trap, cage, vehicle, visible tag, weapon, readable screen, map, text, logo, signature, border or watermark.
Avoid: person beside the animal, antenna touching the lizard, gun-like pose, satellite dish, collar, backpack transmitter, release crate, crowd, multiple animals, malformed hands, clipped subjects, zoo, fantasy technology, CGI, illustration or painting.
~~~

## Static and visual validation

- Source and runtime files form six one-to-one basename pairs after removing `-source`.
- Source PNGs and runtime WebPs decode as 1536 × 1024, sRGB, opaque, single-frame images.
- The six source files and six runtime files have twelve distinct SHA-256 hashes.
- Original-resolution review confirmed one complete animal in frames 01 through 05; one black forked tongue and three intact eggs in frame 04; an open mouth without contact, injury or visible venom in frame 05; and two field workers, one directional antenna and one complete undisturbed animal in frame 06.
- Review excluded the anatomical concept from both source and runtime directories. The accepted frame 05 came from a separate brand-new generation.
- Verification used static metadata checks and the built-in image viewer. No GUI or headless browser was used.
