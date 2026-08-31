# Venus' Flower Basket image set

OpenAI's built-in imagegen created these six original project images on 2026-08-31 for the Fauna Atlas *Euplectella aspergillum* profile. The set covers a living sponge on soft sediment, the terminal sieve plate and reinforced lattice, buried anchoring spicules, filter-feeding flow, two sponge-associated shrimp and non-contact ROV monitoring. Each frame reconstructs a generalized scientific scene rather than a named specimen, locality, flow experiment, symbiosis record or survey observation.

- Generation tool: OpenAI built-in imagegen
- Generation modes: `photorealistic-natural`, `scientific-educational` and `precise-object-edit`
- Input mode: six brand-new generations plus two targeted edits; the first anchoring frame and first monitoring frame were rejected and replaced by their edited outputs
- Research brief: [`docs/research/venus-flower-basket-profile.md`](../../../../../docs/research/venus-flower-basket-profile.md)
- Source directory: `src/assets/source/species/venus-flower-basket/`
- Runtime directory: `public/images/species/venus-flower-basket/`
- Source format: 1536 x 1024 opaque single-frame sRGB PNG
- Runtime format: 1536 x 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: eight, comprising six accepted new scenes and two accepted edits; two initial outputs were rejected
- Compression: TinyPNG returned HTTP 429 for all six source files without rewriting them. The fallback used pngquant 3.0.3 with `--quality 80-95 --speed 1 --strip`. Runtime conversion used the repository's cwebp settings: quality 82, method 6 and multithreading.
- Byte totals: 5,488,799 bytes across the six compressed source PNGs; 1,002,624 bytes across the six runtime WebPs; 6,491,423 bytes across both sets

## Accepted files and visual boundaries

| No. | Source file | Runtime file | Static review result | Scientific boundary |
| ---: | --- | --- | --- | --- |
| 01 | `01-soft-sediment-living-cover-source.png` | `01-soft-sediment-living-cover.webp` | One complete pale ivory and beige sponge stands on soft sediment with a terminal sieve plate, reinforced wall, raised diagonal ridges, a narrow base and left-side copy space. | The reconstruction does not provide body measurements, depth, locality, age or specimen-level identification. |
| 02 | `02-terminal-sieve-lattice-diagnostic-source.png` | `02-terminal-sieve-lattice-diagnostic.webp` | One close oblique view keeps the full sieve-plate rim visible and separates the porous cap, square wall grid, diagonal braces and raised outer ridge. | The generated mesh cannot replace spicule microscopy, a taxonomic key or a preserved voucher. |
| 03 | `03-basalia-soft-sediment-anchoring-source.png` | `03-basalia-soft-sediment-anchoring.webp` | One lower body narrows into hair-fine basalia; most fibers disappear into silt and a sparse irregular set remains visible above the sediment. | The frame does not show microscopic barb form, anchoring depth, pullout force or a measured fiber length. |
| 04 | `04-side-inflow-sieve-outflow-visualization-source.png` | `04-side-inflow-sieve-outflow-visualization.webp` | Sparse particle streaks approach the wall and a weak diffuse plume leaves above the terminal sieve plate while one complete sponge remains rooted in sediment. | The particle paths explain a simulated flow direction and do not measure pumping, filtration, food capture or current speed. |
| 05 | `05-resident-shrimp-pair-context-source.png` | `05-resident-shrimp-pair-context.webp` | Exactly two small banded stenopodidean shrimp remain behind the lattice inside one capped sponge cavity. | A reconstructed pair does not prove that every sponge contains two shrimp, that the animals mate for life, or that the association is obligately mutualistic. |
| 06 | `06-rov-noncontact-monitoring-source.png` | `06-rov-noncontact-monitoring.webp` | One unbranded camera module observes one complete sieve-capped sponge across a clear water gap without a claw, net, sampler or laser scale. | The generic scene cannot establish abundance, size, taxonomic identity, locality or population trend. |

All six frames contain one sponge body. Frame 05 contains exactly two additional crustaceans; the other five contain no other animal. None contains readable text, a logo, watermark, border or collage. The accepted sponge remains a tapered tube with a terminal sieve plate, a longitudinal-and-circumferential wall grid, diagonal reinforcement, outer ridges and a soft-sediment holdfast. The set avoids a bare open vase, shallow coral reef, bouquet of tubes and rock-attached Gulf of Mexico euplectellid morphology.

