# 尼罗鳄（*Crocodylus niloticus*）物种档案研究

> 研究日期：2026-08-27
>
> 用途：支持 `species.ts` 内容、与恒河鳄的鳄目内科对照，以及 6 帧原创图片。
>
> 证据口径：分类采用权威分类数据库；自然史、行为和保护事实只采用鳄类专家组档案、官方区域评估及原始研究。IUCN 等级只作为产品状态字段，不把红色名录、CITES 或二手百科当作自然史证据。

## 结论摘要

- 接受名为 *Crocodylus niloticus* Laurenti, 1768，归入鳄科 `Crocodylidae`、鳄属 `Crocodylus`。旧资料曾把西非和中非多地的鳄都放在这个名字下；遗传研究恢复了独立种 *C. suchus*，中非和东北非部分记录仍需分子鉴定。([S01])([S03])([S04])
- 鳄类专家组 2019 物种档案记录全球等级为 LC，评估时间为 2017 年 4 月。仓库字段可写 `conservation('LC', 'stable', 2017)`；`stable` 是对评估叙述“全球种群未显著改变”的枚举映射，不能覆盖地方下降，`criteria` 留空。([S02])
- 可靠的全物种成体体长范围无法由一个统一抽样给出。可用的保守字段是历史最小筑巢雌性 2.18 米至罕见大型雄性 5.5 米，并在注释中明确两端来自不同性别和口径。体重、寿命、最高速度和全球成熟个体数留空。([S02])([S05])
- 雏鳄的食谱以水生昆虫和蛛形动物为主；随体型增加，甲壳类、两栖类和鱼类增多。奥卡万戈样本中最大体型组仍是亚成体，主要摄食鱼，不能外推成“所有成年尼罗鳄都以大型哺乳动物为主”。([S06])
- 尼罗鳄会挖穴筑巢、守巢、听到孵化叫声后开巢，并可用颊囊把幼体或未孵化卵送到水边。这个行为可与恒河鳄“守护但不口衔搬运”形成清楚对照。([S12])([S14])([S19])
- 全球 LC 与地方风险并存。南非官方区域评估为 VU；鳄类专家组同时指出多数分布国调查资料不足。图片和文案不应把 LC 画成“没有威胁”，也不能把单一地点的数量当作全球总数。([S02])([S18])

## 事实底稿

### 1. 分类、名称与物种边界

The Reptile Database 接受 *Crocodylus niloticus* Laurenti, 1768，并列入鳄目、鳄科、鳄属。页面仍列出五个名义亚种，但注明该亚种安排沿用 1977 年方案；现有遗传结构与流域分化不适合直接转换为产品亚种标签。([S01])

Hekkala 等检查 123 份现代样本和 57 份博物馆样本，识别出两个深度分化且互非姐妹群的非洲谱系。西部谱系恢复为西非圣鳄 *C. suchus*，东部谱系保留 *C. niloticus*。Velo-Antón 等随后确认纳米比亚、博茨瓦纳、马拉维和南非所采南部非洲样本均属于 *C. niloticus*，并发现从坦桑尼亚到南非及马达加斯加的遗传连续性；刚果盆地边界和乌干达共域区仍未充分取样。([S03])([S04])

实施边界：中文主名用“尼罗鳄”，英文名用“Nile Crocodile”，别名不写“非洲鳄”。页面不显示旧亚种名，也不把西非荒漠残存鳄群自动归入尼罗鳄。

### 2. 当前分布与生境

鳄类专家组 2019 档案列出 26 个分布国；The Reptile Database 后来明确排除赤道几内亚记录。可落库名单因此采用专家组名单减去赤道几内亚，共 25 国。该选择不代表每个国家都完成了全境遗传核验；埃塞俄比亚阿瓦什河的已检样本属于 *C. suchus*，中非部分流域仍存在鉴定空白。([S01])([S02])([S03])([S04])

分布核心覆盖东部和南部撒哈拉以南非洲、尼罗河上游与纳赛尔湖，以及马达加斯加。现存于河流、湖泊、水库、淡水沼泽、季节性湿地和河口；圣卢西亚研究还记录了高盐条件下的利用。盐水耐受不等于海洋专性，产品领域以 `freshwater` 和 `terrestrial` 为宜。([S02])

