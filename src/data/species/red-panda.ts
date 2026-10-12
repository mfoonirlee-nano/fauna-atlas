import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const RED_PANDA_SOURCE_DATE = '2026-08-13' as const;

const RED_PANDA_CONTENT_DATE = '2026-08-13' as const;

const profile = {
    id: 'species-ailurus-fulgens',
    slug: 'red-panda',
    names: { zh: '小熊猫', en: 'Red Panda', aliases: ['红熊猫', '火狐'] },
    scientificName: 'Ailurus fulgens',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Carnivora', '食肉目'),
      taxon('Ailuridae', '小熊猫科'),
      taxon('Ailurus', '小熊猫属'),
    ),
    conservation: conservation('EN', 'decreasing', 2015, 'A2cde+3cde+4cde'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: ['喜马拉雅东部', '横断山脉', '中国西南山地'],
      countries: ['尼泊尔', '不丹', '印度', '缅甸', '中国'],
      range: '沿喜马拉雅山脉东部及其以东山地呈断续分布，从尼泊尔、不丹和印度东北部，经缅甸北部延伸至中国西南；适生地通常紧邻竹林、水源与连续树冠。',
      center: { lat: 28.3, lng: 92.7 },
    },
    habitats: [
      {
        name: '温带山地森林与竹林下层',
        realm: 'terrestrial',
        description: '主要见于约海拔 2,200 至 4,800 米的湿润阔叶林、针叶林与混交林；连续树冠、充足竹类和近水环境共同提供食物与隐蔽。',
        isPrimary: true,
      },
      {
        name: '成熟林树冠与林缘',
        realm: 'terrestrial',
        description: '老树、树洞、倒木和粗大枝桠可供休息、育幼与避敌，也让个体在树冠和竹丛之间移动。',
      },
    ],
    measurements: {
      length: { min: 56, max: 62.5, unit: 'cm', note: '头体长；尾长另约 37—47.2 厘米' },
      weight: { min: 3.6, max: 7.7, unit: 'kg' },
    },
    diet: {
      types: ['herbivore'],
      foods: ['竹叶', '竹笋', '果实', '根与嫩草', '少量昆虫、鸟卵和小型脊椎动物'],
      description: '竹子约占食物的 95%，但小熊猫主要挑选营养较高的嫩叶尖和竹笋，而不是粗硬竹秆。食肉目式的简单消化道难以充分利用纤维，因此它们靠长时间取食与减少活动来维持能量收支。',
    },
    activity: ['晨昏活动', '独居', '树栖', '不冬眠'],
    tags: ['喜马拉雅', '小熊猫科', '树栖', '竹食特化', '国家二级保护野生动物'],
    summary: '小熊猫在云雾山林的树冠间活动，主要吃竹子。长尾帮助平衡，灵活的脚踝方便它在枝头攀爬。',
    description: '小熊猫属于小熊猫科，是食肉目中适应树栖生活的动物。半伸缩爪、被毛覆盖的足底和能大幅转动的脚踝，帮助它在寒冷山林中攀爬。锈红背毛融入枝头的红褐色苔藓与白色地衣，蓬松的环纹长尾帮助平衡，也能围住身体保温。',
    storySections: [
      {
        key: 'adaptation',
        label: '形态与适应',
        title: '长尾帮助平衡和保温',
        body: '长而蓬松的环纹尾在细枝上充当平衡杆，寒冷时还能围住身体和口鼻。足底密生绒毛，可隔绝低温并增加摩擦；半伸缩爪与格外灵活的踝关节，则让它能头朝下沿树干下降。',
      },
      {
        key: 'energy',
        label: '食性与能量',
        title: '主要吃竹叶的食肉目动物',
        body: '和大熊猫一样，小熊猫也有由腕骨形成的“伪拇指”，可帮助抓稳竹枝，但二者并非近亲。竹叶热量低、消化效率有限，它们会优先选择嫩叶与竹笋，并以长时间休息、蜷缩保温和在低温时降低代谢来节省能量。',
      },
      {
        key: 'communication',
        label: '交流与育幼',
        title: '在树木和路径上留下气味',
        body: '成体通常独自活动，通过尿液和足垫、尾基部的腺体在树木与路径上留下信息。北半球多在冬末繁殖，雌兽会用树洞、空心树桩或竹丛筑巢，通常产下两只幼崽，并照料它们约一年。',
      },
      {
        key: 'taxonomy',
        label: '分类口径',
        title: '小熊猫是一种还是两种',
        body: 'IUCN 2015 年全球评估采用广义 Ailurus fulgens。基因组研究和部分现行分类数据库则把雅鲁藏布江以东的种群另列为中华小熊猫 Ailurus styani；阅读分布、数量与保护资料时，需要留意来源采用的是一种还是两种的体系。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1825 年写下的小熊猫学名',
        body: '弗雷德里克·居维叶在 1825 年发表小熊猫的科学描述，使用 Ailurus fulgens 这个学名。命名所依据的标本与早期材料来自亚洲，现行数据库将其模式产地列为尼泊尔。此后研究者对东部种群是否应另列为中华小熊猫意见有所变化，阅读旧资料时需要核对它们所说的小熊猫范围。',
      },
    ],
    keyFacts: [
      '小熊猫与大熊猫并非近亲，却各自演化出由腕骨形成、可辅助抓握竹枝的“伪拇指”。',
      '灵活的脚踝能显著转动，使它可以头朝下沿树干下降。',
      '尾长约 37 至 47.2 厘米，约为头体长的六成到八成。',
      '锈红背毛能融入树冠中的红褐色苔藓、地衣和枯叶背景。',
      '小熊猫会用舌头下方的特殊结构收集液态气味，再送至口腔内的感觉器官分析。',
      '新生幼崽约重 90 至 110 克，最初数月主要留在母兽铺有苔藓和树叶的巢内。',
    ],
    threats: ['山地森林丧失、退化与破碎化', '采伐、薪柴收集和放牧减少竹类与巢址', '游荡犬捕食并可能传播犬瘟热', '偷猎、非法宠物贸易与误中套索'],
    conservationActions: ['保护并修复连续山地森林、竹林和跨境生态廊道', '由社区参与监测并降低放牧、游荡犬和林下采集压力', '加强反偷猎执法与 CITES 附录 I 国际贸易管制'],
    metrics: {
      adultLengthCm: [56, 62.5],
      adultMassKg: [3.6, 7.7],
      elevationM: [2200, 4800],
    },
    featuredStats: [
      { key: 'body-length', label: '头体长', value: '56—62.5', unit: '厘米' },
      { key: 'tail-length', label: '尾长', value: '37—47.2', unit: '厘米' },
      { key: 'mass', label: '成体体重', value: '3.6—7.7', unit: '千克' },
      { key: 'bamboo-share', label: '竹类占食物', value: '约 95', unit: '%' },
    ],
    media: {
      image: './images/species/red-panda/01-forest-canopy-portrait.webp',
      alt: '晨雾中的东喜马拉雅温带森林里，一只成年小熊猫沿宽阔的苔藓树枝行走',
      focalPoint: { x: 0.68, y: 0.48 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/red-panda/02-bamboo-feeding.webp',
          alt: '一只成年小熊猫在湿润林下的苔藓树枝上抓握嫩竹并取食竹叶',
          title: '挑选嫩叶',
          caption: '小熊猫主要取食竹叶尖与竹笋；低能量食谱让取食和休息占据一天的大部分时间。',
          focalPoint: { x: 0.52, y: 0.48 },
        },
        {
          image: './images/species/red-panda/03-montane-habitat.webp',
          alt: '云雾笼罩的东喜马拉雅山地森林中，一只小熊猫在连续树冠与竹林间移动',
          title: '山林尺度',
          caption: '连续的树冠、竹林与近水环境共同组成适生地；破碎化会让小种群更加孤立。',
          focalPoint: { x: 0.46, y: 0.58 },
        },
        {
          image: './images/species/red-panda/04-headfirst-descent.webp',
          alt: '一只成年小熊猫头朝下攀过湿润山地森林里的苔藓树干',
          title: '头朝下下树',
          caption: '可转动的脚踝和半伸缩爪，让小熊猫能稳稳地头朝下沿树干移动。',
          focalPoint: { x: 0.52, y: 0.48 },
        },
        {
          image: './images/species/red-panda/05-winter-rest.webp',
          alt: '薄雪后的山地竹林中，一只小熊猫蜷在树枝上并用环纹长尾围住身体',
          title: '长尾御寒',
          caption: '寒冷时，蓬松长尾能覆盖身体和口鼻，帮助减少热量散失。',
          focalPoint: { x: 0.5, y: 0.5 },
        },
        {
          image: './images/species/red-panda/06-mother-and-cub.webp',
          alt: '晚春山地竹林的老树洞旁，一只小熊猫母兽带着一只半大幼崽移动',
          title: '随母成长',
          caption: '幼崽最初在铺有植物材料的巢中成长，随后跟随母兽学习攀爬、觅食与辨识气味。',
          focalPoint: { x: 0.52, y: 0.54 },
        },
      ],
    },
    sources: [
      {
        title: 'IUCN Red List — Ailurus fulgens',
        url: 'https://www.iucnredlist.org/species/714/110023718',
        kind: 'conservation',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: 'Mammal Diversity Database — Ailurus fulgens',
        url: 'https://www.mammaldiversity.org/taxon/1005802/',
        kind: 'taxonomy',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: 'Science Advances — Genomic evidence for two phylogenetic species and long-term population bottlenecks in red pandas',
        url: 'https://www.science.org/doi/10.1126/sciadv.aax5751',
        kind: 'taxonomy',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: 'Smithsonian National Zoo — Red panda',
        url: 'https://nationalzoo.si.edu/animals/red-panda',
        kind: 'ecology',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: 'Animal Diversity Web — Ailurus fulgens',
        url: 'https://animaldiversity.org/accounts/Ailurus_fulgens/',
        kind: 'general',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: 'Red Panda Network — Red panda habitat',
        url: 'https://redpandanetwork.org/habitat',
        kind: 'distribution',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: '国家林草局、农业农村部 — 国家重点保护野生动物名录',
        url: 'https://www.forestry.gov.cn/sites/main/main/gov/content.jsp?TID=20210205122451967544533',
        kind: 'conservation',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
      {
        title: 'CITES — Appendices I, II and III',
        url: 'https://cites.org/eng/app/appendices.php',
        kind: 'conservation',
        accessedAt: RED_PANDA_SOURCE_DATE,
      },
    ],
    featured: true,
    publishedAt: RED_PANDA_CONTENT_DATE,
    updatedAt: RED_PANDA_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
