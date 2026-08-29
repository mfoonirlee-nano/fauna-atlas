# Giant Gippsland Earthworm image set

OpenAI's built-in imagegen created these six original project images on 2026-08-29 for the Fauna Atlas *Megascolides australis* profile. The frames reconstruct generalized underground burrows, South Gippsland habitat, an egg cocoon and low-disturbance monitoring. They do not document a named animal, locality, burrow, cocoon, monitoring device or field worker.

- Generation mode: OpenAI built-in imagegen
- Use cases: `photorealistic-natural` for frames 01, 02, 03, 04 and 06; `scientific-educational` for frame 05; `precise-object-edit` for the accepted revisions to frames 01, 02 and 04
- Research brief: [`docs/research/giant-gippsland-earthworm-profile.md`](../../../../../docs/research/giant-gippsland-earthworm-profile.md), section 17
- Source directory: `src/assets/source/species/giant-gippsland-earthworm/`
- Runtime directory: `public/images/species/giant-gippsland-earthworm/`
- Source format: 1536 x 1024 opaque 8-bit sRGB PNG
- Runtime format: 1536 x 1024 opaque lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 16, comprising 6 initial generations and 10 targeted edits

## Files, calls and review decisions

| No. | Source file | Runtime file | Calls | Revisions | Accepted observation | Rejection or remaining boundary |
| --- | --- | --- | ---: | ---: | --- | --- |
| 01 | `01-moist-clay-burrow-adult-source.png` | `01-moist-clay-burrow-adult.webp` | 4 | 3 | One continuous complete adult follows a wet blue-gray clay burrow; the deep-purple anterior at left joins a pale pink-gray posterior, and near-smooth skin carries faint dense transverse microtexture. | The initial generation and first two edits left too few conspicuous rings. The final edit removed the ribbed reading. The anterior appears on the left rather than the research brief's requested right, so the product focal point is `{ x: 0.35, y: 0.55 }` for narrow crops. Pixels cannot measure the animal, tunnel depth or segment count. |
| 02 | `02-purple-anterior-segmented-body-source.png` | `02-purple-anterior-segmented-body.webp` | 4 | 3 | One complete adult shows a blunt featureless anterior, purple anterior third, pale posterior, near-smooth finely micro-annulated skin and a slightly thickened clitellum region. | The initial generation and first two edits retained a misleading low count of broad rings. The final near-smooth treatment does not invite a pixel count. Color and texture cannot confirm species, sex, reproductive condition or segment number. |
| 03 | `03-streambank-clay-habitat-cutaway-source.png` | `03-streambank-clay-habitat-cutaway.webp` | 1 | 0 | A small complete worm occupies a moist clay pocket above a creek's normal waterline in a generalized pasture bank. | No rejected draft. The frame supplies no locality, fixed water table, soil depth, occupancy record or distribution boundary. |
| 04 | `04-wet-permanent-burrow-movement-source.png` | `04-wet-permanent-burrow-movement.webp` | 5 | 4 | The accepted edit shows the continuous anterior and midbody of one worm with near-smooth, faint transverse microtexture moving through a damp burrow beside a thin displaced water film. | The initial generation and first three edits still read as a low number of broad ribs. The fourth edit removed that misleading structure. The pale posterior continues beyond the left crop, so this frame does not satisfy the initial complete-body request and cannot establish total length, sound, speed, season or animal count. |
| 05 | `05-amber-egg-cocoon-side-chamber-source.png` | `05-amber-egg-cocoon-side-chamber.webp` | 1 | 0 | One intact amber, elongated cocoon rests alone in a clay side chamber; a remote adult segment does not contact it. | No rejected draft. Pixels cannot reveal embryo count, age, incubation, depth, mass or parental behavior. |
| 06 | `06-acoustic-hydrology-monitoring-source.png` | `06-acoustic-hydrology-monitoring.webp` | 1 | 0 | One ecologist places a surface sensor on intact turf near a separate moisture probe; cattle remain behind a distant fence and no worm appears. | No rejected draft. The equipment illustrates a low-intrusion concept, not a validated protocol, detection, abundance estimate or trend. |

## Scientific and editorial boundaries

