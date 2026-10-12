import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const AYE_AYE_SOURCE_DATE = '2026-09-02' as const;

const AYE_AYE_CONTENT_DATE = '2026-09-02' as const;

const AYE_AYE_SOURCES = [
  {
    title: 'ASM Mammal Diversity Database v2.5: Daubentonia madagascariensis',
    url: 'https://www.mammaldiversity.org/taxon/1000929/',
    kind: 'taxonomy',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'China CITES Appendices, Chinese edition, 2026',
    url: 'https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf',
    kind: 'conservation',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Daubentonia madagascariensis (2018 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-2.RLTS.T6302A115560793.en',
    kind: 'conservation',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC PSG et al.: Primates in Peril 2018–2020',
    url: 'https://cdn.rewild.org/2019/10/Primates-in-Peril-2018-2020-2.pdf',
    kind: 'general',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III, effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Quinn and Wilson 2004: Daubentonia madagascariensis',
    url: 'https://doi.org/10.1644/740',
    kind: 'general',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Erickson 1991: Percussive foraging in the aye-aye',
    url: 'https://doi.org/10.1016/S0003-3472(05)80346-X',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Erickson et al. 1998: Stimuli for prey location by aye-ayes',
    url: 'https://doi.org/10.1023/A:1020363128240',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Lhota et al. 2008: Finger use in the aye-aye',
    url: 'https://doi.org/10.1002/ajp.20548',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Ramsier and Dominy 2012: Acoustic ecology of aye-ayes',
    url: 'https://doi.org/10.4161/cib.21509',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Hartstone-Rose et al. 2020: The aye-aye pseudothumb',
    url: 'https://doi.org/10.1002/ajpa.23936',
    kind: 'general',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Sefczek et al. 2017: Live-tree and dead-wood larval foraging',
    url: 'https://doi.org/10.1007/s10329-017-0617-8',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Sefczek et al. 2020: Invertebrate use in two wild aye-ayes',
    url: 'https://doi.org/10.1002/ajpa.23963',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Sefczek et al. 2020: Aye-aye home range and seasonal habitat use',
    url: 'https://doi.org/10.1159/000508620',
    kind: 'ecology',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Randimbiharinirina et al. 2021: Local attitudes toward aye-ayes',
    url: 'https://doi.org/10.1002/pan3.10192',
    kind: 'conservation',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
  {
    title: 'Aylward et al. 2018: Environmental DNA from aye-aye feeding traces',
    url: 'https://doi.org/10.1002/ece3.4341',
    kind: 'conservation',
    accessedAt: AYE_AYE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-daubentonia-madagascariensis',
    slug: 'aye-aye',
    names: {
      zh: '指猴',
      en: 'Aye-aye',
      aliases: [],
    },
    scientificName: 'Daubentonia madagascariensis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Primates', '灵长目'),
      taxon('Daubentoniidae', '指猴科'),
      taxon('Daubentonia', '指猴属'),
    ),
    conservation: conservation('EN', 'decreasing', 2018, 'A2cd+3cd+4cd'),
    distribution: {
      realms: ['terrestrial'],
      continents: ['非洲'],
      regions: [
        '马达加斯加东部湿润森林带',
        '马达加斯加北部与西北部森林斑块',
        '马达加斯加中西部局地干燥落叶林',
        '与本土林相连的次生林、农林和种植园镶嵌',
      ],
      countries: ['马达加斯加'],
      endemicTo: ['马达加斯加'],
      range:
        '指猴只自然分布于马达加斯加，可靠记录散布在东部、北部、西北部和中西部的多个森林区，海拔约 10 至 1,875 米。Nosy Mangabe 和 Île Roger 有人工引入记录，前者原先是否自然分布、后者是否仍存尚不确定。低密度与夜行习性也使局地范围难以确定。',
      center: { lat: -18.5, lng: 47 },
    },
    habitats: [
      {
        name: '热带或亚热带湿润低地林',
        realm: 'terrestrial',
        description: '东部低地湿润森林中的成熟树、枯立木和倒木提供无脊椎动物、硬壳种子、行进枝路与白天使用的枝叶巢。',
        isPrimary: true,
      },
      {
        name: '热带或亚热带湿润山地林',
        realm: 'terrestrial',
        description:
          '较高海拔湿润林延续冠层通道、食物木和巢位；记录最高约至1,875米，但这个上限不代表整段海拔连续占据。',
        isPrimary: true,
      },
      {
        name: '热带或亚热带干旱林',
        realm: 'terrestrial',
        description:
          '西部和西北部季节性干燥落叶林也是主要生境。分布不能只按东部雨林推定，局地食物与林斑连接性同样决定是否出现。',
        isPrimary: true,
      },
      {
        name: '高于高潮线的红树林植被',
        realm: 'terrestrial',
        description: 'IUCN记录的是红树林陆地一侧的植被利用，不能据此把指猴归为水生或潮间带动物。',
        isPrimary: true,
      },
      {
        name: '热带或亚热带干灌丛',
        realm: 'terrestrial',
        description: 'IUCN把干灌丛列为主要陆地生境；马达加斯加南部刺林仍明显缺少记录，不能把生境分类当成全面在场证明。',
        isPrimary: true,
      },
      {
        name: '次生林与森林边缘',
        realm: 'terrestrial',
        description:
          '部分个体会利用受扰次生林和林缘，但记录到使用不等于退化林可以替代大面积原生森林，也不表示破碎化没有代价。',
      },
      {
        name: '种植园与乡村花园',
        realm: 'terrestrial',
        description:
          '多年生作物系统可提供夜间通行和取食地点，也会产生作物冲突。IUCN把这类地点列为边缘生境，其价值取决于与本土林的连接，不能视作完整森林的等价替代。',
      },
    ],
    measurements: {
      length: {
        min: 30,
        max: 37,
        unit: 'cm',
        note: '成体头体长；另有44至53厘米的蓬松尾，不把两段拼成固定总长。',
      },
      weight: {
        min: 2.5,
        max: 2.6,
        unit: 'kg',
        note: 'IUCN灵长类专家资料采用的成体参考范围；不是全球个体的完整体重分布。',
      },
    },
    diet: {
      types: ['omnivore', 'insectivore'],
      foods: ['木内昆虫幼虫和成虫', 'Canarium属硬壳种子与种仁', '果实', '花蜜'],
      description:
        '指猴会从活木和枯木中取食无脊椎动物，也会打开硬壳种子并取食果实、花蜜。不同样地和少量跟踪个体显示食物比例会变化；两只个体或单一地点的结果不能当作全物种固定菜单。',
    },
    activity: [
      '夜间在树冠、树干和倒木间移动，白天通常在叶枝编成的巢中休息',
      '用细长第三指快速敲击木材，并配合听觉检测内部结构界面或声学不连续',
      '门齿咬开表面后，第三指或更粗壮的第四指会按基质和任务参与取食',
      '觅食常由单只个体完成，但活动范围可以重叠，不能概括为严格孤居',
      '主要在树上活动，也会沿倒木或地面跨越短距离',
    ],
    tags: [
      '脊索动物门',
      '哺乳纲',
      '灵长目',
      '指猴科',
      '马达加斯加特有种',
      '夜行',
      '树栖',
      '敲击觅食',
      '伪拇指',
      'IUCN濒危',
      'CITES附录I',
    ],
    summary:
      '指猴是马达加斯加特有的夜行灵长类。它用细长第三指敲击木材，听辨内部差异，再用门齿开孔，伸指探取食物。',
    description:
      '指猴有蓬松深色被毛、大而可转动的耳朵、黄橙色眼睛和长尾，是指猴科唯一现生种。白天它躲在枝叶巢中休息，夜间沿树干、树冠和倒木寻找无脊椎动物、硬壳种子、果实及花蜜。细长第三指适合敲击和探查，较粗的第四指也参与操作食物，掌侧还长有辅助抓握的伪拇指。森林丧失与部分地区的猎杀使它被列为濒危；地方社区对它的态度各不相同。',
    storySections: [
      {
        key: 'sole-living-lineage',
        label: '谱系',
        title: '指猴科唯一的现生种',
        body: '指猴属于灵长目，与狐猴共享较深层的演化历史。指猴科和指猴属如今都只剩 Daubentonia madagascariensis 一个现生种。巨大的门齿和特殊的手部，是这一支系形成的独特结构。',
      },
      {
        key: 'tap-scan-listen',
        label: '探测',
        title: '敲击声帮助探查木材内部',
        body: '细长第三指连续敲击木材，大耳根据声音差异帮助检测表层之下的结构界面或声学不连续。受控实验发现，即使空腔被明胶或吸声泡棉填满，指猴仍会挖掘，因此不能断言它必须先锁定空气腔、虫道或幼虫。这个过程常称敲击觅食或敲击探测，不是蝙蝠式回声定位。',
      },
      {
        key: 'finger-roles-and-pseudothumb',
        label: '手部',
        title: '第三指与第四指分担取食动作',
        body: '第三指格外细、活动度高，适合快速敲击和伸入狭窄开口；第四指更长、更粗壮，在部分食物和基质上承担取出或操纵任务。五根主指之外，掌侧伪拇指由桡侧籽骨、软骨延伸和肉垫组成，能增加抓握接触面，却不是一根具有指节的第六指。',
      },
      {
        key: 'diet-beyond-deadwood-larvae',
        label: '食谱',
        title: '它也打开硬壳种子',
        body: '野外研究记录指猴在活木和枯木上寻找无脊椎动物，也取食Canarium属硬壳种子、其他果实和花蜜。门齿负责打开木材或硬壳，手指再探取内容物。某项研究在两只个体所在样地得到88%的无脊椎动物取食记录，这个小样本比例不能外推到全种、所有季节或整个分布区。',
      },
      {
        key: 'large-connected-night-forest',
        label: '空间',
        title: '夜间活动需要连通的森林',
        body: '指猴白天在叶枝巢中休息，夜间穿行于树冠、树干和倒木寻找分散食物。活动范围研究只跟踪了一只雄性和一只雌性，显示个体可能使用很大且相互重叠的空间；这些数值不能定成全物种标准。森林砍伐、火和道路把食物树、巢位与移动路线同时切开。',
      },
      {
        key: 'local-attitudes-and-conservation',
        label: '共存',
        title: '各村庄对指猴的态度不同',
        body: '部分社区会因禁忌、食用、作物损失或不祥联想而杀死指猴，另一些村庄却记录到中性或正面态度。把所有马达加斯加人写成同一种看法会掩盖地方差异。保护工作需要与居民共同识别冲突地点、减少作物损失、保留连通树带，并用可重复调查检验种群是否改善。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '早期曾以松鼠属的名称描述',
        body: 'Gmelin 在 1788 年以 Sciurus madagascariensis 正式命名指猴，模式产地记录为马达加斯加西部。Sciurus 是松鼠属，这一早期组合反映了它特殊外貌给分类带来的困难。后来研究将它归入灵长目，现用名称为 Daubentonia madagascariensis。持续生长的门齿、细长手指和伪拇指也一直吸引着解剖与行为研究。',
      },
    ],
    keyFacts: [
      'Mammal Diversity Database接受名为Daubentonia madagascariensis，数据库编号1000929。',
      '指猴科和指猴属各只有这一个现生种。',
      '成体头体长约30至37厘米，蓬松尾约44至53厘米；尾长不应重复计入头体长。',
      '体重2.5至2.6千克是IUCN灵长类专家资料给出的参考范围，不是全球极值。',
      '深色蓬松被毛常夹浅色长护毛，脸较浅，耳朵巨大而裸露，眼睛呈黄橙色。',
      '第三指异常纤细且活动度高，第四指通常更长、更粗壮。',
      '前掌仍有五根主指；桡侧籽骨形成的伪拇指是辅助抓握结构，不是第六根外伸手指。',
      '敲击木材、听辨声学差异、门齿开孔和手指探取组成连续觅食过程。',
      '一只圈养雄性Merlin敲击松木板时，敲击间隔均值为97.7±19.9毫秒，主要能量在6至15千赫；这是单只个体和单一材料的实验结果，不是物种固定参数。',
      '它也打开硬壳种子并取食果实、花蜜，不能只称为蛀木幼虫专食者。',
      '白天使用叶枝巢，夜间觅食；常见单独觅食不等于严格孤居。',
      '可靠记录覆盖湿润林、干燥落叶林、次生林和邻近森林的农林复合地。',
      'IUCN评估年份为2018年，红色名录条目在2020年第2版发布；页面年份差异不代表重新评估。',
      '濒危标准怀疑过去三个世代内已减少至少50%，并预测未来三个世代内也将减少至少50%；每个三世代窗口为36年，A4另跨越过去和未来。这不是已数清全球个体后的普查值。',
      '没有可靠的全球成熟个体估计，也不把圈养寿命写成野外寿命。',
      '2026年3月5日生效的CITES现行附录把本种列入附录I，含义是严格管制国际贸易，不是对所有情形的绝对禁令。',
      '不同村庄对指猴的态度并不相同，保护沟通不能把复杂地方文化概括成统一迷信。',
    ],
    threats: [
      '刀耕火种、农业扩张、商业与生活用材采伐及火灾造成森林丧失和破碎化',
      '道路与孤立林斑切断夜间移动路线，也减少成熟食物树、枯木和筑巢位置',
      '部分地区存在捕猎、食用，以及与禁忌或不祥联想相关的针对性杀害',
      '在农林复合地取食作物可能引发报复性杀害，冲突强度会随村庄和管理方式变化',
      '夜行、低密度和难以探测让局地消失不易被及时发现，全球成熟个体数仍未知',
    ],
    conservationActions: [
      '保护并恢复湿润林和干燥林之间的连通树带，同时保留成熟树、枯立木、倒木与可筑巢枝层',
      '把天然林周边农林复合地纳入景观规划，减少清林、火灾和孤立化，而不把种植园当作原生林替代品',
      '与各村庄分别记录作物损失、禁忌和正面认知，按地方证据共同设计防损与共存措施',
      '将相机调查、取食痕迹和从新鲜痕迹提取的环境DNA分开记录，建立跨季节、可复查的占据与趋势样线',
      '对低密度和历史记录区开展重复调查，公开探测概率和采样强度，避免把未检出直接判作灭绝',
      '执行CITES附录I的国际贸易管制，并同步追踪国内捕猎、木材利用和农业扩张等主要压力',
    ],
    metrics: {
      adultLengthCm: [30, 37],
      adultMassKg: [2.5, 2.6],
      elevationM: [10, 1875],
    },
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN',
        value: 'EN',
        note: '濒危，全球趋势下降；2018年评估，2020年第2版发布。',
      },
      {
        key: 'three-generation-decline',
        label: '三世代缩减',
        value: '≥50',
        unit: '%',
        note: '过去与未来各自的三世代窗口，每个窗口36年；来自证据推断，不是全球普查。',
      },
      {
        key: 'head-body-length',
        label: '头体长',
        value: '30–37',
        unit: '厘米',
        note: 'IUCN SSC等机构联合出版的物种条目范围。',
      },
      {
        key: 'merlin-intertap-interval',
        label: '实验敲击间隔',
        value: '97.7 ± 19.9',
        unit: '毫秒',
        note: '仅一只圈养雄性Merlin，在藏有食物奖励的东部白松木板上。',
      },
    ],
    media: {
      image: './images/species/aye-aye/01-night-rainforest-canopy-cover.webp',
      alt: '马达加斯加夜间湿润林中，一只深色蓬毛指猴站在粗枝上，浅色脸、大裸耳、黄橙色眼睛和长蓬尾清晰可见',
      focalPoint: { x: 0.62, y: 0.51 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image: './images/species/aye-aye/02-full-body-diagnostic-profile.webp',
          alt: '一只完整指猴侧身站在林枝上，深色长护毛、大裸耳、细长手指、对握大脚趾和长于头体的蓬尾可见',
          title: '大耳、长指与蓬松长尾',
          caption:
            '形态重建显示一只指猴的完整侧影和主要外部特征；画面不能测量头体长、尾长或体重，也不能确认个体年龄、性别、来源地或野外身份。',
          focalPoint: { x: 0.53, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/aye-aye/03-percussive-tap-scanning.webp',
          alt: '夜间一只指猴贴近直立枯枝，一侧大耳清晰可见，一只手抓握树皮，另一只手以细长第三指接触完整木面',
          title: '第三指敲击扫描木材',
          caption:
            '行为重建显示第三指接触尚未开孔的木面，并保留一侧可见大耳；静帧不能证明耳廓朝向、木内空腔或猎物，也不能给出敲击频率、声能、探测距离或完整动作序列。',
          focalPoint: { x: 0.58, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/aye-aye/04-middle-finger-larva-extraction.webp',
          alt: '一只指猴在树干小孔旁伸入一根连续的细长第三指，木内开口附近露出一只浅色甲虫幼虫',
          title: '开孔后的手指探取',
          caption:
            '取食重建显示一根细长第三指伸入小孔，孔内保留一只浅色幼虫；画面不能确认猎物种类、孔道深度、开孔顺序、取出成功率或野外摄食量。',
          focalPoint: { x: 0.57, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/aye-aye/05-third-and-fourth-digit-closeup.webp',
          alt: '指猴前掌近景显示五根相连主指，其中第三指极细，第四指最长且更粗，掌侧没有伸出的第六指',
          title: '第三指、第四指与五指前掌',
          caption:
            '手部重建显示五根可数主指，第三指纤细，第四指更长更粗；外部像素不能呈现关节活动度、施力大小或伪拇指内部的籽骨和软骨，也不证明所有个体姿势相同。',
          focalPoint: { x: 0.58, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/aye-aye/06-ramy-nut-gnawing.webp',
          alt: '夜间一只指猴坐在树枝上，用一只手固定单颗硬壳种子，门齿在壳面开出小口，另一只手的细长第三指靠近开口',
          title: '门齿打开硬壳种子',
          caption:
            '食性重建显示一只指猴固定并打开单颗硬壳种子，细长手指靠近开口；像素不能确认植物学种类、种子成熟度、摄食步骤、营养贡献或这类食物在全种食谱中的比例。',
          focalPoint: { x: 0.55, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: AYE_AYE_SOURCES,
    featured: true,
    publishedAt: AYE_AYE_CONTENT_DATE,
    updatedAt: AYE_AYE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
