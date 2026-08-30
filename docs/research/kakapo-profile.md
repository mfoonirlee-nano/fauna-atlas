# 鸮鹦鹉（_Strigops habroptilus_）完整物种档案研究

- 检索与核验日期：2026-08-30
- 使用范围：把 `docs/todo.md` 中的鸮鹦鹉落实为完整 `Species` 记录、6 个故事段落、4 张数字卡、1 张封面与 5 张 gallery 图像
- 证据口径：AviList 与 IOC 负责现行鸟类分类和学名拼法；IUCN Red List 负责全球等级、趋势、评估年份和成熟个体字段；新西兰保育部（DOC）负责当前管理台账、现存地点和保护行动；New Zealand Birds Online 与原始论文负责形态、食性、繁殖、遗传和疾病。
- 访问日期写法：本文每项事实后附直接链接和访问日期。落库的 `SpeciesSource.accessedAt` 统一为 `2026-08-30`。

## 编辑结论

1. 主名使用“鸮鹦鹉”与 `Kākāpō`，学名使用 _Strigops habroptilus_ G. R. Gray, 1845。IOC v15.1 已把旧的形容词形式 _habroptila_ 改回名词形式 _habroptilus_；ICZN 命名意见、AviList v2025b 和 New Zealand Birds Online 也采用 _habroptilus_。数据库、旧 IUCN 题名和基因资源中的 _habroptila_ 只能视为旧拼法，不能进入当前 `scientificName`。[IOC taxonomic updates](https://www.worldbirdnames.org/new/updates/taxonomy/)；[ICZN nomenclatural review](https://www.biotaxa.org/bzn/article/view/84957/79939)；[AviList v2025b](https://www.avilist.org/checklist/v2025b/)；[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）
2. 六阶分类链使用 Animalia 动物界、Chordata 脊索动物门、Aves 鸟纲、Psittaciformes 鹦形目、Strigopidae 鸮鹦鹉科、_Strigops_ 鸮鹦鹉属。AviList v2025b 的 Strigopidae 含 2 属、4 个现生种，因此不能写“鸮鹦鹉科唯一现生种”；可写“鸮鹦鹉属唯一现生种”。[AviList v2025b](https://www.avilist.org/checklist/v2025b/)；[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）
3. 全球保护字段应为 **CR / increasing / assessed 2018 / A2be**。IUCN 评估日期是 2018-08-07，记录中的总个体数为 149，成熟个体估计为 116。到 2026-08-30，这份评估刚超过 8 年，尚未达到 IUCN 的 10 年正式过期线；若没有新评估，将在 2028-08-07 后进入过期范围。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)；[IUCN assessment process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30）
4. DOC 动态页在 2026-08-30 显示 **235 只在世，全部为野外个体**；DOC 在 2026-04-23 的有日期公告也报告 235 只。动态页没有公开其底层台账截点，实施必须把它写成“2026-08-30 页面快照”，不能改写成“2026-08-30 完成普查”。[DOC Kākāpō Recovery](https://www.doc.govt.nz/kakapo)；[DOC 2026-04-23](https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/)（访问日期均为：2026-08-30）
5. `235` 是全龄、逐只管理的在世台账，不是 IUCN 的成熟个体字段。IUCN 的 `116` 只对应 2018 年评估；`metrics.estimatedMatureIndividuals` 若填 `[116, 116]`，正文和测试必须同时锁定 `assessedYear: 2018`，绝不能用 `235` 覆盖。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)；[DOC Kākāpō Recovery](https://www.doc.govt.nz/kakapo)（访问日期均为：2026-08-30）
6. DOC 的 2024/25 年度报告提供了最近一份带完整普查边界的年龄与性别截面：截至 2025-06-30 共 242 只，其中成年雌鸟 87、成年雄鸟 103、幼年雌鸟 24、幼年雄鸟 28、150 日龄以下雏鸟 0。报告把成年定义为超过 5 岁、幼年定义为 150 日龄至 5 岁，并说明逐只无线电监测使全种群普查具有极高准确度。[DOC 2024/25 population report](https://www.doc.govt.nz/globalassets/system/ar-reporting/reporting-ar-2024-25/kakapo-population-2024-2025.html)（访问日期：2026-08-30）
7. 孵出一只雏鸟不等于官方种群立即增加一只。2022 年 DOC 在雏鸟满 150 日龄后才把它们加入官方种群；2026 年首雏公告使用“离巢后才正式加入”的简化说法。当前档案只展示 DOC 已发布的 235，不把孵化直播、受精卵或未满门槛的雏鸟相加。[DOC 2022 population protocol](https://www.doc.govt.nz/news/media-releases/2022-media-releases/bumper-breeding-season-boosts-kakapo-population/)；[DOC first chick 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/first-kakapo-chick-in-four-years-hatches-on-valentines-day/)（访问日期均为：2026-08-30）
8. 当前有 3 个繁殖种群：Whenua Hou/Codfish Island、Pukenui/Anchor Island、Te Kākahu-o-Tamatea/Chalky Island。Sanctuary Mountain Maungatautari 与 Coal Island/Te Puka-Hereka 是小型雄鸟试验地；Coal Island 仍可能有少量白鼬，不能把所有现存地点统称为“完全无捕食者岛屿”。[DOC habitat and islands](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[DOC breeding season 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)（访问日期均为：2026-08-30）
9. 可落库体长为 **58–64 厘米**；雄鸟约 **2–4 千克**，雌鸟约 **1–2.5 千克**。1990–2002 年繁殖研究的样本均值为雄鸟 2.11 千克、雌鸟 1.45 千克，支持明显的体重性二型；实施仍使用当前综合资料的两性包络，不把研究均值伪装成物种固定体重。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[Eason et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_27.pdf)（访问日期均为：2026-08-30）
10. 鸮鹦鹉夜间觅食、白天休息，不会主动飞行；短圆翼主要帮助平衡和缓冲跌落，体重较轻的雌鸟可跨越约 3–4 米空隙作短距离滑翔。它仍能用强足攀上约 20 米高的陆均松，不能画成只能贴地爬行的鸟。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Livezey 1992](https://pubmed.ncbi.nlm.nih.gov/29865598/)（访问日期均为：2026-08-30）
11. 食性只填 `herbivore`。食物涵盖果实、种子、叶、芽、花、树皮、蕨叶、根、根茎和块茎；它会用喙和舌压榨坚韧叶片，留下弯月形纤维“嚼团”。一项 1981–1998 年粪便植物残留研究显示罗汉松类果实在繁殖年更常见，但该结果来自 Whenua Hou 与 Rakiura，不能写成全历史分布区的固定比例。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Wilson et al. 2006](https://www.birdsnz.org.nz/publications/diet-of-kakapo-in-breeding-and-non-breeding-years-on-codfish-island-whenua-hou-and-stewart-island/)（访问日期均为：2026-08-30）
12. 现有南部繁殖种群的已知触发信号是陆均松丰年，通常相隔 **2–4 年**。2006 年研究在 Whenua Hou 发现筑巢与陆均松未熟果量有关，普通补充饲料本身没有被证明能触发繁殖；北部历史种群和其他植物群落的触发机制仍不确定。[DOC breeding season 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)；[Harper et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf)；[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）
13. 雄鸟在山脊、岩台或低矮植被山头清理放射状小径与浅碗穴，鼓起胸部气囊，约每 1–2 秒发出一次低频轰鸣，并穿插金属般的 `ching` 帮助雌鸟定位。求偶场不承担筑巢或供食功能，交配后雄鸟不参与育幼；现有资料把鸮鹦鹉视为唯一已知采用求偶场繁殖的鹦鹉。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Merton et al. 1984](https://doi.org/10.1111/j.1474-919X.1984.tb00250.x)（访问日期均为：2026-08-30）
14. 雌鸟独自筑巢、孵卵和育幼。每窝 **1–4 枚**，孵化期 **27–31 天**、平均约 29 天；幼鸟平均约 70 日龄离巢，平均约 9 个月独立。DOC 的管理页用“约 30 天、约 10 周离巢、母鸟可喂养至 6 个月”概括同一过程，实施应保留范围而不是给每窝固定日程。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Eason et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_27.pdf)（访问日期均为：2026-08-30）
15. 近四十年的保护项目记录中约 61% 卵未能孵化；显微检查显示 124 枚表面看似未发育的卵中 72% 实际已经受精，主要问题是早期胚胎死亡，不能继续把“未见发育”统称为不育。[Savage et al. 2022](https://doi.org/10.1111/acv.12746)（访问日期：2026-08-30）
16. 2026 年 148 只个体的基因组研究发现，全基因组连续纯合片段衡量的近交程度与雌鸟卵孵化成功率呈显著负相关，信号分布在多个染色体区域。2023 年全种群基因组项目则为 2018 年初仍在世的 169 只鸟建立了变异和表型资料，用于疾病、繁殖、转移和配对决策；“基因组可辅助管理”不等于近交风险已经消失。[Foster et al. 2026](https://doi.org/10.1111/mec.70252)；[Guhlin et al. 2023](https://doi.org/10.1038/s41559-023-02165-y)（访问日期均为：2026-08-30）
17. 一项 49 个现代与历史基因组的研究发现，Rakiura 后裔可能在长期小种群过程中清除了一部分高危有害变异。这个结果是“部分突变负荷降低”的群体历史推断；Foster 2026 仍检测到孵化相关近交衰退，因此不能写成“有害基因已经清除”或“无需遗传管理”。[Dussex et al. 2021](https://doi.org/10.1016/j.xgen.2021.100002)；[Foster et al. 2026](https://doi.org/10.1111/mec.70252)（访问日期均为：2026-08-30）
18. 2019 年曲霉病暴发影响 21 只并造成 9 只死亡。基因组追踪发现暴发高峰病例关联同一个 _Aspergillus fumigatus_ 菌株，但该菌株在两座岛上都被检出而只有一座发生暴发，说明菌株是必要条件而不是充分解释。[Winter et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/)（访问日期：2026-08-30）
19. 2026-07-16 的 H5 通报只确认一只迁徙棕贼鸥检出 H5，当时没有证据表明病毒已在新西兰野生动物中传播。DOC 已在前一周开始为鸮鹦鹉等 5 个重点物种的核心繁殖种群接种疫苗；档案可把它写成预防行动，不能写成鸮鹦鹉已感染 H5。[DOC H5 update](https://www.doc.govt.nz/news/media-releases/2026-media-releases/doc-on-alert-after-h5-bird-flu-detection/)（访问日期：2026-08-30）

## 名称、标识与六阶分类

| 字段 | 推荐值 | 依据与边界 |
| --- | --- | --- |
| `id` | `species-strigops-habroptilus` | 与仓库现有 `species-{genus}-{species}` 规则一致。 |
| `slug` | `kakapo` | 使用无附加符号的稳定英文 URL；长音符只保留在展示名。 |
| `names.zh` | `鸮鹦鹉` | 沿用 TODO 主名。 |
| `names.en` | `Kākāpō` | 采用 DOC 当前拼写。[DOC](https://www.doc.govt.nz/kakapo)（访问日期：2026-08-30） |
| `names.aliases` | `['Kakapo', 'Owl Parrot']` | `Kakapo` 便于无长音符检索；New Zealand Birds Online 列出 owl-parrot。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30） |
| `scientificName` | `Strigops habroptilus` | 当前有效拼法；不使用旧数据库里的 _habroptila_。[IOC](https://www.worldbirdnames.org/new/updates/taxonomy/)；[AviList](https://www.avilist.org/checklist/v2025b/)（访问日期均为：2026-08-30） |

| 阶元 | 拉丁名 | 中文名 | 依据与边界 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 动物种级页面的仓库共用上级节点。 |
| 门 | Chordata | 脊索动物门 | 鸟类共用上级节点。 |
| 纲 | Aves | 鸟纲 | AviList 当前鸟类清单。[AviList](https://www.avilist.org/checklist/v2025b/)（访问日期：2026-08-30） |
| 目 | Psittaciformes | 鹦形目 | AviList 与 New Zealand Birds Online。[AviList](https://www.avilist.org/checklist/v2025b/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30） |
| 科 | Strigopidae | 鸮鹦鹉科 | AviList v2025b 使用 Strigopidae，并在该科收录 2 属、4 个现生种。[AviList](https://www.avilist.org/checklist/v2025b/)（访问日期：2026-08-30） |
| 属 | _Strigops_ | 鸮鹦鹉属 | New Zealand Birds Online 的接受属；本种是该属唯一现生成员。[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30） |

推荐实现：

```ts
id: 'species-strigops-habroptilus',
slug: 'kakapo',
names: {
  zh: '鸮鹦鹉',
  en: 'Kākāpō',
  aliases: ['Kakapo', 'Owl Parrot'],
},
scientificName: 'Strigops habroptilus',
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Aves', '鸟纲'),
  taxon('Psittaciformes', '鹦形目'),
  taxon('Strigopidae', '鸮鹦鹉科'),
  taxon('Strigops', '鸮鹦鹉属'),
),
```

## IUCN 与当前管理台账

### 结构化全球评估

```ts
conservation: conservation('CR', 'increasing', 2018, 'A2be'),
metrics: {
  adultLengthCm: [58, 64],
  adultMassKg: [1, 4],
  estimatedMatureIndividuals: [116, 116],
},
```

`estimatedMatureIndividuals: [116, 116]` 只复现 IUCN 2018 年成熟个体点估计。页面必须在附近写明年份，且不能将该字段解释为当前全部在世数量。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)（访问日期：2026-08-30）

### 三组不能互换的数量

| 数量 | 截点与口径 | 实施用途 | 来源 |
| ---: | --- | --- | --- |
| 116 | IUCN 2018-08-07 的成熟个体估计 | `metrics.estimatedMatureIndividuals`，必须与 2018 年绑定 | [IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)（访问日期：2026-08-30） |
| 242 | DOC 截至 2025-06-30 的完整年龄与性别普查，包含成年和幼年，不含 150 日龄以下雏鸟 | 只用于解释年度普查与年龄结构，不作为当前卡片 | [DOC annual report](https://www.doc.govt.nz/globalassets/system/ar-reporting/reporting-ar-2024-25/kakapo-population-2024-2025.html)（访问日期：2026-08-30） |
| 235 | DOC 2026-04-23 有日期公告；2026-08-30 动态页仍显示同值，全部为野外在世个体 | 当前数字卡；注释同时给公告日期和动态页访问日期 | [DOC dated release](https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/)；[DOC live page](https://www.doc.govt.nz/kakapo)（访问日期均为：2026-08-30） |

IUCN 的 `increasing` 是 2018 评估的全球趋势字段；DOC 台账从 1995 年 51 只增长到近年的两百余只也支持恢复趋势，但个别年份和繁殖季仍有死亡、孵化门槛和台账调整。正文使用“长期恢复趋势上升”，不承诺每个时间点单调增加。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)；[DOC breeding season 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)；[DOC annual report](https://www.doc.govt.nz/globalassets/system/ar-reporting/reporting-ar-2024-25/kakapo-population-2024-2025.html)（访问日期均为：2026-08-30）

## 分布、生态域、生境与海拔

推荐字段：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['大洋洲'],
  regions: [
    'Whenua Hou/Codfish Island',
    'Pukenui/Anchor Island',
    'Te Kākahu-o-Tamatea/Chalky Island',
    'Sanctuary Mountain Maungatautari',
    'Coal Island/Te Puka-Hereka',
  ],
  countries: ['新西兰'],
  endemicTo: ['新西兰'],
  range:
    '历史上广布于新西兰大陆多类植被；当前全部已知个体生活在受保护的近海岛屿或围栏大陆保护地。Whenua Hou、Pukenui 与 Te Kākahu-o-Tamatea 是三个繁殖种群，Maungatautari 和 Coal Island 为小型雄鸟适生性与风险试验。',
  center: { lat: -42.5, lng: 172 },
},
```

地图中心只承担覆盖新西兰现存地点的页面视口功能，不是种群中心、观测坐标或繁殖地。DOC 说明鸮鹦鹉在人类到来前曾广布新西兰大陆并使用多种生境；目前只生活在受保护近海岛屿和一处围栏大陆保护地。[DOC habitat and islands](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）

| `name` | `realm` | `isPrimary` | 推荐描述 | 依据与边界 |
| --- | --- | ---: | --- | --- |
| 南部陆均松与罗汉松类森林 | `terrestrial` | `true` | Whenua Hou、Pukenui 与 Te Kākahu-o-Tamatea 的现存繁殖种群利用有陆均松丰年结果的原生森林。 | 当前三处繁殖地均有陆均松，但这不是历史全分布区唯一生境。[DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30） |
| 原生森林、灌丛与林缘镶嵌 | `terrestrial` | 省略 | 历史记录涵盖多种森林和植被类型；地表路线、攀爬树木与季节食物共同构成活动空间。 | 不把当前保护岛的植被外推成历史唯一生态位。[DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30） |
| 山脊、岩台与低矮植被求偶场 | `terrestrial` | 省略 | 雄鸟在突出地形上清理小径和浅碗穴，使低频求偶声向外传播。 | 这是繁殖期行为微生境，不是全年唯一栖息地。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Merton et al. 1984](https://doi.org/10.1111/j.1474-919X.1984.tb00250.x)（访问日期均为：2026-08-30） |
| 树洞、岩穴与根系洞穴巢位 | `terrestrial` | 省略 | 雌鸟在地面或地下天然空腔、树洞、岩石和树根形成的洞穴中独自孵卵育幼。 | 画面不能把单一洞型当作固定巢结构。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30） |

不建议填写 `metrics.elevationM`。历史个体 Richard Henry 在 Fiordland 超过 1,000 米处被发现，旧 IUCN 或当前保护地的较低海拔记录不能构成物种级封闭上限；把 `[0, 300]` 写进指标会把管理范围误当成生态极限，把 `[0, 1000]` 写入又会把“超过 1,000 米”误写成上限。[DOC key kākāpō](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/key-kakapo/)（访问日期：2026-08-30）

## 体尺、外形、食性与活动

推荐体尺：

```ts
measurements: {
  length: {
    min: 58,
    max: 64,
    unit: 'cm',
    note: '成鸟全长；New Zealand Birds Online 综合范围',
  },
  weight: {
    min: 1,
    max: 4,
    unit: 'kg',
    note: '雌鸟约 1–2.5 kg，雄鸟约 2–4 kg；两性包络',
  },
},
```

外形应保留大型敦实体形、苔绿色羽毛、黄黑斑驳、淡色猫头鹰般的面盘、灰色弯曲鹦鹉喙、灰色强足、缩短而圆的翼和宽尾。面盘只是羽毛外观，不能生成猫头鹰耳羽、猛禽钩爪或朝前的捕食眼；两性没有可靠的鲜明羽色差异，大小比较图只用体型表达性二型。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[Livezey 1992](https://pubmed.ncbi.nlm.nih.gov/29865598/)（访问日期均为：2026-08-30）

推荐食性与活动字段：

```ts
diet: {
  types: ['herbivore'],
  foods: [
    '陆均松及其他罗汉松类果实与种子',
    '叶、芽与花',
    '蕨叶与根茎',
    '树皮、根、块茎与鳞茎',
    '其他季节性原生植物果实',
  ],
  description:
    '完全植食，随季节和地点更换植物部位；会把坚韧叶片压榨后留下弯月形纤维嚼团。南部繁殖年常大量利用罗汉松类果实，但局地粪便比例不代表全分布区固定食谱。',
},
activity: ['夜行性', '地栖', '善攀树', '独居为主', '求偶期雄鸟集中展示'],
tags: ['新西兰特有', '不会飞', '夜行鹦鹉', '陆均松丰年繁殖', '求偶场繁殖', '重点保育'],
```

食物与纤维嚼团来自 DOC 现行自然史页，繁殖年饮食变化来自 1981–1998 年两地粪便研究。活动字段允许“独居为主”而不写成绝对独居，因为 DOC 也记录雌鸟和幼鸟偶尔形成 2–4 只小群。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Wilson et al. 2006](https://www.birdsnz.org.nz/publications/diet-of-kakapo-in-breeding-and-non-breeding-years-on-codfish-island-whenua-hou-and-stewart-island/)（访问日期均为：2026-08-30）

不建议填写 `metrics.lifespanYears`。New Zealand Birds Online 只确认最大寿命未知且超过 50 年；DOC 对个别鸟的年龄估计不能拼成物种寿命上限。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[DOC key kākāpō](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/key-kakapo/)（访问日期均为：2026-08-30）

## 繁殖、遗传与疾病边界

### 求偶与育幼

- 雄鸟的 track-and-bowl 求偶系统位于固定展示地点，碗穴与小径不提供巢位或食物；无永久配偶关系、雄性占主导的展示场和短时雌鸟访问共同支持求偶场繁殖判定。[Merton et al. 1984](https://doi.org/10.1111/j.1474-919X.1984.tb00250.x)（访问日期：2026-08-30）
- DOC 当前页记录轰鸣约每 1–2 秒一次、可传数百米，整夜展示最长可达约 8 小时并持续 2–3 个月。1984 年研究曾在特定地形报告数公里可闻；档案采用 DOC 当前较保守的“数百米”，不把最佳传播条件当作固定听距。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Merton et al. 1984](https://doi.org/10.1111/j.1474-919X.1984.tb00250.x)（访问日期均为：2026-08-30）
- 雌鸟每窝 1–4 枚，独自孵化 27–31 天；幼鸟平均约 70 天离巢，平均约 9 个月独立。母鸟夜间离巢觅食造成天然无人守巢时段，也放大了外来嗅觉捕食者的风险。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30）

### 丰年触发

DOC 现行管理资料把陆均松丰年列为当前 3 个南部繁殖种群唯一已知的繁殖触发信号，常见间隔 2–4 年。Harper 等对 Whenua Hou 的研究发现，在其时间序列中，筑巢只出现在 10 月陆均松结果枝梢比例超过 10% 的年份；作者提出未熟果的感知、化学或营养信号等假说，并明确指出补充饲料未被证明单独触发筑巢。实施可写“随陆均松丰年繁殖”，不能写“吃到成熟红果后立刻排卵”或把阈值外推到全部地点。[DOC breeding season 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)；[Harper et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf)（访问日期均为：2026-08-30）

### 遗传与孵化失败

三个结论必须并存：

1. 现代种群经历严重瓶颈并保持低遗传多样性；全种群基因组和长期个体资料可以辅助配对、转移、疾病与繁殖决策。[Guhlin et al. 2023](https://doi.org/10.1038/s41559-023-02165-y)（访问日期：2026-08-30）
2. 2026 年研究显示雌鸟全基因组近交程度越高，卵孵化成功率越低，且关联呈多基因结构。[Foster et al. 2026](https://doi.org/10.1111/mec.70252)（访问日期：2026-08-30）
3. Rakiura 谱系可能清除了一部分高危变异，但这不否定当前的近交衰退，也不支持停止遗传管理。[Dussex et al. 2021](https://doi.org/10.1016/j.xgen.2021.100002)；[Foster et al. 2026](https://doi.org/10.1111/mec.70252)（访问日期均为：2026-08-30）

卵的主要诊断边界也应进入文案：约 61% 的历史卵未孵化，但 124 枚表面未发育卵中 72% 已受精，早期胚胎死亡比简单不育更能解释失败。不要沿用“约 40% 卵不育”的蜡照外观估计。[Savage et al. 2022](https://doi.org/10.1111/acv.12746)（访问日期：2026-08-30）

### 疾病

曲霉病是已经发生过的种级事件：2019 年 21 只受影响、9 只死亡；单一菌株与高峰病例关联，但环境与宿主条件仍参与暴发。H5 则是 2026 年正在应对的外部风险：截至 2026-07-16，只有一只棕贼鸥检出，尚无新西兰野生动物传播证据，DOC 已给核心繁殖种群启动预防接种。两个病原不能混写，图片也不能表现病鸟或断言疫苗已经阻断传播。[Winter et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/)；[DOC H5 update](https://www.doc.govt.nz/news/media-releases/2026-media-releases/doc-on-alert-after-h5-bird-flu-detection/)（访问日期均为：2026-08-30）

## 推荐摘要、描述与标签

```ts
summary:
  '新西兰特有的夜行、不会飞的大型鹦鹉；雄鸟在山脊碗穴发出低频轰鸣，雌鸟随陆均松丰年独自筑巢育幼。',
description:
  '鸮鹦鹉是鸮鹦鹉属唯一现生种。它以苔绿斑驳羽色藏在森林地表，夜间步行和攀树取食植物；繁殖年里，雄鸟在求偶场持续轰鸣，雌鸟选偶后独自承担 1–4 枚卵和幼鸟。IUCN 2018 年仍将其列为极危、趋势上升，当时估计 116 只成熟个体；DOC 在 2026-08-30 的动态页显示 235 只全龄在世野外个体。当前恢复依赖安全生境、逐只遥测、巢与健康管理、遗传决策和疾病防范。',
featured: true,
publishedAt: '2026-08-30',
updatedAt: '2026-08-30',
```

摘要的行为、繁殖和食性边界来自 DOC 与 New Zealand Birds Online；描述中的两个种群数字分别绑定 IUCN 2018 和 DOC 2026 页面快照。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)；[DOC live page](https://www.doc.govt.nz/kakapo)（访问日期均为：2026-08-30）

## 六个故事段落

以下 6 段可直接转成 `storySections`。

### 01 翅膀留作平衡，森林改在脚下展开

- `key`: `night-on-foot`
- `label`: `夜行地栖`
- `title`: `翅膀留作平衡，森林改在脚下展开`
- `body`: `白天，鸮鹦鹉在地面或树上休息；入夜后，它沿熟悉路线步行觅食，也会用强足攀上约 20 米高的陆均松。短圆翼已经不能提供主动飞行，只帮助平衡和缓冲跌落；体重较轻的雌鸟偶尔能滑过约 3–4 米空隙。`
- 依据：[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Livezey 1992](https://pubmed.ncbi.nlm.nih.gov/29865598/)（访问日期均为：2026-08-30）

### 02 一枚纤维嚼团留在枝梢

- `key`: `plant-chews`
- `label`: `植物食谱`
- `title`: `一枚纤维嚼团留在枝梢`
- `body`: `鸮鹦鹉只吃植物，却不只吃果实。叶、芽、花、蕨叶、树皮、根、根茎、块茎、果实和种子随季节轮换；面对坚韧叶片，它用足把叶片拉过喙缘，压榨可食部分，把纤维留成弯月形嚼团。`
- 依据：[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）

### 03 雄鸟把山脊挖成低频舞台

- `key`: `boom-lek`
- `label`: `求偶声场`
- `title`: `雄鸟把山脊挖成低频舞台`
- `body`: `繁殖年里，雄鸟在突出山脊清出小径与浅碗穴，鼓起胸部气囊，约每 1–2 秒发出一次低频轰鸣，再插入金属般的 ching 帮助雌鸟定位。雌鸟走过求偶场选择配偶；交配结束后，雄鸟不参与筑巢、孵卵或育幼。`
- 依据：[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Merton et al. 1984](https://doi.org/10.1111/j.1474-919X.1984.tb00250.x)（访问日期均为：2026-08-30）

### 04 未熟陆均松果预告繁殖年

- `key`: `rimu-mast-calendar`
- `label`: `丰年繁殖`
- `title`: `未熟陆均松果预告繁殖年`
- `body`: `当前南部繁殖种群通常只在陆均松丰年繁殖，间隔约 2–4 年。Whenua Hou 的时间序列把筑巢与春季未熟果量联系起来，但究竟是营养、化学还是认知信号仍未确定；普通补充饲料可以改善体况，却没有被证明能单独启动繁殖。`
- 依据：[DOC breeding season 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)；[Harper et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf)（访问日期均为：2026-08-30）

### 05 雌鸟在夜里独自往返巢穴

- `key`: `solo-mother`
- `label`: `独自育幼`
- `title`: `雌鸟在夜里独自往返巢穴`
- `body`: `雌鸟在树洞、岩穴或根系洞穴中产下 1–4 枚卵，独自孵化 27–31 天。幼鸟平均约 70 日龄离巢，平均约 9 个月独立；母鸟夜间必须离巢觅食，这段无人守巢时间曾让卵和幼鸟格外容易遭到外来哺乳动物捕食。`
- 依据：[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期均为：2026-08-30）

### 06 每一只都进入保护台账

- `key`: `every-bird-ledger`
- `label`: `逐只守护`
- `title`: `每一只都进入保护台账`
- `body`: `每只鸮鹦鹉都佩戴智能发射器，接受定期健康检查并进入全国数据库；繁殖期另行监测巢穴。DOC 在 2026 年 4 月报告 235 只，8 月 30 日动态页仍显示同值；这个数字统计全龄在世野外个体，IUCN 2018 年的 116 只则是成熟个体估计。基因组配对、人工孵化、疾病应对和新安全生境共同决定下一步恢复空间。`
- 依据：[DOC current conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)；[DOC 2026-04-23](https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/)；[DOC live page](https://www.doc.govt.nz/kakapo)；[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)；[Guhlin et al. 2023](https://doi.org/10.1038/s41559-023-02165-y)（访问日期均为：2026-08-30）

## 可展示关键事实

建议 `keyFacts` 使用以下 24 项，超过最低 15 项。每项只表达来源能够支持的边界。

| # | 推荐字符串 | 依据与边界 |
| ---: | --- | --- |
| 1 | 鸮鹦鹉是鸮鹦鹉属唯一现生种；鸮鹦鹉科还包含另一属的现生成员。 | [AviList](https://www.avilist.org/checklist/v2025b/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30） |
| 2 | IOC v15.1 将旧拼法 _Strigops habroptila_ 改回当前有效名 _Strigops habroptilus_。 | [IOC](https://www.worldbirdnames.org/new/updates/taxonomy/)（访问日期：2026-08-30） |
| 3 | 成鸟全长约 58–64 厘米。 | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30） |
| 4 | 雄鸟约 2–4 千克，雌鸟约 1–2.5 千克；雄鸟平均明显更重。 | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[Eason et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_27.pdf)（访问日期均为：2026-08-30） |
| 5 | 它白天休息、夜间觅食，是夜行性鹦鹉。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 6 | 它不会主动飞行，短翼用于平衡和缓冲跌落；较轻的雌鸟可短距滑翔约 3–4 米。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 7 | 强足可让它攀上约 20 米高的陆均松，也能一次步行数公里。 | 这是 DOC 行为页的观察性概括，不是每只个体固定极限。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 8 | 食性完全植食，涵盖果实、种子、叶、芽、花、树皮、蕨叶、根、根茎和块茎。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30） |
| 9 | 它会压榨坚韧叶片并留下弯月形纤维嚼团。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 10 | Whenua Hou 与 Rakiura 的粪便研究显示，罗汉松类果实在繁殖年食谱中更常见。 | 局地 1981–1998 年资料，不外推固定比例。[Wilson et al. 2006](https://www.birdsnz.org.nz/publications/diet-of-kakapo-in-breeding-and-non-breeding-years-on-codfish-island-whenua-hou-and-stewart-island/)（访问日期：2026-08-30） |
| 11 | 当前南部繁殖种群随陆均松丰年繁殖，常见间隔约 2–4 年。 | [DOC breeding 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)（访问日期：2026-08-30） |
| 12 | 补充饲料改善体况和育雏资源，但没有被证明能单独触发筑巢。 | [Harper et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf)；[DOC current conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)（访问日期均为：2026-08-30） |
| 13 | 雄鸟在固定的 track-and-bowl 求偶场展示，鸮鹦鹉是唯一已知采用求偶场繁殖的鹦鹉。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[Merton et al. 1984](https://doi.org/10.1111/j.1474-919X.1984.tb00250.x)（访问日期均为：2026-08-30） |
| 14 | 雄鸟鼓起胸部气囊，约每 1–2 秒轰鸣一次，并用 ching 帮助雌鸟定位。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 15 | 一晚展示最长可达约 8 小时，并持续 2–3 个月；这是繁殖期上限式概括，不是每晚固定时长。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 16 | 交配后雄鸟不参与照护，雌鸟独自筑巢、孵卵和育幼。 | [DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)（访问日期：2026-08-30） |
| 17 | 每窝 1–4 枚，孵化 27–31 天、平均约 29 天。 | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30） |
| 18 | 幼鸟平均约 70 日龄离巢，平均约 9 个月独立。 | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30） |
| 19 | IUCN 2018 年评为极危、趋势上升、标准 A2be，当时估计 116 只成熟个体。 | [IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)（访问日期：2026-08-30） |
| 20 | DOC 2026-04-23 报告 235 只；2026-08-30 动态页仍显示 235 只全龄在世野外个体。 | [DOC dated release](https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/)；[DOC live page](https://www.doc.govt.nz/kakapo)（访问日期均为：2026-08-30） |
| 21 | 当前有 3 个繁殖种群，另有 Maungatautari 与 Coal Island 的小型雄鸟试验。 | [DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[DOC breeding 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)（访问日期均为：2026-08-30） |
| 22 | 近四十年约 61% 卵未孵化；表面未发育卵中多数实际已经受精，早期胚胎死亡是主要问题。 | [Savage et al. 2022](https://doi.org/10.1111/acv.12746)（访问日期：2026-08-30） |
| 23 | 148 只个体的研究显示，雌鸟全基因组近交程度升高与较低孵化成功率相关。 | [Foster et al. 2026](https://doi.org/10.1111/mec.70252)（访问日期：2026-08-30） |
| 24 | 2019 年曲霉病暴发影响 21 只、造成 9 只死亡；关联菌株并不足以单独解释暴发。 | [Winter et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/)（访问日期：2026-08-30） |

## 威胁与保护行动

### 推荐 `threats`

| 推荐字符串 | 依据与边界 |
| --- | --- |
| 外来猫、白鼬和鼠类的捕食，以及保护地再次入侵；Coal Island 试验地仍允许评估低密度白鼬风险 | DOC 明确列出外来哺乳动物与再入侵风险；不能把 Coal Island 说成完全无白鼬。[DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[DOC conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)（访问日期均为：2026-08-30） |
| 低遗传多样性和近交衰退造成的孵化失败，叠加丰年间隔长、雌鸟独自育幼的缓慢恢复速度 | 近交与孵化关系来自 2026 基因组研究；不能把全部失败归因于单一基因。[Foster et al. 2026](https://doi.org/10.1111/mec.70252)；[Savage et al. 2022](https://doi.org/10.1111/acv.12746)（访问日期均为：2026-08-30） |
| 曲霉病等突发传染病会重创集中小种群，病原菌株、环境和宿主条件需要合并评估 | 2019 年曲霉病已经发生；关联菌株不足以单独解释暴发。[Winter et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/)（访问日期：2026-08-30） |
| 可容纳繁殖种群的大型安全生境不足，使恢复持续依赖少数岛屿、围栏与密集管理 | DOC 把寻找新适生地列为最紧迫挑战，并把 Predator Free Rakiura 视为长期方向。[DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)（访问日期：2026-08-30） |

### 推荐 `conservationActions`

| 推荐字符串 | 依据与边界 |
| --- | --- |
| 维持保护岛和围栏保护地的检疫、入侵检测与捕食者控制，并扩大可容纳繁殖种群的大型安全生境 | [DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)；[DOC conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)（访问日期均为：2026-08-30） |
| 为每只鸟使用智能发射器、自动站和至少年度健康检查，把体重、血样、寄生虫与病史写入全国数据库；繁殖期另行监测巢穴 | [DOC conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)（访问日期：2026-08-30） |
| 在风险明确时使用补充饲料、换卵与寄养、人工孵化和手养，并在不同保护地试验更低干预的自然育雏 | [DOC conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)；[DOC breeding 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)（访问日期均为：2026-08-30） |
| 结合全种群基因组、亲缘和表型资料安排配对、人工授精与转移，减少近交并保留稀有谱系 | [Guhlin et al. 2023](https://doi.org/10.1038/s41559-023-02165-y)；[Foster et al. 2026](https://doi.org/10.1111/mec.70252)（访问日期均为：2026-08-30） |
| 维持兽医监测和暴发应对，结合病原基因组与环境采样区分关联菌株、宿主条件和场地风险 | [Winter et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/)（访问日期：2026-08-30） |

## 四张 featured stats

`featuredStats` 精确使用 4 项：

| `key` | `label` | `value` | `unit` | `note` | 依据 |
| --- | --- | --- | --- | --- | --- |
| `global-iucn-status` | IUCN 全球等级 | `CR` | 极危 | `2018 年评估，趋势上升；截至 2026-08-30 未到十年过期线` | [IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)；[IUCN process](https://nrl.iucnredlist.org/assessment/process)（访问日期均为：2026-08-30） |
| `living-population-snapshot` | 在世管理台账 | `235` | 只 | `DOC 2026-04-23 有日期公告；2026-08-30 动态页同值，全龄且全部为野外个体` | [DOC dated release](https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/)；[DOC live page](https://www.doc.govt.nz/kakapo)（访问日期均为：2026-08-30） |
| `male-body-mass` | 雄鸟体重 | `2–4` | 千克 | `雌鸟约 1–2.5 千克；用于表达体重性二型，不是每只雄鸟固定范围` | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期：2026-08-30） |
| `rimu-breeding-interval` | 繁殖间隔 | `2–4` | 年 | `当前南部种群随陆均松丰年繁殖；不是全历史范围固定时钟` | [DOC breeding 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/)；[Harper et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf)（访问日期均为：2026-08-30） |

不要用“90 年寿命”“最大飞行距离”或 2026 孵化直播数字补卡片。现有官方资料只确认寿命超过 50 年且上限未知；短滑翔不是飞行能力；孵化数也不等于官方种群。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[DOC first chick 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/first-kakapo-chick-in-four-years-hatches-on-valentines-day/)（访问日期均为：2026-08-30）

## 六张图片场景与科学边界

全部采用 3:2 横图、1536 × 1024、sRGB、单帧不透明图像，无文字、标尺、图标、商标、签名或水印。源 PNG 放入 `src/assets/source/species/kakapo/`，运行时 WebP 放入 `public/images/species/kakapo/`。统一 credit 建议 `Fauna Atlas · AI 生成科学情景重建`。

通用形态约束：主体必须是苔绿色、黄黑斑驳的大型敦实鹦鹉，淡色圆形面盘、灰色弯曲鹦鹉喙、灰色强壮对趾足、短圆翼和宽尾。禁止猫头鹰耳羽、猛禽爪、几维鸟细长喙、啄羊鹦鹉式长尖翼、飞行姿态、荧光羽色或宠物笼具。[New Zealand Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[Livezey 1992](https://pubmed.ncbi.nlm.nih.gov/29865598/)（访问日期均为：2026-08-30）

| 序号与用途 | 稳定文件名 | 场景与构图 | 科学边界与验收点 | 建议 caption |
| --- | --- | --- | --- | --- |
| 01 封面 | `01-moss-forest-nocturnal-portrait-source.png` / `01-moss-forest-nocturnal-portrait.webp` | 暮光中的新西兰温带森林地面，恰好一只完整成鸟站在苔藓与落叶间，面盘、喙、短翼和尾都清楚。 | 夜景不代表已核实地点、保护区身份或捕食者缺失；足趾受站姿遮挡，不用作对趾足证据。 | `一只绿色斑驳的鸮鹦鹉出现在暮光森林地面；画面不记录个体或地点。` |
| 02 形态侧写 | `02-full-body-diagnostic-profile-source.png` / `02-full-body-diagnostic-profile.webp` | 恰好一只完整成鸟以左向三分之二侧面站在潮湿落叶地，苔绿斑驳羽毛、面盘、钩喙、短翼、尾和粗壮腿可见。 | 透视不足以证明趾向，静帧也不能确定性别、年龄、体重或飞行能力。 | `完整侧写支持定性识别；尺寸、性别和足趾结构仍须依靠独立证据。` |
| 03 求偶场 | `03-male-track-and-bowl-booming-source.png` / `03-male-track-and-bowl-booming.webp` | 夜间低矮植被中，一只鸟站在中央裸土浅凹内，数条窄径向周围放射。 | 场景表达 track-and-bowl 结构；静帧不能判定个体性别、正在发声、声距、频率、展示时长或场地尺寸。 | `中央浅凹与放射小径重建求偶场结构，不把张喙姿态当作声音证据。` |
| 04 陆均松取食 | `04-rimu-fruit-tree-foraging-source.png` / `04-rimu-fruit-tree-foraging.webp` | 恰好一只鸟抓握枝条，钩喙靠近细垂枝叶与带暗色种子端部的红橙色果实结构。 | 按陆均松结果形态重建；像素不能鉴定植物或鸟的个体、证明吞食、标记丰年或证明一次取食触发繁殖。 | `鸮鹦鹉会攀树取食；画面只重建陆均松结果情景，不证明繁殖触发。` |
| 05 地面巢卵 | `05-female-ground-cavity-two-eggs-source.png` / `05-female-ground-cavity-two-eggs.webp` | 树根形成的地面空腔中，恰好一只鸟站在恰好两枚完整白卵旁。 | 羽色不能判定成鸟性别；两枚卵不代表完整窝卵数，也不能证明亲缘、孵化行为、受精状态或孵化期。 | `两枚白卵只表现合法窝卵范围内的一种巢景，不能据图推定完整窝卵数。` |
| 06 非接触遥测 | `06-radio-telemetry-island-monitoring-source.png` / `06-radio-telemetry-island-monitoring.webp` | 苔藓森林中，恰好一名人员在远处手持 Yagi 定向天线和接收器，前景恰好一只鸟，双方没有接触。 | 鸟身没有可辨发射器；静帧不能证明收到信号，也不能识别人员、机构、地点、鸟的身份或监测结果。 | `野外人员持定向天线开展非接触监测；画面不提供信号或个体身份数据。` |

图片 03 的碗穴与小径、图片 04 的攀树取食、图片 05 的地面巢位与白卵，以及图片 06 的非接触遥测场景分别由 DOC 行为、繁殖和保护页面支持。最终生成提示词、逐图审查与压缩台账见 `src/assets/source/species/kakapo/README.md`。[DOC behaviour](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/)；[DOC current conservation](https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/)（访问日期均为：2026-08-30）

## 建议 SpeciesSource 登记

以下精确选择 **18 个唯一 URL**，满足 schema 允许的 `conservation`、`taxonomy`、`distribution`、`ecology`、`general` 五种 `kind`。它们直接覆盖当前学名、日期化种群快照、雏鸟纳入门槛和页面主要生态叙述；ICZN、年度年龄结构报告、H5 通报、Eason、Livezey、Dussex 与 Merton 等资料保留作研究交叉核验，不重复占用展示来源数组。

```ts
const KAKAPO_SOURCES = [
  {
    title: 'AviList v2025b — Global avian checklist',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'IOC World Bird List — Taxonomic updates for Strigops habroptilus',
    url: 'https://www.worldbirdnames.org/new/updates/taxonomy/',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'New Zealand Birds Online — Kākāpō | Kakapo',
    url: 'https://www.nzbirdsonline.org.nz/species/kakapo',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'IUCN Red List 2018 — Strigops habroptila assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'IUCN Red List — Assessment process and ten-year update rule',
    url: 'https://nrl.iucnredlist.org/assessment/process',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC — Kākāpō Recovery current population',
    url: 'https://www.doc.govt.nz/kakapo',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC 2026-04-23 — Population snapshot of 235 kākāpō',
    url: 'https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC 2022 — Official population threshold for young kākāpō',
    url: 'https://www.doc.govt.nz/news/media-releases/2022-media-releases/bumper-breeding-season-boosts-kakapo-population/',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC — Kākāpō habitat and islands',
    url: 'https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC — Kākāpō behaviour',
    url: 'https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/behaviour/',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC — Current kākāpō conservation',
    url: 'https://www.doc.govt.nz/our-work/kakapo-recovery/what-we-do/current-conservation/',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'DOC 2026 — Kākāpō breeding season officially underway',
    url: 'https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Harper et al. 2006 — What triggers nesting of kākāpō?',
    url: 'https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Wilson et al. 2006 — Diet in breeding and non-breeding years',
    url: 'https://www.birdsnz.org.nz/publications/diet-of-kakapo-in-breeding-and-non-breeding-years-on-codfish-island-whenua-hou-and-stewart-island/',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Savage et al. 2022 — Early embryo mortality drives low hatching success',
    url: 'https://doi.org/10.1111/acv.12746',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Guhlin et al. 2023 — Species-wide genomics of kākāpō',
    url: 'https://doi.org/10.1038/s41559-023-02165-y',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Foster et al. 2026 — Genomic architecture of inbreeding depression',
    url: 'https://doi.org/10.1111/mec.70252',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Winter et al. 2022 — Kākāpō aspergillosis outbreak genomics',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
] satisfies readonly SpeciesSource[];
```

`IUCN Red List 2018` 的正式题名仍使用旧拼法 _habroptila_，所以来源标题忠实保留；物种对象继续使用现行 _habroptilus_。[IOC taxonomic updates](https://www.worldbirdnames.org/new/updates/taxonomy/)；[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)（访问日期均为：2026-08-30）

## 关键实施风险

1. **两个种群字段最容易串线**：`235` 是 DOC 2026 全龄在世管理快照；`116` 是 IUCN 2018 成熟个体估计。测试要同时检查数值、年份和边界词，不能只检查数字。[DOC](https://www.doc.govt.nz/kakapo)；[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en)（访问日期均为：2026-08-30）
2. **IUCN 尚未正式过期**：2018-08-07 至 2026-08-30 只有 8 年多。正文可提示评估年龄，不能写“已过期”；无新评估时 2028-08-07 后才越过十年线。[IUCN process](https://nrl.iucnredlist.org/assessment/process)（访问日期：2026-08-30）
3. **动态页不是普查日期**：DOC live page 的 235 是访问日快照，只有 2026-04-23 公告提供同值的明确发布日期。数字卡 note 必须同时交代两层时间边界。[DOC live page](https://www.doc.govt.nz/kakapo)；[DOC dated release](https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/)（访问日期均为：2026-08-30）
4. **雏鸟统计有纳入门槛**：孵化、离巢、150 日龄和官方台账不是同一事件。不要从 2026 孵化新闻自行推导当前总数。[DOC 2022 protocol](https://www.doc.govt.nz/news/media-releases/2022-media-releases/bumper-breeding-season-boosts-kakapo-population/)；[DOC first chick 2026](https://www.doc.govt.nz/news/media-releases/2026-media-releases/first-kakapo-chick-in-four-years-hatches-on-valentines-day/)（访问日期均为：2026-08-30）
5. **当前地点的安全程度不同**：三处繁殖地、围栏大陆试验与 Coal Island 低密度白鼬风险试验承担不同功能。范围文案和图片不能把每处都说成完全无捕食者。[DOC habitat](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/habitat-and-islands/)（访问日期：2026-08-30）
6. **陆均松丰年不是全历史生态的万能解释**：2–4 年是当前南部种群口径；北部历史地点和其他植物群落的触发信号仍不清楚，补充饲料也未被证明单独触发。[Harper et al. 2006](https://www.birdsnz.org.nz/wp-content/uploads/2021/12/Notornis_53_1_160.pdf)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）
7. **海拔和寿命没有可靠封闭范围**：一只历史个体在超过 1,000 米处被发现，最大寿命只确认超过 50 年且未知。两个 metrics 都留空。[DOC key kākāpō](https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kakapo/key-kakapo/)；[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)（访问日期均为：2026-08-30）
8. **近交与疾病不能写成单因果故事**：近交对孵化成功率呈多基因关联；曲霉菌株不足以单独造成暴发；H5 截至 2026-07-16 未有鸮鹦鹉感染证据。[Foster et al. 2026](https://doi.org/10.1111/mec.70252)；[Winter et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/)；[DOC H5 update](https://www.doc.govt.nz/news/media-releases/2026-media-releases/doc-on-alert-after-h5-bird-flu-detection/)（访问日期均为：2026-08-30）
9. **生成图容易混入猫头鹰和飞行鹦鹉结构**：六图都要人工核对灰色鹦鹉喙、对趾足、短圆翼、苔绿斑驳和淡色面盘；禁止耳羽、猛禽足和展翼飞行。[NZ Birds Online](https://www.nzbirdsonline.org.nz/species/kakapo)；[Livezey 1992](https://pubmed.ncbi.nlm.nih.gov/29865598/)（访问日期均为：2026-08-30）

## 定向测试与 TODO 收尾

### 建议新增档案测试

在 `tests/taxonomy.test.mjs` 增加 `registers the Kākāpō as a complete Strigops habroptilus profile`，至少断言：

```js
assert.equal(profile.id, 'species-strigops-habroptilus');
assert.equal(profile.slug, 'kakapo');
assert.equal(profile.names.zh, '鸮鹦鹉');
assert.equal(profile.names.en, 'Kākāpō');
assert.equal(profile.scientificName, 'Strigops habroptilus');
assert.deepEqual(
  getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
    rank,
    taxon.scientificName,
  ]),
  [
    ['kingdom', 'Animalia'],
    ['phylum', 'Chordata'],
    ['class', 'Aves'],
    ['order', 'Psittaciformes'],
    ['family', 'Strigopidae'],
    ['genus', 'Strigops'],
  ],
);
assert.deepEqual(
  {
    code: profile.conservation.code,
    trend: profile.conservation.trend,
    assessedYear: profile.conservation.assessedYear,
    criteria: profile.conservation.criteria,
  },
  { code: 'CR', trend: 'increasing', assessedYear: 2018, criteria: 'A2be' },
);
assert.deepEqual(profile.distribution.realms, ['terrestrial']);
assert.deepEqual(profile.distribution.countries, ['新西兰']);
assert.deepEqual(profile.distribution.endemicTo, ['新西兰']);
assert.deepEqual(profile.metrics, {
  adultLengthCm: [58, 64],
  adultMassKg: [1, 4],
  estimatedMatureIndividuals: [116, 116],
});
assert.equal(profile.storySections?.length, 6);
assert.ok(profile.keyFacts.length >= 15);
assert.equal(profile.featuredStats.length, 4);
assert.equal(profile.sources.length, 18);
assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
```

使用现有 `assertGeneratedImageSet` 验证以下 6 个 basename：

```js
await assertGeneratedImageSet({
  profile,
  slug: 'kakapo',
  basenames: [
    '01-moss-forest-nocturnal-portrait',
    '02-full-body-diagnostic-profile',
    '03-male-track-and-bowl-booming',
    '04-rimu-fruit-tree-foraging',
    '05-female-ground-cavity-two-eggs',
    '06-radio-telemetry-island-monitoring',
  ],
});
```

再把 `summary`、`description`、故事、facts、threats、actions、stats note 和 gallery caption 合并为 `editorialText`，定向检查：

- 同时出现 `235`、`2026-04-23` 或 `2026 年 4 月 23 日`、`116`、`2018`，并出现“全龄/在世/管理台账”和“成熟个体”两个不同口径。
- 明确 IUCN 评估截至 2026-08-30“未过期/未到十年”，不能出现“2018 评估已过期”。
- 出现“雏鸟达到 150 日龄或离巢后才进入官方台账”的边界，避免从孵化数加总。
- 出现 `1–4` 枚、`27–31` 天、约 `70` 天、约 `9` 个月，并明确雌鸟独自照护。
- 出现 `2–4` 年、陆均松丰年和“北部/其他地点触发机制不确定或补充饲料未证实触发”。
- 出现 2019 曲霉病 `21` 只受影响、`9` 只死亡及“单一菌株不足以单独解释”。
- 出现近交程度与较低孵化成功率相关，且不宣称已经清除全部有害变异。

### 分类总数更新

当前测试由 80 份档案、Chordata 59、Aves 11 出发。完成鸮鹦鹉后，`counts descendant species on shared taxon branches` 应更新并新增：

```js
assert.equal(species.length, 81);
assert.equal(findTaxon(tree, 'kingdom', 'Animalia')?.speciesCount, 81);
assert.equal(findTaxon(tree, 'phylum', 'Chordata')?.speciesCount, 60);
assert.equal(findTaxon(tree, 'class', 'Aves')?.speciesCount, 12);
assert.equal(findTaxon(tree, 'order', 'Psittaciformes')?.speciesCount, 1);
assert.equal(findTaxon(tree, 'family', 'Strigopidae')?.speciesCount, 1);
assert.equal(findTaxon(tree, 'genus', 'Strigops')?.speciesCount, 1);
```

### TODO 数量

只有物种数据、6 张源 PNG、6 张运行时 WebP、素材 README 与总索引、定向测试、typecheck、test、build 和静态图片检查全部通过后，才从 `docs/todo.md` 删除鸮鹦鹉这一行。届时应更新为：

- 物种档案：80 → **81**
- 鸟纲：11 → **12**
- 脊索动物门：仓库实际分类树 59 → **60**；当前 TODO 摘要写成 60，属于加档前已偏高 1 的旧计数，更新时应以测试树为准，不能写 61
- 首批剩余：28 → **27**
- 前两批剩余：58 → **57**
- 三批合计剩余：88 → **87**
- 鸟类下一条必须仍是麝雉 _Opisthocomus hoazin_

### 最终验证

- [ ] `npm run typecheck`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] ImageMagick 静态检查 12 个图像文件均为 1536 × 1024、sRGB、opaque、单帧，6 个源 PNG 与 6 个运行时 WebP 哈希各不相同
- [ ] 不打开 GUI 或 headless browser
