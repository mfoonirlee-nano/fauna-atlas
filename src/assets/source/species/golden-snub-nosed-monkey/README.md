# Golden snub-nosed monkey image set

Codex's built-in image generation tool created these six original project images on 2026-08-25 for the complete Fauna Atlas *Rhinopithecus roxellana* profile. They reconstruct species-level morphology, mountain forest, feeding, social organization and non-invasive monitoring. They do not document named animals, subspecies, sites, social relationships or surveys.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/golden-snub-nosed-monkey/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/golden-snub-nosed-monkey/*.png` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-snowy-forest-portrait-source.png` | `01-snowy-forest-portrait.webp` | One complete adult male stands on the right of a snow-dusted mountain forest, with the whole non-prehensile tail inside frame |
| 02 | `02-adult-male-morphology-source.png` | `02-adult-male-morphology.webp` | One complete adult male walks on a broad branch in side view, showing four separate limbs, dark crown and back, golden mantle and a complete long tail |
| 03 | `03-montane-forest-habitat-source.png` | `03-montane-forest-habitat.webp` | One small complete monkey sits in the middle-right canopy while continuous snow-dusted mixed montane forest occupies more than 90 percent of the frame |
| 04 | `04-winter-lichen-foraging-source.png` | `04-winter-lichen-foraging.webp` | One complete monkey brings gray-green foliose lichen from a branch to its mouth in a late-winter forest |
| 05 | `05-one-male-unit-source.png` | `05-one-male-unit.webp` | Exactly one larger adult male, two adult females and one juvenile remain separate on different branches, with four complete tails |
| 06 | `06-noninvasive-visual-monitoring-source.png` | `06-noninvasive-visual-monitoring.webp` | Exactly two observers use one pair of binoculars and one clipboard while one separated long-tailed monkey remains high in the canopy |

Image 06 replaced an initial draft in which the distant animal and its tail were too small to read. The accepted regeneration enlarges the monkey without turning the monitoring scene into a close portrait.

## Evidence boundaries

- The broad flat upturned nose, pale blue to muted violet eye skin, pale muzzle, dark crown and upper back, golden-orange coat, dark hands and feet, and long non-prehensile tail anchor the reconstructions to *R. roxellana*. Appearance alone cannot establish a subspecies, locality or wild provenance.
- Image 01 shows an adult-male reconstruction in seasonal snow. It does not establish age, sex, elevation, temperature or a field occurrence by itself.
- Image 02 emphasizes adult-male morphology. Coat length and body proportions vary among individuals, sexes, ages and seasons; the generated subject is not a measurement specimen.
- Image 03 shows one coherent mixed mountain forest. It cannot represent the full vegetation or elevation breadth of the Sichuan–Gansu, Qinling and Shennongjia populations.
- Image 04 supports visible contact with lichen. It does not measure intake or make lichen the exclusive year-round food.
- Image 05 reconstructs one one-male, multi-female unit. A still image cannot establish sex, age, parentage, mating relationships, group size or the higher levels of the society.
- Image 06 reconstructs remote visual observation. It does not represent a named project, confirmed detection, abundance estimate, population trend or safe public location.

## Shared morphology anchor

The monkey-focused prompts repeated these constraints:

```text
Depict Rhinopithecus roxellana with a broad flat extremely short upturned nose and forward-facing nostrils; pale blue to muted violet bare skin confined around the eyes; a broad pale sparsely haired muzzle; a dark brown crown and upper back; warm yellow-red to golden-orange body fur; darker outer limbs, hands, feet and tail; a pale underside; natural primate hands and feet; and one complete long non-prehensile tail about as long as or longer than the head and body. Adult males may have a longer golden shoulder-and-back mantle than females. Avoid a macaque red face, baboon muzzle, proboscis-monkey nose, orangutan or gibbon proportions, a lemur tail, a prehensile curled tail, a short tail, a blue whole face, fluorescent color, an all-gold coat without a dark crown and back, a lion mane, malformed limbs or digits, text, logos and watermarks.
```

The prompts stay at species level. Mammal Diversity Database treats the named Qinling and Hubei forms as synonyms, while other taxonomic treatments still recognize subspecies; a generated coat cannot resolve that disagreement.

## Final prompts

### 01 · Snowy forest portrait

