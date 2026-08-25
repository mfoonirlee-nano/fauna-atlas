# Tibetan antelope image set

Codex's built-in image generation tool created these six original project images on 2026-08-25 for the complete Fauna Atlas *Pantholops hodgsonii* profile. The set covers adult-male morphology, alpine desert-steppe habitat, female foraging, female-calf migration and non-invasive observation. Each image is a generic scientific reconstruction, not an occurrence record, voucher image, population count, migration-route record or record of a named monitoring project.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/tibetan-antelope/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/tibetan-antelope/*.png` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-high-plateau-male-portrait-source.png` | `01-high-plateau-male-portrait.webp` | One complete adult male stands in the right third of open dry plateau, leaving broad calm space on the left |
| 02 | `02-male-horns-and-winter-coat-source.png` | `02-male-horns-and-winter-coat.webp` | One complete adult male walks across patchy shallow snow, showing the ringed horns, dark face, winter coat and short tail |
| 03 | `03-alpine-desert-steppe-habitat-source.png` | `03-alpine-desert-steppe-habitat.webp` | One small adult male stands in the middle-right of a habitat-dominant alpine desert-steppe and shallow-stream landscape |
| 04 | `04-female-alpine-sedge-foraging-source.png` | `04-female-alpine-sedge-foraging.webp` | One hornless adult female lowers her muzzle into short alpine sedge in an open meadow-steppe |
| 05 | `05-female-and-calf-migration-source.png` | `05-female-and-calf-migration.webp` | Exactly one hornless adult female and one hornless current-year calf walk together through an open plateau river corridor |
| 06 | `06-noninvasive-plateau-monitoring-source.png` | `06-noninvasive-plateau-monitoring.webp` | Exactly two observers use one spotting scope and one clipboard while one adult male remains distant on the right |

## Evidence boundaries

- The set fixes the visible species anchor at the combination of a compact medium-sized bovid body, long fine legs, short pointed ears, paired rounded nasal swellings and a short same-colour tail. A generated image cannot establish wild provenance, age, elevation, season or identity by itself.
- Only males carry the pair of slender black horns. Frames 01, 02, 03 and 06 show males with near-upright ringed horns. Frame 04 shows one hornless adult female. Frame 05 shows one hornless adult female and one hornless current-year calf.
- The final files have no distinct white rump patch. The pale belly and inner-leg surfaces remain visible, while the rump continues the fawn to gray-buff dorsal coat.
- The 13–14 cm tail stays short, matches the rump coat and ends without a dark tuft. Distance or body angle makes the tail subtle in some frames; the images do not support tail measurement.
- Frame 01 illustrates the adult-male field marks and a responsive cover composition. It does not prove rutting condition, exact coat timing or a named plateau locality.
- Frame 02 illustrates an adult male in shallow patchy snow. The image does not measure horn length, body size, temperature, speed or winter survival.
- Frame 03 keeps one male secondary to a broad alpine desert-steppe landscape. One reconstruction cannot represent the full 3,250–5,500 m elevational range or every habitat used by the species.
- Frame 04 records visible contact between one female's muzzle and low sedge. It does not identify a plant species, measure intake or define the whole diet.
- Frame 05 illustrates a female and calf moving in the same direction. The frame does not prove parentage, route, distance, departure date, destination or universal migration behaviour.
- Frame 06 reconstructs remote visual observation. It contains no collar, handling, weapon, trap, drone, vehicle, coordinate or readable field note, and it reveals no current animal location or patrol practice.

## Shared accuracy constraints

The accepted final prompt specifications use this common morphology and habitat anchor:

~~~text
Depict Pantholops hodgsonii as a compact medium-sized high-plateau bovid with a sturdy trunk, moderately short neck, long fine legs, coherent cloven hooves, dense fawn to gray-buff coat, pale cream belly and inner legs, short slightly pointed ears with pale backs, a short antelope muzzle and paired rounded swellings beside the nostrils. Keep the swellings compact; never turn them into the hanging proboscis of a saiga.

Adult males alone carry exactly two slender black horns. Both horns rise near-vertically in a narrow lyre-like pair, show strong basal rings and only gentle waviness; they never branch, spiral, curl like a ram, sweep backward like an ibex or spread wide like an African gazelle. Adult females and current-year calves have no horns or horn buds.

