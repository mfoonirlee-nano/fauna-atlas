import type { Species } from '../../types/species.ts';

const profile = {
  "id": "atlantic-mudskipper",
  "slug": "atlantic-mudskipper",
  "names": {
    "zh": "大西洋弹涂鱼",
    "en": "Atlantic Mudskipper"
  },
  "scientificName": "Periophthalmus barbarus",
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
      "scientificName": "Gobiiformes",
      "zhName": "虾虎鱼目"
    },
    "family": {
      "scientificName": "Oxudercidae",
      "zhName": "背眼虾虎鱼科"
    },
    "genus": {
      "scientificName": "Periophthalmus",
      "zhName": "弹涂鱼属"
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
    "assessedYear": 2019,
    "assessor": 'FishBase 转引 IUCN 全球评估，评估日期 2019-10-20；全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "marine",
      "freshwater"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "西非大西洋沿岸"
    ],
    "countries": [
      "塞内加尔",
      "塞拉利昂",
      "利比里亚",
      "尼日利亚"
    ],
    "range": '分布于西非沿海河口、红树林和潮间带泥滩，也可进入近海岸的淡水区域。'
  },
  "habitats": [
    {
      "name": "西非红树林潮间带",
      "realm": "marine",
      "description": '退潮后的湿润泥滩供它们活动、觅食，泥滩洞穴供产卵。生活跨越水陆，但它们仍属鱼类。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "小蟹",
      "昆虫",
      "其他节肢动物",
      "部分植物性食物"
    ],
    "description": '成体主要吃泥面上的节肢动物，包括小蟹和昆虫，也有植物性食物记录。'
  },
  "tags": [
    "大西洋弹涂鱼",
    "西非红树林潮间带"
  ],
  "summary": '大西洋弹涂鱼用胸鳍支撑身体，两眼高出头顶。它能在湿泥面活动，也能在水中生活。',
  "description": '大西洋弹涂鱼身体褐灰，常带细小蓝斑，背上有两枚背鳍。它有水中和空气呼吸能力，退潮后在湿润泥滩寻找小蟹、昆虫等动物，在泥滩洞穴中产卵。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '用胸鳍支撑的鱼',
      body: '两眼高出头顶，褐灰身体常带细小蓝斑，背上有两枚背鳍。胸鳍能支撑身体，后部仍是鱼尾。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '西非红树林潮间带',
      body: '它们利用西非红树林河口和潮间带泥滩，退潮后在湿泥活动，能在水中和空气中呼吸。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '泥面上的小蟹与昆虫',
      body: '成体主要寻找小蟹、昆虫等节肢动物，也有取食植物的记录。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '在泥滩洞穴中产卵',
      body: '大西洋弹涂鱼在泥滩洞穴中产卵。不同弹涂鱼的地下卵室和护卵细节需要分别研究。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '辐鳍鱼中的弹涂鱼',
      body: '大西洋弹涂鱼的学名为 Periophthalmus barbarus，属于辐鳍鱼纲、虾虎鱼目和背眼虾虎鱼科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为无危，FishBase 转引的评估日期为 2019-10-20。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '水陆活动的鱼，呼吸也经过测量',
      body: 'Linnaeus 于 1766 年描述了这个物种，现用学名为 Periophthalmus barbarus。它跨越水陆活动，分类仍属于辐鳍鱼纲。1995 年研究测量了本种在水中与空气中的呼吸，为这种生活方式提供生理证据；高出头顶的眼睛和支撑身体的胸鳍则能从外形观察。',
    },
  ],
  "keyFacts": [
    '两眼高出头顶，胸鳍能支撑身体。',
    '褐灰身体常有细小蓝色斑点。',
    '退潮后在湿润泥面活动。',
    '能在水中和空气中呼吸。',
    '在泥滩洞穴中产卵。',
  ],
  "threats": [
    "红树林与潮间带栖息地改变"
  ],
  "conservationActions": [
    "保护潮间带及红树林",
    "观察时保留动物与洞口距离"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "用胸鳍支撑的鱼"
    }
  ],
  "media": {
    "image": "./images/species/atlantic-mudskipper/01-cover.webp",
    "alt": "大西洋弹涂鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/atlantic-mudskipper/02-observation.webp",
        "title": "湿泥面上的成体",
        "alt": '湿泥面上的成体，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。胸鳍支撑身体，尾部完整。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-mudskipper/03-observation.webp",
        "title": "头顶的两只眼睛",
        "alt": '头顶的两只眼睛，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。头部近景与蓝色斑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-mudskipper/04-observation.webp",
        "title": "洞口旁的身体",
        "alt": '洞口旁的身体，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。洞口环境重建，不表示内部巢室。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-mudskipper/05-observation.webp",
        "title": "水池边的胸鳍",
        "alt": '水池边的胸鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。鳍支撑姿态，不画脚趾。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/atlantic-mudskipper/06-observation.webp",
        "title": "竖起的第一背鳍",
        "alt": '竖起的第一背鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。背鳍边缘颜色重建，非求偶或争斗实录。",
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
      "title": "FishBase：分类、形态、分布与评估日期",
      "url": "https://www.fishbase.se/summary/Periophthalmus_barbarus.html",
      "kind": "general",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "澳大利亚博物馆：弹涂鱼类分类修订及本种诊断",
      "url": "https://media.australian.museum/media/Uploads/Journals/17704/93_complete.pdf",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "1995 原始研究：本种水中与空气呼吸测量",
      "url": "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1095-8649.1995.tb01898.x",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'GBIF：Periophthalmus barbarus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2376966',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
