import type { Species } from '../../types/species.ts';

const profile = {
  "id": "black-spotted-pond-frog",
  "slug": "black-spotted-pond-frog",
  "names": {
    "zh": "黑斑侧褶蛙",
    "en": "Black-spotted Pond Frog",
    "aliases": [
      "黑斑蛙",
      "Rana nigromaculata"
    ]
  },
  "scientificName": "Pelophylax nigromaculatus",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "order": {
      "scientificName": "Anura",
      "zhName": "无尾目"
    },
    "family": {
      "scientificName": "Ranidae",
      "zhName": "蛙科"
    },
    "genus": {
      "scientificName": "Pelophylax",
      "zhName": "侧褶蛙属"
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
    "assessor": "采用 IUCN 2023-1 等级变化表确认的全球无危等级，替代 2004 年近危记录。未核实独立评估日期，2023 只作发表年；未从等级调整推断种群回升或趋势。"
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "中国及东亚水边环境"
    ],
    "countries": [],
    "range": "见于中国多地、朝鲜半岛、日本及俄罗斯远东部分地区，另有引入记录。中国和日本种群的谱系与边界仍有研究，地图只选中国代表点，不把引入地算入原生范围。具体地点要结合当地物种调查核对。",
    "center": {
      "lat": 30.6,
      "lng": 114.1
    }
  },
  "habitats": [
    {
      "name": "池塘、稻田与缓流水域边缘",
      "realm": "freshwater",
      "description": "它常在池塘、稻田和缓流水边活动，利用岸上植被与浅水环境。长后肢参与跳跃和游动。农田排水沟可能阻断移动，研究者比较过沟渠结构与蛙类通过能力，连通的水陆边缘有助于它在不同环境之间活动。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫",
      "其他小型动物"
    ],
    "description": "成蛙捕食昆虫和其他小型动物，蝌蚪的取食方式与成蛙不同。不能把一群蝌蚪理解为在吃成蛙同样的猎物。图中的水草和底泥展示环境；食物种类需要行为记录或食性研究支持。"
  },
  "tags": [
    "黑斑侧褶蛙",
    "两栖纲",
    "背部黑斑、侧褶与变态"
  ],
  "summary": "黑斑侧褶蛙背上常有深色斑和两条侧褶，蝌蚪在水中发育，幼蛙完成变态后上岸活动。",
  "description": "黑斑侧褶蛙背部常呈绿色或橄榄褐色，散布深色斑，背部两侧有隆起的侧褶，部分个体还有浅色背中线。眼后可见鼓膜，后肢较长。颜色会变化，黑斑和侧褶需要结合整只蛙及地点观察。它常在池塘、稻田和缓流水边活动，利用岸上植被与浅水环境。长后肢参与跳跃和游动。农田排水沟可能阻断移动，研究者比较过沟渠结构与蛙类通过能力，连通的水陆边缘有助于它在不同环境之间活动。成蛙捕食昆虫和其他小型动物，蝌蚪的取食方式与成蛙不同。不能把一群蝌蚪理解为在吃成蛙同样的猎物。图中的水草和底泥展示环境；食物种类需要行为记录或食性研究支持。卵在水中发育为蝌蚪，蝌蚪逐渐长出后肢和前肢，尾部在变态过程中缩短，最后成为能上岸活动的幼蛙。图库分别展示无足蝌蚪与完成变态的幼蛙，画面不记录同一只动物的连续变化，发育时间也随环境而异。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "找一找身体的特点",
      "body": "黑斑侧褶蛙背部常呈绿色或橄榄褐色，散布深色斑，背部两侧有隆起的侧褶，部分个体还有浅色背中线。眼后可见鼓膜，后肢较长。颜色会变化，黑斑和侧褶需要结合整只蛙及地点观察。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "生活环境与活动",
      "body": "它常在池塘、稻田和缓流水边活动，利用岸上植被与浅水环境。长后肢参与跳跃和游动。农田排水沟可能阻断移动，研究者比较过沟渠结构与蛙类通过能力，连通的水陆边缘有助于它在不同环境之间活动。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "它会吃什么",
      "body": "成蛙捕食昆虫和其他小型动物，蝌蚪的取食方式与成蛙不同。不能把一群蝌蚪理解为在吃成蛙同样的猎物。图中的水草和底泥展示环境；食物种类需要行为记录或食性研究支持。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从卵到幼体",
      "body": "卵在水中发育为蝌蚪，蝌蚪逐渐长出后肢和前肢，尾部在变态过程中缩短，最后成为能上岸活动的幼蛙。图库分别展示无足蝌蚪与完成变态的幼蛙，画面不记录同一只动物的连续变化，发育时间也随环境而异。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "本档案的学名范围",
      "body": "本档案沿用接受名 Pelophylax nigromaculatus。旧资料常称 Rana nigromaculata；东亚种群内部还存在需要进一步研究的谱系差异。这里不把研究中的谱系各计一种，也不凭一张有黑斑的蛙图确定身份。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认问题与观察任务",
      "body": "辨认问题：蝌蚪与幼蛙的足和尾巴有什么不同？观察任务：对照图库分别找尾巴和四肢，再看连续自然影像中的变态过程，留在岸上观察。保留水陆边缘和植被通道，不把饲养动物放入野外。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "黑斑侧褶蛙的名称与记录",
      "body": "Hallowell 于 1861 年发表 Rana nigromaculata，现用组合为 Pelophylax nigromaculatus，中文名强调体侧的褶。美国自然历史博物馆保留名称组合、旧异名和分类讨论，帮助核对早期记录；命名史与当地人认识蛙的历史分别理解。"
    }
  ],
  "keyFacts": [
    "黑斑侧褶蛙背部常呈绿色或橄榄褐色，散布深色斑，背部两侧有隆起的侧褶，部分个体还有浅色背中线。眼后可见鼓膜，后肢较长。颜色会变化，黑斑和侧褶需要结合整只蛙及地点观察。",
    "成蛙捕食昆虫和其他小型动物，蝌蚪的取食方式与成蛙不同。不能把一群蝌蚪理解为在吃成蛙同样的猎物。图中的水草和底泥展示环境；食物种类需要行为记录或食性研究支持。",
    "卵在水中发育为蝌蚪，蝌蚪逐渐长出后肢和前肢，尾部在变态过程中缩短，最后成为能上岸活动的幼蛙。图库分别展示无足蝌蚪与完成变态的幼蛙，画面不记录同一只动物的连续变化，发育时间也随环境而异。"
  ],
  "threats": [
    "栖息环境改变",
    "活动通道受阻"
  ],
  "conservationActions": [
    "保护原生栖息环境，观察时保持距离，不带走野生动物或自行放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "池塘、稻田与缓流水域边缘"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "背部黑斑、侧褶与变态"
    }
  ],
  "media": {
    "image": "./images/species/black-spotted-pond-frog/01-cover.webp",
    "alt": "黑斑侧褶蛙完整外形与自然环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/black-spotted-pond-frog/02-observation.webp",
        "title": "稻田水边的成蛙",
        "alt": "黑斑侧褶蛙：稻田水边的成蛙，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。稻田水边的成蛙；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-spotted-pond-frog/03-observation.webp",
        "title": "背部黑斑和两条侧褶",
        "alt": "黑斑侧褶蛙：背部黑斑和两条侧褶，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。背部黑斑和两条侧褶；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-spotted-pond-frog/04-observation.webp",
        "title": "侧面看后肢与鼓膜",
        "alt": "黑斑侧褶蛙：侧面看后肢与鼓膜，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。侧面看后肢与鼓膜；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-spotted-pond-frog/05-observation.webp",
        "title": "水中的无足蝌蚪",
        "alt": "黑斑侧褶蛙：水中的无足蝌蚪，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水中的无足蝌蚪；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。此图为无足蝌蚪阶段，体形和大小为非实测重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/black-spotted-pond-frog/06-observation.webp",
        "title": "完成变态的幼蛙",
        "alt": "黑斑侧褶蛙：完成变态的幼蛙，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完成变态的幼蛙；不同画面单独重建，图间不记录同一个体的连续变化，生成细节不用于精确鉴种。此图为完成变态后的幼蛙。幼体位于前景，成体同时入画；两者大小仅作阶段对照，非实测比例，也不表示亲子关系或护幼行为。",
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
      "title": "GBIF：接受名称与原始匹配响应",
      "url": "https://www.gbif.org/species/2426634",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 2023-1：近危改列无危的官方变化表",
      "url": "https://nc.iucnredlist.org/redlist/content/attachment_files/2023-1_RL_Table_7.pdf",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 两栖专家组：2023 全球条目入口",
      "url": "https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58679A63862076.en",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "美国自然历史博物馆：接受名、异名、分布及谱系讨论",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Ranidae/Pelophylax/Pelophylax-nigromaculatus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2024 原始分布模型与物种研究：东亚侧褶蛙",
      "url": "https://www.mdpi.com/1424-2818/16/5/259",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "2022 原始研究：农业排水设施与蛙类通行",
      "url": "https://doi.org/10.3390/d14050414",
      "kind": "ecology",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "USGS：原生与引入记录",
      "url": "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=73",
      "kind": "distribution",
      "accessedAt": "2026-10-17"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球等级对照",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/58679",
      "kind": "conservation",
      "accessedAt": "2026-10-17"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-17",
  "updatedAt": "2026-10-17"
} as const satisfies Species;

export default profile;
