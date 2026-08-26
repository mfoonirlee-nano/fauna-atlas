# Golden Eagle image set

These six original project images were generated on 2026-08-26 with OpenAI's built-in imagegen tool for the Fauna Atlas *Aquila chrysaetos* profile. They reconstruct representative scenes and do not record named eagles, nests, hunts, survey sites or field teams.

- Generation mode: `photorealistic-natural`
- Research brief: [`docs/research/golden-eagle-profile.md`](../../../../../docs/research/golden-eagle-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/golden-eagle/*.webp`
- Source and runtime dimensions: 1536 x 1024, horizontal 3:2
- Color and alpha: source PNGs use RGB color without alpha; runtime files are opaque VP8 WebP
- Source compression: `npm run compress -- <six source PNGs>`
- Runtime conversion: `npm run convert:webp -- <six source PNGs>`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-alpine-ridge-portrait-source.png` | `01-alpine-ridge-portrait.webp` | One complete adult stands on the right side of an alpine rock; the gold nape, dark body, hooked bill, feathered tarsi and yellow toes remain visible, while the left side provides cover-copy space. |
| 02 | `02-adult-flight-field-marks-source.png` | `02-adult-flight-field-marks.webp` | One adult banks over an open slope; both broad wings, fingered primaries, rounded barred tail and gold nape remain inside the central crop-safe area. |
| 03 | `03-open-mountain-habitat-source.png` | `03-open-mountain-habitat.webp` | Open grass slopes, crags and a ravine dominate the frame; one small complete adult perches on a middle-right outcrop. |
| 04 | `04-hare-hunting-approach-source.png` | `04-hare-hunting-approach.webp` | One adult makes a low approach toward one running hare; open ground separates them and no contact, injury or blood appears. |
| 05 | `05-cliff-eyrie-and-eaglet-source.png` | `05-cliff-eyrie-and-eaglet.webp` | One adult with feathered tarsi stands beside one older eaglet at one cliff eyrie; no egg, prey or second adult appears. |
| 06 | `06-distance-raptor-monitoring-source.png` | `06-distance-raptor-monitoring.webp` | Two small observers use one tripod-mounted scope and one notebook while one complete adult glides across a wide valley buffer. |

## Scientific and editorial boundaries

- Adults represent the Golden Eagle, *Aquila chrysaetos*: dark brown body, warm golden rear crown and nape, yellow cere and toes, dark hooked bill, feathered tarsi, broad wings with fingered primaries and a long rounded tail. Adult frames omit the large white wing panels and white tail base of young birds.
- White head and tail would indicate a Bald Eagle. White shoulder patches, a wedge-shaped tail, a bare head or exposed scaly tarsi would conflict with this profile.
- Frame 03 shows one generalized upland habitat. It does not represent the species' whole Holarctic range or document occupancy at a real place.
- Frame 04 shows one plausible mammal-hunting approach. It does not prove a successful capture or make hares the sole prey.
- Frame 05 does not establish parent sex, kinship, clutch size or breeding success. Golden Eagles also use large trees and human-made structures where cliffs are absent.
- Frame 06 illustrates distance observation. It supplies no real occurrence, abundance, trend or nest-location record.
- No frame contains falconry equipment, jesses, bait, a flag, text, a logo, a watermark, a border, a collage, a map or a data graphic.

## Final generation prompts

Each base frame came from an independent built-in imagegen call without an input image. Frames 01 and 05 then received one targeted tarsal-feather correction.

### 01 · Alpine ridge portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Eagle cover image, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary natural-history photograph of exactly one adult Golden Eagle, Aquila chrysaetos, standing calmly on a weathered alpine rock ridge.
Scene/backdrop: A generalized open high-mountain landscape of tawny grass, gray-brown rock, distant layered ridges and a softly clouded sky. No named landmark, building, road, fence, people, prey or other animal.
Subject and morphology: Exactly one complete healthy wild adult Golden Eagle. Dark chocolate-brown body and wing plumage with subtle lighter mottling; warm golden-buff feathers confined to rear crown, nape and side of neck; broad powerful chest; relatively small dark-brown head; one strong dark-tipped hooked bill with yellow cere; dark brown eye with a modest yellow orbital skin edge; yellow feet; both lower legs and tarsi densely feathered down to the bases of the toes; four natural toes on each foot with black curved talons; one complete medium-long gray-brown barred tail. Adult has no large white patches.
Composition/framing: Eye-level medium-wide telephoto field photograph. Place the complete eagle in the right 55 percent around x=0.70, occupying about 58 percent of image height. Preserve the left 40 percent as quiet sky and distant ridge for page copy. Keep crown, bill, folded wings, tail, both legs, feet and talons fully inside frame.
Lighting/mood: Soft clear early-morning mountain light, restrained earth colors, real feather and stone texture, calm alert posture, museum-publication realism.
Species exclusions: Aquila chrysaetos, not Bald Eagle, Imperial Eagle, Steppe Eagle, White-tailed Eagle, hawk, falcon or vulture. No white head or white tail, no bare tarsi, no oversized yellow bill, no crest, no juvenile white wing patches, no fantasy gold body.
Constraints: EXACTLY ONE BIRD TOTAL; coherent anatomy; no open screaming bill, attack pose, prey, blood, nest, chick, band, transmitter, text, logo, signature, border, collage or watermark. Photorealistic wildlife photography, not CGI, illustration, painting, stock-photo gloss or fantasy.
```

Correction pass:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Golden Eagle cover image correction
Input images: Image 1 is the edit target, an otherwise accepted adult Golden Eagle portrait on an alpine rock.
Primary request: Correct only the adult Golden Eagle's two lower legs. Replace the exposed yellow scaly tarsal shafts between the dark belly feathers and the toes with dense natural dark brown to warm tawny feathers extending continuously down to the bases of the toes, as required for Aquila chrysaetos. Keep the toes themselves yellow and scaly, and keep every black curved talon unchanged.
Invariants: Preserve the exact same eagle identity, head, golden nape, bill, eye, body, folded wings, tail, pose, toe placement, rock, mountain background, lighting, 1536×1024 horizontal composition and left-side negative space. Change only the tarsal covering. Do not alter or add any toe, claw, wing, feather patch, bird, object or background element.
Constraints: Exactly one bird; both feathered tarsi must read as soft plumage rather than scales; no leg bands, jesses, transmitter, text, logo, signature or watermark; photorealistic natural-history photography.
```

### 02 · Adult flight field marks

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Eagle flight-identification gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary flight photograph of exactly one adult Golden Eagle, Aquila chrysaetos, gliding above an open mountain slope.
Scene/backdrop: Pale blue-gray mountain sky over a softly blurred ochre alpine slope and distant rock ridges. No landmark, road, power line, turbine, people, prey or other bird.
Subject and flight morphology: Exactly one complete adult Golden Eagle seen from a slightly elevated three-quarter dorsal angle, banking gently so the warm golden-buff rear crown and nape remain visible. Dark brown plumage without large white patches. Two long broad coherent wings fully spread, with broad inner wings and naturally separated fingered outer primary feathers; a relatively long broad gray-brown tail with subtle dark bars and rounded end; head projecting modestly; yellow cere; both feathered legs tucked naturally and barely visible. Adult plumage, no juvenile white wing panels or white tail base.
Composition/framing: Horizontal telephoto field image, eagle near center-right and traveling toward open space at left, both complete wing tips and full tail inside frame. Bird occupies about 48 percent of image width; uncluttered sky remains around it.
Lighting/mood: Diffuse high-altitude daylight, restrained natural contrast, crisp feather detail without frozen artificial sharpness, observational realism.
Species exclusions: Not Bald Eagle, White-tailed Eagle, Imperial Eagle, Steppe Eagle, buzzard, hawk, falcon or vulture. No white head, white tail, rectangular sea-eagle tail, bare tarsi, narrow falcon wings, oversized beak, crest or decorative gold body.
Constraints: EXACTLY ONE BIRD TOTAL; exactly two coherent wings, one head, one tail and two tucked legs; no duplicate wing, clipped tip, distant bird, flock, prey, blood, text, arrows, labels, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration or painting.
```

### 03 · Open mountain habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Eagle habitat gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original wide environmental photograph of open mountain habitat used by the Golden Eagle, Aquila chrysaetos.
Scene/backdrop: A generalized Holarctic upland landscape with broad treeless grass slopes, broken rocky crags, a shallow ravine, scattered low scrub, and distant mountain ridges under cool broken cloud. Open hunting ground connects to secluded cliff ledges. No named place, dense forest, city, road, building, fence, livestock, power infrastructure or people.
Subject: Include exactly one complete adult Golden Eagle deliberately small but identifiable, perched upright on an isolated rock in the middle-right distance. Dark brown body, modest warm golden nape, hooked bill, folded wings, complete barred tail, feathered tarsi and yellow feet. No white head, white tail or large white patches.
Composition/framing: Very wide landscape view, habitat carries at least 88 percent of visual attention. Keep the single eagle at about 6–8 percent of image height and fully inside frame; use layered slope and cliff geometry to show open foraging terrain beside potential nest ledges.
Lighting/mood: Cool clear post-rain daylight, restrained grass gold, lichen gray and blue-gray distance, realistic atmospheric depth, museum-publication field photography.
Species exclusions: The bird is Aquila chrysaetos, not a Bald Eagle, sea eagle, vulture, falcon or raven.
Constraints: EXACTLY ONE BIRD TOTAL; no distant silhouettes, flock, prey, nest, egg, chick, text, map, arrows, label, logo, signature, border, collage or watermark. Photorealistic natural landscape, not CGI, illustration, fantasy panorama or tourism advertising.
```

### 04 · Hare hunting approach

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Eagle hunting gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary wildlife photograph of exactly one adult Golden Eagle, Aquila chrysaetos, making a low hunting approach toward exactly one wild mountain hare across an open upland slope, before contact.
Scene/backdrop: A generalized windy alpine grass-and-heath slope with short tawny vegetation, scattered gray stones and a distant blurred ridge. No snow spectacle, forest, road, fence, building, livestock, person or additional animal.
Eagle: One complete adult Golden Eagle flies low from upper right toward lower left, wings partly swept in one coherent controlled approach, both full wing tips visible, legs beginning to lower but talons still far from the hare. Dark brown body, warm golden nape, no large white patches, feathered tarsi, yellow feet, black talons, complete barred tail.
Hare: Exactly one complete healthy brown-gray mountain hare runs naturally across the lower-left slope with both ears and all four limbs anatomically coherent. Clear open ground separates hare from eagle. No contact, injury, blood or capture.
Composition/framing: Medium-wide side-three-quarter field view. Keep both complete animals inside frame and separated by at least one eagle body length; landscape context remains clear. Avoid a sensational head-on attack.
Lighting/mood: Natural overcast upland daylight, restrained motion, plausible field-documentary realism.
Species exclusions: Eagle is Aquila chrysaetos, not Bald Eagle, sea eagle, hawk, falcon or vulture; no white head or tail, no bare lower legs.
Evidence boundary: This illustrates one plausible mammal-hunting approach and does not claim that hares are the only prey or that a capture succeeded.
Constraints: EXACTLY ONE EAGLE AND ONE HARE TOTAL; no second predator, second hare, distant bird, duplicate limb, contact, wound, blood, carcass, text, arrows, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration, fantasy or staged falconry.
```

### 05 · Cliff eyrie and eaglet

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Eagle breeding gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary breeding-season photograph of exactly one adult Golden Eagle, Aquila chrysaetos, attending exactly one older eaglet at a large cliff eyrie.
Scene/backdrop: A generalized secluded mountain cliff ledge with rough gray-brown rock. One broad heavy platform nest of weathered sticks lined with a few fresh green sprigs sits on a sheltered ledge overlooking blurred open uplands. No named site, tree nest, building, tower, road, people or other animal.
Adult: Exactly one complete adult stands on the outer edge of the nest, calm and alert, not feeding. Dark chocolate-brown body, warm golden-buff rear crown and nape, yellow cere, hooked dark-tipped bill, folded wings, complete barred tail, feathered tarsi, yellow feet and black talons.
Eaglet: Exactly one separate older eaglet sits safely in the nest cup. It has pale gray-white down mixed with emerging dark brown juvenile feathers on wings and back, one normal dark head and hooked bill, two folded developing wings, and no adult golden nape. It is clearly a real large eagle nestling, not a miniature adult or plush toy. No egg or prey remains.
Composition/framing: Medium-wide eye-level telephoto view, entire adult and eaglet plus the complete visible nest platform inside frame, with a clear rock buffer around the nest. Neither bird overlaps the other's head or body.
Lighting/mood: Soft cloudy mountain daylight, real feather, stick and rock texture, quiet observational realism.
Species exclusions: Both birds are Golden Eagles, not Bald Eagles, Imperial Eagles, sea eagles, owls or vultures. Adult has no white head or white tail; eaglet has no bald-eagle white head.
Evidence boundary: This is a representative reconstruction and does not establish a real nest location, clutch size, kinship or breeding outcome.
Constraints: EXACTLY TWO BIRDS TOTAL: one adult and one eaglet; EXACTLY ONE NEST; zero eggs; no second adult, second chick, prey, carcass, feeding, blood, band, transmitter, person, text, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration, fantasy or zoo imagery.
```

Correction pass:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Golden Eagle breeding gallery image correction
Input images: Image 1 is the edit target, an otherwise accepted cliff-eyrie scene with one adult Golden Eagle and one eaglet.
Primary request: Correct only the standing adult Golden Eagle's two lower legs. Replace any exposed yellow scaly tarsal shafts between the dark belly feathers and the toes with dense natural dark brown to warm tawny feathers extending continuously down to the bases of the toes, as required for Aquila chrysaetos. Keep the adult's toes yellow and scaly and keep the black curved talons unchanged. Do not change the eaglet.
Invariants: Preserve the exact same adult and eaglet identities, both heads and bodies, adult golden nape, bill, eyes, folded wings, tail, pose, toe placement, cliff, stick nest, green sprigs, distant background, lighting and 1536×1024 framing. Change only the adult tarsal covering. Keep exactly one adult, one eaglet and one nest.
Constraints: No extra or missing toes, claws, legs, wings or birds; no egg, prey, band, jesses, transmitter, person, text, logo, signature or watermark; photorealistic natural-history photography.
```

### 06 · Distance raptor monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Eagle conservation gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original field-documentary photograph of exactly two raptor ecologists conducting non-invasive distance monitoring of exactly one adult Golden Eagle, Aquila chrysaetos, over an open mountain valley.
Scene/backdrop: A generalized broad upland valley with grass-and-heath slopes, rocky ridges and a low observation knoll under subdued cloud. No named reserve, nest, road, building, vehicle, turbine, power line, bait, carcass, trap, cage or recognizable landmark.
Eagle: Exactly one complete adult Golden Eagle glides in the mid-right sky well away from observers. Dark brown adult plumage, warm golden nape, no white head, white tail or large juvenile white patches; two broad long wings with fingered primaries and one complete barred tail.
Researchers: Exactly two adult field ecologists appear as small full figures on the far-left observation knoll, separated from the eagle by a wide valley. Both wear plain muted unbranded field clothing. Researcher 1 looks through exactly one spotting scope on one tripod. Researcher 2 records in exactly one small plain notebook or tablet with no readable screen. No one points, approaches, handles or feeds wildlife.
Composition/framing: Wide eye-level environmental view. Habitat carries at least 75 percent of visual attention. Put observers near x=0.18 and the airborne eagle near x=0.72, with the distance buffer clear. Keep both complete people, full tripod and entire eagle inside frame.
Lighting/mood: Soft overcast field light, restrained earth colors and realistic atmospheric depth, routine conservation science.
Evidence boundary: Representative reconstruction only; it does not identify a real project, person, eagle, nest, survey result, population trend or tracking record.
Constraints: EXACTLY ONE BIRD AND EXACTLY TWO PEOPLE TOTAL; one spotting scope, one tripod and one notebook or tablet; no hidden person, tourist, dog, other bird, nest, lure, handling, band, transmitter, drone, readable text, badge, brand, logo, signature, border, collage or watermark. Photorealistic conservation field photography, not CGI, illustration, propaganda or tourism advertising.
```

## Static validation

- All six source files decode at 1536 x 1024 in RGB space without alpha.
- All six runtime files decode at 1536 x 1024 as opaque VP8 WebP.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- TinyPNG reduced the six sources from 14,736.4 KB to 4,684.2 KB, a 68.2 percent reduction.
- `cwebp -q 82 -m 6 -mt` produced six runtime files totaling 927.6 KB, an 80.2 percent reduction from the compressed sources.
- Source and runtime files received visual inspection at original resolution. Checks covered animal and person counts, gold nape, adult-white exclusion, feathered tarsi, complete wing tips and tails, cover crop space, hunt separation, nest contents, monitoring distance, and the absence of text or branding.
- Verification used no GUI or headless browser.
