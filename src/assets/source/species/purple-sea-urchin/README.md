# Purple Sea Urchin image set

Codex's built-in imagegen created these six original project images on 2026-09-01 for the Fauna Atlas Purple Sea Urchin profile. The set covers a living adult on a kelp reef, external appendages, the oral feeding apparatus, a kelp-forest/barren boundary, a late pluteus larva and quadrat monitoring. Every frame is an AI-generated natural-history scene or scientific reconstruction, not a specimen voucher, microscope record, transect result or named field observation.

- Species target: Purple Sea Urchin, *Strongylocentrotus purpuratus*
- Product Chinese name: 紫海胆
- Generation tool: Codex built-in imagegen
- Generation calls: six base generations; no targeted edits
- Editable sources: `*-source.png`
- Runtime assets: `public/images/species/purple-sea-urchin/*.webp`
- Source format: opaque, single-frame sRGB PNG, 1536 × 1024
- Runtime format: opaque, single-frame sRGB WebP, 1536 × 1024
- Credit shown in the product: `Fauna Atlas · AI 生成科学情景重建`
- Research basis: [Purple Sea Urchin profile research](../../../../../docs/research/purple-sea-urchin-profile.md)

## Files and accepted observations

| Frame | Editable source | Runtime asset | Accepted observation |
| --- | --- | --- | --- |
| 01 | `01-wave-washed-kelp-reef-adult-cover-source.png` | `public/images/species/purple-sea-urchin/01-wave-washed-kelp-reef-adult-cover.webp` | One compact, short-spined purple adult grips a rock on the right side of a continuous kelp-reef scene; the left side retains open water and kelp |
| 02 | `02-spines-tube-feet-pedicellariae-macro-source.png` | `public/images/species/purple-sea-urchin/02-spines-tube-feet-pedicellariae-macro.webp` | A complete living adult carries dense short purple spines and several extended translucent, disc-ended tube feet; the smallest interspersed surface structures remain visually ambiguous |
| 03 | `03-aristotles-lantern-grazing-closeup-source.png` | `public/images/species/purple-sea-urchin/03-aristotles-lantern-grazing-closeup.webp` | An oral-side reconstruction shows five pale tooth tips around the central mouth, surrounding tube feet and a loose kelp fragment on encrusted rock |
| 04 | `04-kelp-forest-barren-boundary-source.png` | `public/images/species/purple-sea-urchin/04-kelp-forest-barren-boundary.webp` | One continuous reef grades from upright giant kelp into encrusting-algae-dominated open rock with a restrained aggregation of short-spined purple urchins |
| 05 | `05-eight-arm-pluteus-larva-source.png` | `public/images/species/purple-sea-urchin/05-eight-arm-pluteus-larva.webp` | One transparent bilateral larva has eight arms, delicate supporting rods, a simplified gut and one internal juvenile-rudiment-like structure |
| 06 | `06-rocky-reef-quadrat-monitoring-source.png` | `public/images/species/purple-sea-urchin/06-rocky-reef-quadrat-monitoring.webp` | One diver observes a complete gridded quadrat containing purple urchins and mixed algal cover without collecting or moving an animal |

## Scientific and editorial boundaries

Frame 01 establishes the intended deep-purple color, short-spined habitus and rocky kelp habitat. It cannot identify a voucher, measure test diameter or spine length, prove depth or locate the scene. Kelp placement and water clarity are artistic choices.

Frame 02 separates obvious spines from extended tube feet. Tiny structures between the spines may suggest pedicellariae, but the image cannot resolve pedicellaria type, count appendages, establish the five ambulacral zones or support species-level identification. The visible disc size and extension state are not measurements.

Frame 03 is a controlled oral-surface reconstruction. Five pale elements represent exposed tooth tips of Aristotle's lantern; the internal pyramids, muscles and compass structures remain hidden. The raised pose improves visibility and does not document a natural bite, feeding rate, tooth wear, force or diet composition.

Frame 04 combines habitat states documented in the same regional mosaic. A single still cannot prove that the pictured animals created the open patch, reconstruct the transition, measure density or area, assign a date, or show a population trend. It does not mean every dense aggregation converts kelp forest into barren ground.

