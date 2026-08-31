# C. elegans image set

Codex's built-in image generation tool created these six original project images on 2026-08-31 for the complete Fauna Atlas *Caenorhabditis elegans* profile. They reconstruct a rotting-apple microhabitat, transparent adult anatomy, bacterial feeding anatomy, egg laying, dauer nictation, and agar-plate observation. They do not document named animals, sites, wild collections, laboratory strains, experiments, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/caenorhabditis-elegans/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG returned HTTP 429 for all six files, so the documented local fallback used `pngquant --quality=80-95 --speed 1 --force --strip`
- Runtime conversion: the repository's `npm run convert:webp` command used `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-rotting-apple-habitat-source.png` | `01-rotting-apple-habitat.webp` | One complete translucent adult follows an S-curve across moist, decomposing apple flesh with a fine microbial film |
| 02 | `02-transparent-hermaphrodite-dic-source.png` | `02-transparent-hermaphrodite-dic.webp` | One complete DIC-style adult hermaphrodite shows a smooth unsegmented outline, tapered ends, a pharynx, intestine, curved gonad, and three restrained internal embryos |
| 03 | `03-pharyngeal-bacterial-feeding-source.png` | `03-pharyngeal-bacterial-feeding.webp` | One complete adult rests at the edge of a fine bacterial lawn; the transparent anterior shows the pharyngeal tube and terminal bulb without motion cues |
| 04 | `04-midbody-egg-laying-source.png` | `04-midbody-egg-laying.webp` | One complete adult contains four internal embryos and has one egg emerging from the ventral midbody |
| 05 | `05-dauer-nictation-source.png` | `05-dauer-nictation.webp` | One complete slender larva touches one decaying plant fiber only with its tail tip and lifts its anterior in an S-shaped pose |
| 06 | `06-agar-plate-observation-source.png` | `06-agar-plate-observation.webp` | One tiny adult and two still smaller larvae remain separated in one agar plate beneath one unbranded microscope objective; the adult spans roughly 1/30 of the visible dish diameter |

## Static verification

Original-size visual inspection covered each final PNG and WebP on 2026-08-31. ImageMagick and WebP inspection report 1536 × 1024, sRGB, opaque, single-frame files. SHA-256 comparison found 12 distinct hashes. `webpinfo` decoded each runtime asset as a lossy VP8 still image without alpha, animation, or errors.

## Evidence boundaries

- Generated morphology cannot replace a preserved voucher, a molecular identification, or a documented wild collection of *C. elegans*.
- The images show a smooth, slender, transparent, unsegmented nematode form. Those traits do not distinguish *C. elegans* from every similar free-living nematode.
- Frame 01 reconstructs a microbe-rich patch of rotting apple. It does not establish a locality, season, abundance, continuous global distribution, or direct consumption of apple tissue.
- Frame 02 makes internal structures readable through a generated transparent body. It does not validate a strain, genotype, exact cell count, calibrated length, or developmental age.
- Frame 03 shows one still position at a fine bacterial-lawn edge. It does not demonstrate pharyngeal pumping, grinder action, ingestion, bacterial identity, OP50 use, food preference, or feeding rate.
- Frame 04 shows one egg at the ventral midbody and four internal embryos. A still image cannot establish the direction or duration of egg movement, brood size, laying rate, fertility, or self-fertilization.
- Frame 05 shows a posture compatible with nictation. The image cannot prove dauer identity, movement, nonfeeding physiology, transport by another animal, or dispersal success.
- Frame 06 reconstructs a generic agar-plate observation. It does not identify a laboratory, strain, protocol, treatment, instrument model, measurement, sample size, or experimental result.
- No frame establishes a one-millimetre body length without a scale bar. Appearance alone also cannot establish chromosome complement or reproductive history.

## Shared morphology anchor

The prompts repeated these constraints:

    Depict Caenorhabditis elegans as a tiny, slender, translucent, smooth, unsegmented cylindrical nematode with an anterior pharynx, a continuous intestine, and naturally tapered ends. Keep each requested animal anatomically continuous and fully inside the frame. Avoid annelid rings, earthworm proportions, eyes, legs, antennae, bristles, suckers, jaws, parasite hosts, text, labels, logos, and watermarks. Treat each scene as a generalized scientific reconstruction rather than evidence for a named isolate, place, experiment, or result.

