# Kākāpō image set

OpenAI's built-in imagegen created these six original project images on 2026-08-30 for the Fauna Atlas *Strigops habroptilus* profile. The frames reconstruct generalized nocturnal habitat, diagnostic form, a track-and-bowl court, rimu foraging, a ground nest and radio-telemetry fieldwork. They do not document a named bird, person, island, breeding event, nest, census or monitoring result.

- Generation mode: OpenAI built-in imagegen
- Use cases: photorealistic-natural for frames 01 and 02; scientific-educational for frames 03, 04 and 05; conservation-documentary for frame 06
- Research brief: docs/research/kakapo-profile.md
- Source directory: src/assets/source/species/kakapo/
- Runtime directory: public/images/species/kakapo/
- Source format: 1536 x 1024 opaque sRGB PNG
- Runtime format: 1536 x 1024 opaque lossy VP8 WebP
- Product credit: Fauna Atlas · AI 生成科学情景重建
- Total imagegen calls: 6 initial generations; no replacement or edit calls
- Compression: TinyPNG returned HTTP 429 for all six source files because the configured account had exhausted its monthly quota. The documented local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping. The generator directory retains the original built-in outputs. Runtime WebP files use the repository's cwebp quality 82, method 6 and multithreaded settings.

## Files and review decisions

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | 01-moss-forest-nocturnal-portrait-source.png | 01-moss-forest-nocturnal-portrait.webp | One stocky green kākāpō walks on a mossy temperate-forest floor at the transition to night. | The frame cannot establish sex, age, individual identity, exact locality, sanctuary status, predator absence or nocturnal activity beyond the depicted instant. |
| 02 | 02-full-body-diagnostic-profile-source.png | 02-full-body-diagnostic-profile.webp | One complete bird shows mottled green plumage, a pale facial disc, hooked parrot bill, short folded wings, short tail and robust legs. | Perspective limits exact toe-direction evidence; the image cannot establish calibrated measurements, body mass, sex or age. |
| 03 | 03-male-track-and-bowl-booming-source.png | 03-male-track-and-bowl-booming.webp | One bird stands in a shallow cleared earthen bowl with several narrow paths radiating through low vegetation. | A still cannot prove sex, active calling, low-frequency sound, call interval, audible range, display duration, court dimensions, female choice or breeding success. |
| 04 | 04-rimu-fruit-tree-foraging-source.png | 04-rimu-fruit-tree-foraging.webp | One bird balances on a branch beside fine drooping foliage and small red-orange fleshy structures with dark seed tips. | The reconstruction cannot authenticate plant or bird identity, prove consumption, quantify diet, mark a rimu mast or show that fruiting triggered breeding. |
| 05 | 05-female-ground-cavity-two-eggs-source.png | 05-female-ground-cavity-two-eggs.webp | One bird stands at a root cavity beside exactly two complete plain white eggs. | The pixels cannot prove the adult's sex, maternity, incubation, clutch norm, complete clutch size, egg viability, nest occupancy or location. |
| 06 | 06-radio-telemetry-island-monitoring-source.png | 06-radio-telemetry-island-monitoring.webp | Exactly one ranger holds a plausible Yagi antenna and receiver while observing one bird without contact. | The frame shows no readable signal or visible transmitter and cannot identify the ranger, bird, island, monitoring result, population count, health status or management outcome. |

All six accepted files were inspected at original resolution before compression and again as runtime assets. No image contains readable text, a logo, watermark, border, map marker, scale bar or named locality. Feet are partly obscured or affected by perspective in several frames; captions therefore describe robust parrot legs without treating toe direction as independent anatomical evidence.

## Imagegen output ledger

