# Ringed Caecilian image set

OpenAI's built-in imagegen created eight outputs on 2026-08-30 for the Fauna Atlas _Siphonops annulatus_ profile. Six calls started new images. Two edit calls targeted frame 02. Review accepted six source frames covering a cacao-agroforest portrait, diagnostic external form, a shallow soil tunnel, egg attendance, maternal dermatophagy contact and field search. Both frame-02 edits failed to separate the tentacular aperture and nostril as visible landmarks. Review accepted the second edit as an annuli-and-blunt-head morphology frame and renamed it to avoid an unsupported claim.

- Generation tool: OpenAI built-in imagegen
- New-generation modes: photorealistic-natural for frames 01, 02, 04 and 05; scientific-educational with photorealistic-natural rendering for frame 03; conservation-documentary for frame 06
- Edit mode: two referenced-image anatomical edits for frame 02
- Research brief: [`docs/research/ringed-caecilian-profile.md`](../../../../../docs/research/ringed-caecilian-profile.md)
- Source directory: `src/assets/source/species/ringed-caecilian/`
- Runtime directory: `public/images/species/ringed-caecilian/`
- Source format: 1536 × 1024 opaque 8-bit sRGB palette PNG
- Runtime format: 1536 × 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 8, comprising 6 brand-new generations and 2 edits
- Compression: TinyPNG returned HTTP 429 for all six scoped source files. The local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. Runtime WebPs use cwebp 1.6.0 with quality 82, method 6 and multithreading.
- Compressed totals: 6,632,735 bytes across the six source PNGs and 1,577,468 bytes across the six runtime WebPs

## Accepted files and visual boundaries

| No. | Source file                                      | Runtime file                               | Accepted observation                                                                                                                                                                                                           | Boundary                                                                                                                                                                                                                                                                        |
| --- | ------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | `01-cacao-agroforest-adult-portrait-source.png`  | `01-cacao-agroforest-adult-portrait.webp`  | One complete slate-blue limbless animal forms a loose curve on wet leaf litter and dark soil beneath broad-leaved understory. Fine pale-edged annuli, a blunt head and a rounded posterior remain readable.                    | The generalized cacao-agroforest setting cannot identify a farm, country, population, sex, age, length or undisturbed surfacing event. The frame does not resolve the paired sensory-tentacle apertures.                                                                        |
| 02  | `02-annuli-and-blunt-head-profile-source.png`    | `02-annuli-and-blunt-head-profile.webp`    | One complete slate-gray limbless animal forms a broad curve on damp ochre humus. The image shows a tiny eye, many fine pale-edged annuli, a blunt head and a rounded posterior.                                                | Neither the accepted pixels nor either edit separates a tentacular aperture from a nostril. Product text and alt text must not claim that the image shows either landmark. The image cannot supply an exact annulus count, calibrated length, sex, age or population diagnosis. |
| 03  | `03-shallow-smooth-walled-tunnel-source.png`     | `03-shallow-smooth-walled-tunnel.webp`     | One complete animal lies inside one smooth, curved soil passage beneath humid leaf litter in a clean vertical cutaway reconstruction.                                                                                          | The frame cannot prove that the animal excavated, occupied or maintained the passage. It does not establish true depth, branching, airflow, drainage or the form of a complete burrow system.                                                                                   |
| 04  | `04-root-chamber-egg-attendance-source.png`      | `04-root-chamber-egg-attendance.webp`      | One complete grayish-blue adult forms an open coil around exactly eight countable pale eggs in a humid root chamber.                                                                                                           | Eight eggs serve the controlled composition. External appearance cannot establish biological maternity. The still cannot establish laying, a species-wide clutch size, egg age, incubation time, embryo state or hatching success.                                              |
| 05  | `05-maternal-dermatophagy-hatchlings-source.png` | `05-maternal-dermatophagy-hatchlings.webp` | One complete pale attending adult and exactly five complete unpigmented hatchlings occupy a humid chamber. Each hatchling's head touches the same intact-looking maternal flank; no blood, wound, loose skin or fluid appears. | The contact posture cannot prove ingestion, reveal juvenile teeth, measure nutrition, frequency or duration, or extend the behavior to each female, brood or caecilian species. This frame shows no cloacal secretion and cannot support a milk-provisioning caption.           |
| 06  | `06-cacao-soil-active-search-source.png`         | `06-cacao-soil-active-search.webp`         | Exactly two field workers inspect one small soil patch beneath shaded cacao agroforest. The scene contains one short hand shovel, one notebook and one pen, with no visible animal.                                            | The reconstruction cannot establish a detection or absence, survey effort, abundance, a named protocol, locality, person or institution. It cannot prove that excavation caused no disturbance.                                                                                 |

