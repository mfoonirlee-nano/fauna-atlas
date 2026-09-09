# Alpaca image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/alpaca/`，提示词和封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 名称与分类归属](https://www.gbif.org/species/7515593)
- [Smithsonian National Zoo — 羊驼](https://www.nationalzoo.si.edu/animals/alpaca)
- [Mammal Diversity Database — Lama pacos 与家养身份](https://www.mammaldiversity.org/taxon/1006387/)

访问日期：2026-09-09。GBIF match API 于本次访问将 Vicugna pacos（7515593）列为 ACCEPTED，采用该名称及小羊驼属，与 todo 对齐。MDD（1006387）改用 Lama pacos 并注明 Domesticated、Not Evaluated；档案将 Lama pacos 保留为别名。Smithsonian 同样使用 Lama pacos，提供毛纤维、群居、食性、繁殖及成年 45–90 kg 资料。地图表示安第斯驯养起源地区，不标为当前野生分布；不套用 Vicugna vicugna 的保护等级。

家养羊驼按 NE 处理，不填 assessedYear；全球趋势不适用于此家养档案，保留 unknown。

## 图片范围与限制

封面使用小主体环境构图，为首页文字及轮播控件留出空间；02 起的观察图展示更大的动物。01–06 展示华卡约型，毛长及毛色不代表全部品种。03 为头颈近景，耳尖接近画面上缘；05、06 部分脚趾受草叶遮挡。母仔图没有提供统一比例尺。

## 封面验收

源图和运行 WebP 都为 1536 × 1024。focalPoint：`{"x": 0.83, "y": 0.32}`。目测保守完整主体边界：`{"left": 1150, "top": 335, "right": 1255, "bottom": 458}`，包含姿态下可见的头、耳尖、鼻端或嘴、足部、尾巴及外缘毛发；远侧受身体遮挡的结构不另行虚构。主体中心位于宽度的 78.3%，左 40% 为环境背景，完整主体边界四周保留真实背景。

运行封面 SHA-256：`c451ef8684f88001f9e7a8fd1a45d6411d1eb12f7cb0bf551acb48acb910d9eb`。

已按原始分辨率查看源图及运行封面，核对形态和上述边界。`tests/hero-carousel.test.mjs` 将完整主体边界与此哈希绑定。检查视口边缘、左侧正文和右侧轮播面板，6 个视口与 6 个动画端点均通过，最小安全余量 50.08 CSS 像素（要求至少 24）。依据现有 CSS 几何进行静态检查，未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本物种临时源图>`，cwebp q82、m6 转换，并检查解码和尺寸。未使用 TinyPNG；未重复压缩接受的 WebP。逐张检查源图，转换后检查运行图的静态拼图，封面另以原始分辨率复核。完成验收后删除仓库中的本批临时源 PNG，只保留 WebP、提示词与哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `27467f9a532ac0392d51ab5cf9eb8a14f1c925e03f62bffd29e9a7dab5c6ee85` | `c451ef8684f88001f9e7a8fd1a45d6411d1eb12f7cb0bf551acb48acb910d9eb` |
| 02 | `f1b2772af5ac525c6f55b53676bdda065e86a8cdd97d71712b3397198d8b79a8` | `1159e91279c309bbca652db962723dea67aa3f4658f22b7946537a45d8590e72` |
| 03 | `de2c11b81a926150e7ec495c99279e020c16fe9ba1ce9b297169d5a980da3b97` | `482523cb100c2f181b8aa475225f17617c979f3c79a471fb16b7f8556f646cd1` |
| 04 | `fc52ae7c61ccbe3a9972527658abeab949e4dccd9f51df1076824b1d6608560f` | `50300b35dc420f71714b8b1259f068585b94a1b2acaeba2d381ec935d6362362` |
| 05 | `3af330dc595c21580e1a38ea314426436e13986bf4c46eaa3d75f9a25cbe23e7` | `5be0b7075bafbce2ffb156de6667e58ecb90a2615e12d0950080d4c7dd172580` |
| 06 | `f17f8dff2fe52aaaa7807b5bb55d14a509e0d31d5697562b9b94571e9c97ec57` | `66df169535f5c307eb60d1a7d6da895d9c57b7fc44c395f8f6bf8d2538993393` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过；完整测试包含分类图谱、图片哈希和格式、首页封面安全区域、图片查看器、列表及生产构建后的子路径图片访问检查。构建仍提示 JavaScript chunk 超过 500 kB，未阻断构建。
