# 中国大鲵（*Andrias davidianus*）完整档案研究

- 检索与核验日期：2026-08-21
- 展示中文名：**中国大鲵**；英文名：**Chinese Giant Salamander**；常用中文别名：**大鲵、娃娃鱼**；原始组合：***Sieboldia davidiana***
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供科学边界
- 证据标准：接受名与高阶分类采用 American Museum of Natural History 的 Amphibian Species of the World（ASW）；灭绝风险采用 IUCN Red List 当前条目；国际贸易采用 CITES 现行附录和官方工作文件；中国国内保护采用国家林草局、农业农村部公告；分类、调查、摄食、繁殖和放流风险采用同行评议原始研究及 IUCN SSC 两栖类专家组行动计划
- 时间口径：本文所称“当前”截至 **2026-08-21**。IUCN 的评估日、发布年、CITES 附录生效日和分类数据库检索日分别记录，不互相替代
- 分类边界：除非明确写“狭义 *A. davidianus*”，本文中的“中国大鲵属物种 / Chinese *Andrias*”只表示中国境内多个已命名或候选种的集合；历史上以 *A. davidianus* 名义发表的数据不能自动归给狭义种
- 地理与安全边界：分布只到省域和山地区域尺度；`center` 只是地图视图焦点，不是现存点位、模式产地精确坐标或丰度中心。图像与文字不公开繁殖洞穴、救护点或可定位的野外个体坐标

## 结论摘要

### 当前接受名存在，但“旧中国大鲵”已被拆成物种复合群

仓库主记录应采用 ***Andrias davidianus* (Blanchard, 1871)**，分类为动物界—脊索动物门—两栖纲—有尾目—隐鳃鲵科—大鲵属。ASW 接受这一名称，列出原始组合 *Sieboldia davidiana*，并把模式产地解释为四川江油的中坝（Zhongba）。[ASW — *Andrias davidianus*](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias/Andrias-davidianus)