The accepted set treats the animal as a limbless amphibian with smooth moist skin, dense fine annuli, a compact blunt head and a rounded posterior. No frame supports a snake-scale, earthworm-clitellum, projecting-tentacle, external-gill, limb, mammary-organ or venom-delivery claim. Frames 01 and 02 show eyes, but neither frame supports a visible sensory-tentacle aperture or nostril claim.

## Imagegen output ledger

All generator outputs share this parent directory:

`/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/`

| Call | Mode                                                                               | Generator output                                | Decision                                                                                                                                                                                                         |
| ---: | ---------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   01 | Brand-new generation, photorealistic-natural                                       | `exec-f2efe96d-4663-4ada-9ec7-1ecfe65e98b8.png` | Accepted as frame 01 and copied to `01-cacao-agroforest-adult-portrait-source.png`.                                                                                                                              |
|   02 | Brand-new generation, photorealistic-natural                                       | `exec-4e9f38de-3863-4732-b921-daad3e727b70.png` | Rejected in favor of an edit attempt. The output did not separate the eye, tentacular aperture and nostril into three readable landmarks.                                                                        |
|   03 | Referenced-image anatomical edit of call 02                                        | `exec-6d39456b-8cf1-49b9-b994-342cdd9d99d3.png` | Rejected. A separate tentacular aperture and nostril remained unresolved.                                                                                                                                        |
|   04 | Referenced-image anatomical edit of call 03                                        | `exec-7b971073-795a-4a42-9956-828a80f35a7b.png` | The edit still failed its three-landmark target. Review accepted the output only for its complete body, fine annuli, visible eye and blunt profile, then named it `02-annuli-and-blunt-head-profile-source.png`. |
|   05 | Brand-new generation, scientific-educational with photorealistic-natural rendering | `exec-8ba47d70-5ee5-4a6e-8f0a-299f32852cd3.png` | Accepted as frame 03 and copied to `03-shallow-smooth-walled-tunnel-source.png`.                                                                                                                                 |
|   06 | Brand-new generation, photorealistic-natural                                       | `exec-e1f4483c-a04e-41c8-918d-8a10906157b2.png` | Accepted as frame 04 and copied to `04-root-chamber-egg-attendance-source.png`.                                                                                                                                  |
|   07 | Brand-new generation, photorealistic-natural                                       | `exec-1919dcba-89bc-4da0-9444-b7db57d8bc49.png` | Accepted as frame 05 and copied to `05-maternal-dermatophagy-hatchlings-source.png`.                                                                                                                             |
|   08 | Brand-new generation, conservation-documentary                                     | `exec-9c1259d7-56aa-4e8b-af7c-dca2e97e246c.png` | Accepted as frame 06 and copied to `06-cacao-soil-active-search-source.png`.                                                                                                                                     |

## Exact prompts and modes