## Final prompts

### 01 · Rotting-apple habitat

    Use case: photorealistic-natural
    Asset type: Fauna Atlas C. elegans cover source image, exact 1536 x 1024 landscape, horizontal 3:2
    Primary request: Create one scientifically grounded original macro-microscopy natural-history reconstruction of a single adult hermaphrodite Caenorhabditis elegans moving through the moist microbial film on the exposed inner surface of decaying apple tissue.
    Scene/backdrop: A close field-microscope view of softened amber-cream apple flesh with a thin wet bacterial film, a few restrained yeast-like specks, and shallow decomposing plant texture. The setting must read as microbe-rich rotting fruit, not bare mineral soil, an intestine, or an aquarium.
    Subject accuracy: Exactly one complete living adult hermaphrodite, about 1 mm in real life. Render a slender translucent colorless-to-pale body with a smooth unsegmented cylindrical outline, gently tapered anterior and pointed tail, a subtle pharyngeal bulb near the anterior, a continuous darker intestinal tract, and a curved reproductive tract with only a few restrained oval embryos visible through the body. The animal follows a loose S-curve and remains entirely inside the frame. No external rings, no earthworm segmentation, no eyes, legs, bristles, suckers, jaws, face, or parasite host.
    Style/medium: Museum-quality original photomicrograph-like field stereomicroscopy with believable optical depth, moist organic textures, restrained scientific color, and natural shallow depth of field. This is a generalized reconstruction, not documentation of a named isolate or location.
    Composition/framing: Exact 1536 x 1024 landscape. Keep the complete worm centered slightly right around x=0.58 y=0.52, occupying roughly 55 percent of frame width, with enough apple substrate visible to establish habitat. No crop at either end.
    Lighting/mood: Soft transmitted and oblique microscope illumination, pale gold and neutral cream background, transparent tissue with restrained highlights.
    Constraints: exactly one complete C. elegans; one continuous unbranched body; opaque sRGB; no text, letters, numbers, labels, arrows, scale bar, Petri dish, laboratory equipment, people, logo, signature, border, or watermark.
    Avoid: multiple worms, giant earthworm, annelid rings, flatworm, maggot, insect larva, eel, snake, hookworm mouthparts, teeth, lips, eyes, antennae, limbs, hair, blood, gore, feces, human tissue, intestine, host animal, soil clods, fantasy glow, neon fluorescence, illustration, infographic, CGI, oversaturation.

### 02 · Transparent adult hermaphrodite

    Use case: scientific-educational
    Asset type: Fauna Atlas species-profile source image
    Primary request: Create an original restrained differential interference contrast (DIC) microscopy image of one complete adult Caenorhabditis elegans hermaphrodite.
    Scene/backdrop: plain clean neutral pale-gray microscope field with subtle DIC optical relief, no debris and no other organisms.
    Subject: exactly one entire adult C. elegans hermaphrodite, a long slender transparent smooth unsegmented cylindrical nematode with both the anterior and posterior ends naturally tapered. Show scientifically plausible translucent internal anatomy through the body wall: a distinct muscular anterior pharynx, a continuous intestine, the curved U-shaped hermaphrodite gonad, and only a few oval embryos in the uterus. The anatomy must remain integrated inside one natural worm body, not diagram parts.
    Style/medium: realistic natural-history DIC micrograph, restrained grayscale with faint warm-cool interference contrast, documentary rather than illustrative.
    Composition/framing: 1536 x 1024 landscape; one gently curved full-length worm arranged across the horizontal field; every part from mouth to tail fully visible with generous clear margin on all sides; no cropping and no overlap with a frame edge.
    Lighting/mood: even transmitted microscope illumination, crisp but natural optical contrast, calm clinical observation.
    Color palette: neutral silver-gray, translucent ivory, very subtle DIC ochre-blue edge relief.
    Materials/textures: transparent smooth cuticle without visible rings or segmentation; delicate soft internal tissues, realistic microscope optics.
    Text (verbatim): ""
    Constraints: exact 1536 x 1024 landscape PNG; opaque sRGB; original imagery; exactly one worm; complete adult hermaphrodite fully inside the frame; both ends tapered; recognizable anterior pharynx, intestine, curved gonad, and a few embryos; no text, labels, arrows, numbers, scale bar, logo, watermark, or border.
    Avoid: extra worms, duplicated body parts, cropped head or tail, annelid segmentation, rings, ridges, bristles, legs, eyes, face, antennae, giant eggs, excessive embryos, colorful infographic anatomy, dissection, schematic callouts, pseudo-label shapes, petri-dish view, black background, fantasy glow.

