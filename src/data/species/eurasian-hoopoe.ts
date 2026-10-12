import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eurasian-hoopoe",
  "slug": "eurasian-hoopoe",
  "names": {
    "zh": "戴胜",
    "en": "Eurasian Hoopoe",
    "aliases": []
  },
  "scientificName": "Upupa epops",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Bucerotiformes",
      "zhName": "犀鸟目"
    },
    "family": {
      "scientificName": "Upupidae",
      "zhName": "戴胜科"
    },
    "genus": {
      "scientificName": "Upupa",
      "zhName": "戴胜属"
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
    "assessor": "IUCN；全球等级见来源，独立评估日期与全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲",
      "非洲"
    ],
    "regions": [
      "欧洲与亚洲",
      "非洲"
    ],
    "countries": [
      "西班牙",
      "法国",
      "中国",
      "印度",
      "摩洛哥"
    ],
    "range": "见于欧洲、亚洲和非洲的适宜开阔生境；部分种群在欧洲与非洲之间季节迁徙。图示地点只是分布范围内的代表场景。",
    "center": {
      "lat": 36,
      "lng": 65
    }
  },
  "habitats": [
    {
      "name": "疏林、果园与短草地",
      "realm": "terrestrial",
      "description": '短草、裸地和松软土壤方便戴胜步行、探找昆虫，附近的老树与洞穴能提供繁殖位置。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "昆虫幼虫",
      "其他小型无脊椎动物"
    ],
    "description": "戴胜常在短草地和松软地面用长嘴探找昆虫及其幼虫。"
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "戴胜",
    "扇形冠羽"
  ],
  "summary": "戴胜头顶的冠羽末端带黑色，展开时像小扇子。它有细长、略向下弯的嘴，飞行时能看见翅膀上的黑白条纹。",
  "description": '戴胜的头和胸部呈棕粉色，常走在果园、短草地和疏林边缘，用长嘴探找土中的昆虫。它在树洞或其他洞穴繁殖，成鸟衔着食物回巢喂养幼鸟。',
  "storySections": [
    {
      key: 'crest',
      label: '生活与认识',
      title: '头顶的小扇子',
      body: '戴胜能把末端带黑色的冠羽展开成扇形，也能将它收向脑后。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '长嘴探进土里',
      body: '戴胜低头把细长的嘴伸进松软土壤，寻找昆虫和幼虫。嘴端略向下弯，适合从地面缝隙中取食。',
    },
    {
      key: 'wings',
      label: '生活与认识',
      title: '飞起来的黑白条纹',
      body: '戴胜展开翅膀飞行时，黑白相间的横纹更加显眼，尾部也有黑白羽纹。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '到洞口送食物',
      body: '戴胜在树洞或其他合适的洞穴中繁殖。成鸟把找到的昆虫带回巢边，幼鸟在洞中长大。',
    },
    {
      key: 'habitat',
      label: '生活与认识',
      title: '在短草地上走走',
      body: '戴胜常在果园、草地和疏林边缘觅食。矮草和裸露地面方便它走动，也让它能探到土里的食物。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '留下洞穴和虫子',
      body: '戴胜全球属无危。保留老树和适宜巢洞，减少对昆虫及其生境的破坏，也能给它留下觅食空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '冠羽收起，长嘴继续探土',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Upupa epops。戴胜的冠羽可开合，展开时像小扇子；那把细长、略向下弯的嘴则用来探进松软土壤。它们在洞穴中繁殖，成鸟会把捕到的昆虫送回巢内。',
    },
  ],
  "keyFacts": [
    "戴胜能把冠羽展开成扇形，也会把它收向脑后。",
    "戴胜低头把细长的嘴伸进松软土壤，寻找昆虫和幼虫。",
    "戴胜展开翅膀后，黑白相间的横纹更容易看清。",
    "戴胜在树洞或其他合适的洞穴中繁殖。",
    "戴胜常在果园、草地和疏林边缘觅食。"
  ],
  "threats": [
    "巢洞减少",
    "觅食生境丧失"
  ],
  "conservationActions": [
    "保留老树和巢洞",
    "保留短草地与自然地面",
    "减少繁殖地干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "扇形冠羽"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "昆虫"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "疏林、果园与短草地"
    }
  ],
  "media": {
    "image": "./images/species/eurasian-hoopoe/01-cover.webp",
    "alt": "戴胜在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eurasian-hoopoe/02-observation.webp",
        "title": "黑色羽尖的小扇子",
        "alt": "戴胜展开冠羽，细长弯嘴与黑色羽尖清楚可见",
        "caption": "AI 生成科学情景重建。戴胜展开冠羽，细长弯嘴与黑色羽尖清楚可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-hoopoe/03-observation.webp",
        "title": "用长嘴探土",
        "alt": "戴胜收拢冠羽，把长嘴探向果园地面",
        "caption": "AI 生成科学情景重建。戴胜收拢冠羽，把长嘴探向果园地面。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-hoopoe/04-observation.webp",
        "title": "黑白条纹的翅膀",
        "alt": "戴胜展开黑白相间的翅膀飞过草地",
        "caption": "AI 生成科学情景重建。戴胜展开黑白相间的翅膀飞过草地。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-hoopoe/05-observation.webp",
        "title": "把食物带到洞口",
        "alt": "戴胜衔着昆虫幼虫停在树洞旁",
        "caption": "AI 生成科学情景重建。戴胜衔着昆虫幼虫停在树洞旁。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-hoopoe/06-observation.webp",
        "title": "草地上的两种冠羽姿态",
        "alt": "两只戴胜走在果园草地，一只竖起冠羽，另一只收拢冠羽",
        "caption": "AI 生成科学情景重建。两只戴胜走在果园草地，一只竖起冠羽，另一只收拢冠羽。",
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
      "title": "RSPB：戴胜外形与迁徙",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/hoopoe",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "BTO：戴胜全球保护等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/hoopoe",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "NCBI：戴胜所属犀鸟目",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=57439",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Oiseaux.net：戴胜生活史",
      "url": "https://www.oiseaux.net/en/oiseaux/eurasian.hoopoe.html",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Upupa epops 的命名作者与年份',
      url: 'https://www.gbif.org/species/2498415',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
