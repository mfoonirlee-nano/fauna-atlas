import type { Species } from '../../types/species.ts';

const profile = {
  "id": "european-bee-eater",
  "slug": "european-bee-eater",
  "names": {
    "zh": "欧洲蜂虎",
    "en": "European Bee-eater"
  },
  "scientificName": "Merops apiaster",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Coraciiformes",
      "zhName": "佛法僧目"
    },
    "family": {
      "scientificName": "Meropidae",
      "zhName": "蜂虎科"
    },
    "genus": {
      "scientificName": "Merops",
      "zhName": "蜂虎属"
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
    "assessor": "依据所列资料的全球等级；独立评估日期未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲南部与非洲"
    ],
    "countries": [],
    "range": "欧洲南部和北非等地有繁殖种群，许多种群迁往撒哈拉以南非洲越冬。"
  },
  "habitats": [
    {
      "name": "开阔草地与沙质岸坡",
      "realm": "terrestrial",
      "description": '开阔地让蜂虎追逐飞虫，枝条提供观察和处理猎物的位置。沙质岸坡、采砂地土壁能供它们挖掘巢洞。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "typical": 60.5,
      "unit": "g",
      "note": "BTO 所列代表体重，不作为上下限。"
    }
  },
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "蜂类",
      "蜻蜓",
      "其他飞虫"
    ],
    "description": "取食蜂类、蜻蜓、其他飞虫。"
  },
  "tags": [
    "欧洲蜂虎",
    "黄色喉部和长嘴"
  ],
  "summary": "欧洲蜂虎用细长的嘴在飞行中捕捉昆虫。黄色喉部、蓝绿色胸腹和眼旁黑纹有助于辨认它。",
  "description": '欧洲蜂虎从枝头飞出，在空中追逐飞虫，捕到蜂后带回枝上处理再吞下。它们会结群活动，在沙岸或采砂地土壁挖巢；许多种群季节性迁往非洲越冬。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '黄色喉部和长嘴',
      body: '黑色细长喙后方是黄色喉部，眼旁有黑纹，胸腹蓝绿色。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '飞起来捉虫',
      body: '欧洲蜂虎从栖枝飞出，在空中追逐、捕捉飞虫。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '把食物带回枝头',
      body: '捕到蜂后，它会在枝上处理猎物，再吞下。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '沙坡上的洞口',
      body: '它能在沙岸或采砂地土壁挖掘巢洞，野外观察应远离洞口。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '和同伴停一停',
      body: '欧洲蜂虎常结群活动，也会在相近位置筑巢。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '留住它的生活环境',
      body: '欧洲蜂虎全球属无危，独立评估日期和全球种群趋势尚未确认。观察巢洞时应保持距离，避免干扰繁殖。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '捕蜂只是飞虫食谱的一部分',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Merops apiaster。欧洲蜂虎会捕捉蜂类，也追逐蜻蜓和其他飞虫。它从栖枝起飞、把猎物带回枝上处理，繁殖时则在沙质土壁挖洞，空中觅食和地下巢穴都属于它的生活。',
    },
  ],
  "keyFacts": [
    '黑色细长喙后方是黄色喉部，眼旁有黑纹，胸腹蓝绿色。',
    '欧洲蜂虎从栖枝飞出，在空中追逐、捕捉飞虫。',
    '捕到蜂后，它会在枝上处理猎物，再吞下。',
    '它能在沙岸或采砂地土壁挖掘巢洞，野外观察应远离洞口。',
    '欧洲蜂虎常结群活动，也会在相近位置筑巢。',
  ],
  "threats": [
    "局地栖息环境改变与巢址干扰"
  ],
  "conservationActions": [
    "保留原生植被和巢址",
    "野外观察保持距离"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黄色喉部和长嘴"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "开阔草地与沙质岸坡"
    }
  ],
  "media": {
    "image": "./images/species/european-bee-eater/01-cover.webp",
    "alt": "欧洲蜂虎的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-bee-eater/02-observation.webp",
        "title": "黄色喉部和长嘴",
        "alt": '黄色喉部和长嘴',
        "caption": "AI 生成科学情景重建。沿着黑色的嘴向后看，找找黄色喉部和经过眼睛的黑色条纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-bee-eater/03-observation.webp",
        "title": "飞起来捉虫",
        "alt": '飞起来捉虫',
        "caption": "AI 生成科学情景重建。它从栖枝飞出去，在空中追逐并捕捉飞虫。图中可以找找嘴前的小虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-bee-eater/04-observation.webp",
        "title": "把食物带回枝头",
        "alt": '把食物带回枝头',
        "caption": "AI 生成科学情景重建。捕到蜂后，它会在枝上处理猎物，再吞下。单张图片没有展示整个处理过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-bee-eater/05-observation.webp",
        "title": "沙坡上的洞口",
        "alt": '沙坡上的洞口',
        "caption": "AI 生成科学情景重建。欧洲蜂虎能在沙岸或采砂地的土壁挖掘巢洞。观察时应与洞口保持距离。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-bee-eater/06-observation.webp",
        "title": "和同伴停一停",
        "alt": '和同伴停一停',
        "caption": "AI 生成科学情景重建。它们常结群活动，也会在相近位置筑巢。看看两只鸟怎样抓住枝条。",
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
      "title": "RSPB：欧洲蜂虎捕虫、迁徙与巢穴",
      "url": "https://www.rspb.org.uk/whats-happening/news/buzz-as-rare-rainbow-birds-set-up-summer-home-in-norfolk",
      "kind": "ecology",
      "accessedAt": "2026-09-17"
    },
    {
      "title": "BTO：欧洲蜂虎分类与全球等级",
      "url": "https://www.bto.org/learn/about-birds/birdfacts/bee-eater",
      "kind": "conservation",
      "accessedAt": "2026-09-17"
    },
    {
      title: 'GBIF：Merops apiaster 的命名作者与年份',
      url: 'https://www.gbif.org/species/2475443',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-17",
  "updatedAt": "2026-09-17"
} as const satisfies Species;

export default profile;
