# Peregrine Falcon image set

These six original project images were generated on 2026-08-26 with OpenAI's built-in imagegen tool for the Fauna Atlas *Falco peregrinus* profile. They reconstruct representative scenes and do not record named falcons, nests, hunts, migration routes, survey sites or field teams.

- Generation mode: `photorealistic-natural`
- Research brief: [`docs/research/peregrine-falcon-profile.md`](../../../../../docs/research/peregrine-falcon-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/peregrine-falcon/*.webp`
- Source and runtime dimensions: 1536 x 1024, horizontal 3:2
- Color and alpha: source PNGs use RGB color without alpha; runtime files are opaque VP8 WebP
- Source compression: `npm run compress -- <six source PNGs>`
- Runtime conversion: `npm run convert:webp -- <six source PNGs>`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-cliff-portrait-source.png` | `01-cliff-portrait.webp` | One complete adult stands on the right side of a coastal cliff ledge; the dark hood, broad malar marks, blue-gray back, barred underside, exposed yellow tarsi and cover-copy space remain visible. |
| 02 | `02-high-speed-stoop-source.png` | `02-high-speed-stoop.webp` | One complete adult holds a coherent streamlined stoop posture; its folded pointed wings and tail remain present, while the frame contains no prey or speed claim. |
| 03 | `03-urban-nest-ledge-source.png` | `03-urban-nest-ledge.webp` | One adult stands beside one gravel scrape containing exactly three mottled eggs; the scrape contains no sticks or woven nest material. |
| 04 | `04-aerial-bird-hunt-source.png` | `04-aerial-bird-hunt.webp` | One adult approaches one Rock Pigeon through open sky; both birds remain complete and separated, without contact, injury or blood. |
| 05 | `05-migration-coastline-source.png` | `05-migration-coastline.webp` | One complete adult crosses a wide coastline scene; no route mark, tracking device or second bird appears. |
| 06 | `06-cliff-monitoring-source.png` | `06-cliff-monitoring.webp` | Two observers use one tripod-mounted scope and one notebook across a ravine from one perched adult; no nest, handling or climbing gear appears. |

## Scientific and editorial boundaries

- Adults represent the Peregrine Falcon, *Falco peregrinus*: blue-gray upperparts, dark hood, broad black malar marks, pale horizontally barred underparts, yellow cere and exposed yellow tarsi. Geographic plumage variation prevents the images from establishing subspecies or sex.
- Frame 02 reconstructs one tucked-wing stoop phase. It supplies no measurement, record value, complete dive sequence or hunting result.
- Frame 03 shows one plausible urban gravel scrape and three eggs. Peregrines do not build a stick nest, and this scene does not establish a fixed clutch size or breeding outcome.
- Frame 04 shows one plausible aerial approach to one bird prey species. It does not prove contact, capture, diet exclusivity or success.
- Frame 05 represents autumn coastal movement. Some populations remain resident, so the image cannot establish a route, origin, destination or tracked individual.
- Frame 06 illustrates distance observation. It supplies no real location, nest record, abundance estimate or population trend.
- No frame contains falconry equipment, a leg band, transmitter, bait, readable text, a logo, watermark, border, collage, map or data graphic.

## Final generation prompts

Each base frame came from an independent built-in imagegen call without an input image.

### 01 · Cliff portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Peregrine Falcon cover image, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB project asset
Primary request: Create a brand-new original natural-history photograph of exactly one healthy wild adult Peregrine Falcon, Falco peregrinus, standing on a weathered cliff ledge.
Scene/backdrop: A generalized temperate sea-cliff setting with gray-brown rock, sparse lichen, distant muted water and a clouded sky. No named landmark, building, road, fence, person, prey, nest or other animal.
Subject and morphology: One complete adult Peregrine Falcon with a compact muscular falcon body; blue-gray back and folded upperwings; dark slate-gray head forming a hood; one broad blackish moustachial or malar stripe on each side of the face, with the far stripe partly hidden by perspective; pale cream cheek, throat and upper breast; fine dark horizontal barring across the lower breast, belly and flanks; one small blue-gray hooked bill with a dark tip; yellow cere and orbital skin; dark brown eyes; two exposed yellow scaly tarsi; two yellow feet with four coherent toes per foot and dark curved talons; one proportionate barred tail. The long pointed folded wings end near the tail.
Composition/framing: Eye-level medium-wide telephoto field photograph. Place the complete falcon in the right 55 percent near x=0.70, occupying about 58 percent of image height. Preserve the left 38 percent as quiet sky and distant coast for page copy. Keep crown, bill, folded wing tips, tail, both legs, both feet and every talon inside frame.
Lighting/mood: Soft coastal morning light, restrained blue-gray and stone colors, real feather and rock texture, alert calm posture, museum-publication field photography.
Species exclusions: Falco peregrinus, not Eurasian Hobby, Gyrfalcon, Common Kestrel, Saker Falcon, lanner, hawk or eagle. Avoid rufous back, rufous thighs or undertail, pale Arctic mottling, brown juvenile upperparts, vertical juvenile breast streaks, weak narrow face marks, hovering kestrel posture, broad fingered eagle wings and feathered tarsi.
Constraints: EXACTLY ONE BIRD TOTAL; one head, one bill, two folded wings, two legs, two feet and one tail; no clipped anatomy, duplicate limb, band, transmitter, falconry hood, glove, jesses, bait, open screaming bill, attack pose, text, logo, signature, border, collage, transparency or watermark. Photorealistic wildlife photography, free of CGI, illustration, painting, fantasy and stock-photo gloss.
```

### 02 · High-speed stoop

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Peregrine Falcon flight gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB project asset
Primary request: Create a brand-new original natural-history photograph of exactly one adult Peregrine Falcon, Falco peregrinus, in one coherent instant of a steep high-speed hunting stoop with no prey present.
Scene/backdrop: Open high-altitude air above a generalized rocky coastline, with a distant sea and cliff plane rendered through atmospheric haze. No named site, landmark, building, aircraft, person, prey or other bird.
Subject and morphology: One complete adult Peregrine Falcon descends head-first on a steep diagonal. The bird forms a streamlined teardrop posture: both long pointed wings remain present and fold tight against the sides, with paired leading edges and trailing primary tips visible; the tail narrows behind the body; both legs and yellow feet tuck against the underside. Preserve the dark slate hood, broad black moustachial marks, blue-gray upperparts, pale barred underparts, yellow cere and dark hooked bill. Keep the body anatomically coherent despite the tucked posture.
Composition/framing: Three-quarter side and slight ventral view, with the falcon moving from upper right toward lower left. Keep the complete head, body, both folded wings and full tail inside frame. Let the bird occupy about 38 percent of image height. Use directional blur only in the distant background; retain readable feather edges and facial marks on the bird.
Lighting/mood: Clear cool daylight, natural aerodynamic posture, restrained motion, field-documentary realism.
Species exclusions: Falco peregrinus, not Eurasian Hobby, Gyrfalcon, Common Kestrel, Saker Falcon, swift, hawk, eagle, jet or fantasy creature. Avoid rufous back or trousers, pale mottled Gyrfalcon plumage, kestrel hovering posture, open eagle fingers and missing folded wings.
Evidence boundary: The frame illustrates one stoop phase. It supplies no measured speed, record value, full dive sequence or hunting outcome.
Constraints: EXACTLY ONE BIRD TOTAL; no prey, second bird, flock, contact, blood, loose feathers, contrail, sonic boom, speed line, number, gauge, arrow, multiple exposure, ghost copy, duplicated wing, clipped tail, text, logo, signature, border, collage, transparency or watermark. Photorealistic natural-history photography, free of CGI, illustration, superhero imagery and diagram styling.
```

### 03 · Urban nest ledge

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Peregrine Falcon urban-breeding gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB project asset
Primary request: Create a brand-new original field-documentary photograph of exactly one adult Peregrine Falcon, Falco peregrinus, attending exactly one shallow scrape with exactly three eggs on a sheltered high-city ledge.
Scene/backdrop: A broad unbranded concrete ledge high on a generic office building, covered by one thin patch of coarse gravel. A distant city skyline falls out of focus. No recognizable landmark, sign, rooftop worker, antenna, pigeon or other animal.
Scrape and eggs: Show exactly one shallow bare depression scratched into the gravel. It contains exactly three separate oval eggs with natural cream-to-reddish-brown mottling. The scrape has zero sticks, twigs, woven grass, moss lining, decorative nest bowl or piled nest material.
Adult: Exactly one complete adult stands beside the scrape without covering the eggs. Show a blue-gray back and folded pointed wings, dark slate hood, broad black moustachial marks, pale throat and breast, fine horizontal barring below, yellow cere, yellow orbital skin, two exposed yellow scaly tarsi, two coherent feet and one barred tail. Do not assign sex.
Composition/framing: Medium-wide ledge-level telephoto view. Keep the complete adult, full visible scrape and all three eggs inside frame. Separate the bird from the eggs enough to preserve each egg outline. Keep the ledge lip visible as a safe physical boundary.
Lighting/mood: Soft overcast city daylight, real gravel, concrete and feather texture, quiet breeding behavior, documentary realism without architectural advertising.
Species exclusions: Falco peregrinus, not Eurasian Hobby, Gyrfalcon, Common Kestrel, Saker Falcon, pigeon or eagle. Avoid rufous upperparts, rufous thighs, pale Arctic mottling, vertical juvenile streaks, weak facial marks and feathered lower legs.
Evidence boundary: The scene reconstructs one plausible urban scrape. It does not identify a real building, nest, pair, clutch norm or breeding result.
Constraints: EXACTLY ONE BIRD, ONE SCRAPE AND THREE EGGS TOTAL; no chick, second adult, distant bird, reflection bird, prey, carcass, feather pile, food, nest box, stick nest, band, transmitter, person, readable sign, number, logo, signature, border, collage, transparency or watermark. Photorealistic natural-history photography, free of CGI, illustration, staged falconry and surveillance-camera styling.
```

### 04 · Aerial bird hunt

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Peregrine Falcon hunting gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB project asset
Primary request: Create a brand-new original wildlife photograph of exactly one adult Peregrine Falcon, Falco peregrinus, approaching exactly one flying Rock Pigeon, Columba livia, before contact.
Scene/backdrop: Open pale coastal sky above a distant blurred estuary. No city landmark, building, power line, cliff nest, person or other animal.
Peregrine: One complete adult follows from above and behind with long pointed wings partly flexed in a controlled aerial pursuit. Show the dark slate hood, broad black moustachial marks, blue-gray upperparts, pale horizontally barred underparts, yellow cere, yellow feet held back from the prey and one complete barred tail.
Pigeon: Exactly one complete healthy gray Rock Pigeon flies ahead with two coherent wings, one head, one tail and two dark wing bars. It has no band or domestic ornament.
Interaction: Keep at least two Peregrine body lengths of open sky between the birds. Their bodies, wings and tails do not touch or overlap. The Peregrine keeps its talons away from the pigeon. Show no strike or capture.
Composition/framing: Medium-wide side-three-quarter telephoto view. Keep both complete birds and all four wing tips inside frame. Place the pigeon lower left and the Peregrine upper right, with clear flight space ahead.
Lighting/mood: Diffuse daylight, restrained motion, natural feather detail and plausible aerial geometry.
Species exclusions: The predator is Falco peregrinus, not Eurasian Hobby, Gyrfalcon, Common Kestrel, Saker Falcon, hawk or eagle. Avoid rufous back or trousers, pale mottling, kestrel hovering, broad fingered wings and feathered tarsi.
Evidence boundary: The frame depicts one plausible approach toward one bird prey species. It establishes no contact, kill, diet exclusivity or hunting success.
Constraints: EXACTLY TWO BIRDS TOTAL: one Peregrine Falcon and one Rock Pigeon; no flock, distant silhouette, third bird, contact, collision, wound, blood, detached feather, carcass, prey in talons, duplicate wing, clipped anatomy, speed line, text, arrow, logo, signature, border, collage, transparency or watermark. Photorealistic field photography, free of CGI, illustration, fantasy and falconry staging.
```

### 05 · Migration coastline

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Peregrine Falcon movement gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB project asset
Primary request: Create a brand-new original wide environmental photograph of exactly one adult Peregrine Falcon, Falco peregrinus, flying along a generalized coastline during autumn movement season.
Scene/backdrop: A broad temperate coast with a rocky headland, pale barrier beach, tidal shallows, low saltmarsh and open sea beneath broken cloud. No named site, recognizable landmark, skyline, road, vessel, turbine, power line, person or other animal.
Subject: Include exactly one complete adult Peregrine Falcon in purposeful level flight across the middle-right sky. Show a compact body, dark slate hood, broad black moustachial marks, blue-gray upperparts, pale horizontally barred underparts, two long pointed coherent wings, yellow cere, tucked yellow feet and one barred tail. Keep the adult large enough for its pointed wing shape and face pattern to remain readable.
Composition/framing: Very wide eye-level coastal view. Let habitat carry at least 78 percent of visual attention. Place the falcon near x=0.68, y=0.38, occupying about 16 percent of image width, with open coast ahead of its path. Keep both wing tips and the tail inside frame.
Lighting/mood: Cool post-rain daylight, restrained sea blue, sand gray and marsh green, realistic atmospheric depth, museum-publication landscape photography.
Species exclusions: Falco peregrinus, not Eurasian Hobby, Gyrfalcon, Common Kestrel, Saker Falcon, gull, tern, hawk or eagle. Avoid rufous plumage, pale Arctic mottling, kestrel hovering, broad fingered wings and forked tern tail.
Evidence boundary: Some Peregrine populations migrate while others remain resident or disperse over shorter distances. This single scene does not establish a route, origin, destination, timing record or tracked individual.
Constraints: EXACTLY ONE BIRD TOTAL; no flock, distant silhouette, prey, nest, band, transmitter, route line, arrow, map, compass, label, text, logo, signature, border, collage, transparency or watermark. Photorealistic natural landscape photography, free of CGI, illustration, travel advertising and infographic styling.
```

### 06 · Cliff monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Peregrine Falcon conservation gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2 landscape, opaque RGB project asset
Primary request: Create a brand-new original field-documentary photograph of exactly two raptor ecologists conducting non-invasive distance monitoring of exactly one adult Peregrine Falcon, Falco peregrinus, at a generalized cliff.
Scene/backdrop: A broad temperate cliff valley with layered gray rock, sparse grass, a deep open ravine and distant water under subdued cloud. No named reserve, trail sign, building, road, vehicle, climbing route, nest, egg, chick or recognizable landmark.
Falcon: Exactly one complete adult Peregrine Falcon perches on an isolated upper-right cliff ledge across the ravine. Preserve the compact falcon silhouette, dark hood and moustachial marks, blue-gray back, pale barred underside, folded pointed wings, yellow cere, exposed yellow tarsi and one complete tail. Add no band or transmitter.
Researchers: Exactly two adult field ecologists stand as small full figures on a lower-left observation knoll, below and far across the ravine from the falcon. Both wear plain muted unbranded field clothing. Researcher 1 looks through exactly one spotting scope mounted on exactly one tripod. Researcher 2 records in exactly one small plain notebook or tablet with no readable screen. Neither person points, approaches or stands above the bird.
Composition/framing: Wide eye-level environmental view. Habitat carries at least 76 percent of visual attention. Place the observers near x=0.18 and the falcon near x=0.73, with the uninterrupted ravine forming a visible distance buffer. Keep both complete people, the full tripod and the entire falcon inside frame.
Lighting/mood: Soft overcast field light, restrained stone and grass colors, realistic atmospheric depth, routine conservation work.
Species exclusions: The bird is Falco peregrinus, not Eurasian Hobby, Gyrfalcon, Common Kestrel, Saker Falcon, hawk, eagle, raven or pigeon. Avoid rufous back or thighs, pale Arctic mottling, vertical juvenile streaks, weak facial marks, broad fingered wings and feathered tarsi.
Evidence boundary: The scene illustrates respectful distance observation. It identifies no real project, person, site, nest, survey result, abundance estimate or population trend.
Constraints: EXACTLY ONE BIRD AND EXACTLY TWO PEOPLE TOTAL; exactly one spotting scope, one tripod and one notebook or tablet; no hidden person, tourist, guide, dog, other bird, nest, food, bait, handling, capture, climbing gear, drone, camera trap, binoculars, band, transmitter, readable data, badge, brand, text, logo, signature, border, collage, transparency or watermark. Photorealistic conservation field photography, free of CGI, illustration, propaganda and tourism advertising.
```

## Static validation

- All six source files decode at 1536 x 1024 in RGB space without alpha.
- All six runtime files decode at 1536 x 1024 as opaque VP8 WebP.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- TinyPNG reduced the six sources from 14,167.1 KB to 4,361.2 KB, a 69.2 percent reduction.
- `cwebp -q 82 -m 6 -mt` produced six runtime files totaling 824.6 KB, an 81.1 percent reduction from the compressed sources.
- Source and runtime files received visual inspection at original resolution. Checks covered bird, egg and person counts, adult field marks, complete anatomy, cover crop space, stoop posture, hunt separation, gravel scrape contents, movement context, monitoring distance, and the absence of text or branding.
- Verification used no GUI or headless browser.
