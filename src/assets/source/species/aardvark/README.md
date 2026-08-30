# Aardvark image set

OpenAI's built-in imagegen created these six original project images on 2026-08-30 for the Fauna Atlas Orycteropus afer profile. The frames reconstruct generalized savanna foraging, termite feeding, a mother with one juvenile, and an underground resting chamber. They do not document a named animal, locality, burrow, termite colony, birth event, or field observation.

- Generation mode: OpenAI built-in imagegen
- Use cases: photorealistic-natural for frames 01 through 05; scientific-educational for frame 06
- Research brief: docs/research/aardvark-profile.md
- Source directory: src/assets/source/species/aardvark/
- Runtime directory: public/images/species/aardvark/
- Source format: 1536 x 1024 opaque sRGB PNG
- Runtime format: 1536 x 1024 opaque lossy VP8 WebP
- Product credit: Fauna Atlas · AI 生成科学情景重建
- Total imagegen calls: 6 initial generations; no edit calls
- Compression: TinyPNG rejected all six source files with HTTP 429 because the configured account had exhausted its monthly quota. The documented local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. The generator directory retains the original built-in outputs. The runtime WebP files use the repository's cwebp settings.

## Files and review decisions

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | 01-dusk-burrow-foraging-source.png | 01-dusk-burrow-foraging.webp | One adult with the long tubular muzzle, tall ears, digging feet and tapering tail walks beside a generalized burrow at dusk. | The frame cannot establish sex, age, body measurements, locality or travel distance. |
| 02 | 02-full-body-diagnostic-profile-source.png | 02-full-body-diagnostic-profile.webp | One adult stands in a readable lateral profile with a complete silhouette and broad claws. | Toe visibility varies with overlap; pixels do not supply a digit count or calibrated proportions. |
| 03 | 03-termite-mound-excavation-source.png | 03-termite-mound-excavation.webp | One adult braces against a termite mound and throws a restrained amount of fresh soil with its forefeet. | The still cannot measure digging speed, prey abundance or feeding success. |
| 04 | 04-sticky-tongue-termite-feeding-source.png | 04-sticky-tongue-termite-feeding.webp | A close frame shows one tongue entering a narrow earthen feeding channel beside powerful foreclaws. | The generated insects do not identify a termite taxon or provide prey counts, tongue length or diet proportions. |
| 05 | 05-mother-single-juvenile-source.png | 05-mother-single-juvenile.webp | One adult and one smaller juvenile walk beside a generalized burrow before dawn. | Size and proximity support a mother-young reading; the adult tail is partly occluded, and pixels cannot establish sex, exact age, season or dependence stage. |
| 06 | 06-daytime-burrow-chamber-cutaway-source.png | 06-daytime-burrow-chamber-cutaway.webp | One adult rests in a restrained side cutaway of a sloping tunnel and terminal chamber. | The cutaway is explanatory; it cannot establish real tunnel depth, chamber dimensions, soil profile, temperature or occupancy duration. |

## Scientific and editorial boundaries

- Every aardvark has a long narrow muzzle, tall ears, an arched sparsely bristled body, short digging limbs and one tapering tail. No frame should be read as evidence for a particular individual's measurements or digit count.
- Frames 01 through 04 reconstruct nocturnal activity. Their light is editorial fill, not a claim about moon phase, artificial illumination or camera-trap conditions.
- Frames 03 and 04 use generalized termite mounds. The images cannot identify prey species, mound ownership, prey density or the amount eaten.
- Frame 05 contains two animals because the profile discusses the usual single young. It cannot prove kinship or a universal litter size.
- Frame 06 combines an entrance, tunnel and chamber in one visible cutaway. Real burrows remain underground and vary with soil, use and locality.
- No image contains readable text, a logo, watermark, border, map marker, scale bar or named locality.

## Imagegen output ledger

| No. | Generator output | Decision |
| ---: | --- | --- |
| 01 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-e180e983-7988-4255-b895-9f54007aa537.png | Accepted |
| 02 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-b3b0f14f-1f92-47e5-a95f-e0b08501d55f.png | Accepted |
| 03 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-6049b333-1dca-4aa6-a602-7c3c57c413af.png | Accepted |
| 04 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-2800f721-d883-4828-9eac-19f0b0cf2422.png | Accepted |
| 05 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-8b29f3a5-932e-4f18-8d57-16467490002e.png | Accepted |
| 06 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-225a8df1-d50c-4a7d-8509-9ac48743eead.png | Accepted |