Calverley 与 Downs 在恩杜莫保护区追踪 50 只 2.02 至 4.72 米个体 18 个月。较大成体使用更大的重叠活动域，种群在保护区冬季水体与夏季里奥马普托河之间季节性移动。这项结果支持“连通河流、漫滩和季节水体共同构成生境”，不支持给全物种一个固定迁徙距离。([S11])

### 3. 保护等级、趋势与数字口径

鳄类专家组记录 2019 全球等级为 LC，最近评估发生在 2017 年 4 月，同时强调保护区内外威胁上升。评估叙述认为物种仍广布、全球种群没有显著改变，因此仓库枚举映射为 `stable`；这不表示每个地方种群稳定。LC 没有适用的受威胁判定标准码，`criteria` 应省略。([S02])

全球成熟个体数不宜落库。专家组判断只有南非调查资料达到“充分”，其他分布国普遍较差，中非尤其缺数据。南非官方区域评估为 VU A2ac，2017 年两处主要亚种群资料合计至少 5,389 只非初生个体；这个数字既不是南非完整总数，也不是全球成熟个体数。([S02])([S18])

20 世纪 40 至 70 年代的皮张猎捕使许多种群锐减；国家保护、贸易管理和部分可持续利用项目随后帮助一些地区恢复。自 1990 年代起，多地又出现地方性下降。产品应同时呈现全球等级、资料缺口与地方变化。([S02])

### 4. 体型、外形与咬合证据

尼罗鳄有明显性别体型差异。大型雄性可达 5.5 米，但今天已罕见；雄性通常在 2.9 至 3.3 米成熟。历史记录中最小筑巢雌性为 2.18 米，855 只筑巢雌性的均值为 3.185 米、范围 2.18 至 4.62 米。样本来自 1940 至 1949 年猎获记录，不能当作现代随机种群的“典型雌性”。([S02])([S05])

图像应使用鳄科式宽而结实的 V 形吻、厚躯干、低矮四肢和侧扁强尾。不要画成长而针状的恒河鳄吻，也不要给任何个体添加恒河鳄雄性的 `ghara`。

Erickson 等的活体咬合实验只测到两只尼罗鳄，体长 2.40 至 2.61 米、体重 86 至 87 千克，咬合力为 2,914 至 3,172 牛。研究的跨种分析显示咬合力主要随体重变化；这组小样本不能支持“尼罗鳄固定有 5,000 psi”或“动物界最强咬合”等物种级字段。([S09])

### 5. 触觉、水波与张口行为

Leitch 与 Catania 在尼罗鳄的颌部和全身鳞片上估算约 9,000 个皮肤感受器。单单位记录的低阈值中位数为 0.08 毫牛，快速适应单位对 20 至 35 赫兹振动反应最强；这些感受器参与探测水面扰动、接触时机和口中物体的细触觉。图像只能画真实的细小暗点，不能画发光节点、雷达波或电感应特效。([S07])

Grap 等只测试两只圈养幼体，发现它们能对 15 至 80 赫兹毛细水波作出条件反应；80 赫兹时报告的峰间阈值约 0.5 微米。该数字适合写进正文的实验注释，不宜做成无样本说明的通用能力值。([S08])

Price 等在南非野外观察 300 小时，记录 1,120 次张口。张口持续时间随气温升高而缩短、随邻近个体增加而延长，研究者据此提出温度调节和社会信号可能共同参与。图片中的张口个体不能只配“正在散热”或“正在威吓”的确定性说明。([S10])

### 6. 食性与发育变化

奥卡万戈三角洲研究对 286 只尼罗鳄进行胃灌洗，吻肛长 17 至 166 厘米，覆盖幼年到亚成体而非大型成体。初生年组主要吃水生昆虫和蛛形动物；较大幼体的食物增加甲壳类、两栖类和鱼；最大体型组主要吃鱼。冬季较大体型组空胃比例更高。([S06])

