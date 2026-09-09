# Great Spotted Woodpecker image set

2026-09-09 使用内置 imagegen 生成并调整六张 1536 × 1024 图片。保留运行图 `public/images/species/great-spotted-woodpecker/`，生成及编辑提示词见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应实拍地点或野外记录。

## 内容依据

- [EUNIS — 大斑啄木鸟分类与全球等级](https://eunis.eea.europa.eu/species/1008)
- [RSPB — 大斑啄木鸟形态与生活](https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker)
- [IUCN 经 GBIF 发布 — 大斑啄木鸟评估记录](https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/22681124)

访问日期：2026-09-09。EUNIS 搜索索引支持全种 LC；页面已迁移，正文不能完整读取。GBIF 的 IUCN 数据集索引给出 2025 发布的评估编号 280946929；没有读取到独立评估日期，assessedYear 留空。RSPB 支持形态、食性及生活，英国 Green 是地区口径。沿用仓库 Piciformes／Picidae 的分类阶元，属种保留 Dendrocopos major。

本次未核实独立全球趋势字段，trend=unknown；不从单个地区或饲养资料推算全球数量。

## 图片范围与限制

封面主体较小，观察图帮助看清黑白肩斑与红色尾下。04 表现成年雌鸟黑色后脑勺，不推广到幼鸟性别判断。敲击、松果取食和巢洞图都是单一场景，不表示连续动作或固定时间。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。已按原始分辨率查看最终临时输入与运行封面；主体完整，左 40% 以环境背景为主。目测保守完整可见主体边界：`{"left": 1084, "top": 337, "right": 1142, "bottom": 482}`，包括头、喙尖、翅缘、抓握的足与尾羽末端。主体中心位于宽度的 72.5%，不是由 focalPoint 推定。

提交的 focalPoint：`{"x": 0.71, "y": 0.41}`。运行封面 SHA-256：`3013b1c92fd14d835427ca2f9aa04fdef66ca28a6014e22b4c38a02e743f3971`。

以下按现有 CSS 的 object-fit、object-position、动画变换和正文／轮播面板占位矩形计算完整主体的最小间距（CSS 像素），每项至少 24。覆盖视口边缘与组件安全区域，未使用浏览器。测试把运行封面哈希与完整主体边界绑定。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 32.27 | Pass 33.16 | Pass 32.82 | Pass 32.60 | Pass 32.82 | Pass 32.60 |
| 390x760 | Pass 32.27 | Pass 33.16 | Pass 32.82 | Pass 32.60 | Pass 32.82 | Pass 32.60 |
| 1366x768 | Pass 59.84 | Pass 60.39 | Pass 60.19 | Pass 72.04 | Pass 70.75 | Pass 60.05 |
| 1920x900 | Pass 113.30 | Pass 113.43 | Pass 113.38 | Pass 113.35 | Pass 113.38 | Pass 113.35 |
| 2560x900 | Pass 87.40 | Pass 86.50 | Pass 86.83 | Pass 87.06 | Pass 86.83 | Pass 87.06 |
| 3840x900 | Pass 124.00 | Pass 150.38 | Pass 154.70 | Pass 34.48 | Pass 33.74 | Pass 157.58 |

## 压缩与验收哈希

静态检查五张源观察图与五张运行观察图；封面另以原始分辨率复核。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，验证解码及尺寸。未使用 TinyPNG，未重复压缩已接受 WebP。验收后删除临时 PNG，仅保留 WebP、提示词和哈希证据。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `228714ab12f9ad8be65f05da84f681112adc24589f11b57f6c6d70a1ab979d28` | `3013b1c92fd14d835427ca2f9aa04fdef66ca28a6014e22b4c38a02e743f3971` |
| 02 | `fd599517e78b4148f444a98b23ebb9ebc670c9cec754d649a1388af27511d3b8` | `551080c5a12969f8e226d533384189245785280b8d2c47811be2f4a935c34331` |
| 03 | `d2c14375a97f40ae94f09f5499c2983596c34d04eaa3de1fd1510fc161efb3af` | `b46cd8a8403069b39855b6b3106d642b9712fa3baa8a177148f40ec469a1e5be` |
| 04 | `5831d56170204ac2476f90deec923f3ac7bc0ce1ae8ff173a19d8f52fc76584a` | `5e58100c3088ca8806e8350eaf997615b1e5ef1d220327d03942d93c6e43af35` |
| 05 | `eaf7406ee2e91aa86f954365f2c0de7e84117de69695c155be782a4151d27ef9` | `a31a62d99eaf6a9de194ce3bd83088db16210af759ffb67c2d32dc685bb05cd0` |
| 06 | `5731e8615ef0ac735df706f32d0c1e54b2fd15b63e2d4f65e4deed878f8b1bdf` | `330fa55130dd845bd9e94106408efe27d18f725c0af7ad45e93ccee2f7d40c48` |

## 项目验证

`npm run typecheck`、`npm run test:carousel` 与 `npm test` 通过。完整测试含 172 项分类测试及本批六图哈希、尺寸和解码验证，并覆盖首页轮播、目录、图片查看器及构建后的子路径资产访问。生产构建通过，仍提示主 JavaScript chunk 大于 500 kB。
