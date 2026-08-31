# Ocellate Torpedo image set

OpenAI's built-in imagegen created nine outputs on 2026-08-31 for the Fauna Atlas _Torpedo torpedo_ profile. Six accepted frames cover a soft-bottom portrait, dorsal field marks, partial burial, the ventral electric-organ region, a small-fish encounter and non-contact visual monitoring. Static review corrected the burial frame's eye, spiracle and caudal-fin anatomy, then corrected the feeding frame's ocellus placement before accepting the set.

- Generation tool: OpenAI built-in imagegen
- Generation modes: photorealistic-natural and scientific-educational
- Edit mode: three precise-object edits corrected frame 03 anatomy and frame 05 ocellus placement
- Research brief: [`docs/research/ocellate-torpedo-profile.md`](../../../../../docs/research/ocellate-torpedo-profile.md)
- Source directory: `src/assets/source/species/ocellate-torpedo/`
- Runtime directory: `public/images/species/ocellate-torpedo/`
- Source format: 1536 × 1024 opaque single-frame sRGB PNG
- Runtime format: 1536 × 1024 opaque single-frame lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 9, comprising six brand-new generations and three precise-object edits
- Compression: TinyPNG returned HTTP 429 for all six scoped source files without changing them. The local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. Runtime WebPs use cwebp with quality 82, method 6 and multithreading.
- Byte totals: 18,354,416 bytes across the six accepted generator PNGs before compression; 6,351,396 bytes across the six compressed source PNGs; 1,552,254 bytes across the six runtime WebPs; 7,903,650 bytes across both accepted on-disk sets

## Accepted files and visual boundaries

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | `01-mediterranean-soft-bottom-portrait-source.png` | `01-mediterranean-soft-bottom-portrait.webp` | One complete ray rests on a generalized sandy-silt seabed with a thick rounded disc, five flat blue-centred ocelli, two dorsal fins and one caudal fin. | The frame cannot establish sex, age, measured length, exact locality, water depth, abundance or active discharge. |
| 02 | `02-five-ocelli-diagnostic-dorsal-source.png` | `02-five-ocelli-diagnostic-dorsal.webp` | One complete ray shows a typical five-ocellus dorsal pattern, a thick near-circular disc, a stout tail, two dorsal fins and a broad caudal fin. | Five is a common pattern, not a fixed species-wide count. Generated pixels cannot support a count of spiracle papillae or a definitive specimen diagnosis. |
| 03 | `03-sand-burial-resting-source.png` | `03-sand-burial-resting.webp` | One ray lies under a thin sediment layer with the central disc, head openings and complete tail exposed. | Partly obscured markings cannot provide an ocellus count. The still cannot establish excavation method, duration, time of day, prey, depth or detection probability. |
| 04 | `04-ventral-electric-organs-source.png` | `04-ventral-electric-organs.webp` | One swimming ray exposes its pale ventral surface, mouth region, paired gill-slit rows and two broad symmetrical textured regions beside the head. | The fine texture is an educational reconstruction of electric-organ position, not a dissection. It cannot provide gill-slit, electrocyte or column counts, organ mass, voltage, current or discharge timing. |
| 05 | `05-small-fish-prey-encounter-source.png` | `05-small-fish-prey-encounter.webp` | One ray and one intact small benthic fish remain separated over soft sediment. Five ocelli stay on the broad disc after two placement edits. | Proximity cannot prove prey choice, pursuit, discharge, capture, feeding success or diet proportion. No visible light represents electricity. |
| 06 | `06-noncontact-visual-survey-source.png` | `06-noncontact-visual-survey.webp` | One distant diver photographs one complete ray without contact, bait, tags or measuring gear. | A generated encounter cannot establish a real site, individual identity, detection, occupancy, abundance, population trend or monitoring result. |

The profile uses the accepted eastern Atlantic and Mediterranean _T. torpedo_ concept. A 2023 mitochondrial study found potential cryptic lineages outside the Mediterranean, so no image claims a genetically verified locality. All electrical effects remain invisible. The set contains no lightning, sparks, glow or current lines.

## Imagegen output ledger

All outputs share this parent directory:

`/Users/chris.li/.codex/generated_images/01a055bf-14fe-7b63-bee9-b1c91d713c43/`