## Final prompts

### 01 · Dusk burrow foraging

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aardvark species-profile cover, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic natural-history image of exactly one adult aardvark (Orycteropus afer) walking out from its burrow to forage at dusk in a generalized southern African savanna.
Scene/backdrop: Dry open savanna with reddish sandy soil, sparse tawny grasses, a low earthen burrow entrance behind the animal, and soft distant acacia silhouettes. No named locality and no other animals.
Subject accuracy: One complete adult aardvark in natural three-quarter side view. Long low-slung gray-brown body with sparse coarse bristles, arched back, short strong neck, very long narrow tubular pig-like snout ending in a small round fleshy nose disc, tall upright rabbit-like ears, small dark eyes, powerful short limbs, four toes on each visible forefoot and five toes on each visible hind foot where anatomy permits, broad shovel-like claws, and one thick muscular tail tapering steadily to a point. The animal is alert but calm, nose near the ground, ears raised independently. Correct aardvark anatomy, neither pig nor anteater.
Style/medium: Museum-grade photorealistic wildlife documentary photography, natural skin folds, coarse hair, dusty claws and real soil texture, restrained scientific-publication color.
Composition/framing: Horizontal 3:2 landscape. Keep the entire animal and tail inside generous margins, moving across the middle third. Place the head near x=0.61 y=0.55 and leave calm habitat context around it. Eye-level low camera, 85 mm wildlife lens feel, shallow but sufficient depth of field.
Lighting/mood: Quiet blue-hour dusk with soft warm rim light and cool violet shadows, natural low-light exposure, no fantasy glow.
Scientific boundary: A generalized behavior reconstruction, not a real occurrence record, age estimate, sex determination or calibrated body measurement.
Constraints: exactly one aardvark; one complete unbroken body and tail; opaque landscape; no text, label, logo, signature, border or watermark.
Avoid: pig body, pig ears, elephant trunk, giant anteater head, pangolin scales, armadillo armor, donkey body, rabbit body, oversized tusks, horns, visible teeth, long sticky tongue, extra limbs, fused feet, five forefoot toes, duplicated tail, cropped ears, aggressive pose, open mouth, prey, human, vehicle, fence, artificial light, oversaturation, CGI, illustration, painting.
~~~

### 02 · Full-body diagnostic profile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aardvark diagnostic gallery image 2 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically grounded photorealistic full-body lateral portrait of exactly one adult aardvark (Orycteropus afer) that makes its diagnostic proportions readable.
Scene/backdrop: Level reddish sandy savanna ground at early night, restrained dry grass and a dark neutral scrub backdrop, no burrow opening, no other animals.
Subject accuracy: Exactly one complete aardvark in clean left-facing side profile, standing naturally on all four feet. Long gray-brown sparsely bristled body; noticeably arched back; very long narrow tubular snout with small fleshy nose disc; tall upright tapered ears; small eye; short powerful limbs; forefeet each anatomically have four toes and hind feet five, with broad flattened digging claws; thick muscular tail that narrows smoothly from the rump to one pointed end. Natural dusty skin and subtle folds. It must read as an aardvark, not a pig, giant anteater, donkey, armadillo or pangolin.
Style/medium: Museum-grade photorealistic field portrait, realistic sparse fur and skin, restrained natural-history editorial color, no studio backdrop.
Composition/framing: Exact horizontal 3:2. Entire ears, snout, feet and tail remain inside generous margins. Animal occupies about 72 percent of image width, centered slightly left, side-on camera at shoulder height. Moderate depth of field keeps full silhouette, claws and head sharp.
Lighting/mood: Soft moonlit ambient fill with a faint warm dusk edge, low contrast and calm observation.
Scientific boundary: The frame supports qualitative shape comparison only; no ruler, scale or sex cues.
Constraints: exactly one animal, clean complete silhouette, anatomically coherent limbs, one tail, opaque landscape, no text, label, arrows, logo, signature, border or watermark.
Avoid: pig hooves, cloven hooves, elephant trunk, oversized nose disc, long exposed tongue, huge teeth, scales, plates, armor, very shaggy fur, extra toes, extra limbs, split tail, cropped anatomy, running pose, human, bait, camera trap, fence, prey, dramatic spotlight, fantasy, CGI, illustration, painting.
~~~

