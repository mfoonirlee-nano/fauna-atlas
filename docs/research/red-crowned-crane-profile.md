# 丹顶鹤（*Grus japonensis*）物种档案研究

- 检索与核验日期：2026-08-25
- 推荐中文名：**丹顶鹤**
- 推荐英文名：**Red-crowned Crane**
- 证据口径：分类采用 ITIS 与日本鸟学会；全球受胁状态采用 IUCN/BirdLife；近期数量采用国际丹顶鹤网络同步冬季普查；生态与生活史采用鹤类专家组、权威动物园和原始论文；法律状态采用 CITES、CMS 及中日政府名录
- 时间口径：IUCN 正式评估年是 **2021**；评估页面的 2022 errata 是更正发布日期，不是重评。2024/25 冬季普查报告发表于 2026 年，计数季仍写 2024/25

## 结论

### 分类与两个种群单元

接受名为 ***Grus japonensis* (P. L. S. Müller, 1776)**，归入动物界、脊索动物门、鸟纲、鹤形目、鹤科、鹤属；ITIS TSN 为 176184，原始组合为 *Ardea japonensis*。日本鸟学会名录把本种处理为单型种。大陆迁徙种群与日本岛屿留居种群是移动和保护管理单元，不是两个亚种。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=176184) [Ornithological Society of Japan checklist](https://ornithology.jp/materials/checklist/osj_checklist_5ed-en.pdf)

2024 年线粒体研究在北海道北部检出可能与大陆来源有关的单倍型，提示种群间可能存在近年的基因交流。该结果不能改写为已经证明的大规模持续迁入，也不能把两类年周期当成封闭亚种。[Ishiguro et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11171382/)

### IUCN 正式字段与近期数量必须分开

IUCN/BirdLife 的正式全球字段为 **VU / decreasing / 2021 / A2ac+4ac; C1**。评估采用 **2,000—2,650 只成熟个体**，最佳估计约 2,300，并估算三世代窗口下降 30.6%。IUCN 页面在 2022 年发布 errata，不应写成 `assessedYear: 2022`。[IUCN assessment](https://www.iucnredlist.org/species/22692167/213488064) [WOAH situation report](https://www.woah.org/app/uploads/2024/01/wildlife-situation-report-9.pdf)

结构化字段应写成：

```ts
conservation: conservation('VU', 'decreasing', 2021, 'A2ac+4ac; C1')
```

国际丹顶鹤网络的 2024/25 同步冬季普查给出 **5,887 只全龄个体**：日本留居种群 2,150 只；大陆迁徙种群 3,737 只，其中中国 1,033 只、韩国 2,704 只。上一冬季 2023/24 的对应总数为 4,884 只；报告把增加与较高繁殖成功、幼鸟存活及部分越冬地人工补饲联系起来。[IRCN 2024/25 census](https://rbcu.ru/upload/medialibrary/a07/k3qe0f3mm8kfdqsfmpakmodgf00k04xp/2026_CWGE%20Newsletter%20z20_compressed.pdf)

这两个数字不可互换：2,000—2,650 是 IUCN 评估使用的**成熟个体估计**，5,887 是较新的**全龄冬季计数/估计**。后者受调查覆盖、发现概率、聚集程度与补饲影响，不能填入 `metrics.estimatedMatureIndividuals`。国际鹤类基金会 2025 汇总把当前总体趋势记为 increasing，这是评估后的监测解释，不自动覆写 IUCN 的正式 `decreasing` 字段。[ICF 2025 status table](https://savingcranes.org/wp-content/uploads/2024/10/conservation_status_of_cranes_2025.pdf)

### 分布、迁徙与生境

- **大陆迁徙种群**：在中国东北和俄罗斯远东南部繁殖，秋季迁往中国东部沿海与朝鲜半岛越冬。中国繁殖区包括黑龙江、吉林、辽宁与内蒙古；俄罗斯繁殖区包括阿穆尔州、犹太自治州、哈巴罗夫斯克边疆区、滨海边疆区及外贝加尔。越冬核心包括盐城、黄河三角洲和朝鲜半岛非军事区及民统线地区。
- **日本留居种群**：主要常年生活在北海道，并向国后岛扩展。留居不等于完全不移动，个体仍会在繁殖地、夜栖地和冬季食物点之间季节性移动。
- 卫星追踪识别出两条大陆路线：从俄罗斯兴安斯基保护区至江苏沿海的西线约 **2,200 千米**；从兴凯湖至朝鲜半岛非军事区的东线约 **900 千米**。盘锦、唐山东南泥滩、黄河口、图们江口、金野与铁原等停歇地连接整条迁徙链。[Higuchi et al. 1998](https://doi.org/10.1046/j.1440-1703.1998.00271.x)

繁殖期高度依赖芦苇、苔草、沼泽草甸和浅水湿地，巢建在被站立水体包围的植被垫或低丘上；北海道也利用湿草甸。冬季使用河流、浅水沼泽、水库、黄海潮滩、盐沼、河口、稻田与收获后农田。因此推荐 `realms: ['terrestrial', 'freshwater', 'marine']`，但不设置 `distribution.center`，以免一个点被误读为两个分离种群和两条迁徙链的中心。[Crane Conservation Strategy](https://savingcranes.org/wp-content/uploads/2024/10/crane_conservation_strategy_red-crowned_crane.pdf)

### 尺寸及适用范围

井上等人测量了 1976—2010 年收集的 **284 具北海道野生个体尸体**。成鸟雄鸟体长均值 136.5 厘米、范围 124.3—147.0 厘米，体重均值 8.137 千克、范围 5.49—10.55 千克；成鸟雌鸟体长均值 124.7 厘米、范围 101.9—133.5 厘米，体重均值 7.321 千克、范围 4.8—9.6 千克。论文显示同龄级雄鸟各项测量普遍较大。[Inoue et al. 2013](https://pubmed.ncbi.nlm.nih.gov/23585489/)

上述包络来自北海道留居种群尸体样本，不是健康活体的全球标准范围。Smithsonian 给出站立高度约 158 厘米、翼展最大约 2.5 米；其页面的千克与磅体重换算互相矛盾，因此不采用该页体重。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/red-crowned-crane)

| 字段 | 推荐值 | 边界 |
| --- | --- | --- |
| `measurements.length` | 101.9—147 cm | 北海道成鸟雌雄尸体样本的合并包络 |
| `measurements.height` | typical 1.58 m | 站立高度，不是体长 |
| `measurements.weight` | 4.8—10.55 kg | 北海道成鸟尸体样本，不外推为全球活体极值 |
| `measurements.wingspan` | max 2.5 m | 权威物种概览提供的上限 |
| `metrics.adultLengthCm` | `[101.9, 147]` | 保留样本范围语义 |
| `metrics.adultMassKg` | `[4.8, 10.55]` | 保留样本范围语义 |
| `metrics.estimatedMatureIndividuals` | `[2000, 2650]` | IUCN 2021 成熟个体估计 |
| `metrics.lifespanYears` | 不填 | 野外寿命证据不足；圈养中位寿命不能代替野外范围 |
| `metrics.wingspanCm` | 不填 | 只有可靠上限，schema 要求完整范围 |

### 食性、社会行为与繁殖

丹顶鹤为杂食动物，动物性食物在鹤类中占比较高，包括鱼、蛙、蛇、软体动物、水生无脊椎动物、昆虫和小型哺乳动物，也取食芦苇和其他草本植物、种子及落谷。韩国越冬鸟在民统线稻田取食落谷，在潮滩寻找动物性食物；北海道种群长期利用人工补饲。食物组合随季节和地点改变，不能写成固定以鱼为主。[Crane Conservation Strategy](https://savingcranes.org/wp-content/uploads/2024/10/crane_conservation_strategy_red-crowned_crane.pdf)

繁殖对在湿地建立领域，一般每窝两枚卵，双亲孵化约 29—34 天；雄鸟承担较多巢防御，幼鸟约 95 天具飞行能力，家庭常维持到下一繁殖季。页面称其 generally monogamous，产品应写“通常形成稳定配对”，不要绝对化为永不更换配偶。[Smithsonian National Zoo](https://nationalzoo.si.edu/animals/red-crowned-crane)

合鸣既能携带配对身份，也参与资源防卫。Klenova 等记录 8 对圈养和 2 对野生配对的 343 次合鸣，发现声学结构可编码配对身份；Takeda 等在冬季补饲群体发现，竞争与食物丰富度会改变合鸣展示频率。舞蹈和合鸣不能只写成“浪漫求偶”，也服务于配对协调、家庭联系与领域或食物资源防卫。[Klenova et al. 2008](https://doi.org/10.1007/s10164-007-0063-y) [Takeda et al. 2018](https://doi.org/10.1007/s00265-018-2485-7)

### 威胁、行动与法律状态

核心威胁包括繁殖地、停歇地和越冬地湿地丧失及破碎化；水坝、引水和排水造成的水文改变；巢区火灾；互花米草入侵潮滩；农药、毒饵和重金属；电力线碰撞；道路与基础设施；朝鲜半岛非军事区及民统线土地用途变化；日本种群在少数补饲点高度聚集后产生的疾病、碰撞和人类依赖风险。繁殖巢既怕干涸，也怕突然涨水淹没。[Crane Conservation Strategy](https://savingcranes.org/wp-content/uploads/2024/10/crane_conservation_strategy_red-crowned_crane.pdf)

对应行动是保护并恢复繁殖、停歇和越冬湿地链；维持适合筑巢的水位并防火；控制互花米草；保护非军事区和民统线农田，补偿鹤友好耕作；恢复替代越冬地；降低毒物和电力线风险；同步监测两种群；在北海道逐步分散冬季补饲与夜栖压力。日本环境省记录 2022 年 11 月首次在丹顶鹤检出高致病性禽流感，2023 年又出现病例；大型补饲点可聚集超过 200 只鹤，管理措施因此优先开放小型补饲点并推迟大型点供食，以降低集中感染风险。[Japan MOE HPAI response](https://hokkaido.env.go.jp/kushiro/press_00110.html)

法律和名录字段应保持独立：

- CITES 官方附录把 *Grus japonensis* 列入**附录 I**；这表示国际贸易受严格控制，不宜简写成“任何情形下绝对禁止”。[CITES Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
- CMS 把本种列入**附录 I 与 II**，自 1979 年生效；CMS 页面仍显示旧 IUCN “Endangered”，不可用来覆盖当前 VU。[CMS species page](https://www.cms.int/species/grus-japonensis)
- 中国《国家重点保护野生动物名录》把丹顶鹤列为**一级**；《中国生物多样性红色名录：脊椎动物卷（2020）》列为 **EN C1**。后者是 2020 版评估口径，政府于 2023 年发布，不是 2023 年重评。[中国国家重点保护名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) [中国生物多样性红色名录](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)
- 日本环境省第五次红色名录于 2026 年把本种列为 **NT，criterion ②**；同时属于国内稀有野生动植物种和特别天然纪念物。日本国内等级不能替代 IUCN 全球等级。[Japan Red List 5th edition](https://ikilog.biodic.go.jp/rl_rdb/a/894.html)

## 六个故事角度与图像边界

1. **同一物种，两种年周期**：大陆种群季节迁徙，北海道种群全年留居；二者不是亚种，基因交流边界仍在研究。
2. **两条迁徙链**：西线约 2,200 千米，东线约 900 千米；任一关键停歇地受损都会影响整条路线。
3. **一座怕旱也怕洪的水上巢**：低植被巢丘需要持续浅水保护，水位骤降暴露巢，骤升则淹巢。
4. **补饲的双刃剑**：补饲帮助北海道种群恢复，也使大量个体集中，放大传染病、碰撞和依赖风险。
5. **合鸣不只表达配偶关系**：配对身份、家庭联系与食物资源防卫共同塑造冬季合鸣和舞蹈。
6. **“红冠”与“黑尾”的视觉误会**：红冠是头顶裸露皮肤；折翼时覆在白尾上的长黑色三级飞羽容易被误认成黑尾。

六图建议文件名：`01-red-crown-marsh-portrait.webp`、`02-hokkaido-snow-courtship-duet.webp`、`03-shallow-water-nest-and-chicks.webp`、`04-continental-wetland-migration.webp`、`05-coastal-winter-foraging.webp`、`06-distance-conservation-monitoring.webp`。

共同图像约束：成鸟体羽白色，脸、喉和前颈黑色，从眼后至后颈有白带；头顶只有一块裸露红皮，不画红羽冠或整张红脸；喙长而直、深橄榄灰色；腿长而暗；折翼时黑色长三级飞羽覆盖白尾，真实尾羽仍是白色。飞行时颈向前伸直、腿向后伸，初级飞羽白色，黑色集中在次级飞羽和内侧后缘，不画成黑翼尖。幼鸟头颈为肉桂褐、黄褐和灰色，头顶有羽毛且没有成鸟红冠。巢是浅水中低矮植被丘，不是树巢；通常两枚卵。所有图避免 S 形飞行颈、蹼足、鹳式粗喙、额外肢体、成群靠近巢、人手接触、游客投喂、文字、标志和水印。

## 推荐来源数组

```ts
const RED_CROWNED_CRANE_SOURCE_DATE = '2026-08-25' as const;
const RED_CROWNED_CRANE_CONTENT_DATE = '2026-08-25' as const;

const RED_CROWNED_CRANE_SOURCES = [
  { title: 'ITIS — Grus japonensis, TSN 176184', url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=176184', kind: 'taxonomy', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Ornithological Society of Japan — Check-list of Japanese Birds, 5th edition', url: 'https://ornithology.jp/materials/checklist/osj_checklist_5ed-en.pdf', kind: 'taxonomy', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'IUCN Red List — Grus japonensis, 2021 assessment with 2022 errata', url: 'https://www.iucnredlist.org/species/22692167/213488064', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'IUCN SSC Crane Specialist Group — Crane Conservation Strategy: Red-crowned Crane', url: 'https://savingcranes.org/wp-content/uploads/2024/10/crane_conservation_strategy_red-crowned_crane.pdf', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'International Red-crowned Crane Network — 2024/25 winter census', url: 'https://rbcu.ru/upload/medialibrary/a07/k3qe0f3mm8kfdqsfmpakmodgf00k04xp/2026_CWGE%20Newsletter%20z20_compressed.pdf', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'International Crane Foundation — Conservation Status of Cranes 2025', url: 'https://savingcranes.org/wp-content/uploads/2024/10/conservation_status_of_cranes_2025.pdf', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Higuchi et al. 1998 — Satellite tracking of Red-crowned Crane migration', url: 'https://doi.org/10.1046/j.1440-1703.1998.00271.x', kind: 'distribution', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Inoue et al. 2013 — Morphometrics of wild Red-crowned Cranes in Hokkaido', url: 'https://pubmed.ncbi.nlm.nih.gov/23585489/', kind: 'general', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Smithsonian National Zoo — Red-crowned Crane', url: 'https://nationalzoo.si.edu/animals/red-crowned-crane', kind: 'ecology', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Klenova et al. 2008 — Pair identity in Red-crowned Crane duets', url: 'https://doi.org/10.1007/s10164-007-0063-y', kind: 'ecology', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Takeda et al. 2018 — Duet displays and resource defence', url: 'https://doi.org/10.1007/s00265-018-2485-7', kind: 'ecology', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Ishiguro et al. 2024 — Possible continental gene flow into Hokkaido', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11171382/', kind: 'ecology', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'CITES — Appendices I, II and III, valid from 5 March 2026', url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'CMS — Grus japonensis species listing', url: 'https://www.cms.int/species/grus-japonensis', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: '中国国家重点保护野生动物名录（2021）', url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: '中国生物多样性红色名录：脊椎动物卷（2020）', url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Japan Ministry of the Environment — Red List 5th edition: Grus japonensis', url: 'https://ikilog.biodic.go.jp/rl_rdb/a/894.html', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
  { title: 'Japan Ministry of the Environment — HPAI response at crane feeding stations', url: 'https://hokkaido.env.go.jp/kushiro/press_00110.html', kind: 'conservation', accessedAt: RED_CROWNED_CRANE_SOURCE_DATE },
] as const satisfies readonly SpeciesSource[];
```

## 推荐 `Species` 字段

```ts
{
  id: 'species-grus-japonensis',
  slug: 'red-crowned-crane',
  names: { zh: '丹顶鹤', en: 'Red-crowned Crane', aliases: ['Japanese Crane', 'Manchurian Crane'] },
  scientificName: 'Grus japonensis',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Gruiformes', '鹤形目'),
    taxon('Gruidae', '鹤科'),
    taxon('Grus', '鹤属'),
  ),
  conservation: conservation('VU', 'decreasing', 2021, 'A2ac+4ac; C1'),
  distribution: {
    realms: ['terrestrial', 'freshwater', 'marine'],
    continents: ['亚洲'],
    regions: ['中国东北与俄罗斯远东繁殖湿地', '北海道与国后岛', '中国黄渤海沿岸', '朝鲜半岛非军事区及民统线地区'],
    countries: ['中国', '俄罗斯', '蒙古', '朝鲜', '韩国', '日本'],
    range: '大陆迁徙种群在中国东北和俄罗斯远东南部繁殖，经两条主要路线迁往中国东部沿海及朝鲜半岛越冬；岛屿留居种群主要全年生活在北海道，并向国后岛扩展。蒙古包括已确认范围记录，不表示全国普遍分布。',
  },
  habitats: [
    { name: '芦苇、苔草沼泽与湿草甸', realm: 'freshwater', description: '主要繁殖生境；在被浅水包围的植被垫或低丘上筑巢，水位过高或过低都会降低繁殖安全。', isPrimary: true },
    { name: '河流、浅水沼泽与水库', realm: 'freshwater', description: '用于取食、夜栖、停歇和局地移动，质量取决于水位、开阔浅水与干扰程度。' },
    { name: '黄海潮滩、盐沼与河口', realm: 'marine', description: '大陆种群的重要越冬和停歇环境，可提供软体动物、鱼类及其他水生动物。' },
    { name: '稻田与收获后农田', realm: 'terrestrial', description: '朝鲜半岛和中国部分越冬地的重要落谷觅食环境，依赖鹤友好耕作与低干扰管理。' },
  ],
  measurements: {
    length: { min: 101.9, max: 147, unit: 'cm', note: '北海道成鸟尸体样本的雌雄合并包络；不是全球健康活体范围。' },
    height: { typical: 1.58, unit: 'm', note: 'Smithsonian 给出的站立高度；不要与体长混用。' },
    weight: { min: 4.8, max: 10.55, unit: 'kg', note: '北海道成鸟尸体样本；雌雄、年龄、季节和身体状况均影响体重。' },
    wingspan: { max: 2.5, unit: 'm', note: 'Smithsonian 权威概览的翼展上限。' },
  },
  diet: {
    types: ['omnivore'],
    foods: ['鱼类', '蛙、蛇及其他小型脊椎动物', '软体动物与水生无脊椎动物', '昆虫', '芦苇和其他草本植物', '稻谷与其他落谷'],
    description: '在浅水、泥滩和农田步行取食；动物性食物占有重要位置，也取食植物、种子和落谷，组合随种群、季节与地点改变。',
  },
  activity: ['繁殖期领域性', '浅水步行取食', '配对合鸣与舞蹈', '冬季家庭群与群聚', '大陆种群季节性迁徙'],
  tags: ['东亚湿地旗舰种', 'IUCN 易危', '中国国家一级保护', '大陆迁徙与北海道留居', 'CITES 附录 I'],
  summary: '以裸露红色头冠和黑白羽色著称，具有东亚大陆迁徙种群与北海道留居种群的高大湿地鹤类。',
  description: '丹顶鹤的一部分沿东亚湿地链迁徙，另一部分全年留居北海道。繁殖巢依赖稳定浅水，越冬则连接潮滩、河流和农田。2024/25 冬季同步普查记录 5,887 只全龄个体，但 IUCN 正式字段仍是 2021 年的 VU、decreasing 与 2,000—2,650 只成熟个体；两个口径不能混写。',
  storySections: [
    { key: 'two-populations', label: '种群', title: '同一物种过着两种年周期', body: '大陆种群在中俄繁殖后迁往中国沿海与朝鲜半岛，岛屿种群主要留居北海道和国后岛。它们是管理和移动单元，不是两个亚种；新遗传证据还提示两者可能存在有限交流。' },
    { key: 'flyways', label: '迁徙', title: '两条路线把湿地串成生命链', body: '西线约 2,200 千米，连接俄罗斯繁殖地与江苏沿海；东线约 900 千米，通往朝鲜半岛。盘锦、黄河口、图们江口与铁原等停歇地使长途移动成为可能。' },
    { key: 'nest-water', label: '繁殖', title: '浅水既是围墙，也是风险', body: '巢建在芦苇和苔草形成的低丘上，周围站立水体能隔开部分捕食者与干扰。干旱会使巢暴露，骤涨又会淹没巢，水文管理直接影响繁殖成功。' },
    { key: 'feeding-paradox', label: '恢复', title: '补饲救回种群，也制造集中风险', body: '北海道冬季补饲帮助丹顶鹤度过食物短缺，却使数百只鸟聚在少数地点。禽流感、交通碰撞和对人的依赖因此更突出，当前管理目标包括分散补饲与扩展安全栖息地。' },
    { key: 'duet', label: '行为', title: '合鸣不只发生在求偶时', body: '丹顶鹤的合鸣具有可识别的配对声学结构，也会随家庭关系、群体竞争和食物资源改变。舞蹈与合鸣共同参与配对协调、家庭联系和领域或资源防卫。' },
    { key: 'conservation', label: '保护', title: '数量回升仍依赖完整湿地链', body: '近期冬季计数增加，没有消除湿地转换、水位失调、火灾、互花米草、毒物、电力线和疾病风险。保护必须同时覆盖繁殖地、停歇地、越冬地与鹤友好农田。' },
  ],
  keyFacts: [
    '接受名为 Grus japonensis，当前按单型种处理；大陆迁徙与日本留居单元不是亚种。',
    'IUCN 正式字段为 VU、decreasing、2021、A2ac+4ac; C1；2022 只是 errata 发布年。',
    'IUCN 估计 2,000—2,650 只成熟个体；2024/25 冬季普查的 5,887 是全龄数量，不能直接互换。',
    '大陆种群 2024/25 冬季计数 3,737 只，日本留居种群 2,150 只。',
    '西线迁徙约 2,200 千米，东线约 900 千米，不存在适用于所有大陆个体的单一路线。',
    '成鸟红色头冠是裸露皮肤，折翼时看似黑尾的部分主要是长黑色三级飞羽，真实尾羽为白色。',
    '通常每窝两枚卵，双亲孵化约 29—34 天，幼鸟约 95 天具飞行能力。',
    'CITES 附录 I、CMS 附录 I 和 II、中国国家一级保护及日本国内名录是不同法律或评估体系。',
  ],
  threats: ['繁殖、停歇和越冬湿地丧失与破碎化', '水坝、引水、排水及异常水位改变', '巢区火灾和互花米草入侵', '农药、毒饵、重金属及食物污染', '电力线、道路和其他基础设施碰撞', '朝鲜半岛关键农田与非军事区土地用途变化', '北海道补饲点集中引起的疾病、碰撞和人类依赖风险'],
  conservationActions: ['保护并恢复跨境繁殖、停歇和越冬湿地链', '维持适合筑巢的浅水水位并加强繁殖地防火', '控制互花米草并恢复潮滩和盐沼', '保护非军事区、民统线和鹤友好稻田并补偿农户', '降低毒物暴露并标记或改造高风险电力线', '同步监测大陆迁徙与日本留居种群并统一计数口径', '分散北海道冬季补饲和夜栖压力，扩大替代栖息地'],
  metrics: { adultLengthCm: [101.9, 147], adultMassKg: [4.8, 10.55], estimatedMatureIndividuals: [2000, 2650] },
  featuredStats: [
    { key: 'winter-total', label: '2024/25 冬季全龄计数', value: '5,887', unit: '只', note: 'IRCN 同步普查；不是成熟个体数' },
    { key: 'continental', label: '大陆迁徙种群', value: '3,737', unit: '只', note: '2024/25 冬季：中国 1,033，韩国 2,704' },
    { key: 'resident', label: '日本留居种群', value: '2,150', unit: '只', note: '2024/25 冬季计数/估计' },
    { key: 'standing-height', label: '站立高度', value: '约 158', unit: '厘米', note: '不是体长' },
  ],
  media: {
    image: './images/species/red-crowned-crane/01-red-crown-marsh-portrait.webp',
    alt: '一只头顶具有裸露红冠、黑色脸和前颈、白色后颈与身体的成鸟丹顶鹤，站在春季浅水芦苇沼泽中',
    focalPoint: { x: 0.7, y: 0.5 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      { image: './images/species/red-crowned-crane/02-hokkaido-snow-courtship-duet.webp', alt: '两只成鸟丹顶鹤在北海道雪地湿草甸中保持自然距离合鸣和舞蹈，其中一只展翼，另一只昂首鸣叫', title: '雪地中的配对合鸣与舞蹈', focalPoint: { x: 0.59, y: 0.51 } },
      { image: './images/species/red-crowned-crane/03-shallow-water-nest-and-chicks.webp', alt: '一只成鸟丹顶鹤守在浅水芦苇间的低矮植被巢丘旁，两只头颈肉桂褐且没有红冠的幼鸟留在近处', title: '需要稳定浅水的巢与幼鸟', focalPoint: { x: 0.6, y: 0.53 } },
      { image: './images/species/red-crowned-crane/04-continental-wetland-migration.webp', alt: '两只成鸟丹顶鹤伸直长颈、双腿向后，在东亚大陆湿地上空迁飞，白色初级飞羽和黑色次级飞羽清楚可见', title: '大陆迁徙种群的长途飞行', focalPoint: { x: 0.57, y: 0.42 } },
      { image: './images/species/red-crowned-crane/05-coastal-winter-foraging.webp', alt: '两只成鸟丹顶鹤在东亚沿海冬季潮滩浅水中步行，低头寻找小鱼、软体动物及其他小型猎物', title: '沿海越冬地的成鸟觅食', focalPoint: { x: 0.57, y: 0.56 } },
      { image: './images/species/red-crowned-crane/06-distance-conservation-monitoring.webp', alt: '一只丹顶鹤在宽阔浅水湿地中活动，两名研究人员在远处堤岸使用单筒望远镜并记录鸟类与水位', title: '保持距离的湿地监测', focalPoint: { x: 0.61, y: 0.49 } },
    ],
  },
  sources: RED_CROWNED_CRANE_SOURCES,
  featured: true,
  publishedAt: RED_CROWNED_CRANE_CONTENT_DATE,
  updatedAt: RED_CROWNED_CRANE_CONTENT_DATE,
}
```

## 落库边界

- 不设置 `distribution.center`；两个种群和两条迁徙路线无法由一个点诚实概括。
- 不把 5,887 写进 `estimatedMatureIndividuals`，也不把近期计数的增长直接改成 IUCN `increasing`。
- 不填寿命或完整翼展范围；现有可靠来源只能支持圈养中位寿命或单一翼展上限。
- 中国 EN C1、日本 NT、IUCN VU 和国际公约附录各自保留体系名称，不互相替代。
- 六幅图是代表性科学重建，不冒充真实巢址、遥测个体或一次已记录的保护行动；生成后再按实际主体位置微调 `focalPoint`。
