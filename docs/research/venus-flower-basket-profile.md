# 阿氏偕老同穴档案研究稿

## 结论摘要

`Euplectella aspergillum` Owen, 1841 是六放海绵纲偕老同穴科的玻璃海绵，英文通名为 Venus' flower basket。台湾海洋生物博物馆的标本记录使用中文名“阿氏偕老同穴”；“维纳斯花篮”适合作通俗别名，不能替代接受学名。

活体不是博物馆里洁白、干燥的空花篮。它是带薄层软组织的筒状海绵，顶部由筛板封住，壁内的水沟系统负责滤食。水合非晶二氧化硅骨针组成纵横格架、双向斜撑、螺旋棱和基部锚丝。骨架的多级结构已经由显微与材料研究确认；“坚不可摧”“比钢更强”和“在深海用光纤通信”都超出了实验能证明的范围。

2008 年的属内修订把本种划为 4 个地理亚种：菲律宾的指名亚种、安达曼群岛一带的 `regalis`、砂拉越西岸外海的 `indonesica`，以及西澳大利亚西北部的 `australica`。论文把 `indonesica` 模式站记在“Indonesian Archipelago”，但给出的 4°31′N、112°55′E 坐标按现代国界位于马来西亚砂拉越外海。该修订所列样本形成约 85 至 741 米的深度包络。OBIS 与 GBIF 的聚合记录伸得更浅、更深，也出现佛罗里达、南大洋等与修订冲突的点位；这些记录混有旧鉴定、亚种和近似种，不能直接拿门户的最小值、最大值或地图外包络定义本种范围。

海绵通过水流过滤细菌、微型浮游生物和悬浮颗粒。2021 与 2024 年的流体研究显示，格架和螺旋结构可在低速横向来流中降低局部应力、维持内部回流，并把部分水流导向顶部；这些结果来自高分辨率数值模拟，不是原位摄食率、清除率或“零能耗取代主动泵水”的实测证据。

`Spongicola venustus` 确曾从本种内部采得，历史与馆藏记录中也有一雌一雄同处一个海绵的标本。证据不支持把每个海绵都写成“终身囚住一对夫妻虾”：该虾还有多个玻璃海绵宿主，入住数量并不恒定，配偶制度、是否终身成对以及对宿主的净利弊均未得到本种层面的验证。

本种的繁殖资料同样稀薄。Schulze 1880 年的组织研究记录过生殖阶段，后来的海绵胚胎学综述却指出，玻璃海绵较完整的发育序列来自其他物种。不能把那些比较资料直接改写成本种的雌雄同体、固定繁殖季、特定幼体过程或育幼行为。IUCN Red List 当前检索不到本种评估，因此仓库应使用 `NE / unknown`；NE 只表示未评估，不代表安全或种群稳定。

## 分类口径

仓库固定储存界、门、纲、目、科、属六个阶元。WoRMS、World Porifera Database、OBIS 与 GBIF 支持以下路径：

```text
Animalia        动物界
Porifera        多孔动物门
Hexactinellida  六放海绵纲
Lyssacinosida   松骨海绵目
Euplectellidae  偕老同穴科
Euplectella     偕老同穴属
```

- 接受名：`Euplectella aspergillum Owen, 1841`
- WoRMS AphiaID：`171897`
- GBIF taxon key：`5180237`
- 英文通名：`Venus' flower basket`；英语资料也常写 `Venus's Flower Basket`
- 中文名：`阿氏偕老同穴`，由国立海洋生物博物馆标本页面支持
- 2008 年原始论文使用中性词尾 `australicum`、`indonesicum`；WoRMS 当前接受拼法为 `australica`、`indonesica`。档案采用当前拼法，同时在来源判读中保留论文原拼法，避免误判为两组亚种。
- 2008 年修订警告原始描述和模式材料不足，若缺少骨针显微特征，单靠“花篮状”外形不能可靠排除 `E. oweni`、`E. aspera` 等近似种。

## 结构化字段建议

