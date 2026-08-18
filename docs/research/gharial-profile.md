# 恒河鳄（*Gavialis gangeticus*）资料核查与内容建议

- 研究对象：恒河鳄 / Gharial / *Gavialis gangeticus*
- 访问日期：2026-08-18
- 用途：为 `src/data/species.ts` 的物种档案、长文内容、统计字段和 6 张科学叙事图提供可追溯依据
- 证据标准：优先采用 IUCN、CITES、政府机构、IUCN/SSC 鳄类专家组，以及同行评议原始研究；新闻、百科和商业动物网站不作为结论来源

## 结论摘要

1. 当前 IUCN 档案应写为 `CR / increasing / assessedYear: 2017 / A2bce`。评估完成于 2017-12-30、发布于 2019；`increasing` 是该次全球评估的数据库趋势字段，不代表每条河流或全部威胁都在好转。现有 `decreasing` 与 `A2bcde+4bcde` 均应纠正。([S01])([S02])
2. IUCN 的 300–900 只（中位数约 650）是基于 2010–2017 年资料推得的全球**成熟个体**估计；地方研究中的“全部体型计数”或“全长超过 3 米的成体级”不是同一口径，不能相加或直接替换。([S01])([S13])
3. 主要自持繁殖种群仍在印度和尼泊尔。孟加拉国 2018–2025 年出现幼体、亚成体与成体记录，但本地繁殖还是上游扩散尚未确定；巴基斯坦 2023 年以后亦有再发现报告，尚不足以证明稳定繁殖种群。故 2026 年内容可把印度、尼泊尔、孟加拉国、巴基斯坦列入现存记录国家，同时在 `range` 中明确证据等级。([S01])([S14])([S15])([S16])
4. 恒河鳄是高度水栖、长吻食鱼特化的鳄类。常见成体约 3.5–4.5 米，大型雄性可超过 6 米；没有足够一致的野外成体体重资料支持当前 `160–250 kg` 范围，因此应暂时删除体重与寿命数值。([S07])([S08])
5. `ghara` 是大型成熟雄性吻端、围绕外鼻孔形成的软组织/软骨性结构，不是骨角，也不会像气球那样充气。它很可能兼具性别展示和声学作用，但“放大求偶声”仍不是已验证机制。([S08])([S09])
6. 2025 年声学研究确认成年雄性会在水下发出短促 `POP` 信号；研究记录的情境主要是警戒与巡游，不应把所有 `POP`、吐气或气泡一概写成求偶。([S09])
7. 雌性在沙岸挖穴产卵并守巢、开巢，但不会像许多其他鳄类一样用嘴把幼体搬到水边；多个巢的幼体可组成托儿群，由雌性及通常一只大型雄性守护。([S01])([S11])
8. 保护重点不能只写“人工繁育放归”。坝闸、水量调控与抽取、渔网死亡、采砂/采石和河岸扰动仍是核心问题；超过 6,000 只的历史育幼放归因缺少统一标记与长期追踪，其总体成效仍难量化。([S01])

## 事实底稿

### 1. 分类与名称

- 接受名为 *Gavialis gangeticus* (Gmelin, 1789)，属于鳄目 Crocodylia、长吻鳄科 Gavialidae、恒河鳄属 *Gavialis*；Reptile Database 未列出现生亚种。([S03])
- 可将它称为“现生唯一的 *Gavialis* 属物种”，但不要写“长吻鳄科唯一现生成员”：当前 Reptile Database 也把马来鳄 *Tomistoma schlegelii* 放在 Gavialidae。([S03])([S04])
- `Gharial` 来自成年雄性鼻端突起与南亚壶形器皿 `ghara` 的相似；该词指结构外形，不说明结构功能。([S07])
- 图像和文案必须避免与马来鳄/假长吻鳄混淆：恒河鳄的吻部更长、更狭窄，且成熟雄性具有 `ghara`。([S03])([S08])

### 2. 历史与当前分布

- 历史上它广布于印度河、恒河、布拉马普特拉河及默哈讷迪—布拉马尼等水系，合计占据的线性河段曾超过 20,000 千米；IUCN 估计历史分布范围面积超过 80,000 平方千米。([S01])
- 缅甸伊洛瓦底江和印度半岛戈达瓦里—因德拉瓦蒂河的历史记录证据稀少、含混或缺失，只能写“可能曾分布”，不能画成确定分布。([S01])
- IUCN 的 2017 评估把物种压缩为印度北部和尼泊尔低地 14 个相互分隔的地点，其中 5 个地点有近期繁殖；估算现存占据面积约 4,400 平方千米，相对历史值减少约 94%。这是**评估时点快照**，不是 2026 年固定地点清单。([S01])
- 2017 评估将印度、尼泊尔、孟加拉国列为原生现存国，将不丹、缅甸、巴基斯坦列为区域灭绝；随后资料改变了孟加拉国和巴基斯坦的现状理解。([S01])
- 孟加拉国 2018–2025 年参与式监测在帕德玛河约 100 千米河段记录 12 只：8 只误捕和 4 只直接观察，包含幼龄、初生及成体；作者明确认为这些记录既可能来自局地补充，也可能是上游扩散，现阶段无法二选一。([S14])
- 巴基斯坦 2023 年苏特莱杰河的初步调查报告直接观察 8 只幼体与 2 只成体，后续 2025 年调查亦支持再发现并提出可能跨境迁入；因调查范围小、繁殖证据仍初步，不宜宣称“巴基斯坦种群已经恢复”。([S15])([S16])
- 印度格哈格拉河 2023 年 100 千米调查观察 84 只，与 2021 年下游调查合计为 219 千米、258 只；调查未发现雄性或巢，论文明确称尚无确凿繁殖证据，可能与上游吉尔瓦种群的下游扩散有关。([S12])