```text
Use case: photorealistic-natural
Asset type: wildlife species archive source photograph
Primary request: Create a brand-new original wildlife photograph of exactly one adult male Sichuan golden snub-nosed monkey (Rhinopithecus roxellana) at the edge of a montane forest in central China just after snowfall.
Scene/backdrop: A continuous natural mixed coniferous and deciduous broadleaf mountain forest after snow, with snow resting unevenly on branches, bark, rocks, and leaf litter. Quiet undisturbed woodland fills the left side as usable environmental negative space. No zoo setting.
Subject: Exactly one complete adult male golden snub-nosed monkey. Show the scientifically characteristic broad, flat, upturned nose with forward-facing nostrils; pale blue to subtle violet bare skin only around the eyes; a pale, sparsely haired broad muzzle; a dark brown crown and upper back; long golden-orange mantle hair along shoulders and flanks; dark outer limbs; yellowish-white underside. Show a natural adult-male build. Show the entire non-prehensile tail from base to tip, approximately equal to or longer than head-and-body length, hanging or extending in a loose natural line without curling around anything. All four limbs, both hands, both feet, all digits, and the tail tip are visible and anatomically coherent.
Style/medium: photorealistic-natural documentary wildlife photography; real fur fibers, skin pores, bark grain, snow crystals, subdued natural color, no illustration or CGI polish.
Composition/framing: Landscape 3:2, target 1536×1024. Full animal in frame on the right third at medium environmental distance; nothing cropped; reserve the left half primarily for calm forest. Eye-level telephoto wildlife perspective with enough depth of field to keep the complete monkey readable.
Lighting/mood: soft overcast winter daylight, quiet and observational, realistic cool forest light balanced by natural gold-orange fur.
Text: none.
Constraints: exactly one animal; fully visible adult male; correct species anatomy and coloration; complete non-prehensile long tail; no cropped hands, feet, digits, limbs, or tail; original image; no text, letters, captions, borders, logos, signatures, or watermarks.
Avoid: any additional animal or reflected animal; macaque red face; baboon-like long muzzle; proboscis-monkey drooping nose; orangutan, gibbon, lemur, lion, or lion-mane traits; prehensile or tightly curled gripping tail; short tail; whole blue face; fluorescent blue; all-gold body without dark crown and upper back; exaggerated mane; bare chest; albinism; zoo, enclosure, fence, cage, people, clothing, collar, feeding platform; malformed, duplicated, fused, missing, or extra limbs, hands, feet, fingers, toes, or tail; cropped anatomy; illustration, painting, composite collage, 3D render, or CGI.
```

### 02 · Adult-male morphology

```text
Use case: photorealistic-natural
Asset type: wildlife species archive morphology source photograph
Primary request: Create a brand-new original morphology-focused wildlife photograph of exactly one complete adult male Sichuan golden snub-nosed monkey (Rhinopithecus roxellana), paused while walking on all fours along one broad rough tree branch in a montane forest.
Scene/backdrop: A real coarse-barked, near-horizontal tree branch within a central Chinese mountain forest; soft unobtrusive green-gray forest canopy bokeh. No enclosure or human-made elements.
Subject: Exactly one adult male in a roughly two-thirds side profile. Use a natural quadrupedal paused gait that visibly separates all four limbs: both forelegs and both hind legs must be individually traceable from shoulder or hip to wrist or ankle, with two distinct hands and two distinct feet contacting four different visible points on top of the branch. No limb or hand or foot may hide behind the torso, another limb, foliage, or the branch. Preserve realistic primate proportions and anatomically coherent digits. Show the species-accurate broad flat upturned nose with forward-facing nostrils, pale blue to muted violet bare skin limited to the eye region, pale sparsely haired broad muzzle, dark brown crown and upper back, golden-orange long adult-male mantle hair over shoulders and back, dark outer limbs, and yellowish-white underside. Optional only if naturally visible: tiny subtle pink nodules at the mouth corners, never exaggerated. Show the complete non-prehensile tail continuously from base to tip, approximately equal to or longer than head-and-body length, trailing in a loose shallow curve behind the monkey without gripping, looping, or crossing behind its body.
Style/medium: photorealistic-natural documentary wildlife photography; real fur strands and skin texture, rough bark detail, natural optics, no illustration or CGI finish.
Composition/framing: Landscape 3:2, target 1536×1024. Medium-wide branch-height view. The complete animal, all four separated limbs, both hands, both feet, and complete tail fit inside the frame with clear margin around every extremity. Soft canopy background.
Lighting/mood: soft diffused forest daylight, neutral documentary color, calm attentive animal.
Text: none.
Constraints: exactly one animal; complete adult male; clearly visible separated four limbs, two hands, two feet, coherent digits, and complete long non-prehensile tail; correct species markings; original image; no text, letters, captions, borders, logos, signatures, or watermarks.
Avoid: sitting or tucked-limb pose; any hidden, overlapping, cropped, malformed, duplicated, fused, missing, or extra limb, hand, foot, finger, toe, or tail; extra animal, infant, reflection, or partial animal; macaque red face; baboon-like long muzzle; proboscis-monkey drooping nose; orangutan, gibbon, lemur, lion, or lion-mane traits; prehensile, gripping, looped, or tightly curled tail; short tail; whole blue face; fluorescent blue; all-gold body without dark crown and upper back; exaggerated mane; exaggerated mouth growths; bare chest; albinism; zoo, enclosure, fence, cage, people, clothing, collar, feeding platform; illustration, painting, composite collage, 3D render, or CGI.
```

