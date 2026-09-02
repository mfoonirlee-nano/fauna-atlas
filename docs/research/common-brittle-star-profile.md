# 脆刺蛇尾（Ophiothrix fragilis）物种档案研究

> 研究截止：2026-09-01
> 用途：Fauna Atlas 物种页、结构化字段与六幅 1536 × 1024 科学情景图
> 证据口径：分类采用 World Ophiuroidea Database / WoRMS 当前接受名；形态与英国、爱尔兰生境以经过专家审核的 MarLIN 和 Naturalis 识别资料为骨架；生态、繁殖和胚胎发育优先使用原始论文。欧洲和南非材料存在尚未完成正式命名的深分化谱系，旧广义种资料需保留地点、实验条件与鉴定年代。

## 1. 结论摘要

World Ophiuroidea Database / WoRMS 接受 ***Ophiothrix fragilis* (Abildgaard in O.F. Müller, 1789)**，AphiaID 125131。当前六级分类为动物界、棘皮动物门、蛇尾纲、Amphilepidida、Ophiotrichidae、*Ophiothrix*。旧数据库和旧论文常把目写成 Ophiurida，项目应跟随 WoRMS 使用 Amphilepidida。[S01][S02]

项目中文主名沿用任务清单中的“脆刺蛇尾”。WoRMS 只收录英语 **common brittlestar**，没有中文俗名，因此页面不能把“脆刺蛇尾”标成 WoRMS 官方中文名。英文主名建议写 Common Brittlestar，Common Brittle Star 可作拼写别名。[S04]

典型个体有一个界线清楚的五角中央盘和五条细长、不分枝、带棘的腕。识别资料给出的中央盘最大直径约 20 毫米，腕长约为盘径五倍；背盘具短棘或较长棘，成对的辐楯显眼，每个腕节常有七枚直立、带锯齿的侧棘。体色可从深紫、红、橙、黄到近白，并可出现斑点或腕部横带。[S06][S07]

它主要生活在东北大西洋、北海、英吉利海峡和地中海的底层环境。潮间带个体藏在石下和裂隙，潮下带个体常在潮流冲刷的岩面、卵石、砾石及粗混合沉积上形成高密度蛇尾床。英国、爱尔兰资料记录 0 至 85 米；带分子鉴定的欧洲样本来自潮间带、8 至 10 米及 30 至 139 米，因此页面可写“潮间带至至少 139 米”，不能把 139 米写成物种最大深度。[S06][S11]

脆刺蛇尾以悬浮摄食为主。个体用部分腕支撑或嵌入群体，把两三条腕抬入水流；腕部管足和棘截留浮游植物、再悬浮有机质及碎屑，管足把颗粒聚成食团并沿腕送到腹面口部。实验和现场资料也记录腐肉摄食，因此结构化食性宜写 `filter-feeder` 加 `omnivore`，不能写成专食浮游植物。[S14][S15][S16][S17]

蛇尾的主要行走器官是腕。腕内关节状骨片和肌肉产生划拨或反向划拨动作；小管足参与摄食、感觉和附着，却不承担成体的主要地面推进。海星则让大量管足循环伸展、附着和回收来步行。这个对照来自蛇尾纲和海星纲的运动研究，不是专门对 *O. fragilis* 做的物种级比较实验。[S28][S29][S30]

荷兰 Oosterschelde 种群呈一年一个生殖周期，冬季休止，随水温升高进入配子生长与成熟，夏季产卵。雌雄把配子释放到水中并体外受精，胚胎形成摄食型 ophiopluteus 浮游幼体。实验室培养在较优条件下约 21 天形成悬浮稚体，第 22 天形成带钩棘的底栖稚体；成体可诱导稚体释放最后保留的后外侧幼腕并停留在蛇尾床中，这属于定居线索，不是亲代育幼。[S22][S23][S26]

IUCN Red List 截至研究日没有本种全球评估，EUNIS 也明确标为尚未评估。结构化状态应写 NE、趋势 unknown，`assessedYear` 与 `criteria` 留空。NE 只表示 IUCN 没有完成评估，不能据局地高密度推成 LC，也不能据一项幼体酸化实验推成受威胁等级。[S05][S31]

## 2. 证据质量与使用边界

### 当前可直接采用

- WoRMS 当前记录支持接受名、命名人、AphiaID、六级分类和英文俗名。[S01][S02][S04]
- MarLIN 与 Naturalis 支持东北大西洋常见型的宏观辨识、生境和英国、爱尔兰记录；两者属于有编辑或专家审核的区域综合资料。[S06][S07]
- 同行评审原始论文支持滤食机制、密度、聚集、繁殖、浮游发育、再生、酸化实验和监测方法。[S14] 至 [S27][S31][S33]

### 必须附带限制

1. **分类复合群。** 线粒体资料在传统 *O. fragilis* / *O. quinquemaculata* 形态范围内发现多个深分化谱系。2013 年研究识别两个种级谱系，2016 年研究又描述一个深水未命名谱系。WoRMS 仍接受 *O. fragilis* 与 *O. quinquemaculata* 两个名称，但没有给 Ophiothrix sp. II 或 sp. III 正式学名。[S09][S10][S11]
2. **南非记录。** WoRMS 分布接口和传统形态文献收录南非；2022 年条形码研究却发现南非“*O. fragilis*”与欧洲、地中海序列之间的 COI 距离可达 23.85%。项目应把南非标成历史广义种记录或待整合分类复核区，结构化核心范围不宜直接延伸到好望角。[S08][S12]
3. **经典论文年代。** 多数行为和生活史论文早于分子谱系拆分。英吉利海峡、北海及瑞典材料与后续 *O. fragilis* 核心样本区重合，但旧论文往往没有 DNA 凭证。数值只能保留原地点和条件。[S09][S11]
4. **区域深度。** MarLIN 的 0 至 85 米是英国、爱尔兰资料字段，Naturalis 的浅水至 350 米是区域识别综合。分子研究直接验证到 139 米，但没有定义全球深度极限。[S06][S07][S11]
5. **保护等级。** EUNIS 和 IUCN 检索只能支持“尚无评估”，不能替代一次完整红色名录评估，也不能给出全球趋势或成熟个体数。[S05]
6. **酸化效应。** 2008 年实验使用瑞典亲体的三个独立批次，并在受控培养中观察幼体；它没有测试野外补充、成体、跨代驯化或遗传适应。实验死亡率不能直接换算成未来灭绝概率。[S31][S32]
7. **运动对照。** 蛇尾划腕与海星管足步行来自纲级研究，实验动物不包括 *O. fragilis*。页面可以比较运动系统，不能给本种虚构步频、速度或固定腕序。[S28][S29][S30]

## 3. 命名与六级分类

### 推荐展示名

| 字段 | 推荐值 | 依据与边界 |
|---|---|---|
| 中文主名 | 脆刺蛇尾 | 项目任务名；当前权威分类接口没有中文名，不标成 WoRMS 官方译名[S04] |
| 英文主名 | Common Brittlestar | WoRMS 英文俗名，数据库采用连写 brittlestar[S04] |
| 英文别名 | Common Brittle Star | 英语资料常见分写形式；不建议把 South African “Hairy Brittlestar”加入核心别名，以免掩盖南非谱系问题[S06][S12] |
| 接受学名 | *Ophiothrix fragilis* (Abildgaard in O.F. Müller, 1789) | WoRMS 当前接受名；作者置于圆括号内[S01] |
| 原始组合 | *Asterias fragilis* Abildgaard in O.F. Müller, 1789 | WoRMS 列出的原始组合；只用于命名史[S01][S03] |
| WoRMS AphiaID | 125131 | 稳定外部标识[S01] |
| NCBI Taxonomy ID | 70180 | 可供序列交叉检索；NCBI 自身提醒其分类库不承担权威命名角色[S13] |
| 页面 id / slug | `species-ophiothrix-fragilis` / `common-brittle-star` | 项目实现建议，不属于动物学事实 |

原始名称把它放入 *Asterias*，因此当前学名的作者信息使用圆括号。这个历史组合不代表现代分类仍把它归入海星纲；WoRMS 当前把它放在蛇尾纲。[S01][S02][S03]

### 六级分类

| 分类阶元 | 拉丁名 | 推荐中文 | 依据 |
|---|---|---|---|
| 界 | Animalia | 动物界 | WoRMS[S02] |
| 门 | Echinodermata | 棘皮动物门 | WoRMS[S02] |
| 纲 | Ophiuroidea | 蛇尾纲 | WoRMS[S02] |
| 目 | Amphilepidida | Amphilepidida 目 | WoRMS 当前链；本轮未找到稳定的权威中文译名，结构化中文暂保留拉丁名[S02] |
| 科 | Ophiotrichidae | 刺蛇尾科 | 拉丁分类单元来自 WoRMS；中文采用项目工作译名，应让拉丁名承担消歧[S02] |
| 属 | *Ophiothrix* | 刺蛇尾属 | 拉丁分类单元来自 WoRMS；中文采用项目工作译名，应让拉丁名承担消歧[S02] |