**推荐地图口径：**主视觉聚焦恒河流域北印度—尼泊尔低地；印度、尼泊尔用“主要自持/繁殖种群”，孟加拉国、巴基斯坦用“近期记录、繁殖状态未定”，不丹和缅甸用“历史分布/区域消失”。该表达同时容纳 IUCN 评估与评估后的原始记录。([S01])([S12])([S14])([S15])([S16])

### 3. IUCN 状态、年份、标准与趋势

| 字段 | 推荐值 | 证据边界 |
| --- | --- | --- |
| 状态 | `CR`（极危） | IUCN 2019 发布、评估日期 2017-12-30。([S01]) |
| 标准 | `A2bce` | 依据直接观察/丰度指数、占据面积或生境质量下降，以及污染物或其他外部因素导致的既往下降；不要沿用旧字段。([S01]) |
| 趋势 | `increasing` | IUCN 数据库字段；主要受昌巴尔大型种群恢复影响，不代表全部亚种群同步上升。([S01]) |
| 成熟个体 | 300–900，中位数约 650 | 基于 2010–2017 年调查推估；不是 2026 年实时普查。([S01]) |
| 世代长度 | 25 年 | 是 generation length，不是寿命；不得写进 `lifespanYears`。([S01]) |
| 严重破碎 | 是 | 14 个相隔很远的地点，多数规模小且缺少繁殖。([S01]) |

“极危”与“增长”并不矛盾：A2 标准回看约 3 个世代的巨大历史衰退，当前趋势则描述评估时最近阶段的总体方向；同期坝闸、渔网、采砂和水量下降仍持续。([S01])

### 4. 种群数字必须分口径

| 数字 | 空间/时间 | 实际口径 | 可否写进全球 `estimatedMatureIndividuals` |
| --- | --- | --- | --- |
| 300–900（中位数 650） | 全球；资料主要为 2010–2017 | IUCN 推估的成熟个体 | **可以**，但必须标注评估年份。([S01]) |
| 1,512 → 1,857 | 昌巴尔国家保护区；2017–2019 | 425 千米昌巴尔河及 60 千米帕尔巴蒂河的冬季船载直接计数，含全部体型 | **不可以**；这是地方、全龄计数。([S13]) |
| 919 → 1,116 | 同上 | 研究按可见全长 `>3.0 m` 划为 `adult` 的体型级，而非 IUCN 严格成熟个体鉴定 | **不可以**；3–4 米无 `ghara` 的个体可能混入未成熟雄性。([S01])([S13]) |
| 486 个巢 | 昌巴尔；2019 | 巢数/繁殖努力指标，不是雌性总数或成熟个体总数 | **不可以**。([S13]) |
| 148 → 228 | 尼泊尔奇特旺；2017/18–2021/22 | 年度冬季观察总数；拉普蒂河上升，纳拉亚尼河不均匀 | **不可以**；是地方观察数。([S10]) |
| 258 | 印度格哈格拉河；2021+2023 两段调查 | 219 千米内全部体型合计，且未证实当地繁殖 | **不可以**。([S12]) |

IUCN 还指出，船载计数通常比固定点计数低 25%–40%；目视把 3–4 米且无 `ghara` 的动物判为“成年雌性”会混入亚成体雄性，巢数也受雌性是否每年产卵影响。故站点之间数字若未统一方法，不能直接做排行榜或简单求和。([S01])

### 5. 形态与尺寸

- 最醒目的诊断特征是极长而狭窄的吻部；每侧上颌 27–29 枚牙、下颌 25–26 枚牙，多数牙齿大小较均一，适于快速夹住鱼。([S03])
- 2020 年形态研究把“较常见成体”概括为约 3.5–4.5 米，并引用 6.25 米的历史最大雄性；鉴于后者来自历史记录，页面宜写“常见成体约 3.5–4.5 米，大型雄性可超过 6 米”，而不是暗示所有雄性都接近 6 米。([S08])
- 雄性总体大于雌性；鳄类专家组资料把雌性约 3 米作为达到性成熟的常用尺度，野外研究也常以全长大于 3 米划入成体体型级，但体型级不等同于逐只确认性成熟。([S07])([S13])
- 当前档案的 `160–250 kg` 和 `40–60 年` 未获这些核心来源支持；不同性别、地点和测量方式会产生很大差异，建议把 `weight`、`adultMassKg`、`lifespanYears` 留空。([S07])([S08])
- 恒河鳄高度水栖，成体陆上高抬行走能力弱；图像应表现游泳、浅水停驻、沙岸晒背或贴近地面的移动，不要表现成能长距离奔跑或高步态追猎的鳄类。([S07])

### 6. 栖息地与移动

