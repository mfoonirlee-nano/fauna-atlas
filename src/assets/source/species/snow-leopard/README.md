# Snow leopard image set

These six original project images complete the Fauna Atlas snow leopard profile. They use a shared natural-history editorial direction and intentionally avoid captive settings, people, text, anthropomorphic staging, and graphic predation.

Frame 01 is a 3:2 crop and resize of the original project hero generated with Codex's built-in image generation tool. Frames 02–06 were generated separately with the same built-in tool. The default generated originals were retained outside the repository; the selected project sources are the `*-source.png` files here.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/snow-leopard/*.webp`
- Dimensions: 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | File | Observation |
| --- | --- | --- |
| 01 | `01-alpine-ridge-portrait-source.png` | Adult on a Himalayan ridge; cover image |
| 02 | `02-rocky-ridge-traverse-source.png` | Broad paws and long tail supporting movement on steep rock |
| 03 | `03-high-mountain-habitat-source.png` | Snow leopard shown at the scale of its continuous alpine habitat |
| 04 | `04-prey-stalking-source.png` | A distant, non-graphic stalking approach toward Himalayan ibex |
| 05 | `05-winter-rest-source.png` | Long tail wrapped around a resting adult for warmth |
| 06 | `06-mother-and-cub-source.png` | One mother and one half-grown cub moving near a natural rock shelter |

## Source processing

Frame 01 was derived from `src/assets/source/fauna-hero-source.png` without regenerating the image. The original 1774 × 887 canvas was cropped to `1330x887+410+0`, reset to a full page, and resized to 1536 × 1024. The original source and `public/images/fauna-hero.webp` remain unchanged as the site's fallback hero.

## Final prompts

### 01 · Alpine ridge portrait

The original landing-page hero prompt produced the source used for this crop:

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas landing-page hero
Primary request: an editorial wildlife photograph of a snow leopard standing quietly on a high Himalayan rock ridge, for a modern digital biodiversity atlas
Scene/backdrop: windswept pale granite, sparse alpine grasses, distant layered mountains dissolving into cool morning mist
Subject: one anatomically accurate adult snow leopard, natural alert posture, detailed winter fur and long tail
Style/medium: photorealistic natural-history editorial photography, understated museum-publication quality
Composition/framing: cinematic wide landscape, snow leopard positioned in the right third, generous calm negative space on the left for website typography, subtle depth
Lighting/mood: quiet blue-gray dawn with one warm shaft of low sunlight, contemplative and scientifically grounded
Color palette: mineral gray, fog blue, muted sage, restrained warm ochre
Materials/textures: realistic fur, weathered stone, fine atmospheric grain
Constraints: no text, no logos, no watermark, no border, no fantasy elements, no collage, no other animals, no exaggerated colors
Avoid: stock-photo gloss, oversaturation, centered subject, aggressive pose
```

### 02 · Rocky ridge traverse

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas snow leopard species gallery image 2 of 6, horizontal 3:2
Primary request: Create a scientifically credible candid wildlife photograph of exactly one wild adult snow leopard (Panthera uncia) carefully traversing a steep broken Himalayan rock face, showing how its broad paws and exceptionally long thick tail support movement and balance.
Scene/backdrop: remote high-elevation Himalayan alpine terrain, pale weathered granite ledges, small patches of old snow, sparse dry alpine grass, layered cold mountain ridges in soft distance haze; no human infrastructure.
Subject: exactly one anatomically accurate adult snow leopard with realistic compact muscular proportions, small rounded ears, broad fur-covered paws, smoky gray winter coat with natural dark rosettes, pale belly, and one complete very long thick ringed tail. The animal moves laterally across a narrow ledge in a controlled low posture. All four limbs and all four paws are correctly attached and distinctly readable; the tail arcs naturally behind and slightly uphill as a counterbalance without hiding the hind legs.
Style/medium: photorealistic natural-history editorial wildlife photography, understated museum-publication quality, candid field observation, realistic fur and rock texture, restrained processing.
Composition/framing: 3:2 horizontal medium-wide environmental action portrait, low three-quarter field-camera viewpoint, entire animal from nose through tail tip fully inside the frame with generous breathing room; diagonal rock geometry makes the steep terrain legible; animal occupies about 40 percent of image width and is not looking directly at camera.
Lighting/mood: diffuse cold morning light with subtle natural warm edge light, quiet, remote, observational; no dramatic spotlight.
Color palette: mineral gray, muted slate blue, old snow white, restrained straw ochre, natural gray-and-black fur.
Constraints: exactly one snow leopard; exactly four anatomically plausible limbs and paws; one complete unbroken tail; wild Himalayan habitat; no people; no signs of captivity; no text, logo, caption, frame, or watermark.
Avoid: zoo or enclosure cues, roads, stairs, platforms, collars, camera traps, extra animals, prey, duplicated or missing limbs, fused paws, extra toes, shortened or duplicated tail, tail merging into rock, distorted spine, aggressive snarl, jumping fantasy pose, mascot expression, oversaturation, teal-orange grading, illustration, painting, CGI, stock-photo gloss.
```

### 03 · High-mountain habitat