WoRMS 完整链还包含 Asterozoa、Myophiuroida、Metophiurida、Ophintegrida、Gnathophiurina 和 Ophiactoidea。项目 schema 只保存界、门、纲、目、科、属，不能把亚纲或总科挤进六级字段。[S02]

### 旧目名和异名

ITIS 仍显示旧目名 Ophiurida，WoRMS 当前接口显示 Amphilepidida。项目需要一个统一分类口径，因此 `taxonomy.order` 只写 Amphilepidida，正文可解释旧资料的 Ophiurida。[S02][S13]

WoRMS 把 *Asterias fragilis*、*Ophiothrix echinata*、*O. alopecurus*、*O. lusitanica*、*O. pentaphylla*、*O. rubra*、*O. triglochis* 及若干变种列入 *O. fragilis* 的不接受名或异名。页面别名字段面向用户俗名，不应塞入整串历史学名。[S03]

## 4. 隐存谱系与形态多态

### 数据库口径

截至 2026-09-01，WoRMS 分别接受 *Ophiothrix fragilis* 和 *Ophiothrix quinquemaculata*。项目主分类字段应按 WoRMS 保留 *O. fragilis*，不能把论文中的 Ophiothrix sp. II 或 sp. III 当成已正式发表并获 WoRMS 接受的新种名。[S01][S10]

### 分子研究口径

Muths 等在 25 个东北大西洋和西地中海种群中发现大尺度遗传斑块，并讨论了隐存种或杂交谱系的可能性。该研究没有据此完成正式命名修订。[S09]

Pérez-Portela 等用 221 个标本、13 个地点和两段线粒体基因识别出两个遗传差异显著的谱系。传统用于区分 *O. fragilis* 与 *O. quinquemaculata* 的形态不能对应这两个谱系；北部东北大西洋样本和一个地中海深水样本主要归入谱系 I，南部大西洋及地中海浅岩岸样本主要归入谱系 II，两者在伊比利亚北部和一个地中海深水点共存。[S10]

Taboada 与 Pérez-Portela 随后把典型形态的 *O. fragilis*、Ophiothrix sp. II 和一个新发现的深水 Ophiothrix sp. III 分开分析。研究中的 *O. fragilis* 样本来自瑞典 Kristineberg、法国 Roscoff、西班牙 Ferrol、Vigo、Blanes、Barcelona、Planassa 和 Port de la Selva，采样深度从潮间带至 139 米；sp. III 主要来自 100 至 310 米深水。深水地点不能自动归入 *O. fragilis*。[S11]

南非条形码研究把当地形态鉴定为 *O. fragilis* 的标本与数据库中的欧洲和地中海序列分开，并得到最高 23.85% 的 COI 距离。条形码分群属于候选种证据，正式改名仍需整合形态、模式材料、核基因与命名规则。[S12]

### 产品证据标签

| 标签 | 适用材料 | 页面用途 |
|---|---|---|
| 核心物种证据 | 东北大西洋、北海、英吉利海峡中与后续分子 *O. fragilis* 范围相符的材料 | 可支持主体形态、生境、滤食与北方生活史；数字仍保留地点[S09][S11] |
| 广义历史证据 | 旧论文只写 *O. fragilis*，没有凭证或序列 | 可支持背景机制，避免制作全球统一数值[S09][S10] |
| 未命名谱系证据 | Ophiothrix sp. II、sp. III | 只用于解释分类边界，不能写入本种结构化字段[S10][S11] |
| 南非待复核证据 | 传统南非 *O. fragilis* 和条形码标本 | 可说明历史广义范围，地图与国家数组应附不确定性[S08][S12] |

## 5. IUCN 与法规状态

### IUCN Red List

IUCN Red List 物种检索截至 2026-09-01 未返回 *Ophiothrix fragilis* 的全球评估页；欧洲环境署 EUNIS 页面也写明本种尚未接受 IUCN Red List 评估。[S05]

| 字段 | 推荐值 | 边界 |
|---|---|---|
| system | IUCN Red List | 项目统一体系[S05] |
| code | NE | 尚未评估，不是风险判断[S05] |
| label.zh | 未评估 | NE 对应展示文案[S05] |
| label.en | Not Evaluated | NE 对应展示文案[S05] |
| trend | unknown | 没有覆盖全范围、并解决隐存谱系的趋势估计[S05][S10][S12] |
| assessedYear | 省略 | 没有正式评估，也就没有评估日期[S05] |
| criteria | 省略 | NE 没有适用准则[S05] |
| assessor | `IUCN Red List（截至 2026-09-01 未检出全球评估）` | 明确记录检索状态[S05] |
| 全球成熟个体数 | 不填写 | 高密度斑块不能代表范围总量，分类边界也未解决[S10][S19] |

EUNIS 没有把本种列入其汇总的欧洲法律文本。这个页面只覆盖欧洲保护资料，不能证明所有国家、地区和海洋公约都没有任何涉及蛇尾床的栖息地保护规定。[S05]

## 6. 分布、国家与地图口径

### 证据保守的核心范围

MarLIN 将广义范围概括为东北大西洋北起挪威、南至南非，并记录英国和爱尔兰全部海岸。WoRMS 分布接口收录东北大西洋、北海、地中海、亚速尔、英国、爱尔兰、法国、比利时、荷兰、德国、瑞典、希腊和南非等条目，但接口把这些分布记录标为 `qualityStatus: unreviewed`。[S06][S08]

分子研究直接确认了瑞典、法国、西班牙、葡萄牙和希腊地点中的 *O. fragilis* 或与其并存的未命名谱系；亚速尔分类调查以形态凭证记录 *O. fragilis*，并详述其显著颜色和棘饰多态。[S10][S11][S34]

页面地图可把东北大西洋欧洲岸、北海、英吉利海峡、伊比利亚西岸、亚速尔和地中海作为历史接受范围。图注需说明部分南部和深水记录可能属于未命名谱系。南非可在正文中写“历史广义种记录”，暂不加入无注释的核心地图面。[S08][S10][S11][S12]

### 结构化地理建议

以下国家数组提供代表性筛选值，不宣称穷尽所有沿海国家。英国、爱尔兰、比利时、荷兰、德国和瑞典由 WoRMS / MarLIN 区域记录支持；法国、西班牙、葡萄牙、希腊和瑞典另有分子采样支持。[S06][S08][S10][S11]

~~~ts
distribution: {
  realms: ['marine'], // [S01]
  continents: ['欧洲'], // 核心、可复核范围；南非历史记录另写说明 [S08][S12]
  regions: [
    '东北大西洋欧洲陆架与亚速尔群岛', // [S08][S11][S34]
    '北海与英吉利海峡', // [S06][S14][S20]
    '伊比利亚大西洋岸与地中海', // [S10][S11]
  ],
  countries: [
    '挪威',
    '瑞典',
    '英国',
    '爱尔兰',
    '法国',
    '比利时',
    '荷兰',
    '德国',
    '西班牙',
    '葡萄牙',
    '希腊',
  ], // 代表性而非穷尽清单 [S06][S08][S10][S11]
  range:
    '核心可复核范围位于东北大西洋欧洲岸、北海、英吉利海峡、亚速尔及地中海。传统资料把同名动物向南记录到南非，但欧洲南部、深水和南非材料含未命名或深分化谱系，范围边缘需凭证与分子复核。', // [S08]-[S12]
  center: { lat: 50.8, lng: 1.3 }, // 地图初始视口取英吉利海峡，不代表种群中心
},
~~~

GBIF 与 OBIS 可用于发现记录和下载凭证，却会混合公民科学、历史名称、坐标错误及未经分子复核的南非与域外点。本档案不根据聚合点图扩充国家数组，也不拿最深单条记录定义物种深度。[S35][S36]

## 7. 生境与深度

### 主要生境

脆刺蛇尾是海洋表栖底生动物。英国、爱尔兰资料把它记录在低潮带至外海环陆架带的基岩、巨砾、卵石、砾石、泥质砾石和粗混合沉积上；潮间带个体多藏在石下和裂隙，潮下带高密度种群偏向潮流冲刷的岩面与粗底质。[S06]

蛇尾床可由 *O. fragilis* 主导，也可与 *Ophiocomina nigra* 混合。混合沉积上的床常覆盖砾、卵石、沙和少量泥，群体把大量腕伸入底层水流；一张远景图不能把每个可见腕归属到正确的中央盘，密度估计需要标准化影像或取样。[S19][S33]

Bay of Seine 长期研究在泥质粗砂和砾石上记录持续存在、位置会变化的高密度斑块。洪水、风暴、潮流和细颗粒沉积共同影响斑块位置；研究没有证明本种只生活在清洁裸砾石，也没有证明黑色缺氧泥是它的普遍偏好。[S20][S21]

