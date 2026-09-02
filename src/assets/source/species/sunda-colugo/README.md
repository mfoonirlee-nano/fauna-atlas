# Sunda Colugo image set

Six original 1536 × 1024 source PNGs for the _Galeopterus variegatus_ profile. Codex's built-in image generation tool produced the images on 2026-09-02 through six independent base calls. The reviewer accepted frames 01, 02, 03, 04 and 06 on the first pass. The reviewer rejected the frame 05 base output because its circular opening resembled a marsupial pouch, its tail appeared free and curled, and the mother's hind-foot contact was unclear. Codex corrected those features with a targeted edit before the reviewer accepted the replacement. TinyPNG compressed each accepted PNG in place, and `cwebp` generated the runtime copies.

## Files

| Frame | Source PNG                                      | Runtime WebP                              | Purpose                                  |
| ----- | ----------------------------------------------- | ----------------------------------------- | ---------------------------------------- |
| 01    | 01-lowland-forest-trunk-portrait-source.png     | 01-lowland-forest-trunk-portrait.webp     | Forest-trunk cover and folded patagium   |
| 02    | 02-full-patagium-glide-source.png               | 02-full-patagium-glide.webp               | Fully extended gliding membrane          |
| 03    | 03-controlled-tree-landing-source.png           | 03-controlled-tree-landing.webp           | Pitched-up final approach to a tree      |
| 04    | 04-young-leaf-foraging-source.png               | 04-young-leaf-foraging.webp               | Young-leaf feeding                       |
| 05    | 05-mother-with-ventral-infant-source.png        | 05-mother-with-ventral-infant.webp        | One infant carried against the abdomen   |
| 06    | 06-day-roost-camouflage-source.png              | 06-day-roost-camouflage.webp              | Daytime trunk rest and cryptic coat      |

## Accepted observations and limits

Frame 01 shows one complete colugo climbing a broad forest trunk at twilight. The visible furred folds join its neck, limbs and membrane-wrapped tail into one outline. The image cannot identify a locality, habitat condition, sex, age, body size or readiness to launch.

Frame 02 shows one colugo between two trees with four limbs spread around a broad continuous patagium and a central tail lobe. The short terminal digits remain visible. The frame cannot measure glide distance, speed, height loss, wing loading, energy cost or landing outcome, and generated pixels do not establish an exact digit count.

Frame 03 freezes one colugo in a pitched-up approach to a tree. Four clawed limbs extend toward the bark while an air gap still separates the animal from the trunk. The frame cannot establish the preceding trajectory, velocity, braking force, impact, grip or injury risk.

Frame 04 shows one colugo gripping a branch and placing its muzzle against a spray of young leaves. The relaxed patagium and rounded tail lobe remain visible. The image cannot identify the plant, prove ingestion, distinguish a bite from inspection or quantify seasonal and population-wide diet.

Frame 05 shows one adult and one smaller colugo against a trunk. The infant remains fully outside the mother's body and grips her ventral surface with its own limbs. Both maternal forefeet and the right hind foot contact the trunk; the infant and folded patagium plausibly obscure the left hind foot. The broad furred patagium continues around the enclosed tail and forms a loose lower fold without a pouch opening or free curled tail. The reconstruction cannot establish individual identity, age, sex, kinship, nursing, weaning state, brood size or how often adults carry young this way.

Frame 06 shows one complete adult resting head-up against pale lichen and mottled bark in daytime shade. The animal remains visible despite the coat-to-bark resemblance. The frame cannot prove a selected roost, sleep state, concealment from a predator, detection probability, survival benefit or site occupancy.

No frame records a field-observed event, supplies a calibrated measurement or proves conservation status. The accepted files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation outputs

The built-in generator saved its original outputs outside the repository under `/Users/chris.li/.codex/generated_images/01a06130-0767-7790-81a8-8fa5c3926d51/`. Codex copied the accepted first-pass outputs and the accepted frame 05 correction here before compression. The table retains the rejected frame 05 base output for the review record.