## Imagegen output ledger

All accepted outputs share this generator directory:

`/Users/chris.li/.codex/generated_images/01a05655-7836-7250-bc73-387e8a312d16/`

| No. | Mode | Generator output | Accepted source file |
| ---: | --- | --- | --- |
| 01 | Brand-new, `photorealistic-natural` | `exec-b9afb329-b5c7-4330-9cb4-56f7fed3bc06.png` | `01-soft-sediment-living-cover-source.png` |
| 02 | Brand-new, `scientific-educational` | `exec-a0be67c1-287a-4753-b145-6407ca6da5c5.png` | `02-terminal-sieve-lattice-diagnostic-source.png` |
| 03 | Targeted edit, `precise-object-edit` | `exec-8eada3f4-d9fa-4086-8a9b-9f168e96760d.png` | `03-basalia-soft-sediment-anchoring-source.png` |
| 04 | Brand-new, `scientific-educational` | `exec-f779aea3-83bb-4cef-a5d9-a25f23fa89d6.png` | `04-side-inflow-sieve-outflow-visualization-source.png` |
| 05 | Brand-new, `photorealistic-natural` | `exec-4527ba3e-db2a-4ffb-b968-ea6ee43f1691.png` | `05-resident-shrimp-pair-context-source.png` |
| 06 | Targeted edit, `precise-object-edit` | `exec-27a0cb32-bf36-4d54-9b81-54967bef04eb.png` | `06-rov-noncontact-monitoring-source.png` |

The first anchoring output, `exec-dce4abe9-3347-4f17-9d3f-df4ffc4a5954.png`, left too many long basalia fibers exposed across the sediment. The targeted edit buried most fibers and supplied the accepted frame. The first monitoring output, `exec-437e6603-326d-4d12-b731-8130df5292b0.png`, left the upper cavity open. The targeted edit added the required terminal sieve plate. The generator originals remain in the directory above; the project copies keep only the accepted frames under stable source basenames.

## Final prompt record

The following prompts produced the accepted set. Frames 03 and 06 include their initial generation prompt and the targeted edit that supplied the final file.

