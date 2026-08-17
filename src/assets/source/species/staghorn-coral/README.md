# Staghorn coral image set

These six original project images were generated with Codex's built-in image generation tool for the complete Fauna Atlas staghorn coral profile. The set keeps *Acropora cervicornis* distinct from the broad, flattened branches of elkhorn coral: living colonies are golden tan to pale brown, branches remain cylindrical, radial corallites incline toward a larger terminal axial corallite, and only active growth tips are naturally pale. It also separates uniform bleaching with tissue still present from white-band tissue loss and from normal white growth tips.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/staghorn-coral/*.webp`
- Dimensions: 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | File | Observation |
| --- | --- | --- |
| 01 | `01-shallow-reef-colony-cover-source.png` | Healthy golden-tan colony on a Caribbean fore reef; cover and featured card |
| 02 | `02-axial-radial-corallites-macro-source.png` | Living branch tip showing the axial corallite and dense tipward radial corallites |
| 03 | `03-interlocking-thicket-fish-habitat-source.png` | Interlocking thicket used as shelter by a few small Caribbean reef fish |
| 04 | `04-bleaching-versus-white-band-source.png` | Text-free comparison of living bleached tissue and a white-band tissue-loss boundary |
| 05 | `05-in-water-coral-tree-nursery-source.png` | Nursery fragments suspended from a coral tree above the reef bottom |
| 06 | `06-diver-outplanting-fragments-source.png` | Five nursery-reared fragments being fixed to hardbottom with small epoxy pads |

Static inspection accepted all six source PNGs and derived WebPs at original resolution. The cover retains calm left-side negative space and keeps its diagnostic colony in the central-right responsive safe area. Frame 02 is the only iteration: an initial macro made the radial corallites unrealistically large, so a targeted edit reduced them to dense, small, leaf-like relief while preserving one larger terminal axial corallite. Frame 03 contains only a few small Caribbean fish and no Indo-Pacific indicator species. Frame 04 keeps continuous tissue and polyps on the uniformly pale branches at left, while the right branches transition from living brown tissue through fresh white bare skeleton to older algae-colonized skeleton. Nursery fragments in frames 05–06 hang clear of the bottom or attach to hard limestone rather than being planted in sand. Frames 05–06 do not literally meet every requested 8-percent edge margin: peripheral fragments touch the upper/right edges in frame 05, and nonessential diver hair and hoses approach the upper edge in frame 06; the nursery structure, five outplants, both hands and all diagnostic coral remain inside the responsive focal area. No frame contains broad elkhorn blades, neon Acropora colors, readable labels, logos or watermarks.

## Final prompts

