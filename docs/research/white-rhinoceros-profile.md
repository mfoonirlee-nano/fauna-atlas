# 白犀（*Ceratotherium simum*）完整物种档案研究

- 检索与核验日期：2026-08-23
- 使用范围：`src/data/species.ts` 的白犀条目、详情页长文、数字卡，以及 1 张封面和 5 张详情图的设计与验收
- 证据标准：分类采用美国哺乳动物学会 Mammal Diversity Database（MDD）；全球风险采用 IUCN Red List；最新数量与分布采用 IUCN/SSC 非洲犀牛专家组和 TRAFFIC 提交 CITES CoP20 的报告；贸易管制采用核验日生效的 CITES 附录；生物学采用南非科学管理局 SANBI 和同行评审研究。数量均保留年份与统计对象。
- 物种边界：全文按 MDD 的物种级口径指 ***Ceratotherium simum*** (Burchell, 1817)，包含南方白犀 *C. s. simum* 与北方白犀 *C. s. cottoni*。产品图像和一般生态叙述默认表现占现存个体绝大多数的南方白犀；涉及北方白犀时会明确写出亚种名。
- 敏感信息处理：分布只到国家和广义区域；不记录个体位置、实时巡护路线、监测设备坐标、犀角库存位置或反盗猎部署。`distribution.center` 只是南部非洲的界面焦点。
- 当前性说明：IUCN 全球评估仍为 2020 年 NT、趋势 Decreasing；2024 年末 15,752 只是更新的总个体估计，不会自动改写正式 Red List 字段，也不是成熟个体数。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4185A45813880.en) [IUCN 2025 数量通报](https://iucn.org/press-release/202508/poaching-african-rhinos-down-drought-and-other-threats-drive-losses-globally)

## 结论摘要

### 分类与两亚种边界

MDD v2.5 接受 ***Ceratotherium simum*** (Burchell, 1817)，MDD ID 为 **1006111**，英文主名为 **White Rhinoceros**，另有 Square-lipped Rhinoceros。分类为动物界、脊索动物门、哺乳纲、奇蹄目、犀科、白犀属。产品中文主名使用 todo 已确定的“**白犀**”。[MDD：*Ceratotherium simum*](https://www.mammaldiversity.org/taxon/1006111/)

北方与南方白犀存在清楚的形态、遗传和保护管理差异。部分研究者曾建议把北方白犀提升为独立物种，MDD 目前仍把 `cottoni` 保留在 *C. simum* 之下；IUCN 也分别评估两个亚种。仓库应跟随 MDD 的单一物种口径，不建立第二个物种条目，也不把两个亚种的状态互换。[Harley et al. 2016](https://doi.org/10.1007/s10592-016-0861-2) [IUCN 北方白犀评估](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4183A45813838.en)

### IUCN：NT、趋势 Decreasing、评估年 2020、无标准字符串

当前全球结论为 **近危 Near Threatened（NT）**、种群趋势 **下降 Decreasing**、评估年份 **2020**，评估日为 2020-01-06。NT 记录没有可复制到仓库的 criteria 字符串，推荐写作：

~~~ts
conservation('NT', 'decreasing', 2020)
~~~

不能把南非区域评估曾用的 `A4ad` 填进全球字段。2020 年全球评估以 2017 年估计的 18,064 只总个体为基础，并推算 10,080 只成熟个体；这两个数字都已经过时，不进入当前 `metrics.estimatedMatureIndividuals`。IUCN 将白犀列为 NT 而非 LC，核心原因是其高度依赖持续保护、监测和资金，一旦这些措施明显减弱，盗猎可使其在三代内迅速进入受威胁范围。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4185A45813880.en)

两个亚种不能只看物种级 NT：

- 南方白犀 *C. s. simum* 为 NT，是当前绝大多数现存个体的来源；
- 北方白犀 *C. s. cottoni* 为 **CR (Possibly Extinct in the Wild)**。已知仅余两只雌性 Najin 与 Fatu，在肯尼亚 Ol Pejeta 的受管理环境生活，不构成可自行繁殖的野生种群。产品不能把整个白犀物种写成“只剩两只”，也不能擅自把 IUCN 的限定语改成 EW。[IUCN 2020 更新说明](https://iucn.org/news/species/202003/conservation-efforts-bring-cautious-hope-african-rhinos-iucn-red-list) [Ol Pejeta](https://www.olpejetaconservancy.org/what-we-do/conservation/wildlife-conservation/rhinos/)

BioRescue 截至 2025-08-25 报告保存了 38 枚纯北方白犀胚胎，并已进行多次胚胎移植尝试；官方没有报告北方白犀活产幼仔。这个项目属于辅助生殖研究进展，不能写成北方白犀种群已经恢复。[Leibniz-IZW BioRescue](https://www.izw-berlin.de/en/press-release/biorescue-scientists-produced-three-new-embryos-and-began-using-northern-white-rhino-embryos-in-embryo-transfers-in-the-race-to-save-the-species.html)

### 数量与趋势：2024 年末 15,752 只总个体

IUCN/TRAFFIC 汇总的 2024 年末估计为 **15,752 只白犀**，其中南方白犀 15,750 只、北方白犀 2 只；比 2023 年白犀总数下降 **11.2%**。这是跨国家管理报告汇总的总个体估计，不是同步普查、成熟个体数或无误差的实数。IUCN 同期公布的非洲犀牛 2.15% 盗猎率合并了黑犀与白犀，不能标成白犀专属盗猎率。[IUCN 2025 通报](https://iucn.org/press-release/202508/poaching-african-rhinos-down-drought-and-other-threats-drive-losses-globally) [IUCN/TRAFFIC CoP20 分析](https://www.traffic.org/site/assets/files/28130/iucn_traffic_cop20_full_analyses_ver_4.pdf)

长时间序列也需要标年份：南方白犀估计数从 2005 年 14,543 增至 2015 年 20,375，之后降至 2017 年 18,064、2021 年 15,940、2024 年 15,750。近期下降和百年恢复史同时成立；不要把“曾从灭绝边缘恢复”写成当前仍在增长。

### 分布：十三国管理拼图，不是连续自然分布带

2024 年末报告在十三国记录南方白犀：**博茨瓦纳、科特迪瓦、刚果民主共和国、斯威士兰、肯尼亚、莫桑比克、纳米比亚、卢旺达、塞内加尔、南非、乌干达、赞比亚、津巴布韦**。国家估计依次为 320、1、31、62、1,041、40、1,500、37、3、12,082、43、54、536；带星号的科特迪瓦、刚果民主共和国、莫桑比克、塞内加尔和乌干达沿用 2023 年资料。南非约占 2024 年南方白犀总数的 76.7%，仍是核心。[IUCN/TRAFFIC CoP20 分析](https://www.traffic.org/site/assets/files/28130/iucn_traffic_cop20_full_analyses_ver_4.pdf)

这些国家不都属于南方白犀的自然历史范围：南非保有现存原生核心；博茨瓦纳、斯威士兰、莫桑比克、纳米比亚和津巴布韦兼有现存或重引入种群；肯尼亚、乌干达和赞比亚主要按辅助迁殖管理；科特迪瓦与塞内加尔是自然范围外的极小引入记录。刚果民主共和国、卢旺达和乌干达接近北方白犀历史范围，但现有动物主要是引入的南方类型。产品 `range` 必须写出这层来源差异。

北方白犀的历史范围曾覆盖乌干达西北部、乍得南部、南苏丹西南部、中非共和国东部和刚果民主共和国东北部。最后确认的野外核心在 Garamba 一带，已多年没有可靠野外记录。肯尼亚的两只雌性属于受管理保育个体，不代表肯尼亚恢复了野生北方白犀种群。

### 栖息地：草地和稀树草原，水塘属于关键资源

IUCN 将主要生境归为 savanna、shrubland 和 grassland。SANBI 记录南方白犀可利用年降水约 350 至 1,500 毫米的多种草地与稀树草原，偏好短草“放牧草坪”，短草不足时也会取食更高、更纤维化的丛生草。现存种群高度集中在国家保护地、私人或社区保护区、野生动物农场和围栏管理景观，分布破碎。[SANBI 2024 NDF](https://www.sanbi.org/wp-content/uploads/2025/07/White-rhino_Oct-2024.pdf)

浅水塘、季节性排水线、阴凉处和泥塘是饮水、热环境调节与皮肤护理的重要资源，但白犀仍是 **terrestrial** 物种。`distribution.realms` 只填 `['terrestrial']`；第三图可以表现草原水塘，不能据此加入 freshwater，也不能画成河马式长期泡水或游泳生活。

### 形态：方唇、低头和颈肩隆起比颜色可靠

白犀是现存体型最大的犀牛。野外资料汇总给出成年雌性约 1,400 至 1,800 千克、平均约 1,600 千克；成年雄性约 2,000 至 2,400 千克、平均约 2,200 千克。Groves 的历史四成体样本给出头体长 3.35 至 3.77 米、肩高 1.71 至 1.85 米；样本很小，适合作为参考范围，不应包装成全物种极值。[Garand et al.](https://doi.org/10.1002/zoo.70034) [Groves 1972](https://doi.org/10.2307/3503966)

可靠鉴别线索包括：

- 宽、平直、近方形的上唇贴近地面割取草叶；黑犀的上唇较窄并呈钩状、可抓取枝叶；
- 头部长而常低垂，颈后至肩部有明显肌肉隆起，背线较平直；
- 鼻部有两角，前角通常更长。角由角蛋白纤维构成，没有牛科那样的骨质角心；
- 灰色厚皮会沾上红土或深色泥浆，动物本身不是白色或白化；
- 每足三趾，耳缘与尾端有少量毛，身体其余部分毛稀少。

“White Rhinoceros”一名的来源仍未解决。常见的“荷兰语或南非语 *wijd*（宽）被英语误听成 white”故事缺少历史文字证据；Rookmaaker 的文献研究明确否定这条流行解释。可以把“名字来源未定，皮肤并非白色”写作趣闻，不能继续传播误译神话。[Rookmaaker 2019](https://doi.org/10.69649/pachyderm.v60i.47)

### 生理与热环境调节

白犀是非反刍的后肠发酵者。解剖研究发现其盲肠相对小、结肠显著扩大，结肠可能承担主要发酵室功能。统一草干草条件下的消化试验还显示，白犀对纤维颗粒的选择性滞留和中性洗涤纤维消化能力高于食枝叶的黑犀；该结果来自圈养试验，不能外推成固定日食量。[Endo et al. 1999](https://doi.org/10.1046/j.1439-0264.1999.00210.x) [Steuer et al. 2010](https://doi.org/10.1016/j.cbpa.2010.03.006)

皮肤组织学研究在一只老年雌性南方白犀的多个部位发现厚角质层、致密胶原束和稀疏汗腺。研究者据此推断寻阴和泥浴可补充热环境调节。单一样本不能证明所有个体的汗腺密度相同；“泥浴能降温并辅助皮肤护理”适合写成有依据的行为功能，不宜写成唯一机制。[Plochocki et al. 2017](https://doi.org/10.1371/journal.pone.0176327)

### 食性：大型专性食草者，以禾本科草为主

`diet.types` 只填 `['herbivore']`。白犀用方唇贴地取食短草，短草不足时转向较高、纤维较粗的丛生草。它能形成并反复利用短草放牧斑块。不要把黑犀的灌木嫩枝、树叶与钩状唇采食画面混入常规食谱，也不要填写缺少统一野外口径的固定每日进食量或饮水量。[SANBI 2024 NDF](https://www.sanbi.org/wp-content/uploads/2025/07/White-rhino_Oct-2024.pdf)

### 行为与社会结构

白犀并非稳定大群生活。凝聚关系主要是母子组合和小型亚成体群；成年公犀通常独居，繁殖公犀会维持领域，其他个体的活动范围可重叠。画面中的两三只动物只能表示临时结伴或母子关系，不能泛化成固定“犀牛群”。[SANBI 2024 NDF](https://www.sanbi.org/wp-content/uploads/2025/07/White-rhino_Oct-2024.pdf)

Matobo 国家公园研究记录到昼夜活动，月相、时段、天气、生境和年龄性别都会影响活动与采食；多云和降雨条件下的采食时间高于晴天。产品可写“昼夜均可活动，炎热时段常休息、寻阴或泥浴”，不能硬贴严格昼行或夜行标签。[Tichagwa et al. 2020](https://doi.org/10.1111/aje.12770)

不同性别和年龄的白犀共同使用粪堆。野外气味分析和气味操纵试验表明，粪便挥发物可传递性别、年龄、公犀领域身份和母犀发情状态；公共粪堆因此像化学信息站。这个结论有实验支持，适合作为趣闻，但不要把拟人化的“留言板”当成字面交流系统。[Marneweck et al. 2017](https://doi.org/10.1098/rspb.2016.2376)

### 繁殖与育幼

SANBI 汇总的野外口径为：雌性平均 5 至 6 岁首次产仔，平均产仔间隔约 2.9 年；雄性生理成熟年龄相近，但通常到 10 至 12 岁才成功交配；幼仔约 2.2 至 3.3 岁、接近母亲下一次生产时独立。比较约七十次白犀妊娠的研究给出平均 **503.8 天**，范围 480 至 525 天，可在产品写“约 504 天，约 16 至 17 个月”。通常一胎一仔，母子关系构成主要长期社会单元。[SANBI 2024 NDF](https://www.sanbi.org/wp-content/uploads/2025/07/White-rhino_Oct-2024.pdf) [Schwarzenberger & Hermes 2023](https://doi.org/10.1016/j.ygcen.2023.114214)

第五图应出现一只母犀和恰好一只幼仔。幼仔明显较小、角只是短小角芽，并贴近母犀侧后方；不加入“父母带双胞胎”的人类家庭构图。

### 生态作用：情境依赖的草原生态工程师

南非景观尺度移除实验显示，在较湿润的稀树草原，白犀维持短草放牧草坪；移除白犀后草层变高、燃料连续性增强，火烧面积更大且斑块性下降。在较干旱地点，小型食草动物可以维持部分短草结构。因此白犀可称为巨型食草生态工程师，但作用随降水、生产力和食草动物组合变化，不能写成“只有白犀才能造草坪”或“白犀在所有地方都能防止野火”。[Waldram, Bond & Stock 2008](https://doi.org/10.1007/s10021-007-9109-9)

### 威胁、CITES 管制与保护

当前首要直接威胁仍是为非法犀角市场进行的盗猎和跨国有组织犯罪。栖息地丧失与破碎化、安全和管理成本上升、部分所有者退出保育、干旱造成的死亡和低繁殖率都会放大损失。小而隔离的种群还需要主动调配年龄、性别和遗传结构。2024 年白犀下降 11.2%，说明百年恢复成果仍可快速逆转。[IUCN 2025 通报](https://iucn.org/press-release/202508/poaching-african-rhinos-down-drought-and-other-threats-drive-losses-globally)

CITES 不是一条统一的“白犀附录等级”：

- 斯威士兰与南非的南方白犀种群列附录 II，注释 A8 只允许向适当且可接受目的地交易活体和狩猎纪念物；其他标本按附录 I 管理；
- 纳米比亚南方白犀种群列附录 II，注释 A9 只允许为就地保护交易活体，且目的地限于白犀在非洲的自然或历史范围；其他标本按附录 I 管理；
- 其余白犀种群列附录 I。国际商业犀角贸易没有因三国的有限附录 II 注释而开放。[CITES 附录，2026-03-05 生效](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

IUCN 2025 至 2035 非洲犀牛框架把行动分为生态与生物管理、安全区域、打击有组织犯罪、理解并影响犀角市场、公平与权利、多元价值六个主题。可落库的行动包括：保护和扩展安全草原；依据遗传、年龄、性别和承载量转移个体并管理元种群；用标准化调查与个体识别持续监测；以情报和司法协作打击盗猎与贩运；让当地社区参与决策并分享合理收益；提供稳定资金、治理和技术能力。去角只能降低部分盗猎诱因，还需麻醉、重复操作和持续安保，不能写成一次性解决方案。[IUCN 2025 至 2035 框架](https://doi.org/10.2305/RIGA8357)

## 推荐关键事实

- 白犀是现存体型最大的犀牛，雌雄野外平均体重参考约为 1.6 吨和 2.2 吨。
- 方形宽唇、低垂长头和颈肩隆起用于贴地取食草，是区别黑犀最可靠的视觉组合。
- IUCN 全球状态为 NT、趋势下降、2020 年评估；NT 记录不填 criteria。
- 2024 年末估计 15,752 只总个体，其中南方白犀 15,750 只、北方白犀 2 只；这不是成熟个体数。
- 北方白犀为 CR (Possibly Extinct in the Wild)，现存两只雌性不等于整个白犀物种只剩两只。
- 白犀昼夜均可活动；寻阴、饮水和泥浴会随热环境与资源条件变化。
- 公共粪堆携带性别、年龄、领域和发情状态等气味信息。
- 在部分较湿润稀树草原，白犀维持短草放牧草坪，并改变其他食草动物和火的空间格局。
- “white 来自 *wijd* 的误译”缺少历史证据；名字来源未定，皮肤是灰色。

## 不应写入产品的说法

- 不写“白犀只剩两只”；两只仅指北方白犀已知存活个体。
- 不把北方白犀直接标成 EW，也不把物种级 NT 改成 CR。
- 不给全球 NT 添加 `A4ad`；该标准来自区域口径，全球记录没有 criteria。
- 不把 2017 年 10,080 只成熟个体与 2024 年 15,752 只总个体混用，也不把后者填进成熟个体字段。
- 不称十三国为连续原生范围；多国种群来自重引入或辅助迁殖，西非两国记录极小且来源于 2023 年资料。
- 不加入 freshwater realm；水塘、泥塘和饮水行为仍属于陆地生活史资源。
- 不说白犀是白色，也不用颜色区分白犀和黑犀。
- 不画钩状抓握唇、食树枝或浓密灌木浏览；这些是黑犀的典型组合。
- 不写固定日食量、固定每日饮水量、通用领地面积或最高速度。
- 不说泥浴是唯一散热机制，也不由一张泥泞站立图断言正在泥浴。
- 不说胚胎移植已经产下北方白犀幼仔。
- 不把 CITES 写成全物种附录 I 或全物种附录 II，也不暗示商业犀角贸易已经合法化。
- 不公开监测坐标、个体实时位置、巡护路线、去角时间表或反盗猎战术。

## 结构化字段取值建议

| 字段 | 推荐值 | 边界说明 |
| --- | --- | --- |
| `id` | `species-ceratotherium-simum` | 与接受学名对应。 |
| `slug` | `white-rhinoceros` | 与素材目录一致。 |
| `names.zh` | `白犀` | todo 已确定的仓库主名。 |
| `names.en` | `White Rhinoceros` | MDD 主名。 |
| `names.aliases` | `['Square-lipped Rhinoceros']` | 英文形态名；不加入未经核验的中文异名。 |
| `taxonomy.order` | `Perissodactyla / 奇蹄目` | 本条目补齐该目的代表种。 |
| `taxonomy.family` | `Rhinocerotidae / 犀科` | MDD。 |
| `taxonomy.genus` | `Ceratotherium / 白犀属` | MDD。 |
| `conservation` | `conservation('NT', 'decreasing', 2020)` | 全球评估，无 criteria。 |
| `distribution.realms` | `['terrestrial']` | 水塘不构成 freshwater realm。 |
| `distribution.continents` | `['非洲']` | 当前十三国均在非洲。 |
| `distribution.countries` | 十三国清单 | 2024 报告口径，部分沿用 2023 数据。 |
| `distribution.center` | `{ lat: -22, lng: 25 }` | 南部非洲 UI 焦点，不是密度中心或完整范围。 |
| `measurements.length` | `3.35–3.77 m` | 历史四成体样本，不是物种极值。 |
| `measurements.height` | `1.71–1.85 m` | 肩高，历史四成体样本。 |
| `measurements.weight` | `1.4–2.4 t` | 野外参考；雌约 1.4–1.8 t，雄约 2.0–2.4 t。 |
| `diet.types` | `['herbivore']` | 以禾本科草为主。 |
| `metrics.adultMassKg` | `[1400, 2400]` | 有性别分层的野外参考范围。 |
| `metrics.lifespanYears` | `[30, 40]` | SANBI 野外参考。 |
| `metrics.estimatedMatureIndividuals` | 不填 | 没有与 2024 总数同步的成熟个体估计。 |
| `featuredStats.population` | `15,752 只总个体` | 2024 年末，15,750 南方加 2 北方。 |
| `featuredStats.gestation` | `约 504 天` | 比较研究范围 480–525 天。 |
| `featuredStats.mass` | `雌约 1.6 / 雄约 2.2 吨` | 野外资料平均参考。 |
| `featuredStats.countries` | `13 国` | 管理报告快照，不等于十三个原生范围国。 |

## 6 幅图像内容、生成提示词与拒绝项

六图默认表现 **南方白犀**，均为通用编辑性科学重建，不代表具名个体、保护地、监测项目或事件。共同形态锚点：**large grey southern white rhinoceros; very broad straight square upper lip; long low-held head; prominent muscular nuchal and shoulder hump; fairly straight back; two aligned nasal keratin horns with the front horn usually longer; three toes on each visible foot; sparse hair at ears and tail**。

六图共同拒绝项：black rhinoceros hooked prehensile lip、Indian or Javan rhinoceros shield-like skin folds or single horn、hairy Sumatran rhinoceros、white or albino coat、elephant tusks、third horn、forehead horn、bony antler、extra or fused limbs and toes、blood or carcass、charging the camera、zoo barrier、people touching or feeding、text、watermark、logo、map coordinates。

已逐张检查 `src/assets/source/species/white-rhinoceros/` 下的六张 source PNG。01 的主体位于右侧并留下左侧标题空间；02 清楚表现贴地食草；03 以草地和浅水塘为主体；05 只有一只母兽与一只幼仔；06 有两名生态人员并与一只白犀保持明显距离。这五张与研究边界一致。04 的动物已经站起，湿泥覆盖腹侧与四肢，画面只能支持“泥浴后覆泥”，这是唯一需要在标题和 caption 中明确修正的动作边界。

### 01 `01-square-lipped-savanna-portrait.webp`

封面场景：一只成年南方白犀在短草稀树草原安静站立或缓步，三分之四侧面，全身完整；主体位于画面右半部，左侧保留干净标题空间。宽方唇、低头、长头骨、颈肩隆起、两只鼻角和灰色皮肤都清楚可读。自然尘土可以附着皮肤，但不把动物画成纯白。

**Generation prompt**

> Editorial natural-history photograph of one adult southern white rhinoceros in open short-grass bushveld savanna, calm three-quarter side view, full body and all four feet visible, subject placed on the right third with generous uncluttered negative space on the left for a title. Accurate very broad straight square lip, long head held low, pronounced muscular nuchal shoulder hump, fairly straight back, grey folded skin with subtle dry dust, two aligned nasal keratin horns with a longer front horn, realistic three-toed feet, sparse ear and tail hair. Warm natural daylight, restrained documentary color, eye-level long-lens perspective, no dramatic action.

**Reject**：主体居中堵住左侧留白；钩状尖唇；低肩无颈隆起；纯白皮肤；印度犀式甲片；单角、三角或额头角；冲锋、咆哮、血迹；裁掉脚或角。

### 02 `02-square-lip-grazing.webp`

详情场景：一只成年南方白犀侧身贴地割取短草，镜头足够近，让宽、平、近方形的唇缘成为主线索，同时保留头、颈肩和前肢的自然连接。画面展示“食草”动作，不表现拔灌木或咬树枝。

**Generation prompt**

> Scientific wildlife close view of one adult southern white rhinoceros actively grazing a short green-and-gold grass lawn in African savanna, clean side profile, broad flat square upper lip pressed flush to the ground while cropping grass, long heavy head held low, strong nuchal shoulder hump supporting the neck, grey skin, two realistic nasal horns with the front horn longer, eye nostril lip edge and front feet anatomically clear. Natural foraging posture, quiet documentary light, no staged food.

**Reject**：黑犀式钩状抓握唇；嘴里叼树枝、树叶或连根灌木；人类牙齿；张口怒吼；头与颈断接；舌头夸张外伸；投喂槽或游客。

### 03 `03-grassland-water-pan-habitat.webp`

详情场景：宽幅短草草地与 bushveld 镶嵌景观围绕浅自然水塘，一只白犀以较小比例接近或在塘边饮水，生境占画面大部分。零散乔木、泥岸、足迹和草层变化可以出现。水塘只表示饮水、泥浴和热环境资源，不代表淡水生活史。

**Generation prompt**

> Wide environmental portrait of southern African short-grass savanna and bushveld mosaic around a shallow natural water pan, habitat filling most of the frame, one accurately proportioned southern white rhinoceros at smaller scale approaching or drinking at the muddy edge, broad square lip and two-horn silhouette still recognizable, scattered shade trees, mixed short grass and taller bunch-grass patches, realistic trampled mud and tracks, dry-season natural color, spacious documentary composition.

**Reject**：河马式全身泡水、游泳或潜水；沼泽和密闭雨林；巨浪；拥挤水塘兽群；豪华 safari 车队；把水面画成主要栖息地；卫星地图、坐标或趋势图。

### 04 `04-mud-coating-after-wallow.webp`

现有素材表现一只白犀站在浅泥塘边、腹侧和四肢覆有湿泥，科学上应题为“泥浴后覆泥”或“离开泥塘”，不能题为“正在翻滚泥浴”。这仍能准确连接寻阴、泥浴与热环境调节研究，但单张静态图不能证明降温幅度、寄生虫去除或行为持续时间。

**Generation prompt**

> One adult southern white rhinoceros just emerged from a shallow mud wallow in open savanna, standing calmly at the muddy edge with a coherent wet mud coating across lower flanks belly and legs, patches of natural grey skin still visible above, broad square lip, long low head, pronounced nuchal shoulder hump and two nasal horns fully readable, realistic heavy body weight and gravity, shallow churned mud and a small water pan behind, restrained natural-history photography.

**Reject**：把站立动物标题写成主动翻滚；河马式游泳、深水淹没头部或溺水；泥浆遮住全部解剖；喜剧 spa 姿势；巨型飞溅；焦油或血液质感；角陷入泥中；不合理镜面皮肤。

### 05 `05-cow-and-calf.webp`

详情场景：一只成年母犀与恰好一只幼仔在短草地安静同行，幼仔贴近母犀侧后方，体型显著较小，只有短小角芽。构图传达长期母育，不加入成年公犀或双胞胎家庭叙事。

**Generation prompt**

> A calm southern white rhinoceros cow walking across short African savanna grass with exactly one dependent calf close beside and slightly behind her flank, both in natural side three-quarter view, cow with broad square lip, low head, strong shoulder hump and two realistic nasal horns, calf clearly smaller with juvenile proportions and only short horn buds, protective spacing without aggression, warm quiet documentary light, full bodies and feet visible.

**Reject**：两只或更多幼仔；成年公犀陪伴成核心家庭；幼仔与母兽同体型或有成人长角；人类式拥抱；不自然站立哺乳；游客触摸；项圈、耳标或可识别具名个体。

### 06 `06-distance-monitoring.webp`

详情场景：两名生态监测人员在前景或中景背对或侧对镜头，以双筒望远镜和记录本或观测镜观察远处一只白犀。人员与动物保持清楚距离，画面强调非侵入观察。不要显示实时坐标、个体识别细节、反盗猎路线或武装部署；一幅图也不能证明种群数量或趋势。

**Generation prompt**

> Non-invasive wildlife monitoring in open southern African grassland: exactly two field ecologists in the foreground or middle distance, viewed from behind or in side profile, quietly using binoculars and a field notebook or spotting scope, observing exactly one distant southern white rhinoceros across a wide safe separation. The rhino remains small but has a recognizable low head, square-lipped silhouette, shoulder hump and two nasal horns. Neutral practical field clothing without brands, no interaction, no bait, no vehicle, no visible location data, restrained conservation-documentary style.

**Reject**：人员接近、围堵、追逐、触摸或投喂；枪械或战术突击姿态；麻醉飞镖；无人机追踪；诱饵和陷阱；可读 GPS 坐标、地图、巡护路线、设备序列号或品牌；把一只远处动物解释为种群普查结果。

## 可直接用于 `species.ts` 的来源与数据对象

下面对象覆盖 `Species` 的必填字段，并与六个既定媒体文件名对齐。最终 WebP 生成后仍需按实图复核 `focalPoint`；目前只给出稳妥初值。

~~~ts
const WHITE_RHINOCEROS_SOURCE_DATE = '2026-08-23' as const;
const WHITE_RHINOCEROS_CONTENT_DATE = '2026-08-23' as const;

const WHITE_RHINOCEROS_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5: Ceratotherium simum',
    url: 'https://www.mammaldiversity.org/taxon/1006111/',
    kind: 'taxonomy',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ceratotherium simum (2020 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4185A45813880.en',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ceratotherium simum cottoni (2020 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T4183A45813838.en',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ceratotherium simum simum (2020 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T39317A45814320.en',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN: African rhino population estimates at the end of 2024',
    url: 'https://iucn.org/press-release/202508/poaching-african-rhinos-down-drought-and-other-threats-drive-losses-globally',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN and TRAFFIC CoP20 analyses: southern white rhinoceros population and range, 2024',
    url: 'https://www.traffic.org/site/assets/files/28130/iucn_traffic_cop20_full_analyses_ver_4.pdf',
    kind: 'distribution',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'SANBI Scientific Authority: southern white rhinoceros non-detriment finding, October 2024',
    url: 'https://www.sanbi.org/wp-content/uploads/2025/07/White-rhino_Oct-2024.pdf',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC: African rhino conservation 2025–2035',
    url: 'https://doi.org/10.2305/RIGA8357',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Harley et al. 2016: mitochondrial genomes and white rhinoceros species definitions',
    url: 'https://doi.org/10.1007/s10592-016-0861-2',
    kind: 'taxonomy',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Groves 1972: Ceratotherium simum, Mammalian Species',
    url: 'https://doi.org/10.2307/3503966',
    kind: 'general',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Garand et al. 2025: rhinoceros body mass records compared with free-ranging field data',
    url: 'https://doi.org/10.1002/zoo.70034',
    kind: 'general',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Endo et al. 1999: morphology of the white rhinoceros intestinal tract',
    url: 'https://doi.org/10.1046/j.1439-0264.1999.00210.x',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Steuer et al. 2010: digestion in grazing and browsing rhinoceroses',
    url: 'https://doi.org/10.1016/j.cbpa.2010.03.006',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Plochocki et al. 2017: histological study of white rhinoceros integument',
    url: 'https://doi.org/10.1371/journal.pone.0176327',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Tichagwa et al. 2020: factors influencing white rhinoceros activity and behaviour',
    url: 'https://doi.org/10.1111/aje.12770',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Marneweck et al. 2017: information in white rhinoceros dung odours',
    url: 'https://doi.org/10.1098/rspb.2016.2376',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Schwarzenberger and Hermes 2023: comparative rhinoceros gestation',
    url: 'https://doi.org/10.1016/j.ygcen.2023.114214',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Waldram, Bond and Stock 2008: white rhinoceros as a context-dependent ecosystem engineer',
    url: 'https://doi.org/10.1007/s10021-007-9109-9',
    kind: 'ecology',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Rookmaaker 2019: Debunked, the name of the White rhinoceros',
    url: 'https://doi.org/10.69649/pachyderm.v60i.47',
    kind: 'general',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Ol Pejeta Conservancy: rhino conservation and the last two northern white rhinoceroses',
    url: 'https://www.olpejetaconservancy.org/what-we-do/conservation/wildlife-conservation/rhinos/',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
  {
    title: 'Leibniz-IZW BioRescue: northern white rhinoceros embryos and transfer attempts, August 2025',
    url: 'https://www.izw-berlin.de/en/press-release/biorescue-scientists-produced-three-new-embryos-and-began-using-northern-white-rhino-embryos-in-embryo-transfers-in-the-race-to-save-the-species.html',
    kind: 'conservation',
    accessedAt: WHITE_RHINOCEROS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const whiteRhinoceros = {
  id: 'species-ceratotherium-simum',
  slug: 'white-rhinoceros',
  names: {
    zh: '白犀',
    en: 'White Rhinoceros',
    aliases: ['Square-lipped Rhinoceros'],
  },
  scientificName: 'Ceratotherium simum',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Perissodactyla', '奇蹄目'),
    taxon('Rhinocerotidae', '犀科'),
    taxon('Ceratotherium', '白犀属'),
  ),
  conservation: conservation('NT', 'decreasing', 2020),
  distribution: {
    realms: ['terrestrial'],
    continents: ['非洲'],
    regions: ['南部非洲', '东非', '中非', '西非'],
    countries: [
      '博茨瓦纳',
      '科特迪瓦',
      '刚果民主共和国',
      '斯威士兰',
      '肯尼亚',
      '莫桑比克',
      '纳米比亚',
      '卢旺达',
      '塞内加尔',
      '南非',
      '乌干达',
      '赞比亚',
      '津巴布韦',
    ],
    range:
      '现存数量几乎全部为南方白犀，分布由南非原生核心、南部非洲多国的现存或重引入种群，以及东非、中非和西非的辅助迁殖或引入种群组成。2024 年报告记录十三国，但部分极小种群采用 2023 年资料；这些种群没有构成连续自然分布带。北方白犀历史分布于中北部非洲，当前已知两只雌性在肯尼亚受管理保育。',
    center: { lat: -22, lng: 25 },
  },
  habitats: [
    {
      name: '短草放牧草坪',
      realm: 'terrestrial',
      description:
        '主要取食生境；白犀以宽方唇贴地割取短而多叶的禾草，并通过反复放牧维持部分短草斑块。',
      isPrimary: true,
    },
    {
      name: '稀树草原与 bushveld 镶嵌景观',
      realm: 'terrestrial',
      description:
        '草地、疏灌丛和零散乔木提供短草、较高丛生草、阴凉与移动通道；现存地点多受保护或围栏管理。',
    },
    {
      name: '浅水塘、排水线与泥塘边缘',
      realm: 'terrestrial',
      description:
        '提供饮水、泥浴和炎热时段的热环境调节资源；这些地点不构成淡水生活史或水生生境。',
    },
  ],
  measurements: {
    length: {
      min: 3.35,
      max: 3.77,
      unit: 'm',
      note: '头体长，Groves 1972 的四成体历史样本；不是全物种极值',
    },
    height: {
      min: 1.71,
      max: 1.85,
      unit: 'm',
      note: '肩高，Groves 1972 的四成体历史样本',
    },
    weight: {
      min: 1.4,
      max: 2.4,
      unit: 't',
      note: '野外参考；成年雌性约 1.4—1.8 吨，成年雄性约 2.0—2.4 吨',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['短而多叶的禾草', '禾本科草', '较高且纤维较粗的丛生草'],
    description:
      '大型食草者，以宽方唇贴地割取禾本科草；优先利用短草，短草不足时可转食较高、纤维较粗的丛生草，并通过扩大的结肠进行后肠发酵。',
  },
  activity: [
    '昼夜均可活动，天气、温度、时段、月相、生境和年龄性别会改变采食与移动节律',
    '炎热时段常休息、寻阴、饮水或泥浴，皮肤上的泥层也可参与热环境调节与皮肤护理',
    '凝聚关系以母子和小型亚成体组合为主；成年公犀通常独居',
    '繁殖公犀维持领域，其他个体的活动范围可重叠',
    '共同粪堆中的气味可传递性别、年龄、领域身份和发情状态信息',
  ],
  tags: [
    '非洲',
    '奇蹄目',
    '巨型食草动物',
    '方唇食草者',
    '草原生态工程师',
    'IUCN 近危',
    '依赖持续保护',
  ],
  summary:
    '现存最大的犀牛，以宽方唇贴地取食禾草。南方白犀曾从十九世纪末的低谷恢复；盗猎和干旱仍造成损失，高昂安保成本也在削弱保护能力。',
  description:
    '白犀是现存最大的犀牛，也是依靠扩大的结肠发酵植物纤维的巨型食草动物。它把长头垂向地面，用宽方唇割取禾草；炎热时会饮水、寻阴或泥浴。稳定的社会组合以母子和小型亚成体群为主，成年公犀多独居并维持领域。各性别和年龄阶段的个体都会访问公共粪堆，白犀可从粪便气味中辨别性别、年龄、公犀领域身份和母犀发情状态等信息。2024 年末，全球估计有 15,752 只白犀，其中南方白犀 15,750 只；北方白犀仅存两只雌性。保护机构需要维护安全且资源充足的草原，并按遗传、年龄和性别结构调配个体；执法部门负责追查跨国盗猎与贩运，当地社区应参与决策并分享合理收益。',
  storySections: [
    {
      key: 'two-subspecies',
      label: '分类边界',
      title: '南方与北方白犀的现状',
      body:
        '南方白犀构成当前几乎全部现存数量，北方白犀则为极危并可能已在野外灭绝，只余两只无法自然延续种群的雌性。物种级近危状态不能遮住北方亚种的危机，北方亚种的两只也不能代替整个物种数量。',
    },
    {
      key: 'square-lipped-grazer',
      label: '形态与食性',
      title: '宽方唇贴地割取禾草',
      body:
        '宽而平直的唇缘像一把贴地工作的割草器，低垂长头与颈肩隆起承受持续采食姿势。白犀优先取食短草，也能处理较高、纤维较粗的丛生草；钩状抓握唇和枝叶浏览属于黑犀的另一套形态。',
    },
    {
      key: 'water-mud-and-heat',
      label: '生理与行为',
      title: '白犀会饮水、泥浴和寻阴',
      body:
        '白犀是陆生动物，浅水塘和泥塘供它饮水、泥浴，树荫可减少热暴露。一项针对一只老年雌性南方白犀的皮肤组织学研究发现汗腺分布稀疏，研究者据此推测泥浴和寻阴可辅助散热。画面中的湿泥只能说明它近期接触过泥浆，无法反映散热效果。',
    },
    {
      key: 'social-scent-map',
      label: '社会与通讯',
      title: '母子组合与公共粪堆',
      body:
        '研究记录的稳定组合以母子和小型亚成体群为主，成年公犀多独居。各性别和年龄阶段的个体都会访问公共粪堆，并可从粪便气味中辨别性别、年龄、公犀领域身份和母犀发情状态等信息。',
    },
    {
      key: 'grazing-lawns',
      label: '生态作用',
      title: '白犀改变草高和火烧格局',
      body:
        '较湿润稀树草原的移除实验显示，白犀会维持短草草坪并降低草本燃料的连续性。移除白犀的样地草层更高，火烧范围也更连片。该效应取决于降水和当地草食动物组合；在较干旱地点，小型食草动物可维持部分短草结构。',
    },
    {
      key: 'conservation-dependent-recovery',
      label: '保护',
      title: '南方白犀的恢复依赖持续投入',
      body:
        '迁地扩散、重引入、保护地与持续监测让南方白犀从十九世纪末的低谷恢复，但非法犀角需求、有组织犯罪、干旱和高昂安保成本仍可迅速逆转成果。保护机构需要扩展安全且资源充足的草原，按承载量和遗传结构调配个体；政府还需保障社区参与和合理收益，并追查跨国盗猎与贩运。',
    },
  ],
  keyFacts: [
    'IUCN 2020 年将整个白犀物种评为近危，种群趋势为下降。',
    '2024 年末估计有 15,752 只白犀，包括 15,750 只南方白犀和 2 只北方白犀；该数字统计总个体。',
    '北方白犀为极危（可能已在野外灭绝）；已知存活的两只均为雌性。',
    '成年雌性野外体重参考约 1.4—1.8 吨，雄性约 2.0—2.4 吨，是现存最大的犀牛。',
    '宽方唇适合贴地采草；白犀是结肠显著扩大的后肠发酵者。',
    '公共粪堆中的气味可传递性别、年龄、公犀领域身份和母犀发情状态。',
    '常见的 white 源自 wijd 误译之说缺少历史证据，白犀皮肤本身是灰色。',
  ],
  threats: [
    '非法犀角需求驱动的盗猎、贩运和跨国有组织犯罪',
    '保护地、私人和社区保育地长期安保与管理成本上升',
    '草原转化、栖息地破碎和围栏景观限制扩散与种群增长',
    '干旱、低质量草场及局地管理变化造成死亡和繁殖下降',
    '小型隔离种群的性别年龄失衡、近交和随机事件风险',
    '低繁殖率使成年个体损失无法快速补回',
    '北方白犀只余两只雌性，无法依靠自然繁殖恢复',
  ],
  conservationActions: [
    '保护并扩展有足够草、水、阴凉和泥塘资源的安全草原与稀树草原',
    '依据承载量、遗传、年龄和性别结构开展转移、重引入与元种群管理',
    '以个体识别、距离抽样和一致报告持续监测数量、繁殖、死亡和分布',
    '开展情报主导的反盗猎、跨境执法、司法协作和非法资金链调查',
    '研究并减少非法犀角市场需求，同时执行 CITES 的种群与标本级贸易限制',
    '让当地社区参与决策，保障其合法权利并分享合理收益，避免将保护成本集中转嫁给社区',
    '为保护地、私人和社区保育地提供稳定资金、治理与专业能力',
    '去角需要麻醉并定期重复，只能作为持续安保和监测的辅助措施',
    '谨慎推进北方白犀辅助生殖研究，不把胚胎数量或移植尝试等同于种群恢复',
  ],
  metrics: {
    adultMassKg: [1400, 2400],
    lifespanYears: [30, 40],
  },
  featuredStats: [
    {
      key: 'end-2024-population',
      label: '2024 年末估计',
      value: '15,752',
      unit: '只总个体',
      note: '15,750 只南方白犀加 2 只北方白犀；不是成熟个体数或同步普查',
    },
    {
      key: 'adult-field-mass',
      label: '成年野外体重参考',
      value: '雌约 1.6 / 雄约 2.2',
      unit: '吨',
      note: '汇总资料的平均参考；雌约 1.4—1.8 吨，雄约 2.0—2.4 吨',
    },
    {
      key: 'gestation',
      label: '平均妊娠期',
      value: '约 504',
      unit: '天',
      note: '比较研究范围 480—525 天，约 16—17 个月',
    },
    {
      key: 'reporting-countries',
      label: '2024 报告国家',
      value: '13',
      unit: '国',
      note: '含重引入和辅助迁殖种群；部分极小种群采用 2023 年资料',
    },
  ],
  media: {
    image: './images/species/white-rhinoceros/01-square-lipped-savanna-portrait.webp',
    alt: '一只成年南方白犀在短草稀树草原安静站立，宽方唇、低垂长头、颈肩隆起和两只鼻角清楚可见',
    focalPoint: { x: 0.68, y: 0.52 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/white-rhinoceros/02-square-lip-grazing.webp',
        alt: '一只完整的南方白犀低头，以宽而平直的方唇贴地取食短草',
        title: '贴地工作的方唇',
        caption: '白犀主要取食禾本科草；钩状抓握唇与枝叶浏览属于黑犀的典型组合。',
        focalPoint: { x: 0.51, y: 0.58 },
      },
      {
        image: './images/species/white-rhinoceros/03-grassland-water-pan-habitat.webp',
        alt: '短草稀树草原环绕浅水塘，一只小型远景白犀完整走过右侧开阔地',
        title: '草原中的关键水源',
        caption: '水塘供白犀饮水和泥浴，白犀仍是陆生动物。',
        focalPoint: { x: 0.68, y: 0.59 },
      },
      {
        image: './images/species/white-rhinoceros/04-mud-coating-after-wallow.webp',
        alt: '一只完整的南方白犀站在浅泥塘旁，腹侧和四肢仍覆盖着带湿亮反光的泥层',
        title: '泥浴后留下的泥层',
        caption: '白犀会寻阴或泥浴以帮助散热；画面中的湿泥只能说明它近期接触过泥浆。',
        focalPoint: { x: 0.53, y: 0.54 },
      },
      {
        image: './images/species/white-rhinoceros/05-cow-and-calf.webp',
        alt: '一只成年白犀母兽与一只低头宽平唇的短角幼仔在短草地并行，两只动物均完整可见',
        title: '漫长的母子联系',
        caption: '幼仔通常在约 2.2—3.3 岁、接近母兽下一次生产时独立。',
        focalPoint: { x: 0.53, y: 0.58 },
      },
      {
        image: './images/species/white-rhinoceros/06-distance-monitoring.webp',
        alt: '两名生态监测人员在左侧用双筒望远镜、观测镜和平板记录，远处右侧一只完整白犀与他们隔着大片草原',
        title: '保持距离的长期监测',
        caption: '研究人员通过非侵入观察记录个体；估算数量和趋势还需长期、标准化调查。',
        focalPoint: { x: 0.52, y: 0.56 },
      },
    ],
  },
  sources: WHITE_RHINOCEROS_SOURCES,
  featured: true,
  publishedAt: WHITE_RHINOCEROS_CONTENT_DATE,
  updatedAt: WHITE_RHINOCEROS_CONTENT_DATE,
} as const satisfies Species;
~~~

## 不确定性与更新触发条件

1. IUCN 若发布取代 2020 版的全球重评，应同步更新 `code`、`trend`、`assessedYear`、可用的 `criteria` 和成熟个体口径；不能只改年份。
2. IUCN/TRAFFIC 后续状态报告若更新 2024 年末估计，应同步改数量卡、十三国清单、国家数和 `range`，并保留新数据的报告年份。
3. 北方白犀若出现经官方确认的活产、死亡、胚胎进展或野外证据，应更新两亚种说明；胚胎形成、移植、妊娠和活产是不同里程碑。
4. MDD 若正式接受北方白犀为独立物种，仓库需要重新评估分类单元边界、slug、故事和图像默认口径；单篇分类论文不足以直接拆分条目。
5. CITES 每次缔约方大会或新附录生效后，应重新核对斯威士兰、纳米比亚和南非的种群级注释；附录等级与 IUCN 风险字段必须分开维护。
6. 第四图现有内容是站立且覆有湿泥的个体，标题和 caption 应保持“泥浴后”；如果以后换成明确翻滚或躺卧画面，才可改写为“正在泥浴”。
7. 六张最终 WebP 上线前，应逐图检查方唇、两角、三趾、四肢完整、裁切安全和人物距离，并按实图调整 `focalPoint`。