### 01 · Living sponge on soft sediment

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Euplectella aspergillum cover image, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create an original scientifically grounded deep-sea natural-history photograph of exactly one complete living Venus' flower basket sponge, Euplectella aspergillum, standing upright on soft sediment.
Scene/backdrop: Dim western Pacific continental-slope seafloor of fine gray-brown silt at roughly a few hundred metres depth, sparse suspended marine snow, open dark blue water behind it. No reef, coral, fish, crustacean, shell, diver, vehicle, equipment, or other sponge.
Subject: One intact tapered tubular glass sponge about vase-shaped, narrower at the sediment and widening gently upward. Its living body is pale ivory to muted beige with a thin translucent soft-tissue veil over a clearly readable siliceous lattice. The wall has a square longitudinal-and-circumferential grid reinforced by paired diagonal struts, producing alternating open and diagonally braced cells. Restrained raised helical ridges spiral diagonally around the outer body. The upper end has one convex porous sieve plate spanning the opening, not an open vase mouth. At the base, a flexible tuft of fine whitish anchoring spicules enters and partly disappears into soft sediment; do not expose a detached root bundle. Preserve a natural irregular organic surface rather than a polished white museum skeleton.
Style/medium: Original photorealistic ROV-style deep-sea wildlife photography, sober museum-publication quality, realistic low-light seawater optics and living sponge tissue.
Composition/framing: Exact 1536 x 1024 landscape. Place the entire sponge in the right two-thirds, upright with a slight natural lean, full sieve plate and buried base visible, generous margins. Preserve the left third as calm dark-water negative space for website copy. Keep the sponge inside a centered 16:9 safe crop.
Lighting/mood: Soft neutral ROV illumination from upper left, quiet observational mood, low contrast in the water, enough grazing light to reveal the lattice and spiral ridges.
Color palette: Deep slate blue, gray-brown sediment, pale ivory, muted beige and faint amber living tissue.
Materials/textures: Hydrated silica spicules under thin living syncytial tissue, fine sediment, delicate but structurally reinforced lattice.
Constraints: exactly one living sponge; one tubular body; one top sieve plate; one anchoring tuft entering sediment; complete silhouette; no size claim; no text, labels, arrows, ruler, scale bar, border, logo, signature, or watermark. Treat it as a generalized scientific reconstruction, not a specimen record or proof of locality.
Avoid: empty open vase mouth; porcelain basket; lace fabric; wicker; crystal ornament; bleached dry skeleton; perfectly white decorative object; exposed hollow interior; giant human-sized scale; radial flower petals; coral polyps; anemone tentacles; branching coral; multiple tubes; glass transparency showing organs; shrimp; trapped pair; fish; rocks hiding the base; dramatic fantasy glow; bioluminescence; aquarium lighting; oversaturation.
```

### 02 · Terminal sieve plate and reinforced lattice

```text
Use case: scientific-educational
Asset type: Fauna Atlas Euplectella aspergillum diagnostic gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original naturalistic underwater macro reconstruction of the upper body wall and terminal sieve plate of exactly one living Venus' flower basket sponge, Euplectella aspergillum.
Scene/backdrop: Dark blue deep-sea water with soft particulate haze. No seafloor, aquarium, laboratory, hand, tool, other animal, or second sponge.
Subject: A close oblique view of one intact sponge's upper third. Keep the complete oval outline of the top visible. The terminal sieve plate is a convex woven siliceous mesh spanning the opening, with many irregular small apertures; it is a porous cap, not a solid lid and not an empty vase mouth. Down the side, show a cylindrical square grid of vertical and circumferential fused spicule bundles, reinforced by paired diagonal bundles so alternating cells read as open squares and diagonally braced chequerboard cells. One or two raised helical ridges cross the wall. A thin translucent cream-beige living tissue veil coats and bridges parts of the pale ivory skeleton, making it visibly alive rather than a cleaned dry specimen. Surface remains organic and slightly irregular.
Style/medium: Photorealistic marine macro photography with museum-reference clarity, restrained scientific reconstruction, realistic seawater optics.
Composition/framing: Exact 1536 x 1024 landscape. Place the top sieve plate near x=0.43, y=0.40 and let the textured wall descend diagonally toward the lower right. Keep the entire sieve-plate rim visible with surrounding water. Preserve enough depth of field to read the grid, diagonal braces and a raised ridge.
Lighting/mood: Soft raking neutral ROV light that reveals relief without blown white highlights.
Color palette: Deep blue-black water, pale ivory silica, muted cream and faint amber living tissue.
Materials/textures: Fused hydrated-silica spicule bundles, thin wet syncytial tissue, fine suspended particles.
Constraints: exactly one sponge; one complete terminal sieve plate; anatomically coherent square grid, paired diagonal reinforcement and raised helical ridge; no exposed central cavity, no cutaway, no isolated microscopic spicule, no text, labels, arrows, ruler, scale bar, border, logo, signature, or watermark. The image is a structural reconstruction and cannot serve as specimen-level diagnosis.
Avoid: open flowerpot mouth; solid cap; honeycomb hexagons; crochet lace; wicker; porcelain; basket handle; bleached museum skeleton; perfectly regular computer mesh; radial flower petals; coral cups; anemone tentacles; glass building; transparent organs; sharp weapon-like spikes; fantasy glow.
```

### 03 · Basalia anchoring in soft sediment

```text
Use case: scientific-educational
Asset type: Fauna Atlas Euplectella aspergillum anchoring gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original naturalistic deep-sea close photograph of the basal anchoring system of exactly one living Venus' flower basket sponge, Euplectella aspergillum, fixed in soft sediment.
Scene/backdrop: Fine gray-brown continental-slope silt under dim blue water, with a few suspended particles. No rock reef, coral, shell, worm, fish, crustacean, equipment, hand, or other sponge.
Subject: Show the lower quarter of one upright tapered sponge entering from the upper right. The pale ivory lattice wall, thin cream-beige living tissue and a restrained raised diagonal ridge remain visible above the base. At the narrow base, many flexible hair-fine basalia spicules form a loose crown-like root tuft. Most fibers penetrate or disappear beneath undisturbed soft sediment; a few curve across the surface before entering it. At the closest visible tips, suggest tiny backward-facing barbs without magnifying them into hooks. The sponge is stable but not cemented to rock.
Style/medium: Photorealistic ROV macro natural-history photography, scientifically sober, realistic seafloor texture and delicate hydrated silica.
Composition/framing: Exact 1536 x 1024 landscape. Place the anchoring point near x=0.61, y=0.62. Let the lower sponge wall occupy the upper-right quadrant and preserve open sediment on the left. Keep the transition from lattice to root tuft and the sediment entry points fully visible.
Lighting/mood: Low-angle neutral research light produces soft shadows that separate fibers from sediment; calm observational scene.
Color palette: Slate blue, charcoal and umber silt, ivory fibers, muted beige tissue.
Materials/textures: Fine silt, flexible layered silica fibers, wet living tissue, fused lattice bundles.
Constraints: exactly one partial sponge belonging to a single body; one anchoring tuft; most fibers buried; no claim of depth or fiber length; no microscope inset, cross-section, text, labels, arrows, ruler, scale bar, border, logo, signature, or watermark. The image explains anchoring and does not measure pullout force or prove a locality.
Avoid: plant roots; roots branching like a tree; suction cup; solid stalk; pedestal; rock attachment; cable; rope; exposed detached broom; giant fishhook barbs; bright glass fiber optics; emitted light; dry white souvenir; multiple bases; eroded crater; trapped animal.
```

Targeted edit:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Euplectella aspergillum anchoring gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Edit only the anchoring tuft and immediately surrounding sediment in the supplied deep-sea sponge image.
Change: Shorten the amount of every anchoring fiber visible above the seabed. Bury most of the hair-fine ivory basalia spicules beneath the soft silt so they disappear at varied shallow angles within a short distance of the sponge base. Let fine undisturbed sediment partly cover the fiber entry points. Keep only a sparse irregular handful of short curved segments visible on the surface. Remove the neat radial starburst and any long loose fibers lying across the sediment. Show no macroscopic hooks or barbs.
Invariants: Preserve the exact crop, camera angle, sponge base, body wall, pale living tissue, lattice, diagonal ridge, seafloor color, lighting, shadows, water, depth of field, and absence of other animals or equipment. Keep exactly one sponge base and one anchoring system.
Style/medium: Photorealistic ROV macro natural-history photography with realistic soft sediment.
Constraints: change only the fibers and local sediment coverage; no new objects; no text, label, arrow, ruler, scale bar, border, logo, signature, or watermark.
```