```ts
id: 'species-euplectella-aspergillum'
slug: 'venus-flower-basket'
names: {
  zh: '阿氏偕老同穴',
  en: "Venus' Flower Basket",
  aliases: ['维纳斯花篮']
}
scientificName: 'Euplectella aspergillum'
taxonomy: animalTaxonomy(
  taxon('Porifera', '多孔动物门'),
  taxon('Hexactinellida', '六放海绵纲'),
  taxon('Lyssacinosida', '松骨海绵目'),
  taxon('Euplectellidae', '偕老同穴科'),
  taxon('Euplectella', '偕老同穴属'),
)
conservation: conservation('NE', 'unknown')
distribution: {
  realms: ['marine'],
  continents: ['亚洲', '大洋洲'],
  regions: [
    '菲律宾宿务与吕宋外海',
    '安达曼群岛与孟加拉湾东缘',
    '砂拉越西岸外海与巽他陆架',
    '西澳大利亚西北部陆架与陆坡',
  ],
  countries: ['菲律宾', '印度', '马来西亚', '澳大利亚'],
  range:
    '按 2008 年四亚种修订，本种分布于印度-西太平洋的菲律宾、安达曼群岛、马来西亚砂拉越西岸外海和巽他陆架，以及西澳大利亚西北部。论文把 indonesica 模式站记作 Indonesian Archipelago，但坐标落在砂拉越外海。修订样本约见于 85 至 741 米；聚合门户中的更宽范围包含待复核的旧鉴定，不能直接并入。',
  center: { lat: 3, lng: 121 },
}
measurements: {}
diet: {
  types: ['filter-feeder'],
  foods: ['细菌与其他微生物', '微型浮游生物', '悬浮有机颗粒'],
  description:
    '依靠海绵水沟系统和领细胞相关结构过滤海水中的微小颗粒。骨架对环境来流的整形由数值模拟支持，但本种的原位清除率与食物组成尚无可直接归一化的物种级数据。',
}
metrics: {}
```

`measurements` 暂留空。修订论文提供的是不同亚种的模式或馆藏个体尺寸：`indonesica` 模式完整体长 190 毫米、直径约 40 毫米；`australica` 完整个体包括 110 与 150 毫米标本，另有一段 260 毫米的上部残片。它们足以描写形态，却不能合并成全种的典型长度、平均长度或绝对最大值。

## 分布、深度与鉴定边界

- 指名亚种的修订材料来自菲律宾宿务和吕宋附近，列出的多数深度约为 166 至 224 米；Challenger 209 站在宿务外海约 183 至 185 米。
- `E. a. regalis` 的模式地点在安达曼群岛，模式深度 741 米。
- `E. a. indonesica` 的模式站为 4°31′N、112°55′E，深度 85 至 88 米。论文称其位于“Indonesian Archipelago”，坐标按现代国界落在马来西亚砂拉越西岸外海，不能仅凭亚种名把国家字段写成印度尼西亚。
- `E. a. australica` 的修订材料来自西澳大利亚西北部，列出的采集深度约为 300 至 445 米。
- 上述 85 至 741 米只是同一篇修订中地理亚种凭证的浅、深端点，不是温度耐受范围、全部历史记录或不可突破的生理极限。
- 该修订把一件日本“`E. aspergillum`”改鉴为 `E. oweni`，又认为西印度洋 400 至 463 米的一组旧记录更接近 `E. aspera`。这说明旧名称记录不能在没有凭证复核时全部保留。
- OBIS 与 GBIF 适合发现馆藏和调查线索，不适合替代修订。档案正文不采用门户自动计算的 11 米、1,296 米等极值，也不把佛罗里达、南大洋或新西兰等冲突点直接写成确认分布。

## 形态、骨针与锚定

- 活体为基部较窄、顶部略宽的筒状或长花瓶状海绵，可轻微弯曲。顶部不是敞口，而由略凸、边缘不规则的筛板覆盖。
- 博物馆常见的洁白蕾丝标本是去除软组织后的干骨架。活体应画成半透明象牙灰至浅米褐，格架间保留湿润的薄层组织；目前缺少可据以建立鲜艳色板的现代校色活体影像。
- 主格架由纵向和横向骨针束形成近方形网格，双向斜撑交叉其上。外表还有高低不一、可中断或改变走向的双向螺旋棱，不能简化为蜂窝或一根连续弹簧。
- Weaver 等把结构分为至少 6 个相互嵌套层级，从蛋白质轴丝、二氧化硅纳米颗粒和有机夹层，一直到骨针束、方格筒体、斜撑、螺旋棱和终端筛板。这里的“6 级”是分析框架，不是固定的分类阶元。
- 基部有数千根细长 basalia 锚骨针。Aizenberg 等测得的锚骨针一般长 5 至 15 厘米、直径 40 至 70 微米；Monn 等研究的样本约 10 厘米长、50 微米粗。二者是不同样本和表述尺度，不能写成每一根都恰好 10 厘米。
- 锚骨针具有水合非晶二氧化硅核心、多层同轴硅质圆筒和薄有机夹层，埋入软泥的一端带后弯小刺和冠状末端。它们组成柔性锚定束，不是肉质根、触手、柄或粘在岩石上的胶。
- 骨针在人工耦光实验中能够导光，但论文明确把野外光学生态功能列为未知。不要写成本种依靠“天然光纤”照明、通信、捕食或吸引共栖虾。
- 方格与双斜撑的材料效率、锚骨针层片的载荷传递均有模型和机械实验支持；这些研究可用于解释结构启发，不足以给整个活体贴上“永不破裂”或单一强度倍数。

