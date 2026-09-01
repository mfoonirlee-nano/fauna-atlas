# 大型溞（_Daphnia magna_）完整档案研究

- 检索与核验日期：2026-09-01
- 使用范围：`src/data/species.ts` 的大型溞条目、详情页长文、数字卡和六张图片验收
- 证据标准：接受名由 WoRMS、ITIS、Catalogue of Life 和 GBIF Backbone 交叉核验；六级分类采用 WoRMS 与枝角类分类文献把 Anomopoda 置于目级的口径，并记录其他数据库把 Diplostraca 置于目级的差异。中文名与生态毒理方法优先采用生态环境部现行标准 HJ 1456-2026；生态与生命史采用同行评审原始研究。IUCN 检索缺席、EUNIS 的“未评估”和 NatureServe 的 GNR 只用于确认评估空缺，不能解释为安全。
- 数据边界：大型溞研究高度依赖单克隆、实验室培养和标准化水体。凡是温度、成熟时间、产卵数、捕食者反应和毒性终点，都应保留克隆、龄期、水质、食物与实验条件。GBIF 点位不能直接当作原生国家清单。

## 先给实现者的结论

| 字段                      | 推荐值                                                                                                               | 依据与边界                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                      | `species-daphnia-magna`                                                                                              | 与仓库现有 `species-<genus>-<species>` 规则一致                                                                  |
| `slug`                    | `large-water-flea`                                                                                                   | 沿用仓库对有稳定英文俗名物种采用英文 slug 的口径，并与六张运行时图片目录一致                                     |
| 中文名                    | `大型溞`                                                                                                             | 生态环境部 HJ 1456-2026 的现行标准用名                                                                           |
| 英文名                    | `Large Water Flea`                                                                                                   | 可读俗名；正文必须说明它是鳃足类甲壳动物，不是昆虫或真正的蚤                                                     |
| 别名                      | `['大型水蚤', 'Large Waterflea', 'Daphnia (Ctenodaphnia) magna']`                                                    | “大型水蚤”见旧国家标准标题；带亚属组合见 Catalogue of Life，不替换主科学名                                       |
| `scientificName`          | `Daphnia magna`                                                                                                      | 完整接受名为 _Daphnia magna_ Straus, 1820；字段按仓库惯例不带命名人                                              |
| 六级分类                  | Animalia / Arthropoda / Branchiopoda / Anomopoda / Daphniidae / _Daphnia_                                            | WoRMS 与枝角类文献把 Anomopoda 置于目级；ITIS、COL 与 GBIF 的 Diplostraca 目级口径保留在正文说明                 |
| `conservation`            | `conservation('NE', 'unknown')`                                                                                      | EUNIS 明确写“尚未接受 IUCN Red List 评估”；NatureServe 为 GNR。NE 不是 LC                                        |
| `distribution.realms`     | `['freshwater']`                                                                                                     | 主要为静水淡水种；部分种群能进入弱咸水，不应改成海洋种                                                           |
| `distribution.continents` | `['欧洲', '亚洲', '北美洲', '非洲']`                                                                                 | 分子研究支持欧亚与北美谱系，北非临时池塘有一手记录；“非洲”必须在 `range` 中限定为北非证据                        |
| `distribution.countries`  | `[]`                                                                                                                 | 不制作伪完整国家清单。GBIF 汇总包含采样偏差、误鉴定和实验室逸出风险                                              |
| `distribution.center`     | `{ lat: 50, lng: 35 }`                                                                                               | 仅作欧亚主范围的宽视口，不是起源地、模式产地或丰度热点                                                           |
| `measurements.length`     | `{ min: 2.2, max: 6, unit: 'mm', note: '成体体长；雌性约 2.9至6.0 mm，雄性约 2.2至3.5 mm，来源为挪威区域鉴定资料' }` | 合并雌雄范围；不能删掉性别和资料区域说明                                                                         |
| `metrics.adultLengthCm`   | `[0.22, 0.6]`                                                                                                        | 与上项换算一致。不要填体重或全球寿命指标                                                                         |
| `diet.types`              | `['filter-feeder']`                                                                                                  | 主机制是悬浮滤食。可在 foods 中写藻类、细菌、细颗粒碎屑和附生生物，不宜再贴“纯植食”                              |

### 四张数字卡

```ts
featuredStats: [
  {
    key: "adult-length",
    label: "成体体长",
    value: "约 2.2至6.0",
    unit: "毫米",
    note: "雌性约 2.9至6.0 毫米，雄性约 2.2至3.5 毫米；区域鉴定资料",
  },
  {
    key: "maturity-at-20c",
    label: "20℃培养至性成熟",
    value: "6至8",
    unit: "天",
    note: "HJ 1456-2026 的标准培养背景，不是所有野外种群的固定年龄",
  },
  {
    key: "resting-eggs",
    label: "每个卵鞍的休眠卵",
    value: "通常 2",
    unit: "枚",
    note: "卵鞍也可能为空或只有一枚；休眠卵与卵鞍不是同一个结构",
  },
  {
    key: "standard-tests",
    label: "标准急性 / 繁殖试验",
    value: "48 / 21",
    unit: "小时 / 天",
    note: "OECD TG 202 的急性活动抑制与 TG 211 的繁殖试验周期",
  },
];
```

长度卡采用可追溯的雌雄区间。6 至 8 天只适用于 HJ 标准给出的 20℃培养背景。休眠卵卡应写“通常”，因为卵鞍可能没有装满。48 小时和 21 天是试验设计，不是寿命或野外暴露阈值。

## 接受名、中文名与分类链

