# 巨人捕鸟蛛（_Theraphosa blondi_）完整档案研究

- 检索、核验与访问日期：2026-08-28
- 展示中文名：**巨人捕鸟蛛**
- 英文主名：**Goliath Birdeater**
- 接受学名：**_Theraphosa blondi_ (Latreille, 1804)**
- 推荐 slug：`goliath-birdeater`
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面、5 张图库图、6 段故事、4 个展示数字和来源数组
- 证据口径：分类以 World Spider Catalog 为主，ITIS 与 GBIF Backbone 只作骨架交叉核对；保护状态以 IUCN 官方检索和 CITES 当期附录为准；形态、取食、防御、毒液、繁殖及贸易采用物种级同行评审原始论文；博物馆和动物园资料只补充公众可读的圈养生物学
- 核心边界：本档案只写 _T. blondi_。不得把 _T. stirmi_、_T. apophysis_ 或其他捕鸟蛛的纪录直接移植过来

## 结论摘要

1. World Spider Catalog 接受 _Theraphosa blondi_ (Latreille, 1804)，LSID `urn:lsid:nmbe.ch:spidersp:002488`，列入捕鸟蛛科 _Theraphosidae_、巨人捕鸟蛛属 _Theraphosa_，并标记为该属模式种。[World Spider Catalog](https://wsc.nmbe.ch/lsid/urn:lsid:nmbe.ch:spidersp:002488)
2. 仓库分类链采用 Animalia、Arthropoda、Arachnida、Araneae、Theraphosidae、_Theraphosa_。ITIS TSN 868632 与 GBIF Backbone key 5170451 支持相同的六级路径。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=868632) [GBIF](https://www.gbif.org/species/5170451)
3. WSC 的当前精简分布是委内瑞拉、巴西和圭亚那。1990 年物种级野外研究明确使用来自法属圭亚那的 _T. blondi_；史密森尼还概括苏里南，但现代 _Theraphosa_ 物种之间存在误鉴风险。结构化范围应区分“分类目录列出的国家”和“有独立物种级证据的地区”。[WSC](https://www.wsc.nmbe.ch/spec-data/44583/Theraphosa_blondi) [Marshall & Uetz 1990](https://www.americanarachnology.org/journal-joa/joa-all-volumes/detail/article/download/JoA_v18_p143.pdf/?no_cache=1)
4. 这是低地湿润雨林地表的穴居蜘蛛。成体主要围绕衬丝地洞活动，洞口常邻近树根、岩石或倒木；“沼泽蜘蛛”不是足以概括整个分布区的生境名称。[Smithsonian's National Zoo](https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula)
5. 体长、腿展和质量必须分开。史密森尼给出身体长度最高约 12 cm、腿展最高约 28 cm；腿展包括伸展的步足，不等于身体长度。[Smithsonian's National Zoo](https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula)
6. Guinness 官方条目把最重蛛形纲纪录列为 170 g，并说明个体由 Robert Bustard 繁殖、Brian Burnett 饲养，称量发生在 1998 年 2 月、个体两岁。该页没有公开原始称量报告、性别、测量误差或称量时的活体状态。同行评审纪录综述同时转述其腿展 28 cm，并把本种称为“可能是质量最大的已知蜘蛛”；最大腿展纪录则由巨型猎人蛛 _Heteropoda maxima_ 竞争。170 g 不能写成野外活体纪录、普通成体质量或物种稳定上限。[Guinness World Records](https://www.guinnessworldrecords.com/world-records/498536-heaviest-arachnid) [Mammola et al. 2017](https://doi.org/10.7717/peerj.3972)
7. 本种不是经常捕鸟的专性捕食者。可靠记录显示它会捕食昆虫等无脊椎动物，也会机会性捕食蛙类和小蛇；一项捕鸟记录中的鸟先被雾网缠住，只能证明机会性取食，不能代表日常猎鸟。[Menin et al. 2005](https://doi.org/10.11606/issn.2316-9079.v4i1p39-47) [Bilce et al. 2021](https://www.biotaxa.org/hn/article/view/62475) [Carvalho et al. 2016](https://doi.org/10.1080/01650521.2016.1237802)
8. 它主要夜行，视力有限，以身体和足部感觉毛接收地面与空气振动。八只眼不等于清晰视觉；“靠振动定位”也不等于完全失明。[Smithsonian's National Zoo](https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula)
9. 遇威胁时可先退避、抬起前足、摩擦刚毛发出嘶声，再用后足快速擦过腹部，使可脱落的带倒刺刚毛进入空气。它不靠肌肉或器官把刚毛当作弹丸“射出”。[Marshall & Uetz 1990](https://www.americanarachnology.org/journal-joa/joa-all-volumes/detail/article/download/JoA_v18_p143.pdf/?no_cache=1) [Marshall et al. 1995](https://doi.org/10.1111/j.1469-7998.1995.tb01770.x)
10. 雌蛛会把腹部刚毛掺入卵囊外层和蜕皮垫。1990 年实验没有证明卵囊中的刚毛对人或小鼠产生同样刺激；作者提出其可能阻挡昆虫寄生者。这是有实验边界的功能假说，不应写成已经证明的“给幼蛛穿防弹衣”。[Marshall & Uetz 1990](https://www.americanarachnology.org/journal-joa/joa-all-volumes/detail/article/download/JoA_v18_p143.pdf/?no_cache=1)
11. 毒液含有能在小鼠神经肌肉标本和异源表达离子通道系统中起效的成分，但这些体外实验不能换算成人类致死性。现有物种级原始论文不支持“致命剧毒”，也不支持“完全无害”；咬伤还包括大型螯肢造成的机械穿刺风险。[Fontana et al. 2002](https://doi.org/10.1590/S0104-79302002000200010) [Ebbinghaus et al. 2004](https://doi.org/10.1016/j.toxicon.2003.12.012)
12. 史密森尼把人类照护下寿命概括为雌性可达约 20 年、雄性约 3 至 6 年，并描述幼蛛经反复蜕皮发育。它是动物园通俗资料，不能当作野外存活曲线或成熟时间表。[Smithsonian's National Zoo](https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula)
13. 截至 2026-08-28，IUCN Red List 以接受学名检索不到物种评估。结构化字段只能写 `NE` 与 `unknown`，不能根据体型、贸易或栖息地推测濒危等级或趋势。[IUCN Red List search](https://www.iucnredlist.org/search?query=Theraphosa%20blondi&searchType=species)
14. 2026-03-05 生效的 CITES 附录和官方 CITES Checklist 未列出 _Theraphosa blondi_ 或 _Theraphosa_。未列入附录不等于种群安全，也不等于贸易没有风险。[CITES Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES Checklist](https://checklist.cites.org/)
15. 没有物种级全球种群估计、趋势序列或经量化威胁排序。宠物贸易、森林转化和采集都值得监测，但档案必须标成证据缺口；保护建议应聚焦凭证标本调查、分类鉴定、来源追溯和穴居微生境保护。

## 名称、别名与分类

### 名称字段

```ts
id: 'species-theraphosa-blondi',
slug: 'goliath-birdeater',
names: {
  zh: '巨人捕鸟蛛',
  en: 'Goliath Birdeater',
  aliases: [
    '歌利亚捕鸟蛛',
    'Goliath Bird-eating Tarantula',
    'Goliath Tarantula',
    'Theraphosa leblondi',
  ],
},
scientificName: 'Theraphosa blondi',
```

名称边界：

- **巨人捕鸟蛛**：仓库 TODO 的中文主名
- **歌利亚捕鸟蛛**：英文 Goliath 的常见直译，可作检索别名；若项目要求只保留权威中文名，可从结构化 aliases 删除，不影响正文
- **Goliath Birdeater**：ITIS 使用的英文俗名，适合作为产品英文主名
- **Goliath Bird-eating Tarantula**：史密森尼页面使用的公众英文名
- **Goliath Tarantula**：可检索英文简称；不表示它是 _Theraphosa_ 属唯一大型种
- **_Theraphosa leblondi_**：旧文献中使用的历史名称；WSC 已接受 _T. blondi_，数据主学名不得沿用旧名
- **“捕鸟蛛”**：科名和俗名，不是“以鸟为固定主食”的营养分类

### 接受分类路径

| 阶元 | 学名 | 中文分类单元名 | 证据与落库口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | ITIS、GBIF |
| 门 | Arthropoda | 节肢动物门 | ITIS、GBIF |
| 纲 | Arachnida | 蛛形纲 | ITIS、GBIF |
| 目 | Araneae | 蜘蛛目 | ITIS、GBIF |
| 科 | Theraphosidae | 捕鸟蛛科 | WSC、ITIS、GBIF |
| 属 | _Theraphosa_ | 巨人捕鸟蛛属 | WSC 接受属 |
| 种 | _Theraphosa blondi_ | 巨人捕鸟蛛 | WSC 接受种、模式种 |

```ts
taxonomy: animalTaxonomy(
  taxon('Arthropoda', '节肢动物门'),
  taxon('Arachnida', '蛛形纲'),
  taxon('Araneae', '蜘蛛目'),
  taxon('Theraphosidae', '捕鸟蛛科'),
  taxon('Theraphosa', '巨人捕鸟蛛属'),
),
```

WSC 当前把 _Theraphosa_ 列为四个接受种：_T. apophysis_、_T. blondi_、_T. spinipes_ 和 _T. stirmi_。2010 年描述 _T. stirmi_ 的论文同时比较了 _T. blondi_ 与 _T. apophysis_；颜色、体型或商品名不能单独承担物种鉴定。[World Spider Catalog genus](https://www.wsc.nmbe.ch/genus-catalog/3612/Theraphosa) [Rudloff & Weinmann 2010](https://wsc.nmbe.ch/refincluded/11546)

## 分布、地图中心与生境

### 结构化分布建议

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['南美洲'],
  countries: ['委内瑞拉', '巴西', '圭亚那', '法国'],
  regions: [
    '委内瑞拉南部',
    '巴西北部',
    '圭亚那',
    '法属圭亚那',
  ],
  center: { lat: 4.5, lng: -59 },
  range:
    '南美洲北部圭亚那地盾与北亚马孙的湿润低地森林。WSC 当前明确列出委内瑞拉、巴西和圭亚那；法属圭亚那有物种级野外研究，苏里南见于史密森尼范围概括，但后者需防范同属种误鉴。地图中心只用于范围视图，不代表采集点。',
},
```

`countries` 中的“法国”只对应法属圭亚那，不表示欧洲本土。若仓库坚持完全采用 WSC 精简国家清单，可把法国移入 `regions` 说明而不放进 `countries`。苏里南只保留在 `range` 的机构概括中，不作为已经凭物种级标本核定的结构化地区；不能把苏里南与法属圭亚那混为一地。`center` 位于圭亚那地盾—北亚马孙范围中部，是制图中心，不是精确出现坐标。

### 四类生境

1. **圭亚那地盾与北亚马孙低地湿润常绿林**：高湿、遮荫的森林地表是主生境。封面应呈现连续林下层，不画成开阔草原或干燥稀树草原。
2. **树根、岩石和倒木下的衬丝土穴**：蜘蛛长期利用洞穴避光、蜕皮和伏击。蛛丝主要衬在洞内和洞口附近，不应画成圆形捕虫网。
3. **厚落叶层与腐木斑块**：洞口外短距离的夜间感知和捕食界面，地表可见潮湿落叶、根系和朽木。
4. **湿洼地与季节性饱和森林土壤**：部分权威概述提到潮湿、近沼泽环境，但仍属于林下微地形；不可把本种设定为水生、半水生或开阔沼泽专性种。

所有结构化 habitat realm 都写 `terrestrial`。至少一项标记 `isPrimary: true`，主项建议用“低地湿润雨林地表与穴居系统”。

## 体型、纪录与证据边界

### 三种量法不能混用

| 指标 | 建议值 | 定义 | 证据边界 |
| --- | --- | --- | --- |
| 身体长度 | `max: 12 cm` | 从螯肢/头胸部前端到腹部后端，不含步足 | 史密森尼公众资料的上限概括；不是样本均值 |
| 腿展 | `max: 28 cm` | 步足完全伸展时相对足端之间的跨度 | 史密森尼与纪录综述相符；姿态和方法可影响结果 |
| 质量纪录 | `max: 170 g` | 一只两岁圈养个体的官方纪录条目 | Guinness 提供繁殖者、饲养者和 1998 年 2 月称量信息，但未公开原始称量报告、性别、误差和活体状态；不是典型质量或野外纪录 |

```ts
measurements: {
  length: {
    max: 12,
    unit: 'cm',
    note: '身体长度的机构资料上限，不含步足；不是腿展，也不是普通成体均值。',
  },
  weight: {
    max: 170,
    unit: 'g',
    note: 'Guinness 记录的一只两岁圈养个体质量；未公开原始称量报告、性别、误差和称量时活体状态，不代表野外或典型成体上限。',
  },
  wingspan: {
    max: 28,
    unit: 'cm',
    note: '字段借位表示腿展，不是翅展；若 UI 会固定显示“翼展”，应省略该字段，只在 featuredStats 展示腿展。',
  },
},
metrics: {},
```

优先方案是**不要**把腿展塞入 `wingspan`，因为蜘蛛没有翅。若当前类型缺少 legSpan 字段，就在 `featuredStats` 使用“腿展”，在 `measurements` 只保留 body length 与有严格注释的 record weight。`metrics.adultMassKg`、`adultLengthCm` 和 `lifespanYears` 都应省略：来源无法提供跨地区、分性别且可作为典型成年值的数据。

### “最重蜘蛛”该怎么写

推荐句式：

> Guinness 把 170 克列为一只两岁圈养个体的质量纪录，同行评审综述据此称巨人捕鸟蛛“可能是质量最大的已知蜘蛛”。条目表头的地点/日期是“Suriname / 16 October 2017”，正文却明确把个体放在苏格兰并把称量定于 1998 年 2 月；本档案把前者视为纪录条目元数据，不改写成称量地点与日期。官方页面没有公开原始称量报告或活体状态，数值不能代表野外成体常态；巨型猎人蛛的腿展可以更大。Guinness 另一张“largest spider”页面还写过未绑定具体个体和方法的 175 克概括，不能拿它替代可追踪到个体的 170 克纪录。[Guinness largest spider](https://www.guinnessworldrecords.com/world-records/largest-spider?amp=1)

禁止句式：

- “世界最大蜘蛛”——没有说明按质量、身体长度还是腿展
- “野外活体最高 175 克”——现有可核来源没有支持这三个限定
- “平均 170 克”——把单体纪录改造成均值
- “腿展冠军”——纪录综述给 _Heteropoda maxima_ 更大的腿展值

## 食性、活动与感知

### 食性

```ts
diet: {
  types: ['carnivore', 'insectivore'],
  foods: [
    '大型昆虫及其他陆生节肢动物',
    '蚯蚓等软体无脊椎动物',
    '蛙类与小型蛇类等机会性脊椎动物',
  ],
  description:
    '在洞口和森林地表伏击活动猎物。自然史记录支持以无脊椎动物为常见食物，也记录到蛙类和小蛇；鸟类记录属于雾网困鸟事件，不能据此把鸟列为常规食物。',
},
```

原始记录的尺度：

- 巴西亚马孙一项两栖类捕食论文记录到 _T. blondi_ 捕食幼年蟾蜍，证明大型蛛可处理小型陆生脊椎动物，不提供常规食谱比例。[Menin et al. 2005](https://doi.org/10.11606/issn.2316-9079.v4i1p39-47)
- 巴西帕拉州记录到个体取食一条幼年 _Drymoluber dichrous_，属于一次自然史观察，不能推算蛇类在食谱中的频率。[Bilce et al. 2021](https://www.biotaxa.org/hn/article/view/62475)
- 普通鳞背蚁鸟记录发生在鸟被研究雾网缠住之后，蜘蛛利用了异常受限的猎物。档案可用它解释俗名误区，不应写进常规 `foods`。[Carvalho et al. 2016](https://doi.org/10.1080/01650521.2016.1237802)

“捕鸟”不能扩写为主动追逐健康鸟类。现有来源也没有足够定量数据支持“主要吃昆虫占多少百分比”，结构化内容只写类目，不写比例。

### 活动与感知

```ts
activity: ['主要夜行', '穴居', '洞口伏击', '独居', '非结网捕食'],
```

- 多数时间在洞穴内或洞口附近，夜间对地表振动和空气扰动作出反应
- 八只眼组成眼簇，但视觉能力有限；足和体表感觉毛承担重要的机械感受
- 它会铺设衬洞蛛丝和信号丝，但不建造圆网捕捉飞虫
- 大型步足用于行走，口器前方的一对较短附肢是触肢；准确图像应有八条步足和两条触肢，不能把触肢画成第五对腿或触角
- 不要把夜行概括成“白天绝不出洞”，也不要把穴居写成“终生不离洞口”

## 防御性刚毛、发声与毒液

### 防御顺序

1. 静止、后退或转向洞穴
2. 抬起前足和身体前部，展示螯肢
3. 摩擦特化刚毛，产生可听见的嘶声式摩擦音
4. 用第四对步足快速向下擦过腹部后方，使易脱落的带倒刺刚毛扬入空气
5. 在近距离受压时咬击

这不是每次遭遇都固定执行的五级程序，只是可展示的行为范围。用“可能”“可”描述，不给本种贴“暴躁”“攻击性强”等人格标签。

### 刚毛机制

Marshall 与 Uetz 的物种级研究记录，后足快速擦过腹部会折断刚毛基部并释放刚毛。研究者在处理材料时的接触记录包括立即灼热、瘙痒和上呼吸道刺激。准确术语是“释放”“扬起”或“踢落”，不是“射出”“发射”。[Marshall & Uetz 1990](https://www.americanarachnology.org/journal-joa/joa-all-volumes/detail/article/download/JoA_v18_p143.pdf/?no_cache=1)

形态研究把 _T. blondi_ 的腹部防御刚毛归为 Type III；Kaderka 等检查的标本中，长型约 0.28—0.32 mm，短型约 0.07—0.08 mm。数字来自少量馆藏材料，不是所有个体固定长度。物种鉴定仍需结合雄性触肢、生殖器、刚毛分布和可靠产地，不能只看“毛很长”。[Bertani & Guadanucci 2013](https://doi.org/10.1590/S1984-46702013000400006) [Kaderka et al. 2019](https://doi.org/10.1371/journal.pone.0224384)

### 嘶声不是发声器官叫声

Marshall、Thoms 与 Uetz 描述的是触肢与前两对步足相对面的特化发声刚毛互相缠结、摩擦产生 stridulation。它们不是腹部可脱落的 Type III 防御刚毛。声音不是经口呼气，也不是像脊椎动物声带发声。图像可以表现前足抬起和螯肢展示，不能把声波、气流或文字拟声画进自然史照片。[Marshall et al. 1995](https://doi.org/10.1111/j.1469-7998.1995.tb01770.x)

### 毒液证据边界

- Fontana 等把粗毒液加到小鼠离体膈神经—膈肌标本；在 7.5 µg/mL 条件下约 30 分钟出现完全神经肌肉阻断。这是离体制备结果，不是咬伤剂量或人体结果。[Fontana et al. 2002](https://doi.org/10.1590/S0104-79302002000200010)
- Ebbinghaus 等从毒液分离并测序 TLTx1、TLTx2 和 TLTx3；论文对 Kv4.2 作用机制的详细实验聚焦 TLTx1，不能把同等完整的功能测定外推给三个肽。离子通道活性也不能直接等同人体临床严重程度。[Ebbinghaus et al. 2004](https://doi.org/10.1016/j.toxicon.2003.12.012)
- 没有可用于本档案的物种级人类病例系列证明致死性。推荐写“毒液具有实验测得的神经活性，人体风险资料不足；大型螯肢穿刺和刚毛暴露也可造成伤害”。

## 繁殖、发育与寿命

### 有证据支持的过程

1. 成熟雄蛛以触肢转移精子，接近雌蛛时面临被拒绝或捕食的风险；现有来源不足以给出野外固定交配月份。
2. 雌蛛在洞内制造一个封闭丝质卵囊，并把腹部刚毛掺入外层。1990 年论文中的圈养雌蛛守护卵囊约 11 周；这不是全分布区固定孵化时长。
3. 史密森尼概括每囊 50 至 200 枚卵，并在同一网页另称卵囊包含约 70 只幼蛛，还写到雌蛛携带卵囊。卵数与幼蛛数不是同一个量，“约 70”也不是野外常见值；该动物园公众资料适合解释过程，不适合写成野外平均繁殖成功率。
4. 幼蛛通过反复蜕皮生长。史密森尼概括第一年约蜕皮五至六次，但这来自人类照护资料，不是野外固定蜕皮表。
5. 史密森尼给出圈养寿命：雌蛛可达约 20 年，雄蛛约 3 至 6 年。性别差异大，不能把“20 年”写成所有个体寿命；当前可访问的物种级原始资料不足以建立野外成熟年龄和寿命曲线。

### 不应落库为无条件事实的数值

- `70` 不是每个卵囊固定幼蛛数
- `11 weeks` 不是野外统一胚胎期
- 不给野生个体填写固定成熟年龄，现有可访问物种级原始资料不足
- `20 years` 是圈养雌蛛上限概括，不是野外平均寿命
- 不写“交配后雄蛛一定被吃”；现有来源只能支持存在风险

## IUCN、CITES、种群趋势与保护

### 结构化状态

```ts
conservation: conservation('NE', 'unknown'),
```

截至核验日：

- IUCN 官方检索以 `Theraphosa blondi` 没有返回物种评估。因此 `code` 只能是 `NE`，`trend` 只能是 `unknown`；不得填写 `assessedYear` 或 `criteria`
- CITES 2026-03-05 附录和官方 Checklist 没有本种或本属条目。档案可在正文说明“不在附录”，不能把 CITES 当作保护等级
- 没有全球成熟个体数、有效种群大小、占有面积趋势或分国时间序列。不得创造 `estimatedMatureIndividuals`、`populationTrendPercent` 或下降比例

### 威胁：只写证据强度

建议 `threats` 使用带限定的句子：

1. 分布区低地湿润森林的转化和破碎化可能减少适合开穴的高湿林下微生境；当前没有本种尺度的损失比例
2. 国际宠物市场确实交易大量蜘蛛，且蛛形纲贸易存在野采与错误鉴定问题；现有全球研究没有给出 _T. blondi_ 的野采量或种群效应
3. 大型、寿命长且穴居的个体容易被定点采集，但缺少可用于全球推断的采集率
4. _Theraphosa_ 同属种误鉴会污染贸易、馆藏和分布记录，阻碍种群监测
5. 道路、矿业或林地开发可能改变土壤湿度、根系和洞穴稳定性；物种级暴露程度未知
6. 气候变化可能改变林下湿度与降雨季节性，但没有物种级响应模型

贸易综述在全球数据库中识别出 1,264 种被交易的蛛形纲动物，并指出大量交易不透明；它支持建立追溯和分类核查，却不能证明上述 1,264 种都受同等威胁，也不能单独推出 _T. blondi_ 正在下降。[Marshall et al. 2022](https://doi.org/10.1038/s42003-022-03374-0)

### 可执行的保护与研究行动

1. 在委内瑞拉南部、圭亚那、法属圭亚那和巴西北部开展凭证标本支持的标准化洞穴与夜间样线调查
2. 把性别、发育阶段、洞穴占用、季节、搜索时间和未检出记录一并保存，建立可重复的趋势基线
3. 用成体形态、刚毛分布和必要的分子证据区分 _T. blondi_、_T. stirmi_ 与 _T. apophysis_
4. 保护连续湿润林下层、粗大根系、倒木和稳定土壤，避免把措施缩成单纯“保护一只大蜘蛛”
5. 对宠物贸易记录保留合法来源、繁殖代次、亲本来源和鉴定凭证；“人工繁殖”声明应能被核验
6. 公开范围边缘和历史记录的凭证图像或标本号，清理同属种误鉴
7. 记录刚毛接触和咬伤病例的物种鉴定、暴露途径和临床过程，不用其他捕鸟蛛病例替代
8. IUCN 未评估期间定期复核分类、分布、贸易与种群资料；不要把 `NE` 当成低风险标签

## 六段故事建议

```ts
storySections: [
  {
    key: 'mass-record-boundary',
    label: '体型与纪录',
    title: '170 克，只属于一只圈养纪录个体',
    body:
      '身体长度、腿展和质量回答三件不同的事。机构资料给出身体约 12 厘米、腿展约 28 厘米；Guinness 另记录一只两岁圈养个体重 170 克，却没有公开原始称量报告、性别或称量时活体状态。它支持“可能最重”，不支持“腿展最大”，更不能代表每只成年蛛。',
  },
  {
    key: 'burrow-vibration-night',
    label: '穴居与感知',
    title: '洞口之外，振动先抵达身体',
    body:
      '巨人捕鸟蛛把蛛丝铺在湿润土穴内外，不织圆网。夜间的地面振动和空气扰动由足和体表感觉毛接收，有限视觉只提供部分信息。它多在洞口短距离伏击，而不是在森林里长途追赶猎物。',
  },
  {
    key: 'prey-not-birds',
    label: '食性与俗名',
    title: '捕鸟是可能事件，不是日常菜单',
    body:
      '无脊椎动物构成可确认的常见猎物，蛙和小蛇记录显示它也会利用机会性脊椎动物。一只蚁鸟被取食前已困在研究雾网中；这条记录解释了大型蛛能处理鸟，却不能证明它经常主动捕鸟。',
  },
  {
    key: 'setae-sound-venom',
    label: '防御机制',
    title: '后足扬毛、刚毛摩擦和最后的咬击',
    body:
      '受压时，它可抬起前足、摩擦刚毛产生嘶声，再用后足擦过腹部，使带倒刺的刚毛进入空气。刚毛不是被“射出”。毒液在小鼠离体组织和离子通道实验中有活性，但这些结果不能转换成人类致死结论。',
  },
  {
    key: 'egg-sac-and-growth',
    label: '繁殖与发育',
    title: '一只封闭卵囊，裹着母蛛的刚毛',
    body:
      '雌蛛在洞内制作丝质卵囊，并把腹部刚毛掺入外层。圈养观察记录守护约 11 周，幼蛛再经反复蜕皮生长；卵数、孵化时间和寿命都受性别与饲养条件影响，不能当作野外固定日程。',
  },
  {
    key: 'unknown-status',
    label: '保护与证据缺口',
    title: '未评估不是无风险',
    body:
      'IUCN 没有本种评估，CITES 当期附录也没有本种条目，全球趋势仍然未知。下一步不是猜一个等级，而是用凭证标本确认分布、重复调查洞穴占用，并让贸易来源和人工繁殖声明可以追溯。',
  },
],
```

## `keyFacts`、`featuredStats` 与标签建议

```ts
keyFacts: [
  'World Spider Catalog 接受 Theraphosa blondi，并把它列为巨人捕鸟蛛属模式种。',
  '身体长度最高约 12 厘米，机构资料腿展最高约 28 厘米；两者使用不同量法。',
  '170 克只是一只两岁圈养个体的 Guinness 纪录，原始称量报告和活体状态未公开，不能代表野外或典型成年质量。',
  '日常食物以陆生无脊椎动物为主；已知捕鸟记录中的鸟先困在雾网中，不代表经常主动捕鸟。',
  '后足擦过腹部使带倒刺刚毛进入空气，准确说法是扬起或释放，不是把毛射出。',
  'IUCN 尚未评估本种，CITES 当期附录也未收录；全球种群趋势未知。',
],
tags: [
  '可能是质量最大的蜘蛛',
  '穴居捕鸟蛛',
  '主要夜行',
  '防御性刚毛',
  'IUCN 未评估',
  '种群趋势未知',
],
featuredStats: [
  {
    key: 'body-length-upper',
    label: '身体长度资料上限',
    value: '约12',
    unit: '厘米',
    note: '史密森尼机构概括，不含步足；不是普通成体均值。',
  },
  {
    key: 'reported-leg-span',
    label: '腿展资料上限',
    value: '约28',
    unit: '厘米',
    note: '完全伸展步足的跨度；不是身体长度，也不是蜘蛛腿展世界纪录的无争议归属。',
  },
  {
    key: 'captive-record-mass',
    label: '圈养个体报告质量',
    value: '170',
    unit: '克',
    note: 'Guinness 的两岁圈养个体纪录；原始称量报告、性别和活体状态未公开，不是野外或典型质量。',
  },
  {
    key: 'female-captive-longevity',
    label: '雌蛛圈养寿命概括',
    value: '可达20',
    unit: '年',
    note: '动物园人类照护资料；雄蛛约 3—6 年，不能据此推断野外平均寿命。',
  },
],
```

不建议把“50—200 枚卵”做成 featured stat。这个范围来自动物园公众资料，受母体、饲养和繁殖结果影响，且产品数字卡容易被误读为野外固定窝卵数。

## 六张 1536×1024 图像规格

### 全局科学与制作约束

- 画幅固定 `1536 × 1024`，3:2 横图，写实自然史摄影，不做插画、图解、拼贴或电影海报
- 每帧只出现一只 _Theraphosa blondi_，第五帧另有一个封闭卵囊，第六帧另有两名远处研究者；不得混入其他蜘蛛
- 主体呈深栗褐至红褐色、粗壮、密被刚毛，腹部饱满但不夸张。不能用 _T. stirmi_ 常被商品图强调的浅色膝环替代鉴定
- 必须有八条步足，分成四对；口前只能有一对较短触肢和一对向下平行运动的螯肢。无触角、翅、尾、脊椎动物牙齿或额外附肢
- 不画圆网、飞射的长针状刚毛、毒液喷雾、火焰、骷髅、血迹、猎鸟场景、文字、数字、标尺、徽标、水印、边框或分屏
- 至少留 5% 裁切安全边，足端不贴边；除第二帧近景外，整只蜘蛛必须完整入镜
- 所有 caption 明确“代表性重建”，不声称真实地点、个体、事件、样本或结果

### 01 · `burrow-entrance-portrait`

**用途：** 封面，穴居与主体形态。

**精确 prompt：**

> 1536×1024, 3:2 horizontal, photorealistic restrained natural-history editorial photograph in a humid lowland rainforest of the Guiana Shield at dusk. Exactly one complete adult female Goliath birdeater, Theraphosa blondi, stands calmly just outside one silk-lined earthen burrow beneath buttress roots and damp fallen leaves. Robust dark chestnut-brown shaggy body, realistic matte setae, eight walking legs in four pairs, exactly two shorter pedipalps, downward parallel chelicerae mostly concealed, no pale decorative knee bands, no extra limbs. Place the spider in the central-right safe area facing slightly left; preserve calm darker forest-floor negative space across the left 35 percent for title copy. Show silk only as a thin irregular lining around the burrow mouth, never an orb web. Natural diffuse low light, moist soil, roots, leaf litter, no prey, no people, no other animals, no aggression. Full feet visible with generous crop-safe margins. No text, logo, watermark, border, collage, fantasy scale, gore, antennae, wings or tail.

**逐帧 acceptance：**

- 恰好一只完整蜘蛛、八条步足和两条较短触肢，足端均未裁切
- 洞口只有不规则衬丝，不出现圆网
- 主体在中央偏右、左侧保留约 35% 安静负空间
- 林下湿润而非开阔沼泽；无猎物、人物和其他动物
- 不以尺子或夸张参照物暗示纪录体型

### 02 · `eye-cluster-and-pedipalps`

**用途：** 眼簇、触肢与螯肢的近景形态。

**精确 prompt：**

> 1536×1024, 3:2 horizontal, photorealistic museum-quality macro natural-history photograph of the front half of exactly one living Theraphosa blondi on damp rainforest soil. Low oblique frontal view centered on the carapace: a compact cluster of eight small simple eyes on the modest ocular tubercle, exactly two short tactile pedipalps flanking the mouth, and two robust downward-pointing parallel chelicerae partly visible. Deliberately crop through walking legs near the side and lower edges; show only proximal portions of the first two pairs and make no claim that all eight legs are visible. Dark russet-brown dense natural setae, no mammal-like eyelashes, no compound eyes, no antennae, no extra palps. Shallow depth of field but the eye cluster, both pedipalps and chelicerae are sharp. Damp soil and one blurred decaying leaf only. Calm posture, no exposed dripping venom, no threat display, no text, arrows, labels, logo, watermark, border or collage.

**逐帧 acceptance：**

- 眼簇由八枚小型单眼构成，不出现两只巨大复眼或昆虫式复眼
- 恰好两只触肢，明显短于步足；不把触肢当第五对腿
- 两枚螯肢向下且近平行，不画成左右横咬的大颚
- 明确采用前半身近裁切，不声称可数清八足；无触角和外露毒液滴
- 宏观近景仍是一只活体，不做解剖切面或标注图

### 03 · `nocturnal-invertebrate-approach`

**用途：** 夜间洞口伏击与常见食物边界。

**精确 prompt：**

> 1536×1024, 3:2 horizontal, photorealistic nocturnal rainforest-floor natural-history photograph. Exactly one adult Theraphosa blondi detects and slowly approaches exactly one large ground-dwelling forest cricket or katydid across damp leaf litter beside a distant dark burrow entrance. The spider has one coherent robust dark chestnut-brown setose body and exactly two shorter pedipalps; some rear leg segments may be naturally hidden by leaves, but there are no duplicated or detached limbs. Freeze the moment before contact: no bite, no gore, no prey wrapped in silk, no chase. The orthopteran remains several body lengths ahead, clearly smaller than the spider, intact, with six legs and two antennae; no bird, frog, snake, mouse or second arthropod. Subtle moonlit blue ambient light plus warm reflected forest tones, no flashlight spotlight. Roots, decaying wood and leaf litter, no orb web, no people, no text, logo, watermark, border or collage.

**逐帧 acceptance：**

- 恰好一只蜘蛛与一只直翅目昆虫；昆虫六足、两触角，和蜘蛛保持间隔
- 捕食发生在洞口附近，停在接触前，无血、咬击或缠丝
- 不出现鸟、鼠、蛙、蛇，避免把机会性脊椎动物塑造成主食
- 蜘蛛躯体完整，叶片只可遮住少量后足末段；不出现捕虫圆网
- 夜景仍能辨认自然色和形态，不用戏剧化红光或恐怖片视觉

### 04 · `defensive-stridulation-posture`

**用途：** 抬足、摩擦发声与刚毛防御的边界。

**精确 prompt：**

> 1536×1024, 3:2 horizontal, photorealistic field-observation photograph of exactly one complete Theraphosa blondi in a defensive warning posture on damp rainforest leaf litter near its burrow. The front body is raised and only the first pair of walking legs lifts naturally; the remaining three pairs on each side brace the body. Exactly two shorter pedipalps draw inward, and two downward chelicerae are visible. Show eight walking legs total, all anatomically connected. The pose suggests setal stridulation without graphic sound waves. Do not show projectile hairs, darts, clouds, venom spray or contact with a person. The abdomen remains intact, with no bald wound or airborne hair cloud. One spider only, no attacker, no prey, no handling tools. Restrained documentary lighting, full body within crop-safe frame, no text, logo, watermark, border or collage.

**逐帧 acceptance：**

- 恰好一只完整蜘蛛，四对步足可核对；抬起的仍计入八足
- 两只触肢不被画成额外步足，螯肢向下
- 姿态表达警戒，不出现人手、捕食者或“主动追击”
- 无毛针、发射轨迹、巨大粉尘云、声波线或毒液喷雾
- 画面可支持“可能摩擦发声”，但不声称静态画面记录了声音

### 05 · `female-guarding-egg-sac`

**用途：** 雌蛛守护封闭卵囊与刚毛掺入丝层。

**精确 prompt：**

> 1536×1024, 3:2 horizontal, photorealistic intimate natural-history photograph inside a silk-lined earthen burrow. Exactly one adult female Theraphosa blondi crouches protectively beside exactly one closed spherical off-white silk egg sac and touches its edge with exactly two shorter pedipalps. The female has one coherent robust dark chestnut-brown setose body; six walking legs are clearly separated while the rear pair may continue naturally into shadow behind the body rather than being duplicated. The egg sac surface is opaque, irregular fine silk with subtle short embedded brown abdominal setae, not a transparent membrane. No visible eggs, embryos or spiderlings; no male, no second sac. Damp compact soil walls, sparse lining silk, soft indirect light, calm posture, no handling, no container, no text, logo, watermark, border or collage. The body and sac remain fully inside safe margins.

**逐帧 acceptance：**

- 恰好一只成年雌蛛和一个完整封闭卵囊
- 卵囊不透明；无可见卵、幼蛛、雄蛛或第二个卵囊
- 细短刚毛掺在丝层表面，不画成刺针或厚毛皮
- 两只触肢清楚；至少六足分离，后足可自然延入阴影但不得复制或脱离身体
- 场景位于衬丝土穴内，不出现饲养箱、手或镊子

### 06 · `noninvasive-burrow-survey`

**用途：** 非接触调查与“趋势未知”。

**精确 prompt：**

> 1536×1024, 3:2 horizontal, photorealistic documentary night survey in humid Guiana Shield rainforest. Exactly one adult Theraphosa blondi remains at one burrow entrance in the lower-right foreground, its coherent hairy body and several legs readable while exact anatomy is secondary at this distance. Exactly two trained field researchers remain several meters away in the upper-left background: one kneels on a firm path using a camera with a moderate telephoto macro lens, while the other records with one unbranded GPS receiver and one plain waterproof clipboard. Their dim red headlamps point at the ground; neither touches the animal. No trap, bait, ruler, PIT tag, forceps, specimen jar, capture bag or handling. The spider is calm and naturally small relative to people and habitat. Damp leaf litter, roots, low red survey light with natural darkness, no other animals, no text, data overlay, logo, watermark, border or collage.

**逐帧 acceptance：**

- 恰好一只蜘蛛、两名研究者、一个记录载体；人与蛛保持明显距离
- 无触摸、捕捉、诱饵、陷阱、标记或精确测量暗示
- 蜘蛛躯体完整且尺度自然；距离使附肢计数次要，不能把它画成巨兽
- 红光强度低，仍保留自然林下环境
- caption 明说单次代表性访问不能建立种群趋势

### 运行时媒体字段建议

```ts
media: {
  image: './images/species/goliath-birdeater/01-burrow-entrance-portrait.webp',
  alt: '湿润雨林树根下，一只完整成年雌性巨人捕鸟蛛停在衬丝土穴入口右侧',
  focalPoint: { x: 0.68, y: 0.58 },
  credit: 'Fauna Atlas · AI 生成原创图像',
  gallery: [
    {
      image: './images/species/goliath-birdeater/02-eye-cluster-and-pedipalps.webp',
      alt: '一只巨人捕鸟蛛的低角度近景，八枚小眼组成眼簇，两只较短触肢位于向下螯肢两侧',
      title: '八只小眼与两只触肢',
      caption: '形态重建展示眼簇、触肢和螯肢关系；它不代表视力测试或指定个体。',
      focalPoint: { x: 0.5, y: 0.48 },
    },
    {
      image: './images/species/goliath-birdeater/03-nocturnal-invertebrate-approach.webp',
      alt: '夜间一只巨人捕鸟蛛在洞口外接近一只地栖直翅目昆虫，双方尚未接触',
      title: '洞口的夜间伏击',
      caption: '画面选择无脊椎动物作为常见猎物代表，不提供自然食谱比例或一次真实捕食结果。',
      focalPoint: { x: 0.56, y: 0.6 },
    },
    {
      image: './images/species/goliath-birdeater/04-defensive-stridulation-posture.webp',
      alt: '一只完整巨人捕鸟蛛在洞口旁抬起前足作警戒姿态，没有接触者或飞射刚毛',
      title: '警戒姿态与刚毛摩擦',
      caption: '静态画面重建可伴随摩擦发声的姿态；它没有记录声音、咬击或刚毛释放结果。',
      focalPoint: { x: 0.5, y: 0.57 },
    },
    {
      image: './images/species/goliath-birdeater/05-female-guarding-egg-sac.webp',
      alt: '衬丝土穴内一只完整成年雌性巨人捕鸟蛛守在一个封闭球形丝质卵囊旁',
      title: '洞内守护卵囊',
      caption: '卵囊表层可掺入腹部刚毛；画面不提供卵数、发育阶段、孵化率或野外时长。',
      focalPoint: { x: 0.52, y: 0.56 },
    },
    {
      image: './images/species/goliath-birdeater/06-noninvasive-burrow-survey.webp',
      alt: '夜间一只完整巨人捕鸟蛛位于洞口前景，两名研究者在数米外以低亮红光观察和记录',
      title: '保持距离的洞穴调查',
      caption: '代表性非接触调查重建；单次访问不能确定占用率、数量或种群趋势。',
      focalPoint: { x: 0.4, y: 0.65 },
    },
  ],
},
```

## `sources` 数据草案

共 22 条。IUCN 与 CITES 条目用于证明“官方检索无评估/无附录”，不是用缺失结果推断安全；博物馆和动物园条目只承载公众体尺、感知、圈养寿命和繁殖概括。

```ts
const GOLIATH_BIRDEATER_CONTENT_DATE = '2026-08-28' as const;
const GOLIATH_BIRDEATER_SOURCE_DATE = '2026-08-28' as const;

const GOLIATH_BIRDEATER_SOURCES: readonly SpeciesSource[] = [
  {
    title: 'World Spider Catalog — Theraphosa blondi (Latreille, 1804)',
    url: 'https://wsc.nmbe.ch/lsid/urn:lsid:nmbe.ch:spidersp:002488',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'World Spider Catalog — genus Theraphosa Walckenaer, 1805',
    url: 'https://www.wsc.nmbe.ch/genus-catalog/3612/Theraphosa',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'ITIS — Theraphosa blondi, TSN 868632',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=868632',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy — Theraphosa blondi, species key 5170451',
    url: 'https://www.gbif.org/species/5170451',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search — Theraphosa blondi (no assessment returned)',
    url: 'https://www.iucnredlist.org/search?query=Theraphosa%20blondi&searchType=species',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: "Smithsonian's National Zoo — Goliath bird-eating tarantula",
    url: 'https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum — The world’s most extreme spiders',
    url: 'https://www.nhm.ac.uk/discover/the-worlds-most-extreme-spiders.html',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Mammola et al. 2017 — Record breaking achievements by spiders and the scientists who study them',
    url: 'https://doi.org/10.7717/peerj.3972',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Guinness World Records — Heaviest arachnid',
    url: 'https://www.guinnessworldrecords.com/world-records/498536-heaviest-arachnid',
    kind: 'general',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Marshall & Uetz 1990 — Incorporation of urticating hairs into silk',
    url: 'https://www.americanarachnology.org/journal-joa/joa-all-volumes/detail/article/download/JoA_v18_p143.pdf/?no_cache=1',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Marshall, Thoms & Uetz 1995 — Setal entanglement and stridulation in Theraphosa blondi',
    url: 'https://doi.org/10.1111/j.1469-7998.1995.tb01770.x',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Bertani & Guadanucci 2013 — Morphology and evolution of urticating setae in theraphosids',
    url: 'https://doi.org/10.1590/S1984-46702013000400006',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Kaderka et al. 2019 — Urticating setae of Theraphosinae',
    url: 'https://doi.org/10.1371/journal.pone.0224384',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Fontana et al. 2002 — Neuromuscular activity of Theraphosa blondi venom',
    url: 'https://doi.org/10.1590/S0104-79302002000200010',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Ebbinghaus et al. 2004 — Modulation of Kv4.2 channels by Theraphosa blondi venom peptides',
    url: 'https://doi.org/10.1016/j.toxicon.2003.12.012',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Menin et al. 2005 — Predation on amphibians by spiders in the Neotropical region',
    url: 'https://doi.org/10.11606/issn.2316-9079.v4i1p39-47',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Bilce et al. 2021 — Predation on juvenile Drymoluber dichrous by Theraphosa blondi',
    url: 'https://www.biotaxa.org/hn/article/view/62475',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Carvalho et al. 2016 — Opportunistic predation on a Common Scale-backed Antbird',
    url: 'https://doi.org/10.1080/01650521.2016.1237802',
    kind: 'ecology',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'Marshall et al. 2022 — Searching the web builds fuller picture of arachnid trade',
    url: 'https://doi.org/10.1038/s42003-022-03374-0',
    kind: 'conservation',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
  {
    title: 'GBIF Species Match API — Theraphosa blondi accepted backbone match',
    url: 'https://api.gbif.org/v1/species/match?name=Theraphosa%20blondi',
    kind: 'taxonomy',
    accessedAt: GOLIATH_BIRDEATER_SOURCE_DATE,
  },
];
```

### 来源的使用边界

| 来源 | 能支持 | 不能支持 |
| --- | --- | --- |
| WSC / ITIS / GBIF | 接受学名、分类路径、目录分布 | 野外数量、保护等级、所有历史记录都鉴定正确 |
| IUCN 官方检索 | 截至核验日没有可见评估 | 低风险、安全、稳定或不受威胁 |
| CITES 附录与 Checklist | 当期没有附录条目 | 国内法规、贸易规模、种群安全 |
| Smithsonian / NHM | 公众体尺、基本形态、圈养寿命与繁殖概括 | 野外均值、原始纪录元数据、全球趋势 |
| Guinness + Mammola et al. | 两岁圈养个体 170 g 的官方纪录条目，以及 28 cm 腿展的同行评审综述边界 | 原始称量报告、称量时活体状态、野外上限或典型成年质量 |
| Marshall & Uetz | 刚毛释放机制、卵囊掺毛、法属圭亚那材料 | 全范围行为频率、对所有捕食者的功能效果 |
| 毒液论文 | 离体组织和细胞通道活性 | 人体致死性、临床严重程度、咬伤发生率 |
| 三项取食记录 | 蛙、小蛇、受困鸟可以被取食 | 食谱比例、专门猎鸟、追捕健康成鸟 |
| 全球贸易研究 | 蛛形纲贸易的规模和追溯缺口 | _T. blondi_ 野采量、下降率或威胁排序 |

## 最终 `Species` 对象草案

以下草案可直接按仓库 helper 调整。腿展只进入展示数字，不借用 `wingspan` 字段；`170 g` 保留在 `measurements.weight` 时必须连同纪录限定展示。若现有页面隐藏 measurement note，应删除结构化 weight，只在 `featuredStats` 保留。

```ts
{
  id: 'species-theraphosa-blondi',
  slug: 'goliath-birdeater',
  names: {
    zh: '巨人捕鸟蛛',
    en: 'Goliath Birdeater',
    aliases: [
      '歌利亚捕鸟蛛',
      'Goliath Bird-eating Tarantula',
      'Goliath Tarantula',
      'Theraphosa leblondi',
    ],
  },
  scientificName: 'Theraphosa blondi',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Arachnida', '蛛形纲'),
    taxon('Araneae', '蜘蛛目'),
    taxon('Theraphosidae', '捕鸟蛛科'),
    taxon('Theraphosa', '巨人捕鸟蛛属'),
  ),
  conservation: conservation('NE', 'unknown'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['南美洲'],
    regions: [
      '委内瑞拉南部',
      '巴西北部',
      '圭亚那',
      '法属圭亚那',
    ],
    countries: ['委内瑞拉', '巴西', '圭亚那', '法国'],
    range:
      '南美洲北部圭亚那地盾与北亚马孙的湿润低地森林。WSC 当前明确列出委内瑞拉、巴西和圭亚那；法属圭亚那有物种级野外研究，苏里南见于史密森尼范围概括，但后者需防范同属种误鉴。地图中心只用于范围视图，不代表采集点。',
    center: { lat: 4.5, lng: -59 },
  },
  habitats: [
    {
      name: '低地湿润常绿林地表与穴居系统',
      realm: 'terrestrial',
      description:
        '圭亚那地盾和北亚马孙高湿、遮荫的森林地表；个体以衬丝土穴为避难、蜕皮和洞口伏击中心。',
      isPrimary: true,
    },
    {
      name: '树根、岩石和倒木下的衬丝土穴',
      realm: 'terrestrial',
      description:
        '洞穴常借树根、岩石或倒木获得稳定结构，蛛丝主要衬在洞内和洞口，不形成圆形捕虫网。',
    },
    {
      name: '厚落叶层与腐木斑块',
      realm: 'terrestrial',
      description:
        '潮湿落叶、根系和朽木构成洞口外短距离的夜间感知与伏击界面。',
    },
    {
      name: '湿洼地与季节性饱和森林土壤',
      realm: 'terrestrial',
      description:
        '部分范围概括提到潮湿、近沼泽的林下微地形；这不表示本种水生、半水生或专栖开阔沼泽。',
    },
  ],
  measurements: {
    length: {
      max: 12,
      unit: 'cm',
      note: '机构资料的身体长度上限，不含步足；不是腿展或普通成体均值。',
    },
    weight: {
      max: 170,
      unit: 'g',
      note: 'Guinness 记录的一只两岁圈养个体质量；未公开原始称量报告、性别、误差和称量时活体状态，不代表野外或典型成体上限。',
    },
  },
  diet: {
    types: ['carnivore', 'insectivore'],
    foods: [
      '大型昆虫及其他陆生节肢动物',
      '蚯蚓等软体无脊椎动物',
      '蛙类与小型蛇类等机会性脊椎动物',
    ],
    description:
      '在洞口和森林地表伏击活动猎物。自然史记录支持以无脊椎动物为常见食物，也记录到蛙类和小蛇；鸟类记录属于雾网困鸟事件，不能据此把鸟列为常规食物。',
  },
  activity: ['主要夜行', '穴居', '洞口伏击', '独居', '非结网捕食'],
  tags: [
    '可能是质量最大的蜘蛛',
    '穴居捕鸟蛛',
    '主要夜行',
    '防御性刚毛',
    'IUCN 未评估',
    '种群趋势未知',
  ],
  summary:
    '栖息在南美洲北部湿润雨林土穴中的大型捕鸟蛛，可能保持蜘蛛质量纪录，却不以鸟为日常食物；防御靠刚毛、摩擦声和近距离咬击。',
  description:
    '巨人捕鸟蛛是捕鸟蛛科巨人捕鸟蛛属的模式种，分布核心位于圭亚那地盾和北亚马孙湿润低地森林。它身体可达约 12 厘米、腿展约 28 厘米；常被引用的 170 克来自一只两岁圈养个体的 Guinness 纪录，不能代表野外常态。个体多在衬丝土穴内外夜间伏击无脊椎动物，也会机会性取食蛙和小蛇；已知捕鸟记录涉及先被雾网困住的鸟。受压时，它可摩擦刚毛发声，并以后足扬起腹部带倒刺刚毛，而不是把毛射出。毒液在离体实验中具有神经活性，但没有物种级临床证据支持“致命剧毒”。IUCN 尚未评估本种，CITES 当期附录也未收录，全球种群趋势仍未知。',
  storySections: [
    {
      key: 'mass-record-boundary',
      label: '体型与纪录',
      title: '170 克，只属于一只圈养纪录个体',
      body:
        '身体长度、腿展和质量回答三件不同的事。机构资料给出身体约 12 厘米、腿展约 28 厘米；Guinness 另记录一只两岁圈养个体重 170 克，却没有公开原始称量报告、性别或称量时活体状态。它支持“可能最重”，不支持“腿展最大”，更不能代表每只成年蛛。',
    },
    {
      key: 'burrow-vibration-night',
      label: '穴居与感知',
      title: '洞口之外，振动先抵达身体',
      body:
        '巨人捕鸟蛛把蛛丝铺在湿润土穴内外，不织圆网。夜间的地面振动和空气扰动由足和体表感觉毛接收，有限视觉只提供部分信息。它多在洞口短距离伏击，而不是在森林里长途追赶猎物。',
    },
    {
      key: 'prey-not-birds',
      label: '食性与俗名',
      title: '捕鸟是可能事件，不是日常菜单',
      body:
        '无脊椎动物构成可确认的常见猎物，蛙和小蛇记录显示它也会利用机会性脊椎动物。一只蚁鸟被取食前已困在研究雾网中；这条记录解释了大型蛛能处理鸟，却不能证明它经常主动捕鸟。',
    },
    {
      key: 'setae-sound-venom',
      label: '防御机制',
      title: '后足扬毛、刚毛摩擦和最后的咬击',
      body:
        '受压时，它可抬起前足、摩擦刚毛产生嘶声，再用后足擦过腹部，使带倒刺的刚毛进入空气。刚毛不是被“射出”。毒液在小鼠离体组织和离子通道实验中有活性，但这些结果不能转换成人类致死结论。',
    },
    {
      key: 'egg-sac-and-growth',
      label: '繁殖与发育',
      title: '一只封闭卵囊，裹着母蛛的刚毛',
      body:
        '雌蛛在洞内制作丝质卵囊，并把腹部刚毛掺入外层。圈养观察记录守护约 11 周，幼蛛再经反复蜕皮生长；卵数、孵化时间和寿命都受性别与饲养条件影响，不能当作野外固定日程。',
    },
    {
      key: 'unknown-status',
      label: '保护与证据缺口',
      title: '未评估不是无风险',
      body:
        'IUCN 没有本种评估，CITES 当期附录也没有本种条目，全球趋势仍然未知。下一步不是猜一个等级，而是用凭证标本确认分布、重复调查洞穴占用，并让贸易来源和人工繁殖声明可以追溯。',
    },
  ],
  keyFacts: [
    'World Spider Catalog 接受 Theraphosa blondi，并把它列为巨人捕鸟蛛属模式种。',
    '身体长度最高约 12 厘米，机构资料腿展最高约 28 厘米；两者使用不同量法。',
    '170 克只是一只两岁圈养个体的 Guinness 纪录，原始称量报告和活体状态未公开，不能代表野外或典型成年质量。',
    '日常食物以陆生无脊椎动物为主；已知捕鸟记录中的鸟先困在雾网中，不代表经常主动捕鸟。',
    '后足擦过腹部使带倒刺刚毛进入空气，准确说法是扬起或释放，不是把毛射出。',
    'IUCN 尚未评估本种，CITES 当期附录也未收录；全球种群趋势未知。',
  ],
  threats: [
    '低地湿润森林转化和破碎化可能减少高湿林下开穴微生境，但没有本种尺度的损失比例',
    '宠物市场中的野采与来源不透明值得监测，现有研究没有给出本种野采量或种群效应',
    '大型、寿命长且穴居的个体容易被定点采集，但全球采集率未知',
    '巨人捕鸟蛛属物种误鉴会污染贸易、馆藏和分布记录',
    '道路、矿业或林地开发可能改变土壤湿度、根系和洞穴稳定性，物种级暴露程度未知',
    '气候变化可能改变林下湿度和降雨季节性，尚无物种级响应模型',
  ],
  conservationActions: [
    '在分布核心开展有凭证标本支持的标准化洞穴和夜间样线调查',
    '同步记录搜索时间、未检出、性别、发育阶段、洞穴占用和季节',
    '结合成体形态、刚毛分布和必要的分子证据区分巨人捕鸟蛛属近似种',
    '保护连续湿润林下层、粗大根系、倒木和稳定土壤',
    '保存贸易个体的合法来源、繁殖代次、亲本来源和鉴定凭证',
    '公开范围边缘与历史记录的凭证图像或标本号，清理误鉴记录',
    '以确认物种的病例记录补足刚毛接触和咬伤临床证据',
    '定期复核 IUCN、CITES、分布、贸易和种群资料，不把未评估当成低风险',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'body-length-upper',
      label: '身体长度资料上限',
      value: '约12',
      unit: '厘米',
      note: '史密森尼机构概括，不含步足；不是普通成体均值。',
    },
    {
      key: 'reported-leg-span',
      label: '腿展资料上限',
      value: '约28',
      unit: '厘米',
      note: '完全伸展步足的跨度；不是身体长度，也不是无争议的蜘蛛腿展世界纪录。',
    },
    {
      key: 'captive-record-mass',
      label: '圈养个体报告质量',
      value: '170',
      unit: '克',
      note: 'Guinness 的两岁圈养个体纪录；原始称量报告、性别和活体状态未公开，不是野外或典型质量。',
    },
    {
      key: 'female-captive-longevity',
      label: '雌蛛圈养寿命概括',
      value: '可达20',
      unit: '年',
      note: '动物园人类照护资料；雄蛛约 3—6 年，不能据此推断野外平均寿命。',
    },
  ],
  media: {
    image: './images/species/goliath-birdeater/01-burrow-entrance-portrait.webp',
    alt: '湿润雨林树根下，一只完整成年雌性巨人捕鸟蛛停在衬丝土穴入口右侧',
    focalPoint: { x: 0.68, y: 0.58 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/goliath-birdeater/02-eye-cluster-and-pedipalps.webp',
        alt: '一只巨人捕鸟蛛的低角度近景，八枚小眼组成眼簇，两只较短触肢位于向下螯肢两侧',
        title: '八只小眼与两只触肢',
        caption: '形态重建展示眼簇、触肢和螯肢关系；它不代表视力测试或指定个体。',
        focalPoint: { x: 0.5, y: 0.48 },
      },
      {
        image: './images/species/goliath-birdeater/03-nocturnal-invertebrate-approach.webp',
        alt: '夜间一只巨人捕鸟蛛在洞口外接近一只地栖直翅目昆虫，双方尚未接触',
        title: '洞口的夜间伏击',
        caption: '画面选择无脊椎动物作为常见猎物代表，不提供自然食谱比例或真实捕食结果。',
        focalPoint: { x: 0.56, y: 0.6 },
      },
      {
        image: './images/species/goliath-birdeater/04-defensive-stridulation-posture.webp',
        alt: '一只完整巨人捕鸟蛛在洞口旁抬起前足作警戒姿态，没有接触者或飞射刚毛',
        title: '警戒姿态与刚毛摩擦',
        caption: '静态画面重建可伴随摩擦发声的姿态；它没有记录声音、咬击或刚毛释放结果。',
        focalPoint: { x: 0.5, y: 0.57 },
      },
      {
        image: './images/species/goliath-birdeater/05-female-guarding-egg-sac.webp',
        alt: '衬丝土穴内一只完整成年雌性巨人捕鸟蛛守在一个封闭球形丝质卵囊旁',
        title: '洞内守护卵囊',
        caption: '卵囊表层可掺入腹部刚毛；画面不提供卵数、发育阶段、孵化率或野外时长。',
        focalPoint: { x: 0.52, y: 0.56 },
      },
      {
        image: './images/species/goliath-birdeater/06-noninvasive-burrow-survey.webp',
        alt: '夜间一只完整巨人捕鸟蛛位于洞口前景，两名研究者在数米外以低亮红光观察和记录',
        title: '保持距离的洞穴调查',
        caption: '代表性非接触调查重建；单次访问不能确定占用率、数量或种群趋势。',
        focalPoint: { x: 0.4, y: 0.65 },
      },
    ],
  },
  sources: GOLIATH_BIRDEATER_SOURCES,
  featured: true,
  publishedAt: GOLIATH_BIRDEATER_CONTENT_DATE,
  updatedAt: GOLIATH_BIRDEATER_CONTENT_DATE,
},
```

## 测试断言建议

### 身份与分类

```js
const goliathBirdeater = findSpecies('goliath-birdeater');
assert.equal(goliathBirdeater.id, 'species-theraphosa-blondi');
assert.equal(goliathBirdeater.names.zh, '巨人捕鸟蛛');
assert.equal(goliathBirdeater.names.en, 'Goliath Birdeater');
assert.equal(goliathBirdeater.scientificName, 'Theraphosa blondi');
assert.deepEqual(
  getSpeciesTaxonomyPath(goliathBirdeater).map(({ rank, taxon }) => [
    rank,
    taxon.scientificName,
    taxon.zhName,
  ]),
  [
    ['kingdom', 'Animalia', '动物界'],
    ['phylum', 'Arthropoda', '节肢动物门'],
    ['class', 'Arachnida', '蛛形纲'],
    ['order', 'Araneae', '蜘蛛目'],
    ['family', 'Theraphosidae', '捕鸟蛛科'],
    ['genus', 'Theraphosa', '巨人捕鸟蛛属'],
  ],
);
```

### 保护状态、分布和生境

```js
assert.deepEqual(
  {
    code: goliathBirdeater.conservation.code,
    trend: goliathBirdeater.conservation.trend,
    assessedYear: goliathBirdeater.conservation.assessedYear,
    criteria: goliathBirdeater.conservation.criteria,
  },
  { code: 'NE', trend: 'unknown', assessedYear: undefined, criteria: undefined },
);
assert.deepEqual(goliathBirdeater.distribution.realms, ['terrestrial']);
assert.deepEqual(goliathBirdeater.distribution.continents, ['南美洲']);
assert.deepEqual(goliathBirdeater.distribution.center, { lat: 4.5, lng: -59 });
assert.ok(goliathBirdeater.distribution.countries.includes('圭亚那'));
assert.ok(goliathBirdeater.distribution.regions.includes('法属圭亚那'));
assert.equal(goliathBirdeater.habitats.length, 4);
assert.equal(goliathBirdeater.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
assert.ok(goliathBirdeater.habitats.every(({ realm }) => realm === 'terrestrial'));
```

### 体尺和纪录边界

```js
assert.deepEqual(
  { max: goliathBirdeater.measurements.length?.max, unit: goliathBirdeater.measurements.length?.unit },
  { max: 12, unit: 'cm' },
);
assert.match(goliathBirdeater.measurements.length?.note ?? '', /身体|不含步足|不是腿展/);
assert.deepEqual(
  { max: goliathBirdeater.measurements.weight?.max, unit: goliathBirdeater.measurements.weight?.unit },
  { max: 170, unit: 'g' },
);
assert.match(goliathBirdeater.measurements.weight?.note ?? '', /圈养|原始称量|不代表/);
assert.equal(goliathBirdeater.measurements.wingspan, undefined);
assert.deepEqual(goliathBirdeater.metrics, {});
assert.ok(!('adultMassKg' in goliathBirdeater.metrics));
assert.ok(!('wingspanCm' in goliathBirdeater.metrics));
assert.deepEqual(
  goliathBirdeater.featuredStats.map(({ key }) => key),
  ['body-length-upper', 'reported-leg-span', 'captive-record-mass', 'female-captive-longevity'],
);
```

### 食性、误区与正文守卫

```js
assert.deepEqual(goliathBirdeater.diet.types, ['carnivore', 'insectivore']);
assert.ok(!goliathBirdeater.diet.foods.some((food) => /鸟/.test(food)));

const editorialText = [
  goliathBirdeater.summary,
  goliathBirdeater.description,
  goliathBirdeater.distribution.range,
  ...goliathBirdeater.habitats.flatMap(({ name, description }) => [name, description]),
  goliathBirdeater.measurements.length?.note ?? '',
  goliathBirdeater.measurements.weight?.note ?? '',
  goliathBirdeater.diet.description,
  ...(goliathBirdeater.storySections ?? []).flatMap(({ label, title, body }) => [label, title, body]),
  ...goliathBirdeater.keyFacts,
  ...goliathBirdeater.threats,
  ...goliathBirdeater.conservationActions,
  ...goliathBirdeater.featuredStats.flatMap(({ label, value, unit, note }) => [
    label,
    value,
    unit ?? '',
    note ?? '',
  ]),
].join('\n');

assert.match(editorialText, /可能.*质量/);
assert.match(editorialText, /两岁.*圈养|圈养.*两岁/);
assert.match(editorialText, /170/);
assert.match(editorialText, /原始称量.*未公开|未公开.*原始称量/);
assert.match(editorialText, /雾网/);
assert.match(editorialText, /不.*常规|不.*日常/);
assert.match(editorialText, /后足/);
assert.match(editorialText, /擦过腹部/);
assert.match(editorialText, /扬起|释放/);
assert.match(editorialText, /离体/);
assert.match(editorialText, /不能.*人体|不.*致命/);
assert.match(editorialText, /未评估/);
assert.match(editorialText, /趋势.*未知/);
assert.doesNotMatch(editorialText, /世界最大蜘蛛|腿展冠军|野外活体.*170|平均.*170/);
assert.doesNotMatch(
  editorialText,
  /以鸟为主食|常规食物.*鸟|会射毛|把.*刚毛发射|拥有致命剧毒|毒液致命/,
);
```

### 故事、媒体与来源

```js
assert.equal(goliathBirdeater.storySections?.length, 6);
assert.equal(new Set(goliathBirdeater.storySections?.map(({ key }) => key)).size, 6);
assert.equal(goliathBirdeater.keyFacts.length, 6);
assert.equal(goliathBirdeater.featuredStats.length, 4);
assert.equal(goliathBirdeater.media.gallery?.length, 5);

const mediaPaths = [
  goliathBirdeater.media.image,
  ...goliathBirdeater.media.gallery.map(({ image }) => image),
];
assert.deepEqual(mediaPaths, [
  './images/species/goliath-birdeater/01-burrow-entrance-portrait.webp',
  './images/species/goliath-birdeater/02-eye-cluster-and-pedipalps.webp',
  './images/species/goliath-birdeater/03-nocturnal-invertebrate-approach.webp',
  './images/species/goliath-birdeater/04-defensive-stridulation-posture.webp',
  './images/species/goliath-birdeater/05-female-guarding-egg-sac.webp',
  './images/species/goliath-birdeater/06-noninvasive-burrow-survey.webp',
]);
assert.equal(new Set(mediaPaths).size, 6);
assert.ok(!goliathBirdeater.media.gallery.some(({ image }) => image === goliathBirdeater.media.image));

assert.equal(goliathBirdeater.sources.length, 22);
assert.equal(new Set(goliathBirdeater.sources.map(({ url }) => url)).size, 22);
assert.ok(goliathBirdeater.sources.every(({ url }) => URL.canParse(url)));
assert.ok(goliathBirdeater.sources.every(({ url }) => url.startsWith('https://')));
assert.ok(goliathBirdeater.sources.every(({ accessedAt }) => accessedAt === '2026-08-28'));
assert.deepEqual(
  new Set(goliathBirdeater.sources.map(({ kind }) => kind)),
  new Set(['taxonomy', 'conservation', 'ecology', 'general']),
);
assert.equal(goliathBirdeater.featured, true);
assert.equal(goliathBirdeater.publishedAt, '2026-08-28');
assert.equal(goliathBirdeater.updatedAt, '2026-08-28');
```

### 分类树和 TODO 汇总

新增后仓库应有 64 个物种。相对新增前，Animalia 与 Arthropoda 后代物种数各加 1；Arachnida、Araneae、Theraphosidae 和 _Theraphosa_ 各为 1。断言应以当前主干基线重算，不从本研究稿硬编码其他门、纲或目的旧总数。

完成 TODO 时同步检查：

- `docs/todo.md` 删除“巨人捕鸟蛛”一行，而不是保留勾选项
- 物种总数从 63 改为 64，剩余 TODO 从 15 改为 14
- 分类概览新增“蛛形纲 1 种”，节肢动物门总数相应加 1
- 首页或筛选入口能通过 `goliath-birdeater` 找到档案

## 发布前最终口径清单

- [ ] 接受学名写 _Theraphosa blondi_，旧名只放 aliases 或来源标题
- [ ] 170 g 每次出现都带“两岁圈养单体、原始称量报告和活体状态未公开、非典型”边界
- [ ] 28 cm 写腿展，不写翼展；不宣称本种是腿展冠军
- [ ] `foods` 不列鸟；正文说明雾网困鸟事件
- [ ] 防御写后足擦落并扬起刚毛，不写“射毛”
- [ ] 毒液只写离体和通道实验，不写致命或无害
- [ ] IUCN 写 `NE / unknown`，无评估年和准则
- [ ] CITES 写“当期附录未列”，不把缺席解释为安全
- [ ] 威胁与行动明确区分“值得监测”和“已证明导致下降”
- [ ] 六图均为 1536×1024，逐帧满足数量、附肢和场景 acceptance
- [ ] 来源全部是分类/保护权威、同行评审论文或博物馆/动物园一方资料
