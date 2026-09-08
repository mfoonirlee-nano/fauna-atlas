# Crab Hacker Barnacle image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片并编辑封面，无 CLI 回退。源 PNG 位于本目录，运行 WebP 位于 `public/images/species/sacculina-carcini/`。

## 最终提示词

完整生成与封面编辑提示词见 [prompts.json](./prompts.json)。

## 内容依据

分类采用 Thecostraca 鞘甲纲；Rhizocephala 采用 Høeg 等 2020 年修订的目级口径（现行部分数据库列为下纲），未沿用已废弃的 Kentrogonida。未核实到全球 IUCN 评估，暂记 NE；宿主尺寸、外囊宽度不填入完整寄生者体长。

- [OBIS — Sacculina carcini 分类归属](https://obis.org/taxon/134805)
- [Høeg 等 — 根头类分子分类修订（根头目口径）](https://academic.oup.com/zoolinnean/article/190/2/632/5648055)
- [2022 — 蟹奴内寄生生活的基因组适应](https://tbg.senckenberg.de/wp-content/uploads/2022/10/Genome-Biology-and-Evolution.pdf)
- [MarLIN — 蟹奴形态、生活史与分布](https://www.marlin.ac.uk/species/detail/2233)
- [2014 — 多个外囊与多重感染](https://pmc.ncbi.nlm.nih.gov/articles/PMC4222215/)

资料访问日期：2026-09-08。

## 视觉限制

封面外囊呈分叶状，宿主足部有遮挡，不能用于蟹类或蟹奴物种鉴定。剖面为了展示连接关系，夸张了连接柄与外囊离体距离；根状组织不是植物，也不表示精确器官位置。幼体细毛数量与宿主姿态为示意。 图片均标注 AI 生成科学情景重建。封面主体较小以适应裁切，图集提供近景；生境图不对应地理定位照片。

## 压缩

TinyPNG 已压缩全部六张源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP。无本地调色板回退。

## 封面检查

源图尺寸 1536 × 1024，focalPoint 为 `{"x": 0.93, "y": 0.35}`。按原始分辨率检查源 PNG 与运行 WebP，保守测量全主体边界为 `{"left": 1090, "top": 335, "right": 1300, "bottom": 444}`，包含全部可见末端；蟹奴封面包含整只宿主。主体中心位于宽度 77.8%，左侧 40% 留有安静背景，边界外保留真实背景。

运行封面 SHA-256：`a5abff44770cc6f7e8c614a9a6ecccf48797e2bea3e3dd668f5ed6d2337a85d4`。

`npm run test:carousel` 验证完整主体与视口边缘、标题和轮播控件保持至少 24 CSS 像素间距。下表涵盖静止帧以及 CSS 动画端点，未启动浏览器。

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
| 01 | `b82c8de4d5b6e70880e26bebaccc83c903ae3ca2531eff0c1296a9f114375a49` | `a5abff44770cc6f7e8c614a9a6ecccf48797e2bea3e3dd668f5ed6d2337a85d4` |
| 02 | `3f973d1d1788f64f9f0035d4041383dbbfb4256fce5c0e21b29e6c642dd32a35` | `f303881f817333a5c938d1bec8b1476fef5199aaf76bc7644abce734b52b6284` |
| 03 | `f5539f1f2d9f791faffa77cd2323dff42389f60c225e2dcbb507505a70ae8e7d` | `cda9e7b3d45b38edbc31d2caada21b3d6632f9477a15ad0b537d9048c7e8e061` |
| 04 | `2e9fd11c00e9e4ad9384dc7abc89c8f31b910f0e9be4c4f12a5c0e5dc7fc3f1c` | `537dfd42cfddfbd5ed2ab36a505ec6bf9817af3e07a831eb8377a5e8f7b9dab3` |
| 05 | `0068ff9c4126a103faea99dc97f54fe5ded25053fb43d1296c06b33a8376ff06` | `335fbcd2f7b0c89e9d5da24bf598dbbc8683e27de79578d2552dfc7fb9be1ee8` |
| 06 | `061ddd6de406b74f0cd570b430273c2585e12c7b1ec5dfd33c7f0717640da1ad` | `ddd248b23e39ea4da9a3570c072fe18299e8866a163f7983c64685ae6b2efa04` |

## 验证

全部六张运行 WebP 已按原始分辨率检查。完整测试 176 项通过，包含分类归属、图片尺寸与哈希、六种视口的封面动画及子路径静态资源访问。TypeScript 检查与生产构建通过；构建仍有已有的大体积代码块提示。未启动 GUI 或无头浏览器。
