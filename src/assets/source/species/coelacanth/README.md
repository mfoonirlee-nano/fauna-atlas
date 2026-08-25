# Coelacanth image set

Codex's built-in image generation tool created these six original project images on 2026-08-25 for the complete Fauna Atlas *Latimeria chalumnae* profile. They reconstruct generalized western Indian Ocean volcanic-slope habitats and research scenes. They do not document named fish, sites, caves, observations or monitoring projects.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/coelacanth/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-deep-slope-portrait-source.png` | `01-deep-slope-portrait.webp` | One complete left-facing coelacanth occupies the center-right beside a dark volcanic slope, with broad open water on the left |
| 02 | `02-lobed-fins-and-three-lobed-tail-source.png` | `02-lobed-fins-and-three-lobed-tail.webp` | One complete lateral coelacanth shows separate dorsal fins, fleshy paired fins, irregular pale spots and a central supplementary tail lobe |
| 03 | `03-steep-cave-slope-habitat-source.png` | `03-steep-cave-slope-habitat.webp` | One small distant fish hovers at a lava overhang while the steep volcanic habitat dominates the frame |
| 04 | `04-night-drift-foraging-source.png` | `04-night-drift-foraging.webp` | One complete head-down coelacanth with a readable three-part tail and central supplementary lobe approaches one separated small squid without contact or capture |
| 05 | `05-daytime-cave-shelter-group-source.png` | `05-daytime-cave-shelter-group.webp` | Exactly three complete, separated coelacanths hover at different depths inside one lava cave |
| 06 | `06-rov-video-monitoring-source.png` | `06-rov-video-monitoring.webp` | One compact ROV records one complete coelacanth across open water without contact |

## Static verification

The final PNG and WebP pairs passed static and visual inspection on 2026-08-25. Frame 04 received a targeted tail-morphology edit and passed a second visual check for its central supplementary lobe. All 12 files decode at 1536 × 1024 in sRGB and are opaque. The accepted runtime focal points, in frame order, are `(0.62, 0.52)`, `(0.50, 0.50)`, `(0.70, 0.47)`, `(0.56, 0.50)`, `(0.55, 0.50)` and `(0.60, 0.50)`.

## Evidence boundaries

- A heavy blue body, irregular pale spotting, separate dorsal fins, fleshy paired-fin bases and a central supplementary tail lobe anchor the reconstruction to *Latimeria*. Ordinary generated images cannot distinguish *L. chalumnae* from *L. menadoensis* without locality, specimen or genetic evidence.
- Frames 01 and 02 show external morphology. They cannot establish sex, age, body size, locality or an individual identity.
- Frame 03 reconstructs a steep lava slope and shelter. One fish at an overhang does not prove occupancy, depth, site fidelity or population size.
- Frame 04 shows the head-down posture and an approach to potential prey. It does not record electroreception, a strike, capture or diet proportions.
- Frame 05 shows three fish sharing shelter. Their spacing cannot establish kinship, hierarchy, cooperation, mating or a stable social group.
- Frame 06 reconstructs non-contact video monitoring. It does not represent a named expedition, a confirmed occurrence, a count or a measured fish.
- None of the images supports claims that the living species has remained unchanged for hundreds of millions of years or is a direct ancestor of land vertebrates.

## Shared morphology anchor

The fish-focused prompts repeated these constraints:

```text
Depict a West Indian Ocean coelacanth (Latimeria chalumnae) with one heavy elongated body, a blunt rounded snout, a small mouth and eye, thick dark metallic slate-blue scales, irregular separate white or pale-blue spots, two distinct dorsal fins, paired fleshy lobed pectoral and pelvic fin bases ending in fin rays, one lobed anal fin, and a diagnostic three-part caudal fin with a small central supplementary lobe between the larger upper and lower lobes. Avoid the golden-brown Indonesian species, ordinary grouper or cod anatomy, a lungfish or eel body, shark gill slits, a tuna-like forked tail, a shark heterocercal tail, limb-like feet, bottom walking, missing fins, duplicate anatomy, text, logos and watermarks.
```

The spot fields resemble natural identification patterns but do not encode real individuals. The images cannot establish species identity from appearance alone.

## Final prompts

