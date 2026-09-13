# Eastern Honey Bee image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 科学情景重建图片。运行资源在 `public/images/species/eastern-honey-bee/`，最终生成提示词和编辑提示词见 [prompts.json](./prompts.json)。图片不对应定位野外照片。

## 资料与视觉限制

- [GBIF — 东方蜜蜂分类](https://www.gbif.org/species/1341979)
- [Apidologie — 东方蜜蜂舞蹈参数](https://link.springer.com/article/10.1007/s13592-023-00990-5)
- [IUCN — 泰国红树林东方蜜蜂与社区保护](https://iucn.org/news/asia/201612/bees-income-generator-and-mangrove-conservation-tool-community-thailand)
- [DCCEEW — 东方蜜蜂的采集与巢址](https://www.dcceew.gov.au/environment/invasive-species/insects-and-other-invertebrates/invasive-bees)

资料访问日期：2026-09-08。未取得可核实的全球 IUCN 物种评估，按 NE 收录，趋势未知，不填评估年份。NE 不表示没有生存风险。 未核实的体长、体重与寿命数值留空。

05 为开放巢房的展示视角，不表示野生巢脾水平摆放。04 不呈现可解码的摆尾舞。腹部花纹不作为亚种鉴定依据。

## 压缩与静态检查

使用仓库 `convert:webp` 脚本，通过 `cwebp -q 82 -m 6 -mt` 压缩为运行 WebP；未使用 TinyPNG。按原始分辨率检查了封面源 PNG 与运行 WebP，并检查图库源图和运行资源。转换脚本验证尺寸与解码；临时源 PNG 验收后删除，只保留本记录中的源哈希。未启动浏览器。

## 封面验收

源与运行图均为 1536 × 1024，focalPoint 为 `{"x": 0.84, "y": 0.37}`。原始分辨率目测保守全主体边界为 `{"left": 1123, "top": 359, "right": 1241, "bottom": 437}`，包含姿态下可见的头、触角、足、翅缘、角及腹末附肢；没有把头部边界当作全身边界。主体中心为源宽度的 77.0%，左侧 40% 留作环境背景，主体与源图边缘之间有真实背景。

运行封面 SHA-256：`9931d6bc10034704870de6664cd257cbf746f3b7541d07293170fc0b5c7e1753`。

`tests/hero-carousel.test.mjs` 绑定运行图哈希和完整主体边界。`npm run test:carousel` 已通过，检查下列视口与动画端点，主体距视口边缘、正文及轮播面板至少 24 CSS 像素；本封面最小间距约 65.7 CSS 像素。

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
| 01 | `49fa819d34da6dde9119678efbe8049721fd1f4bc5118e7a7e0a838b58f202e0` | `9931d6bc10034704870de6664cd257cbf746f3b7541d07293170fc0b5c7e1753` |
| 02 | `bc31740a552d984e5521b1c4c5fbad9881e9caf435449e0d9f7e96088738e80e` | `1046601e00d68d886c59b5acad28c59be09d2a9dfcc1dd74fa5cdb4919548e6a` |
| 03 | `9586aa8962460eaa906ff86fd4d65297bc79ad67bbfcd1f6ca066003e8490c13` | `2c3614a867d3ace611a1265bb33c246bc6ceb03c0a9e92695d813f0a39a6c044` |
| 04 | `28ca2af43ca501ce123ecb26c54c32bcaa667e63175eafd2a7450475c065867a` | `ab31cdfc6ac233248534045e18645c76bf7bcbf95afd6e983a001aa53093774e` |
| 05 | `bf396f4b83b07fd5bd70cb9fbe4382fdde811cbea91e1ec8fef5fed3a60d3beb` | `867af9ae7adb5cb0f86cb80585c077190f5c1e4ff4befc30faa8b1d084c52ad3` |
| 06 | `6c8fb01e3a2b3f33e352d8aef9bd21f87ba192dfd712a14b7a013453d40e5534` | `fdec24f82971cd3cc884bea434c750c695819b400d7931bf177e20f9c7c79e49` |

## 验证结果

`npm test` 的 206 项测试全部通过，包含分类归属、运行图片尺寸和哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 提示主代码块超过 500 kB；本次未修改打包结构。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `4f49f05e2e92ca5e8bab20987ee40b1197763312156515718df7f350a9db4761`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.84, "y": 0.37}`. Conservative full-subject boundary: `{"left": 765, "top": 190, "right": 1405, "bottom": 620}`, 640×430 source pixels (previously 118×78). Boundary center is 70.6% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes koala ear fur, body outline and visible claws, rabbit ear tips, whiskers, paws and tail, and bee antennae, transparent wings, abdomen and visible leg tips. Background remains between these features and source edges. The animal is prominent on the right; the left 40% remains quiet habitat. Conservative measurements include a few background pixels around fine fur and translucent wings. Far-side limbs overlap naturally; bee feet meet the flower center. The supporting flower is habitat, not a carried object, and its petals are outside the measured animal boundary. Replaced the koala first candidate diagonal foreground trunk with a supporting horizontal branch to expose the body outline. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 87.6×57.9 → 262.0×176.0 | 29.02 | 48.00 | 40.00 | Pass |
| 390×760 | 87.6×57.9 → 262.0×176.0 | 64.02 | 48.00 | 40.00 | Pass |
| 1366×768 | 104.9×69.4 → 559.7×376.0 | 72.00 | 51.32 | 73.98 | Pass |
| 1920×900 | 147.5×97.5 → 825.6×554.7 | 72.00 | 62.40 | 50.65 | Pass |
| 2560×900 | 196.7×130.0 → 833.5×560.0 | 96.00 | 224.86 | 48.00 | Pass |
| 3840×900 | 295.0×195.0 → 833.5×560.0 | 96.00 | 557.66 | 48.00 | Pass |

`npm run test:carousel`: all 45 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
