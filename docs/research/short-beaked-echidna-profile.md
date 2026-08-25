# 针鼹（_Tachyglossus aculeatus_）完整物种档案研究

- 检索与核验日期：2026-08-25
- 使用范围：`src/data/species.ts` 的针鼹条目、详情页长文、数字卡、6 个故事段落和 6 张生成图像的内容验收
- 证据标准：分类、范围国和保护状态优先采用 Mammal Diversity Database（MDD）与 IUCN；法律地位采用澳大利亚联邦或州政府、CITES 和 CMS 原文；形态、繁殖、体温、挖掘与寿命数字采用同行评审研究。动物园科普、媒体稿和未标样本口径的常识数字不进入结构化字段。
- 物种边界：全文的“针鼹”指短吻针鼹 _**Tachyglossus aculeatus**_，不包括三种长吻针鼹属 _Zaglossus_。产品是种级页面；袋鼠岛针鼹 _T. a. multiaculeatus_ 的澳大利亚联邦 EN 地位不能覆盖整个物种。[MDD taxon 1000002](https://www.mammaldiversity.org/taxon/1000002/) [DCCEEW Kangaroo Island Echidna](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna)

## 编辑结论

1. 项目主名可沿用 TODO 的“针鼹”，英文名用“Short-beaked Echidna”，学名用 _Tachyglossus aculeatus_ (G. K. Shaw, 1792)。在名称说明中补“澳洲针鼹”和“短吻针鼹”；上海自然博物馆采用“澳洲针鼹”，这比单独的“针鼹”更能排除针鼹科或长吻针鼹。[MDD](https://www.mammaldiversity.org/taxon/1000002/) [上海自然博物馆](https://www.snhm.org.cn/cpjc/info.htm?eid=855)
2. 全球 IUCN 字段应为 **LC / stable / assessed 2015**。评估日期是 **2015-06-15**，DOI 在 2016-2 批次发布；`assessedYear` 必须填 2015。LC 没有 A 至 E 的受威胁判定标准，`criteria` 应省略。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41312A21964662.en)
3. MDD 暂认五个亚种，但明确指出全范围尚未经过现代整合分类修订。2026 年形态、生态、生理与遗传综合综述认为地域分化证据充分，同时指出线粒体支系不支持大多数传统命名边界，现行名称需要重审。产品可列传统名称和大致范围，不能从毛量、刺长或拍摄地点直接判定亚种。[MDD](https://www.mammaldiversity.org/taxon/1000002/) [Nicol 2026](https://doi.org/10.1071/AZ26020)
4. 原生范围国是澳大利亚、印度尼西亚和巴布亚新几内亚。澳大利亚大陆、塔斯马尼亚、袋鼠岛及其他近岸岛屿都属原生范围；没有权威来源支持一个已建立的域外引入种群。[MDD](https://www.mammaldiversity.org/taxon/1000002/)
5. 可落库的稳健指标是成体头体长 **30 至 45 厘米**、成体质量 **2 至 7 千克**、海拔 **0 至 1,800 米**。野外最高约 48 年和圈养确认至少 49 年 5 个月是记录级最大值，不是普通个体寿命区间，建议不填 `lifespanYears`。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) [DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna)
6. 图像必须同时保留短而近圆柱形的吻部、细小眼裂、无外露耳廓、低矮圆身、毛与奶油色角蛋白棘混生、粗壮短肢和显著掘土前爪。不得画成刺猬脸、豪猪长尾、穿山甲鳞片、鸭嘴、长吻针鼹，或让棘刺离体飞射。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) [NSW Environment](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/echidnas)

## 名称与分类

### 推荐名称字段

| 字段 | 推荐值 | 依据与边界 |
| --- | --- | --- |
| `names.zh` | `针鼹` | 沿用项目 TODO 的短名；首段必须说明这里专指 _T. aculeatus_，因为“针鼹”也可泛指针鼹科成员。 |
| 中文别名 | `澳洲针鼹`、`短吻针鼹` | 上海自然博物馆采用“澳洲针鼹”；“短吻针鼹”与英文标准名对应，也能和 _Zaglossus_ 区分。[上海自然博物馆](https://www.snhm.org.cn/cpjc/info.htm?eid=855) |
| `names.en` | `Short-beaked Echidna` | MDD 的标准英文名。[MDD](https://www.mammaldiversity.org/taxon/1000002/) |
| 英文别名 | `Australian Echidna`、`Short-nosed Echidna`、`Spiny Anteater`、`Bristly Echidna` | MDD 收录的英文俗名；`Spiny Anteater` 只作历史俗名，不应用来暗示与真正食蚁兽近缘。[MDD](https://www.mammaldiversity.org/taxon/1000002/) |
| `scientificName` | `Tachyglossus aculeatus` | 接受名与命名信息为 _Tachyglossus aculeatus_ (G. K. Shaw, 1792)，原始组合是 _Myrmecophaga aculeata_。[MDD](https://www.mammaldiversity.org/taxon/1000002/) |

“Kangaroo Island Echidna”只应用于袋鼠岛亚种 _T. a. multiaculeatus_，不能放进全物种的无条件英文别名轮播。页面也不宜用“原始哺乳动物”“活化石”或“哺乳动物与爬行动物之间的缺环”；这些词把现生单孔类误写成其他哺乳动物的祖先阶段。

### 完整分类

| 层级 | 拉丁名 | 中文名 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Mammalia | 哺乳纲 |
| 亚纲 | Prototheria | 原兽亚纲 |
| 下纲 | Australosphenida | 澳兽下纲 |
| 目 | Monotremata | 单孔目 |
| 科 | Tachyglossidae | 针鼹科 |
| 属 | _Tachyglossus_ | 针鼹属 |
| 种 | _Tachyglossus aculeatus_ | 针鼹、澳洲针鼹 |

MDD 直接列出亚纲、下纲、目、科和属；中文链“脊索动物门、哺乳纲、单孔目、针鼹科、针鼹属”由上海自然博物馆交叉核对。[MDD](https://www.mammaldiversity.org/taxon/1000002/) [上海自然博物馆](https://www.snhm.org.cn/cpjc/info.htm?eid=855)

### 五个传统亚种及证据边界

MDD 暂认以下五个亚种，等待现代修订：

| 亚种 | 传统地理口径 | 可写与不可写 |
| --- | --- | --- |
| _T. a. aculeatus_ | 澳大利亚东南部和南部大陆的指名亚种 | 可作传统范围标签；不可把所有大陆个体默认归入指名亚种。 |
| _T. a. acanthion_ | 西澳大利亚、北领地及澳大利亚干旱内陆的传统类型 | 干旱区个体常显得刺较长、毛较少，但外形不是可靠遗传鉴定。 |
| _T. a. lawesii_ | 新几内亚种群 | 新几内亚是全种原生范围；不能把它误写成域外引入。 |
| _T. a. multiaculeatus_ | 袋鼠岛 | 澳大利亚 EPBC 下列为 EN；该法律地位只适用于这个亚种。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) |
| _T. a. setosus_ | 塔斯马尼亚及部分巴斯海峡岛屿的传统类型 | 常见毛密、棘较短的描述可用于地域变异故事，不能据单张图确认亚种。 |

MDD 明言这五个名称建立在形态变异上，而全种尚未用现代方法修订；跨范围线粒体数据呈多个分化支系，但支系不等于已经发表的新种。[MDD](https://www.mammaldiversity.org/taxon/1000002/) [Summerell et al. 2019](https://doi.org/10.1016/j.forsciint.2018.11.019) 2026 年对既有线粒体数据的复核没有支持大多数传统亚种，只对塔斯马尼亚 _setosus_ 提供部分支持；线粒体单一遗传标记也不足以单独重划物种。[Nicol 2026](https://doi.org/10.1071/AZ26020)

产品应把亚种处理为“现行暂认、边界待修订”，不要写“全种已确定分成五个遗传亚种”，也不要把亚种的形态均值当成全种固定特征。

## IUCN 状态、趋势与评估年份

推荐字段：

```ts
conservation: conservation('LC', 'stable', 2015);
```

IUCN 评估记录 ID 为 `e.T41312A21964662`，状态为无危 `LC`，种群趋势为稳定。评估日期是 **2015-06-15**；2016 是 DOI 所属 Red List 发布批次，不是评估发生年。[IUCN 2016-2 assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41312A21964662.en) MDD 当前仍显示 LC，未见更晚的全种替代评估。[MDD](https://www.mammaldiversity.org/taxon/1000002/)

LC 记录不需要 A、B、C、D 或 E 的受威胁标准。不要填 `criteria: 'A...'`，也不要把袋鼠岛亚种的澳大利亚 EN 标准移到全球物种字段。IUCN 评估没有给出可直接落库的全球成熟个体精确数，`estimatedMatureIndividuals` 应留空。

“stable”是全范围评估趋势，不代表每个岛屿或地方种群稳定。袋鼠岛亚种的联邦 EN、2019 至 2020 年火灾影响、道路死亡和猫捕食都应在地方保护段单列。[DCCEEW Kangaroo Island Echidna](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) [DCCEEW fire recovery](https://www.dcceew.gov.au/environment/biodiversity/bushfire-recovery/regional-delivery-program/kangaroo-island)

## 原生分布、引入边界与海拔

### 范围国与岛屿

MDD 接受的原生范围国是：

- **澳大利亚**：大陆各州和领地、塔斯马尼亚、Groote Eylandt，以及 Bigge、Mua、Dunk、Magnetic、K'gari/Fraser、North Stradbroke/Minjerribah、King、Flinders、Kangaroo 等岛屿。
- **巴布亚新几内亚**：新几内亚东部、东南部沿海和高地区域，包括 Markham Valley、中央和南部地区。
- **印度尼西亚**：新几内亚岛东南部 Papua Province。

这些范围均由 MDD 作为自然分布列出。[MDD](https://www.mammaldiversity.org/taxon/1000002/) 新几内亚不是只有长吻针鼹，短吻针鼹也原生分布于该岛部分地区。袋鼠岛和塔斯马尼亚也不是人类引入地。

截至本次核验，MDD、IUCN 与澳大利亚政府材料没有承认域外已建立的引入种群。因此可将 `introducedRegions` 留空。海外动物园饲养和个体出口不能算野外引入；“澳大利亚特有种”也不准确，因为自然范围延伸到印度尼西亚和巴布亚新几内亚。

### 海拔与地图口径

物种专论记录其从海平面到科修斯科山约 **1,800 米**，新几内亚中部高地记录到约 1,600 米。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 因此可填：

```ts
elevationM: [0, 1800]
```

纬度跨度约 1°S 至 43°S，地图中心只能作为视窗，不能用一个连续面覆盖澳大利亚全部国土和整个新几内亚。高山雪线以上活动是区域性能力，不代表高山是全种主要生境。

## 生境

短吻针鼹利用的陆生环境跨度很大，限制条件通常是能找到蚁类、白蚁及其他无脊椎猎物，并有土壤、倒木、岩缝、树洞或植被遮蔽。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 可整理为三组：

1. **森林与疏林，primary**：热带雨林、温带森林、桉树林、林缘、倒木和枯落物丰富的疏林。这里提供觅食基质、休息隐蔽处和育幼洞穴。[NSW Environment](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/echidnas)
2. **灌丛、草地、干旱地与高山地带，primary**：mallee、灌丛、草地、荒漠和雪线附近均有记录。耐受跨度不等于各地种群使用同一种日节律。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012)
3. **农地、道路边缘与外缘城市镶嵌，non-primary**：动物可穿行农田、牧场、花园和路旁，但道路、犬类、清除倒木和栖息地碎片化会增加风险。使用人类景观不等于人工环境可以替代完整生境。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna)

`realm` 应为 `terrestrial`。短吻针鼹能涉水或游泳不构成淡水生态类群，也不应据此增加 `freshwater`。

## 形态、雌雄体型与图像识别

### 组合式识别特征

- 身体低矮、圆厚，颈部不明显，头小而呈楔形。
- 吻部约 7 至 8 厘米，近圆柱或轻微锥形，表面少毛；鼻孔靠近吻端，口裂很小，位于吻端腹侧。
- 眼睛很小，没有显著外露耳廓。成年个体没有牙齿，口腔以角质垫处理食物。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012)
- 背面和体侧有奶油、淡黄至黄褐色角蛋白棘，与棕黑色毛混生。棘是特化毛，不是豪猪式可射出的“箭”。南方个体常见毛更密，但地域变化连续。
- 四肢短而粗壮。前足有扁平、强大的掘土爪；后足方向向后和向外，部分趾爪用于梳理棘间皮毛。尾巴短而钝，不应突出成豪猪长尾。

### 可辩护的测量

澳大利亚政府资料给出成体长约 **30 至 45 厘米**；物种专论综合成体质量约 **2 至 7 千克**，记录中最大成熟雌性约 6.95 千克。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) [Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 这支持：

```ts
metrics: {
  adultLengthCm: [30, 45],
  adultMassKg: [2, 7],
  elevationM: [0, 1800],
}
```

这些是跨地域宽区间。不要把 6.95 千克单独向上取整后称为“普通雌性体重”，也不要把幼体和未完全成熟个体混入成体下限。

### 性别边界

全种没有稳定、醒目的外部性二型，野外通常不能只看体型、脸或棘长判断性别。袋鼠岛长期研究发现雌性在性成熟时可比雄性更重，但这是特定亚种和样地结果，不能写成“雄性一定更大”或“雌性一定更大”。[Rismiller and McKelvey 2003](https://doi.org/10.1016/S1095-6433(03)00225-3)

雄性后踝可有角质距，但它不注毒，形态还会随年龄变化，不能当作所有成年雄性的可靠图像标记。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 生成图如无研究情境，不应强行露出踝距或标性别。

## 食性与觅食

短吻针鼹主要取食蚁类和白蚁，也吃金龟子幼虫、成虫、蛾类幼虫及其他土壤无脊椎动物；蚯蚓可偶见，但不是像长吻针鼹那样的代表性专食。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 西澳一个能量收支研究中白蚁是主要能量来源，结果随季节与栖息地变化，不能改写成全种“只吃白蚁”。[Abensperg-Traun and De Boer 1992](https://doi.org/10.1111/j.1469-7998.1992.tb03837.x)

它用吻部探查土壤、腐木和蚁巢，以强壮前爪掘开基质，再用细长、黏性的舌获取猎物。成体无牙，以舌和角质垫共同处理食物。画面可以出现舌尖或短距离伸舌，不能把舌画成变色龙式弹射器，也不能添加牙齿。

推荐食性字段：

```ts
diet: {
  types: ['insectivore'],
  foods: ['蚁类', '白蚁', '甲虫与其幼虫', '蛾类幼虫', '其他土壤无脊椎动物'],
  description:
    '以蚁类和白蚁为主，随地区与季节取食甲虫幼虫等无脊椎动物；用强壮前爪掘开巢穴，再以细长黏舌和口腔角质垫获取、处理猎物。',
}
```

## 活动节律、体温与休眠

短吻针鼹不是固定夜行。日活动时间随环境温度和季节调整：炎热天气更常避开白昼高温，在凉爽时段或夜间活动；凉季、温带和高纬地点可在白天活动。[Clemente et al. 2016](https://doi.org/10.1242/jeb.143867) 页面活动标签宜写“昼夜均可，随温度和季节改变”，不写“严格夜行性”。

活动期体温通常约 **31 至 33°C**，低于多数有胎盘哺乳动物，且波动较大。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 这支持数字卡“活动期体温 31–33°C”，卡下注明是活动状态范围，不是恒定设定点或全年的体温。

寒冷地区个体可进入日常蛰伏或较长冬眠，但持续时间和深度受纬度、亚种、繁殖状态与天气影响。塔斯马尼亚 14 只自由活动个体的研究记录冬眠偏好的体温约 **8 至 10°C**，这是一个地点和样本的冬眠值，不应覆盖热带新几内亚或全年活动体温。[Nicol and Andersen 2007](https://doi.org/10.1242/jeb.02701)

西昆士兰夏季野外研究发现，个体可在 35 至 40°C 的庇护环境中停留最长约 10 小时，同时体温低于环境温度；这是庇护所使用和生理耐受观察，不是全种“40°C 安全阈值”。[Brice et al. 2002](https://doi.org/10.1016/S0306-4565(02)00015-3) 2023 年热成像研究显示吻端湿润表面可通过蒸发形成热窗口，因此也不要沿用“针鼹完全没有蒸发冷却”的旧说法。[Cooper et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9845966/)

## 挖掘、生态工程与防御

### 挖掘不是只为吃饭

短吻针鼹用前肢挖取猎物、开辟避难处、进入土中防御，也会利用现成洞穴、树洞、岩缝和倒木。运动记录研究中，动物约 **12%** 的观察时间用于挖掘；作者据此外推每只每年最多可翻动约 **204 立方米**土壤。[Clemente et al. 2016](https://doi.org/10.1242/jeb.143867) 204 立方米是特定样地、活动预算和模型下的潜在外推，不是每只针鼹的保证年产量。

塔斯马尼亚温带林研究在完整林地记录约 5,812 个现存掘坑/公顷，并估计哺乳动物群落每年新增约 3,113 个/公顷、扰动约 6.5% 林地表面、搬移约 7.1 立方米土/公顷。多数掘坑来自东部袋狸和短吻针鼹的共同作用，不能把这些群落总量全部算给针鼹。[Davies et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6366199/) 掘坑可拦截枯落物和水分，形成肥力、湿度和硬度不同的小斑块；生态效应受土壤和气候控制，不应写成所有掘坑都提高整片森林生产力。

### 三种典型防御动作

在软土上，针鼹可快速垂直下挖，让棘背和土面贴合；在岩石或倒木附近，它会把身体楔入缝隙；无处可挖时可蜷紧身体并竖起棘刺。[NSW Environment](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/echidnas) 它不会把棘射出，也不是完全没有天敌。幼体及部分成体仍可被野猫捕食，犬类、车辆和野火也能造成死亡。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna)

## 繁殖与育幼

### 从交配到产卵

短吻针鼹属单孔类。雌雄的消化、泌尿和生殖通道汇入一个泄殖腔开口；这解释了“单孔”名称，但不能简化成所有内部器官只有一条管道。[Griffiths 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11684381/)

繁殖期雌性腹部的皮肤和肌肉褶皱形成临时育儿袋，它不是袋鼠那样全年明显的固定袋。近距离圈养监测显示，从交配到产卵约 **16 至 17 天**；其他野外种群和受蛰伏影响的研究给出约 20 至 23 天，因此跨种群文案用“约 2 至 3 周”最稳健。[Dutton-Regester et al. 2021](https://doi.org/10.1530/REP-21-0110) [Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012)

雌性通常产一枚小而具柔韧外壳的卵，经生殖道和泄殖腔进入临时育儿袋。转移卵的具体动作不应被编成“用吻把卵放入袋中”。偶见多卵或双幼体报道不足以把常规画面改成一窝多只。[Griffiths 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11684381/)

### 孵化、袋内期与洞穴育幼

卵在袋内孵化约 **10 至 11 天**。孵化幼体约 0.3 至 0.4 克、约 1.5 厘米，裸露、闭眼，仍处于高度未成熟状态。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) 这里必须区分：约 2 至 3 周是体内妊娠/留卵阶段，10 至 11 天是产卵后的袋内孵化，两者不能相加后都称“孕期”。

幼体留在临时育儿袋约 **45 至 55 天**，棘开始长出后被安置在封堵的育幼洞穴。母兽会离开觅食，再按间隔返回；袋鼠岛研究中回访常相隔约 5 至 6 天，不能写成每天守在洞中。[Rismiller and McKelvey 2003](https://doi.org/10.1016/S1095-6433(03)00225-3)

乳汁从腹部成对的乳区经皮肤孔隙渗出，幼体贴近乳区舔吸。图文应使用“乳区”“乳汁孔隙”或“哺乳斑”，不要画突出的哺乳器官。断乳时间随地区而变：2026 年综合表列塔斯马尼亚约 130 至 163 天、昆士兰东南部约 150 至 165 天、西澳约 195 至 200 天、袋鼠岛约 204 至 210 天，因此全范围适合概括为 **约 130 至 210 天**，不能写成固定 200 天。[Rismiller and McKelvey 2003](https://doi.org/10.1016/S1095-6433(03)00225-3) [Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) [Nicol 2026](https://doi.org/10.1071/AZ26020)

“puggle”是英语非正式幼体称呼，可在轻量文案中括注“幼针鼹”，不能替代生物学阶段名。生成图禁止出现户外裸露的新孵幼体、多枚白色硬壳鸟卵、永久外翻育儿袋，或母兽把幼体从身体内直接“生出”的场景。

## 寿命与数值边界

澳大利亚政府称袋鼠岛针鼹在野外可活到 **48 年**。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) 物种专论记录费城动物园一只个体在入园后存活至少 **49 年 5 个月**；另一只名为 Victor 的个体被估计超过 56 岁，但入园时已经成年，起始年龄不确定，所以 56 不是同等强度的确认记录。[Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012)

能量代谢与寿命比较研究也采用“圈养约 50 年、野外约 48 年”的最大记录口径。[Hulbert et al. 2008](https://doi.org/10.1016/j.exger.2008.09.006) 塔斯马尼亚 19 年标记重捕模型在有利年份组合下估计平均寿命约 16.7 年，炎热、干旱年份组合显著更低；它是单一地点的模型结果，不能当全球平均。[Lunn et al. 2022](https://doi.org/10.1071/ZO21037)

因此：

- 不填 `metrics.lifespanYears`，除非 schema 明确允许“记录最大寿命”而非典型范围。
- 可用 featured stat：“野外记录最高约 48 年”；卡下注明这是最大记录，不是平均寿命。
- 不写“针鼹通常活 50 年”或“寿命为 48 至 56 年”。

## 威胁、保护行动与法规边界

### 物种尺度与地方尺度

全球全种仍为 LC/stable，但地方风险包括道路碰撞、栖息地清除和碎片化、倒木与遮蔽物移除、剧烈野火、犬类攻击、野猫和狐狸捕食、野猪干扰，以及新几内亚部分地区的捕猎和非法贸易。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41312A21964662.en) [Summerell et al. 2019](https://doi.org/10.1016/j.forsciint.2018.11.019) 农药可能通过减少无脊椎猎物或直接暴露造成风险，但证据不支持一个全范围统一死亡比例。

袋鼠岛亚种 _T. a. multiaculeatus_ 在澳大利亚联邦 EPBC 下为 **Endangered**。联邦页面列出重点威胁：野猫捕食幼体及部分成体、农业清地造成的生境丧失和碎片化、道路死亡；行动包括全岛猫控制及 Dudley Peninsula 根除、恢复生境走廊、道路减速和公众提醒。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna)

2019 至 2020 年山火烧过袋鼠岛约 38% 面积，其中受烧区域约 83% 为高至极高烈度。政府把袋鼠岛针鼹列入受影响动物名录；这一事件适合说明局地灾害压力，不能据此声称整个物种全球下降。[DCCEEW fire recovery](https://www.dcceew.gov.au/environment/biodiversity/bushfire-recovery/regional-delivery-program/kangaroo-island)

EchidnaCSI 公民科学项目在前三年获得超过 8,000 条目击和 400 份粪样，展示了难以系统普查的广布种如何借助照片、时间地点和遗传样本补足监测。[Griffiths et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC8812570/) 产品可以把“记录而不触碰、道路安全上报、保留倒木和地表遮蔽”作为行动建议，不建议搬运健康个体、带回饲养或主动投喂。

### 澳大利亚法规边界

| 制度 | 状态 | 准确写法 |
| --- | --- | --- |
| 联邦 EPBC 受威胁物种名录 | 全种 _T. aculeatus_ 不以受威胁种列名；袋鼠岛亚种 _T. a. multiaculeatus_ 为 EN | 写“全种全球 LC，袋鼠岛亚种在澳大利亚联邦列为 EN”。不要写“针鼹在澳大利亚全国都是 EN”。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) |
| EPBC 野生动物贸易 | 澳大利亚原生活体和标本的海外转移受许可、非损害和动物福利条件管理 | 出口受管制不等于列入 EPBC 受威胁名录，也不等于所有跨境转移绝对禁止。[DCCEEW overseas transfer consultation](https://consult.dcceew.gov.au/draft-conditions-for-the-overseas-transfer-of-short-beaked-echidna) |
| 州及领地野生动物法 | 各辖区分别保护和许可；例如 NSW《Biodiversity Conservation Act 2016》保护原生哺乳动物，依法许可的救护、研究等另有程序 | 不概括成一个不存在的“澳大利亚国家一级保护动物”等级，也不自行处理或迁移个体。[NSW protected species](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/protected-species) |

### CITES 与 CMS

现行 CITES 附录列出的是长吻针鼹属 **_Zaglossus_ spp.** 附录 II，不是 _Tachyglossus aculeatus_。短吻针鼹截至 2026-03-05 **不在 CITES 附录**；澳大利亚本国出口许可仍可独立适用。[CITES Appendices effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

CMS 当前物种名录中没有 _Tachyglossus aculeatus_ 条目，即未列 CMS 附录 I 或 II。[CMS species database](https://www.cms.int/species) “未列 CITES/CMS”不能改写成“完全不受法律保护”或“可以自由贸易”。

## 可录入的 metrics 与 featuredStats

### 稳健结构化值

```ts
metrics: {
  adultLengthCm: [30, 45],
  adultMassKg: [2, 7],
  elevationM: [0, 1800],
}
```

不建议填写：

- `lifespanYears`：48 至 50 年是最大记录，不是普通范围。
- `estimatedMatureIndividuals`：现行 IUCN 没有稳健的全球成熟个体数。
- `topSpeedKph`：没有适合跨地点排序的野外最高速度原始测量。
- 单一雌雄体型倍率：性二型不稳定，袋鼠岛结论不能全种化。

### featuredStats 候选

| 标签 | 值 | 限定语 | 来源 |
| --- | --- | --- | --- |
| 活动期体温 | 31–33°C | 活动状态的常见范围，个体会异温，冬眠时可更低 | [Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) |
| 卵袋内孵化 | 10–11 天 | 产卵后的孵化期，不是整个妊娠期 | [Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) |
| 袋内育幼 | 45–55 天 | 棘开始长出后转入育幼洞穴 | [Rismiller and McKelvey 2003](https://doi.org/10.1016/S1095-6433(03)00225-3) |
| 断乳 | 130–210 天 | 地域差异大，适合区间而非固定天数 | [Nicol 2026](https://doi.org/10.1071/AZ26020) |
| 潜在翻土量 | 最高约 204 m³/年 | 单项研究按活动预算外推，不是保证量 | [Clemente et al. 2016](https://doi.org/10.1242/jeb.143867) |
| 最大寿命记录 | 野外约 48 年 | 最大记录，不代表期望寿命 | [DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) |

页面若只容纳四张卡，优先选“31–33°C 活动期体温”“10–11 天袋内孵化”“最高约 204 m³/年潜在翻土量”“野外最高约 48 年”。四张卡分别覆盖生理、繁殖、生态作用和生命史，且不会重复基础身长、体重指标。

## 六个故事角度

### 01 与鸭嘴兽同属单孔目，却走向陆地掘食

针鼹和鸭嘴兽同属现生单孔类，但短吻针鼹以低矮有棘的身体、粗壮前肢和短吻适应陆地掘食。它不是“更原始的哺乳动物”，而是有自身演化历史的现生支系。[MDD](https://www.mammaldiversity.org/taxon/1000002/)

### 02 没有牙齿的地下猎手

吻端探查、前爪开巢、黏舌取食、角质垫处理食物构成完整觅食链。蚁和白蚁是主食，但甲虫幼虫等会随地点和季节进入菜单。[Abensperg-Traun and De Boer 1992](https://doi.org/10.1111/j.1469-7998.1992.tb03837.x)

### 03 会调整时钟和体温

它在热天避开白昼，在凉季可白天活动；活动期体温约 31 至 33°C，寒区种群还能进入蛰伏或冬眠。故事重点是生理和行为可塑性，不给全种贴固定夜行或固定冬眠标签。[Clemente et al. 2016](https://doi.org/10.1242/jeb.143867) [Nicol and Andersen 2007](https://doi.org/10.1242/jeb.02701)

### 04 一枚卵，临时育儿袋，漫长洞穴育幼

交配后约 2 至 3 周产下一枚柔韧外壳卵，袋内约 10 至 11 天孵化；幼体约 45 至 55 天后转入育幼洞穴，整个哺育阶段跨地域约延续 130 至 210 天。故事必须把体内阶段、卵孵化、袋内期和洞穴期分开。[Dutton-Regester et al. 2021](https://doi.org/10.1530/REP-21-0110) [Rismiller and McKelvey 2003](https://doi.org/10.1016/S1095-6433(03)00225-3) [Nicol 2026](https://doi.org/10.1071/AZ26020)

### 05 前爪塑造微地形

觅食坑不仅留下翻土痕迹，还能拦截枯落物和水分，改变局部土壤斑块。204 立方米/年适合做带方法注释的潜力数字，群落每公顷的总掘坑量不能全归针鼹。[Clemente et al. 2016](https://doi.org/10.1242/jeb.143867) [Davies et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6366199/)

### 06 全球 LC 之下的袋鼠岛危机

全种 IUCN LC/stable 与袋鼠岛亚种 EPBC EN 可以同时成立。野猫、道路、碎片化和高烈度野火要求地方化管理；公民科学记录和粪样可帮助填补广布、隐蔽动物的监测空白。[DCCEEW](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) [Griffiths et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC8812570/)

## 六张图像场景与逐图验收

| 图号 | 场景与构图 | 必须出现 | 禁止与风险 |
| --- | --- | --- | --- |
| 01 封面 | 温带疏林边缘的成年短吻针鼹，低机位三分之二侧面，枯落物和倒木作尺度 | 短圆柱吻、小眼、无耳廓、低圆身、毛棘混生、四只短肢至少露出前爪 | 不画刺猬尖脸、豪猪长尾、穿山甲鳞片；不凭密毛标成塔斯马尼亚亚种 |
| 02 觅食 | 个体掘开腐木或白蚁通道，前足抓地，吻端贴近破口 | 扁阔强前爪、自然土屑、少量蚁或白蚁，舌只短距离可见 | 不添加牙齿，不画巨型彩色长舌，不让昆虫形成惊悚洪流 |
| 03 生境 | 广角温带桉树林—石南灌丛镶嵌中只出现一只小比例针鼹 | 生境占视觉注意至少 85%，倒木、草地、岩隙和连续地表庇护可读 | 只代表一种温带澳洲组合，不冒充全范围或具体地点记录 |
| 04 防御掘入 | 软土上处于早期垂直下挖，棘背仍在地面上方，前爪正向下刨土 | 土壤被前肢向侧后方推出，身体轴线和浅坑合理，棘仍连在皮肤上 | 不射棘，不蜷成规则刺球，不添加捕食者、伤口或确定触发原因 |
| 05 求偶列队 | 凉季桉树林地四只成体保持间距，沿同一方向松散单列 | 恰好四个互不重叠的完整身体；一雌三雄是行为情境而非外形诊断 | 不画第五只、幼体、交配、打斗或夸张性二型；不把列队写成全种固定仪式 |
| 06 育幼洞外迹象 | 一只成体离开林下被新土和枯叶部分回填的隐蔽洞口 | 只见一只成体、一个小洞口和扰动土，洞内不可见 | 不画卵、幼体、育儿袋、乳区、剖面或精确地点；图像不能证明性别或洞内有幼体 |

### 全套严格形态 QA

每张含动物的图在入库前逐项检查：

1. 物种是 _Tachyglossus aculeatus_，不是 _Zaglossus_、刺猬、豪猪或穿山甲。
2. 吻部短、近圆柱形，约占头部有限比例；不能细长下弯到接近长吻针鼹。
3. 口裂细小，吻端附近无可见牙齿；鼻孔靠近吻端。
4. 眼睛小，无突出耳廓。若画出兔耳、鼠耳或刺猬耳，整图不合格。
5. 棘为奶油至淡黄角蛋白棘，与棕黑毛混生；不是透明刺、鱼鳞、金属甲片或离体飞刺。
6. 身体低、圆、结实，颈部不明显；尾短钝，不能出现豪猪式长尾。
7. 前肢短粗，前爪宽大且适合挖掘。觅食和防御图必须让前爪与土壤作用关系可读。
8. 后足朝向可以略向后和向外，但关节不能反折成鸟腿；趾数和爪形不得在左右肢间漂移。
9. 不用体型或踝距替画面个体强行标性别；如故事必须标性别，应由上下文而非外观承担。
10. 任何卵或幼体画面只出现一个常规后代；卵小、外壳柔韧，不画成大型白色硬壳鸟卵。
11. 新孵幼体不在开放地表展示。洞口幼体必须已进入后期洞穴育幼阶段，出现毛和初生棘。
12. 地域毛量只作连续变异，不凭“毛多/刺长”给生成图写亚种标签。

## 不可写入的常见误区

- “IUCN 2016 年评估”：错误。评估发生于 2015-06-15，2016-2 是发布批次。
- “IUCN LC，标准 A/B/C/D/E”：错误。LC 没有受威胁判定标准，`criteria` 留空。
- “针鼹只分布于澳大利亚”或“澳大利亚特有”：错误。原生范围还包括印度尼西亚和巴布亚新几内亚。
- “袋鼠岛和塔斯马尼亚种群由人类引入”：没有权威依据，均按原生范围处理。
- “五个亚种已有完整基因组确认”：错误。MDD 暂认五个传统亚种，并明确等待现代修订。
- “全种在澳大利亚列为 EN”：错误。联邦 EN 只针对袋鼠岛亚种；全种全球 IUCN 为 LC。
- “短吻针鼹列 CITES 附录 II”：错误。附录 II 列的是 _Zaglossus_ spp.。
- “未列 CITES，所以不受出口或州法管理”：错误。澳大利亚本国野生动物贸易和州法独立适用。
- “它是有刺的食蚁兽/刺猬，或哺乳动物的原始缺环”：俗名和趋同外形不等于近缘，也不代表祖先阶段。
- “只吃蚂蚁”或“以蚯蚓为主”：食谱随地点和季节变化，白蚁、甲虫幼虫等也是重要食物；蚯蚓专食更接近长吻针鼹叙事。
- “严格夜行、所有种群都冬眠”：活动节律和休眠随气温、纬度、繁殖与地点变化。
- “正常体温恒定 32°C”：31 至 33°C 是活动期常见范围，针鼹会异温，冬眠时显著降低。
- “每只每年翻土 204 立方米”：这是单项研究的潜在外推，必须保留“最高约”和研究口径。
- “棘刺可以射出”或“成年后没有天敌”：错误。防御依靠竖棘、蜷缩、楔入和下挖；猫、犬、车辆、火等仍可致死。
- “一胎多枚蛋/多只幼体是常态”：通常一枚卵、一个幼体。
- “妊娠只有 10 天”：10 至 11 天是产卵后的袋内孵化，交配至产卵另约 2 至 3 周。
- “永久育儿袋，像袋鼠一样”：育儿袋只在繁殖阶段形成。
- “幼体从母体直接活产”或“户外照料裸露新孵幼体”：错误。它先产卵，孵化发生在临时育儿袋中，后期幼体留在封堵的育幼洞穴。
- “针鼹通常活 50 年”：48 至约 50 年是最大记录，不能代表平均或常见寿命。

## 来源清单与用途

| 来源 | 类型 | 本文用途 |
| --- | --- | --- |
| [Mammal Diversity Database, taxon 1000002](https://www.mammaldiversity.org/taxon/1000002/) | 当前分类数据库 | 接受名、命名者、英文名、完整高阶分类、五亚种、范围国和岛屿、LC |
| [IUCN Red List e.T41312A21964662](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41312A21964662.en) | 全球权威评估 | LC、stable、2015-06-15 评估日期、全范围威胁边界 |
| [上海自然博物馆：澳洲针鼹](https://www.snhm.org.cn/cpjc/info.htm?eid=855) | 中国公共自然史机构 | 中文标准名和中文分类链 |
| [Rismiller and Grutzner 2019](https://doi.org/10.1093/mspecies/sez012) | 同行评审物种专论 | 形态、范围、海拔、体温、食性、繁殖、亚种和寿命记录 |
| [Nicol 2026](https://doi.org/10.1071/AZ26020) | 同行评审分类综述 | 传统亚种与线粒体支系不一致的当前边界 |
| [Summerell et al. 2019](https://doi.org/10.1016/j.forsciint.2018.11.019) | 同行评审原始遗传研究 | 地理支系、非法贸易来源判定及其局限 |
| [NSW Environment: Echidnas](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/echidnas) | 州政府 | 生境、掘食和蜷缩/楔入/下挖防御 |
| [DCCEEW: Kangaroo Island Echidna](https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna) | 澳大利亚联邦政府 | 亚种 EN、身长、野外最大寿命、威胁与行动 |
| [DCCEEW: Kangaroo Island fire recovery](https://www.dcceew.gov.au/environment/biodiversity/bushfire-recovery/regional-delivery-program/kangaroo-island) | 澳大利亚联邦政府 | 2019 至 2020 火灾面积和烈度 |
| [DCCEEW: overseas transfer consultation](https://consult.dcceew.gov.au/draft-conditions-for-the-overseas-transfer-of-short-beaked-echidna) | 澳大利亚联邦政府 | EPBC 野生动物出口许可与福利边界 |
| [NSW protected species](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/protected-species) | 州政府 | 原生哺乳动物的州级保护和许可边界 |
| [CITES Appendices, effective 2026-03-05](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | 国际公约原文 | _Zaglossus_ 附录 II，_Tachyglossus_ 未列 |
| [CMS species database](https://www.cms.int/species) | 国际公约原始名录 | 无 _T. aculeatus_ 条目 |
| [Abensperg-Traun and De Boer 1992](https://doi.org/10.1111/j.1469-7998.1992.tb03837.x) | 同行评审原始研究 | 西澳食谱、白蚁能量贡献和地点限制 |
| [Clemente et al. 2016](https://doi.org/10.1242/jeb.143867) | 同行评审原始研究 | 温度与活动、挖掘时间、204 m³/年潜在外推 |
| [Nicol and Andersen 2007](https://doi.org/10.1242/jeb.02701) | 同行评审原始研究 | 塔斯马尼亚自由活动个体冬眠体温 |
| [Brice et al. 2002](https://doi.org/10.1016/S0306-4565(02)00015-3) | 同行评审原始研究 | 西昆士兰热环境、庇护与体温 |
| [Cooper et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9845966/) | 同行评审原始研究 | 吻端蒸发热窗口 |
| [Davies et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6366199/) | 同行评审原始研究 | 掘坑群落数量、翻土和土壤微斑块作用 |
| [Dutton-Regester et al. 2021](https://doi.org/10.1530/REP-21-0110) | 同行评审原始研究 | 圈养妊娠、产卵和临时育儿袋变化 |
| [Griffiths 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11684381/) | 同行评审解剖观察 | 雌性泄殖腔、生殖道、产卵和育儿袋形态 |
| [Rismiller and McKelvey 2003](https://doi.org/10.1016/S1095-6433(03)00225-3) | 同行评审长期野外研究 | 雌雄质量、袋内期、育幼洞穴、断乳 |
| [Hulbert et al. 2008](https://doi.org/10.1016/j.exger.2008.09.006) | 同行评审比较研究 | 48 年野外和约 50 年圈养最大记录口径 |
| [Lunn et al. 2022](https://doi.org/10.1071/ZO21037) | 同行评审长期标记重捕 | 地方平均寿命模型与热旱年份差异 |
| [Griffiths et al. 2022, EchidnaCSI](https://pmc.ncbi.nlm.nih.gov/articles/PMC8812570/) | 同行评审公民科学研究 | 目击、粪样和参与式监测规模 |
