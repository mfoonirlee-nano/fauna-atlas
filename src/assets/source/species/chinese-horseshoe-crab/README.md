# Chinese Horseshoe Crab image set

Codex's built-in image generation tool created these six source PNGs for the *Tachypleus tridentatus* profile. The set contains editorial reconstructions, not records of named animals, sites, feeding events, nests, recruitment or laboratory tests.

- Generated: 2026-08-27
- Source format after TinyPNG compression: 1536 × 1024, 8-bit sRGB PNG, fully opaque
- Runtime format: 1536 × 1024, 8-bit sRGB WebP without alpha
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`
- Research boundary: [`docs/research/chinese-horseshoe-crab-profile.md`](../../../../../docs/research/chinese-horseshoe-crab-profile.md)

## Frames

| Frame | Source file | Intended use |
| --- | --- | --- |
| 01 | `01-shallow-seabed-adult-portrait-source.png` | Adult female cover portrait on a shallow estuarine seabed |
| 02 | `02-seabed-foraging-trail-source.png` | Sediment probing and a shallow movement trail |
| 03 | `03-spawning-pair-at-tide-line-source.png` | One attached breeding pair near a sandy tide line |
| 04 | `04-buried-egg-cluster-cutaway-source.png` | Unlabelled buried-egg and hatchling cutaway reconstruction |
| 05 | `05-juvenile-nursery-mudflat-source.png` | One juvenile in a broad intertidal nursery landscape |
| 06 | `06-blue-hemolymph-and-amebocytes-source.png` | Conceptual hemolymph, amebocyte and clotting display |

## Evidence and depiction boundaries

- Frames 01 and 02 show representative adult females. The broad prosoma, angular opisthosoma, posterior fixed-spine area and straight telson support the intended identity, but generated images cannot replace specimens, a taxonomic key or counts of movable and fixed spines.
- Frame 02 shows one disturbed sediment trail. It cannot identify prey, prove a feeding event, measure intake or represent the full diet.
- Frame 03 reconstructs one attached pair. The obscured ventral contact does not expose or validate the male's two pairs of claspers, prove fertilization, define a sex ratio or represent a named spawning beach.
- Frame 04 is a museum-style cutaway. Egg number, egg size, burial depth, embryo stage, incubation time and hatchling scale are illustrative rather than measurements.
- Frame 05 contains no ruler or known-size object. The animal and habitat explain the nursery-ground concept but do not provide age, density, growth, site identity or recruitment trend.
- Frame 06 is a conceptual laboratory display, not a product, specimen micrograph, collection protocol or validated assay result. It does not show an animal being bled.
- The English name “Chinese Horseshoe Crab” refers here to *Tachypleus tridentatus*. The set must not be reused as a visual record of *Limulus polyphemus*, *Tachypleus gigas* or *Carcinoscorpius rotundicauda*.
- No frame contains readable text, a logo or a watermark.

## Final prompt records

### 01 · Shallow-seabed adult portrait

The final source combines the base generation with one targeted anatomical correction.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Horseshoe Crab cover image, exact landscape 3:2 composition intended for 1536 x 1024
Primary request: Create one original photorealistic natural-history underwater photograph of exactly one complete adult female Chinese Horseshoe Crab, Tachypleus tridentatus, moving across a shallow East Asian estuarine sandy-mud seabed.
Scene/backdrop: Clear knee-deep coastal water over fine olive-gray sand and mud, faint ripple marks, a few tiny shell fragments, soft distant seagrass blur, generalized western Pacific estuary with no recognizable landmark or human trace.
Subject accuracy: One adult female Tachypleus tridentatus seen from a low three-quarter dorsal angle. Broad smooth olive-brown horseshoe-shaped prosomal shield with an intact rounded front margin and subtle lateral compound eyes; smaller trapezoidal opisthosoma with a central ridge, three small posterior median spines and three long movable marginal spines along each side; one long rigid straight triangular-section telson trailing behind. The prosoma, opisthosoma and telson read as three connected regions. A few dark jointed leg tips may show naturally beneath the shell. No antennae, no true crab body, no stinger.
Composition/framing: Place the entire animal in the right 60 percent, moving toward the left, around x=0.65 y=0.57. Keep the full front shield, every visible marginal spine and the complete telson inside generous margins. Leave calm underwater negative space on the left for page copy.
Style/medium: Original high-end scientific wildlife photography, museum-publication restraint, real worn carapace texture, fine suspended particles, subdued natural color.
Lighting/mood: Soft overcast daylight filtered through shallow water, calm field observation.
Constraints: Exactly one living animal; complete coherent Tachypleus tridentatus anatomy; no handling; no text, labels, arrows, ruler, logo, signature, border or watermark. Generated reconstruction, not an occurrence record.
Avoid: American Horseshoe Crab Limulus polyphemus, Mangrove Horseshoe Crab Carcinoscorpius rotundicauda, Tachypleus gigas, rounded short telson, stingray, turtle, trilobite fossil, true crab claws on top, lobster antennae, scorpion tail, fluorescent blue shell, eggs, other animals, people, fishing gear, aquarium glass, specimen board, CGI, illustration, painting, oversaturation.
```

