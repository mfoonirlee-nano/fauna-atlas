# 负子蟾（Surinam Toad）物种档案研究与实现简报

- 研究对象：*Pipa pipa* (Linnaeus, 1758)
- 建议 slug：`surinam-toad`
- 研究截止日与全部来源访问日期：2026-08-30
- 用途：完成 TODO 中负子蟾物种档案；本文件不提供图片生成或饲养、采集指南

证据口径：接受名与分布以 Amphibian Species of the World（ASW）和政府分类页为主；全球灭绝风险使用 IUCN 现行评估 DOI，并以 Crossref 元数据区分评估记录日期和红皮书发布版本；形态、食性、捕食和繁殖尽量回到原始论文。旧动物园论文提供了精细繁殖顺序，却只观察少数圈养个体或单个批次。Fouquet 等 2022 年又在传统 `Pipa pipa` 名下恢复出五个 OTU，因此全范围的体尺、生态和风险结论都应保留种界未解决这一层不确定性。

下文来源类型标签含义：`[官方分类数据库]`、`[官方保护评估]`、`[DOI 注册元数据]`、`[同行评审原始研究]`、`[机构物种账户]`、`[政府数据库]`、`[馆藏/系统学研究]`、`[政府或政府间文件]`。推断会明确标作“编辑推断”或“保护建议”，不和观察事实混写。

## 可直接采用的编辑结论

