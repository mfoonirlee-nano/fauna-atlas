# Cheetah image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/cheetah/`。完整提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [圣迭戈动物园 — 猎豹外形、运动与生活](https://animals.sandiegozoo.org/animals/cheetah/)
- [IUCN 全球评估 — 2021 年评估、2022 年发表（CMS 存档）](https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf)
- [IUCN 全球评估 — 猎豹分类与分布](https://doi.org/10.2305/IUCN.UK.2022-1.RLTS.T219A124366642.en)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。奔跑、爪部和家庭图用于展示动作；家庭图采用近景裁切。斑点与个体比例不能用于鉴定。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP。压缩会损失细纹；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.9, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1086, "top": 360, "right": 1228, "bottom": 462}`，包括尾端、足部及喙端等外缘。主体中心位于源宽度的 75.3%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`baf32e943693378fffcf5f5e1bf10888c1864047141bf74461c6bed5a30a0a98`。

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
| 01 | `c9c83abe98a9c55c1914db3b3785254e097ef7cc5ac35e3c7084e62bbc233b3a` | `baf32e943693378fffcf5f5e1bf10888c1864047141bf74461c6bed5a30a0a98` |
| 02 | `7c00c4bced225e51250d4b346373ca72935983b03fcae94aa0b0d89bea020d69` | `c48845ad556b5bcf189bdeb819c184a70e92ed4e08150c7eb7cbff356cfb5b33` |
| 03 | `69c332a1d4a75e6bd42ec88a11587afacff19b377a4371fc937a8c1ede0347fa` | `c9818133ad611e4b62c05f9deaa4f17853e2b6ffe587ebf4f22299c549465fbe` |
| 04 | `532b2221c10312adad65bf52826cf419feff9250cc917ee807c19b7cb8b92a3b` | `2f542a40263c63ddd0a85fd856343931bb61adbcdf4a7e2ad9d53bc03c7a323b` |
| 05 | `cc3e2f38377e27099829b56ba20bd4ea63b24a627517834636d340a9c20baf97` | `218a1f285643ca25db050438204014ef2f89032ccee880d2a8199fb940f900cf` |
| 06 | `4dbad43020ae91b77a4faa19f29bc5f4b3db9e4b2fb68221de3d2e2c8131e432` | `ac484a89b4654c645a78d1fd7b8945faa527347a4fad891d6114eeff8ee1fb2e` |

## 验证结果

`npm test` 全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `a4c29feddcc3936df38833f863298758948b59c50894c49a36b9745192f58743`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.9, "y": 0.4}`. Conservative full-subject boundary: `{"left": 676, "top": 100, "right": 1507, "bottom": 884}`, 831×784 source pixels (previously 142×102). Boundary center is 71.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both ears, whiskers, all four legs and paws, and the entire curved tail. All four paws remain clear of grass. Limb roots overlap naturally in this three-quarter pose. Real background remains around every visible extremity. The enlarged animal occupies the right side while the left 40% remains quiet defocused savanna. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 105.4×75.7 → 186.6×176.0 | 66.72 | 48.00 | 40.00 | Pass |
| 390×760 | 105.4×75.7 → 186.6×176.0 | 101.72 | 48.00 | 40.00 | Pass |
| 1366×768 | 126.3×90.7 → 453.7×428.0 | 96.00 | 104.33 | 48.00 | Pass |
| 1920×900 | 177.5×127.5 → 593.6×560.0 | 96.00 | 178.41 | 48.00 | Pass |
| 2560×900 | 236.7×170.0 → 593.6×560.0 | 96.00 | 344.81 | 48.00 | Pass |
| 3840×900 | 355.0×255.0 → 593.6×560.0 | 96.00 | 677.61 | 48.00 | Pass |

`npm run test:carousel`: all 60 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