Correction pass:

```text
Use case: precise-object-edit
Input images: Image 1 is the edit target, a single adult female Tachypleus tridentatus underwater cover photograph.
Primary request: Correct only the opisthosomal marginal spines and posterior fixed-spine field marks while preserving the animal, setting, camera, lighting, composition, shell texture and complete telson.
Required anatomical correction: This is an adult female Chinese Horseshoe Crab. On each side of the smaller angular opisthosoma, retain exactly three clearly prominent long movable lateral spines; reduce the other posterior lateral spines to tiny low vestiges that do not read as a row of long teeth. At the posterior center where the opisthosoma joins the telson, show exactly three small fixed spines, one median and one on each side. Preserve the broad intact rounded female prosomal front margin.
Constraints: Change only these spine details. Keep exactly one animal, its full body and long straight telson, right-weighted framing, negative space, underwater realism and all other pixels as consistent as possible. No text, labels, arrows, logo or watermark.
Avoid: six or more equally long spines per side, saw-blade fringe, male anterior notch, new animals, crop changes, color changes, stylization.
```

### 02 · Seabed foraging trail

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Horseshoe Crab feeding gallery image 2 of 6, exact landscape 3:2 intended for 1536 x 1024
Primary request: Create an original natural-history underwater photograph of exactly one complete adult female Tachypleus tridentatus slowly foraging through a shallow East Asian estuarine sandy-mud bottom.
Scene/backdrop: Clear shallow coastal water over fine brown-gray sand and mud, sparse shell grit, one shallow winding furrow behind the animal where it disturbed the surface, no recognizable locality or human trace.
Subject/action accuracy: One adult female Chinese Horseshoe Crab in a low front three-quarter view. Broad intact rounded olive-green horseshoe-shaped prosoma, smaller angular opisthosoma with three prominent movable marginal spines on each side and three tiny fixed posterior spines, complete long straight triangular-section telson. The front shield lifts slightly while hidden jointed appendages work beneath it; only a few natural leg tips show. No captured prey and no exposed mouth.
Composition/framing: Whole animal moving diagonally across the center-right toward the left foreground, complete telson inside frame. Keep the shallow feeding furrow visible behind it and leave open seabed around the subject.
Style/medium: Photorealistic professional benthic wildlife photography, natural worn shell texture, restrained museum-publication color.
Lighting/mood: Diffuse shallow-water daylight, patient field observation.
Evidence boundary: Reconstructs bottom probing and a disturbed sediment trail only; it does not identify prey, measure intake or represent the full diet.
Constraints: Exactly one animal, coherent Tachypleus tridentatus anatomy, no other animal, no text, labels, arrows, logo, signature, border or watermark.
Avoid: eating fish, exposed worm or clam in mouth, giant excavation cloud, Limulus polyphemus, Carcinoscorpius rotundicauda, saw-blade fringe, short rounded telson, stingray, turtle, true crab, aquarium, people, fishing gear, CGI, illustration, painting, oversaturation.
```

### 03 · Spawning pair at the tide line

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Horseshoe Crab spawning gallery image 3 of 6, exact landscape 3:2 intended for 1536 x 1024
Primary request: Create an original scientifically grounded natural-history photograph of exactly one mating pair of Tachypleus tridentatus moving together across a gently sloping fine-to-medium sand beach under shallow incoming tide.
Scene/backdrop: Generalized western Pacific estuarine beach at dusk, clear ankle-deep water washing across compact wet sand near the high-tide line, soft wavelets, no landmark or human trace.
Subjects/action accuracy: Exactly two complete adult Chinese Horseshoe Crabs. A larger broad female is in front and below, with an intact rounded prosomal front margin, three prominent movable marginal spines on each side and a full straight telson. One smaller male rides directly behind, aligned with her body, using two paired hook-like front appendages beneath his shell to clasp the lateral rear edge of her opisthosoma; his prosomal front margin has a paired notch and his opisthosoma has six prominent marginal spines per side. Both olive to green-brown. Keep both telsons complete, straight and visibly separate. The pair approaches nesting sand; no eggs are visible at the surface.
Composition/framing: Low oblique side-dorsal view, pair centered with room for the full telsons and a quiet shoreline context. Female remains visibly larger.
Style/medium: Photorealistic coastal wildlife documentary, sober natural color and fine wet-shell texture.
Lighting/mood: Cool dusk skylight with a restrained warm horizon reflection, calm breeding migration.
Evidence boundary: Shows one representative attached pair at a nesting shore; it does not establish a named site, sex ratio, spawning success, clutch size or population density.
Constraints: Exactly two animals in one attached pair; no satellite males, no exposed eggs, no text, labels, arrows, logo, signature, border or watermark.
Avoid: face-to-face mating, belly-to-belly mating, fused shells, sexual organs, crowd of horseshoe crabs, Limulus-style satellite-male aggregation, mangrove mudbank nesting, turtles, true crabs, people, beach lights, aquarium, CGI, illustration, painting, oversaturation.
```