- Frames 01 through 03 show a generalized complete adult Giant Gippsland Earthworm as one slender cylindrical body. Frame 04 shows one continuous anterior and midbody while the pale posterior continues beyond the left crop. The anterior is deep purple to purple-black and the posterior is pale pink-gray. No frame shows eyes, legs, antennae, suckers, scales, jaws, a snake head or a split body.
- Frames 01, 02 and 04 use near-smooth skin with faint dense transverse microtexture so they do not depict a false low count of broad ribs. Generated pixels cannot supply a meristic count or establish the published range of about 300 to 500 segments.
- No ruler or calibrated object appears. The images cannot prove the typical 80 cm length, 2 cm diameter, 200 g mass or any maximum size.
- Frames 01 through 05 use cohesive moist clay and thin wall moisture. They do not show an aquatic animal, flooded burrow, permanent water table or tolerance of seasonal inundation.
- Frame 03 combines a creek bank, pasture, seepage-darkened blue-gray clay and red-brown clay loam. This generalized reconstruction does not reveal a survey site or imply that every pasture stream supports the species.
- Frame 04 visualizes a small water-film displacement. It contains no visual sound wave and cannot prove that a gurgle came from a worm.
- Frame 05 contains one opaque cocoon. Research supports one embryo per cocoon, but the image does not expose or depict that embryo. The distant adult segment does not imply guarding or care.
- Frame 06 keeps the animal invisible and the turf intact. It contains no digging, capture, handling, sample pit or translocation.
- Precise edits re-rendered the full scenes rather than preserving non-target pixels exactly. The accepted 01, 02 and 04 backgrounds retain the intended clay, roots, water film, framing and anatomy but add dense curled high-frequency clay microtexture, most visibly in frame 01. That texture has no biological meaning.
- No frame contains readable text, a logo, watermark, border, collage, scale bar or map marker.

## Imagegen output ledger

All superseded outputs remain in the generator directories outside the repository. Calls 14 through 16 supplied the accepted source pixels for frames 01, 02 and 04.

| Call | Type and target | Generator output | Decision |
| ---: | --- | --- | --- |
| 01 | `photorealistic-natural`, frame 01 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-32d4b9a8-16bb-45a6-91ed-24432de5f3a4.png` | Superseded after final audit: complete anatomy and color passed, but the rings read as too few and too coarse |
| 02 | `photorealistic-natural`, frame 02 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-9cb84376-8b67-4144-a47e-b099a2130b01.png` | Superseded after final audit: the external ring count remained visually low |
| 03 | `photorealistic-natural`, frame 03 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-06783d3b-379c-4d0e-b5d5-3dcd4a24cf89.png` | Accepted: one small complete worm in a generalized moist stream-bank clay pocket |
| 04 | `photorealistic-natural`, frame 04 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-be9b636a-5856-45d6-9628-4fd7b5fc11a2.png` | Rejected: broad, deeply separated rings resembled plated segments |
| 05 | `precise-object-edit`, frame 04 pass 1 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-4fd9283a-624a-46d5-8ef8-3843fd8c7947.png` | Superseded after final audit: rings remained too broad and sparse |
| 06 | `scientific-educational`, frame 05 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-d72c2615-17c2-4cac-81dc-04f07a82e24d.png` | Accepted: one intact amber cocoon isolated in a side chamber |
| 07 | `photorealistic-natural`, frame 06 | `/Users/chris.li/.codex/generated_images/01a04db3-ee95-7d71-b2ca-ed875f46245a/exec-c58812bf-69d7-47f9-a01c-af458ab2c41e.png` | Accepted: low-intrusion surface monitoring with no visible worm |
| 08 | `precise-object-edit`, frame 01 pass 1 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-52bd4d91-54ae-403f-ad4b-91e981e06422.png` | Rejected: softer rings still implied a low segment count |
| 09 | `precise-object-edit`, frame 02 pass 1 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-117fa704-4298-4003-baf3-f99c1731f3b9.png` | Rejected: softer rings still implied a low segment count |
| 10 | `precise-object-edit`, frame 04 pass 2 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-2bb6f211-a6aa-4d43-aee1-271229e384a9.png` | Rejected: the visible body still carried prominent ribs |
| 11 | `precise-object-edit`, frame 01 pass 2 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-3b3ecad8-4371-4ce4-a145-0cc5b57483a0.png` | Rejected: denser texture still resolved into too few repeated bands |
| 12 | `precise-object-edit`, frame 02 pass 2 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-a2cf5c6b-5859-4117-a525-6af15eb27993.png` | Rejected: denser texture still resolved into too few repeated bands |
| 13 | `precise-object-edit`, frame 04 pass 3 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-c789753f-7921-40dd-9770-df5fc68da00a.png` | Rejected: the ring relief remained too conspicuous |
| 14 | `precise-object-edit`, frame 01 pass 3 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-a80505f9-8aa6-43f0-853d-29d71c9987df.png` | Accepted: complete anatomy and color with near-smooth faint transverse microtexture |
| 15 | `precise-object-edit`, frame 02 pass 3 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-c4b408ff-27bd-4b79-b65a-40e7b02b2385.png` | Accepted: complete anatomy and color without countable broad ribs |
| 16 | `precise-object-edit`, frame 04 pass 4 | `/Users/chris.li/.codex/generated_images/01a04d59-62ed-7320-8f88-5cd07c682ce0/exec-ea0437b4-0b42-4978-bd6c-9faac4b0106f.png` | Accepted: continuous cropped body, thin water film and near-smooth microtexture |

## Generation prompts

The blocks below preserve every initial and edit prompt sent to the built-in imagegen tool.

### 01 · Moist-clay burrow adult

