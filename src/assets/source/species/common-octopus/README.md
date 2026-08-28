# Common Octopus image set

These six original project images were generated with Codex's built-in image generation tool on 2026-08-28 for the complete Fauna Atlas Common Octopus profile. The set covers an adult rocky-reef portrait, chromatophore and papillae camouflage, a rock-crevice den and midden, crab handling with arms and suckers, female egg brooding and ventilation, and a pelagic paralarva.

The images are representative AI natural-history reconstructions. They do not document a named animal, exact locality, measured mantle length, observed camouflage sequence, surveyed den, complete diet, recorded predation event, counted egg clutch, measured ventilation flow, known hatchling age or tracked planktonic route.

- Species: Common Octopus, *Octopus vulgaris* sensu stricto
- Product Chinese name: 普通章鱼
- Search aliases: Common Atlantic Octopus, Common European Octopus
- Generation tool: Codex built-in image generation; frame 06 received one subsequent precise-object edit
- Generation date: 2026-08-28
- Source format: opaque sRGB PNG, 1536 × 1024
- Source compression: TinyPNG was not run because the API returned HTTP 429 for the exhausted monthly quota on 2026-08-28; all six PNGs were instead palette-quantized locally to at most 256 colors with ImageMagick using Riemersma dithering
- Runtime format: opaque sRGB WebP, 1536 × 1024, converted with `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

## Shared morphology and evidence boundary

Adult frames 01–05 show one coherent shell-free, finless *Octopus vulgaris* sensu stricto with a broad muscular mantle, two eyes, exactly eight arms and two rows of suckers on each arm. The funnel opens ventrally between the head and mantle, while the beak remains hidden at the center of the arm crown. Strongly lit eyes use a horizontal slit pupil. The animals have no squid feeding tentacles, external shell, lateral fins, nautilus-like cirri or regular bright-blue rings.

The *Octopus vulgaris* species complex includes look-alike lineages formerly treated as one globally distributed species. Adult settings therefore use generalized Mediterranean or Northeast Atlantic habitat and do not treat imagery from East Asia, the Caribbean, Brazil, South Africa or Australia as evidence for the strict-sense species.

Frame 01 is a generalized shallow Mediterranean rocky-reef portrait, not a named site or den emergence. Frame 02 captures one plausible camouflage state in which mottled chromatophore patterning and raised papillae break up the animal's outline. A still image cannot establish the speed, sequence or neural mechanism of change, nor show pixel-for-pixel background copying.

Frame 03 reconstructs one occupied rock-crevice den with a small shell midden. The remains provide a biased trace of hard-shelled prey rather than a complete diet, permanent nest architecture or communal settlement. Frame 04 shows arm, web and sucker use around one crab without claiming a complete capture sequence, prey-drilling method, venom delivery or feeding duration.

Frame 05 reconstructs one brooding female beneath many small egg strings attached to hard substrate. Generated pixels cannot establish egg number, egg dimensions, incubation length, funnel-flow rate, hatch timing or the female's later fate. It does not depict biparental care or a wild nest at a known locality.

Frame 06 shows one representative early pelagic paralarva with a relatively large translucent mantle and eyes, exactly eight short arms and a few proximal suckers. The image does not establish exact hatch age, sucker count, body size, stage duration, dispersal distance or settlement timing.

## Files and themes

| Frame | Editable source | Runtime asset | Theme |
| --- | --- | --- | --- |
| 01 | `01-rocky-reef-adult-portrait-source.png` | `public/images/species/common-octopus/01-rocky-reef-adult-portrait.webp` | Complete adult on a shallow Mediterranean rocky reef; cover and featured card |
| 02 | `02-chromatophore-papillae-camouflage-source.png` | `public/images/species/common-octopus/02-chromatophore-papillae-camouflage.webp` | Mottled chromatophore pattern and raised skin papillae |
| 03 | `03-rock-crevice-den-and-midden-source.png` | `public/images/species/common-octopus/03-rock-crevice-den-and-midden.webp` | Solitary adult in a rock-crevice den with hard-prey remains |
| 04 | `04-crab-capture-and-sucker-use-source.png` | `public/images/species/common-octopus/04-crab-capture-and-sucker-use.webp` | Arms, web and double-row suckers controlling one crab |
| 05 | `05-female-egg-brooding-and-ventilation-source.png` | `public/images/species/common-octopus/05-female-egg-brooding-and-ventilation.webp` | Solitary female tending attached strings of small eggs |
| 06 | `06-pelagic-paralarva-source.png` | `public/images/species/common-octopus/06-pelagic-paralarva.webp` | Early pelagic paralarva with eight short arms |

## Final prompts

### 01 · Adult on a shallow rocky reef

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Octopus species-detail cover and featured editorial card, exact 3:2 horizontal landscape, original project asset
Primary request: a scientifically grounded natural-history portrait of exactly one complete adult Common Octopus, Octopus vulgaris sensu stricto, resting fully exposed on a shallow Mediterranean rocky reef
Scene/backdrop: generalized Mediterranean coastal water over weathered limestone reef, pale sand pockets, sparse low algae and clear blue open water; natural shallow depth but no named locality, landmark, aquarium or den entrance
Subject: exactly one coherent adult Octopus vulgaris in a low three-quarter view; broad oval muscular mantle without shell or fins; two correctly positioned eyes with horizontal slit pupils; exactly eight flexible muscular arms spreading naturally from one arm crown; two parallel rows of round suckers along every arm; a correctly placed pale funnel opening ventrally between head and mantle; beak hidden at the arm-crown center; natural mottled brown, ochre, gray and cream chromatophore pattern with restrained low papillae
Style/medium: photorealistic underwater wildlife documentary photography, museum-publication accuracy, natural field reconstruction, physically plausible Mediterranean optics
Composition/framing: exact 1536 by 1024 horizontal 3:2 frame; place the complete animal across the right half facing left; keep the entire mantle, all eight arms and every visible arm tip inside frame; preserve broad quiet blue-water and reef negative space on the left for interface copy
Lighting/mood: clear diffuse shallow-water daylight with restrained natural caustics, calm and observational rather than theatrical
Color palette: Mediterranean blue, limestone cream, algae olive, sand gray, muted brown and ochre
Materials/textures: soft muscular skin, fine chromatophore mottling, subtle papillae, wet suckers, weathered rock and suspended marine particles
Constraints: exactly one complete adult; exactly eight arms, each with two sucker rows; one connected mantle and head; horizontal slit pupils; funnel remains ventral; no text, label, arrow, scale bar, logo, watermark, border, people, fishing gear, prey or fantasy element; opaque sRGB
Avoid: den-emergence pose, nine or more arms, six arms plus two squid tentacles, tentacle clubs, single-row suckers, duplicated or fused arms, shell, side fins, nautilus cirri, bright blue rings, external birdlike beak, vertebrate mouth, cropped anatomy, neon colors, CGI gloss or illustration
```

