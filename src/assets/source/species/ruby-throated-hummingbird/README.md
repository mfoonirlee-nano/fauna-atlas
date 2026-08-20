# Ruby-throated hummingbird image set

These six source PNGs were generated with Codex's built-in image generation tool as original project imagery for the `Archilochus colubris` profile. They are representative editorial reconstructions, not records of named birds, nests, migration flights or monitoring observations.

- Source format: 1536 × 1024, 8-bit sRGB PNG without alpha
- Runtime format: 1536 × 1024, 8-bit sRGB WebP without alpha
- Runtime conversion: `cwebp -q 82 -m 6 -mt`
- Product credit: `Fauna Atlas · AI 生成原创图像`

## Frames

| Frame | Source file | Intended use |
| --- | --- | --- |
| 01 | `01-iridescent-gorget-woodland-edge-source.png` | One adult male showing an angle-dependent ruby gorget; cover and featured card |
| 02 | `02-cardinal-flower-hover-feeding-source.png` | One adult female hovering at a native cardinal flower |
| 03 | `03-aerial-insect-foraging-source.png` | One adult female approaching one millimetre-scale flying insect |
| 04 | `04-gulf-crossing-migration-source.png` | One adult male illustrating one possible open-Gulf migration route |
| 05 | `05-female-nestling-care-source.png` | One adult female attending two nestlings in a cup nest fixed atop a single slender branch |
| 06 | `06-native-garden-monitoring-source.png` | One adult female and one distant community-science observer in a native garden |

The image set follows the evidence boundaries in [`docs/research/ruby-throated-hummingbird-profile.md`](../../../../../docs/research/ruby-throated-hummingbird-profile.md). Only adult males have the complete ruby gorget, and its structural colour changes with light and viewing angle. Females have no complete red gorget and show white tips on the outer tail feathers. Frame 04 is one possible trans-Gulf flight, not a universal route. Frame 05 shows female-only parental care. Frame 06 is a low-disturbance reconstruction and does not document a real bird, observer, place or survey result.

## Shared scientific prompt block

This block preceded each frame-specific prompt:

```text
Scientific subject constraints: Ruby-throated Hummingbird, Archilochus colubris, not another hummingbird. Tiny compact 7–9 cm bird; one head; exactly one long slender black bill, only slightly downcurved; dark round eye and subtle white postocular spot; emerald-to-golden-green crown and back; gray-white underparts; dusky narrow pointed wings; one short tail; two extremely short legs with tiny dark perching feet, tucked in flight.

Adult male: subtle black mask, compact throat-only iridescent ruby-red gorget, short black slightly forked tail without white tips. The gorget is angle-dependent structural color: bright ruby only where light and view align, deep wine to near-black elsewhere, never self-luminous, uniformly neon, glitter, red crown, red face or red chest.

Adult female: no red gorget; golden-green above, whitish below with restrained buff flanks and dusky mask; short mostly black rounded tail with distinct white tips on outer feathers. Perched folded wing tips stop short of tail. In flight exactly two continuous feathered wings attached at shoulders; restrained natural motion blur is allowed but no duplicate or ghost wings; tiny feet tucked.

No Anna's magenta crown, Black-chinned purple band or black chin, Rufous orange flanks or tail, Broad-billed red-based bill, insect wings, talons, long legs or extra anatomy. Original photorealistic natural-history editorial wildlife photography, exact 1536×1024 horizontal 3:2, 8-bit sRGB, no alpha, restrained museum-publication quality. No text, labels, arrows, map graphics, logo, signature, border or watermark.
```

## Frame-specific final prompts

### 01 · Iridescent gorget at woodland edge

```text
Exactly one adult male perched in three-quarter view on a thin deciduous twig at a sunlit eastern North American woodland edge. Full bird and tail inside frame, facing left. Low morning sun aligned with camera makes the compact throat gorget flash saturated natural ruby while no red extends onto crown, face or chest.

Place the entire bird in the right 58% of the frame and preserve the entire left 42% as quiet pale green-gold forest and meadow bokeh, with no branch, flower, animal or bright object, suitable for Chinese hero typography. Tiny feet wrap the twig; folded wings stop before the slightly forked tail.

No other animal, flower, feeder or person. Avoid centered composition, clipped tail, decorative foliage in the left negative space, fantasy iridescence, stock-photo gloss, illustration or CGI.
```

### 02 · Cardinal-flower hover feeding

```text
Exactly one adult female hovering beside a native cardinal flower, Lobelia cardinalis, and probing exactly one scarlet tubular corolla with her closed bill; tongue hidden. Body nearly upright, tail slightly fanned so the white outer tips read, exactly two shoulder-attached wings rendered as coherent translucent natural motion arcs, feet tucked.

Bird and contacted flower near center-right, with realistic eastern meadow and woodland-edge bokeh. Keep the complete bird, both wings, tail and flower inside frame. No male gorget, feeder, other bird, insect, extra wing copies, distorted bill or giant flower. Avoid frozen plastic wings, radial blur, fantasy glow, illustration or CGI.
```