这个名称不能继续代表历史文献中从青海、甘肃到华南、华东的所有“中国大鲵”。2018 年大规模遗传研究发现至少五个、可能五至七个种级谱系；2019 年线粒体系统地理研究恢复七个地理上大致分隔的支系，历史博物馆样本又使华南大鲵 ***A. sligoi*** 恢复为有效种。2024 年以 30 个线粒体基因组进行的多模型种界研究保守支持至少七个、更多模型支持九个中国种级谱系，但作者明确要求未来以核基因和 SNP 数据复核线粒体划界。[Yan et al. 2018](https://doi.org/10.1016/j.cub.2018.04.004) [Liang et al. 2019](https://doi.org/10.1002/ece3.5014) [Turvey et al. 2019](https://doi.org/10.1002/ece3.5257) [Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007)

截至检索日，ASW 接受大鲵属 **6 个现生种**：日本大鲵及 5 个中国物种——*A. davidianus*、*A. sligoi*、*A. jiangxiensis*、*A. cheni* 和 2026 年描述的 *A. yaoluopingensis*。这仍少于 2024 年研究推断的至少七个、很可能九个中国种，说明“已命名种数”和“候选种级谱系数”不能混写。[ASW — *Andrias*](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias) [Jiang et al. 2026](https://doi.org/10.3897/zse.102.179377) [Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007)

### IUCN 当前公开状态：2020 年评估，2023-1 发布

IUCN 当前条目把 *Andrias davidianus* 列为 **极危 Critically Endangered（CR）**，种群趋势 **下降 Decreasing**，准则 **A2acde**。条目的 `Date assessed` 是 **2020-12-09**，正式引用卷期是 2023-1；因此仓库必须实现：

```ts
conservation: conservation('CR', 'decreasing', 2020, 'A2acde')
```

不能把 2023 写入 `assessedYear`，也不能沿用 2004 年旧条目的 `A2ad`。IUCN 的理由是过去三个世代下降超过 80%；世代长度估计 15 年，因此该时间窗约为 45 年。依据包括直接观察、分布/生境质量下降、实际或潜在利用，以及外来类群、杂交、病原体、污染物、竞争者或寄生物效应。[IUCN Red List — *Andrias davidianus*](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en)

这里必须同时保留评估边界。IUCN 条目称其采用从 *A. sligoi* 拆分后的“受限概念”，但 2020 年评估理由又明确依赖中国各 *Andrias* 种群的广泛衰退证据，当时其余多数谱系仍未命名。CR 是当前应展示的正式全球等级，却不是一个已经完全隔离出狭义 G1 谱系数据的独立种群模型；未来若 IUCN 为新种或狭义 *A. davidianus* 发布新评估，应整体更新等级、趋势、准则、范围和威胁，而不是只改年份。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Mao et al. 2024 action plan](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

### CITES 附录 I 与中国国家二级保护是两套制度

2026 年 3 月 5 日生效的现行 CITES 附录以属级列名 **`Andrias spp.`** 将所有大鲵属物种列入 **附录 I**；CITES 动物委员会资料表把 *A. davidianus* 的列入年份记为 **1975**。附录 I 对以商业为主要目的的国际贸易实施最严格控制，只在例外、非商业等符合公约条件且取得相应许可时允许跨境转移；它不是 IUCN 的 CR 等级，也不能简化成“任何移动在任何情况下都绝对禁止”。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES AC33 Inf. 15](https://cites.org/sites/default/files/documents/E-AC33-Inf-15.pdf)

中国 2021 年《国家重点保护野生动物名录》把“大鲵（仅限野外种群）”列为国家二级重点保护野生动物。农业农村部随后明确说明，野外种群与人工繁育种群适用不同管理措施。该名录仍使用 *A. davidianus* 这一单一名称，不能据此假定所有后来拆分的新种已经获得无歧义的独立名录覆盖；产品只陈述现行条目，不作法律扩张解释。[国家林业和草原局、农业农村部 2021 年第 3 号公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [农业农村部贯彻通知](https://cjyzbgs.moa.gov.cn/tzgg/202104/t20210414_6365902.htm)

## 狭义种界与分布实现

### 为什么不能照抄旧广布地图

ASW 的物种页仍概括从青海、甘肃、山西南部到四川和云南北部的山溪分布，并列出日本本州引入种群和台湾可能引入记录；同一页面又醒目标注：这个名义种是具有强流域忠诚的物种复合群，2022 年以前文献应谨慎使用。IUCN 2020 评估也保留了较宽的省域范围，但详细文本承认多处记录可能属于未描述种或人为放流个体。[ASW — *A. davidianus*](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias/Andrias-davidianus) [IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en)

2024 年研究把狭义 *A. davidianus* 对应到 Liang 等人的 G1 支系。其可归属样本来自四川麻边、眉山洪雅和雅安；而此前常并入同种的陕西、山西、河南、湖南、云南等 G2 样本被视为另一未命名候选种。模式标本无法提取古 DNA，但模式产地中坝位于四川盆地西缘，与 G1 同处连续生态区，距离已知 G1 样本约 200 km；G2 则位于 400 km 以外的秦岭系统。因此“*A. davidianus* = G1”是结合模式产地与系统地理的当前最佳假说，不是模式标本遗传鉴定的直接结果。[Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007) [Turvey et al. 2019](https://doi.org/10.1002/ece3.5257)

实现应采用保守原生范围：

- `countries: ['中国']`，`endemicTo: ['中国']`；日本本州和台湾可能的引入记录只写在说明里，不进入原生国家列表。
- `regions` 只写“四川盆地西缘与西南缘山地（狭义 G1 谱系）”和“长江上游流域”，不把整个长江、黄河、珠江及东南河流历史范围画给狭义种。
- `range` 明确区分“有归属证据的样本地区”和“确认现存繁殖种群”。麻边、洪雅/眉山、雅安的样本证据不等于三处今天都仍有野生繁殖种群；中坝模式产地可能已局地绝迹。
- 推荐 `center: { lat: 29.8, lng: 103.3 }`，只用于打开四川盆地西缘/西南缘视图；它不是公开洞穴坐标、模式产地坐标或野外采样点。

## 生境、外形与完全水栖生活

IUCN 将系统归为 Freshwater，主要生境为永久性河流、溪流及内陆喀斯特/地下水文系统。行动计划把中国大鲵属的典型环境概括为植被良好、谷坡较陡的清凉山溪，流速可从缓到急，岸边有大石、岩穴、裂隙或喀斯特洞穴。结构化 `realms` 只应使用 `freshwater`：成年大鲵终生水栖，邻近森林影响遮阴、径流和水质，但这不使它成为陆生物种。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

野生型图像应稳定表现大鲵属的共同形态，而不是伪造一个肉眼可诊断的狭义种：[Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf) [Jiang et al. 2026](https://doi.org/10.3897/zse.102.179377)

- 头部宽、扁平，眼睛极小且无活动眼睑；口裂宽而弯，不画突出犬齿或长舌。
- 身体背腹扁平，皮肤无鳞、粗糙颗粒感明显；体侧有宽大的皱褶，尾部侧扁成桨状。
- 四肢短而粗壮；前足 4 趾、后足 5 趾。成年个体没有墨西哥钝口螈式外鳃，幼体才有外鳃。
- 野生型采用深橄榄褐、巧克力褐至近黑的斑驳色，颜色受光照和环境影响；不使用养殖白化、金色或其他人工色型，也不凭橙色斑块声称与日本大鲵可靠区分。
- 大鲵属多个中国种外形高度隐蔽相似；任何生成图都只是档案示意，不能代替模式材料、遗传检测或专家鉴定。

## 体型、寿命与量化字段取舍

中国大鲵属常被概括为可接近 1.8—2 m、超过 50 kg，圈养中国谱系有超过 55 年的记录；IUCN 还用估计的 15 年世代长度完成风险评估。这些数字大多来自复合群尚未拆分时期、养殖来源或未明确谱系的圈养个体。2019 年恢复的 *A. sligoi* 甚至可能包含历史上最大的个体，因此把“世界最大两栖动物”“1.8 m”“50 kg”“55 年”硬编码给狭义 *A. davidianus* 会制造错误的种级确定性。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Turvey et al. 2019](https://doi.org/10.1002/ece3.5257) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

因此推荐：

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `measurements.length` | 不填 | 历史全长极值与普通成体、狭义 G1 及其他中国种混杂，schema 不能表达谱系、性别、来源和测量法 |
| `measurements.weight` | 不填 | 超过 50 kg 的大型个体不能可靠归入狭义种，养殖状态也会改变体况 |
| `metrics.adultLengthCm` | 不填 | 没有经过现代分类校正的狭义种成体范围 |
| `metrics.adultMassKg` | 不填 | 同上；不以历史极值冒充种级正常范围 |
| `metrics.lifespanYears` | 不填 | 55+ 年是圈养中国 *Andrias* 谱系记录，不是狭义种野外寿命范围 |
| `metrics.elevationM` | 不填 | 旧文献 100—1,700 m 乃至未经确认的 4,200 m 记录跨越复合群和不确定点位 |
| `metrics.estimatedMatureIndividuals` | 不填 | 无狭义种全球成熟个体估计；调查发现数、养殖存栏和放流数均不能替代 |
| `featuredStats` | 可放带限定的保护数字 | IUCN 下降幅度、复合群调查和历史放流数据具有教育价值，但每项 note 必须声明评估/谱系/年代边界 |

`measurements: {}` 与 `metrics: {}` 不是缺资料疏漏，而是避免把复合群数字错误归种的主动选择。

## 食性与摄食机制

行动计划汇总的野外食物记录包括淡水蟹、虾、鱼、蛙和其他水生无脊椎动物，也有蛇、小型水栖哺乳动物、水鸟及同类相食记录；但作者明确指出很多生态资料无法归给某一个中国 *Andrias* 种。结构化食物应只保留“淡水甲壳类、鱼与蛙、其他水生无脊椎动物、偶见其他小型脊椎动物”这些宽类别，不能让罕见猎物成为典型菜单，也不能宣称狭义种已有完整食谱。[Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

摄食机制有更直接的实验依据。Heiss 等对圈养“*A. davidianus*”进行 CT、三维运动学、高速摄影和流体模拟，发现它主要通过迅速分开宽阔的上、下颌表面，使水和猎物被吸入口中；舌骨运动更多负责容纳已经获得向后动量的水体。该研究发表于复合群拆分前，受试个体谱系未按现代种界核验，因此可以稳健写“颌驱动吸入式摄食是中国大鲵属已观察到的机制”，但不能把具体时间、张口距离或性能排名结构化为狭义种常数。[Heiss et al. 2013](https://doi.org/10.1098/rsif.2012.1028)

## 繁殖与雄性护卵

中国大鲵属在夏末至初秋进入繁殖期，受配雄性会清理只有单一入口的水下洞穴或岸洞。雌性在洞内产下串珠状卵，雄性体外受精；占据洞穴的“den master”可能与多只雌性繁殖，并在孵化期扇尾、翻动卵串、移除或摄食坏死/未受精卵。2018 年数字监控研究在模拟自然环境中直接记录了雄性推沙清巢、冲淋、求偶、产卵和护卵行为。[Luo et al. 2018](https://doi.org/10.3390/ani8100161) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

精确的“300—560 枚”“300—1,500 枚”“50—60 天”“5—8 mm”等数字来自不同年代、养殖/半自然条件和未核验谱系，行动计划也提示无法种级归属。因此对象与 `featuredStats` 不填窝卵数、孵化天数或成熟年龄；故事和图片只保留“水下洞穴、外受精、雄性守护卵串”的行为框架，并明确它是中国 *Andrias* 层面的证据。第 05 图不能把数百枚卵全部画出，也不能把外鳃幼体画成守巢成体。

## 衰退、探测与“野外发现数”边界

2013—2016 年跨 16 个省级行政区、97 个调查地的范围级项目配合 2,872 份访谈，只在 4 处发现 24 只大鲵；很多、甚至全部个体都可能是附近养殖场逃逸或放流来源。这个数字揭示历史范围内的严重衰退，却不是“全球只剩 24 只”，也不能直接作为狭义 *A. davidianus* 的个体数。[Turvey et al. 2018](https://doi.org/10.1016/j.cub.2018.04.005) [Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007)

后续分析发现，许多没有检测到大鲵的河段仍保有看似适宜的理化和结构条件，电鱼、毒捕等证据却广泛存在；这支持过度利用是范围级崩落的主要驱动，而不是所有空缺地点都已经没有生境。一次目视、诱捕或 eDNA 未检出也不等于局地灭绝，调查必须报告方法、努力量、重复次数、检测概率、遗传标记和放流背景。[Tapley et al. 2021](https://doi.org/10.1017/S0030605320000411) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

## 养殖、无序放流与遗传污染

2000 年代形成的大规模食用养殖业需要野生创始个体，推动跨地区采集和运输。养殖场内有数以百万计的大鲵，不表示野生种群恢复；其谱系、杂交状态和来源常不清楚。2018 年研究在养殖个体中发现北方谱系占优势，并指出养殖、贸易与跨区释放正在抹平原有流域遗传结构。[Cunningham et al. 2016](https://doi.org/10.1017/S0030605314000842) [Yan et al. 2018](https://doi.org/10.1016/j.cub.2018.04.004)

Shu 等整理 268 条正式放流记录，发现 2002 年至 2019 年 10 月至少 **287,840 只**养殖大鲵被放到中国 16 个省级行政区、98 个县市；超过 10% 的放流点不在模型预测适宜生境内。六个抽样放流点各自检出 1—4 个谱系，多数个体并非当地来源。这个记录可能低估总放流量，但不能转换成“成功建立的野外个体数”；它证明的是无遗传筛查放流的规模和风险。[Shu et al. 2021](https://doi.org/10.16373/j.cnki.ahr.200080)

放流还可能把养殖环境中的病原体带入野外。行动计划把杂交、遗传同质化、竞争/生态替代和病原传播列为相互关联的风险，并建议停止无证据、无谱系和健康筛查的放流。保护行动的目标不是“放得越多越好”，而是确认物种、原产地、健康状态、受纳生境、当地现存种群和长期监测后再依据 IUCN 转移指南决策。[Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf) [Shu et al. 2021](https://doi.org/10.16373/j.cnki.ahr.200080)

## 主要威胁

1. **过度利用与非法捕捉**：历史食用、地方和区域贸易，以及早期养殖场补充野生亲本，使优质生境中的种群也能被捕空。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Cunningham et al. 2016](https://doi.org/10.1017/S0030605314000842) [Tapley et al. 2021](https://doi.org/10.1017/S0030605320000411)
2. **河流生境丧失与退化**：水坝和取水改变流量与连通性；采矿、工业/生活污染、道路与城市化、河岸林破坏和泥沙淤积损害清凉、含氧且有岩穴的溪流。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)
3. **跨谱系放流、杂交和遗传同质化**：外地养殖个体或杂交个体进入原生流域，可能稀释独特谱系、竞争或替代本地种，并让模式已模糊的物种更难恢复。[Yan et al. 2018](https://doi.org/10.1016/j.cub.2018.04.004) [Shu et al. 2021](https://doi.org/10.16373/j.cnki.ahr.200080)
4. **病原体传播**：养殖、运输和无健康筛查放流可能传播蛙病毒等病原；现有证据不支持把疾病写成所有野外衰退的唯一或首要原因，但它是必须预防的高后果风险。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)
5. **极小、破碎且难探测的残存种群**：IUCN 推断超过一半种群位于无法自然扩散相连的斑块，低密度与隐蔽生活使配偶相遇、监测和救援更加困难。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en)
6. **分类与政策错位**：未命名谱系难以独立进入红色名录、法律、预算、谱系管理和保种计划；把所有个体继续写成 *A. davidianus* 会掩盖已经消失的地方种。[Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007)
7. **气候变化及极端事件**：升温、降雨时序改变、洪水和干旱可能改变冷水溪流、洞穴水文与繁殖窗口；行动计划将其列为需研究和监测的潜在威胁，不能在缺乏狭义种模型时伪造确定损失百分比。[Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

## 推荐保护行动

1. 立即停止没有遗传来源、病原筛查、受纳地调查、风险评估和长期监测的养殖大鲵放流；后续转移严格按物种和保护单元设计。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Shu et al. 2021](https://doi.org/10.16373/j.cnki.ahr.200080)
2. 组合线粒体、核基因/SNP、形态和可追溯来源鉴定狭义 G1 与其他谱系；优先为未命名谱系寻找历史材料和非致死类型证据，并建立独立谱系档案。[Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007)
3. 对确认的野生原生种群及其上下游建立保密、持续的栖息地保护：维护天然流量、清凉高氧水质、岩石岸洞、河岸林和水系连通，控制污染、采矿、坝体和泥沙影响。[Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)
4. 用标准化目视/洞穴监测、eDNA、非致死遗传采样和适当的个体标记联合调查；记录重复次数、检测概率和放流历史，不公开敏感洞穴坐标。[Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)
5. 建立与商业养殖完全隔离的保种群、谱系家谱、组织/遗传资源库和健康档案；不同物种与流域保护单元分开饲养，避免以杂交或来源不明个体作为恢复亲本。[IUCN](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)
6. 强化野外捕捉执法、养殖许可、个体标识和全链条来源追踪；以 CITES 附录 I 许可核验跨境转移，并把野生、保种和商品养殖数据分开。[CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [农业农村部通知](https://cjyzbgs.moa.gov.cn/tzgg/202104/t20210414_6365902.htm)
7. 与溪流周边社区共同减少电鱼、毒捕和非法消费，建立发现、救护和冲突报告机制；救护个体在放归前先确认物种、原产地和健康状态。[Tapley et al. 2021](https://doi.org/10.1017/S0030605320000411) [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf)

## 推荐的故事章节

1. **一个旧名字，多条古老水系**：从模式产地和 G1 进入至少七个、可能九个中国谱系，解释为什么“广布中国大鲵”不再是安全的科学写法。
2. **把身体贴进冷水与岩缝**：宽扁头部、皮肤褶皱、侧扁尾和完全水栖生活共同适应清凉山溪；外形却不能可靠区分隐存种。
3. **先动颌，再让水带来猎物**：用高速摄影与流体模拟解释颌驱动吸入式摄食，同时把食物清单限定在复合群证据。
4. **洞穴里守卵的雄性**：雄性清巢、外受精、扇尾和照料卵串；不把养殖条件下的精确窝卵数包装成狭义种常数。
5. **97 处河流，只见 24 只**：范围级调查揭示崩落，也提醒这些发现可能来自逃逸或放流，不能等同狭义种全球数量。
6. **放流不是把数字倒进河里**：至少 287,840 只跨区放流与 1—4 个谱系混在同一地点，说明恢复必须先解决分类、健康、受纳地和监测。

## 推荐的关键事实

1. 当前接受名为 *Andrias davidianus*；模式产地是四川江油中坝，但模式标本未能获得可用古 DNA。
2. 截至 2026-08-21，大鲵属接受 6 个现生种，其中 5 个在中国；研究仍支持至少 7 个、很可能 9 个中国种级谱系。
3. 狭义 *A. davidianus* 最合理地对应四川盆地西缘/西南缘的 G1；旧广布记录混入其他种和人为放流个体。
4. IUCN 当前为 CR、趋势下降、准则 A2acde；评估日是 2020-12-09，发布年是 2023。
5. 大鲵属全部列入 CITES 附录 I；中国现行名录把“大鲵（仅限野外种群）”列为国家二级重点保护野生动物。
6. 成年个体完全水栖，具有宽扁头部、细小无睑眼、粗糙无鳞皮肤、明显体侧褶皱和侧扁尾。
7. 实验显示其捕食可由宽阔上下颌迅速分离产生吸力；食谱和性能参数尚不能无条件归给狭义种。
8. 雄性占据并清理水下巢穴，体外受精后守护卵串；精确卵数与孵化期多来自未核验谱系或模拟自然环境。
9. 2013—2016 年 97 处调查仅发现 24 只大鲵，且来源可能是养殖逃逸/放流；这不是狭义种全球总数。
10. 2002—2019 年正式记录至少放流 287,840 只养殖大鲵；没有谱系与健康筛查的放流可能加速地方性灭绝。

## 应删除或避免的说法

- 不写 `assessedYear: 2023`、`criteria: 'A2ad'` 或趋势 unknown；当前正确实现是 `2020 / A2acde / decreasing`。
- 不把 IUCN CR、CITES 附录 I、中国国家二级保护混成同一个“濒危级别”。
- 不说“CITES 附录 I 等于任何跨境移动都绝对禁止”；应写商业国际贸易受最严格限制，例外转移仍需相应许可。
- 不把历史上的 *A. davidianus* 广布范围照搬给狭义 G1，也不把陕西 G2、华南 *A. sligoi*、江西 *A. jiangxiensis*、安徽 *A. cheni/A. yaoluopingensis* 合并回去。
- 不把日本本州引入个体或台湾疑似引入记录放进原生国家列表；不把养殖场、市场、放流点当原生分布证据。
- 不说模式标本已经通过 DNA 归入 G1；目前是基于模式产地与相邻生态区的最佳关联假说。
- 不把“大鲵属 6 个接受种”写成“中国已有 6 个命名种”；其中一个是日本大鲵，中国当前命名种为 5 个。
- 不把“至少 7、很可能 9 个候选种”写成已经全部正式描述的分类结论；线粒体划界仍需核基因数据复核。
- 不把 1.8—2 m、50—60 kg、55+ 年、5—6 岁成熟或 100—1,700 m 填入狭义种的结构化测量/寿命/海拔字段。
- 不把“中国大鲵是世界最大两栖动物”作为狭义种无争议排名；拆分后大型历史记录可能属于 *A. sligoi* 或未知谱系。
- 不把 24 / 97 写成全球仅剩 24 只，也不把养殖场数百万只或至少 287,840 只历史放流写成野外种群恢复。
- 不把一次 eDNA 或目视未检出当作灭绝证明；同样不把一次检出在没有遗传和来源核验时当原生种群证明。
- 不把蟹、鱼、蛙、蛇、水鸟等全部写成每只狭义种的固定菜单；目前食性大多是中国 *Andrias* 综合记录。
- 不填固定窝卵数、孵化天数、成熟年龄或繁殖水温；不把模拟自然养殖环境等同于狭义种野外种群。
- 不画成年外鳃、六趾或鱼鳞，不画白化养殖色型、卡通笑脸、巨大牙齿、长舌、魔法漩涡或血腥吞食。
- 不在图像或文字中展示精确繁殖洞穴、经纬度、路牌、保护站名或便于盗捕者定位的背景。

## 1 张封面与 5 张 gallery 的最终科学图像方案

六张图均由 Codex 内置图像生成工具制作，为大鲵属通用形态的编辑示意，不代表经过遗传核验的狭义 *A. davidianus*、真实点位、巢穴、捕食事件或调查记录。源图为 1536×1024、8-bit sRGB、无 alpha 的 PNG，运行时图为同尺寸 WebP，统一信用为 `Fauna Atlas · AI 生成原创图像`。

| 帧 | 最终运行时路径 | 叙事用途与证据边界 |
| --- | --- | --- |
| 01 | `./images/species/chinese-giant-salamander/01-rocky-stream-portrait.webp` | 清凉岩溪肖像；完整成体位于右侧，左侧保留封面文字负空间，不对应真实点位 |
| 02 | `./images/species/chinese-giant-salamander/02-flattened-head-and-skin-folds.webp` | 宽扁头、小眼、粗糙皮肤和侧褶近景；成年个体无外鳃 |
| 03 | `./images/species/chinese-giant-salamander/03-forest-stream-habitat.webp` | 开阔水下森林山溪与巨石庇护；个体保持小尺度，强调完整溪流生境 |
| 04 | `./images/species/chinese-giant-salamander/04-nocturnal-crab-encounter.webp` | 夜间仅一只大鲵和一只远处淡水蟹的非接触相遇；不声称记录捕食 |
| 05 | `./images/species/chinese-giant-salamander/05-den-master-egg-guarding.webp` | 雄性守护串珠状卵的行为示意；性别来自行为情境，不承诺固定窝卵数 |
| 06 | `./images/species/chinese-giant-salamander/06-edna-water-sampling.webp` | 两名研究者进行非接触水样调查；eDNA 线索不能单独证明原生种群恢复 |

共同形态锚点、六张实际最终提示词、生成日期、源图映射、转换参数和静态验收记录，以 [`src/assets/source/species/chinese-giant-salamander/README.md`](../../src/assets/source/species/chinese-giant-salamander/README.md) 为唯一实现记录。第 03、04 帧在独立视觉复核后从头重生成，以排除重复纹理、额外动物和距离歧义。

## 研究阶段的来源常量与字段草案

以下代码块保存研究阶段对字段取舍和叙事边界的完整草案，便于后续修订时追溯，不是要求逐字复制的第二份实现。最终来源标题、媒体路径与用户可见文案以 [`src/data/species.ts`](../../src/data/species.ts) 为准；最终图像提示词以物种素材 README 为准。

```ts
const CHINESE_GIANT_SALAMANDER_SOURCE_DATE = '2026-08-21' as const;
const CHINESE_GIANT_SALAMANDER_CONTENT_DATE = '2026-08-21' as const;

const CHINESE_GIANT_SALAMANDER_SOURCES = [
  {
    title: 'IUCN Red List — Andrias davidianus (assessed 2020; published 2023-1)',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Andrias davidianus',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias/Andrias-davidianus',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Amphibian Species of the World — Andrias',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Yan et al. 2018 — Hidden extinction of cryptic Chinese giant salamander species',
    url: 'https://doi.org/10.1016/j.cub.2018.04.004',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Liang et al. 2019 — Phylogeographic patterns and conservation implications',
    url: 'https://doi.org/10.1002/ece3.5014',
    kind: 'distribution',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Turvey et al. 2019 — Historical museum collections clarify cryptic species radiation',
    url: 'https://doi.org/10.1002/ece3.5257',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Marr et al. 2024 — Species delimitation for Chinese giant salamanders',
    url: 'https://doi.org/10.1093/evolinnean/kzae007',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Jiang et al. 2026 — Andrias yaoluopingensis from Yuexi, Anhui',
    url: 'https://doi.org/10.3897/zse.102.179377',
    kind: 'taxonomy',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'CITES AC33 Inf. 15 — Amphibian species in the CITES Appendices',
    url: 'https://cites.org/sites/default/files/documents/E-AC33-Inf-15.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2024 — A conservation action plan for Chinese giant salamanders',
    url: 'https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'China 2021 — List of Wildlife under Special State Protection',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Turvey et al. 2018 — Imminent extinction in the wild of the world\'s largest amphibian',
    url: 'https://doi.org/10.1016/j.cub.2018.04.005',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Tapley et al. 2021 — Range-wide decline of Chinese giant salamanders',
    url: 'https://doi.org/10.1017/S0030605320000411',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Cunningham et al. 2016 — Chinese giant salamander farming industry',
    url: 'https://doi.org/10.1017/S0030605314000842',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Shu et al. 2021 — Disordered translocation hastens local extinction',
    url: 'https://doi.org/10.16373/j.cnki.ahr.200080',
    kind: 'conservation',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Heiss et al. 2013 — Jaw-powered suction feeding biomechanics',
    url: 'https://doi.org/10.1098/rsif.2012.1028',
    kind: 'ecology',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
  {
    title: 'Luo et al. 2018 — Breeding behaviour under digital monitoring',
    url: 'https://doi.org/10.3390/ani8100161',
    kind: 'ecology',
    accessedAt: CHINESE_GIANT_SALAMANDER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-andrias-davidianus',
  slug: 'chinese-giant-salamander',
  names: {
    zh: '中国大鲵',
    en: 'Chinese Giant Salamander',
    aliases: ['大鲵', '娃娃鱼', 'Sieboldia davidiana'],
  },
  scientificName: 'Andrias davidianus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Amphibia', '两栖纲'),
    taxon('Caudata', '有尾目'),
    taxon('Cryptobranchidae', '隐鳃鲵科'),
    taxon('Andrias', '大鲵属'),
  ),
  conservation: conservation('CR', 'decreasing', 2020, 'A2acde'),
  distribution: {
    realms: ['freshwater'],
    continents: ['亚洲'],
    regions: ['四川盆地西缘与西南缘山地（狭义 G1 谱系）', '长江上游流域'],
    countries: ['中国'],
    endemicTo: ['中国'],
    range:
      '现代种界下，狭义 Andrias davidianus 最合理地对应四川盆地西缘与西南缘的 G1 谱系；具归属证据的遗传或历史博物馆样本来自四川麻边、眉山洪雅和雅安，模式产地为四川江油中坝，但这些记录不等于各地今天都仍有野生繁殖种群。旧的跨中国广布资料混入其他大鲵属物种、未命名谱系和养殖放流个体；日本本州有引入记录，台湾记录可能为引入，均不属于原生范围。',
    center: { lat: 29.8, lng: 103.3 },
  },
  habitats: [
    {
      name: '森林山谷中的清凉岩石溪流',
      realm: 'freshwater',
      description:
        '终生生活在清澈、凉爽且从缓流到急流的山溪；河岸林提供遮阴并维护水温和水质，巨石、砾石与天然河床维持隐蔽和觅食空间。',
      isPrimary: true,
    },
    {
      name: '岩石岸洞、巨石下空隙与喀斯特水系',
      realm: 'freshwater',
      description:
        '利用有持续水流的水下洞穴、岸壁裂隙和巨石下空腔休息、避敌与繁殖；具体洞穴位置属于敏感保护信息。',
      isPrimary: true,
    },
  ],
  measurements: {},
  diet: {
    types: ['carnivore'],
    foods: ['淡水蟹与虾', '鱼类与蛙类', '其他水生无脊椎动物', '偶见其他小型脊椎动物'],
    description:
      '机会性水生肉食者，以宽颌快速分离产生的吸流将猎物带入口中；食物记录大多来自尚未拆分物种复合群的研究，狭义 A. davidianus 的完整野外食谱仍未建立。',
  },
  activity: [
    '成年个体终生水栖；仿生态观察多记录夜间活动，但不能据此把所有野生种群都写成固定夜行性',
    '依靠伏击和颌驱动吸入式摄食捕捉水生猎物',
    '白天或受扰时利用岸洞、裂隙和巨石下空腔隐蔽',
    '繁殖雄性清理单入口水下巢穴并在体外受精后守护卵串',
    '自然扩散受流域、山地屏障和破碎河段限制，不能靠陆地长距离迁移',
  ],
  tags: ['中国特有种', 'IUCN极危', 'CITES附录I', '隐鳃鲵科', '完全水栖', '物种复合群', '雄性护卵', '遗传筛查放流'],
  summary: '中国四川上游山溪中的极危巨型水栖两栖动物；它只是历史“广布中国大鲵”物种复合群中的狭义一支。',
  description:
    '中国大鲵是大鲵属中以四川江油中坝为模式产地的中国特有种，具有宽扁头部、粗糙无鳞皮肤、明显体侧褶皱和侧扁尾，成年终生生活在清凉岩石溪流与水下岸洞中。现代遗传研究显示，过去统称 Andrias davidianus 的中国种群实际包含多个古老、流域分隔的物种；狭义种最合理地对应四川盆地西缘和西南缘的 G1 谱系。IUCN 当前将其列为极危、趋势下降，过度利用、河流退化、破碎化以及养殖个体无序放流带来的杂交、遗传同质化和病原风险共同威胁其恢复。',
  storySections: [
    {
      key: 'species-complex',
      label: '隐存多样性',
      title: '一个旧名字，曾盖住多条古老水系',
      body: '遗传研究把历史“广布中国大鲵”拆成至少七个、很可能九个中国种级谱系；截至 2026 年只有五个中国物种获得名称。狭义 Andrias davidianus 对应四川盆地西缘与西南缘的 G1，而很多旧记录属于其他种、未命名谱系或跨区放流个体。',
    },
    {
      key: 'aquatic-body',
      label: '完全水栖',
      title: '把宽扁身体贴进冷水与岩缝',
      body: '细小无睑眼、宽扁头部、粗糙皮肤褶皱、短肢和侧扁尾适合在溪底与岩穴间隐蔽和推进。河岸森林帮助维持阴凉与水质，但成年个体并不登陆生活；这些共同外形也无法让人只凭照片区分隐存种。',
    },
    {
      key: 'jaw-powered-suction',
      label: '摄食力学',
      title: '先动宽颌，再让水带来猎物',
      body: '高速摄影和流体模拟显示，上下颌宽面迅速分离会给口前水体向后的动量，把蟹、鱼或其他小型猎物吸入口中。受试个体没有按现代谱系核验，因此机制可作为中国大鲵属证据，具体性能参数不应变成狭义种常数。',
    },
    {
      key: 'den-master',
      label: '雄性护卵',
      title: '洞穴的主人，也守着下一代',
      body: '繁殖雄性清理单入口水下洞穴，雌性产下串珠状卵后由雄性体外受精。守巢雄性扇尾、翻动卵串并清除坏卵；精确窝卵数和孵化时间多来自未核验谱系或模拟自然环境，不能当作狭义种固定日历。',
    },
    {
      key: 'range-wide-collapse',
      label: '范围级崩落',
      title: '97 处河流，只发现 24 只大鲵',
      body: '2013—2016 年横跨 16 个省级行政区的调查在 97 处地点只发现 24 只，而且很多、甚至全部可能来自养殖逃逸或放流。它说明中国大鲵属在历史范围内严重衰退，却不是狭义 A. davidianus 的全球总数。',
    },
    {
      key: 'release-is-not-restoration',
      label: '科学恢复',
      title: '放流，不是把一个数字倒进河里',
      body: '2002—2019 年正式记录至少 287,840 只养殖大鲵被跨区放流；抽样地点可混有一至四个谱系。真正的恢复必须先确认物种与原产地，完成健康和受纳地评估，再以长期遗传、eDNA 与个体监测检验结果。',
    },
  ],
  keyFacts: [
    '当前接受名为 Andrias davidianus，模式产地是四川江油中坝；模式标本未能获得可用古 DNA。',
    '截至 2026 年，大鲵属有六个接受种，其中五个为中国物种；研究仍支持至少七个、很可能九个中国种级谱系。',
    '狭义 A. davidianus 最合理地对应四川盆地西缘与西南缘的 G1，旧广布记录混有其他种和人为放流个体。',
    'IUCN 当前为 CR、趋势下降、准则 A2acde；评估日是 2020 年 12 月 9 日，2023 年只是发布年。',
    '大鲵属全部列入 CITES 附录 I；中国现行名录把大鲵野外种群列为国家二级重点保护。',
    '成年个体完全水栖，具有宽扁头部、极小无睑眼、粗糙无鳞皮肤、体侧褶皱和侧扁尾。',
    '实验支持颌驱动吸入式摄食；现有食性与性能数据大多尚不能严格归给狭义种。',
    '雄性清理水下洞穴并在体外受精后守护卵串；精确窝卵数和孵化期不应当作狭义种常数。',
    '范围级调查的 24 只发现数与至少 287,840 只历史放流数都不能替代狭义种野外种群估计。',
  ],
  threats: [
    '为食用、地方与区域贸易以及养殖亲本补充而进行的过度利用和非法野外捕捉',
    '水坝、取水、污染、采矿、城市化、河岸林破坏和泥沙淤积造成的溪流退化与阻隔',
    '来源不明养殖个体跨流域放流造成的杂交、遗传同质化、竞争和生态替代风险',
    '养殖、运输与无健康筛查放流可能把蛙病毒等病原带入野外种群',
    '极小且严重破碎的残存种群面临低密度、配偶相遇困难和局地随机事件风险',
    '未命名物种与现有法律、红色名录和保种计划错位，导致独特谱系被错误合并管理',
    '气候变暖及洪水、干旱和降雨时序变化对冷水溪流与繁殖水文的潜在压力',
  ],
  conservationActions: [
    '停止无遗传来源、健康筛查、受纳地评估和长期监测的养殖大鲵放流',
    '结合线粒体、核基因或 SNP、形态和来源记录鉴定物种及流域保护单元',
    '保护确认原生种群上下游的天然流量、清凉水质、岩石岸洞、河岸林和水系连通',
    '组合标准化目视调查、eDNA、非致死遗传采样与个体标记，并对敏感点位保密',
    '建立与商业养殖隔离、按物种和谱系分开的保种群、家谱、组织库和健康档案',
    '加强野外捕捉执法、养殖许可、个体标识、来源追踪和 CITES 附录 I 许可核验',
    '与溪流周边社区合作减少电鱼、毒捕和非法消费，规范发现、救护与放归流程',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'named-chinese-species',
      label: '已命名中国大鲵属物种',
      value: '5',
      unit: '种',
      note: '截至 2026-08-21；大鲵属现生种总数为 6，另含日本大鲵，而研究推断中国至少有 7 个、很可能 9 个种级谱系',
    },
    {
      key: 'iucn-decline',
      label: 'IUCN 推断历史下降',
      value: '>80',
      unit: '%',
      note: '2020 评估的过去三个世代，世代长度估计 15 年；证据仍部分覆盖分类未完全解决的中国 Andrias',
    },
    {
      key: 'range-survey',
      label: '范围调查发现',
      value: '24 / 97',
      unit: '只 / 处',
      note: '2013—2016 年中国大鲵属范围级调查；发现个体可能来自养殖逃逸或放流，不是全球剩余数量',
    },
    {
      key: 'documented-releases',
      label: '正式记录的历史放流',
      value: '≥287,840',
      unit: '只',
      note: '2002—2019 年 10 月、16 个省级行政区和 98 个县市的养殖大鲵记录；可能低估，且不代表存活或建立种群',
    },
  ],
  media: {
    image: './images/species/chinese-giant-salamander/01-rocky-stream-portrait.webp',
    alt: '清澈的中国山地森林溪流中，一只完整的深褐斑驳成体中国大鲵伏在右侧巨石下，左侧保留开阔水体与砾石',
    focalPoint: { x: 0.72, y: 0.63 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/chinese-giant-salamander/02-flattened-head-and-skin-folds.webp',
        alt: '一只成体中国大鲵的水下近景，宽扁头部、极小眼睛、粗糙皮肤和身体侧面的褶皱清晰可见，头后没有外鳃',
        title: '一副贴近水底的宽扁身体',
        caption: '小眼、宽头、粗糙皮肤和侧褶是成体形态核心；三对羽状外鳃属于幼体阶段，不会终生保留。',
        focalPoint: { x: 0.7, y: 0.56 },
      },
      {
        image: './images/species/chinese-giant-salamander/03-forest-stream-habitat.webp',
        alt: '清澈的森林山溪水下，一只完整的深色中国大鲵藏在右下方巨石边，开阔水体、卵石和巨石占据大部分画面',
        title: '一条溪流，连接藏身处与巢穴',
        caption: '巨石空隙、深潭边缘、森林岸坡和连续水流共同构成生境；画面不对应公开的原生种群点位。',
        focalPoint: { x: 0.71, y: 0.73 },
      },
      {
        image: './images/species/chinese-giant-salamander/04-nocturnal-crab-encounter.webp',
        alt: '夜间岩石溪流底部，一只完整的成体中国大鲵静伏在右侧，一只小型淡水蟹在左侧隔着一片开阔砾石且尚未接触',
        title: '夜色中的溪底相遇',
        caption: '淡水蟹属于历史报道猎物；画面只表现相遇，不声称记录了捕食，也不把旧食谱当作严格种义的固定比例。',
        focalPoint: { x: 0.58, y: 0.64 },
      },
      {
        image: './images/species/chinese-giant-salamander/05-den-master-egg-guarding.webp',
        alt: '水下岩洞内，一只成体中国大鲵守在洞口，数条透明胶质串珠状卵带向洞穴阴影深处延伸',
        title: '守在卵串旁的“巢穴主人”',
        caption: '守巢、扇水和翻卵由雄性完成；身份来自行为情境，不能只凭外观判定，孵化时长也会随环境改变。',
        focalPoint: { x: 0.58, y: 0.56 },
      },
      {
        image: './images/species/chinese-giant-salamander/06-edna-water-sampling.webp',
        alt: '傍晚山溪边，两名穿涉水服的研究人员在左侧采集水样并记录，右下水下巨石旁一只中国大鲵保持数米距离且未被接触',
        title: '从一瓶水里寻找线索',
        caption: 'eDNA 能提示水体中存在遗传物质，却仍需谱系鉴定、病原筛查、标准化复查和长期监测才能解释保护意义。',
        focalPoint: { x: 0.57, y: 0.66 },
      },
    ],
  },
  sources: CHINESE_GIANT_SALAMANDER_SOURCES,
  featured: true,
  publishedAt: CHINESE_GIANT_SALAMANDER_CONTENT_DATE,
  updatedAt: CHINESE_GIANT_SALAMANDER_CONTENT_DATE,
}
```

`featured: true` 只沿用当前目录中新完整档案的首页编排习惯，不是物种事实；若同轮首页需要固定席位，可删除该可选字段而不改变档案科学内容。

## 来源覆盖清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 当前接受名与模式产地 | [ASW — *A. davidianus*](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias/Andrias-davidianus) | 接受名、作者、原始组合、中坝/江油模式产地、原生/引入概括；数据库自身提示旧文献与广布资料需谨慎 |
| 当前属级物种数 | [ASW — *Andrias*](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Cryptobranchidae/Andrias) [Jiang et al. 2026](https://doi.org/10.3897/zse.102.179377) | 截至检索日属内 6 个接受种及新种 *A. yaoluopingensis*；接受种数不等于候选谱系数 |
| 首轮范围级遗传证据 | [Yan et al. 2018](https://doi.org/10.1016/j.cub.2018.04.004) | 至少五个、可能五至七个种级谱系；养殖运输和释放造成混合；当时命名状态已被后续研究更新 |
| 七个地理支系 | [Liang et al. 2019](https://doi.org/10.1002/ece3.5014) | 320 个 mtDNA 样本、19 个线粒体基因组和 RAG2 数据；七个线粒体支系的地理结构，不能只凭单个核基因的弱结构否定后续种界研究 |
| 历史博物馆分类 | [Turvey et al. 2019](https://doi.org/10.1002/ece3.5257) | 恢复 *A. sligoi*、关联模式/历史样本并缩小旧 *A. davidianus*；古 DNA 失败使 G1 关联仍含地理推断 |
| 当前候选种界与狭义 G1 | [Marr et al. 2024](https://doi.org/10.1093/evolinnean/kzae007) | 30 个线粒体基因组、多种划界模型、至少 7/很可能 9 个中国种、G1/G2 和模式产地解释；作者要求核数据复核 |
| IUCN 全球评估 | [IUCN 2023-1](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T179010104A48438418.en) | CR、decreasing、A2acde、2020-12-09 评估、>80%/三个世代、15 年世代长度、生境、威胁与行动；证据仍部分跨越未解决中国谱系 |
| CITES | [2026 current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [AC33 Inf. 15](https://cites.org/sites/default/files/documents/E-AC33-Inf-15.pdf) | `Andrias spp.` 附录 I、当前生效日与 1975 列入史；贸易制度不等于 IUCN 等级 |
| 中国国内名录 | [国家林草局、农业农村部 2021 公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [农业农村部通知](https://cjyzbgs.moa.gov.cn/tzgg/202104/t20210414_6365902.htm) | 大鲵仅野外种群为国家二级、人工繁育种群差异化管理；现行名称未解决全部新拆分种的法律解释 |
| 综合生物学与行动计划 | [Mao et al. 2024](https://www.iucn-amphibians.org/wp-content/uploads/sites/4/2025/01/Chinese-Giant-Salamanders_EN.pdf) | 中国大鲵属形态、生境、食性、繁殖、威胁排序、遗传/健康筛查和 2024—2044 行动；多项自然史资料明确不能归到单个种 |
| 范围级调查 | [Turvey et al. 2018](https://doi.org/10.1016/j.cub.2018.04.005) | 2013—2016、97 地、16 省级行政区、2,872 份访谈、24 只/4 地；调查发现数不是全球数量，个体来源可能非原生 |
| 衰退驱动 | [Tapley et al. 2021](https://doi.org/10.1017/S0030605320000411) | 适宜生境仍空缺、过度利用与电鱼/毒捕证据；范围级 *Andrias* 结论不能直接变成狭义种丰度 |
| 养殖业 | [Cunningham et al. 2016](https://doi.org/10.1017/S0030605314000842) | 陕西养殖业、野生亲本获取与数百万养殖存栏；养殖存栏不是野外恢复 |
| 无序放流 | [Shu et al. 2021](https://doi.org/10.16373/j.cnki.ahr.200080) | 268 条记录、至少 287,840 只、98 县市、16 省级行政区、1—4 谱系/点及不适宜地点；记录可能低估，且不是放流存活量 |
| 摄食力学 | [Heiss et al. 2013](https://doi.org/10.1098/rsif.2012.1028) | CT、高速视频和流体模拟支持颌驱动吸入；圈养个体且发表于拆分前，具体数值不归狭义种 |
| 繁殖行为 | [Luo et al. 2018](https://doi.org/10.3390/ani8100161) | 模拟自然环境数字监控下的推沙、求偶、产卵和雄性护卵；不是狭义种野外固定繁殖参数 |

## 仍然不确定或需后续更新的事项

1. **狭义种与 G1 的关联仍需强化**：模式标本古 DNA 提取失败；当前关联依赖中坝的位置、相邻生态区和历史/现代样本。未来若模式邻近材料或核基因组改变结论，学名与范围需重审。
2. **分类仍在快速变化**：2026 年刚新增 *A. yaoluopingensis*；ASW 的 6 个接受种与 2024 年至少 7/很可能 9 个中国候选种仍有缺口，应在每次更新前重新查 ASW 和最新原始修订。
3. **IUCN 条目尚未完全做到狭义谱系独立评估**：正式值必须展示为 2020 / CR / A2acde / decreasing，但其理由仍引用全中国大鲵属衰退。新评估出现时要成套更新。
4. **现存分布不等于历史样本分布**：麻边、洪雅/眉山、雅安和中坝不能自动当成今天仍有繁殖种群；任何新点位还需排除放流、逃逸和杂交来源。
5. **原生与引入范围混杂**：日本本州已有引入中国大鲵属及与日本大鲵杂交问题，台湾记录也可能是引入；本档案只把中国列为原生国家。
6. **体尺与寿命缺少现代种界校正**：未来只有在狭义 G1、来源清楚且测量法一致的样本出现后，才考虑填写 `measurements` 和 `metrics`。
7. **食性与繁殖多为复合群/养殖证据**：能保留共同机制和行为，不应升级为狭义种固定食谱、窝卵数、成熟年龄或孵化期。
8. **没有可靠的狭义种全球数量**：24 只调查发现、养殖场数百万存栏和 287,840 只历史放流分别回答不同问题，均不能填 `estimatedMatureIndividuals`。
9. **疾病的重要性需持续监测**：蛙病毒等病原是养殖—放流风险，但当前范围级野外衰退主要由过度利用和生境退化解释，不能把疾病写成唯一原因。
10. **图片无法完成物种鉴定**：生成图只能遵守大鲵属通用外形；caption 与 alt 必须保留“示意/复合群”边界，不能虚构狭义种独有花纹。
11. **图片 focal point 必须实图复核**：当前值来自构图计划；任何生成重试、裁切或尺寸变化都可能移动主体。

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 顶部只新增一次 `CHINESE_GIANT_SALAMANDER_SOURCE_DATE`、`CHINESE_GIANT_SALAMANDER_CONTENT_DATE` 和 `CHINESE_GIANT_SALAMANDER_SOURCES`；不要在对象尾部复制来源数组。
- 采用 `id: 'species-andrias-davidianus'`、`slug: 'chinese-giant-salamander'` 和 `scientificName: 'Andrias davidianus'`。
- 分类链固定为 `Chordata / Amphibia / Caudata / Cryptobranchidae / Andrias`；不要把有尾目写成已废弃的 `Urodela` 数据键，也不要把隐鳃鲵科拼成 `Cryptorchiidae`。
- 保护字段固定为 `conservation('CR', 'decreasing', 2020, 'A2acde')`；搜索确认没有残留 `2004 / A2ad`、`assessedYear: 2023` 或趋势 unknown。
- `distribution.realms` 只含 freshwater；原生 `countries` 只含中国；`range` 必须保留 G1、历史样本、引入和放流混杂边界。
- 保持 `measurements: {}` 与 `metrics: {}`；任何 1.8 m、50 kg、55+ 年、15 年世代长度只留在有来源和范围限定的叙述，不进入标准化体尺或寿命字段。
- `storySections` 保持恰好 6 段，`featuredStats` 保持 4 项；每个范围级数字的 note 都不能省略。

### 图像与静态资源

- 源文件目录应为 `src/assets/source/species/chinese-giant-salamander/`，包含 `01` 至 `06` 的 `*-source.png` 和 README；运行时目录 `public/images/species/chinese-giant-salamander/` 包含对应六张 `.webp`。
- 在源图 README 保存最终逐图提示词、统一形态锚点、复合群边界、生成日期、运行时映射和 WebP 转换参数；更新 `src/assets/source/README.md` 总索引。
- 用静态工具逐张确认 PNG 与 WebP 都为 1536×1024、8-bit sRGB、无 alpha，WebP 可正常解码且不是误命名 PNG。
- 人工静态检查：01 完整体态和左侧负空间；02 恰好四趾前足且成年无外鳃；03 开阔水下森林山溪与巨石庇护；04 仅一只小蟹、无额外动物、无接触或血腥；05 单雄、串珠卵、无雌性和幼体；06 恰好两名研究者、非接触、无地点线索。
- 封面只放 `media.image`，gallery 只放其余 5 张；六图信用统一为 `Fauna Atlas · AI 生成原创图像`。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 新增中国大鲵完整档案测试：IUCN 字段、freshwater 单一 realm、空 measurements/metrics、6 段故事、4 项统计、5 张 gallery、18 个来源及六条准确媒体路径。
- 增加接受名的分类路径断言：`Animalia > Chordata > Amphibia > Caudata > Cryptobranchidae > Andrias > Andrias davidianus`。
- 若本轮仅新增中国大鲵且共享工作区没有其他物种变化，目录期望应从 24 增为 **25 个物种档案**、分类单元节点增为 **76**、物种档案与分类单元合计增为 **101**；`Animalia` 为 25、`Chordata` 为 23、`Amphibia` 为 3、`Caudata` 为 2、`Cryptobranchidae` 为 1、`Andrias` 为 1。若有并行改动，按实际树重算，不机械覆盖。
- 保留现有唯一性与必填检查：`id`、`slug`、学名、分类叶、source URL、图片路径和日期不能重复或缺失。

### 命令验证

- 运行 `npm run typecheck`，确认 source kind、diet type、realm、日期和图片模板字面量均通过 TypeScript。
- 运行 `npm test`，确认新分类路径、计数、完整档案与既有回归测试全部通过。
- 运行 `npm run build`，确认六张 WebP 被 Vite 正确解析并进入构建产物。
- 按仓库约束只使用测试、类型检查、构建和静态资源检查；不启动 GUI 或无头浏览器。
- 运行 `git diff --check`，审阅 `git diff --stat` 与目标文件清单，确保临时下载文献、OCR 图片和生成缓存没有进入提交。

### TODO 收尾顺序

- 只有数据对象、分类测试、六张源 PNG、六张运行时 WebP、物种素材 README、源图总索引、typecheck、test、build 和静态图像检查全部完成后，才从 `docs/todo.md` 删除 `中国大鲵（Andrias davidianus）  `。
- 研究文档完成、只生成部分素材或只有代码未验证时，都不提前删除。
- 删除后确认 `docs/todo.md` 的首个剩余条目成为 `帝王蝶（Danaus plexippus）`。

## 最终实施建议

- 采用当前接受名 *Andrias davidianus*，同时把“狭义 G1”写进分布、描述、故事和来源限制，避免复活旧广布概念。
- 固定 IUCN 为 `CR / decreasing / 2020 / A2acde`；把 2023 仅作为发布年，并明确评估证据仍部分覆盖未解决中国谱系。
- 原生范围只保留中国四川盆地西缘/西南缘的保守焦点；日本和台湾只作为引入/可能引入说明，不进入原生国家列表。
- 不填体长、体重、寿命、海拔或成熟个体 metrics；用 4 个带 note 的分类与保护统计承载可核验的数字。
- 六图与六段故事分别覆盖分类、生境形态、摄食力学、雄性护卵、范围级崩落和科学恢复；所有图都声明仅为大鲵属通用外形示意，不能代替遗传鉴定。
- 把“停止无筛查放流”置于保护行动首位；任何未来再引入都必须在物种/谱系、健康、受纳地和长期监测四个条件同时满足后评估。
