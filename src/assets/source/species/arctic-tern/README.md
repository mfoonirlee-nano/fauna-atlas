# Arctic Tern image set

OpenAI imagegen created these six original project images on 2026-08-26 for the Fauna Atlas *Sterna paradisaea* profile. The images reconstruct representative breeding-adult morphology, pack-ice habitat, shallow foraging, nesting and field-observation scenes. They do not document a named bird, nest, migration, survey site or field team.

- Generation mode: OpenAI imagegen, `photorealistic-natural`
- Research brief: [`docs/research/arctic-tern-profile.md`](../../../../../docs/research/arctic-tern-profile.md)
- Source files: TinyPNG-compressed `*-source.png`
- Runtime files: `public/images/species/arctic-tern/*.webp`
- Source and runtime dimensions: 1536 × 1024, horizontal 3:2
- Color and alpha: source files are opaque 8-bit indexed-color PNGs in sRGB space; runtime files use opaque lossy VP8 WebP
- Source compression: `npm run compress -- src/assets/source/species/arctic-tern/*-source.png`
- Runtime conversion: `npm run convert:webp -- src/assets/source/species/arctic-tern/*-source.png`; the script uses `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Files and accepted observations

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-arctic-coast-breeding-adult-source.png` | `01-arctic-coast-breeding-adult.webp` | The composition-revised cover shows one complete breeding-plumage adult standing on the right side of a subarctic gravel shore; its black cap, thin red bill, short red legs and long tail streamers remain visible, while open water and sky provide copy space on the left. |
| 02 | `02-flight-field-marks-source.png` | `02-flight-field-marks.webp` | One complete breeding-plumage adult flies over cold coastal water; both long pointed wings, the all-red bill, tucked short red legs and long deeply forked tail remain inside the frame. |
| 03 | `03-antarctic-pack-ice-migration-source.png` | `03-antarctic-pack-ice-migration.webp` | Open water and scattered pack ice dominate the frame, with one small complete tern flying in the middle-right distance. The bird is too distant to verify a white forehead or other nonbreeding-plumage details. |
| 04 | `04-shallow-plunge-foraging-source.png` | `04-shallow-plunge-foraging.webp` | Exactly one complete adult angles toward the water immediately before contact; exactly one separate small fish remains below and ahead, with no touch, wound, blood or capture result. |
| 05 | `05-ground-scrape-and-two-eggs-source.png` | `05-ground-scrape-and-two-eggs.webp` | Exactly one complete breeding-plumage adult stands beside one shallow gravel scrape containing exactly two separate mottled eggs; no chick, third egg or second bird appears. |
| 06 | `06-distance-colony-monitoring-source.png` | `06-distance-colony-monitoring.webp` | Exactly two observers use one tripod-mounted spotting scope and one notebook on the near shore; one distant complete tern stands across a broad water buffer on a low gravel bar. |

## Scientific and editorial boundaries

- Frames 01, 02, 04, 05 and 06 reconstruct breeding-plumage adults: a slender body, full black cap, thin all-red bill, very short red legs, long narrow pointed wings and a long deeply forked tail. Individual poses hide some marks, so each caption should name only details visible in that frame.
- The prompt for frame 03 requested a nonbreeding adult with a white forehead, reduced black cap and dark bill and legs. The accepted distant bird does not resolve the forehead well enough to verify that request. Use the frame for pack-ice context and a single-bird migration scene, not as evidence of nonbreeding plumage.
- Frame 03 represents a generalized Southern Ocean or Antarctic pack-ice margin. It records no exact location, date, route, fixed wintering site or measured migration.
- Frame 04 stops before water contact. It establishes no strike, capture, prey identity, feeding rate or typical dive depth.
- Two eggs in frame 05 illustrate one possible clutch. They do not establish a fixed clutch size, laying order, parent identity, hatch result or breeding success.
- Frame 06 illustrates low-disturbance observation across water. It supplies no colony count, individual identity, survey method, occurrence record or population trend.
- The six scenes contain no readable text, logo, watermark, border, collage, map, tracking device, handling, bait or staged wildlife contact.

## Generation prompts

The blocks below preserve the verbatim prompts sent to OpenAI imagegen. Frame 01 used one original generation and two successive composition edits; frames 02–06 each used one original generation.

### 01 · Arctic coast breeding adult