### 01 · Healthy shallow-reef colony cover

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Staghorn Coral species-detail cover and featured editorial card, exact 3:2 horizontal landscape, original project asset
Input image: Image 1 is a NOAA Fisheries photograph used only as a morphology and natural-color reference for Acropora cervicornis; preserve species identity but create a wholly original reef, colony arrangement, camera position, lighting, fish placement, and composition.
Primary request: Create a restrained natural-history underwater photograph of one healthy thicket-forming staghorn coral colony (Acropora cervicornis) on a Caribbean fore reef.
Scene/backdrop: Clear warm western Atlantic water at roughly 8–12 metres depth, natural limestone reef substrate, a few low sea fans and distant small native reef fish softened by water depth; no diver, nursery hardware, shipwreck, aquarium, Pacific reef species, labels, or human trace.
Subject: One coherent golden-tan to pale-brown A. cervicornis colony made of many slender cylindrical antler-like branches rising and interlocking from a central reef base. Branches are roughly finger-width, straight to gently curved, with natural forked growth, round cross-sections, dense small radial corallites along the sides, one prominent axial corallite at every branch tip, and subtly pale cream-white living growth tips only. Living tissue covers the branches. This must look like staghorn coral, never broad flattened elkhorn coral.
Style/medium: Original photorealistic professional underwater natural-history photography, scientifically credible Caribbean reef ecology, fine polyp and corallite texture, restrained museum-publication processing.
Composition/framing: Exact 1536 × 1024, 3:2 horizontal. Place the diagnostic colony in the central-right safe area around x=0.62 y=0.56 so it survives a 1.92:1 hero crop, wide featured card, and near-square mobile crop. Keep all important branches inside the frame and leave calm open blue-water negative space across the left third for interface typography. Low three-quarter camera view, environmental scale, no extreme fisheye.
Lighting/mood: Soft sun shafts from the upper left, natural cyan-blue attenuation, calm clear morning water, observational rather than tropical-advertising spectacle.
Color palette: Muted golden tan, pale brown, cream growth tips, limestone gray, restrained Caribbean blue and small touches of sea-fan purple.
Constraints: Exactly one primary A. cervicornis thicket; thin cylindrical branches with round sections and pale living growth tips; all-white areas limited to normal new-growth tips; no text, logo, signature, border, or watermark.
Avoid: Acropora palmata or elkhorn coral with broad flattened blades, table coral, branching fire coral, Pacific neon Acropora, huge flower-like polyps, fluorescent colors, entirely bleached colony, bare white skeleton, white-band disease, black band, mucus, dead algae-covered branches, storm damage, coral nursery frame, outplant plug, diver, aquarium, fantasy, CGI, illustration, oversaturation, stock-photo gloss.
```

### 02 · Axial and radial corallites

The accepted frame was produced by applying the following targeted anatomy edit to an otherwise accepted first pass. The original generation prompt is retained below it for reproducibility.

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Staghorn Coral identification gallery image 2 of 6, exact 3:2 horizontal landscape
Input images: Image 1 is the edit target, an otherwise accepted living underwater macro composition. Image 2 is a Smithsonian CC0 Acropora cervicornis skeleton reference used only for the correct relative size, density, leaf-like shape, and tipward inclination of axial and radial corallites.
Primary request: Change only the branch surface anatomy. Replace the unrealistically huge, sparse, equal-sized hollow tubes on Image 1 with the true fine-scale A. cervicornis structure shown by Image 2: one moderately larger terminal axial corallite at the branch tip, plus many much smaller, densely packed leaf-like to short-tubular radial corallites along the sides, each inclined toward the branch tip. The radial cups should be only a small fraction of branch diameter and should read as subtle dense surface relief, not separate trumpet tubes. Keep a few very short, delicate polyps emerging from selected radial cups.
Constraints: Preserve Image 1's exact single cylindrical branch, diagonal lower-left to upper-right composition, golden-tan living tissue, pale cream growth tip, underwater blue bokeh, background colony, camera framing, depth of field, lighting, and color grade. Living tissue remains continuous over the branch. Change nothing except corallite scale, density, and shape. No text, logo, border, or watermark.
Avoid: giant tubular cups, pipe-organ coral, tube sponge, lotus-seed-pod tip, equal-size holes, long anemone tentacles, bare dry skeleton, broad flattened branch, neon color, disease, algae, restyling, reframing.
```

