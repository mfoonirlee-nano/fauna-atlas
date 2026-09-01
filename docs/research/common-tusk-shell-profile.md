# 普通角贝（Antalis vulgaris）物种档案研究

> 研究截止：2026-09-01
> 用途：Fauna Atlas 物种页、结构化字段与六幅 1536 × 1024 科学情景图
> 证据口径：接受名与六级分类采用 MolluscaBase/WoRMS；分布以分类目录、原始论文和有凭证的区域资料为骨架，GBIF/OBIS 仅用于发现与交叉核对；食性、掘穴和幼体机制严格区分本种证据与掘足纲通用证据。未找到的数据保持未知，不用近缘种数字补齐。

## 1. 结论摘要

MolluscaBase/WoRMS 接受名为 *Antalis vulgaris* (da Costa, 1778)，AphiaID 196380。da Costa 在 1778 年以 *Dentale vulgare* 描述本种；作者名置于圆括号内，表示现属组合不同于原始组合。当前六级分类为 Animalia、Mollusca、Scaphopoda、Dentaliida、Dentaliidae、*Antalis*。[S01][S02][S05]

“普通角贝”沿用项目 TODO，本轮未在 WoRMS、OBIS、GBIF、ITIS、NCBI 或可检索的中国权威名录中找到这一中文名，不能写成已核定中文标准名。WoRMS 收录的英语俗名为 common elephant's tusk、common tusk 和 common tuskshell；页面主英文名建议统一为 Common Tusk Shell。[S04]

本种分布在东大西洋和地中海的欧洲、北非海域。权威目录给出 5–1000 米；西班牙综述给出 5–1100 米。页面采用“约 5–1000 米，另有资料延伸至 1100 米”的保守表述，不能把整个区间画成同等常见，也不能把海底出现深度填入主动潜水语义的 `metrics.maxDiveDepthM`。[S07][S08][S09]

壳是一枚两端开放、略弯曲的白色管状壳，不是两片贝壳。宽阔前端埋入砂泥，头、足和大量纤细的 captacula 从这一端活动；较窄的后端朝向沉积物表面并维持水流交换。壳长报道最大约 60 毫米，前端最大宽度约 6 毫米。[S08][S10][S11]

本种用足掘穴，用 captacula 捕捉有孔虫等底栖微生物，再由齿舌处理。DORIS 的物种页直接如此描述；较完整的运动顺序、captacula 结构和“足与 captacula 不同时完全伸出”主要来自掘足纲研究。十九世纪胃含物观察曾记录多种有孔虫和微小双壳类，但没有现代定量食谱研究。[S11][S13][S14][S15]

雌雄异体有物种级资料支持，配子和受精也有针对旧组合 *Dentalium vulgare* 的实验研究。Roscoff 地方名录记载当地 7–8 月自由产卵；外部受精、浮游担轮幼体及后续有壳幼体序列主要是掘足纲通用证据，不能据此补写本种固定繁殖季、幼体持续时间、成熟年龄或寿命。[S10][S12][S16][S17][S18]

截至研究日，IUCN Red List 精确名检索没有找到本种评估页；IUCN API 还需要授权，不能把“未检出页面”包装成一份正式评估。SeaLifeBase 页面按其标注的 IUCN 2025-2 口径显示 Not Evaluated。项目可用 `NE / unknown`，但页面必须解释：这是“未找到全球评估”的检索状态，不是“无危”。[S19][S20]

## 2. 证据等级与使用边界

本档案用三种证据标签控制外推：

- **物种级。** 来源明确针对 *Antalis vulgaris*，或使用可追溯旧组合 *Dentalium vulgare*。可直接进入物种档案，但地方样点和实验条件仍需保留。
- **区域物种级。** 来源针对本种，但只覆盖 Roscoff、瓦伦西亚、比斯开湾、爱尔兰或其他局部海区。只支持该地记录，不自动代表全分布区。
- **掘足纲通用。** 来源描述 Scaphopoda 或其他角贝的共同解剖、行为、幼体与捕食。可解释机制，运行时文案必须写“角贝通常”“作为掘足纲成员”或同等限定，不能改写成本种已实测数字。

聚合平台的空壳、旧名称、坐标和活体记录可能混在一起。国家数组只列本轮有目录、论文、官方监测或可信区域资料直接支持的代表性国家，不追求把地中海每个沿岸国家全部列满。[S24][S25][S26]

## 3. 命名与分类

### 推荐展示名

| 字段 | 推荐值 | 使用边界 |
|---|---|---|
| 中文主名 | 普通角贝 | 项目 TODO 采用名；本轮未找到权威中文名录条目 |
| 英文主名 | Common Tusk Shell | 与 WoRMS 的 common tusk / common tuskshell 对齐[S04] |
| 英文别名 | Common Tusk；Common Tuskshell；Common Elephant's Tusk | 均为 WoRMS 收录俗名[S04] |
| 接受名与作者 | *Antalis vulgaris* (da Costa, 1778) | WoRMS 接受名；作者括号不能省略于命名说明[S01] |
| `scientificName` 字段 | `Antalis vulgaris` | 当前 schema 只存二名法，不含命名人 |
| 原始组合 | *Dentale vulgare* da Costa, 1778 | da Costa 原始描述 p.24、pl. II fig. 10；仅用于命名史[S05] |
| WoRMS AphiaID | 196380 | 稳定外部标识[S01] |
| 页面 id | `species-antalis-vulgaris` | 遵循当前 `Species.id` 形式 |
| 页面 slug | `common-tusk-shell` | 采用英语通行名 |

### 六级分类

| 分类阶元 | 学名 | 推荐中文 | 依据与边界 |
|---|---|---|---|
| 界 | Animalia | 动物界 | WoRMS[S02] |
| 门 | Mollusca | 软体动物门 | WoRMS[S02] |
| 纲 | Scaphopoda | 掘足纲 | WoRMS 学名；中文沿用中国动物分类文献[S02][S06] |
| 目 | Dentaliida | 角贝目 | WoRMS 学名；中文沿用中国动物分类文献[S02][S06] |
| 科 | Dentaliidae | 角贝科 | WoRMS 学名；中文沿用中国大陆文献；台湾资料也可见“象牙贝科”[S02][S06] |
| 属 | *Antalis* | 安塔角贝属 | 中文为项目工作译名，未找到标准译名；拉丁名为准 |

WoRMS 当前异名表包括原始组合 *Dentale vulgare*、后续组合 *Dentalium vulgare*、拼写变体 *Antalis vulgare*，以及 *Dentalium labiatum*、*D. laeve*、*D. striolatum*、*D. tarentinum*、*D. vitreum* 等异名。这些是科学命名史，不应混入用户侧 `names.aliases`。[S03]

## 4. 分布与地图口径

### 可支持的总体范围

Steiner 与 Kabat 的掘足类物种名录把本种范围概括为东大西洋和地中海的欧洲、北非海域，深度 5–1000 米。Steiner 的西班牙综述同样给出地中海与东大西洋，并汇总至 5–1100 米；其中实际材料包括巴利阿里海 5–59 米及比斯开湾 119–122 米。原始描述所依据的英国材料来自锡利群岛、康沃尔、德文和汉普郡一带。[S05][S07][S08]

区域资料进一步支持北海、英吉利海峡、爱尔兰西部、法国大西洋岸、伊比利亚沿岸、阿尔沃兰海、地中海东西部、爱琴海、达达尼尔海峡和马尔马拉海。WoRMS 的结构化分布记录明确包含西班牙、爱尔兰、突尼斯和土耳其海区；比利时清单标为本地出现，法国 Roscoff、荷兰海岸和阿尔及利亚各有独立区域记录。[S11][S12][S24][S25][S26][S27]