### 03 · Termite-mound excavation

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aardvark digging-behavior gallery image 3 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic action image of exactly one adult aardvark (Orycteropus afer) opening the side of a termite mound during nocturnal foraging.
Scene/backdrop: Generalized semi-arid African savanna at night. A waist-high weathered red-earth termite mound, dry grasses and sparse scrub. Loose soil is natural and localized; no named site and no other animals.
Subject accuracy: One adult aardvark crouches in a stable digging stance at the mound, using its short muscular forelimbs and four-toed forefeet with broad shovel-like claws. The long tubular snout points toward the new opening but remains clear of flying soil. Tall ears remain upright; the arched gray-brown sparsely bristled body and thick tapering tail are anatomically coherent. Hind feet brace against the ground. The digging hole is small and fresh, not a collapsed mound.
Style/medium: High-speed photorealistic wildlife documentary reconstruction, realistic dusty skin, coarse bristles, claw wear and granular red soil, museum-publication restraint.
Composition/framing: Horizontal 3:2, low three-quarter side view. Keep the entire aardvark, both ears and full tail inside frame. Place foreclaws and fresh opening near x=0.56 y=0.63. Freeze a modest arc of loose soil without hiding the limbs.
Lighting/mood: Dim natural moonlight plus soft pre-dawn sky fill, credible low-light detail, no flash hotspot or theatrical spotlight.
Scientific boundary: The still frame reconstructs excavation behavior and cannot measure digging speed, prey density or feeding success.
Constraints: exactly one aardvark; one complete body and tail; readable foreclaws; opaque landscape; no text, arrows, logo, signature, border or watermark.
Avoid: pig, giant anteater, armadillo, pangolin, elephant trunk, cloven hooves, five-toed forefeet, extra limbs, extra claws, split tail, exposed teeth, visible long tongue, giant termites, swarming insects, explosive soil cloud, collapsed mound, prey gore, human, shovel, vehicle, collar, camera trap, fantasy, CGI, illustration, painting.
~~~

### 04 · Sticky-tongue termite feeding

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aardvark feeding-mechanism gallery image 4 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic close natural-history reconstruction of an adult aardvark (Orycteropus afer) collecting termites through a narrow opening in an earthen mound with its long sticky tongue.
Scene/backdrop: Close view of a weathered reddish termite mound at night, one narrow freshly opened feeding channel and a small scatter of loose soil. Restrained dry savanna background, no other animals.
Subject accuracy: Show the aardvark's head, shoulders, both tall upright ears and both powerful forefeet. Its very long narrow tubular snout ends beside the opening. A single slender pink-gray tongue extends a short, anatomically plausible distance into the channel; only part of the tongue remains visible, coated with a subtle sticky sheen and a few tiny natural-sized termites. Small eye, thick eyelashes and nostril area remain natural. Gray-brown sparse bristles and dusty four-toed foreclaws are accurate. The mouth opens only enough for the tongue and shows no large teeth.
Style/medium: Museum-grade photorealistic wildlife macro reconstruction, true skin pores, sparse bristles, damp tongue texture and compacted soil, restrained documentary color.
Composition/framing: Horizontal 3:2 close three-quarter profile. Head and tongue action occupy the center; both ear tips remain inside frame. Keep enough forelimb context to distinguish feeding after excavation. Focal point near x=0.53 y=0.56.
Lighting/mood: Soft nocturnal ambient light with controlled warm bounce from red soil, crisp snout and tongue, calm observation.
Scientific boundary: Generated pixels illustrate the feeding mechanism; they do not identify termite species, count prey, measure tongue length or establish diet proportions.
Constraints: exactly one aardvark; exactly one tongue; anatomically plausible mouth; natural-sized termites; opaque landscape; no text, label, arrows, logo, signature, border or watermark.
Avoid: giant anteater head, pig head, elephant trunk, forked tongue, multiple tongues, absurd tongue length, tongue wrapped around mound, huge insects, termite swarm, visible fangs, tusks, gaping mouth, saliva strings, gore, extra ears, extra feet, human, bait, honey, fruit, ants enlarged for display, fantasy, CGI, illustration, diagram, painting.
~~~

