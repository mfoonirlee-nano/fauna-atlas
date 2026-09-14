# Guppy image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/guppy/`，完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [FishBase — 孔雀鱼分类、生活与全球等级](https://www.fishbase.se/Summary/Poecilia-reticulata)
- [FishBase — 孔雀鱼分类归属](https://www.fishbase.se/Summary/Poecilia-reticulata.html)

访问日期：2026-09-09。FishBase 支持鳉形目、花鳉科、花鳉属及 2020-05-18 全球 LC 评估。6 cm 是雌鱼最大标准长，不包含尾鳍，不填入成体常见长度范围。封面与 02、03 为观赏雄鱼；04 为野生型雌雄对照，05 的生成结果尾鳍较大，按观赏品系接受并修正图注，06 为幼鱼，不能混同为同一品系。USGS 页面本次返回 403，未作为正文依据。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1059, "top": 373, "right": 1172, "bottom": 434}`；包含该姿态可见的喙、尾羽、足、螯、鳍或腕。边界中心位于源宽度的 72.6%，左 40% 留作环境背景。focalPoint 为 `{"x": 0.78, "y": 0.35}`。

运行封面 SHA-256：`2ab8d504454cda1ef1b9555354004153584786d1e7d1e304d5410be0e0acd434`。

已按原始分辨率静态检查源封面与最终 WebP；主体完整且与画面边缘之间留有背景。封面采用远景，细节辨认使用详情图集。生成图不用于计量、固定数量推断或精细解剖证明。

下表按现有 CSS 的 object-fit、object-position 与动画变换计算，值为视口边缘及文字、控制面板占位矩形的最小间距（CSS 像素）。每项至少 24 像素；对应回归在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希和完整主体边界。不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 67.89 | Pass 70.21 | Pass 69.34 | Pass 68.76 | Pass 69.34 | Pass 68.76 |
| 390x760 | Pass 67.89 | Pass 70.21 | Pass 69.34 | Pass 68.76 | Pass 69.34 | Pass 68.76 |
| 1366x768 | Pass 93.97 | Pass 95.89 | Pass 95.17 | Pass 59.03 | Pass 47.96 | Pass 94.69 |
| 1920x900 | Pass 150.50 | Pass 152.12 | Pass 151.51 | Pass 125.41 | Pass 109.84 | Pass 151.11 |
| 2560x900 | Pass 119.00 | Pass 119.36 | Pass 119.22 | Pass 119.13 | Pass 119.22 | Pass 119.13 |
| 3840x900 | Pass 61.50 | Pass 90.60 | Pass 271.69 | Pass 55.19 | Pass 54.65 | Pass 226.01 |

## 压缩与验收哈希

源输入与运行图逐张静态检查。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，脚本验证解码及尺寸；未使用 TinyPNG，不重复压缩已接受的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `8165dd92632275a2fc4e600d1749328a5a63dc22b3642a4d0a2f1d36408ee46b` | `1b567947bb5ceed150229b8416f452575d4570e5f31da626652d88f5911bbd9e` |
| 02 | `9a28189f5b819fe493704b1c3fd4837bb2572779783461f8a26c17821ad3673a` | `f1948e89a631667f0f99228f5e9e1de805608660e396f6c748c9944a2ad6a631` |
| 03 | `9327fd552f16439d1ae3dcfab5352056e5da7f6ecbca26a2bc5db23102993ac7` | `b692e89093237c84f99950fa4feea68fa9e8f7efa68f58138aa3c2773d89ccce` |
| 04 | `356b74a6bd263e3035dbdca9e23c1e9c594903f5cf7089ab941b93fff3607075` | `aca1278afdafe88624da72be979b1a5a76c4c0f86d504cb36ff86da7618ebbca` |
| 05 | `bf5cfcef012912ed2def1dc02b51ca428b161cc581ee863cabb072ca9e844f65` | `2843e993ca29bdeb61df689eecd6eccdf2323d8d330d09029c8ee6c576c1cd58` |
| 06 | `3a75565fbcf39f04cd35a760f8782b3aa95239777af1e1d1f3be3888ebd882ae` | `8f7db8b73f42218151af7bc0234a6cea92796270cf3ae6ac600a05e6450038c1` |

## 仓库验证

`npm run typecheck`、`npm test`（含生产构建与子路径资源验证）及 `git diff --check` 通过。验收后删除本批临时源 PNG，保留运行 WebP、提示和源文件哈希。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `1b567947bb5ceed150229b8416f452575d4570e5f31da626652d88f5911bbd9e`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.78, "y": 0.35}`. Conservative full-subject boundary: `{"left": 610, "top": 210, "right": 1495, "bottom": 745}`, 885×535 source pixels (previously 113×61). Boundary center is 68.5% of source width.

Inspected the PNG and runtime WebP at original resolution. The visible full silhouette includes bill, claws, wing edges and complete long tail for the macaw; head and all outer fin rays for the fish. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. The guppy depicts an ornamental male, not wild-type coloration.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 83.9×45.3 → 272.0×164.4 | 24.00 | 53.79 | 45.79 | Pass |
| 390×760 | 83.9×45.3 → 291.1×176.0 | 49.43 | 48.00 | 40.00 | Pass |
| 1366×768 | 100.5×54.2 → 559.7×338.3 | 72.00 | 51.32 | 92.83 | Pass |
| 1920×900 | 141.2×76.2 → 825.6×499.1 | 72.00 | 62.40 | 78.45 | Pass |
| 2560×900 | 188.3×101.7 → 926.4×560.0 | 96.00 | 178.42 | 48.00 | Pass |
| 3840×900 | 282.5×152.5 → 926.4×560.0 | 96.00 | 511.22 | 48.00 | Pass |

`npm run test:carousel`: all 21 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
