import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-stygiomedusa-gigantea",
  "slug": "giant-phantom-jelly",
  "names": {
    "zh": "巨型幽灵水母",
    "en": "Giant Phantom Jelly",
    "aliases": []
  },
  "scientificName": "Stygiomedusa gigantea",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Cnidaria",
      "zhName": "刺胞动物门"
    },
    "class": {
      "scientificName": "Scyphozoa",
      "zhName": "钵水母纲"
    },
    "order": {
      "scientificName": "Semaeostomeae",
      "zhName": "旗口水母目"
    },
    "family": {
      "scientificName": "Ulmaridae",
      "zhName": "洋须水母科"
    },
    "genus": {
      "scientificName": "Stygiomedusa",
      "zhName": "Stygiomedusa属"
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
      "除北冰洋外的多个大洋"
    ],
    "range": "在除北冰洋外的多个大洋有记录，通常见于深海水层。MBARI 汇总的水深记录从近表层到约 6,700 米，不表示每一深度都同样常见。地图代表点位于加利福尼亚湾外海。",
    "center": {
      "lat": 25,
      "lng": -110
    }
  },
  "habitats": [
    {
      "name": "深海开阔水层",
      "realm": "marine",
      "description": "在除北冰洋外的多个大洋有记录，通常见于深海水层。MBARI 汇总的水深记录从近表层到约 6,700 米，不表示每一深度都同样常见。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [],
    "foods": [],
    "description": "研究者推测它可能吃浮游动物和小鱼，具体食谱仍需更多直接观察。不能把靠近口腕的鱼一概当成猎物。"
  },
  "tags": [
    "巨型幽灵水母",
    "深海开阔水层"
  ],
  "summary": "巨型幽灵水母拖着四条宽大的带状口腕，像深海里缓缓飘动的暗红色布带。",
  "description": "圆拱形伞下伸出宽而扁的口腕，颜色呈深红至红褐色。它没有一圈细长的伞缘触手；口腕展开时可以很长，折叠时则呈现不同轮廓。",
  "storySections": [
    {
      "key": "ribbons",
      "label": "生活与认识",
      "title": "四条宽带从哪里来",
      "body": "沿着伞下方寻找四条口腕，再看宽带如何弯曲、折叠。口腕与水母伞缘常见的细触手是不同结构，遮挡时也未必能在一张照片里数清。"
    },
    {
      "key": "companions",
      "label": "生活与认识",
      "title": "口腕旁也有访客",
      "body": "研究者在加利福尼亚湾记录过深海鱼 Thalassobathia pelagica 在伞上方停留、在口腕间穿游。这样的关联可能提供遮蔽，不能仅凭鱼和水母同框就断定正在捕食。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "旧名字也能找到它",
      "body": "本种的命名署名是 Browne，年份为 1910；当前接受组合为 Stygiomedusa gigantea。旧资料中的 Diplulmaris gigantea、Stygiomedusa fabulosa 和 Stygiomedusa stauchi 被列作异名，查阅历史记录时需要一并比对。"
    }
  ],
  "keyFacts": [
    "四条宽带从哪里来：沿着伞下方寻找四条口腕，再看宽带如何弯曲、折叠。",
    "口腕旁也有访客：研究者在加利福尼亚湾记录过深海鱼 Thalassobathia pelagica 在伞上方停留、在口腕间穿游。"
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
      "value": "伞下的口腕"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "深海开阔水层"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "食谱仍待核实"
    }
  ],
  "media": {
    "image": "./images/species/giant-phantom-jelly/01-cover.webp",
    "alt": "巨型幽灵水母全身场景（AI 生成科学情景重建）",
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "gallery": [
      {
        "image": "./images/species/giant-phantom-jelly/02-observation.webp",
        "title": "伞下的口腕",
        "alt": "巨型幽灵水母：斜下方观察伞与宽大口腕（AI 生成示意）",
        "caption": "AI 生成科学情景重建。斜下方观察伞与宽大口腕；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/giant-phantom-jelly/03-observation.webp",
        "title": "折叠的宽带",
        "alt": "巨型幽灵水母：宽带状口腕与褶皱外观（AI 生成示意）",
        "caption": "AI 生成科学情景重建。宽带状口腕与褶皱外观；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/giant-phantom-jelly/04-observation.webp",
        "title": "收缩的伞",
        "alt": "巨型幽灵水母：伞体与弯曲口腕的游泳姿势示意（AI 生成示意）",
        "caption": "AI 生成科学情景重建。伞体与弯曲口腕的游泳姿势示意；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/giant-phantom-jelly/05-observation.webp",
        "title": "水层中的轮廓",
        "alt": "巨型幽灵水母：开阔水层中展开的口腕（AI 生成示意）",
        "caption": "AI 生成科学情景重建。开阔水层中展开的口腕；细节不作为鉴定、测量或动作顺序的证据。",
        "credit": "Fauna Atlas · AI 生成科学情景重建",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        }
      },
      {
        "image": "./images/species/giant-phantom-jelly/06-observation.webp",
        "title": "侧面看宽带",
        "alt": "巨型幽灵水母：从侧面比较伞体和下垂口腕（AI 生成示意）",
        "caption": "AI 生成科学情景重建。从侧面比较伞体和下垂口腕；细节不作为鉴定、测量或动作顺序的证据。",
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
      "title": "MBARI：巨型幽灵水母",
      "url": "https://www.mbari.org/animal/giant-phantom-jelly/",
      "kind": "ecology",
      "accessedAt": "2026-10-27"
    },
    {
      "title": "GBIF：接受名、分类与异名",
      "url": "https://www.gbif.org/species/2264459",
      "kind": "taxonomy",
      "accessedAt": "2026-10-27"
    },
    {
      "title": "Drazen 与 Robison（2004）：关联研究，依据 MBARI 简介与文献入口",
      "url": "https://doi.org/10.1080/10236240400006190",
      "kind": "ecology",
      "accessedAt": "2026-10-27"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-27",
  "updatedAt": "2026-10-27"
} as const satisfies Species;

export default profile;
