import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const SHORT_BEAKED_ECHIDNA_SOURCE_DATE = '2026-08-25' as const;

const SHORT_BEAKED_ECHIDNA_CONTENT_DATE = '2026-08-25' as const;

const SHORT_BEAKED_ECHIDNA_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5 — Tachyglossus aculeatus',
    url: 'https://www.mammaldiversity.org/taxon/1000002/',
    kind: 'taxonomy',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Tachyglossus aculeatus (assessed 2015; published 2016-2)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T41312A21964662.en',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: '上海自然博物馆 — 澳洲针鼹',
    url: 'https://www.snhm.org.cn/cpjc/info.htm?eid=855',
    kind: 'taxonomy',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Rismiller & Grutzner 2019 — Tachyglossus aculeatus (Monotremata: Tachyglossidae)',
    url: 'https://doi.org/10.1093/mspecies/sez012',
    kind: 'general',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Nicol 2026 — Taxonomy of the short-beaked echidna',
    url: 'https://doi.org/10.1071/AZ26020',
    kind: 'taxonomy',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Summerell et al. 2019 — Mitochondrial phylogeography and wildlife forensic applications',
    url: 'https://doi.org/10.1016/j.forsciint.2018.11.019',
    kind: 'distribution',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'NSW Environment — Echidnas',
    url: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/echidnas',
    kind: 'general',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Kangaroo Island Echidna priority mammal profile',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/action-plan/priority-mammals/kangaroo-island-echidna',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Kangaroo Island bushfire recovery',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/bushfire-recovery/regional-delivery-program/kangaroo-island',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Draft conditions for overseas transfer of Short-beaked Echidnas',
    url: 'https://consult.dcceew.gov.au/draft-conditions-for-the-overseas-transfer-of-short-beaked-echidna',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'NSW Environment — Protected species',
    url: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/protected-species',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Species database',
    url: 'https://www.cms.int/species',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Abensperg-Traun & De Boer 1992 — Diet and energy of the Short-beaked Echidna',
    url: 'https://doi.org/10.1111/j.1469-7998.1992.tb03837.x',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Clemente et al. 2016 — Activity, digging and heat in free-ranging echidnas',
    url: 'https://doi.org/10.1242/jeb.143867',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Nicol & Andersen 2007 — Hibernation in free-ranging Tasmanian echidnas',
    url: 'https://doi.org/10.1242/jeb.02701',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Brice et al. 2002 — Thermal physiology in a hot environment',
    url: 'https://doi.org/10.1016/S0306-4565(02)00015-3',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Cooper et al. 2023 — The echidna beak as an evaporative thermal window',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9845966/',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Davies et al. 2019 — Digging mammals alter forest soil characteristics',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6366199/',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Dutton-Regester et al. 2021 — Echidna pregnancy and pouch development',
    url: 'https://doi.org/10.1530/REP-21-0110',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Griffiths 2024 — Female echidna urogenital anatomy and egg laying',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11684381/',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Rismiller & McKelvey 2003 — Body mass, age and sexual maturity in Short-beaked Echidnas',
    url: 'https://doi.org/10.1016/S1095-6433(03)00225-3',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Hulbert et al. 2008 — Life and death: metabolic rate and longevity',
    url: 'https://doi.org/10.1016/j.exger.2008.09.006',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Lunn et al. 2022 — Climate and survival in a Tasmanian echidna population',
    url: 'https://doi.org/10.1071/ZO21037',
    kind: 'ecology',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
  {
    title: 'Griffiths et al. 2022 — EchidnaCSI citizen-science monitoring',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8812570/',
    kind: 'conservation',
    accessedAt: SHORT_BEAKED_ECHIDNA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tachyglossus-aculeatus',
    slug: 'short-beaked-echidna',
    names: {
      zh: '针鼹',
      en: 'Short-beaked Echidna',
      aliases: [
        '澳洲针鼹',
        '短吻针鼹',
        'Australian Echidna',
        'Short-nosed Echidna',
        'Spiny Anteater',
        'Bristly Echidna',
      ],
    },
    scientificName: 'Tachyglossus aculeatus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Monotremata', '单孔目'),
      taxon('Tachyglossidae', '针鼹科'),
      taxon('Tachyglossus', '针鼹属'),
    ),
    conservation: conservation('LC', 'stable', 2015),
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: [
        '澳大利亚大陆',
        '塔斯马尼亚与巴斯海峡岛屿',
        '袋鼠岛及其他澳大利亚近岸岛屿',
        '新几内亚东部与东南部',
        '新几内亚中央高地',
      ],
      countries: ['澳大利亚', '印度尼西亚', '巴布亚新几内亚'],
      range:
        '原生范围覆盖澳大利亚大陆、塔斯马尼亚、袋鼠岛和多座近岸岛屿，并延伸到印度尼西亚与巴布亚新几内亚境内的新几内亚部分地区；记录从海平面到约 1,800 米。现有权威资料未确认域外建立的野外引入种群。',
      center: { lat: -22, lng: 140 },
    },
    habitats: [
      {
        name: '森林、疏林与林缘',
        realm: 'terrestrial',
        description: '利用热带雨林、温带森林、桉树林和林缘，在枯落物、倒木、树根与松软土壤中觅食和寻找隐蔽处。',
        isPrimary: true,
      },
      {
        name: '灌丛、草地、干旱地与高山带',
        realm: 'terrestrial',
        description: '从低矮灌丛和草地到澳大利亚干旱内陆及雪线附近都有记录；各地种群会按温度、猎物和遮蔽条件调整活动。',
        isPrimary: true,
      },
      {
        name: '农牧地、花园与道路边缘镶嵌',
        realm: 'terrestrial',
        description:
          '针鼹会穿过牧场、农地、花园和路旁植被，车辆、犬类、倒木清除和景观破碎化会增加风险；这些环境无法替代结构完整的天然生境。',
      },
    ],
    measurements: {
      length: {
        min: 30,
        max: 45,
        unit: 'cm',
        note: '成体头体长的跨地域展示范围；不同资料的测量口径和地方体型存在差异',
      },
      weight: {
        min: 2,
        max: 7,
        unit: 'kg',
        note: '成体跨地域宽区间；不能据体重单独判断性别、亚种或健康状态',
      },
    },
    diet: {
      types: ['insectivore'],
      foods: ['蚁类', '白蚁', '甲虫及其幼虫', '蛾类幼虫', '其他土壤无脊椎动物'],
      description:
        '以蚁类和白蚁为主，随地区与季节取食甲虫幼虫等无脊椎动物；先用吻部探查并以强壮前爪掘开巢穴，再用细长黏舌和口腔角质垫获取、处理猎物。',
    },
    activity: [
      '昼夜均可活动，日程随环境温度、季节和地点改变',
      '繁殖期外多独居，求偶时可出现一只领头个体后跟多只追随者的针鼹列队',
      '用前爪掘食、开辟避难处，并借土壤、岩缝、倒木和树洞隐蔽',
      '寒冷地区个体可进入日常蛰伏或较长冬眠，热带与暖区种群不应套用同一休眠模式',
      '母兽把后期幼体留在封堵的育幼洞穴，间隔数日返回哺乳；回访节律存在地区差异',
    ],
    tags: [
      '澳大利亚与新几内亚',
      '单孔类',
      '卵生哺乳动物',
      '食虫性',
      '掘土生态工程师',
      '昼夜节律可变',
      'IUCN 无危',
      '袋鼠岛亚种濒危',
    ],
    summary:
      '短吻针鼹生活在澳大利亚和新几内亚部分地区，用管状短吻和强壮前爪寻找蚁类、白蚁。它是会产卵的哺乳动物，背上的棘刺由毛特化而来。',
    description:
      '短吻针鼹的学名是 Tachyglossus aculeatus，与长吻针鼹属于不同的属。它能进入森林、干旱地、草地和高山环境，用吻部探查地下猎物，再以宽大的前爪开巢和防御。活动期体温常在 31 至 33°C，活动时间和休眠方式随气候改变。雌兽通常产一枚柔韧外壳卵，幼体先在临时育儿袋内孵化和生长，随后转入封堵的育幼洞穴。IUCN 在 2015 年把全种评为无危、趋势稳定；道路、生境清除、剧烈野火、外来捕食者和捕猎仍会压迫地方种群。',
    storySections: [
      {
        key: 'terrestrial-monotreme',
        label: '单孔类身份',
        title: '陆地生活的卵生哺乳动物',
        body: '针鼹和鸭嘴兽同属现生单孔类。短而近圆柱形的吻、粗壮前肢和毛棘混生的背部，支持针鼹在陆地探查、挖掘和防御；鸭嘴兽则特化于淡水。两者都是延续至今的独立演化支系，针鼹不代表其他哺乳动物的祖先阶段。',
      },
      {
        key: 'toothless-forager',
        label: '觅食',
        title: '没有牙齿的地下猎手',
        body: '针鼹先让吻端贴近土壤、腐木或虫巢，再用宽大前爪打开通道。细长黏舌把蚁、白蚁和其他小型无脊椎动物带入口中，角质垫负责进一步处理。白蚁在部分西澳样地贡献了主要能量，全种菜单仍会随地点和季节变化。',
      },
      {
        key: 'flexible-clock-and-temperature',
        label: '节律与体温',
        title: '活动时间随温度改变',
        body: '炎热天气促使针鼹避开白昼高温，凉季和温带地区则常见日间活动。活动期体温通常约 31 至 33°C，寒冷地区个体还能进入蛰伏或冬眠；塔斯马尼亚研究中的冬眠体温和时长不能覆盖暖区或新几内亚种群。',
      },
      {
        key: 'egg-pouch-and-nursery',
        label: '繁殖与育幼',
        title: '一枚卵经过临时育儿袋与封堵洞穴',
        body: '雌兽交配后约 2 至 3 周产下一枚小而柔韧的卵，卵在繁殖期形成的临时育儿袋内孵化约 10 至 11 天。雌兽没有乳头，乳汁从腹部成对乳区的皮肤孔隙渗出。幼体在袋内停留约 45 至 55 天，棘开始长出后进入封堵的育幼洞穴；约 130 至 210 天的跨地域断乳范围反映地点差异，不能当作固定日程。',
      },
      {
        key: 'soil-engineer',
        label: '挖掘与生态',
        title: '挖掘改变小范围土壤',
        body: '觅食坑会截留枯落物和水分，并改变小范围土壤的湿度、硬度与养分。运动记录研究发现针鼹约用 12% 的观察时间挖掘，据此推算单只每年潜在翻土量最高约 204 立方米；这个值来自特定样地和模型，群落调查中的全部掘坑也不能都归给针鼹。',
      },
      {
        key: 'global-and-local-status',
        label: '分类与保护',
        title: '全种与地方种群的保护状况不同',
        body: 'MDD 暂认五个传统亚种，同时指出全范围仍缺少现代整合分类修订；毛量、棘长和拍摄地点不足以鉴定亚种。IUCN 把全种评为无危、趋势稳定，澳大利亚联邦却把袋鼠岛亚种 T. a. multiaculeatus 列为濒危。野猫、道路、碎片化和高烈度野火需要地方化管理。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1792 年的名字曾把它归入食蚁兽属',
        body: '1792 年，Shaw 以 Myrmecophaga aculeata 描述短吻针鼹，模式产地为澳大利亚新南威尔士州悉尼。Myrmecophaga 是当时使用的食蚁兽属名；它后来被归入短吻针鼹属 Tachyglossus。虽然两者都吃蚂蚁，针鼹的卵生、单孔类身份与真正的食蚁兽不同。',
      },
    ],
    keyFacts: [
      '针鼹与鸭嘴兽同属单孔目；它是卵生单孔类而非有袋类，这里的名称专指 Tachyglossus aculeatus，不包括三种长吻针鼹。',
      '原生范围跨澳大利亚、印度尼西亚和巴布亚新几内亚，袋鼠岛、塔斯马尼亚和新几内亚部分地区均属自然分布。',
      'MDD 暂认五个传统亚种并等待现代修订，地域毛量或棘长不能单独确认亚种。',
      '成体头体长约 30 至 45 厘米、质量约 2 至 7 千克；背部棘刺是特化毛，不会离体射出。',
      '成体没有牙齿，用前爪开巢、黏舌取食，再以口腔角质垫处理蚁类、白蚁和其他小型无脊椎动物。',
      'Spiny Anteater 只是历史英文俗名，针鼹与真正的食蚁兽并非近亲。',
      '活动期体温常见 31 至 33°C；活动时段、蛰伏和冬眠随气温、纬度、繁殖状态与地点改变。',
      '雌兽通常产一枚卵；交配至产卵约 2 至 3 周，产卵后的袋内孵化约 10 至 11 天。雌兽没有乳头，幼体从腹部成对乳区舔食渗出的乳汁。',
      'IUCN 评估日期为 2015 年，结论是无危、趋势稳定；2016-2 是发布批次，不是评估年份。',
      '袋鼠岛亚种在澳大利亚联邦列为濒危，这一地位不能覆盖整个物种。',
      'CITES 附录 II 列出长吻针鼹属 Zaglossus，未列短吻针鼹；CMS 也未列本种，但澳大利亚出口和州级野生动物法规仍独立适用。',
    ],
    threats: [
      '农业清地、城镇扩张与基础设施建设造成生境丧失、退化和碎片化',
      '道路碰撞，以及路网切割觅食地、避难处和繁殖活动空间',
      '移除倒木、枯落物和地表遮蔽物，减少猎物基质、休息处与育幼洞穴条件',
      '高烈度野火及其与干旱、热浪叠加，对袋鼠岛等地方种群造成集中损失',
      '野猫捕食幼体及部分成体，犬类攻击、狐狸捕食和野猪干扰增加地方风险',
      '新几内亚部分地区的捕猎、非法贸易和来源不明个体流通',
      '地方种群数据、传统亚种边界和长期趋势不足，妨碍风险变化的及时识别',
    ],
    conservationActions: [
      '保留并恢复连续本土植被、倒木、枯落物、岩隙和松软土壤组成的觅食与隐蔽结构',
      '在高风险道路设置适地限速、警示和安全通行设施，用碰撞记录检验成效',
      '控制野猫、犬类和野猪等地方压力，并针对袋鼠岛亚种持续评估捕食风险',
      '把低烈度避难地、洞穴与生境走廊纳入火灾预案，火后按重复调查跟踪恢复',
      '结合标准化样线、相机、照片记录、粪样遗传和公民科学监测地方趋势',
      '扩大跨全范围的基因组、形态与地理采样，重审传统亚种并公开分类不确定性',
      '执行野生动物持有、救护与跨境转移法规，由受训人员处理受伤或受困个体',
    ],
    metrics: {
      adultLengthCm: [30, 45],
      adultMassKg: [2, 7],
      elevationM: [0, 1800],
    },
    featuredStats: [
      {
        key: 'active-body-temperature',
        label: '活动期体温',
        value: '31–33',
        unit: '°C',
        note: '活动状态的常见范围；蛰伏和冬眠时可显著降低',
      },
      {
        key: 'pouch-incubation',
        label: '卵袋内孵化',
        value: '10–11',
        unit: '天',
        note: '产卵后的孵化期，不是交配至产卵的体内阶段',
      },
      {
        key: 'potential-soil-turnover',
        label: '潜在年翻土量',
        value: '最高约 204',
        unit: 'm³/年',
        note: '单项研究依据活动预算外推，不是每只个体的保证产量',
      },
      {
        key: 'wild-longevity-record',
        label: '野外最高记录',
        value: '约 48',
        unit: '年',
        note: '袋鼠岛记录级最大值，不代表普通个体或全种平均寿命',
      },
    ],
    media: {
      image: './images/species/short-beaked-echidna/01-eucalyptus-woodland-portrait.webp',
      alt: '雨后桉树林地表，一只完整成年针鼹位于画面右侧，短管状吻、细小眼睛、毛棘混生背部和粗壮前爪清楚可见',
      focalPoint: { x: 0.69, y: 0.62 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/short-beaked-echidna/02-termite-gallery-foraging.webp',
          alt: '桉树林地表的一只完整针鼹用宽大前爪掘开低矮土质白蚁通道，短管状吻前露出一小段细舌，通道内只有少量白蚁',
          title: '前爪开巢，黏舌取食',
          caption: '画面只呈现一次掘开土质通道和短距离伸舌，不能据此确认猎物种、摄食量或全年菜单。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
        {
          image: './images/species/short-beaked-echidna/03-forest-heath-habitat.webp',
          alt: '相连的温带桉树林与低矮石南灌丛占据画面大部，一只小比例针鼹在右下方开阔地表行走',
          title: '森林与灌丛只是范围的一角',
          caption: '这幅温带澳大利亚生境重建不能代表干旱内陆、高山带或新几内亚的全部环境跨度。',
          focalPoint: { x: 0.69, y: 0.62 },
        },
        {
          image: './images/species/short-beaked-echidna/04-defensive-digging.webp',
          alt: '松软桉树林土壤中，一只针鼹以前肢向下挖掘，吻端仍可见，隆起的毛棘背部留在地面上方，身后有少量松土',
          title: '把棘背贴向地面',
          caption: '画面重建防御性下挖的早期姿态，没有显示触发原因、完成时间或对捕食者的结果。',
          focalPoint: { x: 0.5, y: 0.62 },
        },
        {
          image: './images/species/short-beaked-echidna/05-courtship-train.webp',
          alt: '凉季桉树林中四只完整成年针鼹保持间距排成单列，沿同一方向穿过湿润枯落物地面',
          title: '求偶季里拉长的队伍',
          caption: '画面能确认四只成体列队；领头雌性与三只追随雄性的解释来自行为记录，外形本身不能判定性别或繁殖结果。',
          focalPoint: { x: 0.51, y: 0.61 },
        },
        {
          image: './images/species/short-beaked-echidna/06-nursery-burrow-backfill.webp',
          alt: '温带桉树林下，一只完整成年针鼹离开根系下方被新土和枯叶部分回填的小洞口，洞穴内部不可见',
          title: '封住育幼洞穴，再离开觅食',
          caption: '成体与回填洞口支持一种育幼情境重建；画面无法证明个体性别、泌乳状态或洞内是否有幼体。',
          focalPoint: { x: 0.64, y: 0.61 },
        },
      ],
    },
    sources: SHORT_BEAKED_ECHIDNA_SOURCES,
    featured: true,
    publishedAt: SHORT_BEAKED_ECHIDNA_CONTENT_DATE,
    updatedAt: SHORT_BEAKED_ECHIDNA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
