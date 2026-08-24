# Plateau pika image set

Codex's built-in image generation tool created these six original project images on 2026-08-23 for the complete Fauna Atlas *Ochotona curzoniae* profile. They are generic scientific reconstructions, not occurrence records, voucher images, reliable field identifications or records of a named monitoring project.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/plateau-pika/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-alpine-meadow-portrait-source.png` | `01-alpine-meadow-portrait.webp` | One complete pika beside one burrow entrance on the center-right, with open alpine meadow across the left |
| 02 | `02-black-lip-and-ear-markings-source.png` | `02-black-lip-and-ear-markings.webp` | One complete pika near a burrow; the close view shows subtle dark lips and short pale-edged rounded ears |
| 03 | `03-burrow-meadow-mosaic-source.png` | `03-burrow-meadow-mosaic.webp` | One small distant pika near a burrow entrance in a habitat-dominant treeless meadow with scattered openings |
| 04 | `04-forb-and-grass-feeding-source.png` | `04-forb-and-grass-feeding.webp` | One complete pika contacts fresh green meadow vegetation with its mouth beside a burrow entrance |
| 05 | `05-family-at-shared-burrow-source.png` | `05-family-at-shared-burrow.webp` | Exactly one larger pika and three smaller pikas remain distinct around shared burrow openings |
| 06 | `06-nonlethal-density-monitoring-source.png` | `06-nonlethal-density-monitoring.webp` | Exactly two observers use one quadrat, one clipboard and one hand counter while one pika remains distant on the right |

## Evidence boundaries

- A compact short-necked body, short rounded pale-edged ears, sandy ochre to gray-brown fur, a pale underside, dark nose and lips, short feet and no conspicuous external tail anchor the reconstruction to a plateau pika. An ordinary image cannot establish species identity, locality or population membership without provenance.
- The archived generation prompts use “head-body length” as a visual scale cue. Product metadata uses only the broader “body length” because the cited range does not justify a more specific measurement term; no image can establish a numerical length.
- Image 01 supports visible body, coat, ears and burrow-edge context. It does not establish sex, exact age, elevation or a wild occurrence at the depicted site.
- Image 02 shows dark lips, pale ear margins and a compact body. These features alone do not provide a definitive identification or body measurement.
- Image 03 depicts a generic alpine meadow and scattered burrow openings. It cannot establish occupancy of every opening, animal density, population trend, grazing pressure or an ecosystem effect.
- Image 04 shows a green stem at the animal's mouth. It does not identify the plant, measure intake or characterize the species' full diet.
- Image 05 shows one larger and three smaller pikas in proximity. The frame does not establish sex, biological parentage, litter size, exact age, a shared nest chamber or mating system.
- Image 06 reconstructs nonlethal observation and vegetation sampling. One quadrat, one animal and one visit cannot produce a density estimate or population trend, and the people do not represent a named project.

## Shared morphology anchor

The animal-focused prompts repeated this reconstruction boundary:

```text
Depict a wild Plateau pika (Ochotona curzoniae) as a small compact short-necked lagomorph about 14 to 19 cm in head-body length, with short rounded gray-brown ears edged by thin pale margins, subtle rusty buff patches behind the ears, small dark eyes, a short muzzle, dark nose tip and naturally black lips, sandy ochre to reddish-brown dorsal fur, a pale yellow-gray underside, short legs with small clawed feet, four coherent attached limbs and no conspicuous external tail. Keep the mouth closed and incisors hidden. Avoid a long rat tail, visible rabbit tail, long or pointed rabbit ears, white domestic-rabbit markings, mouse, vole, hamster, guinea pig, prairie dog, marmot or capybara anatomy, swollen cheek pouches, giant incisors, extra digits or limbs, text, logos and watermarks. Ordinary appearance alone is not a locality record or definitive species identification.
```

## Final prompts

