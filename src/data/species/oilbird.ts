import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const OILBIRD_SOURCE_DATE = '2026-09-03' as const;

const OILBIRD_CONTENT_DATE = '2026-09-03' as const;

const OILBIRD_SOURCES = [
  {
    title: 'AviList v2025b: Global avian checklist',
    url: 'https://www.avilist.org/checklist/v2025b/',
    kind: 'taxonomy',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'ITIS: Steatornis caripensis (TSN 555524)',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=555524',
    kind: 'taxonomy',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'GBIF Backbone Taxonomy: Steatornis caripensis',
    url: 'https://www.gbif.org/species/2497150',
    kind: 'taxonomy',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Oilbird species factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/oilbird-steatornis-caripensis',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Oilbird assessment history',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/history',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Oilbird country distribution',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/countries',
    kind: 'distribution',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Oilbird habitat classification',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/habitats',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Oilbird threat classification',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/2347/threats',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Holland et al. 2009: The Secret Life of Oilbirds',
    url: 'https://doi.org/10.1371/journal.pone.0008264',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Griffin 1953: Acoustic Orientation in the Oil Bird',
    url: 'https://doi.org/10.1073/pnas.39.8.884',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Konishi and Knudsen 1979: The oilbird, hearing and echolocation',
    url: 'https://doi.org/10.1126/science.441731',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Brinkløv et al. 2017: Oilbird echolocation under natural light conditions',
    url: 'https://doi.org/10.1098/rsos.170255',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Martin et al. 2004: The eyes of oilbirds',
    url: 'https://doi.org/10.1007/s00114-003-0495-3',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Snow 1961: The natural history of the oilbird, Part 1',
    url: 'https://doi.org/10.5962/p.203335',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Bosque et al. 1995: The Diet of the Oilbird in Venezuela',
    url: 'https://digitalcommons.usf.edu/ornitologia_neotropical/vol6/iss2/3/',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Stevenson et al. 2021: Oilbirds disperse large seeds at longer distance than extinct megafauna',
    url: 'https://doi.org/10.1038/s41598-020-79280-4',
    kind: 'ecology',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Parques Nacionales de Colombia: PNN Cueva de los Guácharos management plan',
    url: 'https://www.parquesnacionales.gov.co/wp-content/uploads/2022/09/plan-de-manejo-pnn-cueva-de-los-guacharos_adop-res-142_2022.pdf',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Parques Nacionales de Colombia: PNN Cueva de los Guácharos',
    url: 'https://www.parquesnacionales.gov.co/nuestros-parques/pnn-cueva-de-los-guacharos/',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'INPARQUES Venezuela: Cueva del Guácharo',
    url: 'https://www.inparques.gob.ve/Monumentos%20Nacionales/cueva-guacharo.html',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
  {
    title: 'Rutherford 2019: An Update on the Population of the Oilbird in Trinidad',
    url: 'https://ttfnc.org/livingworld/index.php/lwj/article/view/a2',
    kind: 'conservation',
    accessedAt: OILBIRD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-steatornis-caripensis',
    slug: 'oilbird',
    names: {
      zh: '油鸱',
      en: 'Oilbird',
      aliases: ['Steatornis caripensis', 'Guácharo', 'Pájaro aceite'],
    },
    scientificName: 'Steatornis caripensis',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Aves', '鸟纲'),
      taxon('Steatornithiformes', '油鸱目'),
      taxon('Steatornithidae', '油鸱科'),
      taxon('Steatornis', '油鸱属'),
    ),
    conservation: conservation('LC', 'stable', 2021),
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲', '南美洲'],
      regions: [
        '中美洲南部',
        '安第斯山地与山麓',
        '委内瑞拉沿海山地',
        '圭亚那地盾',
        '特立尼达岛',
        '南美洲北部与中部湿润森林',
      ],
      countries: [
        '玻利维亚',
        '巴西',
        '哥伦比亚',
        '哥斯达黎加',
        '厄瓜多尔',
        '圭亚那',
        '巴拿马',
        '秘鲁',
        '特立尼达和多巴哥',
        '委内瑞拉',
      ],
      range:
        '原生留居范围从哥斯达黎加和巴拿马延伸至南美洲北部、中部及特立尼达，主要依赖热带或亚热带湿润低地与山地森林。阿鲁巴与荷属加勒比的记录属于迷鸟，不能据此确认留居种群。',
      center: { lat: 3, lng: -72 },
    },
    habitats: [
      {
        name: '热带与亚热带湿润低地森林',
        realm: 'terrestrial',
        description:
          '主要留居和取食生境，提供富脂果实、夜间觅食树与部分洞外日栖树。',
        isPrimary: true,
      },
      {
        name: '热带与亚热带湿润山地森林',
        realm: 'terrestrial',
        description:
          '山地和山麓适生森林；当前评估采用的海拔范围延伸到约3,400米，这不是生理耐受极限。',
      },
      {
        name: '非水生洞穴与岩洞',
        realm: 'terrestrial',
        description:
          '主要繁殖生境，也是群体日栖、求偶、孵卵和育雏地点；洞穴外的连续森林同样属于完整生活网络。',
        isPrimary: true,
      },
    ],
    measurements: {
      length: {
        typical: 46,
        unit: 'cm',
        note: 'Snow 1961对成鸟全长约18英寸的换算代表值，不是物种级范围',
      },
      weight: {
        typical: 0.42,
        unit: 'kg',
        note: '2007年委内瑞拉12只成鸟平均419.7 ± 4.2克，误差为标准误',
      },
      wingspan: {
        min: 91,
        max: 107,
        unit: 'cm',
        note: 'Snow 1961对3–3.5英尺近似描述的厘米换算，不是系统种群抽样范围',
      },
    },
    diet: {
      types: ['herbivore'],
      foods: [
        '富脂月桂科果实',
        '棕榈果',
        '橄榄科果实',
        '其他森林树木果实',
      ],
      description:
        '油鸱在夜间专门取食森林果实，常整果吞下，再吐出完整种子。委内瑞拉与哥伦比亚研究均显示月桂科和棕榈科的重要性，具体食物植物随地点和季节改变。',
    },
    activity: [
      '夜行性取食',
      '洞穴日栖',
      '树冠日栖',
      '群居繁殖',
      '远距离觅食',
      '点击回声定位',
      '整果吞食与吐籽传播',
    ],
    tags: [
      '中美洲',
      '南美洲',
      '洞穴',
      '湿润森林',
      '夜行鸟',
      '回声定位',
      '食果鸟',
      '种子传播',
      '远距离移动',
      'IUCN无危',
    ],
    summary:
      '油鸱白天在热带美洲的洞穴或森林树冠休息，夜间飞出去吃富脂果实。它能用点击声在黑暗洞道中回声定位，并把吞下果实的种子带到远处。',
    description:
      '油鸱有褐色白斑羽毛、宽口裂、长口须和长尾，是油鸱目唯一现生种。它在湿润森林中寻找月桂科、棕榈科等植物的果实，消化果肉后吐出完整种子。洞穴是群体繁殖与日栖的重要地点，GPS 研究也记录到个体白天停在洞外树上。2021 年评估将它列为无危、趋势稳定，但成熟个体估计质量较低；保护需要同时照顾繁殖洞穴、果源林和森林通道。',
    storySections: [
      {
        key: 'cave-clicks',
        label: '洞穴声场',
        title: '点击声帮助绕开黑暗中的障碍',
        body: '油鸱能在全黑洞穴中靠点击声的回声绕开障碍。早期实验记录到人耳可听的声能；现代野外阵列又发现，每串通常含2至5个点击、短于10毫秒，许多能量延伸到高频和超声范围。月光变亮时，它们减少点击数与声能，显示视觉和回声定位会共同塑造飞行。',
      },
      {
        key: 'fruit-flight',
        label: '夜间取食',
        title: '夜间飞到树冠吞食果实',
        body: '夜幕下，油鸱飞入湿润森林，在果树前短暂悬停或掠过，把整枚果实吞入口中。委内瑞拉研究记录的食物以月桂科和棕榈科为主，其中月桂科果肉样本含脂很高。植物清单会随地点与季节改变，油鸱的食物以森林果实为核心。',
      },
      {
        key: 'forest-roosts',
        label: '洞外一天',
        title: '有些个体白天停在洞外树上',
        body: 'GPS 记录发现，部分个体在洞外森林中日栖。2007年委内瑞拉研究的7只有效空间记录个体，曾连续在外活动并在森林树上安静度过白天；研究期内洞外日栖时间占66 ± 8%。这是短期局地结果，却足以证明树冠也是生活史的一部分。',
      },
      {
        key: 'seed-distance',
        label: '森林运输者',
        title: '吐出的种子能落到远处森林',
        body: '油鸱消化果肉，再吐出完整种子。哥伦比亚研究收集到至少52种植物的种子，并用3只鸟的GPS轨迹与保留时间估算出10.1千米的平均传播距离，模型范围达到47.6千米。这个结果描述传播潜力，不代表每一粒种子都走完同样路线。',
      },
      {
        key: 'fat-nestlings',
        label: '漫长育雏',
        title: '雏鸟积累的脂肪与“油鸱”之名',
        body: '洞穴台地上的雏鸟通常要95至120天才离巢。特立尼达样本在约70日龄可重560至650克，超过论文记录的成鸟平均体重，之后再随着飞羽生长减重。历史上人们曾取雏鸟熬油，英文名由此留下。',
      },
      {
        key: 'cave-and-corridor',
        label: '保护网络',
        title: '洞穴与果源林需要共同保护',
        body: '2021年全球评估仍把油鸱列为无危、趋势稳定，但哥伦比亚管理计划记录了巢期灯光干扰、零星捕猎与周边森林破碎化。委内瑞拉追踪点中约四成取食和森林日栖位置在国家公园外。洞穴管理、果源林保护、生态廊道和长期计数必须放在同一张地图上。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1817 年命名的夜间食果鸟',
        body: 'Humboldt 在 1817 年正式命名油鸱，现用名称为 Steatornis caripensis。它的英语俗名 oilbird 与雏鸟积累大量脂肪、历史上曾被用于熬油有关。现代研究还发现，它会在洞外树冠休息，并把大种子传播到远处，这些观察扩展了人们对其洞穴生活的认识。',
      },
    ],
    keyFacts: [
      'AviList v2025b将油鸱列为油鸱目、油鸱科和油鸱属唯一现存物种。',
      '它在热带或亚热带湿润森林留居，并以非水生洞穴作为主要繁殖生境。',
      '当前BirdLife原生留居清单覆盖中美洲和南美洲共10个国家。',
      '成鸟全长常概括为约46厘米，翼展约91至107厘米，均为早期近似描述。',
      '2007年委内瑞拉12只成鸟平均体重为419.7 ± 4.2克。',
      '宽口裂、钩曲具缺刻的喙、长口须和阶梯状长尾是重要外形线索。',
      '油鸱夜间取食果实，不像夜鹰那样在空中追捕昆虫。',
      '委内瑞拉一处种群记录32种食物植物，以月桂科和棕榈科最丰富。',
      '该研究的月桂科果肉干物质平均含脂49.6%，属于地点级食物样本。',
      '哥伦比亚洞穴种子收集得到至少52种植物，最大种子宽29毫米。',
      '哥伦比亚3只GPS个体支持的传播核均值为10.1千米，属于模型估计。',
      '委内瑞拉有效空间记录的7只个体中，单个最远觅食点离洞73.5千米。',
      '同一短期研究中，洞外森林日栖时间占66 ± 8%。',
      '油鸱在全黑环境使用点击回声定位，声信号含人耳可听成分，也有大量高频和超声能量。',
      '2017年野外点击串通常含2至5个点击，整串短于10毫秒。',
      '视网膜研究测得约100万根杆状感光细胞每平方毫米，但高灵敏度伴随较低分辨率。',
      '特立尼达研究记录正常窝卵数2至4枚、孵化期32至35天。',
      '雏鸟通常95至120天离巢，并在羽毛长成前积累大量脂肪。',
      'BirdLife最后发布的2021年记录为无危、趋势稳定且没有判据字符串；访问日页面提示正在重评。',
      '20,000 至 49,999只成熟个体是2021年评估采用的2019年suspected、poor-quality估计带，不是同步普查。',
    ],
    threats: [
      '地点级：繁殖期访客用白光或黄光直射洞穴巢位，可使成鸟仓促离巢，并造成卵或雏鸟坠落。',
      '地点级：哥伦比亚保护地周边仍记录零星捕猎，现行管理计划将其评为轻度风险并要求维持预防和执法。',
      '地点级：保护地周边农业扩张、单一种植、砍伐与焚烧会切断亚山地森林连通性，并影响远离繁殖洞穴的果源林。',
      '保护缺口：委内瑞拉追踪研究约四成取食点和森林日栖点位于国家公园外，单独保护洞口无法覆盖完整活动网络。',
    ],
    conservationActions: [
      '在繁殖洞穴维持巡护和禁猎，并按巢期监测动态限制人员靠近巢台。',
      '规范洞穴游览，禁止用白光或黄光直射巢鸟；哥伦比亚管理计划建议由向导使用红外观察设备。',
      '保护并恢复洞穴之外的湿润低地、山地森林和关键果源树群，优先连接日栖树、取食地与繁殖洞穴。',
      '让相邻国家公园、区域保护地、市镇和私人保护区共同实施生态廊道与缓冲区管理。',
      '持续进行标准化洞穴计数、繁殖成功率、洞外移动和食物植物物候监测，避免把季节变化误判为长期趋势。',
    ],
    metrics: {
      wingspanCm: [91, 107],
      elevationM: [0, 3400],
      estimatedMatureIndividuals: [20000, 49999],
    },
    featuredStats: [
      {
        key: 'adult-wingspan',
        label: '成鸟翼展',
        value: '约91–107',
        unit: '厘米',
        note: 'Snow 1961对3 至 3.5英尺的换算近似值，不是全范围抽样上下限',
      },
      {
        key: 'click-burst-duration',
        label: '点击脉冲串',
        value: '<10',
        unit: '毫秒',
        note: '特立尼达野外阵列录音；通常每串2 至 5个点击，57段飞行序列、285个脉冲串',
      },
      {
        key: 'tracked-foraging-maximum',
        label: '最远觅食点',
        value: '73.5',
        unit: '千米',
        note: '2007年委内瑞拉研究中1只有效GPS个体的单次最大值，不是物种能力上限',
      },
      {
        key: 'modelled-seed-dispersal-mean',
        label: '种子传播均值',
        value: '10.1',
        unit: '千米',
        note: '哥伦比亚3只GPS个体与种子保留时间构建的总传播核，n=654，不是逐粒回收距离',
      },
    ],
    media: {
      image:
        './images/species/oilbird/01-cave-entrance-perch-cover.webp',
      alt: '暮色中的湿润森林洞口，恰好一只完整的褐色白斑油鸱停在画面右侧岩台，折叠双翼和长尾在画内，足部轮廓在岩台上重叠',
      focalPoint: { x: 0.61, y: 0.48 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/oilbird/02-spotted-plumage-profile.webp',
          alt: '洞内岩台上，恰好一只完整油鸱侧身蹲栖，褐色白斑羽衣、大眼、钩喙、前伸口须、短腿、折叠双翼和长尾清楚可见',
          title: '钩喙、口须与白斑羽衣',
          caption:
            'AI生成科学情景重建；侧面形态可辅助辨认油鸱，画面没有尺标，不能测量体长、翼展或体重，也不能据羽色判定性别。',
          focalPoint: { x: 0.55, y: 0.52 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/oilbird/03-cave-echolocation-flight.webp',
          alt: '昏暗洞道中，恰好一只完整的褐色白斑油鸱展翼飞行，双翼和扇开的长尾都在画内，左后方可见微弱冷色洞口光',
          title: '幽暗洞道里的飞行',
          caption:
            'AI生成科学情景重建；油鸱会在黑暗洞穴中使用点击回声定位，但静帧只能表现一只完整飞鸟和洞穴环境，不能证明它正在发声或测量点击频率。',
          focalPoint: { x: 0.57, y: 0.47 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/oilbird/04-nocturnal-fruit-foraging.webp',
          alt: '夜间湿润森林树冠中，恰好一只完整油鸱在深色卵形果实枝旁短暂机动，喙接触一枚完整果实，双翼、双足和长尾均可见',
          title: '森林树冠前的一口整果',
          caption:
            'AI生成科学情景重建；油鸱会短暂悬停或掠过果枝并整果吞食，果枝只代表常见富脂森林果实，不作植物种鉴定，也不证明吞咽或传播距离。',
          focalPoint: { x: 0.58, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image: './images/species/oilbird/05-cave-ledge-colony.webp',
          alt: '昏暗宽阔洞穴内，恰好六只褐色白斑油鸱分别停在不同天然岩台上，每只鸟的头、身体和尾部均可区分',
          title: '洞穴岩台上的六只群栖鸟',
          caption:
            'AI生成科学情景重建；恰好六只可分别计数的鸟只用于表达洞穴群栖，不能当作典型群体规模、种群计数、性别比例、配对或繁殖状态。',
          focalPoint: { x: 0.55, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/oilbird/06-adult-and-feathering-chick.webp',
          alt: '昏暗洞穴宽岩台上，恰好一只完整成鸟站在一只体型饱满、仍带残余绒羽且正长出褐色白斑羽毛的大雏鸟旁',
          title: '羽衣渐成的洞穴大雏鸟',
          caption:
            'AI生成科学情景重建；画面是一只成鸟与一只长羽中的大雏鸟，不能确认亲缘、精确日龄、体重、性别、离巢日期或存活结局。',
          focalPoint: { x: 0.56, y: 0.57 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: OILBIRD_SOURCES,
    featured: true,
    publishedAt: OILBIRD_CONTENT_DATE,
    updatedAt: OILBIRD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