### 结构化国家数组

建议采用九国保守数组：

- 英国：模式地区与 Naturalis 英国分布资料；
- 爱尔兰：Naturalis 西爱尔兰记录及爱尔兰 Marine Institute WFD 底栖调查；
- 法国：Roscoff 和 DORIS 记录；
- 比利时：GBIF 引用的本地物种清单；
- 荷兰：荷兰海岸历史记录；
- 西班牙：比斯开湾、巴利阿里海和 WoRMS 分区记录；
- 土耳其：爱琴海、地中海、达达尼尔和马尔马拉海记录；
- 突尼斯：地中海东西盆地记录；
- 阿尔及利亚：近年软底底栖调查记录。

GBIF/OBIS 的出现记录还涉及葡萄牙、意大利、希腊、克罗地亚、马耳他、摩洛哥、埃及、塞浦路斯、黎巴嫩等符合总体范围的国家，也混有美国、中国、白俄罗斯、匈牙利等明显需要清洗的离群点。本轮没有逐条核验这些扩展记录的凭证、活体状态和坐标，因此不把它们放进运行时 `countries`。九国数组是有证据的代表集，不是排他性国别清单。[S24][S28]

### Species 分布字段草案

~~~ts
distribution: {
  realms: ['marine'],
  continents: ['欧洲', '非洲', '亚洲'],
  regions: [
    '北海南部、英吉利海峡与爱尔兰西部海域',
    '英国南岸经比斯开湾至伊比利亚半岛的东北大西洋沿岸',
    '地中海东西部、爱琴海、达达尼尔海峡与马尔马拉海',
    '突尼斯与阿尔及利亚等北非地中海沿岸',
  ],
  countries: [
    '英国',
    '爱尔兰',
    '法国',
    '比利时',
    '荷兰',
    '西班牙',
    '土耳其',
    '突尼斯',
    '阿尔及利亚',
  ],
  range:
    '分布于东大西洋和地中海的欧洲、北非海域，见于北海、英吉利海峡、爱尔兰西部、伊比利亚沿岸及地中海东西部，并延伸至爱琴海、达达尼尔海峡和马尔马拉海。',
  center: { lat: 40, lng: 3 },
}
~~~

`center` 只让首屏地图落在西地中海与东北大西洋交界附近，不是分布几何中心或种群中心。地图若有范围着色，应沿陆架和大陆坡软底呈带状、间断分布，不可涂满北大西洋与整个地中海水体。

## 5. 生境、深度与掘穴姿态

本种是海洋底栖、沉积物内生活的掘足类。区域资料记录砂、泥砂、含贝壳碎屑的底质，以及 Roscoff 的砂底、石灰藻砾和碎壳底。活体通常把宽阔前端埋在沉积物中，较窄后端靠近或伸出沉积物表面；这与把“象牙尖”向下插入的直觉相反。[S09][S11][S12][S27]

深度资料有两个常见边界。Steiner 与 Kabat 的目录和 SeaLifeBase 给出 5–1000 米；Martínez-Ortí 与 Cádiz、Steiner 的地区综述延伸至 1100 米。页面正文应写“约 5–1000 米，另有文献记录到 1100 米”，图像以有细砂、泥砂和碎壳的大陆架软底为核心，不用黑暗深渊代表全部生境。[S07][S08][S09][S20]

~~~ts
habitats: [
  {
    name: '东大西洋与地中海砂泥软底',
    realm: 'marine',
    isPrimary: true,
    description:
      '穴居于砂质、泥砂质海床，宽阔前端和足向下埋入沉积物，狭窄后端靠近表面维持水流交换；文献主范围约 5–1000 米。',
  },
  {
    name: '碎壳与石灰藻砾底',
    realm: 'marine',
    description:
      '也见于混有碎贝壳、石灰藻砾或其他粗颗粒的软底；Roscoff 资料来自局地低潮砂地及疏浚样品，不代表全范围均可潮间带发现。',
  },
  {
    name: '外陆架至上部大陆坡软底',
    realm: 'marine',
    description:
      '目录记录可达约 1000 米，另有资料汇总至 1100 米；这是已报道深度边界，不是普通个体的典型深度或主动下潜能力。',
  },
]
~~~

## 6. 形态、尺寸与辨识

### 壳与软体

- 壳是一枚细长、轻微弯曲、两端开放的管，不是双壳类的左右两瓣，也不是腹足类的螺旋壳。[S08][S10]
- 壳体较厚，后半部较宽、弯曲适中，整体不透明、暗白色；顶端可呈玫瑰色或棕色。幼体和磨损程度会改变颜色。[S08][S10][S11]
- 靠近狭窄后端约有 30 条细密纵纹，向宽阔前端逐渐消失；壳面还有生长纹。这个数量来自形态描述，不应要求生成图精确可数。[S08]
- 宽阔前口近圆形；狭窄后口斜截，边缘通常完整。成体后口可能被隔板部分封闭，只留下短小中央管或孔。[S08][S10]
- 头部退化且无眼。长而尖、末端双叶的肌足从宽阔前端伸出；大量 captacula 也位于前端，但正常活动时足和 captacula 不同时充分伸出。[S10][S14]
- Naturalis 的物种说明记载宽椭圆齿舌，每一横列五枚齿。没有必要在普通外观图中把齿舌画成突出的大口器。[S10]

### 尺寸

| 指标 | 证据值 | 结构化处理 |
|---|---:|---|
| 西班牙资料中的壳长 | 20–50 mm | 区域材料/描述范围，不作为全球成体上下限[S09] |
| 最大报道壳长 | 60 mm | 可写 `measurements.length.max`；WoRMS 性状字段质量为 unreviewed[S10][S21] |
| 最大前端宽度 | 6 mm | Naturalis 的最大尺寸说明，只放正文或注释[S10] |
| 西班牙资料中的基部直径 | 2–4 mm | 区域材料范围，不设全种典型值[S09] |

~~~ts
measurements: {
  length: {
    max: 6,
    unit: 'cm',
    note: '最大报道壳长；瓦伦西亚资料中的标本/描述范围为 20–50 mm，不代表全球成体下限。',
  },
}
~~~

不填写体重、成体平均长度或软体伸展长度。资料测量的是管状壳；把 20–50 毫米与最大 60 毫米拼成 `metrics.adultLengthCm: [2, 6]` 会暗示已经获得全物种成体范围。

### 与近似种区分

Naturalis 指出，本种比 *Antalis entalis* 的弯曲度低，后部纵纹细而密。Steiner 还强调后端纵纹、完整顶口，以及成体偶见的中央短管。图像可据此呈现“轻弯、后端细纵纹、顶口完整”，但不能仅凭一张 AI 图宣称排除 *A. entalis* 或其他 *Antalis*；真实鉴定应结合壳端结构、尺度、地点、馆藏凭证，必要时加解剖或分子资料。[S08][S10][S26]

## 7. 食性、捕食与活动

### 食性证据

DORIS 的本种页面描述肌足挖掘沉积物，captacula 捕获有孔虫等底栖微生物，再把食物送往口和齿舌。Reynolds 对掘足纲的综述把这类动物概括为穴居微型肉食者，以有孔虫和其他微生物为主；这一机制适合解释本种，但证据层级以纲级为主。[S11][S13]

Palmer 1975 转述 Clark 1849 对 *Antalis vulgare* 的胃含物观察：多种有孔虫，以及小型双壳类 *Kellia suborbicularis* 和幼小 *Goodalia triangularis*。它支持“可摄食有孔虫和极小双壳类”，但属于十九世纪观察的后续引述，没有样本量、比例或现代鉴定复核，不能写成精确食谱。[S15]

