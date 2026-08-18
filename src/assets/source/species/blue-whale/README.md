# Blue whale image set

These six original project images were generated with Codex's built-in image generation tool for the complete Fauna Atlas blue whale profile. They share a restrained natural-history editorial direction and keep *Balaenoptera musculus* distinct from sharks and other cetaceans through the broad flat rostrum, exceptionally long mottled blue-gray body, slim pectoral flippers, very small far-back dorsal fin and horizontal tail flukes. The set covers an open-ocean portrait, krill lunge feeding, a productive ocean front, the tall surface blow, mother–calf travel and passive acoustic monitoring without presenting an illustration as a measurement, a confirmed field observation or proof of a conservation outcome.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/blue-whale/*.webp`
- Dimensions: 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | File | Observation |
| --- | --- | --- |
| 01 | `01-open-ocean-portrait-source.png` | One complete whale traveling left below a rippled open-ocean surface, with broad quiet water at left; revised cover and featured card |
| 02 | `02-krill-lunge-feeding-source.png` | One complete whale with open jaws, dark baleen and expanded throat grooves moving through one reddish-brown krill patch |
| 03 | `03-productive-ocean-front-source.png` | One distant complete whale just below the surface beside a diffuse cobalt-to-blue-green water transition |
| 04 | `04-tall-surface-blow-source.png` | One intentionally partial surface view retaining the head and a long section of back beneath one merged, nearly vertical blow |
| 05 | `05-mother-calf-travel-source.png` | Two complete separated whales traveling left in parallel, with one smaller animal above and behind the larger whale |
| 06 | `06-passive-acoustic-monitoring-source.png` | One complete whale passing well clear of one vertical mooring line with a subsurface float and cylindrical acoustic recorder |

Static inspection accepted all six final source PNGs and derived WebPs at original resolution. The source PNGs are 1536 × 1024, 8-bit RGB images, and the runtime WebPs decode at the same dimensions. The cover's first pass was rejected because the whale filled nearly the entire width and left too little calm water for interface copy; the stored source and runtime image use the accepted revision, which pulls the same animal back to about 60% of the frame and restores the intended left-side negative space. Frames 02 and 05 use more of the image width than their initial prompts' approximate caps, but every whale, rostrum and tail-fluke set remains inside the frame. Frame 03 likewise renders the distant whale somewhat larger than the requested 12–15% width while still leaving the ocean front as the dominant subject. Frame 04 deliberately does not show the complete animal: the surface crop retains only anatomy that would plausibly be exposed during a rolling breath. In frame 06 the taut mooring line continues beyond the image edges, while its float and recorder remain readable and the line never crosses the whale. No frame contains text, a logo or a watermark.

The scientific evidence boundary is explicit for every frame. Frame 01 is a morphology-led editorial portrait with no scale reference, so it does not establish the individual's length, age or sex. Frame 02 illustrates the documented rorqual mechanism of engulfment feeding, but the pictured reddish swarm is not a species-level prey identification or a measurement of krill density, engulfed volume or daily intake. Frame 03 uses a visible color gradient as a proxy for a productive oceanographic front; it is not measured chlorophyll, temperature or prey-density data, and the whale's presence does not by itself demonstrate feeding. Frame 04 depicts warm moist breath condensing in cool air as one merged plume from the paired-blowhole area, not seawater expelled from the lungs; without a calibrated scale, the image cannot substantiate plume height. Frame 05 is an evidence-led mother–calf illustration, but sex, kinship and dependency cannot be confirmed from appearance and size alone, and the frame shows neither nursing nor physical contact. Frame 06 illustrates the principle of passive acoustic monitoring rather than a deployable engineering specification; it does not claim that the visible whale is calling, that this recorder detected or localized it, or that an individual can be identified from the pictured encounter.

## Final prompts

### 01 · Open-ocean portrait

The initial generation preserved the intended blue-whale morphology but made the animal too large for the cover layout. It was rejected for runtime use. The accepted `01-open-ocean-portrait-source.png` and its runtime WebP use the targeted second prompt, which changes only the composition and surrounding water.

