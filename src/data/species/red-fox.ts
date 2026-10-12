import type { Species } from '../../types/species.ts';

const profile = {
  "id": "red-fox",
  "slug": "red-fox",
  "names": {
    "zh": "赤狐",
    "en": "Red Fox",
    "aliases": [
      "红狐",
      "狐狸"
    ]
  },
  "scientificName": "Vulpes vulpes",
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
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Canidae",
      "zhName": "犬科"
    },
    "genus": {
      "scientificName": "Vulpes",
      "zhName": "狐属"
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
    "assessor": "IUCN（由 Animal Diversity Web 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲",
      "欧洲",
      "北美洲",
      "非洲"
    ],
    "regions": [
      "北半球多种陆地环境",
      "北非部分地区"
    ],
    "countries": [
      "中国",
      "英国",
      "挪威",
      "加拿大",
      "美国"
    ],
    "range": "赤狐原生范围横跨北半球大片地区，也包括北非部分地区。国家列表仅列举代表国家；澳大利亚等地的引入种群不计入这里的原生分布。地图点是欧洲代表位置。",
    "center": {
      "lat": 50,
      "lng": 20
    }
  },
  "habitats": [
    {
      "name": "林缘、草地与农田",
      "realm": "terrestrial",
      "description": "赤狐利用林缘、草地、农田和部分城镇环境，在不同植被交界处寻找食物。",
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 45.5,
      "max": 90,
      "unit": "cm",
      "note": "Animal Diversity Web 所列头体长，不含约 30–55.5 厘米的尾巴。"
    }
  },
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "小型哺乳动物",
      "昆虫",
      "鸟类",
      "果实"
    ],
    "description": "赤狐既吃小型动物，也吃果实等植物性食物，随当地和季节的食物供应调整。"
  },
  "tags": [
    "赤狐",
    "尖耳朵和蓬松尾巴"
  ],
  "summary": "赤狐会停下来听，再跃起扑向草地。常见的红色型有红褐色毛、黑色小腿和白色尾尖，但同种也有其他毛色。",
  "description": '赤狐能利用林缘、草地、农田和部分城镇绿地。它是杂食动物，吃小型哺乳动物、鸟、昆虫及果实，食物比例随地区和季节变化。',
  "storySections": [
    {
      key: 'body',
      label: '生活与认识',
      title: '尖耳朵，蓬松尾巴',
      body: '常见红色型赤狐有红褐色毛、黑色小腿和蓬松长尾，尾尖常呈白色。赤狐也有其他毛色，不能把红毛当成唯一的认定依据。',
    },
    {
      key: 'listening',
      label: '生活与认识',
      title: '先停下来听一听',
      body: '赤狐会利用听觉寻找小型猎物。观察图里，它停住身体，把耳朵朝向前方。可以先指耳朵，再看看它低头注意哪里。',
    },
    {
      key: 'pounce',
      label: '生活与认识',
      title: '跃起，再落到地面',
      body: '赤狐捕捉小型猎物时会跃起扑落。图集分别展示跃起和落地的姿势，不是同一只动物的连续实拍。画面没有猎物，不能据此判断它捕猎成功。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '也会吃果实',
      body: '赤狐的食物包括小型哺乳动物、昆虫、鸟类和果实。不同地方、不同季节的食物比例会变化，不能只凭一张捕猎图把它的食谱限定为老鼠。',
    },
    {
      key: 'range',
      label: '生活与认识',
      title: '生活在多种环境里',
      body: '赤狐能利用林缘、草地和部分城镇环境。它也经人类引入澳大利亚，在那里会捕食原生动物；原生地与引入地需要分别看待。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '远远观察野生狐狸',
      body: '赤狐的全球 IUCN 等级为无危。野外观察时保持距离，不追逐幼狐或干扰洞穴，也不通过投喂吸引它靠近道路。引入地区需要依当地生态影响管理。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字叫赤狐，毛色也能不同',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Vulpes vulpes。常见红色型有红褐毛、黑色小腿和白尾尖，同种还有其他毛色。捕捉小型猎物时，它会先听声定位，再跃起扑落，食谱也包括果实。',
    },
  ],
  "keyFacts": [
    '常见红色型有尖耳、黑色小腿和白色尾尖。',
    '利用听觉定位小型猎物。',
    '捕猎时会跃起扑向地面。',
    '也吃果实，食谱随季节和地区变化。',
    '能利用林缘、草地及部分城镇环境。',
  ],
  "threats": [
    "道路交通",
    "捕猎及人兽冲突"
  ],
  "conservationActions": [
    "减少道路吸引源",
    "避免投喂与干扰洞穴",
    "在引入地区按生态影响管理"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "尖耳朵和蓬松尾巴"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "小型哺乳动物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、草地与农田"
    }
  ],
  "media": {
    "image": "./images/species/red-fox/01-cover.webp",
    "alt": "赤狐与生活环境的全身场景",
    "focalPoint": {
      "x": 0.82,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/red-fox/02-observation.webp",
        "alt": "赤狐侧身站立，尖耳朵和白色尾尖可见",
        "title": "尖耳朵和蓬松尾巴",
        "caption": "AI 生成科学情景重建。赤狐侧身站立，尖耳朵和白色尾尖可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-fox/03-observation.webp",
        "alt": "赤狐停在草地上，耳朵朝前，头稍低",
        "title": "停下来听一听",
        "caption": "AI 生成科学情景重建。赤狐停在草地上，耳朵朝前，头稍低。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-fox/04-observation.webp",
        "alt": "赤狐跃起，前爪朝下，尾巴向后伸",
        "title": "跃起扑向地面",
        "caption": "AI 生成科学情景重建。赤狐跃起，前爪朝下，尾巴向后伸。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-fox/05-observation.webp",
        "alt": "赤狐前爪落地，鼻尖靠近草丛",
        "title": "前爪落到草地",
        "caption": "AI 生成科学情景重建。赤狐前爪落地，鼻尖靠近草丛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-fox/06-observation.webp",
        "alt": "赤狐沿着林缘小路行走",
        "title": "林缘的小路",
        "caption": "AI 生成科学情景重建。赤狐沿着林缘小路行走。",
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
      "title": "Animal Diversity Web — 赤狐分类与分布",
      "url": "https://animaldiversity.org/accounts/Vulpes_vulpes/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Animal Diversity Web — 赤狐形态、捕食和食谱",
      "url": "https://animaldiversity.org/accounts/Vulpes_vulpes/",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "Animal Diversity Web — 赤狐全球 IUCN 等级",
      "url": "https://animaldiversity.org/accounts/Vulpes_vulpes/",
      "kind": "conservation",
      "accessedAt": "2026-09-12"
    },
    {
      "title": "NPS — 赤狐的听觉与扑猎",
      "url": "https://www.nps.gov/articles/red-fox.htm",
      "kind": "ecology",
      "accessedAt": "2026-09-12"
    },
    {
      title: 'GBIF：Vulpes vulpes 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219243',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-12",
  "updatedAt": "2026-09-12"
} as const satisfies Species;

export default profile;
