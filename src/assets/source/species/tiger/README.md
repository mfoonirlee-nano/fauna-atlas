# Tiger image set

Codex's built-in image generation tool created these six original project images on 2026-08-25 for the complete Fauna Atlas *Panthera tigris* profile. They reconstruct generalized Asian forest, grassland, hunting, maternal-care and monitoring scenes. They do not document named animals, sites, encounters or surveys.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/tiger/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/tiger/*.png` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-forest-edge-portrait-source.png` | `01-forest-edge-portrait.webp` | One complete left-facing tiger occupies the center-right of a forest edge, leaving quieter vegetation on the left |
| 02 | `02-stripe-pattern-profile-source.png` | `02-stripe-pattern-profile.webp` | One complete lateral tiger shows an irregular stripe field, white underside and a complete banded tail |
| 03 | `03-forest-grassland-water-mosaic-source.png` | `03-forest-grassland-water-mosaic.webp` | One small distant tiger walks along connected forest, tall grass and a natural water channel while habitat dominates the frame |
| 04 | `04-wild-boar-ambush-source.png` | `04-wild-boar-ambush.webp` | One tiger approaches one separated wild boar through cover without a chase, contact, capture or blood |
| 05 | `05-tigress-with-cubs-source.png` | `05-tigress-with-cubs.webp` | One complete adult tigress travels with exactly two separate, mobile cubs on a forest trail |
| 06 | `06-camera-trap-monitoring-source.png` | `06-camera-trap-monitoring.webp` | One complete tiger passes one unbranded camera trap without contact, capture, bait or location clues |

## Static verification

The final PNG and WebP pairs passed static and visual inspection on 2026-08-25. Frame 05 was regenerated with a wider composition so both cubs and all three tails remain inside the frame. All 12 files decode at 1536 × 1024 in sRGB and are opaque. Each source PNG contains one frame; each WebP uses lossy VP8. The accepted runtime focal points, in frame order, are `(0.65, 0.56)`, `(0.55, 0.55)`, `(0.73, 0.68)`, `(0.46, 0.57)`, `(0.59, 0.56)` and `(0.55, 0.53)`.

## Evidence boundaries

- The orange coat, black stripe field, white underside, rounded ears, broad muzzle and banded tail anchor the animals to *Panthera tigris*. A generated view cannot establish a subspecies, locality, sex, age or individual identity from appearance alone.
- Frames 01 and 02 show external form and a plausible stripe pattern. The generated stripes do not encode a real tiger and cannot enter a photo-identification catalogue.
- Frame 03 combines forest, tall grass and water in one plausible landscape. It does not represent the species' full habitat breadth or prove tiger occupancy, corridor use or population density.
- Frame 04 shows an approach to a potential prey animal. It does not record a strike, kill, prey preference or hunting-success rate.
- Frame 05 reconstructs maternal travel. The picture cannot establish age, kinship, litter size, survival or the duration of maternal care in a real family.
- Frame 06 reconstructs non-contact monitoring. It does not represent a named project, a confirmed detection, an abundance estimate or a safe place to install field equipment.

## Shared morphology anchor

The tiger-focused prompts repeated these constraints:

```text
Depict a wild adult tiger (Panthera tigris) as a large muscular cat with a natural orange-tawny coat, individually irregular vertical black stripes that wrap across the torso and limbs, white cheeks, throat and underside, rounded ears with dark backs and pale central spots, a broad whiskered muzzle, large paws and one complete long banded tail. Avoid white, golden-tabby or melanistic color morphs, a lion mane, leopard or jaguar spots, snow-leopard proportions, a domestic-cat face, duplicated limbs, missing tails, text, logos and watermarks.
```

The scenes intentionally avoid subspecies labels. Coat length, body size and color vary across the living range, while locality and genetic evidence carry more taxonomic weight than one reconstructed photograph.

## Final prompts

