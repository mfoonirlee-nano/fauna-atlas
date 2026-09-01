# Giant Tube Worm image set

Codex's built-in imagegen created these six original project images on 2026-09-01 for the Fauna Atlas Giant Tube Worm profile. The set covers an adult in diffuse flow, the red branchial plume, a gutless adult cutaway, an intracellular trophosome reconstruction, symbiont acquisition by a juvenile and non-contact ROV monitoring. Every frame is a scientific reconstruction, not a photograph, specimen section, micrograph, time series or record from a named vent.

Six base generations established the compositions. Targeted edits replaced frames 03, 04 and 05 after a scientific review found anatomy that could be misread as a digestive tract, ambiguous extracellular microbes and an unclear infection route. The other three frames retain their base generations.

- Species target: Giant Tube Worm, *Riftia pachyptila*
- Product Chinese name: 巨型管虫
- Taxonomic scope: external habitus targets *R. pachyptila*; cutaway, cellular and developmental frames remain evidence-bounded scientific reconstructions
- Generation tool: Codex built-in imagegen
- Generation calls: six base generations and three targeted edits
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/giant-tube-worm/*.webp`
- Source format: opaque, single-frame sRGB PNG, 1536 × 1024
- Runtime format: opaque, single-frame sRGB WebP, 1536 × 1024
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Giant Tube Worm profile research](../../../../../docs/research/giant-tube-worm-profile.md)

## Files and accepted observations

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-diffuse-flow-adult-cover-source.png` | `public/images/species/giant-tube-worm/01-diffuse-flow-adult-cover.webp` | One pale unbranched tube on basalt with a red plume in diffuse-flow water and dark copy space on the left; the oblique angle partly hides the far lamellae |
| 02 | `02-branchial-plume-diagnostic-source.png` | `public/images/species/giant-tube-worm/02-branchial-plume-diagnostic.webp` | A close pipe opening with paired red filament-bearing lamellae, a pale axial obturacular structure and terminal flaps |
| 03 | `03-gutless-trophosome-cutaway-source.png` | `public/images/species/giant-tube-worm/03-gutless-trophosome-cutaway.webp` | A controlled adult window with many separate compact trophosome lobules and branching vessels, without a continuous digestive lumen |
| 04 | `04-trophosome-bacteriocyte-micrograph-source.png` | `public/images/species/giant-tube-worm/04-trophosome-bacteriocyte-micrograph.webp` | A circular trophosome-lobule reconstruction with small symbiont forms inside large host-cell compartments, a central blood space and an outer symbiont-free cell layer |
| 05 | `05-juvenile-skin-symbiont-acquisition-source.png` | `public/images/species/giant-tube-worm/05-juvenile-skin-symbiont-acquisition.webp` | A transparent settled juvenile in a thin tube, retaining a temporary gut while a localized magenta path crosses the epidermis toward a separate developing prototrophosome |
| 06 | `06-rov-thicket-monitoring-source.png` | `public/images/species/giant-tube-worm/06-rov-thicket-monitoring.webp` | A camera platform observes a mixed thicket of plume-bearing animals and empty or retracted tube openings across a clear water gap |

## Scientific and editorial boundaries

Frames 01 and 02 show the intended pale tube and red branchial plume, but they cannot identify a voucher or measure plume filaments, exchange area, tube length, depth or locality. The oblique cover view makes the far lamellae less visible; it is an ecological portrait, while frame 02 carries the clearer external-anatomy view. Tube growth rings are surface texture and must not be described as animal segments.

Frame 03 is not a real dissection. The accepted edit removes every continuous pale lumen that could suggest an adult gut and instead shows separate trophosome lobules with a simplified vascular tree. Lobule size, organ proportion, vessel arrangement, sex and symbiont biomass remain artistic choices.

Frame 04 is neither histology nor microscopy data. It communicates intracellular residence: small symbiont-like forms stay within host bacteriocyte compartments, the central blood space contains no bacteria and an outer cell layer remains symbiont-free. Color, cell count, sulfur granules, developmental states and microbial morphology cannot support measurement or strain identification.

Frame 05 condenses a process into one still image. The localized path communicates environmental bacteria crossing the epidermis and moving toward a developing prototrophosome beside a temporary gut. It does not prove direction, duration, exact developmental stage, infection frequency, apoptosis boundaries or the identity of any pictured bacterium.

Frame 06 contains both visible red plumes and empty-looking tube openings. An empty opening may indicate retraction or an unoccupied tube; one frame cannot distinguish those states, identify every tube, estimate abundance, establish health or reveal a population trend. The platform does not touch or collect the thicket.

No frame establishes exact date, site, depth, scale, individual identity, abundance, conservation status or a field-observed event. The accepted files contain no visible labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation outputs

The generator kept its original outputs outside the repository. Accepted files were copied into this directory and the originals were left in place.

| Frame | Base generation | Accepted targeted edit |
| --- | --- | --- |
| 01 | `exec-117bc601-7e94-41ef-9a2b-6a9c8bce1df0.png` | none |
| 02 | `exec-88caf212-05c8-447f-81ad-cf36a37743d7.png` | none |
| 03 | `exec-9f55fb40-9a10-4fba-b6b8-17d0d5f2de9e.png` | `exec-a9bafaf6-80de-499b-b61a-31208e5ff975.png` |
| 04 | `exec-3f5218a7-bdc8-484f-834d-977771363b10.png` | `exec-43b41441-f440-4f2b-8681-592da72a6289.png` |
| 05 | `exec-a5e09f1e-0216-41ec-85a2-95323891e0b3.png` | `exec-3f9769c7-7bb0-49be-a5b5-8e1b2986d06b.png` |
| 06 | `exec-45167ddc-295c-4531-a97f-3f3faacdb69a.png` | none |

All outputs are under `/Users/chris.li/.codex/generated_images/01a05cda-d963-7fb1-89a8-66fc9a506582/`.

## Normalized final prompt set

These prompt blocks preserve the accepted production intent rather than raw tool-call serialization.

### 01 · Adult in diffuse flow

~~~text
Use case: photorealistic natural-history cover
Asset type: Fauna Atlas species scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show one adult Riftia pachyptila fixed to dark East Pacific Rise basalt at an active hydrothermal-vent diffuse-flow margin.
Subject: A single unbranched off-white chitinous tube with restrained growth texture and a living animal extending its characteristic deep-red, paired, featherlike branchial lamellae. The plume is soft tissue, not a flower, anemone, beard or tentacle crown.
Composition: Place the subject on the right, show the complete tube-to-rock relationship and preserve quiet dark-water copy space on the left.
Lighting: Restrained blue-black deep-sea illumination with subtle warm mineral haze, realistic particulate water and no black-smoker jet touching the animal.
Constraints: Naturalistic scale and anatomy; no mouth, eyes, face, segmentation on the exposed animal, branching tubes, duplicate animals, text, labels, arrows, scale bar, logo, watermark or border.
~~~

### 02 · Branchial plume diagnostic close-up

~~~text
Use case: scientific external-anatomy reconstruction
Asset type: Fauna Atlas close natural-history view, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a close view into the open end of one Riftia pachyptila tube so the external plume anatomy remains readable.
Subject: Paired deep-red branchial lamellae built from many separate fine filaments, arranged around a pale central obturacular axis with restrained terminal flaps; an off-white fibrous tube rim surrounds the animal.
Composition: Keep the complete tube opening, both lamellar groups and central structure in frame against a dark vent-water background.
Constraints: Photorealistic scientific reconstruction without invented mouthparts, eyes, radial sea-anemone symmetry, coral branches, excess plumes, text, labels, arrows, scale bar, logo, watermark or border.
~~~

### 03 · Gutless adult and trophosome

The base generation established the longitudinal window but included pale continuous structures that could be mistaken for a digestive tract. The accepted edit replaced them with separate trophosome lobules and vessels.

#### Base generation prompt

~~~text
Use case: scientific educational cutaway
Asset type: Fauna Atlas non-graphic anatomy reconstruction, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct one adult Riftia pachyptila within an opened section of its pale tube, linking the red anterior plume to the long trunk and short basal opisthosome.
Subject: A clean longitudinal window through the tube; most of the trunk is occupied by reddish-brown trophosome tissue with reproductive tissue and a vascular system, while the adult has no mouth, stomach, intestine or anus.
Scene: Dark basalt and restrained hydrothermal-vent water outside the tube.
Constraints: One connected animal and tube, non-graphic tissue, no continuous digestive lumen, text, labels, arrows, scale bar, logo, watermark or border.
~~~

#### Accepted anatomy edit

~~~text
Edit this existing scientific cutaway illustration of an adult Riftia pachyptila. Change only the internal anatomy visible inside the longitudinal cutaway window. Remove every pale coiled, tubular, continuous, or lumen-like structure that could be mistaken for a mouth, esophagus, intestine, anus, or digestive tract. Replace the trunk interior with dozens of clearly separate compact trophosome lobules: solid rounded reddish-brown lobules, densely packed and vascularized, connected only by narrow branching blood vessels with solid vessel walls and no hollow digestive lumen. Retain diffuse lateral reproductive tissue and a short segmented opisthosome at the basal end. Preserve the red branchial plume, white chitinous tube, basalt seafloor, hydrothermal-vent lighting, camera angle, crop, and overall realistic natural-history illustration style exactly. Adult anatomy must be unmistakably gutless. No labels, arrows, text, diagram keys, gore, or new external structures.
~~~

### 04 · Trophosome bacteriocytes

The base generation established a circular lobule and central vessel but left large particles and microbes visually ambiguous. The accepted edit placed small symbionts inside host-cell compartments and cleared the vessel and outer layer.

#### Base generation prompt

~~~text
Use case: scientific cellular reconstruction
Asset type: Fauna Atlas microscopy-inspired illustration, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show a transverse trophosome lobule of Riftia pachyptila as a cellular organization study rather than a literal micrograph.
Subject: Large host bacteriocytes surrounding a central blood space, with many small sulfur-oxidizing symbiont forms enclosed inside the host cells and an outer tissue boundary.
Composition: One complete circular lobule centered on a dark microscopy field, shallow depth cues and restrained violet, rose and pale-gold tones.
Constraints: No bacteria floating in blood or outside host cells, no giant organism-like sulfur spheres, labels, arrows, text, molecular-flow diagram, scale bar, logo, watermark or border.
~~~

#### Accepted cellular edit

~~~text
Edit this existing microscopy-style scientific illustration of a Riftia pachyptila trophosome lobule. Change only the cellular organization. Make every bacterial symbiont a small rod or coccus clearly enclosed inside intracellular vacuoles within large host bacteriocytes. Remove all giant gold spheres or other organism-like blobs. Keep sulfur only as tiny pale-yellow intracellular granules, never as large bodies. Keep the central blood vessel clean and completely free of bacteria. Add a distinct outer single layer of darker pigmented, symbiont-free trophochrome cells around the lobule. Preserve the circular lobule composition, dark microscopy background, shallow depth of field, color palette, framing, and realistic fluorescence/electron-micrograph-inspired aesthetic. No extracellular bacteria, labels, arrows, text, or diagram keys.
~~~

### 05 · Juvenile symbiont acquisition

The base generation showed a transparent juvenile and temporary gut, but the entry route was diffuse. The accepted edit localized the epidermal crossing and separated the target prototrophosome from the gut.

#### Base generation prompt

~~~text
Use case: scientific developmental reconstruction
Asset type: Fauna Atlas macro illustration, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show one settled early Riftia pachyptila juvenile inside a thin transparent tube while it acquires environmental symbionts.
Subject: A translucent segmented juvenile retaining a temporary gut, with sparse tiny magenta rod-shaped bacteria at one trunk epidermal site and a separate small developing prototrophosome nearby.
Scene: The tube rests against dark vent basalt in clean deep-sea water.
Constraints: Communicate environmental horizontal acquisition through intact skin; keep the gut free of bacteria; no adult-sized plume, wound, gore, labels, arrows, text, scale bar, logo, watermark or border.
~~~

#### Accepted infection-route edit

~~~text
Edit this existing scientific illustration of a transparent juvenile Riftia pachyptila inside a thin tube. Change only the bacterial acquisition pathway. At one small localized patch of intact trunk epidermis, show sparse tiny magenta rod-shaped bacteria crossing the skin, followed by a narrow discontinuous trail through the underlying mesoderm that ends in one small developing prototrophosome immediately beside, but never inside, the temporary gut. Keep the temporary gut lumen completely clear and bacteria-free. Remove diffuse or ambiguous magenta staining elsewhere. Preserve the juvenile body, red anterior plume, thin translucent tube, basalt substrate, hydrothermal-vent lighting, framing, and realistic natural-history illustration style. The route must read clearly without arrows: environment to localized epidermis to mesoderm to prototrophosome. No wound, gore, labels, text, arrows, or bacteria inside the gut.
~~~

### 06 · ROV thicket monitoring

~~~text
Use case: photorealistic field-monitoring reconstruction
Asset type: Fauna Atlas wide survey scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show non-contact imaging of a Riftia pachyptila aggregation at an East Pacific hydrothermal vent.
Scene: A compact unbranded deep-sea camera or ROV platform remains on the left, separated by clear water from a dense group of pale unbranched tubes on dark basalt at the right.
Subject: Several tubes carry visible red plumes while other openings appear empty because animals may be retracted or tubes unoccupied. Mineral staining and diffuse flow stay subtle.
Composition: Keep the observation platform and thicket legible without physical contact, sampling or dramatic machinery.
Constraints: No manipulator touching animals, loose severed tubes, global-map implication, abundance label, text, scale bar, logo, watermark or border.
~~~

## Compression and runtime conversion

The first scoped TinyPNG run compressed all six base PNGs from 15299.2KB to 5112.4KB. After scientific review, the three replacement edits were copied over frames 03–05 and compressed from 8123.2KB to 2745.1KB. The six final source files total 5,403,270 bytes.

~~~sh
npm run compress -- src/assets/source/species/giant-tube-worm/*-source.png
~~~

Runtime files came from the accepted compressed sources through the repository's scoped `cwebp -q 82 -m 6 -mt` conversion. The first six-file conversion reported 5112.4KB to 1059.9KB; reconverting accepted frames 03–05 reported 2745.1KB to 616.0KB. The six final WebPs total 1,064,346 bytes.

~~~sh
npm run convert:webp -- src/assets/source/species/giant-tube-worm/*-source.png
~~~

## Accepted file hashes

| Frame | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `2af233553bd34f470b070661d39c27286878942bfdab99f7a6e15cbe429027ad` | `697ed2b2f1d204b04fbe28270918ad0f7225c01ad425381578488f3d3164d486` |
| 02 | `a4c9089a822f021e41f8e0ebf80a661c5f529cb30a75aa8b4b4ef51b5ac1c6bc` | `6d0d97424d3db58ec7abcb93394eaeb7524d55439c33941571503b03f202b7df` |
| 03 | `8af83e9b9d4defd731ee754a49e71ba1bf37e17c4900ee48feb29c2a63ca04ec` | `d36ee021e4349b459867cbca973cc6e7fb528e751d3f4890c020f7e95300501e` |
| 04 | `9af8f257d2b8a4127e1cfa59169e1836d740c08760ff9fc533d56a9f27c2747e` | `9c63a974ef6d6d33e33b92146ddf0c9c884df7619f117075139e85cab4bbe9a3` |
| 05 | `84b6b6d3bde0c0ce601b3b443d72b9e5a62a2c2dc6f86c8ea727bde74b145835` | `edc8e3be0a06a5e7a9d4bc5bdc76bd4cb3c2adff89730cd864d462b3a25e789b` |
| 06 | `8fdf75093e68b0ccc73a92676af1be11d422ab355e94b9a95325d10706efb65e` | `a320c868947bb1f3f8b7042a64595226490a1b43fe96033c29bd166701184dff` |

## Final file checks

- ImageMagick decoded all twelve files as 1536 × 1024, opaque, single-frame sRGB images.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Each six-file set contains six distinct SHA-256 hashes, and all twelve files differ.
- Original-resolution review accepted the external plume in frame 02, the gutless multi-lobule anatomy in frame 03, intracellular cellular organization in frame 04, the localized juvenile infection route in frame 05 and the non-contact mixed thicket in frame 06.
- Static inspection found no visible text, labels, arrows, scale bars, logos, signatures, borders, watermarks or conversion defects.
- Verification used static asset inspection and the built-in image viewer. No GUI or headless browser was used.