Continue the fawn or gray-buff dorsal coat across the rump without a distinct white rump patch. Preserve only the naturally pale belly and inner-leg surfaces. Attach one short 13–14 cm tail directly to the rump; it matches the adjacent coat and ends without a black tuft, brush, deer flag or long dangling extension.

Use a treeless or nearly treeless Qinghai-Tibetan Plateau setting with sparse low sedges, grasses, dwarf plants, gravel, shallow water or patchy snow as the scene requires. Keep the terrain broad, open and flat to gently rolling. Avoid African savanna, acacia trees, lush flower meadow, dense forest, steep goat cliffs, domestic stock, exact-location markers, malformed joints, fused hooves, missing legs, extra legs, duplicated horns, text, logos and watermarks.
~~~

## Accepted final prompt specifications

These specifications reconstruct the requests that match the accepted final pixels and the research constraints. They document the reproducible target for each asset; they are not verbatim transcripts of the original image-generation calls.

### 01 · High-plateau male portrait

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tibetan antelope species-detail cover, exact 1536 × 1024 horizontal 3:2 website asset
Primary request: Create a brand-new original natural-history photograph of exactly one complete adult male Tibetan antelope (Pantholops hodgsonii) standing alert on an open high plateau.
Scene/backdrop: Generalized dry Qinghai-Tibetan alpine steppe with sparse straw-coloured sedges and grasses, stony soil, broad layered brown-gray ridges and small distant traces of snow. No named landmark, road, fence, building or human trace.
Subject: One mature male in a calm left-facing three-quarter stance. Show a compact sturdy body, moderately short neck, long fine legs, four coherent cloven hooves, dense gray-fawn coat, pale cream belly and inner legs, dark facial mask, dark lower forelegs, short pointed pale-backed ears and compact paired nasal swellings. Show exactly two slender near-upright black horns, narrowly spaced, strongly ringed at the base and gently wavy. Continue gray-fawn coat across the rump with no white rump patch. Add one short same-colour untufted tail attached to the rump.
Style/medium: Original photorealistic professional wildlife photography, restrained natural-history publication colour, realistic dense fur, horn rings, dry plants and high-altitude atmospheric depth.
Composition/framing: Eye-level medium-wide horizontal portrait. Place the complete male in the right third near x=0.68, y=0.57. Keep all four hooves, tail, ears and both horn tips inside generous margins. Reserve the left half for quiet plateau and responsive page copy.
Lighting/mood: Clear cool high-altitude morning light, calm vigilance, neutral blue-gray air and restrained earth tones.
Constraints: Exactly one animal; one head; two ears; two horns; four legs; four cloven hooves; one short tail; no other wildlife; no text, label, logo, signature, border or watermark.
Avoid: white rump patch, black tail tuft, long deer tail, horns wider than the head-and-body silhouette, female body with horns, saiga hanging nose, sheep fleece, goat beard, ram curls, ibex horns, antlers, extra anatomy, zoo staging, fantasy, illustration, CGI, oversaturation or glossy stock photography.
~~~

### 02 · Male horns and winter coat

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tibetan antelope male-morphology gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2
Primary request: Create a brand-new original side-view natural-history photograph of exactly one complete adult male Tibetan antelope (Pantholops hodgsonii) walking across shallow patchy snow in open alpine steppe.
Scene/backdrop: Generalized high plateau in early winter, with thin wind-scoured snow between dry sedges and gravel, a soft gray-brown low ridge and no tree, structure, track or identifiable landmark.
Subject/action: One adult male walks left in a natural measured gait. Keep the full body visible and all four legs individually traceable. Show dense pale gray-buff winter coat, pale belly, near-black face, dark foreleg fronts, short pointed ears, compact paired nasal swellings and exactly two long narrow black horns rising almost vertically with visible basal rings and gentle outward curves near their tips. The rump remains gray-buff without a white patch. The single short tail matches the rear coat and has no dark tuft.
Style/medium: Original photorealistic professional wildlife field photography, realistic cold-weather fur, horn texture, shallow snow and restrained museum-publication processing.
Composition/framing: Horizontal medium-wide side profile at animal height. Keep the male near the centre, with every hoof and both horn tips inside frame and enough open snow-steppe around the silhouette.
Lighting/mood: Soft overcast winter daylight, quiet motion, cool neutral colour without blizzard drama.
Constraints: Exactly one adult male and no other animal; exactly two horns; four coherent legs and cloven hooves; one short same-colour tail; no text, logo, watermark, fence, road, building, vehicle, collar or tag.
Avoid: distinct white rump, black tail brush, long tail, hornless male, horned female, branched antlers, spiral or ram horns, broad gazelle horns, saiga proboscis, deep snow sprint, malformed gait, hidden or duplicated limbs, CGI, illustration or oversaturation.
~~~

