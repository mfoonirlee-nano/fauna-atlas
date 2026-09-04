# 德州角蜥（*Phrynosoma cornutum*）完整档案研究

- 检索与核验日期：2026-09-04
- 推荐中文名：**德州角蜥**
- 推荐英文名：**Texas Horned Lizard**
- 接受学名：***Phrynosoma cornutum* (Harlan, 1825)**
- 建议 `slug`：`texas-horned-lizard`
- 使用范围：核对 `src/data/species.ts` 中新增的完整 `Species`，以及 1 张封面和 5 张详情图
- 证据口径：分类采用 ITIS 与 Reptile Database；中文名区分馆藏用名和中国大陆官方属级译名；全球保护状态采用 IUCN 2007 全球评估；体尺、繁殖、觅食和防御数字来自原始研究，并保留地点、样本、实验对象和年代。

本文以 `[S01]` 至 `[S23]` 标记来源。所有来源访问日期均为 2026-09-04；完整书目、URL 和证据限制见“来源索引与证据限制”。

## 研究问题

1. 当前接受名、原始组合、命名人、年份与六阶分类是什么，命名人为何需要括号？
2. “德州角蜥”“角蜥科”和“角蜥属”分别有哪一级中文权威依据？
3. IUCN 全球等级、趋势、评估日期、评估者、判据和种群数字可以怎样落库？
4. 原生范围、疑存记录和引入种群怎样分开表达？
5. 哪一组体尺能安全写入 `measurements`，为何不写 `metrics.adultLengthCm`？
6. 蚁食专化、觅食时段、微生境和繁殖数字各受哪些样地限制？
7. 眼眶周围血窦自体出血由什么捕食者和刺激触发，对哪些捕食者有效？
8. 防御活性来自眼腺还是全身血浆，化学成分已经确认到什么程度？
9. 全球 LC 与边缘种群消失、美国范围收缩、州级受威胁地位怎样同时呈现？
10. 六幅 AI 重建图可以展示什么，哪些画面细节不能当作科学证据？

## 实施结论