~~~ts
habitats: [
  {
    name: '潮流冲刷的浅海岩礁与粗底质',
    realm: 'marine',
    isPrimary: true,
    description:
      '栖居于基岩、巨砾、卵石、砾石和粗混合沉积表面；潮下带可形成高密度蛇尾床，腕伸入底层水流进行悬浮摄食。', // [S06][S14][S19]
  },
  {
    name: '低潮带石下与裂隙',
    realm: 'marine',
    description:
      '潮间带个体多藏在石块、空壳和岩缝中，常以部分腕伸向开阔水流。', // [S06][S07]
  },
  {
    name: '陆架砾石与泥质粗砂蛇尾床',
    realm: 'marine',
    description:
      '英吉利海峡和塞纳湾的表栖斑块可占据砾石及泥质粗砂；斑块密度和位置受潮流、风暴、洪水与细颗粒供给影响。', // [S19]-[S21]
  },
],
~~~

### 深度处理

| 数值 | 证据对象 | 产品处理 |
|---:|---|---|
| 0 至 85 m | MarLIN 英国、爱尔兰记录字段 | 区域性范围，可写生境说明，不设全球极值[S06] |
| 浅水至 350 m | Naturalis 北海识别综合 | 来源未解释每条深记录的凭证和谱系，不进入 metrics[S07] |
| 潮间带、8 至 10 m、30 至 139 m | 2016 年分子研究中的 *O. fragilis* 样本 | 支持“潮间带至至少 139 m”；139 m 不是最大值[S11] |
| 100 至 310 m | 2016 年 Ophiothrix sp. III | 排除，属于未命名深水谱系[S11] |

`maxDiveDepthM` 留空。蛇尾不会“潜水”，而且现有研究没有给出解决谱系后的全球最大栖息深度。[S10][S11]

## 8. 形态、尺寸与辨识

### 成体形态

- 中央盘扁平、近五角形，与五条腕之间有清楚收窄；腕不会像海星的宽腕那样与盘体连续融合。[S06][S07]
- 五条腕细长、圆柱状、明显分节、逐渐收尖且不分枝；每节常见七枚直立、玻璃质感、带锯齿的侧棘。[S06][S07]
- 背盘覆盖短棘、长棘或两者组合，五对辐楯显眼。东北大西洋识别资料常把辐楯画成裸露，亚速尔材料却可在辐楯上带小棘；图像可表现一组清楚的辐楯，不能把“完全裸露”当全范围固定特征。[S07][S34]
- 背侧腕板裸露并带纵向隆脊；腹侧腕板近矩形，腕部管足孔旁有小触手鳞。远景图无需伪造显微板片，但微距图应维持左右对称的腕节和侧棘排列。[S07]
- 腹面中央有口和五组颚。颚端有齿乳突及纵列宽齿，口周可见两对口内管足；不能画成海星外翻胃、脊椎动物牙床或圆形吸盘口。[S07]

### 体色

体色高度多态。东北大西洋综合资料记录深紫、白、黄、橙和红，腕部常有横带；亚速尔凭证材料还记录浅褐、绿、灰绿、紫、粉和多色斑纹。产品可选紫红盘、浅灰腕配粉紫横带作为一个可信个体，不能把该配色写成物种固定色。[S07][S34]

### 尺寸与结构化边界

| 指标 | 可支持值 | 处理 |
|---|---:|---|
| 中央盘最大直径 | 20 mm | 适合 featured stat；不是总长[S06][S07] |
| 单腕长度 | 约盘径 5 倍 | 比例描述；个体腕常折断或再生，不换算固定总跨度[S06][S07][S27] |
| 2016 分子样本盘径 | 7 至 10.6 mm | 研究样本范围，不是成体范围[S11] |
| 每腕节侧棘 | 常见 7 枚 | 宏观识别特征，地理变异存在[S06][S07][S34] |

项目 `measurements.length` 不能区分盘径、单腕长和腕尖间跨度。建议让 `measurements` 与 `metrics` 为空，把 20 毫米盘径及五倍腕长放进带 note 的 `featuredStats`。若实现必须填写 `length`，只能写 20 毫米并在 note 中明确“中央盘最大直径，不能与其他动物全身长度比较”。[S06][S07]

~~~ts
measurements: {},
metrics: {},
featuredStats: [
  {
    key: 'disc-diameter',
    label: '中央盘最大直径',
    value: '约 20',
    unit: '毫米',
    note: '区域识别资料给出的最大盘径；不含腕，也不是普通个体平均值。', // [S06][S07]
  },
  {
    key: 'arm-ratio',
    label: '单腕长度',
    value: '约为盘径 5 倍',
    note: '识别比例；腕可折断和再生，不据此硬算固定总跨度。', // [S06][S07][S27]
  },
  {
    key: 'local-bed-density',
    label: '塞纳湾局地斑块',
    value: '最高约 7,500',
    unit: '只/平方米',
    note: '特定塞纳湾斑块与影像估算记录；不是全范围通常密度或全球上限。', // [S20][S21]
  },
  {
    key: 'lab-development',
    label: '悬浮稚体形成',
    value: '约 21',
    unit: '天',
    note: '北海亲体在实验室较优条件下的发育时间；野外受温度和食物影响。', // [S23]
  },
],
~~~

体重、全球成体长度区间、平均寿命、最快速度、最大栖息深度和全球成熟个体数没有安全的标准化值。MarLIN 汇总的寿命估计从 9 个月到超过 10 年，口径冲突明显，不能拼成 `lifespanYears: [0.75, 10]`。[S06]

## 9. 腕部运动与海星对照

### 蛇尾怎样移动

蛇尾腕内的成列骨片常称“腕椎”，相邻骨片由韧带和肌肉连接。肌肉控制腕节侧向弯曲，腕在底面产生划拨或反向划拨，把中央盘推向新的位置。小管足可以辅助接触和感觉，但成体主要推进来自腕和底面的力传递。[S28][S29]

五腕蛇尾常让一条腕指向行进方向，两侧腕成对划拨，其余腕随姿态调整。蛇尾没有固定的头端，改变方向时可重新分配各腕角色，无需先把整个中央盘转到新的“正前方”。不同蛇尾会使用不同划腕模式，页面只表现一个可信瞬间，不声称 *O. fragilis* 始终按固定的一二三腕序移动。[S28]

### 海星怎样移动

海星的腹侧步带沟排列大量管足。每只管足作为液压骨骼伸展、接触底面、附着、产生牵引并回收；许多管足的局部循环共同搬运身体。海星的腕可以改变姿态，却不靠五条腕像桨一样交替划地完成主要推进。[S29][S30]

| 对照点 | 脆刺蛇尾 / 蛇尾纲 | 海星纲 |
|---|---|---|
| 主要推进器 | 关节状腕骨片、肌肉和腕对底面的划拨[S28][S29] | 大量水管系统管足的伸展、附着和回收[S30] |
| 腕外形 | 细长、与中央盘界线清楚、可大幅侧弯[S06][S28] | 常为宽腕，体腔和器官延伸入腕；具体形态因种而异[S30] |
| 管足角色 | 本种以摄食、感觉和局部附着为主；不承担成体主要推进[S15][S28] | 主要行走器官，也可参与附着和取食[S30] |
| 转向 | 可更换领腕和划腕角色[S28] | 管足群改变牵引方向并协调身体转向[S30] |

图像若要表现运动，主体需保持一个清楚的五角盘，一条腕朝行进方向，两侧两腕接触底面并出现反向弯曲。画面不要添加海星式密集吸盘队列、宽肉质腕、履带运动或离底游泳。[S06][S28]

## 10. 食性与悬浮摄食机制

### 迎流姿态

Warner 与 Woodley 观察到，脆刺蛇尾用部分腕支撑中央盘，把其余腕伸入水流；悬浮颗粒黏附在腕棘和管足上，管足形成食团后把它沿腕传向口部。群体中的个体还能借相邻蛇尾提供支撑，从而让更多腕进入摄食姿态。[S15]

Davoult 与 Gounin 在 Dover Strait 的一处最高约 2,000 只/平方米种群中发现，底层流速低于 20 厘米/秒时悬浮摄食活动最适；大潮期流速上升会缩短抬腕时间，却增加再悬浮有机碳、氮和浮游植物通量。20 厘米/秒属于该地点的行为结果，不是全范围生理阈值。[S14]

Allen 的水槽实验显示，颗粒保留率受流速与粒径共同影响；大颗粒在高流速下的保留率最低，个别处理低至 59%。腕后方形成的复杂二次水流会改变颗粒轨迹，页面不能把腕棘画成固定孔径的机械筛网。[S16]

### 食物组成

