# 身边动物：爬行与两栖动物五种

2026-10-17。接续 todo 的 061–064 与 035，制作中华鳖、中华花龟、黄喉拟水龟、北草蜥和黑斑侧褶蛙。每种提供物种档案、一张封面和五张观察图。目录增至 650 份，本轮完成 50/100，待制作 50 项。爬行动物分组完成，两栖动物还余两项。

## 名称、分类与保护资料

| 选题 | 接受学名 | 图册分类 | 全球 IUCN 等级 | 日期口径 |
| --- | --- | --- | --- | --- |
| 中华鳖 | Pelodiscus sinensis | 爬行纲／龟鳖目／鳖科／鳖属 | VU 易危 | 2000 历史评估，2016 勘误不算新评估 |
| 中华花龟 | Mauremys sinensis | 爬行纲／龟鳖目／地龟科／拟水龟属 | CR 极危，下降 | 2018 评估，2021 发表 |
| 黄喉拟水龟 | Mauremys mutica | 爬行纲／龟鳖目／地龟科／拟水龟属 | CR 极危，下降 | CITES 所载 2018 评估，IUCN 2021 发表 |
| 北草蜥 | Takydromus septentrionalis | 爬行纲／有鳞目／蜥蜴科／草蜥属 | LC 无危 | 2019 文献发表；独立评估日期未核实，不填 assessedYear |
| 黑斑侧褶蛙 | Pelophylax nigromaculatus | 两栖纲／无尾目／蛙科／侧褶蛙属 | LC 无危 | 2023-1 发表；独立评估日期未核实，不填 assessedYear |

