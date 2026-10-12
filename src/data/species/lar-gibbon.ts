import type { Species } from '../../types/species.ts';

const profile = {
  "id": "lar-gibbon",
  "slug": "lar-gibbon",
  "names": {
    "zh": "白掌长臂猿",
    "en": "Lar Gibbon",
    "aliases": [
      "白手长臂猿"
    ]
  },
  "scientificName": "Hylobates lar",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Chordata",
      "zhName": "脊索动物门"
    },
    "class": {
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Primates",
      "zhName": "灵长目"
    },
    "family": {
      "scientificName": "Hylobatidae",
      "zhName": "长臂猿科"
    },
    "genus": {
      "scientificName": "Hylobates",
      "zhName": "长臂猿属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "unknown",
    "assessor": '全球等级为 EN（濒危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "东南亚的热带森林"
    ],
    "countries": [
      "泰国",
      "缅甸",
      "马来西亚",
      "印度尼西亚"
    ],
    "range": "东南亚的热带森林。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "东南亚的热带森林",
      "realm": "terrestrial",
      "description": "东南亚的热带森林。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "树叶",
      "花",
      "昆虫"
    ],
    "description": "食物包括果实、树叶、花、昆虫。"
  },
  "tags": [
    "白掌长臂猿",
    "长胳膊吊住身体"
  ],
  "summary": '白掌长臂猿用长臂在树冠悬挂、摆荡，主要吃果实。手脚有白毛，身体毛色可深可浅，不能据此分辨性别。',
  "description": '白掌长臂猿生活在东南亚热带森林，没有尾巴，靠长臂交替抓枝、悬挂摆荡。白毛覆盖手脚，浅色毛围着黑脸，身体毛色可深可浅，雌雄都可能出现这两类颜色。它主要吃果实，也吃叶、花和昆虫；家庭成员用叫声联系，幼猿早期抓着母猿的毛随行。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '长胳膊吊住身体',
      body: '白掌长臂猿用手抓住树枝，把身体吊在下面。它能交替换手在树间摆荡；这张图展示的是双手悬挂的一个姿态。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '手里拿着果实',
      body: '找找果实旁边的白色手毛。它主要吃果实，也吃树叶、花和昆虫。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '也有浅色的毛',
      body: '这只白掌长臂猿长着浅色毛。雌雄都可能是深色或浅色，不能只靠毛色分辨性别。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '小猿抓住妈妈',
      body: '小猿用手脚抓住妈妈的毛，跟着她在树上活动。长大后，它才慢慢练习自己悬挂和移动。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树林里的叫声',
      body: '同伴会用叫声联系，也会一起鸣叫，向附近的长臂猿表示这里已有家庭生活。图中的张嘴姿态用于说明鸣叫。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护相连的树冠和森林，减少捕猎与野生动物交易。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '白掌比全身毛色更好记',
      body: 'Linnaeus 在 1771 年发表了白掌长臂猿的科学描述，今天采用 Hylobates lar。中文名点出手脚上的白毛，英文俗名也称 White-handed Gibbon。身体毛色有深有浅，雌雄都可能如此，所以不能把“浅色长臂猿”直接当成雌性。',
    },
  ],
  "keyFacts": [
    "白掌长臂猿用手抓住树枝，把身体吊在下面。它能交替换手在树间摆荡；这张图展示的是双手悬挂的一个姿态。",
    "找找果实旁边的白色手毛。它主要吃果实，也吃树叶、花和昆虫。",
    "这只白掌长臂猿长着浅色毛。雌雄都可能是深色或浅色，不能只靠毛色分辨性别。",
    "小猿用手脚抓住妈妈的毛，跟着她在树上活动。长大后，它才慢慢练习自己悬挂和移动。",
    "同伴会用叫声联系，也会一起鸣叫，向附近的长臂猿表示这里已有家庭生活。图中的张嘴姿态用于说明鸣叫。"
  ],
  "threats": [
    "森林砍伐与破碎化",
    "捕猎和宠物交易"
  ],
  "conservationActions": [
    "保护相连的树冠和森林，减少捕猎与野生动物交易。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长胳膊吊住身体"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "东南亚的热带森林"
    }
  ],
  "media": {
    "image": "./images/species/lar-gibbon/01-cover.webp",
    "alt": "白掌长臂猿在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/lar-gibbon/02-observation.webp",
        "title": "长胳膊吊住身体",
        "alt": "白掌长臂猿：长胳膊吊住身体",
        "caption": "AI 生成科学情景重建。白掌长臂猿用手抓住树枝，把身体吊在下面。它能交替换手在树间摆荡；这张图展示的是双手悬挂的一个姿态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lar-gibbon/03-observation.webp",
        "title": "手里拿着果实",
        "alt": "白掌长臂猿：手里拿着果实",
        "caption": "AI 生成科学情景重建。找找果实旁边的白色手毛。它主要吃果实，也吃树叶、花和昆虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lar-gibbon/04-observation.webp",
        "title": "也有浅色的毛",
        "alt": "白掌长臂猿：也有浅色的毛",
        "caption": "AI 生成科学情景重建。这只白掌长臂猿长着浅色毛。雌雄都可能是深色或浅色，不能只靠毛色分辨性别。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lar-gibbon/05-observation.webp",
        "title": "小猿抓住妈妈",
        "alt": "白掌长臂猿：小猿抓住妈妈",
        "caption": "AI 生成科学情景重建。小猿用手脚抓住妈妈的毛，跟着她在树上活动。长大后，它才慢慢练习自己悬挂和移动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/lar-gibbon/06-observation.webp",
        "title": "树林里的叫声",
        "alt": "白掌长臂猿：树林里的叫声",
        "caption": "AI 生成科学情景重建。同伴会用叫声联系，也会一起鸣叫，向附近的长臂猿表示这里已有家庭生活。图中的张嘴姿态用于说明鸣叫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "sources": [
    {
      "title": "台北市立动物园：白手长臂猿分类与形态",
      "url": "https://www.zoo.gov.taipei/News_Content.aspx?n=8A35FDA6483C8C40&s=F2D19E6E4879477A&sms=7BD336E90DA476DA",
      "kind": "taxonomy",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "哥本哈根动物园：毛色、生活与濒危状态",
      "url": "https://www.zoo.dk/en/animal-encyclopedia/white-handed-gibbon",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "拉帕尔米尔动物园：幼猿与家庭生活",
      "url": "https://www.zoo-palmyre.fr/en/birth-lar-gibbon",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：白掌长臂猿的科学命名记录',
      url: 'https://www.gbif.org/species/5219553',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
