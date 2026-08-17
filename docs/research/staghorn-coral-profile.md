# 鹿角珊瑚（*Acropora cervicornis*）完整档案研究

- 检索与核验日期：2026-08-17
- 使用范围：`src/data/species.ts` 的鹿角珊瑚物种档案、详情页长文、数字卡、六张物种图片与后续事实验收
- 证据标准：优先采用 IUCN 原始物种评估、NOAA Fisheries 的 ESA 正式规则、恢复计划、五年审查与关键栖息地规则、ITIS/WoRMS，以及直接研究 *A. cervicornis* 的同行评审原始论文。
- 状态口径：全球 IUCN 等级与美国 ESA 法律状态是两个制度。全球为 IUCN `CR`；美国管辖范围内为 ESA `Threatened`。不得把任一状态改写成另一个制度的同义词。
- 个体口径：珊瑚虫（polyp）、物理上分开的珊瑚群体/枝丛（colony/ramet）、基因个体（genet）和连续枝丛（thicket）不是同一个统计单位。断枝会制造更多克隆枝丛，却不增加基因个体数。
- 数值口径：覆盖度、枝丛面积、群体密度、群体数、基因型多样性和历史丰度指数不可互换；本文不把任何一种换算成“全球还剩多少只”。

## 结论摘要

### 分类、IUCN 与美国法律状态

当前接受名是 ***Acropora cervicornis* (Lamarck, 1816)**。ITIS 将其列为有效种（TSN 52862），WoRMS 接受名记录为 AphiaID 206989；仓库现有动物界—刺胞动物门—珊瑚纲—石珊瑚目—轴孔珊瑚科—轴孔珊瑚属分类可保留。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=52862) [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=206989)

IUCN 最新物种评估引用为 **Crabbe et al. 2022, e.T133381A165860142**，评估日期是 **2021-06-01**。全球等级为 **Critically Endangered（CR）**、趋势下降，正确标准是 **A2bce**，不是现有代码的 `A2ace`。`assessedYear` 应保留 2021；“2022”是红色名录发布/引用年份，不应覆盖评估年份。[IUCN 原始评估](https://www.iucnredlist.org/species/133381/165860142)

美国国家海洋渔业局于 2006 年把鹿角珊瑚列为 ESA **Threatened**，2014 年正式规则维持 Threatened，2022 年五年审查再次建议本种“不改变分类”。这是美国管辖范围内的法律地位，不是 IUCN 全球等级；也不能写成 ESA `Endangered`。[2006 最终列名规则](https://www.govinfo.gov/content/pkg/FR-2006-05-09/pdf/06-4321.pdf) [2014 最终规则](https://www.federalregister.gov/documents/2014/09/10/2014-20814/endangered-and-threatened-wildlife-and-plants-final-listing-determinations-on-proposal-to-list-66) [NOAA 2022 五年审查](https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf)

### 中文名与相似类群

项目中文名“鹿角珊瑚”可保留，但它在中文自然史语境中也常被泛指鹿角状轴孔珊瑚，并不天然等于唯一物种。`aliases: ['麋角珊瑚']` 未在本次一手分类来源中得到规范中文异名支持；若不是站内搜索需求，建议删除。图片与正文第一次出现时应同时给出学名。

西大西洋/加勒比的轴孔珊瑚主要包括本种、扁平宽枝的 *A. palmata*，以及两者的杂交类群 *A. prolifera*。鹿角珊瑚的枝条应是直或略弯的圆柱形，恢复计划给出的枝径约 **0.25—5 厘米**；组织从金黄色到中褐色，活跃生长端颜色较浅或近白。不要把它画成 *A. palmata* 的宽扁鹿角板、印太轴孔珊瑚的桌状盘，也不要用“所有鹿角状珊瑚”替代物种鉴定。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)

### 分布与水深：范围仍广，不等于丰度仍高

本种分布于热带西大西洋、加勒比海与墨西哥湾的适宜珊瑚礁和硬底，包括佛罗里达、巴哈马、大安的列斯与小安的列斯、墨西哥及中美洲加勒比岸、哥伦比亚和委内瑞拉北岸等。NOAA 恢复计划列出的美国管辖范围包括佛罗里达、波多黎各、美属维尔京群岛、纳瓦萨岛与西北墨西哥湾的 Flower Garden Banks；非美国范围覆盖加勒比诸岛与中美洲、南美洲北岸多国/属地。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)

NOAA 的恢复计划与五年审查都强调：物种大尺度地理包络并未被证明整体缩窄，但历史上出现过的礁点比例、覆盖度、密度和连续枝丛已严重下降。这两句话可以同时为真。`countries` 只适合列代表性国家/属地，不能让一份不完整清单暗示未列地区不在范围内。

常见水深是 **5—20 米**；恢复计划同时记录罕见个体可达约 60 米，NOAA 当前概览则面向公众概括为 15—60 英尺（约 4.6—18.3 米）。北佛罗里达分布边缘可在 16—30 米。现有“1—30 米”把典型、局地与极限口径揉在一起，应改为“典型 5—20 米；局地记录更浅或更深，罕至约 60 米”。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf) [NOAA 当前物种页](https://www.fisheries.noaa.gov/species/staghorn-coral)

适宜生境不只是“清澈浅水珊瑚礁”。本种利用沟脊礁、银行礁、斑块礁、过渡礁、石灰岩脊、台地和硬底；生长与招募需要稳定的固结基底、足够光照、清澈且流通的海水。幼体附着和断枝再附着都受基底稳定性、沉积与大型藻覆盖影响。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)

