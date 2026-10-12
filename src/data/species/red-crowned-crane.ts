import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RED_CROWNED_CRANE_SOURCE_DATE = '2026-08-25' as const;

const RED_CROWNED_CRANE_CONTENT_DATE = '2026-08-25' as const;

const RED_CROWNED_CRANE_SOURCES = [
  {
    title: 'ITIS: Grus japonensis, TSN 176184',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=176184',
    kind: 'taxonomy',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Ornithological Society of Japan: Check-list of Japanese Birds, 5th edition',
    url: 'https://ornithology.jp/materials/checklist/osj_checklist_5ed-en.pdf',
    kind: 'taxonomy',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Grus japonensis, 2021 assessment with 2022 errata',
    url: 'https://www.iucnredlist.org/species/22692167/213488064',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Crane Specialist Group: Crane Conservation Strategy, Red-crowned Crane',
    url: 'https://savingcranes.org/wp-content/uploads/2024/10/crane_conservation_strategy_red-crowned_crane.pdf',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'International Red-crowned Crane Network: 2024/25 winter census',
    url: 'https://rbcu.ru/upload/medialibrary/a07/k3qe0f3mm8kfdqsfmpakmodgf00k04xp/2026_CWGE%20Newsletter%20z20_compressed.pdf',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'International Crane Foundation: Conservation Status of Cranes 2025',
    url: 'https://savingcranes.org/wp-content/uploads/2024/10/conservation_status_of_cranes_2025.pdf',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Higuchi et al. 1998: Satellite tracking of Red-crowned Crane migration',
    url: 'https://doi.org/10.1046/j.1440-1703.1998.00271.x',
    kind: 'distribution',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Inoue et al. 2013: Morphometrics of wild Red-crowned Cranes in Hokkaido',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23585489/',
    kind: 'general',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Smithsonian National Zoo: Red-crowned Crane',
    url: 'https://nationalzoo.si.edu/animals/red-crowned-crane',
    kind: 'ecology',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Klenova et al. 2008: Pair identity in Red-crowned Crane duets',
    url: 'https://doi.org/10.1007/s10164-007-0063-y',
    kind: 'ecology',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Takeda et al. 2018: Duet displays and resource defence',
    url: 'https://doi.org/10.1007/s00265-018-2485-7',
    kind: 'ecology',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Ishiguro et al. 2024: Possible continental gene flow into Hokkaido',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11171382/',
    kind: 'ecology',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, valid from 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'CMS: Grus japonensis species listing',
    url: 'https://www.cms.int/species/grus-japonensis',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: '中国国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: '中国生物多样性红色名录：脊椎动物卷（2020）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Japan Ministry of the Environment: Red List 5th edition, Grus japonensis',
    url: 'https://ikilog.biodic.go.jp/rl_rdb/a/894.html',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
  {
    title: 'Japan Ministry of the Environment: HPAI response at crane feeding stations',
    url: 'https://hokkaido.env.go.jp/kushiro/press_00110.html',
    kind: 'conservation',
    accessedAt: RED_CROWNED_CRANE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-grus-japonensis',
    slug: 'red-crowned-crane',
    names: {
      zh: '丹顶鹤',
      en: 'Red-crowned Crane',
      aliases: ['Japanese Crane', 'Manchurian Crane'],
    },
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
      regions: [
        '中国东北与俄罗斯远东繁殖湿地',
        '北海道与国后岛',
        '中国黄渤海沿岸',
        '朝鲜半岛非军事区及民统线地区',
      ],
      countries: ['中国', '俄罗斯', '蒙古', '朝鲜', '韩国', '日本'],
      range:
        '大陆迁徙种群在中国东北和俄罗斯远东南部繁殖，经两条主要路线迁往中国东部沿海及朝鲜半岛越冬；岛屿留居种群主要全年生活在北海道，并向国后岛扩展。蒙古包括已确认范围记录，不表示全国普遍分布。',
    },
    habitats: [
      {
        name: '芦苇、苔草沼泽与湿草甸',
        realm: 'freshwater',
        description: '主要繁殖生境；成鸟在浅水包围的植被垫或低丘上筑巢，水位过高或过低都会降低繁殖安全。',
        isPrimary: true,
      },
      {
        name: '河流、浅水沼泽与水库',
        realm: 'freshwater',
        description: '用于取食、夜栖、停歇和局地移动，生境质量取决于水位、开阔浅水与干扰程度。',
      },
      {
        name: '黄海潮滩、盐沼与河口',
        realm: 'marine',
        description: '大陆种群的重要越冬和停歇环境，可提供软体动物、鱼类及其他水生动物。',
      },
      {
        name: '稻田与收获后农田',
        realm: 'terrestrial',
        description: '朝鲜半岛和中国部分越冬地的重要落谷觅食环境，依赖鹤友好耕作与低干扰管理。',
      },
    ],
    measurements: {
      length: {
        min: 101.9,
        max: 147,
        unit: 'cm',
        note: '北海道成鸟尸体样本的雌雄合并包络，不是全球健康活体范围。',
      },
      height: {
        typical: 1.58,
        unit: 'm',
        note: 'Smithsonian 给出的站立高度，不能与体长混用。',
      },
      weight: {
        min: 4.8,
        max: 10.55,
        unit: 'kg',
        note: '北海道成鸟尸体样本；雌雄、年龄、季节和身体状况均会影响体重。',
      },
      wingspan: {
        max: 2.5,
        unit: 'm',
        note: 'Smithsonian 物种概览给出的翼展上限，现有来源不支持完整范围。',
      },
    },
    diet: {
      types: ['omnivore'],
      foods: [
        '鱼类',
        '蛙、蛇及其他小型脊椎动物',
        '软体动物与水生无脊椎动物',
        '昆虫',
        '芦苇和其他草本植物',
        '稻谷与其他落谷',
      ],
      description:
        '在浅水、泥滩和农田步行取食。动物性食物占有重要位置，也取食植物、种子和落谷，食物组合随种群、季节与地点改变。',
    },
    activity: [
      '繁殖期建立并防卫湿地领域',
      '在浅水、泥滩与农田步行取食',
      '配对合鸣与舞蹈',
      '冬季以家庭和更大群体活动',
      '大陆种群季节性迁徙，北海道种群主要留居',
    ],
    tags: [
      '东亚湿地旗舰种',
      'IUCN 易危',
      '中国国家一级保护野生动物',
      '大陆迁徙与北海道留居',
      'CITES 附录 I',
      'CMS 附录 I 和 II',
      '裸露红冠',
    ],
    summary:
      '丹顶鹤生活在东亚湿地，头顶的红色部分是裸露皮肤。大陆种群季节性迁徙，北海道种群则主要全年留居。',
    description:
      '丹顶鹤的一部分沿东亚湿地链迁徙，另一部分主要全年留居北海道。繁殖巢依赖稳定浅水，越冬活动连接潮滩、河流和农田。2024/25 冬季同步普查记录 5,887 只全龄个体，其中大陆迁徙种群 3,737 只、日本留居种群 2,150 只；IUCN 2021 年评估为易危、趋势下降，采用 2,000 至 2,650 只成熟个体估计，两个统计口径不能互换。',
    storySections: [
      {
        key: 'two-annual-cycles',
        label: '种群',
        title: '同一物种过着两种年周期',
        body: '大陆种群在中国东北和俄罗斯远东南部繁殖，迁往中国沿海与朝鲜半岛越冬；岛屿种群主要留居北海道和国后岛。两者属于移动和保护管理单元，不是两个亚种，遗传研究提示其间可能存在有限交流。',
      },
      {
        key: 'two-flyways',
        label: '迁徙',
        title: '大陆种群的两条主要迁徙路线',
        body: '西线约 2,200 千米，连接俄罗斯繁殖地与江苏沿海；东线约 900 千米，通往朝鲜半岛。盘锦、黄河口、图们江口与铁原等停歇地支撑长途移动，任一节点退化都可能影响整条路线。',
      },
      {
        key: 'nest-water-balance',
        label: '繁殖',
        title: '繁殖巢需要合适的浅水位',
        body: '成鸟把巢建在芦苇和苔草形成的低丘上，周围站立水体能隔开部分捕食者与干扰。干旱会使巢暴露，骤涨又会淹没巢，繁殖地管理需要维持合适水位并控制火灾。',
      },
      {
        key: 'feeding-concentration',
        label: '恢复',
        title: '冬季补饲也增加集中风险',
        body: '北海道冬季补饲帮助丹顶鹤度过食物短缺，却使数百只鸟聚在少数地点。禽流感、交通碰撞和对人工食物的依赖随之增加，管理者正分散补饲压力并扩大安全栖息地。',
      },
      {
        key: 'duet-and-dance',
        label: '行为',
        title: '合鸣不只发生在求偶时',
        body: '丹顶鹤的合鸣具有可识别的配对声学结构，家庭关系、群体竞争和食物资源也会改变展示频率。舞蹈与合鸣共同参与配对协调、家庭联系及领域或资源防卫。',
      },
      {
        key: 'wetland-chain-conservation',
        label: '保护',
        title: '数量回升仍依赖完整湿地链',
        body: '日本留居种群的恢复和近期冬季计数增加，没有消除大陆迁徙种群面临的湿地转换、水位失调、火灾、互花米草、毒物与电力线风险。保护需要同时覆盖繁殖地、停歇地、越冬地和鹤友好农田。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1776 年的命名与红色裸顶',
        body: '丹顶鹤的科学命名记录署名为 Statius Müller，年份为 1776 年，现用学名为 Grus japonensis。中文名所指的红顶是裸露皮肤。它折翼时看似黑色尾巴的部分主要是长黑色三级飞羽，真正尾羽是白色的。',
      },
    ],
    keyFacts: [
      '接受名为 Grus japonensis，当前按单型种处理；大陆迁徙与日本留居单元不是亚种。',
      'IUCN 在 2021 年评为易危，趋势下降，判据为 A2ac+4ac; C1；2022 年发布的是勘误。',
      'IUCN 采用 2,000 至 2,650 只成熟个体估计；2024/25 冬季普查的 5,887 是全龄数量，不能直接互换。',
      '2024/25 冬季计数中，大陆迁徙种群为 3,737 只，日本留居种群为 2,150 只。',
      '西线迁徙约 2,200 千米，东线约 900 千米，不存在适用于所有大陆个体的单一路线。',
      '成鸟红色头冠是裸露皮肤，折翼时看似黑尾的部分主要是长黑色三级飞羽，真实尾羽为白色。',
      '通常每窝两枚卵，双亲孵化约 29 至 34 天，幼鸟约 95 天具飞行能力。',
      'CITES 将本种列入附录 I，CMS 将本种列入附录 I 和 II。两个公约的附录体系不能互换。',
      '中国国家一级、全球 IUCN VU、中国红名录 EN C1 与日本国内 NT 属于不同法律或评估体系。',
    ],
    threats: [
      '繁殖、停歇和越冬湿地丧失与破碎化',
      '水坝、引水、排水及异常水位改变',
      '巢区火灾和互花米草入侵',
      '农药、毒饵、重金属及食物污染',
      '电力线、道路和其他基础设施碰撞',
      '朝鲜半岛关键农田与非军事区土地用途变化',
      '北海道补饲点集中引起的疾病、碰撞和人类依赖风险',
    ],
    conservationActions: [
      '保护并恢复跨境繁殖、停歇和越冬湿地链',
      '维持适合筑巢的浅水水位并加强繁殖地防火',
      '控制互花米草并恢复潮滩和盐沼',
      '保护非军事区、民统线和鹤友好稻田并补偿农户',
      '降低毒物暴露并标记或改造高风险电力线',
      '同步监测大陆迁徙与日本留居种群并统一计数口径',
      '分散北海道冬季补饲和夜栖压力，扩大替代栖息地',
    ],
    metrics: {
      adultLengthCm: [101.9, 147],
      adultMassKg: [4.8, 10.55],
      estimatedMatureIndividuals: [2000, 2650],
    },
    featuredStats: [
      {
        key: 'winter-total',
        label: '2024/25 冬季全龄计数',
        value: '5,887',
        unit: '只',
        note: 'IRCN 同步普查，不是成熟个体数',
      },
      {
        key: 'continental-population',
        label: '大陆迁徙种群',
        value: '3,737',
        unit: '只',
        note: '2024/25 冬季：中国 1,033 只，韩国 2,704 只',
      },
      {
        key: 'resident-population',
        label: '日本留居种群',
        value: '2,150',
        unit: '只',
        note: '2024/25 冬季计数或估计',
      },
      {
        key: 'standing-height',
        label: '站立高度',
        value: '约 158',
        unit: '厘米',
        note: 'Smithsonian 物种概览代表值，不是体长',
      },
    ],
    media: {
      image: './images/species/red-crowned-crane/01-red-crown-marsh-portrait.webp',
      alt: '一只头顶具有裸露红色皮肤、黑色脸和前颈、白色后颈与身体的成鸟丹顶鹤，站在春季浅水芦苇沼泽中',
      focalPoint: { x: 0.7, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/red-crowned-crane/02-hokkaido-snow-courtship-duet.webp',
          alt: '两只成鸟丹顶鹤在北海道雪地湿草甸中保持自然距离合鸣和舞蹈，其中一只展翼，另一只昂首鸣叫',
          title: '雪地中的配对合鸣与舞蹈',
          caption: '合鸣和舞蹈参与配对协调及资源防卫，单幅展示不能判断配对持续时间或繁殖结果。',
          focalPoint: { x: 0.59, y: 0.51 },
        },
        {
          image: './images/species/red-crowned-crane/03-shallow-water-nest-and-chicks.webp',
          alt: '一只成鸟丹顶鹤守在浅水芦苇间的低矮植被巢丘旁，两只头颈肉桂褐且没有红冠的幼鸟留在近处',
          title: '需要稳定浅水的巢与幼鸟',
          caption: '巢周浅水能隔开部分干扰，但水位骤降会暴露巢，骤升则可能淹没巢与幼鸟。',
          focalPoint: { x: 0.6, y: 0.53 },
        },
        {
          image: './images/species/red-crowned-crane/04-continental-wetland-migration.webp',
          alt: '两只成鸟丹顶鹤伸直长颈、双腿向后，在东亚大陆湿地上空迁飞，白色初级飞羽和黑色次级飞羽清楚可见',
          title: '大陆迁徙种群的长途飞行',
          caption: '画面代表大陆种群迁徙形态，不对应具体遥测个体，也不能代表主要留居北海道的种群。',
          focalPoint: { x: 0.57, y: 0.42 },
        },
        {
          image: './images/species/red-crowned-crane/05-coastal-winter-foraging.webp',
          alt: '两只成鸟丹顶鹤在东亚沿海冬季潮滩浅水中步行，低头寻找小鱼、软体动物及其他小型猎物',
          title: '沿海越冬地的成鸟觅食',
          caption: '潮滩与河口为大陆种群提供动物性食物，单个场景不能概括全年或全分布区食谱。',
          focalPoint: { x: 0.57, y: 0.56 },
        },
        {
          image: './images/species/red-crowned-crane/06-distance-conservation-monitoring.webp',
          alt: '一只丹顶鹤在宽阔浅水湿地中活动，两名研究人员在远处堤岸使用单筒望远镜并记录鸟类与水位',
          title: '保持距离的湿地监测',
          caption: '重复调查能比较数量与生境变化；画面不冒充一次真实调查，也不由一次目击推算种群规模。',
          focalPoint: { x: 0.61, y: 0.49 },
        },
      ],
    },
    sources: [
      ...RED_CROWNED_CRANE_SOURCES,
      {
        title: 'GBIF: Grus japonensis (Statius Muller, 1776) nomenclatural record',
        url: 'https://www.gbif.org/species/2474944',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: RED_CROWNED_CRANE_CONTENT_DATE,
    updatedAt: RED_CROWNED_CRANE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
