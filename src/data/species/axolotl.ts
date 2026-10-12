import type { SpeciesSource, Species } from '../../types/species.ts';

import { CONTENT_DATE, animalTaxonomy, conservation, taxon } from './shared.js';

const AXOLOTL_SOURCE_DATE = '2026-08-17' as const;

const AXOLOTL_CONTENT_DATE = '2026-08-17' as const;

const AXOLOTL_SOURCES = [
  {
    title: 'IUCN Red List — Ambystoma mexicanum',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T1095A53947343.en',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World — Ambystoma mexicanum',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Ambystomatidae/Ambystoma/Ambystoma-mexicanum',
    kind: 'taxonomy',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Mexico NOM-059-SEMARNAT-2010 — protected native species list',
    url: 'https://transparencia.profepa.gob.mx/Transparencia/TransparenciaJuridico/LEYES/2025/NOM-059-SEMARNAT-2010.pdf',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Contreras et al. 2009 — Recent decline and potential distribution in Xochimilco',
    url: 'https://doi.org/10.1016/j.biocon.2009.07.008',
    kind: 'distribution',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Zambrano et al. 2009 — Spatial heterogeneity of Xochimilco water quality',
    url: 'https://doi.org/10.1007/s00267-008-9216-1',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Zambrano et al. 2010 — Axolotl and introduced-fish food-web overlap',
    url: 'https://doi.org/10.1007/s10530-010-9697-8',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Woodcock et al. 2017 — Pigment mutants and introgressed DNA in laboratory axolotls',
    url: 'https://doi.org/10.1038/s41598-017-00059-1',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'SEMARNAT 2018 — Mexican axolotl morphology and natural-history overview',
    url: 'https://www.gob.mx/semarnat/articulos/ajolote-mexicano-criatura-super-dotada',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'McKenzie & Taylor 1996 — Gill and lung ventilation responses',
    url: 'https://doi.org/10.1016/S0034-5687(96)00080-1',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Toussaint-Lardé et al. 2025 — Axolotl suction-feeding kinematics',
    url: 'https://doi.org/10.1242/bio.061860',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Khattak et al. 2014 — Axolotl breeding and metamorphosis protocol',
    url: 'https://doi.org/10.1038/nprot.2014.040',
    kind: 'ecology',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Bryant et al. 2017 — Regenerative limits after repeated limb amputation',
    url: 'https://doi.org/10.1038/s41536-017-0034-z',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Bothe et al. 2021 — Normal and pathological axolotl limb regeneration',
    url: 'https://doi.org/10.1002/jez.b.22950',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Cano-Martínez et al. 2010 — Functional and structural regeneration after partial ventricular amputation',
    url: 'https://www.scielo.org.mx/pdf/acm/v80n2/v80n2a4.pdf',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Amamoto et al. 2016 — Adult axolotl pallium regeneration',
    url: 'https://doi.org/10.7554/eLife.13998',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Valiente et al. 2010 — Creating refuges for the axolotl',
    url: 'https://doi.org/10.3368/er.28.3.257',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Ramos et al. 2025 — Movements of captive-bred axolotls in restored wetlands',
    url: 'https://doi.org/10.1371/journal.pone.0314257',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Maeda-Obregon et al. 2025 — Xochimilco fish and amphibian eDNA',
    url: 'https://doi.org/10.1002/edn3.70147',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Voss, Woodcock & Zambrano 2015 — A tale of two axolotls',
    url: 'https://doi.org/10.1093/biosci/biv153',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'Nowoshilow et al. 2018 — The 32-gigabase axolotl genome',
    url: 'https://doi.org/10.1038/nature25458',
    kind: 'general',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
  {
    title: 'UNAM 2026 — Etiqueta Chinampera and latest census status',
    url: 'https://www.dgcs.unam.mx/boletin/bdboletin/2026_387.html',
    kind: 'conservation',
    accessedAt: AXOLOTL_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-ambystoma-mexicanum',
    slug: 'axolotl',
    names: { zh: '墨西哥钝口螈', en: 'Axolotl', aliases: ['美西螈', '六角恐龙'] },
    scientificName: 'Ambystoma mexicanum',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Amphibia', '两栖纲'),
      taxon('Caudata', '有尾目'),
      taxon('Ambystomatidae', '钝口螈科'),
      taxon('Ambystoma', '钝口螈属'),
    ),
    conservation: conservation('CR', 'decreasing', 2019, 'A2abce'),
    distribution: {
      realms: ['freshwater'],
      continents: ['北美洲'],
      regions: ['墨西哥谷地', '霍奇米尔科湖南部残存运河与湿地'],
      countries: ['墨西哥'],
      endemicTo: ['墨西哥谷地'],
      range: '历史分布包括霍奇米尔科湖和查尔科湖；现行分类资料把天然分布限定在墨西哥城南部霍奇米尔科残存的运河与湿地。其他城市水体记录的来源不同，不能直接归为原生野生种群。',
      center: { lat: 19.27, lng: -99.1 },
    },
    habitats: [
      {
        name: '高原淡水运河与湖沼残片',
        realm: 'freshwater',
        description: '利用霍奇米尔科残存的永久性运河、浅水湖沼和沟渠；泥质水底、沉水与挺水植物、岸缘根系提供觅食、藏身和产卵基质，水质与溶氧却在不同水道间高度不均。',
        isPrimary: true,
      },
      {
        name: 'chinampa 岸缘与庇护水道',
        realm: 'freshwater',
        description: '传统固定抬高农田之间的狭窄水道保留重要湿地结构。生态过滤、外来鱼隔离和本土水草恢复能改善小片庇护水道，更大范围的湖区修复仍需持续治理。',
      },
    ],
    measurements: {
      length: { min: 15, max: 30, unit: 'cm', note: '成体总长的常用参考范围；不同来源、年龄和饲养条件会造成差异' },
    },
    diet: {
      types: ['carnivore'],
      foods: ['水生昆虫及幼虫', '其他水生无脊椎动物', '小型甲壳类与浮游动物', '鱼'],
      description: '它快速张口并压低舌骨，借水流吸入猎物。霍奇米尔科野外胃含物研究的样本很小，食物比例与完整食谱仍需补充；食物网研究还显示它与外来鲤鱼和罗非鱼争用部分资源。',
    },
    activity: ['终生水栖', '吸入式摄食', '利用水生植物与水底结构'],
    tags: ['墨西哥特有种', 'IUCN 极危', '幼态延续', '野生深色型', '再生研究模式动物', 'chinampa-refuge'],
    summary: '墨西哥钝口螈成年后仍保留三对羽状外鳃，在水中生活。它的野生种群依赖霍奇米尔科残存的湿地。',
    description: '墨西哥钝口螈通常保留外鳃、背尾鳍和水生生活方式，同时达到性成熟，这叫幼态延续。常见的粉白、红鳃形象主要来自圈养色型，野生个体通常为深灰褐至黑褐色，带斑驳或金色细点。实验室与宠物饲养的个体数以百万计，霍奇米尔科的原生野生种群却严重衰退，二者的数量与遗传来源需要分别考虑。',
    storySections: [
      {
        key: 'wild-and-captive',
        label: '野生型与圈养型',
        title: '深色野生型与粉白圈养型',
        body: '野生型通常呈深色斑驳。常见粉白、黑眼的圈养个体属于白色或白化样色型，与红眼的白化型不同。研究用种群还曾引入虎纹钝口螈 DNA，因此实验室种群的遗传历史不同于霍奇米尔科野生种群，不能直接用数量充足来判断保护成效。',
      },
      {
        key: 'paedomorphosis',
        label: '发育与呼吸',
        title: '保留外鳃，仍能达到性成熟',
        body: '它通常保留幼体时期的三对外鳃、背尾鳍与水栖形态，同时达到性成熟。除了外鳃，皮肤也参与气体交换，肺则保留下来，个体能到水面吞气。实验条件下，甲状腺激素能够诱导变态，因此它并非绝对不会变态。',
      },
      {
        key: 'suction-feeding',
        label: '摄食与食物网',
        title: '嘴一张，水和猎物一起进入',
        body: '宽阔头部和口咽腔能在快速张口时形成吸入水流，把水生昆虫幼虫、甲壳类、蠕虫和其他小型动物带入口中。外来鲤鱼与罗非鱼不仅可能取食卵和幼体，也会扰动底泥、改变植被，并与钝口螈共享部分食物资源。',
      },
      {
        key: 'regeneration',
        label: '再生研究',
        title: '肢体再生的过程与限制',
        body: '实验研究显示，墨西哥钝口螈能再生完整肢体和尾。伤口先闭合，细胞改变状态形成芽基，再分化出组织。部分心室切除与端脑损伤模型也显示特定条件下的修复能力。结果受组织、损伤方式、年龄和实验条件影响，再生也可能留疤；这些能力无法消除湿地污染与生境破碎的威胁。',
      },
      {
        key: 'eggs',
        label: '繁殖',
        title: '精包留在水底，卵分散附在水草上',
        body: '雄体放置胶质精包，雌体用泄殖腔拾取并完成体内受精，随后把胶质卵逐枚或分散地附在水生植物和水下结构上。常见窝卵数字主要来自圈养，野外典型值仍未知。成体产卵后不持续守卵。',
      },
      {
        key: 'chinampa-refuges',
        label: '保护与共生景观',
        title: '农田间的庇护水道',
        body: '历史调查估计密度从 1998 年每平方千米约 6,000 只，降到 2013/2014 年约 35 只，这两次估计不能代表今日数量。保护人员在传统抬高农田 chinampa 周边设置过滤屏障，排除外来鱼、改善局地水质，并与农户共同恢复本土水下生境。短期放养试验还不足以证明野生种群恢复。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1798 年的 Gyrinus mexicanus',
        body: '肖与诺德在 1798 年以 Gyrinus mexicanus 描述墨西哥钝口螈，原始产地记为墨西哥，后来被限定为霍奇米尔科。研究者此后调整其属名，今天使用 Ambystoma mexicanum。早期命名标本已经遗失，现存描述与后来的研究仍可用于追溯这个名字。',
      },
    ],
    keyFacts: [
      '现行分类资料把天然分布保守限定在霍奇米尔科湖南部残存水系；历史分布还包括查尔科湖。',
      '它通常以幼态水生形态达到性成熟，保留三对外鳃和背尾鳍，但仍具有肺并可到水面吞气。',
      '粉白红鳃是常见圈养色型；野生型通常呈深灰褐至黑褐色，并带斑驳或金色细点。',
      '摄食时快速张口产生水流，把猎物连同水一起吸进口中。',
      '雄体放置精包、雌体拾取后体内受精，胶质卵分散附着在水生植物或其他水下结构上。',
      '控制实验中的四肢可以完整再生，但同一平面的反复截肢会降低成功率；自然同类咬伤后的再生肢也更常出现骨骼或指异常。',
      '2013/2014 年约每平方千米 35 只是调查密度估计；全球还剩多少个体，至今没有可靠答案。',
      '经典实验室品系与霍奇米尔科野生种群有不同的遗传历史，放归前必须评估血缘、疾病与行为适应。',
    ],
    threats: [
      '城市扩张、水文改造和 chinampa 弃耕造成湿地缩小、破碎化与岸缘结构丧失',
      '生活污水、农业径流和底泥再悬浮造成水质、溶氧与营养盐条件恶化',
      '鲤鱼、罗非鱼等外来鱼捕食卵和幼体、竞争食物并扰动水生植被',
      '极小且隔离的野生种群面临遗传多样性流失、疾病与随机事件风险',
      '未经评估的圈养个体放生可能带来遗传混杂和疾病传播风险',
    ],
    conservationActions: [
      '恢复霍奇米尔科运河连通性、水质、本土水草与 chinampa 岸缘结构',
      '用粗滤障建立可交换水体但能排除外来鱼的 chinampa-refugio',
      '支持 chinampero 农户采用低污染耕作并共同维护传统湿地景观',
      '结合规范网捕、环境 DNA 与水质监测追踪野生分布，不公开敏感点位',
      '对保育繁殖和任何转移放归实施谱系管理、遗传匹配、病原筛查与放后监测',
    ],
    metrics: {
      adultLengthCm: [15, 30],
    },
    featuredStats: [
      {
        key: 'survey-density',
        label: '调查密度变化',
        value: '6,000 → 约 35',
        unit: '只/平方千米',
        note: '1998 与 2013/2014 的区域调查估计；最新数字仍待新普查',
      },
      {
        key: 'external-gills',
        label: '外鳃',
        value: '3',
        unit: '对',
        note: '性成熟后仍保留，同时也能用肺、皮肤和口咽表面交换气体',
      },
      {
        key: 'adult-length',
        label: '一般全长',
        value: '15—30',
        unit: '厘米',
        note: '墨西哥政府概括范围；野生成体的严格统计仍缺乏',
      },
      {
        key: 'genome-size',
        label: '参考基因组',
        value: '约 320',
        unit: '亿碱基对',
        note: '2018 年发表的实验室参考基因组，约为人类基因组的 10 倍',
      },
    ],
    media: {
      image: './images/species/axolotl/01-wild-type-canal-portrait.webp',
      alt: '霍奇米尔科运河的水草和泥底之间，一只深灰褐斑驳的野生型墨西哥钝口螈停在右侧',
      focalPoint: { x: 0.68, y: 0.56 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/axolotl/02-external-gills-and-fin.webp',
          alt: '一只野生型墨西哥钝口螈的完整水下侧面，三对羽状外鳃、短肢和背尾鳍清晰可见',
          title: '成年，仍保留水下幼态',
          caption: '三对外鳃、背尾鳍和短肢会随个体达到性成熟而保留；它也能通过皮肤和肺参与呼吸。',
          focalPoint: { x: 0.53, y: 0.54 },
        },
        {
          image: './images/species/axolotl/03-chinampa-canal-habitat.webp',
          alt: '霍奇米尔科固定 chinampa 农田、柳树岸缘与狭窄运河的水面上下视野，水下一只深色墨西哥钝口螈显得很小',
          title: '一只螈与整片水乡',
          caption: '野生种群生活在传统农田、岸缘根系、水草与相连运河组成的湿地，保护需要维持这些环境。',
          focalPoint: { x: 0.63, y: 0.68 },
        },
        {
          image: './images/species/axolotl/04-suction-feeding.webp',
          alt: '一只深色野生型墨西哥钝口螈在泥质水底微张口，吸入前方一只微小水生幼虫',
          title: '水流完成最后一小段追捕',
          caption: '快速张口产生吸入水流，把近处的小型水生动物连同水一起带入口腔。',
          focalPoint: { x: 0.52, y: 0.58 },
        },
        {
          image: './images/species/axolotl/05-eggs-on-aquatic-plants.webp',
          alt: '多枚透明胶质的墨西哥钝口螈卵逐个附着在沉水植物上，一只深色成体从背景游过',
          title: '卵逐枚留在水草上',
          caption: '雌性把胶质卵逐个黏附在水草或其他基质上，产卵后离开。',
          focalPoint: { x: 0.45, y: 0.5 },
        },
        {
          image: './images/species/axolotl/06-chinampa-refuge-canal.webp',
          alt: 'chinampa 岸边的植被水道由木桩和滤障与主运河相隔，水下一只深色墨西哥钝口螈停在庇护区内',
          title: '把一段运河变成庇护水道',
          caption: '粗滤屏障、水质管理和本土植被恢复，可减少外来鱼并改善局地条件，需要长期维护。',
          focalPoint: { x: 0.68, y: 0.78 },
        },
      ],
    },
    sources: AXOLOTL_SOURCES,
    featured: true,
    publishedAt: CONTENT_DATE,
    updatedAt: AXOLOTL_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
