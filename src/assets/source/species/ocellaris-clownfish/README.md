# Ocellaris Clownfish image set

Six 1536 × 1024 images created with the built-in imagegen tool on 2026-09-07. Source PNGs live here; runtime WebPs live in `public/images/species/ocellaris-clownfish/`. These are AI scientific scene reconstructions, not field records.

## Final generation prompts and cover revision

### 01-reef-cover

```text
Use case: photorealistic-natural. Asset type Fauna Atlas hero cover. Generate exact 1536x1024 landscape underwater natural-history photograph. ONE small Amphiprion ocellaris clownfish swimming LEFT in clear muted blue-green water above a distant softly blurred reef. Accurate orange fish, exactly three white vertical body bars edged with thin black, rounded tail, natural fins, no cartoon. CRITICAL: entire fish including nose, all fins and tail fits inside x=1140..1300 and y=325..405 pixels, small environmental subject centered at 79 percent width and 36 percent height. Keep left 65 percent quiet open water. Reef is low on bottom edge, no visible anemone or other foreground animal. Full silhouette unobscured with generous real water around it. Natural filtered daylight, realistic fine scales. No other fish, text, watermark, frame, collage.
```

### 01-reef-cover-final-edit

```text
Edit this 1536x1024 underwater photo. Shrink the ONE clownfish to 55 percent current linear size and move its center 270 pixels RIGHT. Desired complete fish boundary x=1160..1315 y=328..405. Keep y center at 365. Reconstruct clean blue-green water at former location. Keep accurate Amphiprion ocellaris appearance and entire silhouette and all fins. Thin black outlines along THREE white bars, not broad black patches. Keep same natural background, no additional animals or text.
```

### 02-field-marks

```text
Use case: photorealistic-natural. Original natural-history underwater photograph, exact 1536x1024 landscape. Anatomically accurate Amphiprion ocellaris: orange body, THREE vertical white bars with narrow black outlines, rounded caudal fin, natural symmetrical paired fins and continuous dorsal fin, realistic eyes and fine scales. Restrained natural colors, soft filtered sunlight. No text, no watermark, no collage, no cartoon, no artificial aquarium equipment. One complete clownfish in left-facing side profile fills middle 60 percent of frame, all fins and tail visible with ample margins. Clean blue-green water backdrop, distant reef blurred. Show three white bars distinctly and thin black fin edges.
```

### 03-anemone-shelter

```text
Use case: photorealistic-natural. Original natural-history underwater photograph, exact 1536x1024 landscape. Anatomically accurate Amphiprion ocellaris: orange body, THREE vertical white bars with narrow black outlines, rounded caudal fin, natural symmetrical paired fins and continuous dorsal fin, realistic eyes and fine scales. Restrained natural colors, soft filtered sunlight. No text, no watermark, no collage, no cartoon, no artificial aquarium equipment. One clownfish nestled among natural tan slender tentacles of Heteractis magnifica sea anemone. Fish takes middle 40 percent width, face and three body bars visible, lower fins partly occluded by tentacles. Intimate eye-level underwater macro, entire fish stays in frame, soft olive background. Anemone tentacles are living cylinders with rounded tips, not plants.
```

### 04-size-hierarchy

```text
Use case: photorealistic-natural. Original natural-history underwater photograph, exact 1536x1024 landscape. Anatomically accurate Amphiprion ocellaris: orange body, THREE vertical white bars with narrow black outlines, rounded caudal fin, natural symmetrical paired fins and continuous dorsal fin, realistic eyes and fine scales. Restrained natural colors, soft filtered sunlight. No text, no watermark, no collage, no cartoon, no artificial aquarium equipment. Exactly TWO clownfish beside a tan sea anemone on reef. Both whole fish in frame, lateral view facing left, one visibly larger female phenotype and one smaller male phenotype around 65 percent its length, same orange and three white band patterns. Separated silhouettes, fish above tentacles. Natural calm interaction, no visible sex organs.
```

### 05-egg-care

```text
Use case: photorealistic-natural. Original natural-history underwater photograph, exact 1536x1024 landscape. Anatomically accurate Amphiprion ocellaris: orange body, THREE vertical white bars with narrow black outlines, rounded caudal fin, natural symmetrical paired fins and continuous dorsal fin, realistic eyes and fine scales. Restrained natural colors, soft filtered sunlight. No text, no watermark, no collage, no cartoon, no artificial aquarium equipment. One full adult clownfish angled head slightly downward close to a small attached patch of tiny elongated orange eggs on a sloping bare rock beside an anemone. Side view, pectoral fin spread in natural egg-tending posture. Fish and small egg patch fill central half, fish tail fully inside frame. Eggs form a dense thin attached carpet, not round oversized balls, no water-motion arrows.
```

### 06-reef-foraging