## 滤食与水流边界

NOAA 对玻璃海绵的机构资料支持它们从海水中滤取细菌和小型浮游生物。对本种而言，水通过体壁的入水系统进入内部，再从顶部出水区排出；图像可以用稀疏颗粒表达方向，却不应标注未经实测的流速、摄食量或过滤效率。

2021 年 Nature 研究使用高性能格子玻尔兹曼模拟，发现骨架格架在低速流中可减小局部水动力应力，并维持内部相干回流。论文把这种水流对选择性滤食和有性生殖的潜在帮助写成推论。2024 年 Physical Review Letters 研究进一步模拟了水平底流被螺旋骨架导向内部，并组织成朝筛板方向的上升流。两项工作都没有直接测量一只野外活体的食物摄入量，也没有证明海绵在所有环境下无需自身泵水。

## 繁殖边界

Schulze 1880 年对保存标本的软组织研究报告过本种生殖阶段。Leys 与 Ereskovsky 2006 年综述指出，玻璃海绵较完整的配子发生、胚胎与幼体描述主要来自 `Vitrollula fertilis`、`Farrea sollasii` 和 `Oopsacas minuta`，不是 `E. aspergillum`。

因此档案只能写“本种有生殖阶段记录，但生活史细节不足”。以下内容不得落入物种级事实：

- 雌雄同体、雌雄异体或固定的性别转换方式；
- 配子释放、体内受精或育幼的确定流程；
- 把其他玻璃海绵的 trichimella 幼体细节直接安到本种；
- 固定繁殖季、产卵数、性成熟年龄、世代时间和寿命；
- “一对共栖虾帮助海绵繁殖”之类没有证据的功能联系。

## 共栖虾证据边界

Saito 与 Komai 的分类综述确认当前名 `Spongicola venustus`，并汇总其约 60 至 482 米的日本、菲律宾和砂拉越记录。该虾以多个 `Euplectella` 物种及其他玻璃海绵为宿主，并不专属于 `E. aspergillum`。

Challenger 宿务外海 209 站的一件本种记录中，有一只雄虾和一只雌虾同处海绵内部；圣安德鲁斯大学博物馆也保存一件带一对共栖虾的标本。这足以支持“本种可容纳 `S. venustus`，有一雌一雄同居的实例”，但不能推出：

- 每个海绵都只有两只虾；
- 幼虾必定成对进入，长大后必定被永久困住；
- 这两只虾形成终身、排他的单配偶关系；
- 幼虾必定能穿过筛板离开；
- 虾会清洁海绵、吃海绵废物，或已被证明给宿主带来净收益；
- 婚礼赠礼传统能反过来证明动物行为。

故事和图像可以重建一件有一雄一雌的馆藏实例，图注必须把它限定为“记录实例”，并避免婚礼姿势、心形构图或“永恒爱情”叙事。

## 六段故事结构

1. `living-glass-lattice`：活体薄组织覆盖水合硅质骨架，方格、双斜撑、螺旋棱和筛板共同形成多级筒体；博物馆白骨架不是活体颜色。
2. `barbed-soft-sediment-anchor`：数千根微米级锚骨针组成柔性基束，后弯小刺埋入软泥；它没有植物根，也不是岩石附着胶。
3. `passive-flow-active-filtering`：横向低速来流可被格架导入内部并朝顶部组织，但这是模拟得到的潜在通风机制；滤食对象与原位效率不作无证量化。
4. `reproductive-evidence-gap`：1880 年标本留下了生殖阶段证据，完整的本种性系统、胚胎、幼体、季节和寿命仍是空白，不能借用近缘种补齐。
5. `shrimp-association-with-boundaries`：`Spongicola venustus` 确有入住记录，也有一雌一雄同居标本；这不是每篮一对、终身单配或互利共生的证明。
6. `four-subspecies-messy-map`：4 个亚种把范围锚定在印度-西太平洋，修订同时揭示旧鉴定错误；未来监测必须保留凭证、骨针和地点信息，不能只累加门户点位。