Frame 05 is neither a micrograph nor a diagnostic specimen. It communicates bilateral eight-arm pluteus organization and an internal juvenile rudiment. Arm proportions, tissue colors, internal layout and skeletal-rod detail are reconstructed. The image cannot identify the larva to species, assign age, measure its 1–3 month planktonic period, infer temperature or determine competence for settlement.

Frame 06 depicts one plausible field method. The frame cannot supply counts, density, size frequency, algal percentage, health, recruitment, total abundance or a range-wide trend. A valid time series needs fixed site coordinates, repeated sampling, frame area, observer protocol and environmental context.

No frame establishes exact date, site, depth, scale, individual identity, abundance, conservation status or a field-observed event. The accepted files contain no visible labels, arrows, scale bars, logos, signatures, borders or watermarks.

## Generation outputs

The generator kept its original outputs outside the repository. Accepted files were copied into this directory, compressed with TinyPNG and converted with the project WebP pipeline. The originals remain under `/Users/chris.li/.codex/generated_images/01a05d08-d438-7122-8272-bcc0d6fa5748/`.

| Frame | Base generation |
| --- | --- |
| 01 | `exec-61bd21b4-518d-4cfe-afe6-f19cfe899248.png` |
| 02 | `exec-5f11852b-5d30-492a-827c-2a93d0580138.png` |
| 03 | `exec-86d189b3-ec6a-451a-b260-e207a8ad00aa.png` |
| 04 | `exec-dc47335b-1d0f-4ebd-939f-6ad4501ca532.png` |
| 05 | `exec-fa3eff0e-bc6e-443c-bb19-b57a20864436.png` |
| 06 | `exec-c52cca8d-9b69-4629-9b7b-2f59205beda4.png` |

## Normalized final prompt set

These prompt blocks preserve the accepted production intent rather than raw tool-call serialization.

### 01 · Adult on a wave-washed kelp reef

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Purple Sea Urchin cover image, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original natural-history photograph of exactly one living adult purple sea urchin, Strongylocentrotus purpuratus, attached to a wave-washed rocky reef in a northeastern Pacific giant-kelp forest.
Scene/backdrop: Cool green-blue shallow subtidal water, dark irregular rock with low encrusting algae, a few natural Macrocystis kelp blades and filtered surge light; no coral reef, aquarium, sand beach or human trace.
Subject: One compact low-domed sea urchin around 5–8 cm test diameter, with a dense coat of short stout tapered spines colored rich violet to dark purple. Spines remain clearly shorter than the test radius and do not resemble long needles. A few slender translucent purple tube feet grip the rock between the spines. Keep the species distinct from the larger red sea urchin.
Style/medium: Photorealistic professional underwater natural-history photography with restrained museum-publication color and real rock, algae, spine and water textures.
Composition/framing: Wide 3:2 landscape; show the complete animal and its attachment to rock in the right third around x=0.70, y=0.55; preserve quiet open kelp-water space on the left for page copy.
Lighting/mood: Soft directional kelp-filtered daylight, clear subject, mild suspended particles, observational.
Constraints: Exactly one living Strongylocentrotus purpuratus; anatomically coherent radial body; dense short purple spines; no exposed bare test, face, eyes, legs, claws, shell fragments carried on top, other animals, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: red or orange urchin, long-spined tropical urchin, giant fantasy spines, coral, tropical blue water, centered studio specimen, CGI, illustration, oversaturation, stock-photo gloss.
```

### 02 · Spines, tube feet and pedicellariae

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Purple Sea Urchin external-anatomy gallery image 2 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original field-macro photograph that makes the external appendages of one living adult Strongylocentrotus purpuratus readable without turning the scene into a labeled diagram.
Scene/backdrop: A shallow northeastern Pacific rocky tide pool, dark wet rock with a thin film of encrusting algae and clear cool seawater.
Subject: Exactly one complete compact adult in a close three-quarter aboral and side view. Its low rounded test is densely covered in short stout tapered deep-violet spines, all shorter than the test radius. Between the spines, show several slender translucent purple tube feet ending in small soft discs, arranged in five radial ambulacral zones, and many tiny stalked three-jawed pedicellariae that remain much smaller than the spines.
Style/medium: Photorealistic museum-quality natural-history macro photography with realistic wet tissue, calcitic spines, fine tube feet and microtexture.
Composition/framing: Exact 3:2 landscape medium macro; keep the entire animal in frame and retain enough adjacent rock to show attachment and scale.
Constraints: One living Strongylocentrotus purpuratus; dense short purple spines, delicate tube feet and tiny pedicellariae; no cutaway, exposed bare test, giant claws, face, eyes, legs, other animals, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: red sea urchin, long needle spines, tropical urchin, large crab-like pincers, flowers, tentacles, CGI, illustration, oversaturation or specimen staging.
```

