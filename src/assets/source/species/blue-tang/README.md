# Blue Tang image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/blue-tang/`，完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [澳大利亚博物馆 — 拟刺尾鲷外形与分类](https://australian.museum/learn/animals/fishes/blue-tang-paracanthurus-hepatus/)
- [FishBase — 拟刺尾鲷全球等级](https://www.fishbase.se/summary/Paracanthurus-hepatus.html)
- [Animal Diversity Web — Paracanthurus hepatus 形态与生活](https://animaldiversity.org/accounts/Paracanthurus_hepatus/)

访问日期：2026-09-09。分类图谱沿用本仓库的鲈形目口径，由澳大利亚博物馆分类表支持；FishBase 的刺尾鱼目 Acanthuriformes 是另一口径，不在本次局部混入。FishBase 支持 2010-05-07 全球 LC，替代 ADW 的旧 NE 字段；食性采用 FishBase 与博物馆支持的浮游动物为主、偶尔藻类，不沿用 ADW 的藻食为主描述。31 cm 是可达全长，不作为常见成体范围。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1048, "top": 345, "right": 1138, "bottom": 389}`；包含该姿态可见的喙、尾羽、足、螯、鳍或腕。边界中心位于源宽度的 71.2%，左 40% 留作环境背景。focalPoint 为 `{"x": 0.78, "y": 0.35}`。

运行封面 SHA-256：`e4708dff207a7c4d8a8b3717b9019e554b604b6da62da1ebff570148de2444c0`。

已按原始分辨率静态检查源封面与最终 WebP；主体完整且与画面边缘之间留有背景。封面采用远景，细节辨认使用详情图集。生成图不用于计量、固定数量推断或精细解剖证明。

下表按现有 CSS 的 object-fit、object-position 与动画变换计算，值为视口边缘及文字、控制面板占位矩形的最小间距（CSS 像素）。每项至少 24 像素；对应回归在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希和完整主体边界。不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 68.05 | Pass 63.10 | Pass 64.96 | Pass 66.20 | Pass 64.96 | Pass 66.20 |
| 390x760 | Pass 68.05 | Pass 63.10 | Pass 64.96 | Pass 66.20 | Pass 64.96 | Pass 66.20 |
| 1366x768 | Pass 100.01 | Pass 109.97 | Pass 136.19 | Pass 49.11 | Pass 37.94 | Pass 135.31 |
| 1920x900 | Pass 183.00 | Pass 197.00 | Pass 209.17 | Pass 111.45 | Pass 95.75 | Pass 208.20 |
| 2560x900 | Pass 194.00 | Pass 197.36 | Pass 196.10 | Pass 195.26 | Pass 183.33 | Pass 195.26 |
| 3840x900 | Pass 168.50 | Pass 170.84 | Pass 243.50 | Pass 169.38 | Pass 169.96 | Pass 198.10 |

## 压缩与验收哈希

源输入与运行图逐张静态检查。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，脚本验证解码及尺寸；未使用 TinyPNG，不重复压缩已接受的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `54a8418854e2300c941736c1c25832d8f47defc4653b77b08d21643c5b4c2359` | `e4708dff207a7c4d8a8b3717b9019e554b604b6da62da1ebff570148de2444c0` |
| 02 | `9786e26ea0341ffe2a366b58ecbce8423c9c5101255c99589e775310a1b5b56e` | `65f6781f2b601233046322aff41f4c8538b85662ffd1446f8167d145cc55c918` |
| 03 | `4399f2f733caef8735634fce2145312c3bff149b39de8d0ac2c8fd124c1c5432` | `b89f3daf0a1858247ed9c6a85cd787c165f73f90574eb3aca6e2c8358878d423` |
| 04 | `eb331ba449337d1d3d9fe194f0b88802694c1935194bab7f1b41ae3b93b72b70` | `ecaccdd665ec91fe0aa0693a7e825793b1c17b0833e28e9b931d8562392f065b` |
| 05 | `969ced63ee9f31af95837d4139fad2777ba7c9e1b2a59063a51c6887707f617d` | `ac9bea437e45903dad89978e944c1d7d24c00949265a5be9aad8591644b21baf` |
| 06 | `fb96d53bceda88cc6b087a3900622355446344b76477c4ad4ac5fbf091e564a0` | `76412601c420e53176adebe5e46cde5a8fbe0359eb19d20983b7e8d1fdceb050` |

## 仓库验证

`npm run typecheck`、`npm test`（含生产构建与子路径资源验证）及 `git diff --check` 通过。验收后删除本批临时源 PNG，保留运行 WebP、提示和源文件哈希。
