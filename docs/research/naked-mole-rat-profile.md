# 裸鼹鼠完整物种档案研究

- 分类单元：`Heterocephalus glaber` Rüppell, 1842
- 主中文名：裸鼹鼠
- 英文主名：Common Naked Mole-rat
- 推荐 slug：`naked-mole-rat`
- 研究日期：2026-09-02
- 用途：为 `src/data/species.ts` 的完整物种档案、四项展示指标、六个故事章节和六张原创科学情景图提供可追溯底稿
- 证据口径：接受名和高阶分类优先采用 Mammal Diversity Database；全球保护状态采用 IUCN 当前仍有效的评估；国际贸易状态采用 CITES 2026 年现行附录；形态、生态、社会行为和生理数字优先采用同行评审原始研究或 American Society of Mammalogists 的权威物种综述。旧资料将 `H. phillipsi` 合并在广义裸鼹鼠内，本稿逐项标出 2025 年拆种前后的适用边界

## 编辑结论

Mammal Diversity Database（MDD）当前接受 `Heterocephalus glaber` Rüppell, 1842，英文主名为 **Common Naked Mole-rat**。MDD 将它置于啮齿目、裸鼹鼠科 `Heterocephalidae`、裸鼹鼠属 `Heterocephalus`。2002 年物种综述和不少基因数据库仍沿用非洲鼹鼠科 `Bathyergidae`，产品分类不得照抄旧科名。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001280/) [Patterson and Upham 2014](https://doi.org/10.1111/zoj.12201)

2025 年在线发表、编入 2026 年卷期的分类研究分析 38 条线粒体 CYTB 序列和 37 份 ddRAD 核基因组，恢复 `Heterocephalus phillipsi` 为独立种。MDD 已采纳这一处理，英文名为 Somaliland Naked Mole-rat。旧文献中的裸鼹鼠事实并非都能自动覆盖拆种后的两种：研究室模型和大部分野外资料来自肯尼亚的 `H. g. ansorgei` 谱系；索马里兰南部 `H. phillipsi` 的生理、社会和生活史资料很少。[Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4) [Mammal Diversity Database: H. phillipsi](https://www.mammaldiversity.org/taxon/1007027/)

IUCN 当前仍显示无危 `LC`、趋势稳定，评估年为 2016，2017 年发布勘误。该评估早于 `H. phillipsi` 拆分，所用范围和物种概念是旧广义种；页面必须同时显示“2016 年评估”和“评估早于 2025 年拆种”。LC 没有 A 至 E 的受威胁准则代码，不能虚构 `criteria`。IUCN 没有给出当前全球成熟个体总数。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en)

CITES 2026 年 3 月 5 日生效的现行附录没有列出 `Heterocephalus glaber`、`Heterocephalus` 或 `Heterocephalidae`。页面可写“未列入 CITES 附录”，不能写成“没有法律保护”或“可以自由跨境交易”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

## 名称、slug 与分类图谱

### 建议名称字段

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| `id` | `species-heterocephalus-glaber` | 沿用仓库 `species-<学名>` 约定 |
| `slug` | `naked-mole-rat` | 与 TODO 主名和通用英文名对齐 |
| `scientificName` | `Heterocephalus glaber` | MDD 当前接受名 |
| `names.zh` | 裸鼹鼠 | 沿用仓库 TODO 的编辑主名 |
| `names.en` | Common Naked Mole-rat | MDD 当前英文主名；比旧文献常用 Naked Mole-rat 多 `Common` |
| `names.aliases` | `['Naked Mole-rat', 'Naked Mole Rat', 'Desert Mole Rat', 'Sand Puppy']` | 均见 MDD；只作检索别名，不暗示它属于真正的鼹鼠或鼠属 |

“mole-rat”是英文俗名。裸鼹鼠属于啮齿目，但不属于鼹科，也不属于大鼠属 `Rattus`。中文页面不用“沙犬”等英文别名的直译。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001280/)

### 产品需要的六级分类

| 分类阶元 | 学名 | 中文名 | 产品口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | `animalTaxonomy` 固定生成 |
| 门 | Chordata | 脊索动物门 | MDD 所属脊索动物 |
| 纲 | Mammalia | 哺乳纲 | MDD 所属哺乳纲 |
| 目 | Rodentia | 啮齿目 | MDD 当前接受目 |
| 科 | Heterocephalidae | 裸鼹鼠科 | 采用 MDD 与 Patterson、Upham 的独立科口径 |
| 属 | `Heterocephalus` | 裸鼹鼠属 | MDD 当前承认本属有 `H. glaber` 与 `H. phillipsi` 两种 |
| 种 | `Heterocephalus glaber` | 裸鼹鼠 | 物种档案叶节点，不属于 `taxonomy` 六字段本身 |

