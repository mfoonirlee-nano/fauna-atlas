# Toco Toucan image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/toco-toucan/`。完整提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [IOC World Bird List — 巨嘴鸟分类](https://www.worldbirdnames.org/new/bow/jacamars/)
- [Animal Diversity Web — 托哥巨嘴鸟](https://animaldiversity.org/accounts/Ramphastos_toco/)
- [UC San Diego — 巨嘴鸟喙的轻质结构](https://jacobsschool.ucsd.edu/news/release/417)
- [Tattersall 等 — 喙部血流与热交换](https://doi.org/10.1126/science.1175553)
- [BirdLife International — 托哥巨嘴鸟全球档案](https://datazone.birdlife.org/species/factsheet/toco-toucan-ramphastos-toco)
- [United Parks — 托哥巨嘴鸟与 2017 年评估引用](https://seaworld.org/animals/facts/birds/toco-toucan/)
- [BirdLife DataZone — 公开评估历史数据](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/876/history)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。巨喙近景仅展示外形，没有把内部骨网或血流画成可直接观察的结构。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP。压缩会损失细纹；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1200, "top": 324, "right": 1276, "bottom": 424}`，包括尾端、足部及喙端等外缘。主体中心位于源宽度的 80.6%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`236c416bead0c08d8ec26aa3b926f391ebfb06d91e14aa6cd813e7e60622f861`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界。`npm run test:carousel` 已验证完整主体与视口边缘、正文和轮播面板保持至少 24 CSS 像素间距。

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
| 01 | `e03f1e94d28cfc7ec97c9588e9210a74c8bd7316961b604657b438aa69d0d205` | `6e5462b4235dacfe27ffb598fe19d2433ec7645d517992fcc5c329d6c4481313` |
| 02 | `8054560e3b83017e18605be9811f0711685a289c1596938bda67c3ea68fa0b34` | `b578cec45ba00e6eb3c55d85dbe6617767de0b23f8c34c80277d360da85a5549` |
| 03 | `6de6d286c88c41de49ade0d561598bbd4ff96436963a6e4111f99b9b386c056c` | `7b2701a6ff7420a923c76ec7ec4d33a88d107f62e8d1bcddb33231fd4413db0b` |
| 04 | `65f92eb7197445819245677e92cfb0b91da79f12b412f8a7967a31a47f44a30d` | `0b922b615709dc52f1dd8b211c3c3349658684fbf67cd1d7723e2d776daa50ea` |
| 05 | `b9b63189bc7492528a9e5a0729faf88b28b81fb046803fd199f56777a86e9c6f` | `a450e2a61205641f5f2585fb4eda1a054920b2f50e186215bdffb1391f3546e0` |
| 06 | `514c9700cc63cbbae70ffe5938abea020f2d292f412597a6b4dd826d8ac229ce` | `c81b9468ca3c3631733d3ff16267b6eae7b28b24ed91e3a37bdcfbe14ffa6c22` |

## 验证结果

`npm test` 全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `6e5462b4235dacfe27ffb598fe19d2433ec7645d517992fcc5c329d6c4481313`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 641, "top": 105, "right": 1347, "bottom": 924}`, 706×819 source pixels (previously 76×100). Boundary center is 64.7% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the entire large bill, crown, folded wing tips, both feet with visible claws and full tail. Toes naturally curl behind the perch; the branch crosses the tail root while all tail tips remain visible. Real background remains around every visible extremity. The enlarged bird occupies the right side while the left 40% remains quiet defocused woodland. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 56.4×74.2 → 151.7×176.0 | 84.14 | 48.00 | 40.00 | Pass |
| 390×760 | 56.4×74.2 → 151.7×176.0 | 119.14 | 48.00 | 40.00 | Pass |
| 1366×768 | 67.6×88.9 → 368.9×428.0 | 96.00 | 146.69 | 48.00 | Pass |
| 1920×900 | 95.0×125.0 → 482.7×560.0 | 96.00 | 233.83 | 48.00 | Pass |
| 2560×900 | 126.7×166.7 → 482.7×560.0 | 96.00 | 400.23 | 48.00 | Pass |
| 3840×900 | 190.0×250.0 → 482.7×560.0 | 96.00 | 733.03 | 48.00 | Pass |

`npm run test:carousel`: all 64 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
