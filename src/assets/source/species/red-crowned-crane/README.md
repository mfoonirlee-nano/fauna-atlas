# Red-crowned crane image set

These six original project images were generated on 2026-08-25 with OpenAI's built-in imagegen tool for the Fauna Atlas *Grus japonensis* profile. They are representative scientific reconstructions, not records of named cranes, nests, migration tracks, survey sites or field teams.

- Generation mode: `photorealistic-natural`
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/red-crowned-crane/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: TinyPNG sources are 8-bit indexed-color PNGs in RGB space; runtime files are opaque VP8 WebP; no file has alpha
- Source compression: `npm run compress -- <six source PNGs>`
- Runtime conversion: `npm run convert:webp -- <six source PNGs>`; script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Actual visual theme and accepted check |
| --- | --- | --- | --- |
| 01 | `01-red-crown-marsh-portrait-source.png` | `01-red-crown-marsh-portrait.webp` | Exactly one complete adult stands in a spring shallow marsh on the right; the exposed red crown, black lower face/front neck, white rear neck and black folded tertiary drape are readable; the left side remains quiet cover-copy space. |
| 02 | `02-hokkaido-snow-courtship-duet-source.png` | `02-hokkaido-snow-courtship-duet.webp` | Exactly two adults call in a snowy Hokkaido wet meadow; one makes a low jump with two open wings, the other stands with folded wings; open wings show white primaries and black inner secondary panels. |
| 03 | `03-shallow-water-nest-and-chicks-source.png` | `03-shallow-water-nest-and-chicks.webp` | Exactly one adult guards exactly two separate tawny downy chicks on one low reed-and-sedge mound surrounded by shallow water; no second adult or egg is present. |
| 04 | `04-continental-wetland-migration-source.png` | `04-continental-wetland-migration.webp` | Exactly two complete adults fly above a broad autumn continental floodplain; necks extend straight forward, legs trail behind, and the white-primary/black-secondary wing pattern is visible. |
| 05 | `05-coastal-winter-foraging-source.png` | `05-coastal-winter-foraging.webp` | Exactly two adults use a winter tidal flat; one probes a shallow pool while the other stands upright; no juvenile, visible prey, feeding hand or grain is present. |
| 06 | `06-distance-conservation-monitoring-source.png` | `06-distance-conservation-monitoring.webp` | Exactly two small field observers remain on a levee, one using a tripod-mounted scope and one recording; exactly one adult crane stands across a broad wetland buffer with no capture, handling or feeding. |

## Scientific and editorial boundaries

- Every adult represents the Red-crowned Crane, *Grus japonensis*: tall white body; black lower face, throat and front neck; white rear-neck stripe; long straight gray-olive bill; long dark legs; one small bare red crown patch. The red patch is exposed skin, not a feather crest or full red face.
- Long black secondaries and tertials form the black rear drape on a standing bird. The true short tail is white. In open wings, outer primaries remain white while black occupies the inner secondary and tertiary region.
- Flying cranes hold the neck straight forward and trail the legs. A tucked heron neck, black outer wing tips or all-white neck would indicate the wrong anatomy or a similar species.
- Chicks in frame 03 have tawny-cinnamon down, feathered crowns and no adult red skin or black-and-white neck pattern. The image does not establish parent sex, kinship, chick age or breeding success.
- Frame 02 illustrates one plausible duet and dance instant. Appearance does not prove sex, pair-bond duration or the function of that call.
- Frame 04 is a generic continental wetland scene, not a mapped western or eastern flyway, a tracked movement or a claim about route use.
- Frame 05 is a generalized winter estuary. The probing posture does not identify a prey item or quantify diet.
- Frame 06 illustrates distance monitoring only. It does not identify a real project or supply evidence of presence, abundance, trend or habitat quality.
- No frame contains text, a logo, watermark, border, collage, map or data graphic.

## Final generation prompts

Each accepted source came from one independent built-in imagegen call with no input image or edit chain.

