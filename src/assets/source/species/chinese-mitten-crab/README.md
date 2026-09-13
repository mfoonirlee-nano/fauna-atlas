# Chinese Mitten Crab image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/chinese-mitten-crab/`，完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [Animal Diversity Web — Eriocheir sinensis 形态与生活](https://animaldiversity.org/accounts/Eriocheir_sinensis/)
- [Animal Diversity Web — Eriocheir sinensis 分类归属](https://animaldiversity.org/accounts/Eriocheir_sinensis/#classification)
- [Animal Diversity Web — 中华绒螯蟹保护状态字段说明](https://animaldiversity.org/accounts/Eriocheir_sinensis/#conservation_status)

访问日期：2026-09-09。ADW 支持十足目、弓蟹科与绒螯蟹属，生活史在淡水与河口间转换。其保护状态字段为 No special status，不能翻译成 IUCN LC；本次未核实到可用全球评估，沿用仓库暂记 NE 的处理方式并在正文说明，不编造评估年份。原生地与引入地分开。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1183, "top": 398, "right": 1301, "bottom": 473}`；包含该姿态可见的喙、尾羽、足、螯、鳍或腕。边界中心位于源宽度的 80.9%，左 40% 留作环境背景。focalPoint 为 `{"x": 0.88, "y": 0.35}`。

运行封面 SHA-256：`5aa7c49bb807b626cb8f88f4773048f6a70455780aa2fbb1b2c6d2b8a470a66c`。

已按原始分辨率静态检查源封面与最终 WebP；主体完整且与画面边缘之间留有背景。封面采用远景，细节辨认使用详情图集。生成图不用于计量、固定数量推断或精细解剖证明。

下表按现有 CSS 的 object-fit、object-position 与动画变换计算，值为视口边缘及文字、控制面板占位矩形的最小间距（CSS 像素）。每项至少 24 像素；对应回归在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希和完整主体边界。不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 38.95 | Pass 40.10 | Pass 39.67 | Pass 39.38 | Pass 39.67 | Pass 39.38 |
| 390x760 | Pass 38.95 | Pass 40.10 | Pass 39.67 | Pass 39.38 | Pass 39.67 | Pass 39.38 |
| 1366x768 | Pass 59.28 | Pass 59.81 | Pass 59.62 | Pass 59.48 | Pass 59.62 | Pass 59.48 |
| 1920x900 | Pass 101.75 | Pass 101.42 | Pass 101.54 | Pass 101.63 | Pass 101.54 | Pass 101.63 |
| 2560x900 | Pass 54.00 | Pass 53.33 | Pass 170.96 | Pass 53.16 | Pass 52.60 | Pass 138.44 |
| 3840x900 | Pass 298.50 | Pass 292.44 | Pass 294.71 | Pass 233.46 | Pass 205.44 | Pass 296.23 |

## 压缩与验收哈希

源输入与运行图逐张静态检查。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，脚本验证解码及尺寸；未使用 TinyPNG，不重复压缩已接受的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `021baa2fdac68ae24332aabdb7225374e2ad2f991b2a0e55bab42da7287e2fc0` | `5aa7c49bb807b626cb8f88f4773048f6a70455780aa2fbb1b2c6d2b8a470a66c` |
| 02 | `c42324594364aefa3dcde148f7ea04ee816aefa2750b3c169a77960bcb925719` | `48f73fd6d4b865a98273214d937d01630c6cc5cde8c613ad75a79ac98f68d422` |
| 03 | `a289898f0279a0d727b25c749a4c2b3ed87f57705d7a608968e264509734f6a2` | `04f2b81193275ace863945a2f02c293373b857d1603aa07cd4f3b658398b5fd1` |
| 04 | `20ae280c3e4a412f83341447cebcea326d951ee8363509d6dca97027ed2a8ba8` | `61bb2914572a7b6bb870dedf422523cf0b518dedab257c12325ec3574a17daf6` |
| 05 | `d05bc8199473fc4ab493d22728e879a1c7a75dd31990056ae11cbebfa9e138a1` | `8ebb92ec04b846e2cdccea7554f4149609c419d5b5a28f33a1c8ef2574ff5807` |
| 06 | `bafdd02b999363ee5398556533535b4d91373e967650da169824ef2a8c4521e9` | `415a40811f4a26d83db62fadf5bcc33cf607e68f03f4f5817f26ed04328e70b3` |

## 仓库验证

`npm run typecheck`、`npm test`（含生产构建与子路径资源验证）及 `git diff --check` 通过。验收后删除本批临时源 PNG，保留运行 WebP、提示和源文件哈希。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `cce07fff2954654fb47668590fa40ec81976bc63f5a80fb5ea1cec0530c551ea`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.88, "y": 0.35}`. Conservative full-subject boundary: `{"left": 685, "top": 350, "right": 1485, "bottom": 835}`, 800×485 source pixels (previously 118×75). Boundary center is 70.6% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes outer walking legs, setae, eye stalks and claw tips for the crab; gathered arm tips and fin skirt for the cuttlefish; ears, whiskers, paws and entire tail for the fennec fox. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. Cuttlefish feeding tentacles remain retracted and some arms overlap naturally; the image does not prove exact arm counts. Crab leg bases partly overlap in this three-quarter pose; visible extremities are included. The first crab and cuttlefish candidates intruded into the left copy area and were rejected; final edit prompts are retained.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 87.6×55.7 → 272.0×164.9 | 24.00 | 53.55 | 45.55 | Pass |
| 390×760 | 87.6×55.7 → 290.3×176.0 | 49.85 | 48.00 | 40.00 | Pass |
| 1366×768 | 104.9×66.7 → 559.7×339.3 | 72.00 | 51.32 | 92.35 | Pass |
| 1920×900 | 147.5×93.8 → 825.6×500.5 | 72.00 | 62.40 | 77.74 | Pass |
| 2560×900 | 196.7×125.0 → 923.7×560.0 | 96.00 | 179.74 | 48.00 | Pass |
| 3840×900 | 295.0×187.5 → 923.7×560.0 | 96.00 | 512.54 | 48.00 | Pass |

`npm run test:carousel`: all 24 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
