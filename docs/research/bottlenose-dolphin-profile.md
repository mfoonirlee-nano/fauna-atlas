# 宽吻海豚（*Tursiops truncatus*）完整档案研究

- 检索与核验日期：2026-08-20
- 展示中文名：**宽吻海豚**；英文名：**Common Bottlenose Dolphin**；可检索别名：**瓶鼻海豚、普通宽吻海豚、Bottlenose Dolphin、Bottle-nosed Dolphin**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供科学边界
- 证据标准：接受名与种界优先采用 Society for Marine Mammalogy、ASM Mammal Diversity Database（MDD）与 WoRMS；全球状态采用 IUCN 原始评估 DOI；分布、生活史、威胁与管理优先采用 NOAA、CMS、CITES、FAO 与同行评审原始研究
- 时间口径：本文所称“当前”截至 **2026-08-20**。IUCN 全球评估日期是 2018-05-13，2019 是发布/勘误年份；2022—2026 年发生的分类拆分晚于该评估，二者不能合并成一次“当前分类口径下的重评”
- 数字边界：不提供当前全球精确数量。IUCN 评估曾汇总约 75 万只区域估计，但覆盖远非全球同步、部分资料陈旧，且评估早于后续物种拆分；该数不适合落入 `estimatedMatureIndividuals`

## 结论摘要

### 当前接受名仍是 *Tursiops truncatus*，但它比旧资料中的范围更窄