#### Initial generation prompt (rejected for overfilled cover composition)

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas blue whale species gallery image 1 of 6, cover image and featured editorial card, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a restrained, scientifically accurate natural-history underwater photograph of exactly one adult blue whale (Balaenoptera musculus) traveling calmly through clear cold open ocean.
Scene/backdrop: Pelagic blue water below a softly rippled surface, subtle suspended plankton and a gentle blue depth gradient, no seafloor, coast, ice, boat or human trace.
Subject: One complete adult blue whale in clean side-three-quarter profile, head pointing left. Show the species' extremely long streamlined body, broad flat U-shaped rostrum with one central ridge, mottled blue-gray skin that appears blue underwater, paired blowholes on top, slim pointed pectoral flippers, a very small triangular dorsal fin placed far back, and broad horizontal tail flukes. Mouth closed, no visible teeth, no humpback-like head tubercles.
Style/medium: Original photorealistic professional natural-history editorial photography, understated museum-publication quality, realistic skin mottling, water optics, particulate depth and imperfect wild texture.
Composition/framing: Exact horizontal 3:2. Keep the entire whale inside the frame from rostrum through both pectoral flippers to the complete tail flukes, with generous crop-safe water around it. Whale occupies about 58–62% of frame width; body centered in the right two-thirds with head near x=0.43 y=0.49 and calm negative water to the left. Eye-level underwater field-camera perspective.
Lighting/mood: Soft filtered high-latitude daylight from above, quiet, immense and scientifically grounded.
Color palette: Restrained cold ocean blue, slate, silver-blue and natural blue-gray.
Constraints: Exactly one whale; one coherent complete body; paired pectoral flippers; one very small far-back dorsal fin; horizontal tail flukes fully visible; no text, caption, logo, signature, border or watermark; no other wildlife or humans.
Avoid: whale shark spots or gill slits, shark vertical tail, humpback long white flippers or head knobs, sperm whale square head, right-whale callosities, orca patches, dolphin beak, oversized dorsal fin, teeth, open mouth, breaching, bubbles as decoration, diver, submarine, fishing gear, cinematic monster scale, stock-photo gloss, teal-orange grading, CGI, illustration or painting.
```

#### Accepted composition-revision prompt (used by the runtime image)

```text
Use case: precise-object-edit
Asset type: corrected Fauna Atlas blue whale cover image, horizontal 3:2
Input images: Image 1 is the edit target
Primary request: Pull the underwater camera substantially farther back and reframe the same adult blue whale so the complete animal occupies about 60% of frame width and sits across the right two-thirds, head pointing left, with broad calm negative open water on the left for interface copy.
Constraints: Change only composition/framing and surrounding open water. Preserve the same anatomically accurate adult blue whale identity, broad flat head, mottled blue-gray skin, closed mouth, slim pectoral flippers, tiny far-back dorsal fin, complete horizontal tail flukes, underwater surface, color, lighting, perspective, realism and natural-history documentary style. Keep the full rostrum, all visible flippers and complete tail flukes comfortably inside frame with generous crop-safe water on every edge. Place the head near x=0.40 y=0.52 and the tail near x=0.94. Maintain a 1536×1024 horizontal 3:2 image. Exactly one whale; no added animal, text, logo, watermark, border, gear or land.
Avoid: animal spanning nearly the full width, cropped rostrum or tail, distorted anatomy, shark tail, oversized dorsal fin, open mouth, bubbles, CGI or illustration.
```

### 02 · Krill lunge feeding

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas blue whale feeding-ecology gallery image 2 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a scientifically credible high-speed underwater natural-history photograph of exactly one blue whale (Balaenoptera musculus) executing a lateral lunge through one dense patch of Antarctic-style krill.
Scene/backdrop: Cold productive open ocean below the surface, naturally blue-green water with fine suspended plankton and one coherent reddish-brown krill patch made of biologically small individuals, no seafloor or coast.
Subject/action: Exactly one complete adult blue whale angled side-on and slightly upward as it lunges through the krill. The mouth is widely open; dark baleen plates hang from the upper jaw; longitudinal ventral throat grooves are visibly expanded to take in prey-laden seawater. Preserve the broad flat U-shaped rostrum, mottled blue-gray skin, small pointed pectoral flippers, tiny far-back dorsal fin, and broad horizontal tail flukes. Krill remain tiny crustaceans at real biological scale, not giant shrimp, and flow into the oral cavity with water.
Style/medium: Original photorealistic underwater wildlife photography, high-speed field-documentary realism, realistic baleen, throat pleats, water flow and suspended particles, restrained museum-publication processing.
Composition/framing: Exact horizontal 3:2 with a central 16:9 crop-safe action zone. Keep the entire whale and complete tail flukes inside the frame, occupying no more than 76% of width. Place the expanded mouth near x=0.42 y=0.52 and let the body run diagonally toward the lower-right, with open water around all edges.
Lighting/mood: Diffuse daylight filtering through productive water, powerful but observational rather than theatrical.
Color palette: Cold ocean blue-green, blue-gray skin, charcoal baleen and restrained rust-brown krill.
Constraints: Exactly one whale and one krill patch; anatomically coherent lunge feeding; no teeth; no text, arrows, diagram, logo, signature, border or watermark; no other whales, fish, divers, boats or fishing gear.
Avoid: pelican pouch, balloon-like throat, humpback bubble net, giant prawns, fish school as the main prey, whale shark filter-feeding anatomy, shark gills or vertical tail, multiple mouths, broken jaw, duplicated flippers, cropped tail, blood, prey gore, breaching, fantasy vortex, CGI, illustration, painting or oversaturation.
```

