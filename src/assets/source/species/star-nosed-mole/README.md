# Star-nosed Mole image set

OpenAI's built-in imagegen created these six original project images on 2026-08-30 for the Fauna Atlas Condylura cristata profile. The frames reconstruct generalized wetland emergence, diagnostic anatomy, nasal-star structure, underwater bubble sampling, tactile foraging and a wetland-bank burrow. They do not document a named animal, locality, experiment, prey encounter or occupied burrow.

- Generation mode: OpenAI built-in imagegen
- Use cases: photorealistic-natural for frames 01, 02 and 05; scientific-educational for frames 03, 04 and 06
- Research brief: docs/research/star-nosed-mole-profile.md
- Source directory: src/assets/source/species/star-nosed-mole/
- Runtime directory: public/images/species/star-nosed-mole/
- Source format: 1536 x 1024 opaque sRGB PNG
- Runtime format: 1536 x 1024 opaque lossy VP8 WebP
- Product credit: Fauna Atlas · AI 生成科学情景重建
- Total imagegen calls: 6 initial generations plus 1 replacement generation for frame 06; no edit calls
- Compression: TinyPNG returned HTTP 429 for all six source files because the configured account had exhausted its monthly quota. The documented local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. The generator directory retains the original built-in outputs. The runtime WebP files use the repository's cwebp quality 82, method 6 and multithreaded settings.

## Files and review decisions

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | 01-wetland-edge-emergence-source.png | 01-wetland-edge-emergence.webp | One dark-furred mole emerges from shallow water onto saturated mud, with the body, forefeet, tail and compact nasal star visible. | The frame cannot establish sex, age, measurements, locality, movement direction beyond the photographed instant or nasal-ray count at this viewing scale. |
| 02 | 02-full-body-diagnostic-profile-source.png | 02-full-body-diagnostic-profile.webp | One adult is shown in a complete three-quarter profile with dense dark fur, no visible ear pinnae, broad forefeet and a long rounded tail. | Overlap limits exact toe counting and calibrated body or tail proportions; the pixels cannot establish sex or age. |
| 03 | 03-nasal-star-sensory-closeup-source.png | 03-nasal-star-sensory-closeup.webp | The frontal macro shows two nostrils and exactly 22 separate rays, counted as 11 on each side, with the lowest central pair shortest. | Fine surface texture suggests a sensory epithelium but cannot resolve or count microscopic Eimer's organs or prove neural function. |
| 04 | 04-underwater-bubble-sniffing-source.png | 04-underwater-bubble-sniffing.webp | One submerged mole investigates a stone while a small localized set of bubbles connects the nostril area and object. | A still image cannot show whether a bubble is being exhaled or re-inhaled, identify an odor, measure accuracy or prove that the rays smell. |
| 05 | 05-rapid-tactile-prey-detection-source.png | 05-rapid-tactile-prey-detection.webp | One mole lowers the central nasal rays toward one small earthworm-like prey segment on damp substrate. | The scene cannot establish a 120 millisecond event, scanning rate, prey identity, ingestion, success or neural fovea function. |
| 06 | 06-wetland-bank-burrow-cutaway-source.png | 06-wetland-bank-burrow-cutaway.webp | The accepted replacement places one adult, its bedding and the chamber floor clearly above the low waterline; a continuous rising tunnel reaches a shallow-submerged entrance. | This is conceptual geometry, not evidence for fixed depth, slope, a unique entrance, universal tunnel layout or actual occupancy. |

The first frame 06 generation was rejected because its nest chamber appeared below the waterline. It was not copied into the source or runtime asset set. The replacement was reviewed at original resolution before acceptance.

## Scientific and editorial boundaries

- The typical nasal star has 22 fleshy rays, 11 around each nostril. Frame 03 was counted at original resolution. Smaller or oblique stars in the other frames should not be used as digitized ray-count evidence.
- The rays are tactile. Frame 04 reconstructs air bubbles near the nostrils and a submerged object; it does not show odor itself or prove bubble direction in one instant.
- Frame 05 contains one mole and one prey segment. It represents the contact stage only and cannot demonstrate the experimental 120 millisecond minimum or a wild feeding constant.
- Frame 06 explains one possible spatial relationship between a dry elevated chamber and a shallow-submerged entrance. Real burrows vary by site and can have other layouts.
- Every scene is a generalized editorial reconstruction. No image supplies occurrence coordinates, body measurements, sex, age, season, population trend or conservation evidence.
- No image contains readable text, a logo, watermark, border, map marker, scale bar or named locality.

