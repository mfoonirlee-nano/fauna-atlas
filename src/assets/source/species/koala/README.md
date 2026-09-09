# Koala image set

2026-09-09 使用内置 imagegen 制作六张 1536 × 1024 图片。运行图保存在 `public/images/species/koala/`，提示词和封面编辑步骤见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应定位野外照片。

## 内容依据

- [GBIF — 名称与分类归属](https://www.gbif.org/species/2440012)
- [Australian Museum — 考拉](https://australian.museum/learn/animals/mammals/koala/)
- [Animal Diversity Web — 考拉](https://animaldiversity.org/accounts/Phascolarctos_cinereus/)
- [澳大利亚考拉恢复计划 — 全球与地区等级](https://www.legislation.gov.au/F2022L00555/asmade/2022-04-07/text/original/epub/OEBPS/document_1/document_1.html)
- [DCCEEW — 考拉保护行动](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/koala)

访问日期：2026-09-09。GBIF 确认 Phascolarctos cinereus。Australian Museum 提供形态、桉树食性、有袋类成长和生活资料。官方恢复计划区分 IUCN 全球 VU 与澳大利亚昆士兰、新南威尔士、首都领地合并种群 EN；DCCEEW 当前行动页支持地区等级与威胁。没有采用博物馆页顶部尚未同步的 NSW Vulnerable 字段。68–82 cm 是博物馆所列尺寸，原文没有明确测量端点，所以不填 adultLengthCm。

来源支持所列全球保护等级，但本次未取得独立评估日期和全球趋势证据。assessedYear 留空，trend 保留 unknown，不把网页更新时间或名录发布版本当作评估日期。

## 图片范围与限制

封面使用小主体环境构图，为首页文字及轮播控件留出空间；02 起的观察图展示更大的动物。树干和身体会遮挡远侧肢体。03 为抓握近景，不能据此逐一数清所有手指；05 蜷坐时部分四肢藏在身体下。06 展示已经长毛的较大幼仔，不展示刚出生阶段，也不能据母仔图量出成长比例。

## 封面验收

源图和运行 WebP 都为 1536 × 1024。focalPoint：`{"x": 0.75, "y": 0.39}`。目测保守完整主体边界：`{"left": 1050, "top": 319, "right": 1180, "bottom": 464}`，包含姿态下可见的头、耳尖、鼻端或嘴、足部、尾巴及外缘毛发；远侧受身体遮挡的结构不另行虚构。主体中心位于宽度的 72.6%，左 40% 为环境背景，完整主体边界四周保留真实背景。

运行封面 SHA-256：`5eebef4dda81ec2f7ddeafcf0760aa92937e1499b94229a99a5c4ee676e2a4a9`。

已按原始分辨率查看源图及运行封面，核对形态和上述边界。`tests/hero-carousel.test.mjs` 将完整主体边界与此哈希绑定。检查视口边缘、左侧正文和右侧轮播面板，6 个视口与 6 个动画端点均通过，最小安全余量 39.76 CSS 像素（要求至少 24）。依据现有 CSS 几何进行静态检查，未启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本物种临时源图>`，cwebp q82、m6 转换，并检查解码和尺寸。未使用 TinyPNG；未重复压缩接受的 WebP。逐张检查源图，转换后检查运行图的静态拼图，封面另以原始分辨率复核。完成验收后删除仓库中的本批临时源 PNG，只保留 WebP、提示词与哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `2b48b889841ba610df459495ba585419304472fb65968e22538510623389c966` | `5eebef4dda81ec2f7ddeafcf0760aa92937e1499b94229a99a5c4ee676e2a4a9` |
| 02 | `7b8980757dacb4e3b326317e60b84cea3f5ec0a3e74be0171131e50d77983044` | `0c93e870e948646bbcd22f413d6290c47b83f6a56e66b2eba7e819964fc2b2ce` |
| 03 | `699a719e418171ed57d664c42d29c653241734b53f0bff39008b661930172013` | `1cbd8a8f47365c4a10b19437f6d5507490d4a9fdb6b4107ce5041837ac659391` |
| 04 | `ab27ec84b012c0a901f5e105dfd13b7c9128b3de0d7f5c5c3f2347994d74298a` | `4107b0bc3db4681257078b2950159e0eb929de7cc7cd51a16d4f8563f1cda4fd` |
| 05 | `398c24398a233cb465b0f5916bb377965b9854decb2bcbb0594d1dda729e3e76` | `2cb993ac365f9c23812f1b67512fc160a27ea73ffcf961d0b8cc1c4c18cf887f` |
| 06 | `da07098452fcf2108628b5db1a62db36aafb0db6ec609f44133c98b45403c26c` | `36993b1d9353003b046a1e38f05aba85b6277692c9ceb17f048b5d524e419fb9` |

## 项目验证

`npm run typecheck` 与 `npm test` 通过；完整测试包含分类图谱、图片哈希和格式、首页封面安全区域、图片查看器、列表及生产构建后的子路径图片访问检查。构建仍提示 JavaScript chunk 超过 500 kB，未阻断构建。
