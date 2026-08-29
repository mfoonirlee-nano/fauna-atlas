# 巨蚯蚓（*Megascolides australis*）完整物种档案研究

- 检索与核验日期：2026-08-29
- 推荐展示中文名：**巨蚯蚓**
- 推荐展示英文名：**Giant Gippsland Earthworm**
- 当前接受名：***Megascolides australis* McCoy, 1878**
- 推荐 slug：`giant-gippsland-earthworm`
- IUCN：**EN 濒危，B1ab(iii)+2ab(iii)，种群趋势 unknown**
- 澳大利亚 EPBC Act：**VU 易危**
- 维多利亚州 FFG Act：**EN 濒危**
- 使用范围：把 `docs/todo.md` 中“巨蚯蚓 *Megascolides australis*”落实为完整 `Species` 记录、六段故事、四项 featured stats、1 张封面与 5 张详情图
- 证据标准：分类采用 Australian Faunal Directory；全球保护等级采用 IUCN；国家和州级状态采用澳大利亚与维多利亚州政府资料；形态、生活史和生态数字采用原始论文、博物馆研究及国家恢复计划

## 1. 可落库结论

*Megascolides australis* 是澳大利亚维多利亚州南部和西部吉普斯兰的狭域特有蚯蚓，也是环节动物门在本项目中的首个分类单元。Australian Faunal Directory 接受 *Megascolides australis* McCoy, 1878，分类链为 Animalia、Annelida、Clitellata、Crassiclitellata、Megascolecidae、*Megascolides*。AFD 还在纲和目之间列出 Oligochaeta 亚纲，在目和科之间列出 Megascolecida 亚目；项目六级 schema 无法容纳这两个中间阶元。[Australian Faunal Directory](https://biodiversity.org.au/afd/taxa/Megascolides_australis)

IUCN 将本种列为 EN。正式条目采用 `B1ab(iii)+2ab(iii)`，依据狭小、破碎的分布及栖息地质量持续下降。IUCN DOI 属 2014-1 发布版，澳大利亚政府 2021 年评估文件把它称作 2013 年评估；项目的 `assessedYear` 表示评估年，应填 2013，不填 2014。IUCN 条目已经超过十年，页面需要提示评估陈旧。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T13008A21416160.en)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