胃内容与现场研究支持浮游植物、硅藻、悬浮有机质和底部再悬浮碎屑。1959 年水族箱观察还记录个体从死鱼和死头足类上撕取小块，证明它能机会性食腐；一次腐肉观察不能把本种写成主动猎杀鱼类的捕食者。[S14][S15][S17]

~~~ts
diet: {
  types: ['filter-feeder', 'omnivore'], // [S06][S14][S17]
  foods: [
    '浮游植物与硅藻', // [S14][S17]
    '悬浮和再悬浮有机碎屑', // [S14]-[S16]
    '小型浮游颗粒', // [S15][S16]
    '偶然遇到的腐肉', // [S17]
  ],
  description:
    '把两三条带棘的腕抬进底层水流，腕部管足和棘截留颗粒；管足将颗粒聚成食团并沿腕送到腹面口部。悬浮摄食为主，也会机会性摄取底栖碎屑和腐肉。', // [S14]-[S17]
},
~~~

`detritivore` 可不加入类型数组，因为 `filter-feeder` 加 `omnivore` 已覆盖主要方法与混合食物来源。正文仍需写清碎屑的重要性，避免把 `filter-feeder` 误读成鲸类式滤水器官。[S14][S15]

## 11. 活动、聚集与生态作用

### 聚集并非被水流随机堆起

Broom 在英格兰南部天然蛇尾床的水下实验中发现，个体会对同种个体作出聚集反应。离开群体的蛇尾会横穿水流搜索，接触同类后停止或加入群体；适宜底质与食物仍会参与决定斑块位置，不能把聚集解释成单一“社交行为”。[S18]

高密度群体有利于抵抗水流、抬腕摄食和在同类附近定居。Bay of Seine 研究显示斑块具有强空间异质性，多个高密度中心在 1986 至 2010 年间持续存在但会移动；洪水、风暴、潮流和沉积供应共同影响它们。[S18][S20][S21]

### 密度和生态过程

Dover Strait 研究记录约 2,000 只/平方米，2011 年 Bay of Seine 方法比较记录超过 5,000 只/平方米，后续长期与沉积研究记录局地约 7,450 至 7,500 只/平方米。取样工具会系统性低估表栖移动个体，数字之间不能直接拼成全球“典型 2,000 至 7,500”。[S14][S19][S20][S21]

这些蛇尾床把水柱中的浮游颗粒和再悬浮有机物转移到底层食物网，并通过排泄、粪粒和死亡组织参与营养循环。高密度群体还会改变近底水流和细颗粒滞留；Bay of Seine 研究发现，蛇尾丰度越高，细颗粒淤积越强，长期稳定期可形成表层缺氧沉积。[S14][S19][S21]

后一结果描述蛇尾与沉积环境的双向反馈。产品可以称它为“局地生态工程者”，却不能宣称每个蛇尾床都会制造缺氧，也不能把缺氧泥写成保育目标。[S21]

### 腕损伤与再生

Oosterschelde 现场研究的两个调查期分别有 49% 和 65% 个体处于腕再生状态，较大个体更常见再生腕，四条或五条腕同时再生的个体很少。再生对能量储存与生殖腺生长产生小但显著的成本。49% 和 65% 只属于该种群和调查期，不适合充当全物种固定受伤率。[S27]

~~~ts
activity: [
  '用柔韧腕在底面划拨爬行，成体不靠管足作为主要推进器官', // [S28][S29]
  '在适宜流速下抬起两三条腕进行悬浮摄食，强流时收下腕', // [S14][S15]
  '离开蛇尾床后会搜索并重新接触同种个体', // [S18]
  '潮间带个体常藏在石下和裂隙，潮下带可形成密集表栖斑块', // [S06][S20]
],
~~~

现有证据更适合写“潮流和食物控制摄食窗口”，不宜给全物种加严格 `nocturnal` 标签。区域潜水资料可能观察到避光或夜间外露，但 Dover Strait 的主要摄食节律直接跟随潮汐流速。[S14]

## 12. 繁殖、浮游幼体与定居

### 生殖周期与产卵

Oosterschelde 研究用生殖腺指数和成熟指数确认雌雄分开的年度周期。种群冬季休止，海水升温后生殖腺生长并成熟，夏季产卵后退化。超过 16°C 的水温、强水动力造成的机械刺激和同类配子释放可在当地成熟个体中诱发产卵；这些线索不是全范围固定温度开关。[S22]

英吉利海峡两个种群在 1995 至 1996 年都于 7 月出现主要同步产卵，但生殖腺生长幅度存在地点差异。Dover Strait 浮游网样在 1995 至 1996 年的 6 至 9 月捕到二腕至八腕 ophiopluteus，部分幼体可能从调查区以南随水体输入。[S24][S25]

页面可写“雌雄异体、广播产卵、外部受精”。不能写体内交配、卵囊、护卵或亲代辨认后代，也不能把荷兰和英吉利海峡的夏季月份推广到南部所有谱系。[S22][S24][S25]

### 实验室发育时间轴

Morgan 与 Jangoux 以北海种群记录了摄食型 ophiopluteus 的形态发育。以下时间来自较优培养条件，论文明确提醒野外环境可能更慢：[S23]

| 受精后时间 | 实验观察 | 图像边界 |
|---:|---|---|
| 约 12 小时 | 原肠胚，幼体骨针开始形成 | 不画五腕小蛇尾[S23] |
| 第 1 天 | 二腕、内源营养 pluteus | 两根长幼腕有骨杆支撑[S23] |
| 第 3 天 | 形成摄食型四腕和六腕阶段 | 保持两侧对称，不画辐射对称成体[S23] |
| 第 7 至 12 天 | 八腕摄食型 ophiopluteus，约第 12 天充分发育 | 八条幼腕来自四对，不是成体八腕[S23] |
| 第 16 天 | 五叶水腔形成并开始变态 | 成体五辐结构在幼体内部形成[S23] |
| 第 18 至 19 天 | 多数幼腕退化，形成成体口和管足 | 仍保留一对后外侧幼腕[S23] |
| 第 21 天 | 悬浮稚体具五条幼小成体腕，同时保留后外侧幼腕 | 不能画成底栖成体[S23] |
| 第 22 天 | 带钩棘的底栖稚体 | 钩棘用于附着同类和底质，不画哺乳动物钩爪[S23] |

### 成体提供定居线索，不承担育幼

诱导实验发现，变态可自行启动；成体同类的存在会诱导悬浮稚体释放最后一对后外侧幼腕。后续行为与形态研究发现，小稚体会附在成体盘和腕上，并利用末端触手感知同类相关线索；成体群体提供水流、附着和食物条件，却没有喂食自己后代或进行亲代辨认的证据。[S23][S26]

稚体聚附在成体上不代表胎生或育幼。浮游幼体可被水流带离亲本，定居到另一群体；图像 caption 应用“在成体蛇尾床定居”而不是“幼崽骑在母亲身上”。[S23][S25][S26]

## 13. 威胁、保护与监测

### 证据支持的压力

1. **底接触渔具和物理扰动。** MarESA 汇总指出，爱尔兰海历史数据中 *O. fragilis* 在扇贝拖捞区长期减少。拖具可压碎、移除个体，打散维持群体的接触网络并改变粗底质；不同底质、渔具和扰动频率会改变效应，不能把一次拖捞换算成统一死亡率。[S33][S37]
2. **底质丧失、覆盖和沉积变化。** 本种生活在底表，硬底或粗混合底质被移除会直接带走个体；厚层覆盖可阻断摄食和呼吸。它也能生活在含细颗粒的 Bay of Seine 并促进淤积，因此“任何泥沙增加都会致死”超出证据。[S20][S21][S33]
3. **水动力改变。** 悬浮摄食依赖近底水流。流速过高时个体收下摄食腕，流速过低时颗粒通量和再悬浮量会下降；港工和海床工程可能改变可用摄食窗口，影响方向和幅度需逐址评估。[S14][S16][S33]
4. **海洋酸化的幼体风险。** 瑞典亲体实验中，pH 从 8.1 降至 7.9 或 7.7 后，两个低 pH 处理的幼体在第 8 天全部死亡，pH 8.1 对照仍有 70% 存活；低 pH 还造成体型变化、左右不对称和骨骼发育异常。该结果支持把酸化列为早期生活史风险，不能直接宣布野外种群会消失。[S31][S32]
5. **分类误判造成的管理盲区。** 未命名谱系在地理和深度上重叠，南非记录与欧洲序列深分化。只计数“*O. fragilis*”而不保留凭证，可能把相反的谱系趋势合并成一个数字。[S10][S11][S12]

### 不应宣称的全球趋势

Bay of Seine 高密度斑块维持数十年，布列塔尼部分种群也曾衰退后恢复；这些区域时间序列不支持“全球稳定”或“全球下降”。IUCN 没有完成全球评估，物种边界又未完全解决，`trend` 应保持 unknown。[S05][S20][S38]

