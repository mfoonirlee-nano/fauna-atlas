# Nile crocodile image set

These six original project images were generated with Codex's built-in image generation tool for the Fauna Atlas Nile crocodile profile. They use restrained photorealistic natural-history photography and keep *Crocodylus niloticus* distinct from the gharial through a broad, sturdy V-shaped snout, robust body, short splayed limbs, and absence of a male `ghara`. The sequence covers an adult portrait, water-ripple sensing, socially influenced gaping, seasonal floodplain movement, buccal transport of hatchlings, and protected human water access.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/nile-crocodile/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG through `npm run compress`
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Credit shown in the product: `Fauna Atlas · AI 生成原创图像`

| No. | File | Accepted observation |
| --- | --- | --- |
| 01 | `01-river-sandbank-adult-source.png` | One complete adult on an open sandbank; broad snout, closed jaws, coherent body and visible tail tip |
| 02 | `02-ripple-sensory-hunt-source.png` | One complete juvenile, four limbs and tail visible; one physical ripple and subtle non-glowing jaw pores |
| 03 | `03-social-gaping-source.png` | Exactly three separated crocodiles; one gapes, two keep their jaws closed; all three tail tips remain in frame |
| 04 | `04-seasonal-floodplain-movement-source.png` | One radio-tagged adult in a connected pan-channel-river landscape; revised once to restore the cropped tail tip |
| 05 | `05-hatchling-mouth-transport-source.png` | One complete female gently holds exactly two live hatchlings in the buccal cavity; opened hole nest, broken shell fragments and no intact exposed eggs |
| 06 | `06-protected-water-access-source.png` | Exactly three adults stay inside a fixed exclusion bay; one distant complete crocodile remains outside, separated by at least three crocodile body lengths of open water |

All six accepted PNGs were reviewed at original resolution. They contain no text, logos, signatures or watermarks. Frame 04's first generation was rejected because the tail continued through the right edge; the accepted revision pulls back and restores one tapering tail tip. Frame 05 received a separate close crop during static review to confirm two distinct, intact hatchlings rather than teeth, shell fragments or a third young animal. Frame 06's original and first distance revision were rejected because the crocodile remained less than several body lengths from the barrier; the accepted second revision removes that near silhouette and places one smaller complete crocodile in distant open water.

## Evidence boundaries

- **Adult size:** males up to 5.5 m are rare today. Frame 01 shows an unmeasured large adult and makes no record-size claim. The Crocodile Specialist Group account supports the size and rarity boundary.
- **Sensory pits:** the approximately 9,000 integumentary sensory organs reported for Nile crocodiles are microscopic anatomical structures. Frame 02 shows only subtle skin pores. The visible ripple is a natural scene cue, not a diagram of the 0.08 mN neural threshold or a claim that a specific prey was detected.
- **Gaping:** 300 hours of observation at Nyamithi Pan yielded 1,120 gaping events; duration covaried with air temperature and the number of nearby crocodiles. Frame 03 therefore avoids fixing the open mouth to either cooling or threat display.
- **Movement:** the 50-crocodile, 18-month Ndumo study documented a local seasonal shift between reserve water bodies and the Rio Maputo system. Frame 04 visualizes connected habitat and radio telemetry, not a universal migration distance. The transmitter is small and dorsal; no collar or release handling is shown.
- **Mouth transport:** Pooley's controlled observations documented live young and unhatched eggs carried in the buccal pouch. A four-year Lake St Lucia camera study independently documented nest opening and repeated nest-to-water transport in the wild. Frame 05 depicts two live hatchlings without implying that every female carries the same number or that the image is a wild photograph of the original experiment.
- **Coexistence:** the Lake Nasser shoreline survey found higher crocodile detection near flat shorelines and fishing camps. It did not show that crocodiles caused fish declines or that exclusion bays were experimentally validated there. Frame 06 combines that overlap with the Crocodile Specialist Group's separate recommendation for barriers, jetties and protected water access.

Primary references:

- Crocodile Specialist Group 2019 species account: <https://www.iucncsg.org/365_docs/attachments/protarea/7386996acf2d72b2379d0f905b2c3200.pdf>
- Leitch & Catania 2012, sensory organs: <https://doi.org/10.1242/jeb.076836>
- Price et al. 2022, gaping: <https://doi.org/10.1016/j.beproc.2022.104772>
- Calverley & Downs 2015, movement: <https://doi.org/10.4102/koedoe.v57i1.1234>
- Combrink, Warner & Downs 2016, wild maternal care: <https://doi.org/10.1016/j.beproc.2016.10.014>
- Pooley 1977, buccal transport: <https://doi.org/10.1111/j.1469-7998.1977.tb04137.x>
- Ezat et al. 2025, Lake Nasser occurrence: <https://doi.org/10.1002/ece3.71970>

## Final prompts

### 01 · River sandbank adult

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Nile crocodile species gallery image 1 of 6, cover image, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a restrained professional natural-history wildlife photograph of exactly one anatomically accurate adult male Nile crocodile (Crocodylus niloticus) basking on an open sandy bank beside a broad East or southern African river.
Scene/backdrop: A wide connected tropical African river in the dry season, natural muted green-brown current, pale open sandbank, sparse reeds well away from the crocodile, softly layered riparian woodland and low escarpment in atmospheric distance. Wild protected-river setting with no identifiable exact location and no human trace.
Subject: Exactly one robust adult male Nile crocodile, large but not claimed to be a record-size 5.5 m animal, in a calm natural basking posture with belly close to the sand and short limbs splayed low. Show the complete animal from the clearly tapering tip of one strong laterally compressed tail through all four feet to the full head and snout. The species must have a broad, strong, moderately long V-shaped Crocodylus snout, much wider than a gharial snout, with no bulb or ghara. The head is broad and low, eyes and paired nostrils on top, jaws closed or only naturally resting with a few interlocking teeth visible. Body is muscular dark olive-brown with realistic rectangular dorsal scutes, lighter flanks, four short strong limbs and coherent toes.
Style/medium: Original photorealistic high-end natural-history editorial photography, realistic scales, skin folds, sand grains, water and imperfect wild texture, restrained documentary processing, not glossy stock photography.
Composition/framing: Exact horizontal 3:2 environmental portrait at 1536×1024. Place the complete animal across the lower middle and keep every foot, full snout, and the continuous tail tapering to a visible point comfortably inside the frame with generous crop-safe margin. Low eye-level long-lens field-camera perspective from a respectful distance. Habitat remains readable.
Lighting/mood: Soft warm early-morning sunlight with gentle natural shadows, quiet, spacious, watchful.
Color palette: Pale warm sand, muted olive-green river, dark olive-brown scales, hazy sage foliage, restrained ochre light.
Constraints: Exactly one animal total; one anatomically coherent head, one broad V-shaped snout, four limbs, four feet, and one continuous complete tail; no text, caption, logo, signature, border or watermark; no people, boats, buildings, fences, roads, fishing gear, tags, collars, nests, eggs, hatchlings, prey or other wildlife.
Avoid: extremely long needle-thin gharial snout, U-shaped alligator head, narrow fish-specialist jaws, ghara, horn, crest, giant exposed teeth, open aggressive roar, duplicated jaw, extra nostrils, extra limbs, fused feet, missing or cropped tail tip, forked tail, dinosaur spikes, fantasy armor, high-walking legs, monster scale, attack pose, blood, captivity, zoo staging, stock-photo gloss, oversaturation, teal-orange grading, CGI, illustration or painting.
```

### 02 · Ripple sensing

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Nile crocodile sensory-ecology gallery image 2 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a scientifically grounded natural-history photograph of exactly one juvenile Nile crocodile (Crocodylus niloticus) detecting a tiny natural water-surface ripple at dusk, with its real integumentary sensory pits visible as subtle dark pores around the jaws.
Scene/backdrop: A quiet shallow margin of an African freshwater river at dusk, olive-brown water with faint suspended silt, a low muddy-sand bank, a few natural reeds far behind, softly blurred riparian vegetation. A small concentric physical ripple appears on the water about one head-length in front of the crocodile, as if caused by unseen aquatic prey beneath the surface; no prey animal is visible.
Subject/action: Exactly one juvenile Nile crocodile, about 1.2 m long, floating almost motionless just at the surface with only the broad low head and armored back breaking the water. Show the complete continuous animal through the water, from the full broad moderately long V-shaped Crocodylus snout to the one clearly tapering tail tip, with all four short splayed limbs discernible beneath the shallow surface. The eye is directed toward the small ripple. The snout must be broad and sturdy, never the long needle-thin snout of a gharial. Around the upper and lower jaw scales, show many tiny irregular dark pinprick sensory pores integrated naturally into the skin, subtle and anatomical, not decorative dots. Juvenile pattern has realistic dark cross-bands over olive-brown scales.
Style/medium: Original photorealistic professional natural-history field photography, high-detail skin and water texture, realistic refraction and shallow depth of field, restrained scientific editorial treatment.
Composition/framing: Exact horizontal 3:2 at 1536×1024, low water-level three-quarter view. Keep the complete crocodile fully inside frame, including every foot and the tapering tail tip, occupying no more than 72 percent of frame width. Head near the lower-right middle with quiet open water and the small ripple in front; enough depth of field for the jaw pores, body outline and tail to remain readable.
Lighting/mood: Diffuse blue-gold dusk light, quiet concentration, observational rather than dramatic.
Color palette: Muted olive, brown, silt beige, slate blue and restrained dusk gold.
Constraints: Exactly one crocodile total; exactly one small natural ripple; broad V-shaped Nile crocodile snout; real tiny dark sensory pores only on scales, especially around jaws; one coherent head, four limbs, four feet and one full continuous tail; no visible prey, no text, caption, logo, signature, border or watermark.
Avoid: glowing dots, luminous nerves, radar rings, sonar overlay, electric arcs, magical aura, diagram arrows, large stylized waves, multiple crocodiles, fish breaking the surface, broad U-shaped alligator head, needle-thin gharial snout, ghara, open roar, giant teeth, extra limbs, fused feet, cropped tail, forked tail, monster attack, blood, zoo pool, aquarium, CGI, illustration, painting, heavy HDR or oversaturation.
```