Calls: 4 total, comprising 1 initial generation and 3 targeted revisions. The third revision is accepted.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Gippsland Earthworm species-profile cover, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic natural-history reconstruction of exactly one complete adult Giant Gippsland Earthworm (Megascolides australis) moving through its permanent moist clay burrow beneath South Gippsland, Victoria.
Scene/backdrop: A restrained natural cutaway through deep blue-gray moist cohesive clay with a few fine plant roots. One broad smooth cylindrical burrow follows a gentle S curve. The burrow wall has only a thin reflective water film and tiny moisture beads, with breathable air space; no standing floodwater and no open surface.
Subject accuracy: Exactly one continuous unbroken slender cylindrical earthworm, complete anterior to posterior, resting along the burrow curve. Adult proportions suggest about 80 cm long and 2 cm diameter without any ruler or size reference. Hundreds of very fine close annular segments create subtle continuous rings. The anterior one-third is deep purple to purple-black; the remaining two-thirds transitions naturally to pale fleshy pink-gray. The anterior tip is softly tapered and blunt with no visible eye or separate snake-like head. A slightly thicker natural clitellum region blends into the body and is never a white band. The posterior tapers gently to one blunt unbranched end.
Style/medium: Museum-grade photorealistic wildlife reconstruction, macro documentary detail, realistic moist earthworm skin and cohesive clay texture, subdued scientific-publication color, not a diagram.
Composition/framing: Entire worm remains visible as one connected broad S curve across the center and right, focal point near x=0.65 y=0.53. Preserve calm clay and fine-root negative space on the left. Keep both ends inside generous margins; no crop through the body.
Lighting/mood: Soft diffuse underground illumination as a natural-history diorama, low contrast, cool damp atmosphere, no fantasy glow.
Scientific boundary: The image is a generalized underground reconstruction, not a real occurrence record and not a calibrated body-length, depth or segment-count measurement.
Constraints: exactly one earthworm; one continuous complete body; fine regular annulation; correct purple anterior third and pale pink-gray posterior; opaque 3:2 landscape; no text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: snake head, visible eyes, nostrils, teeth, tongue, jaws, mouth opening, face, legs, feet, antennae, tentacles, suckers, fins, scales, exoskeleton, insect larva, leech, eel, giant sandworm, monster mouth, branching or duplicated body, split tail, severed worm, knots, exposed organs, exaggerated coarse segments, bright neon purple, glossy plastic, surface crawling, hand, shovel, ruler, egg cocoon, second animal, flooded tunnel, bubbles, aquarium, CGI, illustration, painting, dramatic spotlight.
```

#### Revision 1, rejected

The first edit softened the original rings but still left a visually low count.

```text
Use case: precise-object-edit.
Input image: the accepted Fauna Atlas Giant Gippsland Earthworm frame 01.
Change only the earthworm's external annulation. Each currently visible broad ring must be subdivided into 3–4 much finer, shallower, tightly spaced natural annular lines, so the long visible body reads as having hundreds of narrow segments rather than roughly one hundred coarse ribs. Make the ring boundaries subtle variations in supple moist earthworm skin, not deep grooves, armor plates, corrugation, or a ribbed hose.
Preserve the exact canvas, clay burrow, roots, camera angle, framing, body path, body diameter, both endpoints, deep-purple anterior on the left, pale pink-gray posterior, transition, clitellum, lighting, palette, moisture and every background detail. Keep exactly one continuous complete worm. Do not add, remove, crop, stretch, recolor, or reposition anything.
No text, logo, watermark, eyes, face, mouth, snake head, legs, tentacles, suckers, scales, spines, split body, extra animal, or exposed organs.
```

#### Revision 2, rejected

The second edit increased texture density but still resolved into repeated bands.

```text
Use case: precise-object-edit, second-pass annulation correction.
Input image: Giant Gippsland Earthworm frame 01 after a first ring refinement.
The ring count is still visibly too low. Modify only the worm skin: erase the present coarse interval pattern and place at least three additional very thin, shallow, parallel transverse annular boundaries between every adjacent pair of currently prominent rings. Target about 300 individually readable, closely spaced body-segment boundaries from the left anterior tip to the right posterior tip. At 1536-pixel canvas resolution, most neighboring annular lines should be only about 3–5 pixels apart along the body's centerline. Lines must wrap naturally around the cylindrical body, remain hairline-thin and low-relief, and look like supple earthworm skin. Do not produce deep ribs, plates, a corrugated hose, or simple blur.
Change nothing else. Preserve the exact pixels and geometry of the canvas, burrow, roots, framing, complete S-shaped body, endpoints, body width, left deep-purple anterior, pale posterior, clitellum, lighting, moisture and background. Exactly one worm. No new objects, text, logo, eyes, face, mouth, legs, scales, spines, splits or extra animals.
```

#### Revision 3, accepted

The final edit replaced countable ribs with a near-smooth surface and faint dense transverse microtexture. It also re-rendered the clay texture, as recorded in the boundaries above.

```text
Use case: precise-object-edit, final scientific texture correction.
Input image: Giant Gippsland Earthworm frame 01.
Modify only the worm's skin. Completely remove every conspicuous wide or deep ring groove. At this whole-body scale, render the skin almost smooth, with only extremely fine, faint, densely packed transverse micro-annulation—hundreds of hairline segment boundaries that merge into subtle natural skin texture rather than countable ribs. No individual annulus should look wider than a hairline; no repeated thick bands. The result must not visually imply a low segment count.
Preserve exactly the canvas, burrow, roots, framing, complete S-shaped body path, endpoints, diameter, left dark-purple anterior, pale posterior, color transition, clitellum, lighting, wet sheen, shadows and background. Do not change any object, pose, crop, color distribution, or geometry. Exactly one worm.
No deep grooves, corrugation, armor, plates, ribbed hose, blur over the body outline, text, logo, watermark, eyes, face, mouth, legs, scales, spines, split body or extra animal.
```

### 02 · Purple anterior and segmented body

Calls: 4 total, comprising 1 initial generation and 3 targeted revisions. The third revision is accepted.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Gippsland Earthworm diagnostic gallery image 2 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic close natural-history reconstruction showing the external color pattern and fine annulation of exactly one complete Giant Gippsland Earthworm (Megascolides australis) inside a wide moist-clay burrow.
Scene/backdrop: A broad smooth tunnel through cohesive blue-gray clay, with restrained fine roots and only a very thin wet sheen on the wall. The tunnel is wide enough to reveal the entire animal as it bends once through the frame; no standing water and no exposed ground surface.
Subject accuracy: Exactly one continuous complete adult earthworm. Long slender cylindrical body with about 300 to 500 very fine close annular segments represented as many subtle narrow rings, never a few coarse armored plates. The anterior one-third is deep purple to purple-black, transitioning naturally into pale pink-gray along the remaining body. A slightly thicker clitellum region is integrated naturally around the anterior region and does not look like a white band. The anterior tip is blunt and featureless with no eye, face or distinct snake head. The posterior is a single gently tapered blunt end. Eight longitudinal setal rows are microscopic and must not appear as spines.
Style/medium: Museum-grade photorealistic field-macro reconstruction with damp organic skin, tiny natural irregularities, credible cohesive clay, restrained scientific-publication color; photographic, not an illustration or medical specimen.
Composition/framing: Clean side-and-slightly-above view of the whole animal following one broad U-shaped bend across the middle. Keep both ends and the entire continuous body inside generous margins. Place the diagnostic purple anterior near center-left and the pale posterior toward the right; focal point near x=0.53 y=0.50. Use enough depth of field that the color boundary, fine rings and complete outline stay readable.
Lighting/mood: Soft diffuse naturalistic illumination, cool damp underground atmosphere, moderate detail without glossy studio highlights.
Scientific boundary: Color, cylindrical form and annulation are visual clues only. The generated image cannot confirm identity, sex, reproductive state or exact segment count.
Constraints: exactly one earthworm, one continuous unbroken body, correct purple anterior third and pale pink-gray remainder, many fine regular annuli, complete anatomy, opaque 3:2 landscape, no text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: eye, nostril, face, open mouth, jaws, teeth, tongue, snake head, leech suckers, legs, antennae, tentacles, fins, scales, bristles or visible spines, insect larva, centipede, eel, giant monster, severed or duplicated body, branching tail, knots, coarse armored segments, white belt, bright neon color, transparent organs, dissection, hand, ruler, shovel, egg cocoon, second animal, surface crawling, flooded tunnel, bubbles, aquarium, CGI, drawing, painting, oversaturation.
```