1. ITIS 将 *Phrynosoma cornutum* (Harlan, 1825) 列为有效现行名称，TSN 为 `173938`；原始组合是 Harlan 于 1825 年发表的 *Agama cornuta*。属名后来改变，因此当前命名人和年份放在括号内。[S01][S02][S03]
2. 六阶分类可写 Animalia、Chordata、Reptilia、Squamata、Phrynosomatidae、*Phrynosoma*。Reptile Database 同样接受这个种级名称，但其备注显示近年的亚种处理仍有分歧；当前档案不落亚种。[S02][S03][S04]
3. 台湾国立台湾博物馆的馆藏页面使用“德州角蜥蜴”，可作中文别名依据。项目主名“德州角蜥”沿用 TODO 的编辑选择；中国国家濒管办 2026 年官方附件只给出“角蜥科 Phrynosomatidae”和“角蜥属所有种 *Phrynosoma* spp.”，没有给 *P. cornutum* 中文种名。因此主名不应写成中国大陆统一官方种名。[S05][S06]
4. IUCN 全球评估为 LC、趋势 Stable，评估日期 2007-03-01，发布年份 2007，版本 3.1；评估者为 Geoffrey A. Hammerson，审核者为 Neil Cox、Janice Chanson 和 Simon Stuart。LC 条目没有判据代码，`criteria` 应省略。[S07]
5. IUCN 称成体总数未知，但“肯定超过 10,000，可能超过 100,000”。这是 2007 年的粗略量级判断，不是成熟个体普查、置信区间或当前估计，不能映射到 `metrics.estimatedMatureIndividuals`。[S07]
6. IUCN 以分布范围、占域、亚种群数与总体规模仍然较大为 LC 理由，同时承认部分边缘地区下降。`stable` 是旧全球评估的分类字段，不代表每个地区稳定，也不能覆盖 2007 年以后的新研究。[S07][S19]
7. 原生国家是美国和墨西哥。美国原生范围从大平原南部向西南延伸，覆盖堪萨斯、科罗拉多东南部、俄克拉何马、德州、新墨西哥和亚利桑那东南部等地；墨西哥范围包括索诺拉东北部、奇瓦瓦、杜兰戈、科阿韦拉、新莱昂、塔毛利帕斯、圣路易斯波托西和萨卡特卡斯等北部、东北部地区。[S07]
8. IUCN 对密苏里、阿肯色和路易斯安那等原生范围东缘记录保留疑问，并把北卡罗来纳、佛罗里达等美国东南部种群视为引入或建立种群。档案的 `countries` 只列原生国家，`range` 另述不确定东缘和引入种群。[S07]
9. 主要生境是开阔、干旱至半干旱的草原、沙漠灌丛、playa 边缘、冲积坡麓、沙丘和稀疏灌木地，基底从沙质到砾石、岩质均有记录。栖息地必须同时提供裸地、低草本或灌木、遮蔽物与可掘土壤；单一“沙漠”标签会漏掉大草原种群。[S07][S11][S21]
10. 南德州微生境研究发现，蜥蜴在上午和傍晚按可利用度使用裸地与草本，下午避开裸地并选择木本植被和凋落物作热避难处和遮蔽。该结果支持保留植被与裸地镶嵌，不支持把所有灌丛清除或把所有裸地封闭。[S11]
11. 跨纬度研究表格共列 279 件博物馆标本，其中成年样本 240 件。成年雄性吻肛长为 50.4–100.4 毫米，成年雌性为 61.6–116.3 毫米；不同地点和性别的均值不同，不能合成一个无条件的“典型成年体长”。安全字段是 `max: 11.6 cm`，并注明“成年吻肛长、研究样本最大值”，不补一个伪造的全域下限。[S08]
12. “约 5–8 英寸”一类自然教育资料通常指总长，不能与吻肛长拼成同一标准化范围。当前证据也没有可安全比较的全域成年体重或寿命区间，因此 `metrics` 保持空对象。[S08]
13. 亚利桑那 Portal 样地的 14 只成体在 139 小时观察中主要于约 07:00–11:30 活动，下午觅食很少；25 份粪便的 1,821 个猎物中，99.95% 是蚂蚁，97.69% 是收获蚁。该比例和时段只代表 1999 年 7 月的一个沙漠灌丛样地，不能写成全分布区恒定比例或全年时刻表。[S09]
14. 同一研究中 64.5% 的取食发生在开阔处，但蜥蜴近一半观察时间位于豆科灌木 *Prosopis* 附近；它们较常捕捉离开巢口分散活动的蚂蚁。食物与遮蔽是同一生境镶嵌的两个组成部分。[S09]
15. 高速摄影显示，德州角蜥倾向咬住蚂蚁中躯，避开头部和带螫针的腹部，再头朝前收回猎物；口腔黏液可包裹蚂蚁的口器。这支持“具有处理危险蚁类的捕食动作”，不能据此声称不会被蜇伤。[S10]
16. 繁殖资料具有明显地理差异。跨纬度研究汇总的窝卵数为堪萨斯 12–35 枚（`n=15`）、德州 14–44 枚（`n=14`）、新墨西哥 15–40 枚（`n=13`）；不同地点的筑巢月份也不相同，不能把一个窝卵数写成物种常数。[S08]
17. 德州西里奥格兰德平原研究跟踪 70 只雌性，共 7,862 个遥测日并记录 27 个巢：平均每窝 22 枚、平均每窝 76% 的卵孵化、平均孵化间隔 45 天，并有 4 次同年双窝记录。摘要没有说明这 4 次是否来自 4 只不同雌性。这些数字适合故事和注释，不适合无边界的全域繁殖字段。[S12]
18. 受刺激时，德州角蜥可限制头部静脉回流，使眼眶周围血窦压力升高，再从眼区喷出自身循环血。它喷出的不是“眼泪”“眼腺毒液”或从眼球内部生成的液体。[S13][S16][S18]
19. 家犬实验中 55 只角蜥有 47 只喷血，即 85%。犬只受限、不能直接接触角蜥时未触发喷血；同时施加人为触碰与犬科线索时，20% 的角蜥喷血。直接接触是该实验中的重要边界，但这些处理不能还原唯一的野外触发机制。走鹃和南方蚱蜢鼠试验没有触发这一反应。[S13]
20. 连续 7 天的 153 次犬试验中，40 只成体有 85% 至少喷血一次，82% 不止一次；频率随试验推进下降。累计血液质量损失平均约占体重 2.0%，个体最大记录为 6.8%，说明该防御可重复，但有生理成本。[S14]
21. 四只圈养幼年敏狐的实验中，初次、饥饿状态下有 6/8 只德州角蜥被杀死并吃掉；出现喷血的 6 次遭遇中有 5 次引发甩头，只有 2 只喷血个体当场存活。后来有经验且饱食的敏狐在 8 次试验中只杀死并吃掉 1 只角蜥，提示可学习的厌恶，但喷血不是保证生还的屏障。[S15]
22. 郊狼试验把强烈回避定位到口腔或鼻腔接触，眼部接触反应很少；把含角蜥组织的糊状物送入口中有时引发反刍，但把血混进食物没有证明系统性中毒。页面应写“口腔厌恶反应”，不写“毒血可毒死捕食者”。[S16]
23. 响尾蛇和鞭蛇试验记录了奔逃或背甲式防守，没有记录喷血；家犬、敏狐、郊狼实验则有喷血或口腔厌恶反应。现有证据支持捕食者类别和遭遇阶段特异性，不支持“遇到任何天敌都会喷血”。[S13][S15][S16][S17]
24. 2024 年分级和生物测定把活性线索缩小到全身血浆中表观分子量约 800–1,600 的一种或多种组分；确切化合物尚未鉴定，眼部腺体没有被证明会添加活性物质。“一种或多种小肽”是作者提出的解释假说，不能写成化学鉴定结果。[S18]
25. 同一研究发现，已知取食收获蚁且会喷血的角蜥种，其血浆分级出现活性；德州角蜥收获蚁饲喂组的血浆比蟋蟀饲喂组更令人回避，收获蚁腹部提取物也出现较强活性。结果支持活性与 *Pogonomyrmex* 饮食来源相关，但具体前体、吸收或代谢路径仍未知。作者提出蚁毒酶经代谢形成小肽的假说；不能把未知组分命名为某种蚂蚁毒素，也不能写成完整蚁毒被原样蓄积。[S18]
26. 2022 年基于 VertNet 与 iNaturalist 的出现记录研究发现，1960–2019 年 VertNet 东部和西部象限记录点到估计历史范围中心的距离分别以约 4.4 和 1.5 千米/年下降；2000–2019 年 iNaturalist 各象限没有显著下降。该斜率是记录点距离的变化，不是记录中心或分布边界逐年平移的速度。机会性出现记录还受采集与上传偏差影响，因此结果支持“可能的范围收缩，东部最明显”，不直接给出丰度下降率，也不自动改写 IUCN 趋势。[S19]
27. 德州现行州级页面将该物种列为 Threatened。页面仍保留旧的联邦 `C2` 用语，不能把该已废止候选类别写成现行美国联邦保护等级。[S21]
28. 国家濒管办 2026 年附件把“角蜥属所有种 *Phrynosoma* spp.”列入 CITES 附录 II，自 2026-03-05 生效。附录 II 控制国际贸易，并不等同于 IUCN 受威胁等级，也不能替换全球 LC。[S06]
29. 南德州 111 只遥测成体的处理试验显示，冬季计划烧除在该样地提高食物并改善第二个生长季的存活，而放牧引起的植被变化与较低存活相关。火和放牧的影响依强度、时机与结构结果而变，不能作为无条件保护措施或无条件威胁。[S22]
30. 德州重引入工作在 Mason Mountain 释放 204 只圈养繁育幼体，并发现 18 只被认为是 2019 年动物后代的野生幼体。它证明了现场繁殖迹象，不等于已经建立自我维持种群。[S23]
31. 核标记和线粒体研究在 542 只美国样本中识别出西、北、南三个主要遗传簇及基因混合，建议圈养繁殖避免随意混群，并把后代放回相应来源区。后续全基因组尺度研究仍支持一个广布物种，同时指出至少三个主要种群、基因流和渐渗；保育单元不应被误写成三个物种。[S04][S20]

## 精确字段映射

下面对象按当前 `Species` schema 编写。文字已经把证据边界写进字段；`media.focalPoint` 是源图上的初始建议值，必须通过封面规则的全部视口测试后才可定稿。