- 核心生境是有连续水流的中大型永久性河流，包含深水区、较缓水段、岸边浅水和季节性裸露沙洲；沙洲用于晒背、交配聚集和挖穴筑巢。水库只能算部分地点在坝闸改变河流后的次生环境，不应成为代表性主生境。([S01])([S07])([S18])
- 奇特旺 2017–2022 年调查中，拉普蒂河 90%、纳拉亚尼河 99% 的观察个体使用沙质岸边；高扰动、采砂较强的河段观察率更低。([S10])
- 吉尔瓦河 2010 年河道改变后主流量减少、沙洲逐渐被木本植被占据，巢址与巢数到 2018 年下降超过 40%，说明“有水”并不等于有合适繁殖生境。([S18])([S19])
- 人工补沙在一个受调控河流—水库地点使巢数由 2018 年 25 个增至 2020 年 36 个、观察到的孵化成功率提高；原论文同时强调这是临时、局地手段，不能替代恢复季节性洪水和流量过程。([S19])
- 昌巴尔成体会进行 50–200 千米以上的季节移动；放归的非定居个体甚至曾移动超过 1,000 千米。地图与保护叙事应以连通河流走廊而非孤立“保护点”表达。([S01])

### 7. 食性

- 恒河鳄是高度特化的食鱼动物，鱼应是 `foods` 的第一项和文案主语；长而窄的吻部和多数大小相近的尖牙与快速夹持鱼类相适应。([S03])([S07])([S08])
- 鳄类专家组资料记载昆虫、蛙类和其他小动物也会被取食，尤其可用于描述幼体/小个体；大型个体偶有其他猎物报道，但缺少可用于全物种比例的定量野外食谱研究。([S07])
- 半自然条件下的行为观察记录到：捕食多从水下静止姿态开始，头和前颈快速向侧上方摆动，躯干移动较少；捕获后才用甩头调整并头先吞咽。这是第 04 帧动作边界的直接依据。([S25])
- 因此可以写“以鱼为主，幼体也取食昆虫、蛙类和其他小型动物”，不要写“只吃鱼”，也不要把甲壳类、两栖类写成与鱼同等重要的成体主食。([S07])
- 不应安排猎杀鹿、牛、人或进行典型大型鳄类“死亡翻滚”的主视觉；现有高可信资料支持的是长吻、低阻力、迅速侧摆/闭颌夹鱼，而非擒获大型陆生猎物。([S03])([S07])

### 8. `ghara`、气泡与发声

- `ghara` 只见于较大、推定成熟的雄性。2020 年对 106 件标本的研究发现，支撑 `ghara` 的鼻窝随体型呈强正异速生长，支持它是雄性社会—性展示结构；这仍是功能推断，不是繁殖成功的直接实验。([S08])
- 它是覆盖并围绕单一外鼻孔生长的软组织/软骨性突起，由吻端骨面凹陷支撑；不是骨质角、独立花瓶、双鼻孔塞，也不会像气囊一样鼓起。([S08])([S09])
- 2025 年研究在昌巴尔河 115 千米河段、2017–2019 三个繁殖季记录 7 只野生成熟雄性的 130 次 `POP`；信号持续约 11–55 毫秒，具个体差异，并可被水中和岸上的同类感知。([S09])
- 研究中 `POP` 出现在 `ALERT`（警戒/提示）和 `PATROL`（领地巡游）情境，并与呼气、吸气、下潜及气泡构成复合展示；不能把它简化为单一“求偶叫声”。([S09])
- “`ghara` 放大声音”是历史上提出的共鸣/声道修饰假说；新研究仍未把具体声源机制完全验证。现有描述应改为“与雄性的视觉和声学展示相关，具体机制仍在研究”。([S08])([S09])

### 9. 繁殖与亲代行为

- 干季约 2 月中旬进入求偶与交配，3 月中旬至 4 月初在临水沙岸挖穴产卵；孵化约 2–2.5 个月，多在 5 月下旬至 6 月中旬出壳，具体日期随地点与年份变化。([S01])
- IUCN 概括平均每窝约 40 枚；鳄类专家组物种资料给出通常 30–50 枚。奇特旺 2001–2017 年 151 个巢的样本均值为 32.3 枚，因此页面用“通常约 30–50 枚，常用概括约 40 枚”比当前“30–60”更可追溯。([S01])([S07])([S17])
- 奇特旺 17 年资料的平均产卵日为 3 月 31 日、平均孵化期 76 天、平均孵化成功率 60.5%；这些卵被转移到场外设施人工孵化，因此 60.5% 不能标成未经管理的野巢自然成功率。([S17])
- 雌性会守巢并在孵化时打开巢穴，但不会用嘴把幼体搬到水边；图像不可画成把幼体安全含在长吻中。([S01])([S07])([S11])
- 多个巢的幼体会合并为数百只甚至更多的托儿群，雌性和通常一只大型雄性可守护 1–2 个月，随后随季风水位上涨而分散。([S01])
- 昌巴尔曾直接观察幼体爬上约 5 米雄性的吻、背和尾；这是有照片支持的地点性行为记录，可作为一张图的灵感，但不得写成“所有父鳄都会背幼体”或“雄性一定是亲生父亲”。([S21])

### 10. 威胁

- **坝、拦河闸与抽水：**改变季节水文、阻断上下游移动、淹没或植被化沙洲，并把种群切割成小群；这是跨流域的首要结构性威胁。([S01])([S12])([S18])
- **渔网与渔具：**单丝刺网等会使幼体、亚成体乃至繁殖雄性溺亡或受伤；奇特旺研究把非法刺网误捕列为观察到的主要死亡来源，孟加拉国近期记录也大量来自渔网误捕。([S01])([S10])([S14])
- **采砂、采石和河岸占用：**直接移除筑巢/晒背基质，农业、放牧和人类接近还会增加干扰；影响在昌巴尔、奇特旺和格哈格拉研究中均有记录。([S01])([S10])([S12])([S13])
- **历史捕杀与采卵：**皮张捕猎曾推动历史衰退，部分地区还存在为食物或传统药用采卵；当前商业捕猎不再被 IUCN 视为主要威胁，但不等于从未发生。([S01])
- **污染/大规模死亡的因果边界：**昌巴尔曾发生 110 只以上恒河鳄死亡，病理与痛风、肾衰有关；具体毒物、污染源或罗非鱼是否致病并未得到证实，不能写成确定因果。([S01])
- **小而孤立的亚种群：**多数地点繁殖少或没有确认繁殖，单只成熟雄性损失、闸坝单向通行或一处巢滩消失都可能造成不成比例的影响。([S01])([S10])([S12])

