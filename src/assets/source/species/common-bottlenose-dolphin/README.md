# Common bottlenose dolphin image set

These six source PNGs were generated with Codex's built-in image generation tool as original project imagery for the `Tursiops truncatus` profile. They are editorial reconstructions rather than records of named animals, sites, surveys or events.

- Source format: 1536 × 1024, 8-bit sRGB PNG without alpha
- Runtime format: 1536 × 1024, 8-bit sRGB WebP without alpha
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Frames

| Frame | Source file | Intended use |
| --- | --- | --- |
| 01 | `01-open-water-portrait-source.png` | One complete adult in open shelf water; cover and featured card |
| 02 | `02-cooperative-fish-herding-source.png` | Exactly three adults loosely herding one natural school of fish |
| 03 | `03-coastal-shelf-habitat-source.png` | One small adult within a broad sand-and-seagrass shelf habitat |
| 04 | `04-surface-breath-source.png` | One adult making a calm rolling breath through one blowhole |
| 05 | `05-adult-calf-travel-source.png` | One adult and one smaller calf traveling in the same direction |
| 06 | `06-dorsal-fin-photo-id-source.png` | One surfacing adult with a fictional notched dorsal fin illustrating photo-identification |

The image set follows the scientific and editorial boundaries documented in [`docs/research/bottlenose-dolphin-profile.md`](../../../../../docs/research/bottlenose-dolphin-profile.md). Every underwater animal has a short thick rostrum separated from the melon, one dorsal blowhole, one mid-back falcate dorsal fin, two pectoral flippers and a horizontal two-lobed tail. Frame 01 received one composition-only edit to reduce and move the animal right for hero-title clearance. Frame 02 shows one possible cooperative strategy rather than a universal species behavior. Frame 05 is the accepted from-scratch regeneration after the first mother-calf variant overlapped the adult tail with the calf; the accepted output travels right-to-left while preserving the intended adult-ahead, calf-behind relationship. Frame 06 uses invented fin marks and cannot serve as a real individual catalogue record.

## Final prompts

### 01 · Open-water portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Bottlenose Dolphin species-detail cover and featured editorial card, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible candid underwater wildlife photograph of exactly one wild adult Common Bottlenose Dolphin (Tursiops truncatus) swimming calmly from right toward left in clear temperate-to-subtropical continental-shelf water.
Scene/backdrop: Open blue-green water beneath a naturally rippled sunlit sea surface, with restrained suspended particles and distant blue haze. No visible seabed, reef, coast, boat, diver, equipment, other animals, food, or bubbles.
Subject: Scientific subject constraints: Common bottlenose dolphin, Tursiops truncatus. Robust streamlined spindle-shaped body; short thick bottle-like rostrum with a clear natural crease below the rounded melon; smooth countershaded gray body, darker dorsally and pale gray-white ventrally; one closed slit-like blowhole on the dorsal midline when underwater; one tall broad-based moderately falcate dorsal fin at mid-back; exactly two tapered pectoral flippers attached behind the head; one horizontal two-lobed tail fluke with a central notch. No external ears, gill slits, hind limbs, neck, vertical fish tail, shark fins, or anthropomorphic smile. No belly spots, common-dolphin hourglass pattern, killer-whale patches, or spotted-dolphin markings. Show one complete coherent body in a gentle three-quarter side view: rostrum tip, melon, visible eye, both pectoral flippers with the far flipper naturally foreshortened, dorsal fin, tail stock, and both horizontal fluke lobes all connected and comfortably inside frame. Neutral closed mouth and relaxed travel posture.
Style/medium: Original photorealistic natural-history editorial wildlife photography, authentic underwater field observation, museum-publication restraint, realistic skin texture, water optics, depth and color attenuation; no commercial aquarium gloss.
Composition/framing: Exact horizontal 3:2 designed to survive a centered 16:9 crop. Place the complete dolphin in the right half, facing left, occupying about 52–58 percent of image width. Preserve broad quiet open water across the left half as clean negative space for website typography. Slightly below-eye-level camera; no crop of rostrum, fins, or flukes.
Lighting/mood: Soft natural daylight filtering from the surface, calm, lucid and spacious; subtle caustics only near the upper body, no theatrical rays.
Color palette: Restrained ocean blue-green, slate gray, pale gray-white.
Constraints: Exactly one dolphin total and no other animal silhouettes; unmistakable Tursiops truncatus; original composition; no text, labels, logo, signature, border or watermark.
Avoid: Indo-Pacific spotted belly, Tamanend's coastal-species claim, common dolphin hourglass, porpoise face, shark, vertical tail, extra/fused/missing fins, two blowholes, blowhole on snout, bubble trail, visible sonar waves, grin, exposed teeth, performance leap, aquarium, dolphinarium, pool wall, underwater window, trainer, tourist, boat, hand feeding, bait, net, hook, CGI, illustration, painting, neon blue, oversaturation or stock-photo gloss.
```

#### Accepted composition edit

Mode: image edit using frame 01 as the reference image.

```text
Edit this existing Fauna Atlas cover image, preserving the same single Common Bottlenose Dolphin (Tursiops truncatus), its scientifically credible anatomy, pose, direction of travel, natural gray countershading, underwater surface, lighting, color palette, photorealistic natural-history style, and empty open-water setting.