### Call 01 · New generation · accepted frame 01

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Ringed Caecilian species-profile cover, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a restrained, scientifically cautious natural-history photograph of one complete adult Ringed Caecilian (Siphonops annulatus) on damp leaf litter and dark soil in a shaded Brazilian cacao agroforest.
Scene/backdrop: Low ground-level view beneath cacao trees, with humid dark loam, decomposing brown leaves, fine roots, mossy fragments and soft green understory blur. The habitat is a generalized southern Bahia-style cacao agroforest, not an identifiable farm or locality. No open water, terrarium, road, building, plantation rows or people.
Subject morphology: One complete limbless cylindrical amphibian, blue-gray to slate-gray, smooth moist skin, blunt compact head continuous with the trunk and no neck, tiny dark eyes faintly visible through skin, a tiny sensory-tentacle opening between each eye and nostril and closer to the eye, and a blunt rounded posterior ending in an unsegmented terminal shield rather than a pointed tail. Across the whole body show many narrow, shallow primary annular grooves with subtle pale whitish edges—roughly eighty or more fine rings, not a handful of broad ribs. The animal has no scales, legs, external ears, antennae, barbels or projecting tentacles.
Style/medium: Original photorealistic professional wildlife field photography, macro natural-history realism, accurate moist skin and soil texture, restrained museum-publication color, no illustration or CGI look.
Composition/framing: Exact 1536 × 1024 horizontal frame. Place the complete animal in a gentle loose S-curve across the lower center-right, occupying about two-thirds of the width. Keep the blunt head, full trunk and rounded posterior comfortably inside the frame and readable against dark soil. Leave calm habitat context at upper-left.
Lighting/mood: Soft diffuse overcast light filtered through cacao canopy, humid and quiet, natural specular highlights only.
Scientific boundary: This generalized reconstruction cannot establish a locality, sex, age, length, population, microhabitat preference frequency or whether the visible individual naturally surfaced without disturbance.
Constraints: Exactly one complete animal; closed mouth; no eggs, hatchlings, prey, tools, gloves, ruler, tag, text, label, logo, signature, border or watermark.
Avoid: earthworm clitellum, obvious segmented worm tail, snake scales or forked tongue, eel fins, salamander legs, annulated coral-snake colors, ten to twenty broad body bands, armor rings, pointed tail, visible long tentacles, large eyes, gills, slime trails, artificial burrow cutaway, fantasy creature, oversaturation, painting, illustration or CGI.
```

The accepted output preserves the complete body and habitat composition. It does not resolve each tiny sensory opening requested by the prompt.

### Call 02 · New generation · rejected frame-02 initial

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Ringed Caecilian diagnostic gallery image 2 of 6, original project asset, exact horizontal 3:2 intended for 1536 × 1024.
Primary request: Create a clean full-body diagnostic natural-history portrait of one adult Ringed Caecilian (Siphonops annulatus) in a gentle left-facing curve on pale damp clay and fine leaf fragments, emphasizing its fine annuli, tiny eye and sensory-tentacle opening without turning those openings into projecting appendages.
Subject morphology: Exactly one complete limbless cylindrical amphibian, slate blue-gray with smooth moist skin. The short blunt head is continuous with the trunk with no neck. Show one tiny black eye faintly visible through the skin on the near side. Between that eye and the nostril, closer to the eye, show one tiny flush pinhole-like tentacular opening; it must not project beyond the skin. The mouth remains closed. Across the body show many narrow shallow primary annular grooves with subtle pale cream edges—approximately eighty or more fine rings rather than a small number of thick bands. The posterior ends bluntly in a rounded, unsegmented terminal shield with no distinct pointed tail.
Backdrop: Simple natural pale ochre moist clay, a few fine roots and small brown leaf fragments, softly blurred; no ruler, hand, collection tray, terrarium or landmark.
Style/medium: Original photorealistic museum-quality field diagnostic photography, crisp but natural skin texture, accurate restrained colors, shallow depth of field while the whole animal remains legible.
Composition/framing: Exact 1536 × 1024 horizontal frame. Keep the entire animal from blunt snout to rounded posterior inside comfortable margins, forming a broad shallow curve through the center. Make the head large enough to read the tiny eye and flush tentacular opening, but do not crop or use an inset. Near-side anatomy may be clearer than far-side anatomy.
Lighting/mood: Soft diffuse daylight, neutral documentary mood.
Scientific boundary: A single exterior view can support qualitative identification but cannot count every annulus, resolve internal tentacle anatomy, determine sex or age, diagnose a population, or calibrate total length.
Constraints: One animal; one coherent head and one rounded posterior; no limbs, scales, gills, external ears, tongue, open mouth, eggs, young, prey, person, glove, tool, ruler, tag, text, label, logo, signature, border or watermark.
Avoid: earthworm clitellum or bristles, snake scales and forked tongue, eel fins, salamander limbs, visible long tentacles or whiskers, antennae, large exposed eyes, nostril horn, coarse corrugated armor, ten to twenty broad rings, alternating black-white color bands, pointed or forked tail, duplicated head, cropped body, fantasy, CGI, illustration, painting or oversaturation.
```