本批保存 [GBIF 五种原始匹配与采用分类](../../src/assets/source/todo-common-reptile-amphibian-five-taxonomy-match.json)。五个查询均得到 EXACT、ACCEPTED、confidence=99。GBIF 当前匹配响应将龟鳖目、有鳞目列为 class，并缺少 order；图册参考各物种 Reptile Database 记录及 [USFWS 草蜥属分类](https://www.fws.gov/taxonomic-tree/2039731)，沿用爬行纲与对应目。原始响应和修改理由分别保留。蛙类分类与[美国自然历史博物馆条目](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Ranidae/Pelophylax/Pelophylax-nigromaculatus)一致。

另保存 [IUCN 发布于 GBIF 的名录原始查询](../../src/assets/source/todo-common-reptile-amphibian-five-iucn-checklist.json)，逐个接受记录确认 VU、CR、CR、LC、LC；异名记录的空等级不解释为未评估。查询使用 GBIF species/search、IUCN 数据集键及物种名 q 参数。

中华鳖使用现用二名，不把旧的广义物种范围照搬到今天的分布。GBIF 与 Reptile Database 常列 Wiegmann 1835，[龟类分类工作组 2025 清单](https://iucn-tftsg.org/wp-content/uploads/crm.10.checklist.atlas_.v10.2025.pdf)列 1834，档案说明年代差异。Mauremys 两种与上一批草龟分别成种。北草蜥与南草蜥等近缘种、黑斑侧褶蛙内部谱系仍需结合研究鉴别；生成图不提供精确鉴种证据。

## 生态与生活史来源

- 中华鳖：[FAO 物种资料](https://www.fao.org/fishery/culturedspecies/trionyx_sinensis__en/en)说明软甲、水域活动、食物与陆地产卵，资料使用 Trionyx sinensis 旧组合；[黄河湿地原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11739605/)支持底质、越冬环境和野生压力的讨论。保留历史易危评估，未从养殖数量推断野生状况。
- 中华花龟：[IUCN 全球评估](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T15026A547319.en)确认 2018 评估及下降趋势；[台湾野外食性研究](https://zoolstud.sinica.edu.tw/Journals/48.1/95.pdf)支持植物与动物食物、性别和采样期差异；[USFWS 生态综述](https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-Chinese-Striped-necked-Turtle.pdf)用于生活史与采集压力对照。
- 黄喉拟水龟：[IUCN 条目](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T39613A2930788.en)的全球 CR 与 IUCN 发布的 GBIF 记录相符；[CITES 动物委员会资料](https://cites.org/sites/default/files/documents/F-AC32-14-02.pdf)注明下降和 2018 评估。[CITES 原始提案](https://cites.org/sites/default/files/eng/cop/12/prop/E12-P26.pdf)支持杂食、栖息地和贸易压力；[Naturalis 外形与生活史](https://turtles.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=8073)的旧保护等级已由新评估替代。[2019 孵化温度研究](https://www.sciencedirect.com/science/article/pii/S0044848619313365)与[2023 人工种群繁殖研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC10340008/)分别注明实验背景。
- 北草蜥：[IUCN 发布于 GBIF 的条目](https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/102342469)与保存的原始查询确认 LC；[舟山繁殖研究](https://rjh.folium.ru/index.php/rjh/article/view/346)、[温度研究](https://www.sciencedirect.com/science/article/abs/pii/S0306456504001743)、[野生与人工食物研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC7520994/)支持日行、卵生和食物叙述。不把论文发表年份或实验投喂内容当作独立评估日期或完整野外食谱。
- 黑斑侧褶蛙：[IUCN 2023-1 官方变化表](https://nc.iucnredlist.org/redlist/content/attachment_files/2023-1_RL_Table_7.pdf)确认从 NT 改为 LC；旧 2004 近危条目不再作为当前等级。[2024 东亚侧褶蛙分布模型与研究](https://www.mdpi.com/1424-2818/16/5/259)讨论分布与谱系；[农业排水设施原始研究](https://doi.org/10.3390/d14050414)支持通道问题。档案分别展示无足蝌蚪和完成变态的幼蛙，未把等级调整解释成种群回升。

部分 IUCN DOI 正文读取失败，等级以官方变化表、IUCN 发布的 GBIF 数据及所列资料交叉核对；未核实的评估日期留空。地图坐标均为代表点，非实测观察位置或完整分布范围。正文覆盖外形、活动、食物、成长、分类边界、保护共读和发现命名，并接入共读文案来源记录。

## 图片与封面验收

使用内置 image_gen 独立生成 30 个场景。三种龟类封面初始候选侵入左侧留白或尾尖过近边缘，随后统一缩小并右移；北草蜥和蛙保留首轮封面。五个封面的主体中心均超过源宽 60%，左 40% 保留安静环境，吻端、可见趾尖、足和尾端周围有背景。

逐种原始分辨率检查封面输入和运行 WebP；五张观察图分别检查源图与运行联系图。幼体与成体同框的图注说明非实测比例，不推断亲子关系、护幼或同一个体的连续成长；中华鳖最后一图说明展示河岸，未声称已埋入沙泥。

每种的 prompts.json 记录最终提示、输入及运行尺寸和逐张 SHA-256。hero-acceptance.json 记录实际运行封面尺寸、哈希、focalPoint、完整主体边界、九个规定视口与桌面内容增加 160px 的几何。六个动画端点沿用相同几何，无缩放或平移。元数据与 original-covers fixture 绑定同一运行文件。

- [中华鳖图片集](../../src/assets/source/species/chinese-softshell-turtle/README.md)
- [中华花龟图片集](../../src/assets/source/species/chinese-stripe-necked-turtle/README.md)
- [黄喉拟水龟图片集](../../src/assets/source/species/yellow-pond-turtle/README.md)
- [北草蜥图片集](../../src/assets/source/species/northern-grass-lizard/README.md)
- [黑斑侧褶蛙图片集](../../src/assets/source/species/black-spotted-pond-frog/README.md)

WebP 经项目脚本首次转换，不重复压缩已接受的文件。验收后将临时 PNG 移出仓库，每种只保留六个运行 WebP。逐种检查九视口图片栏静态模拟，完整主体在图片栏内留出至少 24 CSS px；文案与控件沿用独立区域。按照项目要求未启动浏览器，静态几何与模拟不验证浏览器字体或完整页面排版。

## 验证

- `npm run typecheck`：通过。
- `npm run test:taxonomy`：234 项通过。
- `npm test`：972 项通过，零失败；包含封面资源与几何 658 项、轮播交互 8 项，以及生产子路径与体积预算 5 项。
- 生产构建：通过，目录与详情延迟加载检查通过。
- 静态资产：30 张 WebP 解码尺寸及 SHA-256 与记录一致，每种六张且逐张哈希不同；五种共 80 组几何均满足 24 CSS px 间距。
- 清单与链接：50 个待办、50 个归档完成项；研究和图片记录的仓库内链接可解析。
- 临时输入：30 张 PNG 已移出仓库，保存最终 WebP 与提示、哈希及验收记录。
- `git diff --check`：通过。
