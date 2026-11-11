import type { SpeciesLearningProfile, SpeciesSource } from '../../types/species.js';

export const learningProfile = {
  "version": 1,
  "introduction": "普通章鱼是一种海里的软体动物，用柔软的腕移动和取得食物，也会改变身体花纹帮助隐藏。",
  "sections": [
    {
      "key": "identity",
      "title": "认识它",
      "paragraphs": [
        "普通章鱼的学名是 Octopus vulgaris。它属于软体动物中的头足类，成体有八条腕。这里的“普通章鱼”指一个具体物种，不是所有章鱼的统称。"
      ],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
        "https://www.jstage.jst.go.jp/article/specdiv/21/1/21_31/_article"
      ]
    },
    {
      "key": "body",
      "title": "看看它的身体",
      "paragraphs": [],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
        "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037579",
        "https://doi.org/10.1186/s12861-020-00212-6"
      ],
      "bodyParts": [
        {
          "name": "八条腕",
          "explanation": "柔软、能弯曲，帮助身体在海底移动"
        },
        {
          "name": "腕上的吸盘",
          "explanation": "每条腕有两排吸盘，帮助接触和附着"
        },
        {
          "name": "外套膜",
          "explanation": "包裹身体主要器官的部分，不是另一个头"
        },
        {
          "name": "皮肤",
          "explanation": "能改变花纹，使身体与附近环境更相似，帮助隐藏"
        }
      ],
      "curiosity": "伪装不是变成“完全透明”。研究者观察普通章鱼时发现，它会利用附近物体的视觉特征组织花纹，不是把整个背景原样复制到身上。",
      "lead": "下面介绍的是成体的身体，幼体的变化可以继续往后读。",
      "images": [
        "./images/learning/common-octopus/arms-and-suckers.webp"
      ]
    },
    {
      "key": "habitat",
      "title": "它的家在哪里",
      "paragraphs": [
        "这里介绍的是地中海及东北大西洋相关的普通章鱼，不包含过去混在同一名称下的所有近似种。它会利用海底岩缝等地方藏身。有些旧书曾把不同海区的相似章鱼都叫普通章鱼；后来的研究把东亚的一类分为 Octopus sinensis，不能继续混写成同一种。"
      ],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
        "https://www.jstage.jst.go.jp/article/specdiv/21/1/21_31/_article"
      ],
      "images": [
        "./images/species/common-octopus/03-rock-crevice-den-and-midden.webp"
      ]
    },
    {
      "key": "foraging",
      "title": "它怎样找到和吃下食物",
      "paragraphs": [
        "它会在海底寻找蟹等甲壳动物和贝类等软体动物，用腕和吸盘帮助控制食物。吃什么与当地能找到什么有关，一张图中出现一只蟹，也不表示它只吃蟹。",
        "腕能移动、抓附，也参与取食；同一个身体部位可以有不止一种用途。"
      ],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en"
      ],
      "images": [
        "./images/species/common-octopus/04-crab-capture-and-sucker-use.webp"
      ]
    },
    {
      "key": "dailyLife",
      "title": "它怎样生活",
      "paragraphs": [
        "普通章鱼通常独自生活，可以沿海底爬行，也能在水中游动。藏身处和伪装能帮助它避开危险。它改变花纹时，不一定是在表达人的“高兴”或“生气”，不能只凭颜色猜测它的情绪。"
      ],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
        "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037579"
      ]
    },
    {
      "key": "growth",
      "title": "幼小的章鱼怎样长大",
      "paragraphs": [
        "雌体会把卵串挂在洞穴等地方，守护卵并使水流经过卵，提供适合发育的条件。普通章鱼刚孵化时的幼体先在水中浮游，之后才逐渐转为主要在海底生活。",
        "“浮游”指在水中悬浮、随水流移动的生活方式，不表示它永远不能主动活动。幼体和成体的身体比例、生活地点都不同，不应简单缩小成体图片来代替幼体。"
      ],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
        "https://doi.org/10.1186/s12861-020-00212-6",
        "https://www.fao.org/fishery/docs/CDrom/ARTFIMED/ArtFiWeb/descript/Species/OCTOCVUL.HTML"
      ],
      "images": [
        "./images/species/common-octopus/05-female-egg-brooding-and-ventilation.webp",
        "./images/species/common-octopus/06-pelagic-paralarva.webp"
      ]
    },
    {
      "key": "ecology",
      "title": "它和海底的其他生命",
      "paragraphs": [
        "它吃蟹和贝类等动物，自己也需要避免被其他动物发现。伪装既与接近食物有关，也与躲避捕食者有关。这些关系把普通章鱼连接进海底食物网。"
      ],
      "sources": [
        "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
        "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037579"
      ]
    },
    {
      "key": "survival",
      "title": "它现在过得怎么样",
      "paragraphs": [
        "核对到的 IUCN 记录评估于 2016 年，列为“无危”（LC），在 2018 年发布。这个记录采用的物种范围比这里介绍的狭义种更宽，不能把它当成针对现行狭义种刚完成的一次新评估。",
        "无危不表示可以无限捕捞。分清不同章鱼的物种身份，才能更准确地了解各地的渔业压力，制定保护和管理办法。"
      ],
      "sources": [
        "https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en",
        "https://www.jstage.jst.go.jp/article/specdiv/21/1/21_31/_article"
      ]
    }
  ],
  "observation": {
    "images": [
      "./images/species/common-octopus/02-chromatophore-papillae-camouflage.webp"
    ],
    "prompt": "先找眼睛，再找腕，比较身体与石头的花纹。哪些部分不容易一眼找到？",
    "note": "AI 生成配图，不能用一幅静态画面证明完整的变色过程。",
    "questions": [
      {
        "question": "为什么一张普通的侧面图，不一定能让我们数清八条腕？",
        "answer": "有些腕会弯曲、重叠或藏在身体后面。数不清不等于这种动物只有图上露出的几条腕；结构示意图与生活场景图用途不同。"
      }
    ]
  },
  "illustrations": [
    {
      "image": "./images/learning/common-octopus/arms-and-suckers.webp",
      "alt": "AI 解说示意：普通章鱼的八条腕、外套膜及腕部两排吸盘的放大图",
      "title": "八条腕与两排吸盘",
      "caption": "沿着腕的根部辨认八条腕，再看局部放大的两排吸盘；放大图不代表多出一条腕。",
      "credit": "Fauna Atlas · AI 生成解说示意图"
    }
  ]
} as const satisfies SpeciesLearningProfile;

export const learningSources = [
  {
    "title": "Common octopus — Institut océanographique Paul Ricard",
    "url": "https://www.institut-paul-ricard.org/?especes_aquarium=common-octopus&lang=en",
    "kind": "ecology",
    "accessedAt": "2026-11-11"
  },
  {
    "title": "Octopus sinensis: valid species name for the East Asian common octopus",
    "url": "https://www.jstage.jst.go.jp/article/specdiv/21/1/21_31/_article",
    "kind": "taxonomy",
    "accessedAt": "2026-11-11"
  },
  {
    "title": "Camouflaging in a Complex Environment",
    "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037579",
    "kind": "ecology",
    "accessedAt": "2026-11-11"
  }
] as const satisfies readonly SpeciesSource[];
