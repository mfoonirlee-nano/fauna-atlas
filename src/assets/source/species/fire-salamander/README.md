# Fire Salamander image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/fire-salamander/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [AMNH — 火蝾螈现行分类与分布](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Salamandridae/Salamandrinae/Salamandra/Salamandra-salamandra)
- [Animal Diversity Web — 火蝾螈形态与生活史（旧分类范围）](https://animaldiversity.org/accounts/Salamandra_salamandra/)
- [IUCN Red List 2023-1 — 全球等级变更表（LC → VU）](https://nc.iucnredlist.org/redlist/content/attachment_files/2023-1_RL_Table_7.pdf)
- [Deiß 等 2024 — Bsal 与火蝾螈的林地微气候研究](https://www.mdpi.com/1424-2818/16/8/510)

访问日期：2026-09-10。AMNH 支持当前分类和欧洲分布，ADW 支持皮肤、食性与生活史，但该旧文的北非、西亚分布及 LC 等级不沿用。IUCN 2023-1 变更表的检索索引列出 Salamandra salamandra：LC → VU；PDF 直接下载返回 403，未声称读到独立评估日期。Deiß 等 2024 研究的检索摘要支持 Bsal 在欧洲林地的威胁，出版商全文请求返回 429。保留原始出处以供复核，不填评估年份、准则或未核实的全球趋势。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：黑底上的黄斑。
- `03-observation.webp`：尾巴跟着身体弯。
- `04-observation.webp`：湿润的躲藏处。
- `05-observation.webp`：水里的幼体。
- `06-observation.webp`：夜间的林地。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1038, "top": 320, "right": 1193, "bottom": 411}`，包括头、四肢的可见轮廓与足趾、背部和完整弯曲尾端。边界中心位于源宽度的 72.6%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.75, "y": 0.31}`。

运行封面 SHA-256：`a02ad3f4e9e1375a91f1ff2ef399a87db5648bfe3356a2cae66079ed634bfb6c`。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 49.50 | Pass 43.80 | Pass 30.81 | Pass 47.36 | Pass 45.94 | Pass 35.11 |
| 390x760 | Pass 49.50 | Pass 43.80 | Pass 44.37 | Pass 47.36 | Pass 45.94 | Pass 47.36 |
| 1366x768 | Pass 91.12 | Pass 100.72 | Pass 110.28 | Pass 40.08 | Pass 28.82 | Pass 109.66 |
| 1920x900 | Pass 164.05 | Pass 166.21 | Pass 165.40 | Pass 98.76 | Pass 82.94 | Pass 164.86 |
| 2560x900 | Pass 125.07 | Pass 125.67 | Pass 125.44 | Pass 125.29 | Pass 125.44 | Pass 125.29 |
| 3840x900 | Pass 47.10 | Pass 44.58 | Pass 217.88 | Pass 46.16 | Pass 45.53 | Pass 172.72 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `be012ea195d6b9941ad4300dba4399db06f0ca86d1259eb8fc99134afbca18cd` | `a02ad3f4e9e1375a91f1ff2ef399a87db5648bfe3356a2cae66079ed634bfb6c` |
| 02 | `1370ac5e59941f7fd95468d5e8ba5da83018bb5375d8da527159396edf5e1b5f` | `0462672c3b60b0d729e214f5f9689f5e36dec4e489307b175f779b2a714f1564` |
| 03 | `d20c1c57628bdaaf9245030d8dceb04f0f918d18ceb930bd7bf0f10f6f77b56d` | `0f04672d455dde18f34b69cd3af2d544a088fd34f4955db46a631d4038d63da0` |
| 04 | `48f9f6bbb0ebd780b3d599bcbd17f9610d2c6ed6b7f3f52371390e673a1c6f2f` | `8d36c02ea8168d663ddca1caabb9661f3d0820ad90114c62a3faedfc16ead18e` |
| 05 | `3c6527dd242f206539c168beab8873c214364c4febfbe8cc68c2683a04f5f6ec` | `0fb98d3242bd3d555365e6f3b83b85d2cbcbec28933b0b1902158af80bfdce51` |
| 06 | `f5287b50d2f5d187d1b97df1dde1b8fe0718a90c29e9e45f3f2e6e38edf9a04f` | `b655c5f973dd977f4d3e024a18fc0016ac79d717ff62db5ccea5194a5a6bf2e4` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `a574dffe8884386ab5e09ab0c696c01158f119afb25dfeb9377b70ad024c1503`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[600, 295, 1450, 775]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.