```ts
{
  id: 'species-phrynosoma-cornutum',
  slug: 'texas-horned-lizard',
  names: {
    zh: '德州角蜥',
    en: 'Texas Horned Lizard',
    aliases: ['德州角蜥蜴', 'Horned Toad', 'Horny Toad'],
  },
  scientificName: 'Phrynosoma cornutum',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Squamata', '有鳞目'),
    taxon('Phrynosomatidae', '角蜥科'),
    taxon('Phrynosoma', '角蜥属'),
  ),
  conservation: {
    ...conservation('LC', 'stable', 2007),
    assessor: 'Hammerson（IUCN Red List，2007年评估）',
  },
  distribution: {
    realms: ['terrestrial'],
    continents: ['北美洲'],
    regions: [
      '美国大平原南部与西南部',
      '墨西哥北部与东北部干旱区',
    ],
    countries: ['美国', '墨西哥'],
    range:
      '原生范围从美国大平原南部延伸到西南部，覆盖堪萨斯、科罗拉多东南部、俄克拉何马、德州、新墨西哥和亚利桑那东南部等地，并进入墨西哥索诺拉东北部、奇瓦瓦、杜兰戈、科阿韦拉、新莱昂、塔毛利帕斯、圣路易斯波托西和萨卡特卡斯。美国东缘部分历史记录的原生性或现存状态有疑问；北卡罗来纳、佛罗里达等地的建立种群不计入原生国家。',
    center: { lat: 31.5, lng: -102.5 },
  },
  habitats: [
    {
      name: '开阔草原与稀树草地',
      realm: 'terrestrial',
      description:
        '短草、混合草和半干旱草原中的裸地、低草本与稀疏灌木镶嵌，为晒太阳、移动、觅蚁和躲避高温提供相邻微生境。',
      isPrimary: true,
    },
    {
      name: '沙漠灌丛、冲积坡麓与沙丘',
      realm: 'terrestrial',
      description:
        '具有收获蚁、仙人掌、豆科灌木或矮灌丛的干旱地表，包括 playa 边缘、bajada、沙丘和开阔灌丛。',
      isPrimary: true,
    },
    {
      name: '可掘土壤与遮蔽物镶嵌',
      realm: 'terrestrial',
      description:
        '沙土、砂壤土至局部砾石地中的松散基底可供浅埋、筑巢和越冬；木本植被、凋落物、岩石及啮齿动物洞穴提供遮蔽。',
    },
  ],
  measurements: {
    length: {
      max: 11.6,
      unit: 'cm',
      note: '成年吻肛长；跨纬度博物馆样本中的最大值，不含尾。',
    },
  },
  diet: {
    types: ['insectivore'],
    foods: [
      '收获蚁属（Pogonomyrmex）蚂蚁',
      '其他蚂蚁',
      '偶尔摄取的小型节肢动物',
    ],
    description:
      '高度偏向蚂蚁，尤其收获蚁；会在巢口附近和开阔地捕捉分散活动的工蚁。亚利桑那单一样地粪便中收获蚁占97.69%，这一比例不代表全分布区固定食谱。',
  },
  activity: ['昼行性', '温暖季节地表活动', '低温季节蛰伏'],
  tags: [
    '北美洲',
    '爬行动物',
    '角蜥',
    '蚁食专化',
    '眼周喷血',
    '草原与沙漠',
    '卵生',
    'IUCN无危',
  ],
  summary:
    '德州角蜥是北美开阔草原与沙漠灌丛中的蚁食蜥蜴。它扁平多刺、善于贴地隐蔽，并能在特定犬科捕食情境中从眼眶周围喷出带有厌恶活性的自身血液。',
  description:
    '德州角蜥以收获蚁为主食，需要裸地、低植被、遮蔽物和可掘土壤相连的生境镶嵌。其著名防御不是普遍使用的“毒血攻击”：部分犬科动物的近距离接触可触发喷血，血液接触捕食者口腔或鼻腔后可引发厌恶反应；蛇类等试验未见同样反应。活性位于全身血浆，确切化合物仍未知。IUCN在2007年把它评为无危且趋势稳定，但这是旧全球判断，不能抹去美国东部和西部的范围收缩证据、德州州级受威胁地位或局地生境损失。',
  storySections: [
    {
      key: 'open-country-range',
      label: '范围与生境',
      title: '开阔不等于空无一物',
      body:
        '它横跨美国大平原南部、西南部和墨西哥北部，却并非只住在一种沙漠里。短草地、低灌丛、裸地和松散土壤需要彼此相邻：清晨的开阔地利于升温和追踪蚂蚁，午后的木本植被与凋落物则提供热避难处。地图上的大片范围也不表示每一处农田、城市或连续沙地都适居。',
    },
    {
      key: 'built-for-ants',
      label: '食性与捕食',
      title: '在危险蚁群边缘取食',
      body:
        '收获蚁构成许多种群的主要食物。高速摄影显示，角蜥常咬住蚂蚁中躯，避开带咬器的头部和带螫针的腹部，再把猎物头朝前收入口中。野外个体更多捕捉离开巢口的分散工蚁，也会在可快速退回灌木遮蔽的位置等待。',
    },
    {
      key: 'blood-for-selected-threats',
      label: '捕食防御',
      title: '喷血有明确的触发边界',
      body:
        '当犬科动物近距离攻击并发生接触时，角蜥可抬高眼眶周围血窦压力，从眼区喷出循环血。家犬试验中55只角蜥有47只喷血，但犬只受限、不能直接接触时没有触发；走鹃、蚱蜢鼠和蛇类实验也未出现同一反应。它是遭遇阶段和捕食者类别相关的防御，不是对所有危险自动发射。',
    },
    {
      key: 'plasma-not-tear-gland',
      label: '化学与效果',
      title: '活性在血浆，化合物仍未命名',
      body:
        '敏狐与郊狼会在血液接触口腔后甩头、退避，并可能通过经验形成回避。分级实验把活性线索缩小到血浆中表观分子量约800至1,600的一种或多种未鉴定组分；眼部腺体没有被证明会添加毒素。收获蚁饮食来源得到实验支持，但“小肽”和具体代谢路径仍是作者假说，不能写成已鉴定的蚁毒。',
    },
    {
      key: 'eggs-across-latitudes',
      label: '体尺与繁殖',
      title: '纬度改变体型，也改变繁殖日历',
      body:
        '跨纬度标本显示成年雌性可比雄性更大，研究样本最大吻肛长为11.6厘米，且成年体型向北减小。堪萨斯、德州和新墨西哥样本的窝卵范围分别为12至35、14至44和15至40枚，筑巢月份也随地点变化。任何单一窝卵数或固定月份都无法代表整个物种。',
    },
    {
      key: 'local-loss-local-management',
      label: '保护与恢复',
      title: '全球无危仍需要地方尺度行动',
      body:
        'IUCN的无危与稳定来自2007年全球评估；后来的出现记录研究提示美国范围收缩，德州也把该物种列为州级受威胁。保护工作需要保留裸地与植被镶嵌、收获蚁食物基础和可掘土壤，减少道路与广谱杀虫剂风险，并让圈养繁育和重引入遵循西、北、南遗传簇的来源。',
    },
  ],
  keyFacts: [
    'Harlan于1825年以Agama cornuta首次描述；移入Phrynosoma后，命名人和年份需加括号。',
    '跨纬度研究样本中，成年雌性吻肛长最大116.3毫米，雄性最大100.4毫米。',
    '亚利桑那单一样地的25份粪便中，97.69%的猎物是收获蚁；该比例不能外推为全域常数。',
    '家犬试验55只角蜥有47只喷血；直接接触是该实验中的重要触发边界。',
    '防御活性位于循环血浆中的未知小分子组分，不是眼腺制造的已命名毒素。',
    'IUCN全球LC与稳定趋势来自2007年旧评估；德州州级仍列Threatened。',
  ],
  threats: [
    '开阔草原、灌丛和可掘土壤转为农业或城市用地造成的局地生境丧失与破碎化。',
    '收获蚁食物基础下降；入侵红火蚁和广谱杀虫剂被提出为部分德州种群的风险，但范围级因果证据有限。',
    '道路死亡，风险随地点、季节和性别活动而变；现有资料不支持一个全域死亡率。',
    '历史上的宠物与纪念品采集；现今角蜥属国际贸易受CITES附录II管制。',
  ],
  conservationActions: [
    '保护并恢复裸地、低草本、灌木遮蔽和松散土壤相连的生境镶嵌。',
    '以监测为基础管理收获蚁和入侵蚁，避免在角蜥生境无差别施用广谱杀虫剂。',
    '识别道路死亡热点与繁殖季活动窗口，实施适合当地道路的减速、警示或通行措施。',
    '用标准化长期调查更新2007年全球种群与趋势资料，并区分原生、引入和疑存记录。',
    '圈养繁育、转移和重引入遵循西、北、南遗传来源，开展放归后的繁殖与存活监测。',
    '执行州级保护规定和CITES附录II贸易许可，记录合法来源并抑制野外采集。',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'iucn-status',
      label: 'IUCN全球等级',
      value: 'LC',
      note: '2007年评估，趋势Stable；不是当前局地种群结论。',
    },
    {
      key: 'adult-snout-vent-length',
      label: '成年吻肛长样本最大值',
      value: '11.6',
      unit: '厘米',
      note: '跨纬度博物馆样本中的雌性最大值，不含尾。',
    },
    {
      key: 'dog-trial-squirt-response',
      label: '家犬遭遇喷血反应',
      value: '85',
      unit: '%',
      note: '受控实验55只角蜥中47只喷血；不能外推到所有捕食者或野外遭遇。',
    },
    {
      key: 'active-plasma-fraction',
      label: '活性血浆组分表观分子量',
      value: '800–1,600',
      note: '分级与生物测定区间；确切化合物仍未鉴定。',
    },
  ],
  media: {
    image: './images/species/texas-horned-lizard/01-open-prairie-cover.webp',
    alt: '德州角蜥完整侧身位于开阔草原右侧，左侧保留低干扰地景',
    focalPoint: { x: 0.92, y: 0.415 },
    credit: 'AI-generated reconstruction',
    gallery: [
      {
        image:
          './images/species/texas-horned-lizard/02-full-body-diagnostic-profile.webp',
        alt: '德州角蜥低伏的完整体型与头部、体侧棘鳞轮廓',
        title: '低伏而多刺的轮廓',
        caption:
          '形态重建图；用于辨认宽扁身体、枕棘和体侧缘，不用于精确计数鳞片或判断性别。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'AI-generated reconstruction',
      },
      {
        image:
          './images/species/texas-horned-lizard/03-harvester-ant-feeding.webp',
        alt: '德州角蜥在开阔地靠近蚁群取食',
        title: '收获蚁觅食',
        caption:
          '行为重建图；表现蚁食生态，不据画面把蚂蚁鉴定到属，也不代表固定日摄食量。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'AI-generated reconstruction',
      },
      {
        image:
          './images/species/texas-horned-lizard/04-ocular-sinus-defense.webp',
        alt: '德州角蜥从眼眶周围喷出少量自身血液的防御瞬间',
        title: '眼眶血窦防御',
        caption:
          '机制重建图；血液来自循环系统。喷射方向、距离和画面血量均非测量值，且没有捕食者线索时不代表会自行触发。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'AI-generated reconstruction',
      },
      {
        image:
          './images/species/texas-horned-lizard/05-shallow-burial.webp',
        alt: '德州角蜥在松散土壤中浅埋并保留头背轮廓',
        title: '贴地浅埋',
        caption:
          '生境行为重建图；只表达利用可掘基底隐蔽，不能从画面推断埋藏深度、土温或是否处于越冬状态。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'AI-generated reconstruction',
      },
      {
        image:
          './images/species/texas-horned-lizard/06-nesting-dig.webp',
        alt: '德州角蜥在松散土面靠近新挖掘洞穴',
        title: '松土中的筑巢行为',
        caption:
          '繁殖行为重建图；不能据画面确认个体性别、是否怀卵、窝卵数或巢室深度。',
        focalPoint: { x: 0.5, y: 0.5 },
        credit: 'AI-generated reconstruction',
      },
    ],
  },
  sources: [
    {
      title: 'ITIS Full Record: Phrynosoma cornutum (TSN 173938)',
      url: 'https://www.itis.gov/ITISWebService/jsonservice/getFullRecordFromTSN?tsn=173938',
      kind: 'taxonomy',
      accessedAt: '2026-09-04',
    },
    {
      title: 'The Reptile Database: Phrynosoma cornutum',
      url: 'https://reptile-database.reptarium.cz/Phrynosoma/cornutum?search_param=%28%29',
      kind: 'taxonomy',
      accessedAt: '2026-09-04',
    },
    {
      title: 'IUCN Red List assessment: Phrynosoma cornutum',
      url: 'https://doi.org/10.2305/IUCN.UK.2007.RLTS.T64072A12741535.en',
      kind: 'conservation',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Latitudinal Variation in Life History Reveals a Reproductive Advantage in the Texas Horned Lizard',
      url: 'https://doi.org/10.1643/CH-19-266',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Habitat Selection by Foraging Texas Horned Lizards, Phrynosoma cornutum',
      url: 'https://doi.org/10.1894/0038-4909-57.1.39',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Avoiding being stung or bitten: prey capture behaviors of the ant-eating Texas horned lizard',
      url: 'https://doi.org/10.1242/bio.058453',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Microhabitat selection by Texas horned lizards in southern Texas',
      url: 'https://doi.org/10.2307/3803015',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'TPWD Research Highlights: Texas Horned Lizard Nesting Ecology',
      url: 'https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_w7000_0280_08_03.pdf',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Canid Elicitation of Blood-Squirting in a Horned Lizard (Phrynosoma cornutum)',
      url: 'https://doi.org/10.2307/1446212',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Blood-Squirting Variability in Horned Lizards (Phrynosoma)',
      url: 'https://www.jstor.org/stable/1448403',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Responses of Kit Foxes to Antipredator Blood-Squirting and Blood of Texas Horned Lizards',
      url: 'https://doi.org/10.1643/CH-03-157R1',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Sensory Modality Used by Coyotes in Responding to Antipredator Compounds in the Blood of Texas Horned Lizards',
      url: 'https://digitalcommons.unl.edu/icwdm_usdanwrc/511/',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Antipredator Blood-Squirting Defense in Horned Lizards (Phrynosoma): Chemical Isolation of Plasma Component(s), Pogonomyrmex Ant Dietary Origin, and Evolution',
      url: 'https://doi.org/10.1643/h2021139',
      kind: 'ecology',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Museum and Citizen-Science Data Indicate Contraction in the Range of Texas Horned Lizards (Phrynosoma cornutum)',
      url: 'https://doi.org/10.1655/Herpetologica-D-21-00022',
      kind: 'conservation',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Population genetics for the conservation of the Texas horned lizard',
      url: 'https://doi.org/10.7717/peerj.7746',
      kind: 'conservation',
      accessedAt: '2026-09-04',
    },
    {
      title: 'Texas Parks and Wildlife: Texas Horned Lizard',
      url: 'https://tpwd.texas.gov/huntwild/wild/species/thlizard/',
      kind: 'conservation',
      accessedAt: '2026-09-04',
    },
    {
      title: '国家濒管办公告（2026年第2号）及CITES附录中文版',
      url: 'https://www.forestry.gov.cn/lyj/1/gsgg/20260306/662047.html',
      kind: 'conservation',
      accessedAt: '2026-09-04',
    },
  ],
  publishedAt: '2026-09-04',
  updatedAt: '2026-09-04',
}
```