Patterson 与 Upham 根据深分化时间及遗传、形态、生态和社会差异，把 `Heterocephalus` 从 Bathyergidae 提升到 Heterocephalidae。后续 MDD 采用 Heterocephalidae。旧综述仍可支持形态和生态，但不能覆盖当前科级字段。[Patterson and Upham 2014](https://doi.org/10.1111/zoj.12201) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001280/)

### 拆种后的边界

Uhrová 等人得到三个地理上不重叠的深分化谱系。研究者把索马里兰南部谱系恢复为 `H. phillipsi`；其与 `H. glaber` 祖先约在 410 万年前分开，并有第三臼齿缩小等形态差异。余下两个谱系暂作 `H. g. glaber` 和 `H. g. ansorgei` 两个亚种。MDD 已接受两种现生裸鼹鼠，`H. phillipsi` 当前为 IUCN 未评估 `NE`。[Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4) [Mammal Diversity Database: H. phillipsi](https://www.mammaldiversity.org/taxon/1007027/)

实现时不得写“裸鼹鼠属只有一种”“所有实验室裸鼹鼠代表整个属”或“2016 年 LC 已分别评估两种”。新研究指出，世界各地实验室建群动物多源自肯尼亚少数地点，主要属于 `H. g. ansorgei`。实验性低氧、寿命和方言结果应标注圈养样本与谱系来源边界。[Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)

## 全球保护状态、数量与国际贸易

推荐结构化字段：

```ts
conservation: conservation('LC', 'stable', 2016);
```

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| system | IUCN Red List | 仓库固定值 |
| code | `LC` | 当前仍有效的全球等级为无危 |
| trend | `stable` | IUCN 当前条目口径 |
| assessedYear | `2016` | 使用评估年，不用勘误年或本次核验年 |
| criteria | 不填 | LC 条目没有受威胁准则代码 |
| assessor | IUCN | 由仓库 helper 生成 |

IUCN 认为旧广义种分布广、数量多，没有识别全范围主要威胁。地下生活让常规目击和地表计数失真，条目没有给出全球成熟个体数。`estimatedMatureIndividuals` 留空；“一个群落最多近 300 只”也不能换算全球数量。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

2025 年拆种使旧评估的空间边界失配。`H. glaber` 页面仍可依法显示当前 LC，但正文必须说明评估采用拆种前概念；`H. phillipsi` 需要独立评估。不能自行把 `H. glaber` 降级，也不能把旧 LC 复制给新拆出的物种。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001280/) [Mammal Diversity Database: H. phillipsi](https://www.mammaldiversity.org/taxon/1007027/)

## 分布、地图与生境

### 当前狭义种范围

MDD 的范围摘要为索马里中部、埃塞俄比亚中部和东部、肯尼亚中部和南部；国家字段另列吉布提、埃塞俄比亚、肯尼亚和索马里。2025 年研究的属级模型覆盖非洲之角干燥开阔稀树草原，并指出极端炎热、年雨量低于约 200 毫米且盐土广布的阿法尔低地缺少记录。地图应依据点位与拆种边界，不得把四国国界全部涂满。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001280/) [Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)

建议字段：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['非洲'],
  regions: ['非洲之角', '东非干旱与半干旱带', '埃塞俄比亚高地东缘', '肯尼亚中部与南部干旱区'],
  countries: ['吉布提', '埃塞俄比亚', '肯尼亚', '索马里'],
  range:
    '当前狭义种见于吉布提、埃塞俄比亚中部和东部、肯尼亚中部和南部及索马里中部的干旱与半干旱地区；索马里兰南部原并入本种的谱系现归Heterocephalus phillipsi。国家字段是粗粒度范围，不能按整国填色。',
  center: { lat: 4.5, lng: 42 },
}
```

`center` 只是非洲之角地图初始视窗。它不代表丰度中心、模式产地、群落中心或两亚种界线。

### 生境与地下微环境

1. **干旱和半干旱开阔稀树草原，primary**：地表植被稀疏，地下块根和鳞茎形成斑块状食物。年雨量低且不规则，旧广义种综述给出常见年雨量 200 至 400 毫米。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

2. **干草原与灌丛，primary**：地下生活避开地表日温波动，适宜区仍受土壤盐度、极端高温与最低降雨共同限制。[Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)

3. **坚实红土壤、砂土、石膏土中的地下洞系，primary**：旧综述记录最常见于坚实红土壤，也能使用细砂、石膏土和红土。土壤受雨水软化后，群落才容易扩大觅食洞。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

4. **根茎作物和低强度农业边缘，non-primary**：地下根茎可吸引取食并引发局地害兽控制。现有来源不足以把农地写成主要天然生境，也不能把局地冲突升级成已量化的全球威胁。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en)

旧综述记录浅层觅食洞约深 2 至 20 厘米，连接洞和主洞更深；一套洞系的长度受群落规模与食物分布影响，已完整挖掘的 60 只群落洞系长 595 米，另一 85 至 90 只群落约 3 千米。两组地点数据不能填成全种固定洞深或洞长，也不进入 `metrics`。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

## 尺寸、外形与稳定测量值

American Society of Mammalogists 的物种综述汇总 42 只野生成体形态测量：总长 `137–180 mm`，头体长 `103–136 mm`，尾长 `32–47 mm`。651 只野生成体平均体重 `33.9 ± 4.9 g`，观测范围 `9–69 g`。体重会随年龄、食物、群落组成和繁殖状态改变；繁殖雌性在妊娠期可远超普通非繁殖个体。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

| 项目 | 建议值 | 是否进入结构化字段 | 边界 |
| --- | --- | --- | --- |
| 成体头体长 | 10.3 至 13.6 cm | `measurements.length`、`metrics.adultLengthCm` | 不含尾，不把总长误写为头体长 |
| 成体体重 | 9 至 69 g | `measurements.weight`、换算为 `metrics.adultMassKg: [0.009, 0.069]` | 宽范围；平均为 33.9 ± 4.9 g，样本 651 只 |
| 总长 | 13.7 至 18.0 cm | 正文和图像比例 | 不与头体长叠加 |
| 尾长 | 3.2 至 4.7 cm | 正文和图像比例 | 相对其他非洲鼹鼠较长，但远短于家鼠尾 |
| 寿命 | 不填范围 | 不进入 `metrics.lifespanYears` | 圈养记录超过 30 年，研究没有确定生理最大寿命；野外资料更短且不完整 |

写实识别组合：小型圆柱身体，腰骶部略拱，头部圆锥形而前端钝；短细四肢和相对较长的细尾；棕粉色松弛褶皱皮肤没有完整被毛，但全身仍有稀疏触毛，吻部触须长 1 至 2 厘米；眼睛微小、眼睑厚，没有外耳廓；白色、无沟的上下门齿向前伸出嘴外，嘴唇在门齿后闭合。最近前足的第三趾明显长于第四趾。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

“裸”不等于完全无毛。图片不能画成光滑橡胶皮、普通无毛宠物鼠或海象幼崽。门齿为白色，不是常见家鼠式橙色；它主要用门齿掘土，前足不是鼹鼠的宽大铲掌。

## 食性、挖掘与水分

裸鼹鼠是地下植食者，取食鳞茎、根、块根和其他地下地生植物。旧综述列出多个野生植物种，并观察到它们局部啃食大型块根、用土回填后再访。遇到密集小块根时，觅食洞会细密分枝；遇到孤立大型地生植物时，分枝模式不同。这些是旧广义种和特定地点观察，不能把列举植物设成当前狭义种各地的固定菜单。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

它们不依赖自由饮水，水分主要来自多汁地下植物。后肠微生物帮助发酵高纤维食物，个体会重新摄食部分消化的盲肠便。产品正文可以用“从块根获取水分”，不画水碗；若提食粪，必须写成消化循环，不能用猎奇语气。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

掘洞时，最前个体用向前伸出的门齿啃松土壤，后方成员沿单列向后扫土，末端个体把土踢到地表。85 至 90 只的单一群落案例在一年形成 400 至 500 个土丘并掘出约 2.3 至 2.9 千米新洞；这些数字是一个地点案例，不是每个群落年产量。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1) [Jarvis 1981](https://doi.org/10.1126/science.7209555)

## 活动、社会与交流

圈养群落全天都可活动，旧研究没有发现整群稳定随明暗周期同步；隔离个体又可出现昼夜节律。产品应写“地下活动不宜按地表昼夜简单归类”，不要标成严格夜行或昼行。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

触毛帮助它们在黑暗隧道导航。向前走时头部左右摆动，让吻须接触洞壁；倒退时尾部左右摆动维持接触。狭窄洞径允许快速前进和倒退，图片不需要把动物转身。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

Jarvis 1981 年以合作育幼、世代重叠和繁殖分工把裸鼹鼠描述为真社会性哺乳动物。旧综述记录群落从不超过约 10 只到超过 290 只，平均约 75 至 80 只；这些数据使用拆种前口径。繁殖通常集中在一只雌性和 1 至 3 只雄性，非繁殖成员参与育幼、挖洞、觅食、筑巢、堵洞和防御。[Jarvis 1981](https://doi.org/10.1126/science.7209555) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

“工鼠”和“兵鼠”适合作为行为解释，不适合作为终生固定、形态离散的昆虫式阶级。体型、年龄、群落组成和繁殖空缺都会改变工作频率。2025 年圈养研究连续 30 天追踪五个群落共 102 只动物，统计得到一个繁殖者簇和六个非繁殖行为簇；实验使用 1.4 至 2.0 米人工洞系，不能直接当作野外永久职业证明。[Yamakawa et al. 2025](https://doi.org/10.1126/sciadv.ady0481) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

2021 年回放与寄养实验显示，最常见的 soft chirp 携带群落身份信息。个体偏好回应本群方言，早期寄养幼仔会学习养群方言；繁殖雌性死亡后方言一致性下降，新繁殖雌性确立后重新增强。产品可写“群落方言可学习”，不能写成每只都有固定人类语言或能理解词句。[Barker et al. 2021](https://doi.org/10.1126/science.abc6588)

## 繁殖、分散与生活史

非繁殖雌性没有永久生理绝育。Faulkes 等人比较圈养和野外群落，记录非繁殖雌性卵巢周期受到社会抑制；离开原群落或繁殖雌性消失后，部分个体可恢复生殖功能。页面应写“社会抑制繁殖”，不能写“所有工鼠天生不育”。[Faulkes et al. 1990](https://doi.org/10.1530/jrf.0.0880559)

旧综述给出妊娠 66 至 74 天、泌乳约 5 周、全年繁殖，繁殖雌性可每 76 至 84 天产一窝。野外 82 窝平均 `11.3 ± 6.2` 只，范围 1 至 28；圈养 190 窝平均 `11.4 ± 5.6` 只，范围 1 至 27。繁殖雌性在最初几次妊娠中腰椎延长，形成持久的加长体形。数字来自拆种前汇总，不应设成每窝保证值。[Sherman et al. 1999](https://doi.org/10.2307/1383241) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

多数成员留在出生群落，但 O'Riain 等人在圈养群落发现少数脂肪储备高、活动强、主动寻求群外配偶的分散型个体。旧综述进一步记录，48 个超过 40 只的圈养群落中 6 个出现这类个体；野外 24 个大群落中 6 个有相似形态。该现象证明群落并非只能近亲繁殖，不代表每代固定产生分散“阶级”。[O'Riain et al. 1996](https://doi.org/10.1038/380619a0) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

## 温度、低氧与寿命的实验边界

裸鼹鼠的体温受环境温度影响强。四只个体组成的聚集体在 20°C 实验中把单位质量热导从单只的 `0.25` 降至 `0.12 ml O₂ g⁻¹ °C⁻¹`，但没有把体温维持到普通恒温哺乳动物水平。可写“贴靠降低低温下的代谢成本”，不要写成爬行动物或完全不能产热。[Withers and Jarvis 1980](https://doi.org/10.1016/0300-9629(80)90154-1)

Park 等人的密闭气体实验中，裸鼹鼠在 0% 氧环境存活 18 分钟，重新供氧后恢复；在低氧时，脑和心脏利用果糖驱动的糖酵解。`18 分钟` 是实验条件下的存活观察，不是野外屏息、潜水纪录，也不意味着无限耐受缺氧或没有组织代价。[Park et al. 2017](https://doi.org/10.1126/science.aab3896)

Ruby 等人汇总超过 3,000 条圈养生命史记录，样本中有个体活到 30 岁，观测期内成年死亡风险没有随年龄呈典型 Gompertz 指数增长。作者明确不能排除更晚才出现的 Gompertz 成分。档案可以写“圈养数据中超过 30 年且观测期未见年龄相关死亡风险上升”，不能写“永生”“不会衰老”或设置确定最大寿命。[Ruby et al. 2018](https://doi.org/10.7554/eLife.31157)

## 威胁与保护行动

### 有证据支持的威胁与缺口

1. **没有已识别的全范围主要威胁**：2016 年 IUCN 以旧广义种评为 LC、趋势稳定。这个结论不能替代拆种后的新调查。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en)
2. **根茎作物冲突与局地控制**：部分农业区把裸鼹鼠视为根茎作物害兽。现有资料没有量化其对当前狭义种全球趋势的影响，不能写成全球首要威胁。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en)
3. **干旱区生境压力**：2025 年研究指出非洲之角干旱生物多样性受到升温、过度放牧等压力，且政治不稳定让取样不足。论文没有给出 `H. glaber` 的损失百分比。[Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)
4. **评估与种界错位**：2016 年 IUCN 使用拆种前范围，`H. phillipsi` 当前 NE。风险可能被广义范围汇总掩盖，这是评估缺口，不是种群下降证据。[Mammal Diversity Database: H. phillipsi](https://www.mammaldiversity.org/taxon/1007027/)
5. **野外资料偏少**：大部分生理和行为成果来自肯尼亚少数来源的圈养谱系。实验室高存活、群落繁殖和低氧耐受不能证明野外数量稳定。[Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)

### 建议保护方向

1. 按 `H. glaber`、`H. phillipsi` 和 `H. glaber` 内部谱系重新整理点位、凭证标本和遗传样本，优先推动拆种后的独立 IUCN 评估。
2. 在吉布提、埃塞俄比亚、肯尼亚和索马里建立兼顾地表土丘、洞系占用与遗传鉴定的标准化监测，避免把一个土丘等同一只动物。
3. 保留干旱和半干旱稀树草原、灌丛、地下地生植物和可掘土壤组成的完整生态系统，不用圈养繁育代替原生生境管理。
4. 在根茎作物冲突区记录作物损失、控制手段和误杀，采用有目标的冲突缓解，避免无差别毒杀地下动物。
5. 监测过度放牧、土地转化、极端热旱和盐渍化如何改变地下食物与可掘土层；现阶段不预设统一气候损失百分比。
6. 对科研采样和跨境运输分别遵守范围国许可、动物伦理和获取与惠益分享规则；CITES 未列入不免除这些要求。

## 可稳定展示的四项指标

| 展示项 | 建议值 | 来源与限定 |
| --- | --- | --- |
| IUCN | LC | 2016 年旧广义种评估，趋势稳定；评估早于 `H. phillipsi` 拆分。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en) |
| 成体头体长 | 10.3–13.6 cm | 42 只野生成体的范围，不含 3.2 至 4.7 厘米尾长。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1) |
| 群落规模 | ≤10–≥290 | 拆种前野外资料的观测跨度，平均约 75 至 80；不是当前每个群落或两种裸鼹鼠的固定值。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1) |
| 0% 氧实验 | 18 min | 密闭实验中的存活与复氧恢复，不是野外屏息纪录或安全阈值。[Park et al. 2017](https://doi.org/10.1126/science.aab3896) |

## 页面字段文案建议

### `summary`

> 白色门齿在闭合嘴唇前啃开非洲之角的硬土，一只繁殖雌性与少数雄性、众多可恢复繁殖能力的成员共同维持地下群落；它的 2016 年无危评估早于近年的拆种。

### `description`

> 裸鼹鼠Heterocephalus glaber是裸鼹鼠科的小型地下啮齿动物，当前狭义种分布于吉布提、埃塞俄比亚中部和东部、肯尼亚中部和南部及索马里中部。它用位于闭合嘴唇前方的白色门齿掘洞，在块根和鳞茎中取得食物与水分。群落由世代重叠的亲属组成，繁殖通常集中在一只雌性和一至三只雄性；非繁殖成员参与掘洞、觅食、育幼与防御，却没有永久生理绝育。实验显示其群落方言可学习，聚集能降低低温下的代谢成本，个体还能在零氧实验中存活18分钟。IUCN当前沿用2016年无危、稳定评估，但该评估早于Heterocephalus phillipsi从广义裸鼹鼠中拆出，也没有给出当前全球成熟个体数。

### `tags`

```ts
[
  '脊索动物门',
  '哺乳纲',
  '啮齿目',
  '裸鼹鼠科',
  '非洲之角',
  '地下生活',
  '植食',
  '真社会性',
  '合作育幼',
  '社会性繁殖抑制',
  '门齿掘洞',
  '群落方言',
  '低氧耐受',
  'IUCN无危',
  'CITES未列入',
]
```

## 六个故事章节

### 1. `one-family-now-two-species`｜分类｜实验室明星其实来自一个窄谱系

现行 MDD 把裸鼹鼠置于独立的裸鼹鼠科。2025 年基因组、牙齿和环境研究又把索马里兰南部谱系恢复为 `Heterocephalus phillipsi`，让本属从一变二。世界各地实验室建群动物多来自肯尼亚少数地点，主要属于 `H. g. ansorgei`；在一种谱系上发现的寿命和低氧机制，不能未经验证代表整个属。[MDD](https://www.mammaldiversity.org/taxon/1001280/) [Uhrová et al.](https://doi.org/10.1038/s42003-025-09338-4)

### 2. `incisors-before-lips`｜解剖｜先闭上嘴，再用牙齿挖土

上下两对门齿向前伸到嘴唇外，啃松土壤时，门齿后的口腔褶皱关闭入口。最前个体负责咬土，后方成员沿窄洞向后扫送松土。松弛皮肤让身体在狭处扭转，吻须和尾部触毛分别帮助前进与倒退；它没有鼹鼠式铲掌，也不是普通无毛家鼠。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

### 3. `one-breeder-reversible-suppression`｜社会｜一只繁殖雌性不等于永久不育的工鼠

群落具有合作育幼、世代重叠和繁殖分工，繁殖通常集中在一只雌性和一至三只雄性。其他雌性的卵巢周期受到社会环境抑制，离群或繁殖雌性消失后可恢复。成员的挖洞、育幼和防御频率会随年龄、体型与群落状态改变，不能照搬蚂蚁的终生固定阶级。[Jarvis 1981](https://doi.org/10.1126/science.7209555) [Faulkes et al. 1990](https://doi.org/10.1530/jrf.0.0880559)

### 4. `rain-opens-a-digging-window`｜生态｜一场雨把硬土变成短暂的觅食窗口

地下块根分布零散，干季硬土让新洞成本升高。土层受雨水软化后，群落集中扩建觅食洞；遇到小块根斑块时洞道细密分枝，遇到大型地生植物时则局部取食、回填后再访。单个 85 至 90 只群落一年掘出 2.3 至 2.9 千米新洞的记录说明工作量巨大，却不是全种年均值。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

### 5. `dialect-huddle-and-no-oxygen`｜生理｜身体相贴、群落口音和零氧实验是三条证据

聚集实验显示，四只贴靠能降低 20°C 下的单位质量热导。回放和寄养实验显示 soft chirp 具有可学习的群落方言。另一项密闭实验记录个体在 0% 氧下存活 18 分钟，并在低氧时让脑和心脏利用果糖糖酵解。三项结果分别来自不同实验，不能合成“群落靠说话在零氧中取暖”的叙事。[Withers and Jarvis 1980](https://doi.org/10.1016/0300-9629(80)90154-1) [Barker et al. 2021](https://doi.org/10.1126/science.abc6588) [Park et al. 2017](https://doi.org/10.1126/science.aab3896)

### 6. `least-concern-before-the-split`｜保护｜无危标签比当前种界早九年

IUCN 在 2016 年把旧广义裸鼹鼠评为 LC、趋势稳定，没有估算全球成熟个体数。2025 年拆出的 `H. phillipsi` 当前仍是 NE，MDD 对 `H. glaber` 的范围也随之收窄。页面保留法定当前等级，同时标明评估早于拆种；下一步需要按凭证和遗传边界重做范围、趋势与威胁调查。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en) [MDD: H. phillipsi](https://www.mammaldiversity.org/taxon/1007027/)

## 推荐关键事实

1. MDD 接受名为 `Heterocephalus glaber` Rüppell, 1842，英文主名为 Common Naked Mole-rat。
2. 当前科级分类为 Heterocephalidae，不使用旧资料的 Bathyergidae。
3. 2025 年研究恢复 `H. phillipsi`，MDD 当前承认裸鼹鼠属有两种。
4. 当前狭义种国家字段为吉布提、埃塞俄比亚、肯尼亚和索马里，不能按整国填色。
5. IUCN 当前为 LC、趋势稳定、评估年 2016，条目早于拆种且没有成熟个体总数。
6. 2026 年现行 CITES 附录未列入本种。
7. 野生成体头体长 10.3 至 13.6 厘米，尾另长 3.2 至 4.7 厘米。
8. 651 只野生成体平均体重 33.9 ± 4.9 克，观测范围 9 至 69 克。
9. 它没有完整被毛，却有遍布身体、吻部和尾部的稀疏触毛。
10. 白色门齿伸在闭合嘴唇前，用于掘土与取食；前足不是铲掌。
11. 地下食物包括鳞茎、根、块根和其他地生植物，水分主要来自多汁食物。
12. 旧广义种群落观测跨度从不超过约 10 只到超过 290 只，平均约 75 至 80 只。
13. 繁殖通常集中在一只雌性和一至三只雄性，非繁殖雌性受到可逆的社会性生殖抑制。
14. 野外 82 窝平均 11.3 ± 6.2 只、范围 1 至 28，不能写成每窝固定 11 或 12 只。
15. 少数分散型个体会寻求群外配偶，群落并非只能近亲繁殖。
16. soft chirp 具有可学习的群落方言；寄养幼仔会学养群的方言。
17. 四只聚集实验降低了 20°C 下的单位质量热导，但未变成普通恒温模式。
18. 0% 氧 18 分钟是密闭实验结果，不是野外屏息纪录。
19. 超过 3,000 条圈养记录中有个体活到 30 岁，观测期死亡风险未呈典型年龄增长；这不等于永生。
20. 当前生理与行为研究集中在肯尼亚来源的少数圈养谱系，不能自动代表 `H. phillipsi`。

## 应删除或避免的说法

- “裸鼹鼠属于非洲鼹鼠科 Bathyergidae”：现行 MDD 使用 Heterocephalidae。
- “裸鼹鼠属只有一个物种”：MDD 已接受 `H. glaber` 与 `H. phillipsi`。
- “2016 年 IUCN 已分别评估两种”：评估早于拆种，`H. phillipsi` 当前 NE。
- “工鼠天生或永久不育”：非繁殖成员受到社会抑制，机会出现时可恢复繁殖。
- “像蚂蚁一样每只终生固定岗位”：个体行为随年龄、体型和群落状态改变。
- “每个群落都有一只雌性和固定三只雄性”：通常一只雌性、1 至 3 只雄性，旧资料也有短期例外。
- “每个群落约 300 只”：290 以上是旧资料上端，平均约 75 至 80。
- “每窝固定 11 或 12 只”：野外记录范围 1 至 28。
- “完全没有毛”：全身有稀疏触毛，吻须最长。
- “用宽大前爪挖洞”：主要掘土器官是前伸门齿。
- “门齿是橙色”：权威形态综述描述为白色。
- “不需要水所以能永远不喝”：野外主要从多汁地下植物获得水分。
- “能够在没有氧气时生活”：18 分钟来自 0% 氧实验，时间更长并非安全。
- “不会衰老或永生”：圈养观测没有检测到典型死亡风险增长，研究不能确定生理最大寿命。
- “LC 代表没有威胁”：LC 是旧广义种风险等级，不取代拆种后调查。
- “未列 CITES 所以可自由交易”：范围国许可、动物伦理和其他跨境规则仍适用。

## 六幅 1536 × 1024 写实图像场景

统一输出：每幅 `1536 × 1024` 像素，横向 3:2，photorealistic wildlife documentary photography。画面采用克制的地下低照度与土壤自然色，不含文字、水印、logo、边框、拼贴、实验装置或可识别机构标志。源文件建议使用 `*-source.png`，运行时文件使用同名 `.webp`。

### 生成像素的共同证据边界

六幅图均为基于研究的地下情景重建，不是野外在场记录、内窥摄影、标本测量或生理实验结果。生成像素不能确认动物的国家、谱系、年龄、性别、亲缘、繁殖状态、群落身份、氧气或二氧化碳浓度、土壤温度、隧道长度、块根种类和后续再生，也不能证明某只个体承担固定终生角色。alt、title 和 caption 只描述画面可见内容；“繁殖雌性”“协作挖掘”和“聚集”只能依靠对应来源在图说中作有限解释。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

### 01 `01-underground-tunnel-portrait`

**场景与构图**

封面环境肖像。恰好一只成年裸鼹鼠沿狭窄的自然土洞朝镜头斜向前进，完整显示头、短肢和细尾。主体放在右侧，左侧保留暗而有层次的土壁负空间。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary photograph and scientific subterranean reconstruction of exactly one adult common naked mole-rat, Heterocephalus glaber, moving diagonally toward the camera through a narrow natural earthen tunnel in arid East Africa. Place the animal in the right third of the frame and preserve generous softly shadowed layered soil negative space on the left for a page title. Show the complete animal from blunt cone-shaped head to the tip of its slender sparsely haired tail, with all four short slender limbs inside the frame. Give it a small cylindrical body, loose wrinkled brownish-pink skin with no fur coat, a few isolated fine tactile hairs on the body and longer whiskers on the muzzle and tail, tiny dark eyes with thick eyelids, no external ear pinnae, close-set nostrils, and two pairs of prominent white procumbent incisors projecting ahead of closed lips. The animal should look about 10 to 14 centimetres in head-and-body length, not rat-sized. Natural compact reddish-brown loam, a tunnel only slightly wider than the body, soft warm reflected low light, realistic skin translucency without visible organs, fine soil grains, restrained colour, shallow depth of field, high anatomical fidelity, no human presence.
```