### Call 03 · Referenced-image edit · rejected frame-02 edit 1

```text
Edit this existing Ringed Caecilian diagnostic image with the smallest possible anatomical correction. Preserve the exact 1536 × 1024 horizontal composition, one complete slate-gray limbless body, pale damp clay background, fine annular grooves, lighting, color, focus and rounded posterior.

On the visible side of the blunt left-facing head, preserve the tiny dark eye already present. Add one second, much smaller flush pinhole-like sensory-tentacle opening between the eye and the nostril, positioned closer to the eye than to the nostril. It must read only as a subtle dark pore in the skin, not as a projecting tentacle, whisker, antenna, pit organ, horn or second eye. If the nostril is not visible, add only a minute nostril at the snout tip so the ordering is legible: eye, tiny tentacular pore, nostril. Keep the mouth closed and subtle.

Do not change the number of animals, body path, proportions or surface. Do not add limbs, scales, clitellum, bristles, broad armor rings, forked tongue, large eyes, gills, eggs, prey, people, tools, ruler, text, label, logo, signature, border or watermark. Retain photorealistic museum-quality natural-history photography and avoid CGI or illustration.
```

The output retained the diagnostic composition but did not make the separate tentacular aperture and nostril visible.

### Call 04 · Referenced-image edit · accepted frame 02 with boundary

```text
Make one precise, localized anatomical edit to the existing image and preserve every other pixel-level visual choice as closely as possible.

The single glossy black dot already visible on the near side of the left-facing head is the reduced eye. KEEP IT unchanged. On the same visible side, ADD TWO much smaller matte pores along the line from that eye toward the left snout tip:
1) one pin-sized dark tentacular aperture immediately forward of the eye, separated from it by about one eye diameter and clearly closer to the eye than to the snout tip;
2) one even subtler minute nostril close to the rounded snout tip.
The result must show exactly three different near-side landmarks in order from body toward snout: existing glossy eye, tiny flush tentacular pore, minute nostril. The two new marks are flat pores, not eyes or appendages. Do not add landmarks to the far side.

Keep the 1536 × 1024 composition, one complete slate-gray limbless body, 78–98-looking fine pale-edged annuli, rounded unsegmented posterior, damp ochre humus, lighting and focus unchanged. Keep the mouth closed and subtle.

Do not add projecting tentacles, whiskers, antennae, eye stalks, extra eyes, scales, limbs, forked tongue, broad rings, text, labels, arrows, ruler, logo, signature, border or watermark. Maintain photorealistic natural-history photography.
```

The output did not satisfy the requested three-landmark edit. Review accepted its visible eye, fine annuli, complete body, blunt head and rounded posterior. The final basename `02-annuli-and-blunt-head-profile` records only those visible traits.

### Call 05 · New generation · accepted frame 03

