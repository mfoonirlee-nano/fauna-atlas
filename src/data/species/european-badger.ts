import type { Species } from '../../types/species.ts';

const profile = {
  "id": "european-badger",
  "slug": "european-badger",
  "names": {
    "zh": "欧洲狗獾",
    "en": "European Badger"
  },
  "scientificName": "Meles meles",
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
      "scientificName": "Mustelidae",
      "zhName": "鼬科"
    },
    "genus": {
      "scientificName": "Meles",
      "zhName": "狗獾属"
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
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲"
    ],
    "countries": [],
    "range": '主要分布于欧洲的林地、草地和农田交错地带。亚洲狗獾与日本狗獾属于其他物种，它们的分布另计。'
  },
  "habitats": [
    {
      "name": "林地与草地交错地带",
      "realm": "terrestrial",
      "description": '林地、草地和农田交错环境提供多种食物。狗獾掘出地下洞穴，洞穴可有多个入口，绿篱和林地提供附近遮蔽。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "蚯蚓",
      "昆虫",
      "果实",
      "小型脊椎动物"
    ],
    "description": "食性随地区和季节变化；会寻找蚯蚓、昆虫，也吃果实等植物性食物。"
  },
  "tags": [
    "欧洲狗獾",
    "脸上的黑白条纹"
  ],
  "summary": "欧洲狗獾脸上有两条经过眼睛的黑色纵纹。它用有力的前爪掘土，在地下洞穴居住，常在夜间外出觅食。",
  "description": '欧洲狗獾背部灰白，腹部和短腿较黑，身后有短尾巴。它用前爪掘土，修整地下洞穴或寻找食物，常在夜里低头嗅闻，寻找蚯蚓、昆虫和果实。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '脸上的黑白条纹',
      body: '脸上两条黑色纵纹经过眼睛，背部灰白，腿和腹部较黑。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '前爪掘土',
      body: '狗獾用前爪挖土，修整洞穴或寻找食物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '落叶下面找食物',
      body: '它低头嗅闻地面，寻找蚯蚓和其他食物。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '洞口在哪里',
      body: '欧洲狗獾住在地下洞穴里，一个洞穴可以有多个入口。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '短腿和短尾巴',
      body: '它的腿短，身后有短尾巴，常在夜间外出觅食。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危。保留林地、绿篱与洞穴周边环境，并减少道路造成的伤害，有助于保护当地种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '不同狗獾与多入口洞穴',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Meles meles。欧洲狗獾与亚洲狗獾、日本狗獾属于不同物种，旧资料中的广义范围需要区分。它的生活围绕地下洞穴展开，有力前爪用于掘土，洞穴可以有多个入口。',
    },
  ],
  "keyFacts": [
    '脸上两条黑色纵纹经过眼睛，背部灰白，腿和腹部较黑。',
    '狗獾用前爪挖土，修整洞穴或寻找食物。',
    '它低头嗅闻地面，寻找蚯蚓和其他食物。',
    '欧洲狗獾住在地下洞穴里，一个洞穴可以有多个入口。',
    '它的腿短，身后有短尾巴，常在夜间外出觅食。',
  ],
  "threats": [
    "道路交通",
    "栖息地破碎化",
    "捕杀"
  ],
  "conservationActions": [
    "保留林地与绿篱",
    "保护洞穴",
    "减少道路伤害"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "脸上的黑白条纹"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林地与草地交错地带"
    }
  ],
  "media": {
    "image": "./images/species/european-badger/01-cover.webp",
    "alt": "欧洲狗獾的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-badger/02-observation.webp",
        "title": "脸上的黑白条纹",
        "alt": '脸上的黑白条纹',
        "caption": "AI 生成科学情景重建。从鼻子向耳朵看，找找经过眼睛的黑色条纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-badger/03-observation.webp",
        "title": "前爪掘土",
        "alt": '前爪掘土',
        "caption": "AI 生成科学情景重建。狗獾用前爪挖开泥土，修整洞穴或寻找食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-badger/04-observation.webp",
        "title": "落叶下面找食物",
        "alt": '落叶下面找食物',
        "caption": "AI 生成科学情景重建。它低头嗅闻地面，寻找蚯蚓和其他食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-badger/05-observation.webp",
        "title": "洞口在哪里",
        "alt": '洞口在哪里',
        "caption": "AI 生成科学情景重建。狗獾的洞穴可以有多个入口。看看土坡上的洞口。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-badger/06-observation.webp",
        "title": "短腿和短尾巴",
        "alt": '短腿和短尾巴',
        "caption": "AI 生成科学情景重建。看看灰色背部下面的黑色短腿，再找找身体后面的短尾巴。",
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
      "title": "Mammal Diversity Database：欧洲狗獾分类与分布",
      "url": "https://www.mammaldiversity.org/taxon/1005859/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "European Badger：保护状况",
      "url": "https://animaldiversity.org/accounts/Meles_meles/",
      "kind": "conservation",
      "accessedAt": "2026-09-16"
    },
    {
      "title": "欧洲狗獾：形态与生活习性",
      "url": "https://animaldiversity.org/accounts/Meles_meles/",
      "kind": "ecology",
      "accessedAt": "2026-09-16"
    },
    {
      title: 'GBIF：Meles meles 的命名作者与年份',
      url: 'https://www.gbif.org/species/2433875',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-16",
  "updatedAt": "2026-09-16"
} as const satisfies Species;

export default profile;
