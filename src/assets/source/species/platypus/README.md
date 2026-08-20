# Platypus image set

These six original project images were generated with Codex's built-in image generation tool for the complete Fauna Atlas platypus profile. They share a restrained natural-history editorial direction and consistently depict *Ornithorhynchus anatinus*: a low streamlined monotreme with a flexible gray-brown sensory bill, no external ear pinnae, dense dark-brown waterproof fur, short splayed limbs, broad webbed forefeet, less-webbed hind feet and a broad flattened furred tail.

No external wildlife photograph was supplied to the model or stored in the repository. Frame 02 alone used an earlier generated draft as the input to a targeted correction. The prompts below are normalized production records of the actual built-in image-generation calls: wording, scientific boundaries and edit scope are retained, while headings and punctuation are made consistent with the other species image-set records.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/platypus/*.webp`
- Dimensions: 1536 × 1024
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | File | Observation |
| --- | --- | --- |
| 01 | `01-creek-bank-portrait-source.png` | One complete wet adult on the right bank of a misty forest creek; cover and featured card |
| 02 | `02-underwater-electroreceptive-foraging-source.png` | One complete adult sweeping its bill over a cobble bed near small freshwater invertebrates, with eye, nostrils and mouth closed |
| 03 | `03-eastern-australian-stream-habitat-source.png` | One small adult swimming through a connected pool-and-riffle stream bordered by rooted native vegetation |
| 04 | `04-male-hind-ankle-spur-source.png` | One complete adult male on a wet creek-side rock, with one restrained keratinous spur visible at the hind ankle |
| 05 | `05-female-nesting-burrow-source.png` | One adult female carrying damp leaves and grasses with her tail toward a concealed above-water bank burrow |
| 06 | `06-stream-monitoring-and-restoration-source.png` | Two field workers sampling and recording beside modest riparian plantings while one wild platypus swims at a safe distance |

The set is explanatory natural-history imagery, not a record of a named stream, a den location, an individual animal, a field protocol or a measured restoration outcome. Frame 02 represents passive electroreception without visible electricity, sonar rings or an active discharge. Frame 04 places a modest spur only at an adult male's hind ankle and does not depict venom delivery. Frame 05 shows nest-material transport to a naturally concealed bank entrance rather than eggs, young or a precise burrow plan. Frame 06 shows non-invasive monitoring and riparian work without capture, handling, tagging or release.

The first draft of frame 02 was rejected even though the riverbed-foraging composition and absence of electrical effects were otherwise acceptable: its visible eye and nostrils remained open during a submerged dive. The accepted image applies a precise object edit only to those facial dive closures and preserves the bill, body, limbs, tail, prey and setting.

## Final prompts

### 01 · Creek-bank portrait

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas platypus species-detail cover and featured editorial card, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible candid wildlife photograph of exactly one wild adult platypus (Ornithorhynchus anatinus) pausing on the edge of a quiet eastern Australian forest creek at first light.
Scene/backdrop: A natural narrow freshwater creek with clear shallow water, wet stones, exposed roots, native sedges, ferns and eucalyptus forest fading into soft morning mist. The bank is intact and irregular, with no built infrastructure, enclosure, feeding station or staged prop.
Subject: Exactly one anatomically coherent adult platypus just out of the water, complete from bill to tail tip. It has a low streamlined body; dense wet dark chocolate-brown double fur with a subtly paler underside; one broad flexible slate-gray to gray-brown leathery sensory bill with small nostrils near its upper front surface; tiny eyes; no external ear pinnae; four short splayed limbs; broad strongly webbed forefeet with claws; less-webbed hind feet; and one broad dorsoventrally flattened tail covered in coarse brown fur. The animal stands naturally on the low right bank facing left toward open water, calm and alert, never upright or anthropomorphic.
Style/medium: Original photorealistic natural-history editorial wildlife photography, authentic remote field observation, restrained museum-publication quality, realistic wet fur, flexible bill skin, water, stone, roots and vegetation, no commercial gloss.
Composition/framing: Exact 3:2 horizontal environmental portrait. Keep the complete animal in the right third, occupying about 38–42 percent of the image width, with every foot and the full tail inside the frame. Preserve broad quiet creek and mist as negative space across the left half for interface typography and responsive cropping. Natural low water-level camera viewpoint.
Lighting/mood: Soft cool dawn light with a restrained warm haze entering from the upper left, elusive, calm and riverine.
Color palette: Deep brown fur, soft slate-gray bill, muted eucalyptus green, wet stone gray and warm mist.
Constraints: Exactly one animal total; unmistakable adult Ornithorhynchus anatinus; flexible mammalian bill, coherent limbs and one complete furred tail; original composition; no text, caption, logo, signature, border or watermark; no people, roads, bridges, pipes, buildings, fences, boats, pets, fish, prey, birds or other wildlife.
Avoid: hard yellow duck beak, bird feathers, beaver's naked scaly tail, otter muzzle, external ears, obvious teeth, giant claws, permanently paddle-shaped feet, missing or extra limbs, forked or duplicated tail, cartoon hybrid, smiling mascot, zoo or aquarium staging, fantasy, illustration, painting, CGI, oversaturation, teal-orange grading or stock-photo gloss.
```

### 02 · Underwater electroreceptive foraging

The first generation used the prompt below. Its overall anatomy, submerged cobble-bed search and small prey cues were retained, but the draft was rejected because the visible eye and both nostrils remained open underwater.

#### Initial generation prompt (rejected for open underwater eye and nostrils)

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas platypus electroreception and foraging gallery image 2 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible underwater natural-history photograph of exactly one wild adult platypus (Ornithorhynchus anatinus) sweeping its flexible bill just above a gravel-and-cobble streambed while passively locating small freshwater invertebrates through electroreception and touch.
Scene/backdrop: Submerged reach of a clean eastern Australian freshwater creek with naturally olive-green water, rounded gravel and cobbles, a little leaf litter, submerged roots, soft suspended particles and filtered daylight from the surface. No aquarium, ocean, coral reef or tropical-blue pool.
Subject/action: Exactly one anatomically accurate adult platypus in a low left-to-right three-quarter side view just above the bottom. The broad flexible gray sensory bill passes close over the cobbles without biting them. Because the animal is fully submerged and actively diving, its visible eye is completely closed, its ear groove is sealed and both nostrils are completely closed. The mouth stays closed and no teeth or tongue are visible. Show a low streamlined dark-brown furred body, pale underside, four short splayed limbs, two broad webbed forefeet used for propulsion, less-webbed hind feet used for steering and one continuous broad flattened furred tail. A few biologically small aquatic insect larvae or freshwater shrimp rest separately on the bottom ahead of the bill; they are quiet prey cues, not a capture spectacle.
Style/medium: Original photorealistic freshwater natural-history field photography, understated museum-publication quality, realistic underwater optics, wet fur, flexible bill skin, webbing, gravel, roots and suspended particles, restrained documentary processing.
Composition/framing: Exact horizontal 3:2 medium-wide frame designed to survive a centered 16:9 crop. Keep the complete platypus, every limb and the entire tail tip inside the central safe area with breathing room. Let the body travel diagonally through the middle of the frame and keep the small invertebrates clearly separate near the lower-right streambed.
Lighting/mood: Soft filtered creek daylight, focused, quiet and observational.
Color palette: Muted river olive, cobble gray-brown, dark brown fur, pale tan underside and restrained slate-gray bill.
Constraints: Exactly one platypus; eye, ear groove and both nostrils closed for the dive; passive sensory search only; no visible electricity, glow, lightning, sonar rings, wave graphics or active discharge; no text, labels, arrows, logo, signature, border or watermark; no people, equipment or vertebrate prey.
Avoid: open eye, visible iris or pupil, open nostril holes, open mouth, teeth, fish chase, large prey, prey inside the bill, electric arcs, luminous bill, magic particles, sound waves, ocean, coral, duck beak, beaver tail, otter face, external ears, extra or fused limbs, duplicated feet, cropped or forked tail, aquarium glass, CGI, illustration, painting, oversaturation or stock-photo gloss.
```

#### Accepted precise-object-edit prompt

```text
Use case: precise-object-edit
Asset type: Fauna Atlas platypus electroreception and foraging gallery image 2 of 6, exact 1536×1024 horizontal 3:2 landscape
Input images: Image 1 is the edit target, an otherwise accepted underwater field photograph of one platypus sweeping its bill over a cobble bed near small freshwater invertebrates.
Primary request: Change only the platypus's facial dive state. Close the visible eye completely so it becomes a natural sealed eyelid line with no visible iris, pupil or glossy open-eye surface. Close both nostrils completely so they read as two naturally sealed, flush slits at the correct position on the upper front of the flexible bill, with no open dark holes. Keep the mouth closed and preserve the existing bill shape.
Constraints: Preserve the exact same single platypus identity, head orientation, flexible gray bill, fur, complete broad flattened tail, all four limbs, webbed feet, body pose, freshwater invertebrates, streambed, roots, water particles, composition, camera viewpoint, focus, lighting, colors and photorealistic documentary style. Change no other element. Exactly one platypus. No visible electricity, text, logo, signature, border or watermark.
Avoid: open eye, visible iris or pupil, open nostril hole, enlarged or reshaped bill, altered mouth, added teeth, changed pose, changed prey, missing or extra limb, modified tail, electric arcs, sonar rings, glow, fantasy or restyling.
```

### 03 · Eastern Australian stream habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas platypus habitat gallery image 3 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original wide natural-history landscape showing exactly one wild platypus (Ornithorhynchus anatinus) at the true scale of a connected eastern Australian freshwater stream habitat.
Scene/backdrop: One coherent forest creek, not a collage: a shaded deeper pool joined visibly to a shallow cobble riffle and the continuing stream channel, with natural current, submerged stones, fallen wood, rooted earthen banks, native sedges, ferns, tree ferns and eucalyptus woodland. The banks retain shade, roots and cover. No exact locality, exposed den, barrier or human infrastructure.
Subject: Exactly one adult platypus swims calmly at the surface through the lower middle distance. It is small but findable, with a low brown head and back, flexible gray-brown bill and one subtle V-shaped wake. Keep the animal's visible anatomy coherent and do not invent an exposed tail, legs or bill details that would naturally remain underwater.
Style/medium: Original photorealistic environmental natural-history and conservation photography, understated museum-publication quality, realistic Australian riparian vegetation, stream flow, water reflections, mud, cobbles and atmospheric depth, restrained processing.
Composition/framing: Exact horizontal 3:2 very-wide establishing frame. Habitat occupies at least 85 percent of the image. Use the riffle, pool and receding channel to establish continuous freshwater movement; place the small platypus around the lower center-right, occupying about 10–12 percent of the image width and separated clearly from foreground vegetation.
Lighting/mood: Soft overcast morning light after rain, quiet, intact and ecologically grounded.
Color palette: Muted eucalyptus green, fern green, river olive, wet earth umber and stone gray.
Constraints: Exactly one animal total and it is a platypus; one connected natural stream scene; no visible burrow coordinate or implied exact refuge site; no text, labels, arrows, map overlay, logo, signature, border or watermark; no people, roads, bridges, culverts, dams, weirs, buildings, fences, boats, livestock, pets, birds or other wildlife.
Avoid: giant foreground platypus, close portrait, hidden second animal, stagnant isolated pond, concrete channel, beaver dam or lodge, obvious round den entrance, tropical jungle, mangrove, desert waterhole, mountain tourism vista, fantasy-blue water, disaster spectacle, collage, infographic, illustration, painting, CGI, oversaturation or eco-advertising gloss.
```

### 04 · Adult male hind-ankle spur

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas platypus male-morphology gallery image 4 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically restrained natural-history photograph of exactly one adult male platypus (Ornithorhynchus anatinus) walking across a low wet creek-side rock, with one naturally visible keratinous spur in the correct position on the inner hind ankle.
Scene/backdrop: Quiet eastern Australian forest stream margin with a broad wet rock, shallow freshwater, exposed roots, moss, sedges and ferns. Wild habitat only; no person, capture equipment, enclosure or staged anatomy display.
Subject/action: Exactly one robust adult male in a low left-facing side-three-quarter walking posture. He has a flexible slate-gray sensory bill, tiny eyes, no external ear pinnae, dense wet dark-brown fur, subtly paler underside, four short splayed limbs, broad webbed forefeet with claws, less-webbed hind feet and one complete broad flattened furred tail. On the inner ankle of the nearer hind leg, show exactly one modest pale keratinous spur projecting slightly backward and upward from the ankle, anatomically attached and clearly separate from the toes. The spur is visible on inspection but not oversized, weaponized or in use.
Style/medium: Original photorealistic natural-history editorial wildlife photography, candid field-documentary realism, understated museum-publication quality, exceptional wet-fur, flexible-bill, foot, spur, rock and water texture, restrained processing.
Composition/framing: Exact horizontal 3:2 medium environmental side view. Keep the entire male from bill through all four feet to the complete tail tip inside the frame. Place the nearer hind ankle against a clean patch of wet rock so the small spur remains readable without turning the image into an anatomical diagram.
Lighting/mood: Soft diffuse creek daylight, calm, precise and observational rather than threatening.
Color palette: Deep brown fur, slate-gray bill and feet, pale horn-colored spur, wet stone gray and muted fern green.
Constraints: Exactly one adult male; exactly one visible spur located only on the inner hind ankle; no venom, liquid, wound, attack or human contact; coherent platypus anatomy; no text, label, arrow, inset, logo, signature, border or watermark; no other animals.
Avoid: spur on a forefoot, toe, bill or tail; giant scorpion stinger, snake fang, tusk, horn, metal spike, dripping venom, glowing poison, biting, lunging, aggressive display, person holding the animal, female-with-spur claim, hard yellow duck beak, naked scaly beaver tail, external ears, extra limbs, duplicate spur, forked tail, zoo setting, CGI, illustration, painting, oversaturation or sensational stock imagery.
```

### 05 · Female nesting-burrow material transport

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas platypus nesting-behavior gallery image 5 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically credible candid wildlife photograph of exactly one adult female platypus (Ornithorhynchus anatinus) carrying damp nesting vegetation with her broad tail toward a naturally concealed breeding-burrow entrance above a forest creek.
Scene/backdrop: Intact rooted earthen bank immediately above a quiet eastern Australian freshwater stream, with dark moist soil, eucalyptus leaf litter, native grasses, ferns, moss and interlaced roots. One modest irregular burrow entrance sits above the waterline and is partly concealed by roots and vegetation; only the entrance is visible, never a cutaway or exact tunnel plan.
Subject/action: Exactly one adult female platypus moves low toward the entrance. She has a flexible gray-brown bill, tiny eyes, no external ear pinnae, dense wet dark-brown fur, pale underside, four short splayed limbs, webbed forefeet, less-webbed hind feet and one complete broad flattened furred tail. Her tail curves naturally under and alongside the body to press one small loose bundle of damp grasses, leaves and bark against the underside as she transports nest material. She does not carry material in the bill. Show no spur on either visible hind ankle and no young, eggs, nipple or pouch.
Style/medium: Original photorealistic natural-history field photography, candid remote observation, understated museum-publication quality, realistic fur, flexible bill, damp vegetation, roots, mud and leaf litter, restrained documentary processing.
Composition/framing: Exact horizontal 3:2 medium-wide environmental frame. Keep the complete female, all limbs, the full tail, the modest vegetation bundle and the above-water entrance inside the frame. Place the animal in the lower-left-to-center moving right toward the entrance, while retaining enough creek water at the bottom edge to establish the bank relationship.
Lighting/mood: Soft shaded morning light under riparian vegetation, private, purposeful and unsentimental.
Color palette: Dark earth brown, wet fur brown, muted eucalyptus green, moss green and river gray.
Constraints: Exactly one adult female and no other animal; one small bundle carried with the tail; entrance above water and naturally concealed; no visible spur, eggs, hatchlings or older young; the scene must not disclose or imply a real den coordinate; no text, labels, arrows, logo, signature, border or watermark; no people or equipment.
Avoid: bird nest, twig bowl, giant white eggs, eggs outdoors or underwater, exposed chamber cutaway, architectural tunnel diagram, beaver lodge, underwater entrance, mouth-carrying, forepaw basket, pouch, nipples, young riding on the back, adult male spur, human handling, hard duck beak, beaver's scaly tail, extra limbs, duplicated tail, zoo set, CGI, illustration, painting, fantasy or sentimental staging.
```

### 06 · Stream monitoring and riparian restoration

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas platypus conservation gallery image 6 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create an original scientifically grounded conservation-documentary photograph of a small field team conducting non-invasive water monitoring beside modest native riparian plantings while exactly one wild platypus (Ornithorhynchus anatinus) swims undisturbed at a safe distance.
Scene/backdrop: A natural eastern Australian forest creek with clear connected water, gravel and cobbles, fallen wood, eucalyptus woodland, ferns and intact bank cover. Along one previously disturbed section of the right bank, show a small realistic patch of young native sedges and shrubs protected by a few simple unbranded biodegradable or untreated-wood guards; restoration remains modest and integrated into the living stream.
People/action: Exactly two adult conservation field workers in practical neutral khaki and gray-green clothing with no readable insignia. One kneels at the right bank and fills one small clear water-sample bottle while wearing plain protective gloves. The second stays farther back and records observations on a clipboard. Neither person enters deep water, approaches the animal, uses a net or handles wildlife.
Animal: Exactly one small adult platypus swims calmly through the lower foreground-middle water with a flexible gray-brown bill, low dark-brown head and back, and one natural V-shaped wake. It remains clearly separated from both workers and all equipment. Show only anatomy naturally visible at the surface; do not add a tag, collar, transmitter or injury.
Style/medium: Original photorealistic field-conservation documentary photography, candid and practical rather than promotional, understated museum-publication quality, realistic water, bank soil, plantings, clothing and working posture, restrained processing.
Composition/framing: Exact horizontal 3:2 wide environmental frame. Let the stream and riparian corridor dominate. Place both small workers and the planting patch along the right third, and the complete visible surface silhouette of the platypus in open water near the lower center, with substantial distance between people and animal.
Lighting/mood: Soft overcast morning light, patient, collaborative and evidence-led, with no triumphal or rescue-drama staging.
Color palette: River olive, cobble gray, eucalyptus green, earth brown and muted khaki.
Constraints: Exactly two people and exactly one platypus; water sampling and note-taking only; modest riparian planting without any claim that this moment proves population recovery; no capture, handling, feeding, tagging, release or exposed den; no readable text, signboard, banner, brand, logo, signature, border or watermark; no vehicle, heavy machinery, pets, fish, birds or other wildlife.
Avoid: scientist touching or holding a platypus, trapping net, fyke net, cage, transport crate, injection, surgery, transmitter attachment, release ceremony, posed team portrait, cheering, giant engineered channel, concrete dam, bulldozer, vast plantation, chemical spraying, polluted-disaster spectacle, animal in distress, crowds, invented uniform insignia, infographic, CGI, illustration, painting, oversaturation or NGO-advertising gloss.
```

## Static validation

- All six PNG sources are 1536 × 1024, 8-bit RGB, non-interlaced and contain no alpha channel.
- All six derived WebP runtime assets decode at 1536 × 1024; each runtime basename matches its source after removing `-source`.
- Frame 01 keeps the complete animal on the right with broad left-side negative space for the cover layout.
- Frame 02 is the accepted facial-state edit: the eye, nostrils and mouth are closed, no electrical effect is visible, and the body, visible webbed feet, full tail and small freshwater invertebrates remain in frame.
- Frame 03 presents one connected pool-and-riffle forest stream and one small surface-swimming platypus without exposing a den location.
- Frame 04 shows one modest spur attached to the inner hind ankle and no venom delivery or human interaction.
- Frame 05 shows one spur-free female transporting a small vegetation bundle with her tail toward a concealed above-water entrance; no eggs, young, pouch or nipples are shown.
- Frame 06 shows exactly two workers and one unhandled platypus, with water monitoring, small-scale riparian planting and clear physical separation between people and wildlife.
