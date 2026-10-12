import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SHOEBILL_SOURCE_DATE = '2026-09-04' as const;

const SHOEBILL_CONTENT_DATE = '2026-09-04' as const;

const SHOEBILL_SOURCES = [
  {
    title: 'AviList v2025b: Balaeniceps rex',
    url: 'https://doi.org/10.2173/avilist.v2025b',
    kind: 'taxonomy',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'ITIS: Balaeniceps rex Gould, 1850',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=174891',
    kind: 'taxonomy',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2018: Balaeniceps rex',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22697583A133840708.en',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Shoebill species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/shoebill-balaeniceps-rex',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Shoebill assessment history',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/3808/history',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Shoebill country distribution',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/3808/countries',
    kind: 'distribution',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Shoebill habitat classification',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/3808/habitats',
    kind: 'ecology',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Shoebill range, ecology, threats and actions',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/3808/text',
    kind: 'ecology',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife International: Shoebill',
    url: 'https://www.birdlife.org/birds/shoebill/',
    kind: 'general',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'AEWA: International Single Species Action Plan for the Conservation of the Shoebill',
    url: 'https://www.unep-aewa.org/publication/international-single-species-action-plan-conservation-shoebill-ts-no-51',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'AEWA Technical Series No. 51: Shoebill International Single Species Action Plan',
    url: 'https://www.unep-aewa.org/sites/default/files/publication/ts51_ssap_shoebill_0.pdf',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'AEWA MOP9 Resolution 9.3: Species Action and Management Plans',
    url: 'https://www.unep-aewa.org/sites/default/files/document/aewa_mop9_res_3_species_action_management_plans.pdf',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species: Balaeniceps rex',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'San Diego Zoo Wildlife Alliance: Shoebill',
    url: 'https://animals.sandiegozoo.org/animals/shoebill',
    kind: 'general',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'Guillet 1979: Aspects of the foraging behaviour of the Shoebill',
    url: 'https://doi.org/10.1080/00306525.1979.9634120',
    kind: 'ecology',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'Mullers & Amar 2015: Shoebill foraging behaviour in Bangweulu Wetlands',
    url: 'https://doi.org/10.2989/00306525.2014.977364',
    kind: 'ecology',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'Mullers & Amar 2015: Parental nesting behavior, chick growth and breeding success',
    url: 'https://doi.org/10.1675/063.038.0102',
    kind: 'ecology',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
  {
    title: 'Acácio et al. 2021: Movement ecology of Shoebills in the Bangweulu Wetlands',
    url: 'https://doi.org/10.1038/s41598-021-95093-5',
    kind: 'ecology',
    accessedAt: SHOEBILL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-balaeniceps-rex',
    slug: 'shoebill',
    names: {
      zh: '鲸头鹳',
      en: 'Shoebill',
      aliases: ['Whale-headed Stork', 'Shoebill Stork'],
    },
    scientificName: 'Balaeniceps rex',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Pelecaniformes', '鹈形目'),
      taxon('Balaenicipitidae', '鲸头鹳科'),
      taxon('Balaeniceps', '鲸头鹳属'),
    ),
    conservation: {
      ...conservation('VU', 'decreasing', 2018, 'C2a(ii)'),
      assessor: 'BirdLife International（IUCN Red List，2018年评估）',
    },
    distribution: {
      realms: ['freshwater'],
      continents: ['非洲'],
      regions: [
        '苏德沼泽与白尼罗河上游湿地',
        '中非共和国湿地记录区',
        '乌干达与卢旺达湖河沼泽',
        '刚果民主共和国东部及南部湿地',
        '坦桑尼亚西部马拉加拉西—莫约沃西湿地',
        '赞比亚班韦乌卢湿地',
      ],
      countries: [
        '中非共和国',
        '刚果民主共和国',
        '卢旺达',
        '南苏丹',
        '苏丹',
        '坦桑尼亚',
        '乌干达',
        '赞比亚',
      ],
      range:
        'BirdLife当前把中非共和国、刚果民主共和国、卢旺达、南苏丹、苏丹、坦桑尼亚、乌干达和赞比亚列为原生、现存、留居范围。埃塞俄比亚另列为原生、现存、非繁殖出现，出现状态为偶见；2013年AEWA行动计划中的居民、非繁殖访客和可能偶见国分类与当前清单不同，不能混成一张现状表。国家级记录不表示全国连续分布。',
      center: { lat: 2, lng: 29.5 },
    },
    habitats: [
      {
        name: '永久性淡水沼泽与浅水池',
        realm: 'freshwater',
        description:
          '主要生境；挺水植物、漂浮植被、浅水和开阔水面组成可站立、筑巢与伏击鱼类的湿地镶嵌。',
        isPrimary: true,
      },
      {
        name: '季节性洪泛沼泽与草本泛滥平原',
        realm: 'freshwater',
        description:
          '水位涨落持续改变浅水觅食区、植被平台和巢区可达性，也会驱动局地季节移动。',
        isPrimary: true,
      },
      {
        name: '永久河流、溪道与湿地内通道',
        realm: 'freshwater',
        description:
          '利用大型哺乳动物或水流打开的浅水通道和植被边缘；纯而密不透行的高大纸莎草丛通常不适合觅食。',
        isPrimary: true,
      },
      {
        name: '季节淹水农地与耕地湿地',
        realm: 'freshwater',
        description:
          'BirdLife列为适宜的受改造生境；出现记录不表示其能替代具有自然水文和植被平台的沼泽。',
      },
    ],
    measurements: {
      height: {
        min: 110,
        max: 140,
        unit: 'cm',
        note: '圣迭戈动物园公开的站立高度范围；AEWA行动计划概述为约140厘米高。',
      },
      wingspan: {
        typical: 2.4,
        unit: 'm',
        note: '圣迭戈动物园给出的约8英尺换算值，不是样本范围或野外极值。',
      },
    },
    diet: {
      types: ['piscivore', 'carnivore'],
      foods: [
        '非洲肺鱼',
        '多鳍鱼',
        '胡子鲶与其他鲶鱼',
        '罗非鱼类',
        '两栖动物',
        '水蛇与其他小型爬行动物',
        '小型水生或湿地脊椎动物',
      ],
      description:
        '鱼类构成食物核心，非洲肺鱼、多鳍鱼、鲶鱼和罗非鱼类的重要性随地点与水情改变，也会捕食两栖类、水蛇及其他小型脊椎动物。低溶氧浅水中的部分耐低氧鱼类会到水面换气，为伏击提供机会；这不表示鲸头鹳只吃肺鱼。',
    },
    activity: [
      '多在浅水和漂浮植被平台上单独伏击猎物',
      '长时间静立或缓慢潜行后以前倾压入水面的动作出击',
      '展开双翼并用宽大长趾支撑前倾后的身体',
      '成对个体常在领地两端分别觅食，鱼类随退水集中时偶见松散聚集',
      '大体留居，但会随洪水、浅水面和繁殖条件作季节性局地移动',
      '在水位下降期利用湿地通道、植被边缘和开阔浅水区',
    ],
    tags: [
      '鸟纲',
      '鹈形目',
      '鲸头鹳科',
      '非洲湿地',
      '淡水沼泽',
      '伏击捕食',
      '食鱼鸟类',
      '非洲肺鱼',
      '巢台育幼',
      '湿地监测',
      'IUCN易危',
      'CITES附录II',
    ],
    summary:
      '鲸头鹳栖居非洲热带淡水沼泽，常在浅水中静立等候鱼类，再用鞋形巨喙前倾出击。湿地改造、繁殖干扰和捕猎使小而分散的种群继续下降。',
    description:
      '鲸头鹳站立高约 110 至 140 厘米，有灰色羽毛、蓬松小冠羽和宽厚带钩的巨喙。长趾帮助它站在湿软或漂浮植被上，张开的双翼则在捕食时帮助平衡。它主要吃鱼，包括肺鱼、多鳍鱼、鲶鱼和罗非鱼，也吃两栖类与水蛇。巢搭在接近水面的植被平台或小岛上，亲鸟会运水给雏鸟降温。2018 年评估列为易危，种群估计仍沿用 2003 年资料。',
    storySections: [
      {
        key: 'wetland-mosaic-range',
        label: '分布',
        title: '种群散布在一系列淡水湿地',
        body: '鲸头鹳依赖分散的浅水湿地。种群散布在苏德沼泽、乌干达和卢旺达的湖河沼泽、刚果民主共和国与坦桑尼亚的湿地，以及赞比亚班韦乌卢等地点。BirdLife当前列出八个留居范围国，并把埃塞俄比亚记为偶见的非繁殖出现；旧行动计划使用过不同分类，比较记录时需要留意资料年代。',
      },
      {
        key: 'bill-and-toes',
        label: '形态',
        title: '宽喙负责夹取，长趾负责托住身体',
        body: '鞋形喙宽厚，喙端带钩；长腿下方的长趾彼此分开，把体重摊在漂浮或湿软植被上。灰色羽衣、小冠羽、浅色眼睛和宽喙组成成鸟识别组合。',
      },
      {
        key: 'collapse-strike',
        label: '捕食',
        title: '静立之后，身体随巨喙一起前倾',
        body: '觅食时，它可长时间站住，缓慢接近后突然让身体越过支点，把头和喙压向浅水。研究者把这一过程描述为collapse；鸟会张翼并借助植被平台重新平衡。动作常把水草一起带入口中，随后再处理猎物。',
      },
      {
        key: 'air-breathing-fish',
        label: '食性',
        title: '低氧浅水把鱼推向伏击范围',
        body: '非洲肺鱼、多鳍鱼和胡子鲶等耐低氧鱼类会到水面换气，鲸头鹳守在开阔浅水和植被通道旁等待机会。不同湿地的鱼群与水位不同，罗非鱼、两栖类、水蛇和其他小型动物也会进入食谱。',
      },
      {
        key: 'water-for-the-chick',
        label: '繁殖',
        title: '炎热时把水带回漂浮巢台',
        body: '鲸头鹳在湿地植被或小岛上搭建接近水面的巢台。班韦乌卢研究记录亲鸟以喙运水，为雏鸟降温，也会持续添加巢材；一窝可有一至两枚卵，偶见三枚，但通常只有一只雏鸟存活。样本来自单一湿地的少量巢，不能当作全分布区固定繁殖率。',
      },
      {
        key: 'guards-and-water-levels',
        label: '保护',
        title: '守巢之外，还要维持整片湿地的水文',
        body: '繁殖地会同时承受踩踏、火、捕鱼活动、靠近巢位、捕猎与雏鸟活体贸易。班韦乌卢一项局地研究在加强守护后的2012至2013年记录每巢0.89只雏鸟，样本仅11巢，不能证明守巢能单独逆转全球下降。保护还需要管理火与放牧、限制湿地排水和水文改造，并用可比调查更新旧种群估算。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: 'Gould 在 1850 年正式命名',
        body: 'Gould 在 1850 年正式命名鲸头鹳，Balaeniceps rex 这一名称沿用至今。中文“鲸头”和英文 shoebill 都对应宽厚巨喙的醒目轮廓。名字中虽常带“鹳”，现行分类将它放在鹈形目，并单列鲸头鹳科；了解其亲缘关系需要依靠分类研究。',
      },
    ],
    keyFacts: [
      'AviList v2025b接受Balaeniceps rex；ITIS记录命名信息为Gould, 1850。现行分类归入鹈形目、鲸头鹳科和鲸头鹳属。',
      '鲸头鹳是鲸头鹳科现生的唯一物种；Whale-headed Stork和Shoebill Stork是英文别名。',
      'IUCN 2018年评估为VU、趋势下降，判据C2a(ii)。',
      '评估采用3,300至5,300只成熟个体，数据质量为medium、推导方式为estimated。',
      '3,300至5,300的区间源自2003年种群估算，并非2018年全球同步普查或当前精确总数。',
      '评估使用12.2年的世代长度；世代长度不是个体寿命或成年后的预期余生。',
      '本种列入CITES附录II；附录等级仍需结合许可制度和各范围国法律执行。',
      'AEWA在2015年采纳国际单物种行动计划，2025年将计划有效期延长至2037年。',
      'BirdLife当前列出的原生、现存、留居国为中非共和国、刚果民主共和国、卢旺达、南苏丹、苏丹、坦桑尼亚、乌干达和赞比亚。',
      '埃塞俄比亚在BirdLife当前清单中属于原生、现存、非繁殖出现，出现状态为偶见。',
      '2013年AEWA行动计划与当前BirdLife清单对部分国家采用不同状态，旧分类不能覆盖当前记录。',
      '永久与季节性淡水沼泽、永久河流和湿地内浅水通道构成主要生境。',
      '它利用纸莎草、芦苇、香蒲和草本植物组成的镶嵌，却避开难以穿行和觅食的纯密高大纸莎草丛。',
      '圣迭戈动物园公开的站立高度为110至140厘米，翼展约2.4米。',
      '宽厚鞋形喙的长度超过19厘米，末端有锐钩；宽展长趾彼此分开而非蹼足。',
      '鱼类是食物核心，非洲肺鱼、多鳍鱼、鲶鱼和罗非鱼类的重要性随地点改变。',
      '低溶氧浅水中的耐低氧鱼会到水面换气，增加伏击机会，但鲸头鹳并非只吃肺鱼。',
      '觅食过程包括静立、缓慢潜行和身体前倾压入水面的collapse动作。',
      '张开的双翼和可站立的植被平台帮助它在前倾出击后恢复平衡。',
      '成鸟常单独觅食，配对个体可在领地两端分开活动；猎物集中时才会形成松散聚集。',
      '它属于大体留居的鸟类，仍会跟随季节水位、浅水面和繁殖条件作局地移动。',
      '班韦乌卢研究以GPS追踪6只未成鸟和1只成鸟；其中4只未成鸟在研究期内进入成鸟阶段，汇总追踪日中81%的日位移不足3千米。',
      '该追踪研究显示成鸟和未成鸟对地表水变化的移动反应不同，单一湿地样本不能代表整个分布区。',
      '巢建在接近水面的植被平台或小岛上，一窝通常一至两枚卵，偶见三枚，约35天孵化。',
      '亲鸟会以喙运水冷却雏鸟并添加巢材；班韦乌卢研究前40天持续记录到亲鸟护巢。',
      '通常只有一只雏鸟存活；这不表示每巢必然只产一枚卵或第二只雏鸟必定死亡。',
      '班韦乌卢研究在2011年记录10巢20%的繁殖成功率，2012至2013年加强守护后11巢平均每巢0.89只雏鸟；两组都是局地小样本。',
    ],
    threats: [
      '排水、开垦、农业扩张和牧场改造缩减永久与季节性淡水沼泽。',
      '水坝、取水、河道工程与其他水文改变会移动浅水觅食区并改变巢台周围水位，项目影响因流域而异。',
      '旱季燃烧、失控湿地火和干旱会破坏巢区植被；当前资料没有给出全范围统一受损比例。',
      '牛群踩踏、放牧者、渔民和船只靠近巢位会增加卵、雏鸟和巢台受损风险。',
      '为肉、传统用途或冲突而捕杀成鸟会直接减少本已小而分散的繁殖种群。',
      '捕捉雏鸟和活体贸易直接移除下一代；CITES附录II不能取代巢区巡护和贸易执法。',
      '石油开发、污染及其他基础设施风险集中在部分湿地，全球影响规模仍缺少可比量化。',
      '全球成熟个体区间沿用2003年估算，调查年代与方法不一会掩盖局地下降。',
    ],
    conservationActions: [
      '执行并更新AEWA国际单物种行动计划，让范围国共享调查方法、繁殖地信息和威胁记录。',
      '保护苏德、班韦乌卢及其他关键湿地的自然水文、浅水觅食区、植被平台和季节性洪泛过程。',
      '在繁殖季设置有依据的巢位缓冲区，由受训社区监测员记录靠近活动、巢况和出飞结果。',
      '与牧民、渔民和湿地管理者安排放牧、通行和用火，减少踩踏、干扰和失控火。',
      '禁止非法捕猎和雏鸟捕捉，执行CITES附录II许可、国内法和跨境活体贸易检查。',
      '在批准水坝、排水、取水、油气和农业项目之前评估累积水文影响，并持续核查缓解措施。',
      '用重复、可比较的航测、地面调查和巢监测更新成熟个体数、占域与趋势，不把旧估算当实时计数。',
      '让保护项目向当地社区提供可核查收益，并用巢存活、湿地状态和非法活动变化检验成效。',
    ],
    metrics: {
      estimatedMatureIndividuals: [3300, 5300],
    },
    featuredStats: [
      {
        key: 'mature-population',
        label: '全球成熟个体',
        value: '3,300–5,300',
        unit: '只',
        note: '2003年估算沿用于2018年评估，medium quality、estimated；不是当前同步普查。',
      },
      {
        key: 'standing-height',
        label: '站立高度',
        value: '110–140',
        unit: '厘米',
        note: '圣迭戈动物园公开的成鸟站立高度范围。',
      },
      {
        key: 'generation-length',
        label: '评估世代长度',
        value: '12.2',
        unit: '年',
        note: 'IUCN评估参数，不是野外寿命。',
      },
      {
        key: 'short-movement-days',
        label: '日位移不足3公里',
        value: '81',
        unit: '%追踪日',
        note: '班韦乌卢2011至2018年7只独立个体的GPS资料，其中4只跨年龄阶段；不代表全分布区。',
      },
    ],
    media: {
      image:
        './images/species/shoebill/01-papyrus-wetland-adult-cover.webp',
      alt: '宽阔淡水沼泽中，恰好一只完整成年外观鲸头鹳静立在画面右侧浅水植被平台上，鞋形巨喙、冠羽、双腿、分开的长趾和尾部均在画内，左侧保留安静水面与纸莎草背景',
      focalPoint: { x: 0.77, y: 0.51 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/shoebill/02-full-body-diagnostic-profile.webp',
          alt: '淡水沼泽植被平台上，恰好一只完整成年外观鲸头鹳以三分之四侧面站立，宽厚鞋形钩喙、小型蓬松冠羽、灰色身体、长腿与彼此分开的长趾全部可见',
          title: '鞋形巨喙与分开的长趾',
          caption:
            'AI生成科学情景重建；侧面轮廓用于展示成鸟识别组合，不能反测喙长、体高、翼展、体重，也不能确认性别、年龄、地点或个体身份。',
          focalPoint: { x: 0.53, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/shoebill/03-collapse-strike.webp',
          alt: '开阔浅水中，恰好一只完整鲸头鹳身体前倾并把巨喙压向水面，双翼向两侧展开保持平衡，翼尖、支撑腿、足部与可见长趾均未裁切，画面没有可见猎物',
          title: '前倾压入浅水的一击',
          caption:
            'AI生成科学情景重建；前倾、入水喙和张翼表现collapse出击姿态。静帧不能确认是否命中、出击速度、水深、猎物种类或后续处理结果。',
          focalPoint: { x: 0.52, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/shoebill/04-fish-prey.webp',
          alt: '浅水植被边缘，恰好一只完整鲸头鹳用宽厚巨喙夹住一尾中等大小的细长鱼，鸟的折翼、双腿、长趾和尾部均在画内，画面没有血迹',
          title: '巨喙中的一尾鱼',
          caption:
            'AI生成科学情景重建；画面只表现一次鱼类猎物处理。生成外观不能鉴定鱼种，也不能证明捕获地点、猎物比例、吞咽成功或鲸头鹳只以这一类鱼为食。',
          focalPoint: { x: 0.53, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/shoebill/05-nest-cooling.webp',
          alt: '湿地漂浮植被巢台旁，恰好一只完整成年鲸头鹳从巨喙中向一只灰色小雏鸟倾倒少量清水，成鸟、雏鸟、巢缘、双腿和长趾均可见',
          title: '把喙中的水带回巢台',
          caption:
            'AI生成科学情景重建；班韦乌卢研究记录亲鸟运水冷却雏鸟。画面不能确认亲缘、精确日龄、温度、水量、生理反应或这次动作的结果。',
          focalPoint: { x: 0.55, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/shoebill/06-distance-wetland-monitoring.webp',
          alt: '开阔淡水湿地边缘，恰好两名成年观察者在远处干地使用双筒望远镜和记录本，水道另一侧恰好一只完整鲸头鹳站在植被平台上，人与鸟没有接触',
          title: '隔着水道记录湿地个体',
          caption:
            'AI生成科学情景重建；两名监测员与一只远处鲸头鹳只代表保持距离的湿地监测模式，不指向具体项目、地点、人员、巢位、调查方法或保护成效。',
          focalPoint: { x: 0.57, y: 0.54 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...SHOEBILL_SOURCES,
      {
        title: 'GBIF: Balaeniceps rex Gould, 1850 nomenclatural record',
        url: 'https://www.gbif.org/species/2480347',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: SHOEBILL_CONTENT_DATE,
    updatedAt: SHOEBILL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
