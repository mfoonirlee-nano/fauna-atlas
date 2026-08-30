# 美国毒蜥（Gila Monster）物种档案研究与实现简报

- 研究对象：Heloderma suspectum
- 建议 slug：gila-monster
- 研究截止日：2026-08-30
- 用途：完成 src/data/species.ts 中美国毒蜥 TODO，并约束六张静态图片的生物学内容

证据口径：分类优先采用 ITIS、Reptile Database 与分子系统学原始论文；全球灭绝风险只采用 IUCN 现行条目；贸易和国内法律分别采用 CITES、墨西哥联邦公报及美国联邦、州级机构；自然史优先采用野外研究、州恢复计划和国家动物园资料。2007 年 IUCN 评估、2017 年新墨西哥恢复计划、2025 至 2026 年研究与现行州级页面代表不同时间和空间尺度，不能互相替换。

## 核心编辑结论

1. 现行接受名为 Heloderma suspectum Cope, 1869，ITIS TSN 为 174113。分类链使用 Animalia > Chordata > Reptilia > Squamata > Helodermatidae > Heloderma。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=174113)；[Reptile Database](https://reptile-database.reptarium.cz/Heloderma/suspectum)（访问日期均为：2026-08-30）
2. ITIS 与 Reptile Database 仍保留 H. s. cinctum 和 H. s. suspectum 两个传统亚种；SSAR 2025 年第九版只列物种 H. suspectum，并说明 Douglas 等没有找到支持这两个亚种的线粒体 DNA 证据。该研究最初未公开样本地点，地点资料后来才补发，现有名录的处理仍不一致。产品应停在物种级，不给图片贴“带纹亚种”或“网纹亚种”标签。[Douglas et al. 2010](https://doi.org/10.1016/j.ympev.2009.12.009)；[SSAR 2025 checklist](https://ssarherps.org/wp-content/uploads/2025/03/9th-Edition-Scientific-and-Standard-English-Names-of-Amphibians-and-Reptiles.pdf)；[Reptile Database](https://reptile-database.reptarium.cz/Heloderma/suspectum)；[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=174113)（访问日期均为：2026-08-30）
3. 中文主名采用 TODO 的“美国毒蜥”。“希拉毒蜥”“吉拉毒蜥”和“钝尾毒蜥”分别见于中文医学资料、台湾法规和台北动物园，可作为检索别名；它们不是三个不同物种。[MSD 诊疗手册](https://www.msdmanuals.cn/professional/injuries-poisoning/bites-and-stings/alligator-crocodile-iguana-and-venomous-lizard-bites)；[台湾行政院公报](https://gazette.nat.gov.tw/EG_FileManager/eguploadpub/eg030004/ch07/type3/gov88/num24/images/Eg01.pdf)；[台北市立动物园](https://www.zoo.gov.taipei/News_Content.aspx?n=CBF299753897CE64&s=040F6B5053BACD08&sms=E9D5496AB5D7C2B7)（访问日期均为：2026-08-30）
4. IUCN 2026-1 是截止日的最新红色名录版本，2026-07-09 发布。美国毒蜥的现行条目仍是 2007 年评估：近危 NT、趋势 decreasing。[IUCN current version](https://nrl.iucnredlist.org/support/whatsnew)；[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en)（访问日期均为：2026-08-30）
5. 2007 年理由称该物种可能显著下降，但三代内降幅可能低于 30%，主要压力是分布区内的生境损失，因此接近易危 A2、A3 和 A4 阈值。这里的 A2、A3、A4 是“接近达到”的说明，不是 NT 条目的正式 criteria 字符串；仓库应使用 conservation('NT', 'decreasing', 2007)，不传第四个参数。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en)；[IUCN supporting-information guidance](https://nrl.iucnredlist.org/assessment/supporting-information)（访问日期均为：2026-08-30）
6. IUCN 1996 年曾列 VU，2007 年改列 NT。IUCN 的类别变动表把原因标为 N，即非真实状态变化或重新评估，不应写成“2007 年保护成功后降级”。[IUCN 2007 Table 7](https://nc.iucnredlist.org/redlist/content/attachment_files/2007RL_Stats_Table_7.pdf)（访问日期：2026-08-30）
7. 现行全球条目很旧，也没有可供仓库录入的当前成熟个体上下限。新墨西哥恢复计划明确指出部分区域没有可靠密度估计；Saguaro 国家公园的照片识别数和局地模型估计只能说明一个公园项目，不能外推全球数量。metrics.estimatedMatureIndividuals 留空。[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[Saguaro Gila Monster Project](https://www.nps.gov/sagu/getinvolved/gila-monster-project.htm)（访问日期均为：2026-08-30）
8. CITES 以 Heloderma spp. 的属级条目把美国毒蜥纳入附录 II，自 1975-07-01 生效；危地马拉珠毒蜥的附录 I 例外不适用于 H. suspectum。附录 II 管理国际贸易，不等于全球禁止一切合法圈养或移动。[CITES listing history](https://cites.org/sites/default/files/esp/resources/pub/checklist11/Historia_de_las_inclusiones_en_los_Apendices_de_la_CITES.pdf)；[CITES Checklist](https://checklist.cites.org/)（访问日期均为：2026-08-30）
9. 墨西哥 NOM-059-SEMARNAT-2010 把 H. suspectum 列为 Amenazada，代码 A，并注明“非墨西哥特有”。2025 年发布的是 PROY-NOM-059-SEMARNAT-2025 项目文本；2026 年国家基础设施质量计划仍把它列为拟在 2026 年推进的项目，不能当作已经生效的新最终名录。截止日仍以可核验的现行 NOM-059 及其修订为法律口径。[Diario Oficial de la Federación, NOM-059-SEMARNAT-2010](https://www.dof.gob.mx/nota_detalle.php?codigo=5173091&fecha=30/12/2010)；[2019 Annex III modification](https://dof.gob.mx/normasOficiales/8007/semarnat11_C/semarnat11_C.html)；[2025 draft](https://www.dof.gob.mx/nota_detalle.php?codigo=5754858&fecha=14/04/2025)；[2026 quality infrastructure program](https://www.dof.gob.mx/nota_detalle.php?codigo=5780781&fecha=24/02/2026)（访问日期均为：2026-08-30）
10. 美国分布州均对采集或骚扰设有保护。亚利桑那州现行野生动物保护战略页面把该种列为 SGCN Tier 1，所用总表在 2024 年更新；新墨西哥把该种列为州级 endangered；犹他州 2026 年表格仍把采集和持有列为 prohibited、限额 0，除非取得 variance。这些 2024 至 2026 年州级资料比 IUCN 条目新，但制度和空间尺度不同，不能拿来改写 2007 年全球 NT 评估，也不能合并成一个“美国联邦濒危等级”。[Arizona Wildlife Conservation Strategy](https://awcs.azgfd.com/species/reptiles/heloderma-suspectum)；[New Mexico Department of Wildlife](https://wildlife.dgf.nm.gov/gila-monsters-enough-said/)；[Utah Division of Wildlife Resources](https://wildlife.utah.gov/reptiles-amphibians/tables)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
11. 2011 年 USFWS 只审查了把犹他种群作为 ESA distinct population segment 列名的请愿，并作出 not substantial finding，理由是该种群不构成可列名 DPS，因而没有启动状态审查。不能由这份文件推导“美国毒蜥已列入联邦 ESA”。[U.S. Fish and Wildlife Service](https://www.fws.gov/species-publication-action/90-day-finding-petition-list-utah-population-gila-monster-endangered-or)（访问日期：2026-08-30）
12. 原生分布跨美国和墨西哥，不是任一国家特有种。北界在犹他州西南端和内华达州南部，西至加利福尼亚州东南端，向东到亚利桑那州及新墨西哥州西南部，向南穿过索诺拉州至锡那罗亚州最北端；核心范围在亚利桑那和索诺拉。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en)；[Reptile Database](https://reptile-database.reptarium.cz/Heloderma/suspectum)（访问日期均为：2026-08-30）
13. 生境包括索诺兰和莫哈韦荒漠灌丛、半荒漠草地、墨西哥北部刺灌丛，以及奇瓦瓦荒漠西缘的局地种群。它偏好岩质山麓、bajada 冲积坡、峡谷、冲沟和 wash 周边，通常回避广阔开阔平地与清理后的农地。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/gila-monster)；[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
14. “沙漠蜥蜴”不是“生活在裸沙上”。石缝、巨石下空腔、钙结层洞穴、林鼠巢堆、陆龟或其他动物洞穴构成关键庇护所。新墨西哥六年研究显示它会按季节选择不同庇护条件并反复使用特定退避处；庇护所密度可能限制可用生境。[Beck & Jennings 2003](https://doi.org/10.1655/0733-1347%282003%29017%5B0111%3AHUBGMT%5D2.0.CO%3B2)；[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)（访问日期均为：2026-08-30）
15. 旧 IUCN 资料把海拔概括为索诺拉近海平面、亚利桑那约 30 至至少 1,545 米，新墨西哥记录约 1,180 至 1,950 米；Smithsonian 页面概括到 1,500 米，Saguaro 国家公园 2026 页面又记录到约 2,134 米。来源边界不一致，metrics.elevationM 应留空；2,134 米是一个公园记录，不是全物种生理上限。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en)；[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/gila-monster)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
16. Smithsonian 和 2026 年 NPS 页面给出总长约 56 厘米的上限，San Diego Zoo 给 55 厘米，USGS 概括为可达 50 厘米。结构化 measurements 只收录 0.56 米，并在 note 中说明这是机构页面的四舍五入物种上限，不是成年封闭范围或绝对纪录。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/gila-monster)；[San Diego Zoo Wildlife Alliance](https://animals.sandiegozoo.org/animals/gila-monster)；[USGS fact sheet](https://doi.org/10.3133/fs20063061)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
17. 体重资料差异更大。San Diego Zoo 给 0.7 至 1.4 千克，Aquarium of the Pacific 的设施页面称可达 2.3 千克或更重，NPS 页面只写超过 0.45 千克。性别、地点、体况和圈养状态没有统一，measurements.weight 与 metrics.adultMassKg 都留空。[San Diego Zoo Wildlife Alliance](https://animals.sandiegozoo.org/animals/gila-monster)；[Aquarium of the Pacific](https://www.aquariumofpacific.org/onlinelearningcenter/species/southern_reticulated_gila_monster)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
18. 识别特征是粗壮低矮的身体、宽大钝头、小眼、短而肥厚的尾、短壮四肢，以及黑色吻端。背部和体侧的珠粒状鳞片下有 osteoderms；腹面鳞片更平整。黑色底上分布粉红、橙、鲑红或淡黄色斑块和横带，个体花纹可用于照片识别。[DigiMorph, University of Texas](https://www2.geo.utexas.edu/specimens/Heloderma_suspectum/adult/)；[Saguaro Gila Monster Project](https://www.nps.gov/sagu/getinvolved/gila-monster-project.htm)（访问日期均为：2026-08-30）
19. 每足五趾并带短而弯的爪；舌为黑色、深分叉，用于收集化学线索。图片必须画成四足蜥蜴而非蛇形动物，也不能把粉色壁虎舌画给美国毒蜥。[Aquarium of the Pacific](https://www.aquariumofpacific.org/onlinelearningcenter/species/southern_reticulated_gila_monster)；[Nevada Department of Wildlife, Venomous Reptiles of Nevada](https://epubs.nsla.nv.gov/statepubs/epubs/807755.pdf)（访问日期均为：2026-08-30）
20. 成体花纹可以偏横带、偏网纹或介于两者之间。花纹还有个体和发育变化，分子证据又未稳固支持传统二亚种，因此图像验收只检查 species-level 特征，不以“横带等于 cinctum、网纹等于 suspectum”判定。[Douglas et al. 2010](https://doi.org/10.1016/j.ympev.2009.12.009)；[SSAR 2025 checklist](https://ssarherps.org/wp-content/uploads/2025/03/9th-Edition-Scientific-and-Standard-English-Names-of-Amphibians-and-Reptiles.pdf)（访问日期均为：2026-08-30）
21. 活动节律随季节、温度和降雨改变。春季可在白天早晨和傍晚活动，盛夏高温期更多夜行，季风雨后可出现次级活动峰；冬季通常在地下，但偶尔会在合适天气到洞口晒太阳。产品不应只标“夜行性”或给全范围固定月份。[Davis & DeNardo 2010](https://doi.org/10.1670/08-263.1)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
22. 新墨西哥恢复计划和多个机构页面把地下隐蔽时间概括为一生超过 95%，部分局地页面写约 98%。这些是遥测与自然史综合形成的近似值，不能解释成每个种群、每只个体都被连续观测到同一比例。[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
23. 16 只自由生活个体、两个活动季的索诺兰样地研究发现地表活动通常与降雨期相联，雄性只在繁殖季显著比雌性活跃。这个结果不能变成全物种固定日程，也不能从一张照片判断性别。[Davis & DeNardo 2010](https://doi.org/10.1670/08-263.1)（访问日期：2026-08-30）
24. 家域与移动范围随地点、性别、季节和计算方法明显变化。2025 年跨 12 个种群的研究又显示，冬季降水和活动季温度会改变空间利用估计；Smithsonian 的“约 1 平方英里”不适合作为物种统一 metric。无线电遥测可记录局地移动和庇护所利用，个体花纹照片可支持非侵入式再识别，但二者都不能由一张监测情景图外推全球数量。[Edelkind et al. 2025](https://doi.org/10.1655/Herpetologica-D-24-00053)；[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[Tonto National Monument research](https://www.nps.gov/tont/learn/nature/gila-monster-research.htm)（访问日期均为：2026-08-30）
25. 野外食性核心是脊椎动物巢内容物，包括幼兔、幼地松鼠和其他巢内幼年哺乳类，鹌鹑、鸠鸽等地面或低位筑巢鸟类的卵与雏鸟，以及陆龟和蜥蜴等爬行动物的卵。动物园页面还列出小型蜥蜴、蛙、昆虫和腐肉，但没有全范围比例；产品以“巢穴掠食者”为主，不写成只吃蛋。[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/gila-monster)；[San Diego Zoo Wildlife Alliance](https://animals.sandiegozoo.org/animals/gila-monster)（访问日期均为：2026-08-30）
26. 叉舌与犁鼻器帮助追踪巢穴化学线索。尾部和体腔储脂、低代谢及一次可摄入约自身体重三分之一的能力，使它能适应食物脉冲；“一年只吃三四顿”是常见推测，不应写成所有野生个体的固定次数。[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/gila-monster)（访问日期均为：2026-08-30）
27. 毒液由成对的多叶下颌腺产生，位置在下颌前外侧。各腺叶有独立导管，开口通向前部下颌沟齿基部；腺体没有蛇类那种主动高压挤毒肌。持续咬合和“咀嚼”让毒液以低压沿齿沟进入伤口，不存在上颌中空长牙注射。[Mackessy 2022](https://doi.org/10.1242/jeb.227348)（访问日期：2026-08-30）
28. 美国毒蜥并不被观察到用毒液制服常见巢内猎物。现代综述把防御性威慑视为该系统的主要选择驱动，但仍以 believed 表述；页面宜写“毒液主要被认为用于防御”，不写成已经排除一切捕食功能。受到威胁时可张大嘴并嘶声警告，但单张张口照片不能证明嘶声、攻击意图或毒液正在流动。[Mackessy 2022](https://doi.org/10.1242/jeb.227348)；[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[San Diego Zoo Wildlife Alliance](https://animals.sandiegozoo.org/animals/gila-monster)（访问日期均为：2026-08-30）
29. 2000 至 2011 年美国毒物中心资料包含 105 例人类暴露；亚利桑那 70 例咬伤中有 6 例出现气道结构水肿，3 例需紧急气道处理，该资料集无死亡。它证明多数咬伤并非致死，也证明严重并发症可以发生。[French et al. 2015](https://doi.org/10.3109/15563650.2014.988791)（访问日期：2026-08-30）
30. 2026 年同行评审病例报告记录一名 34 岁男子被宠物美国毒蜥持续咬住约 4 至 5 分钟后死亡，作者认为是由中毒时启动的连锁事件所致。旧页面中的“从未确认致死”或“不会死人”已经不能使用；一个病例也不能反过来宣称咬伤通常致命。[Massengill et al. 2026](https://doi.org/10.1177/10806032261447178)（访问日期：2026-08-30）
31. 繁殖活动集中在春末至初夏，雄性会进行仪式化摔跤。Smithsonian 给每窝 2 至 12 枚，San Diego Zoo 给 3 至 13 枚，Saguaro 2026 页面把该公园常见情况写为 4 至 5 枚；口径不同，产品正文可写“数枚革质卵”，不把一个区间当成精确全球窝卵数。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/gila-monster)；[San Diego Zoo Wildlife Alliance](https://animals.sandiegozoo.org/animals/gila-monster)；[Saguaro National Park](https://www.nps.gov/sagu/learn/nature/gila-monster.htm)（访问日期均为：2026-08-30）
32. 控制条件下卵孵化需 114 至 152 天。2018 年研究结合两窝自然产卵后的出巢监测、四窝实验孵化和一次偶然发掘的天然巢，支持幼体在秋季孵出后留在地下越冬，次年晚春至夏季出巢，产卵到地表出现相隔约 9 至 12 个月。不能把 9 至 12 个月写成卵连续孵化期。[DeNardo et al. 2018](https://doi.org/10.1098/rspb.2018.0632)（访问日期：2026-08-30）
33. 2017 年新墨西哥恢复计划出版时仍称野外秋孵或春孵尚未确定；2018 年原始研究提供了其后证据。实现应采用“秋季孵化、幼体巢内越冬”的有样本限制结论，同时注明研究并未证明所有巢都采取相同策略。[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)；[DeNardo et al. 2018](https://doi.org/10.1098/rspb.2018.0632)（访问日期均为：2026-08-30）
34. 主要威胁是生境丧失和改变、道路死亡、犬猫捕食、非法采集和因恐惧而杀害；作用强度因地点而异。恢复计划没有证明这些因素在每个地方造成同样的种群下降。[New Mexico Gila Monster Recovery Plan](https://wildlife.dgf.nm.gov/download/gila-monster-recovery-plan/?wpdmdl=43245)（访问日期：2026-08-30）
35. 2025 年莫哈韦荒漠模型显示，高排放情景下许多低海拔适生区到 2082 年明显收缩，高海拔新增适生区可能超出自然扩散能力。研究范围是北部边缘的莫哈韦和内华达遥测点，不能把结果写成整个索诺兰核心区必然收缩相同比例。[Hromada et al. 2025](https://doi.org/10.1002/ece3.71008)（访问日期：2026-08-30）
36. 城市冲突个体的简单搬迁并非无害。25 只“滋扰”个体研究中，近距离移动者常返回原地，远距离移动者出现异常大范围移动并失去熟悉庇护资源；页面应引导联系主管机构，而不是建议公众自行抓捕和远迁。[Sullivan et al. 2004](https://doi.org/10.1016/j.biocon.2003.07.002)（访问日期：2026-08-30）
37. Exendin-4 的发现启发了 exenatide。FDA 资料明确写 exenatide 是这种美国毒蜥唾液激素的合成版本；药物不是从现生动物持续采毒获得，也不能把所有 GLP-1 药物或 semaglutide 统称为“美国毒蜥毒液药”。[FDA pharmacology review](https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/209210Orig1s000PharmR.pdf)（访问日期：2026-08-30）

## 名称与分类实现

建议字段：

~~~ts
id: 'species-heloderma-suspectum',
slug: 'gila-monster',
names: {
  zh: '美国毒蜥',
  en: 'Gila Monster',
  aliases: [
    '希拉毒蜥',
    '吉拉毒蜥',
    '钝尾毒蜥',
    'Monstruo de Gila',
    'Lagarto de Gila',
  ],
},
scientificName: 'Heloderma suspectum',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Reptilia', zhName: '爬行纲' },
  order: { scientificName: 'Squamata', zhName: '有鳞目' },
  family: { scientificName: 'Helodermatidae', zhName: '毒蜥科' },
  genus: { scientificName: 'Heloderma', zhName: '毒蜥属' },
},
~~~

Gila Monster 已作为英文主名，不在 aliases 重复。传统亚种名和 Banded/Reticulate Gila Monster 不进入主档别名，避免搜索结果暗示产品承认一条未解决的亚种边界。

“世界仅两种有毒蜥蜴”也不要进入简介。现代文献对 venomous reptile 的定义和物种数量均已变化；稳定说法是“少数拥有专门化、研究充分的毒液输送系统的蜥蜴之一”，以及“美国原生唯一具有这种成熟下颌毒液系统的蜥蜴”。

## IUCN、法律状态与数量口径

推荐实现：

~~~ts
conservation: conservation('NT', 'decreasing', 2007),
metrics: {},
~~~

四个字段边界如下：

| 字段 | 使用值 | 理由 |
| --- | --- | --- |
| code | NT | 截止 IUCN 2026-1，现行物种评估仍是 2007 年 NT。 |
| trend | decreasing | 取自全球评估，不由局地照片数或州恢复项目覆盖。 |
| assessedYear | 2007 | 评估年，不写查询年 2026。 |
| criteria | 省略 | A2、A3、A4 是接近 VU 的说明，不是 NT 正式 criteria 字符串。 |

法律体系分开展示：

| 体系 | 当前口径 | 不能推出的结论 |
| --- | --- | --- |
| IUCN | NT，decreasing，2007 | 不是法律禁令，也不是 2026 年新普查。 |
| CITES | Heloderma spp. 附录 II，H. suspectum 受其覆盖 | 不是附录 I，也不是绝对禁止一切国际移动。 |
| 墨西哥 NOM-059 | Amenazada，代码 A，非墨西哥特有 | 不能换算成 IUCN VU 或 EN。 |
| 美国州法 | 各原生分布州保护，具体类别和许可规则不同 | 不能合成一个统一“联邦濒危”等级。 |
| 美国 ESA | 2011 犹他 DPS 请愿为 not substantial | 不是已列名，也不是对全物种安全性的认定。 |

没有可靠的现行全球成熟个体范围，metrics 保持空对象。Saguaro 项目的约 700 个照片识别个体、一个 8 英里道路区域的模型估计，以及新墨西哥局地记录都不能填入 estimatedMatureIndividuals。

## 分布、生境、海拔与地图

推荐字段：

~~~ts
distribution: {
  realms: ['terrestrial'],
  continents: ['北美洲'],
  regions: [
    '美国西南部与墨西哥西北部',
    '索诺兰荒漠核心分布区',
    '莫哈韦荒漠与奇瓦瓦荒漠西缘',
  ],
  countries: ['美国', '墨西哥'],
  range:
    '原生分布从美国犹他州西南端、内华达州南部和加利福尼亚州东南端，经亚利桑那州与新墨西哥州西南部，向南进入墨西哥索诺拉州并到达锡那罗亚州最北端；核心范围位于亚利桑那和索诺拉。',
  center: { lat: 32.3, lng: -111.4 },
},
~~~

不设置 endemicTo。该种可称“美国西南部与墨西哥西北部的区域性原生种”，但不是美国或墨西哥单国特有。center 只把地图视口放在索诺兰核心区，不代表密度中心、精确洞穴或可公开采集地点。

推荐生境：

| name | realm | isPrimary | 推荐描述 | 边界 |
| --- | --- | ---: | --- | --- |
| 岩质荒漠灌丛与山麓 | terrestrial | true | 索诺兰和莫哈韦荒漠中有灌木覆盖的岩质坡、bajada、山脚与巨石地，为觅食、体温调节和庇护提供连续微生境。 | 不等于裸沙沙丘；一张索诺兰画面不代表全部范围。 |
| 峡谷、冲沟与 wash 周边 | terrestrial | 省略 | 岩石峡谷、arroyos 和季节性冲沟附近常有较高地形异质性、植被和湿度。 | 不是依赖常年流水的淡水物种，不把 realms 加为 freshwater。 |
| 半荒漠草地与北墨西哥刺灌丛 | terrestrial | 省略 | 草地、灌丛和稀疏林缘可被利用，尤其在有岩石和可靠地下退避处时。 | 避免把开阔平地、清理农地或所有草地都写成同等适生。 |
| 地下庇护所网络 | terrestrial | 省略 | 石缝、巨石下空腔、林鼠巢堆、钙结层洞穴及其他动物洞穴帮助保存水分、缓冲温度并提供季节性退避处。 | 这是生境结构，不是另一生态 realm；图片不得臆造统一洞穴剖面。 |

metrics.elevationM 留空。可以在正文说明记录从近海平面延伸到至少约 2,134 米，但必须紧接“后者是 Saguaro 国家公园记录，旧全球资料与机构概括上限较低”。不要构造 [0, 2134] 这一貌似完整的实测范围。

## 体尺、外形、食性与活动

推荐体尺：

~~~ts
measurements: {
  length: {
    max: 0.56,
    unit: 'm',
    note:
      'Smithsonian 与 Saguaro NPS 的四舍五入总长上限；USGS 为 0.50 m、San Diego Zoo 为 0.55 m，不构成成年封闭范围或绝对纪录',
  },
},
metrics: {},
~~~

不填 weight。0.7 至 1.4 千克、可达 2.3 千克或更重来自不同设施摘要，无法在一个连续区间里保留个体状态和资料口径。也不填 adultLengthCm；0.56 米是物种页面上限，不是成年最小值至最大值样本。

推荐食性、活动与标签：

~~~ts
diet: {
  types: ['carnivore'],
  foods: [
    '地面或低位筑巢鸟类的卵与雏鸟',
    '幼兔、幼地松鼠和其他巢内幼年哺乳类',
    '陆龟、蜥蜴等爬行动物的卵',
    '偶见的小型蜥蜴、蛇、蛙、无脊椎动物与腐肉',
  ],
  description:
    '以寻找脊椎动物巢内容物为核心的肉食者，靠叉舌追踪化学线索，取食鸟卵、雏鸟、巢内幼年哺乳类和爬行动物卵。动物园资料列出的其他小型猎物与腐肉没有全范围比例，不应取代主要食谱。',
},
activity: [
  '大部分时间在地下庇护',
  '春季地表活动较集中',
  '昼夜节律随季节和温度改变',
  '降雨期地表活动增加',
  '掘穴并利用既有洞穴',
  '独居为主',
  '繁殖期雄性仪式化争斗',
],
tags: [
  '毒蜥科',
  '北美荒漠',
  '珠状骨鳞',
  '巢穴掠食',
  '下颌毒腺',
  '地下生活',
  'CITES附录II',
],
~~~

外形文本应包含：黑色钝吻、宽头、小眼、珠粒状背鳞、短壮四肢、每足五趾、短而肥厚的储脂尾、黑色分叉舌，以及黑底上的粉红至橙黄色斑带。不要从头宽、尾形或花纹静态判断性别和亚种。

## 推荐摘要与描述

~~~ts
summary:
  '美国西南与墨西哥西北荒漠中的粗壮毒蜥，以珠粒状骨鳞、黑橙花纹和下颌沟齿著称；它多数时间藏在地下，春季循气味寻找鸟兽与爬行动物的巢。',
description:
  '美国毒蜥是毒蜥科的粗壮陆栖蜥蜴，原生范围横跨美国西南部与墨西哥西北部，以亚利桑那和索诺拉为核心。成体总长可达约 56 厘米，黑色吻端、珠粒状骨鳞、短厚尾和粉红至橙黄色斑带构成醒目标志。它依赖岩质山麓、冲沟和地下庇护所，地表活动随季节、温度和降雨改变；主要循化学线索寻找鸟卵、雏鸟、幼年哺乳类和爬行动物卵。多叶毒腺位于下颌，毒液靠持续咬合沿沟齿低压进入伤口，主要被认为承担防御功能。IUCN 当前仍沿用 2007 年近危、下降评估，生境丧失、道路死亡、非法采集和人为杀害持续造成局地压力。',
~~~

摘要不写“最毒蜥蜴”“只吃四顿”“完全夜行”或“咬伤从不致死”。描述也不把传统横带、网纹花纹当作已解决的亚种诊断。

## 六个 story candidates

~~~ts
storySections: [
  {
    key: 'beads-pattern-and-tail',
    label: '珠状皮甲',
    title: '每一片花纹下面还有细小骨甲',
    body:
      '美国毒蜥宽头、短腿、尾巴肥厚，背部和体侧的珠粒状鳞片下埋着 osteoderms。黑底上的粉红、橙或淡黄色花纹还可帮助照片识别个体。横带和网纹之间没有一条可凭单张照片稳妥划出的现行亚种线，所以图集只展示物种级外形。',
  },
  {
    key: 'seasons-belowground',
    label: '地下季节表',
    title: '多数日子藏在石缝和洞穴里',
    body:
      '地下庇护所缓冲热、冷和干旱，也构成觅食与繁殖活动的起点。春季较常在早晨或傍晚出地面，盛夏可转为夜行，季风雨后又可能出现活动峰。冬季偶尔到洞口晒太阳，因此“全年夜行”与“固定冬眠月份”都过于整齐。',
  },
  {
    key: 'following-a-nest-scent',
    label: '巢穴掠食',
    title: '叉舌追的是巢里的食物',
    body:
      '黑色分叉舌收集空气和地面的化学线索，帮助它找到鸟、哺乳类和爬行动物的巢。卵、雏鸟、幼兔和幼年啮齿类是核心猎物。它能一次摄入很大一餐并把能量储存在尾部和体内，但没有证据要求每只野生个体一年恰好吃三四顿。',
  },
  {
    key: 'warning-before-biting',
    label: '张口警戒',
    title: '张口与嘶声是近距离警告',
    body:
      '受到威胁时，美国毒蜥可能张口并嘶声警戒；若被抓持或逼到近处，也可能咬住。静帧只能重建张口姿势，不能证明画中个体正在攻击，也看不见毒液是否流动。真正咬住后，多叶下颌腺的毒液会随持续咬合沿沟齿低压进入伤口。',
  },
  {
    key: 'hatch-before-emergence',
    label: '巢内越冬',
    title: '孵出与钻出地面相隔数月',
    body:
      '实验孵化需要 114 至 152 天。有限的天然巢证据显示幼体可在秋季孵出，留在巢内越冬，到次年晚春或夏季才来到地表，因此从产卵到出巢约 9 至 12 个月。把这段时间全部叫作“孵化期”会混淆胚胎发育与幼体滞留。',
  },
  {
    key: 'telemetry-through-hidden-seasons',
    label: '无线电遥测',
    title: '地下生活要靠信号拼回轨迹',
    body:
      '美国毒蜥大部分时间藏在地下，研究者结合无线电遥测、野外记录与个体花纹照片，才能估计出地表活动、庇护所利用和移动。追踪结果受地点、季节、性别、样本和计算方法影响；一张手持天线的情景图既不能证明可见个体携带发射器，也不能代表全球家域或数量。',
  },
],
~~~

## Key facts

以下提供 31 条，实施至少保留 18 条：

~~~ts
keyFacts: [
  '现行学名为 Heloderma suspectum Cope, 1869，属于有鳞目、毒蜥科、毒蜥属。',
  '传统名录仍列两个亚种，但分子研究没有稳固支持横带型与网纹型的二分边界。',
  '产品主档保持物种级，不用花纹给单张图片诊断亚种。',
  '原生范围跨美国与墨西哥，不是任一国家特有种。',
  '分布核心在亚利桑那州和墨西哥索诺拉州，并延伸至周边四个美国州和锡那罗亚最北端。',
  'IUCN 截止 2026-1 仍沿用 2007 年近危、下降评估。',
  'A2、A3、A4 是接近易危阈值的说明，不进入 NT 条目的正式 criteria 字段。',
  'CITES 通过 Heloderma 属级条目把美国毒蜥列入附录 II。',
  '墨西哥 NOM-059 把它列为 Amenazada，代码 A，并注明非墨西哥特有。',
  '2011 年犹他 DPS 请愿未获推进，不等于美国毒蜥已列入联邦 ESA。',
  '它偏好有岩石和灌木覆盖的山麓、bajada、峡谷与冲沟，通常回避清理农地和广阔开阔平地。',
  '石缝、巨石下空腔、林鼠巢堆和其他动物洞穴是关键季节性庇护所。',
  '总长可达约 56 厘米；这是机构页面的四舍五入上限，不是成年封闭范围。',
  '现有体重摘要从 0.7 至 1.4 千克到可达 2.3 千克以上不等，不适合填统一体重范围。',
  '黑色吻端、珠粒状骨鳞、宽头、短壮四肢和短厚储脂尾是主要识别特征。',
  '四足各有五趾和弯爪，舌为黑色并深度分叉。',
  '个体花纹可用于照片识别，但不能从单帧可靠判断性别。',
  '大部分时间在地下；超过 95% 是综合近似值，不是每只个体的固定计时结果。',
  '春季较常在白天早晚活动，夏季高温时可转为夜行，地表活动常随降雨增加。',
  '食谱核心是鸟、哺乳类与爬行动物巢内的卵和幼体，不是只吃鸟蛋。',
  '尾部和体内储脂、低代谢和大餐能力帮助它应对沙漠中脉冲式食物供应。',
  '成对多叶毒腺位于下颌前外侧，不在蛇类常见的眼后上颌位置。',
  '毒液经独立导管到达前部下颌沟齿基部，再靠持续咬合低压进入伤口。',
  '美国毒蜥没有中空上颌长牙，也不会像喷毒蛇那样喷射毒液。',
  '毒液主要被认为承担防御功能，因为常见巢内猎物不需要中毒制服。',
  '2015 年毒物中心分析记录过危及气道的严重并发症。',
  '2026 年发表的病例报告使“美国毒蜥咬伤从未致死”成为过时表述。',
  '繁殖期雄性会进行仪式化摔跤，静态外形本身不能验明两只动物的性别。',
  '实验卵孵化期为 114 至 152 天，不能写成 9 至 12 个月。',
  '有限天然巢证据支持幼体秋季孵出后在巢内越冬，产卵到地表出巢约 9 至 12 个月。',
  'FDA 资料把 exenatide 定义为 exendin-4 的合成版本，不需要持续从美国毒蜥采毒。',
],
~~~

## 威胁与保护行动

推荐 threats：

~~~ts
threats: [
  '城市扩张、农业清理、运河与能源设施改变荒漠灌丛、山麓和冲沟生境',
  '道路切割季节性移动路径并造成车辆撞击，雨后和活动季的局地风险更高',
  '巨石、洞穴、林鼠巢堆和灌木被清除，减少温湿度稳定的关键庇护所',
  '非法采集和宠物贸易对易接近的局地种群造成压力，精确地点公开也会增加风险',
  '因恐惧或误解而故意杀害；多数自然相遇并不等于主动攻击',
  '靠近住宅时遭犬猫捕杀，影响强度随地点而异',
  '更高温度和更强干旱可能加剧脱水并压缩地表活动窗口；现有未来模型主要来自莫哈韦北缘',
],
~~~

推荐 conservationActions：

~~~ts
conservationActions: [
  '保护并连接岩质山麓、bajada、峡谷、wash 和灌木覆盖路径，同时保留不同季节可用的地下庇护所',
  '用道路死亡记录、遥测和季节活动数据确定局地穿越热点，再配置限速、涵洞或其他适地缓解措施',
  '执行各州采集禁令、墨西哥 NOM-059 与 CITES 附录 II 许可管理，避免公开敏感洞穴和繁殖地点',
  '利用背部与体侧独特花纹开展非接触照片识别，并把照片、日期和粗尺度地点交给主管监测项目',
  '城市冲突由受训野生动物机构处置；不鼓励公众抓取、触碰或长距离搬迁个体',
  '搬迁方案先评估原家域、熟悉庇护资源和释放距离，持续跟踪返回、异常移动、存活与新的冲突',
  '在莫哈韦北缘保护中等坡度和较高灌木覆盖的移动通道，并监测低海拔热旱压力与高海拔适生区可达性',
  '拴系家犬、减少宠物靠近洞穴，并用准确的咬伤风险教育替代夸张传说和报复性杀害',
],
~~~

保护行动不能简化成“发现后搬到远处”。Sullivan 等的研究恰好说明熟悉庇护所对个体重要，远迁可能把冲突转化为高移动和生存风险。也不要以“多数土地为公有”推断庇护网络、道路连通性或气候暴露已经安全。

## 四项 featured stats

~~~ts
featuredStats: [
  {
    key: 'rounded-total-length',
    label: '最大总长概括',
    value: '约56',
    unit: '厘米',
    note: 'Smithsonian 与 Saguaro NPS 的四舍五入上限；不是成年封闭范围或绝对纪录',
  },
  {
    key: 'time-in-shelter',
    label: '地下隐蔽时间',
    value: '>95',
    unit: '%',
    note: '遥测与自然史综合近似；地点、季节和研究方法会改变比例',
  },
  {
    key: 'laboratory-incubation',
    label: '实验卵孵化期',
    value: '114—152',
    unit: '天',
    note: '控制条件下从产卵到孵出，不含幼体孵出后的巢内越冬',
  },
  {
    key: 'oviposition-to-emergence',
    label: '产卵至地表出巢',
    value: '约9—12',
    unit: '个月',
    note: '有限天然巢观察；幼体秋季孵出后可留在巢内越冬，不等于孵化期',
  },
],
~~~

不要用窝卵数做统计卡：Smithsonian 的 2 至 12、San Diego Zoo 的 3 至 13 和 Saguaro 的局地常见 4 至 5 不是同一口径。也不要用现有公园照片数、局地密度、统一体重或“每年三四顿”做首页数字。

## 六张 1536 × 1024 静态图片场景与科学边界

六张图统一采用 3:2 横图、1536 × 1024、sRGB、单帧不透明图像。画面不含文字、数字、箭头、标尺、图标、商标、签名或水印。统一 credit 可用 Fauna Atlas · AI 生成科学情景重建。

通用形态约束：粗壮低矮四足蜥蜴，宽而钝的黑色吻端，小眼，短壮四肢，四足各五趾和弯爪，短而肥厚但逐渐收尖的尾；背部与体侧为珠粒状鳞片，腹面较平。体色以黑为底，混合粉红、橙、鲑红或淡黄的横带与网斑。黑色分叉舌只在伸舌场景出现。禁止蛇形身体、鬣蜥背棘、巨蜥长颈长尾、壁虎大眼趾垫、角蜥棘冠、响尾，以及任何喷毒效果。

| 序号与用途 | 稳定文件名建议 | 场景与最终提示词要点 | 科学边界与验收点 | 建议 caption |
| --- | --- | --- | --- | --- |
| 01 封面 | 01-rocky-desert-scrub-adult-portrait-source.png / 01-rocky-desert-scrub-adult-portrait.webp | 索诺兰型岩质荒漠灌丛坡面，恰好一只完整成年美国毒蜥横向停行；远景可见灌木、碎石山坡和少量柱状仙人掌，身体、四肢和尾端完整，黑色吻端与珠状鳞片清楚。 | 这是代表性核心生境重建，不冒充具体公园或全分布区；不显示人、道路、猎物、捕捉或可定位地点。花纹混合横带与网斑，不标亚种、性别或个体来源。 | 一只成年美国毒蜥停行于索诺兰型岩质荒漠灌丛；画面重建代表性核心生境，不指认亚种、性别或具体地点。 |
| 02 形态识别 | 02-beaded-scales-diagnostic-profile-source.png / 02-beaded-scales-diagnostic-profile.webp | 恰好一只成年个体在浅色碎石地呈完整低位侧姿，头至尾不裁切；黑吻、小眼、珠粒状背鳞、短壮四肢和短厚收尖的尾清楚，嘴闭合、舌不外露。 | 这是一张 species-level 外形与鳞片质感图，不是趾数解剖图。近侧足趾较清楚，远侧足受身体和透视遮挡，不据此声称四足五趾均逐一可数；不得从头宽、尾形或花纹诊断性别、年龄、体重、绝对长度或传统亚种。 | 完整侧姿突出美国毒蜥的黑吻、珠粒状鳞片、短壮四肢和肥厚尾；透视遮挡的足趾不用于解剖计数，花纹也不诊断亚种。 |
| 03 岩洞入口 | 03-rock-burrow-entrance-source.png / 03-rock-burrow-entrance.webp | 恰好一只完整成年个体位于岩板下自然洞口前的干燥岩土上；洞口有碎石、根系和稀疏灌木，画面不做地下剖面，蜥蜴嘴闭合、身体完全在洞外。 | 画面说明关键庇护结构，不证明这只可见个体实际占用该洞、刚结束冬季隐蔽或即将入洞；不臆造地下房间、水池、巢卵或与其他动物共居。 | 美国毒蜥常利用岩板下空腔和既有洞穴作为庇护；这幅入口情景重建不证明画中个体的洞穴占用、季节状态或地下结构。 |
| 04 巢食搜索 | 04-ground-nest-egg-foraging-source.png / 04-ground-nest-egg-foraging.webp | 低矮灌木旁的浅地面鸟巢，恰好一只成年美国毒蜥低头伸出黑色分叉舌，接近恰好三枚完整、淡色细斑、鹌鹑大小的卵；卵未破，巢中无成鸟、雏鸟或其他动物。 | 三枚卵只是可控构图，不代表完整窝卵数或食物比例；不指定鸟种，不画追杀、血、蛋液或毒液。caption 只称代表性巢食。 | 美国毒蜥以叉舌追踪地面巢穴的化学线索；三枚完整小型鸟卵只代表一种常见猎物，不是完整窝卵数或饮食比例。 |
| 05 防御性张口 | 05-defensive-mouth-posture-source.png / 05-defensive-mouth-posture.webp | 岩质荒漠灌丛近景，恰好一只完整成年个体四足支撑、抬头张开嘴，口腔可见但小型牙列没有清楚分辨；画面没有人、捕食者、伤口、血、唾液拉丝或可见毒液。 | 这是可能出现在防御警戒中的张口姿势重建。静帧不能证明嘶声、攻击意图、即将咬合或毒液分泌量，也不能用于判断牙齿形态；caption 不称正在攻击。 | 美国毒蜥受压时可能张口并嘶声警戒；这幅无接触情景只重建张口姿势，不证明攻击意图、咬合或毒液流动。 |
| 06 生境遥测 | 06-radio-telemetry-habitat-monitoring-source.png / 06-radio-telemetry-habitat-monitoring.webp | 索诺兰型岩质山谷广景，右下恰好一只完整美国毒蜥，左侧恰好两名研究人员保持距离；一人手持定向天线和接收器，另一人用夹板记录，画面没有捕捉、触摸、道路、车辆或外露项圈。 | 天线与记录板表达无线电遥测工作流程；不可见的内部发射器不能由图像验收，故不声称可见个体已植入标签、设备正在收到它的信号或研究人员知道其性别。单帧也不支持家域、种群数量或趋势结论。 | 研究者可用定向天线和野外记录研究美国毒蜥的移动与庇护所利用；此图为非接触方法重建，不证明可见个体携带发射器或正在回传信号。 |

图片 04、05 和 06 的叙事越界风险最高。04 必须正好三枚完整小型鸟卵，并把数量解释为构图而非完整窝卵数；05 只能称防御性张口姿势重建，不能宣称正在攻击、咬合或排毒；06 只能称遥测方法重建，不能由看不见的装置推断可见个体已携带发射器或正在回传信号。图片 02 可展示物种级鳞片和轮廓，但远侧趾被遮挡，不能作为“四足各五趾均已视觉验收”的证据。

## 建议 SpeciesSource 登记

以下精确选择 18 个唯一 HTTPS URL，覆盖 taxonomy、conservation、distribution、ecology、general 五种 schema 类型：

~~~ts
const GILA_MONSTER_SOURCES = [
  {
    title: 'ITIS: Heloderma suspectum, TSN 174113',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=174113',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database: Heloderma suspectum',
    url: 'https://reptile-database.reptarium.cz/Heloderma/suspectum',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'SSAR 2025: Scientific and Standard English Names, 9th edition',
    url: 'https://ssarherps.org/wp-content/uploads/2025/03/9th-Edition-Scientific-and-Standard-English-Names-of-Amphibians-and-Reptiles.pdf',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Douglas et al. 2010: Conservation phylogenetics of helodermatid lizards',
    url: 'https://doi.org/10.1016/j.ympev.2009.12.009',
    kind: 'taxonomy',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Heloderma suspectum (2007 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Mexico NOM-059-SEMARNAT-2010 official record',
    url: 'https://www.dof.gob.mx/nota_detalle.php?codigo=5173091&fecha=30/12/2010',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Arizona Wildlife Conservation Strategy: Heloderma suspectum',
    url: 'https://awcs.azgfd.com/species/reptiles/heloderma-suspectum',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'New Mexico Department of Wildlife: Amphibian and reptile recovery plans',
    url: 'https://wildlife.dgf.nm.gov/conservation/wildlife-species-information/amphibians-and-reptiles/',
    kind: 'distribution',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Saguaro National Park: Gila Monster',
    url: 'https://www.nps.gov/sagu/learn/nature/gila-monster.htm',
    kind: 'general',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Beck & Jennings 2003: Habitat use by Gila Monsters',
    url: 'https://doi.org/10.1655/0733-1347%282003%29017%5B0111%3AHUBGMT%5D2.0.CO%3B2',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Davis & DeNardo 2010: Seasonal body condition, hydration and activity',
    url: 'https://doi.org/10.1670/08-263.1',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'DeNardo et al. 2018: Atypical nest overwintering by hatchlings',
    url: 'https://doi.org/10.1098/rspb.2018.0632',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Mackessy 2022: Venom production and secretion in reptiles',
    url: 'https://doi.org/10.1242/jeb.227348',
    kind: 'ecology',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'FDA 2017: Exenatide pharmacology and toxicology review',
    url: 'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/209210Orig1s000PharmR.pdf',
    kind: 'general',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Massengill et al. 2026: Fatality following Gila Monster envenomation',
    url: 'https://doi.org/10.1177/10806032261447178',
    kind: 'general',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Sullivan et al. 2004: Translocation of urban Gila Monsters',
    url: 'https://doi.org/10.1016/j.biocon.2003.07.002',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
  {
    title: 'Hromada et al. 2025: Climate and dispersal limit future Mojave habitats',
    url: 'https://doi.org/10.1002/ece3.71008',
    kind: 'conservation',
    accessedAt: GILA_MONSTER_SOURCE_DATE,
  },
] satisfies readonly SpeciesSource[];
~~~

18 个 URL 互不重复。毒物中心病例系列、州级许可表和动物园尺寸页用于研究中的冲突核对，没有全部塞进产品来源数组；数组仍保留了实现每个核心模块所需的直接来源。

## 关键不确定性与禁用表述

1. 现行 IUCN 状态是 2007 年 NT、decreasing，不是 LC，也不是 2026 年新评估。
2. A2、A3、A4 只是接近 VU 的说明；禁用 conservation('NT', 'decreasing', 2007, 'A2,A3,A4')。
3. 1996 VU 到 2007 NT 的 IUCN 变动标记为非真实变化，不写成保护恢复成果。
4. 不填全球成熟个体数。公园照片识别、局地密度和州级记录不能拼成全球数量。
5. CITES 附录 II、墨西哥 Amenazada、新墨西哥州 endangered 和 IUCN NT 属于不同制度。
6. 犹他 DPS 请愿不成立不等于物种已被 ESA 列名，也不等于无风险。
7. 该种跨美国与墨西哥分布，endemicTo 省略。
8. 海拔上限资料从 1,500 米级到公园记录 2,134 米不等，metrics.elevationM 留空。
9. 0.56 米是总长上限概括，不是典型成年值、头体长或封闭范围。
10. 不把 0.7 至 1.4 千克与可达 2.3 千克以上拼成统一体重区间。
11. 横带和网纹不直接等于两个有效亚种；主图和故事都保持 species-level。
12. 不写“世界仅两种有毒蜥蜴”。毒液定义与 Heloderma 物种拆分均使旧口号失效。
13. 超过 95% 地下时间是综合近似，不是所有个体的精确终身比例。
14. 不写固定夜行性。春季日行、盛夏夜行和雨后活动都随局地条件改变。
15. 不把约 1 平方英里设为统一家域；研究地点和估算方法差异很大。
16. 美国毒蜥不是只吃蛋，也没有可靠的全物种食物百分比。
17. “一年三四顿”是推测性自然史概括，不是生理硬阈值。
18. 毒腺位于下颌前外侧；禁止蛇式眼后毒腺、中空上颌长牙、注射和喷毒画面。
19. “主要用于防御”保留推断语气，不写成已经证明毒液绝不参与捕食。
20. 2026 年病例后禁用“从未有人死于美国毒蜥咬伤”。同时不渲染为通常致命。
21. 咬伤属于医疗急症；物种页不提供撬嘴、切割或徒手移除等可能造成额外伤害的操作教程。
22. 窝卵数来源不一致，不用合成的 2 至 13 伪装成单一研究范围。
23. 114 至 152 天是实验卵孵化；9 至 12 个月是产卵到幼体地表出巢。
24. 巢内越冬证据样本有限，不写成每窝必然如此。
25. 莫哈韦 2082 年模型不代表整个索诺兰核心区的确定未来。
26. 公众不得自行捕捉或长距离搬迁；城市冲突应交给主管机构。
27. Exenatide 是合成版本，不写成现行药物从动物毒液直接提取。
28. 不把 semaglutide、所有 GLP-1 药物或特定商业减重药统称为“美国毒蜥药”。

## 实现验收建议

测试至少锁定：

~~~js
assert.equal(profile.id, 'species-heloderma-suspectum');
assert.equal(profile.slug, 'gila-monster');
assert.equal(profile.names.zh, '美国毒蜥');
assert.equal(profile.names.en, 'Gila Monster');
assert.equal(profile.scientificName, 'Heloderma suspectum');
assert.deepEqual(profile.names.aliases, [
  '希拉毒蜥',
  '吉拉毒蜥',
  '钝尾毒蜥',
  'Monstruo de Gila',
  'Lagarto de Gila',
]);
assert.deepEqual(
  getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
    rank,
    taxon.scientificName,
  ]),
  [
    ['kingdom', 'Animalia'],
    ['phylum', 'Chordata'],
    ['class', 'Reptilia'],
    ['order', 'Squamata'],
    ['family', 'Helodermatidae'],
    ['genus', 'Heloderma'],
  ],
);
assert.deepEqual(
  {
    code: profile.conservation.code,
    trend: profile.conservation.trend,
    assessedYear: profile.conservation.assessedYear,
    criteria: profile.conservation.criteria,
  },
  {
    code: 'NT',
    trend: 'decreasing',
    assessedYear: 2007,
    criteria: undefined,
  },
);
assert.deepEqual(profile.distribution.realms, ['terrestrial']);
assert.deepEqual(profile.distribution.countries, ['美国', '墨西哥']);
assert.equal(profile.distribution.endemicTo, undefined);
assert.equal(profile.measurements.length.max, 0.56);
assert.equal(profile.measurements.length.unit, 'm');
assert.equal(profile.measurements.weight, undefined);
assert.deepEqual(profile.metrics, {});
assert.equal(profile.storySections.length, 6);
assert.equal(new Set(profile.storySections.map(({ key }) => key)).size, 6);
assert.ok(profile.keyFacts.length >= 18);
assert.ok(profile.conservationActions.length >= 6);
assert.equal(profile.featuredStats.length, 4);
assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);
assert.equal(profile.sources.length, 18);
assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
assert.deepEqual(
  new Set(profile.sources.map(({ kind }) => kind)),
  new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
);
~~~

内容测试还应拒绝 LC、正式 A2/A3/A4 criteria、单国特有、统一海拔区间、统一体重区间、二亚种硬标签、只吃蛋、固定夜行、蛇式毒牙、“咬伤从不致死”、九个月孵化期和“药物直接采自动物毒液”。图片测试需确认六组源 PNG 与运行 WebP 一一对应，均为 1536 × 1024，哈希互不重复；第二图不要求被透视遮挡的远侧趾可数，第四图恰好三枚完整鸟卵，第五图没有接触、伤口或可见毒液，第六图恰好两名持天线和记录板的研究人员与一只未被接触的美国毒蜥，并拒绝“可见个体已携带发射器或正在回传信号”的 caption。
