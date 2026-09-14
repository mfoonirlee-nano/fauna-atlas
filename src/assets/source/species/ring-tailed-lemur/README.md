# Ring-tailed Lemur image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/ring-tailed-lemur/`。完整提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Mammal Diversity Database — 环尾狐猴分类](https://www.classic.mammaldiversity.org/taxon/1001008)
- [Duke Lemur Center — 环尾狐猴气味与群体生活](https://lemur.duke.edu/discover/meet-the-lemurs/ring-tailed-lemur/)
- [Animal Diversity Web — 环尾狐猴](https://animaldiversity.org/accounts/Lemur_catta/)
- [IUCN — 2020 年狐猴评估发布说明](https://iucn.org/news/eastern-and-southern-africa/202007/almost-a-third-lemurs-now-critically-endangered-iucn-red-list)
- [Lemur Conservation Network — 评估日期索引](https://www.lemurconservationnetwork.org/wordpress/wp-content/uploads/2021/04/IUCN-Red-List-Data-Lemurs.pdf)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。气味与取食图采用近景裁切，尾端可能超出画面；图像不能显示气味的化学成分。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP。压缩会损失细纹；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1178, "top": 344, "right": 1288, "bottom": 451}`，包括尾端、足部及喙端等外缘。主体中心位于源宽度的 80.3%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`3054aac8204a0fb5d6f286d83df882148566d76f0c3dba86c08e2a0535403c1d`。

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
| 01 | `a4e5108ed4d49f2646a11ccc5ae9b719856bc2f0177116dedad624ef96ce3ffb` | `aa706dd178c0d9a2f09bc96e40a8f7304677f1e0a260134331ea05e92dce0ca7` |
| 02 | `4c7e67daafce2d9722e487fb96f315575c47fad29968d6a4eab1cd776ed89518` | `1a60d20af0e1f487dfa6d521cf5f19189284a4c2501e9b6ba493f7402e7a61e5` |
| 03 | `20f1bcadf922fc58cd7759c5a4cbbbe6acb28c5d70e0470d85e6a0cf183f6048` | `204f73be27f13c24dba80e6234c970fb30a8b6e99816dc3a2f1b18fd13ecc9be` |
| 04 | `96b1f6cb0705048ae2e17b126189cc7171c0cfc298461447898317a518126b41` | `48378082f16fcc77737d6f488d69a1e51fd14752737d764602558250f06a9b7a` |
| 05 | `0785bfedbaa46c6e7f1b22e6a25f9f7a6013dc3bb7dcccec0ba89a14686086b2` | `96db555f64e766b7dff168d13dd852c70b8a8d35b4a59d031b7b2a3413824e35` |
| 06 | `41bb94a09265d0fd6c1d680cb927bff0a7a3d537b0b372765b225e24ff56e48d` | `1d3656223173858eee37017b0b689735d3956c49893151eeacbf96732bfc3312` |

## 验证结果

`npm test` 全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `aa706dd178c0d9a2f09bc96e40a8f7304677f1e0a260134331ea05e92dce0ca7`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 842, "top": 96, "right": 1507, "bottom": 949}`, 665×853 source pixels (previously 110×107). Boundary center is 76.5% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both ears, whiskers, visible hands and feet, and the entire ringed tail. Far-side toes overlap the forearm naturally in the seated pose; the tail root is partly behind the rump. Real background remains around every visible extremity. The enlarged animal occupies the right side while the left 40% remains quiet defocused dry woodland. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 81.6×79.4 → 137.2×176.0 | 91.40 | 48.00 | 40.00 | Pass |
| 390×760 | 81.6×79.4 → 137.2×176.0 | 126.40 | 48.00 | 40.00 | Pass |
| 1366×768 | 97.8×95.2 → 333.7×428.0 | 96.00 | 164.33 | 48.00 | Pass |
| 1920×900 | 137.5×133.8 → 436.6×560.0 | 96.00 | 256.91 | 48.00 | Pass |
| 2560×900 | 183.3×178.3 → 436.6×560.0 | 96.00 | 423.31 | 48.00 | Pass |
| 3840×900 | 275.0×267.5 → 436.6×560.0 | 96.00 | 756.11 | 48.00 | Pass |

`npm run test:carousel`: all 61 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
