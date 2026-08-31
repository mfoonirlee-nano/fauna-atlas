# Atlantic Hagfish image set

OpenAI's built-in imagegen created eleven outputs on 2026-08-31 for the Fauna Atlas _Myxine glutinosa_ profile. Six accepted frames cover a soft-bottom portrait, external form, temporary burial, hydrated slime, body knotting and generic trap inspection. Static review rejected visible-eye anatomy, nozzle-like slime openings and an unreadable first knot before the final set was accepted.

- Generation tool: OpenAI built-in imagegen
- Generation modes: photorealistic-natural and scientific-educational with photorealistic underwater rendering
- Edit mode: one precise-object edit removed a visible eye from frame 03
- Research brief: [`docs/research/atlantic-hagfish-profile.md`](../../../../../docs/research/atlantic-hagfish-profile.md)
- Source directory: `src/assets/source/species/atlantic-hagfish/`
- Runtime directory: `public/images/species/atlantic-hagfish/`
- Source format: 1536 × 1024 opaque single-frame sRGB PNG
- Runtime format: 1536 × 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 11, comprising ten brand-new generations and one precise-object edit
- Compression: TinyPNG returned HTTP 429 for all six scoped source files without changing them. The local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. Runtime WebPs use cwebp 1.6.0 with quality 82, method 6 and multithreading.
- Byte totals: 16,732,492 bytes across the six accepted generator PNGs before compression; 5,416,887 bytes across the six compressed source PNGs; 1,116,284 bytes across the six runtime WebPs; 6,533,171 bytes across both accepted on-disk sets

## Accepted files and visual boundaries

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | `01-muddy-seafloor-adult-cover-source.png` | `01-muddy-seafloor-adult-cover.webp` | Exactly one complete hagfish rests on a generic muddy seafloor. The blunt head, uninterrupted scaleless body, low tail finfold and part of the ventrolateral slime-pore row remain visible. | The scene cannot identify locality, depth, measured length, age, sex or individual state. Dark flank marks are not multiple branchial openings; _Myxine_ has one external branchial opening on each side. |
| 02 | `02-blunt-head-and-sensory-tentacles-source.png` | `02-blunt-head-and-sensory-tentacles.webp` | One complete hagfish shows a single terminal nasal aperture, fleshy sensory barbels, one near-side external branchial opening, small ventrolateral slime pores and a continuous tail finfold. | Generated pixels do not provide a countable barbel diagnosis. The image cannot establish exact barbel number, internal gill-pouch number, sex, age, measured length or locality. The nostril is not a mouth or suction disc. |
| 03 | `03-mud-burrow-benthic-habitat-source.png` | `03-mud-burrow-benthic-habitat.webp` | One hagfish remains partly buried in soft sediment with its anterior body exposed from a temporary shallow depression. No normal eye or iris is visible after the edit. | The reconstruction cannot prove that the animal excavated or occupied the depression, nor establish burrow depth, permanence, nesting, locality, water depth or habitat-use frequency. |
| 04 | `04-slime-thread-defense-cloud-source.png` | `04-slime-thread-defense-cloud.webp` | One complete hagfish lies beside one localized, partly transparent mucus-and-protein-thread network that begins along a section of small flank pores. | The still cannot establish stimulus, discharge rate, volume, thread count, defensive function or outcome. The larger anterior side opening represents the single near-side external branchial opening, not a slime nozzle. |
| 05 | `05-single-body-overhand-knot-source.png` | `05-single-body-overhand-knot.webp` | One head, one tail and one continuous body can be traced through one loose simple overhand knot with a readable crossing and one passage through the loop. | The still cannot establish knot direction, force, duration, frequency or function. It does not prove escape, feeding leverage or mucus removal in this event. |
| 06 | `06-empty-trap-fishery-monitoring-source.png` | `06-empty-trap-fishery-monitoring.webp` | Exactly two field workers inspect one empty cylindrical perforated sampling trap while one worker records an observation. Zero animals and zero bait appear. | The generic gear cannot establish a standardized hagfish trap, escape-hole specification, lawful fishery protocol, detection, absence, abundance, stock trend, institution, locality or conservation result. |