### 01 · Alpine meadow portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Plateau pika species-detail cover, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically grounded wildlife photograph of exactly one complete wild adult Plateau pika (Ochotona curzoniae) pausing beside a small soil burrow entrance in an alpine meadow on the Qinghai-Tibetan Plateau.
Scene/backdrop: generalized treeless high-elevation alpine sedge meadow, very short Kobresia-like turf and low forbs, a few small natural bare-soil patches, softly layered distant plateau ridges, no recognizable landmark and no human trace.
Subject: one small compact short-necked lagomorph, about 14 to 19 cm head-body length, short rounded gray-brown ears with pale margins, sandy ochre to reddish-brown dorsal fur, pale yellow-gray underside, subtle rusty light patches behind the ears, dark nose tip and naturally black lips, short legs with small clawed feet, no conspicuous external tail. Closed mouth, no exposed incisors. Anatomically coherent body and four limbs.
Style/medium: original photorealistic professional natural-history photography, restrained museum-publication color, realistic fine fur, soil and alpine vegetation.
Composition/framing: low eye-level medium-wide horizontal 3:2; place the whole pika in the center-right safe area near x=0.68 y=0.57, preserve calm open meadow negative space across the left third for responsive page copy, keep ears, feet and body inside frame.
Lighting/mood: clear soft high-altitude morning light, cool air, quiet alert posture, natural eye catchlight.
Constraints: exactly one animal, one modest burrow entrance, no other wildlife or people, no text, label, logo, signature, border or watermark. Ordinary appearance alone is not a locality record or definitive species identification.
Avoid: long rat tail, any visible long tail, long rabbit ears, pointed hare face, guinea pig, hamster cheek pouches, marmot or capybara body, giant exposed incisors, rock-pile talus habitat, forest, farm field, dramatic tourist snow peak, white domestic-rabbit markings, extra toes, fused or duplicated limbs, anthropomorphic pose, zoo, pet, CGI, illustration, oversaturation or glossy stock-photo staging.
```

### 02 · Black lip and ear markings

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Plateau pika external-morphology gallery image 2 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained ground-level field photograph of exactly one complete wild adult Plateau pika (Ochotona curzoniae), showing the species' visible external morphology without handling or labels.
Scene/backdrop: low sparse alpine meadow turf and fine dry soil near a shallow natural burrow lip, generalized Qinghai-Tibetan Plateau, softly blurred treeless background.
Subject: one compact short-necked pika in calm side three-quarter view, entire body visible from nose to hind feet. Show short rounded ears with thin pale margins, subtle rusty buff patches behind the ears, small dark eyes, short muzzle, dark nose tip and naturally black lips, dull sandy-ocher to reddish-tan dorsal fur, yellow-gray underside, short clawed forefeet and hind feet, and no conspicuous external tail. Mouth closed and incisors hidden. Keep proportions natural for a 14 to 19 cm lagomorph, with four coherent attached limbs.
Style/medium: original photorealistic professional natural-history field photography, crisp restrained detail in fur, ear edges, lips, paws, sedge and soil; no specimen-table look.
Composition/framing: horizontal 3:2 medium shot at pika eye height; whole animal safely within generous margins, face, both ears, torso and feet readable, habitat still present.
Lighting/mood: soft neutral overcast daylight, documentary color and natural shallow depth of field.
Constraints: exactly one animal, no ruler, arrow, inset, text, label, people, other animal, logo, signature, border or watermark. Black lips stay anatomically subtle, not a painted mask.
Avoid: long rat tail, visible rabbit tail, long or pointed rabbit ears, mouse, vole, hamster, guinea pig, marmot, capybara, swollen cheek pouches, oversized incisors, black face mask, white domestic-rabbit patches, rock-dwelling talus, extra digits, missing or duplicated limbs, taxidermy, captive enclosure, CGI, illustration or oversaturation.
```