## Imagegen output ledger

| No. | Generator output | Decision |
| ---: | --- | --- |
| 01 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-b4131a9a-4a0f-472d-8986-3907cbb1c412.png | Accepted |
| 02 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-5be0cfa9-e751-4ff3-aa10-d0928f5f8551.png | Accepted |
| 03 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-0338f7ff-76f3-4f6d-9163-a83eb70d847c.png | Accepted; exactly 22 rays counted at original resolution |
| 04 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-6bb441f7-9a2f-4824-81a7-b92824cab1b5.png | Accepted with still-image direction boundary |
| 05 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-88ba14bd-345d-4e35-8bcf-01cf9d489c06.png | Accepted |
| 06 initial | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-ed25920b-8646-42af-b4c6-181a6fd49267.png | Rejected: nest chamber appeared below the waterline |
| 06 replacement | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-edac7a39-ef9a-4fb3-94ca-f34d33940b8f.png | Accepted: chamber floor, bedding and animal remain above the waterline |

## Final prompts

### 01 · Wetland-edge emergence

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Star-nosed Mole species-profile cover, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: one anatomically accurate adult star-nosed mole (Condylura cristata) emerging from shallow water onto saturated mud at the edge of an eastern North American wetland
Scene/backdrop: quiet peat-bog stream margin with sedges, sphagnum moss, dark wet leaf litter, and soft distant vegetation; no human objects
Subject: one small adult star-nosed mole, dark chocolate-brown to black cylindrical body with dense wet fur, tiny visible eyes, no external ear pinnae, broad spade-like forefeet with five strong claws, long rounded scaly sparsely haired tail, and a compact pink nasal star; the nasal star must have exactly 22 short fleshy rays, 11 arranged around each nostril, bilaterally symmetric, with the lowest central pair shortest
Style/medium: photorealistic natural-history editorial wildlife photography, understated museum-publication quality
Composition/framing: horizontal 3:2, low eye-level medium-wide view, entire animal visible, body moving diagonally from water toward mud, nasal star readable but naturally small, focal point near x=0.58 y=0.53, calm negative wetland space around the animal
Lighting/mood: cool overcast dawn, soft diffuse light, quiet and scientifically grounded
Materials/textures: realistic water droplets, dense non-metallic fur, wet mud, moss, subtle ripples
Constraints: exactly one animal; exactly 22 nasal rays total; the rays emerge only around the two nostrils and do not come from the mouth; accurate mole feet and tail; natural proportions; no text, labels, logos, borders, or watermark
Avoid: flower petals, sea-anemone anatomy, octopus tentacles, oversized star, extra rays, fused rays, duplicate feet, extra toes, pink body, fantasy styling, dramatic studio lighting
~~~

### 02 · Full-body diagnostic profile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Star-nosed Mole diagnostic gallery image 2 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a clear full-body diagnostic portrait of one adult star-nosed mole (Condylura cristata) standing on moist northeastern woodland leaf litter beside a shallow wetland
Scene/backdrop: subdued brown leaf litter, damp soil, a few moss patches, softly blurred sedges and water behind; no human objects
Subject: one adult seen in a clean three-quarter side profile, entire body from nasal star to tail tip visible; dark brown-black cylindrical body with dense coarse non-metallic fur; tiny visible eyes; no external ear pinnae; broad outward-turned spade-like forefeet with five clawed digits; slimmer hind feet; long rounded annulated tail with sparse coarse hair; compact pink nasal star with exactly 22 short fleshy rays, 11 around each nostril, lowest central pair shortest
Style/medium: photorealistic museum-grade natural-history field photography with diagnostic clarity
Composition/framing: horizontal 3:2, entire animal fills the middle 65 percent of frame without cropping, low side viewpoint, feet separated enough to read their roles, focal point near x=0.53 y=0.52
Lighting/mood: soft neutral overcast daylight, faithful color, no glamour
Materials/textures: dense dark fur, scaled tail skin, damp soil, decaying leaves
Constraints: exactly one animal; natural adult proportions; exactly 22 nasal rays total; star rays surround two nostrils and remain short; full tail and all four feet visible; no text, labels, rulers, logos, borders, or watermark
Avoid: mouse-like ears, rodent incisors, hairless body, bulbous rat tail, oversized flower nose, sea-anemone anatomy, extra limbs, extra toes, extra or fused nasal rays, fantasy styling
~~~

