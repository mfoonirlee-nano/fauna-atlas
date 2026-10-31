import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-phronima-sedentaria",
  "slug": "barrel-amphipod",
  "names": {
    "zh": "桶居端足虾",
    "en": "Barrel Amphipod",
    "aliases": []
  },
  "scientificName": "Phronima sedentaria",
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
      "scientificName": "Malacostraca",
      "zhName": "软甲纲"
    },
    "order": {
      "scientificName": "Amphipoda",
      "zhName": "Amphipoda目"
    },
    "family": {
      "scientificName": "Phronimidae",
      "zhName": "Phronimidae科"
    },
    "genus": {
      "scientificName": "Phronima",
      "zhName": "Phronima属"
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
      "全球热带与温带海域"
    ],
    "range": "MBARI 汇总全球热带及温带海域的记录，常见于表层至约 600 米水深。这里描述的是资料概括的范围，不提供未经核实的代表坐标或精确种群边界。"
  },
  "habitats": [
    {
      "name": "表层至中层的开阔水域",
      "realm": "marine",
      "description": "MBARI 汇总全球热带及温带海域的记录，常见于表层至约 600 米水深。这里描述的是资料概括的范围，不提供未经核实的代表坐标或精确种群边界。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "樽海鞘等胶质动物",
      "其他小型浮游动物"
    ],
    "description": "捕食胶质动物及其他浮游动物，还会利用取食后剩下的樽海鞘组织制成住处。透明桶与食物来源有关，不能画成它吐出的气泡、贝壳或人造塑料桶。"
  },
  "tags": [
    "桶居端足虾",
    "表层至中层的开阔水域"
  ],
  "summary": "透明端足虾藏在一个透明桶里；这个桶来自樽海鞘的身体组织，还能作为育幼住处。",
  "description": "侧扁、分节的透明身体有多种关节附肢，头部眼区很大，部分组织可呈橙色。桶壁来自另一个动物——樽海鞘；两者边界需要分别辨认，不能把桶壁当成端足虾的外骨骼。",
  "storySections": [
    {
      "key": "barrel",
      "label": "生活与认识",
      "title": "住处来自另一只动物",
      "body": "雌体利用樽海鞘组织形成中空桶状住处，携带它在水层生活。自然影像支持这一关联，不把构造画成吞下整只樽海鞘后又凭空吐出的泡泡。"
    },
    {
      "key": "eyes",
      "label": "生活与认识",
      "title": "向上看，也向旁边看",
      "body": "MBARI 介绍它有看向侧面的小眼区和较大的向上眼区。普通画面帮助找出头与眼的大致关系，不把透明组织中的亮点都画成人类式眼球。"
    },
    {
      "key": "young",
      "label": "生活与认识",
      "title": "透明桶里的育幼空间",
      "body": "雌体在桶内育幼，幼体也能利用桶的组织作为食物。配图只示意可见的小卵团，不编造精确卵数、发育天数或刚出生幼体的细小结构。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "俗名说明住处，不是分类",
      "body": "接受名记录为 Phronima sedentaria (Forskål, 1775)，分类属于端足目。桶居是观察到的生活方式，不是单独的分类阶元；它也不因外形像虾就归入十足目。"
    }
  ],
  "keyFacts": [
    "透明端足虾藏在一个透明桶里；这个桶来自樽海鞘的身体组织，还能作为育幼住处。",
    "雌体利用樽海鞘组织形成中空桶状住处，携带它在水层生活。自然影像支持这一关联，不把构造画成吞下整只樽海鞘后又凭空吐出的泡泡。"
  ],
  "threats": [],
  "conservationActions": [
    "保留樽海鞘与端足虾的对应影像",
    "区分本种形态与其他透明甲壳动物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "住处来自另一只动物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "表层至中层的开阔水域"
    }
  ],
  "media": {
    "image": "./images/species/barrel-amphipod/01-cover.webp",
    "alt": "桶居端足虾全貌（AI 生成科学重建）",
    "credit": "Fauna Atlas · AI 生成科学重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "gallery": [
      {
        "image": "./images/species/barrel-amphipod/02-observation.webp",
        "title": "透明桶内的关节附肢",
        "alt": "桶居端足虾：透明桶内的关节附肢（AI 生成科学重建）",
        "caption": "AI 生成科学重建。透明桶内的关节附肢；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/barrel-amphipod/03-observation.webp",
        "title": "透过桶壁看头部眼区",
        "alt": "桶居端足虾：透过桶壁看头部眼区（AI 生成科学重建）",
        "caption": "AI 生成科学重建。透过桶壁看头部眼区；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/barrel-amphipod/04-observation.webp",
        "title": "倾斜桶体中的雌体",
        "alt": "桶居端足虾：倾斜桶体中的雌体（AI 生成科学重建）",
        "caption": "AI 生成科学重建。倾斜桶体中的雌体；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/barrel-amphipod/05-observation.webp",
        "title": "有桶与无桶个体对照",
        "alt": "桶居端足虾：有桶与无桶个体对照（AI 生成科学重建）",
        "caption": "AI 生成科学重建。同画面对照一只有桶和一只无桶个体，不表示同一个体的连续动作；不作为自然摄影、物种鉴定或显微测量证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/barrel-amphipod/06-observation.webp",
        "title": "桶内的雌体与小卵团",
        "alt": "桶居端足虾：桶内的雌体与小卵团（AI 生成科学重建）",
        "caption": "AI 生成科学重建。桶内的雌体与小卵团；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      }
    ]
  },
  "sources": [
    {
      "title": "物种资料与参考影像：Barrel Amphipod",
      "url": "https://www.mbari.org/animal/barrel-amphipod/",
      "kind": "ecology",
      "accessedAt": "2026-10-30"
    },
    {
      "title": "GBIF：接受名、命名作者、异名与分类",
      "url": "https://api.gbif.org/v1/species/5177658",
      "kind": "taxonomy",
      "accessedAt": "2026-10-30"
    },
    {
      "title": "WoRMS：接受名与分类对照",
      "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=103272",
      "kind": "taxonomy",
      "accessedAt": "2026-10-30"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-30",
  "updatedAt": "2026-10-30"
} as const satisfies Species;

export default profile;
