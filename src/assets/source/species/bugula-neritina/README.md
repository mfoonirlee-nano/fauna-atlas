# Bugula neritina image set

Codex's built-in image generation tool created these six original project images on 2026-08-31 for the complete Fauna Atlas *Bugula neritina* sensu lato profile. They reconstruct a marina-piling colony, a diagnostic biserial branch, suspension feeding, brooding and larval release, larval symbiont localization, and settlement-plate monitoring. They do not document named animals, sites, collections, experiments, or results.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/bugula-neritina/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG returned HTTP 429, so the documented local fallback used `pngquant --quality=80-95 --speed 1 --force --strip`
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-marina-piling-colony-cover-source.png` | `01-marina-piling-colony-cover.webp` | One complete deep reddish-purple, repeatedly forked colony remains attached to one shaded marina piling |
| 02 | `02-biserial-zooid-diagnostic-source.png` | `02-biserial-zooid-diagnostic.webp` | One connected Y-shaped branch fragment shows two staggered zooid rows and several globular ovicells |
| 03 | `03-lophophore-suspension-feeding-source.png` | `03-lophophore-suspension-feeding.webp` | Five zooids on one biserial branch extend separate circular lophophores among sparse suspended particles |
| 04 | `04-ovicells-and-coronate-larva-source.png` | `04-ovicells-and-coronate-larva.webp` | One ovicell-bearing branch and one separate coronate larva share a continuous microscope field |
| 05 | `05-larval-symbiont-window-source.png` | `05-larval-symbiont-window.webp` | One artificial transparent larval window localizes small rod-shaped symbionts to a narrow pallial-sinus region |
| 06 | `06-settlement-plate-monitoring-source.png` | `06-settlement-plate-monitoring.webp` | One small branching colony grows on one mostly clean settlement plate facing one fixed camera |

## Static verification

The final PNG and WebP pairs passed original-size visual inspection on 2026-08-31. All 12 files decode at 1536 × 1024 in sRGB, are opaque and single-frame, and have distinct SHA-256 hashes.

Images 02 and 03 were revised on 2026-08-31 after static review. Image 02 now makes both staggered zooid rows explicit; image 03 now shows exactly five separate extended lophophores. The revision prompts below produced the current source files.

### 02 revision prompt

    Use case: scientific-educational
    Asset type: Fauna Atlas Bugula neritina diagnostic gallery source image
    Input image: the previous 02 source image is the edit target.
    Primary request: Rebuild only the bryozoan branch anatomy so every arm of the connected Y-shaped fragment unmistakably shows exactly two staggered longitudinal rows of separate elongated box-like zooids. Each narrow branch must be two zooids wide, with a visible central longitudinal seam and two parallel cell tracks offset by about half a zooid; viewers must be able to count the two rows at a glance.
    Scene/backdrop: preserve the same plain submerged observation tray and cool-gray laboratory background.
    Subject invariants: preserve one connected Y-shaped reddish-purple fragment, several pale globular ovicells attached at inner distal corners, retracted lophophores, broad frontal membranes, and subtle pointed outer distal corners.
    Style/medium: preserve realistic submerged natural-history macrophotography and translucent living tissue.
    Composition/framing: preserve the complete Y shape and 3:2 landscape framing; exact final canvas 1536 × 1024.
    Constraints: change the branch morphology needed to create two clear staggered rows; keep the background, palette, lighting, one-fragment count, and overall Y composition unchanged. No text, labels, arrows, numbers, scale bar, logo, signature, border, or watermark.
    Avoid: a single axial chain of zooids, one oversized zooid spanning the branch width, coral, sea fan, seaweed, hydroid, avicularia, long spines, multiple specimens, fluorescence, or CGI gloss.

### 03 revision prompt

    Use case: scientific-educational
    Asset type: Fauna Atlas Bugula neritina suspension-feeding gallery source image
    Input image: the previous 03 source image is the edit target.
    Primary request: Rearrange the extended lophophores so the image contains exactly five unmistakable, independently countable circular crowns with no overlap between any crowns or tentacles.
    Placement: place three extended lophophores on well-separated zooids in one row and two extended lophophores on well-separated zooids in the second staggered row. Leave at least one fully retracted zooid between neighboring extended zooids in the same row. Show all five central mouth rings and all five tentacle silhouettes in full, with clear dark-water gaps between crowns.
    Subject invariants: preserve the same single reddish-purple branch, its exactly two staggered rows of connected box-like zooids, diagonal orientation, dark marine background, sparse particles, realistic color, lighting, and microscope optics. Keep all other zooids retracted.
    Style/medium: preserve photorealistic living-microscopy reconstruction and natural optical depth.
    Composition/framing: preserve the full branch segment and 3:2 landscape framing; exact final canvas 1536 × 1024.
    Constraints: change only the placement of the five extended lophophores; exactly five crowns total; each crown belongs to a distinct zooid; no occlusion, fusion, or overlap between crowns. No arrows, current lines, labels, text, numbers, scale bar, logo, signature, border, or watermark.
    Avoid: four crowns, six or more crowns, touching or overlapping tentacles, hidden crown centers, coral polyps, hydroids, anemones, flowers, feathers, branching tentacles, worm crowns, dense particle clouds, fluorescence, or CGI gloss.

## Evidence boundaries

- The images depict *B. neritina* sensu lato. Exterior form alone cannot distinguish the formally unnamed Type S, D, and N cryptic species or establish native range.
- Frame 01 illustrates a generalized fouling habitat and colony form. It cannot establish locality, lineage, colony age, abundance, invasion status, or an exact height.
- Frame 02 combines diagnostic characters from taxonomic descriptions. It cannot replace microscopy, a voucher, measurements, or molecular identification.
- Frame 03 is a static feeding reconstruction. It cannot measure ciliary motion, flow velocity, filtration rate, particle selection, or diet composition.
- Frame 04 places brooding and a released larva together for comparison. It is not a continuous observation and cannot establish release timing, swimming duration, sex at zooid level, or reproductive rate.
- Frame 05 uses an artificial window. It cannot prove that every colony carries *Candidatus Endobugula sertula*, display bryostatin molecules, assign all biosynthetic steps, or measure chemical defence.
- Frame 06 illustrates equipment that can detect new growth. A settlement plate or image alone cannot identify lineage, prove introduction, date arrival, or measure environmental-DNA concentration.
- No frame establishes conservation status, population trend, lifespan, global depth limits, or medical efficacy of bryostatins.

## Shared morphology anchor

The prompts consistently treated the subject as an erect, flexible bryozoan colony made of narrow, repeatedly dichotomous branches. Close views constrained each branch to two staggered rows of connected box-like zooids, broad frontal membranes, subtle outer distal points, no avicularia, and no long spines. The color stayed reddish-purple to purple-brown. Every prompt excluded coral, hydroids, sea fans, seaweed, terrestrial plants, text, labels, logos, and watermarks.

## Final prompts

### 01 · Marina-piling colony cover

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Bugula neritina species-profile cover, original project source image
    Primary request: Create one original scientifically grounded underwater natural-history macro photograph of a living Bugula neritina sensu lato colony attached to a shaded marina piling in a warm-temperate harbor.
    Scene/backdrop: clear green-blue shallow seawater beside one plain weathered concrete piling, soft suspended particles, dim harbor background with no landmark and no other visible organism.
    Subject: exactly one erect flexible bushy bryozoan colony, about hand-sized, anchored by a small basal holdfast. The colony consists of many narrow flattened branches that divide repeatedly by clean dichotomous forks. Each branch is only two zooids wide and reads at close range as a fine regular cellular lattice. Live tissue is deep reddish-purple to purple-brown, not bright red. A few branch tips curve gently with the water.
    Style/medium: photorealistic underwater natural-history macro photography, sober field-documentary realism, real water optics and fine organic texture.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Keep the complete colony and attachment base inside frame near center-right, leave quiet water and piling texture on the left, and keep the branching silhouette readable.
    Lighting/mood: soft diffuse underwater daylight, restrained purple-brown, concrete gray and sea-green palette, natural contrast.
    Constraints: one colony only; one static opaque sRGB frame; colony must be visibly colonial at close range, never a single branching animal; no text, labels, arrows, scale bar, logo, signature, border, or watermark.
    Avoid: coral, hydroid, sea fan, seaweed, moss, terrestrial plant, vascular stems, leaves, flowers, polyps with large mouths, feathery worm crowns, sponge, multiple colonies, fish, crab, diver, boat, fantasy glow, oversaturation.

### 02 · Biserial zooid diagnostic view

    Use case: scientific-educational
    Asset type: Fauna Atlas Bugula neritina diagnostic gallery source image
    Primary request: Create one original realistic submerged macrophotograph of a short living Bugula neritina sensu lato branch that makes the colony's individual zooids readable.
    Scene/backdrop: one unmarked shallow glass observation tray under clear seawater on a neutral cool-gray laboratory surface, no hands, tools, labels, rulers, or other organisms.
    Subject: exactly one connected reddish-purple branch fragment with one clean Y-shaped dichotomous fork. Every narrow flattened branch consists of exactly two staggered longitudinal rows of elongated box-like zooids. Each zooid has a broad flexible frontal membrane covering most of its face and one subtle pointed outer distal corner. Show several large pale globular ovicells attached obliquely at inner distal corners. Lophophores remain retracted. No bird-head avicularia and no long spines.
    Style/medium: photorealistic natural-history macrophotography with believable submerged optics and translucent living tissue, not a diagram, fossil, dry skeleton, or plastic model.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Keep the complete branch fragment and fork inside frame, viewed close to front-on with enough negative space to separate its edges.
    Lighting/mood: soft diffuse microscope-style illumination, restrained reddish-purple, cream and gray palette.
    Constraints: one connected branch fragment; two zooid rows per branch; opaque sRGB; no text, labels, arrows, numbers, scale bar, logo, signature, border, or watermark.
    Avoid: coral, sea fan, seaweed, hydroid, leaf veins, ladder rungs extending beyond the branch, open mouths, feathery polyps, separate shells, avicularia, long spines, multiple specimens, dissection gore, fluorescence, fantasy glow.

### 03 · Lophophore suspension feeding

    Use case: scientific-educational
    Asset type: Fauna Atlas Bugula neritina suspension-feeding gallery source image
    Primary request: Create one original realistic underwater macro reconstruction of feeding zooids in a living Bugula neritina sensu lato colony.
    Scene/backdrop: clear shallow seawater over a dark neutral marine background, no sediment plume and no other organism.
    Subject: one short reddish-purple branch segment with exactly two staggered rows of connected box-like zooids. Five zooids have extended one delicate circular lophophore each. Every lophophore is a small funnel-shaped crown of about 24 separate slender unbranched translucent tentacles surrounding one central mouth; fine cilia may read as a soft edge but never as feather barbs. Other zooids stay retracted. A sparse natural scatter of tiny suspended algal particles passes through the water without arrows or graphic flow lines.
    Style/medium: photorealistic living-microscopy reconstruction, sober and anatomically legible, not an infographic.
    Composition/framing: exact 1536 x 1024 landscape. Keep the entire branch segment inside frame diagonally and make the five separate lophophore crowns readable near center.
    Lighting/mood: soft transmitted side light, restrained purple-brown tissue and pale cream tentacles, natural optical depth.
    Constraints: one colony fragment, two zooid rows, five lophophores, one opaque sRGB frame; no arrows, current lines, labels, text, numbers, scale bar, logo, signature, border, or watermark.
    Avoid: coral polyps, hydroid colony, anemones, flowers, feathers, branching tentacles, worm crowns, suction cups, eyes, faces, prey capture drama, dense particle clouds, fluorescence, CGI gloss.

### 04 · Ovicells and coronate larva

    Use case: scientific-educational
    Asset type: Fauna Atlas Bugula neritina brooding and larval-release gallery source image
    Primary request: Create one original realistic living-microscopy reconstruction that shows brooding structures and one newly released coronate larva of Bugula neritina sensu lato in the same field.
    Scene/backdrop: clear seawater in a plain unmarked observation chamber with a muted gray-green microscope field, no tools, labels, substrate, or other organisms.
    Subject: on the right, one connected reddish-purple branch section with exactly two rows of elongated zooids and several prominent pale cream globular ovicells attached obliquely at the inner distal corners. On the left, exactly one separate newly released non-feeding coronate larva, small and nearly spherical to slightly oval, with a continuous peripheral band of short cilia, restrained orange-brown internal tissue, no feeding tentacles and no gut full of food. The larva is close to but no longer attached to an ovicell.
    Style/medium: realistic marine biological microscopy reconstruction, delicate living tissue and credible optics, not a split-panel diagram.
    Composition/framing: exact 1536 x 1024 landscape. Keep one continuous field, branch on the right and single larva on the left, with both fully inside frame.
    Lighting/mood: soft diffuse transmitted light, restrained reddish-purple, cream, amber and gray-green.
    Constraints: one branch section and one larva only; opaque sRGB; no arrows, life-cycle rings, labels, text, numbers, scale bar, logo, signature, border, or watermark.
    Avoid: eggs floating in chains, multiple larvae, feeding larva, trochophore with long apical tuft, fish larva, jellyfish, eyes, face, legs, segmentation, coral, seaweed, shells, fluorescent colors, fantasy glow.

### 05 · Larval symbiont window

    Use case: scientific-educational
    Asset type: Fauna Atlas Bugula neritina symbiosis gallery source image
    Primary request: Create one original restrained microscopic anatomical reconstruction of a single Bugula neritina sensu lato coronate larva with an artificial transparent observational window showing the location of its bacterial symbionts.
    Scene/backdrop: plain pale-gray transmitted-light microscope field with subtle optical grain, no debris, adult colony, other larvae, labels, or chemical diagrams.
    Subject: exactly one complete nearly spherical coronate larva fully inside frame. Show a continuous equatorial corona of short cilia and anatomically restrained orange-beige internal tissue. Through one clearly artificial transparent window, reveal one narrow pallial-sinus region containing a localized dense band of many tiny uniform golden rod-shaped bacterial cells. Keep the bacteria inside that one region, much smaller than host cells. Include a restrained folded internal sac but no feeding lophophore.
    Style/medium: photorealistic museum microscopy reconstruction, sober and observational, not a cartoon or infographic.
    Composition/framing: exact 1536 x 1024 landscape; center one complete larva with generous empty field and keep the localized symbiont band readable without magnified inset panels.
    Lighting/mood: soft transmitted light, pale neutral optics, restrained amber, beige and gold.
    Constraints: one larva, one localized bacterial band, one static opaque sRGB frame; no bryostatin molecule, chemical structure, arrows, labels, text, numbers, scale bar, logo, border, signature, or watermark.
    Avoid: bacteria spread throughout the body, human embryo, cell nucleus diagram, gut microbiome, feeding tentacles, adult zooid, eyes, face, limbs, segmentation, fluorescent neon, multiple stages, petri dish, CGI gloss.

### 06 · Settlement-plate monitoring

    Use case: photorealistic-natural
    Asset type: Fauna Atlas Bugula neritina field-monitoring gallery source image
    Primary request: Create one original scientifically restrained underwater field photograph of a standardized settlement-plate survey for branching fouling bryozoans beneath a marina.
    Scene/backdrop: shaded green-blue harbor water beside a plain dock support, soft suspended particles, no people, fish, plants, shells, other fouling organisms, or identifiable landmark.
    Survey equipment: exactly one plain square white settlement plate hanging vertically from two unmarked cords and one small unbranded underwater camera on a simple fixed arm facing it. No readable settings or markings.
    Surface feature: exactly one small reddish-purple bushy Bugula-like colony attached near the center of the plate. It has repeated dichotomous forks and fine two-zooid-wide cellular branches. The rest of the plate remains mostly clean with only a light natural biofilm.
    Style/medium: photorealistic marine field-research photography, sober documentary realism, natural water optics.
    Composition/framing: exact 1536 x 1024 landscape, 3:2. Keep the full plate readable near center and the camera secondary at one side; show both attachment cords and the colony base.
    Lighting/mood: diffuse shaded daylight, restrained white, sea-green and purple-brown palette.
    Constraints: one plate, one camera, one small colony, opaque sRGB; no labels, numbers, ruler, QR code, grid, arrows, circles, overlays, text, logo, signature, border, or watermark.
    Avoid: extra colonies, barnacles, mussels, algae, hydroids, coral, sea fan, large animal, diver, hand, boat, clipboard, data screen, laboratory tank, infographic, fantasy lighting.