### 03 · Nasal-star sensory close-up

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Star-nosed Mole sensory-organ gallery image 3 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: an anatomically careful frontal macro portrait of the nasal star of one living adult star-nosed mole (Condylura cristata), showing the tactile rays in their natural arrangement
Scene/backdrop: the animal's dark wet facial fur fades into a softly blurred neutral wetland background
Subject: one mole head viewed almost straight on; two nostrils at center; exactly 22 separate short pink fleshy rays, eleven on the viewer-left half and eleven on the viewer-right half, bilaterally paired around the nostrils; rays have three natural length classes, the bottom central pair are shortest and act as the tactile fovea; surfaces show fine pebbled skin texture consistent with dense Eimer sensory organs, without pretending to resolve or count each microscopic receptor
Style/medium: photorealistic scientific macro photography, museum natural-history publication quality
Composition/framing: horizontal 3:2 close portrait, whole nasal star and enough dark-furred head visible for context, no ray cropped, focal point x=0.50 y=0.52, shallow but sufficient depth of field so every ray tip is readable
Lighting/mood: soft diffuse daylight, neutral and clinical without looking like a dissected specimen
Materials/textures: moist living pink skin, minute dome-like surface texture, dense dark fur, tiny water droplets
Constraints: exactly one head; exactly 22 rays total with a clear bilateral 11-plus-11 arrangement; two nostrils only; rays attach around the nostrils, not inside the mouth; no text, numbers, arrows, labels, logos, borders, or watermark
Avoid: flower or chrysanthemum petals, sea-anemone tentacles, suction cups, branching rays, fused rays, extra rays, radial disk replacing the nostrils, teeth, open mouth, fantasy anatomy, microscope cross-section
~~~

### 04 · Underwater bubble sampling

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Star-nosed Mole underwater-olfaction gallery image 4 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a scientifically grounded underwater scene of one adult star-nosed mole (Condylura cristata) investigating a submerged stone by exhaling a small bubble cluster onto it and drawing the bubbles back toward its nostrils
Scene/backdrop: shallow clear northeastern stream, brown mineral gravel, submerged leaves, a few aquatic plant stems, muted water surface above
Subject: one dark-furred semiaquatic star-nosed mole underwater, head and forequarters in clear side-three-quarter view; compact pink nasal star touching or nearly touching a stone; a small localized chain of air bubbles travels from the two nostrils to the stone and back toward the nose; broad five-clawed forefeet brace or paddle; body and long tail trail behind
Style/medium: photorealistic natural-history underwater photography with documentary scientific clarity
Composition/framing: horizontal 3:2, mole occupies the middle-right of frame, bubble-object-nose relationship readable, full body visible through water, focal point near x=0.62 y=0.53
Lighting/mood: filtered cool daylight from the surface, clear but subdued, no theatrical beams
Materials/textures: water-slick dark fur, realistic air bubbles, silt, stone, leaf veins
Constraints: exactly one animal; bubbles originate only at the nostrils and contact one submerged object; compact nasal star has 22 short fleshy rays in a bilateral arrangement; two nostrils; natural mole anatomy; no gills, no open mouth breathing, no text, arrows, labels, logos, borders, or watermark
Avoid: cartoon bubbles, scuba imagery, bubble ring around the whole head, fish anatomy, octopus tentacles, oversized flower nose, extra animals, fantasy bioluminescence, dramatic ocean scene
~~~

### 05 · Rapid tactile prey detection

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Star-nosed Mole rapid-tactile-foraging gallery image 5 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a high-speed natural-history photograph of one adult star-nosed mole (Condylura cristata) detecting one small earthworm segment on damp leaf litter with the shortest central rays of its nasal star
Scene/backdrop: dim wet woodland floor near a marsh, shallow surface tunnel through dark soil and decomposing leaves, no human objects
Subject: one dark-furred mole in low side-three-quarter view; broad five-clawed forefeet planted in soil; compact pink 22-ray nasal star lowered to touch one small earthworm segment; the lowest central ray pair and prey are sharp while only the outer ray tips carry a trace of natural motion blur from rapid scanning; closed or barely parted mouth remains behind the nasal star
Style/medium: photorealistic high-speed wildlife macro photography, scientific documentary quality
Composition/framing: horizontal 3:2 close environmental portrait, entire head and forequarters visible, prey contact point unobstructed, focal point near x=0.59 y=0.57
Lighting/mood: soft cool forest shade with restrained natural fill, no spotlight
Materials/textures: damp dark soil, wet leaves, dense coarse fur, moist living nasal skin, one realistic earthworm segment
Constraints: exactly one mole and one prey item; exactly 22 short nasal rays total in bilateral arrangement; central lower pair touch the prey; no duplicated head or ghost image; no text, timer, labels, logos, borders, or watermark
Avoid: eating spaghetti, multiple worms, exaggerated open jaws, visible rodent incisors, flower nose, octopus tentacles, strong whole-image motion blur, extra limbs, fantasy speed lines
~~~

