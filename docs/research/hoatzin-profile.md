# 麝雉（Hoatzin）物种档案研究与实现简报

- 研究对象：`Opisthocomus hoazin`
- 建议 `slug`：`hoatzin`
- 研究截止日：2026-08-30
- 用途：完成 `src/data/species.ts` 中麝雉 TODO，并为六张静态图片提供科学边界
证据原则：现行分类与保护状态采用当前官方数据库；形态、消化、微生物、翼爪、繁殖和旅游干扰优先采用原始论文。局地样本、实验能力和全球通则分开表述。

## 核心编辑结论

1. 现行学名为 _Opisthocomus hoazin_，不是常见误拼 `_hoatzin_`。AviList v2025b 与 SACC 均将其置于麝雉目 `Opisthocomiformes`、麝雉科 `Opisthocomidae`、麝雉属 `Opisthocomus`。[AviList v2025b](https://www.avilist.org/checklist/v2025b/)；[SACC Part 4](https://www.museum.lsu.edu/~Remsen/SACCBaseline04.htm)（访问日期均为：2026-08-30）
2. 它是上述目、科、属现存唯一物种。这个说法只描述现生分类，不表示演化史上从无其他麝雉类，也不能改写成“原始鸟”或“活化石”。[AviList v2025b](https://www.avilist.org/checklist/v2025b/)；[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期均为：2026-08-30）
3. NCBI 收录原始组合 _Phasianus hoazin_ Statius Muller, 1776；档案无需把命名人写入 `scientificName`。[NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=30419&mode=info)（访问日期：2026-08-30）
4. BirdLife 当前物种记录代表 2024 年 IUCN 评估：`LC`、趋势 `Decreasing`，没有受威胁等级判据字符串。不要补写 `A2`、`B1` 或其他判据。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin)；[评估历史 JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/history)（访问日期均为：2026-08-30）
5. 全球成熟个体数没有量化。BirdLife 只沿用“common”的定性描述；`metrics.estimatedMatureIndividuals` 必须留空。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin)（访问日期：2026-08-30）
6. BirdLife 在地图范围内估计过去三代树冠覆盖减少约 11%，并暂定种群减少 1% 至 19%，最佳估计 11% 至 14%。这是模型推断，不是全范围同步计数。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin)（访问日期：2026-08-30）
7. 原生、留居国家为玻利维亚、巴西、哥伦比亚、厄瓜多尔、法属圭亚那、圭亚那、秘鲁、苏里南和委内瑞拉。[BirdLife countries JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/countries)（访问日期：2026-08-30）
8. 主要生境是低地湿润森林，尤其是河岸林、廊道林、季节或长期淹水森林、湖泊和河道边缘的树木与灌丛；沼泽等内陆湿地也适生。页面可以同时标记 `terrestrial` 与 `freshwater`，但麝雉本身不是水鸟式潜水取食者。[BirdLife habitats JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/habitats)；[Mullner et al. 2007](https://doi.org/10.1111/j.1557-9263.2007.00123.x)（访问日期均为：2026-08-30）
9. 成鸟全长常概括为约 65 厘米。解剖样本的合并平均体重为 716.1 克，另一个野外微生物研究把成鸟概括为 700 至 750 克。前者是样本均值，后者也不是经过全分布区验证的封闭范围。[Hedges et al. 1995](https://doi.org/10.1073/pnas.92.25.11662)；[Grajal 1995](https://doi.org/10.2307/4088763)；[Wright et al. 2009](https://doi.org/10.1038/ismej.2009.41)（访问日期均为：2026-08-30）
10. 麝雉主要取食嫩叶、叶芽和细嫩枝条，植物种类随地点和可用性变化。花和少量果实可作为补充；不要把它写成广食性杂食鸟。[Dominguez-Bello et al. 1994](https://digitalcommons.usf.edu/auk/vol111/iss3/14/)；[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期均为：2026-08-30）
11. 发酵发生在真胃之前的巨大嗉囊和后段食管。它没有反刍动物的瘤胃、网胃、瓣胃和皱胃，也没有可靠证据证明会反刍嚼团；正文只用“前肠发酵”，不用“反刍鸟”。[Grajal et al. 1989](https://doi.org/10.1126/science.245.4923.1236)；[Grajal 1995](https://doi.org/10.2307/4088763)（访问日期均为：2026-08-30）
12. 解剖研究中，嗉囊与下段食管合计占总消化道容量约 77%，但该数字不是体重占比。不同论文使用容量、消化道比例和总身体质量等不同分母，不能把这些数字拼成同一统计量。[Grajal 1995](https://doi.org/10.2307/4088763)；[Wright et al. 2009](https://doi.org/10.1038/ismej.2009.41)（访问日期均为：2026-08-30）
13. 发酵群落包括细菌、产甲烷古菌和纤毛虫等，不应只写成“靠一种细菌消化叶子”。早期培养研究没有检出厌氧真菌，不等于整个物种永久没有真菌成分。[Dominguez-Bello et al. 1993](https://doi.org/10.1086/physzool.66.3.30163698)；[Wright et al. 2009](https://doi.org/10.1038/ismej.2009.41)（访问日期均为：2026-08-30）
14. 2008 年研究从 6 只野生成鸟获得 1,235 条序列、580 个系统型；67% 属厚壁菌门、30% 属拟杆菌门，94% 无法在物种层级归类。这不等于发现了 94% 的新物种，也没有直接证明每个系统型的代谢作用。[Godoy-Vitorino et al. 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2565963/)（访问日期：2026-08-30）
15. 雏鸟由成鸟吐喂已经预消化的叶性液体，并在约 7 至 10 周龄转向自行浏览叶片。三个早期雏鸟、三个幼鸟和三个成鸟的研究显示群落随发育重排，但小样本不支持精确的全物种定时表。[Godoy-Vitorino et al. 2010](https://doi.org/10.1038/ismej.2009.147)（访问日期：2026-08-30）
16. 雏鸟每翼有两枚显著、可动的翼指爪，能用喙、翼和足在倾斜表面及枝条上攀爬。2019 年实验记录到交替的四肢攀爬模式；它不能被写成恐龙式四足行走，也不能推广为成鸟常规步态。[Abourachid et al. 2019](https://doi.org/10.1126/sciadv.aat0787)（访问日期：2026-08-30）
17. 同一实验的 4 只雏鸟可以在水面或水下协调四肢游泳。实验验证的是运动能力，不是野外跳水发生率、每次跳水的捕食原因、存活优势或必然返回原巢。[Abourachid et al. 2019](https://doi.org/10.1126/sciadv.aat0787)（访问日期：2026-08-30）
18. 显著的幼鸟翼爪通常随成熟退化或消失；CT 数据也显示幼鸟和成鸟翼指比例明显重塑。现有证据不足以规定所有个体在某一日龄完全没有任何爪痕，所以不要写“所有成鸟绝对无爪”，也不要给成鸟画幼鸟大小的功能翼爪。[Abourachid et al. 2019](https://doi.org/10.1126/sciadv.aat0787)；[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期均为：2026-08-30）
19. 委内瑞拉研究观察到 2 至 8 只的合作繁殖群，繁殖对可由最多 6 只帮手协助；帮手多为留在出生领地的往年后代。这是研究地点的社会结构，不应把每个麝雉群都固定为八只或有帮手。[Strahl 1988](https://doi.org/10.1111/j.1474-919X.1988.tb02714.x)（访问日期：2026-08-30）
20. 巢通常是水道上方树枝间的松散平台。在委内瑞拉研究中两枚卵最常见；厄瓜多尔研究的平均窝卵数为 2.4，范围 1 至 7。页面可写“通常约两枚”，不能把局地极值写成物种固定窝卵范围。[Dominguez-Bello et al. 1994](https://digitalcommons.usf.edu/auk/vol111/iss3/14/)；[Mullner et al. 2007](https://doi.org/10.1111/j.1557-9263.2007.00123.x)（访问日期均为：2026-08-30）
21. 厄瓜多尔研究的平均孵化期为 32 ± 1.5 天，样本量 20；委内瑞拉资料约 30 至 31 天。数字卡使用 32 天时必须标为局地均值。[Dominguez-Bello et al. 1994](https://digitalcommons.usf.edu/auk/vol111/iss3/14/)；[Mullner et al. 2007](https://doi.org/10.1111/j.1557-9263.2007.00123.x)（访问日期均为：2026-08-30）
22. 麝雉能飞，不是不会飞的鸟。巨大前肠与缩小的胸骨附着区构成形态权衡，适合写成短距离、机动性有限的飞行，不能据此宣称完全失去飞行能力。[Grajal 1995](https://doi.org/10.2307/4088763)；[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期均为：2026-08-30）
23. 厄瓜多尔 Cuyabeno 的比较研究发现，旅游暴露地点的幼鸟存活、体重或应激指标较差，而孵卵阶段结果并非全部显著不同。这支持繁殖地限距和低干扰管理，不支持宣称所有观鸟旅游都会造成同等损害。[Mullner et al. 2004](https://doi.org/10.1016/j.biocon.2003.10.003)（访问日期：2026-08-30）
24. “Stinkbird”是常见英语俗名，“Canje Pheasant”是圭亚那常用名；两者都不是分类名。气味与前肠发酵有关的解释常被转述，但缺少直接、受控的气味化学测量，页面不应断言某一种微生物或化合物造成气味。[Government of Guyana](https://dpi.gov.gy/environmental-sustainability-must-be-at-the-forefront-of-tourism-efforts-pm-phillips/)；[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期均为：2026-08-30）

## 名称与分类实现

推荐名称字段：

```ts
id: 'species-opisthocomus-hoazin',
slug: 'hoatzin',
names: {
  zh: '麝雉',
  en: 'Hoatzin',
  aliases: [
    'Opisthocomus hoazin',
    'Stinkbird',
    'Canje Pheasant',
    '臭雉',
  ],
},
scientificName: 'Opisthocomus hoazin',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Aves', zhName: '鸟纲' },
  order: { scientificName: 'Opisthocomiformes', zhName: '麝雉目' },
  family: { scientificName: 'Opisthocomidae', zhName: '麝雉科' },
  genus: { scientificName: 'Opisthocomus', zhName: '麝雉属' },
},
```

`臭雉`只作为便于检索的中文别名，不替代 TODO 已使用的主名 `麝雉`。不要加入“史前鸟”“始祖鸟后代”或“活恐龙”等别名。系统发育研究长期显示其最近亲关系难定，现行名录的独立目处理不等于它是其他现代鸟的直接祖先。[Hedges et al. 1995](https://doi.org/10.1073/pnas.92.25.11662)；[AviList v2025b](https://www.avilist.org/checklist/v2025b/)（访问日期均为：2026-08-30）

## IUCN 状态、趋势与种群措辞

推荐实现：

```ts
conservation: conservation('LC', 'decreasing', 2024),
```

不要传入 `criteria`。BirdLife 当前 2024 历史记录的 criteria 字段为空，LC 理由是分布范围巨大、总量不被认为低于 10,000 只成熟个体阈值，推断下降也没有越过受威胁等级所需的 30% 阈值；这些阈值是评估排除逻辑，不是对真实个体数的估计。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin)；[评估历史 JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/history)（访问日期均为：2026-08-30）

推荐页面措辞：

> 麝雉目前被 IUCN 列为无危，但总体趋势下降。全球成熟个体数尚未量化；BirdLife 根据分布区树冠覆盖变化，暂定过去三代的下降幅度为 1% 至 19%，最佳估计 11% 至 14%。

这里的“三代”依据 BirdLife 所用世代长度 6.06 年。不要把 8,620,000 平方千米的 EOO 写成实际占据面积，也不要把“common”翻译成已完成数量普查。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin)（访问日期：2026-08-30）

## 分布、生境与地图

推荐字段：

```ts
distribution: {
  realms: ['terrestrial', 'freshwater'],
  continents: ['南美洲'],
  regions: [
    '亚马孙盆地',
    '奥里诺科盆地',
    '圭亚那地盾低地',
    '南美洲北部与中部河岸湿地',
  ],
  countries: [
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '厄瓜多尔',
    '法属圭亚那',
    '圭亚那',
    '秘鲁',
    '苏里南',
    '委内瑞拉',
  ],
  range:
    '留居于南美洲北部和中部的亚马孙、奥里诺科及圭亚那地区，主要沿低地河道、湖泊、沼泽和淹水森林的树木与灌丛活动。',
  center: { lat: -3, lng: -61 },
},
```

`center` 只用于让地图视口覆盖亚马孙腹地，不是分布中心、种群中心或观测点。国家列表来自 BirdLife 当前原生留居记录；法属圭亚那按数据源作为独立范围单元保留。[BirdLife countries JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/countries)（访问日期：2026-08-30）

推荐生境：

| `name` | `realm` | `isPrimary` | 推荐描述 | 边界 |
| --- | --- | ---: | --- | --- |
| 低地湿润与淹水森林 | `terrestrial` | `true` | 河流、湖泊和季节性积水区周围的低地森林，为群体栖息、取食和繁殖提供连续枝叶。 | BirdLife 的主要生境类别；不能把所有低地雨林都写成同密度。 |
| 河岸林与廊道林 | `terrestrial` | 省略 | 沿河道和水渠延伸的树木、灌丛与藤本带，连接取食树、夜栖点和巢位。 | “沿水活动”不等于成鸟在水中取食。 |
| 沼泽与内陆湿地边缘 | `freshwater` | 省略 | 沼泽、湖泊和缓流水道边的枝叶层，巢常建在水面上方。 | BirdLife 将沼泽类列为适生；巢上水面是多地常见模式，不是全范围绝对规则。 |

BirdLife 给出的海拔范围为 0 至 1,050 米，可写入 `metrics.elevationM: [0, 1050]`，但 note 或正文必须说明这是当前评估所用的已知范围，不是生理极限。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin)（访问日期：2026-08-30）

## 体尺、外形、食性与活动

推荐体尺：

```ts
measurements: {
  length: {
    typical: 65,
    unit: 'cm',
    note: '成鸟全长的常用近似值，不是经全分布区核实的封闭范围',
  },
  weight: {
    typical: 0.72,
    unit: 'kg',
    note: '由解剖样本合并均值 716.1 g 取整，不是物种级上下限',
  },
},
metrics: {
  elevationM: [0, 1050],
},
```

不建议为了填充排序字段而把 `65` 和 `0.72` 伪装成 `[65, 65]` 与 `[0.72, 0.72]`。`MeasurementRange.typical` 正好能保留代表值的证据性质；在取得可靠的物种级范围前，`adultLengthCm` 与 `adultMassKg` 留空。[Hedges et al. 1995](https://doi.org/10.1073/pnas.92.25.11662)；[Grajal 1995](https://doi.org/10.2307/4088763)（访问日期均为：2026-08-30）

外形应保留：红色虹膜、鲜蓝裸露面皮、红橙色长冠羽、深褐体羽、头颈与背部的奶油色纵纹、下体浅米色至暗红橙色、大而圆的翼、栗红飞羽、长而宽的尾，以及短腿和略水平的蹲伏姿态。雌雄外观近似，图片不应凭羽色指定性别。[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期：2026-08-30）

推荐食性和活动：

```ts
diet: {
  types: ['herbivore'],
  foods: [
    '嫩叶与叶芽',
    '细嫩枝梢',
    '花',
    '少量果实',
  ],
  description:
    '以树木和灌木的嫩叶、叶芽与细枝为主，植物种类随地点和可用性变化；花和少量果实可补充食谱，不能据此归为杂食。',
},
activity: ['日行性', '树栖', '群居', '留鸟', '短距离飞行', '合作繁殖'],
tags: ['南美洲', '亚马孙', '前肠发酵', '植食鸟', '雏鸟翼爪', '合作繁殖'],
```

“树栖”不排除雏鸟入水和沿枝攀爬。“短距离飞行”用于避免把胸骨与巨大前肠的权衡夸成不会飞。委内瑞拉群体旱季曾沿水道移动到永久水源，不能据此把整个物种写成迁徙鸟。[Strahl 1988](https://doi.org/10.1111/j.1474-919X.1988.tb02714.x)；[Mayr 2022](https://doi.org/10.1016/j.cub.2022.08.064)（访问日期均为：2026-08-30）

## 前肠发酵：结构、功能与措辞边界

### 结构

Grajal 的解剖研究显示，嗉囊折成两个相通腔室，后段食管也分隔成多个腔；肌性收缩区和角化纵脊有助于混合、研磨与滞留植物颗粒。嗉囊和后段食管合计约占总消化道容量 77%，而腺胃与肌胃相对缩小。大颗粒比液体滞留更久，形成适合微生物发酵的前胃环境。[Grajal 1995](https://doi.org/10.2307/4088763)（访问日期：2026-08-30）

推荐描述：

> 麝雉把主要发酵室放在胃之前。巨大的嗉囊和后段食管分隔成多腔，延长叶片颗粒的停留时间；微生物产生的挥发性脂肪酸可被宿主利用。真正的腺胃和肌胃反而较小。

不要使用以下表达：

- “四个胃”或“鸟类瘤胃”：它没有反刍动物的四胃结构。
- “反刍、嚼草团”：目前没有可靠的反刍行为证据。
- “唯一会发酵的鸟”：其他鸟类也有消化道微生物；较准确的限定是“目前唯一已知具有高度发达、以植物为主的前肠发酵系统的鸟”。
- “消化道占体重 77%”：77% 的分母是总消化道容量，不是体重。
- “前肠恒定占体重 17.7%”：该数来自另一研究口径，受充盈状态、样本和分母影响，不与容量数字并列成固定物种值。

初始 Science 研究把麝雉定义为鸟类中已知的前肠发酵特例；后续解剖与消化效率研究测得类似哺乳类前肠发酵者的酸度和挥发性脂肪酸模式，以及约 58.8% 的纤维素表观消化率和 52.7% 的酸性洗涤纤维消化率。后两个百分比来自特定饲料和研究条件，不适合做全物种固定效率。[Grajal et al. 1989](https://doi.org/10.1126/science.245.4923.1236)；[Grajal 1995](https://doi.org/10.1111/j.1474-919X.1995.tb08037.x)（访问日期均为：2026-08-30）

### 微生物群

证据可以支持以下层次：

1. 嗉囊内容物含高密度细菌和纤毛虫；培养研究获得能利用纤维素的混合群落。[Dominguez-Bello et al. 1993](https://doi.org/10.1086/physzool.66.3.30163698)（访问日期：2026-08-30）
2. 6 只野生成鸟的 16S 克隆库显示厚壁菌门和拟杆菌门占主导，但大量序列无法精确归类，具体代谢职责仍待功能验证。[Godoy-Vitorino et al. 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2565963/)（访问日期：2026-08-30）
3. 10 只野生成鸟的研究确认产甲烷古菌，并比较了细菌、古菌与纤毛虫群落。甲烷是厌氧发酵副产物；不能据此把甲烷量、气味强度或全球温室贡献外推到野外种群。[Wright et al. 2009](https://doi.org/10.1038/ismej.2009.41)（访问日期：2026-08-30）
4. 雏鸟、幼鸟和成鸟的微生物群随饮食和发育阶段改变，幼鸟处于过渡状态。研究样本每阶段仅 3 只，不支持为每只鸟规定相同定植日程。[Godoy-Vitorino et al. 2010](https://doi.org/10.1038/ismej.2009.147)（访问日期：2026-08-30）
5. 与牛等反刍动物的相似之处主要是器官功能趋同和发酵产物，不是两者拥有相同器官、相同微生物清单或相同演化来源。

可写“发酵也可能帮助处理某些植物次生化合物”，但不要写“微生物能中和所有叶毒”。解毒作用取决于植物化合物、微生物功能和宿主代谢，现有群落调查不能逐项证明。[Grajal et al. 1989](https://doi.org/10.1126/science.245.4923.1236)；[Godoy-Vitorino et al. 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2565963/)（访问日期均为：2026-08-30）

## 雏鸟翼爪、攀爬与游泳

2019 年实验对 4 只野外取得的雏鸟进行倾斜布面、枝条和浅水运动记录，并对晚期胚胎、幼鸟和成鸟进行 CT 比较。雏鸟在攀爬时让翼爪锚定基质、屈翼拉动身体，同时使用足与喙；动作形成左右交替的四肢序列。游泳时翼通常近同步划动、两足交替。研究也发现晚期胚胎存在连接翼指的额外屈肌腱，并记录显著的发育重塑。[Abourachid et al. 2019](https://doi.org/10.1126/sciadv.aat0787)（访问日期：2026-08-30）

实现边界：

- 文案写“每翼两枚可动爪”，不硬标为第几指。鸟翼手指同源命名在不同资料中不一致，数字标签会把学术争议带进消费级页面。
- 攀爬应写成雏鸟的功能性能力，不写成所有年龄“用四条腿走路”。
- 实验确认游泳能力，不等于测量了野外发生频率。可以在故事中用条件句描述受惊落水后的逃生序列，但必须说明完整捕食情景主要来自自然史观察，2019 年论文只定量验证运动能力。
- 巢建在水面上方是委内瑞拉和厄瓜多尔研究点常见布局；不要写“每一个巢都在水上”。
- 显著翼爪随成熟通常退化或消失。成鸟图片不得出现幼鸟式长爪；文字也不宣称所有成鸟在完全相同日龄变得绝对无爪。
- “恐龙遗留”“始祖鸟式中间环节”不属于现有证据。翼爪结构本身也不是麝雉独有，特殊之处是雏鸟把它们与喙、足整合成有效攀爬系统。

## 繁殖与社会行为

推荐通用表述：

> 麝雉沿河岸和淹水森林合作繁殖。繁殖对在水道上方的枝条间搭建松散平台巢，往年后代有时留在出生领地，协助守巢、孵卵和喂育。通常约两枚卵，孵化约一个月；繁殖时序随当地雨季和水文而变。

局地证据不能省略：

| 研究地点 | 可用结果 | 不可外推内容 |
| --- | --- | --- |
| 委内瑞拉 Llanos | 2 至 8 只社会单元；繁殖对加最多 6 只帮手；90% 一龄鸟留在出生领地；雨季繁殖；总体筑巢成功率 27%，捕食为主要失败原因。 | 每群固定八只、全球留巢率 90%、全球繁殖季固定为 5 至 10 月。 |
| 委内瑞拉平原 | 嫩叶和细枝占核心食谱；水道上方枝条筑巢；两枚卵最常见；亲鸟和部分帮手孵卵；雏鸟增长约 5.68 克/日。 | 全范围固定增长率、所有巢均有帮手。 |
| 厄瓜多尔亚马孙 1995 至 2000 | 平均窝卵 2.4 ± 1.1，范围 1 至 7，291 巢；平均孵化 32 ± 1.5 天，20 巢；至少育出一只离巢幼鸟的巢占 17%；繁殖高峰 4 至 6 月。 | 把 1 至 7 当成全球固定范围，或把当地低成功率当作现今全球平均。 |

依据：[Strahl 1988](https://doi.org/10.1111/j.1474-919X.1988.tb02714.x)；[Dominguez-Bello et al. 1994](https://digitalcommons.usf.edu/auk/vol111/iss3/14/)；[Mullner et al. 2007](https://doi.org/10.1111/j.1557-9263.2007.00123.x)（访问日期均为：2026-08-30）

## 推荐摘要与描述

```ts
summary:
  '南美洲河岸林里的麝雉以巨大嗉囊和后段食管发酵叶片；雏鸟还能用翼爪攀枝并协调四肢游泳。',
description:
  '麝雉是麝雉目现存唯一物种，留居于亚马孙、奥里诺科和圭亚那地区的河岸林、淹水森林与湿地边缘。它以嫩叶和细枝为主食，在胃前的多腔嗉囊与后段食管内依靠复杂微生物群发酵植物。成鸟有蓝色裸露面皮、红眼和红橙色冠羽，能作短距离飞行；雏鸟每翼两枚可动爪，可配合喙和足攀爬，也具水面及水下游泳能力。群体常合作繁殖，巢多见于水道上方。IUCN 2024 年仍列无危，但趋势下降，全球成熟个体数未量化。',
```

摘要没有写“会反刍”“不会飞”“活化石”或“跳水必定逃生”，也没有把 LC 等同于没有风险。

## 六个 story candidates

以下精确提供 6 个候选章节，字段可直接改写为 `SpeciesStorySection[]`：

```ts
storySections: [
  {
    key: 'one-living-lineage',
    label: '独立谱系',
    title: '一目一科一属，现存只剩这一种',
    body:
      '麝雉是麝雉目、麝雉科和麝雉属现存唯一成员。独立的分类位置说明它与其他现代鸟差异很深，却不表示它是“原始鸟”或其他鸟类的祖先；化石记录也提醒我们，现存唯一不等于演化史上从来只有一种。',
  },
  {
    key: 'fermentation-before-stomach',
    label: '前肠发酵',
    title: '发酵室在胃之前',
    body:
      '巨大的嗉囊和后段食管分成多个腔室，让叶片颗粒停留并接受微生物发酵。解剖样本中，这两段合计约占总消化道容量的 77%。麝雉与反刍动物只在功能上趋同，它没有四个胃，也没有被证实会反刍嚼团。',
  },
  {
    key: 'microbiome-matures',
    label: '微生物群',
    title: '从吐喂叶液到自行取食',
    body:
      '亲鸟给早期雏鸟吐喂预先处理的叶性食物，幼鸟约在 7 至 10 周龄转向自行浏览叶片。小样本研究显示，细菌、产甲烷古菌和纤毛虫组成会随发育重排；这是一套变化中的生态系统，不是一种“万能消化菌”。',
  },
  {
    key: 'wing-claw-climber',
    label: '雏鸟翼爪',
    title: '翅膀也能抓住枝条',
    body:
      '雏鸟每翼有两枚显著可动的爪。实验中，它们让翼爪锚住斜面或枝条，再用屈翼动作拉动身体，喙和双足也参与，形成交替的四肢攀爬序列。显著翼爪通常随成熟退化，不能拿幼鸟结构代表成鸟。',
  },
  {
    key: 'water-edge-nursery',
    label: '水边育幼',
    title: '会游泳，不等于每次都跳水逃生',
    body:
      '多地研究在水道上方记录到松散平台巢。实验确认雏鸟能在水面和水下协调四肢游泳，并能重新攀爬；但实验没有测量野外受惊跳水的频率、原因或返回原巢的成功率。能力与完整逃生故事必须分开。',
  },
  {
    key: 'least-concern-decreasing',
    label: '保护现状',
    title: '无危，不等于河岸一直安全',
    body:
      '2024 年评估仍将麝雉列为无危，但趋势下降，全球成熟个体数没有量化。范围内树冠减少和繁殖地近距离旅游干扰提供了两类警讯：保护淹水森林与河岸廊道、限制繁殖季贴近巢区的活动，并建立标准化监测，才能看清变化。',
  },
],
```

章节 1 依据 AviList、SACC 与 Mayr 综述；章节 2 至 5 以解剖、微生物和运动原始论文为主；章节 6 结合 BirdLife 当前评估与 Cuyabeno 旅游干扰研究。任何章节都不把局地样本量隐去后包装成全球常数。

## 至少十五条 key facts

以下提供 24 条，可按页面长度删减，但实现至少保留 15 条：

```ts
keyFacts: [
  '现行学名为 Opisthocomus hoazin；种加词 hoazin 不含字母 t，也没有第二个 o。',
  '它是麝雉目、麝雉科和麝雉属现存唯一物种。',
  '“现存唯一”不代表演化史上从无其他麝雉类，也不支持“活化石”标签。',
  'IUCN 2024 年评估为无危，全球趋势下降。',
  '全球成熟个体数没有量化，BirdLife 只提供定性与模型化趋势判断。',
  '原生留居范围跨南美洲九个国家或地区，集中于亚马孙、奥里诺科和圭亚那低地。',
  '主要生活在河岸林、廊道林、淹水森林和内陆湿地边缘。',
  '成鸟全长常概括为约 65 厘米。',
  '解剖样本合并平均体重为 716.1 克，不能当作物种上下限。',
  '红眼、鲜蓝裸露面皮和红橙色冠羽是成鸟醒目的识别特征。',
  '食谱以嫩叶、叶芽和细嫩枝梢为主，花和少量果实可作补充。',
  '主要发酵室是嗉囊和后段食管，位于真正的胃之前。',
  '解剖样本中，嗉囊和后段食管合计约占总消化道容量 77%。',
  '麝雉没有反刍动物的四胃结构，也没有可靠的嚼反刍团证据。',
  '发酵群落包括细菌、产甲烷古菌和纤毛虫，不是一种单独的“消化菌”。',
  '一项 6 只成鸟研究的序列中，厚壁菌门和拟杆菌门占主导。',
  '雏鸟、幼鸟与成鸟的前肠微生物群会随饮食和发育发生重排。',
  '雏鸟每翼有两枚显著、可动的翼指爪。',
  '雏鸟能结合翼爪、喙和双足，以交替的四肢模式攀爬。',
  '实验确认雏鸟能在水面和水下协调四肢游泳，但没有测量野外跳水频率。',
  '显著翼爪通常随成熟退化或消失，成鸟不应画出幼鸟式功能翼爪。',
  '麝雉会飞，巨大前肠和胸骨结构更适合描述为限制长距离飞行。',
  '往年后代可留作帮手，协助繁殖对守巢、孵卵和喂育。',
  '巢多为水道上方的松散枝条平台，通常约两枚卵，孵化约一个月。',
],
```

## 威胁与保护行动

BirdLife 当前公开 threat endpoint 没有列出正式编码威胁，所以 `threats` 应区分当前范围趋势、局地实证和研究缺口，不要虚构全球威胁排序。[BirdLife conservation JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/conservation)（访问日期：2026-08-30）

推荐 `threats`：

```ts
threats: [
  '河岸林、淹水森林和湿地廊道的树冠损失与破碎化；BirdLife 据范围内树冠变化推断总体趋势下降',
  '繁殖地近距离、持续性的船只和游客活动；厄瓜多尔 Cuyabeno 的局地研究记录到幼鸟存活、体重或应激方面的不利关联',
  '部分地区存在食用或宠物用途记录，但当前资料没有量化其全球影响，不能列为已证实的首要全球驱动',
  '缺少标准化全范围数量与趋势监测，使局地下降难以及时转换为可靠的全球种群估计',
],
```

推荐 `conservationActions`：

```ts
conservationActions: [
  '保护并恢复河岸林、淹水森林、沼泽边缘和相互连通的水道植被廊道',
  '在繁殖季为巢区制定船只限速、观察距离和安静区，并根据当地繁殖监测动态调整',
  '建立跨国家和保护地的标准化计数、繁殖成功率与遥感树冠变化监测，补足全球种群基线',
  '维持已识别保护地的有效管理，并在存在捕猎或宠物捕捉的地区执行本地法规和社区共管',
  '研究水文变化、食物植物、巢位选择和旅游扰动的因果关系，再据结果制定地点级管理阈值',
],
```

BirdLife 记录称物种范围内已有保护地覆盖，但没有全范围系统监测或恢复计划。不要添加圈养繁殖、迁地放归、人工育雏或全球禁猎项目，除非另有项目级来源。[BirdLife conservation JSON](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1319/conservation)（访问日期：2026-08-30）

## 四项 featured stats

`featuredStats` 精确使用以下 4 项：

```ts
featuredStats: [
  {
    key: 'adult-length',
    label: '成鸟全长',
    value: '约65',
    unit: '厘米',
    note: '常用代表值，不是经全分布区验证的封闭范围',
  },
  {
    key: 'typical-adult-mass',
    label: '样本平均体重',
    value: '约0.72',
    unit: '千克',
    note: '由解剖样本合并均值 716.1 克取整，不代表物种上下限',
  },
  {
    key: 'foregut-capacity-share',
    label: '前肠容量占比',
    value: '77',
    unit: '%',
    note: '嗉囊加后段食管占总消化道容量的解剖样本值，不是体重占比',
  },
  {
    key: 'local-incubation',
    label: '局地平均孵化期',
    value: '32',
    unit: '天',
    note: '厄瓜多尔研究均值 32 ± 1.5 天，样本量 20，不是全球固定值',
  },
],
```

不要把“翼爪 2 枚”做成主卡片，因为隐藏侧翼会造成图文误读；也不要用 EOO、推断下降区间或微生物序列比例制造缺少直觉意义的数字卡。

## 六张静态图片场景与科学边界

全部采用 3:2 横图、1536 × 1024、sRGB、单帧不透明图像，无文字、标尺、箭头、图标、商标、签名或水印。六张图建议统一为自然史插画或写实科学情景重建，避免把不同照片感、剖面图和卡通风格混在同一画廊。统一 credit 可用 `Fauna Atlas · AI 生成科学情景重建`。

通用形态约束：成鸟红眼、鲜蓝裸露面皮、红橙长冠羽、深褐羽体配奶油色纵纹、栗红飞羽、长宽尾、短腿和大圆翼。禁止鸡形鸟鸡冠、火鸡肉垂、鹦鹉钩喙、始祖鸟尾骨、兽脚类牙齿、四胃、反刍草团和“不会飞”的残翼造型。

| 序号与用途 | 稳定文件名建议 | 场景与构图 | 科学边界与验收点 | 建议 caption |
| --- | --- | --- | --- | --- |
| 01 封面 | `01-riparian-adult-portrait-source.png` / `01-riparian-adult-portrait.webp` | 亚马孙淹水森林边缘，恰好一只完整成鸟横栖在水面上方粗枝，三分之二侧面，眼、脸、冠羽、翼和长尾清楚，背景为柔焦河道与阔叶植物。 | 画面是通用生境重建，不识别具体国家、地点、性别、年龄或个体；水面背景不表示成鸟在游泳。 | `一只麝雉栖在淹水森林河道上方；画面重建通用生境，不记录具体地点。` |
| 02 取食 | `02-young-leaf-foraging-source.png` / `02-young-leaf-foraging.webp` | 恰好一只成鸟侧身抓住枝条，喙接触嫩绿叶芽与细枝梢，嗉囊所在颈胸轮廓自然，不夸张鼓胀。 | 静帧只能表现可能的取食动作，不能鉴定植物种、证明吞咽量、食谱比例、发酵效率或气味。 | `麝雉以嫩叶和枝梢为主食；一张取食图不能显示其完整食谱或发酵过程。` |
| 03 前肠概念剖视 | `03-foregut-cutaway-concept-source.png` / `03-foregut-cutaway-concept.webp` | 一只成鸟严格侧面站立，颈胸局部半透明，显示位于胃前的巨大双腔嗉囊、分隔的后段食管与较小胃部；单一完整画面，不加标签、箭头或第二只鸟。 | 这是概念性科学插画，不是 CT 或个体诊断图；严禁画成牛的四胃、腹部瘤胃、反刍团或在身体外漂浮的器官。最终需由人核对器官前后位置。 | `概念剖视显示发酵发生在嗉囊和后段食管；器官比例不能替代解剖测量。` |
| 04 雏鸟翼爪攀爬 | `04-chick-wing-claw-climbing-source.png` / `04-chick-wing-claw-climbing.webp` | 恰好一只绒羽雏鸟攀在约 45 度斜枝上，双足抓枝，喙靠近树皮，一侧展开翼清楚显示两枚彼此分开的细小弯曲角质爪，另一翼自然受透视遮挡。 | 可见翼必须恰好两枚爪，不多不少；不能画成人手、蝙蝠翼、恐龙前肢或成鸟羽翼。静帧不能证明交替步态，隐藏翼也不能用于核验爪数。 | `雏鸟能用翼爪、足与喙攀枝；静帧只重建姿势，不能显示完整运动序列。` |
| 05 雏鸟游泳 | `05-chick-surface-swimming-source.png` / `05-chick-surface-swimming.webp` | 恰好一只绒羽雏鸟在安静浅水表面游动，头颈露出，水下轮廓隐约显示翼和足参与划动，近旁有可攀的低枝，不出现捕食者。 | 实验支持水面和水下游泳能力；画面不证明因捕食者跳巢、不表示发生频率、潜水深度、持续时间或必然返回原巢。 | `实验确认雏鸟能够协调四肢游泳；画面不重演未经量化的捕食逃生事件。` |
| 06 合作育幼 | `06-cooperative-nest-over-water-source.png` / `06-cooperative-nest-over-water.webp` | 水道上方树枝间的松散平台巢，恰好两只成鸟在巢旁，一只较年长幼鸟停在邻枝，巢中恰好两只小雏鸟；所有鸟姿态自然，不拥挤。 | 场景组合来自局地常见模式，图像不能证明成鸟配偶关系、帮手亲缘、固定群大小或全球窝雏数；巢下有水不代表所有巢都如此。 | `水道上方的合作育幼情景见于多地研究；个体身份、亲缘与窝雏数不能由图像判定。` |

图片 03 和 04 是生成风险最高的场景。03 必须核对嗉囊位于颈胸、食管连续且胃较小；04 必须放大核对可见翼恰好两枚爪。任一项错误都应重生成，不用文字说明替代错误解剖。

## 建议 SpeciesSource 登记

以下精确选择 18 个唯一 URL，覆盖 schema 允许的 `taxonomy`、`conservation`、`distribution`、`ecology`、`general` 五种类型。BirdLife 一个入口同时承载现行保护状态与范围数据，此处按 `distribution` 登记；额外 JSON endpoint 只用于研究复核，不重复放进来源数组。

```ts
const HOATZIN_SOURCES = [
  {
    title: 'AviList v2025b: Global avian checklist',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'South American Classification Committee: Part 4',
    url: 'https://www.museum.lsu.edu/~Remsen/SACCBaseline04.htm',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'NCBI Taxonomy: Opisthocomus hoazin',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=30419&mode=info',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'BirdLife DataZone: Hoatzin species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/hoatzin-opisthocomus-hoazin',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Hedges et al. 1995: Phylogenetic relationships of the hoatzin',
    url: 'https://doi.org/10.1073/pnas.92.25.11662',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Mayr 2022: Hoatzin',
    url: 'https://doi.org/10.1016/j.cub.2022.08.064',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Grajal et al. 1989: Foregut fermentation in the Hoatzin',
    url: 'https://doi.org/10.1126/science.245.4923.1236',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Grajal 1995: Structure and function of the digestive tract of the Hoatzin',
    url: 'https://doi.org/10.2307/4088763',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Grajal 1995: Digestive efficiency of the Hoatzin',
    url: 'https://doi.org/10.1111/j.1474-919X.1995.tb08037.x',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Dominguez-Bello et al. 1993: Microbial digestive symbionts of the crop of the Hoatzin',
    url: 'https://doi.org/10.1086/physzool.66.3.30163698',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Godoy-Vitorino et al. 2008: Bacterial community in the crop of the Hoatzin',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2565963/',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Wright et al. 2009: Methanogenic diversity in the foregut of the Hoatzin',
    url: 'https://doi.org/10.1038/ismej.2009.41',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Godoy-Vitorino et al. 2010: Developmental microbial ecology of the Hoatzin',
    url: 'https://doi.org/10.1038/ismej.2009.147',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Abourachid et al. 2019: Hoatzin chicks use quadrupedal locomotion to crawl and swim',
    url: 'https://doi.org/10.1126/sciadv.aat0787',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Strahl 1988: The social organization and behaviour of the Hoatzin',
    url: 'https://doi.org/10.1111/j.1474-919X.1988.tb02714.x',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Dominguez-Bello et al. 1994: Ecology of the Hoatzin',
    url: 'https://digitalcommons.usf.edu/auk/vol111/iss3/14/',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Mullner et al. 2007: Reproductive biology of the Hoatzin in Ecuador',
    url: 'https://doi.org/10.1111/j.1557-9263.2007.00123.x',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Mullner et al. 2004: Exposure to ecotourism reduces survival and affects stress response',
    url: 'https://doi.org/10.1016/j.biocon.2003.10.003',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
] satisfies readonly SpeciesSource[];
```

代码标题将作者 `Müllner` 转写成 ASCII `Mullner`，避免现有数据风格与搜索工具编码差异；论文 DOI 仍指向原始记录。18 个 URL 互不重复。

## 关键不确定性与禁用表述

1. **体尺不是范围**：约 65 厘米与约 0.72 千克是代表值和样本均值。不要生成虚假的最小值、最大值或性别范围。
2. **LC 没有判据字符串**：2024 记录为 LC、下降，criteria 为空。评估阈值不能倒推成真实个体数。
3. **全球种群未量化**：不填成熟个体数，也不把“common”翻成某个数量级。
4. **77% 的分母是消化道容量**：不能写成身体质量、消化道长度或每天能量来源比例。
5. **功能趋同不是器官同源**：不要画牛的瘤胃或写四胃、反刍、嚼草团。
6. **微生物调查不等于完整功能图谱**：94% 未归到物种层级不等于 94% 新物种；门水平丰度也不能说明每个代谢步骤。
7. **气味因果未经直接定量**：可以保留 Stinkbird 俗名，不指定某种菌、甲烷或挥发性脂肪酸是唯一气味来源。
8. **翼爪数字标签有争议**：正文说两枚翼指爪，不称第 1、第 2 或第 2、第 3 指。
9. **成鸟保留状态有个体和定义不确定性**：用“显著功能爪通常随成熟退化或消失”，不写绝对零保留。
10. **实验能力不是野外发生率**：2019 年研究支持攀爬和游泳动作，不支持跳水频率、捕食成功率或必然归巢。
11. **水上巢是常见而非绝对**：委内瑞拉与厄瓜多尔有明确记录，页面用“多见、通常”，不用“全部”。
12. **合作群数字是局地资料**：2 至 8 只、90% 留巢和最多 6 个帮手都来自委内瑞拉研究点。
13. **旅游效应是地点级证据**：Cuyabeno 研究足以支持繁殖区限距管理，但不能外推成所有旅游形式的统一效应值。
14. **成鸟会飞**：只描述短距离和机动受限，不标记“不会飞”。
15. **独立谱系不是活化石**：任何恐龙、始祖鸟或祖先叙事都应删除。

## 实现验收建议

档案测试至少覆盖：

```js
assert.equal(profile.id, 'species-opisthocomus-hoazin');
assert.equal(profile.slug, 'hoatzin');
assert.equal(profile.names.zh, '麝雉');
assert.equal(profile.names.en, 'Hoatzin');
assert.equal(profile.scientificName, 'Opisthocomus hoazin');
assert.deepEqual(
  getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
    rank,
    taxon.scientificName,
  ]),
  [
    ['kingdom', 'Animalia'],
    ['phylum', 'Chordata'],
    ['class', 'Aves'],
    ['order', 'Opisthocomiformes'],
    ['family', 'Opisthocomidae'],
    ['genus', 'Opisthocomus'],
  ],
);
assert.deepEqual(
  {
    code: profile.conservation.code,
    trend: profile.conservation.trend,
    assessedYear: profile.conservation.assessedYear,
    criteria: profile.conservation.criteria,
  },
  {
    code: 'LC',
    trend: 'decreasing',
    assessedYear: 2024,
    criteria: undefined,
  },
);
assert.deepEqual(profile.distribution.realms, ['terrestrial', 'freshwater']);
assert.equal(profile.distribution.countries.length, 9);
assert.equal(profile.storySections.length, 6);
assert.ok(profile.keyFacts.length >= 15);
assert.equal(profile.featuredStats.length, 4);
assert.equal(profile.media.gallery.length, 5);
assert.equal(profile.sources.length, 18);
assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
assert.ok(
  profile.sources.every(({ kind }) =>
    ['conservation', 'taxonomy', 'distribution', 'ecology', 'general'].includes(kind),
  ),
);
assert.equal(profile.metrics.estimatedMatureIndividuals, undefined);
```

静态资产另做尺寸、WebP 格式、文件存在性和 alpha 检查。图片 03 由人工核对前肠位置，图片 04 由人工核对可见翼的两枚爪；自动测试只能验证文件，不能替代解剖审查。