| Call          | Generator output                              | Decision                                                                                       |
| ------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 01 base       | exec-13f0546d-04ae-4d25-b6eb-d0329799f62a.png | Accepted first pass                                                                            |
| 02 base       | exec-ebc7eea0-efcf-4052-ad32-478a963b2c6b.png | Accepted first pass                                                                            |
| 03 base       | exec-b3ebad81-cc7a-4db0-9fdf-5ebb054b3602.png | Accepted first pass                                                                            |
| 04 base       | exec-30b3dcf9-a919-4350-8f05-720a507407af.png | Accepted first pass                                                                            |
| 05 base       | exec-a1e87f7a-813d-4176-8509-78b2c4279250.png | Rejected: pouch-like opening, free curled tail and no clear maternal hind-foot contact          |
| 05 correction | exec-b27e62d8-4bb2-4fdd-a9c0-7ac2cd0a501e.png | Accepted after targeted edit                                                                   |
| 06 base       | exec-28f93244-166b-4359-8d51-6c46912bc946.png | Accepted first pass                                                                            |

## Normalized final prompt set

### 01 · Lowland forest trunk portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sunda Colugo species-profile cover, original project asset, horizontal 3:2 intended for exactly 1536 × 1024 pixels
Primary request: Create a scientifically grounded photorealistic natural-history photograph of exactly one adult Sunda colugo (Galeopterus variegatus, also called Malayan colugo) clinging vertically to a broad rainforest tree trunk at blue-hour dusk, poised to move upward through the canopy.
Scene/backdrop: Generalized lowland Southeast Asian tropical forest with layered trunks, lianas, epiphytes and dim green canopy depth. No named locality, no people, no other animals.
Subject accuracy: One complete medium-sized Sunda colugo in a natural vertical climbing posture. Compact round head, short narrow muzzle, very large forward-facing dark eyes, small rounded ears, dense short mottled gray-brown fur with irregular pale cream marbling. Four long slender limbs grip bark with five clawed digits. The broad fur-covered patagium is visibly folded along both sides and must connect the neck to the forelimbs, continue between the digits, connect forelimbs to hindlimbs, and extend from hindlimbs around the entire medium-length tail all the way to its tip, leaving no free tail beyond the membrane. The animal is a colugo, not a lemur, bat, flying squirrel or sugar glider.
Style/medium: Museum-grade photorealistic wildlife documentary photography, real fur strands, bark, leaf moisture and natural optical depth; restrained natural-history editorial color.
Composition/framing: Exact horizontal 3:2. Keep the entire animal, head, all four limbs, digits and membrane-wrapped tail inside generous margins. Low three-quarter side view at trunk height, animal in the right-center with quiet forest depth around it.
Lighting/mood: Soft natural twilight, cool green-blue ambient light with a faint warm rim on the fur, credible low-light exposure, no flash hotspot.
Scientific boundary: A generalized habitat and posture reconstruction, not a locality record, calibrated measurement, sex determination or population observation.
Constraints: exactly one complete animal; anatomically continuous furred patagium from neck through all four limbs and digits to the tail tip; opaque image; no text, label, logo, signature, border or watermark.
Avoid: naked bat wing, powered flight, primate hands, lemur face or ringed tail, flying-squirrel proportions, sugar-glider stripe, large pointed ears, long exposed free tail, detached membrane, extra limbs, fused claws, open mouth, infant, fruit, nest, road, buildings, collar, fantasy, CGI, illustration, painting.
```

### 02 · Full patagium glide

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sunda Colugo glide gallery image 2 of 6, original project asset, horizontal 3:2 intended for exactly 1536 × 1024 pixels
Primary request: Create a scientifically grounded photorealistic wildlife image of exactly one adult Sunda colugo (Galeopterus variegatus) gliding across a natural gap between two rainforest trees at dusk, with the full patagium readable.
Scene/backdrop: Generalized Southeast Asian tropical forest canopy, open air between two broad trunks, layered foliage and distant branches. No named locality, no people, no other animals.
Subject accuracy: A single adult seen from a slightly ventral three-quarter angle in a stable transverse glide. Large rounded head, narrow muzzle, very large dark forward-facing eyes, small rounded ears, mottled gray-brown fur with irregular cream marbling. All four long limbs spread naturally. One continuous fur-covered patagium forms a broad kite-like surface from both sides of the neck to the forelimbs, continues between all five short clawed fingers, connects forelimbs to hindlimbs, continues between all five short clawed toes, and encloses the medium-length tail completely to its tip. No free tail projects beyond the membrane. Digits remain mammal-short and clawed, not elongated bat fingers.
Style/medium: Museum-grade photorealistic wildlife documentary photography, realistic furry membrane, subtle membrane tension, individual fur strands and atmospheric canopy depth, restrained natural color.
Composition/framing: Exact horizontal 3:2. Entire head, membrane outline, all four limbs, digits and tail tip stay inside generous margins. Sideward glide through the middle of frame with both departure and destination trunks visible but distant enough to keep the animal clear.
Lighting/mood: Natural blue-hour canopy light with a soft warm rim, credible high-speed wildlife exposure, no theatrical beam.
Scientific boundary: A generalized reconstruction of gliding posture; a still image cannot establish glide distance, speed, lift, energy cost, takeoff height, landing force or individual identity.
Constraints: exactly one complete colugo; continuous furred patagium from neck through finger and toe webs to tail tip; opaque image; no text, arrows, scale, logo, signature, border or watermark.
Avoid: bat anatomy, naked leathery wing, very long wing fingers, powered flapping, bird wings, feathers, lemur face, ringed or furry free tail, flying squirrel or sugar glider, parachute equipment, extra limbs, duplicated digits, torn membrane, open mouth, infant, predator, city, fantasy, CGI, illustration, painting.
```