```text
Use case: scientific-educational with photorealistic-natural rendering.
Asset type: Fauna Atlas Ringed Caecilian fossorial-habitat gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, original project asset.
Primary request: Create one coherent museum-grade natural-history soil cutaway showing exactly one complete adult Ringed Caecilian (Siphonops annulatus) inside one shallow smooth-walled tunnel beneath humid cacao-agroforest leaf litter.
Animal: One complete continuous bluish-gray to slate-gray limbless cylindrical adult following a gentle curve inside the tunnel. Use numerous narrow shallow pale primary annuli, a short blunt integrated head pointing forward through the tunnel, one tiny subtle eye where the near side is exposed, no visible long tentacles, and one blunt rounded unsegmented posterior shield with no distinct tail. Keep the body coherent, wholly visible through the open soil face and free of overlap or duplication.
Tunnel and soil: One continuous gently curving tunnel segment through dark moist humus-rich soil, with smooth slightly shiny compacted walls, a few fine roots and believable air space around the animal. Above it, show a thin natural surface layer of cacao leaves and forest litter. Keep the soil cohesive and humid, not sandy, rocky, flooded or transparent. Include no branching network, nest chamber or measured depth.
Style/medium: Photorealistic natural-history museum diorama viewed through one clean vertical soil face, credible soil structure and moist amphibian skin, restrained scientific-documentary color. No labels or diagram graphics and no CGI look.
Composition: Soil surface occupies the upper quarter. The single tunnel crosses the middle and exposes the complete animal at environmental scale, centered near x=0.58 y=0.57. Keep both the blunt head and blunt posterior visible inside the cutaway and clearly separate from the soil boundaries.
Lighting: Soft neutral museum reconstruction light with no glowing underground effects.
Scientific boundary: The cutaway illustrates a documented shallow smooth-walled tunnel context. It cannot prove that the visible animal excavated, permanently occupied or maintained this tunnel, nor reveal true depth, branching, airflow, drainage or an entire burrow system.
Constraints: Exactly one complete animal and one continuous tunnel segment; zero eggs, hatchlings, prey and people; no text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: glass terrarium, aquarium, flooded burrow, bubbles, open cavern, ant nest, mole tunnel network, transparent soil, giant chamber, rocks, loose sand, snake scales, earthworm clitellum, coarse broad rings, pointed tail, missing head, body continuing out of frame, duplicated body, exposed organs, fantasy, CGI, illustration or painting.
```

