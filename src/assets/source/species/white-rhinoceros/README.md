# White rhinoceros image set

Codex's built-in image generation produced these six original project images on 2026-08-23 for the Fauna Atlas White Rhinoceros profile. The frames reconstruct generalized southern African savanna settings. They do not document named animals, sites, surveys or events.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/white-rhinoceros/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-square-lipped-savanna-portrait-source.png` | `01-square-lipped-savanna-portrait.webp` | One adult in open short-grass savanna, placed right of center with broad left-side negative space and a readable square grazing lip |
| 02 | `02-square-lip-grazing-source.png` | `02-square-lip-grazing.webp` | One adult cropping attached short grass with its low-held head and broad square lip |
| 03 | `03-grassland-water-pan-habitat-source.png` | `03-grassland-water-pan-habitat.webp` | A habitat-dominant grassland, water-pan and wallow mosaic with one small distant adult |
| 04 | `04-mud-coating-after-wallow-source.png` | `04-mud-coating-after-wallow.webp` | One adult standing on four complete planted feet beside a shallow wallow with fresh mud coating its lower body |
| 05 | `05-cow-and-calf-source.png` | `05-cow-and-calf.webp` | Exactly one cow and one smaller calf walking together, each with four complete legs and a broad square muzzle |
| 06 | `06-distance-monitoring-source.png` | `06-distance-monitoring.webp` | Exactly two ecologists, one spotting scope and one distant adult separated by open savanna |

Frame 01 uses the first fresh generation plus two localized edits to the adult's muzzle and mouth. Frame 04 uses the second fresh generation and received no targeted edit. Frame 05 uses the first fresh generation plus one localized edit to the calf's head and muzzle. Frames 02, 03 and 06 use their first fresh generations without edits. The files and prompts below record only the accepted versions.

## Evidence boundaries

- The morphology follows the Southern White Rhinoceros, *Ceratotherium simum simum*: a massive barrel-shaped body, pronounced shoulder hump, long low-held head and broad square grazing lip. A generated image cannot establish an animal's identity, age, sex, subspecies, or whether a population is native or reintroduced.
- Frame 02 illustrates one plausible grazing action, with the square lip cropping ground-level grass. It does not measure intake, diet composition, feeding time or grassland condition.
- Frame 03 combines short-grass savanna, a natural water pan and a muddy wallow in one generalized landscape. The pan represents a drinking and wallowing resource for a terrestrial animal, not freshwater or aquatic habitat. The frame does not map a named reserve, current range boundary, water availability or habitat occupancy.
- Frame 04 shows fresh mud after a wallow. The image does not prove why the animal wallowed, how often it uses the site or whether mud changed its temperature, parasites or skin condition.
- Frame 05 shows one cow with one smaller calf and no nursing. Appearance alone cannot confirm kinship, calf age, lactation, birth interval or either animal's reproductive status; the pairing does not support a human-style family narrative.
- Frame 06 illustrates visual observation from a distance. One staged observation cannot yield population size, density, trend, home range or individual identity.
- Horn shape and size vary with age, wear, sex and individual history. None of the frames supports a horn measurement, demographic inference, health diagnosis, conservation-status classification or claim about poaching risk or conservation outcomes.

## Shared morphology anchor

The six prompts repeat or derive from this reconstruction anchor:

```text
Depict a Southern White Rhinoceros (Ceratotherium simum simum) with a massive barrel-shaped gray body, thick naturally folded skin, a pronounced muscular shoulder hump, a long heavy head carried low, a very broad blunt straight square grazing mouth, two correctly rooted midline keratin horns with the front horn longer than the rear horn, two small rounded ears, small eyes, exactly four sturdy legs ending in three-toed feet, and one short tail with a dark bristle tuft. Keep the animal calm and anatomically coherent. Avoid the pointed hooked prehensile lip of a black rhinoceros, Indian or Javan rhinoceros skin plates, Sumatran rhinoceros hair, missing or extra horns, extra or fused legs, cropped anatomy, text, logos and watermarks.
```

## Final prompts

### 01 · Square-lipped savanna portrait

