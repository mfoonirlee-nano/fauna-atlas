# Japanese Planarian image set

Codex's built-in image generation tool created these six original project images on 2026-08-31 for the complete Fauna Atlas *Dugesia japonica* profile. They reconstruct a shaded freshwater-stream microhabitat, external morphology, pharyngeal feeding, transverse fission, head-and-tail regeneration, and stereomicroscope observation. They do not document named animals, sites, field collections, laboratory strains, experiments, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/japanese-planarian/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG returned HTTP 429, so the documented local fallback used `pngquant --quality=80-95 --speed 1 --force --strip`
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-stream-stone-cover-source.png` | `01-stream-stone-cover.webp` | One complete brown flatworm lies diagonally on the right side of a dark submerged stone, leaving soft streambed depth and negative space on the left |
| 02 | `02-triangular-head-eyespots-source.png` | `02-triangular-head-eyespots.webp` | One complete dorsal-view animal shows a broad triangular head, paired lateral auricles, two dark eyespots in pale fields, a smooth flattened body, and a tapered tail |
| 03 | `03-pharynx-feeding-source.png` | `03-pharynx-feeding.webp` | One complete animal beneath a stone extends one pale ventral tube into contact with one red segmented larva |
| 04 | `04-transverse-fission-source.png` | `04-transverse-fission.webp` | One head-bearing anterior fragment and one rounded posterior fragment remain fully separated across a narrow water gap, with clean opposed cut faces and no blood |
| 05 | `05-head-tail-regeneration-source.png` | `05-head-tail-regeneration.webp` | Two separated flatworm forms rest in a clear dish: one retains a triangular head and two eyespots, while the other lacks eyespots and has a pale broadened end |
| 06 | `06-stereomicroscope-observation-source.png` | `06-stereomicroscope-observation.webp` | One elongated head-bearing worm and two smaller separated pieces rest in a clear dish beneath an unbranded stereomicroscope objective |

## Static verification

The final PNG and WebP pairs passed original-size visual inspection on 2026-08-31. All 12 files decode at 1536 × 1024 in sRGB, are opaque and single-frame, and have distinct SHA-256 hashes.

## Evidence boundaries

- A generated brown, triangular-headed flatworm cannot replace a preserved voucher, reproductive-anatomy examination, karyotyping, or molecular identification of *Dugesia japonica*.
- Head shape, lateral auricles, two eyespots, and dorsal pigmentation make the animal readable as a freshwater planarian. Those traits do not distinguish this species from every similar triclad.
- Frame 01 does not establish Japan, a named stream, water chemistry, altitude, abundance, or wild occurrence. The streambed is a generalized habitat reconstruction.
- Frame 03 shows contact between a protruded tube and a red larva. It does not identify the prey, demonstrate ingestion, or measure prey preference, handling time, feeding rate, or digestive function.
- Frame 04's straight opposed separation faces can also resemble experimental cuts. The runtime caption treats the image as an undiagnostic fragment comparison: it does not establish whether an animal divided voluntarily, how division progressed, or whether either piece survived and regenerated.
- Frame 05 does not provide elapsed time, a pre-cut state, a lineage trace, or a measured regeneration outcome. The two forms reconstruct head- and tail-fragment comparison.
- Frame 06 does not identify a laboratory, strain, protocol, instrument model, sample size, treatment, measurement, or experimental result. The microscope and dish are generic.
- Frame 06's prompt says "six total eye spots" but then enumerates two on the intact animal, two on the anterior fragment, and none on the posterior fragment. The accepted image follows the enumerated anatomy and contains four eye spots; the contradictory total is retained below so the generation record stays exact.
- No frame establishes body length, age, sex, reproductive mode, lineage, collection date, or locality from appearance alone.

## Shared morphology anchor

The prompts repeated these constraints:

    Depict Dugesia japonica as a small dorsoventrally flattened, unsegmented warm-brown freshwater flatworm with a broad triangular arrow-shaped head, paired lateral auricles, exactly two dark eyespots in pale pigment-free fields, a smooth elongated body, and a tapered posterior end. Avoid annuli, segmentation, legs, bristles, parapodia, leech suckers, tentacles, antennae, shells, text, logos, and watermarks. Keep every requested animal or fragment physically separated, fully inside the frame, and anatomically coherent.

## Final prompts

### 01 · Shaded stream stone cover

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Japanese planarian species-profile cover, original project source image
    Primary request: Create a scientifically restrained natural-history macro photograph of exactly one complete living Japanese planarian, Dugesia japonica, gliding underwater across the upper surface of a dark wet stream stone in a generalized Japanese lowland freshwater brook.
    Scene/backdrop: shallow clear flowing freshwater over dark rounded stones, muted submerged leaf fragments, soft green-brown depth falloff, sparse natural suspended particles; no identifiable landmark and no other animals.
    Subject: exactly one entire Dugesia japonica fully inside the frame. Show a small unsegmented dorsoventrally flattened ribbon-like flatworm, warm ochre-brown to amber-brown dorsal surface with subtle mottling, translucent thin margins, a distinctly triangular arrowhead-shaped head, two short broad lateral auricles, exactly two small dark eye spots set on pale halos, a smooth tapering posterior end, and a thin mucus contact line against the stone. Keep anatomy organic and understated.
    Style/medium: photorealistic underwater freshwater macro photography, documentary field-image realism, sober museum-publication quality, natural optical imperfections, no illustration or CGI finish.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Place the complete planarian at readable macro scale in the right-hand midground, head facing toward center-left, body gently curved but not coiled. Leave calm darker water and stone texture across the left half for page typography. Keep clear margins around the full animal.
    Lighting/mood: soft diffuse daylight filtered through rippling stream water, restrained highlights, quiet observational mood.
    Color palette: charcoal stone, muted olive and moss green, tea-brown water reflections, natural amber-brown animal.
    Materials/textures: soft hydrated living tissue, translucent margins, wet mineral grain, faint mucus sheen; never plastic, rubber, glass, hard shell, scales, segments, bristles, or veins.
    Constraints: exactly one complete animal; exactly two eye spots; one triangular head with two lateral auricles; unsegmented flat body; fully opaque sRGB PNG; no text, labels, arrows, scale bar, logos, borders, signature, or watermark. This is a generalized original reconstruction, not documentation of a named site or specimen.
    Avoid: earthworm, leech, slug, snail, nematode, fish, tadpole, insect larva, marine flatworm with bright colors, branching body, tentacles, antennae, limbs, mouth on the head, visible injury, amputation, regeneration, blood, gore, aquarium glass, laboratory dish, duplicate animal, cropped body, extra eyes, human hand, oversaturation, fantasy glow.

### 02 · Triangular head and eyespots

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Japanese planarian diagnostic gallery source image
    Primary request: Create a scientifically faithful dorsal macro photograph of exactly one complete living Japanese planarian, Dugesia japonica, emphasizing the external features used to recognize its planarian form without turning the image into a diagram.
    Scene/backdrop: shallow clear freshwater over a smooth dark neutral submerged stone, minimal soft-focus mineral texture, no other organisms.
    Subject: exactly one entire animal fully inside the frame, seen from directly above with a slight low oblique perspective. It is a small unsegmented dorsoventrally flattened elongated leaf-like flatworm, gray-brown to warm brown with subtle translucent margins. Show one low triangular head, exactly two short rounded lateral auricles, exactly two black eye spots each bordered by a small pale crescent, a smooth narrow body, and one tapered posterior end. Its body stays in contact with the wet stone as it glides; no raised swimming pose. Preserve slight living asymmetry and a faint mucus edge.
    Style/medium: high-resolution photorealistic freshwater macro photography, field-guide diagnostic clarity, sober museum-publication quality, no illustration or CGI finish.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Center the complete animal at large readable scale, head toward the left, body gently curved, with generous clean margins around every edge. Do not crop the tail or auricles.
    Lighting/mood: soft diffuse cool daylight with restrained lateral definition and natural underwater optics.
    Color palette: deep neutral charcoal stone, muted gray-brown animal, pale beige translucent margins.
    Materials/textures: soft hydrated tissue, smooth unsegmented dorsal surface, delicate transparent margins; no scales, shell, bristles, rings, veins, plastic, rubber, or glass.
    Constraints: exactly one complete Dugesia japonica; exactly two eye spots; one triangular head; exactly two short lateral auricles; full body intact and in contact with substrate; fully opaque sRGB PNG; no text, labels, arrows, numbers, scale bar, logo, border, signature, or watermark. The frame shows visible morphology only and cannot establish a species identification or calibrated body size.
    Avoid: vertebrate eyeballs, iris, pupils with large highlights, eyelashes, smiling face, mouth on the head, long antennae, tentacles, slug, leech, earthworm, nematode, marine polyclad, bright pattern, segments, limbs, injury, regeneration, cutaway anatomy, petri dish, duplicate animal, extra eyes, fantasy glow.

### 03 · Protrusible pharynx feeding

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Japanese planarian feeding gallery source image
    Primary request: Create a scientifically restrained underwater macro photograph of one complete living Japanese planarian, Dugesia japonica, feeding on one small red chironomid larva with its protrusible pharynx on the shaded underside of a freshwater stone.
    Scene/backdrop: dim clear freshwater beneath the overhang of one dark stream stone, muted mineral grains and one tiny softened leaf fragment, no other organisms.
    Subject: exactly one entire gray-brown to amber-brown Dugesia japonica fully visible and pressed flat against the stone. It has an unsegmented leaf-like body, one low triangular head, two short rounded lateral auricles, and exactly two small dark eye spots. Near the middle-to-posterior part of its paler ventral surface, show one short pale muscular tubular pharynx protruding downward and contacting exactly one small red chironomid larva beside the body. The pharynx must emerge from the ventral mid-body, far behind the head. The larva remains small, recognizable, and intact; show no blood or tearing.
    Style/medium: photorealistic freshwater macro natural-history photography, restrained biological documentary realism, museum-publication quality, no illustration or CGI finish.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Use a readable oblique underside view that keeps the planarian's full silhouette, head, tail, and mid-body pharynx visible. Place the animal center-right and the single larva near the pharynx, with water and stone margins around both.
    Lighting/mood: soft dim diffuse stream light, calm clinical observation, enough local contrast to distinguish the pale pharynx.
    Color palette: charcoal and olive-gray stone, warm gray-brown animal, off-white pharynx, restrained dark red larva.
    Materials/textures: soft hydrated flatworm tissue, translucent margins, fine wet stone, delicate insect-larval body; no plastic, rubber, hard shell, scales, or gloss.
    Constraints: exactly one complete planarian and exactly one chironomid larva; exactly one short pale pharynx emerging from the ventral middle-to-posterior body and touching the food; exactly two eye spots; no injury, blood, gore, teeth, jaws, suction cup, venom, or visible internal organs; fully opaque sRGB PNG; no text, labels, arrows, scale bar, logo, border, signature, or watermark. The image reconstructs feeding mechanics and does not prove diet frequency, capture rate, or prey preference.
    Avoid: mouth or proboscis extending from the head, elephant trunk, long tongue, tentacle, teeth, biting, sucking disc, branching gut shown outside the body, prey swallowed whole, torn larva, multiple prey, fish, snail, worm swarm, slug, leech, earthworm, parasite, cropped animal, extra eyes, duplicate animal, laboratory equipment, fluorescence, fantasy glow.

### 04 · Transverse fission

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Japanese planarian asexual-fission gallery source image
    Primary request: Create a scientifically restrained freshwater macro photograph of one Dugesia japonica at the instant just after natural transverse fission on a smooth submerged stone, showing exactly two newly separated living body pieces: one anterior head piece and one posterior tail piece.
    Scene/backdrop: shallow clear freshwater on one dark smooth stream stone, soft gray-green depth gradient, a few tiny suspended particles, no other animals.
    Subject: exactly two adjacent pieces belonging to the same fission event. The anterior piece retains one low triangular head, two short rounded auricles, exactly two black eye spots, and a gray-brown flattened unsegmented body ending at one clean transverse separation edge. The posterior piece has no head and no eye spots, tapers to the original tail, and begins at one matching clean transverse separation edge. Keep a narrow visible water gap between the two pieces. Both pieces remain flat against the stone and show soft living tissue with sealed smooth pale edges; no blood, no exposed organs, no blastema, and no already regrown head or tail.
    Style/medium: photorealistic underwater freshwater macro photography, sober biological observation, museum-publication quality, no illustration or CGI finish.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Show the two matching pieces near the center in one continuous scene, aligned along their original anterior-posterior axis with a small gap. Keep every edge of both pieces inside the frame with generous stone margins.
    Lighting/mood: soft diffuse cool daylight, clinical restraint, no dramatic effects.
    Color palette: charcoal stone, muted gray-brown tissue, pale beige sealed separation margins.
    Materials/textures: soft hydrated flattened tissue, translucent margins, wet mineral grain; never rubber, plastic, glass, shell, segments, scales, or bristles.
    Constraints: exactly two body pieces, one eyed anterior piece and one eyeless posterior piece, representing one natural transverse-fission event; exactly two total eye spots; one small gap; smooth closed non-bloody separation surfaces; fully opaque sRGB PNG; no other worms, no duplicate heads, no regenerated structures, no text, labels, numbers, arrows, scale bar, inset, panel divisions, border, logo, signature, or watermark. The image depicts a generalized event and cannot establish timing or reproduction rate.
    Avoid: surgical cut, blade, scissors, human hand, blood, gore, open organs, mouth at wound, eggs, mating, live birth, embryo, three or more fragments, two intact planarians, two heads, two tails on one fragment, branching animal, fantasy duplication, glowing wound, petri dish, laboratory equipment, leech, earthworm, slug, parasite.

### 05 · Head and tail regeneration

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Japanese planarian regeneration gallery source image
    Primary request: Create a restrained scientific macro photograph of exactly two separate living Dugesia japonica regeneration fragments resting side by side on the clean bottom of an unmarked shallow laboratory culture dish: one anterior head fragment regenerating a tail, and one posterior tail fragment regenerating a head.
    Scene/backdrop: clear conditioned freshwater in one plain transparent unbranded culture dish over a matte neutral slate background; no hands, tools, labels, numbers, ruler, or other specimens.
    Subjects: exactly two distinct flat gray-brown unsegmented tissue fragments with a clear water gap between them. Fragment A is an anterior piece with one triangular head, two short rounded auricles, exactly two black eye spots, old pigmented tissue, and a small continuous pale blastema forming a smooth tapered tail at its posterior wound. Fragment B is a posterior piece with the original tapered tail, no old head, and a small continuous pale anterior blastema beginning to form a low head outline; do not show mature eye spots on this new head. Both pieces have sealed smooth contours with no blood or visible organs. The pale blastemas are non-luminous living tissue continuous with each fragment.
    Style/medium: photorealistic laboratory macro photography, natural-history research documentation, restrained museum-publication quality, no infographic, illustration, or CGI finish.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. One uninterrupted overhead-oblique view of the dish floor. Place the two fragments parallel with ample clean water around each; keep every body edge fully visible. No time-series panels.
    Lighting/mood: soft even transmitted laboratory light with gentle edge definition, calm and clinical.
    Color palette: neutral slate and clear water, muted gray-brown old tissue, subtle milky beige blastema.
    Materials/textures: soft hydrated flatworm tissue and smooth continuous new tissue; no plastic-looking body, hard shell, scar, clot, scales, segments, or fluorescence.
    Constraints: exactly two fragments; Fragment A has the only two mature eye spots in the entire image and a small tail blastema; Fragment B has no eye spots and a small head blastema; both wound edges closed and bloodless; one plain dish; fully opaque sRGB PNG; no complete third worm, no multiple stages, no text, labels, arrows, numbers, scale bar, grid, panel border, logo, signature, or watermark. The frame reconstructs two compatible regeneration states and does not prove elapsed time, regeneration rate, cell identity, or outcome.
    Avoid: instant full regrowth, two-headed worm, double tail, extra eyes, mature head on posterior fragment, glowing tissue, stem-cell icons, visible individual cells, medical organs, blood, gore, exposed intestine, blade, scissors, forceps, pipette, human hand, embryo, eggs, fission in progress, duplicate fragment, earthworm, leech, slug, parasite, fantasy cloning.

### 06 · Stereomicroscope observation

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Japanese planarian non-contact research gallery source image
    Primary request: Create an original scientifically restrained laboratory photograph of Dugesia japonica being observed without contact through a stereomicroscope, with one complete planarian and two regeneration fragments in a single shallow culture dish.
    Scene/backdrop: clean dim biological laboratory bench, one plain transparent unbranded shallow culture dish filled with clear conditioned freshwater beneath the objective of one compact stereomicroscope. Microscope body stays soft-focus and secondary; no people or identifying lab.
    Subjects in the dish: exactly three separated living specimens with broad water gaps. Specimen 1 is one complete intact gray-brown Dugesia japonica with a low triangular head, two short rounded auricles, exactly two dark eye spots, unsegmented flattened body and tapered tail. Specimen 2 is one small anterior head fragment with exactly two eye spots and a closed pale posterior blastema. Specimen 3 is one small eyeless posterior tail fragment with a closed pale anterior blastema. All stay flat on the dish bottom; no specimen touches another.
    Imaging relationship: the microscope objective remains above the water and does not touch, hold, cut, or trap the animals. A soft circular illumination field falls across part of the dish. No overlaid cell symbols: neoblasts are not visible to the naked eye.
    Style/medium: photorealistic biological laboratory documentary photography, restrained museum-publication quality, practical optics and natural specimen texture, no illustration or CGI finish.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Frame the dish and specimens in crisp foreground at center-right; place the single microscope objective in the upper-left background with a clear air gap above the dish. Keep all three specimens and the entire dish rim readable.
    Lighting/mood: soft neutral microscope illumination and subdued ambient bench light, calm non-contact observation.
    Color palette: neutral charcoal and cool gray equipment, clear water, muted gray-brown animals, pale beige blastemas; restrained saturation.
    Materials/textures: soft hydrated flatworm tissue, clean glass or clear lab polymer dish, matte metal objective; never rubbery animals or science-fiction machinery.
    Constraints: exactly one complete planarian plus exactly two fragments in exactly one dish; six total eye spots, two on the complete animal, two on the anterior fragment, none on the posterior fragment; one microscope objective that remains separate from the water; no human, tool contact, injury, blood, loose organs, visible cells, text, numbers, labels, screens, charts, brand, logo, ruler, arrows, border, signature, or watermark; fully opaque sRGB PNG. This is a generalized research reconstruction, not evidence for a named experiment, gene, result, time point, or medical application.
    Avoid: microscope lens touching water, surgical scene, forceps, pipette in dish, blade, scissors, gloved hand, injection, fluorescent neon, cell icons, DNA helix, human organs, two-headed animal, uncontrolled fragment swarm, specimen jar, petri-dish labels, data overlay, monitor text, duplicate microscope, fantasy regeneration, CGI, illustration.
