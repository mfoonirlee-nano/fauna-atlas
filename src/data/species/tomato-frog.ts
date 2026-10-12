import type { Species } from '../../types/species.ts';

const profile = {
  "id": "tomato-frog",
  "slug": "tomato-frog",
  "names": {
    "zh": "番茄蛙",
    "en": "Tomato Frog"
  },
  "scientificName": "Dyscophus antongilii",
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
      "scientificName": "Microhylidae",
      "zhName": "姬蛙科"
    },
    "genus": {
      "scientificName": "Dyscophus",
      "zhName": "番茄蛙属"
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
    "assessor": '全球等级为 LC（无危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "马达加斯加东北部的湿润低地"
    ],
    "countries": [
      "马达加斯加"
    ],
    "range": "马达加斯加东北部的湿润低地。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "马达加斯加东北部的湿润低地",
      "realm": "terrestrial",
      "description": "马达加斯加东北部的湿润低地。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "其他小型无脊椎动物"
    ],
    "description": "主要取食昆虫、其他小型无脊椎动物。"
  },
  "tags": [
    "番茄蛙",
    "圆圆的红身体"
  ],
  "summary": '番茄蛙白天藏在湿润土壤里，夜间捕捉小动物。雌蛙通常更大、呈橙红色到红色，雄蛙常偏黄橙色。',
  "description": '番茄蛙生活在马达加斯加东北部的湿润低地。雌蛙通常比雄蛙大，背部呈橙红色到红色，雄蛙则常偏黄橙色。白天它会钻进松软土壤躲藏，夜间等待小型无脊椎动物靠近。卵和蝌蚪在水中发育，之后变态成幼蛙。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '圆圆的红身体',
      body: '成年雌蛙通常比雄蛙大，背部呈鲜艳的橙红色到红色。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '雄蛙颜色不同',
      body: '雄蛙通常偏黄橙色。雌雄两张图不是等比例大小比较。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '藏进松软的土里',
      body: '番茄蛙会钻入松软的土壤，在潮湿的隐蔽处休息。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '等小虫走近',
      body: '它常在夜间活动，等待小型无脊椎动物进入捕食范围。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '水里的蝌蚪',
      body: '繁殖离不开水，卵孵化后，蝌蚪先在水中生长，再变态为幼蛙。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留潮湿地面和繁殖水体，观察时不抓握或刺激青蛙。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '红色外观留下的印象',
      body: 'Grandidier 在 1877 年发表 Dyscophus antongilii 这个名称。中文名“番茄蛙”可以让人记住成体雌蛙的红色、圆胖外观，不过雄蛙通常偏黄橙色，大小也有差别。它的早期生活仍是水中的卵和蝌蚪，与成年蛙钻入土中的生活场景不同。',
    },
  ],
  "keyFacts": [
    "成年雌蛙通常比雄蛙大，背部呈鲜艳的橙红色到红色。",
    "雄蛙通常偏黄橙色。雌雄两张图不是等比例大小比较。",
    "番茄蛙会钻入松软的土壤，在潮湿的隐蔽处休息。",
    "它常在夜间活动，等待小型无脊椎动物进入捕食范围。",
    "繁殖离不开水，卵孵化后，蝌蚪先在水中生长，再变态为幼蛙。"
  ],
  "threats": [
    "湿地和低地栖息地退化",
    "水体污染"
  ],
  "conservationActions": [
    "保留潮湿地面和繁殖水体，观察时不抓握或刺激青蛙。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "圆圆的红身体"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "马达加斯加东北部的湿润低地"
    }
  ],
  "media": {
    "image": "./images/species/tomato-frog/01-cover.webp",
    "alt": "番茄蛙在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/tomato-frog/02-observation.webp",
        "title": "圆圆的红身体",
        "alt": "番茄蛙：圆圆的红身体",
        "caption": "AI 生成科学情景重建。成年雌蛙通常比雄蛙大，背部呈鲜艳的橙红色到红色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tomato-frog/03-observation.webp",
        "title": "雄蛙颜色不同",
        "alt": "番茄蛙：雄蛙颜色不同",
        "caption": "AI 生成科学情景重建。雄蛙通常偏黄橙色。雌雄两张图不是等比例大小比较。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tomato-frog/04-observation.webp",
        "title": "藏进松软的土里",
        "alt": "番茄蛙：藏进松软的土里",
        "caption": "AI 生成科学情景重建。番茄蛙会钻入松软的土壤，在潮湿的隐蔽处休息。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tomato-frog/05-observation.webp",
        "title": "等小虫走近",
        "alt": "番茄蛙：等小虫走近",
        "caption": "AI 生成科学情景重建。它常在夜间活动，等待小型无脊椎动物进入捕食范围。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/tomato-frog/06-observation.webp",
        "title": "水里的蝌蚪",
        "alt": "番茄蛙：水里的蝌蚪",
        "caption": "AI 生成科学情景重建。繁殖离不开水，卵孵化后，蝌蚪先在水中生长，再变态为幼蛙。",
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
      "title": "ADW：番茄蛙形态与繁殖",
      "url": "https://animaldiversity.org/accounts/Dyscophus_antongilii/",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "AMNH：接受学名与分类",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Microhylidae/Dyscophinae/Dyscophus/Dyscophus-antongilii",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "Amphibian Ark：全球无危状态",
      "url": "https://www.conservationneeds.org/Assessment/AssessmentResults?assessmentId=599&countryId=7&speciesId=6503",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'GBIF：番茄蛙的科学命名记录',
      url: 'https://www.gbif.org/species/5216573',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
