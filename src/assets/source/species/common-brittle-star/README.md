# Common Brittlestar image set

Codex's built-in imagegen created these six original project images on 2026-09-01 for the Fauna Atlas Common Brittlestar profile. The set covers an adult on a tide-swept seabed, arm-driven locomotion, suspension feeding, a dense brittlestar bed, arm regeneration and video-transect monitoring. Every frame is an AI-generated natural-history scene or scientific reconstruction, not a specimen voucher, taxonomic plate, density estimate or named field observation.

- Species target: Common Brittlestar, *Ophiothrix fragilis*
- Product Chinese name: 脆刺蛇尾
- Generation tool: Codex built-in imagegen
- Generation calls: six base generations and two targeted edits
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/common-brittle-star/*.webp`
- Source format: opaque, single-frame sRGB PNG, 1536 × 1024
- Runtime format: opaque, single-frame sRGB WebP, 1536 × 1024
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Common Brittlestar profile research](../../../../../docs/research/common-brittle-star-profile.md)

## Files and accepted observations

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-tide-swept-adult-cover-source.png` | `public/images/species/common-brittle-star/01-tide-swept-adult-cover.webp` | One complete adult sits right of center on a coarse tide-swept seabed; its central disc, five separate tapering arms and bilateral rows of arm spines remain readable |
| 02 | `02-articulated-arm-rowing-locomotion-source.png` | `public/images/species/common-brittle-star/02-articulated-arm-rowing-locomotion.webp` | One complete five-armed adult adopts a plausible rowing posture, with one leading arm, two braced lateral arms and two trailing arms, while every tip remains in frame |
| 03 | `03-raised-arm-suspension-feeding-source.png` | `public/images/species/common-brittle-star/03-raised-arm-suspension-feeding.webp` | One adult has a complete disc and five readable arm bases; two substrate arms continue beyond the lower frame while three raised arms end inside it |
| 04 | `04-patchy-dense-brittlestar-bed-source.png` | `public/images/species/common-brittle-star/04-patchy-dense-brittlestar-bed.webp` | Many distinct discs and overlapping spined arms form an irregular dense patch on one continuous coarse seabed |
| 05 | `05-tapered-regenerating-arm-source.png` | `public/images/species/common-brittle-star/05-tapered-regenerating-arm.webp` | One adult has four long arms and one shorter arm that narrows smoothly into a paler regenerating tip; the left long arm continues beyond the frame |
| 06 | `06-benthic-video-transect-monitoring-source.png` | `public/images/species/common-brittle-star/06-benthic-video-transect-monitoring.webp` | A small observation ROV records a patchy brittlestar bed beside a plain seabed transect tape without touching the animals |

## Scientific and editorial boundaries

Frame 01 establishes the intended five-arm body plan, conspicuous central disc, segmented spiny arms and coarse northeast Atlantic habitat. It cannot identify a voucher, resolve diagnostic plates and papillae, count spines on every arm segment, establish color as a species character, measure the animal, prove depth or locate the scene.

Frame 02 communicates the class-level contrast between arm-driven brittle-star locomotion and tube-foot-driven sea-star walking. It is one plausible instant, not a recorded gait sequence. It cannot determine speed, direction, stride, substrate force, a fixed leading arm or a species-specific coordination rule for *O. fragilis*.

Frame 03 reconstructs a documented suspension-feeding posture. The central disc and all five arm bases are visible, but the two substrate-arm tips extend beyond the lower frame. The raised arms, spines, tube feet and sparse particles show the proposed route for particle capture, but the frame cannot measure flow speed, particle size, food composition, capture rate, ingestion rate or the proportion of suspension feeding in the diet.

Frame 04 depicts the patchy structure of a dense brittlestar bed. Overlapping arms make individual counts deliberately difficult at this scale. The image cannot provide animals per square metre, occupied area, total abundance, species composition, recruitment, mortality or a population trend.

Frame 05 shows a smooth change from normal arm width to a short regenerating tip. One normal long arm continues past the left edge, so the image does not document the tips of all four long arms. It cannot establish why the arm was lost, distinguish voluntary autotomy from injury, identify a predator, date the injury, measure regeneration rate, estimate age or show that a detached arm can regenerate a whole animal.

Frame 06 depicts one plausible non-contact monitoring method. The tape has no readable values and supplies no scale result. A single reconstructed pass cannot yield density, total abundance, long-term change or genetic-lineage identity. A valid survey needs known frame width, position, repeat timing, sampling design and retained vouchers or tissue where lineage matters.

No frame establishes an exact date, site, depth, scale, individual identity, abundance, conservation status or field-observed event. The accepted files contain no visible labels, arrows, numbers, logos, signatures, borders or watermarks.

## Generation outputs

The generator kept its original outputs outside the repository. Accepted files were copied into this directory, compressed with TinyPNG and converted with the project WebP pipeline. The originals remain under `/Users/chris.li/.codex/generated_images/01a05d78-fa4d-7d12-900d-c901fd9de4ec/`.

Frames 02 and 03 needed targeted edits. Frame 02's edit restored the cropped leading-arm tip and retained exactly five complete arms. Frame 03's edit removed an extra sixth arm while preserving three raised arms and two substrate arms.

| Frame | Base generation | Accepted targeted edit |
| --- | --- | --- |
| 01 | `exec-167a6c68-88dc-4393-b857-1c38f324ef49.png` | Not needed |
| 02 | `exec-c9d6af92-6387-451b-b9ae-09f2c32b00a2.png` | `exec-2361618d-7deb-4576-9276-1a267db26968.png` |
| 03 | `exec-5536be8d-74b1-49f1-a7a0-3eb833407a73.png` | `exec-8c0b6a3e-e15e-4b92-8028-af6ec257a9b4.png` |
| 04 | `exec-10fef825-4908-4c2d-a820-879cdbead061.png` | Not needed |
| 05 | `exec-2665ee91-65d3-48f6-9d8a-228855021015.png` | Not needed |
| 06 | `exec-dcdded85-9d79-4844-bc91-c075d808cba5.png` | Not needed |

## Normalized final prompt set

These prompt blocks preserve the accepted production intent rather than raw tool-call serialization. The targeted edits for frames 02 and 03 are included after their base prompts.

### 01 · Adult on a tide-swept seabed

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Brittlestar cover image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original natural-history underwater photograph of exactly one living adult Common Brittlestar, Ophiothrix fragilis, on a tide-swept northeast Atlantic seabed.
Scene/backdrop: Cool green-blue bottom water over one continuous bed of dark pebbles, shell gravel and coarse sand, with restrained suspended particles and no tropical reef.
Subject: One complete adult with a distinct small pentagonal central disc and exactly five very long, slender, unbranched, visibly segmented arms. Each arm tapers gradually and carries orderly upright lateral spines on both sides. Use mottled purple, rust, cream and muted orange without treating color as diagnostic.
Style/medium: Photorealistic museum-quality natural-history photography with credible wet calcitic texture, seabed grain and underwater optics.
Composition/framing: Wide landscape, animal on the right around x=0.72 and y=0.56, every arm tip inside the frame, calm open water and seabed on the left for page copy.
Constraints: Exactly one complete brittle star with exactly five arms; central disc and arm bases readable; no sea-star webbing, branching basket-star arms, missing tips, extra limbs, fish, diver, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: tropical coral, bright fantasy colors, radial flower, octopus, long-spined urchin, studio specimen, CGI, illustration, oversaturation or stock-photo gloss.
```

### 02 · Articulated-arm rowing locomotion

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Common Brittlestar locomotion gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct one plausible instant of arm-driven brittle-star locomotion across coarse shell gravel, while keeping the complete animal and all five arms readable.
Scene/backdrop: Oblique overhead view of a cool northeast Atlantic pebble and shell-gravel seabed under gentle bottom current.
Subject/action: Exactly one Ophiothrix fragilis with a clear central disc and five long segmented spiny arms. One arm points generally forward, two lateral arms bend against separate pebbles in a rowing or bracing posture, and two arms trail behind. The tube feet remain small and do not appear to carry the body like sea-star feet.
Style/medium: Photorealistic scientific field reconstruction with restrained color, real rock texture and coherent arm joints.
Composition/framing: Keep the full disc and every tapered arm tip in frame with enough surrounding gravel to read the posture.
Constraints: Exactly five unbranched arms, no arrows, motion streaks, labels, footprints, anatomy cutaway, other animals, text, scale bar, logo, signature, border or watermark.
Avoid: five rigid spokes, octopus crawling, snake coils, sea-star webbing, duplicated arms, impossible knots, CGI, diagram or oversaturation.
```

Targeted edit:

```text
Extend the cropped leading arm naturally to a complete tapered tip inside the existing frame. Preserve the central disc, the paired braced lateral arms and the two trailing arms. The final animal must have exactly five complete segmented spiny arms and no other scene changes.
```

### 03 · Raised-arm suspension feeding

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Common Brittlestar feeding gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original underwater close view of one living Ophiothrix fragilis suspension feeding in gentle bottom flow.
Scene/backdrop: Coarse shell gravel and small stones in cool northeast Atlantic water, with a sparse stream of natural suspended particles rather than a visible cloud.
Subject/action: One complete adult with a distinct disc and exactly five segmented spiny arms. Two arms stay low against the substrate for support. Three arms rise into the current in loose open curves. Show fine tube feet among the lateral spines and a few captured particles near the raised arms without turning the scene into a diagram.
Style/medium: Photorealistic museum natural-history macro reconstruction with credible water, shell, spine and tube-foot textures.
Composition/framing: Three-quarter side view that keeps the disc, all five arm bases and every arm tip visible.
Constraints: Exactly five unbranched arms, three raised and two supported; no branching basket-star fans, tentacles, mucus net, prey swarm, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: flower form, coral polyp, octopus, six arms, sea-star webbing, giant tube feet, CGI, flat illustration or oversaturation.
```

Targeted edit:

```text
Remove the extra lower arm cleanly and repair the nearby seabed. Keep exactly five anatomically connected arms: three raised into the water and two resting on the substrate. Preserve the original disc, lighting, particles and framing.
```

Accepted-output note: the edit leaves exactly five readable arm bases, but both substrate arms continue beyond the lower frame.

### 04 · Patchy dense brittlestar bed

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Brittlestar ecology gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one original wide underwater scene of a dense but patchy Ophiothrix fragilis bed on a tide-swept northeast Atlantic coarse seabed.
Scene/backdrop: One continuous field of pebbles, gravel, shell fragments and coarse sand in cool green-blue bottom water. Vary relief and particle cover so the bed has irregular edges instead of a graphic boundary.
Subjects: Many brittle stars with separate small central discs and long thin segmented arms carrying lateral spines. Arms may overlap naturally, but enough discs remain visible to show that this is an aggregation of individuals. Use restrained natural color variation within the species.
Style/medium: Photorealistic wide natural-history survey imagery with credible underwater scale and suspended particles.
Composition/framing: Show a dense foreground and middle patch grading into sparser occupied seabed, without implying a measured quadrat or exact density.
Constraints: No cloned radial pattern, basket stars, sea stars, urchins, fish, diver, equipment, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: carpet texture with no discs, hundreds of identical copies, coral reef, mass mortality, exposed skeletons, CGI, painting or oversaturation.
```

### 05 · Tapered regenerating arm

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Common Brittlestar regeneration gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original close natural-history view of one living Ophiothrix fragilis with a clearly regenerating fifth arm.
Scene/backdrop: Dark pebbles and shell gravel under clear cool seawater, with shallow depth of field but no laboratory staging.
Subject: One complete central disc with exactly five attached segmented spiny arms. Four arms are long and taper normally. The fifth is distinctly shorter and narrows smoothly from normal arm width into a smaller, paler regenerating tip with finer new segments. Keep the transition healed and non-graphic, without an open wound.
Style/medium: Photorealistic museum natural-history macro photography with credible brittle calcitic arm plates, side spines and wet substrate.
Composition/framing: Oblique overhead view, complete disc and all five arm tips inside the frame, shorter arm placed toward the upper right for immediate comparison.
Constraints: Four long arms plus one short regenerating arm; no detached limb, blood, exposed organs, budding second animal, branching limb, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: lizard tail, scar stump, six arms, sea-star webbing, mutant growth, CGI, diagram or oversaturation.
```

Accepted-output note: the left long arm continues beyond the frame; the other three long tips and the short regenerating tip remain visible.

### 06 · Benthic video-transect monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Brittlestar monitoring gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original documentary underwater image of a small observation-class ROV recording a patchy Ophiothrix fragilis bed along a seabed video transect.
Scene/backdrop: Cool northeast Atlantic bottom water over one coarse pebble, gravel and shell seabed. A brittlestar aggregation occupies an irregular portion of the frame.
Subjects/action: One compact workmanlike ROV hovers above the bottom with a forward camera and restrained lights. A plain narrow transect tape lies along the seabed with no readable marks. Numerous brittle stars remain undisturbed, their separate discs and overlapping spiny arms visible. No manipulator touches an animal.
Style/medium: Photorealistic marine-survey documentary photography with credible vehicle scale, backscatter, water optics and seabed texture.
Composition/framing: Wide-medium view showing the complete ROV, tape, dense patch and sparser surrounding seabed.
Constraints: Non-contact observation only; no collection, suction sampler, grab, trawl, readable numbers, map overlay, labels, arrows, logo, signature, border or watermark.
Avoid: science-fiction submarine, diver, tropical reef, staged aquarium, crushed animals, glowing HUD, duplicated equipment, CGI, illustration or oversaturation.
```

## Processing and static checks

The accepted source PNGs were compressed in place with the repository's TinyPNG workflow. One batch request ended early while processing frame 04, so that file was retried individually. The runtime assets were generated with `cwebp -q 82 -m 6 -mt` through `npm run convert:webp`.

```bash
npm run compress -- src/assets/source/species/common-brittle-star/*-source.png
npm run convert:webp -- src/assets/source/species/common-brittle-star/*-source.png
```

ImageMagick reported all twelve accepted files as opaque, single-frame sRGB images at 1536 × 1024.

## Accepted asset hashes

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `2f9614c67368e356c4305563eba47b76a306798676c1599edef9073ceb668be3` | `f9243e5afa96737b43f4adc454c1f74e19879d1e40dc0b6fdaeea6fd5823e7d7` |
| 02 | `409ce170a30e070891a9046dbef8e3b8e97d70d012a749c4a0cbde452d91ee62` | `bfe1ffafbd0ec4f8c233b1ec524890b2a3e8e71fab6a2bbd5b0b5c7900792f58` |
| 03 | `7adf0835833f1c3bd89d153942b2888bf259bb7311be37b04f4d11fd8a298cff` | `3aec668fe961d59ef44efa44e857fad2a2da0ade26e057ebaf8604a9b198727f` |
| 04 | `b4f65d0773f53457d710405fc66a7df935fd423189ee194c5c3cb072f92dcb67` | `13a81cb2db6598a1d30be3154454874cb62e4990af1251337283d66fd7e5090b` |
| 05 | `25070aaea55bb7fe733b45a796998eb8c78a860a208053db51d34e644ac33a23` | `49a6943108512b236464c20629240c6cd79de846cc37b9dc813e05912f2d0266` |
| 06 | `233ab77dbc558704881ada6e34e099a30a2d235b2fef2e87f58b6569a13b83d9` | `d1ff2e90485cab2aefd5ff70722d1aa659a2394b428a6b72b2da0ed68735521f` |
