# Crested ibis image set

OpenAI's built-in imagegen tool created these six original project images on 2026-08-25 for the Fauna Atlas _Nipponia nippon_ profile. The set covers flight, diagnostic field marks, the paddy–wetland–forest habitat mosaic, tactile probing, cosmetic breeding coloration and non-invasive ring monitoring. Every frame is a generic editorial reconstruction rather than an occurrence record, named site, known individual, release event, field team or abundance estimate.

The scientific boundaries come from [`docs/research/crested-ibis-profile.md`](../../../../../docs/research/crested-ibis-profile.md).

- Generation mode: built-in OpenAI imagegen, `photorealistic-natural`
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/crested-ibis/*.webp`
- Dimensions: 1536 × 1024
- Source compression: scoped `npm run compress -- <six explicit PNG paths>` using TinyPNG in place
- Runtime conversion: scoped `npm run convert:webp -- <six explicit PNG paths>`, which uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Asset map and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-rice-paddy-flight-source.png` | `01-rice-paddy-flight.webp` | Exactly one complete adult flies with neck extended, red face and bill tip, salmon underwings and quiet left-side cover space |
| 02 | `02-adult-field-marks-source.png` | `02-adult-field-marks.webp` | Exactly one complete nonbreeding adult shows the curved black-and-red bill, golden eye, bare red face, white crest, two red legs and pale folded plumage |
| 03 | `03-paddy-forest-mosaic-source.png` | `03-paddy-forest-mosaic.webp` | Exactly one small complete bird appears within a habitat-dominant connected paddy, watercourse and mature temperate woodland mosaic |
| 04 | `04-tactile-paddy-foraging-source.png` | `04-tactile-paddy-foraging.webp` | Exactly one complete adult inserts one closed curved bill into shallow mud without visible prey; accepted after a targeted bill correction |
| 05 | `05-cosmetic-daubing-source.png` | `05-cosmetic-daubing.webp` | Exactly one breeding adult holds a natural head-back contact pose; charcoal gray stays on the head, neck and upper mantle while the wings and belly remain white to salmon |
| 06 | `06-leg-band-monitoring-source.png` | `06-leg-band-monitoring.webp` | One complete bird with one narrow blue leg ring forages while exactly two researchers observe from the far bund; accepted after a targeted bill correction |

## Evidence and image boundaries

- The morphology anchor is _Nipponia nippon_: rosy-white nonbreeding plumage, salmon flight feathers, vermilion bare face and legs, golden eye, loose nape crest, and one long slender strongly downward-curved black bill with a small red terminal tip.
- The bird is not a spoonbill, crane, stork, heron, egret, flamingo, scarlet ibis or sacred ibis. A spoon-shaped or straight bill, red crown, all-red plumage and retracted-neck flight would fail the set.
- Frame 01 preserves an extended ibis neck, trailing legs and full wing tips. The orange-salmon color lies mainly in flight feathers rather than covering the whole bird.
- Frame 03 represents a generalized human-shaped habitat mosaic. It does not identify a release site, prove occupancy, map a range or turn the small bird into an abundance count.
- Frame 04 shows tactile probing with a closed bill inserted into soft mud. It does not identify prey, quantify diet or document a witnessed feeding event.
- Frame 05 reconstructs one instant of the post-bathing daubing sequence. The gray area represents externally applied cosmetic material on head, neck and mantle feathers; the image does not show secretion production, prove sex or record a known bird.
- Frame 06 shows a single plain color ring and distant visual observation. It is not handling, provisioning, a release, a GPS deployment or proof of identity or population trend.
- All generated scenes exclude text, logos, watermarks, borders, collages and diagrams. No image claims a precise location, date, individual or conservation outcome.

## Final generation prompts

### 01 · Rice-paddy flight

Fresh built-in imagegen generation, with no reference image:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crested Ibis species cover, exact 1536 × 1024 horizontal 3:2 website source PNG
Primary request: Create a brand-new original documentary natural-history photograph of exactly one wild adult Crested Ibis (Nipponia nippon) flying low from right toward left over a shallow flooded East Asian rice paddy beside a temperate woodland edge.
Species morphology: The bird is unmistakably Nipponia nippon, not a spoonbill, crane, stork, heron, egret, flamingo or scarlet ibis. Soft pinkish-white nonbreeding head, neck and body; shaggy loose white nape crest; one golden-yellow eye in a broad vermilion-red bare facial patch; one very long slender strongly downward-curved black bill with a small red terminal tip; exactly two red legs trailing straight behind. Both broad wings are fully spread and anatomically coherent, with pale white upper coverts and restrained salmon-pink to warm orange flight feathers visible mainly across the underwings and rear flight-feather areas. Keep the neck fully extended forward in ibis flight, never folded into an S curve.
Scene/backdrop: Generalized shallow rice paddies with narrow earthen bunds, muted winter stubble, soft water reflections and a nearby band of leafless and evergreen temperate trees. No named place or landmark.
Style/medium: Original photorealistic professional wildlife field photography, fast shutter, realistic feather microtexture, restrained museum-publication color and natural atmospheric depth.
Composition/framing: Exact 1536 × 1024 horizontal 3:2. Place the complete bird within the right 58 percent of the frame, occupying about 43 percent of the image width, flying toward the clean left side. Keep bill tip, crest, both wing tips, both feet and tail fully inside generous margins. Reserve the left 38–40 percent as quiet low-contrast paddy water and soft woodland for page copy.
Lighting/mood: Soft cool morning daylight with a thin warm reflection, calm and observational, no dramatic sunset.
Constraints: Exactly one bird; one head, one curved bill, two complete wings, two legs, two feet, one short tail; no other animal, person, building, vehicle or monitoring equipment; no text, label, logo, signature, border, collage, infographic or watermark.
Avoid: spoon-shaped bill, straight crane bill, red crown patch, black stork wings, long flamingo legs, all-red plumage, pure white egret, retracted heron neck, extra wing, fused wing, missing foot, cropped anatomy, prey, nest, captivity, fantasy, CGI, illustration, oversaturation or glossy tourism-ad polish.
```

### 02 · Adult field marks

Fresh built-in imagegen generation, with no reference image:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crested Ibis morphology gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2 source PNG
Primary request: Create a brand-new original documentary natural-history photograph of exactly one complete adult Crested Ibis (Nipponia nippon) standing calmly in a few centimetres of water at the edge of a winter rice paddy.
Species morphology: Unmistakably Nipponia nippon, not a spoonbill, crane, stork, heron, egret, flamingo, sacred ibis or scarlet ibis. Nonbreeding adult with soft rosy-white head, neck, body and folded wings; restrained salmon-pink visible along folded flight-feather and tail edges; broad vermilion-red bare facial skin; one golden-yellow iris; a loose shaggy white nape crest; one very long slender strongly downward-curved black bill ending in a small red terminal tip; exactly two long but proportionate vermilion-red legs; normal anisodactyl wader feet with three forward toes and one short rear toe per foot.
Pose/action: Clean left-facing side-three-quarter profile, alert but relaxed, neck in a natural shallow curve and bill held nearly horizontal. Both feet planted separately in shallow water. Fold both wings coherently against the body. Keep the complete bird visible from bill tip through crest, body, tail, both legs and every readable toe.
Scene/backdrop: Generalized East Asian rice-paddy margin with muddy shallows, cut rice stubble, one low earthen bund and softly blurred temperate woodland. No exact locality or captive setting.
Style/medium: Original photorealistic professional wildlife field photography, realistic feather microtexture, restrained natural-history editorial processing, shallow depth of field.
Composition/framing: Exact horizontal 3:2 medium-wide view at bird body height. Place the complete bird around the center-right with open paddy context, occupying about 55 percent of frame height. Generous margins around bill, crest, tail and toes.
Lighting/mood: Soft neutral winter morning light, quiet and diagnostic.
Constraints: Exactly one bird, one head, one bill, two folded wings, two legs, two feet, one tail; no other animals, people, bands, transmitters, nest, prey or handling; no text, labels, logo, signature, border, collage, diagram or watermark.
Avoid: spoon-shaped bill, straight bill, red crown patch, all-red plumage, black wing panels, pure white egret, flamingo proportions, extra toes, webbed feet, missing leg, fused feet, cropped anatomy, fantasy, CGI, illustration, oversaturation or staged zoo photography.
```

### 03 · Paddy–forest mosaic

Fresh built-in imagegen generation, with no reference image:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crested Ibis habitat gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2 source PNG
Primary request: Create a brand-new original wide environmental natural-history photograph of a generalized East Asian Crested Ibis (Nipponia nippon) habitat mosaic, with exactly one small complete adult bird as a secondary subject.
Scene/backdrop: A connected winter-to-early-spring landscape of shallow flooded rice paddies, irregular earthen bunds, a narrow slow river margin and small pond, damp grass strips, scattered willow-like trees and a nearby band of mature mixed temperate woodland with tall potential nesting trees. Human-shaped farmland is visible but quiet and low-intensity. No named village, reserve, landmark, signage, house, road or utility infrastructure.
Bird: Exactly one small but findable nonbreeding Crested Ibis standing in shallow water in the middle-right distance, no more than 10–12 percent of frame height. Rosy-white body, restrained salmon flight-feather edge, vermilion bare face and legs, loose white nape crest, one long slender strongly downward-curved black bill with a red terminal tip. Complete silhouette and both legs visible; bird remains separated from reflections and vegetation.
Style/medium: Original photorealistic conservation landscape photography, restrained museum-publication color, realistic water, winter vegetation and atmospheric depth.
Composition/framing: Exact horizontal 3:2 wide establishing frame. Habitat occupies at least 88 percent of visual attention. Show spatial continuity from shallow paddy and river margin to the nearby mature forest. Keep the horizon in the upper third and the single bird right of center.
Lighting/mood: Soft broken-cloud morning light, spacious and ordinary rather than spectacular.
Evidence boundary: A generalized paddy-wetland-forest mosaic, not a named release site, occurrence record, mapped range, measured habitat threshold or abundance estimate.
Constraints: Exactly one bird total; no people, vehicles, houses, farm machinery, boats, livestock, other wildlife or second distant bird; no text, map line, arrow, coordinate, logo, signature, border, collage, infographic or watermark.
Avoid: pure wilderness swamp, tropical mangrove, endless reed sea, manicured rice terraces, dense ibis flock, red-crowned crane, spoonbill, egret colony, flamingo, dramatic mountain tourism panorama, pollution disaster, drought spectacle, fantasy, CGI, illustration, oversaturation or glossy travel-ad polish.
```

### 04 · Tactile paddy foraging

Base built-in imagegen generation:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crested Ibis tactile-foraging gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2 source PNG
Primary request: Create a brand-new original documentary natural-history photograph of exactly one adult Crested Ibis (Nipponia nippon) using tactile probing to search soft mud in a shallow flooded rice paddy.
Species morphology: Unmistakably Nipponia nippon, not a spoonbill, crane, stork, heron, egret, flamingo or scarlet ibis. Soft rosy-white nonbreeding plumage with restrained salmon-pink folded flight-feather edges; broad vermilion-red bare facial skin; loose white nape crest; one very long slender strongly downward-curved black bill ending in a red terminal tip; exactly two proportionate vermilion legs and normal non-webbed wader feet.
Action: Freeze a quiet side-three-quarter moment with the neck bent naturally downward and the entire curved bill shaft readable. The red bill tip is inserted several centimetres into soft submerged mud below a thin layer of water. The bird is feeling beneath the surface rather than aiming visually or stabbing. Head and bill remain coherent and attached; mouth closed around no visible prey. Both feet are planted separately and the complete body, tail, both legs and feet remain inside frame.
Scene/backdrop: Generalized East Asian winter rice paddy with shallow gray-brown water, fine silt, sparse cut rice stubble and a softly blurred earthen bund. No named place.
Style/medium: Original photorealistic close field photograph, fast enough for feather detail but natural, restrained museum-publication color, realistic muddy water and slight ripples around the bill.
Composition/framing: Exact horizontal 3:2 medium-wide frame at bird height. Place the complete bird around center-right; keep bill arc isolated against quiet water so the tactile action reads clearly. Generous edge margin around crest, tail and toes.
Lighting/mood: Soft overcast morning light, patient and observational.
Evidence boundary: The scene illustrates tactile probing only; it does not identify a prey item, quantify diet or record a named field observation.
Constraints: Exactly one bird; no visible prey, fish, frog, crab or worm; no other animal, person, equipment, band, text, label, arrow, logo, signature, border, collage, infographic or watermark.
Avoid: straight spear-like bill, spoon-shaped bill, open beak, large fish, violent strike, splash, head fully buried, filter feeding, swimming, deep water, red crown, all-red plumage, missing leg, fused feet, cropped anatomy, fantasy, CGI, illustration, oversaturation or staged feeding photography.
```

The first output separated the mandibles enough to read as an open bill and was rejected. Built-in imagegen made this single targeted correction to the supplied base image:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Crested Ibis source asset, exact 1536 × 1024 horizontal 3:2
Input image: the supplied image is the sole edit target.
Primary request: Correct only the bill anatomy while preserving the accepted single-bird tactile-probing pose, species identity, framing and rice-paddy scene.
Bill correction: Close the two currently separated mandibles into one single coherent, slender, strongly downward-curved Crested Ibis bill. The final bill should have a natural hairline mouth seam at most, not two parallel open prongs or a gap. Preserve the same black bill color and the small red terminal segment. Keep the closed red tip inserted a few centimetres into the soft submerged mud so the image still reads as tactile probing. Maintain a smooth continuous attachment from red facial skin through bill base to tip. No visible prey.
Preserve unchanged: exactly one adult Nipponia nippon, red bare face and golden eye, white crest, rosy-white body, salmon folded flight-feather edges, natural downward-bent neck, complete body and tail, exactly two red legs, shallow paddy water, rice stubble, background, lighting, focus, camera angle and composition.
Constraints: exact 1536 × 1024 horizontal image; exactly one bird; one head; one closed curved bill; two legs; no prey, other animal, text, logo, signature, border, collage or watermark. Do not add, remove or reposition any other element. No spoon bill, straight bill, split tip, open beak, duplicated bill, bill reflection mistaken for a second bill, CGI or illustration.
```

### 05 · Cosmetic daubing

Fresh built-in imagegen generation, with no reference image:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crested Ibis cosmetic-plumage gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2 source PNG
Primary request: Create a brand-new original scientifically restrained natural-history photograph of exactly one breeding adult Crested Ibis (Nipponia nippon) performing its documented post-bathing cosmetic daubing behavior in shallow clean paddy water.
Species morphology: Unmistakably Nipponia nippon. Broad vermilion-red bare facial skin and one golden-yellow eye; one very long slender strongly downward-curved black bill with a red terminal tip; shaggy nape crest; exactly two red legs and normal non-webbed wader feet. The special breeding appearance is externally applied charcoal-gray to smoky black-gray on the damp feathers of the head, nape, neck, mantle and upper scapulars. The folded wing surfaces, belly and tail remain mostly soft rosy white with restrained salmon-pink flight-feather edges. This is not an all-black bird and not newly grown black plumage.
Action: Immediately after bathing, the standing bird turns its flexible neck naturally backward and presses/rubs the SIDE of its head and upper nape against the near shoulder and upper back feathers. Show one believable preening-like instant of contact. The curved bill lies safely outside the feathers and remains recognizable; it does not pierce the wing. Damp clumped feather texture and a few ordinary water droplets support the bathing context. Do not visualize secretion being emitted.
Scene/backdrop: Generalized shallow East Asian paddy margin with clean muted water, a low earthen bund and soft temperate vegetation. No exact site.
Style/medium: Original photorealistic professional behavioral wildlife photography, natural feather texture and anatomy, restrained documentary processing.
Composition/framing: Exact horizontal 3:2 medium view, entire bird inside frame from crest and bill through tail, both legs and both feet. Use a slight elevated side-three-quarter angle so head-to-shoulder contact and the white-versus-gray plumage boundary are clear.
Lighting/mood: Soft cool daylight after bathing, quiet and observational.
Evidence boundary: A representative reconstruction of documented daubing. It does not show visible pigment production, prove the bird's sex or record a named individual.
Constraints: Exactly one bird; one coherent head and neck, one bill, two folded wings, two legs, two feet, one tail; no other animal, person, research equipment, paint container, text, labels, arrows, logo, signature, border, collage, diagram or watermark.
Avoid: liquid black spray, smoke, soot cloud, ink, oil spill, mud bath, human paint, bird holding a brush, entire body black or gray, black flight feathers, vulture, crane, heron, spoonbill, twisted broken neck, duplicated head, detached bill, bill through wing, extra leg, cropped feet, fantasy, CGI, illustration, oversaturation or theatrical ritual staging.
```

### 06 · Leg-band monitoring

Base built-in imagegen generation:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Crested Ibis conservation-monitoring gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2 source PNG
Primary request: Create a brand-new original documentary conservation photograph of exactly one complete adult Crested Ibis (Nipponia nippon) feeding normally in a shallow restored rice paddy while exactly two field researchers observe non-invasively from a clearly respectful distance.
Bird: One nonbreeding adult in the center-right foreground/midground, complete and anatomically accurate. Soft rosy-white plumage with restrained salmon-pink folded flight-feather edges; broad vermilion-red bare facial skin; golden-yellow eye; loose white nape crest; one long slender strongly downward-curved black bill with a small red terminal tip; exactly two red legs and two normal non-webbed wader feet. The bird probes shallow water calmly and wears exactly one narrow plain cobalt-blue identification ring around the lower left tarsus. The ring is lightweight, correctly encircles only the leg, has no readable numbers or letters, and is not a cuff, shackle, tracker or transmitter.
Researchers: Exactly two small adult field researchers stand together on a dry earthen bund in the far-left background, separated from the bird by at least 25–30 metres of uninterrupted paddy. Both wear muted unbranded field clothing. One looks through exactly one pair of binoculars; the other holds one plain clipboard and writes. They do not approach, touch, surround, call, feed or handle the bird.
Scene/backdrop: Generalized East Asian restored shallow rice-paddy and damp-grass mosaic with a temperate woodland edge. No named reserve, landmark, building, road, vehicle, hide or fence.
Style/medium: Original photorealistic professional conservation field photography, long-lens compression, realistic feather, mud, water and clothing textures, restrained museum-publication processing.
Composition/framing: Exact horizontal 3:2 medium-wide environmental view. Keep the complete bird readable at center-right, including bill tip, crest, tail, both legs, both feet and the single blue ring. Keep both researchers small and entirely within the far-left background. Preserve an obvious empty habitat buffer between them.
Lighting/mood: Soft overcast morning daylight, routine patient monitoring without rescue or release drama.
Evidence boundary: A generic reconstruction of ring-based remote observation. It is not a named monitoring project, occurrence record, release event, individual identity or abundance estimate.
Constraints: Exactly one bird, exactly two people, exactly one blue leg ring, exactly one binocular pair and exactly one clipboard; no other animal, second bird, camera trap, net, cage, food, GPS backpack, wing tag, harness, capture equipment, text, readable marks, logo, signature, border, collage, infographic or watermark.
Avoid: close handling, catching, crowding, feeding, bird in hand, tourists, release crate, oversized collar, ankle shackle, two bands, numbered band text, leg injury, researcher beside bird, spoonbill, crane, egret, flamingo, extra limbs, cropped bird, fantasy, CGI, illustration, oversaturation or NGO advertising gloss.
```

The first output preserved the monitoring layout but separated the mandibles enough to look open. It was rejected. Built-in imagegen made this single targeted correction:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Crested Ibis monitoring source asset, exact 1536 × 1024 horizontal 3:2
Input image: the supplied image is the sole edit target.
Primary request: Correct only the Crested Ibis bill anatomy while preserving the accepted monitoring scene pixel-faithfully elsewhere.
Bill correction: Close the two currently separated mandibles into one single coherent slender strongly downward-curved black bill with a natural hairline mouth seam at most. Remove the open gap and parallel-prong reading. Preserve the same small red terminal segment. Keep the closed red tip touching or just entering the shallow water and soft mud so the bird still reads as calm tactile probing. Maintain a smooth continuous attachment from the vermilion facial skin to one bill base and one tip. No visible prey.
Preserve unchanged: exactly one complete rosy-white Crested Ibis, red face, golden eye, white crest, salmon folded flight feathers, exactly two red legs, the single narrow blue ring on one lower leg, both feet, shallow restored paddy, all reflections, exactly two distant researchers on the far-left bund, one binocular pair, one clipboard, vegetation, framing, focus, lighting, colors and respectful distance.
Constraints: exact 1536 × 1024 horizontal image; exactly one bird, one closed bill, two people, one blue leg ring; no prey, added animal, new band, text, logo, signature, border, collage or watermark. Change no area except the bill and its immediate water contact. No spoon bill, straight bill, open beak, split tip, duplicated bill, CGI or illustration.
```

## Static and visual validation

- All six TinyPNG-compressed sources decode as opaque 1536 × 1024, 8-bit indexed-color RGB PNG files.
- All six runtime assets decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files. `file` identifies VP8 WebP data rather than renamed PNG data.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- Source compression reduced the six PNG files from 15,036,632 bytes to 4,756,503 bytes, a 68.4 percent reduction.
- Runtime WebP sizes are 87,042; 98,578; 398,788; 102,618; 139,596; and 181,310 bytes in frame order, totaling 1,007,932 bytes.
- Original-resolution inspection confirmed the accepted observations in the asset table. Frames 04 and 06 use the targeted closed-bill corrections described above; rejected base outputs remain outside the project asset tree.
- Runtime inspection after conversion found no new cropping, visible text, logos, watermarks, borders, extra animals, malformed species substitutions or material compression defects.
- Verification used static file inspection and the built-in image viewer only. No GUI or headless browser was used.
