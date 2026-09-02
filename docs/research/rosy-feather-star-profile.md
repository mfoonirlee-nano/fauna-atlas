# 海羊齿（*Antedon bifida*）物种档案研究

- 研究日期：2026-09-02
- 目标：完成 `docs/todo.md` 中“海羊齿 *Antedon bifida*”物种档案所需的分类、名称、形态、分布、生境、摄食、行为与保护事实
- 页面建议：`rosy-feather-star`
- 证据口径：分类与英文名采用 WoRMS；分布区分物种、两个亚种和旧鉴定；形态与生境采用海洋机构资料；摄食机制、食谱、行为和生态关系采用物种级原始研究

## 结论摘要

1. WoRMS 接受 ***Antedon bifida* (Pennant, 1777)**，AphiaID 为 **124201**。仓库六级分类链使用 `Animalia / Echinodermata / Crinoidea / Comatulida / Antedonidae / Antedon`。[WoRMS taxon](https://www.marinespecies.org/aphia.php?p=taxdetails&id=124201) [WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/124201)
2. 中文主名沿用 TODO 的“**海羊齿**”。2025 年《水产学报》综述也把 *Antedon bifida* 对应为“海羊齿”，但该词也可泛指 *Antedon* 属或无柄海百合，页面首次出现时必须带学名。英文主名采用 WoRMS 的 **Rosy Feather-star**。[WoRMS vernaculars](https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/124201) [陈慕雁等 2025](https://doi.org/10.11964/jfc.20241014721)
3. 成体通常有五对、共十只羽状腕，单腕约 5 至 10 厘米；中央盘很小，成体没有永久柄。盘的反口面长有短而分节的卷枝，可抓住岩石、巨砾、海藻或其他底栖生物，也可帮助爬行。[MarLIN](https://www.marlin.ac.uk/species/detail/1521)
4. 每只腕两侧排列羽枝。羽枝的食物沟两侧分布长、中、短三种管足组成的三联体。长、中管足用黏液直接截住悬浮颗粒，短管足协助形成食团，纤毛再沿食物沟把食团送到盘中央的口。研究没有发现独立的“黏液网”或“黏液线”。[Lahaye & Jangoux 1985](https://doi.org/10.1007/BF00397517) [Nichols 1960](https://doi.org/10.1242/jcs.s3-101.54.105)
5. 胃含物研究记录了碎屑、硅藻、甲藻、颗石藻、硅鞭毛虫、砂壳纤毛虫，以及小型桡足类和甲壳类无节幼体残骸。因此页面可把它写成悬浮滤食者，食性标签建议使用 `filter-feeder + omnivore`。[Hunt 1925](https://doi.org/10.1017/S0025315400008079)
6. 欧洲名义亚种的稳健范围从设得兰和不列颠群岛向南到法国大西洋岸、西班牙北部和葡萄牙。WoRMS 还接受南方亚种 *A. b. moroccana*，其记录覆盖马卡罗尼西亚、摩洛哥至西非并进入地中海局部海域。加勒比和委内瑞拉记录牵涉旧鉴定及 *A. duebenii* 的历史处理，不应直接写入结构化范围。[WoRMS *A. b. bifida*](https://www.marinespecies.org/aphia.php?p=taxdetails&id=714189) [Micael et al. 2019](https://doi.org/10.11646/zootaxa.4639.1.1) [Meyer et al. 1978](https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=1127&context=occ_facarticles)
7. 它从极低潮线附近延伸到约 450 米，英爱一带在 15 至 40 米最常见。它常攀附在有水流的岩壁、沟槽、巨砾和大型藻类上。爱尔兰五处野外研究发现它能改变腕和羽枝姿势，应对定向水流、波浪往复流和多向水流，研究者没有观察到固定的昼夜或潮汐摄食节律。[MarLIN](https://www.marlin.ac.uk/species/detail/1521) [La Touche 1978](https://doi.org/10.1017/S0025315400056836)
8. 它不是固着不动的“植物”。卷枝能让成体爬行，腕的交替拍动能让它短距离游泳；受到刺激时，同一辐射的一对腕交替屈伸。[Moore 1924](https://doi.org/10.1085/jgp.6.3.281) [MarLIN](https://www.marlin.ac.uk/species/detail/1521)
9. EUNIS 明确写明 IUCN 尚未评估本种，也未列出相关欧洲法律文本。仓库保护字段应使用 `NE / unknown`，不能写成 `LC`、稳定或常见等全球结论。[EUNIS](https://eunis.eea.europa.eu/species/44201)

## 名称与分类口径

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| `names.zh` | 海羊齿 | TODO 与 2025 中文同行评议综述采用；不是单一权威中文标准名 |
| `names.en` | Rosy Feather-star | WoRMS 原文为 `rosy feather-star` |
| `aliases` | Rosy Feather Star；Rosy Featherstar | 只收录拼写变体；`Feather Star`、`羽星`和`海百合`都指更大范围，不建议作无说明别名 |
| `scientificName` | `Antedon bifida` | 命名人和年份进入事实或来源，不写入字段 |
| 命名人 | (Pennant, 1777) | 括号说明最初不在 *Antedon* 属；原始组合为 *Asterias bifida* |
| WoRMS AphiaID | 124201 | 稳定外部标识 |
| slug | `rosy-feather-star` | 对齐英文主名，避免泛化的 `feather-star` |

WoRMS 六级链如下：

| 分类阶元 | 学名 | 中文建议 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Echinodermata | 棘皮动物门 |
| 纲 | Crinoidea | 海百合纲 |
| 目 | Comatulida | 羽星目 |
| 科 | Antedonidae | 海羊齿科 |
| 属 | Antedon | 海羊齿属 |

`Comatulida` 的中文名没有统一口径。大陆教材和中文论文常用“羽星目”，台湾生命大百科与海洋调查资料使用“海羊齿目”，另有“栉羽星目”。仓库面向简体中文，建议采用“羽星目”，并以拉丁名固定分类单元身份。[台湾生命大百科](https://taieol.tw/pages/3850/articles) [FAO AGROVOC：海百合纲](https://agrovoc.fao.org/browse/agrovoc/zh/page/c_49428)

## 分布与亚种边界

WoRMS 同时接受两个亚种：

- ***Antedon bifida bifida***：设得兰、奥克尼、不列颠和爱尔兰海岸，向南经法国大西洋岸、西班牙北部至葡萄牙；从低潮附近到 457 米，在 15 至 40 米最丰富。[WoRMS 714189](https://www.marinespecies.org/aphia.php?p=taxdetails&id=714189)
- ***Antedon bifida moroccana***：亚速尔、马德拉、加那利群岛、摩洛哥至西非，并有地中海局部鉴定；亚速尔综述给出 0 至 200 米。不同地点的形态变异使部分地中海鉴定仍需谨慎。[Micael et al. 2019](https://doi.org/10.11646/zootaxa.4639.1.1) [De Domenico et al. 2009](https://doi.org/10.1080/11250000802086011)

结构化字段可采用保守版本：

```ts
distribution: {
  realms: ['marine'],
  continents: ['欧洲', '非洲'],
  regions: [
    '东北大西洋：设得兰与不列颠群岛至伊比利亚半岛大西洋岸',
    '马卡罗尼西亚：亚速尔、马德拉与加那利群岛',
    '东北大西洋非洲岸与西部至中部地中海局部海域',
  ],
  countries: ['英国', '爱尔兰', '法国', '西班牙', '葡萄牙', '摩洛哥', '塞拉利昂', '利比里亚', '意大利'],
  range:
    '东北大西洋海羊齿，名义亚种从设得兰和不列颠群岛向南到葡萄牙；南方亚种分布于马卡罗尼西亚、摩洛哥至西非，并进入西部至中部地中海局部海域。加勒比旧记录未纳入。',
  center: { lat: 40, lng: -10 },
}
```

国家数组只列有直接文字证据的代表性国家，不表示完整沿岸清单。不要从 WoRMS 物种级 occurrence 接口自动加入加勒比、委内瑞拉或整个地中海。1978 年西大西洋综述指出，委内瑞拉旧图像更像 *Tropiometra carinata*，WoRMS 目前也把 *Antedon duebenii* 作为独立接受种。[WoRMS *A. duebenii*](https://www.marinespecies.org/aphia.php?p=taxdetails&id=124203) [Meyer et al. 1978](https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=1127&context=occ_facarticles)

## 形态与图片边界

可靠识别特征：

- 中央盘小，成体没有永久长柄，口和五条分叉的步带沟位于朝上的口面。
- 五条初生辐射在基部各分为两腕，完整成体显示十只细长羽状腕；受伤和再生会使照片中的可见腕数或长度不整齐。
- 每只腕两侧排列许多羽枝，羽枝由约 35 节组成；管足沿食物沟排列成不等长的三联体。
- 反口面长有短、分节、末端可抓握的卷枝。英国识别资料写到约 25 根，少数 30 根；其他区域资料给出不同计数。图片需要表现一簇短卷枝，不要求逐根达到固定数字。
- 腕色可为红、玫红、橙或黄，也可带斑点或条带。英文名中的 `rosy` 不是固定体色。
- *Antedon petasus* 通常更大，卷枝约 50 根或更多。素材不能把较粗壮、多卷枝的 *A. petasus* 当成本种。[MarLIN](https://www.marlin.ac.uk/species/detail/1521)

体尺字段建议只写有清楚测量口径的腕长：

```ts
measurements: {
  length: {
    min: 5,
    max: 10,
    unit: 'cm',
    note: '单只腕的常见报道长度，不是中央盘直径、全展跨度或全身总长。',
  },
}
```

不要把 10 至 20 厘米的全展直径与 5 至 10 厘米单腕长度混成同一个字段。现有来源没有可靠体重、寿命或全物种平均体尺，相关字段留空。

## 生境

```ts
habitats: [
  {
    name: '有水流的浅海岩礁与沟槽',
    realm: 'marine',
    isPrimary: true,
    description:
      '常以卷枝抓住岩壁、沟槽、巨砾、海藻或其他底栖生物，在水流输送悬浮颗粒的位置展开羽状腕；英爱资料显示 15 至 40 米最常见。',
  },
  {
    name: '避浪海湾、海峡与海湖硬底',
    realm: 'marine',
    description:
      '可生活在遮蔽或中等暴露海岸的基岩、大型巨砾和大型藻类上；爱尔兰野外研究记录了定向流、波浪往复流与多向流中的摄食。',
  },
  {
    name: '较深陆架底栖环境',
    realm: 'marine',
    description:
      '名义亚种记录可到约 450 至 457 米；这一数值是范围上限，不代表普通个体的典型水深、固定底质或主动下潜能力。',
  },
]
```

## 摄食机制与食谱

摄食流程可以拆成四步：

1. 个体用卷枝固定位置，把腕和羽枝展开到水流中。腕的姿势随水流方向改变，不必始终形成静止的圆碗。
2. 羽枝食物沟两侧的管足以长、中、短三只为一组。长管足和中管足分泌黏液，让细小颗粒直接黏在管足表面；大颗粒可由管足局部卷曲抓住。
3. 短管足划动并把颗粒包入黏液食团。1985 年显微功能研究明确否定独立“黏液网”或“黏液线”的说法。
4. 管足把食团擦入食物沟，沟内纤毛把食团沿羽枝和腕送向盘中央的口。次级管足也能扰动沟缘，把不合适颗粒排到侧面。

```ts
diet: {
  types: ['filter-feeder', 'omnivore'],
  foods: [
    '有机碎屑与其他悬浮颗粒',
    '硅藻、甲藻、颗石藻与硅鞭毛虫',
    '砂壳纤毛虫',
    '小型桡足类与甲壳类无节幼体',
  ],
  description:
    '羽枝上的三联管足用黏液直接截住悬浮颗粒，短管足协助形成食团，食物沟内的纤毛再把食团送到口；这是管足分工和纤毛运输，不是独立黏液网。',
}
```

[Lahaye & Jangoux 1985](https://doi.org/10.1007/BF00397517) [Nichols 1960](https://doi.org/10.1242/jcs.s3-101.54.105) [Hunt 1925](https://doi.org/10.1017/S0025315400008079)

## 行为、繁殖与生态关系

- **摄食姿势**：La Touche 在爱尔兰五处站点观察到灵活的腕和羽枝调整。个体在多种水流下近乎持续摄食，没有显示固定昼夜或潮汐节律。该结论来自这些站点，不应扩大成整个物种全年无节律。[La Touche 1978](https://doi.org/10.1017/S0025315400056836)
- **移动**：卷枝抓握并帮助爬行；受刺激时，腕对交替屈伸产生短距离游泳。Moore 使用的历史名 *Antedon rosaceus* 目前是名义亚种的异名。成体自由移动，但通常仍攀附在适合摄食的位置。[Moore 1924](https://doi.org/10.1085/jgp.6.3.281) [WoRMS 714189](https://www.marinespecies.org/aphia.php?p=taxdetails&id=714189)
- **繁殖**：雌雄异体。英吉利海峡种群在 5 至 7 月把卵和早期幼体留在雌体生殖羽枝外侧；研究同时发现雌雄生殖组织全年维持较高成熟度。幼体短暂游泳后附着，经历有短柄的 pentacrinoid 阶段，再脱离柄成为自由生活幼体或成体。[Nichols 1994](https://doi.org/10.1098/rstb.1994.0015) [MarLIN](https://www.marlin.ac.uk/species/detail/1521)
- **受伤与再生**：英吉利海峡样本都出现羽枝、腕段或整腕缺失，种群平均约 17% 羽枝缺失或再生。软唇鱼 *Crenilabrus melops* 会啄食生殖羽枝。页面可写“腕和羽枝常受损并再生”，不能据此给出全范围受伤率。[Nichols 1994](https://doi.org/10.1098/rstb.1994.0015) [Nichols 1996](https://archimer.ifremer.fr/doc/00094/20482/18152.pdf)
- **共生蠕虫**：*Myzostoma cirriferum* 的三日龄感染幼体会被海羊齿当成食物颗粒，由管足捕捉并送入羽枝沟；它随后用刚毛附着并完成变态。论文称其为共生或专性共生者，页面不要未经证据改写成会杀死宿主的寄生虫。[Eeckhaut & Jangoux 1993](https://doi.org/10.3354/dao015207)
- **光反应，候选事实**：2024 年预印本报告 463 至 630 纳米光可诱发负趋光性，蓝光 463 纳米反应最强，并在神经丛和管足感觉乳突检测到视蛋白。该结果尚未通过同行评议，只适合作为带“预印本”标签的候选事实，不进入四项统计或无保留的正文结论。[Nonclercq et al. 2024 preprint](https://doi.org/10.1101/2024.08.14.607903)

## 保护状态与压力边界

```ts
conservation: conservation('NE', 'unknown')
```

EUNIS 写明本种尚未接受 IUCN 红色名录评估，并在欧洲法律文本栏标为未列出。`NE` 只表示“未评估”，不能解释成无危、常见或种群稳定。[EUNIS](https://eunis.eea.europa.eu/species/44201)

MarLIN 的压力评估可支持局地机制：

- 沉积物覆盖会堵塞摄食和呼吸表面；
- 底拖、疏浚或拖曳造成的磨损可折断腕或杀死个体；
- 移除岩石、海藻或其他附着基质会同时移走个体；
- 水流过弱会减少悬浮食物输送，过强则可能妨碍展开腕或冲走个体。

这些内容属于敏感性机制，不是全球威胁评估。页面不得宣称某项压力已经导致全球下降，也不得给出没有来源的种群趋势。[MarLIN](https://www.marlin.ac.uk/species/detail/1521)

## 四项 featured stats 建议

```ts
featuredStats: [
  {
    key: 'typical-arm-count',
    label: '典型腕数',
    value: '10',
    unit: '只',
    note: '五条初生辐射各在基部分成两腕；少数个体可能偏离十腕。',
  },
  {
    key: 'reported-arm-length',
    label: '报道腕长',
    value: '5–10',
    unit: '厘米',
    note: '单只腕长度，不是全展直径或中央盘直径。',
  },
  {
    key: 'peak-depth-band',
    label: '高丰度水深',
    value: '15–40',
    unit: '米',
    note: '英爱资料中的高丰度带；本种记录可到约 450 米。',
  },
  {
    key: 'tube-feet-per-unit',
    label: '每组管足',
    value: '3',
    unit: '只',
    note: '长、中、短三种管足组成一个摄食单元。',
  },
]
```

## 六段 storySections 建议

```ts
storySections: [
  {
    key: 'five-rays-ten-arms',
    label: '身体',
    title: '五条辐射，在基部展开成十只腕',
    body:
      '海羊齿的中央盘很小，五条初生辐射一离开盘缘就各分成两只腕，形成典型的十腕轮廓。腕两侧密排羽枝，看起来像一圈活动的蕨叶。口和食物沟都朝上，成体盘底没有海百合那样的永久长柄。',
  },
  {
    key: 'three-tube-feet',
    label: '捕食',
    title: '三只管足组成一套颗粒捕捉器',
    body:
      '羽枝食物沟两侧反复排列长、中、短三种管足。长管足和中管足用表面黏液直接截住悬浮颗粒，遇到较大颗粒还会局部卷曲；短管足负责划动并协助把颗粒包成食团。这里没有一张悬在腕间的独立黏液网。',
  },
  {
    key: 'ciliary-food-conveyor',
    label: '输送',
    title: '食物沟把每根羽枝接到中央的口',
    body:
      '管足把食团擦进细窄的食物沟，沟内纤毛再沿羽枝和腕把它送向盘中央。胃含物包括碎屑、硅藻、甲藻、砂壳纤毛虫和小型甲壳类，说明这套输送线接收植物、动物和碎屑颗粒。',
  },
  {
    key: 'current-shaped-fan',
    label: '水流',
    title: '羽扇会顺着水流改变形状',
    body:
      '海羊齿常待在有水流的岩壁和沟槽，让海水送来食物。爱尔兰野外研究发现，它会弯曲、扭转或重新排列腕和羽枝，应对定向流、波浪往复流和多向流。它不是一把姿势固定的滤网。',
  },
  {
    key: 'cirri-crawl-swim',
    label: '移动',
    title: '卷枝抓牢海床，十只腕也能带它游开',
    body:
      '盘底的一簇短卷枝像活动抓钩，可以扣住岩石、海藻和其他底栖生物，也能帮助爬行。受到扰动时，同一辐射的一对腕交替屈伸，十只腕共同拍水，让它短距离游向新的附着点。',
  },
  {
    key: 'myzostome-hitchhiker',
    label: '共生',
    title: '一条小蠕虫借摄食通道登上羽枝',
    body:
      '共生蠕虫 Myzostoma cirriferum 的感染幼体混在悬浮颗粒中，被海羊齿管足当作食物捕获。它在进入羽枝沟后用刚毛扣住宿主，完成变态。海羊齿精密的颗粒输送线，也成了共生者进入身体表面的路径。',
  },
]
```

保护状态可放在 `description`、`keyFacts` 和页面保护模块，不必占用六段机制故事。若产品规定末段必须讲保护，可用“未评估，不等于无风险”替换共生段。

## 可直接写入 `species.ts` 的来源数组

```ts
const ROSY_FEATHER_STAR_SOURCE_DATE = '2026-09-02';

const ROSY_FEATHER_STAR_SOURCES = [
  {
    title: 'World List of Crinoidea / WoRMS: Antedon bifida (AphiaID 124201)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=124201',
    kind: 'taxonomy',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: complete Aphia classification for Antedon bifida',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/124201',
    kind: 'taxonomy',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: vernacular names for Antedon bifida',
    url: 'https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/124201',
    kind: 'general',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antedon bifida bifida (AphiaID 714189)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=714189',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antedon bifida moroccana (AphiaID 714190)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=714190',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antedon duebenii (AphiaID 124203)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=124203',
    kind: 'taxonomy',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Micael et al. 2019: The echinoderm fauna of the Azores',
    url: 'https://doi.org/10.11646/zootaxa.4639.1.1',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'De Domenico et al. 2009: Echinoderm fauna of the Messina Strait',
    url: 'https://doi.org/10.1080/11250000802086011',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Meyer et al. 1978: Crinoids from the western Caribbean and Gulf of Mexico',
    url: 'https://nsuworks.nova.edu/cgi/viewcontent.cgi?article=1127&context=occ_facarticles',
    kind: 'distribution',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'MarLIN: Rosy feather star species and sensitivity review',
    url: 'https://www.marlin.ac.uk/species/detail/1521',
    kind: 'general',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'La Touche 1978: Feeding behaviour of the featherstar Antedon bifida',
    url: 'https://doi.org/10.1017/S0025315400056836',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Lahaye & Jangoux 1985: Functional morphology of podia and ambulacral grooves',
    url: 'https://doi.org/10.1007/BF00397517',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Nichols 1960: Histology and activities of the tube-feet of Antedon bifida',
    url: 'https://doi.org/10.1242/jcs.s3-101.54.105',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Hunt 1925: Food of the bottom fauna of the Plymouth fishing grounds',
    url: 'https://doi.org/10.1017/S0025315400008079',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Moore 1924: Nervous mechanism of coordination in Antedon swimming',
    url: 'https://doi.org/10.1085/jgp.6.3.281',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Nichols 1994: Reproductive seasonality in Antedon bifida',
    url: 'https://doi.org/10.1098/rstb.1994.0015',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Nichols 1996: Evidence for predation on Antedon bifida',
    url: 'https://archimer.ifremer.fr/doc/00094/20482/18152.pdf',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'Eeckhaut & Jangoux 1993: Myzostoma cirriferum life cycle and host infestation',
    url: 'https://doi.org/10.3354/dao015207',
    kind: 'ecology',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: 'EUNIS: Antedon bifida threat and conservation status',
    url: 'https://eunis.eea.europa.eu/species/44201',
    kind: 'conservation',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
  {
    title: '陈慕雁等 2025：棘皮动物光感受系统研究进展',
    url: 'https://doi.org/10.11964/jfc.20241014721',
    kind: 'general',
    accessedAt: ROSY_FEATHER_STAR_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 关键事实建议

- WoRMS 接受 *Antedon bifida* (Pennant, 1777)，AphiaID 124201。
- “海羊齿”沿用 TODO 和中文科研文献，但也可泛指属或类群；学名负责消除歧义。
- 成体通常有十只羽状腕，单腕约 5 至 10 厘米，中央盘小且没有永久柄。
- 盘底短卷枝负责抓握和爬行；腕的交替拍动可完成短距离游泳。
- 羽枝管足按长、中、短三只成组，黏液直接捕获颗粒；不存在独立黏液网。
- 食物沟纤毛把食团送到朝上的中央口。
- 食物包括碎屑、微藻、原生生物和小型甲壳类。
- 名义亚种从设得兰和不列颠群岛向南到葡萄牙；南方亚种延伸到马卡罗尼西亚、西非和西部至中部地中海局部海域。
- 英爱资料记录约 15 至 40 米最常见，深度上限约 450 米。
- 雌雄异体；英吉利海峡种群在 5 至 7 月把卵和早期幼体留在雌体羽枝上。
- *Myzostoma cirriferum* 幼体会利用海羊齿摄食通道登上宿主。
- IUCN 尚未评估本种，仓库使用 `NE / unknown`。

## 不确定性与禁止外推

1. **中文名范围**：现有中文资料支持“海羊齿”，但这个词不是排他性的物种标准名。页面和搜索结果必须同时显示学名。
2. **目级中文译名**：`Comatulida` 可译为羽星目、海羊齿目或栉羽星目。仓库建议用羽星目，分类单元身份由拉丁名固定。
3. **物种与亚种**：生态研究多来自欧洲的 *A. b. bifida*。不得把爱尔兰摄食节律、英国繁殖季或局部捕食率写成南方亚种和全物种必然相同。
4. **加勒比记录**：WoRMS occurrence 中存在加勒比和委内瑞拉条目，但它们牵涉旧分类与可疑鉴定。结构化范围不要收录。
5. **卷枝数量**：机构识别页与分类诊断给出的卷枝数存在差异。图片验收应检查“一簇短、分节、可抓握卷枝”，不要把固定根数当成绝对物种定义。
6. **体尺口径**：单腕长度、全展直径和中央盘直径不能互换。结构化 `length` 只采用单腕 5 至 10 厘米。
7. **光感事实**：463 纳米峰值和负趋光行为来自预印本，尚未通过同行评议。可保留为候选事实，不进入四项统计。
8. **保护状态**：`NE` 表示未评估。没有数据支持 `LC`、稳定、下降或全球常见等结论。
9. **TODO 收尾**：只有物种数据、六张素材、素材说明、分类测试、静态检查、类型检查、测试和构建全部通过后，才能删除 `docs/todo.md` 中的海羊齿条目。研究文档本身不构成完成证明。
