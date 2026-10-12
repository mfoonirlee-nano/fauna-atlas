import type { Species } from '../../types/species.ts';

const profile = {
  "id": "leopard-slug",
  "slug": "leopard-slug",
  "names": {
    "zh": "豹纹蛞蝓",
    "en": "Leopard Slug"
  },
  "scientificName": "Limax maximus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Mollusca",
      "zhName": "软体动物门"
    },
    "class": {
      "scientificName": "Gastropoda",
      "zhName": "腹足纲"
    },
    "order": {
      "scientificName": "Stylommatophora",
      "zhName": "柄眼目"
    },
    "family": {
      "scientificName": "Limacidae",
      "zhName": "蛞蝓科"
    },
    "genus": {
      "scientificName": "Limax",
      "zhName": "蛞蝓属"
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
    "assessor": '全球 LC 依据二级资料所引 Rowson 2017 评估；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "原生于欧洲，常见于潮湿林地和花园；已引入其他地区"
    ],
    "countries": [
      "英国",
      "法国",
      "德国"
    ],
    "range": "原生于欧洲，常见于潮湿林地和花园；已引入其他地区。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "原生于欧洲，常见于潮湿林地和花园；已引入其他地区",
      "realm": "terrestrial",
      "description": "原生于欧洲，常见于潮湿林地和花园；已引入其他地区。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore",
      "detritivore"
    ],
    "foods": [
      "真菌",
      "腐烂植物",
      "其他有机物"
    ],
    "description": "食物包括真菌、腐烂植物、其他有机物。"
  },
  "tags": [
    "豹纹蛞蝓",
    "软身体慢慢爬"
  ],
  "summary": '豹纹蛞蝓常在潮湿夜间爬行，吃真菌和腐烂植物。它有两对触角，外套膜内仍保留小壳片。',
  "description": '豹纹蛞蝓原生于欧洲，常在潮湿林地和花园生活，其他地区也有引入种群。它用腹足爬行，夜间或潮湿时出来吃真菌、腐烂植物等有机物，可能留下黏液。头上有两对触角，长触角顶端有眼睛。外套膜常有暗点，后半身常有纵纹，内部仍保留小壳片。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '软身体慢慢爬',
      body: '豹纹蛞蝓用腹面的足爬行，外面没有蜗牛那样的螺壳，外套膜里面仍有小型壳片。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '长短两对触角',
      body: '头上有两对触角，较长的一对顶端有眼睛，较短的一对靠近口部。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '前面斑点后面条纹',
      body: '外套膜上常有暗色斑点，后半身常出现纵向条纹。花纹会随个体而变化。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '湿湿的爬行痕迹',
      body: '它常在夜间和潮湿时活动，爬过的地方可能留下透明黏液。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '落叶与真菌',
      body: '它会吃真菌和腐烂的植物材料。落叶、木头和蘑菇提供环境参照，不是比例尺。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留适量枯木和落叶，给本地小动物提供藏身处。不要把蛞蝓带到新的地区，以免形成外来种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '豹纹外观下面还藏着壳',
      body: 'Linnaeus 在 1758 年发表 Limax maximus 这个名称。中文俗名“豹纹蛞蝓”让人注意外套膜上的暗斑，不过它后半身还常有纵向条纹，花纹因个体变化。它的外部没有蜗牛般的螺壳，外套膜内部却还保留着一小片壳。',
    },
  ],
  "keyFacts": [
    "豹纹蛞蝓用腹面的足爬行，外面没有蜗牛那样的螺壳，外套膜里面仍有小型壳片。",
    "头上有两对触角，较长的一对顶端有眼睛，较短的一对靠近口部。",
    "外套膜上常有暗色斑点，后半身常出现纵向条纹。花纹会随个体而变化。",
    "它常在夜间和潮湿时活动，爬过的地方可能留下透明黏液。",
    "它会吃真菌和腐烂的植物材料。落叶、木头和蘑菇提供环境参照，不是比例尺。"
  ],
  "threats": [
    "局地微生境干燥与清除"
  ],
  "conservationActions": [
    "保留适量枯木落叶供本地小动物藏身，不把蛞蝓带到新的地区。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "软身体慢慢爬"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "原生于欧洲，常见于潮湿林地和花园；已引入其他地区"
    }
  ],
  "media": {
    "image": "./images/species/leopard-slug/01-cover.webp",
    "alt": "豹纹蛞蝓在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/leopard-slug/02-observation.webp",
        "title": "软身体慢慢爬",
        "alt": "豹纹蛞蝓：软身体慢慢爬",
        "caption": "AI 生成科学情景重建。豹纹蛞蝓用腹面的足爬行，外面没有蜗牛那样的螺壳，外套膜里面仍有小型壳片。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard-slug/03-observation.webp",
        "title": "长短两对触角",
        "alt": "豹纹蛞蝓：长短两对触角",
        "caption": "AI 生成科学情景重建。头上有两对触角，较长的一对顶端有眼睛，较短的一对靠近口部。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard-slug/04-observation.webp",
        "title": "前面斑点后面条纹",
        "alt": "豹纹蛞蝓：前面斑点后面条纹",
        "caption": "AI 生成科学情景重建。外套膜上常有暗色斑点，后半身常出现纵向条纹。花纹会随个体而变化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard-slug/05-observation.webp",
        "title": "湿湿的爬行痕迹",
        "alt": "豹纹蛞蝓：湿湿的爬行痕迹",
        "caption": "AI 生成科学情景重建。它常在夜间和潮湿时活动，爬过的地方可能留下透明黏液。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/leopard-slug/06-observation.webp",
        "title": "落叶与真菌",
        "alt": "豹纹蛞蝓：落叶与真菌",
        "caption": "AI 生成科学情景重建。它会吃真菌和腐烂的植物材料。落叶、木头和蘑菇提供环境参照，不是比例尺。",
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
      "title": "美国农业部协作鉴定工具：豹纹蛞蝓形态与分布",
      "url": "https://idtools.org/mollusk/index.cfm?entityID=8229&packageID=1178",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "皇家园艺学会：豹纹蛞蝓外形识别",
      "url": "https://www.rhs.org.uk/science/pdf/slug-id-guide.pdf",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "维基百科所引 Rowson 2017 全球 LC 评估（原页读取受限）",
      "url": "https://en.wikipedia.org/wiki/Limax_maximus",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：豹纹蛞蝓的科学命名记录',
      url: 'https://www.gbif.org/species/2295438',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
