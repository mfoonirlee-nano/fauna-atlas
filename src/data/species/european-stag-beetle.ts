import type { Species } from '../../types/species.ts';

const profile = {
  "id": "european-stag-beetle",
  "slug": "european-stag-beetle",
  "names": {
    "zh": "欧洲锹甲",
    "en": "European Stag Beetle",
    "aliases": [
      "欧洲鹿角锹甲"
    ]
  },
  "scientificName": "Lucanus cervus",
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
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Coleoptera",
      "zhName": "鞘翅目"
    },
    "family": {
      "scientificName": "Lucanidae",
      "zhName": "锹甲科"
    },
    "genus": {
      "scientificName": "Lucanus",
      "zhName": "锹甲属"
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
    "assessor": "全球等级核验范围见保护章节；未确认独立评估日期和全球趋势"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲部分阔叶林、园地与公园"
    ],
    "countries": [],
    "range": "分布于欧洲多地的阔叶林及有腐木的园地，地区间分布和数量差异明显。"
  },
  "habitats": [
    {
      "name": "保留老树和腐木的阔叶林及园地",
      "realm": "terrestrial",
      "description": '老树、树桩和腐木为幼虫提供取食与发育环境。成虫可在阔叶林及园地活动，温暖季节的傍晚较容易见到。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "detritivore"
    ],
    "foods": [
      "幼虫取食腐朽木材",
      "成虫可利用树液等液体"
    ],
    "description": '幼虫在腐木中取食并发育多年。成虫取食较少，可利用液体食物，取食方式与幼虫不同。'
  },
  "tags": [
    "欧洲锹甲",
    "雄虫像鹿角的大颚"
  ],
  "summary": "雄性欧洲锹甲有一对分枝的大颚，形似鹿角；雌虫的大颚短得多。大颚是口器，头上另有触角。",
  "description": '欧洲锹甲的头胸部黑色，鞘翅深褐，鞘翅下面盖着薄后翅。雄虫用大颚夹起对手，争夺交配机会；乳白色幼虫则在腐木里取食、发育多年。',
  "storySections": [
    {
      key: 'mandibles',
      label: '生活与认识',
      title: '大颚像一对鹿角',
      body: '雄虫头前的大颚内侧有分枝，旁边另有两根较细的触角。大颚属于口器，触角是不同的结构。',
    },
    {
      key: 'female',
      label: '生活与认识',
      title: '雌虫的大颚短得多',
      body: '雌性欧洲锹甲的大颚比雄虫短，外形没有雄虫那么夸张。',
    },
    {
      key: 'larva',
      label: '生活与认识',
      title: '幼虫住在腐木里',
      body: '幼虫呈乳白色，身体常弯成 C 形，头部较深。它在朽木中取食多年，腐木也是动物的家。',
    },
    {
      key: 'wrestling',
      label: '生活与认识',
      title: '雄虫会用大颚争斗',
      body: '雄虫会用大颚夹住或抬起对手，争夺交配机会。',
    },
    {
      key: 'dusk',
      label: '生活与认识',
      title: '傍晚在林地活动',
      body: '温暖季节的傍晚可以见到成虫活动。它有六条腿，背上坚硬的鞘翅盖住薄薄的后翅。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给幼虫留一些腐木',
      body: '欧洲区域评估为近危，全球物种级评估尚未确认，全球等级为未评估（NE）。适当保留树桩和腐木，能给幼虫留下生境。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“鹿角”长在嘴部',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Lucanus cervus。雄性欧洲锹甲分枝的大颚看起来像鹿角，却属于嘴部口器。它们用大颚争夺交配机会；雌虫的大颚短得多，幼虫则长期住在腐木中，外形与成虫完全不同。',
    },
  ],
  "keyFacts": [
    '雄虫的大颚内侧有分枝，头部另有触角。',
    '雌虫的大颚比雄虫短。',
    '乳白色幼虫常弯成 C 形，头部较深，在腐木中发育多年。',
    '雄虫用大颚夹住或抬起对手，争夺交配机会。',
    '成虫有六条腿，坚硬的鞘翅下面盖着薄后翅。',
  ],
  "threats": [
    "腐木清除",
    "阔叶林栖息地丧失"
  ],
  "conservationActions": [
    "保留适当腐木与老树",
    "保护阔叶林"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "雄虫像鹿角的大颚"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "保留老树和腐木的阔叶林及园地"
    }
  ],
  "media": {
    "image": "./images/species/european-stag-beetle/01-cover.webp",
    "alt": "欧洲锹甲的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-stag-beetle/02-observation.webp",
        "title": "雄虫的分枝大颚",
        "alt": "雄性欧洲锹甲头前有一对鹿角状大颚",
        "caption": "AI 生成科学情景重建。雄性欧洲锹甲头前有一对鹿角状大颚。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-stag-beetle/03-observation.webp",
        "title": "雌虫的短颚",
        "alt": "雌性欧洲锹甲停在腐木上，大颚较短",
        "caption": 'AI 生成科学情景重建。雌性欧洲锹甲停在腐木上，大颚较短。不同图片的显示大小不能用来推算雌雄的真实体长。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-stag-beetle/04-observation.webp",
        "title": "腐木中的幼虫",
        "alt": "乳白色欧洲锹甲幼虫弯成 C 形藏在腐木中",
        "caption": "AI 生成科学情景重建。乳白色欧洲锹甲幼虫弯成 C 形藏在腐木中。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-stag-beetle/05-observation.webp",
        "title": "雄虫大颚相接",
        "alt": "两只雄性欧洲锹甲在树皮上用大颚接触",
        "caption": "AI 生成科学情景重建。两只雄性欧洲锹甲在树皮上用大颚接触。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-stag-beetle/06-observation.webp",
        "title": "傍晚走过林地",
        "alt": "雄性欧洲锹甲在傍晚的橡树林地面行走",
        "caption": "AI 生成科学情景重建。雄性欧洲锹甲在傍晚的橡树林地面行走。",
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
      "title": "Natural History Museum：欧洲锹甲自然史",
      "url": "https://www.nhm.ac.uk/discover/stag-beetles.html",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Natural History Museum UK Species Inventory：Lucanus cervus",
      "url": "https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000011448",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Natural History Museum：欧洲区域近危评估及栖息地威胁",
      "url": "https://www.nhm.ac.uk/discover/stag-beetles.html",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Lucanus cervus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5743122',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
