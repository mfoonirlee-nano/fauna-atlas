# 大弹涂鱼（_Boleophthalmus pectinirostris_）完整档案研究

- 检索、内容与访问日期：2026-08-27
- 展示中文名：**大弹涂鱼**
- 英文主名：**Great Blue-spotted Mudskipper**
- 接受学名：**_Boleophthalmus pectinirostris_ (Linnaeus, 1758)**
- 推荐 slug：`great-blue-spotted-mudskipper`
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面、5 张图库图、6 段故事、4 个展示数字和来源数组
- 名称边界：**Giant Mudskipper** 通常指 _Periophthalmodon schlosseri_，不是本种；文件名、slug、英文标题和图像提示词均不得使用 `giant-mudskipper`
- 证据口径：分类和基础体尺采用 Catalog of Fishes、WoRMS、FishBase；全球保护等级采用 IUCN 原始评估；行为与生理优先采用本种原始论文；政府物种页用于中文名、活体外形和公众可观察行为

## 结论摘要

1. Catalog of Fishes 接受 _Boleophthalmus pectinirostris_ (Linnaeus, 1758)，原始组合为 _Gobius pectinirostris_ Linnaeus, 1758，当前置于 Oxudercidae: Oxudercinae。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Boleophthalmus&tbl=species)
2. WoRMS 将 AphiaID 279926 标为 accepted，但旧页面仍显示 Gobiidae。仓库采用 Catalog 与 FishBase 的当前骨架：Gobiiformes、Oxudercidae；中文科名用“背眼虾虎鱼科”。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=279926) [FishBase](https://www.fishbase.org/summary/15864)
3. IUCN 评估日期为 2024-03-18，2025 年发布，等级 **Vulnerable**，准则 **A2bcd**，当前趋势 **decreasing**。落库年是评估年 2024，不是发布年 2025 或访问年 2026。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en) [FishBase IUCN mirror](https://www.fishbase.org/summary/15864)
4. 本种分布于东亚至东南亚西太平洋、东印度洋边缘的河口潮间带；可靠范围包括中国大陆、台湾、韩国、日本、越南北部、马来半岛和印度尼西亚苏门答腊。地图不能只画日本，也不能扩成整个印度—太平洋。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Boleophthalmus&tbl=species) [IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en)
5. FishBase 报告的雄性或未判性最大总长为 17.5 cm；台湾政府资料常把野外个体写作 10—15 cm。17.5 cm 是报告上限，不是普通成鱼的典型值。[FishBase](https://www.fishbase.org/summary/15864) [台湾国家公园署](https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html)
6. 活体识别组合是宽钝头、头顶突出的高位眼、粗厚唇、延长体形、两枚背鳍、能支撑身体的肉质胸鳍，以及头、体侧和背鳍上的浅蓝至亮蓝斑点。不能画成通体宝蓝，也不能借用 _P. schlosseri_ 的粗大体形和食蟹形象。[Murdy 1989](https://journals.australian.museum/media/Uploads/Journals/17704/93_complete.pdf) [台湾国家公园署](https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html)
7. 它是兼性空气呼吸鱼。皮肤表层附近的毛细血管、富血管的口腔—咽部—鳃盖腔内衬、鳃共同参与气体交换；“只靠皮肤呼吸”与“离水后不用鳃”都不成立。[Yokoya & Tamura 1992](https://doi.org/10.1002/jmor.1052140305) [Ishimatsu et al. 2021](https://doi.org/10.1002/jmor.21404) [Storz et al. 2020](https://doi.org/10.1242/jeb.217307)
8. 低潮时以胸鳍支撑、划动或爬行，短距离跳跃也可参与求偶展示。应写“胸鳍辅助陆上移动”，不要拟人化成用四肢交替走路。[台湾国家公园署](https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html) [台中市政府](https://www.links.taichung.gov.tw/837108/2758517/2758582/2758842/2758850)
9. 物种级原始研究把它定位为泥表微藻刮食者。香港泥滩研究发现食物以硅藻型微型底栖藻类为主，并在该地点选择性摄食最大长度大于 50 μm 的硅藻；这个阈值不是全分布区的固定菜单。[Yang et al. 2003](https://doi.org/10.1007/s00227-003-1067-y)
10. 福建繁殖地的洞穴多呈 Y 形，卵借附着丝粘在无水产卵室的内壁和顶部，雄鱼留在洞内护卵。日本有明海研究从洞穴回收 30 至大于 400 mL 气体，支持空气对胚胎供氧至关重要。[Hong et al. 2007](https://www.researchgate.net/publication/279699828_Reproductive_ecology_of_the_mudskipper_Bolephthalmus_pectinirostris) [Toba & Ishimatsu 2014](https://doi.org/10.1111/jfb.12324)
11. 洞内有空气与“已直接拍到本种雄鱼每次补气”不是同一层证据。可写雄鱼很可能吞入空气并补充产卵室，但必须标作由洞穴气体、护卵行为和近缘弹涂鱼观察共同支持的机制模型，不能写成已对本种逐次计数的直接实验证据。[Toba & Ishimatsu 2014](https://doi.org/10.1111/jfb.12324)
12. IUCN 以过去三代约 13—14 年内疑似至少 30% 的下降评为 VU A2bcd，依据包括渔获/丰度指数、分布或生境质量下降和实际或潜在捕捞。它是范围尺度推断，不是逐尾全球普查。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en)
13. 主要行动是管控捕捞、监测种群与渔获、保护和恢复河口泥滩及潮沟、减少围垦和污染，并保存不同地理谱系。日本有明海局部衰退与围垦资料不能替代全球 IUCN 判断。[Takegaki et al. 2005](https://doi.org/10.11369/jji1950.52.9) [IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en)
14. 大弹涂鱼与弧边招潮蟹可在同一泥滩调查地共现；这只支持“共享潮间带景观”。没有证据支持互利、依存或任何形式的共生关系，故事和图片都不能让两者接触、喂食或协作。[台北市社子湿地调查](https://www-ws.gov.taipei/Download.ashx?icon=..pdf&n=56S%2B5a2Q5bO2LeeUn%2BaFi%2Biqv%2BafpeWgseWRii3nrKzkuIDmrKHloLHlkYoucGRm&u=LzAwMS9VcGxvYWQvMzQ0L3JlbGZpbGUvNDMyNzYvNzYwNDMwNi85OGNiZmVhYi00OTQ1LTQ3ZjUtYTc2Ni1lNDU0MDk3M2ExN2YucGRm)

## 名称、分类与物种边界

### 接受分类链

| 阶元 | 学名 | 中文名 | 落库口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 仓库固定 |
| 门 | Chordata | 脊索动物门 | Catalog、WoRMS 一致 |
| 纲 | Actinopterygii | 辐鳍鱼纲 | 仓库鱼类统一口径 |
| 目 | Gobiiformes | 虾虎鱼目 | 当前鱼类骨架 |
| 科 | Oxudercidae | 背眼虾虎鱼科 | Catalog 与 FishBase 当前口径 |
| 属 | _Boleophthalmus_ | 大弹涂鱼属 | 接受属 |
| 种 | _B. pectinirostris_ | 大弹涂鱼 | 接受种 |

WoRMS 页面仍把本种放在 Gobiidae，台湾较旧鱼类资料也沿用 Perciformes/Gobiidae；这反映资料更新时间和骨架差异，不是两个物种。产品只保存一套当前分类，不在页面向用户并列两个科。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=279926) [台湾鱼类资料库](https://fishdb.sinica.edu.tw/taxon/381727-fishdb) [Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Boleophthalmus&tbl=species)

### 名称字段

- 中文主名：大弹涂鱼；简体产品统一写“涂”，来源原题保留“塗”
- 英文主名：Great Blue-spotted Mudskipper
- 可用中文别名：花跳、花条；两者有地区性，放入 aliases 而不替代主名
- 不建议入库：弹涂鱼、跳跳鱼、石跳仔、海免；它们可能泛指多个弹涂鱼类
- 禁用英文别名：Giant Mudskipper；FishBase 把该名用于 _Periophthalmodon schlosseri_。[FishBase, _P. schlosseri_](https://www.fishbase.org/summary/8414)

```ts
names: {
  zh: '大弹涂鱼',
  en: 'Great Blue-spotted Mudskipper',
  aliases: ['花跳', '花条'],
},
scientificName: 'Boleophthalmus pectinirostris',
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Actinopterygii', '辐鳍鱼纲'),
  taxon('Gobiiformes', '虾虎鱼目'),
  taxon('Oxudercidae', '背眼虾虎鱼科'),
  taxon('Boleophthalmus', '大弹涂鱼属'),
),
```

## IUCN 保护等级

IUCN 条目为 Dinh Minh 等的 2024 年评估，发布于 2025-1 版，标识符 `e.T241148837A241148840`。结构化字段如下：[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en)

| 字段 | 值 | 边界 |
| --- | --- | --- |
| code | `VU` | 全球等级 Vulnerable |
| trend | `decreasing` | IUCN 当前趋势 |
| assessedYear | `2024` | 评估日期 2024-03-18 |
| criteria | `A2bcd` | 过去种群下降准则 |

`A2` 表示过去的种群减少，原因可能尚未停止、未完全理解或不可逆；`b` 对应适当丰度指数，`c` 对应分布范围、生境面积或质量下降，`d` 对应实际或潜在开发利用。正文可解释这些证据类型，但不应把字母扩写成四项都已在每个国家独立量测。[IUCN Categories and Criteria](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf)

## 分布、realm 与四类生境

### 分布口径

Catalog 汇总从马来西亚槟城、印度尼西亚苏门答腊向北，经中国和台湾至韩国、日本。IUCN 当前评估还列越南北部。未经确认的西巴布亚记录不落入 countries 或范围正文。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Boleophthalmus&tbl=species) [IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en)

仓库没有 `brackish` realm。本种的生活史核心是沿海河口潮间带，建议 `realms: ['marine']`；WoRMS 的 marine、brackish、freshwater 标记说明盐度耐受和出现记录，不等于三个独立生活史 realm。离水活动也不把它变成 terrestrial 物种。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=279926)

### 四类生境

1. **河口开阔软泥潮滩**：主要生境；退潮后在湿泥表面活动和刮食微型底栖藻类。[Yang et al. 2003](https://doi.org/10.1007/s00227-003-1067-y)
2. **红树林边缘与潮沟湿泥**：南部范围常见；湿软、富有机质且靠近浅水可降低离水干燥风险。[台湾国家公园署](https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html)
3. **浅潮池、低盐水洼与水覆泥面**：个体在水和空气间往返；幼鱼实验显示对温度、盐度和底质有选择，但实验偏好不能直接当成野外全范围阈值。[Chen et al. 2008](https://doi.org/10.1111/j.1095-8649.2007.01723.x)
4. **潮滩泥洞与产卵室**：高潮、夜间、越冬和繁殖的重要微生境；洞穴空气对胚胎供氧尤其关键。[Hong et al. 2007](https://www.researchgate.net/publication/279699828_Reproductive_ecology_of_the_mudskipper_Bolephthalmus_pectinirostris) [Toba & Ishimatsu 2014](https://doi.org/10.1111/jfb.12324)

## 外形、体尺与图像鉴别

### 可见形态锚点

- 体形延长，头部宽而钝，眼位高并明显突出；不是鲶鱼式扁头，也没有触须
- 口宽、唇厚，下颌齿扁平并具缺刻，适合处理泥表食物；不要画成食蟹猛鱼的犬齿
- 两枚背鳍清楚分开；第二背鳍基底长，不能漏掉第一背鳍或画成连续单鳍
- 胸鳍粗厚、基部肉质，离水时可支撑身体；腹鳍形成吸附盘，但不是青蛙后肢
- 活体底色青褐至灰褐，与泥面接近；头、体侧、背鳍和尾鳍有浅蓝或亮蓝小斑
- 分类修订对保存标本常写白斑，政府活体资料写蓝斑；图像按活体呈蓝色，斑点保持小而分散，不画成均匀霓虹纹

Murdy 的修订给出第二背鳍总鳍条 23—26、纵列鳞 84—123、尾鳍长度约为标准体长的 18.3%—22.2% 等诊断量。它们用于校核分类，不宜塞入面向普通用户的故事正文。[Murdy 1989](https://journals.australian.museum/media/Uploads/Journals/17704/93_complete.pdf) [FishBase](https://www.fishbase.org/summary/15864)

### 体尺边界

```ts
measurements: {
  length: {
    max: 17.5,
    unit: 'cm',
    note: 'FishBase 对雄性或未判性个体的最大总长记录；台湾野外介绍常见 10—15 cm，17.5 cm 不是典型成鱼长度。',
  },
},
metrics: {},
```

不填 `adultLengthCm`，因为当前资料没有可跨地区复用的成鱼范围；不把日本样本最大 7 龄直接写成全球寿命。年龄研究可以进入来源和正文边注，不进入排序字段。[Takegaki et al. 2005](https://doi.org/10.1016/j.fishres.2005.04.005)

## 空气呼吸、皮肤与口咽表面

Yokoya 与 Tamura 在本种皮肤中观察到紧贴表面上皮细胞下方的真皮毛细血管，以及黏液细胞；薄空气—血液屏障支持皮肤气体交换。[Yokoya & Tamura 1992](https://doi.org/10.1002/jmor.1052140305)

Ishimatsu 等描述了口腔—鳃盖腔内表面的密集呼吸毛细血管，同时发现鳃部微血管也有适应两栖生活的结构。Storz 等进一步把口腔、咽部、鳃腔、鳃盖腔、鳃和体表列为本种水陆切换时共同使用的交换界面。[Ishimatsu et al. 2021](https://doi.org/10.1002/jmor.21404) [Storz et al. 2020](https://doi.org/10.1242/jeb.217307)

可写：

- “湿润皮肤和口咽—鳃盖腔内衬让它在泥滩上继续交换气体”
- “它在水中与空气中切换呼吸途径，仍保留并使用鳃”
- “黏液和回到水洼的行为有助于维持交换表面湿润”

不可写：

- “大弹涂鱼完全靠皮肤呼吸”
- “它把肺藏在鳃盖里”
- “离水后鳃完全关闭”
- “43% 皮肤、52% 鳃”这类固定百分比；常被引用的 Tamura 1976 对象名为 _Boleophthalmus chinensis_，现行分类并非本种

## 鳍行走、爬行与跳跃

台湾国家公园署记录本种用胸鳍在泥上支撑和划动，雄鱼求偶时会竖起两枚背鳍并垂直跃起；台中市政府也描述肉质胸鳍和吸盘状腹鳍参与支撑与移动。[台湾国家公园署](https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html) [台中市政府](https://www.links.taichung.gov.tw/837108/2758517/2758582/2758842/2758850)

“行走”是便于理解的简称。图像与正文应展示胸鳍承重、身体贴近泥面、尾部拖曳或助推；不要添加肘膝、趾爪或青蛙式后腿。跳跃场景最好限定为短距离移动或求偶展示，不能暗示长期高速奔跑。

## 食性与刮食微藻

香港 13 个月泥滩研究发现，大弹涂鱼所在泥表食物群落由硅藻型微型底栖藻类主导。鱼对最大长度大于 50 μm 的硅藻表现选择性摄食，较小硅藻更常被排除；作者认为这一尺度接近鳃耙间距，提示物理筛分参与摄食。[Yang et al. 2003](https://doi.org/10.1007/s00227-003-1067-y)

韩国胃含物研究也在不同月份和体长组中发现硅藻占优势，常见类群包括 _Pleurosigma_、_Navicula_、_Nitzschia_ 和 _Gyrosigma_。[Kim et al. 2016](https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002126479)

推荐食性字段只用 `herbivore`。政府页提到藻类与碎屑，但本种最强的物种级原始证据是微藻刮食；不要为了兼容“碎屑”而把它写成广义杂食者，更不能借用 Giant Mudskipper 捕食招潮蟹的资料。

## 繁殖洞穴、护卵与空气补给

福建福宁湾原始调查记录到 Y 形洞穴、两个泥面开口和膨大的产卵室。卵以附着丝粘在产卵室内壁和顶部，室内无水，雄鱼留在洞中护卵；两性都可筑洞，但该研究只在雄鱼洞中确认产卵室。[Hong et al. 2007](https://www.researchgate.net/publication/279699828_Reproductive_ecology_of_the_mudskipper_Bolephthalmus_pectinirostris)

有明海洞穴研究在夏季 90% 的样洞中找到空气，回收量 30 至大于 400 mL，氧分压约 5—20 kPa。成鱼能在低氧水中完全浸没 8 小时，而实验中的胚胎不能在低氧水里成功孵化；作者因此判断洞穴空气是胚胎发育的关键氧源，对高潮期成鱼呼吸仅起辅助作用。[Toba & Ishimatsu 2014](https://doi.org/10.1111/jfb.12324)

证据分三层写：

1. **可直接断言**：卵在空气产卵室发育，雄鱼护卵，洞内确有可测空气。
2. **可带限定词解释**：雄鱼很可能从地表吞气，再把空气带入产卵室补充。
3. **不可断言**：研究已经对本种每次运气、频率和单次气量完成直接水下录像；当前核心论文没有提供这种逐次行为量化。

## 威胁与保护行动

### 威胁

- 食用捕捞与局地高强度开发；IUCN 把实际或潜在开发纳入 A2d 判断。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en)
- 河口围垦、港口与岸线工程造成泥滩面积和连通性下降；日本局部调查记录了围垦后栖地大幅损失。[Takegaki et al. 2005](https://doi.org/10.11369/jji1950.52.9)
- 污染、富营养化和沉积物质量改变；中国河口保护区研究证实本种组织可累积多种痕量金属，但单点暴露不能自动推成全球数量下降。[Zhangjiangkou trace-metal study](https://pmc.ncbi.nlm.nih.gov/articles/PMC5067478/)
- 气候变化可能改变不同遗传谱系的适生区；模型对谱系给出的方向并不一致，不能写成“全球范围必然缩小”。[Wu et al. 2024](https://doi.org/10.3389/fevo.2024.1364822)

### 行动

- 对捕捞量、体长、季节和重要繁殖地实施地区化管理
- 长期监测标准化泥面密度、渔获努力量、补充群和洞穴占用率
- 保护河口泥滩、潮沟、红树林边缘和水文连通，恢复被切断或硬化的潮间带
- 控制工业、农业和城市污染，监测沉积物与食用组织污染物
- 在保护规划中保留不同地理谱系，不用单一养殖来源无差别放流

## 四个展示数字

```ts
featuredStats: [
  {
    key: 'max-length',
    label: '报告最大总长',
    value: '17.5',
    unit: '厘米',
    note: 'FishBase 的雄性或未判性最大记录；野外常见介绍为 10—15 厘米。',
  },
  {
    key: 'generation-length',
    label: '估算世代长度',
    value: '4.5',
    unit: '年',
    note: 'IUCN 评估采用的估算值，不是每尾鱼固定 4.5 岁繁殖。',
  },
  {
    key: 'selected-diatom-size',
    label: '选择摄食硅藻',
    value: '>50',
    unit: '微米',
    note: '香港单一泥滩研究中按硅藻最大长度统计的阈值，不代表全范围固定食谱。',
  },
  {
    key: 'burrow-air-volume',
    label: '洞穴回收气体',
    value: '30–>400',
    unit: '毫升',
    note: '日本有明海样洞实测范围；不是每个洞穴的标准容量。',
  },
],
```

## 六段故事与六图方案

| 序号 | 故事 | 画面 | 必须保留 | 证据边界 |
| --- | --- | --- | --- | --- |
| 01 封面 | 蓝点泥滩鱼 | 东亚河口退潮软泥，一尾成体侧前方肖像 | 高位眼、宽头、肉质胸鳍、两背鳍、分散浅蓝点 | 不用 Giant Mudskipper 的粗大体形，不画满身霓虹蓝 |
| 02 | 一套身体，两种介质 | 低机位侧视，鱼以胸鳍撑起身体，皮肤湿润 | 口咽—鳃盖与皮肤共同呼吸的文字解释 | 外观图看不到毛细血管，不能假装照片直接证明内部生理 |
| 03 | 共享泥滩 | 大弹涂鱼和弧边招潮蟹分处同一潮沟泥面 | 两者有空间间隔，各自活动 | 仅表示同地调查共现；不接触、不喂食、不写互利共生 |
| 04 | 刮过泥面的午餐 | 嘴贴近泥表刮食薄薄藻膜，留浅表摄食痕 | 硅藻/微型底栖藻类是核心 | 不把微藻画成巨型海草，不画它捕食蟹或小鱼 |
| 05 | 鳍撑与跃起 | 连续动作构图：胸鳍支撑爬行，雄鱼短促垂直跃起并竖背鳍 | 身体贴泥、胸鳍承重、两枚背鳍 | 跳跃可解释为求偶或短距移动，不画人腿和高速奔跑 |
| 06 | 泥下的空气室 | 科学剖面图：Y 形洞、顶部附着卵、空气产卵室、洞中成鱼 | 卵在空气室内壁/顶部，洞下部有水 | 剖面是解释图；不由静态图判定性别，不宣称直接拍到每次补气 |

建议文件名：

```text
01-mudflat-adult-portrait.webp
02-dorsal-fins-and-blue-spots.webp
03-mudflat-fiddler-crab-cooccurrence.webp
04-diatom-film-grazing.webp
05-short-mudflat-skip.webp
06-air-filled-egg-chamber-cutaway.webp
```

## 可直接落库的完整 `Species` 对象

```ts
{
  id: 'species-boleophthalmus-pectinirostris',
  slug: 'great-blue-spotted-mudskipper',
  names: {
    zh: '大弹涂鱼',
    en: 'Great Blue-spotted Mudskipper',
    aliases: ['花跳', '花条'],
  },
  scientificName: 'Boleophthalmus pectinirostris',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Actinopterygii', '辐鳍鱼纲'),
    taxon('Gobiiformes', '虾虎鱼目'),
    taxon('Oxudercidae', '背眼虾虎鱼科'),
    taxon('Boleophthalmus', '大弹涂鱼属'),
  ),
  conservation: conservation('VU', 'decreasing', 2024, 'A2bcd'),
  distribution: {
    realms: ['marine'],
    continents: ['亚洲'],
    regions: [
      '中国、台湾、朝鲜半岛与日本的河口潮间带',
      '越南北部与马来半岛的泥质河口',
      '印度尼西亚苏门答腊及邻近东印度洋边缘',
    ],
    countries: ['中国', '韩国', '日本', '越南', '马来西亚', '印度尼西亚'],
    range:
      '分布于东亚至东南亚西太平洋和东印度洋边缘的河口潮间带，以湿软泥滩、潮沟和红树林边缘为核心；在水与裸露泥面间往返，并利用泥洞度过高潮和繁殖。',
    center: { lat: 27, lng: 124 },
  },
  habitats: [
    {
      name: '河口开阔软泥潮滩',
      realm: 'marine',
      description: '退潮后活动与刮食的主要空间，泥面保持湿润并生长硅藻型微型底栖藻类。',
      isPrimary: true,
    },
    {
      name: '红树林边缘与潮沟湿泥',
      realm: 'marine',
      description: '富有机质、邻近浅水的软泥微生境，供个体活动、回水和躲避干燥。',
    },
    {
      name: '浅潮池与低盐水覆泥面',
      realm: 'marine',
      description: '鱼在空气与水之间往返的水域，也为幼鱼和浸水活动提供微生境。',
    },
    {
      name: '潮滩泥洞与空气产卵室',
      realm: 'marine',
      description: '高潮、夜间、越冬和繁殖使用的洞穴系统；空气室为附着在壁面和顶部的胚胎供氧。',
    },
  ],
  measurements: {
    length: {
      max: 17.5,
      unit: 'cm',
      note: 'FishBase 对雄性或未判性个体的最大总长记录；台湾野外资料常见 10—15 厘米。',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['底栖硅藻', '微型底栖藻类', '泥表有机藻膜'],
    description:
      '低潮时用宽口和具缺刻的下颌齿刮取泥表微型底栖藻类。香港泥滩研究显示它选择性摄食较大的硅藻，但食物组成会随地点、季节和体长改变。',
  },
  activity: [
    '低潮在湿泥表面刮食',
    '用肉质胸鳍支撑并划动爬行',
    '短距离跳跃与雄鱼求偶跃起',
    '在空气与浅水之间往返呼吸',
    '高潮或夜间退入泥洞',
    '雄鱼在空气产卵室护卵',
  ],
  tags: ['易危', '潮间带', '河口泥滩', '空气呼吸', '微藻刮食', '洞穴繁殖'],
  summary:
    '大弹涂鱼是东亚至东南亚河口泥滩上的两栖鱼类，以高位眼、肉质胸鳍和浅蓝斑点识别。它在低潮刮食泥表硅藻，并把卵留在泥洞的空气产卵室中。',
  description:
    '退潮让大弹涂鱼的生活空间从水下延伸到湿泥表面。它以胸鳍支撑身体，用湿润皮肤和富血管的口咽—鳃盖表面辅助空气呼吸；高潮则退回洞穴。它不是以蟹为食的 Giant Mudskipper，而是专门利用泥表微型藻类的刮食者。全球 IUCN 评估为易危，捕捞和河口生境退化仍在压缩种群。',
  storySections: [
    {
      key: 'blue-spotted-identity',
      label: '识别',
      title: '蓝点，而不是“巨型”',
      body: '宽钝头、高位眼、两枚背鳍和散落在青褐身体上的浅蓝点组成了它的识别线索。英文主名是 Great Blue-spotted Mudskipper；Giant Mudskipper 指另一种体形更大的 Periophthalmodon schlosseri。',
    },
    {
      key: 'amphibious-respiration',
      label: '呼吸',
      title: '皮肤与口咽表面都要保持湿润',
      body: '贴近表皮的毛细血管和富血管的口咽—鳃盖腔内衬让它离水后继续交换气体，鳃也没有退出这套系统。回到水洼和保持黏液湿润，是在潮滩活动的必要条件。',
    },
    {
      key: 'fin-supported-motion',
      label: '移动',
      title: '胸鳍撑起一条鱼',
      body: '肉质胸鳍像支点一样托住前半身，再以划动、爬行和短跃穿过软泥。繁殖期雄鱼还会竖起两枚背鳍垂直跃起；这里的“行走”不是四足动物式步态。',
    },
    {
      key: 'diatom-grazing',
      label: '食性',
      title: '一层看不见的硅藻草场',
      body: '它让嘴贴近泥面，刮取硅藻主导的微型底栖藻膜。香港研究发现它偏向摄食最大长度超过 50 微米的硅藻；这个数字属于特定泥滩实验，不是所有河口的固定菜单。',
    },
    {
      key: 'air-filled-nursery',
      label: '繁殖',
      title: '泥下的空气育儿室',
      body: '卵以附着丝粘在产卵室壁面和顶部，在空气中发育，雄鱼留洞护卵。样洞中的空气量从 30 到大于 400 毫升；雄鱼补气是证据支持的机制模型，但尚不能描述成逐次行为都被直接拍摄。',
    },
    {
      key: 'shared-mudflat',
      label: '保护',
      title: '与招潮蟹共享泥滩，不是互利共生',
      body: '调查可以在同一河口泥面记录大弹涂鱼和弧边招潮蟹，这只说明两者共域。保护潮沟、泥滩水文和沉积物质量能同时保留许多潮间带居民，却不代表鱼和蟹相互喂食或依存。',
    },
  ],
  keyFacts: [
    'Catalog 接受 Boleophthalmus pectinirostris，当前科级口径为 Oxudercidae。',
    'IUCN 2024 年评估为 VU A2bcd，当前趋势 decreasing。',
    '皮肤、口咽—鳃盖腔内衬和鳃共同参与水陆气体交换。',
    '低潮主要刮食泥表硅藻型微型底栖藻类。',
    '卵附着在无水产卵室壁面和顶部，雄鱼留洞护卵。',
    '与弧边招潮蟹的关系只能写同域共现，不能写互利共生。',
  ],
  threats: [
    '食用捕捞和局地过度开发导致的种群下降',
    '河口围垦、港口和岸线硬化造成泥滩丧失与破碎化',
    '工业、农业和城市污染改变沉积物与底栖藻类环境',
    '气候与水文变化对不同地理谱系适生区的差异化影响',
  ],
  conservationActions: [
    '管理捕捞季节、体长、渔获量与重要繁殖泥滩',
    '长期监测泥面密度、渔获努力、幼鱼补充和洞穴占用',
    '保护并恢复河口潮沟、软泥滩、红树林边缘及潮汐连通',
    '控制污染并监测沉积物和食用组织中的污染物',
    '保存不同地理谱系，避免未经遗传评估的跨区放流',
  ],
  metrics: {},
  featuredStats: [
    { key: 'max-length', label: '报告最大总长', value: '17.5', unit: '厘米', note: 'FishBase 雄性或未判性最大记录。' },
    { key: 'generation-length', label: '估算世代长度', value: '4.5', unit: '年', note: 'IUCN 评估采用值。' },
    { key: 'selected-diatom-size', label: '选择摄食硅藻', value: '>50', unit: '微米', note: '香港单一泥滩研究。' },
    { key: 'burrow-air-volume', label: '洞穴回收气体', value: '30–>400', unit: '毫升', note: '有明海样洞实测范围。' },
  ],
  media: {
    image: './images/species/great-blue-spotted-mudskipper/01-mudflat-adult-portrait.webp',
    alt: '一尾大弹涂鱼以肉质胸鳍撑在东亚河口的湿软泥面上，头和背鳍散布浅蓝斑点',
    focalPoint: { x: 0.64, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      { image: './images/species/great-blue-spotted-mudskipper/02-dorsal-fins-and-blue-spots.webp', alt: '大弹涂鱼侧身以胸鳍支撑身体，展示高位眼、两枚背鳍和湿润皮肤', title: '一套身体，两种介质', caption: '皮肤、口咽—鳃盖表面和鳃共同参与呼吸；外观图只展示相关形态。', focalPoint: { x: 0.5, y: 0.52 }, credit: 'Fauna Atlas · AI 生成原创图像' },
      { image: './images/species/great-blue-spotted-mudskipper/03-mudflat-fiddler-crab-cooccurrence.webp', alt: '大弹涂鱼与弧边招潮蟹分处同一片河口泥滩，彼此没有接触', title: '共享泥滩', caption: '同一调查地共现不等于互利共生。', focalPoint: { x: 0.62, y: 0.62 }, credit: 'Fauna Atlas · AI 生成原创图像' },
      { image: './images/species/great-blue-spotted-mudskipper/04-diatom-film-grazing.webp', alt: '大弹涂鱼把宽口贴近泥面刮食薄层微型底栖藻膜', title: '泥表硅藻草场', caption: '物种级研究支持以硅藻为主的微藻刮食。', focalPoint: { x: 0.55, y: 0.55 }, credit: 'Fauna Atlas · AI 生成原创图像' },
      { image: './images/species/great-blue-spotted-mudskipper/05-short-mudflat-skip.webp', alt: '大弹涂鱼以胸鳍支撑爬行，远处一尾雄鱼竖起背鳍短促跃起', title: '胸鳍支撑与求偶跃起', caption: '“行走”是胸鳍辅助移动，不是四足动物式步态。', focalPoint: { x: 0.49, y: 0.51 }, credit: 'Fauna Atlas · AI 生成原创图像' },
      { image: './images/species/great-blue-spotted-mudskipper/06-air-filled-egg-chamber-cutaway.webp', alt: '大弹涂鱼 Y 形泥洞剖面，空气产卵室顶部附着鱼卵，下方通道有水', title: '泥下空气育儿室', caption: '解释性剖面展示已知结构；雄鱼补气机制需保留推断边界。', focalPoint: { x: 0.5, y: 0.56 }, credit: 'Fauna Atlas · AI 生成原创图像' },
    ],
  },
  sources: [
    { title: 'Catalog of Fishes: Boleophthalmus species account', url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?genus=Boleophthalmus&tbl=species', kind: 'taxonomy', accessedAt: '2026-08-27' },
    { title: 'WoRMS: Boleophthalmus pectinirostris, AphiaID 279926', url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=279926', kind: 'taxonomy', accessedAt: '2026-08-27' },
    { title: 'FishBase: Boleophthalmus pectinirostris', url: 'https://www.fishbase.org/summary/15864', kind: 'general', accessedAt: '2026-08-27' },
    { title: 'IUCN Red List: Boleophthalmus pectinirostris', url: 'https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en', kind: 'conservation', accessedAt: '2026-08-27' },
    { title: 'A taxonomic revision and cladistic analysis of the oxudercine gobies', url: 'https://journals.australian.museum/media/Uploads/Journals/17704/93_complete.pdf', kind: 'taxonomy', accessedAt: '2026-08-27' },
    { title: '台湾国家公园署：大弹涂鱼', url: 'https://www.taiwan.nps.gov.tw/home/zh-tw/eco-gallery/21696.html', kind: 'general', accessedAt: '2026-08-27' },
    { title: '香港湿地公园：大弹涂鱼', url: 'https://www.wetlandpark.gov.hk/tc/biodiversity/beauty-of-wetlands/wildlife/boleophthalmus-pectinirostris', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Size-selective feeding by the mudskipper Boleophthalmus pectinirostris on microphytobenthos', url: 'https://doi.org/10.1007/s00227-003-1067-y', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Fine structure of the skin of the amphibious fishes Boleophthalmus pectinirostris and Periophthalmus cantonensis', url: 'https://doi.org/10.1002/jmor.1052140305', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Morphology of the respiratory vasculature of the mudskipper Boleophthalmus pectinirostris', url: 'https://doi.org/10.1002/jmor.21404', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Hemoglobin function and isoform differentiation in the facultative air-breathing fish Boleophthalmus pectinirostris', url: 'https://doi.org/10.1242/jeb.217307', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Reproductive ecology of the mudskipper Boleophthalmus pectinirostris', url: 'https://www.researchgate.net/publication/279699828_Reproductive_ecology_of_the_mudskipper_Bolephthalmus_pectinirostris', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Roles of air stored in burrows of the mudskipper Boleophthalmus pectinirostris for adult respiration and embryonic development', url: 'https://doi.org/10.1111/jfb.12324', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Habitat preference of the early juvenile mudskipper Boleophthalmus pectinirostris', url: 'https://doi.org/10.1111/j.1095-8649.2007.01723.x', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Territory characteristics and function of the mudskipper Boleophthalmus pectinirostris', url: 'https://doi.org/10.1017/S0025315407054434', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Age and growth of Boleophthalmus pectinirostris in the mudflat of the Ariake Sea', url: 'https://doi.org/10.1016/j.fishres.2005.04.005', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Distribution and conservation status of Boleophthalmus pectinirostris in Ariake and Yatsushiro sounds', url: 'https://doi.org/10.11369/jji1950.52.9', kind: 'conservation', accessedAt: '2026-08-27' },
    { title: 'Climate-change responses of genetic lineages of Boleophthalmus pectinirostris', url: 'https://doi.org/10.3389/fevo.2024.1364822', kind: 'conservation', accessedAt: '2026-08-27' },
    { title: '社子湿地生物资源调查', url: 'https://www-ws.gov.taipei/Download.ashx?icon=..pdf&n=56S%2B5a2Q5bO2LeeUn%2BaFi%2Biqv%2BafpeWgseWRii3nrKzkuIDmrKHloLHlkYoucGRm&u=LzAwMS9VcGxvYWQvMzQ0L3JlbGZpbGUvNDMyNzYvNzYwNDMwNi85OGNiZmVhYi00OTQ1LTQ3ZjUtYTc2Ni1lNDU0MDk3M2ExN2YucGRm', kind: 'distribution', accessedAt: '2026-08-27' },
  ],
  featured: true,
  publishedAt: '2026-08-27',
  updatedAt: '2026-08-27',
},
```

## 必须避免的错误断言

1. 不把英文主名写成 Giant Mudskipper；该名通常指 _Periophthalmodon schlosseri_。
2. 不把 WoRMS 旧页面的 Gobiidae 与 Catalog 当前 Oxudercidae 拼成两个并列科。
3. 不把评估发布年 2025 写成 `assessedYear`；正确值是 2024。
4. 不把 VU A2bcd 写成当前精确全球数量已知；IUCN 使用的是多类证据推断的下降。
5. 不把 `realms` 写成 terrestrial；离水活动是海岸潮间带生活史的一部分。
6. 不把 17.5 cm 当作普通成鱼标准体长，也不把日本样本年龄当成全球固定寿命。
7. 不写只靠皮肤呼吸、长有肺、离水后不用鳃，或搬用其他弹涂鱼的固定呼吸百分比。
8. 不画人腿、蛙腿或趾爪；“行走”是胸鳍支撑、划动和身体/尾部配合。
9. 不写捕食弧边招潮蟹、小鱼或昆虫；强物种级证据指向硅藻型微藻刮食。
10. 不把香港研究的 `>50 μm` 变成全球所有个体固定筛孔或唯一食物粒径。
11. 不把洞穴空气的存在改写成已逐次录像证明雄鱼补气频率与气量。
12. 不把同一地点记录到大弹涂鱼与弧边招潮蟹写成互利共生、协作或依存。
13. 不把局地养殖池的泥墙领地、单点污染或某一日本湾区衰退外推到整个分布区。
14. 不把气候适生区模型写成已经观测到的全球范围收缩；不同谱系预测方向不同。