**Avoid list**

```text
Avoid ordinary rat, mouse, hamster, guinea pig, mole, star-nosed mole, shrew, piglet, walrus, hairless pet rat, fuzzy fur coat, long rat tail, scaly tail, large round ears, visible ear flaps, large eyes, black or orange incisors, tusks, fangs, only two total teeth, lips in front of the incisors, open oral cavity full of soil, flat broad digging paws, giant claws, webbed feet, extra or fused limbs, duplicate head, cropped tail, cropped feet, more than one animal, crown, throne, clothes, jewellery, surface daylight, grass, roots growing through the body, laboratory tube, acrylic enclosure, plastic pipe, terrarium, human hand, fantasy, cartoon, illustration, painting, CGI gloss, text, watermark, logo, border or collage.
```

**可见性与验收**

- 精确计数 1 只成年个体；鼻端、四肢和尾尖均在画面内。
- 圆柱形小身体、松弛褶皱的棕粉色皮肤、稀疏触毛、微小眼睛和缺失外耳廓可辨。
- 上下各一对白色前伸门齿位于闭合嘴唇之前；不能生成普通鼠类的橙色门齿。
- 隧道只略宽于身体，主体焦点建议 `{ x: 0.69, y: 0.55 }`，左侧保留标题空间。

**证据边界**