| No. | Generator output | Decision |
| ---: | --- | --- |
| 01 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-15f3748c-990a-4acc-9aa1-2b4e7acc6635.png | Accepted |
| 02 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-eddfacc3-b5b7-4555-b96a-f63dc564a06c.png | Accepted with toe-perspective boundary |
| 03 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-681e6647-e838-4686-ab79-20ea03ed44d9.png | Accepted with still-image sound boundary |
| 04 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-51d37f02-ef5c-48e9-9902-c42e050e2c6c.png | Accepted with plant-authentication boundary |
| 05 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-dbd82672-05cd-4e6e-92b7-8e9f20d95f36.png | Accepted; exactly two intact white eggs counted |
| 06 | /Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-25d46598-37ef-45db-bbe8-a2bb1ced9ef0.png | Accepted; one ranger, one bird and no contact |

## Final prompts

### 01 · Moss-forest nocturnal portrait

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Kākāpō species-profile cover, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: one anatomically accurate adult kākāpō (Strigops habroptilus) walking quietly across the mossy floor of a protected New Zealand podocarp forest at the start of night
Scene/backdrop: dense temperate native forest with rimu trunks, tree ferns, moss, damp leaf litter and a softly receding understory; generalized sanctuary habitat with no named locality and no human objects
Subject: exactly one large stocky flightless parrot, entire body visible in natural three-quarter view; moss-green plumage mottled irregularly with yellow and black; pale owl-like facial feather disc around dark forward-looking eyes; a large pale gray hooked parrot bill with visible cere; fine whisker-like facial feathers; two small rounded wings folded against the body; short rounded tail; powerful gray legs; two complete zygodactyl parrot feet, each anatomically having two toes forward and two backward with strong curved claws; calm ground-walking posture
Style/medium: museum-grade photorealistic natural-history wildlife photography, real feather structure and damp forest texture, restrained documentary color
Composition/framing: horizontal 3:2, low forest-floor camera, whole bird inside generous margins, subject occupies about 45 percent of frame height near x=0.62 y=0.57, quiet habitat context and open understory around it
Lighting/mood: cool blue-hour ambient light filtering through canopy with soft warm-green reflected fill, nocturnal transition without artificial spotlight
Materials/textures: layered soft feathers, matte hooked bill, rough bark, wet moss, decomposing leaves
Scientific boundary: generalized editorial reconstruction, not a named individual, occurrence record, census, sex determination or proof that the sanctuary lacks predators
Constraints: exactly one bird; clear parrot bill rather than owl or raptor bill; flightless ground posture; complete wings, tail, legs and feet; no transmitter, collar or band; no text, labels, logos, borders or watermark
Avoid: owl body, facial horns, ear tufts, raptor talons, kea or kākā coloration, flying pose, spread flight feathers, long pointed tail, bright tropical parrot colors, extra toes, duplicated feet, additional animals, person, feeder, fence, road, fantasy glow
~~~

### 02 · Full-body diagnostic profile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Kākāpō diagnostic gallery image 2 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a clear full-body diagnostic portrait of one adult kākāpō (Strigops habroptilus) standing on damp New Zealand forest leaf litter
Scene/backdrop: simple native forest floor with moss, brown leaves, low fern fronds and a softly blurred neutral understory; no human objects
Subject: exactly one complete large flightless parrot in clean left-facing three-quarter side profile; bulky rounded body; moss-green feathers with uneven yellow and black mottling; pale facial feather disc; dark eyes; large pale gray hooked parrot bill; fine whiskery facial feathers; short neck; two small rounded wings folded naturally; short broad tail; powerful gray legs; both complete zygodactyl feet separated and readable, each with two toes facing forward and two backward; natural upright walking stance
Style/medium: photorealistic museum diagnostic field portrait with faithful feather and skin detail
Composition/framing: exact horizontal 3:2, entire crown, bill, wings, tail, legs and every foot remain inside generous margins; bird occupies the middle 62 percent of frame width and about 60 percent of frame height; camera at body height; moderate depth of field keeps the whole silhouette sharp
Lighting/mood: soft overcast daylight beneath forest canopy, neutral color and low contrast
Materials/textures: layered matte feathers, gray keratin bill and claws, damp leaves, fine moss
Scientific boundary: frame supports qualitative identification only; no ruler, calibrated size, sex cue, age estimate or body-mass claim
Constraints: exactly one bird; parrot anatomy; two small folded wings; two legs; two complete zygodactyl feet with four toes each; no transmitter, band, text, label, ruler, logo, border or watermark
Avoid: barn owl, horned owl, eagle, hawk, kea, kākā, macaw, cockatoo crest, bright blue or red plumage, flying pose, open wings, long tail, extra toes, webbed feet, clipped anatomy, additional animals, enclosure, studio backdrop, fantasy styling
~~~

