# 华丽琴鸟（*Menura novaehollandiae*）完整档案研究

- 检索与核验日期：2026-09-03
- 推荐展示中文名：**华丽琴鸟**
- 推荐展示英文名：**Superb Lyrebird**
- 当前接受名：***Menura (Menura) novaehollandiae* Latham, 1801**；产品 `scientificName` 使用二名法 `Menura novaehollandiae`
- 推荐 slug：`superb-lyrebird`
- IUCN：**LC 无危，2018 年评估，种群趋势 decreasing；无受胁准则代码**
- 分布口径：澳大利亚东部与东南部大陆为原生范围；塔斯马尼亚南部种群为人为引入
- 使用范围：把 `docs/todo.md` 中“华丽琴鸟 *Menura novaehollandiae*”落实为完整 `Species`、六段故事、四项 featured stats、1 张封面与 5 张详情图
- 证据标准：名称和分类采用 Australian Faunal Directory 与 IOC World Bird List；保护等级采用 IUCN 正式评估和 BirdLife 当前结构化记录；形态、分布与基础生态采用 BirdLife Australia 的 HANZAB 官方物种记录；行为、火灾影响和生态工程数字采用同行评审原始研究
- 时间边界：本稿只描述截至 2026-09-03 已正式发布或已由官方数据库公开的资料；所有建议 `SpeciesSource.accessedAt` 统一为 `2026-09-03`

## 编辑结论

Australian Faunal Directory 接受 ***Menura (Menura) novaehollandiae* Latham, 1801**，并把它置于雀形目、琴鸟科、琴鸟属；当前处理包含 `M. n. edwardi`、指名亚种 `M. n. novaehollandiae` 与 `M. n. victoriae` 三个亚种。产品字段不保存亚属，故 `scientificName` 写作 `Menura novaehollandiae`，不能改用旧组合或把任一亚种提升成种。[Australian Faunal Directory / Atlas of Living Australia](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23)

