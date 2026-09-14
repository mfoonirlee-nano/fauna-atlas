# Little Blue Penguin image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/little-blue-penguin/`；完整提示词及封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 小蓝企鹅分类](https://www.gbif.org/species/2481646)
- [New Zealand Birds Online — 小蓝企鹅](https://www.nzbirdsonline.org.nz/species/little-penguin)
- [DOC — 小蓝企鹅的生活与地区保护](https://www.doc.govt.nz/korora)
- [BirdLife Australia — 广义小企鹅全球等级](https://birdlife.org.au/bird-profiles/little-penguin/)
- [Birds New Zealand — 企鹅分类处理](https://www.birdsnz.org.nz/society-publications/checklist/sphenisciformes-penguins/)

访问日期：2026-09-09。本档案沿用 GBIF backbone 与 BirdLife Australia 所用的广义 Eudyptula minor，范围包括澳大利亚与新西兰；Birds New Zealand 的修订处理区分 E. novaehollandiae。图片采用新西兰情景，不用于区分近似种。全球 LC 来自 BirdLife Australia；DOC 的 At Risk–Declining 是新西兰地区等级，不能直接替代全球等级。约 1 kg 是 NZ Birds Online 的代表体重，不虚构上下限。

本次未核实独立全球评估日期和全球趋势；assessedYear 留空，trend=unknown。来源中的网页更新日期和名录版本年份不作为评估日期。

## 图片范围与限制

侧面封面遮住远侧翅膀，完整可见外缘包含喙、近侧翅膀、足部和尾尖。小蓝企鹅近似种不能仅凭生成图鉴别；羽色、个体大小和幼鸟比例只是科学情景示意。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。focalPoint：`{"x": 0.79, "y": 0.39}`。目测保守完整可见主体边界：`{"left": 1101, "top": 334, "right": 1227, "bottom": 462}`，包括当前姿态可见的头、嘴鼻或喙、耳或刺尖、翅鳍、足部、尾部及外缘。中心位于宽度的 75.8%，左 40% 留作环境背景，完整主体四周有真实背景。

运行封面 SHA-256：`2b77ad5ed133011c132f9afddeb3f7c579e06f8247f80b5e38a4f47bd431c354`。

已按原始分辨率查看临时输入和运行封面。测试把此哈希与完整可见边界绑定；下表按现有 CSS 几何计算与视口、正文和轮播面板的最小间距，单位为 CSS 像素，要求至少 24。未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 47.11 | Pass 48.59 | Pass 38.56 | Pass 47.67 | Pass 48.04 | Pass 42.79 |
| 390x760 | Pass 47.11 | Pass 48.59 | Pass 48.04 | Pass 47.67 | Pass 48.04 | Pass 47.67 |
| 1366x768 | Pass 74.77 | Pass 75.92 | Pass 75.49 | Pass 75.20 | Pass 75.49 | Pass 75.20 |
| 1920x900 | Pass 130.70 | Pass 131.53 | Pass 131.22 | Pass 131.01 | Pass 131.22 | Pass 131.01 |
| 2560x900 | Pass 104.60 | Pass 104.38 | Pass 104.46 | Pass 104.52 | Pass 104.46 | Pass 104.52 |
| 3840x900 | Pass 166.50 | Pass 177.10 | Pass 181.04 | Pass 51.54 | Pass 50.96 | Pass 183.66 |

## 压缩与验收哈希

逐张检查源图，使用 `npm run convert:webp -- <本批源图>` 转换，cwebp q82、m6，验证解码及尺寸。检查运行图静态拼图；封面另以原始分辨率复核。未使用 TinyPNG，未重复压缩已接受的 WebP。验收后删除本批临时 PNG，仅保留 WebP、提示词及哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `90a25036f3c1cb0589b3e6675b09d85be639fd1c362ae9180d2eec6366759a35` | `63bebad70a637bd583c54541bc75b23d5a8e5a8bd6b5718fd183f12ad28fbfd9` |
| 02 | `65f6f61d9cbd41d309efd9410ca4bd2b2ba31671c0cf8358c9d6898157fc7fb4` | `8ace975cc4fbdcdb9374d056cec581d0431f68a79f0e2edad931a3560a9ca136` |
| 03 | `c40c66d77795241ba6004882f56148855c7e13d17cf02617e6458740c38a11a1` | `b2eb520b3911b28cc8adc57b1cace506e0e270f115b6aac1e274da5e841fed89` |
| 04 | `8d788e9790ecda247c110f26ed3b35d92be4e9b32a35d7bb52e509684a361ea4` | `ec28b232a7e34ada2fd082bf24a9aadd7309016f7123af70dd8e4ba930e3e61c` |
| 05 | `8f6c32e39d67d009be63b439df55edec9ef03db29cd2aad36d629372bf635584` | `33cba65dd3aa3d61179bdda876366013f279be30c834be77bb8b745f8c3e717a` |
| 06 | `7592496145b29075f489ac7fe7d30622cc7f1647a4b717d698a5439024903182` | `d8abd0369d2e752a8ec458a8867eab1b4f4c711d178adc1526fca13d91afff1f` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过。完整测试覆盖分类图谱、目录数量、六图哈希与格式、首页封面安全区域、图片查看器、物种列表，以及生产构建后的子路径图片访问。生产构建通过；仍有 JavaScript chunk 超过 500 kB 的提示。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `63bebad70a637bd583c54541bc75b23d5a8e5a8bd6b5718fd183f12ad28fbfd9`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.79, "y": 0.39}`. Conservative full-subject boundary: `{"left": 790, "top": 110, "right": 1340, "bottom": 885}`, 550×775 source pixels (previously 126×128). Boundary center is 69.3% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes capybara whiskers, ears and all four feet, hedgehog whiskers, outer spine tips and visible toes, and penguin bill, both flippers, tail and webbed feet. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. Foot placement and far-side overlap follow the pictured poses. The first capybara and hedgehog candidates were rejected for leftward muzzle or whisker intrusion; accepted edits move the complete silhouettes right. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 93.5×95.0 → 124.9×176.0 | 97.55 | 48.00 | 40.00 | Pass |
| 390×760 | 93.5×95.0 → 124.9×176.0 | 132.55 | 48.00 | 40.00 | Pass |
| 1366×768 | 112.1×113.8 → 303.7×428.0 | 96.00 | 179.29 | 48.00 | Pass |
| 1920×900 | 157.5×160.0 → 397.4×560.0 | 96.00 | 276.49 | 48.00 | Pass |
| 2560×900 | 210.0×213.3 → 397.4×560.0 | 96.00 | 442.89 | 48.00 | Pass |
| 3840×900 | 315.0×320.0 → 397.4×560.0 | 96.00 | 775.69 | 48.00 | Pass |

`npm run test:carousel`: all 36 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