### 03 · Controlled tree landing

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sunda Colugo controlled-landing gallery image 3 of 6, original project asset, horizontal 3:2 intended for exactly 1536 × 1024 pixels
Primary request: Create a scientifically grounded photorealistic high-speed natural-history reconstruction of exactly one adult Sunda colugo (Galeopterus variegatus) in the final approach to land on a broad rainforest tree trunk.
Scene/backdrop: Generalized Southeast Asian tropical forest canopy at dusk, one clear rough-barked destination trunk and softly layered foliage behind. No named locality, no people, no other animals.
Subject accuracy: One coherent Sunda colugo transitions from a glide toward a near-upright landing posture about a forelimb length from the trunk. Its body pitches upward; all four limbs extend forward and outward so the curved claws can meet bark together; the broad continuous fur-covered patagium remains visibly tensioned but begins to fold. The membrane connects the neck, all five short fingers with interdigital webbing, forelimbs, hindlimbs, all five short toes, and the fully enclosed tail to its tip. No free tail. Round head, narrow muzzle, huge dark forward-facing eyes, small rounded ears and mottled gray-brown fur with irregular pale marbling. Digits are short mammalian digits, not bat wing bones.
Style/medium: Museum-grade photorealistic high-speed wildlife documentary photography with realistic fur, membrane folds, clawed feet and bark texture, restrained editorial color.
Composition/framing: Exact horizontal 3:2, three-quarter side view. Keep the complete animal and entire membrane outline in frame, destination trunk on one side, visible air gap between claws and bark so the moment reads as approach rather than resting.
Lighting/mood: Soft natural twilight with enough shutter clarity to read anatomy, no flash hotspot, no dramatic motion streaks.
Scientific boundary: One reconstructed instant cannot prove a universal landing sequence, velocity, impact force, braking percentage, injury risk or successful grip.
Constraints: exactly one complete animal; one destination trunk; four limbs clearly approaching the bark; continuous furred patagium to tail tip; opaque image; no text, arrows, labels, logo, signature, border or watermark.
Avoid: already clinging flat to trunk, head-first collision, bat wings, naked membrane, powered flight, bird wings, long bat fingers, free furry tail, lemur or squirrel anatomy, missing limb, extra limb, duplicated feet, detached membrane, open mouth, infant, predator, human, fantasy, CGI, illustration, painting.
```

### 04 · Young-leaf foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sunda Colugo feeding gallery image 4 of 6, original project asset, horizontal 3:2 intended for exactly 1536 × 1024 pixels
Primary request: Create a scientifically grounded photorealistic natural-history image of exactly one adult Sunda colugo (Galeopterus variegatus) feeding on tender young leaves at night in the rainforest canopy.
Scene/backdrop: Generalized Southeast Asian tropical forest canopy, one sturdy angled branch and a spray of fresh young leaves, layered dark foliage behind. No named locality, no people, no other animals.
Subject accuracy: One complete adult grips the branch securely with all four clawed feet and bends its narrow muzzle toward a small cluster of intact young leaves and buds. Round head, huge forward-facing dark eyes, small rounded ears, mottled gray-brown short fur with irregular cream marbling. The broad fur-covered patagium is relaxed in natural folds along the body, visibly continuous from the neck to the forelimbs, between five short fingers, between fore- and hindlimbs, between five short toes, and around the tail to its tip with no exposed free tail. If the lower incisors are glimpsed, show only a subtle fine comb-like edge, never oversized rodent incisors or fangs.
Style/medium: Museum-grade photorealistic wildlife documentary photography, real leaf veins, bark texture, fur and soft membrane folds, restrained editorial color.
Composition/framing: Exact horizontal 3:2. Keep the entire animal, all limbs, tail membrane and feeding branch inside generous margins. Three-quarter side view at branch height, face and leaf interaction readable without an extreme macro crop.
Lighting/mood: Credible soft nocturnal ambient light with a dim moonlit fill, natural low-light exposure, no flash glare or spotlight.
Scientific boundary: The scene reconstructs folivory; pixels cannot identify the plant species, prove ingestion, quantify diet proportion, show seasonal preference or establish foraging success.
Constraints: exactly one complete colugo; a restrained cluster of young leaves; continuous furred patagium to tail tip; opaque image; no text, logo, signature, border or watermark.
Avoid: fruit-only diet, insect attack, flowers filling the scene, open snarling mouth, oversized incisors, rodent teeth, carnivore fangs, lemur, bat, flying squirrel, free tail, extra limbs, duplicated feet, infant, nest, fantasy, CGI, illustration, painting.
```

