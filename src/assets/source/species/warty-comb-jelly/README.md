# Warty Comb Jelly image set

Codex's built-in image generation tool created these six original project images on 2026-08-31 for the complete Fauna Atlas *Mnemiopsis leidyi* profile. They reconstruct a native western Atlantic estuary, external anatomy, two distinct optical effects, lobe feeding, and non-contact monitoring. They do not document named animals, sites, blooms, introductions, or surveys.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/warty-comb-jelly/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG returned HTTP 429, so the documented local fallback used `pngquant --quality=80-95 --speed 1 --force --strip`
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-western-atlantic-estuary-cover-source.png` | `01-western-atlantic-estuary-cover.webp` | One complete transparent lobate comb jelly occupies the right side of green estuarine water, with calm negative space on the left |
| 02 | `02-lobes-and-comb-rows-diagnostic-source.png` | `02-lobes-and-comb-rows-diagnostic.webp` | One lateral animal shows broad oral lobes, smaller auricles, comb rows, and a translucent internal canal system |
| 03 | `03-ciliary-rainbow-daylight-source.png` | `03-ciliary-rainbow-daylight.webp` | Daylight creates narrow broken rainbow reflections on the comb plates while the body remains unlit |
| 04 | `04-blue-green-bioluminescence-source.png` | `04-blue-green-bioluminescence.webp` | A dark-water view shows restrained blue-green light beneath the comb rows without a rainbow spectrum |
| 05 | `05-stealth-copepod-feeding-source.png` | `05-stealth-copepod-feeding.webp` | One animal faces exactly six separated copepods, with fine particles suggesting a weak feeding current before contact |
| 06 | `06-optical-plankton-monitoring-source.png` | `06-optical-plankton-monitoring.webp` | One complete animal remains separated from one unbranded optical imaging unit and its soft light sheet |

## Static verification

The final PNG and WebP pairs passed original-size visual inspection on 2026-08-31. All 12 files decode at 1536 × 1024 in sRGB, are opaque and single-frame, and have distinct SHA-256 hashes. The accepted runtime focal points, in frame order, are `(0.71, 0.55)`, `(0.52, 0.52)`, `(0.51, 0.51)`, `(0.57, 0.53)`, `(0.67, 0.52)`, and `(0.64, 0.52)`.

## Evidence boundaries

- A generated transparent lobate form cannot replace a preserved voucher, meridional-canal examination, or molecular identification.
- The scenes show the portions of eight comb rows visible from each camera angle. They do not provide a counted anatomical diagram.
- Frame 03 reconstructs daylight diffraction from beating cilia. Frame 04 reconstructs blue-green bioluminescence from photocytes beneath the comb rows. The images do not measure spectra, intensity, flash duration, or function.
- Frame 05 does not measure feeding-current velocity, encounter rate, capture efficiency, or diet composition. The six copepods serve as a readable reconstruction of prey approach.
- Frame 06 does not identify the Black Sea, a survey program, a detection, abundance, or population trend. The equipment is generic.
- No frame establishes body length, age, reproductive state, native or introduced status, or locality from appearance alone.

## Shared morphology anchor

The prompts repeated these constraints:

    Depict exactly one complete adult Mnemiopsis leidyi with a soft transparent oval-to-walnut-shaped body, two broad oral lobes, four smaller auricles, eight longitudinal ciliary comb rows, and faint internal canals. Avoid a jellyfish bell, bell margin, cnidarian oral arms or stinging tentacles, a pyrosome or salp body, duplicate animals, text, logos, and watermarks.

## Final prompts

### 01 · Western Atlantic estuary cover

    Use case: photorealistic-natural
    Asset type: species atlas source image, natural-history cover photograph
    Primary request: Create a scientifically faithful underwater photograph of exactly one complete adult warty comb jelly, Mnemiopsis leidyi, in its native western Atlantic brackish estuary.
    Scene/backdrop: naturally dark green estuarine water with soft depth falloff, sparse suspended particles and tiny plankton; no other macroscopic animals.
    Subject: exactly one entire adult Mnemiopsis leidyi, fully inside the frame. It has a soft transparent oval-to-walnut-shaped body; two broad oral lobes forming the open oral end; four smaller ear-like auricles; eight longitudinal ciliary comb rows arranged with coherent bilateral geometry, showing only the portions naturally visible from this three-quarter side view; faint canals and stomach cavity visible through the tissue. Preserve the delicate gelatinous irregularity of a living animal.
    Style/medium: highly realistic underwater natural-history photography, documentary field image, biologically plausible optics, no illustration or CGI finish.
    Composition/framing: 3:2 landscape. Place the single animal in the right-hand midground at a readable moderate scale, with its complete silhouette and oral end visible. Leave the left half as calm uncluttered negative space. Natural underwater depth and subtle particulate scale.
    Lighting/mood: subdued diffuse daylight filtered through estuarine water; quiet, observational, restrained.
    Color palette: dark olive green and muted blue-green water; nearly colorless transparent animal with soft neutral highlights.
    Materials/textures: soft hydrated gelatinous tissue, delicate cilia, subtle internal canals; never hard plastic, glass, acrylic, rubber, or inflated balloon texture.
    Constraints: exact final canvas 1536 x 1024 pixels, landscape 3:2, fully opaque sRGB PNG. Exactly one animal; complete body, lobes, auricles, and visible comb-row structure; scientifically plausible Mnemiopsis leidyi anatomy. No text, captions, labels, logos, borders, or watermark.
    Avoid: jellyfish umbrella or bell, bell margin, radial jellyfish symmetry, cnidarian tentacles, jellyfish oral arms, trailing stinging tentacles, siphonophore or pyrosome colony, salp, chain of animals, duplicate animal, cropped body, cutaway or diagram, fluorescence, bioluminescent glow, neon color, fantasy creature, plastic appearance.

### 02 · Lobes and comb rows

    Use case: photorealistic-natural
    Asset type: species atlas source image, diagnostic natural-history macro photograph
    Primary request: Create a scientifically faithful side-profile macro photograph of exactly one complete adult warty comb jelly, Mnemiopsis leidyi, suspended alive in clean water, emphasizing external diagnostic anatomy without turning the image into a diagram.
    Scene/backdrop: clean dark gray-blue open water with a smooth natural depth gradient and only a few unobtrusive suspended particles; no tank hardware and no other organisms.
    Subject: exactly one entire adult Mnemiopsis leidyi, fully inside the frame in strict readable side profile. It has a soft transparent oval-to-walnut-shaped body; both broad oral lobes clearly form the open oral end; four smaller ear-like auricles are distinguishable around the lobe region; eight longitudinal ciliary comb rows follow coherent three-dimensional anatomy, with only the rows and row segments naturally visible from a side view; faint meridional canals, stomach cavity, and inner gelatinous structure show through intact translucent tissue. Preserve living asymmetry and soft edges.
    Style/medium: high-resolution realistic underwater macro photography, field-guide diagnostic clarity, optical realism, no illustration, no CGI, no specimen plate.
    Composition/framing: 3:2 landscape close view, animal centered slightly off-axis in side profile, complete from aboral tip through open oral lobes, generous clear margin on every side. Keep the full silhouette readable and avoid extreme magnification that crops any part.
    Lighting/mood: restrained soft lateral daylight with gentle rim definition and natural subsurface transmission; clinical clarity without laboratory glare.
    Color palette: charcoal gray-blue water; colorless translucent tissue with muted silver-white highlights; no saturated color.
    Materials/textures: delicate hydrated gelatinous tissue, fine ciliary comb plates, faint organic internal canals; never plastic, glass, acrylic, rubber, or hard-edged.
    Constraints: exact final canvas 1536 x 1024 pixels, landscape 3:2, fully opaque sRGB PNG. Exactly one animal; full external anatomy remains intact; lobes, auricles, visible comb rows, and transparent inner cavity are legible. No sectioning, no dissection, no labels, no arrows, no scale bar, no text, no logo, no border, no watermark.
    Avoid: cutaway view, cross-section, exploded view, scientific illustration, annotation, fluorescent staining, false color, bioluminescence, neon glow, jellyfish umbrella or bell, bell margin, radial jellyfish symmetry, cnidarian tentacles, jellyfish oral arms, trailing stinging tentacles, siphonophore or pyrosome colony, salp, duplicate animal, cropped animal, fantasy creature, plastic appearance.

### 03 · Ciliary rainbow in daylight

    Use case: photorealistic-natural
    Asset type: species atlas source image, natural-history behavior and optics photograph
    Primary request: Create a scientifically faithful daylight underwater photograph of exactly one complete adult warty comb jelly, Mnemiopsis leidyi, showing restrained rainbow diffraction only along small portions of its beating ciliary comb rows.
    Scene/backdrop: clear natural coastal water in daytime with a subdued blue-gray to green-blue depth gradient, sparse suspended particles, no other organisms.
    Subject: exactly one entire adult Mnemiopsis leidyi, fully inside the frame. It has a soft transparent oval-to-walnut-shaped body; two broad oral lobes forming the open oral end; four smaller ear-like auricles; eight longitudinal ciliary comb rows arranged with coherent three-dimensional anatomy, with only the portions naturally visible from the chosen three-quarter side view; faint canals and stomach cavity visible within intact transparent tissue. The body tissue itself remains colorless and non-luminous.
    Style/medium: photorealistic underwater natural-history photography, biologically and optically plausible, candid documentary image, no illustration or CGI finish.
    Composition/framing: 3:2 landscape, one complete animal at medium-close scale in a gentle diagonal three-quarter side orientation, with clear water surrounding every edge. Keep the oral lobes, auricles, and longitudinal comb-row paths readable.
    Lighting/mood: natural oblique daytime light enters from the upper left. Fine beating cilia create a few localized, narrow, broken spectral glints along sections of the comb rows through diffraction. The rainbow accents are small, crisp, intermittent, and subordinate to the transparent animal. Calm and restrained.
    Color palette: natural muted blue-green water; nearly colorless transparent tissue; sparse thin red-orange-yellow-green-blue diffraction flecks confined to ciliary plates.
    Materials/textures: soft hydrated gelatinous tissue, fine ciliary plates, faint organic canals; subtle motion in individual cilia; never plastic, glass, acrylic, rubber, or hard-edged.
    Constraints: exact final canvas 1536 x 1024 pixels, landscape 3:2, fully opaque sRGB PNG. Exactly one complete animal; scientifically plausible Mnemiopsis leidyi anatomy. Rainbow color appears only as localized narrow diffraction reflections on portions of the comb rows; the body does not emit light. No text, caption, label, logo, border, or watermark.
    Avoid: night scene, black void, bioluminescence, internal glow, neon lighting, entire animal glowing rainbow colors, broad rainbow bands across the body, fantasy iridescence, fluorescent false color, jellyfish umbrella or bell, bell margin, radial jellyfish symmetry, cnidarian tentacles, jellyfish oral arms, trailing stinging tentacles, siphonophore or pyrosome colony, salp, duplicate animal, cropped body, plastic appearance.

### 04 · Blue-green bioluminescence

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Mnemiopsis leidyi bioluminescence gallery source image, exact 1536 x 1024 horizontal 3:2
    Primary request: Create an original scientifically grounded low-light underwater natural-history photograph of exactly one complete adult warty comb jelly, Mnemiopsis leidyi, showing restrained blue-green bioluminescence from photocytes beneath its comb rows at night.
    Scene/backdrop: Open deep-night estuarine or coastal seawater fading from black-blue to very dark navy, with only a few fine suspended particles. No seabed, reef, vegetation, aquarium wall, surface, moon, other organism, or equipment.
    Subject: Exactly one intact adult Mnemiopsis leidyi. The body is soft, transparent, and broadly oval to walnut-shaped, with a rounded aboral end and an open oral end formed by two broad flowing oral lobes. Show four smaller ear-like auricles near the oral end. Eight longitudinal ciliary comb rows are anatomically arranged around the body; in this three-quarter view, render the visible row segments as evenly spaced, geometrically coherent meridional bands that follow the curved surface from near the aboral pole toward the lobes. Faint internal canals and the central stomach cavity show through the gelatinous tissue without becoming a diagram or dissection.
    Bioluminescence: Along the tissues directly beneath the comb rows, show a sparse irregular sequence of tiny blue-green photocyte points and a few short broken bands. The light remains localized and restrained, with soft falloff into nearby tissue. Most of the animal stays transparent and dim. This is nocturnal bioluminescence, clearly distinct from daylight diffraction: no rainbow spectrum, no prismatic comb reflections, no multicolored iridescence, and no continuous neon outline.
    Style/medium: Original photorealistic low-light marine macro photography, sober museum-publication quality, realistic seawater optics, translucent living tissue, restrained processing.
    Composition/framing: Exact 1536 x 1024 landscape, 3:2. Place the complete animal in the middle distance at a gentle diagonal, large enough for the lobes, auricles, visible comb rows, and faint canals to read, while keeping every part inside the frame with clean water around the silhouette. Single uninterrupted frame, no inset or collage.
    Lighting/mood: Near-dark observational scene. Very weak cool ambient blue defines the transparent body while the localized blue-green photocytes provide the only clear highlights. Quiet, delicate, scientifically credible.
    Color palette: Black-blue and deep navy water, nearly colorless transparent tissue, muted cyan-green light points; no magenta, purple, orange, or rainbow.
    Materials/textures: Soft hydrated gelatinous tissue with subtle organic irregularity, fine ciliary comb plates, faint wet canals; never rigid, glossy, rubbery, acrylic, or plastic.
    Constraints: exactly one complete adult animal and zero other animals; one coherent body; two broad oral lobes; four smaller auricles; eight anatomically coherent longitudinal comb rows with only the camera-facing portions visible; localized photocyte light beneath the comb rows; complete silhouette; opaque sRGB image; no readable text, labels, arrows, symbols, border, logo, signature, or watermark.
    Avoid: jellyfish umbrella or bell, bell margin, medusa shape, cnidarian tentacles, long stinging tentacles, jellyfish oral arms, tentacle net, comb-jelly fishing tentacles, pyrosome colony, salp, chain or multiple zooids, hollow tube, segmented colony, plastic bag, acrylic sculpture, solid neon blob, whole-body glow, continuous glowing outline, laser beams, rainbow diffraction, prismatic highlights, fantasy fluorescence, duplicate animal, cropped lobes, malformed rows, excessive particles, CGI, illustration, painting, oversaturation.

### 05 · Stealth copepod feeding

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Mnemiopsis leidyi stealth-feeding gallery source image, exact 1536 x 1024 horizontal 3:2
    Primary request: Create an original scientifically grounded underwater natural-history photograph of exactly one complete adult warty comb jelly, Mnemiopsis leidyi, approaching approximately six dispersed copepods with its broad oral lobes open, while a weak low-disturbance feeding current is suggested only by fine particle paths.
    Scene/backdrop: Natural temperate estuarine midwater with muted blue-green water, faint amber-gray haze, and a sparse field of fine suspended particles. No surface, seabed, shore, plants, reef, aquarium wall, laboratory, equipment, or other wildlife.
    Main subject: Exactly one intact adult Mnemiopsis leidyi. Its soft transparent body is broadly oval to walnut-shaped, with a rounded aboral end and an open oral end formed by two broad expanded oral lobes. Show four smaller ear-like auricles near the oral opening. Eight longitudinal ciliary comb rows are anatomically arranged around the body; from this side-three-quarter view, render the visible portions as evenly spaced, geometrically coherent meridional bands following the curved body. Faint internal canals and the stomach cavity show naturally through the gelatinous tissue. Keep the complete outline, both lobes, and all visible appendages inside the frame.
    Prey/action: Show exactly six small copepods dispersed in open water just ahead of the expanded oral lobes. Each copepod is tiny relative to the comb jelly, physically separate from every other copepod, and still separated from the animal by a clearly visible water gap. None touches, enters, adheres to, or appears inside the mouth, lobes, auricles, or body. Their poses and distances vary naturally; do not arrange them in a row, cluster, school, or swarm.
    Feeding-flow cue: A few fine neutral suspended particles form sparse short curved trajectories that drift gently toward the open space between the oral lobes. Keep the motion subtle and low-disturbance, without arrows, vector lines, jets, vortices, suction funnels, bubbles, glow, or dense particle trails. The image should imply stealthy lobe-driven feeding without claiming a measured flow speed or capture rate.
    Style/medium: Original photorealistic marine macro photography with restrained long-exposure particle cues, sober museum-publication quality, realistic seawater optics and translucent living tissue; no infographic or CGI appearance.
    Composition/framing: Exact 1536 x 1024 landscape, 3:2. Place the complete comb jelly in the center-right, oriented with its open oral lobes facing toward the left-center. Place all six copepods across the open water in front of the lobes, with clean separation and enough scale to remain recognizable while still biologically small. Keep all subjects inside a single uninterrupted frame with generous water margins.
    Lighting/mood: Soft diffuse estuarine daylight from above and slightly behind, calm observational mood, moderate optical contrast that preserves transparency. No dramatic spotlight and no nocturnal glow.
    Color palette: Muted blue-green, slate, faint warm gray suspended matter, nearly colorless transparent tissue; minimal restrained pearly highlights only.
    Materials/textures: Soft hydrated gelatinous tissue with subtle organic folds, fine ciliary comb plates, faint internal canals, delicate translucent copepod exoskeletons and antennae; never rigid, glossy, rubbery, acrylic, or plastic.
    Constraints: exactly one complete adult Mnemiopsis leidyi and exactly six copepods; no contact between prey and animal; one coherent walnut-shaped body; two broad open oral lobes; four smaller auricles; eight anatomically coherent longitudinal comb rows with camera-facing portions visible; sparse subtle particle trajectories; opaque sRGB image; no readable text, labels, arrows, symbols, border, logo, signature, or watermark.
    Avoid: jellyfish umbrella or bell, bell margin, medusa shape, cnidarian tentacles, long stinging tentacles, jellyfish oral arms, trailing filament, tentacle web or prey-catching net, fish, fish school, shrimp-sized prey, krill swarm, dense zooplankton soup, more or fewer than six visible copepods, prey touching or inside the animal, blood, torn prey, teeth, jaws, violent predation, forceful suction, whirlpool, bubbles, pyrosome colony, salp, plastic bag, acrylic sculpture, rainbow neon, bioluminescence, fantasy glow, duplicate animal, cropped anatomy, malformed rows, CGI, illustration, painting, oversaturation.

### 06 · Optical plankton monitoring

The accepted image uses one generated base and one edit that changed only the illumination shape.

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Mnemiopsis leidyi in-situ optical-plankton-monitoring gallery source image, exact 1536 x 1024 horizontal 3:2
    Primary request: Create an original scientifically restrained underwater research photograph of exactly one complete adult warty comb jelly, Mnemiopsis leidyi, observed at a distance by exactly one small generic unbranded in-situ optical plankton imaging device with a soft light sheet in Black Sea or nearby temperate coastal-water conditions.
    Scene/backdrop: Open temperate midwater with layered deep slate-blue water, gentle particulate haze, and a few fine suspended particles. The setting should feel compatible with the Black Sea or an adjacent marine region but must contain no identifying coast, landmark, map, coordinates, station marker, vessel, seabed, reef, aquarium wall, or locality claim.
    Animal: Exactly one intact adult Mnemiopsis leidyi in the middle distance. Its soft transparent body is broadly oval to walnut-shaped, with a rounded aboral end and an open oral end formed by two broad oral lobes. Show four smaller ear-like auricles near the oral opening. Eight longitudinal ciliary comb rows are anatomically arranged around the body; from this three-quarter view, render the visible row segments as evenly spaced, geometrically coherent meridional bands following the curved surface. Faint internal canals and the stomach cavity show through the gelatinous tissue. Keep the complete silhouette, both lobes, all visible auricles, and every body edge inside the frame.
    Imaging device: Exactly one small self-contained underwater optical imaging unit positioned to the side of the animal, with a compact matte charcoal waterproof housing, one circular glass camera port, and one integrated slim light-sheet emitter. The housing, lens, and emitter belong to one device, not multiple units. No brand, logo, label, serial number, display, readable text, screen, cable, tether, arm, claw, cage, net, sampler, trap, or vehicle.
    Light sheet and spatial relationship: The integrated emitter produces one soft thin pale blue-green sheet of light across a limited patch of open water. It should read as gentle optical illumination rather than a solid wall, spotlight cone, scanning grid, scale lasers, or science-fiction beam. Place the animal and device on opposite sides of a clearly visible water gap. They do not touch; the device does not surround, block, chase, trap, hold, or capture the animal. The light softly grazes part of the animal and nearby particles without obscuring its anatomy.
    Style/medium: Original photorealistic underwater field-research photography, sober museum-publication quality, realistic seawater optics, translucent living tissue, practical instrument materials, restrained processing; generalized scientific reconstruction rather than documentation of a named survey.
    Composition/framing: Exact 1536 x 1024 landscape, 3:2. Place the one complete comb jelly around the center-right in the middle distance and the one compact camera unit at the left edge-to-left third, smaller than the animal in the frame. Preserve a broad clear-water gap between them. Keep the animal visually primary, the device secondary, and every required object fully inside one uninterrupted frame.
    Lighting/mood: Dim diffuse blue ambient light with the gentle local light sheet adding controlled edge definition. Calm non-contact observation, no dramatic searchlight and no bioluminescent fantasy.
    Color palette: Deep slate blue, muted navy, nearly colorless transparent tissue, matte charcoal instrument housing, soft pale blue-green optical light; restrained saturation.
    Materials/textures: Soft hydrated gelatinous tissue with subtle organic folds, fine ciliary comb plates, faint wet canals, matte anodized instrument housing and one realistic glass optical port; never rigid, glossy, rubbery, acrylic, or plastic-looking.
    Constraints: exactly one complete adult Mnemiopsis leidyi; exactly one small unbranded optical imaging device; exactly one soft light sheet; animal and device remain physically separate; one coherent walnut-shaped body; two broad oral lobes; four smaller auricles; eight anatomically coherent longitudinal comb rows with camera-facing portions visible; zero other animals and zero people; opaque sRGB image; no claim about a specific expedition, date, abundance, distribution, population trend, capture, measurement, or taxonomic certainty; no readable text, numbers, map, coordinates, chart, labels, arrows, symbols, border, logo, signature, or watermark.
    Avoid: second camera, separate lamp, stereo camera pair, ROV, submarine, drone, diver, human hand, ship, buoy, platform, tripod forest, cable, tether, robot arm, claw, net, plankton net, bottle, trap, cage, suction sampler, aquarium, specimen jar, animal touching equipment, animal inside a frame, capture or entanglement, jellyfish umbrella or bell, medusa shape, cnidarian tentacles, long stinging tentacles, jellyfish oral arms, pyrosome colony, salp, plastic bag, acrylic sculpture, multiple comb jellies, fish, copepods or other wildlife, glowing coordinate grid, ruler lasers, map overlay, data dashboard, monitoring claim, rainbow neon, whole-body bioluminescence, CGI, illustration, painting, oversaturation.

Accepted edit prompt:

    Use case: precise-object-edit
    Asset type: Fauna Atlas Mnemiopsis leidyi in-situ optical-plankton-monitoring gallery source image, exact 1536 x 1024 horizontal 3:2
    Input images: Image 1: edit target, the supplied underwater monitoring scene
    Primary request: Edit only the illumination emitted by the small underwater optical imaging unit in Image 1.
    Change: Remove the current conical flashlight-like beam completely. Replace it with one soft, thin, pale blue-green optical light sheet emitted by the narrow integrated emitter beside the camera port. The light must be broad in one dimension and very thin in the perpendicular dimension, reading as a faint translucent planar slice of illuminated water seen at a slight oblique angle. Give the sheet soft feathered edges and low intensity; let it reveal only a limited plane of suspended particles and gently graze part of the comb jelly. Do not turn it into a spotlight cone, solid wall, glowing rectangle, fan of rays, two beams, scanning grid, or ruler lasers.
    Invariants: Preserve the exact 1536 x 1024 crop, camera angle, water color, particulate haze, lighting outside the edited sheet, and composition. Preserve exactly one complete adult Mnemiopsis leidyi in the center-right with the same transparent walnut-shaped body, two broad oral lobes, smaller auricles, coherent longitudinal comb rows, faint canals, pose, scale, and full silhouette. Preserve exactly one small matte-black unbranded imaging device at left with the same single housing, one camera port, one integrated emitter, position, scale, screws, and water gap from the animal. Keep the animal and device physically separate. Do not add, remove, duplicate, crop, reshape, relight, or move any subject.
    Style/medium: Photorealistic underwater field-research photography with realistic low-intensity light-sheet optics and restrained museum-publication processing.
    Constraints: change only the emitted illumination shape; exactly one light sheet; no new object or animal; no cable, tether, frame, net, sampler, trap, arm, diver, ROV, display, text, number, map, coordinate, label, arrow, border, logo, signature, or watermark; opaque sRGB final image.
    Avoid: conical beam, flashlight, spotlight, volumetric cone, searchlight, solid light wall, sharp graphic rectangle, laser pair, grid, scan overlay, science-fiction glow, animal contact, capture, entanglement, duplicate camera, separate lamp, second animal, CGI, illustration.
