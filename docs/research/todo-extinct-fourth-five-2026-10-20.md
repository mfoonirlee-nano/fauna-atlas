# 第四批灭绝动物：E016–E020

2026-10-20 核验。五种均采用 EX 与 Historical and fossil evidence，不填 IUCN 评估年份，不提供当前活体坐标。命名、历史分布、食物和复原限制见各物种档案的来源与正文。

| 编号 | 物种 | 采用依据 |
| --- | --- | --- |
| E016 | 大象鸟 Aepyornis maximus | [CSIRO 研究团队说明](https://www.csiro.au/en/news/all/articles/2023/march/elephant-birds)、[2023 年原始研究](https://www.nature.com/articles/s41467-023-36405-3) |
| E017 | 北岛巨恐鸟 Dinornis novaezealandiae | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/north-island-giant-moa) |
| E018 | 南岛巨恐鸟 Dinornis robustus | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/south-island-giant-moa) |
| E019 | 小丛林恐鸟 Anomalopteryx didiformis | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/little-bush-moa) |
| E020 | 东部恐鸟 Emeus crassus | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/eastern-moa) |

## 分类采用

[GBIF 查询原始记录](../../src/assets/source/todo-extinct-fourth-five-taxonomy-match.json)保存五次查询。大象鸟沿用 GBIF 的鸵鸟目、象鸟科、象鸟属。本次不把 2023 年对 Vorombe 的暂定合并当成已无争议的分类结论，不另收 Vorombe titan。

四种恐鸟采用 NZ Birds Online 的恐鸟目；巨恐鸟属归恐鸟科，小恐鸟属与东部恐鸟属归 Emeidae（本图册中文标签“鸸鹋恐鸟科”）。GBIF 没有返回恐鸟的目，南岛巨恐鸟查询更只匹配到存疑的属级记录；没有将这一结果当作接受种记录。种名与归属采用上述新西兰鸟类专业资料，并记录差异。

## 时间与证据

大象鸟仅写全新世晚期灭绝，不把蛋壳年龄当作灭绝时间。四种恐鸟写约 15 世纪前后，保留估计限定。骨骼、古 DNA、蛋壳和巢材各有用途；没有把生成外观模型当作真实标本，也没有绘制未经逐骨核对的骨架。

每种图集安排完整外形、侧面比例、头部、外观模型、环境与取食、同种不同视角。最后一项不表达雌雄或共存关系。羽色、眼色、具体植物、光线和动作均含复原选择，不能据图测量。两种巨恐鸟外形接近，图片不承担单独鉴定功能；东部恐鸟保留短粗腿和宽脚，小丛林恐鸟保留小型、短喙的区别。

图片提示词、哈希、实际尺寸、主体边界和逐视口检查保存在 `src/assets/source/species/<slug>/`。

## 完成与验证

五份物种档案已登记，目录共 720 种。每种保留一张封面和五张观察图，共 30 张 WebP；提示词、封面尺寸、完整主体边界、哈希和验收 JSON 已入库。五张源封面及运行封面分别按原分辨率检查，源图与运行图联系表分别检查；运行封面完成九档视口静态图片栏模拟。80 组几何覆盖桌面增高与六种动画端点，最小主体间距为 24 CSS px。北岛巨恐鸟封面经生成工具右移修订，按最终图重新测量。

- `npm run typecheck` 通过；生产构建再次执行 `tsc -b` 并通过。
- `npm test` 中部署、图片转换、分类与档案、分类探索、地图交互、轮播、图片查看器、品牌标记、列表及微生物检查全部通过。初次生产预算检查发现动物页面为 550,232 字节，超限 232 字节。
- 将共享标签与 alt 后缀纳入既有目录短语压缩，保留完整字段及原有预算。随后 `npm run test:dist-subpath` 5/5 通过，包含构建、部署子路径资源、独立档案加载、全部浏览字段与分类阶元还原。最终动物页面脚本为 544,597 字节，上限 550,000 字节。
- `test:carousel` 覆盖新增封面六张图、哈希、解码尺寸、完整主体边距及交互；新增五种纳入右侧构图断言。
- `git diff --check` 通过；临时 PNG、联系表和模拟文件验收后清理，运行图片仅保留六张。

按仓库约定没有启动 GUI 或无头浏览器。静态几何与图片栏模拟不验证浏览器字体、完整页面排版及实际内容驱动高度。TODO 将 E016–E020 勾选并移入完成归档：本轮完成 20，待制作 80。
