# 褐喉树懒（*Bradypus variegatus*）完整档案研究

- 检索与核验日期：2026-08-23
- 展示中文名：**褐喉树懒**；英文名：**Brown-throated Three-toed Sloth**；英文别名：**Brown-throated Sloth**、**Brown-throated Three-fingered Sloth**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图确定科学场景、形态锚点和证据边界
- 证据标准：接受名与分类采用 ASM Mammal Diversity Database；全球等级、趋势、范围和威胁采用 IUCN 2022 原始评估；形态、行为、食性、繁殖与毛被生态采用 IUCN SSC 专家组资料和同行评审研究；国际贸易管制采用 CITES 官方附录
- 关键边界：没有覆盖全分布区的种群总量，也没有可靠的本种野外寿命范围；`estimatedMatureIndividuals` 和 `lifespanYears` 均应省略

## 结论摘要

### 接受名和项目分类链

ASM Mammal Diversity Database 接受 ***Bradypus variegatus* H. R. Schinz, 1825**，首选英文名为 **Brown-throated Three-toed Sloth**。MDD 将它放在异关节总目 `Xenarthra`、披毛目 `Pilosa`、叶食亚目 `Folivora`、树懒科 `Bradypodidae` 和树懒属 `Bradypus`。[ASM Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1000432/)

项目当前只保存界、门、纲、目、科、属六个阶元，因此完整录入链为：

```text
Animalia 动物界
└── Chordata 脊索动物门
    └── Mammalia 哺乳纲
        └── Pilosa 披毛目
            └── Bradypodidae 树懒科
                └── Bradypus 树懒属
                    └── Bradypus variegatus 褐喉树懒
```

推荐字段：

```ts
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Mammalia', '哺乳纲'),
  taxon('Pilosa', '披毛目'),
  taxon('Bradypodidae', '树懒科'),
  taxon('Bradypus', '树懒属'),
)
```

这条记录会在项目中新增披毛目、树懒科和树懒属。异关节总目与叶食亚目没有对应字段，不应挤进 `order` 或 `family`。IUCN 2022 指出传统亚种安排仍需修订；物种档案不在名称后追加未经当前数据库单独接受的亚种名。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

### IUCN 字段：LC、decreasing、2022

IUCN 在 **2022-04-22** 完成评估，并于 2022 年发布。全球等级为 **Least Concern（LC，无危）**，当前种群趋势为 **Decreasing（下降）**。宽广分布、亚马孙森林中的大片范围、推定的大种群和多个保护地支撑 LC 结论；森林损失、火灾、非法贸易和游客抓抱等压力尚未被判断为足以造成显著全球下降，却已能推动局地或区域种群衰退。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

```ts
conservation: conservation('LC', 'decreasing', 2022)
```

LC 记录没有可录入的受威胁标准字符串，不能从说明文字自造 `criteria`。CITES 附录 II 是国际贸易管制口径，也不能改写成 IUCN 受威胁等级。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

IUCN 给出约 **13,640,010 km²** 的分布范围面积、**6 年**世代长度，并判断占域面积与生境面积、范围或质量仍在下降。各地密度估计差异大，分布区其余大片区域缺少人口学资料；这些局地密度不能相加或外推为全球数量。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

### 现存范围采用 IUCN，保留 MDD 差异

IUCN 2022 确认十个原生、现存居民国家：**玻利维亚、巴西、哥伦比亚、哥斯达黎加、厄瓜多尔、洪都拉斯、尼加拉瓜、巴拿马、秘鲁和委内瑞拉**。范围从洪都拉斯延伸至中美洲南部，再进入哥伦比亚、委内瑞拉西部和南部、厄瓜多尔、秘鲁东部、玻利维亚与巴西。阿根廷胡胡伊省最后记录采于 1916 年，IUCN 标为原生、可能已灭绝。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

MDD 的概略国家分布还列出巴拉圭和阿根廷，并把范围概括为延伸至巴拉圭和阿根廷北部。该页同时说明国家图只是概览，不能代表一国境内的精确分布。本档案的 `countries` 用 IUCN 的现存居民清单；阿根廷历史记录留在 `range`，巴拉圭暂不填入现存国家数组。[MDD](https://www.mammaldiversity.org/taxon/1000432/) [IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

海拔范围从海平面至至少 **2,500 米**。IUCN 记录的主要生境是热带、亚热带湿润低地森林；红树林、沼泽林、湿润山地森林和种植园也被列为适宜生境，但不是全球主要生境。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

### 形态、尺寸、体重与寿命

IUCN SSC 食蚁兽、树懒与犰狳专家组给出的参考值为：头体长 **52—54 厘米**，退化短尾约 **5 厘米**，体重约 **3.7—6 千克**；前肢长 **37—45 厘米**，后肢长 **32—37 厘米**。外层毛长而粗，通常呈灰色，可因毛上藻类出现绿色调；浅褐面部横过深色眼纹，形成面罩。成年雄性的背部中央还有一块奶油色至橙色的短毛斑，中央纵贯深色条纹。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)

前肢长于后肢，四足外观上都以三枚长而弯曲的爪抓住枝干。后肢解剖研究记录了发达的髋、膝和趾屈肌，以及适合持续抓握和悬垂支撑的足部结构。图像需要画出每只可见足上的三枚爪，不能套用二趾树懒 `Choloepus` 的两枚前爪。[Butcher et al. 2022](https://doi.org/10.1111/joa.13626) [Hayssen 2010](https://doi.org/10.1644/850.1)

52—54 厘米和 3.7—6 千克适合作为专家组参考字段，不能描述成全分布区极值或统计均值。不同研究地点与样本会给出更宽或不同的体尺，因此注释必须保留“参考值”。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)

本种野外寿命仍未建立。Cliffe 等研究明确写明 *Bradypus* 树懒寿命未知；该研究当时提到的 23 岁最高记录也不足以构造野外最小值和最大值。其他树懒种或圈养个体的高龄记录不能移植到本种 `lifespanYears`。[Cliffe et al. 2015](https://doi.org/10.7717/peerj.875)

推荐结构化字段：

```ts
measurements: {
  length: {
    min: 52,
    max: 54,
    unit: 'cm',
    note: '头体长，IUCN SSC 专家组参考值；不含约 5 cm 的退化短尾',
  },
  weight: {
    min: 3.7,
    max: 6,
    unit: 'kg',
    note: 'IUCN SSC 专家组参考值，不是全分布区极值',
  },
},
metrics: {
  adultLengthCm: [52, 54],
  adultMassKg: [3.7, 6],
  elevationM: [0, 2500],
  // lifespanYears 省略：本种野外寿命未知。
  // estimatedMatureIndividuals 省略：没有全球成熟个体估计。
},
```

## 分布与生境

### 原生森林仍是核心，适应干扰不等于免疫

本种出现在季节性中湿热带林、半落叶大西洋森林、云雾林和低地热带森林。它也会利用哥斯达黎加荫蔽可可园、再生林以及巴西大西洋森林中的公园、保护区和城市树木碎片。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en) [IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)