Initial generation prompt:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Arctic Tern species-profile cover, original project asset
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an adult Arctic Tern (Sterna paradisaea) at its high-Arctic breeding coast.
Scene/backdrop: open low-Arctic gravel and shingle shore with sparse tundra plants, calm cold sea and distant low snow-streaked hills; no named site.
Subject: exactly one healthy breeding adult Arctic Tern standing naturally on the gravel, facing left. Show a slim small tern with pale gray back and underparts, white rump and tail, solid black cap, uniformly deep coral-red slender bill with no black tip, very short coral-red legs, long narrow pointed wings folded cleanly, and an elegant deeply forked white tail whose long outer streamers extend beyond the folded wing tips.
Style/medium: museum-quality documentary wildlife photography, believable feathers and anatomy, restrained natural color.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Medium-wide environmental portrait. Place the bird on the right around x=0.69, y=0.52 and leave calm coastal space on the left for page copy. The complete bird from bill tip and crown through both feet and the entire tail must stay inside the frame. Keep it within the central crop-safe band with at least 16% margin above the cap, 16% below the feet, and 8% beyond bill and tail. Bird occupies no more than 52% of image height.
Lighting/mood: soft clear Arctic summer daylight, subtle cool air, no dramatic storm.
Constraints: Sterna paradisaea, not Common Tern Sterna hirundo and not Antarctic Tern Sterna vittata; exactly one bird; complete anatomy; no text, logo, watermark, border or collage.
Avoid: black-tipped bill, orange bill with black tip, long legs, bulky gull body, white forehead, winter plumage, juvenile plumage, open beak, fish, egg, nest, chick, second bird, person, other animal, building, boat, fence, road, sign, tracking device, leg band, clipped bill, cropped feet, cropped tail, edge contact, duplicated legs, malformed wing or synthetic oversaturation.
```

First composition edit prompt:

```text
Use case: precise-object-edit
Input image: Image 1 is the edit target, the Arctic Tern cover draft.
Primary request: keep the same Arctic coastal scene, bird identity, plumage, lighting, camera realism and 3:2 landscape composition, but reduce the complete bird by about 18 percent and move it slightly left.
Composition correction: leave at least 9 percent clear environmental margin between the longest tail streamer and the right image edge, at least 10 percent between the bill and the left boundary of the bird's allotted right-side area, at least 18 percent above the cap, and at least 18 percent below both feet. Keep the bird on the right near x=0.65, y=0.51. Preserve broad calm negative space across the left 40 percent.
Invariants: exactly one breeding adult Arctic Tern, uniformly deep coral-red bill with no black tip, solid black cap, pale gray body, very short red legs, pointed folded wings, deeply forked white tail with long outer streamers; entire bill, cap, feet, wings and tail visible.
Constraints: change only subject scale and placement plus seamless background fill; no new bird, text, logo, watermark, border, fish, egg, nest, person or other object; no edge contact or cropped anatomy.
```

Final composition edit prompt:

```text
Use case: precise-object-edit
Input image: Image 1 is the edit target, the second Arctic Tern cover draft.
Primary request: preserve the same scene, species morphology, pose, lighting and documentary realism; enlarge only the complete bird by about 38 percent, anchored at both feet, and keep it on the center-right.
Composition correction: final bird should occupy about 34–38 percent of full image height. Keep at least 9 percent clear background between the longest tail streamer and right edge, at least 16 percent above the black cap, at least 16 percent below both feet, and broad open water/shore across the left 40 percent. Target body center x=0.67, y=0.54.
Invariants: exactly one breeding adult Arctic Tern; uniformly coral-red bill without black tip; solid black cap; pale gray body; very short red legs; pointed folded wings; deeply forked white tail with long outer streamers; all anatomy inside frame.
Constraints: change only bird scale and placement plus seamless local background fill; no new objects, second bird, text, logo, watermark, border, fish, egg, nest, person or edge contact.
```

### 02 · Flight field marks

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Arctic Tern gallery image, flight identification
Primary request: create one scientifically grounded photorealistic image of exactly one breeding adult Arctic Tern (Sterna paradisaea) flying above a cold northern sea.
Subject: full bird in clean side-and-slightly-below view, wings extended in a graceful shallow downstroke. Show a slim pale-gray tern, white rump, solid black cap, uniformly deep coral-red slender bill with no black tip, very short red legs tucked against the body, long narrow pointed wings, translucent pale inner primaries, a narrow dark trailing edge near the outer wing, and a deeply forked white tail with two long outer streamers.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Bird centered around x=0.56, y=0.46 and occupies about 48–55% of frame width. Entire bill, both wing tips and both tail streamers remain inside the frame with at least 10% margin on every edge. Soft sea and distant low coastline supply scale without clutter.
Lighting/mood: clear diffuse Arctic summer daylight, documentary wildlife photography, crisp field marks, natural color and anatomy.
Constraints: Sterna paradisaea, not Common Tern and not Antarctic Tern; exactly one complete bird; no text, logo, watermark, border or collage.
Avoid: black bill tip, long legs, orange bill, bulky gull, white forehead, juvenile plumage, fish, prey, nest, egg, second bird, person, boat, tracking tag, leg band, cropped wing, cropped tail, edge contact, duplicated wings or malformed feathers.
```