### 字段边界说明

- `names.zh`：沿用项目 TODO 的“德州角蜥”；台湾国立台湾博物馆支持别名“德州角蜥蜴”，大陆国家濒管办附件只支持“角蜥科”和“角蜥属”，没有种级中文名。[S05][S06]
- `names.aliases`：`Horned Toad` 是历史和通俗英文别名，不表示蟾蜍分类；主英文名固定为 ITIS 采用的 `Texas Horned Lizard`。[S01][S02]
- `scientificName`：只放二名法。`(Harlan, 1825)` 放在关键事实或正文，不拼进字段，保持项目既有 schema 习惯。[S01][S02]
- `conservation.criteria`：省略。IUCN LC 评估没有给判据代码。[S07]
- `distribution.center`：`31.5, -102.5` 是编辑用地图焦点，不是范围几何中心、模式产地或最高密度点。[S07]
- `distribution.countries`：只列原生国家。美国其他州的引入种群仍可写入 `range`，但不能扩大原生国家或原生范围。[S07]
- `measurements.length`：只落 11.6 厘米最大成年吻肛长。雌雄样本下限不同，且标本研究不是一套可泛化的全域典型区间，因此不填 `min` 或 `typical`。[S08]
- `metrics`：保持 `{}`。IUCN 的 10,000/100,000 是旧粗估；体长只有安全上限；窝卵数、孵化间隔、移动和血量损失均有研究条件限制。[S07][S08][S12][S14]
- `featuredStats`：四项各自写明年份、样本或实验边界，不把地区数据包装为物种常数。[S07][S08][S13][S18]
- `conservation.trend`：保留 IUCN 的 `stable`，同时在叙事与威胁中写明后续出现记录研究的收缩信号。不能在没有新全球评估的情况下擅自改为 `decreasing`。[S07][S19]
- `activity`：只给宽泛标签。亚利桑那样地的晨间觅食窗口留在正文，不作为全年日程。[S09]

