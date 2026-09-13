# White-spotted Pufferfish image set

Six 1536 × 1024 scientific scene reconstructions generated with the built-in imagegen tool on 2026-09-07. Source PNGs live here; runtime WebPs live in `public/images/species/white-spotted-pufferfish/`.

## Prompts and edits

[Original prompts](./prompts.json) and [accepted correction prompts](./edits.json). The cover edit moved the fish downward after the first mobile animation check found only 23.7px clearance from the panel. Three gallery edits replaced oversized circular gill cavities with narrow slits beside the pectoral fins. No CLI fallback.

## Original-resolution visual inspection

Inspected all six final compressed PNGs and all six runtime WebPs at original resolution. Cover full-subject boundary: `{ left: 1212, top: 348, right: 1363, bottom: 413 }`, including snout, translucent dorsal and pectoral fins, anal fin and tail. Source dimensions: 1536 × 1024. Horizontal subject center: 83.8%. Committed focal point: `{ x: 0.92, y: 0.32 }`. The left 40% has quiet water and sand; real water surrounds the complete fish.

The cover fish is intentionally small. Gallery 02 supplies a larger side view. White spots are more regular than a diagnostic specimen, and the gill openings, fin rays and tiny skin spinules remain illustrative. Gallery 03 shows a slightly oblique circular nest; the fish-to-nest ratio and ridge count are not measurements. Gallery 04 illustrates a digging posture without proving its movement. Gallery 05 does not resolve individual eggs; sand particles cannot establish egg size or abundance. Gallery 06 is an animal-free habitat reconstruction without geographic coordinates. Compression softens fine sand and fin detail. All six are generated reconstructions, not field photographs.

## Hero acceptance

`npm run test:carousel` passes the reviewed full-subject case, including 24 CSS pixel clearance from viewport edges, hero copy and carousel panels. Verification uses static asset inspection and crop geometry; no browser was launched.

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Content evidence

Accessed 2026-09-07. [FishBase](https://www.fishbase.se/summary/67499) supplies the accepted name, family and order, Japanese range, depth records, morphology and NE status. Its 12cm maximum and female standard length are not mixed with the approximately 10cm total length used in construction studies. The genus Chinese name follows [Academia Sinica's fish database](https://fishdb.sinica.edu.tw/mobi/species.php?id=383568); that related species' diet is not transferred here.

[Kawase et al. 2022](https://www.nature.com/articles/s41597-022-01466-4) supports the nest structure, fine-sand accumulation, male-only egg care and breeding cycle. [Mizuuchi et al. 2018](https://pubmed.ncbi.nlm.nih.gov/30120331/) supports the approximate fish/nest scales and construction-rule simulation. [Kawase et al. 2013](https://pubmed.ncbi.nlm.nih.gov/23811799/) supports reproduction and new-nest construction. Publisher/PMC access for the latter two was inconsistent; indexed abstracts and the 2022 paper corroborate the retained claims. The [original description](https://mhlw-grants.niph.go.jp/system/files/2014/144031/201426026A/201426026A0011.pdf) is linked for provenance; its indexed abstract and FishBase corroborate the naming and type locality. No unexamined numerical detail from the PDF is used.

[Bond et al. 2020](https://pubmed.ncbi.nlm.nih.gov/32820821/) reports similar Australian nests without identifying their makers as this species. The profile therefore does not add Australia to its range. Food composition and population trend remain unverified. Disturbance and water quality are framed as monitoring concerns, not measured population threats.

## Compression and accepted hashes

TinyPNG compressed all accepted PNGs, including the four edited sources. No fallback. Runtime conversion uses the repository script with `cwebp -q 82 -m 6 -mt`.

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `32156325fa8f7f88e96a3766f70653c066d7bebae679058caa40152cc850a018` | `3e23beca69d1204b606e3ddcc43a93e54330260f953beb81bdb05b5588557942` |
| 02 | `8a825fddcc5552d564f5e8070dfc8d1f200a6a7db43fe36c54d0b1c0a21fad8e` | `392d20c0865ab84a73128e6d1995b041d0210bec0ee5ed403504c2a4e7956f78` |
| 03 | `5d956e91c2b1540582c87cce811fd9250dc67196a2b92fbdf5c6850cbae0f094` | `1c63f4e95fd0f97bd37dafc119e095d62face96c2ac485adbd1496ea160708ab` |
| 04 | `f7036c48590a3977fd14f4f34cfc8c0925019a5649c99c826e2abfe1197a5caf` | `b70f4b7b39d2f37218227bff4d6b27afc49539fbed3c4121a3388cd543cc0437` |
| 05 | `4f64dcf148080dca53b773990f1cb48ee131574383d4ee873c774f271a31053f` | `466ff00e0b591185999c76fdb3ac158f3efe8215aec473adeb605011aaf1bc8a` |
| 06 | `6616c661a14bc9e1486d9b5b27ff0f86e32d0344f58c010204b29365fccdebd3` | `9ebcc78259ead4406e072ad7eb7a675d3efff0c72719db41feb48802ea423cb7` |

Final source total: 5622.4 KB. Runtime total: 1538.3 KB.

## Verification

`npm test` passed all 168 tests, including the new taxonomy/media integration case, reviewed image dimensions and hashes, hero crop geometry, and HTTP image delivery below a deployment subpath. `npm run typecheck` and the production build passed. The build refreshed tracked `dist/` output and reported the existing large JavaScript chunk warning. `git diff --check` passed.

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-sand-cover.webp` SHA-256: `0f83288ea5ea7ced799051186900513736f90c28ca5d951e2cded013b39d988c`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.92, "y": 0.32}`. Conservative full-subject boundary: `{"left": 610, "top": 333, "right": 1481, "bottom": 687}`, 871×354 source pixels (previously 151×65). Boundary center is 68.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the mouth, dorsal and anal fins, visible pectoral fin and complete tail. The far-side pectoral fin is naturally occluded. The body is uninflated and has no porcupine spines. Real water remains around every visible extremity. The left 40% remains quiet sand and water; the mouth starts just beyond this field. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 112.1×48.2 → 272.0×110.5 | 24.00 | 80.73 | 72.73 | Pass |
| 390×760 | 112.1×48.2 → 342.0×139.0 | 24.00 | 66.50 | 58.50 | Pass |
| 1366×768 | 134.3×57.8 → 559.7×227.5 | 72.00 | 51.32 | 148.26 | Pass |
| 1920×900 | 188.8×81.2 → 825.6×335.5 | 72.00 | 62.40 | 160.23 | Pass |
| 2560×900 | 251.7×108.3 → 1132.8×460.4 | 72.00 | 75.20 | 97.80 | Pass |
| 3840×900 | 377.5×162.5 → 1377.9×560.0 | 96.00 | 285.47 | 48.00 | Pass |

`npm run test:carousel`: all 69 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