档案食性可写 `carnivore` 与 `piscivore`，并按体型列食物。大型脊椎动物和腐肉有记录，但现有跨地点定量资料不足，正文不把伏击大型哺乳动物写成日常主食，也不把尼罗鳄简化为“只吃鱼”。([S02])([S06])

### 7. 筑巢、孵化和亲代照护

雌鳄在年度干季于开阔沙岸挖穴筑巢。已发表的单窝极值为 14 至 95 枚；更适合比较的地方均值跨度约为 33 至 60.4 枚，例如图尔卡纳湖 33 枚（80 窝）、维多利亚湖 60.4 枚（775 窝）、南圣卢西亚 48.2 枚（92 窝）。窝卵数随雌性体型和地点变化，产品不要把“50 枚”写成固定值。([S02])([S05])

孵化期约 75 至 115 天，低温会延缓发育。Hutton 的恒温实验显示 28°C 约需 110 天、34°C 约需 85 天，并发现温度依赖性别决定；不同窝的雄性温区并不完全一致，野外巢温又会波动，所以不落库一个“决定性别的固定温度”。([S02])([S15])

Pooley 的圈养观察记录雌性受到孵化声刺激后开巢，并用颊囊把活幼体和未孵化卵送到水中。Vergne 与 Mathevon 的回放实验进一步显示，孵化前叫声能提高同窝胚胎活动并诱发母鳄挖巢。圣卢西亚四年相机研究得到 4,305 张照片，涉及 19 只守巢雌性；其中一次连续记录显示母鳄在 32.5 小时内往返巢与水面 13 次。圈养机制实验与野外相机记录应分别标注。([S12])([S14])([S19])

四只卫星标记雌性的地方研究显示，筑巢期平均活动域仅 0.85 公顷，非筑巢期比较值为 108.4 公顷；平均日移动从守巢期 213 米升至巢后 2,176 米。样本很小，适合说明守巢会压缩活动范围，不适合转成全物种移动指标。([S13])

### 8. 威胁与共存

主要威胁包括河流、湿地和河口的开发与破碎化，筑坝和异常放水导致的水文改变，农业、城市和矿业污染，刺网缠绕溺亡，诱饵钩、套索、毒杀和报复性捕杀，以及巢、卵和筑巢雌性的破坏。外来植物遮阴还可冷却巢址、提高胚胎死亡风险并改变性别比例。([S02])([S16])

Ezat 等在 2018 年沿纳赛尔湖调查 1,880 千米岸线，得到 192 次鳄类目击；检测概率在平坦岸线和渔民营地附近较高。结果表明人与鳄会集中使用同一类岸段，不能据此断言鳄导致渔获下降或主动靠近营地袭人。([S17])

保护行动应优先保留河流与漫滩连通、保护开放巢岸、控制污染与刺网死亡、统一夜间聚光调查和体型分级。人鳄共存措施包括有防鳄屏障的固定取水点、桥或码头、替代水井、风险教育，以及避免在岸边丢弃鱼废料。迁移个体可能归巢，单纯移走一只鳄不能替代取水设施和风险管理。([S02])

## 与恒河鳄的内容对照

| 对照点 | 尼罗鳄 | 恒河鳄页面应保持的边界 |
| --- | --- | --- |
| 科 | 鳄科 `Crocodylidae` | 长吻鳄科 `Gavialidae` |
| 吻部 | 宽而结实的 V 形吻 | 极长、极窄的食鱼型吻 |
| 食性 | 随体型扩展，亚成体地方样本以鱼为主 | 鱼类特化更强 |
| 幼体转移 | 可用颊囊含运幼体和卵 | 守护幼体但不口衔搬运 |
| 雄性结构 | 无 `ghara` | 大型成熟雄性具有 `ghara` |
| 保护叙事 | 全球 LC，地方下降且资料不均 | 全球 CR，恢复集中于少数河段 |

尼罗鳄侧的科级归属、吻部构图和口衔搬运分别由分类数据库、鳄类专家组及原始行为研究支持。恒河鳄侧沿用现有 [`gharial-profile.md`](./gharial-profile.md) 的证据边界，不在本档案重复引入二手材料。([S01])([S02])([S12])([S19])

