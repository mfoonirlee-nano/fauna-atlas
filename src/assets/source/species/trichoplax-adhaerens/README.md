# Trichoplax adhaerens image set

Six 1536 × 1024 images generated with the built-in imagegen tool on 2026-09-07. Source PNGs are stored in this directory; runtime WebPs are in `public/images/species/trichoplax-adhaerens/`. No CLI fallback.

## Final prompts

See [prompts.json](./prompts.json) and [edits.json](./edits.json). Accepted edits shrink the cover animal and remove incorrectly enlarged animals from the habitat scene.

## Content evidence and scope

Sources accessed 2026-09-07:

- [Tessler et al. 2022](https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2022.1016357/full) and [NCBI taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=10228): Placozoa → Uniplacotomia (class) → Trichoplacea (order) → Trichoplacidae → Trichoplax. The class and order retain Latin display names rather than unverified Chinese translations. The phylum contains multiple species.
- [Smith et al. 2015](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0136098): ventral ciliary gliding, pauses during feeding, local lipophil secretion and external algal digestion; culture fission. Coordination observations support cell communication but do not identify every signaling pathway. The paper's historical single-species statement is superseded by later taxonomy.
- [World Placozoa Database](https://www.marinespecies.org/placozoa/): body organization and cryptic diversity. Phylum-wide locality records and uncertain aquarium origins do not establish the species range. Country list and map center remain empty.

No verified global IUCN assessment was found. NE is provisional catalogue handling without an assessment year, and population trend is unknown. Size, longevity and population metrics remain empty. Habitat actions are recommendations rather than quantified species-specific threats.

## Visual limitations

All images are AI scientific reconstructions, not specimen micrographs. Cell granularity, colors and body margins are illustrative and cannot diagnose a species. The ciliary cutaway exaggerates tissue spacing and shows multiple cilia near each visible cell; it explains contact with the substrate, not cilia counts or ultrastructure. The feeding image enlarges algae and secretion granules and lifts the edge to show the feeding space. Fission is one illustrative posture, not a timed sequence. The habitat scene is not a geolocated record. Gallery images provide close views because the cover animal is small to fit hero copy and controls.

## Cover review

Source PNG and runtime WebP inspected at original resolution. Dimensions: 1536 × 1024. Visually measured complete subject boundary: `{ left: 1075, top: 337, right: 1208, bottom: 435 }`, including the translucent outer edge. Horizontal center: 74.3%. Committed focal point: `{ x: 0.92, y: 0.35 }`. Left 40% remains calm teal background; real background surrounds the entire animal.

Runtime cover SHA-256: `1f08c615aedebc60bf4874c2ef629c3cc04d04372d3a475546ba773ac90fda61`.

The full-subject carousel regression passes at least 24 CSS pixels of clearance from viewport edges, copy and carousel panels at every required viewport and animation endpoint. No browser launched.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Compression and accepted hashes

TinyPNG compressed all six accepted sources successfully. Runtime conversion used `cwebp -q 82 -m 6 -mt` through the repository script. All six runtime WebPs were inspected at original resolution. Compression softens fine cellular texture.

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `13747457233534cd54517a0d1c92408f2ff4f8510daf62f4fcc6f7ad73b938e0` | `2d5500185833e09ffdfb8025b81c3df2d8d28a40d860708f07ed691841d09328` |
| 02 | `250c3f5c3765250586aecc3627dacb373ef6eff4421493b216161e566accada1` | `c6dbd075d3bb02c2089512858cd80629226a4618b08d38a83ffc992f73b97397` |
| 03 | `b6e50b7f122db31eb0c714c4cdff1879bcae751f77edef9ab2420b5033a172db` | `ab7ef954196fac676fda31ee9ee5577378922000bce2bf00b0fba0767a077811` |
| 04 | `9dfd3233fc130993e6cb44ed41963adc9bb99415659f1ab6db5e40c811f7fa73` | `a9dc7eb13cea6a838d707c5365e81a18502985f915703e150ffb88416ffe6b2b` |
| 05 | `c8779c525b9c86c70b6c6fd85b8666daf1fcd99b469dd656d35a5bd22e2b6be6` | `b7c6fb75510a5bd392460e026ad858ad87264eab9349ee6ce03a941c44ecd1ff` |
| 06 | `180e26620e940b8d8dee4c580b1798b61764b5aaf52c6f70fb73fde186647df2` | `c8a67a94554d050034fa269b1306ce406f00364110ec9dd76786e94c219c7c65` |

## Verification

`npm test` passed all 173 tests, including taxonomy integration, six-image dimensions and accepted hashes, hero geometry and deployment-subpath image delivery. TypeScript checking and production build passed. `git diff --check` passed. The build refreshed tracked `dist/` assets; Vite retains its existing large-chunk warning.

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-biofilm-cover.webp` SHA-256: `2d5500185833e09ffdfb8025b81c3df2d8d28a40d860708f07ed691841d09328`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.92, "y": 0.35}`. Conservative full-subject boundary: `{"left": 648, "top": 120, "right": 1432, "bottom": 908}`, 784×788 source pixels (previously 133×98). Boundary center is 67.7% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the entire translucent gently lobed outer margin. No head, limbs or invented internal organs appear. Granularity and edge contrast are illustrative microscopy reconstruction, not diagnostic cell counts or measurements. Real background surrounds all lobes. The left 40% contains softly defocused teal biofilm background. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 98.7×72.7 → 175.1×176.0 | 72.45 | 48.00 | 40.00 | Pass |
| 390×760 | 98.7×72.7 → 175.1×176.0 | 107.45 | 48.00 | 40.00 | Pass |
| 1366×768 | 118.3×87.2 → 425.8×428.0 | 96.00 | 118.25 | 48.00 | Pass |
| 1920×900 | 166.2×122.5 → 557.2×560.0 | 96.00 | 196.62 | 48.00 | Pass |
| 2560×900 | 221.7×163.3 → 557.2×560.0 | 96.00 | 363.02 | 48.00 | Pass |
| 3840×900 | 332.5×245.0 → 557.2×560.0 | 96.00 | 695.82 | 48.00 | Pass |

`npm run test:carousel`: all 83 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
