# Chinese Alligator image set

OpenAI's built-in imagegen created these six original project images on 2026-08-30 for the Fauna Atlas _Alligator sinensis_ profile. The set covers a generalized low-hill wetland, diagnostic form, a bank-burrow entrance, summer bellowing posture, a vegetation mound nest and non-contact radio monitoring. None of the frames documents a named animal, exact site, population, reproductive outcome or reintroduction result.

- Generation mode: OpenAI built-in imagegen
- Use case: photorealistic-natural for all six frames
- Research brief: [`docs/research/chinese-alligator-profile.md`](../../../../../docs/research/chinese-alligator-profile.md)
- Source directory: `src/assets/source/species/chinese-alligator/`
- Runtime directory: `public/images/species/chinese-alligator/`
- Source format: 1536 × 1024 opaque sRGB PNG
- Runtime format: 1536 × 1024 opaque lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 12, comprising six initial generations, three fresh replacements and three targeted edits
- Compression: TinyPNG returned HTTP 429 for all six scoped source files. The documented fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. Runtime WebPs use cwebp 1.6.0 with repository settings quality 82, method 6 and multithreading.

## Files and review decisions

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | `01-lowland-wetland-adult-portrait-source.png` | `01-lowland-wetland-adult-portrait.webp` | One complete dark adult rests on a vegetated bank beside a low-hill pond; its blunt snout, dorsal armor and continuous tail remain visible. | The generalized landscape cannot identify a reserve, origin, sex, age, status or exact body size. |
| 02 | `02-full-body-diagnostic-profile-source.png` | `02-full-body-diagnostic-profile.webp` | One adult forms an unobstructed side profile with a compact body, short broad snout, low limbs and complete tail. | Perspective cannot expose every ventral osteoderm or establish sex, age, mass or calibrated length. |
| 03 | `03-bank-burrow-entrance-source.png` | `03-bank-burrow-entrance.webp` | One complete adult lies fully outside one oval bank entrance close to still water. | The frame does not prove that the animal dug or used the opening, was dormant, or that any particular internal chamber, pool or air-hole layout exists. |
| 04 | `04-summer-bellowing-posture-source.png` | `04-summer-bellowing-posture.webp` | One adult raises its head, gently arches the tail base and keeps its jaws nearly closed in shallow summer water while low ripples cross the surface. | A silent frame cannot establish sound, frequency, duration, sex, chorus participation, mating function or another animal's response. |
| 05 | `05-vegetation-mound-nest-source.png` | `05-vegetation-mound-nest.webp` | One complete adult rests beside one intact mound of damp leaves, grasses and twigs. | Appearance cannot establish the adult's sex, maternity, guarding, nest ownership, clutch presence or size, temperature, hatching success or universal parental behavior. |
| 06 | `06-reintroduction-radio-monitoring-source.png` | `06-reintroduction-radio-monitoring.webp` | Two field workers use one directional antenna and a notebook across a channel from one complete alligator. | The image does not prove captive origin, release, a working transmitter, detection, adaptation, breeding, survival, identity, institution or locality. |

All six accepted source files were inspected at original resolution before and after the local compression fallback. The selected frames contain the requested animal and human counts, coherent heads and bodies, readable scene elements, no exposed injury or handling, and no text, label, logo, signature, watermark or border. Frame 04 remains a bounded posture reconstruction, not an acoustic record. Frame 05 deliberately omits exposed eggs and hatchlings, avoiding a false clutch count or visually unprovable maternal claim.

## Imagegen output ledger