### 11. 保护现状与可行行动

- *Gavialis gangeticus* 列入 CITES 附录 I，官方名录历史显示自 1975-07-01 起列入；这是国际贸易管制身份，不等同于 IUCN 风险等级。([S05])([S06])
- 印度 2025 年官方爬行动物名录把它列为《野生动物（保护）法》2022 修订框架的 Schedule I，并列出 CITES I、IUCN CR。([S22])
- 印度环境、森林与气候变化部 2025–26 年年度报告称恒河鳄已纳入中央资助的 Species Recovery Programme，以支持各邦/中央直辖区的物种及栖息地保护。([S23])
- 尼泊尔政府的《Gharial Conservation Action Plan 2018–2022》提出研究监测、降低原地人为压力、维持迁地保育与规范放归等目标；该计划期已结束，2026 年页面只能称“2018–2022 行动计划”，不可称“现行五年计划”。([S20])
- 印度和尼泊尔历史上已育幼放归 6,000 只以上；部分地点可能因早期补充而稳定或增加，但统一标记和系统随访不足，其他河段反复放归也未形成可见恢复，因此不能把“放归数量”当作“成功数量”。([S01])([S24])
- 局地补沙、巢址巡护和人工孵化可解决特定瓶颈，但长期行动必须同时维护自然流量、河道连通、开放沙洲、渔业协作、跨境监测及社区参与。([S01])([S12])([S19])([S20])

## 现有字段审计

| 现有内容 | 问题 | 建议 |
| --- | --- | --- |
| `conservation('CR', 'decreasing', 2017, 'A2bcde+4bcde')` | 与当前 IUCN 档案不符。([S01]) | 改为 `conservation('CR', 'increasing', 2017, 'A2bce')`。 |
| 国家仅印度、尼泊尔 | 漏掉孟加拉国近期持续记录和巴基斯坦评估后再发现。([S14])([S15])([S16]) | 列 4 国，在 `range` 明确后两国繁殖状态未定。 |
| “少数未被截断的大河河段” | 昌巴尔相对开放，但许多现存点受坝闸/水库影响；表述过于整齐。([S01]) | 改为“主要自持繁殖种群在印度、尼泊尔少数河段，其他记录零散且部分受坝闸分隔”。 |
| `weight: 160–250 kg`、`lifespanYears: 40–60` | 核心来源不能支持为通用野外成体范围。([S07])([S08]) | 删除，待专门形态/寿命数据。 |
| “ghara 能放大求偶声，也会在吐气时产生气泡” | 把假说写成机制，且把情境窄化为求偶。([S08])([S09]) | 改为“与雄性的视觉和声学展示相关；可伴随呼吸和气泡，具体发声机制仍未完全解释”。 |
| 每窝 `30–60` | 有可能覆盖个别窝，但最可追溯的综合口径是约 40、通常 30–50；奇特旺均值 32.3。([S01])([S07])([S17]) | 采用“通常约 30–50 枚，常用概括约 40 枚”。 |
| `甲壳类`、`两栖动物` 与鱼并列 | 野外定量比例不足，容易弱化高度食鱼特化。([S07]) | 明确“鱼类为主”，其他小动物放在幼体/偶见限定下。 |
| “主要现存国家 2 个” | 只有把“主要自持繁殖国”定义为统计对象时才成立；作为现存记录国家不成立。([S14])([S15])([S16]) | 删除该统计，换成成熟个体估计、世代长度或历史占据面积下降。 |
| 泛用 IUCN 搜索 + GBIF 搜索 | 不能支撑物种专有行为、种群和图像约束。 | 换成下列专用 `SpeciesSource[]`。 |

## 推荐的物种专用 `SpeciesSource[]`

下面的数组只使用权威机构、官方文件和原始研究，可直接放入 `species.ts`。`SourceKind` 只有仓库现有的五类，因此保护法规和管理研究统一归入 `conservation`。