#### Revision 1, rejected

The first edit softened the original rings but still left a visually low count.

```text
Use case: precise-object-edit.
Input image: the accepted Fauna Atlas Giant Gippsland Earthworm frame 02.
Change only the earthworm's external annulation. Split every currently visible broad ring into 3–4 much finer, shallower, tightly packed natural annular lines all along the complete visible body. The animal must visually read as a very long earthworm with hundreds of narrow segments, not about one hundred thick ribs. Keep the boundaries subtle and soft in supple moist skin; no deep grooves, armor plates, or ribbed-hose texture.
Preserve the exact canvas, clay tunnel, roots, camera angle, framing, complete U-shaped pose, body diameter, both endpoints, blunt dark-purple anterior at center-left, pale pink-gray posterior, color transition, clitellum, lighting, palette, moisture and every background detail. Keep exactly one continuous complete worm. Do not add, remove, crop, stretch, recolor, or reposition anything.
No text, logo, watermark, eyes, face, mouth, snake head, legs, tentacles, suckers, scales, spines, split body, extra animal, or exposed organs.
```

#### Revision 2, rejected

The second edit increased texture density but still resolved into repeated bands.

```text
Use case: precise-object-edit, second-pass annulation correction.
Input image: Giant Gippsland Earthworm frame 02 after a first ring refinement.
The complete worm still shows far too few rings. Modify only its skin: erase the current coarse interval pattern and insert at least three additional very fine, shallow, parallel transverse annular boundaries between every adjacent pair of currently prominent rings. Target about 300 individually readable, tightly spaced body-segment boundaries across the full animal from the left purple anterior tip to the right pale posterior tip. At 1536-pixel canvas resolution, most neighboring lines should be about 3–5 pixels apart along the body centerline. Each hairline must wrap around the cylinder with low relief and soft natural variation. It must remain supple moist earthworm skin, never deep ribs, armor, a corrugated hose, or mere blur.
Change nothing else. Preserve the exact canvas, clay tunnel, roots, framing, full U-shaped pose, endpoints, body width, purple anterior, pale posterior, transition, clitellum, lighting, moisture and background. Exactly one complete worm. No new objects, text, logo, eyes, face, mouth, legs, scales, spines, splits or extra animals.
```

