import type { Species } from '../../types/species.ts';

const profile = {
  "id": "domestic-chicken",
  "slug": "domestic-chicken",
  "names": {
    "zh": "家鸡",
    "en": "Domestic Chicken",
    "aliases": [
      "鸡"
    ]
  },
  "scientificName": "Gallus gallus",
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
      "scientificName": "Galliformes",
      "zhName": "鸡形目"
    },
    "family": {
      "scientificName": "Phasianidae",
      "zhName": "雉科"
    },
    "genus": {
      "scientificName": "Gallus",
      "zhName": "原鸡属"
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
    "assessor": "本档案限定家养范围；NE 表示未收录适用于该范围的红色名录评估，不替代野生祖先或整个接受物种的评估。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "世界多地（家养范围）"
    ],
    "countries": [],
    "range": "人类在世界多地饲养家鸡，农场和乡间庭院是常见观察场景。这里不把家鸡的全球饲养范围写成红原鸡的原生分布。"
  },
  "habitats": [
    {
      "name": "农场与乡间庭院",
      "realm": "terrestrial",
      "description": "人类在世界多地饲养家鸡，农场和乡间庭院是常见观察场景。这里不把家鸡的全球饲养范围写成红原鸡的原生分布。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "种子",
      "昆虫",
      "适龄饲料"
    ],
    "description": "家鸡是杂食动物，能取食种子和昆虫。饲养者会提供适合生长阶段的饲料，观察图中的少量种子不表示完整日粮。"
  },
  "tags": [
    "家鸡",
    "农场与乡间庭院"
  ],
  "summary": "家鸡用喙啄食，用脚刨动地面。受精卵在适宜条件下孵化，小鸡出壳后能行走。",
  "description": "家鸡有喙、鸡冠、肉垂和带鳞片的脚。许多品种的公鸡鸡冠更大，尾羽更长；羽色和体型也随品种变化。图中的褐色母鸡与公鸡用于比较外形，不凭颜色判断全部家鸡的性别。本档案以 Gallus gallus 记录家鸡主题。这个接受物种名也涵盖红原鸡，正文限定驯化范围；常见的 Gallus gallus domesticus 写法表达家养形式，家鸡品种不新增物种节点。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从身体特点辨认",
      "body": "家鸡有喙、鸡冠、肉垂和带鳞片的脚。许多品种的公鸡鸡冠更大，尾羽更长；羽色和体型也随品种变化。图中的褐色母鸡与公鸡用于比较外形，不凭颜色判断全部家鸡的性别。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "家鸡会刨地、啄食，也会在松散地面进行沙浴。它们常在高处栖息。观察时可以记录啄地与刨地的先后，不从单张图片推断动作频率。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "家鸡是杂食动物，能取食种子和昆虫。饲养者会提供适合生长阶段的饲料，观察图中的少量种子不表示完整日粮。"
    },
    {
      "key": "life-cycle",
      "label": "成长与育幼",
      "title": "幼仔怎样长大",
      "body": "小鸡由卵孵出。受精卵在适宜孵化条件下通常约 21 天孵化，未受精的蛋不会长出小鸡。出壳小鸡有绒羽，能行走；是否由母鸡孵育还取决于品种与饲养方式。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的内容范围",
      "body": "本档案以 Gallus gallus 记录家鸡主题。这个接受物种名也涵盖红原鸡，正文限定驯化范围；常见的 Gallus gallus domesticus 写法表达家养形式，家鸡品种不新增物种节点。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：鸡怎样用喙和脚寻找食物？观察任务：远看一次刨地后啄食的过程，再比较成年鸡与小鸡的羽毛。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "家鸡的学名与记录",
      "body": "林奈在 1758 年以 Phasianus gallus 命名，后来学者将它归入 Gallus，因而作者名加括号。家鸡的驯化历史早于这一名称，本档案用 GBIF 接受名定位，并将内容范围限定为农场与家庭饲养的鸡。"
    }
  ],
  "keyFacts": [
    "家鸡有喙、鸡冠、肉垂和带鳞片的脚。许多品种的公鸡鸡冠更大，尾羽更长；羽色和体型也随品种变化。图中的褐色母鸡与公鸡用于比较外形，不凭颜色判断全部家鸡的性别。",
    "家鸡是杂食动物，能取食种子和昆虫。饲养者会提供适合生长阶段的饲料，观察图中的少量种子不表示完整日粮。",
    "小鸡由卵孵出。受精卵在适宜孵化条件下通常约 21 天孵化，未受精的蛋不会长出小鸡。出壳小鸡有绒羽，能行走；是否由母鸡孵育还取决于品种与饲养方式。"
  ],
  "threats": [
    "不适当的饲养环境"
  ],
  "conservationActions": [
    "按场所规则远距离观察，为动物保留取食、休息和育幼空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "农场与乡间庭院"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "啄食与孵化"
    }
  ],
  "media": {
    "image": "./images/species/domestic-chicken/01-cover.webp",
    "alt": "家鸡及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/domestic-chicken/02-observation.webp",
        "title": "公鸡的外形",
        "alt": "家鸡：公鸡的外形，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。比较鸡冠和尾羽；不同品种的差异不能仅靠颜色解释。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-chicken/03-observation.webp",
        "title": "啄食地面",
        "alt": "家鸡：啄食地面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察喙接近种子，静图不展示完整刨地过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-chicken/04-observation.webp",
        "title": "母鸡与巢中的蛋",
        "alt": "家鸡：母鸡与巢中的蛋，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。外观不能判断是否受精，只有受精卵在适宜条件下才可能孵化。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-chicken/05-observation.webp",
        "title": "母鸡与小鸡",
        "alt": "家鸡：母鸡与小鸡，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。区分成年羽毛和幼仔绒羽，不指定日龄。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/domestic-chicken/06-observation.webp",
        "title": "鸡冠、喙与肉垂",
        "alt": "家鸡：鸡冠、喙与肉垂，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察头部结构，大小随个体和品种变化。",
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
      "title": "GBIF：接受学名、命名人和分类链",
      "url": "https://www.gbif.org/species/9326020",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "大学推广联合项目：家鸡的日常行为",
      "url": "https://poultry.extension.org/articles/poultry-behavior/normal-behaviors-of-chickens-in-small-and-backyard-poultry-flocks/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "大学推广联合项目：鸡吃什么",
      "url": "https://poultry.extension.org/articles/poultry-related-youth-programs/what-does-a-chicken-eat/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "大学推广联合项目：禽类胚胎与孵化",
      "url": "https://poultry.extension.org/articles/poultry-anatomy/avian-embryology/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "密歇根大学 ADW：原鸡与驯化范围",
      "url": "https://animaldiversity.org/accounts/Gallus_gallus/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