## 六帧原创图像

### 共用科学约束

- 成体吻部宽而结实，整体呈 V 形；不要画成恒河鳄式细长针吻，也不要添加 `ghara`。
- 身体低伏，四肢短而外展，尾巴粗壮且侧扁；保留完整尾尖，避免多趾、背鳍、角、羽毛或恐龙式直立姿势。
- 眼和鼻孔位于头部上方；颌缘与身体鳞片的感受器只表现为细小暗点，不发光。
- 成体可用暗橄榄褐色，幼体有更明显的深色横带；不要把所有个体画成统一亮绿色。
- 不画攻击人、血腥撕咬、徒手接触、暴露精确巢位或密集动物园场景。

### 01 `01-river-sandbank-adult-source.png`

封面使用东非或南部非洲宽阔河道与开放沙岸，一只健壮成年雄鳄低伏晒背，完整身体和尾巴入画。个体应显得大型但不标称 5.5 米；该上限罕见且缺少画面尺度验证。([S02])

### 02 `02-ripple-sensory-hunt-source.png`

一只幼鳄贴近平静水面，前方只有由水下未知扰动形成的自然小涟漪，猎物不可见；近景可见颌缘细小感受器暗点。水波必须是物理涟漪，不加声呐圈、电流、红外或发光神经网络。([S07])([S08])

### 03 `03-social-gaping-source.png`

南非浅水岸边数只鳄分散晒背，一只自然张口，邻近个体保持距离。caption 写“张口持续时间同时受气温与邻近个体影响”，不确定为单一散热动作或威胁动作。([S10])

### 04 `04-seasonal-floodplain-movement-source.png`

季节性漫滩、河道和水潭形成连通镶嵌，一只无线电标记成鳄从浅水移向主河道；发射器尺寸克制、固定在背部，画面不出现地图虚线或夸张迁徙箭头。caption 只说明恩杜莫地方研究记录季节性空间转换。([S11])

### 05 `05-hatchling-mouth-transport-source.png`

母鳄在已打开的穴巢与浅水之间，颊囊内轻含恰好两只幼体；幼体姿势完整、可辨且无伤，母鳄没有咀嚼动作。此帧是与恒河鳄最重要的行为对照。圈养研究证实颊囊含运，野外相机记录证实巢水往返和幼体转移。([S12])([S19])

### 06 `06-protected-water-access-source.png`

共享湖岸设置固定取水平台或防鳄屏障，人留在设施一侧，远处水面只有一只鳄；不画追逐、袭击或捕杀。caption 说明平坦岸线和渔民营地附近检测率较高，设施是专家组建议的预防措施，不能写成已经由纳赛尔湖实验验证的万能方案。([S02])([S17])

## 不应落库的说法

- “尼罗鳄遍布整个尼罗河。”现今埃及可靠核心在纳赛尔湖，历史下尼罗河记录还混有 *C. suchus*。([S02])([S03])
- “西非所有大型鳄都是尼罗鳄。”西部谱系已恢复为 *C. suchus*，刚果盆地边界仍需采样。([S03])([S04])
- “成体通常长 5.5 米。”5.5 米是今天罕见的大型雄性上限。([S02])
- “一窝固定 50 枚卵。”已发表极值为 14 至 95 枚，地方均值约 33 至 60.4 枚。([S02])
- “孵化温度 32°C 就一定是雄性。”雄性温区随窝而异，野外巢温持续波动。([S15])
- “张口就是散热”或“张口就是威吓。”野外数据支持温度与社会环境共同影响。([S10])
- “咬合力固定为 5,000 psi。”尼罗鳄实测样本只有两只较小个体，咬合力随体重显著变化。([S09])
- “全球有 25 万至 50 万只，所以无需担心。”旧估算受分类拆分和调查缺口影响，不能填入成熟个体字段。([S02])([S03])
- “全球 LC 代表地方种群安全。”南非官方区域评估为 VU，多地存在下降和监测缺口。([S02])([S18])

