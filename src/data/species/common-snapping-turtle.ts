import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-snapping-turtle",
  "slug": "common-snapping-turtle",
  "names": {
    "zh": "鳄龟",
    "en": "Common Snapping Turtle"
  },
  "scientificName": "Chelydra serpentina",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Testudines",
      "zhName": "龟鳖目"
    },
    "family": {
      "scientificName": "Chelydridae",
      "zhName": "鳄龟科"
    },
    "genus": {
      "scientificName": "Chelydra",
      "zhName": "鳄龟属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "加拿大南部",
      "美国"
    ],
    "countries": [],
    "range": '原生于加拿大南部和美国的淡水水域，墨西哥等地有引入记录。已独立成种的中美洲鳄龟分布另计。'
  },
  "habitats": [
    {
      "name": "池塘、湖泊与缓流河道",
      "realm": "freshwater",
      "description": '池塘、湖泊和缓流河道的软泥底供鳄龟活动取食。雌龟需要从水域通往陆地产卵处的通路。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生植物",
      "鱼类",
      "昆虫",
      "甲壳类"
    ],
    "description": "取食水生植物、鱼类、昆虫、甲壳类。"
  },
  "tags": [
    "鳄龟",
    "龟壳后面的长尾巴"
  ],
  "summary": "鳄龟长尾的上方有锯齿状突起，腹甲较小。头和四肢无法完全缩进壳里，成年背甲也没有大鳄龟那样高耸的三道棱。",
  "description": '鳄龟在浅水软泥底活动，伸长脖子寻找水生植物与小动物，鼻孔伸到水面用肺呼吸。雌龟上岸产卵；幼龟背甲棱较明显，成年后通常平缓。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '龟壳后面的长尾巴',
      body: '长尾上方有一排锯齿状突起，腹甲小，头与四肢不能完全缩入壳内。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '沿着水底走',
      body: '鳄龟常在浅水软泥底活动，伸长脖子寻找食物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '把鼻孔伸出水面',
      body: '鳄龟用肺呼吸，把鼻孔伸到水面换气。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '宽宽的背甲',
      body: '背甲宽而褐，幼龟的棱较明显，成年后通常平缓。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '到陆地上产卵',
      body: '雌龟离开水域，到陆地找产卵位置，观察时应给它留出通路。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '所列资料记录的全球等级为无危。保留湿地与陆地之间的通路、不放生外来龟类。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '长尾锯齿与缩不进去的四肢',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Chelydra serpentina。鳄龟的腹甲较小，头和四肢不能像许多龟那样完全缩进壳里。它和大鳄龟同属鳄龟科，但分属不同属；成年背甲没有大鳄龟那样高耸的三道棱，长尾锯齿也是线索。',
    },
  ],
  "keyFacts": [
    '长尾上方有一排锯齿状突起，腹甲小，头与四肢不能完全缩入壳内。',
    '鳄龟常在浅水软泥底活动，伸长脖子寻找食物。',
    '鳄龟用肺呼吸，把鼻孔伸到水面换气。',
    '背甲宽而褐，幼龟的棱较明显，成年后通常平缓。',
    '雌龟离开水域，到陆地找产卵位置，观察时应给它留出通路。',
  ],
  "threats": [
    "湿地丧失",
    "上岸活动时遭遇道路交通",
    "捕捉"
  ],
  "conservationActions": [
    "保留湿地与陆地之间的通路",
    "不放生外来龟类"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "龟壳后面的长尾巴"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、湖泊与缓流河道"
    }
  ],
  "media": {
    "image": "./images/species/common-snapping-turtle/01-cover.webp",
    "alt": "鳄龟的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-snapping-turtle/02-observation.webp",
        "title": "龟壳后面的长尾巴",
        "alt": '龟壳后面的长尾巴',
        "caption": "AI 生成科学情景重建。从龟壳后缘向后找，长尾巴上方有一排锯齿状突起。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-snapping-turtle/03-observation.webp",
        "title": "沿着水底走",
        "alt": '沿着水底走',
        "caption": "AI 生成科学情景重建。鳄龟常在浅水的软泥底活动，伸长脖子寻找食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-snapping-turtle/04-observation.webp",
        "title": "把鼻孔伸出水面",
        "alt": '把鼻孔伸出水面',
        "caption": "AI 生成科学情景重建。鳄龟用肺呼吸，需要把鼻孔伸到水面上换气。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-snapping-turtle/05-observation.webp",
        "title": "宽宽的背甲",
        "alt": '宽宽的背甲',
        "caption": "AI 生成科学情景重建。看看宽阔的褐色背甲。幼龟背甲的棱更明显，成年后通常变得平缓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-snapping-turtle/06-observation.webp",
        "title": "到陆地上产卵",
        "alt": '到陆地上产卵',
        "caption": "AI 生成科学情景重建。雌龟会离开水域，到陆地上寻找产卵的地方。观察时给它留出通路。",
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
      "title": "The Reptile Database：鳄龟",
      "url": "https://reptile-database.reptarium.cz/Chelydra/serpentina",
      "kind": "taxonomy",
      "accessedAt": "2026-09-18"
    },
    {
      "title": "Animal Diversity Web：鳄龟",
      "url": "https://animaldiversity.org/accounts/Chelydra_serpentina/",
      "kind": "ecology",
      "accessedAt": "2026-09-18"
    },
    {
      "title": "IUCN 龟类专家组：2025 世界龟类名录",
      "url": "https://iucn-tftsg.org/wp-content/uploads/crm.10.checklist.atlas_.v10.2025.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-18"
    },
    {
      title: 'GBIF：Chelydra serpentina 的命名作者与年份',
      url: 'https://www.gbif.org/species/2441905',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-18",
  "updatedAt": "2026-09-18"
} as const satisfies Species;

export default profile;