The accepted base came from this first-generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas White Rhinoceros species-detail cover and featured editorial card, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically credible candid wildlife photograph of exactly one free-ranging adult Southern White Rhinoceros (Ceratotherium simum simum) standing calmly in open southern African short-grass savanna at soft dawn.
Scene/backdrop: Authentic lowveld or southern African savanna with short dry-green grass, sparse low shrubs, a few distant flat-canopied native trees and a broad hazy horizon. Generic wild habitat with no recognizable landmark. No zoo, enclosure, road, fence, building, vehicle, water trough, people, livestock, feed, signs or other animals.
Subject: Exactly one anatomically coherent adult white rhinoceros. Show a massive barrel-shaped gray body, thick naturally folded skin with realistic wrinkles and dried mud, a pronounced muscular shoulder hump supporting a long heavy head carried low, a very broad straight square grazing mouth, wide blunt muzzle, two correctly rooted midline keratin horns with the front horn longer than the rear horn, two small alert rounded ears, small eyes, exactly four sturdy three-toed legs, and one short tail with a dark bristle tuft. Calm side-to-three-quarter view facing left, closed mouth, no charge or aggression. The animal must read as a white or square-lipped rhinoceros, not a black rhinoceros.
Style/medium: Original photorealistic natural-history editorial wildlife photography, authentic long-lens field observation from a respectful distance, restrained museum-publication quality, realistic skin, horn, grass, dust and atmospheric depth; no commercial gloss.
Composition/framing: Exact horizontal 3:2 frame designed to survive a centered 16:9 crop. Place the complete rhinoceros in the right third around x=0.69, occupying about 44 percent of image width, facing into broad quiet negative space across the left half for website typography. Low eye-level camera. Keep both horn tips, all four feet, ears and tail fully inside the frame with generous breathing room.
Lighting/mood: Soft diffuse dawn with restrained warm side light, calm, spacious and dignified; natural shadows and exposure.
Color palette: Muted straw, dusty sage, warm gray skin, ochre soil and pale blue-gray sky.
Materials/textures: Real elephant-like folded rhinoceros skin, small scars, dried mud, worn keratin horns, individual grasses and light atmospheric grain.
Constraints: Exactly one rhinoceros total; unmistakable broad square lip, low head and shoulder hump of Ceratotherium simum; original composition; no text, labels, logo, signature, border or watermark.
Avoid: black rhinoceros with pointed hooked prehensile lip, Indian or Javan rhinoceros skin plates, Sumatran rhinoceros hair, missing or extra horn, fantasy giant horn, horn touching frame, dehorned animal, extra or fused legs, five legs, cropped feet, smiling or open mouth, charging pose, bloody injury, poaching scene, oxpecker or any other animal, zoo or safari-tour staging, CGI, illustration, painting, oversaturation, teal-orange grading or stock-photo gloss.
```

### 01 · First targeted square-lip correction

The accepted base received this edit and no other revision:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas White Rhinoceros cover image
Input images: Image 1: edit target, the generated white-rhinoceros savanna portrait
Primary request: Correct only the rhinoceros muzzle and mouth so it is unmistakably the broad square grazing lip of a Southern White Rhinoceros (Ceratotherium simum simum).
Anatomical correction: Replace the current narrow pointed or hooked-looking lip with a wide, blunt, straight-edged, squared-off muzzle. In left-facing side-to-three-quarter view, the mouth front should look broad and flattened like a short horizontal lawn-mower edge, with a wide upper lip and lower lip meeting in a calm closed straight line. Remove any central pointed projection, hooked prehensile tip, beak shape or pursed expression. Keep natural nostril placement and realistic gray folded skin.
Constraints: Change only the muzzle and mouth anatomy. Preserve the exact same single rhinoceros identity, head angle, two horns, ears, eye, shoulder hump, body, four legs, tail, scale, pose, composition, left-side negative space, savanna, lighting, color, image dimensions and photorealistic documentary style. Exactly one animal; no text, logo, border or watermark.
Avoid: black-rhinoceros pointed prehensile lip, smiling human-like mouth, open mouth, exposed teeth, added horn, altered horn length, altered body or background, CGI or illustration.
```

### 01 · Final square-lip refinement

The first correction still left the muzzle slightly narrow in profile. The accepted file received this second localized edit:

```text
Edit only the adult southern white rhinoceros's mouth and muzzle in the provided image. Make the grazing muzzle unmistakably species-correct: very broad from side to side, low and blunt, with a wide nearly straight horizontal front edge to both lips, a flat square-lipped profile suited to cropping grass. Remove any narrow, puckered, pointed, tapered, hooked, beak-like, or prehensile upper-lip shape. Keep the same individual, exact head pose and orientation, two horns, ears, eyes, neck hump, full body, all four planted legs and three-toed feet, grassland background, framing, camera, warm natural light, texture, and photorealistic documentary style unchanged. Do not add or remove any animal, limb, horn, vegetation feature, object, text, logo, or watermark. Output a single 3:2 landscape image at the same composition.
```

