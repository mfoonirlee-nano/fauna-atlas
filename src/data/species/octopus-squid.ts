import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-octopoteuthis-deletron",
  "slug": "octopus-squid",
  "names": {
    "zh": "八腕鱿鱼",
    "en": "Octopus Squid",
    "aliases": []
  },
  "scientificName": "Octopoteuthis deletron",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Mollusca",
      "zhName": "软体动物门"
    },
    "class": {
      "scientificName": "Cephalopoda",
      "zhName": "头足纲"
    },
    "order": {
      "scientificName": "Oegopsida",
      "zhName": "开眼目"
    },
    "family": {
      "scientificName": "Octopoteuthidae",
      "zhName": "Octopoteuthidae科"
    },
    "genus": {
      "scientificName": "Octopoteuthis",
      "zhName": "Octopoteuthis属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "DD",
    "label": {
      "zh": "数据缺乏",
      "en": "Data Deficient"
    },
    "trend": "unknown",
    "assessor": "来源关联 IUCN 等级；未核实独立评估日期与趋势"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "东北太平洋"
    ],
    "countries": [],
    "range": "本档案采用东北太平洋华盛顿州外海至下加利福尼亚的分布口径。FAO 另列秘鲁外海的一条可能离散记录，不把它扩成连续范围；地图代表点放在加州外海。",
    "center": {
      "lat": 35,
      "lng": -123
    }
  },
  "habitats": [
    {
      "name": "昼深夜浅的开阔水层",
      "realm": "marine",
      "description": "本档案采用东北太平洋华盛顿州外海至下加利福尼亚的分布口径。FAO 另列秘鲁外海的一条可能离散记录，不把它扩成连续范围；地图代表点放在加州外海。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [],
    "foods": [],
    "description": "具体食物组成尚未核实。研究者观察到昼夜垂直迁移，但迁移姿势不能作为食谱证据。"
  },
  "tags": [
    "八腕鱿鱼",
    "昼深夜浅的开阔水层"
  ],
  "summary": "八腕鱿鱼的成年个体只有八条腕，腕尖带有发光器。两条捕食触手在发育过程中被吸收。",
  "description": "它有细长外套膜、一对宽鳍和大眼睛。腕常卷向头部上方，末端光器能闪光，皮肤也能呈现深浅斑块。腕的总数与发育阶段有关。",
  "storySections": [
    {
      "key": "arms",
      "label": "生活与认识",
      "title": "成年后留下八条腕",
      "body": "幼体原有的两条捕食触手会在成熟过程中被吸收。成体仍属于鱿鱼，不能只凭附肢数量把它归为章鱼。观察图采用成体，卷曲腕可能相互遮挡。"
    },
    {
      "key": "autotomy",
      "label": "生活与认识",
      "title": "腕尖的防御研究",
      "body": "Bush 于 2012 年通过遥控潜器观察和实验研究断腕。牵拉时腕可在接近接触点的位置断开，脱落部分会摆动，末端光器会发光；单幅图不能呈现这个过程。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "1972 年描述的鱿鱼",
      "body": "R. E. Young 于 1972 年在南加利福尼亚外海头足类研究中描述 Octopoteuthis deletron。英文名称 Octopus Squid 提醒读者注意八条腕，正式分类采用 Oegopsida 与 Octopoteuthidae。"
    }
  ],
  "keyFacts": [
    "成年后留下八条腕：幼体原有的两条捕食触手会在成熟过程中被吸收。",
    "腕尖的防御研究：Bush 于 2012 年通过遥控潜器观察和实验研究断腕。"
  ],
  "threats": [],
  "conservationActions": [
    "保留可追溯的深海观察与物种鉴定记录"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽鳍与卷曲腕"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "昼深夜浅的开阔水层"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "食谱尚不明确"
    }
  ],
  "media": {
    "image": "./images/species/octopus-squid/01-cover.webp",
    "alt": "八腕鱿鱼在自然栖息环境中的全身场景（AI 生成科学情景重建）",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/octopus-squid/02-observation.webp",
        "title": "宽鳍与卷曲腕",
        "alt": "八腕鱿鱼：正面观察宽鳍与八条卷曲腕（AI 生成示意）",
        "caption": "AI 生成科学情景重建。正面观察宽鳍与八条卷曲腕。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/octopus-squid/03-observation.webp",
        "title": "腕尖光器",
        "alt": "八腕鱿鱼：腕尖小型光器的概念示意，亮度非实测（AI 生成示意）",
        "caption": "AI 生成科学情景重建。腕尖小型光器的概念示意，亮度非实测。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/octopus-squid/04-observation.webp",
        "title": "侧面轮廓",
        "alt": "八腕鱿鱼：外套膜和一对宽鳍的侧面姿势（AI 生成示意）",
        "caption": "AI 生成科学情景重建。外套膜和一对宽鳍的侧面姿势。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/octopus-squid/05-observation.webp",
        "title": "皮肤斑块",
        "alt": "八腕鱿鱼：红褐与浅色斑块的外观示意（AI 生成示意）",
        "caption": "AI 生成科学情景重建。红褐与浅色斑块的外观示意。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/octopus-squid/06-observation.webp",
        "title": "夜间上移",
        "alt": "八腕鱿鱼：夜间水层中上游姿势的场景示意（AI 生成示意）",
        "caption": "AI 生成科学情景重建。夜间水层中上游姿势的场景示意。",
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
      "title": "MBARI：八腕鱿鱼",
      "url": "https://www.mbari.org/animal/octopus-squid/",
      "kind": "ecology",
      "accessedAt": "2026-10-24"
    },
    {
      "title": "Bush（2012）：断腕实验",
      "url": "https://www.int-res.com/articles/meps2012/458/m458p133.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "Smithsonian：断腕研究者介绍",
      "url": "https://ocean.si.edu/ocean-life/invertebrates/meet-only-squid-willfully-lops-its-arms",
      "kind": "ecology",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "FAO：分布与昼夜深度",
      "url": "https://www.fao.org/4/i1920e/i1920e06.pdf",
      "kind": "distribution",
      "accessedAt": "2026-10-23"
    },
    {
      "title": "WoRMS：接受名、原始描述与 DD 等级",
      "url": "https://www.marinespecies.org/aphia.php?id=342057&p=taxdetails",
      "kind": "conservation",
      "accessedAt": "2026-10-23"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-24",
  "updatedAt": "2026-10-24"
} as const satisfies Species;

export default profile;
