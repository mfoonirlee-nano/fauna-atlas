# Chinese sturgeon image set

Codex's built-in image generation tool created these six original project images on 2026-08-24 for the complete Fauna Atlas *Acipenser sinensis* profile. They reconstruct generalized Yangtze River and estuary settings. They do not document named fish, sites, surveys, spawning events or monitoring projects.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/chinese-sturgeon/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-yangtze-migration-portrait-source.png` | `01-yangtze-migration-portrait.webp` | One complete left-facing sturgeon in the center-right above a coarse riverbed, with broad open water on the left |
| 02 | `02-scuted-body-and-barbels-source.png` | `02-scuted-body-and-barbels.webp` | One complete close sturgeon with four visible barbels, longitudinal scute rows and a heterocercal tail |
| 03 | `03-deep-river-spawning-habitat-source.png` | `03-deep-river-spawning-habitat.webp` | One small distant sturgeon in a habitat-dominant deep channel with gravel, cobbles and boulders |
| 04 | `04-estuary-juvenile-foraging-source.png` | `04-estuary-juvenile-foraging.webp` | One juvenile searches above a sandy-muddy estuary bottom near several small, separate benthic prey cues |
| 05 | `05-gravel-bed-spawning-run-source.png` | `05-gravel-bed-spawning-run.webp` | Exactly two separated sturgeons travel above a coarse riverbed; the frame does not show eggs or spawning contact |
| 06 | `06-edna-water-monitoring-source.png` | `06-edna-water-monitoring.webp` | Exactly two researchers collect and cap water samples from one aluminum skiff; no fish appears |

## Evidence boundaries

- A long body, pointed-to-broad rostrum, four ventral barbels, five longitudinal scute rows, posterior dorsal fin and heterocercal tail anchor the reconstruction to a sturgeon. An ordinary generated image cannot distinguish Chinese sturgeon from Yangtze sturgeon or other similar species without counts, provenance and genetic evidence.
- Frames 01 and 02 show external morphology. They cannot establish sex, age, length, weight, locality or a definitive identification.
- Frame 03 represents coarse, high-flow river habitat associated with spawning reaches. One fish above this substrate does not prove occupancy, migration direction or spawning.
- Frame 04 shows a juvenile approaching small benthic organisms. It does not identify prey, record a capture or quantify the species' diet.
- Frame 05 shows two adults moving in the same direction over coarse substrate. Appearance cannot establish sex, reproductive condition, pairing, abundance or a spawning event.
- Frame 06 reconstructs non-invasive eDNA water sampling. One sample cannot establish species presence, absence, abundance, origin or trend.
- None of the scenes reveals a real spawning site, reserve, receiver location or field-project identity.

## Shared morphology anchor

The fish-focused prompts repeated these constraints:

```text
Depict a Chinese Sturgeon (Acipenser sinensis) with one elongated coherent body, a long wedge-shaped rostrum, exactly four separate barbels in one transverse row ahead of a small closed ventral mouth, five longitudinal rows of bony scutes, gray-brown skin, a pale underside, paired pectoral and pelvic fins, one posterior dorsal fin and a strongly heterocercal tail with the upper lobe longer. Avoid shark gill slits, catfish whiskers, a paddlefish or sawfish rostrum, visible teeth, ordinary overlapping scales, an adipose fin, a symmetric forked tail, missing fins, duplicate anatomy, text, logos and watermarks.
```

Adult and juvenile external proportions vary. These reconstructions use a narrower rostrum than some large adults and cannot support age or species-level identification from morphology alone.

## Final prompts

### 01 · Yangtze migration portrait