## 来源索引

[S01]: https://reptile-database.reptarium.cz/Crocodylus/niloticus
[S02]: https://www.iucncsg.org/365_docs/attachments/protarea/7386996acf2d72b2379d0f905b2c3200.pdf
[S03]: https://doi.org/10.1111/j.1365-294X.2011.05245.x
[S04]: https://doi.org/10.1371/journal.pone.0226505
[S05]: https://doi.org/10.1111/j.1096-3642.1961.tb00220.x
[S06]: https://doi.org/10.1670/07-1071.1
[S07]: https://doi.org/10.1242/jeb.076836
[S08]: https://doi.org/10.1016/j.zool.2015.03.004
[S09]: https://doi.org/10.1371/journal.pone.0031781
[S10]: https://doi.org/10.1016/j.beproc.2022.104772
[S11]: https://doi.org/10.4102/koedoe.v57i1.1234
[S12]: https://doi.org/10.1016/j.beproc.2016.10.014
[S13]: https://doi.org/10.1016/j.beproc.2016.12.006
[S14]: https://doi.org/10.1016/j.cub.2008.04.011
[S15]: https://doi.org/10.1111/j.1469-7998.1987.tb07458.x
[S16]: https://doi.org/10.1016/S0006-3207(00)00177-4
[S17]: https://doi.org/10.1002/ece3.71970
[S18]: https://speciesstatus.sanbi.org/assessment/last-assessment/2680/
[S19]: https://doi.org/10.1111/j.1469-7998.1977.tb04137.x

## 可直接落库的字段建议

以下内容刻意不填体重、寿命、速度和全球成熟个体数。`adultLengthCm` 的两端分别是最小筑巢雌性记录和罕见雄性上限，适合筛选，不宜在 UI 中标成“典型成体范围”。([S02])([S05])