### 03 · Pharyngeal bacterial feeding

    Use case: scientific-educational
    Asset type: Fauna Atlas species-profile source image
    Primary request: Create an original realistic microscope image of exactly one complete adult Caenorhabditis elegans hermaphrodite positioned at the edge of a fine bacterial lawn, showing the anatomy involved in bacterial feeding without depicting motion or a measured pumping rate.
    Scene/backdrop: pale neutral agar-like microscope field; one soft irregular boundary separates a clean area from a thin bacterial lawn. Render the bacterial lawn only as a dense fine granular film of sub-resolution speckles and soft microtexture, never as individually enlarged rods or cartoon microbes.
    Subject: exactly one entire adult C. elegans hermaphrodite, long slender transparent smooth unsegmented cylindrical body with both ends naturally tapered. Place its anterior end at the bacterial-lawn boundary. Through the transparent anterior, make the narrow muscular pharyngeal tube and its single distinct oval terminal bulb scientifically plausible and clearly visible; keep the intestine and restrained internal anatomy continuous through the body. The worm is static in one natural gentle curve.
    Style/medium: realistic restrained DIC or phase-contrast natural-history micrograph, documentary and scientifically grounded rather than an infographic.
    Composition/framing: exact 1536 x 1024 landscape; one full-length worm fully contained in frame with clear margin around head and tail; bacterial-lawn edge visible as a subtle textured region beside the anterior; no crop and no frame-edge contact.
    Lighting/mood: even transmitted microscope illumination, soft optical relief, crisp anterior anatomy, quiet clinical observation.
    Color palette: neutral silver-gray and translucent ivory with faint warm-cool DIC edge contrast; bacterial lawn only slightly darker beige-gray.
    Materials/textures: smooth transparent cuticle without visible rings or segmentation; delicate internal tissue; bacterial lawn as fine matte granular film.
    Text (verbatim): ""
    Constraints: exact 1536 x 1024 landscape PNG; opaque sRGB; original imagery; exactly one worm and no other animals; complete adult hermaphrodite from mouth to tapered tail; anterior pharynx and terminal bulb clear; static single-frame observation with no visual claim about pump speed or rate; no text, labels, arrows, numbers, graphs, motion lines, scale bar, logo, watermark, or border.
    Avoid: extra worms, larvae, duplicated anatomy, cropped head or tail, annelid segmentation, body rings, ridges, bristles, legs, eyes, face, antennae, giant bacteria, visible rod-shaped microbes, pellets, food chunks, feeding animation, repeated pharynx positions, stopwatch imagery, schematic callouts, pseudo-label shapes, petri-dish overview, black background, fantasy glow.