### 03 · Montane forest habitat

```text
Use case: photorealistic-natural
Asset type: wildlife species archive habitat source photograph
Primary request: Create a brand-new original habitat-dominant wildlife photograph showing the continuous native montane habitat of the Sichuan golden snub-nosed monkey in central China, with exactly one small but complete and identifiable golden snub-nosed monkey in the mid-right canopy.
Scene/backdrop: A single continuous medium- to high-elevation mountain forest stretching through foreground, middle ground, and distant slopes. Transition naturally from deciduous broadleaf woodland into mixed coniferous-broadleaf forest. Dense real trees, layered canopy, trunks, understory, steep forested terrain, cool mountain haze, and scattered seasonal snow resting only in irregular patches on shaded branches, roots, rocks, and small glimpses of forest floor. This is one coherent forest ecosystem, not a collage and not an open snowfield.
Subject: Exactly one Sichuan golden snub-nosed monkey (Rhinopithecus roxellana), perched naturally on a branch in the mid-right tree canopy. The monkey occupies only about 4–6% of the image area, while remaining complete and optically clear enough to identify. Show the full body, all four limbs, both hands and feet, and the complete long non-prehensile tail from base to tip. Visible species cues at this scale: dark crown and upper back, golden-orange mantle and flanks, pale underside, dark outer limbs, broad pale muzzle, and muted pale-blue eye area. The tail extends loosely and does not wrap around a branch.
Style/medium: photorealistic-natural documentary habitat photography, authentic forest texture and atmospheric depth, fine bark, needles, leaves, snow patches, restrained realistic color; no illustration or CGI.
Composition/framing: Landscape 3:2, target 1536×1024. Wide establishing view. Habitat must occupy at least 90% of the frame. Place the lone small monkey in the middle-right canopy, not on the edge, with its entire silhouette and tail separated enough from nearby branches to read clearly. Forest continuity and elevational layering are the main subject.
Lighting/mood: soft cold-season daylight filtered through mountain haze; quiet, remote, ecologically plausible.
Text: none.
Constraints: exactly one animal; habitat at least 90% of image area; one continuous medium/high-elevation deciduous broadleaf to coniferous-broadleaf mixed forest; only patchy seasonal snow; complete identifiable monkey at small scale; complete long non-prehensile tail; original image; no text, letters, captions, borders, logos, signatures, or watermarks.
Avoid: any second animal, distant animal shape, flock, reflection, or partial monkey; large foreground portrait; animal occupying more than 8% of the frame; snowfield, tundra, open alpine meadow, or separate snowy scene pasted into forest; visual collage, split scene, panorama seam; macaque red face; baboon-like long muzzle; proboscis-monkey drooping nose; orangutan, gibbon, lemur, lion, or lion-mane traits; prehensile or tightly curled gripping tail; short tail; whole blue face; fluorescent blue; all-gold body without dark crown and upper back; exaggerated mane; bare chest; albinism; zoo, enclosure, fence, cage, people, roads, buildings, clothing, collar; malformed, duplicated, fused, missing, or extra limbs, hands, feet, digits, or tail; cropped animal anatomy; illustration, painting, matte painting, composite, 3D render, or CGI.
```