ITIS 将 **_Daphnia magna_ Straus, 1820** 列为有效种，TSN 83884，记录可信度为“verified, standards met”。Catalogue of Life 接受带亚属写法 **_Daphnia (Ctenodaphnia) magna_ Straus, 1820**，但产品主科学名仍应使用更通行的 _Daphnia magna_。GBIF Backbone 的接受种键为 **2234822**。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=83884) [Catalogue of Life](https://www.catalogueoflife.org/data/taxon/6CCSV) [GBIF](https://www.gbif.org/species/2234822)

Catalogue of Life 当前页列出 _Daphnia lincovi_ Schiklejev, 1932 和 _Daphnia schaefferi_ Baird, 1850 等异名。它们只适合用于检索历史文献，不宜当成平行有效种名展示。[Catalogue of Life](https://www.catalogueoflife.org/data/taxon/6CCSV)

推荐六级链如下：

| rank    | scientificName | zhName     |
| ------- | -------------- | ---------- |
| kingdom | Animalia       | 动物界     |
| phylum  | Arthropoda     | 节肢动物门 |
| class   | Branchiopoda   | 鳃足纲     |
| order   | Anomopoda      | 异足目     |
| family  | Daphniidae     | 溞科       |
| genus   | _Daphnia_      | 溞属       |

分类系统对中间阶元并不完全一致。WoRMS 与 Fauna Europaea/PESI 把 Diplostraca 放在更高阶元、把 Anomopoda 置于目级，枝角类分类论文也常用 Cladocera: Anomopoda: Daphniidae 表达本支；ITIS、Catalogue of Life、GBIF Backbone 和 EUNIS 则把 Diplostraca 放在目级。生态环境部 HJ 1456-2026 使用“枝角目/枝角亚目”的国内传统表述。产品只有一个 `order` 字段，本档案选择 **Anomopoda / 异足目**，并在正文保留替代口径，避免把 Diplostraca、Cladocera 和 Anomopoda 同时塞入一个阶元。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=148372) [Fauna Europaea/PESI](https://www.eu-nomen.eu/portal/taxon.php?GUID=urn%3Alsid%3Afaunaeur.org%3Ataxname%3A237016) [ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=83884)

“大型溞”有现行官方中文依据。HJ 1456-2026 的标题为《水质 急性毒性的测定 大型溞活动抑制法》，2026-05-01 起实施。旧 GB/T 13266-91 使用“大型蚤”，GB/T 16125-1995 曾使用“大型水蚤”；这些旧称可解释别名来源，不能覆盖现行主名。[生态环境部 HJ 1456-2026](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202602/W020260206384592303542.pdf) [国家标准全文公开系统 GB/T 16125-2012](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7E175D3A7E05397BE0A0AB82A)

## 分布与生境

### 能写到的范围

大型溞的可靠大尺度描述是“广布于北半球温带至寒温带，并在北非部分临时水体有记录”，不是不加限定的“全球各地”。欧亚北部密集采样显示西欧、中东、西西伯利亚与东亚谱系之间存在很深的线粒体分化，接触带位于西西伯利亚东部附近；研究没有证据把这两大线粒体支系拆成隐存种。欧洲研究还发现明显的区域遗传结构，并显示欧洲样本与北美、日本样本之间的分化更高。[Bekker et al. 2018](https://doi.org/10.1371/journal.pone.0194045) [De Gelas & De Meester 2005](https://doi.org/10.1111/j.1365-294X.2004.02434.x)

北非证据来自阿尔及利亚临时池塘来源的大型溞克隆及当地捕食者线索实验。它确认北非存在种群，却不能支撑“非洲大陆广布”。[Chakri et al. 2010](https://doi.org/10.1016/j.crvi.2010.09.004)

GBIF 汇集大量现代出现记录，适合做记录浏览和数据下载，不适合直接回答哪些国家属于原生范围。淡水微型甲壳类容易被被动运输；实验室培养株还可能逸出。墨西哥记录研究已经展示“历史记录、身份确认与实验室逸出”之间的困难。因此 `countries` 留空比列几十个未经逐条审计的国家更准确。[GBIF](https://www.gbif.org/species/2234822) [Mexican occurrence and laboratory-escape study](https://doi.org/10.1007/s10530-023-03164-7)

### 主要生境

1. **浅而富营养的永久池塘、沟渠与小型水库**：大型溞常见于静水或流速很低的水体，悬浮藻类丰富时可形成高密度种群。
2. **季节性或临时池塘、岩池**：水体干涸会清除活动个体，沉积物中的卵鞍和休眠卵支持下一次水期重建。岩池系统中不同池塘的占据状态频繁变化，适合用集合种群尺度解释。
3. **湖泊与水库的开放水体**：它是浮游食物网中的大型枝角类，但强烈的视觉性鱼类捕食会压低或排除大型个体，不能把所有有鱼湖泊都画成典型优势生境。
4. **弱咸水池塘与沿海岩池**：对奥地利和匈牙利 21 个种群、126 个克隆的共同园实验显示盐度反应存在区域、种群和克隆差异；实验中的死亡率在约 5 至 8 g/L 区间快速上升。这个范围是两个内陆盐水景观的实验结果，不是全物种统一耐受线。[Brans et al. 2024](https://doi.org/10.1098/rspb.2023.1917)
5. **近底层和附生生物表面**：它并非只能悬浮在开阔水层。实验表明，当浮游绿藻不足时，大型溞能够摄食附生生物，把水层与底栖食物途径连接起来。[Siehoff et al. 2009](https://doi.org/10.1111/j.1365-2427.2008.02087.x)

推荐字段：

```ts
distribution: {
  realms: ['freshwater'],
  continents: ['欧洲', '亚洲', '北美洲', '非洲'],
  regions: ['古北界与北美温带、寒温带水域', '北非部分临时池塘', '淡水及部分弱咸水静水水体'],
  countries: [],
  range: '广布于欧洲、亚洲和北美洲的温带至寒温带静水水体，北非部分临时池塘也有可靠记录；不同大陆与欧亚东西部种群存在明显遗传结构。出现记录不等同于原生分布。',
  center: { lat: 50, lng: 35 },
},
habitats: [
  {
    name: '浅水池塘、沟渠与小型水库',
    realm: 'freshwater',
    description: '偏好静水或缓流、常较富营养的水体；浮游藻类丰富时可迅速增加。',
    isPrimary: true,
  },
  {
    name: '季节性池塘与岩池',
    realm: 'freshwater',
    description: '活动种群会随干涸消失，沉积物中的卵鞍和休眠卵参与下一水期重建。',
  },
  {
    name: '湖泊和水库开放水层',
    realm: 'freshwater',
    description: '作为大型浮游滤食者连接初级生产者与鱼类、昆虫等捕食者；强鱼类捕食会限制其局部丰度。',
  },
  {
    name: '弱咸水池塘与沿海岩池',
    realm: 'freshwater',
    description: '部分种群可生活在弱咸水；盐度耐受具有种群差异，不能套用单一阈值。',
  },
],
```

## 形态、尺寸与影像识别

大型溞是毫米级鳃足类甲壳动物。头部裸露，躯干大部包在左右两层薄而透明的几丁质背甲内。第二触角粗大、分枝，是主要游泳器官；五对叶状胸肢位于背甲腹侧，兼具滤食水流、摄食处理和呼吸相关功能。头部最醒目的是中央复眼，旁边还有较小的无节幼体眼。心脏、肠道、卵巢和背侧育儿室常能透过背甲看到。[Ebert 2005](https://www.ncbi.nlm.nih.gov/books/NBK2042/) [Ngu et al. 2025](https://doi.org/10.1016/j.scitotenv.2024.177930) [Daphnia Anatomy Atlas](https://daphnia.io/anatomy/)

生长与蜕皮交替。腹部末端能从背甲腹侧伸出，末端有成对后腹爪；背甲后端形成尾刺。幼体并不是缩小版昆虫，没有六条步足、翅芽或蚤类跳足。影像中要同时保留分枝第二触角、单个醒目复眼、透明背甲、五对叶状胸肢和尾刺。[Mittmann et al. 2014](https://doi.org/10.1186/2041-9139-5-12)

挪威区域鉴定资料给出的雌体范围为 **2.9 至 6.0 mm**，雄体为 **2.2 至 3.5 mm**。雄体通常更小，第一触角更长，第一胸肢带抱握钩；雌体具有明显背侧育儿室。这个范围适合做有来源说明的合并成体尺度，不代表全球每个克隆的统计分布。[NINA Daphnia magna factsheet](https://www.nina.no/archive/nina/PppBasePdf/NINA-Infomateriell/2007/krepsdyrfaktaark/walseng_Daphnia%20magna.pdf) [Olmstead & LeBlanc 2000](https://doi.org/10.1002/etc.5620190821)

活体通常透明至半透明，肠内容物会让局部显出绿、褐等食物颜色；低氧还会诱导血红蛋白增加，使个体偏红。产品不应把绿色、红色或完全无色设为全种固定体色。[Ebert 2005](https://www.ncbi.nlm.nih.gov/books/NBK2042/)

推荐：

```ts
measurements: {
  length: {
    min: 2.2,
    max: 6,
    unit: 'mm',
    note: '成体体长；雌性约 2.9至6.0 mm，雄性约 2.2至3.5 mm，区域资料',
  },
},
metrics: {
  adultLengthCm: [0.22, 0.6],
},
```

不要填 `weight`、`adultMassKg` 或统一 `lifespanYears`。生态毒理实验株的鲜重、干重和培养寿命强烈依赖克隆、龄期、食物和温度，不适合作为野外成体通用指标。

## 滤食机制、食物与食物网位置

大型溞以悬浮滤食为主。叶状胸肢的节律运动使水流进入背甲腹侧，第三、第四胸肢的刚毛滤板捕获颗粒，食物沿腹侧食物沟送入口中。胸肢水流也参与气体交换；育儿室另有受母体运动影响的通流。[Ebert 2005](https://www.ncbi.nlm.nih.gov/books/NBK2042/) [Seidl et al. 2002](https://doi.org/10.1078/0944-2006-00050)

实验显示，0.5 μm 颗粒的留存效率会受表面电荷和润湿性影响，并可高于简单筛网模型的预测。因此“像滤网一样截住所有小于某尺寸的颗粒”并不准确。颗粒尺寸、表面化学、食物浓度、温度、体型和水质都会改变摄食效率。[Gerritsen & Porter 1982](https://doi.org/10.1126/science.216.4551.1225)

常见食物包括单细胞藻类、细菌和细颗粒有机碎屑。附生生物实验还表明，当水中绿藻浓度很低时，大型溞能转向表面取食；有浮游绿藻时仍优先使用浮游食源。这个结果支持“可耦合水层和底栖食物网”，不支持把它改写成主动刮食大型水草的植食动物。[Siehoff et al. 2009](https://doi.org/10.1111/j.1365-2427.2008.02087.x)

作为初级消费者，大型溞把藻类和微生物生产转给鱼类、摇蚊幼虫、剑水蚤、负子蝽类和蝌蚪虾等捕食者。大型枝角类大量滤食可参与湖泊“清水期”，但效果取决于营养盐、藻类组成、鱼类捕食和群落结构，不能保证投放大型溞就能净化任意水体。

推荐字段：

```ts
diet: {
  types: ['filter-feeder'],
  foods: ['单细胞藻类与其他浮游植物', '细菌', '细颗粒有机碎屑', '附生生物'],
  description: '五对叶状胸肢维持背甲腹侧水流，滤板捕获悬浮颗粒并将其送入口部；浮游食物不足时也能从表面摄取附生生物。颗粒留存不只是机械筛分。',
},
activity: ['水层中跳跃式游泳', '持续悬浮滤食', '可在近底层或表面摄食', '蜕皮式生长'],
```

## 周期性孤雌生殖、育儿室与卵鞍

大型溞是周期性孤雌生殖者。条件适合时，雌体产生不经受精的二倍体即时卵，卵进入背侧育儿室并发育，释放的通常是雌性幼溞。它们不是哺乳动物式“怀孕生仔”；胚胎在育儿室中发育，产出动作是从育儿室释放幼体。[Ebert 2005](https://www.ncbi.nlm.nih.gov/books/NBK2042/) [Kato et al. 2019](https://doi.org/10.1371/journal.pone.0224388)

HJ 1456-2026 的培养背景写明：20℃时经历 4 至 6 个幼龄期，约 6 至 8 天达到性成熟；稳定温度和充足食物下，实验培养常见每胎 20 至 30 枚即时卵，最多可达 150 枚。实时产卵观察论文记录过最多约 80 枚即时卵。两组上限来自不同实验背景，说明产卵数不应做全种固定卡片。[生态环境部 HJ 1456-2026](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202602/W020260206384592303542.pdf) [Kato et al. 2019](https://doi.org/10.1371/journal.pone.0224388)

环境信号可使某些克隆进入有性阶段，先产生雄性，再产生需要受精的单倍体卵。经典实验中，短日照、食物限制和化学性拥挤信号三者同时出现才诱导该实验系统形成有性卵；只有两种信号时可以出现雄性，却没有形成有性卵。它证明多信号整合，不证明所有克隆、纬度和水体都需要完全相同的三项条件。[Kleiven et al. 1992](https://doi.org/10.2307/3545010)

甲基法呢酯信号通路参与环境性别决定。母体卵母细胞发育中的短时间窗口决定下一窝是否转向雄性。该机制说明性别是母体对环境信号的发育响应，不能写成温度直接把已出生雌体“变成雄体”。[Olmstead & LeBlanc 2002](https://doi.org/10.1002/jez.10162)

有性卵受精后装入背甲背侧特化、常被黑色素加深的保护结构，称为 **卵鞍 ephippium**。一个卵鞍通常含两枚休眠卵，每侧卵巢各贡献一枚；也可能只含一枚或为空。卵鞍随下一次蜕皮脱落，可沉入底泥或被水、风、鸟类和其他载体搬运。休眠卵承受干燥、冻结和食物断绝，并在适宜光照、温度和水环境中孵化出雌性幼体。[Ebert 2005](https://www.ncbi.nlm.nih.gov/books/NBK2042/) [Alekseev & Lampert 2001](https://doi.org/10.1038/414899a)

“休眠卵”和“卵鞍”不能互换。休眠卵是胚胎，卵鞍是背甲特化形成的保护盒。沉积物蛋库可以保存多年并用于“复活生态学”，但只有一部分历史胚胎会在采样、储存与孵化条件下成功出苗。由沉积芯孵出的克隆是被保存和成功孵化者的偏样本，不是过去种群的完整时间胶囊。[Cuenca Cambronero & Orsini 2018](https://doi.org/10.3791/56637) [Santos & Ebert 2023](https://doi.org/10.1007/s00442-023-05478-8)

## 捕食者诱导的可塑性

大型溞会根据捕食者化学线索改变生活史和形态，但响应必须写清捕食者、克隆和龄期。北非临时池塘来源克隆在食蚊鱼线索下更早、以更小体型首次繁殖；负子蝽 _Notonecta glauca_ 线索使体型和幼体大小改变，却没有同样提前首次繁殖。[Chakri et al. 2010](https://doi.org/10.1016/j.crvi.2010.09.004)

蝌蚪虾 _Triops cancriformis_ 的接触或化学线索在特定实验克隆中诱导更宽、更粗壮的体形，并延长尾刺。不同防御性状随发育阶段改变，对捕食试验中的存活有作用。[Rabus & Laforsch 2011](https://doi.org/10.1111/j.1365-2435.2011.01840.x)

同一捕食系统还显示背甲材料发生变化。2013 年实验中，诱导组背甲表面弹性模量约增至五倍，切片厚度约增至两倍，连接内外背甲层的柱状结构也增粗。厚度样本量有限，论文没有对该项做统计检验，因此产品只能写“该克隆实验中观察到更硬、更厚的背甲”，不能把倍数做物种固定特征。[Rabus et al. 2013](https://doi.org/10.1371/journal.pone.0067856)

2020 年另一项 60 只/处理的实验再次观察到相对体宽和尾刺长度增加，却发现处理组体长较短。该差异正好说明“遇到捕食者就整体变大”过度简化；体长、宽度、尾刺和背甲材料可以沿不同方向变化。[Ritschar et al. 2020](https://doi.org/10.1038/s41598-020-79755-4)

头盔、颈齿和“荆棘冠”是其他溞属物种中的经典诱导结构，不应拼接到大型溞身上。大型溞主视觉应保留正常圆钝头部；需要表现诱导防御时，可画更宽的躯体、较长尾刺和厚实背甲，但图注必须限定为蝌蚪虾线索下的实验表型。

## 生态毒理模式生物

大型溞适合标准试验，原因包括体型相对较大、透明、容易培养、世代短、能用孤雌生殖建立遗传背景较一致的克隆，并处于淡水食物网关键营养级。优势来自可重复性，不代表它对每种污染物都是最敏感物种。

### OECD TG 202：急性活动抑制

OECD TG 202 通常使用出生不足 24 小时的幼溞，每个浓度至少 20 只，暴露 48 小时，在 24 和 48 小时记录活动抑制并估算 48 h EC50。这里的“immobilisation”是规定观察条件下不能游动；它可以包括死亡，却不等同于死亡率。[OECD TG 202](https://doi.org/10.1787/9789264069947-en)

中国现行 HJ 1456-2026 采用相同核心思路，适用于地表水、地下水、生活污水和工业废水。标准在 20℃±2℃下暴露 48 小时，计算最低无效应稀释倍数 LID 或 EC50；轻摇容器后 15 秒内不能游动即判为活动抑制，即使触角仍在动也算抑制。测试用幼溞不超过 24 小时，急性暴露期间不喂食。[生态环境部 HJ 1456-2026](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202602/W020260206384592303542.pdf)

### OECD TG 211：繁殖

OECD TG 211 以出生不足 24 小时的年轻雌体开始，持续 21 天，核心终点是每个亲体或每个存活亲体产生的活后代数量，同时记录亲体死亡和水质等信息。它检测长期暴露下的繁殖影响，不是 21 天种群普查。[OECD TG 211](https://www.oecd.org/en/publications/test-no-211-daphnia-magna-reproduction-test_9789264185203-en.html)

### 结果解释必须停止的位置

- 单个克隆的 EC50、NOEC 或繁殖效应不能直接变成所有大型溞种群的统一阈值。
- TG 202 的活动抑制不是化学物鉴定，也不是“水样安全证书”。pH、硬度、溶氧、温度、颗粒物和混合污染都会影响结果。
- TG 211 的活后代数不是野外种群趋势；捕食、食物、竞争、季节和休眠卵库在标准烧杯中被大幅简化。
- 一个大型溞试验不能代表所有水生无脊椎动物。EFSA 的分级风险评估会根据问题加入更多物种、暴露修正和高阶群落证据。[EFSA PPR Panel 2013](https://doi.org/10.2903/j.efsa.2013.3290) [EFSA PPR Panel 2021](https://doi.org/10.2903/j.efsa.2021.6498)

推荐描述：

> 大型溞能以克隆培养提供可重复的淡水无脊椎动物反应。OECD 以 48 小时活动抑制和 21 天繁殖试验分别观察短期运动能力与长期繁殖输出；结果只适用于规定克隆、龄期、水质和暴露设计，需要与其他物种和现场证据共同解释。

## 保护状态与证据空缺

截至 2026-09-01，EUNIS 明确标注大型溞“Not evaluated (IUCN)”并写明尚未接受 IUCN Red List 评估。NatureServe 的全球状态是 **GNR, Global Not Ranked**。因此仓库应填 `NE` 和 `unknown`，不填评估年份、标准、成熟个体数或趋势。[EUNIS](https://eunis.eea.europa.eu/species/257821) [NatureServe Explorer](https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.1102152/Daphnia_magna) [IUCN species search](https://www.iucnredlist.org/search?query=Daphnia%20magna&searchType=species)

NE 的含义是没有全球评估，不是“无危”。实验室广泛培养、GBIF 记录多、某个池塘季节性暴发，都不能替代全球种群评估。大型溞由许多彼此隔离、遗传分化明显的局部种群组成；局部消失和休眠卵再建立可同时发生，单次水样阴性也不能证明局部永久灭绝。

在没有全球评估的前提下，`threats` 只能写有机制证据的局部压力，不称为全球主要威胁：

```ts
threats: [
  '临时池塘排水、水文改变和沉积物扰动可破坏局部活动种群及休眠卵库',
  '鱼类引入或捕食压力升高会压低大型枝角类的局部占据与体型结构',
  '盐化、升温和污染物会造成种群与克隆特异的生存、发育或繁殖效应',
  '实验室培养株逸出、被动转移和误鉴定会干扰分布与遗传结构判断',
],
conservationActions: [
  '保存永久与季节性池塘组成的水体网络，并避免破坏含卵鞍的表层沉积物',
  '用形态凭证、条形码和采样元数据核验分布记录，区分原生、引入和培养株',
  '长期记录水期、鱼类、盐度、污染物、活动种群与休眠卵库，而非只统计一次丰度',
  '避免随意释放实验室克隆，并在生态毒理监测中加入多物种和现场验证',
],
```

这些行动是谨慎的生态管理建议，不代表大型溞已经被列为受威胁物种。

## 推荐的详情页文案骨架

### `summary`

> 透明背甲下，五对叶状胸肢把藻类与微生物汇成食物流；环境转坏时，两枚休眠卵又把一个池塘的未来封进卵鞍。

### `description`

> 大型溞是静水食物网中的毫米级鳃足类甲壳动物。它用第二触角跳跃式游泳，以胸肢维持滤食水流；适宜条件下，雌体通过孤雌生殖快速扩增，水体将干、食物受限或拥挤等信号则可推动有性阶段和耐受逆境的休眠卵形成。相同的透明身体、短世代和克隆培养能力，也使它成为国际淡水生态毒理试验的核心模式生物。

### 六段 `storySections`

1. **transparent-crustacean / 透明甲壳，不是真正的蚤**

   正文写第二触角、透明双层背甲、中央复眼、心脏与育儿室可见。避免“昆虫”“六条腿”和“跳蚤幼虫”。

2. **filter-current / 五对胸肢维持的食物流**

   写胸肢水流、滤板、食物沟、藻类与细菌，也写表面化学使捕获机制超出简单筛分。

3. **cyclical-parthenogenesis / 快速克隆与有性阶段**

   写即时卵、育儿室和雌性幼体；信号组合与反应依克隆和环境而变，不使用“压力一来立刻变性”。

4. **ephippial-bank / 沉积物里的时间库**

   区分休眠卵与卵鞍，说明通常两枚、随蜕皮脱落、可多年休眠；孵化有偏差，不能说“所有古老个体都能复活”。

5. **induced-defence / 捕食者写进身体的防线**

   聚焦蝌蚪虾线索下的宽体、长尾刺和强化背甲。不同实验中体长方向不同，不能画别种溞的头盔或颈齿。

6. **ecotoxicology / 一只透明动物如何成为标准**

   对照 TG 202 的 48 小时活动抑制与 TG 211 的 21 天繁殖输出。结尾明确标准化结果需要多物种与现场证据校准。

## 六张图片的生成与验收线索

全部图片建议 1536×1024、3:2、无文字、无标签、无水印。单体按毫米尺度表现，不把它画成肉眼可见的大型甲壳动物。透明度应允许看到部分内部结构，同时保留背甲边缘，避免变成玻璃玩具。

| 帧 | 实际主题与构图 | 必须出现 | 必须拒绝 |
| --- | --- | --- | --- |
| 01 | 浅水池塘主视觉，一只完整成体雌溞位于右侧 | 分枝第二触角、一个醒目复眼、透明背甲、尾刺；左侧保留开放水域 | 昆虫六足、鱼鳞、巨型动物、实验器皿、裁切主体 |
| 02 | 侧面形态显微视野 | 完整轮廓、分枝第二触角、复眼、透明背甲、内部胸肢、消化道、育儿室和尾刺 | 文字标签、比例尺、外露步足、重复尾刺、把生成形态当成鉴定凭证 |
| 03 | 悬浮滤食，胸肢附近有分散藻粒 | 腹侧叶状胸肢、食物流向的颗粒分布、淡绿褐色消化道 | 箭头、鲸须式滤网、大块水草、清滤率或食物偏好结论 |
| 04 | 孤雌生殖雌体，背侧育儿室内有一组胚胎 | 胚胎只位于母体背甲内的育儿室，母体和附肢完整 | 体外卵串、出生事件、卵鞍、固定窝卵数暗示 |
| 05 | 雌体背侧的深色鞍形卵鞍 | 一个与背甲相连的深色卵鞍，内部最多两个克制的椭圆轮廓 | 脱落卵鞍、散落休眠卵、几十枚鱼卵、固定两枚可活卵暗示 |
| 06 | 标准化生态毒理玻璃器皿与宽口吸管场景 | 相同玻璃容器、无色清水、宽口吸管、克制的实验记录氛围 | 骷髅图标、荧光毒液、结果文字、动物受伤或死亡、具体化学品和浓度 |

通用解剖拒收项：昆虫式分节长腿、双壳类闭合贝壳、背甲上鱼鳞、复眼成对突出、缺少第二触角、尾刺变成蝎尾、固定鲜绿色或鲜红色全身。当前图组没有捕食者诱导帧；正文讨论的宽体、长尾刺和强化背甲不能借图外推，也不能给大型溞拼入 _D. pulex_ 的颈齿、_D. cucullata_ 的头盔或 _D. atkinsoni_ 的“荆棘冠”。

## 推荐关键事实

1. 大型溞是鳃足纲异足目的毫米级甲壳动物，“water flea”只是游泳方式带来的俗名。
2. 当前接受名为 _Daphnia magna_ Straus, 1820；Catalogue of Life 也采用带亚属的 _Daphnia (Ctenodaphnia) magna_。
3. 可靠范围跨欧洲、亚洲和北美，北非部分临时池塘也有记录；不能把 GBIF 点位直接变成原生国家表。
4. 雌性区域鉴定范围约 2.9 至 6.0 mm，雄性约 2.2 至 3.5 mm；雄体通常更小、第一触角更长。
5. 第二触角负责跳跃式游泳，五对叶状胸肢维持滤食与呼吸相关水流。
6. 它主要滤取藻类、细菌和细颗粒碎屑，浮游食物不足时也能摄食附生生物。
7. 有利条件下雌体产生不经受精的即时卵，胚胎在背侧育儿室直接发育为幼溞。
8. 有性阶段产生的休眠卵通常每个卵鞍两枚；卵鞍是保护盒，不是卵本身。
9. 休眠卵库能跨越干旱、冻结和多年不利期，但沉积芯孵化只恢复历史种群的一部分偏样本。
10. 蝌蚪虾线索可诱导特定克隆变宽、尾刺延长并强化背甲；头盔和颈齿不是大型溞的通用特征。
11. OECD TG 202 观察 48 小时活动抑制，TG 211 观察 21 天繁殖输出；两者不是同一个终点。
12. 本种尚无 IUCN 全球评估，NatureServe 也未给出全球等级。NE/GNR 只表示未评估或未定级。

## 必须避免的说法

- 不能写“全球各地都有”或“世界性原生分布”；现有资料支持广布，但大陆和区域覆盖不均。
- 不能把 GBIF 出现点、实验室株来源或二手物种页自动转换成国家级原生分布。
- 不能把 Cladocera、Anomopoda 和 Diplostraca 同时都填进唯一的 `order` 字段；产品主链采用 Anomopoda。
- 不能写它是昆虫、真正跳蚤、双壳贝类、鱼类或单细胞浮游生物。
- 不能写所有成体都是 6 mm，也不能忽略雌雄差异、克隆差异和测量口径。
- 不能写它固定为绿色或红色；透明体内的食物与血红蛋白会改变视觉颜色。
- 不能把滤食解释为只靠固定孔径的被动筛网；颗粒表面化学会改变留存。
- 不能写“只吃藻”“只吃植物”或主动捕杀其他浮游动物；主要机制是捕获合适颗粒。
- 不能把育儿室写成子宫，也不能把释放幼溞写成哺乳动物式生产。
- 不能写所有环境压力都会诱导有性生殖，或所有克隆都需要同一组三个信号。
- 不能把卵鞍与休眠卵当同义词，不能保证每个卵鞍恰有两枚卵。
- 不能宣称休眠卵永生、任何沉积卵都能孵化，或复活实验无采样偏差。
- 不能给大型溞加上其他溞种的颈齿、头盔、背冠或“荆棘冠”。
- 不能写捕食者一定让它整体变大；体宽、尾刺、体长和背甲材料可分别响应。
- 不能把某实验克隆背甲硬度约五倍、厚度约两倍写成所有野外个体的固定倍数。
- 不能把 TG 202 的活动抑制等同死亡率，也不能把一个 EC50 解释为化学物身份或安全水质。
- 不能把 TG 211 的 21 天后代数直接当成野外种群增长率。
- 不能说“它是最敏感的水生物种”或“单种试验代表整个淡水群落”。
- 不能把 NE 写成 LC、稳定或无威胁；全球种群数量与趋势未知。
- 不能因为实验室培养量大，就推断野外种群安全或无需保护池塘和休眠卵库。

## 字段证据矩阵

| 产品字段或叙事   | 主要证据                                                  | 可用结论                                          | 不可外推                             |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------- | ------------------------------------ |
| 接受名与六级分类 | WoRMS、PESI、ITIS、COL、GBIF                              | _D. magna_ Straus, 1820；Anomopoda / Daphniidae  | 单一数据库的中间阶元不是唯一分类方案 |
| 中文名           | HJ 1456-2026、GB/T 16125-2012                             | 主名“大型溞”，旧称“大型水蚤”可作别名              | 旧标准用名不覆盖当前主名             |
| 成体长度         | NINA 区域鉴定资料                                         | 雌 2.9至6.0 mm，雄 2.2至3.5 mm                    | 全球每个克隆的统计分布               |
| 解剖与滤食       | Ebert 2005、Ngu 2025、Gerritsen & Porter 1982、Seidl 2002 | 第二触角游泳，五对胸肢滤食，捕获不只靠机械筛分    | 固定颗粒上限或不受水质影响的过滤率   |
| 分布             | Bekker 2018、De Gelas 2005、Chakri 2010、GBIF             | 欧亚、北美与北非证据；存在显著谱系结构            | 精确原生国家表、全球均匀分布         |
| 盐度             | 21 种群实验                                               | 弱咸水可出现，耐受有种群差异                      | 全物种统一盐度阈值                   |
| 成熟与产卵       | HJ 1456-2026、Kato 2019                                   | 20℃培养约 6至8 天成熟；即时卵数条件敏感           | 野外固定成熟日龄、固定窝卵数         |
| 周期性孤雌生殖   | Ebert、Kleiven、Olmstead & LeBlanc                        | 环境信号整合、母体性别决定、有性阶段              | 所有克隆共享同一开关                 |
| 卵鞍与蛋库       | Ebert、Alekseev & Lampert、Orsini                         | 通常两枚休眠卵，可跨越多年不利期                  | 所有卵都能孵化或无选择偏差           |
| 诱导防御         | Rabus 2011、Rabus 2013、Ritschar 2020                     | 蝌蚪虾线索下宽体、长尾刺、强化背甲                | 头盔/颈齿；全种固定倍数              |
| 生态毒理         | OECD TG 202/211、HJ 1456、EFSA                            | 48 h 活动抑制、21 d 繁殖终点                      | 单种结果代表整条食物网               |
| 保护状态         | EUNIS、IUCN 检索、NatureServe                             | NE、trend unknown；NatureServe GNR                | LC、稳定、全球丰度或全球主要威胁排名 |

## 推荐来源常量

以下 34 条可作为条目来源池。所有访问日期统一为 `2026-09-01`。其中 NCBI Bookshelf 章节综合多个溞属研究，使用时要区分属级生物学与明确的大型溞实例。

```ts
const DAPHNIA_MAGNA_SOURCE_DATE = "2026-09-01" as const;

const DAPHNIA_MAGNA_SOURCES = [
  {
    title: "WoRMS - Daphnia magna Straus, 1820 (AphiaID 148372)",
    url: "https://www.marinespecies.org/aphia.php?p=taxdetails&id=148372",
    kind: "taxonomy",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "ITIS - Daphnia magna Straus, 1820 (TSN 83884)",
    url: "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=83884",
    kind: "taxonomy",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "Catalogue of Life - Daphnia (Ctenodaphnia) magna Straus, 1820",
    url: "https://www.catalogueoflife.org/data/taxon/6CCSV",
    kind: "taxonomy",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "GBIF Backbone Taxonomy - Daphnia magna Straus, 1820",
    url: "https://www.gbif.org/species/2234822",
    kind: "taxonomy",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "生态环境部 HJ 1456-2026 - 水质 急性毒性的测定 大型溞活动抑制法",
    url: "https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202602/W020260206384592303542.pdf",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "国家标准全文公开系统 - GB/T 16125-2012 大型溞急性毒性实验方法",
    url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7E175D3A7E05397BE0A0AB82A",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "Ebert 2005 - Introduction to Daphnia Biology",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK2042/",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "NINA - Daphnia magna identification factsheet",
    url: "https://www.nina.no/archive/nina/PppBasePdf/NINA-Infomateriell/2007/krepsdyrfaktaark/walseng_Daphnia%20magna.pdf",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Ngu et al. 2025 - Histology and three-dimensional anatomy atlas of Daphnia magna",
    url: "https://doi.org/10.1016/j.scitotenv.2024.177930",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Mittmann et al. 2014 - Development and staging of Daphnia magna based on morphological landmarks",
    url: "https://doi.org/10.1186/2041-9139-5-12",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Gerritsen & Porter 1982 - The role of surface chemistry in filter feeding by zooplankton",
    url: "https://doi.org/10.1126/science.216.4551.1225",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Seidl et al. 2002 - Water flow through the brood chamber of Daphnia magna",
    url: "https://doi.org/10.1078/0944-2006-00050",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Siehoff et al. 2009 - Periphyton as alternative food source for Daphnia magna",
    url: "https://doi.org/10.1111/j.1365-2427.2008.02087.x",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Bekker et al. 2018 - Phylogeography of Daphnia magna in Northern Eurasia",
    url: "https://doi.org/10.1371/journal.pone.0194045",
    kind: "distribution",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "De Gelas & De Meester 2005 - Phylogeography of Daphnia magna in Europe",
    url: "https://doi.org/10.1111/j.1365-294X.2004.02434.x",
    kind: "distribution",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Chakri et al. 2010 - Vertebrate and invertebrate kairomones and Daphnia magna life history",
    url: "https://doi.org/10.1016/j.crvi.2010.09.004",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Espinosa-Rodríguez et al. 2024 - Daphnia magna in central Mexico wetlands and implications of laboratory escape",
    url: "https://doi.org/10.1007/s10530-023-03164-7",
    kind: "distribution",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Brans et al. 2024 - Regional and fine-scale local adaptation in salinity tolerance",
    url: "https://doi.org/10.1098/rspb.2023.1917",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Kleiven et al. 1992 - Sexual reproduction in Daphnia magna requires three stimuli",
    url: "https://doi.org/10.2307/3545010",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Olmstead & LeBlanc 2002 - Juvenoid hormone methyl farnesoate and male offspring production",
    url: "https://doi.org/10.1002/jez.10162",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Kato et al. 2019 - Live observation of the oviposition process in Daphnia magna",
    url: "https://doi.org/10.1371/journal.pone.0224388",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Alekseev & Lampert 2001 - Maternal control of resting-egg production in Daphnia",
    url: "https://doi.org/10.1038/414899a",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Cuenca Cambronero & Orsini 2018 - Resurrection of Dormant Daphnia magna",
    url: "https://doi.org/10.3791/56637",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Santos & Ebert 2023 - Stress-tolerance limits of Daphnia magna resting stages",
    url: "https://doi.org/10.1007/s00442-023-05478-8",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Rabus & Laforsch 2011 - Growing large and bulky in the presence of the enemy",
    url: "https://doi.org/10.1111/j.1365-2435.2011.01840.x",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Rabus et al. 2013 - Predator-induced fortification of the Daphnia magna carapace",
    url: "https://doi.org/10.1371/journal.pone.0067856",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "Ritschar et al. 2020 - Chemistry behind inducible morphological defences in Daphnia magna",
    url: "https://doi.org/10.1038/s41598-020-79755-4",
    kind: "ecology",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "OECD TG 202 - Daphnia sp. Acute Immobilisation Test",
    url: "https://doi.org/10.1787/9789264069947-en",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "OECD TG 211 - Daphnia magna Reproduction Test",
    url: "https://www.oecd.org/en/publications/test-no-211-daphnia-magna-reproduction-test_9789264185203-en.html",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "EFSA PPR Panel 2013 - Tiered risk assessment for aquatic organisms",
    url: "https://doi.org/10.2903/j.efsa.2013.3290",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "EFSA PPR Panel 2021 - Statement on aquatic invertebrate risk assessment",
    url: "https://doi.org/10.2903/j.efsa.2021.6498",
    kind: "general",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "EUNIS - Daphnia magna, not evaluated by IUCN",
    url: "https://eunis.eea.europa.eu/species/257821",
    kind: "conservation",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title:
      "IUCN Red List species search - Daphnia magna, no assessment returned",
    url: "https://www.iucnredlist.org/search?query=Daphnia%20magna&searchType=species",
    kind: "conservation",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
  {
    title: "NatureServe Explorer - Daphnia magna, global status GNR",
    url: "https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.1102152/Daphnia_magna",
    kind: "conservation",
    accessedAt: DAPHNIA_MAGNA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 最终核验清单

- `slug` 使用 `large-water-flea`，与英文主名和项目图片目录一致。
- 主名写“大型溞”，科学名字段不带命名人；来源正文保留 Straus, 1820。
- 六级分类的 `order` 写 Anomopoda / 异足目；Diplostraca 与“枝角类”留在分类口径说明中。
- 大洲写欧洲、亚洲、北美洲、非洲；`countries` 留空，并在范围中把非洲限定为北非证据。
- 成体长度写 2.2 至 6.0 mm，注释雌雄分段和区域来源；规范化为 0.22 至 0.60 cm。
- 只填 `adultLengthCm`，不填体重、寿命、全球数量或种群趋势。
- 四张卡保留成体长度、20℃成熟时间、通常两枚休眠卵、48 h / 21 d 标准试验。
- 02 形态图与 03 滤食图必须保留第二触角、醒目复眼、透明背甲、叶状胸肢和尾刺。
- 04 只表现育儿室内的孤雌胚胎；05 表现卵鞍并说明休眠卵与卵鞍不是同一个结构。
- 当前图组没有捕食者诱导帧；六图顺序和文件名以图片 README 为准。
- 保护状态必须为 NE / unknown，无年份、无标准；正文解释 NE 不等于 LC。
- 毒理数字必须连同 OECD/HJ 试验条件出现，禁止将 EC50、活动抑制或 21 天后代数外推成现场安全结论。