Make a composition-only revision:
- Pull the virtual camera back so the complete dolphin is 15–20% smaller.
- Reposition the entire dolphin farther right.
- Place the rostrum tip at approximately 42% of image width and the tail tip at approximately 94% of image width.
- Keep the full animal comfortably within frame, including the entire short thick rostrum, rounded melon, exactly two pectoral flippers, one falcate dorsal fin, tail stock, and both lobes of the horizontal tail fluke.
- Leave the entire left 40% as clean, calm open-blue water with no animal, fish, bubbles, text, glare hotspot, or other distracting object so Chinese hero text can overlay it.
- Keep exact output dimensions 1536×1024, horizontal 3:2, 8-bit sRGB, no alpha.
- Exactly one dolphin total. Do not add or remove anatomy. No additional animals, silhouettes, reflections, bubbles, seabed, reef, land, boat, people, text, logo, signature, border, or watermark.
- Avoid CGI or illustration styling; retain the restrained realistic editorial wildlife photograph appearance of the source.
```

### 02 · Cooperative fish herding

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Bottlenose Dolphin feeding gallery image 2 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible underwater wildlife photograph of exactly three wild adult Common Bottlenose Dolphins (Tursiops truncatus) cooperatively herding one compact school of small silver fish in open coastal-shelf water.
Scene/backdrop: Natural blue-green temperate-to-subtropical shelf water with a softly rippled bright surface above and faint sandy seafloor far below. No reef, boat, people, equipment, fishing gear, bait, food bucket, or other animals beyond the one fish school.
Subjects/action: Exactly three complete anatomically coherent dolphins form a loose curved formation around one biologically plausible school of many small silver forage fish. One dolphin begins a controlled pass toward the edge of the school while two remain as separated flanks; all three bodies differ slightly in angle and size, with visible water gaps and no overlaps or cloned poses. Mouths closed or only naturally parted, no chewing, blood, injury, panic, or staged performance. The fish school remains an irregular living aggregation, not a perfect sphere, tornado, wall, bait ball supplied by humans, or decorative spiral.
Morphology for every dolphin: Scientific subject constraints: Common bottlenose dolphin, Tursiops truncatus. Robust streamlined spindle-shaped body; short thick bottle-like rostrum with a clear natural crease below the rounded melon; smooth countershaded gray body, darker dorsally and pale gray-white ventrally; one closed slit-like blowhole on the dorsal midline when underwater; one tall broad-based moderately falcate dorsal fin at mid-back; exactly two tapered pectoral flippers attached behind the head; one horizontal two-lobed tail fluke with a central notch. No external ears, gill slits, hind limbs, neck, vertical fish tail, shark fins, or anthropomorphic smile. No belly spots, common-dolphin hourglass pattern, killer-whale patches, or spotted-dolphin markings.
Style/medium: Original photorealistic natural-history editorial wildlife photography, authentic long-lens underwater field observation, restrained museum-publication quality, realistic skin, fish scales, water depth and attenuation.
Composition/framing: Exact horizontal 3:2 medium-wide frame safe for centered 16:9 crop. Keep all three entire dolphins and the complete fish school in the central safe area; animals occupy the middle two-thirds with clear separation and room to move.
Lighting/mood: Diffuse natural daylight, focused and energetic without drama; restrained caustics and no spotlight beams.
Constraints: Exactly three dolphins total plus exactly one school of small fish; no extra distant dolphin silhouettes; natural wild foraging only; no visible sonar rings, arrows or bubbles; no text, logo, signature, border or watermark.
Avoid: fourth dolphin, hidden cropped dolphin, merged bodies, identical clones, extra pectoral fins, vertical tails, sharks, tuna, giant fish, feeding frenzy, blood, beach stranding, bubble-net feeding, fishing boat, net, hook, line, hand feeding, trainer, aquarium, synchronized show pose, CGI, illustration, painting, neon blue, oversaturation or stock-photo gloss.
```