### 01 · Deep-slope portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas West Indian Ocean coelacanth species-detail cover, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically grounded deep-water wildlife photograph of exactly one complete adult West Indian Ocean coelacanth (Latimeria chalumnae) swimming beside a generalized steep volcanic slope in the western Indian Ocean.
Scene/backdrop: dim mesophotic-to-upper-bathyal marine water around 180 to 220 metres deep, a dark basalt lava wall and broken volcanic rock along the lower-right, blue-black open water across the left, sparse natural suspended particles, no recognizable cave, locality, wreck or human structure.
Subject: one heavy elongated coelacanth in calm left-facing side three-quarter view. Show a blunt rounded snout, small mouth and eye, thick dark metallic slate-blue body covered with irregular separate white or pale-blue spots, rough large scales, two distinct dorsal fins, paired fleshy lobed pectoral and pelvic fins with narrow fin rays at their ends, one lobed anal fin, and the diagnostic three-part caudal fin with a small central supplementary tail lobe projecting between the larger upper and lower lobes. Keep one coherent complete animal from snout through every fin to all tail lobes.
Style/medium: original photorealistic professional deep-sea natural-history photography, restrained museum-publication color, realistic scales, fin rays, rock and water scatter, no glossy fantasy polish.
Composition/framing: horizontal 3:2 at fish eye height; place the whole fish in the center-right safe area facing left, spanning about half the frame, with broad uninterrupted dark open-water negative space across the left third for responsive interface copy. Keep every fin and tail lobe inside the frame.
Lighting/mood: soft cool research-light illumination from outside the frame with weak blue ambient water, quiet and observational, natural falloff into depth.
Constraints: exactly one animal; unmistakable Latimeria chalumnae morphology; irregular non-repeating pale spot pattern; complete fleshy lobed paired fins; three-lobed tail; no text, label, logo, signature, border or watermark; generic reconstruction rather than a locality record.
Avoid: Indonesian golden-brown coelacanth, ordinary grouper, cod, lungfish, shark, ray, eel, armored sturgeon, symmetric forked tuna tail, shark heterocercal tail, two-lobed tail, missing central tail lobe, limb-like feet, walking on the bottom, open aggressive mouth, visible teeth, extra fins, fused fins, duplicate anatomy, cropped animal, other fish, diver, submarine, ROV, cable, trap, hook, net, aquarium, fossil, skeleton, CGI, illustration, painting, bioluminescent fantasy or oversaturation.
```

### 02 · Lobed fins and three-lobed tail

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas coelacanth morphology gallery image 2 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained deep-water field photograph of exactly one complete adult West Indian Ocean coelacanth (Latimeria chalumnae) in a clean left-facing lateral view, emphasizing visible external anatomy.
Scene/backdrop: subdued blue-black deep marine water with a softly blurred dark volcanic-rock slope far behind, sparse particles, no named site or human structure.
Subject: one heavy elongated dark metallic blue coelacanth, whole body visible. Show a blunt rounded snout, small mouth and eye, thick overlapping rough scales with an organic irregular pattern of separate white or pale-blue spots, two clearly separated dorsal fins, paired fleshy lobed pectoral and pelvic fin bases ending in fin rays, one lobed anal fin, and a diagnostic three-part caudal fin with a small central supplementary lobe between larger upper and lower lobes. Keep the pectoral fin attached behind the gill cover and the pelvic fins paired beneath the posterior trunk. One coherent head, torso and tail.
Style/medium: original photorealistic professional natural-history photography, crisp restrained detail, museum-publication color, realistic scales and fin membranes.
Composition/framing: horizontal 3:2 medium view at fish eye height, complete animal centered with generous margins, all fins and all three tail lobes readable and inside frame.
Lighting/mood: soft neutral research light with natural deep-water falloff, calm documentary tone.
Constraints: exactly one fish; unmistakable Latimeria chalumnae morphology; irregular non-repeating pale spot pattern; no labels, arrows, ruler, text, logo, signature, border or watermark.
Avoid: Latimeria menadoensis golden-brown coloration, ordinary grouper, cod, lungfish, shark, eel, sturgeon, tuna tail, ordinary forked tail, shark heterocercal tail, missing central tail lobe, limb-like feet, walking posture, open mouth, teeth, extra or fused fins, cropped snout or tail, duplicate animal, aquarium, specimen table, fossil, skeleton, CGI, illustration, painting or oversaturation.
```