### 群体、枝丛、克隆与“寿命”

一个可见枝丛由许多遗传相同的珊瑚虫组成；断枝再附着后产生的是同一基因个体的另一个 ramet。多个 ramet 会交错融合成难以逐一划界的 thicket，因此“照片里几株”“一条样带多少 colonies”并不自动等于多少基因个体。

NOAA 当前概览的快速事实写“群体最大约 8 英尺直径、4 英尺高”，正文则写“至少 6 英尺直径、4 英尺高”；恢复计划描述现代常见残存枝丛多约 0.5—1 米宽。产品可在 `measurements` 中给**群体最大直径约 2.4 米、最大高度约 1.2 米**，但 note 必须写明它是群体/枝丛外形尺度，不是珊瑚虫体长，也不是一个 genet 的完整空间尺度。[NOAA 当前物种页](https://www.fisheries.noaa.gov/species/staghorn-coral) [NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)

现有 `lifespanYears: [10, 100]` 没有可靠的统一对象。NOAA 的“可活数百年”描述的是克隆基因个体延续潜力；伯利兹 Coral Gardens 的五个 *A. cervicornis* genet 以体细胞突变率估得**最低年龄 62—409 年**，不是每个可见枝条都活了这么久，也不是整个物种的寿命范围。建议删除数值 `lifespanYears`，在长文中解释 genet 与 ramet。[Irwin et al. 2017](https://doi.org/10.1007/s00338-017-1602-9)

### 生长：不同研究指标不能拼成固定年速

恢复计划汇总早期野外研究，鹿角珊瑚枝条线性延伸约 **3—11.5 厘米/年**。NOAA 当前公众页给出健康状态“最高约 8 英寸（约 20 厘米）枝长/年”。这不是矛盾：基因型、群体大小、共生藻、营养、苗圃悬挂/底栖环境、温度与受损状态都会改变增长；“最高”也不是典型范围。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf) [NOAA 当前物种页](https://www.fisheries.noaa.gov/species/staghorn-coral)

Lirman et al. 跟踪佛罗里达和多米尼加共和国苗圃内超过 1,700 个、37 种基因型的断枝，发现同一共同园环境中快生基因型可比慢生基因型快一个数量级；“每 1 厘米现有珊瑚年产超过 5 厘米新珊瑚”是**总线性长度生产率**，不能改写成每根枝条伸长 5 倍。[Lirman et al. 2014](https://doi.org/10.1371/journal.pone.0107253)

因此现有 key fact“每年延伸约 10—20 厘米”过于确定。推荐数字卡采用恢复计划的 `3—11.5 cm/年` 并注明“早期野外枝条线性延伸汇总；基因型与环境差异很大”，正文再补 NOAA 的健康上限约 20 厘米。

### 共生供能、摄食与白化

鹿角珊瑚是动物与微生物/藻共生体组成的 holobiont。珊瑚组织内的光合共生甲藻把大量光合产物转移给宿主，珊瑚虫也用触手捕捉浮游生物和悬浮颗粒。恢复计划认为本种相较许多块状珊瑚更依赖光照，白化后以异养摄食补偿能量的能力可能较弱。因此 `diet.types: ['filter-feeder']` 只能视为 schema 对悬浮摄食的近似；描述必须同时写共生供能，不能说珊瑚“是植物”或“只靠吃浮游生物”。[NOAA 当前物种页](https://www.fisheries.noaa.gov/species/staghorn-coral) [NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)

**白化不等于已经死亡。**热应激等压力使珊瑚失去共生藻或其色素，仍存活的组织会变得苍白/半透明，白色骨骼透出；若压力持续，饥饿、疾病与死亡风险上升。图片 alt/caption 应写“白化中的活组织”，除非画面确有裸露骨骼和藻类侵占，不能把白色直接标成死亡。

### 有性繁殖、断枝与补充限制

本种同时雌雄同体，是广播产卵型珊瑚。恢复计划记录配子通常在 7—9 月满月后第 2—6 夜的少数夜晚释放，南加勒比可晚到 10 月，也可能跨两个月发生两次；纬度与年份会改变时间。一个群体会产生卵和精子，但通常需要两个不同 genet 的配子才能产生有活力的幼体。不能画成珊瑚内部孵化或单个克隆自交就建立新种群。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)

受精后形成浮游 planula。Miller et al. 的实验显示，在有附着诱因时本种幼体约产后 3—4 日开始附着，6—8 日增加并在 8—15 日较高；没有诱因时前 4—5 日死亡率高，10—11 日才开始变态。这是实验批次的能力窗口，不是所有加勒比幼体固定日历。[Miller et al. 2020](https://doi.org/10.7717/peerj.9705)

断枝可以再附着并形成克隆 ramet，是本种局地维持的重要方式；但自然脱落断枝并非必然成功。波多黎各 18 个月研究中自然、未固定断枝存活率不超过 26%，而受控苗圃中的有意断枝可表现出高生长和存活。产品应写“断枝在稳定适宜基底上**可以**建立新群体”，不能写“风暴打碎得越多越利于恢复”。[Mercado-Molina et al. 2014](https://doi.org/10.1016/j.jembe.2014.04.017) [Lirman et al. 2014](https://doi.org/10.1371/journal.pone.0107253)

2022 五年审查判断，有效有性招募在物种范围内仍“几乎缺失”。克隆扩张能增加覆盖和结构，却无法替代新基因型进入种群；低 genet 密度还会造成配子稀释与 Allee effect。[NOAA 2022 五年审查](https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf)

### 衰退数字与尺度边界

NOAA 当前物种页概括：1980 年代起白带病使种群较历史丰度下降约 **97%**，现在不足过去丰度的 3%。恢复计划把可用地区的覆盖度、优势度和出现率下降汇总为最高约 98%。这些是多个历史/区域指标的管理概述，不是对全球 genet 或珊瑚虫的逐一普查。

2022 五年审查给出更明确的局地监测例子：佛罗里达 260 条样带的平均覆盖度在 2014—2019 年从 0.04% 降到 0.003%，平均密度从 0.017 降到 0.004 colonies/m²；与此同时 Dry Tortugas 的特殊单种生境点出现增长。结论应是“总体稳定或下降但时空差异显著”，而不是用某一条样带的倍数代表全加勒比。[NOAA 2022 五年审查](https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf)

现有 description 的“白带病、海洋热浪和飓风已使其覆盖率较历史水平大幅下降”方向正确，但需补上：白带病是 1970—80 年代全域崩落的主要直接证据；疾病、升温、沉积、营养、污染、藻类竞争、捕食、物理破坏与低种群密度现在共同限制恢复。飓风既可能产生可再附着断枝，也常造成大规模破坏，净效应取决于枝条保留、基底和随后扰动间隔。[Aronson & Precht 2001](https://doi.org/10.1023/A:1013103928980) [Goergen et al. 2019](https://doi.org/10.3389/fmars.2019.00036)

### 白带病、升温与 2023 佛州事件

白带病表现为推进的组织损失带：病变前沿附近出现新鲜白色裸露骨骼，较老的死亡骨骼可被藻类覆盖。它不同于整片组织变淡的白化，也不同于健康枝尖的天然浅色生长端。NOAA 2022 五年审查指出本种疾病病因仍未形成清晰共识，疾病常在高温与风暴损伤后暴发；不要在产品中指定一个已经确定的单一病原体。[NOAA 2022 五年审查](https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf)

温度会同时影响白化、幼体存活和疾病抵抗。Palacio-Castro et al. 的实验中，先受高营养暴露再经 31.5°C 热应激的 *A. cervicornis* 出现 84%—100% 死亡，而未先受高营养暴露的热应激组没有死亡；这是受控实验的交互效应，不能写成任何 31.5°C 海水都会造成同样比例死亡。[Palacio-Castro et al. 2021](https://doi.org/10.1007/s00338-021-02159-x)

2023 年创纪录海洋热浪使佛罗里达礁群的野生、海上苗圃和移植鹿角/麋角珊瑚遭到重大损失。2024 年对 Mission: Iconic Reefs 移植体评估中，鹿角珊瑚存活不足 22%；2025 年同行评审综合认为，分散的海上苗圃、陆基活体基因库和紧急转移避免了佛州轴孔珊瑚大范围区域灭绝。这个比例只适用于该项目与事件，不能外推为全球现存比例。[NOAA 2025 恢复更新](https://www.fisheries.noaa.gov/feature-story/noaa-and-partners-launch-next-generation-coral-restoration-following-florida-coral) [Muller et al. 2025](https://doi.org/10.1111/cobi.70168)

### 恢复、关键栖息地与成效边界

NOAA 2008 年为鹿角与麋角珊瑚共同指定四个关键栖息地区：佛罗里达约 3,442 km²、波多黎各约 3,582 km²、St. John/St. Thomas 约 313 km²、St. Croix 约 326 km²。关键物理/生物特征是可支持幼体附着招募与断枝再附着的适质、可用硬底。它是美国 ESA 法律范围，不是物种全球面积、保护区面积或现存珊瑚覆盖面积。[NOAA 2008 关键栖息地规则页](https://www.fisheries.noaa.gov/action/critical-habitat-elkhorn-and-staghorn-corals)

NOAA 恢复计划的主线是：范围尺度监测、保护遗传多样性、增加有性与无性招募、苗圃繁育与移植、改善水质和硬底招募环境、减少物理破坏/捕食/疾病，以及同时降低全球升温与酸化压力。2022 五年审查记录美国 2014—2018 年移植超过 150,000 个 *A. cervicornis* 群体，头一两年常有 60%—90% 存活，但长期队列差异很大，七年模型存活仅 0—10%。因此“苗圃与移植有效”必须附带“能阻止局地消失、保存基因材料和增加局地覆盖，但持续投入且不消除热浪/疾病根因”的边界。[NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf) [NOAA 2022 五年审查](https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf)

## 六张图片的事实边界

建议使用 **1 张封面 + 5 张详情图**。六图的共同目标不是展示“彩色珊瑚礁”，而是让读者区分圆柱枝形、枝丛结构、珊瑚虫尺度、白化与白带病，以及恢复手段的不同阶段。

| 序号 | 场景与构图 | 必须画对 | 应拒绝的错误 |
| --- | --- | --- | --- |
| 01 封面：健康鹿角珊瑚群体 | 加勒比清澈浅海硬底上的单个完整群体，圆柱枝条从中心向上分枝；金黄至浅褐活组织、浅色生长尖端；左侧留标题空间 | 直或略弯圆柱枝，枝径视觉一致；真实自然光和水下后向散射；alt 写“群体”，不写“单只” | 扁平宽枝的 *A. palmata*；桌状印太轴孔珊瑚；荧光彩虹色；把健康浅色枝尖标成白化 |
| 02 枝端鉴别：轴孔与辐射珊瑚杯 | 微距展示一根活枝顶端的轴向珊瑚杯及侧面的辐射珊瑚杯，组织完整，顶部自然浅色 | 强调石灰质骨骼外覆薄活组织；珊瑚杯细小、重复但不做成规则蜂巢；说明照片特征不足以替代遗传/专家鉴定 | 画成植物芽、鹿角骨或海绵；夸大成海葵大小的珊瑚虫；把裸白骨骼当正常整枝颜色 |
| 03 枝丛生态：互锁三维结构 | 多个圆柱枝交错成 thicket，小型加勒比礁鱼在空隙活动；保持中景尺度 | 表达结构性生境而非“每条枝都是一个个体”；底部为稳定硬底，周围可有少量其他珊瑚与藻 | 把鱼群密度或物种数写成固定事实；把连续枝丛中的可见分枝计作 genet；单一无边界超级群体 |
| 04 白化与白带病比较 | 同一无文字场景左侧为均匀苍白但组织连续的白化枝，右侧为金褐活组织—鲜白裸骨带—覆藻旧骨三段关系 | 白化枝仍有组织与珊瑚虫；白带病的新鲜裸骨带边界清楚；caption 同时区分健康浅色生长尖 | 把白化画成整枝裸骨；把病变画成均匀褪色、黑带、血肉创口或已经确定的单一病原体 |
| 05 海上苗圃 | 水下“珊瑚树”用细线分别悬挂健康圆柱形断枝，断枝离底；远处一名潜水员维护 | caption 说明多数是克隆 ramet，保存与扩增基因型但不自动制造新 genet；尺度、材质与悬挂方式合理 | 把珊瑚种进沙或画成有根植物；断枝接触海床；承诺苗圃单独抵消海洋升温 |
| 06 硬底移植 | 戴手套潜水员以少量海用环氧把五枚苗圃断枝固定到清理后的石灰岩硬底，分株之间保留生长空间 | 断枝保持圆柱形与活组织；固定在硬底而非沙中；caption 强调移植只是长期恢复起点 | 徒手折野生群体、把断枝埋进沙、用大块水泥掩埋活组织、把短期移植数量等同恢复成功 |

六图静态验收还应检查：画面中的珊瑚不是鹿角、树枝或塑料模型；健康组织的金黄/褐色来自共生体系但不直接画出肉眼可见“大藻细胞”；同一画面不要混入宽扁 *A. palmata* 后仍全部标成 *A. cervicornis*；不要用文字标牌代替形态；白化图与健康图的色差不能靠全图白平衡伪造。

## 对当前 `species.ts` 的逐字段审计

| 字段 | 当前内容 | 结论 | 建议 |
| --- | --- | --- | --- |
| `id` / `slug` | `species-acropora-cervicornis` / `staghorn-coral` | 保留 | 稳定且符合项目约定 |
| `names.zh` / `names.en` | 鹿角珊瑚 / Staghorn Coral | 保留并加学名限定 | 中文名可能泛指鹿角状珊瑚，正文首次出现带学名 |
| `aliases` | 麋角珊瑚 | 谨慎 | 无本次一手分类来源支持为规范中文异名；无搜索需求则删除 |
| `scientificName` | *Acropora cervicornis* | 保留 | 接受名；正文可补 `(Lamarck, 1816)` |
| `taxonomy` | Cnidaria / Anthozoa / Scleractinia / Acroporidae / Acropora | 保留 | ITIS 与 WoRMS 支持 |
| `conservation` | `CR`, decreasing, 2021, `A2ace` | **修正** | 改成 `conservation('CR', 'decreasing', 2021, 'A2bce')` |
| `distribution.regions` | 加勒比、佛州、巴哈马 | 扩充 | 加西大西洋、墨西哥湾、大/小安的列斯、中美洲加勒比岸、南美洲北岸 |
| `distribution.countries` | 6 国 | **扩充或标为代表性** | 现清单遗漏多数范围国家/属地；完整对象建议列主要代表并让 `range` 明说非穷尽 |
| `distribution.range` | 加勒比邻近西大西洋 | 重写 | 加“总体地理包络仍广，但出现礁点、覆盖和密度严重下降” |
| `center` | 20, -78 | 可保留 | 仅作加勒比地图焦点，不是分布几何中心或现存核心 |
| `habitats` | 清澈浅水礁 1—30 m | **细化** | 拆成 5—20 m 礁坡/斑块礁、固结硬底/台地、清澈流通水体；罕至约 60 m |
| `measurements.length` | 0.5—2 m 群体横向 | 修正口径 | 可写最大直径约 2.4 m，不设“成年最小”；另加 height 最大 1.2 m；note 明确群体尺度 |
| `diet` | 共生光合产物、浮游生物、溶解有机物 | 收紧 | 保留共生光合产物和浮游生物/悬浮颗粒；删除缺少本种直接支持的“溶解有机物” |
| `activity` | 固着、夜间触手、断枝 | **去掉未核实的固定夜间表述** | 写固着群体、广播产卵、断枝克隆繁殖、持续钙化生长 |
| `summary` | 枝条造三维空间 | 保留并精确 | 加圆柱枝、加勒比基础造礁种和群体概念 |
| `description` | 快生、恢复、白带病/热浪/飓风 | 扩充边界 | 加克隆不等于遗传补充；恢复需与减排、水质和疾病管理并行 |
| `storySections` | 缺失 | 新增 | 六节：圆柱枝、群体与克隆、共生与白化、两种繁殖、崩落与热浪、恢复边界 |
| `keyFacts[0]` | 10—20 cm/年 | **修正** | 改 3—11.5 cm/年历史野外汇总；另述健康上限约 20 cm 与变异 |
| `keyFacts[1]` | 为幼鱼与无脊椎动物提供庇护 | 保留 | 不量化未有来源的“增加多少鱼” |
| `keyFacts[2]` | 水温异常引发白化 | 保留并加边界 | 白化是共生藻/色素丧失，不等于即时死亡；热应激亦可增强疾病风险 |
| `threats` | 热浪、疾病、风暴、污染沉积 | 扩充 | 加酸化、营养盐/藻类竞争、低 genet 密度、捕食和物理破坏 |
| `conservationActions` | 苗圃、移植、水质、疾病、减排 | 扩充 | 加有性繁育、基因型追踪/基因库、招募硬底、分散风险和长期监测 |
| `metrics.adultLengthCm` | [50, 200] | **删除** | “adult length”不适用于可克隆的珊瑚群体；展示尺寸留在 measurements/featuredStats |
| `metrics.lifespanYears` | [10, 100] | **删除** | 混淆珊瑚虫、ramet 与 genet；个案最低年龄不构成通用寿命范围 |
| `featuredStats.growth` | 10—20 cm | **修正** | 3—11.5 cm/年，注明枝条线性延伸、研究与环境差异 |
| `featuredStats.depth` | 1—30 m | **修正** | 典型 5—20 m，罕见记录可更深至约 60 m |
| `featuredStats.form` | 珊瑚虫群体 | 保留并深化 | note 写断枝可形成同一 genet 的多个 ramet |
| `media` | 仅 alt、无本地图 | 待实现 | 使用六图方案，每图 alt 区分群体、枝丛、珊瑚虫、白化与克隆苗圃 |
| `sources` | 搜索页 + NOAA 概览 | **替换** | 改为下列具名直链，覆盖分类、IUCN、ESA、生态、衰退、热浪和恢复 |

## 推荐 `SpeciesSource[]`

```ts
const STAGHORN_CORAL_SOURCE_DATE = '2026-08-17' as const;

const STAGHORN_CORAL_SOURCES = [
  {
    title: 'Crabbe et al. 2022 — Acropora cervicornis, IUCN Red List',
    url: 'https://www.iucnredlist.org/species/133381/165860142',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'ITIS — Acropora cervicornis (TSN 52862)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=52862',
    kind: 'taxonomy',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Acropora cervicornis (AphiaID 206989)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=206989',
    kind: 'taxonomy',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Staghorn Coral current species profile',
    url: 'https://www.fisheries.noaa.gov/species/staghorn-coral',
    kind: 'general',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2006 — Final ESA listing rule for elkhorn and staghorn corals',
    url: 'https://www.govinfo.gov/content/pkg/FR-2006-05-09/pdf/06-4321.pdf',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2014 — Final coral listing and Acropora reclassification rule',
    url: 'https://www.federalregister.gov/documents/2014/09/10/2014-20814/endangered-and-threatened-wildlife-and-plants-final-listing-determinations-on-proposal-to-list-66',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2008 — Critical habitat for elkhorn and staghorn corals',
    url: 'https://www.fisheries.noaa.gov/action/critical-habitat-elkhorn-and-staghorn-corals',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2015 — Recovery Plan for Elkhorn and Staghorn Corals',
    url: 'https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries 2022 — Caribbean Corals 5-Year Review',
    url: 'https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Aronson & Precht 2001 — White-band disease and the changing face of Caribbean coral reefs',
    url: 'https://doi.org/10.1023/A:1013103928980',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Lirman et al. 2014 — Growth dynamics of Acropora cervicornis',
    url: 'https://doi.org/10.1371/journal.pone.0107253',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Mercado-Molina et al. 2014 — Survival and growth of unattached Acropora cervicornis fragments',
    url: 'https://doi.org/10.1016/j.jembe.2014.04.017',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Irwin et al. 2017 — Age and diversity of resilient Acropora communities in Belize',
    url: 'https://doi.org/10.1007/s00338-017-1602-9',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Goergen et al. 2019 — Temporal change and recovery potential in Acropora cervicornis',
    url: 'https://doi.org/10.3389/fmars.2019.00036',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Miller et al. 2020 — Larval longevity and settlement competency of Caribbean corals',
    url: 'https://doi.org/10.7717/peerj.9705',
    kind: 'ecology',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Palacio-Castro et al. 2021 — Nutrient and heat susceptibility in Acropora cervicornis',
    url: 'https://doi.org/10.1007/s00338-021-02159-x',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Vollmer et al. 2023 — Genomic signatures of disease resistance in staghorn corals',
    url: 'https://doi.org/10.1126/science.adi3601',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
  {
    title: 'Muller et al. 2025 — Restoration strategies preventing Florida Acropora extirpation',
    url: 'https://doi.org/10.1111/cobi.70168',
    kind: 'conservation',
    accessedAt: STAGHORN_CORAL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接落库的完整对象建议

以下对象使用六图建议文件名；实际生成后需按成图主体位置微调 focal point。`countries` 是产品层的代表性列表，`range` 已明确更广范围。与来源常量一并加入内容日期常量，再替换现有物种档案。

```ts
const STAGHORN_CORAL_CONTENT_DATE = '2026-08-17' as const;

{
  id: 'species-acropora-cervicornis',
  slug: 'staghorn-coral',
  names: { zh: '鹿角珊瑚', en: 'Staghorn Coral' },
  scientificName: 'Acropora cervicornis',
  taxonomy: animalTaxonomy(
    taxon('Cnidaria', '刺胞动物门'),
    taxon('Anthozoa', '珊瑚纲'),
    taxon('Scleractinia', '石珊瑚目'),
    taxon('Acroporidae', '轴孔珊瑚科'),
    taxon('Acropora', '轴孔珊瑚属'),
  ),
  conservation: conservation('CR', 'decreasing', 2021, 'A2bce'),
  distribution: {
    realms: ['marine'],
    continents: ['北美洲', '南美洲'],
    regions: ['热带西大西洋', '加勒比海', '墨西哥湾', '佛罗里达礁群', '大安的列斯与小安的列斯', '中美洲加勒比岸'],
    countries: [
      '美国',
      '巴哈马',
      '墨西哥',
      '伯利兹',
      '洪都拉斯',
      '古巴',
      '牙买加',
      '多米尼加共和国',
      '哥伦比亚',
      '委内瑞拉',
    ],
    range:
      '分布于热带西大西洋、加勒比海与墨西哥湾多国及属地的适宜礁区和硬底。大尺度地理包络仍广，但历史出现礁点、覆盖度、密度和连续枝丛均已严重减少。',
    center: { lat: 20, lng: -78 },
  },
  habitats: [
    {
      name: '中浅水礁坡与斑块礁',
      realm: 'marine',
      description:
        '常见于约 5—20 米深的沟脊礁、银行礁、斑块礁与过渡礁；局地可更浅，罕见记录可深至约 60 米。',
      isPrimary: true,
    },
    {
      name: '固结硬底与石灰岩台地',
      realm: 'marine',
      description: '稳定的死珊瑚骨骼、石灰岩脊、台地和其他硬底为幼体附着与断枝再附着提供基底。',
    },
    {
      name: '清澈、流通且光照充足的水体',
      realm: 'marine',
      description: '高度依赖共生藻光合供能；长期浑浊、沉积物、营养盐和大型藻覆盖会降低生长与招募。',
    },
  ],
  measurements: {
    length: { max: 2.4, unit: 'm', note: '群体最大直径的公众资料上限；现代残存枝丛常小得多，不是单个珊瑚虫体长' },
    height: { max: 1.2, unit: 'm', note: '群体最大高度；断枝可使同一基因个体形成多个分离枝丛' },
  },
  diet: {
    types: ['filter-feeder'],
    foods: ['共生甲藻转移的光合产物', '浮游生物与悬浮有机颗粒'],
    description:
      '主要能量来自组织内共生甲藻的光合作用，珊瑚虫也用触手捕捉浮游生物和悬浮颗粒；本种对白化后的能量缺口尤其敏感。',
  },
  activity: ['固着珊瑚虫群体', '持续钙化与分枝生长', '年度广播产卵', '断枝克隆繁殖'],
  tags: ['热带西大西洋', '加勒比海', '基础造礁种', '共生', '克隆繁殖', 'IUCN 极危', '美国 ESA 受威胁'],
  summary: '以金褐色圆柱枝构成鹿角状群体、曾在加勒比中浅水礁形成广阔三维枝丛的基础造礁珊瑚。',
  description:
    '鹿角珊瑚能快速分枝并通过断枝扩展克隆枝丛，但克隆覆盖不能替代有性繁殖带来的新基因型。白带病引发的历史崩落、不断加剧的海洋热浪、酸化、污染与沉积、藻类竞争、物理破坏和低基因个体密度共同限制恢复；苗圃、基因库与移植能避免局地消失，却必须与减排和改善礁区环境并行。',
  storySections: [
    {
      key: 'cylindrical-branches',
      label: '辨识',
      title: '真正的“鹿角”，是覆着活组织的圆柱枝',
      body:
        '它的枝条直或略弯，恢复计划记录枝径约 0.25—5 厘米；组织呈金黄至中褐色，正在生长的枝尖自然较浅。宽扁的板状枝更像麋角珊瑚，整片惨白也可能是白化或组织脱落，不能只凭“像鹿角”完成物种鉴定。',
    },
    {
      key: 'colony-clone-thicket',
      label: '生命形态',
      title: '一片枝丛，不等于许多个基因个体',
      body:
        '每个可见群体由许多遗传相同的珊瑚虫组成；断枝再附着会形成同一 genet 的新 ramet，多个 ramet 又会交错成 thicket。覆盖度可以增长而基因型不增加，这正是恢复既要扩增珊瑚量、也要追踪遗传多样性的原因。',
    },
    {
      key: 'symbiosis-and-bleaching',
      label: '共生',
      title: '失去共生藻的白，不等于已经死亡',
      body:
        '组织内共生甲藻把光合产物供给珊瑚，珊瑚虫也捕捉浮游生物。热应激使共生体系失衡时，仍存活的组织会苍白透明、露出白色骨骼；若压力持续，才可能因能量不足、疾病和组织死亡而失去整枝。',
    },
    {
      key: 'two-reproductive-paths',
      label: '繁殖',
      title: '断枝扩张得快，新基因型却来自短暂的产卵窗口',
      body:
        '断枝在稳定硬底上可形成克隆群体；每年少数夜晚，成熟群体也会把卵和精子释放到水柱中。虽然同一群体同时产生两类配子，通常仍需不同 genet 交配。如今范围内有效有性招募几乎缺失，低基因个体密度会进一步降低受精机会。',
    },
    {
      key: 'collapse-and-heat',
      label: '危机',
      title: '白带病打碎历史优势，热浪缩短恢复间隔',
      body:
        '1980 年代白带病使历史优势种大规模崩落；疾病、风暴和热异常持续造成脉冲式死亡。2023 年佛州创纪录热浪又重创野生、苗圃与移植群体。局地可在平静年份恢复，但扰动越来越频繁，使枝条生长和断枝补充难以追上损失。',
    },
    {
      key: 'restoration-boundaries',
      label: '恢复',
      title: '苗圃是在争取时间，不是替海洋降温',
      body:
        '海上苗圃、陆基活体基因库、有性繁育和移植可保存基因型、增加局地覆盖并避免区域消失；长期成活却随地点、年份和基因型大幅变化。恢复还需要清洁稳定的招募硬底、减少沉积和营养盐、疾病与遗传监测，以及压低温室气体排放。',
    },
  ],
  keyFacts: [
    '早期野外研究汇总的枝条线性延伸约 3—11.5 厘米/年；NOAA 公众资料给出健康状态最高约 20 厘米/年，基因型与环境差异很大。',
    '断枝会形成遗传相同的 ramet；只有有性繁殖产生的幼体才能为种群加入新基因型。',
    '白化是共生藻或其色素丧失，活组织仍可能存在；白带病则表现为推进的组织损失和新鲜裸露骨骼。',
    'IUCN 全球等级为极危；美国 ESA 法律状态仍为受威胁，两者不可互换。',
  ],
  threats: [
    '海洋升温、海洋热浪与白化',
    '白带病等疾病及温度—疾病协同',
    '海洋酸化',
    '沉积物、营养盐、污染与藻类竞争',
    '风暴、船只搁浅、锚具和潜水活动造成的物理破坏',
    '捕食与疾病传播',
    '低群体/基因个体密度和有性招募不足',
  ],
  conservationActions: [
    '海上苗圃、陆基活体基因库与分散保种',
    '跟踪基因型的断枝繁育和审慎移植',
    '辅助有性繁殖、幼体培育与新基因型补充',
    '保护稳定硬底并恢复幼体招募环境',
    '减少流域沉积、营养盐和污染输入',
    '疾病、白化、覆盖度和长期成活监测',
    '减少温室气体排放与海洋升温、酸化压力',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'growth',
      label: '枝条线性延伸',
      value: '约 3—11.5',
      unit: '厘米/年',
      note: 'NOAA 恢复计划汇总的早期野外范围；健康个体上限可更高，环境与基因型差异显著。',
    },
    {
      key: 'depth',
      label: '常见水深',
      value: '5—20',
      unit: '米',
      note: '局地可更浅；罕见记录可深至约 60 米，不代表各水深丰度相同。',
    },
    {
      key: 'historic-decline',
      label: '历史丰度衰退',
      value: '约 97',
      unit: '%',
      note: 'NOAA 对 1980 年代以来白带病相关种群崩落的范围级概述，不是全球基因个体逐一普查。',
    },
    {
      key: 'form',
      label: '生命形态',
      value: '克隆珊瑚虫群体',
      note: '断枝形成 ramet；多个 ramet 可属于同一 genet，并交错构成连续枝丛。',
    },
  ],
  media: {
    image: './images/species/staghorn-coral/01-shallow-reef-colony-cover.webp',
    alt: '依照 Acropora cervicornis 形态创作的 AI 图像：清澈加勒比浅海中一个金褐色鹿角珊瑚群体从礁石向上伸展，枝端呈自然浅色，远处有小型礁鱼',
    focalPoint: { x: 0.62, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/staghorn-coral/02-axial-radial-corallites-macro.webp',
        alt: '依照 Acropora cervicornis 形态创作的 AI 图像：鹿角珊瑚活枝尖微距，末端较大的轴向珊瑚杯与朝枝尖排列的细小辐射珊瑚杯清楚可见',
        title: '圆柱枝端的生长点',
        caption: '浅色活跃枝尖是健康形态之一；轴向和辐射珊瑚杯是辨识线索，但生成图不能替代标本或遗传鉴定。',
        focalPoint: { x: 0.62, y: 0.47 },
      },
      {
        image: './images/species/staghorn-coral/03-interlocking-thicket-fish-habitat.webp',
        alt: '依照 Acropora cervicornis 形态创作的 AI 图像：密集交错的金褐色鹿角珊瑚圆柱枝铺满浅礁，几尾小型加勒比礁鱼在分枝间穿梭',
        title: '由许多枝条织成的庇护空间',
        caption: '枝丛形成复杂三维结构；可见分枝、物理分株与基因个体数并不一一对应。',
        focalPoint: { x: 0.57, y: 0.54 },
      },
      {
        image: './images/species/staghorn-coral/04-bleaching-versus-white-band.webp',
        alt: '依照 Acropora cervicornis 形态创作的 AI 图像：两组鹿角珊瑚并列，左侧仍有组织但整体白化，右侧鲜白裸骨带分隔金褐活组织与覆藻旧骨',
        title: '三种白色，三种含义',
        caption: '均匀苍白的活组织是白化；推进的鲜白裸骨带提示组织损失；健康枝尖的自然浅色又是正常生长。',
        focalPoint: { x: 0.5, y: 0.52 },
      },
      {
        image: './images/species/staghorn-coral/05-in-water-coral-tree-nursery.webp',
        alt: '依照 Acropora cervicornis 形态创作的 AI 图像：海中树状苗圃上分别悬挂着多枚健康鹿角珊瑚圆柱形断枝，一名潜水员在远处维护',
        title: '把基因型分散保存在海上苗圃',
        caption: '苗圃断枝多是克隆分株；它们可保存和扩增既有基因型，却不会自动增加遗传多样性。',
        focalPoint: { x: 0.62, y: 0.5 },
      },
      {
        image: './images/species/staghorn-coral/06-diver-outplanting-fragments.webp',
        alt: '依照 Acropora cervicornis 形态创作的 AI 图像：戴手套的潜水员把五枚苗圃培育鹿角珊瑚碎枝用少量海用环氧胶固定在石灰岩硬底上',
        title: '回到硬底，只是长期恢复的开始',
        caption: '移植可增加局地覆盖并避免消失，但长期成活仍取决于水质、疾病、热浪、基因型和持续监测。',
        focalPoint: { x: 0.54, y: 0.65 },
      },
    ],
  },
  sources: STAGHORN_CORAL_SOURCES,
  featured: true,
  publishedAt: CONTENT_DATE,
  updatedAt: STAGHORN_CORAL_CONTENT_DATE,
}
```

## 仍不确定或不应硬编码的事项

1. **完整国家/属地清单**：NOAA 2015 计划给出当时范围清单，但行政区名称会变化，且“存在适宜范围”与“当前确认有健康种群”不同。产品 `countries` 应明确是代表性列表，地图/过滤若要求穷尽，需要单独维护版本化分布数据。
2. **群体最大尺寸**：NOAA 当前页的 quick facts 为直径 8 英尺，正文写至少 6 英尺；不同资料还会把单个 colony 与不可分割 colony mass 混用。建议只展示“可达约 2.4 米直径”，不设成年最小值。
3. **统一寿命**：基因个体可延续数百年，但 ramet、枝条和珊瑚虫的年龄不同；`lifespanYears` 不应恢复，除非 schema 日后能标记测量对象。
4. **典型生长率**：3—11.5 cm/年是早期野外汇总，约 20 cm/年是 NOAA 的健康上限，苗圃研究又使用总线性长度生产率。它们不是同一指标；不要给无 note 的单一“平均值”。
5. **全球成熟个体数**：克隆、枝丛融合和样带方法使精确范围级计数不可得；不得生成 `estimatedMatureIndividuals`。
6. **白带病单一病原体**：实验支持细菌参与并发现抗病基因型，但 2022 五年审查仍认为没有明确统一病原共识；正文不应宣布病因已解决。
7. **酸化效应大小**：不同实验的温度、pCO₂、摄食与持续时间不同，结果混合；可列为重大长期压力，但不硬编码某个统一生长下降百分比。
8. **2023 热浪的全球外推**：佛州的“移植鹿角珊瑚存活不足 22%”只属于特定项目/评估；不可写成全加勒比或全物种存活率。
9. **恢复成功**：短期移植存活、覆盖增加、genet 保存、自然产卵、幼体入群和形成自我维持枝丛是不同终点；产品不得只用“种下多少断枝”宣称物种已恢复。
10. **图片物种鉴定**：生成图即使形态正确也不是凭证照片；alt/caption 应写“依照 *A. cervicornis* 形态创作”，不要声称展示某个真实野外基因型或地点。

## 建议优先阅读顺序

1. [IUCN 原始评估](https://www.iucnredlist.org/species/133381/165860142)：全球等级、评估日、标准与趋势。
2. [NOAA 2022 五年审查](https://media.fisheries.noaa.gov/2022-08/Caribbean%20Corals%205%20Year%20Review_0.pdf)：当前法律分类建议、局地趋势、疾病/升温、恢复成效与不足。
3. [NOAA 2015 恢复计划](https://repository.library.noaa.gov/view/noaa/8950/noaa_8950_DS1.pdf)：形态、范围、水深、群体/克隆、生殖、威胁与恢复标准。
4. [NOAA 当前物种页](https://www.fisheries.noaa.gov/species/staghorn-coral)：2026 年公开状态、公众尺寸、繁殖和管理摘要。
5. [Muller et al. 2025](https://doi.org/10.1111/cobi.70168)：2023 佛州热浪后的保种与恢复基础设施边界。