画面只重建典型外形和地下通道。它不能确认个体来自 MDD 当前狭义种范围中的哪个国家或亚种，也不能给出洞深、活动时间、性别、体长或体重。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001280/) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

### 02 `02-full-body-diagnostic-profile`

**场景与构图**

形态鉴别侧面图。恰好一只成年非繁殖个体在平整土洞中严格左向右侧视，鼻端至尾尖无裁切，柔和侧光突出体形、触毛、门齿和足趾。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic scientific wildlife profile of exactly one adult nonbreeding common naked mole-rat, Heterocephalus glaber, standing naturally from left to right on compact dry loam inside a broad underground chamber. Use a true side view and show the entire animal from the front edge of the protruding incisors to the tip of the slender tail, with all four feet visible and no cropping. The animal has a small cylindrical body with a gently arched lower back, a blunt cone-shaped head, short slender limbs, loose wrinkled brownish-pink skin without a fur coat, isolated tactile hairs across the body, 1-to-2-centimetre facial whiskers, tiny eyes with thick lids, no external ear pinnae, close-set nostrils, and prominent smooth white upper and lower incisors projecting forward outside lips that close behind them. Show anatomically coherent small clawed digits; on the nearest forefoot the third digit is visibly longer than the fourth without becoming a shovel. Neutral warm lateral light, realistic matte skin, fine wrinkles, restrained shadow, diagnostic detail, natural field-documentary realism without labels.
```

**Avoid list**

```text
Avoid breeding-queen identification, pregnant abdomen, pups, more than one animal, front view, three-quarter view, curled posture, cropped snout, cropped tail, missing feet, hairless fancy rat, mouse, mole, hamster, piglet, large ears, visible pinnae, long scaly rat tail, dense hair, completely smooth rubber skin, oversized eyes, orange incisors, beaver teeth, tusks, closed lips covering the incisors, giant mole hands, five human fingers, paddle feet, extra toes, fused digits, duplicate limbs, ruler, arrows, anatomical labels, studio pedestal, acrylic tube, plastic pipe, text, watermark, logo or collage.
```

**可见性与验收**

- 精确计数 1 只；严格侧视，门齿前缘到细尾尖完整可见。
- 头体保持约 10.3 至 13.6 厘米的比例感，尾长约为头体长的三分之一，不能画成长尾家鼠。
- 松弛褶皱皮肤上仍有稀疏触毛；面部触须比身体触毛长。
- 最近前足第三趾长于第四趾，足部仍是小型抓地足，不是鼹鼠式铲掌。

**证据边界**

该图呈现权威物种综述中的典型成体比例和识别组合。它不构成尺标，不能测量个体、判断年龄或区分 `H. g. glaber` 与 `H. g. ansorgei`，也不能替代牙齿、颅骨和遗传鉴定。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1) [Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)

### 03 `03-cooperative-digging-chain`

**场景与构图**

协作挖洞场景。恰好三只成年非繁殖个体沿一条窄洞排成单列：最前个体用门齿啃松盲端土壤，后两只用足向后扫送松土。画面不展示地表出口，也不把成员画成固定昆虫“工蚁阶级”。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary reconstruction of exactly three adult common naked mole-rats, Heterocephalus glaber, cooperatively excavating a narrow natural earthen tunnel. Arrange the three animals in one clear single-file line from right to left with no overlap that obscures heads: the front animal at the right-hand blind end braces its short feet and uses its paired white procumbent incisors to gnaw compact loam; the middle animal faces away from the digging face and sweeps a small amount of freshly loosened soil backward with its feet; the rear animal continues moving the same modest soil pile toward the left edge. Each animal must have a small cylindrical body, loose wrinkled brownish-pink nearly hairless skin, sparse tactile hairs, tiny eyes, no external ears, short slender limbs, and a slender sparsely haired tail. Keep closed lips visibly behind the projecting incisors on the digger so soil cannot enter the mouth. The tunnel is only slightly wider than one body, forcing single-file work. Soft warm reflected underground light, coherent soil direction, restrained dust, high anatomical realism, no surface opening, no humans.
```

**Avoid list**

```text
Avoid fewer or more than three animals, merged bodies, duplicate heads, extra limbs, animals stacked vertically, random crowd, ants, termites, insect anatomy, helmets, tools, buckets, mine carts, conveyor belt, military formation, crown or queen, fixed caste labels, ordinary rats, mice, moles, piglets, fur coats, external ears, large eyes, orange incisors, tusks, digging primarily with giant forepaws, soil pouring into open mouths, explosive dust cloud, collapsing tunnel, surface hole, predator, fighting, laboratory tube, acrylic wall, cutaway diagram, text, arrows, watermark, logo, frame or collage.
```

**可见性与验收**

- 精确计数 3 只成体，单列关系清楚，每只各有一个完整头部和一条尾巴。
- 最前个体用白色门齿松土；中、后个体把同一小堆松土沿相反方向扫送。
- 土壤运动方向连贯，不能出现工具、矿车、传送带或拟人化岗位标志。
- 三只个体体形可以略有差异，但画面不得宣称它们属于终生不变的离散阶级。

**证据边界**

