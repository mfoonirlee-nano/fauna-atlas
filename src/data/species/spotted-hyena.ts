import type { Species } from '../../types/species.ts';

const profile = {
  "id": "spotted-hyena",
  "slug": "spotted-hyena",
  "names": {
    "zh": "斑鬣狗",
    "en": "Spotted Hyena"
  },
  "scientificName": "Crocuta crocuta",
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
      "scientificName": "Hyaenidae",
      "zhName": "鬣狗科"
    },
    "genus": {
      "scientificName": "Crocuta",
      "zhName": "斑鬣狗属"
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
      "非洲"
    ],
    "regions": [
      "撒哈拉以南非洲"
    ],
    "countries": [],
    "range": "分布于撒哈拉以南非洲的多种开阔生境，局部地区已消失或数量减少。"
  },
  "habitats": [
    {
      "name": "稀树草原与开阔灌丛",
      "realm": "terrestrial",
      "description": '稀树草原和开阔灌丛提供猎物与群体活动空间。局部地区的猎物减少与人兽冲突会影响当地种群。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "角马",
      "羚羊",
      "其他动物",
      "腐肉"
    ],
    "description": "会主动捕猎，也取食其他动物留下的肉和骨骼。"
  },
  "tags": [
    "斑鬣狗",
    "前高后低的身体"
  ],
  "summary": "斑鬣狗肩高臀低，背部向后倾斜。它有圆耳朵和粗壮的颈部，身上布着深色斑点，属于鬣狗科。",
  "description": '斑鬣狗会主动捕猎，也吃其他动物留下的肉和骨骼。它们组成社会群体，用声音、气味和姿势交流，常夜间活动，白天也能见到；幼仔毛色较深，斑点随成长更明显。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '倾斜的背部',
      body: '肩部高、臀部低，使背部轮廓向后倾斜。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '圆耳朵和宽嘴巴',
      body: '头顶有圆耳朵，口鼻较宽，颈部粗壮。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '群体中的同伴',
      body: '斑鬣狗组成社会群体，用声音、气味和姿势交流。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '深色的小宝宝',
      body: '幼仔毛色较深，长大后深色斑点更加显眼。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '黄昏的草地',
      body: '斑鬣狗常在夜间活动，白天也能见到。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，部分地区仍有下降和局部消失。保护野生猎物、改善家畜防护，可减少人兽冲突。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '鬣狗科的捕猎者',
      body: 'Erxleben 于 1777 年描述了这个物种，现用学名为 Crocuta crocuta。斑鬣狗属于鬣狗科，肩高臀低、带斑点的身体容易辨认。它会主动捕猎，也取食其他动物留下的肉和骨骼；幼仔的毛色更深，斑点要在成长后才更明显。',
    },
  ],
  "keyFacts": [
    '肩部高、臀部低，使背部轮廓向后倾斜。',
    '头顶有圆耳朵，口鼻较宽，颈部粗壮。',
    '斑鬣狗组成社会群体，用声音、气味和姿势交流。',
    '幼仔毛色较深，长大后深色斑点更加显眼。',
    '斑鬣狗常在夜间活动，白天也能见到。',
  ],
  "threats": [
    "栖息地减少",
    "与畜牧业冲突造成的捕杀",
    "猎物减少"
  ],
  "conservationActions": [
    "保护栖息地和猎物",
    "改进家畜防护",
    "减少报复性捕杀"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "前高后低的身体"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稀树草原与开阔灌丛"
    }
  ],
  "media": {
    "image": "./images/species/spotted-hyena/01-cover.webp",
    "alt": "斑鬣狗的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/spotted-hyena/02-observation.webp",
        "title": "倾斜的背部",
        "alt": '倾斜的背部',
        "caption": "AI 生成科学情景重建。从肩膀向尾巴看，背部的轮廓逐渐降低。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-hyena/03-observation.webp",
        "title": "圆耳朵和宽嘴巴",
        "alt": '圆耳朵和宽嘴巴',
        "caption": "AI 生成科学情景重建。找找头顶的圆耳朵和宽宽的口鼻。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-hyena/04-observation.webp",
        "title": "群体中的同伴",
        "alt": '群体中的同伴',
        "caption": "AI 生成科学情景重建。斑鬣狗组成社会群体，成员之间会用声音、气味和姿势交流。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-hyena/05-observation.webp",
        "title": "深色的小宝宝",
        "alt": '深色的小宝宝',
        "caption": "AI 生成科学情景重建。年幼的斑鬣狗毛色较深，长大后身上的斑点更容易看清。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-hyena/06-observation.webp",
        "title": "黄昏的草地",
        "alt": '黄昏的草地',
        "caption": "AI 生成科学情景重建。斑鬣狗常在夜间活动，白天也能见到它们。",
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
      "title": "Animal Diversity Web：斑鬣狗分类与等级",
      "url": "https://animaldiversity.org/accounts/Crocuta_crocuta/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "Animal Diversity Web：斑鬣狗全球等级",
      "url": "https://animaldiversity.org/accounts/Crocuta_crocuta/",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "圣迭戈动物园：斑鬣狗",
      "url": "https://animals.sandiegozoo.org/animals/spotted-hyena",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Crocuta crocuta 的命名作者与年份',
      url: 'https://www.gbif.org/species/5218781',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
