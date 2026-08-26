# Green Peafowl image set

OpenAI imagegen created these six original project images on 2026-08-26 for the Fauna Atlas *Pavo muticus* profile. The images reconstruct representative morphology, habitat, display, nesting and field-observation scenes. They do not document a named bird, nest, survey site, protected area or field team.

- Generation mode: OpenAI imagegen, `photorealistic-natural`
- Research brief: [`docs/research/green-peafowl-profile.md`](../../../../../docs/research/green-peafowl-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/green-peafowl/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: source files are opaque 8-bit indexed-color PNGs in sRGB space; runtime files use opaque lossy VP8 WebP
- Source compression: `npm run compress -- src/assets/source/species/green-peafowl/*-source.png`
- Runtime conversion: `npm run convert:webp -- src/assets/source/species/green-peafowl/*-source.png`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-yunnan-river-valley-male-portrait-source.png` | `01-yunnan-river-valley-male-portrait.webp` | One complete adult male stands in a seasonally dry Yunnan river valley; the upright spear-like crest, green scaled neck, blue-and-yellow facial skin, legs and folded eyespotted train remain inside the frame, with quiet space on the left. |
| 02 | `02-adult-female-field-marks-source.png` | `02-adult-female-field-marks.webp` | One complete adult female shows the upright crest, green scaled neck, blue-and-yellow facial skin, barred brown back, dark wing, buff primaries, long legs and short tail; no male train appears. |
| 03 | `03-seasonal-river-valley-habitat-source.png` | `03-seasonal-river-valley-habitat.webp` | Open seasonal woodland, dry grass, a stone-and-sand bank and perennial water dominate the frame; one small complete female stands on the middle-right bank. |
| 04 | `04-male-courtship-train-display-source.png` | `04-male-courtship-train-display.webp` | Exactly one adult male displays a complete layered eyespotted fan; the fan, body, crest, legs and feet remain inside the frame, with no second bird. |
| 05 | `05-ground-scrape-and-four-eggs-source.png` | `05-ground-scrape-and-four-eggs.webp` | Exactly one complete adult female stands beside one minimally lined ground scrape containing exactly four separate plain light eggs; no chick, male or fifth egg appears. |
| 06 | `06-distance-riverbank-monitoring-source.png` | `06-distance-riverbank-monitoring.webp` | Exactly two small observers use one tripod-mounted scope and one notebook on the left bank; exactly one complete female remains across a broad riverbed buffer on the right. |

## Scientific and editorial boundaries

- The morphology anchor is the Green Peafowl, *Pavo muticus*, not the Indian Peafowl, *Pavo cristatus*, or a captive hybrid. Both sexes have a long neck with green-to-copper scale-like feathers and a narrow upright crest.
- The pale cobalt-blue eye patch and yellow-to-orange cheek patch distinguish the reconstructed face. A broad fan crest, cobalt-blue breast, white domestic morph or blue-peafowl female pattern would conflict with this set.
- The male's display train consists chiefly of elongated upper-tail coverts. The short true tail supports it from beneath; the profile and captions must not call the entire fan true tail feathers.
- Females lack the male's long train but retain a green neck and upright crest. Frames 02, 03, 05 and 06 should not be read as Indian Peafowl females.
- The landscape represents a generalized central-Yunnan river-valley mosaic of seasonal woodland, open banks, scrub, dry grass and water. It identifies no occurrence, nest, habitat threshold or population count.
- Four eggs in frame 05 illustrate one possible clutch within a variable range. The frame establishes no average clutch, laying sequence, parentage or breeding result.
- Frame 06 illustrates low-disturbance observation from a distance. It supplies no individual identity, survey method, abundance estimate or trend.
- The six scenes contain no readable text, logo, watermark, border, collage, map, captive facility, handling, bait or tracking equipment.

## Final generation prompts

Each accepted frame came from an independent OpenAI imagegen call without an input image. Two cover drafts and two female drafts were rejected for edge contact or unsafe runtime cropping; frames 01 and 02 below are the crop-safe replacements.

### 01 · Yunnan river-valley male portrait

```text
Create one scientifically grounded, photorealistic wildlife reconstruction image for a Green Peafowl (Pavo muticus) species profile.

CRITICAL CROP-SAFE COMPOSITION
- Landscape 3:2, exact 1536 × 1024.
- Show exactly one healthy adult male Green Peafowl standing in an open dry-season river valley in central Yunnan, China.
- This image will be center-cropped vertically from 1536 × 1024 to 1536 × 800. Every part of the bird must remain inside the central 800-pixel-high safe band, from y=112 to y=912.
- Make the entire bird, measured from crest tip to lowest foot, only about 56–60% of the full image height. Leave at least 16% clear environmental margin above the crest and at least 16% below both feet.
- Place the body on the right around x=0.69, y=0.52, facing left. Preserve at least 38% calm habitat space on the left for page copy.
- Keep the full folded train safely inside the right edge with at least 7% horizontal margin. The complete crest, head, bill, body, both legs, both feet, short true tail and every visible end of the folded train must fit inside the frame and crop-safe band.

SPECIES MORPHOLOGY
- A long slender neck and legs; tall narrow upright spear-like crest; iridescent emerald-to-copper scale-patterned neck and breast; light cobalt-blue bare skin around the eye; vivid yellow-orange cheek patch; dark blue-green wings; buff-brown primary feathers.
- A long folded green-bronze train with layered natural oval eyespots. The train consists chiefly of elongated upper-tail coverts; the short true tail lies beneath it.
- Show Pavo muticus, not Indian/Blue Peafowl (Pavo cristatus), a domestic morph or hybrid.

SETTING AND STYLE
- Generalized open seasonal monsoon and deciduous woodland with pale river stones, dry grass, scrub and a narrow natural stream. Natural late-afternoon dry-season light, restrained colors, believable anatomy and feather detail, museum-quality documentary wildlife photography.
- This is a representative reconstruction, not a named bird, occurrence or protected area.

EXCLUDE
- No second bird, female, chick, egg, nest, person or other animal.
- No display fan, broad fan-shaped crest, cobalt-blue breast, white belly, temple, zoo, ornamental lawn, fence, building, road, sign, text, border, collage, logo or watermark.
- No cropped crest, feet or train; no edge contact; no duplicated legs, broken feather shafts, malformed face or detached tail.
- Do not make the bird a close-up or let it exceed 60% of the image height. The crop-safe margins are mandatory.
```

### 02 · Adult female field marks

```text
Create a brand-new photorealistic environmental wildlife identification image of exactly one adult female Green Peafowl, Pavo muticus.

NON-NEGOTIABLE SCALE AND CROP
- Exact 1536 × 1024 horizontal 3:2 image.
- This must be a MEDIUM-WIDE environmental portrait, never a close-up.
- The complete bird from the highest crest tip to the lowest toe must occupy only about 42–48% of the full image height, clearly less than half the frame. Render the bird at roughly 470 pixels tall in a 1024-pixel-tall image.
- Leave a very large band of visible woodland above the crest: at least 230 pixels. Leave a very large band of visible leaf-covered ground below both feet: at least 230 pixels.
- A later center 16:9 crop keeps only y=80 through y=944. Put every part of the crest and both feet comfortably inside y=180 through y=844.
- Place the small complete bird near x=0.58, y=0.50, with extensive habitat visible on all sides. Show both entire legs, both entire feet and every toe against open ground. Keep the short tail clear of vegetation.
- Do not zoom in. If uncertain, make the bird smaller.

FEMALE GREEN PEAFOWL MORPHOLOGY
- One tall narrow upright spear-like crest, not a broad fan crest.
- Long iridescent emerald scale-patterned neck.
- Light cobalt-blue bare skin around the eye and one yellow-orange cheek patch.
- Dark brown finely buff-and-white barred back and rump; dark blue-green wing panel; buff-brown primary feathers.
- Long legs, short tail, no elongated male train.
- Pavo muticus, not Indian/Blue Peafowl Pavo cristatus, domestic peafowl or hybrid.

SETTING AND STYLE
- A generalized seasonally dry river-valley woodland floor in Southeast Asia, with dry leaves, a few pale stones, sparse low plants, open tree trunks and a softly visible stream far behind.
- Calm natural daylight, restrained color, accurate anatomy, crisp readable field marks, documentary wildlife photography. The environment must remain prominent.

EXCLUDE
- No male, second bird, chick, egg, nest, person or other animal.
- No long train, display fan, cobalt-blue breast, white belly, captive lawn, enclosure, temple, building, sign, text, logo, watermark, border or collage.
- No cropped or edge-touching crest, tail, legs, feet or toes. No malformed face, duplicated limbs or hybrid plumage.
- Do not let the bird occupy half or more of the image height.
```

### 03 · Seasonal river-valley habitat

```text
Create one scientifically grounded, photorealistic wildlife reconstruction image for a Green Peafowl (Pavo muticus) species profile.

SCENE AND COMPOSITION
- Landscape 3:2, 1536 × 1024.
- A broad dry-season river valley in central Yunnan, China: open seasonal monsoon and deciduous woodland on low hills, patches of tall dry grass and scrub, a pale stone-and-sand riverbank, and a narrow ribbon of perennial clear water.
- Habitat must carry at least 88% of the visual weight. This is primarily a habitat panorama, not a bird portrait.
- Include exactly one small but fully visible adult female Green Peafowl on the mid-right stone bank, around x=0.68, y=0.57. Keep her well inside the frame and readable at modest size.
- The female has a tall, narrow, upright spear-like crest; an iridescent green scale-patterned neck; light cobalt-blue bare skin around the eye; a yellow-orange cheek patch; a dark brown finely barred back; dark blue-green wings with buff-brown primaries; long legs; and a short tail. She has no male train.
- Natural late-afternoon dry-season light, believable scale, documentary wildlife photography, fine ecological detail, restrained color, deep but realistic landscape depth.

SCIENTIFIC BOUNDARIES
- Show Pavo muticus, not Indian/Blue Peafowl (Pavo cristatus).
- The woodland is open and seasonally dry, linked to water; it is not dense evergreen rainforest.
- The scene is a generalized reconstruction, not a named protected area or documented sighting.

EXCLUDE
- No second bird or any other animal.
- No male peafowl, chicks, eggs, nest, display, people, buildings, roads, fences, farms, temples, ornamental park, signs, map graphics, text, border, collage, logo, or watermark.
- No broad fan-shaped crest, cobalt-blue breast, white belly, long train, cropped head, cropped crest, cropped legs, or cropped feet.
```

### 04 · Male courtship train display

```text
Create one scientifically grounded, photorealistic wildlife reconstruction image for a Green Peafowl (Pavo muticus) species profile.

SCENE AND COMPOSITION
- Landscape 3:2, 1536 × 1024.
- Show exactly one adult male Green Peafowl performing a full courtship train display on an open sandy clearing beside seasonally dry river-valley woodland.
- Front view with a slight natural turn. The entire round display, crest, body, both legs, and both feet must fit inside the frame with generous margin on every edge. Center the subject around x=0.52, y=0.52.
- The display is formed by extremely elongated upper-tail coverts arranged as a layered green-bronze fan with natural oval eyespots. A short dark brown true tail is subtly visible beneath, supporting the train.
- The male has a long iridescent emerald-to-copper scale-patterned neck and breast, a tall narrow upright spear-like crest, light cobalt-blue bare skin around the eye, a vivid yellow-orange cheek patch, dark blue-green wings, and buff-brown primary feathers.
- Natural dry-season morning light, restrained documentary color, lifelike feather structure and anatomy, shallow but credible depth of field, unobtrusive river stones and open woodland behind.

SCIENTIFIC BOUNDARIES
- Show Pavo muticus, not Indian/Blue Peafowl (Pavo cristatus).
- The eyespotted fan is made from elongated upper-tail coverts, not the true tail or wings.
- This is a generalized behavioral reconstruction, not a documented individual or location.

EXCLUDE
- No female, no second bird, no chicks, no eggs, no nest, no people, and no other animals.
- No cobalt-blue breast, broad fan-shaped head crest, white domestic morph, hybrid coloring, circular decorative motif, symmetrical graphic backdrop, captive lawn, temple, zoo, fence, sign, text, border, collage, logo, or watermark.
- Do not crop any part of the fan, crest, bird, legs, or feet. No broken feather shafts, duplicated feet, extra limbs, malformed face, or detached fan.
```

### 05 · Ground scrape and four eggs

```text
Create one scientifically grounded, photorealistic wildlife reconstruction image for a Green Peafowl (Pavo muticus) species profile.

SCENE AND COMPOSITION
- Landscape 3:2, 1536 × 1024.
- Show exactly one adult female Green Peafowl standing protectively but calmly beside a simple shallow ground scrape under sparse scrub and a weathered fallen branch in seasonally dry river-valley woodland.
- The nest lies in the lower-left to center and contains exactly four separate, fully visible, plain unspotted eggs. The eggs are naturally oval, matte off-white to very light tan, similar in size, and rest on only a little dry grass and leaf litter.
- Place the complete female on the right, around x=0.62, y=0.55. Her entire tall narrow upright spear-like crest, head, short tail, both legs, and both feet must remain inside the frame.
- The female has an iridescent emerald scale-patterned neck, light cobalt-blue bare skin around the eye, a yellow-orange cheek patch, a dark brown back with fine buff-and-white barring, dark blue-green wings with buff-brown primaries, long legs, and a short tail. She has no male train.
- Quiet natural shade with warm dry-season light, documentary wildlife photography, believable anatomy, detailed but restrained woodland floor, focal emphasis near x=0.52, y=0.60.

SCIENTIFIC BOUNDARIES
- Show Pavo muticus, not Indian/Blue Peafowl (Pavo cristatus).
- The nest is an unbuilt or minimally lined ground scrape. Four eggs illustrate one possible clutch within the documented range.
- This is a generalized reconstruction, not a known nest or individual.

EXCLUDE
- No fifth egg, hidden extra egg, broken egg, spotted egg, chick, hatchling, male, second bird, person, predator, food, bait, research marker, camera, fence, or other animal.
- No platform nest, tree nest, woven nest, cup nest, elaborate twigs, artificial material, ornamental garden, temple, zoo, text, border, collage, logo, or watermark.
- No broad fan crest, cobalt-blue breast, white belly, long train, cropped crest, cropped legs, cropped feet, duplicated limbs, or malformed face.
```

### 06 · Distance riverbank monitoring

```text
Create one scientifically grounded, photorealistic conservation-monitoring reconstruction image for a Green Peafowl (Pavo muticus) species profile.

SCENE AND COMPOSITION
- Landscape 3:2, 1536 × 1024.
- A wide dry-season river valley in central Yunnan with open seasonal woodland, a broad pale stone-and-sand riverbed, and a shallow ribbon of water running between two distant banks.
- On the far left bank, show exactly two small adult field observers. One looks through exactly one spotting scope mounted on exactly one tripod. The second stands or sits beside them and writes in a plain field notebook.
- On the far right opposite bank, show exactly one small but fully visible adult female Green Peafowl, well separated from the observers by the broad water and riverbed buffer. Place her around x=0.79, y=0.58.
- Keep all three figures modest in scale; the landscape and physical distance are the main subject. Compose around x=0.58, y=0.56.
- The female silhouette remains identifiable: tall narrow upright spear-like crest, iridescent green neck, dark brown barred body, long legs, and short tail with no male train.
- The observers wear subdued unbranded field clothing. Natural late-morning documentary light, restrained color, credible optics and human posture, clear conservation-storytelling image.

SCIENTIFIC AND ETHICAL BOUNDARIES
- Show non-invasive observation from a substantial distance.
- Show Pavo muticus, not Indian/Blue Peafowl.
- This is a generalized monitoring reconstruction, not a named survey, reserve, team, or documented sighting.

EXCLUDE
- No third observer, no second scope, no binoculars, camera, telephoto camera, drone, vehicle, hide, blind, tent, bait, corn, feeding station, trap, net, cage, transmitter, radio collar, leg band, measuring device, handling, touching, chasing, approaching, or crossing toward the bird.
- No male peafowl, second bird, chicks, eggs, nest, livestock, or other animals.
- No uniforms, logos, agency patches, identifiable faces, signs, buildings, roads, fences, park furniture, temple, zoo, text, border, collage, map graphics, or watermark.
- Do not crop the people, tripod, scope, bird, crest, legs, or feet. No duplicated limbs or malformed equipment.
```

## Static and visual validation

- All six TinyPNG-compressed sources decode as opaque 1536 × 1024 8-bit indexed-color PNG files in sRGB space.
- All six runtime assets decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files. `file` identifies VP8 WebP data rather than renamed PNG data.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- TinyPNG reduced the six source files from 19,348,639 to 5,863,714 bytes, a 69.7 percent reduction.
- Runtime WebP sizes are 223,868; 289,548; 334,948; 393,666; 284,710; and 338,330 bytes in frame order, totaling 1,865,070 bytes. WebP conversion reduced the compressed-source total by 68.2 percent.
- Original-resolution inspection confirmed the accepted observations in the asset table. Checks covered bird, egg and observer counts; Green Peafowl crests, necks, facial skin and sex differences; complete anatomy; cover-copy space; open river-valley context; the upper-tail-covert display; the minimally lined scrape; monitoring distance; and the absence of text or branding.
- Runtime inspection after conversion found no new cropping, extra animals, visible text, logos, watermarks, borders, species substitutions or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