```ts
const NILE_CROCODILE_SOURCE_DATE = '2026-08-27' as const;
const NILE_CROCODILE_CONTENT_DATE = '2026-08-27' as const;

const NILE_CROCODILE_SOURCES = [
  {
    title: 'The Reptile Database — Crocodylus niloticus',
    url: 'https://reptile-database.reptarium.cz/Crocodylus/niloticus',
    kind: 'taxonomy',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group 2019 — Nile Crocodile species account',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/7386996acf2d72b2379d0f905b2c3200.pdf',
    kind: 'general',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Hekkala et al. 2011 — Mummy DNA resurrects a cryptic African crocodile species',
    url: 'https://doi.org/10.1111/j.1365-294X.2011.05245.x',
    kind: 'taxonomy',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Velo-Antón et al. 2019 — Phylogeography and population structure in southern Africa',
    url: 'https://doi.org/10.1371/journal.pone.0226505',
    kind: 'distribution',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Cott 1961 — Ecology and economic status in Uganda and Northern Rhodesia',
    url: 'https://doi.org/10.1111/j.1096-3642.1961.tb00220.x',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Wallace & Leslie 2008 — Diet in the Okavango Delta',
    url: 'https://doi.org/10.1670/07-1071.1',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Leitch & Catania 2012 — Integumentary sensory organs in crocodilians',
    url: 'https://doi.org/10.1242/jeb.076836',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Grap et al. 2015 — Sensitivity to water-surface waves',
    url: 'https://doi.org/10.1016/j.zool.2015.03.004',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Erickson et al. 2012 — Crocodilian bite-force experiment',
    url: 'https://doi.org/10.1371/journal.pone.0031781',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Price et al. 2022 — Wild gaping behaviour at Ndumo Game Reserve',
    url: 'https://doi.org/10.1016/j.beproc.2022.104772',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Calverley & Downs 2015 — Seasonal movements at Ndumo Game Reserve',
    url: 'https://doi.org/10.4102/koedoe.v57i1.1234',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Combrink, Warner & Downs 2016 — Nest predation and maternal care at Lake St Lucia',
    url: 'https://doi.org/10.1016/j.beproc.2016.10.014',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Combrink, Warner & Downs 2017 — Nest-site selection and female spatial ecology',
    url: 'https://doi.org/10.1016/j.beproc.2016.12.006',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Vergne & Mathevon 2008 — Crocodile egg sounds and hatching synchrony',
    url: 'https://doi.org/10.1016/j.cub.2008.04.011',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Hutton 1987 — Incubation temperature, sex ratios and development',
    url: 'https://doi.org/10.1111/j.1469-7998.1987.tb07458.x',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Leslie & Spotila 2001 — Alien plants and breeding habitat at Lake St Lucia',
    url: 'https://doi.org/10.1016/S0006-3207(00)00177-4',
    kind: 'conservation',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Ezat et al. 2025 — Crocodile occurrence near fishing camps at Lake Nasser',
    url: 'https://doi.org/10.1002/ece3.71970',
    kind: 'conservation',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'SANBI 2017 — Regional assessment for South Africa',
    url: 'https://speciesstatus.sanbi.org/assessment/last-assessment/2680/',
    kind: 'conservation',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
  {
    title: 'Pooley 1977 — Nest opening and buccal transport of young',
    url: 'https://doi.org/10.1111/j.1469-7998.1977.tb04137.x',
    kind: 'ecology',
    accessedAt: NILE_CROCODILE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

// IUCN compatibility field: LC / stable / 2017 / no criteria.
conservation: conservation('LC', 'stable', 2017),

distribution: {
  realms: ['freshwater', 'terrestrial'],
  continents: ['非洲'],
  regions: [
    '尼罗河上游与纳赛尔湖',
    '东非大裂谷湖群',
    '刚果盆地部分水系',
    '赞比西—奥卡万戈—林波波水系',
    '南部非洲河流、湿地与河口',
    '马达加斯加淡水湿地',
  ],
  countries: [
    '安哥拉', '博茨瓦纳', '布隆迪', '喀麦隆', '刚果民主共和国',
    '埃及', '厄立特里亚', '埃塞俄比亚', '加蓬', '肯尼亚',
    '马达加斯加', '马拉维', '莫桑比克', '纳米比亚', '刚果共和国',
    '卢旺达', '索马里', '南非', '南苏丹', '苏丹', '埃斯瓦蒂尼',
    '坦桑尼亚', '乌干达', '赞比亚', '津巴布韦',
  ],
  range:
    '现存分布以东部和南部撒哈拉以南非洲、尼罗河上游与纳赛尔湖及马达加斯加为主；中非和东北非部分记录仍需遗传核验，以排除西非圣鳄。',
  center: { lat: -10, lng: 28 },
},

measurements: {
  length: {
    min: 2.18,
    max: 5.5,
    unit: 'm',
    note: '下限是历史最小筑巢雌性记录，上限是今天罕见的大型雄性；不是典型成体范围',
  },
},

metrics: {
  adultLengthCm: [218, 550],
},

featuredStats: [
  {
    key: 'rare-male-length',
    label: '罕见大型雄性上限',
    value: '5.5',
    unit: '米',
    note: '今天已罕见，不代表典型成体',
  },
  {
    key: 'mean-clutch-range',
    label: '地方平均窝卵数',
    value: '33–60',
    unit: '枚',
    note: '多个地点的均值跨度；已发表单窝极值为 14–95',
  },
  {
    key: 'incubation-days',
    label: '孵化期',
    value: '75–115',
    unit: '天',
    note: '随温度变化，低温发育较慢',
  },
  {
    key: 'sensory-organs',
    label: '皮肤感受器',
    value: '约 9,000',
    unit: '个',
    note: '解剖研究对颌部与全身鳞片的估算',
  },
],

// Six source-frame filenames. Runtime derivatives use the same stem without "-source".
const NILE_CROCODILE_SOURCE_FRAMES = [
  '01-river-sandbank-adult-source.png',
  '02-ripple-sensory-hunt-source.png',
  '03-social-gaping-source.png',
  '04-seasonal-floodplain-movement-source.png',
  '05-hatchling-mouth-transport-source.png',
  '06-protected-water-access-source.png',
] as const;
```