```text
Use case: photorealistic-natural. Original natural-history underwater photograph, exact 1536x1024 landscape. Anatomically accurate Amphiprion ocellaris: orange body, THREE vertical white bars with narrow black outlines, rounded caudal fin, natural symmetrical paired fins and continuous dorsal fin, realistic eyes and fine scales. Restrained natural colors, soft filtered sunlight. No text, no watermark, no collage, no cartoon, no artificial aquarium equipment. One complete clownfish swimming a short distance above its tan host anemone, mouth slightly open near tiny sparse plankton-like particles in the water. Medium wide reef view, entire fish fills central 35 percent width, anemone lower right, muted reef and blue water background. Particles tiny and non-specific; no giant prey, no feeding pellets.
```

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `e26938109c2247a7e609fbc43aacf2f7a4248686736f23af4882ef9e372a8473` | `70fd1d363900d1a3b4e0afa314b0007199ed8f4e8fbc75976207530add6ad756` |
| 02 | `3880ed4ee32fac6e0012bea6bb0736a70ec3ce91a120ff92cf12ed974732ad7b` | `44d560655dc354aa06c740e378e3875e4f2075fcf2092c8dc733b1fe72310f76` |
| 03 | `b307cf558153df24b37120e2024038803b54582b887cbeca1f4c9aa246453c7a` | `ef69419d50e43833cb959c6800e91892f84df559a48bb71230d967cc2c76dacb` |
| 04 | `f993d09ceda2ebcc582c2ce0d8185b89e2d7ed4d0f4069e0e1dbf0da6b197f9e` | `7582cdee5ad756dec51a01ad77bb2851d95990db6ea59b3cd0293350a64fc56e` |
| 05 | `4ac193da6faca0d2f649f3b1f709195a51295215254e0e1a8b39f29d72353d32` | `5e6bb820f9a5995e0be31cd1bd3fdfc4784ab4dfd4999ae168615a9ed55ce712` |
| 06 | `2af88e9d2097cebe40c12ce679bcd59b2fa8d5b584c62807121ebd7964ee1d62` | `5b5a52f2162dd24062aaeb49aaefa9096340ec64342d7037744d7ecfaf21f1e9` |

## Cover inspection and acceptance

The initial cover placed the fish too far left and too large. The accepted targeted edit is `exec-3a8c6fb3-3c29-4ab3-aa6b-c7f2b919bf21.png`. Actual placement differs from the requested box; acceptance uses the inspected pixels.

- Source and runtime dimensions: 1536 × 1024.
- Committed focal point: `{ x: 0.84, y: 0.34 }`.
- Conservative full-subject boundary: left 1080, top 325, right 1270, bottom 415 source pixels. Includes the muzzle, dorsal fin, visible paired fins, anal fin and complete caudal fin including its translucent edge.
- Boundary center is 76.5% of source width. Left 40% contains quiet water; reef background stays low in the frame.
- Generated source, TinyPNG-compressed cover PNG and runtime WebP were inspected at original resolution. Far-side paired fins overlap the body in this lateral pose. The small environmental cover cannot establish fin-ray counts; gallery 02 supplies a close view. Fine textures soften after palette and WebP compression, without loss of the reviewed silhouette.
- Runtime SHA-256: see accepted image 01 hash above, also locked in `tests/hero-carousel.test.mjs`.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

`npm run test:carousel` passed all 36 states for the full-subject case, including at least 24 CSS pixels of clearance from viewport edges and the copy/carousel component rectangles. Verification used static image inspection and source-derived crop and animation geometry. No GUI or headless browser was launched.

## Compression and gallery review

All six PNGs passed TinyPNG, shrinking from 12,737.5 KiB to 3,578.4 KiB. `cwebp -q 82 -m 6 -mt` produced six runtime WebPs totaling 620.9 KiB. No fallback compressor was used.

The generated gallery images and final runtime WebPs were inspected at original resolution. Frame 02 shows the whole side profile, with far-side fins naturally occluded. Frame 03 hides some lower fins among tentacles; the anemone's species and mucus chemistry cannot be established visually. Frame 04 shows two separate fish of different sizes, without evidence of sex or an actual sex-change event. Frame 05 shows an attached orange egg patch and a spread pectoral fin; individual attachment structures, egg count, water motion and developmental stage remain unresolved. Frame 06 shows a fish with its mouth open near suspended particles; their identity and ingestion are not established. No visible text or watermarks. Captions retain these limits.

## Content sources and scope

The profile follows the Australian Museum and Taiwan Fish Database classification: Animalia → Chordata → Actinopterygii → Perciformes → Pomacentridae → Amphiprion. FishBase and WoRMS arrange the higher ranks differently; the profile does not import their Teleostei / Ovalentaria labels into this path. FishBase supplies maximum total length, range, depth and the 2021-02-03 IUCN assessment date/LC status. The IUCN page could not be retrieved directly; no criteria or global population estimate are invented, and trend remains unknown. The museum's shorter size statement is not combined with FishBase's maximum into a synthetic adult length range.

The 2025 BMC Biology study supports a role for reduced mucus sialic acids in sting avoidance, not universal immunity. The CMFRI and 2022 Hormones and Behavior studies support male-to-female sex change and differing timing of gonadal/behavioral changes. The 2020 Scientific Reports study supports conditional alloparental care in captive experiments, not its frequency in the wild. Profile source links preserve the references and access dates.

## Verification

`npm run typecheck` and all 160 tests in `npm test` passed, including image format/dimension/hash validation, taxonomy integration, full-subject carousel geometry and the built-site subpath resource test. The production build passed and refreshed the tracked `dist/` output. Vite reports the existing large JavaScript chunk warning. All six new `dist` WebPs match their `public` counterparts byte for byte.