### 01 · Red crown marsh portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Red-crowned Crane cover image, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary natural-history photograph of exactly one adult Red-crowned Crane, Grus japonensis, standing calmly in a spring reed-and-sedge marsh in East Asia.
Scene/backdrop: A generalized shallow freshwater marsh with ankle-deep clear brown water, sparse dry reed stems, fresh green sedges, and a softly blurred low wetland horizon. No named site, buildings, people, other animals, snow, mountains, map, or recognizable landmark.
Subject and morphology: Exactly one complete healthy wild adult Red-crowned Crane, full body visible from bill to both feet. It is a tall slender crane with one long straight dark olive-gray pointed bill, dark eyes, one small oval patch of exposed bare crimson skin centered only on the top crown, black lower face, throat and front of long neck, a clean white stripe beginning behind the eye and continuing down the rear neck, and an otherwise white head, rear neck and body. The folded wings are white except for long black secondary and tertiary feathers that form a natural black drape over the rear; the true short tail feathers beneath are white. Two very long dark charcoal legs, exactly two non-webbed crane feet naturally in shallow water. Adult sexes share this plumage.
Composition/framing: Eye-level medium-wide horizontal field photograph. Place the complete crane in the right 55 percent around x=0.70, y=0.52, occupying about 55 percent of image height. Preserve the left 40 percent as quiet marsh and soft atmosphere for page copy. Keep bill, crown, feet, folded wings and white tail area fully inside frame.
Lighting/mood: Soft overcast early-morning light, restrained cool-neutral color, real feather texture and subtle wetland haze, calm observational mood, museum-publication realism.
Species exclusions: This is Grus japonensis, not Siberian Crane, Whooping Crane, White-naped Crane, Black-necked Crane, stork, heron or egret. The red is exposed skin only on the top crown, never a red feather crest or a full red facial mask. No all-white neck, no gray body, no black wing tips visible on folded wings, no S-curved heron neck, no webbed feet.
Constraints: EXACTLY ONE BIRD TOTAL; one head, one bill, one crown patch, two folded wings, two legs and two feet; anatomically coherent; no cropped anatomy, extra limbs, duplicated feathers, prey, nest, egg, chick, band, tag, feeding station, text, logo, signature, border, collage or watermark. Photorealistic wildlife photography, not CGI, illustration, painting, stock-photo gloss or fantasy.
```

### 02 · Hokkaido snow courtship duet

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Red-crowned Crane behavior gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary winter wildlife photograph of exactly two adult Red-crowned Cranes, Grus japonensis, performing a natural pair courtship duet on a snow-covered wet meadow in eastern Hokkaido.
Scene/backdrop: A broad quiet Hokkaido river-meadow in winter, thin clean snow over tawny sedges, a few blurred frost-coated reeds, and a distant low tree line under pale overcast daylight. No feeding station, grain pile, road, building, fence, tourist, vehicle, mountain spectacle, or identifiable landmark.
Bird 1: One complete adult stands upright at center-right with both folded wings, neck extended vertically and bill angled upward in a natural unison-call posture.
Bird 2: One complete adult at center-left performs one restrained low courtship jump, feet only slightly above the snow, neck naturally curved upward, and exactly two wings lifted symmetrically in a broad open display. Keep both wing roots, both complete wing tips, both legs and the full bird inside frame.
Shared species morphology: Each adult has exactly one small oval patch of exposed bare crimson skin confined to the top crown; black lower face, throat and front neck; a clean white stripe from behind the eye down the rear neck; otherwise white head, body and wings; long straight dark olive-gray bill; long charcoal legs. On folded wings, long black secondary and tertiary feathers form a rear drape over a white true tail. On the displayed wings, the outer primary feathers remain white and the black feathers form inner secondary/tertiary panels, never black wing tips.
Composition/framing: Medium-wide eye-level view, both birds separated by clear snowy ground and similar natural scale, neither touching nor overlapping. Pair occupies the middle 65 percent of the frame, with generous snow and meadow context.
Lighting/mood: Diffuse cold morning light, realistic white balance, fine feather and snow texture, restrained field-documentary emotion rather than theatrical romance.
Species exclusions: Not Siberian Crane, Whooping Crane, White-naped Crane, Black-necked Crane, stork, heron or egret. No full red face, red feather crest, black primary tips, all-white neck, gray body, webbed feet or S-curved heron neck.
Constraints: EXACTLY TWO BIRDS TOTAL, both adult Red-crowned Cranes; each has one head, one bill, one red crown patch, exactly two wings, two legs and two feet; no third bird or reflection bird, extra limbs, fused feathers, malformed feet, eggs, chicks, prey, blood, feeding, tags, bands, humans, text, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration, painting, fantasy or stock-photo gloss.
```