### 01 · Forest-edge portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas tiger species-detail cover, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically grounded wildlife photograph of exactly one complete adult tiger (Panthera tigris) walking quietly through a generalized Asian forest-and-tall-grass edge.
Scene/backdrop: humid mixed forest with layered green foliage, bamboo-like understory, tall tawny grass, damp leaf litter and faint early-morning mist; no identifiable park, country, landmark, road, fence or human structure.
Subject: one healthy adult wild tiger in calm left-facing three-quarter side view. Show a large muscular cat with rich but natural orange-tawny coat, individually irregular vertical black stripes that continue across the torso and limbs, white cheeks, throat and underside, rounded ears with dark backs and pale central spots, amber eyes, broad whiskered muzzle, large paws, and one long naturally banded tail. Keep the whole coherent animal visible from ears and whiskers through all four legs and the complete tail.
Style/medium: original photorealistic professional natural-history photography, restrained editorial color, realistic fur and vegetation texture, no glossy fantasy polish.
Composition/framing: horizontal 3:2 at tiger shoulder height; place the tiger in the center-right safe area facing left, occupying about half the frame, with broad quieter forest negative space across the left third for responsive interface copy. Keep paws, ears, and full tail inside frame.
Lighting/mood: soft filtered dawn light through canopy, quiet and alert, natural shadow and mist.
Constraints: exactly one tiger; anatomically correct Panthera tigris; natural orange wild-type coat and irregular stripe pattern; no text, label, logo, signature, border or watermark; generic editorial reconstruction rather than a named individual or locality record.
Avoid: white tiger, golden tabby morph, melanistic coat, lion mane, leopard rosettes, jaguar spots, snow leopard proportions, domestic cat face, oversized saber teeth, open roaring mouth, aggression, charging camera, prey, blood, cub, extra cat, duplicated limbs, fused paws, missing or forked tail, cropped anatomy, zoo, fence, vehicle, person, collar, camera trap, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 02 · Stripe-pattern profile

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas tiger morphology gallery image 2 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly one complete adult tiger (Panthera tigris) moving through sunlit tall grass, with its irregular stripe pattern and body proportions clearly readable.
Scene/backdrop: generalized Asian alluvial grassland beside a mixed woodland edge, tawny shoulder-high grass with scattered green blades and a softly blurred dark tree line; no identifiable park, country, road, fence or people.
Subject: one healthy adult wild tiger in clean right-facing lateral walking view. Show a muscular long-bodied cat with natural orange-tawny coat, white cheeks, throat and belly, rounded ears with dark backs and pale spots, broad muzzle and whiskers, large paws, and a complete long banded tail. Black stripes must be organically irregular, asymmetric-looking, varied in width and spacing, and wrap naturally around torso and limbs rather than forming uniform zebra bars. Grass may cross small parts of the legs and lower belly while the head, spine, flank pattern, paws and complete tail remain coherent.
Style/medium: original photorealistic professional natural-history photography, restrained museum-publication color, realistic fur, whiskers and dry-grass texture.
Composition/framing: horizontal 3:2 medium-wide side profile at shoulder height; entire animal inside frame with comfortable margins, tiger occupying about two-thirds of width, stripe-bearing flank parallel to the image plane.
Lighting/mood: broken warm daylight filtered through grass and woodland, quiet concealment, natural contrast.
Constraints: exactly one tiger; anatomically correct Panthera tigris; full head, four legs, paws and tail; no text, arrows, label, logo, signature, border or watermark; generic reconstruction.
Avoid: white tiger, golden tabby, lion mane, leopard or jaguar spots, snow leopard coat, domestic cat face, cloned or perfectly parallel stripes, checkerboard pattern, stripes floating off the fur, open roaring mouth, visible giant teeth, attack, prey, blood, cub, second tiger, duplicated limbs, fused paws, missing tail, cropped anatomy, zoo, fence, vehicle, camera trap, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 03 · Forest, grassland and water mosaic

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas tiger habitat gallery image 3 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new habitat-dominant conservation photograph of a generalized connected forest, tall-grass and wetland mosaic used by tigers (Panthera tigris), with exactly one small distant tiger.
Scene/backdrop: a broad Asian floodplain landscape where dense mixed forest and bamboo-like understory meet bands of tall tawny grass, a shallow natural river channel and muddy bank; layered vegetation continues toward low hazy hills. Habitat fills at least 90 percent of the frame. No identifiable country, reserve, landmark, village, farmland or infrastructure.
Animal: exactly one small but coherent adult wild tiger walking along the shaded forest-grass edge near the middle-right. The complete orange-tawny body, irregular black stripes, white underside and long banded tail remain readable, but the tiger occupies under 10 percent of image width and stays secondary to the connected landscape.
Style/medium: original photorealistic wide professional conservation photography, restrained scientific-publication processing, believable vegetation, water, haze and depth.
Composition/framing: horizontal 3:2 wide establishing view from a natural raised bank; forest, grassland and river corridor connect across the image; one complete tiger inside frame at small scale.
Lighting/mood: soft overcast morning light after light rain, humid and quiet, natural muted greens and tawny grass.
Constraints: exactly one tiger and no other visible animal; generic habitat reconstruction; no text, map, coordinates, logo, signature, border or watermark.
Avoid: close portrait, oversized tiger, second tiger, prey herd, tropical beach, treeless savanna, snowfield, desert dunes, colorful fantasy jungle, giant waterfall, mangrove-only scene, zoo, fence, road, railway, buildings, people, vehicle, camera trap, collar, fire, logging, CGI, illustration, painting, oversaturation or malformed animal.
```

### 04 · Wild-boar ambush

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas tiger hunting-behavior gallery image 4 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly one adult tiger (Panthera tigris) using vegetation cover to approach exactly one wild boar (Sus scrofa), with clear separation and no attack or contact.
Scene/backdrop: generalized Asian dry deciduous forest edge with tawny tall grass, scattered green shrubs, fallen leaves and broken tree shade; no identifiable country, park, road, fence or human structure.
Subjects/action: one complete healthy adult wild tiger crouches low in the left-middle ground, moving slowly rightward through grass with ears forward, mouth closed and belly held above the soil. Its natural orange coat, irregular black stripes, white underside and complete banded tail are coherent. Exactly one stocky adult Eurasian wild boar stands in the right-background at a believable distance, side-on and unaware, with dark coarse bristles, long snout, small ears, slender legs and only subtle short tusks. Leave broad open vegetation and at least several tiger body lengths between them. No chase, leap, bite, impact, injury or carcass.
Style/medium: original photorealistic professional natural-history photography, restrained documentary color, realistic fur, bristles, grass and woodland texture.
Composition/framing: horizontal 3:2 environmental action frame at low eye level; tiger and boar both fully inside frame and visually separated; tiger is the clear focal subject, boar smaller and secondary.
Lighting/mood: broken late-afternoon light through trees, tense but observational, no cinematic spotlight.
Constraints: exactly one tiger and exactly one wild boar; two separate complete animals; no contact, blood, wound or captured prey; anatomically correct Panthera tigris and Sus scrofa; no text, label, logo, signature, border or watermark; generic reconstruction.
Avoid: domestic pig, piglet, warthog facial warts or huge curved tusks, deer, second prey, second tiger, cub, coordinated pack hunt, open roaring mouth, exposed giant teeth, pounce, biting, feeding, blood, gore, carcass, fused or overlapping bodies, duplicated limbs, missing tail, zoo, fence, person, vehicle, camera trap, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 05 · Tigress with cubs

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas tiger maternal-care gallery image 5 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically restrained wide wildlife photograph of exactly one adult tigress (Panthera tigris) traveling with exactly two mobile dependent cubs through a quiet Asian forest clearing. Every animal, including every tail tip, must be fully inside the frame.
Scene/backdrop: generalized mixed deciduous forest with dappled leaf litter, low green understory, exposed roots and a broad natural animal trail; no identifiable country, reserve, den, road, fence or human structure.
Subjects/action: exactly one healthy adult wild tigress walks calmly from left to right with mouth closed. Exactly two striped cubs, old enough to walk steadily but clearly smaller than the adult, follow at different distances behind her. Keep all three animals separate with clear open space between their silhouettes. Give the adult and both cubs coherent juvenile/adult proportions, four visible coherent limbs, rounded ears and one complete naturally curved banded tail each. The two cubs must have distinct poses and stripe fields. No adult male, prey, hunting lesson or staged human-family pose.
Style/medium: original photorealistic professional natural-history photography, restrained documentary color, realistic fur, leaf litter and forest depth.
Composition/framing: horizontal 3:2 wide environmental frame at tiger shoulder height. Place the adult in the left third, the nearer cub near center and the second cub in the center-right. The whole family group occupies no more than 72 percent of frame width. Preserve at least 12 percent empty forest margin to the right of the final cub's complete tail tip and at least 8 percent margin to the left of the adult's nose. Keep every ear, paw, limb and tail tip visible.
Lighting/mood: gentle filtered morning light, attentive and quiet, natural shadows without sentimental glow.
Constraints: exactly three tigers total: one adult tigress and exactly two cubs; no fourth tiger or hidden silhouette; three complete non-overlapping bodies and three complete tails fully inside frame; natural orange wild-type coats with distinct irregular stripes; no text, label, logo, signature, border or watermark; generic reconstruction.
Avoid: cropped tail or body, animal touching image edge, adult male with mane, one cub, three or more cubs, extra adult, white tiger, cloned cubs, identical poses, overlapping or fused anatomy, carrying cub by the neck, nursing, den birth, attack, prey, blood, collar, zoo, fence, person, vehicle, camera trap, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 06 · Camera-trap monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas tiger non-contact monitoring gallery image 6 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically plausible field-documentary photograph of exactly one adult tiger (Panthera tigris) walking past exactly one unbranded motion-triggered camera trap on a forest animal trail, without touching or reacting to the equipment.
Scene/backdrop: generalized Asian mixed forest interior with a narrow leaf-litter trail, tree trunks, low green understory and soft dawn haze; no identifiable reserve, country, map, road, fence, buildings or people.
Animal: exactly one complete healthy adult wild tiger walks calmly through the middle ground from left to right, separated from the equipment. Show natural orange-tawny fur, irregular black stripes, white underside, rounded ears, broad muzzle, four coherent legs and paws, and one complete banded tail. The tiger is not collared, tagged, baited, trapped or distressed.
Equipment: exactly one compact olive-brown unbranded wildlife camera trap strapped securely to a tree trunk near the far right edge, angled across the trail. Give it one dark lens, a small infrared-sensor window and a plain weatherproof housing. No visible flash, laser, screen text, antenna, bait, cage, cable across the path or second camera.
Style/medium: original photorealistic professional conservation field photography, credible scale and equipment, restrained documentary color, realistic fur, bark and leaf litter.
Composition/framing: horizontal 3:2 wide environmental frame at low eye level; complete tiger occupies the center-left, the single camera remains smaller at the right edge, and open trail separates them. Keep all paws and full tail inside frame.
Lighting/mood: soft diffuse dawn light under canopy, quiet non-invasive observation, no dramatic beam.
Constraints: exactly one tiger and exactly one camera trap; no people or other animals; no contact, capture or named survey claim; no readable text, logo, signature, border, watermark, map or coordinates; generic reconstruction.
Avoid: second camera, multiple lenses or housings, security CCTV, trail sign, collar, ear tag, snare, cage, bait, food, flash burst, laser dots, camera touching tiger, tiger looking into lens, open roaring mouth, attack, blood, cub, extra tiger, duplicated limbs, cropped tail, zoo, fence, vehicle, researcher, village, CGI, illustration, painting, fantasy glow or oversaturation.
```
