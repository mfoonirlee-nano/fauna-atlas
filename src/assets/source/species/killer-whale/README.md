# Killer Whale image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/killer-whale/`，完整生成及封面编辑提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [NOAA Fisheries — 虎鲸形态、食性与种群](https://www.fisheries.noaa.gov/species/killer-whale)
- [Society for Marine Mammalogy — 2026 年名单与虎鲸分类注释](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)
- [IUCN SSC Cetacean Specialist Group — 全球鲸类红色名录状态](https://iucn-csg.org/red-list-status-of-cetaceans/)

访问日期：2026-09-09。IUCN 鲸类专家组名单支持全球 DD；不将南方居留种群的濒危状态套到整个物种。海洋哺乳动物学会 2026 年名单保留 Orcinus orca，并暂把相关北太平洋生态型作为亚种处理。NOAA 的 32 英尺按约 9.75 m 记录上限，未填入普通成年区间。图谱沿用现有 Cetacea 鲸目。生成图不用于辨认特定生态型或亲缘关系，眼部近景纹理不作为解剖测量。

本次未核实独立全球趋势字段，保留 `trend=unknown`；未把出版年或访问年填作评估年。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1078, "top": 334, "right": 1315, "bottom": 436}`；包括该姿态可见的耳、吻或鸟喙、足、尾及鳍尖。主体边界中心位于源宽度的 77.9%，左 40% 为环境背景。focalPoint 为 `{"x": 0.89, "y": 0.36}`。

运行封面 SHA-256：`cc1ff46817282efa704ac6ade67dcbf7d40a7eea482814131eceaf7cca6aad5a`。

以下间距来自现有 CSS 的 object-fit、object-position 与轮播变换计算；涵盖视口边缘及文字、控制面板占位矩形。每项至少 24 CSS 像素；不使用浏览器。对应回归用例在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希及完整主体边界。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 59.89 | Pass 54.61 | Pass 55.67 | Pass 56.13 | Pass 52.04 | Pass 57.91 |
| 390x760 | Pass 59.89 | Pass 54.61 | Pass 56.59 | Pass 57.91 | Pass 56.59 | Pass 57.91 |
| 1366x768 | Pass 93.62 | Pass 95.52 | Pass 94.81 | Pass 76.19 | Pass 65.28 | Pass 94.33 |
| 1920x900 | Pass 151.80 | Pass 153.47 | Pass 152.85 | Pass 149.51 | Pass 134.19 | Pass 152.43 |
| 2560x900 | Pass 123.73 | Pass 124.28 | Pass 124.08 | Pass 123.94 | Pass 124.08 | Pass 123.94 |
| 3840x900 | Pass 109.00 | Pass 140.00 | Pass 232.09 | Pass 66.96 | Pass 66.54 | Pass 234.21 |

## 压缩与验收哈希

源输入逐张静态检查；使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，转换脚本验证解码和尺寸。不使用 TinyPNG，不重复压缩接受后的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `6dd87532ec724f045ec2a903720a0ad6e805cd3d558afbd6c132afe70b861bf4` | `cc1ff46817282efa704ac6ade67dcbf7d40a7eea482814131eceaf7cca6aad5a` |
| 02 | `9c29d4b4a1f27e7a726aaa204b9ba3217aaeff27b2cf6e6e834d54e08cfe468e` | `bcf51689319785c332c8407e59cd36a84a7f73e88b1014f13f02ca0c0a744f4f` |
| 03 | `b54fd56424db3f3fd499765cdfd4570c10d3bb879edde7f1129e129f5a27304e` | `bc4c77f5b3d759e53cda67f3a420a0369e15aad3962b95a597d8fee769a2f377` |
| 04 | `0c0390c7c90b3face9ebd0affb5524b5c59bebdbcdf71849617085419613051d` | `281bed557892683d975330d5b51987730bd922cfd6128f27c05a945f52da73fe` |
| 05 | `f98c9929b3e9617ae346e49ff6f73bd243314035760f52985cf8e4e6e3e42e15` | `279d733f72f06f0b83fbedac5f0c25aa37cc5d1591b802ada5f30cb53ecb01b7` |
| 06 | `fcdc03214dd1c4125b9d2bcaa6abbcd1feb83b74422099a35f8a1c71f87c20a8` | `ec82902e1cfc04237d70b1cc197513a86a7c349334af43c0dfd5d713c3272d80` |

## 项目验证

已按原始分辨率静态检查源封面与最终 WebP 封面，并检查其余五张观察图。`npm test` 全部通过，包含图片、分类档案、轮播及生产构建和子路径资源检查；TypeScript 检查通过。验收后删除本目录临时 PNG，保留运行 WebP、提示词和验收记录。