### 03 · Shallow-water nest and chicks

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Red-crowned Crane breeding gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary breeding-season photograph of exactly one adult Red-crowned Crane, Grus japonensis, guarding exactly two newly hatched downy chicks at a low wetland nest.
Scene/backdrop: A generalized northeast Asian freshwater breeding marsh in late spring. Shallow standing water surrounds one broad low mound made only from dead reeds, sedges and marsh vegetation. Sparse upright reed stems, open shallow water and muted green growth show a natural territorial nesting site. No dry upland nest, tree nest, floating platform, fence, building, person, boat, predator, other animal, named reserve or landmark.
Adult: Exactly one complete healthy adult stands quietly beside the nest mound, not sitting on or stepping on the chicks. Full body visible with one long straight dark olive-gray pointed bill; one small oval patch of exposed bare crimson skin only on the top crown; black lower face, throat and front neck; a white stripe from behind the eye down the rear neck; otherwise white head and body; folded white wings with long black secondary and tertiary feathers draped naturally over a white true tail; exactly two long dark legs and two non-webbed feet in shallow water.
Chicks: Exactly two small separate newly hatched crane chicks stand together on the dry upper surface of the same nest mound. Each chick has one head, a short straight pale brown bill, two legs, two feet, tiny developing wings held against the body, and natural cinnamon-tan and pale golden down with subtle darker brown along crown and back. Both crowns are completely feathered; no red skin, no adult black-and-white neck pattern. They are alert, dry and safe, not injured or anthropomorphic. No egg remains visible.
Composition/framing: Medium-wide low eye-level field view. Place the adult in the middle-right and the single nest mound with both chicks in the lower middle-left, separated but clearly associated. Keep every head, bill, body and leg inside frame. Habitat remains at least half the visual attention and the water surrounding the nest is clearly readable.
Lighting/mood: Soft cloudy spring daylight, realistic damp reed texture and feather detail, quiet observational museum-publication realism.
Species exclusions: Adult is Grus japonensis, not Siberian Crane, Whooping Crane, White-naped Crane, Black-necked Crane, stork, heron or egret. The adult red is bare skin only on top of the crown, never a red feather crest or full red face. Chicks must not look like yellow ducklings, geese, plovers or miniature adults.
Constraints: EXACTLY THREE BIRDS TOTAL: one adult and two chicks; EXACTLY ONE NEST MOUND; zero eggs; no second adult, third chick, hidden bird, duplicate reflection bird, extra limbs, fused bodies, blood, feeding, open beak food transfer, tag, band, human, text, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration, painting, fantasy or staged zoo imagery.
```

### 04 · Continental wetland migration

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Red-crowned Crane migration gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original documentary landscape photograph of exactly two adult Red-crowned Cranes, Grus japonensis, migrating above a broad continental northeast Asian wetland.
Scene/backdrop: A generalized Amur-Heilongjiang floodplain in autumn, with a sinuous shallow river, tawny reed beds, sedge marshes, muddy islands and distant flat forest under a cool broken-cloud sky. The connected wetland fills most of the frame. No named site, national border, map, route line, city, road, building, power line, wind turbine, boat, person, mountains, or recognizable landmark.
Birds and flight geometry: Exactly two complete adult Red-crowned Cranes flying in loose line abreast from left toward right in the upper-middle sky, separated by at least one full wingspan and not overlapping. Each bird has one long straight dark olive-gray bill, a long neck extended perfectly straight forward, one small bare crimson crown patch only on top of the head, black lower face, throat and front neck with a white rear-neck stripe, a white body, exactly two long dark legs extended straight behind beyond one short white tail, and exactly two broad wings in one coherent gliding phase. Show both wings of each bird fully inside the frame. On every wing, the outer primary feathers are white; black feathers form a distinct inner secondary and tertiary panel along the inner rear wing, never black outer wing tips.
Composition/framing: Very wide high-oblique environmental view, habitat at least 75 percent of visual attention. Keep the two birds large enough for the black-and-white neck and wing pattern to remain readable, around 20–25 percent of frame width each, with open sky ahead. One bird may be slightly higher, but both share the same travel direction and realistic scale.
Lighting/mood: Crisp diffuse autumn daylight with restrained blue-gray, reed gold and river brown, real atmospheric depth, calm long-distance movement, museum-publication documentary realism.
Species exclusions: Both are Grus japonensis, not Siberian Crane, Whooping Crane, White-naped Crane, Black-necked Crane, Common Crane, stork, heron, egret, goose or swan. No full red face, red feather crest, black primary tips, all-white neck, gray body, tucked heron neck, S-curved flight neck, webbed feet or raptor wing fingers.
Constraints: EXACTLY TWO BIRDS TOTAL; each has one head, one bill, one red crown patch, exactly two wings, two legs and one tail; no third silhouette, reflection bird, distant flock, extra wings, fused bodies, duplicated limbs, clipped wing tip, tags, tracking device, arrows, dashed route, text, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration, painting, fantasy, panorama stitching or travel advertising.
```