### 04 · Winter lichen foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Snub-nosed Monkey feeding-behavior gallery image 4 of 6, exact horizontal 3:2 website asset, target 1536 x 1024
Primary request: Create a brand-new original scientifically restrained natural-history photograph of exactly one complete wild golden snub-nosed monkey (Rhinopithecus roxellana) feeding on naturally growing lichen from a tree branch in late winter.
Scene/backdrop: generalized cold temperate montane mixed broadleaf-conifer forest in central China, rough trunks and branches with muted gray-green foliose lichen, small patches of old snow, soft layered woodland depth; no identifiable reserve, landmark, road, building or human trace.
Subject/action: exactly one healthy adult monkey crouches naturally on a thick branch and uses one hand to bring a small piece of gray-green foliose lichen from the branch toward its mouth. Keep the whole coherent animal visible: broad flat extremely short upturned nose with forward-facing nostrils, pale blue to muted violet bare skin confined around the eyes, broad pale sparsely haired muzzle, dark brown crown and upper back, warm yellow-red to golden-orange body fur, darker outer limbs ending before dark hands and feet, pale yellow-white underside, five natural digits on each visible hand and foot, and one complete very long non-prehensile tail about as long as or longer than the head and body. Let the tail extend loosely along and below the branch without curling around it. Mouth action remains subtle; no exposed large teeth.
Style/medium: original photorealistic professional wildlife behavior photography, restrained museum-publication color, real fur, bark, lichen and snow texture, natural depth of field.
Composition/framing: horizontal 3:2 medium-wide at canopy height; whole monkey, all limbs, hands, feet and full tail safely inside generous margins; feeding contact clearly readable near center.
Lighting/mood: diffuse cold late-winter daylight under canopy, quiet and observational, no fantasy glow.
Constraints: exactly one monkey and no other animal; lichen is a visible seasonal food item, not an implied year-round exclusive diet; no text, labels, logo, signature, border or watermark; generic reconstruction, not a named individual, subspecies or occurrence record.
Avoid: bright green moss presented as lichen, a lichen pile, fruit, human food, macaque red face, baboon long muzzle, proboscis monkey drooping nose, orangutan body, gibbon proportions, ring-tailed lemur, prehensile curled tail, short or missing tail, blue whole face, fluorescent blue skin, all-gold body without dark crown and back, exaggerated lion mane, bare chest, albino coat, zoo, fence, platform, feeding station, person, clothing, collar, duplicated limbs or digits, fused hands, malformed face, extra tail, cropped anatomy, CGI, illustration, painting, oversaturation or stock-photo gloss.
```

### 05 · One-male unit

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Snub-nosed Monkey social-organization gallery image 5 of 6, exact horizontal 3:2 website asset, target 1536 x 1024
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly four complete wild golden snub-nosed monkeys (Rhinopithecus roxellana) sharing a cluster of sturdy branches: exactly one adult male, exactly two adult females, and exactly one juvenile, representing one one-male multi-female unit without claiming biological parentage.
Scene/backdrop: generalized temperate montane mixed forest in central China during early autumn, mature deciduous trees mixed with conifers, muted green and amber canopy, no identifiable reserve, landmark or human trace.
Subjects/action: exactly four monkeys total, each with a distinct complete silhouette and open space between bodies. One larger adult male sits alert on the upper-left branch, with a dark brown crown and upper back, vivid but natural golden-orange shoulder and back cape, yellow-white underside, pale blue-violet eye skin, broad flat upturned nose, broad pale muzzle, dark hands and feet, and one complete long non-prehensile tail. Two smaller adult females occupy separate middle branches, with grayer brown upper bodies, warm gold on head, neck and chest, subtler coat, no mouth-corner tubercles, and one full long non-prehensile tail each. One clearly smaller mobile juvenile sits on a lower branch, with age-appropriate pale warm fur and one full long tail. All have anatomically coherent bodies, four limbs and natural hands and feet. They look calmly attentive in ordinary social proximity, with no human-like posing, embrace, nursing or aggression.
Style/medium: original photorealistic professional natural-history photography, restrained scientific-publication color, realistic fur, bark and forest depth.
Composition/framing: horizontal 3:2 medium-wide canopy frame; arrange all four animals at different heights while keeping all four heads, bodies, limbs and four complete tail tips inside generous margins; no overlaps, hidden figures or fused anatomy.
Lighting/mood: soft filtered autumn morning light, calm and watchful, natural shadows.
Constraints: exactly four monkeys: one adult male, two adult females, one juvenile; no fifth monkey, distant silhouette or other animal; scene illustrates one social unit only and does not prove kinship, mating, group size or the full multilevel society; no text, labels, logo, signature, border or watermark; generic species-level reconstruction.
Avoid: identical cloned faces or poses, a row of posed pets, touching or merged bodies, macaque red faces, baboon muzzle, proboscis monkey nose, orangutan, gibbon, lemur, prehensile curled tails, short tails, missing tail tips, blue whole faces, fluorescent blue, all-gold coats without dark crowns and backs, oversized lion manes, bare chests, albino fur, zoo, fence, feeding platform, provisioning, person, collar, clothing, exposed genitals, mating, fighting, infant nursing, duplicated limbs, extra heads, malformed digits, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 06 · Non-invasive visual monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Golden Snub-nosed Monkey non-invasive monitoring gallery image 6 of 6, exact horizontal 3:2 website asset, target 1536 x 1024
Primary request: Regenerate the field-monitoring scene so the single distant monkey is larger and its entire long tail is unmistakably visible against a clean background, while retaining non-invasive visual observation.
Scene/backdrop: generalized cold temperate mixed broadleaf-conifer forest on a central Chinese mountain slope after a light snowfall; create an open patch of pale snowy foliage behind the animal so its silhouette reads clearly; no named reserve, landmark, road, building or coordinates.
People and equipment: exactly two adult wildlife ecologists together in the lower-left, fully inside frame, in plain muted winter field clothing without brands. One uses exactly one pair of binoculars; the other holds exactly one plain clipboard with no readable writing. No other equipment and no contact with wildlife.
Animal: exactly one golden snub-nosed monkey on a high sturdy branch in the upper-right, occupying about 12 to 15 percent of image width, large enough to recognize but far from the observers. Show the complete side-profile animal with warm golden-orange body, dark brown crown and upper back, pale skin around the eyes, broad flat extremely short upturned nose, dark hands and feet, and one complete very long non-prehensile tail hanging straight and freely below the branch. The tail must be clearly separated from branches and visible from base through its tip, about as long as the head and body. Keep every limb and tail tip inside frame.
Style/medium: original photorealistic professional conservation field photography, credible scale and perspective, restrained documentary color.
Composition/framing: horizontal 3:2 wide environmental view; observers grouped lower-left, one clearly readable but separated monkey upper-right against pale uncluttered snow-dusted foliage, forest remains dominant.
Lighting/mood: soft overcast winter morning, neutral patient observation.
Constraints: exactly two people, one binocular, one clipboard and exactly one monkey; no other humans, animals, silhouettes or equipment; non-invasive observation only; no readable text, logo, watermark or border; generic reconstruction.
Avoid: tiny unrecognizable animal, hidden or missing tail, tail merging into a branch, prehensile curled tail, short tail, cropped tail tip, second monkey, trapping, cage, net, bait, feeding, dart gun, handling, collar, ear tag, drone, camera trap, vehicle, tourist selfie, zoo, fence, macaque red face, baboon muzzle, proboscis monkey nose, blue whole face, malformed anatomy, CGI, illustration, painting, rescue drama or oversaturation.
```

## Static validation

- All six compressed source files decode as opaque 1536 × 1024, 8-bit sRGB PNG files.
- All six runtime files decode as opaque 1536 × 1024 single-frame lossy VP8 WebP files.
- Source and runtime basenames form six one-to-one pairs.
- The accepted runtime focal points, in frame order, are `(0.72, 0.53)`, `(0.49, 0.51)`, `(0.72, 0.53)`, `(0.40, 0.49)`, `(0.52, 0.50)` and `(0.77, 0.35)`.
- Original-resolution inspection found one cover male; one side-view male; one habitat-dominant forest; one lichen-feeding monkey; exactly four separated group members; and exactly two observers with one distant monkey.
- Static inspection found no readable text, logos, watermarks, zoo cues, collars, handling, traps or provisioning.
- Verification used no GUI or headless browser.
