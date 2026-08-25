# 海獭（_Enhydra lutris_）完整档案研究

- 检索与核验日期：2026-08-25
- 使用范围：为 `src/data/species.ts` 新增海獭档案，制作 1 张封面与 5 张 gallery 图，补充测试并收尾 `docs/todo.md`
- 证据标准：IUCN 正式评估、Mammal Diversity Database、CITES 现行附录、政府物种报告与原始同行评审论文。不同年份的区域调查、总个体与成熟个体、全球趋势与区域趋势分别处理。
- 本文只保存研究、字段草案与素材约束，不代表代码、测试或图片已经完成。

## 结论摘要

### 主记录采用物种级 _Enhydra lutris_

美国哺乳动物学会 Mammal Diversity Database（MDD）接受 **`Enhydra lutris (Linnaeus, 1758)`**，上级分类为 `Carnivora / Mustelidae / Enhydra`。仓库不保存命名作者与年份，因此生产记录写 `Enhydra lutris`，分类路径固定为动物界、脊索动物门、哺乳纲、食肉目、鼬科、海獭属。[MDD](https://www.mammaldiversity.org/taxon/1005842/)

中文主名采用《中国大百科全书》的“**海獭**”，英文名为 “Sea Otter”。“海虎”可作为中文俗名；“南方海獭”“北方海獭”等指向亚种或地区种群，不进入整个物种的普通别名。[中国大百科全书：海獭](https://www.zgbk.com/ecph/words?Name=%E6%B5%B7%E7%8D%AD&SiteID=1&SourceID=198808&Type=bkzyb&subSourceType=000003000007000022)

### 目前通行的三个亚种可以说明，但主图保持物种级

加拿大濒危野生动物状况委员会 2022 年报告综合头骨形态与线粒体 DNA 证据，列出三个亚种：[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html) [Cronin et al. 1996](https://doi.org/10.2307/1382828)

- _E. l. lutris_：千岛群岛、堪察加半岛和科曼多尔群岛一带；IUCN 物种评估也记录日本近海。
- _E. l. kenyoni_：阿留申群岛至阿拉斯加中南部的原生种群，以及由转移建立的阿拉斯加东南部、不列颠哥伦比亚和华盛顿州种群。
- _E. l. nereis_：加利福尼亚海岸和圣尼古拉斯岛的南方海獭。

仓库的 `taxonomy` 只到属级，物种页也不需要给每张编辑图鉴定亚种。六张图统一使用“物种级 _Enhydra lutris_ 编辑示意”，不能凭脸色、体型或海岸背景声称画面属于某一亚种。

### IUCN 当前结构化值是 2020 年评估

Doroff、Burdin 与 Larson 于 **2020-01-21** 完成的全球评估将海獭列为 **濒危 EN、A2abe、种群趋势下降**。评估随 2021-3 版红色名录发布，2022 年又发布勘误版；仓库的 `assessedYear` 应写评估年 2020，不写发布年 2021 或勘误年 2022。四项成套写为 `conservation('EN', 'decreasing', 2020, 'A2abe')`。[IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en)

IUCN 的判定依据是过去约 30 年，也就是约四个世代，西部大范围种群减少超过 50%。这不是说每个地区都同步下降：阿拉斯加东南部、不列颠哥伦比亚和部分俄罗斯种群曾扩张，加利福尼亚仍受范围与死亡率限制，阿留申群岛和阿拉斯加西南部经历严重下降。结构化字段保存全球评估结论，正文再解释区域差异。[IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en) [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

IUCN 将 2000 至 2018 年间不同地区的估计和计数组合为 **128,902 只海獭**。它是跨年份、跨方法的所有年龄总数，不是同一天全球普查，也不是成熟个体估计；许多种群缺乏近期或规则调查。因此生产记录不填 `metrics.estimatedMatureIndividuals`，也不把 128,902 作为实时计数展示。[IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en)

### CITES 必须按亚种拆开写

2026-03-05 生效的 CITES 附录把 **南方海獭 _E. l. nereis_ 列入附录 I**；水獭亚科 `Lutrinae spp.` 的兜底条目列于附录 II，并明确排除已经在附录 I 的分类单元。因此其余海獭归入附录 II。不能把整个 _Enhydra lutris_ 简写为“CITES 附录 I”，也不能只写“附录 II”而漏掉南方亚种。[CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [中国国家林草局：CITES 附录中文版，2026-03-05 生效](https://www.forestry.gov.cn/u/cms/www/202603/09095455uug5.pdf)

IUCN 红色名录回答全球灭绝风险，CITES 回答国际贸易管制。两套制度不能互相替代；附录 I 也不是“任何目的、任何形式的交易都无例外”，而是国际商业贸易受到严格限制，有限的非商业交易仍受许可制度管理。

## 分布、领域与生境

### 五个国家的出现状态并不相同

IUCN 当前评估记录的原生现存国家有五个：[IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en)

- 加拿大、俄罗斯和美国：原生、现存、常驻。
- 日本和墨西哥：原生、现存，但季节性或常驻状态尚不确定。

日本北海道东部近海近年持续有记录，但小群体是否已经构成稳定繁殖种群仍需监测。墨西哥下加利福尼亚的记录也不能直接写成连续常驻范围。MDD 的国家元数据把日本和墨西哥标作旧分布，而 IUCN 的当前物种评估把二者列为现存、季节性不确定；生产记录以 IUCN 的现状字段为准，MDD 只承担接受名与上级分类核验。[MDD](https://www.mammaldiversity.org/taxon/1005842/) [IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en)

海獭当前沿北太平洋边缘呈明显间断分布：千岛群岛、堪察加和科曼多尔群岛；北海道东部近海；阿留申群岛、阿拉斯加南岸和阿拉斯加湾；阿拉斯加东南部、不列颠哥伦比亚和华盛顿州；加利福尼亚中部海岸与圣尼古拉斯岛；下加利福尼亚零星海域。地图不能把俄罗斯远东至墨西哥的整条海岸涂成连续占域。

`center: { lat: 52, lng: -170 }` 只是让北太平洋范围在地图里易读的代表焦点，不是分布几何中心、种群重心或密度最高点。

### 生产字段只用 marine realm

MDD 将海獭的领域标为 Marine。COSEWIC 则指出，它是唯一在海洋中完成全部生命过程的鼬科动物。个体会在岩礁、沙滩或冰缘短暂上岸，但休息、交配、生产、哺育和绝大多数觅食都能在海上完成。仓库结构化值应为 `realms: ['marine']`；上岸行为不足以再加 `terrestrial`。[MDD](https://www.mammaldiversity.org/taxon/1005842/) [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

这也构成与欧亚水獭 _Lutra lutra_ 的清晰对照：欧亚水獭是需要水体与陆上岸带的半水栖动物，海獭则是以近岸海洋为完整生活空间的海生鼬科。

### 近岸不是单一的“巨藻林”

海獭常见于岩礁和巨藻林，也利用软底海湾、河口、海草床、岛屿外缘和有遮蔽的近岸水域。巨藻冠层可以减缓漂移并提供休息、育幼空间，但无巨藻的软底系统也可能支持高密度种群。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html) [U.S. Fish and Wildlife Service](https://www.fws.gov/species/southern-sea-otter-enhydra-lutris-nereis)

多数觅食发生在 **40 米以内**的水深，个体能够下潜约 **100 米**；活动通常集中在距岸 1 至 2 千米以内。100 米是能力或记录上限，不是典型日常深度，不能让所有故事场景变成深海。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

## 形态与冷水生理

### 体尺只能保存来源真正给出的上限

COSEWIC 给出的成体总长和体重上限为：雄性可至 **148 厘米、46 千克**，雌性可至 **140 厘米、36 千克**；新生幼崽约 1.7 至 2.3 千克、总长可至 60 厘米。这组资料没有给出可直接作为全物种成体范围的统一下限。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

因此 `measurements.length` 和 `measurements.weight` 只写 `max` 与性别注释，不把 140 至 148 厘米或 36 至 46 千克伪装成“所有成体的正常范围”。`metrics.adultLengthCm` 与 `metrics.adultMassKg` 暂不填写，避免把上限转成可排序的两端范围。

海獭具有宽大、扁平而像鳍的后足，灵活前爪、敏感触须、强壮前肢和逐渐收窄的肌肉质尾巴。腋下松弛皮肤形成临时储物褶，可在觅食时放置猎物或石头；臼齿偏圆钝，适于压碎硬壳。这些特征比“可爱的圆脸”更适合作为六张图的形态锚点。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html) [U.S. Fish and Wildlife Service](https://www.fws.gov/species/southern-sea-otter-enhydra-lutris-nereis)

### 保温依赖被毛，也依赖持续产热

海獭几乎没有可充当主要隔热层的皮下脂肪。外层护毛和极密的绒毛层困住空气，毛密度约可达 **每平方厘米 100,000 根**；频繁梳理用于清洁、排列并维持这层空气屏障。一张梳理被毛的图可以表现维护行为，却不能从像素中“测出”毛密度。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

Wright 等对海獭肌肉代谢的研究发现，其基础代谢约为体型预测值的三倍，骨骼肌线粒体的热生成泄漏可以解释相当一部分高代谢需求，而且幼崽已具有接近成体水平的肌肉产热特征。研究支持“肌肉帮助持续产热”，不支持在外观图里画发光肌肉或透明解剖层。[Wright et al. 2021](https://doi.org/10.1126/science.abf4557)

维持保温的能量成本很高。权威物种报告给出海獭每天摄食超过自身体重 **20%**，基础代谢约为同体型陆生食肉动物的 2.4 至 3.2 倍。20% 是日摄食量级，不是每次潜水的猎物重量，也不适合换算成一个全球固定的贝类只数。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

雌性一般可活 **15 至 20 年**，雄性约 **10 至 15 年**。`metrics.lifespanYears: [10, 20]` 是跨性别物种级包络，正文和注释必须保留性别差异。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

## 感知、食性与工具使用

### 前爪和触须让海底纹理变得可读

海獭常以灵活前爪在岩缝和沉积物中寻找猎物，触须则补充近距离触觉信息。McKay Strobel 等让一只受训成年雌性分辨有细微纹理差异的物体，发现前爪和触须都能快速完成高精度触觉判断。研究直接证明的是一只受训个体的实验能力；生产文案可写“前爪和触须具有精细触觉”，不能把具体阈值当成所有野生海獭的固定性能。[McKay Strobel et al. 2018](https://doi.org/10.1242/jeb.181347)

### 海獭是广食性的底栖肉食者，不是以鱼为主的“食鱼动物”

常见猎物包括海胆、蛤和贻贝等双壳类、螺与石鳖、蟹和其他甲壳类、章鱼、海参与海星。鱼类在阿留申群岛、科曼多尔群岛和千岛群岛部分种群中可以重要，在许多岩礁和软底系统中却不是核心菜单。结构化食性只写 `types: ['carnivore']`，不加 `piscivore`。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

随着种群密度和资源竞争改变，个体会形成长期猎物偏好；部分偏好可由幼崽跟随母兽时学得。一个地区或一只个体的食谱不能替代全物种菜单，也不能由单次进食图像推断种群资源状况。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

### 工具使用真实存在，但远非每次觅食都发生

Fujii、Ralls 与 Tinker 汇总 17 年、8 个种群的觅食记录，发现使用石头或其他硬物处理猎物的比例差异很大：不同地点中会使用工具的个体比例约 **10% 至 93%**，工具行为占猎物捕获潜水的比例从阿姆奇特卡岛不足 1% 到蒙特雷约 16%。螺类和厚壳双壳类与工具使用联系最强，软体猎物最少触发工具行为。[Fujii et al. 2015](https://doi.org/10.1093/beheco/aru220)

第 04 帧可以表现一只海獭把一块石头当砧台敲开一只厚壳蛤，但 caption 必须写“部分个体会这样做”。不画每只海獭永久携带专属石锤，也不把海胆放在石头上敲碎。海獭经常直接咬开或用前爪处理海胆，工具场景选择厚壳双壳类更符合研究关联。

## 关键种作用与证据边界

Estes 与 Duggins 比较阿留申群岛 153 个地点，并结合海獭重新占据后的时间变化，显示海獭捕食海胆常能降低海胆密度和放牧压力，使巨藻林更容易维持。不同岛屿的海胆补充、生境和时间过程会改变响应速度，所以正确表述是“海獭可以触发或维持海胆至巨藻的营养级联”，不是“有一只海獭就一定长出巨藻林”。[Estes & Duggins 1995](https://doi.org/10.2307/2937159)

海獭的生态作用也不止岩礁巨藻系统。Hughes 等在加利福尼亚 Elkhorn Slough 发现，海獭压低蟹类，释放以藻类为食的小型消费者，从而帮助海草抵抗富营养化。这是一个有地点边界的河口级联，不能把“海獭吃蟹就能修复海草”写成全球固定链条。[Hughes et al. 2013](https://doi.org/10.1073/pnas.1302805110)

故事图第 03 帧只表现“海獭在岩礁巨藻林中取得一只海胆”这一可见事件。营养级联需要长期、群落尺度数据，不能由单张喂食图直接证明。

## 繁殖与母幼关系

雌性通常在 3 至 5 岁达到性成熟，雄性约 5 至 6 岁开始有效参与繁殖。交配和生产全年都可能发生，不同地区有季节高峰；延迟着床会让交配与分娩间隔不能直接当作胚胎实际发育时间。海獭为多配偶制，雌雄常组成分开的海面群体，成年雄性会建立繁殖领域或进行季节移动。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

雌性通常一次产 **一只幼崽**，约一年一次，并独自承担全部照护。幼崽在水面出生，依赖母兽约 **6 至 8 个月**；母兽背负、梳理、哺乳、保护幼崽，也要潜水取得自己和幼崽所需的食物。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

Thometz 等对南方海獭母兽的研究估算，产后三周的日能量需求比非繁殖期高约 17%，到平均断奶期接近高 96%。这组数字来自南方海獭研究，用于说明育幼成本随幼崽成长大幅上升；它不是所有亚种、地点和个体的全球常数。[Thometz et al. 2014](https://doi.org/10.1242/jeb.099739)

第 05 帧必须是恰好一只母兽和一只浅色、蓬松、仍依赖的幼崽。画面不出现成年雄性或第二只幼崽，不声明精确月龄，也不把一次托抱图像当成亲缘鉴定或断奶阶段证据。

## 威胁、恢复与监测

### 历史恢复没有消除当代风险

商业毛皮贸易曾把估计 150,000 至 300,000 只的历史种群压到 1911 年不足 2,000 只，仅剩约 11 个残存群体。保护、捕猎禁令和 20 世纪的转移计划让许多地区重新出现海獭，但恢复程度极不均衡；当前全球 EN 和下降趋势反映的正是这种不均衡。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html) [IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en)

### 当前主要威胁需要区分全球压力和区域机制

- **油污**：原油破坏被毛困住空气的能力，报告估计隔热能力可下降约 70%，随后出现失温、摄入油污和器官损害。海獭近岸聚集且高度依赖被毛，因此大型溢油可造成集中死亡；长期小规模泄漏也不能忽略。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)
- **渔具和船只**：刺网、蟹笼、废弃渔具可导致缠绕或溺死，近岸船只碰撞造成额外死亡。
- **非法捕杀与渔业冲突**：对贝类、海胆和蟹类资源的重叠利用可能引发报复性杀害；单纯强调执法不能替代与沿海社区、原住民族和渔业使用者共同设计治理。
- **病原体、生物毒素与陆海径流**：弓形虫、神经孢子虫、软骨藻酸、微囊藻毒素及污染物可经猎物累积。问题常从流域、污水与有害藻华进入近岸食物网，不能只在海上处理死亡个体。
- **气候和生态系统变化**：海洋增温、酸化、极端事件与猎物生境变化会叠加食物限制和疾病压力。
- **区域捕食压力**：虎鲸捕食被用于解释阿留申群岛和阿拉斯加西南部的部分下降；大白鲨咬伤死亡限制加利福尼亚种群向边缘扩展。这两种机制都有明确地理边界，不能写成所有海獭种群的首要全球原因。
- **人为干扰**：船艇和过近观察会打断休息、梳理和育幼。母兽受惊与幼崽分离的后果尤其严重。

上述机制及其地区差异见 IUCN 与 COSEWIC 的综合评估。[IUCN Red List errata assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en) [COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

### 保护行动必须把近岸与流域连起来

生产档案可归纳为六组行动：

1. 预防溢油，建立面向近岸聚集海獭的快速响应、救护和长期生态监测能力；
2. 减少刺网、蟹笼和幽灵渔具缠绕，治理船只碰撞和高干扰水域；
3. 保护与恢复巨藻林、海草床、软底海湾和岛屿近岸等多样生境；
4. 改善污水、雨洪和流域污染管理，联合监测病原体、有害藻华与猎物污染；
5. 与原住民族、沿海社区和渔业共同处理资源冲突，将非法捕杀预防与公平治理结合；
6. 以标准化重复调查、标记或遥测、搁浅与尸检、健康采样和检测概率模型追踪区域趋势。

重新引入或推动范围扩张前，还要评估猎物、生境、疾病、渔业和社会可行性。历史上“转移后建立种群”不能被简化成把动物搬到旧范围就会自动恢复。[COSEWIC 2022](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html)

### 一次计数不能成为趋势

美国地质调查局在加利福尼亚用岸上望远镜、双筒镜与空中调查组合计数，并继续开发能处理覆盖和检测差异的统计模型。可靠趋势来自固定设计下的重复调查，不来自一张远景图、一次航次或未经校正的相邻年份总数。[USGS California sea otter surveys and research](https://www.usgs.gov/centers/werc/science/california-sea-otter-surveys-and-research) [USGS 2024 census and statistical model development](https://www.usgs.gov/centers/werc/news/2024-southern-sea-otter-census-and-statistical-model-development)

第 06 帧应表现两名研究者在岸上用望远镜和双筒镜观察远处巨藻中的小群海獭，不出现可读坐标、个体编号或精确地点。caption 必须说明标准化重复调查和检测校正才支持丰度或趋势判断。

## 推荐的 6 段故事

1. **把一生留在海里**：海獭能在海上觅食、休息、交配、生产和育幼，是现存鼬科里海洋化最彻底的一支。
2. **没有厚脂肪的冷水生活**：极密双层被毛、持续梳理和骨骼肌产热共同维持体温，高代谢迫使它每天取得大量食物。
3. **一只海胆背后的巨藻林**：捕食海胆可以减轻放牧压力并支持巨藻林，但营养级联的强度随地点和群落过程改变。
4. **前爪、触须与石砧**：精细触觉帮助寻找和处理底栖猎物，部分个体还会用石头对付厚壳猎物；工具行为具有明显个体和地区差异。
5. **母兽独自承担的六至八个月**：一只幼崽看似轻巧，长期托抱、哺乳和双份觅食却把母兽推向很高的能量负担。
6. **恢复是一张不均匀的海岸地图**：毛皮贸易后的保护和转移带来局部回归，油污、渔具、疾病、冲突与区域捕食压力又让不同海岸走向不同。

## 推荐关键事实

- IUCN 当前正式值为 EN、A2abe、下降，评估日期为 2020-01-21。
- 通行分类承认 _E. l. lutris_、_E. l. kenyoni_ 和 _E. l. nereis_ 三个亚种；生产主记录保持物种级。
- IUCN 记录加拿大、俄罗斯和美国为现存常驻，日本和墨西哥为现存但季节性不确定。
- 海獭在海上完成全部生命过程；短暂上岸不改变 `marine` 领域取值。
- 成体雄性可至 148 厘米、46 千克，雌性可至 140 厘米、36 千克；这些是上限，不是全体成体的两端范围。
- 被毛密度约可达每平方厘米 100,000 根，几乎没有主要隔热脂肪层，需要频繁梳理并持续产热。
- 海獭每天摄食超过体重的 20%，多数觅食潜水在 40 米以内，最大约 100 米。
- 工具使用随个体和种群变化；8 个种群研究中，会使用工具的个体比例约 10% 至 93%。
- 雌性通常一次产一只幼崽并独自照护约 6 至 8 个月。
- 2000 至 2018 年地区资料汇总为约 128,902 只所有年龄个体，不是成熟个体数或同步全球普查。
- CITES 对亚种分列：_E. l. nereis_ 在附录 I，其余海獭经水獭亚科兜底条目进入附录 II。
- 海獭是 _Enhydra lutris_；欧亚水獭是 _Lutra lutra_。前者是海生近岸关键种，后者是依赖水域和陆岸的半水栖物种。

## 应删除或避免的说法

- 不把 2021 或 2022 写成 IUCN `assessedYear`；正式评估日期在 2020 年。
- 不漏掉 `A2abe`，也不把区域增长覆盖全球 `decreasing` 趋势。
- 不把 128,902 写成成熟个体、实时全球数量或同一方法的同步普查。
- 不把日本和墨西哥写成已确认稳定繁殖国家；IUCN 标注其季节性不确定。
- 不画一条从俄罗斯到墨西哥连续不断的当前分布带。
- 不因为海獭会上岸就在 `realms` 中加入 `terrestrial`。
- 不把整个物种写成 CITES 附录 I 或整个物种写成附录 II；南方亚种必须单列。
- 不把 140 至 148 厘米、36 至 46 千克写成所有成体的正常范围；来源给的是两性各自上限。
- 不填没有成熟个体口径支持的 `estimatedMatureIndividuals`。
- 不把海獭归为主要食鱼的 `piscivore`；许多种群以底栖无脊椎动物为主。
- 不写“每只海獭都有专属石头”“每次潜水都用工具”或“海胆需要石头敲开”。
- 不把一只海獭吃海胆的照片当成巨藻林恢复、碳储量增加或种群健康的直接证据。
- 不把 Elkhorn Slough 的蟹至海草链条推广成所有海岸的固定机制。
- 不写幼崽由双亲照护，不在母幼图中加入成年雄性或常态化双胞胎。
- 不把南方海獭母兽的精确能量增幅写成所有海獭的全球常数。
- 不把虎鲸捕食或大白鲨咬伤写成每个地区的首要威胁。
- 不用油污、伤口、尸体或母幼分离制造视觉冲击，也不公开敏感观察点、调查路线和实时坐标。
- 不凭一次岸上计数或一张图片断言种群丰度、增长率或恢复成功。

## 1 张封面与 5 张 gallery 的科学图像方案

六张图均为依据物种事实设计的编辑示意，不是现场记录、亚种鉴定或种群证据。建议生成 1536×1024 的 3:2 横幅，运行时统一转为 WebP，信用写 `Fauna Atlas · AI 生成原创图像`。

| 帧  | 精确 basename 与推荐运行时路径                                                                      | 可视事实与证据边界                                                                                 |
| --- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 01  | `01-kelp-surface-portrait.webp`；`./images/species/sea-otter/01-kelp-surface-portrait.webp`         | 一只完整成年海獭在右侧巨藻冠层间仰浮休息，左侧留界面负空间；不指定性别、亚种、年龄或体重           |
| 02  | `02-dense-fur-grooming.webp`；`./images/species/sea-otter/02-dense-fur-grooming.webp`               | 一只海獭在水面梳理胸前和前肢，呈现护毛、绒毛、前爪和鳍状后足；画面不能证明每平方厘米毛数或肌肉代谢 |
| 03  | `03-urchin-kelp-foraging.webp`；`./images/species/sea-otter/03-urchin-kelp-foraging.webp`           | 一只海獭在岩礁巨藻林水下取得恰好一只海胆；一次捕食不能证明群落尺度营养级联                         |
| 04  | `04-shellfish-tool-use.webp`；`./images/species/sea-otter/04-shellfish-tool-use.webp`               | 一只仰浮海獭用胸前恰好一块石头处理恰好一只厚壳蛤；工具使用有个体和地点差异                         |
| 05  | `05-mother-with-dependent-pup.webp`；`./images/species/sea-otter/05-mother-with-dependent-pup.webp` | 恰好一只母兽托抱并梳理恰好一只浅色蓬松幼崽；无成年雄性，不声明精确月龄或亲缘鉴定                   |
| 06  | `06-shore-based-census.webp`；`./images/species/sea-otter/06-shore-based-census.webp`               | 恰好两名研究者从高处岩岸用望远镜和双筒镜观察远处巨藻中的小群海獭；单次计数不能证明丰度或趋势       |

### 六张图的研究提示词

**共同正向锚点**：`photorealistic wildlife editorial, wild Enhydra lutris at species level, robust elongated mustelid body, blunt rounded muzzle, thick facial vibrissae, small ears, short dexterous forepaws, broad flattened flipper-like webbed hindfeet, muscular tapering tail, dense dark-brown to reddish-brown double coat with an age-variable pale grizzled face, North Pacific nearshore environment, natural documentary light, horizontal 3:2, 1536x1024, anatomically coherent, no subspecies claim`。

**共同排除项**：`no Eurasian or river-otter body, no long cylindrical river-otter tail, no seal flippers, no beaver tail, no exaggerated claws, no human hands, no zoo, no aquarium, no cage, no collar, no tag, no petting, no feeding by people, no crowding, no cartoon, no fantasy glow, no transparent anatomy, no infographic, no text, no watermark, no logo, no map, no collage, no oil-coated animal, no blood, no wound, no carcass, no extra limbs, no extra tails, no extra digits, no duplicate animal unless the scene explicitly requires it`。

1. **01 封面，`01-kelp-surface-portrait`**：`exactly one full-bodied adult sea otter floating calmly on its back on the right third among a coherent giant-kelp surface canopy, head raised slightly, both dexterous forepaws resting naturally on the chest, broad flattened hindfeet and tapering tail visible under the clear surface, wide quiet open-water negative space on the left for interface copy, soft overcast North Pacific morning, no other animal, no people, no prey, no tool`。只建立海生形态与巨藻近岸环境，不指定亚种或性别。
2. **02 被毛，`02-dense-fur-grooming`**：`exactly one full-bodied adult sea otter at the sea surface actively grooming the chest and one forelimb with its short forepaws, dense dry-looking grizzled head fur transitioning to wet dark guard hairs, one broad flattened hindfoot clearly visible, realistic water droplets and trapped-air sheen without bubbles covering the face, intimate documentary view with the entire body readable, no second otter, no pup, no anatomy overlay`。可视事实是梳理和双层被毛外观，毛密度与肌肉产热只放 caption。
3. **03 海胆，`03-urchin-kelp-foraging`**：`exactly one full-bodied sea otter underwater above a shallow rocky reef in a coherent giant-kelp forest, grasping exactly one intact sea urchin between both forepaws, sensitive whiskers directed toward the prey, broad flattened hindfeet and muscular tapering tail fully visible, natural green-blue filtered light, no rock tool, no shellfish, no fish, no second otter, no feeding frenzy`。海胆不放在石砧上；一次捕食不代表级联已经发生。
4. **04 工具，`04-shellfish-tool-use`**：`exactly one adult sea otter floating on its back at the surface, exactly one plain rounded stone resting securely on the chest as an anvil, both forepaws holding exactly one closed thick-shelled clam immediately above the stone in a restrained striking moment, anatomically natural wrists and digits, broad flattened hindfeet visible, open nearshore water with a little kelp, no sea urchin, no extra rock, no extra prey, no anthropomorphic hammer grip, no human object`。工具是石砧，不是手持锤子；场景不暗示所有个体都会这样做。
5. **05 母幼，`05-mother-with-dependent-pup`**：`exactly one adult female sea otter floating calmly in a sheltered kelp surface bed while carrying and gently grooming exactly one dependent pup on her chest, pup with a pale tan grizzled face and buoyant fluffy natal coat, mother darker and larger, both faces unobstructed, maternal contact natural and calm, no adult male, no second pup, no tool, no prey, no human contact`。不把幼崽画成缩小版成体，不声明精确月龄。
6. **06 调查，`06-shore-based-census`**：`exactly two distant field researchers on an elevated rocky coastal bluff, one looking through one tripod-mounted spotting scope and the other using binoculars, both facing a broad North Pacific kelp bed where a tiny distant raft of several sea otters appears as small natural silhouettes, wide environmental composition, safe non-contact observation, no boat, no drone, no animal handling, no readable map, no coordinates, no branded equipment, no readable device screen`。研究人员数量、器材和距离明确；caption 说明调查设计，而不是让图片冒充趋势数据。

## 研究阶段的来源常量与字段草案

以下代码块按照当前 `Species` 类型和 `species.ts` 辅助函数书写，可作为集成起点。图片尚未生成时，先不要把对象并入生产数组；素材通过静态验收后再接入路径。

```ts
const SEA_OTTER_SOURCE_DATE = "2026-08-25" as const;
const SEA_OTTER_CONTENT_DATE = "2026-08-25" as const;

const SEA_OTTER_SOURCES = [
  {
    title:
      "IUCN Red List: Enhydra lutris (assessed 2020; errata published 2022)",
    url: "https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T7750A219377647.en",
    kind: "conservation",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "ASM Mammal Diversity Database v2.5: Enhydra lutris",
    url: "https://www.mammaldiversity.org/taxon/1005842/",
    kind: "taxonomy",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "COSEWIC 2022: Sea Otter assessment and status report",
    url: "https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/sea-otter-2022.html",
    kind: "general",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "中国大百科全书：海獭",
    url: "https://www.zgbk.com/ecph/words?Name=%E6%B5%B7%E7%8D%AD&SiteID=1&SourceID=198808&Type=bkzyb&subSourceType=000003000007000022",
    kind: "taxonomy",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title:
      "Cronin et al. 1996: Systematics, taxonomy, and genetic variation of sea otters",
    url: "https://doi.org/10.2307/1382828",
    kind: "taxonomy",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "CITES Appendices I, II and III, effective 5 March 2026",
    url: "https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf",
    kind: "conservation",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "国家林草局：CITES 附录中文版，2026年3月5日生效",
    url: "https://www.forestry.gov.cn/u/cms/www/202603/09095455uug5.pdf",
    kind: "conservation",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "U.S. Fish and Wildlife Service: Southern Sea Otter",
    url: "https://www.fws.gov/species/southern-sea-otter-enhydra-lutris-nereis",
    kind: "general",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "Estes & Duggins 1995: Sea otters and kelp forests in Alaska",
    url: "https://doi.org/10.2307/2937159",
    kind: "ecology",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title:
      "Hughes et al. 2013: Recovery of a top predator mediates negative eutrophic effects on seagrass",
    url: "https://doi.org/10.1073/pnas.1302805110",
    kind: "ecology",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title:
      "Fujii, Ralls & Tinker 2015: Ecological drivers of variation in tool-use frequency",
    url: "https://doi.org/10.1093/beheco/aru220",
    kind: "ecology",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title:
      "Wright et al. 2021: Skeletal muscle thermogenesis enables aquatic life in sea otters",
    url: "https://doi.org/10.1126/science.abf4557",
    kind: "ecology",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "McKay Strobel et al. 2018: Active touch in sea otters",
    url: "https://doi.org/10.1242/jeb.181347",
    kind: "ecology",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title:
      "Thometz et al. 2014: Energetic demands of immature sea otters and reproductive females",
    url: "https://doi.org/10.1242/jeb.099739",
    kind: "ecology",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title: "USGS: California sea otter surveys and research",
    url: "https://www.usgs.gov/centers/werc/science/california-sea-otter-surveys-and-research",
    kind: "conservation",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
  {
    title:
      "USGS 2024: Southern sea otter census and statistical model development",
    url: "https://www.usgs.gov/centers/werc/news/2024-southern-sea-otter-census-and-statistical-model-development",
    kind: "conservation",
    accessedAt: SEA_OTTER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const SEA_OTTER_PROFILE = {
  id: "species-enhydra-lutris",
  slug: "sea-otter",
  names: { zh: "海獭", en: "Sea Otter", aliases: ["海虎"] },
  scientificName: "Enhydra lutris",
  taxonomy: animalTaxonomy(
    taxon("Chordata", "脊索动物门"),
    taxon("Mammalia", "哺乳纲"),
    taxon("Carnivora", "食肉目"),
    taxon("Mustelidae", "鼬科"),
    taxon("Enhydra", "海獭属"),
  ),
  conservation: conservation("EN", "decreasing", 2020, "A2abe"),
  distribution: {
    realms: ["marine"],
    continents: ["亚洲", "北美洲"],
    regions: [
      "千岛群岛、堪察加半岛与科曼多尔群岛",
      "北海道东部近海，常驻状态尚不确定",
      "阿留申群岛、阿拉斯加南岸与阿拉斯加湾",
      "阿拉斯加东南部、不列颠哥伦比亚和华盛顿州外海",
      "加利福尼亚中部海岸与圣尼古拉斯岛",
      "下加利福尼亚近海，季节性或常驻状态尚不确定",
    ],
    countries: ["加拿大", "日本", "墨西哥", "俄罗斯", "美国"],
    range:
      "沿北太平洋边缘的岛屿与近岸海域间断分布，从千岛群岛、堪察加和科曼多尔群岛，经阿留申群岛与阿拉斯加湾延至不列颠哥伦比亚、华盛顿州和加利福尼亚；北海道东部与下加利福尼亚有现存记录，但季节性或常驻状态尚不确定。",
    center: { lat: 52, lng: -170 },
  },
  habitats: [
    {
      name: "岩礁与巨藻林",
      realm: "marine",
      description:
        "浅海岩礁提供海胆、螺、蟹与双壳类等底栖猎物；巨藻冠层也能减缓漂移，为水面休息和母幼照护提供结构。",
      isPrimary: true,
    },
    {
      name: "软底海湾、河口与海草床",
      realm: "marine",
      description:
        "蛤类丰富的软沉积物、受遮蔽海湾和河口可支持高密度种群；海獭通过蟹类等猎物也能改变局部海草食物网。",
    },
    {
      name: "岛屿外缘与有遮蔽的近岸水域",
      realm: "marine",
      description:
        "活动通常集中在距岸一至两千米以内，多数觅食潜水浅于四十米；安全水面与邻近猎物地共同构成完整生境。",
    },
  ],
  measurements: {
    length: {
      max: 148,
      unit: "cm",
      note: "成体总长上限；雄性可至148厘米，雌性可至140厘米，不能把140至148厘米写成全体成体范围",
    },
    weight: {
      max: 46,
      unit: "kg",
      note: "成体体重上限；雄性可至46千克，雌性可至36千克，体重随性别、地点与资源条件变化",
    },
  },
  diet: {
    types: ["carnivore"],
    foods: [
      "海胆",
      "蛤、贻贝等双壳类",
      "螺与石鳖",
      "蟹和其他甲壳类",
      "章鱼",
      "海参与海星",
      "部分地区的鱼类",
    ],
    description:
      "海獭主要潜至海底捕食底栖无脊椎动物，鱼类只在部分西部种群中占较大比重。个体常形成长期猎物偏好，食谱会随地点、密度和资源条件改变；部分个体用石头处理厚壳猎物。",
  },
  activity: [
    "昼夜均可活动，觅食节律随地点、潮汐与资源改变",
    "在海底觅食，在水面进食、休息和梳理被毛",
    "雌雄常组成分开的海面群体，繁殖雄性可建立领域",
    "多数个体具有较强地点忠诚，部分会季节移动或随范围扩张迁移",
    "工具使用频率随个体、猎物和种群显著变化",
  ],
  tags: [
    "北太平洋",
    "海生鼬科",
    "近岸关键种",
    "工具使用",
    "IUCN 濒危",
    "CITES 亚种分列",
  ],
  summary:
    "在北太平洋近岸完成一生的海生鼬科动物，以极密被毛、持续产热和灵活前爪适应冷水，也能通过捕食海胆与蟹类重塑局部生态系统。",
  description:
    "海獭不是住在海边的欧亚水獭。宽大的鳍状后足推动它在近岸潜水，短而灵活的前爪和敏感触须寻找底栖猎物；几乎没有主要隔热脂肪层的身体依靠极密双层被毛、频繁梳理和高代谢抵御冷水。部分个体会把石头当作砧台处理厚壳猎物。它们曾在毛皮贸易中濒临消失，保护和转移让许多海岸重新出现海獭，但阿留申群岛的下降、加利福尼亚的范围限制以及油污、渔具、疾病和冲突仍使全球趋势保持下降。",
  storySections: [
    {
      key: "fully-marine-mustelid",
      label: "海洋生活",
      title: "把一生留在海里",
      body: "海獭能在水面休息、进食、交配、生产和照护幼崽，也会短暂登上岩礁或沙滩。宽大的鳍状后足和肌肉质尾巴负责水中推进与转向，短而灵活的前爪则处理海底猎物。它与需要陆上岸带的欧亚水獭共享鼬科祖先，却走上了更彻底的海洋道路。",
    },
    {
      key: "fur-and-heat",
      label: "保温与能量",
      title: "没有厚脂肪，便要守住每一层空气",
      body: "极密绒毛困住空气，外层护毛挡水，梳理让这道屏障保持整洁和排列。骨骼肌持续产热又补上另一重防线。代价是很高的能量需求：海獭每天要摄食超过体重的五分之一，一次次下潜维持的不只是饱腹，还有体温。",
    },
    {
      key: "urchins-and-kelp",
      label: "关键种作用",
      title: "一只海胆背后，是会改变方向的巨藻林",
      body: "在许多岩礁系统中，海獭捕食海胆，降低其密度与放牧压力，帮助巨藻林维持。这个营养级联有扎实的跨地点和时间证据，却不是自动发生的公式；海胆补充、生境和其他捕食者都会改变响应强度。一次进食画面只能展示链条起点。",
    },
    {
      key: "touch-and-tools",
      label: "感知与工具",
      title: "前爪读纹理，石头成为砧台",
      body: "灵活前爪和触须让海獭在岩缝、沉积物和浑水中分辨猎物。面对厚壳蛤或螺，部分个体把石头留在腋下皮褶，再带到水面当砧台。工具使用不是物种统一动作：不同地点使用者比例和每次觅食的使用频率相差很大。",
    },
    {
      key: "mother-and-pup",
      label: "繁殖与成长",
      title: "一只幼崽，占据母亲六至八个月",
      body: "雌性通常一次产一只幼崽，并独自承担托抱、梳理、哺乳、保护和觅食。幼崽依赖期约六至八个月，母兽的能量负担会随幼崽成长显著上升。水面上安静的一次托抱，是一段漫长投入中的片刻。",
    },
    {
      key: "uneven-recovery",
      label: "保护与监测",
      title: "同一片北太平洋，恢复写出不同答案",
      body: "捕猎禁令、法律保护和转移计划让海獭重返不少海岸，却没有带来整齐的全球恢复。西部大范围下降、加利福尼亚边缘死亡、油污、渔具、病原体和资源冲突仍在塑造各地种群。只有长期重复调查、健康监测和跨流域治理，才能看清变化来自哪里。",
    },
  ],
  keyFacts: [
    "海獭是Enhydra lutris；欧亚水獭是Lutra lutra，前者在海洋中完成全部生命过程。",
    "通行分类承认三个亚种：E. l. lutris、E. l. kenyoni和E. l. nereis。",
    "IUCN全球评估为濒危A2abe、趋势下降，评估日期为2020年1月21日。",
    "极密双层被毛每平方厘米约可达100,000根毛；频繁梳理用于维持困住空气的隔热层。",
    "海獭每天摄食超过体重的20%；多数觅食潜水在40米以内，能够下潜约100米。",
    "工具使用随个体和地点改变；八个种群研究中，会使用工具的个体比例约为10%至93%。",
    "雌性通常一次产一只幼崽，独自照护约6至8个月。",
    "CITES将南方海獭E. l. nereis列入附录I，其余海獭经水獭亚科条目列入附录II。",
  ],
  threats: [
    "大型与慢性油污破坏被毛隔热，造成失温、中毒和集中死亡",
    "刺网、蟹笼和废弃渔具缠绕或溺死，以及近岸船只碰撞",
    "贝类和其他渔业资源冲突引发的非法或报复性捕杀",
    "弓形虫等病原体、生物毒素、污染物和陆海径流进入近岸食物网",
    "海洋增温、酸化和极端事件改变猎物、生境与疾病风险",
    "虎鲸捕食和大白鲨咬伤在特定区域限制种群恢复或范围扩张",
    "船艇和过近观察打断休息、梳理与母幼照护",
  ],
  conservationActions: [
    "预防溢油并维持面向近岸聚集海獭的快速响应、救护与长期跟踪能力",
    "降低渔具缠绕、幽灵渔具和船只碰撞风险，管理高干扰水域",
    "保护和恢复巨藻林、海草床、软底海湾及相连的近岸猎物生境",
    "改善流域污水和雨洪管理，联合监测病原体、有害藻华与污染物",
    "与原住民族、沿海社区和渔业共同处理资源冲突，预防非法捕杀",
    "用标准化重复计数、检测校正、遥测、搁浅尸检和健康采样追踪区域趋势",
    "按亚种落实CITES附录I与附录II的差异化国际贸易管制",
  ],
  metrics: {
    lifespanYears: [10, 20],
    maxDiveDepthM: 100,
  },
  featuredStats: [
    {
      key: "fur-density",
      label: "被毛密度",
      value: "约100,000",
      unit: "根/平方厘米",
      note: "权威物种报告给出的量级；画面无法直接验证毛发计数",
    },
    {
      key: "daily-intake",
      label: "每日摄食量",
      value: ">20%",
      unit: "体重",
      note: "支撑冷水生活高代谢的日摄食量级，不是每次潜水的摄食量",
    },
    {
      key: "foraging-depth",
      label: "多数觅食水深",
      value: "≤40",
      unit: "米",
      note: "最大下潜能力约100米，多数日常觅食远浅于此",
    },
    {
      key: "pup-dependence",
      label: "幼崽依赖期",
      value: "6—8",
      unit: "个月",
      note: "雌性通常独自照护一只幼崽",
    },
  ],
  media: {
    image: "./images/species/sea-otter/01-kelp-surface-portrait.webp",
    alt: "依照Enhydra lutris形态创作的AI图像：北太平洋巨藻冠层间，一只完整成年海獭在右侧仰浮休息，宽大后足和逐渐收窄的尾巴透过水面可见",
    focalPoint: { x: 0.72, y: 0.52 },
    credit: "Fauna Atlas · AI 生成原创图像",
    gallery: [
      {
        image: "./images/species/sea-otter/02-dense-fur-grooming.webp",
        alt: "依照Enhydra lutris形态创作的AI图像：一只海獭在海面用短前爪梳理胸前和前肢，深色护毛、浅色头部与一只宽大鳍状后足清楚可见",
        title: "守住被毛里的空气",
        caption:
          "梳理帮助双层被毛维持困住空气的隔热结构；每平方厘米约十万根毛和骨骼肌产热来自测量与生理研究，不能由图片本身证明。",
        focalPoint: { x: 0.55, y: 0.53 },
      },
      {
        image: "./images/species/sea-otter/03-urchin-kelp-foraging.webp",
        alt: "依照Enhydra lutris觅食行为创作的AI图像：浅海岩礁巨藻林中，一只完整海獭用双前爪抓住一只海胆，宽大后足和肌肉质尾巴完整可见",
        title: "从海胆到巨藻林",
        caption:
          "海獭捕食海胆可以减轻放牧压力并支持巨藻林；一次进食只展示营养级联的起点，不能证明整个群落已经改变。",
        focalPoint: { x: 0.56, y: 0.52 },
      },
      {
        image: "./images/species/sea-otter/04-shellfish-tool-use.webp",
        alt: "依照Enhydra lutris工具行为创作的AI图像：一只仰浮海獭把一块圆石放在胸前作砧台，双前爪正持一只厚壳蛤准备敲击",
        title: "石头并非人人都会用",
        caption:
          "部分个体用石头处理厚壳猎物；十七年资料显示，工具使用频率随个体、猎物与地点大幅变化。",
        focalPoint: { x: 0.54, y: 0.52 },
      },
      {
        image: "./images/species/sea-otter/05-mother-with-dependent-pup.webp",
        alt: "依照Enhydra lutris母幼行为创作的AI图像：一只成年母海獭在有遮蔽的巨藻水面托抱并梳理一只浅色蓬松幼崽",
        title: "母兽独自承担漫长育幼",
        caption:
          "雌性通常一次产一只幼崽，并独自照护约六至八个月；图像不表示精确月龄或已完成亲缘鉴定。",
        focalPoint: { x: 0.55, y: 0.5 },
      },
      {
        image: "./images/species/sea-otter/06-shore-based-census.webp",
        alt: "依照海獭岸基调查创作的AI图像：两名研究者从高处岩岸用一台单筒望远镜和双筒镜观察远处巨藻中的海獭小群",
        title: "把一次看见变成可比较的调查",
        caption:
          "固定设计下的重复计数与检测校正才支持丰度和趋势判断；单次观察或一张远景图不能证明种群增长。",
        focalPoint: { x: 0.57, y: 0.55 },
      },
    ],
  },
  sources: SEA_OTTER_SOURCES,
  featured: true,
  publishedAt: SEA_OTTER_CONTENT_DATE,
  updatedAt: SEA_OTTER_CONTENT_DATE,
} satisfies Species;
```

## 集成 TODO 与验收清单

### 数据与代码

- [ ] 在 `src/data/species.ts` 增加 `SEA_OTTER_SOURCE_DATE`、`SEA_OTTER_CONTENT_DATE` 和 `SEA_OTTER_SOURCES`。
- [ ] 将字段草案作为 `species-enhydra-lutris` 并入 `species` 数组，保持 `slug: 'sea-otter'` 唯一。
- [ ] 使用 `conservation('EN', 'decreasing', 2020, 'A2abe')`；不要把红色名录发布年写入 `assessedYear`。
- [ ] `realms` 只写 `marine`，国家保留五国，并在 `regions` 与 `range` 中限定日本、墨西哥的季节性不确定状态。
- [ ] 不填 `adultLengthCm`、`adultMassKg` 或 `estimatedMatureIndividuals`；现有证据只支持成体上限和跨年份总数。
- [ ] 核对 _Lutra lutra_ 档案的对照文字，确保水獭与海獭的属名、领域和尾足形态没有互换。

### 图片与静态资产

- [ ] 按六个精确 basename 生成源 PNG，保存到 `src/assets/source/species/sea-otter/`，并写素材 README、提示词、生成日期与验收记录。
- [ ] 将 1536×1024 源图转为对应 WebP，保存到 `src/assets/images/species/sea-otter/`。
- [ ] 静态检查六张源图和六张 WebP 的数量、尺寸、宽高比、文件格式、体积与透明通道。
- [ ] 逐张检查形态：短灵活前爪、宽扁鳍状后足、肌肉质渐细尾巴、粗触须、密实被毛；排除河獭式修长尾足、海豹鳍肢和海狸扁尾。
- [ ] 逐张检查场景数量：第 03 帧一只海獭加一只海胆；第 04 帧一只海獭、一块石头、一只蛤；第 05 帧一母一幼；第 06 帧两名研究者和一套指定器材。
- [ ] 检查第 04 帧没有用石头敲海胆，没有手持拟人锤子；第 05 帧没有雄性或第二只幼崽；第 06 帧没有可读坐标和敏感点位。
- [ ] 运行仓库允许的静态素材检查；按 `AGENTS.md` 要求，不启动 GUI 或无头浏览器验收。

### 测试与收尾

- [ ] 扩展分类、状态、领域、国家限定、体尺上限、指标缺省、六图路径与来源的测试。
- [ ] 增加 CITES 文案或关键事实测试，锁定 `nereis = Appendix I / 其余海獭 = Appendix II`，防止后续被简化成整种单一附录。
- [ ] 运行相关单元测试、TypeScript 类型检查、构建和静态资产检查。
- [ ] 搜索 `sea-otter`、`Enhydra lutris`、`海獭`，确认 id、slug、路径、索引与交叉引用一致。
- [ ] 将 `docs/todo.md` 中“海獭 _Enhydra lutris_”一项勾选，仅在数据、六图、测试和构建全部通过后执行。
- [ ] 提交前执行 `git diff --check`，确认没有空白错误，也没有意外修改并行任务文件。

## 来源适用范围速查

| 来源                      | 适用事实                                                       | 不应外推                                                    |
| ------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------- |
| IUCN 2020 评估，2022 勘误 | EN、A2abe、下降；全球分布状态；西部范围级下降；跨年份总数      | 不把 128,902 当成熟个体或实时普查，不把全球趋势套到每个地区 |
| MDD v2.5                  | 接受名、命名权威、属科目分类、Marine 领域                      | 不用其旧国家状态覆盖 IUCN 当前出现记录                      |
| COSEWIC 2022              | 三亚种、形态、生理、生活史、生境、威胁、加拿大恢复史与全球综述 | 区域数值先保留地点和年份，不能自动变成全球参数              |
| CITES 2026                | _E. l. nereis_ 附录 I，其他海獭经 Lutrinae 条目附录 II         | 不把贸易附录写成 IUCN 灭绝风险，也不把整个物种归入单一附录  |
| Estes & Duggins 1995      | 阿拉斯加多地点的海獭、海胆与巨藻关系                           | 一次捕食不能证明级联；响应不必在每处相同                    |
| Hughes et al. 2013        | Elkhorn Slough 的海獭、蟹、消费者与海草级联                    | 不把河口路径推广成全球固定机制                              |
| Fujii et al. 2015         | 8 个种群中工具使用的个体、猎物与地点差异                       | 不写所有个体、所有潜水都会用工具                            |
| Wright et al. 2021        | 肌肉产热泄漏与高代谢机制                                       | 不用外观图直接表现不可见细胞机制                            |
| McKay Strobel et al. 2018 | 一只受训雌性的前爪和触须触觉能力                               | 不把实验阈值当全部野生个体固定值                            |
| Thometz et al. 2014       | 南方海獭母幼期的能量成本变化                                   | 不把 17% 与 96% 当所有亚种的全球常数                        |
| USGS 调查项目             | 岸基、空中调查与检测校正的监测逻辑                             | 单次计数和单张照片不能证明丰度或趋势                        |