### 03 · Burrow-meadow mosaic

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Plateau pika habitat gallery image 3 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new habitat-dominant conservation photograph of a Plateau pika (Ochotona curzoniae) burrow-meadow mosaic in a generalized part of the Qinghai-Tibetan Plateau.
Scene/backdrop: broad treeless high alpine sedge meadow and cold steppe on flat to gently rolling ground, low Kobresia-like turf mixed with short forbs, several small irregular bare-soil patches, and multiple naturally scattered low round burrow entrances. Distant muted plateau ridges under a vast sky. Habitat occupies at least 90 percent of the frame.
Animal: exactly one small distant but coherent Plateau pika standing near one middle-right burrow entrance around x=0.70 y=0.62, secondary to the landscape. It has a compact sandy-brown body, short rounded ears, short legs and no visible long tail.
Style/medium: original photorealistic wide professional conservation-landscape photography, credible alpine grassland ecology, restrained natural-history publication processing.
Composition/framing: exact horizontal 3:2 wide establishing view, safe for a centered 16:9 crop; meadow texture and distributed burrow openings provide scale, the one pika remains small.
Lighting/mood: thin high-altitude morning sun through light cloud, cool clear air, quiet documentary tone.
Constraints: exactly one pika and zero other animals or people; burrow entrances remain modest and dispersed; no map, sign, coordinates, text, logo, signature, border or watermark.
Avoid: giant marmot mounds, crater field, catastrophic erosion, enormous colony crowd, prairie-dog town, rock-pile talus, forest, agricultural field, livestock, fences, road, buildings, dramatic Himalayan tourism panorama, giant foreground animal, mouse or marmot anatomy, fantasy landscape, CGI, illustration or oversaturation.
```

### 04 · Forb and grass feeding

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Plateau pika feeding-behavior gallery image 4 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly one complete wild adult Plateau pika (Ochotona curzoniae) clipping and eating low alpine meadow vegetation beside its burrow.
Scene/backdrop: generalized Qinghai-Tibetan Plateau alpine sedge meadow, short Kobresia-like turf mixed with small native-looking forbs and fine soil, one modest round burrow entrance nearby, no recognizable location or human trace.
Subject/action: exactly one compact short-necked pika in a natural crouch, with one short fresh green sedge or forb stem held at the side of its closed-looking mouth as it clips leaves close to ground. Show short rounded pale-edged ears, subtle rusty patches behind the ears, sandy ochre to reddish-brown dorsal fur, pale yellow-gray belly, dark nose tip and subtle black lips, short clawed feet and no conspicuous external tail. Keep one coherent head, body and four attached limbs. Do not show a hay pile.
Style/medium: original photorealistic professional wildlife behavior photography, restrained natural-history publication quality, realistic fine fur, leaves, soil and short turf.
Composition/framing: exact horizontal 3:2 medium-wide field view, whole animal and burrow safely inside frame, feeding contact readable near center, enough surrounding meadow to establish context.
Lighting/mood: soft clean late-morning high-altitude daylight, natural color and shallow depth of field.
Constraints: exactly one animal, one modest burrow, no other wildlife or people, no dry haystack, no text, logo, signature, border or watermark. The still image supports visible feeding only and makes no claim about whole-meadow productivity.
Avoid: long rat tail, rabbit tail, long rabbit ears, mouse, vole, hamster, guinea pig, marmot, capybara, swollen cheeks, oversized incisors, bouquet held like human food, large hay pile, carrots, farm crop, rock talus, extra toes or limbs, pet, zoo, CGI, illustration, oversaturation or staged stock-photo polish.
```