### 03 · Steep cave-slope habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas coelacanth habitat gallery image 3 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new habitat-dominant deep-sea conservation photograph of the steep volcanic cave-and-slope habitat used by West Indian Ocean coelacanths (Latimeria chalumnae).
Scene/backdrop: a broad submarine basalt slope around 180 to 220 metres deep with broken lava ledges, a dark sheltered overhang or cave mouth on the right, steep relief descending into blue-black open water, sparse suspended particles and faint pale mineral patches. Habitat occupies at least 88 percent of the frame. No identifiable locality.
Animal: exactly one small distant but coherent adult West Indian Ocean coelacanth hovering just outside the shaded overhang at middle-right. Its complete dark metallic blue silhouette shows irregular pale spots, lobed paired fins, two dorsal fins and the small central tail lobe, but the fish remains secondary to the slope.
Style/medium: original photorealistic wide professional deep-water conservation photography, restrained scientific-publication processing, believable darkness and atmospheric depth.
Composition/framing: horizontal 3:2 wide establishing view, steep rock and shelter dominate; one complete fish occupies under 13 percent of image width and remains inside the frame.
Lighting/mood: weak blue ambient light plus a broad soft research light from outside frame, remote and quiet, no theatrical beam.
Constraints: exactly one fish and no other visible animal; generic habitat reconstruction; no text, coordinates, logo, signature, border or watermark; no submarine, ROV, cable, trap, hook or net.
Avoid: close portrait, oversized fish, school, colorful coral reef, tropical shallows, sandy beach, hydrothermal vent, shipwreck, ruins, giant cave monster, walking fish, malformed tail, ordinary forked tail, CGI, illustration, fantasy bioluminescence or oversaturation.
```

### 04 · Night drift foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas coelacanth nocturnal-foraging gallery image 4 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained deep-water wildlife photograph of exactly one West Indian Ocean coelacanth (Latimeria chalumnae) drifting head-down at night near a steep volcanic slope while approaching one small squid as potential prey.
Scene/backdrop: dark blue-black water around a rugged basalt wall at 180 to 250 metres, sparse particles, weak current and deep open water; no identifiable site or human structure.
Subject/action: one complete adult dark metallic blue coelacanth in a steep head-down but controlled swimming posture, angled diagonally with the snout lower and tail higher. Show irregular separate pale spots, paired fleshy lobed fins splayed for stabilization, two dorsal fins and the diagnostic small central lobe in a three-part tail. One biologically small plain squid remains separated by clear water below the snout; the fish approaches but does not touch or capture it. The coelacanth is drifting and correcting position, not walking or standing on the seabed.
Style/medium: original photorealistic professional deep-sea natural-history photography, restrained documentary color and credible body mechanics.
Composition/framing: horizontal 3:2 environmental action frame; complete coelacanth occupies about half the width along a diagonal, full tail and every fin inside frame, squid small and secondary.
Lighting/mood: dim cool research illumination from outside the frame with natural falloff, quiet nocturnal observation.
Constraints: exactly one coelacanth and exactly one small squid; no contact, bite, blood or captured prey; no text, label, logo, signature, border or watermark.
Avoid: multiple prey, feeding frenzy, open giant mouth, visible teeth, seafloor walking, limb-like feet, vertical dead fall, distressed fish, ordinary grouper, shark, eel, missing central tail lobe, extra fins, cropped anatomy, diver, ROV, submarine, hook, net, aquarium, CGI, illustration, bioluminescent fantasy or oversaturation.
```

#### Tail-morphology repair