### 02 · Chromatophores, papillae and camouflage

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Octopus camouflage gallery image 2 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a scientifically cautious close natural-history portrait of exactly one adult Octopus vulgaris sensu stricto matching the broken texture of a Mediterranean limestone reef through mottled chromatophore patterning and raised skin papillae
Scene/backdrop: generalized shallow Mediterranean rock ledge with beige limestone, muted brown algae, small shadowed crevices and clear water; no named site or artificial tank
Subject: one coherent shell-free adult pressed low against the substrate; broad oval mantle, two correctly placed eyes with horizontal slit pupils, exactly eight arms and two rows of round suckers per arm; skin shows irregular cream, ochre, brown and gray patches, branching light marks and locally raised soft papillae that disrupt the outline without becoming scales or spines; correctly placed ventral funnel remains visible; beak stays hidden
Style/medium: photorealistic scientific underwater macro photography, restrained wildlife-documentary detail, accurate soft-tissue texture
Composition/framing: exact 1536 by 1024 horizontal frame; use a close three-quarter view with the animal centered slightly right; keep the whole mantle, both eyes, all eight arm origins and principal arm tips readable; retain enough adjacent reef to compare pattern and texture
Lighting/mood: soft diffuse daylight with gentle side relief across papillae, neutral and observational
Color palette: limestone beige, olive brown, warm gray, cream and subdued rust against muted blue-green water
Materials/textures: living flexible skin, granular chromatophore pattern, soft erectile papillae, smooth suckers, rough algae-coated rock
Constraints: one static plausible camouflage state only; exactly eight arms with paired sucker rows; no claim of pixel-for-pixel background copying or measured change speed; no text, split-screen, before-and-after panel, arrows, glow, scale bar, logo, watermark, border or people; opaque sRGB
Avoid: rainbow gradient, neon fluorescence, regular blue rings, reptile scales, coral polyps growing from skin, transparent color-changing film, shell, fins, cirri, squid tentacle clubs, extra arms, fused limbs, mammalian expression, CGI or illustration
```

### 03 · Rock-crevice den and shell midden

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Octopus den ecology gallery image 3 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a scientifically bounded natural-history reconstruction of exactly one adult Octopus vulgaris sensu stricto resting inside a shallow rock-crevice den with a modest midden of hard prey remains outside
Scene/backdrop: generalized Mediterranean shallow seafloor where an algae-darkened limestone slab forms one natural crevice above mixed sand, gravel and shell grit; a small irregular scatter of opened bivalve shells, gastropod shells and one crab carapace lies near the entrance; no named locality
Subject: exactly one coherent adult partly sheltered but clearly connected inside the crevice; broad mantle and both eyes remain visible, horizontal slit pupils, exactly eight arms extending naturally from one arm crown, two rows of suckers on each arm, mottled sand-brown skin, ventral funnel in the correct position and hidden central beak
Style/medium: photorealistic underwater wildlife documentary photography, cautious museum natural-history reconstruction, realistic field detail
Composition/framing: exact 1536 by 1024 horizontal frame; den entrance occupies the upper center and the complete visible animal stays crop-safe; shell remains form an irregular foreground trace without dominating the image; retain surrounding soft bottom and rock context
Lighting/mood: subdued diffuse coastal light entering the crevice, quiet daytime refuge, no dramatic spotlight
Color palette: sand gray, shell cream, weathered brown, muted ochre, algae olive and deep crevice charcoal
Materials/textures: soft mottled octopus skin, smooth suckers, porous limestone, worn shells, granular sediment and fine suspended particles
Constraints: exactly one adult octopus; one plausible refuge; only a modest quantity of hard remains; midden is contextual evidence rather than a complete diet inventory; no text, labels, grid, scale bar, logo, watermark, border, people, fishing debris or aquarium; opaque sRGB
Avoid: communal octopus settlement, second adult, symmetrical garden, curated shell collection, enormous bone pile, human trash display, complete prey census, external beak, blood, extra arms, squid tentacles, shell on the octopus, bright blue rings, CGI gloss or illustration
```

