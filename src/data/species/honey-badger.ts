import type { Species } from '../../types/species.ts';

const profile = {
  "id": "honey-badger",
  "slug": "honey-badger",
  "names": {
    "zh": "蜜獾",
    "en": "Honey Badger"
  },
  "scientificName": "Mellivora capensis",
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
      "scientificName": "Mellivora",
      "zhName": "蜜獾属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "decreasing",
    "assessor": "依据所列资料中的全球等级；未单独核实评估日期"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲",
      "亚洲"
    ],
    "regions": [
      "非洲",
      "西亚",
      "南亚"
    ],
    "countries": [],
    "range": "分布于非洲多地，并延伸至西亚和南亚的适宜生境；可在干旱灌丛、草地和森林中活动。"
  },
  "habitats": [
    {
      "name": "草地、灌丛与疏林",
      "realm": "terrestrial",
      "description": '草地、干旱灌丛和森林都能供蜜獾寻找食物。土壤与树根附近能藏着小动物，洞穴提供休息位置。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型哺乳动物",
      "爬行动物",
      "昆虫和蜂幼虫",
      "果实"
    ],
    "description": "食物以动物为主，也吃部分植物；会挖出地下的小动物和昆虫。"
  },
  "tags": [
    "蜜獾",
    "浅色背部与黑色肚子"
  ],
  "summary": "蜜獾腿短、身体结实，长前爪适合挖掘。许多个体头顶至背部灰白，脸、腹部和腿黑色，不同地区的毛色有差异。",
  "description": '蜜獾用长而有力的前爪挖土，找出地下小动物和昆虫，也掘出藏身洞穴。它会低头嗅闻地面，幼崽随母亲活动，逐渐学习独自寻找食物。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '背部和肚子的颜色',
      body: '许多个体背部灰白，脸、腹部和腿黑色，各地毛色有差异。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '前爪挖一挖',
      body: '蜜獾用有力前爪挖土，寻找食物或掘出藏身洞穴。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '小耳朵藏在哪里',
      body: '头部两侧的小耳朵贴近皮毛。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '在树根旁闻一闻',
      body: '它低头嗅闻，寻找土里或树根附近的食物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '跟着妈妈走',
      body: '幼崽随母亲活动，逐渐学习独自寻找食物。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '了解它的生存环境',
      body: '全球等级为无危，所列资料记录数量下降。改进蜂箱和家畜防护、减少毒饵和陷阱，可降低人类活动造成的伤害。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '蜂蜜之名与蜂幼虫',
      body: 'Schreber 于 1776 年描述了这个物种，现用学名为 Mellivora capensis。蜜獾的英文常用名 Honey Badger 与它翻找蜂巢的习性有关。圣迭戈动物园的介绍指出，它在蜂巢中寻找的食物包括蜂幼虫；长前爪也让它能挖出地下小动物。',
    },
  ],
  "keyFacts": [
    '许多个体背部灰白，脸、腹部和腿黑色，各地毛色有差异。',
    '蜜獾用有力前爪挖土，寻找食物或掘出藏身洞穴。',
    '头部两侧的小耳朵贴近皮毛。',
    '它低头嗅闻，寻找土里或树根附近的食物。',
    '幼崽随母亲活动，逐渐学习独自寻找食物。',
  ],
  "threats": [
    "陷阱和毒饵",
    "与养蜂和畜牧业的冲突",
    "捕猎"
  ],
  "conservationActions": [
    "改进蜂箱防护",
    "减少毒饵和陷阱",
    "保护栖息地"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "浅色背部与黑色肚子"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "草地、灌丛与疏林"
    }
  ],
  "media": {
    "image": "./images/species/honey-badger/01-cover.webp",
    "alt": "蜜獾的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/honey-badger/02-observation.webp",
        "title": "背部和肚子的颜色",
        "alt": '背部和肚子的颜色',
        "caption": "AI 生成科学情景重建。找找浅灰色的背部，再看看黑色的肚子和腿。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/honey-badger/03-observation.webp",
        "title": "前爪挖一挖",
        "alt": '前爪挖一挖',
        "caption": "AI 生成科学情景重建。蜜獾用有力的前爪挖土，寻找食物或掘出藏身的洞。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/honey-badger/04-observation.webp",
        "title": "小耳朵藏在哪里",
        "alt": '小耳朵藏在哪里',
        "caption": "AI 生成科学情景重建。看看头部两侧贴近皮毛的小耳朵。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/honey-badger/05-observation.webp",
        "title": "在树根旁闻一闻",
        "alt": '在树根旁闻一闻',
        "caption": "AI 生成科学情景重建。蜜獾会低头嗅闻地面，寻找藏在土里或根部附近的食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/honey-badger/06-observation.webp",
        "title": "跟着妈妈走",
        "alt": '跟着妈妈走',
        "caption": "AI 生成科学情景重建。幼崽会随母亲活动，逐渐学习独自寻找食物。",
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
      "title": "Animal Diversity Web：蜜獾分类与全球等级",
      "url": "https://animaldiversity.org/accounts/Mellivora_capensis/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "Animal Diversity Web：蜜獾保护状况",
      "url": "https://animaldiversity.org/accounts/Mellivora_capensis/",
      "kind": "conservation",
      "accessedAt": "2026-09-15"
    },
    {
      "title": "圣迭戈动物园：蜜獾",
      "url": "https://animals.sandiegozoo.org/animals/honey-badger-ratel",
      "kind": "ecology",
      "accessedAt": "2026-09-15"
    },
    {
      title: 'GBIF：Mellivora capensis 的命名作者与年份',
      url: 'https://www.gbif.org/species/2433695',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-15",
  "updatedAt": "2026-09-15"
} as const satisfies Species;

export default profile;