| Call | Mode | Generator output | Decision |
| ---: | --- | --- | --- |
| 01 | Brand-new, photorealistic-natural | `exec-334dc643-621d-4609-b532-cde0f1350414.png` | Accepted as frame 01. |
| 02 | Brand-new, scientific-educational | `exec-bc1c7637-0fa7-4450-bf4e-01bab2ca938e.png` | Superseded because the caudal fin and paired head openings were incomplete. |
| 03 | Precise-object edit of call 02 | `exec-678df95d-64a8-4482-997a-750b43c05cc0.png` | Accepted as frame 03 after the caudal-fin and head-opening correction. |
| 04 | Brand-new, scientific-educational | `exec-5dd7dbdc-e8cd-4d76-9ec2-3f2eb267c056.png` | Accepted as frame 02. |
| 05 | Brand-new, scientific-educational | `exec-665b1908-242f-4862-93d1-a698fd8cd375.png` | Accepted as frame 04 with a non-counting anatomy boundary. |
| 06 | Brand-new, photorealistic-natural | `exec-b9e0cee7-530b-46a0-a02b-47bac1781e55.png` | Superseded because one ocellus fell on the tail. |
| 07 | Precise-object edit of call 06 | `exec-dde38d08-17ea-4d66-a005-2c21efa65ff5.png` | Superseded because six disc ocelli remained. |
| 08 | Precise-object edit of call 07 | `exec-3f34b300-9682-4d4b-8605-2ace323bded6.png` | Accepted as frame 05 after one extra small disc ocellus was removed. |
| 09 | Brand-new, photorealistic-natural | `exec-1c2cf2b8-8eb2-4e71-a8e6-d27e762d3fd5.png` | Accepted as frame 06. |

## Final prompt record

These consolidated prompts retain the generation constraints and accepted edits.

### Frame 01

```text
Use case: photorealistic-natural. Create an original Fauna Atlas species-profile cover at exactly 1536 × 1024, horizontal 3:2. Show exactly one complete adult Torpedo torpedo resting on a clean shallow Mediterranean sandy-silt seabed. Use a low oblique dorsal view. Give it a thick near-circular fleshy disc, small eyes followed by paired spiracles, a stout tail, two separate rounded dorsal fins and one broad triangular caudal fin. Its smooth reddish-brown dorsal skin carries exactly five flat blue-centred ocelli, each with a thin dark ring and broad cream ring, plus scattered small pale spots. Keep the whole animal inside frame and leave open habitat to the left. Add no visible electrical effect, lightning, sparks, glow, aura, prey, other animal, person, gear, tail stinger, text, logo, watermark, border or collage. The image cannot establish measured size, sex, age, locality, depth, discharge, abundance or population state.
```

### Frame 02

```text
Use case: scientific-educational. Create an original dorsal field-mark still at exactly 1536 × 1024, horizontal 3:2. Show exactly one complete Torpedo torpedo almost directly from above on flat pale sand. Give it a thick near-circular disc about 1.3 times wider than long, a broad rounded front edge, small eyes and spiracles, a stout tail, exactly two rounded dorsal fins with the first larger, and one broad triangular caudal fin. Show exactly five flat blue-centred ocelli on the broad disc, each with a black ring and cream halo. Keep every edge and fin visible with a clear margin. Add no dorsal mouth or gill slits, tail barb, extra fin, visible electricity, lightning, sparks, glow, prey, plant, label, ruler, tray, text, logo, watermark, border or collage. Five is the chosen individual's pattern and not a fixed species-wide count.
```

### Frame 03 and anatomy correction

```text
Use case: scientific-educational. Create an original photorealistic habitat still at exactly 1536 × 1024, horizontal 3:2. Show exactly one continuous Torpedo torpedo beneath a thin natural layer of sand on a broad Mediterranean sandy-silt seabed. Keep the central disc, both small eyes, two separate spiracles behind the eyes, and the complete stout tail visible. The tail must have exactly two dorsal fins followed by one complete broad triangular caudal fin. Let some blue-centred dorsal markings remain partly visible through sediment without making them countable. Add no permanent tunnel, nest, eggs, prey, other animal, person, gear, dorsal gill slits, tail stinger, visible electricity, lightning, glow, text, logo or watermark. The still cannot establish excavation method, duration, time of day, exact depth, locality, detection or abundance.
```

```text
Precise-object edit: correct only the paired eye and spiracle arrangement and complete caudal-fin anatomy. Keep the same single partly buried ray, pose, sediment, seabed, camera, composition, lighting and every other element unchanged.
```

### Frame 04

```text
Use case: scientific-educational. Create an original photorealistic underwater underside view at exactly 1536 × 1024, horizontal 3:2. Show exactly one complete Torpedo torpedo gliding just above pale sand with its cream-white ventral surface facing the camera. Show the curved mouth and nostrils, paired short gill-slit rows, and two broad kidney-shaped electric-organ regions beside the head only as subtle symmetrical honeycomb tissue texture beneath intact translucent skin. Keep the thick round disc, stout tail, two dorsal fins and complete caudal fin inside frame. Add no cutaway, exposed tissue, wound, gore, electricity, lightning, sparks, blue glow, aura, energy line, label, arrow, ruler, text, logo, watermark, prey, other animal, diver, hand or tail stinger. The texture cannot provide anatomical counts, organ mass or electrical measurements.
```

