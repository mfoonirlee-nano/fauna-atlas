# Atlantic Pyrosome image set

OpenAI's built-in imagegen created these six original project images on 2026-08-31 for the Fauna Atlas *Pyrosoma atlanticum* profile. The set covers the complete colony, the open end and zooid-bearing surface, blue-green bioluminescence, nighttime upper-water context, filter-feeding currents and non-contact camera monitoring. Each frame reconstructs a generalized scientific scene rather than a named specimen, locality, measured migration, feeding trial or survey record.

- Generation tool: OpenAI built-in imagegen
- Generation modes: `photorealistic-natural` and `scientific-educational`
- Input mode: six brand-new generations with no reference images; all six first outputs passed review, so the set needed no edit or replacement call
- Research brief: [`docs/research/atlantic-pyrosome-profile.md`](../../../../../docs/research/atlantic-pyrosome-profile.md)
- Source directory: `src/assets/source/species/atlantic-pyrosome/`
- Runtime directory: `public/images/species/atlantic-pyrosome/`
- Source format: 1536 × 1024 opaque single-frame sRGB PNG
- Runtime format: 1536 × 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: six accepted brand-new generations, with no rejected output
- Compression: TinyPNG returned HTTP 429 for all six source files without rewriting them. The fallback used pngquant 3.0.3 with `--quality 80-95 --speed 1 --strip`. Runtime conversion used the repository's cwebp settings: quality 82, method 6 and multithreading.
- Byte totals: 4,268,543 bytes across the six compressed source PNGs; 384,280 bytes across the six runtime WebPs; 4,652,823 bytes across both sets

## Accepted files and visual boundaries

| No. | Source file | Runtime file | Static review result | Scientific boundary |
| ---: | --- | --- | --- | --- |
| 01 | `01-open-ocean-colony-cover-source.png` | `01-open-ocean-colony-cover.webp` | One complete pink colony crosses the right side of open blue water. Its broad open end, tapered closed end, central cavity and rough zooid-bearing wall remain readable, while the left side retains copy space. | The pixels do not provide body measurements, a locality, colony age or specimen-level identification. |
| 02 | `02-zooid-texture-open-end-diagnostic-source.png` | `02-zooid-texture-open-end-diagnostic.webp` | One oblique close view keeps the full rim visible and shows a single central cavity, an inward annular shelf and a dense irregular surface of pores and low projections. | The reconstructed texture cannot replace microscopy, a diagnostic key or a preserved specimen. |
| 03 | `03-blue-green-bioluminescence-source.png` | `03-blue-green-bioluminescence.webp` | One complete colony emits an uneven band of restrained blue-green points and patches. Dim pink-purple tissue remains visible outside the luminous area. | The frame does not assign the light to bacteria, a host luciferase, a stimulus or a communication function. |
| 04 | `04-night-upper-water-migration-context-source.png` | `04-night-upper-water-migration-context.webp` | One non-luminous colony floats in the right half of a dark water column that grows lighter toward the top. The frame includes no arrow, depth number or duplicate daytime state. | A single nighttime scene cannot establish direction, speed, depth range, migration amplitude or a universal daily pattern. |
| 05 | `05-filter-feeding-current-visualization-source.png` | `05-filter-feeding-current-visualization.webp` | One colony faces its common opening toward the right. Sparse particle traces approach the zooid-bearing wall and leave through the open end, while the central cavity remains visible. | The particle paths explain flow direction and do not measure filtration efficiency, current speed, food identity or particle size. |
| 06 | `06-towed-camera-noncontact-monitoring-source.png` | `06-towed-camera-noncontact-monitoring.webp` | One cable-suspended camera platform occupies the left side and observes one complete colony across a clear water gap. The platform has no manipulator, net, laser dots or readable branding. | The generic observation scene cannot establish abundance, species identity, sampling volume, institution, equipment model or survey locality. |

All six frames contain one colony and no other animal. None contains readable text, a logo, watermark, border or collage. The generated colony remains a tapered hollow cylinder with one open end, one closed end and many zooids embedded in a common wall. The set avoids tentacles, eyes, sea-cucumber feet, sponge chimneys and exposed internal organs. Frame 03 depicts only visible blue-green emission. Frame 05 uses particles as explanatory tracers, and frame 06 preserves a non-contact water gap.

