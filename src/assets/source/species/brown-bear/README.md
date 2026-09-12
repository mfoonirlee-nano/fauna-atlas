# Brown Bear image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/brown-bear/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Animal Diversity Web — 棕熊分类、分布与全球等级](https://animaldiversity.org/accounts/Ursus_arctos/)
- [U.S. National Park Service — 棕熊食物、冬眠与育幼](https://www.nps.gov/subjects/bears/brown-bears.htm)
- [Animal Diversity Web — 棕熊保护状态](https://animaldiversity.org/accounts/Ursus_arctos/#conservation)

访问日期：2026-09-10。ADW 支持熊属分类、欧亚及北美分布和全球 LC；NPS 支持肩部肌肉隆起、挖掘、杂食、冬眠差异与育幼。沿海捕鲑鱼的生态不外推至全部棕熊，灰熊在这份档案中作为棕熊范围内的常用名称处理。不同地区、性别和季节的体型跨度大，本次不合并成未经核实的比较指标。评估日期和全球趋势未填入。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：圆耳朵和宽熊掌。
- `03-observation.webp`：前爪挖一挖。
- `04-observation.webp`：灌木上的浆果。
- `05-observation.webp`：浅河里的棕熊。
- `06-observation.webp`：跟着妈妈走。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1083, "top": 408, "right": 1183, "bottom": 470}`，包括吻、双耳、肩背、可见四肢与足端、短尾及后侧外缘。边界中心位于源宽度的 73.8%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.76, "y": 0.4}`。

运行封面 SHA-256：`eab98ad881b46133c738d3611b2bed7e9d02aac3ac06165a6d3d22c767d26528`。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 41.17 | Pass 42.42 | Pass 41.95 | Pass 41.64 | Pass 41.95 | Pass 41.64 |
| 390x760 | Pass 41.17 | Pass 42.42 | Pass 41.95 | Pass 41.64 | Pass 41.95 | Pass 41.64 |
| 1366x768 | Pass 69.08 | Pass 70.01 | Pass 69.66 | Pass 69.43 | Pass 69.66 | Pass 69.43 |
| 1920x900 | Pass 124.50 | Pass 125.08 | Pass 124.86 | Pass 124.72 | Pass 124.86 | Pass 124.72 |
| 2560x900 | Pass 99.33 | Pass 98.91 | Pass 99.07 | Pass 99.17 | Pass 99.07 | Pass 99.17 |
| 3840x900 | Pass 121.50 | Pass 153.00 | Pass 333.19 | Pass 48.09 | Pass 47.48 | Pass 286.91 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9fe5b1577158aee395f01820ae9e37f58bd7bf96699c56ebe7a3ad3416262e57` | `eab98ad881b46133c738d3611b2bed7e9d02aac3ac06165a6d3d22c767d26528` |
| 02 | `b53292c9f090f77a212958c8babf118218a4b709b0a392fad3b1cb882a314917` | `c62bceee13cad17f8efb297e83efbd7a12eec118264d11d24dad285864bb805c` |
| 03 | `d1c072fba73ca114e8d880c73671971c13f265e612731d5a0929fe1f38f0dcea` | `a5250afa225fbfa9e71b9fe172000ad2883a3f2cb23bb81e2c697e8a0667fe43` |
| 04 | `86f08f42cba0b0ba16dbab627aa0d234d17a8b4d7c38753417906113cf394172` | `27f72e0344d670c0c5b07bb6c8e64a3afeac3ebdbc025e3f15e0d733a8d28c0f` |
| 05 | `c411f1e043d72739a97e274fa26b6a016d90023d8a6f51634d639b7acb05b8ff` | `23c1d80c115928a8a6842bb312a3fc0fb389676e7f222268ce0c27db57ae2f99` |
| 06 | `490f5b2140770b209488859c803671e6dc816b33e0b9ed9f9d46582d43d08710` | `801761522cbfb69d072120ac902f2c20839599899960db50a0becafd511b6822` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `64d5daf8ed49630ca4bfb1161416363e818206084067116f2f6557e45f86f0bd`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[535, 250, 1460, 795]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.