### Frame 05 and ocellus corrections

```text
Use case: photorealistic-natural. Create an original feeding-ecology still at exactly 1536 × 1024, horizontal 3:2. Show exactly one complete Torpedo torpedo and exactly one intact small goby over a shallow Mediterranean sandy-silt bottom. Keep one clear water gap between them. Give the ray a thick round reddish-brown disc, five flat blue-centred cream-ringed ocelli on the broad disc, small eyes and spiracles, a stout tail, two dorsal fins and a broad caudal fin. Add no contact, bite, swallowing, wound, blood, carcass, extra animal, visible electricity, lightning, arc, spark, glow, aura, bubbles from discharge, diver, gear, text, logo, watermark, border or collage. The still shows proximity only and cannot prove prey choice, attack, discharge, capture or diet proportion.
```

```text
Precise-object edits: remove the ocellus from the tail and restore ordinary tail skin; keep five ocelli on the broad disc; remove one extra small central disc ocellus while preserving the five larger disc ocelli. Preserve the ray, fish, separation, habitat, camera and lighting.
```

### Frame 06

```text
Use case: photorealistic-natural. Create an original conservation-monitoring still at exactly 1536 × 1024, horizontal 3:2. Show exactly one complete Torpedo torpedo unburied on open sand at centre-right and exactly one scientific diver in the left middle distance at least three ray body lengths away. The diver remains neutrally buoyant and photographs the ray with one unbranded camera. Keep a broad clear-water gap between them. Show the ray's thick round disc, five flat blue-centred ocelli, stout tail, two dorsal fins and complete caudal fin. Add no touching, approach, bait, flash beam, tag, ruler, slate, readable data, transect line, net, cage, capture, boat, second person, other animal, visible electricity, lightning, sparks, glow, text, logo or watermark. The frame cannot establish a real site, individual identity, detection, abundance, occupancy, trend or protection result.
```

## Static validation

- All six PNGs and six WebPs identify as 1536 × 1024, sRGB, opaque and single-frame.
- Full-resolution source images and a six-frame contact sheet were inspected after the final replacements.
- Twelve distinct SHA-256 values confirm that no frame was duplicated across either set.

| File | SHA-256 |
| --- | --- |
| `01-mediterranean-soft-bottom-portrait-source.png` | `54439042c71ecb41156ac9382d98fc43b874ce72a2abe8ae9f7a43822667ab54` |
| `02-five-ocelli-diagnostic-dorsal-source.png` | `d26d3f560838ce7ecd918ac15437d0b46acbff9ca616dee2cbd2ada3e3e7c668` |
| `03-sand-burial-resting-source.png` | `efeda0687903e99190cdd933d645c4b8182e15ce3e20991cbc2ecd3cdb0cebea` |
| `04-ventral-electric-organs-source.png` | `f22266635ff6ea29df76fe15c4f9daed33451ad99f1f9254ec222d5e54513158` |
| `05-small-fish-prey-encounter-source.png` | `ff86dd79243644bbf9548f5c494eca3d13cdc0a644caaf130c0479b4d21ef529` |
| `06-noncontact-visual-survey-source.png` | `d7d6b2b1b784095d86a937dab92fc27d669e05348d252c7463737a857f0c4b3f` |
| `01-mediterranean-soft-bottom-portrait.webp` | `bff14e0330a8dfa7dce8e255a4bfd8cec1c3cfbeeceacfec809cb5cab3ba64d4` |
| `02-five-ocelli-diagnostic-dorsal.webp` | `fadbdb2bc1df510f660598ed435002a3f7108cd9286a38013b43548b19f07662` |
| `03-sand-burial-resting.webp` | `78bdf97a8a14faccc9725c937a80465eb0e9c4e99629bc6c1391bbff4f020118` |
| `04-ventral-electric-organs.webp` | `9e8161bbf3e441df98f84cf1624e516bf34f15a593ec6f153b405e60f4e6e409` |
| `05-small-fish-prey-encounter.webp` | `fb8450e96da918387eb867072fd21eb18da0686a8611921007639ba0c3769d69` |
| `06-noncontact-visual-survey.webp` | `7c865f6ad6305e47a390605fc4dbd4faaa2c1e2fae956b1b8d57b66450bfcfc8` |