### 03 · Alpine desert-steppe habitat

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tibetan antelope habitat gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2
Primary request: Create a habitat-dominant conservation landscape showing the broad alpine desert-steppe used by Tibetan antelope, with exactly one small but identifiable adult male Pantholops hodgsonii in the middle-right.
Scene/backdrop: One continuous treeless high-plateau basin with sparse straw and gray-green vegetation, gravelly open ground, a shallow braided meltwater channel, broad gentle hills and distant snow-dusted ridges beneath a pale sky. Habitat fills more than 90 percent of the image. Do not reproduce a named site or recognizable infrastructure.
Animal: One small complete adult male near x=0.71, y=0.58. Keep the compact gray-fawn body, dark face, four fine legs, short pointed ears, paired nasal swellings and two narrow near-upright ringed black horns readable at environmental scale. Keep the rump fawn-gray and the tail short, same-colour and untufted.
Style/medium: Original photorealistic wide conservation-landscape photography, realistic dry ground, shallow water, distant atmosphere and restrained natural-history colour.
Composition/framing: Exact horizontal 3:2 establishing view with deep continuity from foreground stream to distant ridges. The lone male remains secondary to the habitat and fully inside a clean patch of open ground.
Lighting/mood: Thin clear high-altitude daylight, spacious, cold and observational.
Constraints: Exactly one animal and zero people; no second silhouette, herd, livestock, road, rail line, fence, building, sign, map, coordinates, text, logo or watermark.
Avoid: white rump patch, black tail tuft, hornless adult male, horns on any hidden second animal, saiga nose, African savanna, lush wetland, forest, cliff-goat staging, giant foreground portrait, stitched panorama, fantasy, CGI, illustration or oversaturation.
~~~

### 04 · Female alpine-sedge foraging

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tibetan antelope feeding gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2
Primary request: Create a brand-new original natural-history photograph of exactly one complete adult female Tibetan antelope (Pantholops hodgsonii) grazing low alpine sedge.
Scene/backdrop: Generalized open high-plateau meadow-steppe with short green-gray sedges, scattered stones, shallow wet rills and broad dry rounded hills. The vegetation stays low and sparse; no flowers, crops, trees, fence or exact-location cue.
Subject/action: One hornless adult female lowers her muzzle into attached sedge while all four legs and cloven hooves remain coherent. Show a smaller, finer build than an adult male, dense warm fawn coat, pale cream belly and inner legs, short pointed pale-backed ears, a short muzzle and subtle paired nasal swellings. Do not add horns, horn buds, a dark male face or black male leg stripes. Continue the fawn dorsal coat across the rump. Attach one short fawn untufted tail with no white flag or dark brush.
Style/medium: Original photorealistic professional wildlife feeding photography, realistic fur and vegetation, restrained scientific-publication colour and natural depth of field.
Composition/framing: Horizontal medium environmental view. Keep the complete female around an overall focal point of x=0.62, y=0.57, with her muzzle-to-sedge contact readable and enough plateau context around the body.
Lighting/mood: Clean soft late-morning high-altitude light, calm feeding and neutral earth-green colour.
Constraints: Exactly one hornless adult female; four legs; four cloven hooves; one short same-colour tail; no other animal or person; no text, logo, signature, border or watermark.
Avoid: any horn or horn bud, distinct white rump, black tail tuft, long deer tail, male black mask, saiga proboscis, sheep fleece, lush pasture, bouquet-like food, artificial feeding, malformed hooves, duplicated legs, zoo, CGI, illustration or oversaturation.
~~~

