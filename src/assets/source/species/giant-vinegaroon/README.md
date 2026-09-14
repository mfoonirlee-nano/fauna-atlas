# Giant Vinegaroon image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 图片，无 CLI 回退。源 PNG 保存在本目录，运行资源位于 `public/images/species/giant-vinegaroon/`。

## 最终提示词

见 [prompts.json](./prompts.json)和[封面编辑](./edits.json)。所有图片标注为 AI 生成科学情景重建。

## 内容依据

2018年修订与2026年物种表支持狭义Mastigoproctus giganteus在墨西哥莫雷洛斯州的范围。旧版美国广布范围以及酸浓度、寿命等数值涉及拆分前的复合群，不纳入本种数值字段。感觉前足、三对行走足、触肢捕食与腹末腺体喷液介绍有鞭目的身体机制。

- [Barrales-Alcalá等2018 — 巨鞭蝎复合群系统修订](https://www.biodiversitylibrary.org/bibliography/191467)
- [2026年Mastigoproctus新种研究 — 墨西哥物种分布表](https://www.mdpi.com/2813-3323/4/2/9)
- [Eisner等1961 — 广义巨鞭蝎防御液研究](https://www.sciencedirect.com/science/article/pii/0022191061900543)
- [Schmidt等2000 — 广义巨鞭蝎腹末腺体分泌物](https://www.sciencedirect.com/science/article/pii/S0022191099001304)
- [佛罗里达大学IFAS — 鞭蝎外形与生活史，旧分类口径](https://ask.ifas.ufl.edu/publication/IN890)

资料访问日期：2026-09-08。未核实到本种全球 IUCN 评估，暂记 NE，无评估年份，种群趋势未知。保护行动属于栖息地建议，未量化本种威胁。

## 视觉限制

图片展示鞭蝎的通用外形，触肢棘列不能诊断狭义物种。感觉前足、捕食与喷液图有部分远侧附肢被遮挡或延伸出画面；封面全身边界另行检查。喷液图把腹末液滴放大，不能量取射程、浓度与喷射时序。蟋蟀只作捕食姿态示意。林下场景不对应采样点。 封面主体较小，以适应首页标题和轮播控件；图集提供近景。

## 压缩

TinyPNG 已压缩全部六张源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP。图集压缩首次遇到沙箱 DNS 错误，获准联网后完成，无本地调色板回退。

## 封面检查

源 PNG 与运行 WebP 均按原始分辨率查看。源图尺寸 1536 × 1024；focalPoint 为 `{ x: 0.92, y: 0.35 }`。全身可见边界（源图像素）：`{ left: 1126, top: 321, right: 1220, bottom: 390 }`，包含可见末端与附肢。主体中心位于源图宽度 76.4%，左侧40%留有安静背景，边界四周均有真实背景。

运行封面 SHA-256：`e7660ea355796dbcce959a3855c1f140c2774b6cbf30cc3f3f9635755505e8c4`。

封面回归检查通过，完整主体在下列视口和动画端点与视口边缘、标题及轮播控件保持至少24 CSS像素间距。没有启动浏览器。

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
| 01 | `fe3be972efbd2699057ca0245f8894c94a436f50a4e99a7896cbd0e58211f452` | `d65894543f74c87dd620903def830d88b8b6c67d3c960eecd4190872fb9864a3` |
| 02 | `0d69543b745c6b02eff2b23487796de03a4e321e07d27022cfb19745959b9b79` | `8b8d1b29d7ed869cafc81e9b75921b2855ab38073ea7dfa5288d9b964c905e09` |
| 03 | `084bd9807e57c130555dc16aa338638676595aac43aa7950ab8b2cbb57be17e7` | `7a88d7f468f175e0721899b4ba0b1e56664ad9a2d32854f5bcea2dc43ea90f58` |
| 04 | `d3f589d4a14dd17bcd277aa6555e4f22561bccbb47a5ffa9f107464bbbb11e87` | `7a48dd4a1607a08d169ed5e432e4c816b975cee83ab2d06a1f5546d08802d500` |
| 05 | `3ddcac949b24030158edb6c5a09eb52e33fe3be01e405d6f6efe3eb79892f9c3` | `b852bd3419b3ca7b0f9fed63269b73d4ba0a44b873169e4a9b099ddcd347194e` |
| 06 | `974aee17b6b0427dfb99963fc26233a6079702ded2d0f6f13fb7741f264ecb05` | `11cc4d418f53553547eb5e7b47d7fbdba82959d06afe98ae4a2f58c8a25c7de2` |

## 验证

已按原始分辨率检查全部六张运行WebP。174项测试全部通过：完整测试中的173项先通过，静态资源子路径测试因沙箱禁止监听端口失败，获准后单独重跑通过。测试覆盖分类归属、六图尺寸及哈希、封面完整主体与控件间距。TypeScript检查与生产构建通过，构建更新了仓库跟踪的dist资源；Vite仍提示已有的大体积代码块。未启动GUI或无头浏览器。`git diff --check`通过。

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `d65894543f74c87dd620903def830d88b8b6c67d3c960eecd4190872fb9864a3`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.92, "y": 0.35}`. Conservative full-subject boundary: `{"left": 684, "top": 218, "right": 1488, "bottom": 952}`, 804×734 source pixels (previously 94×69). Boundary center is 70.7% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes both long sensory front legs, grasping pedipalps, visible walking legs and the entire terminal whip. Bounds include the thin sensory leg extending down-right. Appendages overlap near their body attachments; fine joint and spine counts do not diagnose the narrowly defined species. Two edits corrected left-field intrusion. Real leaf background surrounds all visible extremities. Left 40% contains blurred leaf litter. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 69.8×51.2 → 192.8×176.0 | 63.61 | 48.00 | 40.00 | Pass |
| 390×760 | 69.8×51.2 → 192.8×176.0 | 98.61 | 48.00 | 40.00 | Pass |
| 1366×768 | 83.6×61.4 → 468.8×428.0 | 96.00 | 96.75 | 48.00 | Pass |
| 1920×900 | 117.5×86.2 → 613.4×560.0 | 96.00 | 168.50 | 48.00 | Pass |
| 2560×900 | 156.7×115.0 → 613.4×560.0 | 96.00 | 334.90 | 48.00 | Pass |
| 3840×900 | 235.0×172.5 → 613.4×560.0 | 96.00 | 667.70 | 48.00 | Pass |

`npm run test:carousel`: all 82 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