Original generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Staghorn Coral identification gallery image 2 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Input images: Image 1 is a Smithsonian CC0 dry-skeleton specimen reference used only to reproduce Acropora cervicornis axial and radial corallite structure; Image 2 is a NOAA living-colony reference used only for natural golden-tan tissue color and pale growing tips. Create a wholly original living underwater macro scene, never a specimen photograph.
Primary request: Create a precise natural underwater macro photograph of one healthy living A. cervicornis branch tip at a 45-degree oblique angle, clearly revealing the diagnostic terminal axial corallite and nearby radial corallites.
Scene/backdrop: The branch remains attached to a living Caribbean reef colony; distant branches and blue water dissolve into soft natural bokeh. No ruler, specimen tray, labels, aquarium glass, diver, or human equipment.
Subject: One finger-width cylindrical golden-tan living branch enters from lower-left and points toward upper-right. At its active tip is exactly one larger round cup-like axial corallite. Along the branch sides are many smaller leaf-like to short-tubular radial corallites that incline toward the branch tip in orderly natural rows. The last short growth segment is pale cream but remains covered by translucent living tissue continuous with the brown branch. Show a few tiny cream-to-tan polyps with short subtle tentacles emerging from selected side corallites; the axial cup and the nearest two rows of radial cups remain unobstructed and sharply readable.
Style/medium: Original photorealistic professional underwater macro natural-history photography, high-fidelity calcified cup texture under living tissue, restrained museum-publication processing.
Composition/framing: Exact 1536 × 1024, 3:2 horizontal, also safe under centered 16:9 cropping. Branch runs diagonally from x=0.22 y=0.80 to its tip around x=0.64 y=0.38. Keep the full active tip and closest corallites within the central safe area, at least 10 percent from every edge. Shallow depth of field but axial cup and two adjacent radial rows simultaneously sharp.
Lighting/mood: Soft side-lit filtered Caribbean daylight with gentle underwater blue fill, calm and observational, no theatrical glow.
Color palette: Natural golden tan, pale cream growth tip, muted cyan-blue bokeh.
Constraints: Living Acropora cervicornis; cylindrical branch; exactly one obvious terminal axial corallite; smaller leaf-like or short-tubular radial corallites inclined toward the tip; tissue continuity visible; no text, logo, signature, border, or watermark.
Avoid: dry white museum skeleton, bare dead skeleton, lotus-seed-pod tip with many equal holes, starburst tip, uniformly wart-like bumps, long thorns, giant flower or anemone polyps, broad flattened elkhorn branch, table coral, neon Pacific Acropora, completely bleached branch, white-band disease, algae, tissue slough, fused lattice, perfect symmetry, CGI, illustration, oversaturation.
```

### 03 · Interlocking thicket and fish habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Staghorn Coral habitat gallery image 3 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a scientifically credible underwater natural-history photograph of a dense living thicket of staghorn coral (Acropora cervicornis) functioning as three-dimensional nursery habitat for a few small native Caribbean reef fish.
Scene/backdrop: Clear shallow Caribbean fore-reef or back-reef water, approximately 3–8 meters deep, with a natural sandy-rubble bottom visible only in small gaps and softly filtered turquoise water behind. No diver, boat, rope, nursery frame, restoration hardware, cage, tag, aquarium, buildings, trash, fishing gear or human trace.
Subject: The main subject is one interconnected thicket of healthy living Acropora cervicornis. Show many slender cylindrical antler-like branches about finger thickness, round in cross-section, repeatedly forking and interlocking into an open lattice. Every readable living branch has realistic tan to golden-brown tissue, small scale-like radial corallites along the sides, and one slightly larger tubular axial corallite at the blunt terminal tip. Tips may be subtly paler from active growth but are not dead white. Branches must never be wide, flat, blade-like, fan-shaped or palm-like. Include only a few small anatomically coherent native Caribbean fishes using the internal gaps: juvenile blue chromis (Chromis cyanea) and tiny masked or glass gobies, all at correct small scale, naturally dispersed and partially sheltered rather than arranged in a school. No Indo-Pacific species.
Style/medium: Original photorealistic professional underwater natural-history photography, restrained conservation-documentary quality, authentic seawater haze, coral tissue texture, corallite detail and fish scales; not an aquarium or digital render.
Composition/framing: Exact 3:2 horizontal medium-wide environmental frame. The coral thicket fills the lower two-thirds and extends from foreground into middle distance, with interlocking branch gaps clearly readable. Place the clearest axial tips and two or three small fish around the central-right safe area near x=0.58, y=0.55; preserve open water and quiet branch space for responsive cropping. Fish remain secondary and small; the coral habitat is unmistakably the subject.
Lighting/mood: Natural dappled midday sunlight from the water surface, calm clear water, ecological richness without postcard spectacle.
Color palette: Natural warm tan and muted golden-brown living coral tissue, pale cream growing tips, restrained turquoise-blue water, small true-blue and translucent fish accents.
Materials/textures: Living coral tissue tightly covering calcium-carbonate skeleton; numerous fine radial corallites; clear terminal axial corallites; subtle suspended particles and natural reef patina.
Constraints: Exact 1536×1024 landscape output; scientifically recognizable Acropora cervicornis cylindrical branching morphology; living tissue covers the thicket; only a few small native Caribbean fishes; no text, labels, arrows, logo, signature, border or watermark; no humans or restoration equipment; no other prominent coral species; no disease, bleaching or exposed dead skeleton in this habitat frame.
Avoid: elkhorn coral Acropora palmata, broad flattened blades, table coral, bushy birdsnest coral, gorgonian fans, brain coral foreground, Indo-Pacific clownfish, butterflyfish or anthias, dense tropical-fish crowd, giant fish, aquarium lighting, coral nursery racks, PVC, zip ties, tags, diver, boat, dramatic sunburst, oversaturated cyan, fantasy colors, smooth plastic branches, bone-white entire colony, dead algae-covered thicket, disease band, black band, CGI, illustration, painting, text or watermark.
```