### 03 · Productive ocean front

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas blue whale habitat gallery image 3 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a wide conservation-documentary aerial-oblique ocean landscape showing exactly one blue whale (Balaenoptera musculus) at the true scale of a broad productive ocean-front habitat.
Scene/backdrop: Open ocean only. A wide, soft, naturally irregular transition between deep cobalt water and muted blue-green phytoplankton-rich water, with subtle current streaks and small wind texture. The front is a diffuse ecological gradient, not a hard border. No land, coast, sea ice, map overlay or satellite-interface look.
Subject: Exactly one distant complete blue whale just beneath the surface near the broad transition, occupying about 12–15% of image width. Its long mottled blue-gray body, broad head, tiny far-back dorsal fin and horizontal tail flukes remain identifiable, but habitat dominates. No blow or feeding spectacle.
Style/medium: Original photorealistic conservation and natural-history aerial photography, realistic ocean optics, surface texture and atmospheric scale, restrained scientific editorial processing.
Composition/framing: Exact horizontal 3:2 very-wide establishing view at a high oblique angle, safe for responsive cropping. Ocean habitat occupies at least 85% of the frame. Place the complete whale around x=0.62 y=0.56 within the central crop-safe area; let the soft color transition sweep diagonally through the frame.
Lighting/mood: Clear cool daylight with light haze, spacious, quiet and ecologically grounded.
Color palette: Deep cobalt, muted teal-green, slate blue and restrained silver surface highlights.
Constraints: Exactly one blue whale total; complete body visible below the surface; broad diffuse oceanographic transition; no text, labels, arrows, map grid, logo, signature, border or watermark; no people, ships, buoys, coast, ice or other animals.
Avoid: a sharp painted line between water masses, fantasy bioluminescence, oil spill, pollution plume, satellite screenshot, coastline, tropical reef, dense foam, enormous foreground whale, multiple whales, shark silhouette, cropped flukes, migration-route arrow, tourism-ad gloss, CGI, illustration, painting or oversaturation.
```

### 04 · Tall surface blow

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas blue whale respiration gallery image 4 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a restrained telephoto natural-history photograph of exactly one blue whale (Balaenoptera musculus) breathing at the open-ocean surface, clearly showing one tall, nearly vertical condensation blow.
Scene/backdrop: Cool gray-blue offshore sea under a low soft sky, modest natural swell, distant horizon softened by haze, no coast, ship, birds or people.
Subject/action: One blue whale surfacing in a natural rolling sequence. Only the broad top of the head and a long section of mottled blue-gray back are above water, an intentional realistic surface crop; do not force the flukes or distant dorsal fin into view. At the top of the head, the paired blowholes are anatomically placed together and produce one merged tall, narrow, near-vertical white condensation plume that widens subtly as it rises. The plume is warm moist breath condensing in cool air, not seawater erupting from the lungs.
Style/medium: Original photorealistic long-lens wildlife field photography, natural spray droplets, skin texture, sea surface and atmospheric haze, understated museum-publication quality.
Composition/framing: Exact horizontal 3:2. Place the paired blowholes and base of the plume near x=0.58 y=0.53, with the plume rising safely into the upper central frame. Keep the visible head and long back inside the lower central crop-safe area; horizon high and understated.
Lighting/mood: Diffuse cool morning light, calm, observational and immense.
Color palette: Slate ocean, blue-gray skin, pearl-white mist and muted cloud gray.
Constraints: Exactly one whale; exactly one merged condensation plume from paired blowholes; anatomically coherent exposed head and back; no text, diagram, logo, signature, border or watermark; no other animals or humans.
Avoid: two separate smokestack plumes, solid column of seawater, mouth spray, fire or smoke, blowhole on the snout tip, whale shark or shark anatomy, breaching, tail slap, full body impossibly floating above water, tropical sunset, dramatic storm, boat, tourist scene, CGI, illustration, painting or oversaturation.
```