The profile applies the current strict eastern-Atlantic concept of _M. glutinosa_. Western Atlantic records formerly placed under that name are treated as _M. limosa_. Frame 06 therefore stays generic and does not borrow Canadian trap dimensions, catch rates, quotas or survey conclusions.

## Imagegen output ledger

All outputs share this parent directory:

`/Users/chris.li/.codex/generated_images/01a05550-1bb0-7893-9bcb-ffd07d4dc442/`

| Call | Mode | Generator output | Decision |
| ---: | --- | --- | --- |
| 01 | Brand-new, photorealistic-natural | `exec-a07829f7-d102-4364-8c5b-fd384ee823eb.png` | Accepted as frame 01. |
| 02 | Brand-new, scientific-educational | `exec-3b66da3a-f598-4852-83d6-367f5928e9f8.png` | Rejected after review because the head openings could be misread. |
| 03 | Brand-new, photorealistic-natural | `exec-09dc6314-6b91-4fe7-817c-542a0c874e23.png` | Rejected because it showed a normal external eye. |
| 04 | Precise-object edit of call 03 | `exec-e57517e9-d865-4969-968b-97a0ee5364f5.png` | Accepted as frame 03 after the visible-eye correction. |
| 05 | Brand-new, scientific-educational | `exec-520201c8-c76c-4ddd-b126-413c1ad549d5.png` | Rejected because the slime resembled a large web and the openings resembled nozzles. |
| 06 | Brand-new, scientific-educational | `exec-c2c91b10-5de7-4a96-827e-14cc254de6ce.png` | Rejected after review because the body path through the knot was ambiguous. |
| 07 | Brand-new, conservation fieldwork | `exec-901abb5a-8ff0-443c-a77a-3dea83d708ff.png` | Accepted as frame 06. |
| 08 | Brand-new, scientific-educational | `exec-54c1bb4f-e956-485d-94d8-dbf6257ae405.png` | Superseded by call 11 after review found oversized pore-like openings. |
| 09 | Brand-new, scientific-educational | `exec-a7e481d6-3958-4e69-bae5-eb87c4f52698.png` | Accepted as frame 02 with a non-counting morphology boundary. |
| 10 | Brand-new, scientific-educational | `exec-5bcecc2b-5ad4-426a-a52b-0ca852fd2b53.png` | Accepted as frame 05 after the body path and single crossing became readable. |
| 11 | Brand-new, scientific-educational | `exec-5ab15f58-9604-40fc-b0bc-35e7ea7973d7.png` | Accepted as frame 04 after the secretion origin moved to a row of minute flank pores. |

## Final prompt record

These are the consolidated final prompts for the six accepted assets. They retain the generation constraints and the explicit scientific limits used during review.

### Frame 01

```text
Use case: photorealistic-natural. Create an original Fauna Atlas Atlantic Hagfish cover at exactly 1536 × 1024, horizontal 3:2. Show exactly one complete adult Myxine glutinosa resting above a muddy North Atlantic seafloor, facing left and occupying the right 60 percent. Give it a smooth scaleless pink-to-slate body, blunt head, one terminal median nostril, subtle sensory barbels, eyes concealed beneath the skin, one near-side external branchial opening, a row of small lower-flank slime pores and a low continuous tail finfold. No paired fins, scales, suction disc or annular teeth. Keep every part of the animal inside frame. Add no other animal, slime, prey, burrow, trap, person, label, logo or watermark. The image cannot establish locality, depth, measured length, age, sex or individual state.
```

### Frame 02

