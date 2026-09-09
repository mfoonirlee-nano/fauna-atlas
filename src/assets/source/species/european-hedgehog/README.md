# Western European Hedgehog image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/european-hedgehog/`；完整提示词及封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [Mammal Diversity Database — 西欧刺猬分类](https://www.classic.mammaldiversity.org/taxon/1003810)
- [Animal Diversity Web — 西欧刺猬](https://animaldiversity.org/accounts/Erinaceus_europaeus/)
- [IUCN — 2024 年西欧刺猬等级调整](https://iucn.org/press-release/202410/more-one-three-tree-species-worldwide-faces-extinction-iucn-red-list)

访问日期：2026-09-09。分类采用 MDD 的 Mammalia / Eulipotyphla / Erinaceidae / Erinaceus，与仓库现有真盲缺目一致。GBIF 旧 backbone 返回 Erinaceomorpha，不引入并列的旧目级单元。生态内容参考 ADW，但其 LC 字段已过时；保护等级采用 IUCN 2024 年官方更新所述 NT。2024 是公布更新的年份，不据此填写独立评估日期。

本次未核实独立全球评估日期和全球趋势；assessedYear 留空，trend=unknown。来源中的网页更新日期和名录版本年份不作为评估日期。

## 图片范围与限制

足部可被落叶和身体遮挡。05 展示蜷缩的外表，不能看到头脚；06 展示巢口的观察视角，不代表应翻开野生动物的巢。明亮光线便于观察结构，不表示本种主要日间活动。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。focalPoint：`{"x": 0.79, "y": 0.39}`。目测保守完整可见主体边界：`{"left": 1066, "top": 318, "right": 1221, "bottom": 425}`，包括当前姿态可见的头、嘴鼻或喙、耳或刺尖、翅鳍、足部、尾部及外缘。中心位于宽度的 74.4%，左 40% 留作环境背景，完整主体四周有真实背景。

运行封面 SHA-256：`12f8daa02fe1b36bd9e9fe51c9f65058989c4bd48651a777694b9ad280b40311`。

已按原始分辨率查看临时输入和运行封面。测试把此哈希与完整可见边界绑定；下表按现有 CSS 几何计算与视口、正文和轮播面板的最小间距，单位为 CSS 像素，要求至少 24。未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 48.02 | Pass 42.26 | Pass 43.13 | Pass 45.86 | Pass 44.42 | Pass 45.86 |
| 390x760 | Pass 48.02 | Pass 42.26 | Pass 44.42 | Pass 45.86 | Pass 44.42 | Pass 45.86 |
| 1366x768 | Pass 107.68 | Pass 110.14 | Pass 109.22 | Pass 65.35 | Pass 54.34 | Pass 108.60 |
| 1920x900 | Pass 176.95 | Pass 179.63 | Pass 178.62 | Pass 134.29 | Pass 118.81 | Pass 177.95 |
| 2560x900 | Pass 166.27 | Pass 168.52 | Pass 167.67 | Pass 167.11 | Pass 167.67 | Pass 167.11 |
| 3840x900 | Pass 144.90 | Pass 135.50 | Pass 140.04 | Pass 143.06 | Pass 140.04 | Pass 143.06 |

## 压缩与验收哈希

逐张检查源图，使用 `npm run convert:webp -- <本批源图>` 转换，cwebp q82、m6，验证解码及尺寸。检查运行图静态拼图；封面另以原始分辨率复核。未使用 TinyPNG，未重复压缩已接受的 WebP。验收后删除本批临时 PNG，仅保留 WebP、提示词及哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9c254aeb80fb3bf9761e2c1b03f81fec12ca5bc603f3c924fac4135fd7311282` | `12f8daa02fe1b36bd9e9fe51c9f65058989c4bd48651a777694b9ad280b40311` |
| 02 | `32eeca12d63eae4d427660b8946f67cc7abb6dd5ab63002ca9742378bb336d3c` | `cb772c366e0f8ede834fdf1a511a4a1d0ca45c4abb0f23572b03adc42e8aee6f` |
| 03 | `dd3dba4f77977dd7e09f217aea900157b1c2dfafe706d79a206fb234068eba49` | `2cb424dfe7a26c955a98264075c2302d04e5af448748c759a4e280dc5f28e943` |
| 04 | `4654d049d52a04e6024214e87fa50155f2cab59243e5bb6d7d5f838b3cd21137` | `2d51306bf5cd46df6542b22fcffedff14a1ee8aebd1fb51b3f4de2c6b1f8f5ab` |
| 05 | `fa0c7be00af2a86ff77f653b1d02687064bf3777444b25dcf884fdd85e70896e` | `95cb40f33b1fa289b201899e0004751dcc8cb83979b7f6a906b62862038caf9e` |
| 06 | `2017a783134f773625df297666003e6edec9540549a5d566815f09a5ba270244` | `9b8c4a349ae6c517158fa2f2f51a8980a27fe6516d847d74e92fe232640d8f84` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过。完整测试覆盖分类图谱、目录数量、六图哈希与格式、首页封面安全区域、图片查看器、物种列表，以及生产构建后的子路径图片访问。生产构建通过；仍有 JavaScript chunk 超过 500 kB 的提示。
