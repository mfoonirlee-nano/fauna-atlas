# Common Tusk Shell image set

Codex's built-in imagegen created these six original project images on 2026-09-01 for the Fauna Atlas Common Tusk Shell profile. The set covers a buried animal in situ, the shell's two openings, the burrowing foot and captacula, captacula contacting foraminifer tests, a gillless mantle-cavity cutaway and benthic-sample sorting. Each frame is a scientific reconstruction, not a record of a named animal, voucher shell, exact site, dissection, feeding event or survey sample.

The production record contains three `photorealistic-natural` base generations, three `scientific-educational` base generations and four `precise-object-edit` passes. Frames 02, 04 and 05 use their base generations. Frame 01 uses two successive burial-depth edits, frame 03 uses the accepted foot-and-captacula edit, and frame 06 uses the accepted shell-shape edit.

- Species target: Common Tusk Shell, *Antalis vulgaris*
- Product Chinese name: 普通角贝
- Taxonomic scope: the shell habitus and geographic context target *A. vulgaris*; the foot, captacula and internal anatomy remain class-level Scaphopoda reconstructions
- Generation tool: Codex built-in imagegen
- Generation calls: six base generations and four precise edits
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/common-tusk-shell/*.webp`
- Source format: opaque, single-frame, 8-bit palette sRGB PNG, 1536 × 1024
- Source compression: TinyPNG compressed all six accepted PNGs; its run summary reported 15953.2KB before compression and 5485.2KB after compression
- Runtime format: opaque, single-frame, 8-bit sRGB WebP, 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`, invoked through the scoped repository script; its run summary reported 5485.2KB before conversion and 1185.9KB after conversion
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Common Tusk Shell profile research](../../../../../docs/research/common-tusk-shell-profile.md)

## Files and accepted observations

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-in-situ-buried-adult-portrait-source.png` | `public/images/species/common-tusk-shell/01-in-situ-buried-adult-portrait.webp` | One shell buried in shell-rich sand on the right, with only the slender brown-orange posterior tip and a small amount of white shell exposed and quiet copy space on the left |
| 02 | `02-double-open-shell-macro-source.png` | `public/images/species/common-tusk-shell/02-double-open-shell-macro.webp` | One matte white, lightly curved, tapered tube shell with a broad near opening, a narrow far opening, fine longitudinal sculpture and brown-orange color near the slender end |
| 03 | `03-burrowing-foot-and-captacula-source.png` | `public/images/species/common-tusk-shell/03-burrowing-foot-and-captacula.webp` | A sand-edge reconstruction with the broad shell end directed down, one slender pointed foot with two small lateral lobes and many separate threadlike captacula ending in small clubs |
| 04 | `04-captacula-foraminifer-feeding-macro-source.png` | `public/images/species/common-tusk-shell/04-captacula-foraminifer-feeding-macro.webp` | Several hair-fine transparent captacula with clubbed adhesive tips contacting small chambered foraminifer tests among sand grains |
| 05 | `05-gillless-mantle-cavity-cutaway-source.png` | `public/images/species/common-tusk-shell/05-gillless-mantle-cavity-cutaway.webp` | One lightly curved, double-open shell with a single lateral window, a continuous vascularized mantle, a simplified body mass, a retracted anterior foot region and no drawn gill or heart-shaped organ |
| 06 | `06-benthic-grab-survey-source.png` | `public/images/species/common-tusk-shell/06-benthic-grab-survey.webp` | A stainless-steel sorting tray, sieve and two gloved hands with one lightly curved tusk shell whose broad and narrow openings, slender brown-orange end and longitudinal sculpture remain visible |

## Scientific and editorial boundaries

The shell's tapered, lightly curved, double-open form and the Northeast Atlantic or western Mediterranean setting support the intended *Antalis vulgaris* reconstruction. A still image cannot identify a voucher specimen or establish shell length, maturity, sex, locality, depth or collection date. Species-level identification would require a real shell, provenance and diagnostic comparison. The muscular foot, captacula, mantle cavity and gillless body plan show generalized scaphopod anatomy; they do not document species-specific soft anatomy.

Frame 01 shows the accepted deep-burial composition with the broad anterior end below the sediment and the slender posterior end exposed to the water. The visible tip cannot establish the animal's identity, exact burial percentage, orientation through time, preferred grain size or natural density. The shell-rich sediment supplies plausible habitat context rather than a measured sample from a named site.

Frame 02 isolates the shell so both apertures and the taper remain readable. The prompt requested a 3–6 cm shell, but the image has no scale bar and cannot measure length, curvature, aperture diameter, wall thickness or sculpture. Retraction of the unseen animal remains a reconstruction; the pixels cannot show whether the shell held a live animal or came from a collected specimen.

Frame 03 separates one pointed muscular foot from the surrounding captacula after removing the base generation's fan-shaped foot and thick curled appendages. The frame does not record a real excavation or movement sequence. It cannot establish the number, spacing, reach or species-specific arrangement of captacula, nor can it measure burrowing force or speed.

Frame 04 presents captacula touching chambered particles that resemble foraminifer tests. Contact in one reconstructed instant cannot prove adhesion, capture, ingestion, feeding success, prey identity or diet proportion. The frame is not a micrograph, and neither the captacula nor the sediment particles carry scale or specimen metadata.

Frame 05 uses a controlled longitudinal window to keep the two shell openings, mantle and simplified body mass legible. No real animal has such an open lateral window. The image is not a dissection, histological section or fluid-flow record, and it cannot establish organ dimensions, vascular flow, gas-exchange rate or the complete internal anatomy of *A. vulgaris*.

Frame 06 shows a plausible benthic-sample sorting scene rather than a documented protocol. One shell in one tray cannot establish whether an animal was alive, identify the shell to species, measure abundance or support distribution and population trends. The image does not specify gear, mesh size, station, depth, date, replicate count or handling outcome.

No frame establishes exact locality, depth, date, shell length, age, sex, abundance, conservation status or a field-observed event. The files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation record and normalized final prompts

The prompt blocks preserve the accepted scene requests in a normalized format. They record final production intent rather than raw tool-call serialization.

### 01 · In-situ buried portrait

The base generation established the shell-rich seabed, right-side subject and left-side copy space. Two precise edits increased the burial depth without changing the scene. The accepted output leaves only the slender posterior tip and a trace of white shell above the sediment.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an in-situ natural-history photograph of exactly one Antalis vulgaris buried in a Northeast Atlantic or western Mediterranean seabed.
Scene/backdrop: Fine sand mixed with shell fragments under restrained coastal underwater light.
Subject: One lightly curved tapered tusk shell in its burrowing orientation, with the broad anterior end directed down into the sediment and the slender brown-orange posterior end directed up toward the water.
Composition/framing: Place the animal on the right and preserve calm seabed copy space on the left.
Constraints: Keep most of the shell below the sediment; show one connected shell and no exposed soft anatomy; no text, label, arrow, scale bar, logo, watermark or border.
Avoid: a shell lying loose on the surface, a tightly hooked tube, two animals, bivalve hinges, gastropod coils, tentacle crowns, fantasy color or diagram styling.
~~~

#### First burial-depth edit

~~~text
Edit only the burial depth of the existing shell. Sink the connected shell farther into the same sediment so roughly three quarters lies below the surface, while the slender posterior end remains exposed to the water. Preserve the animal's position on the right, the left copy space, seabed texture, lighting, color, camera angle and 1536 × 1024 framing. Do not alter the shell's taper, curvature or two-end orientation, and do not add soft anatomy or markings.
~~~

#### Accepted burial-depth edit

~~~text
Edit only the same shell's final exposed portion. Deepen it to roughly 80–85 percent burial so the broad anterior end and main white tube remain below the sediment. Leave only the slender brown-orange posterior tip and a small connected trace of white shell visible above the surface. Preserve every other scene element, including right-side placement, left negative space, sediment, lighting, camera angle and 1536 × 1024 framing. Do not create a second shell, detached fragment, hole, label or scale bar.
~~~

### 02 · Double-open shell macro

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a close natural-history shell photograph of one temporarily exposed Antalis vulgaris with the animal fully retracted.
Scene/backdrop: Neutral shell-rich sand with shallow depth of field and no collection labels.
Subject: One matte white, lightly curved, tapering tubular shell in the 3–6 cm target range, with the broad anterior opening close to camera and the narrow posterior opening farther away. Retain fine longitudinal sculpture and a restrained brown-orange tint near the slender end.
Composition/framing: Keep the complete shell and both open ends inside the frame at an oblique angle.
Constraints: Exactly one continuous shell; both ends visibly open; no exposed soft tissue, text, label, arrow, scale bar, logo, watermark or border.
Avoid: elephant tusk solidity, a sealed tip, a tightly hooked shape, gastropod coil, bivalve hinge, polished plastic, jewelry presentation or specimen-catalog styling.
~~~

### 03 · Burrowing foot and captacula

The base generation established the cutaway sand edge and exposed anterior anatomy, but it gave the foot a fan shape and rendered several appendages as thick coils. One precise edit replaced those structures with the accepted pointed foot and separate threadlike captacula.

#### Base generation prompt

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas scientific anatomy reconstruction, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct one scaphopod at a cut edge of shell-rich sand so the broad anterior opening, burrowing foot and surrounding captacula can be seen together.
Scene/backdrop: A controlled underwater sediment cutaway with realistic sand grains and restrained natural-history lighting.
Subject: One Antalis vulgaris target shell with its broad end directed down, one slender muscular foot extending from that opening and numerous independent captacula emerging around the foot base.
Composition/framing: Center the broad opening and soft anatomy while keeping enough connected shell and sediment context to explain orientation.
Constraints: The foot is one pointed conical structure with two small lateral lobes; captacula are separate hair-fine filaments with small clubbed ends; no text, label, arrow, scale bar, logo, watermark or border.
Avoid: fan-shaped or webbed foot, octopus arms, thick curled tubes, branching roots, anemone crown, segmented legs, gore or diagram styling.
~~~

#### Accepted foot-and-captacula edit

~~~text
Edit only the exposed soft anatomy at the broad opening. Replace the fan-shaped structure with one slender pointed conical muscular foot bearing two small lateral lobes. Replace every thick or coiled appendage with many independent threadlike captacula emerging around the foot base, each ending in one small clubbed tip. Preserve the shell, its downward orientation, the sediment cutaway, lighting, camera angle and 1536 × 1024 framing. Do not add a tentacle web, branches, labels or scale bars.
~~~

### 04 · Captacula contacting foraminifer tests

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas scientific macro reconstruction, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show several scaphopod captacula making contact with tiny foraminifer tests among fine seabed grains.
Scene/backdrop: A close sediment field with mixed mineral grains and a few small chambered foraminifer-like tests.
Subject: Several extremely fine, transparent, separate captacula, each ending in one small club-shaped adhesive tip; a few tips touch the outside of chambered tests.
Composition/framing: Use shallow depth of field to keep multiple tips and contacted particles readable without showing a whole animal.
Constraints: Show contact only, not swallowing or successful transport; no mouth, digestive tract, text, label, arrow, scale bar, logo, watermark or border.
Avoid: thick tentacles, suction cups, branching nets, mucus ropes, prey inside a body, predatory violence, oversized foraminifers or microscopy labels.
~~~

### 05 · Gillless mantle-cavity cutaway

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas scientific longitudinal cutaway, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Reconstruct the mantle cavity of one scaphopod inside a lightly curved shell while keeping both shell openings visible.
Scene/backdrop: A controlled underwater natural-history presentation above a dark neutral seabed.
Subject: One double-open tapering shell with a single clean lateral window, a continuous vascularized mantle lining, a simplified elongated body mass, the narrow posterior opening connected to seawater and the retracted foot and head region inside the broad anterior end.
Composition/framing: Keep the complete shell, both openings and the full lateral window inside the frame.
Constraints: Show no gills and no invented heart-shaped organ; keep tissues non-graphic; no text, label, arrow, scale bar, logo, watermark or border.
Avoid: bivalve gills, fish organs, chambered-nautilus partitions, a second shell wall, blood, dissection tools, diagram colors or exploded anatomy.
~~~

### 06 · Benthic grab survey sorting

The base generation established the survey tray, sieve and two gloved hands, but the shell curled into a tight hook. One precise edit restored the accepted lightly curved tusk-shell form and retained the survey scene.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas field-survey scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Show researchers sorting one benthic grab sample for small shells aboard a working survey vessel.
Scene/backdrop: A stainless-steel sediment tray with wet shell hash, a metal sieve and clean working-deck context.
Subject: Two blue-gloved hands sorting the sample and one Antalis vulgaris target shell visible among the sediment.
Composition/framing: Keep the tray, sieve, both hands and single target shell readable in one horizontal frame.
Constraints: Use non-contact, non-graphic handling; show no specimen label, text, number, logo, watermark, border or identifiable vessel branding.
Avoid: a laboratory display case, piles of identical tusk shells, dead-animal cues, blood, dramatic discovery pose or staged stock-photo gloss.
~~~

#### Accepted shell-shape edit

~~~text
Edit only the target shell in the existing sorting tray. Replace the tightly hooked shell with one lightly curved, tapered tusk shell that has one broad anterior opening, one narrow posterior opening, fine longitudinal sculpture and a brown-orange tint near the slender end. Preserve the tray, wet sediment, sieve, two blue-gloved hands, lighting, camera angle and 1536 × 1024 framing. Do not add another target shell, labels, scale bars or branding.
~~~

## Compression and runtime conversion

The scoped TinyPNG command compressed the six accepted source PNGs in place:

~~~sh
npm run compress -- src/assets/source/species/common-tusk-shell/*-source.png
~~~

The compression run reported 15953.2KB before compression and 5485.2KB after compression. The six final source files total 5,616,798 bytes and decode as opaque, single-frame, 8-bit palette sRGB PNGs with 256 colors.

The runtime files came from those exact compressed sources:

~~~sh
npm run convert:webp -- src/assets/source/species/common-tusk-shell/*-source.png
~~~

The repository script invokes `cwebp -q 82 -m 6 -mt`. It reported 5485.2KB before conversion and 1185.9KB after conversion. The six runtime WebPs total 1,214,324 bytes.

## Accepted file hashes

| Frame | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `adfa38ccee4ecf072441c5743015d0e530104585c2713db7dbcad0094714c3da` | `d1d43fa653937730472b0dfe7f2b58ea5415346b39ebbfa1ba16d9b3e10119fb` |
| 02 | `66a2a2c19884d0fa32d9b30724c647a1bb5b5b77127e65712d2f9f977a9c8606` | `0971870c8b1752cd105ba810ffba4b3642649faf64e6632307e382e65f9e1c66` |
| 03 | `37fbce3469c08f9f1c54b76784cdf63d757d9543b713b7079169bdf4f8f1df40` | `479e7b9ec70c7a467c355bca448b8ba153308fe688250f3538205f3e48cbc279` |
| 04 | `8351d694aa2521199c5963f03d9161642df2234661ceee557d42ad88808e96ff` | `cb2f5f88508b688321c60ad67491fc4dcd01ca417659662cb6197474c2a69bc7` |
| 05 | `8e94ec20a70b6687c03756c42886e17cbf9b134a3fbb00b3bad22569f8402373` | `1c7914beec71954c28580ea24d40be0962cb8c67719e68220e19bcec3640c3b0` |
| 06 | `26ef6e167ed754d0e8e972da661c46ff7bea11920ab82b7a0ff645a1335f4ca5` | `3f6ddfbb32a95e11dfdd2a8e6fd29dc2c2d65e45822160bee47a9207e266f7ee` |

## Final file checks

- ImageMagick decoded all twelve files as 1536 × 1024, opaque, single-frame, 8-bit sRGB images. Sources are palette PNGs; runtimes decode as TrueColor WebP.
- `webpinfo` decoded all six runtime files successfully.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Each six-file set contains six distinct SHA-256 hashes, and all twelve current files differ.
- Original-resolution inspection confirmed the accepted burial depth in frame 01, both shell openings in frame 02, the pointed foot and separate captacula in frame 03, contact-only feeding context in frame 04, the gillless lateral cutaway in frame 05 and the corrected lightly curved shell in frame 06.
- Source and runtime inspection found no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks, and no material crop or conversion defect.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