The built-in image editing tool used the generated frame above as its edit target and applied this final repair prompt:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas coelacanth nocturnal-foraging gallery image, 1536 x 1024 horizontal 3:2
Input image 1: edit target
Primary request: Change only the caudal fin at the upper-left end of the coelacanth. Replace the current broad fan with an anatomically readable coelacanth three-part caudal fin: two larger rounded upper and lower lobes plus one smaller, clearly projecting central supplementary lobe between them. The central lobe must be unmistakable at normal viewing size and connected naturally to the tail base.
Constraints: Preserve the exact fish identity, body proportions, head-down pose, pale spot pattern, every other fin, small separated squid, rock wall, open water, lighting, color, framing, and object positions. Keep exactly one complete coelacanth and exactly one squid. Keep the fish off the seabed. No contact, bite, blood, text, logo, watermark, extra fins, extra animals, ordinary forked tail, shark tail, or limb-like anatomy. Change only the tail morphology; keep everything else unchanged.
```

### 05 · Daytime cave shelter group

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas coelacanth daytime-shelter gallery image 5 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained deep-water natural-history photograph of exactly three West Indian Ocean coelacanths (Latimeria chalumnae) sheltering during daytime inside one broad lava cave around 200 metres deep.
Scene/backdrop: a dark spacious submarine basalt cave with a rough black volcanic ceiling and floor, wide entrance opening to dim blue water at left, sparse suspended particles and pale mineral flecks, no named locality or human structure.
Subjects/action: exactly three complete dark metallic blue coelacanths hover calmly at separate depths inside the shelter. One medium fish occupies the lower-right foreground, one smaller fish hovers higher near center, and one distant fish remains near the blue entrance. Keep open water between all bodies with no overlap or contact. Each fish has irregular non-identical pale spots, two dorsal fins, fleshy lobed paired fins and a recognizable three-part tail with a small central lobe. They share shelter without coordinated formation, mating or parental behavior.
Style/medium: original photorealistic professional deep-sea natural-history photography, restrained museum-publication color, credible darkness, rock texture and depth scatter.
Composition/framing: horizontal 3:2 wide cave interior, all three complete animals inside frame, different apparent sizes and poses, habitat remains prominent.
Lighting/mood: dim blue entrance light and broad soft research illumination from outside frame, quiet daytime refuge.
Constraints: exactly three coelacanths total and no fourth silhouette; three separated complete bodies and tails; no contact, hierarchy or group hunting claim; no other visible animal; no text, label, logo, signature, border or watermark.
Avoid: one, two, four or more fish, cloned identical bodies or spot patterns, overlapping or fused anatomy, regimented school, colorful coral cave, shallow reef, mating, eggs, pups, prey, walking on the bottom, ordinary grouper, shark, eel, missing central tail lobes, diver, submarine, ROV, cable, net, aquarium, CGI, illustration, fantasy glow or oversaturation.
```

### 06 · ROV video monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas coelacanth non-contact video-monitoring gallery image 6 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically plausible deep-sea field-documentary photograph of exactly one compact research ROV recording exactly one West Indian Ocean coelacanth (Latimeria chalumnae) beside a steep volcanic slope.
Scene/backdrop: dark blue water around 180 to 250 metres deep, rough basalt wall and broken lava ledges on the right, open water at left, natural particles, no recognizable locality, vessel or station.
Animal: exactly one complete adult dark metallic blue coelacanth near the middle-right, parallel to the rock face and separated from all equipment. Show irregular white spots, fleshy lobed paired fins, two dorsal fins and the small central lobe in its three-part tail. It swims calmly and shows no contact, injury or escape response.
Equipment: exactly one small neutrally buoyant unbranded scientific ROV in the left-middle distance, facing the fish. Give it one coherent box frame, one forward video camera, two modest white lamps and compact thrusters. A single thin tether may leave the top-left edge without crossing the fish. No manipulator arm reaches toward the animal, no trap and no visible laser dots.
Style/medium: original photorealistic professional marine-research documentary photography, credible scale, water scatter, equipment and restrained color.
Composition/framing: horizontal 3:2 wide environmental frame; complete fish occupies the right third, ROV smaller on the left, open water separates them, whole animal and equipment readable.
Lighting/mood: soft ROV lamps with natural blue-black falloff, careful non-invasive observation.
Constraints: exactly one coelacanth and exactly one ROV; no people or other animals; no contact, capture, tagging or specimen claim; no readable screen, text, logo, signature, border or watermark.
Avoid: submarine with people, scuba diver, second robot, extra fish, manipulator touching fish, net, hook, bait, trap, harpoon, tag, bright laser scale dots, overexposed spotlight, collision, distressed animal, ordinary grouper, shark, eel, malformed or cropped fish, missing central tail lobe, cable wrapped around fish, aquarium, CGI, illustration, fantasy machinery or oversaturation.
```