### 推荐行动

- 在已知蛇尾床建立固定影像样线，记录覆盖度、盘径结构、稚体、再生腕比例和床边界；影像需保留尺度和底质信息。[S19][S27]
- 使用潜水摄影、拖曳视频或 ROV 估算高密度表栖斑块。Lozach 等发现 0.25 平方米 Hamon 抓斗明显低估密度，测试抓斗中 Smith McIntyre 表现较好。[S19]
- 同步记录近底流速、粒径、细颗粒比例、温度、盐度、溶氧和 pH，避免把斑块移动误判成全种群增减。[S14][S20][S21][S31]
- 在扇贝拖捞、底拖、骨料开采和疏浚项目中绘制蛇尾床，设置对照区与扰动前后重复调查；保护措施需按底质和恢复证据调整。[S33][S37]
- 从北方、地中海深浅水和南非范围边缘保存整只凭证、高清背腹面照片与组织样本，联合 COI、16S、核基因和微形态复核谱系。[S10][S11][S12]
- 减少二氧化碳排放并持续开展多世代、自然波动 pH 条件下的幼体与成体研究；现有单代实验不足以设计人工增殖或迁地放流。[S31][S32]

没有证据支持捕捉野生个体进行家庭水族保种、向陌生海域移植蛇尾床或用捕食者控制局地群体。页面应聚焦栖息地压力、标准化监测和分类复核。[S05][S10][S33]

## 14. Species 字段建议

以下字段草案提炼前述证据。媒体路径、生成图署名和发布日期由整合步骤补齐。

~~~ts
{
  id: 'species-ophiothrix-fragilis',
  slug: 'common-brittle-star',
  names: {
    zh: '脆刺蛇尾',
    en: 'Common Brittlestar', // [S04]
    aliases: ['Common Brittle Star'],
  },
  scientificName: 'Ophiothrix fragilis', // [S01]
  taxonomy: {
    kingdom: taxon('Animalia', '动物界'),
    phylum: taxon('Echinodermata', '棘皮动物门'),
    class: taxon('Ophiuroidea', '蛇尾纲'),
    order: taxon('Amphilepidida', 'Amphilepidida目'),
    family: taxon('Ophiotrichidae', '刺蛇尾科'),
    genus: taxon('Ophiothrix', '刺蛇尾属'),
  }, // [S02]
  conservation: {
    system: 'IUCN Red List',
    code: 'NE',
    label: { zh: '未评估', en: 'Not Evaluated' },
    trend: 'unknown',
    assessor: 'IUCN Red List（截至 2026-09-01 未检出全球评估）',
  }, // [S05]
  distribution: {
    realms: ['marine'],
    continents: ['欧洲'],
    regions: [
      '东北大西洋欧洲陆架与亚速尔群岛',
      '北海与英吉利海峡',
      '伊比利亚大西洋岸与地中海',
    ],
    countries: [
      '挪威',
      '瑞典',
      '英国',
      '爱尔兰',
      '法国',
      '比利时',
      '荷兰',
      '德国',
      '西班牙',
      '葡萄牙',
      '希腊',
    ],
    range:
      '核心可复核范围位于东北大西洋欧洲岸、北海、英吉利海峡、亚速尔及地中海。传统资料把同名动物向南记录到南非，但欧洲南部、深水和南非材料含未命名或深分化谱系，范围边缘需凭证与分子复核。',
    center: { lat: 50.8, lng: 1.3 },
  }, // [S06][S08]-[S12][S34]
  habitats: [
    {
      name: '潮流冲刷的浅海岩礁与粗底质',
      realm: 'marine',
      isPrimary: true,
      description:
        '栖居于基岩、巨砾、卵石、砾石和粗混合沉积表面；潮下带可形成高密度蛇尾床，腕伸入底层水流进行悬浮摄食。',
    },
    {
      name: '低潮带石下与裂隙',
      realm: 'marine',
      description:
        '潮间带个体多藏在石块、空壳和岩缝中，常以部分腕伸向开阔水流。',
    },
    {
      name: '陆架砾石与泥质粗砂蛇尾床',
      realm: 'marine',
      description:
        '英吉利海峡和塞纳湾的表栖斑块可占据砾石及泥质粗砂；斑块密度和位置受潮流、风暴、洪水与细颗粒供给影响。',
    },
  ], // [S06][S19]-[S21]
  measurements: {},
  diet: {
    types: ['filter-feeder', 'omnivore'],
    foods: [
      '浮游植物与硅藻',
      '悬浮和再悬浮有机碎屑',
      '小型浮游颗粒',
      '偶然遇到的腐肉',
    ],
    description:
      '把两三条带棘的腕抬进底层水流，腕部管足和棘截留颗粒；管足将颗粒聚成食团并沿腕送到腹面口部。悬浮摄食为主，也会机会性摄取底栖碎屑和腐肉。',
  }, // [S14]-[S17]
  activity: [
    '用柔韧腕在底面划拨爬行，成体不靠管足作为主要推进器官',
    '在适宜流速下抬起两三条腕进行悬浮摄食，强流时收下腕',
    '离开蛇尾床后会搜索并重新接触同种个体',
    '潮间带个体常藏在石下和裂隙，潮下带可形成密集表栖斑块',
  ], // [S06][S14][S18][S28]
  tags: ['海洋', '棘皮动物', '蛇尾', '底栖', '悬浮摄食', '聚集', '腕再生', '隐存谱系'],
  threats: [
    '底拖、扇贝拖捞、骨料开采与疏浚造成的底面扰动和个体移除',
    '底质丧失、厚层覆盖及不利的细颗粒沉降',
    '工程改变近底水流和悬浮食物通量',
    '海洋酸化对浮游幼体存活和骨骼发育的潜在影响',
    '未命名谱系和错误鉴定掩盖区域趋势',
  ], // [S10]-[S12][S31][S33][S37]
  conservationActions: [
    '建立带尺度的固定摄影、视频或 ROV 样线，重复绘制蛇尾床边界与密度',
    '在底接触渔业和海床工程中实施扰动前后对照监测并保护重要蛇尾床',
    '同步记录流速、底质、温盐、溶氧和 pH',
    '为范围边缘与深水记录保存凭证和组织，开展整合分类复核',
    '研究自然波动与多世代条件下的酸化响应，并减少二氧化碳排放',
  ], // [S10]-[S12][S19][S31]-[S33]
  metrics: {},
  featuredStats: [
    {
      key: 'disc-diameter',
      label: '中央盘最大直径',
      value: '约 20',
      unit: '毫米',
      note: '区域识别资料给出的最大盘径；不含腕，也不是普通个体平均值。',
    },
    {
      key: 'arm-ratio',
      label: '单腕长度',
      value: '约为盘径 5 倍',
      note: '识别比例；腕可折断和再生，不据此硬算固定总跨度。',
    },
    {
      key: 'local-bed-density',
      label: '塞纳湾局地斑块',
      value: '最高约 7,500',
      unit: '只/平方米',
      note: '特定塞纳湾斑块与影像估算记录；不是全范围通常密度或全球上限。',
    },
    {
      key: 'lab-development',
      label: '悬浮稚体形成',
      value: '约 21',
      unit: '天',
      note: '北海亲体在实验室较优条件下的发育时间；野外受温度和食物影响。',
    },
  ], // [S06][S07][S20][S21][S23]
}
~~~

## 15. 六段 storySections 建议

### 1. `brittle-star-not-sea-star`

- label：`身份`
- title：`五条腕像桨，中央盘保存内脏`
- body：`脆刺蛇尾属于蛇尾纲。它的细腕从五角中央盘突然收窄，腕内关节骨片和肌肉让它在底面划拨；海星则让腹面的许多管足轮流附着和回收来步行。`
- 事实边界：运动差异采用纲级研究；不写本种固定速度、腕序或“比所有海星快”。[S02][S28][S29][S30]

### 2. `arms-in-the-current`

- label：`滤食`
- title：`两三条腕抬进水流，管足把颗粒送向口部`
- body：`个体用部分腕支撑身体，把其余带棘腕伸入底层水流。浮游植物和有机碎屑黏在棘与管足上，管足将颗粒聚成食团，再沿腕传到腹面口部。`
- 事实边界：Dover Strait 的最佳摄食流速低于 20 厘米/秒，只描述该地点和研究条件。[S14][S15][S16]

### 3. `bed-of-thousands`

- label：`聚集`
- title：`相邻个体互相支撑，铺成会移动的蛇尾床`
- body：`脆刺蛇尾会寻找并接触同类，群体让个体在强流中抬起更多摄食腕。塞纳湾斑块可达到每平方米数千只，床的位置又会随风暴、洪水、潮流和沉积供给改变。`
- 事实边界：约 7,500 只/平方米是局地高值，取样方法影响估算；密集个体仍各有独立中央盘，不能画成一张共用肉毯。[S18]-[S21]

