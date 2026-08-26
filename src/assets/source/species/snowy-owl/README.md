# Snowy Owl image set

OpenAI imagegen created these six original project images on 2026-08-26 for the Fauna Atlas *Bubo scandiacus* profile. The images reconstruct representative morphology, habitat, hunting, nesting and field-observation scenes. They do not document a named owl, nest, prey encounter, survey site, route or field team.

- Generation mode: OpenAI imagegen, `photorealistic-natural`
- Research brief: [`docs/research/snowy-owl-profile.md`](../../../../../docs/research/snowy-owl-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/snowy-owl/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: source PNGs use RGB color without alpha; runtime files use opaque lossy VP8 WebP
- Source compression: `npm run compress -- src/assets/source/species/snowy-owl/*.png`
- Runtime conversion: `npm run convert:webp -- src/assets/source/species/snowy-owl/*-source.png`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-arctic-tundra-portrait-source.png` | `01-arctic-tundra-portrait.webp` | One complete adult female stands on the right side of an open summer-tundra rise; the round head, yellow eyes, small black bill, dense brown barring, feathered legs and left-side cover-copy space remain visible. |
| 02 | `02-adult-flight-field-marks-source.png` | `02-adult-flight-field-marks.webp` | One complete pale adult male glides above open snow; both broad wings, the rounded head, yellow eyes and complete short tail remain inside the frame. |
| 03 | `03-treeless-tundra-habitat-source.png` | `03-treeless-tundra-habitat.webp` | Low vegetation, stones, shallow pools and open sky dominate a treeless summer-tundra frame; one small complete barred owl perches on a raised middle-right hummock. |
| 04 | `04-daylight-lemming-hunt-source.png` | `04-daylight-lemming-hunt.webp` | One complete barred adult female approaches one healthy brown lemming in low flight during daylight; more than one owl body length separates them, with no contact, injury or blood. |
| 05 | `05-ground-scrape-and-eggs-source.png` | `05-ground-scrape-and-eggs.webp` | One complete adult female stands beside one bare shallow ground scrape containing exactly five separate white eggs; no sticks, chick or second owl appears. |
| 06 | `06-distance-winter-monitoring-source.png` | `06-distance-winter-monitoring.webp` | Two small observers use one tripod-mounted scope and one notebook across a broad winter-dune buffer from one perched owl; no approach, handling, bait, band or transmitter appears. |

## Scientific and editorial boundaries

- The morphology anchor is the Snowy Owl, *Bubo scandiacus*: a large, bulky owl with a smoothly rounded head, yellow eyes, a small black hooked bill partly hidden by white facial feathers, broad wings, a short tail, and dense feathering across the legs and toes.
- Adult males tend to become whiter with age. Adult females retain more dark bars, but intermediate plumage cannot establish sex or age from one view. Frames 01, 04 and 05 use strongly barred adult females; frame 02 uses a pale adult male.
- Snowy Owls lack the prominent ear tufts of a Great Horned Owl. A heart-shaped facial disc, bare legs, long pointed falcon wings or blue eyes would conflict with this profile.
- Frame 03 represents a generalized summer breeding landscape. Snowy Owl tundra includes brown-green vegetation, bare soil, stones and wetlands; the frame does not identify a nest site, occurrence or habitat threshold.
- Frame 04 reconstructs one daylight approach to one lemming. Snowy Owls hunt under continuous Arctic summer daylight and at other times of day. The image supplies no capture result, feeding rate or year-round diet claim.
- Frame 05 shows one plausible five-egg clutch within the documented variable range. It establishes no average clutch, hatching sequence, parentage or breeding outcome.
- Frame 06 illustrates low-disturbance winter observation. It supplies no individual identity, movement record, abundance estimate or population trend.
- The six scenes contain no readable text, logo, watermark, border, collage, map, data graphic, falconry equipment or staged handling.

## Final generation prompts

Each accepted frame came from an independent OpenAI imagegen call without an input image.

### 01 · Arctic tundra portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Snowy Owl cover image and featured editorial card, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB original project asset
Primary request: Create a brand-new original natural-history photograph of exactly one healthy wild adult female Snowy Owl, Bubo scandiacus, standing on a low rise in open Arctic summer tundra.
Scene/backdrop: A generalized circumpolar tundra plain with low brown-green sedges, moss, lichen, scattered rounded stones, one distant shallow pool and broad clouded sky. No named site, landmark, road, building, fence, tree, snow mountain, glacier, person, nest, prey or other animal.
Subject and morphology: One complete large bulky adult female Snowy Owl with a smoothly rounded head and no visible ear tufts; two vivid natural yellow eyes; one small black hooked bill partly hidden by soft white facial feathers; white ground plumage with dense irregular dark brown horizontal bars across crown, chest, flanks, folded wings and tail; exactly two folded wings; one short proportionate tail; two sturdy legs and both feet covered by dense white feathers down to the toes; dark curved talon tips visible without exaggeration. Keep the barring organic and asymmetric rather than a repeated geometric pattern.
Composition/framing: Eye-level medium-wide field portrait. Place the complete owl on the right around x=0.70, occupying about 66 percent of frame height. Preserve the left 40 percent as quiet tundra, water and sky for page copy. Keep crown, bill, folded wing tips, tail, both legs, both feet and talons inside frame.
Lighting/mood: Soft broken-cloud Arctic daylight, restrained brown, olive, stone-gray and cool-blue color, detailed feather and tundra texture, calm alert posture, museum-publication wildlife photography.
Species exclusions: Bubo scandiacus, not Great Horned Owl, Eurasian Eagle-Owl, Barn Owl, Short-eared Owl, Gyrfalcon, hawk or eagle. Avoid long ear tufts, orange eyes, blue eyes, heart-shaped facial disc, narrow falcon wings, exposed scaly tarsi, pure featureless white plumage and juvenile down.
Evidence boundary: A representative adult female and generalized summer tundra reconstruction. It identifies no subspecies, individual, exact place, season date, nest territory or occurrence record.
Constraints: EXACTLY ONE BIRD TOTAL; one head, one bill, two eyes, two folded wings, two feathered legs, two feet and one tail; no clipped anatomy, duplicate limb, extra owl, reflection bird, prey, carcass, egg, chick, band, transmitter, falconry gear, bait, readable text, logo, signature, border, collage, transparency or watermark. Photorealistic field photography, free of CGI, illustration, fantasy, oversaturation and stock-photo gloss.
```

### 02 · Adult flight field marks

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Snowy Owl flight-identification gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB original project asset
Primary request: Create a brand-new original wildlife photograph of exactly one healthy wild mature adult male Snowy Owl, Bubo scandiacus, making a low level glide above an open snow-covered plain.
Scene/backdrop: A generalized windswept winter tundra or northern coastal plain with softly textured snow, a low blurred ridge and pale blue-gray sky. No named place, tree, forest, building, pole, road, vehicle, person, prey or other animal.
Subject and morphology: One complete large adult male Snowy Owl with mostly white plumage and a small number of restrained irregular brown marks on the crown, upper wings and underside; smoothly rounded head without visible ear tufts; two natural yellow eyes; one small black bill partly hidden by white facial feathers; exactly two long broad rounded wings; one short complete tail; feathered legs and feet tucked beneath the body. Preserve coherent primary feathers, shoulder joints and left-right wing attachment.
Flight posture: A shallow controlled glide close to the ground, body level and head facing the direction of travel. Show no dive, strike, hover, stalled posture or prey contact.
Composition/framing: Side-three-quarter telephoto view with the owl near the center and moving toward the left. Keep the complete head, both wing tips, body and tail inside the central crop-safe area with open air ahead. The owl occupies about 42 percent of frame height.
Lighting/mood: Clear diffuse winter daylight, restrained white and blue-gray palette, readable feather edges and natural atmospheric depth.
Species exclusions: Bubo scandiacus, not Gyrfalcon, Great Horned Owl, Barn Owl, Short-eared Owl, gull or eagle. Avoid prominent ear tufts, heart-shaped face, narrow pointed wings, forked tail, long bare legs, blue eyes, dense female-like body barring and pure blank silhouette without feather detail.
Evidence boundary: The frame illustrates one adult-male plumage example and one glide phase. It does not define the plumage of every male, determine exact age or document measured speed.
Constraints: EXACTLY ONE BIRD TOTAL; no prey, second bird, flock, ground contact, blood, loose feathers, duplicate wing, broken primary, clipped tail, band, transmitter, text, arrow, logo, signature, border, collage, transparency or watermark. Photorealistic wildlife photography, free of CGI, illustration, fantasy and motion-diagram styling.
```

### 03 · Treeless tundra habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Snowy Owl habitat gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB original project asset
Primary request: Create a brand-new original wide environmental photograph of generalized Snowy Owl breeding habitat, with exactly one small complete Snowy Owl as a secondary subject.
Scene/backdrop: Expansive treeless Arctic summer tundra with low sedges, moss, lichen, dwarf ground plants, scattered rocks, gentle hummocks, shallow freshwater pools and a distant low rolling horizon. Brown-green land, exposed soil and water remain visible; snow is absent apart from any tiny distant remnant. No named reserve, map location, road, house, fence, utility line, tall shrub, tree or mountain tourism landmark.
Bird and morphology: Exactly one complete moderately barred Snowy Owl perches on a slightly raised middle-right hummock. Show a large-bodied owl at environmental scale with a round untufted head, yellow eyes, small partly hidden black bill, white plumage with irregular brown markings, two folded wings, one short tail and feather-covered legs and feet. Do not assign sex or age from the intermediate pattern.
Composition/framing: Wide eye-level establishing frame. Habitat carries at least 88 percent of visual attention. Place the owl around x=0.69 at 13 to 15 percent of frame height, separated from rocks and vegetation so the full silhouette remains readable. Keep the horizon in the upper third and connect the foreground hummock to pools and open tundra beyond.
Lighting/mood: Soft broken-cloud summer daylight, muted olive, ochre, gray and blue, realistic atmospheric depth, ordinary field conditions rather than spectacle.
Species exclusions: Bubo scandiacus, not Great Horned Owl, Short-eared Owl, Gyrfalcon, ptarmigan or white rock. Avoid ear tufts, dark facial disc, blue eyes, exposed legs, tree-perching posture and extra distant birds.
Evidence boundary: A generalized habitat reconstruction. It supplies no exact nesting site, occupancy record, density estimate, vegetation threshold or mapped range boundary.
Constraints: EXACTLY ONE BIRD TOTAL; no person, vehicle, building, livestock, prey, nest, egg, chick, second owl, other wildlife, text, map line, arrow, coordinate, logo, signature, border, collage, transparency or watermark. Photorealistic conservation landscape photography, free of CGI, illustration, fantasy, oversaturation and travel-ad gloss.
```

### 04 · Daylight lemming hunt

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Snowy Owl hunting gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB original project asset
Primary request: Create a brand-new original behavioral wildlife photograph of exactly one adult female Snowy Owl, Bubo scandiacus, making a low daylight approach toward exactly one healthy small brown lemming before contact.
Scene/backdrop: Open Arctic summer tundra with low moss, lichen, sedges, scattered stones and a soft distant wetland edge under a bright pale sky. No named site, snowstorm, darkness, tree, building, road, observer or other animal.
Owl morphology: One complete large barred adult female with a round untufted head, yellow eyes, small black bill partly hidden by white facial feathers, white plumage with dense irregular brown barring, two broad coherent wings, one complete short tail, and two legs and feet covered in white feathers. Both feet begin to lower but remain well away from the lemming.
Prey: Exactly one complete healthy small brown Arctic lemming stands on the lower-left tundra. Show one head, tiny rounded ears held close to the fur, a compact round body, four coherent feet and a very short natural tail. Do not add a vole, mouse, rabbit or second rodent.
Interaction: Keep more than one Snowy Owl body length of open tundra between the owl's feet and the lemming. The animals do not touch or overlap. Show no capture, wound, blood, detached fur or carcass.
Composition/framing: Medium-wide low field view. Place the lemming in the lower left and the owl in the upper right, with both animals complete and clear approach space between them. Keep both wing tips, tail and feet inside frame.
Lighting/mood: Bright diffuse Arctic summer daylight, natural wing motion, crisp owl feather detail and restrained documentary processing.
Species exclusions: The predator is Bubo scandiacus, not Great Horned Owl, Short-eared Owl, Gyrfalcon, hawk or eagle. Avoid prominent ear tufts, orange eyes, narrow pointed wings, bare legs, vertical eagle stoop and prey carried in the bill.
Evidence boundary: The scene reconstructs one plausible daylight approach to a key breeding-season prey. It establishes no contact, capture, feeding rate, diet exclusivity or witnessed field event.
Constraints: EXACTLY TWO ANIMALS TOTAL: one Snowy Owl and one lemming; no second owl, second rodent, distant bird, injury, blood, carcass, contact, duplicate wing, clipped anatomy, speed line, text, logo, signature, border, collage, transparency or watermark. Photorealistic natural-history photography, free of CGI, illustration, fantasy and staged feeding.
```

### 05 · Ground scrape and eggs

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Snowy Owl nesting gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB original project asset
Primary request: Create a brand-new original field-documentary photograph of exactly one adult female Snowy Owl, Bubo scandiacus, standing beside exactly one shallow ground scrape containing exactly five separate white eggs on an elevated Arctic tundra rise.
Scene/backdrop: A generalized open summer tundra mound with gravel, bare soil, low sparse plants, distant shallow water and a broad horizon. No named nest, reserve, landmark, tree, cliff, building, road, person or other animal.
Adult morphology: One complete strongly barred adult female with a bulky white body, irregular dark brown barring, smoothly rounded head without ear tufts, two yellow eyes, one small black hooked bill partly hidden by facial feathers, two folded broad wings, one short tail and two densely feathered legs and feet. The female stands to the right of the scrape without covering the eggs.
Scrape and eggs: Exactly one shallow bare depression scratched into gravel and soil. It contains exactly five separate plain white oval eggs with natural size variation and clean visible outlines. The scrape has zero sticks, twigs, woven grass, feather lining, moss lining, nest platform or artificial material.
Composition/framing: Medium-wide ground-level telephoto view. Place the full scrape and five eggs in the left foreground and the complete female in the right midground. Keep every egg, the owl's crown, folded wing tips, tail and feet inside frame. Preserve open tundra beyond the nest.
Lighting/mood: Soft overcast Arctic daylight, realistic soil, stone, eggshell and feather texture, quiet breeding behavior, restrained documentary color.
Species exclusions: Bubo scandiacus, not Great Horned Owl, Barn Owl, Short-eared Owl, Gyrfalcon or white domestic bird. Avoid ear tufts, heart-shaped face, orange eyes, bare legs, tree-cavity nesting and stick-platform nesting.
Evidence boundary: Five eggs show one plausible clutch within a variable range. The frame identifies no real nest, parent, laying sequence, average clutch, hatch result or population productivity.
Constraints: EXACTLY ONE BIRD, ONE SCRAPE AND FIVE EGGS TOTAL; no male, chick, broken shell, sixth egg, prey, food cache, predator, researcher, camera, band, transmitter, readable marker, text, logo, signature, border, collage, transparency or watermark. Photorealistic field photography, free of CGI, illustration, staged zoo nesting and surveillance-camera styling.
```

### 06 · Distance winter monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Snowy Owl conservation-observation gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB original project asset
Primary request: Create a brand-new original wide conservation photograph of exactly one wild Snowy Owl resting on a winter coastal-dune rise while exactly two field observers watch from a respectful distance.
Scene/backdrop: A generalized northern winter coastline with open pale dunes, tawny grass, patchy snow, a low distant shore and muted blue-gray sky. No named park, landmark, building, airport, runway, road, vehicle, utility pole, fence or crowd.
Owl: Exactly one complete moderately barred Snowy Owl perches calmly on a low rise at far right. Preserve the bulky body, round untufted head, yellow eyes, partly hidden small black bill, irregular brown-on-white barring, two folded wings, feathered legs and feet, and one complete short tail. Add no band, transmitter or harness.
Observers: Exactly two small adult field observers stand together in the far-left background, separated from the owl by a broad uninterrupted dune buffer. Both wear muted unbranded winter field clothing. Observer 1 looks through exactly one spotting scope on exactly one tripod. Observer 2 writes in exactly one small plain notebook or tablet with no readable screen. Neither person points, approaches, calls, feeds or photographs the owl.
Composition/framing: Wide eye-level environmental view. Habitat carries at least 78 percent of visual attention. Place the observers near x=0.17 and the owl near x=0.82, with the empty distance buffer clear. Keep both people, the full tripod and the entire owl inside frame.
Lighting/mood: Soft overcast winter daylight, restrained white, straw, gray and blue, realistic atmospheric depth, routine field observation without rescue drama.
Species exclusions: Bubo scandiacus, not Great Horned Owl, Short-eared Owl, Gyrfalcon, hawk, gull or domestic white owl. Avoid ear tufts, orange eyes, exposed tarsi, close human proximity and captive posture.
Evidence boundary: The scene illustrates low-disturbance observation. It identifies no real owl, observer, site, migration route, count, stay duration or population trend.
Constraints: EXACTLY ONE BIRD AND EXACTLY TWO PEOPLE TOTAL; exactly one spotting scope, one tripod and one notebook or tablet; no hidden person, tourist, photographer crowd, dog, other bird, bait, prey, handling, capture, drone, vehicle, band, transmitter, readable data, badge, brand, text, logo, signature, border, collage, transparency or watermark. Photorealistic conservation field photography, free of CGI, illustration, tourism advertising and advocacy-poster styling.
```

## Static and visual validation

- All six TinyPNG-compressed sources decode as opaque 1536 × 1024, 8-bit indexed-color RGB PNG files.
- All six runtime assets decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files. `file` identifies VP8 WebP data rather than renamed PNG data.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- TinyPNG produced six compressed source PNG files totaling 5,265,988 bytes. The project did not retain the pre-compression drafts, so this record does not claim an unverifiable source-reduction percentage.
- Runtime WebP sizes are 206,784; 37,008; 278,924; 226,666; 277,086; and 175,242 bytes in frame order, totaling 1,201,710 bytes. WebP conversion reduced the compressed-source total by 77.2 percent.
- Original-resolution inspection confirmed the accepted observations in the asset table. Checks covered owl, prey, egg and person counts; rounded heads, yellow eyes, feathered feet and broad wings; complete anatomy; cover-copy space; tundra context; hunt separation; the bare scrape; monitoring distance; and the absence of text or branding.
- Runtime inspection after conversion found no new cropping, extra animals, visible text, logos, watermarks, borders, malformed species substitutions or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