部分生态数据库或底栖论文把本种归入 deposit feeder。项目可以在解释性正文写“从沉积物颗粒间选择微小动物性食物”，不建议把运行时 `diet.types` 同时设为 `detritivore`：现有证据没有证明碎屑是其主要营养来源。[S13][S27]

~~~ts
diet: {
  types: ['carnivore'],
  foods: [
    '底栖有孔虫',
    '沉积物颗粒间的其他微生物与微型动物',
    '偶见极小双壳类；仅有历史胃含物观察',
  ],
  description:
    '用纤细、末端膨大的 captacula 在沉积物中选择微小食物，再由每横列五枚齿的齿舌处理；有孔虫是最稳定的食性证据，食谱尚无现代定量研究。',
}
~~~

### 掘穴与觅食顺序

掘足纲资料显示，肌足先从宽阔前端伸出，扩大、锚定并把身体拉入沉积物；随后足收回，captacula 才在壳周围的沉积物孔隙中展开觅食。Lamprell 与 Healy 明确概括足和 captacula 不同时伸展。图像必须把“掘穴帧”和“觅食帧”分开。[S13][S14]

推荐 `activity`：

~~~ts
activity: [
  '以长而尖、末端双叶的肌足锚定沉积物并向下掘穴',
  '足收回后伸展大量纤细 captacula，在壳周围选择有孔虫等微小食物',
  '让较窄后端靠近沉积物表面，维持呼吸、排泄与配子释放所需水流',
  '可在沉积物内有限重新定位；没有可靠的昼夜节律或移动距离资料',
]
~~~

其中呼吸、排泄与配子释放水流属于掘足纲解剖解释，有限移动来自欧洲海床生物扰动性状表；两者都没有本种的流速或位移量。昼夜节律和移动距离则是本轮检索未找到的数据。[S10][S13][S23]

### 捕食者边界

没有找到 *A. vulgaris* 的现代捕食者清单、捕食率或防御实验。Reynolds 综述提到角贝可被玉螺类和鼠鱼等捕食，但这是掘足纲层面的综合，不足以给本种指定捕食者。Roscoff 记录的空壳可被小型星虫 *Phascolion strombi* 占用，这是死后壳体利用，不是捕食或共生于活体。[S12][S13]

## 8. 呼吸与内部结构

Naturalis 的本种说明指出，外套边缘愈合成开放管状外套腔，没有专门鳃、心脏或发达循环系统，气体经外套表面交换。水从较窄后端参与交换，并带走排泄物和配子。该页面以本种为条目，但这些结构也是掘足纲共同解剖；故事页应避免声称已经对本种测得具体流速、氧耗或交换效率。[S10][S13][S14]

宽阔端的头部很不显眼，不应画出眼、触角或吻；前端内部可包含口、齿舌、足和 captacula 起点。后端只有单一狭窄开口，不应仿照双壳类增加成对虹吸管。[S10][S14]

## 9. 繁殖、幼体与生活史

### 本种直接证据

Naturalis 明确记载雌雄异体。Dufresne-Dubé 等以旧组合 *Dentalium vulgare* 分析配子超微结构与受精，Moreau 等研究同一旧组合受精时缺少快速电性多精阻断；这些论文证明本种有分离的精卵和可实验观察的体外受精过程，但不能推导自然产卵量、交配行为或受精成功率。[S10][S16][S17]

Roscoff 地方名录记载当地 7–8 月释放游离卵。这个时间窗只适用于当地观察，不能写成东大西洋和整个地中海的固定繁殖季。[S12]

### 掘足纲通用发育序列

Reynolds、SeaLifeBase 与发育研究支持掘足纲通常雌雄异体、向水中释放配子，胚胎经过自由游泳的卵黄营养型担轮幼体，随后形成有壳幼体并沉降为底栖稚体。captacula 是变态后的结构，初孵幼体不应带成体壳、足或一圈触手。[S13][S18][S20]

本轮没有找到本种可靠的胚胎时序、浮游持续时间、定居线索、变态尺寸、性成熟年龄、寿命、世代长度、繁殖力或自然死亡率。`metrics.lifespanYears`、成熟年龄和产卵量必须留空。

## 10. 保护状态、威胁与管理

### IUCN 状态

| 字段 | 推荐值 | 理由 |
|---|---|---|
| 体系 | IUCN Red List | 与当前 schema 一致 |
| 代码 | NE | 精确接受名与旧组合检索均未找到物种评估页；SeaLifeBase 标作 Not Evaluated[S19][S20] |
| 趋势 | unknown | 没有全范围标准化种群趋势 |
| assessedYear | 不填 | 没有正式评估年份 |
| criteria | 不填 | NE 没有准则 |
| assessor | `IUCN Red List (not evaluated)` | 当前 `conservation('NE', 'unknown')` 辅助函数自动生成；检索日期与边界放在正文和 sources |

IUCN 搜索页在本轮自动访问时受 Cloudflare 限制，API 科学名端点要求授权；站点限定检索也没有找到 *Antalis vulgaris* 或 *Dentalium vulgare* 的评估页。SeaLifeBase 页面显示“IUCN 2025-2: Not Evaluated”，但它是二级数据库。由此可支持项目状态 `NE`，不能声称 IUCN 已发布一份正式 NE 评估，更不能把 NE 解释成种群稳定或风险低。[S19][S20]

### 已知边界与潜在压力

WoRMS 性状服务把本种列为 AMBI Group I，并显示“very sensitive to disturbance”；字段质量标为 unreviewed。AMBI 是软底底栖群落对有机富集和环境压力的生态质量指数，Group I 不能替代 IUCN，也不能单独证明底拖、疏浚、污染或缺氧已经造成 *A. vulgaris* 的全球下降。[S21][S22]

Queirós 等的欧洲海床生物扰动性状表把本种列为有限移动、可作向上/向下输送者。该表综合文献和专家判断，部分缺项用亲缘种补值，因此它可提示本种参与沉积物颗粒输送，却不能视为针对本种的直接通量实验。[S23]

没有找到物种级的全球丰度、成熟个体数、种群趋势、底拖效应量、污染阈值、海洋酸化实验、采集压力、法定保护或专项恢复计划。运行时威胁字段应写成“需评估的潜在压力和证据缺口”，避免确定性下降叙述。

推荐 `threats`：

~~~ts
threats: [
  '底拖、疏浚等海床扰动可能改变穴居所需的砂泥底质；尚无本种范围级效应量',
  '有机富集、缺氧与细颗粒沉积改变是软底监测中的潜在压力；AMBI Group I 不是物种威胁评估',
  '沿岸工程和底质转换可能使局地适生软底减少；尚未证明造成全球种群下降',
  '全球丰度与趋势未知，聚合记录又混有空壳、旧名和坐标误差，限制风险判断',
]
~~~

推荐 `conservationActions`：

~~~ts
conservationActions: [
  '在固定软底站位重复开展抓斗或柱状采样，分别记录活体、带软体壳与空壳',
  '同步记录深度、粒径、贝壳碎屑、有机负荷、溶氧及海床扰动强度',
  '保存壳端结构照片、测量数据和馆藏凭证，复核与 Antalis entalis 等近似种的鉴定',
  '把丰度与体尺变化和底拖、疏浚、养殖或污染暴露配对分析，再判断局地压力',
  '建立跨东大西洋与地中海的可比时间序列后，再评估种群趋势和保护优先级',
]
~~~

## 11. Species 字段完整草案

以下草案按 `src/types/species.ts` 和当前 `src/data/species.ts` 辅助函数编写。事实依据见前述相邻章节；六个图片文件已落盘，并与 `media` 路径一一对齐。`COMMON_TUSK_SHELL_SOURCES` 的完整建议值见第 14 节。

