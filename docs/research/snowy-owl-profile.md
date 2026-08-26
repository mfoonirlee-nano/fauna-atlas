# 雪鸮（*Bubo scandiacus*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**雪鸮**
- 推荐展示英文名：**Snowy Owl**
- 接受学名：***Bubo scandiacus* (Linnaeus, 1758)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并约束 1 张封面与 5 张详情图的科学内容
- 分类口径：IOC World Bird List v15.2；BirdLife/IUCN 只用于交叉核对
- 保护口径：IUCN/BirdLife 2021 全球评估；2024 年环北极种群分析提供新证据，但不是一次新的 IUCN 重评
- 中国口径：全球分布中的中国记录、中国国家重点保护等级和《中国生物多样性红色名录》区域等级分别表述，不能互相替代

## 结论摘要

1. IOC v15.2 接受 ***Bubo scandiacus***，英文名 **Snowy Owl**，简体中文名 **雪鸮**、繁体中文名 **雪鴞**；该版未列种下分类单元。本项目应归入鸮形目、鸱鸮科、雕鸮属，不再使用旧属名 *Nyctea*。[IOC owls list](https://www.worldbirdnames.org/new/bow/owls/) [IOC multilingual list download page](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)
2. 结构化全球保护字段应写成 `conservation('VU', 'decreasing', 2021, 'A2bd+3bd+4bd')`。约 **14,000 至 28,000 只成熟个体**是估算区间，不是同步全球普查；BirdLife 将估算质量标为 poor。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22689055A205475036.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus)
3. 2024 年环北极分析仍支持保留 VU，但给出的三世代下降区间很宽。按 8 年世代，下降中位数为 35.6%，80% HDI 为 1.2% 至 74.9%；监测点稀少，西伯利亚覆盖不足。旧资料中的“北美下降 64%”被新论文判断为高估，不能继续写成精确全球降幅。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)
4. 雪鸮不是简单的“夜行猛禽”。它常在晨昏活动，也会在北极夏季连续日照下全天捕猎。`activity` 不应写“夜行性”，可写“晨昏活动为主，夏季可全天觅食”。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [Cornell overview](https://www.allaboutbirds.org/guide/Snowy_Owl/overview)
5. 中国大陆在 BirdLife 全球分布表中属于**原生、非繁殖季出现**，不是繁殖区。雪鸮是国家二级重点保护野生动物；《中国生物多样性红色名录·脊椎动物卷（2020）》将其中国区域等级列为 VU。产品正文必须同时写明“稀少越冬鸟”和“中国区域口径”，不能暗示在中国稳定繁殖。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) [中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)
6. 可稳健落库的两性共同尺寸为体长 **52 至 71 厘米**、体重 **1.6 至 2.95 千克**、翼展 **126 至 145 厘米**。已知最老环志个体至少 23 年 10 个月，这只是最低年龄纪录，不是普通寿命范围，因此不填 `metrics.lifespanYears`。[Cornell identification](https://www.allaboutbirds.org/guide/Snowy_Owl/id) [Cornell overview](https://www.allaboutbirds.org/guide/Snowy_Owl/overview)

## 名称、分类与种界

### 接受分类

推荐分类节点：

| 阶元 | 学名 | 中文名 | 口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 项目通用节点 |
| 门 | Chordata | 脊索动物门 | 项目通用节点 |
| 纲 | Aves | 鸟纲 | 项目通用节点 |
| 目 | Strigiformes | 鸮形目 | IOC v15.2 |
| 科 | Strigidae | 鸱鸮科 | IOC v15.2 |
| 属 | Bubo | 雕鸮属 | IOC v15.2 |
| 种 | Bubo scandiacus | 雪鸮 | IOC v15.2 |

IOC v15.2 将雪鸮列在 `Strigiformes / Strigidae / Bubo` 下，作者名为 `(Linnaeus, 1758)`。该版主表在雪鸮行后直接进入下一个物种，没有列亚种，因此项目按**单型种**处理。[IOC owls list](https://www.worldbirdnames.org/new/bow/owls/) [IOC master list](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)

历史文献和 CITES 名录可能使用 ***Nyctea scandiaca***；CITES 分类对照表明确把这个名称映射到 ***Bubo scandiacus***。它是旧组合，不是第二个现生物种。不要把旧名做成另一个物种档案，也不要将 BirdLife 旧拼写 *Bubo scandiaca* 当作当前接受名。[CITES taxonomy crosswalk](https://cites.org/sites/default/files/eng/com/ac/28/E-AC28-21-01-Annex4.pdf) [BirdLife DataZone taxonomy note](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus)

### 推荐名称字段

IOC 多语言表给出简体“雪鸮”和繁体“雪鴞”。产品可用繁体形式做检索别名；不要加入“白猫头鹰”一类不稳定俗称。[IOC multilingual list download page](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)

```ts
names: {
  zh: '雪鸮',
  en: 'Snowy Owl',
  aliases: ['雪鴞'],
}
```

## 全球保护状态、数量与趋势

### 正式 IUCN 字段

BirdLife 的 2021 历史记录和对应 IUCN 引文给出：

- 全球等级：**Vulnerable（VU，易危）**；
- 趋势：**Decreasing**；
- 标准：**A2bd+3bd+4bd**；
- 评估年份：**2021**；
- 成熟个体估计：**14,000 至 28,000**；
- 估算年份字段：2013；估算质量：poor；推导方式：estimated；
- 世代长度：7.77 年。

因此结构化字段应为：

```ts
conservation: conservation('VU', 'decreasing', 2021, 'A2bd+3bd+4bd')
```

`assessedYear` 不能写 2017、2024 或 2026。2017 是首次上调至 VU 的时间，2024 是新论文发表年，2026 是本稿检索年。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22689055A205475036.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus)

### 数量估计不能写成精确普查

早期全球估计高达约 20 万至 29 万只，建立在雪鸮较均匀地占据整个北极繁殖范围的假设上。追踪研究显示成鸟会跨越很长距离寻找当年旅鼠丰富的地点，繁殖地忠诚度低，同一批鸟可能被不同地区的外推重复代表。较新的“loose boid”方法给出约 7,000 至 14,000 对，即约 14,000 至 28,000 只繁殖成鸟，但方法中的群组数量和面积假设仍未充分检验。2024 年全球评估认为该区间“plausible”，并未把它升级为普查值。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248) [COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html)

`metrics.estimatedMatureIndividuals` 可以填 `[14000, 28000]`，但展示统计和正文必须同时注明“全球估算、质量较低、不是年度同步计数”。加拿大 2025 年估算的 13,000 至 16,000 只成熟个体是**加拿大国家口径**，不能拿来替换全球区间。[COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html)

### 2024 年趋势分析怎样解释

McCabe 等汇总五个长期繁殖地在 1988 至 2020 年的巢数，以贝叶斯分层模型处理周期性和大量零计数。全期年增长率中位数 `λ = 0.98`，80% HDI 为 0.96 至 1.01。换算为三世代变化后：

- 以 8 年为一世代：下降中位数 35.6%，80% HDI 为下降 1.2% 至 74.9%；
- 以 10.7 年为一世代：下降中位数 41.0%，80% HDI 从下降 84.2% 延伸到增加 3.5%；
- 五个地点中只有 Utqiagvik 单站的下降达到论文所用显著标准；
- 去掉该站或改用全部站点随机效应后，中心估计仍指向下降，但幅度变小；
- 许多繁殖区没有长期站点，西伯利亚覆盖尤其不足。

合理表述是：**现有最佳繁殖地资料的中心估计支持三世代下降超过 30%，因此研究团队建议保留 VU；下降幅度仍有很大不确定性。** 不应写成“全球已精确下降 35.6%”，也不应因区间跨过稳定值就自行把 IUCN 趋势改成 unknown。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)