### 04 · Buried egg cluster cutaway

```text
Use case: scientific-educational
Asset type: Fauna Atlas Chinese Horseshoe Crab egg and hatchling gallery image 4 of 6, exact landscape 3:2 intended for 1536 x 1024
Primary request: Create an original unlabeled naturalistic museum cutaway reconstruction of a shallow Tachypleus tridentatus egg cluster buried beneath a western Pacific estuarine spawning beach.
Scene/backdrop: Cross-section through compact fine-to-medium wet sand near the high-tide line. The upper quarter shows a thin receding wave and undisturbed ripple marks. Below the surface, one small shallow pocket holds a compact cluster of separated round eggs surrounded by moist sand.
Eggs and hatchling accuracy: Many small spherical eggs in muted pale olive and amber, each distinct and embedded in sand rather than linked like grapes. Several eggs remain opaque; a few late-stage eggs subtly reveal curled horseshoe-crab embryos. Beside the cluster, exactly one newly hatched first-instar trilobite larva rests in a thin water-filled pore, with a small broad rounded three-lobed shield and no adult-length telson. No adult animal and no human object.
Composition/framing: Sand surface across the top; the egg pocket occupies the central lower half with clear spatial separation between eggs, one embryo-bearing egg and the single hatchling. No scale bar.
Style/medium: Photorealistic natural-history museum diorama cutaway, plausible wet sediment and soft translucency, scientific restraint.
Lighting/mood: Neutral educational illumination with natural daylight above.
Evidence boundary: Conceptual reconstruction of buried eggs and an early hatchling; it does not define clutch size, exact burial depth, development time, survival or a real nest.
Constraints: One compact egg cluster and exactly one hatchling; no text, labels, arrows, numbers, logo, signature, border or watermark.
Avoid: sea-turtle nest, giant eggs, gelatinous frogspawn, grape bunch, eggs scattered on the beach surface, adult miniature with a long tail, fossil trilobite, red embryo, gore, hands, tools, CGI game art, cartoon illustration, oversaturation.
```