### 05 · Mother with one ventral infant

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sunda Colugo maternal-care gallery image 5 of 6, original project asset, horizontal 3:2 intended for exactly 1536 × 1024 pixels
Primary request: Create a scientifically grounded photorealistic wildlife image of exactly one adult female Sunda colugo (Galeopterus variegatus) carrying exactly one unweaned infant against her ventral abdomen while she clings upright to a broad rainforest tree trunk.
Scene/backdrop: Generalized Southeast Asian lowland forest at quiet early night, rough broad trunk, dim layered leaves and vines behind. No named locality, no people, no other animals beyond the mother and her single infant.
Adult accuracy: One complete adult female with gray-brown mottled short fur and irregular pale marbling, compact round head, narrow muzzle, huge dark forward-facing eyes, small rounded ears, four long limbs and five curved clawed digits on each visible foot. Her broad fur-covered patagium is relaxed and folds around the body; it connects neck, forelimbs, finger webs, hindlimbs, toe webs and the tail completely to its tip, leaving no free tail.
Infant accuracy: Exactly one small furred colugo infant clings flat against the mother's ventral abdomen with its own tiny limbs, nestled within a loose protective fold of the mother's relaxed abdominal/tail membrane. The infant remains visibly external and clinging, not sealed inside a pouch. Its head and part of its body are readable. It must look like the same species, not a human baby, primate, rodent or bat pup.
Style/medium: Museum-grade photorealistic natural-history documentary photography with real fur, claws, bark and soft membrane folds, restrained color and respectful distance.
Composition/framing: Exact horizontal 3:2. Full mother from ears to membrane-wrapped tail stays inside frame; ventral infant visible in three-quarter side view; all adult limbs attach coherently to one body.
Lighting/mood: Soft natural low-light forest ambience with gentle warm-cool balance, no flash hotspot.
Scientific boundary: A generalized maternal-transport reconstruction; a still cannot establish infant age, sex, kinship beyond the depicted pair, nursing, brood frequency, gestation length or population-wide care pattern.
Constraints: one mother plus exactly one infant; infant external and clinging to ventral abdomen; continuous adult furred patagium to tail tip; opaque image; no text, label, logo, signature, border or watermark.
Avoid: marsupial pouch opening, kangaroo pouch, infant fully hidden inside body, two infants, extra adult, bat roost, upside-down hanging, breastfeeding anatomy, exposed nipple, placenta, birth, blood, lemur, monkey hands, free tail, extra limbs, duplicated heads, fantasy, CGI, illustration, painting.
```

Targeted correction:

```text
Use case: precise-object-edit
Input image: The frame 05 base image of one adult female Sunda colugo and one infant clinging to a rainforest trunk at night.
Primary request: Correct the maternal-care anatomy while preserving the two animals, trunk, forest background, camera angle, lighting, color and 1536 × 1024 landscape composition.
Infant correction: Place the single infant fully outside the mother's body, flat against her ventral abdomen, with its own small limbs visibly gripping her fur and relaxed membrane. Remove the circular rim and cavity that read as a marsupial pouch.
Adult correction: Replace the free curled tail with a broad continuous fur-covered patagium that encloses the tail to its tip and forms a loose protective fold below the infant. Keep both maternal forefeet and one right hind foot visibly gripping the trunk. The infant and folded patagium may plausibly obscure the left hind foot.
Constraints: exactly one adult female and one infant; no pouch opening, free tail, tubular tail loop, embedded infant, extra limb, duplicated foot, exposed nipple, text, logo, signature, border or watermark.
```

### 06 · Day roost camouflage

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sunda Colugo daytime-roost gallery image 6 of 6, original project asset, horizontal 3:2 intended for exactly 1536 × 1024 pixels
Primary request: Create a scientifically grounded photorealistic daylight natural-history image of exactly one adult Sunda colugo (Galeopterus variegatus) resting motionless against a lichen-mottled rainforest trunk, showing its cryptic camouflage.
Scene/backdrop: Generalized Southeast Asian mature secondary or lowland evergreen forest in soft daytime shade, one broad textured trunk with irregular gray, brown and pale lichen patches, quiet foliage depth behind. No named locality, no people, no other animals.
Subject accuracy: One complete adult aligned lengthwise head-up along the trunk, body flattened close to bark, all four limbs gripping with five short curved clawed digits. The compact head has a narrow muzzle, large dark forward-facing eyes partly relaxed but not anatomically closed like a human, and small rounded ears. Short gray-brown fur carries irregular cream and gray-white marbling that resembles but does not perfectly duplicate the bark. The relaxed fur-covered patagium folds along the flanks and remains continuous from neck through limbs and digit webs to the completely enclosed tail tip; no free tail.
Style/medium: Museum-grade photorealistic wildlife documentary photography, natural fur and bark microtexture, subtle camouflage, restrained natural-history editorial color.
Composition/framing: Exact horizontal 3:2. Keep the entire animal visible and identifiable rather than hiding it completely, with generous trunk and habitat context. Side-on three-quarter view at trunk height.
Lighting/mood: Soft diffuse daylight beneath canopy, quiet and observational, no spotlight, no dramatic rim light.
Scientific boundary: A generalized resting posture and visual-camouflage reconstruction; pixels cannot prove a chosen roost, detection probability, sleep state, survival advantage, individual identity or site occupancy.
Constraints: exactly one complete animal; visible four-limb grip; continuous furred patagium to tail tip; opaque image; no text, arrows, logo, signature, border or watermark.
Avoid: invisible animal, hollow tree den, sleeping nest, upside-down bat posture, bare bat wing, lemur, squirrel, sugar glider, free furry tail, extra limbs, duplicated digits, infant, predator, human, collar, camera trap overlay, fantasy, CGI, illustration, painting.
```