```ts
const GHARIAL_SOURCE_DATE = '2026-08-18' as const;
const GHARIAL_CONTENT_DATE = '2026-08-18' as const;

const GHARIAL_SOURCES = [
  {
    title: 'IUCN Red List — Gavialis gangeticus (2017 assessment; 2019 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T8966A149227430.en',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database — Gavialis gangeticus',
    url: 'https://reptile-database.reptarium.cz/species?genus=Gavialis&species=gangeticus',
    kind: 'taxonomy',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'CITES — History of CITES listings',
    url: 'https://cites.org/sites/default/files/eng/resources/pub/checklist11/History_of_CITES_listings.pdf',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC Crocodile Specialist Group — Gharial species account',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/23_G-6764939a.pdf',
    kind: 'general',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Hone et al. 2020 — Ontogeny of the male ghara and sexual dimorphism',
    url: 'https://doi.org/10.7717/peerj.9134',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Ajji & Lang 2025 — Male-specific underwater POP signals',
    url: 'https://doi.org/10.1111/joa.14171',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Thorbjarnarson 1990 — Notes on feeding behavior of gharials',
    url: 'https://doi.org/10.2307/1564301',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khadka et al. 2020 — Seventeen years of nesting ecology in Chitwan',
    url: 'https://doi.org/10.1655/Herpetologica-D-19-00038.1',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khadka et al. 2024 — Spatially uneven population change in Chitwan',
    url: 'https://doi.org/10.17161/randa.v31i1.21018',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Vashistha et al. 2024 — Status in the upper Ghaghara River',
    url: 'https://doi.org/10.1017/S0030605323001485',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Sharma et al. 2025 — Population trend in National Chambal Sanctuary',
    url: 'https://doi.org/10.1002/ece3.72643',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Kashmi et al. 2026 — Occurrence in the Lower Ganges of Bangladesh',
    url: 'https://doi.org/10.17017/j.fish.1261',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khalid et al. 2023 — Rediscovery in Punjab, Pakistan',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/e5a83965a9969ec6121b78fed635e3e7.pdf',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Khan et al. 2025 — Follow-up survey of gharial rediscovery in Pakistan',
    url: 'https://www.wildlife-journal.org/wp-content/uploads/Rediscovery-of-Gavial-in-Pakistan-1.pdf',
    kind: 'distribution',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Vashistha et al. 2021 — Reduced flow and vegetation limit reservoir nesting',
    url: 'https://doi.org/10.1038/s41598-021-84143-7',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Vashistha et al. 2021 — Sand addition promotes nesting',
    url: 'https://doi.org/10.1002/2688-8319.12068',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Nepal DNPWC 2018 — Gharial Conservation Action Plan 2018–2022',
    url: 'https://dnpwc.gov.np/content/97/gharial-conservation-action-plan--2018-2022-/',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Acharya et al. 2017 — Conservation and population recovery in Nepal',
    url: 'https://doi.org/10.1655/Herpetologica-D-16-00048.1',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Bustard 1980 — Maternal care in the gharial',
    url: 'https://www.thebhs.org/publications/british-journal-of-herpetology/4163-volume-6-number-2-june-1980/file',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'IUCN/SSC CSG 2016 — Direct observation of male care and hatchling riding',
    url: 'https://www.iucncsg.org/365_docs/attachments/protarea/daf68c23d4e8447d7b2083a3b59931d5.pdf',
    kind: 'ecology',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'Zoological Survey of India 2025 — Checklist of Indian reptiles',
    url: 'https://zsi.gov.in/uploads/documents/checklist/english/119_Reptilia_V2_2025.pdf',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
  {
    title: 'India MoEFCC 2025–26 Annual Report — Species Recovery Programme',
    url: 'https://moef.gov.in/uploads/pdf-uploads/Nitin_Rev_4.pdf',
    kind: 'conservation',
    accessedAt: GHARIAL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的字段建议

以下是内容片段，不包含媒体路径；图片尚未生成时只更新 `alt`，不要先写不存在的文件。

```ts
names: {
  zh: '恒河鳄',
  en: 'Gharial',
  aliases: ['食鱼鳄'],
},
scientificName: 'Gavialis gangeticus',
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Reptilia', '爬行纲'),
  taxon('Crocodylia', '鳄目'),
  taxon('Gavialidae', '长吻鳄科'),
  taxon('Gavialis', '恒河鳄属'),
),
conservation: conservation('CR', 'increasing', 2017, 'A2bce'),
distribution: {
  realms: ['freshwater', 'terrestrial'],
  continents: ['亚洲'],
  regions: [
    '恒河水系与北印度支流',
    '昌巴尔河',
    '吉尔瓦—格哈格拉河',
    '纳拉亚尼—拉普蒂河',
    '帕德玛—布拉马普特拉河',
    '苏特莱杰河',
  ],
  countries: ['印度', '尼泊尔', '孟加拉国', '巴基斯坦'],
  range:
    '主要自持繁殖种群集中在印度和尼泊尔少数河段；孟加拉国与巴基斯坦近年有重复记录，但是否存在稳定本地繁殖种群仍待系统监测。',
  center: { lat: 26.6, lng: 80.6 },
},
habitats: [
  {
    name: '中大型永久性河流',
    realm: 'freshwater',
    description:
      '依赖连通、有季节流量变化的河道，并在深水、缓流、浅岸和开阔水面之间移动。',
    isPrimary: true,
  },
  {
    name: '深水区与岸边浅水',
    realm: 'freshwater',
    description:
      '深水提供水栖活动与避难空间，临近沙岸的浅水供晒背、幼体停留和托儿群使用。',
  },
  {
    name: '季节性裸露沙洲与沙岸',
    realm: 'terrestrial',
    description:
      '干季沙洲用于晒背、求偶聚集和挖穴筑巢；采砂、植被侵入及异常水位会迅速降低适用性。',
  },
],
measurements: {
  length: {
    min: 3,
    max: 6,
    unit: 'm',
    note: '雌性约 3 米达到性成熟；较常见成体约 3.5—4.5 米，超过 6 米属于大型雄性上限',
  },
},
diet: {
  types: ['carnivore', 'piscivore'],
  foods: ['淡水鱼类（主食）', '昆虫等小型无脊椎动物（幼体）', '蛙类及其他小型动物（有记录）'],
  description:
    '极长而狭窄的吻部降低侧向摆动的水阻，多数大小相近的尖牙适于迅速夹住鱼；幼体也会取食昆虫、蛙类和其他小型动物。',
},
activity: ['高度水栖', '日间晒背', '季节性长距离移动', '干季筑巢', '幼体托儿群'],
tags: ['南亚大河', 'IUCN 极危', '食鱼特化', '成熟雄性 ghara', 'CITES 附录 I', '淡水旗舰物种'],
summary:
  '以极长窄吻捕捉鱼类、依赖连通大河和裸露沙洲，并由成熟雄性长出 ghara 的南亚极危鳄类。',
