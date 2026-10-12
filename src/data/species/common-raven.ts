import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-raven",
  "slug": "common-raven",
  "names": {
    "zh": "渡鸦",
    "en": "Common Raven"
  },
  "scientificName": "Corvus corax",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Passeriformes",
      "zhName": "雀形目"
    },
    "family": {
      "scientificName": "Corvidae",
      "zhName": "鸦科"
    },
    "genus": {
      "scientificName": "Corvus",
      "zhName": "鸦属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "北半球"
    ],
    "countries": [],
    "range": "广布于北半球，能利用森林、山地、荒漠和苔原等多种环境。"
  },
  "habitats": [
    {
      "name": "山地岩壁、森林与开阔地",
      "realm": "terrestrial",
      "description": '山地岩壁和高树能提供枝条巢的位置，开阔地与森林等环境让渡鸦寻找多种食物。它也能利用荒漠和苔原。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "果实和谷物",
      "小型动物",
      "腐肉"
    ],
    "description": "取食昆虫、果实和谷物、小型动物、腐肉。"
  },
  "tags": [
    "渡鸦",
    "黑色嘴巴和喉羽"
  ],
  "summary": "渡鸦全身黑色，喙粗壮，喉部羽毛蓬松。飞行时楔形的尾端有助于把它与其他黑色鸦类区分开。",
  "description": '渡鸦在地面寻找昆虫、果实、谷物、小动物和腐肉，能利用北半球多种生境。它们在岩壁平台或高树上用枝条筑巢，黑色羽毛随光照呈现光泽。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '黑色嘴巴和喉羽',
      body: '渡鸦的喙粗壮，喉羽蓬松，黑羽在光下会有光泽。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '张开翅膀看尾巴',
      body: '飞行时尾巴中央较长，外轮廓呈楔形。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '在地上寻找食物',
      body: '它在地面取食昆虫，也吃果实、谷物、小动物和腐肉。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '岩壁上的枝条巢',
      body: '渡鸦在岩壁平台或高树上搭建枝条巢。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '两只渡鸦',
      body: '两只渡鸦同处岩石场景，黑羽在不同光线下呈现的光泽有差别。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '渡鸦全球属无危，独立评估日期和全球种群趋势尚未确认。野外观察时不要干扰鸟巢。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '黑色鸦类之间，看喙、喉羽与尾形',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Corvus corax。渡鸦与许多其他黑色鸦类各属不同物种。它的粗喙、蓬松喉羽和飞行时的楔形尾巴能帮助辨认，杂食习性则让它利用从森林到荒漠、苔原的环境。',
    },
  ],
  "keyFacts": [
    '渡鸦的喙粗壮，喉羽蓬松，黑羽在光下会有光泽。',
    '飞行时尾巴中央较长，外轮廓呈楔形。',
    '它在地面取食昆虫，也吃果实、谷物、小动物和腐肉。',
    '渡鸦在岩壁平台或高树上搭建枝条巢。',
    '两只渡鸦同处岩石场景，黑羽在不同光线下呈现的光泽有差别。',
  ],
  "threats": [
    "局地栖息环境改变与巢址干扰"
  ],
  "conservationActions": [
    "保留原生植被和巢址",
    "野外观察保持距离"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黑色嘴巴和喉羽"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "山地岩壁、森林与开阔地"
    }
  ],
  "media": {
    "image": "./images/species/common-raven/01-cover.webp",
    "alt": "渡鸦的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-raven/02-observation.webp",
        "title": "黑色嘴巴和喉羽",
        "alt": '黑色嘴巴和喉羽',
        "caption": "AI 生成科学情景重建。看看粗壮的嘴，再找找下方蓬松的喉部羽毛。黑羽在光下会有光泽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-raven/03-observation.webp",
        "title": "张开翅膀看尾巴",
        "alt": '张开翅膀看尾巴',
        "caption": "AI 生成科学情景重建。渡鸦飞行时，尾巴中央较长，外轮廓呈楔形。图中展示展翅的姿态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-raven/04-observation.webp",
        "title": "在地上寻找食物",
        "alt": '在地上寻找食物',
        "caption": "AI 生成科学情景重建。渡鸦会在地面觅食，昆虫只是食物的一部分；它也吃果实、小动物和腐肉。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-raven/05-observation.webp",
        "title": "岩壁上的枝条巢",
        "alt": '岩壁上的枝条巢',
        "caption": "AI 生成科学情景重建。渡鸦会在岩壁平台或高树上筑巢，巢中有许多枝条。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-raven/06-observation.webp",
        "title": "两只渡鸦",
        "alt": '两只渡鸦',
        "caption": "AI 生成科学情景重建。两只渡鸦停在岩石上。先找它们的嘴和脚，再看看黑羽在不同光线下的样子。",
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
      "title": "Cornell Lab：渡鸦食性与栖息地",
      "url": "https://www.allaboutbirds.org/guide/common_raven/lifehistory",
      "kind": "ecology",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "美国国家公园管理局：渡鸦识别",
      "url": "https://www.nps.gov/articles/000/common-raven.htm",
      "kind": "general",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "BTO：渡鸦分类与全球等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/raven",
      "kind": "conservation",
      "accessedAt": "2026-09-17"
    },
    {
      title: 'GBIF：Corvus corax 的命名作者与年份',
      url: 'https://www.gbif.org/species/2482492',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-17",
  "updatedAt": "2026-09-17"
} as const satisfies Species;

export default profile;