### 03 · Track-and-bowl display court

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Kākāpō lek-breeding gallery image 3 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: a scientifically grounded night scene of exactly one adult male kākāpō (Strigops habroptilus) giving a booming display from his track-and-bowl court on a low forest ridge
Scene/backdrop: protected New Zealand native forest ridge at night; one shallow cleared earthen bowl surrounded by low vegetation, with two or three narrow neatly maintained footpaths radiating into moss and fern understory; no other birds
Subject: one large moss-green mottled flightless parrot settled upright inside the shallow bowl; pale owl-like facial feather disc but unmistakable pale gray hooked parrot bill; small folded wings, short tail and strong gray parrot feet; the feathered upper chest and abdomen are naturally and moderately expanded by the thoracic air sac, giving a rounded resonant posture without exposed skin or a throat balloon
Style/medium: photorealistic scientific natural-history reconstruction, museum-publication restraint
Composition/framing: horizontal 3:2, low three-quarter view; entire male and the shape of the primary bowl visible; short radial tracks remain readable around him; focal point near x=0.55 y=0.57; forest stays dark but detailed
Lighting/mood: dim moonless blue-black forest with soft diffuse documentary fill, no theatrical spotlight or glowing effects
Materials/textures: compressed bare earth in bowl, clipped low vegetation, moss, soft mottled feathers
Scientific boundary: a still image can show the display posture and court structure but cannot show low-frequency sound, call interval, audible distance, display duration, female choice, mating or reproductive success
Constraints: exactly one male bird; exactly one primary bowl with a few short tracks; expanded feathered thoracic region only; closed hooked bill or slightly parted bill; no female, chick, egg, sound-wave graphic, text, arrows, labels, logos, borders or watermark
Avoid: frog-like vocal sac, naked inflated throat, balloon chest, owl or raptor anatomy, open flying wings, dancing flock, second bird, nest, artificial stage, microphone, visible musical notes, concentric sound rings, fantasy glow, exaggerated aggression
~~~

### 04 · Rimu-fruit tree foraging

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Kākāpō foraging gallery image 4 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: one anatomically accurate adult kākāpō (Strigops habroptilus) climbing along a low rimu branch and feeding beside ripe rimu fruit in a New Zealand podocarp forest at dusk
Subject details: a large heavy flightless parrot with finely mottled moss-green and yellow-green plumage, brownish owl-like facial disc, pale grey strongly curved parrot bill, short rounded wings held closed, short tail, robust legs, and clearly plausible zygodactyl gripping feet with two toes forward and two backward; the bird uses its bill and feet naturally to balance on the branch
Botanical details: recognizable rimu foliage made of fine drooping threadlike branchlets; scattered ripe structures are small red-orange fleshy receptacles, each carrying a single dark seed at the tip; never grape-like clusters, berries, cherries, apples, or large fruit
Setting: humid protected Aotearoa New Zealand temperate rainforest, mossy bark, restrained ferns, soft dusk light filtering through the canopy
Composition: medium-wide environmental portrait; the entire bird and its supporting branch remain visible; bird occupies the central-right area with foliage providing context; realistic depth and scale
Lighting and palette: natural low-angle dusk light, muted forest greens, warm red-orange fruit accents, honest feather and bark texture, documentary wildlife photography
Scientific boundary: the still image shows climbing and feeding context only; do not depict or imply breeding causation, population data, a named individual, or a verified location
Avoid: flight, spread wings, raptor talons, owl beak, extra or fused toes, malformed feet, multiple birds, nests, chicks, humans, feeding stations, harnesses, tracking devices, tropical jungle plants, decorative fruit abundance, artificial light beams, fantasy glow, illustration, painting, collage, borders, labels, captions, logos, signatures, watermarks, or any readable text
~~~

