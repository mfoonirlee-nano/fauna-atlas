# Portuguese Man o' War image set

Codex's built-in imagegen created these six original project images on 2026-08-29 for the Fauna Atlas Portuguese Man o' War profile. The set covers a surface-colony portrait, specialized zooids, a raised sailing crest, prey contact, an attached developing gonodendron and a stranded colony. Each frame is a natural-history reconstruction rather than a record of a named colony, exact site, measured specimen, reproductive event or stranding.

The production record contains eleven built-in imagegen calls: seven `photorealistic-natural` generations and four `precise-object-edit` passes. Frame 01 uses the second of two generation calls because the first call returned no usable output artifact. Frames 02, 03 and 06 use their first available generations. Frame 04 uses one accepted edit of its base generation. Frame 05 uses its first edit; two later connection experiments were rejected and did not replace the accepted source.

- Species: Portuguese Man o' War, *Physalia physalis*
- Product Chinese name: 僧帽水母
- Search aliases: Atlantic Portuguese Man o' War, Portuguese Man-of-War
- Taxonomic scope: *Physalia physalis* sensu stricto under the 2025 genomic revision, anchored to the Atlantic lineage
- Generation tool: Codex built-in imagegen
- Generation calls: seven `photorealistic-natural` calls and four `precise-object-edit` calls
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/portuguese-man-of-war/*.webp`
- Source format: opaque single-frame sRGB PNG, 1536 × 1024
- Source compression: TinyPNG returned HTTP 429 without rewriting the six sources on 2026-08-29; local ImageMagick palette-quantized them to at most 256 colors with Riemersma dithering
- Runtime format: opaque single-frame sRGB WebP, 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Portuguese Man o' War profile research](../../../../../docs/research/portuguese-man-of-war-profile.md)

## Files and themes

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-atlantic-surface-colony-portrait-source.png` | `public/images/species/portuguese-man-of-war/01-atlantic-surface-colony-portrait.webp` | One colony at the air-sea interface, placed on the right with broad ocean-and-sky copy space on the left |
| 02 | `02-specialized-zooids-under-float-source.png` | `public/images/species/portuguese-man-of-war/02-specialized-zooids-under-float.webp` | One float underside with an elongated feeding zooid, a separate tentacle-bearing zooid and an attached branching structure |
| 03 | `03-raised-crest-wind-drift-source.png` | `public/images/species/portuguese-man-of-war/03-raised-crest-wind-drift.webp` | One high wrinkled crest above wind-rippled water, reddish zooids below and multiple unequal tentacles |
| 04 | `04-unequal-tentacles-prey-contact-source.png` | `public/images/species/portuguese-man-of-war/04-unequal-tentacles-prey-contact.webp` | One intact fish larva at one localized contact point with a slender tentacle, while other unequal tentacles remain separate |
| 05 | `05-attached-developing-gonodendron-source.png` | `public/images/species/portuguese-man-of-war/05-attached-developing-gonodendron.webp` | One connected branching structure with oval buds remaining attached beneath a single float |
| 06 | `06-stranded-colony-no-contact-source.png` | `public/images/species/portuguese-man-of-war/06-stranded-colony-no-contact.webp` | One partly deflated colony on wet sand with multiple unequal tentacles and no human or animal contact |

## Scientific and editorial boundaries

The 2025 genomic revision recognizes several *Physalia* species. This set targets *P. physalis* sensu stricto, an Atlantic lineage associated with reddish tissue and many tentacles of differing sizes. Those traits form a visual anchor rather than a single-image diagnosis. The images do not transfer the familiar Indo-Pacific single-main-tentacle bluebottle form to this profile, and they do not claim that color or tentacle count can replace locality, specimen examination or molecular evidence.

Adult frames show one continuous pink-blue to violet pneumatophore with a wrinkled carmine-magenta crest. All other zooids remain below the waterline and attach to the float's ventral side. Multiple principal tentacles differ in length and curvature. The generated structures cannot establish a measured tentacle count, full extension, nematocyst type or colony age.

Frames 01 and 03 place the colony at the air-sea interface. Frame 01 supplies cover copy space and shows a generalized Atlantic setting. Frame 03 shows a raised crest and a coherent asymmetric pose among wind ripples. Neither frame measures wind, current, drift angle, speed or handedness, and neither associates one handed form with a hemisphere.

Frame 02 reconstructs specialized zooids under one float. An elongated mouth-bearing feeding zooid remains separate from a tentacle-bearing zooid, and a compact branching structure sits behind them. Part of the branching attachment is occluded. The frame cannot independently prove each zooid's identity, function, sex, developmental stage or exact topological relationship.

Frame 04 shows one intact fish larva at a single contact point. The accepted edit removed a thick ringed rope appearance and an extra strand near the fish. Its final focal tentacle has a smoother surface, so the frame does not claim to show nematocyst batteries directly. The pixels do not demonstrate discharge, venom injection, paralysis, death, retrieval direction, prey identity or capture success.

Frame 05 shows a continuous branch and oval buds attached beneath the float. A neighboring gastrozooid does not resolve as an independent diagnostic silhouette, so the image remains an attached developmental-state reconstruction rather than an anatomical plate. It does not assign sex or maturity and does not depict gonodendron release, free gametes, spawning, fertilization, eggs, embryos, planulae or a known development depth.

Frame 06 shows a generalized Atlantic strand line without contact. The image does not establish whether the colony is alive or dead, how long it has been ashore, whether nematocysts remain active or whether the stranded morphology alone identifies the species. Safety copy may advise avoiding contact; the image does not visualize sting potency.

No frame establishes float length, complete tentacle length, abundance, exact locality, age, sex, reproductive timing, population trend or conservation outcome. The files contain no text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Production call record

Uncommitted intermediates remain outside this asset directory in the built-in generator store. The accepted workspace sources use only the outputs identified below.

| Call | Frame | Mode | Result | Generator output |
| --- | --- | --- | --- | --- |
| 1 | 01 | Generation | No usable artifact returned through the call wrapper | No output path available |
| 2 | 01 | Generation | Accepted | `/Users/chris.li/.codex/generated_images/01a04b13-3bcf-71f2-a19e-b68ee7e8568f/exec-9e60d16e-2fd5-4869-94b5-b8e52dc4a5ab.png` |
| 3 | 02 | Generation | Accepted | `/Users/chris.li/.codex/generated_images/01a04cbf-a98f-74d0-90da-21942f3a61b5/exec-1ec13fb4-9b18-439a-a96d-c094621890b4.png` |
| 4 | 03 | Generation | Accepted | `/Users/chris.li/.codex/generated_images/01a04cbf-a98f-74d0-90da-21942f3a61b5/exec-2ea2cff2-df82-43d9-aa87-523ba9e99aed.png` |
| 5 | 04 | Generation | Intermediate; focal tentacle resembled a thick ringed rope and an extra strand appeared near the fish | `/Users/chris.li/.codex/generated_images/01a04cbf-77b7-7330-9bfa-c600787822b2/exec-ae0f09e0-3317-42a9-8095-769161e7e21c.png` |
| 6 | 04 | Precise object edit | Accepted | `/Users/chris.li/.codex/generated_images/01a04cbf-77b7-7330-9bfa-c600787822b2/exec-4c0d0b9e-72c3-4bea-9f75-59efea6a58b6.png` |
| 7 | 05 | Generation | Intermediate; the branch appeared to grow directly from the float | `/Users/chris.li/.codex/generated_images/01a04cbf-77b7-7330-9bfa-c600787822b2/exec-6ddedd3d-f5cb-4ae9-95e8-070e6e12ba01.png` |
| 8 | 05 | Precise object edit | Accepted | `/Users/chris.li/.codex/generated_images/01a04cbf-77b7-7330-9bfa-c600787822b2/exec-a2945974-641e-405b-acc8-e96bff9715fe.png` |
| 9 | 05 | Precise object edit | Rejected; feeding zooid and gonodendron connected separately to the float | `/Users/chris.li/.codex/generated_images/01a04cbf-77b7-7330-9bfa-c600787822b2/exec-7994e42d-8fce-4c20-89cd-592dc24419e5.png` |
| 10 | 05 | Precise object edit | Rejected; linked structures detached from the parent colony | `/Users/chris.li/.codex/generated_images/01a04cbf-77b7-7330-9bfa-c600787822b2/exec-b6d70888-4f9d-4b82-b413-559055080089.png` |
| 11 | 06 | Generation | Accepted | `/Users/chris.li/.codex/generated_images/01a04b13-3bcf-71f2-a19e-b68ee7e8568f/exec-18c66e6a-8ad8-481d-a152-834c60e202e4.png` |

## Generation prompts

The blocks below preserve the actual accepted scene requests and edit scopes. Call 1 used the initial structured cover design but returned no usable image path; call 2 supplied the accepted frame and its production prompt appears here.

### 01 · Atlantic surface-colony portrait

~~~text
Photorealistic professional marine natural-history photograph, exact 1536 × 1024 horizontal 3:2, opaque sRGB. One living Atlantic Portuguese Man o' War, Physalia physalis sensu stricto under the post-2025 species concept, at the open North Atlantic air–sea interface. This is the reddish Atlantic form with multiple principal hunting tentacles of clearly unequal sizes, never the small Indo-Pacific single-main-tentacle bluebottle form.

Show exactly one integrated colonial animal and one continuous elongated triangular pneumatophore. Its thin wet membrane is translucent pink-blue to violet. A tall naturally wrinkled carmine-magenta crest extends along most of the upper surface and remains continuous with the float, not a separate sail. Keep the float above and on the waterline; all zooids hang below from its ventral surface. Below water show a compact reddish-brown/magenta cluster of elongated feeding zooids, branching colony tissue, and separate tentacle-bearing bases. Show at least four visually separate slender blue-violet principal tentacles with strongly unequal lengths: one or two descend farther in loose curves while the others stay shorter and sinuous.

Use realistic split-level water optics, calm ripples, pale sky, clear blue open water, fine suspended particles, and restrained museum-publication color. Place the complete colony in the right half, float center near x 70%, y 34%. Preserve broad clean ocean-and-sky negative space on the left for interface copy. Keep float, crest, zooid cluster, and every principal tentacle base inside frame; longest tentacles curve and fade within lower water rather than showing a measurable full length.

No named locality, coast, reef, seabed, boat, aquarium, human trace, text, label, arrow, scale bar, logo, signature, border, or watermark. No umbrella jellyfish bell, mushroom cap, head, eyes, separate body, second gas bladder, balloon cluster, solitary central tentacle, equal tentacle comb, octopus arms, suction cups, coral branches, blue-and-yellow zooid brush, bright green patch, fabric sail, mast, CGI, neon glow, or fantasy anatomy.
~~~

### 02 · Specialized zooids under the float

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Portuguese Man o' War colony-specialization gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original underwater macro natural-history photograph of specialized zooids attached beneath one Atlantic Portuguese Man o' War, Physalia physalis sensu stricto under the post-2025 species concept.
Scene/backdrop: Camera sits just below a calm North Atlantic surface. The lower edge of one single continuous translucent pink-blue pneumatophore crosses only the upper frame as anatomical context. Open deep-blue water fills the background.
Subject: Show one connected ventral portion of a juvenile or small colony whose organization remains readable. Center one tripartite zooid group while two neighboring attached groups recede out of focus.
Visible anatomy: The central group contains one elongated reddish-brown gastrozooid with a widened pale terminal mouth and no hunting tentacle; one separate blue-magenta tentacular palpon with no mouth, attached to the base of one slender violet tentacle; and one compact branching gonodendron growing at the gastrozooid base. Connect all three through short translucent peduncles to the same ventral colony tissue. Keep every zooid underwater. The float is one unbroken chamber, never a row of bubbles.
Style/medium: Photorealistic marine developmental-biology macro photography, shallow depth of field, living soft tissue and realistic seawater optics. Tissue colors remain natural, never diagrammatic color coding. No CGI or illustration look.
Composition/framing: Exact 1536 × 1024 horizontal 3:2. Crop the single float underside across the upper fifth. Place the central tripartite group near x=0.52, y=0.52 with every attachment point visible. Keep the gastrozooid mouth, mouthless tentacular palpon, tentacle base and attached gonodendron separate and unobstructed.
Lighting/mood: Diffuse surface daylight with restrained transmitted illumination, close scientific observation without laboratory staging.
Color palette: Translucent pink-blue float base, reddish-brown and magenta zooids, subdued violet tentacle and deep Atlantic blue water.
Materials/textures: Soft elongated polyps, clear peduncles, compact branching buds and one fine contractile tentacle.
Scientific boundary: Reconstruct organization described from live, fixed and tomographic specimens. Do not imply that visible color and shape alone establish function, sex, maturity or species identity.
Constraints: Exactly one integrated colony and one float underside; central gastrozooid without a tentacle; separate mouthless tentacular palpon bearing one tentacle; attached branching gonodendron; no labels or artificial color legend; no text, arrow, scale bar, logo, signature, border or watermark.
Avoid: three detached animals; sea-anemone crowns; tentacles surrounding the gastrozooid mouth; a mouth on the tentacular palpon; umbrella bells; adult jellyfish; loose reproductive sacs; eggs; sperm; embryos; cutaway anatomy; dissection tray; microscope slide; ruler; duplicate float; fused balloons; octopus arms; suckers; CGI.
~~~

### 03 · Raised crest and wind drift

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Portuguese Man o' War sailing and surface-drift gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one original surface-level natural-history photograph of an Atlantic Portuguese Man o' War, Physalia physalis sensu stricto under the post-2025 species concept, drifting under a moderate ocean breeze with its muscular crest raised.
Taxonomic anchor: Use the reddish Atlantic form with many principal hunting tentacles of differing sizes, not the small single-main-tentacle Indo-Pacific bluebottle form.
Scene/backdrop: Generic open North Atlantic surface with small aligned wind ripples and low rolling wavelets. No coast, vessel, buoy, seabird, storm, whiteout surf or identifiable location.
Subject: Exactly one coherent colony with exactly one elongated triangular translucent pink-blue to violet pneumatophore riding low in the water and one tall naturally wrinkled carmine-to-magenta crest erected above it. The crest is folded muscular tissue continuous with the float membrane, never cloth, a fin or a second bladder. Beneath the clear surface, show reddish-brown and magenta zooid tissue plus multiple unequal blue-violet principal tentacles creating restrained underwater drag. Clearly show more than two principal tentacles; one or two extend farther and the others remain shorter, sinuous or curled.
Handed form: Choose one left-right asymmetric form and keep its anatomy coherent. Curve the crest and offset the ventral zooid and tentacle attachment to one consistent side. Do not create a mirrored partner or a bilaterally doubled float.
Style/medium: Photorealistic ocean-surface wildlife photography from a low waterline camera, real membrane texture and wind-ruffled water, no illustration or CGI.
Composition/framing: Exact 1536 × 1024 horizontal 3:2. Place the complete float near the center-right with the crest silhouetted against distant water. Use a gentle oblique side view that reveals the asymmetric curvature and a glimpse of the submerged zooid mass. Leave clean open water around the colony. Keep the full pneumatophore and crest inside frame.
Lighting/mood: Natural late-morning daylight, moderate breeze, sober field observation rather than a storm scene.
Color palette: Muted Atlantic blue, translucent pink-violet float, carmine-magenta crest and reddish underside tissue.
Materials/textures: Wrinkled flexible crest, thin wet membrane, realistic meniscus, small wind ripples and soft submerged tentacles.
Scientific boundary: Surface ripples and asymmetry illustrate wind exposure. Do not claim wind direction, drift angle, speed, a handedness label or geographic distribution. Do not associate one handed form with a hemisphere.
Constraints: Exactly one colony and one float; raised tissue crest; coherent one-sided asymmetry; visible multiple unequal tentacles below water; no text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: fabric sail; mast; ship hull; dorsal fin; rigid plastic bladder; second float; mirrored pair; umbrella jellyfish; round mushroom bell; active swimming strokes; propulsion jets; foamy motor wake; speed lines; wind arrows; compass; map; a single central hunting tentacle; dozens of uniform spaghetti strands; thick octopus arms; suction cups; yellow-tipped blue zooid brush; bright green anterior patch; fantasy glow; CGI.
~~~

### 04 · Unequal tentacles and prey contact

The base generation established the colony context, unequal tentacles and one fish larva. Its focal tentacle and contact geometry needed one targeted correction before acceptance.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Portuguese Man o' War feeding gallery image 4 of 6, exact 1536 x 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original scientifically restrained underwater natural-history macro photograph showing one localized prey contact by an Atlantic Physalia physalis sensu stricto colony.
Scene/backdrop: Open North Atlantic blue water immediately below the air-sea surface, soft diffuse daylight, natural haze and sparse suspended particles.
Subject: The upper-right edge includes enough of exactly one colony to establish context: part of its blue-violet gas float at the sea surface and its attached reddish underside zooid mass. From separate tentacular-palpon bases hang multiple separate, slender, subtly flattened blue-to-violet principal hunting tentacles with clearly unequal lengths. One focal tentacle runs diagonally through the central safe area and touches exactly one intact small translucent fish larva at one localized point. The other tentacles remain visibly separate and secondary. Along the focal tentacle, show restrained spiral magenta nematocyst-battery tissue texture as biological surface detail.
Style/medium: Photorealistic professional underwater natural-history macro photography, restrained museum-publication quality, realistic soft tissue and seawater optics, no diagram or CGI look.
Composition/framing: Exact 1536 x 1024 horizontal 3:2. Colony context stays upper-right; focal tentacle and the one small larva remain sharp near center; generous open water keeps the contact readable; complete larva visible.
Lighting/mood: Soft daylight filtered through the surface, observational and unsensational.
Color palette: North Atlantic blue, translucent pearl larva, restrained blue-violet tentacles, reddish zooids and muted magenta battery texture.
Constraints: Exactly one Physalia colony context, exactly one intact small fish larva, multiple principal tentacles of unequal lengths from separate bases, exactly one localized contact point. A still frame proves contact only. It must not depict or imply nematocyst discharge, venom injection, paralysis, death, capture success, or a measured prey ratio. No needles, sparks, glow, wound, blood, gore, wrapping, constriction, engulfing, text, arrows, labels, logos, signatures, borders, or watermark. Opaque sRGB.
Avoid: single-main-tentacle bluebottle form; equal spaghetti strands; octopus arms; suckers; hooks; harpoons; giant fish; fish school; torn prey; dramatic attack; fantasy bioluminescence; neon CGI; aquarium; reef; diver.
~~~

#### Accepted precise-object-edit prompt

~~~text
Use case: precise-object-edit
Asset type: correction to Fauna Atlas Portuguese Man o' War prey-contact gallery image
Input images: Image 1 is the edit target.
Primary request: Change only the focal tentacle surface and its contact geometry with the fish larva. Make the focal tentacle a slender, softly flattened blue-violet living tentacle comparable in caliber to the other principal hunting tentacles, with small restrained magenta nematocyst-battery thickenings embedded intermittently in the tissue. Remove the thick candy-cane cord appearance, repeated external ring coils, bead chain, rope texture, and the extra thin strand descending from the fish contact point. The one focal tentacle should merely touch the intact larva at one small point along its rear flank without piercing, entering, wrapping, hooking, or emerging from the fish.
Constraints: Preserve the exact one colony in the upper-right, one fish larva, all other separated unequal tentacles, water surface, open-water background, lighting, color grade, camera framing, focal placement, dimensions, opaque sRGB, and photorealistic natural-history style. Keep the fish fully intact and free of wounds. The result proves contact only, not discharge, venom injection, paralysis, death, or capture. No text, arrows, logos, border, watermark, glow, needles, hooks, suckers, blood, or gore.
~~~

### 05 · Attached developing gonodendron

The base generation established the branch, buds and float context. One targeted edit addressed its upper attachment. Two later attempts tried to separate a neighboring gastrozooid more clearly, but each broke continuity elsewhere and was rejected.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Portuguese Man o' War developmental gallery image 5 of 6, exact 1536 x 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original scientifically restrained developmental-biology macro photograph of one attached, developing gonodendron beneath an Atlantic Physalia physalis sensu stricto float.
Scene/backdrop: Just below the North Atlantic air-sea surface in clear blue water, with a narrow portion of the ventral float base providing natural colony context.
Subject: One compact branching reddish-magenta developing gonodendron remains physically and visibly attached at the base of one neighboring reddish gastrozooid. Its short translucent branches carry many small coherent oval gonophore and accessory-zooid buds at different developmental stages, all connected to the same branching structure and fully underwater. Show the continuous attachment point near the upper center, the branch descending from it, and a readable hierarchy of main and secondary branches. Keep the gonodendron compact rather than flower-like.
Style/medium: Photorealistic professional underwater developmental-biology macro photography, restrained museum-publication quality, anatomically coherent gelatinous tissue, no illustration or CGI look.
Composition/framing: Exact 1536 x 1024 horizontal 3:2. Attachment point upper-center, branching structure extending downward through the central safe area. Keep the attachment, main branch, secondary branches, and several developmental buds sharp; use shallow depth of field only beyond those structures.
Lighting/mood: Soft transmitted surface daylight, calm clinical observation without specimen-dish staging.
Color palette: Restrained reddish-magenta and translucent rose tissue against muted North Atlantic blue.
Constraints: Exactly one colony context and one attached developing gonodendron. Preserve visible physical continuity between gonodendron, neighboring gastrozooid base, and ventral float region. Do not assign male or female sex. The image represents only an attached developmental state and cannot establish release timing, maturity, gamete type, or life-cycle sequence. No detached reproductive structure, free gametes, egg cloud, sperm cloud, fertilization, embryos, planula, spawning, second colony, medusa bell, petri dish, laboratory tools, labels, text, arrows, logos, signatures, borders, or watermark. Opaque sRGB.
Avoid: detached floating bouquet; grapes or flowers; coral polyp; jellyfish medusa; egg sacs; visible sperm; giant eggs; spawning plume; microscopic diagram; aquarium; CGI; neon glow.
~~~

#### Accepted precise-object-edit prompt

~~~text
Use case: precise-object-edit
Asset type: correction to Fauna Atlas Portuguese Man o' War attached-gonodendron gallery image
Input images: Image 1 is the edit target.
Primary request: Change only the upper attachment anatomy. Add one anatomically coherent neighboring reddish gastrozooid beneath the narrow ventral float base, and make the existing compact branching gonodendron arise visibly from the base of that gastrozooid through one continuous short tissue connection. The gonodendron must no longer appear to sprout directly from the float. Keep the gastrozooid secondary and partially visible, elongated soft feeding-zooid tissue rather than another branch, flower, medusa, or second gonodendron.
Constraints: Preserve the existing single float context, exact branching gonodendron, translucent oval buds at varied stages, main and secondary branch layout, downward composition, blue-water background, lighting, color grade, camera framing, shallow depth of field, dimensions, opaque sRGB, and photorealistic developmental-biology style. Keep every branch and bud connected. Do not assign sex. No detached structure, free gametes, egg or sperm cloud, fertilization, embryos, planula, spawning, second colony, umbrella bell, dish, tools, text, arrows, logo, border, or watermark.
~~~

### 06 · Stranded colony without contact

~~~text
Photorealistic coastal field-documentary natural-history photograph, exact 1536 × 1024 horizontal 3:2, opaque sRGB. Show exactly one recently stranded Atlantic Portuguese Man o' War, Physalia physalis sensu stricto under the post-2025 species concept, resting on smooth dark wet sand at a generic Atlantic strand line after a receding wave. No identifiable locality.

The one integrated colony has one partly deflated elongated triangular pneumatophore. Its thin wet membrane remains translucent pink-blue to violet; its crumpled wrinkled carmine-magenta crest is continuous with the same float. A compact reddish-brown and magenta zooid mass remains attached beneath it. Multiple clearly separate blue-violet principal hunting tentacles of unequal length trail across wet sand and shallow wash as thin flattened sinuous or curled strands, with one or two extending farther than the rest. This is the reddish Atlantic multiple-tentacle form, never the small Indo-Pacific single-main-tentacle bluebottle form.

Use a low three-quarter view. Keep the complete float and the anatomical origin of every visible tentacle inside frame. Let a few longer strands curve through the foreground. Surround with reflective charcoal wet sand, a thin sheet of gray-blue seawater, and sparse natural foam. Diffuse overcast coastal daylight, restrained color and tension, convincing wet gelatinous tissue and sand texture. The animal may be alive or dead; do not imply either.

No people, hands, feet, children, swimmers, dogs, tools, sticks, gloves, footprints, litter, structures, crowd, contact action, sting marks, wounds, blood, dead fish, warning signs, skull icons, text, labels, arrows, logo, signature, border, or watermark. No many-colony stranding, umbrella jellyfish bell, mushroom cap, eyes, face, second float, solitary main tentacle, equal tentacle comb, thick ropes, octopus arms, suction cups, plastic texture, CGI, neon glow, or fantasy anatomy.
~~~

## Static and visual validation

- Static inspection confirms six opaque single-frame sRGB PNG sources at 1536 × 1024, each palette-quantized to 246-252 colors.
- All six runtime assets decode as opaque 1536 × 1024 single-frame sRGB WebP files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- All twelve source and runtime files have distinct SHA-256 hashes.
- Original-resolution inspection covered colony count, cover copy space, one continuous float, crest continuity, ventral zooid placement, multiple unequal tentacles, localized prey contact, attached gonodendron continuity and no-contact stranding.
- Inspection found no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.
- Runtime WebP sizes are 79,648; 59,996; 125,950; 71,134; 79,182; and 156,928 bytes in frame order, totaling 572,838 bytes or 559.4 KB.
- The six palette-quantized PNG sources total 3,325,568 bytes or 3,247.6 KB. WebP conversion reduced the combined runtime payload by 82.8%.
- Runtime inspection found no new crop, subject, visible text, logo, watermark, border or material compression defect.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