### 04 · Midbody egg laying

    Use case: scientific-educational
    Asset type: project-bound species profile source image
    Primary request: A restrained, biologically plausible differential interference contrast (DIC) microscopy image of Caenorhabditis elegans egg laying.
    Scene/backdrop: A clean, uncluttered neutral microscope field with subtle gray-beige DIC relief and no egg-like bubbles, debris, or other organisms.
    Subject: Exactly one complete gravid adult hermaphrodite C. elegans. The worm is translucent, slender, smooth, cylindrical, and anatomically continuous from rounded head to tapered tail. At the ventral midbody vulval opening, exactly one oval eggshell-enclosed egg is visibly in the act of being released, partly outside the body. Inside the uterus, show only four distinct oval embryos, all contained within the adult.
    Style/medium: Restrained scientific DIC photomicrograph, realistic optical edge halos and translucent internal anatomy, natural microscopy texture, not an illustration or diagram.
    Composition/framing: 3:2 landscape, exact 1536 x 1024 pixels. Show the entire single worm with both head and tail fully inside the frame and generous margins. Keep the vulval midbody and the one emerging egg clearly readable near the center.
    Lighting/mood: Even transmitted microscope illumination, restrained contrast, clinical and observational.
    Color palette: Muted neutral grayscale with a faint warm DIC tint.
    Materials/textures: Smooth unsegmented cuticle; subtle pharynx, intestine, gonad, and uterine anatomy visible through the body; one crisp oval eggshell at the vulva.
    Text: none.
    Constraints: Exactly one worm total; exactly one external or emerging egg total; only four internal oval embryos; the egg emerges from the ventral midbody vulva, not the mouth or tail; one intact smooth unsegmented nematode body; opaque sRGB PNG; original imagery; no cropped anatomy.
    Avoid: any second worm or worm fragment; any additional external egg; more than four internal embryos; round bubbles that resemble eggs; segmented body; annelid rings; insect larva traits; branches; bifurcation; duplicated heads or tails; impossible anatomy; feeding; carrier animal; labels; arrows; scale bars; borders; text; logo; signature; watermark.

### 05 · Dauer nictation

    Use case: scientific-educational
    Asset type: project-bound species profile source image
    Primary request: A restrained, biologically plausible scientific macro-photomicrograph of one Caenorhabditis elegans dauer larva performing nictation in a moist rotting-stem microhabitat.
    Scene/backdrop: Damp, softly decomposing plant-stem material with a shallow film of moisture, rendered as a subdued natural microhabitat. One single narrow decaying plant fiber runs near the lower part of the scene and is the only support touched by the animal. Keep the background softly out of focus and free of worm-like strands.
    Subject: Exactly one complete dauer-stage C. elegans larva. It is distinctly thinner and smaller than a gravid adult: very slender, translucent, hairlike, smooth, cylindrical, and anatomically continuous. Only the extreme tapered posterior tail tip touches the one decaying plant fiber. From that single contact point, the body rises freely; the anterior half is lifted into a gentle elegant S-shaped nictation curve, with the rounded head suspended in moist air and not contacting any surface. The mouth is closed and the animal is not feeding.
    Style/medium: Realistic scientific macro-photomicrograph with restrained optical contrast and credible translucent nematode anatomy, not a diagram and not fantasy.
    Composition/framing: 3:2 landscape, exact 1536 x 1024 pixels. Show the entire one worm from rounded head to tapered tail, fully inside the frame with generous margins. Make the tail-to-fiber contact unambiguous, and keep the lifted anterior curve readable against a quiet background.
    Lighting/mood: Soft diffuse natural transmitted light, moist microhabitat atmosphere, observational and calm.
    Color palette: Muted moss brown, tan, olive, and translucent pearl-gray; natural low saturation.
    Materials/textures: Smooth unsegmented cuticle, faint internal pharynx and gut, one fibrous decaying plant support, subtle moisture sheen without round bubbles.
    Text: none.
    Constraints: Exactly one worm total; one continuous unsegmented nematode body; only the extreme posterior tail touches the single plant fiber; the anterior half is freely elevated in a gentle nictation curve; the dauer is much thinner than an adult but remains clearly visible; no carrier animal; no feeding; opaque sRGB PNG; original imagery; no cropped anatomy.
    Avoid: any second worm or worm fragment; extra worm-like fibers; body segmentation; annelid rings; insect larva traits; branching or bifurcation; duplicated heads or tails; knots; impossible anatomy; eggs; other animals; insects; mites; snails; mouth contact with substrate; feeding; labels; arrows; scale bars; borders; text; logo; signature; watermark.

