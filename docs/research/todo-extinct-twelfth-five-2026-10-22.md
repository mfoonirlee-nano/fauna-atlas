# 第十二批灭绝动物：E056–E060

2026-10-22 核验。按 todo 顺序收录四种翼龙及普通鱼龙。各档案以 `Historical and fossil evidence`、EX 表达化石灭绝依据，不填 IUCN 评估年份和当前活体坐标。代表地层时期不表示精确灭绝时间。

| 编号 | 档案 | 资料与限定 |
| --- | --- | --- |
| E056 | 长头无齿翼龙 *Pteranodon longiceps* | [AMNH](https://www.amnh.org/explore/ology/ology-cards/358-pteranodon-longiceps?view=modal)介绍喙、翼指与海洋环境；[Bennett 的原始地层研究](https://www.kgs.ku.edu/Current/2000/bennett/bennett3.html)记录 Williston 于 1876 年采集的 YPM 1177。区分早期无齿翼龙材料发现与种级命名，不从头冠形状直接确定用途。 |
| E057 | 诺氏风神翼龙 *Quetzalcoatlus northropi* | [得克萨斯大学研究说明](https://news.utexas.edu/2021/12/08/worlds-largest-pterosaur-leaped-aloft-to-fly/)、[形态分类原研究](https://doi.org/10.1080/02724634.2021.1907587)、[Smithsonian 馆藏记录](https://www.si.edu/object/nmnhpaleobiology_3447906)与 [ICZN 命名裁定](https://www.iczn.org/cases/resolved-opinion-issued/case/3728)。本种材料零碎，全身比例、头颈、地面姿态参考 Q. lawsoni 等近缘种；不将其完整骨骼当作巨型种直接证据。食性、起飞及尺寸保留推断。 |
| E058 | 古翼手龙 *Pterodactylus antiquus* | [牛津大学自然史博物馆](https://oumnh.ox.ac.uk/node/4514516)、[Bennett 2013 属级修订](https://doi.org/10.1007/s12542-012-0159-8)及 [NHM 馆藏](https://www.nhm.ac.uk/our-science/services/collections/palaeontology/pterosaurs.html)。按 antiquus 的含义采用古翼手龙，清单原标签“克氏翼手龙”保留为检索别名，不另计一物种。成年低冠的精确软组织轮廓与体色不确定。 |
| E059 | 明氏喙嘴翼龙 *Rhamphorhynchus muensteri* | [Hone 等 2015 原研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4548500/)、[Harvard MCZ](https://mczbase.mcz.harvard.edu/name/Rhamphorhynchus%20muensteri)及 NHM 馆藏。软组织、翼膜与胃内容物支持相关介绍；不将单次取食记录写作完整食谱。 |
| E060 | 普通鱼龙 *Ichthyosaurus communis* | [Lomax 与 Massare 分类重评](https://doi.org/10.1080/14772019.2017.1291116)、[MNHN 分类与馆藏](https://science.mnhn.fr/taxon/species/ichthyosaurus/communis)、[普通鱼龙幼体原研究](https://pure.manchester.ac.uk/ws/portalfiles/portal/127924285/FULL_TEXT.PDF)与 [NHM 鱼龙资料](https://www.nhm.ac.uk/discover/what-is-an-ichthyosaur.html)。早期旧归属包含其他种，采用修订后的种级范围。不同来源命名年份、作者写法有差异，正文不强定单一年份；背鳍和尾鳍软组织还参考其他鱼龙。 |

## 分类与文案

[原始查询](../../src/assets/source/todo-extinct-twelfth-five-taxonomy.json)记录 GBIF 与 PBDB 的查询 URL、时间和响应；[采用表](../../src/assets/source/todo-extinct-twelfth-five-adopted-taxonomy.json)记录最终界、门、科、属。

- GBIF 五种均匹配到目标学名。四种返回 ACCEPTED；喙嘴翼龙却被连到旧组合 Ornithocephalus muensteri。该种采用 NHM、Harvard MCZ 与原研究使用的 Rhamphorhynchus muensteri，不照搬旧属名。
- 科分别采用无齿翼龙科、神龙翼龙科、翼手龙科、喙嘴翼龙科、鱼龙科。GBIF 基线没有设置纲目，按 ADR 0002 省略；PBDB 中的爬行纲和目作为对照，不混入此基线。
- PBDB 没有给无齿翼龙、翼手龙指定科，本批采用 GBIF 的科级归属。PBDB 宽泛年龄字段包含旧记录，不直接当作档案生存范围或精确灭绝日期。
- 正文区分翼龙、恐龙、鱼龙、鱼类与海豚，分别补齐外形、活动、食物、遗存、灭绝依据、发现与命名。五主题来源同步至共读文案审核记录。

## 图片

每种一张封面和五张观察图，使用内置 image_gen；最终运行资产位于 `public/images/species/<slug>/`，提示词、来源限制与验收位于 `src/assets/source/species/<slug>/`。画面均为 AI 科学复原示意，颜色、软组织、环境布景与姿态含推测，不伪称照片、原始化石或真实馆藏。

初稿封面的喙、长尾或吻部进入左侧文字区域，五张均作构图修订。普通鱼龙同时去除背部多余小鳍。新增物种没有旧运行封面，修订记录保留初稿与修订提示词。完整主体边界包含喙、头冠、翼端、尾叶、足部或鳍肢。

## 验收

不启动 GUI 或无头浏览器；静态几何与图片栏模拟不验证浏览器字体、完整页面或实际内容高度。

最终验证：

- `npm test`：1088 项通过，0 项失败，含分类、档案、共读文案、图谱、轮播、图片查看、生产构建及子路径资源检查。
- `test:carousel`：768 项资源与几何检查、8 项交互检查通过；`test:dist-subpath`：5 项通过。
- `npm run typecheck` 通过。动物页首屏脚本 549,793 字节，低于 550,000 字节预算。目录压缩按引用收益安排 slug 词典索引，支持中文括号和三个字母的重复英文词，解码时共用学名；逐字段还原检查通过。
- 最终保留30张 WebP，共6,806,974字节。五张封面实际解码尺寸均为1672×941，逐图尺寸与哈希见各物种验收数据。
- 分别检查源 PNG 和运行 WebP 联系表，原分辨率检查五张源封面和运行封面；检查五种在390、761、1920、3840宽的图片栏模拟。九档视口及桌面内容高度增加160px共16组，覆盖六个动画端点，最小几何间距24 CSS px。静态检查不能验证浏览器字体、完整页面或实际内容高度。
- `git diff --check` 通过。验收后移除本批临时PNG、联系表和图片栏模拟，每种保留六张运行图。

目录现有760份物种档案；本轮todo完成60种、剩余40种，其他古爬行动物剩余7种。
