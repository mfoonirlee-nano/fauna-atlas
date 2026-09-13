# Aldabra Giant Tortoise image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/aldabra-giant-tortoise/`；完整提示词及封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [The Reptile Database — 亚达伯拉象龟分类](https://reptile-database.reptarium.cz/Aldabrachelys/gigantea)
- [Smithsonian — 亚达伯拉象龟生活](https://nationalzoo.si.edu/animals/aldabra-tortoise)
- [Smithsonian — 龟壳与保护](https://nationalzoo.si.edu/animals/news/meet-our-cool-creep-aldabra-tortoises)
- [Smithsonian — 2026 年保护等级与威胁](https://nationalzoo.si.edu/animals/news/happy-50th-zooniversary-chyna-and-rulon-zoos-aldabra-giant-tortoises)

访问日期：2026-09-09。物种名称采用 The Reptile Database 的 Aldabrachelys gigantea；纲、目沿用仓库 Reptilia / Testudines。GBIF 旧 backbone 把 Testudines 放在纲且缺失目，不照搬。Smithsonian 生活页的 Geochelone gigantea 是旧属名，生态资料仍可参考；全球 VU 及气候、海平面、外来物种威胁由其 2026-09-08 新闻明确支持，不根据生活页同时列出的全部等级导航猜测等级。

本次未核实独立全球评估日期和全球趋势；assessedYear 留空，trend=unknown。来源中的网页更新日期和名录版本年份不作为评估日期。

## 图片范围与限制

封面采用远景，部分远侧肢体受壳和草遮挡；观察图用于看清头颈、盾片和腿，不能从盾片纹路推算年龄。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。focalPoint：`{"x": 0.75, "y": 0.39}`。目测保守完整可见主体边界：`{"left": 1083, "top": 328, "right": 1187, "bottom": 378}`，包括当前姿态可见的头、嘴鼻或喙、耳或刺尖、翅鳍、足部、尾部及外缘。中心位于宽度的 73.9%，左 40% 留作环境背景，完整主体四周有真实背景。

运行封面 SHA-256：`e82280c9d445aa9aa491e67e8fb5c4bffa246f28ce37286435be149148d7c337`。

已按原始分辨率查看临时输入和运行封面。测试把此哈希与完整可见边界绑定；下表按现有 CSS 几何计算与视口、正文和轮播面板的最小间距，单位为 CSS 像素，要求至少 24。未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 54.02 | Pass 49.78 | Pass 35.37 | Pass 53.39 | Pass 52.02 | Pass 39.63 |
| 390x760 | Pass 55.44 | Pass 49.97 | Pass 48.94 | Pass 53.39 | Pass 52.02 | Pass 53.39 |
| 1366x768 | Pass 131.14 | Pass 142.34 | Pass 152.06 | Pass 80.70 | Pass 69.84 | Pass 151.03 |
| 1920x900 | Pass 226.75 | Pass 240.73 | Pass 238.84 | Pass 155.86 | Pass 140.59 | Pass 237.59 |
| 2560x900 | Pass 232.07 | Pass 223.35 | Pass 226.62 | Pass 228.80 | Pass 226.62 | Pass 228.80 |
| 3840x900 | Pass 172.60 | Pass 161.50 | Pass 165.66 | Pass 168.44 | Pass 165.66 | Pass 168.44 |

## 压缩与验收哈希

逐张检查源图，使用 `npm run convert:webp -- <本批源图>` 转换，cwebp q82、m6，验证解码及尺寸。检查运行图静态拼图；封面另以原始分辨率复核。未使用 TinyPNG，未重复压缩已接受的 WebP。验收后删除本批临时 PNG，仅保留 WebP、提示词及哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `e93d8eeb452e52f1923c71c7043a4308062cf19b103c49c0f1288db7bd99cea9` | `e82280c9d445aa9aa491e67e8fb5c4bffa246f28ce37286435be149148d7c337` |
| 02 | `a8e9ab61a303280e30a9d554a32e4accc7f08b3deabfd5667f50af381ed18030` | `105121ed6b538dcdd68fc23cbdf815287ea53ed72a053cfc57c95d4fac43bef5` |
| 03 | `0978c2e44d582faa70d67eb443a0de953511d8b716807356c5995d3602d592d7` | `c6b022cd892882d6a84da1649748ca5f57d9ebaa5cadd00e5b5ed5b3f13d8493` |
| 04 | `474626bd4b4e0570d5e17f29a52203285a566f3e15be0f4489e527bf82da0480` | `74136526fd219a5cd240bc45aad4a7bb0504f45c10523f2384ef9ab497a4bad0` |
| 05 | `966780926b61f147c66987fb48dcc8d40e9416ec03201929a1fec03a80a5d576` | `4b19191ae3438a0fcf91440c3fec31c31ad6e3e47191952f95b68094d18c5c78` |
| 06 | `d3bf0313f19bc356579ee4b20dc3d1ed10eb4ee4ea4616f86b1a7f0112677b54` | `ff58b2294578338c261628a6b75391f4c4defcca9625eea3923651d91c9442c0` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过。完整测试覆盖分类图谱、目录数量、六图哈希与格式、首页封面安全区域、图片查看器、物种列表，以及生产构建后的子路径图片访问。生产构建通过；仍有 JavaScript chunk 超过 500 kB 的提示。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `dd49b0b4294729d4a817dbbfe5e9753ce61588280c8b5c4a879a1973fe11d29a`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.75, "y": 0.39}`. Conservative full-subject boundary: `{"left": 780, "top": 355, "right": 1455, "bottom": 730}`, 675×375 source pixels (previously 104×50). Boundary center is 72.8% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes tortoise head, shell, neck, four visible feet and tail, seahorse snout, crown, translucent fins and complete curled tail, and squirrel whiskers, ear tufts, toes and tail hairs. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. Conservative measurements include a few background pixels around fine hairs and translucent fin edges. The seahorse naturally grips a seagrass blade, which overlaps part of its tail without hiding the outer curl. The first tortoise candidate was rejected for leftward head intrusion; the accepted edit moves the complete silhouette right. No visible extremity is clipped.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 77.2×37.1 → 272.0×151.1 | 24.00 | 60.44 | 52.44 | Pass |
| 390×760 | 77.2×37.1 → 316.8×176.0 | 36.60 | 48.00 | 40.00 | Pass |
| 1366×768 | 92.5×44.5 → 559.7×310.9 | 72.00 | 51.32 | 106.53 | Pass |
| 1920×900 | 130.0×62.5 → 825.6×458.7 | 72.00 | 62.40 | 98.67 | Pass |
| 2560×900 | 173.3×83.3 → 1008.0×560.0 | 96.00 | 137.60 | 48.00 | Pass |
| 3840×900 | 260.0×125.0 → 1008.0×560.0 | 96.00 | 470.40 | 48.00 | Pass |

`npm run test:carousel`: all 39 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