## 六段故事的证据清单

### 1. `open-country-range`

IUCN 支持草原、沙漠、playa 边缘、bajada、沙丘和疏灌丛等范围级生境；南德州研究提供一天中裸地、草本、木本和凋落物选择随热环境变化的直接数据。[S07][S11] 故事可以解释“开阔生境是一块镶嵌”，不能画成没有遮蔽物的连续裸沙，也不能把南德州选择比例外推到墨西哥全域。

### 2. `built-for-ants`

亚利桑那 Portal 的观察和粪便样本直接支持收获蚁主导的食谱、开阔地取食与灌木遮蔽之间的关系；高速摄影支持咬住中躯、避开头和腹部、头朝前吞入等动作。[S09][S10] 画面中的 AI 蚂蚁无法据外形鉴定到 *Pogonomyrmex*，也不应出现“每天固定吃多少只”的数字。

### 3. `blood-for-selected-threats`

家犬试验给出 47/55 的触发率，并把触觉与犬科线索联系起来；敏狐试验显示喷血会引发甩头，却不能保证角蜥存活；蛇类实验提供不喷血的对照情境。[S13][S15][S17] 故事必须同时写触发和失败边界。

### 4. `plasma-not-tear-gland`

郊狼试验把效果定位到口鼻接触；2024 年分级研究把活性线索缩小到循环血浆中表观分子量约 800–1,600 的组分，并将小肽与具体代谢路径保留为假说。[S16][S18] 禁止使用“眼泪有毒”“眼腺合成蚁毒”“已确定是某种肽”或“能毒死犬科”的表述。

### 5. `eggs-across-latitudes`

Hughes 等的 279 件标本和三个地点窝卵数据支持纬度差异；TPWD 西里奥格兰德平原研究提供 70 只雌性、27 个巢和年内双窝的区域性现场证据。[S08][S12] 故事不能把平均 22 枚、45 天或 76% 孵化率当作全种固定参数。

### 6. `local-loss-local-management`

IUCN 2007 LC 是全球旧基线，Haney 等的出现记录分析、TPWD 州级名单和遗传研究补上了地方收缩、法规与来源管理。[S07][S19][S20][S21] 故事应避免两种误读：LC 不等于各地安全，德州 Threatened 也不等于 IUCN 全球受威胁。

## 视觉资产概念与科学边界

六个源图均为 1536 × 1024、无 alpha 的 AI 重建 PNG。它们可承担叙事插图，不能作为物种鉴定、行为频率或实验效果量的证据。下列 SHA-256 用于锁定本次核对的源文件版本。

### 01 `01-open-prairie-cover-source.png`

- SHA-256：`36ca2f897c7af984fec61380421e482545402f7c69f109a9297dc6ae26d9c0ae`
- 概念：低视角开阔草原，完整德州角蜥位于画面右侧，左侧是低对比度地表与远景，表现草原、裸地和稀疏植被镶嵌。[S07][S11]
- 科学边界：不要从画面判定地点、性别、年龄或具体植被群落；头棘、体侧缘和四肢必须完整可见。
- 源图保守主体框：`x=1103–1380, y=374–484`，即宽度的 `71.8%–89.8%`、高度的 `36.5%–47.3%`。该框来自压缩后源图的 4× 裁切与 50 像素坐标网格复核，不是分割掩膜。
- 当前实现焦点：`{ x: 0.92, y: 0.415 }`。该值用于在现有 hero 裁切中保留右侧主体；它不是解剖学中心，也不能代替多视口验收。
- 验收：转换为 WebP 后重新记录输出 SHA、像素尺寸、焦点和实测主体边界；在 320×760、390×760、1366×768、1920×900、2560×900、3840×900 六个视口及所有入场、稳定、退出状态检查。完整主体必须距 hero 可见边缘至少 24 CSS px，并避开文案、信息面板和裁切边缘。构图意图本身不能代替这些测试。