The final source came from a new generation followed by one composition and barbel edit.

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Sturgeon species-detail cover, exact 1536 x 1024 horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically grounded underwater wildlife photograph of exactly one complete adult Chinese Sturgeon (Acipenser sinensis) swimming through a generalized deep middle-to-lower Yangtze River migratory channel.
Scene/backdrop: broad natural river underwater scene with muted green-brown clear-enough water, filtered daylight, a deep channel, scattered rounded gravel and cobble on the bottom, faint suspended sediment, no recognizable landmark or human structure.
Subject: one large elongated spindle-shaped Chinese Sturgeon in calm left-facing side three-quarter view. Give it a long pointed wedge-shaped snout, four separate slender barbels in one transverse row on the underside of the snout ahead of a small closed ventral mouth, five continuous longitudinal rows of pale bony scutes, smooth gray-brown skin between scutes, pale silvery underside, paired pectoral and pelvic fins, one dorsal fin set far back, and one strongly heterocercal tail whose upper lobe extends farther than the lower lobe. Keep the full fish anatomically coherent from snout tip to both tail lobes.
Style/medium: original photorealistic professional freshwater natural-history photography, restrained museum-publication color, realistic skin, scutes, fins, suspended sediment and riverbed texture.
Composition/framing: low underwater eye-level horizontal 3:2; place the whole fish in the center-right safe area, head pointing left, preserve broad calm open-water negative space across the left third for responsive page copy, keep every fin, barbel and the full tail inside frame.
Lighting/mood: soft directional daylight from the surface, quiet purposeful upstream movement, natural contrast without cinematic blue grading.
Constraints: exactly one animal; four barbels only; five orderly body-scute rows; closed ventral mouth; no text, label, logo, signature, border or watermark. This is a generic reconstruction, not a locality or occurrence record.
Avoid: shark anatomy, catfish, paddlefish, sawfish, alligator gar, carp scales, eel body, sucker mouth on snout tip, whiskers around the lips, more or fewer than four barbels, giant open mouth, teeth, symmetric tuna tail, rounded homocercal tail, missing or extra fins, duplicated fish, eggs, fishing gear, diver, boat, dam, aquarium, CGI, illustration, oversaturation or glossy stock-photo staging.
```

Final edit:

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Chinese Sturgeon species-detail cover, exact 1536 x 1024 horizontal 3:2 website asset
Input images: Image 1 is the edit target.
Primary request: Recompose only the Chinese sturgeon in Image 1 so the complete fish is about 25 percent smaller and shifted to the center-right. Place the snout near x=0.42, body center near x=0.68, and tail tip near x=0.94, keeping the fish left-facing. Preserve broad uninterrupted open-water negative space over the left 35 to 40 percent for interface typography.
Morphology correction: show exactly four separate slender barbels hanging from one transverse row on the underside of the snout, ahead of the closed ventral mouth. Preserve the long wedge snout, five longitudinal bony scute rows, gray-brown skin, pale belly, posterior dorsal fin and strongly heterocercal tail with the upper lobe longer.
Constraints: keep the same generalized Yangtze underwater river scene, gravel bed, suspended sediment, lighting, color, photorealistic documentary style and 3:2 framing. Keep the whole fish and every fin, barbel and tail lobe inside the frame. Exactly one animal. No text, label, logo, border or watermark.
Avoid: changing species, adding fish, cropped anatomy, shark or catfish features, four barbels turning into lip whiskers, open mouth, symmetric tail, CGI, illustration or oversaturation.
```

