# 大西洋火体虫档案研究稿

## 结论摘要

`Pyrosoma atlanticum` 是海樽纲的远洋被囊动物。画面里的一条粉红色中空筒并非一个大型单体，而是许多毫米级个虫嵌在共同被囊中形成的群体。每个个虫从群体外侧吸入海水，以鳃篮上的黏液网截留颗粒，再把水排入共同空腔；汇流从群体开口端排出，同时产生较弱推进力。

本种通常在热带、亚热带和温带海域出现，经典分布口径约为南北纬 50° 之间的各大洋，也进入地中海。它会进行昼夜垂直迁移，但幅度随海区、季节、群体大小和水柱结构而变。利古里亚海一项研究中，3 毫米群体平均迁移约 90 米，51 毫米群体约 760 米，全部尺寸合并均值为 410 米。这些数值只描述该次局地研究，不能写成全物种每日固定值。

个虫可产生蓝绿色生物发光，受光、电和机械刺激后，响应能通过相邻个虫的光刺激在群体内传播。发光化学尚未定论：一条证据链提出使用 coelenterazine 的候选宿主荧光素酶 PyroLuc，另一条证据链在发光器附近检出具有发光潜力的 `Photobacterium` 等细菌。档案必须把两者写成竞争证据，不能断言细菌或宿主酶已经得到唯一确认。

IUCN Red List 当前检索不到本种评估，因此仓库使用 `NE / unknown`，不填评估年份或标准。NE 只表示未评估，不代表安全、无危、数量庞大或趋势稳定。

## 分类口径

仓库固定储存界、门、纲、目、科、属六个分类阶元。WoRMS/OBIS 给出的可用路径为：

```text
Animalia       动物界
Chordata       脊索动物门
Thaliacea      海樽纲
Pyrosomatida   火体虫目
Pyrosomatidae  火体虫科
Pyrosoma       火体虫属
```

- 接受名：`Pyrosoma atlanticum Péron, 1804`
- WoRMS AphiaID：`137250`
- `Tunicata` 是亚门，正文可以说明“被囊动物”，不能塞进仓库的门或纲字段。
- ITIS 仍显示旧拼法 `Pyrosomida`；分类图谱采用 WoRMS 当前的 `Pyrosomatida`，避免建立两个同义目节点。

## 结构化字段建议

```ts
id: 'species-pyrosoma-atlanticum'
slug: 'atlantic-pyrosome'
names: {
  zh: '大西洋火体虫',
  en: 'Atlantic Pyrosome',
  aliases: ['大西洋火體蟲']
}
scientificName: 'Pyrosoma atlanticum'
conservation: conservation('NE', 'unknown')
distribution.realms: ['marine']
measurements.length: {
  max: 0.78,
  unit: 'm',
  note: '北加州洋流 2017 年 5 月样本范围为 6 至 78 厘米；78 厘米是该次研究的样本最大值，不是绝对物种极值或典型长度'
}
diet.types: ['filter-feeder']
metrics: {}
```

`continents` 可列全球沿海对应的六大洲，但正文必须说明这是远洋水团分布，不是陆地分布。`countries` 留空，避免用临海国家清单冒充海洋范围。

## 形态、摄食和生态边界

- 群体通常为一端闭合、一端开口的中空圆筒或长锥体，外壁粉红至黄粉色，质地较坚韧，并带密集低突起。
- Naturalis 经典资料给群体最长约 60 厘米、粗 4 至 6 厘米，单个个虫最长约 8.5 毫米。后续北加州样本出现 78 厘米群体，因此 60 厘米只适合作经典约数。
- 许多毫米级个虫嵌在共同被囊中。群体是一项协同结构，不应写成一个“大型个体”，也不能照搬管水母的捕食体、摄食体等高度分工叙事。
- 个虫的入水口朝向外侧，出水口朝向共同空腔。纤毛维持滤食水流，黏液网截留微型浮游生物和碎屑，汇流从共同开口端排出并提供弱推进。
- 已记录食物包括球石藻等定鞭藻、甲藻、中心硅藻、其他微型真核生物、细菌和悬浮碎屑。局地样品中的甲壳类标志或碎片不足以建立稳定食谱。不同研究的粒径偏好不一致，不能把本种限定为只吃大于或小于 10 微米的颗粒。
- 高密度群体可显著改变局地浮游植物和微生物食物网。群体的粪粒、昼夜迁移和死亡下沉都能把碳带到混合层以下；这些通量高度依赖地点和采样期，不可外推为全球固定贡献。
- 三条碳路径要分开表达：部分迁移群体可主动把上层摄入物带到深处；粪粒可独立下沉；垂死或死亡群体可形成尸体下沉并为深水消费者提供食物或基质。

## 生活史边界

火体虫为雌雄同体。受精卵先发育成短暂的 `cyathozooid`，它恰好出芽形成四个初级 `ascidiozooid`，构成 `tetrazooid` 阶段。后续个虫再通过无性出芽扩展群体。这里没有樽海鞘式的两代交替，不能把四个初级个虫写成四个独立成年群体。

本种的野外世代时间、寿命和全球成熟群体数量没有可靠统一值。不要给 `lifespanYears`、`estimatedMatureIndividuals` 或固定繁殖季。

## 六段故事结构