### 05 · Mother–calf travel

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas blue whale life-history gallery image 5 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a scientifically grounded underwater natural-history photograph of exactly one adult female blue whale (Balaenoptera musculus) traveling with exactly one dependent calf in warm open-ocean water.
Scene/backdrop: Clear subtropical pelagic water below a softly lit surface, subtle plankton particles and open blue depth, no seafloor, coast, boat or people.
Subjects/action: Exactly two blue whales total: one complete adult female and one complete calf approximately 35–45% of her body length. They swim calmly in the same direction, roughly parallel but naturally offset, with a small protective distance between them. Both show blue-whale anatomy: long streamlined mottled blue-gray bodies, broad flat rostra, paired blowholes, slim pectoral flippers, tiny far-back dorsal fins and broad horizontal tail flukes. Mouths closed. The calf is not nursing, touching, riding or being carried.
Style/medium: Original photorealistic natural-history editorial photography, candid underwater field observation, realistic skin mottling, water optics and depth, restrained museum-publication processing.
Composition/framing: Exact horizontal 3:2. Keep both complete whales fully inside the frame with all flippers and tail flukes readable. Adult runs through the lower-middle and calf slightly above and behind; combined pair remains inside the central 16:9 crop-safe zone and occupies no more than 72% of image width. Focal pair near x=0.54 y=0.55.
Lighting/mood: Soft filtered warm-water daylight, intimate but unsentimental, quiet and natural.
Color palette: Deep ocean blue, muted cyan, blue-gray skin and gentle silver highlights.
Constraints: Exactly one adult female and exactly one calf; exactly two animals total; no text, logo, signature, border or watermark; no people, gear or other wildlife.
Avoid: third whale or family pod, adult male, nursing pose, hugging, smiling, anthropomorphic eye contact, calf on the back, identical-sized pair, humpback long white flippers, sperm-whale head, orca patches, whale shark spots or shark vertical tail, cropped flukes, bubbles as decoration, CGI, illustration, painting or oversaturation.
```

### 06 · Passive acoustic monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas blue whale conservation-monitoring gallery image 6 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a credible underwater conservation-documentary photograph of one passive acoustic monitoring mooring in open ocean with exactly one distant blue whale (Balaenoptera musculus) passing safely in the background.
Scene/backdrop: Deep blue pelagic water with a gentle light gradient from the surface above, sparse suspended particles and no visible seabed, coast, ship or diver.
Monitoring equipment: Exactly one compact scientific mooring in the foreground: one dark cylindrical autonomous acoustic recorder/hydrophone attached to one taut vertical line with one small subsurface float and restrained metal fittings. It is practical field equipment, unbranded and not futuristic. The line stays well away from the animal and does not cross its body.
Whale: Exactly one complete blue whale in the middle distance, small enough to convey monitoring scale but clearly identifiable by its long mottled blue-gray body, broad head, slim flippers, tiny far-back dorsal fin and horizontal tail flukes. It travels calmly past, separated by generous open water. The image does not claim the visible whale is vocalizing.
Style/medium: Original photorealistic marine-research and natural-history field photography, realistic equipment, water optics and atmospheric depth, candid rather than promotional, restrained museum-publication quality.
Composition/framing: Exact horizontal 3:2. Place the recorder and line in the lower-left foreground and the complete whale around x=0.62 y=0.53 within the central crop-safe zone. Preserve a wide, unmistakable gap between whale and line. Habitat remains spacious.
Lighting/mood: Diffuse cool daylight from above, patient, quiet and evidence-led.
Color palette: Deep marine blue, slate equipment, blue-gray whale and restrained silver highlights.
Constraints: Exactly one mooring and exactly one blue whale; complete whale; no entanglement; no text, labels, sound-wave graphic, sonar beam, logo, signature, border or watermark; no boat, diver or other wildlife.
Avoid: cable touching or wrapping the whale, fishing net, hook, trap, giant industrial array, military sonar, glowing sound rings, waveform overlay, sci-fi beacon, implied direct communication, multiple whales, shark silhouette, cropped flukes, dramatic rescue, CGI, illustration, painting or oversaturation.
```