```text
Use case: photorealistic-natural
Asset type: 1536 × 1024 PNG source photograph for a digital wildlife field atlas, exact 3:2 landscape canvas
Primary request: Create a restrained, scientifically credible environmental establishing photograph of continuous snow-leopard habitat in the Pamir–Himalayan high mountains, containing exactly one adult snow leopard.
Scene/backdrop: An unbroken high-altitude mountain landscape with a weathered near rock wall, a broad angular scree slope, sparse tawny alpine meadow patches, and multiple distant jagged mountain ridges fading naturally into the atmosphere. The setting must read as one continuous wild mountain habitat rather than a scenic composite.
Subject: Exactly one anatomically accurate adult snow leopard (Panthera uncia), in the midground on a rocky traverse, fully recognizable but small in the landscape. Dense pale gray winter coat with natural dark rosettes, compact powerful body, four plausible limbs, one very long thick tail, natural head and paws.
Style/medium: Authentic observational natural-history photography; quiet museum-field-guide restraint; realistic fur, rock, grass, scale, atmospheric perspective, and imperfect natural detail; no fantasy or commercial gloss.
Composition/framing: Wide 3:2 environmental establishing shot from a believable distant telephoto viewpoint. The snow leopard's full nose-to-rump body length should occupy approximately 8–12% of the total image width (tail may extend naturally beyond that), clearly visible against the rocks without becoming the hero-scale foreground subject. Show the rock wall, scree, alpine grassland, and distant mountains together, with deep spatial continuity.
Lighting/mood: Cool overcast or soft early-morning high-altitude light, subdued slate gray, stone ochre, muted straw and faint snow tones; calm, austere, wild.
Constraints: Exactly one animal total in the entire image, and it is the single adult snow leopard. All four limbs and the single long tail must be anatomically coherent, with no duplicated paws, legs, head, or tail. No concealed second cat. No people, roads, buildings, fences, collars, vehicles, prey, livestock, birds, or other wildlife. No zoo or captive cues. No text, labels, logos, borders, or watermark.
Avoid: oversized leopard, close portrait, dramatic attack pose, excessive snowfall, lush lowland vegetation, saturated cinematic teal/orange grading, painterly or CGI appearance, montage/collage, blood or violence.
```

### 04 · Prey stalking

```text
Use case: photorealistic-natural
Asset type: 1536 × 1024 PNG source photograph for a digital wildlife field atlas, exact 3:2 landscape canvas
Primary request: Create a restrained, scientifically credible wild photograph of exactly one adult snow leopard stalking exactly one distant Himalayan ibex through rocky high-mountain cover, before any chase or contact.
Scene/backdrop: A dry, cold Pamir–Himalayan mountainside with layered slate and granite outcrops, angular scree, sparse tawny alpine grass, small traces of old snow, and a broad open rocky shelf farther uphill. Completely wild, remote, high-altitude habitat.
Subjects: Animal 1 is exactly one anatomically accurate adult snow leopard (Panthera uncia) in the near-to-middle ground, moving in a low controlled stalking posture behind and between rocks: head low, shoulders slightly raised, belly close to the ground without touching it, four plausible weight-bearing limbs, one long thick tail following in a natural balancing curve, dense pale gray rosetted coat. Animal 2 is exactly one Himalayan ibex (Capra sibirica) alone on the distant open shelf, much smaller in the frame, standing calmly in profile with a recognizable horn silhouette and four anatomically plausible legs.
Style/medium: Authentic observational natural-history photography; quiet museum-field-guide restraint; realistic fur, anatomy, stone texture, depth, and imperfect natural detail; no staged drama, fantasy, or commercial gloss.
Composition/framing: Wide 3:2 environmental wildlife shot from a believable telephoto field position. Use foreground boulders as genuine visual cover for the snow leopard but keep its whole body, all limbs, and complete single tail readable. Place the lone ibex well beyond and uphill from the leopard, with a large, unmistakable stretch of empty rocky terrain between them. The ibex should appear substantially smaller because of distance. Keep both animals simultaneously legible, with the leopard dominant but not close-up.
Lighting/mood: Soft cold late-afternoon or overcast mountain light, subdued stone gray, dusty ochre, muted straw and pale snow; tense only through posture and distance, otherwise calm and documentary.
Constraints: Exactly two animals total in the entire image: one adult snow leopard and one distant Himalayan ibex. No cubs, herd, extra leopard, second prey, birds, livestock, or hidden animal shapes. The two animals must not touch or overlap. The leopard has one head, four coherent limbs, four paws, and exactly one continuous thick tail; the ibex has one head, two horns, four coherent legs, and no duplicated anatomy. No blood, wounds, biting, pouncing, chase, kill, or carcass. No people, roads, buildings, fences, collars, vehicles, zoo or captive cues. No text, labels, logos, borders, or watermark.
Avoid: multiple prey, duplicated animals, attacking or midair leopard, cropped body or tail, malformed paws or horns, oversized nearby ibex, lush lowland vegetation, saturated cinematic grading, painterly or CGI appearance, montage/collage.
```

