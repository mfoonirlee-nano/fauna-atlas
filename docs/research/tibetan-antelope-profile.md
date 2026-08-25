# 藏羚（藏羚羊，*Pantholops hodgsonii*）完整物种档案研究

- 分类单元：`Pantholops hodgsonii` (C. Abel in Anonymous, 1826)
- 推荐中文主名：藏羚；中文别名：藏羚羊
- 推荐英文主名：Tibetan Antelope；英文别名：Chiru
- 检索与核验日期：2026-08-25
- 用途：为 `src/data/species.ts` 的完整物种档案和六张原创图像提供可追溯底稿
- 证据口径：现行分类采用 Mammal Diversity Database，中国名称和法律地位采用主管部门名录，全球保护状态采用 IUCN 2016 评估，国际贸易地位采用 CITES，形态和自然史以物种专论及原始研究为主
- 敏感信息：分布只保留高原区域、保护地网络和迁徙廊道类型，不提供产仔地或近期群体的精确坐标

## 编辑结论

藏羚是青藏高原特有的中型牛科有蹄类，但不是“中国特有种”。Mammal Diversity Database 当前接受 `Pantholops hodgsonii`，把 Chiru 列为英文主名、Tibetan Antelope 列为其他常用名，并记录现生分布国家为中国和印度。中国《生物多样性红色名录·脊椎动物卷（2020）》使用中文名“藏羚”，仓库 TODO 使用更常见的“藏羚羊”。推荐产品主名采用“藏羚 / Tibetan Antelope”，把“藏羚羊 / Chiru”纳入别名，兼顾官方名称、公众识别和英文检索。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1006210/) [中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

当前全球 IUCN 等级为近危 `NT`，趋势为上升，评估年份为 2016。该条目没有可录入的受胁标准代码，因此应实现为 `conservation('NT', 'increasing', 2016)`，不添加 `A`、`B` 或 `C` 标准。IUCN 将它从濒危下调到近危，不表示保护已经完成。评估理由是严格的原生境保护、反盗猎和披肩贸易控制维持了恢复；保护一旦松动，商业盗猎可能再次造成达到受胁阈值的快速下降。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en) [IUCN 2016 status-change announcement](https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list)

数量需要分开记录。IUCN 2016 公告把当时种群描述为约 100,000 至 150,000 只；中国国家林草局 2025 年公开口径为中国野生藏羚已超过 300,000 只。两者来自不同年份、空间口径和统计体系，均不是一次同步全球普查，也没有提供可直接录入的成熟个体区间。`metrics.estimatedMatureIndividuals` 应留空，正文则保留两套带年份的估算。[IUCN 2016 status-change announcement](https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list) [中国政府网 2025 年国家林草局数据](https://english.www.gov.cn/archive/statistics/202503/03/content_WS67c551dbc6d0868f4e8f0410.html)

迁徙叙事必须限定对象。物种专论记录至少五个迁徙种群，部分往返范围可达数百千米，同时明确存在定居种群。长距离迁徙以成年雌性和随行幼年雌性为主，雄性多留在越冬区域附近。产品不能写“所有藏羚每年迁徙 300 千米”，也不能把一条可可西里路线代表整个物种。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [Buho et al. 2011](https://doi.org/10.1016/j.asr.2011.02.015)

## 名称与分类

### 推荐名称字段

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| `scientificName` | `Pantholops hodgsonii` | MDD 当前接受名 |
| `names.zh` | 藏羚 | 中国官方红色名录和国家保护名录使用的名称 |
| `names.en` | Tibetan Antelope | IUCN、中国政府英文资料和公众检索常用名 |
| `aliases` | 藏羚羊；Chiru | TODO 名称和 MDD 英文主名 |
| `slug` | `tibetan-antelope` | 与公众英文名和素材目录一致，不承担分类含义 |

MDD 把 Chiru 作为 Primary Common Name，把 Tibetan Antelope 作为 Other Common Name。两者指向同一物种，不是两个亚种。`Pantholops` 是单型属，现生仅包含本种。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1006210/) [Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

中国官方名录把它标作区域特有，但该字段属于中国国家尺度评估。现行 MDD 同时列中国和印度，因此产品不得写“仅分布于中国”。更准确的地域标签是“青藏高原特有种”。[中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1006210/)

### 分类图谱

| 分类阶元 | 学名 | 中文名 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Mammalia | 哺乳纲 |
| 目 | Artiodactyla | 偶蹄目 |
| 科 | Bovidae | 牛科 |
| 属 | Pantholops | 藏羚属 |
| 种 | Pantholops hodgsonii | 藏羚 |

MDD 进一步把它置于羚羊亚科 Antilopinae、羊族 Caprini。旧资料曾使用 Pantholopinae 或把它放在其他亚科位置，仓库 schema 不含亚科和族字段，应跟随当前 MDD 的目、科、属层级，不把历史亚科当成 `family`。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1006210/)

## 全球与中国保护状态

### IUCN 字段

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| system | IUCN Red List | 仓库固定值 |
| code | `NT` | Near Threatened，近危 |
| trend | `increasing` | 2016 评估记录的全球趋势 |
| assessedYear | `2016` | 评估年份，不是当前年份 |
| criteria | 不填 | 近危条目没有可录入的受胁标准代码 |
| assessor | IUCN | 由现有 helper 统一生成 |

完整引用为 IUCN SSC Antelope Specialist Group 2016, *Pantholops hodgsonii*, The IUCN Red List of Threatened Species 2016, e.T15967A50192544。条目以保护依赖为核心理由：严格执法、原生境保护和对沙图什披肩制造与贸易的控制维持了当前状态，放松这些措施预计会重新触发商业盗猎和快速下降。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en)