### 4. `fragile-arms-regrow`

- label：`再生`
- title：`折腕能再长，修复仍要消耗储备`
- body：`带棘细腕容易损伤，也能从残端再生。荷兰一个种群的两个调查期中，近半到约三分之二个体正再生至少一条腕；同时再生四五条腕的个体很少，再生会占用部分能量。`
- 事实边界：49% 和 65% 属于 Oosterschelde 调查，不能写成全球固定概率；断腕也不能独立长成新个体。[S27]

### 5. `pluteus-to-bed`

- label：`发育`
- title：`八腕浮游幼体，变成五腕底栖稚体`
- body：`受精卵发育成左右对称的摄食型 ophiopluteus，先后长出四对幼腕。变态时五辐成体结构在体内形成，多数幼腕退化；悬浮稚体接触成体蛇尾床后释放最后一对幼腕并转为底栖生活。`
- 事实边界：21 至 22 天来自较优实验室条件；成体提供定居线索和微生境，不进行亲代育幼。[S23][S26]

### 6. `count-the-bed-and-the-lineage`

- label：`监测`
- title：`镜头要数清斑块，凭证要分清谱系`
- body：`普通抓斗会漏掉底表的密集蛇尾，潜水摄影、视频或 ROV 更适合绘制床边界和估算覆盖。欧洲深浅水与南非同名材料还包含深分化谱系，每次长期调查都应保存照片、完整标本和组织。`
- 事实边界：影像密度不能替代物种鉴定；单个线粒体条形码也不能独自完成正式命名。[S10]-[S12][S19]

## 16. 六幅 1536 × 1024 科学情景图

六图统一使用横向 3:2 构图，不写文字、水印、刻度、箭头或伪造采集标签。AI 图像属于依据文献制作的科学情景重建，不能在 alt 或 caption 中冒充野外凭证照片。[S06][S07][S34]

### 图 01：潮流冲刷粗底质上的单只成体

**场景。** 东北大西洋浅潮下带，卵石、砾石、少量贝壳碎片和粉红珊瑚藻之间，一只紫红中央盘、浅灰至淡紫横带腕的脆刺蛇尾贴在底面。相机略高于侧上方，留出左侧标题空间。[S06][S07]

**必须可见。** 一个五角中央盘；正好五条细长、不分枝、分节、逐渐收尖的腕；盘与腕界线突然收窄；腕缘有密集透明锯齿状侧棘；背盘有细棘和五对显眼辐楯。[S06][S07]

**禁止。** 宽三角海星腕、筐蛇尾分枝腕、海百合羽枝、章鱼吸盘、海胆长刺球、甲壳动物关节足、两个中央盘融合。[S06][S28]

### 图 02：中央盘、辐楯和腕棘微距

**场景。** 背面微距自然史图，主体中央盘占画面约三分之一，五条腕基部向外延伸，浅斜光显示骨片和透明侧棘。[S07][S34]

**必须可见。** 五对辐楯围绕盘缘成放射排列，盘面短棘与少量长棘，腕背板纵向隆脊，每腕节左右各约七枚直立带齿侧棘。[S06][S07]

**事实限制。** 辐楯可能裸露或带小棘，地域变异存在。画面选一个东北大西洋常见型，caption 不把辐楯棘饰称作单独充分的物种诊断。[S07][S34]

### 图 03：迎流悬浮摄食

**场景。** 一只个体嵌在同类和卵石之间，两条腕支撑底面，三条腕弯曲抬入近底水流。水中只有少量自然尺度的浮游颗粒，不画浓稠食物云。[S14][S15]

**必须可见。** 抬腕上的细小管足伸在侧棘之间，局部颗粒聚成小食团，食团沿腕向中央盘移动；中央盘仍留在底面附近。[S15][S16]

**禁止。** 鲸须、鳃耙、网兜、长黏液丝、捕捉大鱼、从口部吸入整股水、海星外翻胃。[S15][S17]

### 图 04：划腕移动与海星对照

**场景。** 前景脆刺蛇尾在平坦砾石上，一条腕指向行进方向，两侧腕弯曲并压住底面；远景放一只普通五腕海星，其腹侧边缘可见许多微小管足接触石面。两个主体保持物种尺度，不用速度线。[S28][S30]

**必须可见。** 蛇尾的细腕和清楚中央盘；海星的宽腕与腹侧管足。静态姿态要让读者看出不同的接触结构。[S06][S28][S30]

**事实限制。** 对照是纲级机制。不要让蛇尾只靠管足滑行，也不要让海星抬起整条腕像桨一样奔跑。[S28][S30]

### 图 05：八腕 ophiopluteus 与悬浮稚体

**场景。** 无文字双阶段科学显微构图。左侧为左右对称的八腕摄食型 ophiopluteus，透明身体内有细长骨杆；右侧为第 21 天左右的悬浮稚体，已有五条短成体腕，同时保留一对很长的后外侧幼腕。[S23]

**必须可见。** 左侧四对幼腕、双侧对称和简单消化道；右侧中央五辐稚体、成体口和末端管足，外加一对后外侧幼腕。[S23]

**禁止。** 把八条幼腕画成成体八腕蛇尾；海星 bipinnaria、海胆 pluteus 标签、卵囊、子宫、胎生、成体怀抱幼体。[S23][S26]

### 图 06：ROV 影像样线监测蛇尾床

**场景。** 近底 ROV 相机沿一条固定样线拍摄砾石蛇尾床，画面边缘可见非破坏性激光尺度点或已知尺寸标尺板，主体区域包含密集但仍可分辨中央盘的蛇尾。[S19]

**必须可见。** 斑块边界、底质转换、不同盘径个体和少量再生腕；镜头保持垂直或低斜角，便于覆盖度和密度复核。[S19][S27]

**禁止。** 抓斗碾压、拖网正在穿过动物、潜水员徒手堆放个体、每只蛇尾排成规则网格、用一张照片宣称全球趋势。[S19][S33]

## 17. 图像和文案共同禁区

- 不把五条细腕画成五条宽海星腕，也不让腕与中央盘无缝融合。[S06][S28]
- 不增加第六腕，不让腕分叉，不把重叠蛇尾合成共享中央盘的怪物。[S06]
- 不把管足画成海星式吸盘步足阵列；本种成体主要用腕划拨移动。[S15][S28][S30]
- 不把滤食画成捕捉大鱼、张开巨口吸水或使用鲸须和网兜。[S14]-[S17]
- 不固定一种体色；颜色多态和横带变化属于本种显著特征。[S07][S34]
- 不把 20 毫米盘径当全身长度，不把约五倍腕长换算成固定总跨度。[S06][S07]
- 不把 7,500 只/平方米写成全球平均密度，也不用普通抓斗数据直接校准影像密度。[S19]-[S21]
- 不把 21 天写成野外固定变态日，也不把附着成体写成亲代育幼。[S23][S26]
- 不把断下的单腕画成再生完整个体；证据只支持保留身体从腕残端再生。[S27]
- 不把 pH 7.9 的单代实验结果改写成野外必然灭绝或 IUCN 受威胁等级。[S05][S31][S32]
- 不把历史南非记录与欧洲核心谱系无条件涂成一条连续、已解决的同种范围。[S08][S12]
- 不把 AI 图像称作标本、实拍、分子鉴定或密度测量证据。[S07][S19]

## 18. 运行时来源字段建议

以下来源覆盖分类、IUCN 状态、形态、生境、谱系、生态、繁殖和威胁。`accessedAt` 统一使用本轮核查日。

~~~ts
sources: [
  {
    title: 'World Ophiuroidea Database / WoRMS: Ophiothrix fragilis',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=125131',
    kind: 'taxonomy',
    accessedAt: '2026-09-01',
  },
  {
    title: 'EUNIS: Ophiothrix fragilis',
    url: 'https://eunis.eea.europa.eu/species/45131',
    kind: 'conservation',
    accessedAt: '2026-09-01',
  },
  {
    title: 'MarLIN: Common brittlestar',
    url: 'https://www.marlin.ac.uk/species/detail/1198',
    kind: 'ecology',
    accessedAt: '2026-09-01',
  },
  {
    title: 'Pérez-Portela et al. 2013: Cryptic speciation and genetic structure of European brittle stars',
    url: 'https://doi.org/10.1111/j.1463-6409.2012.00573.x',
    kind: 'taxonomy',
    accessedAt: '2026-09-01',
  },
  {
    title: 'Taboada & Pérez-Portela 2016: Contrasted phylogeographic patterns across the Atlantic-Mediterranean area',
    url: 'https://doi.org/10.1038/srep32425',
    kind: 'distribution',
    accessedAt: '2026-09-01',
  },
  {
    title: 'Davoult & Gounin 1995: Suspension-feeding activity in the Dover Strait',
    url: 'https://doi.org/10.1016/0272-7714(95)90027-6',
    kind: 'ecology',
    accessedAt: '2026-09-01',
  },
  {
    title: 'Morgan & Jangoux 2005: Larval morphometrics and adult influence on settlement',
    url: 'https://doi.org/10.2307/3593117',
    kind: 'ecology',
    accessedAt: '2026-09-01',
  },
  {
    title: 'Lozach et al. 2011: Sampling dense Ophiothrix fragilis epifauna',
    url: 'https://doi.org/10.1016/j.marpolbul.2011.09.012',
    kind: 'ecology',
    accessedAt: '2026-09-01',
  },
  {
    title: 'MarESA: Ophiothrix fragilis and/or Ophiocomina nigra brittlestar beds',
    url: 'https://www.marlin.ac.uk/habitats/detail/1068',
    kind: 'conservation',
    accessedAt: '2026-09-01',
  },
  {
    title: 'Dupont et al. 2008: Ocean acidification effects on Ophiothrix fragilis larvae',
    url: 'https://doi.org/10.3354/meps07800',
    kind: 'conservation',
    accessedAt: '2026-09-01',
  },
]
~~~