### 03 · Coastal-shelf habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Bottlenose Dolphin habitat gallery image 3 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible wide underwater natural-history photograph of the generic coastal-shelf habitat used by exactly one wild Common Bottlenose Dolphin (Tursiops truncatus).
Scene/backdrop: An expansive warm-temperate to subtropical continental-shelf water column. Foreground and middle distance show a gently sloping sand-ripple seabed with sparse low seagrass patches; the bottom gradually disappears into blue haze toward deeper open water. The naturally rippled sea surface is visible high above. Generic habitat only, with no named-place cues, coral reef, tropical postcard color, harbor infrastructure, seawall, boat, diver, fishing gear, litter, or other animals.
Subject: Exactly one complete anatomically coherent adult dolphin deliberately small in the middle-right distance, occupying only about 12–16 percent of image width, calmly traversing the open water above the habitat. Scientific subject constraints: Common bottlenose dolphin, Tursiops truncatus. Robust streamlined spindle-shaped body; short thick bottle-like rostrum with a clear natural crease below the rounded melon; smooth countershaded gray body, darker dorsally and pale gray-white ventrally; one closed slit-like blowhole on the dorsal midline when underwater; one tall broad-based moderately falcate dorsal fin at mid-back; exactly two tapered pectoral flippers attached behind the head; one horizontal two-lobed tail fluke with a central notch. No external ears, gill slits, hind limbs, neck, vertical fish tail, shark fins, or anthropomorphic smile. No belly spots, common-dolphin hourglass pattern, killer-whale patches, or spotted-dolphin markings. Despite its small scale, the short thick rostrum, curved dorsal fin, pectoral flippers and horizontal flukes remain legible.
Style/medium: Original photorealistic natural-history landscape photography, authentic underwater field observation, restrained museum-publication realism, natural particles, sand, seagrass, water optics and atmospheric depth.
Composition/framing: Exact horizontal 3:2 wide establishing frame safe for centered 16:9 crop. Habitat fills at least 85 percent of the image; keep the complete small dolphin in the center-right with broad uninterrupted water and seabed around it.
Lighting/mood: Soft diffuse daylight attenuating with depth, quiet, spacious and ecologically grounded; weak caustics near the shallow bottom only.
Constraints: Exactly one dolphin and no other animals; generic shelf habitat, not a specific site; no text, map labels, arrows, logo, signature, border or watermark.
Avoid: extra dolphin silhouettes, dense tropical coral reef, aquarium décor, tiled pool, shipwreck, underwater city, fantasy seagrass forest, vertical tail, extra fins, bubbles from blowhole, visible sonar rings, CGI, illustration, painting, neon blue, oversaturation or tourism-ad gloss.
```

### 04 · Surface breath

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Bottlenose Dolphin respiration gallery image 4 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible high-shutter-speed natural-history photograph of exactly one wild adult Common Bottlenose Dolphin (Tursiops truncatus) making one calm rolling breath at the open sea surface.
Scene/backdrop: Low gentle ocean swell in temperate-to-subtropical daylight, distant horizon softly out of focus, no land, boat, people, equipment, birds, fish, or other dolphins.
Subject/action: Exactly one dolphin travels from left toward right just beneath and through the surface. Use a slightly elevated long-lens side-three-quarter view. Its short thick rostrum, rounded melon, visible eye, crown, back, and one broad-based falcate dorsal fin are naturally visible; the lower body remains optically readable beneath the water where appropriate. Critical respiratory anatomy: exactly one blowhole on the dorsal midline immediately behind the melon, naturally open for the breath. Show only a very low, thin, fleeting veil of condensation and displaced droplets directly above it, never a tall whale blow or decorative spray. No air exits from the mouth or rostrum.
Morphology: robust streamlined gray Tursiops truncatus with pale lower sides, neutral closed mouth; one dorsal fin only. Partial submergence is intentional for a real surface-breath sequence; do not invent exposed gills or nostrils.
Style/medium: Original photorealistic natural-history editorial wildlife photography, high shutter speed, realistic wet skin, water adhesion, refraction and droplets, restrained museum-publication quality.
Composition/framing: Exact horizontal 3:2 medium frame safe for centered 16:9 crop. Keep the dolphin's head, open single blowhole and dorsal fin in the central safe area, with open water ahead; no accidental crop through the head or dorsal fin.
Lighting/mood: Soft lateral daylight, quiet and observational, controlled highlights on wet skin.
Constraints: Exactly one dolphin total; exactly one open blowhole on top of the head; only a low transient mist; no text, labels, arrows, logo, signature, border or watermark.
Avoid: paired baleen-whale blowholes, nostrils on snout, mouth breathing, tall vertical plume, explosive splash hiding anatomy, leap, grin, exposed teeth, shark fin, vertical tail, extra dolphin, calf, bubble trail, aquarium, trainer, tourist boat, hand feeding, CGI, illustration, painting, oversaturation or stock-photo gloss.
```

