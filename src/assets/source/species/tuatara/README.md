# Tuatara image set

OpenAI's built-in imagegen created these six original project images on 2026-08-26 for the Fauna Atlas *Sphenodon punctatus* profile. The scenes reconstruct generalized New Zealand coastal forest, offshore-island habitat, foraging, nesting and biosecurity monitoring. They do not document a named animal, island, nest, monitoring device or field worker.

- Generation mode: OpenAI built-in imagegen, `photorealistic-natural`
- Research brief: [`docs/research/tuatara-profile.md`](../../../../../docs/research/tuatara-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/tuatara/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: source files are opaque 8-bit indexed-color PNGs; runtime files use opaque lossy VP8 WebP
- Source compression: `npm run compress -- src/assets/source/species/tuatara/*-source.png`
- Runtime conversion: `npm run convert:webp -- src/assets/source/species/tuatara/*-source.png`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-coastal-forest-adult-male-portrait-source.png` | `01-coastal-forest-adult-male-portrait.webp` | One complete adult male stands on the right of a damp coastal-forest floor, with a large head, robust body, raised dorsal crest and a dark burrow entrance behind the left copy space. The throat skin forms a pronounced fold. |
| 02 | `02-adult-female-field-marks-source.png` | `02-adult-female-field-marks.webp` | One complete adult female rests low on wet leaf litter among moss and ferns. Her body and crest are smaller than the cover male's, but the image alone cannot establish sex. |
| 03 | `03-seabird-island-burrow-habitat-source.png` | `03-seabird-island-burrow-habitat.webp` | A coastal forest slope and the sea dominate the frame. One small complete tuatara sits beside one burrow entrance among several openings; no seabird appears in the scene. |
| 04 | `04-nocturnal-weta-foraging-source.png` | `04-nocturnal-weta-foraging.webp` | One complete tuatara approaches one reconstructed wētā on a dark forest floor near a burrow entrance. The frame stops before contact and shows no capture. |
| 05 | `05-nesting-slope-female-source.png` | `05-nesting-slope-female.webp` | One complete adult female sweeps loose soil beside a shallow disturbed patch on a bare nesting slope. The accepted image shows nest-covering soil disturbance but no eggs or open egg chamber. |
| 06 | `06-predator-free-island-monitoring-source.png` | `06-predator-free-island-monitoring.webp` | One field worker kneels beside one black tunnel-like monitoring device while one complete tuatara remains near a separate burrow entrance. The scene illustrates biosecurity surveillance; it records no protocol, detection or predator-free status. |

## Scientific and editorial boundaries

- Tuatara belong to Rhynchocephalia, not Squamata. Their lizard-like outline in these reconstructions does not make them lizards or establish their taxonomic placement.
- The cover male has a pronounced throat fold. Product copy must not label it a diagnostic dewlap, inflatable display organ or species-wide male trait.
- Dorsal-crest height varies with sex, individual and posture. Frames 01 and 02 support a visual comparison, not sex identification from crest size alone.
- Ground, leaf litter and limb overlap prevent a full digit count in several frames. None of the six images serves as a complete foot-anatomy plate.
- The parietal eye does not appear as an exposed third eyeball in any frame. The images provide no evidence about its internal anatomy or function.
- Frames 01, 03, 04 and 06 contain burrow openings. They do not identify the burrow builder, prove simultaneous seabird and tuatara occupancy, locate a named colony or establish burrow density.
- Frame 03 contains no seabird. The coastal slope and burrow openings support a generalized offshore-island habitat story, not a record of a seabird colony or one required habitat type.
- Frame 04 stages one tuatara near one wētā. It does not identify a wild prey specimen, show a strike or capture, measure feeding success or establish diet proportions.
- Frame 05 contains no visible egg. It can illustrate a female covering disturbed nesting soil, but it cannot support clutch size, egg appearance, oviposition, incubation duration, hatch success or temperature-dependent sex determination.
- Frame 06 illustrates biosecurity surveillance. It does not prescribe equipment placement, sampling interval, hygiene, animal handling or response steps, and it supplies no pest detection, tuatara occurrence, abundance or predator-free declaration.
- The six scenes supply no calibrated body measurement, age, named location, individual identity, population count, conservation status or trend.
- The scenes contain no readable text, logo, watermark, border or collage. Frame 04 contains one prey animal; the other five frames contain one tuatara and no other non-human animal.

## Generation prompts

The blocks below preserve the six prompts sent to OpenAI imagegen, one prompt for each accepted frame.

### 01 · Coastal-forest adult male portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tuatara species-profile cover, original project asset
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an adult male tuatara (Sphenodon punctatus) in a cool New Zealand offshore-island coastal forest clearing.
Scene/backdrop: damp leaf litter, mossy stones, low native coastal scrub and a dark burrow entrance in soft soil; generalized predator-free island habitat, no named island or sanctuary.
Subject: EXACTLY ONE ADULT MALE TUATARA TOTAL. One healthy complete adult male standing naturally on the right, body angled three-quarters toward the left and head lifted. Show a broad blunt wedge-shaped head, robust neck and torso, long tapering tail, granular olive-gray to slate-brown skin with fine pale speckling, four sturdy limbs, clawed digits, and a prominent midline crest made of soft triangular skin folds from the nape along the back and proximal tail. The crest is raised enough to identify an adult male but is not rigid or horned. No external ear opening is visible. The adult parietal organ is covered by scales: DO NOT draw a third external eye.
Taxon boundary: Sphenodon punctatus, the New Zealand tuatara, not an iguana, monitor lizard, gecko, skink, crocodile, dinosaur or fantasy dragon.
Style/medium: museum-quality documentary wildlife photography, accurate tuatara anatomy, real granular skin and forest texture, restrained natural color.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Place the complete animal on the right around x=0.68, y=0.57, occupying about 52–58% of frame width. Keep the full snout, crest, torso, all four limbs, feet and complete tail inside the crop-safe area. Preserve broad calm forest-floor negative space across the left 38% for page copy, with clear ground below the animal.
Lighting/mood: cool soft morning daylight filtered through coastal scrub, subtle moist atmosphere, no dramatic beams.
Constraints: exactly one animal; complete anatomy; four limbs; one tail; no text, logo, watermark, border or collage.
Avoid: second animal, egg, chick, seabird, person, rat, tracking tag, external ear hole, visible third eye, rigid spikes, horns, dewlap, bright tropical green, blue skin, open mouth, forked tongue, extra limb, missing limb, split tail, cropped anatomy, edge contact, enclosure, fence, road, building, synthetic oversaturation.
```

### 02 · Adult female field marks

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tuatara gallery image, adult female field marks
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an adult female tuatara (Sphenodon punctatus) on a New Zealand offshore-island forest floor.
Scene/backdrop: cool damp coastal scrub with leaf litter, low fern, moss and soft soil; generalized natural habitat.
Subject: EXACTLY ONE ADULT FEMALE TUATARA TOTAL. Show one healthy complete adult female in clean side-and-slightly-front three-quarter view, facing left. She has a broad but less triangular head than an adult male, robust olive-gray body with fine pale speckles, granular skin, four sturdy limbs, clawed digits, a long tapering tail, and a low narrow crest of soft triangular skin folds along neck, back and proximal tail. Her crest is visibly smaller and less fleshy than an adult male's. No external ear opening. The parietal organ is covered in the adult: no visible third eye.
Taxon boundary: Sphenodon punctatus, not a lizard, iguana, gecko, skink, crocodile, dinosaur or fantasy dragon.
Style/medium: museum-quality documentary wildlife photography with accurate anatomy and restrained color.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Place the whole animal near x=0.58, y=0.57, occupying about 52–58% of frame width. Entire snout, low crest, all four limbs, feet and tail remain inside frame with generous margins. Keep the animal sharp against a softly blurred habitat.
Lighting/mood: diffuse cool daylight, natural moist forest-floor color.
Scientific boundary: morphology illustrates one adult female reconstruction; size and crest vary among individuals and populations.
Constraints: exactly one animal; complete anatomy; four limbs; one tail; no text, logo, watermark, border or collage.
Avoid: adult male's tall fleshy crest, second animal, juvenile, egg, nest, seabird, person, rat, visible external ear, visible third eye, rigid spines, horns, dewlap, bright iguana green, open mouth, forked tongue, extra limb, missing limb, split tail, cropped anatomy, enclosure or oversaturation.
```

### 03 · Seabird-island burrow habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tuatara gallery image, offshore-island habitat
Primary request: create a scientifically grounded photorealistic wide environmental portrait of New Zealand offshore-island coastal forest and seabird-burrowed soil used by tuatara (Sphenodon punctatus).
Scene/backdrop: cool windswept coastal forest and scrub with low native vegetation, mossy rocks, leaf litter, shaded clearings and several natural burrow entrances in friable soil. Habitat carries at least 88% of the visual weight. A pale ocean horizon is barely visible through foliage. Generalized island, no named place.
Subject: EXACTLY ONE TUATARA TOTAL. One small but fully visible adult tuatara stands beside one burrow entrance in the middle-right around x=0.68, y=0.62, occupying only about 15–18% of frame width. Preserve its complete silhouette: blunt head, low dorsal crest, robust torso, four limbs and long tail. No seabird is present.
Style/medium: documentary conservation landscape photography, photorealistic, realistic cool-climate vegetation and soil.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Wide layered habitat view with safe margins around the animal.
Lighting/mood: overcast coastal daylight, muted greens and earth tones, natural atmospheric depth.
Scientific boundary: generalized habitat reconstruction, not an occurrence record, density estimate, mapped range or proof that tuatara excavated every visible burrow.
Constraints: exactly one animal and no other animal; no text, map, pin, route, logo, watermark, border or collage.
Avoid: tropical rainforest, desert, farm, fence, road, building, vehicle, person, rat, mouse, cat, dog, seabird, egg, nest contents, second tuatara, fantasy landscape, cropped animal or oversaturation.
```

### 04 · Nocturnal wētā foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tuatara gallery image, nocturnal invertebrate foraging
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an adult tuatara (Sphenodon punctatus) approaching a single New Zealand wētā on a cool island forest floor at night.
Scene/backdrop: damp leaf litter, moss, low native coastal scrub and a nearby burrow entrance under cool moonlit darkness; generalized offshore-island habitat.
Subject: EXACTLY ONE TUATARA AND EXACTLY ONE WĒTĀ TOTAL. The complete tuatara advances slowly from the right toward the wētā near center-left, head lowered and eyes focused. Its mouth remains closed and there is clear space between snout and insect. Show a blunt wedge-shaped head, olive-gray finely speckled granular skin, low soft dorsal crest, four limbs and a complete tapering tail. The wētā is one intact robust brown orthopteran with long antennae, fully visible and not oversized.
Style/medium: photorealistic low-light documentary wildlife photography, accurate New Zealand fauna, crisp subjects and natural texture.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Whole tuatara around x=0.62, y=0.60, occupying about 48–54% of frame width; wētā near x=0.37, y=0.66. Keep both complete with generous margins.
Lighting/mood: cool dim moonlight plus soft reflected sky light, credible night exposure, restrained contrast; no flashlight hotspot.
Scientific boundary: the scene reconstructs an approach to possible prey. It does not prove a capture, diet proportion, feeding rate or named location.
Constraints: one tuatara, one wētā, no other animal; no text, logo, watermark, border or collage.
Avoid: bite, blood, open mouth, forked tongue, extra insect, spider, worm, seabird, egg, second tuatara, rat, person, rigid spikes, visible third eye, fantasy glow, spotlight, enclosure, cropped anatomy or oversaturation.
```

### 05 · Nesting-slope female

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tuatara gallery image, nesting behavior
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an adult female tuatara (Sphenodon punctatus) using her hind feet to refill a shallow nest hole on a warm open island slope at dusk.
Scene/backdrop: a small north-facing clearing in low New Zealand coastal scrub, friable sun-warmed soil, sparse grass and leaf fragments; generalized nesting habitat with no named location.
Subject: EXACTLY ONE ADULT FEMALE TUATARA TOTAL. One complete smaller adult female straddles the edge of a shallow soil excavation, body angled three-quarters away but head visible in profile. One hind foot draws loose soil toward the hole. Show olive-gray speckled granular skin, broad head, four limbs, long tapering tail and a low narrow soft crest. No egg is exposed; the nest contents remain underground.
Style/medium: museum-quality photorealistic documentary wildlife reconstruction with believable soil disturbance and accurate anatomy.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Place the whole female around x=0.55, y=0.60, occupying about 52–58% of frame width. Keep all four limbs, feet, head and full tail within the crop-safe area. The shallow disturbed patch remains visible beside her.
Lighting/mood: soft late-spring dusk light, natural earth tones, calm and undramatic.
Scientific boundary: the scene represents nest covering. It provides no egg count, clutch ownership, incubation duration, hatch success or exact date.
Constraints: exactly one animal; no visible egg; no text, logo, watermark, border or collage.
Avoid: exposed egg, hatchling, second tuatara, seabird, rat, person, deep cavern, oversized mound, rigid dorsal spikes, adult male tall crest, open mouth, visible third eye, extra limb, missing limb, split tail, cropped anatomy or enclosure.
```

### 06 · Predator-free-island monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tuatara gallery image, predator-free island biosecurity monitoring
Primary request: create a scientifically grounded photorealistic conservation scene showing non-contact invasive-mammal surveillance in tuatara habitat on a New Zealand offshore island.
Scene/backdrop: cool coastal forest floor with low native scrub, moss, leaf litter and one natural burrow entrance. A small plain rodent tracking tunnel sits well away from the burrow, integrated into the habitat.
Subjects: EXACTLY ONE ADULT TUATARA AND EXACTLY ONE HUMAN FIELD RANGER TOTAL. In the foreground-right, one complete olive-gray tuatara stands beside its burrow, calm and untouched. In the background-left, one ranger in plain neutral rain gear kneels beside the closed tracking tunnel and checks a removable tracking card while wearing clean gloves. The ranger is several metres from the animal and does not face, touch, feed, restrain or handle it. No rodent is present.
Style/medium: photorealistic conservation field documentary, accurate proportions, restrained natural color.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Tuatara around x=0.68, y=0.64 and ranger around x=0.28, y=0.50, separated by a broad habitat buffer. Keep the animal complete and the monitoring action readable without staged contact.
Lighting/mood: soft overcast coastal daylight, practical fieldwork mood.
Scientific boundary: illustrative biosecurity check, not a named team, island, protocol result, detection record or proof that the visible animal belongs to a monitored population.
Constraints: one tuatara; one ranger; one tracking tunnel; no other animal; no readable text, agency badge, logo, watermark, border or collage.
Avoid: rat, mouse, cat, dog, poison bait, trap with captured animal, direct wildlife handling, crowd, second ranger, second tuatara, vehicle, building, fence dominating the frame, visible third eye, rigid spikes, fantasy gear, cropped animal or oversaturation.
```

## Static and visual validation

- All six TinyPNG-compressed sources decode as opaque 1536 × 1024, 8-bit indexed-color PNG files.
- All six runtime assets decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- The six compressed source PNG files total 6,358,412 bytes. The project did not retain the pre-compression drafts, so this record does not claim a source-compression percentage.
- Compressed source sizes are 1,019,101; 846,491; 1,145,526; 1,100,621; 1,115,831; and 1,130,842 bytes in frame order.
- Runtime WebP sizes are 301,186; 203,156; 397,800; 225,196; 263,552; and 344,472 bytes in frame order, totaling 1,735,362 bytes. WebP conversion reduced the compressed-source total by 72.7 percent.
- Original-resolution source inspection covered animal counts, full-body framing, crest and throat shape, burrow openings, the wētā, disturbed nesting soil, the monitoring device and the absence of visible eggs in frame 05.
- Original-resolution runtime inspection found no new cropping, subjects, visible text, logos, watermarks, borders or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