```text
Create a replacement scientific-educational raster still for an Atlantic hagfish species profile. Exact output 1536×1024, landscape 3:2, photorealistic underwater documentary style. Show exactly one complete adult Myxine glutinosa lying naturally on pale fine silt, its entire uninterrupted body visible from blunt head at left to tapering tail at right. The head must be anatomically clear without resembling a lamprey: one small terminal median nostril drawn as a shallow unringed oval slit, not a thick circular hole and not a suction cup; exactly six thin sensory barbels distributed around the nasal and oral regions; a small closed mouth with no visible teeth; no visible iris or normal eye, only smooth continuous skin where the rudimentary eyes lie beneath it. On the near side, show exactly one tiny external gill aperture as a subtle pinhole on the ventrolateral surface roughly one quarter of body length behind the head, never large, never near the eye region. Show a row of numerous very small ventrolateral slime pores continuing along much of the body and a low continuous finfold around the tail. Smooth scaleless pink-gray skin, no paired fins, no separate dorsal fin, no scales. Composition: animal fills about 72% of frame, head large enough to read; diffuse cold North Atlantic underwater light; clean background; no other animal, no slime, no burrow, no trap, no labels, arrows, text, logo, frame, collage, specimen tray, circular sucker, annular teeth, seven gill holes, eel pectoral fins, or prominent eyes. Scientific boundaries: the image may establish one nostril, six barbels, concealed eyes, one tiny external gill opening on the visible side, and small slime pores only; it must not imply sex, age, measured length, depth, locality, or behavior.
```

Review narrowed the product caption despite the prompt: the final pixels do not show all requested barbels clearly enough for counting.

### Frame 03 and eye correction

```text
Create an original photorealistic-natural 1536 × 1024 horizontal underwater habitat still. Show a wide cold-water muddy continental-shelf seafloor with exactly one Myxine glutinosa partly exposed from one temporary shallow depression. Only the anterior third should remain above the soft sediment; the rest of the same continuous body enters the mud without a cut edge. Place the small animal near x=0.67, y=0.66 and let it occupy about 10–12 percent of image width. Show a blunt head, small terminal nostril and fine barbels. No other animal, nest, permanent tunnel, trap, text, logo or landmark. The scene cannot establish excavation, occupancy, burrow depth, permanence, locality, water depth or habitat-use frequency.
```

```text
Precise-object edit: remove the prominent visible eye from the hagfish head. Replace it with continuous skin and, at most, one tiny diffuse pale subcutaneous spot without an iris, pupil, socket or raised eyeball. Preserve the exact animal, pose, sediment, depression, composition, lighting, size and every other object. Add nothing else.
```

### Frame 04

```text
Create a replacement scientific-educational raster still for an Atlantic hagfish slime mechanism. Exact output 1536×1024, landscape 3:2, photorealistic underwater documentary style. Show exactly one complete adult Myxine glutinosa on a flat dark silty seafloor, head at left and tapering tail at right, the uninterrupted body entirely inside frame. Along the lower near-side flank, show a long series of numerous pin-sized subtle slime-gland pores, each smaller than a skin freckle and flush with the skin, never two large holes and never nozzle-like. Beside a short middle section of that ventrolateral pore row, show one compact, irregular, partly transparent hydrated slime-and-protein-thread cloud beginning flush along several minute pores: clear-to-milky mucus with delicate loose filament texture, spreading softly in seawater. It must look like wet translucent hydrogel with fine fibers, not smoke, cotton, foam, spiderweb, fishing net, cocoon, explosion, spray jets, or mouth secretion. The animal has smooth scaleless pink-gray skin, blunt head, tiny concealed eyes with no visible iris, a small terminal nostril with fine sensory barbels, one tiny external gill aperture on the visible side, and a low continuous tail finfold; no paired fins. Composition: animal occupies about 68% of width, slime cloud localized and smaller than the animal, clean water around both; restrained cold North Atlantic light. No predator, prey, other animal, hands, tools, trap, burrow, labels, arrows, text, logo, frame, collage, prominent eyes, circular sucker, annular teeth, seven gill holes, large flank openings, visible ducts, or body fragments. Scientific boundary: the still can depict one animal and a localized mucus-and-thread network hydrating in seawater; it must not establish the trigger, discharge rate, volume, thread count, defensive outcome, sex, age, measured length, depth, or locality.
```

### Frame 05