权威综述记录了门齿掘土和成员沿洞向后扫土的“digging chain”。静态重建不能测量掘进速度、参与比例、搬土质量、隧道长度、成员年龄或职责稳定性，也不能证明每次野外施工恰有三只动物。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1) [Jarvis 1981](https://doi.org/10.1126/science.7209555)

### 04 `04-partial-geophyte-feeding`

**场景与构图**

地下取食场景。恰好一只成年个体在觅食侧洞啃食一枚仍埋在土中、仍与根系相连的大型块根，只打开局部取食面，植物地上部分不出镜。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary reconstruction of exactly one adult common naked mole-rat, Heterocephalus glaber, feeding underground on one large succulent geophyte tuber that remains embedded in compact East African loam. Show the animal in a natural side three-quarter view inside a small foraging chamber, using its prominent white incisors to remove a modest crescent-shaped bite from one exposed side of the tuber. Most of the tuber remains intact and buried, with a few coherent roots continuing into the surrounding soil and no above-ground plant visible. Show the complete naked mole-rat with loose wrinkled brownish-pink skin, sparse tactile hairs, tiny eyes, no external ears, short slender legs and a slender tail. Keep the tuber realistically fibrous and moist at the small feeding surface, not sliced by a knife. Warm low underground light, natural soil crumbs, subdued ochre and rose palette, documentary realism, no drinking water and no human objects.
```

**Avoid list**

```text
Avoid more than one animal, multiple food types, fruit bowl, carrot, potato chips, cut vegetables, knife marks, plate, food dish, water bowl, drinking, surface leaves, visible sky, severed floating roots, giant fantasy tuber, entire tuber consumed, food storage claim, ordinary rat, mouse, mole, piglet, fur coat, external ears, long scaly tail, large eyes, orange teeth, bloody tissue, gore, soil inside open mouth, human hand, farm machinery, laboratory feeder, acrylic tube, glowing food, text, labels, watermark, logo or collage.
```

**可见性与验收**

- 精确计数 1 只成年裸鼹鼠和 1 枚主要块根；动物全身留在画面内。
- 块根大部分仍埋在原位并与根系相连，只出现一处小型新鲜啃食面。
- 画面不出现饮水、地上植物、人工切口或混合果蔬餐。
- 门齿接触块根，嘴部与四肢结构保持裸鼹鼠特征。

**证据边界**

旧广义种野外综述记录裸鼹鼠取食鳞茎、根和块根，并会局部取食大型块根后填土、日后再访。画面不能鉴定植物种类，不能证明这枚块根会再生、曾被同一只动物访问或能支撑整个群落，也不能把旧范围内所有食物记录无条件归给拆种后的每个谱系。[Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1) [Uhrová et al. 2025/2026](https://doi.org/10.1038/s42003-025-09338-4)

### 05 `05-breeding-female-with-pups`

**场景与构图**

繁殖巢室。恰好一只身体明显较长的成年繁殖雌性与恰好六只幼仔伏在干燥植物纤维巢材上。六仔属于已记录 1 至 28 仔范围内的可验收场景，不能写成平均窝仔数。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic scientific wildlife documentary reconstruction inside a warm underground naked mole-rat nest chamber. Show exactly one established adult breeding female common naked mole-rat, Heterocephalus glaber, lying calmly in a gentle curve on dry shredded root and tuber-husk nesting material, with exactly six small hairless pups clustered against her ventral side. The adult female has the species' cylindrical form but a visibly longer lumbar body than a typical nonbreeder, loose wrinkled brownish-pink skin, sparse tactile hairs, tiny eyes, no external ear pinnae, prominent white incisors, short slender limbs and a slender tail. The six pups are clearly separate individuals, much smaller than the mother, bright pink, with sealed or barely visible eyes and delicate fused-looking newborn digits; keep their skin natural and opaque enough to avoid visible organs. Arrange heads and bodies so all six pups can be counted without duplicates or merged anatomy. The chamber walls are compact loam, with no artificial pipe. Soft warm reflected light, quiet natural posture, restrained field-documentary realism, no royal symbolism.
```

**Avoid list**

```text
Avoid fewer or more than one adult and six pups, second adult, nonbreeder crowd, merged pups, duplicate heads, extra limbs, embryos, eggs, marsupial pouch, visible placenta, umbilical cords, birth scene, blood, gore, transparent organs, oversized nipples, humanlike breast, crown, throne, royal robe, jewellery, queen-bee anatomy, ants, nursing bottle, blanket, cage bedding, sawdust, plastic pipe, laboratory tank, ordinary rat, mouse, piglet, fur coat, external ears, long scaly tail, large eyes, orange teeth, aggressive biting, text, watermark, logo, border or collage.
```

**可见性与验收**

- 精确计数 1 只成年繁殖雌性和 6 只幼仔；不出现第二只成体。
- 繁殖雌性身体比普通非繁殖个体长，但仍保持裸鼹鼠的小型圆柱体形，不用王冠识别。
- 六只幼仔均可分辨头与躯干，无融合、重复、胎盘、血液或可见内脏。
- 巢材为干燥根皮、块根皮或植物纤维，不是布料、棉花、木屑或塑料。

**证据边界**

每个群落通常由一只繁殖雌性生产幼仔，旧综述记录野外窝仔数范围为 1 至 28、平均 `11.3 ± 6.2`。画面选六仔只为保持计数和解剖可验收，不能当作平均、典型或固定窝仔数；静态图也不能确认哺乳、亲缘、幼仔日龄、妊娠史或群落内其他繁殖者是否存在。[Faulkes et al. 1990](https://doi.org/10.1530/jrf.0.0880559) [Sherman et al. 1999](https://doi.org/10.2307/1383241) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

### 06 `06-nest-chamber-huddle`

**场景与构图**

群体贴靠场景。恰好六只成年非繁殖个体在较宽巢室内自然蜷伏、身体相贴，完整呈现通过接触交换热量的姿态。画面不混入繁殖雌性或幼仔，不把聚集画成昆虫球。

**可直接投喂的 photorealistic prompt**

```text
Create a 1536x1024 landscape 3:2 photorealistic wildlife documentary reconstruction of exactly six adult nonbreeding common naked mole-rats, Heterocephalus glaber, resting in close body contact inside a rounded natural underground nest chamber. Arrange the six animals as a loose, countable huddle on dry plant-fibre nest material: bodies touch along their sides and backs but each head and torso remains visually separable, with no animal buried beneath the others. Do not include pups or an elongated breeding female. Each animal has a small cylindrical body, loose wrinkled brownish-pink nearly hairless skin, sparse tactile hairs, tiny eyes, no external ear pinnae, paired white procumbent incisors, short slender limbs and a slender sparsely haired tail. Let two tails extend around the outside of the group and keep all heads anatomically coherent. The compact-loam chamber is wider than a travel tunnel and has several dark tunnel mouths in the background, but no artificial cutaway labels. Soft warm ambient underground light, natural shadows between bodies, restrained colour, tactile skin detail, quiet documentary realism.
```

**Avoid list**

```text
Avoid fewer or more than six animals, pups, pregnant or elongated queen, breeding claim, hidden uncountable animals, merged bodies, duplicate heads, extra tails, tangled impossible limbs, spherical rat ball, ant brood pile, bee cluster, swarm, fighting, mating, feeding, open mouths, ordinary rats, mice, piglets, walruses, fur coats, visible ears, large eyes, long scaly rat tails, orange teeth, steam, glowing heat, thermal-camera colours, temperature labels, oxygen bubbles, gas clouds, visible sound waves, laboratory tubing, acrylic chamber, cage bedding, text, watermark, logo, frame or collage.
```

**可见性与验收**

- 精确计数 6 只成年非繁殖个体；六个头和六个躯干均能独立辨认。
- 个体以体侧和背部自然相贴，不能融合成一团或堆成昆虫球。
- 不出现幼仔、明显加长的繁殖雌性、交配、争斗、热成像色带或可视化气体。
- 巢室比通行隧道宽，背景洞口不能切断、复制或吞没动物身体。

**证据边界**

研究支持裸鼹鼠会在巢室贴靠聚集，并通过行为与洞深选择调节热交换。画面无法测量体温、代谢、热流、环境温度、氧气或二氧化碳，也不能证明六只是固定群组、同龄个体或完整群落。[Withers and Jarvis 1980](https://doi.org/10.1016/0300-9629(80)90154-1) [Jarvis and Sherman 2002](https://doi.org/10.1644/0.706.1)

### 六图统一静态验收

1. 六张源 PNG 与六张运行时 WebP 均为 1536 × 1024，横向 3:2。
2. 文件顺序固定为 underground tunnel portrait、full-body diagnostic profile、cooperative digging chain、partial geophyte feeding、breeding female with pups、nest-chamber huddle。
3. 个体计数依次为 1、1、3、1、1 成体加 6 幼仔、6 成体；任何融合、重复或额外动物均退回重做。
4. 逐图核对圆柱体形、松弛棕粉色褶皱皮肤、稀疏触毛、微小眼睛、缺失外耳廓、短细四肢、细尾和白色前伸门齿。
5. 门齿位于闭合嘴唇之前；不能画成橙色鼠牙、海象獠牙或鼹鼠铲掌。完整个体不得裁切鼻、足或尾。
6. 土洞和巢室使用自然土壤，不能出现亚克力管、塑料接头、实验标签、笼具、人工灯带或地表透视窗。
7. 繁殖图以加长躯干和幼仔关系表达身份，不用王冠；挖掘图不使用工具；聚集图不使用热成像或可视化气体。
8. 所有 alt、title、caption 与实际动作、个体数量和可见细节一致；caption 保留图像不能测量或证明的边界。

## 精选来源与 `SpeciesSource` 草稿

最终实现固定以下 16 个唯一 URL。它们分别覆盖当前接受名与拆种、独立科级口径、IUCN 与 CITES、形态尺寸、食性与洞系、真社会性、可逆繁殖抑制、窝仔数、分散、聚集调温、群落方言、低氧、圈养寿命与行为分群。

1. [Mammal Diversity Database: Heterocephalus glaber](https://www.mammaldiversity.org/taxon/1001280/)
2. [Mammal Diversity Database: Heterocephalus phillipsi](https://www.mammaldiversity.org/taxon/1007027/)
3. [Patterson and Upham 2014: Heterocephalidae family revision](https://doi.org/10.1111/zoj.12201)
4. [Uhrová et al. 2025/2026: Naked mole-rat phylogeography and taxonomic revision](https://doi.org/10.1038/s42003-025-09338-4)
5. [IUCN Red List: Heterocephalus glaber, assessed 2016 and errata 2017](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en)
6. [CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
7. [Jarvis and Sherman 2002: Heterocephalus glaber, Mammalian Species 706](https://doi.org/10.1644/0.706.1)
8. [Jarvis 1981: Eusociality in a mammal](https://doi.org/10.1126/science.7209555)
9. [Faulkes et al. 1990: Ovarian suppression in naked mole-rat colonies](https://doi.org/10.1530/jrf.0.0880559)
10. [Sherman, Braude and Jarvis 1999: Litter sizes and mammary numbers](https://doi.org/10.2307/1383241)
11. [O'Riain et al. 1996: A dispersive morph](https://doi.org/10.1038/380619a0)
12. [Withers and Jarvis 1980: Huddling and thermoregulation](https://doi.org/10.1016/0300-9629(80)90154-1)
13. [Barker et al. 2021: Vocal dialects and social learning](https://doi.org/10.1126/science.abc6588)
14. [Park et al. 2017: Fructose-driven glycolysis under anoxia](https://doi.org/10.1126/science.aab3896)
15. [Ruby, Smith and Buffenstein 2018: Mortality hazards in captive naked mole-rats](https://doi.org/10.7554/eLife.31157)
16. [Yamakawa et al. 2025: Individual behavioural phenotypes in captive colonies](https://doi.org/10.1126/sciadv.ady0481)

`MDD` 页面显示的“IUCN (2024)”是名称使用或导入参考，不是一次 2024 年的新评估。产品的 `assessedYear` 必须保持 2016；源数组也保留 IUCN 给出的经典引用 DOI，不把勘误页面 ID `e.T9987A115095455` 改造成新 DOI。

```ts
const NAKED_MOLE_RAT_SOURCE_DATE = '2026-09-02' as const;
const NAKED_MOLE_RAT_CONTENT_DATE = '2026-09-02' as const;

const NAKED_MOLE_RAT_SOURCES = [
  {
    title: 'Mammal Diversity Database v2.5: Heterocephalus glaber',
    url: 'https://www.mammaldiversity.org/taxon/1001280/',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Mammal Diversity Database v2.5: Heterocephalus phillipsi',
    url: 'https://www.mammaldiversity.org/taxon/1007027/',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Patterson and Upham 2014: Heterocephalidae as a distinct family',
    url: 'https://doi.org/10.1111/zoj.12201',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Uhrová et al. 2025/2026: More than one species of the naked mole-rat',
    url: 'https://doi.org/10.1038/s42003-025-09338-4',
    kind: 'taxonomy',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Heterocephalus glaber (2016 assessment; 2017 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T9987A22184136.en',
    kind: 'conservation',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Jarvis and Sherman 2002: Heterocephalus glaber',
    url: 'https://doi.org/10.1644/0.706.1',
    kind: 'general',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Jarvis 1981: Eusociality in a mammal',
    url: 'https://doi.org/10.1126/science.7209555',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Faulkes et al. 1990: Social suppression of ovarian cyclicity',
    url: 'https://doi.org/10.1530/jrf.0.0880559',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Sherman et al. 1999: Litter sizes and mammary numbers',
    url: 'https://doi.org/10.2307/1383241',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: "O'Riain et al. 1996: A dispersive morph in the naked mole-rat",
    url: 'https://doi.org/10.1038/380619a0',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Withers and Jarvis 1980: Huddling, thermoregulation and oxygen consumption',
    url: 'https://doi.org/10.1016/0300-9629(80)90154-1',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Barker et al. 2021: Vocal dialects and social identity',
    url: 'https://doi.org/10.1126/science.abc6588',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Park et al. 2017: Fructose-driven glycolysis supports anoxia resistance',
    url: 'https://doi.org/10.1126/science.aab3896',
    kind: 'general',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Ruby et al. 2018: Mortality rates defy Gompertzian laws',
    url: 'https://doi.org/10.7554/eLife.31157',
    kind: 'general',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
  {
    title: 'Yamakawa et al. 2025: Behavioral diversity in naked mole-rat societies',
    url: 'https://doi.org/10.1126/sciadv.ady0481',
    kind: 'ecology',
    accessedAt: NAKED_MOLE_RAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段 `Species` 对象草稿

该对象按当前 `Species` schema 映射研究结论。它是实现底稿；研究稿本身不代表图片、数据、测试和 TODO 已落库。

```ts
const nakedMoleRat = {
  id: 'species-heterocephalus-glaber',
  slug: 'naked-mole-rat',
  names: {
    zh: '裸鼹鼠',
    en: 'Common Naked Mole-rat',
    aliases: ['Naked Mole-rat', 'Naked Mole Rat', 'Desert Mole Rat', 'Sand Puppy'],
  },
  scientificName: 'Heterocephalus glaber',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Rodentia', '啮齿目'),
    taxon('Heterocephalidae', '裸鼹鼠科'),
    taxon('Heterocephalus', '裸鼹鼠属'),
  ),
  conservation: conservation('LC', 'stable', 2016),
  distribution: {
    realms: ['terrestrial'],
    continents: ['非洲'],
    regions: [
      '非洲之角',
      '东非干旱与半干旱带',
      '埃塞俄比亚高地东缘',
      '肯尼亚中部与南部干旱区',
    ],
    countries: ['吉布提', '埃塞俄比亚', '肯尼亚', '索马里'],
    range:
      '当前狭义种见于吉布提、埃塞俄比亚中部和东部、肯尼亚中部和南部及索马里中部的干旱与半干旱地区；索马里兰南部原并入本种的谱系现归Heterocephalus phillipsi。国家字段是粗粒度范围，不能按整国填色。',
    center: { lat: 4.5, lng: 42 },
  },
  habitats: [
    {
      name: '干旱和半干旱开阔稀树草原',
      realm: 'terrestrial',
      description:
        '地表植被稀疏，地下块根、鳞茎和其他地生植物提供食物与水分；旧广义种综述常见年雨量为200至400毫米。',
      isPrimary: true,
    },
    {
      name: '干草原与旱生灌丛',
      realm: 'terrestrial',
      description:
        '东非干旱开阔景观中的地下生境；适生范围同时受最低降雨、极端高温和土壤盐度限制。',
      isPrimary: true,
    },
    {
      name: '坚实红土、细砂、石膏土与红土中的地下洞系',
      realm: 'terrestrial',
      description:
        '洞网把觅食通道、连接洞、巢室与厕所连起来；雨后土壤变软时更容易扩展新洞。',
      isPrimary: true,
    },
    {
      name: '根茎作物与低强度农业边缘',
      realm: 'terrestrial',
      description:
        '地下作物可引发局地觅食与害兽控制冲突；现有证据不足以把农地定为主要天然生境或全球主要威胁。',
    },
  ],
  measurements: {
    length: {
      min: 10.3,
      max: 13.6,
      unit: 'cm',
      note: '42只野生成体的头体长，不含3.2至4.7厘米的尾。',
    },
    weight: {
      min: 9,
      max: 69,
      unit: 'g',
      note: '651只野生成体的观测范围；样本平均33.9 ± 4.9克。',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['鳞茎', '根', '块根', '其他地生植物', '盲肠便'],
    description:
      '地下植食者，以鳞茎、根、块根和其他地生植物为主，并从多汁食物取得大部分水分。个体可局部取食大型块根后回填土壤、日后再访；后肠发酵和重新摄食盲肠便帮助利用高纤维食物。',
  },
  activity: [
    '地下群落全天都可活动，不宜按地表明暗周期简单标为严格昼行或夜行',
    '最前个体以伸在嘴唇前的白色门齿啃松土壤，后方成员沿窄洞向后扫土和踢土',
    '群落由世代重叠成员组成，非繁殖成员合作觅食、掘洞、筑巢、育幼与防御',
    '繁殖通常集中在一只雌性和一至三只雄性，其他雌性的生殖功能受可逆社会抑制',
    '稀疏触毛辅助在黑暗洞道导航；前进时摆头触壁，倒退时以尾部触毛维持接触',
    'soft chirp含有可学习的群落方言，圈养回放与寄养实验显示个体偏好并学习本群信号',
  ],
  tags: [
    '脊索动物门',
    '哺乳纲',
    '啮齿目',
    '裸鼹鼠科',
    '非洲之角',
    '地下生活',
    '植食',
    '真社会性',
    '合作育幼',
    '社会性繁殖抑制',
    '门齿掘洞',
    '群落方言',
    '低氧耐受',
    'IUCN无危',
    'CITES未列入',
  ],
  summary:
    '白色门齿在闭合嘴唇前啃开非洲之角的硬土，一只繁殖雌性与少数雄性、众多可恢复繁殖能力的成员共同维持地下群落；它的2016年无危评估早于近年的拆种。',
  description:
    '裸鼹鼠Heterocephalus glaber是裸鼹鼠科的小型地下啮齿动物，当前狭义种分布于吉布提、埃塞俄比亚中部和东部、肯尼亚中部和南部及索马里中部。它用位于闭合嘴唇前方的白色门齿掘洞，在块根和鳞茎中取得食物与水分。群落由世代重叠的亲属组成，繁殖通常集中在一只雌性和一至三只雄性；非繁殖成员参与掘洞、觅食、育幼与防御，却没有永久生理绝育。实验显示其群落方言可学习，聚集能降低低温下的代谢成本，个体还能在零氧实验中存活18分钟。IUCN当前沿用2016年无危、稳定评估，但该评估早于Heterocephalus phillipsi从广义裸鼹鼠中拆出，也没有给出当前全球成熟个体数。',
  storySections: [
    {
      key: 'one-family-now-two-species',
      label: '分类',
      title: '实验室明星其实来自一个窄谱系',
      body: '现行MDD把裸鼹鼠置于独立的裸鼹鼠科。2025年基因组、牙齿和环境研究又把索马里兰南部谱系恢复为Heterocephalus phillipsi，让本属从一变二。世界各地实验室建群动物多来自肯尼亚少数地点，主要属于H. g. ansorgei；在一种谱系上发现的寿命和低氧机制，不能未经验证代表整个属。',
    },
    {
      key: 'incisors-before-lips',
      label: '解剖',
      title: '先闭上嘴，再用牙齿挖土',
      body: '上下两对门齿向前伸到嘴唇外，啃松土壤时，门齿后的口腔褶皱关闭入口。最前个体负责咬土，后方成员沿窄洞向后扫送松土。松弛皮肤让身体在狭处扭转，吻须和尾部触毛分别帮助前进与倒退；它没有鼹鼠式铲掌，也不是普通无毛家鼠。',
    },
    {
      key: 'one-breeder-reversible-suppression',
      label: '社会',
      title: '一只繁殖雌性不等于永久不育的工鼠',
      body: '群落具有合作育幼、世代重叠和繁殖分工，繁殖通常集中在一只雌性和一至三只雄性。其他雌性的卵巢周期受社会环境抑制，离群或繁殖雌性消失后可恢复。成员的挖洞、育幼和防御频率会随年龄、体型与群落状态改变，不能照搬蚂蚁的终生固定阶级。',
    },
    {
      key: 'rain-opens-a-digging-window',
      label: '生态',
      title: '一场雨把硬土变成短暂的觅食窗口',
      body: '地下块根分布零散，干季硬土让新洞成本升高。土层受雨水软化后，群落集中扩建觅食洞；遇到小块根斑块时洞道细密分枝，遇到大型地生植物时则局部取食、回填后再访。单个85至90只群落一年掘出2.3至2.9千米新洞的记录说明工作量巨大，却不是全种年均值。',
    },
    {
      key: 'dialect-huddle-and-no-oxygen',
      label: '生理',
      title: '身体相贴、群落口音和零氧实验是三条证据',
      body: '聚集实验显示，四只贴靠能降低20摄氏度下的单位质量热导。回放和寄养实验显示soft chirp具有可学习的群落方言。另一项密闭实验记录个体在0%氧下存活18分钟，并在低氧时让脑和心脏利用果糖糖酵解。三项结果分别来自不同实验，不能合成“群落靠说话在零氧中取暖”的叙事。',
    },
    {
      key: 'least-concern-before-the-split',
      label: '保护',
      title: '无危标签比当前种界早九年',
      body: 'IUCN在2016年把旧广义裸鼹鼠评为LC、趋势稳定，没有估算全球成熟个体数。2025年拆出的Heterocephalus phillipsi当前仍是NE，MDD对H. glaber的范围也随之收窄。页面保留法定当前等级，同时标明评估早于拆种；下一步需要按凭证和遗传边界重做范围、趋势与威胁调查。',
    },
  ],
  keyFacts: [
    'MDD接受名为Heterocephalus glaber Rüppell, 1842，英文主名为Common Naked Mole-rat。',
    '当前科级分类为Heterocephalidae，不使用旧资料的Bathyergidae。',
    '2025年研究恢复Heterocephalus phillipsi，MDD当前承认裸鼹鼠属有两种。',
    '当前狭义种国家字段为吉布提、埃塞俄比亚、肯尼亚和索马里，不能按整国填色。',
    'IUCN当前为LC、趋势稳定、评估年2016，条目早于拆种且没有成熟个体总数。',
    '2026年现行CITES附录未列入本种。',
    '野生成体头体长10.3至13.6厘米，尾另长3.2至4.7厘米。',
    '651只野生成体平均体重33.9 ± 4.9克，观测范围9至69克。',
    '它没有完整被毛，却有遍布身体、吻部和尾部的稀疏触毛。',
    '白色门齿伸在闭合嘴唇前，用于掘土与取食；前足不是铲掌。',
    '地下食物包括鳞茎、根、块根和其他地生植物，水分主要来自多汁食物。',
    '旧广义种群落观测跨度从不超过约10只到超过290只，平均约75至80只。',
    '繁殖通常集中在一只雌性和一至三只雄性，非繁殖雌性受到可逆社会性生殖抑制。',
    '野外82窝平均11.3 ± 6.2只、范围1至28，不能写成每窝固定11或12只。',
    '少数分散型个体会寻求群外配偶，群落并非只能近亲繁殖。',
    'soft chirp具有可学习的群落方言；寄养幼仔会学养群的方言。',
    '四只聚集实验降低了20摄氏度下的单位质量热导，但未变成普通恒温模式。',
    '0%氧18分钟是密闭实验结果，不是野外屏息纪录。',
    '超过3000条圈养记录中有个体活到30岁，观测期死亡风险未呈典型年龄增长；这不等于永生。',
    '当前生理与行为研究集中在肯尼亚来源的少数圈养谱系，不能自动代表Heterocephalus phillipsi。',
  ],
  threats: [
    '2016年IUCN没有识别旧广义种的全范围主要威胁，该结论早于2025年拆种',
    '根茎作物觅食可引发局地害兽控制，但对当前狭义种的全球影响未量化',
    '过度放牧、土地转化、极端热旱和盐渍化可改变地下食物与可掘土层，现无物种级损失百分比',
    '2016年IUCN范围与新种界错位，Heterocephalus phillipsi当前未评估',
    '野外数量、趋势和谱系边界数据稀少，圈养研究不能代替拆种后的实地调查',
  ],
  conservationActions: [
    '按Heterocephalus glaber、Heterocephalus phillipsi和H. glaber内部谱系重整点位、凭证标本与遗传样本',
    '推动两种裸鼹鼠在新种界下的独立IUCN评估',
    '在四个范围国建立结合地表土丘、洞系占用与遗传鉴定的标准化监测',
    '保留干旱稀树草原、灌丛、地下地生植物和可掘土壤组成的完整生态系统',
    '在根茎作物冲突区记录损失、控制方式和误杀，优先实施有目标的冲突缓解',
    '监测放牧、土地转化、极端热旱与盐渍化如何影响地下食物和可掘土层',
  ],
  metrics: {
    adultLengthCm: [10.3, 13.6],
    adultMassKg: [0.009, 0.069],
  },
  featuredStats: [
    {
      key: 'iucn-status',
      label: 'IUCN全球等级',
      value: 'LC',
      unit: '无危',
      note: '2016年旧广义种评估，趋势稳定；评估早于H. phillipsi拆分。',
    },
    {
      key: 'head-body-length',
      label: '成体头体长',
      value: '10.3–13.6',
      unit: '厘米',
      note: '42只野生成体的范围，不含3.2至4.7厘米尾长；来自拆种前综述。',
    },
    {
      key: 'colony-size',
      label: '旧资料群落规模',
      value: '≤10–≥290',
      unit: '只',
      note: '拆种前野外观测跨度，平均约75至80只；不是当前每个群落或两种裸鼹鼠的固定值。',
    },
    {
      key: 'zero-oxygen-experiment',
      label: '0%氧实验存活',
      value: '18',
      unit: '分钟',
      note: '密闭实验中的存活与复氧恢复，不是野外屏息纪录、安全阈值或无限耐受。',
    },
  ],
  media: {
    image: './images/species/naked-mole-rat/01-underground-tunnel-portrait.webp',
    alt: '天然土洞内一只成年裸鼹鼠正面向镜头，棕粉色褶皱皮肤、小眼、缺失外耳廓和嘴唇前的白色门齿清晰可见',
    focalPoint: { x: 0.5, y: 0.48 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image: './images/species/naked-mole-rat/02-full-body-diagnostic-profile.webp',
        alt: '一只完整成年裸鼹鼠侧身站在天然土床上，头、四足、细尾、稀疏触毛和白色前伸门齿全部留在画面内',
        title: '圆柱体形、触毛与唇前门齿',
        caption: '形态重建显示一只完整成体的识别组合；画面不能测量头体长、尾长、体重，也不能判断性别、年龄、来源地或亚种。',
        focalPoint: { x: 0.5, y: 0.54 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/naked-mole-rat/03-cooperative-digging-chain.webp',
        alt: '恰好三只裸鼹鼠在狭窄土洞内单列合作掘洞，前方个体以门齿咬土，后方两只向后扫送松土',
        title: '一列成员合作送土',
        caption: '掘洞重建显示前方咬土、后方送土的动作链；静态画面不能证明它们长期担任固定工种，也不能给出洞长、掘进速率或年度土丘产量。',
        focalPoint: { x: 0.52, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/naked-mole-rat/04-partial-geophyte-feeding.webp',
        alt: '一只裸鼹鼠在天然土洞中用白色门齿局部啃食一枚大部分仍埋在原位、连着根系的块根',
        title: '局部取食埋在原位的块根',
        caption: '食性重建显示一处小型新鲜啃食面；画面不能鉴定植物种，不能证明块根会再生、曾被同一只个体访问或能支撑整个群落。',
        focalPoint: { x: 0.55, y: 0.54 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/naked-mole-rat/05-breeding-female-with-pups.webp',
        alt: '一只躯干明显较长的成年繁殖雌性裸鼹鼠与恰好六只小型无毛幼仔伏在干燥植物纤维巢材上',
        title: '加长躯干的繁殖雌性与六仔',
        caption: '繁殖巢室重建使六只幼仔可独立计数；六仔不代表平均或固定窝仔数，静态画面也不能确认哺乳、亲缘、幼仔日龄、妊娠史或群落内其他繁殖者。',
        focalPoint: { x: 0.5, y: 0.57 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/naked-mole-rat/06-nest-chamber-huddle.webp',
        alt: '恰好六只成年非繁殖裸鼹鼠在天然地下巢室的干燥植物纤维上身体相贴，六个头和躯干均可分辨',
        title: '巢室内身体相贴的六只成体',
        caption: '聚集重建显示个体以体侧和背部接触；画面无法测量体温、代谢、热流或气体，也不能证明六只是固定群组、同龄个体或完整群落。',
        focalPoint: { x: 0.5, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: NAKED_MOLE_RAT_SOURCES,
  featured: true,
  publishedAt: NAKED_MOLE_RAT_CONTENT_DATE,
  updatedAt: NAKED_MOLE_RAT_CONTENT_DATE,
} as const satisfies Species;
```

## 实现、测试、计数与 TODO 精确交接

### 图像和索引文件

1. 把六张 1536 × 1024 源 PNG 放入 `src/assets/source/species/naked-mole-rat/`，文件名严格使用本稿的六个 basename。
2. 在同目录新增 `README.md`，记录六张图的 prompt、avoid list、尺寸、个体计数、静态验收和证据边界。
3. 在 `src/assets/source/README.md` 增加 `[Common Naked Mole-rat image set](./species/naked-mole-rat/README.md)`。
4. 将六张运行时 WebP 放入 `public/images/species/naked-mole-rat/`，保持 1536 × 1024，不改 basename。
5. 图片全组的 `credit` 严格统一为 `Fauna Atlas · AI 生成科学情景重建`。

### `src/data/species.ts`

1. 新增 `NAKED_MOLE_RAT_SOURCE_DATE` 和 `NAKED_MOLE_RAT_CONTENT_DATE`，两者均为 `2026-09-02`。
2. 新增上述 16 项 `NAKED_MOLE_RAT_SOURCES`；URL 顺序作为可测合同，不增加二级转载来源。
3. 新增 `species-heterocephalus-glaber`，保持 `Heterocephalidae`，不回退到 `Bathyergidae`。
4. `conservation` 严格为 `conservation('LC', 'stable', 2016)`；不设 `criteria`，不设 `estimatedMatureIndividuals`。
5. `metrics` 只放 `adultLengthCm: [10.3, 13.6]` 和 `adultMassKg: [0.009, 0.069]`。圈养 30 岁、洞长、群落规模和 18 分钟实验均不得写入数值比较 `metrics`。
6. `storySections` 键顺序严格为 `one-family-now-two-species`、`incisors-before-lips`、`one-breeder-reversible-suppression`、`rain-opens-a-digging-window`、`dialect-huddle-and-no-oxygen`、`least-concern-before-the-split`。
7. `featuredStats` 键顺序严格为 `iucn-status`、`head-body-length`、`colony-size`、`zero-oxygen-experiment`；渲染后的值分别为 `LC无危`、`10.3–13.6厘米`、`≤10–≥290只`、`18分钟`。
8. 保留 `featured: true`，`publishedAt` 和 `updatedAt` 均为 `2026-09-02`。

### `tests/taxonomy.test.mjs`

新增独立测试 `registers the Common Naked Mole-rat as a split-bounded Heterocephalus glaber profile`，至少覆盖以下精确断言：

- `id`、`slug`、中英文名、四个别名和学名与草稿完全相等。
- 分类路径严格为 `Animalia / Chordata / Mammalia / Rodentia / Heterocephalidae / Heterocephalus`。
- 保护字段严格为 `{ code: 'LC', trend: 'stable', assessedYear: 2016, criteria: undefined }`。
- `realms` 为 `['terrestrial']`、`continents` 为 `['非洲']`、四国顺序为吉布提、埃塞俄比亚、肯尼亚、索马里，`center` 为 `{ lat: 4.5, lng: 42 }`；范围文字必须明说索马里兰南部归 `H. phillipsi` 且不能按整国填色。
- 主要生境恰好 3 项，所有生境 realm 均为 `terrestrial`。
- 头体长严格为 10.3、13.6、`cm`，注明 42 只和不含尾；体重严格为 9、69、`g`，注明 651 只和 `33.9 ± 4.9`。
- `metrics` 深等于 `{ adultLengthCm: [10.3, 13.6], adultMassKg: [0.009, 0.069] }`；`lifespanYears`、`estimatedMatureIndividuals`、`elevationM`、`topSpeedKph` 都不存在。
- 食性严格为 `['herbivore']`，食物包含鳞茎、根、块根，食性文字保留“旧广义种”、局部取食、回填后再访和不是固定菜单的边界。
- 六个故事键与四个指标键按上述顺序深等；故事正文要同时保住拆种、门齿和嘴唇、可逆抑制、单地点洞长、三项独立实验、旧 IUCN 评估这六类边界。
- 编辑文字断言覆盖 MDD v2.5 独立科、旧 `Bathyergidae`、`H. phillipsi`、2016 年 LC 与稳定趋势、`IUCN (2024)` 只是名称使用引用年、全球成熟个体数未给出、`H. g. ansorgei` 实验边界、CITES 未列与其他法规仍适用、以及圈养 30 岁不等于永生。
- 调用 `assertGeneratedImageSet`，`slug` 为 `naked-mole-rat`，basename 顺序严格为本稿六图顺序，开启 `verifyAcceptedHashes: true`，并断言全组统一 credit。
- 对 02 至 06 的 caption 分别断言形态测量与亚种、挖掘速率与人数、块根植物种与再生、六仔与窝仔数、六成体与热生理这五组边界；每条 caption 必须包含“不能”、“无法”、“不代表”或同类限定词。
- 来源数量严格为 16，URL 全部唯一、可解析、以 `https://` 开头，访问日期全部为 `2026-09-02`，kind 集合恰好为 `taxonomy`、`conservation`、`general`、`ecology`；并按源数组的 16 个 URL 和顺序深等。
- `featured` 为 `true`，两个内容日期都为 `2026-09-02`。

分类树全局计数断言应精确更新为：

```js
assert.equal(species.length, 114);
assert.equal(findTaxon(tree, 'kingdom', 'Animalia')?.speciesCount, 114);
assert.equal(findTaxon(tree, 'phylum', 'Chordata')?.speciesCount, 75);
assert.equal(findTaxon(tree, 'class', 'Mammalia')?.speciesCount, 33);
assert.equal(findTaxon(tree, 'order', 'Rodentia')?.speciesCount, 2);
assert.equal(findTaxon(tree, 'family', 'Heterocephalidae')?.speciesCount, 1);
assert.equal(findTaxon(tree, 'genus', 'Heterocephalus')?.speciesCount, 1);
```

`Castoridae` 和 `Castor` 仍各1，只是 `Rodentia` 从1增到2；其他类群计数不变。

### `docs/todo.md`

落库后严格执行四组变更：

1. `基于现有 113 个物种档案` 改为 `基于现有 114 个物种档案`。
2. 总览中 `哺乳纲 32` 改为 `哺乳纲 33`。
3. `前两批现剩 27 种` 改为 `前两批现剩 26 种`；`三批现剩 55 种` 改为 `三批现剩 54 种`。
4. 删除第二批的 `### 哺乳动物` 空分组标题与裸鼹鼠 TODO 整行，让该批从 `### 鸟类` 开始。

### 验证命令

在资源、数据、测试和 TODO 都落库后运行：

```bash
npm run test:taxonomy
npm run typecheck
npm run build
npm test
git diff --check
```

再用静态资产检查确认 6 张 PNG 和 6 张 WebP 均为 1536 × 1024，每个 basename 只有一对源图和运行时图，资产路径、媒体数组和 README 完全对齐。

## 交接检查表

### 研究底稿

- [x] MDD 接受名、英文主名、编辑中文名、检索别名和 slug 已分别说明。
- [x] `Heterocephalidae` 与旧 `Bathyergidae` 的科级差异已记录。
- [x] 2025 年 `H. phillipsi` 拆种、当前两种口径与肯尼亚圈养谱系偏差已记录。
- [x] IUCN 的 LC、stable、2016、无 criteria、无全球成熟个体数与早于拆种已分开。
- [x] `IUCN (2024)` 只是名称使用引用年，不是 2024 年新评估，已明示纠错。
- [x] 当前狭义种四国范围、索马里兰南部拆出区和地图粗粒度已分开。
- [x] 头体长、尾长、体重、稀疏触毛、白色唇前门齿和前足边界已核定。
- [x] 食性、掘洞链、真社会性、可逆繁殖抑制、窝仔数、分散和方言均保留样本与拆种边界。
- [x] 聚集调温、18 分钟零氧和圈养长寿均按实验结果表述，未推成野外能力或永生。
- [x] CITES 当前未列与“可自由贸易”的错误推论已分开。
- [x] 六个故事、四项指标、20 条关键事实、16 个唯一 URL 和完整 `Species` 草稿已写入。

### 图像规格

- [x] 六幅图均提供独立场景、1536 × 1024 photorealistic prompt、avoid list、可见性验收和证据边界。
- [x] 六图 basename、顺序和动物计数已固定。
- [x] 统一解剖限制覆盖圆柱体形、棕粉色褶皱皮肤、稀疏触毛、小眼、无外耳廓、短细四肢、细尾和白色唇前门齿。
- [x] 挖洞图不设工具或固定阶级，繁殖图不设王冠，聚集图不设热成像或可视化气体。

### 落库前验收

- [x] 六张源 PNG 和六张运行时 WebP 已生成并逐张静态检查。
- [x] `src/data/species.ts` 已写入来源数组与完整物种对象。
- [x] `tests/taxonomy.test.mjs` 已写入完整档案、图像、来源、边界和全局计数断言。
- [x] 源素材 README、全局索引和 `docs/todo.md` 已更新。
- [x] 已运行分类测试、类型检查、生产构建、全量测试、资产尺寸检查和 `git diff --check`。