### 05 · Winter rest

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas snow leopard species gallery image 5 of 6, horizontal 3:2
Primary request: Create a scientifically credible candid wildlife photograph of exactly one wild adult snow leopard (Panthera uncia) curled naturally at rest in a sheltered high-mountain rock hollow after a light snowfall, using its exceptionally long thick tail to help cover its body and muzzle for warmth.
Scene/backdrop: remote Himalayan alpine rock shelter, weathered pale granite, a thin discontinuous dusting of old snow, sparse dry grass and lichen, softly layered cold ridges beyond; no human infrastructure.
Subject: exactly one anatomically accurate adult snow leopard with realistic compact proportions, small rounded ears, broad fur-covered paws, smoky gray winter coat with natural rosettes, pale belly, and one complete long thick ringed tail. The animal lies in a plausible loose curl on a broad stable ledge. Its tail wraps naturally along the flank and partly across the forequarters near the muzzle without becoming a second limb or hiding the recognizable face. The face is visible in quiet drowsy profile; enough of the body and paws remain readable to understand the posture.
Style/medium: photorealistic natural-history editorial wildlife photography, understated museum-publication quality, candid field-documentary observation, finely resolved natural fur, stone, snow, and lichen texture; restrained processing.
Composition/framing: 3:2 horizontal medium-wide environmental portrait at a natural eye-level field-camera viewpoint; entire curled animal and complete tail fully inside frame with generous margins; moderate depth of field with habitat context, no artificial bokeh.
Lighting/mood: soft overcast winter daylight, quiet and unsentimental, realistic exposure and subdued contrast; no dramatic beams or glow.
Color palette: mineral gray, muted blue-gray shadow, sparse soft white snow, restrained straw ochre, natural smoky fur.
Constraints: exactly one snow leopard and no other animal; anatomically correct Panthera uncia; one continuous tail wrapping plausibly; wild high-mountain habitat; no people, enclosure, fence, collar, feeder, platform, props, text, logo, caption, border, or watermark.
Avoid: deep snowstorm, falling snow obscuring the animal, anthropomorphic expression, exaggerated cuteness, plush-toy appearance, direct staged eye contact, extra or merged limbs, duplicate tail, tail emerging from the wrong place, malformed face or paws, oversaturation, teal-orange grading, illustration, painting, CGI, cinematic spectacle.
```

### 06 · Mother and cub

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas snow leopard species gallery image 6 of 6, horizontal 3:2
Primary request: Create a scientifically credible candid wildlife photograph showing exactly one wild adult female snow leopard (Panthera uncia) and exactly one mobile half-grown cub moving naturally near a sheltered rock den in remote high-mountain habitat.
Scene/backdrop: rugged Himalayan alpine rock ledge in late summer, one natural shallow rock shelter, pale weathered granite, scree, sparse dry alpine grass and lichen, distant cold mountain layers; wild habitat only, no human infrastructure.
Subjects: exactly two snow leopards total: one adult female and her one half-grown cub. The adult is clearly adult-sized with compact muscular proportions, smoky gray rosetted coat, broad paws, small rounded ears, and one complete very long thick tail. The cub is unmistakably smaller, about 55–65 percent of the adult body scale, with plausible juvenile proportions, softer rosetted coat, broader youthful face, and its own shorter but still thick complete tail. Both are anatomically accurate Panthera uncia with distinct undistorted faces.
Action/spacing: mother and cub walk independently along the same broad stable ledge, separated by roughly one adult body length, aware of each other but not touching, cuddling, carrying, nursing, or posing. Both entire bodies are fully inside the frame and non-overlapping. All four limbs and paws of each animal are correctly attached and readable; both tails are complete, separate, and unobscured.
Style/medium: photorealistic natural-history editorial wildlife photography, understated museum-publication quality, candid field-documentary observation, finely resolved natural fur, rock, grass, and lichen textures; restrained natural processing.
Composition/framing: 3:2 horizontal medium-wide environmental action portrait from a low natural field-camera viewpoint. The rock shelter establishes den habitat without hiding either animal. Keep both animals sharply readable with generous margins and a softly receding real mountain landscape; no artificial bokeh.
Lighting/mood: soft filtered high-altitude morning daylight, quiet and observational, natural exposure and subdued contrast; no theatrical spotlight or glow.
Color palette: mineral gray, muted slate blue, pale granite, restrained straw ochre, natural smoky gray fur.
Constraints: exactly one adult female and exactly one half-grown cub, no third snow leopard and no other animal; clear realistic size and age difference; both entirely visible and separate; eight anatomically plausible limbs and paws total; exactly two separate complete tails; authentic wild high-mountain habitat; no people, zoo, enclosure, fence, collar, camera trap, feeder, platform, props, text, logo, caption, border, or watermark.
Avoid: anthropomorphic emotion, cuddling, staged eye contact, matching poses, exaggerated cuteness, plush-toy appearance, identical-size pair, miniature newborn, adult-looking cub, extra limbs, merged paws, fused bodies, duplicate or joined tails, malformed faces, cropped feet or tails, oversaturation, teal-orange grading, illustration, painting, CGI, cinematic spectacle.
```