## Imagegen output ledger

All six accepted outputs share this generator directory:

`/Users/chris.li/.codex/generated_images/01a055e7-e94d-7ba3-8e69-a020b7745a9c/`

| No. | Mode | Generator output | Accepted source file |
| ---: | --- | --- | --- |
| 01 | Brand-new, `photorealistic-natural` | `exec-3c6233df-1f5b-4719-ab0c-8fb6a42d8079.png` | `01-open-ocean-colony-cover-source.png` |
| 02 | Brand-new, `scientific-educational` | `exec-81ca5523-4681-404f-94ea-10a177bd843a.png` | `02-zooid-texture-open-end-diagnostic-source.png` |
| 03 | Brand-new, `photorealistic-natural` | `exec-05573656-5efb-4832-90d4-b7805c9bd268.png` | `03-blue-green-bioluminescence-source.png` |
| 04 | Brand-new, `photorealistic-natural` | `exec-d037d8ea-8f8e-4753-8100-90a18278c67f.png` | `04-night-upper-water-migration-context-source.png` |
| 05 | Brand-new, `scientific-educational` | `exec-876be22e-e5b0-42ec-ba47-12a0a0612ba2.png` | `05-filter-feeding-current-visualization-source.png` |
| 06 | Brand-new, `photorealistic-natural` | `exec-4be6317b-c73d-4887-9c12-39b37f2dff9f.png` | `06-towed-camera-noncontact-monitoring-source.png` |

The generator originals remain in the directory above. The project copies keep the six accepted frames under stable source basenames.

## Final prompt record

These six prompts produced the accepted image set.