### Call 06 · New generation · accepted frame 04

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Ringed Caecilian egg-attendance gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, original project asset.
Primary request: Create a restrained natural-history reconstruction of exactly one adult Ringed Caecilian (Siphonops annulatus) coiled around exactly eight eggs in one shallow humid root chamber.
Adult: One complete shiny grayish-blue adult with a smooth limbless cylindrical body, numerous narrow pale primary annuli, a short blunt integrated head with one tiny subtle eye, and one blunt unsegmented posterior shield without a distinct tail. Arrange the adult in one loose open protective coil without hiding, crushing or touching every egg. Keep both blunt ends traceable. The grayish-blue coloration matches an egg-attending adult but do not add a visible sex organ or other external sex marker.
Eggs: EXACTLY EIGHT countable, separate, soft oval pale cream eggs with slight natural translucency. Join adjacent eggs with delicate translucent connecting membranes so the group forms one loose compact grape-like cluster. Keep all eight eggs whole, individually delineated and visible in a single layer: no hidden eggs and no extra spherical highlights that could be mistaken for eggs. Show no cracked shell, exposed embryo, hatchling or hatching instant.
Chamber: One modest rounded chamber in moist organic soil among large tree roots, with loose weak walls, fine roots and a little decomposing leaf matter. No engineered incubator, glass, transparent wall or measurement device.
Style/medium: Original photorealistic underground natural-history reconstruction, intimate museum-publication treatment, realistic moist amphibian skin, soil and soft egg membranes, no gore or sentimentality, no CGI or illustration look.
Composition: Place the open adult coil around the central egg group. Keep the head, posterior terminus and all eight eggs within the central 1536 × 800 safe band. Use enough depth of field to count exactly eight eggs and follow the complete adult body.
Lighting: Soft diffuse low light reflected by moist soil, restrained gray-blue, cream and brown palette.
Scientific boundary: Eight eggs serve a controlled visual count. The still cannot establish the adult's biological maternity from appearance, the laying moment, a species-wide clutch size, egg age, incubation duration, embryo state, hatching success or universal attendance.
Constraints: Exactly one complete adult, exactly eight intact eggs and zero hatchlings or other animals; no open wound, secretion, skin feeding, text, label, ruler, logo, signature, border or watermark.
Avoid: snake nest, bird nest, hard chalk-white reptile shells, frogspawn, hundreds of eggs, caviar, more or fewer than eight eggs, stacked or merged eggs, egg string extending off frame, cracks, visible embryos, larvae, external gills, milk secretion, aggression, feeding, earthworm clitellum, scales, coarse broad rings, pointed tail, long tentacles, fantasy, CGI, illustration or painting.
```

### Call 07 · New generation · accepted frame 05

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Ringed Caecilian maternal-dermatophagy gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, original project asset.
Primary request: Create a calm, non-graphic natural-history reconstruction of one documented post-hatching maternal skin-feeding contact bout in Ringed Caecilian (Siphonops annulatus).
Mother: EXACTLY ONE complete attending adult in the opaque pale whitish-blue coloration documented after hatching. She has a smooth limbless cylindrical body, many narrow shallow pale annuli, a short blunt integrated head with tiny subtle eyes and one blunt unsegmented posterior shield without a distinct tail. Arrange her in one relaxed open coil with one outer flank exposed. Keep the maternal skin intact-looking, smooth, unbroken and free of loose flakes.
Hatchlings: EXACTLY FIVE complete separate gill-less, limbless, unpigmented ivory-to-pale-gray hatchlings, each much shorter and slimmer than the adult. Give each one a coherent miniature caecilian body, fine shallow annuli, blunt head and blunt posterior. Place all five along the same exposed maternal flank, with their five heads lightly touching the outer skin in a coordinated cluster while their complete bodies radiate outward and remain individually traceable. Do not resolve teeth at this scale. Prevent fusion, overlap, duplication or any sixth juvenile-like body.
Nest: One shallow humid root chamber with dark organic soil and fine roots. Include no eggs, shell fragments, fluid droplets or other animals.
Style/medium: Original photorealistic close natural-history reconstruction, restrained scientific-documentary and museum-publication tone, credible moist amphibian skin and soil. Show contact without torn tissue or feeding spectacle; no CGI or illustration look.
Composition: The adult open coil fills the central-right area. Keep exactly five complete hatchlings countable in the central safe zone, with each head-to-flank contact point and each separate body readable. Do not show the cloaca or crop any body.
Lighting: Soft diffuse chamber light, subdued pale blue, ivory and earth-brown palette.
Scientific boundary: The frame reconstructs a contact posture associated with documented maternal dermatophagy. A still cannot prove that each visible hatchling is ingesting skin, reveal juvenile teeth, measure nutritional content, frequency or duration, or extend this behavior to every female, brood or caecilian species. This frame does not depict cloacal fluid or the distinct milk-provisioning behavior reported in 2024.
Constraints: Exactly one adult and exactly five hatchlings; zero eggs; all six bodies separate, complete and coherent; maternal skin remains intact-looking; no blood, wound, loose skin flap, secretion, exposed cloaca, text, labels, logo, signature, border or watermark.
Avoid: gore, blood, torn flesh, missing skin, peeled strips, open wounds, parasites, leeches, suckers, cannibalism, attack, screaming, open jaws, visible teeth, detached body parts, fused hatchlings, more or fewer than five young, eggs, external gills, tadpoles, milk droplets, vent close-up, human handling, snake scales, earthworm clitellum, pointed tails, fantasy, CGI, illustration or painting.
```

### Call 08 · New generation · accepted frame 06

