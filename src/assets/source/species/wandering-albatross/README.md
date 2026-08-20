# Snowy albatross image set

These six source PNGs were generated with Codex's built-in image generation tool as original project imagery for the `Diomedea exulans` profile. They are editorial reconstructions rather than records of named animals, islands, nests, surveys or field teams.

- Source format: 1536 × 1024, 8-bit sRGB PNG without alpha
- Runtime format: 1536 × 1024, 8-bit sRGB WebP without alpha
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Frames

| Frame | Source file | Intended use |
| --- | --- | --- |
| 01 | `01-southern-ocean-glide-source.png` | One complete mature adult gliding above the Southern Ocean; cover and featured card |
| 02 | `02-natural-surface-seizing-source.png` | One adult taking one small squid naturally at the sea surface |
| 03 | `03-subantarctic-breeding-habitat-source.png` | One small incubating adult within a broad generic subantarctic habitat |
| 04 | `04-low-wave-dynamic-soaring-source.png` | One complete adult in a single low, banked dynamic-soaring phase |
| 05 | `05-post-guard-chick-source.png` | One older downy chick alone on its nest during the normal post-guard stage |
| 06 | `06-breeding-count-monitoring-source.png` | Exactly two field ecologists observing one occupied nest from a respectful distance |

The image set follows the scientific and editorial boundaries documented in [`docs/research/wandering-albatross-profile.md`](../../../../../docs/research/wandering-albatross-profile.md). Every adult represents `Diomedea exulans` sensu stricto rather than an unspecified member of the wandering-albatross complex. Adult plumage varies continuously, so no image is used to infer exact age or sex. Frame 04 illustrates only one instantaneous flight phase, not a complete dynamic-soaring cycle. Frame 05 depicts normal post-guard solitude rather than abandonment. Frame 06 illustrates a low-disturbance count method; it does not establish a real population estimate, trend, breeding outcome or individual record.

## Shared scientific prompt block

This block preceded each frame-specific prompt:

```text
Scientific subject constraints: Snowy/Wandering Albatross, Diomedea exulans sensu stricto, not another member of the wandering-albatross complex and not a royal, black-browed, grey-headed or sooty albatross. Large barrel-bodied oceanic bird; one head, stout short neck, exactly two exceptionally long narrow high-aspect-ratio pointed wings, exactly two legs and fully webbed feet when visible, and one short white wedge-shaped tail. A mature adult has a predominantly white head, neck and body, biologically variable fine dark vermiculation, and blackish primaries and secondaries; never impose identical ornamental markings. Very large long yellowish-pink to flesh-pink bill built from natural horny plates, ending in one modest hooked tip; two lateral tubular nostril openings total, one on each side near the bill base, with the far opening naturally hidden by perspective. Dark eyes. When visible, legs and three forward fully webbed toes are pale flesh-pink; no raptor talons or long wader legs. Wing tips are smooth and tapered, not spread into eagle-like fingers. Wingspan appears about 2.5–3 times body length.

No continuous black cutting-edge stripe on the upper bill, no yellow bill stripe, black brow, gray head, dark mantle, forked or elongated tail, gull proportions, pelican pouch, duck bill, swan neck, gannet face, eagle claws, extra wings, extra feet, malformed feathers or duplicated body parts.

Original photorealistic natural-history editorial wildlife photography, exact 1536×1024 horizontal 3:2, 8-bit sRGB, no alpha, realistic feather detail and Southern Ocean optics, restrained museum-publication quality. No text, labels, arrows, logo, signature, border or watermark.
```

## Frame-specific final prompts

### 01 · Southern Ocean glide

```text
Create an original photorealistic natural-history cover photograph of exactly one mature wild Diomedea exulans gliding right-to-left over a cool gray-blue Southern Ocean swell. Show the entire coherent bird in a slightly elevated three-quarter dorsal view: complete bill, body, both extremely long narrow wings and short wedge tail all inside frame. Hold both wings rigidly extended in a shallow natural bank, with no active downstroke.

Place the complete bird within the right 58–60% of the frame, occupying about half the image width. Preserve the entire left 40% as clean muted sky and calm dark water with no bird, foam highlight, vessel, land or other object, suitable for Chinese hero typography. Keep the horizon level and subtle.

Exactly one bird. No other silhouettes, prey, people, boats, fishing gear, island, text, logo, border or watermark. Avoid dramatic storm spectacle, sunset, enormous wave, wing clipping, raptor feather fingers, theatrical pose, tourism advertisement, CGI or illustration.
```

### 02 · Natural surface seizing

```text
Create an original photorealistic field photograph of exactly one adult Diomedea exulans settled naturally on open ocean water and taking exactly one modest small squid from the surface with the tip of its large pink hooked bill. Use a restrained side-three-quarter view. Fold both long wings coherently against the back; keep the head, complete bill, body outline and short wedge tail readable above the modest swell.

The squid is a small plausible natural prey item partly at the surface, not bait, a giant decorative cephalopod or a bloody kill. Show only brief bill contact, no swallowing spectacle.

Exactly one albatross and one squid. No vessel, fishery discards, hook, line, net, chum, feeding hand, other bird, blood, text or watermark. Do not turn the bill into a pelican pouch or show diving-penguin anatomy.
```

