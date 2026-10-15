import type { Species } from '../../types/species.ts';

const profile = {
  "id": "japanese-carpenter-ant",
  "slug": "japanese-carpenter-ant",
  "names": {
    "zh": "日本弓背蚁",
    "en": "Japanese Carpenter Ant"
  },
  "scientificName": "Camponotus japonicus",
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
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Hymenoptera",
      "zhName": "膜翅目"
    },
    "family": {
      "scientificName": "Formicidae",
      "zhName": "蚁科"
    },
    "genus": {
      "scientificName": "Camponotus",
      "zhName": "弓背蚁属"
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
    "assessor": "采用项目 NE 占位口径：本批未确认可引用的全球物种级 IUCN 评估，不代表已证实从未评估。农业、园林用途或地区等级不代替全球等级。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "开阔地面、土巢与植物间"
    ],
    "countries": [],
    "range": "分布于亚洲，包括中国、日本及朝鲜半岛等地。资料记录它在开阔环境的土中筑巢，也会到地面和植物上活动；家庭室内发现的大黑蚂蚁不能仅凭颜色认成本种。"
  },
  "habitats": [
    {
      "name": "开阔地面、土巢与植物间",
      "realm": "terrestrial",
      "description": "分布于亚洲，包括中国、日本及朝鲜半岛等地。资料记录它在开阔环境的土中筑巢，也会到地面和植物上活动；家庭室内发现的大黑蚂蚁不能仅凭颜色认成本种。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "蜜露",
      "小型节肢动物等动物性食物"
    ],
    "description": "日本弓背蚁会利用蚜虫等半翅目昆虫产生的蜜露，也可利用动物性食物。蜜露是昆虫排出的含糖液体，不是植物直接分泌的花蜜；不同食物的比例会随条件变化。"
  },
  "tags": [
    "日本弓背蚁",
    "开阔地面、土巢与植物间"
  ],
  "summary": "日本弓背蚁，工蚁身体大多黑色，触角弯折，胸部背面呈弧形，腰部有一个明显的结节。",
  "description": "工蚁身体大多黑色，触角弯折，胸部背面呈弧形，腰部有一个明显的结节。同一群体的工蚁大小和头部比例可以不同，大小差异不一定表示不同物种。工蚁在地面和植物上觅食，用触角接触周围环境。它可在开阔地的土中筑巢；英文 carpenter ant 不能直接解释为本种吃木头或只在木材中生活。蚂蚁属于完全变态昆虫，经历卵、幼虫、蛹、成虫。幼虫无足，依靠工蚁照料；图库土巢内幼虫和茧的图片是剖面情景重建，不表示野外可以直接看穿土层。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "工蚁身体大多黑色，触角弯折，胸部背面呈弧形，腰部有一个明显的结节。同一群体的工蚁大小和头部比例可以不同，大小差异不一定表示不同物种。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "工蚁在地面和植物上觅食，用触角接触周围环境。它可在开阔地的土中筑巢；英文 carpenter ant 不能直接解释为本种吃木头或只在木材中生活。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "日本弓背蚁会利用蚜虫等半翅目昆虫产生的蜜露，也可利用动物性食物。蜜露是昆虫排出的含糖液体，不是植物直接分泌的花蜜；不同食物的比例会随条件变化。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "蚂蚁属于完全变态昆虫，经历卵、幼虫、蛹、成虫。幼虫无足，依靠工蚁照料；图库土巢内幼虫和茧的图片是剖面情景重建，不表示野外可以直接看穿土层。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案限定 Camponotus japonicus，属于膜翅目蚁科弓背蚁属。黑色和大型头部只是观察线索，需结合腰节、胸部和其他细节与近缘蚁区分。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：触角在哪里弯折？观察任务：在步道旁记录蚂蚁的行进方向和是否登上植物，不翻巢，不堵住巢口，不用糖水聚集蚂蚁。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "日本弓背蚁的名称与记录",
      "body": "Mayr 于 1866 年发表 Camponotus japonicus，接受学名的作者没有括号。模式产地在日本，中文名也保留日本二字；命名联系的地点并不代表它只分布于日本。"
    }
  ],
  "keyFacts": [
    "工蚁身体大多黑色，触角弯折，胸部背面呈弧形，腰部有一个明显的结节。同一群体的工蚁大小和头部比例可以不同，大小差异不一定表示不同物种。",
    "日本弓背蚁会利用蚜虫等半翅目昆虫产生的蜜露，也可利用动物性食物。蜜露是昆虫排出的含糖液体，不是植物直接分泌的花蜜；不同食物的比例会随条件变化。",
    "蚂蚁属于完全变态昆虫，经历卵、幼虫、蛹、成虫。幼虫无足，依靠工蚁照料；图库土巢内幼虫和茧的图片是剖面情景重建，不表示野外可以直接看穿土层。"
  ],
  "threats": [],
  "conservationActions": [
    "保留原处生活环境，以拍照记录替代捕捉；不挖巢、不带走卵或幼体，不向其他地区放生。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔地面、土巢与植物间"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大小不同的工蚁"
    }
  ],
  "media": {
    "image": "./images/species/japanese-carpenter-ant/01-cover.webp",
    "alt": "日本弓背蚁及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/japanese-carpenter-ant/02-observation.webp",
        "title": "大小不同的工蚁",
        "alt": "日本弓背蚁：大小不同的工蚁，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。工蚁体型差异重建，不是固定等级比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-carpenter-ant/03-observation.webp",
        "title": "植物上的蜜露",
        "alt": "日本弓背蚁：植物上的蜜露，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。工蚁与蚜虫蜜露的情景。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-carpenter-ant/04-observation.webp",
        "title": "搬运动物性食物",
        "alt": "日本弓背蚁：搬运动物性食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。搬运小型死昆虫的情景，不表示只吃昆虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-carpenter-ant/05-observation.webp",
        "title": "土巢中的幼虫",
        "alt": "日本弓背蚁：土巢中的幼虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。土巢剖面科学重建；无足幼虫不是小型成蚁。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-carpenter-ant/06-observation.webp",
        "title": "工蚁照料茧",
        "alt": "日本弓背蚁：工蚁照料茧，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。土巢内部重建，茧内是蛹期，不是卵。",
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
      "title": "GBIF：接受名称、作者与分类链",
      "url": "https://www.gbif.org/species/5034161",
      "kind": "taxonomy",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "AntWiki：形态、土巢与原始命名文献",
      "url": "https://antwiki.org/wiki/Camponotus_japonicus",
      "kind": "general",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "日本弓背蚁腺体化学研究：生态背景",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10380308/",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    },
    {
      "title": "JST：蚂蚁与蜜露研究介绍",
      "url": "https://sj.jst.go.jp/publications/media/2017sw.pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-15"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-15",
  "updatedAt": "2026-10-15"
} as const satisfies Species;

export default profile;
