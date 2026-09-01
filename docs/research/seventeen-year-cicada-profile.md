# 十七年蝉（*Magicicada septendecim*）完整档案研究

- 检索、核验与访问日期：2026-09-01
- 接受学名：***Magicicada septendecim* (Linnaeus, 1758)**
- 原始组合：***Cicada septendecim* Linnaeus, 1758**
- 推荐中文主名：**十七年蝉**
- 推荐英文主名：**Seventeen-year Cicada**
- 推荐 slug：`seventeen-year-cicada`
- 目标 id：`species-magicicada-septendecim`
- 证据标准：接受名和分类采用 ITIS 与 World Auchenorrhyncha Database；尺寸和物种诊断优先采用原始分类研究；生活史、周期群和核验点采用 UConn 项目与原始论文；保护状态采用 IUCN、NatureServe 和 CITES 官方页面。
- 核心边界：17 年是同一地点多数个体的年级周期，不是精确到每只个体的固定寿命；IUCN 状态来自 1996 年、按 2.3 版标准作出的 `LR/nt` 旧评估，现行汇总把它并入 `NT`，但没有现代趋势、成熟个体数或威胁重评；许多生活史数字来自周期蝉属或混合物种周期群，不能冒充本种固定常数。

文中 `[S01]` 至 `[S35]` 均为可点击的直接来源链接。凡写“属级”“混合物种”“单地点”或“假说”，该限定属于结论本身，落库时不能删除。

## 先给实现者的结论

| 字段 | 推荐值 | 证据与边界 |
| --- | --- | --- |
| `id` | `species-magicicada-septendecim` | 与仓库稳定 id 规则一致 |
| `slug` | `seventeen-year-cicada` | 沿用 TODO 的物种名，避免和 13 年型近缘种混淆 |
| `names.zh` | 十七年蝉 | 沿用仓库 TODO；专项检索未找到统一的国家级现行中文标准名录 |
| `names.en` | Seventeen-year Cicada | 公众向主名；ITIS 与美国鱼类及野生动物管理局采用 Pharaoh cicada [S01] [S06] |
| 接受学名 | `Magicicada septendecim` | ITIS 记为 valid，TSN 847190；完整作者为 (Linnaeus, 1758) [S01] |
| 六级分类 | Animalia / Arthropoda / Insecta / Hemiptera / Cicadidae / *Magicicada* | ITIS、World Auchenorrhyncha Database 与 UConn 一致 [S01] [S02] [S07] |
| `conservation` | `conservation('NT', 'unknown', 1996)` | 1996 年原评估是 IUCN 2.3 的 `LR/nt`；现行统计把 `LR/nt` 计入 `NT`，但这不是一次现代重评 [S27] [S28] [S29] |
| `distribution.realms` | `['terrestrial']` | 地下若虫、地表羽化和树上成虫都属于陆域生活史 [S07] [S16] [S17] |
| `distribution.countries` | `['美国']` | 现代 UConn 核验点和现存周期群资料集中于美国；NatureServe 的加拿大条目缺少可供本档案核验的现代现存记录，不无条件落库 [S08] [S13] [S30] |
| `measurements.length` | 27 至 33 mm | Alexander 与 Moore 的物种鉴别表所列头至腹端体长，不含翅尖；不是每只成虫的硬极值 [S05] |
| `metrics.adultLengthCm` | `[2.7, 3.3]` | 仅在页面把该字段解释为“鉴别表头腹长”时使用；若筛选器把它解释为全物种绝对范围，应留空 [S05] |
| `diet.types` | `['herbivore']` | 若虫和成虫都以植物液体为食 [S07] [S17] [S18] |
| 结构化寿命 | 不填 | 17 年是年级周期；离群出土、卵期和成虫期使 `lifespanYears: [17, 17]` 产生错误语义 [S10] [S15] |
| 周期群展示 | I–X、XIII–XIV | 2019 年表列出的本种十二个现存 17 年周期群；brood 不是物种、亚种或单一演化种群 [S09] [S13] |

## 接受名、异名与中英文名

### 接受名和命名人括号

ITIS 将 *Magicicada septendecim* 记为有效种，TSN 847190，作者写作 `(Linnaeus, 1758)`；ITIS 同时给出英语名 Pharaoh cicada。[S01]

World Auchenorrhyncha Database 将 *Cicada septendecim* Linnaeus, 1758 列为原始组合，并记录模式固定信息：新模为雄体，存于密歇根大学动物学博物馆，采自美国俄亥俄州 Delaware County 的 Orange Township。[S02] 学名作者置于括号中，是因为本种已从 Linnaeus 原用的 *Cicada* 转入 *Magicicada*，不是另一个作者或另一个物种。

Davis 在 1925 年提出 *Magicicada*，并明确把本种写作 *Magicicada septendecim*；该组合沿用至今。[S04]

### 可用于旧文献检索的名称

World Auchenorrhyncha Database 支持以下历史组合或异名：[S02]

- *Cicada septendecim* Linnaeus, 1758：原始组合
- *Tettigonia septendecim* (Linnaeus, 1758)：历史组合
- *Tibicen septendecim* (Linnaeus, 1758)：历史组合
- *Tibicina septendecim* (Linnaeus, 1758)：历史组合
- *Tettigonia costalis* Fabricius, 1798：后被处理为主观异名

数据库还收录大量带 `[sic]` 的历史拼写错误。它们适合馆藏和文献追踪，不应全部塞进公众 `aliases`，更不能当成并存有效种。[S02]

### 中英文名称口径

建议主字段：

```ts
names: {
  zh: '十七年蝉',
  en: 'Seventeen-year Cicada',
  aliases: [
    '林奈十七年蝉',
    '法老蝉',
    'Pharaoh cicada',
    'Linnaeus’ 17-year cicada',
    'Seventeen Year Periodical Cicada',
    'Decim Periodical Cicada',
    '17-year locust',
  ],
},
```

“十七年蝉”沿用仓库 TODO，档案不把它声称为唯一官方中文标准名。UConn 使用 Linnaeus' 17-year cicada，ITIS 和美国鱼类及野生动物管理局使用 Pharaoh cicada，NatureServe 使用 Seventeen Year Periodical Cicada。[S01] [S06] [S08] [S30]

`17-year locust` 是历史俗称。周期蝉属于半翅目蝉科，不属于直翅目的蝗虫；页面可以保留该检索词，但正文第一次出现时必须纠正误解。[S07]

## 完整分类路径

```text
Animalia 动物界
└── Arthropoda 节肢动物门
    └── Insecta 昆虫纲
        └── Hemiptera 半翅目
            └── Cicadidae 蝉科
                └── Magicicada 周期蝉属
                    └── Magicicada septendecim 十七年蝉
```

ITIS、World Auchenorrhyncha Database 和 UConn 支持这条六级主干。[S01] [S02] [S07] World Auchenorrhyncha Database 还列出 Auchenorrhyncha、Cicadomorpha、Cicadoidea、Cicadettinae 和 Lamotialnini 等中间阶元；仓库接口只有界、门、纲、目、科、属，不应把中间阶元挤占 `order` 或 `family`。[S02]

早期资料把本种放在 Homoptera，部分资料使用 Tibicinidae。这些是历史分类口径，不应用来覆盖当前 `Hemiptera / Cicadidae` 主路径。[S01] [S05]

## 保护状态与证据边界

### IUCN：可落库为 NT，但必须保留评估年龄

IUCN 物种记录的永久标识为 `T12691A3373584`。World Conservation Monitoring Centre 在 1996 年依据 IUCN 2.3 版标准把本种评为 `Lower Risk/near threatened (LR/nt)`。[S27]

IUCN 当前版本为 2026-1。[S28] IUCN 的统计口径明确写明 `NT` 包含旧制 `LR/nt`，因此仓库只支持现行代码时可写：

```ts
conservation: conservation('NT', 'unknown', 1996),
```

这一转换只是代码兼容，不是 2026 年重评。[S29] 不得补写 3.1 版准则、下降趋势、成熟个体数量、评估范围面积或威胁权重。原记录过旧，`trend` 只能是 `unknown`。

### NatureServe：G4 同样过旧，不能替代 IUCN

NatureServe 将本种列为 `G4 Apparently Secure`，但全球等级最后复核日期为 1986-11-05，并明确提示需要复核；美国和加拿大国家等级均为 NNR。[S30] 这个等级比 1996 年 IUCN 评估更旧，不能据此把 IUCN 改成 LC、stable 或 increasing。

NatureServe 页面列出加拿大 Ontario 与 Quebec，但 Ontario 为 SU、Quebec 为 SNR，公开分布又标明不完整；UConn 截至 2025-03-10 的物种核验点图不足以确认加拿大现存周期群。[S08] [S30] 因此结构化 `countries` 只写美国，并在 `range` 说明加拿大记录边界。后续若获得可核验的加拿大标本、鸣声和现存周期群记录，再增补国家。

### CITES：当前未列入，不是风险结论

2026-03-05 生效的 CITES 附录与 Checklist 均未列出 *Magicicada septendecim*。[S31] [S32] 这只说明国际野生动植物贸易公约没有给本种设置附录管制，不说明种群安全、贸易没有影响，也不替代美国各州、地方或土地管理规则。

### 结构化保护字段中禁止出现

- `criteria`：1996 旧记录没有可安全映射到现行 3.1 版的准则。
- `estimatedMatureIndividuals`：没有现代全域估计。
- `stable` 或 `decreasing`：缺少现代全域趋势。
- `assessedYear: 2026`：2026 是当前检索版本，不是本种评估年。
- `LC`：大量出土或 NatureServe G4 都不能覆盖 IUCN 记录。

