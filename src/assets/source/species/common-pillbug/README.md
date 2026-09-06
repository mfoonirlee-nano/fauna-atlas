# Common Pillbug image set

Six original 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-06. Sources are in this directory; runtime WebPs are in `public/images/species/common-pillbug/`. These are AI scientific scene reconstructions, not field records.

## Generation prompts

### Initial cover (rejected: subject too large and low)

```text
Create an original photorealistic natural-history macro environmental photograph for Fauna Atlas, exact 1536x1024 landscape. One common pillbug Armadillidium vulgare walking left on a damp brown decaying leaf. Accurate oval strongly convex slate-gray segmented armor, seven broad thoracic segments, small compact rear plates with no long rear spikes, two bent antennae, short pale walking legs tucked beside body. Full animal including antenna tips and legs SMALL entirely within x=1060..1230 y=315..415 on canvas. Animal centered at 74 percent width and 36 percent height. Keep left 60 percent quiet softly blurred brown leaf litter; subdued moss toward far edges. Wide negative space is essential for hero text. Crisp subject, diffuse woodland light, restrained colors. No other animals, no text, no logos, no watermark, no collage, no fantastical anatomy. Entire animal with real background margin.
```

### First edit (rejected: desktop copy clearance)

```text
Edit photograph preserving exact 1536x1024 canvas and woodland leaf scene. Shrink the ONE pillbug to HALF its current linear size and move it upward: full animal including BOTH antennae and all legs strictly within x=1080..1250 y=320..410. Reconstruct leaf naturally where original stood. Maintain same accurate Armadillidium vulgare anatomy, slate-gray convex armor with seven broad thoracic plates and smaller rear plates. Quiet left 60 percent. No duplicate animals, no text or watermark.
```

### Final cover edit

```text
Move the single small pillbug in this photo exactly 85 pixels to the RIGHT, keep its size and vertical position unchanged. Keep 1536x1024 canvas, leaf scene, lighting and gray segmented pillbug morphology. Its full antenna-to-rear and leg boundary should become approximately x=1077..1235 y=328..404. Rebuild leaf where it originally stood. Only ONE pillbug. No text or marks.
```

### 02-field-marks

```text
Original photorealistic scientific nature macro photograph, exact 1536x1024 horizontal opaque sRGB. Species Armadillidium vulgare common pillbug, a terrestrial isopod with strongly convex oval slate-gray plated body, seven broad thoracic segments and compact small rear plates, no projecting rear spikes, two bent antennae, seven pairs of SHORT legs tucked beneath body (far legs may be occluded). Muted natural woodland colors, realistic scale and anatomy. No insect wings, no centipede form, no text, labels, watermark, collage or human objects. One entire animal walking left on a flat brown leaf, close dorsal three-quarter view, body fills middle 55 percent width, both antennae inside frame.
```

### 03-conglobation

```text
Original photorealistic scientific nature macro photograph, exact 1536x1024 horizontal opaque sRGB. Species Armadillidium vulgare common pillbug, a terrestrial isopod with strongly convex oval slate-gray plated body, seven broad thoracic segments and compact small rear plates, no projecting rear spikes, two bent antennae, seven pairs of SHORT legs tucked beneath body (far legs may be occluded). Muted natural woodland colors, realistic scale and anatomy. No insect wings, no centipede form, no text, labels, watermark, collage or human objects. One pillbug fully rolled into a tight spherical ball on damp leaf litter, interlocking curved gray armor visible, antennae and legs tucked INSIDE, no head projecting. Macro close-up centered with generous margin.
```

### 04-leaf-litter

```text
Original photorealistic scientific nature macro photograph, exact 1536x1024 horizontal opaque sRGB. Species Armadillidium vulgare common pillbug, a terrestrial isopod with strongly convex oval slate-gray plated body, seven broad thoracic segments and compact small rear plates, no projecting rear spikes, two bent antennae, seven pairs of SHORT legs tucked beneath body (far legs may be occluded). Muted natural woodland colors, realistic scale and anatomy. No insect wings, no centipede form, no text, labels, watermark, collage or human objects. One entire pillbug with its mouth touching a frayed edge of a decomposing brown leaf, natural leaf litter beneath, macro lateral view, entire animal and antennae in frame.
```

### 05-shelter

