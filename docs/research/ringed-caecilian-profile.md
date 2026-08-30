# 环纹蚓螈（Ringed Caecilian）物种档案研究与实现简报

- 研究对象：*Siphonops annulatus* (Mikan, 1822)
- 建议 slug：`ringed-caecilian`
- 研究截止日：2026-08-30
- 用途：完成 `docs/todo.md` 中环纹蚓螈物种档案，并约束六张静态图片的生物学内容

证据口径：分类采用 Amphibian Species of the World 6.2、ITIS 与蚓螈九科分类原始论文；全球灭绝风险采用 IUCN 现行物种条目；分布以现行分类数据库、标本修订论文和政府物种数据库交叉核对；繁殖与腺体内容采用观察或实验原始论文。南巴伊亚可可种植园贡献了大部分行为资料，这些时间表、巢深和育幼数值不能直接代表整个南美洲范围。

## 可直接采用的编辑结论

1. 现行接受名为 *Siphonops annulatus* (Mikan, 1822)。分类链使用 Animalia > Chordata > Amphibia > Gymnophiona > Siphonopidae > *Siphonops*。较旧资料常把该种放在 Caeciliidae；2011 年九科分类恢复并重新界定 Siphonopidae，当前 ASW 6.2 与 ITIS 均采用该科。[ASW 6.2](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus)；[ITIS TSN 668505](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=668505)；[Wilkinson et al. 2011](https://doi.org/10.11646/zootaxa.2874.1.3)（访问日期均为：2026-08-30）
2. Mikan 的原始描述年份长期写作 1820。ASW 6.2 与 ITIS 根据模式材料再研究采用 1822，仓库应跟随两个现行分类源，写作 `(Mikan, 1822)`。物种字段只存双名，不把命名人和年份并入 `scientificName`。[ASW 6.2](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus)；[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=668505)（访问日期均为：2026-08-30）
3. 中文主名采用 TODO 中的“环纹蚓螈”。ASW 记录英文 Ringed Caecilian、旧英文 Ringed Caecilia 与西班牙文 Ilulo Anillado；巴西中部官方野外指南使用 Cecília-anelada 和泛称 cobra-cega。`cobra-cega` 也可指蚓蜥或盲蛇，不宜进入搜索别名。建议别名仅收录 `Ringed Caecilia`、`Ilulo Anillado` 和 `Cecília-anelada`。[ASW 6.2](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus)；[Vaz-Silva et al. 2020](https://books.scielo.org/id/9qfsp/pdf/vaz-9786587590011.pdf)（访问日期均为：2026-08-30）
4. 中文科名缺少可核验的统一国家标准。建议把 Siphonopidae 译作“环管蚓科”，把 *Siphonops* 译作“环管蚓属”，让科名和属名保持同一词根。“蚓螈科”通常对应旧口径 Caeciliidae，会掩盖 2011 年后的分类变化。实现和测试应同时断言科学名，避免把中文编辑译名当成命名法规结论。[Wilkinson et al. 2011](https://doi.org/10.11646/zootaxa.2874.1.3)；[ASW Siphonopidae](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae)（访问日期均为：2026-08-30）
5. 截止 IUCN 2026-1，能核验的现行物种评估仍是 IUCN SSC Amphibian Specialist Group 的 2014-1 条目，类别为无危 LC。评估依据是范围广、能利用多种天然和人为改变生境，并推定种群大。LC 没有可录入的 criteria 字符串。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)；[IUCN 2026-1 citation](https://nrl.iucnredlist.org/about/citationinfo)（访问日期均为：2026-08-30）
6. 现行条目没有提供可靠的全球数量变化率或成熟个体范围。可访问的评估文本称部分地区常见、秘鲁调查很少检出，但没有全范围趋势估计。仓库应使用 `conservation('LC', 'unknown', 2014)`，不应从 LC 推导 `stable`。`metrics.estimatedMatureIndividuals` 留空。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)（访问日期：2026-08-30）
7. 评估把该物种视为一个广布分类单元，同时明确要求分类修订，并指出大范围内的全部种群未必同种。当前 ASW 也把三个相隔较远的范围块解释为可能受采集空缺影响。页面不能把当前范围图写成连续、均匀的种群，也不能把 LC 写成所有潜在线系均安全。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)；[ASW 6.2](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus)（访问日期均为：2026-08-30）
8. 该种原生于安第斯山脉以东的南美洲。资料较稳固的国家包括阿根廷、玻利维亚、巴西、哥伦比亚、厄瓜多尔、圭亚那、秘鲁、苏里南和委内瑞拉。ASW 的 occurrence 表还列法属圭亚那和巴拉圭，但同页备注指出法属圭亚那记录已由 2022 年区域名录否定，巴拉圭又长期缺少凭证标本；乌拉圭只属 likely/controversial。保守的 `countries` 数组采用前述九地，正文单列争议地。[ASW 6.2](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus)；[Maciel & Hoogmoed 2011](https://doi.org/10.11646/zootaxa.2984.1.1)；[Argentina SIB](https://sib.gob.ar/especies/siphonops-annulatus)（访问日期均为：2026-08-30）
9. 该种只见于南美洲，可以设置 `endemicTo: ['南美洲']`。这表示洲级原生限制，不表示它是巴西或任何单一国家特有种。地图中心只应作为视口焦点。[ASW 6.2](https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus)（访问日期：2026-08-30）
10. 生境跨亚马孙与大西洋森林湿润土壤、灌丛、草地和较干燥的 Caatinga，也包括乡村花园、种植园及退化林地。它是陆栖、穴居、直接发育的两栖动物，不依赖开放水体繁殖，`realms` 只填 `terrestrial`。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)；[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期均为：2026-08-30）
11. 南巴伊亚研究把个体和巢室集中记录在湿润、腐殖质丰富的浅土层，常见微生境包括大树根部、腐木、落地腐烂凤梨科植物和草堆。研究者没有在很沙或很多岩石的土壤发现个体。该结果描述一个大西洋森林与可可农林系统，不能升级为全范围绝对选择。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期：2026-08-30）
12. IUCN 把多数记录概括为海拔 800 米以下。“generally below”不是硬上限，也不是完整最小至最大样本范围。`metrics.elevationM` 留空，正文可写“多数已知记录低于约 800 米”。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)（访问日期：2026-08-30）
13. 外形为无四肢、近圆柱形的蓝灰至板岩色身体，浅色环沟环绕大部分躯干；头比身体窄，吻端前突，眼小而可见，眼和鼻孔之间有一对感觉触须。旧诊断给 78 至 98 个体环，最后三四条环沟不完全环绕泄殖孔区域。它是两栖动物，不是蛇、蚯蚓或带鳞蚓蜥。[Maciel & Hoogmoed 2011](https://doi.org/10.11646/zootaxa.2984.1.1)；[Jared et al. 2018](https://doi.org/10.1038/s41598-018-22005-5)（访问日期均为：2026-08-30）
14. 2021 年论文记录一只保存后的雄性标本 UFRO-H 3214，总长 720 毫米，超过此前 539 毫米记录。作者称它异常巨大，并提出亚马孙个体是否更大的未决问题。结构化体尺只可填 `max: 0.72 m`，note 必须标明“单只保存标本的已发表极端记录”，不能写成常见成体上限或典型长度。[Oliveira & França 2021](https://sedici.unlp.edu.ar/bitstream/handle/10915/168077/Documento_completo.pdf-PDFA.pdf?sequence=1)（访问日期：2026-08-30）
15. 南巴伊亚可可种植园 41 只样本平均总长约 37.1 厘米、平均体重约 64.4 克；另一项 71 只样本均值约 45.0 厘米、88.6 克。采集季节、样地和样本构成不同，不宜拼成“典型范围”。`measurements.weight`、`metrics.adultLengthCm` 和 `metrics.adultMassKg` 均留空。[Jared et al. 2015](https://doi.org/10.21757/0103-3816.2015v27n3p233-238)；[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期均为：2026-08-30）
16. 头部皮肤集中大型黏液腺，含黏液和脂质的分泌物可降低钻土摩擦；身体后端集中较大的皮肤毒腺，后端还可堵住与身体直径相近的隧道。作者把后端腺体解释为化学防御，把堵洞解释为机械防御，这些是基于结构和行为的功能解释，不能从一张图证明正在释放毒素。[Jared et al. 2018](https://doi.org/10.1038/s41598-018-22005-5)；[Mauricio et al. 2021](https://doi.org/10.3390/toxins13110779)（访问日期均为：2026-08-30）
17. 2020 年研究在上下颌牙齿基部发现齿相关腺，分泌物具有多种常见于毒液的酶活性，牙面在捕食时可见黏稠分泌物。牙齿没有蛇类沟槽，研究也没有完成蛋白身份、毒性或有效注入的验证；作者在 limitations 中明确说仍需证据才能判定蚓螈是否属于 venomous animals。页面可写“具有可能参与咬合的齿相关腺”，不可写“已证实用毒牙注毒”或“对人危险”。[Mailho-Fontana et al. 2020](https://doi.org/10.1016/j.isci.2020.101234)（访问日期：2026-08-30）
18. 本种野外食性缺少胃含物比例研究。长期圈养观察显示成体会取食动物性食物、处理大块腐肉，并以身体长轴旋转撕取食物；作者据蚓螈类资料推测野外以土壤无脊椎动物为主并可能机会性食腐。`diet` 可归为 carnivore，但 foods 和 description 必须保留“本种野外比例未知”的限定，不能列出一串未经本种验证的脊椎猎物。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)；[Mailho-Fontana et al. 2020](https://doi.org/10.1016/j.isci.2020.101234)（访问日期均为：2026-08-30）
19. 该种主要在地下活动。南巴伊亚研究发现的隧道光滑、可分叉，最深不超过 20 厘米；巢室位于不足 15 厘米的湿润土层，约 10 至 15 厘米宽。两个深度都来自一个研究系统，不能当作全物种钻土能力上限。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期：2026-08-30）
20. 没有足够证据把活动节律统一标为昼行或夜行。研究者在厄瓜多尔雨后清晨的落叶层见过个体，南巴伊亚的月度挖掘效率又与当月降雨量没有显著关系。`activity` 使用“穴居”“湿土活动”“雨后可能到近表层”等描述，不写固定昼夜型。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期：2026-08-30）
21. 该种卵生并直接发育。母体把陆生卵产在地下巢室，环抱卵团并会用头轻推卵团；孵出的幼体无鳃、无色素且需要照护，没有自由生活的水生蝌蚪阶段。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期：2026-08-30）
22. 南巴伊亚长期研究记录每窝 5 至 16 只幼体，平均约 10 只。交配见于 8 月末和 10 月初的两次圈养观察，产卵集中在 11 月下半月至 12 月上半月，孵化在 12 月下半月至次年 1 月初。月份只适用于该南半球样地和研究条件，不能写成整个南美洲的固定物候。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期：2026-08-30）
23. 孵化后，幼体用暂时性的多尖、匙形牙齿撕取母体外层表皮。育幼母体的表皮细胞膨大并积累脂质，体色会变得较浅。2008 年研究直接拍到七个窝的完整或部分食皮行为，因此母性食皮属于实证行为。[Wilkinson et al. 2008](https://doi.org/10.1098/rsbl.2008.0217)（访问日期：2026-08-30）
24. 2008 年研究只记录一次完整食皮过程，持续七分钟；同一家庭两次行为相隔约 64 小时。一个完整事件和一个间隔不能支持“每三天固定吃七分钟”的全物种规律。幼体取食的是可再生外层表皮，母体没有被吃掉，也没有流血伤口。[Wilkinson et al. 2008](https://doi.org/10.1098/rsbl.2008.0217)（访问日期：2026-08-30）
25. 2008 年论文观察到幼体聚集在母体泄殖孔附近并摄入液体，当时无法判定液体性质。2024 年 Science 研究确认，育幼母体输卵管上皮的肥大腺体产生富含脂质和碳水化合物的营养分泌物，幼体约两个月内从泄殖孔摄食。页面可称“乳状营养分泌物”或加引号的“乳汁”，不能画乳房、乳头，也不能等同哺乳动物乳腺。[Wilkinson et al. 2008](https://doi.org/10.1098/rsbl.2008.0217)；[Mailho-Fontana et al. 2024](https://doi.org/10.1126/science.adi5379)（访问日期均为：2026-08-30）
26. 2024 年研究认为分泌物释放似乎响应幼体的触碰和声信号。“seemingly”保留因果不确定性；页面应写“观察到与触碰和声音相伴”，不写成已经解码的语言或母体必然受某个叫声触发。[Mailho-Fontana et al. 2024](https://doi.org/10.1126/science.adi5379)（访问日期：2026-08-30）
27. 一窝圈养幼体在孵化后一周体重增加约 130%，随后六周增速降低。该数字来自一窝的发育监测，不是所有幼体的平均值或保证值；适合 key fact 的限定文本，不宜作为无注释的全物种 featured stat。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期：2026-08-30）
28. 2019 年论文内部的育幼时长措辞不一致：摘要称从产卵到独立约三个月，结果和讨论又分别写食皮约三个月、母体从产卵到幼体独立约五个月、完整繁殖周期约六个月。实现应写“跨数月的卵期与孵后照护”，不要录入一个总育幼月数。2024 年论文的“约两个月”只指泄殖孔分泌物供给。[Jared et al. 2019](https://doi.org/10.1111/azo.12254)；[Mailho-Fontana et al. 2024](https://doi.org/10.1126/science.adi5379)（访问日期均为：2026-08-30）
29. IUCN 2014 评估没有识别全范围重大威胁，并指出该种出现在多个保护地。南巴伊亚研究则担心传统荫蔽可可农林系统衰退会移除当地潮湿、富腐殖质的研究种群生境。两者尺度不同，可以同时成立；页面不应虚构全球下降，也不应忽略局地土壤生境改变。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)；[Jared et al. 2015](https://doi.org/10.21757/0103-3816.2015v27n3p233-238)（访问日期均为：2026-08-30）
30. 保护行动应聚焦保存湿润有机土、落叶层、树根和腐木，维持原生林与荫蔽 cabruca，减少已知巢区的深翻、压实和不必要化学投入；同时开展跨范围凭证采样、遗传和形态修订、占域与种群趋势监测。后半组行动直接回应 IUCN 的分类和数量缺口，前半组针对南巴伊亚实测微生境。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en)；[Jared et al. 2015](https://doi.org/10.21757/0103-3816.2015v27n3p233-238)；[Jared et al. 2019](https://doi.org/10.1111/azo.12254)（访问日期均为：2026-08-30）

## 名称与分类实现

~~~ts
id: 'species-siphonops-annulatus',
slug: 'ringed-caecilian',
names: {
  zh: '环纹蚓螈',
  en: 'Ringed Caecilian',
  aliases: ['Ringed Caecilia', 'Ilulo Anillado', 'Cecília-anelada'],
},
scientificName: 'Siphonops annulatus',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Amphibia', zhName: '两栖纲' },
  order: { scientificName: 'Gymnophiona', zhName: '蚓螈目' },
  family: { scientificName: 'Siphonopidae', zhName: '环管蚓科' },
  genus: { scientificName: 'Siphonops', zhName: '环管蚓属' },
},
~~~

`环管蚓科` 和 `环管蚓属` 属仓库中文编辑口径。测试应把科学名作为稳定断言。旧文献中的 Caeciliidae 只保留在来源说明，不进入现行分类链。

## IUCN、趋势与数量

推荐实现：

~~~ts
conservation: conservation('LC', 'unknown', 2014),
metrics: {},
~~~

| 字段 | 使用值 | 证据边界 |
| --- | --- | --- |
| code | `LC` | IUCN 2014-1 现行条目为 Least Concern。 |
| trend | `unknown` | 没有全范围数量序列；LC 不能推导 stable。 |
| assessedYear | `2014` | 采用物种评估正式引文年份，不写查询年 2026。 |
| criteria | 省略 | LC 条目没有受胁类别 criteria。 |
| estimatedMatureIndividuals | 省略 | 评估只推定种群大，未给上下限。 |

巴西伯南布哥州的区域评估也列 LC，但它只覆盖一个州，不能替换全球评估。[Pernambuco regional assessment](https://www2.cprh.pe.gov.br/wp-content/uploads/2023/02/E-book-Avaliacao-do-Estado-de-Conservacao-dos-Anfibios-e-Repteis-de-Pernambuco-Vermelho-IMPRESSAO-ATUALIZADA.pdf)（访问日期：2026-08-30）

## 分布、生境与地图

~~~ts
distribution: {
  realms: ['terrestrial'],
  continents: ['南美洲'],
  regions: [
    '安第斯山脉以东的南美洲低地',
    '西部亚马孙、巴西亚马孙与圭亚那地区',
    '巴西东部大西洋森林至阿根廷米西奥内斯',
  ],
  countries: [
    '阿根廷',
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '厄瓜多尔',
    '圭亚那',
    '秘鲁',
    '苏里南',
    '委内瑞拉',
  ],
  endemicTo: ['南美洲'],
  range:
    '广布于安第斯山脉以东的南美洲，已知范围分成西部亚马孙、东部亚马孙与圭亚那地区、巴西东部至阿根廷米西奥内斯等相隔区域；采集空缺和未解决的种界都可能影响范围图。法属圭亚那记录已受质疑，巴拉圭缺少可靠凭证，乌拉圭仍属推测。',
  center: { lat: -9.5, lng: -57.0 },
},
~~~

`center` 只把地图视口放在南美洲中部，不代表密度中心、模式产地或巢址。

推荐生境：

| name | realm | isPrimary | 推荐描述 | 边界 |
| --- | --- | ---: | --- | --- |
| 湿润森林土壤与落叶层 | terrestrial | true | 亚马孙和大西洋森林中湿润、疏松、富腐殖质的土层、树根与腐木周边。 | 穴居动物偶尔被翻出，不代表长期在地表活动。 |
| 稀树草原、灌丛与 Caatinga | terrestrial | 省略 | 能利用较开放或季节偏干的环境，但仍依赖可钻掘并保有水分的土壤微环境。 | “耐较干环境”不等于生活在裸沙或岩地。 |
| 荫蔽可可农林系统与乡村花园 | terrestrial | 省略 | 南巴伊亚 cabruca 的树冠、厚落叶层和肥沃湿土支持较高局地丰度。 | 一个成功的农业系统不能代表所有种植园或证明全球种群稳定。 |
| 浅表隧道与地下育幼巢室 | terrestrial | 省略 | 光滑隧道、树根间巢室和腐殖质空腔用于活动、产卵和育幼。 | 20 厘米隧道深度与 15 厘米巢深来自单一区域。 |

## 体尺、食性、活动与标签

~~~ts
measurements: {
  length: {
    max: 0.72,
    unit: 'm',
    note:
      'UFRO-H 3214 单只雄性保存标本的已发表总长极端记录；此前最大记录为 0.539 m，不代表常见成体上限或典型范围',
  },
},
diet: {
  types: ['carnivore'],
  foods: [
    '土壤无脊椎动物，属蚓螈类资料支持的预期主食',
    '圈养条件下接受的蚯蚓和其他动物性食物',
    '圈养观察中的机会性腐肉',
  ],
  description:
    '成体为肉食者，能咬住食物并沿身体长轴旋转撕取，也会把地表食物拖入洞中。当前缺少本种野外胃含物比例，不能把圈养食物表写成自然食谱。',
},
activity: [
  '主要在地下穴居',
  '在湿润腐殖土和落叶层近表面活动',
  '以头部开挖并使用光滑隧道',
  '雨后可能接近地表',
  '母体在地下巢室守卵并照护幼体',
  '缺少统一昼夜节律证据',
],
tags: [
  '蚓螈目',
  '环管蚓科',
  '南美洲',
  '地下穴居',
  '卵生直接发育',
  '母性食皮',
  '泄殖孔营养分泌物',
  '浅色环沟',
],
~~~

不使用“毒牙”“有毒咬伤”或“昼行/夜行”标签。前者仍处于形态和生化证据阶段，后者缺少全范围活动研究。

## 推荐摘要与描述

~~~ts
summary:
  '环纹蚓螈是南美洲湿土中的无足两栖动物，以蓝灰色圆柱身体和浅色环沟辨识；母体在地下守护陆生卵，孵化后的幼体会周期性取食富脂表皮，并摄食来自母体泄殖孔的营养分泌物。',
description:
  '环纹蚓螈属于蚓螈目环管蚓科，广布于安第斯山脉以东的南美洲森林、稀树草原和部分农林生境。它没有四肢，蓝灰至板岩色身体被浅色环沟分段，小眼和眼鼻之间的感觉触须帮助适应地下生活；头部富集黏液腺，身体后端富集皮肤毒腺。现有最大总长记录为 72 厘米，但来自一只异常巨大的保存标本。它卵生并直接发育，母体在浅层土巢中守卵，幼体孵化后用暂时性多尖牙齿取食母体富脂外层表皮，还会摄食输卵管腺经泄殖孔释放的乳状营养分泌物。IUCN 现行条目沿用 2014 年无危评估，全球种群趋势和数量仍未知；分类边界、局地土壤生境变化与低检出率需要持续研究。',
~~~

## 六个 story candidates

~~~ts
storySections: [
  {
    key: 'an-amphibian-without-legs',
    label: '无足两栖',
    title: '像蚯蚓，也像蛇，但它属于两栖纲',
    body:
      '环纹蚓螈没有四肢，身体近圆柱形，蓝灰皮肤被浅色环沟分成一圈圈。小眼仍可从皮肤下看见，眼与鼻孔之间还有一对感觉触须。现行分类把它放在蚓螈目环管蚓科；旧资料中的蚓螈科口径已经改变。',
  },
  {
    key: 'lubricated-soil-tunnels',
    label: '湿土隧道',
    title: '头部先润滑，身体随后钻入土中',
    body:
      '头部密集的黏液腺会产生含脂质的滑润分泌物，帮助身体贴着土壁推进。南巴伊亚研究者挖到光滑、可分叉的浅表隧道，也常在树根、腐木和厚落叶层附近找到个体；当地最深 20 厘米的记录不是整个物种的钻土极限。',
  },
  {
    key: 'two-ends-two-gland-systems',
    label: '腺体分工',
    title: '身体两端承担不同的地下任务',
    body:
      '头端以大型黏液腺为主，后端则集中皮肤毒腺，还能像塞子一样挡住狭窄隧道。牙齿基部另有齿相关腺，其分泌物显示多种酶活性，但研究尚未证实毒性和有效注入，因此不能把它称作已经确认用毒牙捕猎的动物。',
  },
  {
    key: 'maternal-skin-feeding',
    label: '母性食皮',
    title: '幼体用暂时性牙齿收割母亲的外层皮肤',
    body:
      '孵化后的幼体无色素、没有鳃，仍留在地下巢室。育幼母体的表皮细胞膨大并积累脂质，幼体用多尖匙形牙齿撕取最外层表皮。研究者只完整记录过一次七分钟的食皮过程，不能把这个时长和约 64 小时的单次间隔写成固定日程。',
  },
  {
    key: 'oviduct-milk-provisioning',
    label: '乳状分泌物',
    title: '输卵管腺还为幼体准备另一份营养',
    body:
      '2024 年研究确认，育幼母体肥大的输卵管腺产生富含脂质和碳水化合物的营养分泌物，幼体约两个月内从泄殖孔摄食。研究人员把它称作 milk，但母体没有乳房或乳头；分泌似乎与幼体触碰和发声相伴，触发机制仍待检验。',
  },
  {
    key: 'wide-range-hidden-questions',
    label: '广布谜题',
    title: '范围很大，地下生活仍留下大片空白',
    body:
      '现有记录横跨安第斯山脉以东的南美洲，IUCN 因范围广和生境耐受性在 2014 年列为无危。然而全球数量和趋势没有可靠估计，几个相隔范围块还可能混有采集空缺或未识别谱系。保存湿润有机土和荫蔽农林生境的同时，分类修订与跨区域监测仍是核心任务。',
  },
],
~~~

## 推荐 key facts

以下 30 条均可追溯到上文来源；实现至少保留 18 条，并保留数值限定词。

~~~ts
keyFacts: [
  '它是无四肢的两栖动物，不是蛇、蚯蚓或蚓蜥。',
  '现行分类链为两栖纲、蚓螈目、环管蚓科、环管蚓属。',
  'ASW 6.2 与 ITIS 把命名年份校正为 1822。',
  '2011 年分类研究把环管蚓科从旧蚓螈科口径中恢复并重新界定。',
  '原生范围局限于安第斯山脉以东的南美洲。',
  '范围图分成几个相隔区域，采集空缺与未解决种界都可能影响图形。',
  '法属圭亚那记录受质疑，巴拉圭缺少可靠凭证，乌拉圭仍属推测。',
  '它利用森林湿土、稀树草原、Caatinga 和部分人为改变生境。',
  '该种陆栖并直接发育，不依赖开放水体完成繁殖。',
  '多数已知记录低于约 800 米，但这不是硬海拔上限。',
  '蓝灰至板岩色身体具有浅色环沟，旧诊断记录 78 至 98 个体环。',
  '小眼可见，眼和鼻孔之间有一对感觉触须。',
  '720 毫米总长来自一只异常巨大的保存雄性标本。',
  '南巴伊亚不同样本的体长和体重均值不可拼成全物种典型范围。',
  '头部富集大型黏液腺，含脂质分泌物有助于降低钻土摩擦。',
  '身体后端富集皮肤毒腺，并可堵住与身体等宽的隧道。',
  '牙齿基部有齿相关腺，分泌物具有多种常见于毒液的酶活性。',
  '现有实验尚未验证齿相关分泌物的毒性和有效注入，不能确认毒液咬合。',
  '野外食谱缺少物种级比例数据，圈养观察支持肉食和机会性食腐。',
  '个体能沿身体长轴旋转，帮助撕取较大的食物。',
  '南巴伊亚找到的光滑隧道不深于 20 厘米，但该值不是全物种上限。',
  '没有足够证据把该种统一归为昼行或夜行。',
  '母体把卵产在地下，环抱卵团并会用头轻推卵。',
  '南巴伊亚记录每窝 5 至 16 只幼体，月份物候只适用于当地。',
  '幼体直接孵化为无鳃、无色素的幼体，没有自由生活水生蝌蚪期。',
  '育幼幼体用暂时性多尖匙形牙齿取食母体富脂外层表皮。',
  '一次完整食皮事件持续七分钟，不能据此制定固定觅食日程。',
  '母体输卵管腺产生富含脂质和碳水化合物的乳状营养分泌物。',
  '2024 年研究观察到幼体约两个月从母体泄殖孔摄食该分泌物。',
  'IUCN 现行条目为 2014 年无危，全球种群趋势和成熟个体数仍未知。',
],
~~~

## 威胁与保护行动

推荐 threats：

~~~ts
threats: [
  'IUCN 尚未识别全范围重大威胁，但评估年份较旧且全球趋势未知',
  '局地原生林、湿润腐殖土和厚落叶层被清除或简化',
  '南巴伊亚传统荫蔽可可农林系统衰退可能移除当地重要生境',
  '深翻、土壤压实和化学污染可能伤害穴居个体与浅层巢室，影响程度尚未量化',
  '分类边界未解决，广布物种口径可能掩盖范围较小的谱系',
  '穴居习性和低检出率使局地下降难以及时发现',
],
~~~

推荐 conservation actions：

~~~ts
conservationActions: [
  '保护原生森林中湿润、疏松且富腐殖质的土壤与落叶层',
  '保留大树根系、腐木、落叶堆和其他浅层地下微生境',
  '维持南巴伊亚 cabruca 等保有树冠与厚落叶层的荫蔽农林系统',
  '在已知巢区减少深翻、土壤压实与不必要的农药投入',
  '采用凭证标本、形态和遗传资料修订跨南美洲的分类边界',
  '在不同范围块开展标准化占域、检出率和长期趋势监测',
  '补充野外食性、海拔、活动节律和非巴伊亚种群的繁殖研究',
  '向农林从业者说明蚓螈是无足两栖动物，减少误认成蛇后的杀害',
],
~~~

土壤压实、污染和误杀缺少全范围种群效应量，文本应写“局地潜在压力”或“预防性行动”，不能写成 IUCN 已确认的主要全球威胁。

## 四个 bounded featured stats

~~~ts
featuredStats: [
  {
    key: 'documented-maximum-length',
    label: '最长记录',
    value: '72',
    unit: '厘米',
    note: '单只雄性保存标本 UFRO-H 3214 的异常极端记录，不代表典型成体',
  },
  {
    key: 'primary-annuli',
    label: '体环数',
    value: '78—98',
    unit: '个',
    note: '传统形态诊断范围；浅色环沟大多完整环绕身体',
  },
  {
    key: 'young-per-brood',
    label: '同巢幼体',
    value: '5—16',
    unit: '只',
    note: '南巴伊亚长期野外与圈养研究记录，不代表全范围固定窝数',
  },
  {
    key: 'milk-provisioning-period',
    label: '营养分泌物供给',
    value: '约 2',
    unit: '个月',
    note: '2024 年南巴伊亚来源家庭的研究观察；只指泄殖孔分泌物供给',
  },
],
~~~

不要把 130% 首周增重放入无注释的 featured stat。该结果只来自一窝圈养幼体。也不要录入“育幼 3/5 个月”，因为 2019 年论文内部措辞不一致。

## 六张图片的场景、caption 与验收边界

所有图片坚持物种级识别，不画蛇鳞、叉舌、四肢、外耳、乳房或乳头。环纹蚓螈的身体应近圆柱形、蓝灰至板岩色，浅色环沟明显；头略窄、吻端前突，眼小，眼鼻之间有小型感觉触须。

| 序号与建议 basename | 场景 | 可用 caption | 必须保留的边界 |
| --- | --- | --- | --- |
| `01-moist-leaf-litter-adult` | 一只成体在湿润腐殖土与大西洋森林落叶层上，完整身体盘曲，环沟、眼和触须可辨。 | “湿润落叶层上短暂暴露的环纹蚓螈；大部分生活在土中，画面用于展示物种级外形。” | 单张地表图不能证明昼夜节律、自然地表停留时长、性别、年龄、体长或地点。 |
| `02-root-soil-tunnel` | 个体前半身从树根间光滑浅隧道探出，周围有腐殖质、落叶和腐木。 | “树根与富有机质土壤可形成浅层隧道微生境；南巴伊亚研究中的深度不能外推为全物种上限。” | 不画透明身体或精确洞穴剖面；画面不能证明这条隧道由该个体建造、深度为 20 厘米或正用于繁殖。 |
| `03-mother-guarding-eggs` | 蓝灰、仍有光泽的母体在根间巢室环抱一团相连的陆生卵，卵数落在 5 至 16 内。 | “母体在浅层地下巢室环抱陆生卵；窝数和产卵季节来自南巴伊亚研究。” | 卵数只是这幅构图，不代表固定窝卵数；不画水体、蝌蚪、父母双亲或已知胚胎日龄。 |
| `04-maternal-skin-feeding` | 体色较浅的育幼母体盘曲，数只无色素、头较宽的小幼体贴近体侧表皮；不画血和伤口。 | “孵后幼体会用暂时性多尖牙齿取食母体富脂外层表皮；母体不会被吃掉。” | 静帧不能证明幼体正在吞咽、行为持续七分钟或按固定间隔发生；不表现啃穿皮肤、出血或母体死亡。 |
| `05-young-at-maternal-vent` | 母体后端轻微抬起，多只幼体聚集在泄殖孔周围；分泌物只用细微透明湿润感表现。 | “幼体会聚集在母体泄殖孔附近摄食输卵管腺产生的营养分泌物。” | 不画乳房、乳头、乳白喷流或哺乳姿势；单帧不能证明分泌物成分、摄食持续时间、触觉或声音因果。 |
| `06-shaded-cacao-agroforest` | 荫蔽 cabruca 可可园广景，原生大树树冠、可可树、厚落叶层和树根微生境清楚，一只个体只作近景比例。 | “南巴伊亚荫蔽可可农林系统保留树冠、湿土和厚落叶层，可支持当地研究种群。” | 不把一个农业系统画成原始森林，不声称所有可可园适生，也不由一只动物推断丰度或保护成功。 |

图片 alt 应只描述画面可见内容。caption 可以解释研究背景，但必须保留表中尺度与因果限制。

## 恰好 18 个可直接落库的 SpeciesSource

以下数组含 18 个唯一 HTTPS URL，覆盖 `taxonomy`、`conservation`、`distribution`、`ecology` 和 `general` 五种 schema kind。它没有把同一论文的 DOI、PubMed 和 PMC 页面重复计数。

~~~ts
const ringedCaecilianSources = [
  {
    title: 'Amphibian Species of the World 6.2 — Siphonops annulatus',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'ITIS — Siphonops annulatus (TSN 668505)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=668505',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'A nine-family classification of caecilians (Amphibia: Gymnophiona)',
    url: 'https://doi.org/10.11646/zootaxa.2874.1.3',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'IUCN Red List — Siphonops annulatus assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'CPRH — Avaliação do Estado de Conservação dos Anfíbios e Répteis de Pernambuco',
    url: 'https://www2.cprh.pe.gov.br/wp-content/uploads/2023/02/E-book-Avaliacao-do-Estado-de-Conservacao-dos-Anfibios-e-Repteis-de-Pernambuco-Vermelho-IMPRESSAO-ATUALIZADA.pdf',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Conservation of Siphonops annulatus in Brazilian cacao plantations',
    url: 'https://doi.org/10.21757/0103-3816.2015v27n3p233-238',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Taxonomy and distribution of caecilians of Brazilian Amazonia',
    url: 'https://doi.org/10.11646/zootaxa.2984.1.1',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Rediscovery of Siphonops annulatus in Pará with an updated distribution map',
    url: 'https://doi.org/10.15560/9.1.106',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Argentina National Parks SIB — Siphonops annulatus',
    url: 'https://sib.gob.ar/especies/siphonops-annulatus',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'One hundred million years of skin feeding?',
    url: 'https://doi.org/10.1098/rsbl.2008.0217',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Life history and reproduction of Siphonops annulatus',
    url: 'https://doi.org/10.1111/azo.12254',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Milk provisioning in oviparous caecilian amphibians',
    url: 'https://doi.org/10.1126/science.adi5379',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Skin gland concentrations in the head and posterior regions of Siphonops annulatus',
    url: 'https://doi.org/10.1038/s41598-018-22005-5',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Morphological evidence for an oral venom system in caecilian amphibians',
    url: 'https://doi.org/10.1016/j.isci.2020.101234',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Morphology of cutaneous poison and mucous glands in Siphonops annulatus',
    url: 'https://doi.org/10.3390/toxins13110779',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Metabolic and endocrine changes during the reproductive cycle of dermatophagic caecilians',
    url: 'https://doi.org/10.1016/j.zool.2013.06.002',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'A Goliath among Davids: an impressive new size record for Siphonops annulatus',
    url: 'https://sedici.unlp.edu.ar/bitstream/handle/10915/168077/Documento_completo.pdf-PDFA.pdf?sequence=1',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Guia de Identificação das Espécies de Anfíbios e Répteis do Brasil Central',
    url: 'https://books.scielo.org/id/9qfsp/pdf/vaz-9786587590011.pdf',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
] as const satisfies readonly SpeciesSource[];
~~~

计数：taxonomy 3、conservation 3、distribution 3、ecology 7、general 2，总计 18。

## 字段级证据矩阵

| 实现字段 | 主证据 | 次证据 | 决策 |
| --- | --- | --- | --- |
| taxonomy | ASW 6.2 | ITIS、Wilkinson et al. 2011 | Siphonopidae；年份 1822。 |
| aliases | ASW 6.2 | 巴西中部官方指南 | 收录三个明确名称，排除泛称 cobra-cega。 |
| conservation | IUCN 2014-1 | IUCN 2026-1 版本页 | LC、unknown、2014、无 criteria。 |
| countries | ASW 6.2 | 范围修订、Argentina SIB | 保守收录九地，争议地写入 range。 |
| endemicTo | ASW 6.2 | 范围论文 | 仅洲级 `南美洲`。 |
| habitats | IUCN | 2015、2019 南巴伊亚研究 | terrestrial；湿土、开放生境与荫蔽农林系统。 |
| elevation | IUCN | 无新全范围区间 | 正文写多数低于约 800 m，metrics 留空。 |
| length | 2021 极端标本论文 | 2013 前纪录 | max 0.72 m，强调单只保存标本。 |
| weight | 2015、2019 局地样本 | 无全范围综合 | 留空。 |
| diet | 2019 行为论文 | 2020 捕食形态论文 | carnivore；不构造野外食物比例。 |
| activity | 2019 长期研究 | 单次雨后观察 | 不设昼行或夜行。 |
| reproduction | 2019 长期研究 | 2008、2024 育幼研究 | 卵生直接发育；月份限定南巴伊亚。 |
| dermatophagy | Wilkinson et al. 2008 | Jared et al. 2019 | 实证行为，事件时长不外推。 |
| milk-like secretion | Science 2024 | 2008 早期观察 | 约两个月；输卵管腺；脂质与碳水；不用哺乳动物解剖。 |
| gland systems | 2018、2021 腺体研究 | 2020 齿相关腺 | 头部润滑、后端防御；口腔毒液功能未定。 |
| threats/actions | IUCN | 2015、2019 微生境研究 | 无已知全球重大威胁；强调局地生境与数据缺口。 |
| metrics | 全部来源 | 无 | 保持 `{}`。 |

## 冲突与禁止表述

| 不安全写法 | 问题 | 安全写法 |
| --- | --- | --- |
| “命名于 1820 年” | 现行 ASW 与 ITIS 已采用 1822。 | “现行分类数据库采用 (Mikan, 1822)，旧资料常写 1820。” |
| “属于蚓螈科 Caeciliidae” | 旧科级口径。 | “属于 Siphonopidae，仓库译作环管蚓科。” |
| “全球种群稳定” | LC 不能推出 stable，评估无趋势序列。 | “全球趋势未知。” |
| “遍布连续的南美洲低地” | 范围有大空缺，分类边界未解决。 | “安第斯以东多个相隔范围块。” |
| “确定分布于法属圭亚那、巴拉圭和乌拉圭” | 三地分别存在否定、无凭证或推测问题。 | 把三地留在争议说明，不进保守 countries 数组。 |
| “一般长 72 厘米” | 720 mm 是一只异常保存标本。 | “最长已发表记录 72 厘米，非典型值。” |
| “夜行性” | 缺少物种级统一节律研究。 | “主要穴居，雨后可能接近地表。” |
| “主要吃蚯蚓、蛙、蜥蜴和蛇” | 多数来自其他蚓螈或圈养资料。 | “肉食；本种野外食谱比例未知。” |
| “毒牙向猎物注毒” | 2020 研究未完成毒性和有效注入验证。 | “齿相关腺有毒液常见酶活性，功能仍待验证。” |
| “幼体每三天吃母皮七分钟” | 七分钟只有一个完整事件，64 小时只有一个间隔。 | “食皮短促且周期性，现有样本不足以制定固定日程。” |
| “幼体吃掉母亲” | 只取食可再生外层表皮。 | “幼体收割富脂角质层，母体继续存活。” |
| “母体像哺乳动物一样哺乳” | 分泌源是输卵管腺，经泄殖孔释放。 | “母体提供乳状营养分泌物，无乳房或乳头。” |
| “叫声触发泌乳” | 论文只说 seemingly 响应触觉和声音。 | “分泌与幼体触碰和发声相伴，因果待检验。” |
| “育幼固定三个月” | 2019 论文在 3、5、6 个月口径上描述不同阶段。 | “卵期与孵后照护跨数月；分泌物供给约两个月。” |
| “无危所以不需要保护” | 评估旧、分类未解、局地生境仍可退化。 | “全球 LC；保留局地土壤生境并更新分类和趋势资料。” |

## 实现验收清单

- `id`、`slug`、中英文名和三个别名唯一。
- 分类链精确使用 Animalia、Chordata、Amphibia、Gymnophiona、Siphonopidae、*Siphonops*。
- conservation 为 LC、unknown、2014，`criteria === undefined`。
- `realms` 只有 terrestrial；保守 countries 为九地；`endemicTo` 只写南美洲。
- length 只有 `max: 0.72 m`，note 包含单只、保存标本、极端记录；不填 weight。
- `metrics` 为 `{}`，不填海拔、体重、成体长度、寿命或成熟个体数。
- 六个 story key 唯一；key facts 至少 18 条；featured stats 恰好四条。
- 食皮文本同时包含外层表皮、暂时性多尖牙齿与样本边界。
- “乳汁”文本同时包含输卵管腺、泄殖孔、约两个月和非哺乳动物解剖边界。
- 齿相关腺文本明确说明毒性与注入功能尚未验证。
- threats 不声称 IUCN 已识别全球重大威胁；actions 区分实证生境需求和预防性土壤管理。
- sources 恰好 18 个、URL 唯一、全为 HTTPS、五种 kind 全覆盖、访问日均为 2026-08-30。
- 六幅图不出现四肢、蛇鳞、叉舌、乳房、乳头、血腥食皮或夸张毒牙。
