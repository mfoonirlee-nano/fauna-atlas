# Heike Firefly image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 科学情景重建图片。运行资源在 `public/images/species/heike-firefly/`，最终生成提示词和编辑提示词见 [prompts.json](./prompts.json)。图片不对应定位野外照片。

## 资料与视觉限制

- [GBIF — 红胸水萤分类](https://www.gbif.org/species/7360967)
- [Insects — 水萤属综述与分类修订](https://pmc.ncbi.nlm.nih.gov/articles/PMC10817006/)
- [eLife — 萤火虫基因组与生活史](https://pmc.ncbi.nlm.nih.gov/articles/PMC6191289/)
- [红胸水萤的闪光与配偶识别](https://pmc.ncbi.nlm.nih.gov/articles/PMC9918520/)

资料访问日期：2026-09-08。未取得可核实的全球 IUCN 物种评估，按 NE 收录，趋势未知，不填评估年份。NE 不表示没有生存风险。 未核实的体长、体重与寿命数值留空。

04 改为草茎上停栖发光的成虫，避免闭合鞘翅的悬空姿态。05 为水上成虫与水下幼虫的生活阶段示意，未按比例展示；侧鳃细节不作为鉴定图。静态光点不代表闪光节奏。

## 压缩与静态检查

使用仓库 `convert:webp` 脚本，通过 `cwebp -q 82 -m 6 -mt` 压缩为运行 WebP；未使用 TinyPNG。按原始分辨率检查了封面源 PNG 与运行 WebP，并检查图库源图和运行资源。转换脚本验证尺寸与解码；临时源 PNG 验收后删除，只保留本记录中的源哈希。未启动浏览器。

## 封面验收

源与运行图均为 1536 × 1024，focalPoint 为 `{"x": 0.77, "y": 0.35}`。原始分辨率目测保守全主体边界为 `{"left": 1043, "top": 336, "right": 1206, "bottom": 439}`，包含姿态下可见的头、触角、足、翅缘、角及腹末附肢；没有把头部边界当作全身边界。主体中心为源宽度的 73.2%，左侧 40% 留作环境背景，主体与源图边缘之间有真实背景。

运行封面 SHA-256：`9a503e5d781c1c088313d68b2d7c870e16eafdaf3818d1d0f53583f3679ba174`。

`tests/hero-carousel.test.mjs` 绑定运行图哈希和完整主体边界。`npm run test:carousel` 已通过，检查下列视口与动画端点，主体距视口边缘、正文及轮播面板至少 24 CSS 像素；本封面最小间距约 33.4 CSS 像素。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `aa483ce9ac1b4d70b4e613942fe4d211fae5c0b62e801b8ba6f23430b1f7d5a6` | `2cbb99c747c015172d8f4a24f07fc5f6c5a475e006e826eb13fae07bdf34f800` |
| 02 | `a699535cb53630ba1a399c356afbf512186ce6add115e389030f7475fc9b5397` | `06dbcdb2c23e3d44e0c2a2e4dd4a3d2755d4ed73f01a4809839af1a91cb0c945` |
| 03 | `55dfcf449a589615f24de309ba3766715481571c53a88dcff24d52dfd424731b` | `c7102717596074121e753351a8755e007ac67ad3d739bf9adb598f9a1db0464a` |
| 04 | `7f71937042a15dd11e4885e25cdf6a674e7eb4814099d8409bae6ef068b1c0c5` | `c8b4cfaca2f4d9235c2de707a3be5582234cc68c057cd12304ed830f3bab00af` |
| 05 | `5e05ef0e7015080a39c0c3bc1a52fe48bd8124debfa8c1e9439080870d17773e` | `820f667e1baf8b4c0fcf3a524d1a40f80f15981138a28a65708e934975d5d434` |
| 06 | `d9fb3d5f9e8b440affc5f5ced3f22f7d150649421eb55baf89dd42cae26659a3` | `bd8be13acbd4572a64e24869f142c3abe7f1b2047c9380fbfcb9092a5b7e5d4c` |

## 验证结果

`npm test` 的 206 项测试全部通过，包含分类归属、运行图片尺寸和哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 提示主代码块超过 500 kB；本次未修改打包结构。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `2cbb99c747c015172d8f4a24f07fc5f6c5a475e006e826eb13fae07bdf34f800`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.77, "y": 0.35}`. Conservative full-subject boundary: `{"left": 730, "top": 120, "right": 1345, "bottom": 750}`, 615×630 source pixels (previously 163×103). Boundary center is 67.5% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both antennae, elytra, exposed glowing abdominal tip and visible foot tips. Background remains between these features and source edges. The animal is prominent on the right; the left 40% remains quiet wetland habitat. Far-side legs overlap naturally against the supporting grass. Dusk lighting preserves readable body detail and the abdominal glow remains localized. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 121.0×76.4 → 171.8×176.0 | 74.10 | 48.00 | 40.00 | Pass |
| 390×760 | 121.0×76.4 → 171.8×176.0 | 109.10 | 48.00 | 40.00 | Pass |
| 1366×768 | 145.0×91.6 → 417.8×428.0 | 96.00 | 122.26 | 48.00 | Pass |
| 1920×900 | 203.8×128.8 → 546.7×560.0 | 96.00 | 201.87 | 48.00 | Pass |
| 2560×900 | 271.7×171.7 → 546.7×560.0 | 96.00 | 368.27 | 48.00 | Pass |
| 3840×900 | 407.5×257.5 → 546.7×560.0 | 96.00 | 701.07 | 48.00 | Pass |

`npm run test:carousel`: all 49 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