## Processing and static checks

```bash
npm run compress -- src/assets/source/species/sunda-colugo/*-source.png
npm run convert:webp -- src/assets/source/species/sunda-colugo/*-source.png
```

TinyPNG reported a 64.9% total size reduction for the initial six source PNGs. Codex replaced frame 05 after review. TinyPNG reduced the corrected source from 2582.8KB to 1052.3KB (-59.3%), and `cwebp` reduced its runtime copy from 1052.3KB to 209.1KB (-80.1%). ImageMagick reported all twelve final files as opaque, single-frame sRGB images at 1536 × 1024.

## Accepted asset hashes

| Frame | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| ----- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01    | `9115614deb52bacc585e9598800e13e69f4cdf353ed8c62e737ee4f776bf557b` | `3244e696cb6480935eeea9f07bbd71113dc761bd5f1d982440fdcae4a2489029` |
| 02    | `247fc2b37f399c815054001dcb2bd4e5ed0ef673cf18096dcf200067b24d8c5f` | `86810e300c6ac4626670baf221fe6e7dddc3dfba273122d524f82527a73c467f` |
| 03    | `992bdeea71478b82f2774acb23f27ed5b6432db44471dd979e785a700063a112` | `8552ac44df62d8b3b6a7ebfd509f709f5e304a29284a04bbe59539afd915a05f` |
| 04    | `693b47aedacaed0ab42eba3e50fc8d14b3f01b34dc69a7248ac9cd24931bbd6c` | `d328684451819370105bdae770ac92bb1341b7904ecee8cb259fe16dcb5e9f40` |
| 05    | `b82883313bfe76484a240a119ac8d7c77b13584d0fe9968d70cbefe42e09c78a` | `4cf52fb46f91d0dd72321a0bfef4c704b3ced815955fa3696b17c44983028ece` |
| 06    | `25283fcbc0ca5bc700e437d844e6ca04d972c041060a41ad267e1c7fe6cd64dc` | `e535631b229e82712116554295fdd2fe638e400de680cc022f5315de727fbd28` |