### 05 · Mother and single juvenile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Aardvark reproduction gallery image 5 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic natural-history reconstruction of one adult female aardvark (Orycteropus afer) and her single dependent juvenile beside their burrow entrance before dawn.
Scene/backdrop: Generalized African savanna with reddish sandy earth, a broad oval burrow entrance, low dry grass and soft distant scrub. Quiet pre-dawn sky, no named locality and no other animals.
Subject accuracy: Exactly two aardvarks: one adult female and one smaller juvenile of the same species. The adult stands calmly in three-quarter side view with a long tubular snout, tall upright ears, gray-brown sparse bristles, arched body, short muscular legs, broad digging claws and one thick tapering tail. The juvenile is about one-third the adult's body mass, fully furred, with proportionally large ears and shorter snout, stepping close beside the adult rather than riding, nursing or being carried. Both bodies, all ears and both tails are anatomically coherent. No visible genitalia or sex marker; relationship comes from size and proximity.
Style/medium: Museum-grade photorealistic wildlife documentary reconstruction, realistic coarse hair, dusty skin and natural soil texture, restrained editorial color.
Composition/framing: Horizontal 3:2 at low eye level. Keep both complete animals inside frame with clear separation of bodies and tails. Adult near x=0.58 y=0.57, juvenile near x=0.38 y=0.66, burrow context behind them. Moderate depth of field keeps both faces sharp.
Lighting/mood: Soft cool pre-dawn ambient light with a restrained warm horizon, protective calm mood without sentimentality.
Scientific boundary: The image shows a plausible mother-young association; pixels cannot determine exact age, sex, season, litter history or dependence stage.
Constraints: exactly one adult and one juvenile aardvark; two complete bodies; two tails total; opaque landscape; no text, label, logo, signature, border or watermark.
Avoid: more than two animals, twins, piglets, rabbit bodies, donkey bodies, giant anteater heads, elephant trunks, armor or scales, extra ears, merged bodies, duplicated limbs, tangled or split tails, nursing, carrying, play-fighting, human, enclosure, fence, collar, artificial den, prey, fantasy, CGI, illustration, painting.
~~~

### 06 · Daytime burrow-chamber cutaway

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Aardvark underground-rest gallery image 6 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically grounded photorealistic natural-history cutaway showing exactly one adult aardvark (Orycteropus afer) resting during daylight in the enlarged terminal chamber of its own earthen burrow.
Scene/backdrop: A restrained side cutaway through deep reddish-brown sandy loam beneath open African savanna. At the top, only a narrow strip of dry grass and muted daylight sky. One sloping entrance tunnel leads to one rounded underground chamber with stable compacted walls. Fine roots cross the upper soil. No measured grid, labels or other animals.
Subject accuracy: One complete adult aardvark rests curled loosely on the chamber floor, not asleep on its back. Long tubular snout points toward the tunnel, tall ears are relaxed but recognizable, gray-brown sparsely bristled arched body and short powerful limbs remain readable, broad claws rest against soil, and one thick tapering tail curves beside the body without merging into it. The chamber has enough space for the animal to turn but is not a giant cave.
Style/medium: Museum diorama realism blended with photorealistic wildlife detail, credible soil strata and soft natural skin texture, scientific-publication restraint rather than a flat diagram.
Composition/framing: Exact horizontal 3:2 side cutaway. Burrow system spans the frame from entrance at upper left to chamber at lower right. Aardvark remains entirely visible in the chamber, focal point near x=0.66 y=0.65. Habitat carries enough space to explain the tunnel.
Lighting/mood: Muted warm daylight at the entrance fading into soft cool diffuse chamber light, calm sheltered atmosphere, no glowing soil.
Scientific boundary: The cutaway explains burrow form and daytime shelter qualitatively; it cannot establish real tunnel depth, chamber dimensions, temperature or occupancy duration.
Constraints: exactly one aardvark; one connected tunnel and one chamber; complete body and tail; opaque landscape; no text, labels, arrows, ruler, scale bar, logo, signature, border or watermark.
Avoid: underground palace, enormous cavern, multiple tunnels, exposed skeleton, transparent animal, nesting material, food cache, eggs, pups, other burrow users, human, shovel, pipes, cables, treasure, fantasy glow, CGI, cartoon, flat vector diagram, painting.
~~~