### 02 · Square-lip grazing

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas White Rhinoceros feeding gallery image 2 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically credible natural-history behavior photograph of exactly one free-ranging adult Southern White Rhinoceros (Ceratotherium simum simum) actively grazing short grass in southern African savanna.
Scene/backdrop: Open short-grass savanna with patchy dry and green native grasses, reddish soil, sparse distant shrubs and soft overcast morning light. Generic wild setting with no named landmark, people, roads, fences, vehicles, buildings, troughs, hay or other animals.
Subject/action: Exactly one complete adult white rhinoceros in clean left-facing side view with its long heavy head lowered naturally to the ground. Its broad blunt square grazing mouth makes contact with attached short grass like a wide cropping edge. Show the straight broad lip clearly, never a pointed or hooked prehensile upper lip. The animal has a massive barrel body, pronounced shoulder hump, folded gray skin with dried mud, two correctly rooted midline horns with the front longer, two rounded ears, small eye, exactly four coherent sturdy three-toed legs and a short tufted tail. It calmly crops vegetation; no uprooted sod, feed pile or open mouth.
Style/medium: Original photorealistic natural-history editorial wildlife photography, restrained museum-publication quality, realistic skin, worn keratin horns, grass and soil, natural depth and color.
Composition/framing: Horizontal 3:2 medium-wide field photograph safe for a centered 16:9 crop. Keep the entire rhinoceros, both horn tips, four feet, ears and tail inside the frame. Put the square-lip grazing action around x=0.38 y=0.65 and let the body extend rightward, occupying no more than 62 percent of frame width.
Constraints: Exactly one rhinoceros and no other animal; unmistakable white-rhinoceros square lip, low head and shoulder hump; no text, logo, signature, border or watermark.
Avoid: black-rhinoceros pointed hooked lip or browsing pose, Indian/Javan armor plates, Sumatran hair, missing or extra horn, extra/fused legs, crop through feet or horns, giant loose grass bundle, mouthful of hay, zoo feeding, aggression, blood, poaching, CGI, illustration, oversaturation or stock-photo gloss.
```

### 03 · Grassland and water-pan habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas White Rhinoceros habitat gallery image 3 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original habitat-dominant natural-history photograph of the open southern African grassland-savanna mosaic used by one wild Southern White Rhinoceros (Ceratotherium simum simum).
Scene/backdrop: A broad ecologically plausible lowveld mosaic of short native grass grazing lawns, taller straw grass patches, scattered low thorn scrub, a few distant flat-canopied trees, a shallow natural water pan and a small muddy wallow edge, with layered hazy hills far away. Generic habitat only, with no named landmark. No road, tire track, fence, building, lodge, vehicle, tourists, livestock, artificial trough, fire disaster or other animals.
Subject: Exactly one complete adult white rhinoceros deliberately small in the middle-right distance, calmly walking across continuous short grass near but not inside the water pan. Preserve a recognizable low long head, broad square muzzle, shoulder hump, two horns, four legs and short tail; natural gray skin. The animal serves as scale and remains secondary to the habitat.
Style/medium: Original photorealistic wide natural-history landscape photography, authentic remote field observation, restrained museum-publication quality, credible African vegetation, water, soil and atmospheric depth.
Composition/framing: Exact horizontal 3:2 wide establishing frame safe for centered 16:9 crop. Habitat occupies at least 88 percent of the frame. Place the small complete rhinoceros around x=0.70 y=0.61, surrounded by open ground and fully inside frame. Use foreground grass, middle-distance pan and distant trees for depth.
Lighting/mood: Soft high-cloud late-afternoon light, spacious, quiet and dry-season natural.
Color palette: Muted ochre, dusty sage, straw, warm gray and pale blue.
Constraints: Exactly one rhinoceros and zero other animals or people; original generic wild habitat; no text, labels, map symbols, logo, signature, border or watermark.
Avoid: close hero portrait, giant animal, black-rhinoceros hooked lip, dense rainforest, lush lawn, desert dunes, cultivated pasture, dramatic mountain, safari postcard, zoo, cropped animal, extra legs or horn, CGI, illustration, oversaturation or advertising gloss.
```

### 04 · Mud coating after a wallow