### 05 · Adult and calf travel

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Bottlenose Dolphin maternal-care gallery image 5 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a brand-new original scientifically credible candid underwater wildlife photograph of exactly two wild Common Bottlenose Dolphins (Tursiops truncatus): one complete adult and one complete dependent calf traveling in baby position.

Scene/backdrop: Open temperate-to-subtropical coastal-shelf water below a softly rippled sunlit surface, with clean blue depth and no seabed, reef, boat, diver, equipment, food, fish, bubbles, or other animals.

Composition and separation: The complete adult swims left-to-right across the upper-left half of the frame. Its entire body, including the full tail stock and both horizontally spread tail-fluke lobes, ends well before the calf begins. The complete calf swims in the lower-right half, slightly behind and alongside the adult's flank and slightly lower, about 35–40 percent of adult body length. Preserve a broad, unmistakable band of open blue water—at least one calf-body height—between every part of the calf and every part of the adult, including between the adult tail flukes and calf head or dorsal fin. No overlap, contact, tangency, merging, or occlusion between their silhouettes. Both face right and follow the same travel direction.

Anatomy for each animal: robust streamlined Common Bottlenose Dolphin body; short thick bottle-like rostrum with clear natural crease below a rounded melon; smooth dark-gray dorsal surface fading to pale gray-white underside; exactly one closed slit-like blowhole on the top midline; exactly one broad-based moderately falcate dorsal fin at mid-back; exactly two tapered pectoral flippers behind the head, allowing natural perspective; exactly one horizontal two-lobed tail fluke with central notch. No vertical fish tail, shark fin, gill slits, external ears, hind limbs, belly spots, common-dolphin hourglass pattern, anthropomorphic smile, or exposed teeth. The calf has juvenile proportions and subtly lighter gray skin, not exaggerated stripes.