### 05 · Coastal winter foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Red-crowned Crane winter ecology gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original field-documentary photograph of exactly two adult Red-crowned Cranes, Grus japonensis, naturally foraging on an East Asian coastal tidal flat in winter.
Scene/backdrop: A generalized Yellow Sea estuary at low tide, with shallow reflective tidal pools, firm gray-brown mud, scattered shell fragments, narrow patches of native low saltmarsh vegetation and a soft distant reed edge beneath a cool overcast sky. No named reserve, skyline, port, sea wall, road, building, boat, net, trap, litter, invasive Spartina monoculture, person or identifiable landmark.
Bird 1: One complete adult in the middle-right bends its long neck downward in a smooth natural feeding curve and places the tip of its straight dark olive-gray bill into a shallow tidal pool. Its body, both folded wings, black secondary-and-tertiary rear drape, white true tail, two long dark legs and both non-webbed feet remain readable. No prey is visible.
Bird 2: One complete adult farther left stands upright and alert, facing the same general direction with both folded wings, long neck, bill, both legs and feet visible. The birds are separated and do not touch or overlap.
Shared species morphology: Exactly one small oval patch of exposed bare crimson skin only on the top crown of each adult; black lower face, throat and front neck; a clean white stripe from behind the eye down the rear neck; otherwise white head, body and folded wings. Long black secondary and tertiary feathers form the apparent black rear drape over a white true tail. Adult sexes share the same plumage.
Composition/framing: Medium-wide water-level telephoto view with both complete cranes inside frame and broad tidal-flat context. Keep the feeding bird near x=0.66, y=0.54 and the upright bird near x=0.34, y=0.48. Show natural footprints and soft reflections but no reflection that reads as a third animal.
Lighting/mood: Quiet diffused winter light, restrained slate, silt brown and white, realistic wet feathers, mud and shallow-water optics, museum-publication realism.
Species exclusions: Both are Grus japonensis, not Siberian Crane, Whooping Crane, White-naped Crane, Black-necked Crane, stork, heron or egret. No full red facial mask, red feather crest, all-white neck, gray body, black outer wing tips, webbed feet, spoonbill bill, stork bill or heron-like short legs.
Constraints: EXACTLY TWO BIRDS TOTAL, both adults; each has one head, one bill, one red crown patch, two folded wings, two legs and two feet; no chick, third bird, distant flock, fish, shellfish in bill, feeding hand, grain pile, injury, tag, band, extra limbs, fused feathers, text, logo, signature, border, collage or watermark. Photorealistic natural-history photography, not CGI, illustration, painting, fantasy, pollution spectacle or tourism advertisement.
```

### 06 · Distance conservation monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Red-crowned Crane conservation gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original field-documentary photograph of exactly two wetland ecologists conducting non-invasive distance monitoring of exactly one adult Red-crowned Crane, Grus japonensis, in a restored shallow marsh.
Scene/backdrop: A generalized northeast Asian wetland in early autumn, with broad shallow water, sedge tussocks, sparse reed beds and a low earthen observation levee. Natural flat horizon and subdued cloud cover. No named reserve, feeding station, grain, road traffic, building, tower, fence, power line, vehicle, boat, drone, trap, cage or identifiable landmark.
Crane: Exactly one complete healthy adult Red-crowned Crane stands calmly in shallow water in the mid-right middle distance, at least 30–50 metres from the observers. It has one long straight dark olive-gray pointed bill, one small oval patch of exposed bare crimson skin only on top of the crown, black lower face, throat and front neck, a white stripe behind the eye down the rear neck, otherwise white head and body, folded white wings with long black secondary and tertiary feathers forming a rear drape over a white true tail, and exactly two long dark legs and two non-webbed feet. No band, tag, transmitter, injury or feeding behavior.
Researchers: Exactly two adult ecologists appear as small full figures on the far-left levee, clearly separated from the crane by a wide uninterrupted band of water and sedge habitat. Both wear plain muted unbranded weatherproof field clothing and carry no food. Researcher 1 stands behind exactly one simple spotting scope on one tripod, looking toward the crane. Researcher 2 stands slightly behind and records observations on exactly one small plain notebook or tablet with no readable screen. Their posture is quiet and stationary; no approach, pointing crowd, capture, handling or pursuit.
Composition/framing: Wide eye-level documentary view. Habitat carries at least 70 percent of visual attention. Place the observers near x=0.18 and the crane near x=0.70, with the distance buffer visually obvious. Keep the entire crane, both complete people and the complete tripod inside frame.
Lighting/mood: Soft overcast field light, restrained greens, reed gold, water gray and natural clothing tones, realistic atmospheric depth and equipment textures, routine conservation science without advertising polish.
Species exclusions: The bird is Grus japonensis, not Siberian Crane, Whooping Crane, White-naped Crane, Black-necked Crane, stork, heron or egret. Red is bare crown skin only, never a feather crest or full red face. No gray body, all-white neck, black outer wing tips, webbed feet or heron-like proportions.
Evidence boundary: This is a representative reconstruction of respectful distance monitoring. It does not identify a real project, researcher, crane, survey site, population estimate, trend or breeding outcome.
Constraints: EXACTLY ONE BIRD AND EXACTLY TWO PEOPLE TOTAL; one spotting scope, one tripod, one notebook or tablet; no other bird, distant flock, hidden person, tourist, guide, dog, food, grain, feeder, blood, restraint, capture net, ring, tag, visible data graphic, readable text, badge, brand, logo, signature, border, collage or watermark. Photorealistic conservation field photography, not CGI, illustration, painting, propaganda or tourism advertisement.
```

## Static validation

- All six TinyPNG-compressed source files decode as 1536 × 1024, 8-bit indexed-color PNGs; `sips` reports RGB space and no alpha.
- All six runtime files decode as 1536 × 1024, opaque VP8 WebP; `file` identifies Web/P data rather than renamed PNG data.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- TinyPNG reduced the six sources from 15,022.2 KB to 5,058.1 KB, a 66.3% reduction.
- `cwebp -q 82 -m 6 -mt` produced six runtime files totaling 1,001.6 KB, an 80.2% reduction from the compressed sources.
- Source and WebP files were each inspected with `view_image`; no material conversion artifact or content drift appeared.
- Visual checks covered bird and human counts, bare crown skin, face and neck pattern, folded tertiary drape, open-wing primary/secondary pattern, straight migration posture, chick plumage, nesting-water context, feeding context, distance-monitoring buffer, and the absence of text or branding.
- No GUI or headless browser was used.