### 06 · Elevated wetland-bank chamber

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Star-nosed Mole wetland-burrow gallery image 6 of 6, revised original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a realistic unlabeled side cutaway of a star-nosed mole wetland-bank burrow with an unmistakable vertical separation between the low pond waterline and a dry nest chamber high in the bank
Scene/backdrop: northeastern wetland bank in cross-section; sedges, moss, and one fallen log on the surface; pond occupies only the lower-left corner; dark organic topsoil over mineral soil
Required geometry: place the horizontal pond waterline low in the image at about y=0.70. Put one submerged tunnel entrance at x=0.08 y=0.78. From that entrance, one continuous tunnel climbs steeply upward through the bank. Put the entire dry nest chamber and all nest bedding high above the waterline at x=0.68 y=0.40, beneath the fallen log. Maintain at least one-quarter of the image height as dry soil between the chamber floor and the pond waterline. The chamber floor must be visibly higher than the water surface.
Subject: exactly one adult star-nosed mole curled in dry leaves and grass inside the elevated chamber; dark dense fur, broad digging forefeet, long tail, compact pink nasal star; no juveniles or other animals
Style/medium: photorealistic scientific cutaway illustration with natural soil and water textures, museum exhibit quality, no diagram labels
Composition/framing: horizontal 3:2; low pond and underwater opening at lower left; rising tunnel crosses the middle; elevated chamber at upper right; surface habitat and log across the top; mole fully visible, focal point near x=0.68 y=0.42
Lighting/mood: soft overcast daylight aboveground with gentle readable ambient light in the cutaway, subdued natural palette
Constraints: chamber floor, bedding, and animal all clearly above the waterline; only the entrance is submerged; continuous plausible tunnel; exactly one mole; compact 22-ray nasal star; no transparent animal, no text, arrows, measurements, labels, logos, borders, or watermark
Avoid: chamber below water level, flooded bedding, level tunnel, aquarium glass, ant-farm maze, giant cavern, extra animals, pipes, fantasy underground lighting, flower nose, octopus anatomy
~~~

## Rejected frame 06 prompt

The following prompt produced the rejected first frame 06. It remains here to preserve the complete generation ledger and explain why the geometry was tightened for the accepted replacement.

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Star-nosed Mole wetland-burrow gallery image 6 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a realistic unlabeled side cutaway of a star-nosed mole wetland-bank burrow, showing one adult resting in a dry leaf-lined nest chamber above the waterline while one sloping tunnel reaches a submerged entrance
Scene/backdrop: northeastern wetland bank in cross-section; sedges, moss, and one fallen log on the surface; dark organic topsoil over mineral soil; pond water at the left; one simple tunnel network within the bank
Subject: one adult star-nosed mole curled in the nest chamber beneath the log, dark dense fur, broad digging forefeet, long tail, compact pink nasal star; no juveniles or other animals; chamber remains clearly above the water surface, while a separate sloping tunnel ends underwater
Style/medium: photorealistic scientific cutaway illustration with natural soil and water textures, museum exhibit quality, no diagram labels
Composition/framing: exact horizontal 3:2 side cutaway, water and submerged tunnel entrance on the left, dry nest chamber on the lower right, surface habitat visible across the top, mole fully visible in chamber, focal point near x=0.67 y=0.66
Lighting/mood: soft overcast daylight aboveground and gentle readable ambient light in the cutaway, subdued natural palette
Materials/textures: layered damp soil, roots, dry grasses and leaves in nest, water, moss, dense fur
Constraints: exactly one mole; nest chamber above the waterline; only the tunnel entrance is submerged; plausible continuous tunnel geometry; compact 22-ray nasal star; no transparent animal, no text, arrows, measurements, labels, logos, borders, or watermark
Avoid: flooded nest, aquarium glass, ant-farm maze, giant cavern, multiple entrances presented as a universal plan, extra animals, exposed pipes, fantasy underground lighting, flower nose, octopus anatomy
~~~