### 03 · Antarctic pack-ice migration

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Arctic Tern gallery image, migration and non-breeding habitat
Primary request: create a scientifically grounded photorealistic Southern Ocean marginal-pack-ice panorama representing the non-breeding range of an Arctic Tern (Sterna paradisaea).
Scene/backdrop: broad cold open ocean broken by low natural pack-ice floes and narrow dark-water leads, muted Antarctic summer sky, no named place, coast, research base or ship. Habitat carries at least 85% of the visual weight.
Subject: exactly one small but fully visible adult Arctic Tern flying low over an open-water lead on the center-right around x=0.68, y=0.48. Show the complete slender bird with long pointed wings, pale gray-and-white body and deeply forked tail. Use non-breeding adult head pattern: white forehead and forecrown, compact black rear cap and nape, dark reddish-black slender bill and dark short legs.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Wide environmental view with the whole bird readable but modest in scale; all wing tips and tail streamers well inside the frame.
Lighting/mood: cold clear diffuse light, restrained blues and grays, realistic sea texture, documentary expedition photography without human presence.
Scientific boundary: this is a generalized reconstruction of Antarctic pack-ice-edge use, not a tracked position or proof of route.
Constraints: exactly one bird and no other animals; no text, map, arrows, route line, labels, logo, watermark, border or collage.
Avoid: breeding-black forehead, red bill, penguin, whale, seal, second bird, flock, iceberg fantasy, ship, station, person, drone, tag, ring, cropped bird, edge contact or impossible ice.
```

Acceptance note: the final bird remains too distant to show a reliable white forehead. The asset supports the pack-ice setting and one-bird count, not the requested seasonal-plumage detail.

### 04 · Shallow plunge foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Arctic Tern gallery image, surface foraging behavior
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an adult Arctic Tern (Sterna paradisaea) making a shallow plunge toward a small fish near the sea surface.
Scene/backdrop: cold clear coastal water with soft ripples and a few submerged stones far below, generalized northern breeding-season foraging habitat.
Subject: exactly one complete breeding adult Arctic Tern angled bill-first toward the water, wings raised and partly swept back immediately before entry. Retain solid black cap, uniformly coral-red slender bill with no black tip, pale gray body, long pointed wings and deeply forked white tail with long streamers. Exactly one small silvery fish remains visible just below the surface and clearly separated from the bill; no contact, injury or capture.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Dynamic diagonal but crop-safe. Tern around x=0.48, y=0.42, fish around x=0.55, y=0.72. Entire bill, both wings and tail inside frame with generous margins; water context remains visible.
Lighting/mood: crisp natural daylight, fast-shutter documentary wildlife photography, realistic refraction and splash-free pre-entry moment.
Scientific boundary: one approach does not establish capture success or full diet.
Constraints: exactly one bird and one fish; no text, logo, watermark, border or collage.
Avoid: black-tipped bill, long legs, gull shape, second fish, school of fish, caught fish, blood, injury, impact splash, deep underwater bird, nest, egg, chick, person, boat, net, fishing gear, cropped wings, cropped tail, edge contact or malformed anatomy.
```

