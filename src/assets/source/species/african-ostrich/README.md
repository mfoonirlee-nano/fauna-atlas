# Common Ostrich image set

OpenAI imagegen created these six original project images on 2026-08-26 for the Fauna Atlas *Struthio camelus* profile. The accepted close-range birds use the southern subspecies *S. c. australis* so their gray neck and legs remain consistent across the set. The scenes do not document a named bird, nest, survey site or field team.

- Generation mode: OpenAI imagegen, `photorealistic-natural`, with `precise-object-edit` revisions
- Research brief: [`docs/research/african-ostrich-profile.md`](../../../../../docs/research/african-ostrich-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/african-ostrich/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: source files are opaque 8-bit indexed-color PNGs; runtime files use opaque lossy VP8 WebP
- Source compression: `npm run compress -- src/assets/source/species/african-ostrich/*-source.png`
- Runtime conversion: `npm run convert:webp -- src/assets/source/species/african-ostrich/*-source.png`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-open-savanna-adult-male-portrait-source.png` | `01-open-savanna-adult-male-portrait.webp` | The composition edit shows one complete southern adult male on the right, with gray neck and legs, black body, white wing and tail feathers, and broad copy space on the left. |
| 02 | `02-adult-female-field-marks-source.png` | `02-adult-female-field-marks.webp` | The composition edit shows one complete gray-brown adult female with paler wing and tail feathers; clear ground remains below both feet. |
| 03 | `03-semi-arid-savanna-habitat-source.png` | `03-semi-arid-savanna-habitat.webp` | Semi-arid grassland, bare ground, low scrub and distant ridges dominate the frame; one small complete female stands in the middle-right distance. |
| 04 | `04-two-toed-running-stride-source.png` | `04-two-toed-running-stride.webp` | The final edit shows one complete adult male in a lateral running stride, with the front foot planted and rear foot lifted. The rear two toes are separate; the planted foot's smaller outer toe partly overlaps the larger toe in side perspective. |
| 05 | `05-communal-ground-nest-and-eggs-source.png` | `05-communal-ground-nest-and-eggs.webp` | One complete adult female stands beside one shallow bare-soil scrape. The accepted image contains nine separate visible eggs, although the prompt requested eight. |
| 06 | `06-distance-savanna-monitoring-source.png` | `06-distance-savanna-monitoring.webp` | Exactly two observers use one tripod-mounted optical scope and one notebook on the left; one distant complete female stands across a broad savanna buffer on the right. |

## Scientific and editorial boundaries

- Frames 01, 02, 04 and 05 use the southern regional form: adult males have black body plumage, white wing and tail feathers, and gray neck and legs; adult females are gray-brown. These images do not represent the pink-to-red exposed skin of northern or Masai breeding males, or the brighter blue neck of Somali Ostrich.
- Ostriches have two forward toes per foot and no hind toe. Frame 04 supports the two-toed running story, but its planted foot's smaller outer toe overlaps in perspective; captions must not treat the image as a measured anatomical plate.
- Frame 04 depicts one stride phase. It supplies no speed, acceleration, endurance, chase or typical-gait measurement.
- Nine eggs in frame 05 are a visible reconstruction at one moment. They do not establish final communal-clutch size, egg ownership, number of laying females, incubation capacity or breeding outcome.
- Frame 06 represents observation from a distance. It supplies no location, individual identity, survey protocol, occurrence record, abundance estimate or trend.
- The six scenes contain no readable text, logo, watermark, border, collage, farm fence, road, handling or staged wildlife contact.

## Generation prompts

The blocks below preserve every prompt sent to OpenAI imagegen. Frame 01 used one original generation and one composition edit. Frame 02 used one original generation and one composition edit. Frame 04 used an original draft, a replacement generation and a final local foot edit. Frames 03, 05 and 06 used one generation each.

### 01 · Open-savanna adult male portrait

Initial generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich species-profile cover, original project asset
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of a southern Common Ostrich (Struthio camelus australis) adult male in open southern African savanna.
Scene/backdrop: broad semi-arid open grassland with low dry grasses, scattered low thorn scrub, warm earth and a distant low horizon; generalized natural habitat, no named reserve.
Subject: EXACTLY ONE ADULT MALE BIRD TOTAL. One healthy complete adult male Common Ostrich standing naturally on the right, body angled three-quarters left and head facing left. Show a small flattened head, broad flat bill, large brown eyes, long bare gray neck, large rounded black-feathered body, two small flightless wings with soft white primary feathers, white tail feathers, two long bare gray legs, and two complete feet. EACH FOOT HAS EXACTLY TWO FORWARD-FACING TOES: one large inner toe with a broad blunt nail and one smaller outer toe; no hind toe.
Taxon boundary: Struthio camelus australis, not Somali Ostrich, emu, cassowary, rhea, bustard or domestic hybrid. Use the southern subspecies' gray neck and legs; do not add red, pink or blue-gray northern breeding colors.
Style/medium: museum-quality documentary wildlife photography, realistic feather texture, accurate ratite anatomy, restrained natural color.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Place the complete bird on the right around x=0.68, y=0.52; its full head, neck, both wings, rounded body, both legs, both feet and tail stay inside the central crop-safe band. Bird occupies about 56–60% of image height. Keep at least 16% clear background above the head and below both feet. Preserve calm open savanna and sky across the left 40% for page copy. Low grass must not cover the toes.
Lighting/mood: soft clear morning daylight, natural southern African dry-season color, no dramatic storm or sunset.
Constraints: one bird only; two legs; two feet; exactly two forward toes on each foot; complete anatomy; no text, logo, watermark, border or collage.
Avoid: second bird, chick, egg, nest, person, predator, farm, fence, road, vehicle, building, tracking device, leg band, helmet, casque, wattle, bright blue neck, flight pose, extra wing, extra leg, third toe, hind toe, raptor claw, hoof, fused toes, cropped head, cropped foot, grass covering toes, edge contact, duplicated anatomy or synthetic oversaturation.
```

The first draft was rejected because the bird nearly touched the bottom edge. Accepted composition edit:

```text
Use case: precise-object-edit
Input image: Image 1 is the edit target, the first Common Ostrich cover draft.
Primary request: preserve the same southern African scene, same single adult male Common Ostrich identity, pose, gray neck and legs, black body, white wings and tail, natural lighting, documentary realism and exact 3:2 landscape composition. Reduce only the complete bird by about 24 percent and move it slightly upward and left.
Composition correction: final bird should occupy about 58–62 percent of full image height. Keep its body center near x=0.66, y=0.51. Leave at least 15 percent clear sky above the head, at least 14 percent bare ground below both complete feet and toes, at least 8 percent clear background beyond the tail on the right, and broad open savanna across the left 40 percent.
Invariants: EXACTLY ONE ADULT MALE BIRD TOTAL; small flat head, broad flat bill, large eye, long bare gray neck, rounded black body, white wing and tail feathers, two long gray legs, two complete feet; EACH FOOT HAS EXACTLY TWO FORWARD-FACING TOES, one large inner toe with broad blunt nail and one smaller outer toe; no hind toe. Preserve the same accurate morphology.
Constraints: change only subject scale and placement plus seamless local background fill; no second bird, extra toe, extra leg, farm, fence, road, person, text, logo, watermark, border, crop or edge contact.
```

### 02 · Adult female field marks

Initial generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich gallery image, adult female field marks
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of a southern Common Ostrich (Struthio camelus australis) adult female in open southern African savanna.
Subject: EXACTLY ONE ADULT FEMALE BIRD TOTAL. Show one healthy complete adult female in side-and-slightly-front three-quarter view, facing left. Show a small flattened head, broad flat bill, large brown eye, long bare gray neck, large rounded body covered in even gray-brown feathers, paler gray-brown small wing and tail feathers, two long bare gray legs and two complete feet. EACH FOOT HAS EXACTLY TWO FORWARD-FACING TOES: one large inner toe with a broad blunt nail and one smaller outer toe; no hind toe. Her plumage must remain gray-brown, not the black-and-white adult male pattern.
Scene/backdrop: semi-arid open grassland with low dry grass, scattered low thorn scrub and a soft distant horizon; generalized natural habitat.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Place the full bird around x=0.58, y=0.52, occupying no more than 55% of frame height. Entire head, neck, wings, rounded body, both legs, both feet and tail remain inside frame with generous margins. Low grass must not cover the toes.
Lighting/mood: clear diffuse morning light, documentary wildlife photography, restrained natural color and accurate ratite anatomy.
Taxon boundary: Struthio camelus australis, not Somali Ostrich, emu, cassowary, rhea, bustard or juvenile male.
Constraints: exactly one bird; two legs; two feet; exactly two forward toes per foot; no text, logo, watermark, border or collage.
Avoid: black male body, white male wings, red or pink neck, bright blue neck, second bird, chick, egg, nest, person, farm, fence, road, vehicle, building, casque, wattle, extra wing, extra leg, third toe, hind toe, talon, hoof, fused toes, cropped anatomy, edge contact or synthetic oversaturation.
```

The first draft was rejected because the bird occupied most of the frame and left too little crop margin. Accepted composition edit:

```text
Use case: precise-object-edit
Input image: Image 1 is the edit target, the first adult female Common Ostrich field-marks draft.
Primary request: preserve the same single adult female southern Common Ostrich, her gray-brown plumage, gray neck and legs, pose, accurate morphology, savanna scene, lighting and documentary realism. Reduce only the complete bird by about 27 percent and reposition it slightly toward the center.
Composition correction: final bird should occupy about 55–60 percent of full image height, centered around x=0.58, y=0.52. Leave at least 16 percent clear sky above the head, at least 14 percent clear ground below both complete feet, and generous side margins. Preserve environmental context on all sides. Low grass must not cover either foot.
Invariants: EXACTLY ONE ADULT FEMALE BIRD TOTAL; gray-brown body and paler gray-brown wing and tail feathers, long bare gray neck, two long gray legs, two complete feet; each foot retains exactly two forward-facing toes, one large inner toe and one smaller outer toe; no hind toe.
Constraints: change only subject scale and placement plus seamless background fill; no black-and-white male plumage, second bird, extra leg, extra toe, farm, fence, road, person, text, logo, watermark, border, cropping or edge contact.
```

### 03 · Semi-arid savanna habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich gallery image, range habitat
Primary request: create a scientifically grounded photorealistic wide environmental portrait of dry African savanna and shrubland used by Common Ostrich (Struthio camelus).
Scene/backdrop: semi-arid southern African plain with broad open ground, short dry grasses, patches of bare warm soil, scattered low thorn scrub, distant low ridges and a wide pale sky. Habitat must carry at least 88% of the visual weight. No named park, landmark or location.
Subject: EXACTLY ONE BIRD TOTAL. One small but fully visible adult female southern Common Ostrich stands naturally in the middle-right distance around x=0.68, y=0.57, occupying only about 13–15% of frame height. Preserve the complete silhouette: small head, long neck, rounded gray-brown body, two long legs and both feet. The bird is an environmental scale cue, not a close identification plate.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Wide layered habitat view with unobstructed open routes between grass and shrub patches. Keep the whole bird safely inside frame.
Lighting/mood: soft dry-season morning daylight, realistic atmospheric depth, restrained earth colors, documentary landscape photography.
Scientific boundary: this is a generalized habitat reconstruction, not a mapped occurrence, range limit, carrying-capacity estimate or claim that all Common Ostriches occupy identical habitat.
Constraints: exactly one bird and no other animal; no text, map, pin, route, logo, watermark, border or collage.
Avoid: forest, rainforest, tall closed grass hiding the bird, dense woodland, desert dunes, farm, fence, road, building, vehicle, person, livestock, predator, second ostrich, flock, egg, nest, cropped bird, edge contact, fantasy sunset or oversaturation.
```

### 04 · Two-toed running stride

Initial generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich gallery image, running anatomy and two-toed feet
Primary request: create one scientifically grounded photorealistic high-speed wildlife reconstruction of a southern Common Ostrich (Struthio camelus australis) adult male running laterally across firm open savanna ground.
Subject: EXACTLY ONE BIRD TOTAL; TWO LEGS; TWO FEET; EXACTLY TWO FORWARD TOES ON EACH FOOT. Show one complete adult male in a credible running stride from a low side view, moving left to right. One foot bears weight on firm ground and one foot is lifted, with both complete feet and all four toes visible, separated and sharp. Each foot has one large inner toe with a broad blunt nail and one smaller outer toe; no hind toe. Show a small flat head, broad flat bill, large eye, long bare gray neck, rounded black body, white soft wing and tail feathers, two long gray legs. Let the small wings open only slightly for balance, never as a flight pose.
Scene/backdrop: open dry southern African savanna with very short sparse grass and a soft distant scrub horizon. No grass crosses either foot.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Whole bird around x=0.52, y=0.53, occupying about 64–70% of frame width. Leave at least 10% margin around head, tail, both legs and both feet.
Lighting/mood: bright natural daylight, fast shutter, crisp leg and toe detail, restrained documentary wildlife photography. No artificial speed lines.
Scientific boundary: the running pose demonstrates stride and foot structure; it does not measure speed or depict a chase.
Taxon boundary: Struthio camelus australis, not Somali Ostrich, emu, cassowary, rhea, bustard or horse.
Constraints: exactly one bird; exactly two anatomical legs and two feet; exactly two forward toes per foot; complete anatomy; no text, logo, watermark, border or collage.
Avoid: predator, pursuit, kick, injury, dust hiding feet, motion blur on legs or toes, flying, third toe, hind toe, talons, hoof, fused toes, extra leg, duplicated foot, extra wing, cropped head, cropped tail, cropped feet, edge contact, second bird, person, fence, road, vehicle, farm or malformed joints.
```

The first draft was rejected because both feet were airborne. Replacement generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich gallery image, running stride and two-toed foot anatomy, replacement variant
Primary request: create one scientifically grounded photorealistic fast-shutter side-view reconstruction of a southern Common Ostrich (Struthio camelus australis) adult male running across flat, firm, bare savanna ground.
Hard count: EXACTLY ONE BIRD TOTAL. EXACTLY TWO LEGS TOTAL. EXACTLY TWO FEET TOTAL. EACH FOOT HAS EXACTLY TWO FORWARD-FACING TOES TOTAL: one very large inner toe with a broad blunt nail and one clearly separate smaller outer toe. NO HIND TOE.
Pose: the complete adult male moves left to right in a credible mid-stride. The front foot is planted flat on the ground and visibly bearing weight, with both toes spread and fully readable. The rear foot is lifted slightly behind, seen in clean profile, with its two separate toes also fully readable. Keep both legs on anatomically plausible joint axes. Show small flat head, broad bill, large eye, long bare gray neck, rounded black feathered body, soft white wing and tail feathers. Small wings open only a little for balance.
Scene/backdrop: level open southern African savanna with firm bare warm soil and only very short sparse grass well behind the feet. No dust cloud or vegetation crosses either foot.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Whole bird around x=0.52, y=0.53 and about 62–68% of frame width. Leave at least 12% margin beyond bill, head, tail and both feet. Both feet occupy a sharp readable lower-middle area, never near an edge.
Lighting/mood: clear natural daylight, fast shutter, crisp leg and toe detail, restrained documentary wildlife photography.
Scientific boundary: this one pose demonstrates stride and visible two-toed anatomy; it does not measure speed, show a chase or prove a typical gait phase.
Taxon boundary: Struthio camelus australis, not Somali Ostrich, emu, cassowary, rhea, bustard, horse or dinosaur.
Constraints: exactly one complete bird; two anatomical legs; two anatomical feet; two forward toes per foot; no text, logo, watermark, border or collage.
Avoid: both feet airborne, both feet planted, third toe, hind toe, raptor talon, hoof, fused toes, extra leg, duplicated foot, malformed joint, motion blur on legs or toes, dust hiding feet, predator, pursuit, kick, injury, flight pose, second bird, person, farm, fence, road, vehicle, cropped anatomy or edge contact.
```

The replacement established a planted foot, but its smaller outer toe overlapped. Final local edit prompt:

```text
Use case: precise-object-edit
Input image: Image 1 is the edit target, the second running Common Ostrich draft.
Primary request: preserve the same complete adult male Common Ostrich, running pose, body, head, neck, plumage, legs, lighting, ground, background, camera position, documentary realism and 3:2 composition. Correct only the toe visibility on the planted front foot at the lower right.
Foot correction: the planted front foot must show exactly two clearly separate forward-facing toes in the same plane: one large inner weight-bearing toe with a broad blunt nail, and one smaller outer toe with its own smaller blunt nail positioned beside it. Both originate naturally from the same two-toed foot. Remove any fused appearance. Keep the rear lifted foot unchanged if it already shows exactly two toes.
Invariants: EXACTLY ONE BIRD; TWO LEGS; TWO FEET; EXACTLY TWO FORWARD TOES ON EACH FOOT; no hind toe. Preserve the front foot flat on the ground and the rear foot lifted, with believable joints and no dust or grass obscuring either foot.
Constraints: change only the minimum local front-foot anatomy needed; no third toe, hind toe, talon, hoof, fusion, extra leg, duplicated foot, motion blur, new object, second bird, text, logo, watermark, border, crop or edge contact.
```

The accepted edit retained some perspective overlap on the smaller outer toe; the acceptance table records that limit.

### 05 · Communal ground nest and eggs

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich gallery image, communal ground nest
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of a southern Common Ostrich (Struthio camelus australis) adult female beside a shared ground-nest scrape.
Scene/backdrop: open semi-arid southern African savanna with bare sandy soil, scattered small stones, sparse very short dry grass and low scrub far behind; generalized natural breeding habitat.
Subject and nest: EXACTLY ONE BIRD, ONE SHALLOW SCRAPE AND EIGHT EGGS TOTAL. One complete healthy adult female stands calmly on the right, body angled toward the nest. She has a small flat head, broad bill, long bare gray neck, rounded gray-brown body, paler wing and tail feathers, two long gray legs and two complete two-toed feet. On the left-lower side is one broad shallow bare-soil scrape containing exactly eight separate, fully visible, intact cream-white ostrich eggs. Every egg must be visible and countable; no egg overlaps or hides another. The scrape is shallow and minimally lined, not a twig cup.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Adult around x=0.68, y=0.48; scrape and eggs around x=0.39, y=0.66. Entire bird, both feet, tail and all eight eggs remain inside frame with generous margins. Low grass does not cover toes or eggs.
Lighting/mood: soft clear daylight, calm documentary wildlife photography, accurate scale and restrained natural color.
Scientific boundary: eight visible eggs illustrate one possible moment in a communal nesting system. The image does not establish final communal clutch size, number of laying females, egg ownership, incubation outcome or a fixed species clutch.
Constraints: exactly one adult female, one scrape and exactly eight eggs; no text, logo, watermark, border or collage.
Avoid: ninth egg, hidden egg, broken egg, chick, hatchling, male, second bird, flock, elaborate twig nest, tree nest, incubator, person, research marker, tag, fence, road, vehicle, building, predator, farm, cropped feet, cropped tail, third toe, edge contact or malformed anatomy.
```

The accepted image contains nine visible eggs. Product copy and the acceptance record use nine rather than repeating the requested count.

### 06 · Distance savanna monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Ostrich gallery image, low-disturbance field monitoring
Primary request: create one scientifically grounded photorealistic conservation-monitoring reconstruction for Common Ostrich (Struthio camelus) in open African savanna.
Scene/backdrop: broad semi-arid savanna with short dry grass, patches of bare ground, scattered low thorn scrub and a distant low ridge. A wide uninterrupted open-land buffer separates observers from the bird and dominates the frame.
Human subjects: on the far-left foreground, EXACTLY TWO ADULT FIELD OBSERVERS TOTAL in muted unbranded outdoor clothing. One uses EXACTLY ONE SPOTTING SCOPE ON EXACTLY ONE TRIPOD. The second records in EXACTLY ONE PLAIN NOTEBOOK. Keep faces small and unidentifiable; both remain stationary.
Bird subject: on the distant mid-right, EXACTLY ONE COMPLETE ADULT FEMALE COMMON OSTRICH TOTAL standing naturally in open habitat. Show its small head, long gray neck, rounded gray-brown body, two long legs and both feet. No nest, egg or chick is visible.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Observers around x=0.18, y=0.65; ostrich around x=0.78, y=0.54; broad empty savanna buffer through the center. All people, equipment and the whole bird fit inside frame.
Lighting/mood: clear diffuse morning light, restrained natural color, documentary field-science realism.
Scientific and ethical boundary: this represents observation from a distance, not a named survey, occurrence record, individual identification, abundance estimate or population trend.
Constraints: EXACTLY ONE BIRD, TWO PEOPLE, ONE SCOPE, ONE TRIPOD AND ONE NOTEBOOK TOTAL; no other animal; no text, logo, watermark, border or collage.
Avoid: third person, binoculars, camera, telephoto lens, second scope, drone, vehicle, road, hide, blind, tent, bait, food, trap, net, cage, handling, touching, chasing, close approach, second bird, flock, egg, chick, nest, livestock, predator, uniform patch, sign, building, fence, cropped equipment or malformed anatomy.
```

## Static and visual validation

- All six TinyPNG-compressed sources decode as opaque 1536 × 1024, 8-bit indexed-color PNG files.
- All six runtime assets decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- The six imagegen PNG drafts totaled 17,909,172 bytes. TinyPNG reduced them to 5,668,644 bytes, a 68.3 percent reduction.
- Compressed source sizes are 823,419; 957,017; 930,206; 862,916; 1,165,021; and 930,065 bytes in frame order.
- Runtime WebP sizes are 180,316; 193,988; 251,166; 195,588; 383,906; and 229,556 bytes in frame order, totaling 1,434,520 bytes. WebP conversion reduced the compressed-source total by 74.7 percent.
- The production build copied all six runtime assets to `dist/images/species/african-ostrich/`; each public/dist pair has the same SHA-256 digest.
- Original-resolution inspection covered bird, observer, scope, tripod, notebook and egg counts; complete anatomy; cover copy space; running-foot placement; the shallow scrape; the monitoring buffer; and absence of text or branding.
- Runtime inspection after conversion found no new cropping, subjects, visible text, logos, watermarks, borders or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
