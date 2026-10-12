import type { Species } from '../../types/species.ts';

const profile = {
  "id": "atlantic-salmon",
  "slug": "atlantic-salmon",
  "names": {
    "zh": "大西洋鲑",
    "en": "Atlantic Salmon"
  },
  "scientificName": "Salmo salar",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Salmoniformes",
      "zhName": "鲑形目"
    },
    "family": {
      "scientificName": "Salmonidae",
      "zhName": "鲑科"
    },
    "genus": {
      "scientificName": "Salmo",
      "zhName": "鲑属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "NT",
    "label": {
      "zh": "近危",
      "en": "Near Threatened"
    },
    "trend": "decreasing",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "marine"
    ],
    "continents": [
      "欧洲",
      "北美洲"
    ],
    "regions": [
      "北大西洋及两岸相连河流"
    ],
    "countries": [],
    "range": "自然分布在北大西洋及两岸河流中；洄游种群往返于淡水与海水，也有终生生活在淡水中的种群。"
  },
  "habitats": [
    {
      "name": "清凉河流与北大西洋",
      "realm": "freshwater",
      "description": '清凉河流的砾石床供卵发育，幼鱼在河流中觅食。洄游种群还需要连通河流与北大西洋的水道，也有终生留在淡水的种群。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "水生昆虫",
      "小鱼",
      "甲壳类"
    ],
    "description": "幼鱼在河流中吃水生昆虫等；海洋阶段会捕食小鱼和甲壳类。"
  },
  "tags": [
    "大西洋鲑",
    "向河流上游游动"
  ],
  "summary": "洄游型大西洋鲑在河里出生，到海里生长，再回河流繁殖。它的体色会随生长阶段变化。",
  "description": '大西洋鲑在河流中的幼鱼常有深色竖纹，海洋阶段多为银色，身体上部有深色斑点。雌鱼在河床砾石间形成产卵窝，卵需要清凉、含氧的流水发育。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '银色身上的小斑点',
      body: '海洋阶段身体多呈银色，体侧上部有深色斑点。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '迎着水流游回河里',
      body: '繁殖成鱼沿河流上溯，途中需要可以通行的水道。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '幼鱼身上的竖纹',
      body: '河流中的幼鱼常有深色竖纹，与银亮成鱼的体色不同。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '到海里生长',
      body: '洄游个体到海洋继续生长，再返回淡水繁殖。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '卵藏在砾石间',
      body: '雌鱼在河床砾石中形成产卵窝，清凉、含氧的流水让卵发育。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: 'IUCN 在 2023 年将全球等级调整为近危。美国缅因湾种群的 ESA 濒危身份属于地区保护，不能替代全球等级。修复河道连通和河流生境有助于洄游。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '一生往返于两种水域',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Salmo salar。洄游型大西洋鲑从河流出海生长，再回到淡水繁殖，河道中的障碍可能阻断这段旅程。但这个物种也有终生生活在淡水的种群，不能把出海经历套到每一条大西洋鲑身上。',
    },
  ],
  "keyFacts": [
    '海洋阶段身体多呈银色，体侧上部有深色斑点。',
    '繁殖成鱼沿河流上溯，途中需要可以通行的水道。',
    '河流中的幼鱼常有深色竖纹，与银亮成鱼的体色不同。',
    '洄游个体到海洋继续生长，再返回淡水繁殖。',
    '雌鱼在河床砾石中形成产卵窝，清凉、含氧的流水让卵发育。',
  ],
  "threats": [
    "阻隔洄游的水坝",
    "水温升高",
    "河流生境退化"
  ],
  "conservationActions": [
    "恢复河道连通",
    "保护产卵河床",
    "改善流域水质"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "向河流上游游动"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "清凉河流与北大西洋"
    }
  ],
  "media": {
    "image": "./images/species/atlantic-salmon/01-cover.webp",
    "alt": "大西洋鲑的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/atlantic-salmon/02-observation.webp",
        "title": "银色鳞片与深色斑点",
        "alt": '银色鳞片与深色斑点',
        "caption": "AI 生成科学情景重建。海洋阶段的身体多呈银色，体侧上部有深色斑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-salmon/03-observation.webp",
        "title": "河流中的上溯成鱼",
        "alt": '河流中的上溯成鱼',
        "caption": "AI 生成科学情景重建。成鱼回到河流产卵时向上游游动，需要能通过的水道。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-salmon/04-observation.webp",
        "title": "带竖纹的幼鱼",
        "alt": '带竖纹的幼鱼',
        "caption": "AI 生成科学情景重建。河流中的幼鱼常有深色竖向斑纹，与银亮的成鱼不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-salmon/05-observation.webp",
        "title": "海里的银色成鱼",
        "alt": '海里的银色成鱼',
        "caption": "AI 生成科学情景重建。洄游个体进入海洋后继续生长，再返回淡水繁殖。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-salmon/06-observation.webp",
        "title": "砾石河床上的成鱼",
        "alt": '砾石河床上的成鱼',
        "caption": "AI 生成科学情景重建。雌鱼在河床砾石中形成产卵窝。清凉、含氧的流水对卵的发育很重要。",
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
      "title": "NOAA：大西洋鲑自然史与地区保护",
      "url": "https://www.fisheries.noaa.gov/species/atlantic-salmon",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "NOAA：Salmo salar",
      "url": "https://www.fisheries.noaa.gov/species/atlantic-salmon",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "IUCN：2023 年全球近危调整",
      "url": "https://iucn.org/press-release/202312/freshwater-fish-highlight-escalating-climate-impacts-species-iucn-red-list",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Salmo salar 的命名作者与年份',
      url: 'https://www.gbif.org/species/7595433',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