### 04 · Side-wall inflow and sieve-plate outflow

```text
Use case: scientific-educational
Asset type: Fauna Atlas Euplectella aspergillum filter-feeding gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original naturalistic scientific reconstruction of water movement through exactly one living Venus' flower basket sponge, Euplectella aspergillum, using sparse suspended particles as subtle tracers.
Scene/backdrop: Dark blue deep-sea water above a subdued soft-sediment seabed. No reef, other organism, equipment, text, or infographic elements.
Subject: One complete upright pale ivory and cream living sponge with a tapered tubular body, square lattice wall reinforced by paired diagonal struts, restrained raised helical ridges, a porous terminal sieve plate over the top, and a basal anchoring tuft entering sediment. The living tissue veil covers the siliceous framework. A small fraction of marine-snow particles forms faint short natural motion streaks approaching and passing inward through openings across the side wall. Inside the central cavity, a dim coherent upward swirl is suggested by sparse particles. Above the porous top sieve plate, a broad weak diffuse plume of particles continues upward and slightly downstream. Do not show water entering through the top. Keep most surrounding water clear.
Style/medium: Photorealistic deep-sea field photography combined with restrained long-exposure scientific visualization, no diagram or CGI appearance.
Composition/framing: Exact 1536 x 1024 landscape. Place the full sponge across the center-right, with top near x=0.63, y=0.25 and base near x=0.55, y=0.78. Leave open water to the left and above so side inflow and weak top outflow remain visible.
Lighting/mood: Soft neutral ROV illumination, calm low-current setting, controlled particle contrast.
Color palette: Deep slate blue, gray-brown sediment, ivory and muted cream sponge, colorless to pale blue-gray particle traces.
Materials/textures: Thin wet living tissue, fused hydrated-silica lattice, fine suspended organic particles and silt.
Constraints: exactly one sponge and zero other animals; side-wall inflow and top-sieve outflow remain readable only through particle paths; no measured flow rate or feeding efficiency; no arrows, vector lines, labels, numbers, cutaway, transparent organs, ruler, border, logo, signature, or watermark. Treat the particles as explanatory visualization based on flow simulations, not a direct measurement.
Avoid: forceful chimney jet; smoke; bubbles; glowing stream; water entering the top; solid sealed cap; exposed hollow vase mouth; pump machinery; external mucus net; baleen; tentacles catching prey; visible bacteria at giant scale; dense plankton soup; colored arrows; split screen; duplicate sponge.
```