### 01 · Open-ocean colony cover

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Pyrosoma atlanticum cover image, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create an original scientifically grounded underwater natural-history photograph of exactly one complete living Pyrosoma atlanticum colony suspended in open ocean water.
Scene/backdrop: Temperate-to-subtropical blue offshore water with soft natural haze and sparse suspended particles. No seafloor, reef, shoreline, aquarium, boat, diver, other animal, or human trace.
Subject: One intact elongated hollow cylindrical colony with a firm gelatinous wall. The colony tapers from a broader open end on the right to a narrower smoothly rounded and fully closed end on the left. Show the right opening from a gentle oblique angle so one central dark-blue cavity remains visible. A thick annular diaphragm forms a shelf around the opening and narrows it without sealing it. The outer wall is pale flesh-pink to muted rose-purple, semi-translucent without becoming glass-clear. Fine darker zooid mottling covers the wall. Dense low papillae and short tapered or blunt test projections give the surface a rough texture. Most projections share one lean along the long axis. Keep all constituent zooids embedded in the common wall.
Style/medium: Original photorealistic professional pelagic natural-history photography, realistic seawater optics and gelatinous tissue, restrained scientific-publication finish.
Composition/framing: Exact 1536 x 1024 landscape. Place the full colony across the right two-thirds, with its long axis near horizontal and a slight diagonal rise. Keep the closed tip, open rim, and full silhouette inside generous margins. Preserve the left third as calm open-water negative space. Keep the colony inside a centered 16:9 safe crop.
Lighting/mood: Soft diffuse daylight from above, calm observational mood, natural contrast.
Color palette: Slate blue and muted teal water, pale pink and restrained rose-purple tissue, faint cream zooid texture.
Materials/textures: Firm wet gelatinous tunic, fine embedded zooid pattern, low rough projections, natural water haze.
Constraints: exactly one colony; exactly one open end and one closed end; one continuous central cavity; complete silhouette; no scale reference; no text, label, arrow, ruler, icon, border, logo, signature, or watermark. Treat the result as a reconstruction rather than an occurrence record or diagnostic specimen.
Avoid: a second opening; both ends open; a solid cucumber body; sea cucumber feet; sponge chimneys; coral polyps; anemone tentacles; salp chain; siphonophore; jellyfish bell; fish; diver; giant human-scale tube; glass pipe; translucent internal organs; regular honeycomb holes; long hairs; spikes like a porcupine; teeth; face; eyes; mouth; neon glow; fantasy lighting.
```

### 02 · Zooid texture and open end

```text
Use case: scientific-educational
Asset type: Fauna Atlas Pyrosoma atlanticum diagnostic gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original naturalistic underwater macro reconstruction of the open end and zooid-bearing surface of exactly one Pyrosoma atlanticum colony.
Scene/backdrop: Clean blue open water with soft depth falloff and sparse natural particles. No substrate, aquarium glass, laboratory dish, hand, other organism, or equipment.
Subject: One colony shown in close oblique view. The broad open end faces the camera at a three-quarter angle. Show one dark central cavity and a firm annular diaphragm that projects inward as a shelf, leaving a clear central opening. The adjacent exterior wall fills most of the frame. Render the common tunic as pale pink to muted lavender, firm, wet, and semi-translucent. Many small embedded zooids form a dense irregular mosaic. Their exterior intake apertures appear as tiny recessed pores among rounded-to-angular unit outlines. Low papillae and occasional short tapered test projections interrupt the surface. The zooids remain embedded and do not protrude as separate animals.
Style/medium: Photorealistic marine macro photography with museum-reference clarity, natural tissue texture, no diagram or CGI appearance.
Composition/framing: Exact 1536 x 1024 landscape. Center the opening near x=0.46, y=0.49. Let the textured wall sweep toward the right and lower edges. Keep the whole rim visible with enough surrounding water to distinguish the opening from a cut surface.
Lighting/mood: Soft raking side light reveals relief without glare. Subtle transmitted light passes through the tunic.
Color palette: Muted blue water, flesh pink, pale lavender, restrained cream and rust zooid details.
Materials/textures: Cartilaginous gelatinous tunic, shallow pores, small rough papillae, moist irregular surface.
Constraints: exactly one colony; exactly one open aperture; diaphragm remains an annular shelf and does not form a sealed cap; no isolated zooid; no cutaway; no microscopic organ detail; no labels, arrows, ruler, scale bar, text, border, logo, signature, or watermark. The surface pattern supplies a structural reconstruction rather than a species-level diagnosis.
Avoid: sponge oscula; honeycomb cells; coral cups; flower rosettes; barnacles; tube worms; anemone polyps; protruding heads; eyes; tentacles; cilia visible as fur; sharp cactus spines; a perfectly smooth rubber tube; torn tissue; surgical section; transparent wall exposing organs; multiple colony openings.
```

### 03 · Blue-green bioluminescence

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Pyrosoma atlanticum bioluminescence gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original low-light underwater natural-history photograph of exactly one intact Pyrosoma atlanticum colony emitting restrained blue-green bioluminescence.
Scene/backdrop: Dark open-ocean water at night with faint suspended particles and a deep navy gradient. No surface, seafloor, reef, boat, diver, predator, second colony, or visible source of stimulation.
Subject: One complete pale pink-to-purple cylindrical colony with one broader open end and one tapered closed end. Preserve the rough zooid-bearing surface. Across part of the colony, many small blue-green points and short soft patches align with the embedded zooid texture, forming an uneven wave-like band. Adjacent parts remain dim enough to show the original tissue color and surface relief. The emission comes from the colony surface and does not form an external cloud.
Style/medium: Original photorealistic deep-water documentary photography, realistic low-light exposure and seawater scattering, restrained scientific-publication quality.
Composition/framing: Exact 1536 x 1024 landscape. Place the colony diagonally through the center-right with its complete outline and both ends visible. Keep dark negative space around it and preserve all anatomy inside a centered 16:9 crop.
Lighting/mood: Near-dark ambient water with the colony as the main light source. Preserve shadow and tissue texture. Avoid theatrical rim lights.
Color palette: Deep navy and black-blue water, muted rose-purple tissue, cyan-green to blue-green emission with controlled saturation.
Materials/textures: Firm gelatinous tunic, embedded zooid pattern, diffuse biological light under wet tissue.
Constraints: exactly one colony; partial patterned blue-green emission; unlit tissue remains visible; no depiction of bacteria, luciferase, photophore anatomy, stimulus, predator, or communication partner; no text, labels, arrows, waveform, border, logo, signature, or watermark.
Avoid: solid neon tube; uniform glow over the whole body; electric arcs; lightning; laser lines; fluorescent paint; fire; sparks; stars; LED grid; rainbow colors; red warning lights; giant glowing pores; visible microbes; fantasy magic; second responding colony; contact by a hand, fish, ROV, or probe.
```

