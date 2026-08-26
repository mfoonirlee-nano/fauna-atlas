# 朱鹮（_Nipponia nippon_）物种档案研究

- 核验日期：2026-08-25
- 展示名：**朱鹮 / Crested Ibis**；学名：_Nipponia nippon_ (Temminck, 1835)
- 证据口径：分类用 Avibase 汇集的 AviList、IOC 与 Clements；全球状态用 BirdLife 代表 IUCN 完成的评估；现状数字用中、日、韩政府资料；形态、生态与恢复机制用专业机构资料和同行评审原始研究。

## 录入结论与证据边界

1. 英文主名用 **Crested Ibis**。AviList、IOC 15.2、Clements 2025 均采用该名；BirdLife 的 **Asian Crested Ibis** 保留为别名。[Avibase](https://avibase.bsc-eoc.org/species.jsp?avibaseid=3E328C3C526E7ECF) [BirdLife](https://datazone.birdlife.org/species/factsheet/asian-crested-ibis-nipponia-nippon)
2. 分类为 Animalia、Chordata、Aves、Pelecaniformes、Threskiornithidae、_Nipponia_。Avibase 给出作者 Temminck, 1835、原始组合 _Ibis nippon_、模式产地日本；旧资料的 Ciconiiformes 不用于当前产品节点。
3. 全球字段固定为 `EN / increasing / 2018 / B1ab(iii)`。2018 是评估年；BirdLife 截至核验日正在重评，不能预告新等级。评估的约 330 只成熟个体来自 2006 年约 500 只总量，不是 2018 或 2026 年普查。
4. 1981 年陕西洋县姚家沟重新发现 7 只，含 4 成鸟、3 幼鸟。国家林草局 2024 年报全球超过 11,000 只、陕西超过 7,700 只；该概数混合全龄、野外和人工种群，不能填 `estimatedMatureIndividuals`。[国家林草局](https://www.forestry.gov.cn/c/www/dfdt/545445.jhtml)
5. 日本环境省记录 2024 年末佐渡野外 576 只，其中 133 只放归、443 只野外出生，成熟个体估计 336 只。它只代表日本区域，却已说明 IUCN 沿用的 2006 全球成熟数字明显滞后；正式全球状态仍需等待重评。[日本环境省](https://www.env.go.jp/nature/kisho/5th-rl-2026/BI0054_RDB5th.pdf)
6. 中国法律为“国家一级重点保护野生动物”。《中国生物多样性红色名录：脊椎动物卷（2020）》为 EN，标准 `B1ab(iii), C1, C2a(ii)`；2020 是版本年，2023 是公告发布年。国内法律、区域红名录与 IUCN 全球状态不得互译。[国家名录](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [中国红名录](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)
7. CITES 现行附录列 _N. nippon_ 于附录 I，准确含义是国际贸易受严格许可约束，不是所有科研、救护或跨境转移绝对禁止。[CITES 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
8. CMS 现行物种清单截至核验日未检出本种，因此不加 CMS 标签；这只是负面清单核验，不推导其他法律结论。[CMS](https://www.cms.int/species)
9. 佐渡实测均值：雌鸟总长 731.0±27.2 mm（n=10），雄鸟 772.1±33.4 mm（n=8）；雌鸟体重 1,545.3±107.2 g（n=30），雄鸟 1,775.9±120.1 g（n=49）。这些是性别均值，不能伪装成全种 `min/max`。结构化体型改用日本国立科学博物馆的概览值：体长约 75 cm、翼展约 1.4 m、体重 1.6—2 kg。[Bird Research](https://www.bird-research.jp/1_shiryo/seitai/toki.pdf) [日本国立科学博物馆](https://www.kahaku.go.jp/pickup-science/nid00001005.html)

## 分布、生态与恢复

- 历史自然范围横跨俄罗斯远东、中国东北至华东、朝鲜半岛、日本与台湾。当前中国恢复源头在陕西秦岭并持续扩展；日本佐渡、韩国牛浦是重引入种群。`countries` 填中国、日本、韩国，并在 `range` 明示后两者为重引入，不把俄罗斯、朝鲜、台湾或繁育中心画成当前野外繁殖区。
- 官方资料称中国野外栖息范围从 1981 年不足 5 km² 扩至 2023 年约 16,000 km²；这不是 IUCN EOO 的同方法更新。[2023 官方汇总](https://nyncw.cq.gov.cn/zwxx_161/ywxx/202311/t20231109_12540505.html)
- 日本 1981 年将最后野生鸟收入笼养，2008 年佐渡首次放归 10 只，2012 年出现 36 年来首只野外孵化幼鸟。[日本环境省](https://www.env.go.jp/content/000039969.pdf) 韩国 1979 年后失去野外记录，2019 年在牛浦首次放归 40 只，2023 年完成第七次放归。[韩国政府](https://www.korea.kr/news/policyNewsView.do?newsId=148860661) [韩国环境部](https://eng.me.go.kr/eng/web/board/read.do?boardId=1599780&boardMasterId=522)
- 繁殖巢位于觅食湿地附近的温带高大乔木；浅水稻田、河岸、池塘、水库和淡水湿地供觅食。冬季通常低于 700 m，繁殖与移动可至约 1,200 m，已知繁殖点约 470—1,300 m；这些是地点记录，不是生理极限。[BirdLife](https://datazone.birdlife.org/species/factsheet/asian-crested-ibis-nipponia-nippon)
- 以弯喙在浅泥中触觉探食泥鳅等小鱼、蛙、蟹和螯虾、螺类、昆虫及幼虫、蚯蚓；稻田、田埂与草地的重要性随季节变化，不把泥鳅写成全年唯一主食。[Endo & Nagata 2013](https://doi.org/10.1017/S0959270913000035)
- 日出前后离开夜栖树，白天交替觅食与树上休息，日落前回栖；冬季觅食时间较长。繁殖季非繁殖鸟可集体夜栖，白天独行或成小群；冬季可聚成较大群。这是佐渡观察，不是全种固定时刻表。[Bird Research](https://www.bird-research.jp/1_shiryo/seitai/toki.pdf)
- 在高大松、栎、榆等横枝筑盘状巢；双亲孵卵和反刍喂雏。研究汇总窝卵数中位数 3、范围 2—5，孵化约 27 天、离巢约 40—45 天；BirdLife 概述通常 3—4 枚、约 28 天、2—4 岁成熟。
- 繁殖期炭灰色不是黑色新羽。成鸟洗浴后用头侧把面部附近皮肤产生的黑色物质涂到头颈与肩背白羽；一次可持续 20—30 分钟，约 5—6 次形成典型灰色，繁殖后随换羽恢复白色。[Uchida 1970](https://doi.org/10.3312/jyio1952.6.54)
- 主要威胁：历史猎捕、巢树砍伐与湿地丧失；农药和化肥及猎物衰退；冬季稻田排干、土地转用与河岸硬化；偶发射杀和巢区干扰；七只创始瓶颈造成的低遗传多样性；小型重引入种群的疾病、随机事件和连通风险。
- 行动：保护巢树和繁殖缓冲区；低投入稻作与冬季延长蓄水；恢复浅水猎物；分别统计野外、放归、人工种群；结合健康、行为、遗传评估开展放归与追踪；维持中日韩种群遗传管理和疾病防控；公众保持距离、不追逐、不投喂。

## 六个故事角度

1. **七只之后**：从 1981 年 7 只到全球超过 11,000 只，同时解释终点口径和创始瓶颈。
2. **自己涂出的灰色**：繁殖期外观来自洗浴后涂抹皮肤分泌物，不是换出黑羽。
3. **稻田加森林**：浅水农田供猎物，邻近高树承载巢，保护必须覆盖整块景观拼图。
4. **评估时钟**：2018 年 IUCN 状态沿用 2006 数量；2024 年日本成熟估计已超过旧全球数字，说明更新滞后而非评估作假。
5. **跨国归来**：中国秦岭扩展、日本佐渡和韩国牛浦重建部分历史范围，野外出生与持续繁殖比放飞数更能说明成效。
6. **用喙端读泥**：朱鹮以触觉探查浅泥，食谱和田块选择随季节、水位改变。

## 可直接集成的来源与字段

```ts
const CRESTED_IBIS_SOURCE_DATE = '2026-08-25' as const;
const CRESTED_IBIS_CONTENT_DATE = '2026-08-25' as const;
const CRESTED_IBIS_SOURCES = [
  { title: 'Avibase — Nipponia nippon', url: 'https://avibase.bsc-eoc.org/species.jsp?avibaseid=3E328C3C526E7ECF', kind: 'taxonomy', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'BirdLife International — Asian Crested Ibis species factsheet', url: 'https://datazone.birdlife.org/species/factsheet/asian-crested-ibis-nipponia-nippon', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '国家林草局 2024 — 全球朱鹮种群数量已超过 1.1 万只', url: 'https://www.forestry.gov.cn/c/www/dfdt/545445.jhtml', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '重庆市农业农村委 2023 — 全球朱鹮种群数量达 1.1 万只', url: 'https://nyncw.cq.gov.cn/zwxx_161/ywxx/202311/t20231109_12540505.html', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '生态环境部 2022 — 朱鹮拯救保护案例', url: 'https://www.mee.gov.cn/ywgz/zrstbh/swdyxbh/202212/t20221212_1007662.shtml', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '国家林草局、农业农村部 — 国家重点保护野生动物名录（2021 年第 3 号）', url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '生态环境部、中国科学院 — 中国生物多样性红色名录：脊椎动物卷（2020）', url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'CITES — Appendices effective 5 March 2026', url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'CMS — Species list', url: 'https://www.cms.int/species', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '日本环境省 2026 — レッドデータブック鳥類・トキ', url: 'https://www.env.go.jp/nature/kisho/5th-rl-2026/BI0054_RDB5th.pdf', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '日本环境省 — 佐渡朱鹮野外放归与首次野外孵化', url: 'https://www.env.go.jp/content/000039969.pdf', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '韩国政府 2019 — First release at Upo Wetland', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148860661', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: '韩国环境部 2023 — Seventh release of Crested Ibises', url: 'https://eng.me.go.kr/eng/web/board/read.do?boardId=1599780&boardMasterId=522', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'Bird Research — 生態図鑑 トキ', url: 'https://www.bird-research.jp/1_shiryo/seitai/toki.pdf', kind: 'general', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'National Museum of Nature and Science — Crested Ibis morphology', url: 'https://www.kahaku.go.jp/pickup-science/nid00001005.html', kind: 'general', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'Uchida 1970 — Nuptial coloration in the Japanese Crested Ibis', url: 'https://doi.org/10.3312/jyio1952.6.54', kind: 'ecology', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'Endo & Nagata 2013 — Seasonal foraging habitats and prey on Sado', url: 'https://doi.org/10.1017/S0959270913000035', kind: 'ecology', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'Okahisa et al. 2022 — Integrated population model in Japan', url: 'https://doi.org/10.1111/ibi.13071', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'Feng et al. 2019 — Severe conservation bottleneck in the Crested Ibis', url: 'https://www.sciencedirect.com/science/article/pii/S0960982218316099', kind: 'conservation', accessedAt: CRESTED_IBIS_SOURCE_DATE },
  { title: 'Oxford Ornithology 2023 — Density-dependent natal dispersal', url: 'https://academic.oup.com/condor/article/125/1/duac042/6779103', kind: 'distribution', accessedAt: CRESTED_IBIS_SOURCE_DATE },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-nipponia-nippon', slug: 'crested-ibis',
  names: { zh: '朱鹮', en: 'Crested Ibis', aliases: ['Asian Crested Ibis', 'Japanese Crested Ibis', 'Toki'] }, scientificName: 'Nipponia nippon',
  taxonomy: animalTaxonomy(taxon('Chordata', '脊索动物门'), taxon('Aves', '鸟纲'), taxon('Pelecaniformes', '鹈形目'), taxon('Threskiornithidae', '鹮科'), taxon('Nipponia', '朱鹮属')),
  conservation: conservation('EN', 'increasing', 2018, 'B1ab(iii)'),
  distribution: { realms: ['terrestrial', 'freshwater'], continents: ['亚洲'], regions: ['中国秦岭及扩展区', '日本佐渡岛', '韩国牛浦湿地'], countries: ['中国', '日本', '韩国'], range: '历史分布于东亚大陆、朝鲜半岛、日本和台湾；当前中国种群以陕西秦岭为恢复源头并持续扩展，日本佐渡和韩国牛浦为重引入种群。', center: { lat: 33.23, lng: 107.55 } },
  habitats: [
    { name: '浅水稻田、河岸与淡水湿地', realm: 'freshwater', description: '在浅泥、浅水和缓流边缘探食，水位和农法改变季节可用性。', isPrimary: true },
    { name: '农田、池塘与草地镶嵌景观', realm: 'terrestrial', description: '稻田、田埂、草地、池塘和水库组成觅食网络，冬季蓄水与低投入耕作维持猎物。', isPrimary: true },
    { name: '湿地附近温带高大乔木林', realm: 'terrestrial', description: '在邻近觅食地的高大松、栎、榆等横枝筑盘状巢并夜栖。' },
  ],
  measurements: { length: { typical: 75, unit: 'cm', note: '官方物种概览代表值，不是全种极值。' }, weight: { min: 1.6, max: 2, unit: 'kg', note: '官方物种概览体重范围。' }, wingspan: { typical: 1.4, unit: 'm', note: '官方物种概览代表值，不是全种极值。' } },
  diet: { types: ['carnivore', 'piscivore', 'insectivore'], foods: ['泥鳅及其他小鱼', '蛙类', '淡水蟹与螯虾', '河螺等软体动物', '昆虫及幼虫', '蚯蚓'], description: '以弯喙在浅泥和浅水中触觉探食，随季节在稻田、河岸、田埂和草地间改变猎物组合。' },
  activity: ['日出前后离开夜栖树', '以弯喙触觉探查浅泥', '白天觅食与树上休息交替', '日落前返回林木夜栖', '非繁殖期可形成觅食群', '双亲共同筑巢、孵卵和育雏'],
  tags: ['东亚涉禽', 'IUCN 濒危', '国家一级重点保护野生动物', 'CITES 附录 I', '重引入', '稻田湿地', '触觉探食', '繁殖期涂羽'],
  summary: '1981 年在陕西重新发现 7 只、后来恢复到全球超过 11,000 只的东亚涉禽，会把皮肤分泌物涂在白羽上形成灰色繁殖外观。',
  description: '朱鹮以红色裸脸、下弯黑喙、朱红腿和鲑橙飞羽辨识，在高树筑巢，到附近稻田、河岸和浅水湿地探食。1981 年陕西洋县仅发现 7 只，此后通过巡护、繁育、栖息地管理和中日韩重引入恢复到全球超过 11,000 只。IUCN 结构化状态仍为 2018 年 EN、increasing、B1ab(iii)，其成熟个体估计沿用 2006 年数据；恢复不等于遗传瓶颈、污染和生境风险已经消失。',
  storySections: [
    { key: 'seven-founders', label: '恢复史', title: '从七只幸存者重新铺开东亚种群', body: '1981 年仅确认 4 成鸟、3 幼鸟。全球总量后来超过 11,000 只，但终点是混合总量，创始瓶颈仍留在遗传结构中。' },
    { key: 'cosmetic-plumage', label: '繁殖外观', title: '灰色不是换羽，而是自己涂上去的', body: '成鸟洗浴后把面部附近皮肤产生的黑色物质涂到头颈和肩背白羽，多次涂抹形成炭灰色外观。' },
    { key: 'paddy-forest-mosaic', label: '生境拼图', title: '在稻田觅食，在邻近高树筑巢', body: '浅水农田和河岸提供猎物，高树承载巢与夜栖点；冬季蓄水、低投入耕作和林木保护必须一起发生。' },
    { key: 'assessment-clock', label: '数字边界', title: '2018 年状态背后，仍是 2006 年数量', body: 'IUCN 的 330 只成熟个体来自 2006 年。2024 年日本成熟个体估计已达 336 只，全球正式状态仍要等待重评。' },
    { key: 'east-asian-return', label: '重引入', title: '佐渡与牛浦的归来，从放飞才刚开始', body: '中国秦岭、日本佐渡、韩国牛浦重建部分历史范围；野外出生、成熟、配对与持续生存比放飞数更能说明恢复。' },
    { key: 'tactile-foraging', label: '觅食', title: '用弯喙的末端读出泥里的猎物', body: '朱鹮把弯喙探入浅泥，以触觉发现小鱼、蟹、昆虫幼虫和蚯蚓，季节水位改变田块选择。' },
  ],
  keyFacts: ['主名 Crested Ibis；Asian Crested Ibis 为别名。', 'IUCN 为 EN、increasing、2018、B1ab(iii)，正在重评。', 'IUCN 约 330 只成熟个体源于 2006 年旧估计。', '1981 年重新发现 7 只；2024 年全球概数超过 11,000 只，但不是成熟个体数。', '中国列国家一级，中国红名录 2020 为 EN，CITES 列附录 I。', '繁殖期炭灰色来自把皮肤分泌物涂在白羽上。', '佐渡雌雄均值约总长 73.1—77.2 cm、体重 1.55—1.78 kg，不是绝对范围。', '窝卵数中位数 3、范围 2—5，孵化约 27—28 天，约 40—45 天离巢。'],
  threats: ['历史猎捕、巢树砍伐与湿地丧失', '农药、化肥与猎物衰退', '冬季稻田排干、土地转用和河岸硬化', '偶发射杀、捕捉和巢区干扰', '七只创始瓶颈造成的低遗传多样性', '小型重引入种群的疾病、随机事件与连通风险'],
  conservationActions: ['保护巢树、繁殖核心和夜栖林', '推广低投入稻作、冬季延长蓄水并恢复浅水猎物', '分别监测野外、放归和人工种群', '结合健康、行为和遗传评估开展放归与追踪', '维持中日韩种群遗传管理与疾病防控', '执行国家一级与 CITES 管理并规范观鸟距离'],
  metrics: { adultMassKg: [1.6, 2] },
  featuredStats: [{ key: 'rediscovery', label: '1981 年重新发现', value: '7', unit: '只', note: '4 成鸟、3 幼鸟' }, { key: 'global-total', label: '2024 全球官方概数', value: '>11,000', unit: '只', note: '全龄、野外与人工混合；不是成熟个体数' }, { key: 'sado-wild', label: '2024 年末佐渡野外', value: '576', unit: '只', note: '133 只放归、443 只野外出生' }, { key: 'clutch', label: '窝卵数', value: '2—5', unit: '枚', note: '研究汇总中位数 3' }],
  media: {
    image: './images/species/crested-ibis/01-rice-paddy-flight.webp', alt: '一只朱鹮伸直颈部低飞越过浅水稻田，红色裸脸、下弯黑喙、白色身体和鲑橙色下翼清楚可见', focalPoint: { x: 0.68, y: 0.48 }, credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      { image: './images/species/crested-ibis/02-adult-field-marks.webp', alt: '浅水田边一只完整非繁殖成鸟侧身站立，红色裸脸和腿、黑色下弯喙红色喙端、白色冠羽与淡鲑色飞羽可见', title: '红脸、弯喙与鲑色飞羽' },
      { image: './images/species/crested-ibis/03-paddy-forest-mosaic.webp', alt: '东亚浅水稻田、河岸池塘与邻近温带高树林组成连续景观，一只小比例朱鹮在田中觅食', title: '稻田与巢树组成的生境拼图' },
      { image: './images/species/crested-ibis/04-tactile-paddy-foraging.webp', alt: '一只朱鹮把向下弯曲的长喙探入浅水稻田软泥，以触觉寻找泥中小型猎物', title: '用弯喙探读浅泥' },
      { image: './images/species/crested-ibis/05-cosmetic-daubing.webp', alt: '繁殖期朱鹮洗浴后把头侧贴向肩背涂抹，头颈与上背呈炭灰色，翼和腹部仍白', title: '自己涂出的繁殖灰色' },
      { image: './images/species/crested-ibis/06-leg-band-monitoring.webp', alt: '恢复区浅水稻田中一只佩戴细小彩色脚环的朱鹮正常觅食，两名研究人员在远处用望远镜记录', title: '从远处追踪一次归来' },
    ],
  },
  sources: CRESTED_IBIS_SOURCES, featured: true, publishedAt: CRESTED_IBIS_CONTENT_DATE, updatedAt: CRESTED_IBIS_CONTENT_DATE,
}
```

## 六图科学边界

资产 basename：`01-rice-paddy-flight`、`02-adult-field-marks`、`03-paddy-forest-mosaic`、`04-tactile-paddy-foraging`、`05-cosmetic-daubing`、`06-leg-band-monitoring`。

1. 成鸟必须有长而下弯的黑喙、红色喙端、朱红裸脸和腿、后枕冠羽；禁止匙形喙、鹤类红顶、火烈鸟腿和鹭类收颈飞行。
2. 非繁殖鸟粉白，鲑橙集中在飞羽与尾羽；繁殖鸟只有头、颈、肩背炭灰，禁止全身黑化。飞行时颈伸直、腿后拖。
3. 觅食图表现喙插入浅泥，不画深潜、过滤、长直喙刺鱼或吞大鱼。巢如出现，必须是高树枝条盘巢；幼鸟脸色较淡。
4. 生境为东亚浅水稻田、河岸湿地与温带高树林镶嵌，不是热带红树林、芦苇海或纯荒野沼泽。
5. 涂羽图让头侧接触肩背，发生在洗浴后；不出现液体喷射、烟雾、油污或人类颜料，灰色不覆盖翼腹。
6. 监测图只用细小脚环或轻量标记，人员远距观察，不抓持、围堵或投喂。所有鸟保持两腿、正常足趾、完整双翼和自然关节。
7. 图片仅重建代表场景，不声称是真实地点、个体、数量、放归事件或繁殖成效记录。
