# Giant Clam image set

Codex's built-in imagegen created these six original project images on 2026-08-29 for the Fauna Atlas Giant Clam profile. The set covers an adult reef portrait, shell identification, mantle and siphonal openings, daylight mantle display, broadcast spawning and juvenile byssal attachment. Each image represents a natural-history reconstruction rather than a record of a named animal, exact site, measured specimen or observed event.

The production record contains six base generations and two precise-object edits. Frames 01, 03, 04 and 05 use their base generations. Frames 02 and 06 use one accepted edit each; their first outputs served as edit inputs and remain uncommitted intermediate images outside this asset directory.

- Species: Giant Clam, *Tridacna gigas*
- Product Chinese name: 巨砗磲
- Search aliases: True Giant Clam, Gigas Clam, 大砗磲
- Generation tool: Codex built-in imagegen
- Generation calls: six `photorealistic-natural` base generations and two `precise-object-edit` passes
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/giant-clam/*.webp`
- Source format: opaque sRGB PNG, 1536 × 1024
- Source compression: TinyPNG returned HTTP 429 for the exhausted monthly quota on 2026-08-29; local ImageMagick palette-quantized all six PNGs to at most 256 colors with Riemersma dithering
- Runtime format: opaque sRGB WebP, 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`
- Research basis: [Giant Clam profile research](../../../../../docs/research/giant-clam-profile.md)

## Files and themes

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-shallow-reef-adult-portrait-source.png` | `public/images/species/giant-clam/01-shallow-reef-adult-portrait.webp` | One open adult on a shallow reef, placed on the right with broad blue-water and reef copy space on the left |
| 02 | `02-heavy-shell-rib-profile-source.png` | `public/images/species/giant-clam/02-heavy-shell-rib-profile.webp` | Heavy shell in side profile with four to five broad principal folds and no prominent leaflike scutes |
| 03 | `03-mantle-and-siphonal-openings-macro-source.png` | `public/images/species/giant-clam/03-mantle-and-siphonal-openings-macro.webp` | One continuous mantle showing a broad inhalant aperture and a separate raised exhalant siphon |
| 04 | `04-sunlit-open-mantle-source.png` | `public/images/species/giant-clam/04-sunlit-open-mantle.webp` | Adult with its mantle open under shallow-water daylight |
| 05 | `05-broadcast-spawning-plume-source.png` | `public/images/species/giant-clam/05-broadcast-spawning-plume.webp` | One adult releasing an undifferentiated milky diffuse plume from the exhalant siphon |
| 06 | `06-juvenile-byssal-attachment-source.png` | `public/images/species/giant-clam/06-juvenile-byssal-attachment.webp` | Juvenile resting on limestone with a short, restrained bundle of byssal threads contacting the substrate |

## Scientific and editorial boundaries

Frames 01–05 show *Tridacna gigas* with a heavy off-white shell, four to six deep radial folds, broad triangular shell-margin projections and no prominent leaflike scutes. Those characters separate the intended animal from a generic decorative clam and from the strongly scuted appearance associated with *T. squamosa*. The generated folds support the composition; viewers cannot use them as a voucher-level diagnosis.

The adult mantles use olive-brown to yellow-brown tissue with many small blue-green marks. They avoid a uniformly electric-blue mantle, giant eye spots and tentacles around the inhalant opening. Frame 03 places both apertures on the same continuous mantle: a broad low inhalant opening and a narrower raised exhalant siphon. A still image cannot measure water flow or filtration rate.

Frame 04 shows an open mantle under shallow-water sun. The frame illustrates light exposure without depicting sunlight as food, showing a visible energy beam or locating symbiotic algae at cellular scale.

Frame 05 reconstructs broadcast release from the exhalant siphon. The accepted plume remains milky and diffuse. The pixels do not distinguish sperm from eggs, establish a spawning sequence, identify the individual's functional sex, measure gamete output or document a wild event.

Frame 06 shows a juvenile attachment state. The short byssal threads make physical contact with limestone and do not resemble roots, tentacles or a suspension cable. The frame assigns no body size, age, settlement interval or attachment duration. Large adults need not retain this juvenile attachment state.

No frame establishes shell length, total weight, population density, depth, exact locality, age, sex, spawning date or conservation outcome. The files contain no text, labels, arrows, logos, signatures, borders or watermarks.

## Generation record and prompts

The blocks below preserve the accepted scene requests and the scope of both edits. They normalize headings and punctuation while retaining the generated content constraints documented during production.

### 01 · Shallow-reef adult portrait

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Clam species-detail cover and featured editorial card, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one original photorealistic underwater natural-history portrait of a living adult Giant Clam, Tridacna gigas, resting freely on a shallow tropical coral reef.
Subject: Exactly one coherent adult with a massive weathered off-white paired shell, four to six deep broad radial folds, broad triangular shell-margin projections and no prominent leaflike scutes. The open olive-brown mantle extends over the shell edge and carries many small restrained blue-green marks. Show one broad inhalant aperture and one smaller raised exhalant siphon without a tentacle fringe. Keep the hinge side down and the opening upward.
Scene: Clear sunlit reef water over limestone, coral rubble and sparse living coral. Small distant reef fish may supply environmental scale without touching the clam.
Composition: Place the complete adult across the right half. Preserve broad quiet blue-water and reef negative space on the left for interface copy. Keep the full shell and mantle inside the frame.
Lighting: Natural shallow-water daylight, restrained caustics, suspended particles and realistic underwater color loss.
Constraints: Exactly one Giant Clam; no person, pearl, predation, visible energy beam, text, label, arrow, logo, signature, border or watermark.
Avoid: leafy scutes, dense spikes, smooth featureless shell, tentacled inhalant opening, giant cartoon eye spots, uniformly neon-blue mantle, trap pose, teeth, fantasy glow, aquarium staging, CGI or illustration.
~~~

### 02 · Heavy shell and principal folds

The base generation established a side-on adult and shallow reef setting. Its shell needed a targeted shape correction before acceptance. The first output remains outside the repository.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Clam shell-identification gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a low side-profile natural-history photograph of one living adult Tridacna gigas on a shallow limestone reef floor, emphasizing its heavy paired shell.
Subject: Show one broad, weighty off-white shell with deep radial relief, a narrow strip of olive-brown mantle along the open upper edge and subdued natural encrustation. The animal rests with the hinge side down and the opening upward.
Composition: Keep the full side outline inside the frame. Use a low camera angle with open blue water behind the shell so the primary relief remains readable.
Lighting: Diffuse shallow-water daylight with realistic shell growth texture and soft seabed shadow.
Constraints: One animal; natural field setting; no specimen label, ruler, person, pearl, text, logo, border or watermark.
Avoid: scallop ears, spiral shell, paper-thin valves, coral branches growing from the shell, monster mouth, fantasy color or illustration.
~~~

#### Accepted precise-object-edit prompt

~~~text
Use case: precise-object-edit
Input image: Image 1 is the first Giant Clam side-profile generation.
Primary request: Correct only the visible shell architecture. Make the shell side massive, thick and continuous, with four to five broad principal radial folds visible in this side view. Each fold must be deep and rounded, ending toward a broad triangular upper-margin projection. Remove every prominent leaflike scute, scale or thin decorative flange. Retain fine concentric growth lines and restrained weathering.
Constraints: Preserve the same single clam, narrow olive-brown mantle rim, low side-on pose, limestone seabed, blue-water background, camera position, framing, focus, lighting and colors. Change no other element. Keep the shell fully inside the frame.
Avoid: six or more narrow repeated ribs, leafy scales, spikes, smooth featureless valve, altered mantle, second animal, text, logo, border, watermark or restyling.
~~~

### 03 · Mantle and siphonal openings

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Clam mantle and siphon gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a close three-quarter underwater macro photograph of one continuous living Tridacna gigas mantle showing both siphonal openings in their correct relationship.
Subject: The same olive-brown mantle spans the whole image and carries many fine blue-green marks. Show one broad, low inhalant aperture with a smooth untentacled rim and, behind it on the same mantle, one narrower exhalant opening raised on a short muscular siphonal chimney. A section of the thick off-white folded shell margin remains visible for context.
Composition: Keep both openings separate, unobstructed and in focus. The broad inhalant aperture occupies the lower-left area; the raised exhalant siphon sits higher and farther right.
Lighting: Natural shallow-water macro light, realistic wet tissue, restrained iridescence and shallow depth of field.
Constraints: One clam and one continuous mantle; no cutaway, arrows, flow lines, scale bar, text, logo, border or watermark.
Avoid: duplicate mantles, two raised tubes, tentacle crowns, nostrils, eyes, mouths, coral polyps, visible internal organs, fantasy fluorescence or illustration.
~~~

### 04 · Sunlit open mantle

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Clam daylight mantle gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one photorealistic natural-history view of an adult Tridacna gigas holding its mantle fully open under clear shallow-water daylight.
Subject: Exactly one adult with a thick off-white shell, four to six deep broad folds and no prominent leaflike scutes. The olive-brown mantle spreads across the opening and over the wavy shell edge, with many small blue-green marks and two anatomically distinct siphonal openings.
Scene: Shallow tropical reef limestone and coral rubble under clear water. Sunlight reaches the animal through realistic surface caustics.
Composition: Use an elevated three-quarter view that keeps the full animal and its open mantle inside the frame. Preserve enough substrate to show that the adult rests freely on the reef.
Lighting: Bright natural sun filtered through seawater; the mantle does not emit light.
Constraints: Exactly one clam; no energy ray, photosynthesis diagram, algae drawn on the tissue surface, text, label, arrow, logo, border or watermark.
Avoid: closed shell, shadow-withdrawal pose, uniformly blue mantle, leaflike scutes, tentacles, pearl, human contact, fantasy glow or illustration.
~~~

### 05 · Broadcast spawning plume

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Clam broadcast-spawning gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a restrained underwater natural-history reconstruction of one adult Tridacna gigas releasing a diffuse broadcast-spawning plume from its exhalant siphon.
Subject and action: Exactly one open adult rests on a shallow reef floor. Its heavy off-white shell has four to six broad deep folds and no leaflike scutes. The olive-brown mantle carries many fine blue-green marks. One raised exhalant siphon releases a soft milky plume that expands and disperses into moving seawater; a separate broad inhalant aperture remains visible.
Composition: Use a low three-quarter view. Keep the whole clam in the lower half and leave open blue water above for the plume to diffuse without filling the frame.
Lighting: Natural reef daylight with restrained particles and water movement.
Scientific boundary: Keep the plume visually undifferentiated. Do not portray identifiable sperm, eggs, embryos or a color-coded sex distinction.
Constraints: One clam; one diffuse plume from the exhalant siphon; no second spawning animal, gamete diagram, labels, text, logo, border or watermark.
Avoid: smoke stack, explosive jet, bubbles, giant eggs, egg strings, simultaneous separate sperm and egg streams, blood, waste discharge, fantasy glow or illustration.
~~~

### 06 · Juvenile byssal attachment

The base generation established the juvenile, limestone surface and front-facing composition. A targeted edit shortened the byssal bundle and connected it to the substrate. The first output remains outside the repository.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Clam juvenile attachment gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original underwater macro natural-history portrait of one juvenile Tridacna gigas resting on rough reef limestone and using byssal threads for attachment.
Subject: Exactly one coherent juvenile with a compact heavy paired shell, developing broad radial folds, a narrow olive-brown mantle with fine blue-green marks and one modest byssal opening on the lower shell. Fine tan byssal material extends from that lower opening toward the limestone.
Scene: Bare pale reef limestone with pits, biofilm and a clean blue-water background. No adult, nursery tray, aquarium glass or human equipment.
Composition: Front three-quarter macro view with the full shell, mantle, lower byssal opening and substrate contact area in frame.
Lighting: Soft shallow-water daylight with realistic shell, tissue and limestone texture.
Constraints: Do not assign a numeric size, age or settlement interval. One juvenile; no text, scale bar, ruler, label, arrow, logo, border or watermark.
Avoid: miniature adult proportions, roots, plant fibers, tentacles, long suspension cables, floating animal, pearl, egg, larval velum, human hand, fantasy glow or illustration.
~~~

#### Accepted precise-object-edit prompt

~~~text
Use case: precise-object-edit
Input image: Image 1 is the first Giant Clam juvenile-attachment generation.
Primary request: Change only the byssal attachment. Replace the long hanging fibers with one short, restrained bundle of fine natural tan byssal threads emerging from the lower byssal opening and making direct physical contact with the limestone immediately beneath the shell. Keep the bundle close to the body and seated against the rock; remove every gap, rootlike branch, tentacle shape and suspension-cable appearance.
Constraints: Preserve the same single juvenile, shell and mantle morphology, front-facing pose, limestone, blue-water background, camera framing, focus, lighting and colors. Do not add a scale cue or state a size, age or settlement time. Change no other element.
Avoid: long dangling beard, plant roots, octopus arms, worm bundle, glue pad, floating shell, changed body size, second animal, text, ruler, logo, border, watermark or restyling.
~~~

## Static and visual validation

- Static inspection confirms six opaque sRGB PNG sources at 1536 × 1024.
- All six runtime assets decode as opaque 1536 × 1024 single-frame sRGB WebP files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Original-resolution inspection covered subject count, cover copy space, shell folds and scutes, both siphonal openings, daylight mantle posture, plume origin and juvenile substrate contact.
- Inspection found no visible text, labels, arrows, logos, signatures, borders or watermarks.
- Runtime WebP sizes are 343,760; 259,622; 303,948; 437,306; 219,984; and 194,494 bytes in frame order, totaling 1,759,114 bytes.
- Runtime inspection found no new cropping, subjects, visible text, logos, watermarks, borders or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
