# todo 跨组十种核验记录（2026-09-23）

每种配一张封面及五张图库图。图片由内置 image_gen 制作，属于科学情景重建，不作为实拍、连续动作、微细鉴定或精确比例证据。

## 完成与验证

新增 10 份档案和 60 张独立 WebP，图像均为 1536×1024，共约 12.14 MiB。源图与运行图逐张检查，尖海龙育儿囊图和斑锚参环境图经重做后验收。各物种图片目录保存最终提示词、主体边界与源图及运行图 SHA-256；临时 PNG 副本已清理。

通过 204 项分类与资料加载测试、402 项轮播测试、22 项物种列表测试、图片转换测试和 3 项构建产物测试。生产构建通过，未启动浏览器。新增档案使入口脚本超过原有体积限制，因此加载器复用图鉴中的物种标识，移除重复的 slug 表；入口脚本降至 348,005 bytes，初始 JS 总计 544,795 bytes，保留原有体积限制和逐物种按需加载。

todo 完成数为 95/100，站内共 395 份档案。

## 蜜袋鼯 · Petaurus breviceps

采用拆分后的 Petaurus breviceps，分布限澳大利亚东部沿海侧，不沿用旧资料的新几内亚与塔斯马尼亚范围。MDD 列 LC；尚未核实该等级与拆分后范围的评估衔接、独立评估日期及趋势。

- [Australian Museum：Sugar Glider](https://australian.museum/learn/animals/mammals/sugar-glider/)
- [MDD：Petaurus breviceps](https://www.mammaldiversity.org/taxon/1000344/)
- [NSW：Gliding possums](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/gliding-possums)

## 印度狐蝠 · Pteropus medius

接受名采用 MDD 的 Pteropus medius。旧生态资料使用 Pteropus giganteus；仅引用其印度狐蝠行为，不沿用旧 LC 等级。MDD 当前列 NT，独立评估日期和全球趋势未核实。

- [MDD：Indian Flying Fox](https://www.mammaldiversity.org/taxon/1004476/)
- [ADW：印度狐蝠旧名资料](https://animaldiversity.org/accounts/Pteropus_giganteus/)
- [印度狐蝠野外食性研究](https://www.threatenedtaxa.org/index.php/JoTT/article/view/2182)

## 驼鹿 · Alces alces

沿用 MDD 的单种 Alces alces 口径，包含曾单列为 Alces americanus 的北美及亚洲东部种群。MDD 列全球 LC；独立评估日期和趋势未核实。

- [MDD：Alces alces](https://www.mammaldiversity.org/taxon/1006285/)
- [ADW：Alces alces](https://animaldiversity.org/accounts/Alces_alces/)

## 翱翔飞鱼 · Exocoetus volitans

Fishes of Australia 支持双翼型形态、全球暖水分布、食性及 LC。资料引用的 2015 为红色名录出版年份，不作为独立评估日期；全球趋势未核实。

- [Fishes of Australia：Exocoetus volitans](https://fishesofaustralia.net.au/home/species/4081)
- [CSIRO：Exocoetus volitans](https://www.cmar.csiro.au/caab/taxon_report.cfm?caab_code=37233013)

## 印头鱼 · Echeneis naucrates

采用佛罗里达博物馆的鲈形目口径，与仓库现有图谱一致。本轮未核实全球 IUCN 等级，沿用仓库 NE 缺省并注明证据缺口，不解释为无危。

- [Florida Museum：Sharksucker](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/sharksucker/)
- [Fishes of Australia：Echeneis naucrates](https://fishesofaustralia.net.au/home/species/3711)

## 尖海龙 · Syngnathus acus

MarLIN 支持骨质环、鳍和英国沿岸生境；伊比利亚半岛研究支持食性及雄性尾腹育儿囊。本轮未核实全球 IUCN 等级，NE 不代表无危。

- [MarLIN：Great pipefish](https://www.marlin.ac.uk/species/detail/1552)
- [Greater pipefish 生态与食性研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9138823/)
- [NCBI：Syngnathus acus](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=161584)

## 人面金蛛 · Nephila pilipes

采用 World Spider Catalog 当前园蛛科 Araneidae，不沿用旧金蛛科 Nephilidae。新加坡地方 LC 不作为全球 IUCN 结论；本轮全球等级未核实，记 NE。

- [World Spider Catalog：Nephila pilipes](https://wsc.nmbe.ch/spec-data/29076)
- [人面金蛛雌雄体型与蛛网研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC12235347/)
- [NUS：人面金蛛野外取食记录](https://lkcnhm.nus.edu.sg/app/uploads/2017/04/sbr2016-013.pdf)

## 甘氏巨螯蟹 · Macrocheira kaempferi

科级采用欧盟物种目录与 ADW 的 Inachidae 口径；部分新文献使用 Macrocheiridae。太平洋水族馆列未评估，不写成无危；不把未经验证的百年寿命当作确定数值。

- [Aquarium of the Pacific：Giant Spider Crab](https://www.aquariumofpacific.org/onlinelearningcenter/species/giant_spider_crab)
- [Monterey Bay Aquarium：Japanese spider crab](https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/japanese-spider-crab)
- [欧盟：Macrocheira kaempferi](https://fish-commercial-names.ec.europa.eu/fish-names/species/macrocheira-kaempferi_en)

## 玫瑰海饼 · Clypeaster rosaceus

Smithsonian 标本与 DORIS 支持分类、生境、隆起背甲、短棘和食性。图库使用褐色活体，不将白色空壳画成活体。本轮未核实全球评估，NE 不代表无危。

- [Smithsonian：Sea Biscuit](https://qrius.si.edu/browse/object/10008966)
- [DORIS：Clypeaster rosaceus](https://doris.ffessm.fr/Especes/Clypeaster-rosaceus-Dollar-des-sables-a-rosace-2505)

## 斑锚参 · Synapta maculata

DORIS 与 Naturalis 支持无足目锚参科、分布、体纹及羽状口触手；中文名见海洋保育署。本轮未核实全球评估，NE 不代表无危；不采用照片比例推算体长。

- [DORIS：Synapta maculata](https://doris.ffessm.fr/Especes/Synapta-maculata-Synapte-maculee-1229)
- [Naturalis：Synapta maculata](https://sea-cucumbers.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=26&id=28104)
- [海洋保育署：斑锚参](https://www.oca.gov.tw/ch/home.jsp?dataserno=202202220051&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386)
