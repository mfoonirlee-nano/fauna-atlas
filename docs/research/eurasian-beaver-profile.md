# 欧亚河狸完整物种档案研究

- 分类单元：`Castor fiber` Linnaeus, 1758
- 主中文名：欧亚河狸
- 英文名：Eurasian Beaver
- 研究日期：2026-08-23
- 用途：为 `src/data/species.ts` 的完整物种档案提供可追溯底稿
- 证据口径：分类与分布优先采用 Mammal Diversity Database，全球受胁状态采用当前 IUCN 记录，生态与生活史优先采用同行评审的原始研究，管理信息采用政府或保护主管机构资料

## 编辑结论

欧亚河狸是河狸科河狸属的现生物种，主要分布于欧洲至亚洲北部的古北界淡水与河岸带。Mammal Diversity Database 接受名为 `Castor fiber`，英文主名为 Eurasian Beaver，并列 European Beaver 为其他常用名。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001958/)

当前 IUCN 记录为无危 `LC`，全球趋势为增加。IUCN 的 2021 条目明确写作“2016 年评估的修订版本”，因此仓库的 `assessedYear` 应填 `2016`，而不是把 2021 这个修订发布年当成评估年。无危条目不应伪造准则字符串，`criteria` 留空。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T4007A197499749.en)

全球回升不能掩盖区域差异。欧洲许多种群因法律保护、重引入和自然扩散而恢复，亚洲东缘仍有隔离的小型遗存种群。中国境内的蒙新河狸分布集中于新疆乌伦古河流域上游及相邻水系；2003、2006、2007 年调查分别记录 135、167、145 个河狸家族或集群，并以食物堆面积推算 472 至 599、543 至 700、508 至 645 只。该数字是特定年份、特定方法的区域估计，不能作为今日中国数量，更不能当成全球数量。[Chu and Jiang 2009](https://doi.org/10.1017/S0030605308002056)

工程效应必须写成条件句。欧亚河狸在适合筑坝的小型水道可抬高水位、形成池塘和湿地镶嵌，并改变洪峰、泥沙、营养盐和生物群落。但并非每个领地都有坝或巢，较深或较大的河流、湖泊中常使用岸洞；各项水文和生物多样性结果还会随河阶、季节、土地利用、坝龄和被测类群变化。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting) [Puttock et al. 2021](https://doi.org/10.1002/hyp.14017) [Orazi et al. 2022](https://doi.org/10.3389/fevo.2022.873307)

不录入全球寿命和全球成熟个体数。同行评审汇总曾把各国不同年份和不同口径的估计相加，得到 2020 年最低约 147.99 万只，但作者明确提醒该总数只是一般参考，不能等同于同步普查或成熟个体估计。[Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)

## 名称与分类口径

### 接受名

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| scientificName | `Castor fiber` | MDD 接受名；命名人为 Linnaeus, 1758 |
| `names.zh` | 欧亚河狸 | 与仓库 TODO 一致，能与北美河狸明确区分 |
| `names.en` | Eurasian Beaver | MDD 英文主名 |
| aliases | 河狸；European Beaver | 中国国家重点保护名录使用“河狸”；MDD 列 European Beaver 为其他英文名 |

MDD 当前把 `Castor fiber birulai` 作为与该分类单元关联的异名记录，而不是独立物种。档案可在中国区域故事中使用“蒙新河狸”这一保护与地理名称，但不要把它升格为独立分类单元，也不要在没有额外分类评审时把亚种地位写成无争议事实。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001958/)

### 分类图谱

| 分类阶元 | 学名 | 中文名 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Mammalia | 哺乳纲 |
| 目 | Rodentia | 啮齿目 |
| 科 | Castoridae | 河狸科 |
| 属 | Castor | 河狸属 |
| 种 | Castor fiber | 欧亚河狸 |

MDD 还列出亚目 Supramyomorpha、下目 Castorimorphi、总科 Castoroidea 和亚科 Castorinae。仓库 schema 只到属级，上表已经覆盖可落库的全部分类阶元。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001958/)

## 保护状态

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| system | IUCN Red List | 仓库固定值 |
| code | `LC` | 当前全球等级为无危 |
| trend | `increasing` | 当前全球趋势为增加 |
| assessedYear | `2016` | 2021 条目是 2016 评估的修订版 |
| criteria | 不填 | 无危记录不需要伪造受胁准则 |
| assessor | IUCN | 由现有 helper 统一生成 |

完整引用为 Batbold et al. 2021, *Castor fiber* (amended version of 2016 assessment), The IUCN Red List of Threatened Species 2021, e.T4007A197499749。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T4007A197499749.en)

中国《国家重点保护野生动物名录》把“河狸 `Castor fiber`”列为国家一级保护野生动物。这是中国法律保护等级，不应替换 IUCN 的全球等级，适合写入中国保护故事、关键事实和行动字段。[国家林业和草原局公告](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

## 分布

### 大洲、区域与生态域

- 大洲：欧洲、亚洲。
- 生物地理范围：古北界，以北欧、中欧、西欧、东欧和俄罗斯的大量恢复种群为主体，向东延伸至西伯利亚、哈萨克斯坦、蒙古和中国新疆的遗存分布。
- 生态域：淡水、陆地。水体承担逃避、移动、巢穴入口保护和部分取食功能，河岸陆地承担大部分木本及草本取食，因此两个 realm 都应保留。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001958/) [NatureScot species account](https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/eurasian-beaver)

### 可复核国家数组

MDD v2.5 的结构化国家字段列出 34 国，建议产品数组逐项采用该字段：

1. 奥地利
2. 白俄罗斯
3. 比利时
4. 波斯尼亚和黑塞哥维那
5. 保加利亚
6. 中国
7. 克罗地亚
8. 捷克
9. 丹麦
10. 爱沙尼亚
11. 芬兰
12. 法国
13. 德国
14. 匈牙利
15. 意大利
16. 哈萨克斯坦
17. 拉脱维亚
18. 列支敦士登
19. 立陶宛
20. 卢森堡
21. 蒙古
22. 黑山
23. 荷兰
24. 挪威
25. 波兰
26. 罗马尼亚
27. 俄罗斯
28. 塞尔维亚
29. 斯洛伐克
30. 斯洛文尼亚
31. 西班牙
32. 瑞典
33. 瑞士
34. 乌克兰

该列表来自 MDD 页面中的结构化 `Country distribution`，便于以后重跑核验。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001958/)

### 国家列表的已知边界

