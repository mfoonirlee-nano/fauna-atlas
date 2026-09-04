# Oilbird image set

OpenAI's built-in image generator created these six original project images across 2026-09-03 and 2026-09-04 for the Fauna Atlas *Steatornis caripensis* profile. The set covers a cave-entrance portrait, lateral morphology, cave flight, nocturnal fruit-taking, a cave-ledge aggregation, and one feathering chick with an adult. Each frame is a scientifically bounded reconstruction, not a record of a named bird, locality, colony, feeding event, breeding attempt, or tracked movement.

The verbatim image-generation request log was not retained, and the PNG files contain no embedded prompt text. The prompt blocks below are normalized post-session records of the constraints that were used and of the accepted pixels. They are not presented as byte-for-byte call transcripts. Generator output IDs, selection decisions, edit reasons, file properties, and accepted-file hashes remain independently checkable.

- Base generation mode: `photorealistic-natural`
- Targeted edit mode: `precise-object-edit`
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/oilbird/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: sources are opaque 8-bit indexed-color sRGB PNGs; runtime files are opaque single-frame lossy VP8 WebPs
- Source compression: `npm run compress -- <six source PNGs>`
- Runtime conversion: `npm run convert:webp -- <six source PNGs>`; the repository script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成科学情景重建`

## Files and accepted observations

| No. | Source file | Runtime file | Purpose and accepted observation |
| --- | --- | --- | --- |
| 01 | `01-cave-entrance-perch-cover-source.png` | `01-cave-entrance-perch-cover.webp` | Cover portrait of exactly one complete, small Oilbird on a right-side cave-mouth ledge at dusk. The rufous-brown, white-spotted bird and its folded wings and long tail remain inside the source; the left 40% is dark cave wall. The two feet overlap at this scale and are not independently separable. |
| 02 | `02-spotted-plumage-profile-source.png` | `02-spotted-plumage-profile.webp` | Morphology view of exactly one complete bird on a cave ledge. The hooked bill, large eye, forward facial bristles, white-spotted brown plumage, short legs, folded wings, and broad long tail are readable. |
| 03 | `03-cave-echolocation-flight-source.png` | `03-cave-echolocation-flight.webp` | Exactly one complete bird flies through a dim cave passage with both feathered wings and the fanned tail inside frame. The open bill is visible; no sonar ring, sound ray, prey, bat, or second bird appears. The still image does not establish that a click was emitted. |
| 04 | `04-nocturnal-fruit-foraging-source.png` | `04-nocturnal-fruit-foraging.webp` | Exactly one complete bird maneuvers beside a fruiting branch at night. Its bill touches one intact dark fruit, both wings, both feet, tail, and separated feather tips remain well clear of the canvas edges, and no fruit pulp, broken seed, insect, or second bird appears. |
| 05 | `05-cave-ledge-colony-source.png` | `05-cave-ledge-colony.webp` | Exactly six separate, countable, adult-plumaged Oilbirds occupy different natural ledges in one cave chamber. No egg, chick, nest, visitor, lamp, or partial seventh bird appears. The chosen count illustrates aggregation and does not estimate colony size. |
| 06 | `06-adult-and-feathering-chick-source.png` | `06-adult-and-feathering-chick.webp` | Exactly one uncropped adult-plumaged bird stands beside one uncropped, plump feathering chick on a broad cave ledge. Remnant down and developing brown spotted feathers distinguish the chick; the resting chick's feet are hidden under its body, and the dark substrate reads as plant-derived nest material rather than a guano mound. |

Source and WebP copies were inspected at original resolution. Lossy conversion adds mild fine-texture smoothing in dark rock and plumage but does not change counts, contacts, crops, or scene meaning.

## Product text

| No. | Title | Alt | Caption |
| --- | --- | --- | --- |
| 01 | 暮色洞口的油鸱 | 暮色中的湿润森林洞口，一只完整的褐色白斑油鸱停在画面右侧岩台，钩喙、折叠双翼和长尾均在画内，足部轮廓在岩台上重叠，左侧保留大面积暗色岩壁 | 油鸱以洞穴作为繁殖与群栖核心；画面重建通用湿润森林洞口，不代表具体国家、洞穴、个体或繁殖状态。 |
| 02 | 钩喙、口须与白斑羽衣 | 一只完整油鸱侧身蹲栖在洞内岩台，褐色白斑羽衣、大眼、钩喙、前伸口须、短腿、折叠双翼和长尾清楚可见 | 油鸱的宽口裂、口须、短腿、白斑翼羽和长尾可辅助识别；画面不据羽色判定性别。 |
| 03 | 幽暗洞道里的飞行 | 一只褐色白斑油鸱在昏暗洞道中展翼飞行，双翼与扇开的长尾完整，左后方可见微弱冷色洞口光 | 油鸱会在黑暗洞穴中使用点击回声定位；静态重建只能表现飞行环境，不能证明这只鸟正在发声。 |
| 04 | 森林树冠前的一口整果 | 夜间湿润森林树冠中，一只完整油鸱在深色卵形果实枝旁短暂机动，喙正接触一枚完整果实，双翼、双足和长尾均可见 | 油鸱会短暂悬停或掠过果枝并整果吞食；果枝只代表常见富脂森林果实，不作植物种鉴定。 |
| 05 | 洞穴岩台上的群栖 | 昏暗宽阔洞穴内，六只褐色白斑油鸱分别停在不同天然岩台上，每只鸟的头、身体和尾部均可区分 | 油鸱可在洞穴形成群栖和繁殖聚集；六只是为画面清点而设的重建数量，不代表典型或实际群体规模。 |
| 06 | 羽衣渐成的洞穴幼鸟 | 昏暗洞穴宽岩台上，一只完整成鸟站在一只体型饱满、仍带残余绒羽且正长出褐色白斑羽毛的幼鸟旁 | 油鸱幼鸟在洞穴岩台上经历漫长发育；外观不能给这只幼鸟判定精确日龄、体重、亲缘或存活结局。 |

The accepted cover uses `focalPoint: { x: 0.61, y: 0.48 }`. The cover schema stores only its image, alt, focal point, and credit; the title and caption above remain asset documentation.

## Scientific and editorial boundaries

The source IDs below resolve in the [Oilbird research brief](../../../../../docs/research/oilbird-profile.md), whose source registry supplies the evidence behind these constraints.

- Shared morphology follows the field description and eye study: rufous-brown plumage; conspicuous pale spots, especially on wing coverts and outer secondaries; a large dark eye; strongly hooked upper bill; very wide gape; forward rictal bristles; short legs; broad wings; and a long, broad, graduated tail. Do not substitute an owl facial disc, nightjar barring, bat membrane, parrot bill, or heavy raptor talons. [S13][S14]
- Plumage cannot establish sex in any frame. The images also cannot establish age except for the deliberately immature appearance in frame 06, individual identity, subspecies, measurements, mass, locality, or conservation status.
- Frame 01 joins a generic humid forest to a generic cave mouth. It does not show that the bird uses only cave day-roosts. The overlapping feet remain a visible limitation of this small hero composition. [S07][S09][S14]
- Frame 03 illustrates dark-cave flight. Oilbirds use click-based echolocation in caves, but an open bill in one still cannot establish clicking, burst size, frequency, hearing, or navigation performance. The image deliberately omits graphic sonar and does not imply echolocation while finding fruit. [S10][S11][S12]
- Frame 04 shows a short fruit-taking maneuver and whole-fruit contact. The generic dark fruit is not identified to plant species, and the pixels cannot prove seed swallowing, dispersal distance, nutritional content, or sustained hummingbird-like hovering. [S09][S15]
- Frame 05 shows a representative ledge aggregation. Six birds are a controlled visual count, not a typical colony size, census, density, breeding status, or site record. [S05][S14]
- Frame 06 shows one plausible late nestling stage. It does not establish that the adult is a parent, determine the chick's sex, day, mass, fledging date, or survival, or visualize the reported mid-development mass excess as a measurement. Dark plant material and seed-like debris are not a scale sample. [S14]
- No frame contains visible text, labels, arrows, scale bars, map lines, sound-wave graphics, artificial lamps, bands, tags, people, logos, signatures, borders, or watermarks.

## Candidate selection and edit history

The accepted generator outputs remain under `/Users/chris.li/.codex/generated_images/01a067ea-f4e5-7262-ba53-1c6afb188336/`. The stable project filenames above identify the compressed copies.

| Call | Generator output | Decision |
| --- | --- | --- |
| 01 base | `exec-b3e33bc1-e81c-4c15-af57-b5203ded1a60.png` | Rejected for the hero because the bird was too large to remain complete through the supported wide crops. |
| 01 reframe 1 | `exec-09a8d48f-05fd-4857-bc09-11cb0a54283a.png` | Reduced the bird by about 22%; rejected because the remaining crop reserve was still insufficient at the ultrawide endpoint checks. |
| 01 reframe 2 | `exec-14b669ff-7cc1-4967-95d0-de461e2f81b5.png` | Accepted after reducing the complete bird to about 62% of its pass-1 size while retaining the right-side ledge, dusk forest, and quiet cave wall. |
| 02 base | `exec-d6359ddf-3c39-4cc2-987d-a51641a5f209.png` | First candidate accepted after count, crop, morphology, and excluded-element review. |
| 03 base | `exec-49cec1dc-7247-431f-860a-d0234d011ef9.png` | First candidate accepted as a one-bird cave-flight scene; the editorial boundary was narrowed so the open bill does not claim an observed click. |
| 04 base | `exec-1b879b93-44d2-4e34-97c2-40c4437c5474.png` | Rejected because the left wing lay too close to the image edge. |
| 04 reframe | `exec-ed6c4160-33ba-40af-81b8-7951ecbee505.png` | Accepted after shrinking the whole bird by about 18%, moving it toward the middle, preserving bill-to-fruit contact, and giving wings, feet, tail, and feather tips more than the requested approximate 90-pixel edge reserve. |
| 05 base | `exec-fb87c4b1-e3dd-429b-bbe8-6b5a0a5e1c3d.png` | First candidate accepted with exactly six separated, countable birds and no seventh partial bird. |
| 06 base | `exec-b6b9ffc6-b1c5-4f2a-a603-072d325413d1.png` | First candidate accepted with one adult-plumaged bird and one distinct feathering chick. |

## Normalized final prompt set

Each base prompt used the same shared morphology and evidence limits. The correction blocks record the two accepted reframe chains. Their wording is normalized because the verbatim call log is unavailable.

### 01 · Cave-entrance perch cover

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Oilbird cover image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original ultra-realistic natural-history photograph at dusk at the mouth of a humid Neotropical limestone cave. Show exactly one complete adult-plumaged Oilbird, Steatornis caripensis, perched naturally on a small rough rock ledge in the right-middle of the frame.
Subject: Rich rufous-brown plumage with distinct small white spots on the wing coverts and outer secondaries; large dark eye with a small natural catchlight; strongly hooked upper bill; very wide gape line; long forward-pointing rictal bristles; short bare legs; folded broad wings; complete broad graduated tail. Do not assign sex.
Composition: Keep the bird modest in frame and fully visible from bill tip and crown through folded wing tips, both legs and feet, and tail tip. Aim for its visual center at x=0.61, y=0.48. Leave real cave or forest background around the entire outline. Reserve the left 40–45% as dark, low-contrast cave wall for interface copy. Place softly blurred blue-hour rainforest beyond the cave at far right.
Lighting: Natural dim reflected dusk light, restrained exposure, realistic feather and rock texture, no direct lamp or flash.
Evidence boundary: Generic cave and forest, not a named locality, individual, sex, nest, or breeding record.
Avoid: owl facial disc, ear tufts, raptor talons, bat wings, insects, extra birds, eggs, nest, visible sound waves, text, logo, watermark, border, cropped anatomy, or CGI gloss.
```