#### Revision 3, accepted

The final edit replaced countable ribs with a near-smooth surface and faint dense transverse microtexture. It also re-rendered the clay texture, as recorded in the boundaries above.

```text
Use case: precise-object-edit, final scientific texture correction.
Input image: Giant Gippsland Earthworm frame 02.
Modify only the worm's skin. Completely remove every conspicuous wide or deep ring groove. At this complete-body scale, make the skin nearly smooth, carrying only extremely fine, faint, densely packed transverse micro-annulation—hundreds of hairline segment boundaries that read as subtle natural skin texture, not countable ribs. No single annulus may appear as a broad band. The image must not visually imply only about one hundred segments.
Preserve exactly the canvas, clay tunnel, roots, framing, complete U-shaped body path, endpoints, diameter, left dark-purple anterior, pale posterior, transition, clitellum, lighting, wet sheen, shadows and background. Do not change any object, pose, crop, color distribution, or geometry. Exactly one complete worm.
No deep grooves, corrugation, armor, plates, ribbed hose, blur over the outline, text, logo, watermark, eyes, face, mouth, legs, scales, spines, split body or extra animal.
```

### 03 · Streambank clay habitat cutaway

Calls: 1 generation, 0 revisions. Accepted on the first call.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Gippsland Earthworm habitat gallery image 3 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic natural-history cutaway landscape of generalized South Gippsland pasture showing the narrow moist-clay microhabitat of exactly one Giant Gippsland Earthworm (Megascolides australis) above a small creek's normal waterline.
Scene/backdrop: A quiet open dairy-pasture slope in southern Victoria under soft overcast daylight. Short damp grass covers the surface. A modest natural creek runs along the lower-left edge at normal flow, with no flood. The cutaway beneath the slope reveals deep cohesive blue-gray clay grading into restrained red-brown clay loam, sparse fine roots, a subtle seepage-darkened zone and one moist cylindrical burrow. No named landmark, building, road, machinery or livestock in the near scene.
Subject accuracy: Exactly one small but readable complete Giant Gippsland Earthworm inside the moist burrow in the lower-right portion, safely above the creek's normal water surface. The animal is a continuous slender cylindrical body with many very fine annular segments, a deep-purple anterior one-third and pale pink-gray remaining body, featureless blunt anterior, no eyes and no distinct head. It is never in the creek and never exposed on the surface.
Hydrology: The clay around the occupied burrow is moist and darkened by seepage with a thin sheen on the burrow wall, yet the tunnel contains air and is not flooded. The creek stays confined to its channel. Do not draw a bright blue underground water vein or a labeled groundwater line.
Style/medium: Photorealistic museum-quality environmental reconstruction, natural soil horizons and believable vegetation, documentary restraint, no infographic styling.
Composition/framing: Surface landscape occupies about the upper 42 percent and the soil cutaway about the lower 58 percent. Creek at lower-left, habitat transition through center, animal near x=0.61 y=0.62 and occupying only about 16 percent of frame width. Keep the animal fully visible and connected; habitat carries most visual weight.
Lighting/mood: Soft cloudy South Gippsland daylight above, neutral restrained illumination in the cutaway, muted greens, blue-gray clay and red-brown soil.
Scientific boundary: This frame combines published microhabitat features. It is not a real locality, occurrence, distribution map, fixed water table or calibrated soil-depth section.
Constraints: exactly one earthworm and no other animal; complete coherent worm body; one occupied moist burrow above normal creek waterline; opaque 3:2 landscape; no text, labels, arrows, diagrams, scale bar, map pin, logo, signature, border or watermark.
Avoid: flood, submerged worm, aquarium tunnel, bright blue groundwater river, beach sand, rocky cave, dry cracked desert, tropical jungle, dense tree plantation, roots filling the whole soil, giant worm dominating frame, surface-crawling worm, snake head, eyes, jaws, tongue, legs, tentacles, leech suckers, split or duplicated body, severed animal, second animal, cattle trampling foreground, people, shovel, excavation, drainage pipe, road, house, fantasy glow, CGI, painting, schematic layers, oversaturation.
```

### 04 · Wet permanent-burrow movement

Calls: 5 total, comprising 1 initial generation and 4 targeted revisions. The fourth revision is accepted.

#### Initial prompt, rejected

The first output used broad, deeply separated rings that resembled a few dozen plated segments. That treatment conflicted with the species' roughly 300 to 500 fine segments. The project kept no copy of this rejected draft in either asset directory.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Gippsland Earthworm movement gallery image 4 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic close natural-history reconstruction of exactly one complete Giant Gippsland Earthworm (Megascolides australis) extending and contracting through a permanently moist clay burrow, with a small natural displacement of the burrow's thin water film.
Scene/backdrop: A diagonal cylindrical tunnel through cohesive blue-gray clay, receding from the lower-left background toward the upper-right foreground. Fine roots are sparse. The tunnel wall is damp with a continuous thin film and a few small crescent-shaped wet edges, but contains breathable air and no standing floodwater.
Subject/action accuracy: Exactly one continuous complete adult earthworm moving from the left-rear toward the right-front. Its anterior one-third at the right-front is deep purple to purple-black and slightly contracted; its remaining pale pink-gray posterior extends toward the left-rear. Hundreds of fine annular segments form close rings. The body remains a single smooth cylindrical tube, with one blunt featureless anterior and one gently tapering unbranched posterior. The water film forms only a subtle crescent and tiny displaced beads beside the contracting body. No dramatic bubble trail, spray or visible sound wave.
Style/medium: Museum-grade photorealistic behavioral macro photography reconstructed as an underground diorama, realistic moist earthworm skin and cohesive clay, restrained scientific color.
Composition/framing: Strong diagonal perspective supplies depth. Keep the entire connected body visible from both ends, without crop or overlap that suggests duplication. Anterior focus near x=0.62 y=0.53; body curves gently toward the lower left. Preserve enough tunnel wall to show the thin water film.
Lighting/mood: Soft diffuse low underground light with crisp anterior texture and natural falloff, calm observation rather than spectacle.
Scientific boundary: A still image can show a plausible water-film displacement only. It cannot prove sound volume, movement speed, activity season or number of animals underground.
Constraints: exactly one earthworm; one complete continuous body; purple anterior third and pale pink-gray remainder; subtle extension and contraction; thin water film only; opaque 3:2 landscape; no text, labels, arrows, sound-wave lines, music symbols, bubbles, scale bar, logo, signature, border or watermark.
Avoid: snake head, eyes, nostrils, open mouth, teeth, jaws, tongue, face, legs, feet, antennae, tentacles, suckers, fins, scales, spines, insect larva, eel, leech, monster, severed or duplicated worm, branching or split tail, knotted body, coarse armored segments, exposed organs, neon purple, surface crawling, hand, tool, ruler, egg cocoon, second animal, floodwater, torrent, spray, bubble stream, cartoon motion lines, glowing trail, aquarium, CGI, illustration, painting, dramatic action scene, oversaturation.
```

