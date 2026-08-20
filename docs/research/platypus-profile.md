# 鸭嘴兽（*Ornithorhynchus anatinus*）完整档案研究

- 检索与核验日期：2026-08-20
- 展示中文名：**鸭嘴兽**；英文名：**Platypus**；可检索英文别名：**Duck-billed Platypus**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供科学边界
- 证据标准：优先使用 IUCN 当前公开评估、ASM Mammal Diversity Database（MDD）当前条目、Australian Faunal Directory（AFD）分类概念、澳大利亚联邦及州政府资料，以及直接支持形态、生活史、电感受、分布和种群变化的原始论文
- 时间口径：本文所称“当前”截至 **2026-08-20**。IUCN 的评估年份、发布卷期、州级法定状态和联邦 EPBC 状态分别记录，不互相替代
- 敏感信息处理：分布只到州、岛屿和流域类型；不披露繁殖洞穴、干旱避难潭、近期放归个体或小型孤立种群的精确坐标。地图 `center` 只是东澳尺度的视图焦点

## 结论摘要

### 名称、分类与物种边界

仓库主记录应采用 ***Ornithorhynchus anatinus* (G. K. Shaw, 1799)**，分类为动物界—脊索动物门—哺乳纲—单孔目—鸭嘴兽科—鸭嘴兽属。当前 MDD v2.5 将其列为现生、野外存在的独立种，也是鸭嘴兽科和鸭嘴兽属唯一现生成员；AFD/Atlas of Living Australia 使用同一接受名和分类链。[MDD v2.5 — *Ornithorhynchus anatinus*](https://www.mammaldiversity.org/taxon/1000001/) [AFD taxon concept via ALA](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/ac61fd14-4950-4566-b384-304bd99ca75f)

英文主名宜用简洁、官方页面普遍采用的 **Platypus**；“Duck-billed Platypus”可作为别名。中文主名“鸭嘴兽”已足够明确，不建议额外制造“鸭嘴单孔兽”等直译别名。[Australian Museum — Platypus](https://australian.museum/learn/animals/mammals/platypus/) [NSW Government — Platypus](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus)

当前 MDD 把该种视为**单型种**，不承认现生亚种，但同时指出线粒体、微卫星和全基因组研究识别出多个高度分化的地理谱系，塔斯马尼亚—金岛谱系尤其独特，大陆内部也随河流系统形成强结构。这些结果提示潜在保护单元，却还不足以让产品自行创建亚种。图片和正文可表现纬度体型变化，但不能把塔斯马尼亚个体标成已接受的独立亚种。[MDD](https://www.mammaldiversity.org/taxon/1000001/) [Martin et al. 2018](https://doi.org/10.1093/molbev/msy041)

### IUCN 当前公开状态：2014 年评估，2016-1 发布

截至检索日，IUCN 当前公开全球记录仍为 **近危 Near Threatened（NT）**，种群趋势 **下降**。正式 DOI 属于 2016-1 发布卷期，而公开物种页把评估年份标为 **2014**；本文没有从可访问的 IUCN 评估文件独立核得精确到日的评估日期，因此仓库只实现可稳健支持的年份：

```ts
conservation: conservation('NT', 'decreasing', 2014)
```

不应把 2016 填入 `assessedYear`。当前公开引用没有给出可直接抄入仓库的正式 criteria 字符串；评估理由是三代内下降接近但未越过易危 A 类的 30% 阈值，不能据此擅自补成 `A2c`。这项评估已超过十年，按 IUCN 流程应重评，但截至检索日尚无新评估发布，因此也不能用论文模型代替 IUCN 当前条目。[IUCN Red List — *Ornithorhynchus anatinus*](https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T40488A21964009.en) [Australian Museum](https://australian.museum/learn/animals/mammals/platypus/) [IUCN assessment process：评估十年后视为过期并应重评](https://nrl.iucnredlist.org/assessment/process)

IUCN 旧评估给出的成熟个体宽区间为 **30,000—300,000**，并把 **50,000** 作为最佳点估计。上下界相差十倍，反映的正是这种隐蔽、低捕获率动物缺少全国同步监测，而不是“约有 50,000 只”的高精度结论。可把宽区间存入 `metrics.estimatedMatureIndividuals`，但展示必须注明“2014 IUCN 粗估、非全国同步普查”。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T40488A21964009.en) [Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

### 澳大利亚联邦与州级状态必须分开

鸭嘴兽目前**没有列入联邦 EPBC Act 受威胁物种名录**。DCCEEW 于 2026-08-18 更新的决定页把本种列为在 **2021、2022、2026** 年均获考虑：2026 年再次有人提名按 Vulnerable 列入，但 Threatened Species Scientific Committee 认为当时没有证据足以证明**全分布区下降或全国种群下降**，认为本种不太可能符合列名条件，故 TSSC 未建议将其纳入 2026 Proposed Priority Assessment List（PPAL）；该提名可在 2027 年自动重新考虑。[DCCEEW — Species nominations not prioritised for assessment](https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment)

这里必须区分两层证据。2021/2022 文案承认存在下降证据，同时强调观测努力偏差、模型假设及三代内是否达到 30% 下降仍不确定；2026 文案则作出上述“缺少全范围/全国下降证据”的优先清单判断。这是决定哪些提名进入法定评估队列的**优先排序决定**，不是一次已经完成的新 EPBC 灭绝风险评估，也不是 IUCN 全球重评；它不能反向抹去 IUCN 2014 的 decreasing 趋势、局地下降证据或情景模型，只说明现有材料尚未让委员会优先启动全国列名评估。

州级状态不同：

- 维多利亚州当前 **FFG Threatened List July 2026** 将鸭嘴兽列为 **Victoria Vulnerable**。[Victoria threatened-list current page](https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list) [FFG Threatened List July 2026，第 7 页](https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf)
- 南澳大利亚州将其列为 **Endangered**；南澳大陆野生种群自 1970 年代中期起被视为消失，州内可靠的野生种群是 1920 年代引入袋鼠岛后建立的种群。[South Australia wildlife recovery framework](https://www.environment.sa.gov.au/files/sharedassets/public/plants_and_animals/wildlife-habitat-bushfire-recovery-taskforce/wildlife-and-habitat-bushfire-recovery-plan.pdf) [SA Government — River Torrens rewilding background](https://www.environment.sa.gov.au/goodliving/posts/2021/08/platypus-adelaide-river-torrens)
- 新南威尔士州没有把本种列作受威胁物种，但所有本土哺乳动物均受 Biodiversity Conservation Act 2016 一般保护；“未列为受威胁”不等于可以捕捉或伤害。[NSW Government](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus)
- 塔斯马尼亚州政府称其在州内广布并受全面保护，同时明确指出水体/洞岸退化、狗和车辆、渔具及毛霉病（mucormycosis）风险。[NRE Tasmania](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania)

产品的结构化 `conservation` 只能保存全球 IUCN NT；维州 VU、南澳 EN 和 EPBC 未列名应放进正文、标签或故事章节，不能混成一个“澳大利亚易危”的全国结论。

## 分布、引入种群与地图边界

鸭嘴兽是澳大利亚特有种，原生范围沿澳大利亚东部淡水系统，从昆士兰东北部向南经过新南威尔士、澳大利亚首都领地和维多利亚，到塔斯马尼亚与金岛。其分布随永久河流、溪流、湖泊和相连岸带呈线性、破碎结构，并非把整个东部州域连续铺满。[MDD](https://www.mammaldiversity.org/taxon/1000001/) [Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

南澳口径需特别说明：

- 阿德莱德丘陵、洛夫蒂山脉及南澳大陆历史种群已消失；零星目击不足以证明仍有可繁殖种群。[SA Government](https://www.environment.sa.gov.au/goodliving/posts/2021/08/platypus-adelaide-river-torrens)
- 袋鼠岛的 Rocky River / Flinders Chase 种群由 1920 年代引入建立，是南澳目前唯一可靠的野生种群，不应画成岛上原生谱系。[SA Kangaroo Island wildlife guide](https://cdn.environment.sa.gov.au/landscape/docs/ki/wildlife-watch-us-print-2015-A5.pdf)
- MDD 的 country/subregion 字段只列 NSW、QLD、TAS、VIC，分布注释再补南澳历史消失与袋鼠岛引入；产品 `regions` 可包含首都领地和南澳说明，但 `range` 必须把原生、历史消失和引入分开。[MDD](https://www.mammaldiversity.org/taxon/1000001/)

推荐 `center: { lat: -31, lng: 147 }`，仅用于打开东澳大利亚尺度视图；它不是丰度中心、分布几何中心、袋鼠岛位置或观察点。

## 生境：必须同时存在的水下食场与岸上洞穴

鸭嘴兽是**淡水—陆岸半水栖动物**。它完全在水中觅食，却主要在水体土岸洞穴中休息、繁殖和育幼，因此 `realms` 应以 `freshwater` 为首、同时保留 `terrestrial`；不应标成 `marine`。稳定写入的生境包括：[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [NRE Tasmania](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania)

- **河流、溪流的潭—濑序列**：同时利用缓流深潭和较快浅濑，底部砾石、卵石、木质残体和丰富底栖无脊椎动物有利于觅食；综述所说“偏好小于 5 米深度”是常见觅食条件，不是最大潜水深度。
- **湖泊、池塘、湿地、农场坝塘**：从热带溪流到会结冰的高地湖泊均有记录，只要有持续淡水、食物和可掘洞岸线；“能在农场坝塘出现”不表示孤立混凝土水池就是完整生境。
- **根系加固的自然土岸**：休息洞通常约 3—8 米长；繁殖洞可更复杂、更长。入口常在水位以上并被植被、根系或岸形遮蔽，不应画成完全水下的海狸巢。[NSW Government](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus) [NRE Tasmania](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania)
- **相连的河岸与水系走廊**：幼兽扩散、干旱换潭和局部灭绝后的重新定殖依赖连通性；大型坝、陡直堰、干涸河段和不良涵洞可能限制移动，但效应随坝型、流域与研究尺度而异。[Mijangos et al. 2022](https://doi.org/10.1038/s42003-022-04038-9) [Ahrens et al. 2025](https://doi.org/10.1038/s41437-025-00774-w)

## 体型、外形与辨识

澳大利亚政府/州级通用资料常用的两性成体体重口径约为 **0.7—2.4 千克**，适合产品的常规展示字段；澳大利亚博物馆给出更宽的性别包络（雄性 **0.8—3.0 千克**、雌性 **0.6—1.7 千克**），综述也记录北昆士兰约 0.7—1.1 千克、塔斯马尼亚可到 1.2—3.0 千克。差异主要来自“常见成体范围”与“跨性别、跨地理极值包络”口径不同。因此最终 `measurements.weight` 和 `metrics.adultMassKg` 采用 **0.7—2.4 千克**，同时在 note 保留“大型塔斯马尼亚雄兽可至约 3.0 千克”的边界；不能把字段上限 2.4 解读成生物学绝对最大值。[Australian Museum](https://australian.museum/learn/animals/mammals/platypus/) [Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

总长则采用澳大利亚博物馆的两性包络：雄性 **40—63 厘米**、雌性 **37—55 厘米**，结构化字段为喙尖到尾尖 **37—63 厘米**；这不是头体长。[Australian Museum](https://australian.museum/learn/animals/mammals/platypus/)

体型具有显著性别和纬度差异：雄性平均约重 40%、长 15%；北昆士兰个体最小，塔斯马尼亚个体最大。40 年标放研究举例显示，北昆士兰成年雌、雄平均约 37.7 和 43.6 厘米、0.737 和 1.118 千克；塔斯马尼亚成年雌、雄平均约 44.9 和 54.8 厘米、1.232 和 2.154 千克。不可用一只大型塔斯马尼亚雄兽代表全种，也不要把北方小体型画成幼兽。[Bino, Grant & Kingsford 2015](https://doi.org/10.1038/srep16073) [Furlan et al. 2012](https://doi.org/10.1071/ZO11056)

视觉识别要点：[Australian Museum](https://australian.museum/learn/animals/mammals/platypus/) [NRE Tasmania](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania)

- 身体低矮、流线，四肢短并从身体侧面伸出；陆上步态低而外展，不是水獭式长腿奔跑。
- 吻部是覆盖柔软皮肤的宽扁感受器官，形似鸭喙但不是硬质鸟喙；鼻孔位于喙前部，口裂在喙下缘。
- 无外露耳廓；眼和耳孔位于头侧沟中，潜水时沟闭合，鼻孔也关闭。
- 前足宽、蹼发达，游泳时主要交替划水；后足蹼较少，主要帮助稳定和转向。上岸掘洞时前足蹼缘可向后折，不要画成永久圆桨。
- 尾巴宽而背腹扁平、毛较粗疏，是脂肪储存部位之一；不是海狸的无毛鳞片尾，也不是鸭的羽尾。
- 背面深褐至红褐，腹面浅褐、金色或银灰；外层护毛和细密绒毛共同隔水保温，不应画成湿透贴皮的短毛。

## 电感受、潜水与觅食

潜水时鸭嘴兽关闭眼、耳和鼻孔，喙部纵列电感受器与分布更广的机械感受器共同读取猎物肌肉活动产生的微弱电场和水流触觉。1986 年原始实验以行为和皮层诱发电位证明其能检测直流电场，并对约 **50 μV/cm** 的信号产生反应；这支持“感知猎物微弱电场”，不支持画可见闪电、发射声呐波或主动放电。[Scheich et al. 1986](https://doi.org/10.1038/319401a0) [Gregory et al. 1987](https://doi.org/10.1038/326386a0)

野外觅食潜水通常约 **30—140 秒**，潜水之间在水面停留约 10—15 秒；实验估计的有氧潜水极限约 40—59 秒，与观察到更长潜水并不矛盾，因为后者可部分动用无氧代谢。政府科普页提到受惊时可在水下停留最长约 10 分钟，但这不是常规觅食表现，也不应填入 `maxDiveDepthM`。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [NSW Government](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus)

鸭嘴兽在水下用喙扫探砾石、泥沙、沉木与根系周围，把猎物暂存于两侧颊囊，回到水面后用角质磨板研碎吞咽。成体没有功能性牙齿；幼体短暂长出的退化臼齿在离开繁殖洞约一个月后脱落。图片可以画轻微鼓起的颊部，但不要画啮齿类门齿、鲨齿或鸭舌滤食。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

食物几乎完全来自水生无脊椎动物：石蛾、蜉蝣、蜻蜓等水生昆虫幼体/若虫常占重要部分，也取食摇蚊幼虫、淡水螯虾、虾和其他底栖无脊椎动物。食谱会随水域和季节改变；不能把偶尔记录的小鱼或蝌蚪提升成“主要食鱼动物”。非繁殖个体每日可摄入约体重的 13%—28%，哺乳雌兽能量需求更高，但这些是局部研究汇总，不适合作为所有个体固定食量。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

鸭嘴兽通常每天觅食 **8—16 小时**，多在夜间和晨昏活动；冬季或哺乳期也会在白天觅食，个别冬季觅食段可超过 30 小时。因此 `activity` 应写“以夜行为主、随季节和繁殖状态可塑”，不应写“严格夜行”。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

## 体温、毛被与寿命数字

鸭嘴兽体温维持在约 **32°C**，低于许多真兽类；细密弯曲绒毛在潜水时锁住空气，外层护毛和肢端逆流热交换降低冷水散热。综述给出的环境温度耐受约 0—30°C，并指出其难以承受超过 30°C 的环境热负荷；这解释了夜行和白天使用洞穴的意义，但不能写成“水温达到 30°C 就必死”的单一阈值。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

综述称多数个体存活约 **6—15 年**；更新的标放记录把野外已知纪录推进到一只重捕时近 **24 岁**的雄兽，圈养资料记录一只雌兽达到 **30 岁**，另有 10 只圈养个体超过 20 岁。典型存活期、野外纪录和圈养纪录不是同一指标，因此建议仍不填 `metrics.lifespanYears`；若展示，应明确“多数约 6—15 年；纪录近 24/30 年”，不能把极值当预期寿命。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [Serena et al. 2024](https://doi.org/10.1071/AM23048)

## 繁殖、卵、乳汁与洞穴

鸭嘴兽季节性繁殖，并随纬度推迟。新南威尔士州的求偶和筑巢约从 8 月开始，幼兽翌年 1 月下旬至 3 月初出洞；塔斯马尼亚一般晚约两个月。不能用“10 月至 3 月”当作整个分布区固定繁殖日历。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [NSW Government](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus)

雌兽在复杂繁殖洞中产 **1—3 枚**革质卵，单卵约 12—15 毫米宽、15—17 毫米长，孵化约 10 天。初生幼兽约 15 毫米、无毛且高度晚成；圈养观察中的哺乳期约 120—140 天。雌兽没有乳头，乳汁由腹部乳腺开口渗到皮肤和毛上供幼兽舔食；图片不能画有袋类育儿袋、外露乳头或像鸟一样喙对喙喂食。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

繁殖洞常有约 5 米长的隧道、多个开口/分支、土塞和椭圆巢室；NSW 政府也记录最长可达约 30 米的复杂繁殖洞，说明长度变异很大。雌兽用尾巴把湿草、叶和树皮压在腹侧带入巢室；第 05 图只表现这一洞外携材行为，不展示洞内结构或卵。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [NSW Government](https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus)

新出洞幼兽已达到成体体重的约 65%—70%、体长的 83%—87%，所以不是掌心大小的粉红幼崽；母兽与已出洞幼兽可以同框，但不要画成年“鸭嘴兽家庭群”。成体总体独居，个体活动范围可重叠，繁殖和母幼阶段才有更直接互动。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

## 雄性毒距的正确边界

成年雄兽两条后肢踝内侧各有一枚角质中空距，通过导管连接骨盆附近毒腺；雌性幼体有退化距鞘，通常在第一年内脱落。毒腺在繁殖季增大，现有证据更支持其用于雄性间竞争，而不是主要捕猎武器。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058)

毒液可给人造成极强局部疼痛，但公开资料并不支持“能毒死人”；同种雄兽的死亡只见于圈养条件下被反复刺伤的记录。图像必须把毒距放在**成年雄兽后踝**，不能画到前足、尾巴、喙内或雌兽身上，也不要画蛇牙喷毒、爪尖滴毒或巨大蝎刺。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [NRE Tasmania safety guidance](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/report-platypus-sightings)

## 种群趋势、威胁与证据强度

全国丰度和趋势仍缺少统一监测。历史记录研究显示许多流域出现记录与占据范围收缩，但公众记录存在时间和空间采样不均；不能把“某十年无记录的子流域比例”直接等同个体下降率。[Hawke, Bino & Kingsford 2019](https://doi.org/10.1016/j.gecco.2019.e00720)

全分布元种群模型预测，在当时威胁和气候条件下，未来 50 年丰度可能下降 47%—66%、占据下降 22%—32%；叠加 2070 气候情景后区间更差。这是情景模型而非已发生的全国实测下降，联邦委员会也指出模型中“威胁强度—种群响应”关系难以充分验证。产品可用它解释风险，不宜放进 `featuredStats` 冒充当前事实。[Bino et al. 2020](https://doi.org/10.1016/j.biocon.2019.108399) [DCCEEW nomination decision](https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment)

坝的遗传效应也不能只写成单一结论。Mijangos et al. 2022 比较东南澳 9 条河流、81 个点位（5 条有大型坝、4 条无大型坝），发现有坝河流的上下游遗传分化更高，并随建坝时间增加，支持“大型坝可限制扩散与基因交流”。Ahrens et al. 2025 则分析墨尔本 **5 个流域、545 只**鸭嘴兽的 2,715 个 SNP，在这些流域中**未测得坝对迁移的效应**；其结果同时显示河道距离、环境差异和短距离性别偏向扩散可解释遗传结构。两项研究的流域集合、坝类型、时间尺度与比较设计不同，合理结论是坝效应具有情境和时间滞后，不能从后一研究推成“坝不影响鸭嘴兽”，也不能把前一研究外推为每一座坝都已造成相同程度隔离。[Mijangos et al. 2022](https://doi.org/10.1038/s42003-022-04038-9) [Ahrens et al. 2025](https://doi.org/10.1038/s41437-025-00774-w)

主要威胁包括：[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) [Victoria Platypus Risk Assessment](https://www.environment.vic.gov.au/__data/assets/pdf_file/0023/595040/Platypus-Risk-Assessment-Report.pdf)

- **水资源开发与河流调节**：大型坝、堰、水库、抽水和不自然流量改变潭—濑、底栖猎物、繁殖成功与上下游连接。
- **干旱、热浪、火灾与极端洪水**：干涸迫使个体陆行寻找避难潭；高温和火后泥沙/灰烬影响水质、食物和洞岸；洪水也可冲毁洞穴并降低幼兽补充。气候变化会放大而非取代这些水文风险。
- **河岸清除、农业和放牧**：失去根系加固的土岸、遮阴与粗木质残体，牲畜踩踏和侵蚀增加泥沙，覆盖底栖觅食面。
- **城市化与污染**：不透水面造成暴涨暴落的城市径流，污水、营养盐、重金属与细颗粒沉积同时影响鸭嘴兽和猎物。
- **坝与退化河段造成的潜在遗传隔离**：河网线性种群可能被切成小而孤立的单元，降低重殖和基因交流；但不同流域本已有显著遗传结构，实证中既有大型坝阻隔信号，也有墨尔本五流域未测得坝迁移效应的结果，须逐流域评估。
- **渔具误捕与环状垃圾**：封闭式捕虾/捕鱼笼、鳗网和非法网具可致溺亡；鱼线、发圈、橡胶圈、塑料封环会勒入身体。维州 1980—2009 年 186 例可归因死亡中 56% 来自非法网或封闭笼，属于该州记录集，不是全国死亡构成。
- **陆行时的捕食与车辆**：狗、狐、猫及车辆风险在幼兽扩散、河段干涸和跨水体移动时上升。
- **塔斯马尼亚毛霉病（mucormycosis）**：*Mucor amphibiorum* 引起严重溃疡性皮炎，可损害保温与移动并致死；目前是塔斯马尼亚特定风险，不能写成澳大利亚全域普遍流行。[NRE Tasmania — Platypus fungal disease](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-fungal-disease)

## 推荐保护行动

1. 保证河流生态流量和干旱避难潭，避免在繁殖、哺乳与极端干旱期突然抽干或剧烈改变水位；把鸭嘴兽与底栖猎物响应纳入环境水监测。
2. 恢复连续本土河岸植被、根系加固土岸、遮阴、潭—濑和粗木质结构，限制牲畜踩踏并控制侵蚀和火后泥沙。
3. 对坝、堰、涵洞和城市排水进行连通性与水文改造；先以流域遗传结构和避难潭位置确定优先顺序，不把“通道”简化成任意一根水管。
4. 禁用或改造会淹死鸭嘴兽的封闭式捕捞网具，执法清除非法网；减少鱼线和环状垃圾，要求所有环状废物剪断后处置。
5. 建立全国一致的长期监测：eDNA 用于占据筛查，标放、声学追踪和遗传样本用于丰度、存活、扩散与连通性；没有检测概率校正时，不用公众目击数直接宣布恢复或崩溃。
6. 对小而孤立种群制定遗传管理和干旱救援预案；转移/重引入必须做来源种群、疾病、寄生物、遗传和目标地水文风险评估。
7. 在塔斯马尼亚持续监测毛霉病及病原扩散，设备跨流域使用前执行清洁消毒；不随意搬运疑似病兽。
8. 将气候情景纳入水资源、火灾恢复和城市规划，优先保护在干旱中仍有水、食物和安全洞岸的持久河段。

联邦与州项目已经提供可操作例子：2026 年 Urban Rivers and Catchments Program 包含多地鸭嘴兽河岸、栖息地与智能水网恢复；Royal National Park 在确认局部消失 50 多年后于 2023 年放归 10 只，并在 2024 年确认野外出生幼兽。后者证明经过目标地评估的重引入可以繁殖，不证明任何空缺河流都适合直接放兽。[DCCEEW Urban Rivers and Catchments Program](https://www.dcceew.gov.au/environment/biodiversity/conservation/urban-rivers-catchments-program) [NSW Government — Royal National Park breeding success](https://www.environment.nsw.gov.au/news/first-platypus-translocation-in-nsw-results-in-breeding-success)

## 推荐的故事章节

1. **不是拼接怪兽**：从“鸭喙、蹼足、宽尾”的误认史切入，解释它是现生单孔类，不是鸟、海狸和水獭的混合体。
2. **闭上眼，用喙看见河床**：潜水时眼、耳、鼻关闭，喙部电感受与机械感受共同定位底栖猎物。
3. **把一层空气穿在身上**：致密双层毛被、约 32°C 体温、前足推进和后足转向如何支持冷水潜游。
4. **卵在洞里，乳在毛上**：1—3 枚小革质卵、植被巢、无乳头哺乳和数月洞中育幼。
5. **雄兽踝上的季节性武器**：毒距只属于成年雄兽，主要与繁殖竞争相关，不用于水下猎食。
6. **一条河如何被切成许多孤岛**：坝、干旱、城市径流、河岸清除和渔具如何同时作用，以及生态流量、连通和长期监测为何要一起做。

## 推荐的关键事实

1. 鸭嘴兽是鸭嘴兽科唯一现生种，也是五种现生单孔类之一；“卵生”与“哺乳”同时成立。
2. 潜水时眼、耳和鼻孔关闭，柔软喙部以电感受和触觉寻找水底无脊椎猎物。
3. 成体没有功能性牙齿，会把水下取得的猎物放进颊囊，回到水面用角质磨板处理。
4. 雌兽产 1—3 枚革质卵，没有育儿袋或乳头；乳汁从腹部皮肤开口渗出供幼兽舔食。
5. 毒距位于成年雄兽两条后肢踝部，繁殖季毒腺活跃，主要用于雄性竞争。
6. 全球 IUCN 当前公开状态是 2014 年评估的近危、趋势下降；澳大利亚联邦未列作受威胁，但维州为易危、南澳为濒危。

## 应删除或避免的说法

- 不写“鸭嘴兽是爬行动物与哺乳动物之间的活化石”或“原始、未进化的哺乳动物”；它是现生单孔类的高度特化物种。
- 不写“全球只剩 50,000 只”；IUCN 是 30,000—300,000 的十倍宽区间，50,000 只是旧评估点估计。
- 不把 IUCN 2016-1 发布卷期填成 `assessedYear: 2016`；评估年份是 2014。
- 不给 NT 擅自补 `A2c` criteria；“接近三代下降 30%”是评估理由，不是本文核得的正式 criteria 字符串。
- 不写“澳大利亚把鸭嘴兽列为易危”；联邦 EPBC 未列，维州 VU、南澳 EN，州与全国尺度不同。
- 不写“袋鼠岛是原生分布”；当地种群由 1920 年代引入。
- 不再写“野外最长 21 年、圈养最长 25 年”；2024 原始论文已把纪录更新为野外近 24 年、圈养 30 年，但二者仍不是典型寿命。
- 不写“鸭嘴兽靠声呐捕食”“喙会放电”或画可见电弧；它被动感受猎物产生的微弱电场，并结合机械感受。
- 不把软而有皮肤的喙画成坚硬黄色鸭喙，不加牙齿，不加外耳廓。
- 不写“雄性毒液能杀死人”或“雌雄都有毒刺”；成年雄兽有后踝毒距，人类病例以剧痛和局部反应为主。
- 不画育儿袋、乳头、鸟巢、露天蛋或水下蛋；卵与无毛幼兽都在封闭的河岸繁殖洞内。
- 不把新出洞幼兽画成手指大小；出洞时已接近成体长度。
- 不把 10 分钟受惊潜水记录当作普通觅食时长，也不从“常在 <5 m 水深觅食”推导全种最大潜深。
- 不公开小种群、干旱避难潭、繁殖洞或放归个体的精确位置。

## 量化字段取舍

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `measurements.length` | 37—63 cm | 喙尖至尾尖总长，两性与全分布区联合包络；雄性典型 40—63、雌性 37—55 cm。[Australian Museum](https://australian.museum/learn/animals/mammals/platypus/) |
| `metrics.adultLengthCm` | `[37, 63]` | 与展示字段同为总长，不混用头体长。 |
| `measurements.weight` | 0.7—2.4 kg | 最终字段采用官方资料常用的两性成体展示范围；跨性别、跨地理综述包络可至约 3.0 kg，字段上限不是绝对极值。[Australian Museum](https://australian.museum/learn/animals/mammals/platypus/) [Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) |
| `metrics.adultMassKg` | `[0.7, 2.4]` | 与展示字段保持同一“常用成体范围”口径；大型塔斯马尼亚雄兽约 3.0 kg 仅在 note/正文保留。 |
| `metrics.estimatedMatureIndividuals` | `[30000, 300000]` | 2014 IUCN 全球粗估，50,000 是点估计；不是同步普查。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T40488A21964009.en) |
| `metrics.lifespanYears` | 不填 | 多数约 6—15 年；2024 论文记录野外雄兽近 24 岁、圈养雌兽 30 岁及另 10 只圈养个体超过 20 岁。当前 schema 无法区分典型值与野外/圈养纪录。[Serena et al. 2024](https://doi.org/10.1071/AM23048) |
| `metrics.maxDiveDepthM` | 不填 | 偏好 <5 m 水深不是全物种最大潜深；10 分钟记录也只是受惊潜水时长。 |
| `metrics.elevationM` | 不填 | 权威来源支持从热带到高山环境，但未核到可一致映射的全种海拔上下界。 |
| `metrics.topSpeedKph` | 不填 | 综述 0.7—3.6 km/h 是观测游速范围，不是经过统一测定的最高速度。 |
| `featuredStats.population` | 30,000—300,000 只 | 2014 IUCN 成熟个体粗估，必须显示不确定性。 |
| `featuredStats.eggs` | 1—3 枚 | 每窝卵数；图像默认 2 枚不代表固定产 2 枚。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) |
| `featuredStats.foraging-dive` | 30—140 秒 | 野外觅食潜水观测范围，不是屏息极限。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) |
| `featuredStats.body-temperature` | 约 32°C | 空气和水中维持的典型体温；不是环境水温。[Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) |

## 6 幅图像内容建议

| 序号与文件 | 建议场景 | 必须表现的物种线索 | 应拒绝的错误 |
| --- | --- | --- | --- |
| 01 `01-creek-bank-portrait.webp` | 封面：晨雾中的东澳溪岸，一只完整成体停在湿石上，主体位于画面右侧并给左侧标题区留白 | 柔软深灰褐宽喙、低平流线身体、深褐防水毛、无耳廓、四条短而外展的肢和宽扁有毛尾；个体独行 | 黄色硬鸭喙、海狸鳞尾、水獭圆鼻、外耳、卡通拼接感；不要在封面强行展示毒距 |
| 02 `02-underwater-electroreceptive-foraging.webp` | 水下侧背视图：个体贴近砾石河床左右扫动喙，附近有石蛾/蜉蝣幼体和小型淡水甲壳类 | 眼、耳沟和鼻孔闭合；喙接近底物；宽蹼前足划水、后足稳定、宽扁有毛尾；可用极克制的构图暗示感知，但不画物理特效 | 可见闪电、电弧、声呐圆波、发光喙；睁眼追鱼、张口露牙、大鱼主食、珊瑚或海水场景 |
| 03 `03-eastern-australian-stream-habitat.webp` | 河流生境大景：相连深潭与浅濑、砾石底、沉木和根系加固土岸，鸭嘴兽占画面较小 | 淡水与陆岸同时入镜；表达完整河流走廊和可供掘洞的稳定土岸，而非暴露某个真实洞口 | 水下洞口、树枝筑坝、海狸屋、裸露规则圆洞、混凝土渠道；不要标真实洞穴或避难潭坐标 |
| 04 `04-male-hind-ankle-spur.webp` | 低矮自然土岸上的成年雄兽，侧后角度清楚展示一侧后踝角质毒距，同时能见前足蹼折回以便行走 | 毒距只在后踝且尺度合理；雄兽体型较壮；四足外展、前足蹼而有爪，尾宽扁有毛 | 前爪毒针、尾刺、獠牙、喷毒或巨大蝎刺；不要标成雌兽，不要画人手抓持或攻击人类 |
| 05 `05-female-nesting-burrow.webp` | 河岸外的筑巢行为：雌兽用尾巴把湿草叶压在腹侧，走向根系与植被遮蔽、位于水位以上的洞口 | 巢材由尾腹部携带而非叼在嘴里；洞口隐蔽、尺度克制；雌兽不画后踝毒距、乳头或育儿袋 | 露出卵或洞穴剖面、嘴叼巢材、枝条鸟巢、水下洞口、巨大规则圆洞；不要暴露可定位的真实繁殖洞址 |
| 06 `06-stream-monitoring-and-restoration.webp` | 河岸修复与非侵入监测：工作人员在远离动物和洞岸的位置记录水质或采集 eDNA 水样，远处水面仅见一只鸭嘴兽 | 人员与鸭嘴兽保持明显距离；修复中的本土河岸植被、稳定土岸与淡水走廊清楚；监测设备轻量、非捕捉 | 触摸、手持、投饵、围堵或网捕动物；人员踩近洞口；公开标签、坐标或可辨识的小种群点位；把 eDNA 画成抽取动物血液 |

六图共同形态总检：**one flexible grey-brown bill, no external pinnae, four short splayed limbs, broad webbed forefeet, partly webbed hind feet, broad flattened furred tail, dense dark-brown double coat, pale underside, no visible teeth**。水下图再加：**eyes, ear grooves and nostrils closed; no electricity VFX, no sonar, no ocean**。繁殖图再加：**no pouch, no nipples, no bird nest, no underwater eggs**。

## 可直接用于 `species.ts` 的字段建议

下面对象覆盖当前 `Species` 全部必填字段。媒体文件名与已落盘资产一致；`focalPoint` 仍应在集成时按实际裁切复核。

```ts
const PLATYPUS_SOURCE_DATE = '2026-08-20' as const;
const PLATYPUS_CONTENT_DATE = '2026-08-20' as const;

const PLATYPUS_SOURCES = [
  {
    title: 'IUCN Red List — Ornithorhynchus anatinus (assessed 2014; published 2016-1)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T40488A21964009.en',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Ornithorhynchus anatinus',
    url: 'https://www.mammaldiversity.org/taxon/1000001/',
    kind: 'taxonomy',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Australian Faunal Directory — Ornithorhynchus anatinus taxon concept',
    url: 'https://biodiversity.org.au/afd/taxa/ac61fd14-4950-4566-b384-304bd99ca75f',
    kind: 'taxonomy',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Platypus nominations considered in 2021, 2022 and 2026 but not prioritised',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Victoria DEECA — FFG Threatened List July 2026',
    url: 'https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'NRE Tasmania — Platypus in Tasmania',
    url: 'https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'NSW Government — Platypus native animal profile',
    url: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/platypus',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'South Australia — Kangaroo Island platypus background',
    url: 'https://www.environment.sa.gov.au/goodliving/posts/2020/04/platypus-recovery-on-ki',
    kind: 'distribution',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Platypus identification and measurements',
    url: 'https://australian.museum/learn/animals/mammals/platypus/',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Bino et al. 2019 — The platypus: evolutionary history, biology, and an uncertain future',
    url: 'https://doi.org/10.1093/jmammal/gyz058',
    kind: 'general',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Scheich et al. 1986 — Electroreception and electrolocation in platypus',
    url: 'https://doi.org/10.1038/319401a0',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Gregory et al. 1987 — Electroreceptors in the bill skin of the platypus',
    url: 'https://doi.org/10.1038/326386a0',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Bino, Grant & Kingsford 2015 — Four decades of mark-recapture surveys',
    url: 'https://doi.org/10.1038/srep16073',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Furlan et al. 2012 — Geographic variation in platypus body size',
    url: 'https://doi.org/10.1071/ZO11056',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Hawke, Bino & Kingsford 2019 — Historical population and distribution changes',
    url: 'https://doi.org/10.1016/j.gecco.2019.e00720',
    kind: 'distribution',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Bino et al. 2020 — A stitch in time: synergistic impacts to platypus metapopulation extinction risk',
    url: 'https://doi.org/10.1016/j.biocon.2019.108399',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Mijangos et al. 2022 — Fragmentation by major dams',
    url: 'https://doi.org/10.1038/s42003-022-04038-9',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Ahrens et al. 2025 — Genetic diversity and structure in a Melbourne platypus meta-population',
    url: 'https://doi.org/10.1038/s41437-025-00774-w',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Serena et al. 2024 — New wild and captive longevity records',
    url: 'https://doi.org/10.1071/AM23048',
    kind: 'ecology',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
  {
    title: 'Victoria DEECA 2021 — Platypus Risk Assessment Report',
    url: 'https://www.environment.vic.gov.au/__data/assets/pdf_file/0023/595040/Platypus-Risk-Assessment-Report.pdf',
    kind: 'conservation',
    accessedAt: PLATYPUS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-ornithorhynchus-anatinus',
  slug: 'platypus',
  names: {
    zh: '鸭嘴兽',
    en: 'Platypus',
    aliases: ['Duck-billed Platypus'],
  },
  scientificName: 'Ornithorhynchus anatinus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Monotremata', '单孔目'),
    taxon('Ornithorhynchidae', '鸭嘴兽科'),
    taxon('Ornithorhynchus', '鸭嘴兽属'),
  ),
  conservation: conservation('NT', 'decreasing', 2014),
  distribution: {
    realms: ['freshwater', 'terrestrial'],
    continents: ['大洋洲'],
    regions: ['澳大利亚东部', '昆士兰东北部', '新南威尔士与澳大利亚首都领地', '维多利亚', '塔斯马尼亚与金岛', '袋鼠岛引入种群'],
    countries: ['澳大利亚'],
    endemicTo: ['澳大利亚'],
    range:
      '原生于澳大利亚东部相连淡水系统，从昆士兰东北部向南经过新南威尔士、澳大利亚首都领地和维多利亚，延伸到塔斯马尼亚与金岛；南澳大利亚大陆历史种群已消失，袋鼠岛现存种群由 1920 年代引入。实际分布沿永久河流、溪流、湖泊与岸带呈线性和破碎格局。',
    center: { lat: -31, lng: 147 },
  },
  habitats: [
    {
      name: '河流、溪流的潭—濑序列',
      realm: 'freshwater',
      description: '在缓流潭和较快浅濑的砾石、卵石、沉木与根系间寻找底栖无脊椎动物；持续水量、水质和猎物生产力共同决定适宜度。',
      isPrimary: true,
    },
    {
      name: '湖泊、池塘与湿地淡水体',
      realm: 'freshwater',
      description: '从热带水道到塔斯马尼亚高地湖泊，也可利用农场坝塘；必须同时有稳定淡水、食物和可到达的洞岸。',
    },
    {
      name: '根系加固的自然土岸',
      realm: 'terrestrial',
      description: '在水位以上的土岸掘休息洞和繁殖洞，河岸根系、遮阴植被、稳定岸体及巢材支持日间休息、产卵和数月育幼。',
    },
    {
      name: '相连水系与河岸走廊',
      realm: 'terrestrial',
      description: '幼兽扩散、干旱换潭和局部灭绝后的重殖依赖连续河段与安全陆行路径；坝、堰、干涸段和硬化岸线会切断连接。',
    },
  ],
  measurements: {
    length: { min: 37, max: 63, unit: 'cm', note: '成体喙尖至尾尖总长；雄性典型约 40—63 厘米，雌性约 37—55 厘米' },
    weight: { min: 0.7, max: 2.4, unit: 'kg', note: '官方资料常用的两性成体展示范围；综述所见地理/个体极值可至约 3.0 千克' },
  },
  diet: {
    types: ['insectivore', 'carnivore'],
    foods: ['石蛾、蜉蝣、蜻蜓与摇蚊等水生昆虫幼体或若虫', '淡水螯虾、虾和其他甲壳类', '水生蠕虫与其他底栖无脊椎动物'],
    description: '几乎完全在水中捕食，以可获得的底栖大型无脊椎动物为主；食谱随水域与季节变化，偶见小型脊椎动物记录，但并非以鱼为核心食物。',
  },
  activity: [
    '主要在夜间和晨昏觅食，冬季、阴天或哺乳期也会白天活动',
    '通常独居，个体活动范围可重叠；母兽独自筑繁殖洞和育幼',
    '完全在水中取食，猎物存入颊囊后回到水面磨碎吞咽',
    '常每天觅食 8—16 小时，并反复进行短潜水',
    '以发达前足蹼推进，后足和宽扁尾帮助稳定与转向',
  ],
  tags: ['澳大利亚特有种', '单孔类', '卵生哺乳动物', '淡水半水栖', '电感受', '雄性有毒距', '全球近危'],
  summary: '澳大利亚东部河网中的卵生哺乳动物，以柔软电感受喙读取河床，以洞穴完成产卵和无乳头哺乳。',
  description:
    '鸭嘴兽是鸭嘴兽科唯一现生种，也是少数现生单孔类之一。它在水下闭合眼、耳和鼻孔，用柔软喙上的电感受器与机械感受器寻找底栖无脊椎动物，再把猎物带回水面处理。雌兽在河岸繁殖洞内产 1—3 枚卵，幼兽舔食从腹部皮肤渗出的乳汁；成年雄兽后踝则有繁殖季活跃的毒距。它仍横跨东澳许多水系，却受到河流调节、干旱、岸线退化、城市径流、渔具误捕和种群隔离的叠加压力。',
  storySections: [
    {
      key: 'monotreme-identity',
      label: '单孔类身份',
      title: '不是拼接怪兽，而是一条独立的哺乳动物道路',
      body: '鸭嘴兽会产革质卵，也会分泌乳汁；宽喙、蹼足和扁尾是淡水生活的特化，不是鸭、海狸和水獭的零件拼接。它与针鼹共同构成现生单孔类，而鸭嘴兽科今天只剩这一种。',
    },
    {
      key: 'electric-bill',
      label: '电感受觅食',
      title: '闭上眼，用喙看见河床',
      body: '潜水时眼、耳和鼻孔都关闭，喙部成列电感受器读取猎物肌肉产生的微弱电场，机械感受器同时提供触觉和水流信息。它不会主动放电，也不是靠声呐，而是用左右扫动把两类线索拼成水下目标。',
    },
    {
      key: 'swimming-and-fur',
      label: '潜游与保温',
      title: '把一层空气穿在身上',
      body: '宽大的前足蹼交替划水，后足和有毛扁尾负责稳定；细密绒毛锁住空气，护毛挡水，使约 32°C 的身体能反复进入冷水。上岸时蹼缘折回，短肢外展，让它以低矮步态走向岸洞。',
    },
    {
      key: 'eggs-and-milk',
      label: '繁殖与育幼',
      title: '卵在洞里，乳在毛上',
      body: '雌兽把湿草、叶和树皮带入复杂河岸洞，产下 1—3 枚小卵并蜷身孵化。她没有乳头，乳汁从腹部皮肤开口渗到毛上；幼兽在黑暗巢室中哺乳数月，长到接近成体长度才首次出洞。',
    },
    {
      key: 'male-venom',
      label: '雄性毒距',
      title: '后踝上的季节性武器',
      body: '成年雄兽两条后踝各有一枚中空角质距，连接繁殖季增大的毒腺。它能造成极强疼痛，现有行为与季节证据却更指向雄性竞争，而不是捕猎；雌兽成年后没有这套武器。',
    },
    {
      key: 'fragmented-rivers',
      label: '河流与保护',
      title: '一条河，如何被切成许多孤岛',
      body: '坝、陡堰、抽水、干旱、城市暴雨径流和河岸清除会同时改变猎物、洞岸与移动路线。保护鸭嘴兽不能只留一潭水，还要恢复生态流量、自然岸线和上下游连接，并用 eDNA、标放与遗传监测分辨真正的种群变化。',
    },
  ],
  keyFacts: [
    '鸭嘴兽是鸭嘴兽科唯一现生种，也是五种现生单孔类之一。',
    '潜水时眼、耳和鼻孔关闭，喙部结合电感受与机械感受寻找水底猎物。',
    '成体没有功能性牙齿，会把猎物放进颊囊并回到水面用角质磨板处理。',
    '雌兽产 1—3 枚革质卵，没有育儿袋或乳头，乳汁从腹部皮肤开口渗出。',
    '成年雄兽两条后踝各有毒距，主要用于繁殖季的雄性竞争。',
    '全球 IUCN 为近危；联邦 EPBC 未列作受威胁，但维州列易危、南澳列濒危。',
  ],
  threats: [
    '筑坝、堰、抽水和河流调节改变生态流量、潭濑结构、猎物与繁殖条件',
    '气候变化加剧干旱、热浪、火灾、极端洪水和持久淡水避难地丧失',
    '河岸清除、农业放牧、踩踏与侵蚀破坏洞岸并使泥沙覆盖底栖觅食面',
    '城市不透水面、暴雨径流、污水、营养盐、重金属和细颗粒污染',
    '坝体、干涸河段与退化水道切断扩散和基因交流，形成小型孤立种群',
    '封闭式捕捞笼、鳗网、非法网具、鱼线与环状垃圾造成溺亡和缠绕伤',
    '陆行时遭狗、狐、猫捕食或车辆撞击',
    '塔斯马尼亚毛霉病造成溃疡、继发感染及保温和移动障碍',
  ],
  conservationActions: [
    '维持生态流量、持久避难潭和自然潭濑，避免在繁殖与干旱期剧烈改变水位',
    '恢复连续本土河岸植被、根系加固土岸、遮阴和粗木质结构，并限制牲畜踩踏',
    '改造坝、陡堰、涵洞与城市排水，按遗传结构和水文风险恢复有效连通',
    '禁用会淹死鸭嘴兽的封闭网具，清除非法网、鱼线与环状垃圾',
    '结合 eDNA、标准化标放、声学追踪和遗传样本开展全国长期监测',
    '为孤立种群制定干旱救援和遗传管理预案，转移前完成疾病与来源风险评估',
    '在塔斯马尼亚持续监测毛霉病并执行跨流域设备清洁消毒',
    '把未来干旱、火灾和极端洪水纳入水资源、城市与保护地管理',
  ],
  metrics: {
    adultLengthCm: [37, 63],
    adultMassKg: [0.7, 2.4],
    estimatedMatureIndividuals: [30000, 300000],
  },
  featuredStats: [
    {
      key: 'mature-population',
      label: '成熟个体粗估',
      value: '30,000—300,000',
      unit: '只',
      note: '2014 IUCN 十倍宽区间，50,000 是点估计；并非全国同步普查',
    },
    {
      key: 'eggs-per-clutch',
      label: '每窝卵数',
      value: '1—3',
      unit: '枚',
    },
    {
      key: 'foraging-dive',
      label: '野外觅食潜水',
      value: '30—140',
      unit: '秒',
      note: '常规觅食观测范围，不是屏息或受惊潜水极限',
    },
    {
      key: 'body-temperature',
      label: '典型体温',
      value: '约 32',
      unit: '°C',
      note: '指体温，不是水温或环境耐受阈值',
    },
  ],
  media: {
    image: './images/species/platypus/01-creek-bank-portrait.webp',
    alt: '晨雾笼罩的东澳溪岸，一只完整的深褐色成年鸭嘴兽停在湿石上，主体位于画面右侧',
    focalPoint: { x: 0.72, y: 0.62 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/platypus/02-underwater-electroreceptive-foraging.webp',
        alt: '水下砾石河床上，一只鸭嘴兽闭合可见眼与鼻孔，用柔软宽喙扫探小型淡水无脊椎动物，宽蹼足和有毛扁尾清晰可见',
        title: '闭上眼，用喙读取河床',
        caption: '喙部电感受器与机械感受器共同定位底栖猎物；鸭嘴兽不会主动放电，也不靠声呐。',
        focalPoint: { x: 0.53, y: 0.53 },
      },
      {
        image: './images/species/platypus/03-eastern-australian-stream-habitat.webp',
        alt: '有相连深潭与浅濑、砾石沉木和根系加固土岸的东澳森林溪流，一只鸭嘴兽在水面显得很小',
        title: '潭濑、河岸与连通水流',
        caption: '持续淡水、底栖猎物、根系加固土岸和上下游连通，共同组成完整生境；画面不标示繁殖洞位置。',
        focalPoint: { x: 0.56, y: 0.72 },
      },
      {
        image: './images/species/platypus/04-male-hind-ankle-spur.webp',
        alt: '湿润溪岸石面上的成年雄性鸭嘴兽侧身行走，一侧后踝可见尺度克制的角质毒距',
        title: '雄兽后踝的毒距',
        caption: '成年雄兽两条后踝各有一枚毒距，毒腺在繁殖季活跃，主要与雄性竞争相关。',
        focalPoint: { x: 0.58, y: 0.58 },
      },
      {
        image: './images/species/platypus/05-female-nesting-burrow.webp',
        alt: '河岸外一只无毒距雌性鸭嘴兽用尾巴把湿草叶压在腹侧，正走向根系遮蔽的洞口',
        title: '把湿巢材带回河岸洞',
        caption: '雌兽会用尾巴把湿草、叶和树皮压在腹侧带入繁殖洞；洞口应保持隐蔽，不公开真实繁殖位置。',
        focalPoint: { x: 0.42, y: 0.58 },
      },
      {
        image: './images/species/platypus/06-stream-monitoring-and-restoration.webp',
        alt: '东澳森林溪流旁，两名工作人员在本土植被修复区采集 eDNA 水样并记录，水中一只鸭嘴兽与他们保持距离',
        title: '不打扰，也能读懂一条河',
        caption: 'eDNA 与标准化长期监测可减少对动物的直接干扰；人员应远离动物和洞岸，不触摸、投饵或暴露敏感点位。',
        focalPoint: { x: 0.53, y: 0.72 },
      },
    ],
  },
  sources: PLATYPUS_SOURCES,
  publishedAt: PLATYPUS_CONTENT_DATE,
  updatedAt: PLATYPUS_CONTENT_DATE,
}
```

是否设置 `featured: true` 属于首页编排选择，不是物种事实，因此不在研究建议中预设。

## 来源清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 全球 IUCN | [Woinarski & Burbidge — *Ornithorhynchus anatinus*, IUCN 2016-1](https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T40488A21964009.en) | 当前公开 NT、下降趋势、2014 评估、30,000—300,000 成熟个体粗估；记录已超过十年，等待重评 |
| 当前哺乳动物分类 | [ASM Mammal Diversity Database v2.5](https://www.mammaldiversity.org/taxon/1000001/) | 接受名、作者、单型种、上级分类、分布与地理谱系注释 |
| 澳大利亚分类口径 | [AFD taxon concept](https://biodiversity.org.au/afd/taxa/ac61fd14-4950-4566-b384-304bd99ca75f) [ALA mirror](https://bie.ala.org.au/species/https%3A/biodiversity.org.au/afd/taxa/ac61fd14-4950-4566-b384-304bd99ca75f) | AFD 直接页受 WAF 限制时由 ALA 展示其 taxon concept；分类链与接受名一致 |
| 联邦法定状态 | [DCCEEW — nominations not prioritised](https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment) | EPBC 未列名；2021、2022、2026 年获考虑，TSSC 未建议将 2026 Vulnerable 提名纳入 PPAL，可在 2027 自动重议；这是优先评估建议，不是 IUCN 或完整 EPBC 风险重评 |
| 维州法定状态 | [Victoria current-list page](https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list) [FFG Threatened List July 2026](https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf) | 截至本文日期的当前列表，Victoria Vulnerable |
| 南澳状态与引入史 | [SA recovery framework](https://www.environment.sa.gov.au/files/sharedassets/public/plants_and_animals/wildlife-habitat-bushfire-recovery-taskforce/wildlife-and-habitat-bushfire-recovery-plan.pdf) [Kangaroo Island guide](https://cdn.environment.sa.gov.au/landscape/docs/ki/wildlife-watch-us-print-2015-A5.pdf) | SA Endangered；南澳大陆消失、袋鼠岛 1920 年代引入 |
| 塔州状态与疾病 | [NRE Tasmania species page](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-in-tasmania) [mucormycosis page](https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/mammals/echidnas-and-platypus/platypus/platypus-fungal-disease) | 塔州分布、生境、形态、保护与局地毛霉病；旧页面部分概括数字用综述交叉核验 |
| 形态与全种体型 | [Australian Museum](https://australian.museum/learn/animals/mammals/platypus/) | 两性总长和体重包络、辨识；博物馆资料，不替代原始种群样本 |
| 综合生物学 | [Bino et al. 2019](https://doi.org/10.1093/jmammal/gyz058) | 形态、生境、毛被、感官、潜水、食性、繁殖、旧寿命纪录、毒距和威胁综述；部分数值来自局部研究或个人观察，正文均保留限制 |
| 电感受实验 | [Scheich et al. 1986](https://doi.org/10.1038/319401a0) [Gregory et al. 1987](https://doi.org/10.1038/326386a0) | 行为、皮层与受体电生理证据；不支持可见电场或主动放电 |
| 生活史、体型与寿命 | [Bino et al. 2015](https://doi.org/10.1038/srep16073) [Furlan et al. 2012](https://doi.org/10.1071/ZO11056) [Serena et al. 2024](https://doi.org/10.1071/AM23048) | 40 年标放、性别/纬度体型、存活与繁殖；Serena 更新野外近 24 岁和圈养 30 岁纪录；地点研究和纪录个体不可直接外推为全国典型值 |
| 历史变化 | [Hawke et al. 2019](https://doi.org/10.1016/j.gecco.2019.e00720) | 历史记录、流域记录缺口和毛皮贸易；公众记录的采样努力不均，不能等同个体下降 |
| 未来风险模型 | [Bino et al. 2020](https://doi.org/10.1016/j.biocon.2019.108399) | 50 年元种群情景；是模型投影，不是当前实测下降率 |
| 坝与遗传结构 | [Mijangos et al. 2022](https://doi.org/10.1038/s42003-022-04038-9) [Ahrens et al. 2025](https://doi.org/10.1038/s41437-025-00774-w) | 前者跨 9 条河比较发现大型坝阻隔信号；后者在墨尔本 5 流域、545 个体中未测得坝对迁移的效应。范围与设计不同，支持逐流域、逐时间尺度评估 |
| 州级风险管理 | [Victoria Platypus Risk Assessment 2021](https://www.environment.vic.gov.au/__data/assets/pdf_file/0023/595040/Platypus-Risk-Assessment-Report.pdf) | 水文、气候、洞岸、误捕、垃圾、疾病和管理措施；维州证据不可当作全国死亡比例 |
| 当前恢复项目 | [DCCEEW Urban Rivers Program](https://www.dcceew.gov.au/environment/biodiversity/conservation/urban-rivers-catchments-program) [NSW Royal National Park reintroduction](https://www.environment.nsw.gov.au/news/first-platypus-translocation-in-nsw-results-in-breeding-success) | 2026 河流恢复项目与经评估重引入案例；项目成功不等于任意地点适合放归 |

## 仍然不确定或需后续更新的事项

1. **IUCN 已超十年**：2014 评估仍是当前公开记录，但按 IUCN 流程已需重评；一旦新评估发布，应同时更新 category、trend、assessedYear、population 和可能的 criteria。
2. **全国丰度极不确定**：30,000—300,000 是旧评估的十倍宽区间。全国标准化监测可能显著改变上下界，不应长期把 50,000 点估计固定成首页事实。
3. **联邦名录不是终局判断**：TSSC 未建议将 2026 Vulnerable 提名纳入 2026 PPAL，当时认为缺少足以证明全范围/全国种群下降的证据；该提名可在 2027 自动重新考虑。这仍是评估优先级建议，不代表完成了新的全国风险评估，应继续核查 EPBC 名录和 TSSC 决定。
4. **亚种尚未建立**：多个谱系和强流域遗传结构具有保护意义，但当前 MDD 仍为单型种；只有正式分类修订后才更新 taxonomy。
5. **南澳动态**：袋鼠岛是引入种群，南澳大陆目前无确认繁殖种群；若 River Torrens 或其他流域实施重引入，`range` 应明确“再引入”而非改写成自然恢复。
6. **寿命口径不可混用**：2024 论文把纪录更新为野外近 24 年、圈养 30 年，但它们是单个纪录；多数约 6—15 年仍是另一口径，当前 schema 无法无损表达三者。
7. **潜水极值不统一**：常规 30—140 秒、40—59 秒有氧极限和最长约 10 分钟受惊记录描述不同情境；不要汇成一个“最大潜水能力”。
8. **繁殖洞位置必须模糊化**：第 05 图只展示雌兽携材走向概念性的隐蔽洞口，不展示卵、洞内剖面或任何可定位的真实繁殖洞址。