### 05 · Two sponge-associated shrimp inside the cavity

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Euplectella aspergillum commensal-crustacean gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original scientifically restrained deep-sea natural-history close photograph showing exactly two small sponge-associated stenopodidean shrimp inside the central cavity of one living Venus' flower basket sponge, Euplectella aspergillum.
Scene/backdrop: Dark blue deep-sea water. Frame only one sponge body; no seafloor, reef, other animal, equipment, aquarium or laboratory.
Sponge: A close three-quarter side view of the middle and upper portion of one pale ivory and muted cream living sponge. Preserve the square lattice of fused vertical and circumferential spicule bundles, paired diagonal reinforcement, a raised helical ridge and thin translucent living tissue. Include the terminal sieve plate near the upper edge so the cavity reads as enclosed by a porous cap, not an open vase.
Crustaceans: Inside the central cavity, visible through different wall openings, show exactly two separate small slender shrimp-like stenopodidean crustaceans, one modestly larger than the other. They are pale translucent cream with restrained red-orange banding, long fine antennae folded within the cavity and natural walking legs. Keep both wholly behind the lattice and tissue, on the same depth plane, without romantic pose or human-like pairing. No eggs, larvae, mating or offspring.
Style/medium: Original photorealistic deep-sea macro wildlife photography, realistic water scattering and tissue, sober museum-publication finish.
Composition/framing: Exact 1536 x 1024 landscape. Let the sponge wall fill the center and right; place one shrimp visible near x=0.51, y=0.51 and the other near x=0.66, y=0.57 through separate openings. Keep enough outer water around the upper rim to establish the sponge silhouette.
Lighting/mood: Soft oblique ROV light, quiet observational mood, interior slightly dimmer than outer wall.
Color palette: Deep navy water, ivory lattice, muted beige tissue, restrained translucent red-orange accents.
Materials/textures: Wet fused silica bundles, thin syncytial tissue, delicate crustacean exoskeleton and antennae.
Constraints: exactly one sponge; exactly two crustaceans; both inside and behind the wall; no species label, sex claim, proof of lifelong confinement, mutualism or mating; no text, hearts, wedding symbolism, labels, arrows, ruler, border, logo, signature, or watermark. Treat this as a generalized co-occurrence reconstruction, not proof that every sponge contains a pair or that the relationship is obligate.
Avoid: shrimp outside the sponge; more than two shrimp; lobster-sized animals; crab claws; fish; human faces; embracing pose; visible eggs; open flowerpot mouth; cage bars like metal; wicker basket; completely bare dry skeleton; transparent wall with exposed organs; fantasy glow; decorative wedding image.
```

### 06 · Non-contact ROV monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Euplectella aspergillum monitoring gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original deep-sea research documentary photograph showing one compact unbranded ROV camera module observing exactly one living Venus' flower basket sponge, Euplectella aspergillum, without contact.
Scene/backdrop: Dim western Pacific continental-slope soft-sediment seabed with fine gray-brown silt, dark blue water and sparse marine snow. No reef, rock attachment, coral, fish, crustacean, second sponge, diver, ship or submersible cockpit.
Research equipment: One small open-frame camera-and-light module occupies the left third, entering from the left edge. It has one forward camera dome, two low-intensity neutral lamps and a plain environmental sensor. No manipulator, claw, suction hose, net, sampler, propeller, bait, tag, cable touching the animal, readable display, brand or laser dots.
Animal: One complete living sponge stands in the right half with a clear water gap from the equipment. It is a pale ivory to muted beige tapered tube, narrower at its partly buried anchoring tuft and gently wider upward. Show a thin translucent living-tissue veil on the square longitudinal-and-circumferential lattice, paired diagonal reinforcement, several uneven raised ridges that follow diagonal paths and may interrupt rather than one perfect continuous spiral, and one slightly convex irregular porous terminal sieve plate. The sponge remains rooted in soft sediment.
Style/medium: Original photorealistic oceanographic field-documentary photography, realistic engineering, living tissue, silica and seawater optics.
Composition/framing: Exact 1536 x 1024 landscape. Place the camera near x=0.24, y=0.48 and the full sponge near x=0.69, y=0.53. Maintain a clear gap wider than the sponge body. Keep both subjects complete and inside a centered 16:9 safe crop.
Lighting/mood: Soft neutral ROV illumination, calm low-impact survey scene, no dramatic beams.
Color palette: Deep slate blue, gray-brown sediment, dark gray equipment, pale ivory silica and muted beige tissue.
Materials/textures: Anodized metal, glass camera dome, hydrated siliceous lattice, thin wet organic tissue, fine silt.
Constraints: exactly one camera module; exactly one sponge; no contact, capture, collection, tagging or scale projection; no readable data; no text, labels, arrows, map, border, logo, signature, or watermark. The generic scene illustrates non-contact observation and cannot establish abundance, size, species identity, locality or population trend.
Avoid: robotic arm; claw; net; suction; specimen jar; equipment touching sponge; laser scale dots; sonar beams; tracking tag; attached cable; open vase mouth; honeycomb-only wall; dry white souvenir skeleton; multiple tubes; bouquet; rock attachment; dramatic science-fiction vehicle; people; other animals.
```

