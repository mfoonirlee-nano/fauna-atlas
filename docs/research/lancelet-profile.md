# 厦门文昌鱼（*Branchiostoma belcheri*）完整档案研究

- 检索与核验日期：2026-08-27
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面、5 张图库图、六段故事和四项展示数字
- 分类口径：WoRMS 与 Catalogue of Life 的当前接受名和纲级位置，目级采用 ITIS 的 Amphioxiformes
- 保护口径：IUCN 未检索到全球评估；中国法律状态采用 2021 年《国家重点保护野生动物名录》
- 证据标准：分类与法律状态采用权威名录；种界、形态、生态、繁殖、发育和基因组采用同行评议原始研究
- 数字原则：厦门形态样本、香港单点密度和单只厦门雄体的参考组装各有自己的样本边界，不把它们改写成全种上限、全球密度或固定基因组大小

## 结论摘要

1. 当前接受名为 ***Branchiostoma belcheri* (Gray, 1847)**。仓库分类链采用动物界、脊索动物门、文昌鱼纲、文昌鱼目、文昌鱼科、鳃口文昌鱼属。Cephalochordata 是头索动物亚门，仓库没有亚门字段，不能拿它替代 `class`；纲字段应填 Leptocardii。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=214516) [Catalogue of Life](https://www.catalogueoflife.org/data/taxon/N6RK) [ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159685)
2. 中文主名采用 **厦门文昌鱼**。2021 年国家名录把旧称“文昌鱼”改列为“厦门文昌鱼”，并标明国家二级、仅限野外种群。“白氏鳃口文昌鱼”“白氏文昌鱼”和“文昌鱼”可作检索别名，后一个词同时是类群俗称，旧记录不能仅凭这个名称归入本种。[国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)
3. 厦门文昌鱼属于头索动物，不属于鱼类或脊椎动物。它没有真正的头颅、脊柱、颌、鳞片、鳃盖、胸鳍或腹鳍；背、腹和尾部只有正中鳍褶。终生保留的背索延伸到身体最前端，配合约 64 个清楚可见的人字形肌节完成支撑和波状运动。[AMPHX ontology](https://doi.org/10.3389/fcell.2021.668025)
4. 口笠边缘的口笠触手先挡住过大颗粒。轮器是口腔前庭内部的纤毛褶，不是第二圈外露触手。水流随后穿过咽部和咽鳃裂；内柱分泌黏液捕获微藻、微生物和碎屑，再由纤毛把食物送往消化道。肝盲囊是中肠伸出的消化盲囊，实验显示其上皮能够吞噬藻细胞，但现有证据不支持把它直接叫作“原始肝脏”。[Kaneto & Wada 2011](https://doi.org/10.1002/jez.b.21411) [He et al. 2018](https://doi.org/10.1098/rspb.2018.0438)
5. 厦门水域同时存在 *B. belcheri* 与 *B. japonicum*。前者的肛前鳍室为 80 至 103 个，后者为 48 至 64 个；吻鳍、尾鳍和鳍连接角也有差异。青岛和日本旧称 *B. belcheri* 的材料多归入 *B. japonicum*，不能用来填本种的体尺、产卵期、密度或分布。[Zhang et al. 2006](https://doi.org/10.2108/zsj.23.573) [Zhong et al. 2009](https://doi.org/10.1080/17451000802430817)
6. IUCN Red List 截至核验日没有本种的全球评估记录。结构化字段应为 **`NE / unknown`**，不填评估年和准则。中国旧红色名录的 EN、局地资源研究和国家二级法律等级都不能改写成 IUCN EN。[IUCN Red List 检索](https://www.iucnredlist.org/search?query=Branchiostoma%20belcheri&searchType=species)
7. 可稳妥确认的现代记录包括厦门、茂名或湛江、香港、台湾北部和台湾浅滩、新加坡，原始描述的模式产地在婆罗洲。日本和青岛记录按现代种界排除；WoRMS 所列马达加斯加、南非等分布记录尚未逐条复核，不进入结构化国家数组。[Xu et al. 2005](https://doi.org/10.1002/jez.b.21036) [Lin et al. 2014](https://doi.org/10.1111/maec.12183) [Singapore record](https://lkcnhm.nus.edu.sg/app/uploads/2017/04/sbr2016-126-128.pdf)
8. 成体和底栖幼体偏好有水流、含氧良好、低有机质的洁净砂底，常把身体埋入砂中，只让前端接触水流。香港一处约 13 米深、细砂占比超过 90% 的站点在 2005 至 2006 年记录密度 `423.8 ± 111.1 只/平方米`；这是单站单年的均值和误差，不能当作全种密度。[Chen et al. 2008](https://doi.org/10.1016/j.jembe.2007.12.028)
9. 摄食研究用脂肪酸与稳定同位素推断微生物、微型浮游生物、微藻、少量小型浮游动物和有机碎屑共同供能。该方法反映同化来源，不是逐项胃含物计数，也不能给出固定食谱比例。[Chen et al. 2008](https://doi.org/10.1017/S0025315408001951)
10. 本种雌雄异体，配子排入海水体外受精。胚胎和幼体先在水层生活，变态后转入砂底。厦门野外繁殖期约为 6 至 9 月；实验室通过温度、光周期、低密度和持续投喂实现全年多次产卵，实验频率不能外推为野外个体的固定年产卵次数。[Li et al. 2013](https://doi.org/10.1371/journal.pone.0075461)
11. 2014 年基因组研究从一只厦门成年雄体得到 426 Mb 与 416 Mb 两套单倍型组装。`426 Mb` 适合作为注明版本和样本的展示数字，不是所有个体不变的单倍体基因组大小；初版 30,392 个蛋白编码基因预测也不能与后续注释版本混用。[Huang et al. 2014](https://doi.org/10.1038/ncomms6896)

## 名称、分类与物种边界

### 接受名和分类链

WoRMS 将 AphiaID 214516 记录为接受名 *Branchiostoma belcheri* (Gray, 1847)，Catalogue of Life 将 N6RK 记录为 accepted，ITIS 将 TSN 159685 记录为 valid。Gray 在 1847 年以 *Amphioxus belcheri* 描述这个物种，模式材料来自婆罗洲；这支持名称历史和模式产地，不足以单独证明今天的完整分布。[Gray 1847](https://doi.org/10.1080/037454809495995)

建议仓库分类链：

| 阶元 | 学名 | 中文名 | 口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | WoRMS、COL、ITIS |
| 门 | Chordata | 脊索动物门 | WoRMS、COL、ITIS |
| 亚门 | Cephalochordata | 头索动物亚门 | 只在正文解释，仓库无此字段 |
| 纲 | Leptocardii | 文昌鱼纲 | WoRMS、COL |
| 目 | Amphioxiformes | 文昌鱼目 | ITIS；WoRMS 和 COL 在此处省略目级 |
| 科 | Branchiostomatidae | 文昌鱼科 | 三个分类库一致 |
| 属 | *Branchiostoma* | 鳃口文昌鱼属 | 三个分类库一致 |
| 种 | *Branchiostoma belcheri* | 厦门文昌鱼 | 当前接受名 |

`Cephalochordata` 不能落入 `class`，`Amphioxi` 也不宜用作拉丁纲名。`Amphioxiformes` 是仓库六阶元结构所需的组合口径，应在研究文件中保留 ITIS 来源。

### 中文名与异名

2021 年国家名录的法定名称是“厦门文昌鱼”，备注“原‘文昌鱼’”。产品字段建议：

- 主名：厦门文昌鱼
- 英文名：Belcher's Lancelet
- 检索别名：文昌鱼、白氏鳃口文昌鱼、白氏文昌鱼、Chinese Lancelet
- 原始组合：*Amphioxus belcheri* Gray, 1847，只在分类说明出现
- WoRMS 异名：*Branchiostoma lanceolatum belcheri*、*Branchiostoma minucauda*，只在来源说明出现

“文昌鱼”既可指本种旧名，也常泛指头索动物。没有标本、地点、形态或分子凭证的无修饰旧记录不能直接并入物种数据。

### 与 *Branchiostoma japonicum* 的边界

厦门的两种文昌鱼曾共用 *B. belcheri* 及其亚种名称。2005 年 12S 研究发现两个厦门型之间遗传距离为 21.13%，其中一个厦门型与日本旧称 *B. belcheri* 的材料只差 0.56%。2006 年研究对两种各测量 100 只，并用分子标记复核各 20 只；2009 年完整线粒体基因组又把青岛和日本样本归入 *B. japonicum*，茂名与厦门真种样本归入 *B. belcheri*。[Xu et al. 2005](https://doi.org/10.1002/jez.b.21036) [Zhang et al. 2006](https://doi.org/10.2108/zsj.23.573) [Zhong et al. 2009](https://doi.org/10.1080/17451000802430817)

| 鉴别特征 | *B. belcheri* | *B. japonicum* | 边界 |
| --- | --- | --- | --- |
| 吻鳍 | 末端略圆、钝 | 椭圆至尖 | 形态组合之一，不能只看一项 |
| 肛前鳍室 | 80 至 103，细长 | 48 至 64，粗短 | 两种各 100 只厦门样本 |
| 尾鳍 | 较窄 | 较宽 | 相对形态，不是毫米阈值 |
| 鳍连接角 | 较钝 | 较尖 | 需与其他特征合用 |
| 诊断 PCR | 296 bp | 222 bp | 2009 年研究的方法内结果 |

WoRMS 已把旧称 *B. belcheri japonicum* 和 *B. belcheri tsingtauense* 接受为 *B. japonicum*。中国保护名录仍另列“青岛文昌鱼 *Branchiostoma tsingdauense*”，这是法律名录与现代分类骨架的命名差异，产品不能自动把两者并回厦门文昌鱼。2006 年研究没有检查婆罗洲模式产地材料，因此也不能声称所有历史范围记录都已完成重鉴定。

## IUCN、种群与法律状态

### 结构化 IUCN 字段

截至 2026-08-27，IUCN Red List 物种检索未返回 *Branchiostoma belcheri* 的全球评估页。仓库枚举必须给值时采用：

| 字段 | 落库值 | 边界 |
| --- | --- | --- |
| code | `NE` | 产品对“没有 IUCN 评估记录”的表示，不是一次正式评估结论 |
| trend | `unknown` | 没有全种趋势评估 |
| assessedYear | 留空 | NE 不填年份 |
| criteria | 留空 | NE 不填准则 |

旧版《中国物种红色名录》、香港或厦门局地资源状态不能替代 IUCN。产品正文应写“尚无 IUCN 全球评估”，不要写“IUCN 将其评为未评估”或“IUCN EN”。

### 中国法律状态

国家林业和草原局、农业农村部 2021 年第 3 号公告列出“厦门文昌鱼 *Branchiostoma belcheri*，二级，仅限野外种群”。这是中国国内法律保护等级，不代表全球受威胁程度，也不覆盖人工种群的同等条款。标签可写“国家二级保护动物”，正文必须保留“仅限野外种群”。

### 数量和趋势

没有可靠的全球成熟个体数量或全种趋势。香港 2005 至 2006 年单点密度、2019 至 2020 年 23 站调查以及厦门保护区不同时期的密度都受地点、季节、采样器和物种鉴定影响。尤其是早期厦门“文昌鱼”调查可能混入 *B. japonicum*。`estimatedMatureIndividuals` 留空，不能把任何站点的个体数、每平方米密度或保护区总量当成全球数量。

## 分布与生境

### 可确认范围

原始描述把模式产地写在婆罗洲。现代形态或分子研究确认中国厦门、茂名或湛江、香港、台湾北部与台湾浅滩的真种记录；新加坡短报记录了两只经鉴定的标本。结构化国家采用中国、马来西亚和新加坡。模式产地只支持马来西亚一侧的历史来源，不把整个婆罗洲或印度至西太平洋全部国家展开为确定分布国。[Gray 1847](https://doi.org/10.1080/037454809495995) [Lin et al. 2014](https://doi.org/10.1111/maec.12183) [Au et al. 2023](https://doi.org/10.1016/j.rsma.2022.102726)

WoRMS 的印度至西太平洋、马达加斯加和南非分布条目未逐条完成现代种界复核。日本与青岛旧记录已有证据归入 *B. japonicum*。地图中心只能作为北部南海的代表焦点，不是分布质心、观测坐标或保护区核心点。

### 砂底生境与深度边界

本种是海洋底栖悬浮滤食者。底栖期把大部分身体埋在洁净砂中，口笠朝向流动海水。适生底质可从细砂延伸到粗砂和碎贝壳，但共同点是低粉砂、低有机质和持续水交换。

- 香港 Pak Lap Wan 站位约 13 米深，沉积物超过 90% 为细砂。[Chen et al. 2008](https://doi.org/10.1016/j.jembe.2007.12.028)
- 香港 2019 至 2020 年 23 站研究发现三种文昌鱼总体偏向浅水、粗颗粒、低有机质底质；1,845 只文昌鱼中本种约占 72.6%。各站密度是多种合计，不能全部归给本种。[Au et al. 2023](https://doi.org/10.1016/j.rsma.2022.102726)
- 新加坡两只标本来自约 32 至 33 米深的粗砂、碎贝壳和低粉砂底质。这只是两个标本的采集环境，不是全种深度上限。[Singapore record](https://lkcnhm.nus.edu.sg/app/uploads/2017/04/sbr2016-126-128.pdf)

这些直接记录覆盖约 13 至 33 米，不能据此声称全种只生活在这个区间。`maxDiveDepthM` 描述动物主动潜水上限，不适合底栖栖息深度；当前 schema 没有海床深度字段，因此 `metrics` 留空。

## 外形、解剖与图像鉴别

### 外部形态

- 身体狭长、柳叶状，两端渐尖，成体常呈半透明乳白、淡粉或浅褐色。
- 肌节沿体侧排列成约 64 个人字形或 V 字形块，透过体壁可见。
- 背索位于背侧神经管腹面，终生保留并延伸到吻端；图中可用一条连续的浅色轴线表现，不能画成分节脊椎。
- 背侧有中空神经管，前端只有小型脑泡，没有真正头颅或鱼类脑盒。
- 只有正中背鳍褶、腹鳍褶和尾鳍褶，没有胸鳍、腹鳍、鳍条或独立鱼尾。
- 口位于前端腹面，外有口笠；口笠边缘是一圈细长口笠触手。
- 成熟个体体侧可见成列块状性腺；不要把它们画成鱼鳞、环节或甲壳。

厦门 100 只经形态鉴定的 *B. belcheri* 样本体长为 39.3 至 57.2 毫米，平均 `47.63 ± 4.73 毫米`；总肌节 63 至 66，平均 `64.48 ± 0.59`；肛前鳍室 80 至 103，平均 `92.44 ± 5.83`。这些都是一个地点和样本的统计，不是全种成年范围或绝对最大值。[Zhang et al. 2006](https://doi.org/10.2108/zsj.23.573)

### 滤食通路

1. 口笠触手形成第一道粗筛，拦截过大或不适合进入口腔前庭的颗粒。
2. 轮器位于口腔前庭内，由纤毛褶构成并帮助水流和颗粒输送；外观图不能画出第二圈“轮状触手”。
3. 水和小颗粒进入宽大的咽部，经咽鳃裂进入围鳃腔。咽鳃裂不是鳃盖下的鱼鳃，图文也不把它简化成专门呼吸器官。
4. 咽腹侧内柱分泌黏液，黏住食物；纤毛把食物带向咽背沟和消化道。
5. 中肠的肝盲囊参与消化。湛江湾本种实验显示，盲囊上皮会直接吞噬藻细胞，进入该区的藻细胞多为约 2 微米或更小；这个粒径来自特定饲料和实验体系，不是野外食物的固定尺寸上限。[He et al. 2018](https://doi.org/10.1098/rspb.2018.0438)

### 不能出现的“鱼类化”特征

任何图片、摘要或故事都不得出现真正头颅、脊椎骨、上下颌、牙齿、鳞片、鳃盖、胸鳍、腹鳍、成对鳍、硬鳍条、鱼类眼球或独立扇形尾鳍。身体也不能画成有环节体环的蚯蚓、带附肢的虾或透明小鳗。文昌鱼的“鳃裂”与名称中的“鱼”都不能据此把分类写成鱼纲。

## 食性、活动与生活史

### 食性

香港研究用脂肪酸和稳定同位素追踪同化食物，结果支持微生物、微型浮游生物、微藻、甲藻、小型浮游动物和有机碎屑共同供能，硅藻和真菌贡献较小。产品采用 `filter-feeder` 与 `detritivore`，不采用 `herbivore`。食物数组应保留来源层级，不填写未经物种级研究确认的具体野外藻种或比例。[Chen et al. 2008](https://doi.org/10.1017/S0025315408001951)

### 活动

底栖期多埋在砂中，让口笠接触近底水流并持续滤食。受扰或换位时，背索和肌节驱动身体产生侧向波，短距离游离砂面后再次钻入。精确游速、钻沙时间和昼夜节律多来自其他文昌鱼种或小样本观察，不进入本种档案。

### 繁殖与发育

雌雄个体分别产生配子，成熟时把卵和精子排入海水体外受精。胚胎及幼体在水层中生活，随后变态并转为砂底底栖生活。香港单点种群的主要产卵期为 6 至 7 月；厦门野外种群概括为 6 至 9 月。月份受纬度、水温和地点影响，不能写成全分布区统一日历。[Chen et al. 2008](https://doi.org/10.1016/j.jembe.2007.12.028) [Li et al. 2013](https://doi.org/10.1371/journal.pone.0075461)

Li et al. 在受控温度、光周期、低饲养密度和持续投喂下实现全年多次产卵。实验中有个体在约一年内产卵八次，但这是人工条件下的样本上限，不能写成野生雌体每年固定产卵八次。论文 2014 年更正了图 1 至图 3 的排序，档案不引用错误图序得出的细节。

## 基因组数字的版本边界

Huang et al. 2014 对一只来自厦门的高杂合成年雄体进行超过 100 倍测序，分离出 426 Mb 和 416 Mb 两套单倍型组装，scaffold N50 为 2.3 Mb。另有 5 只厦门和湛江个体重测序，研究报告 SNP 多态率 4.39%。这些数字属于 2014 年的特定组装和样本设计。

- featured stat 采用 `426 Mb`，注释“一只厦门雄体的 2014 主参考单倍型组装”。
- 不把 426 Mb 与 416 Mb 写成体细胞二倍体总长。
- 不把 4.39% 写成每个个体固定差异率或整个属的多样性。
- 初版预测 30,392 个蛋白编码基因；后续数据库注释采用不同流程，不能删去版本标签后比较。

## 威胁与保护

### 证据支持的风险

厦门 2014 至 2017 年底栖调查发现，本种密度和生物量与粉砂、黏土含量显著负相关，高黏土站位没有发现文昌鱼。该相关性支持“底质细化会压缩适生砂底”，不能单独证明某项工程造成了全种下降。[Chen et al. 2020](https://www.sciengine.com/parse/pdf/0029-814X/DD1ECB14B33447B4ACEA074D70E0F4DB.pdf?attname=EFFECTS+OF+SEDIMENT+FINING+ON+BENTHIC+MACROFAUNAL+COMMUNITY+IN+SUBTIDAL+AMPHIOXUS+HABITATS+IN+XIAMEN.pdf)

可写入档案的风险包括：

- 围填海、航道疏浚、采砂和海底工程直接移除或压实砂底，并改变近底水流和粒径；
- 拖网、锚泊和缆线施工反复扰动埋栖个体及底质；
- 陆源污染、富营养化、低氧和有机质累积使洁净砂底转为不适生底质；
- 历史捕捞、教学或商品采集可在斑块状高密度地点集中移除个体；
- 分布局部且斑块化，单处砂坝或浅滩改变可能切断补充；
- 旧记录混淆 *B. belcheri* 与 *B. japonicum*，会掩盖真实趋势或制造假趋势。

全球趋势仍为 unknown。上述机制和局地研究不能拼成未经 IUCN 评估的全球下降率。

### 可执行保护行动

1. 执行国家二级保护规定，所有展示文字保留“仅限野外种群”。
2. 保护洁净砂底、近底水流和相邻补充区，工程环评不能只计算保护区边界内面积。
3. 在疏浚、采砂、围填海、底拖、锚泊和海底缆线选址中避让已确认栖息斑块，并监测底质粒径变化。
4. 控制陆源营养盐、有机物和悬浮泥沙，避免低氧和细颗粒沉积。
5. 使用统一抓斗面积、筛网规格、季节和重复站位开展长期密度监测，原始记录保留采样努力和误差。
6. 结合吻鳍、肛前鳍室等形态与物种诊断 DNA，分别报告 *B. belcheri* 和 *B. japonicum*。
7. 保存凭证标本、组织样本、坐标精度和鉴定者信息，使历史趋势可以重新审计。
8. 圈养繁育只作为研究和补充手段，不替代砂底生境与水动力保护。

## 六段故事建议

### 1. 名字里有鱼，身体里没有脊柱

厦门文昌鱼是一种头索动物。它没有头颅、颌、脊椎和成对鳍，终生保留的背索从吻端贯穿身体，体侧肌节沿这根弹性轴线逐段收缩，让半透明身体产生侧向波。

### 2. 口笠前的一道筛网

口笠触手先把大颗粒挡在外面，轮器则藏在口腔前庭内推动水流。小颗粒进入咽部后被内柱黏液捕获，纤毛再把食物送进消化道；轮器不能画成第二圈外露触手。

### 3. 半埋在会呼吸的砂里

底栖个体把身体埋进低有机质砂底，只留下前端迎着水流。洁净粒隙和持续水交换同时带来氧和食物；泥化、压实或水流改变会让一片看似普通的沙失去功能。

### 4. 两种文昌鱼曾共用一个名字

厦门水域的两种文昌鱼外形相近，却在肛前鳍室和线粒体序列上清楚分开。青岛与日本旧称 *B. belcheri* 的资料多属于 *B. japonicum*，旧论文中的数字必须先确认物种身份。

### 5. 浮游幼体落向砂底

卵和精子在海水中相遇，胚胎与幼体先随水层生活，变态后才进入砂底。香港的 6 至 7 月和厦门的 6 至 9 月都是局地繁殖窗口；实验室全年产卵说明可塑性，不是野外日历。

### 6. 保护一片会移动的砂

国家二级保护约束的是野外种群，真正的保护对象还包括粒径、水流和低有机质共同维持的砂床。固定站位监测、物种级鉴定和工程避让比一个脱离采样背景的“总数”更能判断变化。

## 四项 featured stats 建议

| key | 标签 | 值 | 单位 | 必须显示的边界 |
| --- | --- | --- | --- | --- |
| `xiamen-sample-max-length` | 厦门样本最大体长 | 57.2 | 毫米 | 100 只经形态鉴定样本中的最大值，不是物种绝对上限 |
| `preanal-fin-chambers` | 肛前鳍室 | 80 至 103 | 个 | 厦门 100 只 *B. belcheri* 的鉴别范围，不是肌节数 |
| `pak-lap-wan-density` | 香港单点密度 | 423.8 ± 111.1 | 只/平方米 | 2005 至 2006 年 Pak Lap Wan 一站，不是全球平均 |
| `reference-haplotype-assembly` | 参考单倍型组装 | 426 | Mb | 2014 年一只厦门雄体的主参考组装，不是固定种级基因组大小 |

## 六帧原创图像与科学边界

### 共通规格

- 每张源图 1536×1024、3:2、sRGB、不透明；运行时输出 WebP。
- 画面采用自然史写实水下摄影，不添加文字、箭头、比例尺、徽标或可读坐标。
- 个体呈狭长柳叶形、乳白到淡粉半透明，身侧有清楚但不机械计数的人字形肌节；一条连续浅色背索延伸到吻端。
- 只画正中鳍褶。严禁鱼类头部、眼球、颌、牙、鳞、鳃盖、胸腹鳍、硬鳍条和独立扇尾。
- 口笠只保留一圈细口笠触手。轮器位于内部，外景不得另画一圈触手。
- 图像是科学约束下的重建，不是标本凭证、真实观测或分布记录。

### 分帧规划

| 文件 | 场景和提示词重点 | 事实边界 | 建议焦点 |
| --- | --- | --- | --- |
| `01-sandy-seabed-cover.webp` | 一只完整个体贴近洁净粗砂和细碎贝壳海床，位于右侧，左侧保留砂底与水体供裁切 | 不显示实际地点、密度或确定体长；只画一只 | `{ x: 0.68, y: 0.61 }` |
| `02-translucent-body-field-marks.webp` | 一只未埋沙的侧面全身，半透明体、人字形肌节、连续背索、钝圆吻端和窄尾部清楚可见 | 不要求生成图精确画出 64 肌节或 80 至 103 鳍室；无解剖标注 | `{ x: 0.53, y: 0.55 }` |
| `03-coarse-sand-habitat.webp` | 宽景以浅海洁净粗砂、细碎贝壳和柔和水流为主，一只小型完整个体靠近海床 | 生境占画面大部；不是香港、新加坡或厦门实景复刻，不构成丰度声明 | `{ x: 0.68, y: 0.76 }` |
| `04-buried-filter-feeding.webp` | 一只个体尾部先入砂，身体大部埋藏，只让前四分之一和口笠迎向近底水流 | 不画地下身体切面、食物颗粒或摄食成功；轮器仍不可外露 | `{ x: 0.72, y: 0.55 }` |
| `05-night-swimming-emergence.webp` | 一只个体在暮色水下刚离砂面，以柔和 S 形侧向波短距离游动 | 只表现一次移动，不据此确定昼夜节律，也不画迁徙、群游或同步排卵 | `{ x: 0.55, y: 0.55 }` |
| `06-noninvasive-sediment-survey.webp` | 一只小型文昌鱼位于前景，远处一名研究者用无文字样方和记录板观察砂底，全程不接触个体 | 只说明非接触栖息地调查；不显示真实人员、站位、数量或采样结果 | `{ x: 0.69, y: 0.78 }` |

### 静态验收

1. 六张图均只有文昌鱼式正中鳍褶，无脊椎鱼类器官。
2. 01 是一只完整个体贴近粗砂海床；04 才是大部埋沙姿态，砂底不泥化、不铺满珊瑚或海草。
3. 02 身体两端渐尖，背索到吻端，肌节是人字形而非蚯蚓体环。
4. 04 露出的前端只有一圈口笠触手，不把轮器、内柱或咽鳃裂暴露在体外。
5. 05 只有一只个体和一次短距离波状姿态，没有鱼群或繁殖场面。
6. 06 只有一只文昌鱼、一名远处观察者和一套无文字样方记录工具，不展示捕捉、徒手触摸或虚构调查结果。

## 推荐来源数组

以下 20 个 URL 均为唯一 HTTPS 地址。来源数组不收录科普转载、无种界说明的旧日本材料或图片站。

```ts
const BELCHERS_LANCELET_SOURCE_DATE = '2026-08-27' as const;
const BELCHERS_LANCELET_CONTENT_DATE = '2026-08-27' as const;

const BELCHERS_LANCELET_SOURCES = [
  {
    title: 'WoRMS — Branchiostoma belcheri (Gray, 1847), AphiaID 214516',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=214516',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Catalogue of Life — Branchiostoma belcheri, taxon N6RK',
    url: 'https://www.catalogueoflife.org/data/taxon/N6RK',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'ITIS — Branchiostoma belcheri, TSN 159685',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159685',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Gray 1847 — Description of a new species of Amphioxus from Borneo',
    url: 'https://doi.org/10.1080/037454809495995',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Branchiostoma belcheri（核验日无物种评估结果）',
    url: 'https://www.iucnredlist.org/search?query=Branchiostoma%20belcheri&searchType=species',
    kind: 'conservation',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Xu et al. 2005 — Morphological and 12S rRNA gene comparison of two Branchiostoma species in Xiamen waters',
    url: 'https://doi.org/10.1002/jez.b.21036',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2006 — Branchiostoma japonicum and B. belcheri are distinct lancelets in Xiamen waters',
    url: 'https://doi.org/10.2108/zsj.23.573',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Zhong et al. 2009 — Complete mitochondrial genomes defining two distinct lancelet species in the West Pacific Ocean',
    url: 'https://doi.org/10.1080/17451000802430817',
    kind: 'taxonomy',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2014 — Sediment, depth, temperature and currents shaping NW Pacific lancelet biogeography',
    url: 'https://doi.org/10.1111/maec.12183',
    kind: 'distribution',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Au et al. 2023 — Spatial distribution, abundance, seasonality and environmental relationship of amphioxus in Hong Kong waters',
    url: 'https://doi.org/10.1016/j.rsma.2022.102726',
    kind: 'distribution',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2008 — Growth, secondary production and gonad development of two co-existing amphioxus species in Hong Kong',
    url: 'https://doi.org/10.1016/j.jembe.2007.12.028',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2008 — The diet of amphioxus in subtropical Hong Kong as indicated by fatty acid and stable isotopic analyses',
    url: 'https://doi.org/10.1017/S0025315408001951',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Low et al. 2016 — Branchiostoma belcheri records from Singapore',
    url: 'https://lkcnhm.nus.edu.sg/app/uploads/2017/04/sbr2016-126-128.pdf',
    kind: 'distribution',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Bertrand et al. 2021 — The Ontology of the Amphioxus Anatomy and Life Cycle',
    url: 'https://doi.org/10.3389/fcell.2021.668025',
    kind: 'general',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Kaneto & Wada 2011 — Regeneration of amphioxus oral cirri and its skeletal rods',
    url: 'https://doi.org/10.1002/jez.b.21411',
    kind: 'general',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'He et al. 2018 — Phagocytic intracellular digestion in amphioxus',
    url: 'https://doi.org/10.1098/rspb.2018.0438',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Li et al. 2013 — Year-Round Reproduction and Induced Spawning of Chinese Amphioxus',
    url: 'https://doi.org/10.1371/journal.pone.0075461',
    kind: 'ecology',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Huang et al. 2014 — Decelerated genome evolution in modern vertebrates revealed by analysis of multiple lancelet genomes',
    url: 'https://doi.org/10.1038/ncomms6896',
    kind: 'general',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2020 — Effects of sediment fining on benthic macrofaunal community in subtidal amphioxus habitats in Xiamen',
    url: 'https://www.sciengine.com/parse/pdf/0029-814X/DD1ECB14B33447B4ACEA074D70E0F4DB.pdf?attname=EFFECTS+OF+SEDIMENT+FINING+ON+BENTHIC+MACROFAUNAL+COMMUNITY+IN+SUBTIDAL+AMPHIOXUS+HABITATS+IN+XIAMEN.pdf',
    kind: 'conservation',
    accessedAt: BELCHERS_LANCELET_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

```ts
{
  id: 'species-branchiostoma-belcheri',
  slug: 'belchers-lancelet',
  names: {
    zh: '厦门文昌鱼',
    en: "Belcher's Lancelet",
    aliases: ['文昌鱼', '白氏鳃口文昌鱼', '白氏文昌鱼', 'Chinese Lancelet'],
  },
  scientificName: 'Branchiostoma belcheri',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Leptocardii', '文昌鱼纲'),
    taxon('Amphioxiformes', '文昌鱼目'),
    taxon('Branchiostomatidae', '文昌鱼科'),
    taxon('Branchiostoma', '鳃口文昌鱼属'),
  ),
  conservation: conservation('NE', 'unknown'),
  distribution: {
    realms: ['marine'],
    continents: ['亚洲'],
    regions: ['南海北部', '台湾海峡', '香港东部水域', '厦门湾', '婆罗洲西北岸', '新加坡海峡'],
    countries: ['中国', '马来西亚', '新加坡'],
    range:
      '现代形态或分子资料确认厦门、茂名或湛江、香港、台湾北部、台湾浅滩和新加坡记录，模式产地位于婆罗洲。日本与青岛旧称 Branchiostoma belcheri 的材料多归入 B. japonicum；印度至西太平洋其他历史记录须逐点重鉴定后再加入确定国家。',
    center: { lat: 21.5, lng: 113.8 },
  },
  habitats: [
    {
      name: '洁净浅海砂底',
      realm: 'marine',
      description:
        '底栖期埋在有持续水交换、含氧良好、低有机质的细砂至粗砂中，只让口笠接触近底水流；粒径和水动力共同决定适生性。',
      isPrimary: true,
    },
    {
      name: '粗砂、碎贝壳陆架内侧海床',
      realm: 'marine',
      description:
        '新加坡约 32 至 33 米记录来自粗砂、碎贝壳和低粉砂底质；这是两个标本的采集环境，不代表全种深度上限。',
    },
    {
      name: '近岸浮游发育水层',
      realm: 'marine',
      description:
        '胚胎和幼体先在水层中生活，变态后进入砂底；水层是生活史阶段生境，不代表成体长期远洋生活。',
    },
  ],
  measurements: {
    length: {
      min: 39.3,
      max: 57.2,
      unit: 'mm',
      note: '厦门 100 只经形态鉴定的 B. belcheri 样本范围，平均 47.63 ± 4.73 毫米；不是全种成年范围或绝对最大体长',
    },
  },
  diet: {
    types: ['filter-feeder', 'detritivore'],
    foods: ['微生物与细菌', '微型浮游生物', '微藻与甲藻', '小型浮游动物', '悬浮有机碎屑'],
    description:
      '口笠触手先筛去大颗粒，轮器和咽部纤毛维持水流，内柱黏液捕获微小悬浮颗粒并送入消化道。脂肪酸与稳定同位素支持微生物、微型浮游生物、微藻、小型浮游动物和碎屑共同供能，但不提供固定食谱比例。',
  },
  activity: ['沙中埋栖', '露出口笠滤食', '短距离波状游泳', '体外受精', '浮游幼体', '变态后底栖'],
  tags: ['头索动物', '海洋底栖滤食者', '国家二级保护动物', 'IUCN 未评估', '演化发育模式动物', '沙质海床'],
  summary:
    '一种半透明的海洋头索动物，靠贯穿身体的背索和人字形肌节运动，常半埋在洁净砂底滤食；中国将野外种群列为国家二级保护动物。',
  description:
    '厦门文昌鱼属于头索动物，不是鱼类或脊椎动物。它没有真正头颅、脊柱、颌、鳞片、鳃盖和成对鳍，终生保留的背索延伸到吻端，约 64 个人字形肌节透过半透明体壁可见。口笠触手挡住大颗粒，内部轮器协助水流，咽鳃裂形成滤水通路，内柱黏液捕获微藻、微生物和碎屑，肝盲囊参与胞外与胞内消化。成体多埋在低有机质砂底，只露前端滤食；配子在海水中体外受精，浮游幼体变态后转为底栖。厦门文昌鱼与青岛、日本旧资料中的 B. japonicum 必须分开鉴定。IUCN 尚无全球评估，中国自 2021 年将其野外种群列为国家二级保护动物。',
  storySections: [
    {
      key: 'notochord-not-vertebrae',
      label: '分类与身体',
      title: '名字里有鱼，身体里没有脊柱',
      body:
        '厦门文昌鱼是一种头索动物。它没有头颅、颌、脊椎和成对鳍，终生保留的背索从吻端贯穿身体，体侧肌节沿这根弹性轴线逐段收缩，让半透明身体产生侧向波。',
    },
    {
      key: 'oral-hood-filter',
      label: '滤食结构',
      title: '口笠前的一道筛网',
      body:
        '口笠触手先把大颗粒挡在外面，轮器则藏在口腔前庭内推动水流。小颗粒进入咽部后被内柱黏液捕获，纤毛再把食物送进消化道；轮器不能画成第二圈外露触手。',
    },
    {
      key: 'buried-filter-feeder',
      label: '砂底生境',
      title: '半埋在会呼吸的砂里',
      body:
        '底栖个体把身体埋进低有机质砂底，只留下前端迎着水流。洁净粒隙和持续水交换同时带来氧和食物；泥化、压实或水流改变会让一片看似普通的沙失去功能。',
    },
    {
      key: 'two-lancelet-names',
      label: '物种边界',
      title: '两种文昌鱼曾共用一个名字',
      body:
        '厦门水域的两种文昌鱼外形相近，却在肛前鳍室和线粒体序列上清楚分开。青岛与日本旧称 B. belcheri 的资料多属于 B. japonicum，旧论文中的数字必须先确认物种身份。',
    },
    {
      key: 'planktonic-to-benthic',
      label: '繁殖与发育',
      title: '浮游幼体落向砂底',
      body:
        '卵和精子在海水中相遇，胚胎与幼体先随水层生活，变态后才进入砂底。香港的 6 至 7 月和厦门的 6 至 9 月都是局地繁殖窗口；实验室全年产卵说明可塑性，不是野外日历。',
    },
    {
      key: 'protect-moving-sand',
      label: '保护与监测',
      title: '保护一片会移动的砂',
      body:
        '国家二级保护约束的是野外种群，真正的保护对象还包括粒径、水流和低有机质共同维持的砂床。固定站位监测、物种级鉴定和工程避让比一个脱离采样背景的总数更能判断变化。',
    },
  ],
  keyFacts: [
    '厦门文昌鱼是头索动物，不是鱼类；它没有真正头颅、脊柱、颌、鳞片、鳃盖或成对鳍。',
    '终生保留的背索延伸到吻端，厦门 100 只样本有 63 至 66 个肌节。',
    '口笠触手是外部粗筛，轮器是口腔前庭内部纤毛褶，内柱黏液负责捕获微小食物。',
    '肝盲囊参与消化并能由上皮吞噬藻细胞，不宜直接称为原始肝脏。',
    '真种厦门样本的肛前鳍室为 80 至 103 个；青岛和日本旧名记录多属于 B. japonicum。',
    '胚胎和幼体先在水层生活，变态后转入砂底埋栖。',
    'IUCN 尚无全球评估；中国把本种野外种群列为国家二级保护动物。',
  ],
  threats: [
    '围填海、航道疏浚、采砂和海底工程移除、压实砂底或改变近底水流',
    '拖网、锚泊和缆线施工反复扰动埋栖个体及底质',
    '悬浮泥沙沉降与底质细化压缩洁净砂底',
    '陆源污染、富营养化、低氧和有机质累积降低栖息质量',
    '历史捕捞、教学或商品采集在局部高密度斑块集中移除个体',
    '斑块化分布使局部砂坝和浅滩改变影响补充',
    '与 B. japonicum 的旧记录混淆削弱趋势判断和保护评估',
  ],
  conservationActions: [
    '执行国家二级保护规定，并在执法和展示中保留仅限野外种群的法律边界',
    '保护洁净砂底、近底水流和相邻幼体补充区的连续组合',
    '在疏浚、采砂、围填海、底拖、锚泊和缆线选址中避让已确认栖息斑块',
    '控制陆源营养盐、有机物和悬浮泥沙，监测底质粒径与低氧',
    '以统一抓斗面积、筛网、季节和重复站位开展长期密度监测',
    '结合形态和物种诊断 DNA，分别报告 B. belcheri 与 B. japonicum',
    '保存凭证标本、组织、坐标精度、采样努力和鉴定者信息',
    '把圈养繁育用于研究和补充，不以此替代野外砂底保护',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'xiamen-sample-max-length',
      label: '厦门样本最大体长',
      value: '57.2',
      unit: '毫米',
      note: '100 只经形态鉴定样本中的最大值，不是物种绝对上限',
    },
    {
      key: 'preanal-fin-chambers',
      label: '肛前鳍室',
      value: '80 至 103',
      unit: '个',
      note: '厦门 100 只 B. belcheri 的鉴别范围，不是肌节数',
    },
    {
      key: 'pak-lap-wan-density',
      label: '香港单点密度',
      value: '423.8 ± 111.1',
      unit: '只/平方米',
      note: '2005 至 2006 年 Pak Lap Wan 一站，不是全球平均',
    },
    {
      key: 'reference-haplotype-assembly',
      label: '参考单倍型组装',
      value: '426',
      unit: 'Mb',
      note: '2014 年一只厦门雄体的主参考组装，不是固定种级基因组大小',
    },
  ],
  media: {
    image: './images/species/belchers-lancelet/01-sandy-seabed-cover.webp',
    alt: '一只完整的半透明厦门文昌鱼贴近洁净浅海粗砂和细碎贝壳海床',
    focalPoint: { x: 0.68, y: 0.61 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/belchers-lancelet/02-translucent-body-field-marks.webp',
        alt: '一只厦门文昌鱼的侧面全身，半透明体、人字形肌节和延伸到吻端的背索可见',
        title: '没有脊柱的脊索动物',
        caption: '正中鳍褶、连续背索与人字形肌节构成外部鉴别线索；画面不保证精确显示全部肌节或鳍室数量。',
        focalPoint: { x: 0.53, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/belchers-lancelet/03-coarse-sand-habitat.webp',
        alt: '浅海洁净粗砂和细碎贝壳形成开阔海床，一只小型厦门文昌鱼贴近底部',
        title: '洁净粗砂海床',
        caption: '低有机质砂底和持续水交换共同维持滤食生境；这是概括性重建，不是已确认站位或丰度记录。',
        focalPoint: { x: 0.68, y: 0.76 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/belchers-lancelet/04-buried-filter-feeding.webp',
        alt: '一只厦门文昌鱼尾部先埋入粗砂，只露出带口笠触手的身体前端迎向水流',
        title: '埋在砂中的悬浮滤食者',
        caption: '多数身体藏在砂下，前端接触近底水流；画面没有显示地下切面、食物颗粒或摄食结果。',
        focalPoint: { x: 0.72, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/belchers-lancelet/05-night-swimming-emergence.webp',
        alt: '暮色水下一只厦门文昌鱼在粗砂底上方以柔和 S 形波动短距离游动',
        title: '背索与肌节驱动的短距离游泳',
        caption: '画面只表现一次离砂后的波状移动，不确定昼夜节律，也不代表迁徙、集群或繁殖行为。',
        focalPoint: { x: 0.55, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/belchers-lancelet/06-noninvasive-sediment-survey.webp',
        alt: '一只小型厦门文昌鱼位于砂底前景，远处一名研究者用样方观察底质且不接触个体',
        title: '不接触动物的砂底调查',
        caption: '远距离样方记录可描述栖息地；画面不代表真实人员、站位、数量结果或完整监测规程。',
        focalPoint: { x: 0.69, y: 0.78 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: BELCHERS_LANCELET_SOURCES,
  featured: true,
  publishedAt: BELCHERS_LANCELET_CONTENT_DATE,
  updatedAt: BELCHERS_LANCELET_CONTENT_DATE,
}
```

`center` 只是北部南海的代表地图焦点，不是采集点、保护区中心或分布质心。`measurements.length` 刻意保留厦门样本说明，`metrics` 刻意为空；实现时不要为了排序把 57.2 毫米复制成成年上限，也不要把海床深度误填进 `maxDiveDepthM`。

## 字段与证据矩阵

| 字段或叙事 | 建议值 | 主要证据 | 不得越界 |
| --- | --- | --- | --- |
| 接受名 | *Branchiostoma belcheri* (Gray, 1847) | [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=214516) [COL](https://www.catalogueoflife.org/data/taxon/N6RK) | 不恢复旧亚种组合 |
| 分类链 | Animalia / Chordata / Leptocardii / Amphioxiformes / Branchiostomatidae / Branchiostoma | [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=214516) [ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159685) | Cephalochordata 是亚门，不填 class |
| 中文名 | 厦门文昌鱼 | [国家名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) | 文昌鱼仅作旧名和检索别名 |
| IUCN | `NE / unknown`，年份和准则留空 | [IUCN search](https://www.iucnredlist.org/search?query=Branchiostoma%20belcheri&searchType=species) | 国内 EN 或国家二级不等于 IUCN EN |
| 中国法律 | 国家二级，仅限野外种群 | [国家名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) | 不扩成所有人工种群 |
| 物种边界 | 青岛、日本旧材料多为 *B. japonicum* | [Zhong et al. 2009](https://doi.org/10.1080/17451000802430817) | 不跨种复用生态数字 |
| 厦门体长 | 39.3 至 57.2 mm | [Zhang et al. 2006](https://doi.org/10.2108/zsj.23.573) | 100 只样本，不是全种成年范围 |
| 肌节 | 63 至 66 | [Zhang et al. 2006](https://doi.org/10.2108/zsj.23.573) | 同一厦门样本 |
| 肛前鳍室 | 80 至 103 | [Zhang et al. 2006](https://doi.org/10.2108/zsj.23.573) | 鉴别范围，不是肌节数 |
| 香港密度 | 423.8 ± 111.1 只/㎡ | [Chen et al. 2008](https://doi.org/10.1016/j.jembe.2007.12.028) | 一站一年，不是全球平均 |
| 食性 | 悬浮滤食，含碎屑 | [Chen et al. 2008](https://doi.org/10.1017/S0025315408001951) | 同位素来源不是固定比例 |
| 繁殖 | 体外受精；浮游幼体；变态后底栖 | [AMPHX](https://doi.org/10.3389/fcell.2021.668025) [Li et al. 2013](https://doi.org/10.1371/journal.pone.0075461) | 实验全年产卵不外推野外 |
| 参考组装 | 426 Mb | [Huang et al. 2014](https://doi.org/10.1038/ncomms6896) | 一只厦门雄体、2014 主单倍型 |
| 全球数量与趋势 | 留空、unknown | 现有来源范围 | 不把站点个体数外推全球 |

## 实施、测试与 TODO

### 数据和素材落库

1. 把 `BELCHERS_LANCELET_SOURCES` 与完整对象加入 `src/data/species.ts`，保持 20 个唯一 HTTPS 来源。
2. 六张 WebP 路径必须与素材实际文件名一致；源 PNG、运行时 WebP、物种 README 和总索引同时更新。
3. 图片尺寸、色彩空间和透明度采用仓库现行物种素材规范，不从本研究文件推断实际文件已通过。
4. 研究文件本身不能视为 TODO 完成；数据、图片、测试和构建全部通过后再删除待办项。

### 分类与证据边界测试

- 断言 `findSpecies('belchers-lancelet')` 返回唯一对象，`id`、学名和中文主名准确。
- 断言分类链严格为 `Animalia / Chordata / Leptocardii / Amphioxiformes / Branchiostomatidae / Branchiostoma`，中文阶元名一致。
- 断言档案没有把本种放入 Actinopterygii、Sarcopterygii 或任何“鱼纲”，正文明确出现“不属于鱼类”“没有真正头颅、脊柱、颌、鳃盖和成对鳍”。
- 断言 `conservation` 为 `NE / unknown`，`assessedYear` 与 `criteria` 均为 `undefined`；正文不得出现“IUCN EN”。
- 断言国家二级说明同时出现“仅限野外种群”，不能只保留等级。
- 断言 `countries` 只有中国、马来西亚、新加坡；日本和青岛只在 *B. japonicum* 排除说明中出现。
- 断言测量注释包含“厦门 100 只样本”和“不是绝对最大”，且 `metrics` 不含 `adultLengthCm` 或 `maxDiveDepthM`。
- 断言四项 featured stat key 唯一，57.2 毫米、80 至 103、423.8 ± 111.1 和 426 Mb 各自保留样本、地点、年份或版本边界。
- 断言故事和 key facts 区分口笠触手、内部轮器、咽鳃裂、内柱与肝盲囊，并拒绝“原始肝脏”定论。
- 断言全文包含 *B. japonicum*、肛前鳍室 48 至 64 和青岛或日本旧名边界，避免跨种引用。
- 断言来源数为 20、URL 全为 HTTPS 且唯一、`accessedAt` 全部为 `2026-08-27`。
- 断言封面加 5 张 gallery 共 6 个唯一 WebP 路径；文件存在、可解码、尺寸为 1536×1024、sRGB、无 alpha。
- 断言 `featured` 为 true，`publishedAt` 与 `updatedAt` 均为 `2026-08-27`。

若本轮只新增厦门文昌鱼且没有同步物种变更，`species.length` 从 **57 增至 58**，Chordata 后代物种数从 **52 增至 53**；新增 Leptocardii、Amphioxiformes、Branchiostomatidae 和 *Branchiostoma* 节点各为 **1**。共享工作区如有其他物种同时落库，应从实际数据重算，不能机械覆盖。

### 命令与静态验证

- 用 `file` 和 `identify` 检查六张源 PNG 与六张运行时 WebP 的格式、1536×1024、sRGB、无 alpha 和可解码性。
- 运行 `npm run typecheck`。
- 运行 `npm test`。
- 运行 `npm run build`，确认六张 WebP 进入构建产物。
- 运行 `git diff --check`，再检查目标文件清单，避免覆盖共享工作区的无关修改。

### TODO 收尾顺序

只有同时满足以下条件，才能从 `docs/todo.md` 删除“文昌鱼 *Branchiostoma belcheri*”：

1. 完整对象和 20 个来源已落库，分类、IUCN NE、国家二级与物种拆分通过复核；
2. 六张源 PNG、六张 WebP、物种 README 和源图索引齐全；
3. 六帧静态验收通过，没有鱼类器官、第二圈外露轮器或错误物种形态；
4. 分类、证据边界和素材测试通过；
5. typecheck、完整测试、生产构建和 `git diff --check` 全部通过；
6. TODO 摘要由 57 个档案、剩余 21 种改为 **58 个档案、剩余 20 种**，分类覆盖新增“文昌鱼纲 1”，并确认下一项海七鳃鳗未被误删。

## 暂不落库与未来复核

1. 不填 IUCN 评估年、准则、成熟个体数量或下降率。NE 表示产品未找到 IUCN 评估，不是一次评估结果。
2. 不把中国旧红色名录 EN、国家二级或香港局地名录换算为 IUCN EN。
3. 不把日本、青岛旧称 *B. belcheri* 的生态和繁殖数字用于本种；这些材料多属于 *B. japonicum*。
4. 不把 57.2 毫米写成物种绝对最大体长，也不把 39.3 至 57.2 毫米写成全球成年范围。
5. 不把香港一站的 423.8 ± 111.1 只/平方米写成全种平均密度或全球数量。
6. 不把香港多种文昌鱼合计密度全部归给 *B. belcheri*。
7. 不把 13 至 33 米的直接采集记录写成全种深度范围或主动潜水能力。
8. 不填 `metrics.maxDiveDepthM`，当前字段语义不适合底栖生境深度。
9. 不把轮器画成第二圈触手，不把咽鳃裂画成鳃盖下的鱼鳃。
10. 不把肝盲囊定名为“原始肝脏”；直接实验显示其主要功能组合与脊椎动物肝脏不同。
11. 不把实验饲料中的具体藻种写成固定野外食谱，也不把约 2 微米写成野外颗粒上限。
12. 不把实验室一年最多八次产卵写成野生个体固定频率。
13. 不把 426 Mb、416 Mb、4.39% 或 30,392 个基因预测脱离 2014 组装版本和样本设计使用。
14. 不把区域底质变化或保护区调查外推为全球下降趋势。
15. 不使用未逐条重鉴定的马达加斯加、南非或宽泛印度至西太平洋国家清单扩充 `countries`。
