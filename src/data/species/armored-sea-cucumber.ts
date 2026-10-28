import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-psolus-squamatus",
  "slug": "armored-sea-cucumber",
  "names": {
    "zh": "鳞甲海参",
    "en": "Armored Sea Cucumber",
    "aliases": []
  },
  "scientificName": "Psolus squamatus",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Echinodermata",
      "zhName": "棘皮动物门"
    },
    "class": {
      "scientificName": "Holothuroidea",
      "zhName": "海参纲"
    },
    "order": {
      "scientificName": "Dendrochirotida",
      "zhName": "Dendrochirotida目"
    },
    "family": {
      "scientificName": "Psolidae",
      "zhName": "Psolidae科"
    },
    "genus": {
      "scientificName": "Psolus",
      "zhName": "Psolus属"
    }
  },
  "conservation": {
    "system": "Unverified",
    "code": "UNVERIFIED",
    "label": {
      "zh": "保护评估待核实",
      "en": "Assessment Unverified"
    },
    "trend": "unknown",
    "assessor": "尚未核实可追溯的全球保护评估，不据此推断已经评估或尚未评估。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "countries": [],
    "regions": [
      "北太平洋与北大西洋"
    ],
    "range": "MBARI 汇总北太平洋和北大西洋的记录，水深约 40—1,400 米，可见于海山、岩壁和岩石海底。蒙特雷海底峡谷及附近海山有成片附着的观察。"
  },
  "habitats": [
    {
      "name": "海山及岩质海底",
      "realm": "marine",
      "description": "MBARI 汇总北太平洋和北大西洋的记录，水深约 40—1,400 米，可见于海山、岩壁和岩石海底。蒙特雷海底峡谷及附近海山有成片附着的观察。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder",
      "detritivore"
    ],
    "foods": [
      "浮游生物",
      "悬浮有机碎屑"
    ],
    "description": "细密分枝的口触手伸进海流，以黏液收集浮游生物和有机碎屑，再逐根卷向口部，把食物送入口中。"
  },
  "tags": [
    "鳞甲海参",
    "海山及岩质海底"
  ],
  "summary": "背上覆着硬质小板，平坦腹面贴住岩石，树枝状口触手伸进海流里收集食物。",
  "description": "低矮的卵形身体呈淡色至浅褐色，背面覆盖重叠的钙质硬板，腹面平坦。身体一端可伸出细密分枝的口触手；触手收回后，外观看起来更像一块不起眼的小石头。",
  "storySections": [
    {
      "key": "armor",
      "label": "生活与认识",
      "title": "背甲与贴底的腹面",
      "body": "背上的硬板提供保护，贴住岩面的平坦腹面帮助固定身体。硬板不是鱼鳞，附着面也不是贝壳；它仍是一种海参。"
    },
    {
      "key": "feeding",
      "label": "生活与认识",
      "title": "海流送来的食物",
      "body": "口触手上的分枝增加接触水中颗粒的机会。触手逐根送入口部时，收集来的食物也被带进去；静态图只能表现某个姿态，不能当作连续动作记录。"
    },
    {
      "key": "habitat",
      "label": "生活与认识",
      "title": "少移动的海参",
      "body": "和许多在海底行走的海参相比，本种常紧贴岩面生活。稳定的水流带来食物，落在岩面的塑料垃圾则可能覆盖这些附着动物。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "一个沿用已久的种名",
      "body": "接受名记录为 Psolus squamatus (O.F. Müller, 1776)，同义名资料中保存 Holothuria squamata 等旧组合。名称的历史与今天潜器拍到的海山群落记录相隔很久，不能把命名年份当作首次深海录像的年份。"
    }
  ],
  "keyFacts": [
    "背上覆着硬质小板，平坦腹面贴住岩石，树枝状口触手伸进海流里收集食物。",
    "背上的硬板提供保护，贴住岩面的平坦腹面帮助固定身体。硬板不是鱼鳞，附着面也不是贝壳；它仍是一种海参。"
  ],
  "threats": [
    "落在海底的塑料垃圾可能覆盖附着动物"
  ],
  "conservationActions": [
    "减少进入海洋的塑料垃圾",
    "保留岩质海底群落的观察记录"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "背甲与贴底的腹面"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "海山及岩质海底"
    }
  ],
  "media": {
    "image": "./images/species/armored-sea-cucumber/01-cover.webp",
    "alt": "鳞甲海参全貌（AI 生成科学重建）",
    "credit": "Fauna Atlas · AI 生成科学重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "gallery": [
      {
        "image": "./images/species/armored-sea-cucumber/02-observation.webp",
        "title": "低矮身体与贴岩面",
        "alt": "鳞甲海参：低矮身体与贴岩面（AI 生成科学重建）",
        "caption": "AI 生成科学重建。低矮身体与贴岩面；不作为物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/armored-sea-cucumber/03-observation.webp",
        "title": "重叠的背部硬板",
        "alt": "鳞甲海参：重叠的背部硬板（AI 生成科学重建）",
        "caption": "AI 生成科学重建。重叠的背部硬板；不作为物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/armored-sea-cucumber/04-observation.webp",
        "title": "口触手部分收回",
        "alt": "鳞甲海参：口触手部分收回（AI 生成科学重建）",
        "caption": "AI 生成科学重建。口触手部分收回；不作为物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/armored-sea-cucumber/05-observation.webp",
        "title": "分枝口触手的全貌",
        "alt": "鳞甲海参：分枝口触手的全貌（AI 生成科学重建）",
        "caption": "AI 生成科学重建。分枝口触手的全貌；不作为物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/armored-sea-cucumber/06-observation.webp",
        "title": "岩面上附着的海参",
        "alt": "鳞甲海参：岩面上附着的海参（AI 生成科学重建）",
        "caption": "AI 生成科学重建。岩面上附着的海参；不作为物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      }
    ]
  },
  "sources": [
    {
      "title": "MBARI：Armored Sea Cucumber（生活与参考照片）",
      "url": "https://www.mbari.org/animal/armored-sea-cucumber/",
      "kind": "ecology",
      "accessedAt": "2026-10-28"
    },
    {
      "title": "GBIF：接受名、命名作者及统一分类路径",
      "url": "https://api.gbif.org/v1/species/9749286",
      "kind": "taxonomy",
      "accessedAt": "2026-10-28"
    },
    {
      "title": "WoRMS：接受名与分类对照",
      "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=124713",
      "kind": "taxonomy",
      "accessedAt": "2026-10-28"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-28",
  "updatedAt": "2026-10-28"
} as const satisfies Species;

export default profile;