1. `one-colony-many-zooids`：中空筒是许多个虫共享被囊的群体，而非单一巨型动物。
2. `filtering-and-jet-propulsion`：外侧进水、黏液网过滤、共同空腔汇流、开口端排水和弱推进是一套连续过程。
3. `blue-green-light-open-mechanism`：蓝绿色发光和群体内传播已有观测，宿主荧光素酶与发光细菌证据仍未收敛。
4. `variable-diel-migration`：多数研究记录夜间趋浅、白天趋深，幅度受海区和群体大小控制，不能固定为 1,000 米。
5. `sexual-and-asexual-life-cycle`：受精卵、cyathozooid、四个初级 ascidiozooid、后续无性出芽共同建立群体。
6. `blooms-and-carbon-transport`：暴发可改写局地食物网和碳输送，通量与生态结果不能脱离海区、年份和采样方法。

## 四项展示数据

| key | 标签 | 值 | 边界 |
| --- | --- | --- | --- |
| `classic-colony-length` | 经典群体长度上限 | 约 60 cm | 经典形态资料；北加州样本可达 78 cm，不是绝对极值 |
| `zooid-length` | 单个个虫长度上限 | 约 8.5 mm | 经典形态资料，不是每个个虫的固定尺寸 |
| `primary-zooids` | 初始个虫数 | 4 个 | cyathozooid 出芽形成的初级 ascidiozooid 数量 |
| `ligurian-size-linked-dvm` | 利古里亚海迁移幅度 | 90–760 m | Andersen 与 Sardou 1994 年研究中，3 至 51 mm 群体对应的平均幅度；合并均值为 410 m，只代表该次局地研究 |

## 保护与监测口径

可列的风险主要是知识缺口和环境变化，而不是已经量化的灭绝驱动：

- IUCN 尚未评估，全球种群大小、长期趋势、世代时间和关键繁殖区均未知。
- 海温、生产力、海流、锋面和海洋热浪会改变分布与暴发机会；不同海区的方向并不一致。
- 软体群体容易被网具损坏，传统网采会低估数量、尺寸和深度分布，影像也受采样体积与识别率限制。
- 暴发可能与渔业、冷却水取水和其他海上活动发生局地冲突，但“造成作业问题”不等于本种受到同等程度威胁。

建议把“保护行动”写成监测和证据建设：标准化分层网采与水下影像、保存凭证标本和 DNA、同步记录温盐氧与叶绿素、区分活体迁移和下沉尸体、公开暴发和搁浅数据，并在评估生态影响时同时测量摄食、粪粒、迁移和底栖输入。

## 可直接使用的来源数组

```ts
const ATLANTIC_PYROSOME_SOURCES = [
  {
    title: 'WoRMS — Pyrosoma atlanticum Péron, 1804 (AphiaID 137250)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=137250',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — Classification for AphiaID 137250',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/137250',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'OBIS — Pyrosoma atlanticum taxon and occurrence map',
    url: 'https://obis.org/taxon/137250',
    kind: 'distribution',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Pyrosoma atlanticum, no assessment returned',
    url: 'https://www.iucnredlist.org/search?query=Pyrosoma%20atlanticum&searchType=species',
    kind: 'conservation',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Lilly et al. 2023 — A global review of pyrosomes',
    url: 'https://doi.org/10.1002/lol2.10350',
    kind: 'general',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Naturalis — Pyrosoma atlanticum morphology and size',
    url: 'https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=210&id=132505',
    kind: 'general',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'National Museum of Natural Science — Pyrosoma atlanticum specimen 004023-00017',
    url: 'https://www.nmns.edu.tw/collect/catalog/detail/?id=18286',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Schram et al. 2020 — Abundance, distribution and feeding ecology in the Northern California Current',
    url: 'https://doi.org/10.3354/meps13465',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Lyle et al. 2022 — Fine-scale vertical distribution and diel migrations',
    url: 'https://doi.org/10.1093/plankt/fbac006',
    kind: 'distribution',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Andersen & Sardou 1994 — Diel migration as a function of colony size',
    url: 'https://doi.org/10.1093/plankt/16.4.337',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Henschke et al. 2019 — Pyrosome grazing and carbon transport in the Tasman Sea',
    url: 'https://doi.org/10.1029/2018JG004918',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Stenvers et al. 2021 — Distribution, associations and carbon pump role off Cabo Verde',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8084940/',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Bowlby et al. 1990 — Patterns of stimulated bioluminescence in two pyrosomes',
    url: 'https://doi.org/10.2307/1542326',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Tessler et al. 2020 — A putative chordate luciferase',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7576829/',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Berger et al. 2021 — Bacterial symbionts with bioluminescent potential',
    url: 'https://doi.org/10.3389/fmars.2021.606818',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Thompson et al. 2021 — Host-specific symbioses and microbial prey',
    url: 'https://doi.org/10.1038/s43705-021-00007-1',
    kind: 'ecology',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2024 — Full-length transcriptome annotation of Pyrosoma atlanticum',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11668868/',
    kind: 'general',
    accessedAt: ATLANTIC_PYROSOME_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 来源判读

- WoRMS 与 OBIS 决定接受名和分类图谱路径。
- IUCN 搜索只支持“当前未找到评估”，不能证明风险低。
- Lilly 等 2023 是跨研究综述，用于分布、生活史和迁移范围的综合边界；精确地点数值仍回到对应原始研究。
- Lyle、Andersen、Henschke 与 Stenvers 分别支持局地垂直分布、体型效应、滤食与碳输送，彼此不能合并成一个全球固定数字。
- Bowlby 支持可刺激发光及群体内传播；Tessler、Berger 与 Thompson 显示发光机制尚有相竞争证据。
- Naturalis 给出经典形态尺寸；Schram 等 2020 年研究直接支持 6 至 78 厘米的北加州洋流样本范围，两者不能合并成绝对物种极值。
- 国立自然科学博物馆藏品记录支持繁体中文名“大西洋火體蟲”；`Pyrosome` 与 `Sea Pickle` 泛指多个火体虫物种，不作为本种别名。