## 四项展示数据

| key | 标签 | 值 | 边界 |
| --- | --- | --- | --- |
| `revision-supported-depth` | 修订样本深度包络 | 85–741 m | 2008 年四亚种修订所列浅、深端点，不是生理极限；不采用 OBIS/GBIF 未复核极值 |
| `anchor-spicule-length` | 锚骨针长度 | 5–15 cm | Aizenberg 等 2004 年研究样本的一般范围，不是每根固定长度或海绵体长 |
| `skeletal-hierarchy` | 骨架结构层级 | ≥6 级 | Weaver 等 2007 年从纳米到厘米的分析层级，不是分类阶元 |
| `recognized-subspecies` | 当前接受亚种 | 4 个 | 指名亚种、`regalis`、`indonesica`、`australica`；采用 WoRMS 当前词尾拼法 |

## 六张图像场景

1. `01-soft-sediment-living-cover`：完整活体直立于印度-西太平洋暗蓝深水的灰褐软泥上，筒体半透明象牙灰至浅米褐，薄组织仍覆盖格架，基部锚丝部分埋泥，顶部筛板清晰；主体偏右并给标题留负空间。不要画成纯白干骨架、敞口花瓶、浅水珊瑚礁或岩石附着体。
2. `02-terminal-sieve-lattice-diagnostic`：近景展示纵横方格、约 45° 双向斜撑、会中断或转向的外部螺旋棱和顶部不规则筛板，仍保留薄层活组织。图注说明宏观格架能解释可见形态，却不能代替骨针显微诊断。
3. `03-basalia-soft-sediment-anchoring`：近景显示头发状 basalia 从基部束出，大部分纤维在不同角度埋入软泥。末端冠状结构和后弯微刺属于微米级诊断，成图不声称解析它们，也不能把锚骨针画成肉眼可见的大鱼钩、树根、触手或硬底胶结。
4. `04-side-inflow-sieve-outflow-visualization`：侧向低速水流以稀疏悬浮颗粒进入格架，筒内形成有组织的上升路径并从筛板区域排出。不用文字箭头、数字流速或密集“食物烟雾”；图注注明路径来自数值模拟，未量化原位摄食效率。
5. `05-resident-shrimp-pair-context`：透明斜视切面中，一只雄性与一只雌性 `Spongicola venustus` 分开、可辨地位于一个海绵内腔，作为历史标本的科学重建。不能使用拥抱、婚礼、心形或子代逃逸画面，图注注明并非普遍占居、终身单配或互利机制的证明。
6. `06-rov-noncontact-monitoring`：完整海绵留在软质海床，紧凑 ROV 或相机在外侧保持距离记录；背景稀疏、无机械臂采集。图注说明单次影像不能确认亚种、数量趋势、繁殖或 IUCN 风险，鉴定仍需带地点和深度的凭证及骨针资料。

所有场景都避免把 NOAA 墨西哥湾未定种 Euplectellidae 影像当成本种模板。活体色泽、组织厚度和地形以保守重建处理；封面以媒体 credit 标记为 AI 生成科学情景重建，五张 gallery 图再用 caption 写清不是原位照片或单独鉴定凭证。

## 保护与监测口径

- IUCN 当前没有全球评估，种群大小、趋势、世代时间、成熟年龄和关键繁殖区均未知。不要填写 `assessedYear`、`criteria`、`estimatedMatureIndividuals` 或 `lifespanYears`。
- 历史采集与底接触活动可能损伤这种固定在软沉积物中的脆弱海绵，但现有来源没有量化它们对本种全球种群的影响，不能写成已证实的首要灭绝驱动。
- 原始门户点位受错误鉴定、旧分类、残缺标本和缺少显微复核影响。范围扩张或收缩不能只凭记录数或地图变化判断。
- 建议行动是凭证驱动的非接触监测：ROV 影像记录深度、底质、流速与方向；必要采样应最小化并保存骨针显微切片、组织和 DNA；亚种及近似种鉴定应回连馆藏凭证；共栖虾单独编号并记录数量、性别和宿主；开放坐标与鉴定历史，保留后续复核路径。

## 可直接使用的来源数组