Targeted edit:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Euplectella aspergillum monitoring gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Edit only the sponge's upper opening in the supplied ROV monitoring image.
Change: Replace the visibly open hollow mouth with one complete, slightly convex, irregular porous terminal sieve plate that spans and closes the entire oval top opening. The plate must be a fine woven siliceous mesh with many small irregular apertures and a thin wet cream-beige living-tissue veil, continuous with the existing rim. Keep the outer oval rim and camera perspective coherent. No dark central cavity should remain visible through a large opening.
Invariants: Preserve the exact canvas, crop, ROV camera module, clear water gap, sponge position, body shape, wall lattice, ridges, base, sediment, shadows, lighting, colors, water and all other details. Keep exactly one camera module and one sponge.
Constraints: change only the top opening into the terminal sieve plate; no new objects; no text, labels, arrows, scale marks, logo, signature, border, or watermark.
Avoid: open vase mouth; solid lid; flower petals; radial fan; honeycomb cap; flat metal mesh; detached cover; basket handle.
```

## Static inspection

ImageMagick identified all twelve source and runtime assets as 1536 x 1024, sRGB, opaque and single-frame. The source files decode as 8-bit palette PNGs after pngquant compression. The runtime files decode as 8-bit TrueColor lossy VP8 WebPs without alpha or animation. Full-resolution review of the source and runtime files found the requested scene boundary in each frame:

- Frame 01 keeps one complete sieve-capped sponge, a tapered body, a sediment anchor and left-side negative space.
- Frame 02 keeps the entire terminal sieve rim in view and separates the cap, square wall grid, diagonal braces and outer ridge.
- Frame 03 shows a sparse irregular set of basalia segments above the silt while most fibers disappear beneath it.
- Frame 04 uses sparse particle paths for side-wall inflow and a weak top outflow without arrows or quantified flow.
- Frame 05 keeps two crustaceans behind the lattice and shows no eggs, courtship or wedding imagery.
- Frame 06 separates one camera module from one capped sponge by open water and includes no capture or scale gear.

The runtime WebPs keep the source basenames without `-source` and preserve each composition. SHA-256 inspection found six unique hashes within the PNG set and six unique hashes within the WebP set.