### 05 · Female and calf migration

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tibetan antelope female-calf movement gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2
Primary request: Create a brand-new original wildlife photograph of exactly one adult female Tibetan antelope (Pantholops hodgsonii) and exactly one current-year calf walking together through an open high-plateau river corridor.
Scene/backdrop: Generalized Qinghai-Tibetan alpine desert-steppe with sparse cushion plants and sedges, gravel, one narrow calm river line, broad tawny flats and distant layered snow-dusted mountains. Do not include a named route, calving ground, landmark or infrastructure.
Subjects/action: Exactly two separate animals travel left in the same calm direction. The adult female leads and the smaller long-legged current-year calf follows with open space between their bodies. Both are completely hornless, with fawn coats, pale bellies and inner legs, short pointed ears, compact muzzles, paired nasal swellings and natural cloven hooves. Give each animal one short same-colour tail without a tuft. Continue fawn coat across both rumps without a discrete white patch. Keep all eight legs readable and do not imply panic, pursuit or an adult male family guard.
Style/medium: Original photorealistic professional wildlife movement photography, restrained documentary processing, realistic fur, stones, river and atmospheric mountain depth.
Composition/framing: Exact horizontal 3:2 medium-wide environmental frame. Keep both complete animals separated across the lower-middle near x=0.50, y=0.58, with the river and open plateau establishing movement through a connected landscape.
Lighting/mood: Clear cool daylight, steady purposeful walking and no disaster tone.
Constraints: Exactly one adult female and one calf; zero horns; two complete tails; eight coherent legs and cloven hooves; no third animal, predator, person, vehicle, collar, tag, fence, sign, text, logo or watermark.
Avoid: horned female or calf, white rump patches, black tail tufts, long tails, twins, nursing, human-like family pose, stampede, dust cloud, chase, exact migration marker, African plain, CGI, illustration or oversaturation.
~~~

### 06 · Non-invasive plateau monitoring

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Tibetan antelope non-invasive monitoring gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2
Primary request: Create a brand-new original field-documentary photograph of exactly two wildlife observers conducting remote visual monitoring of exactly one distant adult male Tibetan antelope (Pantholops hodgsonii).
Scene/backdrop: Generalized treeless Qinghai-Tibetan alpine steppe with sparse dry vegetation, gravel and layered low mountain ridges under a pale overcast sky. No recognizable reserve, route, patrol post, coordinate, road or settlement.
People and equipment: Exactly two adults kneel together in the left foreground wearing plain unbranded cold-weather field clothing. One looks through exactly one spotting scope mounted on one tripod. The other records on exactly one plain clipboard with no readable writing. They remain far from the animal and carry no weapon, trap, drone, bait, capture gear or tracking receiver.
Animal: Exactly one small adult male stands on open ground in the far right middle distance. Show two narrow near-upright black horns, a dark face, gray-fawn body, four coherent legs and a short same-colour untufted tail. The distant rump has no distinct white patch. The animal wears no collar, ear tag or marker.
Style/medium: Original photorealistic professional conservation field photography, credible distance and perspective, restrained documentary colour.
Composition/framing: Exact horizontal 3:2 wide frame. Keep both observers and their equipment together on the left and the lone male clearly separated on the far right. Use a planned overall focal point near x=0.52, y=0.62 so the relationship survives responsive cropping.
Lighting/mood: Soft cold high-altitude daylight, patient observation and no enforcement drama.
Constraints: Exactly two people, one spotting scope, one tripod, one clipboard and one adult male; no other people, animals or equipment; no readable text, brand, badge, map, coordinate, logo or watermark.
Avoid: close approach, handling, darting, weapon, patrol tactics, tourist selfie, vehicle, drone, collar, tag, second animal, white rump patch, black tail tuft, malformed distant anatomy, fantasy, CGI, illustration or oversaturation.
~~~

## Rump and tail correction record