### 02 · Scuted body and barbels

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Sturgeon morphology gallery image 2 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained underwater field photograph of exactly one complete Chinese Sturgeon (Acipenser sinensis) in clean side three-quarter view, showing visible external morphology without handling or labels.
Scene/backdrop: generalized deep Yangtze channel with subdued green-gray water and a softly blurred gravel bottom; habitat remains present but does not hide the fish.
Subject: one elongated gray-brown sturgeon, whole body visible. Show a long pointed wedge-shaped snout; exactly four separate slender barbels in one transverse row beneath the snout and clearly ahead of a small closed ventral mouth; five orderly longitudinal rows of pale diamond-like bony scutes along the back, flanks and lower body; smooth skin between scutes; pale silvery underside; broad pectoral fins; paired pelvic fins; one rear-set dorsal fin; and a strongly heterocercal tail with the upper lobe longer than the lower lobe. One coherent head, torso and tail.
Style/medium: original photorealistic professional natural-history photography, crisp restrained detail in scutes, barbels, skin and fins, museum-publication color.
Composition/framing: exact horizontal 3:2 medium underwater view at fish eye height, complete animal centered with generous margins, barbels, mouth, all fins and both tail lobes readable.
Lighting/mood: soft neutral underwater daylight, calm documentary tone, natural suspended particles and depth.
Constraints: exactly one fish; exactly four barbels; five body-scute rows; closed ventral mouth; no ruler, arrow, inset, text, logo, signature, border or watermark. Appearance alone does not establish locality or definitive species identity.
Avoid: shark, catfish, paddlefish, sawfish, alligator gar, carp scales, armored plates covering all skin, lip whiskers, more or fewer than four barbels, open terminal mouth, teeth, symmetric tail, forked tuna tail, cropped snout or tail, extra or missing fins, duplicate fish, aquarium, specimen table, CGI, illustration or oversaturation.
```

### 03 · Deep river spawning habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Sturgeon habitat gallery image 3 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new habitat-dominant underwater conservation photograph of a generalized deep flowing Yangtze River spawning-reach habitat used by Chinese Sturgeon (Acipenser sinensis).
Scene/backdrop: a broad deep river channel with strong but plausible current, muted green-brown water, shafts of filtered daylight, natural suspended sediment, and an extensive coarse gravel-and-cobble riverbed with irregular low relief. Habitat occupies at least 88 percent of the frame. No recognizable landmark.
Animal: exactly one small distant but coherent adult Chinese Sturgeon near the middle-right, swimming upstream above the coarse bed. It has a pointed snout, elongated gray body with visible pale scute lines, posterior dorsal fin and heterocercal tail. The fish remains secondary to the channel.
Style/medium: original photorealistic wide professional freshwater conservation photography, restrained scientific-publication processing and credible underwater visibility.
Composition/framing: exact horizontal 3:2 wide establishing view, safe for a centered 16:9 crop; river depth, current and coarse substrate dominate, one fish occupies under 12 percent of image width.
Lighting/mood: diffuse daylight from the surface, quiet high-flow river atmosphere, natural color.
Constraints: exactly one fish and no other animals or people; no dam, turbine, intake, boat, net, tag, map, coordinates, text, logo, signature, border or watermark. The scene is a generic reconstruction and cannot prove spawning or occupancy.
Avoid: shallow ornamental stream, crystal tropical water, coral reef, ocean blue, giant foreground fish, exposed eggs, schooling fish, disaster spectacle, concrete channel, visible hydropower structure, aquarium, CGI, illustration, fantasy or oversaturation.
```

### 04 · Estuary juvenile foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Sturgeon juvenile-foraging gallery image 4 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically restrained underwater wildlife photograph of exactly one complete juvenile Chinese Sturgeon (Acipenser sinensis) searching for benthic prey in a generalized Yangtze Estuary transition habitat.
Scene/backdrop: shallow-to-moderate depth brackish estuary water with natural brown-green visibility, soft tidal current, sandy-muddy bottom mixed with fine shell fragments and sparse submerged debris, no recognizable locality or human structure.
Subject/action: one juvenile sturgeon in calm side three-quarter view close above the bottom, head angled slightly down. Give it a proportionally long pointed wedge snout, exactly four short separate barbels in one row ahead of a small closed ventral mouth, five prominent pale scute rows, slender gray-brown body, pale underside, rear-set dorsal fin and heterocercal tail. Its mouth approaches but has not touched a small patch containing a few biologically tiny amphipods, one short polychaete tube and one tiny crab partly sheltered in sediment; prey cues remain separate and secondary.
Style/medium: original photorealistic professional estuarine natural-history photography, credible suspended sediment, restrained museum-publication color and fine juvenile scute detail.
Composition/framing: exact horizontal 3:2 medium-wide view, whole juvenile and full tail inside frame, benthic-search posture readable, enough estuary bottom and open water to establish habitat.
Lighting/mood: diffuse daylight through turbid estuary water, calm observational tone.
Constraints: exactly one sturgeon; prey animals remain tiny, anatomically modest and separate; four barbels; closed ventral mouth; no feeding frenzy, bait, hook, net, person, tag, text, logo, signature, border or watermark. The still image supports benthic searching only, not prey identity or diet proportions.
Avoid: adult giant fish, aquarium gravel, coral reef, bright tropical water, shark, catfish, paddlefish, sawfish, open mouth, teeth, whiskers on lips, giant crab or shrimp, captured prey, blood, extra sturgeon, fused anatomy, CGI, illustration or oversaturation.
```

### 05 · Gravel-bed spawning run

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Sturgeon spawning-migration gallery image 5 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new quiet original underwater natural-history photograph of exactly two adult Chinese Sturgeons (Acipenser sinensis) aligned upstream over a coarse Yangtze River gravel-and-cobble spawning reach during an autumn migration period.
Scene/backdrop: generalized deep fast-flowing Yangtze channel, muted green-brown water, coarse clean boulders, cobbles and gravel with dark interstitial spaces, suspended sediment and filtered surface light, no recognizable landmark.
Subjects/action: exactly two complete adult Chinese sturgeons total, separated by clear open water and both facing upstream. One larger fish swims lower over the coarse bed and one slightly smaller fish follows above and behind; do not imply visible sex. Each has one pointed wedge snout, four subtle barbels ahead of a closed ventral mouth, five pale longitudinal scute rows, gray-brown elongated body, rear-set dorsal fin and strongly heterocercal tail. No body overlap or contact.
Style/medium: original photorealistic professional freshwater wildlife documentary photography, restrained natural-history publication quality.
Composition/framing: exact horizontal 3:2 medium-wide environmental frame, both fish complete and distinct inside generous margins, rocky bed and current readable around them.
Lighting/mood: cool diffuse autumn river light, purposeful upstream movement without spectacle.
Constraints: exactly two sturgeons and no other animals or people; no visible eggs, milt, mating contact, nest, tag, dam, net, boat, text, logo, signature, border or watermark. The scene represents a migration assembly; one frame cannot establish sex, spawning, kinship, abundance or a real occurrence.
Avoid: school of fish, third sturgeon, fused bodies, duplicate heads or tails, combat, courtship embrace, exposed eggs, salmon nest, shallow clear mountain creek, aquarium, hydropower structure, disaster scene, CGI, illustration, fantasy or oversaturation.
```