description:
  '恒河鳄几乎把一生交给河流：长而狭窄的吻部适合在水中迅速夹鱼，成体上岸主要为了晒背和繁殖。大型成熟雄性吻端会形成壶状 ghara，并能在水下发出短促 POP 信号；该结构与视觉和声学展示相关，但具体发声机制仍在研究。IUCN 评估记录的总体趋势为上升，主要种群却仍高度破碎，坝闸、渔网、采砂和河岸扰动持续威胁繁殖与连通。',
storySections: [
  {
    key: 'river-specialist',
    label: '形态与食性',
    title: '把吻部变成夹鱼的长镊子',
    body:
      '恒河鳄每侧上颌有 27—29 枚牙、下颌有 25—26 枚牙，多数大小接近。细长吻部减少侧摆水阻，闭颌时交错尖牙能迅速夹住鱼；幼体也会取食昆虫、蛙类和其他小动物。',
  },
  {
    key: 'male-ghara',
    label: '雄性信号',
    title: 'ghara 是身份标志，也参与远距离通信',
    body:
      '只有较大成熟雄性会在外鼻孔周围长出软组织 ghara。野外雄性可发出短促水下 POP，并伴随呼吸、下潜和气泡；信号见于警戒和巡游等情境，因此不能把它简单叫作求偶扩音器。',
  },
  {
    key: 'sandbank-nursery',
    label: '繁殖',
    title: '一片沙洲，同时是产房与育幼场',
    body:
      '雌性在干季临水沙岸挖穴，通常产约 30—50 枚卵。她会守巢并在孵化时打开巢穴，却不把幼体含在嘴里搬运；多个巢的幼体可合并成托儿群，由雌性和通常一只大型雄性守护。',
  },
  {
    key: 'connected-river',
    label: '生境',
    title: '保护一只鳄，必须让整条河仍像河',
    body:
      '深水、浅岸、裸露沙洲和季节洪水共同组成恒河鳄生境。坝闸既阻断移动，也改变泥沙和植被；抽水、采砂与河岸农业会继续压缩筑巢空间。局部补沙能救急，却不能代替自然流量与河道连通。',
  },
  {
    key: 'counting-boundaries',
    label: '种群',
    title: '650、1,857 与 486，说的是三件不同的事',
    body:
      'IUCN 的 300—900 是全球成熟个体估计；昌巴尔 1,857 是 2019 年全部体型的地方计数；486 则是同年的巢数。调查范围、体型标准与方法不同，不能把这些数字相加或互相替代。',
  },
  {
    key: 'recovery-with-caveats',
    label: '保护',
    title: '总体上升，不等于河流危机结束',
    body:
      'IUCN 把总体趋势记为上升，但恢复高度集中在昌巴尔等少数地点。人工育幼放归曾帮助部分种群，却因历史标记和追踪不足难以量化成效；减少渔网死亡、维护沙洲和恢复连通仍是不可替代的工作。',
  },
],
keyFacts: [
  'IUCN 当前档案为极危 A2bce、趋势上升；两者分别描述历史衰退等级和评估时近期方向。',
  'ghara 只见于大型成熟雄性，是软组织/软骨性鼻端结构，不是骨角或可充气气囊。',
  '雌性会守巢和开巢，却不会把幼体含在嘴里搬到水中；幼体可组成由多只成体守护的托儿群。',
  '全球成熟个体 300—900、地方全部体型计数和巢数是不同统计口径，不能直接比较。',
],
threats: [
  '坝闸、水量调控与抽水造成河流破碎和水文改变',
  '刺网等渔具导致溺亡、吻部损伤和食物竞争',
  '采砂、采石、农业与河岸扰动破坏巢址和晒背地',
  '小亚种群缺少繁殖雄性、招募不足及单向下游流失',
  '局地采卵以及历史皮张捕猎',
  '污染与不明原因大规模死亡风险',
],
conservationActions: [
  '保护整段河流连通性并维持季节流量和泥沙过程',
  '保护裸露沙洲、限制采砂采石并对退化巢址开展审慎补沙',
  '与渔民协作减少刺网误捕并快速救护缠网个体',
  '统一调查、体型分级、标记与长期追踪方法',
  '以适宜生境和可监测成效为前提开展育幼放归',
  '加强印度、尼泊尔、孟加拉国和巴基斯坦跨境河流监测',
],
metrics: {
  adultLengthCm: [300, 600],
  estimatedMatureIndividuals: [300, 900],
},
featuredStats: [
  {
    key: 'mature-individuals',
    label: 'IUCN 成熟个体估计',
    value: '300—900',
    unit: '只',
    note: '中位数约 650；2017 评估，资料主要来自 2010—2017',
  },
  {
    key: 'generation-length',
    label: '世代长度',
    value: '25',
    unit: '年',
    note: '不是寿命',
  },
  {
    key: 'clutch-size',
    label: '每窝卵数',
    value: '约 30—50',
    unit: '枚',
    note: 'IUCN 常用概括约 40；奇特旺 17 年样本均值 32.3',
  },
  {
    key: 'aoo-decline',
    label: '占据面积历史降幅',
    value: '约 94',
    unit: '%',
    note: 'IUCN 2017 评估中的历史—当前估算',
  },
],
media: {
  alt: '南亚宽阔河流的裸露沙洲边，一只吻端带有 ghara 的成年雄性恒河鳄半身浸在水中',
  focalPoint: { x: 0.58, y: 0.54 },
},
sources: GHARIAL_SOURCES,
updatedAt: GHARIAL_CONTENT_DATE,
```

### 字段来源速查

- `conservation`、`metrics.estimatedMatureIndividuals`、世代长度与占据面积降幅来自 IUCN，不用地方计数覆盖。([S01])
- `taxonomy` 与牙齿诊断来自 Reptile Database。([S03])
- 体长、食性概括和陆上运动边界来自鳄类专家组及形态研究；体重、寿命因证据不足留空。([S07])([S08])
- `ghara` 和 `POP` 文案来自形态与野外声学原始研究。([S08])([S09])
- 繁殖数值综合 IUCN、鳄类专家组和奇特旺 17 年研究，并明确人工孵化语境。([S01])([S07])([S17])
- 分布国家综合 IUCN 评估、孟加拉国 2026 记录和巴基斯坦 2023–2025 再发现，不把后两地写成已确认自持繁殖种群。([S01])([S14])([S15])([S16])

## 6 张图像的叙事与科学避错清单

所有图片都应是“可在真实南亚大河现场发生的瞬间”，不加信息图文字、无线电波、图标、拟人表情、血腥捕食或人手触摸。避免暴露精确巢址坐标。每张图的科学约束均来自其后所列来源。

### 01 封面：成熟雄性与 `ghara`

- **最终场景：**宽阔流动河道与裸露沙洲交界，一只大型成熟雄性贴岸低伏晒背；全身、长吻和尾部比例可辨，`ghara` 清楚但不夸张。
- **必须正确：**只有雄性带 `ghara`；它应是围绕外鼻孔的多褶软组织/软骨性壶状突起，不是犀牛角、硬骨球、花瓶或可充气气囊。([S08])([S09])
- **避免：**雌雄都长 `ghara`、两个鼻孔各一只球、突起发光、发出可视声波，或把静止吐气直接标成求偶。([S08])([S09])

### 02 雄性信号：`ghara`、POP 与泡云的证据边界

- **最终场景：**清澈但自然的绿色河水中，一只带 `ghara` 的成年雄性刚闭合长吻，鼻端附近保留一小团局部泡云。
- **必须正确：**野外录音确认雄性会发出水下 POP；快速闭颌和 `ghara` 基部泡云来自研究报告的受控清澈水体初步观察，不能被写成每次野外 POP 都已逐帧证实的声源机制。([S09])
- **避免：**把泡云画成普通吐气、爆炸或可视声波，把 POP 固定解释为求偶，或把 `ghara` 画成角、气球和双鼻管。([S08])([S09])

### 03 河流尺度：深水、浅岸与裸露沙洲

- **最终场景：**低水位季节的南亚中大型河流，主槽、较深水面、临岸浅水、开阔无植被沙洲同时可见；一只无 `ghara` 的恒河鳄仅占中远景小比例。
- **必须正确：**主体是流动河流和河沙地貌，不是沼泽密林、封闭池塘、海岸或静水动物园水池。([S01])([S10])([S18])
- **避免：**把水坝画成理想自然背景、让巢位于茂密草丛/泥堆，或将几十只动物均匀铺满河面。([S01])([S18])

### 04 食鱼特化：水下侧摆夹鱼

- **最终场景：**无浑浊血色的清浅河水中，一只无 `ghara` 的亚成体闭合长吻，夹住一条与头部比例合理的小鱼；运行图保留完整尾尖。
- **必须正确：**吻部长而极窄，尖牙数量多且大致均一；观察研究支持头和前颈快速侧向、略向上的一击，而躯干移动较少。([S03])([S07])([S25])
- **避免：**吞鹿、袭人、追逐大型哺乳动物、死亡翻滚、鲨鱼式撕咬、超出颌部承载的大鱼，或裁掉尾尖和脚。([S03])([S07])([S25])

### 05 托儿群：守护而非口衔搬运

- **最终场景：**初夏浅岸，8 只幼体从已打开的穴巢自行走向水边，一只无 `ghara` 的成年雌性在浅水守望；画面不另加雄性。
- **必须正确：**幼体由成体守护但自行进入水中；不让任何成体把幼体含在长吻里。若画幼体爬上雄性背/尾，caption 必须注明这是昌巴尔的直接观察，而非普遍必经行为。([S01])([S07])([S21])
- **避免：**“鳄妈妈嘴里安全搬运宝宝”的典型鳄类画面、所有幼体整齐骑在父亲背上、或把守群雄性确定为每只幼体的亲生父亲。([S01])([S11])([S21])

### 06 保护边界：地点性的沙洲修复

- **最终场景：**繁殖季前，三名保护人员在空置沙岸上小尺度清除木本植被、平整补入的河沙并测量岸高；一只雌性在河对岸保持安全距离。
- **必须正确：**减流可使沙岸被木本植被占据，清理与补沙在特定受调控河段可暂时恢复筑巢基质；它们不能替代季节流量、泥沙过程与河道连通。([S18])([S19])
- **避免：**施工进入活跃巢区、暴露卵、徒手接触动物、重型机械和宣传式放归结局，也不能暗示一次工程已恢复整个物种。([S01])([S18])([S19])([S24])

### 六图共同解剖红线

- 吻部始终显著长、窄，吻尖可轻微扩大；不要画成短宽 U 形鳄鱼头。牙齿多、细而交错，不要只留少数巨大犬齿。([S03])
- `ghara` 仅用于大型成熟雄性；雌性、幼体和亚成体绝不添加。([S08])
- 外鼻孔不应被画成独立双管或完全封死；`ghara` 围绕鼻孔生长。([S08])([S09])
- 保留真实鳄类甲片、四肢、趾和强壮尾巴；不要多趾、断肢、蛇身、鱼鳍或恐龙背棘。高度水栖不等于无腿。([S07])
- 陆上姿态贴近地面，主要出现在临水沙岸；不要高步态奔跑、跃扑或深入森林追猎。([S07])
- 画面中的数量和年龄结构要克制；地方计数不能被视觉转译成“所有河流都挤满恒河鳄”。([S01])([S10])([S12])([S13])

## 不应再使用的说法

- “IUCN 趋势正在下降。”——当前评估字段为 `Increasing`。([S01])
- “评估标准是 A2bcde+4bcde。”——当前勘误版为 `A2bce`。([S01])
- “全世界只剩 650 只恒河鳄。”——约 650 是 2017 评估中成熟个体中位估计，不是全部年龄实时总数。([S01])
- “只分布在印度和尼泊尔。”——这忽略孟加拉国近期记录及巴基斯坦再发现；应区分主要繁殖地与零散现存记录。([S14])([S15])([S16])
- “`ghara` 是用来放大求偶叫声的扩音器。”——声学参与有依据，具体机制和单一功能未验证。([S08])([S09])
- “雄性吐泡就是在向雌性求偶。”——新研究记录的 `POP`—呼吸展示主要包括警戒与巡游情境。([S09])
- “母鳄会把宝宝含在嘴里送到水边。”——恒河鳄不会这样搬运幼体。([S01])([S07])([S11])
- “人工繁育放归已经证明可以恢复任何河流种群。”——历史成效缺少统一追踪，不同地点结果差异很大。([S01])([S24])
- “2007–08 年死亡由罗非鱼毒素造成。”——具体致因未证实。([S01])
- “世代长度 25 年，所以寿命是 25 年。”——两者是不同概念。([S01])

## 仍需保留的不确定性

1. IUCN 仍以 2017 为评估年；2023–2026 的地方记录和计数不能自行合成为新的全球成熟个体数，也不能擅自更新红色名录年份。([S01])([S13])([S14])([S15])
2. 巴基斯坦和孟加拉国记录是否代表本地繁殖、自持小群，还是跨境/上游扩散，尚缺统一的多季节标记、巢址和遗传证据。([S14])([S15])([S16])
3. `ghara` 与 `POP` 的关联很强，但声源的精确物理机制、共鸣作用和不同社会情境的功能仍需实验与更大样本验证。([S08])([S09])
4. 野外成体体重、年龄—体长关系和寿命缺少可直接转成全物种范围的高质量数据；暂时留空比复制不明范围更安全。([S07])([S08])
5. 非鱼猎物有权威记录，但缺少跨地点、跨年龄的定量食谱；内容应保持“鱼类为主，其他小型动物有记录”的层级。([S07])
6. 人工补沙、孵化和放归都有地点依赖性；任何成功率都必须保留项目时间、场地和管理条件，不能外推为普遍结果。([S17])([S19])([S24])

## 来源索引

[S01]: https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T8966A149227430.en
[S02]: https://www.iucncsg.org/pages/Conservation-Status.html
[S03]: https://reptile-database.reptarium.cz/species?genus=Gavialis&species=gangeticus
[S04]: https://reptile-database.reptarium.cz/advanced_search?submit=Search&taxon=Gavialidae
[S05]: https://cites.org/eng/app/appendices.php
[S06]: https://cites.org/sites/default/files/eng/resources/pub/checklist11/History_of_CITES_listings.pdf
[S07]: https://www.iucncsg.org/365_docs/attachments/protarea/23_G-6764939a.pdf
[S08]: https://doi.org/10.7717/peerj.9134
[S09]: https://doi.org/10.1111/joa.14171
[S10]: https://doi.org/10.17161/randa.v31i1.21018
[S11]: https://www.thebhs.org/publications/british-journal-of-herpetology/4163-volume-6-number-2-june-1980/file
[S12]: https://doi.org/10.1017/S0030605323001485
[S13]: https://doi.org/10.1002/ece3.72643
[S14]: https://doi.org/10.17017/j.fish.1261
[S15]: https://www.iucncsg.org/365_docs/attachments/protarea/e5a83965a9969ec6121b78fed635e3e7.pdf
[S16]: https://www.wildlife-journal.org/wp-content/uploads/Rediscovery-of-Gavial-in-Pakistan-1.pdf
[S17]: https://doi.org/10.1655/Herpetologica-D-19-00038.1
[S18]: https://doi.org/10.1038/s41598-021-84143-7
[S19]: https://doi.org/10.1002/2688-8319.12068
[S20]: https://dnpwc.gov.np/content/97/gharial-conservation-action-plan--2018-2022-/
[S21]: https://www.iucncsg.org/365_docs/attachments/protarea/daf68c23d4e8447d7b2083a3b59931d5.pdf
[S22]: https://zsi.gov.in/uploads/documents/checklist/english/119_Reptilia_V2_2025.pdf
[S23]: https://moef.gov.in/uploads/pdf-uploads/Nitin_Rev_4.pdf
[S24]: https://doi.org/10.1655/Herpetologica-D-16-00048.1
[S25]: https://doi.org/10.2307/1564301
