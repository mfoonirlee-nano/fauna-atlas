import type { SpeciesLearningProfile } from '../../types/species.js';

export const learningProfile = {
  "version": 1,
  "introduction": "大熊猫住在中国的山地森林里，主要吃竹子，前掌和牙齿各有处理竹子的本领。",
  "sections": [
    {
      "key": "identity",
      "title": "认识它",
      "paragraphs": [
        "大熊猫是一种熊，也是哺乳动物。黑色的耳朵、眼圈和四肢配上白色身体，是它醒目的外形。它看起来圆滚滚，仍然是有力的野生动物，观察时要保持距离。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda"
      ]
    },
    {
      "key": "body",
      "title": "看看它的身体",
      "paragraphs": [
        "这些结构需要结合说明理解。普通的进食图不一定能看清藏在毛下面的腕骨。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda",
        "https://www.forestry.gov.cn/c/www/dzw/506528.jhtml"
      ],
      "bodyParts": [
        {
          "name": "厚实的毛",
          "explanation": "帮助身体在凉湿的山林中保暖"
        },
        {
          "name": "前掌的“伪拇指”",
          "explanation": "一块变大的腕骨，与五个脚趾配合夹住竹子；不是真正的第六根手指"
        },
        {
          "name": "强壮的颌部和臼齿",
          "explanation": "颌部帮助用力咬，臼齿是嘴里用来磨碎食物的后部牙齿，可以压碎坚韧的竹子"
        }
      ]
    },
    {
      "key": "habitat",
      "title": "它的家在哪里",
      "paragraphs": [
        "野生大熊猫生活在中国四川、陕西和甘肃的部分山地森林。森林里既要有竹子，也要有可供遮蔽、活动的空间。地图上的一个点不能画出它们的全部分布。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda"
      ]
    },
    {
      "key": "foraging",
      "title": "它怎样找到和吃下食物",
      "paragraphs": [
        "大熊猫主要吃竹叶、竹秆和竹笋。它会用前掌把竹子稳住，再用嘴咬断、咀嚼。它消化竹子并不高效，因此需要花很多时间寻找食物和进食。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda",
        "https://www.forestry.gov.cn/c/www/dzw/506528.jhtml"
      ],
      "curiosity": "动物分类中的“食肉目”和“主要吃肉”不是同一个意思。大熊猫属于食肉目，但它的主要食物是竹子；分类名称不能代替实际食谱。"
    },
    {
      "key": "dailyLife",
      "title": "它怎样生活",
      "paragraphs": [
        "成年大熊猫通常独自活动，但彼此并非完全没有联系。它们会在树干、岩石等地方留下气味，也会发声，让附近的同类获得信息。进食之外，它们还需要休息。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda"
      ]
    },
    {
      "key": "growth",
      "title": "幼崽怎样长大",
      "paragraphs": [
        "大熊猫幼崽刚出生时很小，眼睛还没有睁开，依靠母乳和母亲的照顾生存。长大后，它逐渐开始活动和取食，之后才离开母亲独立生活。不要把这里的“大熊猫幼崽”和另一种叫“小熊猫”的动物混淆。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda"
      ]
    },
    {
      "key": "ecology",
      "title": "它和森林中的其他生命",
      "paragraphs": [
        "大熊猫的食物和住处都离不开森林里的竹子。保护人员修复、连接山林时，也在保护其他野生动物生活的环境；不同动物得到的帮助并不完全一样。",
        "“生态廊道”就是让动物能够在分隔的栖息地之间移动的通路。对大熊猫来说，有竹林的连接地带能帮助它们寻找食物和同类。"
      ],
      "sources": [
        "https://nationalzoo.si.edu/animals/giant-panda",
        "https://www.ndrc.gov.cn/wsdwhfz/202606/t20260618_1405986.html"
      ]
    },
    {
      "key": "survival",
      "title": "它现在过得怎么样",
      "paragraphs": [
        "IUCN 的这份记录中，大熊猫的全球评估为“易危”（VU），评估年份是 2016 年。“易危”说明它仍面临野外灭绝风险，不表示已经安全，也不表示已经灭绝。",
        "森林被道路、开发地等分隔后，生活在不同山林的大熊猫可能难以相遇。保护完整的森林、修复连接地带，是保护工作的一部分。"
      ],
      "sources": [
        "https://www.iucnredlist.org/species/712/121745669",
        "https://nationalzoo.si.edu/animals/giant-panda",
        "https://www.ndrc.gov.cn/wsdwhfz/202606/t20260618_1405986.html"
      ]
    }
  ],
  "observation": {
    "images": [
      "./images/species/giant-panda/02-bamboo-feeding.webp"
    ],
    "prompt": "先找竹子，再看前掌与嘴的位置。它用哪些部位稳住和处理食物？",
    "note": "AI 生成配图，用于辅助理解，不是野外观察记录。毛下面的腕骨不能只凭这张图判断。",
    "questions": [
      {
        "question": "为什么大熊猫的“伪拇指”和臼齿都与吃竹子有关？",
        "answer": "前掌帮助夹稳竹子，臼齿帮助磨碎食物。它们承担不同步骤；腕骨的具体结构不能只靠这张图判断。"
      }
    ]
  }
} as const satisfies SpeciesLearningProfile;
