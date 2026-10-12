import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const TIBETAN_ANTELOPE_SOURCE_DATE = '2026-08-25' as const;

const TIBETAN_ANTELOPE_CONTENT_DATE = '2026-08-25' as const;

const TIBETAN_ANTELOPE_SOURCES = [
  {
    title: 'IUCN Red List: Pantholops hodgsonii (2016 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15967A50192544.en',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'IUCN 2016: Tibetan antelope status-change announcement',
    url: 'https://iucn.org/news/species/201609/four-out-six-great-apes-one-step-away-extinction-%E2%80%93-iucn-red-list',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database: Pantholops hodgsonii',
    url: 'https://www.mammaldiversity.org/taxon/1006210/',
    kind: 'taxonomy',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Leslie and Schaller 2008: Pantholops hodgsonii species account',
    url: 'https://doi.org/10.1644/817.1',
    kind: 'general',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院：中国生物多样性红色名录·脊椎动物卷（2020）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部：国家重点保护野生动物名录（2021）',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'CITES Resolution Conf. 11.8: Conservation of and control of trade in the Tibetan antelope',
    url: 'https://cites.org/sites/default/files/documents/COP/19/resolution/E-Res-11-08-R17.pdf',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'CMS Central Asian Mammals Initiative: Pantholops hodgsonii',
    url: 'https://cami.cms.int/species/pantholops-hodgsonii',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'China State Council 2025: Wild Tibetan antelope population exceeds 300,000',
    url: 'https://english.www.gov.cn/archive/statistics/202503/03/content_WS67c551dbc6d0868f4e8f0410.html',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'China State Council 2024: Tibetan antelope protection progress',
    url: 'https://english.www.gov.cn/news/202402/26/content_WS65dc32e8c6d0868f4e8e45a1.html',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Signore and Storz 2020: Hypoxia adaptation of Tibetan antelope hemoglobin',
    url: 'https://doi.org/10.1126/sciadv.abb5447',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Buho et al. 2011: Tibetan antelope migration based on satellite tracking',
    url: 'https://doi.org/10.1016/j.asr.2011.02.015',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Xia et al. 2007: Qinghai-Tibet railway and Tibetan antelope migration',
    url: 'https://doi.org/10.1017/S0030605307000116',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Xu et al. 2019: Railway underpass location affects migration distance',
    url: 'https://doi.org/10.1371/journal.pone.0211798',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2021: Adaptation of migratory Tibetan antelope to infrastructure development',
    url: 'https://doi.org/10.1080/20964129.2021.1910077',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Fox et al. 2009: Tibetan antelope conservation and rangeland fencing',
    url: 'https://doi.org/10.1017/S0030605308001774',
    kind: 'conservation',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Hu et al. 2020: UAV population estimate of migrating Tibetan antelopes',
    url: 'https://doi.org/10.1017/S0030605317001673',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Schaller and Ren 1988: Effects of a snowstorm on Tibetan antelope',
    url: 'https://doi.org/10.2307/1381361',
    kind: 'ecology',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
  {
    title: 'Pei et al. 2021: Climate-change habitat projections for Tibetan Plateau antelopes',
    url: 'https://doi.org/10.1016/j.ecolind.2021.107337',
    kind: 'distribution',
    accessedAt: TIBETAN_ANTELOPE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-pantholops-hodgsonii',
    slug: 'tibetan-antelope',
    names: {
      zh: '藏羚',
      en: 'Tibetan Antelope',
      aliases: ['藏羚羊', 'Chiru'],
    },
    scientificName: 'Pantholops hodgsonii',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Mammalia', '哺乳纲'),
      taxon('Artiodactyla', '偶蹄目'),
      taxon('Bovidae', '牛科'),
      taxon('Pantholops', '藏羚属'),
    ),
    conservation: conservation('NT', 'increasing', 2016),
    distribution: {
      realms: ['terrestrial'],
      continents: ['亚洲'],
      regions: [
        '羌塘高原',
        '可可西里与三江源西部',
        '昆仑山与阿尔金山高原',
        '青藏高原东缘部分地区',
        '拉达克北部',
      ],
      countries: ['中国', '印度'],
      endemicTo: ['青藏高原'],
      range:
        '现生范围集中于青藏高原，主体位于中国西藏、青海和南疆，并延伸至四川西部部分地区；印度拉达克北部仅有小范围记录。海拔约 3,250 至 5,500 米。',
      center: { lat: 34.5, lng: 89 },
    },
    habitats: [
      {
        name: '高寒草原',
        realm: 'terrestrial',
        description:
          '低矮禾草、莎草和杂类草覆盖的开阔平地与缓丘，是主要觅食、越冬、交配和迁徙景观。',
        isPrimary: true,
      },
      {
        name: '高寒荒漠与荒漠草原',
        realm: 'terrestrial',
        description:
          '植被覆盖低，以稀疏禾草和矮灌木为主；部分迁徙和产仔景观属于这一类型。',
      },
      {
        name: '高寒草甸与河谷廊道',
        realm: 'terrestrial',
        description:
          '部分夏季活动区及迁徙路径经过莎草草甸、宽河谷和交通廊道附近的连续开阔地。',
      },
    ],
    measurements: {},
    diet: {
      types: ['herbivore'],
      foods: [
        '高寒草原禾草',
        '莎草',
        '高山杂类草',
        '矮灌木嫩枝和叶',
        '雪下冬季植物材料',
      ],
      description:
        '反刍混合取食者，随季节和生境在禾草、莎草、杂类草及矮灌木之间调整；冬季会扒开薄雪寻找植物。',
    },
    activity: [
      '主要在白昼取食、移动和警戒，夜间休息',
      '随性别、季节和繁殖阶段形成雄性群、雌幼群、混合群或独居状态',
      '非迁徙期常分散为小群，迁徙雌性可在局部形成大群',
      '部分雌性种群季节性往返产仔地，另有定居或机会性迁徙种群',
      '发情期集中在 11 至 12 月，雄性通过展示、追逐和低头威胁竞争',
    ],
    tags: [
      '青藏高原特有种',
      '高寒草原',
      '牛科',
      '部分种群长距离迁徙',
      '性别二型',
      '国家一级保护动物',
      '反盗猎恢复',
      'CITES 附录 I',
    ],
    summary:
      '青藏高原特有的牛科动物，雄性长有细长直立黑角，部分雌性每年迁往产仔地。反盗猎、保护地和贸易管制推动了恢复，近危状态仍依赖持续保护。',
    description:
      '藏羚生活在海拔约 3,250 至 5,500 米的开阔高寒草原与荒漠草原，现生分布跨越中国和印度。雌性无角，成熟雄性在发情期呈浅白婚装、近黑面部和四肢黑纹；两性鼻孔两侧都有功能尚未确定的圆鼓鼻囊。它们随季节取食禾草、莎草、杂类草和矮灌木。部分雌性种群会进行数百千米的季节迁徙并产下一只早成幼崽，另有种群全年定居。20 世纪沙图什贸易引发的商业盗猎曾造成严重下降，保护地、巡护、交通廊道和跨国贸易执法共同支撑了恢复。',
    storySections: [
      {
        key: 'conservation-dependent-recovery',
        label: '恢复与保护',
        title: '巡护和贸易管制推动种群恢复',
        body: '20 世纪商业盗猎使藏羚从历史百万量级降到 20 世纪 90 年代中期约 65,000 至 72,500 只。反盗猎、原生境保护和贸易管制推动种群恢复，IUCN 在 2016 年将它调整为近危并记录上升趋势。中国主管部门 2025 年公布中国野生藏羚超过 30 万只；这一行政估算与 2016 年 IUCN 全球估算采用不同年份和统计口径，不能拼成方法一致的增长曲线。',
      },
      {
        key: 'shahtoosh-trade',
        label: '历史盗猎',
        title: '一条披肩背后的数只藏羚',
        body: '藏羚细绒无法像家养山羊毛那样从活体剪取或梳取，获取沙图什原料会杀死动物；IUCN 公开资料估计一条披肩需要 3 至 5 张皮。纤维只有约 7 至不足 10 微米，也给海关和执法部门的材料识别增加难度。CITES 附录 I 和专项决议要求产地、加工地、转运地与消费地共同查缉商业贸易。',
      },
      {
        key: 'high-altitude-hemoglobin',
        label: '高原适应',
        title: '成年红细胞保留高亲氧性血红蛋白',
        body: '实验研究发现，成年藏羚持续表达高氧亲和力的幼年阶段血红蛋白亚型，而其他牛科动物通常在成年后换成亲和力较低的亚型。研究者还找到了相关珠蛋白基因调控变化。这个机制有实验依据；鼻囊是否参与高原呼吸仍没有得到证实。',
      },
      {
        key: 'female-led-migration',
        label: '迁徙与育幼',
        title: '长途往返的主角是部分怀孕雌性',
        body: '至少五个种群具有迁徙记录，怀孕雌性通常在 5 至 6 月前往产仔地，产下一只早成幼崽后在夏末返回。两只卫星追踪雌性的冬季地到夏季地距离约 250 至 300 千米，另一项研究也只获得少量有效个体年。雄性、定居种群和其他迁徙种群不会复制同一条路线或距离。',
      },
      {
        key: 'migration-corridors',
        label: '廊道与工程',
        title: '迁徙需要连续、低干扰的通道',
        body: '青藏铁路下方的跨越结构维持了迁徙连通，但通道位置、桥下杂物、地表恢复和现场围观会改变利用效率。卫星研究发现部分个体为到达通道偏离更优路线，长期监测也记录到利用率随时间调整。工程评估需要覆盖整条廊道，并在迁徙期限制施工、车辆和游客干扰。',
      },
      {
        key: 'male-seasonal-morphology',
        label: '性别与形态',
        title: '雄性的黑角与发情期浅色被毛',
        body: '只有雄性长一对细长、近直立的黑角，角基部有环纹，常见长度约 54 至 60 厘米；环纹不能准确判龄。发情期成熟雄性被毛转为浅色至白色，近黑面部和四肢前侧黑纹更加醒目。两性都有圆鼓鼻囊，雄性更明显，但发声或呼吸功能仍属于待检验解释。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1826 年的藏羚描述',
        body: '1826 年，Abel 以 Antelope Hodgsonii 正式描述藏羚，模式产地记录为西藏的 Tingri Maidan，即定日一带。它后来被归入藏羚属 Pantholops，现用名为 Pantholops hodgsonii。它的自然范围还延伸到印度拉达克，名称中的“藏”与青藏高原生活区域相符。',
      },
    ],
    keyFacts: [
      '藏羚是青藏高原特有种，现生分布国家包括中国和印度，不能写成中国特有种。',
      'IUCN 2016 年全球评估为近危、趋势上升，没有可录入的受胁标准代码。',
      'IUCN 2016 年公开估算约 10 万至 15 万只；中国主管部门 2025 年公布中国超过 30 万只，两套数字的年份、范围和方法不同。',
      '雄性有一对细长直立黑角，雌性无角；两性都没有醒目的白色臀盘。',
      '常见活动高度多在 4,000 米以上，物种专论汇总的完整海拔记录为 3,250 至 5,500 米。',
      '物种专论记录的成年小样本均值为雌性约 25.9 千克、雄性约 38.8 千克，不能当作全物种极值范围。',
      '部分种群季节迁徙，长距离迁徙以成年雌性和随行幼年雌性为主；另有定居种群。',
      '新生幼崽通常为单仔，可在出生后十余分钟站起，并在约一小时后跟随母兽。',
      '成年藏羚红细胞持续表达高氧亲和力的幼年阶段血红蛋白亚型，这是有实验支撑的高海拔适应。',
      '中国将藏羚列为国家一级重点保护野生动物，CITES 将其列入附录 I；CMS/CAMI 覆盖本种，但没有把它列入 CMS 附录。',
    ],
    threats: [
      '沙图什需求可能重新驱动商业盗猎、非法披肩加工和跨国贸易',
      '道路、铁路、矿业及相关设施造成生境破碎、迁徙绕行和现场干扰',
      '冬牧场围栏可能切断迁徙路径，牲畜和土地利用变化也会改变草场资源',
      '深雪和极端暴雪会提高幼体、雌性及营养不良个体的死亡风险',
      '家犬在部分深雪地区会捕杀幼年藏羚',
      '气候变化可能推动适生地收缩或北移，但幅度取决于模型情景和分布数据',
    ],
    conservationActions: [
      '维持反盗猎巡护、案件侦查和高风险季节执法，不因数量恢复削弱保护强度',
      '在产地、加工地、转运地和消费地查缉沙图什披肩，培训海关识别材料并减少市场需求',
      '保护羌塘、阿尔金山、昆仑山、可可西里和三江源西部之间的连续高原景观',
      '按整条迁徙廊道评估交通通道，移除桥下杂物、恢复地表，并在迁徙期限制现场干扰',
      '在关键迁徙景观避免新围栏，确需围栏时采用野生动物可通过的设计',
      '组合使用标准化样线、无人机和卫星追踪，并按年份、区域、季节、性别和方法发布结果',
      '监测极端天气、家犬和气候适生区变化，为廊道和冬季地管理保留调整空间',
    ],
    metrics: {
      elevationM: [3250, 5500],
    },
    featuredStats: [
      {
        key: 'adult-weight-sex-means',
        label: '成年体重',
        value: '雌约 26 / 雄约 39',
        unit: 'kg',
        note: '物种专论汇总的小样本性别均值，不是全物种范围',
      },
      {
        key: 'adult-shoulder-height-sex-means',
        label: '成年肩高',
        value: '雌约 74 / 雄约 83',
        unit: 'cm',
        note: '物种专论汇总的小样本性别均值，不是全物种范围',
      },
      {
        key: 'elevation',
        label: '海拔范围',
        value: '3,250–5,500',
        unit: 'm',
        note: '物种专论汇总记录；多数分布位于 4,000 米以上',
      },
      {
        key: 'male-horn-length',
        label: '雄性角长',
        value: '通常 54–60',
        unit: 'cm',
        note: '超过 70 厘米属极端记录，角环不能准确判龄',
      },
    ],
    media: {
      image: './images/species/tibetan-antelope/01-high-plateau-male-portrait.webp',
      alt: '一只完整成年雄性藏羚站在开阔高原右侧，细长直立黑角、深色面部、浅色被毛和四条纤长腿清楚可见',
      focalPoint: { x: 0.68, y: 0.57 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image: './images/species/tibetan-antelope/02-male-horns-and-winter-coat.webp',
          alt: '一只完整成年雄性藏羚侧身走过薄雪高寒草原，近直立环纹黑角、深色面部和浅色冬毛清楚可见',
          title: '发情期雄性的浅色被毛',
          caption:
            '细长黑角和浅色婚装能提示成年雄性；角环不能准确判龄，鼻囊功能也没有得到证实。',
          focalPoint: { x: 0.49, y: 0.53 },
        },
        {
          image: './images/species/tibetan-antelope/03-alpine-desert-steppe-habitat.webp',
          alt: '宽阔无树的高寒荒漠草原和浅河谷占据画面，一只小比例成年雄性藏羚站在右侧远处',
          title: '开阔、稀疏的高原家园',
          caption:
            '高寒草原、荒漠草原和部分河谷廊道共同组成活动范围；一幅重建景观不能代表全部分布区。',
          focalPoint: { x: 0.71, y: 0.58 },
        },
        {
          image: './images/species/tibetan-antelope/04-female-alpine-sedge-foraging.webp',
          alt: '一只完整无角成年雌性藏羚在低矮高寒莎草中低头取食，黄褐被毛、白色腹面和纤长四肢可见',
          title: '无角雌性的夏季菜单',
          caption:
            '禾草、莎草、杂类草和矮灌木的比例随地点与季节改变；画面只支持一次可见取食。',
          focalPoint: { x: 0.62, y: 0.57 },
        },
        {
          image: './images/species/tibetan-antelope/05-female-and-calf-migration.webp',
          alt: '一只无角成年雌性藏羚带着一只无角幼崽穿过开阔高原河谷，两只动物均完整可见',
          title: '部分雌性的产仔往返',
          caption:
            '部分雌性种群会迁往产仔地再带单仔返回；同框母幼不能证明路线、距离或种群身份。',
          focalPoint: { x: 0.5, y: 0.58 },
        },
        {
          image: './images/species/tibetan-antelope/06-noninvasive-plateau-monitoring.webp',
          alt: '两名研究人员在高原左侧使用观测镜和记录板，远处右侧只有一只成年雄性藏羚',
          title: '保持距离的长期计数',
          caption:
            '固定设计下的重复调查才能估算数量和趋势；这幅通用重建不代表命名项目、确认记录或公开监测点。',
          focalPoint: { x: 0.52, y: 0.62 },
        },
      ],
    },
    sources: TIBETAN_ANTELOPE_SOURCES,
    featured: true,
    publishedAt: TIBETAN_ANTELOPE_CONTENT_DATE,
    updatedAt: TIBETAN_ANTELOPE_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