### 05 · Family at a shared burrow

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Plateau pika family-group gallery image 5 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new quiet original natural-history photograph of exactly one wild adult Plateau pika (Ochotona curzoniae) near exactly three clearly smaller juvenile pikas around entrances of one shared alpine-meadow burrow system.
Scene/backdrop: low treeless Qinghai-Tibetan alpine sedge meadow in early summer, short green-gray turf, low forbs, fine brown soil and two or three modest natural round burrow entrances, no recognizable locality or human trace.
Subjects/action: exactly four pikas total, one larger complete adult and exactly three smaller coherent juveniles. Keep all four separated with visible space between bodies: the adult stands alert near the center-left entrance, while three juveniles emerge or forage within one body length around the center and right entrances. Each has one head, short rounded pale-edged ears, compact sandy ochre body, four short attached limbs, small clawed feet and no conspicuous external tail. The juveniles look like small wild pikas, not newborns. Closed mouths, no nursing, no human-like cuddling.
Style/medium: original photorealistic professional wildlife documentary photography, restrained natural-history museum quality, realistic fine fur, soil and alpine plants.
Composition/framing: exact horizontal 3:2 medium-wide environmental frame, all four complete animals distinct and entirely inside generous margins, no overlapping or body fusion, burrow setting readable.
Lighting/mood: diffuse clear dawn light, calm group proximity without sentimental staging.
Constraints: exactly one adult plus exactly three juveniles, four pikas total; no fifth animal, no other species, no person, food bait, text, logo, signature, border or watermark. The scene does not establish sex, biological parentage, litter size or mating system.
Avoid: rabbits, mice, guinea pigs, prairie dogs or marmots; long tails, long ears, white domestic markings, twins posed in a row, embrace, nursing, nest basket, fused bodies, duplicated heads, extra ears, tails or limbs, rock talus, zoo, CGI, illustration, oversaturation or glossy stock-photo sentimentality.
```

### 06 · Nonlethal density monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Plateau pika nonlethal-monitoring gallery image 6 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically plausible field-documentary photograph of exactly two alpine-grassland ecologists conducting nonlethal Plateau pika (Ochotona curzoniae) density and vegetation monitoring.
Scene/backdrop: generalized treeless Qinghai-Tibetan Plateau alpine sedge meadow on gently rolling ground, short turf, scattered small bare-soil patches and modest pika burrow entrances, distant muted ridges, no named project or recognizable landmark.
People and equipment: exactly two adult ecologists together on the left half in plain muted field jackets and trousers. One kneels outside the burrow area beside exactly one simple square vegetation quadrat laid flat on the turf, observing plants and burrow signs without touching an animal; the other stands nearby recording on exactly one plain clipboard and holding one small unbranded hand counter. No readable marks. No trapping, baiting, digging or chemical treatment.
Animal: exactly one small distant Plateau pika standing near a burrow on the far-right meadow, well separated from the people, compact sandy-brown body, short round ears and no visible tail.
Style/medium: original photorealistic professional field-science documentary photography, credible scale and equipment, restrained museum-publication processing.
Composition/framing: exact horizontal 3:2 wide environmental frame; group both people on the left, one small pika on the far right, meadow and burrow mosaic dominate.
Lighting/mood: soft natural overcast daylight, careful observation and neutral high-altitude color.
Constraints: exactly two people, one quadrat, one clipboard, one hand counter and one pika; no other people, animals or equipment; no poison bait, carcass, trap, cage, net, handling, readable text, brand, badge, coordinate, logo, signature, border or watermark.
Avoid: poisoning, fumigation, shooting, capture, restraint, veterinary scene, wildlife selfie, crowd, third person, second pika, drone, vehicle, large excavated pits, disaster narrative, advertising gloss, CGI, illustration or oversaturation.
```

## Static validation

- All six compressed source files decode as opaque 1536 × 1024, 8-bit indexed-colour sRGB PNG files.
- All six runtime files decode as opaque 1536 × 1024 single-frame VP8 WebP files without alpha or animation.
- Source and runtime basenames form six one-to-one pairs.
- Runtime files use `cwebp -q 82 -m 6 -mt` after scoped TinyPNG source compression.
- Original-resolution visual inspection found one cover pika with left-side meadow space; one close morphology view; one small pika in a habitat-dominant burrow meadow; one pika contacting green vegetation; exactly one larger and three smaller pikas; and exactly two observers with one quadrat and one distant pika.
- Static inspection found no readable text, logo, watermark, zoo cue, animal handling, capture gear, poison bait or carcass.
- Verification used no GUI or headless browser.