The accepted frame came from the second fresh generation with this prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas White Rhinoceros mud-coating gallery image 4 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly one adult Southern White Rhinoceros (Ceratotherium simum simum) standing calmly on firm ground at the edge of a shallow natural mud wallow immediately after a mud bath.
Scene/backdrop: A small shallow muddy depression in open southern African short-grass savanna. The wallow lies behind and beside the animal, with dark wet mud, a little still brown water and dry grass beyond. Generic wild site; no road, fence, vehicle, people, trough, rescue equipment, buildings or other animals.
Subject/action: Exactly one complete adult white rhinoceros in a stable clean side-to-three-quarter standing pose. All four sturdy legs are separate, correctly jointed and fully visible from shoulder or hip to three-toed feet; all four feet are planted on firm muddy ground and none is lifted, hidden behind another leg, submerged, cropped or replaced by a stump. A thin irregular coat of wet mud covers its lower flanks, belly and legs, with a few realistic drips; upper gray wrinkled skin remains visible. Show a long low-held head, very broad blunt straight square grazing lip, pronounced shoulder hump, two correctly rooted midline horns with the front longer, two rounded ears, small eye and one short tufted tail. Calm, uninjured, no struggle or splash.
Style/medium: Original photorealistic long-lens natural-history behavior photography, restrained museum-publication quality, realistic wet mud, folded skin, worn keratin horns, grass and natural depth.
Composition/framing: Exact horizontal 3:2 medium-wide environmental frame safe for centered 16:9 crop. Keep the whole animal, both horn tips, ears, all four complete feet and tail inside frame with open margin. Place the rhinoceros in the central safe area and include enough wallow beside it to explain the fresh mud coat.
Lighting/mood: Soft diffuse late-afternoon light, calm and grounded, natural exposure and color.
Constraints: Exactly one rhinoceros; four complete planted legs and feet; unmistakable white-rhinoceros square lip, low head and shoulder hump; no text, logo, signature, border or watermark.
Avoid: malformed, amputated, fused, duplicated or hidden legs; lifted hook-shaped limb; black-rhinoceros hooked lip; human-like wrinkled mouth; submerged, trapped or drowning animal; lying or rolling pose; charge, injury, blood, poaching, dramatic splash, elephant, hippopotamus, birds, zoo, CGI, illustration, oversaturation or stock-photo gloss.
```

### 05 · Cow and calf

The accepted base came from this first-generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas White Rhinoceros reproduction gallery image 5 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically credible natural-history photograph of exactly one adult female Southern White Rhinoceros (Ceratotherium simum simum) and exactly one dependent calf moving calmly together through open southern African short-grass savanna.
Scene/backdrop: A quiet generic savanna grazing lawn with mixed dry-green short grass, sparse low shrubs, a few distant flat-canopied trees and soft early-morning haze. No identifiable reserve, zoo, road, fence, building, vehicle, people, livestock, water trough, feed or other animals.
Subjects/action: Exactly two rhinoceroses total. The complete adult cow has a massive barrel body, pronounced shoulder hump, long low-held head, broad square grazing lip, two correctly rooted midline horns, rounded ears, four sturdy legs and short tufted tail. The complete young calf is about half her shoulder height, clearly juvenile, rounder and smoother-skinned, with a wide square muzzle and only a tiny front horn nub plus no developed rear horn. They walk in the same direction with a natural unsentimental spacing, close enough to show association but not touching, cuddling, nursing, carrying or posing at the camera. Each animal must have one coherent body and four correctly attached legs; do not overlap either head, torso or feet.
Style/medium: Original photorealistic long-lens wildlife documentary photography, restrained museum-publication quality, realistic skin, grass, horn and atmospheric depth.
Composition/framing: Exact horizontal 3:2 medium-wide environmental frame safe for centered 16:9 crop. Keep both animals complete and separate in the central safe area with every ear, horn, foot and tail inside frame. Adult occupies no more than 48 percent of frame width; calf is visibly smaller beside and slightly ahead of her, with open ground between silhouettes.
Lighting/mood: Soft diffuse dawn, calm and protective without sentimentality, natural color and shadows.
Constraints: Exactly one adult female and one calf, no third rhinoceros or other animal; both unmistakable white rhinoceroses with broad square lips; no text, logo, signature, border or watermark.
Avoid: black-rhinoceros hooked lips, adult-sized calf, two adults, giant calf horns, missing adult horn, fused or duplicated bodies, overlapping feet, extra legs, human-like embrace, nursing claim, charge, injury, poaching, oxpeckers, zoo, CGI, illustration, oversaturation or stock-photo gloss.
```

### 05 · Targeted calf head and muzzle correction