### 03 · Social gaping

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Nile crocodile behavioural-ecology gallery image 3 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a restrained wild natural-history photograph of exactly three anatomically accurate Nile crocodiles (Crocodylus niloticus) spaced along a shallow South African pan shoreline, with exactly one naturally gaping while two rest with closed jaws. The scene illustrates that gaping duration can relate to both temperature and nearby conspecifics without declaring a single cause.
Scene/backdrop: A natural shallow freshwater pan at Ndumo-like lowveld, gently sloping mud-and-sand shore, muted olive water, sparse reed fringe and dry acacia woodland in soft distance. Wild reserve setting, no structures or human traces.
Subjects/action: Exactly three Nile crocodiles total, all fully visible and separated, with broad sturdy moderately long V-shaped Crocodylus snouts, muscular olive-brown bodies, realistic dorsal scutes, four short splayed limbs each and one continuous laterally compressed tail each. One medium adult in the foreground-middle calmly holds its jaws open at a natural approximately 25-degree angle, showing normal conical teeth and pale mouth interior without roaring, lunging or facing the camera. A second adult rests several body lengths away near shallow water with jaws fully closed. One smaller subadult lies farther back with jaws closed. Their body orientations differ naturally; none touches or overlaps another.
Style/medium: Original photorealistic professional natural-history field photography, candid long-lens observation, real scales, mud, water and heat-softened atmosphere, restrained museum-publication color.
Composition/framing: Exact horizontal 3:2 at 1536×1024, medium-wide environmental scene. Keep all three entire crocodiles inside the frame with every head, foot and clearly tapering tail tip visible and comfortable edge margins. Foreground gaping animal occupies no more than 42 percent of image width; other two remain countable and anatomically readable. Do not stack or tangle silhouettes.
Lighting/mood: Warm late-morning natural sunlight with believable shadows, quiet alertness, observational and unsensational.
Color palette: Muted olive water, gray-brown scales, dry sand, ochre mud, dusty sage vegetation.
Constraints: Exactly three crocodiles; exactly one open mouth and exactly two closed mouths; all three complete and spatially separate; no prey, feeding, fighting or vocalization effects; no text, caption, logo, signature, border or watermark; no people or other animals.
Avoid: every animal gaping, aggressive roaring, threat charge, wrestling, biting, death roll, feeding, blood, giant red mouth, smile-like human expression, broad U-shaped alligator head, extremely narrow gharial snout, ghara, horn, oversized random teeth, extra heads, extra limbs, fused feet, overlapping bodies, cropped tails, forked tails, dense crocodile crowd, zoo enclosure, concrete pond, CGI, illustration, painting, heavy HDR, stock-photo gloss or oversaturation.
```

### 04 · Seasonal floodplain movement

The initial generation preserved the intended landscape and small dorsal transmitter but cropped the tail at the right edge. It was rejected. The following focused edit prompt produced the accepted source and runtime image.

#### Initial generation prompt

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Nile crocodile movement-ecology gallery image 4 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a scientifically grounded conservation-telemetry photograph of exactly one complete adult Nile crocodile (Crocodylus niloticus) moving through a shallow seasonal floodplain channel that links a pan to a larger river, with one small realistic dorsal radio transmitter.
Scene/backdrop: A Ndumo-like South African floodplain during the seasonal transition: a shallow muddy pan in the near distance connected by a narrow natural water channel to a broader flowing river in the middle distance, with low sedges, sparse reeds, patches of wet mud and dry lowveld woodland. The water connection must look natural and traversable, not a diagram or engineered canal.
Subject/action: Exactly one adult Nile crocodile, about 3 m long, moving slowly through ankle-deep water toward the broader channel, viewed from a slightly elevated side-three-quarter field-camera position. Keep the entire crocodile visible from its broad sturdy V-shaped snout to one clearly tapering tail tip, with all four short splayed limbs and feet readable. The animal has realistic dark olive-brown scales and dorsal scutes. Attach one small matte dark-gray wildlife radio-telemetry unit securely and unobtrusively on the upper dorsal scutes behind the shoulders, with a single short flexible antenna lying back along the body; no collar, harness, rope, flag, glowing light or oversized box.
Style/medium: Original photorealistic field-conservation and natural-history photography, candid researcher viewpoint, realistic shallow water, mud, vegetation, scales and telemetry hardware, restrained scientific editorial processing.
Composition/framing: Exact horizontal 3:2 at 1536×1024, wide environmental frame. Habitat is at least 65 percent of the image. Place the complete crocodile crossing the lower-middle diagonal, occupying no more than 58 percent of frame width. Keep the full snout, every foot and the continuous tail tip comfortably inside the frame. Show the connected pan, channel and river as one coherent landscape without labels.
Lighting/mood: Soft overcast late-afternoon light after seasonal water return, patient, purposeful, observational.
Color palette: Muted floodplain olive, silt brown, wet charcoal mud, dusty sage and soft gray sky.
Constraints: Exactly one crocodile; exactly one small dorsal telemetry unit; complete coherent body and tail; broad V-shaped Nile crocodile snout; no text, map, dotted line, arrows, labels, logo, signature, border or watermark; no people, vehicles, boats or other animals.
Avoid: collar around neck, chest harness, rope, tracking flag, giant satellite dish, glowing GPS beacon, electronics embedded in flesh, injury, blood, handling or release scene, extremely narrow gharial snout, broad U-shaped alligator head, ghara, extra limbs, fused feet, cropped tail, forked tail, high-running pose, migration spectacle, concrete canal, dam, zoo pond, CGI, illustration, painting, heavy HDR or oversaturation.
```

