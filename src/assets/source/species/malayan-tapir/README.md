# Malayan Tapir image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/malayan-tapir/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Animal Diversity Web — 马来貘分类与形态](https://animaldiversity.org/accounts/Tapirus_indicus/)
- [San Diego Zoo — 貘的鼻子、幼崽和生活](https://animals.sandiegozoo.org/animals/tapir)
- [IUCN SSC Tapir Specialist Group — Tapir Tracks 马来貘范围与保护](https://tapirs.org/wp-content/uploads/2018/06/TAPIR-TRACKS-A-Curriculum-Guide-for-Educators.pdf)
- [Animal Diversity Web — 马来貘全球 IUCN 等级](https://animaldiversity.org/accounts/Tapirus_indicus/#conservation)

访问日期：2026-09-10。ADW 支持奇蹄目、貘科、貘属、成体鞍斑、幼崽条纹、短鼻取食与全球 EN。分布采用 IUCN SSC Tapir Specialist Group 的马来半岛、泰国、缅甸与苏门答腊范围，不沿用旧 ADW 文中的越南、柬埔寨。体重采用 ADW 的 250–540 千克范围；未明确测量端点的体长不写成可比较的全长。未核实评估日期和全球趋势，保留空值与 unknown。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：身上的白色鞍斑。
- `03-observation.webp`：会弯的短鼻子。
- `04-observation.webp`：幼崽的条纹。
- `05-observation.webp`：水边走一走。
- `06-observation.webp`：沿着树林找食物。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1078, "top": 328, "right": 1248, "bottom": 426}`，包括短鼻、双耳、躯干、可见四肢与蹄端、尾端。边界中心位于源宽度的 75.7%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.83, "y": 0.34}`。

运行封面 SHA-256：`accaddb648d8479cae8cfe65e62d04d34188e48a03ed0a775d3cd5cc4a8e96a8`。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 55.44 | Pass 49.97 | Pass 52.02 | Pass 53.39 | Pass 52.02 | Pass 53.39 |
| 390x760 | Pass 55.44 | Pass 49.97 | Pass 52.02 | Pass 53.39 | Pass 52.02 | Pass 53.39 |
| 1366x768 | Pass 99.66 | Pass 101.80 | Pass 101.00 | Pass 76.19 | Pass 65.28 | Pass 100.46 |
| 1920x900 | Pass 156.70 | Pass 158.57 | Pass 157.87 | Pass 149.51 | Pass 134.19 | Pass 157.40 |
| 2560x900 | Pass 124.27 | Pass 124.84 | Pass 124.62 | Pass 124.48 | Pass 124.62 | Pass 124.48 |
| 3840x900 | Pass 109.00 | Pass 140.00 | Pass 250.74 | Pass 58.64 | Pass 58.14 | Pass 252.68 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `d55b4e32cbee0a42d9af26cd6f10b9f8e2a8cc6340f42eb0fbcc132ee7d28609` | `1d5d145c178fc0748f95d37447b8a1d0fbb99f7b8e18b72efc53b3e0a3c9995f` |
| 02 | `b009a18c68c3d879512f96f228eae0a47227470111265cdf9bbf3288d143d0a9` | `18456a0db5ea69ab32bad0d6b609423df27c374cfcc42c6ec0837f520d5b5c46` |
| 03 | `64fa3e0a0e3f99af7244a19d0a8aad49e783fd6c3369a7fb42a70c6002d89ce2` | `7f2920bd619c66c371dae82566113a13268d7f8a9a09c1cd64b4bd5efef2f5fc` |
| 04 | `4b3d3cc7f320b940a26023458f9589e7454ce7f3c529ad42a7eaaa0cdd385b55` | `b3530102a21d026df205544478d05dea7c22f97922dd739659ee7775b1127e7a` |
| 05 | `b18d9996f9ec783a27f700f5d8efb72ce8b78c78012210e3e7873c2441debdc9` | `48d3df284da4e676633f123f9d64cf9cf84d43531e4375f5bdc6ae279cdb49f3` |
| 06 | `a578d3c9e19124b41606e5226c5e9dcb813d1f67e88082674adc34e3f8437fb1` | `847d9149e587434fc4a540cff2ba612b1af33de1d451510ee7c487f059364a60` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `bfc779f1cd4108e7a2928c1a0caefc3cde44fde876858c0a5afe7da17f762cc7`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[500, 238, 1410, 802]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.

## 2026-09-12 single-cover framing verification

This section supersedes earlier carousel failure tables after the subject-frame layout change. Runtime hash: `bfc779f1cd4108e7a2928c1a0caefc3cde44fde876858c0a5afe7da17f762cc7`. Source/runtime dimensions: 1536×1024. Current visually reviewed full boundary: `{"left": 500, "top": 238, "right": 1410, "bottom": 802}` (910×564 source pixels). Committed focalPoint: `{"x": 0.83, "y": 0.34}`. Includes the visible muzzle/bill, ears or antlers, feet/flippers/claws and complete tail where present; no head-only proxy.

Re-inspected the runtime WebP at original resolution. Earlier source inspection and generation prompts remain in the regeneration record; no historical PNG was recreated. Quokka whisker and California sea-lion flipper boundaries were expanded during this pass. The source center is 62.2% of the source width. Source composition remains rejected: the muzzle occupies the left 40% copy area. Regenerate again; geometry passing does not accept this cover.

The carousel loads the same canonical WebP as the species profile. For reviewed covers it fits the complete measured silhouette to a dedicated region, using CSS container units and 24px inner clearance. It centers the reviewed silhouette; the committed focalPoint remains for ordinary cover/profile presentation but does not override full-subject fitting. The frame masks only background at its edges. No extra image variants or duplicate background animal are loaded. The framed layout remains active while either the entering or leaving slide needs it, including transitions to legacy covers.

Static geometry overlays for all six required viewports were visually checked against the current runtime images. These are mathematical image composites with copy/panel rectangles, not browser screenshots or font rasterization. Desktop copy stays within the left half, compact controls occupy y=100..196; mobile controls occupy y=92..188 and copy starts at y=452. The footer is below the frame. The tests bind CSS frame dimensions and opacity-only keyframes, runtime boundaries and image hashes. Settled, initial, forward-enter, forward-leave, backward-enter and backward-leave share the geometry below because animation changes only opacity. Every listed value passes the 24 CSS pixel gate.

| Viewport | Old source subject → current source subject | Old hero subject size → current hero subject size (CSS px) | Viewport minimum | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- | --- |
| 320×760 | 170×98 → 910×564 | 126.2×72.7 → 272.0×168.6 | 24.00 | 51.71 | 43.71 | Pass |
| 390×760 | 170×98 → 910×564 | 126.2×72.7 → 284.0×176.0 | 53.01 | 48.00 | 40.00 | Pass |
| 1366×768 | 170×98 → 910×564 | 151.2×87.2 → 559.7×346.9 | 72.00 | 51.32 | 88.56 | Pass |
| 1920×900 | 170×98 → 910×564 | 212.5×122.5 → 825.6×511.7 | 72.00 | 62.40 | 72.15 | Pass |
| 2560×900 | 170×98 → 910×564 | 283.3×163.3 → 903.5×560.0 | 96.00 | 189.83 | 48.00 | Pass |
| 3840×900 | 170×98 → 910×564 | 425.0×245.0 → 903.5×560.0 | 96.00 | 522.63 | 48.00 | Pass |

Old sizes use historical reviewed bounds and the superseded full-viewport cover fit. New sizes use the current full-subject region. Historical source pixels are evidence, not regenerated input files. `npm run test:carousel` passes all 18 checks; production build/type checking passes. Each species still retains exactly six WebPs.

## 2026-09-12 corrected source composition

Replaced the previously rejected source with a new built-in image_gen generation. Final prompt and source SHA-256 are in `cover-regeneration.json` → `latestReplacement`. Runtime SHA-256: `1d5d145c178fc0748f95d37447b8a1d0fbb99f7b8e18b72efc53b3e0a3c9995f`. Source and runtime: 1536×1024. Committed focalPoint remains `{"x": 0.83, "y": 0.34}`. Current conservative full silhouette: `{"left": 675, "top": 220, "right": 1430, "bottom": 875}` (755×655px), center 68.5% of source width.

Inspected both temporary PNG and final runtime WebP at original resolution. The nose, ears, outer fur, visible feet/claws and rump/tail outline fit within the boundary. The three-quarter pose naturally hides part of the short tail behind the rump; no visible extremity is cropped. The nose now sits to the right of the left 40% text area, which contains quiet habitat. The animal remains the prominent subject with real background on all source edges. The latest source and hero acceptance replace the previous rejection above.

Converted with `npm run convert:webp -- <source>` using cwebp q82/m6. Kept the five gallery images unchanged. The carousel continues to use the same canonical `01-cover.webp` with full-subject framing; no device variants were added.

Visually inspected static projections for all six viewports. The following table uses the existing 24px inset subject frame and conservative copy/panel rectangles described above. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave have identical geometry because only opacity changes. Both old and new sizes below use the current subject-frame presentation; this comparison supplements the original tiny-cover comparison in the previous section.

| Viewport | Previous source → new source (px) | Previous hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- | --- |
| 320×760 | 910×564 → 755×655 | 272.0×168.6 → 202.9×176.0 | 58.56 | 48.00 | 40.00 | Pass |
| 390×760 | 910×564 → 755×655 | 284.0×176.0 → 202.9×176.0 | 93.56 | 48.00 | 40.00 | Pass |
| 1366×768 | 910×564 → 755×655 | 559.7×346.9 → 493.3×428.0 | 96.00 | 84.49 | 48.00 | Pass |
| 1920×900 | 910×564 → 755×655 | 825.6×511.7 → 645.5×560.0 | 96.00 | 152.45 | 48.00 | Pass |
| 2560×900 | 910×564 → 755×655 | 903.5×560.0 → 645.5×560.0 | 96.00 | 318.85 | 48.00 | Pass |
| 3840×900 | 910×564 → 755×655 | 903.5×560.0 → 645.5×560.0 | 96.00 | 651.65 | 48.00 | Pass |

`npm run test:carousel`: 18 checks passed, including image hashes, six retained images, canonical-cover wiring, full-subject runtime bounds and six viewport/endpoint geometry. No browser was opened. Temporary source moved outside the repository after acceptance.
