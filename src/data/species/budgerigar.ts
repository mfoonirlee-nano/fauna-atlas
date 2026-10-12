import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-melopsittacus-undulatus",
    "slug": "budgerigar",
    "names": {
      "zh": "虎皮鹦鹉",
      "en": "Budgerigar",
      "aliases": []
    },
    "scientificName": "Melopsittacus undulatus",
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
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
        "scientificName": "Psittaciformes",
        "zhName": "鹦形目"
      },
      "family": {
        "scientificName": "Psittaculidae",
        "zhName": "长尾鹦鹉科"
      },
      "genus": {
        "scientificName": "Melopsittacus",
        "zhName": "虎皮鹦鹉属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "LC",
      "label": {
        "zh": "无危",
        "en": "Least Concern"
      },
      "trend": "increasing",
      "assessor": "BirdLife International",
      "assessedYear": 2018
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "大洋洲"
      ],
      "regions": [
        "内陆草地与疏林"
      ],
      "countries": [
        "澳大利亚"
      ],
      "range": "原生于澳大利亚大陆大部分内陆地区，随降雨和草籽供应游移。世界各地的宠物饲养范围不等于它的原生分布。"
    },
    "habitats": [
      {
        "name": "内陆草地与疏林",
        "realm": "terrestrial",
        "description": '生活在澳大利亚内陆草地和疏林，寻找草籽、水源以及能筑巢的树洞。',
        "isPrimary": true
      }
    ],
    "measurements": {
      "length": {
        "min": 17,
        "max": 18,
        "unit": "cm",
        "note": "采用澳大利亚博物馆的野生鸟体长范围。"
      }
    },
    "metrics": {
      "adultLengthCm": [
        17,
        18
      ]
    },
    "diet": {
      "types": [
        "herbivore"
      ],
      "foods": [
        "草籽",
        "草本植物种子"
      ],
      "description": "虎皮鹦鹉主要吃草本植物的种子，常落到地面啄食。野生鸟群会在内陆草地与疏林之间移动，寻找降雨后增加的食物和可饮用的水。"
    },
    "activity": [
      "日行性",
      "群居",
      "随资源游移"
    ],
    "tags": [
      "内陆草地与疏林",
      "无危",
      "声音学习",
      "草籽"
    ],
    "summary": "虎皮鹦鹉会学习声音，部分个体能模仿人说话。在野外，它们用联络叫声与同伴交流，成群寻找草籽和水。",
    "description": "野生虎皮鹦鹉以绿色身体、黄色头部和黑色波状斑纹为主，脸颊带蓝色斑块。蓝色、白色等常见宠物羽色来自人工选育。",
    "storySections": [
      {
        key: 'identity',
        label: '认识虎皮鹦鹉',
        title: '野生羽色以绿黄为主',
        body: '虎皮鹦鹉属于长尾鹦鹉科，尾巴尖长，头背带黑色波状羽纹。野生个体通常呈绿黄色，宠物品系经人工选育产生更多颜色。',
      },
      {
        key: 'learning',
        label: '学习声音',
        title: '部分个体能模仿人声',
        body: '研究者发现，虎皮鹦鹉可以把学到的人类语音加入鸣唱。不同个体学习的声音和数量有差异，能模仿音节本身并不能证明它像人一样理解话语。',
      },
      {
        key: 'calls',
        label: '同伴联络',
        title: '叫声也会跟着伙伴改变',
        body: '虎皮鹦鹉的声音学习并不限于人声。它们会学习同类的联络叫声，并在社会交往中调整发声。',
      },
      {
        key: 'feeding',
        label: '地面取食',
        title: '低头啄起小草籽',
        body: '虎皮鹦鹉主要吃草本植物的种子，常落到地面啄食。野生鸟群会在内陆草地与疏林之间移动，寻找降雨后增加的食物和可饮用的水。',
      },
      {
        key: 'nesting',
        label: '树洞繁殖',
        title: '雨后有食物才好育雏',
        body: '它们利用树干或树枝上的天然空洞筑巢。适宜降雨带来草籽后，鸟群可能开始繁殖；条件允许时，同一季节可以育雏不止一次。',
      },
      {
        key: 'conservation',
        label: '野生与家养',
        title: '无危指的是野生种群评估',
        body: '2018 年 IUCN 全球记录将野生虎皮鹦鹉列为无危，趋势增加。保护仍需要保留草地、水源和有树洞的老树。家养数量和宠物羽色与野外种群情况不同。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '羽纹像虎皮，叫声也会学习',
        body: 'Shaw 于 1805 年描述了这个物种，现用学名为 Melopsittacus undulatus。中文名中的“虎皮”对应头背的黑色波状羽纹。它不只会学习人声，也会学习同类的联络叫声，并随伙伴之间的交往调整声音。',
      },
    ],
    "keyFacts": [
      '野生羽色以绿黄为主，头背带黑色波纹。',
      '部分个体会把学到的人类语音加入鸣唱。',
      '能学习同类联络叫声，并随社会交往调整发声。',
      '主要在地面啄食草本植物种子。',
      '利用天然树洞筑巢，雨后食物增加时可能繁殖。',
    ],
    "threats": [
      "干旱期间水源和种子供应不足。",
      "草地改变与有巢洞的树木减少。"
    ],
    "conservationActions": [
      "保留原生草地、水源和老树。",
      "监测野生鸟群及其繁殖环境。"
    ],
    "featuredStats": [
      {
        "key": "length",
        "label": "体长约",
        "value": "17—18",
        "unit": "厘米"
      },
      {
        "key": "color",
        "label": "典型野生羽色",
        "value": "绿黄"
      }
    ],
    "sources": [
      {
        "title": "IOC World Bird List — 鹦鹉分类",
        "url": "https://www.worldbirdnames.org/bow/parrots/",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "澳大利亚博物馆 — 虎皮鹦鹉",
        "url": "https://australian.museum/learn/animals/birds/budgerigar/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "研究 — 虎皮鹦鹉把习得人声加入鸣唱",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40024383/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "研究 — 联络叫声与鸣唱的学习",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3087398/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife International — 虎皮鹦鹉全球档案",
        "url": "https://datazone.birdlife.org/species/factsheet/budgerigar-melopsittacus-undulatus",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 公开评估历史数据",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1489/history",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Melopsittacus undulatus 的命名作者与年份',
        url: 'https://www.gbif.org/species/2479798',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/budgerigar/01-cover.webp",
      "alt": "虎皮鹦鹉位于画面右侧远处，完整身体及可见附肢周围留有背景。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/budgerigar/02-body.webp",
          "title": "绿黄羽色与波纹",
          "alt": "野生羽色的虎皮鹦鹉站在枝头，长尾和黑色羽纹可见。",
          "caption": "AI 生成外形重建；展示野生羽色。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/budgerigar/03-calling.webp",
          "title": "面对同伴鸣叫",
          "alt": "两只虎皮鹦鹉面对面栖在枝头，一只略张开喙。",
          "caption": "AI 生成交流情景；静态画面不能证明发声内容。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/budgerigar/04-feeding.webp",
          "title": "地面上的草籽",
          "alt": "几只绿黄色虎皮鹦鹉低头在地面取食。",
          "caption": "AI 生成取食情景；种子未作物种级鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/budgerigar/05-nest.webp",
          "title": "树洞入口",
          "alt": "虎皮鹦鹉栖在天然树洞旁。",
          "caption": "AI 生成繁殖生境情景；未干扰或展示真实巢穴。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/budgerigar/06-habitat.webp",
          "title": "水边的鸟群",
          "alt": "虎皮鹦鹉鸟群聚在澳大利亚内陆水边。",
          "caption": "AI 生成生境重建；不代表固定群体大小。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        }
      ]
    }
  } as const satisfies Species;

export default profile;
