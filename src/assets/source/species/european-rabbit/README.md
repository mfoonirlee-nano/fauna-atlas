# European Rabbit image set

2026-09-09 使用内置 imagegen 生成六张 1536 × 1024 图片。运行资源位于 `public/images/species/european-rabbit/`。最终提示词见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据与限制

- [GBIF](https://www.gbif.org/species/101179320)：穴兔的名称与分类归属。
- [Animal Diversity Web](https://animaldiversity.org/accounts/Oryctolagus_cuniculus/)：野生外形、家兔驯化关系、体重、食性、洞系和幼兔发育。
- [IUCN 2019 年名录更新](https://iucn.org/news/species/201912/species-recoveries-bring-hope-amidst-biodiversity-crisis-iucn-red-list)：EN、原生分布范围及疾病导致的下降。
- [澳大利亚环境部门](https://www.dcceew.gov.au/sites/default/files/documents/rabbit.pdf)：引入区生态、取食、洞系和对本地生态的影响。

访问日期为 2026-09-09。IUCN 物种评估页返回 403，采用官方更新公告确认 EN；未将公告年份当作评估年份，assessedYear 留空。ADW 的保护状态文字过时，不据此填写保护等级。ADW 未明确长度的测量端点，因此保留原始 38–50 cm 说明，不填 adultLengthCm；体重范围针对野生个体。

01 为环境封面，主体较小；02 和 03 提供共读所需的全身与耳部近景。03 只展示头胸部；04、06 草叶遮挡部分足部。05 仅展示洞口，不表示地下洞系结构或正在挖掘的连续动作。图片不能用于亚种鉴定。

## 压缩与检查

使用 `npm run convert:webp -- src/assets/source/species/european-rabbit/*-source.png`，由 cwebp 以 q82、m6 转换；未使用 TinyPNG。转换脚本检查尺寸和解码。逐张检查源图和运行 WebP，并以原始分辨率复核封面源 PNG 与 WebP。验收后删除本次临时源 PNG，保留运行图和源哈希。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。提交的 focalPoint 为 `{ "x": 0.78, "y": 0.43 }`。目测保守全主体边界为 `{ "left": 1040, "top": 320, "right": 1220, "bottom": 488 }`，包含耳尖、胡须、鼻端、身体、姿态下可见的脚与尾巴。主体中心位于宽度的 73.6%，左 40% 为安静环境背景，四周有真实背景余量。

封面 SHA-256：`0396594c0300c5058a20e4e0621ce84057298fe339ab10c659daaeb59d0ee1c2`。

`tests/hero-carousel.test.mjs` 将运行图哈希与完整主体边界绑定。`npm run test:carousel` 通过；各视口和端点的主体均距视口边缘、正文及轮播面板至少 24 CSS 像素。按现有 CSS 几何检查组合安全区域，无需新增断点图片。

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
| 01 | `fe6369db628ba21fb31908a1d3e679a9aeb780c05dfa36be458744fbaa1cdecb` | `17abf556060d7d47ea5f0ef89176763fc0978467392ff85a928cd2fa8b2356a7` |
| 02 | `9862e54810a2b8b6d92ea58deff9b42702a1274c23413696acfc36d7358b8ac7` | `a506996193df5dce36ba74a3bc77c677b5d7789790fc57b09630594ec36fbc0f` |
| 03 | `2a3f9539f82cb225225ce5b47df73dfa0a1f353ad3aedeefe1badf01a8313b0a` | `7a06f2b86e7b8febda91be0a00e9a4cba3236e4c66619bb6b0ae33266b3aa230` |
| 04 | `91b02bd86cb0ebf43486be48306e153aaed89bfaf67c2295f1a23a9acb4a6474` | `933dd55411bcf79cea0683f82030a2aae171a40a8d0f777814efbd2766181d55` |
| 05 | `7cb903a962b48d0ef7104f56ccf614940cf944666b7d2d2f551fc5e143347357` | `f87e6c6c16acc38ec0821c14ea0fddbfc51fa27bb59184564181f7af8172a4d7` |
| 06 | `3217cc6908045e307c88cc59ac264a08386c248158f9e9506b674118618fec2b` | `e177f62c444afe77aaa0f8855bc031254e31919d85a2903ebbbe5116e8615549` |

## 验证结果

207 项测试通过。`npm test` 中的图片、分类、交互检查通过，TypeScript 与生产构建通过；末尾子路径测试因沙箱禁止监听本地端口而失败，随后在授权环境单独执行 `node --test tests/dist-subpath.test.mjs` 并通过。构建仍提示主代码块超过 500 kB。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `17abf556060d7d47ea5f0ef89176763fc0978467392ff85a928cd2fa8b2356a7`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.78, "y": 0.43}`. Conservative full-subject boundary: `{"left": 625, "top": 90, "right": 1415, "bottom": 890}`, 790×800 source pixels (previously 180×168). Boundary center is 66.4% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes koala ear fur, body outline and visible claws, rabbit ear tips, whiskers, paws and tail, and bee antennae, transparent wings, abdomen and visible leg tips. Background remains between these features and source edges. The animal is prominent on the right; the left 40% remains quiet habitat. Conservative measurements include a few background pixels around fine fur and translucent wings. Far-side limbs overlap naturally; bee feet meet the flower center. The supporting flower is habitat, not a carried object, and its petals are outside the measured animal boundary. Replaced the koala first candidate diagonal foreground trunk with a supporting horizontal branch to expose the body outline. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 133.6×124.7 → 173.8×176.0 | 73.10 | 48.00 | 40.00 | Pass |
| 390×760 | 133.6×124.7 → 173.8×176.0 | 108.10 | 48.00 | 40.00 | Pass |
| 1366×768 | 160.1×149.4 → 422.7×428.0 | 96.00 | 119.84 | 48.00 | Pass |
| 1920×900 | 225.0×210.0 → 553.0×560.0 | 96.00 | 198.70 | 48.00 | Pass |
| 2560×900 | 300.0×280.0 → 553.0×560.0 | 96.00 | 365.10 | 48.00 | Pass |
| 3840×900 | 450.0×420.0 → 553.0×560.0 | 96.00 | 697.90 | 48.00 | Pass |

`npm run test:carousel`: all 45 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
