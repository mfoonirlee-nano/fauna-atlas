# Sea otter image set

Codex's built-in image generation tool created these six original project images on 2026-08-25 for the complete Fauna Atlas *Enhydra lutris* profile. They reconstruct generalized North Pacific surface, kelp-habitat, foraging, maternal-care and shore-survey scenes. They do not document named animals, sites, encounters or surveys.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/sea-otter/*.webp`
- Dimensions: 1536 × 1024
- Source compression: `npm run compress -- src/assets/source/species/sea-otter/*.png` (TinyPNG, in place)
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

| No. | Source file | Runtime file | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-kelp-surface-portrait-source.png` | `01-kelp-surface-portrait.webp` | One complete adult floats on its back in the center-right of a kelp bed, leaving quieter open water on the left |
| 02 | `02-surface-fur-grooming-source.png` | `02-surface-fur-grooming.webp` | One complete adult grooms its chest at the surface; both broad hind feet and the full tail remain readable |
| 03 | `03-rocky-kelp-forest-habitat-source.png` | `03-rocky-kelp-forest-habitat.webp` | One small adult travels through an open-water lane while the rocky kelp mosaic dominates the elevated view |
| 04 | `04-stone-anvil-mussel-foraging-source.png` | `04-stone-anvil-mussel-foraging.webp` | One adult holds exactly one closed mussel above exactly one separate belly stone; both paws, hind feet and tail remain distinct |
| 05 | `05-mother-carrying-pup-source.png` | `05-mother-carrying-pup.webp` | Exactly one dark adult supports exactly one separate pale, fluffy pup above the surface |
| 06 | `06-shore-based-visual-survey-source.png` | `06-shore-based-visual-survey.webp` | Exactly two researchers use one spotting scope and one clipboard from shore; no animal or location clue appears |

## Static verification

The final PNG and WebP pairs passed static and visual inspection on 2026-08-25. All 12 files decode at 1536 × 1024 in sRGB and are opaque. Each source PNG contains one frame; each WebP uses lossy VP8. The accepted runtime focal points, in frame order, are `(0.72, 0.51)`, `(0.40, 0.47)`, `(0.66, 0.50)`, `(0.46, 0.43)`, `(0.43, 0.48)` and `(0.32, 0.67)`.

Two underwater drafts of frame 03 were rejected. The first read too much like a seal because the forepaws and separate short tail disappeared; the second made the rear appendages ambiguous. The accepted regeneration moves the observation above the surface and keeps the animal small inside a habitat-dominant frame.

## Evidence boundaries

- Adult coat color, pale grizzling, broad hind feet, small forepaws and a short stout tail anchor the animals to *Enhydra lutris*. A generated view cannot establish a subspecies, sex, age, mass, locality or individual identity from appearance alone.
- Frame 01 shows a plausible surface-resting pose among sparse kelp. It does not prove deliberate kelp wrapping, rest duration or habitat preference across the full range.
- Frame 02 shows grooming and visible fur texture. Pixels cannot establish hair density, microscopic double-coat structure, trapped-air volume, metabolic rate or insulation performance.
- Frame 03 shows one plausible rocky kelp coast. The small animal does not prove occupancy, density, a sea-otter-driven trophic cascade or the species' complete habitat breadth.
- Frame 04 reconstructs one possible stone-anvil event. Tool use varies among individuals, prey and places; the scene does not measure frequency, intelligence, diet or success.
- Frame 05 reconstructs maternal support at the surface. It cannot establish sex, kinship, exact age, survival or duration of care in a real pair.
- Frame 06 reconstructs shore-based visual monitoring. It is not a named project, disclosed station, actual detection, abundance estimate or trend result.

## Shared morphology anchor

The sea-otter prompts repeatedly distinguished the subject from river otters, seals and beavers:

```text
Depict a wild sea otter (Enhydra lutris) as a robust marine mustelid with a broad rounded head, blunt muzzle, small rounded ears, long pale whiskers, dense natural dark-to-medium brown fur, a face that may be lighter but is not white, small dexterous forepaws, two broad webbed flipper-like hind feet, and one complete short stout tail. Keep the body, forepaws, hind feet and tail anatomically connected and coherent. Do not assign a subspecies or named locality from appearance.
Avoid the long low slender body and long cylindrical tail of a river otter, seal foreflippers, a fused seal hind-flipper fan, a beaver paddle tail, dog anatomy, human hands, extra limbs, fused paws, missing tails, text, logos and watermarks.
```

## Final prompts

### 01 · Kelp-surface portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sea Otter species-detail cover, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically grounded wildlife photograph of exactly one complete adult sea otter (Enhydra lutris) floating calmly on its back at the surface of a generalized North Pacific kelp bed.
Scene/backdrop: cold clear nearshore seawater with a few broad golden-brown kelp blades and round floats lying naturally across the surface, low ocean swell, a softly blurred rocky evergreen coast and cool morning haze in the distance; no identifiable country, reserve, landmark, harbor, vessel or human structure.
Subject: one healthy wild adult sea otter in relaxed left-facing three-quarter supine view. Show a robust elongated mustelid with a dense wet dark chocolate-brown coat, a naturally grizzled pale gray-brown head and throat, small rounded ears close to the head, small dark eyes, a blunt broad whiskered muzzle, two small dexterous forepaws resting separately over the upper chest, two very large flattened flipper-like webbed hind feet with elongated outer toes visible near the surface, and one short broad muscular tail emerging coherently behind the pelvis. Keep the entire coherent animal visible from ears and whiskers through both forepaws, torso, both hind feet and complete tail. The otter is floating naturally rather than posing, waving, holding hands or looking at the camera.
Style/medium: original photorealistic professional natural-history photography, restrained museum-publication color, realistic wet fur, whiskers, seawater and kelp texture, no glossy fantasy polish.
Composition/framing: horizontal 3:2 at water level; place the otter in the center-right safe area facing left, occupying about half the frame, with broad quieter open-water negative space across the left third for responsive interface copy. Keep all anatomy and kelp clear of frame edges.
Lighting/mood: soft overcast dawn light, quiet and buoyant, cool natural shadows with a subtle warm edge on wet fur.
Scientific morphology anchor: Sea Otter Enhydra lutris, not a river otter. Robust marine body; adult head paler than body; tiny forepaws; conspicuously broad flipper-like hind feet; short broad tail; no blubber silhouette and no dorsal fin.
Constraints: exactly one animal total; anatomically correct Enhydra lutris; no food, stone, shellfish, pup or second otter; no text, label, logo, signature, border or watermark; generic editorial reconstruction rather than a named individual or locality record.
Avoid: Eurasian or North American river otter with a long tapered tail, four similar webbed paws or agile shore-running proportions; Asian small-clawed otter; giant otter throat patch; beaver teeth or paddle tail; seal flippers or seal face; dog face; human hands; clasped praying paws; waving; smiling mascot; upright humanlike pose; extra or fused limbs; missing, forked or long tail; cropped anatomy; thick carpet of kelp hiding the body; aquarium, zoo, harbor, kayak, boat, person, collar, tag, CGI, illustration, painting, fantasy glow, oversaturation or stock-photo gloss.
```

