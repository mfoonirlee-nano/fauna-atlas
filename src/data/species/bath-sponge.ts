import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bath-sponge",
  "slug": "bath-sponge",
  "names": {
    "zh": "浴海绵",
    "en": "Bath Sponge"
  },
  "scientificName": "Spongia officinalis",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Porifera",
      "zhName": "多孔动物门"
    },
    "class": {
      "scientificName": "Demospongiae",
      "zhName": "寻常海绵纲"
    },
    "order": {
      "scientificName": "Dictyoceratida",
      "zhName": "网角海绵目"
    },
    "family": {
      "scientificName": "Spongiidae",
      "zhName": "浴海绵科"
    },
    "genus": {
      "scientificName": "Spongia",
      "zhName": "浴海绵属"
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
    "assessor": '全球 IUCN 评估尚未确认；地区等级不等于全球评估。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "地中海及邻近大西洋海域"
    ],
    "countries": [],
    "range": "地中海及邻近大西洋海域。"
  },
  "habitats": [
    {
      "name": "浅海岩石等硬质基底",
      "realm": "marine",
      "description": '地中海及邻近大西洋浅海的岩石等硬质表面。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "细菌",
      "微藻",
      "有机碎屑"
    ],
    "description": "食物包括细菌、微藻、有机碎屑。"
  },
  "tags": [
    "浴海绵",
    "表面的孔"
  ],
  "summary": '浴海绵固定在岩石等表面，过滤海水里的细菌和微小颗粒。活体多呈灰黑色，洗浴用品取自处理后的骨架。',
  "description": '浴海绵附着在浅海岩石等硬表面，靠流经身体的海水取得细菌和微小有机颗粒。水从细小入水孔进入，从较大的出水孔排出。活体常为灰色至近黑色，与加工后淡黄色的柔软骨架外观不同。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '表面的孔',
      body: '找找海绵表面大小不同的孔。水从微小入水孔进入，再从较大的出水孔排出。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '固定在岩石上',
      body: '成年浴海绵附着在岩石等表面生活。它是动物，没有脚也没有叶子。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '不规则的轮廓',
      body: '从上面看看圆块状或分叶状的身体。不同个体的外形和颜色会有差异。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '海底的生活',
      body: '海水流经身体时，海绵取得其中的细菌和微小有机颗粒作为食物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '活海绵的表面',
      body: '活浴海绵常呈灰色到近黑色。加工后淡黄色的海绵骨架与活体外观不同。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '一起观察与保护',
      body: '观察活海绵时不触摸或掰取，保护海底附着生物和水质。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '洗浴用的是海绵的骨架',
      body: 'Linnaeus 在 1759 年发表 Spongia officinalis 这个名称。人们曾把这种海绵的柔软骨架用作洗浴用品，中文名“浴海绵”能与这项用途对应。法国潜水协会 DORIS 解释，种名 officinalis 与旧时商店、药房售卖的用品有关；活海绵仍是附着在海底的动物。',
    },
  ],
  "keyFacts": [
    "找找海绵表面大小不同的孔。水从微小入水孔进入，再从较大的出水孔排出。",
    "成年浴海绵附着在岩石等表面生活。它是动物，没有脚也没有叶子。",
    "从上面看看圆块状或分叶状的身体。不同个体的外形和颜色会有差异。",
    "海水流经身体时，海绵取得其中的细菌和微小有机颗粒作为食物。",
    "活浴海绵常呈灰色到近黑色。加工后淡黄色的海绵骨架与活体外观不同。"
  ],
  "threats": [
    "采集压力",
    "海水污染"
  ],
  "conservationActions": [
    "观察活海绵时不触摸或掰取，保护海底附着生物和水质。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "表面的孔"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "浅海岩石等硬质基底"
    }
  ],
  "media": {
    "image": "./images/species/bath-sponge/01-cover.webp",
    "alt": "浴海绵在浅海岩石等硬质基底中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bath-sponge/02-observation.webp",
        "title": "表面的孔",
        "alt": "浴海绵：表面的孔",
        "caption": "AI 生成科学情景重建。找找海绵表面大小不同的孔。水从微小入水孔进入，再从较大的出水孔排出。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bath-sponge/03-observation.webp",
        "title": "固定在岩石上",
        "alt": "浴海绵：固定在岩石上",
        "caption": "AI 生成科学情景重建。成年浴海绵附着在岩石等表面生活。它是动物，没有脚也没有叶子。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bath-sponge/04-observation.webp",
        "title": "不规则的轮廓",
        "alt": "浴海绵：不规则的轮廓",
        "caption": "AI 生成科学情景重建。从上面看看圆块状或分叶状的身体。不同个体的外形和颜色会有差异。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bath-sponge/05-observation.webp",
        "title": "海底的生活",
        "alt": "浴海绵：海底的生活",
        "caption": "AI 生成科学情景重建。海水流经身体时，海绵取得其中的细菌和微小有机颗粒作为食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bath-sponge/06-observation.webp",
        "title": "活海绵的表面",
        "alt": "浴海绵：活海绵的表面",
        "caption": "AI 生成科学情景重建。活浴海绵常呈灰色到近黑色。加工后淡黄色的海绵骨架与活体外观不同。",
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
      "title": "doris.ffessm.fr：Spongia officinalis",
      "url": "https://doris.ffessm.fr/Especes/Spongia-Spongia-officinalis-Eponge-de-toilette-1929",
      "kind": "general",
      "accessedAt": "2026-09-22"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