### 05 · Ground scrape and two eggs

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Arctic Tern gallery image, breeding and nest
Primary request: create one scientifically grounded photorealistic wildlife reconstruction of an Arctic Tern (Sterna paradisaea) beside a ground scrape containing exactly two eggs.
Scene/backdrop: open high-Arctic coastal shingle with small gray stones, sparse low tundra plants and a soft strip of cold sea in the far background; generalized site.
Subject: exactly one complete breeding adult Arctic Tern stands alert but calm to the right of one shallow minimally lined scrape. The adult has a solid black cap, uniformly deep coral-red slender bill with no black tip, pale gray body, very short red legs, pointed folded wings and deeply forked white tail with long streamers. Inside the scrape, show exactly two separate, fully visible, olive-brown eggs with irregular dark brown blotches. No egg overlaps or hides another.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Adult around x=0.65, y=0.48; nest and eggs around x=0.40, y=0.66. Entire bill, cap, both feet and tail remain safely inside frame. Both eggs readable at natural scale, with ample habitat context.
Lighting/mood: soft Arctic summer daylight, quiet documentary wildlife photography, restrained color and precise textures.
Scientific boundary: two eggs illustrate a common clutch within a range of one or two, occasionally three; this is not a named nest or proof of outcome.
Constraints: exactly one adult, one scrape and exactly two eggs; no text, logo, watermark, border or collage.
Avoid: third egg, hidden egg, broken egg, chick, hatchling, second bird, male-female pair, elaborate twig cup, tree nest, fish, predator, person, research marker, ring, tag, fence, building, cropped feet, cropped tail, edge contact, duplicated legs or malformed bill.
```

### 06 · Distance colony monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Arctic Tern gallery image, non-invasive colony monitoring
Primary request: create one scientifically grounded photorealistic conservation-monitoring reconstruction for Arctic Tern (Sterna paradisaea).
Scene/backdrop: broad open high-Arctic coastal landscape with a pale gravel islet separated from the near shore by a wide channel of cold water, sparse tundra plants and low distant hills. The separation and habitat dominate the image.
Human subjects: on the far-left near shore, exactly two small adult field observers in muted unbranded outdoor clothing. One uses exactly one spotting scope on exactly one tripod; the second records in one plain notebook. Keep faces unidentifiable and postures calm.
Bird subject: on the distant mid-right gravel islet, show exactly one small but fully visible breeding adult Arctic Tern standing on open shingle, well separated from the observers. Its silhouette shows black cap, red bill, pale body, short legs and long deeply forked tail. No nest, egg or chick is visible.
Composition/framing: exact horizontal 3:2, 1536 × 1024 intent. Wide view, observers around x=0.20, y=0.64; bird around x=0.76, y=0.54; uninterrupted water buffer across the center. All people, tripod and bird fit inside frame.
Lighting/mood: clear diffuse summer light, documentary field-science realism, restrained natural color.
Scientific and ethical boundary: this represents observation from a distance, not a named survey, colony count, tracked bird or population trend.
Constraints: exactly two observers, one scope, one tripod, one notebook and one bird; no text, logo, watermark, border or collage.
Avoid: third person, binoculars, camera, telephoto lens, second scope, drone, boat, vehicle, hide, blind, tent, bait, feeding, trap, net, cage, handling, touching, chasing, approach toward bird, second bird, flock, egg, chick, nest, other animal, uniform patch, sign, building, road, cropped equipment or malformed anatomy.
```

## Static and visual validation

- All six TinyPNG-compressed sources decode as opaque 1536 × 1024, 8-bit indexed-color PNG files in sRGB space.
- All six runtime assets decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files.
- Source and runtime basenames form six one-to-one pairs after removing `-source`.
- The six compressed source PNG files total 4,533,054 bytes. The project did not retain the pre-compression drafts, so this record does not claim an unverifiable source-reduction percentage.
- Runtime WebP sizes are 114,070; 42,016; 67,182; 114,870; 180,900; and 254,226 bytes in frame order, totaling 773,264 bytes. WebP conversion reduced the compressed-source total by 82.9 percent.
- Original-resolution inspection confirmed the accepted observations in the asset table. Checks covered bird, fish, egg, observer and equipment counts; complete anatomy; cover-copy space; pre-contact foraging; the shallow scrape; the water buffer; and the absence of text or branding.
- Frame 03 inspection confirmed one distant bird over pack ice but could not verify the requested nonbreeding white forehead. No caption or profile claim should infer that detail from this asset.
- Runtime inspection after conversion found no new cropping, extra subjects, visible text, logos, watermarks, borders or material compression defects.
- Verification used static file inspection and the built-in image viewer. No GUI or headless browser was used.
