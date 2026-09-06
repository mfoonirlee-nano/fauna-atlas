# Himalayan marmot image set

Six original 1536 × 1024 opaque sRGB images generated with the built-in imagegen tool on 2026-09-06. These are AI scientific scene reconstructions of *Marmota himalayana*, not field records. The runtime files are in `public/images/species/himalayan-marmot/`.

## Cover review

Original generated PNGs and all six final runtime WebPs were inspected at original resolution. The compressed cover source was also inspected at original resolution.

- Source and runtime dimensions: 1536 × 1024.
- Visually measured complete-subject boundary, padded to include fur edges: left 1132, top 312, right 1305, bottom 390 source pixels. Includes muzzle, ears, visible feet and the complete short tail; far-side feet overlap naturally.
- Full-subject center: 79.3% of source width. Left 40% contains quiet distant meadow and mountains.
- Saved focal point: `{ x: 0.85, y: 0.34 }`.
- Runtime WebP SHA-256: `cd34976979ce00d87703a0c0fa2a560a3b87f2d42e18cd9c52c83bba29de2551`.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

`tests/hero-carousel.test.mjs` projects the complete reviewed boundary through object-fit cover, the saved focal point and CSS animation endpoints. All 36 states keep at least 24 CSS pixels from viewport edges and the copy/carousel component rectangles. The regression passed with the final WebP hash. No GUI or headless browser was used.

Known cover limitation: the animal occupies a small part of the environmental image to satisfy the existing hero layouts; gallery 02 supplies a larger morphology view. Fine toe counts, sex and age cannot be established from the cover.

## Gallery inspection

- 02: full side view with short tail and dark crown/muzzle; far hind limb overlaps the body, and fur partly covers digits.
- 03: upright animal with closed mouth, two forepaws and grounded hind feet. The tail lies behind the body. A standing posture does not demonstrate an alarm call.
- 04: muzzle contacts low plants; near legs are readable, far legs overlap. No plant species or consumption quantity is asserted.
- 05: one animal outside an open burrow; the far hind foot is obscured. The image does not show underground depth, chambers or a hibernating animal.
- 06: two separate animals in nose contact, each with a short tail; far-side feet overlap. Relative size does not establish parentage, sex or exact age.

No visible text, logos, watermarks, humans, feeding props or extra animals. Fur tone varies between scenes; these are separate reconstructions, not repeated observations of one identifiable animal.

## Compression

TinyPNG compressed all six source PNGs, reducing the combined source size by 69.1%. The repository `convert-webp.js` script converted only this set with `cwebp -q 82 -m 6 -mt`. No substitute compressor or image resizing was used.

| Asset | Compressed PNG bytes | WebP bytes |
| --- | ---: | ---: |
| 01-alpine-meadow-cover | 855,274 | 191,974 |
| 02-field-marks | 969,137 | 208,138 |
| 03-upright-vigilance | 761,720 | 182,778 |
| 04-meadow-foraging | 835,389 | 227,370 |
| 05-burrow-entrance | 1,132,531 | 369,178 |
| 06-social-contact | 777,016 | 201,766 |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `35abce196d132840bd182d5850f74e44a90c7e73a96f7f4066b8895347a6c5bb` | `cd34976979ce00d87703a0c0fa2a560a3b87f2d42e18cd9c52c83bba29de2551` |
| 02 | `0f32b8cb14ca25bd1b6247e5d0a4fc99ee4510bb352c7b6eac66bf4047d2579b` | `2ad8cddec005eae2b34804758c6279b030703178c2cbcb2623d002390d6657db` |
| 03 | `f6b44f0dc8084ad736d22720af2c79b9bade5a5fadc6a4b005b167e6937336bb` | `76ced807ed34c62defbf1af3ca602e97c3ff6db16329b19ce79d995b74a80f2c` |
| 04 | `014a7caa2350c6a0a8281baeedb56de565b52a4be8c74c92d668a64317423ac1` | `b85ca19d301c36621cb1245c9c357c7cdb87c42b695a11388734557802d7942d` |
| 05 | `679fb2984f7da399ac96f2770945f528cda12ab44c758e3a5233ad8995b11ac8` | `e895ca8b3b48340289bf9e59c725f339fc7ad6a17bde97891a323536f3f6cce5` |
| 06 | `ca0c7b80e5b066d0ac41008623c5a0416b7705eab8ee26b40cde4a092563bb23` | `3219e2322064b7f67a7a824e0c464c029939ea2a76c16800ea36ca3e67016c26` |

## Final generation prompts

Machine-readable copies: [prompts.json](./prompts.json). All six accepted outputs came from new-image requests; no edit or crop was needed.

### 01-alpine-meadow-cover