The first-pass prompt set mistakenly specified a white rump. Before acceptance, the image generator received a separate `precise-object-edit` instruction for each of the six frames. Each pass changed only the rump and the attached 13–14 cm tail, replacing the discrete white field mark with fawn or gray-buff coat continuous with the back and removing any dark terminal tuft. The edits retained the pale belly and inner legs, subject count, sex, horns, pose, habitat, lighting, framing and 1536 × 1024 dimensions.

The repository does not retain a verbatim transcript of those tool calls. This reconstructed edit specification records the accepted operation:

~~~text
Use case: precise-object-edit
Input: Image 1 is the target Fauna Atlas Tibetan antelope source frame.
Primary request: Correct only the rump-colour and tail anatomy of every visible Tibetan antelope. Remove the distinct white rump patch and replace it with fawn to gray-buff fur that continues naturally from the adjacent dorsal and flank coat. Preserve the naturally pale cream belly and inner-leg surfaces.
Tail correction: Keep exactly one short 13–14 cm tail attached at the natural tail base of each animal. Match the tail to the adjacent rump coat and end it without a black tuft, brush, white deer flag, long hanging extension, fork or duplicated tail.
Sex and horn boundary: Preserve two narrow upright ringed black horns on each adult male. Preserve complete hornlessness on every adult female and current-year calf.
Preservation: Keep the existing subject count, identities, anatomy outside the target region, pose, gaze, scale, ground contact, lighting, colour grade, background, camera perspective, framing and exact 1536 × 1024 dimensions unchanged. Add no text, logo, watermark, person, animal or object.
~~~

| Frame | Correction target | Preserved identity and scene |
| --- | --- | --- |
| 01 | Adult male rump and one short tail | One right-third male, two upright ringed horns, dry plateau and left negative space |
| 02 | Adult male rump and one short tail | One walking winter-coat male, two upright ringed horns and patchy shallow snow |
| 03 | Distant adult male rump and one short tail | One small habitat-scale male, open desert-steppe and shallow stream |
| 04 | Adult female rump and one short tail | One grazing hornless female and low alpine sedge |
| 05 | Adult female and calf rumps and two short tails | Exactly two hornless animals walking through the plateau river corridor |
| 06 | Distant adult male rump and one short tail | Two observers, one spotting scope, one clipboard and one distant horned male |

## Planned focal points

| No. | Focal point | Reason |
| --- | --- | --- |
| 01 | `{ x: 0.68, y: 0.57 }` | Holds the male's head, horns and torso while preserving left-side cover space |
| 02 | `{ x: 0.49, y: 0.53 }` | Centers the full walking side profile |
| 03 | `{ x: 0.71, y: 0.58 }` | Tracks the small male without turning the habitat frame into a portrait |
| 04 | `{ x: 0.62, y: 0.57 }` | Keeps the female and muzzle-to-sedge contact together |
| 05 | `{ x: 0.50, y: 0.58 }` | Balances the separated female and calf |
| 06 | `{ x: 0.52, y: 0.62 }` | Balances the observers on the left with the distant male on the right |

## Static validation

- All six compressed source files decode as opaque 1536 × 1024, 8-bit indexed-colour sRGB PNG files.
- All six runtime files decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files without alpha or animation.
- Source and runtime basenames form six one-to-one pairs. Static source/WebP comparison confirmed the same accepted composition in each pair.
- Runtime files use `cwebp -q 82 -m 6 -mt` after scoped TinyPNG source compression.
- Original-resolution inspection found exactly one adult male in frames 01, 02 and 03; exactly one hornless adult female in frame 04; exactly one hornless adult female and one hornless calf in frame 05; and exactly two observers with one distant adult male in frame 06.
- Every adult male has one pair of narrow upright ringed horns. The female and calf have no horns.
- No final frame contains a distinct white rump patch. Visible tails are short, same-colour and untufted; pale colouring stays confined to the belly and inner-leg region.
- All visible animals retain coherent bodies, four attached legs and cloven hooves. Distant scale limits fine hoof inspection in frames 03 and 06, so those images do not serve as morphology plates.
- Static inspection found no readable text, logo, watermark, collar, tag, handling, capture gear, weapon, vehicle, fence, tourist staging or sensitive location marker.
- Verification used original-resolution static inspection, `file`, ImageMagick `identify` and source/WebP comparison. It used no GUI or headless browser.