### 04 · Crab capture with arms and suckers

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Octopus feeding ecology gallery image 4 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a scientifically grounded underwater action portrait of exactly one adult Octopus vulgaris sensu stricto controlling one medium-small shore crab with its arms, interbrachial web and suckers on a Mediterranean rocky seafloor
Scene/backdrop: generalized dim shallow Mediterranean reef base with low limestone ledges, coarse sand and sparse algae; no named location, bait station or fishing gear
Subject/action: one coherent shell-free adult spreads its web and exactly eight arms over and around one realistically scaled intact crab; paired rows of round suckers contact the substrate and prey; the broad muscular mantle, two eyes with horizontal slit pupils and correctly placed ventral funnel remain visible; the central beak stays concealed inside the arm crown; posture shows controlled handling rather than vertebrate-style biting
Style/medium: photorealistic natural-history wildlife photography, restrained scientific editorial reconstruction, anatomically coherent action
Composition/framing: exact 1536 by 1024 horizontal frame; animal fills the central crop-safe area, crab visible below the web near center; keep the mantle, eyes, eight arm origins, principal arm tips and entire crab inside frame; retain enough reef context to read a benthic event
Lighting/mood: soft low-angle blue-green coastal light with natural shadow beneath the web, tense but not sensational
Color palette: muted rust brown, cream suckers, charcoal rock, sand gray and deep blue-green
Materials/textures: flexible muscular arms, thin web membrane, wet round suckers, hard crab carapace, rough limestone and sediment
Constraints: exactly one octopus and one crab; exactly eight arms with two sucker rows each; beak hidden; no visible wound, blood, prolonged-sequence claim, venom graphic or drilled shell; no text, label, arrow, logo, watermark, border, diver, trap or bait; opaque sRGB
Avoid: exposed teeth, external bird beak, fangs, stinger, harpoon tongue, gore, crab many times larger than the octopus, extra prey, extra arms, squid clubs, shell, fins, blue rings, monster attack, CGI gloss or illustration
```

### 05 · Female brooding and ventilating egg strings

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Octopus reproduction gallery image 5 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a scientifically cautious reconstruction of exactly one female Octopus vulgaris sensu stricto alone in a Mediterranean rock den, brooding many strings of small attached eggs and directing clean water toward them with her funnel
Scene/backdrop: dim generalized Mediterranean limestone crevice with a broad hard ceiling; many dense ivory strings of tiny rice-grain-scale eggs hang downward from attached bases; coarse sand and small stones cover the floor; no named wild nest or aquarium equipment
Subject/action: one coherent adult female rests beneath the clutch; broad muscular mantle, two eyes with horizontal slit pupils, exactly eight arms with two rows of suckers each and one ventral funnel between head and mantle; one arm reaches near the hanging strings while the funnel opening is visible in a plausible ventilation posture; beak remains hidden and no second adult is present
Style/medium: photorealistic low-light natural-history documentary reconstruction, restrained museum-publication accuracy, realistic underwater macro detail
Composition/framing: exact 1536 by 1024 horizontal frame; egg strings span the upper third and female occupies the lower center; keep the complete clutch context, mantle, both eyes, eight arm origins and principal tips in frame; retain dark refuge around them
Lighting/mood: low diffuse crevice light with a soft cool highlight on the eggs, quiet sustained-care atmosphere rather than a spawning spectacle
Color palette: limestone charcoal, muted rust and brown skin, pearl ivory eggs, sand gray and restrained blue-black
Materials/textures: flexible wet skin, smooth suckers, soft translucent egg capsules, rough rock and granular sediment
Constraints: exactly one brooding female; many small strings attached to hard substrate; single-parent care; depict one plausible ventilation moment without visible current arrows or a measured flow claim; no text, labels, scale bar, logo, watermark, border, diver, tank glass or instruments; opaque sRGB
Avoid: grape-sized eggs, a handful of large eggs, loose floating eggs, fish roe cloud, male helper, multiple adults, hatchlings surrounding the mother, bright open-water laying ceremony, external beak, extra arms, shell, fins, blue rings, fantasy glow, CGI or illustration
```

