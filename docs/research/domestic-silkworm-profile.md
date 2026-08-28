# 家蚕物种档案研究

- 研究对象：家蚕 `Bombyx mori`
- 目标档案：`species-bombyx-mori`
- 最终 slug：`domestic-silkworm`
- 检索与复核日期：2026-08-28
- 研究范围：接受名称与分类、驯化和野桑蚕关系、人工维持分布、生境、发育、取食、成虫飞行与口器、蚕丝、遗传资源、保护口径、六张图、完整 `Species` 草案、测试和静态资产验证

家蚕是完全驯化并依赖人类维持的谱系。本文不把饲养地点、种质库样本或偶见逸出记录改写成自然野生分布，也不把野桑蚕 `Bombyx mandarina` 的分布和状态套给家蚕。发育时长、滞育、化性、产卵量和茧丝性状会随品系、温度、光周期与饲育制度变化，带数字的资料均保留来源口径。

## 结论摘要

1. 当前接受学名为 `Bombyx mori` (Linnaeus, 1758)，原始组合是 `Phalaena mori` Linnaeus, 1758。分类路径为动物界、节肢动物门、昆虫纲、鳞翅目、蚕蛾科、家蚕蛾属。[NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7091&lvl=0) 与 [GBIF / Catalogue of Life](https://www.gbif.org/species/1868664) 支持接受名称和主干分类；国家林草局标准采用“蚕蛾科、家蚕蛾属、家蚕蛾”。
2. 项目主名沿用 TODO 的“家蚕”，英文主名用 “Domestic Silkworm”。“蚕”“桑蚕”“家蚕蛾”“Silkworm”“Silk Moth”“Domesticated Silkmoth”和“Mulberry Silkworm”可作检索别名。`scientificName` 只放二名法，命名人、年份和原始组合进入关键事实。
3. 家蚕是完全驯化、完全依赖人类照料的经济昆虫，不能在没有人类维持的条件下形成自我延续的野生种群。[Nature Communications 的 1,078 份样本泛基因组研究](https://www.nature.com/articles/s41467-022-33366-x)、[日本 NARO 官方说明](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html) 与 [FAO 家蚕种质资料](https://www.fao.org/4/ad108e/ad108e0a.htm) 对这一点一致。
4. 基因组研究支持家蚕的初始驯化发生在中国，约在 5,000 年前形成主要驯化谱系，随后经人类交流传播并继续改良。这个数字来自群体基因组推断，不是精确考古日期或单一村落坐标。[Xia et al. 2009](https://doi.org/10.1126/science.1176620)、[Xiang et al. 2018](https://doi.org/10.1038/s41559-018-0593-4) 与 [Tong et al. 2022](https://www.nature.com/articles/s41467-022-33366-x) 给出相互衔接的基因组证据。
5. `Bombyx mandarina` 是现生最近缘的野生祖先谱系，不是“野外的 `B. mori`”。现代数据库继续把两者列为两个种级分类单元；它们能杂交产生可育后代，历史上存在种界讨论。[GBIF 的野桑蚕条目](https://www.gbif.org/species/6544581)、[NCBI Taxonomy 7092](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7092) 与 [Bisch-Knaden et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/) 支持这种谨慎表述。
6. 中国野桑蚕和家蚕同为 28 对染色体；日本和部分朝鲜半岛野桑蚕材料可见 27 对。线粒体和群体研究把家蚕放在更接近中国野桑蚕的谱系位置，不能把东亚所有 `B. mandarina` 压成没有地理结构的单一“原型”。[Arunkumar et al. 2006](https://doi.org/10.1016/j.ympev.2006.02.023) 与 [Kim et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC8773246/) 提供证据。
7. 幼虫经历四次蜕皮，形成五个幼虫龄期；五龄末吐丝结茧，在茧内经历预蛹和蛹，再羽化为成虫。这是卵、幼虫、蛹、成虫的完全变态。[NARO](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html)、[印度中央蚕业委员会](https://csb.gov.in/silk-sericulture/silk) 与 [中国教育部生物学实践资料](https://www.moe.gov.cn/srcsite/A26/s8001/201112/W020220418401384311181.pdf) 支持这一顺序。
8. 幼虫阶段摄食，以桑属植物叶片为主要饲料；特定人工饲养体系也使用含桑叶粉等植物原料的配方饲料。成虫的功能性口器退化，不摄食。[Bisch-Knaden et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/) 明确指出家蚕和野桑蚕成虫均不取食，[NARO](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html) 则给出家蚕饲养周期中的阶段说明。
9. 成虫保留两对有鳞翅，能够振翅，却不能飞行。三种家蚕品系与可飞野桑蚕的比较显示，家蚕飞行肌比例、肌肉组织和翼力学均发生变化；“身体太胖所以飞不动”不足以概括机制。[Lu et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7240457/) 提供直接比较证据。
10. 成虫不取食并非驯化后才出现的特征，因为野桑蚕成虫同样没有功能性取食口器。飞行能力丧失才是家蚕相对野生近缘种的显著驯化差异之一。[Bisch-Knaden et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/) 与 [Lu et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7240457/) 分别支持两个判断。
11. 五龄幼虫的丝腺分泌丝素和丝胶，经头部吐丝器输出。丝素构成主要承力纤维，丝胶包覆并黏合纤维；幼虫用连续纤维逐层搭建茧。FAO 蚕丝缫制手册给出的品种依赖总茧丝长为 600 至 1,500 m，其中并非全部都能缫成成品丝。[FAO 丝腺与茧丝结构说明](https://www.fao.org/4/x2099e/x2099e03.htm)。
12. 商业缫丝通常在蛾羽化破坏连续茧层之前用蒸汽或热空气处理茧，这会杀死蛹，同时软化丝胶以便缫丝。这是生产流程和动物利用事实，不是保护等级。[FAO 蚕丝手册](https://www.fao.org/4/x2099e/x2099e02.htm) 对流程有直接说明。
13. NARO 的标准饲养概述给出约 25 天幼虫期、结茧后约两周羽化、成虫约一周，并称雌蛾约产 500 枚卵。它们适合作为该机构饲养框架中的展示数字，不能替代品系和温度依赖的全球范围。[NARO](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html)。中国科学院资料进一步指出，不同品系存在一化、二化和多化以及胚胎滞育差异。
14. 结构化分布应写“全球人工饲养、种质保存和研究设施中的维持范围”，自然野外分布写“不适用”。[FAO 种质资料](https://www.fao.org/4/ad108e/ad108e0a.htm) 与 [2022 泛基因组采样](https://www.nature.com/articles/s41467-022-33366-x) 可证明跨国人工品系，不证明这些国家存在野生家蚕种群。
15. IUCN 红色名录排除纯驯化类群；当前 `Species` 接口没有 N/A 代码，草案使用 `conservation('NE', 'unknown')` 作为项目技术占位，并在文案中明确“驯化类群不适用，未接受 IUCN 野生种群评估”。它不是 IUCN 发布的一份 NE 评估，也不能改成 EW。[IUCN FAQ](https://nrl.iucnredlist.org/about/faqs) 说明驯化个体的评估边界。
16. 截至 2026-08-28，CITES 附录和 Species+ 精确检索均未列入 `Bombyx mori`。未列入只表示没有 CITES 附录层面的国际贸易管制，不代表遗传资源没有流失风险，也不代替各地养殖、检疫和动物利用规则。[CITES 2026 附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)、[Species+ 检索](https://www.speciesplus.net/checklist/taxon_concepts?scientific_name=Bombyx%20mori&page=1&per_page=20&output_layout=alphabetical&locale=en)。
17. 家蚕档案的风险对象是人工维持的品系和遗传资源，包括地方品种被少数商业系替代、活体保存失败、疾病暴发、谱系记录丢失和交叉污染。FAO 讨论了家蚕种质侵蚀，[NARO](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html) 与 [NBRP Silkworm](https://silkworm.nbrp.jp/) 展示了活体品系保存和研究基础设施。

## 名称、别名与分类

### 可落库名称

| 字段       | 建议值                                                        | 证据与边界                                                  |
| ---------- | ------------------------------------------------------------- | ----------------------------------------------------------- |
| `names.zh` | 家蚕                                                          | 沿用 `docs/todo.md` 和中国国家标准标题中的常用生物名称      |
| `names.en` | Domestic Silkworm                                             | NCBI 使用 “domestic silkworm”，能同时标出驯化属性和幼虫语境 |
| 中文别名   | 蚕；桑蚕；家蚕蛾                                              | “家蚕蛾”适合成虫和规范名检索，不表示另一个物种              |
| 英文别名   | Silkworm；Silk Moth；Domesticated Silkmoth；Mulberry Silkworm | NCBI、GBIF 和蚕业资料中的常见拼法                           |
| 原始组合   | `Phalaena mori` Linnaeus, 1758                                | 只作历史学名检索，不替代接受学名                            |

[国家标准《家蚕遗传资源调查技术规范》](https://std.samr.gov.cn/gb/search/gbDetailed?id=33D40F11615A5D92E06397BE0A0A5B93) 直接把 `Bombyx mori` 对应到“家蚕”。[国家林草局《中国昆虫名称》相关标准表](https://www.forestry.gov.cn/html/lykj/lykj_1716/20190704152301877420072/file/20190704210951288677543.pdf) 采用“蚕蛾科、家蚕蛾属、家蚕蛾”；应用以 TODO 的“家蚕”为主名，把成虫称谓保留为别名。

### 接受分类路径

```text
Animalia 动物界
└── Arthropoda 节肢动物门
    └── Insecta 昆虫纲
        └── Lepidoptera 鳞翅目
            └── Bombycidae 蚕蛾科
                └── Bombyx 家蚕蛾属
                    └── Bombyx mori 家蚕
```

### 家蚕与野桑蚕的分类边界

GBIF 和 NCBI 各自保留 `B. mori` 与 `B. mandarina` 的种级条目。NCBI 同时保留“可能属于同种”的注记，说明历史和研究中的种界争议；项目不据此自行合并。[Bisch-Knaden et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/) 记录两者可育杂交、幼虫同食桑叶且共享性信息素系统。[Arunkumar et al.](https://doi.org/10.1016/j.ympev.2006.02.023) 与 [Kim et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC8773246/) 把家蚕放在中国野桑蚕近缘谱系中。

档案采用这句话：

> 家蚕是独立收录的完全驯化种；中国野桑蚕所属谱系是其最近的野生祖先谱系，两者种界曾有争议，现行目录仍分开收录。

禁止写“野桑蚕就是野生家蚕”，也不把日本野桑蚕的 27 对染色体写成家蚕的结构。

## 可直接落库的来源数组

```ts
const DOMESTIC_SILKWORM_SOURCE_DATE = "2026-08-28" as const;
const DOMESTIC_SILKWORM_CONTENT_DATE = "2026-08-28" as const;

const DOMESTIC_SILKWORM_SOURCES = [
  {
    title: "NCBI Taxonomy: Bombyx mori, Taxonomy ID 7091",
    url: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7091&lvl=0",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "GBIF / Catalogue of Life: Bombyx mori",
    url: "https://www.gbif.org/species/1868664",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "NCBI Taxonomy: Bombyx mandarina, Taxonomy ID 7092",
    url: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7092",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "GBIF / Catalogue of Life: Bombyx mandarina",
    url: "https://www.gbif.org/species/6544581",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "National Forestry and Grassland Administration: Chinese insect names standard",
    url: "https://www.forestry.gov.cn/html/lykj/lykj_1716/20190704152301877420072/file/20190704210951288677543.pdf",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "SAMR: Technical specification for Bombyx mori genetic resource survey",
    url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=33D40F11615A5D92E06397BE0A0A5B93",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "NCBI BioProject PRJDB4947: Bombyx mori p50T chromosome assembly",
    url: "https://www.ncbi.nlm.nih.gov/bioproject/PRJDB4947",
    kind: "general",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "International Silkworm Genome Consortium 2008: The genome of a lepidopteran model insect",
    url: "https://doi.org/10.1016/j.ibmb.2008.11.004",
    kind: "general",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Xia et al. 2009: A draft sequence for the genome of the domesticated silkworm",
    url: "https://doi.org/10.1126/science.1176620",
    kind: "general",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Xiang et al. 2018: The evolutionary road from wild moth to domestic silkworm",
    url: "https://doi.org/10.1038/s41559-018-0593-4",
    kind: "general",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "Tong et al. 2022: High-resolution silkworm pan-genome",
    url: "https://www.nature.com/articles/s41467-022-33366-x",
    kind: "general",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "International Sericultural Commission: Country profiles",
    url: "https://www.inserco.org/en/country-profile",
    kind: "distribution",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Arunkumar et al. 2006: Molecular phylogeny of silkmoths and the origin of Bombyx mori",
    url: "https://doi.org/10.1016/j.ympev.2006.02.023",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Kim et al. 2022: Phylogeographic relationships of wild and domestic silkmoths",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8773246/",
    kind: "taxonomy",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Bisch-Knaden et al. 2014: Olfactory coding in Bombyx mori and Bombyx mandarina",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Lu et al. 2020: Flight muscle and wing mechanical properties in flightless Bombyx mori",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7240457/",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "NARO: Secrets of Silkworms",
    url: "https://www.naro.go.jp/english/Information/laboratory/nias/165757.html",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "National BioResource Project Silkworm",
    url: "https://silkworm.nbrp.jp/",
    kind: "conservation",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "Central Silk Board of India: Silk and sericulture",
    url: "https://csb.gov.in/silk-sericulture/silk",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Ministry of Education of China: Biology practical activity materials on silkworm development",
    url: "https://www.moe.gov.cn/srcsite/A26/s8001/201112/W020220418401384311181.pdf",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "FAO Silk Reeling and Testing Manual: Silkworm and cocoon production",
    url: "https://www.fao.org/4/x2099e/x2099e02.htm",
    kind: "general",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "FAO Silk Reeling and Testing Manual: Cocoon filament and silk proteins",
    url: "https://www.fao.org/4/x2099e/x2099e03.htm",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "FAO: Conservation status of sericultural germplasm resources",
    url: "https://www.fao.org/4/ad108e/ad108e0a.htm",
    kind: "conservation",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Chinese Academy of Sciences 2025: Genetic basis of diapause and voltinism in Bombyx mori",
    url: "https://cemps.cas.cn/kyjz/kyjz2025/202505/t20250529_7793945.html",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title:
      "Sakurai et al. 2004: A single sex pheromone receptor determines Bombyx sexual behavior",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC528734/",
    kind: "ecology",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "IUCN Red List FAQ: treatment of domesticated taxa",
    url: "https://nrl.iucnredlist.org/about/faqs",
    kind: "conservation",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "IUCN Red List search: Bombyx mori",
    url: "https://www.iucnredlist.org/search?query=Bombyx%20mori&searchType=species",
    kind: "conservation",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "CITES Appendices effective 5 March 2026",
    url: "https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf",
    kind: "conservation",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
  {
    title: "Species+ Checklist search: Bombyx mori",
    url: "https://www.speciesplus.net/checklist/taxon_concepts?scientific_name=Bombyx%20mori&page=1&per_page=20&output_layout=alphabetical&locale=en",
    kind: "conservation",
    accessedAt: DOMESTIC_SILKWORM_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 完整 Species 草案

以下对象按 `src/types/species.ts` 的当前接口编写。六条媒体路径使用已经确定的运行时文件名；替代文字和焦点仍应在最终资产上逐张复核。

```ts
{
  id: 'species-bombyx-mori',
  slug: 'domestic-silkworm',
  names: {
    zh: '家蚕',
    en: 'Domestic Silkworm',
    aliases: [
      '蚕',
      '桑蚕',
      '家蚕蛾',
      'Silkworm',
      'Silk Moth',
      'Domesticated Silkmoth',
      'Mulberry Silkworm',
      'Phalaena mori',
    ],
  },
  scientificName: 'Bombyx mori',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Insecta', '昆虫纲'),
    taxon('Lepidoptera', '鳞翅目'),
    taxon('Bombycidae', '蚕蛾科'),
    taxon('Bombyx', '家蚕蛾属'),
  ),
  conservation: conservation('NE', 'unknown'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
    countries: [
      '中国',
      '印度',
      '日本',
      '韩国',
      '泰国',
      '越南',
      '老挝',
      '柬埔寨',
      '乌兹别克斯坦',
      '伊朗',
      '土耳其',
      '意大利',
      '法国',
      '罗马尼亚',
      '摩洛哥',
      '埃及',
      '马达加斯加',
      '巴西',
      '墨西哥',
      '巴布亚新几内亚',
    ],
    regions: [
      '中国的驯化起源与现今蚕桑生产、种质保存区',
      '东亚、南亚、东南亚、中亚和西亚人工饲养区',
      '欧洲传统蚕业、育种和研究维持区',
      '非洲人工养蚕和种质保存点',
      '美洲及大洋洲的人工养蚕、教育和研究点',
    ],
    range:
      '完全依赖人类维持，现分布于全球多地的蚕室、桑园配套饲养系统、育种场、种质库、实验室和教育设施。自然野外分布不适用，没有自我延续的野生 Bombyx mori 种群；所列国家只代表有资料支持的人工品系或养蚕范围，野桑蚕 Bombyx mandarina 的东亚野外分布属于另一分类单元。',
    center: { lat: 32, lng: 110 },
  },
  habitats: [
    {
      name: '桑园与蚕室配套的人工饲养系统',
      realm: 'terrestrial',
      isPrimary: true,
      description:
        '桑园供应幼虫食叶，幼虫主要在受控蚕室、蚕座或饲育架上生长。这里的“生境”是人类建立并持续管理的生产系统，不是野生栖息地。',
    },
    {
      name: '清洁通风的室内蚕座与饲育架',
      realm: 'terrestrial',
      description:
        '卵和各龄幼虫在人工控制温湿度、密度、卫生与饲料供应的空间中维持；具体制度随品系和地区变化。',
    },
    {
      name: '蔟具与结茧空间',
      realm: 'terrestrial',
      description:
        '成熟五龄幼虫转移到竹木、纸质或其他人工蔟具，在可附着的立体间隙内搭丝架并形成茧。',
    },
    {
      name: '种质资源库、实验室与教育饲养设施',
      realm: 'terrestrial',
      description:
        '不同地理品系、育成品种和突变系依靠活体继代、胚胎或配子保存及完整谱系记录维持。',
    },
  ],
  measurements: {},
  diet: {
    types: ['herbivore'],
    foods: [
      '桑属植物的新鲜叶片（幼虫）',
      '以桑叶粉等植物原料配制的人工饲料（特定饲养体系）',
    ],
    description:
      '只有幼虫阶段摄食，以桑叶为主要饲料；特定品系和人工饲养体系可使用含桑叶成分的配方饲料。成虫功能性口器退化，不再进食，主要完成求偶、交配和产卵。',
  },
  activity: [
    '完全依赖人工饲养与繁殖管理',
    '幼虫四次蜕皮、共五个龄期',
    '五龄末吐丝结茧',
    '成虫有翅但不能飞行',
    '成虫不取食，依靠幼虫期积累的储备',
    '雄蛾可振翅并步行追踪雌蛾性信息素',
  ],
  tags: [
    '完全驯化',
    '人类依赖',
    '桑叶食性',
    '完全变态',
    '吐丝结茧',
    '成虫不取食',
    '成虫失飞',
    '种质资源',
  ],
  summary:
    '在中国形成主要驯化谱系、完全依赖人工饲养的蚕蛾；幼虫食桑并在五龄末吐丝结茧，成虫有翅却不能飞行，也不再取食。',
  description:
    '家蚕 Bombyx mori 是由中国野桑蚕近缘祖先谱系驯化而来的重要经济昆虫，现由世界多地的蚕业、育种、科研和教育体系维持。它没有自我延续的自然野生种群，因此地图表示人工饲养与种质保存范围，不能与野桑蚕 Bombyx mandarina 的东亚野外分布合并。幼虫经过四次蜕皮和五个龄期，五龄末由丝腺分泌丝素与丝胶并经吐丝器结茧；成虫口器退化、不取食，保留两对有鳞翅却不能飞行。',
  storySections: [
    {
      key: 'china-domestication-and-human-care',
      label: '驯化与依赖',
      title: '约五千年的人工选择，留下一个离不开饲养者的谱系',
      body:
        '群体基因组研究支持家蚕的主要驯化过程始于中国，随后随人类交流传播并继续改良。驯化带来温顺、耐拥挤和失飞等性状，也使它无法脱离供叶、清洁、温湿度控制和配种管理形成野生种群。约五千年是遗传模型估计，不是精确纪年或单一遗址坐标。',
    },
    {
      key: 'mori-and-mandarina',
      label: '最近缘野生谱系',
      title: '野桑蚕是祖先近缘种，不是跑到野外的家蚕',
      body:
        '现行目录把 Bombyx mori 和 Bombyx mandarina 分作两个种级分类单元。两者能够产生可育杂交后代，种界曾有讨论；系统发育证据仍支持中国野桑蚕谱系最接近家蚕祖先。野桑蚕的东亚分布、染色体地理差异和野外风险必须单独记录。',
    },
    {
      key: 'five-instars-complete-metamorphosis',
      label: '完整生活史',
      title: '四次蜕皮形成五龄，茧中还要经历真正的蛹期',
      body:
        '卵孵出的幼虫连续四次蜕皮，五龄末停止取食并寻找蔟具。幼虫先搭丝架，再把自己包进茧中，经历预蛹和蛹后羽化为成虫。各阶段持续多久以及卵是否滞育，会随品系、温度、光周期和饲养制度变化。',
    },
    {
      key: 'fibroin-sericin-cocoon',
      label: '茧丝结构',
      title: '丝素承担骨架，丝胶把连续纤维黏成茧层',
      body:
        '五龄幼虫的丝腺制造丝素和丝胶，纤维经头部吐丝器输出并逐圈铺成茧。FAO 手册给出的品种依赖总茧丝长度为 600 至 1,500 米，其中只有一部分适合连续缫取。丝由幼虫产生，成虫不吐丝。',
    },
    {
      key: 'flightless-nonfeeding-adult',
      label: '短暂成虫期',
      title: '保留四片翅，却靠振翅和步行寻找配偶',
      body:
        '家蚕成虫有两对有鳞翅，雌雄都不能飞行。雄蛾能在地面振翅并追踪雌蛾释放的性信息素。成虫功能性口器退化，约一周的阶段主要用于交配和产卵；不取食是家蚕与野桑蚕共享的性状，不能全归因于驯化。',
    },
    {
      key: 'germplasm-not-wild-range',
      label: '遗传资源保存',
      title: '需要保存的是活体品系和记录，不是一张虚构的野外范围图',
      body:
        '家蚕的多样性存在于地方品种、育成品种和突变系中，并依赖种质库与饲养机构逐代维持。保存工作需要活体继代、适用的低温或生殖材料保存、谱系与表型记录、卫生和防混控制。IUCN 野生灭绝风险框架不适用于纯驯化谱系。',
    },
  ],
  keyFacts: [
    '当前接受学名是 Bombyx mori (Linnaeus, 1758)，原始组合为 Phalaena mori。',
    '家蚕约在五千年前于中国形成主要驯化谱系，这一时间来自群体基因组推断。',
    '它完全依赖人工供叶、环境管理和繁殖维持，没有自我延续的野生种群。',
    '野桑蚕 Bombyx mandarina 是最近缘野生祖先谱系，现行目录仍与家蚕分开收录。',
    '家蚕与野桑蚕可以杂交产生可育后代，但这不授权项目合并两个分类单元。',
    '幼虫经过四次蜕皮，共有五个龄期，随后在茧内化蛹，属于完全变态。',
    '只有幼虫摄食，以桑叶为主；成虫的功能性口器退化，不取食。',
    '成虫保留两对有鳞翅，能够振翅，雌雄都不能飞行。',
    '成虫不取食是家蚕与野桑蚕共享的性状，失飞才是显著驯化差异之一。',
    '五龄幼虫的丝腺产生丝素和丝胶，经头部吐丝器输出连续纤维并构筑茧。',
    'FAO 给出的品种依赖总茧丝长度为 600–1,500 m，并非全部可缫成成品丝。',
    '发育时长、胚胎滞育、年世代数、产卵量和茧丝性状随品系与饲养条件变化。',
    '结构化地图展示人工饲养和种质保存范围，不表示自然原生分布。',
    'IUCN 排除纯驯化类群；NE 只因当前接口没有 N/A 而作为技术占位。',
    'CITES 当前未列入家蚕，这不代表遗传资源无风险或地方生产规则不适用。',
  ],
  threats: [
    '地方品种和稀有突变系被少数商业品系替代，会缩窄人工维持的遗传多样性。',
    '病毒、细菌、真菌、微孢子虫等病原可在高密度饲养中损害整批材料，风险随卫生和环境管理变化。',
    '活体继代失败、设施中断或温湿度事故会让不能在野外恢复的品系永久丢失。',
    '谱系、表型、采集地和保存代次记录丢失，会降低材料的研究与育种价值。',
    '品系混杂、错误标识和未经记录的杂交会造成遗传身份污染。',
    '商业缫丝通常在羽化前以热处理杀死蛹；这是动物利用和福利议题，不应伪装成野生保护状态。',
  ],
  conservationActions: [
    '在国家和区域种质库中保存地方品种、育成品种、突变系及其代表性遗传材料。',
    '用活体继代、适用的胚胎或生殖材料低温保存和异地备份降低单点失败风险。',
    '为每个品系保留来源、谱系、基因型、表型、化性、滞育和饲养条件元数据。',
    '实行隔离、消毒、病原监测和批次追踪，控制高密度饲养中的疾病传播。',
    '用身份核验、独立编号和受控配种防止品系混杂或未记录杂交。',
    '将野桑蚕作为独立野生分类单元开展分布、遗传结构和生境保护，不能用家蚕档案替代。',
    '定期复核 IUCN 对驯化类群的规则、CITES 附录及各地种质、检疫和动物利用规定。',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'larval-moults',
      label: '幼虫蜕皮',
      value: '4',
      unit: '次',
      note: '形成通常的五个幼虫龄期；不把每龄持续天数写成全球常数。',
    },
    {
      key: 'naro-larval-period',
      label: 'NARO 饲养概述幼虫期',
      value: '约 25',
      unit: '天',
      note: 'NARO 的标准饲养说明，不代表所有品系、温度、光周期和饲育制度。',
    },
    {
      key: 'cocoon-filament-length',
      label: 'FAO 总茧丝长',
      value: '600–1,500',
      unit: 'm',
      note: 'FAO 手册给出的品种依赖总长度；只有一部分可连续缫取，不等于成品丝长度。',
    },
    {
      key: 'naro-adult-stage',
      label: 'NARO 饲养概述成虫期',
      value: '约 1',
      unit: '周',
      note: 'NARO 的饲养框架。成虫不取食，时长仍受品系和环境影响。',
    },
  ],
  media: {
    image:
      './images/species/domestic-silkworm/01-adult-domestic-silkworm-portrait.webp',
    alt: '一只乳白色家蚕雄蛾完整停在素色蚕室饲养纸上，四片翅、六足和羽毛状触角清楚可见',
    focalPoint: { x: 0.7, y: 0.5 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image:
          './images/species/domestic-silkworm/02-mature-larva-mulberry-feeding.webp',
        alt: '一只乳白色五龄家蚕幼虫在有锯齿叶缘的桑叶上取食',
        title: '唯一取食的幼虫阶段',
        caption:
          '幼虫以桑叶为主要饲料；画面只表现五龄外形，不给出跨品系的固定体长。',
        focalPoint: { x: 0.5, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/domestic-silkworm/03-first-instar-hatching-from-eggs.webp',
        alt: '数只深色家蚕一龄幼虫正从附着在人工饲养纸上的小卵中孵出',
        title: '从卵开始的人工继代',
        caption:
          '初孵幼虫比成熟五龄幼虫细小且颜色更深；卵的滞育状态和孵化日程随品系与处理变化。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/domestic-silkworm/04-larva-spinning-silk-scaffold.webp',
        alt: '一只成熟家蚕幼虫在人工蔟具中用细丝搭建结茧支架',
        title: '先搭丝架，再包裹成茧',
        caption:
          '连续纤维由幼虫丝腺产生并经头部吐丝器输出；丝架不是蜘蛛网，成虫不会吐丝。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/domestic-silkworm/05-pupa-inside-opened-cocoon.webp',
        alt: '一枚人工剖开的乳白色家蚕茧中露出完整褐色蛹体',
        title: '茧中的蛹期',
        caption:
          '开口是为观察而人工形成的切面；正常茧层在蛾羽化前保持闭合，蛹不是缩小的成虫。',
        focalPoint: { x: 0.5, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/domestic-silkworm/06-germplasm-line-rearing.webp',
        alt: '多盘分开编号的家蚕品系在洁净种质资源饲养室内独立维持',
        title: '逐代维持的家蚕遗传资源',
        caption:
          '地方品种与实验品系依靠分盘饲养、受控配种、身份记录和备份保存，不存在可供重新采集的野生家蚕种群。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: DOMESTIC_SILKWORM_SOURCES,
  featured: true,
  publishedAt: DOMESTIC_SILKWORM_CONTENT_DATE,
  updatedAt: DOMESTIC_SILKWORM_CONTENT_DATE,
},
```

## 人工维持范围、地图中心与生境

### 分布字段为何不能照抄出现点

家蚕的全球范围由人类搬运、育种和连续饲养形成。[2022 泛基因组](https://www.nature.com/articles/s41467-022-33366-x) 的家蚕地方品系来自中国、日本、韩国、印度、泰国、老挝、越南、俄罗斯、法国、意大利、德国、匈牙利、西班牙、土耳其、罗马尼亚、摩洛哥、柬埔寨、阿塞拜疆、乌克兰和保加利亚等地。[FAO 种质资料](https://www.fao.org/4/ad108e/ad108e0a.htm) 概述亚洲、欧洲、非洲、美洲和大洋洲的养蚕与种质工作；[国际蚕业委员会国家档案](https://www.inserco.org/en/country-profile) 也列出亚洲、欧洲、非洲、北美洲和南美洲的成员及蚕业资料入口。

这些资料证明人工维持范围，不能证明自然分布。GBIF 中的国家、馆藏和出现点也可能来自养殖场、实验材料、逸出个体或没有建立证据的观察。档案不使用“原生于全球”“遍布世界野外”或“在桑林中自然繁殖”。

`center: { lat: 32, lng: 110 }` 只把地图初始视图放在中国，回应基因组研究支持的驯化背景。它不是精确驯化地点、野生分布中心、产量中心或任何权属主张。

### 四类结构化生境

1. **桑园与蚕室配套的人工饲养系统**：桑园提供叶片，幼虫在蚕室中获得连续供叶、清洁和环境管理。设置 `isPrimary: true`。
2. **室内蚕座与饲育架**：卵与幼虫的密度、温湿度、通风、饲料和卫生由人管理。不能把“桑叶食性”写成幼虫能在野生桑林自行维持。
3. **蔟具与结茧空间**：成熟五龄幼虫需要可附着的立体结构搭丝架和结茧。竹蔟只是传统材料之一，不是物种必需的唯一材质。
4. **种质资源库、实验室与教育设施**：活体品系及其记录在隔离饲养、受控交配和保存技术中延续。[NARO](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html) 介绍约 600 个保存品系，[NBRP](https://silkworm.nbrp.jp/) 提供国家生物资源项目背景；数量可能更新，不放进稳定展示字段。

## 形态、测量与图像识别

### 幼虫

- 初孵一龄幼虫细小且较深色，成熟五龄幼虫粗壮，多呈乳白色或浅灰白。不能把初孵幼虫画成五龄幼虫的缩小纯白复制品。
- 头后胸部有三对真正的分节足；腹部通常有四对腹足和一对臀足。图中不能给每个腹节都加腿，也不能画成蜈蚣。
- 腹侧有成列气门，腹末背侧有短尾角。体表较光滑，不是被长毛覆盖的野桑蚕或其他毛虫形象。
- 幼虫咀嚼桑叶；成熟后停止摄食，由下唇区域的吐丝器输出丝。用“吐丝”描述行为，不画成从张开的口中喷出蜘蛛网。

### 成虫

- 成虫体表和两对翅覆有乳白至浅褐鳞片，前翅较长而近三角，后翅较小且圆。必须有四片翅、六足，不能缺少后翅。
- 雄蛾腹部较窄，双栉齿状触角发达，适合封面展示性信息素感受结构；雌蛾腹部通常较宽，触角相对不那么宽大。
- 功能性取食口器退化，不能画卷曲虹吸式喙、口器吸蜜或啃食桑叶。[北京药品标准草案](https://yjj.beijing.gov.cn/yjj/zwhd17/zjdc38/11045158/2021081115541022408.pdf) 也记录成虫口器退化。
- 翅仍能振动和参与求偶行为，但家蚕雌雄都不能飞行。成虫图必须让足接触基质，不能悬空飞行。

### 测量口径

`measurements` 与 `metrics` 保持空对象。已核对的中国药品标准草案给出干燥雄性成虫体长 1.5 至 2.5 cm，另一地方标准给出干燥成虫 1.6 至 2.3 cm；这类药材检验范围不适合转换成跨品系活体成虫标准。当前高可信资料也没有给出一个可安全解释为全球最小值和最大值的活体翅展、体长或质量范围。

数字展示改用过程明确的四项：四次幼虫蜕皮、NARO 约 25 天幼虫期、FAO 600 至 1,500 m 总茧丝长、NARO 约一周成虫期。后面三项的注释都写清机构、品系或饲养边界。

## 发育、食性与行为

### 完全变态和品系差异

标准顺序如下：

1. 雌蛾把卵黏附在人工饲养纸或其他基质上。
2. 一龄幼虫孵化，连续取食桑叶并完成四次蜕皮，进入五龄。
3. 五龄末幼虫停止摄食和排空肠道，寻找蔟具并搭建丝架。
4. 幼虫用连续丝包裹身体形成茧，在茧内转为预蛹和蛹。
5. 成虫羽化；若留作种蚕，完成求偶、交配和产卵。

[NARO](https://www.naro.go.jp/english/Information/laboratory/nias/165757.html) 的饲养概述给出四次蜕皮、五龄和约 25 天幼虫期。[中国教育部资料](https://www.moe.gov.cn/srcsite/A26/s8001/201112/W020220418401384311181.pdf) 也给出四次蜕皮、结茧、蛹和不取食成虫。[中国科学院 2025 年研究说明](https://cemps.cas.cn/kyjz/kyjz2025/202505/t20250529_7793945.html) 指出生产中常见一化和二化品系，热带、亚热带也有不滞育的多化品系。页面不落固定总寿命、固定月份或统一年世代数。

### 幼虫食桑，成虫不进食

结构化 `diet.types` 使用 `herbivore`，它概括取食期的幼虫。foods 把生命阶段写在条目中；配方人工饲料只限定为特定管理体系，不能写成自然食物。[Bisch-Knaden et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC3843842/) 指出家蚕和野桑蚕幼虫均专化取食桑叶，成虫均无功能性取食口器。

成虫不取食也不喝花蜜，不应画在花上伸喙。它依靠幼虫期储备完成短暂成虫期。这个性状不能单独作为驯化证据，因为野桑蚕成虫同样不取食。

### 失飞与性信息素追踪

[Lu et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7240457/) 比较三种失飞家蚕品系和一种可飞野桑蚕，测量翅、体重、飞行肌比例和力学性质。家蚕翼载荷较高、飞行肌比例较低，背纵肌结构更不规则；研究不支持只用“体重变大”解释失飞。

雌蛾释放 bombykol，雄蛾以高度专一的受体系统检测信号。[Sakurai et al. 2004](https://pmc.ncbi.nlm.nih.gov/articles/PMC528734/) 证明 BmOR-1 对雄蛾完整性行为反应具有关键作用。家蚕雄蛾的典型运动是足着地时振翅和步行定向，不应在图像或故事中写成沿气味飞行。

## 茧丝、缫丝与动物利用边界

家蚕后部丝腺主要合成丝素，中部丝腺分泌丝胶；两股丝素纤维被丝胶包覆，在空气中形成可黏结的复合丝。[FAO 手册](https://www.fao.org/4/x2099e/x2099e03.htm) 给出丝素和丝胶的结构分工，并把单茧总丝长概括为随品种变化的 600 至 1,500 m。这个长度不是全部可缫段、成品丝长度或每个品系保证值。

幼虫用摆头运动逐层铺丝，从疏松丝架到致密茧壳。丝从头部吐丝器输出，不是从腹部喷出，也不是成虫生产。[印度中央蚕业委员会](https://csb.gov.in/silk-sericulture/silk) 把丝纤维形成放在幼虫结茧阶段。

若成虫自然羽化，它会破坏茧层，降低连续缫丝能力。[FAO 缫丝手册](https://www.fao.org/4/x2099e/x2099e02.htm) 说明商业茧通常先用蒸汽或热空气处理以杀死蛹，再用热水软化丝胶并缫丝。档案应直接写明该过程，避免用“采集空茧”遮盖动物利用事实；同时不能把生产伦理判断塞进 IUCN 状态。

## 驯化、基因组与研究价值

[Xia et al. 2009](https://doi.org/10.1126/science.1176620) 比较 29 个家蚕和 11 个野桑蚕基因组，支持主要驯化事件并识别人工选择信号。[Xiang et al. 2018](https://doi.org/10.1038/s41559-018-0593-4) 分析 137 个代表性品系，推断中国起源、丝绸之路传播和后续改良。[Tong et al. 2022](https://www.nature.com/articles/s41467-022-33366-x) 扩展到 1,078 份材料，其中 1,031 份家蚕和 47 份野桑蚕，并构建 545 个高质量参考基因组。

这些数据支持家蚕作为鳞翅目遗传学和驯化研究模型。NCBI p50T 参考项目记录 28 条染色体的染色体级组装，[国际家蚕基因组联盟](https://doi.org/10.1016/j.ibmb.2008.11.004) 记录了早期家蚕基因组整合成果。历史组装大小、基因数和泛基因组结构依版本更新，不放进稳定 `featuredStats`。

“中国驯化”应写成基因组研究支持的主要起源场景，不把约五千年改写成精确事件日。史前蚕丝使用证据、传说和现代群体模型回答的问题不同，档案不把它们拼成没有误差的单一路线。

## 保护状态、风险与管理

### IUCN 与 CITES 的正确口径

[IUCN FAQ](https://nrl.iucnredlist.org/about/faqs) 明确排除驯化类群；若一个分类单元同时有野生和驯养个体，红色名录也只评估自然分布内的野生种群。家蚕没有相应的野生 `B. mori` 种群，IUCN LC、DD、EW 等野生风险类别都不适用。

当前项目 `ConservationCode` 没有 N/A。为了满足接口，草案使用：

```ts
conservation: conservation('NE', 'unknown'),
```

页面文案和测试必须把它解释为“项目技术占位：纯驯化类群不适用 IUCN 评估”，不能显示成“IUCN 已评估为 NE”。不填 `assessedYear` 或 `criteria`，也不能使用 EW。“野外灭绝”需要曾有符合评估口径的野生分类单元和正式评估，家蚕不符合这个前提。

[CITES 2026 年 3 月附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) 与 [Species+ 精确检索](https://www.speciesplus.net/checklist/taxon_concepts?scientific_name=Bombyx%20mori&page=1&per_page=20&output_layout=alphabetical&locale=en) 均未列出家蚕。该结果只涉及国际贸易公约附录。

### 风险对象是种质资源

[FAO](https://www.fao.org/4/ad108e/ad108e0a.htm) 把地方品种被少数高产商业系替代视为种质侵蚀来源，并强调家蚕与野生近缘种都需要保存。家蚕的实际风险包括：

- 地方品种、育成品种和稀有突变系在替代中丢失；
- 高密度饲养中的病原传播与整批死亡；
- 设施、供电、温湿度或继代计划失效；
- 标签错误、交叉污染和未经记录的杂交；
- 来源、谱系、表型、基因型和饲育条件元数据脱落。

这些问题不能写成“野外种群下降”。家蚕也没有可用于 IUCN 趋势字段的全球成熟个体数量。

### 保存行动

- 同时保存地方品种、育成系、遗传标记系和稀有突变系，避免收藏只剩少数高产材料。
- 用活体继代与适用的胚胎、生殖材料低温保存互补，并建立异地备份。
- 记录来源、谱系、配种、化性、滞育、表型、病原状态和饲养环境。
- 分盘隔离、核验身份、受控交配，防止混系。
- 建立消毒、检疫、病原监测和批次追溯制度。
- 单独保护和研究野桑蚕的自然种群与生境，不能用家蚕品系保存替代。
- 公开资料应说明商业缫丝的热处理环节，让遗传资源保存、生产利用和动物福利保持概念分离。

## 六段故事建议

### 1. `china-domestication-and-human-care`

- label：驯化与依赖
- title：约五千年的人工选择，留下一个离不开饲养者的谱系
- body：群体基因组研究支持家蚕的主要驯化过程始于中国，随后随人类交流传播并继续改良。驯化带来温顺、耐拥挤和失飞等性状，也使它无法脱离供叶、清洁、温湿度控制和配种管理形成野生种群。约五千年是遗传模型估计，不是精确纪年或单一遗址坐标。

### 2. `mori-and-mandarina`

- label：最近缘野生谱系
- title：野桑蚕是祖先近缘种，不是跑到野外的家蚕
- body：现行目录把 `Bombyx mori` 和 `Bombyx mandarina` 分作两个种级分类单元。两者能够产生可育杂交后代，种界曾有讨论；系统发育证据仍支持中国野桑蚕谱系最接近家蚕祖先。野桑蚕的东亚分布、染色体地理差异和野外风险必须单独记录。

### 3. `five-instars-complete-metamorphosis`

- label：完整生活史
- title：四次蜕皮形成五龄，茧中还要经历真正的蛹期
- body：卵孵出的幼虫连续四次蜕皮，五龄末停止取食并寻找蔟具。幼虫先搭丝架，再把自己包进茧中，经历预蛹和蛹后羽化为成虫。各阶段持续多久以及卵是否滞育，会随品系、温度、光周期和饲养制度变化。

### 4. `fibroin-sericin-cocoon`

- label：茧丝结构
- title：丝素承担骨架，丝胶把连续纤维黏成茧层
- body：五龄幼虫的丝腺制造丝素和丝胶，纤维经头部吐丝器输出并逐圈铺成茧。FAO 手册给出的品种依赖总茧丝长度为 600 至 1,500 米，其中只有一部分适合连续缫取。丝由幼虫产生，成虫不吐丝。

### 5. `flightless-nonfeeding-adult`

- label：短暂成虫期
- title：保留四片翅，却靠振翅和步行寻找配偶
- body：家蚕成虫有两对有鳞翅，雌雄都不能飞行。雄蛾能在地面振翅并追踪雌蛾释放的性信息素。成虫功能性口器退化，约一周的阶段主要用于交配和产卵；不取食是家蚕与野桑蚕共享的性状，不能全归因于驯化。

### 6. `germplasm-not-wild-range`

- label：遗传资源保存
- title：需要保存的是活体品系和记录，不是一张虚构的野外范围图
- body：家蚕的多样性存在于地方品种、育成品种和突变系中，并依赖种质库与饲养机构逐代维持。保存工作需要活体继代、适用的低温或生殖材料保存、谱系与表型记录、卫生和防混控制。IUCN 野生灭绝风险框架不适用于纯驯化谱系。

## 六张图像方案

所有图均为 1536 × 1024、3:2 横图、sRGB、不透明 WebP；源 PNG 与运行时 WebP 一一对应。统一要求写实科学插画质感，不加文字、数字、箭头、地图、拼贴、边框或水印。成虫必须有四片翅、六足、鳞翅和双栉齿状触角，不画可见虹吸式喙或飞行姿态；幼虫必须有三对胸足、四对腹足和一对臀足，不画成长毛毛虫。

### 01 `adult-domestic-silkworm-portrait`

- 用途：封面和成虫身份。
- 场景：单只乳白色雄蛾停在洁净素色蚕室饲养纸上，身体在画面右侧，左侧留干净文本空间。两对翅自然平展，三角前翅和圆小后翅都完整可见，六足接触纸面，双栉齿状羽毛触角清楚，腹部较窄。
- 禁止：飞在空中、吸蜜、啃叶、卷曲喙、只画两翅、蝴蝶棒状触角、鲜艳野生蛾花纹。
- 运行时：`./images/species/domestic-silkworm/01-adult-domestic-silkworm-portrait.webp`

### 02 `mature-larva-mulberry-feeding`

- 用途：五龄幼虫和幼虫食性。
- 场景：一只乳白色成熟五龄幼虫侧身伏在新鲜桑叶上取食，桑叶锯齿边和被咬缺口清楚；三对胸足、四对腹足、一对臀足、侧面气门和短尾角可辨。
- 禁止：成人翅、长毛、错误的腹足数量、喷出蛛网、把桑叶画成无锯齿的普通叶。
- 运行时：`./images/species/domestic-silkworm/02-mature-larva-mulberry-feeding.webp`

### 03 `first-instar-hatching-from-eggs`

- 用途：卵与初孵龄期，补足完整生活史。
- 场景：人工饲养纸上的一小片扁圆卵，数只细小深色的一龄幼虫正在孵出；卵和幼虫尺度一致，少量桑叶碎片位于边缘，画面保持洁净。
- 禁止：把初孵幼虫画成粗大纯白五龄幼虫、画出蛹或成虫、给卵加鸟蛋式裂壳、声称每枚卵都会同时孵化。
- 运行时：`./images/species/domestic-silkworm/03-first-instar-hatching-from-eggs.webp`

### 04 `larva-spinning-silk-scaffold`

- 用途：吐丝器、丝架和结茧起始。
- 场景：一只成熟幼虫位于竹木或纸质人工蔟具的立体间隙，头部摆动，一根极细丝从头部吐丝器延伸到多个附着点，周围形成稀疏丝架，身体尚未被完整茧壳遮住。
- 禁止：蜘蛛网放射结构、从腹部出丝、张嘴喷丝、同画面完成多个发育阶段、把丝架误画成已经封闭的成茧。
- 运行时：`./images/species/domestic-silkworm/04-larva-spinning-silk-scaffold.webp`

### 05 `pupa-inside-opened-cocoon`

- 用途：蛹期与茧的关系。
- 场景：一枚乳白椭圆茧经过人工小心切开，完整褐色蛹安置在茧腔中，旁边可见少量蜕下的幼虫表皮；科学静物，不表现伤口或组织。
- 禁止：自然破口、流血、把蛹画成蜷缩幼虫或微型成虫、加入活体成虫、暗示所有茧天然打开。
- 运行时：`./images/species/domestic-silkworm/05-pupa-inside-opened-cocoon.webp`

### 06 `germplasm-line-rearing`

- 用途：完全驯化、品系分开维持和保护口径。
- 场景：洁净室内多盘家蚕品系分区饲养，每盘有不同阶段但不混盘，工作人员只出现戴手套的手或远景，不出现可读标签；重点呈现分盘、隔离、受控环境和记录工作。
- 禁止：野外桑林中的自由种群、拥挤混养、可读品牌文字、把研究设施画成商业流水线、虚构具体机构。
- 运行时：`./images/species/domestic-silkworm/06-germplasm-line-rearing.webp`

### 人工科学复核

- 01：单只雄蛾，四片翅、六足、发达双栉齿触角，无可见取食喙，所有足接触基质。
- 02：单只五龄幼虫，三对胸足、四对腹足和一对臀足，体表光滑，正在咀嚼桑叶。
- 03：卵和细小深色一龄幼虫尺度合理，不出现成熟幼虫或蛹。
- 04：丝从头部吐丝器方向连接人工蔟具，属于疏松丝架，画面无蜘蛛网结构。
- 05：只有一个褐色蛹，开口明确为人工观察切面，茧中没有成虫。
- 06：各盘品系分开维持，环境明显为室内人工设施，不暗示野生种群。

## 测试守卫建议

### 身份、名称与分类

- `getSpeciesBySlug('domestic-silkworm')` 返回 `id === 'species-bombyx-mori'`。
- 中英文主名和学名严格为“家蚕”“Domestic Silkworm”和 `Bombyx mori`。
- aliases 至少包含“蚕”“桑蚕”“家蚕蛾”“Silkworm”“Silk Moth”和 `Phalaena mori`。
- 分类路径严格为 `Animalia / Arthropoda / Insecta / Lepidoptera / Bombycidae / Bombyx`，中文属名为“家蚕蛾属”。
- 不把 `B. mandarina` 设为别名，也不把命名人和年份拼进 `scientificName`。

### 驯化、分布与保护

- `conservation.code === 'NE'` 且 trend 为 `unknown`，不含 `assessedYear` 或 `criteria`。
- 描述明确 NE 是接口技术占位，IUCN 排除纯驯化类群；不显示成 IUCN 正式 NE，也不使用 EW。
- `distribution.realms` 只有 `terrestrial`。
- range 同时出现“完全依赖人类维持”“自然野外分布不适用”“没有自我延续的野生种群”和 `Bombyx mandarina` 独立口径。
- countries 和 continents 只解释为代表性人工饲养、品系和种质维持范围。
- `center` 严格为 `{ lat: 32, lng: 110 }`，测试说明它只控制中国方向的展示焦点。
- `B. mandarina` 只在关系说明中出现，不能把其东亚野外分布写进家蚕的自然 range。
- CITES 未列入只放描述或关键事实，不派生成保护等级。

### 发育、食性、成虫与蚕丝

- habitats 严格四项，全部为 terrestrial，只有桑园与蚕室配套系统为 primary。
- `measurements` 和 `metrics` 都为空，不把干燥药材尺寸转换成活体全球范围。
- diet 只有 `herbivore`；foods 给桑叶和限定条件下的配方人工饲料。
- diet description 必须分开幼虫取食与成虫不取食，不能写成成虫吸蜜。
- 关键事实同时出现卵、四次蜕皮、五个幼虫龄期、茧内蛹和成虫，确认完全变态。
- 文案写成虫有四片有鳞翅且不能飞行，不写“无翅”或“身体太胖所以飞不动”。
- 文案明确成虫不取食是家蚕和野桑蚕共享性状，不能全解释为驯化结果。
- 蚕丝只由五龄幼虫丝腺产生，经头部吐丝器输出；成虫不产丝。
- 600 至 1,500 m 保留 FAO、总茧丝、品种依赖和并非全部可缫四个限定。
- 商业热处理杀死蛹的事实放入描述性风险或利用边界，不塞进 IUCN 字段。

### 故事、数字和来源

- `storySections` 长度严格为 6，key 集合严格为：

  ```ts
  [
    "china-domestication-and-human-care",
    "mori-and-mandarina",
    "five-instars-complete-metamorphosis",
    "fibroin-sericin-cocoon",
    "flightless-nonfeeding-adult",
    "germplasm-not-wild-range",
  ];
  ```

- `featuredStats` 严格四项，key 唯一。
- 25 天和一周只作为 NARO 饲养概述；600 至 1,500 m 只作为 FAO 品种依赖总茧丝长。
- 文案不落全球固定孵化期、总生命周期、产卵数、化性或滞育比例。
- 来源 URL 全部唯一且为 HTTPS，`accessedAt` 全为 2026-08-28。
- 来源数组至少 25 条，覆盖 taxonomy、distribution、ecology、conservation 和 general。当前数组把人工范围证据放在 general 与 conservation；测试可允许 range 来源由这两类共同覆盖，或将泛基因组来源复制分类会造成 URL 重复，不能这样做。
- 至少保留 NCBI、GBIF、国家标准、Xia 2009、Xiang 2018、Tong 2022、野桑蚕系统发育、成虫非取食、失飞比较、NARO、FAO 蚕丝、FAO 种质、IUCN 和 CITES 来源。
- `featured === true`，发布日期与更新日期均为 2026-08-28。

### 媒体与静态资产

- 封面加 gallery 共六条唯一运行时路径，顺序严格为：

  ```text
  01-adult-domestic-silkworm-portrait.webp
  02-mature-larva-mulberry-feeding.webp
  03-first-instar-hatching-from-eggs.webp
  04-larva-spinning-silk-scaffold.webp
  05-pupa-inside-opened-cocoon.webp
  06-germplasm-line-rearing.webp
  ```

- 封面 `focalPoint.x` 约为 0.7；所有焦点位于 0 到 1。
- 六张图都有非空 alt；五张 gallery 图都有 title、caption 和统一 credit。
- 第 01 张必须有四片翅、六足、双栉齿触角并保持足着地。
- 第 04 张必须写头部吐丝器和丝架，不能写蜘蛛网或成虫吐丝。
- 第 05 张必须写人工打开的观察切面。
- 第 06 张必须写人工设施和品系分开维持，不出现野生种群叙事。

## 静态资产与 README 验证

### 目录约定

```text
src/assets/source/species/domestic-silkworm/
├── 01-adult-domestic-silkworm-portrait-source.png
├── 02-mature-larva-mulberry-feeding-source.png
├── 03-first-instar-hatching-from-eggs-source.png
├── 04-larva-spinning-silk-scaffold-source.png
├── 05-pupa-inside-opened-cocoon-source.png
├── 06-germplasm-line-rearing-source.png
└── README.md

public/images/species/domestic-silkworm/
├── 01-adult-domestic-silkworm-portrait.webp
├── 02-mature-larva-mulberry-feeding.webp
├── 03-first-instar-hatching-from-eggs.webp
├── 04-larva-spinning-silk-scaffold.webp
├── 05-pupa-inside-opened-cocoon.webp
└── 06-germplasm-line-rearing.webp
```

物种 README 记录六个场景的用途、最终提示词、证据边界、生成工具、压缩与转换命令、运行时映射和已知限制。根源图索引在皇帝蜻蜓之后追加家蚕条目。README 不把 AI 图像称作分类凭证或现场观察。

### 可执行验证

```bash
magick identify -quiet \
  -format '%f|%m|%w|%h|%[colorspace]|%[opaque]|%[channels]\n' \
  src/assets/source/species/domestic-silkworm/*-source.png \
  public/images/species/domestic-silkworm/*.webp

shasum -a 256 \
  src/assets/source/species/domestic-silkworm/*-source.png \
  public/images/species/domestic-silkworm/*.webp

webpinfo public/images/species/domestic-silkworm/*.webp
npm run test:taxonomy
npm run test:carousel
npm run test:image-viewer
npm run typecheck
npm run build
npm test
git diff --check
git status --short
```

验证要求：六张源 PNG 和六张运行时 WebP 都能解码，均为 1536 × 1024、3:2、sRGB、不透明；两组各自有六个唯一 SHA-256。PNG 与 WebP 的 01 至 06 编号和主题一一对应。依仓库约定只用测试、类型检查、构建和静态图像工具，不启动 GUI 或无头浏览器。

## 分类计数与 TODO 变更

在数据对象、来源、六张图、源图 README、目录索引和测试全部集成后：

- 物种档案总数从 67 变为 68。
- 昆虫纲后代档案数从 5 变为 6。
- 鳞翅目后代档案数从 1 变为 2，现有帝王蝶与家蚕共享该分支。
- 新分类单元 `Bombycidae` 和 `Bombyx` 各有 1 个后代物种档案。
- `docs/todo.md` 顶部总数改为 68，昆虫纲改为 6，剩余从 11 改为 10。
- 家蚕条目完成后，下一个未完成动物为南极磷虾 `Euphausia superba`。

只新增本研究文件不代表 TODO 已完成。必须等 `Species` 对象、来源、资产、测试、类型检查和构建全部通过后再删除该 TODO 条目。

## 事实护栏与常见误解

1. **家蚕没有自然野生分布。** 全球出现点和国家列表描述人工饲养、馆藏、研究或逸出，不构成自我延续野生种群证据。
2. **野桑蚕不是“野外的家蚕”。** 两者能产生可育杂交后代且种界有争议，现行数据库仍分作两个种级分类单元。
3. **中国野桑蚕谱系最接近家蚕祖先。** 日本和部分朝鲜半岛野桑蚕材料的染色体数与中国材料不同，不能抹平地理结构。
4. **约五千年是基因组模型估计。** 不写精确年份、确切村落或单一考古事件。
5. **地图中心只是展示焦点。** `{ lat: 32, lng: 110 }` 不是驯化坐标或野生质心。
6. **IUCN 不评估纯驯化类群。** NE 是接口缺少 N/A 时的技术占位，不是 IUCN 发布状态。
7. **不能使用 EW。** 家蚕不符合“某个已评估野生分类单元只剩圈养个体”的推断路径。
8. **CITES 未列入不等于没有规则或风险。** 地方检疫、种质和动物利用规范仍可适用。
9. **四次蜕皮形成五个幼虫龄期。** 不写成四龄，也不把蛹算作第五次蜕皮后的幼虫龄期。
10. **家蚕属于完全变态。** 茧是幼虫制作的保护结构，蛹才是发育阶段。
11. **幼虫食桑，成虫不取食。** 成虫不吸蜜、不啃桑叶，也没有可见卷曲喙。
12. **成虫不取食不是驯化独有。** 野桑蚕成虫也不取食。
13. **成虫有翅但失飞。** 不画成无翅，也不用“太胖”概括失飞机制。
14. **振翅不等于飞行。** 雄蛾可在地面振翅和步行追踪性信息素。
15. **丝由五龄幼虫产生。** 成虫不产丝，纤维经头部吐丝器输出，不从腹部喷出。
16. **600 至 1,500 m 是品种依赖的总茧丝长。** 它不是全部可缫段、成品丝长或每枚茧保证值。
17. **白茧不是物种唯一颜色。** 茧色受品系影响；图像选择乳白色只代表常见饲养型。
18. **约 25 天幼虫期和约一周成虫期来自 NARO 饲养概述。** 温度、品系、滞育和饲育条件会改变日程。
19. **不落全球固定产卵量。** NARO 的约 500 枚是饲养概述，不是所有雌蛾保证值。
20. **药材标准中的干燥蛾体尺寸不是活体全球范围。** `measurements` 与 `metrics` 保持空对象。
21. **商业缫丝常在羽化前热处理茧。** 这个过程会杀死蛹，属于生产和动物利用事实。
22. **家蚕的风险对象是遗传资源。** 不写野外种群下降、原生栖息地丧失或成熟个体数量。
23. **品系保存不能替代野桑蚕保护。** 野生近缘种的分布、遗传结构和生境要独立评估。
24. **GBIF 记录不能单独判定野生。** 馆藏、饲养和逸出记录需要来源语境。
25. **研究样本量不能变成全球数量。** 1,078 份样本和 545 个参考基因组描述研究设计，不是家蚕种群规模。
