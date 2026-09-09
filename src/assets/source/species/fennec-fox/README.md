# Fennec Fox image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/fennec-fox/`，完整生成及封面编辑提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [Smithsonian National Zoo — 耳廓狐形态与生活](https://nationalzoo.si.edu/animals/fennec-fox)
- [NCBI Taxonomy — Vulpes zerda](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=68732)
- [IUCN — Vulpes zerda 全球评估（2015，评估报告镜像）](https://ascaris.org/uploads/s/8/e/d/8edzn3y4lrw0/file/zcJZDCQj.pdf)

访问日期：2026-09-09。依据 Smithsonian 记录头体长 35.6–40.6 cm 与体重 0.9–1.4 kg；不把尾长算入头体长。NCBI 核实犬科狐属归属；IUCN 2015 全球报告支持 LC。原报告记录独立评估日期为 2015-07-22，趋势为 Stable；据此填写 assessedYear=2015 和 trend=stable。脚掌图展示足部周围的毛，不展示足底皮肤的内部结构。

评估日期见报告第 1 页，趋势见第 4 页；两者均来自原始 IUCN 评估字段。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1035, "top": 306, "right": 1230, "bottom": 452}`；包括该姿态可见的耳、吻或鸟喙、足、尾及鳍尖。主体边界中心位于源宽度的 73.7%，左 40% 为环境背景。focalPoint 为 `{"x": 0.78, "y": 0.37}`。

运行封面 SHA-256：`889caff2e9c0680a6fa9cac77107a42f6d0b88cff72599c39f4cd0d53f5b3615`。

以下间距来自现有 CSS 的 object-fit、object-position 与轮播变换计算；涵盖视口边缘及文字、控制面板占位矩形。每项至少 24 CSS 像素；不使用浏览器。对应回归用例在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希及完整主体边界。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 39.11 | Pass 32.99 | Pass 27.88 | Pass 36.82 | Pass 35.29 | Pass 32.21 |
| 390x760 | Pass 39.11 | Pass 32.99 | Pass 35.29 | Pass 36.82 | Pass 35.29 | Pass 36.82 |
| 1366x768 | Pass 80.81 | Pass 82.21 | Pass 81.68 | Pass 37.37 | Pass 26.09 | Pass 81.33 |
| 1920x900 | Pass 135.60 | Pass 136.62 | Pass 136.24 | Pass 94.96 | Pass 79.09 | Pass 135.98 |
| 2560x900 | Pass 105.13 | Pass 104.94 | Pass 105.01 | Pass 105.06 | Pass 105.01 | Pass 105.06 |
| 3840x900 | Pass 44.20 | Pass 41.57 | Pass 143.32 | Pass 43.21 | Pass 42.56 | Pass 146.31 |

## 压缩与验收哈希

源输入逐张静态检查；使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，转换脚本验证解码和尺寸。不使用 TinyPNG，不重复压缩接受后的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9b690005d8bff0599b7dc0b26955e8307beadac2d87082f67894e9aa960f9825` | `889caff2e9c0680a6fa9cac77107a42f6d0b88cff72599c39f4cd0d53f5b3615` |
| 02 | `a4d218e2fc1e568c2649dacf78788676b88ab600e739312c7bafc3a04e105065` | `c284a787b9f4db2d7b018a72bb2c59effd16dafc4cfd292537e7db22b2f36488` |
| 03 | `2a622bc735a2b4d51d3298236b5fdc8539cf5f72b9d063d26d12850334018c54` | `de98d929479f69c6f1ecd9f4d5010bb37f327626c60d1ee8e4ff85c8db1503fd` |
| 04 | `fbdf5b1b8dc6cfa19c690b186afd04f767fa7a618936d45b4ce6ea639641e219` | `f52b131f78cb12ea9726685a8c64bf00afbf9d90f4bb91d831306877b44b553e` |
| 05 | `e28a6b1cfc15c7d4418ff418052b7615f4edf3a576d5b9c2c51525db883fae24` | `8153f6fd164a7d12e6a4f31c927e34e6d57cd7f6c2148e7226d40ab0c10a828b` |
| 06 | `d5ce2695328de3daaa493192e413925b623bd1c0dcea20fc74d093cbf02357c8` | `315330cd55e916da8535280685671ee26b623e466fcb52454fda6b2af0cee248` |

## 项目验证

已按原始分辨率静态检查源封面与最终 WebP 封面，并检查其余五张观察图。`npm test` 全部通过，包含图片、分类档案、轮播及生产构建和子路径资源检查；TypeScript 检查通过。验收后删除本目录临时 PNG，保留运行 WebP、提示词和验收记录。