## 19. 不应硬编码的事项

1. **南非是否属于同一生物种。** WoRMS 仍接受南非记录，条形码却显示深分化；正式范围需要整合分类研究。[S08][S12]
2. **地中海浅水谱系名称。** Ophiothrix sp. II 尚无项目可用的接受学名，不能用 *O. quinquemaculata* 自动替换。[S10][S11]
3. **最大栖息深度。** 0 至 85 米、350 米和分子验证到 139 米使用不同资料口径；未命名深水谱系又增加误判风险。[S06][S07][S11]
4. **全身长度。** 腕常断裂、弯曲和再生，盘径与腕长也不是同一种测量；schema 当前缺少盘径字段。[S06][S07][S27]
5. **寿命。** 文献汇总从 9 个月到超过 10 年，可能混入地点、估龄方法和谱系差异，不填 `lifespanYears`。[S06]
6. **典型床密度。** 抓斗、潜水样方、照片和视频探测率不同，局地高值不能代表平均密度。[S19][S20]
7. **严格昼夜活动。** 可靠现场研究强调潮流和食物窗口；区域避光观察不足以支持全种固定夜行标签。[S14]
8. **全范围繁殖月份。** 荷兰和英吉利海峡以夏季产卵为主，地点和年份会改变成熟与补充。[S22][S24]
9. **21 天变态。** 这是较优实验条件下到悬浮稚体的时间，不是野外倒计时。[S23]
10. **酸化下的种群结局。** 单代幼体实验没有测量成体、自然 pH 波动、跨代可塑性或野外补充。[S31][S32]
11. **全球趋势和成熟个体数。** IUCN 没有评估，现有时间序列集中于欧洲少数蛇尾床。[S05][S20][S38]
12. **图片鉴定。** 颜色、辐楯棘饰和腕棘会变异，生成图不能替代完整标本、显微骨片和分子凭证。[S10][S12][S34]

## 20. 完整来源清单

### 分类、名称与保护状态

