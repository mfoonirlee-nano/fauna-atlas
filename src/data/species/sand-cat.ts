import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sand-cat",
  "slug": "sand-cat",
  "names": {
    "zh": "沙猫",
    "en": "Sand Cat"
  },
  "scientificName": "Felis margarita",
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
      "scientificName": "Mammalia",
      "zhName": "哺乳纲"
    },
    "order": {
      "scientificName": "Carnivora",
      "zhName": "食肉目"
    },
    "family": {
      "scientificName": "Felidae",
      "zhName": "猫科"
    },
    "genus": {
      "scientificName": "Felis",
      "zhName": "猫属"
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
    "assessor": '全球等级为 LC（无危），独立评估年份尚未确认；地区濒危等级不代表全球等级。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "北非、阿拉伯半岛及亚洲西南部和中亚的部分荒漠"
    ],
    "countries": [],
    "range": "北非、阿拉伯半岛及亚洲西南部和中亚的部分荒漠；主要见于植被稀疏的沙地与砾石荒漠。"
  },
  "habitats": [
    {
      "name": "植被稀疏的沙地与砾石荒漠",
      "realm": "terrestrial",
      "description": '北非、阿拉伯半岛及亚洲西南部、中亚部分地区植被稀疏的沙地和砾石荒漠。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型啮齿动物",
      "鸟类",
      "爬行动物",
      "昆虫"
    ],
    "description": "食物包括小型啮齿动物、鸟类、爬行动物、昆虫。"
  },
  "tags": [
    "沙猫",
    "植被稀疏的沙地与砾石荒漠"
  ],
  "summary": '沙猫夜间在荒漠捕食小动物，炎热白天躲在洞里。浅沙色毛帮助隐蔽，厚脚毛隔开冷热地面。',
  "description": '沙猫在北非、阿拉伯半岛及亚洲西南部、中亚部分荒漠生活，夜间寻找啮齿动物、鸟、爬行动物和昆虫，炎热季节白天躲在洞中。浅沙色毛帮助隐蔽，大耳听取猎物声音，脚底和趾间厚毛隔开过热或过冷地面。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '宽脸两旁的大耳朵',
      body: '大耳朵分得很开，位置也较低。找找耳内的白毛，再比一比耳朵与脸的大小。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '沙地上的浅色毛',
      body: '浅沙色的背毛与周围地面接近。先找眼睛和鼻子，再沿着身体边缘看出整只猫。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '脚边长着厚毛',
      body: '沙猫脚底和趾间有厚毛，能帮助脚掌隔开过热或过冷的地面。图中观察脚边的毛，不凭生成图判断脚印。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '洞口里面的阴影',
      body: '炎热季节的白天，它常在洞穴里躲避高温。它能自己挖洞，也会利用其他动物留下的洞。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '黄昏竖起耳朵',
      body: '沙猫多在夜间觅食，听觉帮助它寻找猎物。看看它停下来时的耳朵，再找找尾巴末端的黑色。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '荒漠中的灌丛和洞穴也是动物的家。远处看见沙猫时留出距离，不掘洞、不追赶。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '来自撒哈拉的标本与纪念性种名',
      body: 'Loche 在 1858 年根据北部撒哈拉采集的标本描述 Felis margarita，种名纪念法国军人 Jean Auguste Margueritte。中文名“沙猫”则提示荒漠家园。描述所依据的模式标本原在 Loche 的个人收藏里，后来下落不明，很可能已经丢失。',
    },
  ],
  "keyFacts": [
    "大耳朵分得很开，位置也较低。找找耳内的白毛，再比一比耳朵与脸的大小。",
    "浅沙色的背毛与周围地面接近。先找眼睛和鼻子，再沿着身体边缘看出整只猫。",
    "沙猫脚底和趾间有厚毛，能帮助脚掌隔开过热或过冷的地面。图中观察脚边的毛，不凭生成图判断脚印。",
    "炎热季节的白天，它常在洞穴里躲避高温。它能自己挖洞，也会利用其他动物留下的洞。",
    "沙猫多在夜间觅食，听觉帮助它寻找猎物。看看它停下来时的耳朵，再找找尾巴末端的黑色。"
  ],
  "threats": [
    "荒漠栖息地退化",
    "捕捉与人类干扰"
  ],
  "conservationActions": [
    "荒漠中的灌丛和洞穴也是动物的家。远处看见沙猫时留出距离，不掘洞、不追赶。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "植被稀疏的沙地与砾石荒漠"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "宽脸两旁的大耳朵"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": '沙猫 Felis margarita 的全球 IUCN 等级为无危，独立评估年份尚未确认。区域濒危等级与全球等级分开理解，旧四亚种划分也不能当作已确认的现行分类。'
    }
  ],
  "media": {
    "image": "./images/species/sand-cat/01-cover.webp",
    "alt": "沙猫及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sand-cat/02-observation.webp",
        "alt": "沙猫：宽脸两旁的大耳朵",
        "title": "宽脸两旁的大耳朵",
        "caption": "AI 生成科学情景重建。大耳朵分得很开，位置也较低。找找耳内的白毛，再比一比耳朵与脸的大小。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sand-cat/03-observation.webp",
        "alt": "沙猫：沙地上的浅色毛",
        "title": "沙地上的浅色毛",
        "caption": "AI 生成科学情景重建。浅沙色的背毛与周围地面接近。先找眼睛和鼻子，再沿着身体边缘看出整只猫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sand-cat/04-observation.webp",
        "alt": "沙猫：脚边长着厚毛",
        "title": "脚边长着厚毛",
        "caption": "AI 生成科学情景重建。沙猫脚底和趾间有厚毛，能帮助脚掌隔开过热或过冷的地面。图中观察脚边的毛，不凭生成图判断脚印。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sand-cat/05-observation.webp",
        "alt": "沙猫：洞口里面的阴影",
        "title": "洞口里面的阴影",
        "caption": "AI 生成科学情景重建。炎热季节的白天，它常在洞穴里躲避高温。它能自己挖洞，也会利用其他动物留下的洞。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sand-cat/06-observation.webp",
        "alt": "沙猫：黄昏竖起耳朵",
        "title": "黄昏竖起耳朵",
        "caption": "AI 生成科学情景重建。沙猫多在夜间觅食，听觉帮助它寻找猎物。看看它停下来时的耳朵，再找找尾巴末端的黑色。",
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
      "title": "IUCN Cat Specialist Group：Sand Cat",
      "url": "https://www.catsg.org/living-species-sandcat",
      "kind": "conservation",
      "accessedAt": "2026-09-25"
    },
    {
      "title": "San Diego Zoo Wildlife Alliance：Sand Cat",
      "url": "https://sandiegozoowildlifealliance.org/story-hub/zoonooz/sand-cat",
      "kind": "ecology",
      "accessedAt": "2026-09-25"
    },
    {
      title: 'Mammalian Species：沙猫命名与模式标本',
      url: 'https://academic.oup.com/mspecies/article/47/924/63/2609388',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-25",
  "updatedAt": "2026-09-25"
} as const satisfies Species;

export default profile;