## 分布、周期群地图与生境

### 分布口径

周期蝉属仅见于北美洲东部；UConn 把三种 17 年型概括为偏北分布，并以经过项目成员核验的点位展示本种近似范围。[S07] [S08]

2019 年全线粒体基因组研究采样七个周期蝉种和全部 15 个现存周期群，表中把 *M. septendecim* 列入 17 年型北方支，并记录于 I–X、XIII–XIV 十二个现存 17 年周期群。[S13] 该表支持周期群清单，不支持把所有编号连成连续面状范围。

建议字段：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['北美洲'],
  regions: ['北美洲东部', '美国东部与中部的十七年周期群分布区'],
  countries: ['美国'],
  endemicTo: ['北美洲东部'],
  range:
    '分布限于北美洲东部，现代核验点位与现存十七年周期群资料集中在美国东部和中部。1996 年 IUCN 与 NatureServe 涉及加拿大，但当前可核验资料不足以把加拿大写成已确认的现存国家记录。UConn 用点数据呈现记录，未画连续边界；空白地点不等于缺失，点位也不表示丰度。',
  center: { lat: 39.5, lng: -82.5 },
},
```

`center` 只是地图首屏焦点，位于美国东部和 Ohio Valley 附近。它不是物种起源地、密度中心、分布质心或模式产地。

### 周期群不是分类单元

UConn 将 brood 定义为某一区域中按共同、可预测日程出土的全部周期蝉，是“地区加出土年份”的记账概念，不是物种、亚种或必然共享单一演化史的种群。[S09]

17 年型编号 I 至 XVII 中，现存周期群为 I–X、XIII 和 XIV，共十二个；XI 已灭绝，XII、XV、XVI、XVII 没有被接受为现存正常周期群。[S09] 本种的现存周期群清单恰为 I–X、XIII–XIV，但这不表示每个地点都有本种，也不表示每个周期群只含本种。[S13]

Brood XI 最后一次记录在 1954 年的 Connecticut。1971、1988 和 2005 年的定向搜索均未发现；保留下来的 Brood XI 标本只有 *M. septendecim*。[S11] 模型结果认为其灭绝不能简单归因于森林砍伐和开发，更可能与分布边缘及气候耐受边缘有关；档案不得写“城市开发已被证明导致 Brood XI 灭绝”。[S11]

### 三类结构化生境

1. **北美洲东部落叶林与林缘**：Dybas 与 Lloyd 在 17 年周期蝉研究中把 *M. septendecim* 与 *M. septendecula* 主要联系到 upland woods；UConn 的生活史要求活木本植物完成取食、羽化、鸣叫和产卵。[S07] [S16] 设置 `isPrimary: true`。
2. **次生林、林带、果园与有成熟树木的居住区**：Dybas 与 Lloyd 记录本种可在受扰动后的次生林继续出现；Maier 在 Connecticut 的苹果园与邻近森林研究 Brood II。[S16] [S21] 可利用改造景观不表示果园或庭院是全种首选生境。
3. **木本宿主根区土壤**：若虫在地下洞道中经历五个龄期，口针进入根部木质部取食。[S07] [S17] 深度随地点、宿主、土壤和龄期变化，不在 `habitats` 中写固定深度。

本种不是“原始森林专性种”。受扰动次生林可以承载周期群，但长期移除树木、根系和整片土层仍会消灭地下年级群。[S12] [S16]

## 成虫形态、性别与测量

### 稳妥的物种识别组合

周期蝉属成虫通常有黑色背面、红色复眼、橙色翅脉、四片透明膜质翅和前翅近端部的黑色 W 形脉斑。[S07]

UConn 的 *M. septendecim* 页面给出两项关键物种线索：腹面有宽橙色带；复眼后方到前翅基部之前的胸侧有橙色区。页面还把它称为大型周期蝉，并提供 CI、CII、CIII 鸣声和 2025-03-10 更新的核验点图。[S08]

Alexander 与 Moore 的鉴别表把本种描述为大型，头至腹端体长 27 至 33 mm，前胸侧板和复眼至翅基之间的侧缘呈红色，腹部腹板以红褐或黄色为主；雄鸣是持续 1 至 3 秒、末端降调的低音嗡鸣短语。[S05]

可靠鉴定应合并腹面、胸侧、鸣声、地点和周期信息。单张背面照片容易与其他 *Magicicada* 混淆；尤其 13 年型近缘种 *M. neotredecim* 在外形上很接近，不能只凭红眼和橙翅脉判定本种。[S05] [S14]

雄虫第一腹节两侧有成对的鼓膜器，雌虫腹端较尖并有产卵器；两性都有刺吸式口器、六足和四翅。[S07] 雌虫不会用雄虫鼓膜器鸣唱；雄虫也没有用于切开枝条的产卵器。

### 长度口径

```ts
measurements: {
  length: {
    min: 27,
    max: 33,
    unit: 'mm',
    note:
      'Alexander 与 Moore 1962 年物种鉴别表的头至腹端体长，不含超出腹端的翅；这是鉴别资料范围，不是所有成虫的绝对极值或图片测量。',
  },
},
metrics: {
  adultLengthCm: [2.7, 3.3],
},
```

美国林务局图鉴写成虫 40 mm，却没有在物种条目中说明是否量到翅端；它还采用与 UConn 不同的产卵批次口径。[S34] 不应把 27 至 33 mm 和 40 mm 拼成“成虫 27 至 40 mm”。结构化字段采用定义清楚的头腹长，40 mm 只作为量法冲突警示。

缺少可靠的物种级全球体重、翅展、成虫寿命极值和飞行速度数据。不要为了填满筛选器推导这些字段。

## 食性与地下若虫

### 若虫：根部木质部取食

White 与 Strehl 检查地下若虫的取食部位和唾液鞘，发现口针终止于根部木质部，没有终止于韧皮部；结果支持若虫在整个地下发育期取食根部木质部液体。[S17] 论文讨论了低营养木质部液体与缓慢生长之间的关系，但没有证明它是 17 年周期的唯一成因。

UConn 记录周期蝉若虫在地下经历五个龄期，从接近小蚂蚁大小逐步长到接近成虫；新孵化若虫落地后钻入土中并寻找细根。[S07] 各龄持续时间、根深和个体活动范围没有可用于本种全域的固定值。

### 成虫确实取食

UConn 明确指出成虫吸取植物液体，并称没有活木本植物时成虫会死亡；成虫利用多种落叶木本和灌木，通常不利用草本禾草。[S07]

Hepler 等在 2021 年 Brood X 的果园与林地收集若虫、刚蜕的苍白成虫和已硬化成虫，并以植物 DNA 肠内容分析检验取食。已硬化成虫检出植物 DNA，刚蜕成虫没有检出，支持成虫在硬化后的阶段重新摄入植物液体；样本含 *M. septendecim*、*M. cassini* 和 *M. septendecula*，物种和地点样本数不均衡。[S18] 该研究不能生成本种全域宿主排名或树种比例。

建议字段：

```ts
diet: {
  types: ['herbivore'],
  foods: [
    '若虫取食的木本植物根部木质部液体',
    '成虫取食的活木本枝条植物液体',
  ],
  description:
    '若虫以口针进入木本植物根部木质部；成虫也会在活木本枝条上取食。2023 年分子肠内容研究支持成虫在硬化后摄入植物来源物质，但不能给出本种全域宿主清单、比例或单只摄入量。',
},
```

“成虫不吃东西”“若虫啃食整段树根”“只吃某一种树”都不符合现有证据。[S17] [S18]

## 十七年生命周期、周期群与离群出土

### 生活史顺序

1. 交配后的雌虫在活木本细枝内切出一系列卵室并产卵。[S07]
2. 周期蝉属资料给出的孵化概括为约 6 至 10 周；初龄若虫落地并钻入土中。[S07]
3. 若虫在地下经历五个龄期，以根部木质部液体为食。[S07] [S17]
4. 在主出土年春末，末龄若虫开掘到地表的出口，常在日落后爬上树干或其他垂直基质。[S07] [S21]
5. 胸背裂开，苍白的未硬化成虫退出若虫外骨骼，四翅扩展，身体随后硬化变黑。[S07] [S24]
6. UConn 把未完全硬化的 teneral 阶段概括为约 4 至 6 天；成熟雄虫开始鸣叫，雌雄交配并再次在枝内产卵。[S07]
7. 卵孵化时，上一个地表成虫世代已经死亡，新一代回到地下。[S07]

Sota 的 2022 年综述把周期蝉成虫期概括为约 4 至 6 周、卵期约 6 至 8 周，但文章的核心“4 年内部闸门”是整合假说，不是已经识别出的分子机制。[S15] 页面可以写地表阶段短暂，不能把 4 至 6 周或 6 至 8 周做成本种全域硬范围。

### 它们怎样“数到十七”

Karban、Black 与 Weinbaum 改变承载 17 年周期蝉若虫的宿主树季节循环，并诱发相关若虫提前变态。结果支持若虫通过宿主季节循环计年，而不是简单累积经过的日历时间或积温。[S19] 该实验没有找到具体感受器、植物信号分子或完整生理计时器，文案应写“支持季节循环计数”，不能写“机制已经完全破解”。

17 年描述同一地点年级群的主日程。UConn 把早于或晚于预定年出土的个体称为 stragglers；常见偏差为一年或四年，但也有其他偏差，绝大多数离群出土规模较小。[S10] 因此：

- 不写 `lifespanYears: [17, 17]`。
- 不把 13 至 21 年写成正常个体寿命范围。
- 不说所有个体在同一夜、同一分钟出土。
- 不把离群出土自动认作新周期群。

### 周期群清单的产品表达

建议数字卡写：

```ts
{
  key: 'documented-broods',
  label: '文献所列现存周期群',
  value: 'I–X、XIII–XIV',
  note:
    'Du et al. 2019 表中所列本种现存十七年周期群。brood 可含多个物种，也不等于亚种、单一演化种群或连续分布区。',
}
```

不要硬编码“下一次某周期群在某年出土”进长期物种对象；日程会随当前年份变成过期资料，适合独立、可更新的周期群数据层。[S09]

## 羽化、鸣声、交配与产卵

### 土温与日落只能作为有范围的研究结果

Heath 对 17 年周期蝉群体的研究记录：七个地点在出土时，约 20 cm 土深温度平均接近 17.8°C。[S20] UConn 将其概括为 7 至 8 英寸土深约 64°F，但同时指出具体夜晚的触发线索仍未完全理解。[S07] 该值不能写成全分布区、本种专属、任何年份都必须满足的硬阈值。

Maier 在 1979 年 Connecticut 的 Brood II 研究 *M. septendecim*，发现多数若虫在 5 月下旬至 6 月下旬、日落前后出土；苹果园比邻近森林的季节进程稍早。[S21] 这是单周期群、单地区、单年份结果，不能定义全球活动月份或统一时刻。

### 终龄蜕皮和四翅扩展

刚退出旧外骨骼的成虫颜色苍白，四翅柔软；随后翅展开、体表硬化并变暗。[S07] 对 2021 年 Brood X 的 200 只 *M. septendecim* 进行的实验发现，翅在约 40 分钟内完成主要扩展，血淋巴先泵入翅、之后排出，使成翅变轻。[S24] 这是受控采样的物种级羽化实验，不表示每只野生成虫都恰好 40 分钟，也不能从一张静态图测量血淋巴流量。

### 雄鸣、雌性振翅和三阶段求偶

雄虫第一腹节两侧各有一枚有棱的鼓膜器。Reid 对 *M. septendecim* 和 *M. cassini* 的研究显示，鼓膜肋依次屈曲并激发腹部共鸣腔振荡；页面不需要把这套机制画成外露扬声器。[S23]

Alexander 与 Moore 把本种鸣声描述为 1 至 3 秒的低音嗡鸣短语，强度较均匀，结尾明显降调；“Pharaoh”只是人耳拟声。[S05] UConn 页面提供本种合唱、CI、CII 和 CIII 的实际录音。[S08]

UConn 行为页和 Cooley 与 Marshall 的原始研究表明，具有交配意愿的雌虫会在雄鸣后的物种特定时序发出振翅信号；雄虫在合唱、短飞搜索、接近和尝试交配时改变信号。[S22] [S35] 静态图片不能证明声频、声压、短语长度、雌性回应时序或某只个体正在发声。

### 产卵和孵化数字的范围

UConn 的周期蝉属概述写道：交配后的雌虫在活枝内开出一系列 Y 形卵室，每室最多约 20 枚，一只雌虫最多约 600 枚；卵约 6 至 10 周孵化。[S07] 这些是属级上限或概括，不能写成每只 *M. septendecim* 固定产 600 枚、每室固定 20 枚。

Maier 的 Connecticut Brood II 研究记录卵在产下约 9 至 10 周后孵化。[S21] 这提供物种级单地点实例，不覆盖全分布区温度、宿主和年份差异。

产卵切口可使细枝出现 flagging。成熟树通常能承受，幼树和新栽树更易受损；University of Maryland Extension 建议对小树使用透气网罩，不建议为大量出土喷药。[S33] 这是园艺管理，不是全球致危因素排序。

## 生态作用

### 捕食者饱和

Karban 的野外研究发现，周期蝉密度越高，单只个体逃过捕食并成功繁殖的概率越高；鸟类捕食没有随蝉密度同比增加，支持捕食者饱和机制。[S25] 该结果适用于所研究的周期蝉出土，不证明 13 和 17 这两个质数的演化原因已经解决。

UConn 同样强调：大量同步出土让机会性捕食者迅速吃饱，而捕食者种群来不及在短地表窗口内数量响应。[S07] 页面可以写“大规模同步有捕食者饱和优势”，不能写“17 是为了避开所有捕食者周期而进化出的完美质数”。UConn 明确把长周期和质数周期的起源保留为多种假说竞争的问题。[S07]

### 森林资源脉冲

Yang 的野外研究表明，17 年周期蝉 *Magicicada* spp. 的尸体资源脉冲提高森林土壤微生物量和氮可利用性，并间接影响植物生长与繁殖。[S26] 论文研究的是混合物种周期蝉资源脉冲，不应改写成“*M. septendecim* 单独完成森林施肥”。

大量成虫也会被鸟类、哺乳动物、爬行动物、蜘蛛和昆虫机会性捕食；这些食物网效应随周期群、地点和捕食者群落变化。[S07] 不写固定捕食者清单比例。

### 对树木的作用不要单向宣传

若虫长期取食根部木质部，成虫取食枝条植物液体，雌虫在细枝中产卵。[S17] [S18] [S21] 美国林务局图鉴指出若虫根部取食的影响尚未量化，并把明显损伤主要归于产卵切口导致的小枝枯折。[S34] 因此既不能说“完全不影响树”，也不能说“会杀死成熟森林”。

“出土洞给土壤充气”在当前物种级证据中缺少可安全量化的支持，不作为生态功效主张。

## 威胁、证据空白与行动

### 可写的威胁

- **木本植被和根区长期丧失**：清除林地、成熟树与根系会同时移除若虫食物、成虫活动基质和产卵枝。[S12]
- **土壤大规模扰动**：整地、深挖、铺装、长期压实和根区施工可能直接破坏地下年级群；物种级全域效应尚未量化。[S07] [S12]
- **林地破碎化和景观更新不同步**：周期群必须跨越完整 17 年保持宿主条件，短期恢复不保证地下年级群重建。[S12]
- **不必要的农药使用**：大规模喷药难以显著降低周期蝉数量，还会影响人、宠物、益虫和鸟类；University of Maryland Extension 建议以幼树物理防护代替。[S33]
- **气候改变出土线索**：宿主季节循环和春季土温参与计时与出土，气候变化可能改变物候或离群出土；UConn 将未来影响明确写作预测，尚无证据证明本种已经发生全球下降。[S12] [S19] [S20]
- **监测周期过长**：同一地点隔 17 年才有一次主出土，缺少跨完整世代的标准化重复调查会掩盖局地消失。[S09] [S11]

Brood XI 的灭绝证明局地年级群可以消失，但现有模型不支持把原因简化为开发或砍伐。[S11] 真菌感染和捕食会造成成虫死亡，Maier 在单个果园量化过两者；它们属于自然死亡因素，不能未经全域证据升级为本种主要保护威胁。[S21]

### 建议行动

- 保留已知出土点及周边的成熟与更新木本植物、连续林带和未扰动根区土壤，管理期限至少覆盖完整 17 年周期。[S12]
- 在施工、整地、铺装和大规模换树前查询当地周期群点位，并保留出土孔、根区和产卵所需细枝。[S09] [S12]
- 对幼树采用合适的透气网罩，避免为成虫集中出土进行广域喷药；成熟树通常不需化学控制。[S33]
- 固定点同时记录出土孔、若虫、蜕壳、合唱、交配、产卵枝和未检出，并保存日期、坐标、调查时长与天气。[S09]
- 新点位和离群出土应保存腹面、胸侧照片、鸣声与周期信息，避免把近似 *Magicicada* 误定为本种。[S08] [S10]
- 地图保留点数据和调查状态，不用县级填色或手绘包络夸大连续分布与周期群重叠。[S09]
- 推动依据现行 IUCN 标准进行全球重评，单独报告评估年龄、当前趋势、成熟个体估计和地区差异。[S27] [S28]

## 页面文案、故事与展示数字草案

### summary

> 北美洲东部的十七年周期蝉，地下若虫随宿主季节循环发育，同一地区的成虫按周期集中出土；宽橙色腹带、眼后橙斑和近似“Pharaoh”的雄鸣有助辨认本种。

### description

> 十七年蝉 *Magicicada septendecim* 是周期蝉属北方 17 年型的 decim 组成员。成虫黑色，红眼与橙色翅脉醒目，腹面有宽橙带，复眼后方到前翅基部之间带橙色。若虫长期生活在木本植物根区，同一地点的大部分个体在第十七年同步出土；提前或延后的离群出土说明“17 年”描述种群周期，不能当作每个个体精确到日的寿命。雄虫以第一腹节的一对鼓膜器发声，具有交配意愿的雌虫用定时振翅回应。IUCN 在 1996 年依据 2.3 版标准评为 LR/nt，本档案按现行汇总口径记为 NT；这份旧评估不能代替近期种群趋势、成熟个体数或威胁重评。2026 年 CITES 附录未列出本种，这项名录结果不代表无危、没有地方保护需求或贸易没有影响。

### 六段故事

1. `decim-identification`
   - label：分类与辨识
   - title：宽橙腹带与眼后橙斑标出 decim 组轮廓
   - body：ITIS 将 *Magicicada septendecim* 作为有效种，归入半翅目蝉科周期蝉属；“17-year locust”只是英语俗名，它不属于直翅目的蝗虫。UConn 以较大体型、腹面宽橙带、复眼后方至前翅基部的橙色区和近似“Pharaoh”的叫声短语辅助辨识。Alexander 与 Moore 的鉴别表给出头至腹端 27 至 33 mm；这不含翅尖，也不是所有个体的硬范围。照片外形和人耳拟声不能单独完成种级鉴定，可靠记录还需腹面、胸侧、鸣声、地点与周期信息互证。[S01] [S05] [S08]
2. `seventeen-year-underground-cycle`
   - label：地下十七年
   - title：若虫借宿主树的季节循环校准长周期
   - body：周期蝉属若虫在地下经历五个龄期，以木本植物根部木质部液体为食。Karban 等改变承载若虫的宿主树季节循环并诱发提前变态，支持若虫利用宿主季节信号计年；实验没有找出感受器、信号分子或完整生理时钟。十七年是同一地区年级群的主周期，离群个体可以提前或延后出土。[S07] [S17] [S19]
3. `synchronized-emergence-boundaries`
   - label：同步出土
   - title：春末的土温参与触发，地点决定日历
   - body：临近出土的若虫修筑通向地表的洞道，许多个体会在少数夜晚集中爬出并在树干等基质上完成终龄蜕皮。Heath 的研究把约 20 cm 土深接近 17.8°C 作为所研究群体的热同步参照；它不是本种全分布区的固定阈值。Maier 对 Connecticut Brood II 的 1979 年观察发现多数若虫在日落前后出土，苹果园与邻近森林的季节进程有差异。[S20] [S21]
4. `chorus-and-wing-flick-duet`
   - label：鸣声与回应
   - title：雄虫唱一段，雌虫用翅膀答一句
   - body：雄虫第一腹节两侧各有一枚鼓膜器，成熟后在高枝形成合唱群。decim 组雄虫在合唱与短飞搜索之间切换，接近有回应的雌虫时转入 CI、CII、CIII 求偶序列。具有交配意愿的雌虫会在雄鸣后的物种特定时刻振翅。“Pharaoh”只描述人耳听感，静态图片无法还原频率、声压或回应时序。[S05] [S08] [S22] [S23] [S35]
5. `twig-oviposition-and-hatching`
   - label：产卵与孵化
   - title：活枝内的卵室接回地下世代
   - body：交配后的雌虫用产卵器在活枝中切出一系列 Y 形卵室。UConn 的周期蝉属综述给出每室最多约 20 枚、一只雌虫最多约 600 枚和约 6 至 10 周孵化期；这些是属级上限或概括，不能当成本种每只雌虫的固定产量与日程。初龄若虫孵化后落地、钻入土中并寻找细根。[S07]
6. `broods-and-stale-assessment`
   - label：周期群与保护
   - title：罗马数字记录出土年份，旧红色名录留下监测缺口
   - body：brood 是某地区按共同日程出土的记账单位，不是物种、亚种或单一演化种群。2019 年研究表把本种记录于现存 17 年周期群 I–X、XIII–XIV。IUCN 1996 年 `LR/nt` 在现行汇总中并入 NT，但近三十年的评估年龄阻止我们推断当前趋势、成熟个体数或威胁强度；2026 年 CITES 附录未列名也不能补上这些数据。[S09] [S13] [S27] [S29] [S31]

### 四项展示数字

```ts
featuredStats: [
  {
    key: 'population-cycle',
    label: '年级群主周期',
    value: '17',
    unit: '年',
    note:
      '描述同一地区大多数个体的出土周期；straggler 可提前或延后，不能当作每只个体固定寿命。',
  },
  {
    key: 'diagnostic-body-length',
    label: '鉴别表头腹长',
    value: '27–33',
    unit: '毫米',
    note:
      'Alexander 与 Moore 1962 年头至腹端范围，不含翅尖，也不是全种绝对极值。',
  },
  {
    key: 'nymphal-instars',
    label: '地下若虫龄期',
    value: '5',
    unit: '龄',
    note:
      'UConn 对周期蝉属生活史的概括；各龄持续时间和根区深度不是固定值。',
  },
  {
    key: 'documented-broods',
    label: '文献所列现存周期群',
    value: 'I–X、XIII–XIV',
    note:
      'Du et al. 2019 表中所列；brood 可含多个物种，不等于亚种、单一演化种群或连续分布区。',
  },
],
```

17 年、五个龄期和周期群编号适合作为带边界的展示数字。约 17.8°C、6 至 10 周、每室 20 枚、每雌 600 枚和翅扩展约 40 分钟都不进入通用结构化指标：它们分别是研究地点值、属级概括、上限或实验结果。[S07] [S20] [S24]

## 可直接落库的来源数组

```ts
const SEVENTEEN_YEAR_CICADA_SOURCE_DATE = '2026-09-01' as const;
const SEVENTEEN_YEAR_CICADA_CONTENT_DATE = '2026-09-01' as const;

