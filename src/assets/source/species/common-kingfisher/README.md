# Common Kingfisher image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/common-kingfisher/`。提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Animal Diversity Web — 普通翠鸟](https://animaldiversity.org/accounts/Alcedo_atthis/)
- [RSPB — 普通翠鸟外形、瞬膜与生境](https://www.rspb.org.uk/birds-and-wildlife/kingfisher)
- [BirdLife DataZone — 全球评估档案](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1066)
- [BirdLife DataZone — 评估历史](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1066/history)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。喙、足和尾端均包含在封面边界内。近景没有把瞬膜画成可测量的结构。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部运行 WebP。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1174, "top": 327, "right": 1246, "bottom": 393}`。主体中心位于源宽度的 78.8%，左侧 40% 为安静背景，主体四周保留环境。

运行封面 SHA-256：`e606ce34900ade7ba646150e1dcf375ccd2ceb4c93a88466edfc7923e7e47a0a`。

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
| 01 | `3501b844021794eb602eedb09a9fb31aac0898f90bb840c306ff6b6113a38fbd` | `e606ce34900ade7ba646150e1dcf375ccd2ceb4c93a88466edfc7923e7e47a0a` |
| 02 | `1950015f3080d491dbf9c3e5bf25c974e26b0c0c17d3c0f7ee811d855dfe9904` | `b7e1f68ccc570ced2406060381e2f95498d4b77724088a765a402df1691fc614` |
| 03 | `7d5d439bd37fb7542a15719b9bbae00b12815a11be92223f234ac9716c271660` | `d14546a7498a926b2e007925e5c5d5bf04af5d846b2e9beeab8dd75d830321c3` |
| 04 | `0d09308c677d23bf1fd4ec2230047f26e49d07febbc24b521497c3ac3f28da15` | `8bb62b16ea61879b03718b461b497c94a106a34cb931214885aa5904cf622722` |
| 05 | `848f81a30d5bf039a06005831d49f86c57869deff6ff26efddc1ba1dbb94c657` | `0cd5b96914c450e481e4aa2f627044330d9d7094a4c960ea59df20fab9cf813e` |
| 06 | `fe9f48ad0dfb242e3957f238b3e4eca6a0588c1e5574cceca5928bb1860e30b8` | `f0b4fbeee20fc564edc41a95abc33ac349d17893d44420f14d0082f346d2897f` |

## 验证结果

`npm test` 的 193 项测试全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `2e600e7a134ae0b95a5566bd32b32013eb32326f9a2ff0bcce36c524962d6e21`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 690, "top": 163, "right": 1340, "bottom": 806}`, 650×643 source pixels (previously 72×66). Boundary center is 66.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the long bill, crown, folded wings, short tail and visible toes. Some toes naturally wrap behind the branch; the far-side wing overlaps the body. Real background remains around all visible extremities. The enlarged bird occupies the right side and the left 40% remains quiet defocused stream habitat. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 53.4×49.0 → 177.9×176.0 | 71.04 | 48.00 | 40.00 | Pass |
| 390×760 | 53.4×49.0 → 177.9×176.0 | 106.04 | 48.00 | 40.00 | Pass |
| 1366×768 | 64.0×58.7 → 432.7×428.0 | 96.00 | 114.83 | 48.00 | Pass |
| 1920×900 | 90.0×82.5 → 566.1×560.0 | 96.00 | 192.15 | 48.00 | Pass |
| 2560×900 | 120.0×110.0 → 566.1×560.0 | 96.00 | 358.55 | 48.00 | Pass |
| 3840×900 | 180.0×165.0 → 566.1×560.0 | 96.00 | 691.35 | 48.00 | Pass |

`npm run test:carousel`: all 55 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
