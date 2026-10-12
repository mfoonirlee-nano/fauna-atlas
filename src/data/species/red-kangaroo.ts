import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RED_KANGAROO_SOURCE_DATE = '2026-08-20' as const;

const RED_KANGAROO_CONTENT_DATE = '2026-08-20' as const;

const RED_KANGAROO_SOURCES = [
  {
    title: 'IUCN Red List — Macropus rufus (accepted today as Osphranter rufus; assessed 2015)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T40567A21953534.en',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Osphranter rufus',
    url: 'https://www.mammaldiversity.org/taxon/1000292/',
    kind: 'taxonomy',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Australian Faunal Directory — Osphranter rufus accepted taxon concept',
    url: 'https://biodiversity.org.au/afd/taxa/7e6e134b-2bc7-43c4-b23a-6e3f420f57ad',
    kind: 'taxonomy',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Celik et al. 2019 — Systematics of the Macropus complex',
    url: 'https://doi.org/10.1093/zoolinnean/zlz005',
    kind: 'taxonomy',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Freedman et al. 2020 — Osphranter rufus (Mammalian Species)',
    url: 'https://doi.org/10.1093/mspecies/seaa011',
    kind: 'general',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Red Kangaroo',
    url: 'https://australian.museum/learn/animals/mammals/red-kangaroo/',
    kind: 'general',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Queensland Wildlife Trade Management Plan 2023–2027 — commercially harvested macropods',
    url: 'https://www.dcceew.gov.au/sites/default/files/documents/qld-wildlife-trade-management-plan-export-macropod-2023-2027.pdf',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Current wildlife trade management plans',
    url: 'https://www.dcceew.gov.au/environment/wildlife-trade/commercial/management-plans',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Red kangaroo EPBC nomination not prioritised',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'NSW Government — Kangaroo management and population monitoring',
    url: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/wildlife-management/kangaroo-management',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'O’Connor et al. 2014 — The kangaroo tail propels pentapedal locomotion',
    url: 'https://doi.org/10.1098/rsbl.2014.0381',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Sharman & Pilton 1964 — Life history and reproduction of the red kangaroo',
    url: 'https://doi.org/10.1111/j.1469-7998.1964.tb05152.x',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Needham, Dawson & Hales 1974 — Forelimb blood flow and saliva spreading',
    url: 'https://doi.org/10.1016/0300-9629(74)90568-4',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Roberts et al. 2016 — Continent-wide analysis of kangaroo shade requirements',
    url: 'https://doi.org/10.1080/23328940.2016.1163452',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Jonzén et al. 2010 — Stochastic demography and red kangaroo population dynamics',
    url: 'https://doi.org/10.1111/j.1365-2656.2009.01601.x',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-osphranter-rufus',
    slug: 'red-kangaroo',
    names: {
      zh: '红袋鼠',
      en: 'Red Kangaroo',
      aliases: ['红大袋鼠', '赤大袋鼠', 'Blue Flier', 'Plains Kangaroo', 'Macropus rufus'],
    },
    scientificName: 'Osphranter rufus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Diprotodontia', '双门齿目'),
      taxon('Macropodidae', '袋鼠科'),
      taxon('Osphranter', '毛袋鼠属'),
    ),
    conservation: conservation('LC', 'stable', 2015),
    distribution: {
      realms: ['terrestrial'],
      continents: ['大洋洲'],
      regions: ['澳大利亚大陆内陆', '澳大利亚干旱区', '澳大利亚半干旱牧区'],
      countries: ['澳大利亚'],
      endemicTo: ['澳大利亚'],
      range:
        '红袋鼠分布于澳大利亚大陆中部与内陆中纬度的干旱、半干旱带，利用开阔平原、草地、低灌丛、金合欢及桉树疏林，以及有绿色草本的沙漠景观。塔斯马尼亚和湿润沿海密林没有自然种群。',
      center: { lat: -25, lng: 134 },
    },
    habitats: [
      {
        name: '开阔平原、短草地与稀树草原',
        realm: 'terrestrial',
        description: '最典型的觅食生境；短绿色草、阔叶草本、开阔视野和可快速跳跃的通道共同决定适宜度。',
        isPrimary: true,
      },
      {
        name: '低灌丛、盐生灌丛与内陆疏林',
        realm: 'terrestrial',
        description: '利用 mulga、mallee、藜科灌丛和开阔林地中的食物与阴影；过密灌木和闭合森林通常不利于快速移动。',
      },
      {
        name: '有植被的沙漠与半干旱牧区镶嵌',
        realm: 'terrestrial',
        description: '它们会随零散降雨移动，利用短期长出绿色植物的地带和旱季避难地；即使在沙漠中，也需要有植物可供取食。',
      },
    ],
    measurements: {
      length: {
        min: 75,
        max: 160,
        unit: 'cm',
        note: '成体头体长，不含尾；雄 94—160 cm、雌 75—110 cm；尾长雄 70—115 cm、雌 65—90 cm',
      },
      weight: {
        min: 18,
        max: 85,
        unit: 'kg',
        note: '成体常用联合包络；雄 45—85 kg、雌通常 18—36 kg；博物馆概览的更高个体极值不作为典型上限',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: ['短而绿色的草与新芽', '阔叶草本和杂类草', '藜科灌木及其他旱季灌木叶'],
      description: '以短绿色草为核心，按季节、地点、性别和繁殖状态选择阔叶草本；草类不足时增加藜科和其他灌木。绿色植物可满足大量水分需求，但有水时仍会饮水。',
    },
    activity: [
      '主要从下午后段、黄昏到夜间取食，炎热白天多在阴影中休息',
      '慢行时以前足、后足与承重推进的尾巴组成五足式步态，快速移动时改用双足同步跳跃',
      '常形成 2 至 10 只的松散 mob，2 至 4 只最常见，成员不断加入和离开',
      '多数个体在资源充足时较定居，干旱或零散降雨可促使少数个体远距离移动',
      '雄兽优势主要随体型建立，会以直立展示、前臂抓抱和尾部支撑踢击竞争交配机会',
    ],
    tags: ['澳大利亚特有种', '现生最大有袋类', '干旱区草食者', '五足式慢行', '胚胎滞育', '松散小群', 'IUCN 无危'],
    summary: '红袋鼠生活在澳大利亚内陆，是现生最大的有袋类。它追随雨后长出的绿色草本，慢行时用粗尾推动身体，也能通过暂停胚胎发育来适应难以预测的旱地环境。',
    description:
      '红袋鼠是澳大利亚大陆干旱、半干旱开阔地的特有大型草食者。雄兽通常红褐而体型可达雌兽两倍以上，雌兽多为蓝灰，但地区色差使黑白吻侧斑比毛色更可靠。它在黄昏和夜间选择短绿色草，慢行时尾巴像功能性的第五条腿推进，快速时再以两条后肢同步跳跃。小群成员松散变动；雌兽则可同时照料袋外幼兽、袋内幼兽和休眠胚胎。全球当前仍列 IUCN 无危，但数量随降雨和干旱强烈起伏，商业捕获必须依靠长期航空监测、年度阈值和旱年降额。',
    storySections: [
      {
        key: 'identity-and-dimorphism',
        label: '身份与两性差异',
        title: '雄兽红褐，雌兽蓝灰',
        body: '接受名已从 Macropus rufus 调整为 Osphranter rufus。雄兽通常红褐、肩胸强壮，雌兽通常蓝灰且体重不到大型雄兽一半；地区色差却会打破这套配色。黑白吻侧斑、嘴角浅条、长尖耳、狭长后足和粗壮渐尖尾才是更稳妥的组合线索。',
      },
      {
        key: 'rain-and-forage',
        label: '雨与牧草',
        title: '雨后绿草影响繁殖与存活',
        body: '它优先啃食短绿色草和新芽，也会取食阔叶草本，旱季再增加藜科与其他灌木。零散降雨把内陆景观切成短暂的优质斑块；长期干旱则使食物和植物水分一起下降，先压低繁殖，再造成幼兽和大型雄兽的大量死亡。',
      },
      {
        key: 'tail-powered-motion',
        label: '尾部推进',
        title: '慢行时用尾巴支撑和推动身体',
        body: '快速时两条后肢同步跳跃，尾巴向后平衡；低速取食移动时，前足先落地，粗尾随后承重并向后推地，两只后足一起摆到前方。力板实验显示尾巴的推进力可与四肢合计相当，但动物在解剖上仍只有四条腿。',
      },
      {
        key: 'heat-and-water',
        label: '热与水',
        title: '阴影、夜色和一层前臂唾液',
        body: '红袋鼠比灰袋鼠更能承受开阔地的辐射热，却仍在炎热白天寻找阴影。高热时它会喘息，并把唾液涂到血管丰富的前臂，靠蒸发散热。绿色植物能提供大量水分，遇到水源时它们也会饮水。',
      },
      {
        key: 'reproductive-relay',
        label: '繁殖与育幼',
        title: '33 天妊娠之后，还有近一年的母乳时间',
        body: '约 750 毫克的新生幼兽在 32 至 34 天妊娠后爬入育儿袋，却要约 235 至 240 天才永久出袋，并继续吃奶。条件好时，母兽能同时有袋外幼兽、袋内幼兽和休眠囊胚；不同乳腺甚至能为两个年龄阶段提供不同配方的乳汁。',
      },
      {
        key: 'adaptive-management',
        label: '监测与管理',
        title: '旱年需要降低捕获配额',
        body: '红袋鼠分布广、数量较多，但局地种群在旱年可能骤降。商业管理区采用航空调查、年度配额、许可、标签和禁捕区控制捕获，也需要结合调查误差、绿草供应、种群最低阈值、年龄性别结构和未来降雨变化调整决定。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '红袋鼠学名中的属名变化',
        body: '德马雷在 1822 年用 Kangurus rufus 描述红袋鼠。它后来长期被称为 Macropus rufus，现行哺乳动物数据库采用 Osphranter rufus。旧保护评估仍可能沿用 Macropus 这个属名，核对资料时可以用种加词 rufus 和命名记录确认它们所指的动物。',
      },
    ],
    keyFacts: [
      '当前接受名是 Osphranter rufus；Macropus rufus 是 IUCN 旧评估沿用的同物异名组合。',
      'IUCN 当前公开记录为 2015 年评估的无危、趋势稳定；2016-2 是发布卷期。',
      '雄兽约 45 至 85 千克，雌兽通常 18 至 36 千克；红褐与蓝灰是典型而非绝对配色。',
      '吻侧黑白斑和从嘴角通向耳下的宽浅条，比“毛是不是红色”更可靠。',
      '慢行时粗尾产生的推进力可与前后肢合计相当，快速时才以双足同步跳跃。',
      '妊娠 32 至 34 天，幼兽约 235 至 240 天永久出袋；母兽可同时照料两个可见年龄阶段并携带休眠胚胎。',
    ],
    threats: [
      '长期干旱和绿色牧草丧失抑制繁殖并造成强烈局地死亡；气候变化可能放大干旱、热和火灾风险',
      '集约农业、城市扩张、道路与围栏造成边缘生境损失、碎片化和局地死亡',
      '食物不足时家畜、野兔和野山羊加剧草本资源竞争与过度放牧',
      '商业捕获和非商业控制若未随调查误差、低密度阈值与旱年死亡及时调整，会叠加种群压力',
      '无许可杀死和福利规范执行不足造成不可审计的额外死亡',
    ],
    conservationActions: [
      '维持标准化航空调查、公开误差与多年可比的管理区时间序列',
      '按种群低阈值、绿色牧草和干旱条件动态降低或暂停年度捕获配额',
      '保留国家公园和其他禁捕区，并监测捕获区与参照区的年龄、性别、体型和遗传结构',
      '保护原生短草地、低灌丛、阴影树和干旱避难地，减少食物不足期的牲畜与野兔叠加压力',
      '在道路和围栏热点改进通行、可见性与救援响应，减少撞击和缠挂',
      '执行许可、标签、回报、可追溯和人道操作规范，并把未来降雨情景纳入捕获模型',
    ],
    metrics: {
      adultLengthCm: [75, 160],
      adultMassKg: [18, 85],
    },
    featuredStats: [
      {
        key: 'adult-male-mass',
        label: '成体雄兽体重',
        value: '45—85',
        unit: '千克',
        note: '常用范围；博物馆极端个体可更重',
      },
      {
        key: 'adult-female-mass',
        label: '成体雌兽体重',
        value: '18—36',
        unit: '千克',
        note: '通常范围，显示显著性别差异',
      },
      {
        key: 'gestation',
        label: '妊娠期',
        value: '32—34',
        unit: '天',
        note: '短妊娠之后仍有长期袋内发育与哺乳',
      },
      {
        key: 'permanent-pouch-exit',
        label: '永久出袋',
        value: '约 235—240',
        unit: '日龄',
        note: '出袋后仍继续随母并哺乳',
      },
    ],
    media: {
      image: './images/species/red-kangaroo/01-inland-plain-portrait.webp',
      alt: '澳大利亚内陆开阔平原上，一只完整的红褐色成年雄性红袋鼠在晨光中警戒，主体位于画面右侧',
      focalPoint: { x: 0.72, y: 0.58 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/red-kangaroo/02-rainfall-grazing.webp',
          alt: '雨后内陆草地上，一只完整的蓝灰色成年红袋鼠低头啃食仍扎根土壤的短绿色草芽',
          title: '追随雨后的绿色新芽',
          caption: '短绿草是核心食物；阔叶草本与旱季灌木会随地点和季节轮换登场。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
        {
          image: './images/species/red-kangaroo/03-inland-rangeland-habitat.webp',
          alt: '开阔内陆平原由干草、低灌丛、红土排水线与远处疏林组成，一只红袋鼠在右侧远处显得很小',
          title: '雨水切出的旱地镶嵌',
          caption: '红袋鼠在草地、灌丛和疏林间活动，需要绿色草本、便于跳跃的开阔通道和白天遮阴的场所。',
          focalPoint: { x: 0.66, y: 0.58 },
        },
        {
          image: './images/species/red-kangaroo/04-airborne-hopping.webp',
          alt: '一只红褐色成年红袋鼠在内陆平原完成双足同步跳跃，双后足和粗长尾巴都离开地面',
          title: '快速时，让尾巴留在空中',
          caption: '快速跳跃由两条后肢同步推进，尾巴在空中平衡；只有低速五足式移动时，尾巴才会接地承重与推进。',
          focalPoint: { x: 0.54, y: 0.5 },
        },
        {
          image: './images/species/red-kangaroo/05-female-and-pouch-joey.webp',
          alt: '内陆低灌丛前，一只完整的灰褐色成年雌性红袋鼠站立，单只长毛幼兽只把头和双耳探出育儿袋',
          title: '育儿袋里的漫长发育',
          caption: '约 33 天妊娠只是开始；幼兽约 235 至 240 日龄才永久出袋，之后仍会随母并继续哺乳。',
          focalPoint: { x: 0.55, y: 0.56 },
        },
        {
          image: './images/species/red-kangaroo/06-ground-transect-monitoring.webp',
          alt: '两名生态工作人员在内陆样线上用双筒望远镜、记录板和一台观测镜远距离记录右侧的一只红袋鼠',
          title: '保持距离的标准化计数',
          caption: '长期航空调查及其误差区间帮助管理者判断数量变化，按年调整捕获配额。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
      ],
    },
    sources: RED_KANGAROO_SOURCES,
    featured: true,
    publishedAt: RED_KANGAROO_CONTENT_DATE,
    updatedAt: RED_KANGAROO_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