### 04 · Night upper-water migration context

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Pyrosoma atlanticum diel-migration gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original underwater natural-history photograph placing exactly one Pyrosoma atlanticum colony in a plausible nighttime upper-ocean setting.
Scene/backdrop: Open ocean after dark. A broad dim blue gradient becomes lighter toward the top of frame and darker below, suggesting upper water without a visible horizon or measurable depth. Include sparse marine particles and weak shafts of downwelling nocturnal light. No seafloor, reef, shoreline, vessel, other animal, or equipment.
Subject: One complete living colony, pale pink to muted purple, with a broader open end, tapered closed end, rough zooid texture, and no visible bioluminescence. The colony floats in midwater at a slight upward angle. Keep the pose neutral, with no motion streaks or forced swimming gesture.
Style/medium: Original photorealistic pelagic field photography, natural nocturnal exposure, sober documentary treatment.
Composition/framing: Exact 1536 x 1024 landscape. Place the colony in the lower-right half near x=0.61, y=0.58. Retain open water above and below so the vertical water-column context reads without a scale. Keep the full colony inside a centered 16:9 safe crop.
Lighting/mood: Low diffuse blue light from above, calm dark water, no spotlight or cinematic moonbeam.
Color palette: Deep indigo below, muted blue above, pale rose-purple colony, low saturation.
Materials/textures: Natural water haze, sparse particles, firm gelatinous colony surface.
Constraints: exactly one colony; no duplicate day-state colony; no depth number, clock, sun, moon icon, arrow, trail, chart, split screen, scale line, map, text, border, logo, signature, or watermark. The still frame supplies nighttime habitat context and does not claim migration speed, amplitude, direction, or universal behavior.
Avoid: colony touching the surface; visible beach or horizon; seafloor; upward arrows; numbered depth bands; before-and-after layout; dense swarm; multiple size classes; diving pose like a fish; fins; bubbles from an animal; glow; carcass sinking; exaggerated abyssal darkness.
```

### 05 · Filter-feeding current visualization

```text
Use case: scientific-educational
Asset type: Fauna Atlas Pyrosoma atlanticum feeding-current gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original naturalistic scientific reconstruction of water movement around exactly one feeding Pyrosoma atlanticum colony, using sparse suspended particles as visual tracers.
Scene/backdrop: Clear blue open-ocean water with a low density of tiny unidentifiable suspended specks. No reef, seafloor, aquarium, other animal, human, or equipment.
Subject: One intact colony in three-quarter side view, with the broader open end facing right and the tapered closed end facing left. Preserve the rough embedded-zooid surface and the central cavity visible through the open end. A small fraction of suspended particles forms faint short curved streaks that approach the outer zooid-bearing wall from several directions. Within the visible cavity, restrained motion traces lead toward a broad weak outflow that leaves only through the common open end. Keep most of the water clear. Do not show particles entering through the common opening. Do not expose internal organs or turn the colony wall into a transparent cutaway.
Style/medium: Naturalistic underwater long-exposure photography combined with a restrained scientific visualization, realistic water optics and tissue, no infographic appearance.
Composition/framing: Exact 1536 x 1024 landscape. Place the colony across the center with the open end near x=0.72, y=0.51. Leave enough water to the right for a short diffuse outflow and enough margin around the full silhouette.
Lighting/mood: Soft side light, clear observational scene, controlled particle contrast.
Color palette: Muted teal-blue water, pale rose-lavender tissue, colorless to pale green-gray particle traces.
Materials/textures: Firm gelatinous tunic, embedded zooid pores, fine suspended matter, subtle current streaks.
Constraints: exactly one animal colony; background particles remain tiny and lack identifiable species forms; exterior intake context and open-end outflow remain readable; no measured flow speed or clearance rate; no text, labels, arrows, vector lines, ruler, scale bar, inset, border, logo, signature, or watermark. Treat particle paths as explanatory visualization.
Avoid: water entering through the common open end; forceful fire-hose jet; bubbles from the colony; external mucus net; larvacean house; baleen; tentacles grabbing prey; mouth or teeth; fish-sized food; krill; copepods shown at giant scale; dense plankton soup; fecal pellets; transparent anatomy; colored arrows; pump machinery; second colony.
```

### 06 · Towed-camera non-contact monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Pyrosoma atlanticum monitoring gallery image, exact 1536 x 1024 horizontal 3:2
Primary request: Create an original marine-research documentary photograph showing one unbranded towed underwater camera platform observing exactly one Pyrosoma atlanticum colony without contact.
Scene/backdrop: Open pelagic blue water with natural haze and sparse particles. No surface vessel, seafloor, reef, shoreline, diver, fish, or second colony.
Research equipment: One compact open-frame pelagic camera platform occupies the left third. A thin tow cable exits the top edge. The frame carries one forward camera housing, two small low-intensity white lamps, and one plain cylindrical environmental sensor. Show no manipulator, suction sampler, net, trap, propeller, bait, brand, text, display, or laser dots.
Animal: One complete pale pink-to-purple cylindrical colony floats in the right half. Its broader open end, tapered closed end, and rough zooid-bearing surface remain visible. Maintain a clear water gap of more than one colony width between the camera frame and the animal. The camera lamps provide soft illumination without triggering visible glow.
Style/medium: Original photorealistic oceanographic field-documentary photography, realistic engineering details, seawater optics, and gelatinous tissue.
Composition/framing: Exact 1536 x 1024 landscape. Place the camera frame near x=0.27, y=0.48 and the colony near x=0.67, y=0.54. Keep both complete, separated, and inside a centered 16:9 safe crop.
Lighting/mood: Dim blue ambient water with soft neutral camera illumination, calm low-impact survey atmosphere.
Color palette: Deep blue water, dark gray metal frame, muted white lamps, pale rose-purple animal.
Materials/textures: Anodized metal frame, glass camera dome, thin cable, firm wet gelatinous tunic, suspended particles.
Constraints: exactly one camera platform; exactly one colony; zero people and zero other animals; no contact, capture, handling, tagging, scale projection, or readable data; no text, labels, arrows, map, border, logo, signature, or watermark. The image depicts an observation method and does not establish abundance or species identity.
Avoid: ROV claw; robotic arm; net; suction hose; specimen jar; colony caught on cable; camera touching the colony; laser scale dots; sonar beams; tracking tag; diver; submersible cockpit; ship hull; multiple colonies; bloom; dead specimen; aquarium; dramatic science-fiction vehicle; readable screen or brand.
```

## Static inspection

ImageMagick identified all twelve source and runtime assets as 1536 × 1024, sRGB, opaque and single-frame. The source files decode as 8-bit palette PNGs after pngquant compression. The runtime files decode as 8-bit TrueColor lossy VP8 WebPs without alpha or animation. Full-resolution visual review found the requested count and scene boundary in each frame:

- Frame 01 keeps one complete tapered colony, one open end, one closed end and left-side negative space.
- Frame 02 shows one central cavity, the annular rim and dense embedded zooid texture without isolated animals.
- Frame 03 preserves dim tissue around a partial band of blue-green surface emission and depicts no proposed light-producing mechanism.
- Frame 04 shows one non-luminous colony in a nighttime water-column gradient without migration graphics or scale claims.
- Frame 05 directs sparse explanatory particle traces toward the outer wall and out through the common opening.
- Frame 06 separates one unbranded camera platform from one complete colony by open water and includes no capture gear.

The runtime WebPs keep the source basenames without `-source` and preserve each composition. SHA-256 inspection found six unique hashes within the PNG set and six unique hashes within the WebP set.
