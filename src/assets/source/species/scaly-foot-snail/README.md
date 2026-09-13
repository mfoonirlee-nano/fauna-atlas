# Scaly-foot Snail image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片并编辑封面，无 CLI 回退。源 PNG 位于本目录，运行 WebP 位于 `public/images/species/scaly-foot-snail/`。

## 最终提示词

完整生成与封面编辑提示词见 [prompts.json](./prompts.json)。共生剖面修正提示词见 [edits.json](./edits.json)。

## 内容依据

IUCN EN B2ab(iii) 对应 2018-01-31 评估、2019 年发布，日期由 SeaLifeBase 核对，原 IUCN 页面本次不可访问。种群趋势未知。2026 年资料支持三条洋中脊至少 8 处采集热液区，不能沿用旧“三处”作为当前分布。

- [OBIS — 鳞足螺分类归属](https://obis.org/taxon/736932)
- [东京大学综合研究博物馆 — 鳞足螺与原始描述](https://www.um.u-tokyo.ac.jp/japanese/UMUTopenlab/en/library/b_14.html)
- [JAMSTEC 2019 — 鳞片硫化铁形成机制](https://www.jamstec.go.jp/e/about/press_release/20190910/)
- [牛津大学 — 鳞足螺分类、解剖与共生研究](https://ora.ox.ac.uk/objects/uuid:0136047f-a09b-4876-bb65-b74dfd7c997d)
- [JAMSTEC 2026 — 八处热液区的种群联系](https://www.jamstec.go.jp/e/about/press_release/20260212/)
- [JAMSTEC 2019 — 鳞足螺列入濒危名录](https://www.jamstec.go.jp/e/about/press_release/20190723/)
- [SeaLifeBase — IUCN 等级与实际评估日期](https://www.sealifebase.ca/summary/Chrysomallon-squamiferum)

资料访问日期：2026-09-08。

## 视觉限制

外形图的壳纹、头部和鳞片排列经过简化，不能用于物种鉴定。共生剖面已修正壳面鳞片和陆生蜗牛式眼柄，腺体和肠道的形状、比例仍为示意。浅色图不证明矿物含量，生境图不表示密度和温度。 图片均标注 AI 生成科学情景重建。封面主体较小以适应裁切，图集提供近景；生境图不对应地理定位照片。

## 压缩

TinyPNG 已压缩全部六张源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP。无本地调色板回退。

## 封面检查

源图尺寸 1536 × 1024，focalPoint 为 `{"x": 0.98, "y": 0.35}`。按原始分辨率检查源 PNG 与运行 WebP，保守测量全主体边界为 `{"left": 1195, "top": 308, "right": 1325, "bottom": 395}`，包含全部可见末端；蟹奴封面包含整只宿主。主体中心位于宽度 82.0%，左侧 40% 留有安静背景，边界外保留真实背景。

运行封面 SHA-256：`b1c0ca58a5d7edda84846f83f5c635ad3f7c2ea4fc24015876f06166133caafb`。

`npm run test:carousel` 验证完整主体与视口边缘、标题和轮播控件保持至少 24 CSS 像素间距。下表涵盖静止帧以及 CSS 动画端点，未启动浏览器。

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
| 01 | `c541f6d6e7357c8136c168cd951bde0151b6ffc4030d502c8370e6d21a9527e6` | `b1c0ca58a5d7edda84846f83f5c635ad3f7c2ea4fc24015876f06166133caafb` |
| 02 | `e1a8c4640d7d345885234866ad5e05d460123f818463e63564ec494d5b6092da` | `94c4e0895d12ed4585a9bb60fc08835ed8f3a18fecc94c25960e44554a1d578f` |
| 03 | `c7c1cc94d8ac0f2f39ca7b5f668681dcaeb2f9e9b16f90f470222e349ba81c9d` | `50843f8fb0e8d773f0b58ab789be585c44ca3bd872940f7f039b4db1a331ae50` |
| 04 | `2dcefe5b0b6bb4b3d65d995118b561c6a3002c965751d3277caf69dbcabb69a9` | `1a85482249a20e6d33de1d098d71710a3399e3190b37b47c38ad791f347d5d97` |
| 05 | `28d94f9161fa706186135944dd17c002a6c33a5f80257d24262339acf3c2465d` | `f87a4a7473cb3ab6a349402583f7588ebceff988ad95b1d46b0a61fa64afc8fe` |
| 06 | `70596d03d96c5490f0d95300803a71eac216dea78f13fe67a52a597b5afd2614` | `ea6ec2dd1c5639893672dc59011147798a67ce6a7fc8b43cf1542b2bd2a18e80` |

## 验证

全部六张运行 WebP 已按原始分辨率检查。完整测试 176 项通过，包含分类归属、图片尺寸与哈希、六种视口的封面动画及子路径静态资源访问。TypeScript 检查与生产构建通过；构建仍有已有的大体积代码块提示。未启动 GUI 或无头浏览器。

## 2026-09-13 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `2152f8c459deb1cd9b822815ab2c2963811484859c2551b1956a0b8892bf9fee`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.98, "y": 0.35}`. Conservative full-subject boundary: `{"left": 736, "top": 224, "right": 1458, "bottom": 758}`, 722×534 source pixels (previously 130×87). Boundary center is 71.4% of source width.

Inspected the PNG and runtime WebP at original resolution. Full shell, both tapering cephalic tentacles and the complete visible foot-scale fringe remain inside real rock margins. The accepted edit corrects tentacle intrusion into the left field and reduces scale regularity. Scale shapes, counts and arrangement remain illustrative; no scales were placed on the shell and no eyes added to tentacle tips. Left 40% contains defocused rock and water. No visible extremity is clipped. Scale placement reference: [Chen et al. 2020](https://www.nature.com/articles/s41467-020-15522-3), consulted 2026-09-13.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 96.5×64.6 → 238.0×176.0 | 41.02 | 48.00 | 40.00 | Pass |
| 390×760 | 96.5×64.6 → 238.0×176.0 | 76.02 | 48.00 | 40.00 | Pass |
| 1366×768 | 115.6×77.4 → 559.7×413.9 | 72.00 | 51.32 | 55.03 | Pass |
| 1920×900 | 162.5×108.8 → 757.2×560.0 | 96.00 | 96.62 | 48.00 | Pass |
| 2560×900 | 216.7×145.0 → 757.2×560.0 | 96.00 | 263.02 | 48.00 | Pass |
| 3840×900 | 325.0×217.5 → 757.2×560.0 | 96.00 | 595.82 | 48.00 | Pass |

`npm run test:carousel`: all 89 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