同一 MDD 页面的概述文字还提到摩尔多瓦，但结构化国家字段没有收录。英国政府与 NatureScot 已确认英国重新建立的欧亚河狸种群，MDD 结构化字段也尚未收录英国。为避免把多个时间点和不同规则的名录混在一起，建议 `countries` 固定使用上述 34 国，并在 `range` 文字中说明摩尔多瓦与英国的口径差异。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001958/) [NatureScot species account](https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/eurasian-beaver) [UK Forestry Commission guidance](https://www.gov.uk/guidance/protecting-trees-from-mammal-damage-technical-guidance/eurasian-beaver)

`center` 只能作为地图视图焦点。建议 `{ lat: 53, lng: 55 }`，用于把欧洲和亚洲北部同时纳入视野，不代表几何中心、密度中心或典型栖息地。

### 历史收缩与恢复

20 世纪初，欧亚范围内只剩约 1,200 只，分散在少数遗存区。随后保护、重引入和自然扩散促成欧洲大范围恢复。Halley 等人的 2020 汇总最低估计为 1,479,863 只，但这是各国不同时点、不同调查方法的相加结果，作者称其只能作为大致指南。档案可写“从约 1,200 只遗存个体恢复到百万量级的汇总估计”，但不应把 1,479,863 录入 `estimatedMatureIndividuals`，也不应写成 2026 年全球普查。[Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)

中国证据更窄。Chu 与 Jiang 的调查覆盖中国境内乌伦古河流域，并指出种群小且地理受限。论文还记录 1989 至 2007 年保护区内家庭户数增加 112%，人口增加 71%，伴随薪柴采集压力；1992 年向额尔齐斯河的迁移地点在后续调查中没有发现存活河狸迹象。[Chu and Jiang 2009](https://doi.org/10.1017/S0030605308002056)

## 形态与稳定测量值

欧亚河狸是大型半水栖啮齿动物。可靠外形组合包括粗壮躯体、致密棕色双层被毛、钝圆头、小耳小眼、橙色门齿、后足明显有蹼，以及横向宽扁且覆鳞的尾。前足较小、趾间分离，适合抓握枝条；后足较大，主要承担游泳推进。政府技术综述给出的成年头体长通常为 70 至 100 厘米，尾长另加 25 至 40 厘米，成年体重通常为 15 至 35 千克。[NatureScot Review 86, pages 5 to 6](https://www.nature.scot/sites/default/files/2025-06/naturescot-review-86.pdf)

| 字段 | 值 | 能否进入 `metrics` | 边界 |
| --- | --- | --- | --- |
| 成年头体长 | 70 至 100 cm | 是，`adultLengthCm: [70, 100]` | 不含尾长 |
| 成年体重 | 15 至 35 kg | 是，`adultMassKg: [15, 35]` | 常见成年范围，不是绝对极值 |
| 尾长 | 25 至 40 cm | 否，schema 无专门尾长字段 | 置于 length note 和 featured stat |
| 寿命 | 不录入 | 否 | 缺少足够稳健的全球野外范围；圈养个体记录不能代替物种典型寿命 |
| 最大潜水深度 | 不录入 | 否 | 挪威样本的最深记录不是物种生理极限 |
| 全球成熟个体数 | 不录入 | 否 | 现有全球汇总不是成熟个体同步估计 |

欧亚河狸与北美河狸 `Castor canadensis` 在普通照片中非常相似。毛色、头形或尾部宽度不能作为可靠的单图鉴别标准，画面标注只能依赖创作意图与素材来源。不要在图说中声称凭一处可见特征排除了北美河狸。[Brazier et al. 2021](https://doi.org/10.1002/wat2.1494)

## 栖息地

1. **缓流河流与溪流**：岸坡可掘洞，水位相对稳定，附近有草本、水生植物和可利用的落叶木本植物。这是建议标为 `isPrimary` 的生境。[NatureScot species account](https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/eurasian-beaver)
2. **湖泊、池塘、湿地与运河**：在已有较深水体中可使用岸洞或巢，不一定筑坝。每个领地可能有部分结构、多个同类结构，也可能完全没有坝或巢。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)
3. **河岸阔叶林与灌丛**：柳、杨、桦等木本和丰富草本提供食物、隐蔽及建筑材料。植物种类偏好受地点与可用性影响，不能把单一树种写成全球必需条件。[Haarberg and Rosell 2006](https://doi.org/10.1111/j.1469-7998.2006.00142.x)
4. **人类改造水道**：农业沟渠、城镇河段和其他人类主导景观也可被利用，只要有连续水体、可食植被及安全的岸洞或隐蔽处。可利用不等于没有冲突。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)

“活动多贴近岸边”是合理描述，但不要把某一地区的岸边距离阈值写成全球硬规则。水体形态、资源分布和干扰都会改变使用范围。

## 食性与取食

欧亚河狸是广食性植食动物。食谱包括水生与岸边草本植物、叶和嫩枝、落叶树皮与形成层、根和根茎，以及局部环境中的农作物。它们砍倒树木也用于搬运和建筑，不能简化成“吃木头”。[NatureScot species account](https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/eurasian-beaver) [Haarberg and Rosell 2006](https://doi.org/10.1111/j.1469-7998.2006.00142.x)

挪威 Telemark 七个领地的原始研究显示，河狸使用树皮、嫩枝、叶、水生植物和陆生草本。在该地点，柳、花楸和桦受到偏好，但实际食谱中桤木占比较高；取食强度随离水距离增加而下降。这证明“偏好”和“实际吃到最多”不是同一个概念，也不支持把这些树种排序推广到整个物种。[Haarberg and Rosell 2006](https://doi.org/10.1111/j.1469-7998.2006.00142.x)

捷克农业溪流研究发现明显的季节变化：样区冬季食谱按体积约 70% 为木本，夏季草本在出现频率上约 90%，并包含作物。百分比属于该农业景观和采样设计，只能支撑“随季节和可用性切换”，不宜写成欧亚河狸的固定比例。[Mikulka et al. 2022](https://doi.org/10.11118/actaun.2022.007)

秋季常把枝条储存在巢或岸洞入口附近的水下，供寒冷季节使用；春夏更多利用草本和水生植物。并非每个领地都形成食物堆，气候和可用植被会改变行为。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)

## 活动与社会行为

- 主要在黄昏至夜间活动。东南挪威 47 只 GPS 追踪个体在研究样本中的平均日活动约 9 小时 42 分，年龄、天气、月相和温度会影响活动，因此该数值不能写成物种固定作息。[Bartra Cabré et al. 2020](https://doi.org/10.1007/s42991-020-00029-7)
- 领地性强，以气味标记边界。常见社会单元为繁殖成体与当年幼仔、前一年幼体或未扩散亚成体组成的家族群；领地大小与群体规模受定居史、繁殖和资源影响，不应给出单一全球领地面积。[Campbell et al. 2005](https://doi.org/10.1007/s00265-005-0942-6)
- 社会配对与共同育幼可以写入档案，但“终生严格遗传单配”证据不足。15 个集群、38 只基因分型个体的研究没有检出明确的配偶外亲子关系，作者同时指出样本有限，需要更多种群验证。[Syrůčková et al. 2015](https://doi.org/10.1007/s13364-015-0219-z)
- 巢、岸洞、坝、运河和食物堆是条件性结构。每个领地可能只有岸洞，较大或较深水体尤其不必筑坝。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)
- 东南挪威 12 只自由活动个体的深度记录显示，潜水多浅于 1 米、短于 30 秒，潜水仅占该样本活动时间 2.8%。研究区没有坝，季节和水深也限制了行为，所以不能把这些观测当成物种最大能力或填入 `maxDiveDepthM`。[Graf et al. 2018](https://doi.org/10.1002/ece3.3726)

## 繁殖与生活史

NatureScot 的管理生态资料给出每年一胎、通常 2 至 4 仔，出生集中于 4 月至 6 月中旬；亚成体约 2 岁达到性成熟并通常离开出生领地，但实际扩散和初次繁殖会受个体与环境影响。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)

东南挪威 59 只雌性样本中有 32 只怀孕，存活胎儿平均 2.3，范围 1 至 4。研究还发现两岁后才初产很常见，成熟雌性也会出现间歇不繁殖，体况和年龄与繁殖投入有关。这一结果支持“慢于简单年表、受体况约束”的叙事，不支持所有雌性在两岁准时繁殖。[Parker, Zedrosser and Rosell 2017](https://doi.org/10.1111/jzo.12458)

妊娠期可写约 105 天，并注明它是文献采用的物种值，不是对所有野外个体直接追踪所得。2023 年胎儿发育研究分析了挪威 33 只怀孕雌性所携的 80 个胎儿，窝仔数 1 至 5，平均 2.4；这些是该样本结果。面向公众时，每胎通常 2 至 4 仔比单列 2.4 均值更稳妥。[Tomiyasu et al. 2023](https://doi.org/10.1016/j.therwi.2023.100059) [NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)

不要录入全球典型寿命。现有资料混合圈养记录、猎获年龄结构和个别异常值，无法形成与成年体长、体重同等稳定的物种范围。

## 生态系统工程效应与证据边界

欧亚河狸通过筑坝、挖沟、掘洞、砍伐和选择性取食改变河流廊道。最稳妥的总述是：在出现坝的地点，蓄水区可增加水面与湿地边缘、延缓流量响应、截留部分泥沙和营养物，并创造新的水深、流速、底质和植被组合。结果可能惠及某些类群，也可能让偏好流水的类群失去局部生境。[Puttock et al. 2021](https://doi.org/10.1002/hyp.14017) [Orazi et al. 2022](https://doi.org/10.3389/fevo.2022.873307)

| 原始研究 | 主要结果 | 允许的档案表达 | 不能推广的部分 |
| --- | --- | --- | --- |
| Puttock et al. 2017 | 英格兰 Devon 一个封闭农业支流样地，两只河狸形成 13 座坝，约储水 1,000 立方米；观测到洪峰降低、悬浮泥沙及部分氮磷下降，同时溶解有机碳增加 | 河狸坝可在小型农业水道增加储水并改变峰流与水质 | 不能说河狸普遍减少固定百分比洪峰，也不能说“净化所有水” |
| Puttock et al. 2021 | 英格兰四处重引入地点、二至四级水道、超过 1,000 次暴雨事件；总体上峰值降低、滞后增加、流量过程不那么陡，但地点和季节差异明显 | 多地点数据支持坝群可延缓暴雨径流响应 | 不能说能提供百分之百防洪；也不能外推到没有坝的大河 |
| Law et al. 2017 | 13 公顷封闭退化泥炭湿地，一对河狸活动 12 年；固定样方平均植物丰富度增加 46%，累计丰富度增加 148%，异质性增加 71%，水淹是主要驱动，放牧有附加作用 | 河狸造成的水淹与取食可在退化湿地增加植物异质性和局地丰富度 | 三个百分比只属于该地点和设计，不是全球常数 |
| Orazi et al. 2022 | 巴伐利亚森林 10 个地点记录 1,166 个物种，其中 196 个只在河狸池塘出现；关注保护物种在池塘、河流、森林的数量分别为 76、67、63，鸟与蝙蝠丰度较高，但其他类群反应不一 | 河狸池塘可补充河流与森林没有的生境，效应因类群而异 | 不能简化成“所有类群都增加”或把 196 写成全球贡献 |

研究链接：[Puttock et al. 2017](https://doi.org/10.1016/j.scitotenv.2016.10.122) [Puttock et al. 2021](https://doi.org/10.1002/hyp.14017) [Law et al. 2017](https://doi.org/10.1016/j.scitotenv.2017.06.173) [Orazi et al. 2022](https://doi.org/10.3389/fevo.2022.873307)

档案不宜使用“天然水坝阻止洪水”“净化水质”“总会提高生物多样性”或“修复气候”之类绝对句。坝也可能抬高邻近土地水位、淹没基础设施、阻塞涵洞、砍伐经营树木、改变水温与溶解氧，并对鱼类通行产生方向不一的影响。具体管理需要看河阶、坝位、物种、季节及土地用途。[Scottish Government environmental assessment](https://www.gov.scot/publications/consultation-beavers-scotland-strategic-environmental-assessment-environmental-report-2017/pages/13/) [UK Forestry Commission guidance](https://www.gov.uk/guidance/protecting-trees-from-mammal-damage-technical-guidance/eurasian-beaver)

## 威胁

1. 历史上为毛皮、肉和河狸香进行的过度捕猎，曾使物种退缩至少数遗存区。[Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)
2. 中国和蒙古等亚洲遗存区的河岸植被退化、水资源过度利用、农业扩张、薪柴采集、灌溉坝和河流片段化。[Chu and Jiang 2009](https://doi.org/10.1017/S0030605308002056) [Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)
3. 洪水、涵洞或堤岸损坏、农作物和经营林木损失引发的冲突性捕杀、移除或干扰。[UK Forestry Commission guidance](https://www.gov.uk/guidance/protecting-trees-from-mammal-damage-technical-guidance/eurasian-beaver)
4. 道路和其他基础设施造成的局部死亡与水系连通性下降。该影响强度是地区性的，不应写成全球下降主因。
5. 小型隔离种群的遗传瓶颈与随机事件风险，尤其需要关注中国、蒙古和西伯利亚遗存谱系。[Senn et al. 2014](https://doi.org/10.1111/eva.12162)
6. 芬兰及俄罗斯西北部接触区的外来北美河狸竞争与扩张。两者是不同物种，不应声称存在已证实杂交。[Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)
7. 来源不清、健康筛查不足或混合谱系的放归，可能带来遗传、疾病和失败风险。[Senn et al. 2014](https://doi.org/10.1111/eva.12162)

这些威胁不等于全球种群正在下降。全球 IUCN 趋势仍是增加，威胁段必须明确区分全球恢复和区域脆弱性。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T4007A197499749.en)

## 保护行动

1. 维持法律保护并保护繁殖巢、岸洞、相关水位和关键河岸带；任何坝体处理前先判断其是否维持繁殖或休息地点的生态功能。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting)
2. 对亚洲遗存区恢复柳、杨等本地河岸木本与湿地植被，限制不可持续取水和薪柴采集，保留水系连通性。[Chu and Jiang 2009](https://doi.org/10.1017/S0030605308002056)
3. 推动中国与蒙古的跨境保护区协作、统一监测和湿地管理。该建议由中国乌伦古河流域原始调查直接提出。[Chu and Jiang 2009](https://doi.org/10.1017/S0030605308002056)
4. 用标准化的集群、分布、繁殖和遗传监测替代口径不一的数字堆叠，尤其追踪隔离种群与重引入后的扩散。[Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)
5. 冲突管理优先采用河岸缓冲带、树干护网、围栏、涵洞防护和经许可安装的水位控制设施，再根据当地法律进行定点干预。[UK Forestry Commission guidance](https://www.gov.uk/guidance/protecting-trees-from-mammal-damage-technical-guidance/eurasian-beaver)
6. 在重引入和转移前评估来源谱系、健康与生境承载条件，放归后持续监测，避免仅以释放数量衡量成功。[Senn et al. 2014](https://doi.org/10.1111/eva.12162)
7. 在接触区控制外来北美河狸，并保持可靠的遗传或来源鉴定，避免仅凭照片判断。[Halley, Saveljev and Rosell 2021](https://doi.org/10.1111/mam.12216)
8. 在中国执行国家一级重点保护野生动物制度，并把执法与新疆河岸生境恢复、跨境协作结合。[国家重点保护野生动物名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

## 可稳定展示的指标

| 展示项 | 建议值 | 来源与限定 |
| --- | --- | --- |
| IUCN | 无危，增加 | 2016 评估，2021 修订版本 |
| 成年头体长 | 70 至 100 cm | 常见范围，不含 25 至 40 cm 尾长 |
| 成年体重 | 15 至 35 kg | 常见成年范围，不是绝对上下限 |
| 妊娠期 | 约 105 天 | 胎儿发育研究采用的物种值，不是每只雌性的直接追踪值 |
| 每年繁殖 | 1 胎，通常 2 至 4 仔 | 管理生态资料；个体会延迟初产或间歇不繁殖 |

建议 `featuredStats` 保留四项：IUCN、头体长加尾长注释、成年体重、每年一胎且通常 2 至 4 仔。若改用妊娠期，写“约 105 天”并保留方法边界。不要为了凑数字添加全球寿命、最大潜水、固定领地面积或全球个体总量。

## 六个故事章节草稿

### 1. 扁尾、蹼足与水陆两用身体

欧亚河狸的后足像宽大的水中桨，横向扁尾帮助转向，致密被毛隔开冷水，前足却能灵活抓住细枝。成年头体长通常 70 至 100 厘米，尾另长 25 至 40 厘米。照片很难可靠区分欧亚河狸与北美河狸，因此身份必须由素材来源保证，而不能只凭毛色或尾形下结论。[NatureScot Review 86](https://www.nature.scot/sites/default/files/2025-06/naturescot-review-86.pdf) [Brazier et al. 2021](https://doi.org/10.1002/wat2.1494)

### 2. 岸边食谱随季节换挡

它们不是以木材本身为主食，而是吃树皮、形成层、嫩枝和叶，也大量利用水生及岸边草本。春夏食谱更绿，秋冬木本和水下食物堆更重要；具体树种和比例跟着当地可用资源变化。离水越远，拖回枝条的成本越高，这让岸边形成一条明显的取食梯度。[Haarberg and Rosell 2006](https://doi.org/10.1111/j.1469-7998.2006.00142.x) [Mikulka et al. 2022](https://doi.org/10.11118/actaun.2022.007)

### 3. 一处领地里的两代幼兽

常见家族群由繁殖成体、当年幼仔和尚未扩散的年轻个体组成。每年通常一胎、2 至 4 仔，年轻河狸多在约两岁后寻找新领地；初次繁殖可以推迟，成熟雌性也可能跳过某个繁殖季。社会配对并不等于已经证明所有种群都终生严格遗传单配。[NatureScot legal ecology guidance](https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting) [Parker, Zedrosser and Rosell 2017](https://doi.org/10.1111/jzo.12458) [Syrůčková et al. 2015](https://doi.org/10.1007/s13364-015-0219-z)

### 4. 筑坝把溪流改成湿地镶嵌

在可筑坝的小型水道，枝条、泥和石块抬高水位，池塘、浅滩、侧沟和湿地边缘随之出现。多地点暴雨资料支持坝群能够削低部分洪峰并拉长流量响应，湿地样地也记录到植物丰富度和空间异质性上升。它们改变的是水流与生境结构，不是无条件提供同一种结果。[Puttock et al. 2021](https://doi.org/10.1002/hyp.14017) [Law et al. 2017](https://doi.org/10.1016/j.scitotenv.2017.06.173)

### 5. 生态工程有尺度，也有代价

河狸池塘可为一些鸟、蝙蝠、植物和水生生物增加生境，但类群反应不一致。坝体也可能淹没农地、堵塞涵洞、改变水温和鱼类通行，并让溶解有机碳上升。没有坝的河段更不能套用坝池研究结果；每处收益与冲突都要放回河阶、季节、土地利用和目标物种中评估。[Orazi et al. 2022](https://doi.org/10.3389/fevo.2022.873307) [Puttock et al. 2017](https://doi.org/10.1016/j.scitotenv.2016.10.122)

### 6. 全球回归与亚洲孤岛并存

欧洲的保护和重引入让欧亚河狸从少数遗存区重返大片故土，全球等级如今为无危且趋势增加。新疆和蒙古边境的遗存种群仍受水资源开发、河岸植被退化和隔离影响。中国把河狸列为国家一级保护野生动物，下一步重点不是用全球回升稀释地方风险，而是恢复河岸带、统一监测并推进跨境保护。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T4007A197499749.en) [Chu and Jiang 2009](https://doi.org/10.1017/S0030605308002056) [国家重点保护野生动物名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

## 关键事实草稿

1. MDD 接受名为 `Castor fiber`，英文主名 Eurasian Beaver，European Beaver 是常用别名。
2. 当前 IUCN 为无危、趋势增加；2021 条目是 2016 年评估的修订版。
3. 中国国家重点保护名录以“河狸”列为一级保护野生动物，全球等级和中国法律等级不可互换。
4. MDD v2.5 结构化字段列 34 个分布国；英国重建种群和摩尔多瓦属于当前数据源间的口径差异。
5. 成年头体长通常 70 至 100 厘米，尾另长 25 至 40 厘米，体重通常 15 至 35 千克。
6. 它是植食动物，吃草本、水生植物、叶、嫩枝、树皮和形成层；砍树也用于建筑和搬运。
7. 每个领地不一定有坝或巢；湖泊和较大河流中的个体常使用岸洞。
8. 每年通常一胎、2 至 4 仔，约两岁开始成熟和扩散，但初次繁殖可推迟。
9. 坝池可以改变峰流、泥沙、营养盐和生境异质性，效果依地点、季节和被测类群而变。
10. 全球恢复与中国、蒙古等亚洲隔离遗存种群的脆弱性同时成立。

## 图像场景与证据边界

### 共用形态约束

- 保留粗壮体形、致密棕色被毛、小耳、小眼、橙色门齿、宽扁覆鳞尾，以及明显有蹼的大后足。
- 前足较小，趾间分离，能抓握细枝；不要给前足做成同样宽大的全蹼脚。
- 尾应横向扁平，不是水獭式尖尾、鼠类长圆尾或鱼类竖直尾鳍。
- 不出现海狸鼠、麝鼠、水獭、水豚或北美地标；不加文字、徽标、水印、头盔或拟人工具。
- 欧亚河狸与北美河狸普通照片难以可靠区分。图像身份来自受控提示词和素材链，不来自所谓单一可见诊断点。

| 文件 | 场景与构图 | 可写 alt | 图说边界 |
| --- | --- | --- | --- |
| `01-riparian-dusk-portrait.webp` | 黄昏河岸，一只成体位于画面右三分之一，全身可见；左侧留标题负空间；宽扁尾平放，近侧后足若可见则显示蹼 | 一只棕色欧亚河狸在黄昏河岸停步，宽扁尾贴地 | 不凭毛色或尾形声称排除北美河狸；尾不可夸张到接近躯干宽度 |
| `02-webbed-hind-foot-shallows.webp` | 一只成体从浅水上岸，近侧后足蹼和宽扁覆鳞尾清楚；前足较小且趾分离 | 一只河狸离开浅水，近侧后足的蹼和扁平尾部清晰可见 | alt 只描述确实看见的近侧脚，不声称两只后足每个趾都可计数 |
| `03-seasonal-riparian-foraging.webp` | 一只成体在水边用前足握住细落叶树枝并剥取树皮，背景有草本和水生植物 | 一只河狸在水边握着细枝取食树皮 | 植物无法可靠鉴定时不要写成柳；不要把砍伐和当场吃木材混成一个动作 |
| `04-dam-wetland-mosaic.webp` | 景观为主，小型温带溪流、木枝泥坝、池塘、侧沟、死木和湿地边缘；一只远处小河狸作为尺度 | 一座河狸坝把小溪分成池塘、浅水和湿地边缘 | 画面只能证明结构存在，不能证明洪峰降低、水质改善或物种数增加 |
| `05-adult-and-two-kits-lodge.webp` | 恰好一只成体和两只幼仔在岸边巢附近，三只都完整可见 | 一只成年河狸带着两只幼仔停在岸边巢旁 | 不从画面推断成体性别、亲子鉴定、配偶关系或“终生单配” |
| `06-riparian-restoration-monitoring.webp` | 两名保护人员种植或加护本地河岸幼树并记录水位，远处一只河狸；干旱大陆性河谷氛围，不用真实坐标或机构标识 | 两名保护人员在河岸保护幼树并记录水位，远处有一只河狸 | 这是受蒙新河狸保护需求启发的概念场景，不宣称记录某次真实项目或当前数量 |

推荐运行时路径为 `./images/species/eurasian-beaver/`。封面焦点可用 `{ x: 0.72, y: 0.55 }`，其余按主体位置微调。图像验收时先数动物、脚和尾，再检查物种轮廓、动作证据与 alt 是否逐项一致。

## 明确排除的断言

- 不写“2026 年全球共有 150 万只”。Halley 等人的数字是 2020 年各国估计汇总，非同步普查。
- 不填 `estimatedMatureIndividuals`。现有总数不是成熟个体范围。
- 不填 `lifespanYears`。没有与其他稳定指标同等可靠的全球野外范围。
- 不填 `maxDiveDepthM`。挪威样本的潜水深度不是生理极限。
- 不写“所有河狸都会筑坝或住在巢里”。有些领地只有岸洞。
- 不写“河狸坝防止洪水”或“净化水”。使用“在所研究地点降低部分峰值、延长滞后或截留部分物质”。
- 不写“河狸总会增加生物多样性”。使用“创造异质生境，不同类群反应不同”。
- 不把中国国家一级保护等级当成 IUCN 全球等级。
- 不把 `Castor fiber birulai` 当成已被 MDD 接受的独立物种。
- 不声称普通照片能凭尾形、毛色或头形可靠区分欧亚河狸和北美河狸。

## `SpeciesSource` 草稿

以下数组使用仓库现有 schema。标题中的冒号只用于分隔作者、年份和文献名。

```ts
const EURASIAN_BEAVER_SOURCE_DATE = '2026-08-23';

const EURASIAN_BEAVER_SOURCES = [
  {
    title: 'Mammal Diversity Database: Castor fiber, taxon 1001958',
    url: 'https://www.mammaldiversity.org/taxon/1001958/',
    kind: 'taxonomy',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Batbold et al. 2021: Castor fiber, amended version of 2016 assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T4007A197499749.en',
    kind: 'conservation',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'National Forestry and Grassland Administration: National Key Protected Wild Animals List announcement',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List: Castor fiber, Class I',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'NatureScot: Eurasian beaver species account',
    url: 'https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/eurasian-beaver',
    kind: 'general',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'NatureScot: Ecological interpretation of beaver breeding sites, resting places and disturbance',
    url: 'https://www.nature.scot/doc/ecological-and-practical-interpretation-legal-definitions-disturbance-breeding-sites-and-resting',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Collen 1997: NatureScot Review 86, Eurasian beaver ecology and fish impact review',
    url: 'https://www.nature.scot/sites/default/files/2025-06/naturescot-review-86.pdf',
    kind: 'general',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Halley, Saveljev and Rosell 2021: Population and distribution of Castor fiber and Castor canadensis in Eurasia',
    url: 'https://doi.org/10.1111/mam.12216',
    kind: 'distribution',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Chu and Jiang 2009: Distribution and conservation of the Sino-Mongolian beaver in China',
    url: 'https://doi.org/10.1017/S0030605308002056',
    kind: 'distribution',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Haarberg and Rosell 2006: Selective foraging on woody plants by Eurasian beavers in Telemark',
    url: 'https://doi.org/10.1111/j.1469-7998.2006.00142.x',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Mikulka et al. 2022: Feeding behaviour along small streams in an agricultural landscape',
    url: 'https://doi.org/10.11118/actaun.2022.007',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Bartra Cabré et al. 2020: Activity and spatial movement in response to light and weather',
    url: 'https://doi.org/10.1007/s42991-020-00029-7',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Graf et al. 2018: Diving behavior in free-living Eurasian beavers',
    url: 'https://doi.org/10.1002/ece3.3726',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Campbell et al. 2005: Territory and group sizes in Eurasian beavers',
    url: 'https://doi.org/10.1007/s00265-005-0942-6',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Syrůčková et al. 2015: Genetic relationships within Eurasian beaver colonies',
    url: 'https://doi.org/10.1007/s13364-015-0219-z',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Parker, Zedrosser and Rosell 2017: Age-specific reproduction in female Eurasian beavers',
    url: 'https://doi.org/10.1111/jzo.12458',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Tomiyasu et al. 2023: Development of fetal Eurasian beavers',
    url: 'https://doi.org/10.1016/j.therwi.2023.100059',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Puttock et al. 2017: Water storage, flow attenuation and diffuse pollution at a beaver site',
    url: 'https://doi.org/10.1016/j.scitotenv.2016.10.122',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Puttock et al. 2021: Beaver dams attenuate flow, a multi-site study',
    url: 'https://doi.org/10.1002/hyp.14017',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Law et al. 2017: Beaver and wetland restoration in an agricultural fen',
    url: 'https://doi.org/10.1016/j.scitotenv.2017.06.173',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Orazi et al. 2022: Biodiversity at Eurasian beaver ponds in Bavarian Forest National Park',
    url: 'https://doi.org/10.3389/fevo.2022.873307',
    kind: 'ecology',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Senn et al. 2014: Nuclear and mitochondrial genetic structure and reintroduction implications',
    url: 'https://doi.org/10.1111/eva.12162',
    kind: 'conservation',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'UK Forestry Commission: Eurasian beaver tree protection and conflict guidance',
    url: 'https://www.gov.uk/guidance/protecting-trees-from-mammal-damage-technical-guidance/eurasian-beaver',
    kind: 'conservation',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Scottish Government 2017: Beaver strategic environmental assessment, freshwater and wetlands',
    url: 'https://www.gov.scot/publications/consultation-beavers-scotland-strategic-environmental-assessment-environmental-report-2017/pages/13/',
    kind: 'general',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
  {
    title: 'Brazier et al. 2021: Beaver, nature ecosystem engineers',
    url: 'https://doi.org/10.1002/wat2.1494',
    kind: 'general',
    accessedAt: EURASIAN_BEAVER_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 生成前 `Species` 对象草稿

以下代码块保留生成前的数据与场景规划，包括当时的暂定图片名和图库顺序，用于追溯研究如何转化为实现。图片现已生成；最终字段、路径和图说以 [`src/data/species.ts`](../../src/data/species.ts) 与 [欧亚河狸图片合同](../../src/assets/source/species/eurasian-beaver/README.md) 为准。

```ts
const eurasianBeaver = {
  id: 'species-castor-fiber',
  slug: 'eurasian-beaver',
  names: {
    zh: '欧亚河狸',
    en: 'Eurasian Beaver',
    aliases: ['河狸', 'European Beaver'],
  },
  scientificName: 'Castor fiber',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Rodentia', '啮齿目'),
    taxon('Castoridae', '河狸科'),
    taxon('Castor', '河狸属'),
  ),
  conservation: conservation('LC', 'increasing', 2016),
  distribution: {
    realms: ['freshwater', 'terrestrial'],
    continents: ['欧洲', '亚洲'],
    regions: [
      '西欧、中欧与南欧恢复分布区',
      '北欧与波罗的海流域',
      '东欧与黑海北部流域',
      '俄罗斯欧洲部分与西伯利亚',
      '哈萨克斯坦和蒙古遗存或恢复分布区',
      '中国新疆乌伦古河上游及相邻边境水系',
    ],
    countries: [
      '奥地利',
      '白俄罗斯',
      '比利时',
      '波斯尼亚和黑塞哥维那',
      '保加利亚',
      '中国',
      '克罗地亚',
      '捷克',
      '丹麦',
      '爱沙尼亚',
      '芬兰',
      '法国',
      '德国',
      '匈牙利',
      '意大利',
      '哈萨克斯坦',
      '拉脱维亚',
      '列支敦士登',
      '立陶宛',
      '卢森堡',
      '蒙古',
      '黑山',
      '荷兰',
      '挪威',
      '波兰',
      '罗马尼亚',
      '俄罗斯',
      '塞尔维亚',
      '斯洛伐克',
      '斯洛文尼亚',
      '西班牙',
      '瑞典',
      '瑞士',
      '乌克兰',
    ],
    range:
      '分布从西欧、北欧和中欧向东延伸至俄罗斯、西伯利亚、哈萨克斯坦、蒙古与中国新疆。许多欧洲种群由遗存种群扩散或重引入后恢复，亚洲东缘仍有隔离分布。国家数组采用 MDD v2.5 的 34 国结构化字段；同页概述另提摩尔多瓦，英国政府资料则确认重新建立的英国种群，这两处作为来源口径差异保留在文字中。',
    center: { lat: 53, lng: 55 },
  },
  habitats: [
    {
      name: '缓流河流与溪流',
      realm: 'freshwater',
      description:
        '水位较稳定、岸坡可掘洞并邻接草本、水生植物与落叶木本的河段；小型水道中可通过筑坝维持安全水深。',
      isPrimary: true,
    },
    {
      name: '湖泊、池塘、湿地与运河',
      realm: 'freshwater',
      description:
        '利用已有静水或缓流水体移动、避险和取食；较深水体中常住岸洞或岸巢，不一定筑坝。',
    },
    {
      name: '河岸阔叶林与灌丛',
      realm: 'terrestrial',
      description:
        '落叶木本、岸边草本与湿地植物提供树皮、嫩枝、叶、根茎、隐蔽和建筑材料，植物组合随地区改变。',
    },
    {
      name: '农业与城镇水道',
      realm: 'terrestrial',
      description:
        '可进入农业沟渠、人工运河和城镇河段，并利用作物或景观树；适应人类景观不代表没有洪涝、树木或设施冲突。',
    },
  ],
  measurements: {
    length: {
      min: 70,
      max: 100,
      unit: 'cm',
      note: '成年头体长的常见范围，不含另长 25 至 40 厘米的尾部',
    },
    weight: {
      min: 15,
      max: 35,
      unit: 'kg',
      note: '成年体重的常见范围，不是物种绝对极值',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: [
      '水生植物和岸边草本',
      '落叶树的叶与嫩枝',
      '树皮和形成层',
      '根与根茎',
      '季节性的水下枝条食物堆',
      '局部农业景观中的作物',
    ],
    description:
      '广食性植食动物，春夏更多利用草本与水生植物，寒冷季节提高木本树皮、形成层和储存枝条的利用；食谱跟随当地植物可用性变化，砍倒的木材也用于筑坝、巢和运输。',
  },
  activity: [
    '主要在黄昏和夜间活动，活动时长会随年龄、季节、天气与光照改变',
    '以家族群占据并用气味标记河段领地，年轻个体通常在约两岁后扩散',
    '沿岸取食并由水路运输枝条，在危险时快速退入深水',
    '根据水体条件使用岸洞、巢、坝、运河和水下食物堆，并非每个领地都有全部结构',
    '潜水多用于移动、进入巢穴或搬运材料，普通觅食不依赖长时间深潜',
  ],
  tags: [
    '半水栖啮齿动物',
    '古北界',
    '淡水与河岸带',
    '植食动物',
    '生态系统工程师',
    '家族群',
    'IUCN 无危',
    '全球趋势增加',
    '中国国家一级保护野生动物',
  ],
  summary:
    '从欧洲到亚洲北部恢复扩张、以扁尾和蹼足往返河岸，并在适合筑坝的水道重塑水流与湿地生境的大型植食性啮齿动物。',
  description:
    '欧亚河狸是古北界的大型半水栖啮齿动物，成年头体长通常 70 至 100 厘米，体重通常 15 至 35 千克。它用大而有蹼的后足游泳，以较小前足抓握枝条，宽扁尾帮助水中运动。食谱随季节和环境在草本、水生植物、嫩枝、叶、树皮与形成层间转换。家族会守卫水边领地，但每个领地的建筑不同：有的在小溪筑坝形成池塘，有的只在湖岸或大河岸坡掘洞。坝池可延缓部分暴雨流量、截留泥沙并增加湿地异质性，也可能抬高农地水位、堵塞涵洞或改变局地生物群落，因此工程效应必须结合地点说明。全球 IUCN 为无危且趋势增加，中国和蒙古边境等隔离遗存种群仍需要河岸恢复、连通性保护和跨境监测。',
  storySections: [
    {
      key: 'amphibious-body',
      label: '形态',
      title: '扁尾、蹼足与水陆两用身体',
      body:
        '欧亚河狸的后足像宽大的水中桨，横向扁尾帮助转向，致密被毛隔开冷水，前足却能灵活抓住细枝。成年头体长通常 70 至 100 厘米，尾另长 25 至 40 厘米。普通照片很难可靠区分欧亚河狸与北美河狸，身份必须由素材来源保证。',
    },
    {
      key: 'seasonal-menu',
      label: '食性',
      title: '岸边食谱随季节换挡',
      body:
        '它们不是以木材本身为主食，而是吃树皮、形成层、嫩枝和叶，也大量利用水生及岸边草本。春夏食谱更绿，秋冬木本和水下食物堆更重要；具体树种和比例跟着当地可用资源变化。离水越远，拖回枝条的成本越高。',
    },
    {
      key: 'family-territory',
      label: '生活史',
      title: '一处领地里的两代幼兽',
      body:
        '常见家族群由繁殖成体、当年幼仔和尚未扩散的年轻个体组成。每年通常一胎、2 至 4 仔，年轻河狸多在约两岁后寻找新领地；初次繁殖可以推迟，成熟雌性也可能跳过某个繁殖季。社会配对不等于已经证明所有种群都终生严格遗传单配。',
    },
    {
      key: 'dam-wetland',
      label: '生态工程',
      title: '筑坝把溪流改成湿地镶嵌',
      body:
        '在可筑坝的小型水道，枝条、泥和石块抬高水位，池塘、浅滩、侧沟和湿地边缘随之出现。多地点暴雨资料支持坝群能够削低部分洪峰并拉长流量响应，湿地样地也记录到植物丰富度和空间异质性上升。它们改变水流与生境结构，却不保证每处都出现同一种结果。',
    },
    {
      key: 'engineering-boundaries',
      label: '证据边界',
      title: '生态工程有尺度，也有代价',
      body:
        '河狸池塘可为一些鸟、蝙蝠、植物和水生生物增加生境，但类群反应不一致。坝体也可能淹没农地、堵塞涵洞、改变水温和鱼类通行，并让部分溶解物质上升。没有坝的河段不能套用坝池研究结果，每处收益与冲突都要放回河阶、季节和土地利用中评估。',
    },
    {
      key: 'recovery-and-relicts',
      label: '保护',
      title: '全球回归与亚洲孤岛并存',
      body:
        '欧洲的保护和重引入让欧亚河狸从少数遗存区重返大片故土，全球等级如今为无危且趋势增加。新疆和蒙古边境的遗存种群仍受水资源开发、河岸植被退化和隔离影响。中国将河狸列为国家一级保护野生动物，河岸恢复、统一监测和跨境保护仍然必要。',
    },
  ],
  keyFacts: [
    'MDD 接受名为 Castor fiber，英文主名 Eurasian Beaver，European Beaver 为常用别名。',
    '当前 IUCN 为无危、趋势增加；2021 条目是 2016 年评估的修订版本。',
    '中国国家重点保护野生动物名录以“河狸”列为一级，不能与 IUCN 全球等级互换。',
    'MDD v2.5 结构化字段列出 34 个分布国，英国重建种群和摩尔多瓦体现来源口径差异。',
    '成年头体长通常 70 至 100 厘米，尾另长 25 至 40 厘米，体重通常 15 至 35 千克。',
    '它是植食动物，吃草本、水生植物、叶、嫩枝、树皮和形成层；砍树也服务于建筑与运输。',
    '每个领地不一定有坝或巢，湖泊和较大河流中的个体常使用岸洞。',
    '每年通常一胎、2 至 4 仔，年轻个体多在约两岁后成熟和扩散，但初次繁殖可推迟。',
    '坝池可改变峰流、泥沙、营养盐和生境异质性，结果随地点、季节和被测类群变化。',
    '全球恢复与中国、蒙古等亚洲隔离遗存种群的脆弱性同时成立。',
  ],
  threats: [
    '历史上为毛皮、肉和河狸香进行的过度捕猎',
    '亚洲遗存区的河岸植被退化、水资源过度利用、农业扩张和薪柴采集',
    '灌溉坝、道路与其他基础设施造成的水系片段化和局部死亡',
    '洪水、涵洞与堤岸损坏、作物和经营树木损失引发的冲突性移除或捕杀',
    '中国、蒙古和西伯利亚小型隔离种群的遗传瓶颈与随机事件风险',
    '芬兰及俄罗斯西北部接触区外来北美河狸的竞争与扩张',
    '来源、健康或生境评估不足的转移和重引入',
  ],
  conservationActions: [
    '维持法律保护，并保护活跃领地的繁殖巢、岸洞及维持其水位的关键结构',
    '恢复本地河岸木本和湿地植被，限制亚洲遗存区不可持续取水与薪柴采集',
    '推动中国与蒙古跨境保护区协作、统一调查方法和湿地管理',
    '标准化监测集群、分布、繁殖和遗传变化，避免把不同年份估计直接相加当成普查',
    '用河岸缓冲、树干护网、围栏、涵洞防护和经许可的水位控制设施优先缓解冲突',
    '重引入和转移前评估来源谱系、健康与生境，放归后持续监测',
    '在接触区控制外来北美河狸，并以遗传或可靠来源信息确认物种',
    '在中国落实国家一级重点保护制度，并把执法与河岸恢复、连通性和跨境协作结合',
  ],
  metrics: {
    adultLengthCm: [70, 100],
    adultMassKg: [15, 35],
  },
  featuredStats: [
    {
      key: 'iucn-status',
      label: 'IUCN',
      value: '无危',
      note: '全球趋势增加；2016 年评估，2021 年修订发布',
    },
    {
      key: 'adult-length',
      label: '成年头体长',
      value: '70 至 100',
      unit: '厘米',
      note: '尾另长 25 至 40 厘米',
    },
    {
      key: 'adult-mass',
      label: '成年体重',
      value: '15 至 35',
      unit: '千克',
      note: '常见成年范围，不是绝对极值',
    },
    {
      key: 'reproduction',
      label: '每年一胎',
      value: '通常 2 至 4',
      unit: '仔',
      note: '初次繁殖可推迟，成熟雌性也可能间歇不繁殖',
    },
  ],
  media: {
    image: './images/species/eurasian-beaver/01-riparian-dusk-portrait.webp',
    alt: '一只棕色欧亚河狸在黄昏河岸停步，宽扁尾贴地',
    focalPoint: { x: 0.72, y: 0.55 },
    gallery: [
      {
        image: './images/species/eurasian-beaver/02-webbed-hind-foot-shallows.webp',
        alt: '一只河狸离开浅水，近侧后足的蹼和扁平尾部清晰可见',
        title: '水陆交界的推进器',
        caption:
          '宽大的有蹼后足承担游泳推进，较小前足适合抓握；图像身份依赖素材来源，普通照片不能只凭足或尾可靠排除北美河狸。',
        focalPoint: { x: 0.55, y: 0.58 },
      },
      {
        image: './images/species/eurasian-beaver/03-seasonal-riparian-foraging.webp',
        alt: '一只河狸在水边握着细枝取食树皮',
        title: '树皮是食物，枝干也是材料',
        caption:
          '河狸取食树皮、形成层、嫩枝和叶，也会把枝条用于巢、坝和运输；画面中的植物不作物种鉴定。',
        focalPoint: { x: 0.48, y: 0.53 },
      },
      {
        image: './images/species/eurasian-beaver/04-dam-wetland-mosaic.webp',
        alt: '一座河狸坝把小溪分成池塘、浅水和湿地边缘',
        title: '坝后长出一组新生境',
        caption:
          '图中只呈现坝、池塘和湿地边缘的结构。洪峰、水质或物种丰富度的变化需要现场监测，不能从单张图像判断。',
        focalPoint: { x: 0.5, y: 0.5 },
      },
      {
        image: './images/species/eurasian-beaver/05-adult-and-two-kits-lodge.webp',
        alt: '一只成年河狸带着两只幼仔停在岸边巢旁',
        title: '家族领地中的幼仔',
        caption:
          '欧亚河狸通常每年一胎、2 至 4 仔；这幅场景不用于判断成体性别、实际亲子或配偶关系。',
        focalPoint: { x: 0.52, y: 0.58 },
      },
      {
        image: './images/species/eurasian-beaver/06-riparian-restoration-monitoring.webp',
        alt: '两名保护人员在河岸保护幼树并记录水位，远处有一只河狸',
        title: '恢复河岸，也记录变化',
        caption:
          '这是受蒙新河狸保护需求启发的概念场景，表达河岸植被恢复和水位监测，不对应某个真实项目、地点或当前数量。',
        focalPoint: { x: 0.45, y: 0.53 },
      },
    ],
  },
  sources: EURASIAN_BEAVER_SOURCES,
  featured: true,
  publishedAt: '2026-08-23',
  updatedAt: '2026-08-23',
} as const satisfies Species;
```

## 实施时的复核清单

- 先核对 TODO 中欧亚河狸仍为未完成项，避免覆盖并行工作的分类单元。
- 将对象加入现有物种数组时保持来源常量与内容常量相邻，沿用仓库排序和导出方式。
- 生成图片前以本节的场景合同为准，运行时图片全部转为 WebP，并逐张检查尺寸、主体数量、足尾结构和透明度或色彩空间。
- 运行类型检查、测试、构建和静态资产检查。仓库规则禁止用 GUI 或无头浏览器作验证。
- 完成后只把该 TODO 行改为已完成，不顺带更改其他待办项。