当前接受学名是 ***Tursiops truncatus* (G. Montagu, 1821)**，属于动物界—脊索动物门—哺乳纲—偶蹄目（Artiodactyla）下的鲸下目/鲸类（Cetacea）—海豚科—宽吻海豚属。MDD v2.5、WoRMS 和海洋哺乳动物学会分类委员会均接受该种；WoRMS 的 AphiaID 为 **137111**。[MDD v2.5](https://www.mammaldiversity.org/taxon/1006443/) [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=137111) [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

仓库 `SpeciesTaxonomy` 只容纳“目”一个字段，现有蓝鲸记录已把 `Cetacea` 简化显示为“鲸目”。为保持项目分类图谱连通，落库可继续使用：

```ts
taxon('Cetacea', '鲸目')
```

但详情正文应说明，当前完整系统分类把 Cetacea 置于 Artiodactyla 内；这个 helper 选择是**界面阶元简化**，不是主张鲸类与偶蹄目平行。[Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

旧资料中笼统的 “bottlenose dolphin” 不能自动归到本种。当前分类委员会接受三个现生 *Tursiops* 物种：普通宽吻海豚 ***T. truncatus***、印度太平洋宽吻海豚 ***T. aduncus***，以及 2022 年恢复为有效种的塔马南德宽吻海豚 ***T. erebennus***。后者包括美国东岸纽约至佛罗里达中部一带原先归入 *T. truncatus* 的近岸型；当地外海型仍归 *T. truncatus*。这项拆分由头骨形态和遗传证据共同支持，不能只凭一张海豚照片回溯鉴定。[Costa et al. 2022](https://doi.org/10.1093/zoolinnean/zlac025) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin) [MDD — *T. erebennus*](https://www.mammaldiversity.org/taxon/1006849/)

截至 2026 年 4 月，分类委员会在 *T. truncatus* 下接受四个亚种：

1. 指名亚种 ***T. t. truncatus***；
2. 黑海宽吻海豚 ***T. t. ponticus***；
3. 拉氏宽吻海豚 ***T. t. gephyreus***；
4. 东热带太平洋宽吻海豚 ***T. t. nuuanu***。

东热带太平洋亚种的描述比较了 135 具头骨并结合地理分化；它是一个有取样边界的离岸亚种，不是所有太平洋宽吻海豚的名字。MDD 对 `gephyreus` 的等级仍较谨慎，而分类委员会已按亚种接受；这是正常的分类资料版本差异，应把采用日期与权威一并写出。[Costa et al. 2023](https://doi.org/10.1007/s10914-022-09641-5) [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [MDD v2.5](https://www.mammaldiversity.org/taxon/1006443/)

“Burrunan dolphin” ***T. australis*** 当前未被分类委员会接受；现有形态落在 *T. truncatus* 与 *T. aduncus* 的变异范围内，也缺少覆盖整个相关分布的整合证据。产品不应把它列成第四个有效 *Tursiops* 物种。属内关系仍在修订，未来版本应按日期重新核验，而不是永久冻结本次清单。[Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

### IUCN：LC、趋势 unknown、评估年 2018；没有 criteria

当前可追溯的全球 IUCN 记录为 **无危 Least Concern（LC）**、种群趋势 **未知 unknown**，评估日期 **2018-05-13**，正式记录发布于 2019 年并有 2019 年勘误。因此结构化字段应为：

```ts
conservation: conservation('LC', 'unknown', 2018)
```

LC 条目没有应填入本 schema 的威胁标准，`criteria` 必须省略。不能把发布年 2019 写成 `assessedYear`，也不能把“没有证据表明全球下降”改写成 `stable`；评估原文明确给出的趋势就是 Unknown。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en) [Crossref DOI metadata](https://api.crossref.org/works/10.2305%2FIUCN.UK.2019-1.RLTS.T22563A156932432.en)

评估把该种判为 LC，是因为当时口径下它广布热带和温带近岸、陆架与远洋水域，在许多区域常见或数量较多，且没有证据支持全域下降。然而评估也明确说，绝大部分分布区没有调查，一些区域估计已经陈旧；局地种群可以很小并承受严重压力。把各区域估计相加得到的“约 750,000 只”不是一次全球同步普查，更不是成熟个体估计。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en)

还必须保留一个时间上的分类警告：2018 年评估使用的是当时较宽的 *T. truncatus* 概念，包含后来拆出的美国西北大西洋近岸 *T. erebennus*，也早于 *T. t. nuuanu* 的正式描述。全球 LC 仍是现行官方记录，可以用于 `conservation`；但不能声称它已经在 2026 年四亚种与三物种框架下重新计算过。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en) [Costa et al. 2022](https://doi.org/10.1093/zoolinnean/zlac025)

全球 LC 也不会自动覆盖较低分类或管理单元的风险。IUCN 鲸类专家组当前汇总表把黑海亚种 *T. t. ponticus* 列为 EN、拉氏亚种 *T. t. gephyreus* 列为 VU，Fiordland 与 Ambracian Gulf 亚种群列为 CR；地中海亚种群则为 LC。最安全的产品表达是：**全球物种记录为 LC / unknown，但不同亚种、亚种群与管理种群的状态差异很大。**[IUCN Cetacean Specialist Group status table](https://iucn-csg.org/red-list-status-of-cetaceans/)

## 分布与生境

宽吻海豚广布世界热带与温带大西洋、太平洋和印度洋，也见于地中海与黑海；它利用港湾、海湾、河口、近岸陆架、陆架边缘和远海。高纬偶见记录不等于其核心分布延伸到极地海冰区。落库可用六个邻海大陆，不把南极洲列作常规分布，也不罗列数十个沿岸国家。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en) [MDD v2.5](https://www.mammaldiversity.org/taxon/1006443/) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

“近岸海豚”不能概括全种。不同海区可见近岸与离岸型，二者常在体型、体色、猎物、活动范围和遗传结构上不同；外海个体通常更大、更深色，但这不是无例外的视觉鉴定规则。尤其在美国东岸纽约至佛罗里达中部，今天的近岸种已归 *T. erebennus*，不能继续拿该地近岸照片作为 *T. truncatus* 的无条件代表。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin) [Costa et al. 2022](https://doi.org/10.1093/zoolinnean/zlac025)

推荐将生境拆成三类，而不是只写“海洋”：

- **大陆架边缘与远洋表层带**：是当前较窄 *T. truncatus* 概念中特别重要的范围，也避免把页面视觉锁死在美国东岸近岸型。
- **近岸海域与大陆架**：沙质海湾、沿岸水道、礁坡和陆架水体可支持居民或活动范围较小的种群，但具体种类身份需按地区核对。
- **海湾、河口与半封闭海**：部分种群频繁利用河口、潟湖、港湾、地中海和黑海；这不是每个亚种或个体的必需环境。

`realms` 只填 `marine`。个别宽吻海豚可以进入河流下游，但没有依据把它作为常规淡水物种加入 `freshwater`。地图 `center` 最好省略；若界面必须提供，可用世界海洋尺度视图焦点并在注释中明确它不是丰度中心、分布中心或观测点。

## 体型、外形与鉴别边界

FAO 海洋哺乳动物识别指南给出成体总长约 **1.9—3.8 米**、最大体重至少约 **650 千克**；NOAA 的概览范围为 6—13 英尺、300—1,400 磅。两者都强调明显的地理、性别与生态型差异。为了避免换算造成貌似精确的小数，结构化范围可采用 **190—380 厘米、150—650 千克**，并在 note 中标明这是宽泛全球包络，不是“典型个体必然范围”。[FAO species identification guide](https://www.fao.org/4/t0725e/t0725e23.pdf) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

图片与正文应保留以下共同形态：[FAO species identification guide](https://www.fao.org/4/t0725e/t0725e23.pdf) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

- 身体结实、流线型；不是细长针吻海豚或鱼类的纺锤轮廓。
- 前额为圆润额隆，**短而粗的吻突**由一道清楚的折痕与额隆分开；嘴角自然上扬不等于人类式微笑。
- 背部中段只有一枚较高、后缘凹弯的镰形背鳍；两侧各一枚尖而略弯的胸鳍。
- 尾柄末端是一对水平尾叶，中间有缺刻；上下摆动推进，不是鱼类竖直尾鳍。
- 背侧从浅灰到炭灰，腹侧逐渐变浅至白；明暗渐变通常没有极锐利边界。
- 头顶只有一个呼吸孔；没有鳃裂、鳞片、须鲸板或喷出连续水柱的结构。

与印度太平洋宽吻海豚相比，*T. aduncus* 往往体型更纤细、吻更长，成体腹面常见黑色斑点；普通宽吻海豚主视觉不应添加密集的成年腹斑。然而两种外形重叠，缺少地点、遗传或头骨信息时不能仅凭插画作确定鉴定。[Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

NOAA 说明宽吻海豚通常至少可活 **40 年**，部分雌性超过 **60 年**。这不是一个适合无注释排序的严格“40—60 年最小—最大值”；`metrics.lifespanYears` 建议省略，在 `featuredStats` 中写“至少 40 年；部分雌性 60+”。同理，本次不填统一最高速度和最大潜深：不同区域、生态型、行为状态与测量方法差异太大，现有页面不需要用极值制造比较排名。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

## 食性、觅食与活动节律

宽吻海豚是肉食性、以鱼为主的机会型捕食者，也捕食鱿鱼以及虾、蟹等甲壳类；猎物组合随海区、季节、深度和猎物可用性变化。牙齿用于抓住滑溜猎物，鱼通常整条吞下，往往头部先入，并非像人一样咀嚼。`diet.types` 适合同时填 `carnivore` 与 `piscivore`，但 `foods` 不能只剩“鱼”。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en)

个体可以独自追捕，也会合作把鱼群赶向沙洲、海堤或同伴形成的包围圈。它们既会被动聆听猎物和环境声音，也会发出高频点击并根据回声判断目标距离、方向、大小和质地。插画可以表现鱼群被收拢，但不能把回声定位画成肉眼可见的蓝色光环，也不能从一张觅食画面断言每只海豚当时都在发声。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

活动时间由潮汐、猎物和栖息地决定，白天与夜间都可能觅食；不应加“昼行性”或“夜行性”绝对标签。休息时常见紧凑、缓慢、协调的移动和有规律的换气；定向旅行时会持续朝一个大方向前进。居民型、局地移动和活动范围更广的离岸个体都存在，不能把全种写成每年沿固定路线集体迁徙。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin) [IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en)

## 会分会合的社会网络、个体声音与认知边界

宽吻海豚可独行，也可组成大小变化的群体；成员频繁加入和离开，属于 **fission–fusion（分裂—融合）** 社会。母幼关系可以持续多年，某些成年个体也会建立稳定同伴关系，但一幅四只同游的图不能证明它们是永久家庭、“固定首领”或终身不变的 pod。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

纳米比亚野外约 100 只 *T. truncatus* 的 79 小时录音中，研究者识别到 43 类重复哨声，其中 28 类符合个体“签名哨声”判据。这支持宽吻海豚学习并使用具有个体特征的哨声轮廓来广播身份。安全文案是“个体可发展独特的签名哨声”；不能简化成“它们有和人名完全相同的名字”、完整语言或读心能力。[Kriesell et al. 2014](https://doi.org/10.1371/journal.pone.0106317)

巴西拉古纳的拉氏宽吻海豚 *T. t. gephyreus* 与撒网渔民会协调追逐乌鲻，长期合作个体的存活收益约提高 13%，机制之一是减少与高兼捕风险渔业的重叠。它是一个地方亚种中可学习、可传承的人—海豚合作传统，不是所有普通宽吻海豚都会捕鱼给人，也不是鼓励游客投喂或触摸野生海豚的理由。[Cantor et al. 2023](https://doi.org/10.1073/pnas.2207739120)

很多流行“海豚聪明”案例来自西澳鲨鱼湾的工具使用、海绵携带和雄性联盟；当地研究对象主要是 ***T. aduncus***，不应在没有重新核对样本的情况下移植到 *T. truncatus* 档案。认知叙事应优先使用本种或明确亚种的研究，并保留样本地点和任务边界。

## 繁殖、幼仔与长期母幼关系

NOAA 汇总显示，宽吻海豚开始繁殖的年龄随种群而异，约 **5—15 岁**，通常雌性早于雄性；妊娠约 **12 个月**，平均每 **3—6 年**产仔一次，哺乳约 **20 个月**，幼仔一般与母亲相伴 **3—6 年**。这些是跨研究与种群的概括，不是每只个体的精确时间表；雌性到约 45 岁仍有产仔记录。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

野外可观察到幼仔游在母体侧后方的 “baby position”：母亲先浮出换气，幼仔位于其旁后侧，可利用母体游动形成的水流并接近乳区。本轮资产只重建一大一小两头海豚同向游动、幼体位于后下方的宽松位置，不凭生成画面声称个体性别、亲缘或精确姿态；同时避免骑背、用胸鳍牵手或人类乳房式哺乳构图。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

产品可以写“通常单仔”时必须补到明确来源；本轮为避免把偶见情况绝对化，结构化事实只写妊娠、哺乳和母幼相伴时长。六图中的“一母一仔”表示最清晰的代表性育幼场景，不等于声称双胎在生物学上绝不可能。

## 威胁、疾病与保护行动

全球 LC 不代表每个管理种群都安全。风险应按直接死亡、慢性压力和局地事件分层：[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

1. **兼捕与渔具伤害**：刺网、围网、拖网、延绳、笼具和休闲钓具可导致缠绕、钩伤、溺亡或吞入渔具；这是多个地区最直接的人为死亡来源。
2. **猎物下降与直接捕捉**：过度捕捞可减少猎物，部分地区仍有故意捕杀或活体捕获。不能把圈养展示需求写成中性的“研究采样”。
3. **化学污染与溢油**：多氯联苯等持久污染物会在海豚体内累积；欧洲鲸类研究记录了高 PCB 负荷。Deepwater Horizon 后北墨西哥湾宽吻海豚出现肺、肾上腺和繁殖健康异常，但这些地区历史样本的当前物种边界需谨慎解释，不能把单次灾害结果外推为全球患病率。[Jepson et al. 2016](https://doi.org/10.1038/srep18573) [NOAA — Deepwater Horizon, ten years later](https://www.fisheries.noaa.gov/national/marine-life-distress/sea-turtles-dolphins-and-whales-10-years-after-deepwater-horizon-oil)
4. **疾病与有害藻华**：海洋哺乳动物麻疹病毒、藻毒素和其他疾病可造成区域性异常死亡事件；压力和污染可能与健康风险叠加，但不能给全球死亡原因虚构统一比例。
5. **船只、噪声与栖息地改变**：碰撞、密集观鲸、航运和工业噪声、岸线工程、淡水流量改变与沿岸退化会影响局地种群；效应随海区和暴露条件而异。
6. **投喂与骚扰**：投喂使海豚把人、船和渔具与食物联系起来，增加碰撞、钩挂、盗饵、报复性伤害和失去自然警戒的风险。互动图不能把触摸、追逐或手喂包装成保护行为。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)

保护应以**种群/亚种群**而不是模糊全球平均为尺度：

- 用标准化航线调查、照片识别捕获—再捕获、被动声学、遗传和搁浅网络分别估算丰度、连通性、生存与健康；一枚背鳍照片不能直接给出全球数量。[NOAA stock assessment reports](https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-stock-assessment-reports-species-stock) [NOAA photo-identification](https://www.fisheries.noaa.gov/southeast/science-data/what-can-marine-mammal-photo-identification-tell-us)
- 在高兼捕渔业改良网具、作业时空和操作规范，记录并降低海豚死亡，同时维持解缠、救援和搁浅响应。
- 保护重要觅食、育幼和休息水域，控制污染、溢油与岸线工程，维持猎物和河口生态过程。
- 在航运、能源勘探和观鲸活动中评估累积噪声与船只干扰；保持法规要求的距离，不追逐、不触摸、不投喂。
- 按现行分类更新历史监测序列。物种拆分后应保留旧名称和采样地点，避免把 *T. erebennus* 的趋势静默拼进 *T. truncatus*。
- 对黑海、拉氏及小型封闭亚种群执行比全球 LC 更有针对性的跨境行动，并持续更新丰度、兼捕和遗传隔离资料。

国际法律也必须分制度表达。*T. truncatus* 列入 **CITES 附录 II**；黑海野生种群活体标本用于商业目的的年度出口配额为零。当前 CMS 附录中，北海、波罗的海、地中海和黑海种群列入附录 II；*T. t. gephyreus* 列入附录 I 与 II，*T. t. ponticus* 列入附录 I。它们是贸易与迁徙物种保护制度，不替代 IUCN 灭绝风险等级，也不能简化成“全球整种都在 CMS 附录 I”。[CITES species listing](https://cites.org/eng/taxonomy/term/704) [CMS Appendices, effective 27 June 2026](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) [CMS 2026 update](https://www.cms.int/news/2026012-revised-cms-appendices)

## 推荐关键事实

1. 当前接受名是 *Tursiops truncatus*；2026 分类清单另接受 *T. aduncus* 与 *T. erebennus*，历史 “bottlenose dolphin” 记录必须按地点和证据重新归属。
2. 正式全球 IUCN 字段为 `LC / unknown / 2018`，没有 criteria；2019 是发布年份，不是评估年。[IUCN](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en)
3. 2018 全球评估早于 *T. erebennus* 拆分与 *T. t. nuuanu* 描述，因此状态可沿用，分类口径警告不能删除。
4. 现行分类委员会接受 *T. t. truncatus*、*ponticus*、*gephyreus* 与 *nuuanu* 四个亚种。[Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)
5. 成体总长约 1.9—3.8 米、宽泛体重包络约 150—650 千克；地区、性别和近岸/离岸型差异明显。[FAO guide](https://www.fao.org/4/t0725e/t0725e23.pdf)
6. 短粗吻突与圆额隆之间有清楚折痕，背部只有一枚镰形背鳍，尾叶水平；密集成年腹斑更提示 *T. aduncus*。
7. 食物以鱼类为主，也包括鱿鱼、虾和蟹；牙齿用来抓握，鱼常整条头先吞入，而不是咀嚼。
8. 它们会独猎或合作赶鱼，并结合被动聆听与回声定位；活动时间随潮汐、猎物和地点改变。
9. 群体成员会分会合，母幼与部分成年同伴关系可持久；一次同框不等于固定家庭或终身 pod。
10. 个体能发展具有辨识度的签名哨声；“身份信号”不等于已经证明人类式姓名和完整语言。[Kriesell et al. 2014](https://doi.org/10.1371/journal.pone.0106317)
11. 妊娠约 12 个月，平均产仔间隔约 3—6 年，幼仔一般与母亲相伴 3—6 年；生活史参数随种群变化。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)
12. 全球 LC 可以与黑海亚种 EN、拉氏亚种 VU 及若干 CR 亚种群同时成立；保护和趋势评估必须落到具体单元。[IUCN CSG](https://iucn-csg.org/red-list-status-of-cetaceans/)

## 应删除或避免的说法

- 不把所有 “bottlenose dolphin” 旧记录直接标为 *T. truncatus*；先排除 *T. aduncus* 和后拆出的 *T. erebennus*。
- 不用美国东岸纽约至佛罗里达中部的近岸海豚照片作为无条件本种参考；该单元现归 *T. erebennus*。
- 不写“目前有两个宽吻海豚属物种”；2026 分类委员会接受三个。
- 不把未接受的 *T. australis* 当作现行有效物种，也不把四个亚种误写成四个物种。
- 不把 Cetacea 作为科学上与 Artiodactyla 平行的完整“目”；它只是本仓库五级分类界面的简化显示。
- 不把 IUCN 发布年 2019 写成评估年，也不把 Unknown 趋势改成 stable。
- 不给 LC 自造 criteria；不写“2026 年 IUCN 重新确认无危”。
- 不填全球 750,000、成熟个体数或精确当前总量；旧区域估计覆盖不足且早于分类拆分。
- 不把全球 LC 等同于每个种群安全，也不把某个 CR 亚种群状态升级成全种 CR。
- 不把分布写成只有近岸海湾；本种也利用大陆架边缘与远洋。
- 不把偶尔进入河流写成常规淡水生态位，也不把整个物种设成固定季节迁徙。
- 不用长而纤细的吻、密集成年腹斑表现普通宽吻海豚；这些更接近 *T. aduncus* 的常见外形。
- 不画鱼类竖直尾鳍、鳃裂、鳞片、两个呼吸孔、鲸须或从呼吸孔持续喷出的水柱。
- 不把自然上扬嘴角写成始终“快乐微笑”，也不由脸型推断情绪。
- 不写只吃鱼；鱿鱼及虾蟹等甲壳类也是已记录猎物。
- 不写严格昼行或夜行；觅食时段受潮汐、猎物与地点控制。
- 不把回声定位画成可见光圈，或把设备记录到声响等同于一只已确认个体。
- 不写固定群大小、永久领袖、终身配偶或稳定核心家庭；社会成员会分会合。
- 不把签名哨声直接翻译为人类姓名、语法或完整语言。
- 不借用鲨鱼湾 *T. aduncus* 的海绵工具和雄性联盟，未经说明写成本种事实。
- 不把拉古纳人—海豚捕鱼传统写成全种本能，也不借此鼓励游客投喂。
- 不填统一最高速度或最大潜深；本轮没有可安全外推到全种的同口径数字。
- 不把“至少 40 年、部分雌性 60+”伪装成所有个体严格寿命范围。
- 不画游客触摸、骑乘、手喂、追船或与海豚自拍作为保护场景。

## 量化字段取舍

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `measurements.length` | 190—380 cm | 成体总长的宽泛全球识别范围；不同地区、性别与生态型差异显著。[FAO](https://www.fao.org/4/t0725e/t0725e23.pdf) |
| `metrics.adultLengthCm` | `[190, 380]` | 与展示字段同口径；不用 NOAA 英尺换算后的伪精确小数。 |
| `measurements.weight` | 150—650 kg | 宽泛成体包络和记录上限；不是典型均值。[FAO](https://www.fao.org/4/t0725e/t0725e23.pdf) |
| `metrics.adultMassKg` | `[150, 650]` | 仅用于粗粒度比较，必须保留地区/生态型差异 note。 |
| `metrics.lifespanYears` | 不填 | NOAA 的“至少 40、部分雌性 60+”不是严格最小—最大范围；改用带注释的展示卡。 |
| `metrics.topSpeedKph` | 不填 | 不同观测和实验条件不可拼成公认物种极值。 |
| `metrics.maxDiveDepthM` | 不填 | 区域/个体标签极值不能代表全种典型或生理最大值。 |
| `metrics.estimatedMatureIndividuals` | 不填 | IUCN 没有适合落库的当前全球成熟个体区间；约 75 万是旧区域总个体估计汇总。 |
| `featuredStats.adult-length` | 1.9—3.8 m | 宽泛成体总长，不是每个种群的常见范围。 |
| `featuredStats.longevity` | 至少 40 年 | 部分雌性超过 60 年；不显示成严格上下界。[NOAA](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin) |
| `featuredStats.gestation` | 约 12 个月 | 跨种群概括，个体会有变化。 |
| `featuredStats.mother-calf` | 3—6 年 | 一般母幼相伴期；哺乳本身约 20 个月。 |

## 6 幅观察图内容与验收线索

六幅图都应表现为**科学上代表性的合成场景**，不是某个可识别地点、真实个体或已记录事件。为降低分类误标风险，图中不出现美国东岸纽约—佛罗里达中部近岸地标，也不以印度太平洋浅珊瑚潟湖和密集腹斑作为主线索。

| 序号与文件 | 建议场景 | 必须表现的物种/行为线索 | 应拒绝的错误 |
| --- | --- | --- | --- |
| 01 `01-open-water-portrait.webp` | 封面：清澈暖温带大陆架开阔水体中，一只完整成体从右向左平稳游过，主体在右侧并给左侧标题留白 | 结实体形、圆额隆、短粗吻和清楚折痕；一枚中背镰形背鳍、两枚胸鳍、水平双尾叶及中央缺刻全部可见；炭灰背侧渐变到浅腹侧 | 长细吻、密集腹斑、鱼类竖尾、鳃、鲸须、额外鳍肢、裁掉吻或尾；不要加美国东岸海岸线、海底设施或其他动物 |
| 02 `02-cooperative-fish-herding.webp` | 恰好三只成体围成松弧，把一群小型银鱼收拢在开阔陆架水体；一只开始穿入鱼群，两只保持侧翼 | 海豚各自姿态可读且彼此有水隙、没有咀嚼动作；鱼群紧密但仍有逃逸方向；场景只表示可能采用的合作策略 | 可见声波光环、鱼从呼吸孔进入、海豚啃咬咀嚼、人工饵团、潜水员投喂、额外海豚或大型捕食者 |
| 03 `03-coastal-shelf-habitat.webp` | 暖温带至亚热带大陆架广角水下大景，远处沙纹底质与稀疏海草斑块渐入蓝色水柱，恰好一只完整海豚在中右远景 | 海豚只占画宽约 12%—18%，生境至少占 85%；表现本种可利用开阔沿岸—陆架水体，不指定佛罗里达等具体地点 | 近景主角、热带珊瑚旅游潟湖、淡水河、极地冰海、密集大群、混入鲨鱼/鲸/其他海豚，或把沙底与海草说成所有种群必需生境 |
| 04 `04-surface-breath.webp` | 恰好一只成体在海面完成自然滚动换气；略高于水面的长焦侧前方视角 | 单个呼吸孔位于额隆后方的头顶中线并短暂张开；可见稀薄呼气雾与少量飞沫，头、背部和背鳍可见，其余身体合理留在水下 | 大型须鲸式粗大高喷柱、两个呼吸孔、吻尖鼻孔、经嘴呼吸、喷水表演、跃圈、训练员、船边讨食或为了“完整身体”透视水面 |
| 05 `05-adult-calf-travel.webp` | 恰好一头较大成体在前、一只约其体长 40% 的幼体稍后且略低，近水面同向移动 | 两头完整可辨、保持水隙，幼体位于成体后下方；这是参考已知育幼同行位置的循证重建，不能仅凭画面证明性别、亲缘或精确的 baby position | 第三只“助产海豚”、骑背、牵手、人格化拥抱、人类乳房式哺乳、奶瓶、幼体与成体等大或身体融合 |
| 06 `06-dorsal-fin-photo-id.webp` | 恰好一只宽吻海豚侧向自然浮出，完整背鳍后缘的细小缺刻与浅色疤痕清晰可见 | 保留短粗吻部、额隆、眼和背部以辨认物种；虚构鳍缘标记只用于说明非侵入式照片识别方法 | 游客自拍、入水同游、追逐、手喂、抓捕、标签、船只或第二只海豚；一次照片识别不能配成全球数量结论 |

六图共同形态总检：**one rounded melon; one short, thick and well-defined rostrum separated by a clear crease; one blowhole; exactly two pointed pectoral flippers; one tall falcate dorsal fin near mid-back; one horizontal pair of tail flukes with a central notch; robust streamlined body; charcoal-to-light-gray countershading; no dense adult belly spots, scales, gills, baleen, fish-like vertical tail, human teeth, extra fins or visible sonar rings**。

## 可直接用于 `species.ts` 的字段建议

下面对象覆盖当前 `Species` 必填字段，并与六幅资产文件名、构图和 `focalPoint` 对齐。来源标题特意标出评估/分类日期，防止未来维护者把旧 IUCN 口径误读成 2026 重评。

```ts
const BOTTLENOSE_DOLPHIN_SOURCE_DATE = '2026-08-20' as const;
const BOTTLENOSE_DOLPHIN_CONTENT_DATE = '2026-08-20' as const;

const BOTTLENOSE_DOLPHIN_SOURCES = [
  {
    title: 'IUCN Red List — Tursiops truncatus (assessed 2018; published with 2019 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Cetacean Specialist Group — Red List status of cetaceans (version 2025-2)',
    url: 'https://iucn-csg.org/red-list-status-of-cetaceans/',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Society for Marine Mammalogy — List of Marine Mammal Species and Subspecies (April 2026)',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Tursiops truncatus',
    url: 'https://www.mammaldiversity.org/taxon/1006443/',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Tursiops truncatus, AphiaID 137111',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=137111',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Costa et al. 2022 — Integrative taxonomy supports Tursiops erebennus',
    url: 'https://doi.org/10.1093/zoolinnean/zlac025',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Costa et al. 2023 — Tursiops truncatus nuuanu from the Eastern Tropical Pacific',
    url: 'https://doi.org/10.1007/s10914-022-09641-5',
    kind: 'taxonomy',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Common Bottlenose Dolphin',
    url: 'https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin',
    kind: 'general',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'FAO — Marine mammal identification guide: Tursiops truncatus',
    url: 'https://www.fao.org/4/t0725e/t0725e23.pdf',
    kind: 'general',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Kriesell et al. 2014 — Signature whistles in wild common bottlenose dolphins off Namibia',
    url: 'https://doi.org/10.1371/journal.pone.0106317',
    kind: 'ecology',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Cantor et al. 2023 — Foraging synchrony drives resilience in human-dolphin mutualism',
    url: 'https://doi.org/10.1073/pnas.2207739120',
    kind: 'ecology',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Jepson et al. 2016 — PCB pollution continues to impact European cetaceans',
    url: 'https://doi.org/10.1038/srep18573',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Marine Mammal Stock Assessment Reports by species/stock',
    url: 'https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-stock-assessment-reports-species-stock',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — What marine mammal photo-identification can tell us',
    url: 'https://www.fisheries.noaa.gov/southeast/science-data/what-can-marine-mammal-photo-identification-tell-us',
    kind: 'ecology',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'CITES — Tursiops truncatus species listing',
    url: 'https://cites.org/eng/taxonomy/term/704',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — revised Appendices I and II (effective June 2026)',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: BOTTLENOSE_DOLPHIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-tursiops-truncatus',
  slug: 'common-bottlenose-dolphin',
  names: {
    zh: '宽吻海豚',
    en: 'Common Bottlenose Dolphin',
    aliases: ['瓶鼻海豚', '普通宽吻海豚', 'Bottlenose Dolphin', 'Bottle-nosed Dolphin'],
  },
  scientificName: 'Tursiops truncatus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Cetacea', '鲸目'), // repository UI simplification; current hierarchy places Cetacea within Artiodactyla
    taxon('Delphinidae', '海豚科'),
    taxon('Tursiops', '宽吻海豚属'),
  ),
  conservation: conservation('LC', 'unknown', 2018),
  distribution: {
    realms: ['marine'],
    continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
    regions: ['热带与温带大西洋', '热带与温带太平洋', '热带与温带印度洋', '地中海与黑海'],
    countries: [],
    range:
      '广布世界热带与温带海洋，利用海湾、河口、近岸陆架、陆架边缘与远海；近岸和离岸生态型及移动范围因地区而异。美国东岸纽约至佛罗里达中部的近岸型现归 Tursiops erebennus，不应继续并入本种。',
  },
  habitats: [
    {
      name: '大陆架边缘与开阔海',
      realm: 'marine',
      description: '在陆架坡折和远洋表层带追逐鱼类与头足类；离岸种群可拥有比近岸居民更大的活动范围。',
      isPrimary: true,
    },
    {
      name: '近岸海域与大陆架',
      realm: 'marine',
      description: '利用沙质沿岸、水道、礁坡和大陆架水体；当地物种身份、体型与食谱必须按区域种群核对。',
    },
    {
      name: '海湾、河口与半封闭海',
      realm: 'marine',
      description: '部分种群频繁使用港湾、潟湖、河口、地中海和黑海，但这不是所有个体的固定生境。',
    },
  ],
  measurements: {
    length: {
      min: 190,
      max: 380,
      unit: 'cm',
      note: '成体总长的宽泛全球包络；地区、性别与近岸/离岸生态型差异明显。',
    },
    weight: {
      min: 150,
      max: 650,
      unit: 'kg',
      note: '成体宽泛包络与记录上限，不代表典型个体或每个种群。',
    },
  },
  diet: {
    types: ['carnivore', 'piscivore'],
    foods: ['浅海与远洋鱼类', '鱿鱼等头足类', '虾、蟹等甲壳类'],
    description:
      '机会性捕食随海区和季节出现的鱼类、鱿鱼与甲壳类；既可独自追逐，也会合作把鱼群赶向屏障或同伴，结合被动聆听和高频回声定位寻找猎物，牙齿主要用于抓握而不是咀嚼。',
  },
  activity: [
    '昼夜活动随潮汐、猎物与地点变化',
    '独猎或合作赶拢鱼群',
    '结合被动聆听与回声定位搜索猎物',
    '形成成员会分会合的流动社会群体',
    '居民型、局地移动与大范围离岸移动因种群而异',
    '休息时缓慢协调游动并有规律换气',
  ],
  tags: ['全球温带与热带海洋', 'IUCN 无危', 'CITES 附录 II', '齿鲸', '回声定位', '分裂—融合社会', '签名哨声'],
  summary: '以短粗吻部、合作赶鱼与会分会合的社会网络适应近岸到远海；全球无危标签之下，各亚种与管理种群仍有不同风险。',
  description:
    '宽吻海豚不是全球同质的一群“微笑海豚”。当前分类接受三个宽吻海豚属物种，并在普通宽吻海豚内承认四个亚种；2018 年 IUCN 全球评估早于其中若干拆分。它们用被动聆听与回声定位寻找鱼、鱿鱼和甲壳类，独猎或合作赶鱼，并在成员不断加入离开的社会网络中保持母幼与个体同伴关系。保护工作必须识别具体种群，因为全球 LC 与黑海亚种 EN、拉氏亚种 VU 及若干 CR 亚种群可以同时成立。',
  storySections: [
    {
      key: 'taxonomy-in-motion',
      label: '分类边界',
      title: '同一张旧地图里，后来拆出了不同物种',
      body: '2026 年分类清单接受 Tursiops truncatus、T. aduncus 与 T. erebennus 三个物种，并在 T. truncatus 下接受 truncatus、ponticus、gephyreus 与 nuuanu 四个亚种。美国东岸纽约至佛罗里达中部原先称 T. truncatus 的近岸型现归 T. erebennus；因此旧照片、声学和种群序列都要按地点和样本重新核对。',
    },
    {
      key: 'coast-to-offshore',
      label: '多样生境',
      title: '从河口边缘到大陆架以外',
      body: '有些种群长期利用海湾、河口和浅海，有些则在陆架边缘和远海大范围移动。近岸与离岸型常有体型、体色、食谱和遗传差异，却没有一套可在全球仅凭外观通用的判别尺；把宽吻海豚只画成珊瑚潟湖的亲人居民，会遗漏本种重要的外海生活。',
    },
    {
      key: 'sound-guided-foraging',
      label: '觅食',
      title: '先听海里发生什么，再用回声追踪猎物',
      body: '宽吻海豚会被动聆听鱼类和环境声，也会发出高频点击并分析回声；个体可单独追猎，群体也可把鱼赶向沙洲、岸壁或同伴。牙齿用于抓住滑溜猎物，鱼通常整条吞下。回声定位是听觉过程，不是肉眼可见的光圈。',
    },
    {
      key: 'fission-fusion-identity',
      label: '社会与声音',
      title: '群体会分会合，声音仍能标出“我是谁”',
      body: '个体不断加入和离开临时小群，母幼关系与部分成年同伴关系却可延续多年。纳米比亚野外研究记录到多个符合签名哨声判据的个体化轮廓，说明声音可以广播身份；它支持“个体身份信号”，并不等于已经证明人类式姓名、语法或完整语言。',
    },
    {
      key: 'long-maternal-investment',
      label: '繁殖与育幼',
      title: '约一年妊娠之后，还有数年的同行',
      body: '跨种群概览给出约 12 个月妊娠、约 20 个月哺乳和一般 3—6 年母幼相伴。幼仔常位于母体侧后方，利用母体尾流并跟随其换气；母幼纽带是流动社会中最稳定的关系之一，但海豚群不因此等同于固定核心家庭。',
    },
    {
      key: 'stock-scale-conservation',
      label: '保护尺度',
      title: '全球 LC 之外，每个种群都有自己的风险账本',
      body: '2018 年全球评估为 LC、趋势未知，也明确承认大部分分布区未完成调查。兼捕、污染、溢油、疾病、猎物下降、船只和投喂的影响集中在具体海区；黑海亚种、拉氏亚种及多个封闭亚种群的等级高于全球物种。照片识别、遗传、声学与标准化调查必须按当前分类重新对齐。',
    },
  ],
  keyFacts: [
    '全球 IUCN 正式记录为 LC、趋势 unknown、评估年 2018；2019 是发布年份，且 LC 不填 criteria。',
    '2026 分类清单接受三个 Tursiops 物种和 T. truncatus 的四个亚种；美国东岸一部分历史近岸记录现归 T. erebennus。',
    '本仓库把 Cetacea 简化显示为“鲸目”，完整科学分类则把鲸类置于 Artiodactyla 内。',
    '成体总长约 1.9—3.8 米、宽泛质量包络约 150—650 千克，地区、性别和生态型差异明显。',
    '短粗吻突由折痕与圆额隆分开；背部只有一枚镰形背鳍，水平尾叶上下摆动推进。',
    '宽吻海豚会独猎或合作赶鱼，并结合被动聆听和高频回声定位；牙齿抓握猎物，鱼常整条吞下。',
    '群体成员频繁加入和离开；签名哨声可带有个体特征，但不能等同于已证明的人类语言。',
    '妊娠约 12 个月，平均产仔间隔约 3—6 年，幼仔一般与母亲相伴 3—6 年。',
    '全球 LC 与黑海亚种 EN、拉氏亚种 VU 及若干 CR 亚种群并不矛盾，保护必须落到具体单元。',
    '不要投喂或追逐野生海豚；习惯靠近人和船会增加钩挂、碰撞与伤害风险。',
  ],
  threats: [
    '刺网、围网、拖网、延绳、笼具和休闲渔具造成兼捕、缠绕、钩伤与溺亡',
    '过度捕捞导致猎物下降，部分地区仍存在直接捕杀或活体捕获',
    'PCB 等持久污染物、溢油和沿岸污染损害免疫、内分泌与繁殖健康',
    '海洋哺乳动物麻疹病毒、有害藻毒素和其他疾病造成区域性异常死亡',
    '船舶碰撞、观鲸干扰、航运及工业噪声和岸线工程形成累积压力',
    '人为投喂和骚扰使海豚接近船只与渔具，增加伤害和报复性冲突',
    '小型或隔离亚种群更容易受到兼捕、污染、猎物变化和遗传隔离叠加影响',
  ],
  conservationActions: [
    '按亚种群和管理种群开展标准化航线调查、照片识别、被动声学、遗传与健康监测',
    '改良高风险渔具和作业时空，记录兼捕并维持解缠、救援与搁浅响应能力',
    '保护觅食、育幼和休息水域，维持猎物并控制 PCB、溢油和岸线污染',
    '在航运、能源开发和观鲸活动中限制船速、距离和累积水下噪声',
    '执行不追逐、不触摸、不投喂的负责任观赏规范，降低习惯化风险',
    '按现行物种边界校准历史数据，避免把 T. erebennus 或 T. aduncus 趋势静默并入本种',
    '对黑海、拉氏和封闭小种群实施跨境、单元化的优先保护与长期评估',
  ],
  metrics: {
    adultLengthCm: [190, 380],
    adultMassKg: [150, 650],
  },
  featuredStats: [
    {
      key: 'adult-length',
      label: '成体总长宽泛范围',
      value: '1.9—3.8',
      unit: '米',
      note: '跨地区与生态型包络，不是每个种群的常见范围',
    },
    {
      key: 'longevity',
      label: '寿命记录',
      value: '至少 40',
      unit: '年',
      note: '部分雌性超过 60 年；不是严格最小—最大范围',
    },
    {
      key: 'gestation',
      label: '妊娠期',
      value: '约 12',
      unit: '个月',
      note: '跨种群概括，个体有变化',
    },
    {
      key: 'mother-calf-association',
      label: '一般母幼相伴',
      value: '3—6',
      unit: '年',
      note: '哺乳本身约 20 个月',
    },
  ],
  media: {
    image: './images/species/common-bottlenose-dolphin/01-open-water-portrait.webp',
    alt: '清澈温带外海水面下，一只完整宽吻海豚从右向左游过，短粗吻、圆额隆、镰形背鳍、两枚胸鳍和水平尾叶全部可见',
    focalPoint: { x: 0.72, y: 0.52 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/common-bottlenose-dolphin/02-cooperative-fish-herding.webp',
        alt: '开阔沙质陆架水体中，恰好三只完整宽吻海豚以松弧形把一群小鱼逐渐收拢',
        title: '把鱼群赶到一起',
        caption: '个体可以独猎，也会合作赶鱼；回声定位和被动聆听是听觉过程，不应画成可见光圈。',
        focalPoint: { x: 0.5, y: 0.54 },
      },
      {
        image: './images/species/common-bottlenose-dolphin/03-coastal-shelf-habitat.webp',
        alt: '暖温带大陆架水下大景中，沙纹底质与稀疏海草渐入蓝色水柱，恰好一只完整宽吻海豚在中右远景游动',
        title: '沿岸与陆架水体',
        caption: '不同种群利用河口、近岸、陆架边缘和远海；沙底与海草是代表场景，不是所有种群的必需生境。',
        focalPoint: { x: 0.64, y: 0.52 },
      },
      {
        image: './images/species/common-bottlenose-dolphin/04-surface-breath.webp',
        alt: '海面长焦侧视下，恰好一只宽吻海豚自然滚动换气，单个头顶呼吸孔上方可见稀薄的呼气雾与少量飞沫',
        title: '一次快速的水面换气',
        caption: '齿鲸以头顶单个呼吸孔呼吸；可见呼气雾取决于环境条件，不能把它理解成大型须鲸的高喷柱。',
        focalPoint: { x: 0.56, y: 0.43 },
      },
      {
        image: './images/species/common-bottlenose-dolphin/05-adult-calf-travel.webp',
        alt: '近海面水下，一头较大宽吻海豚与一只体长约其四成的幼体同向游动，幼体位于成体后下方且两者保持水隙',
        title: '成体与幼体同向旅行',
        caption: '这是参考已知育幼同行位置的重建；画面本身不能证明个体性别、亲缘或精确的 baby position。',
        focalPoint: { x: 0.53, y: 0.5 },
      },
      {
        image: './images/species/common-bottlenose-dolphin/06-dorsal-fin-photo-id.webp',
        alt: '一只宽吻海豚自然浮出灰蓝海面，镰形背鳍后缘的数处细小缺刻清晰可见',
        title: '用背鳍重识别个体',
        caption: '背鳍上长期保留的自然缺刻和疤痕能帮助照片识别；这些标记为虚构重建，一张照片也不能换算全球数量。',
        focalPoint: { x: 0.5, y: 0.5 },
      },
    ],
  },
  sources: BOTTLENOSE_DOLPHIN_SOURCES,
  featured: true,
  publishedAt: BOTTLENOSE_DOLPHIN_CONTENT_DATE,
  updatedAt: BOTTLENOSE_DOLPHIN_CONTENT_DATE,
}
```

## 来源清单与使用边界

| 来源 | 主要用途 | 使用边界 |
| --- | --- | --- |
| [IUCN 2018 assessment / 2019 errata](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en) | 全球 LC、unknown、评估日、分布、威胁和旧数量汇总 | 早于 *T. erebennus* 拆分；约 75 万不是同步普查或成熟个体数 |
| [IUCN Cetacean Specialist Group](https://iucn-csg.org/red-list-status-of-cetaceans/) | 当前亚种/亚种群状态对照 | 汇总表不替代各单元完整评估文本 |
| [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) | 三个 *Tursiops* 物种、四个亚种、完整分类阶元 | 是 2026-04 版本；属内系统关系未来仍可能修订 |
| [MDD v2.5](https://www.mammaldiversity.org/taxon/1006443/) | 接受名、作者、世界分布与分类注释 | 对 `gephyreus` 等等级较谨慎，应标版本日期 |
| [WoRMS AphiaID 137111](https://www.marinespecies.org/aphia.php?p=taxdetails&id=137111) | 海洋接受名与标识符 | 不提供生活史或 IUCN 状态 |
| [Costa et al. 2022](https://doi.org/10.1093/zoolinnean/zlac025) | *T. erebennus* 的形态与遗传种界 | 不能用地理位置以外的单张照片替代诊断 |
| [Costa et al. 2023](https://doi.org/10.1007/s10914-022-09641-5) | *T. t. nuuanu* 描述 | 135 具头骨和东热带太平洋边界，不外推全太平洋 |
| [NOAA Fisheries — Common Bottlenose Dolphin](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin) | 分布、形态、食性、回声定位、群体、繁殖、寿命、威胁 | 美国管理示例需与最新 *T. erebennus* 边界对齐 |
| [FAO identification guide](https://www.fao.org/4/t0725e/t0725e23.pdf) | 成体体长、体重上限与野外形态 | 是识别范围，不是全球典型均值或当代种群估计 |
| [Kriesell et al. 2014](https://doi.org/10.1371/journal.pone.0106317) | 纳米比亚野外签名哨声 | 地区样本；身份轮廓不等于人类语言 |
| [Cantor et al. 2023](https://doi.org/10.1073/pnas.2207739120) | 拉氏亚种与渔民协调、存活收益 | 地方文化行为，不外推为全种本能或支持游客投喂 |
| [Jepson et al. 2016](https://doi.org/10.1038/srep18573) | 欧洲鲸类 PCB 风险 | 区域污染研究，不提供全球患病率 |
| [NOAA stock assessments](https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-stock-assessment-reports-species-stock) | 管理种群尺度丰度与人为死亡框架 | 各 stock 的分类、年份和覆盖范围不可拼成全球同步数 |
| [NOAA photo-identification](https://www.fisheries.noaa.gov/southeast/science-data/what-can-marine-mammal-photo-identification-tell-us) | 背鳍重识别、捕获—再捕获和社会资料方法 | 一次拍摄不能识别全球数量，页面个案可能涉及当前 *T. erebennus* |
| [CITES listing](https://cites.org/eng/taxonomy/term/704) | 附录 II 与黑海活体商业出口零配额 | 贸易制度，不是 IUCN 状态或全球禁止一切移动 |
| [CMS 2026 Appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) | 指定种群/亚种附录 I、II | 并非整个全球物种统一列入附录 I 或 II |

## 最终推荐口径

宽吻海豚页面应围绕四条主线组织：**分类边界正在收窄，历史资料必须按地点重读；生境从河口近岸延伸到陆架边缘与远海；回声定位、合作觅食和签名哨声发生在会分会合的社会网络中；全球 LC 只是顶层标签，真正的保护账本属于亚种、亚种群和管理种群。** 这种写法既保留大众熟悉的“宽吻海豚”，也避免把不同 *Tursiops* 物种、地方文化行为和旧全球数量拼成一个过分确定的角色。[Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [IUCN 2018](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T22563A156932432.en) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin)