```text
Create an original photorealistic wildlife environmental photograph, exactly 1536x1024 landscape, opaque. One adult Himalayan marmot Marmota himalayana in a Tibetan alpine meadow, stout low body, short rounded ears, blunt muzzle, dark brown forehead and muzzle contrasting with coarse yellowish tawny brown fur, short furry tail, four short sturdy legs. It is standing on all four feet facing left on a grassy earthen ridge in the upper right of the picture. STRICT SMALL FULL ANIMAL silhouette including nose ears all visible feet and entire tail fits x=1110..1310 y=325..435 pixels, center at 79 percent width and 37 percent height. The animal is small in this very wide environmental view with mountains far behind and layered sloping grassland; left 60 percent quiet soft meadow for webpage text. Ground must rise naturally to its feet at this height, foreground extends well below. Natural muted morning light, plausible plateau grasses, restrained realistic fur. No other animals, no people, no food offering, no text labels borders watermark logo, no illustration or cartoon, no prairie dog, pika or long squirrel tail.
```

### 02-field-marks

```text
Create an original photorealistic natural-history wildlife photograph, exactly 1536x1024 horizontal opaque sRGB. Species Himalayan marmot Marmota himalayana, stocky large ground squirrel with coarse yellowish tawny brown fur, dark brown forehead and muzzle, short rounded ears, blunt muzzle, sturdy short legs with digging claws, short furry tail. Anatomically credible, natural subdued light, alpine meadow on Tibetan Plateau, no long squirrel tail, no pika or prairie dog, no anthropomorphic smile or scream, no people pets feeding bowls buildings text logos watermark collage or illustration. One adult in a full-body side view on sparse alpine turf, looking left. Complete head, body, four naturally attached legs (far legs may partly overlap) and entire short tail inside frame with wide margins; animal fills central half of width. Eye-level view showing fur and dark muzzle.
```

### 03-upright-vigilance

```text
Create an original photorealistic natural-history wildlife photograph, exactly 1536x1024 horizontal opaque sRGB. Species Himalayan marmot Marmota himalayana, stocky large ground squirrel with coarse yellowish tawny brown fur, dark brown forehead and muzzle, short rounded ears, blunt muzzle, sturdy short legs with digging claws, short furry tail. Anatomically credible, natural subdued light, alpine meadow on Tibetan Plateau, no long squirrel tail, no pika or prairie dog, no anthropomorphic smile or scream, no people pets feeding bowls buildings text logos watermark collage or illustration. One adult marmot standing upright on hind feet outside a natural burrow, forepaws held close to chest. Mouth CLOSED, head turned slightly left, dark face, short tail rests on ground. Full animal in center, 15 percent margin, alert natural posture not a human pose.
```

### 04-meadow-foraging

```text
Create an original photorealistic natural-history wildlife photograph, exactly 1536x1024 horizontal opaque sRGB. Species Himalayan marmot Marmota himalayana, stocky large ground squirrel with coarse yellowish tawny brown fur, dark brown forehead and muzzle, short rounded ears, blunt muzzle, sturdy short legs with digging claws, short furry tail. Anatomically credible, natural subdued light, alpine meadow on Tibetan Plateau, no long squirrel tail, no pika or prairie dog, no anthropomorphic smile or scream, no people pets feeding bowls buildings text logos watermark collage or illustration. One adult on all fours lowering muzzle to nibble a small living tuft of green alpine grasses and forbs. Natural feeding posture, full body and short tail inside frame. No carrot or human food, no hands holding food. Close enough to see muzzle near leaves.
```

### 05-burrow-entrance

```text
Create an original photorealistic natural-history wildlife photograph, exactly 1536x1024 horizontal opaque sRGB. Species Himalayan marmot Marmota himalayana, stocky large ground squirrel with coarse yellowish tawny brown fur, dark brown forehead and muzzle, short rounded ears, blunt muzzle, sturdy short legs with digging claws, short furry tail. Anatomically credible, natural subdued light, alpine meadow on Tibetan Plateau, no long squirrel tail, no pika or prairie dog, no anthropomorphic smile or scream, no people pets feeding bowls buildings text logos watermark collage or illustration. One adult crouched just outside a dark natural burrow opening in a gently sloping alpine meadow bank, excavated soil spread beside it. Complete animal and short tail above ground. Wide view shows soil and surrounding grasses. No cutaway, tunnels underground are not visible.
```

### 06-social-contact

```text
Create an original photorealistic natural-history wildlife photograph, exactly 1536x1024 horizontal opaque sRGB. Species Himalayan marmot Marmota himalayana, stocky large ground squirrel with coarse yellowish tawny brown fur, dark brown forehead and muzzle, short rounded ears, blunt muzzle, sturdy short legs with digging claws, short furry tail. Anatomically credible, natural subdued light, alpine meadow on Tibetan Plateau, no long squirrel tail, no pika or prairie dog, no anthropomorphic smile or scream, no people pets feeding bowls buildings text logos watermark collage or illustration. Exactly two Himalayan marmots with separate complete bodies and short tails, one larger and one smaller, standing on all fours on alpine turf and gently touching noses in greeting. Side view, no embrace, no fight, no mating, no extra animals, no merged heads or limbs. Generous margins.
```

## Final verification

TypeScript compilation, all 159 tests (including the full-subject carousel regression and image metadata/hash checks), production build and subpath resource test passed. The subpath test required permission to bind a loopback port; no browser was launched. All six `dist` runtime images match `public` byte for byte.