### 03 · Aerial insect foraging

```text
Exactly one adult female in a brief aerial sally beside sunlit deciduous foliage, full body sharp, with the closed bill tip a few millimetres from exactly one pinhead-sized gnat under 3 mm, far smaller than the bill, about to seize it. No flower, nectar, feeder, web or insect swarm.

Exactly two coherent wing-blur arcs attached to the shoulders, white-tipped rounded tail partly fanned, feet tucked. Place the action center-right against airy green woodland-edge bokeh; keep the full bird and both wing arcs inside frame. No red throat, open monster mouth, teeth, giant insect, duplicate wings, multiple prey, illustration or CGI.
```

### 04 · One possible Gulf crossing

```text
Exactly one adult male in sustained forward migration flight above open Gulf of Mexico water at dawn, full bird in side-three-quarter view, body near horizontal, black bill forward, exactly two real wings in one coherent shallow power stroke with restrained natural blur, tiny feet tucked and short black slightly forked tail.

Show wide calm blue-gray sea and a low level horizon; keep the complete bird, both wings and tail inside frame near center-right. Oblique light leaves the throat gorget mostly dark wine to near-black with only one small ruby flash. Bird looks healthy and purposeful, not wave-skimming or exhausted. The scene illustrates one possible trans-Gulf individual, not a universal route.

No arrows, map, tracking line, land, boat, flock, storm, extra bird, duplicate wings, fantasy glow, illustration or CGI.
```

### 05 · Female nestling care

The initial generation used this prompt:

```text
Exactly one adult female hovering beside exactly one thimble-sized cup nest built directly on top of a slender descending deciduous branch, not wedged in a fork. Exactly two mid-stage nestlings are visible in the single nest, each with one head, one short bill, restrained gray down and developing pin feathers; no eggs.

Nest is roughly 5 cm across, made of plant down bound with spider silk, exterior naturally camouflaged by lichen and moss. The female has no red throat and attends alone; keep her complete body, two coherent wing arcs and white-tipped rounded tail visible. Broad eastern forest canopy context, respectful telephoto viewpoint, subjects center-right.

No adult male, third chick, extra head, eggs, feeding tube, hand, person, nest box, extra wing, illustration or CGI.
```

That output placed the nest in a branch junction. The accepted source is a targeted image edit that moved it onto one uninterrupted descending branch and made the far wing readable:

```text
Edit the provided photorealistic natural-history image while preserving its species, lighting, forest setting, one adult female Ruby-throated Hummingbird and exactly two mid-stage nestlings.

Correct only the nest support and flight readability. Place the same single 5 cm cup nest directly on top of one uninterrupted slender, gently descending deciduous branch; the branch must continue visibly beneath and past the nest, with no fork, crotch, vertical trunk or second branch supporting the nest. Keep the plant-down, spider-silk, lichen and moss construction. Show exactly two nestling heads in the one nest, no eggs and no extra body parts. Keep the female hovering alone at the left of the nest, no red throat, white-tipped outer tail feathers, tiny feet tucked, with exactly two coherent translucent wing-motion arcs each attached to one shoulder; make the far wing readable but naturally foreshortened. Keep all subjects fully inside frame.

Exact 1536×1024 horizontal 3:2, 8-bit sRGB, no alpha. No adult male, third chick, extra nest, extra bird, extra branch at the nest, feeding tube, human, nest box, text, logo, border, illustration or CGI.
```

### 06 · Native-garden monitoring

```text
Exactly one adult female in the right foreground hovering at a grouped patch of native cardinal flower and bee balm; exactly one community-science observer is small and softly focused 8–10 metres back at left, using binoculars and a field notebook without approaching the bird. Include layered native shrubs and deciduous trees with continuous-bloom garden structure. Show a clear uninterrupted distance between human and bird.

Female has no red throat; show exactly two coherent shoulder-attached wing arcs, white-tipped rounded tail and tucked feet. No feeder, window, cat, pesticide, net, band, capture, handling, extra person, extra bird, pet interaction, text, logo, illustration or CGI. Documentary low-disturbance garden observation in natural daylight; generated editorial reconstruction, not a real monitoring record.
```

## Static validation

- All six source files decode as 1536 × 1024, 8-bit sRGB PNG without alpha.
- All six runtime files decode as 1536 × 1024 WebP without alpha.
- Source and runtime basenames form six one-to-one pairs.
- Re-encoding every source with `cwebp -q 82 -m 6 -mt` reproduces the runtime WebP byte for byte.
- Visual inspection checks bird, chick, insect and observer counts; male and female plumage; bill, tail, foot and wing anatomy; cover negative space; nest support; migration wording; and low-disturbance observation.