哥斯达黎加一个 4 km² 农林复合景观的多年研究发现，关键树种 *Cecropia obtusifolia* 的密度与成体存活和繁殖输出正相关；模型显示低密度关键树仍可能支持正增长。论文的图表和矩阵后来更正，作者说明更正后的展示与原有结果和结论一致。该结果支持在退化与再生景观中恢复关键树，却不能把 *Cecropia* 写成整个分布区唯一食物或“种几棵树即可恢复种群”。[Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206) [2019 correction](https://doi.org/10.1098/rspb.2019.1006)

同一地区的幼体扩散研究发现，褐喉树懒偏好热带森林，并常沿河岸林带扩散；它们避开牧场，也避开荫蔽可可园作为扩散通道。荫蔽农林地可以提供部分资源，连续或带状森林仍承担关键移动功能。[Garcés-Restrepo, Pauli & Peery 2018](https://doi.org/10.1111/1365-2664.13138)

### 建议生境字段

1. **热带、亚热带湿润低地森林**：全球主要生境，提供连续树冠、叶食资源、休息枝和移动通道。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
2. **季节性中湿林、半落叶林与云雾林**：覆盖大西洋森林和山地记录，海拔可达至少 2,500 米。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
3. **红树林与沼泽森林**：IUCN 列为适宜但非主要生境，不能让红树林代表全物种。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
4. **再生林、荫蔽可可园与树木碎片**：部分种群可使用，局地存活依赖关键树与森林连接性。[Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206) [Garcés-Restrepo, Pauli & Peery 2018](https://doi.org/10.1111/1365-2664.13138)

## 食性、消化与活动

### 树冠叶食者，会选择叶片和树种

IUCN SSC 专家组将褐喉树懒描述为严格的树冠叶食者，可取食超过 50 种植物并偏好嫩叶。委内瑞拉北部一个受扰山地林研究中，观察食物的 **99.4%** 为叶片，三科植物占 77% 取食记录。后组数字来自单一地点，不能成为全分布区固定食谱。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/) [Urbani & Bosque 2007](https://doi.org/10.1016/j.mambio.2006.10.013)

胃部形态研究确认本种具有多室胃，适合长时间保留并处理高纤维叶食。结构化食物可写“嫩叶、选择性取食的成熟叶、当地关键树叶”，无需加入水果、肉食或昆虫。[Mesquita et al. 2021](https://doi.org/10.1002/jemt.23568)

*Cecropia* 在玻利维亚和哥斯达黎加研究点都很重要，哥斯达黎加长期数据还将 *C. obtusifolia* 密度直接联系到成体存活与繁殖输出。该结论有明确地点边界，不支持“褐喉树懒只吃伞树叶”。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en) [Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206)

### 昼夜兼行，个体节律差异大

2023 年研究给八只自由活动成体褐喉树懒佩戴微型记录器，累计获得 2,356 小时数据。样本整体有很长的不活动时间，活动常以短促片段出现；个体之间和同一个体不同日期之间差异显著，有的偏日行，有的偏夜行，也有昼夜兼行。寒冷夜晚的夜间活动增加。档案应写“昼夜均可活动，节律随个体和环境变化”，不贴固定日行或夜行标签。[Cliffe et al. 2023](https://doi.org/10.7717/peerj.15430)

2008 年野外脑电研究测得研究个体平均每天睡眠 **9.63 小时**，比先前圈养报告少六小时以上。样本很小，地点在巴拿马热带雨林；这个结果能说明圈养数值不宜直接外推，不能变成所有褐喉树懒每天固定睡 9.63 小时的物种常数。[Rattenborg et al. 2008](https://doi.org/10.1098/rsbl.2008.0203)

委内瑞拉单一山地研究记录 72.9% 观察时间用于休息，14.2% 取食、7.3% 移动和 5.6% 梳理。研究地点、行为定义和方法都不同于记录器研究，档案无需选一个百分比当全球日程表。[Urbani & Bosque 2007](https://doi.org/10.1016/j.mambio.2006.10.013)

专家组概括其约每周下树排便一次。静态画面最多能表现个体位于树干基部，无法证明一周频率、死亡风险比例或下树动机；本轮六图不使用排便场景。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)

## 繁殖与育幼

褐喉树懒通常每胎一仔，妊娠约六个月。IUCN SSC 专家组称幼仔至少 100 天完全依赖母兽并贴在腹部；IUCN 2022 采用“每胎一仔、间隔至少 19 个月”，其中产仔间隔依据专家个人通信。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/) [IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

Taube 等 2001 年综合法属圭亚那救援记录、圈养繁殖资料和既有文献，给出约六个月妊娠、10—12 个月产仔间隔和约六个月独立。它与 IUCN 较新的“至少 19 个月”间隔不一致。字段和故事可以稳定使用“妊娠约六个月、通常单仔、幼仔贴随母兽”，暂不写固定产仔间隔或独立日龄。[Taube et al. 2001](https://doi.org/10.1111/j.1365-2907.2001.00085.x)

长期遗传和空间数据表明，雌雄个体的繁殖策略存在差异，本种不适合被画成稳定的一夫一妻“核心家庭”。母幼场景使用一只母兽和一只腹部幼仔，不加入陪伴公兽。[Garcés-Restrepo et al. 2017](https://doi.org/10.1093/jmammal/gyx094)

## 毛被上的移动生态系统

Suutari 等分析 71 份六种树懒的毛样和 426 条部分 18S rRNA 序列，确认毛被中存在多样真核微生物群落，并发现绿藻 *Trichophilus welckeri* 频繁且丰富。17 份样本来自褐喉树懒。研究支持藻类在毛上生长并参与绿色调形成，却没有直接检验伪装效果。[Suutari et al. 2010](https://doi.org/10.1186/1471-2148-10-86)

Pauli 等在哥斯达黎加比较二趾与三趾树懒，发现蛾数量、毛被无机氮和藻类生物量之间存在关联，也在前胃中检出藻类。作者据此提出蛾、藻与每周下树排便相连的营养互利模型。相关与胃中检出仍不能测出藻类对能量收支的实际贡献。[Pauli et al. 2014](https://doi.org/10.1098/rspb.2013.3006)

2021 年综述重新审查证据后指出，毛上藻类是否给宿主提供伪装、营养或其他收益仍缺少直接实验证据；并非每只野生树懒都肉眼呈绿色，湿度还会改变藻类显色。档案可以写“毛被承载藻类与多种附生生物，常出现绿色调”，不能写“树懒种藻当粮食”“藻类已证实使它隐身”或“毛上长着苔藓”。[Kaup et al. 2021](https://doi.org/10.1111/brv.12773)

## 主要威胁

1. **森林砍伐、退化与破碎化**：IUCN 将其视为主要威胁，哥伦比亚和巴西大西洋森林部分种群已经下降。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
2. **农业与牧场扩张**：工业和小农农业、牧场会转化或降低森林质量，并移除关键食物树和树冠连接。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
3. **森林火灾**：玻利维亚 2019—2021 年农业扩张伴随大范围火灾，已有树懒烧死或窒息报告；物种级影响尚未量化。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
4. **道路死亡**：新增铺装道路和破碎树冠迫使个体下地，IUCN 记录玻利维亚部分热带地区出现较高道路死亡。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
5. **猎捕、食用、药用与宠物贸易**：巴西和哥伦比亚有食物、药物与宠物用途，玻利维亚非法宠物交易被认为增加。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
6. **幼体贩卖与“自拍”旅游**：哥伦比亚、玻利维亚和洪都拉斯出现野外捕捉幼体售予游客；中南美洲多地还让游客抓抱野生个体拍照。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
7. **局地隔离与低遗传多样性**：大西洋森林种群与亚马孙种群长期隔离，IUCN 汇总研究发现大西洋森林种群遗传多样性最低。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

LC 不代表这些压力可以忽略。IUCN 的全球结论和局地下降可以同时成立；产品不应把“全球无危”写成“没有威胁”。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

## 推荐保护行动

1. 维持和管理现有保护地内外的连续树冠、湿润森林和关键食物树，优先阻止大西洋森林、哥伦比亚和火灾热点的进一步退化。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
2. 在农林复合景观恢复本地关键树、河岸林带和再生林连接；把 *Cecropia* 研究结果用于研究地点相似的恢复设计，同时保留多树种资源。[Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206) [Garcés-Restrepo, Pauli & Peery 2018](https://doi.org/10.1111/1365-2664.13138)
3. 在已识别的微破碎树冠缺口设置并维护合适的树冠桥，以相机或直接观察记录使用；长期目标仍是恢复自然树冠。哥斯达黎加 Sloth Conservation Foundation 已记录三趾树懒使用绳桥，但单次使用不能证明种群增长或全部地点有效。[SCF Connected Gardens](https://www.slothconservation.org/connected-gardens) [SCF field observation](https://www.slothconservation.org/blog/sloth-starts-using-a-wildlife-bridge-in-record-time)
4. 在道路热点实施限速、警示、植被连接与合适的跨越设施，记录路杀、救援和设施使用，按监测结果调整。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
5. 执行 CITES 附录 II 和范围国野生动物法律，追查幼体捕捉与宠物供应链，制止抓抱、投喂和“自拍”招徕。[CITES 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
6. 把防火、早期预警与火后野生动物响应纳入农业前沿和破碎森林管理；不要把未量化的火灾死亡外推为全球比例。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
7. 开展标准化种群趋势监测，并补足分类、分布边界、生活史与生态资料。IUCN 2022 记录当时没有系统性全范围监测或恢复计划，并明确列出上述研究需求。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

## 推荐的故事章节

1. **三枚爪怎样锁住树冠**：前肢较长，趾屈肌和弯爪承担悬垂支撑；画面只描述姿势和结构，不计算抓力。[Butcher et al. 2022](https://doi.org/10.1111/joa.13626)
2. **吃叶，也要挑树**：嫩叶和多种树叶构成食谱，哥斯达黎加一个种群的存活与繁殖和 *Cecropia obtusifolia* 密度相关。[Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206)
3. **没有一张固定时刻表**：八只野生成体表现出日行、夜行和昼夜兼行差异，活动由短促片段组成。[Cliffe et al. 2023](https://doi.org/10.7717/peerj.15430)
4. **一身毛也是一处生境**：绿藻和其他微生物组成毛被生态系统，藻类对宿主的伪装和营养收益仍待验证。[Suutari et al. 2010](https://doi.org/10.1186/1471-2148-10-86) [Kaup et al. 2021](https://doi.org/10.1111/brv.12773)
5. **幼仔贴着母兽认识树冠**：通常单仔，妊娠约六个月，幼仔至少百日依附母兽；固定产仔间隔仍有资料冲突。[Taube et al. 2001](https://doi.org/10.1111/j.1365-2907.2001.00085.x) [IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)
6. **无危物种也需要连通森林**：全球 LC 与下降趋势并存，保护重点落在森林质量、关键树、河岸廊道、道路和非法交易。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

## 推荐的关键事实

1. 当前接受名为 *Bradypus variegatus* Schinz, 1825，属于披毛目、树懒科和树懒属。[MDD](https://www.mammaldiversity.org/taxon/1000432/)
2. IUCN 2022 全球等级为 LC，趋势为下降；LC 不否定局地衰退。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
3. IUCN 确认十个现存居民国家，阿根廷胡胡伊最后记录为 1916 年并被标作可能已灭绝。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
4. 头体长参考 52—54 厘米、体重 3.7—6 千克，前肢长于后肢，尾巴仅约 5 厘米。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)
5. 四足外观上各有三枚长弯爪；二趾树懒只有前足两枚长爪，不应混画。[Butcher et al. 2022](https://doi.org/10.1111/joa.13626)
6. 它是树冠叶食者，可取食超过 50 种植物并偏好嫩叶；一个地点的植物比例不能变成全球固定菜单。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/) [Urbani & Bosque 2007](https://doi.org/10.1016/j.mambio.2006.10.013)
7. 八只野生成体的记录器研究显示活动节律有显著个体差异，日行、夜行和昼夜兼行都出现。[Cliffe et al. 2023](https://doi.org/10.7717/peerj.15430)
8. 通常每胎一仔、妊娠约六个月；产仔间隔资料不一致，不录入固定值。[Taube et al. 2001](https://doi.org/10.1111/j.1365-2907.2001.00085.x) [IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)
9. 毛被中确有绿藻与多样附生生物；伪装收益和营养贡献尚未获得直接、定量验证。[Suutari et al. 2010](https://doi.org/10.1186/1471-2148-10-86) [Kaup et al. 2021](https://doi.org/10.1111/brv.12773)
10. 本种野外寿命和全球成熟个体数未知，对应结构化字段应留空。[Cliffe et al. 2015](https://doi.org/10.7717/peerj.875) [IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

## 应删除或避免的说法

- 不把 `Xenarthra` 填进 `order`；项目的目级字段是 `Pilosa`。
- 不把 `Folivora` 当作科；它是 MDD 所列叶食亚目，项目没有亚目字段。
- 不把 MDD 的概略巴拉圭、阿根廷清单直接写进 IUCN 现存居民国家数组。
- 不写 IUCN 评估年为 2014，也不把 2022 发布年误写成数据导入年。
- 不给 LC 自造受威胁标准，不把 CITES 附录 II 写成 IUCN 等级。
- 不用局地密度、保护地记录或公园密度推算全球数量。
- 不写 20、30 或 40 年固定寿命；可靠来源明确保留寿命未知。
- 不把 9.63 小时野外脑电结果写成每只个体每天固定睡眠时长。
- 不把它写成严格日行或严格夜行；长期记录器研究显示显著个体差异。
- 不写只吃 *Cecropia*；关键树研究来自哥斯达黎加一个农林景观。
- 不把毛上绿色物质画成扎根苔藓、草丛或藤蔓，也不宣称藻类伪装和营养收益已经证实。
- 不在所有个体背部画橙色斑；该背斑属于成年雄性，雌性和幼体不具备。
- 不画二趾树懒的两枚前爪、长吻、长尾、灵长类手掌或靠尾巴悬挂。
- 不画双胞胎或父母幼仔三口之家作为典型繁殖单元。
- 不展示游客抓抱、自拍、投喂或把野生树懒当宠物的正面场景。

## 1 张封面与 5 张 gallery 的科学图像方案

六张图都是自然史编辑示意，不代表真实个体、研究事件或可定位地点。源图目标为 1536×1024、3:2、8-bit sRGB、无 alpha 的 PNG；运行时图为同尺寸 WebP。画面不含文字、Logo、水印、项圈、笼具、游客互动或可读坐标，统一信用为 `Fauna Atlas · AI 生成原创图像`。

### 共同形态与风格锚点

> Photorealistic natural-history documentary photography of a brown-throated three-toed sloth, *Bradypus variegatus*. Anatomically accurate compact 52–54 cm head-and-body reference proportions; small rounded head, very short blunt muzzle, brown throat and light brown face crossed by a dark eye stripe that forms a mask; long coarse gray-brown guard hairs over dense underfur with only a subtle irregular green algal tint; forelimbs visibly longer than hindlimbs; tiny vestigial tail; exactly three long strongly curved pale claws on every visible forefoot and hindfoot. Female or sex-neutral individual with no cream-orange dorsal speculum unless an adult male is explicitly requested. Suspensory anatomy and gravity must remain plausible, with the claws actually wrapping around branches. Neotropical forest, restrained natural greens, humid physically plausible light, realistic scale and documentary optics rather than fantasy.

共同锚点依据专家组形态值、Mammalian Species 物种综述和后肢肌肉研究建立。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/) [Hayssen 2010](https://doi.org/10.1644/850.1) [Butcher et al. 2022](https://doi.org/10.1111/joa.13626)

**共同排除项**：二趾树懒式两枚前爪；任一可见足出现四、五或更多外露长爪；长吻、长尾、抓握尾或用尾悬挂；考拉、猴、熊或食蚁兽脸；猫科肉垫与可伸缩爪；橙色雄性背斑出现在雌兽或幼体；亮绿色整齐染色；毛上长苔藓草坪、叶片或藤蔓；额外肢体、融合肢体、断爪、枝干穿体；直立人姿；圈养设施；人类触摸、自拍、投喂；文字、Logo、水印、可定位标志。

### 01 · 树冠悬垂封面

- 源图：`src/assets/source/species/brown-throated-sloth/01-canopy-portrait-source.png`
- 运行时：`public/images/species/brown-throated-sloth/01-canopy-portrait.webp`
- 提示词：

> Use the common morphology anchor. Wide 3:2 environmental portrait in a humid lowland Neotropical rainforest after rain. One complete adult female brown-throated three-toed sloth hangs naturally beneath a sturdy diagonal branch in a relaxed quadrupedal suspensory posture; all four limbs are anatomically separate, every visible foot wraps the branch with exactly three curved claws, and the tiny tail does not grip anything. The masked face turns gently toward camera. Place the animal in the center-right with darker uncluttered forest negative space on the left for interface copy. Soft overcast canopy light, wet leaves, realistic coarse gray-brown fur with only faint patchy algal green, no dorsal speculum.

- alt：`雨后低地热带雨林中，一只完整的雌性褐喉树懒悬垂在粗枝下，深色眼纹、褐色喉部和长前肢清晰可见`
- 建议焦点：`{ x: 0.58, y: 0.50 }`
- 证据边界：画面表现有解剖依据的悬垂姿态和低地湿润森林。它不说明活动速度、睡眠状态、全球主要树种或藻类的功能。[Butcher et al. 2022](https://doi.org/10.1111/joa.13626) [IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

### 02 · 三爪与悬垂肢体

- 源图：`src/assets/source/species/brown-throated-sloth/02-three-clawed-anatomy-source.png`
- 运行时：`public/images/species/brown-throated-sloth/02-three-clawed-anatomy.webp`
- 提示词：

> Use the common morphology anchor. Close side-three-quarter natural-history view of one adult female brown-throated three-toed sloth moving slowly along the upper side of a thick wet rainforest branch. Keep the full head, torso, four separate limbs and tiny tail in frame. Arrange the feet so all four sets of exactly three long recurved claws are readable and physically purchase the branch; forelimbs are longer than hindlimbs. The brown throat, facial mask, coarse grooved-looking guard hairs and subtle irregular green tint are clear. Soft bright forest shade, shallow background blur without clipping anatomy, no orange dorsal speculum.

- alt：`一只雌性褐喉树懒沿湿润粗枝移动，前肢长于后肢，最近前足的三枚长弯爪清晰可辨，其他抓握点部分被枝干遮挡`
- title：`三枚长爪锁住枝干`
- caption：`前肢长于后肢，发达屈肌与弯爪支撑长期悬垂；单张照片不能测出抓力或能量消耗。`
- 建议焦点：`{ x: 0.53, y: 0.52 }`
- 证据边界：外观上每足三爪和悬垂适应有形态、肌肉研究支持；图像不展示解剖切面，也不能用姿势鉴定年龄。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/) [Butcher et al. 2022](https://doi.org/10.1111/joa.13626)

### 03 · 湿润低地森林生境

- 源图：`src/assets/source/species/brown-throated-sloth/03-lowland-forest-habitat-source.png`
- 运行时：`public/images/species/brown-throated-sloth/03-lowland-forest-habitat.webp`
- 提示词：

> Use the common morphology anchor. Wide 3:2 habitat-led view inside a mature humid Neotropical lowland forest, with layered canopy, lianas, epiphytes, wet trunks and a continuous network of branches. One brown-throated three-toed sloth is small but anatomically legible in the upper-right quadrant, holding a living tree with four limbs and no tail grip. Leave most of the frame to forest structure and canopy connectivity. Diffuse rain light, realistic vegetation diversity, no recognizable landmark, road, plantation rows, people, buildings or other animals.

- alt：`层次密集的湿润低地热带森林占据画面，一只小型褐喉树懒位于右上方连续树冠中的树干旁`
- title：`连续树冠是移动的基础`
- caption：`湿润低地森林是全球主要生境；本种也会利用山地林、再生林和部分荫蔽农林地。`
- 建议焦点：`{ x: 0.70, y: 0.42 }`
- 证据边界：画面代表主要生境，不是实际地点或完整分布区，也不能据一只个体判断密度、占域或种群趋势。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)

### 04 · 选择性取食嫩叶

- 源图：`src/assets/source/species/brown-throated-sloth/04-selective-leaf-feeding-source.png`
- 运行时：`public/images/species/brown-throated-sloth/04-selective-leaf-feeding.webp`
- 提示词：

> Use the common morphology anchor. Medium-wide documentary scene high in a Neotropical forest canopy. One complete adult female brown-throated three-toed sloth remains securely supported by three limbs across two sturdy branches while the fourth forelimb gently draws a leafy twig toward its mouth. Show a small bite from one fresh young leaf, closed jaws, plausible branch loading and exactly three claws on every visible foot. The plant is a generic native broadleaf tree rather than a diagnostic claim of a single food species. Natural humid daylight, full body and tiny tail visible, no fruit, insects, flowers, feeding pile or human provisioned food.

- alt：`一只完整的褐喉树懒稳固抓住树枝，并将一根仍连着植物的嫩叶枝条拉近嘴边取食`
- title：`取食树叶，也会选择资源`
- caption：`褐喉树懒偏好嫩叶并利用多种植物；哥斯达黎加关键树研究不能简化成全物种只吃一种树。`
- 建议焦点：`{ x: 0.47, y: 0.54 }`
- 证据边界：画面只表现树冠叶食和选择嫩叶，不鉴定具体植物，也不展示一天食量、咀嚼速度或消化时间。[IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/) [Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206)

### 05 · 母兽与单只腹部幼仔

- 源图：`src/assets/source/species/brown-throated-sloth/05-mother-and-infant-source.png`
- 运行时：`public/images/species/brown-throated-sloth/05-mother-and-infant.webp`
- 提示词：

> Use the common morphology anchor. Quiet medium-wide rainforest canopy portrait of exactly one adult female brown-throated three-toed sloth and exactly one small dependent infant. The mother is securely suspended between two sturdy branches with four coherent limbs and no orange dorsal speculum. The infant has juvenile proportions and clings ventrally to the mother's chest and belly with its own small three-clawed limbs; it does not float, ride on the branch alone or appear fused to her fur. Gentle humid daylight, calm natural contact, full mother and infant visible. No adult male, twins, nursing teat, human handling, nest or anthropomorphic embrace.

- alt：`一只雌性褐喉树懒悬在雨林枝间，一只小幼仔紧贴母兽胸腹部`
- title：`一次通常一只幼仔`
- caption：`妊娠约六个月，幼仔至少百日依附母兽；不同资料给出的产仔间隔并不一致。`
- 建议焦点：`{ x: 0.51, y: 0.52 }`
- 证据边界：单仔和腹部依附有资料支持；画面不表示确切幼仔日龄、分娩季节、产仔间隔或稳定双亲家庭。[Taube et al. 2001](https://doi.org/10.1111/j.1365-2907.2001.00085.x) [IUCN SSC Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)

### 06 · 林下远距离树冠监测

- 源图：`src/assets/source/species/brown-throated-sloth/06-canopy-survey-monitoring-source.png`
- 运行时：`public/images/species/brown-throated-sloth/06-canopy-survey-monitoring.webp`
- 提示词：

> Use the common morphology anchor. Wide conservation-documentary view from the floor of a fragmented but tree-covered Atlantic Forest landscape in Brazil. Exactly two field ecologists stand in the lower-left at a clear distance, one using binoculars and one recording on a plain clipboard, both looking toward exactly one brown-throated three-toed sloth high in a tree in the upper-right. The sloth is small but recognizable by its round masked face, long forelimbs and three claws, with no capture or collar. Emphasize vertical distance and connected native crowns within a humid secondary forest edge. Neutral unbranded clothing, no readable notes, GPS screen, coordinates, flags, bait, drone, ladder, weapons, handling or tourist group.

- alt：`两名研究人员在湿润森林左下方用一副双筒望远镜和记录板观察右上方树冠中的一只褐喉树懒，人与动物保持明显距离`
- title：`一次目击只是监测的一条记录`
- caption：`评估分布和趋势需要标准化重复调查；看见一只树懒不能换算成种群数量。`
- 建议焦点：`{ x: 0.56, y: 0.46 }`
- 证据边界：画面代表非侵入观察，不复刻具体研究样地或方法；不展示敏感坐标，也不声称一次观察证明趋势或保护成效。[IUCN 2022](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en) [Cliffe et al. 2023](https://doi.org/10.7717/peerj.15430)

## 核心来源与字段责任

- [ASM Mammal Diversity Database: *Bradypus variegatus*](https://www.mammaldiversity.org/taxon/1000432/)：接受名、命名人、英文主名、目科属和概略国家分布。
- [Moraes-Barros et al. 2022, IUCN Red List](https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en)：全球等级、趋势、评估日期、现存国家、阿根廷历史状态、海拔、生境、威胁、保护现状与研究需求。
- [IUCN SSC Anteater, Sloth and Armadillo Specialist Group](https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/)：体尺、体重、外形、食性、繁殖和物种概览。
- [CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)：附录 II 当前口径。
- [Hayssen 2010, Mammalian Species](https://doi.org/10.1644/850.1)：物种级形态与自然史综述。
- [Butcher et al. 2022](https://doi.org/10.1111/joa.13626)：后肢肌肉与悬垂适应。
- [Urbani & Bosque 2007](https://doi.org/10.1016/j.mambio.2006.10.013)：委内瑞拉单点食性和活动预算。
- [Cliffe et al. 2023](https://doi.org/10.7717/peerj.15430)：八只野生褐喉树懒的连续活动记录与昼夜节律差异。
- [Rattenborg et al. 2008](https://doi.org/10.1098/rsbl.2008.0203)：野外脑电睡眠测量。
- [Garcés-Restrepo et al. 2019](https://doi.org/10.1098/rspb.2018.2206) 与 [更正](https://doi.org/10.1098/rspb.2019.1006)：关键树密度、成体存活、繁殖输出和再生景观结论。
- [Garcés-Restrepo, Pauli & Peery 2018](https://doi.org/10.1111/1365-2664.13138)：幼体扩散与河岸森林廊道。
- [Taube et al. 2001](https://doi.org/10.1111/j.1365-2907.2001.00085.x)：妊娠、单仔、独立和旧产仔间隔资料。
- [Garcés-Restrepo et al. 2017](https://doi.org/10.1093/jmammal/gyx094)：长期遗传与空间数据揭示的交配系统。
- [Suutari et al. 2010](https://doi.org/10.1186/1471-2148-10-86)：毛被绿藻和真核微生物群落的分子证据。
- [Pauli et al. 2014](https://doi.org/10.1098/rspb.2013.3006)：蛾、氮、藻类与下树排便的关联和营养互利假说。
- [Kaup et al. 2021](https://doi.org/10.1111/brv.12773)：毛被“移动生态系统”综述及伪装、营养证据边界。
- [Cliffe et al. 2015](https://doi.org/10.7717/peerj.875)：本种寿命未知和温度、食量研究边界。
- [SCF Connected Gardens](https://www.slothconservation.org/connected-gardens)：树冠连接、本地树种恢复和树冠桥的实践框架。

## 可直接用于 `species.ts` 的来源与完整字段草案

以下对象覆盖 `Species` 必填字段，并与六张现有源图文件名对齐。最终 WebP 已完成静态复核，产品数据中的 `focalPoint` 与 alt 按压缩实图校正。

~~~ts
const BROWN_THROATED_SLOTH_SOURCE_DATE = '2026-08-23' as const;
const BROWN_THROATED_SLOTH_CONTENT_DATE = '2026-08-23' as const;

const BROWN_THROATED_SLOTH_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5: Bradypus variegatus',
    url: 'https://www.mammaldiversity.org/taxon/1000432/',
    kind: 'taxonomy',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Bradypus variegatus (2022 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2022-2.RLTS.T3038A210442893.en',
    kind: 'conservation',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Anteater, Sloth and Armadillo Specialist Group: Brown-throated three-toed sloth',
    url: 'https://xenarthrans.org/species/sloths/brown-throated-three-toed-sloth/',
    kind: 'general',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Hayssen 2010: Bradypus variegatus (Pilosa: Bradypodidae)',
    url: 'https://doi.org/10.1644/850.1',
    kind: 'general',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Butcher et al. 2022: Myology of the pelvic limb of Bradypus variegatus',
    url: 'https://doi.org/10.1111/joa.13626',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Urbani and Bosque 2007: Feeding ecology and postural behaviour in northern Venezuela',
    url: 'https://doi.org/10.1016/j.mambio.2006.10.013',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Mesquita et al. 2021: Sloths as a polygastric mammal',
    url: 'https://doi.org/10.1002/jemt.23568',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Cliffe et al. 2023: Behaviour and activity budgets of two sympatric sloths',
    url: 'https://doi.org/10.7717/peerj.15430',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Rattenborg et al. 2008: EEG measures of sleep in wild brown-throated sloths',
    url: 'https://doi.org/10.1098/rsbl.2008.0203',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo et al. 2019: Cecropia trees and the fitness of three-toed sloths',
    url: 'https://doi.org/10.1098/rspb.2018.2206',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo et al. 2019: Correction to the Cecropia demography study',
    url: 'https://doi.org/10.1098/rspb.2019.1006',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo, Pauli and Peery 2018: Natal dispersal in a human-dominated landscape',
    url: 'https://doi.org/10.1111/1365-2664.13138',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Taube et al. 2001: Reproductive biology and postnatal development in sloths',
    url: 'https://doi.org/10.1111/j.1365-2907.2001.00085.x',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Garcés-Restrepo et al. 2017: Individual reproductive strategies and tree-sloth mating systems',
    url: 'https://doi.org/10.1093/jmammal/gyx094',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Suutari et al. 2010: Green algal communities growing in sloth hair',
    url: 'https://doi.org/10.1186/1471-2148-10-86',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Pauli et al. 2014: A syndrome of mutualism reinforces the lifestyle of a sloth',
    url: 'https://doi.org/10.1098/rspb.2013.3006',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Kaup et al. 2021: Sloths and their epibionts as model mobile ecosystems',
    url: 'https://doi.org/10.1111/brv.12773',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Cliffe et al. 2015: Ambient temperature modulates food intake in Bradypus variegatus',
    url: 'https://doi.org/10.7717/peerj.875',
    kind: 'ecology',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
  {
    title: 'Sloth Conservation Foundation: Connected Gardens',
    url: 'https://www.slothconservation.org/connected-gardens',
    kind: 'conservation',
    accessedAt: BROWN_THROATED_SLOTH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const brownThroatedSloth = {
  id: 'species-bradypus-variegatus',
  slug: 'brown-throated-sloth',
  names: {
    zh: '褐喉树懒',
    en: 'Brown-throated Three-toed Sloth',
    aliases: ['Brown-throated Sloth', 'Brown-throated Three-fingered Sloth'],
  },
  scientificName: 'Bradypus variegatus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Pilosa', '披毛目'),
    taxon('Bradypodidae', '树懒科'),
    taxon('Bradypus', '树懒属'),
  ),
  conservation: conservation('LC', 'decreasing', 2022),
  distribution: {
    realms: ['terrestrial'],
    continents: ['北美洲', '南美洲'],
    regions: ['中美洲南部', '亚马孙盆地', '安第斯山麓与邻近森林', '巴西大西洋森林'],
    countries: [
      '玻利维亚',
      '巴西',
      '哥伦比亚',
      '哥斯达黎加',
      '厄瓜多尔',
      '洪都拉斯',
      '尼加拉瓜',
      '巴拿马',
      '秘鲁',
      '委内瑞拉',
    ],
    range:
      '现存原生居民范围从洪都拉斯延伸至中美洲南部，再进入哥伦比亚、委内瑞拉西部和南部、厄瓜多尔、秘鲁东部、玻利维亚与巴西，海拔从海平面至至少 2,500 米。阿根廷胡胡伊省最后记录采于 1916 年，IUCN 标为原生、可能已灭绝；MDD 的概略清单另列巴拉圭和阿根廷，暂不并入现存国家数组。',
    center: { lat: -5, lng: -65 },
  },
  habitats: [
    {
      name: '热带、亚热带湿润低地森林',
      realm: 'terrestrial',
      description:
        '全球主要生境；连续树冠提供叶食资源、休息枝和移动通道。',
      isPrimary: true,
    },
    {
      name: '季节性中湿林、半落叶林与云雾林',
      realm: 'terrestrial',
      description:
        '覆盖内陆大西洋森林和山地记录，本种分布可达至少海拔 2,500 米。',
    },
    {
      name: '红树林与沼泽森林',
      realm: 'terrestrial',
      description:
        'IUCN 列为适宜但非全球主要生境，不能用红树林代表整个物种。',
    },
    {
      name: '再生林、荫蔽可可园与树木碎片',
      realm: 'terrestrial',
      description:
        '部分种群可利用受扰和再生景观；局地存续仍依赖关键食物树、河岸林带和树冠连接。',
    },
  ],
  measurements: {
    length: {
      min: 52,
      max: 54,
      unit: 'cm',
      note: '头体长，IUCN SSC 专家组参考值；不含约 5 cm 的退化短尾',
    },
    weight: {
      min: 3.7,
      max: 6,
      unit: 'kg',
      note: 'IUCN SSC 专家组参考值，不是全分布区极值',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['嫩叶', '选择性取食的成熟叶', '当地关键树种的叶片'],
    description:
      '树冠叶食者，可利用超过 50 种植物并偏好嫩叶；不同个体常集中使用少数资源树，哥斯达黎加一个长期研究种群的存活和繁殖输出与 Cecropia obtusifolia 密度正相关。',
  },
  activity: [
    '昼夜均可活动；个体之间和同一个体不同日期之间的活动节律差异显著',
    '活动常以短促片段穿插在长时间休息或睡眠之间，不能套用固定日行或夜行时刻表',
    '主要依靠长肢、屈肌和三枚弯爪在树冠悬垂、攀爬和取食',
    '通常独居；稳定而紧密的组合以母兽和依附幼仔为主',
    '约每周下树排便一次；频率为专家组概括，不宜从单次画面推断',
  ],
  tags: [
    '新热带界',
    '中美洲',
    '南美洲',
    '披毛目',
    '树冠叶食者',
    '悬垂运动',
    '昼夜兼行',
    'IUCN 无危',
    '种群下降',
  ],
  summary:
    '生活在中南美洲森林树冠的三爪悬垂叶食者。它能利用部分再生林和荫蔽农林地，局地存续仍依赖连续树冠与关键食物树；全球为无危，趋势却在下降。',
  description:
    '褐喉树懒以褐色喉部、深色眼纹、长前肢和四足各三枚弯爪区别于二趾树懒。它在树冠选择嫩叶和多种树叶，昼夜都可能出现短促活动，个体节律差异很大。粗毛可承载绿藻与多样附生生物，绿色调有直接证据，伪装和营养收益仍待检验。母兽通常每次育有一只贴在腹部的幼仔。IUCN 2022 将本种评为无危、趋势下降；森林破碎、火灾、道路死亡、猎捕、宠物贸易和抓抱自拍已造成局地压力。',
  storySections: [
    {
      key: 'three-clawed-suspension',
      label: '形态与运动',
      title: '三枚长爪怎样锁住树冠',
      body:
        '褐喉树懒的前肢长于后肢，四足外观上各有三枚长而弯曲的爪。发达的髋、膝和趾屈肌帮助它持续抓握枝干并维持悬垂姿势。画面可以表现爪包住树枝，却不能从姿势计算抓力或能耗。',
    },
    {
      key: 'selective-folivore',
      label: '食性',
      title: '吃叶，也要挑树',
      body:
        '它可取食超过 50 种植物并偏好嫩叶，但个体会把大量时间留给少数资源树。哥斯达黎加一个长期研究种群的成体存活和繁殖输出与 Cecropia obtusifolia 密度正相关；这个地点结论不能简化成全物种只吃一种树。',
    },
    {
      key: 'flexible-diel-rhythm',
      label: '活动',
      title: '没有一张固定时刻表',
      body:
        '八只野生成体的连续记录显示，日行、夜行和昼夜兼行个体都存在，活动多为短促片段。野外脑电小样本测得平均每天 9.63 小时睡眠，也说明圈养报告不能直接套用；它仍不是全物种固定睡眠值。',
    },
    {
      key: 'fur-mobile-ecosystem',
      label: '毛被生态',
      title: '一身毛也是一处生境',
      body:
        '粗毛承载绿藻、真菌、微生物和节肢动物组成的附生群落。分子研究确认 Trichophilus 等藻类存在并参与绿色调形成；藻类是否给树懒提供可测量的伪装或营养收益，仍缺少直接证据。',
    },
    {
      key: 'single-infant-care',
      label: '繁殖',
      title: '幼仔贴着母兽认识树冠',
      body:
        '褐喉树懒通常每胎一仔，妊娠约六个月，幼仔至少百日依附母兽。较早综合资料和 IUCN 较新评估给出的产仔间隔不同，因此档案不采用一个看似精确的固定间隔。',
    },
    {
      key: 'connected-forest-conservation',
      label: '保护',
      title: '无危物种也需要连通森林',
      body:
        '全球无危来自宽广分布和大片亚马孙范围，下降趋势和局地衰退仍然成立。保护工作需要管理保护地、保留河岸林带和关键树、恢复自然树冠连接、降低道路死亡，并阻断宠物与抓抱自拍供应链。',
    },
  ],
  keyFacts: [
    'IUCN 在 2022 年将本种评为无危，当前全球种群趋势为下降。',
    'IUCN 确认十个现存居民国家；阿根廷胡胡伊最后记录为 1916 年并被标作可能已灭绝。',
    '头体长参考 52—54 厘米、体重约 3.7—6 千克，退化短尾约 5 厘米。',
    '前肢长于后肢，四足外观上各有三枚长弯爪；二趾树懒的前足只有两枚长爪。',
    '可取食超过 50 种植物并偏好嫩叶；一个地点的关键树不能代表全分布区固定食谱。',
    '活动可发生在白昼和夜晚，个体之间与同一个体不同日期之间差异显著。',
    '通常每胎一仔、妊娠约六个月；产仔间隔的现有资料不一致。',
    '毛被中确有绿藻和多样附生生物，藻类伪装与营养收益仍未获得直接定量验证。',
    '野外寿命和全球成熟个体数未知，不能用圈养高龄或局地密度补齐。',
  ],
  threats: [
    '森林砍伐、退化与破碎化造成树冠和食物资源丧失，并推动局地种群下降',
    '农业和牧场扩张移除关键树、河岸林带与森林连接',
    '农业前沿及破碎森林中的高强度火灾造成直接死亡和生境退化',
    '铺装道路增加后，树冠缺口迫使个体下地并产生道路死亡',
    '为食物、药物和宠物用途进行的猎捕与非法交易',
    '捕捉幼体出售给游客，以及让游客抓抱野生个体进行自拍',
    '大西洋森林等隔离种群的低遗传多样性和连接丧失',
  ],
  conservationActions: [
    '维持并管理保护地内外的湿润森林、连续树冠和多样本地食物树',
    '在农林复合景观恢复关键树、河岸林带与再生林连接，保留多树种资源',
    '在已识别的微破碎缺口设置和监测合适的树冠桥，并以恢复自然树冠为长期目标',
    '在道路死亡热点实施限速、警示、植被连接和经监测的跨越设施',
    '执行 CITES 附录 II 与范围国法律，追查宠物供应链并制止抓抱自拍',
    '把防火、早期预警与火后野生动物响应纳入农业前沿和破碎森林管理',
    '开展可重复的种群趋势监测，并补足分类、分布、生活史与生态研究',
  ],
  metrics: {
    adultLengthCm: [52, 54],
    adultMassKg: [3.7, 6],
    elevationM: [0, 2500],
  },
  featuredStats: [
    {
      key: 'global-iucn-status',
      label: 'IUCN 全球等级',
      value: 'LC',
      unit: '无危',
      note: '2022 年评估；当前种群趋势为下降',
    },
    {
      key: 'head-body-length',
      label: '头体长参考',
      value: '52—54',
      unit: '厘米',
      note: 'IUCN SSC 专家组参考值，不含约 5 厘米退化短尾',
    },
    {
      key: 'elevation-range',
      label: '记录海拔',
      value: '0—2,500',
      unit: '米',
      note: '从海平面至至少 2,500 米',
    },
    {
      key: 'gestation-and-litter',
      label: '妊娠与胎仔',
      value: '约 6',
      unit: '个月',
      note: '通常每胎一仔；产仔间隔资料不一致',
    },
  ],
  media: {
    image: './images/species/brown-throated-sloth/01-canopy-portrait.webp',
    alt: '雨后低地热带雨林中，一只完整的雌性褐喉树懒悬垂在粗枝下，深色眼纹、褐色喉部和长前肢清晰可见',
    focalPoint: { x: 0.58, y: 0.5 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/brown-throated-sloth/02-three-clawed-anatomy.webp',
        alt: '一只雌性褐喉树懒沿湿润粗枝移动，前肢长于后肢，最近前足的三枚长弯爪清晰可辨，其他抓握点部分被枝干遮挡',
        title: '三枚长爪锁住枝干',
        caption: '前肢长于后肢，发达屈肌与弯爪支撑长期悬垂；单张照片不能测出抓力或能量消耗。',
        focalPoint: { x: 0.53, y: 0.52 },
      },
      {
        image: './images/species/brown-throated-sloth/03-lowland-forest-habitat.webp',
        alt: '层次密集的湿润低地热带森林占据画面，一只小型褐喉树懒位于右上方连续树冠中的树干旁',
        title: '连续树冠是移动的基础',
        caption: '湿润低地森林是全球主要生境；本种也会利用山地林、再生林和部分荫蔽农林地。',
        focalPoint: { x: 0.7, y: 0.42 },
      },
      {
        image: './images/species/brown-throated-sloth/04-selective-leaf-feeding.webp',
        alt: '一只完整的褐喉树懒稳固抓住树枝，并将一根仍连着植物的嫩叶枝条拉近嘴边取食',
        title: '取食树叶，也会选择资源',
        caption: '褐喉树懒偏好嫩叶并利用多种植物；哥斯达黎加关键树研究不能简化成全物种只吃一种树。',
        focalPoint: { x: 0.47, y: 0.54 },
      },
      {
        image: './images/species/brown-throated-sloth/05-mother-and-infant.webp',
        alt: '一只雌性褐喉树懒悬在雨林枝间，一只小幼仔紧贴母兽胸腹部',
        title: '一次通常一只幼仔',
        caption: '妊娠约六个月，幼仔至少百日依附母兽；不同资料给出的产仔间隔并不一致。',
        focalPoint: { x: 0.51, y: 0.52 },
      },
      {
        image: './images/species/brown-throated-sloth/06-canopy-survey-monitoring.webp',
        alt: '两名研究人员在湿润森林左下方用一副双筒望远镜和记录板观察右上方树冠中的一只褐喉树懒，人与动物保持明显距离',
        title: '一次目击只是监测的一条记录',
        caption: '评估分布和趋势需要标准化重复调查；看见一只树懒不能换算成种群数量。',
        focalPoint: { x: 0.56, y: 0.46 },
      },
    ],
  },
  sources: BROWN_THROATED_SLOTH_SOURCES,
  featured: true,
  publishedAt: BROWN_THROATED_SLOTH_CONTENT_DATE,
  updatedAt: BROWN_THROATED_SLOTH_CONTENT_DATE,
} as const satisfies Species;
~~~

## 不确定性与更新触发条件

1. IUCN 若发布取代 2022 版的全球评估，应同步核对 `code`、`trend`、`assessedYear`、国家清单、海拔、威胁与保护需求；不能只改年份。
2. MDD 若接受新的 *Bradypus variegatus* 拆分、合并或属级调整，应先重审物种档案边界，再更新分类链、范围和图像默认个体。
3. 阿根廷若出现经凭证核实的现生记录，或巴拉圭出现与 IUCN 口径一致的现存证据，应更新 `countries` 和 `range`，并保留记录年份与鉴定依据。
4. 任何新的全球数量或寿命字段必须来自覆盖方法、年龄口径和不确定区间清楚的本种资料；保护地密度、圈养高龄和其他树懒种不能补空。
5. 繁殖研究若解决 10—12 个月与至少 19 个月产仔间隔冲突，应更新故事和事实卡；在此之前只保留单仔与约六个月妊娠。
6. 毛被研究若直接量化藻类对伪装、营养或健康的净收益，可以更新毛被故事；现阶段仍使用“存在已证实，宿主收益未定”。
7. CITES 新附录生效后应重新核对附录等级与注释；该变化不自动改变 IUCN 全球等级。
8. 若任一图片重制，应重新检查四肢、可见爪数、面罩、短尾、雌兽无雄性背斑、母幼数量、人物距离和裁切安全，并按实图调整 `focalPoint` 与 alt。
