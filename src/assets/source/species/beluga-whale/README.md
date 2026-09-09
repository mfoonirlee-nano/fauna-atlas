# Beluga Whale image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/beluga-whale/`，完整生成及封面编辑提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [NOAA Fisheries — 白鲸形态与生活](https://www.fisheries.noaa.gov/species/beluga-whale)
- [Society for Marine Mammalogy — 2026 年分类名单](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)
- [IUCN SSC Cetacean Specialist Group — 全球鲸类红色名录状态](https://iucn-csg.org/red-list-status-of-cetaceans/)

访问日期：2026-09-09。IUCN 鲸类专家组名单支持全球 LC；库克湾种群的独立评估不能代替全球等级。NOAA 的 16 英尺按约 4.88 m 记录为长度上限，未伪造常见成年区间。现代分类将鲸类放在偶蹄目内；本图谱沿用现有 Cetacea 鲸目显示。额隆图只展示外形，不展示声波或内部器官。

本次未核实独立全球趋势字段，保留 `trend=unknown`；未把出版年或访问年填作评估年。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1058, "top": 364, "right": 1231, "bottom": 416}`；包括该姿态可见的耳、吻或鸟喙、足、尾及鳍尖。主体边界中心位于源宽度的 74.5%，左 40% 为环境背景。focalPoint 为 `{"x": 0.81, "y": 0.32}`。

运行封面 SHA-256：`42e9220331c328f34a2a12ad7adb1b949b303fd76c8e713295ea7dfd7a1ee367`。

以下间距来自现有 CSS 的 object-fit、object-position 与轮播变换计算；涵盖视口边缘及文字、控制面板占位矩形。每项至少 24 CSS 像素；不使用浏览器。对应回归用例在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希及完整主体边界。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 70.57 | Pass 66.99 | Pass 52.33 | Pass 80.51 | Pass 79.41 | Pass 56.43 |
| 390x760 | Pass 81.25 | Pass 77.76 | Pass 61.59 | Pass 80.51 | Pass 79.41 | Pass 66.60 |
| 1366x768 | Pass 105.69 | Pass 108.08 | Pass 107.19 | Pass 58.13 | Pass 47.05 | Pass 106.59 |
| 1920x900 | Pass 161.60 | Pass 163.66 | Pass 162.89 | Pass 124.14 | Pass 108.56 | Pass 162.37 |
| 2560x900 | Pass 124.80 | Pass 125.39 | Pass 125.17 | Pass 125.02 | Pass 125.17 | Pass 125.02 |
| 3840x900 | Pass 59.00 | Pass 88.00 | Pass 269.12 | Pass 50.32 | Pass 49.73 | Pass 223.47 |

## 压缩与验收哈希

源输入逐张静态检查；使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，转换脚本验证解码和尺寸。不使用 TinyPNG，不重复压缩接受后的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `f21351a0493687d9bd9be320cc0254e5b118dc0adc17bf5a3991222a7ae83861` | `42e9220331c328f34a2a12ad7adb1b949b303fd76c8e713295ea7dfd7a1ee367` |
| 02 | `02d7fe8362b9cadc1efd4b7e507294a0a16185e3ebea6da06f6b4a4b1c37b8e5` | `3c5197e80f4bb87be005c85d3673236be5d80e8f9e5bccc64710f3d0438c4564` |
| 03 | `58c2ddcacc46bab6afb8e76074ec60fe95ee3de42be6cc658e3673be76e4da06` | `60cf6e504db82fb471dcc4fd00c6ee8de04868a7d8323709668fa9f6db4d8f20` |
| 04 | `8ec0b92dc9a90b87a21bd7726a22470ccca08a71ee74b62b5d9d496dd0534185` | `c93b441dbc657cb116f76d9dacff9f735a44c8cfea2d8f9417f0b6f62265b621` |
| 05 | `3592923cf98b6f49fb3b0f13a8d2330225643b25885d22c4a05c8f7c5a2bb25f` | `7e4e72fd5183899a144fb2ead1a874d3aafaf0fd6f2564b35afa2f5554b8ac96` |
| 06 | `2e3a142b9ca4696a8581ff061f2e798905b00a774c3e7b9defb4f41d91f2ac93` | `be1cfd5ed56b177309d156060e85cf0d7336bdcf74598de846884bdab8d189c0` |

## 项目验证

已按原始分辨率静态检查源封面与最终 WebP 封面，并检查其余五张观察图。`npm test` 全部通过，包含图片、分类档案、轮播及生产构建和子路径资源检查；TypeScript 检查通过。验收后删除本目录临时 PNG，保留运行 WebP、提示词和验收记录。