### 06 · Agar-plate observation

    Use case: scientific-educational
    Asset type: Fauna Atlas C. elegans laboratory-observation gallery source image, exact 1536 x 1024 landscape, horizontal 3:2
    Primary request: Create one scientifically restrained original laboratory photography reconstruction of researchers observing living Caenorhabditis elegans on an agar culture plate beneath a stereomicroscope.
    Scene/backdrop: A clean neutral laboratory bench. Exactly one unbranded stereomicroscope objective enters from the upper background above one shallow transparent circular Petri dish. Inside the dish is pale translucent nematode growth agar with one soft off-white bacterial lawn. No hands, people, screens, labels, writing, colored media, tubes, or extra instruments.
    Subjects: Exactly three complete living nematodes on the agar, physically separated: one adult hermaphrodite and two smaller larvae. They appear as tiny translucent colorless slender smooth unsegmented bodies in shallow sinusoidal curves. All six body ends are visible. At real scale they should look like fine threads rather than giant earthworms; use optical magnification and shallow depth of field to make them readable. No eyes, limbs, antennae, bristles, suckers, teeth, external rings, or parasite host.
    Style/medium: Original photorealistic research-laboratory macro photography, sober museum-publication quality, practical microscope optics, believable glass and agar, restrained neutral color. Generalized observation scene, not a named experiment, strain, genotype, treatment, measurement, or result.
    Composition/framing: Exact 1536 x 1024 landscape. The Petri dish fills the lower two-thirds and remains fully inside the frame. The objective stays centered above it without touching. Place the adult near x=0.58 y=0.58 and the two larvae farther apart on the bacterial lawn. Keep every worm complete and distinct.
    Lighting/mood: Soft cool-white laboratory illumination with gentle transmitted light through the agar; calm observational scene.
    Constraints: exactly one Petri dish, one microscope objective, three complete worms total, one adult plus two larvae, no contact between worms, opaque sRGB; no readable text, letters, numbers, plate marks, labels, arrows, scale bar, display, logo, signature, border, or watermark.
    Avoid: extra worms, eggs, crowded swarm, tangled bodies, branching or split worm, annelid rings, earthworm, flatworm, leech, hookworm mouthparts, insect larva, maggot, human tissue, fluorescent neon, colored diagram, robot microscope, hands, pipette, wire pick, clutter, CGI, illustration, infographic, oversaturation.

The first result made the animals too large relative to the dish. Two imagegen edits corrected that scale before acceptance.

#### Scale-correction edit, pass 1

    Edit the supplied image into a scientifically credible 1536×1024 landscape laboratory observation scene for a fauna species profile. Preserve the single clear Petri dish, pale agar with a subtle fine bacterial lawn, neutral gray bench, and exactly one stereomicroscope objective above it. Correct the animal scale decisively: show exactly three Caenorhabditis elegans within the dish, one gently S-curved translucent adult hermaphrodite whose full body length is about 1/40 of the visible dish diameter, plus exactly two separated larvae each clearly shorter and thinner, about one-half and one-third of the adult length. The worms should be tiny but discernible through restrained local contrast, not enlarged specimens and not graphic overlays. Each must be a smooth unsegmented cylindrical nematode tapering at both ends, with no eyes, appendages, bristles, rings, or earthworm segmentation. Keep all three well separated and entirely inside the agar surface. No other animals, no hands, no tools touching the dish, no labels, text, numbers, scale bars, logos, borders, signatures, or watermarks. Opaque sRGB, one static frame. The result should look like a realistic scientific educational photograph, with restrained lighting and credible physical scale.

#### Scale-correction edit, accepted pass

    Make one precise scientific-scale correction to this supplied image while preserving the dish, objective, bench, lighting, framing, and exactly three-worm arrangement. Shrink each of the three visible nematodes to 20 percent of its current full body length and thickness. Keep the adult in the central location and the two larvae in their existing separated upper-left and lower-right locations. After shrinking, the central adult must span only about 25–35 pixels in this 1536-pixel-wide image, with the larvae about 15 pixels and 10 pixels long. They may be tiny, faint curved translucent marks, because credible physical scale matters more than close anatomical detail. Do not add, duplicate, remove, relabel, outline, circle, magnify, or otherwise highlight any worm. Retouch the vacated agar naturally so no old large worm traces remain. Exactly one adult plus exactly two larvae, no other animals. No text, numbers, scale bars, arrows, overlays, labels, logos, signatures, borders, or watermarks. Keep exact 1536×1024 dimensions, opaque sRGB, one static frame.