```text
Use case: conservation-documentary.
Asset type: Fauna Atlas Ringed Caecilian field-research gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, original project asset.
Primary request: Create a restrained conservation field photograph of exactly two researchers conducting an active soil search in a generalized shaded cabruca cacao agroforest in southern-Bahia style habitat. Show zero caecilians and zero other animals.
People and equipment: Exactly two adult field researchers in plain muted field clothing and gloves. One researcher kneels beside the base of a large shade tree and uses exactly one short narrow hand shovel to inspect one small already opened patch of moist humus beneath leaf litter. The second researcher crouches a few steps away and records observations in exactly one waterproof field notebook with one pen. Show no readable writing, agency badge or personal identity. Both people remain complete inside the frame with believable hands and practical postures.
Habitat: Mature native shade trees above a cacao understory, thick damp brown leaf litter, exposed fine roots and dark organic-rich soil. Limit disturbance to one small inspection patch. Include no nest, eggs, tunnel, specimen, trap, cage, vehicle or building.
Style/medium: Original photorealistic field-research documentary photography, practical environmental scale, restrained museum-publication treatment, natural hands and credible equipment, no staged hero pose and no CGI or illustration look.
Composition: The small soil inspection occupies the center-right. Both complete researchers remain inside frame, with tree trunks, canopy and cacao understory supplying environmental context. The single shovel must clearly read as a short field tool rather than a weapon. Keep notebook surface angled away so no marks are readable.
Lighting: Soft diffuse shade beneath a humid canopy, restrained greens and browns.
Scientific boundary: The image represents the active-search-by-digging context used in published fieldwork. It does not reproduce a named expedition or protocol, establish a detection or absence, quantify person-hours or abundance, identify a locality, person or institution, or prove that the excavation caused no disturbance.
Constraints: Exactly two people, exactly one shovel, exactly one notebook, exactly one pen and ZERO animals of any kind; no handling, capture, eggs, nest, specimen container, text, logo, signature, border or watermark.
Avoid: visible caecilian, snake, worm, insects, birds, mammals, any wildlife, animal handling, release ceremony, deep pit, excavator, destructive trench, trap array, bucket, pitfall trap, radio telemetry, antenna, GPS screen, ruler, calipers, sample jar, laboratory, cacao harvesting, weapons, disaster imagery, readable notes, branded clothes, extra people, malformed hands, fantasy, CGI, illustration or painting.
```

## Static validation

- Source and runtime directories contain the six accepted basenames only. Removing `-source` from each PNG basename produces its WebP basename.
- All twelve accepted files decode as 1536 × 1024, sRGB, opaque, single-frame images. Source files use 8-bit palette PNG; runtime files use lossy VP8 WebP.
- The twelve accepted files have twelve distinct SHA-256 hashes.
- Original-resolution review must preserve one complete animal in frames 01 through 03; one complete adult and exactly eight eggs in frame 04; one complete adult and exactly five complete hatchlings in frame 05; and exactly two people, one short shovel, one notebook, one pen and zero animals in frame 06.
- Frame 02 must keep the basename `02-annuli-and-blunt-head-profile`. Tests, alt text and captions must not claim that a separate tentacular aperture or nostril is visible.
- Review must reject any output that introduces limbs, scales, an earthworm clitellum, projecting tentacles, external gills, a pointed tail, mammary anatomy, blood, readable text, logo, signature, watermark or border.
- Static metadata tools and original-resolution image inspection provide the verification path. Repository policy excludes GUI and headless-browser verification.

## Accepted file hashes

| No. | Source PNG SHA-256                                                 | Runtime WebP SHA-256                                               |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 01  | `e2804727e24b9ddeb1a84b75b394ddafc73986888ec088d8952c4143b65f9640` | `5f292353194257a8cb5aa5ffa2266559e654b549c0c45ae7fdf2cf682eebb528` |
| 02  | `836f0a198f82b6d7d8de2cf7587b190976c4605eac4845701ce6bfe4ba171aa7` | `6c6329181038c367373838e6caf6502f592d93ab28003b5c7eb8fe88ac8971af` |
| 03  | `299942637bdc1739de5f06b45cb3f963a33b8e9c811ccd801e1bd2cceb16ca68` | `7e0fd57f050c93ac643c928b6fc160782a27b2f8578a6f1b3b2da0bfe3539877` |
| 04  | `321ab59594c969c450c1f8aa1bfb097cd0d2e5fe9d8bed3d1b321b6cb4f01ad0` | `ac990ef83fc2f7fa7f8f6b8ba3963372ece012f9b642db04df38691a6a2e57cf` |
| 05  | `5b8d693216d30e3a5969f70a3fec16aac3ca3f5441cb2f5e9dd0a886bfa194e5` | `131d4e75b25a8fb70713d000818e08a7e09e27c62d08456015a327a63f31829c` |
| 06  | `9728d883c823d5433b70a790ce52871019d6a3d4d8fc534e07530d700b345e57` | `f0e867781035f3d66307ed097762260aed63e103c023a2d66d61c85e9d7e5555` |