### 05 · Juvenile nursery mudflat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Horseshoe Crab nursery gallery image 5 of 6, exact landscape 3:2 intended for 1536 x 1024
Primary request: Create an original low-tide field photograph of exactly one complete juvenile Tachypleus tridentatus moving through its shallow intertidal nursery habitat.
Scene/backdrop: A broad sheltered East Asian estuarine mudflat covered by a few millimeters of clear water, fine sandy mud, small seagrass patches and a narrow distant tidal creek; habitat dominates, no recognizable locality or human trace.
Juvenile accuracy: One small later-stage juvenile Chinese Horseshoe Crab with a broad olive-brown horseshoe-shaped prosoma, smaller angular opisthosoma, six slender movable marginal spines on each side, three small posterior fixed spines and one complete narrow straight telson. Juvenile proportions remain compact; no adult male front-margin notch and no clasping hooks. A faint trail marks its movement through the wet surface.
Composition/framing: Wide low-angle habitat view, juvenile near x=0.60 y=0.63 and fully visible, with ample mudflat and shallow-water context. No ruler or object that fixes size.
Style/medium: Photorealistic coastal ecology documentary, understated scientific-publication colors, natural moist shell and sediment detail.
Lighting/mood: Soft overcast post-ebb morning, quiet nursery-ground observation.
Evidence boundary: The frame shows one representative juvenile and suitable habitat; it does not provide age, growth rate, density, site identity or recruitment trend.
Constraints: Exactly one juvenile and no other animal, full body and telson, no text, labels, arrows, logo, signature, border or watermark.
Avoid: adult female with only three long marginal spines, adult male notch, hatchling without tail, open-ocean swimming, deep water, freshwater pond, dry cracked mud, true crab, turtle, fossil trilobite, people, nets, aquarium, CGI, illustration, painting, oversaturation.
```

### 06 · Blue hemolymph and amebocytes

```text
Use case: scientific-educational
Asset type: Fauna Atlas Chinese Horseshoe Crab hemolymph gallery image 6 of 6, exact landscape 3:2 intended for 1536 x 1024
Primary request: Create an original unlabeled museum-quality scientific visualization explaining oxygenated blue hemolymph, granular amebocytes and endotoxin-triggered clotting in Tachypleus tridentatus without depicting animal bleeding or a test protocol.
Scene/backdrop: Clean neutral charcoal-gray laboratory display surface with soft cool illumination, no branding.
Subject/layout: A restrained three-part still life. Left: one small clear sterile glass vial containing a modest amount of translucent, faintly opalescent pale sky-blue hemolymph, not neon. Center: one large circular microscope-field visualization showing several round to oval horseshoe-crab amebocytes filled with fine and coarse cytoplasmic granules suspended in pale blue fluid, with no red blood cells. Right: one second clear vial containing a pale blue-gray opaque gel clot to represent an activated amebocyte-lysate reaction. A subtle embossed outline of a three-part Tachypleus tridentatus dorsal shield and straight telson appears on the display base as a species context mark, without text.
Composition/framing: Landscape scientific still life with three clean visual zones and generous spacing; vials upright and microscope field crisp.
Style/medium: Photorealistic laboratory still life combined with restrained high-detail microscopy visualization, accurate material optics, educational and sober.
Lighting/mood: Soft controlled lab light, neutral evidence display.
Evidence boundary: Shows the concepts of blue oxygenated hemolymph, amebocytes and clot formation; it does not show extraction, identify a commercial product, prescribe a method or measure diagnostic performance.
Constraints: No animal body, no needle, no syringe, no wound, no blood collection, no bacteria being killed, no readable text, labels, numbers, logo, signature, border or watermark.
Avoid: red blood cells, red liquid, fluorescent electric blue, glowing magic fluid, pharmaceutical brand, branded LAL kit, injection, animal restraint, gore, petri-dish colony, molecular formula, cartoon cells, infographic arrows, oversaturation.
```

## Static visual acceptance

- All six source PNGs and runtime WebPs decode at 1536 × 1024 in sRGB and report fully opaque pixels.
- Frames 01 and 02 contain one complete adult with a full straight telson. Frame 02 contains no visible prey.
- Frame 03 contains two attached animals with both telsons visible and no surface eggs or extra animals.
- Frame 04 contains one buried egg cluster and one hatchling reconstruction without labels or a scale bar.
- Frame 05 contains one complete juvenile in a broad shallow-water mudflat scene.
- Frame 06 contains two unbranded vials and one microscopy field. It shows no animal, needle, wound, extraction or readable label.
- No frame contains readable text, a logo or a watermark.