Accepted hero-safe corrections:

```text
Pass 1: Preserve the same single Oilbird, cave-mouth ledge, dusk forest, lighting, anatomy, and dark left background. Scale the entire bird down by about 22% and retain real background around the bill, crown, folded wings, feet, and tail. Do not add or remove anatomy or scene elements.

Pass 2: Preserve the pass-1 scene and scale the complete bird to about 62% of its pass-1 size. Keep it on the same right-side rock ledge and target a complete-subject safety box near x=855–1025, y=335–595. Retain the dark quiet left side, blue-hour forest, species markings, and full anatomy. Add no bird, nest, text, border, logo, or watermark.
```

### 02 · Spotted-plumage profile

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Oilbird morphology gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original realistic scientific natural-history portrait of exactly one complete adult-plumaged Oilbird, Steatornis caripensis, crouched horizontally on a broad dry limestone ledge inside a dim cave in a lateral three-quarter view.
Subject: Show rufous-brown plumage, crisp small white spots concentrated on wing coverts and outer secondaries, a large dark eye, strongly hooked upper bill, exceptionally wide gape line, forward rictal bristles, short bare legs, folded broad wings, and a long broad graduated tail. Do not assign sex.
Composition: Keep the entire bill, crown, wings, both feet, and tail inside generous background margins. Use a simple cave wall and ledge so the silhouette and plumage stay readable; include no scale bar.
Lighting: Soft indirect side light from a distant cave opening, restrained warm-brown color, realistic feather and limestone texture.
Evidence boundary: Identification-oriented reconstruction, not a specimen, calibrated measurement, age determination, or locality record.
Avoid: owl facial disc, ear tufts, parrot bill, giant raptor feet, branch perch, extra animals, labels, measurement marks, text, watermark, cropped tail, or cropped feet.
```

### 03 · Cave flight without visible sonar

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Oilbird cave-flight gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original ultra-realistic low-light wildlife photograph inside a broad humid Neotropical limestone cave passage. Show exactly one complete Oilbird flying across the chamber with its bill naturally open.
Subject: Brown-rufous white-spotted plumage, large dark eye, hooked bill and wide gape, two anatomically normal broad feathered wings with separated primary tips, short feet tucked naturally, and one complete broad fanned graduated tail.
Composition: Keep both complete wing tips, bill, feet region, and tail inside frame with rock background around every outer feather. Place a faint cool cave-mouth glow in the far-left depth and keep the right wall warm and dark.
Lighting: Plausible reflected cave light, visible damp rock texture, restrained motion with no blur that hides anatomy.
Evidence boundary: The scene illustrates the environment in which click echolocation is used. Do not depict or claim an emitted click, measured acoustic field, or fruit-finding event.
Avoid: graphic sonar rings, glowing sound waves, radar grids, bats, insects, prey capture, owl face, artificial lamp, extra bird, text, watermark, clipped wing, or clipped tail.
```

