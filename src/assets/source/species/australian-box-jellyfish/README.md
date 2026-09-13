# Australian Box Jellyfish image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片，无 CLI 回退。源 PNG 在本目录，运行 WebP 在 `public/images/species/australian-box-jellyfish/`。

## 提示词与来源

初始生成和尝试的编辑提示词见 [prompts.json](./prompts.json)，最终接受的重新生成或编辑提示词见 [final-edits.json](./final-edits.json)。幽灵蛸封面最终采用重新生成版本；箱水母封面采用初版缩小主体后的版本。

- [OBIS — 澳大利亚箱水母分类归属](https://obis.org/taxon/289593)
- [澳大利亚博物馆 — 箱水母识别与分布](https://australian.museum/learn/animals/jellyfish/boxjellyfish/)
- [Hamner 等 1995 — 本种游泳、捕食与视觉](https://doi.org/10.1071/MF9950985)
- [Seymour 与 O’Hara 2020 — 三种箱水母的瞳孔反应](https://www.jstage.jst.go.jp/article/pbr/15/2/15_P150210/_pdf)
- [SeaLifeBase — 本种全球 IUCN 状态](https://www.sealifebase.ca/summary/Chironex-fleckeri.html)

资料访问日期：2026-09-08。24 眼与 8 只晶状体眼来自感觉器结构研究；本种避障依据 Hamner 等 1995，未外推 Tripedalia 的学习实验。分类使用 OBIS，分布以澳大利亚博物馆明确范围为主；SeaLifeBase 仅用于全球未评估状态，其侧栏误列的 Chordata 不采用。

## 视觉限制

封面个体较小，触手束有重叠；触手数和伞体形状不作鉴定依据。感觉器图为独立结构示意，安装方向、组织形状与比例经过简化，不作显微解剖依据。捕食近景未包含每条触手的末端；封面完整主体边界包含全部可见触手。 生境图不对应地理定位照片。全部图片标注 AI 生成科学情景重建。压缩后暗部渐变与细纹有所损失，图像不用于测量。

## 压缩与静态检查

TinyPNG 已压缩全部六张最终源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无本地调色板回退。已按原始分辨率检查生成图、最终封面源 PNG 与全部运行 WebP；未使用浏览器。

## 封面验收

源图尺寸 1536 × 1024，运行图尺寸相同，focalPoint 为 `{"x": 0.98, "y": 0.35}`。原始分辨率目测的保守全主体边界为 `{"left": 1180, "top": 317, "right": 1313, "bottom": 430}`，包含鳍尖、腕尖或全部可见触手末端。主体中心位于源宽度的 81.2%，左侧 40% 为安静水体，主体四周留有真实背景。

运行封面 SHA-256：`8d51c0fdd087585c2fbff24f4ccd7a274df6c67ee4df3748d47ac7e591a80417`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界，使用现有 CSS 动画端点及页面安全区验证。`npm run test:carousel` 已通过，完整主体与视口边缘、左侧正文和轮播面板均保持至少 24 CSS 像素间距。

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
| 01 | `d7fdc4dde53214dad6027ff1faa42b00d4d2c8f34092e01bcc8ce87cb5736ae4` | `8d51c0fdd087585c2fbff24f4ccd7a274df6c67ee4df3748d47ac7e591a80417` |
| 02 | `5f778715b962240a7ac2c3bc15621990fb3910834b2f5686df9891da3cadeb50` | `8d5a679c2908d616775931bd59cdd8f7102eb6991c78ea5874b1ec7bc7a38cef` |
| 03 | `bc9aad65c5f20430a2a7b08cbd05bb00bc6e69cafef5d2d015a9bbf0d2a491c7` | `a65030352dd5ba64a05c5e9759d69aa427716e0d099dab1cbdd6e0a4fcd51e84` |
| 04 | `f76aaaf8503d117a929427de6f238e50624ab06ee0698344952a1934d874fe58` | `4a3416ce0115e1672afa45ee2a57fc790ddec5a78d15838e102ebe52956259ab` |
| 05 | `1b6c9a72e271a0195ecc31e4a054c8c247e91ce07e57ca90c3ff997a731860bc` | `8bc5ffb809be53ee49ced9985981b4ab6bda1b5f2a19c7a3f893bed566586a1a` |
| 06 | `3100bb25c5d355b1a43768df1edd0f29fa09f3e592d4a6dbc32d979c1b4ec659` | `891bb6e6091dfa8f094e6ff4e339cd3297a9b42e2712f3c36ca7547741b51b43` |

## 验证结果

`npm test` 全部 179 项通过，包含新增分类归属、图片尺寸与哈希、轮播完整主体和子路径资源检查。`npm run typecheck` 与生产构建通过。生产构建仍提示现有主代码块超过 500 kB。未启动 GUI 或无头浏览器。

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `579a88c6188f868b644d534212cd730091b4cb9e42c6374dd91145828928a9be`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.98, "y": 0.35}`. Conservative full-subject boundary: `{"left": 732, "top": 116, "right": 1498, "bottom": 946}`, 766×830 source pixels (previously 133×113). Boundary center is 72.6% of source width.

Inspected the PNG and runtime WebP at original resolution. Full transparent bell edge, pedalia and every visible tentacle end remain within real water margins. Bounds include the faint rightmost strand and the lowest curled tips. Tentacle bundles overlap naturally; exact strand counts, rhopalial detail and internal optics remain illustrative. Left 40% contains quiet blue-green water, with diffuse surface illumination above. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 98.7×83.9 → 162.4×176.0 | 78.79 | 48.00 | 40.00 | Pass |
| 390×760 | 98.7×83.9 → 162.4×176.0 | 113.79 | 48.00 | 40.00 | Pass |
| 1366×768 | 118.3×100.5 → 395.0×428.0 | 96.00 | 133.66 | 48.00 | Pass |
| 1920×900 | 166.2×141.2 → 516.8×560.0 | 96.00 | 216.79 | 48.00 | Pass |
| 2560×900 | 221.7×188.3 → 516.8×560.0 | 96.00 | 383.19 | 48.00 | Pass |
| 3840×900 | 332.5×282.5 → 516.8×560.0 | 96.00 | 715.99 | 48.00 | Pass |

`npm run test:carousel`: all 92 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