| Call | Generator output | Decision |
| ---: | --- | --- |
| 01 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-eaf544c1-c229-42ae-8b14-aadd81884fbe.png` | Rejected for frame 01: tail touched the left edge and lacked safe crop margin. |
| 02 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-afc5003f-0f16-4cb8-b944-f9d858238d6e.png` | Accepted as frame 02. |
| 03 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-02e54ae5-9d78-4e13-a565-51ce25d81259.png` | Rejected for frame 03: the tail remained inside the entrance and the full animal was not visible. |
| 04 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-7f533c46-d760-4cd6-80b5-b3017125a6e1.png` | Accepted targeted edit as frame 01 with a complete tail and wider crop. |
| 05 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-89783738-1b51-4005-9ce1-96cb3309ea0e.png` | Accepted fresh replacement as frame 03. |
| 06 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-e0a421b3-752c-4b9d-afb7-86196f540ced.png` | Rejected for frame 04: the animal read too large and crocodile-like, with insufficient tail margin. |
| 07 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-2db2358a-b7cb-4aee-bb80-dd8547c44351.png` | Rejected for frame 05: the tail was cropped at the right edge. |
| 08 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-5269024d-d4c7-401e-8efe-3d62198d2b55.png` | Accepted as frame 06. |
| 09 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-bed23f5d-4a5f-448e-9b41-e2f9b49aaa53.png` | Rejected after independent review: mouth remained too widely open and the tail lacked the requested acoustic-posture arch. |
| 10 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-3b154a3a-2c51-40b4-a63d-8887f64f7267.png` | Rejected after independent review: the edit still clipped the tail tip at the right edge. |
| 11 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-92d995c9-d7e5-404c-aa62-5441884e2d15.png` | Accepted fresh replacement as frame 04 after original-resolution review. |
| 12 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-d1e1b2fa-0bf1-405d-92a7-33a80919bdda.png` | Accepted fresh replacement as frame 05 after original-resolution review. |

## Final prompts

Frame 01 was accepted after a targeted edit, so its base prompt and exact accepted edit instruction are both retained. Frames 04 and 05 use fresh final replacements after independent review rejected the edited candidates.

### 01 · Lowland wetland adult portrait

Base generation prompt:

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Alligator species-profile cover, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a restrained museum-grade natural-history wildlife photograph of exactly one anatomically accurate adult Chinese alligator (Alligator sinensis) resting half out of a small freshwater pond in a generalized low-hill valley wetland of southeastern Anhui, China.
Subject: one complete compact adult Chinese alligator, about the proportions of a roughly 1.5 metre animal but with no ruler or scale claim; dark charcoal-olive hide; short broad blunt snout with a subtly rounded, slightly upturned tip; eyes and nostrils high on the head; heavy orderly dorsal osteoderms; low robust body; four short coherent limbs; one thick tail tapering continuously to a visible point. It must look distinctly smaller and shorter-snouted than a Nile crocodile or gharial, yet not like a broad-headed American alligator giant.
Scene: quiet human-influenced wetland habitat consistent with remnant lower-Yangtze agricultural valleys: a small naturalistic pond, vegetated steep bank suitable for cover, low reeds and sedges, a tiny muddy island, distant soft-focus rice-field geometry and wooded low hills. No exact locality and no active farming spectacle.
Style: original photorealistic professional natural-history editorial photography, sober documentary processing, realistic scales, mud, water reflections and humid air, no stock-photo gloss.
Composition: exact 3:2 horizontal environmental portrait; whole animal across the lower middle, head near x=0.63 y=0.57; snout, all four feet and complete tail remain inside generous crop-safe margins; low respectful telephoto field-camera perspective; habitat readable around the animal.
Lighting: soft early-May morning light after cool mist, muted natural shadows, calm and secretive mood.
Scientific boundary: generalized ecological reconstruction, not a named individual, occurrence record, population count or proof of an exact site.
Constraints: exactly one animal total; one coherent head, four limbs, four feet and one complete tail; closed relaxed jaws; no text, labels, logo, signature, border or watermark; no people, buildings, fences, boats, roads, tags, collars, eggs, nest, prey or other animals.
Avoid: American alligator proportions, enormous broad shovel snout, long narrow crocodile or gharial snout, terminal ghara, caiman spectacles, horned eyelids, dinosaur spikes, exaggerated teeth, aggressive open gape, death roll, attack, giant size, missing tail, duplicated jaws, extra limbs, fused feet, zoo enclosure, manicured park, fantasy, CGI, illustration, painting, oversaturation, teal-orange grading.
~~~

Accepted edit prompt:

