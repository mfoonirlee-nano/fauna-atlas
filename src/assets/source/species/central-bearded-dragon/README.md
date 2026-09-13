# Central Bearded Dragon image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/central-bearded-dragon/`。提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Animal Diversity Web — 中部鬃狮蜥](https://animaldiversity.org/accounts/Pogona_vitticeps/)
- [Australian Museum — 中部鬃狮蜥](https://australian.museum/learn/animals/reptiles/central-bearded-dragon/)
- [The Reptile Database — 中部鬃狮蜥分类](https://reptile-database.reptarium.cz/Pogona/vitticeps)
- [Melville 与 Wilson — IUCN 2018 年发布记录（经文献引用核对）](https://doi.org/10.2305/IUCN.UK.2018-1.RLTS.T83494364A83494440.en)
- [Wikipedia — IUCN 评估引文](https://en.wikipedia.org/wiki/Central_bearded_dragon)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。封面包含吻端、四肢爪足、背棘与完整尾尖。04 的单帧抬臂姿态不表示完整挥臂轨迹。IUCN 引文的 2018 年是出版年份，档案未将其填作评估年份。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部运行 WebP。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1138, "top": 360, "right": 1360, "bottom": 435}`。主体中心位于源宽度的 81.3%，左侧 40% 为安静背景，主体四周保留环境。

运行封面 SHA-256：`96223e670a91020e127a7781e694b82e66d13169747197e4bd2d49497d75ff87`。

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
| 01 | `f86412dc625f0d2b4f3e3f039e0f37a5dc5cd1d818e8327e7a70c541a20d89f3` | `96223e670a91020e127a7781e694b82e66d13169747197e4bd2d49497d75ff87` |
| 02 | `3ffa2ac07f1abcef759d42695a19b04aeaaf972ee0aba96685ae0b69839ed907` | `b4ee4077649a62e2d297934474e10835ede66e8d69d853c065db20164bfca225` |
| 03 | `d0a95d9348cbb304cdca52abd4bdd7936a3502761c8f6bcdafe96cc3210bf545` | `691388fa63026c4b135aadb65a7dfe68b2132549b4a92ab0719c0b9e3bc788dc` |
| 04 | `80475bc0fb65bfbb636d9ccfb23df57eab62ff25791e471cdce1aff7581cf48b` | `4b04b13bbc93d13c1036564325a25dc15793465ef01c45597593070deadbeee0` |
| 05 | `75c0bb3115149f40eef8a432d341818a172dcd863d5f6e62587544481228245b` | `3e544c15c38479813cd569b2394fba98210bc48e07624f46d2e4b5704f38bf1f` |
| 06 | `234c4129ad8b02177c12a81f478ce369d3e8e02abcdde5f24250675ef08bed6a` | `1d4a191cdb201d552861023f5c4cc13a9a10535b82abd6d0cd09dc1a34c12cd5` |

## 验证结果

`npm test` 的 193 项测试全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `5bc2ec87a695d8b2d9f95e4b94b7243bc19776ebea2eafa6496e9840c7cfe0e9`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.95, "y": 0.4}`. Conservative full-subject boundary: `{"left": 708, "top": 261, "right": 1507, "bottom": 748}`, 799×487 source pixels (previously 222×75). Boundary center is 72.1% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes the snout, head and flank spines, visible claw tips and entire curved tail. The far-side hind limb is naturally occluded by the body in this three-quarter pose. Real background remains around the tail curve and tip and all other visible extremities. The enlarged animal occupies the right side while the left 40% remains quiet defocused scrubland. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 164.8×55.7 → 272.0×165.8 | 24.00 | 53.11 | 45.11 | Pass |
| 390×760 | 164.8×55.7 → 288.8×176.0 | 50.62 | 48.00 | 40.00 | Pass |
| 1366×768 | 197.4×66.7 → 559.7×341.1 | 72.00 | 51.32 | 91.43 | Pass |
| 1920×900 | 277.5×93.8 → 825.6×503.2 | 72.00 | 62.40 | 76.39 | Pass |
| 2560×900 | 370.0×125.0 → 918.8×560.0 | 96.00 | 182.22 | 48.00 | Pass |
| 3840×900 | 555.0×187.5 → 918.8×560.0 | 96.00 | 515.02 | 48.00 | Pass |

`npm run test:carousel`: all 59 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
