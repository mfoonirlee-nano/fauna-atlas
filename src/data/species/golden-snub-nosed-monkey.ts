import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE = '2026-08-25' as const;

const GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE = '2026-08-25' as const;

const GOLDEN_SNUB_NOSED_MONKEY_SOURCES = [
  {
    title: 'IUCN Red List: Rhinopithecus roxellana, current amended assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-1.RLTS.T19596A196491153.en',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Rhinopithecus roxellana',
    url: 'https://www.mammaldiversity.org/taxon/1000685/',
    kind: 'taxonomy',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'ITIS: Rhinopithecus roxellana, TSN 944261',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=944261',
    kind: 'taxonomy',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: '中国动物学会灵长类学分会：川金丝猴',
    url: 'https://cps.nwu.edu.cn/info/1118/1670.htm',
    kind: 'general',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局：“鼻孔上仰”的金丝猴家族',
    url: 'https://www.forestry.gov.cn/c/www/dw/72071.jhtml',
    kind: 'distribution',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部：国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'CITES: Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Yu et al. 2022: Climate change challenge, extinction risk, and successful conservation experiences for the golden snub-nosed monkey',
    url: 'https://doi.org/10.24272/j.issn.2095-8137.2022.198',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Dai et al. 2024: Historical changes in Sichuan golden snub-nosed monkey distribution',
    url: 'https://doi.org/10.1002/ece3.11270',
    kind: 'distribution',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Guo, Li & Watanabe 2007: Diet and activity budget in the Qinling Mountains',
    url: 'https://doi.org/10.1007/s10329-007-0048-z',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2013: Foods eaten in Shennongjia in relation to nutritional chemistry',
    url: 'https://doi.org/10.1002/ajp.22149',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Zhao et al. 2020: Winter fallback foods in the Qinling Mountains',
    url: 'https://doi.org/10.1016/j.gecco.2020.e00963',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Fang et al. 2018: Spring ecology and social organization in Laohegou',
    url: 'https://doi.org/10.1038/s41598-018-34311-z',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Qi et al. 2014: Social organization of a primate multilevel society',
    url: 'https://doi.org/10.1038/ncomms6296',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Xiang et al. 2019: Allomaternal nursing in wild golden snub-nosed monkeys',
    url: 'https://doi.org/10.1126/sciadv.aav0499',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Youlatos et al. 2021: Sex differences in positional behavior',
    url: 'https://doi.org/10.1007/s10329-021-00900-2',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Zhu et al. 2014: Age and sex effects on positional behavior',
    url: 'https://doi.org/10.1002/ajp.22314',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Qi, Li & Ji 2008: Reproductive parameters in the Qinling Mountains',
    url: 'https://doi.org/10.1002/ajp.20480',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2011: Winter sleeping cluster patterns and retiring behavior',
    url: 'https://doi.org/10.1007/s10329-011-0241-y',
    kind: 'ecology',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Chang et al. 2012: Noninvasive genetic census in Shennongjia',
    url: 'https://doi.org/10.1007/s11434-011-4872-6',
    kind: 'conservation',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
  {
    title: 'Beijing Wildlife Park: Golden Snub-nosed Monkey',
    url: 'https://www.bjwildlifepark.com/en/dwdaInfo_d5af4aaf75c543c594dec8cfc332e195.html',
    kind: 'general',
    accessedAt: GOLDEN_SNUB_NOSED_MONKEY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-rhinopithecus-roxellana',
    slug: 'golden-snub-nosed-monkey',
    names: {
      zh: '川金丝猴',
      en: 'Golden Snub-nosed Monkey',
      aliases: ['四川金丝猴', 'Sichuan Snub-nosed Monkey'],
    },
    scientificName: 'Rhinopithecus roxellana',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Primates', '灵长目'),
      taxon('Cercopithecidae', '猴科'),
      taxon('Rhinopithecus', '仰鼻猴属'),
    ),
    conservation: conservation('EN', 'decreasing', 2015, 'A2cd+4cd'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '四川和甘肃的岷山、邛崃等山系',
        '陕西秦岭',
        '湖北神农架',
      ],
      countries: ['中国'],
      endemicTo: ['中国'],
      range:
        '中国特有，现存于四川、甘肃南部、陕西和湖北的山地森林，形成四川和甘肃、秦岭、神农架三个彼此隔离的地理种群；通常见于约 1,300 至 3,500 米，全国活动记录约 1,000 至 4,100 米。',
      center: { lat: 31.5, lng: 106.5 },
    },
    habitats: [
      {
        name: '山地常绿与落叶阔叶混交林',
        realm: 'terrestrial',
        description:
          '利用有明显季节变化的山地阔叶林，春夏叶、芽、花和果实增加，冬季可用资源减少。',
        isPrimary: true,
      },
      {
        name: '山地针阔混交林',
        realm: 'terrestrial',
        description:
          '连续林冠提供树上通行、夜宿和躲避风险的结构，枝干上的树生地衣可成为部分地点的重要冬季食物。',
        isPrimary: true,
      },
      {
        name: '亚高山暗针叶林',
        realm: 'terrestrial',
        description:
          '在寒冷高海拔季节使用针叶林带，积雪、低温和食物短缺改变移动、取食与睡眠聚团。',
      },
    ],
    measurements: {
      length: {
        min: 47,
        max: 83,
        unit: 'cm',
        note: '成年头体长；雌性 47–74 厘米、雄性 56–83 厘米，尾另长 51–104 厘米',
      },
      weight: {
        min: 6,
        max: 19,
        unit: 'kg',
        note: '成年雌性 6–10 千克、雄性 15–19 千克，性别二型明显',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['嫩叶与成熟叶', '树生地衣', '果实与种子', '芽与花', '树皮与嫩枝'],
      description:
        '以植物和树生地衣为主，菜单随地点和季节强烈改变。暖季更多利用叶、芽、花、果实和种子；部分种群冬季增加地衣与树皮，但最北端种群在缺少地衣时会更多取食芽和树皮。',
    },
    activity: [
      '主要在白昼取食、移动、休息与社交',
      '在树上四足行走、攀爬、跳跃，也会下到地面移动',
      '随季节和食物在山地森林中改变活动范围与海拔',
      '以一雄多雌单元、繁殖带和全雄带组成多层社会',
      '秦岭一处研究群冬季可在树上形成更大、更紧密的睡眠聚团',
    ],
    tags: ['中国特有', '高山灵长类', '多层社会', '季节性食谱', '国家一级保护动物', 'CITES 附录 I'],
    summary:
      '川金丝猴只生活在中国中西部山地森林，鼻孔上仰、眼周蓝灰，成年雄性长有金橙色长毛。多个一雄多雌的小单元会组成更大的群体。',
    description:
      '川金丝猴的鼻梁极短，鼻孔朝前，浅蓝至紫灰色的眼周裸皮与宽阔浅色口鼻构成醒目的面部。成年雄性比雌性大，深色冠背外披金橙长毛；长尾帮助它在粗枝、林冠和地面之间保持平衡，却不能像蛛猴尾巴那样卷缠承重。猴群在四川、甘肃、秦岭和神农架三片隔离山地中生活，季节性取食叶、果、地衣、树皮和芽。全国调查记录到种群数量恢复，并给出潜在适生地估算；正式 IUCN 评估仍为濒危，区域性生境收缩、道路切割和气候变化仍会削弱彼此隔离的种群。',
    storySections: [
      {
        key: 'face-and-coat',
        label: '外形与性别',
        title: '仰鼻、蓝灰眼周与雄性的长毛',
        body: '川金丝猴鼻梁极短，鼻孔朝前，蓝灰色眼周裸皮与浅色口鼻很醒目。成年雄性的头体长和体重明显超过雌性，肩背长出金橙与深褐相间的长毛。雌性颜色较浅淡，幼体毛色也与成体不同。',
      },
      {
        key: 'cold-forest',
        label: '高山森林',
        title: '在山地森林中移动和夜宿',
        body: '川金丝猴利用落叶阔叶林、针阔混交林和暗针叶林。粗枝承托体型较大的成年雄性，连续林冠方便猴群移动和寻找夜宿点。全国海拔记录约 1,000 至 4,100 米，各研究区及季节使用的海拔带通常更窄。',
      },
      {
        key: 'seasonal-menu',
        label: '季节性食谱',
        title: '食物随地点和季节变化',
        body: '秦岭两年资料显示，果实或种子、地衣与叶片共同构成全年食谱，冬季资源短缺时地衣、树皮和芽的重要性上升。四川老河沟春季记录则以叶片为主。不同地点、季节的食物比例变化很大。',
      },
      {
        key: 'multilevel-society',
        label: '多层社会',
        title: '小单元组成多层社会群',
        body: '一只成年雄性、数只雌性和幼体组成基本繁殖单元，多个单元形成繁殖带。全雄单元组成雄性带，两类带和独居雄性又组成更大的群体，并随季节分合。',
      },
      {
        key: 'birth-and-care',
        label: '出生与照护',
        title: '其他雌猴也会给幼体哺乳',
        body: '秦岭六年记录显示出生高峰在三至五月，雌性平均产仔间隔约二十二个月。另一项野外研究发现，超过八成幼体曾接受其他雌性哺乳，主要发生在出生后的前三个月，并常见于有亲缘或互惠关系的雌性之间。',
      },
      {
        key: 'recovery-and-connectivity',
        label: '恢复与连通',
        title: '数量回升仍需保护森林连通',
        body: '2019 年全国调查估计约 22,710 至 26,130 只，约九成五位于自然保护区，结果高于 1998 年调查。两次调查并非同步逐只计数，增长也没有消除隔离：道路、矿业、放牧和旅游继续切割低海拔林地，气候模型还预示适生地会收缩。长期重复调查、非侵入遗传取样和廊道修复才能判断恢复能否延续。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1870 年记录于四川宝兴',
        body: '1870 年，Milne-Edwards 以 Semnopithecus Roxellana 正式描述川金丝猴，模式产地记录为四川的 Moupin，即今天的宝兴。后来它被归入仰鼻猴属 Rhinopithecus。如今的调查还发现，多个小家庭单元可以组成数百只猴的群体，且有雌猴帮助其他母亲哺乳幼体。',
      },
    ],
    keyFacts: [
      '川金丝猴是 Rhinopithecus roxellana，只在中国分布；现存种群集中于四川、甘肃、陕西秦岭和湖北神农架三片隔离区域。',
      'IUCN 正式记录为濒危 A2cd+4cd；评估日期为 2015 年，现用条目在 2021 年修订发布。',
      '2019 年全国调查识别 188 至 220 个多层社会群，估计共有 22,710 至 26,130 只个体。',
      '全国调查估计约 95% 的个体位于 47 个自然保护区，其中 28 个是国家级自然保护区。',
      '全国记录约跨海拔 1,000 至 4,100 米，不同地区和季节使用的海拔带更窄。',
      '秦岭全年研究记录果实或种子占 29.4%、地衣占 29.0%、叶占 24.0%，地点与季节会显著改写比例。',
      '多个一雄多雌繁殖单元会组成繁殖带，并与全雄带共同形成可季节分合的多层社会。',
      '中国将川金丝猴列为国家一级重点保护野生动物，CITES 将它列入附录 I。',
    ],
    threats: [
      '道路、采矿、牧场扩张和其他开发造成山地森林退化、破碎化与迁移通道阻断',
      '放牧、采药和旅游干扰取食、移动与夜宿地，并可能减少带地衣的老树资源',
      '历史猎捕、套索和铁夹压力已下降，但非法捕捉与贸易仍需持续防范',
      '三个地理种群长期隔离，神农架等小种群面临遗传漂变和低遗传多样性风险',
      '气候变化可能推动适生森林向高海拔移动并造成未来范围收缩',
    ],
    conservationActions: [
      '保护和恢复连续山地森林，保留关键取食树、夜宿树与安全的带地衣老树或倒木',
      '维护保护地和国家公园片区之间的森林廊道，为扩散、基因交流和海拔移动保留通路',
      '持续开展反盗猎、清套和非法贸易执法，并执行 CITES 附录 I 许可管控',
      '分别对三个地理种群开展标准化数量、繁殖、栖息地和非侵入式遗传监测',
      '对道路、采矿、放牧、采药、旅游和补食实行分区限扰管理，隐藏敏感监测位置',
    ],
    metrics: {
      adultLengthCm: [47, 83],
      adultMassKg: [6, 19],
      elevationM: [1000, 4100],
    },
    featuredStats: [
      {
        key: 'national-population-estimate',
        label: '全国个体估计',
        value: '22,710–26,130',
        unit: '只',
        note: '2019 年全国调查估计，涵盖各年龄，不是成熟个体数或同步逐只普查',
      },
      {
        key: 'multilevel-groups',
        label: '多层社会群估计',
        value: '188–220',
        unit: '群',
        note: '2019 年全国调查；每群规模及组成会随地点和季节变化',
      },
      {
        key: 'protected-area-coverage',
        label: '保护区内个体',
        value: '约 95',
        unit: '%',
        note: '估计分布在 47 个自然保护区，保护区覆盖不等于威胁已经消失',
      },
      {
        key: 'elevation-range',
        label: '全国海拔记录',
        value: '1,000–4,100',
        unit: '米',
        note: '国家林草局给出的全分布记录；单个地区和季节通常使用更窄范围',
      },
    ],
    media: {
      image: './images/species/golden-snub-nosed-monkey/01-snowy-forest-portrait.webp',
      alt: '一只完整成年雄性川金丝猴站在雪后山地森林右侧，深色冠背、金橙披毛、浅蓝眼周和完整长尾清楚可见',
      focalPoint: { x: 0.72, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/golden-snub-nosed-monkey/02-adult-male-morphology.webp',
          alt: '一只完整成年雄性川金丝猴侧身走过粗树枝，仰鼻、浅蓝眼周、深色冠背、金橙长毛和非抓握长尾均在画面内',
          title: '雄性肩背长有金橙色毛',
          caption:
            '成年雄性肩背披毛最醒目，头顶、上背、外肢和尾部仍较深；外形能提示性别与年龄，不能据此判定亚种或产地。',
          focalPoint: { x: 0.49, y: 0.51 },
        },
        {
          image: './images/species/golden-snub-nosed-monkey/03-montane-forest-habitat.webp',
          alt: '一只小比例川金丝猴坐在季节积雪的连续山地针阔混交林中右侧树冠，森林占据绝大部分画面',
          title: '山地混交林中的活动环境',
          caption:
            '落叶阔叶林、针阔混交林和暗针叶林共同构成分布带；一处重建景观不能代表三个隔离种群的全部环境。',
          focalPoint: { x: 0.72, y: 0.53 },
        },
        {
          image: './images/species/golden-snub-nosed-monkey/04-winter-lichen-foraging.webp',
          alt: '一只完整川金丝猴坐在积雪林中的粗枝上，用前手把灰绿色叶状地衣送到嘴边，长尾自然垂下',
          title: '冬季取食地衣',
          caption:
            '秦岭研究显示冬季会提高地衣、树皮和芽的比例；这次可见取食不代表全年食谱或精确摄入量。',
          focalPoint: { x: 0.4, y: 0.49 },
        },
        {
          image: './images/species/golden-snub-nosed-monkey/05-one-male-unit.webp',
          alt: '恰好一只较大的成年雄猴、两只成年雌猴和一只幼猴分坐在秋季混交林的不同树枝上，四条长尾均完整可见',
          title: '一雄多雌的基本单元',
          caption:
            '一雄多雌单元是多层社会的基本组成；四只相邻个体的编辑图不能证明亲缘、交配关系或整群规模。',
          focalPoint: { x: 0.52, y: 0.5 },
        },
        {
          image: './images/species/golden-snub-nosed-monkey/06-noninvasive-visual-monitoring.webp',
          alt: '两名研究者在雪后林地远距离观察，一人使用双筒望远镜，另一人持记录板；右上枝头只有一只长尾川金丝猴',
          title: '远距离观察猴群',
          caption:
            '固定设计下的重复观察和非侵入遗传取样才能估算数量与连通性；画面不代表命名项目、确认记录或种群趋势。',
          focalPoint: { x: 0.77, y: 0.35 },
        },
      ],
    },
    sources: GOLDEN_SNUB_NOSED_MONKEY_SOURCES,
    featured: true,
    publishedAt: GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE,
    updatedAt: GOLDEN_SNUB_NOSED_MONKEY_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
