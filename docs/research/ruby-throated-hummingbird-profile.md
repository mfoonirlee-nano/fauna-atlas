# 红喉北蜂鸟（*Archilochus colubris*）完整档案研究

- 检索与核验日期：2026-08-20
- 推荐展示中文名：**红喉北蜂鸟**
- 推荐展示英文名：**Ruby-throated Hummingbird**
- 接受学名：***Archilochus colubris* (Linnaeus, 1758)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图规定科学边界
- 分类口径：AviList v2025b 与 IOC World Bird List v15.2
- 保护口径：IUCN/BirdLife 的全球评估；北美繁殖地趋势另用 USGS BBS 说明，不能互相覆盖
- 时间口径：本文所称“当前”截至 **2026-08-20**；IUCN 正式全球评估日期是 **2020-10-12**，其引用虽发布在 Red List 2021-3，也不能把 `assessedYear` 写成 2021 或 2026

## 结论摘要

### 名称与分类

AviList v2025b 和 IOC v15.2 都接受 ***Archilochus colubris***，英文名为 **Ruby-throated Hummingbird**，归入雨燕型鸟类中的蜂鸟支系：动物界—脊索动物门—鸟纲—雨燕目—蜂鸟科—北蜂鸟属。AviList 当前把 Caprimulgiformes、Apodiformes 等目分别处理，因此本项目应采用 **Apodiformes**，不要沿用部分旧版 BirdLife/IUCN 导出数据中的广义 `Caprimulgiformes`。[AviList v2025b](https://www.avilist.org/checklist/v2025b/) [IOC v15.2](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)

IOC v15.2 多语言表中，简体中文名是 **红喉北蜂鸟**，繁体中文名是 **紅玉喉北蜂鳥**。产品主名与 todo 保持为“红喉北蜂鸟”，可将简体化的“红玉喉北蜂鸟”作为检索别名。不要使用无属级限定的“红喉蜂鸟”：这个名称在中文资料中还会指向其他蜂鸟，容易造成歧义。[IOC v15.2 Multilingual Version](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)

推荐名称字段：

```ts
names: {
  zh: '红喉北蜂鸟',
  en: 'Ruby-throated Hummingbird',
  aliases: ['红玉喉北蜂鸟'],
}
```

### IUCN：LC、increasing、2020、无适用标准代码

截至检索日，IUCN 的正式全球字段仍是：

- 等级：**Least Concern（LC，无危）**；
- 趋势：**increasing**；
- 评估日期：**2020-10-12**，所以 `assessedYear` 是 **2020**；
- 标准：LC 物种没有触发受胁等级的 criteria code，`criteria` 应省略，不能填写 `LC`、`A` 或空字符串。

对应结构化字段应写成：

```ts
conservation: conservation('LC', 'increasing', 2020)
```

IUCN 引用发布在 2021-3 版，但“发布版本”和“实地评估年份”是两件事；项目类型也明确要求 `assessedYear` 表示该记录所代表的评估年份。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22688193A186910664.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/ruby-throated-hummingbird-archilochus-colubris)

### 正式全球趋势与最新繁殖区监测必须并列而不是互相替代

USGS 于 2026-07-08 发布的最新版 North American Breeding Bird Survey（BBS）分析揭示了明显的时间窗口差异：

- **1966—2025** 的 survey-wide core 长期趋势仍为每年 **+0.603%**，95% 区间 **+0.413% 至 +0.776%**；
- **2015—2025** 的 survey-wide core 近期趋势为每年 **−1.358%**，95% 区间 **−2.003% 至 −0.710%**；
- 同一长期窗口内，不同地区也不一致：例如 Lower Great Lakes/St. Lawrence Plain 为正，而 Mississippi Alluvial Valley 为负。

这些数值只代表 BBS 在美国和加拿大**繁殖季、道路样线覆盖范围**内的模型结果，不包含墨西哥与中美洲越冬地的完整年度循环，也不是新的 IUCN 全球重评。因此：

1. `conservation.trend` 仍应忠实记录 IUCN 2020 的 `increasing`；
2. 正文和关键事实应补充“最新 BBS 十年窗口出现下降信号”；
3. 不能把某一州、某一区域、某一十年或一个庭院喂食器的观察直接写成全球趋势；
4. 下一次 IUCN/BirdLife 正式重评前，不自行把结构化趋势改成 `decreasing`。

