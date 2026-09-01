# Red-eyed Tree Frog image set

Codex's built-in image generation tool created these six original project images on 2026-08-31 for the complete Fauna Atlas *Agalychnis callidryas* profile. They show an adult portrait, external field marks, lowland pond habitat, a nocturnal moth encounter, a leaf-borne egg clutch, and a snake-contact escape-hatching reconstruction. They do not document named animals, sites, clutches, field observations, experiments, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/red-eyed-tree-frog/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG returned HTTP 429, so the documented local fallback used `pngquant --quality=80-95 --speed 1 --force --strip`
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-rainforest-leaf-adult-cover-source.png` | `01-rainforest-leaf-adult-cover.webp` | One complete green adult rests on one wet broad leaf at night, with red eyes, barred blue flanks and orange toe discs visible |
| 02 | `02-red-eye-flank-bars-toe-pads-source.png` | `02-red-eye-flank-bars-toe-pads.webp` | One complete lateral adult on a branch makes the vertical pupil, flank bars, long limbs and adhesive toe discs readable |
| 03 | `03-lowland-wet-forest-pond-habitat-source.png` | `03-lowland-wet-forest-pond-habitat.webp` | One complete adult appears at environmental scale on vegetation above a small shaded forest pond |
| 04 | `04-nocturnal-moth-encounter-source.png` | `04-nocturnal-moth-encounter.webp` | One complete frog faces one separate moth without contact, an open mouth or an extended tongue |
| 05 | `05-leaf-egg-clutch-above-pond-source.png` | `05-leaf-egg-clutch-above-pond.webp` | One intact clear gelatinous clutch holds many enclosed limbless embryos beneath a leaf above pond water |
| 06 | `06-snake-attack-escape-hatching-source.png` | `06-snake-attack-escape-hatching.webp` | One closed-mouth cat-eyed snake touches one clutch while exactly three separate limbless tadpoles fall toward the water |

## Static verification

The final PNG and WebP pairs passed original-size visual inspection on 2026-08-31. All 12 files decode at 1536 × 1024 in sRGB, are opaque and single-frame, and have distinct SHA-256 hashes. Review at source and runtime resolution preserved the visible pupil and toe-disc shapes in frame 02, the enclosed embryos in frame 05, and the one-snake, three-tadpole count in frame 06.

## Evidence boundaries

- Exterior color and pattern vary across individuals, development and geography. Frames 01 and 02 show plausible adults but cannot establish sex, age, locality, measurements or ancestry.
- Frame 03 reconstructs a generalized lowland wet-forest pond. It cannot identify a country, prove breeding, measure canopy cover or describe every habitat used by the species.
- Frame 04 shows a plausible arthropod encounter. It cannot establish prey identity, preference, capture success, diet proportions or a universal hunting technique.
- Frame 05 shows one late-stage clutch above water. It cannot establish exact clutch size, embryo age, developmental rate, hatching time, parentage or survival.
- Frame 06 combines snake contact and escape hatching in one reconstruction. Pixels cannot demonstrate that embryos sensed vibration, distinguish the cue, establish response timing or prove that the three hatchlings survived.
- The snake in frame 06 has a generalized *Leptodeira*-like form. The image cannot identify it to species or tie it to a published experiment.
- No frame establishes current species limits, country range, abundance, population trend, IUCN status or legal protection.

## Shared morphology anchor

The adult prompts consistently specified one complete slender leaf frog with a smooth green dorsum, red iris and vertical black pupil, pale underside, blue-violet flanks broken by cream-yellow bars, orange digits with round adhesive discs, and long folded limbs. The prompts excluded generic green tree frogs, poison frogs, glass frogs, horizontal pupils, extra limbs, malformed toes, text, logos and watermarks. Egg prompts treated hatchlings as limbless tadpoles and kept the normal clutch separate from the predator-contact scene.

## Final prompts

### 01 · Rainforest leaf adult cover

    Use case: photorealistic-natural.
    Asset type: Fauna Atlas Red-eyed Tree Frog gallery image 1 of 6, requested exact 1536 × 1024 horizontal 3:2 project asset.
    Primary request: Create an original museum-quality natural-history photograph of exactly one complete adult Red-eyed Tree Frog (Agalychnis callidryas) perched on one broad glossy leaf at night in a humid Central American lowland rainforest.
    Subject: The single frog is awake in a calm three-quarter side view, body facing left and head turned slightly toward the camera. Show both vivid red eyes with narrow vertical black pupils, a smooth bright leaf-green back, pale cream underside, blue-violet flanks crossed by narrow cream-to-yellow vertical bars, orange toes with rounded adhesive discs, long slender limbs, and partial orange-and-blue webbing. Keep all four limbs and every visible toe anatomically coherent, with no inflated vocal sac. Use realistic adult proportions and moist granular skin, not a toy-like oversized head.
    Scene/backdrop: Natural broadleaf understory after light rain, droplets on the leaf, softly blurred dark foliage behind. No flowers, enclosure glass, terrarium equipment, people, prey, eggs, tadpoles, or other animals.
    Style/medium: Photorealistic field macro photography, credible natural-history color, real amphibian skin and leaf texture, restrained museum-publication finish.
    Composition/framing: Horizontal 3:2. The entire frog and supporting leaf remain inside frame, frog centered near x=0.57 y=0.53 with room around every foot. Eye-level macro perspective, shallow but sufficient depth of field to keep eyes, body outline, and toes readable.
    Lighting/mood: Soft diffused nocturnal fill resembling ethical low-intensity field photography, dark green background, no harsh flash, no neon glow, no cinematic fantasy.
    Constraints: Exactly one complete frog; accurate red-eyed tree frog diagnostic coloration; no cropped toes, duplicated limbs, deformed digits, text, labels, scale bar, logo, signature, border, or watermark.
    Avoid: generic green tree frog, poison frog, glass frog, white tree frog, bulging round pupils, horizontal pupils, red body, uniformly blue sides, missing cream flank bars, suction cups on the wrong surfaces, six legs, extra toes, open mouth, calling posture, staged studio look, illustration, painting, CGI, fantasy, oversaturation.

### 02 · Red eye, flank bars and toe pads

    Use case: scientific-educational with photorealistic-natural rendering.
    Asset type: Fauna Atlas Red-eyed Tree Frog diagnostic gallery image 2 of 6, requested exact 1536 × 1024 horizontal 3:2 project asset.
    Primary request: Create one original museum-grade natural-history photograph showing exactly one complete adult Red-eyed Tree Frog (Agalychnis callidryas) in a clean left-facing lateral profile while it grips a slender horizontal rainforest branch.
    Subject: Keep the frog’s full silhouette readable from snout to rear toes. Show one large vivid red eye with a narrow vertical black pupil; leaf-green dorsum; pale cream throat and belly; blue-violet side patches separated by narrow cream-yellow vertical bars; orange fingers and toes ending in round adhesive discs; long slender hind limbs; partial orange-and-blue interdigital webbing. The near forefoot and near hind foot should each grip the branch naturally with separate, coherent digits. The far limbs may sit behind but must not become extra limbs. Mouth closed, vocal sac flat.
    Scene/backdrop: Soft neutral rainforest-green blur with a few out-of-focus leaves, no distracting flowers and no terrarium.
    Style/medium: Photorealistic macro field photography intended to teach external field marks, real moist skin and bark texture, restrained natural colors, no cutaway and no diagram labels.
    Composition/framing: Horizontal 3:2, entire animal and both ends of the branch inside frame, frog centered near x=0.52 y=0.5. Use a lateral eye-level viewpoint and enough depth of field for the eye, flank bars, feet, and body outline.
    Lighting/mood: Diffuse soft daylight under a shaded humid canopy, no harsh flash or theatrical rim light.
    Scientific boundary: Color and flank pattern vary among individuals and regions; this frame shows one plausible adult rather than a universal pattern or calibrated size specimen.
    Constraints: Exactly one complete frog, one branch, no other animals; no cropped feet, duplicated limbs, deformed toes, ruler, text, labels, arrows, logo, signature, border, or watermark.
    Avoid: generic green tree frog, poison frog, glass frog, white tree frog, horizontal or round pupil, red body, blue back, solid unbarred flank, giant suction cups, extra fingers, six legs, open mouth, calling posture, prey, eggs, illustration, CGI, painting, oversaturated neon colors.

### 03 · Lowland wet-forest pond habitat

    Use case: photorealistic-natural.
    Asset type: Fauna Atlas Red-eyed Tree Frog habitat gallery image 3 of 6, requested exact 1536 × 1024 horizontal 3:2 project asset.
    Primary request: Create an original wide natural-history photograph of a Central American humid lowland forest breeding site used by the Red-eyed Tree Frog (Agalychnis callidryas), with exactly one complete adult frog visible at environmental scale on a broad leaf over the water.
    Scene/backdrop: A small shaded still-water forest pond during the rainy season, surrounded by layered broadleaf vegetation, thin branches, hanging leaves, damp leaf litter, exposed roots, and a partly open canopy. The water is dark and calm with a few natural ripples and reflections. Keep the habitat wild and structurally complex, neither a manicured garden nor a vast lake.
    Subject: One plausible adult red-eyed tree frog perched on a leaf 0.5–1.5 meters above the pond near the mid-right foreground, identifiable by green body, red eye, blue-and-cream barred flank, and orange toes. Keep the frog complete, modest in scale, and anatomically coherent. No egg clutch in this frame.
    Style/medium: Photorealistic conservation field photography, documentary natural color, credible wet leaves, soil, water, and atmospheric depth.
    Composition/framing: Horizontal 3:2 establishing view. Pond occupies the lower middle, surrounding foliage frames it, frog remains readable without dominating the scene. Deep enough focus to understand the pond and overhanging vegetation.
    Lighting/mood: Soft overcast late-afternoon light after rain, humid and quiet, no sunbeams or fantasy glow.
    Scientific boundary: This is a generalized habitat reconstruction, not a named locality, density estimate, proof of breeding, or claim that the species depends on one pond type.
    Constraints: Exactly one complete frog and zero other animals; no eggs, tadpoles, fish, birds, snakes, insects, people, trails, signs, buildings, artificial lights, text, labels, logo, signature, border, or watermark.
    Avoid: Amazon rainforest caption cues, waterfall, fast stream, mangrove, open pasture, aquarium, zoo enclosure, lush fantasy jungle, giant frog, cropped animal, duplicated frog, malformed limbs, illustration, CGI, painting, oversaturation.

### 04 · Nocturnal moth encounter

    Use case: photorealistic-natural.
    Asset type: Fauna Atlas Red-eyed Tree Frog nocturnal-foraging gallery image 4 of 6, requested exact 1536 × 1024 horizontal 3:2 project asset.
    Primary request: Create an original natural-history photograph of exactly one complete adult Red-eyed Tree Frog (Agalychnis callidryas) poised to seize exactly one small nocturnal moth on a nearby leaf in a Central American rainforest understory.
    Subject and action: The frog crouches on a thin diagonal branch at night, facing the moth 8–12 centimeters away on the edge of one leaf. Its body is tense but still, red eye fixed on the moth, mouth closed, tongue not visible, forelimbs braced and hind limbs folded for a short lunge. Show green dorsum, red vertical-pupil eye, blue-and-cream flank bars, and orange adhesive toe discs. Keep the full frog and all limbs anatomically coherent. The moth is small, natural brown-gray, with two wings and six subtle legs, clearly separate from the frog and not touching it.
    Scene/backdrop: Humid broadleaf understory at night with a few rain droplets and dark soft-focus foliage. No flowers, fruit, eggs, tadpoles, or other prey.
    Style/medium: Photorealistic field macro photography, restrained scientific-documentary color, credible amphibian skin, bark, leaf, and moth textures. Capture a plausible pre-capture encounter rather than a staged spectacle.
    Composition/framing: Horizontal 3:2. Frog occupies the center-left and moth the mid-right, both within the central safe area. Keep the complete frog and supporting branch inside frame; enough depth of field for both subjects.
    Lighting/mood: Soft low-intensity nocturnal field light, natural shadows, no harsh flash, no neon or fantasy glow.
    Scientific boundary: The image reconstructs a plausible arthropod encounter and does not identify stomach contents, prey preference, capture success, or a universal hunting technique.
    Constraints: Exactly one complete frog and exactly one moth; no other animals; closed mouth and no visible tongue; no cropped toes, duplicated limbs, deformed digits, text, label, logo, signature, border, or watermark.
    Avoid: chameleon tongue, frog swallowing prey, open jaws, giant insect, butterfly, spider, snake, generic green tree frog, poison frog, horizontal pupils, red body, extra legs, fused prey, violence, illustration, painting, CGI, oversaturation.

### 05 · Leaf egg clutch above pond

    Use case: scientific-educational with photorealistic-natural rendering.
    Asset type: Fauna Atlas Red-eyed Tree Frog egg-clutch gallery image 5 of 6, requested exact 1536 × 1024 horizontal 3:2 project asset.
    Primary request: Create an original close natural-history photograph of exactly one intact gelatinous Red-eyed Tree Frog (Agalychnis callidryas) egg clutch attached to a broad green leaf directly above a small rainforest pond.
    Egg clutch: One compact oval mass of clear moist jelly containing roughly 30 separate developing embryos. Each egg remains individually bounded within the shared gelatinous mass. The late-stage embryos are dark gray-brown, curved, limbless, and tadpole-like with a visible head, eye spot, and tail; keep them inside intact egg capsules. Show modest natural variation in orientation without duplicated faces, pearl-like opaque spheres, exposed froglets, or hatched larvae.
    Scene/backdrop: The leaf projects over dark still pond water in a humid Central American forest during the rainy season. Include soft-focus vegetation and a readable water surface below, with a few droplets on the leaf. No adult frog in this frame.
    Style/medium: Photorealistic natural-history macro photography, restrained museum-publication color, credible translucent jelly, embryo tissue, leaf veins, and water reflections. Avoid clinical lab aesthetics.
    Composition/framing: Horizontal 3:2. The single egg mass sits near x=0.48 y=0.46 on the leaf, fully inside frame; pond water is visible beneath in the lower third. Depth of field keeps the whole clutch and leaf attachment readable.
    Lighting/mood: Soft diffuse overcast rainforest light, natural translucency without glowing eggs or fantasy backlight.
    Scientific boundary: This frame shows one plausible late-stage clutch above water. It cannot prove exact clutch size, embryo age, parentage, developmental rate, hatching time, survival, or whether any embryo has detected a cue.
    Constraints: Exactly one intact egg clutch; roughly 30 enclosed embryos and zero hatched tadpoles; zero adult frogs, snakes, insects, fish, people, text, labels, ruler, logo, signature, border, or watermark.
    Avoid: frogspawn floating in water, long bead strings, foam nest, bird eggs, snail eggs, grapes, caviar, opaque white eggs, four-legged froglets, external limbs, embryos outside capsules, broken jelly, blood, mold, multiple clutches, terrarium, laboratory dish, illustration, CGI, painting, oversaturation.

### 06 · Snake attack and escape hatching

    Use case: scientific-educational with photorealistic-natural rendering.
    Asset type: Fauna Atlas Red-eyed Tree Frog escape-hatching gallery image 6 of 6, requested exact 1536 × 1024 horizontal 3:2 project asset.
    Primary request: Create an original, non-graphic natural-history reconstruction of a predator-triggered escape-hatching moment in Red-eyed Tree Frog (Agalychnis callidryas) embryos above a rainforest pond.
    Scene and action: Exactly one slender brown cat-eyed snake of the genus Leptodeira reaches from a thin branch at the upper left and touches the left edge of exactly one gelatinous frog egg clutch attached beneath a broad green leaf over water. The snake has a small narrow head, large golden-brown eye with a vertical pupil, subtle dark saddle blotches, closed mouth, and no prey in its jaws. The clutch remains mostly intact and contains many dark curved limbless embryos in separate clear capsules.
    Hatchlings: Exactly THREE separate, complete, newly hatched limbless tadpoles leave opened capsules on the lower-right edge of the clutch and fall toward the pond. Each has one coherent dark tadpole body with a rounded head and long finned tail, zero legs and zero frog feet. Keep all three countable and separated at different points along a short downward trajectory. Add only small clear jelly strands and droplets, no blood or torn tissue.
    Scene/backdrop: Humid Central American forest pond during the rainy season, dark still water visible below, soft-focus wet vegetation behind.
    Style/medium: Photorealistic high-speed natural-history field photography, restrained museum-publication color, credible snake scales, translucent egg jelly, embryos, tadpoles, wet leaf, and water.
    Composition/framing: Horizontal 3:2. Leaf and clutch fill the central area; snake head remains upper-left; three falling tadpoles stay within the central-lower safe zone above visible water. Keep the snake head, clutch, and all three tadpoles in focus enough to read.
    Lighting/mood: Soft diffuse overcast rainforest light, urgent biological event without horror, theatrical lighting, or fantasy glow.
    Scientific boundary: The still reconstructs snake contact and escape hatching. Pixels cannot demonstrate that embryos sensed vibration, identify the exact cue, establish embryo age, prove that every hatchling survived, or measure response timing; those conclusions require the paired vibration and video experiments.
    Constraints: Exactly one snake, exactly one clutch, exactly three complete limbless falling tadpoles, and zero adult frogs or froglets; no open snake mouth, swallowing, blood, wounds, gore, text, labels, arrows, ruler, logo, signature, border, or watermark.
    Avoid: adult frog, four-legged baby frogs, salamanders, fish, worms, multiple snakes, snake biting tadpole, eggs floating in water, opaque eggs, long bead-string spawn, broken leaf, giant serpent, open jaws, venom fangs, extra tadpoles, fused bodies, human hands, laboratory setup, illustration, CGI, painting, oversaturation.

## Accepted file hashes

| No. | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `4f0bfb83391e1d71ea0818ca6db96f404324738bdf81509b5446d423d0c104f4` | `0e80caf619f59c3bd3fb77c313a560193d111c57ac262d728392894034f6820c` |
| 02 | `3d67840e9f5730c622cd2ae34e7ac9dca691c52b3339a7bebfa7c53aefd9c989` | `a3d24427c374d126cbb3a95e29c93f5f92339b56c98228a7a3d7fdbb714391eb` |
| 03 | `1c2793b8bae77c95a23bf68ecbd4e85c8d3e39cb80eeeae12f566a071578c7f4` | `dd98b8ee619e94d3d6ba8cabc2c7d241648dfc233c152a87fbf37bd54538c635` |
| 04 | `90a345d5119511e6496d04d018ceced453f3f8b6476de79f8777fa6e199d0174` | `78b3ae3748c3a590ab7a269e4d424194d0716625a87dc2768aa7f50a5660c71b` |
| 05 | `4b906251e86c32dc688f72f6608864f3592b4b1569e77856d23fca1440dc1110` | `c46a337a2b8ad2005ab03c7fa79444d32be5a42d2d72d6fa68c4514ac976f235` |
| 06 | `4f0c5194b143527afbd94e33abf63776b473a890a336f84b755c1298fbc84e1b` | `29448824fbb1a362ccfcab8efe460ecadc6d9041c315c1c22338a1e34937d972` |
