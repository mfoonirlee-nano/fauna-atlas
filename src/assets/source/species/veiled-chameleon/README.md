# Veiled Chameleon image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/veiled-chameleon/`。最终提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [ADW — 高冠变色龙](https://animaldiversity.org/accounts/Chamaeleo_calyptratus/)
- [高冠变色龙发育与身体特征研究](https://pubmed.ncbi.nlm.nih.gov/30839129/)
- [GBIF — 分类及 IUCN 状态](https://www.gbif.org/taxon/TK53)
- [IUCN — 2012 年发布评估](https://doi.org/10.2305/IUCN.UK.2012.RLTS.T176306A1437838.en)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。05 已重做为低冠幼体；03 展示侧面冠突和眼位，不能证明两眼运动的完整过程。04 是伸舌捕食的单帧重建，不用于测量舌速或捕食距离。

## 压缩与静态检查

六张最终源 PNG 均已通过 TinyPNG 压缩，再用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部最终运行 WebP。未使用浏览器。

## 封面验收

源图与运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1182, "top": 334, "right": 1322, "bottom": 474}`，包括姿态下可见的吻端、冠突、足部、鱼鳍及完整尾尖。主体中心在源宽度的 81.5%，左侧 40% 留作背景，主体四周留有环境。

运行封面 SHA-256：`d524587cd54d525f4f373bbd0d14603ffcff85dd9c412f202ae70513c3f2c1b2`。

`tests/hero-carousel.test.mjs` 绑定上述哈希与完整主体边界。`npm run test:carousel` 已通过，检查主体与视口边缘、正文及轮播面板至少 24 CSS 像素的间距。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `3569b12f5674a1b0d69eb41388bcaff85966f100ded08309541efa3d2c2cf2c0` | `d524587cd54d525f4f373bbd0d14603ffcff85dd9c412f202ae70513c3f2c1b2` |
| 02 | `962c0afc84588f409c49d674195aeb868aff095d165b20104b1eccc962935521` | `1ab49634b1a17c55ea6a212dceb185c61d4d4fbb9d80e86fff8b7039c57c8b1d` |
| 03 | `7f1ba729d3ef625447c1347017c246f3d3ec264decf8b8e12ab2f87512d00ea6` | `e1df728817baf83fdfa6736ef0eb614637d6c517f2e2f921e69490c5bb2715f1` |
| 04 | `79164e7ffb634eb1efbefddc9be8cdc7d42fd721d20f65b630bcc6246e4fce61` | `3d8829747bbbc2b7d2ede5d8eef62ce1fa49c4bfbfe40fb0a7e1e9cbf33cb64e` |
| 05 | `97380e8193987c05736522a1a5032181673cb80526d9fe2fd7bec5c7c9314038` | `e6a617a8a37742163035e3b85eb3240d5c2085cd7fa61e271436f0468c39e5b6` |
| 06 | `d61f1b1872cf70b83771da67328d3ee1281c3339a2ed0a28206a739c8b25bd7a` | `8249a0c850b7725360774f53649cea23e4714a5ff7be46c84c3e56fc14b76d4c` |

## 评估日期范围

已核对资料中的全球 IUCN 类别，未核实独立评估日期，故 `assessedYear` 留空。高冠变色龙 DOI 中的 2012 年是发布年份，不据此填写评估年份；东方铃蟾与大白鲨采用动物园、博物馆引用的类别。种群趋势未核实，保持 `unknown`。

## 验证结果

`npm test` 的 199 项测试全部通过，包含新增物种分类归属、PNG/WebP 尺寸与哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 仍提示主代码块超过 500 kB；本次未调整打包结构，未启动浏览器。
