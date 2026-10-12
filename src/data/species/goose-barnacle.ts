import type { Species } from '../../types/species.ts';

const profile = {
  "id": "goose-barnacle",
  "slug": "goose-barnacle",
  "names": {
    "zh": "鹅颈藤壶",
    "en": "Common Goose Barnacle"
  },
  "scientificName": "Lepas anatifera",
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
      "scientificName": "Thecostraca",
      "zhName": "鞘甲纲"
    },
    "order": {
      "scientificName": "Scalpellomorpha",
      "zhName": "铠茗荷目"
    },
    "family": {
      "scientificName": "Lepadidae",
      "zhName": "茗荷科"
    },
    "genus": {
      "scientificName": "Lepas",
      "zhName": "茗荷属"
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
    "assessor": '全球保护评估尚未确认；NE（未评估）不等于无危。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "大西洋等海域，常随漂浮物漂流"
    ],
    "countries": [],
    "range": "大西洋等海域，常随漂浮物漂流；主要见于海面漂浮木头等硬物。"
  },
  "habitats": [
    {
      "name": "海面漂浮木头等硬物",
      "realm": "marine",
      "description": '大西洋等海域的漂浮木头及其他硬物表面，成体随漂浮物移动。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "悬浮的食物颗粒",
      "浮游生物"
    ],
    "description": "食物包括悬浮的食物颗粒、浮游生物。"
  },
  "tags": [
    "鹅颈藤壶",
    "海面漂浮木头等硬物"
  ],
  "summary": '鹅颈藤壶用长柄固定在漂浮物上，伸出刷状蔓足过滤食物。白色壳板包住头状部，它属于甲壳动物。',
  "description": '鹅颈藤壶用柔软长柄固定在漂浮木头等硬物上，随水流移动。头状部有五块主要白色壳板，伸出的刷状蔓足从水中捕捉悬浮颗粒和浮游生物。它是甲壳动物，常与同类一起附着。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '柔软的柄',
      body: '深色的柄连接身体与漂浮木头，可以弯曲和收缩。看一看它从哪里固定住。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '白色的壳板',
      body: '头状部有五块主要钙质壳板，表面平滑，板间可见深色组织。单一侧面不会显示全部壳板。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '伸出的蔓足',
      body: '在水中，它会伸出刷子般的蔓足捕捉食物。蔓足属于附肢，不是植物的根。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '一起附在木头上',
      body: '许多个体能附着在同一块漂浮物上，各自有柄和壳板。它们属于甲壳动物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '随着漂浮物移动',
      body: '成体固定在漂浮物上，随着水流移动。图中木头提供附着环境，不代表动物能主动驾驭木头。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '全球保护评估尚未确认。资料中的 Lepas (Lepas) anatifera 含亚属写法，仍指同一物种。岸边遇到附着藤壶的漂浮物时，不把动物从柄上拉开。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '曾被误认为会生出鸟的藤壶',
      body: 'Linnaeus 在 1758 年发表 Lepas anatifera 这个名称。种名 anatifera 与拉丁语“鸭”和“携带”有关，中世纪欧洲人曾误以为这类藤壶会生出鹅或鸭，因为柄和壳板让人联想到鸟的颈与身体。它实际是甲壳动物，伸出蔓足在水中摄食。',
    },
  ],
  "keyFacts": [
    "深色的柄连接身体与漂浮木头，可以弯曲和收缩。看一看它从哪里固定住。",
    "头状部有五块主要钙质壳板，表面平滑，板间可见深色组织。单一侧面不会显示全部壳板。",
    "在水中，它会伸出刷子般的蔓足捕捉食物。蔓足属于附肢，不是植物的根。",
    "许多个体能附着在同一块漂浮物上，各自有柄和壳板。它们属于甲壳动物。",
    "成体固定在漂浮物上，随着水流移动。图中木头提供附着环境，不代表动物能主动驾驭木头。"
  ],
  "threats": [],
  "conservationActions": [
    "保留海面漂浮木头等硬物，观察时不捕捉、不破坏栖息地。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "海面漂浮木头等硬物"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "柔软的柄"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "未评估",
      "note": "采用 Lepas anatifera；资料中的 Lepas (Lepas) anatifera 含亚属写法，指同一物种。鞘甲纲沿用仓库口径，目采用 Scalpellomorpha。本轮未核实全球 IUCN 等级，NE 不代表无危。"
    }
  ],
  "media": {
    "image": "./images/species/goose-barnacle/01-cover.webp",
    "alt": "鹅颈藤壶及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/goose-barnacle/02-observation.webp",
        "alt": "鹅颈藤壶：柔软的柄",
        "title": "柔软的柄",
        "caption": "AI 生成科学情景重建。深色的柄连接身体与漂浮木头，可以弯曲和收缩。看一看它从哪里固定住。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goose-barnacle/03-observation.webp",
        "alt": "鹅颈藤壶：白色的壳板",
        "title": "白色的壳板",
        "caption": "AI 生成科学情景重建。头状部有五块主要钙质壳板，表面平滑，板间可见深色组织。单一侧面不会显示全部壳板。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goose-barnacle/04-observation.webp",
        "alt": "鹅颈藤壶：伸出的蔓足",
        "title": "伸出的蔓足",
        "caption": "AI 生成科学情景重建。在水中，它会伸出刷子般的蔓足捕捉食物。蔓足属于附肢，不是植物的根。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goose-barnacle/05-observation.webp",
        "alt": "鹅颈藤壶：一起附在木头上",
        "title": "一起附在木头上",
        "caption": "AI 生成科学情景重建。许多个体能附着在同一块漂浮物上，各自有柄和壳板。它们属于甲壳动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/goose-barnacle/06-observation.webp",
        "alt": "鹅颈藤壶：随着漂浮物移动",
        "title": "随着漂浮物移动",
        "caption": "AI 生成科学情景重建。成体固定在漂浮物上，随着水流移动。图中木头提供附着环境，不代表动物能主动驾驭木头。",
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
      "title": "MarLIN：Common goose barnacle",
      "url": "https://www.marlin.ac.uk/species/detail/2058",
      "kind": "general",
      "accessedAt": "2026-09-23"
    },
    {
      "title": "NCBI：Lepas anatifera 分类路径",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=37710",
      "kind": "taxonomy",
      "accessedAt": "2026-09-23"
    },
    {
      "title": "Lepas anatifera 线粒体基因组研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9225761/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-23"
    },
    {
      title: 'DORIS：鹅颈藤壶的词源与中世纪传说',
      url: 'https://doris.ffessm.fr/Especes/Lepas-Anatifa-anatifera-Anatife-commun-236',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-23",
  "updatedAt": "2026-09-23"
} as const satisfies Species;

export default profile;
