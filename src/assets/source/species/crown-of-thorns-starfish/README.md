# Crown-of-thorns Starfish image set

Codex's built-in imagegen created these six original project images on 2026-08-29 for the Fauna Atlas Crown-of-thorns Starfish profile. The set covers an adult reef portrait, dorsal morphology, external coral digestion, a local high-density reef mosaic, broadcast spawning and an early five-armed juvenile. Each frame is a scientific reconstruction rather than a record of a named animal, site, survey, feeding event, spawning event or juvenile.

The production record contains twenty built-in imagegen calls: six `photorealistic-natural` generations and fourteen `precise-object-edit` passes. The first ten calls produced the initial six-image set. Ten post-review edits then repaired the feeding interface in frame 03, reduced frame 04 to four separate adults, moved the release in frame 05 to several arm bases, and corrected the early-juvenile plates and marginal ossicles in frame 06.

- Species target: Crown-of-thorns Starfish, *Acanthaster planci*
- Product Chinese name: 棘冠海星
- Search aliases: Crown-of-thorns Sea Star, 长棘海星
- Taxonomic scope: *A. planci* under the current WoRMS accepted record; the pixels cannot distinguish members of the *Acanthaster* species complex
- Generation tool: Codex built-in imagegen
- Generation calls: six `photorealistic-natural` calls and fourteen `precise-object-edit` calls
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/crown-of-thorns-starfish/*.webp`
- Source format: opaque single-frame sRGB PNG, 1536 × 1024
- Source compression: TinyPNG returned HTTP 429 without rewriting the initial six sources or the four post-review replacements on 2026-08-29; local ImageMagick palette-quantized each accepted source to at most 256 colors with Riemersma dithering
- Runtime format: opaque single-frame sRGB WebP, 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Crown-of-thorns Starfish profile research](../../../../../docs/research/crown-of-thorns-starfish-profile.md)

## Files and themes

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-coral-reef-adult-portrait-source.png` | `public/images/species/crown-of-thorns-starfish/01-coral-reef-adult-portrait.webp` | One complete adult on the right side of a healthy reef, with broad blue-water copy space on the left |
| 02 | `02-dorsal-disc-arms-and-spines-source.png` | `public/images/species/crown-of-thorns-starfish/02-dorsal-disc-arms-and-spines.webp` | One dorsal adult with one broad disc, sixteen traceable arms and dense long spines |
| 03 | `03-everted-stomach-coral-feeding-source.png` | `public/images/species/crown-of-thorns-starfish/03-everted-stomach-coral-feeding.webp` | One adult with about sixteen traceable arms, pale folded everted stomach tissue and exposed skeleton that retains the continuous branching geometry of the living coral colony |
| 04 | `04-reef-high-density-mosaic-source.png` | `public/images/species/crown-of-thorns-starfish/04-reef-high-density-mosaic.webp` | Exactly four separate adults with readable discs and arms across living coral and older algal substrate, without a white feeding scar |
| 05 | `05-broadcast-spawning-plume-source.png` | `public/images/species/crown-of-thorns-starfish/05-broadcast-spawning-plume.webp` | One arched adult with several faint releases distributed around multiple arm bases and merging above the body |
| 06 | `06-five-arm-juvenile-coralline-algae-source.png` | `public/images/species/crown-of-thorns-starfish/06-five-arm-juvenile-coralline-algae.webp` | One five-armed early juvenile with low dorsal plates and sparse, low marginal ossicles on pink crustose coralline algae |

## Scientific and editorial boundaries

WoRMS accepts *Acanthaster planci* and currently treats *A. solaris* as a synonym. Genetic and regional research resolves at least four crown-of-thorns lineages and commonly calls the Great Barrier Reef animal *Acanthaster cf. solaris*. The images target the product's accepted *A. planci* record, but body color, arm number, spines, reef context and feeding marks cannot diagnose a species or lineage from pixels alone. No frame establishes a North Indian Ocean locality.

Frames 01 to 05 show many-armed adults with one continuous central disc and dense dorsal spines. Arm counts were controlled for readability in the three close views, not recorded from voucher specimens. Frames 01 and 02 each show sixteen traceable arms; frame 03 shows about sixteen. Frame 04 shows exactly four separate bodies and no white feeding scar. That composition makes local density visible, but it does not measure a transect, meet a management threshold or prove an outbreak.

Frame 03 reconstructs external digestion. Pale folded tissue emerges from under the disc and inner arms, touches the feeding boundary, and sits beside exposed skeleton that preserves continuous branches and aligned corallite cups from the living colony. The picture cannot identify the coral, demonstrate digestive chemistry, measure consumption or supply a time sequence. A fresh feeding scar differs from colony-wide bleaching; the white pixels cannot diagnose the cause of every pale coral patch.

Frame 05 reconstructs the raised posture and several faint releases from multiple lateral arm-base areas. These streams reflect the rows of dorsal-lateral gonopores described by Pratchett et al. (2014), then merge into a thin diffuse cloud above the animal. The picture does not identify sex, show individual eggs or sperm, locate every gonopore, measure gamete output or document synchrony. Source: [Pratchett et al. 2014](https://doi.org/10.1201/b17143-4).

Frame 06 reconstructs the five-armed algal-feeding stage on crustose coralline algae. Its low dorsal plates and sparse, flattened marginal ossicles follow the early fan-shaped marginal spines and later appearance of pointed spines reported by Doll et al. (2025). The picture cannot prove active grazing, assign size or age, or demonstrate the later addition of arms and transition to coral feeding. Source: [Doll et al. 2025](https://link.springer.com/article/10.1007/s00338-025-02637-6).

Most detailed life-history, outbreak and management evidence comes from *Acanthaster* spp. or the Pacific lineage, often written as *A. cf. solaris*. The images do not transfer those observations into verified strict-species records. No frame establishes body diameter, spine length, age, sex, density, coral-cover loss, feeding rate, population trend, exact locality or conservation outcome. The files contain no text, labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Production call record

The accepted workspace sources use the outputs identified below. Generator intermediates remain outside the repository.

| Call | Frame | Mode | Result | Generator output |
| --- | --- | --- | --- | --- |
| 1 | 01 | Generation | Intermediate; arm count exceeded the requested range | `/Users/chris.li/.codex/generated_images/01a04d5c-19cd-7533-86c6-05f7a2eb6230/exec-adb4b711-7d96-4026-a06c-f14f5225f8fb.png` |
| 2 | 01 | Precise object edit | Accepted | `/Users/chris.li/.codex/generated_images/01a04d5c-19cd-7533-86c6-05f7a2eb6230/exec-76b29442-bd6c-418e-b3a5-1a518f55b2db.png` |
| 3 | 02 | Generation | Intermediate; arm count exceeded the range and one edge lacked margin | `/Users/chris.li/.codex/generated_images/01a04d5c-19cd-7533-86c6-05f7a2eb6230/exec-bd9b41cd-650e-49d8-9d5a-94f1e5bbe087.png` |
| 4 | 02 | Precise object edit | Accepted | `/Users/chris.li/.codex/generated_images/01a04d5c-19cd-7533-86c6-05f7a2eb6230/exec-8bef5f51-47a0-4b61-a8c5-b9caffef4528.png` |
| 5 | 03 | Generation | Intermediate; more than eighteen arm tips | `/Users/chris.li/.codex/generated_images/01a04d5e-2be3-7c11-892f-7b1c29fd7df9/exec-a927320c-7ff7-4b2c-bdb4-f6d79b215b5f.png` |
| 6 | 04 | Generation | Intermediate; six bodies and white feeding scars failed post-review requirements | `/Users/chris.li/.codex/generated_images/01a04d5e-2be3-7c11-892f-7b1c29fd7df9/exec-15d9324a-a1e1-4385-b5e8-6e534b8bf2bf.png` |
| 7 | 03 | Precise object edit | Rejected; arm count still exceeded eighteen | `/Users/chris.li/.codex/generated_images/01a04d5e-2be3-7c11-892f-7b1c29fd7df9/exec-b8395780-5da1-4216-9274-4dcbe1644eb1.png` |
| 8 | 03 | Precise object edit | Intermediate; arm anatomy passed, but the granular white feeding patch failed post-review | `/Users/chris.li/.codex/generated_images/01a04d5e-2be3-7c11-892f-7b1c29fd7df9/exec-8e42b0d0-f48a-4e21-82bb-d41a4d3d3222.png` |
| 9 | 05 | Generation | Intermediate; a single release from the dorsal center failed post-review | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-a10820a8-98a7-4fd5-abc3-a280d602dc5f.png` |
| 10 | 06 | Generation | Intermediate; adult-like dorsal spines failed post-review | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-b53b7e12-54cd-435c-ba26-d1b48546876b.png` |
| 11 | 03 | Precise object edit | Accepted; about sixteen readable arms, attached folded stomach tissue and continuous branching bare skeleton | `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-65c3a733-56c9-4e30-8ec5-8ae9548e1f1f.png` |
| 12 | 04 | Precise object edit | Accepted; exactly four separated adults, no fused or urchin-like bodies, and no white sand patch | `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-2423c284-39f4-4430-bac6-114a648699a4.png` |
| 13 | 04 | Precise object edit | Rejected; some animals exceeded eighteen arms | `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-53ac76f5-14f6-49b1-86dc-156f19f1e741.png` |
| 14 | 04 | Precise object edit | Rejected; thin-arm multiplication produced about twenty or more arms | `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-45057a4b-235a-4e76-a3a0-6ae3924a7daf.png` |
| 15 | 04 | Precise object edit | Rejected; the sixteen-direction constraint still produced excess arms | `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-7165fdeb-72c1-4387-8ae1-4b6a95fc9919.png` |
| 16 | 04 | Precise object edit | Rejected; about twelve arms per animal fell below the requested range | `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-2bbe9938-1bf1-40b6-9ac8-5ba3fe2328e6.png` |
| 17 | 05 | Precise object edit | Accepted; several faint arm-base releases replace the single dorsal-center plume | `/Users/chris.li/.codex/generated_images/01a04d7d-6f40-7873-82c1-e1747a0448d2/exec-fe41f252-1793-41c2-bae4-ab17bc0c6728.png` |
| 18 | 06 | Precise object edit | Rejected; a continuous dense serrated fringe remained around the arms | `/Users/chris.li/.codex/generated_images/01a04d7d-a22e-7990-9524-8cb2dc87c595/exec-59a9ab92-3e0c-427c-8459-ddb066e7bf10.png` |
| 19 | 06 | Precise object edit | Rejected; smaller marginal teeth still formed a near-continuous fringe | `/Users/chris.li/.codex/generated_images/01a04d7d-a22e-7990-9524-8cb2dc87c595/exec-9d1e2599-2d71-4878-b67f-f3fbf7f5241d.png` |
| 20 | 06 | Precise object edit | Accepted; low dorsal plates and sparse, low marginal ossicles replace adult-like spines | `/Users/chris.li/.codex/generated_images/01a04d7d-a22e-7990-9524-8cb2dc87c595/exec-de951713-1d00-4f3c-8d5e-2f65ec18e406.png` |

## Generation prompts

### 01 · Coral-reef adult portrait

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crown-of-thorns starfish species-detail cover and featured editorial card, exact 1536 × 1024 horizontal 3:2, opaque sRGB PNG
Primary request: Create one original photorealistic underwater natural-history photograph of a single complete living adult Crown-of-thorns starfish, Acanthaster planci, on a healthy Indo-Pacific coral reef. This is an evidence-informed visual reconstruction; exact Acanthaster species cannot be diagnosed from pixels alone.
Scene/backdrop: Clear tropical reef water over healthy mixed hard corals and natural reef limestone. The reef must show no pale feeding scar, no freshly denuded coral skeleton, no bleaching and no damaged trail.
Subject: Exactly one coherent adult with a broad central disc, 14–18 individually readable tapering arms connected naturally to that disc, and dense rows and fields of long, sharp, mobile-looking spines in biologically plausible positions, reaching proportions consistent with up to about 4 cm. The dorsal body is mottled red-brown and olive with restrained blue-gray accents. Keep tube feet unobtrusive and do not expose a dominant oral underside.
Style/medium: Photorealistic professional marine field photography with credible underwater optics, natural particulate detail, real coral and animal texture; no illustration or CGI look.
Composition/framing: Place the entire starfish on the right half, with every arm tip inside frame and a clean readable silhouette. Preserve broad quiet blue-water and reef negative space across the left half for interface copy. Use a slightly elevated three-quarter underwater viewpoint that still reads as a natural encounter.
Lighting/mood: Natural filtered tropical daylight, restrained reef colors, soft underwater contrast, no theatrical spotlight or fantasy glow.
Constraints: Exactly one complete adult; one central disc; 14–18 arms; no duplicated, fused, forked, detached or cropped arms; no feeding action or feeding scar; no people, divers, hands, equipment, aquarium staging, specimen labels, text, arrows, scale bars, logos, signatures, borders or watermarks; exact 1536 × 1024; opaque sRGB.
Avoid: sea-urchin silhouette, generic five-armed sea star, radial flower pattern, crown icon, tangled arms, extra central discs, smooth skin, blunt sparse spines, prominent tube feet, mouth view, prey, wounds, bleached coral, dead coral field, neon saturation, illustration, 3D render or fantasy anatomy.
~~~

#### Accepted precise-object-edit prompt

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas Crown-of-thorns starfish species-detail cover and featured editorial card, exact 1536 × 1024 horizontal 3:2, opaque sRGB PNG
Input image: Image 1 is the Crown-of-thorns starfish coral-reef cover generation.
Primary request: Change only the starfish's arm architecture. Reconstruct this same single adult with exactly 16 individually traceable, naturally unequal tapering arms connected to one broad continuous central disc. Each arm must have one distinct base and one tip. Remove any excess arms cleanly and reveal matching healthy coral reef beneath them.
Invariants: Preserve the same animal on the right half, complete in-frame silhouette, broad quiet blue-water and reef negative space across the left half, healthy Indo-Pacific coral reef without a feeding scar, slightly elevated three-quarter viewpoint, dense long sharp mobile-looking spines, mottled red-brown and olive body, restrained blue-gray accents, natural filtered daylight, underwater optics, focus, colors, dimensions, opaque sRGB and photorealistic marine natural-history style. Keep tube feet unobtrusive. The intended target is Acanthaster planci, but exact Acanthaster species cannot be diagnosed from pixels alone.
Constraints: Exactly one animal, one central disc and exactly 16 arms; every arm tip inside frame; no duplicated, fused, forked, detached, hidden, pasted or cropped arms; no feeding action, pale feeding scar, freshly denuded coral, bleaching, people, divers, hands, equipment, aquarium staging, text, labels, arrows, scale bars, logos, signatures, borders or watermarks.
Avoid: 17 or more arms, 15 or fewer arms, generic five-arm starfish, sea urchin, flower/mandala regularity, smooth skin, blunt sparse spines, prominent tube feet, mouth view, prey, wounds, dead coral field, neon color, illustration, 3D render or fantasy anatomy.
~~~

### 02 · Dorsal disc, arms and spines

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crown-of-thorns starfish dorsal morphology gallery image 2, exact 1536 × 1024 horizontal 3:2, opaque sRGB PNG
Primary request: Create one original photorealistic top-down to high-oblique underwater natural-history photograph of a single complete living adult Crown-of-thorns starfish, Acanthaster planci, emphasizing dorsal disc, radiating arms and spines. This is an evidence-informed visual reconstruction; exact Acanthaster species cannot be diagnosed from pixels alone.
Scene/backdrop: Natural Indo-Pacific reef substrate of weathered limestone, coral rubble and small patches of healthy living coral under clear seawater. No feeding action, scar or denuded coral patch.
Subject: Exactly one anatomically coherent adult. Show one broad continuous central disc and 14–18 individually traceable tapering arms radiating from it. Each arm must have its own natural base and one tip, with no duplication, fusion, branching or pasted repetitions. Cover the dorsal disc and arms with dense, long, sharp, mobile-looking spines in plausible rows and fields, with proportions consistent with lengths up to about 4 cm. Use a mottled red-brown and olive dorsal body with restrained blue-gray accents. Tube feet and oral structures must not dominate.
Style/medium: Photorealistic professional marine natural-history macro/close field photograph, realistic underwater optics, fine spine and skin texture, restrained color; no illustration or CGI look.
Composition/framing: Top-down to high-oblique close view. Keep the full uninterrupted outer outline, every arm base and every arm tip inside the 3:2 frame with a small natural margin of reef substrate. The central disc and arm origins must remain readable despite the dense spines.
Lighting/mood: Diffuse shallow-water daylight with soft directional relief across the spines, natural color attenuation and modest suspended particles.
Constraints: Exactly one whole adult and one central disc; 14–18 arms; no duplicated, fused, forked, detached, cropped or anatomically impossible arms; no feeding behavior, prey, feeding scar, people, divers, hands, tools, aquarium staging, text, labels, arrows, scale bars, logos, signatures, borders or watermarks; exact 1536 × 1024; opaque sRGB.
Avoid: generic five-arm starfish, sea urchin, flower or mandala symmetry, multiple animals, hidden arm origins, tangled arm pile, smooth body, short sparse knobs, prominent tube feet, mouth view, dead coral field, neon colors, illustration, 3D render or fantasy anatomy.
~~~

#### Accepted precise-object-edit prompt

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas Crown-of-thorns starfish dorsal morphology gallery image 2, exact 1536 × 1024 horizontal 3:2, opaque sRGB PNG
Input image: Image 1 is the top-down Crown-of-thorns starfish dorsal-morphology generation.
Primary request: Change only the arm architecture and the amount of substrate margin around the animal. Reconstruct this same single starfish with exactly 16 individually traceable, naturally unequal tapering arms radiating from one broad continuous central disc. Each arm must have one distinct base and one tip. Remove the excess arms cleanly and reveal matching natural reef substrate where they were. Scale or reframe the same animal only enough to leave a visible strip of substrate around every arm tip, including along the bottom edge.
Invariants: Preserve the same single adult, dorsal red-brown and olive mottling, restrained blue-gray accents, dense long sharp mobile-looking spines, top-down/high-oblique viewpoint, natural limestone/coral-rubble substrate, healthy coral patches, underwater lighting, focus, realistic textures, dimensions, opaque sRGB and photorealistic natural-history style. Keep the central disc and every arm origin readable through the spines. The intended target is Acanthaster planci, but exact Acanthaster species cannot be diagnosed from pixels alone.
Constraints: Exactly one animal, one central disc and exactly 16 arms; full uninterrupted outline inside frame; no duplicated, fused, forked, detached, hidden, pasted or cropped arms; no feeding action, prey, feeding scar, denuded coral, people, tools, text, labels, arrows, scale bars, logos, signatures, borders or watermarks.
Avoid: 17 or more arms, 15 or fewer arms, generic five-arm starfish, sea urchin, flower/mandala regularity, smooth body, short sparse knobs, prominent tube feet, mouth view, neon color, illustration, 3D render or fantasy anatomy.
~~~

### 03 · Everted stomach and coral feeding

#### Base generation prompt

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crown-of-thorns starfish feeding gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB project source
Primary request: Create one original, scientifically restrained natural-history macro photograph of one adult crown-of-thorns starfish, Acanthaster planci, feeding externally on a living table-form branching Acropora colony.
Scene/backdrop: Clear shallow tropical Indo-Pacific reef water with subdued blue-green background bokeh. The frame stays close to one coral colony. No diver, aquarium, tools, tags, human trace, or named location.
Subject: Show exactly one coherent adult crown-of-thorns starfish with one central disc and 16 individually traceable, naturally tapered arms, acceptable visible range 14–18. Arms radiate from the same disc, overlap only where natural, and drape over the branching coral. Its upper surface has dense, anatomically credible venomous spines and mottled muted reddish-brown, olive, and gray coloration. Use a close three-quarter oblique overhead camera angle that preserves the whole body silhouette while two or three inner arms lift slightly over coral relief, revealing a small amount of pale cream, wet, lobed everted stomach tissue on the oral underside.
Feeding evidence: The pale lobed stomach tissue must remain pressed directly against only one compact localized patch of coral beneath the central disc and inner-arm bases. It must look like a thin folded biological membrane conforming to coral contours, not a free-hanging blob. Immediately beside that active contact zone, show a sharply bounded patch of freshly denuded clean white Acropora skeleton with crisp corallite texture. Farther outward on the same physically continuous colony, show intact pigmented living coral tissue in natural tan-gold to subdued green-brown. Make the three spatial zones readable: localized stomach contact, adjacent fresh white skeleton, then living pigmented tissue farther away. Keep most of the reef and colony alive; do not imply whole-reef bleaching.
Style/medium: Photorealistic professional underwater marine natural-history macro photography, realistic seawater optics, restrained museum-publication color, living tissue texture, no illustration or CGI look.
Composition/framing: Exact 1536 × 1024 horizontal 3:2. The single complete starfish occupies the central two-thirds, seen at a low oblique overhead angle. Keep all arm tips inside frame when possible and make the central disc plus radial organization unmistakable. Place the localized feeding interface near the center-lower safe area, large enough to inspect. Preserve enough surrounding live Acropora to establish the bounded scar.
Lighting/mood: Diffuse tropical daylight with gentle underwater blue fill; sober field observation.
Materials/textures: Dense rigid pointed spines on the aboral surface; rough branching Acropora with fine corallites; pale cream everted stomach as thin soft folded lobes pressed to coral; clean white freshly exposed skeleton only near the feeding boundary; natural living coral tissue beyond.
Scientific boundary: Illustrate external digestion and a local fresh feeding scar. Do not claim a measured feeding rate, time sequence, coral death beyond the bounded patch, outbreak status, named event, or global reef causation.
Constraints: Exactly one integrated adult Acanthaster planci; 14–18 coherent arms from one central disc; dense spines; one localized patch of pale lobed everted stomach tissue touching coral only beneath the central disc or inner arms; sharp boundary to an adjacent fresh white skeletal patch; living pigmented Acropora tissue farther away; opaque full-frame color; no text, labels, arrows, scale bar, logo, signature, border, or watermark.
Avoid: chewing, biting, teeth, jaws, mouth, face, head, eyes, slime monster, giant loose organ, mucus plume, stomach covering the entire coral, gore, whole-colony bleaching, dead whole reef, apocalypse scene, second starfish, detached arms, fused arms, branching arms, double central disc, malformed radial symmetry, smooth spineless sea star, five-arm cartoon starfish, coral polyps mistaken for stomach, anemone, octopus, diver, tool, ruler, aquarium, text, logo, watermark.
~~~

#### Second initial precise-object-edit prompt

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas Crown-of-thorns starfish feeding gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB project source
Input images: Image 1 is the edit target. Its coral scene, feeding interface, color, light, camera and texture are accepted. Only the adult starfish still has too many arms.
Primary request: Reduce only the number of starfish arms. The finished animal must have exactly fourteen (14) broad-based, naturally tapered, unbranched arms attached to one central disc. Make the count visually unambiguous: seven separate arm tips fan across the upper half of the disc and seven separate arm tips fan across the lower half, with visible gaps between neighboring arm bodies. Remove all other starfish arms, arm stubs, duplicate tips and arm-like lobes. Reconstruct living coral behind every removed arm. Retain dense pointed spines on the disc and on each of the fourteen arms.
Preserve unchanged: Keep the one central disc at the same location and scale; keep the same mottled muted reddish-brown, gray and olive skin; keep the same exact three-quarter oblique overhead framing, full-body silhouette, background coral colony, underwater light, optics, depth of field and restrained color. Keep the pale cream folded everted stomach tissue pressed only against the same compact patch beneath the central disc and inner arm bases. Keep the same adjacent sharply bounded fresh white Acropora skeleton and the same living pigmented coral beyond. Do not enlarge, expose or move the stomach tissue.
Constraints: One starfish only; one central disc only; exactly 14 and no more than 14 arm tips; each arm connects to the disc, remains unbranched and ends once; dense spines; intact localized stomach-contact zone; bounded fresh white scar; live coral around it; exact 1536 × 1024 horizontal opaque color; no text, logo, border, signature or watermark.
Avoid: 15 or more arms, hidden extra arms, tiny arm stubs, forked arms, duplicated tips, two arms sharing one base, detached arms, fused neighboring arms, double disc, second animal, smooth spineless body, mouth, head, eyes, chewing, loose organ, slime, mucus, whole-colony bleaching, dead reef, restyling, reframing, color shift, text or watermark.
~~~

The pre-review image resolved as sixteen traceable arms despite this edit requesting fourteen. Original-resolution inspection found no fused or branching arms. Call 11 later replaced its granular feeding patch while preserving about sixteen readable arms.

### 04 · Reef high-density mosaic

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crown-of-thorns starfish local-density gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB project source
Primary request: Create one original wide documentary underwater natural-history photograph showing a local high density of adult crown-of-thorns starfish, Acanthaster planci, distributed across a heterogeneous tropical Indo-Pacific coral reef mosaic.
Scene/backdrop: Clear shallow-to-mid-depth reef slope under diffuse daylight. Build a spatially varied coral mosaic with substantial areas of intact living branching and table Acropora, other low reef structure, several small sharply bounded fresh white feeding scars, and separate patches of older dead substrate carrying muted olive-brown turf algae. Keep open water above and natural gaps between coral heads. The scene represents one generic observation, with no named locality, measured transect, survey markers, or claim about outbreak thresholds.
Subjects: Show exactly six clearly separate adult crown-of-thorns starfish distributed from foreground through middle distance. Each animal must have one coherent central disc, 14–18 individually traceable naturally tapered arms radiating from that disc, and dense anatomically credible spines. Use natural individual variation in muted reddish-brown, gray-purple, olive, and subdued rust. Leave visible reef or water gaps around every individual. No starfish touches, overlaps, merges with, or grows from another. Scale distant animals with perspective, but keep all six recognizable as separate adults. Some rest beside bounded fresh white scars while others cross live or older algal substrate; do not show everted stomach tissue in this wide frame.
Ecological mosaic: Keep a large share of living pigmented coral in tan, ochre, muted green-brown, and cream-tip tones. Confine brilliant white exposed skeleton to several localized patches with crisp boundaries, mostly near two or three starfish. Include older dead substrate as muted rough olive-brown algal surfaces that remain distinct from fresh white skeleton. Preserve healthy coral between affected patches so the image reads as a patchwork, not an entirely dead reef.
Style/medium: Photorealistic professional marine conservation documentary photography, authentic wide-angle underwater optics, natural haze and scale, restrained museum-publication processing, no illustration, montage, infographic, or CGI look.
Composition/framing: Exact 1536 × 1024 horizontal 3:2. Use a wide, slightly downward three-quarter view. One foreground adult sits in the lower-left-to-center area at readable scale; two separate midground adults occupy different coral heads; three smaller adults remain spaced across the farther reef. Maintain clear substrate corridors between all bodies. Let living coral, scars, and older substrate form a balanced mosaic across the frame. Keep the reef horizon and open blue water understated.
Lighting/mood: Diffuse tropical daylight with natural blue attenuation; calm field-documentary observation without dramatic storm light, ominous darkness, flames, or disaster spectacle.
Materials/textures: Dense rigid spines; rough starfish skin; living coral tissue over fine corallites; crisp fresh white exposed skeleton in bounded spots; coarse muted turf algae on older substrate; suspended particles and natural water haze.
Scientific boundary: The image illustrates several adults at local high density in one generic reef view. It does not document a measured transect, named outbreak, density threshold, time series, population trend, coral-cover estimate, causal attribution, or global reef condition.
Constraints: Exactly six separate adult Acanthaster planci; each with one disc and 14–18 coherent unbranched arms plus dense spines; no contact or fusion between animals; mixed living coral, bounded fresh white scars, and older algal substrate all present; much living reef remains visible; opaque full-frame color; no diver, survey tape, quadrat, tool, boat, cage, tag, text, caption, label, arrow, map, scale bar, logo, signature, border, or watermark.
Avoid: carpet of bodies, fused starfish mass, stacked or overlapping starfish, duplicated shared arms, detached arms, branching arms, double central discs, five-arm cartoon sea stars, smooth spineless stars, dozens or hundreds of animals, apocalypse framing, dead whole reef, massive bleaching, all-white coral landscape, murky poison cloud, skeleton field, global causation symbolism, dramatic before-and-after split, divers, scientists, tools, transect line, quadrat, monitoring equipment, aquarium, feeding close-up, exposed stomach, slime, gore, text, logo, watermark.
~~~

### 05 · Broadcast-spawning plume

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crown-of-thorns starfish spawning gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one original photorealistic underwater natural-history reconstruction of a single adult Crown-of-thorns starfish, Acanthaster planci, in a broadcast-spawning posture above an Indo-Pacific coral-reef surface.
Subject and action: Exactly one coherent adult with a broad central disc, 14 to 18 long tapering arms, dense sharp mobile-looking spines, and mottled red-brown, olive and restrained blue-gray coloration. The arm tips remain braced on coral rubble while the central disc rises into a low dome. A single soft, diffuse, pale gamete cloud disperses upward from the aboral central-disc region into moving seawater. Keep the plume visually undifferentiated so it cannot be read as eggs or sperm. Preserve ordinary sea-star anatomy; no face, eyes, head or radial symmetry errors.
Scene/backdrop: Clear tropical reef water above limestone rubble and sparse living coral, with distant reef structure and suspended particles.
Composition/framing: Low three-quarter view. Keep the complete animal and every arm tip inside the frame, occupying the lower half, with open blue water above for the diffuse plume.
Lighting/mood: Restrained natural reef daylight, realistic underwater color loss, documentary museum-publication quality.
Scientific boundary: The pixels must not imply a measured animal, known sex, named site, exact date, synchronized spawning event or verified species-level diagnosis.
Constraints: Exactly one adult; one diffuse plume only; no second starfish, diver, injection tool, labels, scale bar, text, arrows, logos, signature, border or watermark.
Avoid: five-arm ordinary starfish shape, fewer than 12 arms, more than 20 arms, fused or branching arms, tentacles, crown-shaped head, explosive jet, bubbles as gametes, giant visible eggs, colored sperm, smoke, blood, fantasy glow, CGI, illustration, oversaturation.
~~~

### 06 · Five-armed juvenile on coralline algae

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crown-of-thorns starfish juvenile gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one original photorealistic underwater macro natural-history reconstruction of a very young Crown-of-thorns starfish juvenile, Acanthaster planci, grazing on pink crustose coralline algae before the later coral-feeding stage.
Subject: Exactly one tiny coherent five-armed juvenile sea star. Give it a broad pentagonal central disc, five short evenly spaced tapering arms, a low profile, fine short developing spines rather than an adult forest of long thorns, and mottled olive-brown coloration that remains readable against the pink coralline-algal crust. Show the oral surface contacting the substrate; do not expose or invent a face, mouth, eyes or head. No adult starfish.
Scene/backdrop: Extreme close natural reef macro over rough limestone covered by continuous natural pink crustose coralline algae, with small pores, biofilm and restrained encrusting texture. No aquarium, tray or laboratory equipment.
Composition/framing: Elevated oblique macro view. Keep the entire juvenile and all five arm tips inside the frame, occupying the central third, with enough substrate around it to show the grazing surface. No ruler or artificial scale cue.
Lighting/mood: Soft shallow-water daylight, realistic wet textures, shallow depth of field, restrained documentary color.
Scientific boundary: The frame illustrates an early herbivorous juvenile stage; it must not assign a numeric size, age, site, feeding rate, developmental timing or verified species-level diagnosis from pixels.
Constraints: Exactly one five-armed juvenile; no adult many-armed morphology, no living coral prey, no feeding scar, no person, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: ordinary colorful aquarium starfish, more or fewer than five arms, fused or branching arms, long adult spines, crown-shaped body, coral polyp predation, visible stomach, eggs, larvae, fantasy glow, CGI, illustration, oversaturation.
~~~

## Post-review repair prompts

### Call 11 · Frame 03 feeding-interface repair · Accepted

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-65c3a733-56c9-4e30-8ec5-8ae9548e1f1f.png`

The accepted edit has one disc, about sixteen readable complete arms, attached folded stomach tissue at the coral boundary, and bare skeleton with continuous branching and corallite-cup structure.

~~~text
Use case: precise-object-edit
Asset type: scientific natural-history website image
Input images: Image 1 is the edit target.
Primary request: Preserve the existing underwater close-up composition and the single crown-of-thorns starfish, but repair the feeding interface. Replace the flat granular white patch beneath the animal with a sharply bounded patch of freshly exposed coral skeleton belonging to the same continuous living branching coral colony. The exposed area must retain continuous branching geometry and recognizable corallite cup texture that aligns exactly with the neighboring live coral tissue. Add a thin, wet, pale cream, folded leaf-like sheet of everted stomach tissue emerging visibly from beneath the central disc and inner arm bases, pressed snugly across a small local section of the boundary between living tissue and newly bare skeleton.
Subject anatomy: exactly one coherent crown-of-thorns starfish with one central disc, dense long spines, and 14–18 readable complete unbranched arms. Keep the animal's scale, dorsal view, placement, and muted blue-gray-brown coloration.
Scene/backdrop: one continuous branching coral colony; preserve abundant olive-gold living coral across most of the frame and the existing blue-water background.
Style/medium: photorealistic underwater documentary macro photography with natural optical softness, particulate haze, and plausible reef textures.
Composition/framing: preserve the original landscape framing, camera angle, and centered animal.
Lighting/mood: preserve natural blue-green underwater daylight and realistic shadows.
Materials/textures: wet translucent stomach folds; intact living coral polyps; porous white-to-ivory coral skeleton with aligned branches and corallite cups.
Constraints: change only the feeding interface and any small anatomical correction needed to keep the animal coherent. The stomach must remain attached beneath the animal and touch the coral boundary. The bare skeleton must read as the same coral structure after tissue removal. Keep most coral alive and colored. Maintain an opaque sRGB landscape image at 1536×1024.
Avoid: flat white carpet, sand patch, rice grains, loose pellets, mucus blob, detached organ, exposed viscera, gore, bleached whole colony, dead white background, multiple starfish, sea-urchin shape, split or fused arms, forked arms, text, labels, arrows, borders, logos, or watermark.
~~~

### Call 12 · Frame 04 four-animal repair · Accepted

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-2423c284-39f4-4430-bac6-114a648699a4.png`

The accepted edit has exactly four clearly separated single-disc adults. It contains no urchin-like hemisphere, fused body or white sand patch, and it retains live coral, algae-covered substrate and natural perspective.

~~~text
Use case: precise-object-edit
Asset type: scientific natural-history website image
Input images: Image 1 is the edit target.
Primary request: Reorganize the animals in the existing wide reef-slope scene into exactly four, no more and no fewer, clearly separated adult crown-of-thorns starfish. Remove every extra animal and rebuild any malformed animal. Each of the four must have one plainly identifiable central disc, 14–18 complete readable unbranched arms radiating from that disc, and dense long venomous-looking spines. Show each animal as a flattened multi-armed starfish crawling across reef substrate, never as a round or hemispherical sea urchin.
Scene/backdrop: preserve the same broad tropical coral reef slope, blue water, abundant living branching and table corals, plus old algae-covered reef substrate. Four animals share this one continuous landscape scene.
Style/medium: photorealistic underwater documentary photography with natural reef detail, optical softness, particulate haze, and plausible water color.
Composition/framing: preserve the 1536×1024 landscape frame and wide-angle viewpoint. Distribute the four complete animals at natural perspective scales across foreground, middle distance, and background, with visible reef gaps between every pair. Keep all four inside the frame with no cropped bodies and no overlap or fusion.
Lighting/mood: preserve natural blue-green underwater daylight and depth falloff.
Materials/textures: coherent leathery starfish bodies with long needle-like spines; live coral tissue; rough algae-coated old reef; porous coral skeleton with corallite cups where locally exposed.
Constraints: show exactly four separate starfish. Give every animal a coherent single body plan, one central disc, and 14–18 intact arms with readable tips. Maintain plausible perspective, scale, contact shadows, and substrate contact. Retain large areas of living coral and older algae-covered substrate. If any white feeding area remains, make it a small, sharply bounded patch of newly exposed skeleton continuous with the neighboring live coral, preserving matching branch or corallite-cup structure. The image illustrates local higher density only and must not contain visual measurement graphics or outbreak claims. Keep opaque sRGB output at 1536×1024.
Avoid: fifth animal, partial hidden animal, merged animals, overlapping bodies, sea-urchin hemisphere, round spiny ball, fused central discs, forked or branching arms, split arms, disconnected arms, flat white carpet, sand patch, snow-like patch, bleached whole reef, extensive dead reef, text, labels, counts, arrows, borders, logos, or watermark.
~~~

### Call 13 · Frame 04 exact-sixteen-arm trial · Rejected

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-53ac76f5-14f6-49b1-86dc-156f19f1e741.png`

The four subjects and reef scene passed review, but original-resolution inspection found more than eighteen arms on some animals and overly regular arm shapes.

~~~text
Use case: precise-object-edit
Asset type: scientific natural-history website image
Input images: Image 1 is the edit target and already has the correct reef scene and exactly four separated starfish.
Primary request: Correct only the arm anatomy of the four existing crown-of-thorns starfish. Redraw each existing animal with exactly 16 complete, plainly countable, unbranched arms radiating from one clearly visible central disc. Give every arm one distinct base, one continuous axis, and one visible tapered tip. Keep dense long spines attached along the arms, but do not let spine rows or body folds resemble extra arms.
Composition/framing: preserve the current wide-angle 1536×1024 landscape composition, the exact count of four animals, their four positions, their separation, their natural foreground-to-background scale differences, and all reef gaps between them.
Scene/backdrop: preserve the blue-water reef slope, abundant living branching and table corals, older algae-covered substrate, water haze, lighting, shadows, and color balance.
Style/medium: preserve photorealistic underwater documentary photography and natural optical softness.
Constraints: change only the arm anatomy needed to make each of the four existing animals have exactly 16 readable arms. Keep exactly four animals, no more and no fewer. Each animal must remain a flattened coherent starfish with one disc, 16 complete arms, dense long spines, realistic substrate contact, and no overlap with another animal. Keep all four bodies fully inside the frame. Maintain opaque sRGB output at 1536×1024.
Avoid: extra animal, partial animal, hidden animal, more or fewer than 16 arms on any animal, forked arms, split arms, fused arms, disconnected arms, duplicate arm tips, arm-like spine bundles, merged central discs, overlapping bodies, round sea-urchin hemisphere, white sand patches, whole-reef bleaching, text, labels, numbers, arrows, borders, logos, or watermark.
~~~

### Call 14 · Frame 04 exact-fourteen-arm trial · Rejected

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-45057a4b-235a-4e76-a3a0-6ae3924a7daf.png`

The output kept exactly four separate animals, but it multiplied thin arms to about twenty or more per body.

~~~text
Use case: precise-object-edit
Asset type: scientific natural-history website image
Input images: Image 1 is the edit target. Its reef scene, wide framing, and four animal positions are correct.
Primary request: Replace only the four existing starfish bodies with anatomically clear crown-of-thorns starfish that each have exactly 14 large, complete, unbranched arms. Build every animal as a plainly countable fourteen-point radial star: one visible central disc, fourteen distinct arm bases, fourteen continuous arm axes, and fourteen tapered arm tips. Leave a broad wedge of visible reef substrate between neighboring arms so no pair reads as one arm and no spine bundle reads as an extra arm.
Subject detail: four adult crown-of-thorns starfish, each flattened against the reef, each with exactly 14 robust arms and dense long spines attached to the disc and arms. Keep natural individual pose variation while preserving the same clear fourteen-arm anatomy.
Composition/framing: preserve the exact count of four animals, their upper-left, upper-center, lower-left, and lower-right positions, their separation, the gaps between bodies, natural perspective scale differences, and the 1536×1024 landscape frame. Keep all four bodies fully visible.
Scene/backdrop: preserve the same blue-water reef slope, abundant living branching and table corals, older algae-covered reef substrate, water haze, lighting, shadows, and color balance.
Style/medium: photorealistic underwater documentary photography with plausible reef texture and natural optical softness.
Constraints: change only the four animal bodies. Each body must have exactly 14 clearly separated arms, no more and no fewer. Preserve exactly four animals, one central disc per animal, realistic contact shadows, dense arm spines, and abundant live coral. Maintain opaque sRGB output at 1536×1024.
Avoid: fifteenth arm, extra arm-like appendage, arm-like spine bundle, forked arm, split arm, fused arm, duplicate tip, hidden tip, disconnected limb, fifth animal, partial animal, merged animals, overlapping bodies, sea-urchin shape, round spiny ball, flat white patch, sand patch, whole-reef bleaching, text, labels, numbers, arrows, borders, logos, or watermark.
~~~

### Call 15 · Frame 04 sixteen-direction trial · Rejected

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-7165fdeb-72c1-4387-8ae1-4b6a95fc9919.png`

The sixteen-direction constraint still produced too many arms.

~~~text
Use case: precise-object-edit
Asset type: scientific natural-history website image
Input images: Image 1 is the edit target. Preserve its reef scene, four animal positions, framing, and lighting.
Primary request: Replace only the four starfish bodies. Give each animal one central disc and exactly 16 broad, complete, unbranched arms arranged as a readable 16-direction compass star. Relative to each animal's own disc, put one arm at each of these directions and nowhere between them: N, NNE, NE, ENE, E, ESE, SE, SSE, S, SSW, SW, WSW, W, WNW, NW, NNW. Each listed direction gets exactly one arm with one base, one continuous axis, and one tapered tip. Leave clear reef-colored gaps between all neighboring arms.
Subject detail: exactly four adult crown-of-thorns starfish, flattened against the reef. Each has exactly 16 thick arms, one at every named compass direction, with dense long spines attached along the disc and arms. Vary arm curvature and perspective slightly so the animals remain natural, but preserve all 16 distinct directions and do not add intermediate arms.
Composition/framing: preserve the upper-left, upper-center, lower-left, and lower-right animal placements, natural perspective scale differences, visible reef gap between bodies, wide-angle viewpoint, and 1536×1024 landscape frame. Keep all four bodies fully visible.
Scene/backdrop: preserve blue water, abundant living branching and table corals, older algae-covered reef substrate, particulate haze, shadows, and color balance.
Style/medium: photorealistic underwater documentary photography.
Constraints: change only the four animal bodies. Exactly four animals total. Exactly 16 arms per animal, corresponding only to the 16 listed directions. One central disc per animal. Keep realistic substrate contact, dense long spines, abundant live coral, opaque sRGB output, and 1536×1024 dimensions.
Avoid: any arm between the 16 named directions, seventeenth arm, extra arm-like appendage, arm-like spine bundle, forked arm, split arm, fused arm, duplicate tip, hidden tip, disconnected limb, fifth animal, partial animal, merged or overlapping animals, round sea-urchin shape, flat white patch, sand patch, whole-reef bleaching, text, compass labels, numbers, arrows, borders, logos, or watermark.
~~~

### Call 16 · Frame 04 twelve-position trial · Rejected

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-42f1-74b0-b06f-54d9cdda73fa/exec-2bbe9938-1bf1-40b6-9ac8-5ba3fe2328e6.png`

The output reduced the bodies to about twelve arms, below the requested fourteen-to-eighteen range.

~~~text
Use case: precise-object-edit
Asset type: scientific natural-history website image
Input images: Image 1 is the edit target. Preserve its reef scene, wide framing, lighting, and four animal positions.
Primary request: Simplify only the four starfish bodies. Build each animal as a twelve-position clock-face star with one broad complete arm aimed at each hour mark: 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and 11 o'clock. Do not place any arm between hour positions. Make the twelve major arms thick, continuous, unbranched, and separated by broad visible wedges of reef. Keep the crown-of-thorns appearance through dense long spines on those major arms and the central disc, without extra arm-like spine bundles.
Subject detail: exactly four adult crown-of-thorns starfish, each flattened against the reef, with one coherent central disc and the same simple twelve-hour radial body plan. Give the four animals slight natural pose and perspective variation while keeping every major arm readable from base to tapered tip.
Composition/framing: preserve the upper-left, upper-center, lower-left, and lower-right placements, visible gaps between all animals, foreground-to-background scale, wide-angle viewpoint, and 1536×1024 landscape frame. Keep every body fully visible.
Scene/backdrop: preserve blue water, abundant live branching and table corals, older algae-covered reef substrate, particulate haze, contact shadows, and color balance.
Style/medium: photorealistic underwater documentary photography.
Constraints: change only the four animal bodies. Keep exactly four animals and one disc per animal. Use only the twelve named hour directions for major arms. Keep all arms complete, unbranched, and clearly separated. Maintain realistic substrate contact, dense long spines, abundant live coral, opaque sRGB output, and 1536×1024 dimensions.
Avoid: arm between hour marks, extra appendage, forked arm, split arm, fused arm, duplicate tip, hidden tip, disconnected limb, fifth animal, partial animal, merged or overlapping bodies, sea-urchin hemisphere, round spiny ball, flat white patch, sand patch, whole-reef bleaching, text, clock labels, numbers, arrows, borders, logos, or watermark.
~~~

### Call 17 · Frame 05 distributed-release repair · Accepted

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-6f40-7873-82c1-e1747a0448d2/exec-fe41f252-1793-41c2-bae4-ab17bc0c6728.png`

The accepted edit replaces the bright dorsal-center plume with several faint streams that begin around multiple arm bases and merge above the animal.

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas species-profile scientific scene source image
Input images: Image 1: edit target
Primary request: Change only the spawning-release visual in Image 1. Remove the bright central point and the single plume rising from the top center of the disc. Show several extremely faint, dispersed, soft-edged streams of tiny suspended particles beginning simultaneously from multiple lateral areas around several arm bases near the central disc. Each stream must have a separate, spatially distributed origin at an arm base, then drift upward and gradually merge into one thin, diffuse cloud above the animal.
Scene/backdrop: Preserve the coral-rubble seabed and open blue water from Image 1.
Subject: Preserve exactly one complete many-armed adult crown-of-thorns starfish, with arm tips supporting the body and the central disc slightly raised.
Style/medium: Photorealistic underwater natural-history scene with restrained scientific plausibility.
Composition/framing: Preserve the low three-quarter viewpoint, landscape composition, subject scale, and full-body framing from Image 1.
Lighting/mood: Preserve the existing natural underwater daylight, water clarity, depth, and color balance.
Constraints: The multiple particle streams must begin beside multiple arm bases, not from the dorsal top of the central disc. Keep the starfish anatomy, arm count and placement, spines, pose, substrate, background, camera angle, and composition unchanged. The image must remain 1536×1024, fully opaque, and sRGB. No text, labels, logos, borders, or watermark. The pixels must not imply or claim sex, gamete quantity, synchronized spawning, location, or species-level identification.
Avoid: any nozzle, pore, hole, glowing point, central fountain, single-source plume, vertical jet, explosive release, dense smoke column, bubbles masquerading as release, or individually recognizable eggs or sperm.
~~~

### Call 18 · Frame 06 juvenile-spine repair · Rejected

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-a22e-7990-9524-8cb2dc87c595/exec-59a9ab92-3e0c-427c-8459-ddb066e7bf10.png`

The edit removed the long dorsal spines and retained five arms, but it produced a continuous dense serrated fringe instead of a few small fan-shaped or leaf-shaped marginal spines.

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas species-profile scientific reconstruction source image
Input images: Image 1 is the edit target.
Primary request: Edit only the dorsal anatomy and spines of the single juvenile starfish in Image 1. Remove the dense, conspicuous, adult-like forest of pointed dorsal spines. Replace it with a low, smooth, restrained early-juvenile dorsal surface with fine granular plates and only a small number of tiny fan-shaped or leaf-shaped marginal spines along the arm edges. The central disc and upper arm surfaces must have no long conical spikes.
Scene/backdrop: Preserve the same pink-purple crustose coralline algae substrate, rock texture, underwater setting, depth of field, and macro-photography composition.
Subject: One complete very-early-stage five-armed Acanthaster-genus juvenile. Exactly five full arms must radiate separately from one coherent pentagonal central disc. Each arm must remain anatomically continuous, unbranched, unfused, and fully visible. Keep the existing overall pose, silhouette, scale, camera angle, and placement.
Style/medium: restrained, scientifically plausible photorealistic underwater macro photograph; natural imperfections and real biological texture, not an illustration.
Lighting/mood: preserve the warm underwater macro lighting and soft falloff.
Color palette: realistic muted juvenile beige, olive-gray, and brown against pink-purple coralline algae; avoid vivid fantasy colors.
Output intent: 1536 x 1024 landscape, opaque sRGB PNG.
Constraints: Change only the starfish dorsal surface and marginal spine morphology. Keep exactly one five-armed juvenile and the existing substrate and framing. Depict only a scientific scenario reconstruction of the five-armed algal-grazing early Acanthaster stage; the pixels must not imply proof of species identity, exact age, or observed feeding. No adult form, no extra arms, no missing arms, no branching or fused arms, no live coral feeding, no scale bar, no labels, no text, no logo, no watermark.
Avoid: dense dorsal spikes; prominent adult crown-of-thorns spines; forest-like long sharp spines on the central disc or arm backs; adult or multi-armed morphology; extra animals; anatomy diagrams; feeding scars.
~~~

### Call 19 · Frame 06 marginal-fringe repair · Rejected

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-a22e-7990-9524-8cb2dc87c595/exec-9d1e2599-2d71-4878-b67f-f3fbf7f5241d.png`

The edit lowered the dorsal plates and reduced the marginal spines, but a near-continuous fine-toothed outline remained around all five arms.

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas species-profile scientific reconstruction source image
Input images: Image 1 is the edit target and already has the correct one-animal, exactly-five-arm geometry, substrate, framing, and overall color.
Primary request: Change only the juvenile starfish's edge spines and dorsal microrelief. Remove most of the continuous saw-tooth fringe around the arms. Leave only sparse, tiny, low, blunt fan-shaped or leaf-shaped marginal ossicles at irregular intervals along the arm edges. Flatten and soften the dorsal microrelief so the central disc and arm backs read as low, smooth early-juvenile plates with fine natural granulation, never as protruding thorns.
Constraints: Preserve exactly one complete juvenile; preserve exactly five full unbranched and unfused arms radiating separately from one coherent pentagonal central disc; preserve its silhouette, pose, size, placement, camera angle, macro-photography depth of field, pink-purple crustose coralline algae substrate, rock texture, lighting, and restrained beige-brown colors. Keep the entire subject visible. Opaque sRGB landscape image, 1536 x 1024. No long pointed spines anywhere on the dorsal surface. No dense edge spikes. No adult or multi-armed form, no extra or missing arms, no live coral feeding, no scale bar, no text, no label, no logo, no watermark. Depict only a scientific scenario reconstruction of the five-armed algal-grazing early Acanthaster-genus stage; do not visually claim confirmed species identity, exact age, or observed feeding.
~~~

### Call 20 · Frame 06 sparse-marginal-ossicle repair · Accepted

Generator output: `/Users/chris.li/.codex/generated_images/01a04d7d-a22e-7990-9524-8cb2dc87c595/exec-de951713-1d00-4f3c-8d5e-2f65ec18e406.png`

The accepted edit retains one complete five-armed juvenile and the original coralline-algae macro scene. Low dorsal plates replace adult-like pointed spines; small, inconspicuous marginal ossicles break up the former continuous fringe.

~~~text
Use case: precise-object-edit
Asset type: Fauna Atlas species-profile scientific reconstruction source image
Input images: Image 1 is the edit target. Its single animal, exactly-five-arm anatomy, low smooth dorsal surface, coralline-algae substrate, framing, lighting, and color are correct.
Primary request: Edit only the outlines of the five arms. Remove the remaining continuous serrated fringe. Make at least 80 percent of every arm edge visually smooth and unbroken. On each arm, retain only two to four widely spaced, tiny, low, blunt, flattened fan-shaped or leaf-shaped marginal ossicles; they must sit close to the edge and must not form a saw-tooth row or read as pointed thorns.
Constraints: Keep the dorsal plate texture unchanged and low. Preserve exactly one complete juvenile, exactly five full separate arms from one coherent pentagonal central disc, no branch or fusion, the exact pose, silhouette proportions, subject size and placement, camera angle, pink-purple crustose coralline algae substrate, rock details, depth of field, lighting, and restrained beige-brown color. Keep the whole animal visible. Opaque sRGB landscape, 1536 x 1024. No long spine, no dense edge spikes, no adult or multi-armed form, no extra or missing arm, no feeding on live coral, no scale bar, no text, no label, no logo, no watermark. The image remains a scientific scenario reconstruction of a five-armed algal-grazing early Acanthaster-genus stage and must not claim confirmed species identity, exact age, or observed feeding.
~~~

## Static and visual validation

- Static inspection confirms six opaque sRGB PNG sources at 1536 × 1024.
- All six runtime assets decode as opaque 1536 × 1024 single-frame sRGB WebP files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Original-resolution inspection covered subject count, copy space, disc continuity, arm count, spines, stomach position, continuous exposed coral skeleton, separation of the four adults, distributed arm-base release, and the five-armed juvenile's dorsal plates and marginal ossicles.
- Inspection found no visible text, labels, arrows, scale bars, logos, signatures, borders or watermarks.
- TinyPNG returned HTTP 429 for the initial six sources and for each of the four post-review replacement sources without rewriting them. ImageMagick then reduced the accepted PNGs to a 256-color palette with Riemersma dithering, and `cwebp -q 82 -m 6 -mt` produced the runtime assets.
- Runtime WebP sizes are 269,056; 541,436; 389,122; 426,132; 399,996; and 243,308 bytes in frame order, totaling 2,269,050 bytes.
- Runtime inspection found no new cropping, subjects, visible text, logos, watermarks, borders or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
