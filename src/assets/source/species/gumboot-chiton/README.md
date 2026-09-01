# Gumboot Chiton image set

Codex's built-in imagegen created these six original project images on 2026-09-01 for the Fauna Atlas Gumboot Chiton profile. The set covers an adult rocky-reef portrait, the eight exposed valves of a juvenile, the adult girdle surface, ventral foot and gill anatomy, radular-tooth mineralization and a newly hatched trochophore. Each frame is a scientific reconstruction, not a record of a named animal, exact site, measured specimen, dissection, microscopy preparation or cultured larva.

The production record contains six `photorealistic-natural` base generations and one `precise-object-edit` pass. Frames 01 and 03–06 use their base generations. Frame 02 uses the accepted edit of a base generation that showed nine valves. Only the accepted eight-valve output belongs to this asset set.

- Species target: Gumboot Chiton, *Cryptochiton stelleri*
- Product Chinese name: 橡胶靴石鳖
- Search aliases: Giant Pacific Chiton, 斯特勒氏隐石鳖
- Generation tool: Codex built-in imagegen
- Generation calls: six base generations and one precise edit
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/gumboot-chiton/*.webp`
- Source format: opaque, single-frame, 8-bit palette sRGB PNG, 1536 × 1024
- Source compression: TinyPNG successfully compressed all six accepted PNGs; its run summary reported approximately 16.05 MB before compression and 5.37 MB after compression
- Runtime format: opaque, single-frame, 8-bit sRGB WebP, 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`, invoked through the scoped repository script
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Gumboot Chiton profile research](../../../../../docs/research/rubber-boot-chiton-profile.md)

## Files and themes

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-north-pacific-rocky-reef-adult-portrait-source.png` | `public/images/species/gumboot-chiton/01-north-pacific-rocky-reef-adult-portrait.webp` | One complete brick-red adult attached to a shallow rocky reef, with the subject on the right, left-side copy space and no visible valves |
| 02 | `02-juvenile-eight-exposed-valves-source.png` | `public/images/species/gumboot-chiton/02-juvenile-eight-exposed-valves.webp` | One yellow-orange juvenile on coralline rock with exactly eight exposed valves, a widening girdle and short red spicules |
| 03 | `03-adult-concealed-valves-girdle-macro-source.png` | `public/images/species/gumboot-chiton/03-adult-concealed-valves-girdle-macro.webp` | One adult dorsal surface with a continuous red-brown leathery girdle, fine rough texture and no plate seam or valve edge |
| 04 | `04-ventral-foot-and-gill-grooves-source.png` | `public/images/species/gumboot-chiton/04-ventral-foot-and-gill-grooves.webp` | Ventral reconstruction with one broad yellow-orange foot and repeated gills in the mantle grooves along both sides |
| 05 | `05-radula-tooth-mineralization-macro-source.png` | `public/images/species/gumboot-chiton/05-radula-tooth-mineralization-macro.webp` | One radular ribbon with repeated paired major teeth and a pale-to-red-brown-to-black maturation gradient |
| 06 | `06-newly-hatched-trochophore-microscopy-source.png` | `public/images/species/gumboot-chiton/06-newly-hatched-trochophore-microscopy.webp` | One green trochophore with an apical ciliary tuft and one prototroch ring, without plates, plate precursors, shell, foot or eyespot |

## Scientific and editorial boundaries

Adult *Cryptochiton stelleri* retains the eight-valve body plan of chitons, but its thick girdle completely covers those valves. Frames 01 and 03 therefore show no valve edge, plate seam or translucent plate outline. Their external shape and color support the intended reconstruction but cannot identify a voucher specimen, reveal the concealed valves or establish body length, age or sex.

Frame 02 uses the juvenile stage to make all eight valves visible without exposing an adult's concealed armor. The accepted image contains one small anterior valve, six intermediate valves and one posterior valve in a single connected row. Its yellow-orange body and short red spicules follow reported Oregon juveniles measuring 7.6–12.6 mm, but the image contains no scale bar and cannot assign a body length, age, locality or universal developmental schedule. Coralline rock supplies plausible habitat context rather than a mandatory microhabitat for every juvenile.

Frame 03 shows the adult girdle as a continuous leathery surface. Fine texture suggests the short spicules and small surface relief described for the species. The pixels cannot establish spicule composition, density or dimensions. The image does not expose the shell, map internal valve positions or show a histological section.

Frame 04 reconstructs ventral anatomy in a controlled, non-graphic view. The central muscular foot and bilateral gill-bearing mantle grooves remain distinct from the thick outer girdle. The frame does not document a common wild upside-down posture, give an exact gill count, show respiratory flow or measure attachment force.

Frame 05 presents one radular ribbon rather than an intact feeding event. Pale, red-brown and black tooth regions illustrate maturation, while the dark mature crowns suggest magnetite-bearing outer material. Color and shape cannot prove mineral identity, chemical composition, hardness, exact row count, wear rate or the structure of a measured tooth. The image does not depict a metal tongue, magnetic field or magnetically attracted debris.

Frame 06 follows the newly hatched stage described from an approximately 12°C Oregon culture. It shows a green yolky body, an apical tuft and a prototroch, with no valves, plate precursors, shell, muscular foot or red eyespot. The reconstruction cannot establish exact age, body size, viability, lineage or wild development rate. Later larvae form eyes, a foot and seven plate precursors before settlement; those later characters do not belong in this frame.

No frame establishes exact locality, depth, date, body size, age, sex, abundance, conservation status or a field-observed event. The files contain no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation record and normalized final prompts

The prompt blocks preserve the accepted scene requests in a normalized format. They record the final production intent rather than raw tool-call serialization.

### 01 · Adult on a North Pacific rocky reef

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a natural-history underwater editorial photograph of exactly one adult Cryptochiton stelleri attached low on a shallow North Pacific rocky reef.
Scene/backdrop: Coralline algae, red algae, kelp and a few sea urchins on a cool-water rocky reef under natural shallow-water light.
Subject: One broad, low, oval adult with a brick-red to reddish-brown leathery girdle, rough short-spicule texture and all dorsal valves completely concealed.
Composition/framing: Place the complete animal on the right with quiet blue-water and reef negative space on the left. Keep the full outline inside the frame.
Constraints: Exactly one adult; all valves concealed; attached posture; no text, labels, scale bar, logo, watermark or border.
Avoid: visible plates or seams, eyes, antennae, segmented legs, sea-slug or sea-cucumber anatomy, glossy rubber, deep-sea darkness, fantasy glow, CGI or illustration.
~~~

### 02 · Juvenile with eight exposed valves

The base generation established the juvenile, coralline-rock setting, yellow-orange girdle and red spicules, but it produced nine exposed valves. One precise edit removed the extra central valve. The accepted output contains exactly eight valves and preserves every other scene element.

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a scientific macro natural-history photograph of exactly one 7.6–12.6 mm juvenile Cryptochiton stelleri on pink coralline rock beneath red-algal shelter.
Scene/backdrop: Pink coralline rock with credible gravel, algal film and a restrained red-algal shelter.
Subject: One yellow-orange juvenile with exactly eight distinct overlapping dorsal valves in one anterior-to-posterior row, a widening girdle around them and small red spicule tufts.
Composition/framing: Use a clear dorsal macro view. Keep the whole juvenile and all eight valves visible and countable.
Constraints: Exactly one juvenile and exactly eight exposed valves; no text, labels, scale bar, logo, watermark or border.
Avoid: nine or more valves, insect segmentation, turtle shell, adult size, fully concealed valves, duplicate body parts, CGI or illustration.
~~~

#### Accepted precise-object-edit prompt

~~~text
Edit only the juvenile's dorsal valve row. It currently shows nine. Merge or remove one central valve so the final animal has exactly eight distinct exposed valves total, arranged as one small anterior valve, six intermediate valves and one posterior valve. Preserve every other pixel-level aspect: anatomy, yellow girdle, red spicules, coralline-rock setting, lighting, camera angle and 1536 × 1024 framing. Do not add labels or markings.
~~~

### 03 · Adult girdle surface

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an extreme natural-history macro of the dorsal girdle surface of one adult Cryptochiton stelleri under raking natural underwater light.
Subject: Brick-red, reddish-brown and muted-orange leathery tissue with dense tiny short spicules, subtle warts and thick folds, plus a little attached microalgae and sediment.
Composition/framing: Fill the frame with the coherent adult dorsal surface while retaining enough rocky edge to show its contact with the substrate.
Constraints: Zero visible valve edges or plate seams; no text, labels, scale bar, logo, watermark or border.
Avoid: fur, reptile scales, coral skeleton, uniform rubber texture, giant venomous spines, exposed plates, CGI or illustration.
~~~

### 04 · Ventral foot and gill grooves

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a non-graphic museum-quality scientific ventral reconstruction of exactly one Cryptochiton stelleri, with its ventral side facing the viewer on a clean subdued marine background.
Subject: One broad yellow-orange muscular foot centered lengthwise, a mantle groove on each side with repeated gills, and the thick outer girdle surrounding those structures. Dorsal valves remain hidden.
Composition/framing: Keep the full ventral outline, foot and both gill-bearing grooves visible in one centered view.
Constraints: One coherent animal; one continuous muscular foot; bilateral gill grooves; no text, labels, scale bar, logo, watermark or border.
Avoid: multiple feet, suction-cup arrays, crab gills, octopus arms, vertebrate mouth anatomy, protruding giant radula, blood, handling, CGI or illustration.
~~~

### 05 · Radular-tooth mineralization

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a microscopic scientific reconstruction of the Cryptochiton stelleri radula as a long ribbon with repeated paired tooth rows.
Subject: Show a clear maturation gradient from pale translucent new teeth through reddish-brown developing teeth to black mature three-cusped major teeth. Let one mature tooth section suggest a black magnetite outer cusp, a paler iron-phosphate core and a soft-to-hard transition into the stylus.
Composition/framing: Place the complete ribbon diagonally across a restrained dark microscopy field so repeated rows and the maturation gradient remain readable.
Constraints: Repeated paired rows rather than one isolated tooth; no text, labels, scale bar, logo, watermark or border.
Avoid: human or shark teeth, a single isolated tooth, cast metal, rust drips, sparks, magnetic field lines, iron filings, fantasy glow or diagram labels.
~~~

### 06 · Newly hatched trochophore

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas scientific scene, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a photomicrograph-style scientific reconstruction of exactly one newly hatched bright-green lecithotrophic trochophore larva of Cryptochiton stelleri suspended in clean seawater.
Subject: One simple yolky oval body with a distinct apical ciliary tuft and one prototroch ciliary ring, seen from a side-oblique angle.
Lighting/mood: Restrained laboratory microscopy lighting against a clean dark-blue field.
Constraints: Absolutely no plates, plate precursors, shell, adult girdle, muscular foot or red eyespot; no text, labels, scale bar, logo, watermark or border.
Avoid: veliger shell, miniature adult, feeding mouthparts, extra organisms, segmented body, fantasy glow or diagram styling.
~~~

## Compression and runtime conversion

The scoped TinyPNG command successfully compressed the six accepted source PNGs:

~~~sh
npm run compress -- src/assets/source/species/gumboot-chiton/*-source.png
~~~

The compression run reported an aggregate reduction from approximately 16.05 MB to 5.37 MB. The six final source files total 5,500,994 bytes and decode as opaque 8-bit palette sRGB PNGs with 255–256 colors.

The runtime files came from those exact compressed sources:

~~~sh
npm run convert:webp -- src/assets/source/species/gumboot-chiton/*-source.png
~~~

The repository script invokes `cwebp -q 82 -m 6 -mt`. The six runtime WebPs total 1,261,258 bytes.

## Accepted file hashes

| Frame | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `87c89f49ab929cbccaa014ac9e79ddc0c5bab054876c0e0bbb2fa22449093b19` | `7b8b3dd146f44daffdc1b616ed377ee2b2164810661df01ae2d75e021d69cdb9` |
| 02 | `ae21bc7b528001a13ba2eb4cb81e1d1ef68671c1db77c58094fb1387a48bfaeb` | `c854b39b35fbd32487c3f1b77b85d062034604eb1a00d1fea0d83a5c51ee192e` |
| 03 | `00f84909533f6c186eb42312744de7a2a2c9d5573fb8d5487d74663807142994` | `f71d785850582d35d6d2295732268ca7d5a01c9ba7ea542e6d0e5eda76cbe866` |
| 04 | `222781b91139583efbdd3efc26b4acbe8dd812e481471cc22a61a04e73acba69` | `0d1157cd8c8235ee492b908870f48df52510918f4d6fde012542811ded9cc10e` |
| 05 | `d68e8e3b3fbc163510653927f2fd996f7c982d75717af580763bebac92b9795b` | `d6264f6d2d4978ebca3ab8b79f3de40e6e3f3398f27df4ef2bdfe7500d9bf2e1` |
| 06 | `fe361d41b0eb8d027a6e7ddf6ef8ca53307078c725282e01c95a67b3a18447aa` | `0e7897da36a1a14669b0e45aba37ee02b2454b004b118f685ae7a9033c8305c9` |

## Final file checks

- ImageMagick decoded all twelve files as 1536 × 1024, opaque, single-frame, 8-bit sRGB images. Sources are palette PNGs; runtimes decode as TrueColor WebP.
- `webpinfo` decoded all six runtime files successfully.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Each six-file set contains six distinct SHA-256 hashes.
- Original-resolution inspection confirmed that frames 01 and 03 expose no adult valves, frame 02 has exactly eight valves, frame 04 separates the central foot from both gill grooves, frame 05 retains the tooth-maturation gradient, and frame 06 has no plate, plate precursor, shell, foot or eyespot.
- Source and runtime inspection found no visible text, labels, scale bars, logos, signatures, borders or watermarks, and no material crop or conversion defect.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