### 03 · Five teeth at the oral surface

```text
Use case: scientific-educational natural-history reconstruction
Asset type: Fauna Atlas Purple Sea Urchin feeding-apparatus gallery image 3 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original close view of the oral underside of one living Strongylocentrotus purpuratus grazing a thin algal film from a rock, showing the mouth and exactly five tooth tips of Aristotle's lantern.
Scene/backdrop: Cool clear northeastern Pacific tide-pool water over a flat dark rock coated with a thin olive and pink encrusting algal film.
Subject/action: One adult viewed low from the side and partly underneath as it arches over a shallow rock edge. Around the underside are short deep-purple spines and fine tube feet gripping the rock and moving a small piece of brown kelp toward the central mouth. At the center, show a small round soft peristomial area with exactly five narrow pale calcitic tooth tips meeting in pentaradial symmetry. The teeth are only the tips of the internal lantern, not a mammal jaw or open cavern.
Style/medium: Photorealistic scientific natural-history reconstruction with credible wet tissue, spine bases, tube feet, rock grain and algal texture.
Constraints: One coherent Strongylocentrotus purpuratus; exactly five tooth tips; non-graphic; no removed shell, cutaway, internal organ exposure, face, eyes, tongue, vertebrate teeth, other animal, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: circular lamprey mouth, shark teeth, dentures, five separate mouths, giant exposed jaw, long-spined tropical urchin, red urchin, CGI, flat diagram, oversaturation or studio dissection.
```

### 04 · Kelp-forest and barren boundary

```text
Use case: scientific-educational ecological reconstruction
Asset type: Fauna Atlas Purple Sea Urchin kelp-ecology gallery image 4 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create one continuous original underwater scene showing a natural boundary between a giant-kelp stand and an adjacent purple-sea-urchin barren on a northeastern Pacific rocky reef.
Scene/backdrop: Shallow cool green-blue water over one connected sloping rock reef. One side retains upright Macrocystis pyrifera stipes, holdfasts and a moderate canopy with mixed low algae; the adjoining open rock has mostly pink and gray encrusting algae and much less erect kelp. Keep the transition irregular, never a graphic split or before/after collage.
Subjects/action: Show about twelve living Strongylocentrotus purpuratus across the boundary, denser on the open rock. Each is compact with short stout tapered dark-purple spines. A few nearest urchins contact loose drift-kelp fragments or graze low algal cover; no individual severs a whole mature kelp in the frame.
Style/medium: Photorealistic wide natural-history field photography with credible underwater scale, surge, rock, kelp and suspended particles.
Constraints: One continuous reef scene; only Strongylocentrotus purpuratus animals; no red sea urchins, fish, otters, diver, cages, text, labels, arrows, map, dividing line, logo, signature, border or watermark.
Avoid: tropical coral reef, long-spined urchins, apocalyptic dead forest, clean left-right infographic, duplicated clone pattern, hundreds of identical animals, exposed white tests, bright fantasy color, CGI or painting.
```

### 05 · Eight-arm pluteus larva

```text
Use case: scientific-educational
Asset type: Fauna Atlas Purple Sea Urchin development gallery image 5 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create a microscopy-style reconstruction of one living late eight-arm pluteus larva of Strongylocentrotus purpuratus suspended in seawater before metamorphosis.
Scene/backdrop: Dark muted blue microscopy field with a few tiny out-of-focus plankton particles; no slide labels, ruler, adult seafloor or collage.
Subject: Exactly one complete transparent bilaterally symmetrical echinopluteus larva. Show eight long slender tapering larval arms arranged as four paired sets, each supported by delicate continuous calcitic skeletal rods and edged by a fine ciliated band. Inside the small central body, show a simple translucent esophagus, rounded stomach and hindgut plus one compact developing juvenile rudiment on the left side. The rudiment remains inside the larval body and carries only minute incipient podia and spine primordia.
Style/medium: High-resolution fluorescence-and-darkfield-inspired scientific reconstruction with transparent living tissue, subtle pale cyan and violet structures and restrained depth.
Composition/framing: Exact 3:2 landscape; keep the entire larva and every arm tip in frame with generous dark water around it.
Constraints: Exactly one larva; exactly eight coherent arms; bilateral larval form; one internal juvenile rudiment; no adult sea urchin, eggs, sperm cloud, multiple developmental stages, text, labels, arrows, scale bar, logo, signature, border or watermark.
Avoid: jellyfish, squid, starfish, virus, flower, eight identical radial tentacles, vertebrate embryo, giant adult spines, literal histology, CGI gloss or oversaturation.
```

