# 蓝鲸（*Balaenoptera musculus*）完整档案研究

- 检索与核验日期：2026-08-18
- 使用范围：`src/data/species.ts` 的蓝鲸条目、详情页叙事、统计卡和图片说明
- 证据标准：优先采用现行 IUCN 评估、国际公约与政府机构资料、分类委员会清单，以及能核对样本、地区和方法边界的原始同行评审论文。不同亚种、管理单元、声学种群和单只标记动物的数字不外推为全物种定值。

## 结论摘要

### 分类、亚种与名称

蓝鲸的接受学名是 ***Balaenoptera musculus*** (Linnaeus, 1758)，属于脊索动物门、哺乳纲、鲸偶蹄目（Artiodactyla）下的鲸下目（Cetacea）、须鲸科（Balaenopteridae）和须鲸属（*Balaenoptera*）。仓库若只支持五级分类，可以沿用项目中以 `Cetacea` 作为“目”的简化口径，但不宜把这一界面口径描述成最新系统分类的完整阶元。[Society for Marine Mammalogy Committee on Taxonomy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

截至 2026 年 4 月，海洋哺乳动物学会分类委员会承认四个亚种：北方蓝鲸 ***B. m. musculus***、南极蓝鲸 ***B. m. intermedia***、侏儒蓝鲸 ***B. m. brevicauda***，以及北印度洋蓝鲸 ***B. m. indica***。东南太平洋智利种群具有明显独特性，但 `B. m. chilensis` 尚无有效的正式描述，被委员会作为裸名处理；`B. m. arabica` 也未获承认。委员会同时指出，新基因组研究正在挑战部分传统边界，但当前采样和正式命名行为仍不足以再拆分亚种。[Society for Marine Mammalogy Committee on Taxonomy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [Attard et al. 2024](https://doi.org/10.1111/acv.12935)

NOAA 2020 年恢复计划使用五个亚种和九个管理单元，是理解区域保护工作的权威基线，却早于 2026 年分类清单。项目应明确区分：**亚种**是正式分类单元，**管理单元**是保护与评估口径，**声型或歌声类型**是种群结构线索；三者不能相互替代。尤其不要把“智利管理单元”直接写成已接受的“智利亚种”。[NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf) [Society for Marine Mammalogy Committee on Taxonomy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

仓库中文名“蓝鲸”和英文名“Blue Whale”可保留。本轮限定的官方与一手资料没有为中文别名“剃刀鲸”提供规范命名依据，建议从结构化 `aliases` 删除，除非另补国家级中文动物名录或同等权威的中文命名来源。

### IUCN 状态、趋势与种群数量

截至本次核验，最新全球 IUCN 评估为 **濒危 Endangered（EN），标准 A1abd，评估年份 2018，趋势 increasing**。`A1` 表示过去三个世代或十年中较长的一段发生种群减少，且减少原因可逆、已理解并已停止；后缀 `a`、`b`、`d` 分别表示直接观察、适合该分类单元的丰度指数和实际或潜在开发利用水平等证据。这里的“increasing”描述当前趋势，并不等于已经恢复到捕鲸前水平，也不与历史衰退标准矛盾。[IUCN — *Balaenoptera musculus* assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T2477A156923585.en) [IUCN Red List Categories and Criteria v3.1, 2nd ed.](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf)

IUCN/NOAA 采用的全球量级是约 **10,000—25,000 只个体，其中约 5,000—15,000 只成熟个体**；它们是跨区域资料汇总的估计区间，不是 2018 年一次全球同步普查。成熟个体数量约为 1926 年至少约 140,000 只这一重建基线的 **3%—11%**。因此推荐保留 `estimatedMatureIndividuals: [5000, 15000]`，同时展示评估年份和估计性质。[IUCN — *Balaenoptera musculus* assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T2477A156923585.en) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

工业捕鲸历史提供了衰退的直接尺度：对 1900—1999 年捕获记录的重建得到 **379,185 头蓝鲸**，其中北大西洋 6,699、北太平洋 8,838、南半球 363,648。这个数字是有记录和重建的 20 世纪捕获量，不是所有年代的绝对总死亡数；蓝鲸在 1966 年获得国际商业捕鲸保护后仍发生过非法捕杀。[Rocha, Clapham & Ivashchenko 2014](https://doi.org/10.7755/MFR.76.4.3)

南极蓝鲸的最新照片识别研究可作为“恢复中但仍稀少”的区域例子：2003/04—2018/19 年整个研究期的 POPAN 超种群估计为 3,506（95% CI 2,107—5,832），而 2018/19 最后一年估计为 1,817（95% CI 714—4,624）。前一个数字代表研究期间进入采样框架的超种群，不是某一时点存量；后一个区间很宽，且作者提示空间采样不均和捕获异质性可能造成向下偏差。研究估得的约 10%—11% 增长率属于这一南极样本和模型，不能写成全球蓝鲸年增长率。[Olson et al. 2025](https://doi.org/10.1111/mms.13215)

### 全球分布、区域单元与迁徙

蓝鲸分布于世界各大洋，但通常不进入北冰洋；其密度和季节性受高生产力水域、锋面、上升流、陆架边缘、海冰边缘和猎物聚集影响。把 `continents` 机械地写成沿岸国家清单会误导，建议使用全球海洋范围、七大洲邻近海域和 `countries: []`，并在 `range` 中解释其远洋与跨境属性。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

北大西洋蓝鲸从亚热带水域延伸到格陵兰海等高纬觅食区；东部北太平洋个体冬春可见于墨西哥和中美洲一带，夏秋主要在美国西岸觅食，也利用阿拉斯加湾和更广的北太平洋。南极蓝鲸多在南半球夏季利用高纬和冰缘水域、冬季向中低纬移动，但并非所有个体每年都完成同一迁徙；侏儒蓝鲸主要位于南极辐合带以北，包括澳大利亚、印度尼西亚、马达加斯加和新西兰相关水域。北印度洋种群全年留在低纬海域，其季风相关移动仍未完全解析。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

“夏到极地吃食、冬到热带繁殖”只能作为常见模式，不能作为每头蓝鲸的固定两点往返路线。不同区域存在部分迁徙、错峰迁徙和全年居留，高纬冬季也能记录到蓝鲸；智利种群可在巴塔哥尼亚、加拉帕戈斯和东部热带太平洋之间移动，但不等于所有个体都完成全程。[Branch et al. 2007](https://doi.org/10.1111/j.1365-2907.2007.00106.x) [NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1)

东部北太平洋 60 头卫星标记蓝鲸、10,495 个定位点的研究显示，它们从下加利福尼亚向北移动的时间，与**多年平均**叶绿素季节峰值的匹配优于与当年即时峰值的匹配。这支持蓝鲸利用记忆和长期环境线索追踪可预期食物资源的解释；样本来自 1999—2008 年的一个区域，不能外推为所有蓝鲸都沿同一“绿色波浪”迁徙。[Abrahms et al. 2019](https://doi.org/10.1073/pnas.1819031116)

### 体型、体重与寿命

蓝鲸是已知体型最大的动物。NOAA 恢复计划汇总的历史最大体长为 **32.6 米**、体重可超过 **150,000 千克**；北半球个体通常较小，雌性平均略大于雄性。加拿大 COSEWIC 资料指出有 33.6 米的历史报告，但最长经科学验证的个体为 **29.9 米**。因此图片说明可写“蓝鲸可超过 30 米，官方综述记录最大约 32.6 米”，而需要严格可复核记录时用“经科学验证 29.9 米”。[NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf) [COSEWIC 2002 Blue Whale Status Report](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/blue-whale-2002.html)

“成体长 24—30 米、重 100—150 吨”不适合作为全物种统一范围。基于成熟雌鲸资料，侏儒蓝鲸平均约 21.0 米，智利种群约 23.5 米，南极蓝鲸约 25.4—26.6 米；性别、亚种、区域、年龄和体况都会影响长度与质量。结构化字段若只能显示无注释的“最小—最大”，宁可不填统一成体体重，也不要把来自不同亚种和记录极值的数据拼成一个典型区间。[Branch et al. 2007](https://doi.org/10.1111/j.1748-7692.2007.00137.x) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

NOAA 将蓝鲸寿命估为约 **80—90 年**，依据包括耳栓层等年龄估计方法。这个区间是寿命量级估计，不是已经完整观测的典型最小—最大寿命；现有 `70—90 年` 缺少与权威页面一致的下界。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1)

### 食性、吞滤机制与日摄食量

蓝鲸是高度专门化的吞滤型须鲸，食物以磷虾类为主；不同海区也可摄食桡足类等小型甲壳类，北印度洋资料还记录对樱虾类（sergestid shrimp）的重要利用。推荐写“以磷虾为主、存在区域性猎物差异”，而不是绝对化成“只吃磷虾”或把少量鱼类写成稳定主食。[NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf) [NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1)

觅食时蓝鲸高速接近猎物团，张口后扩张喉腹褶，一次吞入大量含磷虾海水，再闭口并以鲸须排水留取猎物。这种“冲刺吞滤”单次成本很高，净收益强烈依赖猎物团密度；蓝鲸会调整潜水深度、冲刺次数和攻击行为以利用高密度斑块。[Goldbogen et al. 2011](https://doi.org/10.1242/jeb.048157)

Savoca 等对 7 种须鲸共 321 次标记部署建立模型；对测得中位体长 22.4 米的成年东部北太平洋蓝鲸，估计其**觅食日**摄食约 **16 吨，范围 10—22 吨/日**。这是特定种群、体型和模型下的觅食日估计，不应简化为“每头蓝鲸全年每天吃 16 吨”，也不能用“几吨”掩盖研究已给出的条件边界。[Savoca et al. 2021](https://doi.org/10.1038/s41586-021-03991-5)

### 潜水深度与行为边界

加利福尼亚觅食蓝鲸记录中的单次最大潜深范围为 52—315 米，样本平均最大潜深约 **201 ± 52 米**，潜水时长范围 3.1—15.2 分钟、平均约 9.8 ± 1.8 分钟。这些数字描述特定觅食记录，不是全物种生理极限。[Goldbogen et al. 2011](https://doi.org/10.1242/jeb.048157)

东印度洋一头侏儒蓝鲸的 7.6 天标记记录到 **506 米**的最深潜水；其觅食潜水平均最大深度约 129 米，而迁徙阶段约 94% 的观测时间、99% 的迁徙潜水位于 24 米以内。`maxDiveDepthM: 506` 若保留，必须标明“单头侏儒蓝鲸短期标记纪录”，不能称为公认全球最大潜深或典型潜水深度。[Owen et al. 2016](https://doi.org/10.1186/s40317-016-0109-4)

这组结果也说明迁徙并不等于持续深潜：蓝鲸常在表层附近进行长距离移动，而到高密度猎物处才反复深潜和冲刺吞滤。展示层宜把“典型觅食深度”和“单次记录极值”分开。[Owen et al. 2016](https://doi.org/10.1186/s40317-016-0109-4) [Goldbogen et al. 2011](https://doi.org/10.1242/jeb.048157)

### 歌声、叫声与探测距离

蓝鲸发出低频、强烈且结构稳定的声音。全球研究曾识别九种区域性歌声类型，其中五种在超过 30 年的资料中保持基本特征；这些声音可辅助提出种群边界假说，但作者明确要求与形态、遗传、分布和个体移动证据共同判断。此数字反映当时可识别的声型，不能写成今天全球永远“恰好九种”，更不能把一种声型直接等同于一个亚种。[McDonald, Mesnick & Hildebrand 2006](https://escholarship.org/uc/item/5r16c2mz)

东部北太平洋研究中，AB 型规则序列只在样本中的雄鲸记录到，常由单独移动个体发出；D 型叫声则由雌雄均会发出，常见于觅食和小群互动。安全表述是“部分区域歌声可能主要由雄鲸发出，而其他叫声雌雄都会产生”，不能推广为“只有雄性蓝鲸会发声”。[Oleson et al. 2007](https://doi.org/10.3354/meps330269)

美国海军水听器阵列曾在相似传播条件下把蓝鲸叫声与距离 **400—600 千米**的接收器匹配。这个数字是仪器探测与声传播记录，不是鲸彼此有效交流的实测距离，也没有证明“可在数千千米外对话”。图片说明应写“低频声可被远距离水听器探测”，避免把探测距离、听觉范围和通信距离混为一谈。[Stafford et al. 1998](https://doi.org/10.1121/1.423944)

### 繁殖、幼鲸与生活史

蓝鲸繁殖生物学仍有大量空白。NOAA 汇总的最佳概括是：妊娠约 **10—12 个月**，通常每胎一仔；幼鲸在出生后约 **6—7 个月**断奶，多数交配与出生发生在冬季，常见产仔间隔约 **2—3 年**。性成熟年龄被认为约 5—15 年，但区域资料差异和观测稀少使该范围不适合写成精确门槛。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

对美国西岸和加利福尼亚湾照片识别史的研究，在资料较完整的 7 头雌鲸、22 个可观察间隔中得到平均产仔间隔 **2.57 ± 0.3 年**；作者认为遗漏幼鲸会使这个间隔偏短。只有两头已知出生的雌鲸后来带仔返回，说明其首次产仔在出生后超过 10 年；如此小的重观察样本不能建立全物种精确初产年龄。[Sears et al. 2013](https://doi.org/10.3354/esr00532)

加利福尼亚湾是东部北太平洋部分蓝鲸的重要冬季育幼区，但并非该种群所有雌鲸都会使用，其他冬季育幼区仍不清楚。图片若出现“母子鲸”，可以说明“一胎通常一仔、幼鲸约半年后断奶”，不宜指定画面必然位于某一海湾或称所有蓝鲸都返回出生地。[Sears et al. 2013](https://doi.org/10.3354/esr00532) [NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1)

### 当前威胁与证据强度

商业捕鲸造成的历史耗竭是蓝鲸今天仍处 EN 的根本背景；在当前有监测的许多海区，直接、持续的主要人为死亡风险是**船舶碰撞**和**渔具缠绕**。海洋噪声、栖息地退化、污染、船只干扰，以及气候变化对磷虾和海洋生产力的影响也构成风险，但全球种群尺度效应的量化程度较低，文案应使用“潜在或较少理解的压力”，不要假装已有统一归因比例。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

美国西岸模型将蓝鲸卫星分布、船流量和碰撞致死概率叠加，估计 7—12 月六个月研究期内平均约 **18 头蓝鲸**可能死于船撞，高于当时潜在生物移除量 2.3；约 74% 的模型死亡集中在研究区 10% 的面积。它是模型化长期平均风险，不是观察到每年恰好 18 具尸体，也不能外推到全球。同期可核实的搁浅记录远少于模型量，恰好说明海上尸体发现率低。[Rockwood, Calambokidis & Jahncke 2017](https://doi.org/10.1371/journal.pone.0183052)

受控声源实验表明，南加州蓝鲸对模拟中频军用声呐的响应依情境而变：部分深潜觅食个体停止觅食、提高游速或远离声源，而其他行为状态反应较弱。这支持把噪声列为干扰风险，却不能证明单次暴露已造成全球种群下降。[Goldbogen et al. 2013](https://doi.org/10.1098/rspb.2013.0657)

气候变化可能通过海温、海冰、上升流和磷虾分布改变觅食机会，各亚种和海区的暴露并不一致。现阶段更稳妥的结构化威胁名是“气候与猎物变化”，并注明机制仍在量化；不要把一幅海冰或磷虾图配成“蓝鲸已因气候变化减少某一百分比”。[NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

### 保护、国际法律与管理行动

国际捕鲸委员会在 1966 年保护蓝鲸免受商业捕获，1982 年决定的更广泛商业捕鲸暂停于 1985/86 季生效并延续至今。条约保留、反对程序和非成员国意味着“暂停”不等同于全球所有国内法下绝无例外，但蓝鲸不应被描述为当前合法商业捕鲸对象。[Rocha, Clapham & Ivashchenko 2014](https://doi.org/10.7755/MFR.76.4.3) [International Whaling Commission — Commercial whaling](https://iwc.int/management-and-conservation/whaling/commercial)

蓝鲸列入 **CITES 附录 I**，国际商业贸易受到最严格的公约控制；列入 **CMS 附录 I** 的迁徙物种范围国应努力严格保护，保护或恢复重要生境，并减轻迁徙障碍及其他危害因素。这两个附录地位与 IUCN EN 风险等级属于不同制度，不应合并成一个“保护等级”。[CITES Appendices, effective 7 February 2025](https://cites.org/sites/default/files/esp/app/2025/S-Appendices-2025-02-07.pdf) [CMS Appendices, effective 27 June 2026](https://www.cms.int/species/appendix-i-ii-cms)

有效保护应以区域管理单元为尺度：持续用照片识别、遗传、被动声学和卫星标记更新丰度与连通性；在船撞热点调整航线、实施季节性或动态减速与预警；减少固定渔具风险并维持快速解缠响应；把噪声纳入项目环评和船舶运营；监测磷虾、锋面、上升流和海冰相关栖息地；在觅食区、迁徙通道和冬季育幼区之间开展跨境协作。[NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf) [Rockwood, Calambokidis & Jahncke 2017](https://doi.org/10.1371/journal.pone.0183052)

## 高风险数字与表述边界

| 主题 | 可用数字或表述 | 必须同时说明 | 不应写成 |
| --- | --- | --- | --- |
| 全球状态 | EN A1abd；increasing；2018 | 当前趋势与历史衰退可以并存 | “已经脱离濒危” |
| 全球数量 | 10,000—25,000 总个体；5,000—15,000 成熟个体 | 跨区域估计，不是同步普查 | “现存精确 15,000 头” |
| 恢复程度 | 成熟个体约为 1926 年的 3%—11% | 以至少约 140,000 成熟个体的历史重建为基线 | “恢复了 11%”或“只剩 3%”而无区间 |
| 历史捕获 | 1900—1999 年 379,185 头 | 记录与重建的 20 世纪捕获量 | “人类总共杀死 379,185 头” |
| 亚种 | 2026 年接受 4 个亚种 | 智利群是独特管理/种群单元，尚非有效命名亚种 | “有 5 个亚种”或“智利蓝鲸亚种” |
| 体长 | 历史官方最大约 32.6 m；科学验证记录 29.9 m | 记录标准不同，亚种差异显著 | “所有成年蓝鲸 24—30 m” |
| 体重 | 可超过 150 t | 极大型记录，不是典型成体范围 | “成体固定 100—150 t” |
| 寿命 | 估计约 80—90 年 | 年龄估计量级 | “寿命必为 80—90 年” |
| 摄食 | 东部北太平洋 22.4 m 成年鲸觅食日 16 t，范围 10—22 t | 特定种群、体型和模型；仅觅食日 | “每头全年每天吃 16 吨” |
| 潜水 | 506 m | 一头侏儒蓝鲸、7.6 天标记中的最深纪录 | “蓝鲸通常潜 500 m” |
| 歌声距离 | 水听器在 400—600 km 匹配到叫声 | 仪器探测距离，不是通信距离 | “可在数千千米外交流” |
| 迁徙 | 多数种群季节移动，但存在部分迁徙与居留 | 路径依种群和个体而异 | “每年固定往返两极和赤道” |
| 产仔 | 妊娠约 10—12 个月；一胎通常一仔；约 6—7 个月断奶 | 生活史资料有限、区域差异大 | 精确到某个月的全球固定繁殖表 |
| 船撞 | 美国西岸模型约 18 头/六个月 | 模型化风险、特定区域，不是观察死亡或全球值 | “美国每年发现 18 头尸体” |

## 图片说明的安全写法

1. **体型对比图**：蓝鲸是已知体型最大的动物；历史官方综述记录体长可达约 32.6 米、体重可超过 150 吨，但经科学验证的最长记录为 29.9 米，不同亚种体型差异明显。[NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf) [COSEWIC 2002](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/blue-whale-2002.html)
2. **磷虾吞滤图**：蓝鲸以磷虾为主食，通过扩张喉腹褶吞入含猎物的海水，再用鲸须滤出猎物；收益取决于磷虾团密度。[Goldbogen et al. 2011](https://doi.org/10.1242/jeb.048157)
3. **摄食量图**：模型估计，一头约 22.4 米的成年东部北太平洋蓝鲸在觅食日约摄食 16 吨、范围 10—22 吨；这不是所有蓝鲸全年的每日定额。[Savoca et al. 2021](https://doi.org/10.1038/s41586-021-03991-5)
4. **迁徙图**：许多蓝鲸在高生产力觅食区和低纬冬季水域之间季节移动，但路线因种群与个体而异，也有部分迁徙和居留个体。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [Abrahms et al. 2019](https://doi.org/10.1073/pnas.1819031116)
5. **歌声图**：蓝鲸的低频声可被数百千米外的水听器探测；区域歌声类型有助于研究种群结构，但探测距离不等于鲸之间已证实的通信距离。[Stafford et al. 1998](https://doi.org/10.1121/1.423944) [McDonald et al. 2006](https://escholarship.org/uc/item/5r16c2mz)
6. **母子鲸图**：蓝鲸通常一胎一仔，妊娠约 10—12 个月，幼鲸约 6—7 个月断奶；确切繁殖地和生活史参数仍存在明显区域差异。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [Sears et al. 2013](https://doi.org/10.3354/esr00532)
7. **深潜图**：一头侏儒蓝鲸的短期标记研究记录到 506 米潜水，但其觅食潜水平均最大深度约 129 米，迁徙时大多停留在 24 米以内。[Owen et al. 2016](https://doi.org/10.1186/s40317-016-0109-4)
8. **保护威胁图**：商业捕鲸造成历史耗竭；今天船舶碰撞和渔具缠绕仍是主要直接人为威胁，噪声及气候驱动的猎物变化是需要进一步量化的压力。[NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) [NOAA 2020 Blue Whale Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)

## 现有字段审计与落地建议

- 保持 `conservation('EN', 'increasing', 2018, 'A1abd')`；添加“趋势上升不代表恢复”的详情说明。
- 从 `aliases` 暂删“剃刀鲸”，除非补到正式中文命名来源。
- 亚种叙事更新为 2026 分类委员会承认的四个亚种；把智利群写成独特种群或管理单元，不写成正式亚种。
- `taxonomy` 若受五级 helper 限制可暂保留 `Cetacea` 作为项目简化的“目”，但详情应说明科学口径为 Artiodactyla 下的 Cetacea。
- `distribution` 使用全球海洋和区域生态描述，避免罗列沿岸国家；北冰洋不应纳入常规范围。
- 把笼统“成体 24—30 米、100—150 吨”替换为亚种差异和记录值。若统计卡不能携带注释，不建议填一个伪装成典型范围的 `adultMassKg`。
- 寿命可更新为估计约 80—90 年，但不要将其解释为严格观察到的最小—最大值。
- 把“每天数吨磷虾”升级为有条件的“东部北太平洋 22.4 米成年鲸在觅食日模型估计 16 吨，范围 10—22 吨”。
- `maxDiveDepthM: 506` 只有在相邻位置显示“单头侏儒蓝鲸短期标记纪录”时才安全；否则应省略极值，用典型觅食深度叙事。
- 把“歌声传播数百至数千千米”改为“在相似条件下可被 400—600 千米外水听器探测”，并明确探测不等于交流。
- 繁殖字段使用妊娠 10—12 个月、一胎一仔、断奶约 6—7 个月、常见产仔间隔 2—3 年；不把小样本精确值外推全球。
- 威胁按历史耗竭、船撞、缠绕、噪声、气候与猎物变化、污染和船只干扰分层；船撞“18 头”必须标为美国西岸六个月风险模型。
- 法律状态分别展示 IUCN EN、CITES 附录 I、CMS 附录 I和 IWC 捕鲸保护，不合并成一个模糊保护等级。

## 可直接用于 `species.ts` 的来源数组与核心字段建议

以下代码沿用仓库来源字段风格。数字字段是否落地取决于界面能否同时显示注释；不能显示限定语的极值宁可留在叙事和 `featuredStats` 中。

```ts
const BLUE_WHALE_SOURCE_DATE = '2026-08-18' as const;

const BLUE_WHALE_SOURCES = [
  {
    title: 'Society for Marine Mammalogy — List of Marine Mammal Species and Subspecies (April 2026)',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Balaenoptera musculus (2018 assessment, 2019 errata)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T2477A156923585.en',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List Categories and Criteria v3.1, 2nd edition',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Recovery Plan for the Blue Whale (2020)',
    url: 'https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Blue Whale',
    url: 'https://www.fisheries.noaa.gov/species/blue-whale?page=1',
    kind: 'general',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Attard et al. 2024 — Global genomic population structure of blue whales',
    url: 'https://doi.org/10.1111/acv.12935',
    kind: 'taxonomy',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Branch et al. 2007 — Intraspecific structure and body length of blue whales',
    url: 'https://doi.org/10.1111/j.1748-7692.2007.00137.x',
    kind: 'taxonomy',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Branch et al. 2007 — Past and present distribution, densities and movements of blue whales',
    url: 'https://doi.org/10.1111/j.1365-2907.2007.00106.x',
    kind: 'distribution',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'COSEWIC 2002 — Assessment and Status Report on the Blue Whale',
    url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/blue-whale-2002.html',
    kind: 'general',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Abrahms et al. 2019 — Memory and resource tracking drive blue whale migrations',
    url: 'https://doi.org/10.1073/pnas.1819031116',
    kind: 'distribution',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Savoca et al. 2021 — Baleen whale prey consumption',
    url: 'https://doi.org/10.1038/s41586-021-03991-5',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Goldbogen et al. 2011 — Mechanics and energetics of blue whale lunge feeding',
    url: 'https://doi.org/10.1242/jeb.048157',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Goldbogen et al. 2013 — Blue whale behavioural response to simulated mid-frequency sonar',
    url: 'https://doi.org/10.1098/rspb.2013.0657',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Owen et al. 2016 — Dive and movement behaviour of an Indian Ocean pygmy blue whale',
    url: 'https://doi.org/10.1186/s40317-016-0109-4',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'McDonald et al. 2006 — Biogeographic characterisation of blue whale song worldwide',
    url: 'https://escholarship.org/uc/item/5r16c2mz',
    kind: 'distribution',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Oleson et al. 2007 — Behavioural context of call production by eastern North Pacific blue whales',
    url: 'https://doi.org/10.3354/meps330269',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Stafford et al. 1998 — Blue whale calls recorded on a regional hydrophone array',
    url: 'https://doi.org/10.1121/1.423944',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Sears et al. 2013 — Photographic identification reveals blue whale life-history data',
    url: 'https://doi.org/10.3354/esr00532',
    kind: 'ecology',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Rockwood et al. 2017 — High mortality of blue whales from ship strikes off the U.S. West Coast',
    url: 'https://doi.org/10.1371/journal.pone.0183052',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Rocha et al. 2014 — Summary of industrial whaling catches in the 20th century',
    url: 'https://doi.org/10.7755/MFR.76.4.3',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Olson et al. 2025 — Antarctic blue whale abundance from photo identification',
    url: 'https://doi.org/10.1111/mms.13215',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III',
    url: 'https://cites.org/sites/default/files/esp/app/2025/S-Appendices-2025-02-07.pdf',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Appendices I and II (effective June 2026)',
    url: 'https://www.cms.int/species/appendix-i-ii-cms',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
  {
    title: 'International Whaling Commission — Commercial whaling',
    url: 'https://iwc.int/management-and-conservation/whaling/commercial',
    kind: 'conservation',
    accessedAt: BLUE_WHALE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

// Replace the existing blue-whale record's researched fields with values along these lines:
{
  id: 'species-balaenoptera-musculus',
  slug: 'blue-whale',
  names: { zh: '蓝鲸', en: 'Blue Whale', aliases: [] },
  scientificName: 'Balaenoptera musculus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Cetacea', '鲸目'), // repository UI simplification; current scientific hierarchy places Cetacea within Artiodactyla
    taxon('Balaenopteridae', '须鲸科'),
    taxon('Balaenoptera', '须鲸属'),
  ),
  conservation: conservation('EN', 'increasing', 2018, 'A1abd'),
  distribution: {
    continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲', '南极洲'],
    countries: [],
    realms: ['marine'],
    range: '分布于除北冰洋外的世界各大洋；不同亚种和管理单元利用高生产力觅食区、跨洋迁徙通道及中低纬冬季水域，部分个体不作完整季节迁徙。',
  },
  metrics: {
    estimatedMatureIndividuals: [5000, 15000],
    lifespanYears: [80, 90], // estimated lifespan scale, not an observed min–max range
    // maxDiveDepthM: 506, // add only if the UI shows that this is a single pygmy-blue-whale tag record
    // Omit a universal adultMassKg range; available values differ strongly by subspecies, sex and condition.
  },
  featuredStats: [
    { label: '全球成熟个体估计', value: '5,000—15,000', note: 'IUCN 2018 跨区域估计，并非同步普查' },
    { label: '觅食日摄食估计', value: '16 吨', note: '东部北太平洋约 22.4 米成鲸模型；范围 10—22 吨' },
    { label: '20 世纪捕获重建', value: '379,185 头', note: '1900—1999 年有记录与重建的工业捕鲸量' },
    { label: '科学验证最长记录', value: '29.9 米', note: '历史官方综述的最大报告值约 32.6 米' },
  ],
  sources: [...BLUE_WHALE_SOURCES],
}
```

## 来源清单

| 来源 | 用途 | 使用边界 |
| --- | --- | --- |
| [Society for Marine Mammalogy Committee on Taxonomy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) | 接受名、四亚种、争议命名 | 2026 年分类口径优先于旧恢复计划 |
| [IUCN 2018 assessment / 2019 errata](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T2477A156923585.en) | EN A1abd、increasing、全球数量 | 估计年份不是当前同步普查 |
| [IUCN Criteria v3.1](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf) | 解释 A1abd | 标准定义，不提供蓝鲸新数量 |
| [NOAA 2020 Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf) | 分布、生活史、管理单元、威胁与行动 | 其中“五亚种”已被 2026 分类清单取代 |
| [NOAA Fisheries — Blue Whale](https://www.fisheries.noaa.gov/species/blue-whale?page=1) | 当前官方概览、寿命、繁殖、区域分布 | 页面分类段仍可能沿用旧五亚种口径 |
| [Attard et al. 2024](https://doi.org/10.1111/acv.12935) | 全球基因组种群结构 | 不自行建立新正式亚种 |
| [Branch et al. 2007 — body length](https://doi.org/10.1111/j.1748-7692.2007.00137.x) | 亚种/种群成熟雌鲸体长 | 均值不是全物种最小—最大值 |
| [Branch et al. 2007 — distribution](https://doi.org/10.1111/j.1365-2907.2007.00106.x) | 全球分布与部分迁徙 | 历史综述需与近年区域资料结合 |
| [Abrahms et al. 2019](https://doi.org/10.1073/pnas.1819031116) | 迁徙与多年平均资源峰值 | 仅东部北太平洋 60 头样本 |
| [Savoca et al. 2021](https://doi.org/10.1038/s41586-021-03991-5) | 觅食日摄食量 | 模型、地区与体型限定不可删除 |
| [Goldbogen et al. 2011](https://doi.org/10.1242/jeb.048157) | 冲刺吞滤、觅食潜水与能量 | 加利福尼亚觅食样本，不是全球极限 |
| [Owen et al. 2016](https://doi.org/10.1186/s40317-016-0109-4) | 506 米纪录、迁徙浅潜 | 单头侏儒蓝鲸、7.6 天标记 |
| [McDonald et al. 2006](https://escholarship.org/uc/item/5r16c2mz) | 全球区域歌声类型 | 声型是种群假说线索，不是亚种证明 |
| [Oleson et al. 2007](https://doi.org/10.3354/meps330269) | AB/D 叫声的性别与行为语境 | 东部北太平洋样本，不普遍化 |
| [Stafford et al. 1998](https://doi.org/10.1121/1.423944) | 400—600 千米水听器探测 | 探测距离不等于通信距离 |
| [Sears et al. 2013](https://doi.org/10.3354/esr00532) | 产仔间隔、初产与育幼区 | 照片重识别小样本，存在漏检 |
| [Rockwood et al. 2017](https://doi.org/10.1371/journal.pone.0183052) | 美国西岸船撞空间风险 | 模型结果，不是观察死亡或全球值 |
| [Goldbogen et al. 2013](https://doi.org/10.1098/rspb.2013.0657) | 对模拟声呐的行为响应 | 南加州受控实验，不证明全球种群效应 |
| [Rocha et al. 2014](https://doi.org/10.7755/MFR.76.4.3) | 20 世纪工业捕鲸量和保护史 | 不是全部历史时期总死亡数 |
| [Olson et al. 2025](https://doi.org/10.1111/mms.13215) | 南极蓝鲸照片识别丰度 | 研究期超种群与末年丰度不可混用 |
| [COSEWIC 2002](https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/blue-whale-2002.html) | 历史与验证体长记录 | 只采用体长记录，不采用其中旧种群数字 |
| [CITES Appendices](https://cites.org/sites/default/files/esp/app/2025/S-Appendices-2025-02-07.pdf) | 附录 I | 国际贸易制度，不是灭绝风险评估 |
| [CMS Appendices](https://www.cms.int/species/appendix-i-ii-cms) | 附录 I 与迁徙保护义务 | 公约义务，不替代区域实施状态 |
| [IWC — Commercial whaling](https://iwc.int/management-and-conservation/whaling/commercial) | 商业捕鲸暂停现状 | 注意条约反对、保留与非成员边界 |

## 最终推荐口径

蓝鲸档案应围绕四条主线展开：它拥有**跨亚种、跨管理单元而不均一的全球分布**；它通过高成本冲刺吞滤利用短暂而高密度的磷虾斑块；它的迁徙和歌声能揭示种群结构，却不能直接定义亚种；它在停止大规模商业捕鲸后总体增加，但全球成熟个体仍约只有 1926 年重建水平的 3%—11%，船撞、缠绕和多种环境压力使恢复远未完成。[IUCN 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T2477A156923585.en) [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [NOAA 2020 Recovery Plan](https://repository.library.noaa.gov/view/noaa/27399/noaa_27399_DS1.pdf)