### 02 · Surface-fur grooming

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sea Otter adaptation gallery image 2 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly one complete adult sea otter (Enhydra lutris) meticulously grooming the dense fur of its chest and flank while floating at the surface.
Scene/backdrop: a sheltered cold North Pacific cove with calm slate-green seawater, faint ripples and only a few distant blurred kelp floats; no identifiable country, reserve, landmark, shore structure, boat or person.
Subject/action: one healthy wild adult sea otter lies diagonally on its back and left side, head bent naturally toward its upper chest. One small forepaw parts and combs through chest fur while the other small forepaw braces separately against the flank; the action is unmistakably animal grooming, not a human hand gesture. Show a robust elongated marine mustelid with dense dark chocolate-brown wet guard hairs, a slightly paler grizzled gray-brown head and throat, small rounded ears, blunt broad muzzle, long pale whiskers, two small dexterous forepaws, two broad flattened flipper-like webbed hind feet with elongated outer toes, and one complete short stout tail tapering to a rounded point. Keep the entire coherent animal visible, including both forepaws, torso, both hind feet and full tail, with all joints attached naturally.
Style/medium: original photorealistic professional natural-history photography, restrained museum-publication processing, exceptionally realistic wet-to-drying fur texture, whiskers and seawater optics.
Composition/framing: horizontal 3:2 medium environmental portrait from slightly above water level; animal occupies about 62 percent of frame width and remains fully inside the central safe area; the grooming forepaw, chest fur, broad hind feet and short tail are all readable and separated.
Lighting/mood: soft diffuse coastal daylight, private, focused and calm, neutral color balance.
Scientific morphology anchor: Sea Otter Enhydra lutris, not a river otter. Robust marine body; adult face subtly paler than body but not white; tiny forepaws; conspicuously broad flipper-like hind feet; short broad tail. The image shows surface grooming only and cannot reveal microscopic hair density, insulation performance or body-fat thickness.
Constraints: exactly one animal total; no food, stone, prey, pup or second otter; no text, arrows, labels, logo, signature, border or watermark; generic reconstruction.
Avoid: rubbing both paws over the eyes, praying or clasped paws, waving, thumbs-up, smiling mascot, upright seated humanlike pose, human fingers or fingernails, extra or fused paws, duplicated forelimbs, missing hind foot, long tapered river-otter tail, beaver paddle tail, seal flippers or seal face, dry salon-fluffed coat, exposed skin, cropped anatomy, aquarium, zoo, dock, kayak, collar, tag, CGI, illustration, painting, fantasy glow, oversaturation or stock-photo gloss.
```

### 03 · Rocky kelp-forest habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sea Otter habitat gallery image 3 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new habitat-dominant conservation photograph of a generalized cold North Pacific rocky kelp forest used by sea otters (Enhydra lutris), viewed obliquely from a natural high coastal overlook, with exactly one small complete adult sea otter traveling at the surface.
Scene/backdrop: one continuous nearshore mosaic of dark submerged reefs, clear slate-green water, broad golden-brown giant-kelp canopy patches, narrow open-water lanes and a distant low rocky evergreen shoreline softened by mist. Kelp and coastal water fill at least 90 percent of the frame. No identifiable country, reserve, landmark, harbor, trail, building, road, vessel, person or equipment.
Animal: exactly one small but recognizable adult sea otter swims belly-down at the surface from right to left along a clean open-water lane in the middle-right distance. The otter occupies about 8–10 percent of image width. From the elevated three-quarter angle, show one continuous stocky dark-brown furred body, a broad subtly paler round head with blunt whiskered muzzle, small forepaws tucked beneath the front body, two broad flattened webbed hind feet trailing from the pelvis as separate natural limbs, and exactly one short stout tapering tail visible between them. Keep the complete silhouette inside frame and clear of kelp, with no wake spectacle or dive splash.
Style/medium: original photorealistic wide professional coastal natural-history photography, restrained scientific-publication processing, believable water transparency, kelp anatomy, submerged rock scale and atmospheric depth.
Composition/framing: horizontal 3:2 wide establishing view from a believable rocky-coast overlook, not a vertical satellite view; open water and kelp lead diagonally across the frame, one small complete sea otter in the center-right while habitat dominates.
Lighting/mood: quiet overcast morning after mist, muted slate blue, kelp ochre, rock gray and evergreen green; natural exposure.
Scientific morphology anchor: Sea Otter Enhydra lutris, not a river otter. Robust marine body, broad head, small forepaws, conspicuously broad flipper-like hind feet and short broad tail. Do not assign a subspecies or locality from appearance.
Evidence boundary: this reconstructed scene shows one plausible rocky kelp habitat. It does not prove local occupancy, abundance, a direct causal effect on kelp, or the species' complete habitat breadth.
Constraints: exactly one animal total; no second otter, seal, sea lion, whale, bird, fish or person; no text, map, coordinates, logo, signature, border or watermark.
Avoid: underwater side profile, seal-shaped torpedo body, seal foreflippers, fused hind flippers, long cylindrical river-otter tail, four identical webbed paws, beaver paddle tail, oversized foreground animal, close portrait, fully supine back-floating pose, tropical coral reef, warm turquoise lagoon, dense urchin barren, montage, collage, fantasy seaweed, malformed or duplicated limbs, cropped animal, aquarium, zoo, drone shadow, boat, kayak, net, trap, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 04 · Stone-anvil mussel foraging

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sea Otter foraging-behavior gallery image 4 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically restrained wildlife photograph of exactly one adult sea otter (Enhydra lutris) using a single flat stone as an anvil while handling exactly one closed mussel at the sea surface, frozen in the clear moment just before contact.
Scene/backdrop: calm cold nearshore seawater with gentle ripples and a sparse few blurred kelp blades well away from the animal; generalized North Pacific setting with no identifiable coast, reserve, harbor, vessel, person or structure.
Subject/action: one healthy wild adult sea otter floats naturally on its back, viewed from a slightly elevated three-quarter angle. A single separate smooth oval gray stone lies flat and stable on the animal's upper abdomen. Exactly two small separate forepaws hold exactly one intact dark blue-black closed mussel shell together several centimeters above the stone, poised to bring the shell down onto the anvil. Keep stone, mussel, left forepaw and right forepaw visually distinct with open water gaps where appropriate. No shell fragment, opened shell, food flesh, impact splash, blood or injury.
Morphology: robust elongated marine mustelid; dense wet dark chocolate-brown coat; subtly paler grizzled broad head and throat; small rounded ears; blunt broad muzzle and long pale whiskers; two small dexterous forepaws with short natural digits, not human hands; two large flattened webbed flipper-like hind feet with elongated outer toes; exactly one complete short stout tail. Entire animal remains inside frame from head through torso, both hind feet and tail; all four limbs are anatomically attached.
Style/medium: original photorealistic professional natural-history photography, restrained documentary color, realistic fur, shell, stone and seawater texture; no staged aquarium polish.
Composition/framing: horizontal 3:2 medium-wide view from slightly above; otter spans about 62 percent of frame width, centered with generous water margin. The interaction triangle—two forepaws, one mussel, one belly stone—is the clear focal point while full body anatomy remains visible.
Lighting/mood: soft neutral coastal daylight, attentive and observational, no dramatic spotlight.
Scientific evidence boundary: tool use frequency varies among individuals, populations, prey and habitat. This image reconstructs one possible anvil-use event and does not imply that every sea otter uses tools or reveal intelligence rank, diet frequency or foraging success.
Constraints: exactly one sea otter, exactly one stone, exactly one mussel; no other animal, prey or object; no text, label, arrow, logo, signature, border or watermark; generic reconstruction.
Avoid: rock used as a hand-held hammer, two rocks, stone fused into fur, stone strapped to chest, human fingers or thumbs, praying hands, open shell, pearl, clam pile, sea urchin, crab, fish, feeding flesh, chewing, blood, broken teeth, impact blur, second otter, pup, extra forepaw, fused paws, duplicated limbs, missing hind foot, long river-otter tail, beaver paddle tail, seal face or flippers, cropped anatomy, aquarium, zoo, dock, kayak, collar, tag, CGI, illustration, painting, fantasy glow, oversaturation or stock-photo gloss.
```