#### Accepted tail-restoration prompt

```text
Use case: precise-object-edit
Asset type: Fauna Atlas Nile crocodile movement-ecology gallery image 4 of 6, exact 1536×1024 horizontal 3:2 landscape
Input images: Image 1 is the edit target and must retain its crocodile, natural African floodplain channel, distant river, overcast lighting, colors and documentary realism.
Primary request: Reframe Image 1 noticeably wider and reconstruct only the missing end of the crocodile's tail so the entire adult Nile crocodile is fully visible.
Composition/framing: Pull the camera back enough that the crocodile occupies no more than 63 percent of the frame width. Preserve the head at left and reconstruct the same one continuous laterally compressed tail from its existing base through a natural gradual taper to exactly one clearly visible tail tip, comfortably inside the right edge with at least a body-width of water margin. Keep the exact 1536×1024 horizontal 3:2 canvas.
Invariants: Preserve the same single crocodile identity and broad V-shaped snout, same low walking/swimming posture, realistic dorsal scutes, all existing limbs, exact one small dark-gray dorsal radio transmitter and its short antenna, shallow muddy water, connected floodplain channel, distant river, vegetation, gray sky, lighting, color and photorealistic field-documentary style. Change only framing and the cut-off tail end.
Constraints: Exactly one crocodile, exactly one dorsal telemetry unit, complete full snout, limbs and one tail; no added animals, people, text, logo, watermark, border, map marks or equipment.
Avoid: cropped tail, forked tail, duplicate tail, extra limbs, altered head, ghara, collar, harness, giant transmitter, injury, CGI, illustration or oversaturation.
```

