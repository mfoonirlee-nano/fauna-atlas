import type { SpeciesLearningProfile } from '../../types/species.js';

export const learningProfile = {
  "version": 1,
  "introduction": "帝企鹅是现生最大的企鹅，能在水下觅食，也需要稳定的冰面完成繁殖和换羽。",
  "sections": [
    {
      "key": "identity",
      "title": "认识它",
      "paragraphs": [
        "帝企鹅是一种不会飞的鸟。它背部较黑、腹部较白，头颈两侧有黄色区域。它生活在南极地区，不生活在北极。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
      ]
    },
    {
      "key": "body",
      "title": "看看它的身体",
      "paragraphs": [
        "“鳍状”说的是形状像鳍，它仍然是鸟的翅膀。腹部覆盖卵的皮肤褶不能当成袋鼠的育儿袋。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/",
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/"
      ],
      "bodyParts": [
        {
          "name": "鳍状的翅膀",
          "explanation": "像桨一样帮助它在水中前进，不用来在空中飞行"
        },
        {
          "name": "多层羽毛与皮下脂肪",
          "explanation": "帮助身体保温"
        },
        {
          "name": "脚背和腹部的皮肤褶",
          "explanation": "雄鸟孵卵时用脚背托住卵，再用皮肤褶覆盖，帮助卵保持温暖"
        }
      ],
      "images": [
        "./images/learning/emperor-penguin/egg-on-feet.webp"
      ]
    },
    {
      "key": "habitat",
      "title": "它的家在哪里",
      "paragraphs": [
        "帝企鹅在南极周围的海域找食物，许多繁殖群位于沿岸的固定海冰上。“固定海冰”是与海岸、海底或搁浅冰山等相连的海冰，和陆地上的冰盖不同。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/",
        "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn"
      ],
      "images": [
        "./images/species/emperor-penguin/03-fast-ice-habitat.webp"
      ]
    },
    {
      "key": "foraging",
      "title": "它怎样找到和吃下食物",
      "paragraphs": [
        "它潜入海中，追逐并捕捉鱼，也吃磷虾和鱿鱼。不同海区、季节的食物会有差别。成年鸟还需要把食物带回去喂幼鸟，所以觅食海域与繁殖冰面之间的距离很重要。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
      ],
      "curiosity": "潜得最深或最久的记录，不等于每次找食物都要达到这个程度。“最深”和“最久”可能来自不同下潜，不能把它们拼成一次经历。",
      "images": [
        "./images/species/emperor-penguin/05-under-ice-foraging.webp"
      ]
    },
    {
      "key": "dailyLife",
      "title": "它怎样生活",
      "paragraphs": [
        "繁殖群里的帝企鹅会聚在一起保暖，群体会缓慢移动、改变排列。不能把这种变化讲成它们按照人类制定的规则“排班”。离开繁殖地后，它们还会在海上活动。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
      ]
    },
    {
      "key": "growth",
      "title": "幼鸟怎样长大",
      "paragraphs": [
        "雌鸟产下一枚卵后，通常交给雄鸟孵化，自己出海觅食。雄鸟用脚背托住卵，等候孵化。在之后的育幼过程中，双亲轮流寻找食物和照顾幼鸟。",
        "刚孵出的幼鸟还不能独立维持体温，需要亲鸟保暖。幼鸟长大并换上适合下水的羽毛之前，稳定冰面仍很重要；毛茸茸的幼鸟不能被当成已经能独立在海里生活的成鸟。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/breeding-cycle/",
        "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn"
      ],
      "images": [
        "./images/species/emperor-penguin/06-parent-and-chick.webp"
      ]
    },
    {
      "key": "ecology",
      "title": "它和海里的其他生命",
      "paragraphs": [
        "帝企鹅把鱼、磷虾和鱿鱼作为食物，是南大洋食物网中的一环。海冰上是它养育幼鸟的地方，海水中是它取得食物的地方，这两种环境共同影响它的生活。"
      ],
      "sources": [
        "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/",
        "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn"
      ]
    },
    {
      "key": "survival",
      "title": "它现在过得怎么样",
      "paragraphs": [
        "IUCN 在 2026 年发布的更新将帝企鹅列为“濒危”（EN）。这表示野外灭绝风险很高，并不表示它已经灭绝。",
        "海冰过早破裂、减少，会影响幼鸟成长，也会影响成鸟换羽。减少温室气体排放和避免现场干扰，是保护工作中的不同部分；仅靠在繁殖地保持安静，不能解决长期海冰变化。"
      ],
      "sources": [
        "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn"
      ]
    }
  ],
  "observation": {
    "images": [
      "./images/species/emperor-penguin/05-under-ice-foraging.webp"
    ],
    "prompt": "找出展开的鳍状翅膀，观察周围的水环境。它现在在冰面上，还是在海水中？",
    "note": "AI 生成配图，不能用它测量真实潜水深度。",
    "questions": [
      {
        "question": "为什么帝企鹅既需要海水，又需要稳定冰面？",
        "answer": "海水中有它的食物；许多繁殖群在海冰上孵卵和照顾幼鸟，成鸟换羽时也需要适合停留的冰面。"
      }
    ]
  },
  "illustrations": [
    {
      "image": "./images/learning/emperor-penguin/egg-on-feet.webp",
      "alt": "AI 解说示意：帝企鹅用脚背托住一枚卵，腹部皮肤褶从上方覆盖卵",
      "title": "卵托在脚背上",
      "caption": "卵在身体外，由脚背托住；腹部的皮肤褶从上方覆盖，帮助保温。局部放大不按比例。",
      "credit": "Fauna Atlas · AI 生成解说示意图"
    }
  ]
} as const satisfies SpeciesLearningProfile;