### 05 · Ground cavity with two eggs

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Kākāpō nesting gallery image 5 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: one anatomically accurate adult female kākāpō (Strigops habroptilus) standing quietly at the entrance of a shallow ground cavity beneath exposed tree roots, with exactly two plain white eggs visible in a minimally lined nest depression
Subject details: a heavy flightless parrot with finely mottled moss-green and yellow-green plumage, brownish owl-like facial disc, pale grey curved parrot bill, short rounded closed wings, short tail, robust legs, and plausible zygodactyl feet; slightly smaller, leaner proportions than a large male while remaining unmistakably kākāpō
Nest details: natural dry hollow beneath roots at forest-floor level; a shallow, sparse depression with exactly two unmarked matte white eggs, both intact and similar in size; no elaborate woven nest and no extra eggs
Setting: secluded New Zealand temperate forest floor with leaf litter, moss, root texture and dim diffuse daylight; calm conservation-documentary tone
Composition: medium environmental shot; the adult is beside rather than sitting on the eggs, so both complete eggs are countable; the cavity and bird are fully legible; no dramatic action
Lighting and palette: soft natural forest light, restrained greens and earth tones, lifelike feather detail, realistic egg scale and texture
Scientific boundary: the image is a reconstruction of visible nest context; it cannot prove the bird's sex, maternity, clutch norm, incubation duration, hatch success, identity, or location
Avoid: more or fewer than two eggs, broken or speckled eggs, chicks, a second adult, mating, feeding, anthropomorphic pose, woven cup nest, tree-top nest, nest box, handlers, cameras, transmitters, tags, cages, flight, spread wings, raptor talons, owl beak, extra or fused limbs or toes, fantasy glow, illustration, painting, collage, borders, labels, captions, logos, signatures, watermarks, or any readable text
~~~

### 06 · Radio-telemetry island monitoring

~~~text
Use case: conservation-documentary
Asset type: Fauna Atlas Kākāpō recovery gallery image 6 of 6, original project asset, horizontal 3:2 intended for 1536 x 1024
Primary request: exactly one field ranger using a handheld radio receiver and a simple directional Yagi antenna to monitor exactly one anatomically accurate adult kākāpō (Strigops habroptilus) from a respectful distance on a protected New Zealand forest island
Bird details: one large heavy flightless parrot on the mossy ground, finely mottled moss-green and yellow-green plumage, brownish owl-like facial disc, pale grey curved parrot bill, short rounded closed wings, short tail and robust legs; natural alert posture; no handling and no visible restraint
Human details: one adult conservation ranger in practical muted weatherproof field clothing, standing several metres behind and to the side of the bird, antenna aimed generally toward the habitat rather than touching the animal; receiver, cable and three-element Yagi antenna are physically plausible; face is incidental and not identifiable
Setting: humid Aotearoa New Zealand temperate rainforest with tree ferns, podocarp trunks and moss; subtle island-coast atmosphere through distant filtered light, but no signs or location markers
Composition: wide environmental documentary photograph; bird remains clearly recognizable in the foreground-right, ranger in the background-left, visible separation makes non-contact monitoring unambiguous; both fit comfortably within frame
Lighting and palette: subdued dawn light, natural greens and charcoal outdoor clothing, accurate material texture, credible wildlife-recovery field photography
Scientific boundary: the still image illustrates radio-telemetry fieldwork only; it cannot identify the ranger, bird, island, transmitter status, monitoring result, population count, health status, or management outcome
Avoid: additional people or birds, touching or holding the bird, nets, traps, cages, sedatives, veterinary procedures, obvious backpack or neck-mounted device on the bird, giant antenna, satellite dish, weapons, uniforms with logos, readable screens, branded gear, unsafe close contact, staged smiling portrait, flight, spread wings, raptor talons, owl beak, extra or fused limbs, fantasy technology, illustration, painting, collage, borders, labels, captions, logos, signatures, watermarks, or any readable text
~~~