~~~text
Edit this exact 1536 x 1024 horizontal Chinese-alligator wetland portrait while preserving the same species, adult anatomy, low-hill southeastern-Anhui-style pond, mist, restrained photorealistic natural-history look, lighting, head position and calm posture. Reframe wider only as needed so the animal's tail no longer touches or exits the left image edge: reconstruct the entire continuous tail through a natural taper to a clearly visible pointed tip with at least 8 percent clean crop-safe margin between that tip and the left border. Keep the complete snout and all feet inside the frame too. Preserve exactly one adult Chinese alligator, one coherent head, four limbs and one tail. Do not enlarge the animal, change the short broad blunt subtly upturned Chinese-alligator snout, add animals, or introduce text, labels, logos, borders, watermarks, people, infrastructure, prey, a nest, eggs, tags, fantasy, CGI or illustration.
~~~

### 02 · Full-body diagnostic profile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Alligator diagnostic gallery image 2 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a clean full-body diagnostic natural-history portrait of exactly one adult Chinese alligator (Alligator sinensis) in an unobstructed left-facing side profile on a damp earthen pond bank.
Subject: one complete compact adult with scientifically plausible Chinese-alligator proportions; dark gray to charcoal-olive body; short broad blunt muzzle with a rounded subtly upturned tip and a slight narrowing immediately behind the nostrils; small high-set eyes; closed jaws with no exaggerated exposed teeth; strong neck; low stocky trunk; multiple neat rows of prominent dorsal scutes; four short splayed legs and naturally formed clawed feet; one muscular tail continuing without breaks to a fine visible tip. Preserve a modest roughly 1.5 metre-looking body proportion without a size calibration or sex claim.
Backdrop: softly blurred neutral reeds, damp soil and still freshwater in a generalized eastern Chinese wetland; no distinctive landmark.
Style: photorealistic museum diagnostic field portrait, faithful anatomy and restrained color, crisp scale and scute texture, neutral documentary rendering.
Composition: exact 3:2; animal occupies the middle 70 percent of width; entire snout, belly line, all four feet and full tail inside generous margins; eye-level low camera; silhouette sharp with moderate depth of field.
Lighting: soft overcast daylight, low contrast and natural gray-green palette.
Scientific boundary: qualitative identification image only; pixels cannot establish total length, mass, sex, age, individual identity, exact locality, behavior or osteoderm distribution hidden from view.
Constraints: exactly one animal; closed mouth; no text, labels, ruler, scale bar, logo, signature, watermark, border, bands or tags.
Avoid: American alligator giant, Nile crocodile, gharial, caiman, overly wide U-shaped shovel head, very long V-shaped snout, ghara, horns, mammal-like eyelids, protruding tusks, high-walk posture, curled or cropped tail, extra legs, fused toes, duplicate head, open aggressive gape, blood, prey, people, nest, eggs, fantasy armor, dinosaur, illustration, painting, studio backdrop, oversaturation.
~~~

### 03 · Bank-burrow entrance

~~~text
Use case: photorealistic-natural
Asset type: replacement for Fauna Atlas Chinese Alligator bank-burrow gallery image 3 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a scientifically cautious early-spring natural-history photograph of exactly one adult Chinese alligator (Alligator sinensis) resting completely outside and beside one dark burrow entrance in the vegetated bank of a small freshwater pond.
Subject: one complete compact adult Chinese alligator positioned in clear side-three-quarter view on moist mud, at least half a body length in front of the burrow mouth; dark charcoal-olive scales; short broad blunt subtly upturned snout; heavy orderly dorsal osteoderms; four short coherent legs with all four feet visible; one muscular tail fully outside the opening and tapering continuously to a clearly visible tip. Closed jaws and calm low posture.
Burrow: exactly one naturally excavated oval bank entrance behind and above the animal, with pressed damp soil, roots and sparse sedges. The entrance is fully visible and not blocked by the alligator. Show no underground cutaway, chambers, pools, tunnels, air shafts or hidden animal.
Scene: generalized southeastern Anhui low-hill pond margin in cool late-March or early-April morning, leaf litter, dormant brown grasses mixed with first green shoots, faint mist over still water; no snow and no named locality.
Style: original photorealistic professional natural-history field photography, sober museum-publication quality, realistic cool-season vegetation, scale texture and mud.
Composition: exact 3:2; wide enough to keep the entire snout, every foot and the complete tail tip at least 5 percent from all borders; animal across lower center, head near x=0.64 y=0.62; burrow entrance in upper-left third; low respectful telephoto perspective.
Lighting: thin cool morning sun and quiet natural shadows.
Scientific boundary: the still only shows one alligator beside one bank opening. It cannot prove the animal dug or used it, identify winter dormancy, reveal internal architecture, establish a date or measure temperature.
Constraints: exactly one animal and one entrance; one head, four legs, four feet and one complete visible tail; no other wildlife, people, tools, telemetry gear, fence, building, text, label, arrow, logo, signature, border or watermark.
Avoid: animal partly inside entrance, tail disappearing into darkness, cutaway diagram, transparent ground, tunnel maze, sleeping underground alligator, cave, frozen reptile, snow, tropical lushness, enormous American alligator, long crocodile snout, gharial, open mouth, attack, prey, extra limbs, duplicate tail, cropped anatomy, fantasy, CGI, illustration, painting, oversaturation.
~~~