1. `[官方分类数据库]` 现行接受名为 *Pipa pipa* (Linnaeus, 1758)。Linnaeus 原来把它描述为 *Rana pipa*，后来转入 *Pipa*，所以命名人置于圆括号中。仓库 `scientificName` 只填双名，不并入命名人和年份。[ASW species account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa)；[USFWS taxonomy record](https://www.fws.gov/species/pipa-pipa-pipa-pipa)（访问日期均为 2026-08-30）
2. `[官方分类数据库]` 当前分类链是 Animalia > Chordata > Amphibia > Anura > Pipidae > *Pipa*；ASW 还列亚科 Pipinae，但仓库 schema 没有亚科字段。`Pipa americana` 等历史异名只用于文献检索，不进入主名。[ASW species account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa)；[Trueb & Cannatella 1986](https://www.jstor.org/stable/3892485)（访问日期均为 2026-08-30）
3. `[官方分类数据库]` 中文主名采用 TODO 的“负子蟾”，英文主名采用 `Surinam Toad`。安全别名可收 `Suriname Toad`、`Common Surinam Toad`、`Star-fingered Frog`、`Surinam Water-toad`。`Pipa` 是整个属，`Pipa Frog` 也可能泛指同属物种，不宜作为无约束搜索别名。[ASW species account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa)（访问日期 2026-08-30）
4. `[同行评审原始研究]` Fouquet 等在 2022 年用线粒体和核 DNA 识别出负子蟾属 15 个 OTU，而现行接受种只有七个；传统 `P. pipa` 内部恢复出五个 OTU。作者把其中一些视为候选未命名种，同时指出若干近缘 OTU 的核基因证据仍有歧义。页面仍应使用现行接受名 *P. pipa*，但不能把广布名称下所有谱系写成已经证明同质。[Fouquet et al. 2022](https://doi.org/10.1016/j.ympev.2022.107442)；[ASW genus account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa)（访问日期均为 2026-08-30）
5. `[官方保护评估 + DOI 注册元数据]` 现行 IUCN 评估 DOI 是 `10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en`，类别为无危 LC。IUCN 页面和 Crossref 都把该记录日期写作 2021-04-13；`2023-1` 是红皮书发布版本，不是重新评估年份。仓库字段应写 `assessedYear: 2021`。[IUCN current assessment](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)；[Crossref record](https://api.crossref.org/works/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)（访问日期均为 2026-08-30）
6. `[官方保护评估 + 机构物种账户]` 现行口径列种群趋势为 `Stable`。评估理由是分布广、推定总体数量大、全范围许多地点常见，因而不接近受胁阈值；它没有 A–E 受胁类别 criteria 字符串。推荐 `conservation('LC', 'stable', 2021)`，省略 `criteria`，也不填写全球成熟个体数。[IUCN current assessment](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)；[Amphibians of Ecuador account](https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa)；[EOL IUCN-attributed account](https://eol.org/pages/332922)（访问日期均为 2026-08-30）
7. `[官方保护评估 + DOI 注册元数据]` 历史 DOI `10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en` 确实存在，但 Crossref 给它的记录日期是 2014-09-09；`2015-4` 同样是发布版本。它只用于解释旧资料，不能覆盖 assessment id 85900348 的现行记录。[IUCN historical assessment](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en)；[Crossref historical record](https://api.crossref.org/works/10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en)（访问日期均为 2026-08-30）
8. `[官方分类数据库]` ASW 的原生国家/地区清单为玻利维亚、巴西、哥伦比亚、厄瓜多尔、法属圭亚那、圭亚那、秘鲁、苏里南、特立尼达和多巴哥、委内瑞拉。范围横跨亚马孙流域、圭亚那地盾及特立尼达；法属圭亚那是法国海外领地，但为忠实表达来源，可保留在 `countries` 数组。[ASW species account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa)（访问日期 2026-08-30）
9. `[同行评审原始研究]` 2023 年在特立尼达重新记录到卵背雌体和雄体，支持该岛不是只有无法核验的古老传闻。不过一个溪流的记录不能说明整座岛的丰度或趋势。[Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)（访问日期 2026-08-30）
10. `[政府数据库]` 波多黎各有一条 2007 年非原生记录，USGS 将来源解释为可能的宠物释放，并把状态和影响列为未知。波多黎各不能加入原生国家，也不能据一条记录称本种已建立或具有入侵影响。[USGS NAS](https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=2728)（访问日期 2026-08-30）
11. `[同行评审原始研究]` `P. pipa` 名下五个 OTU 使范围图具有分类不确定性。地图可以画现行名义种范围，但说明文字应写“按当前广义分类口径”；不能从名义种 LC 推导每个未描述谱系都安全。[Fouquet et al. 2022](https://doi.org/10.1016/j.ympev.2022.107442)（访问日期 2026-08-30）
12. `[官方保护评估 + 机构物种账户]` 负子蟾高度水栖，主要见于热带低地森林中的缓流或静水、泥底或落叶底的小溪、池塘、沼泽、牛轭湖、泛滥平原和季节淹水湿地。`realms` 使用 `freshwater`；偶尔陆上移动不意味着它以陆域为主要生活领域。[IUCN current assessment](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)；[Amphibians of Ecuador account](https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa)（访问日期均为 2026-08-30）
13. `[同行评审原始研究]` 2026 年秘鲁牛轭湖研究在永久水体和季节淹水陆地之间取得 18 次捕获，作者明确说其中可能有重捕。方向性记录支持至少约 100 米的陆上移动；更长约 300 米只是依据陷阱位置推断。页面可写“水位变化时会跨陆地换水体”，不可写“从不离水”或把 300 米当作实测移动距离。[Crnobrna et al. 2026](https://herpetologynotes.org/index.php/hn/article/download/107/193/3738)（访问日期 2026-08-30）
14. `[同行评审原始研究 + 机构物种账户]` 厄瓜多尔账户把它概括为夜行、主要水栖；特立尼达密集观察也发生在夜间。现有资料支持“野外多在夜间检出”，不支持绝对的“只在夜间活动”。[Amphibians of Ecuador account](https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa)；[Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)（访问日期均为 2026-08-30）
15. `[馆藏/系统学研究]` 成体身体宽而强烈扁平，头呈三角或楔形，眼小且位于背面，没有外露鼓膜，口宽而无舌；背面多为褐色至橄榄褐色斑驳，粗糙皮肤和扁平轮廓与泥底、落叶底环境相衬。后足完全蹼化，前足不具蹼。[Trueb & Cannatella 1986](https://www.jstor.org/stable/3892485)；[Carreño & Nishikawa 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2878287/)（访问日期均为 2026-08-30）
16. `[同行评审原始研究]` 每个前指末端先分成四支，再连续分叉；成体每个指尖有 16 个末端小叶，八个前指共 128 个。2026 年实验把这些结构证实为低阈值机械感觉器官，并观察到约 5 毫米范围内的水动力扰动检测。`约 5 mm` 来自实验条件，不是野外固定探测半径；“用手指闻味/品尝”没有证据。[Pérez-Rojas & Jerez 2022](https://doi.org/10.11606/1807-0205/2022.62.008)；[Meredith et al. 2026](https://doi.org/10.1007/s00359-026-01838-w)（访问日期均为 2026-08-30）
17. `[同行评审原始研究]` 下颌附近的皮褶/触须和侧线神经丘也参与水中感觉，但个体形态并不完全一致：83 个哥伦比亚样本中有五个缺少被视为该种特征的皮褶。图像和描述不应把每一条皮褶画成硬性诊断。[Pérez-Rojas & Jerez 2022](https://doi.org/10.11606/1807-0205/2022.62.008)（访问日期 2026-08-30）
18. `[馆藏/系统学研究 + 机构物种账户]` 一组经系统学论文整理的有性别样本为雌体吻肛长 105–171 毫米、雄体 106–154 毫米；特立尼达新记录却有 70–100 毫米的成体雄体和 120–140 毫米的卵背雌体。两组差异说明 10.5 厘米不是可靠的全范围成体下限。[Trueb & Cannatella 1986](https://www.jstor.org/stable/3892485)；[Animal Diversity Web](https://animaldiversity.org/accounts/Pipa_pipa/)；[Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)（访问日期均为 2026-08-30）
19. `[馆藏/系统学研究]` 文献报告最大吻肛长约 200 毫米，但这是已发表极端值，不是典型成体长度。结构化数据若必须给长度，只填 `max: 20 cm` 并在 note 保留样本边界；`metrics.adultLengthCm` 最好留空，避免制造一个并不存在的全物种成体区间。[Trueb & Cannatella 1986](https://www.jstor.org/stable/3892485)；[Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)（访问日期均为 2026-08-30）
20. `[同行评审原始研究]` 巴西局地研究只有两只含发育中卵细胞的雌体，吻肛长 107 和 110 毫米、体重 110 和 85 克。它们不能建立全物种成体体重范围，也不能证明同长度个体的常见体重。`measurements.weight` 和 `metrics.adultMassKg` 均留空。[Alves-Pinto et al. 2014](https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014)（访问日期 2026-08-30）
21. `[机构寿命数据库]` AnAge 只汇总出圈养最大寿命 7.7 年，没有野外寿命、成熟年龄或世代长度。这个数字可进入限定 key fact，不能写成“野外寿命 7.7 年”；`metrics.lifespanYears` 留空。[AnAge](https://www.genomics.senescence.info/species/entry.php?species=Pipa_pipa)（访问日期 2026-08-30）
22. `[同行评审原始研究]` 32 只巴西局地样本中只有 15 个消化道含可鉴定食物，共计 95 个项目；桡足类 Cyclopoida 数量最多，十足目甲壳类贡献最大体积，另有昆虫幼体和水生半翅目。该小样本支持水生肉食，却不能定义整个范围的固定食物比例。[Alves-Pinto et al. 2014](https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014)（访问日期 2026-08-30）
23. `[同行评审原始研究]` 圈养实验显示负子蟾没有舌，能靠快速扩大口咽腔产生惯性吸食；前肢可单独抓取，也可和吸食协同。四只成体用蚯蚓完成的实验说明捕食动作，不说明野外主食是蚯蚓。[Carreño & Nishikawa 2010](https://doi.org/10.1242/jeb.043380)（访问日期 2026-08-30）
24. `[同行评审原始研究]` 八只圈养负子蟾捕捉活鱼时，吸入水流把鱼带入口中，星形指尖可围堵逃逸路线；体型更大或距离更远的鱼更容易逃脱。该实验解释捕食机械，不足以把本种标为 `piscivore` 或声称自然食谱以鱼为主。[Fernandez et al. 2017, feeding trials](https://doi.org/10.1643/CH-16-510)（访问日期 2026-08-30）
25. `[同行评审原始研究]` 吸食涉及口咽、肩带、躯干和骨盆系统；舌骨牵引肌甚至起于股骨附近。作者提出其口咽容量可能接近静息身体总体积，并用“可能”讨论负子蟾属在四足动物中的独特性。页面应保留这个不确定词，不写成已经穷尽所有四足类的唯一纪录。[Fernandez et al. 2017, suction morphology](https://doi.org/10.1002/jmor.20707)（访问日期 2026-08-30）
26. `[同行评审原始研究]` 繁殖采用腹股沟式抱对。一个圈养配对先持续至少 24 小时、可能约 30 小时的抱对；雌体背部和泄殖孔在产卵前明显肿胀。雌体随后发起连续的垂直翻转环路。这是单一配对的精细观察，不是所有交配必然持续的时钟。[Rabb & Rabb 1960](https://doi.org/10.2307/1439751)（访问日期 2026-08-30）
27. `[同行评审原始研究]` 翻转中段两体短暂水平倒置，雌体每次释放约 3–5 枚卵；卵先落在雄体腹部和临时皮褶上，回正下降时再落到雌体已肿胀的背上。1963 年补充观察确认新产卵短时间带黏性。这个顺序支持“卵暂时黏附背部”，不支持“卵掉进预先存在的孔”。[Rabb & Rabb 1960](https://doi.org/10.2307/1439751)；[Rabb & Rabb 1963](https://doi.org/10.2307/1440965)（访问日期均为 2026-08-30）
28. `[同行评审原始研究]` 雄体在下降时的夹抱压力会让每批卵更牢地贴在背部。论文把雄体推进和泄殖孔附近的浑浊排出物解释为受精发生的线索，但没有直接看见精液接触每枚卵；“受精恰在某一秒发生”属于作者推断，不能写成直接观察。[Rabb & Rabb 1960](https://doi.org/10.2307/1439751)（访问日期 2026-08-30）
29. `[同行评审原始研究]` 卵黏附后，雌体富血管的背部皮肤增生并围绕每枚卵形成独立育儿室。正确的因果顺序是“卵黏附，皮肤随后包围”，不是“雄体把卵逐个塞入洞中”。“背部育儿室”“皮肤育幼囊”比“怀孕的洞”准确。[Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)；[Rabb & Rabb 1963](https://doi.org/10.2307/1440965)（访问日期均为 2026-08-30）
30. `[同行评审原始研究]` 发育方式应写作“背部育儿室内的内营养性幼体发育和变态，没有自由生活、摄食的蝌蚪期”。胚胎仍形成蝌蚪样幼体、尾部并经历变态；尾吸收标志变态高潮结束。`直接发育` 不能压平为“没有幼体阶段”或“从卵直接变成微型成蛙”。[Trueb et al. 2000](https://pubmed.ncbi.nlm.nih.gov/10629097/)；[Fouquet et al. 2022](https://doi.org/10.1016/j.ympev.2022.107442)；[Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)（访问日期均为 2026-08-30）
31. `[同行评审原始研究]` 一个完整追踪的圈养产卵批次共 96 枚卵，其中 76 枚黏在背部、20 枚散落；活幼体在产卵后第 77–136 天陆续从育儿室开口离开。作者把它明确写成“本例”的孵育期差异。这既不是固定窝卵数，也不是固定“妊娠期”；温度、批次、计时起点都可能影响跨度。[Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)（访问日期 2026-08-30）
32. `[同行评审原始研究]` 另一场详细交配约持续三小时产卵，至少释放 66 枚；55 枚最初在背上，雌体擦过管道后又脱落两枚。这个个案和 96 枚个案本身已显示“固定产 100 枚”不成立。后来的 `96–273` 常见范围无法从已审读的 1960 年原文直接核实，不应进入编辑正文或 featured stat。[Rabb & Rabb 1960](https://doi.org/10.2307/1439751)；[Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)（访问日期均为 2026-08-30）
33. `[同行评审原始研究]` 幼体完成尾吸收和变态后以小蛙形态自行离开育儿室。现有来源不支持“母体逐个挤出幼体”或“幼体撕裂母体皮肤”；把正常开口离巢写成“爆出背部”属于惊悚化改写。[Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)；[Trueb et al. 2000](https://pubmed.ncbi.nlm.nih.gov/10629097/)（访问日期均为 2026-08-30）
34. `[同行评审原始研究]` 雄体会在水下发出金属样点击声。1960 年解剖把声源解释为成对杓状软骨/骨化结构的腹面关节开合，不是“弹响舌骨”；更新的负子蟾科研究可支持该科缺少普通蛙类声带，但没有重新直接测试 `P. pipa` 的每一处声源运动。[Rabb 1960](https://doi.org/10.2307/1439780)；[Tobias et al. 2011](https://doi.org/10.1186/1471-2148-11-114)（访问日期均为 2026-08-30）
35. `[官方保护评估 + 同行评审原始研究]` 全球评估未把本种列为受胁，但局地栖息地会受伐木、农业扩张、居民点、水质恶化和水文改变影响。特立尼达研究只提出当地污染和退化担忧，不能升级为已量化的全球下降率。[IUCN current assessment](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)；[Amphibians of Ecuador account](https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa)；[Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)（访问日期均为 2026-08-30）
36. `[同行评审原始研究 + 编辑推断]` 可证实的生态角色是水生肉食性捕食者，取食甲壳类和昆虫等无脊椎动物，偶有鱼类记录。没有物种级研究证明它“控制蚊虫”“保护农田”或是关键种；这些生态服务词不应进入页面。[Alves-Pinto et al. 2014](https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014)；[Fernandez et al. 2017](https://doi.org/10.1643/CH-16-510)（访问日期均为 2026-08-30）
37. `[保护建议，依据原始研究]` 合理行动包括保护低地森林的池塘、小溪、牛轭湖、沼泽和季节泛滥连通性，维持水质与自然水位变化；跨区域收集凭证和遗传样本，厘清五个 OTU 的种界；监测占域和种群趋势。前两项回应实测生境和移动，后两项回应分类与趋势缺口，不能冒充 IUCN 已指定的强制恢复方案。[Fouquet et al. 2022](https://doi.org/10.1016/j.ympev.2022.107442)；[Crnobrna et al. 2026](https://herpetologynotes.org/index.php/hn/article/download/107/193/3738)；[Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)（访问日期均为 2026-08-30）
38. `[政府间文件]` 2023 年 CITES 委托的两栖贸易综述把 `Pipa pipa` 的 CITES 栏列作 `N/A`；页面不能称它“已列入 CITES 附录”。法律状态会变，发布法律性文案前仍须查询 CITES 当前 checklist，并核对来源国、目的国和地方野生动物法。[CITES amphibian trade review](https://cites.org/sites/default/files/common/docs/meeting_info/amphibians/International%20Trade%20in%20Amphibians%20DRAFT%2015%20Nov%202023.pdf)；[CITES Species+ checklist](https://checklist.cites.org/)（访问日期均为 2026-08-30）
39. `[政府间执法文件]` 一宗苏里南至日本运输案中，143 只负子蟾和三只蜥蜴与藏在假底下的 CITES 附录 II 翡翠树蚺一并被扣。文件不能证明负子蟾本身因 CITES 列名而违法，也不能把一次运输事件写成全球主要威胁。[CITES enforcement document](https://cites.org/sites/default/files/documents/E-AC33-49-05.pdf)（访问日期 2026-08-30）
40. `[同行评审原始研究]` 哥伦比亚 2018–2022 年非法两栖贸易数据中只列一只被扣押 `P. pipa`。样本足以说明贸易执法会触及本种，不足以估计全球规模。面向公众的档案不应提供捕捉地点、获取渠道或繁殖交易技巧；如涉及活体，安全表述是依法、可追溯、符合生物安全且绝不放生。[Colombian illegal amphibian trade study](https://doi.org/10.22201/fc.25942158e.2025.2.1050)（访问日期 2026-08-30）

## 名称与分类实现

~~~ts
id: 'species-pipa-pipa',
slug: 'surinam-toad',
names: {
  zh: '负子蟾',
  en: 'Surinam Toad',
  aliases: [
    'Suriname Toad',
    'Common Surinam Toad',
    'Star-fingered Frog',
    'Surinam Water-toad',
  ],
},
scientificName: 'Pipa pipa',
taxonomy: {
  kingdom: { scientificName: 'Animalia', zhName: '动物界' },
  phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
  class: { scientificName: 'Amphibia', zhName: '两栖纲' },
  order: { scientificName: 'Anura', zhName: '无尾目' },
  family: { scientificName: 'Pipidae', zhName: '负子蟾科' },
  genus: { scientificName: 'Pipa', zhName: '负子蟾属' },
},
~~~

`负子蟾科` 和 `负子蟾属` 是仓库中文编辑名；命名法规以科学名为准。旧组合 *Rana pipa* 和历史异名只保留在来源说明。Fouquet 等的 OTU 是候选种界，不应直接改写成五个已正式命名的 `P. pipa` 物种。

## IUCN、评估日期与趋势

~~~ts
conservation: conservation('LC', 'stable', 2021),
metrics: {},
~~~

| 字段 | 推荐值 | 证据边界 |
| --- | --- | --- |
| `code` | `LC` | assessment id 85900348 的现行类别为 Least Concern。 |
| `trend` | `stable` | 现行机构账户所载全球趋势；不表示每个未描述 OTU 或每个局地种群稳定。 |
| `assessedYear` | `2021` | IUCN 引文元数据日期为 2021-04-13；2023-1 是发布版本。 |
| `criteria` | 省略 | LC 没有受胁类别 A–E criteria 字符串。 |
| `estimatedMatureIndividuals` | 省略 | “推定种群大”不是可转换的上下限。 |

旧 assessment id 61414791 对应 DOI `10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en`，元数据日期是 2014-09-09。不要在同一实现中拼接旧 assessment id、新类别和 2023 发布年份。

## 分布、生境与地图

~~~ts
distribution: {
  realms: ['freshwater'],
  continents: ['南美洲'],
  regions: [
    '亚马孙流域低地',
    '圭亚那地盾与三圭亚那地区',
    '奥里诺科部分低地',
    '特立尼达岛淡水湿地',
  ],
  countries: [
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '厄瓜多尔',
    '法属圭亚那',
    '圭亚那',
    '秘鲁',
    '苏里南',
    '特立尼达和多巴哥',
    '委内瑞拉',
  ],
  endemicTo: ['南美洲'],
  range:
    '按当前广义 Pipa pipa 口径，原生于亚马孙流域、圭亚那地盾及特立尼达的低地淡水环境；2022 年遗传研究在该名下恢复出五个 OTU，因此范围边缘、谱系连接和各谱系风险仍需修订。波多黎各只有疑似宠物释放的非原生记录，不列入原生范围。',
  center: { lat: -3.5, lng: -61.5 },
},
~~~

`center` 只是亚马孙中部的地图视口焦点，不代表密度中心、模式产地或精确栖息点。

| habitat.name | realm | `isPrimary` | 推荐描述 | 边界 |
| --- | --- | ---: | --- | --- |
| 热带低地森林缓流与静水 | freshwater | true | 林内缓流水道、小溪回水、泥底或落叶底池塘。 | 不把一处水温、pH 或海拔推广到全范围。 |
| 泛滥平原、牛轭湖与季节湿地 | freshwater | 省略 | 永久水体与雨季淹水洼地共同提供栖息和换水体通道。 | 陆上穿越是水文周期中的移动，不等于陆栖。 |
| 沼泽与林缘池塘 | freshwater | 省略 | 水流慢、底质复杂且有沉水落叶的浅水环境。 | 可利用受改变环境不等于耐受任何污染或排水。 |
| 特立尼达林溪 | freshwater | 省略 | 当前记录来自森林中缓慢的黑水小溪。 | 单一溪段不能代表整个岛。 |

## 体尺、体重、寿命和数量边界

| 项目 | 可核验数值 | 可用方式 | 不可用方式 |
| --- | --- | --- | --- |
| 系统学有性别样本 | 雌 105–171 mm SVL；雄 106–154 mm SVL | 正文说明一个系统学样本范围。 | 当作全物种成体硬边界。 |
| 特立尼达成体记录 | 雄 70–100 mm；卵背雌体 120–140 mm | 证明成体雄体可小于 105 mm。 | 当作全球典型范围。 |
| 已发表最大值 | 约 200 mm SVL | `measurements.length.max = 20 cm`，note 标作极端纪录。 | 写“通常长 20 cm”。 |
| 两只生殖雌体 | 107/110 mm，110/85 g | 说明为何不能推成人体重范围。 | 填 `adultMassKg: [0.085, 0.11]`。 |
| 圈养最大寿命 | 7.7 年 | 限定 key fact。 | 填野外寿命或固定 lifespan range。 |
| 世代长度、成熟年龄 | 无可靠物种级值 | 留空。 | 从圈养孵育天数推导。 |
| 全球数量 | 无上下限 | 留空。 | 把“推定大种群”换算成数字。 |

推荐：

~~~ts
measurements: {
  length: {
    max: 20,
    unit: 'cm',
    note:
      '已发表吻肛长极端值；系统学有性别样本为雌 10.5–17.1 cm、雄 10.6–15.4 cm，特立尼达成体雄体可低至 7 cm，因此不是典型范围或全物种成体下限',
  },
},
metrics: {},
~~~

## 食性、捕食机械、活动与标签

~~~ts
diet: {
  types: ['carnivore'],
  foods: [
    '野外胃含物中的水生甲壳类，包括桡足类与十足目',
    '野外胃含物中的昆虫幼体和水生半翅目',
    '少量野外记录与圈养实验中的小鱼',
  ],
  description:
    '负子蟾是无舌的水生肉食者，通过迅速扩大口咽和躯干产生惯性吸食，星形前指可探测近距离水流并围堵猎物。局地胃含物研究支持甲壳类和昆虫等无脊椎动物；活鱼与蚯蚓实验主要解释动作，不能用来断言自然食谱以鱼或蚯蚓为主。',
},
activity: [
  '高度水栖，多在缓流或静水底部活动',
  '野外多在夜间检出，但没有只在夜间活动的证据',
  '依靠惯性吸食并以无蹼前肢协同围堵猎物',
  '水位变化时可在永久水体与季节湿地之间跨陆地移动',
  '雄体在水下发出金属样点击声',
  '繁殖时腹股沟抱对并反复完成垂直翻转环路',
],
tags: [
  '无尾目',
  '负子蟾科',
  '南美洲',
  '淡水',
  '高度水栖',
  '无舌吸食',
  '星形感觉指尖',
  '背部皮肤育幼',
  '内营养性直接发育',
  '无自由生活蝌蚪期',
],
~~~

不使用 `piscivore` 或 `insectivore`，因为现有野外样本不足以证明鱼或昆虫占全范围食谱的主导地位。

## 繁殖、背部孵育和出幼顺序

| 阶段 | 直接观察 | 推断或限制 | 主要来源 |
| --- | --- | --- | --- |
| 抱对准备 | 腹股沟抱对；一个配对持续至少 24 小时、可能约 30 小时；雌体背部和泄殖孔肿胀。 | 单一圈养配对，时长不是物种常数。 | [Rabb & Rabb 1960](https://doi.org/10.2307/1439751) |
| 翻转与排卵 | 雌体发起翻转；倒置中每次排约 3–5 枚卵，卵先落在雄体腹部。 | 每批数量来自一个精细观察。 | [Rabb & Rabb 1960](https://doi.org/10.2307/1439751) |
| 转移到背部 | 下降回正时卵落到雌体背上；新产卵短暂有黏性。 | 不是雄体逐枚用手塞卵。 | [Rabb & Rabb 1963](https://doi.org/10.2307/1440965) |
| 压贴与受精 | 雄体夹抱和推进使卵更牢贴背；录像见泄殖孔附近浑浊排出物。 | 受精时点由行为和排出物推断，未直接看见精液接触每枚卵。 | [Rabb & Rabb 1960](https://doi.org/10.2307/1439751) |
| 形成育儿室 | 富血管背部皮肤在黏附卵周围增生，形成独立皮肤室。 | 没有预先存在的洞；卵不是主动“沉入”。 | [Rabb & Snedigar 1960](https://doi.org/10.2307/1439843) |
| 幼体发育 | 育儿室中经历内营养性蝌蚪样幼体期、尾吸收和变态。 | 直接发育指没有自由生活摄食蝌蚪期，不是没有幼体阶段。 | [Trueb et al. 2000](https://pubmed.ncbi.nlm.nih.gov/10629097/) |
| 出幼 | 完成变态的小蛙从育儿室开口陆续离开。 | 不写母体挤出、幼体撕裂或“爆出”。 | [Rabb & Snedigar 1960](https://doi.org/10.2307/1439843) |

一个批次的 77–136 天可以作为研究史中的限定事实，不适合 featured stat。若正文需要概括时长，使用“一个圈养批次在约 11 至 19 周内陆续出幼”，紧跟“不是固定孵育期”。不要使用人类化的“怀孕”“妊娠”或“分娩”。

## 推荐摘要与描述

~~~ts
summary:
  '负子蟾是亚马孙与圭亚那低地淡水中的扁平无舌蛙，借星形机械感觉指尖和惯性吸食捕猎；繁殖时卵经翻转环路转移到雌体背上，皮肤随后围成育儿室，幼体在其中完成内营养性发育与变态。',
description:
  '负子蟾属于负子蟾科负子蟾属，按当前广义分类口径分布于亚马孙流域、圭亚那地盾和特立尼达。它身体宽而扁平，眼小、后足全蹼、前指末端反复分叉；八个前指共有 128 个机械感觉小叶，可感知近距离水流扰动。它没有舌，通过迅速扩大口咽和躯干吸入甲壳类、昆虫等猎物，前肢还能围堵逃逸目标。繁殖时雌体和雄体腹股沟抱对并连续翻转，短暂有黏性的卵在回正时落到雌体肿胀背部，皮肤随后在卵周围形成独立育儿室。胚胎并非跳过所有幼体发育，而是在室内经历内营养性蝌蚪样阶段、尾吸收和变态，最后由小蛙自行离开。IUCN 现行记录日期为 2021 年，类别无危、趋势稳定；传统名称下至少五个遗传 OTU 使各谱系的范围与风险仍需修订。',
~~~

## 六个 story candidates

~~~ts
storySections: [
  {
    key: 'a-body-built-for-still-water',
    label: '水底轮廓',
    title: '扁平身体贴着泥底和落叶',
    body:
      '负子蟾宽而强烈扁平，三角形头部几乎与身体连成一片。小眼位于背面，后足完全蹼化，褐色斑驳和粗糙皮肤与泥底、落叶底相衬。它高度水栖，却不是永远不离水：秘鲁研究记录到个体随季节水位跨过陆地，在永久湖水和暂时淹水地之间移动。',
  },
  {
    key: 'starred-fingertip-fovea',
    label: '星形指尖',
    title: '八个前指，把水流变成触觉地图',
    body:
      '每个前指末端连续分叉成 16 个小叶，全身八个前指共 128 个。实验显示这些小叶具有密集、低阈值的机械感觉输入；负子蟾能在约 5 毫米实验距离内先于接触察觉猎鱼产生的水动力扰动。这个结果是近距离触觉，不是“用手指闻味”。',
  },
  {
    key: 'tongueless-suction',
    label: '无舌吸食',
    title: '嘴、肩带、躯干和骨盆一起制造水流',
    body:
      '负子蟾没有舌。捕食时口咽迅速扩张，水和猎物一起被吸入口中，前肢又可围住逃逸路径。实验甚至发现牵引舌骨的肌肉与后部身体相连；这套全身协作解释了动作，却不代表实验用蚯蚓和鱼就是它在所有河流中的主食。',
  },
  {
    key: 'turnover-egg-transfer',
    label: '翻转转卵',
    title: '卵不是塞进孔里，而是在翻转中落到背上',
    body:
      '抱对中的雌体发起垂直环路。两体倒置时，她每次释放几枚卵；卵先落在雄体腹部，回正下降时再落到她已肿胀的背上。新卵短暂有黏性，雄体夹抱让它们贴得更牢。随后才是雌体皮肤增生并围住卵，没有预先存在的育幼孔。',
  },
  {
    key: 'larval-life-inside-skin',
    label: '室内变态',
    title: '没有自由游泳蝌蚪，不等于没有幼体发育',
    body:
      '每枚卵被独立皮肤室包围。胚胎靠卵内营养发育，形成蝌蚪样幼体和尾部，再在室内完成尾吸收与变态。最后离开的已经是小蛙。一个圈养批次在第 77 至 136 天陆续出幼，这只是一个批次的跨度，不是固定“妊娠期”。',
  },
  {
    key: 'one-name-five-lineages',
    label: '种界未决',
    title: '一张广布地图下，至少藏着五条遗传支系',
    body:
      '现行分类仍接受 Pipa pipa，但 2022 年研究在传统名称下恢复出五个 OTU。IUCN 的无危评估描述这个广义单元，不能自动证明每个候选种都分布广、数量大。保护湿地的同时，凭证标本、遗传采样和跨区域趋势监测决定我们究竟在保护几个物种。',
  },
],
~~~

## 推荐 key facts

以下条目均受上文来源和限定约束；实现可选 20–26 条，不要删去“一个批次”“实验”“按当前广义口径”等词。

~~~ts
keyFacts: [
  '现行接受名为 Pipa pipa (Linnaeus, 1758)，原始组合是 Rana pipa。',
  '它属于无尾目负子蟾科，不是蟾蜍科物种。',
  '负子蟾属目前有七个正式接受种，但 2022 年研究识别出 15 个 OTU。',
  '传统 Pipa pipa 名下恢复出五个 OTU，部分种界仍需更多核基因和空间采样。',
  '按当前广义口径，原生范围横跨亚马孙、圭亚那地盾和特立尼达。',
  '波多黎各记录疑似来自宠物释放，状态和影响未知，不属原生范围。',
  '它高度水栖，主要利用低地森林中的缓流、静水和季节湿地。',
  '秘鲁研究支持个体随水位变化跨陆地换水体，因此不能写“从不离水”。',
  '身体宽而扁平，眼小、无外露鼓膜，后足完全蹼化。',
  '它没有舌，通过迅速扩大口咽和躯干产生惯性吸食。',
  '每个前指末端有 16 个感觉小叶，八个前指共 128 个。',
  '实验中指尖可在约 5 毫米范围察觉猎物造成的水动力扰动。',
  '指尖是机械感觉器官，没有证据说它们负责闻味或品尝。',
  '局地胃含物支持取食水生甲壳类、昆虫幼体和水生半翅目。',
  '蚯蚓和活鱼实验解释捕食机械，不能定义野外主食。',
  '一个系统学样本中雌体 10.5–17.1 厘米、雄体 10.6–15.4 厘米。',
  '特立尼达记录到 7–10 厘米成体雄体，说明 10.5 厘米不是成体硬下限。',
  '约 20 厘米是已发表最大吻肛长，不是常见成体长度。',
  '没有可靠的全物种成体体重范围；85 和 110 克只来自两只生殖雌体。',
  '圈养最大寿命记录为 7.7 年，野外寿命和世代长度未知。',
  '繁殖采用腹股沟抱对，雌体发起连续垂直翻转环路。',
  '倒置阶段排出的卵先到雄体腹部，回正时再落到雌体肿胀背部。',
  '新产卵短时间有黏性，雌体皮肤随后在每枚卵周围形成独立育儿室。',
  '卵没有落进预先存在的洞，雄体也不是用手逐枚植入。',
  '幼体在背部室内靠卵黄发育并完成变态，没有自由生活、摄食的蝌蚪期。',
  '直接发育不等于没有幼体阶段；尾吸收标志变态高潮结束。',
  '一个圈养批次共 96 枚卵，不能据此定义固定窝卵数。',
  '同一批次在第 77 至 136 天陆续出幼，不能写成固定妊娠期。',
  '完成变态的小蛙从育儿室开口离开，没有证据支持“撕裂母体背部”。',
  '雄体在水下发出金属样点击声，旧研究把声源联系到成对杓状结构的关节。',
  'IUCN 现行记录日期是 2021 年，类别无危，趋势稳定。',
  '2023-1 是 IUCN 红皮书发布版本，不是评估年份。',
  '无危评估针对当前广义分类单元，不保证五个候选谱系都安全。',
  '现有证据不支持“控制蚊虫”“关键种”或量化生态服务。',
  '2023 年 CITES 贸易综述把本种列作 N/A，不能声称已列入 CITES 附录。',
],
~~~

## 威胁、行动与 featured stats

~~~ts
threats: [
  '局地低地森林、池塘、小溪、沼泽和泛滥平原因伐木、农业与居民点扩张而丧失或退化',
  '污染、沉积物增加和排水改变局地缓流与静水生境质量',
  '水文连通性中断可能阻碍永久水体与季节湿地之间的移动；影响规模仍待量化',
  '传统 Pipa pipa 名下至少五个 OTU，广义 LC 口径可能掩盖范围较窄的谱系',
  '活体贸易的来源、运输与放生会带来合规、动物福利和生物安全风险；全球威胁规模未量化',
],
conservationActions: [
  '保护低地森林中的缓流小溪、池塘、牛轭湖、沼泽及其岸带植被',
  '维持季节泛滥过程和永久水体之间的水文连通性',
  '控制污水、农业径流和不必要的河道改造，监测局地水质与占域',
  '开展跨国家的凭证、形态、核基因和基因组采样，厘清五个 OTU 的种界与范围',
  '分别监测候选谱系和岛屿种群，不用广义 LC 替代局地趋势数据',
  '活体只采用合法、可追溯且符合动物福利和生物安全的来源，绝不放生圈养个体',
],
featuredStats: [
  {
    key: 'iucn-status',
    label: 'IUCN',
    value: 'LC',
    note: '现行评估记录日期 2021-04-13，全球趋势 stable；2023-1 是发布版本',
  },
  {
    key: 'pipa-pipa-lineages',
    label: '传统种名下的 OTU',
    value: '5',
    note: '2022 年遗传界定结果；不是五个已经正式命名的种',
  },
  {
    key: 'fingertip-lobules',
    label: '八个前指末端小叶',
    value: '128',
    note: '成体形态与 2026 年机械感觉实验',
  },
],
~~~

不把 `96 eggs`、`77–136 days`、`20 cm` 或 `7.7 years` 设成醒目的 featured stat。它们分别是一个繁殖批次、一个批次的出幼跨度、已发表极端体长和圈养最大寿命，脱离限定后都很容易被读成物种常数。

## 不得进入编辑正文的诱人说法

| 说法 | 结论 | 原因与安全替代 |
| --- | --- | --- |
| “每窝固定 100 枚”或“每窝 96–273 枚” | 不采用 | 原文可核验的是不同圈养个案；96–273 的常见二手范围不能由已审读原文直接复现。写“窝卵数变化，单个完整批次共 96 枚”。 |
| “两只雌体有 74 和 101 枚卵，所以窝卵数 74–101” | 不采用 | 论文计数的是尚在发育的卵细胞，不是已产完整窝。 |
| “妊娠固定 12–20 周 / 4–5 个月” | 不采用 | 一个批次在第 77–136 天陆续出幼；使用“背部孵育/育幼”，并注明圈养批次。 |
| “卵沉进背上的洞” | 错误 | 新卵先黏附肿胀背部，皮肤随后增生并围住卵；没有预先存在的洞。 |
| “雄体用手把每枚卵塞进雌体背部” | 错误 | 直接观察是翻转中卵经雄体腹部落到雌体背上，夹抱压力帮助压贴。 |
| “受精时刻被直接拍到” | 证据过度 | 研究者看见行为和浑浊排出物，具体受精时点仍是推断。 |
| “完全没有蝌蚪/幼体阶段” | 错误 | 室内有内营养性蝌蚪样幼体发育、尾吸收和变态；没有的是自由生活摄食阶段。 |
| “幼体爆裂/撕开母亲的背” | 错误且惊悚化 | 完成变态的小蛙从育儿室开口离开。使用“出幼”或“离开育儿室”。 |
| “母体逐个挤出或帮助每只幼体出生” | 不采用 | 当前来源没有建立这种主动逐只协助。 |
| “主要吃鱼” | 不采用 | 活鱼论文是圈养机械实验；野外小样本以甲壳类和昆虫等无脊椎动物为主。 |
| “主要吃蚯蚓” | 不采用 | 蚯蚓是实验猎物，不是物种级野外食谱。 |
| “星形手指用来闻味/品尝” | 错误 | 现有实验支持低阈值机械感觉与水动力检测。 |
| “严格完全水栖，从不上岸” | 错误 | 2026 年研究支持水位变化时的陆上换水体移动。 |
| “雌体总比雄体大” | 不采用 | 局地样本和系统学样本不能建立无例外的全物种规则。 |
| “成体通常 20 cm、85–110 g” | 不采用 | 20 cm 是极端体长；85/110 g 是两只特定生殖雌体。 |
| “野外寿命 7.7 年” | 错误 | 7.7 年是圈养最大记录。 |
| “IUCN 2023 年评估” | 字段错误 | 记录日期为 2021-04-13；2023-1 是发布版本。 |
| “LC 证明所有五个谱系稳定” | 错误 | LC 评估使用传统广义种界。 |
| “已受 CITES 附录保护” | 当前证据不支持 | 2023 年委托综述列 N/A；法律文案发布前查实时 checklist 和各地法律。 |
| “143 只被扣说明负子蟾本身是 CITES 走私物” | 错误归因 | 同一运输中的附录 II 树蚺藏于假底；文件未说负子蟾因 CITES 列名而违法。 |
| “负子蟾能控制蚊虫，是关键种” | 不采用 | 没有物种级生态功能实验或量化服务研究。 |

视觉和文案应回避“密集孔洞恐惧”“身体恐怖”“爆皮”等猎奇框架。可讲述翻转转卵、皮肤随发育形成育儿室和室内变态，但要用解剖顺序和观察边界取代惊悚比喻。

## 图片与图注护栏

本简报只规定生物学内容，不生成图片。六张档案图可分别表现成体轮廓、星形指尖、吸食、翻转转卵、背部室内发育和水文移动；每张图都要服从以下约束。

| 画面主题 | 必须保留 | 禁止或需限定 | 证据 |
| --- | --- | --- | --- |
| 成体与生境 | 宽而扁平的褐色至橄榄褐色身体、三角头、小型背位眼、全蹼后足；背景用低地森林的缓流、池塘、泥底或落叶底淡水。 | 不画成陆栖蟾蜍站姿，不加突眼、长舌、外露鼓膜或海水珊瑚背景。 | [Trueb & Cannatella 1986](https://www.jstor.org/stable/3892485)；[Amphibians of Ecuador](https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa) |
| 星形指尖 | 前足无蹼，每个成体指尖呈 16 个末端小叶；需要全足特写时共八个前指、128 个小叶。 | 不画成吸盘、发光器、嗅觉触角或超过四指的单只前足；`约 5 mm` 只能写作实验中的短距水动力检测。 | [Pérez-Rojas & Jerez 2022](https://doi.org/10.11606/1807-0205/2022.62.008)；[Meredith et al. 2026](https://doi.org/10.1007/s00359-026-01838-w) |
| 吸食 | 嘴在猎物近处张开，水流与猎物一起入口，前肢可围堵；舌不可见。 | 不画弹舌捕食，不用满口牙齿撕咬；鱼或蚯蚓画面图注必须说“圈养机械实验”，不能暗示自然主食。 | [Carreño & Nishikawa 2010](https://doi.org/10.1242/jeb.043380)；[Fernandez et al. 2017](https://doi.org/10.1643/CH-16-510) |
| 翻转转卵 | 腹股沟抱对；倒置阶段卵位于雄体腹部附近，回正下降时到雌体已肿胀背部。 | 不画雄体用手逐枚植入，不画预先钻好的孔，不把具体受精瞬间当成直接看见。 | [Rabb & Rabb 1960](https://doi.org/10.2307/1439751)；[Rabb & Rabb 1963](https://doi.org/10.2307/1440965) |
| 背部发育与出幼 | 皮肤在已黏附卵周围形成彼此分开的育儿室；出幼画面表现完成变态的小蛙从室口离开。 | 不使用血、撕裂、脓液、爆裂或密集孔洞的惊悚构图；不把不同发育日龄全部塞在同一只雌体背上。 | [Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)；[Trueb et al. 2000](https://pubmed.ncbi.nlm.nih.gov/10629097/) |
| 季节移动 | 若画陆上个体，应同时给出永久水体、季节淹水地或水位变化语境。 | 不把它表现成常年远离水的林地蛙；图注中的 100 米写作研究支持的最低移动尺度，约 300 米只能称陷阱位置推断。 | [Crnobrna et al. 2026](https://herpetologynotes.org/index.php/hn/article/download/107/193/3738) |

图注统一用“背部孵育”“育儿室”“出幼”和“没有自由生活、摄食的蝌蚪期”。不用“怀孕”“分娩”“背上长洞”“把卵种进肉里”“幼体爆出”等词。若显示圈养实验，图注必须标明圈养；若显示一个研究批次的 96 枚或 77–136 天，图注必须写“一个批次”，不能去掉样本限定。[Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)（访问日期 2026-08-30）

不要公开繁殖雌体、局地稀少谱系或非法贸易个体的精确采集坐标，也不要为画面摆拍而抓取、翻转或挤压野生个体。图片来源和许可应可追溯；活体场景须能说明合法来源与动物福利条件。该要求是编辑和伦理护栏，不是对本种法定保护级别的额外断言。[Fouquet et al. 2022](https://doi.org/10.1016/j.ympev.2022.107442)；[CITES checklist](https://checklist.cites.org/)（访问日期均为 2026-08-30）

## 实现就绪的来源清单

以下目录含 30 个证据条目和至少 32 个独立 HTTPS 来源，覆盖分类、保护、分布、原始研究、机构账户与法律/贸易材料。后附实现数组精选其中 28 个来源；`accessedAt` 统一为实际核验日 `2026-08-30`。

| # | 来源类型 | 来源与主要用途 |
| ---: | --- | --- |
| 1 | 官方分类数据库 | [AMNH Amphibian Species of the World: Pipa pipa](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa)：接受名、权威、异名、英文名和原生国家。 |
| 2 | 官方分类数据库 | [AMNH Amphibian Species of the World: Pipa](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa)：属内七个现行接受种。 |
| 3 | 美国政府分类页 | [USFWS Pipa pipa](https://www.fws.gov/species/pipa-pipa-pipa-pipa)：政府采用名和分类交叉核对。 |
| 4 | 官方保护评估 | [IUCN current assessment](https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)：现行 assessment id、LC 和正式引文。 |
| 5 | DOI 注册元数据 | [Crossref current IUCN record](https://api.crossref.org/works/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en)：2021-04-13 记录日期与 2023-1 版本边界。 |
| 6 | 官方历史保护评估 | [IUCN historical assessment](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en)：旧 assessment id，仅作历史比较。 |
| 7 | DOI 注册元数据 | [Crossref historical IUCN record](https://api.crossref.org/works/10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en)：旧记录日期 2014-09-09。 |
| 8 | 机构物种账户 | [Amphibians of Ecuador / BioWeb](https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa)：厄瓜多尔分布、生境、活动和保护综述。 |
| 9 | 机构 IUCN 数据聚合 | [Encyclopedia of Life: Pipa pipa](https://eol.org/pages/332922)：IUCN 归属的 stable 趋势交叉核对。 |
| 10 | 同行评审原始研究 | [Fouquet et al. 2022](https://doi.org/10.1016/j.ympev.2022.107442)：15 个属内 OTU、传统 P. pipa 内五个 OTU、内营养发育演化。 |
| 11 | 馆藏/系统学研究 | [Trueb & Cannatella 1986, JSTOR stable record](https://www.jstor.org/stable/3892485)：属级系统学、形态和体尺；该 stable id 未注册为 Crossref DOI。 |
| 12 | 同行评审原始研究 | [Pérez-Rojas & Jerez 2022](https://doi.org/10.11606/1807-0205/2022.62.008)：83 个哥伦比亚样本、皮褶、侧线和指尖分叉。 |
| 13 | 同行评审原始研究 | [Meredith et al. 2026](https://doi.org/10.1007/s00359-026-01838-w)：指尖 128 小叶、机械阈值、神经表征和水动力行为实验。 |
| 14 | 同行评审原始研究 | [Trueb et al. 2000](https://pubmed.ncbi.nlm.nih.gov/10629097/)：背部取出胚胎和幼体的骨骼发育、尾吸收和变态高潮。 |
| 15 | 机构物种账户 | [University of Michigan Animal Diversity Web](https://animaldiversity.org/accounts/Pipa_pipa/)：系统学论文体尺的机构性整理。 |
| 16 | 同行评审原始研究索引 | [Alves-Pinto et al. 2014, Herpetology Notes volume index](https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014)：局地形态、两只生殖雌体、胃含物和卵巢数据。 |
| 17 | 同行评审原始研究 | [Carreño & Nishikawa 2010](https://doi.org/10.1242/jeb.043380)：四只圈养成体的惯性吸食和前肢协同实验。 |
| 18 | 同行评审原始研究 | [Fernandez et al. 2017, prey capture](https://doi.org/10.1643/CH-16-510)：八只圈养个体捕鱼的成功和失败机制。 |
| 19 | 同行评审原始研究 | [Fernandez et al. 2017, suction morphology](https://doi.org/10.1002/jmor.20707)：无舌、舌骨牵引和全躯干吸食形态。 |
| 20 | 同行评审原始研究 | [Rabb & Rabb 1960](https://doi.org/10.2307/1439751)：抱对、翻转、排卵、转移和受精推断。 |
| 21 | 同行评审原始研究 | [Rabb & Rabb 1963](https://doi.org/10.2307/1440965)：补充交配观察和新产卵短时黏性。 |
| 22 | 同行评审原始研究 | [Rabb & Snedigar 1960](https://doi.org/10.2307/1439843)：单批 96 枚卵、皮肤围卵、室内变态及第 77–136 天出幼。 |
| 23 | 同行评审原始研究 | [Rabb 1960](https://doi.org/10.2307/1439780)：雄体水下点击声及杓状结构声源解释。 |
| 24 | 同行评审原始研究 | [Crnobrna et al. 2026](https://herpetologynotes.org/index.php/hn/article/download/107/193/3738)：秘鲁永久水体与季节淹水地间的陆上移动。 |
| 25 | 同行评审原始研究 | [Ali et al. 2023](https://doi.org/10.17161/randa.v30i1.20954)：特立尼达当前记录、局地体尺和溪流观察。 |
| 26 | 政府非原生物种数据库 | [USGS Nonindigenous Aquatic Species](https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=2728)：波多黎各疑似宠物释放记录和未知状态。 |
| 27 | 机构寿命数据库 | [AnAge Pipa pipa](https://www.genomics.senescence.info/species/entry.php?species=Pipa_pipa)：圈养最大寿命 7.7 年及野外数据缺口。 |
| 28 | 政府间法律/贸易文件 | [CITES amphibian trade review](https://cites.org/sites/default/files/common/docs/meeting_info/amphibians/International%20Trade%20in%20Amphibians%20DRAFT%2015%20Nov%202023.pdf)、[CITES checklist](https://checklist.cites.org/)、[CITES enforcement document](https://cites.org/sites/default/files/documents/E-AC33-49-05.pdf)：N/A 状态、实时核验入口与运输案件语境。 |
| 29 | 同行评审贸易研究 | [Illegal trade of amphibians in Colombia, 2018–2022](https://doi.org/10.22201/fc.25942158e.2025.2.1050)：仅一只 P. pipa 扣押记录，约束贸易规模表述。 |
| 30 | 同行评审分布研究 | [Acosta-Galvis et al. 2016](https://doi.org/10.21068/C2016.v17n02a08)：哥伦比亚奥里诺科记录、历史分布和分类讨论。 |

实现数组可直接采用：

~~~ts
sources: [
  {
    title: 'Amphibian Species of the World 6.2: Pipa pipa',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Amphibian Species of the World 6.2: Pipa',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'U.S. Fish & Wildlife Service: Pipa pipa',
    url: 'https://www.fws.gov/species/pipa-pipa-pipa-pipa',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'IUCN Red List: Pipa pipa, assessment 85900348',
    url: 'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Crossref metadata: IUCN assessment 85900348',
    url: 'https://api.crossref.org/works/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'IUCN Red List historical assessment 61414791',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Amphibians of Ecuador: Pipa pipa',
    url: 'https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Encyclopedia of Life: Pipa pipa',
    url: 'https://eol.org/pages/332922',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Diversity, biogeography, and reproductive evolution in the genus Pipa',
    url: 'https://doi.org/10.1016/j.ympev.2022.107442',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'A revision of the genus Pipa',
    url: 'https://www.jstor.org/stable/3892485',
    kind: 'taxonomy',
    accessedAt: '2026-08-30',
  },
  {
    title: 'External morphology and lateral line system of four Pipa species',
    url: 'https://doi.org/10.11606/1807-0205/2022.62.008',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'A somatosensory fovea in the fingertips of the Surinam toad',
    url: 'https://doi.org/10.1007/s00359-026-01838-w',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Ontogeny of the bizarre: skeletal development in Pipa pipa',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10629097/',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Animal Diversity Web: Pipa pipa',
    url: 'https://animaldiversity.org/accounts/Pipa_pipa/',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Morphometric variation of Pipa pipa, with notes on diet and gonad development',
    url: 'https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Aquatic feeding in pipid frogs: Pipa pipa',
    url: 'https://doi.org/10.1242/jeb.043380',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'How a frog, Pipa pipa, succeeds or fails in catching fish',
    url: 'https://doi.org/10.1643/CH-16-510',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Morphology of the feeding apparatus in Pipa pipa',
    url: 'https://doi.org/10.1002/jmor.20707',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'On the breeding behavior of the Surinam toad, Pipa pipa',
    url: 'https://doi.org/10.2307/1439751',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Additional observations on the breeding behavior of Pipa pipa',
    url: 'https://doi.org/10.2307/1440965',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Development of Pipa pipa',
    url: 'https://doi.org/10.2307/1439843',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'On the unique sound production of the Surinam toad, Pipa pipa',
    url: 'https://doi.org/10.2307/1439780',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'First evidence of terrestrial dispersal in the Surinam toad',
    url: 'https://herpetologynotes.org/index.php/hn/article/download/107/193/3738',
    kind: 'ecology',
    accessedAt: '2026-08-30',
  },
  {
    title: 'Recent observations of the Suriname Toad in Trinidad',
    url: 'https://doi.org/10.17161/randa.v30i1.20954',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'USGS NAS: Pipa pipa',
    url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=2728',
    kind: 'distribution',
    accessedAt: '2026-08-30',
  },
  {
    title: 'AnAge: Pipa pipa longevity record',
    url: 'https://www.genomics.senescence.info/species/entry.php?species=Pipa_pipa',
    kind: 'general',
    accessedAt: '2026-08-30',
  },
  {
    title: 'CITES: International trade in amphibians, draft review',
    url: 'https://cites.org/sites/default/files/common/docs/meeting_info/amphibians/International%20Trade%20in%20Amphibians%20DRAFT%2015%20Nov%202023.pdf',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
  {
    title: 'CITES Animals Committee enforcement document AC33 Doc. 49.5',
    url: 'https://cites.org/sites/default/files/documents/E-AC33-49-05.pdf',
    kind: 'conservation',
    accessedAt: '2026-08-30',
  },
],
~~~

实现数组没有纳入实时 CITES checklist、哥伦比亚贸易论文和奥里诺科分布论文，是为了保持物种页面来源列表紧凑；它们仍属于本简报的合规、威胁和分布证据。若页面呈现法律状态，必须把 [CITES checklist](https://checklist.cites.org/) 加入运行时来源并在发布当日重新查询。