澳大利亚 EPBC Act 仍把本种列为 VU，维多利亚州 FFG Act 则列为 EN。三个系统评估的时间、地理和准则不同，产品不可把州级 `B1ab(i,ii,iii,iv,v)` 写进 IUCN 字段，也不可用 EPBC 的 VU 覆盖全球 IUCN EN。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)；[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

本种终生生活在地下湿润黏土的永久洞道里。成体平均约 80 厘米长、2 厘米粗和 200 克重；现代可靠资料记录可超过 1.5 米和接近 400 克。博物馆与国家恢复计划都没有找到接近旧文献“3 米”的现代标本，因此页面不使用 3 米作为最大值。[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I)；[Museums Victoria](https://collections.museumsvictoria.com.au/species/14381)；[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

它没有已知全球或澳大利亚总量。澳大利亚政府把传统范围概括为约 40,000 公顷，但实际占用斑块可小于 10 平方米；已知地点中的记录从一两只到约 800 只不等。记录数、地点数和局地密度都不能换算成全球成熟个体数。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

## 2. 名称与分类口径

### 2.1 展示名和别名

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| 中文主名 | 巨蚯蚓 | 沿用项目 TODO，短名适合列表和分类图谱 |
| 中文别名 | 吉普斯兰大蚯蚓、吉普斯兰巨蚯蚓、澳洲巨型蚯蚓 | 对官方英文名的常用中文译法；澳大利亚一手来源没有指定中文标准名 |
| 英文主名 | Giant Gippsland Earthworm | DCCEEW、维州政府、Museums Victoria 和 AFD 使用 |
| 英文别名 | Gippsland Giant Earthworm、GGE | 前者见部分澳大利亚资料，后者是科研与管理文件中的缩写 |
| 学名 | *Megascolides australis* | `scientificName` 不带命名人 |
| 完整接受名 | *Megascolides australis* McCoy, 1878 | AFD 当前接受形式，命名人不加括号 |
| slug | `giant-gippsland-earthworm` | 对齐英文官方名，避免泛化成所有巨型蚯蚓 |
| id | `species-megascolides-australis` | 沿用项目以学名生成稳定 id 的模式 |

`Karmai` 常见于地方节庆和二手资料，但本次没有找到可核验语言来源来确认它的语言归属、拼写和所指分类单元。项目暂不把它写入别名，避免把未经核实的原住民语言词汇当成正式物种名。

### 2.2 六级分类

| 阶元 | 科学名 | 建议中文名 | 依据 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | AFD |
| 门 | Annelida | 环节动物门 | AFD |
| 纲 | Clitellata | 环带纲 | AFD |
| 目 | Crassiclitellata | 厚环带目 | AFD 当前阶元；中文采用中文生物分类资料常用译名 |
| 科 | Megascolecidae | 巨蚓科 | AFD；中文采用通行译名 |
| 属 | *Megascolides* | 巨蚓属 | AFD；项目编辑译名 |

AFD 当前页面在 Clitellata 下保留 Oligochaeta 作为亚纲，并把 Megascolecida 置于 Crassiclitellata 与 Megascolecidae 之间。部分博物馆旧页面直接把 Oligochaeta 写成纲，部分旧资料把 Haplotaxida 或 Opisthopora 当作目。项目应使用 AFD 当前链，不把不同年代和不同层级拼成一条分类。[Australian Faunal Directory](https://biodiversity.org.au/afd/taxa/Megascolides_australis)；[Museums Victoria](https://collections.museumsvictoria.com.au/species/14381)

### 2.3 命名史和异名

AFD 记录 *Notoscolex gippslandicus* Fletcher, 1887 为本种异名。页面无需把异名放进公众别名数组，避免读者把它理解成英文俗名。AFD 记载模式地点为 Gippsland, Victoria，并把模式材料位置写作不明；Museums Victoria 则把馆藏 F 40135 登记为来自 Brandy Creek 的 syntype。两个数据库对模式材料状态存在差异，产品无需加入模式标本断言。[Australian Faunal Directory](https://biodiversity.org.au/afd/taxa/Megascolides_australis)；[Museums Victoria specimen F 40135](https://collections.museumsvictoria.com.au/specimens/646181)

## 3. 保护状态

### 3.1 IUCN 全球状态

推荐结构化值：

```ts
conservation: conservation(
  'EN',
  'unknown',
  2013,
  'B1ab(iii)+2ab(iii)',
),
```

口径说明：

1. IUCN 当前展示等级为 Endangered。2014.1 的状态变更表记录它从旧 VU 调整为 EN。[IUCN Red List version 2014.3, Table 7](https://cmsdocs.s3.amazonaws.com/summarystats/2014_3_Summary_Stats_Page_Documents/2014_3_RL_Stats_Table_7.pdf)
2. `B1ab(iii)+2ab(iii)` 表示本种同时依据 extent of occurrence 和 area of occupancy 的狭小范围、严重破碎或地点条件，以及栖息地面积、范围或质量持续下降达到 EN。
3. IUCN DOI 的引用版本写 2014-1，澳大利亚政府 2021 年评估明确称其为 2013 IUCN assessment。项目 schema 注释要求 `assessedYear` 写评估年，所以填 2013。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T13008A21416160.en)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)
4. IUCN 的人口趋势字段缺少可用于本项目的定量更新，建议填 `unknown`。维州 2024 Species Forecast Report 的“约 1975 年以来中度下降”属于州级模型信息，不应自动改写 IUCN 字段。[Victorian Species Forecast Report](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/forecast/15004_Giant_Gippsland_Earthworm_SpeciesReport.html)
5. 2013 年 IUCN 评估曾按五个地点理解范围。维州 2021 年评估已指出实际地点多得多，并列出至少 1,000 条 VBA 记录，其中多条来自相同一般地点。页面可提示 IUCN 评估需要更新，不应继续把“五个地点”写成当前事实。[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

### 3.2 澳大利亚和维多利亚州

| 系统 | 当前状态 | 准则或说明 | 产品处理 |
| --- | --- | --- | --- |
| EPBC Act 1999 | Vulnerable | 澳大利亚国家法定名录 | 写入 tags、description 和 keyFacts，不覆盖 IUCN 字段 |
| FFG Act 1988 | Endangered | 4.1.2(a), (b)(i,ii,iii,iv,v)，对应 IUCN B1ab(i,ii,iii,iv,v) | 写入 tags、threats 和保护故事 |
| CITES | Not listed | Museums Victoria 当前物种页记录未列入 | 可作边界说明，不必成为主要标签 |

维州准则判断本种分布高度受限、种群或栖息地严重破碎，并认为 EOO、AOO、栖息地、地点或亚种群数和成熟个体数都在持续减少。这是维州共同评估方法下的州级正式判断，不是 IUCN 2013 条目的 criteria 更新。[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

## 4. 狭域分布

### 4.1 地理边界

本种只分布于澳大利亚维多利亚州南部和西部吉普斯兰。国家恢复计划把可靠范围概括为西斯特泽莱茨基山脉及相邻巴斯河谷，北界约到 Warragul，南部包括 Loch、Korumburra、Kernot 和 Almurta 一带，东界到 Mount Worth。Archies Creek、Blackwood Forest 和 Glen Forbes 的若干旧记录没有充分凭证，不应扩进结构化范围。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

AFD 的州级字段只写 Victoria，附加分布写 Gippsland。它的自动 IBRA 列表覆盖维州多个广泛区域，AFD 自己提醒地图转换可能出错，也可能没有显示完整分布。产品不能把整套 IBRA 自动列表当作本种确认范围。[Australian Faunal Directory](https://biodiversity.org.au/afd/taxa/Megascolides_australis)

传统范围约 40,000 公顷，也就是约 400 平方千米。维州 2021 年按 1970 年后 VBA 记录计算出 EOO 1,079 平方千米和 2 × 2 千米网格 AOO 524 平方千米。三个值采用不同概念和方法，不能互相替代：

- 40,000 公顷是管理资料使用的广义范围包络。
- EOO 是围住记录点的地理范围指标，不等于适生土壤面积。
- 网格 AOO 会把整个占用网格计入，远大于地下真实微斑块。

本种实际占用地点常小于 10 平方米；把 524 平方千米写成“栖息地面积”会夸大真实地下占用。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

### 4.2 结构化分布建议

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['大洋洲'],
  regions: [
    '澳大利亚维多利亚州南部与西部吉普斯兰',
    '巴斯河谷与西斯特泽莱茨基山脉',
    'Warragul、Loch、Korumburra、Kernot与Mount Worth之间的破碎黏土斑块',
  ],
  countries: ['澳大利亚'],
  endemicTo: ['澳大利亚维多利亚州南部和西部吉普斯兰'],
  range:
    '澳大利亚维多利亚州特有，确认范围局限在南部和西部吉普斯兰的巴斯河谷与西斯特泽莱茨基山脉一带。约40,000公顷的范围包络内只有破碎、离散的湿润黏土微斑块被实际占用，许多地点不足10平方米；大多数记录位于私人农业用地。',
  center: { lat: -38.35, lng: 145.75 },
},
```

`center` 取 Korumburra、Loch 和 Poowong 一带的页面视口代表点，不表示种群中心、模式地点或公开调查坐标。产品地图不应显示可引导挖掘的精细洞道位置。

## 5. 土壤、生境与水文

### 5.1 决定占用的条件

本种需要全年保持高含水量、又不长期积水的深厚黏土。已知地点多位于深蓝灰色黏土或红褐色黏壤土，母质主要来自西斯特泽莱茨基山脉的白垩纪砂岩、粉砂岩和泥岩。国家恢复计划指出，适生土壤通常超过 1 米深，以黏粒为主；本种不见于高粉砂、沙土和活跃洪泛平原。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

常见微地形包括：

- 小溪与排水沟的岸和阶地，但洞道位于常规洪水线以上。
- 泉眼、渗水地和土壤水分较高的沟谷。
- 朝南或朝西的湿坡。
- 带 terracettes 的陡坡。横坡小阶地暂存径流并补充土壤水分，可能帮助洞道度过干燥期。

本种需要潮湿，不代表它适应水涝。维州 2021 评估明确指出，它不能在积水土壤或季节性洪泛地持续生存。洞道中的自由水和湿壁帮助移动与皮肤气体交换，反复洪水和淤积仍可让地点失去适生条件。[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)；[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

### 5.2 牧场不是完整的生境解释

现有种群多位于私人奶牛牧场的开阔地。欧洲定居前，西斯特泽莱茨基山脉曾有更广的湿森林；现有研究却发现本种在 Mount Worth 的开放牧草地比残存密林下更常见，在河岸复植地也常局限于开阔渗水斑块。这说明部分种群能在森林清除后的牧场继续生活，前提是土壤结构与局地水文保持合适。它不证明清林有益，也不证明所有牧场都是栖息地。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

密植复育也不是自动安全的措施。幼树的截留和蒸腾可能降低水位，密集根系会占用地下空间，整地和挖穴还可能直接伤害个体与卵茧。恢复行动应先了解地点水文，再决定树种、密度、缓冲区和施工方法。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)；[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

### 5.3 habitat 建议

```ts
habitats: [
  {
    name: '终年湿润的深层黏土洞道',
    realm: 'terrestrial',
    description:
      '在深蓝灰色黏土或红褐色黏壤土中建立永久洞道；土壤需要全年保持湿润和通气，长期积水、洪泛、沙土与高粉砂土不适合。',
    isPrimary: true,
  },
  {
    name: '小溪岸、泉眼与渗水阶地',
    realm: 'terrestrial',
    description:
      '常见于小溪和排水沟的岸与阶地、泉眼及渗水斑块，位置通常高于常规洪水线；局地地下水补给比地表植被名称更能预测占用。',
    isPrimary: true,
  },
  {
    name: '朝南或朝西的湿润牧场坡地',
    realm: 'terrestrial',
    description:
      '南向或西向坡面及横坡小阶地可截留径流、补充土壤水分；多数已知地点处在私人奶牛牧场，但只有具备合适土层、微地形和水文的斑块被占用。',
  },
],
```

## 6. 形态、尺寸与识别

### 6.1 外形

国家恢复计划描述本种身体细长、圆柱形，由约 300 至 500 个体节组成。前部约三分之一呈深紫至紫黑色，其余部分为浅粉灰色肉质外观。成体环带从第 XIII 节中部延伸到第 XXI 节，腹面可见三条浅色带；身体有八行纵向刚毛，排列为四对。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

这些微形态需要近距离或标本观察。公众不能凭“很长、紫色”确认本种，因为澳大利亚还有其他大型本地蚯蚓，幼体也可能缺少成体环带标志。地点、土壤、体色和体节结构应共同判断；受保护个体不应为了鉴定而挖出或搬动。[Australian Museum: Australian earthworms](https://australian.museum/learn/animals/worms/australian-earthworms/)；[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

### 6.2 可靠尺寸

[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I) 的现场研究给出成体平均约 750 × 20 毫米、平均体重约 210 克，最大体重 381 克。国家恢复计划将展示级数字概括为平均约 80 厘米长、2 厘米粗和 200 克重，可靠记录可达约 1.5 米和 400 克。Museums Victoria 写平均 80 至 100 厘米，馆方没有找到接近 3 米旧报告的标本。[Museums Victoria](https://collections.museumsvictoria.com.au/species/14381)

蚯蚓可大幅伸缩，长度受姿势与测量方法影响。体重通常比一张伸展照片更适合比较，但含水量和生殖状态也会改变体重。结构化字段应保存“典型值”和“可靠记录上限”，不要构造没有证据的最小成体值。

```ts
measurements: {
  length: {
    typical: 80,
    max: 150,
    unit: 'cm',
    note: '成体平均约80厘米；现代可靠记录可达约1.5米。身体可伸缩，未采用缺少现代标本支持的3米旧报告。',
  },
  weight: {
    typical: 200,
    max: 400,
    unit: 'g',
    note: '成体平均约200克，现代研究和政府资料记录最高接近400克；不是所有成体范围。',
  },
},
metrics: {},
```

`metrics.adultLengthCm` 和 `adultMassKg` 都应留空。现有数据提供平均值和记录上限，没有物种级成体最小值；把 `[80, 150]` 或 `[0.2, 0.4]` 写成范围会把平均值伪装成下限。

### 6.3 受伤风险

身体很脆弱，轻微挫伤或切伤也可能死亡。恢复计划认为本种受伤后没有可依赖的再生能力；土方施工暴露的个体还会受到干燥、紫外线和捕食影响。图片和正文不要展示徒手拉扯、拉直测量、切段或把个体当鱼饵。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

## 7. 永久洞道与地下行为

本种建立复杂、长期使用的地下洞道，通常延伸到约 1 至 1.5 米深。研究者认为一个个体占据一套相对独立的洞道。动物终生留在地下，只有暴雨淹灌或牛蹄扰动时才偶尔到地表。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)；[Museums Victoria](https://collections.museumsvictoria.com.au/species/14381)

占用洞道即使在夏季也保持湿润。蚯蚓伸缩身体在含水洞壁中移动时会推动水和空气，地面观察者有时能听到类似吸水的咕噜声。博物馆调查曾通过湿季聆听这种声音辅助确认活动，但一次声音记录不能计数个体，也不能排除其他地下动物或水流。[Museums Victoria Science Report No. 4](https://museumsvictoria.com.au/media/6153/mv-science-reports-4.pdf)；[DCCEEW monitoring review](https://emsa.tern.org.au/document/download/116/3fd75f22-79b2-4eba-99f5-ac6870f34755/124)

它把粪铸留在地下洞道内，和许多把蚓粪排到地表的引入蚯蚓不同。湿地中穴居螯虾 *Engaeus* 的烟囱状泥堆常被误认成巨蚯蚓蚓粪；地表泥堆不能作为单独识别证据。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

推荐 `activity`：

```ts
activity: [
  '终生生活在一套复杂、长期使用的湿润黏土洞道中，洞道可延伸到约1至1.5米深',
  '用身体伸缩在湿洞内移动，水与空气被推动时可产生地面能够听见的咕噜声',
  '在浅层洞道吞食含有根系和有机质的土壤，并把蚓粪留在地下洞道中',
  '暴雨淹灌或牛蹄严重扰动时才偶尔出现在地表',
  '扩散能力很低，破碎斑块之间几乎没有自然迁移机会',
],
```

没有资料支持固定的昼夜活动表、季节迁移距离或运动速度，相关字段不要填写。

## 8. 食性与生态作用

### 8.1 食物

本种在开挖洞道时吞食土壤，利用其中的根材料和有机质。国家恢复计划没有证明它主动捕食活根，也没有量化细菌、真菌、叶片或种子的比例。产品使用 `detritivore`，把食物写成土壤有机质与腐解植物材料。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

```ts
diet: {
  types: ['detritivore'],
  foods: ['土壤中的有机质', '腐解根系与细小植物碎屑'],
  description:
    '在开挖和维护地下洞道时吞食土壤，消化其中的根材料与有机质，再把蚓粪留在洞道内；现有资料没有给出各类食物的固定比例。',
},
```

### 8.2 生态作用的证据边界

南吉普斯兰规划文件把本种描述为土壤结构与肥力的重要贡献者。洞道、土壤吞食和地下蚓粪提供了合理机制，本种也可作为本地土壤动物保护的旗舰分类单元。[South Gippsland Planning Scheme](https://planning-schemes.app.planning.vic.gov.au/South%20Gippsland/histories/VC271/ordinance/18527641)；[Van Praagh 1997](https://doi.org/10.24199/j.mmv.1997.56.56)

本次没有找到量化 *M. australis* 对通气、入渗、营养循环或牧草产量影响的物种级实验。页面应写“洞道和土壤处理可能影响土壤结构与有机质分布”，不写“它让吉普斯兰农田高产”或给出未经测量的增产比例。

保护本种的湿润溪岸、泉眼和土壤水文还会保留其他本地土壤动物与河岸生境。这个共同收益来自生境保护，不代表巨蚯蚓单独创造了整个生态系统。

## 9. 繁殖、卵茧与生命周期

### 9.1 配偶与繁殖季

本种为雌雄同体，但原始生殖研究把它描述为 biparental，需要两个个体交换精子。配子发生全年进行，储精结构中可长期保留精子，因此交配可能不完全限于产茧季；产茧和显著繁殖活动集中在南半球春夏。[Van Praagh 1995](https://doi.org/10.1071/ZO9950489)

政府综合资料将繁殖期概括为 9 月至次年 2 月。1980 年代现场研究主要在 9 月至 12 月记录到生殖活跃成体。页面可写“春夏产茧，现场高峰多见于 9 至 12 月”，不要把交配、受精和产茧都压成同一固定月份。[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I)；[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

### 9.2 卵茧

成体在主洞道旁建立小室，单独放置大型琥珀色卵茧。Van Praagh 1992 的样本为 40 至 70 毫米长、10 至 15 毫米宽，平均约 9 克，平均深度约 220 毫米，密度约 1.6 个每立方米。后来的国家恢复计划把已见长度概括为 5 至 9 厘米。两套范围可能来自不同样本，图片约束可采用 4 至 9 厘米的保守联合范围。[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I)；[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

每个卵茧只有一个胚胎，孵化需要至少 12 个月。卵茧产量很低，并可能因季节条件而不是每年发生。页面不能借其他蚯蚓的多胚或数周孵化数据填补本种。[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I)；[Victorian Species Forecast Report](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/forecast/15004_Giant_Gippsland_Earthworm_SpeciesReport.html)

### 9.3 幼体、成熟和寿命

新孵化幼体约 18 厘米长，远长于常见园艺蚯蚓成体。现场根据环带结构区分幼体、亚成体和成体：幼体没有腹面浅色带，亚成体有一至两条，成体通常有三条。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

有限的现场和圈养观察推测性成熟可能需要约 4 至 5 年，并可能与达到约 200 克有关。最大寿命仍然未知；成体长期占据年龄结构的多数，只能支持“长寿、周转慢”，不能支持具体寿命年数。[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

维州资料分别给出 8 至 16 年推断世代长度和 11 至 20 年平均世代间隔。来源模型、更新批次与定义不一致，产品不把这些值写入 featured stats 或 `lifespanYears`。后续若需要展示世代长度，应回查模型元数据后单独解释。[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)；[Victorian Species Forecast Report](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/forecast/15004_Giant_Gippsland_Earthworm_SpeciesReport.html)

## 10. 种群、扩散与监测

### 10.1 不能填写总量

DCCEEW 当前行动页面明确写“没有总种群估计”。局地记录从一两只到 Loch Hill 道路工程前发现的约 800 只不等；最大已知地点不能代表全种数量，也不是成熟个体总数。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)

2010 恢复计划曾列 254 条 Atlas of Victorian Wildlife 记录；2021 州级评估写至少 1,000 条 VBA 记录。数据库增长既可能来自新调查，也可能包括同一一般地点的重复记录，不能据此推断种群增长。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)；[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

### 10.2 局地密度

Van Praagh 1992 给出平均约 2 只每立方米、最高约 10 只每立方米的局地值。Loch Hill 2001 年六个样方中共找到 23 只，估算密度为 4.1 至 17.9 只每立方米，平均 8.5。Loch Hill 是局部高密度斑块，数字不能外推整个范围。[Van Praagh 1992](https://doi.org/10.1016/0038-0717%2892%2990119-I)；[Museums Victoria Science Report No. 2](https://doi.org/10.24199/j.mvsr.2002.02)

### 10.3 隔离与遗传风险

适生斑块之间缺少连通土壤，本种扩散能力很低。2006 年遗传研究发现相距约 5 千米的 Loch Hill 和 Bena 样本显著分化；维州 2021 评估据此判断两个亚种群可能已经分离超过一百万年。该数字来自未发表荣誉论文和州级综合，不应扩大到每一对地点。[Victorian Threatened Species Assessment 2021](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf)

维州 Species Forecast Report 将遗传下降风险列为 Very High，同时把总量、近交证据和遗传多样性列为未知或数据缺乏。产品可写“隔离增加遗传风险”，不能声称已证实全种近交或低遗传多样性。[Victorian Species Forecast Report](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/forecast/15004_Giant_Gippsland_Earthworm_SpeciesReport.html)

### 10.4 监测限制

传统调查需要挖土确认洞道、蚓粪、卵茧或个体，可能破坏栖息地并伤害动物。咕噜声、湿润洞道和新鲜地下蚓粪可以提供活动线索，仍难以换算数量。国家恢复计划提出测试地面穿透雷达、声音与振动传感器；2023 维州 Action Statement 要求开发并采用侵入性更低的方法。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)；[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

DCCEEW 资助的 2024 年起项目正在汇总历史和当前记录、开展分布 census，并研究土壤水文和威胁缓解。项目尚未发布可替代现有总量空白的全范围普查数字。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)

## 11. 威胁

### 11.1 水文改变

降低或抬高地下水位、开挖排水沟、修坝、改变地形与上下游水流都会改变洞道湿度。1990 年代 Loch 西侧道路扩宽和排水沟施工后，水位下降；五年后调查没有再找到原有地点的巨蚯蚓。这个案例支持局地水文改变的严重性，但不能单凭一次未检出证明全地点绝灭。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

气候变化带来的降雨减少与升温会降低土壤含水量。DCCEEW 已把它列为当前关键威胁。页面应写成土壤水分路径，不给出本种尚未量化的未来下降百分比。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)

### 11.2 土壤物理破坏

道路、住宅、管线、坝体、耕作、挖掘和重型机械会切断洞道或直接杀死个体与卵茧。个体通常处在表层 1.5 米以内，平均约 0.5 米；卵茧平均约 22 至 23 厘米深，土方工程很容易触及。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

牛群踩踏造成的 pugging、土壤压实和侵蚀会破坏洞道结构。现有种群能与部分牧场管理共存，不代表高强度踩踏无害；管理应按确认斑块设置围栏和适宜放牧强度。[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

### 11.3 化学物质

维州 Action Statement 把农药列为可能直接致死的威胁。国家恢复计划同时指出，本种对具体除草剂、杀虫剂、杀菌剂和肥料的剂量响应几乎没有直接资料。页面可写“农药与化学径流带来潜在直接死亡和土壤改变”，不要列出本种无实验支持的毒性排名。[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)；[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)

### 11.4 建议 threats 数组

```ts
threats: [
  '排水、筑坝、地形改变和上下游取排水改变地下水位及洞道湿度',
  '降雨减少与升温造成的土壤水分下降，使全年湿润洞道更难维持',
  '道路、住宅、管线、耕作与其他土方工程直接切断洞道并伤害个体和卵茧',
  '重型机械压实与牛群踩踏、泥泞践踏和侵蚀破坏黏土结构及洞道空间',
  '不合地点水文的密集植树、深翻与挖穴降低土壤水分或占用地下空间',
  '农药和其他化学径流可能直接致死或改变土壤条件，但本种剂量响应仍缺少实验',
  '极小斑块和很低扩散能力阻断重建与基因交流，使局地损失难以自然恢复',
  '破坏性调查、挖取、搬运和错误处理会伤害身体脆弱的个体',
],
```

## 12. 保护行动

当前保护重点应放在原地保住洞道与水文。大多数记录位于私人农业用地，土地所有者、地方规划机构和工程团队决定许多斑块能否持续存在。[DCCEEW priority species profile](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm)；[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

维州 2023 Action Statement 要求维持地方规划覆盖层，在基础设施选址和设计中设置缓冲，研究水文与土地利用影响，采用侵入性更低的调查，按生态需求设计复植，并评估遗传风险。永久保护可通过自愿协议、保护契约和土地管理激励实现。[Victorian Action Statement](https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf)

Loch Hill 道路工程曾促成一次大型抢救与迁地试验。迁地调查本身会伤害个体，且监测难以确定长期存活数量；它不应成为开发项目默认的替代措施。Action Statement 要求先制定一致的 translocation protocol，原地避让仍是优先顺序。[National Recovery Plan](https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf)；[Museums Victoria Science Report No. 2](https://doi.org/10.24199/j.mvsr.2002.02)

```ts
conservationActions: [
  '在确认洞道、卵茧和关键补水区周围优先避让土方，并设置覆盖完整地下水文单元的缓冲带',
  '与私人土地所有者签订保护契约或管理协议，对微斑块围栏并调整放牧强度',
  '维持地方规划覆盖层，把巨蚯蚓调查、水文评估和累积影响纳入道路、住宅与管线审批',
  '保护泉眼、渗水坡和小溪岸的地表及地下水流，避免新增排水、填土、筑坝和压实',
  '按地点水文设计复植密度、树种和施工方式，避免在洞道上深翻、密植或挖大型树穴',
  '减少农药和污染径流，优先使用综合虫害管理并保留无化学扰动缓冲区',
  '开发并校准声音、振动、洞道成像和其他低侵入监测方法，明确检出率后再解释趋势',
  '用统一努力的长期调查记录占用、繁殖迹象、土壤湿度、地下水位与土地管理变化',
  '只在原地避让不可行且有批准协议时评估迁地，记录伤亡、年龄结构、繁殖与多年存活',
  '向土地所有者和公众提供不挖取、不拉扯、不搬运的报告指引，并保护精细地点信息',
],
```

## 13. 页面文案建议

### 13.1 tags

```ts
tags: [
  '环节动物门',
  '环带纲',
  '巨型蚯蚓',
  '地下土壤动物',
  '维多利亚州特有',
  '湿润黏土洞道',
  '永久洞道',
  'IUCN濒危',
  'EPBC易危',
  '维州FFG濒危',
],
```

### 13.2 summary

```ts
summary:
  '巨蚯蚓终生藏在维多利亚州吉普斯兰的湿润黏土洞道里，成体平均约80厘米长。它每个大型卵茧只发育一个胚胎，孵化至少需要一年；狭小破碎的栖息地和极低扩散能力使局地水文改变格外危险。',
```

### 13.3 description

```ts
description:
  '巨蚯蚓Megascolides australis是澳大利亚维多利亚州南部和西部吉普斯兰特有的巨蚓科环节动物。前部约三分之一呈深紫色，后部为粉灰色，成体平均约80厘米长、200克重。它不在落叶表面游走，而是在终年湿润、又不积水的深层黏土里维护可达约1至1.5米深的永久洞道；身体伸缩推动洞内水和空气时，地面有时能听到咕噜声。它吞食含根材料和有机质的土壤，并把蚓粪留在地下。雌雄同体的两个个体交换精子，产茧活动集中在南半球春夏；它们在洞道侧室产下大型琥珀色卵茧，每茧只有一个胚胎，孵化至少需要12个月，性成熟可能再等约4至5年。传统范围约40,000公顷，实际占用却由许多不足10平方米的湿润黏土斑块组成。排水、道路和住宅土方、压实、农药、失当密植与气候干燥都可能破坏洞道和水分。IUCN列为濒危，澳大利亚EPBC Act列为易危，维州FFG Act列为濒危。保护应先在原地避让洞道、维持整个补水单元，并与私人土地所有者共同管理。',
```

## 14. 六段故事建议

```ts
storySections: [
  {
    key: 'reliable-giant',
    label: '体型与传说',
    title: '平均八十厘米，三米纪录仍没有标本',
    body:
      '成体平均约80厘米长、2厘米粗和200克重，现代可靠记录可达约1.5米并接近400克。蚯蚓会大幅伸缩，长度容易被姿势放大。旧文献写过3米，Museums Victoria和国家恢复计划都没有找到接近这个数字的现代标本，因此页面把1.5米作为可靠记录级上限。',
  },
  {
    key: 'wet-permanent-burrow',
    label: '地下生活',
    title: '一生住在会发出咕噜声的湿洞里',
    body:
      '一只巨蚯蚓通常占据一套复杂的永久洞道，深处可达约1至1.5米。洞壁即使在夏季也保持湿润，帮助身体移动和皮肤呼吸。它伸缩时推动水与空气，地面观察者有时能听到咕噜声；一次声音只能证明可能有活动，不能告诉你地下有几只。',
  },
  {
    key: 'hydrological-mosaic',
    label: '生境与水文',
    title: '四万公顷范围里，真正的家可能不到十平方米',
    body:
      '传统范围约40,000公顷，实际占用却集中在小溪岸、泉眼、渗水坡和横坡小阶地的深厚黏土中。许多斑块不足10平方米。土壤需要全年潮湿和通气，长期积水、沙土与洪泛平原都不合适；地图上的大范围包络不能替代地下水流和微地形。',
  },
  {
    key: 'one-embryo-cocoon',
    label: '繁殖与成长',
    title: '一个大卵茧，只等待一条幼蚓',
    body:
      '雌雄同体的两个个体交换精子，春夏在洞道侧室放置琥珀色卵茧。每个卵茧只有一个胚胎，孵化至少需要12个月，新生幼蚓已经约18厘米长。产茧率很低，性成熟可能需要约4至5年；慢繁殖让一次土方损失很难迅速补回。',
  },
  {
    key: 'pasture-paradox',
    label: '农田共存',
    title: '能留在牧场，不等于经得起翻土和压实',
    body:
      '大多数已知种群位于私人奶牛牧场。本种能够在森林清除后的部分开阔湿地继续生活，关键是黏土结构和地下补水仍在。深耕、牛蹄泥泞践踏、机械压实、排水沟和密集植树会改变洞道空间或水分。保护行动必须按斑块水文设计，简单地把牧场或复植贴成好坏标签会误导管理。',
  },
  {
    key: 'listen-before-digging',
    label: '监测与保护',
    title: '先听、先测水，再决定是否动土',
    body:
      '传统挖掘调查会切断洞道并伤害身体脆弱的个体。研究者正在改进声音、振动和洞道探测等低侵入方法，同时记录土壤湿度与地下水位。道路、住宅和复植项目前应避让已知斑块及其补水区；迁地只适合在获批协议下作为最后手段。',
  },
],
```

## 15. 关键事实建议

```ts
keyFacts: [
  'Australian Faunal Directory接受Megascolides australis McCoy, 1878，并记录Notoscolex gippslandicus为异名。',
  '六级分类采用Animalia、Annelida、Clitellata、Crassiclitellata、Megascolecidae和Megascolides。',
  '本种只分布于澳大利亚维多利亚州南部和西部吉普斯兰。',
  'IUCN列为EN，criteria为B1ab(iii)+2ab(iii)；IUCN评估来自2013年并在2014-1版本发布。',
  '澳大利亚EPBC Act列为VU，维多利亚州FFG Act列为EN；两个法定等级不覆盖IUCN字段。',
  '传统范围约40,000公顷，实际占用由破碎微斑块组成，一些地点不足10平方米。',
  '没有可靠的全种数量或成熟个体估计；单个地点记录从一两只到约800只。',
  '成体平均约80厘米长、2厘米粗和200克重，现代可靠记录可达约1.5米并接近400克。',
  '旧文献报告过3米个体，博物馆与恢复计划都没有找到接近该长度的现代标本。',
  '身体由约300至500个体节构成，前部约三分之一深紫至紫黑，其余部分浅粉灰。',
  '终生生活在地下永久洞道中，洞道通常延伸到约1至1.5米深。',
  '占用洞道全年保持湿润，身体移动时可能产生地面能够听见的咕噜声。',
  '在土中摄取根材料和有机质，并把蚓粪留在地下洞道内。',
  '本种为需要配偶交换精子的雌雄同体动物，产茧活动主要发生在南半球春夏。',
  '琥珀色卵茧单独置于洞道侧室，原始研究记录约4至7厘米长，后续综合记录可达约9厘米。',
  '每个卵茧只有一个胚胎，孵化至少需要12个月。',
  '新孵化幼体约18厘米长，性成熟可能需要约4至5年；最大寿命未知。',
  '适生土壤需要全年湿润却不长期积水，常见于小溪岸上方、泉眼、渗水地和朝南或朝西坡。',
  '大多数已知地点处于私人农业用地，牧场名称本身不能预测占用，土层、微地形与水文才是关键。',
  '排水和地下水位改变、土方、压实、农药与失当密植是主要管理风险。',
  '身体非常脆弱，挖取、拉扯和搬运可能致死；公众观察不应使用破坏性鉴定。',
  '声音和湿洞可辅助发现活动，单次咕噜声不能估算个体数或种群趋势。',
],
```

## 16. featured stats 建议

```ts
featuredStats: [
  {
    key: 'average-adult-length',
    label: '成体平均长度',
    value: '约80',
    unit: 'cm',
    note: '身体可伸缩；现代可靠记录可达约1.5米，未采用缺少标本支持的3米旧报告',
  },
  {
    key: 'average-adult-mass',
    label: '成体平均体重',
    value: '约200',
    unit: 'g',
    note: '可靠记录最高接近400克；平均值不是成体最小值',
  },
  {
    key: 'cocoon-incubation',
    label: '单胚卵茧孵化',
    value: '至少12',
    unit: '个月',
    note: '每个卵茧只有一个胚胎，产量低且可能不是每年发生',
  },
  {
    key: 'range-envelope',
    label: '传统范围包络',
    value: '约40,000',
    unit: '公顷',
    note: '实际占用高度破碎，一些地点不足10平方米；不是连续栖息地面积',
  },
],
```

不把下列数字放进 featured stats：

- 3 米旧报告，没有现代标本支持。
- 五个地点，来自陈旧 IUCN 范围理解，维州资料已经纠正。
- 1,079 平方千米 EOO 和 524 平方千米网格 AOO，容易被误读成真实栖息地面积。
- 约 800 只，是单个道路工程地点的回收记录。
- 8 至 16 年或 11 至 20 年世代值，两个维州资料口径不一致。
- 任何总种群或成熟个体数，现有官方资料明确写未知。

## 17. 六张科学准确图像 brief

统一技术要求：1536 × 1024、3:2 横图、opaque sRGB。使用 photorealistic natural-history reconstruction，画面不得出现文字、标签、箭头、比例尺、logo、水印或边框。巨蚯蚓应为细长圆柱形环节动物，约 300 至 500 个细密体节形成连续环纹；前部约三分之一深紫至紫黑，后部浅粉灰；没有眼、脚、触角、吸盘、鳞片或蛇头。场景保持地下、湿润、低饱和度。不要把个体画成地表爬行的普通蚯蚓、巨蛇、沙虫或怪物。

### 17.1 01 `01-moist-clay-burrow-adult.webp`：封面成体

**目的**：建立“巨型、地下、永久湿洞”的第一印象，同时让主轮廓适合列表裁切。

**场景**：自然断面式地下重建，显示深蓝灰色湿黏土内一条宽约 2 至 3 厘米的圆形洞道。恰好一只完整成体沿洞道形成宽缓 S 形，身体大部分可见，不被切成几段。洞壁有薄水膜，没有地面积水。

**动物约束**：前端位于画面右侧，头部不拟人化；前部三分之一深紫，向后渐变为粉灰。环带仅作略厚的自然区域，不画成白色绷带。身体粗细连续，尾端钝细，无分叉。

**构图**：动物占画面右侧和中央，左侧留出黏土与细根背景；焦点 `{ x: 0.65, y: 0.53 }`。不出现人手、铲子、量尺、卵茧或第二只动物。

**科学边界**：这是地下情景重建，不能由像素量取 80 厘米长度、洞道深度或体节数。

### 17.2 02 `02-purple-anterior-segmented-body.webp`：体色与体节

**目的**：展示深紫前部、粉灰后部、圆柱身体与细密环纹。

**场景**：一只完整个体在宽阔湿黏土洞道中转弯，采用略近的侧上视角。身体伸展但不拉直，画面包含前端、环带、后体和尾端。

**动物约束**：前部约三分之一深紫至紫黑，其余浅粉灰；数百个细小体节形成均匀环纹，不能只有十几节。八行刚毛无需夸张成可见刺。腹面浅色生殖带只作局部微弱结构，不用医学切片效果。

**构图**：中央裁切安全，焦点 `{ x: 0.53, y: 0.5 }`。不得出现眼睛、牙齿、蛇舌、外鳃、鳞片或明亮霓虹色。

**科学边界**：色彩和体型可提供线索，图片不能确认标本身份、性别或生殖状态。

### 17.3 03 `03-streambank-clay-habitat-cutaway.webp`：溪岸与渗水坡

**目的**：解释溪岸上方、深层黏土、地下补水和不受洪水直接淹没的组合。

**场景**：南吉普斯兰开阔牧场的小溪岸科学情景重建。地表有短草和稀疏低矮植被，小溪保持在画面左下；剖面显示溪岸常规水线以上的深蓝灰黏土、红褐黏壤土过渡、少量细根和一条湿洞道。恰好一只小比例巨蚯蚓位于洞道中。

**水文约束**：洞壁潮湿并有细小渗水光泽，但洞道不被洪水填满；动物不在河水里。不得用箭头、地下水线标签或发光蓝色水脉。

**构图**：地表与地下约各占一半，动物仍清楚可辨；焦点 `{ x: 0.61, y: 0.62 }`。

**科学边界**：画面只组合已知微生境要素，不代表真实地点、完整分布或固定土层厚度。

### 17.4 04 `04-wet-permanent-burrow-movement.webp`：移动与咕噜声

**目的**：表现湿洞内伸缩移动造成水和空气位移，不用视觉化声波。

**场景**：湿黏土洞道的近景，恰好一只成体正从左后方向右前方缩进。身体前段略粗、后段拉长，洞壁水膜在身体旁形成自然弯月和少量空气间隙。

**动作约束**：保持单一连续身体，没有断裂或复制。水只形成薄膜和小幅位移，不出现大量气泡、喷泉、声波线、音乐符号或漫画拟声字。

**构图**：斜向洞道提供深度，前端清楚，焦点 `{ x: 0.62, y: 0.53 }`。

**科学边界**：静帧不能证明声音强度、活动速度、个体数或季节。

### 17.5 05 `05-amber-egg-cocoon-side-chamber.webp`：单个卵茧

**目的**：展示洞道侧室、单独卵茧和低繁殖输出。

**场景**：湿润黏土剖面中，一条成体洞道旁分出一个小室。小室内只有一个完整、椭长、两端略带短柄的琥珀至浅褐色卵茧，长度视觉上约为洞道直径的两到三倍。成体身体只在主洞道远处露出一小段，避免画成照料行为。

**卵茧约束**：表面不透明或微半透明，不剖开，不显示多个幼体、蛋黄、脐带或鸟蛋壳。不得出现成堆卵茧。

**构图**：卵茧在中央偏右，焦点 `{ x: 0.57, y: 0.55 }`。

**科学边界**：图片不能确认胚胎数、孵化月份、卵茧年龄、实际深度或重量。caption 负责说明“一茧一胚”来自研究，不来自可见像素。

### 17.6 06 `06-acoustic-hydrology-monitoring.webp`：低侵入监测

**目的**：把保护行动落在声音、土壤水分和避让上，不展示挖取。

**场景**：南吉普斯兰开阔牧场的湿润朝南坡，一名研究者跪在已知斑块边缘，把无品牌的小型地表振动或声学传感器轻放在草地上；另一支无品牌土壤水分探头位于数米外。背景有围栏把牛群留在远处，近处没有开挖。

**动物处理**：巨蚯蚓保持不可见。画面不放透明地下虫轮廓，不出现抓取、铲土、样方坑、手持活体或迁地箱。

**构图**：传感器和研究者位于右侧，左侧保留溪岸与湿坡环境；焦点 `{ x: 0.64, y: 0.55 }`。

**科学边界**：一次声学记录和水分读数不能估算种群数量或趋势；传感技术仍需校准。

### 17.7 media 建议

```ts
media: {
  image:
    './images/species/giant-gippsland-earthworm/01-moist-clay-burrow-adult.webp',
  alt: '湿润蓝灰黏土的地下洞道中，一只前部深紫、后部粉灰的完整巨蚯蚓沿洞壁形成宽缓弯曲',
  focalPoint: { x: 0.35, y: 0.55 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
  gallery: [
    {
      image:
        './images/species/giant-gippsland-earthworm/02-purple-anterior-segmented-body.webp',
      alt: '一只完整巨蚯蚓在湿黏土洞道中转弯，深紫色前部连接粉灰色后体，近乎平滑的表面带浅细横向微纹',
      title: '深紫前部连接粉灰长身',
      caption:
        'AI生成科学情景重建；体色、圆柱身体和浅细横向微纹提供外形线索，像素不能确认物种、性别、生殖状态，也不用于逐节计数。',
      focalPoint: { x: 0.53, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image:
        './images/species/giant-gippsland-earthworm/03-streambank-clay-habitat-cutaway.webp',
      alt: '开阔牧场小溪岸的地下剖面中，一只小比例巨蚯蚓位于常规水线以上的湿润蓝灰黏土洞道',
      title: '洪水线以上的湿润黏土斑块',
      caption:
        'AI生成科学情景重建；溪岸、渗水和深层黏土组合已知生境条件，不能表示真实地点、完整分布、土层厚度或固定水位。',
      focalPoint: { x: 0.61, y: 0.62 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image:
        './images/species/giant-gippsland-earthworm/04-wet-permanent-burrow-movement.webp',
      alt: '湿黏土洞道近景中，一只巨蚯蚓伸缩前进，身体旁的薄水膜形成小幅弯月形位移',
      title: '湿洞里推动水和空气',
      caption:
        'AI生成科学情景重建；水膜只解释咕噜声的可能机制，静帧不能证明声音强度、移动速度、季节或地下个体数。',
      focalPoint: { x: 0.62, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image:
        './images/species/giant-gippsland-earthworm/05-amber-egg-cocoon-side-chamber.webp',
      alt: '湿黏土主洞道旁的小室中放着一个完整琥珀色椭长卵茧，远处仅露出一小段成体身体',
      title: '侧室里的单个大型卵茧',
      caption:
        'AI生成科学情景重建；研究记录每茧一个胚胎并至少孵化12个月，像素不能显示胚胎数、卵茧年龄、深度或重量。',
      focalPoint: { x: 0.57, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image:
        './images/species/giant-gippsland-earthworm/06-acoustic-hydrology-monitoring.webp',
      alt: '研究者在湿润牧场坡地表面放置小型声学传感器和土壤水分探头，围栏将牛群隔在远处，地面没有开挖',
      title: '不挖出动物也能开始调查',
      caption:
        'AI生成科学情景重建；声音、振动和水分监测仍需校准，一次检出不能换算种群数量、繁殖成功或长期趋势。',
      focalPoint: { x: 0.64, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
  ],
},
```

## 18. 完整 source 元数据

### 18.1 来源矩阵

| # | 来源 | 类型 | 支撑内容 | 边界 |
| --- | --- | --- | --- | --- |
| 1 | Australian Faunal Directory | taxonomy | 接受名、命名人、异名、当前分类链、Victoria | IBRA 自动映射不可当精确范围 |
| 2 | IUCN Red List assessment | conservation | 全球 EN、criteria、IUCN Taxon ID 13008 | 评估陈旧，范围理解需要更新 |
| 3 | IUCN 2014.3 Table 7 | conservation | 从 VU 调整到 EN，发布版本 2014.1 | 只确认状态变化，不提供完整生态资料 |
| 4 | DCCEEW priority species profile | conservation | EPBC VU、当前威胁、项目、40,000 公顷、地点小于 10 平方米、无总量 | 非法定评估文本，页面自己注明用于行动报告 |
| 5 | National Recovery Plan 2010 | conservation | 分布、生境、水文、形态、洞道、生活史、威胁与行动 | 旧计划，数字需与新州级资料并读 |
| 6 | Victorian Action Statement | conservation | FFG EN、州级准则、当前威胁和行动 | 州级口径不能覆盖 IUCN criteria |
| 7 | Victorian Threatened Species Assessment 2021 | conservation | EOO、AOO、至少 1,000 条记录、世代推断、无总量、州级 B1 | EOO/AOO 不是实际栖息地面积 |
| 8 | Victorian Species Forecast Report 2024 | distribution | 当前范围、生境、遗传风险与数据缺口 | 模型字段存在口径和模板限制，不转成 IUCN 数值 |
| 9 | Museums Victoria species page | general | 形态、尺寸、洞道、食物、繁殖、三套保护状态 | 公众概览，精确数字回查论文 |
| 10 | Van Praagh 1992 | ecology | 原始体型、年龄结构、卵茧、孵化、密度和微分布 | 单地与有限样本，不外推全球 |
| 11 | Van Praagh 1995 | ecology | 雌雄同体、双亲繁殖、配子发生、储精和繁殖季 | 解剖与组织学研究，不提供全范围频率 |
| 12 | Museums Victoria Science Report No. 2 | distribution | Loch Hill 分布、土壤、局地密度和道路影响 | 单一高密度地点 |
| 13 | Van Praagh 1997 | general | 本地蚯蚓保护与旗舰分类单元作用 | 不量化本种生态系统服务 |
| 14 | Museums Victoria Science Report No. 4 | ecology | 湿洞、咕噜声与调查线索 | 声音不能直接换算数量 |
| 15 | DCCEEW 与 TERN monitoring review | conservation | 监测方法、资料缺口和低侵入需求 | 方法评估不等于已建立种群趋势 |
| 16 | Museums Victoria specimen F 40135 | taxonomy | 馆藏 syntype 登记、Brandy Creek | 与 AFD 的模式材料位置说明有差异 |
| 17 | Australian Museum: Australian earthworms | general | 澳大利亚还有其他大型本地蚯蚓，外形不能单独确诊 | 通用本地蚯蚓概览，不提供本种精确生物学数字 |
| 18 | South Gippsland Planning Scheme | ecology | 地方规划中的土壤结构、肥力及标志性价值说明 | 管理文件没有量化本种的生态系统服务 |

### 18.2 可直接复制的来源数组

```ts
const GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE = '2026-08-29' as const;
const GIANT_GIPPSLAND_EARTHWORM_CONTENT_DATE = '2026-08-29' as const;

const GIANT_GIPPSLAND_EARTHWORM_SOURCES = [
  {
    title:
      'Australian Faunal Directory: Megascolides australis McCoy, 1878',
    url: 'https://biodiversity.org.au/afd/taxa/Megascolides_australis',
    kind: 'taxonomy',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List: Megascolides australis, EN B1ab(iii)+2ab(iii)',
    url: 'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T13008A21416160.en',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'IUCN Red List version 2014.3, Table 7: species changing status',
    url: 'https://cmsdocs.s3.amazonaws.com/summarystats/2014_3_Summary_Stats_Page_Documents/2014_3_RL_Stats_Table_7.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'DCCEEW: Giant Gippsland earthworm priority species profile',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/giant-gippsland-earthworm',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'DCCEEW 2010: National Recovery Plan for the Giant Gippsland Earthworm',
    url: 'https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'DEECA: Giant Gippsland Earthworm Action Statement, Taxon ID 15004',
    url: 'https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/actionstmts/Giant_Gippsland_Earthworm_AS_15004.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'DEECA 2021: Threatened Species Assessment for Megascolides australis',
    url: 'https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/species_assessments/Megascolides_australis_15004.pdf',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'DEECA 2024: Giant Gippsland Earthworm Species Forecast Report',
    url: 'https://bio-prd-naturekit-public-data.s3.ap-southeast-2.amazonaws.com/forecast/15004_Giant_Gippsland_Earthworm_SpeciesReport.html',
    kind: 'distribution',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Museums Victoria: Megascolides australis, Giant Gippsland Earthworm',
    url: 'https://collections.museumsvictoria.com.au/species/14381',
    kind: 'general',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Van Praagh 1992: The biology and conservation of the Giant Gippsland Earthworm',
    url: 'https://doi.org/10.1016/0038-0717(92)90119-I',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Van Praagh 1995: Reproductive biology of Megascolides australis',
    url: 'https://doi.org/10.1071/ZO9950489',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Van Praagh, Hinkley and Sargeant 2002: Giant Gippsland Earthworm population at Loch Hill',
    url: 'https://doi.org/10.24199/j.mvsr.2002.02',
    kind: 'distribution',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Van Praagh 1997: Conservation of native earthworms and the Giant Gippsland Earthworm as a flagship taxon',
    url: 'https://doi.org/10.24199/j.mmv.1997.56.56',
    kind: 'general',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Museums Victoria Science Report No. 4: field survey and gurgle detection',
    url: 'https://museumsvictoria.com.au/media/6153/mv-science-reports-4.pdf',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'DCCEEW and TERN: Literature review of monitoring methods for the Giant Gippsland Earthworm',
    url: 'https://emsa.tern.org.au/document/download/116/3fd75f22-79b2-4eba-99f5-ac6870f34755/124',
    kind: 'conservation',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'Museums Victoria: specimen F 40135 Megascolides australis syntype',
    url: 'https://collections.museumsvictoria.com.au/specimens/646181',
    kind: 'taxonomy',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title: 'Australian Museum: Australian earthworms',
    url: 'https://australian.museum/learn/animals/worms/australian-earthworms/',
    kind: 'general',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
  {
    title:
      'South Gippsland Planning Scheme: Giant Gippsland Earthworm habitat and conservation significance',
    url: 'https://planning-schemes.app.planning.vic.gov.au/South%20Gippsland/histories/VC271/ordinance/18527641',
    kind: 'ecology',
    accessedAt: GIANT_GIPPSLAND_EARTHWORM_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 19. 完整可集成字段草案

下面草案省略已在第 18 节给出的来源常量内容，字段可以直接对照 `Species` 类型集成。

```ts
{
  id: 'species-megascolides-australis',
  slug: 'giant-gippsland-earthworm',
  names: {
    zh: '巨蚯蚓',
    en: 'Giant Gippsland Earthworm',
    aliases: [
      '吉普斯兰大蚯蚓',
      '吉普斯兰巨蚯蚓',
      '澳洲巨型蚯蚓',
      'Gippsland Giant Earthworm',
      'GGE',
    ],
  },
  scientificName: 'Megascolides australis',
  taxonomy: animalTaxonomy(
    taxon('Annelida', '环节动物门'),
    taxon('Clitellata', '环带纲'),
    taxon('Crassiclitellata', '厚环带目'),
    taxon('Megascolecidae', '巨蚓科'),
    taxon('Megascolides', '巨蚓属'),
  ),
  conservation: conservation(
    'EN',
    'unknown',
    2013,
    'B1ab(iii)+2ab(iii)',
  ),
  distribution: {
    realms: ['terrestrial'],
    continents: ['大洋洲'],
    regions: [
      '澳大利亚维多利亚州南部与西部吉普斯兰',
      '巴斯河谷与西斯特泽莱茨基山脉',
      'Warragul、Loch、Korumburra、Kernot与Mount Worth之间的破碎黏土斑块',
    ],
    countries: ['澳大利亚'],
    endemicTo: ['澳大利亚维多利亚州南部和西部吉普斯兰'],
    range:
      '澳大利亚维多利亚州特有，确认范围局限在南部和西部吉普斯兰的巴斯河谷与西斯特泽莱茨基山脉一带。约40,000公顷的范围包络内只有破碎、离散的湿润黏土微斑块被实际占用，许多地点不足10平方米；大多数记录位于私人农业用地。',
    center: { lat: -38.35, lng: 145.75 },
  },
  habitats: [
    {
      name: '终年湿润的深层黏土洞道',
      realm: 'terrestrial',
      description:
        '在深蓝灰色黏土或红褐色黏壤土中建立永久洞道；土壤需要全年保持湿润和通气，长期积水、洪泛、沙土与高粉砂土不适合。',
      isPrimary: true,
    },
    {
      name: '小溪岸、泉眼与渗水阶地',
      realm: 'terrestrial',
      description:
        '常见于小溪和排水沟的岸与阶地、泉眼及渗水斑块，位置通常高于常规洪水线；局地地下水补给比地表植被名称更能预测占用。',
      isPrimary: true,
    },
    {
      name: '朝南或朝西的湿润牧场坡地',
      realm: 'terrestrial',
      description:
        '南向或西向坡面及横坡小阶地可截留径流、补充土壤水分；多数已知地点处在私人奶牛牧场，但只有具备合适土层、微地形和水文的斑块被占用。',
    },
  ],
  measurements: {
    length: {
      typical: 80,
      max: 150,
      unit: 'cm',
      note: '成体平均约80厘米；现代可靠记录可达约1.5米。身体可伸缩，未采用缺少现代标本支持的3米旧报告。',
    },
    weight: {
      typical: 200,
      max: 400,
      unit: 'g',
      note: '成体平均约200克，现代研究和政府资料记录最高接近400克；不是所有成体范围。',
    },
  },
  diet: {
    types: ['detritivore'],
    foods: ['土壤中的有机质', '腐解根系与细小植物碎屑'],
    description:
      '在开挖和维护地下洞道时吞食土壤，消化其中的根材料与有机质，再把蚓粪留在洞道内；现有资料没有给出各类食物的固定比例。',
  },
  activity: [
    '终生生活在一套复杂、长期使用的湿润黏土洞道中，洞道可延伸到约1至1.5米深',
    '用身体伸缩在湿洞内移动，水与空气被推动时可产生地面能够听见的咕噜声',
    '在浅层洞道吞食含有根系和有机质的土壤，并把蚓粪留在地下洞道中',
    '暴雨淹灌或牛蹄严重扰动时才偶尔出现在地表',
    '扩散能力很低，破碎斑块之间几乎没有自然迁移机会',
  ],
  tags: [
    '环节动物门',
    '环带纲',
    '巨型蚯蚓',
    '地下土壤动物',
    '维多利亚州特有',
    '湿润黏土洞道',
    '永久洞道',
    'IUCN濒危',
    'EPBC易危',
    '维州FFG濒危',
  ],
  summary:
    '巨蚯蚓终生藏在维多利亚州吉普斯兰的湿润黏土洞道里，成体平均约80厘米长。它每个大型卵茧只发育一个胚胎，孵化至少需要一年；狭小破碎的栖息地和极低扩散能力使局地水文改变格外危险。',
  description:
    '巨蚯蚓Megascolides australis是澳大利亚维多利亚州南部和西部吉普斯兰特有的巨蚓科环节动物。前部约三分之一呈深紫色，后部为粉灰色，成体平均约80厘米长、200克重。它不在落叶表面游走，而是在终年湿润、又不积水的深层黏土里维护可达约1至1.5米深的永久洞道；身体伸缩推动洞内水和空气时，地面有时能听到咕噜声。它吞食含根材料和有机质的土壤，并把蚓粪留在地下。雌雄同体的两个个体交换精子，产茧活动集中在南半球春夏；它们在洞道侧室产下大型琥珀色卵茧，每茧只有一个胚胎，孵化至少需要12个月，性成熟可能再等约4至5年。传统范围约40,000公顷，实际占用却由许多不足10平方米的湿润黏土斑块组成。排水、道路和住宅土方、压实、农药、失当密植与气候干燥都可能破坏洞道和水分。IUCN列为濒危，澳大利亚EPBC Act列为易危，维州FFG Act列为濒危。保护应先在原地避让洞道、维持整个补水单元，并与私人土地所有者共同管理。',
  storySections: [
    // 使用第14节六段完整文案
  ],
  keyFacts: [
    // 使用第15节完整数组
  ],
  threats: [
    // 使用第11.4节完整数组
  ],
  conservationActions: [
    // 使用第12节完整数组
  ],
  metrics: {},
  featuredStats: [
    // 使用第16节完整数组
  ],
  media: {
    // 使用第17.7节完整对象
  },
  sources: GIANT_GIPPSLAND_EARTHWORM_SOURCES,
  featured: true,
  publishedAt: GIANT_GIPPSLAND_EARTHWORM_CONTENT_DATE,
  updatedAt: GIANT_GIPPSLAND_EARTHWORM_CONTENT_DATE,
}
```

日期常量已在第 18.2 节与来源数组一起给出，可避免复制时先引用后声明。

## 20. 验收清单与保留空白

### 20.1 数据验收

- 接受名必须是 *Megascolides australis* McCoy, 1878，命名人不加括号。
- 六级分类必须采用 Annelida、Clitellata、Crassiclitellata、Megascolecidae、*Megascolides*。
- 中文目名采用“厚环带目”，不把 Oligochaeta 误塞进 schema 的 order。
- IUCN 使用 `EN / unknown / 2013 / B1ab(iii)+2ab(iii)`。
- EPBC VU 与 FFG EN 只放入标签和说明，不覆盖 IUCN 字段。
- 分布只列澳大利亚，`endemicTo` 指向维多利亚州南部和西部吉普斯兰。
- range 明说 40,000 公顷是包络，实际占用由小于 10 平方米的破碎微斑块组成。
- `metrics` 保持空对象，不把平均长度和最大记录拼成范围。
- 不填写总种群、成熟个体数、固定寿命、运动速度、海拔上下限或每日活动时段。
- 食性使用 `detritivore`，不加没有本种比例证据的微生物清单。
- 6 个 story、22 条 keyFacts、8 条 threats、10 条 actions、4 个 featured stats 完整落库。
- sources 覆盖 taxonomy、conservation、distribution、ecology 和 general 五种 kind。

### 20.2 图像验收

- 6 张源图和 6 张 WebP 均为 1536 × 1024、3:2、opaque sRGB、单帧并可解码。
- 成体为一条连续圆柱身体，前部约三分之一深紫，其余浅粉灰。
- 01、02、04 的最终图以近乎平滑的表面和浅细横向微纹避免“少量宽肋”误读；像素不用于逐节计数，不能由画面验证 300 至 500 个体节。
- 不出现眼、脚、触角、吸盘、鳞片、蛇头、分叉尾或怪物口器。
- 地下场景使用湿润蓝灰或红褐黏土，洞壁有薄水膜，动物不浸在洪水里。
- 卵茧图只有一个完整琥珀色卵茧，不剖开、不显示成堆卵或多个幼体。
- 监测图不挖坑、不抓取、不拉直、不搬运活体。
- alt 和 caption 不把 AI 像素当作体长、体节数、卵茧年龄、声音、种群数量或真实调查凭证。

### 20.3 必须保留的不确定性

- IUCN 评估已经陈旧，2013 年地点理解不代表当前 VBA 记录规模。
- 全种总量和成熟个体数未知。
- IUCN 人口趋势缺少可安全同步的定量更新，因此写 `unknown`。
- 最大寿命未知，约 4 至 5 年成熟来自有限现场与圈养推断。
- 物种级生态系统服务没有直接量化，不能声称提高多少土壤肥力或牧草产量。
- 具体农药和肥料对本种的剂量响应未知。
- 不同维州资料给出的世代长度口径不一致，暂不展示。
- EOO、网格 AOO、40,000 公顷范围包络和真实地下占用面积不是同一指标。
- 失当密植可能改变水文，长期复植效果随地点而异；不能把“种树”统一写成威胁或行动。
- 迁地长期成功率难以量化，原地避让仍应优先。