### 05 · Mother carrying a dependent pup

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sea Otter maternal-care gallery image 5 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically restrained wide wildlife photograph of exactly one adult female sea otter (Enhydra lutris) supporting exactly one dependent pup above the cold sea surface while calmly grooming the pup.
Scene/backdrop: a sheltered generalized North Pacific kelp cove with calm slate-green water, sparse broad kelp blades and low round floats, distant soft fog but no identifiable coast, reserve, harbor, boat, dock, person or structure.
Subjects/action: exactly two sea otters total. One complete adult mother floats naturally on her back from left to right. One clearly smaller young dependent pup with lighter fluffy pale brown-gray natal fur rests crosswise high on the adult's chest and upper abdomen, entirely above the water; the pup is not swimming or diving. The adult bends her muzzle toward the pup's upper back in a natural grooming posture and uses her two small forepaws to steady it gently. Preserve a crisp distinct outline around the pup's broad head, short body, exactly four small limbs and one short tail; the pup must read as a separate animal resting on fur, not as an extra head or growth from the adult. Show the adult's broad head, torso, both large flattened webbed hind feet and exactly one complete short stout tail beyond the pup. Keep adult and pup anatomy coherent even where their fur touches.
Adult morphology: robust marine mustelid with dense wet dark chocolate-brown coat, subtly paler grizzled head and throat, small rounded ears, blunt broad muzzle, long pale whiskers, two small dexterous forepaws, two broad flipper-like hind feet and one short stout tail.
Pup morphology: clearly juvenile sea otter, about one-third of the adult's body length, fluffy light brown-gray natal coat that traps air, round head, small dark muzzle, tiny forepaws and hind feet, short tail; no adult-white face and no seal-pup flippers.
Style/medium: original photorealistic professional natural-history photography, restrained documentary color, realistic wet adult fur, air-fluffed pup coat, seawater and kelp texture; quiet field observation rather than sentimental portraiture.
Composition/framing: horizontal 3:2 medium-wide view from slightly above water level. Entire mother and entire pup stay within frame with generous margin; group occupies no more than 68 percent of width. Keep both adult hind feet, adult tail and the pup's full outline visible and clear of frame edges.
Lighting/mood: soft overcast morning light, attentive and calm without golden sentimental glow.
Scientific evidence boundary: sea otter females give birth to and raise single pups at the surface, and dependent pups do not initially dive. This image cannot establish actual sex, kinship, age, survival or duration of care in a real pair.
Constraints: exactly two animals total—one adult female and exactly one pup; no third otter, hidden head or extra silhouette; no prey, food, stone, collar or tag; no text, label, logo, signature, border or watermark; generic reconstruction.
Avoid: two pups, twin pups, second adult, adult male, pup underwater, pup swimming alone, pup with adult dark sleek coat, seal pup, human baby cradle, hugging like people, clasped hands, smiling mascot, nose kiss, nursing, blood, distress, fused heads, shared torso, extra limbs, duplicated paws, more than two tails, missing adult hind foot, long river-otter tail, beaver paddle tail, cropped anatomy, aquarium, zoo, kayak, CGI, illustration, painting, fantasy glow, oversaturation or stock-photo gloss.
```

### 06 · Shore-based visual survey

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Sea Otter non-contact monitoring gallery image 6 of 6, exact horizontal 3:2 website asset
Primary request: Create a brand-new original scientifically plausible conservation field photograph of exactly two researchers conducting a shore-based visual sea-otter survey from a safe elevated rocky coastal overlook, with no animal visible in the frame.
Scene/backdrop: a generalized cold North Pacific rocky coast viewed over a broad nearshore kelp bed, slate water, low evergreen headlands and soft marine haze; the observation point is stable bare rock and low native coastal plants well above the water. No identifiable country, reserve, landmark, public trail, road, building, harbor, vessel or sensitive site clue.
Researchers and equipment: exactly two adult field researchers in practical unbranded muted waterproof jackets and trousers, positioned separately but working together. Researcher one kneels or sits securely behind exactly one compact straight spotting scope mounted on exactly one sturdy three-legged tripod and looks through the eyepiece toward the distant kelp bed. Researcher two sits one step behind and to the side holding exactly one plain weatherproof clipboard and a pencil, recording observations; the clipboard faces away from camera and contains no readable writing. Both people use natural body proportions and hands, keep a respectful distance from the water, and do not point, wave or handle wildlife.
Style/medium: original photorealistic professional conservation field-documentary photography, restrained museum-publication color, realistic fabric, rock, kelp, seawater and fog; credible working scene rather than outdoor-brand advertising.
Composition/framing: horizontal 3:2 wide environmental view from behind and slightly to the side of the researchers. Put the two people and single spotting scope in the left-middle ground occupying under one-third of frame; the broad kelp bed and coast dominate the right two-thirds and show the long sight line. Keep every person and all tripod legs fully inside frame.
Lighting/mood: soft overcast morning light, patient, quiet and methodical, neutral natural palette.
Scientific evidence boundary: this image reconstructs a shore-based observation method. It is not a named survey, actual detection, disclosed station, population estimate or trend result. Standardized repeated counts and detection modeling are required for inference.
Constraints: exactly two people, exactly one spotting scope, exactly one tripod, exactly one clipboard and one pencil; no visible sea otter or other animal; no binoculars, camera, drone, boat or second optical device; no readable text, map, coordinates, device screen, brand, logo, patch, signature, border or watermark.
Avoid: wildlife close-up, researcher touching or feeding an animal, capture, tagging, collar, net, trap, tranquilizer, drone, kayak, motorboat, crowd, tourist pose, fashion campaign, bright branded clothing, military optics, rifle-like equipment, telescope pointed at the sky, missing tripod leg, fused hands, extra fingers, extra person, readable notes, flag, sign, landmark, CGI, illustration, painting, dramatic cinematic beam, oversaturation or stock-photo gloss.
```