### 04 · Summer acoustic posture

~~~text
Use case: photorealistic-natural
Asset type: final replacement for Fauna Atlas Chinese Alligator summer acoustic-posture gallery image 4 of 6, original project asset, exact 1536 x 1024 horizontal 3:2
Primary request: Create a restrained natural-history photograph of exactly one compact adult Chinese alligator (Alligator sinensis) holding a plausible pre-bellow or bellow posture in shallow summer pond water, without looking like an aggressive roaring crocodile.
Animal: one modest-sized dark charcoal-olive adult with the species' short, broad, blunt U-shaped muzzle and subtly upturned tip; low eyelid bone plates; orderly dorsal osteoderms; compact trunk; one coherent tail. The body stays nearly motionless in shallow water. Raise the head and snout only about 20 degrees, lift the tail base into a gentle natural arch just above the surface, and keep the jaws closed or separated by only a very narrow relaxed slit with almost no teeth visible. No lunging, no throat inflation, no prey.
Water: low-amplitude concentric ripples and fine surface vibration around the torso and gently arched tail base; no splash, airborne droplets, bubbles, shock waves or dramatic water dance.
Scene: generalized southeastern Anhui low-hill wetland at a calm June dawn, reeds, still pond and distant wooded slopes; no named site.
Style: original photorealistic professional natural-history field photography, sober museum-publication quality, realistic scales, water and soft atmospheric light.
Composition: exact 3:2 horizontal, wide environmental view; entire visible animal including a continuous tail tapering to a clear tip remains at least 10 percent from the left and right borders; head near x=0.63 y=0.59; low respectful telephoto perspective.
Scientific boundary: the silent still only reconstructs a posture described in acoustic observations. It cannot prove sound, sex, frequency, duration, chorus membership, mating function or another animal's response.
Constraints: exactly one animal, one head and one complete visible tail; no other wildlife, people, speakers, microphones, tags, text, sound-wave graphics, labels, logo, signature, border or watermark.
Avoid: wide-open mouth, exposed rows of teeth, roar, attack, giant American alligator, long V-shaped crocodile snout, gharial, caiman eye ridge, dinosaur spikes, cropped tail, flat unseen tail, extra limbs, fantasy, CGI, illustration, painting, oversaturation.
~~~

### 05 · Vegetation mound nest

