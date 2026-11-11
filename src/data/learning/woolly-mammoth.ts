import type { SpeciesLearningProfile, SpeciesSource } from '../../types/species.js';

export const learningProfile = {
  "version": 1,
  "introduction": "真猛犸象也叫长毛猛犸象，已经灭绝；科学家通过牙齿、骨骼和保存下来的遗体研究它怎样生活。",
  "sections": [
    {
      "key": "identity",
      "title": "认识它",
      "paragraphs": [
        "真猛犸象是一种已经灭绝的象科哺乳动物。它有长毛、长鼻和弯曲的象牙，肩部较高，背线向尾部倾斜。猛犸象有很多种，不能把每一种都画成长着同样厚的毛。",
        "它不是现代象的直接祖先。现代象与猛犸象属于象科中不同的分支。"
      ],
      "sources": [
        "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html"
      ]
    },
    {
      "key": "body",
      "title": "看看它的身体",
      "paragraphs": [
        "外形复原要参考遗存，具体毛色和站姿仍可能包含推断。"
      ],
      "sources": [
        "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html",
        "https://www.nps.gov/articles/mammoth-or-mastodon.htm"
      ],
      "bodyParts": [
        {
          "name": "厚毛",
          "explanation": "帮助身体适应寒冷环境，不能据此断定它总住在深雪里"
        },
        {
          "name": "较小的耳朵和向后倾斜的背线",
          "explanation": "是认识真猛犸象外形的线索"
        },
        {
          "name": "臼齿",
          "explanation": "嘴里用来磨碎食物的后部牙齿，宽平的咀嚼面适合处理草本食物"
        },
        {
          "name": "弯曲的象牙",
          "explanation": "与用来磨食物的臼齿不同，不能把象牙画成咀嚼草叶的部位"
        }
      ],
      "images": [
        "./images/species/woolly-mammoth/02-observation.webp"
      ]
    },
    {
      "key": "habitat",
      "title": "它以前生活在哪里",
      "paragraphs": [
        "真猛犸象曾分布在欧亚大陆和北美洲的北部地区，生活环境包括寒冷、干燥的草原。这些地方有植物，也有其他动物，不是始终空无一物、被厚雪覆盖的世界。",
        "今天标出的化石产地是发现遗存的地方，不表示那里仍有活着的真猛犸象。"
      ],
      "sources": [
        "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html",
        "https://www.nps.gov/articles/mammoth-or-mastodon.htm"
      ],
      "images": [
        "./images/species/woolly-mammoth/05-observation.webp"
      ]
    },
    {
      "key": "foraging",
      "title": "它怎样吃东西",
      "paragraphs": [
        "牙齿形态和遗存中的植物线索，帮助科学家判断它吃草本植物。它用嘴里的臼齿磨碎食物，不能把弯长的象牙当成磨草的牙。"
      ],
      "sources": [
        "https://www.nps.gov/articles/mammoth-or-mastodon.htm",
        "https://repository.naturalis.nl/pub/801838/Geel-2011-Palaeo-environmental-and-dietary-analysis-A.pdf",
        "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html"
      ],
      "curiosity": "看到食物残留，不代表已经知道一只动物一生吃过的全部东西。研究者还需要判断这些残留来自哪个部位、哪个年龄的个体。",
      "images": [
        "./images/learning/woolly-mammoth/tusk-and-molar.webp"
      ]
    },
    {
      "key": "dailyLife",
      "title": "它每天怎样生活",
      "paragraphs": [
        "科学家不能像观察现生动物那样，直接观看野生真猛犸象的一整天。遗存能告诉我们身体特征和部分生活线索，却不足以给所有真猛犸象排出统一的作息表。",
        "这些资料还不足以还原它一天的全部作息，或确定每个群体都有多少只动物。复原图中的动作也不能替代研究证据。"
      ],
      "sources": [
        "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html",
        "https://repository.naturalis.nl/pub/801838/Geel-2011-Palaeo-environmental-and-dietary-analysis-A.pdf"
      ]
    },
    {
      "key": "growth",
      "title": "幼小的真猛犸象怎样长大",
      "paragraphs": [
        "真猛犸象是哺乳动物，幼体需要母乳。研究者在一只名叫 Lyuba 的幼年真猛犸象遗体中发现了乳汁残留，提供了它早期取食的证据。",
        "研究一只幼体能带来线索，但不能直接得出所有个体在同一天断奶、以同样速度长大。它完整的成长过程仍需结合更多标本研究。"
      ],
      "sources": [
        "https://repository.naturalis.nl/pub/801838/Geel-2011-Palaeo-environmental-and-dietary-analysis-A.pdf"
      ]
    },
    {
      "key": "ecology",
      "title": "它和古代草原的其他生命",
      "paragraphs": [
        "真猛犸象吃植物，是古代草原食物关系中的一部分。披毛犀等其他动物也曾生活在这类环境里。了解当时的植物和动物，能帮助我们把真猛犸象放回它生活的环境中。",
        "这些资料还不足以完整说明它怎样改变整片草原、与哪些动物直接竞争。"
      ],
      "sources": [
        "https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html",
        "https://www.nps.gov/articles/mammoth-or-mastodon.htm"
      ]
    },
    {
      "key": "survival",
      "title": "它为什么已经消失",
      "paragraphs": [
        "“已灭绝”表示这个物种已经没有活着的个体。各地真猛犸象并不是同时消失；弗兰格尔岛上的最后一些种群延续到大约四千年前。",
        "研究者讨论气候变化、人类活动等影响时，需要区分地区和时期。不能把全部灭绝过程压缩成“某一年，一场寒冷让所有猛犸象消失”。",
        "这里的灭绝依据来自历史与化石研究，不能把“大约四千年前”写进 IUCN 评估年份。"
      ],
      "sources": [
        "https://www.nps.gov/articles/mammoth-or-mastodon.htm",
        "https://www.nhm.ac.uk/discover/last-mammoths.html"
      ]
    }
  ],
  "observation": {
    "images": [
      "./images/species/woolly-mammoth/02-observation.webp"
    ],
    "prompt": "找出较高的肩部、向后倾斜的背线和弯曲象牙。哪些部位在图中看不见？",
    "note": "AI 生成科学复原示意，不是真实摄影；毛色、动作和场景包含推断。",
    "questions": [
      {
        "question": "这张闭嘴的复原图能让你看清磨碎食物的臼齿吗？",
        "answer": "不能。图中显眼的长牙是象牙；臼齿需要另外的标本或结构示意说明。"
      },
      {
        "question": "为什么不能凭这张图说出它真正的毛色和灭绝原因？",
        "answer": "复原画面包含创作者的选择；这些问题要靠遗存和研究证据判断。"
      }
    ]
  },
  "illustrations": [
    {
      "image": "./images/learning/woolly-mammoth/tusk-and-molar.webp",
      "alt": "AI 科学复原示意：真猛犸象的弯曲象牙，以及有平行薄板状咀嚼面的臼齿放大图",
      "title": "象牙与臼齿不一样",
      "caption": "显眼的象牙与磨碎草本食物的臼齿不同。这是科学复原与结构示意，不是化石照片，也不按比例。",
      "credit": "Fauna Atlas · AI 生成科学复原示意"
    }
  ]
} as const satisfies SpeciesLearningProfile;

export const learningSources = [
  {
    "title": "Palaeo-environmental and dietary analysis of intestinal contents of a mammoth calf",
    "url": "https://repository.naturalis.nl/pub/801838/Geel-2011-Palaeo-environmental-and-dietary-analysis-A.pdf",
    "kind": "ecology",
    "accessedAt": "2026-11-11"
  }
] as const satisfies readonly SpeciesSource[];
