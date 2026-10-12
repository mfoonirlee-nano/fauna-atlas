import type { Species } from '../../types/species.ts';

const profile = {
  "id": "african-wild-dog",
  "slug": "african-wild-dog",
  "names": {
    "zh": "非洲野犬",
    "en": "African Wild Dog"
  },
  "scientificName": "Lycaon pictus",
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
      "scientificName": "Canidae",
      "zhName": "犬科"
    },
    "genus": {
      "scientificName": "Lycaon",
      "zhName": "非洲野犬属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "EN",
    "label": {
      "zh": "濒危",
      "en": "Endangered"
    },
    "trend": "decreasing",
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
      "非洲南部",
      "非洲东部"
    ],
    "countries": [],
    "range": "现存种群主要集中在非洲南部和东部，分布破碎，需要大面积、彼此连通的活动空间。"
  },
  "habitats": [
    {
      "name": "稀树草原与疏林",
      "realm": "terrestrial",
      "description": '稀树草原和疏林提供追逐猎物的空间与休息树荫。幼崽在洞穴中长大，整个群体的活动需要大片连通生境。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "羚羊",
      "其他中型有蹄类",
      "野兔"
    ],
    "description": "以肉食为主，群体合作追逐猎物，也捕食野兔等小动物。"
  },
  "tags": [
    "非洲野犬",
    "深浅相间的斑块"
  ],
  "summary": "非洲野犬有长腿和大圆耳，尾端通常为白色。每只身上的深浅斑块排列都不同。",
  "description": '非洲野犬成群寻找、追逐猎物，群体成员也会帮助喂养和照顾洞穴中的幼崽。它们在稀树草原和疏林活动，能在树荫下休息，需要大片连通的生境。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '找找身上的斑块',
      body: '毛皮混有黑、黄褐和白色，每只野犬的斑块排列都不同。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '两只大圆耳朵',
      body: '非洲野犬有两只宽大的圆耳朵。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '一起走过草原',
      body: '群体成员合作寻找和追逐猎物。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '洞口的幼崽',
      body: '幼崽在洞穴中长大，群体成员帮助照顾和喂养。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树荫下休息',
      body: '非洲野犬会在草原的树荫下卧下休息。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为濒危。保护连通的活动空间、减少捕套和家犬疾病传播，能帮助分散的野犬种群延续。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '斑块不同，幼崽由群体照顾',
      body: 'Temminck 于 1820 年描述了这个物种，现用学名为 Lycaon pictus。非洲野犬每只都有不同的深浅斑块，尾端通常为白色。它们的合作不限于追猎，洞穴里的幼崽也会由群体成员帮助照顾和喂养。',
    },
  ],
  "keyFacts": [
    '毛皮混有黑、黄褐和白色，每只野犬的斑块排列都不同。',
    '非洲野犬有两只宽大的圆耳朵。',
    '群体成员合作寻找和追逐猎物。',
    '幼崽在洞穴中长大，群体成员帮助照顾和喂养。',
    '非洲野犬会在草原的树荫下卧下休息。',
  ],
  "threats": [
    "栖息地破碎化",
    "家养动物传播的疾病",
    "人兽冲突与意外捕套"
  ],
  "conservationActions": [
    "保护生境廊道",
    "减少捕套和冲突",
    "防控家犬传染病"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "深浅相间的斑块"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "稀树草原与疏林"
    }
  ],
  "media": {
    "image": "./images/species/african-wild-dog/01-cover.webp",
    "alt": "非洲野犬的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/african-wild-dog/02-observation.webp",
        "title": "找找身上的斑块",
        "alt": '找找身上的斑块',
        "caption": "AI 生成科学情景重建。沿着身体找找黑色、黄褐色和白色，每只野犬的花纹都不一样。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-wild-dog/03-observation.webp",
        "title": "两只大圆耳朵",
        "alt": '两只大圆耳朵',
        "caption": "AI 生成科学情景重建。看看头顶两只宽宽的圆耳朵。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-wild-dog/04-observation.webp",
        "title": "一起走过草原",
        "alt": '一起走过草原',
        "caption": "AI 生成科学情景重建。非洲野犬成群活动，会合作寻找和追逐猎物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-wild-dog/05-observation.webp",
        "title": "洞口的幼崽",
        "alt": '洞口的幼崽',
        "caption": "AI 生成科学情景重建。幼崽在洞穴中长大，群体成员会帮助照顾和喂养它们。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/african-wild-dog/06-observation.webp",
        "title": "树荫下休息",
        "alt": '树荫下休息',
        "caption": "AI 生成科学情景重建。在草原上找找树荫和卧着休息的野犬。",
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
      "title": "Animal Diversity Web：非洲野犬分类与生态",
      "url": "https://animaldiversity.org/accounts/Lycaon_pictus/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "IUCN 犬科专家组：非洲野犬",
      "url": "https://www.canids.org/species/view/African-wild-dog",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Lycaon pictus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219317',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
