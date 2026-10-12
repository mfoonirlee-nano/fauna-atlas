import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eastern-honey-bee",
  "slug": "eastern-honey-bee",
  "names": {
    "zh": "东方蜜蜂",
    "en": "Eastern Honey Bee",
    "aliases": []
  },
  "scientificName": "Apis cerana",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Arthropoda",
      "zhName": "节肢动物门"
    },
    "class": {
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Hymenoptera",
      "zhName": "膜翅目"
    },
    "family": {
      "scientificName": "Apidae",
      "zhName": "蜜蜂科"
    },
    "genus": {
      "scientificName": "Apis",
      "zhName": "蜜蜂属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NE",
    "label": {
      "zh": "未评估",
      "en": "Not Evaluated"
    },
    "trend": "unknown",
    "assessor": "未取得可核实的全球物种评估"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "林缘、花地与农田"
    ],
    "countries": [
      "中国",
      "日本",
      "韩国",
      "泰国"
    ],
    "range": "原生于亚洲，分布涵盖东亚、南亚和东南亚。中国各地蜂群存在种下差异；中华蜜蜂通常指其中的一个亚种，并非整个物种的同义名称。",
    "center": {
      "lat": 30,
      "lng": 110
    }
  },
  "habitats": [
    {
      "name": "林缘、花地与农田",
      "realm": "terrestrial",
      "description": '利用林缘、花地和农田中的开花植物采集食物，在附近树洞等空腔筑巢。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "nectarivore",
      "herbivore"
    ],
    "foods": [
      "花蜜",
      "花粉"
    ],
    "description": "工蜂从花朵采集花蜜和花粉，带回巢内供蜂群利用；花粉提供蛋白质等营养。"
  },
  "activity": [
    "日行性",
    "社会性"
  ],
  "tags": [
    "摆尾舞传信",
    "林缘、花地与农田"
  ],
  "summary": "东方蜜蜂的工蜂回巢后会跳摆尾舞，把食物所在的方向和距离传给同伴。跟舞的工蜂还会接触舞者，获取与花源有关的气味。",
  "description": '东方蜜蜂在树洞等空腔中筑造多片蜡脾，也能住进人工蜂箱。它与西方蜜蜂是不同物种；东方蜜蜂内部还有多个亚种，各地外形和习性存在差异。',
  "storySections": [
    {
      key: 'identity',
      label: '认识蜂群',
      title: '一个巢里有不同分工',
      body: '蜂王主要产卵，工蜂承担育幼、筑巢、守卫和采集等工作，雄蜂参与繁殖。巢外花上的小蜜蜂多为工蜂；不能只凭腹部颜色判断蜂王或亚种。',
    },
    {
      key: 'dance',
      label: '摆尾舞',
      title: '用舞蹈指向花源',
      body: '工蜂在竖直巢脾上摆尾跑动，再绕回重复。摆尾跑动与竖直向上方向的夹角，表示花源相对于太阳的方向；摆尾持续多久，则传递距离信息。跟舞的工蜂还会接触舞者，利用花源气味寻找食物。',
    },
    {
      key: 'pollen',
      label: '后腿花粉篮',
      title: '把花粉装在后腿上',
      body: '工蜂身上的毛会沾上花粉，它用足梳理并把花粉聚在后腿的花粉篮。花粉团是采集来的食物，并非腿部生出的黄色器官。',
    },
    {
      key: 'nest',
      label: '蜡脾育幼',
      title: '六角巢房里养育下一代',
      body: '工蜂分泌蜂蜡并修筑巢脾，蜂王在巢房中产卵。幼虫由工蜂喂养，之后化蛹，再羽化成为成蜂；开放巢房里的白色幼虫还没有成年蜜蜂的体形。',
    },
    {
      key: 'pollination',
      label: '访花传粉',
      title: '采食时也传递花粉',
      body: '工蜂在花朵之间移动时，身体携带的花粉可能到达另一朵花的柱头。多样且花期相接的植物能为蜂群提供持续食物，单一短花期不能满足整年的采集需要。',
    },
    {
      key: 'conservation',
      label: '花源与巢址',
      title: '给野生蜂群留下住处',
      body: '保留开花植物和适宜巢址，减少花期不必要的杀虫剂使用，能帮助野生蜂群。东方蜜蜂的全球 IUCN 物种评估尚未核实，按未评估收录，野生蜂群的风险仍需持续调查。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '东方蜜蜂不等于一个亚种',
      body: 'Fabricius 于 1793 年描述了这个物种，现用学名为 Apis cerana。东方蜜蜂原生于亚洲，物种内部还有种下差异。“中华蜜蜂”通常指其中一个亚种，不能替代整个物种的名字。研究者观察摆尾舞时，还能读出花源相对于太阳的方向和距离。',
    },
  ],
  "keyFacts": [
    '蜂王主要产卵，工蜂育幼、筑巢、守卫和采集。',
    '摆尾舞传递花源相对于太阳的方向和距离。',
    '工蜂把花粉梳理成团，装在后腿花粉篮中。',
    '工蜂分泌蜂蜡筑巢，幼虫在巢房中成长。',
    '采食时身体带着的花粉可能传到另一朵花的柱头。',
  ],
  "threats": [
    "花源减少和巢址丧失。",
    "不当施药与蜂群病原传播。"
  ],
  "conservationActions": [
    "保留连续花期的本地植物。",
    "观察野生巢穴时保持距离，不挖巢取蜜。"
  ],
  "featuredStats": [
    {
      "key": "trait",
      "label": "观察重点",
      "value": "摆尾舞传信"
    },
    {
      "key": "development",
      "label": "发育方式",
      "value": "完全变态"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 东方蜜蜂分类",
      "url": "https://www.gbif.org/species/1341979",
      "kind": "taxonomy",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "Apidologie — 东方蜜蜂舞蹈参数",
      "url": "https://link.springer.com/article/10.1007/s13592-023-00990-5",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "IUCN — 泰国红树林东方蜜蜂与社区保护",
      "url": "https://iucn.org/news/asia/201612/bees-income-generator-and-mangrove-conservation-tool-community-thailand",
      "kind": "general",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "DCCEEW — 东方蜜蜂的采集与巢址",
      "url": "https://www.dcceew.gov.au/environment/invasive-species/insects-and-other-invertebrates/invasive-bees",
      "kind": "general",
      "accessedAt": "2026-09-08"
    }
  ],
  "media": {
    "image": "./images/species/eastern-honey-bee/01-cover.webp",
    "alt": "东方蜜蜂位于画面右侧，完整主体周围保留环境。",
    "focalPoint": {
      "x": 0.84,
      "y": 0.37
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eastern-honey-bee/02-body.webp",
        "title": "工蜂的外形",
        "alt": '工蜂在花上停留，可观察胸部绒毛、触角和翅。',
        "caption": "工蜂在花上停留，可观察胸部绒毛、触角和翅。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-honey-bee/03-detail.webp",
        "title": "后腿上的花粉团",
        "alt": '工蜂把采来的花粉聚集在后腿花粉篮中。',
        "caption": "工蜂把采来的花粉聚集在后腿花粉篮中。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-honey-bee/04-behavior.webp",
        "title": "巢脾上的工蜂",
        "alt": '工蜂在蜡脾上活动；静态重建图不表示一套可解码的舞蹈路线。',
        "caption": "工蜂在蜡脾上活动；静态重建图不表示一套可解码的舞蹈路线。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-honey-bee/05-life.webp",
        "title": "巢房中的幼虫",
        "alt": '开放巢房中的白色幼虫由工蜂照料。为展示内部而呈现的巢脾视角不表示野生巢脾水平摆放。',
        "caption": "开放巢房中的白色幼虫由工蜂照料。为展示内部而呈现的巢脾视角不表示野生巢脾水平摆放。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-honey-bee/06-habitat.webp",
        "title": "林缘与开花植物",
        "alt": '开花植物和附近林地分别提供采集机会与潜在巢址。',
        "caption": "开花植物和附近林地分别提供采集机会与潜在巢址。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-08",
  "updatedAt": "2026-09-08"
} as const satisfies Species;

export default profile;