#### Revision 1, rejected after final audit

This edit reduced the original plate-like divisions, but a later original-resolution review still found a visually low count of broad rings.

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Giant Gippsland Earthworm movement gallery image 4 of 6
Input images: Image 1 is the edit target, an underground Giant Gippsland Earthworm reconstruction.
Primary request: Change only the earthworm's external annulation. Replace the current broad coarse ring divisions with hundreds of much finer, narrower, closely spaced natural annular segment lines along the entire visible body, consistent with an adult Megascolides australis having roughly 300 to 500 body segments. The surface must read as supple earthworm skin, not armored plates.
Invariants: Preserve the exact clay burrow, diagonal camera angle, framing, body pose, one continuous body, right-front blunt deep-purple anterior, pale pink-gray posterior, subtle water-film beads, lighting, palette and all background details. Keep exactly one worm. Do not add or remove any object.
Constraints: no eyes, face, snake head, mouth, legs, tentacles, suckers, scales, spines, split body, text, logo or watermark.
```

#### Revision 2, rejected

The second edit softened the rings further but left prominent repeated ribs.

```text
Use case: precise-object-edit.
Input image: the accepted Fauna Atlas Giant Gippsland Earthworm frame 04.
Change only the earthworm's external annulation. The present rings are still too broad. Subdivide each visible broad ring into 3–4 much finer, shallower, closely spaced natural annular lines along the entire visible anterior and midbody. The visible surface must read as hundreds of fine earthworm segments rather than a few dozen deep ribs or plates. Make all lines subtle within supple moist skin; no armored, corrugated, or ribbed-hose appearance.
Preserve the exact canvas, diagonal clay burrow, camera angle, framing, body path and crop, right-front blunt deep-purple anterior, pale pink-gray continuation beyond the left crop, body diameter, color transition, water-film beads, lighting, palette, moisture and every background detail. Keep exactly one continuous worm and the same crop. Do not add, remove, stretch, recolor, or reposition anything.
No text, logo, watermark, eyes, face, mouth, snake head, legs, tentacles, suckers, scales, spines, split body, extra animal, or exposed organs.
```

#### Revision 3, rejected

The third edit increased texture density but retained conspicuous ring relief.

```text
Use case: precise-object-edit, second-pass annulation correction.
Input image: Giant Gippsland Earthworm frame 04 after a first ring refinement.
The visible worm surface still needs substantially more rings. Modify only its skin: erase the current coarse interval pattern and insert at least three additional very fine, shallow, parallel transverse annular boundaries between every adjacent pair of currently prominent rings. The visible anterior and midbody must clearly imply hundreds of tightly spaced segments. At 1536-pixel canvas resolution, most neighboring lines should be about 3–5 pixels apart along the body centerline. Each hairline wraps naturally around the cylinder with low relief. Preserve supple moist skin; no deep ribs, plates, corrugated hose effect, or simple blur.
Change nothing else. Preserve the exact canvas, diagonal clay burrow, framing and crop, body curve and width, right-front blunt purple anterior, pale continuation beyond left crop, lighting, water beads, moisture and background. Exactly one continuous cropped worm. No new objects, text, logo, eyes, face, mouth, legs, scales, spines, splits or extra animals.
```

#### Revision 4, accepted

The final edit replaced countable ribs with a near-smooth surface and faint dense transverse microtexture. It also re-rendered the clay texture, as recorded in the boundaries above.

```text
Use case: precise-object-edit, final scientific texture correction.
Input image: Giant Gippsland Earthworm frame 04.
Modify only the worm's skin. Completely remove every conspicuous wide or deep ring groove. At this cropped macro scale, render the visible body with extremely fine, faint, densely packed transverse micro-annulation—hundreds of hairline boundaries merging into supple natural earthworm skin, never a set of countable thick ribs. No single annulus should read as a broad band, plate, or deep furrow. The image must not imply a low segment count.
Preserve exactly the canvas, diagonal clay burrow, framing and crop, body curve, right-front purple anterior, pale continuation past the left edge, diameter, lighting, water beads, wet sheen, shadows and every background detail. Do not change any object, pose, crop, color distribution, or geometry. Exactly one continuous cropped worm.
No coarse grooves, corrugation, armor, plates, ribbed hose, blur over the outline, text, logo, watermark, eyes, face, mouth, legs, scales, spines, split body or extra animal.
```

### 05 · Amber egg cocoon in a side chamber

Calls: 1 generation, 0 revisions. Accepted on the first call.

```text
Use case: scientific-educational
Asset type: Fauna Atlas Giant Gippsland Earthworm egg-cocoon gallery image 5 of 6, original unlabeled natural-history reconstruction, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically restrained photorealistic museum-diorama cutaway of exactly one Giant Gippsland Earthworm egg cocoon resting alone in a small side chamber beside a permanent moist-clay burrow.
Scene/backdrop: Cohesive blue-gray moist clay in cross-section. One smooth main cylindrical burrow runs diagonally through the middle-left and opens into one modest rounded side chamber at center-right. The clay wall has a thin wet sheen and sparse fine roots, with air space and no floodwater.
Cocoon accuracy: Exactly one complete intact cocoon in the side chamber. It is elongated oval to gently spindle-shaped, amber to light translucent brown, with subtly tapered short terminal tips rather than a bird-egg shell. Its visual length is about two to three times the main burrow diameter, consistent with a generalized 4 to 9 cm cocoon beside an adult burrow. The surface is smooth, slightly leathery and only faintly translucent. No contents, embryo, hatchling, yolk, veins or internal silhouette are visible. It is not glowing and does not look like glass.
Adult boundary: A short out-of-focus segment of one adult earthworm may be visible far away in the main burrow at the left edge, showing pale pink-gray fine annulation only. It must remain clearly separated from the chamber and cannot touch, coil around, face or guard the cocoon. Do not show an animal if separation cannot be maintained.
Style/medium: Photorealistic natural-history museum reconstruction with realistic cohesive clay and restrained organic material, educational but not diagrammatic or cartoonish.
Composition/framing: The single cocoon is the clear center-right focal point around x=0.57 y=0.55. Show its complete outline, the whole side chamber, and enough of the main burrow to make the side-chamber relationship clear. No ruler or calibrated scale.
Lighting/mood: Soft neutral underground illumination, muted clay gray and amber-brown, calm scientific observation.
Scientific boundary: The image cannot reveal embryo number, cocoon age, incubation time, weight, actual depth or parental behavior. Those facts belong in the caption, not the pixels.
Constraints: exactly one intact cocoon total; one side chamber; no exposed internal contents; no touching adult; opaque 3:2 landscape; no text, labels, arrows, number, scale bar, logo, signature, border or watermark.
Avoid: multiple cocoons, egg cluster, bird egg, reptile egg, round pearl, seed pod, pupa, placenta, fetus, exposed embryo, hatchling, cut-open cocoon, transparent womb, yolk, veins, glowing orange object, nest bedding, parental care, worm wrapped around cocoon, snake head, eyes, legs, tools, hand, shovel, flooded chamber, bubbles, ant-farm maze, fantasy nursery, CGI, illustration, painting, oversaturation.
```

### 06 · Acoustic and hydrology monitoring

Calls: 1 generation, 0 revisions. Accepted on the first call.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Giant Gippsland Earthworm conservation-monitoring gallery image 6 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: Create one scientifically grounded photorealistic conservation field scene showing low-disturbance acoustic and soil-moisture monitoring for Giant Gippsland Earthworm habitat on a damp South Gippsland pasture slope. The earthworm remains underground and completely invisible.
Scene/backdrop: Generalized southern Victorian open pasture on a moist south-facing slope under soft overcast daylight. Short wet grass, a modest creek and seepage area toward the left, muted rolling green pasture behind. A simple wire fence keeps a few distant cattle well away in the far background. No named locality, road, house, vehicle, excavation or exposed soil pit.
Human and equipment: Exactly one adult field ecologist in plain unbranded neutral waterproof field clothing kneels gently on a small portable pad at the right edge of the known habitat patch. The ecologist places one compact plain weatherproof acoustic or vibration sensor flat on the intact grass surface with one hand. Several metres away near center is one slender unbranded soil-moisture probe already positioned through the turf with minimal disturbance and a small plain data logger. Equipment has no screen facing camera, no readable text, no logo, no antenna tower and no science-fiction styling. The researcher does not dig, cut turf, handle wildlife or hold a worm.
Style/medium: Photorealistic documentary conservation photography, realistic practical fieldwork, restrained natural color, no staged publicity pose.
Composition/framing: Habitat and creek occupy the left half; the kneeling ecologist and surface sensor sit around x=0.64 y=0.55 on the right. Keep hands and equipment readable without dominating the landscape. Cattle remain small, separated behind the fence, never standing on the monitored patch.
Lighting/mood: Diffuse cloudy daylight after light rain, damp grass texture, calm careful fieldwork.
Scientific boundary: The scene illustrates candidate low-intrusion monitoring. One sound, vibration or moisture reading cannot estimate population size, reproduction or long-term trend.
Constraints: exactly one human; no visible earthworm or other nearby wildlife; intact turf with no hole; one surface acoustic sensor and one separate moisture probe; opaque 3:2 landscape; no text, labels, arrows, chart, map, badge, brand, logo, signature, border or watermark.
Avoid: visible worm, transparent underground silhouette, x-ray ground, cutaway soil, hand-held worm, shovel, spade, trowel, auger, drill, sampling pit, soil core, disturbed trench, bare excavation, trap, bait, bucket, specimen jar, relocation box, livestock near researcher, cow hoof on patch, second worker, laboratory coat, hard hat construction crew, vehicle, building, roadworks, glowing sensor, robot, satellite dish, readable device screen, dramatic rain, flood, fantasy technology, illustration, CGI, oversaturation.
```