### 03 · Subantarctic breeding habitat

```text
Create a very wide photorealistic environmental photograph of generic subantarctic breeding habitat used by Diomedea exulans. Show windswept ice-free lowland and gentle ridges with peat, moss, sedges, low tussock grass and sparse dark rock beneath a cool overcast sky, with distant Southern Ocean visible. It must be a generalized habitat, not a named or geolocatable island.

Include exactly one mature adult deliberately small in the middle-right distance, settled on exactly one low broad bowl nest of grass and peat. The adult fully covers the nest cup; no egg, chick, legs or hidden second bird is visible. Habitat fills at least 85% of the frame.

No dense cliff colony, neat nest rows, penguins, seals, invasive mammals, snowfield, ice shelf, trees, buildings, research station, boardwalk, tourists or vessels.
```

The first output for frame 03 had the right content but the wrong aspect ratio. The accepted source is an image edit using that output as reference:

```text
Edit the provided natural-history photograph only to conform to the project's exact runtime composition. Produce an exact 1536×1024 horizontal 3:2, 8-bit sRGB, no-alpha PNG. Preserve the same generalized subantarctic breeding habitat, the same cool overcast atmosphere, and exactly one mature Snowy/Wandering Albatross (Diomedea exulans sensu stricto) sitting on exactly one low peat-and-grass nest in the middle-right distance with the egg fully hidden. Keep the adult deliberately small and habitat at least 85% of the frame. Expand or recompose the top and bottom naturally as needed; do not stretch the bird or crop away meaningful habitat.

Retain correct species anatomy: predominantly white mature adult, fine variable dark wing vermiculation and blackish flight feathers, huge long yellowish-pink plate-built hooked bill, one head, two folded wings, one short wedge tail, no visible feet. No additional bird, egg, chick, person, building, research station, path, fence, boardwalk, tree, penguin, seal, invasive mammal, text, logo, signature, border or watermark. Photorealistic restrained museum-publication field photography; no illustration or CGI look.
```

### 04 · Low-wave dynamic soaring

```text
Frame 04 — low-wave dynamic soaring. Show exactly one complete mature adult Snowy Albatross in a single coherent instant of low dynamic soaring, banking just above a long Southern Ocean swell. Both exceptionally long narrow rigid wings must be fully visible from root to pointed tip, with plausible aerodynamic asymmetry from the bank; neither wing may be cropped or fused. The entire head, bill, body, short wedge tail and both wings remain inside the frame. Cool wind-scoured daylight, slate-blue water, fine spindrift, distant low horizon. Place the bird near center-right with open water ahead of its flight path. Convey speed only through posture, water texture and perspective. No drawn wind arrows, sound waves, speed lines, multiple exposure, ghosted wings, motion clones, flapping pose, land, boat, people, fishing gear or other birds. The image documents form and flight geometry, not a diagram.
```

### 05 · Post-guard chick

```text
Frame 05 — post-guard chick. Show exactly one older Snowy Albatross chick alone and safe on exactly one low bowl-like peat-and-grass nest in a windswept subantarctic breeding landscape. The chick is well beyond the tiny hatchling stage: large-bodied but still flightless, covered mostly in natural pale gray-white down with restrained emerging darker juvenile feather tracts on wings and back, one normal head and bill, two folded developing wings, two feet naturally hidden or partly visible. Its proportions and feather texture must look like a real procellariiform chick, not a plush toy or adult miniature. Quiet overcast Southern Ocean light, muted tussock and moss, broad habitat context, no distress cues. No adult bird, egg, second chick, predator, human, fence, tag, band, handling, feeding, nest debris, text or implication of abandonment. This is a normal post-guard stage while adults forage at sea.
```

### 06 · Breeding-count monitoring

```text
Frame 06 — breeding-count monitoring. Show exactly one occupied Snowy Albatross nest with exactly one mature adult sitting naturally on a low peat-and-grass nest in an open subantarctic breeding landscape, and exactly two field ecologists conducting a non-invasive count from a clearly respectful distance of roughly 30–50 metres. The adult and nest are in the mid-right foreground/midground; the two researchers are small figures well left and farther back, wearing muted weatherproof field clothing. One uses a spotting scope on a tripod and the other records observations in a notebook or tablet. Maintain an obvious uninterrupted buffer of terrain between people and bird. No approaching, touching, handling, capture, egg exposure, chick, rings, tags, drones, vehicle, tourist group, dog, bait, food, restraint, extra researchers, extra birds, extra nests, text or logos. Natural overcast Southern Ocean conditions and documentary field-science realism; the generated scene is an illustrative reconstruction, not a claim of a real individual record.
```

## Static validation

- All six source files decode as 1536 × 1024, 8-bit sRGB PNG without alpha.
- All six runtime files decode as 1536 × 1024 WebP without alpha.
- Source and runtime basenames form six one-to-one pairs.
- Visual inspection checks subject counts, complete wing and tail anatomy, adult and chick plumage, bill shape, cover negative space, low-disturbance field practice and the absence of fishery or tourism cues.
- Frame 03 uses the dimension-correcting edit described above; the original generated outputs remain outside the project asset tree.
