# 星鼻鼹（_Condylura cristata_）完整物种档案研究

- 检索与核验日期：2026-08-30
- 使用范围：`src/data/species.ts` 的星鼻鼹物种档案、6 个故事段落、4 张数字卡、1 张封面与 5 张 gallery 图像
- 证据口径：Mammal Diversity Database（MDD）负责当前接受名、目科属和范围国；IUCN Red List 负责全球保护等级、趋势和评估年份；Smithsonian、美国政府页面与同行评审论文负责形态和自然史；实验数字保留样本、场景和测量口径。
- 访问日期写法：本文每项事实后附来源 URL 和访问日期。实现中的 `SpeciesSource.accessedAt` 统一为 `2026-08-30`。

## 编辑结论

1. 项目主名使用“星鼻鼹”，英文名使用 `Star-nosed Mole`，学名使用 _Condylura cristata_ (Linnaeus, 1758)。MDD 只给出这一当前英文主名；历史学名和旧组合属于分类异名，不能放进俗名数组。建议 `aliases: []`。[MDD：_Condylura cristata_](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30）
2. 六阶分类链使用 Animalia 动物界、Chordata 脊索动物门、Mammalia 哺乳纲、Eulipotyphla 真盲缺目、Talpidae 鼹科、_Condylura_ 星鼻鼹属。美国鱼类及野生动物管理局（USFWS）物种树支持界、门、纲、科和属；MDD 使用当前目名 Eulipotyphla。Smithsonian 馆藏页仍显示旧目名 Soricomorpha，只能用来核对馆藏身份，不能覆盖 MDD 的当前分类。[USFWS taxonomic tree](https://www.fws.gov/taxonomic-tree/31607)；[MDD](https://www.mammaldiversity.org/taxon/1004300/)；[Smithsonian Q?rius specimen 68009-DSP](https://qrius.si.edu/browse/object/10841938)（访问日期均为：2026-08-30）
3. 全球保护字段应为 **LC / stable / assessed 2016**。IUCN 评估日期为 2016-08-07，2017 年发布的是勘误版本；结构化年份仍填 2016，不填 2017。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN assessment record](https://www.iucnredlist.org/species/41458/115187740)（访问日期均为：2026-08-30）
4. 这份评估在 2026-08-07 后超过十年。IUCN 规定评估满十年后正式标记为过期，同时保留最近一次记录，直到新评估发布。页面可以继续显示 LC 和 stable，但必须说明“2016 年评估，现需更新”；不能据此自行改成 NT、DD 或 declining。[IUCN assessment process](https://nrl.iucnredlist.org/assessment/process)；[IUCN needs-updating filter说明](https://nrl.iucnredlist.org/resources/whatsnewarchive)（访问日期均为：2026-08-30）
5. MDD 当前范围国只有加拿大和美国。范围概括为加拿大东南部、大湖区和美国东北部，并沿阿巴拉契亚山地与大西洋沿岸向南延伸至乔治亚和南卡罗来纳西北部。国家着色不表示两国全境连续分布。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30）
6. 建议地图中心使用 `{ lat: 44, lng: -78 }`，用于覆盖大湖区、加拿大东南部和美国东部的页面视口。该点是产品视口，不是种群中心、模式产地或观测点；MDD 的模式产地为美国宾夕法尼亚州。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30）
7. 2018 年 HMW 物种处理给出成体头体长 **96–128 毫米**、尾长 **65–83.5 毫米**、体重 **27–52 克**。结构化长度应明确写“头体长，不含尾”；不要把不同个体的头体长与尾长端点相加，制造未经来源报告的总长范围。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）
8. 星鼻鼹利用排水不良、土壤潮湿的针阔叶林、林间空地、湿草甸、沼泽、泥炭地和溪湖岸带，海拔从海平面到约 **1,676 米**。它在土中掘洞，也在淡水中游泳和取食，因此 `realms` 可填 `['terrestrial', 'freshwater']`；不要增加 `marine`。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）
9. 典型星鼻由 **22 条肉质触条**构成，每个鼻孔周围 11 条。触条表面覆盖艾默氏器官（Eimer’s organs）；常用估计超过 25,000 个，2023 年研究采用“约 30,000 个”的综述口径。展示文案宜写“超过 2.5 万个”，避免把估计写成逐个清点的精确常数。[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)；[Grand, Gould & Montali 1998](https://doi.org/10.2307/1382980)；[Tattersall & Campbell 2023](https://doi.org/10.1242/jeb.245127)（访问日期均为：2026-08-30）
10. 水下嗅闻和触觉取食属于两套相邻系统。星鼻负责触觉，两个鼻孔呼出气泡，让气泡接触物体或气味轨迹，再把气泡吸回鼻腔。画面和文案不能说“22 条触手闻到气味”。[Catania 2006](https://doi.org/10.1038/4441024a)；[Vanderbilt 研究说明](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)（访问日期均为：2026-08-30）

## 名称、分类与物种边界

### 推荐名称字段

| 字段 | 推荐值 | 依据与边界 |
| --- | --- | --- |
| `names.zh` | `星鼻鼹` | 沿用项目 TODO 的简体中文名；中文名不负责表达亚种。 |
| `names.en` | `Star-nosed Mole` | MDD 当前英文主名。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30） |
| `names.aliases` | `[]` | MDD 未列独立的现行英文俗名。`Sorex cristatus`、`Condylura cristata nigra` 等是分类名称或异名，不是展示别名。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30） |
| `scientificName` | `Condylura cristata` | 接受名为 _Condylura cristata_ (Linnaeus, 1758)，原始组合为 _Sorex cristatus_，模式产地为宾夕法尼亚州。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30） |

建议实现标识：

```ts
id: 'species-condylura-cristata',
slug: 'star-nosed-mole',
```

### 六阶分类链

| 分类阶元 | 拉丁名 | 中文名 | 依据与边界 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | USFWS 当前物种树。[USFWS](https://www.fws.gov/taxonomic-tree/31607)（访问日期：2026-08-30） |
| 门 | Chordata | 脊索动物门 | USFWS 当前物种树。[USFWS](https://www.fws.gov/taxonomic-tree/31607)（访问日期：2026-08-30） |
| 纲 | Mammalia | 哺乳纲 | USFWS 与 MDD。[USFWS](https://www.fws.gov/taxonomic-tree/31607)；[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期均为：2026-08-30） |
| 目 | Eulipotyphla | 真盲缺目 | MDD 当前分类；不要沿用旧馆藏页的 Soricomorpha。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30） |
| 科 | Talpidae | 鼹科 | MDD 与 USFWS。[MDD](https://www.mammaldiversity.org/taxon/1004300/)；[USFWS](https://www.fws.gov/taxonomic-tree/31607)（访问日期均为：2026-08-30） |
| 属 | _Condylura_ | 星鼻鼹属 | MDD 当前接受属。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30） |

HMW 2018 接受两个亚种，并说明分布边界缺乏一致意见；MDD 当前把 `nigra`、`parva` 和 `cristata` 的相关组合列在异名记录中。项目应建立种级页面，不在描述、分布和图像中分配亚种。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期均为：2026-08-30）

MDD 和 HMW 都把 _Condylura cristata_ 作为星鼻鼹属唯一现生种；HMW 进一步称它为 Condylurini 族唯一现生成员。文案可写“星鼻鼹属唯一现生种”，不要扩大成“鼹科唯一半水栖种”或“真盲缺目唯一水生种”。[MDD](https://www.mammaldiversity.org/taxon/1004300/)；[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30）

## IUCN、种群趋势与评估时效

推荐结构化字段：

```ts
conservation: conservation('LC', 'stable', 2016),
```

IUCN 将星鼻鼹列为无危，全球趋势记为 `Stable`。评估没有给出可落库的全球成熟个体数量，LC 记录也不需要受威胁标准字符串；`criteria` 和 `estimatedMatureIndividuals` 应留空。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN record](https://www.iucnredlist.org/species/41458/115187740)（访问日期均为：2026-08-30）

评估者 F. Cassola 在 2016-08-07 完成评估，IUCN 于 2017 年发布勘误版。到本文核验日，这份评估已超过十年。产品应同时保存两个事实：IUCN 最近记录仍为 LC/stable；IUCN 已把十年以上的评估定义为正式过期并要求重评。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN assessment process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30）

IUCN 2016 记录没有识别覆盖全分布区的重大威胁。这个结论来自旧评估，不能推出所有地方种群安全。乔治亚州 2025 年资料把本种列入该州 Species of Greatest Conservation Need，优先级为 `Data Deficient`，只登记 7 个 element occurrences；这些州级数字不能替代全球趋势。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[Georgia Biodiversity Portal](https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all)（访问日期均为：2026-08-30）

## 分布、国家数组与地图口径

推荐字段：

```ts
distribution: {
  realms: ['terrestrial', 'freshwater'],
  continents: ['北美洲'],
  regions: [
    '加拿大东南部与大湖地区',
    '美国东北部',
    '阿巴拉契亚山地',
    '美国大西洋沿岸南缘',
  ],
  countries: ['加拿大', '美国'],
  range:
    '分布于北美洲东部湿润地区，从加拿大东南部、拉布拉多与大湖区向南经过美国东北部，并沿阿巴拉契亚山地和大西洋沿岸延伸至乔治亚及南卡罗来纳西北部；实际占域集中在湿土、沼泽、泥炭地和溪湖岸带。',
  center: { lat: 44, lng: -78 },
},
```

MDD 的范围正文写明“美国乔治亚和南卡罗来纳西北部至加拿大新斯科舍、拉布拉多；大湖区至曼尼托巴东南部”，范围国为加拿大和美国。MDD 的美国次国家列表含边缘州记录，页面又提醒国家着色只提供 general overview。档案不应把州名列表转换成连续分布面，也不应把加拿大、美国写进 `endemicTo`。[MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30）

## 生境、生态域与海拔

| `name` | `realm` | `isPrimary` | 可落库描述 | 依据与边界 |
| --- | --- | ---: | --- | --- |
| 沼泽、泥炭地与湿草甸 | `freshwater` | `true` | 排水不良、泥炭或腐殖质丰富的潮湿土壤支持浅层隧道和无脊椎猎物。 | HMW 列出 swamps、peat bogs、wet meadows；不要把全部湿地画成永久深水。[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30） |
| 溪流、湖泊与池塘岸带 | `freshwater` | `true` | 洞道可直接开口到水下，个体在浅水底觅食、潜游并返回岸上巢室。 | HMW 与潜水研究支持半水栖行为；实验水槽潜水深度不能转成野外最大潜深。[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[McIntyre et al. 2002](https://doi.org/10.1242/jeb.205.1.45)（访问日期均为：2026-08-30） |
| 潮湿针叶林、落叶林与林间空地 | `terrestrial` | 省略 | 地表植被类型可变，持续湿土和可挖基质更接近共同条件。 | HMW 列出 coniferous and deciduous forests、clearings。[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30） |
| 水位以上的岸洞巢室 | `terrestrial` | 省略 | 巢室通常位于水位以上，靠近树桩或倒木，使用草、枯叶等材料。 | HMW 是综合口径；不要把巢室尺寸当作全种建筑规范。[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30） |

推荐 `metrics.elevationM: [0, 1676]`。HMW 使用“海平面至约 1,676 米”，上限带近似号；产品可以存数值用于筛选，说明文字应保留“约”。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）

## 体尺、外形与尾部季节变化

推荐结构化字段：

```ts
measurements: {
  length: {
    min: 9.6,
    max: 12.8,
    unit: 'cm',
    note: '成体头体长；不含 6.5–8.35 厘米的尾',
  },
  weight: {
    min: 27,
    max: 52,
    unit: 'g',
    note: 'HMW 2018 物种处理采用的成体范围',
  },
},
metrics: {
  adultLengthCm: [9.6, 12.8],
  adultMassKg: [0.027, 0.052],
  elevationM: [0, 1676],
},
```

HMW 描述星鼻鼹为圆筒形身体、黑色或深褐色浓密粗毛、宽大前足和粗壮爪。尾呈环纹状、基部收窄、向末端渐细。图像应显示鼹类宽掌和小眼，避免鼠类细长前足、外露耳廓、海狸扁尾或无毛短尾。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）

冬季尾部直径可达到平时的 3 至 4 倍并储存脂肪。该变化发生于两性，不能把膨大尾写成雄性专有的求偶装饰；夏季诊断图应使用细长尾，冬季图才显示膨大。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[Smithsonian/True 1896 specimen review](https://repository.si.edu/bitstream/handle/10088/13444/USNMP-19_1101_1896.pdf)（访问日期均为：2026-08-30）

1980 年 _Mammalian Species_ 物种账户报告宾夕法尼亚西部 22 个体的总长范围 161–191 毫米、尾长 61–76 毫米。该值是局部样本，不应与 HMW 的全种头体长和体重端点混合成新范围。[Petersen & Yates 1980](https://doi.org/10.2307/3503812)（访问日期：2026-08-30）

## 食性、活动与繁殖

### 食性

推荐字段：

```ts
diet: {
  types: ['carnivore', 'insectivore'],
  foods: [
    '蚯蚓、蛭类及其他环节动物',
    '石蛾、石蝇、摇蚊、蜻蜓与甲虫等水生昆虫幼体',
    '陆生昆虫',
    '水生甲壳类与软体动物',
    '偶见小鱼',
  ],
  description:
    '在土壤、落叶层和浅水底寻找小型动物性猎物；水生与陆生食物比例随水体和样地改变，柔软环节动物和昆虫幼体构成主要记录。',
},
```

HMW 汇总指出，靠近较大水体的研究样地可由水生环节动物和水生昆虫占据高比例，小池塘环境又可由蚯蚓占主导。这些比例来自不同地点和取样设计，适合说明食谱可塑性，不能写成全范围统一的“80% 蛭类”或“84% 蚯蚓”。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）

2005 年高速取食实验用直径 0.8–2.0 毫米的小段蚯蚓测试 3 只星鼻鼹，记录到加权平均处理时间 227 毫秒、最短 120 毫秒。这个数字测量“首次接触结束至吞下猎物并恢复搜索”的实验处理时间，不是奔跑速度、咬合反应或每次野外捕食耗时。[Catania & Remple 2005](https://doi.org/10.1038/nature03250)（访问日期：2026-08-30）

### 活动与空间利用

- 星鼻鼹在昼夜都可活动，活动以约 2–4 小时段落和约 3–5 小时休息段落交替。该综合值不支持把 `nocturnal` 当作固定标签。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）
- 它全年活动，可在雪中掘进，也会在结冰水体下觅食。文案可以写“冬季仍活动”，不能写成冬眠或季节迁徙。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）
- 它用宽大前足划水，后足配合，尾部控制方向，浓密毛皮阻水。陆上掘洞和水下觅食共同定义半水栖生活，不能把它画成长期漂浮的水生哺乳动物。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）
- 2002 年水槽研究记录 18 只圈养个体的 722 次自愿潜水，平均 9.2 ± 0.2 秒，最长正常探索潜水 47 秒。数据来自水温 3–30°C、深度受限的实验装置；不要填写 `maxDiveDepthM`，也不要把 47 秒称为物种生理极限。[McIntyre, Campbell & MacArthur 2002](https://doi.org/10.1242/jeb.205.1.45)（访问日期：2026-08-30）

### 繁殖与育幼

HMW 综合资料把交配季放在 3 至 4 月，妊娠约 45 天，通常一年一窝，每窝 2 至 7 仔；首次繁殖失败的雌兽可能在同一季节再次交配。出生幼仔无毛、眼耳闭合，约两周后眼、耳和星鼻开始发挥功能，约 21 至 30 日独立，约 10 个月达到性成熟。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）

1956 年繁殖论文检查 145 只新鲜标本，材料主要来自纽约州中部和西部，作者明确称资料零碎。档案应使用“约”“通常”和范围值，不把纽约州时间表写成从乔治亚到拉布拉多都精确同步。[Eadie & Hamilton 1956](https://doi.org/10.2307/1376681)（访问日期：2026-08-30）

一些综述根据繁殖季前同洞捕获的雌雄个体推测配偶关系，HMW 使用 `monogamous`。区域资料仍认为交配制度和社会组织缺少直接研究；页面不应把“一夫一妻”写成已由长期亲子或配偶追踪证实的事实。[Eadie & Hamilton 1956](https://doi.org/10.2307/1376681)；[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30）

野外寿命没有可靠范围。HMW 提到圈养约 2 年和推测的野外 3 至 4 年；项目应省略 `metrics.lifespanYears`，不要把推测写成寿命上限。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）

## 星形鼻部、艾默氏器官与触觉中央凹

典型星鼻有 22 条可动的肉质触条，每个鼻孔周围 11 条，单条约 1–4 毫米。HMW 指出约 5% 个体的触条数偏离 22；“22”代表典型形态，不能把自然变异称为畸形或另一个物种。[Grand, Gould & Montali 1998](https://doi.org/10.2307/1382980)；[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30）

星鼻直径约 1 厘米，表面铺满艾默氏器官。Catania Lab 使用约 25,000 个触觉器官和约 100,000 条有髓神经纤维的口径；2023 年论文把器官总数概括为约 30,000。实现应写“超过 2.5 万个艾默氏器官、超过 10 万条有髓传入纤维”，不显示伪精确的 25,000.0。[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)；[Gerhold et al. 2013](https://doi.org/10.1371/journal.pone.0055001)；[Tattersall & Campbell 2023](https://doi.org/10.1242/jeb.245127)（访问日期均为：2026-08-30）

2016 年器官地形研究发现，艾默氏器官密度从触条基部到尖端升高，比例约为 1:2.3:3.1。第 11 对腹内侧触条构成行为上的触觉中央凹，但它的优势来自更高的神经支配和皮层放大，不来自全星最高的器官密度。[Sawyer & Catania 2016](https://doi.org/10.1002/cne.23943)；[Catania & Kaas 1997](https://pubmed.ncbi.nlm.nih.gov/9336224/)（访问日期均为：2026-08-30）

高速录像显示，星鼻每秒可接触约 10 至 13 个位置。外围触条先碰到目标后，动物把第 11 对触条转向目标，再进行确认接触；实验记录支持“触觉中央凹”类比，不能说它用星鼻形成视觉图像。[Catania & Remple 2005](https://doi.org/10.1038/nature03250)；[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)（访问日期均为：2026-08-30）

早期论文曾提出星鼻可能具有电感受。后续神经、行为和分子研究把它确立为机械触觉器官；档案和图片说明不得宣称星鼻会感应猎物电场。[Gerhold et al. 2013](https://doi.org/10.1371/journal.pone.0055001)；[Catania 2011 review](https://doi.org/10.1098/rstb.2011.0128)（访问日期均为：2026-08-30）

## 水下嗅闻与水下觅食

Catania 在水槽中观察到星鼻鼹每秒呼出并吸回约 5 至 10 次气泡。气泡先接触物体或气味轨迹，再带着气味分子回到鼻孔；实验用网格隔开星鼻触觉，仍让气泡通过，从而区分嗅觉与触觉。[Catania 2006](https://doi.org/10.1038/4441024a)；[Vanderbilt 研究说明](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)（访问日期均为：2026-08-30）

5 只星鼻鼹追踪蚯蚓气味路线时个体正确率为 75% 至 100%，另 2 只追踪鱼气味路线时为 85% 和 100%；阻挡气泡穿过网格后，表现降至机会水平。样本很小，数字适合说明实验机制，不应写成全种固定准确率。[Vanderbilt 研究说明](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)；[Catania 2006](https://doi.org/10.1038/4441024a)（访问日期均为：2026-08-30）

水下嗅闻不是星鼻鼹独有。原论文也在美洲水鼩 _Sorex palustris_ 中记录到同一机制；故事标题和 featured stat 不应称其为“唯一能在水下嗅闻的哺乳动物”。[Catania 2006](https://doi.org/10.1038/4441024a)（访问日期：2026-08-30）

## 威胁、保护行动与知识缺口

### 可落库威胁

1. **全球评估过时**：IUCN 仍给出 LC/stable 和“无重大威胁”的结论，但评估于 2016-08-07 完成，现已正式过期。页面应把重评需求列为知识缺口，不能把它描述成灭绝驱动因素。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN assessment process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30）
2. **南部分布边缘资料不足**：乔治亚州 2025 年只登记 7 个 element occurrences，并把本种列为州级 `Data Deficient` 优先层。该结论只适用于乔治亚州，不能改写全球趋势。[Georgia Biodiversity Portal](https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all)（访问日期：2026-08-30）
3. **湿地和湿土依赖带来的局地暴露**：HMW 把沼泽、泥炭地、湿草甸与溪湖岸带列为核心生境。湿地排水、水文改变或岸带硬化会减少适生地，这是一条基于生境依赖的管理推论；现有全球评估没有量化它造成的全范围下降。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)（访问日期均为：2026-08-30）

### 推荐保护行动

- 推动全球重评，补充 2016 年后的分布、趋势、湿地变化和南缘记录。IUCN 要求十年以上评估更新。[IUCN assessment process](https://nrl.iucnredlist.org/assessment/process)（访问日期：2026-08-30）
- 在南部分布边缘开展小型哺乳动物调查和 occupancy modeling，并调查美国国家森林系统土地。乔治亚州 2025 年行动计划直接列出这两项工作。[Georgia Biodiversity Portal](https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all)（访问日期：2026-08-30）
- 保留沼泽、泥炭地、湿草甸和自然岸带的水文连接与可挖湿土。该行动由物种的已知生境和半水栖活动需求推导，实施时应使用地方湿地计划评估目标和尺度。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30）
- 向土地所有者推广草坪化学防治替代方案，并用公民科学补充分布记录。乔治亚州计划列出教育和 iNaturalist 项目；这些措施属于州级建议，不能宣称已经提高全球种群。[Georgia Biodiversity Portal](https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all)（访问日期：2026-08-30）

## 推荐摘要、描述与标签

`summary` 建议：

> 北美东部湿地中的半水栖鼹类，以 22 条星形鼻触条读取泥土与浅水底，并用反复呼吸的气泡追踪水下气味。

`description` 建议：

> 星鼻鼹是星鼻鼹属唯一现生种，生活在加拿大东南部和美国东部的沼泽、泥炭地、湿草甸与溪湖岸带。典型星鼻由 22 条肉质触条组成，表面覆盖超过 2.5 万个艾默氏触觉器官；外围触条搜索，第 11 对触条像触觉中央凹一样复核目标。它在土中掘洞，也会潜水捕食环节动物和水生昆虫，还能把呼出的气泡吸回鼻孔以追踪水下气味。IUCN 最近一次全球评估仍为无危、趋势稳定，但该评估完成于 2016 年，现已超过十年。

推荐标签：`北美洲`、`真盲缺目`、`鼹科`、`半水栖`、`湿地`、`22 条鼻触条`、`艾默氏器官`、`触觉中央凹`、`水下嗅闻`、`IUCN 无危`、`评估需更新`。各事实依据见上文相邻来源。[MDD](https://www.mammaldiversity.org/taxon/1004300/)；[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)；[IUCN](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)（访问日期均为：2026-08-30）

## 可展示关键事实

下列 21 项可转成 `keyFacts`；每条保留数字口径和研究边界。

| `title` | `description` | 依据与边界 |
| --- | --- | --- |
| 两个范围国 | 当前 MDD 只列加拿大和美国；两国着色不等于全境占域。 | [MDD](https://www.mammaldiversity.org/taxon/1004300/)（访问日期：2026-08-30） |
| 属中唯一现生种 | _Condylura cristata_ 是星鼻鼹属及 Condylurini 族唯一现生成员。 | [MDD](https://www.mammaldiversity.org/taxon/1004300/)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30） |
| 典型 22 条触条 | 每个鼻孔周围 11 条肉质触条；约 5% 个体数量偏离典型值。 | [Grand et al. 1998](https://doi.org/10.2307/1382980)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30） |
| 触条只有数毫米 | 单条鼻触条约长 1–4 毫米，星鼻整体约 1 厘米宽。 | [HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[Catania 2011](https://doi.org/10.1098/rstb.2011.0128)（访问日期均为：2026-08-30） |
| 超过 2.5 万个触觉器官 | 星鼻覆盖超过 25,000 个艾默氏器官；近年论文使用约 30,000 的估计口径。 | [Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)；[Tattersall & Campbell 2023](https://doi.org/10.1242/jeb.245127)（访问日期均为：2026-08-30） |
| 超过 10 万条神经纤维 | 约 1 厘米宽的星鼻由超过 100,000 条有髓神经纤维支配。 | [Gerhold et al. 2013](https://doi.org/10.1371/journal.pone.0055001)；[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)（访问日期均为：2026-08-30） |
| 尖端器官更密 | 艾默氏器官密度从触条基部、中段到尖端约按 1:2.3:3.1 增加。 | [Sawyer & Catania 2016](https://doi.org/10.1002/cne.23943)（访问日期：2026-08-30） |
| 第 11 对是触觉中央凹 | 外围触条发现目标后，第 11 对腹内侧触条承担复核；它获得更高神经支配和皮层放大。 | [Catania & Kaas 1997](https://pubmed.ncbi.nlm.nih.gov/9336224/)（访问日期：2026-08-30） |
| 每秒触碰 10 至 13 处 | 高速录像记录搜索时每秒约 10–13 次星鼻接触。 | [Catania & Remple 2005](https://doi.org/10.1038/nature03250)（访问日期：2026-08-30） |
| 120 毫秒实验最短值 | 3 只圈养个体处理小蚯蚓段的最短时间为 120 毫秒，加权平均为 227 毫秒。 | [Catania & Remple 2005](https://doi.org/10.1038/nature03250)（访问日期：2026-08-30） |
| 星鼻负责触觉 | 艾默氏器官属于机械感受系统；星鼻不构成电感受器。 | [Gerhold et al. 2013](https://doi.org/10.1371/journal.pone.0055001)；[Catania 2011](https://doi.org/10.1098/rstb.2011.0128)（访问日期均为：2026-08-30） |
| 鼻孔负责水下嗅闻 | 动物让气泡接触水下物体或气味轨迹，再从两个鼻孔吸回气泡。 | [Catania 2006](https://doi.org/10.1038/4441024a)（访问日期：2026-08-30） |
| 每秒 5 至 10 个气泡周期 | 高速录像测得水下呼出和吸回气泡约每秒 5–10 次。 | [Vanderbilt](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)（访问日期：2026-08-30） |
| 气泡隔网实验 | 允许气泡穿过、阻止星鼻触碰时，星鼻鼹仍能追踪气味；屏障阻挡气泡后表现降到机会水平。 | [Catania 2006](https://doi.org/10.1038/4441024a)；[Vanderbilt](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)（访问日期均为：2026-08-30） |
| 平均潜水 9.2 秒 | 18 只圈养个体在水槽中完成 722 次自愿潜水，平均 9.2 秒；这是实验均值。 | [McIntyre et al. 2002](https://doi.org/10.1242/jeb.205.1.45)（访问日期：2026-08-30） |
| 47 秒最长正常探索潜水 | 同一水槽研究记录的最长正常探索潜水为 47 秒；它不是野外纪录或生理极限。 | [McIntyre et al. 2002](https://doi.org/10.1242/jeb.205.1.45)（访问日期：2026-08-30） |
| 冰下仍可觅食 | 星鼻鼹全年活动，会在结冰池塘下寻找猎物。 | [HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30） |
| 冬尾储存脂肪 | 冬季尾部直径可膨大到平时 3 至 4 倍，两性都会出现。 | [HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[Smithsonian/True 1896](https://repository.si.edu/bitstream/handle/10088/13444/USNMP-19_1101_1896.pdf)（访问日期均为：2026-08-30） |
| 一窝 2 至 7 仔 | 综合资料记录妊娠约 45 天，通常一年一窝，每窝 2–7 仔；早期样本主要来自纽约州。 | [Eadie & Hamilton 1956](https://doi.org/10.2307/1376681)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30） |
| 海拔可到约 1,676 米 | 已汇总生境从海平面延伸至约 1,676 米，仍以潮湿土壤和湿地岸带为核心。 | [HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期：2026-08-30） |
| LC 评估已经过期 | IUCN 最近记录为 LC/stable/2016；到 2026-08-30 已超过十年重评期限。 | [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30） |

## 四张 featured stats

| `key` | `label` | `value` | `unit` | `note` | 依据 |
| --- | --- | --- | --- | --- | --- |
| `global-iucn-status` | IUCN 全球等级 | `LC` | 无危 | `2016 年评估，趋势稳定；现已超过十年` | [IUCN](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30） |
| `nasal-rays` | 典型鼻触条 | `22` | 条 | `每个鼻孔周围 11 条；少数个体存在自然数量变异` | [Grand et al. 1998](https://doi.org/10.2307/1382980)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30） |
| `eimers-organs` | 艾默氏器官 | `25,000+` | 个 | `解剖研究估计值；普通照片无法逐个清点` | [Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)；[Catania 1995](https://doi.org/10.1002/cne.903510405)（访问日期均为：2026-08-30） |
| `fastest-prey-handling` | 最短猎物处理 | `120` | 毫秒 | `3 只圈养个体、小蚯蚓段；加权平均 227 毫秒` | [Catania & Remple 2005](https://doi.org/10.1038/nature03250)（访问日期：2026-08-30） |

不要用最高速度、野外寿命、全球成熟个体数或最大潜深补数字卡。现有来源没有可比较的野外最高速度、可靠寿命范围、全球数量和自然最大潜深；水槽潜水时长也不能转换成深度。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[McIntyre et al. 2002](https://doi.org/10.1242/jeb.205.1.45)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30）

## 六个故事段落

以下文案可转成 `storySections`。每段保留来源口径和局部研究边界。

### 01 湿地里最后一只星鼻鼹属成员

- `key`: `sole-living-condylura`
- `label`: `分类与分布`
- `title`: `湿地里最后一只星鼻鼹属成员`
- `body`: `星鼻鼹是星鼻鼹属和 Condylurini 族唯一现生成员，分布于加拿大东南部和美国东部。它沿潮湿森林、沼泽、泥炭地与溪湖岸带生活；地图上的两个范围国只划出地理外框，真正占域贴着湿土和淡水。`
- 依据：MDD 负责当前分类、两国范围和范围正文，HMW 负责生境。[MDD](https://www.mammaldiversity.org/taxon/1004300/)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30）

### 02 两万五千个触点铺在一厘米鼻端

- `key`: `star-of-touch`
- `label`: `感官形态`
- `title`: `两万五千个触点铺在一厘米鼻端`
- `body`: `典型星鼻把 22 条肉质触条排在两个鼻孔周围，直径约一厘米。触条表面覆盖超过 2.5 万个艾默氏器官，并由超过 10 万条有髓神经纤维连接；这些结构读取接触、压力和纹理，星鼻本身不负责电感受。`
- 依据：触条布局来自 Smithsonian 员工参与的形态论文，器官与神经口径来自 Catania Lab 和分子触觉研究。[Grand et al. 1998](https://doi.org/10.2307/1382980)；[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)；[Gerhold et al. 2013](https://doi.org/10.1371/journal.pone.0055001)（访问日期均为：2026-08-30）

### 03 第十一对触条接过最后一次确认

- `key`: `tactile-fovea-speed`
- `label`: `触觉觅食`
- `title`: `第十一对触条接过最后一次确认`
- `body`: `外围触条每秒扫过约 10 至 13 个位置，碰到可疑目标后，星鼻转动，让腹内侧第 11 对触条再次接触。3 只圈养个体处理小蚯蚓段的加权平均时间为 227 毫秒，最短 120 毫秒；这是实验猎物处理速度，不代表每次野外捕食。`
- 依据：触觉中央凹来自行为、神经与皮层映射；时间来自 2005 年高速录像实验。[Catania & Kaas 1997](https://pubmed.ncbi.nlm.nih.gov/9336224/)；[Catania & Remple 2005](https://doi.org/10.1038/nature03250)（访问日期均为：2026-08-30）

### 04 呼出一枚气泡，再把气味带回来

- `key`: `underwater-sniffing`
- `label`: `水下感官`
- `title`: `呼出一枚气泡，再把气味带回来`
- `body`: `星鼻鼹在水下从鼻孔呼出气泡，让气泡接触物体或气味轨迹，再把它吸回鼻腔。隔网实验阻止星鼻直接碰触路线时，个体仍能追踪蚯蚓和鱼的气味；屏障挡住气泡后表现降至机会水平。22 条触条提供触觉，气味通过鼻孔和回吸空气进入嗅觉系统。`
- 依据：机制和实验来自一篇 Nature 原始论文；样本只有 5 只蚯蚓路线个体和 2 只鱼路线个体。[Catania 2006](https://doi.org/10.1038/4441024a)；[Vanderbilt](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)（访问日期均为：2026-08-30）

### 05 冬尾、岸洞和一窝幼仔

- `key`: `winter-tail-and-young`
- `label`: `季节与繁殖`
- `title`: `冬尾、岸洞和一窝幼仔`
- `body`: `冬季尾部会储存脂肪，直径可增至平时的 3 至 4 倍；星鼻鼹仍在雪下和冰下活动。综合资料记录春季交配、约 45 天妊娠和每窝 2 至 7 仔，通常一年一窝；主要繁殖材料来自旧的纽约州样本，南北范围的具体日期仍需现代研究。`
- 依据：尾部和季节活动来自 HMW 与 Smithsonian 历史标本综述，繁殖边界来自 1956 年 145 标本研究。[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[Smithsonian/True 1896](https://repository.si.edu/bitstream/handle/10088/13444/USNMP-19_1101_1896.pdf)；[Eadie & Hamilton 1956](https://doi.org/10.2307/1376681)（访问日期均为：2026-08-30）

### 06 无危标签已经等了十年

- `key`: `outdated-least-concern`
- `label`: `保护`
- `title`: `无危标签已经等了十年`
- `body`: `IUCN 最近记录仍把星鼻鼹列为无危，全球趋势稳定，且没有识别重大威胁；评估完成于 2016 年 8 月，现已超过十年更新期限。乔治亚州 2025 年计划把本种列为资料不足的保护优先物种，并要求开展占域调查，所以全球 LC 不能替代分布南缘的监测。`
- 依据：全球字段与时效来自 IUCN，南缘行动来自乔治亚州官方资料。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN process](https://nrl.iucnredlist.org/assessment/process)；[Georgia Biodiversity Portal](https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all)（访问日期均为：2026-08-30）

## 六张图片场景与科学边界

建议全部采用 3:2 横图、1536 × 1024、sRGB、无文字、无水印。源 PNG 放入 `src/assets/source/species/star-nosed-mole/`，运行时 WebP 放入 `public/images/species/star-nosed-mole/`。图片只展示可见形态和场景，不承担实验数字证明。

| 序号与用途 | 建议文件 | 场景与构图 | 科学边界和验收点 | 建议说明文字 |
| --- | --- | --- | --- | --- |
| 01 封面 | `01-wetland-edge-emergence-source.png` / `01-wetland-edge-emergence.webp` | 清晨或阴天的北美东部湿地边缘，一只星鼻鼹从浅水爬上饱和泥岸，身体、宽大前足、长尾和星鼻同时可读。 | 深褐至黑色圆筒形身体；小眼、无外露耳廓；宽掌和粗爪；尾长而非短桩。星鼻应有典型 22 条、不分叉的粉红肉质触条，11 条围绕每个鼻孔。不要加入第二只动物、积雪或热带植被。 | `一只星鼻鼹从北美东部湿地浅水爬上泥岸，以星形鼻触条探查前方。` |
| 02 全身诊断 | `02-full-body-diagnostic-profile-source.png` / `02-full-body-diagnostic-profile.webp` | 平视侧前方全身，落叶与湿泥背景简洁，前掌、后足、尾和面部都不遮挡。 | 头体约 9.6–12.8 厘米，尾约 6.5–8.35 厘米，只用于相对比例；不画比例尺。夏季正常细尾；毛皮浓密、深色。避免鼠耳、鼠门齿、海狸尾、粉色无毛身体和东部鼹的短尾。 | `深色浓密毛皮、宽大掘土前掌和细长尾共同勾勒星鼻鼹的半水栖鼹类体形。` |
| 03 星鼻微距 | `03-nasal-star-sensory-closeup-source.png` / `03-nasal-star-sensory-closeup.webp` | 正面微距，两个鼻孔位于中央，22 条触条呈左右对称扇形；柔和侧光显示湿润表面。 | 必须能人工数出 22 条独立触条，每侧 11 条；触条长度有差异、末端不分叉、无吸盘和触须毛。艾默氏器官只有 30–50 微米量级，普通图像不能逐个画出或据像素计数；用细微颗粒质感表示即可。 | `典型星鼻由每侧 11 条肉质触条组成，表面的微小艾默氏器官负责触觉。` |
| 04 水下嗅闻 | `04-underwater-bubble-sniffing-source.png` / `04-underwater-bubble-sniffing.webp` | 清澈浅溪水底，一只星鼻鼹贴近石块，两个鼻孔前有少量相连气泡，前足撑在水底。 | 气泡从鼻孔产生并贴近目标，不从触条尖端冒出；用少量气泡表示一次呼吸阶段，不画成连续潜水器气柱。单帧不能显示气泡方向、嗅觉准确率或每秒 5–10 次。避免鱼群和深水海洋场景。 | `星鼻鼹会让鼻孔呼出的气泡接触水下目标，再回吸空气以取得气味线索；单帧只重建气泡接触阶段。` |
| 05 触觉觅食 | `05-rapid-tactile-prey-detection-source.png` / `05-rapid-tactile-prey-detection.webp` | 潮湿落叶和泥面上，一只星鼻鼹让中央下方触条接近一小段蚯蚓状猎物，前齿不夸张露出。 | 单帧只能表示接触阶段，不能证明 120 毫秒、每秒 13 次或第 11 对触条的神经功能；标题和说明用“接近、复核”措辞。避免巨型蚯蚓、血液、毒液、电光、声呐波纹和可见神经。 | `外围触条发现小型猎物后，中央第 11 对触条会转向目标进行触觉复核。` |
| 06 岸洞剖面 | `06-wetland-bank-burrow-cutaway-source.png` / `06-wetland-bank-burrow-cutaway.webp` | 湿地岸坡侧剖面中，一只成体蜷卧在倒木下方、水线以上的干燥叶草巢室；一条连续上升的通道通向左下方浅水中的入口。 | 画面只解释巢室高于水线、入口可位于水下的概念关系；不能据此断言固定洞深、坡度、唯一入口或通用洞网布局。不要出现幼仔、第二只成体、精确尺寸或透明动物。 | `概念性岸洞剖面把水线以上的干燥巢室与浅水入口连在一起；真实洞道布局随地点而变。` |

六图通用形态检查：前足宽大、五趾带爪；后足较小；眼小但存在；外耳廓不可见；毛皮深褐至黑；尾长、圆柱形或冬季膨大；鼻端有两个鼻孔，生成约束采用典型 22 条粉红触条。只有 03 正面微距承担逐侧人工计数，必须能确认每侧 11 条；其余远景或斜视图不作为触条数量证据，不能靠 alt 或 caption 把不可见部分写成已核实。[HMW/Plazi treatment](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[Grand et al. 1998](https://doi.org/10.2307/1382980)；[Catania Lab](https://as.vanderbilt.edu/catanialab/research/star-nosed-mole/)（访问日期均为：2026-08-30）

## 建议来源登记

全文引用 24 个唯一 URL。以下精选 16 项可映射为 `SpeciesSource[]`；URL 保持唯一，全部设置 `accessedAt: '2026-08-30'`。其余 8 项用于交叉核验、解释评估时效或限定局部研究，不必重复占用展示来源列表。

| 建议 `id` | `kind` | 标题 | URL | 用途 |
| --- | --- | --- | --- | --- |
| `star-nosed-mole-mdd-2026` | `taxonomy` | Mammal Diversity Database: _Condylura cristata_ | https://www.mammaldiversity.org/taxon/1004300/ | 接受名、权威、Eulipotyphla、科属、两国范围、范围正文、模式产地 |
| `star-nosed-mole-usfws-taxonomy-2026` | `taxonomy` | USFWS Taxonomic Tree: Star-nosed Mole | https://www.fws.gov/taxonomic-tree/31607 | Animalia、Chordata、Mammalia、Talpidae、_Condylura_ |
| `star-nosed-mole-smithsonian-specimen-2026` | `taxonomy` | Smithsonian Q?rius specimen 68009-DSP | https://qrius.si.edu/browse/object/10841938 | 官方馆藏身份；旧目名只作历史边界 |
| `star-nosed-mole-iucn-2016` | `conservation` | Cassola 2016: _Condylura cristata_ | https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en | LC、stable、评估日期、全球威胁口径 |
| `iucn-assessment-process-2026` | `conservation` | IUCN Red List Assessment Process | https://nrl.iucnredlist.org/assessment/process | 十年后正式过期规则 |
| `star-nosed-mole-hmw-2018` | `general` | HMW Volume 8 treatment: _Condylura cristata_ | https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7 | 体尺、海拔、生境、食性、活动、繁殖、冬尾、亚种边界 |
| `star-nosed-mole-proboscis-1998` | `general` | Grand, Gould & Montali 1998: Structure of the Proboscis and Rays | https://doi.org/10.2307/1382980 | 22 条触条、每鼻孔 11 条、解剖和三叉神经 |
| `star-nosed-mole-touch-1995` | `general` | Catania 1995: Structure and Innervation of the Sensory Organs | https://doi.org/10.1002/cne.903510405 | 艾默氏器官结构和神经支配 |
| `star-nosed-mole-fovea-1997` | `ecology` | Catania & Kaas 1997: Somatosensory Fovea | https://pubmed.ncbi.nlm.nih.gov/9336224/ | 第 11 对触条、触觉中央凹、皮层与传入放大 |
| `star-nosed-mole-topography-2016` | `general` | Sawyer & Catania 2016: Somatosensory Organ Topography | https://doi.org/10.1002/cne.23943 | 艾默氏器官基部至尖端密度比例 |
| `star-nosed-mole-molecular-touch-2013` | `general` | Gerhold et al. 2013: Molecular Basis of Mammalian Touch | https://doi.org/10.1371/journal.pone.0055001 | 超过 10 万条有髓纤维、触觉神经元与电感受否定边界 |
| `star-nosed-mole-fast-foraging-2005` | `ecology` | Catania & Remple 2005: Asymptotic Prey Profitability | https://doi.org/10.1038/nature03250 | 3 个体、120 毫秒最短、227 毫秒均值、搜索接触频率 |
| `star-nosed-mole-underwater-smell-2006` | `ecology` | Catania 2006: Underwater Sniffing | https://doi.org/10.1038/4441024a | 呼出和回吸气泡、水下气味轨迹机制 |
| `star-nosed-mole-diving-2002` | `ecology` | McIntyre, Campbell & MacArthur 2002: Diving Behaviour | https://doi.org/10.1242/jeb.205.1.45 | 18 个体、722 潜水、9.2 秒均值、47 秒最长正常探索潜水 |
| `star-nosed-mole-reproduction-1956` | `ecology` | Eadie & Hamilton 1956: Notes on Reproduction | https://doi.org/10.2307/1376681 | 145 标本、纽约州区域样本、繁殖证据边界 |
| `star-nosed-mole-georgia-swap-2025` | `conservation` | Georgia Biodiversity Portal: _Condylura cristata_ | https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all | 南缘 Data Deficient、7 个记录单元、州级调查和教育行动 |

## 实施风险

1. **IUCN 字段仍需落库，但必须提示过期**：代码写 `LC / stable / 2016`；正文写评估已经超过十年。旧评估不能自动变成新等级。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[IUCN process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30）
2. **MDD 与 HMW 的亚种口径不同**：HMW 2018 接受两个亚种并承认界线不稳，MDD 当前把相关名称放入异名记录。项目保持一个种级页面。[MDD](https://www.mammaldiversity.org/taxon/1004300/)；[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)（访问日期均为：2026-08-30）
3. **体尺不能拼接**：HMW 的 96–128 毫米是头体长，65–83.5 毫米是尾长；1980 年宾夕法尼亚样本的 161–191 毫米是总长。实现选一套口径并写清测量部位。[HMW/Plazi](https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7)；[Petersen & Yates 1980](https://doi.org/10.2307/3503812)（访问日期均为：2026-08-30）
4. **高速、潜水与气味实验都不是野外常数**：120 毫秒来自 3 只圈养个体的小蚯蚓段；9.2 秒来自 18 只圈养个体的水槽；水下气味准确率来自 7 只个体分成两种路线。故事和数字卡必须保留样本边界。[Catania & Remple 2005](https://doi.org/10.1038/nature03250)；[McIntyre et al. 2002](https://doi.org/10.1242/jeb.205.1.45)；[Vanderbilt](https://news.vanderbilt.edu/2006/12/20/scientist-discovers-some-mammals-can-smell-objects-under-water-58788/)（访问日期均为：2026-08-30）
5. **22 条触条只在计数图中人工验收**：典型个体每侧 11 条；生成模型常会多画、少画、分叉或添加吸盘。03 正面微距必须逐侧计数；封面等小尺度或斜视画面只作形态场景，不作为数量证据。[Grand et al. 1998](https://doi.org/10.2307/1382980)（访问日期：2026-08-30）
6. **全球 LC 不能覆盖南缘资料不足**：乔治亚州的 `Data Deficient` 是州级保护计划结论，不能改写 IUCN 全球代码；反过来，全球 LC 也不能删除州级调查需求。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en)；[Georgia Biodiversity Portal](https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all)（访问日期均为：2026-08-30）

## 实施验收清单

- [ ] 物种标识使用 `species-condylura-cristata` 和 `star-nosed-mole`，主名为星鼻鼹 / Star-nosed Mole，`aliases` 为空。
- [ ] 六阶分类精确为 Animalia / Chordata / Mammalia / Eulipotyphla / Talpidae / _Condylura_，没有 Soricomorpha。
- [ ] 保护字段精确为 `LC / stable / 2016`，页面邻近说明评估在 2026-08-07 后正式过期。
- [ ] 国家数组只含加拿大、美国；地图中心 `{ lat: 44, lng: -78 }` 只承担视口功能。
- [ ] 生态域含 terrestrial 和 freshwater，不含 marine；海拔数值为 `[0, 1676]` 并在文案保留“约”。
- [ ] 体尺采用同一 HMW 口径：头体长 9.6–12.8 厘米、体重 27–52 克、尾长 6.5–8.35 厘米只进说明。
- [ ] `metrics.adultMassKg` 换算为 `[0.027, 0.052]`；不填写寿命、最高速度、最大潜深和成熟个体数。
- [ ] 食性同时覆盖陆生和水生无脊椎动物，比例数字保留样地边界；偶见小鱼不升级为核心 piscivore 标签。
- [ ] 活动描述包含昼夜循环、全年活动、掘洞和潜水；不贴固定 nocturnal 或 hibernating 标签。
- [ ] 繁殖写约 45 天、2–7 仔、通常一年一窝，并说明主要证据来自旧的纽约州区域样本。
- [ ] `keyFacts` 至少 15 项；120 毫秒、9.2 秒和气味路线准确率保留样本量。
- [ ] `storySections` 精确 6 段，覆盖分类湿地、星鼻触觉、第 11 对触条、高速取食、水下嗅闻、繁殖季节和保护时效。
- [ ] `featuredStats` 精确 4 项：LC、22 条、25,000+ 个、120 毫秒；数字卡注释写明时效或实验边界。
- [ ] 6 张图均有源 PNG 和运行时 WebP；03 星鼻微距逐侧人工核对 11 条触条，其余图不作为触条数量证据。
- [ ] 水下嗅闻图的气泡从鼻孔产生；caption 不说触条闻味，不称本种为唯一水下嗅闻哺乳动物。
- [ ] 岸洞剖面图的巢室、铺垫物和动物均位于水线以上；不从概念图推断固定洞深、坡度、唯一入口或通用洞网布局。
- [ ] 研究稿引用的 24 个 URL 均可访问；精选进入 `sources` 的 16 个 URL 保持唯一，`accessedAt` 为 `2026-08-30`，并包含 IUCN、MDD、HMW 和四篇关键行为论文。
- [ ] 更新 `docs/todo.md` 的物种总数、哺乳纲总数与剩余条目，并删除“星鼻鼹 _Condylura cristata_”待办项。
- [ ] 增加定向测试，核对分类、LC/stable/2016、两国、体尺、海拔、6 段故事、4 张数字卡、6 张图片及关键来源。
- [ ] 运行 `npm run typecheck`、`npm test`、`npm run build` 和静态图片检查；不使用 GUI 或 headless browser。
