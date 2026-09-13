# Reticulated Giraffe image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/reticulated-giraffe/`。

## 提示词与资料

初始生成、封面编辑和最终采用版本见 [prompts.json](./prompts.json)。资料访问日期：2026-09-08。

- [IUCN 2025 — 正式认可四种长颈鹿](https://iucn.org/press-release/202508/four-giraffe-species-officially-recognised-major-conservation-reclassification)
- [GCF — 网纹长颈鹿外形、分布与保护](https://giraffeconservation.org/giraffe-species/reticulated-giraffe/)
- [GCF — 长颈鹿舌头的长度、颜色与取食](https://giraffeconservation.org/facts-about-giraffe/how-long-is-a-giraffes-tongue-what-color-is-it/)
- [GCF — 长颈鹿演化与分类](https://giraffeconservation.org/facts-about-giraffe/evolution-taxonomy-and-scientific-classification/)
- [IUCN 2018 — 网纹长颈鹿亚种评估](https://www.iucnredlist.org/species/88420717/88420720)
- [GCF — State of Giraffe 2025](https://zenodo.org/records/15698203)

本页采用 IUCN 专家组 2025 年认可的四种长颈鹿分类。保护状态仍沿用 2018 年按 Giraffa camelopardalis ssp. reticulata 发布的 EN 评估；分类修订年份不是重评年份。45—50 厘米舌长来自长颈鹿的一般资料，未作为本种体长指标；GCF 种群总数也未写成成熟个体数。

## 视觉限制

封面使用远景完整侧姿，手机端可辨长颈轮廓，细节需查看图集。角突、蹄与尾端全部纳入边界；远侧腿有自然重叠。斑纹属于合成个体，不用于个体识别。舌头与树枝接触处为取食重建，舌长、枝刺密度和植物种类不作测量或鉴定。 全部图片标注 AI 生成科学情景重建，不对应定位野外照片。压缩会损失细纹与暗部渐变。

## 压缩与静态检查

TinyPNG 已压缩全部六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP，确认完整轮廓与图集场景；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.98, "y": 0.35}`。原始分辨率目测的保守全主体边界为 `{"left": 1208, "top": 363, "right": 1258, "bottom": 439}`，包括全部可见外缘附肢与尾端。主体中心位于源宽度的 80.3%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`8092bc44613f340c635cb783a8e9b64df001233c390bb95260e6f2f5237fc944`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界。`npm run test:carousel` 验证完整主体与视口边缘、正文和轮播面板保持至少 24 CSS 像素间距，结果如下。

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
| 01 | `880f8f6c0c807605fbed129b37f53a9bb7f24d79e37994c8012a84dfe65eed8b` | `8092bc44613f340c635cb783a8e9b64df001233c390bb95260e6f2f5237fc944` |
| 02 | `4754b1808cc9ab89cece01dd9bade2268cc3e937ac29c8188a4d79569c219e2e` | `6acc6311b68421208a612d20951c0d906bfd9b11eac2ecfcbc071d892226a7ac` |
| 03 | `7e89d93d52699cd9bf6ea88206ddb708902b3d79d475f700dcd881e38c9d4ae5` | `a9368341f613576881bbd25fafd6647406e1deb28e46a3f850ddf1a2611c4e2b` |
| 04 | `6c8922294007c3e46c4d0dca53bef233fd6d2720cf9a5246ef133577d5f8f90c` | `8ddc224d3402ebd3aa57c8b2b8b27b821e4a516362bcc67df1300e993ca7b7c4` |
| 05 | `6e944cd6be83dee18327c00133e4f7787fd66ba07db98dae45bf9293a448ba4a` | `006abb66a9eb9673732022dfb7af4b47faede6076036dc8176f2d06991c90401` |
| 06 | `280105a25e2754b754040202245767b7c8d01da96c8e6cec854bfec0358c0fcf` | `e26c588a039e6769e3ba50003c099c86ab0199d15f67e1449b53dde990ab363a` |

## 验证结果

`npm test` 全部 182 项通过，覆盖分类计数、三个新分类分支、18 张图片及其源文件的尺寸和哈希、封面完整主体与子路径资源。生产构建与 TypeScript 检查通过。构建仍提示现有主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `4395b2c76d14d13866d856485123aa9e8093233fab588b142fd025cb03786c1c`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.98, "y": 0.35}`. Conservative full-subject boundary: `{"left": 790, "top": 27, "right": 1387, "bottom": 964}`, 597×937 source pixels (previously 50×76). Boundary center is 70.9% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both ossicones, ears, muzzle hairs, full neck, all four hooves and the entire tail tuft. Hind legs overlap naturally above the distinct hooves. Real background remains around every visible extremity, including above the ossicones. The enlarged animal occupies the right side while the left 40% remains quiet defocused savanna. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 37.1×56.4 → 112.1×176.0 | 103.93 | 48.00 | 40.00 | Pass |
| 390×760 | 37.1×56.4 → 112.1×176.0 | 138.93 | 48.00 | 40.00 | Pass |
| 1366×768 | 44.5×67.6 → 272.7×428.0 | 96.00 | 194.81 | 48.00 | Pass |
| 1920×900 | 62.5×95.0 → 356.8×560.0 | 96.00 | 296.80 | 48.00 | Pass |
| 2560×900 | 83.3×126.7 → 356.8×560.0 | 96.00 | 463.20 | 48.00 | Pass |
| 3840×900 | 125.0×190.0 → 356.8×560.0 | 96.00 | 796.00 | 48.00 | Pass |

`npm run test:carousel`: all 65 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