### 02 `02-full-body-diagnostic-profile-source.png`

- SHA-256：`137eb7c14801d9a21826acc6f15389b5e6c9077ff5fde5b7a2f80d67f9220717`
- 概念：近距离完整体型，突出宽扁躯干、一对明显枕棘、喉侧鳞和两列体侧缘棘鳞的整体组合。[S02][S03]
- 科学边界：AI 重建不能用于逐片计数鳞片、测量角长、判断亚种、性别或个体年龄；若关键诊断结构被裁断，应重做而非靠说明补救。

### 03 `03-harvester-ant-feeding-source.png`

- SHA-256：`8df446c0a54ce6657f189a9300aec347b110312b9b9757e81cf297bedf0ebae7`
- 概念：角蜥在裸地与低灌木交界处捕捉蚂蚁，舌头动作短促，附近同时有分散工蚁和远处巢口。[S09][S10]
- 科学边界：不能凭 AI 蚂蚁外形标注为 *Pogonomyrmex barbatus*；不能表现主动闯入蚁巢、吞食固定数量或对螫针完全免疫。

### 04 `04-ocular-sinus-defense-source.png`

- SHA-256：`6404e65f775ad6998fe37a1b0150bbcf0ded666854b62660a77d614448b69f27`
- 概念：眼眶周围喷出少量红色循环血的瞬间，画面重点在来源位置，不加入夸张毒雾或腐蚀效果。[S13][S16][S18]
- 科学边界：图中没有犬科捕食者，不能单独表达完整触发条件；喷射方向、距离、血量和轨迹都是示意，不得配成测量事实。血液不是眼泪，也不是已知毒液。

### 05 `05-shallow-burial-source.png`

- SHA-256：`8c41f8cc84c5adcd67bfbc9fa84a0fcd29bfdbcb44803c013f5a9688beadb300`
- 概念：角蜥在松散表土中浅埋，体色和颗粒地表相接，表现隐蔽与利用可掘基底。[S07][S21]
- 科学边界：画面不提供埋深、温度、持续时间、季节或越冬状态；不得把局部掩埋画成窒息式全埋，也不能把单一沙质基底写成全域要求。

### 06 `06-nesting-dig-source.png`

- SHA-256：`4ee5ff7e846d80e55d810a1478e49b69a26f925abd42ed5adec7740b09711b7f`
- 概念：角蜥在松散土面挖掘，洞口与后肢动作可见，配合跨纬度繁殖故事。[S08][S12]
- 科学边界：AI 图不能证明画中个体是雌性、怀卵或正在完成巢穴；不能显示一个“标准”巢深、窝卵数、产卵月份或孵化成功率。

## 威胁与保护行动的证据边界

### 可以落入正文的威胁

1. IUCN 记录农业、城市发展等生境改变、历史采集和局地道路死亡，同时指出不少下降解释缺少全域验证。[S07]
2. 入侵红火蚁和杀虫剂常被提出为德州风险，但 IUCN 对其地理范围和证据强度持保留态度；不能写成整个原生范围下降的单一已证实原因。[S07][S21]
3. 出现记录分析支持美国范围可能收缩，尤其东部明显；它不是丰度监测，也受博物馆采集和公民科学上传偏差影响。[S19]
4. 放牧和火不是固定方向的压力。南德州试验中的冬季计划烧除与较高食物和后续存活相关，放牧造成的结构变化与较低存活相关；结果受当地处理和年份限制。[S22]
5. CITES 附录 II 表示贸易需要管制，不表示该种达到全球 VU、EN 或 CR。[S06][S07]

### 可实施行动

1. 保护足够大的原生草原、灌丛和沙地斑块，并保留裸地、低植被、木本遮蔽和松散土壤的空间镶嵌。[S07][S11]
2. 在项目区同时监测角蜥、收获蚁、入侵蚁、植被结构和农药使用，优先采用有明确靶标的害虫管理，避免把“禁用一切蚂蚁管理”写成通用处方。[S07][S09]
3. 用标准化重复调查补足 IUCN 2007 以后的人口、占域和趋势资料，并单独标识原生、引入、疑存与已局地灭绝记录。[S07][S19]
4. 在已确认的道路热点依据季节和活动时段设计减速、警示、通道或围栏，并监测措施前后效果；现有证据不足以指定全域统一月份。[S07]
5. 圈养繁育与重引入保存来源记录，避免随意混合西、北、南遗传簇，把个体放回相应区域并跟踪存活、繁殖和后代招募。[S20][S23]
6. 执行德州州级保护与 CITES 附录 II 许可，打击非法野外采集；不要把贸易管制写成原地生境保护的替代品。[S06][S21]

## 来源索引与证据限制

### [S01] Harlan 1825 原始描述