### 06 · Rocky-reef quadrat monitoring

```text
Use case: photorealistic-natural
Asset type: Fauna Atlas Purple Sea Urchin monitoring gallery image 6 of 6, exact 1536 × 1024 horizontal 3:2, opaque sRGB
Primary request: Create an original documentary underwater photograph of a marine ecologist recording purple sea urchins and algal cover with a fixed square quadrat on a northeastern Pacific rocky reef.
Scene/backdrop: Cool shallow subtidal reef at the irregular edge of a giant-kelp forest and encrusting-algae patch; natural rock relief, a few kelp stipes and clear coastal water.
Subjects/action: One scuba diver hovers behind a plain one-meter square quadrat with a subtle unlabeled internal cord grid. Inside and near it are several living Strongylocentrotus purpuratus with short dark-purple spines plus natural patches of erect and encrusting algae. The diver holds a blank slate and observes the frame without collecting, moving, crushing or culling.
Style/medium: Photorealistic field-survey documentary photography with realistic dive gear, wet rock, kelp and water optics.
Composition/framing: Exact 3:2 horizontal wide-medium view; show the complete quadrat, diver and enough reef outside the frame to establish survey context.
Constraints: One diver; one complete square quadrat; several coherent short-spined purple sea urchins; non-contact survey; no animal handling, collection bag, hammer, spear, removal pile, damaged kelp, text, numbers, readable writing, brand, logo, signature, border or watermark.
Avoid: tropical reef, red or long-spined urchin, laboratory tank, staged tourism photo, floating quadrat, duplicated gear, malformed hands, disaster scene, CGI, illustration or oversaturation.
```

## Processing and static checks

The accepted source PNGs were compressed in place with the repository's TinyPNG workflow. The runtime assets were generated with `cwebp -q 82 -m 6 -mt` through `npm run convert:webp`.

```bash
npm run compress -- src/assets/source/species/purple-sea-urchin/*-source.png
npm run convert:webp -- src/assets/source/species/purple-sea-urchin/*-source.png
```

ImageMagick reported all twelve accepted files as opaque, single-frame sRGB images at 1536 × 1024.

## Accepted asset hashes

| Frame | Source PNG SHA-256 | Runtime WebP SHA-256 |
| --- | --- | --- |
| 01 | `7870e9e221eb418db592f3d676c50498320982d55ac03849e41faee5524b9988` | `41206bdf4c5ff23e8d5eb7c5436b3b12acf0f6e64231baaf410b447101516099` |
| 02 | `5012dd5ee0fdbf1c7122c2f44fcdcdf6ea5408a94779c33bb158480279c4094e` | `73e93095645ae3c18440f3cef9f40c8c1f2dbda8c3b238c0b6ca9aa95f678775` |
| 03 | `7954a484b9416c50259fbaeea07c8b469480feff8b0d7b302f9047e3ae1a5dde` | `3ab22e470256995d65908b5fb386a8ec21df618fef67d4a371611e802494b4e1` |
| 04 | `4f836651f351648056d6a7b5842ff3c77bd16d4eb2bd97f666fe49a48a76e3b7` | `845a7cbf563ad9d508d56f2b99c667b1fab3c7f5f3cebffdf540c9a6cde08ff9` |
| 05 | `0a33167355c1e3765d47b6cf3907ec1a126a742891dda7df5020ade152980912` | `75f89c185b6fb2d7f92744a2959d3a0d73d948d3796c52e00b5a55c9152c8fa7` |
| 06 | `3566781be06c2b2df3f48ca71ff99e81e648f14393136ae06db874e1d639c5c4` | `a9f53cf26d4cab326ae34cac6b6afbeb51bb5be745f6d32a2375ff91a54e9679` |
