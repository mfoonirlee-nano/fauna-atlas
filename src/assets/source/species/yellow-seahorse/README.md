# Yellow Seahorse image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/yellow-seahorse/`；完整提示词及封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [Eschmeyer 鱼类名录 — 黄海马名称与修订分布](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Hippocampus&tbl=species)
- [Animal Diversity Web — 黄海马形态与生活](https://animaldiversity.org/accounts/Hippocampus_kuda/)
- [CMFRI — 黄海马繁殖与保护](https://eprints.cmfri.org.in/14955/1/Hippocampus%20kuda.pdf)
- [FishBase — 黄海马全球等级及评估日期](https://www.fishbase.se/summary/Hippocampus-kuda)

访问日期：2026-09-09。属种与修订分布采用 Eschmeyer 鱼类名录；纲、目、科采用仓库既有 Actinopterygii / Syngnathiformes / Syngnathidae。ADW 适合支持形态与生活，但旧全球分布较宽、状态组件与正文有冲突，不用于确定最新等级。FishBase 引用 IUCN 2025-2 版本，明确评估日期为 2012-08-16，故 assessedYear=2012，criteria=A2cd+3cd+4cd。ADW 的 7–17 cm 指头冠至尾尖，不等于卷尾状态的可见高度，不填 adultLengthCm。CMFRI 支持吸食、攀附与雄性育儿袋。

本次未核实独立全球趋势字段，trend=unknown，不从贸易调查推算当前全球数量。

## 图片范围与限制

采用低而圆钝的体表突起与卷握尾部表现本种。细小透明鳍不一定逐一可见；黄色或褐色不能作为单独物种鉴定依据。04 仅展示猎物位于吻前，不表示吞咽过程或测量比例。06 只表现育儿袋外形，不能判断其中胚胎数或发育阶段。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。focalPoint：`{"x": 0.75, "y": 0.39}`。目测保守完整可见主体边界：`{"left": 1058, "top": 301, "right": 1172, "bottom": 451}`，包括当前姿态可见的头、嘴鼻或喙、耳或刺尖、翅鳍、足部、尾部及外缘。中心位于宽度的 72.6%，左 40% 留作环境背景，完整主体四周有真实背景。

运行封面 SHA-256：`53cb6d767c939949a11b63cab3a87b2dd9140975dcc8ae9583596e03e7d26d5a`。

已按原始分辨率查看临时输入和运行封面。测试把此哈希与完整可见边界绑定；下表按现有 CSS 几何计算与视口、正文和轮播面板的最小间距，单位为 CSS 像素，要求至少 24。未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 35.40 | Pass 29.13 | Pass 31.48 | Pass 33.05 | Pass 31.48 | Pass 33.05 |
| 390x760 | Pass 35.40 | Pass 29.13 | Pass 31.48 | Pass 33.05 | Pass 31.48 | Pass 33.05 |
| 1366x768 | Pass 84.56 | Pass 86.10 | Pass 85.52 | Pass 58.13 | Pass 47.05 | Pass 85.13 |
| 1920x900 | Pass 144.45 | Pass 145.83 | Pass 145.31 | Pass 124.14 | Pass 108.56 | Pass 144.97 |
| 2560x900 | Pass 122.93 | Pass 123.45 | Pass 123.26 | Pass 123.13 | Pass 123.26 | Pass 123.13 |
| 3840x900 | Pass 79.90 | Pass 88.00 | Pass 96.48 | Pass 79.45 | Pass 79.15 | Pass 99.93 |

## 压缩与验收哈希

逐张检查源图，使用 `npm run convert:webp -- <本批源图>` 转换，cwebp q82、m6，验证解码及尺寸。检查运行图静态拼图；封面另以原始分辨率复核。未使用 TinyPNG，未重复压缩已接受的 WebP。验收后删除本批临时 PNG，仅保留 WebP、提示词及哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `cd48d65826823a12842bb56adf4999a6a56eae853926bb833090394cb6910d58` | `53cb6d767c939949a11b63cab3a87b2dd9140975dcc8ae9583596e03e7d26d5a` |
| 02 | `03bdb9ccb2e660a87f8a2f1c9c8bde5d9770f89cf3c8aac2e385aa0ccd446d99` | `0a7255f27dd953bc54c7840d081594afcebc848cd203697c02eedf2e7e370e45` |
| 03 | `58df03aa13b4f71a423dd388fb7b683e24bb32279b47928199f7da65396e4354` | `62bf8bc3d50d79582fc822da13c92e6aadba016085ba402554376be16298201a` |
| 04 | `3998edf5f0ed99a987e3375b270873cac46f992c1f908e0eb219991ba9dfafd6` | `0423d774021ced535eb79cdda118f2ffc5dd9a6559bef572f4219ce403590a21` |
| 05 | `0a84096083014549b74917d3a5e776803b666c9eb6fdcc670c9a561f9161510e` | `4287bbf81604907717bbbe82238c60664e6172bdddeb6c213fab32cf9072c7b7` |
| 06 | `3409f139256c9b64406e253eb7e5122f0c465897dab1584d9025ebee0464706a` | `195ec190eb0496ca0387102017795aad07e1955582a00334d12a75cd7f040556` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过。完整测试覆盖分类图谱、目录数量、六图哈希与格式、首页封面安全区域、图片查看器、物种列表，以及生产构建后的子路径图片访问。生产构建通过；仍有 JavaScript chunk 超过 500 kB 的提示。