## 中国相关性与保护口径

BirdLife 国家表把 China (mainland) 标为 `native / non-breeding`，且未标繁殖。国家林草局资料也将来自西伯利亚的雪鸮描述为中国北方冬候鸟。结构化分布可纳入中国，但正文必须写“稀少非繁殖季访客”，不能声称中国拥有稳定繁殖种群。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [国家林业和草原局鸟类分布概述](https://www.forestry.gov.cn/c/www/dw/150295.jhtml)

中国保护信息有三套不同含义：

1. **国家重点保护野生动物名录：二级。** 这是法律保护级别，不是灭绝风险等级。[国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)
2. **中国生物多样性红色名录：VU，B2b(iii)、C2a(i)。** 这是中国区域风险评估，不能覆盖全球 IUCN 的 `A2bd+3bd+4bd`。[中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)
3. **CITES 附录 II。** 这是国际贸易管理口径，不等于全面贸易禁令，也不等于 IUCN VU。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES taxonomy crosswalk](https://cites.org/sites/default/files/eng/com/ac/28/E-AC28-21-01-Annex4.pdf)

## 分布、生境与季节移动

### 环北极繁殖，越冬范围向南扩展

繁殖范围沿环北极无林苔原展开，从西斯堪的纳维亚、俄罗斯北部到阿拉斯加、加拿大北部和格陵兰；冰岛与英国只有偶发繁殖。非繁殖期范围扩展到北美温带开阔地、北欧和北亚，也有个体留在北极沿岸及海冰。这个范围高度季节化，不能用一个地图中心代表。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)

推荐结构化分布：

- `realms: ['terrestrial', 'freshwater']`：繁殖和大部分越冬活动依赖陆地开阔地与湿地；部分个体在海冰边缘猎取水鸟，但这不足以把整个物种标成稳定海洋生态界。
- `continents: ['亚洲', '欧洲', '北美洲']`。
- `countries` 只列主要常规范围和中国，不列完整迷鸟国家。
- 不设 `distribution.center`：环北极繁殖、跨洲游牧和季节性南移无法由一个点表达。

### 生境边界

繁殖地以无林、视野开阔的苔原为主，地表可有丘状隆起、岩石、地衣、矮灌木和稀疏低植被；巢常放在略高、干燥、风吹裸露的地面。越冬地包括湿地、盐沼、海岸沙丘、农田和其他低植被开阔地。机场草地也会吸引雪鸮，但同时带来航空器碰撞风险，不能把机场描绘成安全或理想保护地。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [Cornell Life History](https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory) [COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html)

雪鸮“使用北极”不等于只生活在白雪和冰川上。繁殖季苔原常有褐绿植被、裸土、碎石和湿地；大量图像把它永久置于纯白雪原，会掩盖真实繁殖生境。[Cornell identification](https://www.allaboutbirds.org/guide/Snowy_Owl/id) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus)

### 游牧、迁徙与暴发式南移

雪鸮会随旅鼠等猎物的空间峰值跨年更换繁殖区。加拿大追踪的成体雌鸟在相邻繁殖年间平均移动约 725 千米，个体范围 18 至 2,224 千米；春季寻找繁殖地的移动也可超过 2,000 千米。这些是特定追踪样本，不是每只鸟的固定年迁徙距离。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)

