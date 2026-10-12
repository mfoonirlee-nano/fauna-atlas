import type { Species } from '../../types/species.ts';

const profile = {
  "id": "narwhal",
  "slug": "narwhal",
  "names": {
    "zh": "独角鲸",
    "en": "Narwhal"
  },
  "scientificName": "Monodon monoceros",
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
      "scientificName": "Monodontidae",
      "zhName": "一角鲸科"
    },
    "genus": {
      "scientificName": "Monodon",
      "zhName": "一角鲸属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "unknown",
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲",
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "北冰洋大西洋扇区"
    ],
    "countries": [
      "加拿大",
      "丹麦（格陵兰）",
      "挪威",
      "俄罗斯"
    ],
    "range": "主要生活在加拿大北极群岛、格陵兰至俄罗斯附近的北冰洋海域，随海冰变化往返近岸与外海。地图点仅代表巴芬湾附近。",
    "center": {
      "lat": 73,
      "lng": -65
    }
  },
  "habitats": [
    {
      "name": "北极海冰与开阔水道",
      "realm": "marine",
      "description": '利用北极海冰间的裂隙和开阔水道换气，随季节在近岸与外海之间移动，潜水寻找鱼、鱿鱼和虾。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "北极鱼类",
      "鱿鱼",
      "虾"
    ],
    "description": "独角鲸会潜水寻找鱼、鱿鱼和虾，用口部的吸力捕获猎物。它们常结成小群，群体大小随季节变化。"
  },
  "tags": [
    "独角鲸",
    "带螺旋纹的长牙"
  ],
  "summary": "雄性独角鲸通常有一根带螺旋纹的长牙，从上颌左侧向前伸出。它的背上没有背鳍。",
  "description": '独角鲸背上没有背鳍，只有低矮隆脊。多数雌鲸没有外露长牙，少数也会长出；雄鲸偶尔无长牙或有两根，单看长牙难以确定性别。',
  "storySections": [
    {
      key: 'tusk',
      label: '生活与认识',
      title: '嘴前伸出长牙',
      body: '雄性独角鲸通常有一根长牙，从上颌左侧向前伸出，表面带螺旋纹。它属于牙齿，位置在嘴前方。',
    },
    {
      key: 'female',
      label: '生活与认识',
      title: '雌鲸通常没有长牙',
      body: '多数雌鲸的牙留在上颌内部。少数雌鲸也会长出长牙，雄鲸偶尔没有外露长牙或长出两根，所以不能只凭长牙判定性别。',
    },
    {
      key: 'back',
      label: '生活与认识',
      title: '背上只有低矮隆脊',
      body: '独角鲸没有高高的背鳍，背上可见低矮的隆脊。找找身体两侧短胸鳍，再沿背部看到尾巴。',
    },
    {
      key: 'ice',
      label: '生活与认识',
      title: '从海冰空隙换气',
      body: '独角鲸用肺呼吸，在海冰间的裂隙或开阔水道露出水面换气。海冰随季节变化，它们也会移动到不同海域。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '潜入水中找食物',
      body: '独角鲸会潜水寻找鱼、鱿鱼和虾，用口部的吸力捕获猎物。它们常结成小群，群体大小随季节变化。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保护北极生活环境',
      body: '独角鲸全球 IUCN 等级为无危。气候变化、海冰变化和捕猎仍带来压力；全球等级不能代替某个地区种群的评估。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“独角”来自一颗牙',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Monodon monoceros。独角鲸嘴前的螺旋长牙从上颌左侧伸出。多数雌鲸没有外露长牙，少数也有；雄鲸偶尔没有长牙或有两根，因此长牙并非判断性别的绝对标准。',
    },
  ],
  "keyFacts": [
    '雄性通常有一根上颌左侧伸出的螺旋长牙。',
    '多数雌鲸无外露长牙，个体存在例外。',
    '没有背鳍，背上有低矮隆脊。',
    '在海冰裂隙和开阔水道露出呼吸孔换气。',
    '潜水捕食鱼、鱿鱼和虾。',
    '属于鲸类，现代分类将鲸类放在偶蹄目内。',
  ],
  "threats": [
    "气候变化",
    "海冰变化",
    "捕猎压力"
  ],
  "conservationActions": [
    "监测地区种群",
    "保护北极海洋栖息地",
    "减少船舶干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "带螺旋纹的长牙"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "北极鱼类"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "北极海冰与开阔水道"
    }
  ],
  "media": {
    "image": "./images/species/narwhal/01-cover.webp",
    "alt": "独角鲸与生活环境的全身场景",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/narwhal/02-observation.webp",
        "title": "螺旋长牙",
        "alt": "雄性独角鲸嘴前伸出螺旋长牙",
        "caption": "AI 生成科学情景重建。雄性独角鲸嘴前伸出螺旋长牙。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/narwhal/03-observation.webp",
        "title": "没有外露长牙",
        "alt": "左侧无外露长牙的独角鲸与右侧有长牙的个体一起游动",
        "caption": "AI 生成科学情景重建。左侧无外露长牙的独角鲸与右侧有长牙的个体一起游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/narwhal/04-observation.webp",
        "title": "平缓的背部",
        "alt": "独角鲸背上没有高大的背鳍",
        "caption": "AI 生成科学情景重建。独角鲸背上没有高大的背鳍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/narwhal/05-observation.webp",
        "title": "一起游动",
        "alt": "两只独角鲸在海冰下游动",
        "caption": "AI 生成科学情景重建。两只独角鲸在海冰下游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/narwhal/06-observation.webp",
        "title": "水面换气",
        "alt": "独角鲸在海冰间的开阔水道露出头背",
        "caption": "AI 生成科学情景重建。独角鲸在海冰间的开阔水道露出头背。",
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
      "title": "ASM Mammal Diversity Database — 分类与名称",
      "url": "https://www.mammaldiversity.org/taxon/1006445/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "NOAA Fisheries — 独角鲸",
      "url": "https://www.fisheries.noaa.gov/species/narwhal",
      "kind": "ecology",
      "accessedAt": "2026-09-13"
    },
    {
      "title": "IUCN — 全球保护等级（ASM MDD 转引）",
      "url": "https://www.mammaldiversity.org/taxon/1006445/",
      "kind": "conservation",
      "accessedAt": "2026-09-13"
    },
    {
      title: 'GBIF：Monodon monoceros 的命名作者与年份',
      url: 'https://www.gbif.org/species/5220008',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-13",
  "updatedAt": "2026-09-13"
} as const satisfies Species;

export default profile;
