import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sperm-whale",
  "slug": "sperm-whale",
  "names": {
    "zh": "抹香鲸",
    "en": "Sperm Whale"
  },
  "scientificName": "Physeter macrocephalus",
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
      "scientificName": "Cetacea",
      "zhName": "鲸目"
    },
    "family": {
      "scientificName": "Physeteridae",
      "zhName": "抹香鲸科"
    },
    "genus": {
      "scientificName": "Physeter",
      "zhName": "抹香鲸属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "大西洋",
      "太平洋",
      "印度洋"
    ],
    "countries": [],
    "range": "分布于世界各大洋的适宜深水海域。雌性与幼鲸多在温暖水域活动，成年雄性也会到较冷的高纬度海域。"
  },
  "habitats": [
    {
      "name": "海洋深水区",
      "realm": "marine",
      "description": '深水海域让抹香鲸寻找鱿鱼和鱼类，海面是换气的位置。雌鲸和幼鲸多在温暖水域，成年雄鲸还会前往高纬度冷水。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱿鱼",
      "鱼类"
    ],
    "description": "潜入深水寻找鱿鱼和鱼类，利用声音感知水下环境和猎物。"
  },
  "tags": [
    "抹香鲸",
    "大大的头和渐细的尾部"
  ],
  "summary": "抹香鲸头部很大，下颌窄，身体向尾部逐渐变细。它属于齿鲸，用肺呼吸，需要回到海面换气。",
  "description": '抹香鲸的灰色皮肤常有褶皱，胸鳍较小。它潜入深水，以声音感知环境和鱿鱼、鱼类，之后回海面呼吸；雌鲸和幼鲸生活在社会群体中，幼鲸从母亲处吃奶。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '大头与窄下颌',
      body: '抹香鲸头部很大、下颌窄，身体向尾部逐渐变细。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '回到海面呼吸',
      body: '呼吸孔位于头部前端偏左，喷气雾向前侧倾斜；气雾来自呼吸孔。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '向深处潜下去',
      body: '它潜入深水找食物，之后需要回到海面用肺呼吸。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '小胸鳍与褶皱皮肤',
      body: '灰色皮肤常有褶皱，身体两侧的胸鳍较小。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '幼鲸跟在身边',
      body: '雌鲸与幼鲸生活在社会群体中，幼鲸从母亲那里吃奶。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: 'IUCN 全球等级为易危；美国《濒危物种法》的濒危认定属于另一制度。历史捕鲸使种群大幅减少，如今还面临缠绕、碰撞和噪声等影响。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '抹香鲸与曾经神秘的龙涎香',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Physeter macrocephalus。它的英文名 Sperm Whale 来自头部的鲸蜡物质。龙涎香则是另一种物质，在少数抹香鲸的消化系统中形成，曾用于香水；人们使用它很久，后来才确认它与抹香鲸有关。',
    },
  ],
  "keyFacts": [
    '抹香鲸头部很大、下颌窄，身体向尾部逐渐变细。',
    '呼吸孔位于头部前端偏左，喷气雾向前侧倾斜；气雾来自呼吸孔。',
    '它潜入深水找食物，之后需要回到海面用肺呼吸。',
    '灰色皮肤常有褶皱，身体两侧的胸鳍较小。',
    '雌鲸与幼鲸生活在社会群体中，幼鲸从母亲那里吃奶。',
  ],
  "threats": [
    "渔具缠绕",
    "船舶碰撞",
    "海洋噪声",
    "历史捕鲸影响"
  ],
  "conservationActions": [
    "减少渔具缠绕",
    "降低船舶碰撞风险",
    "减少海洋噪声"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大大的头和渐细的尾部"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "海洋深水区"
    }
  ],
  "media": {
    "image": "./images/species/sperm-whale/01-cover.webp",
    "alt": "抹香鲸的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sperm-whale/02-observation.webp",
        "title": "大头与窄下颌",
        "alt": '大头与窄下颌',
        "caption": "AI 生成科学情景重建。看看它大大的头，再找找头部下面窄窄的下颌。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sperm-whale/03-observation.webp",
        "title": "回到海面呼吸",
        "alt": '回到海面呼吸',
        "caption": "AI 生成科学情景重建。呼吸孔位于头部前端偏左处。海面上的喷气雾向前侧倾斜，不是从嘴里喷水。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sperm-whale/04-observation.webp",
        "title": "向深处潜下去",
        "alt": '向深处潜下去',
        "caption": "AI 生成科学情景重建。抹香鲸潜入深水寻找食物，之后还要回到海面呼吸。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sperm-whale/05-observation.webp",
        "title": "小胸鳍与褶皱皮肤",
        "alt": '小胸鳍与褶皱皮肤',
        "caption": "AI 生成科学情景重建。在大身体旁找找较小的胸鳍，再看看灰色皮肤上的褶皱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sperm-whale/06-observation.webp",
        "title": "幼鲸跟在身边",
        "alt": '幼鲸跟在身边',
        "caption": "AI 生成科学情景重建。雌鲸与幼鲸生活在社会群体中，幼鲸从母亲那里吃奶。",
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
      "title": "Sperm Whale：分类与生态资料",
      "url": "https://www.fisheries.noaa.gov/species/sperm-whale",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "Sperm Whale：保护状况",
      "url": "https://iucn-csg.org/red-list-updates-published-for-sperm-whales-and-lahilles-bottlenose-dolphins/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "抹香鲸：形态与生活习性",
      "url": "https://www.fisheries.noaa.gov/species/sperm-whale",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "ADW：抹香鲸分类（页面使用异名 Physeter catodon）",
      "url": "https://animaldiversity.org/accounts/Physeter_catodon/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Physeter macrocephalus 的命名作者与年份',
      url: 'https://www.gbif.org/species/8123917',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
    {
      title: 'Natural History Museum：龙涎香的来源与历史',
      url: 'https://www.nhm.ac.uk/discover/what-is-ambergris.html',
      kind: 'general',
      accessedAt: '2026-10-11',
    },
    {
      title: 'NCBI MeSH：Sperm Whale 名称来源',
      url: 'https://www.ncbi.nlm.nih.gov/mesh/D050661',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