~~~ts
{
  id: 'species-antalis-vulgaris',
  slug: 'common-tusk-shell',
  names: {
    zh: '普通角贝',
    en: 'Common Tusk Shell',
    aliases: ['Common Tusk', 'Common Tuskshell', "Common Elephant's Tusk"],
  },
  scientificName: 'Antalis vulgaris',
  taxonomy: animalTaxonomy(
    taxon('Mollusca', '软体动物门'),
    taxon('Scaphopoda', '掘足纲'),
    taxon('Dentaliida', '角贝目'),
    taxon('Dentaliidae', '角贝科'),
    taxon('Antalis', '安塔角贝属'),
  ),
  conservation: conservation('NE', 'unknown'),
  distribution: {
    realms: ['marine'],
    continents: ['欧洲', '非洲', '亚洲'],
    regions: [
      '北海南部、英吉利海峡与爱尔兰西部海域',
      '英国南岸经比斯开湾至伊比利亚半岛的东北大西洋沿岸',
      '地中海东西部、爱琴海、达达尼尔海峡与马尔马拉海',
      '突尼斯与阿尔及利亚等北非地中海沿岸',
    ],
    countries: [
      '英国',
      '爱尔兰',
      '法国',
      '比利时',
      '荷兰',
      '西班牙',
      '土耳其',
      '突尼斯',
      '阿尔及利亚',
    ],
    range:
      '分布于东大西洋和地中海的欧洲、北非海域，见于北海、英吉利海峡、爱尔兰西部、伊比利亚沿岸及地中海东西部，并延伸至爱琴海、达达尼尔海峡和马尔马拉海。',
    center: { lat: 40, lng: 3 },
  },
  habitats: [
    {
      name: '东大西洋与地中海砂泥软底',
      realm: 'marine',
      isPrimary: true,
      description:
        '穴居于砂质、泥砂质海床，宽阔前端和足向下埋入沉积物，狭窄后端靠近表面维持水流交换；文献主范围约 5–1000 米。',
    },
    {
      name: '碎壳与石灰藻砾底',
      realm: 'marine',
      description:
        '也见于混有碎贝壳、石灰藻砾或其他粗颗粒的软底；Roscoff 资料来自局地低潮砂地及疏浚样品，不代表全范围均可潮间带发现。',
    },
    {
      name: '外陆架至上部大陆坡软底',
      realm: 'marine',
      description:
        '目录记录可达约 1000 米，另有资料汇总至 1100 米；这是已报道深度边界，不是普通个体的典型深度或主动下潜能力。',
    },
  ],
  measurements: {
    length: {
      max: 6,
      unit: 'cm',
      note: '最大报道壳长；瓦伦西亚资料中的标本/描述范围为 20–50 mm，不代表全球成体下限。',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: [
      '底栖有孔虫',
      '沉积物颗粒间的其他微生物与微型动物',
      '偶见极小双壳类；仅有历史胃含物观察',
    ],
    description:
      '用纤细、末端膨大的 captacula 在沉积物中选择微小食物，再由每横列五枚齿的齿舌处理；有孔虫是最稳定的食性证据，食谱尚无现代定量研究。',
  },
  activity: [
    '以长而尖、末端双叶的肌足锚定沉积物并向下掘穴',
    '足收回后伸展大量纤细 captacula，在壳周围选择有孔虫等微小食物',
    '让较窄后端靠近沉积物表面，维持呼吸、排泄与配子释放所需水流',
    '可在沉积物内有限重新定位；没有可靠的昼夜节律或移动距离资料',
  ],
  tags: [
    '海洋',
    '底栖',
    '穴居',
    '微型肉食者',
    '软体动物',
    '掘足纲',
    '东大西洋',
    '地中海',
    'captacula',
  ],
  summary:
    '东大西洋与地中海软底中的穴居掘足类，以两端开放的象牙状管壳、头下尾上的埋藏姿态和捕捉微型猎物的 captacula 为特征。',
  description:
    '普通角贝把一枚最长约 6 厘米的白色弯管壳斜埋进砂泥：宽阔前端朝下，长而双叶的足负责掘穴，足收回后，大量纤细 captacula 在沉积物颗粒间捕捉有孔虫等微小食物；狭窄后端则靠近海床表面维持水流交换。它见于东大西洋和地中海，目录主范围约 5–1000 米。雌雄异体，但本种的胚胎时序、寿命、成熟年龄、种群规模与全球趋势仍缺乏可靠资料。IUCN 未检出全球评估，项目状态为 NE，而非无危。',
  storySections: [
    {
      key: 'one-tube-two-openings',
      label: '管壳',
      title: '一枚壳，两端都开口',
      body:
        '普通角贝的外壳不是两片闭合的贝壳，也不盘成螺旋，而是一枚轻微弯曲的白色管。宽阔前口容纳头、足和 captacula，狭窄后口维持外套腔与海水相通。靠近后端的细密纵纹和偶见的中央短管有助于鉴定，但只凭图片不能排除近似种。',
    },
    {
      key: 'head-down-burrow',
      label: '掘穴',
      title: '宽端朝下，足先进入砂泥',
      body:
        '活体把宽阔前端埋入海床，长而尖、末端双叶的足伸出后扩大并锚定，再把壳体拉入沉积物。狭窄后端留在接近表面的位置。这个方向与手持象牙壳时容易产生的直觉相反，也是科学图最容易画错的姿态。',
    },
    {
      key: 'captacula-microprey',
      label: '触丝',
      title: '足收回后，captacula 才开始觅食',
      body:
        '掘穴结束后，足收回壳内，大量纤细、末端略膨大的 captacula 伸入壳周沉积物，选择有孔虫等微小食物并送向口部。历史胃含物还记录过极小双壳类，但没有现代定量食谱。足与 captacula 的交替主要来自掘足纲机制研究。',
    },
    {
      key: 'mantle-surface-respiration',
      label: '换水',
      title: '没有鳃，管状外套腔承担交换',
      body:
        '掘足类没有专门鳃，外套表面承担气体交换。较窄后端与上方海水相通，水流同时参与呼吸、排泄和配子释放。普通角贝也没有应被画出的眼和成对虹吸管；现有资料没有给出本种水流速度或耗氧率。',
    },
    {
      key: 'free-eggs-planktonic-young',
      label: '幼体',
      title: '本种配子可研究，完整时序仍是空白',
      body:
        '普通角贝雌雄异体，旧组合 Dentalium vulgare 的精卵与受精过程已有实验研究，Roscoff 还记录当地 7–8 月释放游离卵。担轮幼体、后续有壳幼体和沉降序列主要来自掘足纲通用研究，不能据此给本种指定固定天数、颜色或繁殖季。',
    },
    {
      key: 'unevaluated-soft-bottom',
      label: '监测',
      title: '未评估，不等于没有风险',
      body:
        'IUCN 尚未检出本种全球评估，丰度和趋势也没有跨范围时间序列。AMBI 名录把它放在对扰动敏感的第一组，但字段未经审核，不能单独证明某种压力已使种群下降。调查需要区分活体与空壳，并把丰度、底质、有机负荷和海床扰动一同记录。',
    },
  ],
  keyFacts: [
    '“普通角贝”沿用项目 TODO 名称，“安塔角贝属”是项目工作译名；拉丁学名与分类口径以 WoRMS 为准。',
    '接受名为 Antalis vulgaris (da Costa, 1778)，原始组合是 Dentale vulgare da Costa, 1778。',
    '壳是单枚轻弯管，宽窄两端均开放，不是双壳类的两片壳。',
    '活体宽阔前端朝下埋入砂泥，狭窄后端靠近沉积物表面。',
    '最大报道壳长约 60 毫米，最大前端宽度约 6 毫米。',
    '文献主深度范围约 5–1000 米，另有资料汇总至 1100 米。',
    '用肌足掘穴；足收回后，captacula 才伸入沉积物选择有孔虫等微小食物。',
    '宽椭圆齿舌每一横列五枚齿。',
    '没有专门鳃，主要由管状外套腔的外套表面完成气体交换。',
    '雌雄异体；完整幼体时序、成熟年龄、寿命与繁殖力均缺少物种级数据。',
    'IUCN 未检出全球评估，项目使用 NE，全球种群趋势未知。',
  ],
  threats: [
    '底拖、疏浚等海床扰动可能改变穴居所需的砂泥底质；尚无本种范围级效应量',
    '有机富集、缺氧与细颗粒沉积改变是软底监测中的潜在压力；AMBI Group I 不是物种威胁评估',
    '沿岸工程和底质转换可能使局地适生软底减少；尚未证明造成全球种群下降',
    '全球丰度与趋势未知，聚合记录又混有空壳、旧名和坐标误差，限制风险判断',
  ],
  conservationActions: [
    '在固定软底站位重复开展抓斗或柱状采样，分别记录活体、带软体壳与空壳',
    '同步记录深度、粒径、贝壳碎屑、有机负荷、溶氧及海床扰动强度',
    '保存壳端结构照片、测量数据和馆藏凭证，复核与 Antalis entalis 等近似种的鉴定',
    '把丰度与体尺变化和底拖、疏浚、养殖或污染暴露配对分析，再判断局地压力',
    '建立跨东大西洋与地中海的可比时间序列后，再评估种群趋势和保护优先级',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'shell-openings',
      label: '壳口数量',
      value: '2',
      unit: '端',
      note: '单枚管壳的宽窄两端均开放，不是两片贝壳。',
    },
    {
      key: 'maximum-shell-length',
      label: '最大报道壳长',
      value: '60',
      unit: '毫米',
      note: '最大值，不代表普通成体长度。',
    },
    {
      key: 'reported-depth',
      label: '文献主深度',
      value: '5–1000',
      unit: '米',
      note: '另有资料汇总至 1100 米；不是主动下潜深度或等频分布。',
    },
    {
      key: 'radular-teeth-per-row',
      label: '每横列齿数',
      value: '5',
      unit: '枚',
      note: 'Naturalis 物种说明中的齿舌结构。',
    },
  ],
  media: {
    image:
      './images/species/common-tusk-shell/01-in-situ-buried-adult-portrait.webp',
    alt: '碎壳细砂海床中一只深埋的普通角贝，只有棕橙色狭窄后端和少量相连白色管壳露出沉积物',
    focalPoint: { x: 0.7, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image:
          './images/species/common-tusk-shell/02-double-open-shell-macro.webp',
        alt: '砂粒上的普通角贝壳体近摄，一枚不透明白色轻弯管壳具有宽阔前口、狭窄后口和后端细纵纹',
        title: '两端开放的管状壳',
        caption:
          '形态重建突出单枚轻弯管壳、后端纵纹和两个壳口；AI 图不能确认纵纹数、壳长、顶端隔板或与近似种的鉴定。',
        focalPoint: { x: 0.52, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/common-tusk-shell/03-burrowing-foot-and-captacula.webp',
        alt: '砂层边缘的普通角贝前端重建中，宽阔壳口朝下，一枚尖细双叶肌足与周围多条末端膨大的纤细 captacula 分开可见',
        title: '前端足与 captacula 解剖重建',
        caption:
          '画面为了辨认结构而并置足与 captacula，不代表自然行为中两者同时充分伸展；也不能证明其数量、排列、掘穴速度或本种特有软体解剖。',
        focalPoint: { x: 0.52, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/common-tusk-shell/04-captacula-foraminifer-feeding-macro.webp',
        alt: '砂粒间数条透明毛发状 captacula 的棒状末端接触小型分室有孔虫壳体',
        title: 'captacula 搜索微型猎物',
        caption:
          '画面只显示伸展的 captacula，没有显示足；有孔虫是有依据的食物，但画面不能量化触丝数量、猎物选择率或摄食量。',
        focalPoint: { x: 0.56, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/common-tusk-shell/05-gillless-mantle-cavity-cutaway.webp',
        alt: '普通角贝轻弯双开口管壳的非血腥纵向开窗重建，内部为连续外套、简化身体和收回的前端足区，没有画出鳃或心脏',
        title: '外套表面的气体交换',
        caption:
          '剖视重建说明无专门鳃的掘足类换水机制；静态 AI 图不能证明水流方向、流速、氧耗或本种独有结构。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/common-tusk-shell/06-benthic-grab-survey.webp',
        alt: '调查船工作台上两只戴蓝手套的手在不锈钢托盘和筛网旁分拣湿润底栖抓斗样品，其中有一枚两端开放的轻弯角贝壳',
        title: '底栖抓斗样品分拣',
        caption:
          '单枚壳不能证明活体状态、物种身份、丰度或趋势；有效监测还需站位、深度、网目、重复样本和馆藏凭证。',
        focalPoint: { x: 0.54, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: COMMON_TUSK_SHELL_SOURCES,
  featured: true,
  publishedAt: COMMON_TUSK_SHELL_CONTENT_DATE,
  updatedAt: COMMON_TUSK_SHELL_CONTENT_DATE,
}
~~~

`metrics` 留空是有意选择。20–50 毫米来自地区性材料或描述，60 毫米是最大壳长，二者不能拼成全球成体区间；没有体重、寿命、速度、种群数量或适合标准化比较的其他值。5–1000 米是海床出现深度，不属于主动潜水深度。

## 12. 六幅 1536 × 1024 科学情景图

六图均为横向 3:2，不写文字、水印、箭头、尺寸线或伪造标签。所有剖面采用非血腥自然史重建。图 03 为前端器官并置的教学性重建，不冒充自然动作瞬间；图 04 才表现 captacula 接触潜在猎物。运行时图已按以下文件名落盘。

### 图 01：砂泥软底中的穴居成体封面

**实际帧。** `01-in-situ-buried-adult-portrait.webp`。有自然散射光的东大西洋或西地中海式碎壳细砂海床，一只普通角贝位于画面右侧并深埋，左侧留安静环境空间。只有棕橙色狭窄后端和少量相连白色管壳露出沉积物，宽阔前端完全在砂下。

**必须可见。** 单个相连壳体露出的狭窄后端；棕橙色顶端和少量不透明白色管壳；周围真实砂泥和碎壳尺度。深埋状态下无需强行露出整个壳或宽端。

**必须隐藏。** 眼、触角、分节足、鳃羽、成对虹吸管、章鱼式腕或吸盘。不要同时画出足和 captacula。

**事实限制。** 核心生境不是黑水深渊。画面不证明具体深度、地点、丰度、壳长或昼夜活动。[S08][S09][S11]

### 图 02：两端开放的壳体诊断近摄

**实际帧。** `02-double-open-shell-macro.webp`。壳体自然躺在一层干净湿润的细砂和少量碎壳上，侧上方近摄，宽阔前口与狭窄后口都能看见。采用自然史近摄光线，但不加标签或标尺。

**必须可见。** 单枚轻弯管壳；宽端近圆形开口；狭端斜截完整开口；壳体不透明白色，狭端可带淡玫瑰或棕色；后部细密纵纹向前消失；细生长线。

**可选结构。** 狭端内部可隐约出现隔板和短中央管，但不能把它画成第二根外挂虹吸管。

**禁止。** 两片铰合壳、螺旋、鹦鹉螺隔室、锥形封闭尖端、沙蚕管、珊瑚骨骼、象牙实心截面。纵纹不要求精确可数。[S08][S10]

### 图 03：足与 captacula 的前端解剖重建

**实际帧。** `03-burrowing-foot-and-captacula.webp`。砂层边缘的非血腥重建，壳体宽阔前端朝下。一枚长而尖、带两个小侧叶的肌足从前口伸出，周围另有多条彼此分离、末端呈小棒状的毛发般 captacula。

**必须可见。** 正确的“宽端向下、窄端向上”；单一尖细肌足及两个小侧叶；与足清楚分开的毛发状 captacula；沉积物剖面而不是机械钻孔。

**必须隐藏。** 眼、触角、节肢动物腿、吸盘、扇形蹼足、粗大卷曲触手或巨型挖掘爪。

**事实限制。** 这是一张为了同屏识别前端器官而做的掘足纲解剖重建，不是自然掘穴动作的定格。纲级资料显示足与 captacula 的充分伸展交替进行；画面不能证明两者自然同步、器官数量与排列、本种软体细节、掘穴速度、力量或固定壳体角度。[S11][S13][S14]

### 图 04：captacula 觅食剖面

**实际帧。** `04-captacula-foraminifer-feeding-macro.webp`。显微尺度的砂粒场景中，数条彼此分离、极细透明的 captacula 以小棒状黏性末端接触分室壳体外表，这些颗粒在形态上近似小型有孔虫壳。

**必须可见。** captacula 纤细、柔软、无吸盘；有孔虫状壳体小于周围较大砂粒；只表现外部接触，不画吞咽、搬运或消化。

**禁止。** 把 captacula 画成章鱼腕、水母触手、捕鲸触须或滤食网；不抓取鱼、虾和大型贝类；不显示精确触丝数量。

**事实限制。** 有孔虫有物种页与历史胃含物支持；触丝动作顺序主要是掘足纲通用证据。静态图不证明食物比例或捕获率。[S11][S13][S14][S15]

### 图 05：无鳃管状外套腔开窗重建

**实际帧。** `05-gillless-mantle-cavity-cutaway.webp`。保留一枚轻弯、两端开放管壳的完整外轮廓，只在侧面开一条整洁观察窗；内部显示连续、带血管质感的外套、简化长形身体，以及缩在宽阔前端内的头足区。

**必须可见。** 两个壳口、连续管状外套腔、外套表面、简化身体和收回的前端足区。

**必须隐藏。** 鳃、心脏图标、血管网络、双壳类成对虹吸管、鱼鳃、肺泡和可见血液。

**事实限制。** 真实动物没有侧面观察窗，该解剖也是掘足纲共同特征。画面不是解剖照片或组织切片，不应声称普通角贝具有已测器官尺寸、流向、流速或换气效率。[S10][S13][S14]

### 图 06：底栖抓斗样品分拣

**实际帧。** `06-benthic-grab-survey.webp`。调查船工作台上的不锈钢样品托盘、金属筛网、湿润碎壳沉积物和两只蓝色手套。一枚轻弯角贝壳保留宽、窄两个开口、后端纵纹和棕橙色窄端。

**必须可见。** 一枚目标壳、托盘、筛网、两只戴手套的手，以及可辨的湿沉积物样品；壳不能弯成紧钩，也不能出现封闭尖端。

**必须隐藏。** 品牌、船名、文字标签、站号、尺标、堆积的大量相同角贝壳、血液或刻意的“发现珍宝”姿势。

**事实限制。** 这是合理的底栖样品分拣场景，不是记录过的具体调查流程。单枚壳不能证明活体状态、物种身份、站位、深度、网目、采样日期、丰度或趋势；这些结论需要重复样本、软体记录和可复核凭证。[S23][S24][S25]

## 13. 图像与文案的共同科学禁区

- 不把壳画成双壳、螺旋壳、封闭象牙尖、分室头足类壳或多毛类管。
- 不颠倒埋藏方向：宽阔前端和足朝下，狭窄后端靠近海床表面。
- 不把足与 captacula 的并置解剖图解释为自然同步伸展；掘穴和觅食机制分属相邻动作阶段。
- 不给 captacula 加吸盘、分枝羽毛、刺胞或固定精确数量，也不让它们捕捉鱼虾等大型猎物。
- 不画眼、触角、鳃、心脏、肺、成对虹吸管、分节腿或脊椎骨架。
- 不把狭端隔板的中央短管画成外挂尾管或第二个个体。
- 不把 20–50 毫米写成全球成体范围；60 毫米只是最大报道壳长。
- 不把 5–1000 米写成普通深度、连续等频分布或 `maxDiveDepthM`；1100 米是另一文献的更深汇总边界。
- 不宣称夜行、固定掘穴速度、迁移距离、季节性活动或社会行为。
- 不给本种指定玉螺、鼠鱼或其他捕食者；现有捕食资料只到掘足纲层面。
- 不把 Roscoff 的 7–8 月产卵推广成全范围繁殖季。
- 不给文案中的幼体指定颜色、尺寸、日龄、壳形成时点或浮游持续时间；当前六图不表现幼体。
- 不把 AMBI Group I 当成 IUCN 等级、全球威胁结论或已证实的底拖效应。
- 不把 IUCN NE 写成“无危”“安全”或“种群稳定”。

## 14. 运行时来源字段建议

运行时保留能覆盖分类、形态分布、觅食机制、繁殖实验和保护状态边界的高信息量来源。`accessedAt` 均为本轮核查日期。

~~~ts
const COMMON_TUSK_SHELL_SOURCE_DATE = '2026-09-01' as const;
const COMMON_TUSK_SHELL_CONTENT_DATE = '2026-09-01' as const;

const COMMON_TUSK_SHELL_SOURCES = [
  {
    title: 'MolluscaBase / WoRMS: Antalis vulgaris (AphiaID 196380)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=196380',
    kind: 'taxonomy',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Steiner & Kabat 2004: Catalogue of species-group names of Scaphopoda',
    url: 'https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/z2004n4a1.pdf',
    kind: 'distribution',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Steiner 1997: Scaphopoda from the Spanish coasts',
    url: 'https://zenodo.org/records/4645623/files/15_1_7_Steiner.pdf',
    kind: 'distribution',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Martínez-Ortí & Cádiz 2012: Living scaphopods from the Valencian coast',
    url: 'https://doi.org/10.32800/abc.2012.35.0071',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Naturalis: Macrobenthos of the North Sea, Antalis vulgaris',
    url: 'https://ns-mollusca.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=183&id=121491',
    kind: 'general',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'DORIS: Antalis vulgaris, Dentale commun',
    url: 'https://doris.ffessm.fr/Especes/Antalis-vulgaris-Dentale-commun-375',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Reynolds 2002: The Scaphopoda',
    url: 'https://doi.org/10.1016/S0065-2881(02)42014-7',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Lamprell & Healy 1998: Revision of the Scaphopoda from Australian waters',
    url: 'https://journals.australian.museum/media/Uploads/Journals/17853/1267_complete.pdf',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Dufresne-Dubé et al. 1983: Ultrastructural analysis of Dentalium vulgare gametes',
    url: 'https://doi.org/10.1016/S0022-5320(83)90132-6',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'Moreau et al. 1989: Polyspermy block in Dentalium vulgare',
    url: 'https://doi.org/10.1002/jez.1402490114',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Antalis vulgaris biological and ecological attributes',
    url: 'https://www.marinespecies.org/rest/AphiaAttributesByAphiaID/196380?include_inherited=true',
    kind: 'ecology',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Antalis vulgaris',
    url: 'https://www.iucnredlist.org/search?query=Antalis%20vulgaris&searchType=species',
    kind: 'conservation',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
  {
    title: 'SeaLifeBase: Antalis vulgaris',
    url: 'https://www.sealifebase.ca/summary/Antalis-vulgaris.html',
    kind: 'conservation',
    accessedAt: COMMON_TUSK_SHELL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
~~~

## 15. 完整来源清单

### 分类、名称与中文分类单元

- **[S01]** MolluscaBase eds. (2026). *Antalis vulgaris* (da Costa, 1778), AphiaID 196380. [WoRMS 接受记录](https://www.marinespecies.org/rest/AphiaRecordByAphiaID/196380)，[网页记录](https://www.marinespecies.org/aphia.php?p=taxdetails&id=196380)，访问于 2026-09-01。
- **[S02]** WoRMS. Aphia classification for AphiaID 196380. [完整分类链](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/196380)，访问于 2026-09-01。
- **[S03]** WoRMS. Synonyms for AphiaID 196380. [异名表](https://www.marinespecies.org/rest/AphiaSynonymsByAphiaID/196380)，访问于 2026-09-01。
- **[S04]** WoRMS. Vernacular names for AphiaID 196380. [俗名表](https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/196380)，访问于 2026-09-01。
- **[S05]** da Costa, E. M. (1778). *Historia naturalis testaceorum Britanniae*, p.24, pl. II fig. 10, *Dentale vulgare*. [Biodiversity Heritage Library 原始页](https://www.biodiversitylibrary.org/page/13116783)，访问于 2026-09-01。
- **[S06]** 刘明洁、王雨橦、杨星语等（2026）。海南省海洋贝类物种多样性与系统分类学研究进展。《海南大学学报（自然科学版中英文）》44(2): 121–148。[DOI 页面](https://hndk.hainanu.edu.cn/article/doi/10.65658/j.hndk.2025042401)，[PDF](https://hndk.hainanu.edu.cn/cn/article/pdf/preview/10.65658/j.hndk.2025042401.pdf)，访问于 2026-09-01。用于 Scaphopoda“掘足纲”、Dentaliida“角贝目”、Dentaliidae“角贝科”的中文分类单元复核；未据此确认“普通角贝”或 *Antalis* 的标准中文名。

### 分布、形态与生境

- **[S07]** Steiner, G. & Kabat, A. R. (2004). Catalogue of species-group names of Recent and fossil Scaphopoda (Mollusca). *Zoosystema*, 26(4), 549–726；本种见印刷页 661。[MNHN 官方文章页](https://sciencepress.mnhn.fr/en/periodiques/zoosystema/26/4/catalogue-des-noms-du-groupe-espece-de-scaphopodes-mollusca-recents-et-fossiles)，[官方 PDF](https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/z2004n4a1.pdf)，访问于 2026-09-01。
- **[S08]** Steiner, G. (1997). Scaphopoda from the Spanish coasts. *Iberus*, 15(1). [Zenodo PDF](https://zenodo.org/records/4645623/files/15_1_7_Steiner.pdf)，访问于 2026-09-01。用于模式地区、形态、比斯开湾与巴利阿里材料及 5–1100 米汇总范围。
- **[S09]** Martínez-Ortí, A. & Cádiz, F. J. (2012). Living scaphopods from the Valencian coast (E Spain) and description of *Antalis caprottii* n. sp. (Dentaliidae). *Animal Biodiversity and Conservation*, 35(1). [文章页](https://museucienciesjournals.cat/es/abc/issue/35-1-2012-abc/living-scaphopods-from-the-valencian-coast-e-spain-and-description-of-antalis-caprottii-n-sp-dentaliidae)，[DOI](https://doi.org/10.32800/abc.2012.35.0071)，访问于 2026-09-01。
- **[S10]** Naturalis Biodiversity Center. *Macrobenthos of the North Sea: Antalis vulgaris*. [物种页](https://ns-mollusca.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=183&id=121491)，[形态说明](https://ns-mollusca.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&id=121491)，访问于 2026-09-01。
- **[S11]** DORIS / FFESSM. *Antalis vulgaris*, Dentale commun. [物种页](https://doris.ffessm.fr/Especes/Antalis-vulgaris-Dentale-commun-375)，访问于 2026-09-01。用于本种埋藏方向、掘穴、captacula 觅食和法国区域记录；繁殖与幼体句需与纲级资料一起限定。
- **[S12]** Station Biologique de Roscoff. *Les Mollusques de la région de Roscoff*，本种见 PDF p.48。[地区名录 PDF](https://www.sb-roscoff.fr/system/files/2026-02/Mollusques.pdf)，访问于 2026-09-01。用于当地低潮砂底、石灰藻砾/碎壳样品、7–8 月游离卵和空壳被 *Phascolion strombi* 利用；均不外推为全范围规律。

### 取食、活动、繁殖与发育

- **[S13]** Reynolds, P. D. (2002). The Scaphopoda. *Advances in Marine Biology*, 42, 137–236. [DOI](https://doi.org/10.1016/S0065-2881(02)42014-7)，访问于 2026-09-01。掘足纲综合综述；主要用于纲级解剖、微型肉食、captacula、幼体和捕食者边界。
- **[S14]** Lamprell, K. L. & Healy, J. M. (1998). A revision of the Scaphopoda from Australian waters. *Records of the Australian Museum*, Supplement 24. [Australian Museum PDF](https://journals.australian.museum/media/Uploads/Journals/17853/1267_complete.pdf)，访问于 2026-09-01。用于掘足纲掘穴与觅食动作顺序；不是 *A. vulgaris* 行为实验。
- **[S15]** Palmer, C. P. (1975). A new Jurassic scaphopod from the Oxford Clay of Buckinghamshire. *Palaeontology*, 18(2), 377–383. [Palaeontological Association PDF](https://palass.org/sites/default/files/media/publications/palaeontology/volume_18/vol18_part2_pp377-383.pdf)，访问于 2026-09-01。文中转述 Clark 1849 对 *Antalis vulgare* 胃含物的历史观察；不作为定量食性研究。
- **[S16]** Dufresne-Dubé, L., Picheral, B. & Guerrier, P. (1983). An ultrastructural analysis of *Dentalium vulgare* (Mollusca, Scaphopoda) gametes with special reference to early events at fertilization. *Journal of Ultrastructure Research*, 83(3), 242–257. [PubMed](https://pubmed.ncbi.nlm.nih.gov/6876249/)，[DOI](https://doi.org/10.1016/S0022-5320(83)90132-6)，访问于 2026-09-01。
- **[S17]** Moreau, M., Guerrier, P. & Dufresne, L. (1989). Absence of an electrical block to polyspermy in the scaphopod mollusk *Dentalium vulgare*. *Journal of Experimental Zoology*, 249(1), 76–84. [DOI](https://doi.org/10.1002/jez.1402490114)，访问于 2026-09-01。
- **[S18]** Wanninger, A. & Haszprunar, G. (2002). Muscle development in *Antalis entalis* (Mollusca, Scaphopoda) and its significance for scaphopod relationships. *Journal of Morphology*, 254(1), 53–64. [PubMed](https://pubmed.ncbi.nlm.nih.gov/12219343/)，[DOI](https://doi.org/10.1002/jmor.10004)，访问于 2026-09-01。用于掘足类幼体发育与 captacula 变态后出现的比较边界；研究对象不是 *A. vulgaris*。

### IUCN、生态性状与出现记录

- **[S19]** IUCN Red List. [接受名精确检索](https://www.iucnredlist.org/search?query=Antalis%20vulgaris&searchType=species)，[科学名 API 端点](https://api.iucnredlist.org/api/v4/taxa/scientific_name?genus_name=Antalis&species_name=vulgaris)，检索于 2026-09-01。网页受 Cloudflare 限制、API 需要授权，且站点限定检索未发现评估页；这是检索证据边界，不是一份正式 NE 评估。
- **[S20]** SeaLifeBase. *Antalis vulgaris*. [物种摘要](https://www.sealifebase.ca/summary/Antalis-vulgaris.html)，访问于 2026-09-01。页面显示 IUCN 2025-2 Not Evaluated；繁殖段明确为“Members of the class”，只作掘足纲通用旁证。
- **[S21]** WoRMS. Biological and ecological attributes for AphiaID 196380. [REST attributes](https://www.marinespecies.org/rest/AphiaAttributesByAphiaID/196380?include_inherited=true)，访问于 2026-09-01。60 毫米最大长度和 AMBI Group I 字段均标为 unreviewed，应与独立资料交叉使用。
- **[S22]** Borja, A., Franco, J. & Pérez, V. (2000). A marine biotic index to establish the ecological quality of soft-bottom benthos within European estuarine and coastal environments. *Marine Pollution Bulletin*, 40(12), 1100–1114. [DOI](https://doi.org/10.1016/S0025-326X(00)00061-8)，[AZTI AMBI 下载页](https://ambi.azti.es/download/)，访问于 2026-09-01。用于解释 AMBI 指数语义，不证明本种特定威胁。
- **[S23]** Queirós, A. M. et al. (2013). A bioturbation classification of European marine infaunal invertebrates. *Ecology and Evolution*, 3(11), 3958–3985. [开放全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC3810888/)，[DOI](https://doi.org/10.1002/ece3.769)，访问于 2026-09-01。性状表含 *A. vulgaris*，但方法允许专家判断和亲缘种补值。
- **[S24]** GBIF and WoRMS. Structured distributions and aggregated country records for *A. vulgaris*. [GBIF 分布 API](https://api.gbif.org/v1/species/2284973/distributions?limit=300)，[GBIF 国家分面](https://api.gbif.org/v1/occurrence/search?taxon_key=2284973&limit=0&facet=country&facetLimit=200)，[WoRMS 分布 API](https://www.marinespecies.org/rest/AphiaDistributionsByAphiaID/196380)，访问于 2026-09-01。用于区域交叉核对；不把所有聚合国家直接写入运行时。
- **[S25]** National Biodiversity Data Centre Ireland / Marine Institute. *Antalis vulgaris*, Water Framework Directive Benthic Invertebrate Fauna Data. [物种记录页](https://maps.biodiversityireland.ie/Dataset/440/Species/121075)，访问于 2026-09-01。用于爱尔兰官方监测记录。
- **[S26]** Bloklander, A. E. M. H. (1953). *Dentalium vulgare* langs de Nederlandse kust. [Natuurtijdschriften 文章记录](https://natuurtijdschriften.nl/pub/596323)，访问于 2026-09-01。用于荷兰海岸历史出现与 *A. entalis* 区分；年代较早。
- **[S27]** Dilmi, S., Bachetarzi, R. & Rebzani-Zahaf, C. (2024). Macrobenthic fauna and the ecological status of a shellfish farm in the Mediterranean Sea (Algeria). *Mediterranean Marine Science*, 25(1), 116–135. [DOI](https://doi.org/10.12681/mms.34675)，[VLIZ 收录 PDF](https://www.vliz.be/imisdocs/publications/400388.pdf)，访问于 2026-09-01。用于阿尔及利亚区域记录及当地功能摄食分类，不外推为全种生态定量结论。
- **[S28]** OBIS. *Antalis vulgaris*, AphiaID 196380. [分类页](https://obis.org/taxon/196380)，[出现记录 API](https://api.obis.org/v3/occurrence?scientificname=Antalis%20vulgaris&size=1000)，访问于 2026-09-01。聚合记录仅用于发现和范围复核，深度与国家离群点需凭证审查。

## 16. 整合、测试与 TODO 计数

### 整合检查清单

- 接受名正文写全 *Antalis vulgaris* (da Costa, 1778)，`scientificName` 保持纯二名法。
- 中文主名“普通角贝”标明为项目采用名；`Antalis` 中文属名标明为工作译名。
- 六级分类只用 WoRMS 当前链：Animalia、Mollusca、Scaphopoda、Dentaliida、Dentaliidae、*Antalis*。
- `conservation` 用 `NE / unknown`，不填 `assessedYear`、`criteria`，不写“无危”。
- `measurements.length.max` 为 6 cm；`metrics` 保持空对象。
- 深度只写进生境、正文和 `featuredStats`，不写入 `maxDiveDepthM`。
- `featuredStats` 恰为 4 项；`storySections` 恰为 6 节；媒体为 1 张封面加 5 张 gallery。
- 媒体路径与 `public/images/species/common-tusk-shell/` 的六个现有 WebP 一一对应。
- 图 03 明确标为器官并置的解剖重建，不把足与 captacula 同屏写成自然同步动作；图 04 只表现接触，不宣称摄食成功；图 06 不用单个壳推断活体、丰度或趋势。
- 运行时 sources 至少保留 WoRMS、两份范围/形态论文、Naturalis、DORIS、Reynolds、两份受精论文和 IUCN/SeaLifeBase 状态边界。

### 建议自动化验证

1. 在现有 `tests/taxonomy.test.mjs` 增加完整档案测试，断言 `species-antalis-vulgaris` 与 `common-tusk-shell` 唯一，学名为 `Antalis vulgaris`。
2. 在同一测试中断言六级分类依次为 Animalia、Mollusca、Scaphopoda、Dentaliida、Dentaliidae、Antalis，并确保分类图谱只新增对应分类单元。
3. 断言 `conservation.code === 'NE'`、`trend === 'unknown'`，且没有 `assessedYear` 和 `criteria`。
4. 断言 `metrics` 为空，不含 `adultLengthCm`、`lifespanYears` 或 `maxDiveDepthM`。
5. 断言 4 个 `featuredStats` 的 key 唯一，6 个 `storySections` 的 key 唯一。
6. 复用 `tests/taxonomy.test.mjs` 的 `assertGeneratedImageSet`，传入 `01-in-situ-buried-adult-portrait`、`02-double-open-shell-macro`、`03-burrowing-foot-and-captacula`、`04-captacula-foraminifer-feeding-macro`、`05-gillless-mantle-cavity-cutaway`、`06-benthic-grab-survey`，并启用已接受哈希检查；断言 1 张封面、5 张 gallery、路径、1536 × 1024、sRGB、单帧和不透明性。
7. 断言每个运行时 source 使用 HTTPS、kind 合法、`accessedAt` 为 `2026-09-01`。
8. 运行 `npm test`、类型检查和构建，并做六张静态图片的尺寸、格式、透明度和文件大小检查；遵守仓库约定，不启动 GUI 或无头浏览器。

### TODO 与覆盖计数

当前 `docs/todo.md` 记录 105 个物种档案、63 个未完成 TODO。普通角贝完成并删除这一项后：

- 物种档案：105 → **106**；
- 未完成 TODO：63 → **62**；
- 软体动物门：5 → **6**；
- 软体动物门纲级括注：`头足纲 2 / 腹足纲 1 / 双壳纲 1 / 多板纲 1 / 掘足纲 1`；
- 新增分类单元：Scaphopoda、Dentaliida、Dentaliidae、*Antalis* 各 1 个物种档案；
- `Animalia` 和 `Mollusca` 复用已有分类单元，不创建同名重复节点。

计数更新应与实际写入 `src/data/species.ts` 和图片资源同步完成。仅有本研究稿时，不提前勾选 TODO，也不改 105 的基线数字。
