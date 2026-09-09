# Atlantic Puffin image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/atlantic-puffin/`，完整生成及封面编辑提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [BirdLife International — 大西洋海鹦生活与全球等级](https://www.birdlife.org/news/2022/04/06/seabird-of-the-month-atlantic-puffin-fratercula-arctica/)
- [Animal Diversity Web — Fratercula arctica 形态与生活](https://animaldiversity.org/accounts/Fratercula_arctica/)
- [Animal Diversity Web — Fratercula arctica 分类归属](https://animaldiversity.org/accounts/Fratercula_arctica/#classification)
- [RSPB — 大西洋海鹦外形与季节变化](https://www.rspb.org.uk/birds-and-wildlife/puffin)

访问日期：2026-09-09。BirdLife 页面支持全球 VU，与欧洲区域等级分开。ADW 的分类表支持鸻形目、海雀科和海鹦属；只采用其明确给出的平均体重约 500 g，不采用页面中口径和单位不一致的长度、翼展字段。RSPB 支持繁殖期与非繁殖期外形区别。全部图片展示繁殖期成鸟，不据此推定幼鸟或冬季外形。

本次未核实独立全球趋势字段，保留 `trend=unknown`；未把出版年或访问年填作评估年。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1132, "top": 400, "right": 1220, "bottom": 478}`；包括该姿态可见的耳、吻或鸟喙、足、尾及鳍尖。主体边界中心位于源宽度的 76.6%，左 40% 为环境背景。focalPoint 为 `{"x": 0.78, "y": 0.35}`。

运行封面 SHA-256：`aba1f154adc1637968bb7d44eca1dcd4f15eb1139120aaf32ac98764d8d80dac`。

以下间距来自现有 CSS 的 object-fit、object-position 与轮播变换计算；涵盖视口边缘及文字、控制面板占位矩形。每项至少 24 CSS 像素；不使用浏览器。对应回归用例在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希及完整主体边界。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 35.23 | Pass 36.24 | Pass 35.48 | Pass 35.61 | Pass 35.87 | Pass 35.61 |
| 390x760 | Pass 35.23 | Pass 36.24 | Pass 35.87 | Pass 35.61 | Pass 35.87 | Pass 35.61 |
| 1366x768 | Pass 54.84 | Pass 55.19 | Pass 55.06 | Pass 54.97 | Pass 55.06 | Pass 54.97 |
| 1920x900 | Pass 95.50 | Pass 94.92 | Pass 95.14 | Pass 95.28 | Pass 95.14 | Pass 95.28 |
| 2560x900 | Pass 45.67 | Pass 43.09 | Pass 83.83 | Pass 44.70 | Pass 44.06 | Pass 52.17 |
| 3840x900 | Pass 244.00 | Pass 279.44 | Pass 281.90 | Pass 104.05 | Pass 74.75 | Pass 283.54 |

## 压缩与验收哈希

源输入逐张静态检查；使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，转换脚本验证解码和尺寸。不使用 TinyPNG，不重复压缩接受后的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1a39715348c358602bda7b7230b33614f5f79e9619f5ba37d7ebeb51ee34555c` | `aba1f154adc1637968bb7d44eca1dcd4f15eb1139120aaf32ac98764d8d80dac` |
| 02 | `76647d7956cffcf368474661a2c7845ef4afe623f38648cb8f6ba904a3bf7517` | `9d171df2c63d9ea34968b9248271daa4df3fb8172e93a62eed0171955d5808b3` |
| 03 | `77bbfe24fb4f2d32b28bd72a9177e7a0ec8172474ca6f78de30ed1eba11dcce1` | `f54932e2b1863eb8a2b7a9e13efd7362e9c8615c9b57129b92341dee5d960362` |
| 04 | `2404f71b2d2e814b6c8aff09cd01186dbcde13606bf542fa7285ae6c0026e940` | `cc814fa03cda9d58c9781c8af9aed9ebfb2aac2ae3973a2d3e76b4dec0880ab1` |
| 05 | `a5e72b0ee9fdf09922c92d777b5774d758102112f510efc3622c2e73946d98d9` | `e1ca1821bfb7c234d31d9b4db1fc5c09a85184773407ea33e8f93b37c11f8b0f` |
| 06 | `efdc57ec4ae0e7c6ef831cc2e84b141cfa27b007c5a0f2d2f69e998f00aa0f57` | `880584ba551bd9be40d0954cdc961f106ceddcb808719ac5869fd9677b35bc88` |

## 项目验证

已按原始分辨率静态检查源封面与最终 WebP 封面，并检查其余五张观察图。`npm test` 全部通过，包含图片、分类档案、轮播及生产构建和子路径资源检查；TypeScript 检查通过。验收后删除本目录临时 PNG，保留运行 WebP、提示词和验收记录。