- **[S01]** Stöhr, S.; O’Hara, T.; Thuy, B. (eds.) (2026). World Ophiuroidea Database. *Ophiothrix fragilis* (Abildgaard in O.F. Müller, 1789), AphiaID 125131. [WoRMS REST 接受记录](https://www.marinespecies.org/rest/AphiaRecordsByName/Ophiothrix%20fragilis?like=false&marine_only=true)，访问于 2026-09-01。
- **[S02]** WoRMS. Aphia classification for AphiaID 125131. [完整分类链](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/125131)，访问于 2026-09-01。
- **[S03]** WoRMS. Synonyms for AphiaID 125131. [异名接口](https://www.marinespecies.org/rest/AphiaSynonymsByAphiaID/125131)，访问于 2026-09-01。
- **[S04]** WoRMS. Vernacular names for AphiaID 125131. [俗名接口](https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/125131)，访问于 2026-09-01。
- **[S05]** IUCN Red List 与 European Environment Agency EUNIS. [IUCN 物种检索](https://www.iucnredlist.org/search?query=Ophiothrix%20fragilis&searchType=species)，[EUNIS 物种页](https://eunis.eea.europa.eu/species/45131)，访问于 2026-09-01。IUCN 检索无正式评估页；EUNIS 明确写“not yet been assessed”。

### 形态、分布与物种边界

- **[S06]** Marine Biological Association. MarLIN: Common brittlestar, *Ophiothrix fragilis*. [物种页](https://www.marlin.ac.uk/species/detail/1198)，访问于 2026-09-01。页面由 Angus Jackson 研究、Paul Tyler 审核；形态和区域生境可用，旧版敏感性条目已由 MarESA 取代。
- **[S07]** Naturalis Biodiversity Center. Macrobenthos of the North Sea: *Ophiothrix fragilis*. [识别页](https://ns-echinodermata.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=122174)，访问于 2026-09-01。
- **[S08]** WoRMS. Distributions for AphiaID 125131. [分布接口](https://www.marinespecies.org/rest/AphiaDistributionsByAphiaID/125131)，访问于 2026-09-01。接口内记录标为 unreviewed，只用于范围骨架和复核线索。
- **[S09]** Muths, D., Jollivet, D., Gentil, F. & Davoult, D. (2009). Large-scale genetic patchiness among NE Atlantic populations of the brittle star *Ophiothrix fragilis*. *Aquatic Biology* 5:117–132. [论文](https://doi.org/10.3354/ab00138)，访问于 2026-09-01。
- **[S10]** Pérez-Portela, R., Almada, V. & Turon, X. (2013). Cryptic speciation and genetic structure of widely distributed brittle stars in Europe. *Zoologica Scripta* 42:151–169. [论文](https://doi.org/10.1111/j.1463-6409.2012.00573.x)，访问于 2026-09-01。
- **[S11]** Taboada, S. & Pérez-Portela, R. (2016). Contrasted phylogeographic patterns on mitochondrial DNA of shallow and deep brittle stars across the Atlantic-Mediterranean area. *Scientific Reports* 6:32425. [开放全文](https://doi.org/10.1038/srep32425)，访问于 2026-09-01。
- **[S12]** Olbers, J. M. et al. (2022). DNA barcoding echinoderms from the East Coast of South Africa: the challenge to maintain DNA data connected with taxonomy. *PLOS ONE* 17:e0270321. [开放全文](https://doi.org/10.1371/journal.pone.0270321)，访问于 2026-09-01。
- **[S13]** NCBI Taxonomy. *Ophiothrix fragilis*, Taxonomy ID 70180. [记录](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=70180&lvl=0)，访问于 2026-09-01。NCBI 页面明确提醒不要把其分类库当作权威命名来源。

### 摄食、活动、聚集与生态

- **[S14]** Davoult, D. & Gounin, F. (1995). Suspension-feeding activity of a dense *Ophiothrix fragilis* population at the water-sediment interface. *Estuarine, Coastal and Shelf Science* 41:567–577. [论文](https://doi.org/10.1016/0272-7714(95)90027-6)，访问于 2026-09-01。
- **[S15]** Warner, G. F. & Woodley, J. D. (1975). Suspension-feeding in the brittle-star *Ophiothrix fragilis*. *Journal of the Marine Biological Association of the United Kingdom* 55:199–210. [论文](https://doi.org/10.1017/S0025315400015848)，访问于 2026-09-01。
- **[S16]** Allen, J. R. (1998). Suspension feeding in the brittle-star *Ophiothrix fragilis*: efficiency of particle retention and implications for encounter-rate models. *Marine Biology* 132:383–390. [论文](https://doi.org/10.1007/s002270050405)，访问于 2026-09-01。
- **[S17]** Nagabhushanam, A. K. & Colman, J. S. (1959). Carrion-eating by ophiuroids. *Nature* 184:285. [论文](https://doi.org/10.1038/184285a0)，访问于 2026-09-01。
- **[S18]** Broom, D. M. (1975). Aggregation behaviour of the brittle-star *Ophiothrix fragilis*. *Journal of the Marine Biological Association of the United Kingdom* 55:191–197. [论文](https://doi.org/10.1017/S0025315400015836)，访问于 2026-09-01。
- **[S19]** Lozach, S. et al. (2011). Sampling epifauna, a necessity for a better assessment of benthic ecosystem functioning: an example of *Ophiothrix fragilis* from the Bay of Seine. *Marine Pollution Bulletin* 62:2753–2760. [论文](https://doi.org/10.1016/j.marpolbul.2011.09.012)，访问于 2026-09-01。
- **[S20]** Dauvin, J.-C. et al. (2013). Interactions between aggregations and environmental factors explain spatio-temporal patterns of *Ophiothrix fragilis* in the eastern Bay of Seine. *Estuarine, Coastal and Shelf Science* 131:171–181. [论文](https://doi.org/10.1016/j.ecss.2013.07.005)，访问于 2026-09-01。
- **[S21]** Murat, A. et al. (2016). Silting up and development of anoxic conditions enhanced by high abundance of the geoengineer species *Ophiothrix fragilis*. *Continental Shelf Research* 118:11–22. [论文](https://doi.org/10.1016/j.csr.2016.01.003)，访问于 2026-09-01。

### 繁殖、发育与再生

- **[S22]** Morgan, R. & Jangoux, M. (2002). Reproductive cycle and spawning induction in the gregarious brittle star *Ophiothrix fragilis* in the Oosterschelde. *Invertebrate Reproduction & Development* 42:145–155. [论文](https://doi.org/10.1080/07924259.2002.9652771)，访问于 2026-09-01。
- **[S23]** Morgan, R. & Jangoux, M. (2005). Larval morphometrics and influence of adults on settlement in the gregarious ophiuroid *Ophiothrix fragilis*. *Biological Bulletin* 208:92–99. [论文](https://doi.org/10.2307/3593117)，访问于 2026-09-01。
- **[S24]** Lefebvre, A., Davoult, D., Gentil, F. & Janquin, M.-A. (1999). Spatio-temporal variability in gonad growth of *Ophiothrix fragilis* in the English Channel. *Hydrobiologia* 414:25–34. [论文](https://doi.org/10.1023/A:1003827532385)，访问于 2026-09-01。
- **[S25]** Lefebvre, A. & Davoult, D. (2000). Larval distribution of *Ophiothrix fragilis* in the Dover Strait. *Journal of the Marine Biological Association of the United Kingdom* 80:567–568. [论文](https://doi.org/10.1017/S0025315400002368)，访问于 2026-09-01。
- **[S26]** Morgan, R. & Jangoux, M. (2004). Juvenile-adult relationship in the gregarious ophiuroid *Ophiothrix fragilis*: a behavioral and morphological study. *Marine Biology* 145:265–276. [论文](https://doi.org/10.1007/s00227-004-1327-5)，访问于 2026-09-01。
- **[S27]** Morgan, R. & Jangoux, M. (2004). Assessing arm regeneration and its effect during the reproductive cycle in *Ophiothrix fragilis*. *Cahiers de Biologie Marine* 45:277–280. [开放 PDF](https://www.vliz.be/imisdocs/publications/289314.pdf)，访问于 2026-09-01。

### 运动机制、压力与监测

- **[S28]** Goharimanesh, M. et al. (2023). A methodological exploration to study 2D arm kinematics in Ophiuroidea. *Frontiers in Zoology* 20:15. [开放全文](https://doi.org/10.1186/s12983-023-00495-y)，访问于 2026-09-01。用于蛇尾纲运动机制，不是 *O. fragilis* 专项实验。
- **[S29]** Clark, E. G. et al. (2018). Integrating morphology and in vivo skeletal mobility with digital models to infer function in brittle star arms. *Journal of Anatomy* 233:696–714. [开放全文](https://doi.org/10.1111/joa.12887)，访问于 2026-09-01。用于腕骨片与肌肉功能的纲级背景。
- **[S30]** Deridoux, A. et al. (2026). Tube feet dynamics drive adaptation in sea star locomotion. *PNAS* 123:e2509681123. [论文](https://doi.org/10.1073/pnas.2509681123)，访问于 2026-09-01。用于海星管足步行对照，不外推速度。
- **[S31]** Dupont, S. et al. (2008). Near-future level of CO2-driven ocean acidification radically affects larval survival and development in *Ophiothrix fragilis*. *Marine Ecology Progress Series* 373:285–294. [论文](https://doi.org/10.3354/meps07800)，访问于 2026-09-01。
- **[S32]** Tyler-Walters, H. et al. MarESA: *Ophiothrix fragilis* and/or *Ophiocomina nigra* brittlestar beds on sublittoral mixed sediment, ocean acidification section. [评估页](https://www.marlin.ac.uk/habitats/detail/1068)，访问于 2026-09-01。页面指出缺少成体与多世代适应研究。
- **[S33]** Tyler-Walters, H. et al. MarESA: *Ophiothrix fragilis* and/or *Ophiocomina nigra* brittlestar beds on sublittoral mixed sediment, physical pressures and fishing evidence. [评估页](https://www.marlin.ac.uk/habitats/detail/1068)，访问于 2026-09-01。
- **[S34]** Micael, J. et al. (2019). The echinoderm fauna of the Azores. *Zootaxa* 4639:1–231. [开放全文](https://doi.org/10.11646/zootaxa.4639.1.1)，访问于 2026-09-01。用于亚速尔凭证、颜色和棘饰多态。
- **[S35]** Ocean Biodiversity Information System. *Ophiothrix fragilis*, AphiaID 125131. [物种记录](https://obis.org/taxon/125131)，访问于 2026-09-01。只用于出现记录发现，不单独决定边缘范围或深度。
- **[S36]** GBIF. *Ophiothrix fragilis*, species key 5187835. [物种页](https://www.gbif.org/species/5187835)，访问于 2026-09-01。聚合记录含需要凭证复核的地理离群点。
- **[S37]** Bradshaw, C., Veale, L. O. & Brand, A. R. (2002). The role of scallop-dredge disturbance in long-term changes in Irish Sea benthic communities. *Journal of Sea Research* 47:161–184. [论文](https://doi.org/10.1016/S1385-1101(02)00096-5)，访问于 2026-09-01。
- **[S38]** Guillou, M., Blanchet-Aurigny, A. & Le Goaster, E. (2013). Density fluctuations of the ophiuroids *Ophiothrix fragilis* and *Ophiocomina nigra* in the Bay of Douarnenez, Brittany, France. *Marine Biodiversity Records* 6:e36. DOI: 10.1017/S1755267212001315。[出版社论文页](https://www.cambridge.org/core/journals/marine-biodiversity-records/article/density-fluctuations-of-the-ophiuroids-ophiothrix-fragilis-and-ophiocomina-nigra-in-the-bay-of-douarnenez-brittany-france/8179BCFDFE3F07EC26C495E71D653B83)，访问于 2026-09-01。

[S01]: https://www.marinespecies.org/rest/AphiaRecordsByName/Ophiothrix%20fragilis?like=false&marine_only=true
[S02]: https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/125131
[S03]: https://www.marinespecies.org/rest/AphiaSynonymsByAphiaID/125131
[S04]: https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/125131
[S05]: https://eunis.eea.europa.eu/species/45131
[S06]: https://www.marlin.ac.uk/species/detail/1198
[S07]: https://ns-echinodermata.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?id=122174
[S08]: https://www.marinespecies.org/rest/AphiaDistributionsByAphiaID/125131
[S09]: https://doi.org/10.3354/ab00138
[S10]: https://doi.org/10.1111/j.1463-6409.2012.00573.x
[S11]: https://doi.org/10.1038/srep32425
[S12]: https://doi.org/10.1371/journal.pone.0270321
[S13]: https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=70180&lvl=0
[S14]: https://doi.org/10.1016/0272-7714(95)90027-6
[S15]: https://doi.org/10.1017/S0025315400015848
[S16]: https://doi.org/10.1007/s002270050405
[S17]: https://doi.org/10.1038/184285a0
[S18]: https://doi.org/10.1017/S0025315400015836
[S19]: https://doi.org/10.1016/j.marpolbul.2011.09.012
[S20]: https://doi.org/10.1016/j.ecss.2013.07.005
[S21]: https://doi.org/10.1016/j.csr.2016.01.003
[S22]: https://doi.org/10.1080/07924259.2002.9652771
[S23]: https://doi.org/10.2307/3593117
[S24]: https://doi.org/10.1023/A:1003827532385
[S25]: https://doi.org/10.1017/S0025315400002368
[S26]: https://doi.org/10.1007/s00227-004-1327-5
[S27]: https://www.vliz.be/imisdocs/publications/289314.pdf
[S28]: https://doi.org/10.1186/s12983-023-00495-y
[S29]: https://doi.org/10.1111/joa.12887
[S30]: https://doi.org/10.1073/pnas.2509681123
[S31]: https://doi.org/10.3354/meps07800
[S32]: https://www.marlin.ac.uk/habitats/detail/1068
[S33]: https://www.marlin.ac.uk/habitats/detail/1068
[S34]: https://doi.org/10.11646/zootaxa.4639.1.1
[S35]: https://obis.org/taxon/125131
[S36]: https://www.gbif.org/species/5187835
[S37]: https://doi.org/10.1016/S1385-1101(02)00096-5
[S38]: https://www.cambridge.org/core/journals/marine-biodiversity-records/article/density-fluctuations-of-the-ophiuroids-ophiothrix-fragilis-and-ophiocomina-nigra-in-the-bay-of-douarnenez-brittany-france/8179BCFDFE3F07EC26C495E71D653B83