Richard Harlan. “Description of Two New Species of *Agama*.” *Journal of the Academy of Natural Sciences of Philadelphia* 4 (1825): 296–305，*Agama cornuta* 见第 299 页及图版 XX。扫描本：[Google Books](https://books.google.com/books?id=-hAFAAAAQAAJ&output=html_text)。

用途：原始组合、作者、年份和历史别名背景。限制：原始描述早于现代种概念和测量规范，不用于当前分布、亚种或体尺字段。

### [S02] ITIS 分类记录

Integrated Taxonomic Information System. “[*Phrynosoma cornutum* (Harlan, 1825), TSN 173938](https://www.itis.gov/ITISWebService/jsonservice/getFullRecordFromTSN?tsn=173938)”及[完整层级](https://www.itis.gov/ITISWebService/jsonservice/getFullHierarchyFromTSN?tsn=173938)。

用途：有效现行名称、英文名、原始组合、TSN 和六阶分类。限制：ITIS 不裁决中文名，也不覆盖最新种群生态。

### [S03] Reptile Database

Uetz, P., Freed, P., Aguilar, R., Reyes, F., Kudera, J. & Hošek, J. eds. “[Phrynosoma cornutum](https://reptile-database.reptarium.cz/Phrynosoma/cornutum?search_param=%28%29).” The Reptile Database.

用途：接受名、原始组合、命名权威、分类与诊断形态组合。限制：该数据库汇编论文；页面备注提到新的亚种处理，但未提供足以让本项目安全落亚种的完整诊断。

### [S04] Finger 等 2022 群体基因组研究

Finger, J. W. et al. “[Species Delimitation, Gene Flow, and Population Genetics of the Texas Horned Lizard (*Phrynosoma cornutum*)](https://doi.org/10.1093/gbe/evab260).” *Genome Biology and Evolution* 14 (2022): evab260。

用途：75 个美国样本的数千个 GBS 位点与线粒体数据、至少三个主要种群、基因流与渐渗，以及维持一个广布种的结论。限制：主要取样美国；作者明确需要更密集墨西哥取样与形态资料，研究不能独自终结所有亚种争议。

### [S05] 台湾国立台湾博物馆馆藏

国立台湾博物馆典藏网。“[德州角蜥蜴 *Phrynosoma cornutum* (Harlan, 1825)](https://collections.culture.tw/ntm_collectionsweb/collection.aspx?GID=0WM6MA0EMB)”。

用途：公共博物馆采用的中文种名，以及一件雄性馆藏的物种与权威配对。限制：单件标本的 55 毫米吻肛长和 20 毫米尾长不能定义物种范围；页面其他自然史数字不作为本档案的量化依据。

### [S06] 国家濒管办 2026 CITES 附件

中华人民共和国濒危物种进出口管理办公室。“[公告（2026年第2号）](https://www.forestry.gov.cn/lyj/1/gsgg/20260306/662047.html)”及[《濒危野生动植物种国际贸易公约》附录中文版](https://www.forestry.gov.cn/u/cms/www/202603/07094239sawe.pdf)，2026-03-06，附件第 28 页。

用途：中国大陆官方“角蜥科”“角蜥属”译名，以及自 2026-03-05 生效的角蜥属所有种附录 II 状态。限制：附件没有给 *P. cornutum* 中文种名；CITES 是贸易制度，不是 IUCN 灭绝风险评估。

### [S07] IUCN 2007 全球评估

Hammerson, G. A. “[Phrynosoma cornutum](https://doi.org/10.2305/IUCN.UK.2007.RLTS.T64072A12741535.en).” *The IUCN Red List of Threatened Species* 2007: e.T64072A12741535；[评估 PDF 镜像](https://cpb-us-e1.wpmucdn.com/wp.txstate.edu/dist/6/230/files/2017/10/P_cornutum_IUCN.pdf)。

用途：LC、Stable、评估日期、评估者与审核者、原生和引入范围、生境、2007 年种群粗估、威胁与保护建议。限制：评估距访问日 19 年；没有判据代码或正式成熟个体估算，不能把 `>10,000` 或“可能 >100,000”写入标准化数量字段。

### [S08] Hughes 等 2019 跨纬度生活史研究

Hughes, D. F. et al. “[Latitudinal Variation in Life History Reveals a Reproductive Advantage in the Texas Horned Lizard (*Phrynosoma cornutum*)](https://doi.org/10.1643/CH-19-266).” *Copeia* 107 (2019)。

用途：279 件博物馆标本的成年吻肛长、纬度体型关系，以及堪萨斯、德州和新墨西哥窝卵范围与繁殖日期。限制：体尺是研究样本范围，不是无误差的物种绝对极值；窝卵数据按地点和样本量分别保留。

### [S09] Eifler 等 2012 觅食研究

Eifler, D. A., Eifler, M. A. & Brown, T. K. “[Habitat Selection by Foraging Texas Horned Lizards, *Phrynosoma cornutum*](https://doi.org/10.1894/0038-4909-57.1.39).” *The Southwestern Naturalist* 57 (2012): 39–43；[全文 PDF](https://eva.eduper.udelar.edu.uy/pluginfile.php/93789/mod_folder/content/0/horned_lizard_feed_behav_Eifler%20etal2012.pdf?forcedownload=1)。

用途：14 只成体、139 小时观察、25 份粪便和 1,821 个猎物所支持的晨间活动、蚁食比例与微生境关系。限制：1999 年 7 月、亚利桑那 Portal 单一样地，不得把 97.69% 或 07:00–11:30 外推为物种常数。

### [S10] Fertschai 等 2021 捕食动作实验

Fertschai, I. et al. “[Avoiding Being Stung or Bitten: Prey Capture Behaviors of the Ant-Eating Texas Horned Lizard](https://doi.org/10.1242/bio.058453).” *Biology Open* 10 (2021): bio058453；[PubMed Central 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC8015224/)。

用途：高速摄影下的中躯抓取、避开危险部位、头朝前回收与黏液包裹。限制：受控条件与有限个体不能证明所有野外猎物处理相同，也不能证明绝对不会被蜇伤。

### [S11] Burrow 等 2001 微生境选择

Burrow, A. L., Kazmaier, R. T., Hellgren, E. C. & Ruthven, D. C. “[Microhabitat Selection by Texas Horned Lizards in Southern Texas](https://doi.org/10.2307/3803015).” *Journal of Wildlife Management* 65 (2001)。

用途：五种烧除与放牧处理下，上午、下午、傍晚以及活动季、非活动季的裸地、草本、木本和凋落物选择。限制：南德州处理地研究，不能定义全域植被比例。

### [S12] TPWD 2003 筑巢研究摘要

Texas Parks and Wildlife Department. “[Texas Horned Lizard Research Highlights](https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_w7000_0280_08_03.pdf).” 2003。

用途：西里奥格兰德平原 70 只雌性、7,862 个遥测日、27 个巢，以及平均窝卵数、每窝孵化率、孵化间隔和 4 次同年双窝记录。限制：政府项目摘要没有说明 4 次双窝是否来自 4 只不同雌性，也缺少论文全文中的全部模型与不确定度；所有数字只作单区研究结果。

### [S13] Middendorf 与 Sherbrooke 1992 家犬触发实验

Middendorf, G. A. III & Sherbrooke, W. C. “[Canid Elicitation of Blood-Squirting in a Horned Lizard (*Phrynosoma cornutum*)](https://doi.org/10.2307/1446212).” *Copeia* 1992。

用途：55 只角蜥中 47 只喷血、触觉与犬线索、无接触对照，以及走鹃和蚱蜢鼠未触发。限制：受控遭遇和家犬刺激不能直接给出野外发生率、喷射距离或所有犬科效果。

### [S14] Sherbrooke 与 Middendorf 2001 重复喷血研究

Sherbrooke, W. C. & Middendorf, G. A. III. “[Blood-Squirting Variability in Horned Lizards (*Phrynosoma*)](https://www.jstor.org/stable/1448403).” *Copeia* 2001: 1114–1122。

用途：40 只成体、153 次犬试验、7 天重复反应、频率下降和累计血量成本。限制：实验压力不等于自然遭遇频率；质量损失只属于本实验个体和流程。

### [S15] Sherbrooke 与 Middendorf 2004 敏狐实验

Sherbrooke, W. C. & Middendorf, G. A. III. “[Responses of Kit Foxes to Antipredator Blood-Squirting and Blood of Texas Horned Lizards](https://doi.org/10.1643/CH-03-157R1).” *Copeia* 2004。

用途：四只圈养幼年敏狐的初次捕食、甩头、角蜥死亡与后续经验性回避。限制：捕食者样本小、圈养且分饥饿和饱食阶段；不能推断所有野生狐类或所有遭遇。

### [S16] Sherbrooke 与 Mason 2005 郊狼感觉实验

Sherbrooke, W. C. & Mason, J. R. “[Sensory Modality Used by Coyotes in Responding to Antipredator Compounds in the Blood of Texas Horned Lizards](https://digitalcommons.unl.edu/icwdm_usdanwrc/511/).” *The Southwestern Naturalist* 50 (2005): 216–222。

用途：38 只郊狼、75 次模拟试验对鼻、口、眼位置的反应，以及口腔厌恶而非已证实系统毒性的边界。限制：模拟递送不等于完整捕食过程，反刍观察也没有证明致死或全身毒理作用。

### [S17] Sherbrooke 2008 蛇类遭遇实验

Sherbrooke, W. C. “[Antipredator Responses by Texas Horned Lizards to Two Snake Taxa](https://doi.org/10.1670/07-072R1.1).” *Journal of Herpetology* 42 (2008)。

用途：响尾蛇与鞭蛇情境下的奔逃和背侧防守，以及未记录喷血的捕食者对照。限制：未见喷血不等于任何蛇类、任何条件下绝不会触发。

### [S18] Sherbrooke 与 Kimball 2024 化学分级研究

Sherbrooke, W. C. & Kimball, B. A. “[Antipredator Blood-Squirting Defense in Horned Lizards (*Phrynosoma*): Chemical Isolation of Plasma Component(s), *Pogonomyrmex* Ant Dietary Origin, and Evolution](https://doi.org/10.1643/h2021139).” *Ichthyology & Herpetology* 112 (2024): 106–116；[USDA/University of Nebraska 机构全文页](https://digitalcommons.unl.edu/icwdm_usdanwrc/2782/)。

用途：血浆活性、表观分子量约 800–1,600 的区间、种间比较、收获蚁部位提取和饲喂试验。限制：部分试验在小鼠替代模型中完成；精确化合物、分子组成、代谢路径和野外活性持续时间均未确定，小肽与蚁毒酶代谢路径属于作者假说。

### [S19] Haney 等 2022 范围变化研究

Haney, C. et al. “[Museum and Citizen-Science Data Indicate Contraction in the Range of Texas Horned Lizards (*Phrynosoma cornutum*)](https://doi.org/10.1655/Herpetologica-D-21-00022).” *Herpetologica* 78 (2022)。

用途：VertNet 1960–2019 与 iNaturalist 2000–2019 的出现记录范围分析，以及 VertNet 东、西象限记录点到估计历史范围中心距离分别约 −4.4 和 −1.5 千米/年的斜率。限制：斜率不是边界移动速度；资料是机会性出现记录，不是设计化丰度调查，两个数据库时段和结果不同。

### [S20] Williams、Rains 与 Hale 2019 保育遗传研究

Williams, D. A., Rains, N. D. & Hale, A. M. “[Population Genetics for the Conservation of the Texas Horned Lizard (*Phrynosoma cornutum*)](https://doi.org/10.7717/peerj.7746).” *PeerJ* 7 (2019): e7746；[全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC6777493/)。

用途：542 只个体、两个线粒体支系、三个核遗传簇、约 10% 混合和来源匹配的圈养繁育建议。限制：主要是美国与邻近区域的中性标记；遗传簇不自动等于适应单元、亚种或物种。

### [S21] Texas Parks and Wildlife 物种页

Texas Parks and Wildlife Department. “[Texas Horned Lizard](https://tpwd.texas.gov/huntwild/wild/species/thlizard/).”

用途：德州州级 Threatened、开阔干旱半干旱生境、松散沙土或壤土及州级管理语境。限制：页面保留历史联邦 `C2` 表述，该类别已经废止，不能当作现行联邦状态。

### [S22] Hellgren 等 2010 火与放牧实验

Hellgren, E. C., Ruthven, D. C. III, Kazmaier, R. T. & Synatzske, D. R. “[Effects of Winter Burning and Grazing on Resources and Survival of Texas Horned Lizards in a Thornscrub Ecosystem](https://doi.org/10.2193/2009-090).” *Journal of Wildlife Management* 74 (2010)。

用途：南德州 111 只遥测成体在六个样地、五种处理下的食物和存活反应。限制：单一 thornscrub 系统的处理结果；不能把计划烧除或放牧抽象成全域固定正负效应。

### [S23] TPWD 2021 重引入记录

Texas Parks and Wildlife Department. “[Texas Horned Lizards Released at Mason Mountain WMA](https://tpwd.texas.gov/newsmedia/releases/?req=20210916b).” 2021-09-16。

用途：204 只圈养繁育幼体放归和 18 只推定野生后代的记录。限制：机构新闻稿提供行动与观察，不提供长期种群增长率；发现后代不等于重引入种群已经自我维持。

## 发布前核对清单

- [ ] `scientificName` 保持 `Phrynosoma cornutum`，权威写作 `(Harlan, 1825)`，不落未解决亚种。
- [ ] 中文正文说明“德州角蜥”沿用项目 TODO，“德州角蜥蜴”有馆藏依据，并保留大陆官方种名证据缺口。
- [ ] IUCN 显示 `LC`、`stable`、`2007`、Hammerson，不填 `criteria`。
- [ ] 不写 `estimatedMatureIndividuals`；如正文提到 10,000/100,000，必须保留“2007 年粗估、成体总数未知”。
- [ ] `measurements.length.max` 为 11.6 厘米成年吻肛长，不与总长资料拼接。
- [ ] `metrics` 保持空对象。
- [ ] 窝卵数、孵化间隔、食物比例、活动时段和喷血率均保留样地或实验边界。
- [ ] 防御文字使用“眼眶周围血窦”“循环血浆”“口腔厌恶”，不使用“毒泪”“眼球爆裂”或已命名毒素。
- [ ] 保护文字同时呈现 IUCN 2007 全球 LC、后续范围收缩证据和德州州级 Threatened。
- [ ] CITES 附录 II 只作贸易状态，不替换 IUCN 或州级保护等级。
- [ ] 六幅图标注为 AI 重建，不从画面推断性别、数量、距离、深度、比例或物种鉴定细节。
- [ ] 封面 WebP 转换后记录新 SHA、尺寸、主体框与焦点，并通过六视口、所有动画端点和 24 CSS px 安全边距测试。