中国《生物多样性红色名录·脊椎动物卷（2020）》同样将藏羚评为近危 `NT`。这是中国区域评估，不能替换全球 `conservation` 字段，也不能解释全球上升趋势。生态环境部和中国科学院于 2023 年发布该 2020 版名录。[生态环境部公告](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/t20230522_1030745.html) [官方名录 PDF](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

### 数量时间线与口径

| 时间 | 数值 | 可写结论 | 不能写成 |
| --- | --- | --- | --- |
| 历史推测 | 约一百万或更多 | 仅用于表现历史降幅的数量级 | 精确历史普查 |
| 20 世纪 90 年代中期 | 约 65,000 至 72,500 | 商业盗猎高峰后的范围尺度估算 | 同步全域计数 |
| 2016 | 约 100,000 至 150,000 | IUCN 对恢复后种群的公开估算 | 2026 当前值或成熟个体数 |
| 2024 | 中国三省区合计约 300,000；可可西里超过 70,000 | 中国政府公开的行政统计口径 | 全球总数或 IUCN 重评结果 |
| 2025 | 中国超过 300,000 | 国家林草局公布的最新全国数量级 | 精确到个位的普查 |

物种专论指出历史值和 20 世纪 90 年代估算都受辽阔分布、季节移动和分群影响，没有完成过足以覆盖整个种群的充分同步普查。IUCN 2016 的恢复估算和中国 2025 的行政估算说明恢复方向明确，但数字不能直接拼成一条方法一致的统计序列。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [IUCN 2016 status-change announcement](https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list) [中国政府网 2024 年保护进展](https://english.www.gov.cn/news/202402/26/content_WS65dc32e8c6d0868f4e8e45a1.html) [中国政府网 2025 年国家林草局数据](https://english.www.gov.cn/archive/statistics/202503/03/content_WS67c551dbc6d0868f4e8f0410.html)

推荐不设置 `metrics.estimatedMatureIndividuals`。如果详情页展示数字，应使用“2016 年 IUCN 估算约 10 万至 15 万”和“2025 年中国主管部门称中国超过 30 万”两行，并明确口径不同。

## 分布、海拔和地图边界

现生范围集中在青藏高原。MDD 当前结构化国家字段列中国和印度，文字范围覆盖中国西藏、青海、南疆和四川一带，以及印度拉达克北部。2008 年物种专论把主体范围估为约 800,000 平方千米，指出印度拉达克仅有很少数量，主要在夏季出现，并认为尼泊尔历史记录极少。产品国家字段采用中国、印度，不把尼泊尔列作当前稳定分布国。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1006210/) [Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

权威物种专论汇总的海拔范围是 3,250 至 5,500 米。大部分分布位于 4,000 米以上，最低值来自新疆的历史记录。`metrics.elevationM` 可采用 `[3250, 5500]`，但图像和正文应把 4,000 米以上写成常见范围，而不是把每只个体固定在某一高度。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [Xia et al. 2007](https://doi.org/10.1017/S0030605307000116)

建议分布字段：

- `realms: ['terrestrial']`
- `continents: ['亚洲']`
- `countries: ['中国', '印度']`
- `endemicTo: ['青藏高原']`
- `regions: ['羌塘高原', '可可西里与三江源西部', '昆仑山与阿尔金山高原', '青藏高原东缘部分地区', '拉达克北部']`
- `center: { lat: 34.5, lng: 89 }`

地图中心只用于把视图定位到青藏高原，不代表密度中心、产仔地或迁徙终点。图层不应显示近期项圈点位、产仔群位置或可供追踪的具体路线。

## 生境

藏羚主要利用开阔的高海拔高寒草原和荒漠草原，地形多为平坦至缓起伏，植被稀疏、初级生产力低。物种专论明确指出它并不经常进入陡峭山地，因此图像不能把它塑造成岩羊式的悬崖动物。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

1. **高寒草原**：低矮禾草、莎草和杂类草构成开放觅食地，也是主要越冬、交配和迁徙景观。建议标为 `isPrimary`。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)
2. **高寒荒漠与荒漠草原**：植被覆盖更低，矮灌木和稀疏禾草形成斑块；部分产仔地位于这类开阔景观。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)
3. **高寒草甸**：部分夏季活动区和迁徙区包含莎草草甸，但不能据此把整个物种画在繁茂湿草甸中。[Xia et al. 2007](https://doi.org/10.1017/S0030605307000116)
4. **高原河谷和交通廊道附近的开阔地**：迁徙种群需要跨越河流、公路和铁路，桥下通道及其连接的连续草原是功能性生境，不只是工程设施。[Xia et al. 2007](https://doi.org/10.1017/S0030605307000116) [Xu et al. 2019](https://doi.org/10.1371/journal.pone.0211798)

图像中的远景应是无树或近乎无树的开阔高原、低矮植被、浅丘和宽阔天际线。避免非洲稀树草原、茂密针叶林、湿地芦苇、鲜花草甸、陡峭山羊悬崖和雪山旅游明信片式构图。

## 形态、测量与寿命

### 性别差异和识别组合

藏羚躯干较结实，四肢细长，被毛浓密、细软。基础体色为浅黄褐至淡棕，腹面发白。成熟雄性在交配季会形成醒目的浅色至白色婚装，与近黑色面部和四肢前侧的黑色条纹形成对比。雌性没有角，体型较小，整体维持黄褐色。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

雄性只有一对角。角细长、黑色、近乎直立并呈窄竖琴形，具有轻微的三重波状弯曲，基部有环纹，尖端锐利。通常角长 54 至 60 厘米，超过 70 厘米属极端记录；环纹不能用于准确判龄。图像不能画成分叉鹿角、粗壮盘羊角、螺旋捻角、向后大弧形山羊角或宽张的非洲瞪羚角。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

雌雄吻部两侧都有圆鼓的鼻囊，雄性更明显。其功能仍不确定，物种专论只提出可能参与雄性发情期发声。不得把它写成已证实的高原增氧器官，也不能画成长鼻羚式垂挂鼻筒。耳朵短、略尖且背面发白；尾长 13 至 14 厘米，短、无簇毛，颜色与臀背相近；两性都没有醒目的白色臀斑。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 稳定测量值

物种专论给出的成年样本很小，但同一来源提供了一组协调的性别均值：成年雌性体重 `25.9 ± 2.9 kg`（`n=9`）、肩高 `74.4 ± 2.2 cm`（`n=8`）；成年雄性体重 `38.8 ± 2.5 kg`（`n=2`）、肩高 `83.0 ± 1.4 cm`（`n=2`）。这些值适合展示“雌约 26 千克、雄约 39 千克”和“雌约 74 厘米、雄约 83 厘米肩高”，不适合伪装成全物种极值范围。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

| 字段 | 推荐处理 | 理由 |
| --- | --- | --- |
| `measurements.height` | 留空；在 `featuredStats` 注明雌雄均值 74.4 / 83.0 cm | 小样本性别均值，不是个体最小值和最大值 |
| `measurements.weight` | 留空；在 `featuredStats` 注明雌雄均值 25.9 / 38.8 kg | 小样本性别均值，不是全球体重包络 |
| `metrics.adultLengthCm` | 留空 | 没有找到足够稳定且口径清楚的头体长范围 |
| `metrics.adultMassKg` | 留空 | 现有强来源给性别均值而非全物种范围 |
| `metrics.elevationM` | `[3250, 5500]` | 物种专论汇总范围 |
| `metrics.topSpeedKph` | 留空 | 网络常见的 70 至 80 km/h 及超长持续距离缺少直接野外测量 |

细绒毛纤维直径约 7 至小于 10 微米，长护毛约 50 至 100 微米。该数据可解释沙图什材料为何难以与普通羊毛直观区分，也支持法证鉴定故事；不要把纤维数字夸大成无来源的“世界最细”排名。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 寿命边界

现有专论没有给出经长期追踪证实的野外寿命。作者仅按同体型有蹄类推测野外最大寿命“可能超过 10 年”，并指出 88 个下颌样本中只有 3 个被判为老年，圈养个体也没有维持到足以记录寿命。产品不应填写 `lifespanYears`，也不应把“10 年”写成平均寿命或可靠上限。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

## 食性与觅食

藏羚是反刍植食动物，也是混合取食者。食物随地点和季节包括禾草、莎草、杂类草以及矮灌木的部分枝叶。有限粪便显微研究中，禾草和莎草合计约占 33% 至 66%，但不同区域的植物比例变化很大，不能把这个区间或某个植物种固定为全物种菜单。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

冬季常利用针茅等禾草，也会用前蹄扒开薄雪取食；夏季在草甸和草原中利用嵩草等莎草，荒漠草原中可取食驼绒藜等矮灌木。上述植物只是已有研究地点的代表，不应在产品里列成唯一食物。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

推荐 `foods` 使用功能类群：

- 高寒草原禾草
- 莎草
- 高山杂类草
- 矮灌木嫩枝和叶
- 雪下枯草与冬季植物材料

推荐食性说明：

> 反刍植食者，随季节和生境在禾草、莎草、杂类草及矮灌木之间调整；冬季会扒开薄雪寻找稀疏植物。

## 活动、社会结构与交流

青藏铁路迁徙监测把藏羚描述为昼间活动、夜间休息，并指出昼行性使迁徙群无法通过简单改到夜间来避开游客、车辆和施工人员。推荐 `activity` 包含“昼行性”，但不要给出全物种固定的小时表。[Xia et al. 2007](https://doi.org/10.1017/S0030605307000116)

藏羚会结群，群型和群体大小受性别、季节、迁徙、天气和昆虫干扰影响。可见雄性群、雌性与幼崽群、混合群和独居个体。物种专论认为最持久的关系大概是母亲与当年幼崽延续到第二年；迁徙时雌性群可超过 1,000 只，非迁徙期常分散为不超过 20 只的小群。产品可写“季节性大群与日常小群切换”，不能把千只群当作常态。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

非发情期通常存在性别分群。雄性约在 10 至 11 月龄离开母兽，与同龄或成年雄性结合；多数幼年雌性会陪伴母兽直至下一胎出生前。推荐标签可采用“性别分群”和“母幼联系”。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

发情期集中在 11 月至 12 月。成熟雄性不建立固定领地，而是维护小型雌性群；羌塘 312 个发情群样本中，70% 由 1 至 4 只雌性组成。雄性互动以姿态展示、追逐和低头威胁为主，角斗只占该研究所记录互动的一小部分。鼻囊可能参与低沉发声，但功能没有得到实验确认。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

## 繁殖、育幼与迁徙

### 繁殖

性成熟年龄尚不清楚，物种专论按同体型有蹄类推测约 1.5 至 2.5 岁，妊娠期约 6 至 6.5 个月。两项数值都带推测成分，不适合做 featured stat。迁徙雌性通常在 6 月下旬至 7 月上旬产一只幼崽。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

新生幼崽早成。实地记录显示，它们可在出生后 12 至 15 分钟站起并吃奶，约一小时后跟随母兽。图像可以画“刚能站立、紧跟母兽”，不能画巢穴、洞穴育幼、双胞胎常态或被母兽叼行。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

极端天气可造成当年近乎完全的繁殖失败，也会使幼体、亚成体和雌性承担更高死亡风险。这是高原自然波动的一部分，不应把每年幼崽数量按固定比例从总种群反推。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [Schaller and Ren 1988](https://doi.org/10.2307/1381361)

### 迁徙不是全员行为

至少五个种群被记录为迁徙型，部分移动 300 至 400 千米；另有定居或可能采取机会性迁徙的种群。迁徙主体通常是怀孕雌性和部分前一年出生的雌性，雄性多留在越冬地附近。迁徙雌性在 5 月至 6 月前往产仔地，产仔后于 7 月下旬至 8 月上旬带幼崽返回。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

卫星追踪为距离和时间提供了个体尺度证据。Buho 等追踪两只雌性从 2007 年 8 月至 2009 年 4 月，两者冬季地不同但使用同一产仔地；冬季地至夏季地为 250 至 300 千米，产仔地只停留 8 至 20 天，整个季节性迁徙周期约三个月。样本只有两只，数值不能外推成全物种固定路线。[Buho et al. 2011](https://doi.org/10.1016/j.asr.2011.02.015)

2019 年研究分析 10 只装有 Argos 发射器的雌性，其中 6 只提供可用的 8 个“个体年”迁徙周期。平均迁徙距离为 163 至 271 千米；模型显示它们接近五北桥通道时偏离更优路线，使用该通道增加了移动距离。研究证明通道能保持连通，也说明“有通道”不等于位置和效率已经最优。[Xu et al. 2019](https://doi.org/10.1371/journal.pone.0211798)

## 生态作用

### 高原植食者

藏羚通过取食禾草、莎草、杂类草和矮灌木参与高寒草原食物网。现有强证据描述了食物组成和与其他有蹄类的空间、食物分化，却没有直接证明它是“生态系统工程师”、种子传播关键种或能按固定比例促进草地更新。推荐使用“高原大型植食者”而不是“关键工程师”。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

它与藏原羚、野牦牛、藏野驴、岩羊和西藏盘羊等共享高原景观。平坦开阔地、丘陵和不同海拔带的利用存在分化，食物与空间分隔可能降低竞争。该格局随地点和季节改变，不能把所有物种画在同一密集群落里。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 捕食与腐食链

狼会直接捕食成年藏羚和迁徙群个体。赤狐、棕熊、雪豹、欧亚猞猁、金雕等也有捕食或取食记录；棕熊、藏狐、渡鸦和大型猛禽会利用尸体。综述认为藏羚通常不是任何捕食者全年食谱中的主要比例，但迁徙和产仔季的集中个体可成为季节性重要资源。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

在缺少树枝的高原，一项观察甚至记录到大鵟使用藏羚角和腿骨筑巢。这个例子适合作为食物网之外的物质利用故事，但不能推断整个高原猛禽都依赖藏羚骨筑巢。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

推荐生态作用表述：

> 藏羚把稀疏高寒植被转化为大型草食动物生物量，并在迁徙和产仔季为狼等捕食者及多种食腐动物提供季节性资源；它与其他高原有蹄类通过空间和食物分化共同利用开放草原。

## 威胁

### 商业盗猎和沙图什贸易

20 世纪 80 年代至 90 年代初，制作沙图什披肩的商业盗猎造成了最严重的历史下降。细绒不能像家养山羊毛那样剪取或梳取，获取材料会杀死藏羚；IUCN 公开资料估计制作一条披肩需要 3 至 5 张皮。严格执法后数量恢复，但 CITES 仍把非法披肩贸易视为需要持续跨国执法的问题。[IUCN 2016 status-change announcement](https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list) [CITES Resolution Conf. 11.8 (Rev. CoP17)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-11-08-R17.pdf)

### 生境破碎和人为干扰

道路、铁路、矿业和相关人类活动会改变生境及迁徙行为。2004 年可可西里 10 千米铁路段监测中，西迁藏羚全部使用跨越结构，返程有 56% 使用跨越结构；遗留设备、砖块和地表破坏降低通道利用。追赶、喊叫、靠近拍照和施工人员活动会打散群体，研究者认为这些现场干扰可能比铁路实体本身更严重。[Xia et al. 2007](https://doi.org/10.1017/S0030605307000116)

后续卫星研究显示，五北桥通道确实维持跨铁路连通，却可能迫使个体偏离更优路线。长期监测又表明藏羚会逐渐调整并提高对既有通道的利用。稳妥结论是“通道有效，但位置、地表恢复、连接景观和现场干扰决定效率”，不能写“铁路毫无影响”或“铁路完全阻断迁徙”。[Xu et al. 2019](https://doi.org/10.1371/journal.pone.0211798) [Wu et al. 2021](https://doi.org/10.1080/20964129.2021.1910077)

### 围栏、牲畜与土地利用

羌塘研究指出，冬牧场围栏可能切断迁徙路径并改变野生动物对草场的使用；牲畜增加、矿业、新型草场管理和持续盗猎会叠加影响。竞争强度随天气、放牧量和地点改变，不能写成藏羚与所有牧民或牲畜必然冲突。[Fox et al. 2009](https://doi.org/10.1017/S0030605308001774)

### 天气、犬类和未来气候

深雪和极端暴雪会改变移动并造成幼体、雌性和营养不良个体死亡，家犬也有在深雪条件下捕杀幼年藏羚的局部记录。它们属于真实风险，但不是 20 世纪商业下降的主要原因。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [Schaller and Ren 1988](https://doi.org/10.2307/1381361)

气候适生区模型提出未来可能发生适生地减少和北移，但预测依赖情景、环境变量和分布数据。产品可把气候变化写成需要纳入廊道与长期监测的潜在风险，不应写成已经观测到“超过一半种群消失”。[Pei et al. 2021](https://doi.org/10.1016/j.ecolind.2021.107337)

## 保护行动与法律地位

### 法律和国际贸易

- **中国国家一级重点保护野生动物**：2021 年现行名录列“藏羚 `Pantholops hodgsonii`”为一级。法律等级与 IUCN 近危不是同一套体系。[国家林草局、农业农村部公告](https://www.forestry.gov.cn/main/3957/20210208/145730017725736.html) [官方名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf)
- **CITES 附录 I**：藏羚列入附录 I，国际商业贸易受到附录 I 的严格限制。Resolution Conf. 11.8 要求产地、加工地和消费地打击商业贸易，加强披肩识别、处罚、公众教育和跨国合作。[CITES Appendices](https://cites.org/eng/app/appendices.php) [CITES Resolution Conf. 11.8 (Rev. CoP17)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-11-08-R17.pdf)
- **不是 CMS 附录物种**：CMS 的 Central Asian Mammals Initiative 当前物种页明确写藏羚未列入 CMS 附录，现行物种表的附录 I、II 两栏也都为空；它受 CAMI 工作计划覆盖，不等于进入公约附录。2024 年《世界迁徙物种状况》同样把它列入“全球受胁或近危、尚未列入 CMS 附录的迁徙物种”附表。档案不得写 CMS 附录 I 或 II。[CMS/CAMI current species page](https://cami.cms.int/species/pantholops-hodgsonii) [CMS State of the World's Migratory Species 2024](https://www.cms.int/sites/default/files/publication/State%20of%20the%20Worlds%20Migratory%20Species%20report_E.pdf)

### 可操作措施

1. 维持反盗猎巡护、案件侦查和高风险季节执法，不能因数量恢复而撤掉保护强度。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en)
2. 在产地、加工地、转运地和消费地持续查缉沙图什披肩，培训海关识别纤维与成品，执行具有威慑力的处罚，并开展减少需求的公众传播。[CITES Resolution Conf. 11.8 (Rev. CoP17)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-11-08-R17.pdf)
3. 保护羌塘、阿尔金山、昆仑山、可可西里和三江源西部之间的连续景观，使迁徙种群能在省区和保护地边界之间移动。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)
4. 交通工程按整条迁徙廊道选址和评估通道，移除桥下设备与建筑垃圾，恢复自然地表和植被，并在迁徙期限制游客、施工人员和车辆停留。[Xia et al. 2007](https://doi.org/10.1017/S0030605307000116) [Xu et al. 2019](https://doi.org/10.1371/journal.pone.0211798)
5. 在关键冬季地、迁徙路线和产仔景观避免新围栏；确需围栏时采用野生动物可通过的设计，并在草场承载量中计入野生有蹄类需求。[Fox et al. 2009](https://doi.org/10.1017/S0030605308001774)
6. 用标准化样线、无人机和卫星追踪组合监测。2016 年一次局地无人机调查在两条返迁路线边缘的两个航区共识别 23,063 只藏羚，说明无人机可补充地面计数，也说明局地路线计数不能当作全种群总数。[Hu et al. 2020](https://doi.org/10.1017/S0030605317001673)
7. 把监测结果按年份、区域、季节、性别和方法发布，避免把迁徙峰值、局地密度或行政汇总误读为方法一致的全球普查。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

中国政府资料记录了巡护、反盗猎、栖息地修复和远程视频监测等长期措施，并报告可可西里超过 70,000 只、三省区合计约 300,000 只。它们支持“保护行动与恢复同时发生”的叙事，但不能单凭时间相关性给每项措施分配固定增量。[中国政府网 2024 年保护进展](https://english.www.gov.cn/news/202402/26/content_WS65dc32e8c6d0868f4e8e45a1.html)

## 六个故事角度

### 1. 从濒危到近危，恢复仍靠持续保护

20 世纪商业盗猎使数量从历史上的约百万量级降到 20 世纪 90 年代中期约 65,000 至 72,500。反盗猎、保护地和贸易管制推动恢复，IUCN 2016 将其调整为近危并记录趋势上升。故事的落点应是“保护有效且必须继续”，不是“已经脱险”。[IUCN Red List assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en) [IUCN 2016 status-change announcement](https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list)

### 2. 一条披肩意味着数只藏羚死亡

藏羚细绒无法通过活体剪毛或梳毛获得，制作一条披肩约需 3 至 5 张皮。纤维仅约 7 至小于 10 微米，也增加了执法识别难度。这个故事可把个体解剖、奢侈品需求、法证鉴定和 CITES 执法连接起来。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [IUCN 2016 status-change announcement](https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list) [CITES Resolution Conf. 11.8 (Rev. CoP17)](https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-11-08-R17.pdf)

### 3. 成年仍使用高亲氧性的幼年血红蛋白

2020 年实验研究发现，藏羚成年红细胞持续表达高氧亲和力的幼年阶段血红蛋白亚型，它取代了其他牛科成年个体通常表达的低亲和力亚型。研究还解析了相关珠蛋白基因调控变化。这是有实验支撑的高海拔适应故事，比“鼻囊能增氧”可靠得多。[Signore and Storz 2020](https://doi.org/10.1126/sciadv.abb5447)

### 4. 迁徙主角是怀孕雌性

部分雌性从越冬地走向产仔地，短暂停留并生下一只幼崽，再带幼崽返回；雄性和定居种群并不参加同样的长距离迁徙。故事可以追随一只雌性经历五月出发、六月或七月产仔、夏末返程，同时用“部分种群”和“小样本追踪”保留证据边界。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [Buho et al. 2011](https://doi.org/10.1016/j.asr.2011.02.015)

### 5. 一座通道不是整条廊道

青藏铁路跨越结构允许藏羚通过，但通道位置、桥下杂物、植被恢复和人类围观会改变利用效率。卫星研究发现个体为到达五北桥通道偏离更优路线。故事重点不是工程胜负，而是如何用长期监测改进位置、连接景观和迁徙期管理。[Xia et al. 2007](https://doi.org/10.1017/S0030605307000116) [Xu et al. 2019](https://doi.org/10.1371/journal.pone.0211798) [Wu et al. 2021](https://doi.org/10.1080/20964129.2021.1910077)

### 6. 角、婚装和鼻囊构成雄性的季节面孔

只有雄性长一对细长直立黑角。成熟雄性在发情期变得浅白，近黑面部和四肢黑纹更醒目；两性都有圆鼓鼻囊，功能仍未定论。这个故事适合解释性别二型和发情展示，也能直接约束所有插画的解剖准确性。[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

## 可稳定展示的指标

| 展示项 | 建议值 | 来源与限定 |
| --- | --- | --- |
| IUCN | 近危，上升 | [2016 全球评估](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en)；保护依赖 |
| 海拔 | 3,250 至 5,500 m | [物种专论汇总范围](https://doi.org/10.1644/817.1) |
| 成年体重 | 雌约 26 kg；雄约 39 kg | [小样本性别均值](https://doi.org/10.1644/817.1) |
| 成年肩高 | 雌约 74 cm；雄约 83 cm | [小样本性别均值](https://doi.org/10.1644/817.1) |
| 雄性角长 | 通常 54 至 60 cm | [超过 70 cm 属极端记录](https://doi.org/10.1644/817.1) |
| 迁徙 | 部分种群可移动数百千米 | [不适用于所有个体和种群](https://doi.org/10.1644/817.1) |

推荐 `featuredStats` 保留海拔、雌雄体重、雌雄肩高和雄性角长；IUCN 由结构化保护状态单独展示。迁徙距离只适合带“部分种群”限定的故事事实，不进入统一数值 metric。

## 不应写入产品的说法

- 不写“中国独有”。应写“青藏高原特有，现生分布国家为中国和印度”。
- 不写“所有藏羚每年迁徙 300 千米”。存在迁徙和定居种群，长距离迁徙以雌性为主。
- 不把 2016 的 100,000 至 150,000 或 2025 的中国超过 300,000 写成全球成熟个体数。
- 不给近危状态添加 `A2`、`C1` 等受胁标准代码。
- 不写“鼻囊已经证实帮助高原呼吸”。该功能仍属推测，发情期共鸣也只是可能解释。
- 不写“野外寿命 10 年”或“平均寿命 10 年”。现有来源只作类比推测。
- 不写“时速 80 千米并连续奔跑 100 千米”。缺少直接野外测量支持。
- 不写“铁路对迁徙没有影响”或“铁路完全阻断迁徙”。通道保持连通，但位置、绕行、杂物和干扰都会改变效率。
- 不把藏羚称作已证实的关键种、生态系统工程师或主要种子传播者。
- 不写 CMS 附录 I 或 II。CMS/CAMI 当前物种页和物种表均明确显示它没有附录列名。
- 不把 CITES 附录 I 简化为“任何国际移动都绝对禁止”。准确表述是国际商业贸易受到严格限制，非商业例外仍受许可制度管理。

## 核心数据字段草案

以下片段只集中表达本轮需要研究裁决的结构化字段，不是可独立通过类型检查的完整 `Species` 对象。实现时还需把前文六个故事、关键事实、威胁、保护行动、六图 `media`、来源数组和发布日期补入正式记录。

```ts
{
  id: 'species-pantholops-hodgsonii',
  slug: 'tibetan-antelope',
  names: {
    zh: '藏羚',
    en: 'Tibetan Antelope',
    aliases: ['藏羚羊', 'Chiru'],
  },
  scientificName: 'Pantholops hodgsonii',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Artiodactyla', '偶蹄目'),
    taxon('Bovidae', '牛科'),
    taxon('Pantholops', '藏羚属'),
  ),
  conservation: conservation('NT', 'increasing', 2016),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '羌塘高原',
      '可可西里与三江源西部',
      '昆仑山与阿尔金山高原',
      '青藏高原东缘部分地区',
      '拉达克北部',
    ],
    countries: ['中国', '印度'],
    endemicTo: ['青藏高原'],
    range:
      '现生范围集中于青藏高原，主体位于中国西藏、青海和南疆，并延伸至四川西部部分地区；印度拉达克北部仅有小范围记录。海拔约 3,250 至 5,500 米。',
    center: { lat: 34.5, lng: 89 },
  },
  habitats: [
    {
      name: '高寒草原',
      realm: 'terrestrial',
      description:
        '低矮禾草、莎草和杂类草覆盖的开阔平地与缓丘，是主要觅食、越冬、交配和迁徙景观。',
      isPrimary: true,
    },
    {
      name: '高寒荒漠与荒漠草原',
      realm: 'terrestrial',
      description:
        '植被覆盖低，以稀疏禾草和矮灌木为主；部分迁徙和产仔景观属于这一类型。',
    },
    {
      name: '高寒草甸与河谷廊道',
      realm: 'terrestrial',
      description:
        '部分夏季活动区及迁徙路径经过莎草草甸、宽河谷和交通廊道附近的连续开阔地。',
    },
  ],
  measurements: {},
  diet: {
    types: ['herbivore'],
    foods: ['高寒草原禾草', '莎草', '高山杂类草', '矮灌木嫩枝和叶', '雪下冬季植物材料'],
    description:
      '反刍混合取食者，随季节和生境在禾草、莎草、杂类草及矮灌木之间调整；冬季会扒开薄雪寻找植物。',
  },
  activity: ['昼行性', '群居', '性别分群', '部分种群季节性迁徙'],
  tags: ['青藏高原', '高寒草原', '牛科', '长距离迁徙', '性别二型', '反盗猎恢复', 'CITES 附录 I'],
  summary:
    '青藏高原特有的牛科动物，雄性具有细长直立黑角，部分雌性每年迁往产仔地。严格反盗猎和贸易管制推动了显著恢复，但近危状态仍依赖持续保护。',
  description:
    '藏羚生活在海拔约 3,250 至 5,500 米的高寒草原与荒漠草原。雌性无角，成熟雄性在发情期呈浅白婚装、黑脸和四肢黑纹。它们取食禾草、莎草、杂类草及矮灌木。部分雌性种群会进行数百千米的季节迁徙并产下一只早成幼崽，另有种群全年定居。20 世纪沙图什贸易引发的商业盗猎曾造成灾难性下降，保护地、巡护、交通廊道和 CITES 执法共同支撑了恢复。',
  metrics: {
    elevationM: [3250, 5500],
  },
  featuredStats: [
    {
      key: 'adult-weight-sex-means',
      label: '成年体重',
      value: '雌约 26 / 雄约 39',
      unit: 'kg',
      note: '物种专论汇总的小样本性别均值',
    },
    {
      key: 'adult-shoulder-height-sex-means',
      label: '成年肩高',
      value: '雌约 74 / 雄约 83',
      unit: 'cm',
      note: '物种专论汇总的小样本性别均值',
    },
    {
      key: 'elevation',
      label: '海拔范围',
      value: '3,250 至 5,500',
      unit: 'm',
    },
    {
      key: 'male-horn-length',
      label: '雄性角长',
      value: '通常 54 至 60',
      unit: 'cm',
    },
  ],
}
```

雌雄测量值是性别均值，不是自然极值，因此字段草案把 `measurements` 留空，只在 `featuredStats` 中明确展示。不要为了填满类型而虚构头体长、体重范围、寿命、速度和成熟个体数量。

## 六张原创图像概念

### 通用形态约束

- 物种必须是中型高原牛科动物，躯干结实，颈不细长，四肢纤长，蹄为偶蹄。
- 雄性只有两只角。角细长、黑色、近直立、窄竖琴形、轻微三重波状弯曲，基部有环纹，不能分叉、粗卷或横向宽张。
- 成年雌性终生无角。本组六图中的幼崽均设定为新生或当年返迁幼崽，不应出现可见角；较大的雄性亚成体不适用这条幼崽约束。
- 鼻孔两侧有成对圆鼓鼻囊，雄性较明显；轮廓仍是短吻羚类，不能出现长鼻羚式下垂鼻筒。
- 基础被毛浅黄褐至淡棕，腹面发白。成熟雄性发情期可呈浅白身体、近黑脸和四肢前侧黑纹。
- 耳朵短、略尖、背面发白。尾巴 13 至 14 厘米、短且无簇毛，颜色接近臀背。
- 两性都没有醒目白色臀盘，不得套用藏原羚或其他瞪羚的臀斑。
- 环境以无树、稀疏、开阔的高寒草原或荒漠草原为主，地形平坦至缓起伏。
- 所有动物必须保持四肢数量、关节、蹄、眼睛、耳朵和角的左右对称与自然落地关系。

### 共同拒绝项

`saiga proboscis, hanging trunk nose, sheep fleece curls, goat beard, branched antlers, spiral horns, thick ibex horns, ram horns, horns on females, visible horns on newborn or current-year calves, large white rump patch, black tail tuft, deer tail, African savanna, acacia trees, lush meadow, dense forest, steep goat cliff, domestic sheep flock, buildings, tourists, text, logo, watermark, extra legs, fused hooves, duplicated horns, malformed joints`

### 图 1：封面，发情期成熟雄性

- **场景**：冬初清晨，一只成熟雄性侧前方全身站立在开阔高寒草原，远处只有低缓山脊和薄雪斑。
- **识别重点**：浅白婚装、近黑色脸、四肢前侧黑纹、一对细长直立黑角、成对圆鼓鼻囊。
- **构图**：横幅，主体占画面高度约 60%，四蹄完整，头部和角周围留出安全裁切空间。
- **避免**：白色臀盘、粗卷羊角、蓬松绵羊毛、长鼻羚鼻筒、雪山占满背景。
- **证据**：[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 图 2：薄雪中的成年雄性

- **场景**：一只成熟雄性侧身走过薄雪斑驳的高寒草原，背景只有低缓山脊。
- **识别重点**：浅灰褐冬毛、近黑面部、四肢前侧深色纹、一对近直立环纹黑角和短无簇尾。
- **构图**：横幅侧面全身像，四蹄和两支角尖均留在画面内。
- **避免**：醒目白臀、深雪奔逃、粗卷或横张角、隐没或重复的四肢。
- **证据**：[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 图 3：高寒荒漠草原生境

- **场景**：宽阔无树的高寒荒漠草原、浅河道、缓丘和远处雪痕占据画面，一只成年雄性位于右侧远处。
- **识别重点**：动物只占小比例，但两支细长直立黑角、深色面部、纤长四肢和短尾仍可辨认。
- **构图**：横幅环境远景，生境超过画面九成，动物完整且与背景分离。
- **避免**：第二只动物、可识别地点或基础设施、繁茂湿地、非洲稀树草原和醒目白臀。
- **证据**：[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 图 4：无角雌性取食

- **场景**：一只成年雌性在开阔高原的低矮莎草中低头取食，周围只有稀疏植被、砂砾和缓丘。
- **识别重点**：完全无角、黄褐密毛、浅色腹面、短尖白背耳、短无簇尾和较弱的鼻囊轮廓。
- **构图**：横幅环境肖像，完整四肢可见，口鼻与低矮植被的接触清楚。
- **避免**：角芽、雄性黑脸黑腿、夸张白臀、鲜花草甸、人工投喂和非洲羚羊体态。
- **证据**：[Leslie and Schaller 2008](https://doi.org/10.1644/817.1)

### 图 5：一只雌性与一只幼崽移动

- **场景**：一只无角成年雌性和一只无角当年幼崽沿开阔高原河谷同向行走。
- **识别重点**：恰好两只动物，两者完全无角、身体互不重叠，各有一条短无簇尾；八条腿均可辨认。
- **构图**：横幅环境中景，以河流和开阔高原表达连通景观，不显示路线标记或命名地点。
- **避免**：第三只动物、双胞胎、雄性家庭守护、角芽、惊逃、追逐、车辆和精确迁徙地点。
- **证据**：[Leslie and Schaller 2008](https://doi.org/10.1644/817.1) [Buho et al. 2011](https://doi.org/10.1016/j.asr.2011.02.015)

### 图 6：保持距离的非侵入监测

- **场景**：两名研究人员在左侧使用一台观测镜和一块记录板，右侧远处只有一只成年雄性藏羚。
- **识别重点**：人员与动物保持明显距离；雄性有两支细长直立黑角、深色面部和短无簇尾，没有项圈或耳标。
- **构图**：横幅远景，观察人员和器材集中在左侧，动物独立位于右侧开阔地。
- **避免**：第三人或第二只动物、接触捕捉、武器、无人机、车辆、可读记录、坐标、徽标和公开监测点特征。
- **证据**：[IUCN 2016](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en)

### 图像静态验收

1. 封面雄性必须同时具备两只直立黑角、黑脸、四肢前侧黑纹和浅色婚装。
2. 图 2、图 3 和图 6 各有且只有一只成年雄性；图 4 的成年雌性和图 5 的成年雌性、当年幼崽必须完全无角。
3. 鼻囊只能形成鼻孔两侧圆鼓轮廓，不能超过口鼻长度或下垂。
4. 每只动物必须有四条自然连接的腿和四只落地偶蹄，无遮挡处逐只检查。
5. 尾巴短、无簇毛，任何画面都不得出现醒目白臀盘。
6. 所有生境保持无树或近乎无树、低植被、平地至缓丘，不使用非洲或阿尔卑斯山羊视觉语言。
7. 图 5 不显示可识别的精确迁徙地标，图 6 不显示坐标、近期项圈个体或可辨认的监测记录。

## 推荐来源常量

```ts
const TIBETAN_ANTELOPE_SOURCE_DATE = '2026-08-25' as const;

const TIBETAN_ANTELOPE_SOURCES = [
  {
    title: 'IUCN Red List: Pantholops hodgsonii (2016 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'IUCN 2016: Tibetan antelope status-change announcement',
    url: 'https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Pantholops hodgsonii',
    url: 'https://www.mammaldiversity.org/taxon/1006210/',
    kind: 'taxonomy',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Leslie and Schaller 2008: Pantholops hodgsonii species account',
    url: 'https://doi.org/10.1644/817.1',
    kind: 'general',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院：中国生物多样性红色名录·脊椎动物卷（2020）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部：国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'CITES Resolution Conf. 11.8: Conservation of and control of trade in the Tibetan antelope',
    url: 'https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-11-08-R17.pdf',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'CMS Central Asian Mammals Initiative: Pantholops hodgsonii',
    url: 'https://cami.cms.int/species/pantholops-hodgsonii',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'China State Council 2025: Wild Tibetan antelope population exceeds 300,000',
    url: 'https://english.www.gov.cn/archive/statistics/202503/03/content_WS67c551dbc6d0868f4e8f0410.html',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'China State Council 2024: Tibetan antelope protection progress',
    url: 'https://english.www.gov.cn/news/202402/26/content_WS65dc32e8c6d0868f4e8e45a1.html',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Signore and Storz 2020: Hypoxia adaptation of Tibetan antelope hemoglobin',
    url: 'https://doi.org/10.1126/sciadv.abb5447',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Buho et al. 2011: Tibetan antelope migration based on satellite tracking',
    url: 'https://doi.org/10.1016/j.asr.2011.02.015',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Xia et al. 2007: Qinghai-Tibet railway and Tibetan antelope migration',
    url: 'https://doi.org/10.1017/S0030605307000116',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Xu et al. 2019: Railway underpass location affects migration distance',
    url: 'https://doi.org/10.1371/journal.pone.0211798',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2021: Adaptation of migratory Tibetan antelope to infrastructure development',
    url: 'https://doi.org/10.1080/20964129.2021.1910077',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Fox et al. 2009: Tibetan antelope conservation and rangeland fencing',
    url: 'https://doi.org/10.1017/S0030605308001774',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Hu et al. 2020: UAV population estimate of migrating Tibetan antelopes',
    url: 'https://doi.org/10.1017/S0030605317001673',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Schaller and Ren 1988: Effects of a snowstorm on Tibetan antelope',
    url: 'https://doi.org/10.2307/1381361',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Pei et al. 2021: Climate-change habitat projections for Tibetan Plateau antelopes',
    url: 'https://doi.org/10.1016/j.ecolind.2021.107337',
    kind: 'distribution',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 证据覆盖和实施清单

- [x] 当前接受名、属级边界、目科属分类已按 MDD 核验。
- [x] 中文官方名、英文常用名和别名优先级已说明。
- [x] IUCN `NT / increasing / 2016 / criteria 留空` 已核验。
- [x] 全球 IUCN 数量与中国 2025 行政估算已分开。
- [x] 中国国家一级和 CITES 附录 I 已核验。
- [x] CMS 未列入附录的边界已核验。
- [x] 中国、印度分布和 3,250 至 5,500 米海拔范围已核验。
- [x] 高寒草原、高寒荒漠、草甸和交通廊道的使用边界已核验。
- [x] 雌雄体型均值、雄性角、鼻囊、尾和毛纤维已核验。
- [x] 寿命、速度、成熟个体数和头体长的不确定项已留空。
- [x] 食性、昼行性、分群、发情、单仔和早成幼崽已核验。
- [x] 迁徙型与定居型、性别差异和个体追踪样本边界已核验。
- [x] 食物网作用已保留证据强度，没有添加关键种或工程师标签。
- [x] 盗猎、贸易、生境破碎、围栏、牲畜和天气风险已分层说明。
- [x] 六个故事角度和六张图像概念均有来源与禁画项。
- [x] 已按最终素材核验每幅图的雌雄、角、鼻囊、臀斑、尾和蹄。
- [x] 正式档案保持 `measurements`、体重 metric、寿命 metric、速度 metric 和成熟个体 metric 为空。
