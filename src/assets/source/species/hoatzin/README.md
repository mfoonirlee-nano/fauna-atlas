# Hoatzin image set

OpenAI's built-in imagegen created these six original project images on 2026-08-30 for the Fauna Atlas _Opisthocomus hoazin_ profile. The frames reconstruct generalized floodplain habitat, diagnostic form, leaf foraging, the enlarged foregut, nestling wing claws and surface swimming. They do not document a named bird, site, feeding event, anatomical specimen, locomotor sequence or population.

- Generation mode: OpenAI built-in imagegen
- Use cases: photorealistic-natural for frames 01, 02, 03 and 06; scientific-educational for frames 04 and 05
- Research brief: [`docs/research/hoatzin-profile.md`](../../../../../docs/research/hoatzin-profile.md)
- Source directory: `src/assets/source/species/hoatzin/`
- Runtime directory: `public/images/species/hoatzin/`
- Source format: 1536 × 1024 opaque sRGB PNG
- Runtime format: 1536 × 1024 opaque lossy VP8 WebP
- Product credit: `Fauna Atlas · AI 生成科学情景重建`
- Total imagegen calls: 10, comprising six initial generations, three fresh replacements and one targeted edit for frame 05
- Compression: TinyPNG returned HTTP 429 for five of the six scoped source files. The documented local fallback used pngquant 3.0.3 with quality 80–95, speed 1 and metadata stripping on all six sources. The accepted replacement for frame 05 received the same fallback treatment. Runtime WebP files use the repository's cwebp quality 82, method 6 and multithreaded settings.

## Files and review decisions

| No. | Source file | Runtime file | Accepted observation | Boundary |
| --- | --- | --- | --- | --- |
| 01 | `01-floodplain-riparian-portrait-source.png` | `01-floodplain-riparian-portrait.webp` | One complete adult Hoatzin perches above water in generalized flooded riparian forest. | The reconstruction cannot establish sex, age, individual identity, exact locality, abundance or that the adult swims. |
| 02 | `02-full-body-diagnostic-profile-source.png` | `02-full-body-diagnostic-profile.webp` | One adult shows the blue bare face, red eye, rufous crest and wing panels, streaked neck and breast, and long pale-tipped tail. | Perspective and branch occlusion prevent calibrated size, mass, sex, age or complete toe-direction claims. |
| 03 | `03-young-leaf-foraging-source.png` | `03-young-leaf-foraging.webp` | One adult's bill contacts one tender leaf that remains attached to a twig. | The still cannot authenticate the plant, prove swallowing, quantify the diet or show fermentation or detoxification. |
| 04 | `04-enlarged-crop-foregut-cutaway-source.png` | `04-enlarged-crop-foregut-cutaway.webp` | A localized conceptual cutaway depicts leaf material inside an enlarged foregut before a smaller downstream digestive structure. | This is not CT, dissection or measurement. It does not define chamber count, connection topology, relative capacity, exact organ position or downstream stomach anatomy, and it must not be read as a multichambered stomach, rumen or evidence of rumination. |
| 05 | `05-nestling-two-wing-claws-source.png` | `05-nestling-two-wing-claws.webp` | One nestling has two ordinary feet and one visible developing wing with exactly two short curved claws at staggered attachment points, one distal and one more proximal. | The far wing is hidden. Pixels cannot calibrate claw length, digit proportions, joints, age, bilateral claw count, movement sequence or evolutionary ancestry. |
| 06 | `06-chick-surface-swimming-source.png` | `06-chick-surface-swimming.webp` | One downy nestling moves at the water surface with a modest wake. | The frame cannot show an earlier jump, underwater locomotion, limb coordination, cause, frequency, duration, destination, return to a nest or survival. |

All six accepted files were inspected at original resolution and again after conversion. No image contains readable text, a label, logo, signature, watermark, border, map marker or scale bar. Frame 04 is retained only with the explicit conceptual-anatomy boundary above. Frame 05 was accepted only after an independent review confirmed that its two visible wing claws are short, separated along one continuous wing and do not form parallel finger-like projections.

## Imagegen output ledger

