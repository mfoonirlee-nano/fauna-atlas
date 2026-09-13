# Guinea Pig image set

2026-09-09 使用内置 imagegen 生成并调整六张 1536 × 1024 图片。保留运行图 `public/images/species/guinea-pig/`，生成及编辑提示词见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应实拍地点或野外记录。

## 内容依据

- [Smithsonian National Zoo — 豚鼠形态、驯化与生活](https://nationalzoo.si.edu/animals/guinea-pig)
- [NCBI Taxonomy — Cavia porcellus 分类](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=10141)
- [Smithsonian National Zoo — 豚鼠驯养身份与保护说明](https://nationalzoo.si.edu/animals/guinea-pig#conservation)

访问日期：2026-09-09。Smithsonian National Zoo 与 NCBI 支持 Cavia porcellus 身份及分类。作为驯养动物采用 NE，不套用野生近缘种等级；全球饲养不等于野生分布。20–25 cm、700–1100 g 来自 Smithsonian 的一般范围，不作为所有品种的硬上限。

本次未核实独立全球趋势字段，trend=unknown；不从单个地区或饲养资料推算全球数量。

## 图片范围与限制

封面和图集均为驯养个体情景重建。草地和木屋是人类提供的环境，不代表野生分布；场景里的食物不构成完整饲养食谱，个体毛色不代表物种差异。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。已按原始分辨率查看最终临时输入与运行封面；主体完整，左 40% 以环境背景为主。目测保守完整可见主体边界：`{"left": 1083, "top": 319, "right": 1239, "bottom": 425}`，包括头、耳、吻部、胡须、躯干与可见足部。主体中心位于宽度的 75.6%，不是由 focalPoint 推定。

提交的 focalPoint：`{"x": 0.81, "y": 0.33}`。运行封面 SHA-256：`e04c81245381d9f073b23f21a2d04c39e3a7d3bf85d92df768edf8c99da38d48`。

以下按现有 CSS 的 object-fit、object-position、动画变换和正文／轮播面板占位矩形计算完整主体的最小间距（CSS 像素），每项至少 24。覆盖视口边缘与组件安全区域，未使用浏览器。测试把运行封面哈希与完整主体边界绑定。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 48.76 | Pass 43.03 | Pass 45.18 | Pass 46.61 | Pass 45.18 | Pass 46.61 |
| 390x760 | Pass 48.76 | Pass 43.03 | Pass 45.18 | Pass 46.61 | Pass 45.18 | Pass 46.61 |
| 1366x768 | Pass 99.12 | Pass 101.24 | Pass 100.45 | Pass 80.70 | Pass 69.84 | Pass 99.91 |
| 1920x900 | Pass 154.15 | Pass 155.92 | Pass 155.25 | Pass 154.81 | Pass 140.59 | Pass 154.81 |
| 2560x900 | Pass 117.87 | Pass 118.18 | Pass 118.06 | Pass 117.98 | Pass 118.06 | Pass 117.98 |
| 3840x900 | Pass 121.50 | Pass 153.00 | Pass 244.69 | Pass 44.33 | Pass 43.68 | Pass 246.70 |

## 压缩与验收哈希

静态检查五张源观察图与五张运行观察图；封面另以原始分辨率复核。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，验证解码及尺寸。未使用 TinyPNG，未重复压缩已接受 WebP。验收后删除临时 PNG，仅保留 WebP、提示词和哈希证据。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `37a62e49b1b3379978734572e3a77244bf8b5d5ea14ca9a6e4d550e86b79d3bc` | `e04c81245381d9f073b23f21a2d04c39e3a7d3bf85d92df768edf8c99da38d48` |
| 02 | `4fe893595195dbddacbbdef26fbe82bd47052777f2f0f0a23a2272b235312425` | `8149d2f22e60f6555e2d0abd1f117102f67778ac414bacc2ed09c889e67c63eb` |
| 03 | `2271f82df733bffa08ada351b85c23a9024f62609536220cdbf9e73843c016a4` | `518080f9a914e21d1fa58851f11478b7f71608047595294d36413544889fe171` |
| 04 | `a3a0c62ff9a3e83f91496fdb02369ddc0d6bc2f6a8b5bd86a15f002b5ca5cecb` | `96b688b7f19823265dc222cfec7b5383a34e59ef8791c82a08f0375f2b22c9a7` |
| 05 | `176d7feed056c6966bb93c803d533e82012ff98d8a07f3bef59ed32746fa5971` | `4b6272e5e373e46c3382458a31fbdaeb77728c8d15a81cd67610b2232432df7b` |
| 06 | `979c2f11a98a2e1f5f96f21f2fb5909dbf163bed1ae03f3868cc184567fbf7da` | `65a93c13565fe08b2de57a39b4d830eb7b4db94ab48476ff3ed731f6164801e0` |

## 项目验证

`npm run typecheck`、`npm run test:carousel` 与 `npm test` 通过。完整测试含 172 项分类测试及本批六图哈希、尺寸和解码验证，并覆盖首页轮播、目录、图片查看器及构建后的子路径资产访问。生产构建通过，仍提示主 JavaScript chunk 大于 500 kB。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `673253e33fd26ef7a3638a7b1c6b04789e24fba80d50d9a5530b541c5c14469d`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.81, "y": 0.33}`. Conservative full-subject boundary: `{"left": 640, "top": 255, "right": 1370, "bottom": 710}`, 730×455 source pixels (previously 156×106). Boundary center is 65.4% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the woodpecker bill, visible claws and tail, ant antennae, leg tips and carried leaf, and guinea pig whiskers, ears, fur and visible toes. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. Far-side feet overlap naturally in these poses. The ant antenna tip reaches about 40% of source width; the leaf remains fully on the right. The guinea pig first candidate was rejected for leftward whisker intrusion; the accepted edit moves the whole silhouette right. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 115.8×78.7 → 272.0×169.5 | 24.00 | 51.23 | 43.23 | Pass |
| 390×760 | 115.8×78.7 → 282.4×176.0 | 53.81 | 48.00 | 40.00 | Pass |
| 1366×768 | 138.7×94.3 → 559.7×348.8 | 72.00 | 51.32 | 87.58 | Pass |
| 1920×900 | 195.0×132.5 → 825.6×514.6 | 72.00 | 62.40 | 70.71 | Pass |
| 2560×900 | 260.0×176.7 → 898.5×560.0 | 96.00 | 192.37 | 48.00 | Pass |
| 3840×900 | 390.0×265.0 → 898.5×560.0 | 96.00 | 525.17 | 48.00 | Pass |

`npm run test:carousel`: all 33 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