### 05 · Hatchling mouth transport

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Nile crocodile parental-care gallery image 5 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a restrained scientifically grounded natural-history photograph of exactly one adult female Nile crocodile (Crocodylus niloticus) gently transporting exactly two live hatchlings together in her buccal pouch from an opened hole nest toward adjacent shallow water.
Scene/backdrop: A quiet Lake St Lucia-like open sandy river or estuary bank at soft dawn. One subtle freshly opened hole-nest depression sits higher on the bank with disturbed sand and only a few broken eggshell fragments; no intact exposed eggs. A short natural path leads to calm ankle-deep water. Sparse low vegetation remains away from the nest.
Adult subject/action: Exactly one complete adult female Nile crocodile, broad sturdy V-shaped snout and no ghara, moving low and slowly along the wet sand at the waterline. Her jaws are held only slightly and gently open. Inside the broad oral/buccal cavity are exactly two small intact hatchlings held crosswise with ample space, supported rather than bitten. Each hatchling has one coherent head, narrow juvenile snout, banded body and visible little tail; both appear alive, calm and uninjured. The adult's teeth do not pierce or clamp either hatchling. Show her complete body, all four short splayed limbs and one strong continuous tail tapering to a clearly visible point.
Style/medium: Original photorealistic professional conservation and natural-history field photography, candid long-lens observation, realistic scales, sand tracks, damp skin, water and hatchling bands, restrained museum-publication processing.
Composition/framing: Exact horizontal 3:2 at 1536×1024, medium-wide side-three-quarter frame. Keep the entire mother inside frame from full snout to tail tip with generous crop-safe margin; all four feet visible. Her head is large enough that exactly two distinct hatchlings inside the slightly open jaws are clearly countable and anatomically readable. Keep the opened hole nest in the middle distance without turning the scene into a cutaway or diagram. No hatchlings outside the mouth.
Lighting/mood: Soft warm dawn light, vigilant and delicate, observational without sentimental staging.
Color palette: Pale damp sand, muted olive water, dark olive-brown adult scales, soft gold dawn and dark-banded hatchlings.
Constraints: Exactly one adult female plus exactly two live hatchlings, three crocodilians total; both hatchlings are inside the buccal pouch and uninjured; adult has broad V-shaped Nile crocodile snout and no ghara; one opened hole nest; only a few broken shell fragments and no intact eggs; no text, labels, arrows, logo, signature, border or watermark; no people, predators or other animals.
Avoid: swallowing, feeding, chewing, biting pressure, impaled hatchlings, blood, saliva strings, dead young, hatchlings disappearing down throat, more or fewer than two hatchlings, hatchlings outside mouth, babies riding on back, anthropomorphic cuddle or smile, adult male ghara, long needle-thin gharial snout, broad U-shaped alligator head, mound nest, bird nest, pile of chicken eggs, transparent underground cutaway, extra limbs, fused feet, cropped adult tail, forked tail, zoo enclosure, CGI, illustration, painting, heavy HDR or oversaturation.
```

### 06 · Protected water access

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Nile crocodile coexistence gallery image 6 of 6, exact 1536×1024 horizontal 3:2 landscape, original project asset
Primary request: Create a scientifically grounded conservation-documentary photograph of a fixed protected water-access platform on a flat African lake shore, with exactly three adults using the structure safely and exactly one distant complete Nile crocodile (Crocodylus niloticus) remaining in open water. The image presents a Crocodile Specialist Group prevention recommendation, not a staged attack or a claim of universal success.
Scene/backdrop: A broad Lake Nasser-like freshwater reservoir with muted blue-green water, flat sandy-rocky shoreline, arid ochre hills in atmospheric distance and one small simple fishing camp far back without signs or logos. At the water edge stands a practical modest crocodile-exclusion access bay: a short stable timber-and-metal jetty with waist-high railings and robust vertical metal mesh extending down into the water to enclose a small rectangular washing and water-collection area. It looks maintained and functional, not luxurious, militarized or cage-like around people.
People/action: Exactly three adult local lake users total in practical unbranded earth-tone clothing. All remain entirely inside the protected railing: one fills a plain water container, one rinses fishing equipment without bait or fish remains, and one waits on the dry platform. Natural candid postures; nobody points at, feeds, approaches or handles wildlife.
Crocodile: Exactly one Nile crocodile total, far outside the exclusion barrier and separated by substantial open water, calmly swimming parallel to shore. Show its entire coherent silhouette just beneath the clear shallows from broad V-shaped snout to clearly tapering tail tip, small in frame but anatomically identifiable, with no ghara. It never approaches the platform.
Style/medium: Original photorealistic field-conservation documentary photography, practical and observational, realistic weathered timber, metal mesh, water, clothing, scales and landscape, restrained scientific editorial processing.
Composition/framing: Exact horizontal 3:2 at 1536×1024, wide environmental view. Place the protected platform and exactly three people on one lower third, the complete distant crocodile in clean open water on the opposite lower third, with at least several body lengths of visible water separating them. Keep all people, platform edges and the full crocodile inside frame. Habitat dominates.
Lighting/mood: Clear soft early-morning light, calm, pragmatic and risk-aware, no drama.
Color palette: Muted blue-green water, ochre stone and sand, weathered brown timber, dull gray metal, restrained khaki clothing.
Constraints: Exactly three adults and exactly one crocodile; all people remain behind the complete protective barrier; one complete distant crocodile outside it; no contact, attack, pursuit or animal handling; no text, sign, warning icon, label, logo, signature, border or watermark; no children or other animals.
Avoid: open unprotected wading, people standing in crocodile water, crocodile inside barrier, crocodile beside hands or feet, attack, chase, feeding, fish scraps, bait, blood, gun, trap, capture, relocation, celebration pose, NGO banner, invented safety sign, prison cage, barbed wire, giant industrial dock, concrete resort, tourist crowd, boats, broad U-shaped alligator head, needle-thin gharial snout, ghara, extra people, multiple crocodiles, cropped crocodile tail, CGI, illustration, painting, stock-advertising gloss, heavy HDR or oversaturation.
```

