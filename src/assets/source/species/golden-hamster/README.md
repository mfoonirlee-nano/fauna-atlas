# Golden Hamster image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/golden-hamster/`，提示词和封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 名称与分类归属](https://www.gbif.org/species/2438482)
- [Animal Diversity Web — 金仓鼠生态](https://animaldiversity.org/accounts/Mesocricetus_auratus/)
- [RVO — 金仓鼠行为与颊囊](https://www.rvo.nl/huis-en-hobbydieren/goudhamster)
- [IUCN — 2022-1 等级变更表](https://nc.iucnredlist.org/redlist/content/attachment_files/2022-1_RL_Stats_Table_7.pdf)
- [Mammal Diversity Database — 野生分布与等级](https://www.mammaldiversity.org/taxon/1002208/)

访问日期：2026-09-09。GBIF 确认 Mesocricetus auratus。IUCN 2022-1 等级变更表明确从 VU 调为 EN，MDD 当前亦引用 EN。ADW 正文、旧嵌入等级及 RVO 的 VU 文字有新旧混杂，因此只用它们核实生态与颊囊，不采信其保护等级。2022 是发布版本，不当作独立评估年份。100–125 g 使用 ADW 的成年参考范围，不覆盖全部宠物品系；全球宠物及实验饲养地点不计入野生分布。RVO 支持颊囊搬粮、独居和自掘洞穴。

来源支持所列全球保护等级，但本次未取得独立评估日期和全球趋势证据。assessedYear 留空，trend 保留 unknown，不把网页更新时间或名录发布版本当作评估日期。

## 图片范围与限制

封面使用小主体环境构图，为首页文字及轮播控件留出空间；02 起的观察图展示更大的动物。展示野生型金褐色外观，不代表所有家养品系。03 仅重建颊囊装食后的外部轮廓，不能看到囊壁或量出容量。05 只展示洞口；06 的黄昏场景不用于证明全天作息，远处景物不对应真实定位。

## 封面验收

源图和运行 WebP 都为 1536 × 1024。focalPoint：`{"x": 0.78, "y": 0.35}`。目测保守完整主体边界：`{"left": 1098, "top": 318, "right": 1207, "bottom": 435}`，包含姿态下可见的头、耳尖、鼻端或嘴、足部、尾巴及外缘毛发；远侧受身体遮挡的结构不另行虚构。主体中心位于宽度的 75.0%，左 40% 为环境背景，完整主体边界四周保留真实背景。

运行封面 SHA-256：`f2f4afef38772b59813b368ff03a560d62db77bdee424695d15876ce01db44e0`。

已按原始分辨率查看源图及运行封面，核对形态和上述边界。`tests/hero-carousel.test.mjs` 将完整主体边界与此哈希绑定。检查视口边缘、左侧正文和右侧轮播面板，6 个视口与 6 个动画端点均通过，最小安全余量 42.26 CSS 像素（要求至少 24）。依据现有 CSS 几何进行静态检查，未启动浏览器。

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
| 01 | `910a9a48aea754c229483cfb02818fc6424552e6a44ba80b9930b1652ba05732` | `f2f4afef38772b59813b368ff03a560d62db77bdee424695d15876ce01db44e0` |
| 02 | `768dade31ec917b0947b3cb79e0ae838eef98b23f96e73c87a3db986b46e7932` | `5e2e8d4b4924304e192da360509af8573ef206c8591dd18ddff330f431078860` |
| 03 | `5e67eb36de5d8b0d321b00b8760c76e2fd2a5088f818f580911ebec4258004a6` | `5e98d3b755bd271923f6de1d5e46dada329de13b12effd896f25dcd627b6ca89` |
| 04 | `847bcdffbf599ab7d14e55ee719b8b200003de497be17731b2804889db2d9913` | `b779311b908800e541578bb58d6613615a9e59c22f1da97b1e6c2e79852c499c` |
| 05 | `f4c73bf2cd2b605447a1167285ea218b4ea9dd852ad803dd0f20cb84318f1acd` | `01e1747442f7a347262679ca9e70611c93669a4dbbf6e2085ae3acac5d0fa44d` |
| 06 | `1a3a4de84b9b1a17eb042240421a1f42e36e6cbc457f773fbf0d300551aa6ff1` | `78b313e49692c9352bc9439c9503285c33002ddb1be3e6936a5ddbf48b266059` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过；完整测试包含分类图谱、图片哈希和格式、首页封面安全区域、图片查看器、列表及生产构建后的子路径图片访问检查。构建仍提示 JavaScript chunk 超过 500 kB，未阻断构建。
