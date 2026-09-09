# Common Cuttlefish image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/common-cuttlefish/`，完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [Animal Diversity Web — Sepia officinalis 形态与生活](https://animaldiversity.org/accounts/Sepia_officinalis/)
- [Animal Diversity Web — Sepia officinalis 分类归属](https://animaldiversity.org/accounts/Sepia_officinalis/#classification)
- [MarLIN — 普通乌贼生态与全球等级](https://www.marlin.ac.uk/species/detail/1098)

访问日期：2026-09-09。ADW 支持乌贼目、乌贼科、乌贼属，以及八腕加两条捕食触手；MarLIN 支持全球 LC、产卵栖地与浮力结构。未采用来源中口径不一致的外套膜长度作为全长，也未填入未核实的评估年份和全球趋势。图集中休息姿势的捕食触手收起，不能按可见附肢数推断其总数。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1140, "top": 330, "right": 1228, "bottom": 380}`；包含该姿态可见的喙、尾羽、足、螯、鳍或腕。边界中心位于源宽度的 77.1%，左 40% 留作环境背景。focalPoint 为 `{"x": 0.78, "y": 0.35}`。

运行封面 SHA-256：`954e950d3227bef558ddd20db0b4abb1c429db4584d9436260c9ec69787f069a`。

已按原始分辨率静态检查源封面与最终 WebP；主体完整且与画面边缘之间留有背景。封面采用远景，细节辨认使用详情图集。生成图不用于计量、固定数量推断或精细解剖证明。

下表按现有 CSS 的 object-fit、object-position 与动画变换计算，值为视口边缘及文字、控制面板占位矩形的最小间距（CSS 像素）。每项至少 24 像素；对应回归在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希和完整主体边界。不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 48.19 | Pass 43.72 | Pass 29.40 | Pass 54.90 | Pass 53.54 | Pass 33.72 |
| 390x760 | Pass 56.92 | Pass 51.52 | Pass 40.81 | Pass 54.90 | Pass 53.54 | Pass 46.02 |
| 1366x768 | Pass 141.99 | Pass 145.83 | Pass 144.39 | Pass 132.15 | Pass 121.80 | Pass 143.43 |
| 1920x900 | Pass 218.00 | Pass 222.32 | Pass 220.70 | Pass 219.62 | Pass 213.62 | Pass 219.62 |
| 2560x900 | Pass 209.00 | Pass 212.96 | Pass 211.47 | Pass 210.48 | Pass 211.47 | Pass 210.48 |
| 3840x900 | Pass 244.00 | Pass 235.76 | Pass 238.85 | Pass 192.21 | Pass 193.02 | Pass 240.91 |

## 压缩与验收哈希

源输入与运行图逐张静态检查。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，脚本验证解码及尺寸；未使用 TinyPNG，不重复压缩已接受的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `1698a044393721931b01c4ccf17790ba89b2e1f72359c334780b1fa9c5f0139a` | `954e950d3227bef558ddd20db0b4abb1c429db4584d9436260c9ec69787f069a` |
| 02 | `ae1e2b694889faaf38bbacf29c961575ce4369709a2c1fb8a6c47f879d90ab36` | `fc1d927672f4425a2d9149975e9d69cc1d388e2c8c5ebffa8724769c608f7792` |
| 03 | `6fd222e8ce0125a27597c7e23b4e8f242c3655e2a43aff02a79d8b49df461a03` | `e3dd2b0db188b9dd1df748db89950850353a5370a2b463bb221c4e9509e7b355` |
| 04 | `9003d3e8d3819a10ed90a9aca2c50210d9deb18c9f579e8f85f2afac25e871cf` | `56a86b1e53e9bb6309e9ad941df44cf54bd048baddc45d7440bce0aea66d2192` |
| 05 | `f151e8c99618d6ed6acf919061613324eb6d19258f8b068c7231b813287b6fb3` | `b672574e10343ba1baeb8493a811624faaf4532e45ed5e4efc938ceb30d3444a` |
| 06 | `fffec84bdac02b03017b42f71672946bf3e45c60e2136ad07a71908c4d3c5da3` | `0ae1889b683cae9c6c8c5873316ba7e4bcdd3e36d035f859bb3e25d91c087a98` |

## 仓库验证

`npm run typecheck`、`npm test`（含生产构建与子路径资源验证）及 `git diff --check` 通过。验收后删除本批临时源 PNG，保留运行 WebP、提示和源文件哈希。