const SEVENTEEN_YEAR_CICADA_SOURCES = [
  {
    title: 'ITIS: Magicicada septendecim, TSN 847190',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=847190',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'World Auchenorrhyncha Database: Magicicada septendecim (Linnaeus, 1758)',
    url: 'https://hoppers.speciesfile.org/otus/7861/overview',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'GBIF / Catalogue of Life: Magicicada septendecim',
    url: 'https://www.gbif.org/taxon/3XGV3',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'Davis 1925: Proposal of Magicicada and current combination',
    url: 'https://orthsoc.org/sina/c700ld25.pdf',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Alexander and Moore 1962: Evolutionary relationships and identification of Magicicada',
    url: 'https://deepblue.lib.umich.edu/items/858cf767-7c61-4baa-bd5a-5e09fcd59950',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service: Pharaoh Cicada',
    url: 'https://www.fws.gov/species/pharaoh-cicada-magicicada-septendecim',
    kind: 'taxonomy',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: General Periodical Cicada Information',
    url: 'https://cicadas.uconn.edu/',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: Magicicada septendecim species account',
    url: 'https://cicadas.uconn.edu/species/m_septendecim/',
    kind: 'general',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: Periodical cicada broods',
    url: 'https://cicadas.uconn.edu/broods/',
    kind: 'distribution',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: Periodical cicada stragglers',
    url: 'https://cicadas.uconn.edu/stragglers/',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: Brood XI (Extinct)',
    url: 'https://cicadas.uconn.edu/broods/brood_11/',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: Climate and Periodical Cicadas',
    url: 'https://cicadas.uconn.edu/climate-change-and-periodical-cicadas/',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Du et al. 2019: Mitochondrial genomics of three periodical cicada species groups',
    url: 'https://doi.org/10.1093/molbev/msz051',
    kind: 'distribution',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Simon et al. 2022: Advances in the Evolution and Ecology of 13- and 17-Year Periodical Cicadas',
    url: 'https://doi.org/10.1146/annurev-ento-072121-061108',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Sota 2022: Life-cycle control of 13- and 17-year periodical cicadas',
    url: 'https://doi.org/10.1111/1440-1703.12354',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Dybas and Lloyd 1974: The Habitats of 17-Year Periodical Cicadas',
    url: 'https://doi.org/10.2307/2937032',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'White and Strehl 1978: Xylem feeding by periodical cicada nymphs on tree roots',
    url: 'https://doi.org/10.1111/j.1365-2311.1978.tb00933.x',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Hepler et al. 2023: Do adult Magicicada feed? Molecular gut-content evidence',
    url: 'https://doi.org/10.1093/jisesa/iead082',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Karban, Black and Weinbaum 2000: How 17-year cicadas keep track of time',
    url: 'https://doi.org/10.1046/j.1461-0248.2000.00164.x',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Heath 1968: Thermal Synchronization of Emergence in Periodical 17-year Cicadas',
    url: 'https://doi.org/10.2307/2423537',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Maier 1982: Observations on Magicicada septendecim, Brood II in Connecticut',
    url: 'https://doi.org/10.1093/aesa/75.1.14',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Cooley and Marshall 2001: Sexual Signaling in Periodical Cicadas',
    url: 'https://doi.org/10.1163/156853901753172674',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'Reid 1971: Periodical cicada mechanism of sound production',
    url: 'https://doi.org/10.1126/science.172.3986.949',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Salcedo et al. 2023: Transient use of hemolymph for hydraulic wing expansion in cicadas',
    url: 'https://doi.org/10.1038/s41598-023-32533-4',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Karban 1982: Increased Reproductive Success at High Densities and Predator Satiation',
    url: 'https://doi.org/10.2307/1938949',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'Yang 2004: Periodical cicadas as resource pulses in North American forests',
    url: 'https://doi.org/10.1126/science.1103114',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'IUCN 1996: Magicicada septendecim assessment, T12691A3373584',
    url: 'https://doi.org/10.2305/IUCN.UK.1996.RLTS.T12691A3373584.en',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List summary statistics, version 2026-1',
    url: 'https://nrl.iucnredlist.org/resources/summary-statistics',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'IUCN category mapping: NT includes legacy LR/nt',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2025-1_RL_Table_7.pdf',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'NatureServe Explorer: Magicicada septendecim',
    url: 'https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.112782/Magicicada_septendecim',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'University of Maryland Extension: Cicadas in Maryland',
    url: 'https://extension.umd.edu/resource/cicadas-maryland',
    kind: 'general',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title:
      'USDA Forest Service: Forest Pest Insects in North America, Periodical Cicada',
    url: 'https://www.fs.usda.gov/foresthealth/technology/pdfs/Forest_Pest_Insects_Photo_Guide_508.pdf',
    kind: 'general',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
  {
    title: 'UConn: Periodical cicada behavior and sexual signaling',
    url: 'https://cicadas.uconn.edu/behavior/',
    kind: 'ecology',
    accessedAt: SEVENTEEN_YEAR_CICADA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

代码对象不必收进全部 35 条来源。最低可交付来源集应保留：ITIS、UConn 物种页、UConn 总论、UConn behavior、UConn broods、Alexander 与 Moore、Maier、Heath、Karban 计年、Cooley 与 Marshall、Du、Hepler、IUCN 旧评估、IUCN 映射、NatureServe、CITES 附录和 Checklist。研究档案的完整来源表用于保留证据边界。

## 完整 `Species` 字段草案

以下对象符合 `src/types/species.ts` 当前接口。媒体文字以已验收的六张实际图片为准，不把图片当作分类凭证或行为记录。

```ts
{
  id: 'species-magicicada-septendecim',
  slug: 'seventeen-year-cicada',
  names: {
    zh: '十七年蝉',
    en: 'Seventeen-year Cicada',
    aliases: [
      '林奈十七年蝉',
      '法老蝉',
      'Pharaoh cicada',
      'Linnaeus’ 17-year cicada',
      'Seventeen Year Periodical Cicada',
      'Decim Periodical Cicada',
      '17-year locust',
    ],
  },
  scientificName: 'Magicicada septendecim',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Insecta', '昆虫纲'),
    taxon('Hemiptera', '半翅目'),
    taxon('Cicadidae', '蝉科'),
    taxon('Magicicada', '周期蝉属'),
  ),
  conservation: conservation('NT', 'unknown', 1996),
  distribution: {
    realms: ['terrestrial'],
    continents: ['北美洲'],
    regions: ['北美洲东部', '美国东部与中部的十七年周期群分布区'],
    countries: ['美国'],
    endemicTo: ['北美洲东部'],
    range:
      '分布限于北美洲东部，现代核验点位与现存十七年周期群资料集中在美国东部和中部。1996 年 IUCN 与 NatureServe 涉及加拿大，但当前可核验资料不足以把加拿大写成已确认的现存国家记录。UConn 用点数据呈现记录，未画连续边界；空白地点不等于缺失，点位也不表示丰度。2019 年表把本种列入现存十七年周期群 I—X、XIII—XIV；这些是地区加共同出土年份的记账单位，不是十二个亚种或连续种群。',
    center: { lat: 39.5, lng: -82.5 },
  },
  habitats: [
    {
      name: '北美洲东部落叶林与林缘',
      realm: 'terrestrial',
      description:
        '活木本植物同时提供地下若虫的根部食物、成虫取食和鸣叫基质，以及雌虫产卵细枝；全分布区的林分组成和郁闭度偏好没有统一量化。',
      isPrimary: true,
    },
    {
      name: '次生林、林带、果园与有成熟树木的居住区',
      realm: 'terrestrial',
      description:
        '本种可利用受扰动次生林和人工木本景观；可出现不代表果园或庭院是全种首选，也不表示短期重新植树能恢复消失的年级群。',
    },
    {
      name: '木本宿主根区土壤',
      realm: 'terrestrial',
      description:
        '若虫在地下洞道中经历五个龄期并以口针进入根部木质部；根深、土深和活动范围随地点、宿主、土壤和龄期变化。',
    },
  ],
  measurements: {
    length: {
      min: 27,
      max: 33,
      unit: 'mm',
      note:
        'Alexander 与 Moore 1962 年物种鉴别表的头至腹端体长，不含超出腹端的翅；这是鉴别资料范围，不是所有成虫的绝对极值或图片测量。',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: [
      '若虫取食的木本植物根部木质部液体',
      '成虫取食的活木本枝条植物液体',
    ],
    description:
      '若虫以口针进入木本植物根部木质部；成虫也会在活木本枝条上取食。2023 年分子肠内容研究支持成虫在硬化后摄入植物来源物质，但不能给出本种全域宿主清单、比例或单只摄入量。',
  },
  activity: [
    '若虫期长期在地下并经历五个龄期',
    '同一周期群在主出土年高度同步，但离群个体可提前或延后',
    '出土若虫常在日落后爬上垂直基质完成终龄蜕皮',
    '雄虫成熟后在合唱群中鸣叫并穿插短飞搜索',
    '出土时刻、土温和活动峰随地点、天气与周期群变化',
  ],
  tags: [
    '十七年周期',
    '北美洲东部特有',
    '同步出土',
    '地下若虫',
    '木质部取食',
    '雄虫鼓膜器鸣叫',
    '雌虫振翅回应',
    '枝条产卵',
    '捕食者饱和',
    'IUCN近危旧评估',
  ],
  summary:
    '北美洲东部的十七年周期蝉，地下若虫随宿主季节循环发育，同一地区的成虫按周期集中出土；宽橙色腹带、眼后橙斑和近似“Pharaoh”的雄鸣有助辨认本种。',
  description:
    '十七年蝉 Magicicada septendecim 是周期蝉属北方十七年型的 decim 组成员。成虫黑色，红眼与橙色翅脉醒目，腹面有宽橙带，复眼后方到前翅基部之间带橙色。若虫长期生活在木本植物根区，同一地点的大部分个体在第十七年同步出土；提前或延后的离群出土说明“17 年”描述种群周期，不能当作每个个体精确到日的寿命。雄虫以第一腹节的一对鼓膜器发声，具有交配意愿的雌虫用定时振翅回应。IUCN 在 1996 年依据 2.3 版标准评为 LR/nt，本档案按现行汇总口径记为 NT；这份旧评估不能代替近期种群趋势、成熟个体数或威胁重评。2026 年 CITES 附录未列出本种，这项名录结果不代表无危、没有地方保护需求或贸易没有影响。',
  storySections: [
    {
      key: 'decim-identification',
      label: '分类与辨识',
      title: '宽橙腹带与眼后橙斑标出 decim 组轮廓',
      body:
        'ITIS 将 Magicicada septendecim 作为有效种，归入半翅目蝉科周期蝉属；“17-year locust”只是英语俗名，它不属于直翅目的蝗虫。UConn 以较大体型、腹面宽橙带、复眼后方至前翅基部的橙色区和近似“Pharaoh”的叫声短语辅助辨识。Alexander 与 Moore 的鉴别表给出头至腹端 27—33 毫米；这不含翅尖，也不是所有个体的硬范围。照片外形和人耳拟声不能单独完成种级鉴定，可靠记录还需腹面、胸侧、鸣声、地点与周期信息互证。',
    },
    {
      key: 'seventeen-year-underground-cycle',
      label: '地下十七年',
      title: '若虫借宿主树的季节循环校准长周期',
      body:
        '周期蝉属若虫在地下经历五个龄期，以木本植物根部木质部液体为食。Karban 等改变承载若虫的宿主树季节循环并诱发提前变态，支持若虫利用宿主季节信号计年；实验没有找出感受器、信号分子或完整生理时钟。十七年是同一地区年级群的主周期，离群个体可以提前或延后出土，因此档案不把它写成固定寿命或零误差倒计时。',
    },
    {
      key: 'synchronized-emergence-boundaries',
      label: '同步出土',
      title: '春末的土温参与触发，地点决定日历',
      body:
        '临近出土的若虫修筑通向地表的洞道，许多个体会在少数夜晚集中爬出并在树干等基质上完成终龄蜕皮。Heath 的研究把约 20 厘米土深接近 17.8 摄氏度作为所研究群体的热同步参照；它不是本种全分布区的固定阈值。Maier 对康涅狄格 Brood II 的 1979 年观察发现多数若虫在日落前后出土，苹果园与邻近森林的季节进程有差异。',
    },
    {
      key: 'chorus-and-wing-flick-duet',
      label: '鸣声与回应',
      title: '雄虫唱一段，雌虫用翅膀答一句',
      body:
        '雄虫第一腹节两侧各有一枚鼓膜器，成熟后在高枝形成合唱群。decim 组雄虫在合唱与短飞搜索之间切换，接近有回应的雌虫时转入 CI、CII、CIII 求偶序列。具有交配意愿的雌虫会在雄鸣后的物种特定时刻振翅。“Pharaoh”只描述人耳听感，静态图片无法还原频率、声压或回应时序。',
    },
    {
      key: 'twig-oviposition-and-hatching',
      label: '产卵与孵化',
      title: '活枝内的卵室接回地下世代',
      body:
        '交配后的雌虫用产卵器在活枝中切出一系列 Y 形卵室。UConn 的周期蝉属综述给出每室最多约 20 枚、一只雌虫最多约 600 枚和约 6—10 周孵化期；这些是属级上限或概括，不能当成本种每只雌虫的固定产量与日程。初龄若虫孵化后落地、钻入土中并寻找细根。',
    },
    {
      key: 'broods-and-stale-assessment',
      label: '周期群与保护',
      title: '罗马数字记录出土年份，旧红色名录留下监测缺口',
      body:
        'brood 是某地区按共同日程出土的记账单位，不是物种、亚种或单一演化种群。2019 年研究表把本种记录于现存十七年周期群 I—X、XIII—XIV。IUCN 1996 年 LR/nt 在现行汇总中并入 NT，但近三十年的评估年龄阻止我们推断当前趋势、成熟个体数或威胁强度；2026 年 CITES 附录未列名也不能补上这些数据。',
    },
  ],
  keyFacts: [
    'ITIS 采用 Animalia—Arthropoda—Insecta—Hemiptera—Cicadidae—Magicicada 的现行主路径；旧文献中的 Homoptera 和 Tibicinidae 不作为主分类。',
    '成虫腹面有宽橙带，复眼后方至前翅基部带橙色；这些特征要与鸣声、地点和周期资料合并判断。',
    'Alexander 与 Moore 1962 年鉴别表记录头至腹端 27—33 毫米，不含翅尖，也不构成全种绝对极值。',
    '十七年描述同一地点大多数个体的年级周期；提前或延后出土的 straggler 会偏离主日程。',
    '周期蝉属若虫在地下经历五个龄期并取食根部木质部液体，具体根深和宿主比例缺少本种全域数据。',
    '操纵宿主树季节循环可诱发提前变态，支持以宿主季节信号计年；完整感受与计时机制仍未知。',
    '约 20 厘米土深接近 17.8 摄氏度来自 Heath 的研究群体，不是所有地点和年份的硬出土阈值。',
    '雄虫以第一腹节的一对鼓膜器鸣叫，具有交配意愿的雌虫会按物种特定时序振翅回应。',
    '每室最多约 20 枚卵、雌虫最多约 600 枚和 6—10 周孵化期均为周期蝉属概括，不是本种固定常数。',
    'brood 是地区加共同出土年份的记账单位，可包含多个物种，也可能包含彼此分离的区域。',
    '2019 年汇总把本种列于 I—X、XIII—XIV 共十二个现存十七年周期群；这些编号不是十二个亚种。',
    'IUCN 1996 年 LR/nt 旧评估按现行汇总记作 NT，种群趋势仍为 unknown，档案不虚构成熟个体数。',
    '本种未见于 2026 年 3 月 5 日生效的 CITES 附录；未列名不等于无危或没有地方保护需求。',
  ],
  threats: [
    '清除成熟木本植被和长期土壤扰动可能同时移除取食根系与地下年级群，物种级影响缺少跨周期量化',
    '道路、建设和林地破碎化可能切断局地出土斑块，1996 年评估后的范围变化尚未完成全球重评',
    '产卵枝条修剪、老树替换和出土季大面积施工可能削弱局地繁殖，影响取决于地点与周期群',
    '农药、土壤污染和宿主树管理可能接触若虫或成虫，现有资料不足以排列全分布区威胁强度',
    '气候变化可能改变宿主季节信号和春季土温，但当前影响仍以预测为主，不能声称已证实全球下降',
    '周期群间隔十七年，缺少跨完整世代的标准化重复调查会掩盖局地衰退与离群出土',
    'IUCN 评估停留在 1996 年，当前成熟个体数、总体趋势和各威胁贡献均未知',
  ],
  conservationActions: [
    '保留已知出土点及周边的成熟木本植被、更新树木、林带和根区土壤，维持跨十七年的连续宿主条件',
    '在施工、铺装、整地和大规模换树前查询当地周期群点位并减少根区扰动',
    '对新栽幼树使用透气物理网罩，避免为集中出土进行广域喷药',
    '在固定点按周期群日程重复记录出土孔、若虫、蜕壳、合唱、产卵枝和未检出',
    '为新点位和离群出土保存腹面与胸侧照片、鸣声、日期、坐标和凭证材料',
    '地图保留点数据与调查状态，不用县级填色夸大连续分布或周期群重叠',
    '推动采用现行 IUCN 标准的全球重评，并分别报告评估年龄、趋势证据和地区差异',
  ],
  metrics: {
    adultLengthCm: [2.7, 3.3],
  },
  featuredStats: [
    {
      key: 'population-cycle',
      label: '年级群主周期',
      value: '17',
      unit: '年',
      note:
        '描述同一地区大多数个体的出土周期；straggler 可提前或延后，不能当作每只个体固定寿命。',
    },
    {
      key: 'diagnostic-body-length',
      label: '鉴别表头腹长',
      value: '27–33',
      unit: '毫米',
      note:
        'Alexander 与 Moore 1962 年头至腹端范围，不含翅尖，也不是全种绝对极值。',
    },
    {
      key: 'nymphal-instars',
      label: '地下若虫龄期',
      value: '5',
      unit: '龄',
      note:
        'UConn 对周期蝉属生活史的概括；各龄持续时间和根区深度不是固定值。',
    },
    {
      key: 'documented-broods',
      label: '文献所列现存周期群',
      value: 'I–X、XIII–XIV',
      note:
        'Du et al. 2019 表中所列；brood 可含多个物种，不等于亚种、单一演化种群或连续分布区。',
    },
  ],
  media: {
    image:
      './images/species/seventeen-year-cicada/01-adult-forest-portrait.webp',
    alt: '北美洲东部落叶林枝条上，一只完整成年周期蝉侧向停栖，黑色身体、红眼、透明翅与橙色翅脉清楚可见',
    focalPoint: { x: 0.62, y: 0.48 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image:
          './images/species/seventeen-year-cicada/02-adult-external-morphology.webp',
        alt: '浅色树皮上，一只成年周期蝉以侧背视角停栖，红色复眼、黑色胸部、透明四翅和橙色翅脉清楚可见',
        title: '成虫侧背形态',
        caption:
          'AI 生成形态重建；实图没有展示腹面，不能核验宽橙腹带，也不能独立确认物种、性别、头腹长或分类身份。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/seventeen-year-cicada/03-synchronized-night-emergence.webp',
        alt: '春末夜间的树干基部，数只若虫与空蜕分散出现，一只苍白刚蜕成虫正在展翅，旁边有一只已变暗的成虫',
        title: '小范围夜间出土与硬化序列',
        caption:
          'AI 生成出土重建；画面把若虫、空蜕、苍白未硬化成虫和已变暗成虫放在同一小场景中，不能测量土深、土温、密度、日期、周期群身份、阶段时长或单夜出土比例。',
        focalPoint: { x: 0.52, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/seventeen-year-cicada/04-male-chorus-calling.webp',
        alt: '阳光照到的落叶林树冠中，四只成年周期蝉分散停在彼此分离的枝条上',
        title: '高枝小型合唱群情景',
        caption:
          'AI 生成合唱情景；四只个体彼此分离，静帧不能确认性别、正在发声、叫声频率、声压、短语时长、CI—CIII 阶段或雌虫振翅时序。',
        focalPoint: { x: 0.57, y: 0.46 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/seventeen-year-cicada/05-female-twig-oviposition.webp',
        alt: '一只雌性周期蝉停在活树枝上，尖窄腹端直接贴住一条横向细枝，画面没有外露卵',
        title: '细枝上的产卵接触情景',
        caption:
          'AI 生成产卵重建；画面只表现腹端直接接触横向细枝，不能确认卵室形状、卵数、胚龄、孵化期、孵化率、树种适宜性或枝条损伤程度。',
        focalPoint: { x: 0.56, y: 0.51 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/seventeen-year-cicada/06-underground-nymph-root-feeding.webp',
        alt: '地下土室中，一只晚期周期蝉若虫位于一条细树根旁，粗壮掘土前足和贴近根部的头部口器可见',
        title: '土室细根旁的地下若虫',
        caption:
          'AI 生成地下微距；实图没有完整地表剖面，不能确定真实深度、若虫年龄、具体龄期、宿主树种、口针是否已进入木质部、取食流量或季节计数机制。',
        focalPoint: { x: 0.55, y: 0.59 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: SEVENTEEN_YEAR_CICADA_SOURCES,
  featured: true,
  publishedAt: SEVENTEEN_YEAR_CICADA_CONTENT_DATE,
  updatedAt: SEVENTEEN_YEAR_CICADA_CONTENT_DATE,
}
```

如果产品筛选器把 `metrics.adultLengthCm` 显示成全球绝对最小至最大值，应把 `metrics` 改为空对象，只保留带注释的 `measurements.length`。如果筛选器明确显示为“鉴别资料头腹长”，可以保留 `[2.7, 3.3]`。

## 六图提示词与已验收画面边界

目录和固定规格：

- source：`src/assets/source/species/seventeen-year-cicada/`
- runtime：`public/images/species/seventeen-year-cicada/`
- 六图均为 1536×1024、3:2、sRGB、不透明单帧；不得出现文字、标签、箭头、比例尺、地图、水印、边框或拼贴图版。
- 画面是 AI 生成科学情景重建，不是凭证标本、实地记录、声学记录或行为频率证据。caption 必须保留这一性质。

| No. | source 文件 | runtime 文件 | 已验收主体 | 焦点 |
| --- | --- | --- | --- | --- |
| 01 | `01-adult-forest-portrait-source.png` | `01-adult-forest-portrait.webp` | 林中右侧单只成虫封面 | `{ x: 0.62, y: 0.48 }` |
| 02 | `02-adult-external-morphology-source.png` | `02-adult-external-morphology.webp` | 浅色树皮上的单只成虫侧背形态 | `{ x: 0.50, y: 0.50 }` |
| 03 | `03-synchronized-night-emergence-source.png` | `03-synchronized-night-emergence.webp` | 小范围夜间若虫、空蜕、未硬化与已变暗成虫 | `{ x: 0.52, y: 0.58 }` |
| 04 | `04-male-chorus-calling-source.png` | `04-male-chorus-calling.webp` | 日间树冠四只彼此分离的成虫 | `{ x: 0.57, y: 0.46 }` |
| 05 | `05-female-twig-oviposition-source.png` | `05-female-twig-oviposition.webp` | 单只雌虫尖窄腹端直接贴住横向细枝，无外露卵 | `{ x: 0.56, y: 0.51 }` |
| 06 | `06-underground-nymph-root-feeding-source.png` | `06-underground-nymph-root-feeding.webp` | 土室内单只晚期若虫贴近一条细根 | `{ x: 0.55, y: 0.59 }` |

### 01 林中单只成虫封面

- **正向提示词**：documentary wildlife macro photograph, one complete adult periodical cicada perched sideways on a diagonal gray-brown twig on the right side of frame, eastern North American deciduous woodland, softly recognizable oak-like leaves and layered forest bokeh, black dorsal body, vivid red compound eyes, orange wing veins, four transparent membranous wings held roof-like, six legs, restrained black W-like forewing venation, natural spring daylight, accurate insect anatomy, generous uncluttered negative space on the left, scientific reconstruction, 3:2 horizontal composition.
- **负向提示词**：第二只蝉、绿色年蝉、蝗虫体形、幻想甲壳、眼睛或足数量错误、六翅或重叠翅、手持标本、针插标本、文字、地图、声波、夸张霓虹。不要用该视角声称看见腹面宽橙带。
- **alt**：北美洲东部落叶林枝条上，一只完整成年周期蝉侧向停栖，黑色身体、红眼、透明翅与橙色翅脉清楚可见。
- **建议 title / caption**：`林中十七年蝉成虫` / `AI 生成科学情景重建；单只成虫位于林中枝条右侧。画面不能独立确认种级身份、性别、地点、周期群、体长或野外丰度。`

### 02 单只成虫侧背形态

- **正向提示词**：one complete adult periodical cicada clinging naturally to pale gray tree bark, close side-dorsal three-quarter view, whole head thorax abdomen legs and all four wings within frame, black thorax and abdomen, red compound eyes, clear membranous wings with orange veins, realistic fine setae and tarsal grip, soft neutral woodland light, high-detail scientific morphology reconstruction, shallow depth of field, 3:2 horizontal.
- **负向提示词**：第二只标本、背腹面对照拼图、悬浮的腹面、昆虫针、解剖标签、尺、培养皿、蝗虫后足、绿色身体、缺足、多足、多翅。不得把实图描述成中性棚拍背景，也不得声称它显示腹面宽橙带。
- **alt**：浅色树皮上，一只成年周期蝉以侧背视角停栖，红色复眼、黑色胸部、透明四翅和橙色翅脉清楚可见。
- **title / caption**：`成虫侧背形态` / `AI 生成形态重建；实图没有展示腹面，不能核验宽橙腹带，也不能独立确认物种、性别、头腹长或分类身份。`

### 03 小范围夜间出土与硬化序列

- **正向提示词**：spring dusk at the base of one deciduous tree, a limited small grouping rather than a mass swarm, several mature periodical cicada nymphs and scattered empty exuviae on bark and soil, one pale cream teneral adult completing ecdysis with expanded translucent wings, one separate darker hardened adult nearby, a few emergence holes, damp leaf litter, subdued blue night and warm natural rim light, anatomically distinct stages, documentary scientific reconstruction, 3:2 horizontal.
- **负向提示词**：百万虫潮、白昼飞群、蛹或茧、幼虫状毛毛虫、不同阶段粘成一体、血腥蜕皮、密集铺满树干、精确温度或日期文字、荧光魔法。数量保持小，所有个体和蜕壳轮廓彼此可辨。
- **alt**：春末夜间的树干基部，数只若虫与空蜕分散出现，一只苍白刚蜕成虫正在展翅，旁边有一只已变暗的成虫。
- **title / caption**：`小范围夜间出土与硬化序列` / `AI 生成出土重建；画面把若虫、空蜕、苍白未硬化成虫和已变暗成虫放在同一小场景中，不能测量土深、土温、密度、日期、周期群身份、阶段时长或单夜出土比例。`

### 04 日间树冠四只分离成虫

- **正向提示词**：sunlit eastern deciduous forest canopy, exactly four complete adult periodical cicadas resting separately on four clearly distinct twigs, no physical contact and no overlapping bodies, one larger foreground insect to the right and three smaller background insects at different depths, black bodies, red eyes, orange-veined transparent wings, natural daytime foliage and dappled light, intended small male chorus context, documentary wildlife reconstruction, 3:2 horizontal.
- **负向提示词**：第五只蝉、紧密虫团、交配、雌雄二重唱、可见声波、扬声器、音符、飞行虫潮、镜像复制、肢翅融合、夜景、文字。雄性和“正在鸣叫”属于情景意图，不能靠静帧核验。
- **alt**：阳光照到的落叶林树冠中，四只成年周期蝉分散停在彼此分离的枝条上。
- **title / caption**：`高枝小型合唱群情景` / `AI 生成合唱情景；四只个体彼此分离，静帧不能确认性别、正在发声、叫声频率、声压、短语时长、CI—CIII 阶段或雌虫振翅时序。`

### 05 雌虫腹端接触横向细枝

- **正向提示词**：one complete female periodical cicada in strict side view on a living pencil-thin woody twig, abdomen tapering to a short natural ovipositor that touches a shallow short longitudinal slit in intact live bark, no eggs visible outside the twig, black body, red eyes, orange-veined transparent wings, six legs gripping bark, woodland macro photography, restrained scientifically plausible oviposition reconstruction, 3:2 horizontal.
- **负向提示词**：长矛、注射针、钻头、锯、外露成堆卵、鱼卵、断裂枝条、枯木、第二只蝉、交配、手或工具、文字、剖面图。产卵器必须短而与腹端连续，切口浅小。
- **alt**：一只雌性周期蝉停在活树枝上，尖窄腹端直接贴住一条横向细枝，画面没有外露卵。
- **title / caption**：`细枝上的产卵接触情景` / `AI 生成产卵重建；画面只表现腹端直接接触横向细枝，不能确认卵室形状、卵数、胚龄、孵化期、孵化率、树种适宜性或枝条损伤程度。`

### 06 土室细根旁的单只晚期若虫

- **正向提示词**：close underground macro cutaway limited to one compact dark soil chamber, exactly one late-instar periodical cicada nymph with robust fossorial forelegs, visible wing pads but no adult wings, one fine woody root crossing the chamber diagonally, the nymph's head and rostrum placed gently against the root surface, realistic granular soil, fine root hairs and moist earthen texture, no aboveground scene, scientific reconstruction, 3:2 horizontal.
- **负向提示词**：蠕虫、毛毛虫、甲虫幼虫、蛹、茧、咀嚼根块、成人透明翅、多只若虫、完整大树剖面、地面建筑、固定深度刻度、口器变成长针、文字标签。接触姿势可以暗示取食场景，但不得把口针进入木质部画成可见剖面事实。
- **alt**：地下土室中，一只晚期周期蝉若虫位于一条细树根旁，粗壮掘土前足和贴近根部的头部口器可见。
- **title / caption**：`土室细根旁的地下若虫` / `AI 生成地下微距；实图没有完整地表剖面，不能确定真实深度、若虫年龄、具体龄期、宿主树种、口针是否已进入木质部、取食流量或季节计数机制。`

### 六图通用拒收项

- 把周期蝉画成绿色年蝉、蝗虫、甲虫、螳螂或带蛹期的完全变态昆虫。
- 足、翅、眼或体节数量错误；个体重叠、镜像复制、身体融合或翅脉呈幻想纹样。
- 用图片证明学名、性别、周期群、声学参数、体长、土深、土温、取食流量、卵数或时间长度。
- 把 `17.8°C`、`40 分钟`、`600 枚`、`I–X` 等数字画进图中；这些数据各有不同证据尺度，且都不是图像可见事实。

## 字段证据矩阵

| 产品字段或叙事 | 主要证据 | 可用结论 | 不可外推 |
| --- | --- | --- | --- |
| 接受名与六级分类 | ITIS、World Auchenorrhyncha Database、Davis | 有效种、原始组合、作者和当前六级链 | 历史误拼作为公众异名；AI 图作鉴定凭证 |
| 物种形态与尺寸 | Alexander 与 Moore、UConn 物种页 | 宽橙腹带、眼后橙区；头腹长 27–33 mm | 40 mm 与头腹长合并；单张背面图完成鉴定 |
| 分布与周期群 | UConn 点位和 broods、Du 等 | 北美洲东部；本种见于 I–X、XIII–XIV | 点位连成连续面；brood 当亚种；加拿大现存记录已确认 |
| 生境 | Dybas 与 Lloyd、Maier、UConn | 落叶林、次生林、果园等木本环境及根区土壤 | 原始林专性；固定根深或单一宿主 |
| 食性 | White 与 Strehl、Hepler、UConn | 若虫根部木质部取食；硬化成虫也摄入植物物质 | 韧皮部、啃根、成虫不食、全域宿主比例 |
| 十七年周期 | UConn、Karban、Sota | 年级群主周期；宿主季节循环参与计年 | 每只个体固定寿命；完整分子时钟已知 |
| 出土 | Heath、Maier | 研究群体约 20 cm 深接近 17.8°C；单地多数日落前后出土 | 全域硬阈值、统一月份、所有个体同夜出土 |
| 鸣声与求偶 | Alexander 与 Moore、Reid、Cooley 与 Marshall、UConn | 雄虫鼓膜器、低音降调短语、雌虫定时振翅回应 | 静帧证明性别或发声；“Pharaoh”是客观声学转写 |
| 产卵 | UConn、Maier、Maryland Extension | 活枝卵室、孵化后若虫落地；幼树可物理防护 | 20/600 枚和 6–10 周写成每只本种固定值 |
| 生态作用 | Karban、Yang | 高密度出土支持捕食者饱和；混合种群形成资源脉冲 | 质数周期起源已解决；本种单独完成“森林施肥” |
| 保护 | IUCN、NatureServe、CITES | `NT / unknown / 1996`，CITES 未列名 | 现代重评、稳定趋势、LC、CITES 缺席等于安全 |
| 图片 | 已验收六张静态资产 | 可作有边界的科学情景重建 | 凭证、实地记录、行为频率或数值测量 |

## 建议测试断言与 TODO 计数

建议专项测试覆盖：

- id、slug、中文主名、英文名、接受学名和 aliases；`17-year locust` 出现时同处文本必须纠正它不是蝗虫。
- 六级分类严格为 Animalia / Arthropoda / Insecta / Hemiptera / Cicadidae / *Magicicada*；半翅目、蝉科和周期蝉属的分类树计数各增加 1。
- `conservation` 严格为 `NT / unknown / 1996`；不得出现现行 3.1 准则、成熟个体数、`stable`、`LC` 或 `assessedYear: 2026`。
- `distribution.realms` 为 terrestrial，国家暂为美国；range 同时保留北美洲东部、点位图非连续范围、brood 非分类单元和加拿大记录待核验四层边界。
- `measurements.length` 为 27–33 mm，note 含“头至腹端”“不含翅尖”“鉴别资料”；不得把 USDA 未注明量法的 40 mm 并入范围。
- `diet.types` 为 herbivore；若虫木质部和硬化成虫取食均出现，同时拒绝“韧皮部”“啃根”“成虫不吃东西”和固定宿主排名。
- 十七年进入带 note 的展示数字，不进入 `lifespanYears`；straggler 和宿主季节循环证据边界必须保留。
- I–X、XIII–XIV 进入周期群展示；不硬编码下一次出土年份，也不把十二个 brood 写成十二个亚种。
- 约 17.8°C、约 40 分钟、每室最多约 20 枚、每雌最多约 600 枚、6–10 周不得进入通用结构化指标。
- 六段故事和四张数字卡均存在；故事须覆盖分类辨识、地下周期、同步出土、鸣声回应、枝内产卵、周期群与旧评估。
- 六张图片路径和次序与上表完全一致；01 为主图，02–06 为 gallery，focal point 均在 0–1，alt/caption 与实际画面和“不能证明”边界一致。
- 静态资产测试应核对六张 source PNG 与六张 runtime WebP 均为 1536×1024、sRGB、不透明单帧、内容哈希互异，并核对 README 接受哈希。
- 来源 URL 去重、`accessedAt` 为 2026-09-01，且分类、生态、分布、保护和通用资料各有对应 `kind`。

建议验证命令：

```bash
npm run test:taxonomy
npm run typecheck
npm run build
npm test
git diff --check
```

本动物完成后的 TODO 计数变化为：物种总数 `102 → 103`，昆虫纲 `6 → 7`，半翅目、蝉科和周期蝉属各从未收录变为 1；首批剩余 `7 → 6`，前两批剩余 `37 → 36`，三批合计剩余 `66 → 65`。只有数据、图片、README、专项测试和构建均通过后，才应移除 `docs/todo.md` 中的十七年蝉条目；本研究文件本身不构成完成证明。

## 来源

| ID | 一手或官方来源 | 本档案采用的内容与边界 |
| --- | --- | --- |
| [S01] | ITIS，TSN 847190 | 接受名、作者、Pharaoh cicada 和当前分类；不负责生活史数字。 |
| [S02] | World Auchenorrhyncha Database | 原始组合、历史组合、异名、新模和扩展分类；`[sic]` 拼写不作公众别名。 |
| [S03] | GBIF / Catalogue of Life | 接受名交叉核验；不以聚合出现数据推导丰度或完整国家表。 |
| [S04] | Davis 1925 | *Magicicada* 属名提出和当前组合的历史依据。 |
| [S05] | Alexander & Moore 1962 | 物种鉴别、27–33 mm 头腹长、体色和 1–3 秒降调鸣声；范围不是绝对极值。 |
| [S06] | U.S. Fish and Wildlife Service | Pharaoh cicada 英文名和美国政府分类记录；页面不是 ESA 风险判定。 |
| [S07] | UConn 周期蝉总论 | 五龄若虫、生活史、取食、出土、产卵属级概括和捕食者饱和；属级数字不作本种常数。 |
| [S08] | UConn 本种页 | 腹面宽橙带、眼后橙区、鸣声文件和核验点；点位不代表连续范围或丰度。 |
| [S09] | UConn broods | brood 定义、现存编号和地图边界；brood 不是分类单元。 |
| [S10] | UConn stragglers | 提前或延后出土及常见偏差；离群个体不自动形成新周期群。 |
| [S11] | UConn Brood XI | 1954 年末次记录、后续未检出和灭绝模型；原因不能简化为开发。 |
| [S12] | UConn 气候与周期蝉 | 宿主、土地利用、森林斑块和气候预测；预测不作已证实全球下降。 |
| [S13] | Du et al. 2019 | 七种与十五个现存周期群的系统基因组框架；表列本种 I–X、XIII–XIV。 |
| [S14] | Simon et al. 2022 | 周期蝉演化生态综述及近缘种边界；综述不替代单项原始结果。 |
| [S15] | Sota 2022 | 地表阶段概括和 4 年内部闸门模型；闸门属于整合假说。 |
| [S16] | Dybas & Lloyd 1974 | upland woods、次生林和物种间生境分化；不支持原始林专性。 |
| [S17] | White & Strehl 1978 | 若虫唾液鞘终止于根部木质部；不证明长周期的唯一成因。 |
| [S18] | Hepler et al. 2023 | 硬化成虫植物 DNA 证据；混合种、小且不均衡样本不生成全域宿主排名。 |
| [S19] | Karban, Black & Weinbaum 2000 | 操纵宿主季节循环诱发提前变态；支持计年线索，不等于完整机制已知。 |
| [S20] | Heath 1968 | 七地点约 20 cm 深平均接近 17.8°C 的出土同步结果；不是全域硬阈值。 |
| [S21] | Maier 1982 | Connecticut Brood II 单地物候、日落出土、卵期和死亡观察；不外推全球。 |
| [S22] | Cooley & Marshall 2001 | 雄鸣与雌性定时振翅的性信号；包含周期蝉多种，不提供静帧鉴性。 |
| [S23] | Reid 1971 | *M. septendecim* 与 *M. cassini* 鼓膜器发声机制。 |
| [S24] | Salcedo et al. 2023 | 200 只本种的翅液压展开实验和约 40 分钟主要扩展；不是每只野生个体定时器。 |
| [S25] | Karban 1982 | 高密度下繁殖成功和捕食者饱和野外证据；不解决质数周期起源。 |
| [S26] | Yang 2004 | 混合种 17 年周期蝉尸体资源脉冲；不能归为本种单独效应。 |
| [S27] | IUCN 1996 物种评估 | IUCN 2.3 的 `LR/nt` 和永久记录；没有现代趋势或现行准则。 |
| [S28] | IUCN 2026-1 汇总页 | 访问时当前 Red List 版本；版本年份不是本种评估年。 |
| [S29] | IUCN 类别映射表 | 现行汇总中 `NT` 包含旧制 `LR/nt`；这是代码映射，不是重评。 |
| [S30] | NatureServe Explorer | 1986 年 G4、需要复核、国家和省级不确定记录；不能覆盖 IUCN 或确认加拿大现存种群。 |
| [S31] | CITES 2026-03-05 附录 | 当前附录全文负检索；未列名不是保护风险结论。 |
| [S32] | CITES Checklist | 接受学名和异名负检索交叉核验；数据库缺席不等于贸易可持续。 |
| [S33] | University of Maryland Extension | 幼树网罩、成熟树通常不需化学控制；园艺建议不作全球威胁排序。 |
| [S34] | USDA Forest Service 图鉴 | 40 mm 未注明量法、产卵小枝损伤和若虫影响未量化；不与头腹长合并。 |
| [S35] | UConn behavior | 雄虫合唱、搜索、求偶阶段与雌虫振翅回应；行为页不提供声压或静帧鉴性。 |

[S01]: https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=847190
[S02]: https://hoppers.speciesfile.org/otus/7861/overview
[S03]: https://www.gbif.org/taxon/3XGV3
[S04]: https://orthsoc.org/sina/c700ld25.pdf
[S05]: https://deepblue.lib.umich.edu/items/858cf767-7c61-4baa-bd5a-5e09fcd59950
[S06]: https://www.fws.gov/species/pharaoh-cicada-magicicada-septendecim
[S07]: https://cicadas.uconn.edu/
[S08]: https://cicadas.uconn.edu/species/m_septendecim/
[S09]: https://cicadas.uconn.edu/broods/
[S10]: https://cicadas.uconn.edu/stragglers/
[S11]: https://cicadas.uconn.edu/broods/brood_11/
[S12]: https://cicadas.uconn.edu/climate-change-and-periodical-cicadas/
[S13]: https://doi.org/10.1093/molbev/msz051
[S14]: https://doi.org/10.1146/annurev-ento-072121-061108
[S15]: https://doi.org/10.1111/1440-1703.12354
[S16]: https://doi.org/10.2307/2937032
[S17]: https://doi.org/10.1111/j.1365-2311.1978.tb00933.x
[S18]: https://doi.org/10.1093/jisesa/iead082
[S19]: https://doi.org/10.1046/j.1461-0248.2000.00164.x
[S20]: https://doi.org/10.2307/2423537
[S21]: https://doi.org/10.1093/aesa/75.1.14
[S22]: https://doi.org/10.1163/156853901753172674
[S23]: https://doi.org/10.1126/science.172.3986.949
[S24]: https://doi.org/10.1038/s41598-023-32533-4
[S25]: https://doi.org/10.2307/1938949
[S26]: https://doi.org/10.1126/science.1103114
[S27]: https://doi.org/10.2305/IUCN.UK.1996.RLTS.T12691A3373584.en
[S28]: https://nrl.iucnredlist.org/resources/summary-statistics
[S29]: https://nc.iucnredlist.org/redlist/content/attachment_files/2025-1_RL_Table_7.pdf
[S30]: https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.112782/Magicicada_septendecim
[S31]: https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf
[S32]: https://checklist.cites.org/
[S33]: https://extension.umd.edu/resource/cicadas-maryland
[S34]: https://www.fs.usda.gov/foresthealth/technology/pdfs/Forest_Pest_Insects_Photo_Guide_508.pdf
[S35]: https://cicadas.uconn.edu/behavior/
