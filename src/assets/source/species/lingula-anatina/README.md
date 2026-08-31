# Lingula anatina image set

Codex's built-in image generation tool created these six original project images on 2026-08-31 for the complete Fauna Atlas *Lingula anatina* profile. They reconstruct a soft-sediment burrow opening, exposed shell and pedicle, a vertical-burrow cutaway, spirolophe anatomy, an early shelled stage, and a quadrat survey. They do not document named animals, sites, collections, experiments, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/lingula-anatina/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG returned HTTP 429, so the documented local fallback used `pngquant --quality=80-95 --speed 1 --force --strip`
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-tidal-flat-burrow-cover-source.png` | `01-tidal-flat-burrow-cover.webp` | One low mound and opening interrupt a shallow silty tidal flat; only the uppermost olive-green portion of one shell and its fine marginal setae remain above the sediment |
| 02 | `02-shell-and-pedicle-diagnostic-source.png` | `02-shell-and-pedicle-diagnostic.webp` | One complete elongated olive-green shell lies in a shallow submerged specimen tray with one long pale flexible pedicle extending from its posterior end |
| 03 | `03-vertical-burrow-cutaway-source.png` | `03-vertical-burrow-cutaway.webp` | One shell sits close to the surface of a single near-vertical, mucus-lined, closed-bottom tunnel; one pedicle descends to an enlarged sand-bound anchoring end |
| 04 | `04-spirolophe-suspension-feeding-source.png` | `04-spirolophe-suspension-feeding.webp` | A transparent observational window in one shell reveals two symmetric coiled lophophore arms and the mouth region between them |
| 05 | `05-two-pair-cirri-juvenile-source.png` | `05-two-pair-cirri-juvenile.webp` | One transparent oval early shelled form bears four simple unbranched ciliated cirri and one restrained median ciliary tuft in a neutral microscope field |
| 06 | `06-three-opening-photo-survey-source.png` | `06-three-opening-photo-survey.webp` | One white quadrat surrounds exactly one central cluster of three surface openings in a shallow muddy flat while an unbranded camera records from behind |

## Static verification

The final PNG and WebP pairs passed original-size visual inspection on 2026-08-31. All 12 files decode at 1536 × 1024 in sRGB, are opaque and single-frame, and have distinct SHA-256 hashes.

## Evidence boundaries

- A generated tongue-shaped green shell and pedicle cannot replace a preserved voucher, soft-part anatomy, collection metadata, or molecular identification. The nominal *L. anatina* includes unresolved lineages.
- Frame 01 establishes only a generalized soft-sediment burrow scene. It cannot identify the animal, location, salinity, sediment grain size, burrow depth, occupancy, or tidal state.
- Frame 02 separates the shell and pedicle visually. It cannot establish live extension, a fixed shell-to-pedicle ratio, age, sex, locality, or species identity from color alone.
- Frame 03 is a sectional reconstruction, not a naturally transparent sediment profile. It illustrates relative placement but cannot establish exact dorsal-ventral valve orientation, dimensions, tunnel geometry, mucus thickness, or anchoring mechanics.
- Frame 04 uses an artificial transparent window. It illustrates two spiral lophophore arms but cannot show ciliary motion, water-flow rate, particle selection, ingestion, or a measured feeding result.
- Frame 05 reconstructs one stage described from artificially cultured Amami material whose species identity remains unresolved. It cannot establish natural age, duration, chromosome number, or a universal development sequence for strict *L. anatina*.
- Frame 06's three-hole cluster is only a repeatable surface observation. It cannot confirm species, occupancy, tunnel connectivity, animal count, abundance, or trend without excavation, vouchers, and repeated sampling.
- No frame establishes the broad geographic range, conservation status, population trend, lifespan, reproductive season, or the age of the *Lingula* lineage.

## Shared morphology anchor

The prompts repeated these constraints:

    Depict Lingula anatina as a small inarticulate brachiopod with one thin elongated tongue-shaped olive- to deep-green shell, subtle concentric growth texture, a nearly straight to gently rounded anterior margin, fine marginal setae only where biologically plausible, and one long flexible pale fleshy pedicle extending from the posterior. It is not a clam, mussel, gastropod, plant shoot, worm, fish, or fossil. Avoid left-right bivalve gaping, a hinge with teeth, a siphon, a molluscan foot, segmentation, scales, eyes, face, limbs, labels, text, logos, and watermarks.

## Final prompts

### 01 · Tidal-flat burrow cover

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Lingula anatina species-profile cover, original project source image
    Primary request: Create one original scientifically grounded underwater natural-history macro photograph of a living duck's-bill lingula occupying its soft-sediment burrow in a generalized Indo-West Pacific intertidal flat.
    Scene/backdrop: shallow clear green-brown tidal water over compact fine silty sand, one low natural sediment mound and one subtle burrow opening, sparse suspended particles, no landmark and no other animal.
    Subject: exactly one Lingula anatina. Almost the whole animal remains buried. At the single opening, show only a narrow upper portion of one glossy translucent olive-green elongated shell and restrained fine marginal setae. The shell long axis continues near-vertically into the sediment; do not expose the pedicle.
    Style/medium: photorealistic underwater natural-history macro photography, sober field-documentary realism, natural optical haze and sediment texture, not an illustration or cutaway.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Place the opening near center-right, leave quiet sediment and water across the left, and keep the tiny exposed shell readable without turning it into a specimen portrait.
    Lighting/mood: soft diffuse tidal daylight, muted olive, gray-brown and sand tones, restrained contrast.
    Constraints: exactly one opening and one partly visible animal; one static opaque sRGB frame; no exposed full shell, pedicle, transparent sediment, diagram, text, arrows, scale bar, logo, signature, border, or watermark.
    Avoid: horizontal animal, clam, mussel, paired open shells, siphons, foot, plant sprout, bamboo shoot, worm, fish, crab, extra burrows, multiple shells, fossil, hand, aquarium, fantasy glow, oversaturation.

The first result exposed too much of the shell. Two built-in image edits corrected burial depth before acceptance.

#### Burial correction, pass 1

    Raise and naturally retouch the surrounding fine silty sediment so the lower 70 to 75 percent of the existing olive-green shell is buried. Preserve the shallow tidal water, one animal, one opening, restrained marginal setae, lighting, optics, and exact 1536 x 1024 landscape framing. Do not expose a pedicle or add any other hole, animal, text, label, arrow, scale bar, logo, border, or watermark.

#### Burial correction, accepted pass

    Bury the existing Lingula much deeper in the same sediment. Only the uppermost 15 percent of the olive-green shell and a little fine marginal setae may remain visible at the one low opening; retouch all formerly exposed shell area into continuous natural silt. Preserve one animal, one opening, shallow water, lighting, composition, exact 1536 x 1024 size, and opaque sRGB. Do not add extra holes, animals, a pedicle, transparent sediment, text, labels, arrows, logos, borders, or watermarks.

### 02 · Shell and pedicle diagnostic view

    Use case: scientific-educational
    Asset type: Fauna Atlas Lingula anatina diagnostic gallery source image
    Primary request: Create one original realistic submerged specimen-style photograph that clearly separates the external shell and pedicle of one living duck's-bill lingula without presenting a measured specimen.
    Scene/backdrop: one shallow unmarked glass observation tray under clear seawater on a neutral gray-beige laboratory surface, no hands, tools, labels, rulers, or other organisms.
    Subject: exactly one complete Lingula anatina laid gently in a natural shallow curve. Show one closed elongated tongue-shaped shell viewed mainly from one broad surface, thin and glossy olive to deep green with restrained concentric growth lines and a gently rounded anterior edge. From the narrow posterior end extends one continuous long pale flesh-colored flexible pedicle, smooth and unbranched, ending inside the frame. The shell and pedicle remain physically connected.
    Style/medium: photorealistic museum specimen photography with believable submerged optics and soft-tissue texture, not a diagram or preserved dry shell.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Keep the complete shell and complete pedicle inside the frame with clean negative space and no cropping.
    Constraints: exactly one animal, one visually closed shell and one connected pedicle; opaque sRGB; no second valve displayed separately, no bivalve gape, hinge teeth, siphons, molluscan foot, labels, text, arrows, scale bar, logo, border, signature, or watermark.
    Avoid: clam, mussel, razor shell, gastropod, plant root, intestine, segmented worm, severed pedicle, multiple animals, dissection, blood, fossil, plastic model, CGI, oversaturation.

### 03 · Vertical burrow cutaway

    Use case: scientific-educational
    Asset type: Fauna Atlas Lingula anatina burrow gallery source image
    Primary request: Create one original photorealistic museum cutaway reconstruction showing the relative position of one living Lingula anatina inside one near-vertical soft-sediment burrow.
    Scene/backdrop: a clean vertical section through compact fine sandy mud beneath a shallow tidal-flat surface. Show one narrow mucus-lined tunnel that begins at the sediment-water interface and ends closed below; no U-shaped branch, side chamber, roots, pipes, fossils, or extra openings.
    Subject: exactly one animal. Place one closed elongated olive-green tongue-shaped shell near the top with its long axis nearly vertical and anterior margin close to the surface. Continue one pale flexible pedicle down the tunnel to a modest swollen terminal anchoring region bearing agglutinated sand grains. Keep the animal continuous and anatomically coherent.
    Style/medium: photorealistic natural-history diorama cutaway, restrained educational reconstruction rather than a flat diagram.
    Composition/framing: exact 1536 x 1024 landscape. Show the water-sediment surface across the upper part and the complete single tunnel in one uninterrupted side section, with no panel divisions.
    Constraints: one shell, one pedicle, one closed-bottom near-vertical tunnel, one opaque sRGB frame; no bivalve gaping, central hinge, double animal, text, labels, arrows, dimensions, scale bar, logo, signature, border, or watermark.
    Avoid: U-shaped worm burrow, branching tunnel, horizontal shell, drilling pedicle, plant root, bone, clam siphons, cut body, impossible duplicated valves, infographic, fantasy glow.

The initial cutaway made the shell read as two opposing halves. Built-in edits changed the view to one broad valve surface and removed the residual center seam before acceptance.

#### Shell-surface correction

    Edit only the exposed shell in this supplied vertical-burrow cutaway. Replace the two opposing petal-like halves with one coherent closed Lingula shell seen mainly from one broad dorsal or ventral valve surface, with a thin continuous outer rim implying the second valve. Preserve the single vertical tunnel, surface position, one downward pedicle, terminal sand-bound anchor, sediment layers, lighting, and exact 1536 x 1024 framing. No text, labels, arrows, or extra animal.

#### Seam correction, accepted pass

    Remove the remaining longitudinal center seam from the green shell and merge the current two visual halves into one uninterrupted broad tongue-shaped valve face with only a thin natural outer rim. Preserve the shell outline, near-vertical placement, one connected pedicle, one closed-bottom tunnel, sand anchor, sediment, water surface, lighting, exact dimensions, and all other content. Do not add a hinge, gape, text, labels, arrows, scale bar, logo, border, or watermark.

### 04 · Spirolophe suspension feeding

    Use case: scientific-educational
    Asset type: Fauna Atlas Lingula anatina lophophore gallery source image
    Primary request: Create an original realistic anatomical reconstruction of one living Lingula anatina with an artificial transparent observational window in the anterior shell, revealing its spirolophe without labels or graphic arrows.
    Scene/backdrop: one animal resting just above muted fine marine sediment in clear shallow seawater; quiet neutral background and no other organisms.
    Subject: one closed elongated olive-green tongue-shaped shell. Through one clearly artificial transparent anterior window, reveal exactly two symmetric pale cream spiral lophophore arms, each coiling inward with many fine tentacles. Keep the small mouth region between the two arms and internal soft tissues restrained. Do not render two separate animals or free-floating tentacle fans.
    Style/medium: photorealistic museum anatomical reconstruction combining realistic shell and soft tissue, sober and observational, not an infographic.
    Composition/framing: exact 1536 x 1024 landscape; keep the entire shell inside the frame and make the paired spirals legible near center.
    Constraints: exactly one shell and two coiled lophophore arms; one static opaque sRGB frame; no arrows, flow lines, particles arranged as data, labels, text, scale bar, logo, signature, border, or watermark.
    Avoid: octopus, nautilus, coral polyp, flower, brain, lungs, clam siphons, teeth, tongue, radial jellyfish, extra coils, duplicated mouth, dissection gore, fluorescent diagram, CGI gloss.

### 05 · Two-pair-cirri early stage

    Use case: scientific-educational
    Asset type: Fauna Atlas Lingula early-development gallery source image
    Primary request: Create one original restrained transmitted-light microscopy reconstruction of a single early shelled Lingula juvenile at the two-pair-cirri stage described from artificially cultured Amami material.
    Scene/backdrop: plain pale-gray microscope field with subtle optical grain, no debris, substrate, adult, eggs, labels, or other larvae.
    Subject: exactly one complete transparent oval early shelled form fully inside the frame. Show a delicate paired shell outline enclosing restrained soft tissue. At the anterior, show exactly four simple slender unbranched ciliated cirri, arranged as two bilateral pairs, plus one small restrained median ciliary tuft. Each cirrus is a single tapered appendage with a fine ciliated edge, not a feather, fin, fan, or branching gill.
    Style/medium: realistic transmitted-light photomicrograph reconstruction, pale neutral optics and delicate transparent tissue, not a cartoon or diagram.
    Composition/framing: exact 1536 x 1024 landscape; center one complete specimen with generous empty field and no cropping.
    Constraints: exactly one oval shelled form, exactly four unbranched lateral cirri and one median tuft, opaque sRGB, one static frame; no extra appendages, adult pedicle, text, arrows, numbers, scale bar, logo, border, signature, or watermark.
    Avoid: feathered fans, branching tentacles, fish larva, crustacean, trochophore cartoon, human embryo, face, eyes, limbs, segmentation, fluorescence, multiple stages, time series.

The first result turned the paired cirri into feathery fans. One built-in edit corrected their structure before acceptance.

#### Cirrus correction, accepted pass

    Replace the current feathery or branching lateral fans with exactly four simple unbranched slender tentacle-like cirri, two on each side, each formed by one continuous tapered shaft with a fine ciliated margin. Preserve the one transparent oval shelled juvenile, restrained central tuft, microscope field, lighting, framing, and exact 1536 x 1024 dimensions. Remove every feather barb, fan blade, branch, and leftover trace. Do not add appendages, animals, text, arrows, scale bars, logos, borders, or watermarks.

### 06 · Three-opening quadrat survey

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Lingula field-survey gallery source image
    Primary request: Create one original scientifically restrained field photograph of a fixed-quadrat survey on a shallow muddy tidal flat, centered on one cluster of three small surface openings as an observation target rather than proof of animal identity.
    Scene/backdrop: ankle-deep clear tidal water over smooth gray-brown fine mud, soft natural ripples, no people, footprints, shells, plants, other animals, or identifiable landmark.
    Survey equipment: exactly one plain white square quadrat laid flat on the sediment and one unbranded camera on a small tripod behind it. The camera does not touch the water or display readable settings.
    Surface feature: inside the center of the quadrat, show exactly one compact cluster of three similar small round openings. No other hole, pit, bubble crater, animal, or shell appears inside or outside the quadrat.
    Style/medium: photorealistic intertidal field-research photography, sober documentary realism, natural water and mud textures.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Keep the full quadrat readable in the lower middle and the camera secondary in the rear; make the single three-hole cluster visible without graphic highlighting.
    Constraints: one quadrat, one camera, exactly three openings total, opaque sRGB; no labels, numbers, rulers, markers, arrows, circles, overlay, text, logo, signature, border, or watermark.
    Avoid: extra pits, tracks, footprints, bubble fields, animal emerging, shell, hand, researcher, measuring tape, clipboard, data screen, drone, laboratory scene, infographic, fantasy lighting.

The first result included additional background holes. One built-in edit removed them before acceptance.

#### Opening-count correction, accepted pass

    Retouch every hole, pit, dark circular depression, and bubble crater outside the one central three-opening cluster into continuous natural wet mud and shallow water. Preserve exactly the central three similar round openings, one white quadrat, one rear camera and tripod, tidal-flat lighting, framing, and exact 1536 x 1024 size. The final image must contain exactly three surface openings total. Do not add animals, shells, footprints, markers, text, labels, arrows, logos, borders, signatures, or watermarks.