### 06 · Early pelagic paralarva

The final source uses the base generation prompt followed by one precise-object edit. The edit preserves the composition, translucent mantle, two eyes and chromatophores while correcting the arm and sucker arrangement.

#### Base generation prompt

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Common Octopus early-life gallery image 6 of 6, exact 3:2 horizontal landscape and safe for a centered 16:9 crop, original project asset
Primary request: a scientifically cautious underwater macro portrait of exactly one newly hatched pelagic Octopus vulgaris sensu stricto paralarva suspended in open Northeast Atlantic or Mediterranean water
Scene/backdrop: clean deep blue open coastal water with sparse natural marine snow and no visible seafloor, surface, aquarium wall or named locality
Subject: exactly one coherent tiny hatchling with a relatively large oval translucent mantle, two prominent correctly positioned eyes, faint internal mantle detail, scattered brown-orange chromatophores and exactly eight short arms; each arm carries exactly three small round suckers in one proximal single row and has a smooth distal tip; no long adult arm proportions; ventral funnel remains anatomically connected beneath the head and the minute beak stays hidden at the arm-crown center
Style/medium: photorealistic scientific plankton macro photography, restrained museum natural-history reconstruction, delicate living translucency rather than glass or CGI
Composition/framing: exact 1536 by 1024 horizontal frame; place the complete paralarva slightly right of center in a gentle three-quarter swimming orientation; keep the entire mantle, both eyes, all eight arms and every arm tip inside frame; preserve broad dark-blue negative space to the left
Lighting/mood: soft cool transmitted light with subtle side illumination, calm pelagic observation, no fantasy glow
Color palette: transparent pearl gray, restrained amber-brown chromatophores, deep Atlantic blue and soft silver highlights
Materials/textures: living translucent mantle tissue, minute chromatophore dots, moist eye surface, soft arms and tiny smooth suckers
Constraints: exactly one paralarva; exactly eight short arms; exactly three proximal suckers in a single row on each arm; smooth arm tips beyond the third sucker; no contact with bottom; image represents morphology and habitat context only, not exact age, size, duration or route; no text, arrow, scale bar, logo, watermark, border, net, jar, pipette or laboratory equipment; opaque sRGB output
Avoid: long-arm miniature adult, two feeding tentacles, more or fewer than eight arms, paired adult sucker rows, more than three suckers per arm, suckers continuing to arm tips, fish tail, external shell, fins, insect larva, school, blue rings, cartoon baby face, glass transparency, fantasy glow, CGI or illustration
```

#### Precise-object edit

```text
Precise object edit only. Keep the existing 1536 by 1024 horizontal composition, dark-blue open-water background, pose, translucent oval mantle, both eyes, internal mantle detail, brown-orange chromatophores, lighting, focus and all negative space unchanged. Edit only the arm crown and suckers. Lock the animal to exactly eight distinct short arms connected naturally around one central mouth. Put exactly three small round suckers on each arm, arranged in one single proximal row close to the mouth. Make every arm tip beyond its third sucker smooth and sucker-free. Keep all eight arm tips separate and visible; do not add, remove, split, fuse or duplicate arms. Do not create a second sucker row, extra hidden suckers, long adult arms, squid feeding tentacles, tentacle clubs, shell, fins, cirri, blue rings, text, labels or diagram marks. Preserve photorealistic living tissue and the original image everywhere else.
```

The edit reduced the sucker count but did not make every visible arm exactly three-suckered. Product metadata therefore treats the subject as an early pelagic paralarva and does not infer exact hatch age or sucker count from the generated pixels.

## Static verification

All 12 files decode successfully as 1536 × 1024 opaque sRGB images. Each six-file set has six distinct SHA-256 hashes. TinyPNG compression was not performed: on 2026-08-28 the API returned HTTP 429 because the monthly quota was exhausted. The six source PNGs were instead palette-quantized locally to at most 256 colors with ImageMagick using Riemersma dithering. The runtime WebPs were then generated from those quantized sources with the repository settings `cwebp -q 82 -m 6 -mt`, without changing orientation, dimensions or crop.