### 04 · Nocturnal fruit foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Oilbird feeding gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original ultra-realistic nocturnal rainforest photograph of exactly one complete Oilbird briefly maneuvering beside a fruiting canopy branch in a humid Neotropical forest. Keep the hooked bill in contact with one intact dark purple-brown ovoid fruit as the bird takes it whole.
Subject: Rich rufous-brown plumage with distinct white wing spots; large dark eye; forward rictal bristles; both broad feathered wings in a slow maneuvering beat; two short feet; complete long graduated tail.
Plant: A small cluster of generic dark oily fruits with plausible glossy leaves. Do not identify or imply a plant species.
Composition: Keep the complete bird near the middle with bill, both wing tips, every outer feather, both feet, and tail at least about 90 source pixels from all canvas edges. Preserve clear bill-to-fruit contact and enough dark forest around the bird.
Lighting: Natural low-light blue-hour or moonlit color with restrained fill, no direct flash, realistic wet leaves and feather detail.
Evidence boundary: A brief fruit-taking maneuver, not sustained hovering, prey capture, proof of swallowing, nutrient measurement, or seed-dispersal distance.
Avoid: insects, torn pulp, cracked seed, hummingbird proportions, bat wings, sonar graphics, extra bird, text, watermark, cropped anatomy, or fantasy glow.
```

Accepted targeted correction:

```text
Use case: precise-object-edit
Primary request: Preserve the same one-bird nocturnal feeding scene, fruit cluster, foliage, lighting, anatomy, and exact bill-to-fruit contact. Scale the entire bird down by about 18% and move it toward the middle of the 1536 × 1024 canvas. Keep both complete wings, tail, both feet, and every visible feather tip at least approximately 90 pixels from the canvas edges.
Constraints: Exactly one coherent bird and one contacted intact fruit; retain the existing pose, direction, white-spotted brown plumage, forest depth, and complete anatomy.
Avoid: detaching the bill from the fruit, adding a bird or limb, hiding a foot, clipping a feather, changing the plant into a named species, text, logo, border, or watermark.
```

### 05 · Cave-ledge aggregation

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Oilbird social-roost gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original realistic natural-history photograph inside one broad, dim, humid limestone cave chamber. Show exactly six separate, countable, adult-plumaged Oilbirds, Steatornis caripensis, resting naturally on six positions across layered rock ledges.
Subjects: Each bird has one head and body, rufous-brown plumage with small white wing spots, a large dark eye, hooked bill, short legs, folded wings, and a complete long tail. Keep open space or rock separation between silhouettes; do not clone poses.
Composition: Wide environmental view with ledges and cave depth dominant. Keep all six heads, bodies, and tail tips in frame. Do not include a partial or distant seventh bird.
Lighting: Soft indirect cave-mouth light, believable shadow falloff, natural limestone texture, no flashlight beam.
Evidence boundary: A generic aggregation scene. Six is a visual count, not a claim about normal colony size, abundance, sex ratio, pair bonds, or breeding status.
Avoid: egg, chick, nest, guano spectacle, crowd merging, duplicated bird, bat, visitor, hunter, lamp, tag, text, logo, watermark, border, or collage.
```

