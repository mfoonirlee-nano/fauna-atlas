import type { Species } from '../../types/species.ts';

const profile = {
  "id": "siberian-weasel",
  "slug": "siberian-weasel",
  "names": {
    "zh": "黄鼬",
    "en": "Siberian Weasel",
    "aliases": [
      "黄鼠狼"
    ]
  },
  "scientificName": "Mustela sibirica",
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
      "scientificName": "Mustelidae",
      "zhName": "鼬科"
    },
    "genus": {
      "scientificName": "Mustela",
      "zhName": "鼬属"
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
    "assessedYear": 2015,
    "assessor": "IUCN 全球评估为 LC，评估年份 2015；全球等级不代替地区状态。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧亚大陆东部"
    ],
    "countries": [],
    "range": "原生分布横跨欧亚大陆东部，从俄罗斯部分地区至东亚并向喜马拉雅一带延伸；日本部分地区存在引入种群。地图点为华北代表位置，不标示一次野外发现。",
    "center": {
      "lat": 40,
      "lng": 116
    }
  },
  "habitats": [
    {
      "name": "林缘、草地与农田边缘",
      "realm": "terrestrial",
      "description": "黄鼬利用森林、林缘、草地及部分农田周边环境，常独自活动，并钻进洞隙寻找食物或躲避。一天中的活动时段会随地区和干扰变化，不能把傍晚的一张照片当成只在夜间活动的证据。",
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
      "其他小型脊椎动物",
      "昆虫"
    ],
    "description": "它以小型哺乳动物等动物性食物为主，也会吃鸟类、卵和无脊椎动物。部分地区会随鼠类数量转而取食更多昆虫；把全部食物都写成家禽会忽略它在野外的取食范围。"
  },
  "tags": [
    "黄鼬",
    "林缘、草地与农田边缘"
  ],
  "summary": "黄鼬身体细长、四肢短，黄褐色尾巴延伸在身后。它会捕食鼠类，也取食其他小动物，食谱随环境而变。",
  "description": "黄鼬背部常呈黄褐色，吻部较浅，耳朵小而圆，身体与尾巴都细长。尾端可能稍暗，却没有白鼬那样界线鲜明的黑色尾尖。雄性通常比雌性大，单凭照片缺少尺度时很难判断体型。Mustela sibirica 属于鼬科、鼬属，与日本鼬 Mustela itatsi 分别记录。黄鼠狼是常见俗名，名字中虽有“鼠”，分类上仍是食肉目动物。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形认一认",
      "body": "黄鼬背部常呈黄褐色，吻部较浅，耳朵小而圆，身体与尾巴都细长。尾端可能稍暗，却没有白鼬那样界线鲜明的黑色尾尖。雄性通常比雌性大，单凭照片缺少尺度时很难判断体型。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "它在哪里活动",
      "body": "黄鼬利用森林、林缘、草地及部分农田周边环境，常独自活动，并钻进洞隙寻找食物或躲避。一天中的活动时段会随地区和干扰变化，不能把傍晚的一张照片当成只在夜间活动的证据。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "食物怎样进入身体",
      "body": "它以小型哺乳动物等动物性食物为主，也会吃鸟类、卵和无脊椎动物。部分地区会随鼠类数量转而取食更多昆虫；把全部食物都写成家禽会忽略它在野外的取食范围。"
    },
    {
      "key": "life-cycle",
      "label": "成长与变化",
      "title": "幼体与成体",
      "body": "母鼬在隐蔽处产仔并哺乳，幼鼬逐步离开巢穴学习活动。亲子场景、巢穴位置和繁殖时间会随地区变化；遇到幼体时应远距离观察，保留成体进出洞穴的通道。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "这个名称指向谁",
      "body": "Mustela sibirica 属于鼬科、鼬属，与日本鼬 Mustela itatsi 分别记录。黄鼠狼是常见俗名，名字中虽有“鼠”，分类上仍是食肉目动物。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：细长的尾巴是否有边界鲜明的黑尖？观察任务：比较抬头和伏低姿态，看短腿怎样支撑细长身体。 保留林缘和隐蔽通道，减少无差别捕杀，并管理家禽围舍以降低冲突。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "Mustela sibirica 的名称记录",
      "body": "Pallas 在 1773 年命名 Mustela sibirica，GBIF 当前接受这一学名。命名史与民间关于黄鼬的故事属于不同的资料；本页依据形态、生态研究和分类记录解释它的身份。"
    }
  ],
  "keyFacts": [
    "黄鼬背部常呈黄褐色，吻部较浅，耳朵小而圆，身体与尾巴都细长。尾端可能稍暗，却没有白鼬那样界线鲜明的黑色尾尖。雄性通常比雌性大，单凭照片缺少尺度时很难判断体型。",
    "它以小型哺乳动物等动物性食物为主，也会吃鸟类、卵和无脊椎动物。部分地区会随鼠类数量转而取食更多昆虫；把全部食物都写成家禽会忽略它在野外的取食范围。",
    "母鼬在隐蔽处产仔并哺乳，幼鼬逐步离开巢穴学习活动。亲子场景、巢穴位置和繁殖时间会随地区变化；遇到幼体时应远距离观察，保留成体进出洞穴的通道。"
  ],
  "threats": [
    "栖息环境改变",
    "道路与人类冲突"
  ],
  "conservationActions": [
    "保留林缘和隐蔽通道，减少无差别捕杀，并管理家禽围舍以降低冲突。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、草地与农田边缘"
    },
    {
      "key": "diet",
      "label": "主要食物",
      "value": "小型啮齿动物、其他小型脊椎动物"
    }
  ],
  "media": {
    "image": "./images/species/siberian-weasel/01-cover.webp",
    "alt": "黄鼬及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/siberian-weasel/02-observation.webp",
        "title": "抬头观察",
        "alt": "黄鼬：抬头观察，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。细长身体与短腿构成明显轮廓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-weasel/03-observation.webp",
        "title": "倒木旁调查",
        "alt": "黄鼬：倒木旁调查，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。倒木和缝隙为取食与躲避提供空间。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-weasel/04-observation.webp",
        "title": "低伏移动",
        "alt": "黄鼬：低伏移动，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。静图重建一种步态，不测定移动速度。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-weasel/05-observation.webp",
        "title": "洞口旁停留",
        "alt": "黄鼬：洞口旁停留，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。洞口可能用于寻找食物，也可能提供掩蔽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/siberian-weasel/06-observation.webp",
        "title": "落叶上休息",
        "alt": "黄鼬：落叶上休息，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。尾巴围在身体附近，尾端没有鲜明黑尖。",
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
      "title": "GBIF：接受学名、命名人和分类链",
      "url": "https://www.gbif.org/species/5218972",
      "kind": "taxonomy",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "Mammalian Species：黄鼬形态、分布与生态",
      "url": "https://academic.oup.com/mspecies/article/50/966/109/5102491",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "ADW：黄鼬食物与生活史",
      "url": "https://animaldiversity.org/accounts/Mustela_sibirica/",
      "kind": "ecology",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 发布于 GBIF 的全球受威胁物种名录",
      "url": "https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/176684337",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 全球评估与采用的名称范围",
      "url": "https://doi.org/10.2305/IUCN.UK.2016-1.RLTS.T41659A45214744.en",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    },
    {
      "title": "IUCN 原始评估作者上传版：评估日期 2015-03-03",
      "url": "https://www.researchgate.net/publication/332440345_Mustela_sibirica_The_IUCN_Red_List_of_Threatened_Species",
      "kind": "conservation",
      "accessedAt": "2026-10-18"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-18",
  "updatedAt": "2026-10-18"
} as const satisfies Species;

export default profile;