## Optimization and static validation

The repository TinyPNG command attempted all six source PNGs, then retried revised frames 01, 02 and 04 after the final scientific review:

```sh
npm run compress -- src/assets/source/species/giant-gippsland-earthworm/*-source.png
```

TinyPNG returned `HTTP 429/TooManyRequests` for every attempt because the account had exceeded its monthly limit. It wrote no compressed result. ImageMagick then applied a deterministic, lossless PNG rewrite:

```sh
magick mogrify -strip -colorspace sRGB \
  -define png:exclude-chunks=date,time \
  -define png:compression-level=9 \
  -define png:compression-filter=5 \
  -define png:compression-strategy=1 \
  src/assets/source/species/giant-gippsland-earthworm/*-source.png
```

The six accepted built-in outputs totaled 18,447,895 bytes before that rewrite. The optimized source PNGs total 16,110,691 bytes, a 12.7 percent lossless reduction.

The repository converter created the six runtime files with `cwebp -q 82 -m 6 -mt`:

```sh
npm run convert:webp -- src/assets/source/species/giant-gippsland-earthworm/*-source.png
```

| No. | Optimized PNG bytes | Runtime WebP bytes |
| --- | ---: | ---: |
| 01 | 2,795,400 | 290,732 |
| 02 | 2,471,515 | 210,744 |
| 03 | 3,003,773 | 342,878 |
| 04 | 2,306,724 | 167,276 |
| 05 | 2,376,242 | 171,970 |
| 06 | 3,157,037 | 399,304 |
| Total | 16,110,691 | 1,582,904 |

Static inspection confirmed these properties:

- All six PNGs and all six WebPs decode at 1536 x 1024 in sRGB with three color channels, no alpha and one frame.
- Removing `-source` from each PNG basename yields its exact runtime WebP basename.
- ImageMagick's lossless rewrite preserved the six accepted pixel scenes.
- The WebP conversion reduced the optimized PNG total by 90.2 percent.
- Built-in `view_image` inspection at original resolution covered every accepted PNG and every runtime WebP.
- WebP inspection found no new subject, crop, body break, false text, logo, watermark, border or material compression defect.
- Verification used static file inspection and the built-in image viewer. It used no GUI or headless browser.