### 04 · Bleaching versus white-band tissue loss

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Staghorn Coral stress-and-disease gallery image 4 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create one scientifically credible, text-free underwater natural-history photograph arranged as a clean side-by-side visual comparison of two different staghorn coral (Acropora cervicornis) conditions: uniform thermal bleaching with living tissue on the left, versus an advancing white-band tissue-loss lesion on the right.
Scene/backdrop: Both halves are photographed in the same clear shallow Caribbean reef setting under matched natural daylight and turquoise water, with quiet softly blurred reef background. Use a subtle natural central separation created by open water, not a drawn divider, panel border, label, arrow or infographic graphic. No diver, aquarium, restoration hardware, tags or human trace.
Subject — left half, bleaching while tissue remains alive: One close cluster of slender cylindrical Acropora cervicornis branches, round in cross-section and finger-thick, with recognizable radial corallites along each side and one larger axial corallite at each blunt tip. The entire visible cluster is uniformly pale ivory to very light cream because symbiotic algae have been lost, yet a thin translucent living tissue sheath still continuously covers every branch. Fine intact polyps and soft tissue texture remain visible across the pale surface. There is no sharp advancing edge, no zone of missing tissue, no algae growing on the branches, no bare crumbling skeleton and no isolated stark band.
Subject — right half, white-band tissue loss: One different cylindrical staghorn branch cluster shown close enough to read three physically connected zones on several branches. At the newest branch tips and forward side is healthy tan-golden living tissue with visible intact polyps. Immediately behind it is a narrow, sharply bounded, fresh brilliant-white strip of exposed calcium-carbonate skeleton where tissue has just been lost; the empty radial corallite cups remain structurally crisp but contain no living polyps. Behind that fresh white strip is older dead skeleton clearly colonized by muted olive-brown turf algae. The bright white exposed band forms a coherent advancing boundary between healthy living tissue and algae-covered old skeleton. Show no dark microbial line and no bleeding or wound-like red color.
Style/medium: Original photorealistic professional underwater scientific-documentary photography, natural coral texture and water haze, visually clear enough for public education but fully photographic rather than diagrammatic or clinical specimen staging.
Composition/framing: Exact 3:2 horizontal paired comparison. Left condition fills approximately 46 percent of the frame and right condition fills approximately 46 percent, balanced at similar branch scale and camera distance. Open turquoise water provides a narrow understated central gap. Keep all diagnostic surfaces inside a centered 16:9 safe crop. The left half reads as uniformly pale living coral; the right half reads unmistakably as healthy brown tissue connected through a thin fresh white skeletal band to older algae-coated dead skeleton.
Lighting/mood: Soft even shallow-water daylight with matched white balance across both conditions, sober and observational, no theatrical spotlight or disaster spectacle.
Color palette: Left: translucent ivory and cream living tissue with subtle beige shadow. Right: warm tan-golden living coral, one narrow clean white skeletal band, muted olive and brown algae on old skeleton. Background: restrained Caribbean turquoise.
Materials/textures: Fine living coral tissue and small polyps on the left; crisp empty corallite cups within the right fresh-white band; fine turf algae only on the right old-dead zone; realistic calcium-carbonate branch structure.
Constraints: Exact 1536×1024 landscape output; two-condition side-by-side comparison with no words or graphic overlays; both subjects have slender cylindrical Acropora cervicornis branches, radial corallites and terminal axial corallites; left retains continuous living tissue despite uniform pallor; right has a narrow fresh-white bare-skeleton band directly connecting healthy tissue and algae-covered old skeleton; no text, labels, arrows, legend, logo, signature, border or watermark; no blood or gore; no whole-colony death.
Avoid: confusing both halves as dead white skeleton, uniformly white bare branches, complete colony mortality, missing tissue on the bleached left coral, algae on the left coral, no algae behind the right lesion, diffuse generic paling on the right, black-band disease, dark bacterial band, brown band, red wound, blood, mucus plume, necrotic flesh, bleaching gradient presented as disease band, elkhorn coral broad flat blades, table coral, gorgonian fan, Indo-Pacific reef animals, aquarium, restoration nursery, split-screen captions, vertical line, icon, diagram, CGI, illustration, painting, oversaturation or sensational disaster imagery.
```

### 05 · In-water coral-tree nursery

```text
Use case: photorealistic-natural
Asset type: species profile gallery image, exact 1536x1024 landscape, 3:2 aspect ratio
Primary request: a scientifically plausible in-water nursery for staghorn coral, Acropora cervicornis, photographed as natural-history documentary photography
Scene/backdrop: clear shallow Caribbean blue water above a limestone reef; a simple underwater coral-tree nursery made from pale weathered inert PVC crossbars, firmly anchored to the seafloor; open water around it
Subject: many separate hand-to-forearm-length healthy Acropora cervicornis fragments individually suspended by thin monofilament from the crossbars. Every fragment has cylindrical straight or gently curved antler-like branches, irregular secondary branches, dense tiny bract-like radial corallites angled toward each branch tip, one axial corallite at each terminal tip, golden tan to pale brown living tissue, and only short natural cream-white growing tips. One small scuba diver is far in the background performing maintenance and must not dominate.
Style/medium: photorealistic underwater natural-history documentary photograph, realistic water optics, fine coral texture, no stylization
Composition/framing: wide horizontal frame; tree structure centered slightly right with focal point around x 0.56 y 0.51; visible seafloor anchor at bottom; blue-water negative space in the upper left; strong depth and scale; all important fragments and structure remain at least 8 percent from every edge for safe cropping
Lighting/mood: diffuse sunbeams through clear water, calm scientific fieldwork mood, natural color balance
Color palette: Caribbean cyan-blue water, golden-tan and pale-brown coral tissue, subtle cream-white growth tips, neutral weathered nursery material
Materials/textures: real porous coral skeleton beneath continuous living tissue, tiny inconspicuous cream polyps, thin nearly invisible monofilament, algae lightly weathering the PVC without obscuring it
Constraints: exact 1536x1024 output; only staghorn coral fragments on the nursery; fragments hang freely above the bottom and do not touch sand; each fragment remains visually separate; no text, no labels, no logos, no watermark
Avoid: Acropora palmata or elkhorn coral; broad flattened fan branches; neon blue, purple, green, or pink Indo-Pacific Acropora colors; giant flower-like polyps; long spikes; fused coral lattice; perfect bilateral or Christmas-tree symmetry; roots; plant seedlings; aquarium tank; fragments embedded in sand; fragments tied tightly with colorful rope; entire mature colonies hanging from the tree; crowded foreground diver; multiple divers; tools or branding; bleaching across whole branches; diseased lesions; extra coral species dominating
```

### 06 · Diver outplanting nursery fragments

```text
Use case: photorealistic-natural
Asset type: species profile gallery image, exact 1536x1024 landscape, 3:2 aspect ratio
Primary request: a scientifically plausible underwater restoration scene showing a field scientist outplanting nursery-reared staghorn coral, Acropora cervicornis, on a Caribbean reef
Scene/backdrop: clear shallow Caribbean water over degraded but stable limestone hardbottom; the immediate attachment spots have been carefully cleared of loose sediment and nuisance algae; natural reef relief recedes into blue water
Subject: one scuba diver wearing plain unbranded blue field gear and gloves, calmly using both hands to secure a small healthy staghorn coral fragment to hard limestone with a modest pea-to-walnut-sized dab of pale marine epoxy. In the near foreground, four other already-secured fragments form a loose array of five with ample space between them for future growth. Each fragment has cylindrical straight or gently curved antler-like branches, irregular secondary branches, dense tiny bract-like radial corallites angled toward each branch tip, one axial corallite at each terminal tip, golden tan to pale brown living tissue, and only short natural cream-white growing tips. A few small blank neutral genotype tags lie close to the bases without readable writing.
Style/medium: photorealistic underwater natural-history documentary photograph, authentic conservation fieldwork, realistic anatomy, materials, water optics, and restrained color
Composition/framing: wide horizontal frame from a close three-quarter downward angle; diver's upper body occupies the middle background while gloved hands, the active fragment, epoxy attachment, and four completed outplants fill the lower half; focal point around x 0.55 y 0.66; all hands, branch tips, tags, and equipment remain at least 8 percent from every edge for safe cropping; enough surrounding reef context to explain the method
Lighting/mood: diffuse tropical daylight, clear visibility, careful hopeful scientific work rather than staged advertising
Color palette: Caribbean cyan-blue water, weathered gray-beige limestone, golden-tan living coral, cream-white growth tips and epoxy, muted blue dive gear
Materials/textures: porous limestone hardbottom, small rough marine epoxy pads, continuous living coral tissue over fine skeletal corallites, tiny inconspicuous cream polyps, realistic gloves and scuba equipment
Constraints: exact 1536x1024 output; only one diver; exactly five small staghorn coral outplants in the main array including the one being attached; fragments are fixed on hard rock and remain visibly above the substrate; subtle blank tags only; no readable text, no labels, no logos, no watermark
Avoid: Acropora palmata or elkhorn coral; broad flattened fan branches; neon blue, purple, green, or pink Indo-Pacific Acropora colors; giant flower-like polyps; long spikes; fused coral lattice; perfect bilateral or Christmas-tree symmetry; burying fragments in sand; plant roots; gardening pose; pouring concrete; huge epoxy blobs; drilling through living coral; breaking a wild colony; touching coral with bare hands; many tools; crowded team; aquarium; branded clothing; readable tag numbers; branching fragments lying loose; fragments touching each other; bleaching across whole branches; diseased lesions; extra coral species dominating
```