[USGS BBS analysis 1966–2025](https://doi.org/10.5066/P1OSNSFC) [USGS BBS methods and program](https://www.usgs.gov/data/north-american-breeding-bird-survey-analysis-results-1966-2025) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22688193A186910664.en)

eBird 的 2012—2022 繁殖季模型曾给出全范围相对丰度中位变化 **+18%**，同时地图显示空间异质性。它使用不同资料、检测过程、空间网格和时间窗口，不能与 BBS 数字直接拼接成一条趋势，更说明所有趋势陈述都必须保留来源、范围和时期。[eBird Status and Trends 2012–2022](https://science.ebird.org/en/status-and-trends/species/rthhum/trends-map?season=breeding)

## 分布、迁徙与生境

### 狭义常规范围

繁殖范围覆盖加拿大南部至中部、美国东部和中部，南抵墨西哥湾沿岸；它是北美大平原以东唯一广泛繁殖的蜂鸟。非繁殖期主要在墨西哥南部至中美洲，范围南缘到哥斯达黎加和巴拿马西部，少数个体也在佛罗里达南端越冬。加勒比岛屿记录中有迁徙停留、季节性出现和迷鸟，不能把所有岛屿都写成稳定越冬核心区。[Smithsonian Migratory Bird Center](https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf) [eBird species page](https://ebird.org/species/rthhum) [Cornell range model](https://science.ebird.org/en/status-and-trends/species/rthhum/range-map)

eBird 2023 数据模型将季节窗口概括为：繁殖期 5 月末至 7 月中旬、繁殖前迁徙 3 月上旬至 5 月下旬、繁殖后迁徙 7 月下旬至 11 月上旬、非繁殖期 11 月中旬至次年 3 月初。它们是用于全范围建模的共同窗口，不是每只鸟、每个纬度都严格遵守的日历。[eBird Status and Trends, data version 2023](https://science.ebird.org/en/status-and-trends/species/rthhum/range-map)

### 海湾迁徙不是唯一一条“壮举路线”

确有红喉北蜂鸟在春秋季一次飞越墨西哥湾开放水面的记录与能量学支持，但不能写成“所有个体都飞越海湾”。对阿拉巴马湾岸南迁幼鸟的自动无线电遥测显示，77% 的离开方向与海岸线平行，支持沿湾岸边飞边取食的 circum-Gulf 策略。合理文案是：**部分个体跨越海湾，另一些沿湾岸迁徙，路线随年龄、天气、地点和个体状态变化。**[Zenzal et al. 2018](https://doi.org/10.1016/j.anbehav.2018.01.019) [USGS publication record](https://www.usgs.gov/publications/migratory-hummingbirds-make-their-own-rules-decision-resume-migration-along-a-barrier) [Smithsonian Migratory Bird Center](https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf)

迁徙前也不是所有个体都简单“体重翻倍”。一项使用 RFID 与自动秤的研究发现，部分成鸟在离开前四天迅速增脂，另一些没有采用同一策略；研究中的增脂个体最高约增重 44%，幼鸟没有出现相同模式。这个结果适合解释**迁徙燃料策略存在个体与年龄差异**，不适合把“翻倍”写成全物种固定规律。[Hou & Welch 2016](https://doi.org/10.1016/j.anbehav.2016.08.019)

### 推荐结构化分布

- `realms: ['terrestrial']`：飞越海湾不等于海洋生态界；本种不在海中取食或生活。
- `continents: ['北美洲']`：中美洲按本项目洲别口径属于北美洲。
- 不建议设置 `distribution.center`：一个点无法同时代表加拿大—美国繁殖范围、墨西哥湾迁徙通道和中美洲越冬范围。
- `countries` 只列主要常规范围国家，并在 `range` 中说明不是完整迷鸟清单。

推荐生境：

1. **开阔落叶林、混交林林缘与林间空地**：主要繁殖环境；也使用河岸、草甸、果园、公园和有花园的郊区。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory)
2. **迁徙停歇地的沿海灌丛、林缘和连续花源**：补充脂肪与昆虫食物的中继环境；不能把一个庭院喂食器当成天然生境的全部。[USGS migration study](https://www.usgs.gov/publications/migratory-hummingbirds-make-their-own-rules-decision-resume-migration-along-a-barrier) [USFWS](https://www.fws.gov/story/hummingbirds-north-america)
3. **热带干林、次生林缘、绿篱及遮荫咖啡/柑橘园**：主要越冬环境；开阔、干燥而仍有花源与小型节肢动物的植被镶嵌很重要。[Smithsonian species account](https://nationalzoo.si.edu/animals/ruby-throated-hummingbird) [Smithsonian Migratory Bird Center](https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf)

## 外形、尺寸与鉴别边界

Cornell 给出的两性共同范围为体长 **7—9 厘米**、体重 **2—6 克**、翼展 **8—11 厘米**；Smithsonian 给出的典型成鸟质量约 5 克。体重随性别、时间、繁殖状态和迁徙增脂改变，2—6 克应被理解为宽包络，不应据此把每只鸟都画成同一胖瘦。[Cornell identification](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id) [Smithsonian species account](https://nationalzoo.si.edu/animals/ruby-throated-hummingbird) [Hou & Welch 2016](https://doi.org/10.1016/j.anbehav.2016.08.019)

### 共同形态

- 体型极小而紧凑，头相对较大；喙黑色、细长、针状并仅轻微下弯，不是太阳鸟式强弯喙，也没有锯齿。
- 上体和头顶为金属绿至金绿色，腹面灰白；飞羽深色。
- 双翼狭而尖；停栖时翼尖通常不超过尾端。飞行照片可有自然翼尖运动模糊，但必须只有两翼。
- 足极小且暗色，适合停栖而不擅长步行；不能画成猛禽足、涉禽长腿或昆虫足。

### 成鸟雄鸟

- 喉部有一块角度依赖的红宝石色虹彩喉斑（gorget），上缘/颏部偏黑；当入射光与视角不合适时，喉斑可显得暗红甚至近黑。
- 尾较短、深色并略分叉，通常不见雌鸟式明显白色外侧尾端。
- 红色只在喉斑，不延伸为 Anna’s Hummingbird 式洋红头顶，也不能变成 Black-chinned Hummingbird 的黑喉配紫色下缘。

### 成鸟雌鸟与幼鸟

- 雌鸟上体金属绿、腹面灰白，喉部没有完整红色喉斑；外侧尾羽有白色端斑。
- 幼雄可在淡色喉部出现少量红羽，但不能直接画成完整成鸟雄性喉斑。
- 雌鸟和幼鸟与黑颏北蜂鸟非常相似，单凭生成图不能声称完成可核验鉴定；应结合东部繁殖范围、时节与形态作为代表性重建。[Cornell identification](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id) [eBird identification](https://ebird.org/species/rthhum)

### 虹彩不是固定的油漆红

Smithsonian 说明蜂鸟喉斑由高反射性羽毛构成，视角改变时可从明亮金属色转为近黑。图像应让喉斑受单一自然光源照亮，并保留部分暗羽和方向性反射；不要画成自发光霓虹、红色胸甲或每个角度都均匀亮红。[Smithsonian hummingbird morphology](https://nationalzoo.si.edu/migratory-birds/hummingbirds) [Cornell identification](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id)

### 量化字段建议

| 字段 | 推荐值 | 说明 |
| --- | --- | --- |
| `measurements.length` | 7—9 cm | Cornell 两性共同范围。 |
| `measurements.weight` | 2—6 g | 含性别、季节和迁徙燃料状态差异；典型值约 5 g。 |
| `measurements.wingspan` | 8—11 cm | Cornell 两性共同范围。 |
| `metrics.adultLengthCm` | `[7, 9]` | 适合粗粒度比较。 |
| `metrics.adultMassKg` | `[0.002, 0.006]` | 以千克存储；不要四舍五入成 0。 |
| `metrics.wingspanCm` | `[8, 11]` | 与展示范围一致。 |
| `metrics.lifespanYears` | 不填 | 9 年 2 个月是已知环志个体的最低年龄纪录，不是群体寿命范围。 |
| `metrics.topSpeedKph` | 不填 | 实验最大速度、迁徙地速、巡航速度和求偶俯冲不能混用。 |
| `metrics.estimatedMatureIndividuals` | 不填 | Partners in Flight 的繁殖种群估计不是 IUCN 成熟个体普查，schema 也不能携带估算方法和年份。 |

## 食性、活动与飞行

红喉北蜂鸟同时依赖花蜜和动物性食物。花蜜提供快速可用的碳水化合物；它们也在空中捕捉蚊、蠓、果蝇、小型蜂等昆虫，从蛛网取小虫或蜘蛛，并利用啄木鸟制造的树液孔。不能把 `nectarivore` 解释为“只喝花蜜”，育雏期的小型节肢动物尤其重要。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory) [Smithsonian Migratory Bird Center](https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf)

它能悬停、倒飞、侧移并快速制动，但这些动作对应不同的翼拍频率、姿态、速度与代谢负荷。实验综述指出，红喉北蜂鸟的翼拍频率会随温度和负载改变，自然迁徙实际飞行速度仍难以概括；实验室最大性能不能直接写成野外固定值。[Altshuler & Dudley 2002](https://repository.si.edu/server/api/core/bitstreams/69d9a05a-1707-4aff-bab7-32a8f09e9766/content)

活动标签推荐：`['昼行性', '长距离迁徙', '单独活动为主', '悬停取食', '资源领地防卫']`。Smithsonian 把本种描述为白天活动、夜间睡眠，繁殖雄鸟及资源点个体会防卫花丛或喂食器；不要把蜂鸟家族可能出现的夜间迟钝状态写成每只红喉北蜂鸟每天必然发生。[Smithsonian species account](https://nationalzoo.si.edu/animals/ruby-throated-hummingbird)

## 繁殖与育幼

雌鸟独自筑巢、孵卵和育幼，雄鸟求偶交配后不参与亲代照护。巢通常直接建在一根细小、常向下倾斜的树枝上，而不是夹在粗大树杈间；材料包括蓟或蒲公英绒毛、植物纤维和蛛丝，外侧以地衣、苔藓伪装。蛛丝使巢壁能随幼鸟长大而扩张。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory) [Smithsonian species account](https://nationalzoo.si.edu/animals/ruby-throated-hummingbird)

Cornell 汇总的繁殖范围为：

- 窝卵数 **1—3 枚**，常见图示为两枚；
- 每季 **1—2 窝**，随纬度、天气和个体情况而变；
- 孵化期 **12—14 天**；
- 雏鸟期 **18—22 天**；
- 巢外径约 **5 厘米**、深约 **2.5 厘米**，常在离地约 3—12 米的枝条上。

不要把“常见两枚卵”绝对化为每窝必定两枚；也不要在一幅孵卵图中同时露出完整雌鸟、两枚卵和雏鸟。图像若表现巢材采集或织巢，应只出现雌鸟，不出现协助筑巢的雄鸟。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory)

## 常见网络数字审计

| 常见说法 | 证据判断 | 落库建议 |
| --- | --- | --- |
| “每秒拍翼 53 次” | Cornell 科普页给出约 53 次/秒；Smithsonian 页面又给出直线飞行约 70 次/秒、俯冲超过 200 次/秒。实验综述显示频率随飞行模式、温度和负载改变。 | 不填结构化字段，不做无条件 featured stat。正文若使用，只能写“悬停等状态下每秒数十次，随飞行状态改变”。 |
| “心率 225—1200 次/分钟” | Smithsonian 蜂鸟科普页把该范围归给红喉北蜂鸟，但没有在页面提供原始样本、测量条件和不确定性；休息、飞行、温度与迟钝状态差异巨大。 | 不进入 `metrics`、`featuredStats` 或关键事实；除非另行找到可追溯的本种原始实验并保留条件。 |
| “飞行速度 30/45/50 mph” | 资料常把直线飞行、受惊逃逸、风助地速和其他蜂鸟的求偶俯冲混用。2002 年飞行综述还明确指出自然迁徙实际速度未知。 | `metrics.topSpeedKph` 留空。 |
| “迁徙前体重翻倍” | 迁徙增脂真实存在，但 Hou & Welch 发现不同个体使用不同策略；其研究中部分成鸟四天最高增重约 44%，幼鸟未出现同样模式。 | 只在迁徙故事中写个体差异，不做全物种固定数字。 |
| “所有个体不停飞越墨西哥湾” | 部分个体确实跨湾；无线电遥测的阿拉巴马幼鸟多数沿海岸方向离开。 | 写“跨湾与沿湾并存”，不画唯一迁徙箭头。 |
| “一天喝掉体重一半的花蜜” | Smithsonian 科普页给出近似描述，但饮水/花蜜量随温度、食物浓度和能量支出变化，且不能代表总食物质量。 | 不做固定摄食率或 featured stat。 |
| “寿命 9 年 2 个月” | 这是已知环志重捕个体至少存活年龄，不是平均寿命或全种最大寿命。 | 可带“至少”和“已知纪录”在延伸文案中提及，不填 `lifespanYears`。 |

[Cornell overview](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/overview) [Smithsonian hummingbird overview](https://nationalzoo.si.edu/migratory-birds/hummingbirds) [Altshuler & Dudley 2002](https://repository.si.edu/server/api/core/bitstreams/69d9a05a-1707-4aff-bab7-32a8f09e9766/content) [Hou & Welch 2016](https://doi.org/10.1016/j.anbehav.2016.08.019) [Zenzal et al. 2018](https://doi.org/10.1016/j.anbehav.2018.01.019)

## 威胁、法律保护与行动

### 证据边界

IUCN 2020 将本种评为 LC，未认定有足以触发受胁等级的全种危机。下列内容应称为**已知直接危险、局地压力或全年度生境风险**，不能写成已经量化的全球灭绝驱动：[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22688193A186910664.en)

1. **玻璃碰撞**：反射植被和天空会误导飞行中的鸟；蜂鸟体型小，USFWS 建议用外侧高密度图案或屏障让整面玻璃可见。[USFWS bird-safe glass guidance](https://www.fws.gov/story/hummingbirds-north-america)
2. **自由活动家猫**：Smithsonian 将猫捕食列为本种个体的直接风险；喂食器若给猫提供伏击点会放大危险。[Smithsonian species account](https://nationalzoo.si.edu/animals/ruby-throated-hummingbird)
3. **繁殖、停歇与越冬生境丧失或破碎化**：本种全年依赖林缘、灌丛、树木、花源和昆虫食物；北美繁殖区增长不代表中美洲越冬与停歇地没有风险。[USFWS](https://www.fws.gov/story/hummingbirds-north-america) [Smithsonian Migratory Bird Center](https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf)
4. **农药与昆虫资源减少**：本种并非纯食蜜；广谱杀虫可能减少动物性食物。USFWS 推荐综合虫害管理，但现有来源不足以为本种给出全球死亡比例。[USFWS](https://www.fws.gov/story/hummingbirds-north-america)
5. **不安全的人工喂食**：霉变、发酵或错误配方是可避免的局地危险；这不应与自然花蜜混为一谈，也不是放置喂食器本身必然有害。[USFWS feeding guidance](https://www.fws.gov/story/feed-or-not-feed-wild-birds) [Cornell feeder guidance](https://www.allaboutbirds.org/news/feeding-hummingbirds/)
6. **迁徙中的天气与资源缺口**：墨西哥湾等生态屏障使个体对风、燃料和停歇地条件敏感；不要为风暴虚构固定死亡率。

### 法律状态

红喉北蜂鸟列入美国 `50 CFR 10.13` 的 Migratory Bird Treaty Act 保护鸟类名录，未经许可不得捕捉、杀害、交易、运输或持有其个体、巢与卵。**IUCN LC 不等于可以抓取或自行环志。**[USFWS MBTA](https://www.fws.gov/law/migratory-bird-treaty-act-1918) [2023 protected-species list](https://www.fws.gov/policy/library/2023/2023-15551.pdf)

### 推荐保护行动

- 保护并连接繁殖地林缘、迁徙停歇地和中美洲越冬灌丛/林缘，维持春至秋连续的本地花期与小型节肢动物资源。
- 种植本地管状花、保留适量灌木和落叶层，并采用综合虫害管理减少广谱农药使用。
- 让家猫留在室内或受控活动；喂食器远离猫可伏击的低矮遮蔽物。
- 在玻璃外侧设置足够密集、覆盖整面的可见图案或物理屏障；不要只在室内贴少量猛禽剪影。
- 如使用喂食器，只用白砂糖与水约 1:4 的透明溶液，不加红色染料、蜂蜜或其他添加物，并按温度频繁更换和彻底清洗。
- 持续用 BBS、eBird、环志和自动遥测分别监测繁殖趋势、迁徙路线、停歇资源和越冬连接；报告必须保留空间范围、时间窗口和方法。
- 任何捕捉、环志、巢检或追踪都由持证人员按动物福利与许可要求进行；公众保护图不应示范徒手抓鸟。

## 推荐关键事实

1. 红喉北蜂鸟是北美大平原以东唯一广泛繁殖的蜂鸟，冬季主要迁往墨西哥南部和中美洲。[Smithsonian](https://nationalzoo.si.edu/animals/ruby-throated-hummingbird)
2. 成鸟雄鸟有角度依赖的红宝石色虹彩喉斑；雌鸟没有完整红喉斑，外侧尾羽带白端。[Cornell identification](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id)
3. 体长约 7—9 厘米、体重约 2—6 克、翼展约 8—11 厘米，迁徙增脂会让个体体重明显波动。[Cornell](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id)
4. 花蜜提供快速能量，小型昆虫和蜘蛛提供动物性营养；它不是严格只食蜜的鸟。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory)
5. 部分个体跨越墨西哥湾，另一些沿湾岸迁徙；不存在一条适用于所有年龄和天气条件的固定路线。[Zenzal et al. 2018](https://doi.org/10.1016/j.anbehav.2018.01.019)
6. 雌鸟独自筑巢、孵卵和育幼；巢以植物绒毛、蛛丝、地衣和苔藓构成，直接附在细枝上。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory)
7. 每窝 1—3 枚卵，孵化约 12—14 天，雏鸟在巢约 18—22 天；这些是范围而不是每巢固定日程。[Cornell Life History](https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory)
8. IUCN 正式字段为 `LC / increasing / 2020`，但最新 BBS 的 2015—2025 窗口显示北美繁殖区整体下降；两者必须同时保留尺度说明。[IUCN](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22688193A186910664.en) [USGS BBS](https://doi.org/10.5066/P1OSNSFC)
9. 在美国，本种受 MBTA 保护；LC 是灭绝风险等级，不是捕捉、持有鸟或巢卵的许可。[USFWS](https://www.fws.gov/law/migratory-bird-treaty-act-1918)

## 应删除或避免的说法

- 不把 IUCN 引用版本 2021-3 写成 `assessedYear: 2021`；评估日是 2020-10-12。
- 不为 LC 虚构 criteria code；`criteria` 应省略。
- 不因 2015—2025 BBS 下降就覆写 IUCN 2020 的正式 `increasing`；也不因长期增长就隐去近期下降信号。
- 不把 USGS BBS 的美国—加拿大繁殖季趋势称作完整全球年度趋势。
- 不把喂食器访问量、单个庭院观察或单州变化当作全种数量。
- 不把 Partners in Flight 的繁殖种群估计直接填进 `estimatedMatureIndividuals`。
- 不写“所有个体都连续 18—20 小时飞越墨西哥湾”或“每年固定同一路线”。
- 不写所有迁徙个体都会体重翻倍；个体和年龄策略有差异。
- 不把 53、70 或 200 次/秒选成唯一固定翼拍频率，也不把 225—1200 次/分钟写成无条件心率范围。
- 不填 `topSpeedKph`；不要把其他蜂鸟的求偶俯冲、实验最大速度或顺风地速归给本种。
- 不写只食花蜜；昆虫和蜘蛛是稳定记录的食物。
- 不画用脚抓虫、咀嚼花朵、舌头像吸管无限伸长或喙强烈弯曲。
- 不让雌鸟拥有完整亮红喉斑，也不让雄鸟出现 Anna’s Hummingbird 式红色头顶或 Black-chinned Hummingbird 式紫色喉缘。
- 不把虹彩喉斑画成自发光、任何角度都均匀饱和的红色胸甲。
- 不画雄鸟筑巢、孵卵或喂雏；亲代照护由雌鸟承担。
- 不把巢画成悬吊袋巢、树洞巢、粗枝分叉中的大碗或地面巢。
- 不示范徒手抓鸟、无证环志、游客触巢、染红糖水、蜂蜜水或脏污发霉喂食器。
- 不把 IUCN LC 解释为没有保护价值或不受法律保护。

## 6 幅原创图的科学边界

六幅图都应声明为**代表性科学重建**，不冒充真实个体、真实巢址、遥测记录或一次已记录事件。01—04 与 06 各有一只成鸟，05 有一只成鸟雌鸟与两只中期雏鸟；自然飞行允许翼尖运动模糊，但身体、头、喙和尾必须可辨。

### 六图共同形态总检

**Adult subject in images 01—04 and 06: one tiny compact Ruby-throated Hummingbird, *Archilochus colubris*; one head; one long slender black needle-like bill with only a slight downward curve; exactly two narrow pointed wings; one short tail; exactly two tiny dark feet only when visible; metallic emerald-to-golden-green crown and upperparts; gray-white underparts. Image 05 only: exactly one adult female and exactly two mid-stage nestlings in one nest. Adult male only: one angle-dependent ruby-red iridescent gorget with a dark chin, short dark slightly forked tail. Adult female only: plain whitish throat with no red gorget, dark tail with white tips on the outer rectrices. No magenta crown, purple lower gorget band, rufous body, sunbird anatomy, parrot bill, teeth, extra wings, extra legs, giant feet, insect antennae, glowing feathers, text, labels or watermark.**

| 序号与文件 | 建议场景 | 必须表现 | 应拒绝 |
| --- | --- | --- | --- |
| 01 `01-iridescent-gorget-woodland-edge.webp` | 封面：一只成鸟雄鸟停栖在林缘细枝上，主体位于画面右侧，左侧约 42% 为柔和林地留白 | 恰好一只雄鸟；金属绿上体、灰白腹面、暗颏和角度依赖的红宝石色虹彩喉斑；停栖姿态自然，细黑喙、折叠双翼与短尾完整可辨 | 雌鸟混入、第二只鸟、悬停取食、花朵、洋红头顶、整胸发光、昆虫翅、裁断喙或尾、左侧杂乱主体、文字水印 |
| 02 `02-cardinal-flower-hover-feeding.webp` | 一只成鸟雌鸟在草甸林缘悬停，从一株红色 cardinal flower（*Lobelia cardinalis*）取食 | 恰好一只白喉、绿背、外侧尾羽具白端的雌鸟；细喙对准一朵红色管状花，双翼自然运动模糊 | 红喉斑、第二只鸟、错误花型、巨大花朵、用脚抓花、张开有牙大嘴、喂食器、文字水印 |
| 03 `03-aerial-insect-foraging.webp` | 一只成鸟雌鸟在开阔落叶林间短距离悬停，喙尖前只有一只毫米级小飞虫 | 雌鸟白喉、绿背、外侧尾羽具白端；猎物很小且无血，捕食动作只用喙；背景保留自然林缘尺度 | 红喉斑、成群蚊虫、巨大蜜蜂、蛛网缠鸟、用脚抓虫、张开有牙大嘴、第二只鸟 |
| 04 `04-gulf-crossing-migration.webp` | 黎明时，一只成鸟雄鸟在墨西哥湾开放水面上飞行，海平线与远水构成全部环境 | 只表现一种可能的跨湾迁徙瞬间；恰好一只雄鸟，鸟体、暗颏与短尾可辨，双翼有自然运动模糊；明确不代表所有个体都跨湾 | 海岸湿地或沿岸植被、发光航线、GPS 图标、罗盘、文字、蜂鸟编队、风暴受伤、夸张巨浪、把画面标成唯一或已追踪路线 |
| 05 `05-female-nestling-care.webp` | 一只成鸟雌鸟悬停在巢旁照料两只中期雏鸟；微小杯巢直接筑在一根不分叉、向下倾斜的细枝顶面 | 恰好一只白喉雌鸟与两只中期雏鸟；雏鸟留在同一个以植物绒毛、地衣和苔藓构成的微小杯巢内；不虚构正在递送的食物 | 雄鸟、红喉、卵、第三只雏鸟、第二个巢、人手、分叉树杈、大型鸟巢、袋巢、蛛丝筑巢动作、雏鸟离巢飞行 |
| 06 `06-native-garden-monitoring.webp` | 一只成鸟雌鸟在原生花园中悬停取食；远处一名社区科学观察者用双筒望远镜观察并手持记录本 | 恰好一只白喉雌鸟和一名保持距离的观察者；前景同时有红色 cardinal flower 与紫色 bee balm；观察者不接触、不追逐鸟或花丛 | 第二只鸟、近距离包围、徒手接触、捕捉或环志、喂食器、窗面防撞绳、户外猫、红色糖水、广告文字 |

### 最终图片静态验收

- 每张源图与 WebP 均为 1536×1024、横向 3:2、sRGB、无 alpha；
- 文件名与 `media` 一一对应，封面不在 gallery 重复；
- 每图人工确认鸟数、翼数、足数、性别羽色、喙形、尾形、巢位和人造物边界；
- 封面左侧约 42% 留白；六图 `focalPoint` 已按最终主体位置记录在 `media`；
- 不使用真实照片信用语，统一标注 `Fauna Atlas · AI 生成原创图像`。

## 推荐来源数组

下列常量是本物种在 `species.ts` 中的**唯一来源数组声明**；完整对象只通过 `sources: RUBY_THROATED_HUMMINGBIRD_SOURCES` 引用。

```ts
const RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE = '2026-08-20' as const;
const RUBY_THROATED_HUMMINGBIRD_CONTENT_DATE = '2026-08-20' as const;

const RUBY_THROATED_HUMMINGBIRD_SOURCES = [
  {
    title: 'AviList Core Team 2026 — Global Avian Checklist v2025b',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Master and Multilingual Lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Archilochus colubris (assessed 12 October 2020)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22688193A186910664.en',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Ruby-throated Hummingbird Archilochus colubris',
    url: 'https://datazone.birdlife.org/species/factsheet/ruby-throated-hummingbird-archilochus-colubris',
    kind: 'general',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Ruby-throated Hummingbird identification and measurements',
    url: 'https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id',
    kind: 'general',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Ruby-throated Hummingbird life history',
    url: 'https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory',
    kind: 'ecology',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'eBird Status and Trends — Ruby-throated Hummingbird range, data version 2023',
    url: 'https://science.ebird.org/en/status-and-trends/species/rthhum/range-map',
    kind: 'distribution',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo — Ruby-throated hummingbird',
    url: 'https://nationalzoo.si.edu/animals/ruby-throated-hummingbird',
    kind: 'general',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Migratory Bird Center — Ruby-throated Hummingbird annual-cycle factsheet',
    url: 'https://nationalzoo.si.edu/sites/default/files/documents/ruby-throated_hummingbird_1-20-12.pdf',
    kind: 'distribution',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Hou & Welch 2016 — Premigratory fuelling strategies in Ruby-throated Hummingbirds',
    url: 'https://doi.org/10.1016/j.anbehav.2016.08.019',
    kind: 'ecology',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'Zenzal et al. 2018 — Juvenile migration decisions along the Gulf of Mexico',
    url: 'https://doi.org/10.1016/j.anbehav.2018.01.019',
    kind: 'ecology',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'USGS 2026 — North American Breeding Bird Survey Analysis Results 1966–2025',
    url: 'https://doi.org/10.5066/P1OSNSFC',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'USFWS — Hummingbirds of North America: habitat, hazards and conservation actions',
    url: 'https://www.fws.gov/story/hummingbirds-north-america',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
  {
    title: 'USFWS — Migratory Bird Treaty Act and protected species list',
    url: 'https://www.fws.gov/law/migratory-bird-treaty-act-1918',
    kind: 'conservation',
    accessedAt: RUBY_THROATED_HUMMINGBIRD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

以下对象覆盖当前 `Species` 的全部必填字段；图像文件名、替代文本与 `focalPoint` 已按最终落盘资产复核。

```ts
{
  id: 'species-archilochus-colubris',
  slug: 'ruby-throated-hummingbird',
  names: {
    zh: '红喉北蜂鸟',
    en: 'Ruby-throated Hummingbird',
    aliases: ['红玉喉北蜂鸟'],
  },
  scientificName: 'Archilochus colubris',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Apodiformes', '雨燕目'),
    taxon('Trochilidae', '蜂鸟科'),
    taxon('Archilochus', '北蜂鸟属'),
  ),
  conservation: conservation('LC', 'increasing', 2020),
  distribution: {
    realms: ['terrestrial'],
    continents: ['北美洲'],
    regions: [
      '加拿大南部与中部',
      '美国东部与中部',
      '墨西哥湾沿岸及跨湾迁徙通道',
      '墨西哥南部',
      '中美洲',
    ],
    countries: [
      '加拿大',
      '美国',
      '墨西哥',
      '伯利兹',
      '危地马拉',
      '萨尔瓦多',
      '洪都拉斯',
      '尼加拉瓜',
      '哥斯达黎加',
      '巴拿马',
    ],
    range:
      '在加拿大南部至中部和美国东部、中部繁殖，秋季经美国东南部与墨西哥湾沿岸南迁，部分个体跨越海湾、另一些沿海岸移动；主要在墨西哥南部至中美洲越冬，少数留在佛罗里达南端。国家列表为常规范围概括，不含全部加勒比迁徙记录与迷鸟。',
  },
  habitats: [
    {
      name: '开阔落叶林、混交林林缘与林间空地',
      realm: 'terrestrial',
      description:
        '主要繁殖环境，也利用河岸、草甸、果园、公园和有连续花源及细枝巢位的郊区花园。',
      isPrimary: true,
    },
    {
      name: '迁徙停歇地的沿海灌丛与花源镶嵌',
      realm: 'terrestrial',
      description:
        '在墨西哥湾沿岸及内陆通道补充花蜜、小型节肢动物和脂肪；路线与停留时间随年龄、天气和个体状态改变。',
    },
    {
      name: '热带干林、次生林缘、绿篱与遮荫农园',
      realm: 'terrestrial',
      description:
        '墨西哥南部和中美洲的主要越冬环境，包括仍保留树冠、灌丛、花源和昆虫食物的遮荫咖啡及柑橘园。',
    },
  ],
  measurements: {
    length: {
      min: 7,
      max: 9,
      unit: 'cm',
      note: 'Cornell 给出的两性共同体长范围。',
    },
    weight: {
      min: 2,
      max: 6,
      unit: 'g',
      note: '宽泛体重包络；性别、时间和迁徙增脂状态会改变体重，Smithsonian 给出的典型值约 5 克。',
    },
    wingspan: {
      min: 8,
      max: 11,
      unit: 'cm',
      note: 'Cornell 给出的两性共同翼展范围。',
    },
  },
  diet: {
    types: ['nectarivore', 'insectivore'],
    foods: ['本地管状花与开花树木的花蜜', '蚊、蠓和果蝇等小型飞虫', '小型蜂与蚜虫', '蜘蛛', '树液'],
    description:
      '悬停或短暂停栖取食花蜜，以快速补充碳水化合物；也在空中、叶面、蛛网和啄木鸟树液孔附近捕捉小型昆虫与蜘蛛，动物性食物在育雏期尤其重要。',
  },
  activity: ['昼行性', '长距离迁徙', '单独活动为主', '悬停取食', '资源领地防卫'],
  tags: ['北美候鸟', '蜂鸟', '传粉者', '悬停飞行', '食蜜兼食虫', '雌雄异形', '墨西哥湾迁徙'],
  summary: '在北美东部繁殖、冬季迁往墨西哥南部与中美洲，以悬停采蜜和捕食微小节肢动物维持高能生活的微型候鸟。',
  description:
    '红喉北蜂鸟上体闪现金属绿，只有成鸟雄鸟拥有随光线明灭的红宝石色喉斑；雌鸟独自用植物绒毛和蛛丝在细枝上筑巢。它们并非只食花蜜，也捕捉昆虫和蜘蛛。部分个体跨越墨西哥湾，另一些沿湾岸迁徙。IUCN 的 2020 全球评估仍为无危且趋势 increasing，但最新 BBS 在 2015—2025 年窗口检测到北美繁殖区下降信号，因此长期增长、近期变化和全年度生境风险需要分开陈述。',
  storySections: [
    {
      key: 'gorget',
      label: '辨识',
      title: '红宝石喉斑会随光线明灭',
      body:
        '成鸟雄鸟的喉斑由方向性很强的虹彩羽毛构成：角度合适时呈金属红，不合适时可近黑。雌鸟没有完整红喉斑，而是白喉、绿背并在外侧尾羽带白端；红色不是覆盖头顶和胸部的固定颜料。',
    },
    {
      key: 'flight',
      label: '飞行',
      title: '悬停只是不断变化的飞行包线之一',
      body:
        '狭尖翼和灵活的翼关节让它能悬停、倒飞、侧移和快速制动，再在花朵之间作直线冲刺。翼拍频率会随悬停、直飞、俯冲、负载和温度改变，因此“每秒 53 次”只能是特定条件下的近似，不能代表所有飞行。',
    },
    {
      key: 'feeding',
      label: '食性',
      title: '花蜜供能，昆虫补上动物性营养',
      body:
        '红喉北蜂鸟把细喙和舌伸入管状花获取花蜜，也从空中、叶面和蛛网附近捕捉微小昆虫与蜘蛛。花蜜与动物性食物承担不同营养角色；把它归为食蜜动物时，不能删掉育雏和换羽所需的昆虫食物。',
    },
    {
      key: 'migration',
      label: '迁徙',
      title: '跨海与沿岸，是同一物种的不同选择',
      body:
        '一些个体携带脂肪储备跨越墨西哥湾，另一些沿海岸边飞边取食；阿拉巴马湾岸遥测幼鸟多数沿海岸方向离开。迁徙前也只有部分成鸟快速增脂，说明年龄、天气、燃料和停歇地共同决定路线，而不是所有鸟重复同一种壮举。',
    },
    {
      key: 'nesting',
      label: '繁殖',
      title: '一只雌鸟把蛛丝织成会长大的小杯',
      body:
        '雌鸟独自在细枝顶面用植物绒毛和蛛丝筑巢，再以地衣和苔藓伪装；富有弹性的巢壁会随雏鸟长大。每窝 1—3 枚卵，孵化约 12—14 天，雏鸟在巢约 18—22 天，雄鸟不参与筑巢、孵卵或喂雏。',
    },
    {
      key: 'conservation',
      label: '监测与保护',
      title: '无危不等于趋势永远向上',
      body:
        'IUCN 2020 仍记录 LC 与 increasing；USGS 最新 BBS 却显示，1966—2025 长期仍增长，而 2015—2025 的北美繁殖区出现下降。保护需要保留全年度花源、昆虫和细枝巢位，使玻璃可见、让猫留在室内、正确维护喂食器，并持续用一致方法监测。',
    },
  ],
  keyFacts: [
    '当前接受名为 Archilochus colubris，归入雨燕目、蜂鸟科、北蜂鸟属；红玉喉北蜂鸟可作中文检索别名。',
    '成鸟雄鸟具有角度依赖的红宝石色虹彩喉斑，雌鸟没有完整红喉斑并在外侧尾羽带白端。',
    '体长约 7—9 厘米、体重约 2—6 克、翼展约 8—11 厘米，迁徙增脂使体重随阶段改变。',
    '花蜜提供快速能量，小型昆虫和蜘蛛提供动物性营养；本种不是严格只食蜜。',
    '部分个体跨越墨西哥湾，另一些沿湾岸迁徙，路线随年龄、天气、地点和燃料状态改变。',
    '雌鸟独自筑巢、孵卵和育幼；每窝 1—3 枚卵，孵化约 12—14 天，雏鸟在巢约 18—22 天。',
    'IUCN 正式字段为 LC、increasing、2020 且无 criteria code；不能用监测数据自行改写评估字段。',
    '最新 USGS BBS 显示 1966—2025 北美繁殖区长期增长，但 2015—2025 十年窗口转为下降，时间尺度必须注明。',
    '在美国，本种受 Migratory Bird Treaty Act 保护，未经许可不得捕捉、持有鸟、巢或卵。',
  ],
  threats: [
    '玻璃反射造成的碰撞伤亡',
    '自由活动家猫在花源、喂食器和停栖处捕食',
    '繁殖地、迁徙停歇地和中美洲越冬生境的丧失与破碎化',
    '广谱农药暴露及小型昆虫、蜘蛛食物减少',
    '霉变、发酵、错误配方或位置不安全的人工喂食器',
    '迁徙生态屏障中的恶劣天气、燃料不足和连续花源缺口',
  ],
  conservationActions: [
    '保护并连接繁殖林缘、迁徙停歇地和中美洲越冬灌丛，维持全年度连续花源与昆虫食物',
    '种植本地管状花、保留灌木和落叶层，并采用综合虫害管理减少广谱农药',
    '在玻璃外侧设置覆盖整面、间距足够密集的防撞图案或物理屏障',
    '让家猫留在室内或受控活动，并使花源和喂食器远离猫的伏击点',
    '喂食器只使用约一份白砂糖配四份水的透明溶液，按温度频繁更换并彻底清洁',
    '联合 BBS、eBird、持证环志和自动遥测监测繁殖趋势、迁徙路线、停歇资源与越冬连接',
  ],
  metrics: {
    adultLengthCm: [7, 9],
    adultMassKg: [0.002, 0.006],
    wingspanCm: [8, 11],
  },
  featuredStats: [
    {
      key: 'body-length',
      label: '体长',
      value: '7—9',
      unit: '厘米',
      note: 'Cornell 两性共同范围',
    },
    {
      key: 'body-mass',
      label: '体重',
      value: '2—6',
      unit: '克',
      note: '迁徙增脂、性别和时间会改变体重；典型值约 5 克',
    },
    {
      key: 'incubation',
      label: '孵化期',
      value: '12—14',
      unit: '天',
      note: '由雌鸟独自孵卵',
    },
    {
      key: 'nestling-period',
      label: '雏鸟在巢',
      value: '18—22',
      unit: '天',
      note: '随天气、纬度与个体情况变化',
    },
  ],
  media: {
    image: './images/species/ruby-throated-hummingbird/01-iridescent-gorget-woodland-edge.webp',
    alt: '一只金属绿上体、灰白腹面且红宝石色虹彩喉斑受光点亮的雄性红喉北蜂鸟，停栖在林缘细枝上并位于画面右侧，左侧保留宽阔柔和的林地背景',
    focalPoint: { x: 0.72, y: 0.48 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/ruby-throated-hummingbird/02-cardinal-flower-hover-feeding.webp',
        alt: '一只白喉、绿背且外侧尾羽带白端的雌性红喉北蜂鸟，在草甸林缘悬停并将细喙伸向一朵红色 cardinal flower',
        title: '在红花半边莲前悬停取食',
        caption: '管状花提供高能花蜜；这只雌鸟在花前悬停，双翼因快速运动而自然模糊。',
        focalPoint: { x: 0.57, y: 0.49 },
      },
      {
        image: './images/species/ruby-throated-hummingbird/03-aerial-insect-foraging.webp',
        alt: '一只白喉、绿背且外侧尾羽带白端的雌性红喉北蜂鸟在开阔落叶林间悬停，细喙前只有一只毫米级小飞虫',
        title: '花蜜之外的动物性食物',
        caption: '它们会在空中捕捉小型昆虫；画面只重建一次由细喙完成、无血的自然捕食瞬间。',
        focalPoint: { x: 0.56, y: 0.47 },
      },
      {
        image: './images/species/ruby-throated-hummingbird/04-gulf-crossing-migration.webp',
        alt: '黎明的墨西哥湾开放水面上，一只暗颏、喉部带少量红色虹彩的雄性红喉北蜂鸟展开双翼向前飞行，背景只有海面与海平线',
        title: '一种可能的跨湾路线',
        caption: '部分个体会跨越墨西哥湾，另一些沿湾岸迁徙；这幅开放水面重建只代表前一种可能路线。',
        focalPoint: { x: 0.58, y: 0.45 },
      },
      {
        image: './images/species/ruby-throated-hummingbird/05-female-nestling-care.webp',
        alt: '一只白喉雌性红喉北蜂鸟悬停在两只张嘴的中期雏鸟旁，地衣覆盖的微小杯巢直接筑在一根不分叉、向下倾斜的细枝顶面',
        title: '雌鸟独自照料巢中幼鸟',
        caption: '两只中期雏鸟仍留在同一个微小杯巢内；画面没有虚构看不见的食物或雄鸟协助。',
        focalPoint: { x: 0.61, y: 0.56 },
      },
      {
        image: './images/species/ruby-throated-hummingbird/06-native-garden-monitoring.webp',
        alt: '一只雌性红喉北蜂鸟在原生花园的红色 cardinal flower 与紫色 bee balm 间悬停取食，远处一名观察者用双筒望远镜观看并手持记录本',
        title: '保持距离的社区科学观察',
        caption: '原生花园提供连续花源；远处观察者只用望远镜和记录本监测，不接触、追逐或捕捉蜂鸟。',
        focalPoint: { x: 0.66, y: 0.52 },
      },
    ],
  },
  sources: RUBY_THROATED_HUMMINGBIRD_SOURCES,
  featured: true,
  publishedAt: RUBY_THROATED_HUMMINGBIRD_CONTENT_DATE,
  updatedAt: RUBY_THROATED_HUMMINGBIRD_CONTENT_DATE,
}
```

## 最终实施建议

- 采用 `id: 'species-archilochus-colubris'` 与 `slug: 'ruby-throated-hummingbird'`。
- 分类阶元采用 AviList/IOC 当前的 `Apodiformes / Trochilidae / Archilochus`。
- 采用 `conservation('LC', 'increasing', 2020)`，不传 criteria。
- 在正文保留 2015—2025 BBS 下降信号，但不要覆写 IUCN 结构化字段。
- 不设置 `distribution.center`，避免单点被误读为全年分布中心。
- 不填寿命、最高速度、成熟个体数、翼拍频率或心率等缺乏稳定口径的数值指标。
- `storySections` 保持**恰好 6 段**；`media` 保持 1 张封面加 5 张 gallery，共**恰好 6 图**。
- 最终图片已按实际主体位置记录 `focalPoint`；实现时继续核对尺寸、色彩空间、alpha、数量和解剖静态检查。
- 实现与验证全部完成后，只从 `docs/todo.md` 删除 `红喉北蜂鸟（Archilochus colubris）` 一行，使下一项成为绿海龟。