猎物丰富年份可产生大量幼鸟，随后更容易在南方出现“irruption”。这不等于所有南移个体都在挨饿：北美研究发现暴发迁入的雪鸮总体不支持“集体饥饿迁徙”的解释，尸检资料中多数个体体况良好。产品可用“猎物脉冲推动幼鸟补充和南移”解释现象，不写“因为北极没食物才集体逃难”。[Curk et al. 2018](https://doi.org/10.1139/cjz-2017-0278) [McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)

## 外形、尺寸与鉴别边界

Cornell 给出的两性共同范围为体长 **52 至 71 厘米**、体重 **1,600 至 2,950 克**、翼展 **126 至 145 厘米**。性别、年龄、季节和体况都会影响个体位置，不能把端点当作典型值。[Cornell identification](https://www.allaboutbirds.org/guide/Snowy_Owl/id)

### 必须保留的形态

- 体型大而粗壮，头圆，颈部轮廓短；耳羽簇通常不明显，不能画成带长“角”的雕鸮。
- 眼睛鲜黄，喙黑而较小，常被面部羽毛部分遮住；没有草鸮式心形面盘。
- 翼宽而长，翼下以白色为主；尾较短。
- 腿和足密覆白羽，提供寒地保温；不能露出长而光裸的黄色腿。
- 成年雄鸟随年龄增长通常更白，部分老雄鸟近纯白；成年雌鸟和幼鸟保留更多黑褐横斑。
- 最白的个体通常是雄鸟，最密横斑个体通常是雌鸟，但中间羽色有重叠。只凭中等斑纹的生成图不能断言性别和精确年龄。

[Cornell identification](https://www.allaboutbirds.org/guide/Snowy_Owl/id) [Cornell overview](https://www.allaboutbirds.org/guide/Snowy_Owl/overview)

### 量化字段建议

| 字段 | 推荐值 | 说明 |
| --- | --- | --- |
| `measurements.length` | 52—71 cm | Cornell 两性共同范围。 |
| `measurements.weight` | 1.6—2.95 kg | 从 1,600—2,950 g 转换；不是性别均值。 |
| `measurements.wingspan` | 126—145 cm | Cornell 两性共同范围。 |
| `metrics.adultLengthCm` | `[52, 71]` | 适合粗粒度比较。 |
| `metrics.adultMassKg` | `[1.6, 2.95]` | 保留两位小数上限。 |
| `metrics.wingspanCm` | `[126, 145]` | 与展示范围一致。 |
| `metrics.estimatedMatureIndividuals` | `[14000, 28000]` | 全球估算，BirdLife 质量 poor；必须另带方法警告。 |
| `metrics.lifespanYears` | 不填 | 23 年 10 个月是环志个体最低年龄纪录，不是群体寿命范围。 |
| `metrics.topSpeedKph` | 不填 | 无适合产品比较的权威固定速度。 |
| `metrics.elevationM` | 不填 | 多数繁殖地低海拔，但挪威可在 1,000 米以上；全球统一范围会误导。 |

## 食性、捕猎、活动与适应

旅鼠和田鼠是繁殖季核心猎物。在猎物允许时，雪鸮也捕食其他啮齿类、兔和野兔、雷鸟、涉禽、海鸟、鸭和中型雁类，偶尔取食鱼、两栖类、甲壳类和甲虫。`diet.types` 应填 `carnivore`；不能将“旅鼠专食者”写成全年唯一食谱。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [Cornell Life History](https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory)

常见捕猎方式是从地面隆起、围栏柱或其他低矮制高点坐等，再低飞或扑向猎物。它结合视觉与听觉定位，也能在地面奔跑追逐。画面可以表现低空扑击一只旅鼠，但不能画成鹰类从高空高速俯冲，也不要使用血腥接触。[Cornell Life History](https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory)

活动节律随季节和纬度改变。BirdLife 概括为晨昏最活跃、北极夏季全天觅食；Cornell 也记录它在连续日照中白天捕猎。合理标签是“晨昏活动为主，夏季可全天觅食”，不写“严格夜行”“严格昼行”或“24 小时不停捕猎”。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [Cornell overview](https://www.allaboutbirds.org/guide/Snowy_Owl/overview)

寒地适应首先体现在浓密体羽、覆羽腿足和白色背景中的低对比羽色。羽色并不让所有个体在无雪苔原上完全隐形，横斑也承担年龄和性别相关差异；不要把保护色写成“任何季节绝对不可见”。[Cornell identification](https://www.allaboutbirds.org/guide/Snowy_Owl/id)

## 繁殖、育幼、世代与寿命

巢是略高地面上的浅刮坑，通常没有树枝搭成的巢台。雌鸟刮出巢坑并单独孵卵，孵化约 32 天，从第一枚卵开始；卵隔日左右产下，导致幼鸟异步孵化。Cornell 的宽范围是每窝 3 至 11 枚、每年一窝；长期样地和综述给出的平均窝卵数约 7 枚。画面不必塞满 11 枚，4 至 6 枚白卵更容易保持可数和可信。[Cornell Life History](https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory) [COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html) [McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)

同一繁殖季内通常是一雄一雌配对，但跨年配偶保留率未知。成鸟的长距离繁殖扩散让“终生配偶”显得不大可能，不能沿用旧二手资料的“often pairs for life”。雄鸟求偶时可携旅鼠并展示，繁殖期主要供食；雌鸟承担孵化。[COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html) [Cornell Life History](https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory)

加拿大 2025 报告采用平均初次繁殖约 4 岁、世代长度约 8 年，同时指出更早繁殖记录存在；McCabe 等认为野外性成熟年龄仍缺资料。正文可写“部分个体较早繁殖，平均初繁年龄约 4 岁仍有不确定性”，不要写成所有个体固定 2 岁性成熟。[COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html) [McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)

Cornell 记录的最老已知个体是一只至少 **23 年 10 个月**的雌鸟，2015 年在马萨诸塞再次捕获后放归。这是“已知最低年龄”而非平均寿命、野外寿命上限或典型区间，因此只放关键事实或带注释展示统计，不填 `metrics.lifespanYears`。[Cornell overview](https://www.allaboutbirds.org/guide/Snowy_Owl/overview)

## 威胁与保护行动

### 主要威胁及边界

1. **气候变化及猎物链变化。** 更暖、更湿的冬季会改变积雪结构、植被和旅鼠周期，部分格陵兰及芬诺斯堪的纳维亚地区已有局地周期异常；但 2024 综述指出，尚缺少旅鼠周期在全北极普遍衰减或种群整体下降的证据。写“高风险机制和局地证据”，不写“气候变暖已让全球旅鼠崩溃”。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)
2. **车辆、飞机、输电设施和其他结构碰撞。** 东部北美 383 只越冬雪鸮尸检中，汽车碰撞占 18%、飞机碰撞 9%、其他碰撞 8%、触电 3%；加拿大西部样本的比例不同。这些数字只描述送检样本和地区，不是全球死亡构成。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)
3. **灭鼠药、铅和持久性污染物。** 个体暴露已有记录，但现有资料不足以量化其对全球种群下降的贡献。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)
4. **渔具缠绕、狐类陷阱、捕杀和繁殖地扰动。** 影响多为局地或资料不足，不能一律称为全球首要驱动。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248)
5. **疾病。** 加拿大 2025 报告将高致病性禽流感列为持续威胁之一；黑蝇对孵卵雌鸟和地面幼鸟的影响可能随变暖增加，但目前没有范围级人口效应证据。[COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html)

### 推荐保护行动

- 在不同旅鼠周期阶段协调环北极繁殖地调查，扩展西伯利亚等空白区，并把巢数、追踪和越冬监测联合分析。
- 降低道路、机场和电力设施周边的碰撞与触电风险；机场处置需由持证团队评估、捕捉和转移，公众不能自行靠近或驱赶。
- 减少抗凝血灭鼠药及其他污染物暴露，持续开展规范尸检和毒理检测。
- 对高致病性禽流感等疾病维持跨地区监测和病理信息共享。
- 保护苔原巢区与重要越冬开阔地，设置观察距离，避免车辆、摄影者或无人机接近地面巢。
- 将原住民与地方知识纳入长期监测和保护决策，同时保持数据主权与敏感巢址保密。

[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus) [McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248) [COSEWIC 2025](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html)

## 推荐关键事实

1. 雪鸮繁殖于环北极无林苔原，非繁殖期可到海岸、湿地、农田和其他低植被开阔地。
2. 它不是严格夜行性鸟类，晨昏常活跃，也会在北极连续日照下白天捕猎。
3. 成年雄鸟通常随年龄变白，雌鸟和幼鸟多保留较密黑褐横斑，但中间羽色不能可靠判定性别。
4. 旅鼠是繁殖季核心猎物，越冬期食谱会扩展到其他小型哺乳类和多种鸟类。
5. 每窝 3 至 11 枚卵、平均约 7 枚；雌鸟从第一枚卵开始孵化，形成大小不同的异步幼鸟。
6. 全球 14,000 至 28,000 只成熟个体是低质量估算；游牧、低繁殖地忠诚和偏远苔原让普查极难。
7. 中国大陆属于稀少非繁殖季范围，雪鸮是国家二级重点保护野生动物。
8. 已知最老环志个体至少 23 年 10 个月，但这个记录不能转写成普通寿命。

## 应删除或避免的说法

- “雪鸮是典型夜行猛禽”或把 `activity` 直接写成“夜行性”。
- “所有成年雪鸮都是纯白色”；雌鸟和幼鸟常有密集横斑，部分成年雄鸟也保留斑纹。
- “看羽色就能准确判断所有个体的性别与年龄”。
- “雪鸮终生生活在纯白雪原”；繁殖地常是褐绿、裸土和碎石并存的苔原。
- “所有雪鸮冬天都飞到南方”；一些个体全年留在北极，移动策略差异很大。
- “大规模南侵说明鸟都饿坏了”；暴发式南移常和上一个繁殖季幼鸟高产有关。
- “雪鸮只吃旅鼠”；其他哺乳类和鸟类可占越冬食物的重要部分。
- “雪鸮终生配偶”；跨年配偶保留率未知，长距离繁殖扩散不支持强断言。
- “全球仅剩 14,000 只”或“全球恰有 28,000 只”；这是宽估算区间。
- “全球已精确下降 64%”；新分析认为旧北美强降幅可能高估，当前模型区间很宽。
- “中国有稳定繁殖种群”；BirdLife 当前将中国大陆标为原生非繁殖季出现。
- “CITES 附录 II 等于禁止一切贸易”；附录 II 管理国际贸易，不等同全面禁令。
- 把 23 年 10 个月写成平均寿命、寿命上限或 `[0, 23.8]`。

## 6 幅原创图的科学边界

全组共同锚点：**一只大而粗壮的雪鸮，圆头、鲜黄眼、小黑喙部分被面羽遮住、腿足密覆白羽、宽翼；不出现长耳羽簇、心形面盘、裸腿或多余肢体。** 中度横斑个体只写“雪鸮”，不强行标性别年龄。

| 资产 | 事实目标 | 必须保留 | 拒绝项 |
| --- | --- | --- | --- |
| 01 `01-arctic-tundra-portrait.webp` | 封面：一只轻至中度横斑雪鸮站在北极苔原低矮隆起处，背景含稀疏地衣、矮植被和远处开阔地 | 圆头、黄眼、小黑喙、覆羽腿足；主体完整，左右留出标题空间 | 纯冰川、森林、南极企鹅、长“角”、额外鸟、夸张蓝眼或裸腿 |
| 02 `02-adult-flight-field-marks.webp` | 一只成鸟低空飞过开阔地，展示宽翼、白色翼下与短尾 | 两翼完整且结构对称，只有一只鸟；羽色自然，不把斑纹画成规则棋盘 | 鹰式窄翼高速俯冲、断翼、多翼、抓着血淋淋猎物、森林背景 |
| 03 `03-treeless-tundra-habitat.webp` | 生境宽景：无林苔原、低植被、丘状隆起、碎石或浅湿地，一只较小的雪鸮位于制高点 | 生境占画面主体；无树冠、无高灌木，繁殖季不必有积雪 | 把“北极”简化成无生命冰盖、密林、尖锐高山巢崖、额外动物群 |
| 04 `04-daylight-lemming-hunt.webp` | 连续日照或低角度白昼中，一只雪鸮低飞扑向一只旅鼠 | 恰好一只鸮和一只猎物，猎物与足保持可读间距；低空捕猎，无血 | 严格夜景、鹰式垂直俯冲、用喙叼飞、多个猎物、捕食接触或伤口 |
| 05 `05-ground-scrape-and-eggs.webp` | 一只横斑较密的雌鸟守在略高地面的浅刮坑旁，巢中 4 至 6 枚白卵 | 地面浅巢、卵可数、无树枝巢台；雌鸟在巢，周围保持开阔 | 雄鸟孵卵、树巢、洞巢、11 枚挤成不可能形状、幼鸟与完整卵混杂、游客靠近 |
| 06 `06-distance-winter-monitoring.webp` | 冬季海岸沙丘或开阔农地，一只雪鸮停栖，远处一名研究者用观测镜记录 | 人和鸟之间保留大段空地；只观察，不抓捕、不投喂；图像不代表真实个体数据 | 游客围拍、无人机、车辆逼近、手持雪鸮、卫星项圈特写、多个研究者或多个雪鸮 |

图注不能把生成画面当成一次真实观测、一个精确巢址或种群趋势证据。巢址图严禁附精确经纬度；冬季监测图强调远距离和不干扰。[McCabe et al. 2024](https://doi.org/10.1017/S0959270924000248) [Cornell identification](https://www.allaboutbirds.org/guide/Snowy_Owl/id) [Cornell Life History](https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory)

## 推荐来源数组

下列常量可作为本物种在 `species.ts` 中的唯一来源数组；完整对象只通过 `sources: SNOWY_OWL_SOURCES` 引用。

```ts
const SNOWY_OWL_CONTENT_DATE = '2026-08-26' as const;

const SNOWY_OWL_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Owls',
    url: 'https://www.worldbirdnames.org/new/bow/owls/',
    kind: 'taxonomy',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'IOC World Bird List v15.2: Master and multilingual lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'BirdLife DataZone: Snowy Owl species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/snowy-owl-bubo-scandiacus',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'IUCN Red List 2021 assessment: Bubo scandiacus',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22689055A205475036.en',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'McCabe et al. 2024: Circumpolar status assessment and conservation priorities',
    url: 'https://doi.org/10.1017/S0959270924000248',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'COSEWIC 2025: Snowy Owl assessment and status report in Canada',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snowy-owl-2025.html',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'Cornell Lab: Snowy Owl identification and measurements',
    url: 'https://www.allaboutbirds.org/guide/Snowy_Owl/id',
    kind: 'general',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'Cornell Lab: Snowy Owl life history',
    url: 'https://www.allaboutbirds.org/guide/Snowy_Owl/lifehistory',
    kind: 'ecology',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'Cornell Lab: Snowy Owl overview and longevity record',
    url: 'https://www.allaboutbirds.org/guide/Snowy_Owl/overview',
    kind: 'general',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'Curk et al. 2018: Irruptive Snowy Owls are not starving',
    url: 'https://doi.org/10.1139/cjz-2017-0278',
    kind: 'ecology',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List (2021)',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates (2020)',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
  {
    title: 'CITES taxonomy crosswalk: Nyctea scandiaca to Bubo scandiacus',
    url: 'https://cites.org/sites/default/files/eng/com/ac/28/E-AC28-21-01-Annex4.pdf',
    kind: 'taxonomy',
    accessedAt: SNOWY_OWL_CONTENT_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

以下对象覆盖当前 `Species` 的必填字段。媒体字段按已有六幅资产命名；合入前仍需按最终画面复核 `alt` 与 `focalPoint`。

```ts
{
  id: 'species-bubo-scandiacus',
  slug: 'snowy-owl',
  names: {
    zh: '雪鸮',
    en: 'Snowy Owl',
    aliases: ['雪鴞'],
  },
  scientificName: 'Bubo scandiacus',
  taxonomy: {
    kingdom: { scientificName: 'Animalia', zhName: '动物界' },
    phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
    class: { scientificName: 'Aves', zhName: '鸟纲' },
    order: { scientificName: 'Strigiformes', zhName: '鸮形目' },
    family: { scientificName: 'Strigidae', zhName: '鸱鸮科' },
    genus: { scientificName: 'Bubo', zhName: '雕鸮属' },
  },
  conservation: conservation('VU', 'decreasing', 2021, 'A2bd+3bd+4bd'),
  distribution: {
    realms: ['terrestrial', 'freshwater'],
    continents: ['亚洲', '欧洲', '北美洲'],
    regions: [
      '环北极无林苔原繁殖区',
      '北美北部至温带开阔地越冬区',
      '北欧与北亚越冬区',
      '中国北方稀少非繁殖季范围',
    ],
    countries: [
      '加拿大',
      '美国',
      '俄罗斯',
      '丹麦（格陵兰）',
      '挪威',
      '瑞典',
      '芬兰',
      '中国',
    ],
    range: '繁殖于从斯堪的纳维亚和俄罗斯北部，经阿拉斯加、加拿大北部到格陵兰的环北极无林苔原；非繁殖期可向南进入北美温带、北欧和北亚开阔地，也有个体留在北极沿岸与海冰。中国大陆属于稀少的原生非繁殖季范围，不是稳定繁殖区。',
  },
  habitats: [
    {
      name: '环北极无林苔原',
      realm: 'terrestrial',
      description: '主要繁殖生境；低矮植被、地衣、碎石、丘状隆起和开阔视野并存，巢位于略高而干燥的地面浅刮坑。',
      isPrimary: true,
    },
    {
      name: '苔原湿地与淡水边缘',
      realm: 'freshwater',
      description: '旅鼠等猎物丰富时可在池塘、河流、湖泊和湿润苔原附近繁殖或觅食。',
    },
    {
      name: '海岸盐沼与沙丘',
      realm: 'terrestrial',
      description: '常见非繁殖季生境；低矮、开阔、便于从地面隆起或其他制高点搜索猎物。',
    },
    {
      name: '农田及其他温带开阔地',
      realm: 'terrestrial',
      description: '部分个体冬季使用草地和农田；机场低草地也会吸引雪鸮，却伴随航空器碰撞风险。',
    },
  ],
  measurements: {
    length: {
      min: 52,
      max: 71,
      unit: 'cm',
      note: 'Cornell 给出的两性共同范围。',
    },
    weight: {
      min: 1.6,
      max: 2.95,
      unit: 'kg',
      note: '由 1,600—2,950 克转换；不是性别均值。',
    },
    wingspan: {
      min: 126,
      max: 145,
      unit: 'cm',
      note: 'Cornell 给出的两性共同范围。',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['旅鼠', '田鼠和其他啮齿类', '兔与野兔', '雷鸟', '鸭雁与涉禽', '其他机会性小型脊椎动物'],
    description: '繁殖季高度依赖旅鼠和田鼠；猎物不足或进入越冬地后会扩大食谱，捕食其他哺乳类和多种鸟类，偶尔取食鱼、两栖类、甲壳类与甲虫。',
  },
  activity: [
    '晨昏活动为主，夏季可全天觅食',
    '游牧与部分迁徙',
    '坐等和低空突袭捕猎',
    '地面筑巢',
    '繁殖地忠诚度低',
  ],
  tags: [
    '北极鸟类',
    '鸮形目',
    '苔原顶级捕食者',
    '旅鼠脉冲响应',
    '游牧与暴发式南移',
    '中国国家二级保护动物',
    'IUCN 易危',
  ],
  summary: '随旅鼠脉冲在环北极苔原游牧繁殖、能在极昼中捕猎的大型白色鸮类。',
  description: '雪鸮繁殖于环北极无林苔原，非繁殖期可进入海岸、湿地、农田和其他开阔地。成年雄鸟通常随年龄变白，雌鸟与幼鸟保留更多黑褐横斑；两者都有黄眼、圆头和覆羽腿足。它以旅鼠为繁殖季核心猎物，却会随季节扩展食谱。低繁殖地忠诚、远距离游牧和猎物周期让全球数量及趋势难以估算；现行 IUCN 等级为易危。',
  storySections: [
    {
      key: 'identity',
      label: '外形与身份',
      title: '不是每一只成年雪鸮都纯白',
      body: '成年雄鸟通常随年龄减少黑褐斑纹，老雄鸟可近纯白；成年雌鸟和幼鸟往往保留更密横斑。中间羽色存在重叠，不能只凭生成图断言性别和精确年龄。圆头、黄眼、小黑喙和密覆白羽的腿足是全体图像都要保留的特征。',
    },
    {
      key: 'light-cycle',
      label: '极昼捕猎',
      title: '鸮类不等于只能在夜里行动',
      body: '雪鸮常在晨昏活跃，也会在北极夏季连续日照下全天觅食。它从低矮制高点观察，以视觉和听觉定位，再低飞或扑向猎物；活动节律随纬度、季节和猎物改变。',
    },
    {
      key: 'prey-pulse',
      label: '旅鼠脉冲',
      title: '在猎物峰值出现的地方繁殖',
      body: '旅鼠丰富时，雪鸮可产下平均约七枚的大窝卵，并产生大量幼鸟。成鸟会跨越数百至数千千米寻找下一处高猎物区，因此同一地点的巢数剧烈波动，不能直接等同全球种群起落。',
    },
    {
      key: 'irruption',
      label: '暴发式南移',
      title: '南方突然多见，不等于集体饥荒',
      body: '高繁殖成功会让大量当年幼鸟进入越冬种群，推动不规则的南移暴发。研究不支持把所有南移个体都解释成饥饿逃难；部分成鸟也会留在北极沿岸和海冰。',
    },
    {
      key: 'nesting',
      label: '地面繁殖',
      title: '异步孵化从第一枚卵开始',
      body: '雌鸟在略高而干燥的地面刮出浅坑，从第一枚卵开始独自孵化约 32 天；后续卵约隔日产下，使同巢幼鸟大小不同。地面巢对过近摄影、车辆和其他干扰敏感。',
    },
    {
      key: 'conservation',
      label: '难以计数',
      title: '保护先从跨国长期监测开始',
      body: '全球 14,000 至 28,000 只成熟个体仍是低质量估算。五个长期繁殖站的中心趋势支持保留易危，但西伯利亚等大片范围缺少监测。协调巢区调查、个体追踪、越冬计数、尸检和原住民知识，才能把游牧造成的观测波动与真实下降分开。',
    },
  ],
  keyFacts: [
    'IOC v15.2 接受 Bubo scandiacus，并把雪鸮作为不列亚种的单型种处理。',
    '体长 52—71 厘米、体重 1.6—2.95 千克、翼展 126—145 厘米。',
    '成年雄鸟通常随年龄变白；雌鸟和幼鸟多有较密横斑，但中间羽色不能可靠判定性别。',
    '雪鸮不是严格夜行性，在北极夏季连续日照下也会全天捕猎。',
    '每窝 3—11 枚卵、平均约 7 枚；雌鸟从第一枚卵开始孵化约 32 天。',
    '全球成熟个体估算为 14,000—28,000，质量较低；现行 IUCN 等级为易危且趋势下降。',
    '中国大陆是稀少非繁殖季范围，雪鸮属于国家二级重点保护野生动物。',
    '最老已知环志个体至少 23 年 10 个月，这不是普通寿命范围。',
  ],
  threats: [
    '气候变化改变积雪、植被和旅鼠周期，影响繁殖条件，但全球旅鼠普遍崩溃尚无证据',
    '车辆和航空器碰撞、输电设施碰撞与触电',
    '抗凝血灭鼠药、铅及持久性污染物暴露',
    '渔具缠绕、陷阱误捕和局地捕杀',
    '繁殖地与越冬地开发、车辆及过近摄影造成的扰动',
    '高致病性禽流感等疾病及变暖背景下可能增加的黑蝇侵扰',
  ],
  conservationActions: [
    '协调环北极繁殖地调查并扩展西伯利亚等监测空白区，跨旅鼠周期重复监测',
    '联合分析巢数、个体追踪和越冬调查，避免把游牧波动误判为种群变化',
    '降低道路、机场和电力设施周边的碰撞与触电风险',
    '减少抗凝血灭鼠药及其他污染物暴露，持续规范尸检与毒理检测',
    '保护苔原巢区和重要越冬开阔地，维持观察距离并限制车辆和无人机接近',
    '开展疾病监测和跨地区病理信息共享，将原住民与地方知识纳入长期保护',
  ],
  metrics: {
    adultLengthCm: [52, 71],
    adultMassKg: [1.6, 2.95],
    wingspanCm: [126, 145],
    estimatedMatureIndividuals: [14000, 28000],
  },
  featuredStats: [
    {
      key: 'wingspan',
      label: '翼展',
      value: '126—145',
      unit: '厘米',
      note: 'Cornell 两性共同范围',
    },
    {
      key: 'mature-population',
      label: '全球成熟个体估算',
      value: '14,000—28,000',
      unit: '只',
      note: 'BirdLife 估算质量 poor；不是同步全球普查',
    },
    {
      key: 'clutch',
      label: '窝卵数',
      value: '3—11',
      unit: '枚',
      note: '平均约 7 枚，随猎物条件显著变化',
    },
    {
      key: 'longevity-record',
      label: '已知最低年龄纪录',
      value: '至少 23 年 10 个月',
      note: '环志个体纪录，不是平均寿命',
    },
  ],
  media: {
    image: './images/species/snowy-owl/01-arctic-tundra-portrait.webp',
    alt: '一只黄眼、圆头、带黑褐横斑的雪鸮站在低矮开阔的北极苔原隆起处',
    focalPoint: { x: 0.66, y: 0.5 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/snowy-owl/02-adult-flight-field-marks.webp',
        alt: '一只雪鸮张开宽阔白翼低空飞过开阔地，黄色眼睛和短尾清晰可见',
        title: '宽翼低飞的开阔地猎手',
        caption: '雪鸮常从低矮制高点起飞，以视觉和听觉定位，再低空接近猎物；这不是鹰类式高空俯冲。',
        focalPoint: { x: 0.52, y: 0.49 },
      },
      {
        image: './images/species/snowy-owl/03-treeless-tundra-habitat.webp',
        alt: '无林北极苔原上分布低矮植被、碎石和浅湿地，一只雪鸮停在地面隆起处',
        title: '繁殖地不只是白雪',
        caption: '主要繁殖生境是有低植被、地衣、裸土和丘状隆起的开阔苔原，不是终年纯白的冰盖。',
        focalPoint: { x: 0.63, y: 0.54 },
      },
      {
        image: './images/species/snowy-owl/04-daylight-lemming-hunt.webp',
        alt: '北极白昼中，一只雪鸮贴近苔原低飞并扑向前方一只旅鼠',
        title: '极昼中的旅鼠猎手',
        caption: '晨昏常是活动高峰，但北极夏季连续日照下也能全天捕猎；旅鼠是繁殖季核心猎物。',
        focalPoint: { x: 0.52, y: 0.53 },
      },
      {
        image: './images/species/snowy-owl/05-ground-scrape-and-eggs.webp',
        alt: '一只横斑较密的雪鸮雌鸟守在苔原略高处的浅地面巢坑和数枚白卵旁',
        title: '从第一枚卵开始孵化',
        caption: '雌鸟独自在浅地面巢孵化约 32 天；卵约隔日产下，形成异步孵化。画面中的少量卵代表宽达 3—11 枚的窝卵范围。',
        focalPoint: { x: 0.56, y: 0.54 },
      },
      {
        image: './images/species/snowy-owl/06-distance-winter-monitoring.webp',
        alt: '冬季开阔地上，一只雪鸮停栖，远处一名研究者通过观测镜保持距离记录',
        title: '在远处重复记录',
        caption: '游牧和暴发式南移让单次目击难以代表种群趋势；标准化长期监测必须保持距离并避免干扰。',
        focalPoint: { x: 0.59, y: 0.52 },
      },
    ],
  },
  sources: SNOWY_OWL_SOURCES,
  featured: true,
  publishedAt: SNOWY_OWL_CONTENT_DATE,
  updatedAt: SNOWY_OWL_CONTENT_DATE,
}
```

## 来源覆盖与不确定性清单

| 主题 | 主来源 | 可落库结论 | 必须保留的边界 |
| --- | --- | --- | --- |
| 分类与名称 | IOC v15.2 | *Bubo scandiacus*；雪鸮；Snowy Owl；单型种 | *Nyctea scandiaca* 只作历史组合 |
| 全球保护字段 | IUCN/BirdLife 2021 | VU、decreasing、A2bd+3bd+4bd、2021 | 不用 2017 上调年或 2024 论文年替代 |
| 全球数量 | BirdLife；McCabe 2024 | 14,000—28,000 只成熟个体 | 低质量估算，不是同步普查 |
| 全球趋势 | McCabe 2024 | 中心估计支持三世代下降并保留 VU | 区间宽、站点少、西伯利亚不足；不写精确全球降幅 |
| 中国分布 | BirdLife；国家林草局 | 中国大陆原生非繁殖季出现 | 不写中国繁殖种 |
| 中国保护 | 国家名录；中国红色名录 | 国家二级；中国区域 VU | 法律等级、区域风险、全球 IUCN 三者分开 |
| 尺寸与识别 | Cornell | 52—71 cm、1.6—2.95 kg、126—145 cm；性年龄羽色差异 | 中间羽色不能可靠判性别 |
| 食性与活动 | BirdLife；Cornell | 旅鼠为繁殖季核心；晨昏与夏季白昼捕猎 | 不写全年只吃旅鼠或严格夜行 |
| 繁殖 | Cornell；COSEWIC；McCabe | 地面浅巢、3—11 卵、雌鸟孵化约 32 天、异步孵化 | 跨年配偶忠诚和初繁年龄仍有不确定性 |
| 寿命 | Cornell | 已知个体至少 23 年 10 个月 | 不填寿命范围 |
| 威胁 | McCabe 2024；COSEWIC 2025；BirdLife | 气候路径、碰撞触电、污染、扰动、疾病 | 地区尸检比例不可全球外推；全球旅鼠崩溃未证实 |
| 图像事实 | Cornell；BirdLife；COSEWIC | 圆头、黄眼、覆羽足、无林苔原、地面浅巢、白昼捕猎 | 不造精确地点、真实监测数据或性年龄断言 |

## 实施核对表

- 分类：必须是 `Strigiformes / Strigidae / Bubo / Bubo scandiacus`；搜索确认没有另建 `Nyctea scandiaca` 条目。
- 名称：中文主名“雪鸮”，英文主名“Snowy Owl”，繁体“雪鴞”只作别名。
- 保护字段：必须是 `VU / decreasing / 2021 / A2bd+3bd+4bd`。
- 中国口径：正文同时出现“原生非繁殖季范围”“国家二级保护”和“中国区域 VU”，并明确三者含义不同。
- 数字：`estimatedMatureIndividuals` 可填 `[14000, 28000]`，相邻展示文字必须含“低质量估算”；不填 `lifespanYears`。
- 活动：不能出现无条件“夜行性”；应写“晨昏活动为主，夏季可全天觅食”。
- 内容：恰好 6 个 `storySections`，封面加 5 张 gallery，媒体文件共 6 张。
- 资产：逐张复核黄眼、圆头、小黑喙、覆羽足、翼数、鸟数、猎物数、卵数、人物数量、人与鸟距离、无血腥接触及无精确巢址信息。
- 趋势文案：不得保留“全球精确下降 64%”；必须带站点覆盖和区间不确定性。
- todo：实现、静态资产检查、测试、类型检查和构建全部通过后，才删除 `雪鸮 *Bubo scandiacus*` 对应一行。
