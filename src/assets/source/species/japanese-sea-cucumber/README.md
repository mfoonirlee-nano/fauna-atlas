# Japanese Sea Cucumber image set

Codex's built-in imagegen created these six original project images on 2026-08-29 for the Fauna Atlas Japanese Sea Cucumber profile. The set covers a red-form adult on rock, peltate-tentacle deposit feeding, ventral tube feet, summer sheltering, induced egg release and an auricularia larva. Every frame is a scientific reconstruction rather than a record of a named specimen, exact site, measured individual, temperature trial, spawning event or cultured larva.

The production record contains thirteen separate built-in imagegen calls: six `photorealistic-natural` generations and seven `precise-object-edit` passes. Frames 01, 04 and 06 use their first generations. Frame 02 uses its second oral-crown edit, frame 03 uses its second tube-foot edit, and frame 05 uses its third egg-stream edit. Seven superseded outputs remain in the generator run directory and are listed below with their rejection reasons.

- Species target: Japanese Sea Cucumber, *Apostichopus japonicus* sensu Woo et al. (2017)
- Product Chinese name: 仿刺参
- Visual scope: the red to dark red-brown form assigned to strict *A. japonicus* after the 2017 revision; green and black former “color types” are not used
- Generation tool: Codex built-in imagegen; no CLI image generator
- Generation calls: six separate `photorealistic-natural` calls and seven `precise-object-edit` calls
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/japanese-sea-cucumber/*.webp`
- Source format: opaque, single-frame, 8-bit palette sRGB PNG, 1536 × 1024
- Source compression: TinyPNG returned HTTP 429 without rewriting the six accepted files or the later frame-03 replacement; ImageMagick then palette-quantized each accepted source to at most 256 colors with Riemersma dithering
- Runtime format: opaque, single-frame, 8-bit sRGB WebP, 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`, invoked through the scoped repository script
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Japanese Sea Cucumber profile research](../../../../../docs/research/japanese-sea-cucumber-profile.md)

## Files and themes

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-rocky-reef-red-adult-portrait-source.png` | `public/images/species/japanese-sea-cucumber/01-rocky-reef-red-adult-portrait.webp` | Exactly one complete red to dark red-brown adult on cobbles, with broad blunt conical papillae and left-side copy space |
| 02 | `02-peltate-tentacle-sediment-feeding-source.png` | `public/images/species/japanese-sea-cucumber/02-peltate-tentacle-sediment-feeding.webp` | One mouth surrounded by one countable ring of exactly twenty short peltate tentacles; the lowest tentacles meet fine surface sediment |
| 03 | `03-ventral-tube-feet-locomotion-source.png` | `public/images/species/japanese-sea-cucumber/03-ventral-tube-feet-locomotion.webp` | Three parallel longitudinal ventral ambulacral bands of short podia contact one rock, separated from the conical dorsal papillae |
| 04 | `04-summer-aestivation-rock-shelter-source.png` | `public/images/species/japanese-sea-cucumber/04-summer-aestivation-rock-shelter.webp` | One contracted red-form animal sheltered against the shaded underside of a boulder, with oral tentacles not extended |
| 05 | `05-upright-egg-release-reconstruction-source.png` | `public/images/species/japanese-sea-cucumber/05-upright-egg-release-reconstruction.webp` | One animal anchors its lower body in a controlled tank and raises the anterior end; a narrow particle stream begins at one anterior dorsal body-wall point behind and separate from the oral crown |
| 06 | `06-auricularia-larva-microscopy-source.png` | `public/images/species/japanese-sea-cucumber/06-auricularia-larva-microscopy.webp` | One transparent auricularia-style larva with a continuous peripheral ciliary band and curved digestive tract in a microscopy field |

## Scientific and editorial boundaries

Woo et al. (2017) separated the former red, green and black *A. japonicus* color forms and retained the red form as strict *A. japonicus*; the green and black forms belong to *A. armatus*. Every adult frame therefore uses a red to dark red-brown body. Red color, body shape, papillae, tube feet and habitat do not diagnose the species by themselves. The smooth-edged reduced tables reported from strict *A. japonicus* are microscopic ossicles and cannot be established from these pixels. Source: [Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7).

Frame 02 reconstructs the twenty peltate oral tentacles as a fully readable crown. That controlled count supports anatomy, not a claim that a field photograph would expose every tentacle at once. The sediment-contact behavior is based on work published before the taxonomic revision and is used only as a historical broad-*A. japonicus* or genus-level feeding mechanism. The still cannot prove the sequence of tentacle movements, food composition, ingestion, rate or strict-species identity. Source: [Sun et al. 2015](https://doi.org/10.1016/j.physbeh.2014.11.051).

Frame 03 exposes the flattened ventral trivium as three parallel longitudinal ambulacral bands. The image distinguishes small terminal-disc podia from broader dorsal papillae, but it does not map a voucher specimen, preserve an exact individual count, show hydraulic operation, measure adhesion or establish locomotion speed.

Frame 04 shows a contracted, sheltered red-form individual with no extended feeding crown. Choe and Ohshima directly support warm-season aestivation in the red form. Yamana et al. tracked pre-revision broad-*A. japonicus* to spaces beneath rock tracts and boulders, so that paper supports the shelter setting but not strict post-2017 species identity. A single sheltered posture cannot demonstrate fasting, gut regression, metabolic depression, a temperature threshold, duration or survival. The image does not depict sleep, a cocoon, burial or a self-dug tunnel. Sources: [Choe and Ohshima 1961](https://doi.org/10.2331/suisan.27.97) and [Yamana et al. 2008](https://doi.org/10.3800/pbr.3.235).

Frame 05 reconstructs the anterior-raised posture recorded after induced spawning. The accepted edit keeps the compact oral crown particle-free and begins one discrete pale-amber stream at a separate anterior dorsal body-wall point. Its visible spacing was chosen to prevent the false reading that gametes leave through the mouth; it is not a specimen-level map of gonopore distance. Pixels cannot establish sex, prove that the particles are eggs, verify a gonopore, count output, document fertilization, transfer induced behavior to wild synchrony or assign an exact timing. Source: [Fujiwara et al. 2010](https://doi.org/10.1007/s12562-010-0262-2).

Frame 06 follows a red-form culture sequence that included auricularia larvae. One transparent larval outline, a continuous ciliary band and a curved gut are visible, but morphology alone cannot confirm species, lineage, exact stage, age, viability, rearing day or wild origin. The reconstruction is not a miniature adult, fish larva, shelled larva or fixed developmental clock. Source: [Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x).

No frame establishes body length, body mass, age, sex, density, exact depth, water temperature, locality, collection identity or conservation status. No file contains visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Call ledger

Calls 01–06 were six distinct built-in imagegen requests submitted in one concurrent batch. Calls 07–09 and 10–11 were also concurrent batches, but every listed asset came from its own imagegen call. Original-resolution inspection, not completion order, established the content of each artifact.

| Call | Type and target | Generator output | Decision |
| --- | --- | --- | --- |
| 01 | `photorealistic-natural`, frame 01 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-3f5a66f9-2df2-4406-ae96-7a3b0882a7a7.png` | Accepted: one complete red adult, rocky substrate, broad papillae and copy space |
| 02 | `photorealistic-natural`, frame 02 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-f3432d71-de76-4171-9e85-362391fd9dc0.png` | Rejected: the mouth carried an overnumerous multi-ring paddle crown instead of one countable ring of twenty |
| 03 | `photorealistic-natural`, frame 03 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-d3f659bd-51c6-4d28-a3b3-4aac5f7dff15.png` | Rejected: the tube feet formed one dense, poorly partitioned field |
| 04 | `photorealistic-natural`, frame 04 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-0a040223-fb9d-4c43-828f-1fa26fcd6983.png` | Accepted: one contracted red-form animal under a boulder overhang, with no exposed feeding crown |
| 05 | `photorealistic-natural`, frame 05 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-15b5a2ad-ebf7-435c-aa9d-feae4746a8a6.png` | Rejected: particles appeared to emerge from the oral crown |
| 06 | `photorealistic-natural`, frame 06 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-ad3c0589-a965-4b75-869a-6d8cc63ce1fd.png` | Accepted: one transparent auricularia-style larva, continuous ciliary band and curved gut |
| 07 | `precise-object-edit`, frame 02 pass 1 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-8376c375-4c39-4de8-a1c9-4ced8e960b68.png` | Rejected: a reduced outer crown still surrounded a second inner finger-like frill |
| 08 | `precise-object-edit`, frame 03 pass 1 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-a4f3ab99-2d19-4dd8-8d3b-9f32ec97916a.png` | Rejected after runtime review: three foot islands were arranged sequentially along the body axis instead of three parallel longitudinal bands |
| 09 | `precise-object-edit`, frame 05 pass 1 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-3b2eabe6-d6b3-4a5b-8059-9d61f730ff28.png` | Rejected: the particle origin remained attached to the mouth end |
| 10 | `precise-object-edit`, frame 02 pass 2 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-20338790-3271-4361-9bcd-9546e4208b9f.png` | Accepted: one mouth, plain intervening oral tissue and one ring of twenty countable peltate tentacles |
| 11 | `precise-object-edit`, frame 05 pass 2 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-4f406b79-79ce-4e16-b63b-7d75e780d69f.png` | Rejected: the stream still read as mouth-centered without a clear particle-free separation |
| 12 | `precise-object-edit`, frame 05 pass 3 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-009cb11b-bb80-4dae-9430-9dcba42148b5.png` | Accepted: the stream begins on the anterior dorsal silhouette behind the particle-free oral crown |
| 13 | `precise-object-edit`, frame 03 pass 2 | `/Users/chris.li/.codex/generated_images/01a04db4-1094-7951-9560-7b713ece01f4/exec-147e88f7-31d5-406e-a8e5-6cf0a57a1289.png` | Accepted: three pale foot bands run parallel to the horizontal body axis and are separated by two bare red strips |

## Prompts

The following text records every prompt exactly as submitted. Edit calls also identify their input artifact in the call ledger.

### Call 01 — adult portrait

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Japanese Sea Cucumber species-detail cover, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original photorealistic underwater natural-history portrait of exactly one living Apostichopus japonicus sensu Woo et al. 2017, the strict red-form species, on a shallow temperate Northwest Pacific rocky seabed.
Scene/backdrop: Natural cobbles, coarse gravel, a little shell grit and restrained brown-green epilithic algae in clear cool coastal water. No identifiable locality.
Subject: One complete stout elongated sea cucumber, red to dark reddish-brown over the whole body, with a slightly flattened ventral side in firm contact with the substrate. The dorsal and lateral surfaces carry irregular rows of broad conical papillae with blunt tips, not long spines. A few short ventral tube feet may be visible at the lower edge. The anterior and posterior remain coherent and naturally tapered; oral tentacles stay mostly retracted.
Style/medium: Photorealistic professional marine natural-history photography, realistic wet leathery skin and underwater color loss.
Composition/framing: Wide low three-quarter view; complete animal across the right half, calm rocky-water negative space on the left for interface copy; full body inside frame.
Lighting/mood: Restrained diffuse shallow-water daylight, natural suspended particles, no fantasy glow.
Scientific boundary: This is a red-form field reconstruction, not a voucher specimen. External color cannot distinguish the species from every congener; microscopic ossicles are not visible.
Constraints: exactly one coherent sea cucumber; strict red to dark red-brown body; exact 1536 × 1024; horizontal; opaque sRGB; no text, labels, arrows, ruler, logo, signature, border or watermark; no people.
Avoid: green or black body, olive farmed Chinese form, tropical yellow sea cucumber, long needle spines, repeated decorative spikes, eyes, face, teeth, fins, shell, branching tentacles along the body, evisceration, exposed organs, CGI, illustration, aquarium staging.
~~~

### Call 02 — sediment-feeding base

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Japanese Sea Cucumber oral-tentacle feeding gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original underwater macro natural-history photograph of the anterior end of one strict red-form Apostichopus japonicus collecting a thin film of surface sediment with its oral tentacles.
Scene/backdrop: Temperate shallow-water cobble edge with fine sand, silt and sparse natural detritus over rock; no large food chunks.
Subject/action: One red to dark reddish-brown sea cucumber keeps its flattened ventral side on the bottom. Show one central anterior mouth surrounded by one anatomically coherent crown of exactly twenty short broad peltate shield-shaped oral tentacles. The complete crown is visible from a high frontal-oblique view so the twenty tentacles can be counted. Two or three tentacles touch the fine sediment film while several curve toward the mouth in a plausible sequential feeding posture; the remaining tentacles form the same compact crown. Show a few ordinary ventral tube feet anchoring the body behind the crown. Tentacles are modified podia with blunt shieldlike ends, never feathery or branching.
Style/medium: Photorealistic underwater macro documentary photography, real wet tissue texture, no diagram aesthetics.
Composition/framing: Anterior crown fills the central foreground; enough body and substrate remain visible to make orientation clear.
Lighting/mood: Soft diffuse underwater macro light, restrained color and shallow depth of field while every tentacle remains readable.
Scientific boundary: A still frame cannot establish feeding sequence, diet composition, rate or species identity.
Constraints: one animal, one mouth, exactly twenty coherent peltate oral tentacles in one crown; red-form body; exact 1536 × 1024; horizontal; opaque sRGB; no text, numbers, labels, arrows, scale bar, logo, border or watermark.
Avoid: feathery filter-feeding fan, sea-anemone tentacles, dendritic branches, octopus suckers, teeth, eyes, face, giant pebbles entering the mouth, floating filter feeding, tentacles emerging from the sides, duplicate mouth, green or black animal, CGI, illustration.
~~~

### Call 03 — ventral tube-feet base

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Japanese Sea Cucumber ventral tube-feet gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original low-angle underwater natural-history close-up showing how one strict red-form Apostichopus japonicus contacts a rock using its ventral tube feet.
Scene/backdrop: A gently sloped wet cobble in clear temperate coastal water, with a little sand and restrained biofilm.
Subject/action: One red to dark reddish-brown sea cucumber moves slowly over the cobble. The camera looks from low front-side beneath the raised near edge, clearly exposing the slightly flattened ventral trivium. Show three longitudinal ventral ambulacral zones populated by many short independent cylindrical tube feet; their small terminal discs make direct contact with the rock. Keep the upper dorsal and lateral broad conical papillae visibly different from the ventral tube feet. The animal remains one continuous intact body with natural weight and contact shadow.
Style/medium: Photorealistic marine macro photography, anatomically grounded, realistic leathery skin and soft tube-foot tissue.
Composition/framing: The ventral contact zone spans the center; enough dorsal body stays visible to contrast papillae and tube feet.
Lighting/mood: Directional but natural shallow-water light grazing the rock surface, no internal glow.
Scientific boundary: The image illustrates contact anatomy but cannot measure adhesion, hydraulic action, row variation, count or speed.
Constraints: exactly one animal; strict red body; three readable ventral ambulacral zones; many short tube feet with terminal discs touching substrate; exact 1536 × 1024; horizontal; opaque sRGB; no text, labels, arrows, ruler, logo, border or watermark.
Avoid: insect or centipede legs, octopus arms, large suction cups, long stringy tentacles, a dense uniform fringe around the whole body, identical tube feet covering the dorsal surface, floating animal, cutaway anatomy, green or black animal, CGI, illustration.
~~~

### Call 04 — summer sheltering base

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Japanese Sea Cucumber summer-aestivation gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original underwater field-documentary reconstruction of one strict red-form Apostichopus japonicus sheltered during the warm summer season beneath a natural boulder overhang.
Scene/backdrop: Shallow temperate coastal rock tract. The shaded undersurface of a large boulder forms a narrow dark refuge above cobbles and shell fragments; brighter warm-season water and soft sunlight remain outside the shelter.
Subject/state: One complete red to dark reddish-brown sea cucumber is contracted and tucked snugly against the shaded underside/inner edge of the rock refuge. Its oral tentacles are fully retracted, its body is intact and moist, and the ventral surface maintains ordinary contact with rock. It looks quiescent, not dead. No fresh feeding trail or fecal pellets.
Style/medium: Photorealistic natural-history field photography, restrained documentary realism.
Composition/framing: Wide environmental view with the sheltered animal readable inside the boulder shadow and the open seabed establishing context.
Lighting/mood: Cool dim reflected light in the refuge, natural brighter water beyond, no theatrical spotlight.
Scientific boundary: Shelter occupancy alone cannot prove aestivation, fasting, metabolic depression, temperature threshold, gut changes or duration.
Constraints: exactly one strict red-form sea cucumber; natural rock-underside or narrow boulder refuge; retracted mouth tentacles; exact 1536 × 1024; horizontal; opaque sRGB; no text, labels, thermometer, arrows, logo, border or watermark.
Avoid: burial deep in mud, a self-dug tunnel, cocoon, eyelids or sleeping face, snow or winter imagery, dried or decomposing corpse, exposed organs, temperature graphics, green or black animal, people, CGI, illustration.
~~~

### Call 05 — induced egg-release base

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Japanese Sea Cucumber spawning-behavior gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original scientifically cautious hatchery natural-history reconstruction of one strict red-form Apostichopus japonicus in the upright egg-release posture recorded after induced spawning.
Scene/backdrop: Simple clean seawater hatchery tank with a plain muted blue-gray wall and floor, no equipment clutter, hands, needles or labels. The water surface is visible near the top.
Subject/action: Exactly one red to dark reddish-brown mature sea cucumber has its posterior and ventral tube feet anchored to the tank floor near the wall. The anterior third rises toward the water surface and bends gently as if head-waving. At the extreme front, show the mouth and its compact retracted-to-partly-open peltate tentacle crown. Immediately behind that crown on the dorsal anterior body, show one separate small genital-pore location emitting one narrow stream of tiny discrete translucent pale-amber spherical egg-like particles into the water. The stream originates only from this one dorsal anterior point, never from the mouth, anus or multiple body pores.
Style/medium: Photorealistic controlled marine-reproduction documentary reconstruction, realistic water and skin, no diagram styling.
Composition/framing: Full animal visible in side three-quarter view, upright anterior centered, origin of the restrained egg stream clearly separated from the mouth.
Lighting/mood: Neutral hatchery daylight, calm scientific documentation.
Scientific boundary: Pixels cannot confirm sex, gamete identity, gonopore identity, fertilization, fecundity, induction response or wild synchronous spawning.
Constraints: exactly one animal; strict red form; posterior anchored; anterior third raised; one narrow discrete egg-particle stream from one dorsal anterior point behind the tentacle crown; exact 1536 × 1024; horizontal; opaque sRGB; no text, labels, arrows, scale, logo, border or watermark.
Avoid: plume from mouth, plume from posterior anus, whole-body spawning, multiple pores, milky sperm cloud, explosive fountain, two animals touching or mating, wild mass-spawning reef, visible injection, human, green or black animal, CGI, illustration.
~~~

### Call 06 — auricularia base

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Japanese Sea Cucumber auricularia-larva gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original high-resolution light-microscopy-style natural-history image of exactly one transparent auricularia larva from a cultured strict red-form Apostichopus japonicus life-history series.
Scene/backdrop: Dark neutral blue-gray microscopy field with faint natural particulate specks and subtle optical depth, no slide labels or instrument border.
Subject: One coherent soft-bodied bilateral auricularia larva, transparent and elongated with a gently sinuous outline. A single continuous convoluted ciliary band follows characteristic looping paths near the body perimeter. Show a simple complete curved digestive tract within the transparent body and restrained internal tissue, without invented organs. The larva has no shell, arms, adult papillae, adult tube feet, eyes or fins.
Style/medium: Photorealistic transmitted-light micrograph aesthetic with fine translucent tissue, authentic soft focus at depth and crisp main plane; not a diagram or fantasy creature.
Composition/framing: One larva centered diagonally with generous dark microscopy field around it; entire outline inside frame.
Lighting/mood: Soft transmitted illumination, translucent cream-gray tissue, restrained contrast, no fluorescence.
Scientific boundary: Morphology alone cannot confirm species, red-form lineage, exact stage, age, wild origin or viability.
Constraints: exactly one larva; one continuous ciliary band; one curved gut; exact 1536 × 1024; horizontal; opaque sRGB; no text, numbers, labels, arrows, scale bar, logo, border or watermark.
Avoid: miniature adult sea cucumber, five starfish arms, fish larva, shell, segmentation, eyes, fins, tentacles, multiple developmental stages, embryo collage, fluorescent colors, CGI, illustration.
~~~

### Call 07 — oral-crown edit 1

~~~text
Use case: precise-object-edit.
Input Image 1 is the generated sediment-feeding reconstruction. Correct only the oral tentacle crown. Replace the current overnumerous, multi-ring oval paddles with exactly one coherent crown of exactly twenty short, broad, peltate shield-shaped oral tentacles surrounding the same single mouth. Exactly 20 tentacles total must be visible and countable, arranged as one natural crown rather than concentric rows; two or three lower tentacles may contact and gather fine surface sediment while the others curve naturally around the mouth. Preserve the entire red-to-dark-red-brown body, broad conical dorsal papillae, cobble and sand substrate, camera angle, crop, lighting, photographic underwater style, and all other pixels as closely as possible. Do not add eyes, a face, teeth, branching feather tentacles, suction cups, another mouth, extra animals, text, labels, borders, or watermarks. Opaque sRGB PNG, 1536×1024 landscape.
~~~

### Call 08 — tube-foot edit 1

~~~text
Use case: precise-object-edit.
Input Image 1 is the generated ventral locomotion reconstruction. Correct only the arrangement and scale of the visible ventral tube feet. Replace the current dense uniform carpet of large pods with three clearly separated longitudinal ambulacral zones running along the flattened ventral underside, with narrow bands of bare red skin visibly separating the three zones. Each zone should contain many short, small cylindrical podia with tiny terminal discs touching the rock; the feet must read as tube feet, not octopus suckers or legs. Preserve the red-to-dark-red-brown body, the broad conical papillae on the dorsal and lateral surface, rock substrate, camera angle, crop, lighting, photographic underwater style, and all other pixels as closely as possible. Do not create a whole-body fringe, oversized suction cups, insect legs, eyes, a face, extra animals, text, labels, borders, or watermarks. Opaque sRGB PNG, 1536×1024 landscape.
~~~

### Call 09 — egg-stream edit 1

~~~text
Use case: precise-object-edit.
Input Image 1 is the generated controlled-tank egg-release reconstruction. Correct only the origin of the egg particles and the adjacent mouth region. Remove every particle that appears to emerge from the mouth or oral tentacle crown. Keep a compact oral tentacle crown at the extreme raised tip. Add one separate, subtle genital-pore point on the dorsal anterior body immediately posterior to the oral crown; a single narrow stream of discrete pale amber spherical eggs must begin at that one dorsal point and disperse upward into the water. Preserve the upright raised-anterior spawning posture, one red-to-dark-red-brown animal, lower body anchored on the rock, tank setting, body texture, camera angle, crop, lighting, photographic reconstruction style, and all other pixels as closely as possible. Do not add multiple pores, particles from the mouth, particles from the posterior end, a milky cloud, mating contact, another animal, eyes, text, labels, borders, or watermarks. Opaque sRGB PNG, 1536×1024 landscape.
~~~

### Call 10 — oral-crown edit 2

~~~text
Use case: precise-object-edit.
Input Image 1 is a front-view sediment-feeding sea cucumber reconstruction. Replace only the complete circular oral apparatus inside the front rim. Create one—and only one—single ring of exactly twenty individually separated, short peltate oral tentacles around one small dark central mouth. Make all 20 tentacles equally legible and countable: ten around the upper semicircle and ten around the lower semicircle, each with a short stalk and one broad shield-shaped tip. Remove the entire inner ring of small finger-like structures; the space between the 20 shields and the mouth must be plain soft oral tissue, with no second ring, no oral frill, and no extra papillae. Let only the two lowest shield tips touch fine sediment. Preserve the outer red body, dorsal conical papillae, substrate, camera, framing, lighting, underwater photographic style, and all pixels outside the oral apparatus as closely as possible. No eyes, face, teeth, branching feather forms, suction-cup look, duplicated mouth, extra animals, text, labels, borders, or watermark. Opaque sRGB PNG, 1536×1024 landscape.
~~~

### Call 11 — egg-stream edit 2

~~~text
Use case: precise-object-edit.
Input Image 1 is an upright egg-release reconstruction. Relocate only the origin of the pale amber egg stream. The compact oral tentacle crown remains at the extreme tip and must be completely particle-free. Place one small, subtle genital pore on the upper dorsal side of the raised anterior body, approximately one full tentacle-crown width posterior/down-body from the mouth tip. Begin the single narrow egg stream at that pore, leaving a clearly visible clean gap between the pore and the oral crown; curve the stream upward through the water from this separate dorsal origin. Remove all particles along the current mouth-centered origin. Preserve the posture, entire animal, lower attachment, tank, camera, crop, lighting, and all other pixels as closely as possible. Do not add an eye-like spot, extra pore, mouth plume, rear plume, milky cloud, mating partner, text, label, border, or watermark. Opaque sRGB PNG, 1536×1024 landscape.
~~~

### Call 12 — egg-stream edit 3

~~~text
Use case: precise-object-edit.
Input Image 1 is an upright egg-release reconstruction. Erase the entire existing egg stream above the oral crown. Keep the compact oral tentacle crown at the forward tip completely clean and particle-free. On the upper-left dorsal silhouette of the raised anterior body, about 70 image pixels left and 25 image pixels down from the center of the oral crown, create one subtle genital pore as a small soft slit in the body wall. A narrow stream of discrete pale amber spherical eggs must visibly begin at that body-wall slit, first exit laterally upward-left for a short distance, then curve vertically toward the surface. The first egg must touch the pore; there must be a clearly visible particle-free gap between this new stream origin and the oral crown. This separate dorsal origin is the only anatomical change. Preserve the entire red animal, upright posture, crown shape, tank, rock attachment, camera, crop, lighting, and all other pixels as closely as possible. No eye-like pore, no mouth release, no rear release, no second pore, no milky cloud, no extra animal, no text, labels, border, or watermark. Opaque sRGB PNG, 1536×1024 landscape.
~~~

### Call 13 — tube-foot edit 2

~~~text
Use case: precise-object-edit.
Input Image 1 is the ventral tube-feet locomotion reconstruction. Correct only the visible pale tube-foot field. The animal's long body axis runs horizontally from the left edge to the right edge. Remove the current three separate left, center, and right islands of tube feet. Replace them with three parallel, continuous longitudinal ambulacral bands that each run horizontally along nearly the full visible underside from left to right. Stack the three bands vertically across the narrow flattened ventral surface—upper, middle, and lower—so two narrow horizontal strips of bare red skin separate them. Populate each band with many short, small cylindrical podia and tiny terminal discs contacting the rock. The three bands must be parallel to the body axis, not three clusters arranged sequentially along it. Preserve the red body, dorsal and lateral conical papillae, rock, camera, framing, lighting, and all pixels outside the ventral foot field as closely as possible. No whole-body fringe, oversized octopus suckers, insect legs, eyes, face, extra animal, text, labels, border, or watermark. Opaque sRGB PNG, 1536×1024 landscape.
~~~

## Compression and runtime conversion

The six accepted uncompressed generator artifacts totaled 15,557,429 bytes, counting the final frame-03 replacement. The first scoped command attempted all six accepted files:

~~~sh
npm run compress -- src/assets/source/species/japanese-sea-cucumber/*-source.png
~~~

TinyPNG returned `HTTP 429/TooManyRequests` for every file and reported a zero-byte processed total. After frame 03 was replaced during runtime visual review, the same scoped command was attempted for that one replacement and returned the same HTTP 429 response. Neither attempt rewrote the target. The accepted PNGs were then quantized locally:

~~~sh
magick mogrify -dither Riemersma -colors 256 src/assets/source/species/japanese-sea-cucumber/*-source.png
~~~

The final frame-03 replacement received the same one-file quantization after its failed TinyPNG retry. Runtime files came from the exact quantized sources:

~~~sh
npm run convert:webp -- src/assets/source/species/japanese-sea-cucumber/*-source.png
~~~

The repository script invokes `cwebp -q 82 -m 6 -mt`. Quantization reduced the six sources to 4,638,899 bytes. The six runtime WebPs total 1,223,820 bytes.

## Final file checks

| Frame | Source bytes | Source colors | Source SHA-256 | Runtime bytes | Runtime SHA-256 |
| --- | ---: | ---: | --- | ---: | --- |
| 01 | 914,831 | 255 | `77eed46f6814461f7d92ab73b409c41be4e6b6f8e44f53d1897c3cd8fa70e8c5` | 282,408 | `266406f9cadae31a69815e5018c071543e09467f3cd165ed71aba33a4e34165e` |
| 02 | 1,029,116 | 253 | `9fa93cb1fe3b06ec009c0e2ac4e419f048214b7e548df3ba4b2cce6a32bcd74b` | 302,616 | `9efd8f0fd6c9f46269a0ebf92ec18d33f073f19b316ecc87c93ab806b50b456c` |
| 03 | 814,914 | 254 | `13399c4dbab59c2916b50ded7b2276cdcd0eb5ac68af8f870e7139d14a7c47fd` | 271,426 | `aff22bec3b66eb61f2d6dfc91e0801dc7b84c3678404d3688a7a0f19fd3b09ad` |
| 04 | 853,127 | 251 | `aaa984de9d658f0c90e9995c9e05168d04ee379eaffd6990f3e9eaafb76a96ad` | 229,866 | `b434cf79f87ce05f1e2c808d84298822123ddf15af3f64ce1f1600cb475bd022` |
| 05 | 476,452 | 240 | `ce8e4ddbe11c660adbf153453afdb432447b00a5ae560cc32fda8af524e404be` | 63,410 | `10a624bb1264016f68c56f75b6bd2a9d3e1a22b80637be5b34ced796ce7a3eba` |
| 06 | 550,459 | 247 | `0a3d2080e76824812fd74451b55461e4a1398207b7152418997cfb97f0a9b14f` | 74,094 | `dee8c1a603f9ee50088945abc8b52c186ba5a963a50e1e574ec960536dbf8bcf` |

- ImageMagick decoded all twelve files as 1536 × 1024, opaque, single-frame, 8-bit sRGB images. Sources are palette PNGs with 240–255 colors; runtimes decode as TrueColor WebP.
- `webpinfo` decoded every runtime file successfully. Direct ImageMagick decode-to-null also passed for all twelve files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Built-in `view_image` original-resolution inspection covered every generator candidate and all six final runtime files. The accepted set retains the red form, exactly twenty oral tentacles, three parallel ventral bands, retracted tentacles during sheltering, a dorsal-anterior particle origin separate from the mouth and one auricularia-style larva.
- Post-conversion inspection found no new crop, duplicate subject, visible text, logo, watermark, border or material compression artifact.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