### 06 · eDNA water monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Chinese Sturgeon non-invasive monitoring gallery image 6 of 6, exact 1536 x 1024 horizontal 3:2
Primary request: Create a brand-new original scientifically plausible field-documentary photograph of exactly two aquatic ecologists collecting a surface-water sample for Chinese Sturgeon environmental-DNA monitoring on a broad generalized lower Yangtze River channel.
Scene/backdrop: wide turbid river under soft overcast daylight, low wooded and reed-lined distant banks with no identifiable skyline or landmark, calm work zone away from commercial traffic.
People and equipment: exactly two adult ecologists in plain muted gray-green life jackets aboard one small low unbranded aluminum research skiff. One kneels at the side and lowers exactly one clean long-handled water-sampling bottle just beneath the surface while wearing plain gloves. The second remains seated and caps one small sample bottle beside a compact closed cooler and one clipboard with no readable writing. Their hands and equipment remain coherent.
Animal: no fish or other animal visible anywhere.
Style/medium: original photorealistic professional conservation fieldwork photography, credible scale and equipment, restrained documentary color without advertising polish.
Composition/framing: exact horizontal 3:2 wide environmental frame; boat and both researchers occupy the center-right third while open river and distant bank dominate.
Lighting/mood: soft neutral overcast daylight, careful routine sampling, calm river atmosphere.
Constraints: exactly two people, one boat, one sampling bottle on a pole, one small capped bottle, one closed cooler and one clipboard; no additional person, animal, drone, net, electrofisher, hook, trap, fish handling, release ceremony, readable text, brand, badge, coordinate, logo, signature, border or watermark. One water sample cannot prove species presence, abundance or trend.
Avoid: scientist holding a sturgeon, captive fish, aquarium, fish tank, blood draw, surgery, tagging, large laboratory vessel, cargo ship, dam, polluted-disaster spectacle, crowds, staged team portrait, NGO advertising, CGI, illustration or oversaturation.
```

## Static validation

- All six compressed source files decode as opaque 1536 × 1024 PNG files.
- All six runtime files decode as opaque 1536 × 1024 single-frame VP8 WebP files.
- Source and runtime basenames form six one-to-one pairs.
- Runtime files use `cwebp -q 82 -m 6 -mt` after scoped TinyPNG source compression.
- Original-resolution static inspection found one cover fish with left-side open water; one close morphology view; one distant fish in a habitat-dominant river; one juvenile near benthic prey cues; exactly two separated adults over coarse substrate; and exactly two researchers collecting water with no fish visible.
- Static inspection found no readable text, logo, watermark, aquarium cue, fish handling, exposed eggs, fishing gear or exact-location marker.
- Verification used no GUI or headless browser.
