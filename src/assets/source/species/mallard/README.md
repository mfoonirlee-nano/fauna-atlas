# Mallard image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/mallard/`，提示词和封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 名称与分类归属](https://www.gbif.org/species/9761484)
- [Cornell Lab — 绿头鸭识别与体型](https://www.allaboutbirds.org/guide/Mallard/id)
- [Cornell Lab — 绿头鸭生活史](https://www.allaboutbirds.org/guide/Mallard/lifehistory)
- [Animal Diversity Web — 绿头鸭](https://animaldiversity.org/accounts/Anas_platyrhynchos/)
- [CMS — IUCN 等级](https://www.cms.int/species/anas-platyrhynchos)

访问日期：2026-09-09。GBIF 确认 Anas platyrhynchos 归属。Cornell Lab 支持成鸟 50–65 cm、1–1.3 kg 及生态；CMS 物种页引用 IUCN 全球 LC。没有把 ADW 页面中不严谨的全球原生范围标记直接搬入地图。分布国家仅列代表地点。

来源支持所列全球保护等级，但本次未取得独立评估日期和全球趋势证据。assessedYear 留空，trend 保留 unknown，不把网页更新时间或名录发布版本当作评估日期。

## 图片范围与限制

封面使用小主体环境构图，为首页文字及轮播控件留出空间；02 起的观察图展示更大的动物。01、02、04 为繁殖羽雄鸭，03、05、06 的成鸟为雌鸭。04、06 的脚在水下；05 只展示倒立取食姿态，不能从图中看到水下头部或判断水深。06 的三只幼鸭不是典型窝卵数的示意。

## 封面验收

源图和运行 WebP 都为 1536 × 1024。focalPoint：`{"x": 0.82, "y": 0.25}`。目测保守完整主体边界：`{"left": 1120, "top": 300, "right": 1265, "bottom": 438}`，包含姿态下可见的头、耳尖、鼻端或嘴、足部、尾巴及外缘毛发；远侧受身体遮挡的结构不另行虚构。主体中心位于宽度的 77.6%，左 40% 为环境背景，完整主体边界四周保留真实背景。

运行封面 SHA-256：`3301e8e7237f1ac9df9da419123e42ab758068cc88a823a9a391cc88a940d982`。

已按原始分辨率查看源图及运行封面，核对形态和上述边界。`tests/hero-carousel.test.mjs` 将完整主体边界与此哈希绑定。检查视口边缘、左侧正文和右侧轮播面板，6 个视口与 6 个动画端点均通过，最小安全余量 28.36 CSS 像素（要求至少 24）。依据现有 CSS 几何进行静态检查，未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本物种临时源图>`，cwebp q82、m6 转换，并检查解码和尺寸。未使用 TinyPNG；未重复压缩接受的 WebP。逐张检查源图，转换后检查运行图的静态拼图，封面另以原始分辨率复核。完成验收后删除仓库中的本批临时源 PNG，只保留 WebP、提示词与哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `d7220a0ba6edb5669c218935822937a7dd89610783901168af13321b87b06713` | `3301e8e7237f1ac9df9da419123e42ab758068cc88a823a9a391cc88a940d982` |
| 02 | `7476e032ce9136f2fcdbedb6080a06cb60a3bac87858314030056cdf71d0f976` | `aa210f2c11c8ada4be5a3348a323c7c45df241605bd0dcddc67c11e1068ecdaa` |
| 03 | `0725f2183d98d8c011da59db39f54795e13f25ad56753f124bddc1bfdee83302` | `d83cf66af5a8781a7b2f05353d7c62cba15db227ca28cff0321a2c6ec75eef64` |
| 04 | `024d5acd5b7a991fa2c140951ead2a557405e2343ec669b8ea99bd46ad555f55` | `cdd6e47261cd691e2f27d66afb036bbbad022839b63c8f0b525f6bbdb8055bed` |
| 05 | `bab084d4a8bafb716ebf48dcb93f7b781117abb4979c150b48d7b115dcf286d0` | `a62491627a1a25a3104bc664377dade7a5270bf622779b67fb5844a08a15fb7b` |
| 06 | `8acf886b8e3e03e54da49481fa016092e36b940ffc2416675f37bb08147fbfa8` | `2289237fa8542fee915ffbf0a26e635fd457035a588e1416a1acf1cfeec51b29` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过；完整测试包含分类图谱、图片哈希和格式、首页封面安全区域、图片查看器、列表及生产构建后的子路径图片访问检查。构建仍提示 JavaScript chunk 超过 500 kB，未阻断构建。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `b4ee5b2ac01788f282780868014a6869717dbe32d11bdea8de83848e0181e79a`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.82, "y": 0.25}`. Conservative full-subject boundary: `{"left": 685, "top": 110, "right": 1490, "bottom": 890}`, 805×780 source pixels (previously 145×138). Boundary center is 70.8% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes mallard bill, tail feathers and both webbed feet, alpaca ears, fleece edges, visible tail and four feet, and hamster whiskers, ears, paws and short tail. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. Conservative measurements include a few background pixels around fine fur and whiskers. Some far-side anatomy overlaps naturally in the pictured poses; all visible outer features are included. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 107.6×102.4 → 181.6×176.0 | 69.18 | 48.00 | 40.00 | Pass |
| 390×760 | 107.6×102.4 → 181.6×176.0 | 104.18 | 48.00 | 40.00 | Pass |
| 1366×768 | 129.0×122.7 → 441.7×428.0 | 96.00 | 110.30 | 48.00 | Pass |
| 1920×900 | 181.2×172.5 → 577.9×560.0 | 96.00 | 186.23 | 48.00 | Pass |
| 2560×900 | 241.7×230.0 → 577.9×560.0 | 96.00 | 352.63 | 48.00 | Pass |
| 3840×900 | 362.5×345.0 → 577.9×560.0 | 96.00 | 685.43 | 48.00 | Pass |

`npm run test:carousel`: all 42 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