The base generation preserved the platform and people but placed the crocodile too close to the barrier. A first edit increased the gap but still fell short of several body lengths, so it was rejected. The accepted asset used these two sequential distance edits:

```text
Use case: precise-object-edit. Edit the provided Fauna Atlas Nile crocodile protected-water-access image only. Keep the exact horizontal 3:2, 1536x1024 canvas and preserve pixel-close the arid reservoir landscape, mountains, water, shoreline, fixed timber-and-metal exclusion platform, protective mesh, lighting, colors, and exactly three adult people who all remain inside the barrier. Move the existing single Nile crocodile farther away from the platform into the open water at the lower-right / right-middle of the frame and render it smaller with distance, so at least several of its own body lengths of clearly visible open water separate it from the nearest barrier edge. Remove the old nearby crocodile completely and reconstruct calm natural water there. Retain exactly one crocodile total, outside the barrier, calmly swimming parallel to shore; its entire coherent silhouette from broad sturdy V-shaped snout to tapering tail tip must remain visible and anatomically recognizable, with no ghara. Do not change or add people, structures, containers, camps, animals, boats, signs, text, logos, borders, weapons, bait, fish remains, attacks, pursuit, handling, blood, cages, barbed wire, or visual effects. Photorealistic restrained field-conservation documentary image; no CGI or illustration.
```

```text
Use case: precise-object-edit. Preserve the provided image pixel-close except for the crocodile and the water immediately around it. The current crocodile is still too close to the protected platform. Remove it completely and reconstruct calm water at its current location. Place exactly one much smaller, complete Nile crocodile far out in open water near x=0.82, y=0.56, swimming parallel to shore. Its full body length should occupy about 9 to 11 percent of the 1536-pixel canvas width, while the nearest edge of the protective barrier ends near x=0.50, leaving at least three crocodile body lengths of uninterrupted visible water between barrier and crocodile. Keep the crocodile anatomically coherent and recognizable with a broad sturdy V-shaped snout and one tapering tail, but appropriately subtle at distance. Preserve exact 1536x1024 framing, mountains, shoreline, platform, mesh, containers, lighting, colors, and exactly three adult people inside the barrier. Exactly one crocodile total. Add nothing else. No text, logo, sign, watermark, boat, animal, attack, bait, fish, blood, weapon, CGI, or illustration.
```