```ts
const VENUS_FLOWER_BASKET_SOURCE_DATE = '2026-08-31'

const VENUS_FLOWER_BASKET_SOURCES = [
  {
    title: 'WoRMS — Euplectella aspergillum Owen, 1841 (AphiaID 171897)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=171897',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Classification for AphiaID 171897',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/171897',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'World Porifera Database — Euplectella aspergillum taxon list and accepted subspecies',
    url: 'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Euplectella+aspergillum',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'OBIS — Euplectella aspergillum taxon and occurrence map',
    url: 'https://obis.org/taxon/171897',
    kind: 'distribution',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'GBIF — Euplectella aspergillum accepted taxon (taxon key 5180237)',
    url: 'https://www.gbif.org/species/5180237',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'GBIF — Occurrence search for Euplectella aspergillum',
    url: 'https://www.gbif.org/occurrence/search?taxon_key=5180237',
    kind: 'distribution',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Euplectella aspergillum, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Euplectella%20aspergillum&searchType=species',
    kind: 'conservation',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'National Museum of Marine Biology and Aquarium — 阿氏偕老同穴 specimen record',
    url: 'https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=64686',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Tabachnick, Janussen & Menschenina 2008 — Revision of Euplectella aspergillum',
    url: 'https://doi.org/10.11646/zootaxa.1866.1.3',
    kind: 'taxonomy',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Weaver et al. 2007 — Hierarchical assembly of the siliceous skeletal lattice',
    url: 'https://doi.org/10.1016/j.jsb.2006.10.027',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Aizenberg et al. 2004 — Biological glass fibers and basalia dimensions',
    url: 'https://doi.org/10.1073/pnas.0307843101',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Monn et al. 2015 — Internal architecture of laminated anchor spicules',
    url: 'https://doi.org/10.1073/pnas.1415502112',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Fernandes et al. 2021 — Lattice architecture and material efficiency',
    url: 'https://doi.org/10.1038/s41563-020-0798-1',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Falcucci et al. 2021 — Extreme flow simulations reveal skeletal adaptations',
    url: 'https://doi.org/10.1038/s41586-021-03658-1',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Falcucci et al. 2024 — Passive ventilation in Euplectella aspergillum',
    url: 'https://doi.org/10.1103/PhysRevLett.132.208402',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'NOAA Ocean Exploration — What are glass sponges?',
    url: 'https://oceanexplorer.noaa.gov/ocean-fact/glass-sponges/',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Schulze 1880 — Structure and arrangement of the soft parts in Euplectella aspergillum',
    url: 'https://doi.org/10.1017/S0080456800026181',
    kind: 'general',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Leys & Ereskovsky 2006 — Embryogenesis and larval differentiation in sponges',
    url: 'https://doi.org/10.1139/z05-170',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: 'Saito & Komai 2008 — Review of Spongicola and Paraspongicola',
    url: 'https://research.nhm.org/pdfs/31805/31805.pdf',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
  {
    title: "University of St Andrews Museums — Euplectella aspergillum with commensal prawns",
    url: 'https://collections.st-andrews.ac.uk/item/euplectella-aspergillum-owen/1016966',
    kind: 'ecology',
    accessedAt: VENUS_FLOWER_BASKET_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[]
```

## 来源判读

- WoRMS、World Porifera Database、OBIS 与 GBIF 支持接受名和六级分类；当前亚种拼法以 WoRMS 为准。
- 国立海洋生物博物馆页面只用于支持中文展示名。该页的分类字段排版会把亚种重复显示，不能用它覆盖 WoRMS 分类。
- Tabachnick、Janussen 与 Menschenina 2008 年修订决定亚种、确认地点、修订样本深度和误鉴边界。OBIS/GBIF 只作为记录发现层，二者的自动地图与深度极值不替代凭证修订。
- Weaver、Aizenberg、Monn 与 Fernandes 分别支持骨架层级、锚骨针尺寸与光学实验、层片结构和宏观格架力学。光可在离体骨针中传播，不等于已发现野外光学生态功能。
- Falcucci 等 2021 与 2024 年论文支持模拟中的水流组织；它们不能提供本种原位摄食率，也不能证明所有来流条件下完全被动通风。
- Schulze 支持软组织与历史生殖阶段记录；Leys 与 Ereskovsky 用于限制外推，完整玻璃海绵发育资料主要来自其他物种。
- Saito 与 Komai 支持虾的接受名、多宿主和地理深度资料；圣安德鲁斯馆藏支持一件本种内有一对虾的实例。两者都不证明普遍终身单配或互利效应。
- NOAA 页面只提供玻璃海绵类群层面的滤食背景。没有凭证鉴定的 NOAA 深海影像不得作为本种分布、颜色或附着方式证据。
- IUCN 搜索仅支持“当前未找到评估”。NE 不能转译为种群稳定、无威胁或低风险。
