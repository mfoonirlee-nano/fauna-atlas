# South American Giant Centipede image set

Codex built-in imagegen created these six original project images on 2026-09-01 for the Fauna Atlas *Scolopendra gigantea* profile. The set covers an adult portrait, a dorsal morphology view, a head-and-forcipule macro, a nocturnal discoid-cockroach-style encounter, a limestone thorn-scrub habitat reconstruction, and a cave-ceiling scene based on the background of published bat records. These generated scenes do not document a specimen, locality, observation, interaction, experiment, or result.

- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/south-american-giant-centipede/*.webp`
- Dimensions: 1536 × 1024
- Source compression: TinyPNG succeeded for all six source PNGs, including the frame 04 revision, on 2026-09-01
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成科学情景重建`

| No. | Source file | Runtime file | Intended use and accepted observation |
| --- | --- | --- | --- |
| 01 | `01-caribbean-limestone-adult-cover-source.png` | `01-caribbean-limestone-adult-cover.webp` | Cover portrait of one complete dark chestnut adult crossing pale limestone beside wet leaf litter, with the full antennae and terminal legs inside frame |
| 02 | `02-dorsal-segment-and-leg-profile-source.png` | `02-dorsal-segment-and-leg-profile.webp` | Clean dorsal overview of one complete centipede showing a flattened segmented trunk, one repeated leg pair per visible trunk segment, long antennae and elongated terminal legs; the generated pixels do not verify an exact count of 21 walking-leg pairs or 17 antennal articles |
| 03 | `03-head-forcipules-macro-source.png` | `03-head-forcipules-macro.webp` | Deliberate close crop of the head and front trunk showing paired antennae, a small lateral eye cluster and the curved forcipules in a closed neutral posture |
| 04 | `04-nocturnal-discoid-cockroach-encounter-source.png` | `04-nocturnal-discoid-cockroach-encounter.webp` | One centipede and one separate discoid-cockroach-style insect face each other across an uninterrupted leaf-litter gap; no body or appendage touches, crosses or overlaps, and the scene references an existing cockroach-feeding record without verifying *B. discoidalis* identity or independently proving diet |
| 05 | `05-limestone-thorn-scrub-habitat-source.png` | `05-limestone-thorn-scrub-habitat.webp` | One small centipede moves beneath a limestone overhang with thorn scrub visible outside; the frame reconstructs habitat structure and does not depict a named island, country or survey site |
| 06 | `06-cave-ceiling-bat-context-source.png` | `06-cave-ceiling-bat-context.webp` | One centipede and one folded-wing bat occupy separate parts of a cave ceiling with a broad rock gap between them; the scene supplies context for existing cave records without showing or proving predation |

## Static verification

The source PNGs and runtime WebPs passed original-resolution visual inspection on 2026-09-01. ImageMagick decoded all 12 files at 1536 × 1024 in sRGB and reported each file as opaque and single-frame. The PNG and WebP versions preserve the complete subject in frames 01 and 02, the paired front structures in frame 03, the subject separation in frames 04 and 06, and the environmental scale in frame 05. All 12 files have distinct SHA-256 hashes.

## Evidence boundaries

- AI-generated morphology cannot identify *Scolopendra gigantea*. A species determination requires a collected or observed specimen, locality, diagnostic characters and a taxonomic key or specialist assessment.
- Color, apparent size and proportions vary with lighting, posture, age, population and generated-image error. No frame measures body length or establishes a maximum size.
- Frame 02 offers a readable overview of repeated trunk segments and paired legs. Do not use it to verify exactly 21 pairs of walking legs or 17 articles in either antenna; count those characters from examined specimens and taxonomic descriptions.
- Frame 03 presents representative head structures. It cannot diagnose the species, establish sensory performance, show venom delivery or measure a forcipule, antenna or eye.
- Frame 04 references an existing record of *Scolopendra gigantea* feeding on the discoid cockroach *Blaberus discoidalis*. The generated pixels cannot verify that the depicted insect is *B. discoidalis*, independently prove the species' diet, or document capture, preference, hunting success or diet proportions.
- Frame 05 reconstructs limestone shelter and thorn-scrub structure. It does not identify a real cave, island, country or sampling site, and it cannot establish occupancy, density or range.
- Frame 06 keeps the bat and centipede physically separate. It only presents the background of existing cave records; the image cannot prove stalking, capture, envenomation, feeding or bat predation.
- No frame establishes distribution, abundance, population trend, IUCN status, legal protection or medical risk to people.

## Shared morphology anchor

The prompts asked imagegen for one broad, dorsoventrally flattened scolopendrid with a reddish-brown cephalic plate, dark chestnut tergites, yellow-orange walking legs, two long tapering antennae, curved ventral forcipules and an elongated terminal leg pair. Full-body frames kept the animal low to the substrate and inside the canvas. The prompts excluded millipede-like paired leg sets on each apparent segment, cylindrical bodies, scorpion tails, insect wings, vertebrate features, text, labels, logos and watermarks. These instructions guided visual consistency; they do not turn the generated animal into a voucher or diagnostic plate.

## Final prompts

### 01 · Caribbean limestone adult cover

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas South American Giant Centipede cover image 1 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original natural-history photograph of exactly one complete adult South American Giant Centipede, Scolopendra gigantea, moving across a pale weathered limestone slab beside damp leaf litter in a generalized Caribbean and northern South American forest setting.
Animal: Show one broad dorsoventrally flattened scolopendrid with a coherent reddish-brown head plate, dark chestnut-brown dorsal trunk plates, one yellow-orange walking-leg pair attached to each visible leg-bearing segment, two long tapering segmented antennae, and one elongated backward-pointing terminal leg pair. Keep the body low and slightly curved as it travels from right toward left. The antennae, head, full trunk, every visible leg tip and both terminal legs remain inside frame. Do not add a second centipede or any prey.
Scene/backdrop: Pale pitted limestone occupies the right and lower center. Wet brown leaves, a decaying branch, dark soil and a few small green plants border the rock. The environment suggests a humid limestone forest floor after rain without identifying an island, country, cave or protected area.
Style/medium: Original photorealistic professional field-macro wildlife photography, restrained museum-publication color, credible hard cuticle, stone pores, damp leaves and shallow environmental depth.
Composition/framing: Exact landscape 3:2. Place the full centipede across the center-right around x=0.66 y=0.57. Preserve broad darker leaf-litter negative space on the left for responsive page typography. Use a high oblique field view that keeps the whole outline and the pale limestone readable.
Lighting/mood: Soft diffuse light after rain, quiet observational mood, natural reflections on the cuticle without glossy plastic highlights.
Evidence boundary: This generated cover represents one plausible adult. It is not a voucher, locality record, field observation, calibrated size image or species diagnosis.
Constraints: Exactly one complete centipede and no other animal; coherent flattened scolopendrid body; no cropped antenna or terminal leg; no ruler, text, labels, arrows, logo, signature, border or watermark.
Avoid: millipede, paired double-leg clusters on each apparent segment, cylindrical body, house centipede, insect wings, scorpion tail, lobster claws, duplicated head, extra antennae, fused legs, human hand, terrarium, captive enclosure, attack pose, venom droplets, prey, blood, CGI, illustration, painting, fantasy glow, oversaturation or monster scale.
```

### 02 · Dorsal segment and leg profile

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas South American Giant Centipede dorsal-morphology gallery image 2 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original top-down natural-history morphology image of exactly one complete adult Scolopendra gigantea lying straight in a neutral walking posture on one plain dark gray limestone surface.
Animal: Present the complete dorsal outline from the paired antennae at left to the elongated terminal legs at right. Aim for a broad reddish-brown cephalic plate, a flattened trunk with 21 clearly separated leg-bearing segments, one yellow-orange walking-leg pair per segment, and a final elongated terminal pair directed backward. Aim for two tapering antennae with about 17 small articles each. Keep each appendage attached to one coherent body and separate enough to read. The forcipules remain mostly ventral and do not need to appear from this dorsal view.
Scene/backdrop: A single matte charcoal-gray stone plane with fine mineral texture and no leaf litter, scale object, specimen pin, tray or laboratory label.
Style/medium: Photorealistic museum-reference photography with natural cuticle texture and restrained color, not an illustration, diagram, composite or cutout.
Composition/framing: Exact landscape 3:2 and near-orthographic top-down view. Center the straight animal horizontally around x=0.51 y=0.53. Keep both antenna tips, the full terminal legs and every visible walking-leg tip within generous margins.
Lighting/mood: Broad diffuse overhead illumination with soft contact shadows, neutral scientific presentation and no dramatic spotlight.
Evidence boundary: The prompt requests the reported segment and antenna pattern as a visual anchor. Generated pixels cannot verify exactly 21 walking-leg pairs or 17 antennal articles and cannot replace specimen examination.
Constraints: Exactly one complete centipede; two antennae and one terminal leg pair; repeated single leg pairs along the trunk; no other animal, text, numbers, tick marks, scale bar, labels, arrows, logo, signature, border or watermark.
Avoid: millipede double leg pairs, centipede coiled into a circle, missing head, duplicated terminal legs, three antennae, extra body branch, asymmetrical floating legs, specimen pin, preserved specimen, white seamless studio background, ruler, infographic, X-ray, cutaway, CGI, illustration, painting or fantasy colors.
```

### 03 · Head and forcipules macro

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas South American Giant Centipede head-anatomy gallery image 3 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original extreme field-macro photograph of the head and first trunk segments of exactly one calm adult Scolopendra gigantea on dark limestone, emphasizing the paired antennae, lateral simple-eye cluster and curved forcipules.
Subject and anatomy: The reddish-brown head plate fills the center-left. Two long segmented antennae emerge separately from the front and continue toward the left edge. A compact cluster of small dark simple eyes appears on the visible side of the head without cartoon enlargement. Beneath and behind the head, exactly two robust curved forcipules derived from the first leg pair meet in a closed neutral posture; their dark tips point inward and downward. Show the first few glossy chestnut tergites and several yellow-orange walking legs continuing naturally toward the right. Crop through the trunk on the right by design rather than pretending to show the complete animal.
Scene/backdrop: Fine-grained dark gray limestone with shallow surface cracks, no prey, second centipede, human object or enclosure.
Style/medium: Original photorealistic professional macro natural-history photography, high cuticle detail, shallow but controlled depth of field, restrained museum-publication finish.
Composition/framing: Exact landscape 3:2. Place the head near x=0.49 y=0.50, keep both antenna bases and both forcipules readable, and let the antenna tips or posterior trunk continue naturally beyond the deliberate macro crop.
Lighting/mood: Soft low-angle diffuse light that separates the head plate, eye cluster and forcipules without horror styling or wet venom shine.
Evidence boundary: The close view teaches the position of representative structures. It cannot diagnose the species, count every antennal article, measure anatomy, demonstrate sensory ability or show venom delivery.
Constraints: Exactly one animal; exactly two antennae and two curved forcipules; closed neutral posture; no prey, bite, wound, venom droplet, human skin, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: mammal jaw, sideways insect mandibles replacing the forcipules, scorpion pincers, lobster claws, giant fangs, open strike, duplicated face, huge vertebrate eyes, compound fly eyes, extra antennae, millipede head, detached appendages, medical scene, CGI, illustration, painting, fantasy or oversaturation.
```

### 04 · Nocturnal discoid cockroach encounter

```text
Edit the supplied image as a precise natural-history correction. Keep the 1536×1024 landscape framing, wet nocturnal tropical forest floor, fallen log, limestone fragments, restrained flash lighting, and realistic photographic style. Preserve exactly one complete dark chestnut South American giant centipede on the left and exactly one intact broad oval brown discoid-cockroach-style insect on the right. Correct only the spatial relationship: move or subtly reposition the animals and reorient their antennae so the two animals are fully separate. No body, leg, antenna, terminal leg, or other appendage from either animal may touch, cross, overlap, or visually merge with any appendage of the other. Leave a clearly visible uninterrupted band of leaf litter at least about 8% of the canvas width between the nearest appendage tips. Both animals remain calm, low to the substrate, and intact; the encounter must not depict approach, chase, attack, capture, bite, feeding, injury, blood, raised forcipules, or fused bodies. Keep the cockroach at modest scale on its own leaf and keep both complete subjects inside the frame. Do not add any animal or object. No text, labels, arrows, logo, signature, border, watermark, CGI, illustration, fantasy color, or horror styling. This is an AI-generated contextual reconstruction, not proof of prey identity or a field event.
```

### 05 · Limestone thorn-scrub habitat

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas South American Giant Centipede habitat gallery image 5 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original wide natural-history habitat reconstruction showing exactly one complete Scolopendra gigantea at environmental scale beneath a shaded limestone overhang, with dry thorn scrub visible outside.
Scene/backdrop: View outward from a low porous limestone shelter. The shaded foreground contains rough pale rock, dark damp pockets, scattered dry leaves, fine roots and narrow crevices. Beyond the opening, generalized seasonal thorn scrub contains columnar cacti, leaf-sparse shrubs and low pale limestone rubble under subdued dawn light. The mix suggests part of the species' broad regional habitat without naming a real island, country, reserve or cave.
Animal: One modest-size dark centipede travels across the lower-right shaded rock near a damp crevice. Keep its complete flattened body, reddish-brown head, repeated yellow-orange walking legs, two antennae and terminal legs coherent and inside frame. It must remain small enough for the overhang, crevices and thorn scrub to dominate the habitat story.
Style/medium: Original photorealistic conservation habitat photography, documentary natural color, credible limestone weathering, dry vegetation, shadow detail and environmental depth.
Composition/framing: Exact landscape 3:2 establishing view. The overhang frames the top and right; the bright scrub opening occupies the left half; the centipede sits around x=0.72 y=0.73. Use enough depth of field to read both shelter and exterior structure.
Lighting/mood: Cool shade under the rock and soft warm dawn outside, quiet refuge without dramatic sun rays or fantasy color.
Evidence boundary: This is a generalized habitat reconstruction. It does not depict or identify a specific locality, document occupancy, measure microclimate, estimate density or define the full species range.
Constraints: Exactly one centipede and no other animal; no people, roads, buildings, field gear, signs, maps, readable text, labels, logo, signature, border or watermark.
Avoid: named-island landmarks, lush rainforest only, open sand desert, giant cave, stalactite spectacle, underwater scene, centipede dominating frame, extra centipede, scorpion, snake, prey, human shelter, terrarium, CGI, illustration, painting, fantasy glow or oversaturation.
```

### 06 · Cave-ceiling bat context

```text
Use case: scientific-educational with photorealistic-natural rendering
Asset type: Fauna Atlas South American Giant Centipede cave-context gallery image 6 of 6, exact horizontal 3:2 intended for 1536 × 1024
Primary request: Create a brand-new original cave-ceiling context reconstruction containing exactly one Scolopendra gigantea and exactly one small folded-wing bat, separated by a broad span of bare limestone with no contact, approach, attack, capture or feeding.
Scene/backdrop: The underside of a pale rough limestone ceiling inside a shallow tropical cave or rock shelter. A dim opening and loose rocks appear far below at the lower-left edge. Keep the ceiling broad, dry-looking and uncluttered enough to show the distance between subjects. Do not identify a cave, country, island, colony or research site.
Centipede: One complete dark chestnut centipede clings horizontally to the ceiling on the left. Its many yellow-orange legs contact the stone, while two antennae point forward and the elongated terminal legs trail behind. It remains low and does not arch, leap or reach toward the bat.
Bat: Exactly one small dark insectivorous-looking bat hangs at the upper-right with wings folded around its body and head directed downward. Keep it several centipede body lengths away. The bat remains intact, calm and untouched, with no wound, open wings, struggle or duplicated body.
Style/medium: Original photorealistic natural-history cave photography, sober museum-publication treatment, credible rock, cuticle, membrane and low-light texture.
Composition/framing: Exact landscape 3:2. Place the centipede around x=0.39 y=0.45 and the bat around x=0.82 y=0.32. Preserve a wide uninterrupted limestone gap between them and a darker shelter opening along the lower edge.
Lighting/mood: Soft diffuse reflected cave light, quiet and observational, no spotlight beam, flash burst or horror styling.
Evidence boundary: Published cave records provide background for the two subjects sharing this scene. The generated image shows no interaction and cannot prove stalking, capture, envenomation, feeding or bat predation.
Constraints: Exactly one centipede and exactly one bat; both complete and physically separate; no contact, bite, grasp, blood, injury, falling animal, additional bat, colony, person, field equipment, text, labels, arrows, logo, signature, border or watermark.
Avoid: centipede touching bat, bat in centipede's forcipules, feeding, struggle, open wound, blood, giant monster centipede, bat swarm, vampire fangs, flying bat, duplicated wings, extra legs, person with flashlight, tourist cave, cage, laboratory, CGI, illustration, painting, fantasy or horror poster.
```

## Static visual acceptance

- All six source PNGs and six runtime WebPs decode at 1536 × 1024 in sRGB and report fully opaque, single-frame pixels.
- Frame 01 contains one complete adult on limestone with both antennae and both terminal legs inside frame; the left side retains darker negative space.
- Frame 02 contains one straight, complete dorsal animal with a readable repeated segment-and-leg pattern. Reviewers did not treat generated appendage counts as evidence for exactly 21 walking-leg pairs or 17 antennal articles.
- Frame 03 uses a deliberate posterior crop; two antennae, the visible small eye cluster and the paired closed forcipules remain readable.
- Frame 04 contains one centipede and one separate broad, oval discoid-cockroach-style insect. An uninterrupted leaf-litter gap separates the nearest appendage tips; no body or appendage touches, crosses or overlaps, and the frame shows no injury or feeding. The scene references an existing cockroach-feeding record, but reviewers did not use the pixels to verify *B. discoidalis* identity or independently prove the species' diet.
- Frame 05 contains one small centipede beneath a limestone overhang with thorn scrub outside. No landmark, sign or metadata ties the reconstruction to a specific place.
- Frame 06 contains one centipede and one folded-wing bat on separate parts of a cave ceiling. A broad rock gap prevents the image from depicting an interaction or proving predation.
- No frame contains readable text, a label, arrow, scale bar, logo, signature, border or watermark.

## Accepted file hashes

| No. | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `9466db0bf601683df591786f2c409f83525340c2a6449395c9ce6ff89ca7a78e` | `88c7e621e047f244cf325a5a1279d16d5ade1188e4efe9e92645dc275fd422f3` |
| 02 | `67f46817eb603b3066552c1168f4201cdd1685e9c87f8cd9b670501ba8f34120` | `41e636a352ded7d9c70255c50921594f701476a8ad3881428f9a4ddfc5307044` |
| 03 | `19c4b8776e6b0f0a5a416590244ab79cbaaf3da9a28d968dd9526fcc79c06ad3` | `e06a0a7ed1e50fad81f2c3d8ad775022c04d730a0577c49f7398499b462f2d0a` |
| 04 | `b23da5ac0b0088c7d4e45674b50577673027db01427c8ff7f69da596a9182ca3` | `832c2896c03762ed906535d1a6b6cf59918e9c432e8450ef7b7eb14caedc562b` |
| 05 | `6f80a1d5cee775f44583eeadb9270f0d6ba6d8600188e6e18dfeaf994d8beda1` | `309d8c5b67ac1f1d0f7943e577c4b44d5e37b3fb10b1dab6ea994f0b53092b9d` |
| 06 | `78384b8719447697430aaaf4534a8ede96bffa92d5bfe5d1e233de6970e4486a` | `a124b70327b0df7d2adca26387d6261e6e8f328180245ddd14de80eb331f8dd2` |
