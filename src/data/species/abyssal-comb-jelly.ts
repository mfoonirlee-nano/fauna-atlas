import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-beroe-abyssicola",
  "slug": "abyssal-comb-jelly",
  "names": {
    "zh": "深渊瓜水母",
    "en": "Abyssal Comb Jelly",
    "aliases": []
  },
  "scientificName": "Beroe abyssicola",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Ctenophora",
      "zhName": "栉水母动物门"
    },
    "class": {
      "scientificName": "Nuda",
      "zhName": "无触手纲"
    },
    "order": {
      "scientificName": "Beroida",
      "zhName": "瓜水母目"
    },
    "family": {
      "scientificName": "Beroidae",
      "zhName": "瓜水母科"
    },
    "genus": {
      "scientificName": "Beroe",
      "zhName": "瓜水母属"
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
    "assessor": "未核实可追溯的 IUCN 全球评估，暂用 NE 表示资料缺口；不代表已确认不存在评估。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "countries": [],
    "regions": [
      "北冰洋与北太平洋"
    ],
    "range": "分布于北冰洋和北太平洋。MBARI 汇总水深记录从近表层至约 2,800 米；名字中的“深渊”不能理解成只生活在最深海底。地图使用加州外海代表点。",
    "center": {
      "lat": 36.5,
      "lng": -123
    }
  },
  "habitats": [
    {
      "name": "开阔海洋水层",
      "realm": "marine",
      "description": "分布于北冰洋和北太平洋。MBARI 汇总水深记录从近表层至约 2,800 米；名字中的“深渊”不能理解成只生活在最深海底。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "其他栉水母"
    ],
    "description": "它能张大口吞下其他栉水母，也能借口内成束的粗大纤毛协助咬取食物；这些结构并不是鱼那样的牙齿。"
  },
  "tags": [
    "深渊瓜水母",
    "开阔海洋水层"
  ],
  "summary": "深渊瓜水母有粉红透明的囊状身体和深红色消化腔，会张开大口吃其他栉水母。",
  "description": "身体呈拉长的卵形，一端有宽口，体表排列纵向梳板列，没有长触手。它属于栉水母动物，与有刺细胞的钵水母分属不同动物门。",
  "storySections": [
    {
      "key": "mouth",
      "label": "生活与认识",
      "title": "嘴能张得很大",
      "body": "找到身体较宽的一端，再比较口闭合与张开的外观。瓜水母没有伸出去捕食的长触手，主要用大口接近和吞食其他栉水母。"
    },
    {
      "key": "red-gut",
      "label": "生活与认识",
      "title": "红色藏住肚里的光",
      "body": "MBARI 将深红色胃部解释为遮蔽发光猎物的适应：色素吸收猎物的光，减少肚内光线透出的机会。图中颜色仅作外观示意，不能用来测量吸光能力。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "同属的两种瓜水母",
      "body": "Mortensen 于 1927 年描述 Beroe abyssicola，WoRMS 记录的模式产地在温哥华岛附近海域。它与卵形瓜水母 Beroe ovata 同属，但属于不同物种，不能把后者的区域扩散记录直接移用于本种。"
    }
  ],
  "keyFacts": [
    "嘴能张得很大：找到身体较宽的一端，再比较口闭合与张开的外观。",
    "红色藏住肚里的光：MBARI 将深红色胃部解释为遮蔽发光猎物的适应：色素吸收猎物的光，减少肚内光线透出的机会。"
  ],
  "threats": [],
  "conservationActions": [
    "保留可追溯的海洋观察与物种鉴定记录"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "纵向梳板"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔海洋水层"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "其他栉水母"
    }
  ],
  "media": {
    "image": "./images/species/abyssal-comb-jelly/01-cover.webp",
    "alt": "深渊瓜水母全身场景（AI 生成科学情景重建）",
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "gallery": [
      {
        "image": "./images/species/abyssal-comb-jelly/02-observation.webp",
        "title": "纵向梳板",
        "alt": "深渊瓜水母：侧面观察梳板列与反射彩光（AI 生成示意）",
        "caption": "AI 生成科学情景重建。侧面观察梳板列与反射彩光；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/abyssal-comb-jelly/03-observation.webp",
        "title": "张开大口",
        "alt": "深渊瓜水母：宽口张开时的外形示意（AI 生成示意）",
        "caption": "AI 生成科学情景重建。宽口张开时的外形示意；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/abyssal-comb-jelly/04-observation.webp",
        "title": "深红的内部",
        "alt": "深渊瓜水母：透过粉红身体观察红色消化腔（AI 生成示意）",
        "caption": "AI 生成科学情景重建。透过粉红身体观察红色消化腔；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/abyssal-comb-jelly/05-observation.webp",
        "title": "伸长的身体",
        "alt": "深渊瓜水母：开阔水层中的囊状身体（AI 生成示意）",
        "caption": "AI 生成科学情景重建。开阔水层中的囊状身体；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/abyssal-comb-jelly/06-observation.webp",
        "title": "从口端观察",
        "alt": "深渊瓜水母：从口端斜看身体内部与纵向梳板（AI 生成示意）",
        "caption": "AI 生成科学情景重建。从口端斜看身体内部与纵向梳板；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      }
    ]
  },
  "sources": [
    {
      "title": "MBARI：深渊瓜水母",
      "url": "https://www.mbari.org/animal/abyssal-comb-jelly/",
      "kind": "ecology",
      "accessedAt": "2026-10-27"
    },
    {
      "title": "GBIF：接受名、分类与异名",
      "url": "https://www.gbif.org/species/5233140",
      "kind": "taxonomy",
      "accessedAt": "2026-10-27"
    },
    {
      "title": "WoRMS：接受名、命名与模式产地",
      "url": "https://www.marinespecies.org/aphia.php?id=265150&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-27"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-27",
  "updatedAt": "2026-10-27"
} as const satisfies Species;

export default profile;
