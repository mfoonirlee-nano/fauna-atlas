# 非洲鸵鸟（*Struthio camelus*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**非洲鸵鸟**
- IOC 接受英文名：**Common Ostrich**
- 接受学名：***Struthio camelus* Linnaeus, 1758**
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面与 5 张详情图的科学内容
- 分类口径：IOC World Bird List v15.2；简繁中文名来自 IOC v15.2 多语言表
- 保护口径：BirdLife/IUCN 2025 全球评估；北非指名亚种的区域危机只作补充
- 数字边界：速度、体型极值和共同巢卵数都保留来源的个体、距离、性别或巢型限定

## 结论摘要

1. IOC v15.2 接受 ***Struthio camelus* Linnaeus, 1758**，英文名 **Common Ostrich**，简体中文名“非洲鸵鸟”，繁体中文名“鴕鳥”。项目宜把 `names.en` 写成 `Common Ostrich`；“African Ostrich”可出现在说明文字中，不能冒充 IOC 接受英文名。[IOC ratites list](https://www.worldbirdnames.org/new/bow/ratites/) [IOC master lists](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)
2. IOC 承认三个现生亚种：指名亚种 ***S. c. camelus***、马赛亚种 ***S. c. massaicus***、南部亚种 ***S. c. australis***；另列已经灭绝的西亚亚种 ***S. c. syriacus***。索马里鸵鸟 ***S. molybdophanes*** 是独立种，不能继续写成非洲鸵鸟亚种。[IOC ratites list](https://www.worldbirdnames.org/new/bow/ratites/) [Miller et al. 2011](https://doi.org/10.1007/s10592-010-0149-x)
3. BirdLife/IUCN 在 **2025 年**重评本种，字段应写成 `conservation('LC', 'decreasing', 2025)`，不传 `criteria`。旧资料中的 2016 或 2018 年评估年份已经过时。[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T45020636A280828427.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus)
4. 2025 评估以约 600 万平方千米适生地和每平方千米 0.05—0.2 只的密度推算全种约 **300,000—900,000 只**。BirdLife 的结构化成熟个体字段仍显示 Unknown，评估理由也没有把该区间明确标成成熟个体，因此不要填写 `metrics.estimatedMatureIndividuals`。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus)
5. 本种是非迁徙性陆鸟。原生范围横跨非洲萨赫勒、东非和南部非洲，现存分布出现大片断裂；主要使用干旱草原、干旱稀树草原和灌丛，也进入半荒漠、开阔林地与牧场。schema realm 只写 `terrestrial`，饮水或到访水坑不能把它改成 `freshwater`。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus) [Smithsonian National Zoo](https://nationalzoo.si.edu/animals/ostrich)
6. 圣迭戈动物园给出的成鸟性别范围为：雌鸟高 **1.7—1.9 米、90—110 千克**，雄鸟高 **2.1—2.7 米、100—130 千克**。英国自然历史博物馆记录的 2.75 米和 156 千克分别来自个别北非、南部亚种记录，不能扩写为成鸟常态范围。[San Diego Zoo](https://animals.sandiegozoo.org/animals/ostrich) [Natural History Museum](https://www.nhm.ac.uk/discover/what-is-the-biggest-bird-in-the-world.html)
7. 性二型清楚：成年雄鸟主体黑、翼和尾白；成年雌鸟灰褐。地域型还会改变雄鸟裸露颈腿、颈环、头顶和尾羽颜色。图像必须指定一个亚种，不能把北非红颈、南部蓝灰颈和索马里鸵鸟的形态拼成一只鸟。[EAZA North African Ostrich Best Practice Guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf)
8. 原始生物力学研究用电影记录野外高速奔跑；后续同行评议论文报告其中一只 **40 千克雌鸟约 17 米/秒，即 61 千米/小时**。英国自然历史博物馆另载 1964 年一只雄鸟在 732 米路段达到 72 千米/小时。前者是小样本实测，后者是单鸟路段纪录；两者都不能代表群体平均速度或可持续巡航速度。[Alexander et al. 1979](https://doi.org/10.1111/j.1469-7998.1979.tb03941.x) [Blanco and Jones 2005](https://pmc.ncbi.nlm.nih.gov/articles/PMC1559870/) [Natural History Museum](https://www.nhm.ac.uk/discover/what-is-the-biggest-bird-in-the-world.html)
9. 鸵鸟以植物为主，取食叶、花、根、草、种子、多肉植物和果实，也吃昆虫及偶遇的小型脊椎动物。它会吞下砂粒和小石，借砂囊研磨食物；“杂食”不等于动物性食物占主导。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/ostrich) [San Diego Zoo](https://animals.sandiegozoo.org/animals/ostrich)
10. 鸵鸟能在缺少地表水的环境活动，仍会在有水时大量饮水。Withers 的实验中，断水鸟七天后无法维持体重，并通过降低尿流量、提高尿液浓度节水；纳米布野外研究发现观察期内成鸟可不饮水，主要从植物获取水。档案不能写“鸵鸟不需要喝水”。[Withers 1983](https://doi.org/10.1086/physzool.56.4.30155880) [Williams et al. 1993](https://doi.org/10.2307/1939301)
11. 雄鸟刨出地面浅窝，多只雌鸟可向同一共同巢产卵。主雌和领域雄鸟共同孵化，雌鸟主要承担白天，雄鸟主要承担夜间。野外共同巢常有十几至几十枚卵，能覆盖孵化的约 20 枚；圣迭戈动物园汇总每只雌鸟 7—10 枚、孵化 42—46 天。单只雌鸟的产卵数与整个共同巢的卵数必须分开。[EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf) [San Diego Zoo](https://animals.sandiegozoo.org/animals/ostrich)
12. 全球 LC 掩盖了北非指名亚种的强烈退缩。CITES 只把阿尔及利亚、布基纳法索、喀麦隆、中非共和国、乍得、马里、毛里塔尼亚、摩洛哥、尼日尔、尼日利亚、塞内加尔和苏丹的种群列入附录 I；其他种群没有列入 CITES 附录。CMS 2026 附录没有列出本种。[CITES 2025 appendices](https://cites.org/sites/default/files/eng/app/2025/E-Appendices-2025-02-07.pdf) [CMS 2026 appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf)

## 名称、分类与种下口径

### 接受分类

| 分类阶元 | 学名 | 中文名 | 依据 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 项目通用节点 |
| 门 | Chordata | 脊索动物门 | 项目通用节点 |
| 纲 | Aves | 鸟纲 | IOC v15.2 |
| 目 | Struthioniformes | 鸵鸟目 | IOC v15.2 |
| 科 | Struthionidae | 鸵鸟科 | IOC v15.2 |
| 属 | Struthio | 鸵鸟属 | IOC v15.2 |
| 种 | Struthio camelus | 非洲鸵鸟 | IOC v15.2 多语言表 |

IOC 把鸵鸟目放在古颚类群中，并把它与今颚类群区分。项目 schema 没有下纲字段，因此正文和标签可以写“古颚类群”，分类图谱仍从 Aves 直接进入 Struthioniformes，不能新增未定义阶元。[IOC orders](https://www.worldbirdnames.org/new/classification/orders-of-birds-draft/)

IOC v15.2 多语言表给出：

- 简体中文：非洲鸵鸟；
- 繁体中文：鴕鳥；
- 英文：Common Ostrich。

推荐字段：

```ts
names: {
  zh: '非洲鸵鸟',
  en: 'Common Ostrich',
  aliases: ['鴕鳥'],
}
```

GBIF 等资料也使用 “African Ostrich”，但 IOC 的接受英文名是 Common Ostrich。若产品需要检索别名，可另行评估是否给搜索索引加入 African Ostrich；当前物种档案的 `names.en` 应遵从 IOC。

### 三个现生亚种与一个灭绝亚种

| 亚种 | IOC 范围摘要 | 形态与展示边界 |
| --- | --- | --- |
| ***S. c. camelus*** | 摩洛哥南部、毛里塔尼亚至埃及南部、厄立特里亚、埃塞俄比亚北部和西部，南至喀麦隆、乌干达北部 | 北非红颈型。雄鸟平时颈腿粉红，繁殖期转鲜红；主体亮黑，翼尾多为白色，颈基有白色羽缘，头顶有裸斑。雌鸟灰褐。 |
| ***S. c. massaicus*** | 肯尼亚南部和坦桑尼亚中部 | 马赛红颈型。雄鸟裸颈粉红，繁殖期转红，腿部亮粉，颈基有窄白环；白尾常被土壤染成红褐。 |
| ***S. c. australis*** | 南部非洲 | 南部灰颈型。雄鸟颈腿深灰蓝，跗部鳞片可呈鲜红，颈基缺少白环。不能把它画成索马里鸵鸟的鲜蓝颈。 |
| †***S. c. syriacus*** | 叙利亚和阿拉伯半岛荒漠 | IOC 标记灭绝；文献通常把最后消失时间放在 20 世纪中叶，约 1966 年。 |

[IOC full subspecies list](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf) [Bertram 1992 preview](https://api.pageplace.de/preview/DT0400.9781400863143_A23705290/preview-9781400863143_A23705290.pdf)

IOC v15.2 把索马里鸵鸟列为 ***Struthio molybdophanes***。Miller 等分析四个当时仍按亚种处理的现生类群，使用 119 只个体的 14 个微卫星位点，并加入线粒体 DNA；核标记显示四组之间清楚分离。该研究支持保留地域谱系及后来拆分索马里鸵鸟，但不支持把商业杂交鸵鸟当成任一纯野生亚种。[Miller et al. 2011](https://doi.org/10.1007/s10592-010-0149-x)

## 全球保护状态与数量

### BirdLife/IUCN 2025 字段

BirdLife 是鸟类 IUCN 红色名录评估机构。当前全球记录为：

- 等级：Least Concern，**LC，无危**；
- 趋势：**Decreasing，下降**；
- 评估年份：**2025**；
- 标准：空；LC 不写受胁 criteria；
- 世代长度：15.08 年；
- 迁徙状态：Not a Migrant；
- 居留期分布面积 EOO：约 24,400,000 平方千米；
- 数量估计：300,000—900,000 只，未明确标成成熟个体。

[IUCN 2025 assessment](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T45020636A280828427.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus)

推荐：

```ts
conservation: conservation('LC', 'decreasing', 2025)
```

评估理由认为范围远高于 VU 的范围阈值，下降速度未达到十年或三世代 30%，数量也远高于 10,000 只成熟个体阈值。LC 表示现有全球证据没有跨过受胁阈值，不能把它改写成数量稳定。

### 300,000—900,000 的推算方法

2025 评估引用短草平原和半荒漠每平方千米 0.05—0.2 只的密度；部分保护地可达到 0.6—0.8 只，但保护地研究报告的范围也可低至 0.02。研究者把 0.05—0.2 施用于约 600 万平方千米适生地，得到 300,000—1,200,000 只，再结合博茨瓦纳约 60,000 只的资料，把上限收敛为 900,000。

这个结果属于空间外推：

- 密度来自若干地点，不是全范围同步普查；
- 适生地面积来自模型；
- BirdLife 没有把 300,000—900,000 结构化为 mature individuals；
- 北非残存种群的稀少不能用南部高密度保护地抵消。

推荐省略：

```ts
metrics: {
  // estimatedMatureIndividuals 不填
}
```

### 全球 LC 与北非退缩

EAZA 资料估计北非指名亚种已经离开原范围的绝大部分，野外只剩分散的小种群；该资料引用 2018 年几百至约 1,000 只的专家估算。Sahara Conservation 记录尼日尔野外种群在 2004 年消失，并在 2026 年准备把 10 只由圈养繁殖项目组成的首批个体放归 Gadabedji 生物圈保护区。数字分别来自旧区域估算和特定放归批次，不能代替 2025 全种估计。[EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf) [Sahara Conservation 2026](https://saharaconservation.org/fr/actualites/apres-plus-de-20-ans-dabsence-lautruche-se-prepare-un-retour-dans-la-reserve-de-biosphere-de-gadabedji-au-niger/)

## 分布与生境

### 原生范围和居留状态

BirdLife 的现行范围文字列出毛里塔尼亚、马里、尼日尔、乍得、苏丹、厄立特里亚、埃塞俄比亚、肯尼亚、乌干达、坦桑尼亚、安哥拉、纳米比亚、博茨瓦纳、南非、赞比亚、津巴布韦和莫桑比克。数据库还保留若干西非、中非残存或恢复记录。西亚亚种已经灭绝；澳大利亚记录属于引入种群，不应进入原生范围概述。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus)

本种不作季节性跨洲迁徙。干旱区个体会随降雨和食物在广大区域游移，EAZA 称其为 nomadic；这种资源追踪位移不能写成规则迁徙路线。

推荐 `distribution`：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['非洲'],
  regions: ['萨赫勒与撒哈拉南缘', '东非稀树草原', '南部非洲干旱草原与灌丛'],
  countries: [
    '毛里塔尼亚', '马里', '尼日尔', '乍得', '苏丹', '厄立特里亚', '埃塞俄比亚',
    '肯尼亚', '乌干达', '坦桑尼亚', '安哥拉', '纳米比亚', '博茨瓦纳', '南非',
    '赞比亚', '津巴布韦', '莫桑比克', '喀麦隆', '中非共和国', '塞内加尔',
  ],
  range:
    '原生分布横跨非洲萨赫勒、东非和南部非洲，在干旱草原、稀树草原、灌丛、半荒漠和开阔林地留居或随资源游移；北非和西非分布已经高度破碎，西亚亚种灭绝。',
}
```

不设置 `center` 或 `endemicTo`。一个地图中心会把三片断裂大范围压缩成错误的“核心点”。

### 三个 terrestrial 生境

BirdLife 的正式 habitat 表把干旱热带／亚热带草原和干旱稀树草原列为 major，把干旱灌丛列为 suitable，把牧场列为 marginal。Smithsonian 和 EAZA 还支持半荒漠、开阔林地与干河谷。

推荐：

1. **干旱草原与稀树草原**，`terrestrial`，`isPrimary: true`：短草、散生乔木和广阔视野支持取食、奔跑和警戒。
2. **半荒漠、萨赫勒平原与干河谷灌丛**，`terrestrial`：降雨稀少，植物脉冲和多肉植物提供食物与水；北非种群常在台地和干河谷活动。
3. **开阔林地、牧场与农业边缘**，`terrestrial`：可利用疏林和低强度牧场，人工地景只属边缘生境，不能替代连续原生开阔地。

饮水坑是资源点，不是淡水生境分类。`freshwater: false` 与 `marine: false` 来自 BirdLife 2025 评估历史数据。

## 体型、性二型与地域型形态

### 推荐测量范围

| 字段 | 推荐值 | 说明 |
| --- | --- | --- |
| `measurements.height` | 1.7—2.7 m | 雌 1.7—1.9；雄 2.1—2.7，圣迭戈动物园 |
| `measurements.weight` | 90—130 kg | 雌 90—110；雄 100—130，圣迭戈动物园 |
| `measurements.length` | 不填 | 现有高可信资料给的是站立高度，不能改名为体长 |
| `measurements.wingspan` | 不填 | 本轮权威来源没有提供可比的成鸟翼展范围 |
| `metrics.adultMassKg` | `[90, 130]` | 性别合并常用包络 |
| `metrics.adultLengthCm` | 不填 | schema 字段写 length，不应塞入 standing height |
| `metrics.topSpeedKph` | 不填 | 单个数字无法保留样本、距离和测量方法 |
| `metrics.lifespanYears` | 不填 | 野外 30—40 年和圈养近 70 年来自不同口径，不能拼成寿命范围 |

[San Diego Zoo](https://animals.sandiegozoo.org/animals/ostrich) [Smithsonian National Zoo](https://nationalzoo.si.edu/animals/ostrich)

英国自然历史博物馆列出一只北非鸵鸟 2.75 米和南部亚种最高 156 千克的报道。EAZA 也把雄鸟偶见 150 千克与通常 100—130 千克分开。档案可把这些写成“个别记录”，不能把常用体重范围上限改成 156 千克。[Natural History Museum](https://www.nhm.ac.uk/discover/what-is-the-biggest-bird-in-the-world.html) [EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf)

### 图像必须保留的通用解剖

- 小而扁的头、宽扁喙、大眼和细长裸颈；
- 圆大躯干、两只小型退化翼、长而强健的裸腿；
- 每脚恰好两个朝前趾：粗大的内趾带宽钝甲，外趾较小；没有后趾；
- 成年雄鸟黑色主体、柔软白色翼羽和尾羽；
- 成年雌鸟灰褐主体和较浅的翼尾；
- 羽枝没有飞行鸟那样紧密钩连，质感蓬松，不能画成防水硬翼面。

“每脚两趾”是鸵鸟类的特征，索马里鸵鸟也有两趾。它能排除鸸鹋、美洲鸵等错误生成物，不能单独区分两种鸵鸟。

### 本图集选用的地域型

近景图 01、02、04 和 05 统一采用北非指名亚种 ***S. c. camelus***：

- 雄鸟正常状态用粉红颈腿，繁殖状态才增强到鲜红；
- 头顶保留裸斑，颈基有一圈白色羽缘；
- 主体亮黑，翼尖和尾羽白；
- 雌鸟用灰褐体羽、灰褐裸露皮肤及头顶裸斑。

图 06 的远距离保护监测同样指向北非亚种。档案正文要说明这是图集选取的一个地域型，不代表马赛或南部亚种的颈腿颜色。

## 奔跑速度：可展示的纪录与边界

| 来源 | 数值 | 样本和方法 | 使用边界 |
| --- | --- | --- | --- |
| Alexander 等 1979；Blanco 和 Jones 2005 转述精确值 | 17 m/s，约 61 km/h | 野外高速电影中的一只 40 kg 雌鸟 | 可称“一个实测高速案例”；40 kg 低于常见成年雌鸟体重，不能代表成年群体上限 |
| 英国自然历史博物馆 | 72 km/h，732 m | 1964 年一只雄鸟的路段纪录；页面未交代计时设备 | 可称“博物馆整理的单鸟路段纪录”；不能称平均或持续速度 |
| Smithsonian | 连续观察 48—59 km/h；冲刺至 69 km/h | 机构汇总，页面未列样本和计时方法 | 可作一般解说；不宜覆盖有样本信息的研究案例 |

[Alexander et al. 1979](https://doi.org/10.1111/j.1469-7998.1979.tb03941.x) [Blanco and Jones 2005](https://pmc.ncbi.nlm.nih.gov/articles/PMC1559870/) [Natural History Museum](https://www.nhm.ac.uk/discover/what-is-the-biggest-bird-in-the-world.html) [Smithsonian National Zoo](https://nationalzoo.si.edu/animals/ostrich)

推荐把 72 千米/小时放进带完整 note 的 `featuredStats`，并在故事正文同时给出 61 千米/小时的电影实测案例。`metrics.topSpeedKph` 应省略；当前 schema 无法保存单鸟、732 米和未知计时方法。

高速奔跑依赖长腿、两趾脚和弹性储能。翅膀帮助平衡与转向，也用于展示；它们不能产生飞行。奔跑图只展示姿态和两趾，不用速度线或仪表暗示画面测得某个速度。

## 食性、活动与水分适应

### 食性

Smithsonian 把鸵鸟列为以植物为主的杂食者，食物包括绿叶、花、根、草和多肉植物，也摄食落果、蝗虫等昆虫，以及偶遇的鼠、蜥蜴和蛙。San Diego 列出根、叶、种子、昆虫、蛇、蜥蜴和啮齿类。EAZA 的野外汇总强调它们会选择双子叶植物，并连根拔起植物取得水分。

推荐：

```ts
diet: {
  types: ['herbivore', 'omnivore'],
  foods: ['草、叶和嫩枝', '花、种子和果实', '根与多肉植物', '蝗虫等昆虫', '偶遇的蜥蜴、蛙和小型啮齿类'],
  description:
    '以植物为主的机会型杂食者，随季节取食草、叶、花、种子、根、多肉植物和果实，也摄食昆虫及偶遇的小型脊椎动物；吞下砂粒和小石帮助砂囊研磨食物。',
}
```

同时给 `herbivore` 和 `omnivore` 可以保留“植物主导”与“并非严格植食”两层信息。正文不得说它靠吞石头获得营养。

### 活动和社会行为

- 非迁徙性、完全陆栖，干旱地区会随食物和降雨游移；
- 日间活动，清晨和傍晚常更活跃；
- 可独行、成对或组成约十只的小群，特定条件下出现更大聚群；
- 借长颈和大眼警戒，以奔跑逃离风险；
- 翼和尾参与求偶、威吓、平衡和转向；
- 沙浴和整理羽毛维持羽被。

[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/ostrich) [EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf)

### 水分边界

Withers 1983 用成鸟进行能量和水盐平衡实验：

- 吃干苜蓿并自由饮水时，日水周转约 8.3 升，饮水贡献约 7.9 升；
- 断水后，鸟无法维持体重；
- 七天断水期间，尿流量从约 2.5 升/日降到 0.5 升/日，尿液渗透浓度从 163 升到最高约 800 mOsm/kg；
- 补水时可在三小时饮下 12—14 升。

[Withers 1983](https://doi.org/10.1086/physzool.56.4.30155880)

Williams 等 1993 测量纳米布野生鸵鸟的野外代谢率和水流入率。观察期内，成鸟似乎没有饮水；亚成鸟平均从自由水获得约 729 毫升/日。成鸟从植物取水的结果属于纳米布特定季节和样本，不能外推为全种终生不饮水。[Williams et al. 1993](https://doi.org/10.2307/1939301)

推荐表述：

> 鸵鸟能以植物水分、较低蒸发损失和浓缩排泄物度过缺少地表水的时期；有水时会饮用，长期断水仍造成负水分平衡和体重下降。

## 繁殖与共同巢

雄鸟伏地刨出宽浅的沙土巢坑。繁殖体系随密度与环境变化，可见一雄一雌，也可见一只领域雄鸟、主雌和多只次雌组成的群体。主雌先在巢中产卵，其他雌鸟随后把卵产入同一巢。[EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf)

必须区分三种数字：

1. **单只雌鸟的产卵数**：San Diego 汇总为 7—10 枚；EAZA 引用的马赛鸵鸟研究估计主雌约 11 枚，纳米比亚研究中主雌不超过 8 枚。
2. **共同巢总卵数**：马赛鸵鸟两项研究的均值约 26 枚，观察范围分别为 15—39 和 20—38；纳米比亚为 16—23。动物园或高密度地点可见 50、60、78 甚至 80 枚以上，属于异常大共同巢。
3. **能覆盖孵化的卵数**：EAZA 汇总约 20 枚。超出覆盖能力的卵可留在巢圈外。

主雌和雄鸟共同孵化。雌鸟的灰褐羽色适合白天伏巢，黑羽雄鸟主要承担夜间。EAZA 汇总平均孵化约 42 天；San Diego 给 42—46 天，Smithsonian 给约 45 天。档案可以写“约 42 天”或“42—46 天”，不能把不同来源端点拼出更宽范围。

推荐特色统计采用同一个 San Diego 口径：

- 每只雌鸟 7—10 枚；
- 孵化 42—46 天；
- 共同巢可汇集几十枚卵；
- 雌鸟主要白天、雄鸟主要夜间孵化。

图 05 固定画 **8 枚可见卵**，使生成和人工计数可核验。图注要写明八枚只是共同巢在一个时点的重建，不代表最终总卵数、产卵雌鸟数或孵化结果。

## 威胁、行动与国际公约

### 威胁

1. **开阔生境丧失和退化**：农牧扩张、过度放牧和土地转换减少连续草原、稀树草原与灌丛；BirdLife 2025 仍把 habitat loss 作为主要全球威胁背景。
2. **猎杀和盗猎**：人们猎取肉、羽、皮、脂肪和其他产品；车辆与现代武器提高了干旱区追猎效率。
3. **收集野生卵**：取卵直接降低繁殖产出，在北非和东北非贸易记录中造成显著压力。
4. **冲突与管理中断**：北非部分种群在内乱期间失去巡护，EAZA 记录尼日尔 Aïr—Ténéré 种群在 1990 年代遭到大规模盗猎后消失。
5. **小种群隔离**：北非残存和圈养群体数量小，面临近交、偶发事件及错误谱系配对风险。
6. **放归中的遗传混杂**：商业鸵鸟源于多个谱系，未经遗传核验的引种可能污染北非指名亚种恢复项目；该风险针对恢复管理，不能写成全种当前主要灭绝驱动。

[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus) [EAZA guidelines](https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf) [Sahara Conservation](https://saharaconservation.org/restoring-wildlife/north-african-ostrich-recovery/)

全球资料没有支持统一的气候变化死亡比例、围栏碰撞比例或家畜竞争强度。档案可把干旱与降雨变化写进资源波动，不能虚构全种定量威胁。

### 推荐保护行动

- 保护并连接短草平原、稀树草原、萨赫勒灌丛和干河谷，控制关键地点的过度放牧及土地转换；
- 在残存北非种群和繁殖期集中区加强反盗猎、道路巡护与社区协作；
- 执法打击野生卵、肉、皮、羽和其他制品的非法采集与跨境贸易；
- 按亚种和野生来源开展数量、繁殖成功、分布边界及趋势监测，避免把养殖个体计入野生种群；
- 对北非圈养保障群进行谱系和遗传管理，防止近交及商业杂交谱系混入；
- 放归前评估栖息地、社区支持、疾病和遗传来源，放归后使用标记或遥测跟踪存活、移动和繁殖；
- 维护 CITES 附录 I 所列北方种群的贸易许可和执法，并向公众说明该列名只覆盖指定国家种群。

Sahara Conservation、尼日尔环境部门和合作伙伴在 2026 年准备把 6 只雌鸟、4 只雄鸟组成的首批群体放归 Gadabedji。该项目还管理三个圈养点约 40 只鸟。数字记录的是 2026 年尼日尔项目状态，不是北非全种群数量。[Sahara Conservation 2026](https://saharaconservation.org/fr/actualites/apres-plus-de-20-ans-dabsence-lautruche-se-prepare-un-retour-dans-la-reserve-de-biosphere-de-gadabedji-au-niger/)

### CITES 和 CMS

- **CITES**：附录 I 只覆盖阿尔及利亚、布基纳法索、喀麦隆、中非共和国、乍得、马里、毛里塔尼亚、摩洛哥、尼日尔、尼日利亚、塞内加尔和苏丹的种群。其他种群没有列入附录。产品标签必须写“CITES 附录 I（指定北方国家种群）”，不能写“全种附录 I”。[CITES 2025 appendices](https://cites.org/sites/default/files/eng/app/2025/E-Appendices-2025-02-07.pdf)
- **CMS**：2026 年 6 月 27 日生效的附录 I、II 没有 `Struthio camelus` 或 Struthionidae 包含性条目。BirdLife 同时把本种列为 Not a Migrant。档案省略 CMS 标签即可。[CMS 2026 appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf)

## 推荐关键事实

1. IOC v15.2 使用英文名 Common Ostrich，并承认三个现生亚种和一个灭绝的西亚亚种。
2. 索马里鸵鸟是独立种，不属于 *S. camelus* 的现生亚种。
3. BirdLife/IUCN 2025 全球评估为 LC、趋势下降，criteria 为空。
4. 本种只属于 terrestrial realm，是非迁徙性陆鸟，但干旱区群体会随资源广域游移。
5. 雌鸟高 1.7—1.9 米、90—110 千克；雄鸟高 2.1—2.7 米、100—130 千克。
6. 一只 40 千克雌鸟的电影实测约 61 千米/小时；一只雄鸟的博物馆整理纪录为 72 千米/小时、732 米，两组数字都不能外推成群体常态。
7. 鸵鸟每脚两个朝前趾，翼用于展示、平衡与转向，不能飞行。
8. 食性以植物为主，也摄食昆虫和偶遇的小型脊椎动物。
9. 缺少地表水时可依靠植物水和浓缩排泄物节水，有水时会饮用；长期断水会失重。
10. 多只雌鸟向共同地面巢产卵，主雌主要白天、雄鸟主要夜间孵化约 42 天。
11. 单只雌鸟 7—10 枚与共同巢几十枚属于不同统计单位。
12. CITES 附录 I 只覆盖指定北方国家种群，全球 LC 不能覆盖北非指名亚种的恢复需求。

## 不应写入档案的无限定说法

- “英文名就是 African Ostrich”——IOC v15.2 的接受英文名是 Common Ostrich。
- “有四个现生亚种”——索马里鸵鸟已经拆为独立种；*syriacus* 已灭绝。
- “所有雄鸟都是红颈”——南部亚种颈腿深灰蓝；红颈型也随繁殖状态改变强度。
- “蓝颈就是南部亚种的鲜蓝色”——深灰蓝与索马里鸵鸟的蓝颈不能混画。
- “所有鸵鸟能跑 72 千米/小时”——72 是一只雄鸟在 732 米路段的整理纪录。
- “可以持续 70 千米/小时跑半小时”——不同资料把冲刺和连续速度混在一起，现有高可信来源不支持这句话。
- “鸵鸟不需要喝水”——实验中的断水鸟无法维持体重，有水时会主动饮用。
- “一窝通常 60 枚”——60 指多雌共同巢的机构汇总上限，不是单只雌鸟窝卵数。
- “雌鸟独自孵卵”——主雌与领域雄鸟分担，雄鸟主要夜间孵化。
- “全种列入 CITES 附录 I”——附录只覆盖 12 个指定国家种群。
- “LC 表示数量稳定”——2025 正式趋势是 decreasing。
- “澳大利亚也是原生分布”——BirdLife 把当地记录标为 introduced。

## 六张图的科学边界

所有画面为科学约束下的原创重建，不代表真实个体、真实测速、真实共同巢记录或真实放归批次。输出统一为 **1536 × 1024、3:2 横幅**。

| 文件名 | 科学场景 | 必须出现 | 必须避免 |
| --- | --- | --- | --- |
| `01-open-savanna-adult-male-portrait.webp` | 封面：萨赫勒开阔稀树草原，一只完整北非指名亚种成年雄鸟偏右、面朝左，左侧留标题空间 | 粉红颈腿、头顶裸斑、颈基白色羽缘、黑色主体、白色小翼和尾；双腿双脚完整 | 索马里鲜蓝颈、南部灰颈、第三趾、后趾、裁脚、第二只鸟、农场围栏、文字水印 |
| `02-adult-female-field-marks.webp` | 一只完整成年北非雌鸟侧前三分之四站立 | 灰褐体羽、灰褐颈腿、浅色翼尾、大眼、头顶裸斑、每脚两趾 | 雄鸟黑白羽色、红色繁殖颈、鲜蓝颈、第三趾、雏鸟条纹、额外动物 |
| `03-semi-arid-savanna-habitat.webp` | 半干旱草原、低灌丛和开阔地占至少 88%，一只小型完整雌鸟在中右 | 短草、散生灌丛、连续地平线和宽阔视野 | 巨大沙丘、茂密雨林、纯裸沙、农场、道路、迁徙箭头、第二只鸟 |
| `04-two-toed-running-stride.webp` | 一只完整成年北非雄鸟横向高速奔跑，一脚负重、一脚离地，高速快门冻结脚趾 | 每脚恰好两个朝前趾，粗大内趾和较小外趾；翼轻度展开维持平衡 | 第三趾、后趾、蹄、猛禽爪、脚部模糊、飞行姿势、捕食者、速度线或测速仪 |
| `05-communal-ground-nest-and-eggs.webp` | 一只完整北非雌鸟守在裸露浅刮巢旁，巢内恰好八枚可见卵 | 一个浅窝、恰好 8 枚奶油色厚壳卵、雌鸟灰褐羽、所有卵可数 | 50 枚不可数卵堆、树巢、篮状巢、雄鸟黑羽、雏鸟、人手触卵、第二只成鸟 |
| `06-distance-savanna-monitoring.webp` | 宽景北非恢复地，两名观察员在左侧以一台三脚架望远镜和一本记录册远距观察右侧一只鸵鸟 | 恰好两人、一台 scope、一个 tripod、一本 notebook、一只远鸟；人与鸟之间有宽阔缓冲 | 抓鸟、触卵、围堵、车辆追逐、无人机、额外人员或鸟、把画面当作真实计数证据 |

六图共同形态总检：**exactly one *Struthio camelus camelus* bird per frame; small flat head; broad flat bill; large eyes; long bare neck; rounded body; two reduced wings; two long bare legs; two feet; exactly two forward toes per foot, one large inner toe and one smaller outer toe; no hind toe; adult male black with soft white wing and tail plumes, adult female grey-brown; no Somali Ostrich blue neck, emu, cassowary, rhea, bustard, extra limbs, extra toes, flight, clipped feet, text, label, logo, watermark or farm setting**。

图 05 的八枚卵只服务于视觉可核验性。caption 必须说明共同巢总数随产卵雌鸟数、地点和阶段变化，画面不能证明一只雌鸟产了八枚，也不能代表最终孵化数量。

## 推荐来源数组

以下来源覆盖 `taxonomy`、`conservation`、`distribution`、`ecology` 和 `general` 五种 `SourceKind`：

```ts
const AFRICAN_OSTRICH_SOURCE_DATE = '2026-08-26' as const;
const AFRICAN_OSTRICH_CONTENT_DATE = '2026-08-26' as const;

const AFRICAN_OSTRICH_SOURCES = [
  {
    title: 'IOC World Bird List v15.2 — Ratites: Ostriches to Tinamous',
    url: 'https://www.worldbirdnames.org/new/bow/ratites/',
    kind: 'taxonomy',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Master, subspecies and multilingual lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2011 — Phylogeographic analysis of ostrich subspecies',
    url: 'https://doi.org/10.1007/s10592-010-0149-x',
    kind: 'taxonomy',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Struthio camelus (2025 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T45020636A280828427.en',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Common Ostrich Struthio camelus',
    url: 'https://datazone.birdlife.org/species/factsheet/common-ostrich-struthio-camelus',
    kind: 'distribution',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices — population-limited Appendix I listing for Struthio camelus',
    url: 'https://cites.org/sites/default/files/eng/app/2025/E-Appendices-2025-02-07.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'CMS Appendices I and II effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Ostrich',
    url: 'https://nationalzoo.si.edu/animals/ostrich',
    kind: 'general',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'San Diego Zoo — Ostrich life history and sex-specific measurements',
    url: 'https://animals.sandiegozoo.org/animals/ostrich',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'EAZA — North African Ostrich Best Practice Guidelines',
    url: 'https://strapi.eaza.net/uploads/North_ostrich_BPG_c731b4a332.pdf',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Alexander et al. 1979 — Mechanics of running of the ostrich',
    url: 'https://doi.org/10.1111/j.1469-7998.1979.tb03941.x',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum — largest bird and single-male speed record',
    url: 'https://www.nhm.ac.uk/discover/what-is-the-biggest-bird-in-the-world.html',
    kind: 'general',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Withers 1983 — Energy, water and solute balance of the ostrich',
    url: 'https://doi.org/10.1086/physzool.56.4.30155880',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Williams et al. 1993 — Field metabolism and water requirements in the Namib',
    url: 'https://doi.org/10.2307/1939301',
    kind: 'ecology',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
  {
    title: 'Sahara Conservation — North African Ostrich Recovery',
    url: 'https://saharaconservation.org/restoring-wildlife/north-african-ostrich-recovery/',
    kind: 'conservation',
    accessedAt: AFRICAN_OSTRICH_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

`focalPoint` 是生成目标；六张运行时图完成后按实际主体位置复核。

```ts
{
  id: 'species-struthio-camelus',
  slug: 'african-ostrich',
  names: {
    zh: '非洲鸵鸟',
    en: 'Common Ostrich',
    aliases: ['鴕鳥'],
  },
  scientificName: 'Struthio camelus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Struthioniformes', '鸵鸟目'),
    taxon('Struthionidae', '鸵鸟科'),
    taxon('Struthio', '鸵鸟属'),
  ),
  conservation: conservation('LC', 'decreasing', 2025),
  distribution: {
    realms: ['terrestrial'],
    continents: ['非洲'],
    regions: ['萨赫勒与撒哈拉南缘', '东非稀树草原', '南部非洲干旱草原与灌丛'],
    countries: [
      '毛里塔尼亚',
      '马里',
      '尼日尔',
      '乍得',
      '苏丹',
      '厄立特里亚',
      '埃塞俄比亚',
      '肯尼亚',
      '乌干达',
      '坦桑尼亚',
      '安哥拉',
      '纳米比亚',
      '博茨瓦纳',
      '南非',
      '赞比亚',
      '津巴布韦',
      '莫桑比克',
      '喀麦隆',
      '中非共和国',
      '塞内加尔',
    ],
    range:
      '原生分布横跨非洲萨赫勒、东非和南部非洲，在干旱草原、稀树草原、灌丛、半荒漠和开阔林地留居或随资源游移；北非和西非分布已经高度破碎，西亚亚种灭绝。',
  },
  habitats: [
    {
      name: '干旱草原与稀树草原',
      realm: 'terrestrial',
      description: '短草、散生乔木和广阔视野支持取食、奔跑和警戒，是 BirdLife 列出的主要生境。',
      isPrimary: true,
    },
    {
      name: '半荒漠、萨赫勒平原与干河谷灌丛',
      realm: 'terrestrial',
      description: '降雨稀少，植物脉冲、多肉植物和干河谷植被提供季节性食物与水。',
    },
    {
      name: '开阔林地、牧场与农业边缘',
      realm: 'terrestrial',
      description: '可利用疏林和低强度牧场；人工地景属于边缘生境，不能替代连续原生开阔地。',
    },
  ],
  measurements: {
    height: {
      min: 1.7,
      max: 2.7,
      unit: 'm',
      note: '圣迭戈动物园成鸟范围；雌 1.7—1.9 米，雄 2.1—2.7 米。',
    },
    weight: {
      min: 90,
      max: 130,
      unit: 'kg',
      note: '圣迭戈动物园成鸟范围；雌 90—110 千克，雄 100—130 千克；不含个别极值。',
    },
  },
  diet: {
    types: ['herbivore', 'omnivore'],
    foods: ['草、叶和嫩枝', '花、种子和果实', '根与多肉植物', '蝗虫等昆虫', '偶遇的蜥蜴、蛙和小型啮齿类'],
    description:
      '以植物为主的机会型杂食者，随季节取食草、叶、花、种子、根、多肉植物和果实，也摄食昆虫及偶遇的小型脊椎动物；吞下砂粒和小石帮助砂囊研磨食物。',
  },
  activity: [
    '非迁徙性陆栖，干旱地区随食物和降雨游移',
    '日间活动，清晨和傍晚常更活跃',
    '可独行、成对或组成松散群体',
    '以奔跑逃避风险，翼协助平衡和转向',
    '通过翼尾、姿态和雄鸟低沉鸣声求偶与交流',
    '沙浴并整理蓬松羽毛',
  ],
  tags: ['现存最大鸟类', '古颚类群', '不能飞行', '每脚两趾', '共同巢', '干旱地适应', 'IUCN 无危但趋势下降'],
  summary: '横跨非洲干旱开阔地的现存最大鸟类，以两趾长腿奔跑，并由多只雌鸟共享地面巢。',
  description:
    '非洲鸵鸟是鸵鸟目现存两种鸟之一，也是现存最高、最重的鸟。IOC v15.2 承认三个现生亚种和一个灭绝的西亚亚种，并把索马里鸵鸟列为独立种。它以植物为主，在草原、稀树草原、半荒漠和灌丛留居或随资源游移；能节约水分，但有水时会饮用。BirdLife/IUCN 2025 全球评估为 LC、趋势下降，北非指名亚种仍需反盗猎、遗传管理和放归恢复。',
  storySections: [
    {
      key: 'taxonomy',
      label: '分类口径',
      title: '三个现生亚种，另有一个西亚亚种灭绝',
      body: 'IOC v15.2 接受 Common Ostrich，即 Struthio camelus，列出 camelus、massaicus 和 australis 三个现生亚种，并保留灭绝的 syriacus。索马里鸵鸟 S. molybdophanes 已是独立种，不能继续并入。',
    },
    {
      key: 'sex-and-region',
      label: '性别与地域型',
      title: '黑白雄鸟、灰褐雌鸟，颈腿颜色还随亚种改变',
      body: '雄鸟主体黑而翼尾白，雌鸟整体灰褐。北非和马赛雄鸟颈腿偏粉红至红，南部雄鸟颈腿深灰蓝；图集选用头顶有裸斑、颈基有白色羽缘的北非指名亚种。',
    },
    {
      key: 'running',
      label: '两趾奔跑',
      title: '61 和 72 千米每小时属于两种记录口径',
      body: '原始电影研究中的一只 40 千克雌鸟约达 61 千米/小时；英国自然历史博物馆另载一只雄鸟在 732 米路段达到 72 千米/小时。两者都不是群体平均或无限持续速度。',
    },
    {
      key: 'water',
      label: '干旱地水分',
      title: '能熬过少水期，也会主动饮水',
      body: '野生纳米布成鸟可在观察期内依靠植物水，实验鸟断水时也能浓缩尿液并减少排水；七天断水仍造成负水分平衡和体重下降。有水时鸵鸟会饮用，不能写成不需要喝水。',
    },
    {
      key: 'communal-nest',
      label: '共同巢',
      title: '单只雌鸟的七至十枚会汇入一个共同浅窝',
      body: '雄鸟刨出地面浅窝，主雌与其他雌鸟向同一巢产卵。主雌主要白天、雄鸟主要夜间孵化 42—46 天；共同巢可有几十枚卵，但能覆盖孵化的数量较少。',
    },
    {
      key: 'conservation',
      label: '北非恢复',
      title: '全球无危没有消除北非的盗猎与遗传风险',
      body: '2025 全球评估为 LC、趋势下降。北非指名亚种已从大片原生范围消失，恢复项目需要保护栖息地和巢、控制盗猎，并核验圈养谱系后再放归；CITES 附录 I 也只覆盖指定北方国家种群。',
    },
  ],
  keyFacts: [
    'IOC v15.2 使用英文名 Common Ostrich，承认三个现生亚种和一个灭绝西亚亚种。',
    '索马里鸵鸟是独立种，不属于非洲鸵鸟的现生亚种。',
    'BirdLife/IUCN 2025 全球评估为 LC、趋势下降，criteria 为空。',
    '本种只属于 terrestrial realm，是非迁徙性陆鸟，但干旱区群体会随资源游移。',
    '雌鸟高 1.7—1.9 米、90—110 千克；雄鸟高 2.1—2.7 米、100—130 千克。',
    '一只 40 千克雌鸟电影实测约 61 千米/小时；一只雄鸟的整理纪录为 72 千米/小时、732 米。',
    '每只脚只有两个朝前趾，小翼用于展示、平衡和转向。',
    '食性以植物为主，也摄食昆虫及偶遇的小型脊椎动物。',
    '能用植物水和浓缩排泄物度过缺水期，有水时仍会饮用。',
    '多只雌鸟可向共同地面巢产卵，主雌主要白天、雄鸟主要夜间孵化。',
    '单只雌鸟 7—10 枚与共同巢几十枚属于不同统计单位。',
    'CITES 附录 I 只覆盖 12 个指定北方国家种群。',
  ],
  threats: [
    '农牧扩张、过度放牧和土地转换造成开阔生境丧失与退化',
    '为肉、羽、皮、脂肪和其他产品猎杀或盗猎野生鸵鸟',
    '收集野生卵降低繁殖产出并支持非法贸易',
    '冲突和管理中断削弱巡护并提高车辆、武器盗猎压力',
    '北非残存小种群面临隔离、近交和偶发事件风险',
    '未经遗传核验的商业杂交谱系威胁北非恢复项目的谱系完整性',
  ],
  conservationActions: [
    '保护并连接短草平原、稀树草原、萨赫勒灌丛和干河谷',
    '在残存北非种群和繁殖地加强反盗猎、巡护及社区协作',
    '打击野生卵、肉、皮、羽和其他制品的非法采集与跨境贸易',
    '按亚种和野生来源监测数量、繁殖成功、分布与趋势',
    '对北非圈养保障群开展谱系和遗传管理，防止近交及杂交混入',
    '放归前评估栖息地、社区、疾病和遗传来源，放归后持续跟踪',
    '执行 CITES 对指定北方国家种群的附录 I 贸易管制',
  ],
  metrics: {
    adultMassKg: [90, 130],
  },
  featuredStats: [
    {
      key: 'sex-specific-height',
      label: '成鸟站立高度',
      value: '雌 1.7—1.9；雄 2.1—2.7',
      unit: '米',
      note: '圣迭戈动物园性别分列范围；2.75 米属于个体极值记录',
    },
    {
      key: 'single-male-speed-record',
      label: '单只雄鸟路段纪录',
      value: '72',
      unit: '千米/小时',
      note: '英国自然历史博物馆整理的 1964 年记录，路段 732 米；不代表群体平均或持续速度',
    },
    {
      key: 'eggs-per-female',
      label: '单只雌鸟产卵数',
      value: '7—10',
      unit: '枚',
      note: '圣迭戈动物园汇总；共同巢由多只雌鸟贡献，可汇集几十枚',
    },
    {
      key: 'incubation',
      label: '孵化期',
      value: '42—46',
      unit: '天',
      note: '主雌主要白天、雄鸟主要夜间孵化；EAZA 野外汇总平均约 42 天',
    },
  ],
  media: {
    image: './images/species/african-ostrich/01-open-savanna-adult-male-portrait.webp',
    alt: '萨赫勒开阔稀树草原上，一只粉红颈腿、头顶有裸斑、黑色主体和白色翼尾的北非雄性非洲鸵鸟完整站立',
    focalPoint: { x: 0.68, y: 0.52 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/african-ostrich/02-adult-female-field-marks.webp',
        alt: '一只灰褐体羽和灰褐颈腿的成年雌性非洲鸵鸟完整侧身站立，双脚各有两个朝前脚趾',
        title: '雌鸟的灰褐保护色',
        caption: '成年雌鸟没有雄鸟的黑白对比；图中采用北非指名亚种，不能据此概括所有亚种的裸露皮肤颜色。',
        focalPoint: { x: 0.58, y: 0.52 },
      },
      {
        image: './images/species/african-ostrich/03-semi-arid-savanna-habitat.webp',
        alt: '半干旱短草、低矮灌丛和开阔地占据宽景，一只小型完整非洲鸵鸟在中右侧游移取食',
        title: '需要看得远的开阔地',
        caption: '干旱草原和稀树草原是主要生境，半荒漠、灌丛和开阔林地也会使用；资源游移不等于固定迁徙。',
        focalPoint: { x: 0.68, y: 0.57 },
      },
      {
        image: './images/species/african-ostrich/04-two-toed-running-stride.webp',
        alt: '一只雄性非洲鸵鸟横向奔跑，一脚着地一脚抬起，双脚各恰好两个朝前脚趾，短翼轻度张开保持平衡',
        title: '两趾脚完成高速步态',
        caption: '这幅重建只展示两趾、负重脚和翼部平衡动作，不代表测速结果；72 千米/小时来自单鸟路段纪录。',
        focalPoint: { x: 0.52, y: 0.55 },
      },
      {
        image: './images/species/african-ostrich/05-communal-ground-nest-and-eggs.webp',
        alt: '一只灰褐雌性非洲鸵鸟守在地面浅刮共同巢旁，巢内恰好八枚奶油色大卵清楚可数',
        title: '共同浅窝中的八枚可见卵',
        caption: '八枚只表示一个可核验的重建时点；共同巢可由多只雌鸟贡献几十枚，主雌与雄鸟分担孵化。',
        focalPoint: { x: 0.52, y: 0.6 },
      },
      {
        image: './images/species/african-ostrich/06-distance-savanna-monitoring.webp',
        alt: '北非鸵鸟恢复地宽景中，两名调查人员在远处用一台三脚架望远镜和一本记录册观察右侧一只鸵鸟',
        title: '给恢复种群留下缓冲距离',
        caption: '北非恢复需要核验谱系、监测放归个体并维持社区巡护；画面不代表真实批次、地点或数量。',
        focalPoint: { x: 0.6, y: 0.56 },
      },
    ],
  },
  sources: AFRICAN_OSTRICH_SOURCES,
  featured: true,
  publishedAt: AFRICAN_OSTRICH_CONTENT_DATE,
  updatedAt: AFRICAN_OSTRICH_CONTENT_DATE,
}
```

## 实施核对表

- 新增 `Struthioniformes / 鸵鸟目`、`Struthionidae / 鸵鸟科`、`Struthio / 鸵鸟属`，复用 Animalia、Chordata 和 Aves。
- 中文名写非洲鸵鸟；IOC 英文名写 Common Ostrich；alias 使用繁体 `鴕鳥`。
- 正文明确三个现生亚种、一个灭绝西亚亚种，并把索马里鸵鸟排除在本种之外。
- 保护字段写 `LC / decreasing / 2025`，不出现 `criteria`。
- `distribution.realms` 只写 `terrestrial`；不因饮水坑加入 `freshwater`。
- 不填 `estimatedMatureIndividuals`、`adultLengthCm` 或 `topSpeedKph`；300,000—900,000 和速度纪录保留推算或样本限定。
- 测量字段用 `height`，保留雌雄范围；不把站立高度写成体长。
- 共同巢正文区分单雌 7—10 枚、共同巢几十枚和约 20 枚覆盖能力。
- 恰好 6 个 `storySections`、4 个 `featuredStats`、1 张封面和 5 张 gallery。
- 六图统一北非指名亚种形态；每脚恰好两趾，雌雄羽色不能互换。
- 巢图恰好八枚可见卵；caption 说明它不是共同巢最终总数或孵化结果。
- CITES 标签必须写“附录 I（指定北方国家种群）”；省略 CMS 标签。
- 数据、运行时 WebP、源图 README、测试、类型检查、构建与静态图像检查全部通过后，再从 `docs/todo.md` 删除非洲鸵鸟一行。

## 实施后的图像口径

生成与原尺寸检查完成后，最终接受图对本研究稿中的预生成方案作了两项调整：

- 近景统一采用南部亚种 ***S. c. australis*** 的灰色颈腿，不再采用前文建议的北非指名亚种；物种档案和图片 README 已同步这一地域型边界。
- 共同巢提示要求八枚卵，最终画面实际有九枚清楚可数的卵；产品 alt、caption 和验收记录按九枚写，并继续说明它不代表固定窝卵数、产卵雌鸟数或孵化结果。

这两项实施记录取代前文“六图科学边界”和示例 `media` 中对应的地域型与卵数建议；分类、保护状态、体尺、繁殖统计和行为结论不变。完整生成提示、修正链和接受观察见 [`src/assets/source/species/african-ostrich/README.md`](../../src/assets/source/species/african-ostrich/README.md)。
