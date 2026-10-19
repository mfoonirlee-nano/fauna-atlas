import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eastern-cattle-egret",
  "slug": "eastern-cattle-egret",
  "names": {
    "zh": "牛背鹭",
    "en": "Eastern Cattle Egret",
    "aliases": [
      "Ardea coromanda"
    ]
  },
  "scientificName": "Bubulcus coromandus",
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
      "scientificName": "Pelecaniformes",
      "zhName": "鹈形目"
    },
    "family": {
      "scientificName": "Ardeidae",
      "zhName": "鹭科"
    },
    "genus": {
      "scientificName": "Bubulcus",
      "zhName": "牛背鹭属"
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
    "assessor": "香港鸟类志在东方牛背鹭条目下列 IUCN LC。未核实该等级对应的独立评估日期及与旧广义牛背鹭的范围关系，故不填写评估年或全球趋势。"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "牧场、农田与湿草地"
    ],
    "countries": [],
    "range": "本档案介绍东亚、南亚和东南亚至澳大利亚等地的东方种群。中国南方有留居种群，一些更北地区夏季出现；旧广义牛背鹭的全球扩散史不能全部套到东方种。",
    "center": {
      "lat": 23,
      "lng": 113
    }
  },
  "habitats": [
    {
      "name": "牧场、农田与湿草地",
      "realm": "terrestrial",
      "description": "牛背鹭会在牲畜附近走动，捕捉被踩动草丛惊起的小动物，也会独自在湿地取食。它并非总站在牛背上，也不必依赖牛才能生活。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "其他小型动物"
    ],
    "description": "牛背鹭以昆虫等小型动物为食，也有取食蛙等动物的记录。跟随牛时常利用牛活动惊起的食物，不应一概解释成给牛清除寄生虫。"
  },
  "tags": [
    "牛背鹭",
    "牧场、农田与湿草地"
  ],
  "summary": "牛背鹭身形较紧凑，嘴较短厚。牛背鹭会在牲畜附近走动，捕捉被踩动草丛惊起的小动物，也会独自在湿地取食。",
  "description": "牛背鹭身形较紧凑，嘴较短厚。非繁殖期大多白色，繁殖羽在头颈和背等处出现橙褐色；不同季节的颜色不应当作两个物种。本库按 GBIF 采用 Bubulcus coromandus，限定东方牛背鹭范围。todo 的 Ardea coromanda 为另一属级组合，不能用只匹配到 Ardea 属的结果当作种级核验；旧广义 Bubulcus ibis 的全球范围另行说明。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从羽色与轮廓辨认",
      "body": "牛背鹭身形较紧凑，嘴较短厚。非繁殖期大多白色，繁殖羽在头颈和背等处出现橙褐色；不同季节的颜色不应当作两个物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "牛背鹭会在牲畜附近走动，捕捉被踩动草丛惊起的小动物，也会独自在湿地取食。它并非总站在牛背上，也不必依赖牛才能生活。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "牛背鹭以昆虫等小型动物为食，也有取食蛙等动物的记录。跟随牛时常利用牛活动惊起的食物，不应一概解释成给牛清除寄生虫。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼鸟、成鸟与季节",
      "body": "牛背鹭常在鹭类繁殖群中筑巢，亲鸟育雏。繁殖羽的橙褐色属于季节变化，幼鸟外观又有差异，图库不把同框成鸟当作真实配偶记录。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "名称指向的物种",
      "body": "本库按 GBIF 采用 Bubulcus coromandus，限定东方牛背鹭范围。todo 的 Ardea coromanda 为另一属级组合，不能用只匹配到 Ardea 属的结果当作种级核验；旧广义 Bubulcus ibis 的全球范围另行说明。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：牛背鹭一定站在牛背上吗？观察任务：从牧场允许的位置比较鸟与牲畜的距离，不走入围栏或靠近鹭巢。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Bubulcus coromandus 的名称记录",
      "body": "GBIF 的名称记录为 Bubulcus coromandus (Boddaert, 1783)。作者与年份表示科学命名记录，不是人类第一次见到这种鸟的时间。本库按 GBIF 采用 Bubulcus coromandus，限定东方牛背鹭范围。todo 的 Ardea coromanda 为另一属级组合，不能用只匹配到 Ardea 属的结果当作种级核验；旧广义 Bubulcus ibis 的全球范围另行说明。"
    }
  ],
  "keyFacts": [
    "牛背鹭身形较紧凑，嘴较短厚。非繁殖期大多白色，繁殖羽在头颈和背等处出现橙褐色；不同季节的颜色不应当作两个物种。",
    "牛背鹭以昆虫等小型动物为食，也有取食蛙等动物的记录。跟随牛时常利用牛活动惊起的食物，不应一概解释成给牛清除寄生虫。",
    "牛背鹭常在鹭类繁殖群中筑巢，亲鸟育雏。繁殖羽的橙褐色属于季节变化，幼鸟外观又有差异，图库不把同框成鸟当作真实配偶记录。"
  ],
  "threats": [
    "栖息地改变与人为干扰"
  ],
  "conservationActions": [
    "保留适合取食与停歇的环境，按场所规则远距离观察，不干扰巢与幼鸟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "牧场、农田与湿草地"
    },
    {
      "key": "food",
      "label": "食物举例",
      "value": "昆虫、其他小型动物"
    }
  ],
  "media": {
    "image": "./images/species/eastern-cattle-egret/01-cover.webp",
    "alt": "牛背鹭及生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eastern-cattle-egret/02-observation.webp",
        "title": "橙褐色的繁殖羽",
        "alt": "牛背鹭：橙褐色的繁殖羽，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖羽和非繁殖羽颜色不同。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-cattle-egret/03-observation.webp",
        "title": "跟随水牛的取食情景",
        "alt": "牛背鹭：跟随水牛的取食情景，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水牛只作生活场景背景，不证明清除寄生虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-cattle-egret/04-observation.webp",
        "title": "嘴里的小型昆虫",
        "alt": "牛背鹭：嘴里的小型昆虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。图中食物不作虫种或营养比例判断。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-cattle-egret/05-observation.webp",
        "title": "收颈飞行",
        "alt": "牛背鹭：收颈飞行，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。鹭类飞行常收颈，静图不说明全过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eastern-cattle-egret/06-observation.webp",
        "title": "湿草地上的两只鸟",
        "alt": "牛背鹭：湿草地上的两只鸟，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。牛背鹭也能在没有牛的环境取食。",
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
      "title": "GBIF：接受学名与命名记录",
      "url": "https://www.gbif.org/species/6066393",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种外形、活动与分布",
      "url": "https://avifauna.hkbws.org.hk/species/0170/023000",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "物种资料列示的全球 IUCN 等级",
      "url": "https://avifauna.hkbws.org.hk/species/0170/023000",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