### 06 · Adult and feathering chick

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Oilbird development gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original ultra-realistic natural-history photograph on a broad protected ledge inside a dim humid limestone cave. Show exactly one complete adult-plumaged Oilbird standing beside exactly one complete, large, well-fed feathering chick.
Adult-plumaged bird: Rufous-brown plumage with white wing spots, large dark eye, hooked bill, forward rictal bristles, short legs, folded wings, and a full graduated tail. Do not assign sex or parentage.
Chick: Plump and clearly immature, with remnant shaggy gray-brown down around the head and body plus developing brown spotted wing and tail feathers. It is neither newly hatched nor fully adult in appearance.
Nest substrate: A shallow layer of dark regurgitated plant material and seed-like debris on a natural cave ledge, not a guano mound. Keep the ledge edge safe and readable.
Composition: Both birds remain uncropped inside generous margins. Keep each bill, body, folded-wing outline, and tail readable; allow the resting chick's feet to tuck naturally beneath its body rather than inventing exposed anatomy.
Lighting: Gentle indirect cave-mouth light, realistic feather, down, plant material, and limestone texture; no direct lamp.
Evidence boundary: One plausible developmental stage, not a measurement of age, mass, fledging time, relationship, or survival.
Avoid: eggs, extra chick, second adult, newly hatched naked chick, guano pile, oil extraction, hunter, visitor, tag, blood, label, text, logo, watermark, or cropped bird.
```

## Cover-rule geometry and reframe checks

Original-resolution review measured frame 01's complete visible bird boundary at approximately `left=870, top=374, right=1008, bottom=612` source pixels. The box includes the bill tip, crown, folded-wing outline, overlapping feet region, and tail tip. Its center is `(0.611, 0.481)`, so it meets the rule that the subject center must sit at or beyond 60% of source width. Real cave or forest background surrounds the box, and the left 40% contains no animal or bright opening.

The final pixels do not exactly fill the pass-2 target safety box of `x=855–1025, y=335–595`: the accepted bird is about 32 pixels narrower, its top sits about 39 pixels lower, and its tail extends about 17 pixels below that target. Its measured center still matches the original `x=0.61, y=0.48` composition target. Both feet overlap on the small ledge, so the source passes outer-boundary clearance but does not fully satisfy the stronger prompt goal that two feet be independently readable.

The table records the minimum of the top, right, bottom, and left margins for the measured full-subject box after `object-fit: cover`, `object-position: 61% 48%`, and each current carousel transform. Values are CSS pixels; every required value exceeds 24 pixels.

| Viewport | Settled | Initial `scale(1.04)` | Enter forward `+5%, 1.025` | Leave forward `-4%, 1.015` | Enter backward `-5%, 1.025` | Leave backward `+4%, 1.015` |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 320 × 760 | 72.1 | 68.6 | 53.9 | 83.6 | 85.9 | 58.0 |
| 390 × 760 | 99.4 | 95.6 | 77.5 | 113.5 | 116.5 | 82.3 |
| 1366 × 768 | 264.1 | 259.3 | 261.1 | 262.3 | 261.1 | 262.3 |
| 1920 × 900 | 285.1 | 278.5 | 281.0 | 282.6 | 281.0 | 282.6 |
| 2560 × 900 | 236.1 | 227.6 | 230.8 | 232.9 | 230.8 | 232.9 |
| 3840 × 900 | 138.2 | 125.7 | 130.4 | 133.5 | 130.4 | 133.5 |

A slightly larger regression box, `left=870, top=380, right=1010, bottom=615`, produces a global minimum of about 52.4 CSS pixels and therefore keeps reserve for measurement uncertainty. Static raster inspection cannot by itself prove non-overlap with live title or carousel-panel glyph boxes; that composed-layout requirement belongs in the matching full-subject carousel regression when the species entry is integrated.

Frame 04's accepted bird occupies an approximate visual boundary of `x=242–1344, y=151–775`. Its closest anatomical edge is therefore about 151 source pixels from the canvas, above the requested approximate 90-pixel reserve. The bill still visibly touches one intact fruit. These bounds, like the cover box, come from original-resolution visual inspection rather than automated semantic segmentation.

## Processing and static validation

- The nine imagegen outputs in the selection table total 21,067,889 bytes. The six accepted uncompressed drafts alone total 14,645,802 bytes.
- TinyPNG reduced the six accepted source copies to 5,954,271 bytes, or 5,814.7 KiB, a 59.3% reduction from the accepted generator drafts.
- `cwebp -q 82 -m 6 -mt` produced six runtime files totaling 936,662 bytes, or 914.7 KiB, an 84.3% reduction from the compressed sources.
- ImageMagick and `file` decode all six sources as opaque 1536 × 1024, 8-bit indexed-color sRGB PNGs and all six runtime files as opaque 1536 × 1024, single-frame lossy VP8 WebPs.
- Source and runtime basenames form six one-to-one pairs after removing `-source`. The PNG set contains six unique hashes and the WebP set contains six unique hashes.
- Original-resolution inspection checked subject counts, full outer anatomy, white-spotted rufous plumage, cave and forest continuity, bill-to-fruit contact, frame 04 edge reserve, frame 05's six countable birds, frame 06's distinct chick, and the absence of text and branding.
- Source and runtime copies show the same composition and semantic content. No GUI or headless browser was used for verification.

## Accepted asset hashes

Hashes were calculated from the current repository files with `shasum -a 256`.

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `1a5dd5f13959940cb9bad8d7233e494e4c64fb33486db8516229630983600d79` | `8dfb97785b0950e8322632d5b5996a28d0a36587d6a7a7df7533298bb470d511` |
| 02 | `7bb29775854f3339ff1e6412b9723cfe171dd0a022292e8fa1659bdbde32459e` | `d430ebd8d022bbd4a51fafbe4bb9fddbd62520cc999c2a0c105e96f87883f093` |
| 03 | `062c0b70fa5b329d28c45820d2b5ba0a255df655d76dff21c285faac382afc69` | `c40bf0bffe6647aa74b9dd693007cc0c1fde2d2e0082af66135a08d6d9b84668` |
| 04 | `7ede4da6bb8170e07fb62118c8046ebcd06a79326052997dead97fcb1b82015e` | `25821238ae1b7f12a5a68750ff690d5e776437e9534163be7ca42993de7adc39` |
| 05 | `2ded013eec5b38be615480a8731344b8b3cb0299f6aad38413aac886a9eff60e` | `4ae5e0309bbf452c7756d33a98f7085611431cf3dd5a30839284043c3641182b` |
| 06 | `17afd839be976e8626e61df9a27f8b99e6fba26c3d71960de72b88bed288e637` | `ec0badc8ba30819df36b38565349a9768085e7dd6106dc5aaabd2276eb0b2978` |
