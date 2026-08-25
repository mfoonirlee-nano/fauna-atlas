# 川金丝猴（*Rhinopithecus roxellana*）完整档案研究

- 检索与核验日期：2026-08-25
- 使用范围：为 `src/data/species.ts` 新增川金丝猴档案、制作 1 张封面与 5 张 gallery 图、补充分类测试并最终收尾 `docs/todo.md`
- 证据标准：IUCN 正式物种评估、Mammal Diversity Database、ITIS、中国政府名录与保护资料、动物园官方形态资料，以及原始同行评审论文。不同年份、不同空间尺度和不同统计口径的数字分开保存。
- 本文只提供研究与集成方案，不编辑代码、测试、素材或 TODO。

## 结论摘要

### 主记录保持物种级 *Rhinopithecus roxellana*

美国哺乳动物学会 Mammal Diversity Database（MDD）当前接受 **`Rhinopithecus roxellana (A. Milne-Edwards, 1870)`**，英文主名为 “Golden Snub-nosed Monkey”，上级分类为 `Primates / Cercopithecidae / Rhinopithecus`。模式产地在四川宝兴附近，原始组合为 *Semnopithecus Roxellana*。仓库 schema 不保存命名作者、亚科或族，因此生产路径固定为动物界、脊索动物门、哺乳纲、灵长目、猴科、仰鼻猴属。[MDD](https://www.mammaldiversity.org/taxon/1000685/)

中文主名采用国家重点保护野生动物名录和中国动物学会灵长类学分会使用的“**川金丝猴**”，英文主名采用 MDD 的 “**Golden Snub-nosed Monkey**”。“四川金丝猴”和 “Sichuan Snub-nosed Monkey”可放入 `names.aliases`；不把“金丝猴”单独作为别名，因为这个中文集合名还覆盖滇金丝猴、黔金丝猴等仰鼻猴；不把 “Golden Monkey”单独加入，因为它也常指另一物种 *Cercopithecus kandti*。[国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf) [中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm)

### 三亚种处理存在数据库差异

ITIS 与中国动物学会灵长类学分会接受指名、秦岭和湖北三个亚种；MDD 当前物种记录则把相关种下组合收在同一物种的异名记录中。三个地理种群在遗传结构上明确分化，但不同分子标记给出的内部谱系关系也不完全相同。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=944261) [中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm) [Kuang et al. 2019](https://doi.org/10.1093/molbev/msy220)

当前 `Species` 类型没有亚种字段。生产记录只写物种级学名，并把四川和甘肃、秦岭、神农架写成三个隔离的**地理种群**。不要在 `taxonomy`、`aliases`、统计卡或图像 caption 中裁定亚种数量，也不要凭毛色和背景给 AI 图鉴定亚种。

### IUCN 四字段必须按正式全球评估填写

截至 2026-08-25，IUCN 当前物种页仍指向 2021 年发布的修订版评估，正式值是 **濒危 EN、A2cd+4cd、种群趋势下降**。物种页的评估完成日期为 **2015-12-22**；2021 是修订版的发布年，不是 `assessedYear`。建议直接写：

```ts
conservation: conservation('EN', 'decreasing', 2015, 'A2cd+4cd')
```

[IUCN Red List current assessment](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T19596A196491153.en) [中国动物学会灵长类学分会的评估信息摘录](https://cps.nwu.edu.cn/info/1118/1670.htm)

中国动物学会灵长类学分会在 2022-08-30 完成的国内专家评估建议 **VU B2ab**，理由包括保护区建设、反盗猎和生态工程后数量恢复、分布总体稳定或局地扩展。这一建议没有替换 IUCN 网站上的全球正式记录，不能把生产字段改成 `VU`、`increasing` 或 `2022`。结构化 `conservation` 回答 IUCN 正式状态，近期恢复证据进入 `keyFacts`、统计卡和正文。[中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm)

### 新调查显示恢复，不等于 IUCN 已经改级

Yu 等汇总 2019 年调查，估计野外共有 **188 至 220 个多层社会群，22,710 至 26,130 只总个体**。其中四川和甘肃种群约 15,880 至 18,190 只，秦岭约 5,240 至 5,760 只，神农架约 1,590 至 2,180 只；约 95% 的估计个体位于 47 个自然保护区内。作者估计总量较 1998 年调查高 51.4% 至 75.4%，并建议审慎重评为易危。[Yu et al. 2022](https://doi.org/10.24272/j.issn.2095-8137.2022.198)

这些数字是**所有年龄的总个体估计**，不是成熟个体数，也不是同一时刻逐只点数。不能写入 `metrics.estimatedMatureIndividuals`。国家林草局 2021 年概览给出的“约 200 群、约 2.5 万只”与论文量级一致，但采用了不同的汇总表达；生产统计卡优先使用有方法说明的 2019 年论文范围。[国家林草局](https://www.forestry.gov.cn/c/www/dw/72071.jhtml)

### 四套状态各回答一个问题

- **IUCN Red List**：EN、A2cd+4cd、下降，评估年 2015。它进入 `conservation`。
- **2019 年全国调查**：22,710 至 26,130 只总个体，显示长期保护后的数量恢复。它进入解释性文案和统计卡，不改写 IUCN 字段。
- **中国法定保护**：川金丝猴是国家一级重点保护野生动物。这是国内法律身份，不是第二个 IUCN 等级。[国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf)
- **CITES**：*Rhinopithecus* 属列入附录 I，国际商业贸易受到严格禁止，科研等有限非商业交易仍由许可制度管理。不要写成“一切跨境移动绝无例外”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)

## 分布与生境

### 中国特有，现存于三个彼此隔离的山地单元

川金丝猴仅分布于中国四川、甘肃南部、陕西和湖北。生产 `countries` 只有“中国”，并设置 `endemicTo: ['中国']`。可用三个区域标签表达当前格局：

1. 四川和甘肃山地种群，包括岷山、邛崃等山系；
2. 陕西秦岭种群；
3. 湖北神农架种群。

这三个单元不是连续分布带。全基因组研究和保护遗传研究都把它们作为隔离地理种群处理；神农架种群的遗传多样性尤其低，历史上有效种群规模很小。[MDD](https://www.mammaldiversity.org/taxon/1000685/) [Kuang et al. 2019](https://doi.org/10.1093/molbev/msy220) [Luo et al. 2012](https://doi.org/10.1186/1471-2148-12-207)

`center: { lat: 31.5, lng: 106.5 }` 只用于把中国中部山地放进地图视窗，不是几何中心、种群重心或精确采样点。地图和文案都不能公开巢位、夜宿树、补食点、巡护路线或实时坐标。

### 海拔同时保留“通常范围”和“全国记录范围”

Yu 等的物种级建模采用约 **1,300 至 3,500 米**的高山森林范围；国家林草局汇总的全国活动记录为 **1,000 至 4,100 米**。两者不是冲突：前者适合描述常见或建模范围，后者适合 `metrics.elevationM` 的全国完整记录边界。[Yu et al. 2022](https://doi.org/10.24272/j.issn.2095-8137.2022.198) [国家林草局](https://www.forestry.gov.cn/c/www/dw/72071.jhtml)

建议结构化字段使用 `elevationM: [1000, 4100]`，统计卡说明“全国记录；常见或建模范围约 1,300 至 3,500 米”。不要把 4,100 米写成常年生活高度，也不要因一处 1,050 米记录继续向下外推全物种范围。

### 生境是有明显季节性的山地森林梯度

国家林草局列出的生境包括山地常绿阔叶林、常绿与落叶阔叶混交林、落叶阔叶林、针阔混交林和暗针叶林。生产可以合并为三类相互衔接的山地森林：

- 山地常绿与落叶阔叶混交林；
- 山地针阔混交林；
- 亚高山暗针叶林。

积雪是其部分分布区的真实冬季条件，但不是全年景观，也不是无林的高寒荒原。林冠连续性、可食叶片、果实、树皮和树生地衣共同决定季节性利用价值。[国家林草局](https://www.forestry.gov.cn/c/www/dw/72071.jhtml) [Yu et al. 2022](https://doi.org/10.24272/j.issn.2095-8137.2022.198)

## 外形、体尺与图像边界

### 蓝色面部和朝天鼻要画对位置

稳定形态组合包括：眼周浅蓝至紫罗兰色裸露皮肤，宽而发白、被毛稀疏的口鼻部，短而上翻的鼻部与朝前鼻孔，深色头冠和背部，黄红至金橙色长而密的被毛，浅色腹面，以及外侧有深色带但不到手脚的四肢。尾巴细长、不能卷握，长度接近或超过头体长。[中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm) [北京野生动物园](https://www.bjwildlifepark.com/en/dwdaInfo_d5af4aaf75c543c594dec8cfc332e195.html)

裸露皮肤集中在眼周和鼻口区域，不应把整张脸做成荧光蓝面罩。鼻部是短、扁、上翻，不是长鼻猴的下垂大鼻，也不是狒狒的长犬状口鼻。北京野生动物园把扁鼻解释为对寒冷的适应，但缺少直接实验支持，生产正文不把“防冻鼻”写成确定因果。

成年雄性比雌性明显更大、更鲜艳，头部和背部更深，肩背有较长金色披毛；上唇角的肉质突起只在成年雄性中出现。图像若突出这些特征，应明确是成年雄性，不要把所有个体画成披毛浓密的雄性。[中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm)

### 体尺按性别分层，再合并进 schema

中国动物学会灵长类学分会给出同一来源内可对齐的完整范围：

- 成年雄性头体长 56 至 83 厘米，尾长 61 至 104 厘米，体重 15 至 19 千克；
- 成年雌性头体长 47 至 74 厘米，尾长 51 至 92 厘米，体重 6 至 10 千克。

因此建议：

```ts
measurements: {
  length: {
    min: 47,
    max: 83,
    unit: 'cm',
    note: '成年头体长；雌性 47–74 厘米、雄性 56–83 厘米，尾另长 51–104 厘米',
  },
  weight: {
    min: 6,
    max: 19,
    unit: 'kg',
    note: '成年雌性 6–10 千克、雄性 15–19 千克，性别二型明显',
  },
},
metrics: {
  adultLengthCm: [47, 83],
  adultMassKg: [6, 19],
  elevationM: [1000, 4100],
},
```

[中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm)

不把尾长加进 `adultLengthCm`，也不把 19 千克写成雌雄共同的典型体重。北京野生动物园给出 25 至 30 年圈养寿命概览，但野外寿命缺少可比较的长期估计。因此本轮省略 `metrics.lifespanYears`，不把圈养寿命冒充野外范围。[北京野生动物园](https://www.bjwildlifepark.com/en/dwdaInfo_d5af4aaf75c543c594dec8cfc332e195.html)

第 05 帧使用能独立坐立的幼年个体，避免凭画面标精确月龄，也不把幼年个体画成缩小的长披毛雄性。

## 食性与季节转换

### 结构化类型用 herbivore

川金丝猴属于以植物和树生地衣为主的叶猴类。生产 `diet.types` 用 `['herbivore']`，推荐食物为嫩叶与成熟叶、树生地衣、果实与种子、芽与花、树皮与嫩枝。零星动物性食物记录不足以把整个物种标为 `omnivore` 或 `insectivore`。

### 没有一份菜单适用于所有山地和季节

秦岭一项覆盖两整年的研究记录到果实和种子占 29.4%、地衣 29.0%、叶 24.0%、树皮 11.1%、芽 4.2%、嫩枝 1.3%。这是一个研究群的全年平均，不是物种固定配方。[Guo et al. 2007](https://doi.org/10.1007/s10329-007-0048-z)

神农架研究记录 53 种植物的 111 个食物部位和 6 种地衣，地衣全年可用，其他食物随季节改变。[Liu et al. 2013](https://doi.org/10.1002/ajp.22149)

南秦岭食物短缺的冬季样本中，地衣占 41.41%、树皮 40.44%、芽鳞 17.25%、叶 0.9%；最北端秦岭种群却在缺少地衣时更多依赖芽和树皮。四川老河沟春季样本又以叶为主，叶占 77.5%。这些结果共同支持“菜单随森林和季节转换”，不支持“川金丝猴全年只吃地衣”。[Zhao et al. 2020](https://doi.org/10.1016/j.gecco.2020.e00963) [Hou et al. 2018](https://doi.org/10.1002/ajp.22755) [Fang et al. 2018](https://doi.org/10.1038/s41598-018-34311-z)

第 04 图可以表现冬季取食灰绿色树生地衣，但不能把地衣画成鲜绿苔藓、成团水果或被主动捕捉的动物。caption 要注明冬季和研究地限制。

## 活动、移动与多层社会

### 一雄多雌单元嵌套在更大的社会网络中

川金丝猴的基础繁殖单元通常是一只成年雄性、数只成年雌性及其幼仔组成的一雄多雌单元。多个繁殖单元构成繁殖带，全雄单元与繁殖带可共同形成更大的多层社会。秦岭卫星追踪与社会模型研究记录到多个群带暂时合并，研究地最大聚集超过 300 只。[Qi et al. 2014](https://doi.org/10.1038/ncomms6296)

“一雄两雌一幼”适合作为第 05 帧的可读示意，但单张图无法证明配偶关系、亲缘、群体层级或完整群体规模。不要把四只动物 caption 成“一个已确认家庭”，也不要把背景中未计数的模糊个体当作证据。

### 既树栖，也会在地面移动

野外位置行为研究记录到四足行走、攀爬、跳跃和前肢悬垂，四足行走是主要移动方式之一；幼年个体更常跑、跳、攀爬和悬垂，成年雄性在部分研究中更常利用地面和较粗水平支撑物。[Youlatos et al. 2021](https://doi.org/10.1007/s10329-021-00900-2) [Zhu et al. 2014](https://doi.org/10.1002/ajp.22314)

生产文案可写“以树上活动为主，也会下地；性别、年龄、季节和地点影响使用方式”，不写“完全树栖”或“像长臂猿一样主要臂行”。长尾不具卷握能力，不能缠住树枝承重。

### 冬夜会形成更紧密的树上睡眠聚团

秦岭一个自由活动但接受补食的群带研究发现，冬夜所有观察个体都在树上睡眠，并在较低林冠形成更大、更紧密的睡眠聚团。作者把它解释为体温调节与反捕食风险之间的折中。[Zhang et al. 2011](https://doi.org/10.1007/s10329-011-0241-y)

这一结果来自单一研究群和冬季场景。可进入行为故事，但不要写成每个种群、每晚、固定数量个体都抱团，也不要画洞穴、人工毯子或地面巢。

## 繁殖与共同育幼

秦岭 6 年研究跟踪 47 只成年雌性和 88 次分娩，记录到平均生育率 0.49 次每雌每年，平均产仔间隔 21.88 个月，初产年龄约 5 至 6 岁。出生集中在 3 至 5 月，平均日期约 4 月 14 日；幼仔死亡可能缩短下一次产仔间隔。[Qi et al. 2008](https://doi.org/10.1002/ajp.20480)

跨自由活动和圈养数据的研究同样发现，超过 90% 的出生发生在 3 至 5 月，日长和温度与出生分布有关。[Xiang et al. 2017](https://doi.org/10.7717/peerj.2892)

一项对高度习惯化野外群带的研究发现，超过 87% 的幼仔在出生后头三个月接受过非母亲雌性的哺乳，参与者多为有亲缘关系的雌性，且行为具有互惠性，并与更高幼仔存活相关。[Xiang et al. 2019](https://doi.org/10.1126/sciadv.aav0499)

共同哺乳是很有辨识度的行为，但证据来自一个研究群。推荐故事写“研究群中广泛出现”，不写成全物种每只幼仔都会接受共同哺乳。六图无需表现分娩或哺乳，也不能凭一个幼年个体推断出生月份。

## 威胁与种群边界

### 历史下降与近期恢复可以同时成立

IUCN 的 A2cd+4cd 依据包括过去三个世代内占有面积、分布范围或生境质量下降，以及实际或潜在开发利用。国家林草局指出，历史猎捕、为捕捉林麝设置的铁夹和森林利用曾造成伤害；天然林保护、退耕还林、保护区扩展和反盗猎让这一压力显著下降。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T19596A196491153.en) [国家林草局](https://www.forestry.gov.cn/c/www/dw/72071.jhtml)

近期数量恢复没有消除以下风险：

- 修路、采矿、牧场扩张和其他工程造成森林退化、破碎化与通道阻断；
- 放牧、采药和旅游开发干扰取食、移动和夜宿地，清理带地衣老树或倒木还会减少冬季资源；
- 历史盗猎和铁夹风险已大幅下降，但仍需持续防止套索、非法捕捉和贸易回潮；
- 三个地理种群隔离，神农架种群遗传多样性低，遗传漂变风险不能由全国总量掩盖；
- 气候模型预测适生地向高海拔收缩或移动，孤立山地之间缺少迁移通道。

Yu 等估计当前潜在适生地约 22,906.48 平方千米；模型在不同排放情景下预测到 2070 年代可能损失 13.94% 至 24.81%。这是模型情景，不是已经发生的统一实测损失，也不能把 24.81% 写成确定预言。[Yu et al. 2022](https://doi.org/10.24272/j.issn.2095-8137.2022.198)

四川省历史分布研究显示，1980 至 2000 年间区域分布明显收缩，南界北移，2001 至 2023 年有记录的市级单元少于历史时期。这个结论适用于四川省的历史对比，不可直接替代全物种当前趋势。[Dai et al. 2024](https://doi.org/10.1002/ece3.11270)

## 推荐保护行动

1. 保护并恢复三个地理种群中的连续山地森林，保留关键取食树、夜宿树和安全的带地衣老树或倒木；
2. 在保护地和大熊猫国家公园片区之间维护真实可通行的森林廊道，为气候驱动的海拔移动保留通路；
3. 持续执行反盗猎、清套和非法贸易执法，并按 CITES 附录 I 管理有限的国际非商业移动；
4. 对三个地理种群分别开展标准化数量、繁殖、栖息地和非侵入式遗传监测，不用单一保护区的增长率替代全物种趋势；
5. 对道路、采矿、放牧、采药、旅游和补食实行分区管理，施工前评估连通性，研究和观赏活动保持距离并隐藏敏感位置；
6. 在正式重评前同时呈现 IUCN EN 与近期恢复证据，维持国家一级保护，不把拟议降级当成减少保护投入的理由。

[Yu et al. 2022](https://doi.org/10.24272/j.issn.2095-8137.2022.198) [Luo et al. 2012](https://doi.org/10.1186/1471-2148-12-207) [国家林草局](https://www.forestry.gov.cn/c/www/dw/72071.jhtml) [国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf)

## 推荐的 6 段故事

1. **蓝脸和朝天鼻**：浅蓝至紫罗兰色眼周裸皮、发白口鼻、短而上翻的鼻部、深色头背和金橙长毛共同构成物种形态；成年雄性另有长披毛与上唇角突起。
2. **三座山地世界**：四川和甘肃、秦岭、神农架三个地理种群被低地和人类景观分隔，在 1,000 至 4,100 米的季节性森林梯度中生活。
3. **森林决定菜单**：叶、果实、种子、芽、树皮和地衣的比例随地点和季节大幅改变，冬季地衣重要但并非所有种群都有同样资源。
4. **层层嵌套的社会**：一雄多雌单元构成繁殖带，并与全雄单元一起形成多层社会；偶尔出现的大聚集不是固定群体大小。
5. **春季出生与共同照料**：超过 90% 的出生集中在 3 至 5 月；一个长期研究群中还记录到广泛的非母亲哺乳。
6. **恢复数字仍需解释**：2019 年调查显示约 2.27 万至 2.61 万只总个体和明显长期恢复，正式 IUCN 记录仍是 2015 年评估的 EN、下降；隔离与气候风险没有消失。

## 推荐关键事实

- IUCN 当前正式值为 EN、A2cd+4cd、下降，评估完成于 2015 年。
- 川金丝猴仅分布于中国四川、甘肃、陕西和湖北，形成三个隔离地理种群。
- 2019 年调查估计 22,710 至 26,130 只总个体；这不是成熟个体数。
- 约 95% 的 2019 年估计个体位于 47 个自然保护区，另有少量个体仍在保护区外。
- 成年雌性头体长 47 至 74 厘米、重 6 至 10 千克；成年雄性头体长 56 至 83 厘米、重 15 至 19 千克。
- 尾长 51 至 104 厘米，接近或超过头体长，但不能卷握树枝。
- 一雄多雌单元、繁殖带和全雄单元共同组成多层社会。
- 跨数据集超过 90% 的出生发生在 3 至 5 月。

## 应删除或避免的说法

- 不把 2021 写成 IUCN `assessedYear`；它是修订版发布年，评估完成年是 2015。
- 不把中国专家 2022 年的 VU B2ab 建议写成 IUCN 已正式降级。
- 不因 2019 年总量高于 1998 年就把 IUCN `trend` 改成 `increasing`。
- 不把 22,710 至 26,130 写成成熟个体，也不填入 `estimatedMatureIndividuals`。
- 不把国家林草局“约 2.5 万”与论文范围相加、求平均或当成第二次独立普查。
- 不断言三个亚种已经获得所有权威数据库一致接受；产品保持物种级。
- 不把“金丝猴”或 “Golden Monkey”当成无歧义的物种别名。
- 不写全物种只生活在四川，或把“四川和甘肃、秦岭、神农架”画成一条连续分布带。
- 不把 1,000 至 4,100 米写成每只个体的固定活动区；也不把 4,100 米画成无林雪原。
- 不把地衣写成全年、全分布区的唯一主食，不把地衣画成亮绿色苔藓。
- 不写“完全树栖”“主要臂行”或“尾巴能卷住树枝”。
- 不把超过 300 只的局地暂时聚集写成典型固定群规模。
- 不把一个研究群的共同哺乳比例外推到每个种群、每只幼仔。
- 不把蓝色扩展到整张脸，不画红脸猕猴、狒狒长口鼻、长鼻猴大鼻、无尾长臂猿或环尾狐猴形态。
- 不用单张图证明亚种、亲缘、社会等级、数量、密度、增长率或保护成效。
- 不公开精确经纬度、夜宿树、补食点、巡护路线或可识别监测设备编号。

## 1 张封面与 5 张 gallery 的科学图像方案

六张图是基于物种事实的编辑示意，不是现场记录、亚种鉴定或种群证据。当前源 PNG basename 已与下表一致；运行时 WebP、最终焦点和素材 README 应由素材任务完成后再次核对。

| 帧 | 推荐运行时路径 | 可视事实与证据边界 |
| --- | --- | --- |
| 01 | `./images/species/golden-snub-nosed-monkey/01-snowy-forest-portrait.webp` | 一只完整成年雄性在积雪山地针阔混交林右侧，左侧留文案空间；积雪代表季节，不代表常年雪原 |
| 02 | `./images/species/golden-snub-nosed-monkey/02-adult-male-morphology.webp` | 一只完整成年雄性三分之四侧身，展示浅蓝眼周、上翻鼻、深色头背、金色肩披和长尾；不指定亚种 |
| 03 | `./images/species/golden-snub-nosed-monkey/03-montane-forest-habitat.webp` | 一只远景个体位于连续山地混交林，突出林冠与海拔梯度；不公开真实地点，不把三地拼成超现实景观 |
| 04 | `./images/species/golden-snub-nosed-monkey/04-winter-lichen-foraging.webp` | 一只个体在雪季树枝上取食灰绿色树生地衣；图像只说明冬季食物策略，不声称地衣全年普遍占主导 |
| 05 | `./images/species/golden-snub-nosed-monkey/05-one-male-unit.webp` | 恰好一只成年雄性、两只成年雌性和一只幼年个体在同一林冠；作为一雄多雌单元示意，不证明亲缘或完整群体 |
| 06 | `./images/species/golden-snub-nosed-monkey/06-noninvasive-visual-monitoring.webp` | 一只树上个体与两名保持距离的研究人员，使用望远镜和记录板；单次目视记录不能证明数量、密度或趋势 |

### 六张图的共同形态锚点

**共同正向锚点**：`photorealistic wildlife editorial, wild Rhinopithecus roxellana at species level, pale blue to violet bare skin around the eyes, broad pale sparsely haired muzzle, short upturned nose with forward-facing nostrils, dark crown and upper back, golden-orange to yellow-red dense coat, pale belly, dark outer limb stripe stopping before hands and feet, very long non-prehensile tail, coherent Chinese montane broadleaf and conifer mixed forest, natural documentary light, horizontal 3:2 composition`。

**成年雄性附加锚点**：`larger adult male, brighter golden coat, long golden shoulder and back cape, darker crown and back, subtle adult male swellings at upper-lip corners, anatomically natural colobine proportions`。

**共同排除项**：`no red macaque face, no baboon muzzle, no proboscis monkey nose, no orangutan, no gibbon anatomy, no missing tail, no ringed lemur tail, no prehensile tail, no short tail, no albino coat, no neon blue full-face mask, no uniformly gold coat without dark crown and back, no lion mane, no bare chest, no Arctic tundra, no cave den, no zoo enclosure, no collar, no feeding platform, no fantasy glow, no text, no watermark, no logo, no anatomy defects, no duplicate limbs or tails`。

### 逐帧准确性约束

1. **01 封面**：只出现一只完整成年雄性，身体位于右侧约三分之一，四肢与长尾不被裁断；树林有落叶树和针叶树，薄雪覆盖林地，左侧背景安静。不能出现北极冰原、厚重狮鬃或第二只动物。
2. **02 形态**：一只成年雄性沿粗树干四足行走，全身侧面可读。眼周仅浅蓝，口鼻白而短，鼻孔朝前；深色头冠、肩背黑金披毛、浅腹、深色四肢外侧和长直尾同时可见。尾巴不能缠树。
3. **03 生境**：个体在画面中较小，位于有垂直层次的单一山地混交林。可有局部残雪，但林冠必须连续；不拼接竹林、热带雨林和高寒草原，也不以一个场景声称覆盖整个分布区。
4. **04 冬季取食**：一只个体拿取或咀嚼枝干上的灰绿叶状或枝状地衣，地衣贴附树皮且尺度自然。无水果堆、玉米、人工投食台、捕虫或捕猎；caption 写明冬季和地点差异。
5. **05 社会单元**：画面恰好四只，体型与毛色区分一只成年雄性、两只成年雌性和一只幼年个体。幼体不是深色新生儿，也不是缩小的披毛雄性；不添加背景群体，不断言四者亲缘。
6. **06 目视监测**：一只猴在高处树枝，两名研究人员在低处保持距离，一人用望远镜、一人用记录板。无捕捉、触摸、麻醉、项圈、投食、无人机、可读表格、坐标或路牌。caption 说明长期可比较监测需要重复调查和明确方法。

## 研究阶段的来源常量与字段草案

以下代码块覆盖 `Species` 的全部字段。它是可直接集成的草案，但最终图片焦点、静态路径和数组位置仍要按素材 README 与当前数据文件核对。

```ts
const GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE = '2026-08-25' as const;
const GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE = '2026-08-25' as const;

const GOLDEN_SNUB_NOSED_MONKEY_SOURCES = [
  {
    title: 'IUCN Red List: Rhinopithecus roxellana, current amended assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T19596A196491153.en',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Rhinopithecus roxellana',
    url: 'https://www.mammaldiversity.org/taxon/1000685/',
    kind: 'taxonomy',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'ITIS: Rhinopithecus roxellana, TSN 944261',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=944261',
    kind: 'taxonomy',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: '中国动物学会灵长类学分会：川金丝猴',
    url: 'https://cps.nwu.edu.cn/info/1118/1670.htm',
    kind: 'general',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局：“鼻孔上仰”的金丝猴家族',
    url: 'https://www.forestry.gov.cn/c/www/dw/72071.jhtml',
    kind: 'distribution',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部：国家重点保护野生动物名录',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Yu et al. 2022: Climate change challenge, extinction risk, and successful conservation experiences for the golden snub-nosed monkey',
    url: 'https://doi.org/10.24272/j.issn.2095-8137.2022.198',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Beijing Wildlife Park: Golden Snub-nosed Monkey',
    url: 'https://www.bjwildlifepark.com/en/dwdaInfo_d5af4aaf75c543c594dec8cfc332e195.html',
    kind: 'general',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Qi et al. 2014: Satellite telemetry and social modeling of primate multilevel societies',
    url: 'https://doi.org/10.1038/ncomms6296',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Youlatos et al. 2021: Sex differences in habitat use and positional behavior',
    url: 'https://doi.org/10.1007/s10329-021-00900-2',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Guo et al. 2007: Diet and activity budget in the Qinling Mountains',
    url: 'https://doi.org/10.1007/s10329-007-0048-z',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2013: Foods eaten in Shennongjia in relation to nutritional chemistry',
    url: 'https://doi.org/10.1002/ajp.22149',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Zhao et al. 2020: Nutrient strategies during winter food shortage in the Qinling Mountains',
    url: 'https://doi.org/10.1016/j.gecco.2020.e00963',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Qi et al. 2008: Reproductive parameters of wild female Rhinopithecus roxellana',
    url: 'https://doi.org/10.1002/ajp.20480',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2017: Factors influencing birth distributions',
    url: 'https://doi.org/10.7717/peerj.2892',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2019: Routine allomaternal nursing in a free-ranging Old World monkey',
    url: 'https://doi.org/10.1126/sciadv.aav0499',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2011: Winter sleeping cluster patterns and retiring behavior',
    url: 'https://doi.org/10.1007/s10329-011-0241-y',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Luo et al. 2012: Selection and genetic drift in isolated populations',
    url: 'https://doi.org/10.1186/1471-2148-12-207',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Kuang et al. 2019: Origin and population history of the golden snub-nosed monkey',
    url: 'https://doi.org/10.1093/molbev/msy220',
    kind: 'taxonomy',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Dai et al. 2024: Historical distribution changes in Sichuan Province',
    url: 'https://doi.org/10.1002/ece3.11270',
    kind: 'distribution',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const goldenSnubNosedMonkeyDraft = {
  id: 'species-rhinopithecus-roxellana',
  slug: 'golden-snub-nosed-monkey',
  names: {
    zh: '川金丝猴',
    en: 'Golden Snub-nosed Monkey',
    aliases: ['四川金丝猴', 'Sichuan Snub-nosed Monkey'],
  },
  scientificName: 'Rhinopithecus roxellana',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Primates', '灵长目'),
    taxon('Cercopithecidae', '猴科'),
    taxon('Rhinopithecus', '仰鼻猴属'),
  ),
  conservation: conservation('EN', 'decreasing', 2015, 'A2cd+4cd'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '四川和甘肃的岷山、邛崃等山系',
      '陕西秦岭',
      '湖北神农架',
    ],
    countries: ['中国'],
    endemicTo: ['中国'],
    range:
      '中国特有，现存于四川、甘肃南部、陕西和湖北的山地森林，形成四川和甘肃、秦岭、神农架三个彼此隔离的地理种群；通常见于约 1,300 至 3,500 米，全国活动记录约 1,000 至 4,100 米。',
    center: { lat: 31.5, lng: 106.5 },
  },
  habitats: [
    {
      name: '山地常绿与落叶阔叶混交林',
      realm: 'terrestrial',
      description:
        '利用有明显季节变化的山地阔叶林，春夏叶、芽、花和果实增加，冬季可用资源减少。',
      isPrimary: true,
    },
    {
      name: '山地针阔混交林',
      realm: 'terrestrial',
      description:
        '连续林冠提供树上通行、夜宿和躲避风险的结构，枝干上的树生地衣可成为部分地点的重要冬季食物。',
      isPrimary: true,
    },
    {
      name: '亚高山暗针叶林',
      realm: 'terrestrial',
      description:
        '在寒冷高海拔季节使用针叶林带，积雪、低温和食物短缺改变移动、取食与睡眠聚团。',
    },
  ],
  measurements: {
    length: {
      min: 47,
      max: 83,
      unit: 'cm',
      note: '成年头体长；雌性 47–74 厘米、雄性 56–83 厘米，尾另长 51–104 厘米',
    },
    weight: {
      min: 6,
      max: 19,
      unit: 'kg',
      note: '成年雌性 6–10 千克、雄性 15–19 千克，性别二型明显',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['嫩叶与成熟叶', '树生地衣', '果实与种子', '芽与花', '树皮与嫩枝'],
    description:
      '以植物和树生地衣为主，菜单随地点和季节强烈改变。暖季更多利用叶、芽、花、果实和种子；部分种群冬季增加地衣与树皮，但最北端种群在缺少地衣时会更多取食芽和树皮。',
  },
  activity: [
    '昼行，以树上活动为主，也会下地；四足行走、攀爬、跳跃和前肢悬垂都会出现',
    '一雄多雌单元嵌套成繁殖带，并与全雄单元组成多层社会',
    '活动、移动和取食预算随季节、食物、性别、年龄与研究地改变',
    '冬季可在较低林冠形成更大、更紧密的树上睡眠聚团',
  ],
  tags: [
    '中国特有',
    '山地森林',
    '多层社会',
    '旗舰物种',
    '国家一级重点保护野生动物',
    'CITES 附录 I',
  ],
  summary:
    '蓝色眼周、朝天鼻和金橙长毛让川金丝猴极易辨认；它们在中国三片隔离山地森林中组成多层社会，并按季节切换菜单。',
  description:
    '川金丝猴只生活在中国四川、甘肃、陕西和湖北的山地森林。它们的一雄多雌单元会嵌套成更大的繁殖带，并与全雄单元组成多层社会。叶、果实、种子、芽、树皮和地衣的比例随森林与季节改变。2019 年调查显示长期保护带来明显恢复，但三个地理种群仍然隔离，正式 IUCN 记录仍为濒危和下降。',
  storySections: [
    {
      key: 'morphology',
      label: '外形',
      title: '蓝色眼周包围一张短而上翻的鼻脸',
      body:
        '浅蓝至紫罗兰色裸皮集中在眼周，宽而发白的口鼻部被毛稀疏，鼻部短而上翻，鼻孔朝前。深色头冠和背部压住金橙长毛的亮度，浅色腹面和长尾补全轮廓。成年雄性更大，肩背披毛更长，上唇角还可出现肉质突起。',
    },
    {
      key: 'three-mountain-populations',
      label: '分布与生境',
      title: '三个地理种群被分隔在中国中部山地',
      body:
        '四川和甘肃、陕西秦岭、湖北神农架形成三个隔离单元。川金丝猴沿山地阔叶林、针阔混交林和暗针叶林的垂直带生活，全国记录跨越约 1,000 至 4,100 米。地图中心只是浏览焦点，不能替代破碎的真实分布。',
    },
    {
      key: 'seasonal-diet',
      label: '食性',
      title: '菜单随着森林和季节改写',
      body:
        '叶、芽、花、果实、种子、树皮、嫩枝和地衣都可进入食谱。部分秦岭和神农架种群在冬季大量利用地衣与树皮，最北端种群却在缺少地衣时转向芽和树皮。地衣不是苔藓，也不是所有山地全年不变的主食。',
    },
    {
      key: 'multilevel-society',
      label: '社会',
      title: '小单元嵌套成数百只的社会网络',
      body:
        '一只成年雄性、数只成年雌性和幼仔构成常见繁殖单元；多个单元组成繁殖带，全雄单元也会参与更大的多层社会。研究地曾记录超过 300 只的暂时聚集，但一次聚集不代表固定群体大小。',
    },
    {
      key: 'spring-births',
      label: '繁殖与照料',
      title: '春季出生高峰连接着共同照料',
      body:
        '跨研究数据中超过 90% 的出生集中在 3 至 5 月。一个高度习惯化野外群带中，超过 87% 的幼仔在出生后头三个月接受过非母亲雌性的哺乳。这是长期观察到的群体行为，不应外推为每只幼仔的固定经历。',
    },
    {
      key: 'recovery-and-risk',
      label: '监测与保护',
      title: '恢复中的总量没有消除隔离风险',
      body:
        '2019 年调查估计 22,710 至 26,130 只总个体，较 1998 年明显恢复；正式 IUCN 记录仍是 2015 年评估的 EN 和下降。道路、采矿、放牧、旅游、遗传隔离与未来气候适生地收缩，要求保护从单个保护区延伸到山地廊道。',
    },
  ],
  keyFacts: [
    'IUCN 当前正式值为 EN、A2cd+4cd、下降，评估完成于 2015 年。',
    '仅分布于中国四川、甘肃、陕西和湖北，形成三个隔离地理种群。',
    '2019 年调查估计 22,710 至 26,130 只总个体，不是成熟个体数。',
    '约 95% 的 2019 年估计个体位于 47 个自然保护区。',
    '成年雌性重 6 至 10 千克，成年雄性重 15 至 19 千克。',
    '尾长 51 至 104 厘米，接近或超过头体长，但不能卷握树枝。',
    '一雄多雌单元、繁殖带和全雄单元共同组成多层社会。',
    '跨数据集超过 90% 的出生发生在 3 至 5 月。',
  ],
  threats: [
    '道路、采矿、牧场扩张和其他开发造成山地森林退化、破碎化与迁移通道阻断',
    '放牧、采药和旅游干扰取食、移动与夜宿地，并可能减少带地衣的老树资源',
    '历史猎捕、套索和铁夹压力已下降，但非法捕捉与贸易仍需持续防范',
    '三个地理种群长期隔离，神农架等小种群面临遗传漂变和低遗传多样性风险',
    '气候变化可能推动适生森林向高海拔移动并造成未来范围收缩',
  ],
  conservationActions: [
    '保护和恢复连续山地森林，保留关键取食树、夜宿树与安全的带地衣老树或倒木',
    '维护保护地和国家公园片区之间的森林廊道，为扩散、基因交流和海拔移动保留通路',
    '持续开展反盗猎、清套和非法贸易执法，并执行 CITES 附录 I 许可管控',
    '分别对三个地理种群开展标准化数量、繁殖、栖息地和非侵入式遗传监测',
    '对道路、采矿、放牧、采药、旅游和补食实行分区限扰管理，隐藏敏感监测位置',
  ],
  metrics: {
    adultLengthCm: [47, 83],
    adultMassKg: [6, 19],
    elevationM: [1000, 4100],
  },
  featuredStats: [
    {
      key: 'wild-total-2019',
      label: '野外总个体估计',
      value: '22,710–26,130',
      unit: '只',
      note: '2019 年调查汇总，包含所有年龄，不是成熟个体数或同步逐只普查',
    },
    {
      key: 'protected-share',
      label: '保护区内估计占比',
      value: '约 95',
      unit: '%',
      note: '2019 年资料，分布于 47 个自然保护区，其中 28 个为国家级',
    },
    {
      key: 'elevation',
      label: '全国海拔记录',
      value: '1,000–4,100',
      unit: '米',
      note: '常见或建模范围约 1,300–3,500 米',
    },
    {
      key: 'birth-season',
      label: '3 至 5 月出生',
      value: '>90',
      unit: '%',
      note: '自由活动与圈养数据的跨群体出生分布，不代表固定分娩日',
    },
  ],
  media: {
    image:
      './images/species/golden-snub-nosed-monkey/01-snowy-forest-portrait.webp',
    alt: '一只金橙色成年雄性川金丝猴站在积雪山地混交林右侧',
    focalPoint: { x: 0.68, y: 0.55 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image:
          './images/species/golden-snub-nosed-monkey/02-adult-male-morphology.webp',
        alt: '一只成年雄性川金丝猴侧身走过粗树干，浅蓝眼周、深色肩背和长尾清晰可见',
        title: '蓝脸、朝天鼻与长披毛',
        caption:
          '成年雄性体型较大，肩背披毛更长；图像保持物种级，不凭毛色指定亚种。',
        focalPoint: { x: 0.49, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/golden-snub-nosed-monkey/03-montane-forest-habitat.webp',
        alt: '一只远处的川金丝猴坐在有残雪的连续山地针阔混交林中',
        title: '季节性山地森林',
        caption:
          '川金丝猴利用阔叶林、针阔混交林和暗针叶林；残雪是季节场景，不是常年雪原。',
        focalPoint: { x: 0.73, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/golden-snub-nosed-monkey/04-winter-lichen-foraging.webp',
        alt: '一只川金丝猴坐在雪季树枝上取食灰绿色树生地衣',
        title: '冬季菜单',
        caption:
          '部分种群冬季增加地衣和树皮；地衣的重要性随地点与季节改变。',
        focalPoint: { x: 0.38, y: 0.43 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/golden-snub-nosed-monkey/05-one-male-unit.webp',
        alt: '一只成年雄性、两只成年雌性和一只幼年川金丝猴分坐在林间树枝上',
        title: '一雄多雌单元',
        caption:
          '四只个体示意常见社会单元；单张画面不能证明亲缘、等级或完整群体大小。',
        focalPoint: { x: 0.51, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/golden-snub-nosed-monkey/06-noninvasive-visual-monitoring.webp',
        alt: '两名研究人员在雪林中用望远镜和记录板观察树上的一只川金丝猴',
        title: '保持距离的长期监测',
        caption:
          '目视记录可减少接触干扰；估算数量和趋势仍需重复调查、明确范围与一致方法。',
        focalPoint: { x: 0.65, y: 0.45 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: GOLDEN_SNUB_NOSED_MONKEY_SOURCES,
  featured: true,
  publishedAt: GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE,
  updatedAt: GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE,
} satisfies Species;
```

## 来源覆盖清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 接受名与上级分类 | [MDD: *Rhinopithecus roxellana*](https://www.mammaldiversity.org/taxon/1000685/) | 主学名、英文名、作者、原组合、模式产地、灵长目、猴科、仰鼻猴属；物种页承担生产主分类 |
| 三亚种数据库处理 | [ITIS TSN 944261](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=944261) | ITIS 接受三个亚种；与 MDD 的异名处理有差异，因此生产保持物种级 |
| 中文分类与体尺 | [中国动物学会灵长类学分会](https://cps.nwu.edu.cn/info/1118/1670.htm) | 中文名、猴科、疣猴亚科、仰鼻猴属、体尺、毛色、性别二型、IUCN 日期和国内重评建议；2022 VU 不覆盖 IUCN 正式记录 |
| IUCN 全球状态 | [Long & Richardson current assessment](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T19596A196491153.en) | EN、A2cd+4cd、下降、2015 评估；2021 是修订版发布年 |
| 中国法定身份 | [国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf) | 川金丝猴、学名与国家一级；只适用于中国法律语境 |
| 当前 CITES 列名 | [2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | *Rhinopithecus* 属附录 I；不表述为所有非商业跨境移动均无例外 |
| 全国分布、生境与概览数量 | [国家林草局 2021](https://www.forestry.gov.cn/c/www/dw/72071.jhtml) | 四省、1,000 至 4,100 米、植被、约 200 群和 2.5 万只、保护区与现存威胁；概览数字不与论文估计叠加 |
| 2019 数量与气候风险 | [Yu et al. 2022](https://doi.org/10.24272/j.issn.2095-8137.2022.198) | 22,710 至 26,130 只总个体、三个地理种群、保护区覆盖、长期恢复和未来适生地模型；总个体不等于成熟个体，模型不等于已发生损失 |
| 外形补充与圈养寿命 | [北京野生动物园](https://www.bjwildlifepark.com/en/dwdaInfo_d5af4aaf75c543c594dec8cfc332e195.html) | 眼周蓝色、上翻鼻、深色与金色被毛、成年雄性长披毛、圈养寿命概览；鼻部适应解释不写成确定因果，圈养寿命不填野外指标 |
| 多层社会 | [Qi et al. 2014](https://doi.org/10.1038/ncomms6296) | 一雄多雌单元、繁殖带、全雄单元和暂时大聚集；研究地极值不等于典型群规模 |
| 移动与支撑物 | [Youlatos et al. 2021](https://doi.org/10.1007/s10329-021-00900-2) | 四足行走、攀爬、跳跃、悬垂及性别差异；一地结果不设全物种固定地栖比例 |
| 秦岭两年食性与活动 | [Guo et al. 2007](https://doi.org/10.1007/s10329-007-0048-z) | 果实种子、地衣、叶、树皮等比例和活动预算；局地平均不写成全物种固定菜单 |
| 神农架食物谱 | [Liu et al. 2013](https://doi.org/10.1002/ajp.22149) | 53 种植物、111 个食物部位和 6 种地衣；地点限制保留 |
| 秦岭冬季资源短缺 | [Zhao et al. 2020](https://doi.org/10.1016/j.gecco.2020.e00963) | 冬季地衣、树皮、芽鳞和叶比例；只用于冬季场景，不外推全年 |
| 繁殖参数 | [Qi et al. 2008](https://doi.org/10.1002/ajp.20480) | 47 只雌性、88 次出生、春季高峰、初产年龄和产仔间隔；秦岭局地参数不当作全物种固定率 |
| 出生季节 | [Xiang et al. 2017](https://doi.org/10.7717/peerj.2892) | 跨群体超过 90% 的出生发生于 3 至 5 月；不代表固定日期 |
| 共同哺乳 | [Xiang et al. 2019](https://doi.org/10.1126/sciadv.aav0499) | 一个自由活动研究群中超过 87% 幼仔接受非母亲哺乳；不可外推为普遍必然行为 |
| 冬季睡眠聚团 | [Zhang et al. 2011](https://doi.org/10.1007/s10329-011-0241-y) | 树上睡眠、低林冠与更紧密聚团；补食研究群的冬季结果不设全物种固定模式 |
| 隔离与遗传漂变 | [Luo et al. 2012](https://doi.org/10.1186/1471-2148-12-207) | 三个隔离种群、神农架低遗传多样性和遗传漂变；历史有效种群数不替代当前总量 |
| 三地全基因组结构 | [Kuang et al. 2019](https://doi.org/10.1093/molbev/msy220) | 54 个样本、三地种群与不同标记的谱系结构；不单独裁定生产亚种 |
| 四川历史分布变化 | [Dai et al. 2024](https://doi.org/10.1002/ece3.11270) | 四川省历史与 2001 至 2023 年分布对比；区域变化不替代全球 IUCN 趋势 |

## 仍然不确定或需后续更新的事项

1. **IUCN 评估已经超过十年**：生产实现前再次核对物种页 ID `19596/196491153`。若 IUCN 发布全新评估，等级、趋势、准则、评估年、数量和来源必须成套更新。
2. **亚种处理不统一**：MDD、ITIS 和国内专家资料的处理不同。现有 schema 保持物种级最稳妥；未来若增加亚种字段，应先确立仓库统一的分类权威顺序。
3. **全国总量不是成熟个体数**：2019 估计包含所有年龄，也汇合地区调查与推算。除非新 IUCN 或原始研究明确提供成熟个体范围，否则继续省略 `estimatedMatureIndividuals`。
4. **IUCN 趋势与近期调查时间不同**：正式 `decreasing` 反映 2015 评估的范围级判断，2019 调查反映长期保护后的新证据。详情页应同时展示，不强行合并成一个“当前真实趋势”。
5. **海拔口径不同**：1,000 至 4,100 米是全国记录，1,300 至 3,500 米是常见或建模范围。排序字段可用前者，正文保留两者。
6. **体尺是跨性别合并范围**：47 至 83 厘米和 6 至 19 千克不能当作典型个体。任何比较组件若要显示中位值，需要另找按性别分层的数据。
7. **野外寿命仍缺可靠范围**：现有 23 年以上或 25 至 30 年来自圈养资料。本轮不填 `lifespanYears`；后续若找到长期野外生命史研究，再单独更新。
8. **食性高度地方化**：地衣在部分冬季研究中占高比例，在最北端种群却可能缺席。故事和图 04 必须保留地点与季节限制。
9. **共同哺乳来自单一研究群**：87% 不是全物种参数。可以讲行为发现，不能进入通用繁殖概率字段。
10. **气候数字是模型情景**：13.94% 至 24.81% 是到 2070 年代的预测范围，不是已观察损失。情景、时间点或模型更新时应更换整段解释。
11. **图片不能判定分类或数量**：AI 图最多示意形态、环境和行为概念。它不能证明亚种、亲缘、群体大小、调查地点、数量或趋势。
12. **当前焦点需随最终 WebP 验收**：草案焦点按已查看的源 PNG 给出。任何裁切、重生成或构图调整都要重新检查主体是否落入详情页裁切安全区。

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 增加一次 `GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE`、`GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE` 和 `GOLDEN_SNUB_NOSED_MONKEY_SOURCES`，物种对象引用同一来源数组。
- 固定 `id: 'species-rhinopithecus-roxellana'`、`slug: 'golden-snub-nosed-monkey'`、主名“川金丝猴”、英文 “Golden Snub-nosed Monkey”与学名 `Rhinopithecus roxellana`。
- 分类路径为 `Animalia > Chordata > Mammalia > Primates > Cercopithecidae > Rhinopithecus > Rhinopithecus roxellana`。复用既有 Animalia、Chordata、Mammalia 和 Primates，只新增 Cercopithecidae、Rhinopithecus 和物种叶。
- 固定 `conservation('EN', 'decreasing', 2015, 'A2cd+4cd')`。搜索并排除 `VU`、`increasing`、`2021` 或 `2022` 被误写进四字段。
- `countries` 恰好只有“中国”，`endemicTo` 恰好只有“中国”，`regions` 明确三个隔离地理种群。
- `measurements` 使用成年头体长 47 至 83 厘米和体重 6 至 19 千克，note 分开雌雄与尾长；`metrics` 只放 `[47, 83]`、`[6, 19]`、`[1000, 4100]`。
- 不增加 `lifespanYears` 或 `estimatedMatureIndividuals`。前者只有圈养概览，后者没有与 2019 总个体估计相符的成熟个体数据。
- `storySections` 恰好 6 段，`featuredStats` 恰好 4 项，gallery 恰好 5 张，来源恰好 21 项。
- 2019 数量统计必须同时含年份、“总个体”和“不是成熟个体”三项边界。

### 图像与静态资源

- 六个源 basename 与本文表格一致：`01-snowy-forest-portrait`、`02-adult-male-morphology`、`03-montane-forest-habitat`、`04-winter-lichen-foraging`、`05-one-male-unit`、`06-noninvasive-visual-monitoring`。
- 运行时目录应含同 basename 的六张 WebP，封面使用 01，gallery 按 02 至 06 排列，不重复封面。
- 物种素材 README 应记录共同形态锚点、逐图最终 prompt、排除项、生成日期、源 PNG 到 WebP 的一一映射、转换参数、视觉检查和焦点。
- 更新 `src/assets/source/README.md` 总索引，但本研究任务不编辑该索引。
- 静态检查六组 PNG 和 WebP 的尺寸、3:2 比例、色彩空间、透明度、正确解码和格式；按仓库约定不启动 GUI 或无头浏览器。
- 内容检查：01 恰好一只成年雄性且左侧留白；02 恰好一只完整侧身雄性且尾不卷握；03 恰好一只远景个体和连续混交林；04 恰好一只个体取食真实树生地衣；05 恰好一雄两雌一幼；06 恰好一猴两名研究人员且无接触、项圈、投食和敏感信息。

### 分类测试与断言

- 增加完整档案断言：id、slug、双语主名、两个别名、学名、`featured: true`、日期和 21 个直接来源。
- 增加保护断言：`code === 'EN'`、`trend === 'decreasing'`、`assessedYear === 2015`、`criteria === 'A2cd+4cd'`。
- 增加分布断言：一个国家“中国”、`endemicTo` 为“中国”、恰好三个区域标签，并确认 `realms` 只有 `terrestrial`。
- 增加体尺断言：length `[47, 83]`、weight `[6, 19]`，note 同时出现雌雄分层和尾长；metrics 与 measurements 一致。
- 断言 `metrics` 不含 `lifespanYears` 和 `estimatedMatureIndividuals`，防止圈养寿命和总个体误入标准化字段。
- 增加内容断言：恰好 6 段故事、8 条关键事实、5 条威胁、5 条行动、4 张统计卡、5 张 gallery。
- 断言 2019 数量卡包含 `22,710–26,130`、年份、总个体口径和非成熟个体说明。
- 增加六条媒体路径断言，确保 01 是封面、02 至 06 不重名且均以 `.webp` 结尾。
- 增加分类边界断言：别名、taxonomy 和 story key 不含 `qinlingensis`、`hubeiensis` 或 `roxellana roxellana`，不在树中创建亚种叶。
- 增加路径断言：`Animalia > Chordata > Mammalia > Primates > Cercopithecidae > Rhinopithecus > Rhinopithecus roxellana`。
- 2026-08-25 研究开始时实测基线为 **39 个物种、117 个分类单元节点、156 个总节点**。若没有并行目录改动，集成后应为 **40 个物种、119 个分类单元节点、159 个总节点**。
- 同一基线下，`Animalia` 后代物种数应由 39 变 40，`Chordata` 由 34 变 35，`Mammalia` 由 21 变 22，`Primates` 由 1 变 2；新增 `Cercopithecidae` 与 `Rhinopithecus` 各有 1 个后代物种。并行改动进入后按实际树重算，不机械照抄旧总数。
- 保留全目录唯一性检查：id、slug、学名、分类叶、source URL、媒体路径和日期不能重复或缺失。

### 命令验证

- 运行 `npm run typecheck`，确认 source kind、diet type、realm、日期字面量、focal point 和媒体路径通过 TypeScript。
- 运行 `npm test`，确认川金丝猴档案、分类路径、节点计数与既有回归测试全部通过。
- 运行 `npm run build`，确认六张运行时 WebP 被构建工具解析。
- 用 `file`、ImageMagick 或仓库既有静态脚本检查 PNG 与 WebP，不启动 GUI 或无头浏览器。
- 运行 `git diff --check`，审阅目标文件、`git diff --stat` 和 `git status --short`，排除下载论文、临时文件、生成缓存和无关改动。

### TODO 收尾条件

- 只有物种数据、分类测试、六张源 PNG、六张运行时 WebP、物种素材 README、源图总索引、typecheck、test、build 和静态图片检查全部完成后，才从 `docs/todo.md` 删除“川金丝猴 *Rhinopithecus roxellana*”这一行。
- 研究稿、部分素材或未验证的数据对象都不构成 TODO 完成。
- 删除时精确匹配当前行，不修改相邻动物，也不把勾选替代为保留已完成条目，除非 TODO 文档另有约定。

## 最终实施建议

- 主记录保持物种级 *Rhinopithecus roxellana*，不替 MDD、ITIS 和国内三亚种处理的差异作仓促裁决。
- 保护四字段固定为 `EN / decreasing / 2015 / A2cd+4cd`。2019 年 22,710 至 26,130 只总个体和 2022 年 VU 建议只进入带年份的解释性内容。
- 体尺固定为成年头体长 47 至 83 厘米、体重 6 至 19 千克，note 分开雌雄并另列 51 至 104 厘米尾长；metrics 不填寿命和成熟个体。
- 六图围绕雪季雄性封面、成年雄性形态、山地森林、冬季地衣、一雄多雌单元和非侵入目视监测展开。图像不能证明亚种、亲缘、总量或趋势。
- 分类集成复用既有灵长目分支，只新增猴科、仰鼻猴属与物种叶。完成所有数据、素材、测试和构建验证后再删除 TODO。
