# 眼斑电鳐（Ocellate Torpedo）物种档案研究与实现简报

- 研究对象：*Torpedo torpedo* (Linnaeus, 1758)
- 建议 slug：`ocellate-torpedo`
- 研究截止日：2026-08-31
- 用途：完成 `docs/todo.md` 中的眼斑电鳐物种档案，并约束六张静态图片的科学表述

证据口径：本简报只把现行接受种 *Torpedo torpedo* 的直接资料写成物种事实。早期生理研究常沿用异名 *Torpedo ocellata*；Catalog of Fishes 把该名列为 *T. torpedo* 的异名，因此这些明确标本来源的论文可以用于目标种。电器官的胚胎来源、电细胞排列和膜电活动细节多来自 *T. californica*、*T. marmorata* 或 *Tetronarce nobiliana*，下文把它们标成电鳐属或近缘电鳐机制，不把同属数值移植到本种。繁殖、成熟体长、胎仔数和物候随地中海与西非样本而变，所有区域定量均保留地点与样本边界。

## 可直接采用的编辑结论

1. 接受名为 *Torpedo torpedo* (Linnaeus, 1758)。WoRMS AphiaID 为 271691，原始组合是 *Raja torpedo* Linnaeus, 1758。[WoRMS 271691](https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271691)；[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo)（访问日期均为：2026-08-31）
2. Catalog of Fishes 将 *Torpedo ocellata* Rafinesque, 1810、*T. oculata* Davy, 1834 和 *T. unimaculata* Risso, 1810 等列为异名。林奈原始材料可能涉及多个种，模式仍需 lectotype 或 neotype；这不妨碍采用现行接受名，却要求页面不从原始模式产地推导完整分布。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo)（访问日期：2026-08-31）
3. 仓库分类链采用 Animalia > Chordata > Chondrichthyes > Torpediniformes > Torpedinidae > *Torpedo*。WoRMS 在自身等级体系中把 Elasmobranchii 列作 class；仓库同类物种使用 Chondrichthyes 作为 class，Elasmobranchii 可在研究说明中写作板鳃亚纲，不另占 schema 字段。[WoRMS 271691](https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271691)；[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo)（访问日期均为：2026-08-31）
4. 英文主名明确推荐 **Ocellate Torpedo**。IUCN 当前条目和 2021-2 状态变更表采用该名；FAO 2012 指南使用 Common Torpedo，可作为别名。Ocellate Torpedo 直接对应背部眼斑，也不会让读者把 common 误解为数量充足。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en)；[IUCN 2021-2 Table 7](https://nc.iucnredlist.org/redlist/content/attachment_files/2021-2_RL_Stats_Table_7.pdf)；[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)（访问日期均为：2026-08-31）
5. 中文主名采用 TODO 的“眼斑电鳐”，它是与 ocellate 和典型眼斑相符的项目编辑名。台湾鱼类资料库列大陆名“电鳐”、台湾名“电鲼”，没有给出“眼斑电鳐”这一统一标准名；`aliases` 应保留“电鳐”“电鲼”“普通电鳐”，页面不可宣称中文名已经由单一权威名录统一。[台湾鱼类资料库](https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=49&pz=50&vn=)（访问日期：2026-08-31）
6. `Atlantic Torpedo` 不可作为别名。这个英文名通常指 *Tetronarce nobiliana*，会把两种体型、斑纹、深度和分布资料混在一起。[FAO North Atlantic catalogue](https://www.fao.org/4/i3178e/i3178e.pdf)（访问日期：2026-08-31）
7. IUCN 当前全球等级为易危 VU，种群趋势 decreasing，评估日期为 2020-08-04，标准为 A2bd。字段应写 `conservation('VU', 'decreasing', 2020, 'A2bd')`；2021 是 Red List 2021-2 的发布批次，不是生物学评估年。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en)（访问日期：2026-08-31）
8. IUCN 2021-2 表显示本种由旧版 DD 更新为 VU。旧版地中海 LC、区域性状态和数据库残留 DD 不可覆盖当前全球 VU。[IUCN 2021-2 Table 7](https://nc.iucnredlist.org/redlist/content/attachment_files/2021-2_RL_Stats_Table_7.pdf)（访问日期：2026-08-31）
9. A2bd 表示评估者依据适合该类群的丰度指数和实际或潜在开发水平推断过去种群缩减，且下降驱动未必已经停止。页面可解释证据类型，不把标准改写为精确普查。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en)；[Dulvy et al. 2021](https://doi.org/10.1016/j.cub.2021.08.062)（访问日期均为：2026-08-31）
10. 严格分布为地中海、马尔马拉海及东大西洋，从比斯开湾南部沿伊比利亚和西非海岸延伸到安哥拉。Catalog of Fishes 还明确列入圣多美和普林西比；佛得角文献把本种列为群岛既有电鳐之一。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo)；[FAO North Atlantic catalogue](https://www.fao.org/4/i3178e/i3178e.pdf)；[Cabo Verde Oryx record](https://www.cambridge.org/core/journals/oryx/article/first-records-of-the-west-african-torpedo-in-cabo-verde-archipelago-eastern-atlantic/2F4DD22111191A25BEBB18CF9168EC97)（访问日期均为：2026-08-31）
11. 黑海、红海、印度洋、西大西洋和南非不进入范围。北至比利时的零星报告在 FAO 成熟度图谱中被注明存疑；地图北界应写“比斯开湾南部”，不扩到北海。[FAO Atlas of maturity stages](https://www.fao.org/3/ca2740en/ca2740en.pdf)；[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo)（访问日期均为：2026-08-31）
12. `countries` 采用代表性范围国，不假装是逐岛、逐海湾的完整发生名录。地中海沿岸可收录法国、西班牙、意大利、马耳他、斯洛文尼亚、克罗地亚、黑山、阿尔巴尼亚、希腊、塞浦路斯、土耳其、叙利亚、黎巴嫩、以色列、埃及、利比亚、突尼斯、阿尔及利亚和摩洛哥；东大西洋可收录葡萄牙、毛里塔尼亚、塞内加尔、佛得角、几内亚比绍、几内亚、塞拉利昂、利比里亚、科特迪瓦、加纳、贝宁、尼日利亚、喀麦隆、赤道几内亚、圣多美和普林西比、加蓬、刚果共和国和安哥拉。[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)；[FAO vulnerable bycatch guide](https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf)；[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo)（访问日期均为：2026-08-31）
13. 主要生境是近岸大陆架沙底与泥底。FAO 2012 指南给出 5 至 100 米，2019 兼捕识别指南写内陆架软底、通常至约 70 米；档案应把这段写成核心生境，不把单一数字伪装成硬边界。[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)；[IUCN vulnerable bycatch guide](https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf)（访问日期均为：2026-08-31）
14. 汇编数据库有 2 至 400 米的较宽发生范围，但强证据仍指向浅层软底。`metrics.maxDiveDepthM` 应留空：400 米是底栖出现记录上限，不是主动“潜水”能力，也不是典型栖息深度。[FAO North Atlantic catalogue](https://www.fao.org/4/i3178e/i3178e.pdf)；[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)（访问日期均为：2026-08-31）
15. 西西里研究在 4 至 25 米沙底和沙石混合底、邻近 *Posidonia oceanica* 海草床处采到本种。页面可把海草床边缘写成局地利用环境，不把海草床改成全范围主要生境。[Tiralongo et al. 2019](https://doi.org/10.1080/24750263.2019.1696419)（访问日期：2026-08-31）
16. 成体轮廓是厚实、近圆形的胸鳍盘，前缘宽钝，尾短而粗，具有两个分离的背鳍和发达尾鳍。皮肤光滑，无鳞、无棘和无尾刺；口、鼻孔及五对鳃裂位于腹面，眼和喷水孔位于背面。[FAO North Atlantic catalogue](https://www.fao.org/4/i3178e/i3178e.pdf)；[IUCN vulnerable bycatch guide](https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf)（访问日期均为：2026-08-31）
17. 背面通常为黄褐、浅褐至红褐色，典型有五枚大型蓝色中心眼斑，眼斑外有深色环和浅黄至橙黄色环。腹面白至乳白。喷水孔边缘有 8 至 10 枚短小三角形乳突，较大个体的乳突可能不醒目。[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)；[IUCN vulnerable bycatch guide](https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf)（访问日期均为：2026-08-31）
18. 五枚眼斑是典型型态，不是固定计数。2006 年论文综述了零至九枚眼斑的个体，并报告一尾九斑个体；九枚只是该论文当时的最高记录，页面不可把它写成截至 2026 年不可超越的物种上限。[Capapé et al. 2006](https://acta.izor.hr/ojs/index.php/acta/article/view/182)（访问日期：2026-08-31）
19. 可采用的最大总长为 60 厘米。FAO 2012 指南同时给出常见总长 30 至 40 厘米；`measurements.length.max` 填 `0.6 m`，note 写明它是汇编最大值，常见个体较小。[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)；[IUCN vulnerable bycatch guide](https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf)（访问日期均为：2026-08-31）
20. 体重、寿命、速度、典型成体长度区间和成熟个体数缺少可跨范围落库的可靠综合，全部留空。区域研究的最大个体为埃及 40.8 厘米、拉齐奥 47.7 厘米和塞内加尔 55.0 厘米，差异说明单一局地样本不宜定义全球常见成体。[Abdel-Aziz 1994](https://doi.org/10.1071/MF9940693)；[Consalvo et al. 2007](https://doi.org/10.3989/scimar.2007.71n2213)；[Capapé et al. 2000](https://raco.cat/index.php/Mzoologica/article/view/90040)（访问日期均为：2026-08-31）
21. 食性以鱼类为主，甲壳类为次要成分。西西里 164 尾样本的胃含物显示它是广食性的鱼食者，猎物包括底栖与近底层鱼类，Levins 指数为 0.82；这个指数只代表该地点、季节和取样方法。[Tiralongo et al. 2019](https://doi.org/10.1080/24750263.2019.1696419)（访问日期：2026-08-31）
22. 埃及地中海研究也发现鱼类占主要食物，甲壳类贡献较小；幼体食谱较宽，成体样本只见鱼类。页面可以写“以小型鱼类为主，兼食甲壳类”，不写固定比例。[Abdel-Aziz 1994](https://doi.org/10.1071/MF9940693)（访问日期：2026-08-31）
23. 以异名 *Torpedo ocellata* 发表的新生个体实验记录了直接伏击行为：幼体从沙中冲出，把活鱼压在胸鳍盘下，再用身体动作把鱼送入口部。该行为来自圈养新生个体和孔雀鳚猎物，能够支撑“埋沙伏击”，不能量化野外成功率、猎物大小或成年行为频率。[Michaelson et al. 1979](https://doi.org/10.1111/j.1095-8649.1979.tb03579.x)（访问日期：2026-08-31）
24. 夜间布设渔网和零散潜水观察不足以证明本种普遍夜行。`activity` 应写“可半埋于沙中伏击；全范围昼夜节律尚未量化”，不写“夜行性独居伏击者”。[Tiralongo et al. 2019](https://doi.org/10.1080/24750263.2019.1696419)（访问日期：2026-08-31）
25. 同一新生个体研究测得日龄约一天时放电约 4 伏，前三周升至约 20 伏，四个月时趋近约 26 伏。样本为圈养新生及幼体，数值只适合展示早期放电能力随生长增强，不代表成年常态、成年峰值或野外致伤阈值。[Michaelson et al. 1979](https://doi.org/10.1111/j.1095-8649.1979.tb03579.x)（访问日期：2026-08-31）
26. FAO 2012 指南给出 40 至 200 伏的物种级汇编范围。页面如保留，必须标成指南汇编值；不得与新生实验串成同一条生长曲线，也不得写成每尾成体都能稳定输出 200 伏。[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)（访问日期：2026-08-31）
27. 成对电器官位于胸鳍盘内、头部两侧，外观近肾形。它们是内部组织，正常背面照片只能见到盘形轮廓，不能画成两块外露器官或发光斑。[FAO North Atlantic catalogue](https://www.fao.org/4/i3178e/i3178e.pdf)；[Mate et al. 2011](https://doi.org/10.1186/2044-5040-1-20)（访问日期均为：2026-08-31）
28. 电鳐属研究支持以下机制：肌源性电细胞形成扁平堆叠，运动神经末梢释放乙酰胆碱，烟碱型受体开启离子通道，许多电细胞同步去极化；串联提高电压，并联提高电流。发育起源和精细排列主要来自 *T. californica* 与 *T. marmorata*，电生理来自 *Tetronarce nobiliana*，页面必须标成同属或近缘机制。[Mate et al. 2011](https://doi.org/10.1186/2044-5040-1-20)；[Mellinger et al. 1978](https://doi.org/10.1016/0012-1606(78)90307-X)；[Bennett et al. 1961](https://doi.org/10.1085/jgp.44.4.757)（访问日期均为：2026-08-31）
29. 目标种旧异名材料的电器官膜研究直接确认烟碱型乙酰胆碱受体及其离子通道。它支撑受体机制，不支撑把药理实验浓度、结合位点数或实验膜制备图画成野外放电参数。[Aronstam et al. 1981](https://doi.org/10.1016/S0021-9258(19)69691-2)（访问日期：2026-08-31）
30. 放电在水下不可见。六张图均不得画闪电、蓝色光弧、发光水体或猎物焦痕；图注也不写“这一下有 X 伏”。概念图可用普通箭头表示神经信号或膜电位方向，并明确是示意。[Michaelson et al. 1979](https://doi.org/10.1111/j.1095-8649.1979.tb03579.x)；[Bennett et al. 1961](https://doi.org/10.1085/jgp.44.4.757)（访问日期均为：2026-08-31）
31. 本种为胎生且无胎盘。FAO 成熟度图谱采用“lecithotrophic, yolk-sac viviparity”，原始论文常写 aplacental viviparity；胚胎起初依赖卵黄，不能画卵壳、海床卵囊或哺乳动物式胎盘。[FAO Atlas of maturity stages](https://www.fao.org/3/ca2740en/ca2740en.pdf)；[Abdel-Aziz 1994](https://doi.org/10.1071/MF9940693)（访问日期均为：2026-08-31）
32. 拉齐奥 535 尾样本估计雄、雌 50% 成熟总长分别为 249 与 258 毫米；26 尾怀孕雌鱼有 4 至 19 个胚胎，推定妊娠约六个月，晚冬至早春排卵，八月底至九月初产仔。以上仅代表 2000 至 2001 年中地中海样本。[Consalvo et al. 2007](https://doi.org/10.3989/scimar.2007.71n2213)（访问日期：2026-08-31）
33. 埃及地中海样本报告雄、雌成熟总长约 18 与 22 厘米，妊娠五至六个月，交配约在十二月至二月，产仔约在八月底至九月。它与拉齐奥成熟值不同，因此 schema 不填单一全球成熟体长。[Abdel-Aziz 1994](https://doi.org/10.1071/MF9940693)（访问日期：2026-08-31）
34. 塞内加尔样本更大，推定妊娠六至八个月，出生总长 102 至 125 毫米，广义繁殖力 5 至 28。胚胎与卵母细胞干重比为 1.58，作者据此认为母体贡献不可忽略；这与 FAO 的简化“卵黄囊胎生”标签形成术语张力。安全写法是“无胎盘胎生，胚胎以卵黄为主，西非干重平衡提示可能还有有限母体补给”。[Capapé et al. 2000](https://raco.cat/index.php/Mzoologica/article/view/90040)（访问日期：2026-08-31）
35. 比塞大潟湖研究又得到雄、雌成熟总长 235 与 245 毫米、窝仔 3 至 13 等区域值。地中海和西非差异可能包含地理、样本结构和方法效应，页面不把 3 至 28 合并成无边界的固定胎仔范围。[Reynaud & Capapé 2013](https://doi.org/10.1134/S0032945213060118)（访问日期：2026-08-31）
36. 主要已证实压力是底拖网、刺网和三层刺网等底层渔业兼捕。西西里研究直接来自乌贼三层刺网丢弃物，FAO 指南也列出底拖网和缠刺网兼捕；个体常被丢弃或只记录为 *Torpedo* spp.，会削弱趋势监测。[FAO Eastern and Southern Mediterranean guide](https://www.fao.org/4/i1276b/i1276b12.pdf)；[Tiralongo et al. 2019](https://doi.org/10.1080/24750263.2019.1696419)；[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en)（访问日期均为：2026-08-31）
37. 葡萄牙实验中的 guarding net 降低了部分三层刺网兼捕与丢弃，但实验只捕到一尾 *T. torpedo*。它只能支持“值得继续测试通用改网方案”，不能声称已经证明本种兼捕下降。[Szynaka et al. 2018](https://doi.org/10.3989/scimar.04734.16B)（访问日期：2026-08-31）
38. 2023 年地中海遗传研究发现形态初判会把部分电鳐认错，并记录撒丁岛本种的线粒体单倍型多样性。页面可据此主张保存凭证和结合分子复核；单一区域单倍型多样性不能推出全球种群健康或增长。[D'Aguanno et al. 2023](https://doi.org/10.3390/ani13182899)（访问日期：2026-08-31）
39. 保护行动优先记录到种的渔获、努力量、体长、性别、地点、深度、渔具和船边状态，补做释放后存活研究；在浅层软底繁殖与幼体利用区测试季节或空间减缓，并评估底拖网、三层刺网改装。处理活体时要避免徒手接触胸鳍盘，图像也不示范抓盘动作。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en)；[Szynaka et al. 2018](https://doi.org/10.3989/scimar.04734.16B)；[IUCN vulnerable bycatch guide](https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf)（访问日期均为：2026-08-31）

## 推荐完整 Species 字段

~~~ts
id: 'species-torpedo-torpedo',
slug: 'ocellate-torpedo',
names: {
  zh: '眼斑电鳐',
  en: 'Ocellate Torpedo',
  aliases: ['Common Torpedo', '电鳐', '电鲼', '普通电鳐'],
},
scientificName: 'Torpedo torpedo',
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Chondrichthyes', '软骨鱼纲'),
  taxon('Torpediniformes', '电鳐目'),
  taxon('Torpedinidae', '电鳐科'),
  taxon('Torpedo', '电鳐属'),
),
conservation: conservation('VU', 'decreasing', 2020, 'A2bd'),
distribution: {
  realms: ['marine'],
  continents: ['欧洲', '非洲', '亚洲'],
  regions: [
    '比斯开湾南部、伊比利亚半岛与邻近东大西洋',
    '整个地中海及马尔马拉海',
    '西非东大西洋沿岸至安哥拉',
    '佛得角与圣多美和普林西比近海',
  ],
  countries: [
    '法国', '西班牙', '葡萄牙', '意大利', '马耳他', '斯洛文尼亚', '克罗地亚',
    '黑山', '阿尔巴尼亚', '希腊', '塞浦路斯', '土耳其', '叙利亚', '黎巴嫩',
    '以色列', '埃及', '利比亚', '突尼斯', '阿尔及利亚', '摩洛哥', '毛里塔尼亚',
    '塞内加尔', '佛得角', '几内亚比绍', '几内亚', '塞拉利昂', '利比里亚',
    '科特迪瓦', '加纳', '贝宁', '尼日利亚', '喀麦隆', '赤道几内亚',
    '圣多美和普林西比', '加蓬', '刚果共和国', '安哥拉',
  ],
  range:
    '分布于地中海、马尔马拉海和东大西洋，从比斯开湾南部沿伊比利亚及西非海岸至安哥拉，并有佛得角、圣多美和普林西比记录；不纳入黑海、红海、印度洋、西大西洋或南非。国家数组是地图筛选用代表性清单。',
  center: { lat: 28, lng: -5 },
},
habitats: [
  {
    name: '近岸沙泥软底',
    realm: 'marine',
    description: '内陆架浅水沙底和泥底，可把胸鳍盘半埋在沉积物中伏击小鱼；FAO 指南的核心范围约为 5 至 70/100 米。',
    isPrimary: true,
  },
  {
    name: '沙石混合底与海草床边缘',
    realm: 'marine',
    description: '西西里 4 至 25 米三层刺网样本来自沙底、混合底和邻近 Posidonia oceanica 海草床；这是局地利用记录。',
  },
  {
    name: '大陆架较深软底',
    realm: 'marine',
    description: '偶见于核心浅层以外的软底记录；较宽资料延伸至约 400 米，不能解释为典型深度或最大潜水能力。',
  },
],
measurements: {
  length: {
    max: 0.6,
    unit: 'm',
    note: 'FAO 指南汇编最大总长；常见总长约 30 至 40 cm，区域样本最大值有差异。',
  },
},
diet: {
  types: ['carnivore'],
  foods: ['底栖与近底层小型鱼类', '其他小型鱼类', '甲壳类'],
  description:
    '以鱼类为主的底栖伏击者，兼食甲壳类。西西里胃含物研究显示猎物鱼种较宽；埃及样本中幼体食谱比成体更宽。现有证据不足以给出全范围固定比例。',
},
activity: [
  '伏在或半埋于沙泥底等待猎物',
  '从沉积物中冲出并把小鱼压在胸鳍盘下',
  '用成对内部电器官产生放电，参与捕食与防御',
  '主要以粗壮尾部和尾鳍推进',
  '全范围昼夜节律尚未量化',
],
tags: ['软骨鱼纲', '电鳐目', '东大西洋', '地中海', '海洋底栖', '沙泥软底', '电器官', '胎生', 'IUCN 易危', '渔业兼捕'],
summary:
  '一条常把圆厚身体埋进浅海沙泥底、以五枚蓝色眼斑示人，并能用胸鳍盘内成对电器官伏击小鱼的易危电鳐。',
description:
  '眼斑电鳐是地中海、马尔马拉海及东大西洋浅层软底的电鳐科鱼类，最大总长记录约 60 厘米。近圆形胸鳍盘通常带五枚蓝心眼斑，但已发表个体可少于或多于五枚。它会半埋于沙中，以鱼类为主食；圈养新生个体能冲出沉积物，把活鱼压在盘下再送入口中。胸鳍盘内头部两侧各有一枚电器官，电细胞同步受胆碱能神经驱动；目标种新生个体实验显示放电能力在出生后数月增强。它无胎盘胎生，成熟体长、妊娠期和胎仔数在地中海与西非研究间不同。IUCN 按 2020 年评估列为易危且持续下降，底拖网与缠刺网兼捕是主要压力。',
metrics: {},
featured: true,
publishedAt: '2026-08-31',
updatedAt: '2026-08-31',
~~~

`center` 只控制地图初始视口，不表示模式产地、分布中心或密度中心。`metrics` 保持空对象：60 厘米是最大记录，成熟体长和妊娠数据带地区边界，400 米又是底栖发生记录而非潜水指标。

## 六个 story candidates

~~~ts
storySections: [
  {
    key: 'five-ocelli-usually',
    label: '眼斑辨识',
    title: '五枚蓝眼斑，是典型样式而非固定编号',
    body:
      '黄褐色圆盘上通常排着五枚蓝心眼斑，每枚外缘还有深色与浅黄色环。2006 年形态论文却汇总了零至九枚的个体。封面用五枚最能呈现典型外观，识别文字仍要保留变异，不能把斑点数当成独立诊断钥匙。',
  },
  {
    key: 'electric-organs-under-disc',
    label: '电器官',
    title: '两枚电器官藏在圆盘里',
    body:
      '头部两侧各有一枚近肾形电器官，外面只看见完整皮肤。电鳐属研究显示，肌源性扁平电细胞按柱排列，胆碱能神经让许多细胞同步去极化，串联与并联结构汇合成一次放电。精细发育来自近缘电鳐研究，目标种旧异名材料则直接确认了烟碱型乙酰胆碱受体。',
  },
  {
    key: 'voltage-after-birth',
    label: '放电发育',
    title: '出生第一天已经放电，随后数月继续增强',
    body:
      '以 Torpedo ocellata 发表的目标种实验测得，圈养新生个体日龄约一天时放电约 4 伏，前三周升到约 20 伏，四个月时趋近 26 伏。这条曲线讲的是一组幼体的早期发育，无法代表成年峰值，也不能与指南的 40 至 200 伏汇编值硬接成完整一生。',
  },
  {
    key: 'ambush-beneath-sand',
    label: '埋沙伏击',
    title: '圆盘既是遮蔽物，也是困住猎物的罩',
    body:
      '新生个体实验记录了完整动作：电鳐从沙中冲出，把活鱼压在胸鳍盘下面，再用身体动作把猎物导入口部。胃含物研究显示鱼类是主要食物，甲壳类居次。水下放电本身不可见，静态图只能重建埋沙和压制姿态，不能添加闪电或焦痕。',
  },
  {
    key: 'regional-reproduction',
    label: '区域繁殖',
    title: '同一物种，没有一套可通抄全海域的繁殖数字',
    body:
      '拉齐奥样本推定妊娠约六个月、每胎 4 至 19 个胚胎；塞内加尔样本为六至八个月，广义繁殖力 5 至 28。埃及、比塞大潟湖的成熟体长也各不相同。档案因此保留无胎盘胎生这一稳定结论，把季节、成熟体长与胎仔数留在带地点的故事和事实中。',
  },
  {
    key: 'vulnerable-bycatch',
    label: '兼捕压力',
    title: '渔网常记下一个属名，却漏掉一个物种的趋势',
    body:
      'IUCN 在 2020 年把眼斑电鳐评为易危且下降，标准 A2bd 依赖丰度指数和开发压力。底拖网、刺网和三层刺网会兼捕这种浅层底栖鱼，丢弃记录又常合并成 Torpedo spp.。记录到种、测量努力量和释放后存活，才能让下一次评估分清真实变化与资料空白。',
  },
],
~~~

## 推荐 key facts

~~~ts
keyFacts: [
  '接受学名为 Torpedo torpedo，原始组合是 Raja torpedo。',
  '英文主名推荐 Ocellate Torpedo；Common Torpedo 只作别名。',
  '中文“眼斑电鳐”是项目编辑名，权威中文资料还使用“电鳐”和“电鲼”。',
  '分类属于软骨鱼纲、电鳐目、电鳐科、电鳐属。',
  '严格范围是地中海、马尔马拉海和比斯开湾南部至安哥拉的东大西洋。',
  '黑海、红海、印度洋、西大西洋和南非记录不进入本档案。',
  '主要生活在内陆架浅水沙底与泥底，FAO 核心范围约 5 至 70/100 米。',
  '约 400 米是较宽发生资料的边界，不是最大潜水指标。',
  '胸鳍盘厚实且近圆，尾部短粗，有两个背鳍和发达尾鳍。',
  '口、鼻孔和五对鳃裂在腹面，眼与喷水孔在背面。',
  '皮肤光滑，没有鳞、棘或黄貂鱼式尾刺。',
  '喷水孔边缘有短小乳突，较大个体可能不醒目。',
  '背面通常有五枚蓝心眼斑，外缘带深色和浅黄色环。',
  '已发表个体可有零至九枚眼斑，五枚不是固定计数。',
  'FAO 汇编最大总长为 60 厘米，常见总长约 30 至 40 厘米。',
  '以底栖与近底层鱼类为主食，也会取食甲壳类。',
  '西西里胃含物样本的 Levins 指数为 0.82，只代表当地样本。',
  '圈养新生个体会从沙中冲出，把活鱼压在胸鳍盘下。',
  '现有目标种证据不足以把它写成全范围固定夜行。',
  '成对近肾形电器官位于胸鳍盘内部、头部两侧。',
  '目标种旧异名材料直接确认电器官膜含烟碱型乙酰胆碱受体。',
  '电细胞发育与串并联细节主要来自近缘电鳐，必须标注证据层级。',
  '圈养新生个体约一天时放电约 4 伏，四个月时趋近约 26 伏。',
  'FAO 的 40 至 200 伏是指南汇编范围，不是每尾成体的固定输出。',
  '电放电在水下不可见，闪电和蓝色光弧属于图像错误。',
  '它无胎盘胎生，不产海床卵囊。',
  '拉齐奥样本推定妊娠约六个月、每胎 4 至 19 个胚胎。',
  '塞内加尔样本推定妊娠六至八个月，出生总长 102 至 125 毫米。',
  '地区研究的成熟体长不同，不应落库为一个全球数值。',
  'IUCN 当前为 VU、decreasing，实际评估年 2020，标准 A2bd。',
  '旧版 DD 与地中海区域状态不能覆盖当前全球评估。',
  '底拖网、刺网和三层刺网兼捕是已记录压力。',
  '一项改网实验只捕到一尾本种，不能证明物种级减捕效果。',
  '形态初判可能混淆近缘电鳐，渔获记录需要凭证与分子复核。',
],
~~~

## 威胁与保护行动

~~~ts
threats: [
  '底拖网、刺网、三层刺网及其他底层渔具在浅层软底造成兼捕',
  '丢弃和 Torpedo spp. 合并记录使种级死亡率与趋势被低估',
  '浅水繁殖、产仔和幼体利用区与高强度沿岸渔业重叠',
  '生活史地区差异大，成熟体长、世代长度和释放后存活资料不足',
  '形态误认会把近缘电鳐渔获和监测数据混入本种',
],
conservationActions: [
  '把渔获和丢弃记录到种，并保存照片、组织或凭证供形态与分子复核',
  '统一记录努力量、渔具、地点、深度、体长、性别和船边状态',
  '开展电鳐安全释放及释放后存活实验，避免徒手抓握胸鳍盘',
  '识别浅层软底繁殖与幼体利用区，测试有时空边界的减缓措施',
  '在底拖网和三层刺网渔业中继续测试改网，同时保留目标种样本量',
  '分别监测地中海与西非趋势，并按 2020 年评估后的新资料更新 IUCN',
],
~~~

沿岸开发和软底退化可作为待监测压力，现有资料没有把它们量化为 IUCN A2bd 的首要全球驱动。页面应把已记录兼捕、未充分报告和待检验栖息地压力分开。

## 四个 bounded featured stats

~~~ts
featuredStats: [
  {
    key: 'typical-ocelli',
    label: '典型背部眼斑',
    value: '5',
    unit: '枚',
    note: '典型型态；2006 年论文汇总过零至九枚，斑数并不固定',
  },
  {
    key: 'compiled-maximum-length',
    label: '汇编最大总长',
    value: '60',
    unit: '厘米',
    note: 'FAO 指南最大值；常见总长约 30 至 40 厘米',
  },
  {
    key: 'central-mediterranean-gestation',
    label: '拉齐奥推定妊娠期',
    value: '约 6',
    unit: '个月',
    note: '2000 至 2001 年中地中海区域样本；塞内加尔研究为六至八个月',
  },
  {
    key: 'captive-neonate-discharge',
    label: '幼体放电发育',
    value: '4 → 26',
    unit: '伏',
    note: '圈养目标种旧异名样本从日龄约一天至四个月；不代表成年输出',
  },
],
~~~

## 六张图片的场景、prompt、caption 与验收边界

六张图均是科学情景或机制重建，不可当作标本照片、野外放电证据或测量工具。自然场景保持近圆厚实胸鳍盘、短粗尾、两个背鳍、发达尾鳍、光滑无棘皮肤，以及腹面鳃裂。标准成体背面用五枚蓝心眼斑，每枚带深色和浅黄至橙黄色环；不要生成随机豹斑、黄貂鱼长鞭尾、尾刺、蝠鲼尖翼、鲨鱼侧身或发光电弧。

| basename | 场景与生成 prompt | 可用 caption | 必须保留的边界 |
| --- | --- | --- | --- |
| `01-five-ocelli-sandy-seafloor-cover` | 一尾完整眼斑电鳐伏在浅海细沙底，略偏俯视；厚实近圆盘、宽钝前缘、短粗尾、两个分离背鳍和宽大尾鳍清楚可见。背面黄褐色，恰有五枚大型蓝心眼斑，每枚外圈先深色再浅黄橙色；小眼和带短乳突的喷水孔可辨。自然纪录片光线，无其他大型动物。 | “典型眼斑电鳐常有五枚蓝心眼斑，生活在地中海与东大西洋浅层沙泥底。” | 五枚是典型型态，不是固定计数；画面不能判定体长、性别、年龄、地点、水深或种群丰度。 |
| `02-partially-buried-ambush` | 一尾眼斑电鳐半埋在松散沙中，盘缘被薄沙覆盖，眼和喷水孔露出；一尾小型近底鱼从前方游过，尚未接触。表现即将伏击的安静瞬间，不画电光、气泡冲击、猎物僵直或伤痕。 | “目标种新生个体实验记录了从沙中冲出、把小鱼压在胸鳍盘下的伏击动作。” | 静帧只能重建埋沙伏击，不证明放电已经发生、猎物种类、成功率、昼夜节律或成年行为频率。 |
| `03-paired-electric-organs-cutaway` | 规范科学插图，眼斑电鳐背视轮廓与半透明浅层解剖叠加；头部两侧各显示一枚对称近肾形内部电器官，器官位于胸鳍盘内，皮肤表面保持完整。背景纯净，颜色克制，结构无发光，无闪电。 | “成对电器官位于胸鳍盘内部、头部两侧；位置与外形为解剖概念重建。” | 不能把器官画在皮肤外、画成肾脏或给出未测量的本种器官尺寸、重量、柱数和电压。 |
| `04-electrocyte-column-concept` | 科学机制剖面，一列放大的扁平电细胞整齐堆叠，腹侧神经末梢接触受体丰富膜面；用少量中性箭头表示乙酰胆碱信号、膜去极化和串联求和。旁边只放小型眼斑电鳐轮廓作来源提示，不画电池、铜线、霓虹或水下电弧。 | “电鳐属研究显示，胆碱能神经同步驱动成列电细胞；目标种旧异名材料直接证实烟碱型受体。” | 电细胞发育与排列主要来自近缘电鳐；图中细胞数、柱数、比例、脉冲频率和电压均为非定量示意。 |
| `05-newborn-ray-on-sand` | 一尾体型很小的新生电鳐静卧浅沙底，保留近圆盘和短粗尾轮廓，斑纹细致但不过度鲜艳；远处一尾小型孔雀鳚游过，二者无接触。无标尺、无成体对照、无胚胎膜、无卵囊、无电光。 | “圈养新生个体从出生后第一天便能放电和捕食活鱼，能力在随后数月增强。” | 画面不能量取 8 至 10 厘米、判断日龄、重建实验电压、证明野外猎物偏好或把幼体缩成成体复制品。 |
| `06-trammel-net-live-release` | 匿名小型渔船旁，一尾活眼斑电鳐仍在水面，一名工作人员用长柄非导电工具松开宽松三层刺网，另一人记录；不徒手抓盘，不把动物拖上甲板，无品牌、船名、国旗、血迹或大量渔获。 | “底层渔网会兼捕眼斑电鳐；记录到种并研究安全释放与存活，是当前保护缺口。” | 单帧不能证明动物存活、工具有效、渔业合规、地点、捕获率或任何改网方案的物种级效果。 |

推荐媒体字段：

~~~ts
media: {
  image: './images/species/ocellate-torpedo/01-five-ocelli-sandy-seafloor-cover.webp',
  alt: '浅海细沙底上，一尾黄褐色近圆形眼斑电鳐完整伏卧，背面有五枚蓝心环纹眼斑',
  focalPoint: { x: 0.5, y: 0.52 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
  gallery: [
    {
      image: './images/species/ocellate-torpedo/02-partially-buried-ambush.webp',
      alt: '一尾眼斑电鳐半埋在浅色沙中，只露出背部、眼睛和喷水孔，前方有一尾小鱼',
      title: '沙下伏击',
      caption: 'AI生成科学情景重建；静帧不证明放电已发生、猎物种类、伏击成功率或昼夜节律。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/ocellate-torpedo/03-paired-electric-organs-cutaway.webp',
      alt: '眼斑电鳐背视轮廓的半透明解剖示意，头部两侧各有一枚近肾形内部电器官',
      title: '圆盘内的成对电器官',
      caption: 'AI生成科学解剖概念图；器官位置和形状不用于量取本种尺寸、重量、柱数或电压。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/ocellate-torpedo/04-electrocyte-column-concept.webp',
      alt: '扁平电细胞成列堆叠，腹侧神经末梢接触细胞膜的电鳐电器官机制示意',
      title: '同步工作的电细胞',
      caption: 'AI生成科学机制图；细胞发育和排列主要依据近缘电鳐，数量、比例、频率与电压均非定量。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/ocellate-torpedo/05-newborn-ray-on-sand.webp',
      alt: '浅沙底上一尾体型很小的圆盘形新生电鳐，远处有一尾小型近底鱼',
      title: '出生后的放电与捕食',
      caption: 'AI生成科学情景重建；画面不能量取体长、判断日龄、还原实验电压或证明野外食物偏好。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/ocellate-torpedo/06-trammel-net-live-release.webp',
      alt: '小型渔船旁，两名工作人员在不徒手抓握胸鳍盘的情况下记录并松开一尾网中电鳐',
      title: '兼捕记录与安全释放',
      caption: 'AI生成科学监测情景重建；单帧不能证明释放后存活、渔具效果、捕获率、地点或管理成效。',
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
  ],
},
~~~

## 恰好 24 个可直接落库的 SpeciesSource

以下 URL 全部唯一、使用 HTTPS，并覆盖 schema 的五种 `kind`。第 19 至 21 条近缘电鳐论文只提供机制边界；第 10、23、24 条分别提供岛屿分布背景、减捕试验边界和软骨鱼类全球捕捞背景，不替代本种 IUCN 评估。

~~~ts
const OCELLATE_TORPEDO_SOURCES = [
  {
    title: 'WoRMS: Torpedo torpedo (AphiaID 271691)',
    url: 'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271691',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Eschmeyer\'s Catalog of Fishes: Torpedo torpedo',
    url: 'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Taiwan Fish Database: Torpedo torpedo Chinese names',
    url: 'https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=49&pz=50&vn=',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'IUCN Red List: Torpedo torpedo assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
  {
    title: 'IUCN Red List 2021-2: Table 7, status changes',
    url: 'https://nc.iucnredlist.org/redlist/content/attachment_files/2021-2_RL_Stats_Table_7.pdf',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
  {
    title: 'FAO: Sharks, Batoids and Chimaeras of the North Atlantic',
    url: 'https://www.fao.org/4/i3178e/i3178e.pdf',
    kind: 'distribution',
    accessedAt: '2026-08-31',
  },
  {
    title: 'FAO: Field Identification Guide to the Living Marine Resources of the Eastern and Southern Mediterranean',
    url: 'https://www.fao.org/4/i1276b/i1276b12.pdf',
    kind: 'general',
    accessedAt: '2026-08-31',
  },
  {
    title: 'FAO: Atlas of the Maturity Stages of Mediterranean Fishery Resources',
    url: 'https://www.fao.org/3/ca2740en/ca2740en.pdf',
    kind: 'distribution',
    accessedAt: '2026-08-31',
  },
  {
    title: 'IUCN: Identification Guide of Vulnerable Species Incidentally Caught in Mediterranean Fisheries',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf',
    kind: 'general',
    accessedAt: '2026-08-31',
  },
  {
    title: 'First records of the West African torpedo in Cabo Verde Archipelago, eastern Atlantic',
    url: 'https://www.cambridge.org/core/journals/oryx/article/first-records-of-the-west-african-torpedo-in-cabo-verde-archipelago-eastern-atlantic/2F4DD22111191A25BEBB18CF9168EC97',
    kind: 'distribution',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Comparative study on the reproductive biology of Torpedo torpedo and T. marmorata in the central Mediterranean Sea',
    url: 'https://doi.org/10.3989/scimar.2007.71n2213',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Biological aspects of the common torpedo in the central Mediterranean Sea',
    url: 'https://doi.org/10.1080/24750263.2019.1696419',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Observations on the biology of the common torpedo and marbled electric ray from Egyptian Mediterranean waters',
    url: 'https://doi.org/10.1071/MF9940693',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Reproductive biology of the common torpedo from the coast of Senegal',
    url: 'https://raco.cat/index.php/Mzoologica/article/view/90040',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Maturity, reproductive cycle and fecundity of common torpedo from the Lagoon of Bizerte',
    url: 'https://doi.org/10.1134/S0032945213060118',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Observations on feeding, growth and electric discharge of newborn Torpedo ocellata',
    url: 'https://doi.org/10.1111/j.1095-8649.1979.tb03579.x',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'An unusual nine-ocellated common torpedo from southern France',
    url: 'https://acta.izor.hr/ojs/index.php/acta/article/view/182',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'I Like This New Me: Population structure and taxonomic uncertainties in Mediterranean electric rays',
    url: 'https://doi.org/10.3390/ani13182899',
    kind: 'taxonomy',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Integrated genomics and proteomics of the Torpedo californica electric organ',
    url: 'https://doi.org/10.1186/2044-5040-1-20',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Electric organ development in Torpedo marmorata',
    url: 'https://doi.org/10.1016/0012-1606(78)90307-X',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'The electrophysiology of electric organs of marine electric fishes',
    url: 'https://doi.org/10.1085/jgp.44.4.757',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Regulation of perhydrohistrionicotoxin binding to Torpedo ocellata electroplax',
    url: 'https://doi.org/10.1016/S0021-9258(19)69691-2',
    kind: 'ecology',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Reduction of by-catch and discards in the Algarve small-scale coastal fishery using a guarded trammel net',
    url: 'https://doi.org/10.3989/scimar.04734.16B',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
  {
    title: 'Overfishing drives over one-third of all sharks and rays toward a global extinction crisis',
    url: 'https://doi.org/10.1016/j.cub.2021.08.062',
    kind: 'conservation',
    accessedAt: '2026-08-31',
  },
] as const satisfies readonly SpeciesSource[];
~~~

计数：taxonomy 4、conservation 4、distribution 3、ecology 11、general 2，总计 24。

## 来源逐项主张与边界

| # | 来源 | 本简报采用的主张 | 不采用或必须限定的内容 |
| --- | --- | --- | --- |
| 1 | WoRMS 271691 | 接受名、作者、原始组合、属科目层级。 | WoRMS 的 class 等级不强制覆盖仓库 Chondrichthyes 结构；occurrence 不自动生成国家数组。 |
| 2 | Catalog of Fishes | 有效种、异名、严格大范围、圣多美和普林西比。 | 原始材料可能混种，模式产地不能当作完整范围证据。 |
| 3 | 台湾鱼类资料库 | “电鳐”“电鲼”两套中文用名。 | 不据此宣称“眼斑电鳐”是统一法定或名录标准名。 |
| 4 | IUCN 2021-2 assessment | VU、decreasing、评估日期 2020-08-04、A2bd 与全球风险判断。 | 2021 是发布批次；评估推断不等于全球逐尾普查。 |
| 5 | IUCN 2021-2 Table 7 | 英文名 Ocellate Torpedo；旧 DD 更新为 VU。 | 表格不提供体尺、生态或下降机制细节。 |
| 6 | FAO North Atlantic catalogue | 东大西洋北界、形态、同域近缘电鳐辨识和 `Atlantic Torpedo` 排除。 | 北大西洋目录不能单独描述热带西非各国现状。 |
| 7 | FAO Eastern and Southern Mediterranean guide | Common Torpedo 别名、30 至 40 厘米常见总长、60 厘米最大值、5 至 100 米软底、鱼与甲壳类、3 至 21 胚胎汇编、40 至 200 伏汇编、兼捕渔具。 | 旧区域保护状态不覆盖当前全球 IUCN；电压和胎仔数不是每尾个体固定值。 |
| 8 | FAO maturity atlas | 无胎盘卵黄囊胎生、成熟阶段图、比利时记录存疑、地中海与马尔马拉海范围。 | 图谱阶段照片不提供全范围成熟体长、妊娠期或母体营养机制定量。 |
| 9 | IUCN vulnerable bycatch guide | 五枚典型眼斑、8 至 10 枚喷水孔乳突、最大 60 厘米、软底至约 70 米、3 至 21 幼体汇编、东大西洋和地中海范围。 | 识别图不能测量个体；较旧区域状态不覆盖 2020 全球评估。 |
| 10 | Cabo Verde Oryx paper | 论文背景确认 *T. torpedo* 已是佛得角已知电鳐。 | 论文主角是西非电鳐 *T. mackayana*；不能借其新记录扩大本种数量或岛屿范围。 |
| 11 | Consalvo et al. 2007 | 拉齐奥 n=535、生殖周期、成熟长度、26 尾怀孕雌鱼 4 至 19 胚胎、约六个月妊娠、区域产仔季。 | 2000 至 2001 年中地中海结果不代表西非或整个范围。 |
| 12 | Tiralongo et al. 2019 | 西西里 n=164、4 至 25 米底质、三层刺网丢弃、鱼食性、Levins 0.82、卵巢卵数 3 至 20。 | 三月至五月和单一渔具样本不能证明全年食谱、夜行性或全球成熟值。 |
| 13 | Abdel-Aziz 1994 | 埃及样本食性、成熟体长、五至六个月妊娠和区域季节。 | 埃及 18/22 厘米成熟值不覆盖拉齐奥、突尼斯和塞内加尔。 |
| 14 | Capapé et al. 2000 | 塞内加尔成体与出生体长、六至八个月妊娠、5 至 28 广义繁殖力、干重平衡 1.58。 | 区域样本不设定全球胎仔范围；干重比只提示母体补给，不证明哺乳动物式胎盘。 |
| 15 | Reynaud & Capapé 2013 | 比塞大潟湖成熟体长、窝仔数和繁殖周期，支持区域差异。 | 潟湖样本不代表开放海域或完整地中海。 |
| 16 | Michaelson et al. 1979 | *T. ocellata* 是目标种异名；新生个体伏击动作、饲养生长、约 4 至 26 伏早期放电发育。 | 圈养幼体不能给出成年峰值、野外捕食成功率或种群常态。 |
| 17 | Capapé et al. 2006 | 五枚最常见，眼斑数可少可多；报告九斑个体。 | 九枚只是论文当时最高记录，不写成截至 2026 年绝对上限。 |
| 18 | D'Aguanno et al. 2023 | 地中海电鳐形态误认风险、分子复核价值和撒丁岛局地单倍型资料。 | 单一区域遗传多样性不代表全球种群健康、数量或趋势。 |
| 19 | Mate et al. 2011 | *T. californica* 电器官的肌样蛋白组、胆碱能突触和神经肌肉接头同源特征。 | 不把该种电器官细胞数、柱数或基因表达量写给 *T. torpedo*。 |
| 20 | Mellinger et al. 1978 | *T. marmorata* 电器官由肌源细胞发育，支持电细胞发育示意。 | 胚胎体长阈值、神经数和发育时点只属于该研究种。 |
| 21 | Bennett et al. 1961 | 近缘大型电鳐电细胞受神经刺激的膜电活动与同步求和机制。 | 潜伏期、膜参数和输出数值不移植到目标种。 |
| 22 | Aronstam et al. 1981 | 目标种旧异名电器官膜有烟碱型乙酰胆碱受体离子通道。 | 药理配体、浓度和结合动力学不进入物种展示数值。 |
| 23 | Szynaka et al. 2018 | guarding net 可降低部分葡萄牙三层刺网兼捕，值得继续测试。 | 只捕到一尾本种，不能声称对眼斑电鳐已验证减捕率。 |
| 24 | Dulvy et al. 2021 | 过度捕捞是鲨、鳐全球灭绝风险的主要驱动，提供 A2d 背景。 | 全球软骨鱼综合不能替代本种 IUCN 状态、区域趋势或物种级捕获率。 |

## 冲突与禁止表述

| 不安全写法 | 问题 | 安全写法 |
| --- | --- | --- |
| “英文主名 Common Torpedo” | FAO 旧指南采用，但 IUCN 当前主名是 Ocellate Torpedo；common 还易暗示丰度。 | “英文主名 Ocellate Torpedo，Common Torpedo 为别名。” |
| “中文标准名就是眼斑电鳐” | 权威中文资料仍列“电鳐”“电鲼”。 | “项目主名采用眼斑电鳐，并保留名录异名。” |
| “Atlantic Torpedo” | 通常指 *Tetronarce nobiliana*。 | 禁用该别名。 |
| “分布到北海、黑海、红海或西大西洋” | 混入存疑北方记录或其他电鳐。 | “地中海、马尔马拉海及比斯开湾南部至安哥拉的东大西洋。” |
| “最大潜水 400 米” | 底栖出现深度不是主动潜水指标。 | “核心为浅层软底，较宽发生资料偶至约 400 米；不填 dive metric。” |
| “背上永远五个斑” | 眼斑数有个体变异。 | “通常五枚；已发表个体可少于或多于五枚。” |
| “最多九个斑” | 九枚只是 2006 年论文当时最高记录。 | “2006 年论文汇总零至九枚，不设截至 2026 年绝对上限。” |
| “会发出蓝色闪电” | 水下电放电不可见。 | 用无发光的行为图或带标注的机制示意。 |
| “两块电器官露在背上” | 电器官位于完整皮肤下。 | “成对器官位于胸鳍盘内部、头部两侧。” |
| “电器官有固定 X 列、每列 Y 个细胞” | 精确列数来自其他电鳐，目标种缺少对应测量。 | 只写“许多扁平电细胞成列排列”。 |
| “成体通常输出 200 伏” | 40 至 200 伏是 FAO 指南汇编。 | “指南汇编可达 40 至 200 伏；个体、体型和测法边界不明。” |
| “4 伏长到 200 伏” | 4 至 26 伏是圈养幼体曲线，200 伏来自另一类汇编。 | 分开呈现，禁止拼接。 |
| “放电会杀死猎物” | 目标种研究记录压制和取食，没有量化死亡机制。 | “放电参与捕食与防御；新生个体会把鱼压在盘下。” |
| “普遍夜行且独居” | 目标种缺少全范围昼夜和社会性量化。 | “可埋沙伏击；昼夜节律尚未量化。” |
| “产卵并留下卵囊” | 本种无胎盘胎生。 | “胚胎在母体内发育，不画海床卵囊。” |
| “像哺乳动物一样有胎盘” | 无胎盘；母体补给证据来自干重平衡推断。 | “主要依赖卵黄，西非研究提示有限母体补给。” |
| “成熟体长 22 厘米” | 埃及、拉齐奥和比塞大值不同。 | 数值必须带地点、年份和方法，不落全球字段。 |
| “妊娠固定六个月，每胎 3 至 28 尾” | 合并多个区域和不同繁殖力定义。 | “中地中海约六个月，塞内加尔六至八个月；胎仔数分区呈现。” |
| “IUCN 在 2021 年评估为 VU” | 2021 是发布批次。 | “2020 年评估，2021-2 发布，VU A2bd，decreasing。” |
| “从 DD 升级到 VU 说明数量骤降” | 等级变化也包含新资料和评估更新。 | “2021-2 状态表记录 DD 至 VU；下降依据见 A2bd 评估。” |
| “改良三层刺网已减少本种兼捕” | 目标种样本只有一尾。 | “通用方案值得测试，本种效果仍未知。” |
| “撒丁岛遗传多样性证明全球种群健康” | 单一地区线粒体结果不可外推。 | “分子数据用于身份复核和区域监测。” |
| “有黄貂鱼式尾刺” | 电鳐没有这种防御尾刺。 | 画短粗尾、两个背鳍和发达尾鳍，不画长鞭尾或刺。 |

## 实现验收清单

- `id` 为 `species-torpedo-torpedo`，`slug` 为 `ocellate-torpedo`。
- 中文主名为“眼斑电鳐”，英文主名为 `Ocellate Torpedo`；`Common Torpedo` 只在 aliases。
- 不出现 `Atlantic Torpedo`，也不把 common 解释为数量常见。
- 分类链使用 Chondrichthyes、Torpediniformes、Torpedinidae 与 *Torpedo*。
- conservation 为 VU、decreasing、2020、A2bd；正文注明 2021-2 发布。
- distribution 只有 marine，明确地中海、马尔马拉海和比斯开湾南部至安哥拉的东大西洋。
- 范围排除黑海、红海、印度洋、西大西洋和南非；比利时记录标成存疑，不进入国家数组。
- `countries` 说明是代表性范围国，不宣称逐岛穷尽。
- 生境以浅层沙泥软底为主；4 至 25 米西西里混合底和海草床边缘带局地边界。
- 不填 `metrics.maxDiveDepthM`，也不填体重、寿命、速度、典型成体区间或成熟个体数。
- measurements 只保留 `max: 0.6 m`，note 写 FAO 汇编最大值与 30 至 40 厘米常见值。
- 外形同时包含近圆厚盘、短粗尾、两个背鳍、发达尾鳍、腹面五对鳃裂和无尾刺。
- 眼斑写“通常五枚”，任何零至九枚数据均绑定 2006 年论文，不称绝对上限。
- 食性写鱼类为主、甲壳类为次；Levins 0.82 只在西西里样本边界内。
- activity 写半埋伏击与昼夜未知，不写固定夜行或独居。
- 电生理分开目标种直接证据和近缘机制；不导入同属柱数、细胞数、发育体长或膜参数。
- 新生放电 stat 只写圈养约一天至四个月的 4 至 26 伏；不与 40 至 200 伏指南值拼接。
- 繁殖写无胎盘胎生，不画卵囊或胎盘；所有成熟体长、妊娠期和胎仔数带地区边界。
- threats 以底拖网、刺网和三层刺网兼捕及记录不足为主，不凭空添加定向电器官贸易。
- 改网方案只写“需继续测试”，不报本种减捕率。
- 六个 story key 唯一；key facts 至少 18 条；featured stats 恰好四条且每条有边界 note。
- 六张图 basename 与媒体路径一致；自然图无闪电、发光器官、长鞭尾、尾刺、随机豹斑或背面鳃裂。
- 解剖图和电细胞图明确是概念重建；alt 只描述可见内容，caption 不把 AI 图当证据。
- sources 恰好 24 个、URL 唯一、全部 HTTPS、五种 kind 全覆盖、访问日均为 2026-08-31。
