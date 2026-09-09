# Harbor Seal image set

2026-09-09 使用内置 image_gen 生成并编辑六张 1536 × 1024 图片。运行资产保存在 `public/images/species/harbor-seal/`，完整生成及封面编辑提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不是实拍地点或野外记录。

## 内容依据

- [NOAA Fisheries — 港海豹形态、分布与生活](https://www.fisheries.noaa.gov/species/harbor-seal)
- [Society for Marine Mammalogy — 2026 年分类名单](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)
- [CMS — Phoca vitulina 全球 IUCN 等级](https://www.cms.int/species/phoca-vitulina)

访问日期：2026-09-09。NOAA 的 5–6 英尺与 180–285 磅换算为约 152–183 cm、82–129 kg，作为该资料的常见范围。CMS 页面支持全球 LC；不从美国单个种群推定全球趋势。幼崽图已改为短灰色斑点毛，编辑提示见 edits.json；个体花纹、胡须数与亲缘关系不作为实测证据。

本次未核实独立全球趋势字段，保留 `trend=unknown`；未把出版年或访问年填作评估年。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1070, "top": 430, "right": 1186, "bottom": 486}`；包括该姿态可见的耳、吻或鸟喙、足、尾及鳍尖。主体边界中心位于源宽度的 73.4%，左 40% 为环境背景。focalPoint 为 `{"x": 0.75, "y": 0.42}`。

运行封面 SHA-256：`9be4332a8d5482f218652374a83b078ee0ec11a13b127c5d01035d7220b557bb`。

以下间距来自现有 CSS 的 object-fit、object-position 与轮播变换计算；涵盖视口边缘及文字、控制面板占位矩形。每项至少 24 CSS 像素；不使用浏览器。对应回归用例在 `tests/hero-carousel.test.mjs`，绑定运行封面哈希及完整主体边界。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 29.30 | Pass 30.07 | Pass 29.78 | Pass 29.59 | Pass 29.78 | Pass 29.59 |
| 390x760 | Pass 29.30 | Pass 30.07 | Pass 29.78 | Pass 29.59 | Pass 29.78 | Pass 29.59 |
| 1366x768 | Pass 57.71 | Pass 58.18 | Pass 58.00 | Pass 57.88 | Pass 57.99 | Pass 57.88 |
| 1920x900 | Pass 112.10 | Pass 112.18 | Pass 112.15 | Pass 112.13 | Pass 112.15 | Pass 112.13 |
| 2560x900 | Pass 88.80 | Pass 87.95 | Pass 88.27 | Pass 88.48 | Pass 88.27 | Pass 88.48 |
| 3840x900 | Pass 89.00 | Pass 119.20 | Pass 299.88 | Pass 41.18 | Pass 40.51 | Pass 253.92 |

## 压缩与验收哈希

源输入逐张静态检查；使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，转换脚本验证解码和尺寸。不使用 TinyPNG，不重复压缩接受后的 WebP。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `e3aa0591036bbea0d01996dbd652d600577522841fa3b93f58e75b05ef680be4` | `9be4332a8d5482f218652374a83b078ee0ec11a13b127c5d01035d7220b557bb` |
| 02 | `7962c4929007dc2c42089b37d135ea7d4964834c7d985f9cf3d152ce6a2fad51` | `92d6655205cc73cd0ffacb28d0e5aa3be8b41d1d017b56dfe0dddf36336d0bdb` |
| 03 | `961618d287dbfefc258b612b5b2dc2a3246c7c7c60ad9a2bc5570f655c96d136` | `676e50974be597188ea1a68caf1cbcfd0d717b5ad99598377901d95004b9be9d` |
| 04 | `b09ef244dab4de2cf9c9711cfdab4b2fb2b86b7a2d4125183be9adef6ff7bfe0` | `7ca590b03f3b25a6b748a27032cbaf069de5098f7ebe47534e570dfce753c77d` |
| 05 | `03b136f430ea77abdfd8f8b22ea05df7430e62de9379563efab615e8db8c852d` | `39eb03fd119efa2afc6be3d7bd302fe7fc7593e2502f251acdecfb31dc87b1c5` |
| 06 | `079052a9bcf38911398b143e7f23a2e6a04711f3ff3f92cfec1fe36e91552beb` | `cc7eab58ced44a8ad3a189ec6ce6bd7523917d594c4219fe7ec2114ee756ae65` |

## 项目验证

已按原始分辨率静态检查源封面与最终 WebP 封面，并检查其余五张观察图。`npm test` 全部通过，包含图片、分类档案、轮播及生产构建和子路径资源检查；TypeScript 检查通过。验收后删除本目录临时 PNG，保留运行 WebP、提示词和验收记录。