| Call | Generator output | Decision |
| ---: | --- | --- |
| 01 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-4df6ea3a-52a4-431f-8c70-1a0b7618c229.png` | Accepted as frame 01 |
| 02 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-348a0868-5c00-4dac-8939-1573d55b8478.png` | Accepted as frame 02 |
| 03 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-447f03ed-8033-4522-9c6c-bb4b3682dd9b.png` | Accepted as frame 03 |
| 04 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-42fa3944-4bca-4057-983d-31e61d1fae61.png` | Accepted as frame 04 with the conceptual-anatomy boundary |
| 05 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-fcc6e782-ad64-45c3-bb26-f4422a456586.png` | Rejected: the multi-limb climbing pose made wing-hand anatomy ambiguous |
| 06 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-278c0a65-cb97-4ff3-85c5-d04fdcb379f0.png` | Accepted as frame 06 |
| 07 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-1a52b20e-7f3e-44c2-9380-ad658a61a478.png` | Rejected: an extra central wing-hand projection remained |
| 08 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-fc51542c-77cd-4ed4-ae1c-30e2d4d1c2a9.png` | Rejected: the targeted edit did not remove the extra projection cleanly |
| 09 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-cc526315-3cd7-4576-8101-f5afc9ebc562.png` | Rejected after independent review: two long finger-like structures forked from the same distal point |
| 10 | `/Users/chris.li/.codex/generated_images/01a04e4c-3882-7ee0-8fc6-f7a7734380fc/exec-8651cf32-f0a8-4ad7-9e27-905adad757c2.png` | Accepted as frame 05: two short claws at separated distal and proximal attachment points |

## Final prompts

### 01 · Floodplain riparian portrait

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Hoatzin species-profile cover, original project asset, horizontal 3:2 intended for exactly 1536 x 1024
Primary request: exactly one anatomically accurate adult Hoatzin (Opisthocomus hoazin) perched quietly on a broad branch above still brown water in a generalized Amazon-Orinoco floodplain forest at early morning
Subject details: complete medium-large long-tailed bird in natural three-quarter profile; small head; tall loose spiky rufous crest; bare cobalt-blue facial skin surrounding a vivid red eye; short heavy dark gray bill; buff-streaked brown neck and breast; chestnut-rufous wing panels with creamy streaks; broad dark olive-brown tail with pale buff terminal band; two folded wings, two legs, both feet naturally gripping the branch; no sexual dimorphism claim
Scene: seasonally flooded lowland riparian forest with tangled leafy shrubs, lianas, reflections and a narrow open-water channel; generalized habitat, no named locality
Style: museum-grade photorealistic natural-history wildlife photography, restrained documentary color, lifelike feather microtexture
Composition: horizontal 3:2, whole bird inside generous margins near right-center at x=0.62 y=0.50, long tail fully visible, enough environmental context and quiet negative space at left; eye-level wildlife camera
Lighting: soft humid dawn, natural filtered light, subtle mist, no dramatic spotlight
Scientific boundary: generalized editorial reconstruction, not a named individual, occurrence record, population count or proof of exact locality
Constraints: exactly one bird, closed wings, complete crest, bill, tail, legs and feet, no text, labels, logo, signature, watermark, border, map marker or human object
Avoid: pheasant comb or wattles, turkey body, peacock tail, raptor beak or talons, parrot bill, extra crest, orange or yellow face, blue plumage, spread wings, flight, prey, nest, eggs, chicks, other animals, people, boats, buildings, fantasy glow, illustration, painting, collage, oversaturation, clipped anatomy, extra or fused limbs or toes
~~~

### 02 · Full-body diagnostic profile

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Hoatzin diagnostic gallery image 2 of 6, original project asset, horizontal 3:2 intended for exactly 1536 x 1024
Primary request: one complete anatomically accurate adult Hoatzin (Opisthocomus hoazin) standing in a clean left-facing side profile on a thick horizontal riparian branch
Backdrop: softly blurred neutral green tropical wetland foliage and dark water, no distracting animals or human objects
Subject: exactly one whole bird; small head with a tall loose spiky rufous crest; bare cobalt-blue facial skin; vivid red iris; short stout dark gray bill; slender neck; buff-streaked brown breast; rich chestnut-rufous wing coverts crossed by cream streaks; two closed folded wings; long broad olive-brown tail tipped with a clear pale buff terminal band; two strong gray legs; both anisodactyl bird feet gripping the branch, three toes forward and one backward on each foot where perspective permits; natural alert posture
Style: photorealistic museum diagnostic field portrait, faithful proportions, precise feather and skin texture, neutral documentary rendering
Composition: exact horizontal 3:2; entire crest, bill, back, folded wings, full tail, legs and both feet remain inside generous margins; subject occupies middle 65 percent of width; moderate depth of field keeps full silhouette sharp
Lighting: soft overcast daylight, low contrast, accurate restrained colors
Scientific boundary: qualitative identification image only; no ruler, calibrated length, sex cue, age estimate or body-mass claim
Constraints: one bird only; no text, labels, ruler, logo, watermark, border, bands or tags
Avoid: chicken, pheasant, turkey, cuckoo, turaco, peacock, raptor, parrot, hooked beak, yellow face, horn, wattle, fan display, spread wings, flight, nest, eggs, extra birds, clipped crest or tail, extra limbs, fused legs, malformed toes, fantasy, illustration, painting, studio backdrop, oversaturation
~~~

### 03 · Young-leaf foraging

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Hoatzin feeding gallery image 3 of 6, original project asset, horizontal 3:2 intended for exactly 1536 x 1024
Primary request: exactly one anatomically accurate adult Hoatzin (Opisthocomus hoazin) selectively eating fresh young leaves from a waterside shrub in Amazonian floodplain forest
Subject details: one complete long-tailed bird perched sideways on a sturdy branch; tall loose rufous crest, cobalt-blue bare face, red eye, short stout dark bill, buff-streaked brown body, chestnut wing panels with cream streaks, long dark tail with pale tip; both wings folded; both feet grip the support
Action: the bill gently pinches the edge of exactly one intact tender green leaf still attached to a twig; several nearby leaves and a few small flowers provide plausible plant foods; no fruit in the bill, no torn mouth, no crop cutaway
Setting: dense low riverside vegetation above calm muddy water, natural leafy browse, generalized Amazon-Orinoco lowland habitat
Style: photorealistic natural-history feeding photograph, scientifically sober, museum-publication quality
Composition: horizontal 3:2, clear bill-to-leaf contact in the center-left, full bird including crest and tail visible, foliage frames rather than obscures anatomy
Lighting: diffuse warm morning light beneath canopy, natural greens and chestnut feathers
Scientific boundary: the still illustrates contact with a leaf only; it cannot identify the plant species, quantify diet, prove swallowing, strict folivory, food selection, fermentation or detoxification
Constraints: exactly one bird and one bill-contact leaf; no other animals, no text, labels, logo, watermark or border
Avoid: fruit-only diet, seeds scattered as feed, insect prey, meat, crop anatomy, exaggerated swollen chest, vomiting, chewing teeth, cow or ruminant imagery, extra birds, spread wings, flight, nest, eggs, hands, feeder, people, boats, malformed beak, extra limbs, fantasy, illustration, painting, collage, oversaturation
~~~

### 04 · Enlarged-crop foregut cutaway

~~~text
Use case: scientific-educational
Asset type: Fauna Atlas Hoatzin digestive-system gallery image 4 of 6, original project asset, horizontal 3:2 intended for exactly 1536 x 1024
Primary request: an anatomically careful, unlabeled scientific cutaway reconstruction of exactly one adult Hoatzin (Opisthocomus hoazin) in left-facing side view, explaining the bird's enlarged crop and posterior esophagus as foregut fermentation chambers
Visible exterior: recognizable Hoatzin head, tall rufous crest, blue bare face, red eye, short dark bill, buff-streaked brown neck, folded chestnut wing and long dark tail with pale tip; calm standing silhouette
Cutaway window: a clean localized sagittal window through lower neck and front chest only; show the esophagus widening into one very large muscular crop divided into two communicating chambers in the lower neck and front of chest, followed by an expanded caudal or posterior esophagus; then a single much smaller conventional bird stomach farther back; pale green finely chopped leaf material contained inside the enlarged crop and posterior esophagus
Style: museum-grade scientific natural-history plate blended with restrained photorealistic exterior, precise soft tissue forms, no gore, no medical drama, no cartoon
Composition: horizontal 3:2; one complete side-view bird occupies right two-thirds; enlarged foregut cutaway is the clear focal point; quiet warm off-white neutral background with a faint riparian foliage wash; organs stay inside body contour
Color: natural feather colors outside; muted rose and ochre digestive tissue; pale green plant matter; clean restrained palette
Scientific boundary: conceptual anatomical reconstruction only, not a scan, dissection, scale diagram, measurement, microbial image or evidence that the bird chews cud
Constraints: no labels, arrows, numbers, icons, symbols, legends, text, logo, watermark or border; exactly one crop system, one esophagus and one small avian stomach
Avoid: cow, sheep, rumen, four mammalian stomachs, multiple detached sacs, human anatomy, transparent whole skeleton, visible heart or lungs, exposed intestines, blood, wounds, surgery, floating organs, cartoon bacteria, fermentation bubbles, chemistry formulas, spread wings, extra birds, fantasy, malformed anatomy, clipping
~~~

The accepted image retains only the broad concept. The visible internal divisions are not treated as proof of the prompt's requested chamber count, topology or proportions.

### 05 · Nestling wing claws

~~~text
Use case: scientific-educational wildlife reconstruction
Asset type: Fauna Atlas Hoatzin species-profile gallery image, original project asset, horizontal 3:2 intended for exactly 1536 x 1024
Primary request: exactly one anatomically credible Hoatzin (Opisthocomus hoazin) nestling on a gently sloping rainforest branch, shown in a clear three-quarter side view. The chick has dark brown-black down, a small reddish-brown crest, bluish bare facial skin, and a short juvenile bill. Both ordinary bird legs and both ordinary bird feet are visible and naturally grip the branch. One near wing is lifted and partly opened toward the camera specifically to show exactly two separate, small, curved, horn-colored wing claws. The two claws must be staggered along the wing: one short claw at the distal wing tip, and a second short claw emerging from the leading edge noticeably closer to the body. Leave a clearly visible span of normal wing tissue between their attachment points. Each is a compact curved keratin claw only, not a long digit; neither has an elongated scaly finger beneath it. The far wing remains folded and mostly hidden.
Composition / framing: the entire chick and branch fit inside frame, with the near wing unobstructed at the center; eye-level natural-history field photograph composition; quiet flooded Amazonian riparian forest softly blurred behind it.
Style / medium: highly realistic wildlife photography with restrained scientific-illustration clarity, natural overcast daylight, fine down and bark detail, plausible anatomy, consistent optics and shadows.
Constraints: a single coherent scene; exactly one bird; exactly two legs and exactly two feet; the visible near wing has exactly two claws total, one distal and one proximal, at two different attachment points; short curved claws only; normal avian wing outline; no human hands, no reptile forelimb, no bat membrane, no paired long fingers, no forked hand, no extra digits, no extra claws, no disconnected anatomy, no specimen handling, no labels, no arrows, no scale bar, no text, no logo, no signature, no watermark.
Avoid: two parallel claws sprouting from the same wing tip, long scaly wing fingers, three or more wing projections, duplicated feet, malformed toes, adult plumage, fantasy dinosaur styling, dramatic cinema lighting, painterly blur, collage, diagram panels.
Success criteria: at first glance the viewer sees a complete Hoatzin chick with two normal feet; closer inspection of the one raised wing reveals precisely two short curved claws whose bases are clearly separated along the wing, with the proximal claw visibly closer to the shoulder than the distal wing-tip claw.
~~~

### 06 · Chick surface swimming

~~~text
Use case: photorealistic-natural
Asset type: Fauna Atlas Hoatzin chick water-escape gallery image 6 of 6, original project asset, horizontal 3:2 intended for exactly 1536 x 1024
Primary request: exactly one young Hoatzin chick (Opisthocomus hoazin) swimming naturally at the surface of a calm narrow floodplain channel beneath overhanging waterside branches
Chick details: small partly downy charcoal-brown body, sparse emerging buff and rufous feathers, short dark bill rather than a duck bill, dark eye, muted blue-gray facial skin, short wispy crest, short developing tail; head, neck and upper back above water; body elongated in a purposeful level swim; both small developing wings held close alongside the body, with no need to expose or count wing claws in this frame
Water action: modest V-shaped wake behind the chick and small natural ripples at the chest; no splash, panic, drowning or underwater cutaway
Setting: generalized Amazon-Orinoco riparian wetland, brown-green still water, low interlaced shrub branches descending near the surface and one reachable sloping branch ahead; no visible nest and no named locality
Style: photorealistic natural-history field photograph, credible wildlife documentary, restrained colors and anatomy
Composition: horizontal 3:2, water-level camera, entire visible chick fits within frame near center-left, sloping branch and flooded vegetation provide habitat context without touching the chick
Lighting: soft overcast tropical daylight with realistic reflections
Scientific boundary: the still reconstructs surface swimming only; it cannot show a preceding jump, an underwater dive, predator avoidance, exact age, duration, destination, return climb or survival outcome
Constraints: exactly one chick, no adults or other animals, no text, label, logo, watermark, border, boats or people
Avoid: duck, grebe, rail, chicken, webbed feet displayed, orange bill, fully adult plumage, tall adult crest, adult long tail, flight, open flight wings, underwater body cutaway, bubbles from mouth, predator, attack, nest, eggs, drowning, dramatic splash, extra limbs, malformed beak, fantasy, illustration, painting, collage
~~~

## Static and visual validation

- Source files and runtime assets form six one-to-one basename pairs after removing `-source`.
- Source PNGs and runtime WebPs decode as 1536 × 1024, sRGB, opaque, single-frame images.
- The six source files have distinct hashes, as do the six runtime files; no frame is a duplicate of another.
- Original-resolution review accepted frames 01, 02, 03 and 06, accepted frame 04 only as a bounded concept, and accepted replacement frame 05 after checking claw placement and limb count.
- Verification used static inspection and the built-in image viewer. No GUI or headless browser was used.