```text
Create a replacement scientific-educational raster still showing knotting in exactly one Atlantic hagfish, Myxine glutinosa. Exact output 1536×1024, landscape 3:2, photorealistic underwater documentary style on a flat pale muddy seafloor. Anatomical and topology priority: exactly one animal with one blunt head at far left and one tapering tail tip at far right; one single continuous cylindrical pink-gray scaleless body whose path can be traced unambiguously from head to tail. The animal forms exactly one loose, simple overhand knot in the middle: the body bends into one open loop, makes exactly one clearly separated crossing with visible depth order, and the tapering tail segment passes once through the open loop before continuing to the far-right tail tip. Leave small clear water gaps wherever adjacent body sections approach so no segments appear fused, branched, duplicated, cut, or turned into an independent closed ring. The central loop must remain visibly open, irregular and biological, never a donut, torus, pretzel, rope sculpture, closed detached circle, or two loops. The head has one small unringed terminal nostril, a few fine sensory barbels, and smooth skin with no visible iris; it must not resemble a lamprey suction cup. Low continuous tail finfold, no paired fins, no scales. Frame the entire animal with generous margin; soft cold North Atlantic underwater light; one simple shadow grounds the body. No other animals, slime, prey, trap, labels, arrows, text, logo, collage, prominent eyes, circular sucker, annular teeth, multiple heads, multiple tails, extra body fragments, fused geometry, severed sections, or self-intersection hidden by mud. Scientific boundary: the still can depict one readable body knot only; it must not claim direction, force, function, frequency, sex, age, measured length, depth, or locality.
```

### Frame 06

```text
Use case: photorealistic-natural conservation fieldwork. Create an original Fauna Atlas 1536 × 1024 horizontal 3:2 still on a small anonymous working vessel in cold overcast North Atlantic water. Show exactly two adult field workers and exactly one open, empty cylindrical perforated sampling trap. One worker inspects the empty cylinder and hinged lid; the second holds exactly one recording board and one pencil. Show zero animals, zero bait, zero catch and no other gear that resembles another trap. Keep faces and vessel anonymous. Add no flag, institution, readable writing, quota sign, logo or watermark. The frame represents generic sampling work only. It cannot establish a standardized hagfish-trap design, escape-hole dimensions, protocol compliance, species detection or absence, abundance, stock trend, locality, institution or conservation outcome.
```

## Static validation

- All six PNGs and six WebPs identify as 1536 × 1024, sRGB, opaque and single-frame.
- Full-resolution source and runtime contact sheets were inspected after the final replacements.
- Twelve distinct SHA-256 values confirm that no frame was duplicated across either set.

| File | SHA-256 |
| --- | --- |
| `01-muddy-seafloor-adult-cover-source.png` | `d2ae4209dfab572ff46a68fb9fabbac0eb700c5968bc7c6142c37bc2d94e0c5d` |
| `02-blunt-head-and-sensory-tentacles-source.png` | `ca4438b851e1570d13610c7cb47b4d39d4c3ae1ec5ca03b7aa0cf7a6ab0e9b49` |
| `03-mud-burrow-benthic-habitat-source.png` | `21c83ad80ce7a4cae69ae11be9916a4494754c19ecf80eab26c2d23605482ee7` |
| `04-slime-thread-defense-cloud-source.png` | `1b4cfbc1b1a81aedc117580d74d9f044c2579217eaf233e4b570ea3396acd64d` |
| `05-single-body-overhand-knot-source.png` | `95efa71bed7ff63a2b2d1a818085ab2eea480b70b8fc40d17d12513cc8bb8a83` |
| `06-empty-trap-fishery-monitoring-source.png` | `e6e7b656587ca60a9f3e08ba3f149dfddc130e21692732ae771038947cd1576d` |
| `01-muddy-seafloor-adult-cover.webp` | `83bb4348aca14955681e2254e1997fa28f798f864c7cf67f95e723a6f9fe1ea6` |
| `02-blunt-head-and-sensory-tentacles.webp` | `45454e32f068adf879f83ca2f2d6e8a416b25e17b648aeb2af75afca1b94f844` |
| `03-mud-burrow-benthic-habitat.webp` | `47cb0a24f6e9eb2909d8adbb95448037668d800c6c2a0b378d0cbfb3a4cb4976` |
| `04-slime-thread-defense-cloud.webp` | `5d13cc7012d9c4324311bedafed8c6788ee6ee8a4ec41eda0c3a8de89c3bbbbd` |
| `05-single-body-overhand-knot.webp` | `b2f61997fd9abec93274024ba9f97d9ec34d92067fb059aa3ca87e06baee199b` |
| `06-empty-trap-fishery-monitoring.webp` | `7367a97c4622ab313de3ebfd5f657745a1a6bf5e1bef754f6ab3b6d099b47d2b` |