```text
Original photorealistic scientific nature macro photograph, exact 1536x1024 horizontal opaque sRGB. Species Armadillidium vulgare common pillbug, a terrestrial isopod with strongly convex oval slate-gray plated body, seven broad thoracic segments and compact small rear plates, no projecting rear spikes, two bent antennae, seven pairs of SHORT legs tucked beneath body (far legs may be occluded). Muted natural woodland colors, realistic scale and anatomy. No insect wings, no centipede form, no text, labels, watermark, collage or human objects. Exactly three separate pillbugs resting close together under a naturally lifted decaying bark arch on moist soil, each anatomically separate and complete, soft subdued woodland light.
```

### 06-moss-walk

```text
Original photorealistic scientific nature macro photograph, exact 1536x1024 horizontal opaque sRGB. Species Armadillidium vulgare common pillbug, a terrestrial isopod with strongly convex oval slate-gray plated body, seven broad thoracic segments and compact small rear plates, no projecting rear spikes, two bent antennae, seven pairs of SHORT legs tucked beneath body (far legs may be occluded). Muted natural woodland colors, realistic scale and anatomy. No insect wings, no centipede form, no text, labels, watermark, collage or human objects. One entire pillbug walking along the boundary between damp moss and a decaying leaf, low side-on macro view revealing short articulated pale legs under convex armor, full antennae inside frame.
```


## Cover review

Accepted generated output: `exec-9bfb187f-f860-473d-8c3f-e421200a5cd4.png`. The tool moved the subject farther than the prompt requested; the measured pixels below, rather than prompt coordinates, govern acceptance.

- Source and runtime dimensions: 1536 × 1024.
- Full subject boundary: left 1215, top 339, right 1380, bottom 410 source pixels, including antennae, visible legs and rear armor.
- Subject center: 84.5% of source width. Left 40% is quiet blurred leaf litter.
- Saved focal point: `{ x: 0.96, y: 0.34 }`.
- Original-resolution inspection: accepted source PNG, compressed PNG and runtime WebP inspected.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

The full-subject regression passes all 36 states with at least 24 CSS pixels to viewport edges and the copy/carousel safe areas. `npm run test:carousel` passed without a browser. The environmental cover makes the animal small in the detail view; gallery 02 supplies a larger portrait. Fine far-side limbs are occluded and the small cover cannot establish segment counts or species identity independently.

## Compression and gallery review

All six sources passed TinyPNG compression and were converted with the repository `cwebp -q 82 -m 6 -mt` workflow. No fallback compressor was needed. Original gallery PNGs and final WebPs were inspected at original resolution. Gallery 02, 04 and 06 show complete outlines but overlapping feet; 03 shows a closed ball with no exposed antennae; 05 shows three separate animals, with several appendages in shadow. No labels or watermarks are visible. Generated plate boundaries and appendages cannot replace diagnostic specimen photographs.

Accepted file hashes, source PNG then runtime WebP:

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `31438832b6cb6174b269c95fdbcda5cdf86b1b949145d3a6d947495e5e6cf96b` | `a9cb1433aa1b867af6c936dd7934f0557e2b41aee9b4e4c19f9c76c4e3768c8f` |
| 02 | `923cb2018cd3085e3d33ce90be42e40697d35f8061489c1d047ff496bce46baf` | `9733e568ded76635566ee5c38d1bf6387086ea255cccdbb10d1915a0f8b712d1` |
| 03 | `c2828cd19522cb8be49685aedf26381fe7f6cbf762b1e7b218335d3214746902` | `09add30e1de5b2edfae9d3b53aa908dc712042537dd71fbbe8f9cc7343e599d5` |
| 04 | `7b7e2149f91b14be4bedf71a35fd9c9765af82fcf8ed8d30f50aa89f8a564dc8` | `f80463541913d48ba8b081ea2762cc032ca20cae26d0d1aaf848f765027e4c91` |
| 05 | `7c2d04372ed90a5e349782cc28c2fadbaab2c031d983872f469d3de7f99c9e72` | `4d5e4f39de883fcad2b174281338d2116a4ea944eba6d1ba09f52996be6a71f4` |
| 06 | `eaed0c67506df7cb10d5d4197f57c0fcd2f40e815250d9290cc577e8723b1475` | `a70f4b1cfa5139cdb8131e10db4265eb05c1cdea379067311c6abad0d8f7e4ef` |

Verification: 157 tests passed across the repository suites. The production build passed; its existing large-chunk warning remains. The subpath HTTP test initially hit sandbox `listen EPERM`, then passed when rerun with local-listener permission. No GUI or headless browser was launched.