~~~text
Use case: photorealistic-natural
Asset type: final replacement for Fauna Atlas Chinese Alligator vegetation mound-nest gallery image 5 of 6, original project asset, exact 1536 x 1024 horizontal 3:2
Primary request: Create a scientifically cautious natural-history photograph of exactly one complete compact adult Chinese alligator (Alligator sinensis) resting beside exactly one intact mound nest of decaying vegetation near a freshwater pond.
Adult: one modest-sized dark charcoal-olive Chinese alligator with a short broad blunt subtly upturned U-shaped snout, closed jaws with no exposed fourth lower tooth, low calm posture, orderly dorsal osteoderms, four coherent short limbs and one single continuous tail that tapers all the way to an unmistakable pointed tip. Give no visual marker claiming sex.
Nest: one low irregular rounded mound of damp leaves, grass stems and thin twigs on slightly raised ground near water; natural and constructed-looking, but intact, with no opening, chamber, eggs, shells or hatchlings.
Scene: generalized humid late-July southeastern Anhui low-hill wetland, sedges, shrubs and a quiet pond edge; no exact location or human structure.
Style: original photorealistic natural-history wildlife photography, restrained museum editorial quality, detailed leaf litter, mud and scales.
Composition: exact 3:2 horizontal and deliberately wide. Place the mound in the left third and the smaller complete alligator across the center-right, with its tail curved gently inward rather than aimed at an edge. The animal occupies no more than 48 percent of image width. Keep the snout, all visible feet and especially the pointed tail tip at least 12 percent away from every image border. Both mound and full animal silhouette must be unambiguous.
Scientific boundary: the frame only places one adult beside one vegetation mound. It cannot establish sex, maternity, guarding, nest ownership, clutch presence or size, temperature, hatching success or universal parental behavior.
Constraints: exactly one alligator and one intact mound; no exposed eggs, shells, young, prey, other animals, people, fences, tools, tags, text, labels, logo, signature, border or watermark.
Avoid: cropped or hidden tail tip, animal continuing beyond frame, open sand hole nest, giant compost heap, incubator, transparent cutaway, exact clutch count, attack, open mouth, giant American alligator, long crocodile snout, gharial, extra limbs, fantasy, CGI, illustration, painting, oversaturation.
~~~

### 06 · Reintroduction radio monitoring

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Alligator conservation-monitoring gallery image 6 of 6, original project asset, exact horizontal 3:2 intended for 1536 x 1024
Primary request: Create a restrained conservation field photograph of one Chinese alligator (Alligator sinensis) being monitored non-invasively from a safe distance in a generalized restored freshwater wetland used for reintroduction work.
Animal: exactly one compact adult Chinese alligator, dark charcoal-olive with short broad blunt subtly upturned snout, resting calmly on a small low island across a narrow channel. Show the whole coherent animal including one continuous tail, but keep it naturally distant. No visible transmitter, injury, restraint or handling.
People and equipment: exactly two adult field researchers together on the opposite bank at least 20 metres away; one holds a single compact three-element Yagi directional antenna connected by one cable to a small handheld receiver, the other writes in a field notebook. Plain muted outdoor field clothing, no agency logos, no weapons. They do not approach or touch the alligator.
Scene: generalized lower-Yangtze restored wetland mosaic with shallow ponds, sedges, small islands and mixed open water; plausible Shanghai/Anhui reintroduction habitat but no named site or landmark; no fence, cage, building or vehicle.
Style: original photorealistic conservation documentary photography, sober museum-publication quality, realistic optics and environmental scale.
Composition: exact 3:2 horizontal environmental frame; distant alligator clear on island at right, two researchers smaller at left foreground with antenna angled across the channel; all subjects complete and inside margins; channel visibly separates humans and animal.
Lighting: soft early-morning daylight with light mist, restrained greens and gray-blue water.
Scientific boundary: the reconstruction cannot prove the animal was captive-bred, released, carrying a working transmitter, detected by the receiver, surviving, breeding or establishing a population; it does not identify any person, institution or locality.
Constraints: exactly one alligator, exactly two people and exactly one antenna; no animal contact, capture, rope, trap, cage, boat, drone, collar, visible tail tag, surgery, feeding, crowd, text, labels, maps, logo, signature, border or watermark.
Avoid: rescue spectacle, release from crate, person holding alligator, researchers standing beside animal, tiny unsafe separation, giant American alligator, long crocodile snout, gharial, multiple animals, malformed antenna, satellite dish, gun-like equipment, military pose, zoo, theme park, fantasy, CGI, illustration, painting, oversaturation.
~~~

## Static and visual validation

- Source PNGs and runtime WebPs decode as 1536 × 1024, sRGB, opaque, single-frame images.
- Source/runtime basename pairs remain one-to-one after removing `-source`.
- Source and runtime hashes are checked for uniqueness in the taxonomy test.
- Inspection used static metadata checks and the built-in image viewer. No GUI or headless browser was used.