The accepted base received this edit and no other revision:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas White Rhinoceros cow-and-calf gallery image
Input images: Image 1: edit target, the existing Southern White Rhinoceros cow-and-calf photograph
Primary request: Make one localized anatomical correction to only the calf's head and muzzle so the young animal is unmistakably a white or square-lipped rhinoceros.
Anatomical correction: Lower and lengthen the calf's head slightly while keeping juvenile proportions. Widen the front of its muzzle from side to side and replace the current short round upturned snout with a broad blunt straight-edged square grazing lip. The closed mouth should form a calm flattened horizontal cropping edge with no pointed, hooked or pursed upper lip. Preserve its two small ears, tiny front horn bud, subtle rear horn bud, eye, neck attachment and natural smooth juvenile skin.
Constraints: Change only the calf's head and muzzle anatomy. Preserve the exact adult cow, adult horns, both bodies, all eight legs and feet, both tails, animal count, calf scale, spacing, walking poses, savanna, trees, lighting, colors, composition, 1536 x 1024 dimensions and photorealistic documentary style. Exactly one adult cow and exactly one calf; no text, logo, border or watermark.
Avoid: black-rhinoceros pointed prehensile lip, pig-like snout, adult-sized calf head, large calf horns, extra horn, open mouth, human smile, altered adult, fused bodies, extra limbs, CGI or illustration.
```

### 06 · Distance monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas White Rhinoceros conservation-monitoring gallery image 6 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically plausible field-documentary photograph of exactly two wildlife ecologists conducting non-invasive ground observation of exactly one distant free-ranging Southern White Rhinoceros (Ceratotherium simum simum) in a generic protected southern African savanna.
Scene/backdrop: Broad open short-grass savanna with patches of straw grass, sparse low thorn scrub, scattered distant native trees and a pale overcast horizon. No identifiable site, road, fence, lodge, vehicle, aircraft, water trough, tourists, livestock or other animals.
People and equipment: Exactly two adult field ecologists together in the far-left foreground-middle distance, wearing plain muted practical field clothes, broad sun hats and closed boots with no badge, logo or camouflage uniform. One calmly looks through binoculars; the other records observations on one small plain clipboard or rugged tablet. Exactly one compact tripod-mounted spotting scope stands beside them. No camera trap, drone, net, bait, food, weapon, firearm, dart, collar, crate or handling equipment.
Animal: Exactly one complete adult white rhinoceros far across broad open ground in the right middle distance, smaller than either person due to distance and physically separated from the team. Its low long head, broad square muzzle, shoulder hump, two horns, four legs and short tail remain readable. The rhinoceros stands calmly side-on and does not approach or look at the people.
Style/medium: Original photorealistic field-conservation documentary photography, practical remote observation with restrained museum-publication processing, realistic people, equipment, skin, grass and atmospheric depth.
Composition/framing: Exact horizontal 3:2 wide environmental frame safe for centered 16:9 crop. Group both people and the one spotting scope on the left, place the complete single rhinoceros on the right, and preserve a large uninterrupted buffer of empty savanna between them. Habitat dominates.
Lighting/mood: Soft early-morning overcast light, quiet methodical fieldwork, natural exposure.
Constraints: Exactly two people, exactly one spotting scope and exactly one rhinoceros; people and animal stay far apart; no readable text, brand, logo, signature, border or watermark.
Avoid: touching, feeding, capture, immobilization, dehorning, tagging, hunting, firearm, military pose, injured or dehorned animal, crowd, third person, second rhinoceros, safari vehicle, tourist photo, dramatic rescue, readable screen, extra human fingers or limbs, cropped animal, black-rhinoceros hooked lip, CGI, illustration, oversaturation or NGO advertising gloss.
```

## Static validation

- Static file inspection confirmed that all six compressed source files decode as 1536 × 1024, 8-bit sRGB PNG files.
- Static file inspection confirmed that all six runtime files decode as 1536 × 1024 sRGB WebP files; `file` identifies VP8 WebP data rather than renamed PNG data.
- Source and runtime basenames form six one-to-one pairs.
- The runtime files use `cwebp -q 82 -m 6 -mt` output after scoped TinyPNG source compression.
- Visual QA confirmed one square-lipped cover adult with left-side negative space; one grazing adult with its mouth at attached grass; one habitat-dominant water-pan frame with one distant adult; one mud-coated adult beside a wallow with four complete planted legs and feet; exactly one cow and one calf with eight connected complete legs and a corrected low broad calf muzzle; and exactly two ecologists, one spotting scope and one distant adult separated by open ground.
- Visual QA found no extra animals, text, logos, watermarks, zoo cues, capture, handling, feeding by people or poaching imagery.
- No GUI or headless browser was used for verification.
