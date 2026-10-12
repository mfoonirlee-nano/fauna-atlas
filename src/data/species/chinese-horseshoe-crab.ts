import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHINESE_HORSESHOE_CRAB_SOURCE_DATE = '2026-08-27' as const;

const CHINESE_HORSESHOE_CRAB_CONTENT_DATE = '2026-08-27' as const;

const CHINESE_HORSESHOE_CRAB_SOURCES = [
  {
    title: 'WoRMS — Tachypleus tridentatus, AphiaID 238270',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=238270',
    kind: 'taxonomy',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Tachypleus tridentatus',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en',
    kind: 'conservation',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: '国家重点保护野生动物名录 — 国家二级保护中国鲎',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: '香港生物多样性资讯站 — Chinese Horseshoe Crab',
    url: 'https://bih.gov.hk/en/fast-facts/iconic-species/index-id-14.html',
    kind: 'general',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: '香港渔农自然护理署 — Horseshoe Crab Life History and Behaviour',
    url: 'https://www.afcd.gov.hk/english/conservation/con_mar/con_mar_hor/con_mar_hor_life/con_mar_hor_life_large.html',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Baylon & Alcantara-Creencia 2022 — Identification and morphology of two horseshoe crab species from Honda Bay',
    url: 'https://doi.org/10.31398/tpjf/29.2.2022-0017',
    kind: 'taxonomy',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Manca et al. 2017 — Adult body sizes and population estimate in Sabah',
    url: 'https://doi.org/10.1016/j.japb.2017.04.011',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'Kwan et al. 2015 — Stable-isotope study of juvenile diet',
    url: 'https://doi.org/10.1007/s00227-015-2647-3',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Zhou & Morton 2004 — Diets of juvenile horseshoe crabs in Hong Kong',
    url: 'https://doi.org/10.1080/0022293031000155377',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Chiu & Morton 2004 — Juvenile behaviour on a Hong Kong nursery beach',
    url: 'https://doi.org/10.1023/B:HYDR.0000033085.71861.63',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Maeda et al. 2000 — Ecology of hatched Tachypleus tridentatus larvae',
    url: 'https://doi.org/10.5179/benthos.55.15',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Kwan et al. 2022 — Asian horseshoe crab eggs in northern Beibu Gulf',
    url: 'https://doi.org/10.1007/s11802-022-5164-2',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Xu et al. 2020 — Copper and blood chemistry in adult Tachypleus tridentatus',
    url: 'https://doi.org/10.1016/j.aquaculture.2019.734576',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title:
      'Nakamura et al. 1988 — Lipopolysaccharide interaction with factor C',
    url: 'https://doi.org/10.1093/oxfordjournals.jbchem.a122276',
    kind: 'ecology',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'Iwanaga 2007 — Biochemical principle of the Limulus test',
    url: 'https://doi.org/10.2183/pjab.83.110',
    kind: 'general',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'FDA — Recognized Standard ANSI AAMI ST72:2019',
    url: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfstandards/detail.cfm?standard__identification_no=40962',
    kind: 'general',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'USP — General Chapter 86 recombinant-reagent FAQ',
    url: 'https://www.usp.org/sites/default/files/usp/document/press-releases/gss_sa_004_f_chapter86_2023-08_final.pdf',
    kind: 'general',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'Obst et al. 2012 — Molecular phylogeny of extant horseshoe crabs',
    url: 'https://doi.org/10.1016/j.ympev.2011.08.025',
    kind: 'taxonomy',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2020 — Draft genome of Tachypleus tridentatus',
    url: 'https://doi.org/10.1186/s12864-020-6488-1',
    kind: 'general',
    accessedAt: CHINESE_HORSESHOE_CRAB_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-tachypleus-tridentatus',
    slug: 'chinese-horseshoe-crab',
    names: {
      zh: '中华鲎',
      en: 'Chinese Horseshoe Crab',
      aliases: ['中国鲎', '三棘鲎', 'Tri-spine Horseshoe Crab'],
    },
    scientificName: 'Tachypleus tridentatus',
    taxonomy: animalTaxonomy(
      taxon('Arthropoda', '节肢动物门'),
      taxon('Merostomata', '肢口纲'),
      taxon('Xiphosurida', '剑尾目'),
      taxon('Limulidae', '鲎科'),
      taxon('Tachypleus', '东方鲎属'),
    ),
    conservation: conservation('EN', 'decreasing', 2018, 'A4bcd'),
    distribution: {
      realms: ['marine', 'terrestrial'],
      continents: ['亚洲'],
      regions: [
        '日本南部本州、四国、北部九州与濑户内海',
        '中国浙江、福建、广东、广西和海南沿海',
        '香港、台湾、澎湖与金门沿岸',
        '越南沿海与北部湾',
        '菲律宾巴拉望与苏禄海',
        '马来西亚沙巴和砂拉越、文莱湾',
        '印度尼西亚爪哇北岸、苏门答腊与北苏拉威西部分海岸',
      ],
      countries: [
        '中国',
        '日本',
        '越南',
        '菲律宾',
        '马来西亚',
        '文莱',
        '印度尼西亚',
      ],
      range:
        '原生于东亚至东南亚西太平洋和东印度洋边缘的间断浅海海岸：北界到日本冈山县笠冈，向南经中国东南沿海、越南、菲律宾、婆罗洲到印度尼西亚爪哇北岸、苏门答腊和北苏拉威西。韩国济州单一历史雌体记录没有关联繁殖或育幼地，不计入稳定范围。',
      center: { lat: 22.5, lng: 115 },
    },
    habitats: [
      {
        name: '近岸浅海沙泥质海床',
        realm: 'marine',
        description:
          '成体主要栖息与觅食环境，已知深度约 0 至 40 米；繁殖季成体从海床向合适海岸移动。',
        isPrimary: true,
      },
      {
        name: '潮间带沙泥滩与海草斑块',
        realm: 'marine',
        description:
          '小型幼体在退潮时爬出觅食，回潮时钻入湿软底质；海草及附生食物网可提供重要碳源。',
      },
      {
        name: '浅潮下带软底过渡区',
        realm: 'marine',
        description:
          '较大幼体和亚成体离开潮间带后的生长、觅食通道，连接育幼地与成体海床。',
      },
      {
        name: '上部潮间带沙质产卵滩',
        realm: 'terrestrial',
        description:
          '高潮可达的沙滩让雌体掘窝产卵，胚胎在沙中发育；岸线硬化和采砂会切断这一环节。',
      },
    ],
    measurements: {
      length: {
        max: 85,
        unit: 'cm',
        note: 'IUCN 汇总的沙巴罕见成年雌体总长，包含尾剑；不是普通成体体长，也不是统一方法得到的全球最大值。',
      },
      weight: {
        max: 4.33,
        unit: 'kg',
        note: '菲律宾巴拉望 Honda Bay 样本中成年雌体最大体重；这是当地样本上限，不是全球最大体重。',
      },
    },
    diet: {
      types: ['omnivore'],
      foods: [
        '多毛类',
        '摇蚊等昆虫幼虫',
        '小型甲壳类',
        '薄壳双壳类',
        '寡毛类',
        '沉积有机物与海草相关食物网来源',
      ],
      description:
        '幼体以小型底栖无脊椎动物为中心取食混合食物。胃含物记录昆虫幼虫、环节动物、小蟹和薄壳双壳类；稳定同位素显示多种底栖猎物与海草相关碳源共同贡献，不能据此写成专吃海草。',
    },
    activity: [
      '成体在近岸海床爬行、掘入软底并季节性向产卵岸段移动',
      '幼体在退潮底质暴露后出泥觅食，回潮时多数重新钻沙',
      '雄体用第二、第三对前体附肢形成的抱钩固定在雌体后方参与外部受精',
      '幼体经多次蜕皮逐步转入浅潮下带，亚成体最终进入更深海床',
      '用尾剑支撑、转向和翻身，五对书鳃参与水中气体交换与游动',
    ],
    tags: [
      '东亚与东南亚海岸',
      'IUCN 濒危',
      '国家二级保护',
      '潮间带育幼',
      '沙滩产卵',
      '蓝色血淋巴',
      '鲎试剂',
    ],
    summary:
      '中华鲎生活在东亚至东南亚浅海，成体到沙滩产卵，幼体在沙泥潮滩生长。含铜的血蓝蛋白使氧合血淋巴呈蓝色，全球评估为濒危。',
    description:
      '中华鲎是海生铰口类节肢动物，有马蹄形前体、带棘后体和长尾剑。成体平时生活在近岸海床，繁殖时返回上部潮间带沙滩；幼体又依赖沙泥质育幼滩，经多年蜕皮后才转入海中。氧合血蓝蛋白让血淋巴呈蓝色，变形细胞中的凝固级联则成为 TAL 细菌内毒素试剂的基础，两套机制不能混写。捕捞与海岸开发同时切断成体、卵、幼体和亚成体环节，IUCN 因此在 2018 年按 EN A4bcd 评估其全球风险。',
    storySections: [
      {
        key: 'chelicerate-not-crab',
        label: '分类与演化',
        title: '马蹄形前体、具棘后体与尾剑',
        body: '中华鲎属于海生铰口类节肢动物，身体由马蹄形前体、具棘后体和尾剑组成。鲎类化石历史古老，现生中华鲎的分子系统和基因组仍记录到持续分化与演化。',
      },
      {
        key: 'sex-and-claspers',
        label: '性别与抱附',
        title: '较小雄体把两对附肢改成抱钩',
        body: '成年雄体前体前缘有两处凹入，第二、第三对附肢末端膨大成抱钩；成年雌体通常更大，前缘完整且附肢保持普通螯状。抱钩在繁殖时固定位置，不证明一对中华鲎终生相伴。',
      },
      {
        key: 'eggs-to-offshore',
        label: '繁殖与成长',
        title: '卵埋在沙里，幼体长在潮滩',
        body: '高潮把抱附的雌雄带到合适沙滩，雌体掘窝排卵，雄体在外部完成受精。幼体孵出后进入潮间带育幼地，经历多次蜕皮，再依次转向浅潮下带和成体海床；不同纬度有各自的繁殖日历。',
      },
      {
        key: 'low-tide-foraging',
        label: '食性与潮汐',
        title: '幼体在退潮后的软底觅食',
        body: '幼体在潮水退去后爬出，寻找昆虫幼虫、多毛类、小型甲壳类和薄壳双壳类，回潮时重新埋藏。海草为这张食物网输入碳和栖息结构，但稳定同位素证据不能改写成中华鲎专门啃食整株海草。',
      },
      {
        key: 'blue-blood-and-tal',
        label: '生理与检测',
        title: '蓝色负责运氧，凝固级联侦测内毒素',
        body: '血蓝蛋白以铜可逆结合氧，使氧合血淋巴呈蓝色；变形细胞中的因子 C、因子 B 与凝固酶原则构成 TAL 反应。规范用途是限定条件下的细菌内毒素检测，它不证明无菌，也不是治疗癌症或感染的药物。',
      },
      {
        key: 'four-linked-habitats',
        label: '保护',
        title: '保护四类彼此相连的海岸生境',
        body: '成体海床、浅潮下带、幼体育幼滩和上部产卵沙滩必须保持连通。只放流幼体却继续硬化岸线，或只保护沙滩却放任成体捕捞，都无法修复完整生活史。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1819 年的 Limulus tridentatus',
        body: '1819 年，Leach 以 Limulus tridentatus 命名中华鲎，后来它被归入鲎属 Tachypleus。后体末端常见三枚固定小棘，但数量可能变异，鉴定仍须结合其他特征。中华鲎是四种现生鲎之一，另外三种的分布与保护资料不能直接混用。',
      },
    ],
    keyFacts: [
      'WoRMS 接受 Tachypleus tridentatus (Leach, 1819)，原始组合为 Limulus tridentatus。',
      'IUCN 评估日为 2018-07-22，全球等级 EN A4bcd，趋势 decreasing。',
      '四种现生鲎是四个物种；中华鲎资料不能与美洲鲎、圆尾鲎或南方鲎混用。',
      '后体末端常见三枚固定小棘，但数量会变异，物种鉴定必须组合多个特征。',
      '五对书鳃负责水中气体交换；尾剑主要用于转向、支撑和翻身，不是毒刺。',
      '蓝色来自含铜血蓝蛋白，TAL 反应来自变形细胞凝固级联。',
      '中国大陆将中国鲎列为国家二级保护野生动物；截至 2026-08-27 未列入 CITES 附录。',
    ],
    threats: [
      '为鲎试剂原料、食用、卵和甲壳利用而捕捞成体，尤其选择抱卵雌体',
      '底拖网、刺网及其他近岸渔具造成兼捕、损伤和死亡',
      '围填海、港口、海堤和岸线硬化破坏或阻断上部潮间带产卵滩',
      '海水养殖工程、潮沟改造、海砂开采和海草退化损害幼体育幼地',
      '工业、农业和城市污染改变近岸水质与沉积物环境',
      '成熟晚、招募低和栖息地斑块化导致局地种群恢复缓慢',
    ],
    conservationActions: [
      '保护并连通成体海床、浅潮下带、幼体育幼滩和上部产卵沙滩',
      '执行国家二级保护规定，管理捕捞、持有、运输、交易与供应链来源',
      '记录并减少底拖网、刺网和废弃渔具兼捕，建立安全释放与死亡监测',
      '长期监测产卵对、卵窝、各龄幼体密度、成体性别比和生境质量',
      '修复自然潮汐、水文与沉积物过程，避免用岸线硬化替代生态修复',
      '增殖放流前核验亲本遗传来源、疾病风险、生境承载力与后续成活',
      '采用经药典和监管验证的重组内毒素检测方法，降低对野生鲎原料的需求',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'recorded-total-length',
        label: '罕见雌体总长记录',
        value: '85.0',
        unit: '厘米',
        note: 'IUCN 汇总的沙巴记录，包含尾剑。',
      },
      {
        key: 'northern-generation-length',
        label: '北部估算世代长度',
        value: '20.25',
        unit: '年',
        note: 'IUCN 评估参数；南部可能更短。',
      },
      {
        key: 'assessed-reduction',
        label: '三代推断减少',
        value: '≥50',
        unit: '%',
        note: '约 60 年内分布区重要部分的综合推断。',
      },
      {
        key: 'hong-kong-molts',
        label: '香港成长概括',
        value: '约 17',
        unit: '次蜕皮',
        note: '香港政府本地生活史概括。',
      },
    ],
    media: {
      image:
        './images/species/chinese-horseshoe-crab/01-shallow-seabed-adult-portrait.webp',
      alt: '东亚浅海沙泥底上一只橄榄褐色成年中华鲎，马蹄形前体、具棘后体和完整长尾剑清楚可见',
      focalPoint: { x: 0.63, y: 0.53 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/chinese-horseshoe-crab/02-seabed-foraging-trail.webp',
          alt: '浅海沙泥底上一只成年中华鲎沿弯曲扰动痕迹移动，身体贴底而完整尾剑拖在后方',
          title: '海床上的觅食轨迹',
          caption:
            '成体在海床移动和翻动软底；现有证据不足以把它的食谱写成固定比例。',
          focalPoint: { x: 0.61, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-horseshoe-crab/03-spawning-pair-at-tide-line.webp',
          alt: '暮色高潮线附近，一只较小雄性中华鲎抱附在大型雌体后方，雄体前缘凹入而尾剑完整',
          title: '雄体的抱钩',
          caption: '雄体抱附、雌体掘窝、外部受精；成对出现不表示终生配偶。',
          focalPoint: { x: 0.56, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-horseshoe-crab/04-buried-egg-cluster-cutaway.webp',
          alt: '中华鲎上部潮间带产卵滩的科学剖面，完整卵簇埋在含水湿沙中，画面没有成体埋在窝内',
          title: '沙下的卵窝',
          caption:
            '北部湾少量中华鲎卵窝深约 7 至 8 厘米；深度和窝卵数不能外推为全球定值。',
          focalPoint: { x: 0.53, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-horseshoe-crab/05-juvenile-nursery-mudflat.webp',
          alt: '退潮沙泥质育幼滩的海草斑块旁，一只小型中华鲎幼体沿浅水沟活动并准备钻入湿沙',
          title: '幼体的退潮餐桌',
          caption:
            '海草支撑食物网与生境；幼体的混合食物以小型底栖无脊椎动物为中心。',
          focalPoint: { x: 0.58, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chinese-horseshoe-crab/06-blue-hemolymph-and-amebocytes.webp',
          alt: '中华鲎蓝色血淋巴科学概念图，含铜血蓝蛋白运氧与颗粒状变形细胞被分成两个清楚区域',
          title: '蓝色运氧，级联检测',
          caption:
            '蓝色来自氧合血蓝蛋白；TAL 凝固因子储存在变形细胞中，两套机制功能不同。',
          focalPoint: { x: 0.55, y: 0.51 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...CHINESE_HORSESHOE_CRAB_SOURCES,
      {
        title: 'GBIF: Tachypleus tridentatus (Leach, 1819) nomenclatural record',
        url: 'https://www.gbif.org/species/1010608',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CHINESE_HORSESHOE_CRAB_CONTENT_DATE,
    updatedAt: CHINESE_HORSESHOE_CRAB_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