IOC World Bird List v15.2 使用英文名 **Superb Lyrebird**；同版官方多语种表把简体中文名列为 **华丽琴鸟**、繁体中文名列为 **華麗琴鳥**。默认中文名应跟随多语种表和仓库 TODO，不把“大琴鸟”等未在本次权威来源核实的名称加入别名。[IOC World Bird List v15.2](https://www.worldbirdnames.org/new/bow/lyrebirds/) [IOC Multilingual Names v15.2](https://worldbirdnames.org/Multiling%20IOC%2015.2.xlsx)

IUCN 当前正式评估仍是 **Least Concern（LC）**，评估年 **2018**；BirdLife 当前记录把趋势列为 **decreasing**，成熟个体数未量化。LC 条目没有 A—E 受胁准则代码，所以实现应调用 `conservation('LC', 'decreasing', 2018)`，不得凭下降趋势补写 `A2`、`B1` 等 `criteria`。2019—2020 年大火后的原始研究提示现行等级可能低估局地影响，但研究论文不能替代新的正式红色名录评估。[IUCN Red List 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) [Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)

华丽琴鸟不只是“会模仿声音的鸟”。野外实验显示雄鸟能高度准确地复制其他鸟声，把四类歌声与不同舞步组合，并在特定求偶阶段制造多物种围攻群的声学假象；雌鸟也有复杂的物种特有声与仿声。产品应写有实验支持的自然鸟声、翼拍声和声学结构，不复述“野生个体经常完美模仿链锯、相机和汽车警报”的流行清单。[Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021) [Dalziell & Magrath 2012](https://doi.org/10.1016/j.anbehav.2012.03.009) [Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018) [Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003) [Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034)

## 名称、种界与六级分类

### 建议名称字段

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| `id` | `species-menura-novaehollandiae` | 沿用仓库 `species-<学名>` 约定 |
| `slug` | `superb-lyrebird` | 与 IOC 英文主名一致 |
| `scientificName` | `Menura novaehollandiae` | 产品不带命名人，也不保存 AFD 的同名亚属 |
| 完整接受名 | *Menura (Menura) novaehollandiae* Latham, 1801 | AFD 当前处理；命名人不加括号 |
| `names.zh` | 华丽琴鸟 | IOC v15.2 简体中文名与仓库 TODO |
| `names.en` | Superb Lyrebird | IOC v15.2 英文名 |
| `names.aliases` | 不填 | 本轮没有需要展示的、由同等级来源核实的替代俗名 |

名称与接受名分别由 [IOC v15.2](https://www.worldbirdnames.org/new/bow/lyrebirds/)、[IOC 多语种表](https://worldbirdnames.org/Multiling%20IOC%2015.2.xlsx) 和 [AFD](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23) 支持。

### 产品六级分类

| 阶元 | 学名 | 中文名 | 产品口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | `animalTaxonomy` 固定生成 |
| 门 | Chordata | 脊索动物门 | AFD 与 Australian Museum 一致 |
| 纲 | Aves | 鸟纲 | AFD 与 Australian Museum 一致 |
| 目 | Passeriformes | 雀形目 | AFD、IOC 与 Australian Museum 一致 |
| 科 | Menuridae | 琴鸟科 | AFD 与 IOC 当前接受科 |
| 属 | *Menura* | 琴鸟属 | AFD 当前接受属 |
| 种 | *Menura novaehollandiae* | 华丽琴鸟 | 物种叶节点，不属于 `taxonomy` 六字段本身 |

这条分类链由 [Australian Faunal Directory](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23)、[IOC v15.2](https://www.worldbirdnames.org/new/bow/lyrebirds/) 与 [Australian Museum](https://australian.museum/learn/animals/birds/superb-lyrebird/) 交叉核验。

三个亚种的展示边界：`M. n. edwardi` 见于分布北段，指名亚种位于中段，`M. n. victoriae` 位于南段并成为塔斯马尼亚引入种群的来源。条目保持种级档案，不用一张生成图宣称表现某一亚种；若未来添加亚种标签，必须以地点、凭证或明确形态诊断另行核实。[HANZAB — Expanded taxonomy, Part 3](https://hanzab.birdlife.org.au/expanded-hanzab-taxonomy-part-3/) [HANZAB — Superb Lyrebird](https://hanzab.birdlife.org.au/species/superb-lyrebird/)

## IUCN 状态、趋势与数量缺口

推荐结构化字段：

```ts
conservation: conservation('LC', 'decreasing', 2018),
```

| 字段 | 建议值 | 证据与限制 |
| --- | --- | --- |
| `system` | `IUCN Red List` | 仓库固定值 |
| `code` | `LC` | IUCN 2018 正式评估；截至核验日没有更新正式等级 |
| `trend` | `decreasing` | BirdLife 当前结构化记录；趋势被标为 suspected，不是全范围同步计数结果 |
| `assessedYear` | `2018` | 评估年，不用 DOI 访问年、火灾论文年或本稿日期 |
| `criteria` | 不填 | LC 没有受胁准则代码 |
| `estimatedMatureIndividuals` | 不填 | BirdLife 把数量列为未量化；不能从分布面积、局地密度或公民科学记录外推 |

2018 评估采用约 487,000 平方千米的 EOO 估计，并认为范围和数量没有接近易危阈值；它同时怀疑栖息地丧失、退化及引入哺乳动物捕食正在造成下降。该 EOO 是名录尺度指标，不等于实际森林面积，也不进入 `metrics`。[IUCN Red List 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)

BirdLife 当前页面显示正在重新评估本种。实现只能把这点作为维护提示；在新评估正式发布前，不能把 LC 改成 NT、VU 或其他等级，也不能用 2019—2020 年烧毁比例自行推导红色名录准则。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) [Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)

## 分布、地图与生境

### 原生范围和引入范围

本种原生于澳大利亚东部与东南部大陆：昆士兰州东南部、新南威尔士州东部与大分水岭地区、澳大利亚首都领地，以及维多利亚州东部和东南部。塔斯马尼亚南部种群来自 1934—1949 年从维多利亚输入的个体；HANZAB 汇总为 22 只输入、20 只释放。国家字段只有澳大利亚，但 `range` 必须保留“大陆原生、塔斯马尼亚引入”的来源差异。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) [Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021)

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['大洋洲'],
  regions: [
    '昆士兰州东南部',
    '新南威尔士州东部与澳大利亚首都领地',
    '维多利亚州东部和东南部',
    '塔斯马尼亚州南部（引入）',
  ],
  countries: ['澳大利亚'],
  endemicTo: ['澳大利亚'],
  range:
    '原生于澳大利亚东部和东南部大陆，从昆士兰州东南部经新南威尔士州、澳大利亚首都领地至维多利亚州东部和东南部；塔斯马尼亚州南部种群由20世纪引入后建立，不属于原生范围。',
  center: { lat: -35.7, lng: 149.1 },
},
```

`center` 只把地图初始视窗放在大陆分布中段，不是模式产地、数量中心、繁殖点或完整范围。塔斯马尼亚仍列在 `regions` 和文字范围中，不应因地图中心在大陆而消失。

### 生境字段

BirdLife 的正式栖息地表把温带森林和亚热带／热带湿润低地森林列为主要留居生境，把亚热带／热带干燥森林列为适宜留居生境。HANZAB 进一步记录温带和亚热带雨林、湿润硬叶林、部分干燥硬叶林与有足够湿度的沟谷；本种需要可翻耙的枯落层与相对开阔的地表。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) [HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

1. **温带雨林与湿润硬叶林，primary**：湿润沟谷、溪流附近、树蕨和藤本较多的森林同时提供食物、夜栖树和巢址条件。[HANZAB](https://hanzab.birdlife.org.au/species/superb-lyrebird/) [Maisey et al. 2019](https://doi.org/10.1111/aec.12684)
2. **亚热带湿润低地森林，primary**：北段种群使用亚热带雨林和湿润林；“低地”是 IUCN 栖息地分类，不表示全种只生活在海拔低处。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)
3. **干燥硬叶林与林地，suitable**：在花岗岩带、湿润沟谷及有足够枯落物水分的地点可以出现，但不能把所有干林视为等质量生境。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
4. **巢址与觅食地的互补微生境**：丹德农山脉研究发现，巢址更接近溪流，偏向湿林或雨林、较深枯落物及更复杂的中高层植被；觅食痕迹更常见于低层植被稀疏、地表开阔的湿林或雨林。两类资源不能被一条“植被越密越好”概括。[Maisey et al. 2019](https://doi.org/10.1111/aec.12684)

大蓝山研究得到同一方向：巢址更可能位于陡坡、浓密树冠和有藤本、树蕨等雨林元素的地点；雨林只占研究区约 1%，却有最高巢址概率。这个比例属于大蓝山世界遗产区，不可推广为全物种范围的雨林比例。[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)

## 外形、成体尺寸、体重与翼展

HANZAB 的细分测量为：雄鸟全长约 103 厘米，其中尾长 54—71 厘米；雌鸟全长约 78 厘米，记录范围 76—80 厘米，其中尾长 25—41 厘米；翼展典型值 73 厘米、记录范围 68—76 厘米；代表性体重为雄鸟 1,065 克、雌鸟 880 克。Australian Museum 的科普范围 80—100 厘米是四舍五入后的简表，不应覆盖 HANZAB 的两性细分值。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) [Australian Museum](https://australian.museum/learn/animals/birds/superb-lyrebird/)

推荐结构化字段：

```ts
measurements: {
  length: {
    min: 76,
    max: 103,
    unit: 'cm',
    note: '两性成体展示包络：雌鸟76—80厘米，雄鸟约103厘米，均含尾；不是同一性别的统计范围。',
  },
  weight: {
    min: 880,
    max: 1065,
    unit: 'g',
    note: 'HANZAB代表值：雌鸟880克、雄鸟1065克；两端不是物种成体极值。',
  },
  wingspan: {
    min: 68,
    max: 76,
    typical: 73,
    unit: 'cm',
    note: 'HANZAB种级汇总；原记录没有在该字段公开样本量或两性拆分。',
  },
},
metrics: {
  adultLengthCm: [76, 103],
  wingspanCm: [68, 76],
},
```

`adultMassKg` 留空。0.880 与 1.065 千克是两个性别的代表值，不是抽样所得的成年全范围；把它们写成 `[0.88, 1.065]` 会让排序字段暗示错误的最小值和最大值。`lifespanYears` 也留空：HANZAB 有个别长期重见记录，但没有足以定义全物种成年寿命范围的数据。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

识别组合是深灰褐色体羽、折翼上的暗红褐色、短而细的黑喙、浅蓝灰至灰色眼圈、短圆翼和强健的暗色腿足。雄鸟的尾由 16 枚尾羽组成：外侧一对宽阔弯曲的琴形羽、中央一对细长线状羽，以及六对丝状羽；展示时尾羽向前翻过背部和头部，银灰色腹面形成罩状结构。它不是孔雀式直立眼斑扇，也没有雉鸡的实心楔形长尾。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

雄鸟约 4—5 年才取得成鸟体羽，完整成鸟尾通常在 6—8 年形成。Smith 对羽毛连续年换羽的研究把雄性成熟尾的形成概括为约八年，并记录外侧琴形羽从早期约 245 毫米增长到成熟时约 700 毫米；个体进度不同，不能凭一张照片精确估龄。[Smith 2004](https://doi.org/10.1071/MU01020) [HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

## 食性、觅食与活动

华丽琴鸟主要吃地表和土壤中的无脊椎动物，包括蚯蚓、端足类、等足类、蜘蛛、蜈蚣、多足类和多类昆虫，偶尔吃种子。它用两只强足与爪连续翻耙枯落物、表土和腐木，而不是用喙钻土；“虫食为主、偶食植物”适合编码为 `['insectivore', 'omnivore']`，不能把它写成纯食虫或专吃蚯蚓。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) [Australian Museum](https://australian.museum/learn/animals/birds/superb-lyrebird/)

```ts
diet: {
  types: ['insectivore', 'omnivore'],
  foods: [
    '蚯蚓',
    '端足类与等足类',
    '蜘蛛',
    '蜈蚣与多足类',
    '甲虫及其他昆虫与幼虫',
    '偶尔取食的种子',
  ],
  description:
    '以森林地表、枯落层和浅土中的无脊椎动物为主，偶食种子；用强健双足翻耙叶层、腐木和表土寻找猎物。',
},
activity: [
  '昼行、以地面活动和觅食为主',
  '通常独居，繁殖后可形成小型松散觅食群',
  '夜间上树栖息，记录可达地面上方约45米',
  '基本留居，只作局地移动和幼鸟扩散',
  '飞行较少，受扰时多奔跑、跳跃或短距离滑翔',
  '繁殖期雄鸟维护土丘展示场并在领地内歌舞',
],
```

一项在维多利亚中央高地三个森林区、三种林型中设置排除、模拟翻耙和开放样地的原始研究估算，华丽琴鸟一年平均每公顷翻动 **155.7 Mg** 枯落物和土壤。排除琴鸟两年后，表层 7.5 厘米土壤压实度相对基线增加 37%，开放样地下降 22%；围栏内枯落物深度接近开放样地三倍。这些是研究地点和设计内的平均效应，不是每只鸟的个人“搬土量”，也不能直接外推到所有干林。[Maisey et al. 2021](https://doi.org/10.1002/eap.2219)

同一研究系统后续用翻耙处理分离“扰动”和“捕食”效应，发现模拟翻耙可提高无脊椎动物的生物量与分类丰富度；开放给琴鸟的样地又因捕食而降低这些量。论文把这种正反馈称为“farming”，产品应译成“通过扰动补充猎物资源的反馈”，不能写成鸟有意识地饲养昆虫。[Maisey et al. 2025](https://doi.org/10.1111/1365-2656.70009)

## 仿声、舞蹈与繁殖

Zann 与 Dunstan 比较两个地理隔离种群，发现它们选择了近乎相同的一组鸟类声源；成鸟的曲目辨识度和模仿准确度高于亚成鸟，支持复杂曲目需要长期学习。这个结果不等于所有种群的曲目完全相同，也没有证明每种仿声都直接提高交配成功。[Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021)

Dalziell 与 Magrath 用灰鸫原声和雄鸟仿声做回放，灰鸫对单独播放的仿声与真实同类歌声反应同样强；声学分析也显示复制高度相似。雄鸟会缩短原声中的重复单元，因此更准确的表述是“高度准确但常有删节”，而不是“完美复制任何声音”。[Dalziell & Magrath 2012](https://doi.org/10.1016/j.anbehav.2012.03.009)

对 12 只野生雄鸟的录像研究识别出四类舞蹈歌声，每类与不同的腿部动作、尾位和翼部动作组合相关，表演还呈可预测顺序。静态图片只能表现一个可能姿态，不能显示四段编排或证明画面中的鸟正在唱哪一段。[Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018)

雄鸟还会在雌鸟试图离开展示场和交配期间，复制多种小鸟的警戒叫声与翼拍声，制造混合种围攻群的声学假象；回放实验能骗过其他鸟类听众。作者把这种时机解释为可能延长关键性互动的“感官陷阱”，这是行为功能推断，不是对雄鸟主观意图的直接测量。[Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003)

雌鸟并不沉默。原始研究记录雌鸟在觅食时多发物种特有歌声，护巢时更常发物种特有警戒声和多类仿声，仿声类别会随情境改变。产品可以写“雌鸟也会复杂仿声”，不能把所有仿声都归作雄性求偶装饰。[Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034)

雄鸟与多只雌鸟交配，不参加筑巢、孵卵或育雏。雌鸟独自建造有侧入口的穹顶巢，几乎总是产一枚卵；HANZAB 汇总的孵化期为 42—57 天，Lill 对 7 枚卵的均值估计是 `50 ± 2` 天。离巢后幼鸟还可依赖母鸟 8—9 个月。以上数字主要来自维多利亚长期研究，不是每个纬度和年份的固定日程。[Lill 1986](https://doi.org/10.1071/ZO9860351) [HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

## 威胁、火灾影响与保护方向

### 有证据支持的威胁

1. **原生森林丧失、退化与破碎化**：BirdLife 把持续的栖息地丧失和退化列入下降趋势依据；HANZAB 记录聚落、农业、原生林清除和转为松林造成的历史及局地影响。现有来源没有给出全物种年度损失率，不能添加百分比。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) [HANZAB](https://hanzab.birdlife.org.au/species/superb-lyrebird/)
2. **严重野火和气候变化下的生境改变**：BirdLife 当前威胁表列出未来的气候驱动生境转移与改变；大火会同时损失觅食地、巢址和湿润避难所。不能把“火”写成单向关系，因为低至中等扰动、火烧斑块和林型会产生不同结果。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) [Nugent et al. 2014](https://doi.org/10.1071/WR14052) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)
3. **引入哺乳动物捕食**：HANZAB 汇总猫、赤狐和犬捕食成鸟与巢内幼鸟的记录；BirdLife 也把引入哺乳动物捕食列入趋势依据。历史记录和局地研究不能给三类捕食者排出全范围贡献顺序。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)
4. **稠密杂草、地表封闭和道路死亡**：HANZAB 记录稠密原生地被或外来杂草会阻碍需要开阔地表的翻耙觅食，也有车辆撞击记录。这些是地点性压力，不能在没有监测的情况下称为全球首要威胁。[HANZAB official species record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

2019—2020 年五个月的大火被估计烧过全种约 43% 的分布区，指名亚种约 55%。大蓝山内超过 74% 的潜在巢栖息地、80% 的高适宜度巢区被烧；这项结果针对大蓝山和指名亚种。另一项针对南部亚种 `M. n. victoriae` 的 226 点实地调查估计 41.5%、约 210 万公顷生境受火影响，高强度火烧地的觅食痕迹几乎消失，雨林是例外。各数字的空间范围不同，不应合并成一个全种损失率。[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)

Nugent 等人的九个月排除实验发现，琴鸟觅食让开放样地的枯落燃料量比排除样地低 25%，即 1.66 吨／公顷；火行为模型据此得到更低的起火可能性和火强度。这是局地、模型辅助结果，不支持“琴鸟能阻止森林火灾”或“有琴鸟就不会发生大火”。[Nugent et al. 2014](https://doi.org/10.1071/WR14052)

### 推荐写入 `conservationActions` 的方向

1. 保护并恢复温带、亚热带雨林和湿润硬叶林，优先保留溪流、陡坡、树蕨和藤本较多的巢址环境及火灾避难所。[Maisey et al. 2019](https://doi.org/10.1111/aec.12684) [Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)
2. 维持相连森林镶嵌：巢址需要复杂的中高层结构，觅食地又需要低层植被稀疏、可翻耙的枯落地表；管理不能只追求一种均质结构。[Maisey et al. 2019](https://doi.org/10.1111/aec.12684)
3. 把火强度和林型纳入恢复优先级，防止剩余雨林避难所遭受高强度重复火烧，并监测烧后再占用和巢址恢复。[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)
4. 在有证据的地点控制猫、赤狐、犬及入侵杂草，记录控制前后的成鸟、巢和觅食响应，不把控制存在本身当作成效。[HANZAB](https://hanzab.birdlife.org.au/species/superb-lyrebird/) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)
5. 建立跨亚种、跨林型的系统监测，分别跟踪占用、繁殖、幼鸟补充、火灾严重度和地表觅食痕迹。BirdLife 当前记录没有可靠成熟个体数，也未显示全范围系统监测，局地痕迹不能直接等同个体数。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)

## 四项 featured stats

| `key` | label | value | unit | note 与来源 |
| --- | --- | --- | --- | --- |
| `male-total-length` | 雄鸟全长 | `约103` | `厘米` | 含 54—71 厘米尾；HANZAB 代表值，不是雄鸟范围上限。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) |
| `full-adult-tail` | 完整雄性成尾 | `6—8` | `年` | HANZAB 的外观形成范围；Smith 的连续换羽研究概括为约八年，不能据此从照片精确估龄。[Smith 2004](https://doi.org/10.1071/MU01020) |
| `annual-soil-turnover` | 年翻动枯落物与土壤 | `155.7` | `吨/公顷` | 维多利亚中央高地研究地的 12 个月平均，不是每只鸟或全分布区常数。[Maisey et al. 2021](https://doi.org/10.1002/eap.2219) |
| `incubation-period` | 孵化期均值 | `50 ± 2` | `天` | 维多利亚研究的 7 枚卵估计；HANZAB 汇总范围 42—57 天。[Lill 1986](https://doi.org/10.1071/ZO9860351) |

## 页面字段文案

### `summary`

> 澳大利亚东南森林地面的华丽琴鸟用强足翻开枯落物；雄鸟把16枚尾羽、习得的仿声和编排舞步合成求偶展示，雌鸟则独自筑巢并养大通常唯一的雏鸟。

### `description`

> 华丽琴鸟是澳大利亚特有的大型地栖鸣禽，原生于昆士兰州东南部至维多利亚州东部的森林，塔斯马尼亚南部种群来自20世纪引入。它白天在湿润森林的枯落层和表土中寻找无脊椎动物，夜间上树栖息；一年可在研究地平均翻动每公顷155.7吨枯落物和土壤。成年雄鸟把由16枚尾羽组成的长尾向前翻过头部，并让四类歌声与特定舞步配合；它还能高度准确地复制其他鸟声，在特定求偶阶段制造多物种围攻群的声学假象。雌鸟同样会仿声，并独自筑巢、孵化通常一枚卵和育幼。IUCN正式口径仍是2018年无危、趋势下降，成熟个体总数未量化；栖息地退化、引入捕食者和更严重的火灾需要持续监测。

### `tags`

```ts
[
  '澳大利亚特有',
  '雀形目',
  '琴鸟科',
  '森林地栖鸟',
  '仿声',
  '多模态求偶',
  '雄性饰羽',
  '雌性单独育幼',
  '生态系统工程师',
  '塔斯马尼亚引入种群',
  'IUCN无危',
  '种群下降',
  '山火敏感',
]
```

`summary`、`description` 和 tags 中的分布、形态、行为、生态工程、繁殖及状态分别来自 [HANZAB](https://hanzab.birdlife.org.au/species/superb-lyrebird/)、[Maisey et al. 2021](https://doi.org/10.1002/eap.2219)、[Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018)、[Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003)、[Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034) 与 [IUCN 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en)。

### `keyFacts`

1. 当前接受名是 *Menura (Menura) novaehollandiae* Latham, 1801；产品用二名法 *Menura novaehollandiae*，并保持 `edwardi`、指名亚种与 `victoriae` 三个亚种的种级合并处理。[AFD](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23)
2. IOC v15.2 的英文主名是 Superb Lyrebird，官方多语种简体中文名是华丽琴鸟。[IOC](https://www.worldbirdnames.org/new/bow/lyrebirds/) [IOC Multilingual Names](https://worldbirdnames.org/Multiling%20IOC%2015.2.xlsx)
3. 本种只分布于澳大利亚；东部和东南部大陆是原生范围，塔斯马尼亚南部是人为引入范围。[HANZAB](https://hanzab.birdlife.org.au/species/superb-lyrebird/) [Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021)
4. 主要生境是温带森林和亚热带湿润低地森林，也能使用部分有合适水分和地表结构的干燥森林。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)
5. 雄鸟全长约 103 厘米、尾长 54—71 厘米；雌鸟全长约 78 厘米，记录范围 76—80 厘米、尾长 25—41 厘米。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
6. 翼展典型值约 73 厘米、汇总范围 68—76 厘米；HANZAB 没有在该字段公开样本量或两性拆分。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
7. HANZAB 的代表性体重为雄鸟 1,065 克、雌鸟 880 克；这两个数不是全种成体极值。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
8. 成年雄鸟尾部有 16 枚尾羽：一对外侧琴形羽、一对中央线状羽和六对丝状羽。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
9. 完整雄性成尾通常在 6—8 年形成；连续年换羽研究把过程概括为约八年，个体间有差异。[Smith 2004](https://doi.org/10.1071/MU01020) [HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
10. 它以蚯蚓、甲壳类、蛛形类、多足类和昆虫等地表无脊椎动物为主，偶食种子，用强足翻耙枯落层和表土觅食。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
11. 维多利亚中央高地实验估计研究地一年平均每公顷被翻动 155.7 吨枯落物和土壤；这是地点平均，不是单鸟搬运量。[Maisey et al. 2021](https://doi.org/10.1002/eap.2219)
12. 本种昼间主要在地面活动，夜间上树栖息；基本留居，飞行较少，受扰时常奔跑、跳跃或短距滑翔。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
13. 回放和声学分析显示，雄鸟对灰鸫歌声的复制高度准确，但常删减模型歌声的重复单元。[Dalziell & Magrath 2012](https://doi.org/10.1016/j.anbehav.2012.03.009)
14. 12 只野生雄鸟的录像揭示四类舞蹈歌声分别配合特定腿、尾和翼动作，且表演有可预测顺序。[Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018)
15. 雄鸟在雌鸟离开展示场或交配期间可模拟多物种围攻群；研究支持感官欺骗解释，但没有测量雄鸟的主观意图。[Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003)
16. 雌鸟也有复杂仿声；觅食与护巢时使用的物种特有声、警戒声和模仿对象比例不同。[Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034)
17. 雌鸟独自筑造穹顶侧开口巢、孵卵和育幼，几乎总产一枚卵；7 枚卵的孵化期均值为 `50 ± 2` 天。[Lill 1986](https://doi.org/10.1071/ZO9860351) [HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
18. IUCN 当前正式值为 LC、2018 年评估、趋势下降，成熟个体数未知；LC 没有可写入的受胁准则代码。[IUCN 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)
19. 2019—2020 年大火被估计烧过全种约 43% 的分布区；大蓝山与南部亚种调查都显示高适宜巢区或高强度火烧地受影响更重。[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)

### `threats` 与 `conservationActions`

```ts
threats: [
  '原生森林丧失、退化与破碎化，减少湿润巢址和可翻耙的觅食地表；全种年度损失率尚未量化。',
  '更严重、范围更大的野火及气候变化驱动的生境转移，尤其威胁稀少的雨林巢址和烧后避难所。',
  '猫、赤狐和犬等引入哺乳动物捕食成鸟或巢内幼鸟；不同捕食者的全范围贡献尚未排序。',
  '稠密外来杂草和封闭地表阻碍翻耙觅食，部分道路还造成车辆撞击；这些压力主要有地点性记录。',
],
conservationActions: [
  '保护并恢复温带和亚热带雨林、湿润硬叶林、溪流沟谷与陡坡巢址，优先维持火灾避难所。',
  '在相连森林镶嵌中同时保留复杂中高层巢址植被和低层稀疏、枯落层可翻耙的觅食地表。',
  '按火灾严重度和林型确定恢复优先级，防止剩余雨林遭受高强度重复火烧，并跟踪烧后再占用。',
  '在有证据的地点控制猫、赤狐、犬和入侵杂草，用控制前后监测检验成鸟、巢与觅食响应。',
  '建立跨亚种、跨林型的标准化监测，分别记录占用、繁殖、幼鸟补充、火灾严重度和觅食痕迹。',
],
```

以上 threat/action 字符串对应前文逐项证据，不把研究建议误写成已覆盖全范围的现行恢复计划。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) [Maisey et al. 2019](https://doi.org/10.1111/aec.12684) [Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)

## 六段故事

### 1. 大陆原声，岛上回声

- `key`: `mainland-and-tasmania`
- `label`: `分布边界`
- `title`: `塔斯马尼亚的琴声来自一次引入`
- `body`: `华丽琴鸟原生于澳大利亚东部和东南部大陆。1934—1949年，人们从维多利亚向塔斯马尼亚输入22只、释放20只，南部岛屿种群由此建立。今天国家字段只有澳大利亚，地图却必须区分大陆原生范围和塔斯马尼亚引入范围；“澳大利亚特有”不等于岛上也是天然分布。`
- 证据：[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)；[Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021)

### 2. 每一步都在重排森林地面

- `key`: `forest-floor-engineer`
- `label`: `生态工程`
- `title`: `强足翻开的不只是下一口食物`
- `body`: `华丽琴鸟用双足把枯叶、表土和腐木向后耙开，寻找蚯蚓、甲壳类、蛛形类、多足类和昆虫。维多利亚中央高地实验估计，研究地一年平均每公顷被翻动155.7吨枯落物和土壤；排除琴鸟两年后，表土更紧实、枯落层更深。这个数字描述种群在特定森林里的年扰动，不是一只鸟独自搬运的重量。`
- 证据：[Maisey et al. 2021](https://doi.org/10.1002/eap.2219)；[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

### 3. 一副尾羽要等多年

- `key`: `tail-through-moults`
- `label`: `雄性饰羽`
- `title`: `十六枚尾羽在连续换羽中成形`
- `body`: `成年雄鸟的尾由一对宽阔琴形羽、一对中央线状羽和六对丝状羽组成。展示时，尾羽不是像孔雀那样竖在身后，而是向前翻过背部和头部，露出银灰色腹面。完整成尾通常要6—8年；连续换羽研究把成熟过程概括为约八年，所以初见特殊尾羽的年轻雄鸟仍不等于成年展示者。`
- 证据：[Smith 2004](https://doi.org/10.1071/MU01020)；[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

### 4. 歌声、舞步与一次声学假象

- `key`: `learned-song-and-dance`
- `label`: `多模态求偶`
- `title`: `它学会声音，也把声音编进动作`
- `body`: `雄鸟对其他鸟声的复制足以让灰鸫作出接近真实同类歌声的反应，但它常删短重复段。录像研究又发现，四类舞蹈歌声各自配合特定的腿步、尾位和翼动。在雌鸟试图离场或交配期间，雄鸟还会拼出多种警戒叫声和翼拍声，形成一群小鸟围攻捕食者的听觉假象；“感官陷阱”是有实验支持的功能解释，不是对雄鸟意图的读心。`
- 证据：[Dalziell & Magrath 2012](https://doi.org/10.1016/j.anbehav.2012.03.009)；[Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018)；[Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003)

### 5. 一枚卵由雌鸟独自守候

- `key`: `single-egg-solo-mother`
- `label`: `繁殖投入`
- `title`: `雄鸟的舞台之外，是漫长的单亲育幼`
- `body`: `雌鸟独自选择巢址，用枝、根、树皮、蕨叶和苔藓筑成有侧入口的穹顶巢，几乎总是产一枚卵。维多利亚研究的7枚卵平均孵化约50天；雏鸟离巢后仍可依赖母鸟8—9个月。雄鸟不参与筑巢、孵卵或喂幼，雌鸟的仿声还会在护巢情境中变得更频繁、更偏向警戒内容。`
- 证据：[Lill 1986](https://doi.org/10.1071/ZO9860351)；[Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034)；[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

### 6. 无危等级挡不住高强度火线

- `key`: `fire-refugia`
- `label`: `火灾避难所`
- `title`: `一小片湿润雨林可能决定烧后重返`
- `body`: `IUCN仍把华丽琴鸟列为无危，但2019—2020年大火估计烧过全种约43%的分布区。大蓝山约80%的高适宜度巢区被烧；南部亚种调查中，高强度火烧地几乎没有觅食痕迹，雨林却保留例外。保护不能只统计烧过多少面积，还要保住溪谷、陡坡和雨林这些巢址与重返源地。`
- 证据：[IUCN 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en)；[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)；[Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)

## 六张原创图像设计

六张图均按 `1536 × 1024`、横向 3:2、opaque sRGB、写实自然史摄影生成。源文件放在 `src/assets/source/species/superb-lyrebird/`，文件名以 `-source.png` 结尾；运行时 WebP 放在 `public/images/species/superb-lyrebird/`。每张图独立生成，不做拼贴，不使用受版权保护的参考照片。统一 credit 为 `Fauna Atlas · AI 生成科学情景重建`。

所有画面都遵守这些边界：不得出现文字、标签、箭头、音符、声波、地图、比例尺、logo、水印、签名、边框或拼贴；不得出现重复头、喙、翅、腿、足或尾羽束；不得把华丽琴鸟画成孔雀、雉鸡、园丁鸟、极乐鸟或艾氏琴鸟。静帧不能证明声音、模仿准确度、声序、个体意图、亲缘、性别、年龄、数量趋势、火灾严重度或保护成效，alt 和 caption 不越过可见像素。

### 01 · 封面：雄鸟在湿润森林展示

- 源文件：`src/assets/source/species/superb-lyrebird/01-male-display-forest-cover-source.png`
- 运行时文件：`public/images/species/superb-lyrebird/01-male-display-forest-cover.webp`
- `media.image`：`./images/species/superb-lyrebird/01-male-display-forest-cover.webp`
- 建议 `focalPoint`：`{ x: 0.66, y: 0.515 }`
- 构图目标：仅一只完整成年雄鸟，位于右侧、略朝镜头的三分之四角度，在低矮土丘上把尾羽向前翻过头顶。完整主体目标边界约为源图 `x=850..1080, y=370..675`；主体中心约为源宽 62.8%，左侧 `x=0..614` 保持安静的蕨类沟谷和柔和雾气。该像素框只是生成目标，验收必须重新实测。
- `alt`：`湿润森林的蕨类地表上，一只完整成年雄性华丽琴鸟在右侧土丘展示，银灰色长尾向前翻过头顶，左侧留出安静林景`
- `title`：`银灰尾羽翻过森林舞台`（封面设计值；当前 `SpeciesMedia` 没有 `title` 字段，暂不进入对象）
- `caption`：`AI生成科学情景重建；成年雄鸟以紧凑正面展示姿态保留完整喙、双足和所有尾羽尖。静帧不能呈现歌声、仿声对象、舞蹈顺序、个体年龄或求偶结果。`（封面设计值；当前 `SpeciesMedia` 没有 `caption` 字段，暂不进入对象）
- 不可见／禁写边界：画面可确认成年雄鸟的饰尾和展示姿态；不能声称它正在模仿某种鸟、发出围攻群假象、面对雌鸟或成功交配。封面不出现雌鸟、第二只鸟、可见声效、乐谱、链锯、相机、车辆或表演舞台。
- 形态与情景依据：[HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)；[Smith 2004](https://doi.org/10.1071/MU01020)；[Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018)

**生成提示词**

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Superb Lyrebird landing-page cover, exact 1536 × 1024 horizontal 3:2, original project asset.
Primary request: Create a restrained documentary wildlife photograph of EXACTLY ONE complete adult male Superb Lyrebird, Menura novaehollandiae, performing a compact frontal three-quarter courtship display on a low bare-earth mound in a moist south-eastern Australian forest.
Habitat: Temperate wet sclerophyll forest merging into a fern gully, damp brown leaf litter, tree-fern trunks, mossy fallen wood, soft eucalyptus canopy, faint cool morning mist. This is a generalized habitat, not a named park or recognizable landmark.
Bird morphology: One large dark grey-brown lyrebird with a subtle dull rufous-brown wash on the folded wings, a short slender black bill, dark eye with a narrow pale blue-grey orbital ring, short broad rounded folded wings, two long powerful dark olive-brown legs and exactly two non-webbed feet on the mound. The adult male tail contains sixteen anatomically organized rectrices: one outer pair of broad strongly curved lyrates with pale undersides, dark club-like tips and restrained rufous notching; one central pair of narrow wire-like medians; and six pairs of delicate filamentary feathers with silvery-grey undersides. During display the entire tail is inverted and spread forward over the back and head as a compact translucent silver-grey canopy. Natural overlap is allowed, but there must be no peacock eyespots, solid fan, duplicated plume bundles or missing tail termination.
Pose and composition: The bird faces slightly left of camera, body low enough that the complete display forms a compact vertical silhouette. Keep the complete visual boundary—bill tip, crown, both folded wing edges, both legs, both feet, both outer lyrate tips, every visible filamentary tip and both median tips—inside approximately x=850..1080 and y=370..675 of the 1536 × 1024 source. Leave real forest background outside the entire boundary. The inspected subject center must remain beyond 60 percent of source width; target x-center about 965 pixels. Preserve the left 40 percent, x=0..614, as quiet low-contrast fern-gully atmosphere for hero copy. Keep the far right and all four image edges free of clipped feathers.
Lighting and style: Soft overcast dawn light, muted eucalyptus green, fern green, bark grey and warm leaf-litter brown, realistic feather translucency and forest depth, natural-history editorial photography, no theatrical spotlight and no glossy zoo portrait.
Species exclusions: Not Albert's Lyrebird, peacock, pheasant, turkey, bowerbird or bird-of-paradise. No bright blue or green body, no peacock fan or eyespots, no pheasant wedge tail, no literal musical-instrument lyre, no feather crown, no webbed feet.
Constraints: EXACTLY ONE BIRD TOTAL; full animal visible; no female, chick, egg, nest, predator, prey, human, building, path sign, camera, chainsaw, vehicle, musical note, visible sound wave, text, logo, signature, border, collage or watermark. Anatomically coherent, documentary-real, not CGI, painting, illustration, fantasy or stock-photo spectacle.
```

**可见验收**：一只且仅一只鸟；主体完整；成年雄鸟尾羽向前翻过头部而非在身后竖成孔雀扇；深灰褐体、暗红褐折翼、黑细喙、浅眼圈、强健双足可辨；左 40% 安静；主体实测中心不小于源宽 60%；源图边缘与每个可见羽尖之间有真实背景。

### 02 · 详情：水平拖尾的识别侧面

- 源文件：`src/assets/source/species/superb-lyrebird/02-full-tail-diagnostic-profile-source.png`
- 运行时文件：`public/images/species/superb-lyrebird/02-full-tail-diagnostic-profile.webp`
- `media.gallery[].image`：`./images/species/superb-lyrebird/02-full-tail-diagnostic-profile.webp`
- 建议 `focalPoint`：`{ x: 0.52, y: 0.58 }`
- `alt`：`湿润森林落叶地上，一只完整成年雄性华丽琴鸟向左缓步，深灰褐身体、暗红褐折翼、强健双足和水平延伸后再下垂的长尾全部可见`
- `title`：`行走时，饰尾成为水平长列`
- `caption`：`AI生成科学情景重建；侧面姿态显示深灰褐体羽、暗红褐折翼、强足和成年雄性长尾的自然携带方式。重叠羽片不用于逐枚计数，图像也不能测量体长、尾长、体重或年龄。`
- 不可见／禁写边界：侧面像素可支持“成年雄性饰尾”和一般携尾姿态；不能从像素量取 54—71 厘米、认定八岁、判定亚种或声称所有 16 枚羽都在二维图里独立可数。
- 形态与情景依据：[HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)；[Smith 2004](https://doi.org/10.1071/MU01020)

**生成提示词**

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Superb Lyrebird diagnostic gallery image, exact 1536 × 1024 horizontal 3:2.
Create an original documentary field photograph of EXACTLY ONE complete adult male Superb Lyrebird, Menura novaehollandiae, walking slowly from right to left across damp leaf litter in a temperate wet forest.
Show the complete bird in clean side profile from bill tip through both feet to every tail tip. Body plumage is dark grey-brown, with a restrained dull rufous-brown panel over the folded flight feathers; bill short, slender and black; orbital ring narrow pale blue-grey; wings short, broad, rounded and folded; legs long, powerful and dark olive-brown; exactly two non-webbed feet. The ornate adult male tail is carried as a horizontal train: it curves gently upward behind the body and then droops naturally at the far tips. Preserve the correct tail organization—outer broad lyrates with pale underside, black terminal clubs and rufous notches, delicate filamentaries and two wire-like medians—without turning it into a solid pheasant wedge or peacock fan.
Composition: Low eye-level medium-wide view, whole bird occupying the central 75 percent of the canvas, ample leaf-litter background beyond the bill, crown, back, toes and longest feather tips. Do not overlap the tail with a trunk or crop it at either edge. Forest floor has fine scratch marks, moss, fern stems and rotten wood but no visible prey.
Light and style: Soft diffuse morning light, muted natural color, sharp bird and gently receding forest, museum-grade wildlife documentation.
Exclude Albert's Lyrebird, peacock, pheasant, turkey, bowerbird and bird-of-paradise. No eyespots, bright body color, crest, webbed foot, duplicated tail, extra limb or fused anatomy.
Constraints: EXACTLY ONE BIRD; no display fan over the head, no second bird, egg, nest, chick, prey, human, road, tag, band, text, logo, signature, border, collage or watermark. Photorealistic, not illustration, CGI or fantasy.
```

### 03 · 详情：翻耙枯落层觅食

- 源文件：`src/assets/source/species/superb-lyrebird/03-leaf-litter-foraging-source.png`
- 运行时文件：`public/images/species/superb-lyrebird/03-leaf-litter-foraging.webp`
- `media.gallery[].image`：`./images/species/superb-lyrebird/03-leaf-litter-foraging.webp`
- 建议 `focalPoint`：`{ x: 0.58, y: 0.64 }`
- `alt`：`湿润蕨类沟谷的林地地表，一只朴尾型华丽琴鸟用一只强足向后耙开枯叶，露出浅色表土和小片扰动痕迹`
- `title`：`强足把枯叶和表土向后翻开`
- `caption`：`AI生成科学情景重建；画面表现一次翻耙动作和局部地表扰动。朴尾外观不能排除未成年雄鸟，静帧不能识别地下猎物，也不能测出155.7吨／公顷的年扰动量或证明生态因果。`
- 不可见／禁写边界：不写“雌鸟”作为 alt 的可见事实；不画夸张泥尘风暴、成堆蚯蚓或可见捕食链；“生态系统工程师”和年度吨位只能放在有来源的 caption／正文限定语中。
- 形态与情景依据：[HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)；[Maisey et al. 2021](https://doi.org/10.1002/eap.2219)

**生成提示词**

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Superb Lyrebird foraging gallery image, exact 1536 × 1024 horizontal 3:2.
Create an original close field-documentary photograph of EXACTLY ONE complete plain-tailed Superb Lyrebird, Menura novaehollandiae, actively scratching leaf litter on the floor of a moist fern gully in south-eastern Australia.
The bird has dark grey-brown body plumage, a subdued rufous-brown wash on short folded wings, a short slender black bill, narrow pale blue-grey orbital ring, long powerful dark olive-brown legs, exactly two non-webbed feet, and a long but simpler fully webbed brown tail without the adult male's full filamentary display. One foot is planted; the other is drawn naturally backward through damp leaves, exposing a small irregular patch of shallow brown mineral soil and mixed litter. Keep the body balanced and the toes anatomically connected. No prey is visible.
Composition: Low ground-level medium view, complete bill, body, both wings, both legs, both feet and all tail tips inside frame. Bird sits slightly right of center; disturbed litter, untouched litter, fern bases, one mossy log and moist soil remain readable around it. The disturbance is localized and ordinary, not excavation by machinery.
Lighting and style: Cloud-filtered forest daylight, realistic leaf and soil texture, modest motion only in a few displaced leaves, sharp head and planted foot, natural color.
Exclude adult male ornate overhead tail, peacock, pheasant, Albert's Lyrebird, domestic chicken, extra toes, dust explosion, exposed nest or bait.
Constraints: EXACTLY ONE BIRD; no visible worm, insect swarm, seed pile, food hand, second animal, human, fence, research marker, text, arrows, data graphic, logo, signature, border, collage or watermark. Photorealistic natural history, not CGI or illustration.
```

### 04 · 详情：土丘上的歌舞姿态

- 源文件：`src/assets/source/species/superb-lyrebird/04-song-dance-display-mound-source.png`
- 运行时文件：`public/images/species/superb-lyrebird/04-song-dance-display-mound.webp`
- `media.gallery[].image`：`./images/species/superb-lyrebird/04-song-dance-display-mound.webp`
- 建议 `focalPoint`：`{ x: 0.51, y: 0.53 }`
- `alt`：`森林内一处低矮裸土丘上，一只完整成年雄性华丽琴鸟张喙并抬起一足，银灰色尾羽向前展开成罩状，双翼仍与身体相连`
- `title`：`张喙、抬足与前翻饰尾`
- `caption`：`AI生成科学情景重建；张喙、抬足和前翻尾羽只表现一个可能的展示瞬间。静帧没有声音，不能指定四类歌声中的哪一类、模仿对象、动作顺序、雌鸟在场或求偶成功。`
- 不可见／禁写边界：不画音符、声波、拟声文字或在旁观看的雌鸟；不把单帧命名为“围攻群欺骗”，因为该功能由录音时机和回放实验支持，不可由姿态看出。
- 形态与情景依据：[HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)；[Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018)

**生成提示词**

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Superb Lyrebird courtship gallery image, exact 1536 × 1024 horizontal 3:2.
Create an original documentary photograph of EXACTLY ONE complete adult male Superb Lyrebird, Menura novaehollandiae, captured in one plausible song-and-dance instant on a low raked earthen display mound in a dim moist Australian forest.
The bird is dark grey-brown with a dull rufous-brown folded-wing wash, short slender black bill, pale blue-grey orbital ring, powerful dark legs and exactly two non-webbed feet. The bill is naturally open as if vocalizing; one foot is raised in a restrained step while the other bears weight. The adult tail is inverted forward over the back and head, showing a loose silvery-grey canopy composed of the correct broad outer lyrates, fine filamentaries and narrow central medians. Both short rounded wings remain anatomically attached; one wing may lift slightly as part of the gesture but neither is fully flying.
Composition: Medium-wide eye-level view with the complete mound and complete bird inside frame. Leave forest background around every tail and toe tip. A few mounded soil ridges and raked leaf margins identify the display platform without making a constructed human stage.
Lighting and mood: Low soft winter forest light, readable feather detail, restrained motion, observational rather than theatrical.
Exclude peacock fan, eyespots, literal lyre instrument, spotlight, audience, female, chick, extra bird, human and microphone.
Constraints: EXACTLY ONE BIRD; no musical notes, visible sound waves, captions, chainsaw, camera shutter graphic, text, logo, signature, border, collage or watermark. No duplicated plume, extra wing, extra leg or detached foot. Photorealistic wildlife photography, not CGI, painting or fantasy.
```

### 05 · 详情：穹顶巢与一枚卵

- 源文件：`src/assets/source/species/superb-lyrebird/05-domed-nest-female-return-source.png`
- 运行时文件：`public/images/species/superb-lyrebird/05-domed-nest-female-return.webp`
- `media.gallery[].image`：`./images/species/superb-lyrebird/05-domed-nest-female-return.webp`
- 建议 `focalPoint`：`{ x: 0.61, y: 0.57 }`
- `alt`：`湿润森林土坡的枝叶穹顶巢旁，一只完整朴尾型华丽琴鸟站在侧入口外，入口阴影中恰好可见一枚灰褐斑驳卵`
- `title`：`侧开口穹顶巢内的一枚卵`
- `caption`：`AI生成科学情景重建；一枚斑驳卵表现本种几乎总为单卵的一种巢况。朴尾外观本身不能证明成鸟性别，静帧也不能确认亲缘、受精、孵化状态、50天孵期或雄鸟是否参与。`
- 不可见／禁写边界：巢内只见一枚完整卵，不出现剖面、手、相机、标尺、研究标签或雏鸟；不把巢址画成固定树洞类型，不暴露真实巢坐标。
- 形态与情景依据：[Lill 1986](https://doi.org/10.1071/ZO9860351)；[HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

**生成提示词**

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Superb Lyrebird breeding gallery image, exact 1536 × 1024 horizontal 3:2.
Create an original respectful field-documentary reconstruction of EXACTLY ONE complete plain-tailed adult Superb Lyrebird standing beside one large domed nest on a damp forest bank in south-eastern Australia. Through the unobstructed side entrance, show EXACTLY ONE intact egg resting inside the dark lined cup; no chick and no second egg.
Bird: Dark grey-brown plumage, restrained rufous-brown folded wings, short slender black bill, narrow pale blue-grey orbital ring, long powerful dark olive-brown legs, exactly two non-webbed feet, and a long simpler fully webbed brown tail rather than an adult male filamentary display. The complete bird remains outside the nest and does not touch the egg.
Nest: One substantial irregular dome built from interlaced small sticks, rootlets, bark strips, dry fern fronds, leaves and moss, with a single side entrance and a soft feather-lined interior. It sits against an earth bank near tree-fern roots, plausibly sheltered but not hidden behind vegetation. The one egg is stout oval, muted purplish stone-grey to brown with dark slate-brown spots and short streaks; it is small enough to fit naturally beneath the bird, not a giant white chicken egg.
Composition: Medium-wide low view, complete bird on the right, nest and entrance on the middle-left. Keep all bill, foot and tail tips, full nest dome and entrance inside frame. The camera remains outside; no cutaway wall and no overhead invasive view.
Lighting and mood: Soft overcast forest light, entrance interior gently readable without artificial flash, damp bark, moss and leaf textures, quiet natural-history realism.
Exclude adult male ornate tail, peacock, pheasant, Albert's Lyrebird, tree-cavity-only nest, open cup nest, blue egg, pure white egg, clutch of two, visible chick or embryo.
Constraints: EXACTLY ONE BIRD, ONE NEST AND ONE EGG; no male display bird, second animal, predator, observer, hand, ruler, tag, band, camera trap, text, logo, signature, border, collage or watermark. Photorealistic, not illustration, CGI or staged zoo scene.
```

### 06 · 详情：大火后的雨林避难带

- 源文件：`src/assets/source/species/superb-lyrebird/06-postfire-rainforest-refuge-source.png`
- 运行时文件：`public/images/species/superb-lyrebird/06-postfire-rainforest-refuge.webp`
- `media.gallery[].image`：`./images/species/superb-lyrebird/06-postfire-rainforest-refuge.webp`
- 建议 `focalPoint`：`{ x: 0.64, y: 0.60 }`
- `alt`：`火烧后森林镶嵌中，一条仍绿的湿润树蕨沟谷穿过有焦黑树干的桉树林坡，一只完整华丽琴鸟在沟谷地表小幅翻动落叶`
- `title`：`湿润沟谷留在火烧镶嵌之间`
- `caption`：`AI生成科学情景重建；绿色沟谷、焦黑树干与一只鸟表现可能的烧后雨林避难情景。画面不对应真实调查点，不能判定火灾年份、强度、亚种、再定殖、数量趋势或保护措施成效。`
- 不可见／禁写边界：不画正在逼近的火墙、受伤或死亡动物、英雄救援、研究者或文字数据；不把一只鸟出现当作种群恢复证据，也不把绿色沟谷写成绝对不会燃烧。
- 形态与情景依据：[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)；[Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)；[HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)

**生成提示词**

```text
Use case: photorealistic-natural.
Asset type: Fauna Atlas Superb Lyrebird fire-refuge gallery image, exact 1536 × 1024 horizontal 3:2.
Create an original wide documentary landscape of a south-eastern Australian forest mosaic roughly one growing season after wildfire. A narrow moist rainforest-and-tree-fern gully remains green through the lower center and right, while adjacent upper eucalypt slopes show patchy blackened trunks, brown dead foliage, sparse epicormic regrowth and exposed burned litter. There is no active flame or smoke plume.
Include EXACTLY ONE complete Superb Lyrebird, Menura novaehollandiae, small but clearly readable on the floor of the green gully, making one modest leaf-scratching movement. Use a plain-tailed individual so the habitat remains the primary subject: dark grey-brown body, dull rufous-brown folded wings, short black bill, pale narrow orbital ring, strong dark legs, two non-webbed feet and a complete simple brown tail. Do not claim sex or subspecies through appearance.
Composition: Habitat occupies at least 75 percent of visual attention. The moist gully forms a connected refuge through the frame; burned and less-burned patches remain spatially continuous, not a split-screen comparison. Bird lies near x=0.64, y=0.66 with its full boundary and ample background margin. No recognizable park, road, building or survey plot.
Lighting and mood: Cloudy post-rain daylight, credible char, ash, fern and regenerating eucalypt textures, sober ecological documentary style, neither apocalypse nor lush fantasy.
Exclude active inferno, trapped wildlife, multiple birds, nest, egg, predator, carcass, firefighter, scientist, vehicle, helicopter, fence and signage.
Constraints: EXACTLY ONE BIRD; no map, percentage, arrow, label, text, logo, signature, border, collage or watermark. No duplicated limbs or tail. Photorealistic, not CGI, illustration, before-and-after graphic or environmental campaign poster.
```

## 封面完整主体硬门槛与验收计划

封面在生成前只拥有目标边界，不能先宣称合规。`focalPoint` 只控制 `object-position`，不代表鸟实际占据的像素。以下流程执行 [species cover rule](../../src/assets/source/README.md#species-cover-rule)。

### 1. 生成目标与预检几何

- 源图固定 `1536 × 1024`，目标完整主体框为 `B_target = [850, 370, 1080, 675]`。框内必须包含喙尖、头顶、两侧折翼外缘、两条腿、两只完整足、外侧琴形羽、中央线状羽和所有可见丝状羽尖。
- 目标中心 `(965, 522.5)`；横坐标占源宽 `62.8%`，通过“中心至少为源宽 60%”的构图前提。左侧 40% 是 `x=0..614`，目标框与安静区之间保留约 236 像素背景。
- 建议 `focalPoint = { x: 0.66, y: 0.515 }`。按 CSS `object-fit: cover` 与百分比 `object-position` 的标准计算，静止帧预期可见源图区如下；这只是生成前数学预检，实际 DOM 尺寸和动画测试才是验收结果。

| 视口 | 静止帧预期可见源图区 | 对目标框最窄的基础余量 |
| --- | --- | --- |
| `320×760` | `x≈729..1160, y=0..1024` | 右侧约 80 源像素，换算约 59 CSS px |
| `390×760` | `x≈667..1192, y=0..1024` | 右侧约 112 源像素，换算约 83 CSS px |
| `1366×768` | `x=0..1536, y≈83..946` | 上方约 287 源像素 |
| `1920×900` | `x=0..1536, y≈157..877` | 下方约 202 源像素 |
| `2560×900` | `x=0..1536, y≈249..789` | 下方约 114 源像素 |
| `3840×900` | `x=0..1536, y≈342..702` | 下方约 27 源像素，换算约 68 CSS px |

目标框刻意做成窄而低的正面展示姿态：竖屏主要受水平裁切限制，超宽屏主要受垂直裁切限制。若生成结果的尾罩扩大到目标框外，预检立即失效，必须用实测框重新计算。

### 2. 原图与运行时实测

1. 在原始分辨率查看 `01-male-display-forest-cover-source.png`，沿最外侧可见像素人工记录 `B_actual = [left, top, right, bottom]`；不得只框头部或身体，尾羽最细尖端和脚趾也属于主体。
2. 检查 `B_actual` 外四侧都有真实森林背景，鸟的实测中心 `((left+right)/2)/1536 >= 0.60`，左 40% 没有第二只鸟、醒目树干、亮斑或尾羽侵入文案区。
3. 转换为运行时 WebP 后在原分辨率再次检查。压缩产生的断羽、糊脚、边缘振铃或把细丝羽融入背景，均视为失败；PNG 合格不能替代 WebP 合格。
4. 静态检查源 PNG 和运行时 WebP 都是 `1536 × 1024`、不带 alpha、方向正确、basename 一一对应；记录 WebP SHA-256。

### 3. 六视口与全部动画端点

对运行时 WebP 和已提交的 focal point，在 `320×760`、`390×760`、`1366×768`、`1920×900`、`2560×900`、`3840×900` 逐一计算并检查：

- settled 静止帧；
- `.hero__image--initial` 的 `scale(1.04)` 起点与 `scale(1)` 终点；
- forward enter 的 `translateX(5%) scale(1.025)` 起点与静止终点；
- forward leave 的静止起点与 `translateX(-4%) scale(1.015)` 终点；
- backward enter 的 `translateX(-5%) scale(1.025)` 起点与静止终点；
- backward leave 的静止起点与 `translateX(4%) scale(1.015)` 终点。

每个组合都要把 `B_actual` 映射到渲染坐标，并同时满足：完整主体距 hero 四边至少 24 CSS px；不进入左侧标题、简介和 CTA 的实际边界；不被各 breakpoint 的右侧 carousel panel 覆盖；不靠视觉淡出、遮罩或低透明度掩盖裁切。动画中透明度接近零的端点仍要检查几何，因为 cover rule 明确包含这些端点。[hero animation definitions](../../src/styles.css)

### 4. 失败处理和记录

- 任一组合不足 24 CSS px，先重构图或重生成；不得只移动 focal point 后忽略另一端视口。
- 若一张 3:2 图无法同时保住完整长尾和页面安全区，先为 hero 增加 breakpoint-specific art direction 及其类型、加载与回归测试，再接收分支图。没有代码支持前，不在资料里假设移动端专图已经存在。
- 在 `src/assets/source/species/superb-lyrebird/README.md` 记录：最终提示词、所有生成／编辑轮次、源图尺寸、实际 `B_actual`、主体中心比例、committed focal point、WebP SHA-256、PNG/WebP 原分辨率结果、六视口每个动画端点的余量、文案与 carousel panel 避让结果，以及仍无法由像素证明的限制。
- 在 `tests/hero-carousel.test.mjs` 添加华丽琴鸟完整主体案例，覆盖 source boundary、focal point、六视口、静止帧和所有正反向动画端点；运行 `npm run test:carousel`。
- 遵守仓库验证规则：使用静态几何、文件检查、测试和 `view_image` 原图审阅，不启动 GUI 或无头浏览器。

## 可直接实现的来源数组

所有访问日期固定为用户要求的 `2026-09-03`，不能因实际编码日在次日而改成 `2026-09-04`。来源只包括官方数据库、官方自然史记录或同行评审原始研究。

```ts
const SUPERB_LYREBIRD_SOURCE_DATE = '2026-09-03' as const;
const SUPERB_LYREBIRD_CONTENT_DATE = '2026-09-03' as const;

const SUPERB_LYREBIRD_SOURCES = [
  {
    title:
      'Australian Faunal Directory via Atlas of Living Australia — Menura (Menura) novaehollandiae',
    url: 'https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Lyrebirds (Menuridae)',
    url: 'https://www.worldbirdnames.org/new/bow/lyrebirds/',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Multilingual Names',
    url: 'https://worldbirdnames.org/Multiling%20IOC%2015.2.xlsx',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Menura novaehollandiae (assessed 2018)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Superb Lyrebird species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'HANZAB — Superb Lyrebird official species record',
    url: 'https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640',
    kind: 'general',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'HANZAB — Superb Lyrebird species page',
    url: 'https://hanzab.birdlife.org.au/species/superb-lyrebird/',
    kind: 'general',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'HANZAB — Expanded taxonomy, Part 3: Menuridae',
    url: 'https://hanzab.birdlife.org.au/expanded-hanzab-taxonomy-part-3/',
    kind: 'taxonomy',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Superb Lyrebird',
    url: 'https://australian.museum/learn/animals/birds/superb-lyrebird/',
    kind: 'general',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Smith 2004 — Structural changes in the lyrate feathers in the development of the tail plumage',
    url: 'https://doi.org/10.1071/MU01020',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Zann & Dunstan 2008 — Mimetic song in Superb Lyrebirds: populations and age classes',
    url: 'https://doi.org/10.1016/j.anbehav.2008.05.021',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell & Magrath 2012 — Fooling the experts: accurate vocal mimicry in the Superb Lyrebird',
    url: 'https://doi.org/10.1016/j.anbehav.2012.03.009',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell et al. 2013 — Dance choreography is coordinated with song repertoire',
    url: 'https://doi.org/10.1016/j.cub.2013.05.018',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell & Welbergen 2016 — Elaborate mimetic vocal displays by female Superb Lyrebirds',
    url: 'https://doi.org/10.3389/fevo.2016.00034',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Dalziell et al. 2021 — Male lyrebirds create a complex acoustic illusion of a mobbing flock',
    url: 'https://doi.org/10.1016/j.cub.2021.02.003',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Robinson & Curtis 1996 — The vocal displays of the lyrebirds',
    url: 'https://doi.org/10.1071/MU9960258',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Lill 1986 — Time-energy budgets during reproduction and the evolution of single parenting',
    url: 'https://doi.org/10.1071/ZO9860351',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title: 'Maisey et al. 2019 — Habitat selection by the Superb Lyrebird',
    url: 'https://doi.org/10.1111/aec.12684',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Maisey et al. 2021 — Foraging by an avian ecosystem engineer modifies litter and soil',
    url: 'https://doi.org/10.1002/eap.2219',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      "Maisey et al. 2025 — Superb Lyrebird foraging activity 'farms' invertebrate prey",
    url: 'https://doi.org/10.1111/1365-2656.70009',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Nugent et al. 2014 — Interactions between the Superb Lyrebird and fire',
    url: 'https://doi.org/10.1071/WR14052',
    kind: 'ecology',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      'Hughes et al. 2023 — Preferred nesting habitat and the Black Summer megafires',
    url: 'https://doi.org/10.1093/ornithapp/duad027',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
  {
    title:
      "Maisey et al. 2023 — Effects of Australia's Black Summer megafires on the Superb Lyrebird",
    url: 'https://doi.org/10.1016/j.biocon.2023.110356',
    kind: 'conservation',
    accessedAt: SUPERB_LYREBIRD_SOURCE_DATE,
  },
] satisfies readonly SpeciesSource[];
```

## 完整 `Species` 对象草案

该草案与当前 `src/types/species.ts` 对齐。实现时可直接移入物种数组；图片只有在生成、压缩、原图审阅和封面硬门槛通过后才能提交对应路径。

```ts
{
  id: 'species-menura-novaehollandiae',
  slug: 'superb-lyrebird',
  names: {
    zh: '华丽琴鸟',
    en: 'Superb Lyrebird',
  },
  scientificName: 'Menura novaehollandiae',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Passeriformes', '雀形目'),
    taxon('Menuridae', '琴鸟科'),
    taxon('Menura', '琴鸟属'),
  ),
  conservation: conservation('LC', 'decreasing', 2018),
  distribution: {
    realms: ['terrestrial'],
    continents: ['大洋洲'],
    regions: [
      '昆士兰州东南部',
      '新南威尔士州东部与澳大利亚首都领地',
      '维多利亚州东部和东南部',
      '塔斯马尼亚州南部（引入）',
    ],
    countries: ['澳大利亚'],
    endemicTo: ['澳大利亚'],
    range:
      '原生于澳大利亚东部和东南部大陆，从昆士兰州东南部经新南威尔士州、澳大利亚首都领地至维多利亚州东部和东南部；塔斯马尼亚州南部种群由20世纪引入后建立，不属于原生范围。',
    center: { lat: -35.7, lng: 149.1 },
  },
  habitats: [
    {
      name: '温带雨林与湿润硬叶林',
      realm: 'terrestrial',
      description:
        '主要生境；湿润沟谷、溪流附近、树蕨和藤本较多的森林提供巢址、无脊椎动物食物和夜栖树。',
      isPrimary: true,
    },
    {
      name: '亚热带湿润低地森林',
      realm: 'terrestrial',
      description:
        '北段种群使用亚热带雨林和湿润林；低地是IUCN栖息地分类，不表示全种只在低海拔出现。',
      isPrimary: true,
    },
    {
      name: '干燥硬叶林与林地',
      realm: 'terrestrial',
      description:
        '在花岗岩带、湿润沟谷及枯落物保持合适水分和开阔地表的地点使用，质量随微环境变化。',
    },
    {
      name: '互补的巢址与觅食微生境',
      realm: 'terrestrial',
      description:
        '巢址偏向近溪流、深枯落物和复杂中高层植被；觅食地偏向低层植被稀疏、可翻耙的开放地表。',
    },
  ],
  measurements: {
    length: {
      min: 76,
      max: 103,
      unit: 'cm',
      note: '两性成体展示包络：雌鸟76—80厘米，雄鸟约103厘米，均含尾；不是同一性别的统计范围。',
    },
    weight: {
      min: 880,
      max: 1065,
      unit: 'g',
      note: 'HANZAB代表值：雌鸟880克、雄鸟1065克；两端不是物种成体极值。',
    },
    wingspan: {
      min: 68,
      max: 76,
      typical: 73,
      unit: 'cm',
      note: 'HANZAB种级汇总；原记录没有在该字段公开样本量或两性拆分。',
    },
  },
  diet: {
    types: ['insectivore', 'omnivore'],
    foods: [
      '蚯蚓',
      '端足类与等足类',
      '蜘蛛',
      '蜈蚣与多足类',
      '甲虫及其他昆虫与幼虫',
      '偶尔取食的种子',
    ],
    description:
      '以森林地表、枯落层和浅土中的无脊椎动物为主，偶食种子；用强健双足翻耙叶层、腐木和表土寻找猎物。',
  },
  activity: [
    '昼行、以地面活动和觅食为主',
    '通常独居，繁殖后可形成小型松散觅食群',
    '夜间上树栖息，记录可达地面上方约45米',
    '基本留居，只作局地移动和幼鸟扩散',
    '飞行较少，受扰时多奔跑、跳跃或短距离滑翔',
    '繁殖期雄鸟维护土丘展示场并在领地内歌舞',
  ],
  tags: [
    '澳大利亚特有',
    '雀形目',
    '琴鸟科',
    '森林地栖鸟',
    '仿声',
    '多模态求偶',
    '雄性饰羽',
    '雌性单独育幼',
    '生态系统工程师',
    '塔斯马尼亚引入种群',
    'IUCN无危',
    '种群下降',
    '山火敏感',
  ],
  summary:
    '澳大利亚东南森林地面的华丽琴鸟用强足翻开枯落物；雄鸟把16枚尾羽、习得的仿声和编排舞步合成求偶展示，雌鸟则独自筑巢并养大通常唯一的雏鸟。',
  description:
    '华丽琴鸟是澳大利亚特有的大型地栖鸣禽，原生于昆士兰州东南部至维多利亚州东部的森林，塔斯马尼亚南部种群来自20世纪引入。它白天在湿润森林的枯落层和表土中寻找无脊椎动物，夜间上树栖息；一年可在研究地平均翻动每公顷155.7吨枯落物和土壤。成年雄鸟把由16枚尾羽组成的长尾向前翻过头部，并让四类歌声与特定舞步配合；它还能高度准确地复制其他鸟声，在特定求偶阶段制造多物种围攻群的声学假象。雌鸟同样会仿声，并独自筑巢、孵化通常一枚卵和育幼。IUCN正式口径仍是2018年无危、趋势下降，成熟个体总数未量化；栖息地退化、引入捕食者和更严重的火灾需要持续监测。',
  storySections: [
    {
      key: 'mainland-and-tasmania',
      label: '分布边界',
      title: '塔斯马尼亚的琴声来自一次引入',
      body:
        '华丽琴鸟原生于澳大利亚东部和东南部大陆。1934—1949年，人们从维多利亚向塔斯马尼亚输入22只、释放20只，南部岛屿种群由此建立。今天国家字段只有澳大利亚，地图却必须区分大陆原生范围和塔斯马尼亚引入范围；“澳大利亚特有”不等于岛上也是天然分布。',
    },
    {
      key: 'forest-floor-engineer',
      label: '生态工程',
      title: '强足翻开的不只是下一口食物',
      body:
        '华丽琴鸟用双足把枯叶、表土和腐木向后耙开，寻找蚯蚓、甲壳类、蛛形类、多足类和昆虫。维多利亚中央高地实验估计，研究地一年平均每公顷被翻动155.7吨枯落物和土壤；排除琴鸟两年后，表土更紧实、枯落层更深。这个数字描述种群在特定森林里的年扰动，不是一只鸟独自搬运的重量。',
    },
    {
      key: 'tail-through-moults',
      label: '雄性饰羽',
      title: '十六枚尾羽在连续换羽中成形',
      body:
        '成年雄鸟的尾由一对宽阔琴形羽、一对中央线状羽和六对丝状羽组成。展示时，尾羽不是像孔雀那样竖在身后，而是向前翻过背部和头部，露出银灰色腹面。完整成尾通常要6—8年；连续换羽研究把成熟过程概括为约八年，所以初见特殊尾羽的年轻雄鸟仍不等于成年展示者。',
    },
    {
      key: 'learned-song-and-dance',
      label: '多模态求偶',
      title: '它学会声音，也把声音编进动作',
      body:
        '雄鸟对其他鸟声的复制足以让灰鸫作出接近真实同类歌声的反应，但它常删短重复段。录像研究又发现，四类舞蹈歌声各自配合特定的腿步、尾位和翼动。在雌鸟试图离场或交配期间，雄鸟还会拼出多种警戒叫声和翼拍声，形成一群小鸟围攻捕食者的听觉假象；“感官陷阱”是有实验支持的功能解释，不是对雄鸟意图的读心。',
    },
    {
      key: 'single-egg-solo-mother',
      label: '繁殖投入',
      title: '雄鸟的舞台之外，是漫长的单亲育幼',
      body:
        '雌鸟独自选择巢址，用枝、根、树皮、蕨叶和苔藓筑成有侧入口的穹顶巢，几乎总是产一枚卵。维多利亚研究的7枚卵平均孵化约50天；雏鸟离巢后仍可依赖母鸟8—9个月。雄鸟不参与筑巢、孵卵或喂幼，雌鸟的仿声还会在护巢情境中变得更频繁、更偏向警戒内容。',
    },
    {
      key: 'fire-refugia',
      label: '火灾避难所',
      title: '一小片湿润雨林可能决定烧后重返',
      body:
        'IUCN仍把华丽琴鸟列为无危，但2019—2020年大火估计烧过全种约43%的分布区。大蓝山约80%的高适宜度巢区被烧；南部亚种调查中，高强度火烧地几乎没有觅食痕迹，雨林却保留例外。保护不能只统计烧过多少面积，还要保住溪谷、陡坡和雨林这些巢址与重返源地。',
    },
  ],
  keyFacts: [
    '当前接受名为Menura (Menura) novaehollandiae Latham, 1801；产品使用二名法Menura novaehollandiae。',
    'IOC v15.2的英文主名是Superb Lyrebird，官方简体中文名是华丽琴鸟。',
    '本种只分布于澳大利亚；东部和东南部大陆是原生范围，塔斯马尼亚南部是人为引入范围。',
    '主要生境是温带森林和亚热带湿润低地森林，也使用部分有合适水分和地表结构的干燥森林。',
    '雄鸟全长约103厘米、尾长54—71厘米；雌鸟全长约78厘米，记录范围76—80厘米。',
    '翼展典型值约73厘米、汇总范围68—76厘米；HANZAB没有公开该字段的样本量或两性拆分。',
    'HANZAB代表性体重为雄鸟1065克、雌鸟880克，这两个数不是全种成体极值。',
    '成年雄鸟尾部有16枚尾羽：一对外侧琴形羽、一对中央线状羽和六对丝状羽。',
    '完整雄性成尾通常在6—8年形成；个体间换羽进度不同，不能仅凭照片精确估龄。',
    '它以地表无脊椎动物为主，偶食种子，用强足翻耙枯落层、腐木和表土觅食。',
    '维多利亚中央高地实验估计研究地一年平均每公顷被翻动155.7吨枯落物和土壤。',
    '本种昼间主要在地面活动、夜间上树栖息，基本留居且飞行较少。',
    '回放和声学分析显示雄鸟的鸟声复制高度准确，但它常删减模型歌声的重复单元。',
    '录像研究识别出四类舞蹈歌声，每类配合特定的腿、尾和翼动作。',
    '雄鸟可在特定求偶阶段模拟多物种围攻群；感官欺骗是功能推断，不是主观意图测量。',
    '雌鸟也会复杂仿声，觅食和护巢时使用的声音结构不同。',
    '雌鸟独自筑造穹顶侧开口巢、孵卵和育幼，几乎总产一枚卵；7枚卵的孵化期均值为50±2天。',
    'IUCN当前正式值为LC、2018年评估、趋势下降，成熟个体总数未量化，criteria应留空。',
    '2019—2020年大火估计烧过全种约43%的分布区；不同地区和林型的影响并不均匀。',
  ],
  threats: [
    '原生森林丧失、退化与破碎化，减少湿润巢址和可翻耙的觅食地表；全种年度损失率尚未量化。',
    '更严重、范围更大的野火及气候变化驱动的生境转移，尤其威胁稀少的雨林巢址和烧后避难所。',
    '猫、赤狐和犬等引入哺乳动物捕食成鸟或巢内幼鸟；不同捕食者的全范围贡献尚未排序。',
    '稠密外来杂草和封闭地表阻碍翻耙觅食，部分道路还造成车辆撞击；这些压力主要有地点性记录。',
  ],
  conservationActions: [
    '保护并恢复温带和亚热带雨林、湿润硬叶林、溪流沟谷与陡坡巢址，优先维持火灾避难所。',
    '在相连森林镶嵌中同时保留复杂中高层巢址植被和低层稀疏、枯落层可翻耙的觅食地表。',
    '按火灾严重度和林型确定恢复优先级，防止剩余雨林遭受高强度重复火烧，并跟踪烧后再占用。',
    '在有证据的地点控制猫、赤狐、犬和入侵杂草，用控制前后监测检验成鸟、巢与觅食响应。',
    '建立跨亚种、跨林型的标准化监测，分别记录占用、繁殖、幼鸟补充、火灾严重度和觅食痕迹。',
  ],
  metrics: {
    adultLengthCm: [76, 103],
    wingspanCm: [68, 76],
  },
  featuredStats: [
    {
      key: 'male-total-length',
      label: '雄鸟全长',
      value: '约103',
      unit: '厘米',
      note: '含54—71厘米尾；HANZAB代表值，不是雄鸟范围上限',
    },
    {
      key: 'full-adult-tail',
      label: '完整雄性成尾',
      value: '6—8',
      unit: '年',
      note: '外观形成范围；连续年换羽研究概括为约八年，不能据此从照片精确估龄',
    },
    {
      key: 'annual-soil-turnover',
      label: '年翻动枯落物与土壤',
      value: '155.7',
      unit: '吨/公顷',
      note: '维多利亚中央高地研究地的12个月平均，不是每只鸟或全分布区常数',
    },
    {
      key: 'incubation-period',
      label: '孵化期均值',
      value: '50 ± 2',
      unit: '天',
      note: '维多利亚研究的7枚卵估计；HANZAB汇总范围42—57天',
    },
  ],
  media: {
    image:
      './images/species/superb-lyrebird/01-male-display-forest-cover.webp',
    alt: '湿润森林的蕨类地表上，一只完整成年雄性华丽琴鸟在右侧土丘展示，银灰色长尾向前翻过头顶，左侧留出安静林景',
    focalPoint: { x: 0.66, y: 0.515 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image:
          './images/species/superb-lyrebird/02-full-tail-diagnostic-profile.webp',
        alt: '湿润森林落叶地上，一只完整成年雄性华丽琴鸟向左缓步，深灰褐身体、暗红褐折翼、强健双足和水平延伸后再下垂的长尾全部可见',
        title: '行走时，饰尾成为水平长列',
        caption:
          'AI生成科学情景重建；侧面姿态显示深灰褐体羽、暗红褐折翼、强足和成年雄性长尾的自然携带方式。重叠羽片不用于逐枚计数，图像也不能测量体长、尾长、体重或年龄。',
        focalPoint: { x: 0.52, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/superb-lyrebird/03-leaf-litter-foraging.webp',
        alt: '湿润蕨类沟谷的林地地表，一只朴尾型华丽琴鸟用一只强足向后耙开枯叶，露出浅色表土和小片扰动痕迹',
        title: '强足把枯叶和表土向后翻开',
        caption:
          'AI生成科学情景重建；画面表现一次翻耙动作和局部地表扰动。朴尾外观不能排除未成年雄鸟，静帧不能识别地下猎物，也不能测出155.7吨／公顷的年扰动量或证明生态因果。',
        focalPoint: { x: 0.58, y: 0.64 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/superb-lyrebird/04-song-dance-display-mound.webp',
        alt: '森林内一处低矮裸土丘上，一只完整成年雄性华丽琴鸟张喙并抬起一足，银灰色尾羽向前展开成罩状，双翼仍与身体相连',
        title: '张喙、抬足与前翻饰尾',
        caption:
          'AI生成科学情景重建；张喙、抬足和前翻尾羽只表现一个可能的展示瞬间。静帧没有声音，不能指定四类歌声中的哪一类、模仿对象、动作顺序、雌鸟在场或求偶成功。',
        focalPoint: { x: 0.51, y: 0.53 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/superb-lyrebird/05-domed-nest-female-return.webp',
        alt: '湿润森林土坡的枝叶穹顶巢旁，一只完整朴尾型华丽琴鸟站在侧入口外，入口阴影中恰好可见一枚灰褐斑驳卵',
        title: '侧开口穹顶巢内的一枚卵',
        caption:
          'AI生成科学情景重建；一枚斑驳卵表现本种几乎总为单卵的一种巢况。朴尾外观本身不能证明成鸟性别，静帧也不能确认亲缘、受精、孵化状态、50天孵期或雄鸟是否参与。',
        focalPoint: { x: 0.61, y: 0.57 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/superb-lyrebird/06-postfire-rainforest-refuge.webp',
        alt: '火烧后森林镶嵌中，一条仍绿的湿润树蕨沟谷穿过有焦黑树干的桉树林坡，一只完整华丽琴鸟在沟谷地表小幅翻动落叶',
        title: '湿润沟谷留在火烧镶嵌之间',
        caption:
          'AI生成科学情景重建；绿色沟谷、焦黑树干与一只鸟表现可能的烧后雨林避难情景。画面不对应真实调查点，不能判定火灾年份、强度、亚种、再定殖、数量趋势或保护措施成效。',
        focalPoint: { x: 0.64, y: 0.6 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: SUPERB_LYREBIRD_SOURCES,
  featured: true,
  publishedAt: SUPERB_LYREBIRD_CONTENT_DATE,
  updatedAt: SUPERB_LYREBIRD_CONTENT_DATE,
},
```

## 逐字段证据矩阵

| 实现内容 | 首要来源 | 二次核验或边界来源 |
| --- | --- | --- |
| 接受名、命名人、三亚种、六级分类 | [Australian Faunal Directory](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/944960f7-4a3f-4de8-a1fd-0f037af45a23) | [IOC v15.2](https://www.worldbirdnames.org/new/bow/lyrebirds/)；[Australian Museum](https://australian.museum/learn/animals/birds/superb-lyrebird/) |
| 中文名、英文名 | [IOC Multilingual Names v15.2](https://worldbirdnames.org/Multiling%20IOC%2015.2.xlsx) | [IOC v15.2](https://www.worldbirdnames.org/new/bow/lyrebirds/) |
| IUCN 等级、评估年 | [IUCN 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en) | [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) |
| 趋势、成熟个体缺口、正式栖息地类别、当前威胁表 | [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae) | IUCN 2018；HANZAB |
| 大陆原生与塔斯马尼亚引入分布 | [HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) | [Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021) |
| 巢址与觅食微生境 | [Maisey et al. 2019](https://doi.org/10.1111/aec.12684) | [Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027)；HANZAB |
| 成体体长、体重、翼展 | [HANZAB official record](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) | [Australian Museum](https://australian.museum/learn/animals/birds/superb-lyrebird/) 的四舍五入全长 |
| 雄性尾羽结构与形成时间 | [Smith 2004](https://doi.org/10.1071/MU01020) | HANZAB 官方形态综述 |
| 食性、昼间地栖、夜间树栖、留居 | [HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640) | Australian Museum |
| 每公顷年扰动与土壤、枯落层效应 | [Maisey et al. 2021](https://doi.org/10.1002/eap.2219) | [Maisey et al. 2025](https://doi.org/10.1111/1365-2656.70009) 的猎物反馈实验 |
| 雄鸟仿声准确度 | [Dalziell & Magrath 2012](https://doi.org/10.1016/j.anbehav.2012.03.009) | [Zann & Dunstan 2008](https://doi.org/10.1016/j.anbehav.2008.05.021) 的种群与年龄比较 |
| 歌舞配对与顺序 | [Dalziell et al. 2013](https://doi.org/10.1016/j.cub.2013.05.018) | 12 只野生雄鸟的录像样本边界 |
| 围攻群声学假象 | [Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003) | 录音时机、声学分析与回放共同支持，主观意图未测量 |
| 雌鸟仿声 | [Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034) | 觅食与护巢情境，不外推为雄性求偶功能 |
| 单卵、单亲育幼、孵化期 | [Lill 1986](https://doi.org/10.1071/ZO9860351) | HANZAB 的 42—57 天汇总与巢材描述 |
| 局地燃料效应 | [Nugent et al. 2014](https://doi.org/10.1071/WR14052) | 九个月排除试验加火行为模型，不能写成阻止野火 |
| 大蓝山巢区受火 | [Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027) | 指名亚种和大蓝山空间边界 |
| 南部亚种烧后使用与雨林避难所 | [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356) | 226 点、火后一年、`M. n. victoriae`，不能代表全种同步调查 |
| 图片外形、姿态、巢和生境约束 | HANZAB；Smith 2004；Maisey 2019；Hughes 2023 | 每张 caption 另列不可见事实，生成像素不作为生态证据 |

## 不确定性与禁写清单

- **IUCN 年份较旧**：截至本稿指定访问日，正式值仍为 2018 年 LC、趋势下降；页面正在重新评估。只能注明维护风险，不能自行更新等级或准则。[IUCN 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22703605A132071218.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/superb-lyrebird-menura-novaehollandiae)
- **全球数量未知**：不填 `estimatedMatureIndividuals`，不用局地密度、eBird 点位、EOO 或塔斯马尼亚扩张速度估算全种数量。
- **测量语义有限**：雄 1,065 克、雌 880 克是 HANZAB 代表值，不是成年极值；翼展 68—76 厘米没有公开样本量或性别拆分。保留 `measurements` 注释，`adultMassKg` 留空。
- **寿命与海拔不进 metrics**：长期环志重见和东吉普斯兰约 1,240 米记录是个别或区域资料，不能生成全种寿命范围或海拔包络。[HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
- **塔斯马尼亚不是原生范围**：可以写“澳大利亚特有”，必须同时写“塔斯马尼亚引入”；不把岛上扩散解释为大陆数量增加。
- **火灾比例不能互换**：43% 是全种分布区初步估计，55% 指指名亚种；大蓝山 74% 和 80% 指当地不同巢栖息地集合；41.5% 和约 210 万公顷指南部亚种建模生境。不得相加、平均或当成死亡率。[Hughes et al. 2023](https://doi.org/10.1093/ornithapp/duad027) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)
- **翻土吨位不是单鸟能力**：155.7 吨／公顷／年是研究地的空间年平均，包含群体反复活动；不能写成“一只琴鸟每年搬 155 吨”。[Maisey et al. 2021](https://doi.org/10.1002/eap.2219)
- **“养殖猎物”是生态反馈**：后续实验的 farming 指扰动改善猎物资源后形成正反馈，不表示鸟有计划、有所有权或实施农业。[Maisey et al. 2025](https://doi.org/10.1111/1365-2656.70009)
- **不用机械声清单做主叙事**：系统性野外研究支持对鸟鸣、警戒叫声和翼拍等自然声的复杂复制。著名链锯、相机快门、警报器案例常来自圈养个体、剪辑或缺乏系统验证；不能写“野生琴鸟经常完美模仿任何人工声”。[Robinson & Curtis 1996](https://doi.org/10.1071/MU9960258) [Dalziell et al. 2021](https://doi.org/10.1016/j.cub.2021.02.003)
- **“欺骗”是功能解释**：围攻群仿声的声学结构、时机和回放效应有实验支持；研究没有直接测量雄鸟意识、道德或主观目的。
- **雌鸟也会仿声**：不能把仿声全部解释为雄性性选择结果，也不能从一只朴尾鸟的照片断言它是雌鸟；年轻雄鸟可有相似尾形。[Dalziell & Welbergen 2016](https://doi.org/10.3389/fevo.2016.00034) [HANZAB](https://hanzab.birdlife.org.au/wp-json/wp/v2/hanzab_species/3640)
- **火与琴鸟不是简单互惠**：局地翻耙减少枯落燃料，不代表琴鸟阻止大火；高强度火又会显著减少觅食使用。保留林型、严重度、时间和模型边界。[Nugent et al. 2014](https://doi.org/10.1071/WR14052) [Maisey et al. 2023](https://doi.org/10.1016/j.biocon.2023.110356)
- **建议行动不等于已实施行动**：本稿的 `conservationActions` 是从原始研究和官方缺口推导的管理方向。没有证据表明全范围已有统一恢复计划、系统监测、捕食者控制或入侵植物控制。
- **生成图不是观察记录**：图片不能充当尾羽数量、声音、窝卵数、火灾严重度、个体存在或保护成效的新证据；任何视觉异常都应重生成，而不是修改 caption 去合理化错误像素。

## 实现与验证交接

1. 先把 `SUPERB_LYREBIRD_SOURCE_DATE`、`SUPERB_LYREBIRD_CONTENT_DATE`、来源数组和完整对象加入 `src/data/species.ts`，保持来源 URL 唯一、顺序稳定、每项 `accessedAt: '2026-09-03'`。
2. 用六条最终提示词独立生成源 PNG，逐张在原始分辨率检查数量、完整身体、物种形态、巢与卵数、尾羽组织、画面文字和 caption 一致性；失败图重生成，不做解释性放行。
3. 通过压缩和 WebP 转换脚本生成六组一一对应文件；创建 `src/assets/source/species/superb-lyrebird/README.md`，把提示词、限制、尺寸、哈希和视觉审阅结果写入。
4. 对封面执行前述完整主体门槛，向 `tests/hero-carousel.test.mjs` 增加实测边界和六视口全部动画端点；一张 3:2 图无法通过时，先实现 breakpoint art direction 与回归覆盖。
5. 更新源资产总索引、TODO、分类数量或其他实现文件时只改与新物种直接相关的行，不覆盖工作区中已有改动。
6. 验证至少包括 `npm run test:carousel`、`npm run test:taxonomy`、`npm run typecheck`、`npm run build`、`npm test`、六组 PNG/WebP 静态尺寸与格式检查、来源日期和 URL 唯一性断言、`git diff --check`。不启动 GUI 或无头浏览器。
