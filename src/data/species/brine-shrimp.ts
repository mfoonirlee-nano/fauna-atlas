import type { Species } from '../../types/species.ts';

const profile = {
  "id": "brine-shrimp",
  "slug": "brine-shrimp",
  "names": {
    "zh": "盐水丰年虫",
    "en": "Brine Shrimp"
  },
  "scientificName": "Artemia salina",
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
      "scientificName": "Branchiopoda",
      "zhName": "鳃足纲"
    },
    "order": {
      "scientificName": "Anostraca",
      "zhName": "无甲目"
    },
    "family": {
      "scientificName": "Artemiidae",
      "zhName": "卤虫科"
    },
    "genus": {
      "scientificName": "Artemia",
      "zhName": "卤虫属"
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
    "assessor": "本次未核实全球物种级 IUCN 评估，沿用项目 NE 占位口径；不表示没有保护风险。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "欧洲",
      "非洲",
      "亚洲"
    ],
    "regions": [
      "地中海沿岸盐田与盐水潟湖"
    ],
    "countries": [],
    "range": '狭义 Artemia salina 以地中海盆地的高盐水体为主要范围。历史同名记录、商品卵和美洲丰年虫不能直接用于本种分布，需要重新核对物种身份。'
  },
  "habitats": [
    {
      "name": "高盐盐田与潟湖",
      "realm": "marine",
      "description": '生活在地中海盆地的沿海高盐水体和盐田等环境，高盐水域与外海海水具有不同条件。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "微藻",
      "悬浮有机颗粒"
    ],
    "description": "通过附肢运动从水中收集微藻和悬浮有机颗粒；刚孵出的早期无节幼体依靠卵黄。"
  },
  "tags": [
    "盐水丰年虫",
    "高盐盐田与潟湖"
  ],
  "summary": '盐水丰年虫生活在地中海盆地的高盐水域，用叶状胸肢游泳、收集食物和交换气体。一定环境条件下，它还能形成带耐受外壳的休眠胚胎。',
  "description": '盐水丰年虫 Artemia salina 属于鳃足纲，成体有有柄复眼、叶状胸肢、细长腹部和分叉尾端。胸肢推动水流，收集微藻和悬浮有机颗粒；刚孵出的早期无节幼体则先利用卵黄。历史上这个名称曾覆盖多种丰年虫，商品“丰年虾”及商品卵也可能来自其他种，需要核对来源。',
  "storySections": [
    {
      key: 'observation-1',
      label: '胸肢',
      title: '叶状附肢推动水流',
      body: '成体胸部的叶状附肢不断运动，推动水流，同时参与收集食物和气体交换。附肢与细毛的结构需要显微观察。',
    },
    {
      key: 'observation-2',
      label: '成体',
      title: '复眼、腹部与卵囊',
      body: '成体前方有一对有柄复眼，后方连接细长腹部和分叉尾端。雌体腹部前端可见卵囊，成体外形与无节幼体有明显差别。',
    },
    {
      key: 'observation-3',
      label: '幼体',
      title: '无节幼体先利用卵黄',
      body: '刚孵出的早期无节幼体呈卵圆形，中央有一只无节眼，先依靠卵黄提供营养。它随后经历发育，逐渐形成成体的身体结构。',
    },
    {
      key: 'observation-4',
      label: '休眠',
      title: '外壳保护休眠胚胎',
      body: '一定环境条件下，丰年虫可产生包有耐受外壳的休眠胚胎，通常称为休眠卵。胚胎与保护壳需要区分，能否恢复发育也取决于后续环境。',
    },
    {
      key: 'observation-5',
      label: '辨认',
      title: '盐田中的丰年虫未必都是本种',
      body: '盐田中可能出现不同 Artemia 种，外观相似并不足以确认身份。地中海部分本地种群还面临外来丰年虫扩散，调查需要核对样本。',
    },
    {
      key: 'conservation',
      label: '保护',
      title: '避免投放商品丰年虫',
      body: '盐田环境改变和外来种扩散可能影响本地种群，本种全球风险评估与趋势尚未核实。商品丰年虫及其卵不宜投放自然水体，以免混入外来种。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1758 年的名称曾被广泛套用',
      body: '林奈在 1758 年正式命名盐水丰年虫，现用名称为 Artemia salina。后来研究发现，过去被统称为这一学名的丰年虫包含多个种，狭义本种主要对应地中海盆地种群。商业休眠卵的用途很广，商品名称却不能代替物种鉴定。',
    },
  ],
  "keyFacts": [
    "盐水丰年虫用身体两旁的叶状附肢划水，也靠它们收集食物。",
    "通过附肢运动从水中收集微藻和悬浮有机颗粒；刚孵出的早期无节幼体依靠卵黄。"
  ],
  "threats": [
    "地中海部分本地种群面临盐田环境改变和外来丰年虫扩散压力。"
  ],
  "conservationActions": [
    "观看放大影像，不向自然水体投放商品丰年虫或其卵。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "高盐盐田与潟湖"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "两旁摆动的小足"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "未评估",
      "note": '尚无已核实的物种级 IUCN 全球评估，种群趋势未知。'
    }
  ],
  "media": {
    "image": "./images/species/brine-shrimp/01-cover.webp",
    "alt": "盐水丰年虫及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/brine-shrimp/02-observation.webp",
        "title": "两旁摆动的小足",
        "alt": "盐水丰年虫：两旁摆动的小足",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成体胸部有叶状附肢，运动时推动水流，也参与取食与气体交换。图中细毛和附肢为示意重建，不能用于精确计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brine-shrimp/03-observation.webp",
        "title": "细长的身体",
        "alt": "盐水丰年虫：细长的身体",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。从背面找前方的一对有柄复眼，再沿身体找到细长腹部和分叉尾端。图中为成年雌体，腹部前端可见卵囊。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brine-shrimp/04-observation.webp",
        "title": "刚孵出的幼体",
        "alt": "盐水丰年虫：刚孵出的幼体",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。早期无节幼体呈小小的卵圆形，中央有一只无节眼，形态与成体不同。此图与成体图采用不同放大倍数，不能比较图上大小来测量生长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brine-shrimp/05-observation.webp",
        "title": "休眠卵囊",
        "alt": "盐水丰年虫：休眠卵囊",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。丰年虫在一定环境条件下可产生包有耐受外壳的休眠胚胎，常称休眠卵。图中的圆球来自放大重建，不是肉眼下的实际大小。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/brine-shrimp/06-observation.webp",
        "title": "在盐水里游动",
        "alt": "盐水丰年虫：在盐水里游动",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。不同个体会朝不同方向游动。用放大影像观察附肢的摆动；盐田里的其他丰年虫可能属于近缘种。",
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
      "title": "FAO：Artemia 生物学与物种范围",
      "url": "https://www.fao.org/4/w3732e/w3732e0m.htm",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：Artemia salina 学名检索",
      "url": "https://www.marinespecies.org/aphia.php?p=taxlist&tName=Artemia+salina",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "地中海丰年虫物种更替研究",
      "url": "https://doi.org/10.1007/s10530-022-02779-6",
      "kind": "distribution",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "OBIS：六级分类归属",
      "url": "https://obis.org/taxon/480246",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Artemia salina (Linnaeus, 1758) nomenclatural record',
      url: 'https://www.gbif.org/species/2235237',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