Action and meaning: calm travel in the documented baby-position relationship. No nursing, birth, genital detail, touch, sentimental eye contact, or staged performance. This is an editorial reconstruction, not a record of named animals.

Style/medium: Original photorealistic natural-history editorial wildlife photography, authentic respectful-distance underwater observation, restrained museum-publication quality, realistic skin texture, water optics and natural depth attenuation.

Framing: exact horizontal 3:2, safe for centered 16:9 crop. All rostrums, pectoral fins, dorsal fins, tail stocks, and both animals' complete horizontal flukes comfortably inside the central safe area.

Lighting: soft diffuse natural daylight, calm and observational, no theatrical rays.

Constraints: Exactly two dolphins total—one adult and one calf—with two fully separate complete silhouettes and a wide water gap. No third animal or distant silhouette. No text, logo, signature, border or watermark.

Avoid: overlapping adult tail and calf, calf touching adult, fused silhouettes, identical same-size pair, calf ahead of adult, extra or missing fins, vertical tails, bubbles, sonar waves, aquarium, trainer, swim-with-dolphin tourism, hand feeding, performance, CGI, illustration, painting, neon blue or stock-photo gloss.
```

### 06 · Dorsal-fin photo-identification

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Bottlenose Dolphin monitoring gallery image 6 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible water-level telephoto wildlife photograph illustrating the kind of dorsal-fin view used for non-invasive photo-identification, showing exactly one wild Common Bottlenose Dolphin (Tursiops truncatus) surfacing side-on.
Scene/backdrop: Quiet temperate-to-subtropical open coastal water under soft overcast daylight, low natural ripples and a simple distant ocean horizon. No land, vessel, people, camera, equipment, buoy, fish, birds, or other dolphins.
Subject/action: Exactly one dolphin rolls calmly from left toward right at the surface. Preserve enough of the short thick rostrum, rounded melon, visible eye, shoulder and back to identify a bottlenose dolphin. The single tall broad-based moderately falcate dorsal fin is fully above water, tack-sharp and unobscured; its trailing edge has exactly two or three small irregular natural nicks plus a few faint healed pale scars, subtle and biologically plausible rather than symbolic. The submerged tail need not be visible in this method-focused surface crop. Neutral closed mouth; exactly one blowhole on the crown, closed after breathing.
Style/medium: Original photorealistic field-research editorial wildlife photography, long telephoto perspective from a respectful distance, high shutter speed, restrained museum-publication quality, realistic wet gray skin and water.
Composition/framing: Exact horizontal 3:2 medium-close side view safe for centered 16:9 crop. Keep the rostrum, head, entire dorsal fin and visible back comfortably inside frame, with the fin near center and clear water around its outline.
Lighting/mood: Soft overcast daylight, methodical, quiet and non-invasive.
Constraints: Exactly one dolphin total; one complete visible dorsal fin with fictional non-identifying nicks; original editorial reconstruction, not a real catalogue record; no text, numbers, labels, arrows, crosshairs, logo, signature, border or watermark.
Avoid: second fin or dolphin, shark, severed fin, deep wound, blood, tag, brand, freeze mark, collar, handling, capture, boat wake, human hand, aquarium, trainer, feeding, tall blow, smile, teeth, CGI, illustration, painting, oversaturation or promotional research staging.
```

## Static validation

- All six source files decode as 1536 × 1024, 8-bit sRGB PNG without alpha.
- All six runtime files decode as 1536 × 1024, 8-bit sRGB WebP without alpha.
- Source and runtime basenames form six one-to-one pairs.
- Visual inspection checks animal counts, short rostrum and melon crease, one dorsal fin, pectoral-fin count, horizontal flukes, single blowhole, natural water optics, cover negative space and absence of aquarium or feeding cues.
- Frame 05 uses the second from-scratch generation; discarded variants are not project assets.
