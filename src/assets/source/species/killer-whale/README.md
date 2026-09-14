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
| 01 | `327a2315f7631b8b0c0bb96a736e64c6d658610770365600b19f12631e4a3efe` | `dcdcdfb6e1b38c69270e8a0c32db6c5a8fd1d0d3b593c8d5ed3fbeb8b4bff3cb` |
| 02 | `9c29d4b4a1f27e7a726aaa204b9ba3217aaeff27b2cf6e6e834d54e08cfe468e` | `bcf51689319785c332c8407e59cd36a84a7f73e88b1014f13f02ca0c0a744f4f` |
| 03 | `b54fd56424db3f3fd499765cdfd4570c10d3bb879edde7f1129e129f5a27304e` | `bc4c77f5b3d759e53cda67f3a420a0369e15aad3962b95a597d8fee769a2f377` |
| 04 | `0c0390c7c90b3face9ebd0affb5524b5c59bebdbcdf71849617085419613051d` | `281bed557892683d975330d5b51987730bd922cfd6128f27c05a945f52da73fe` |
| 05 | `f98c9929b3e9617ae346e49ff6f73bd243314035760f52985cf8e4e6e3e42e15` | `279d733f72f06f0b83fbedac5f0c25aa37cc5d1591b802ada5f30cb53ecb01b7` |
| 06 | `fcdc03214dd1c4125b9d2bcaa6abbcd1feb83b74422099a35f8a1c71f87c20a8` | `ec82902e1cfc04237d70b1cc197513a86a7c349334af43c0dfd5d713c3272d80` |

## 项目验证

已按原始分辨率静态检查源封面与最终 WebP 封面，并检查其余五张观察图。`npm test` 全部通过，包含图片、分类档案、轮播及生产构建和子路径资源检查；TypeScript 检查通过。验收后删除本目录临时 PNG，保留运行 WebP、提示词和验收记录。

## 2026-09-12 regenerated cover acceptance

Generated a new prominent cover with built-in image_gen. Final prompt, source hash and superseded runtime hash/bounds: [cover-regeneration.json](./cover-regeneration.json). This section supersedes all earlier cover acceptance. Runtime `01-cover.webp` SHA-256: `dcdcdfb6e1b38c69270e8a0c32db6c5a8fd1d0d3b593c8d5ed3fbeb8b4bff3cb`. Source and runtime dimensions: 1536×1024. Committed focalPoint: `{"x": 0.89, "y": 0.36}`. Conservative full-subject boundary: `{"left": 720, "top": 265, "right": 1475, "bottom": 665}`, 755×400 source pixels (previously 237×102). Boundary center is 71.5% of source width.

Inspected the PNG and runtime WebP at original resolution. The complete visible silhouette includes seal whiskers and fore/hind flippers, whale muzzle, pectoral flippers and both tail flukes, plus the full orca dorsal fin. Background remains between these features and the source edges. The animal is prominent on the right; the left 40% remains quiet habitat. The conservative measurement may include a few background pixels. The seal hindflippers overlap naturally; their outer tips remain visible. The first orca candidate intruded into the left copy area and was rejected. Final reframing retained all fins and tail anatomy.

Converted with `npm run convert:webp -- <source>` (cwebp q82/m6). Preserved five existing gallery WebPs. The same canonical cover serves profile and carousel; no device-specific images were added. Temporary PNG moved outside the repository after acceptance.

The subject-frame carousel centers the full silhouette within a region inset by 24 CSS pixels, independently of ordinary focalPoint cropping. Desktop copy occupies the left half; its compact panel occupies y=100..196. Mobile panel occupies y=92..188, copy starts at y=452, and the image region is y=204..428. Static projections of all six viewports were visually inspected with these safe-area rectangles. These are mathematical image composites, not browser screenshots. Initial, settled, forward-enter, forward-leave, backward-enter and backward-leave retain the same geometry because the framed image animates opacity only.

Old hero sizes below use the superseded full-viewport cover fit and historical full-subject bounds; new sizes use the current subject frame. The image fills the maximum space available within the full-body clearance constraints.

| Viewport | Old hero → new hero subject (CSS px) | Viewport clearance | Copy gap | Panel gap | All six endpoints |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 175.9×75.7 → 272.0×144.1 | 24.00 | 63.95 | 55.95 | Pass |
| 390×760 | 175.9×75.7 → 332.2×176.0 | 28.90 | 48.00 | 40.00 | Pass |
| 1366×768 | 210.8×90.7 → 559.7×296.5 | 72.00 | 51.32 | 113.74 | Pass |
| 1920×900 | 296.2×127.5 → 825.6×437.4 | 72.00 | 62.40 | 109.30 | Pass |
| 2560×900 | 395.0×170.0 → 1057.0×560.0 | 96.00 | 113.10 | 48.00 | Pass |
| 3840×900 | 592.5×255.0 → 1057.0×560.0 | 96.00 | 445.90 | 48.00 | Pass |

`npm run test:carousel`: all 27 checks passed, including canonical image wiring, exact image counts, runtime hashes, measured data and full-subject viewport/copy/panel clearance. Source composition and hero acceptance pass. No browser was launched.
