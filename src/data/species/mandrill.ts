import type { Species } from '../../types/species.ts';

const profile = {
  "id": "mandrill",
  "slug": "mandrill",
  "names": {
    "zh": "山魈",
    "en": "Mandrill"
  },
  "scientificName": "Mandrillus sphinx",
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
      "scientificName": "Primates",
      "zhName": "灵长目"
    },
    "family": {
      "scientificName": "Cercopithecidae",
      "zhName": "猴科"
    },
    "genus": {
      "scientificName": "Mandrillus",
      "zhName": "山魈属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "VU",
    "label": {
      "zh": "易危",
      "en": "Vulnerable"
    },
    "trend": "unknown",
    "assessor": '全球等级为 VU（易危）；独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "非洲"
    ],
    "regions": [
      "非洲中西部的热带雨林"
    ],
    "countries": [
      "喀麦隆",
      "加蓬",
      "赤道几内亚",
      "刚果共和国"
    ],
    "range": "非洲中西部的热带雨林。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "非洲中西部的热带雨林",
      "realm": "terrestrial",
      "description": "非洲中西部的热带雨林。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "种子",
      "昆虫等小动物"
    ],
    "description": "食物包括果实、种子、昆虫等小动物。"
  },
  "tags": [
    "山魈",
    "红鼻子与蓝脸颊"
  ],
  "summary": '山魈白天在雨林地面活动，夜间上树休息。成年雄性有鲜艳红蓝面孔，食物可暂存于颊囊。',
  "description": '山魈生活在非洲中西部热带雨林，白天与同伴在林地活动，夜间爬到树上休息。成年雄性的蓝色鼻侧隆起、红色鼻部和黄色胡须很鲜明，雌性更小，脸色较淡。它吃果实、种子，也吃小动物，还能把食物暂存颊囊中。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '红鼻子与蓝脸颊',
      body: '成年雄山魈的鼻子两侧有蓝色隆起，中间呈红色，下巴周围长着黄色胡须。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '雌猴颜色较淡',
      body: '画面右侧雌山魈的脸色较淡，体型比左侧成年雄性小。每只山魈的脸并不一样鲜艳。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '地上走的猴子',
      body: '山魈常用四肢在林地走动。找找身体后面的短尾巴。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '手里拿着果实',
      body: '山魈吃果实、种子，也会吃小动物。它能把食物暂存在颊囊里。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '树枝上的休息处',
      body: '山魈也会爬树，夜里在树上休息。白天同伴们一起在森林中活动。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留雨林栖息地，减少捕猎和野生动物交易。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '鲜艳面孔并非每只相同',
      body: 'Linnaeus 在 1758 年发表了山魈的科学描述，今天采用 Mandrillus sphinx。照片中常见的鲜艳红蓝面孔属于成年雄性，同种雌性通常色彩较淡。观察进食时，它还能把食物暂存脸颊内的颊囊中，稍后再取出来吃。',
    },
  ],
  "keyFacts": [
    "成年雄山魈的鼻子两侧有蓝色隆起，中间呈红色，下巴周围长着黄色胡须。",
    "画面右侧雌山魈的脸色较淡，体型比左侧成年雄性小。每只山魈的脸并不一样鲜艳。",
    "山魈常用四肢在林地走动。找找身体后面的短尾巴。",
    "山魈吃果实、种子，也会吃小动物。它能把食物暂存在颊囊里。",
    "山魈也会爬树，夜里在树上休息。白天同伴们一起在森林中活动。"
  ],
  "threats": [
    "森林砍伐",
    "商业性捕猎"
  ],
  "conservationActions": [
    "保留雨林栖息地，减少捕猎和野生动物交易。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "红鼻子与蓝脸颊"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "非洲中西部的热带雨林"
    }
  ],
  "media": {
    "image": "./images/species/mandrill/01-cover.webp",
    "alt": "山魈在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/mandrill/02-observation.webp",
        "title": "红鼻子与蓝脸颊",
        "alt": "山魈：红鼻子与蓝脸颊",
        "caption": "AI 生成科学情景重建。成年雄山魈的鼻子两侧有蓝色隆起，中间呈红色，下巴周围长着黄色胡须。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mandrill/03-observation.webp",
        "title": "雌猴颜色较淡",
        "alt": "山魈：雌猴颜色较淡",
        "caption": "AI 生成科学情景重建。画面右侧雌山魈的脸色较淡，体型比左侧成年雄性小。每只山魈的脸并不一样鲜艳。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mandrill/04-observation.webp",
        "title": "地上走的猴子",
        "alt": "山魈：地上走的猴子",
        "caption": "AI 生成科学情景重建。山魈常用四肢在林地走动。找找身体后面的短尾巴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mandrill/05-observation.webp",
        "title": "手里拿着果实",
        "alt": "山魈：手里拿着果实",
        "caption": "AI 生成科学情景重建。山魈吃果实、种子，也会吃小动物。它能把食物暂存在颊囊里。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/mandrill/06-observation.webp",
        "title": "树枝上的休息处",
        "alt": "山魈：树枝上的休息处",
        "caption": "AI 生成科学情景重建。山魈也会爬树，夜里在树上休息。白天同伴们一起在森林中活动。",
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
      "title": "圣迭戈动物园：山魈生活史与全球易危状态",
      "url": "https://animals.sandiegozoo.org/animals/mandrill",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    },
    {
      title: 'GBIF：山魈的科学命名记录',
      url: 'https://www.gbif.org/species/5219556',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
