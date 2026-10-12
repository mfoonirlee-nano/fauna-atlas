import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-phoenicopterus-roseus",
    "slug": "greater-flamingo",
    "names": {
      "zh": "大红鹳",
      "en": "Greater Flamingo",
      "aliases": []
    },
    "scientificName": "Phoenicopterus roseus",
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
        "scientificName": "Phoenicopteriformes",
        "zhName": "红鹳目"
      },
      "family": {
        "scientificName": "Phoenicopteridae",
        "zhName": "红鹳科"
      },
      "genus": {
        "scientificName": "Phoenicopterus",
        "zhName": "红鹳属"
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
        "freshwater",
        "marine"
      ],
      "continents": [
        "非洲",
        "欧洲",
        "亚洲"
      ],
      "regions": [
        "盐湖与浅水潟湖"
      ],
      "countries": [
        "西班牙",
        "法国",
        "土耳其",
        "印度",
        "肯尼亚",
        "南非"
      ],
      "range": "分布于非洲、欧洲南部及亚洲西南部至南亚的适宜湿地。国家列表仅列代表性分布地；各地种群会随水位和食物条件移动。"
    },
    "habitats": [
      {
        "name": "盐湖与浅水潟湖",
        "realm": "marine",
        "description": '在盐湖和浅水潟湖中缓步觅食，随水位及食物变化移动。',
        "isPrimary": true
      },
      {
        "name": "内陆盐湖",
        "realm": "freshwater",
        "description": '内陆盐湖提供滤食空间，水的盐度可以很高。'
      }
    ],
    "measurements": {},
    "metrics": {},
    "diet": {
      "types": [
        "filter-feeder"
      ],
      "foods": [
        "小型甲壳动物",
        "软体动物",
        "藻类"
      ],
      "description": "大红鹳会滤取小型甲壳动物、软体动物及藻类等食物，食物组成随湿地条件变化。它有时用脚搅动底泥，再把喙伸进水中取食。"
    },
    "activity": [
      "涉水滤食",
      "群居"
    ],
    "tags": [
      "盐湖与浅水潟湖",
      "无危",
      "类胡萝卜素",
      "灰白雏鸟"
    ],
    "summary": "大红鹳幼鸟的绒羽呈灰白色。长大后，食物中的类胡萝卜素参与形成粉色羽毛；它的成鸟通常比美洲红鹳淡得多。",
    "description": "修长的颈和腿、向下弯折的喙、淡粉白色身体，是大红鹳的主要外形特征。展开翅膀时，还能看到黑色飞羽。",
    "storySections": [
      {
        key: 'identity',
        label: '认识大红鹳',
        title: '淡粉色的大型红鹳',
        body: '大红鹳的学名是 Phoenicopterus roseus，属于红鹳目红鹳科。成鸟身体淡粉白色，粉喙末端为黑色。美洲红鹳 Phoenicopterus ruber 是另一个物种，羽色通常更浓。',
      },
      {
        key: 'color',
        label: '羽色变化',
        title: '幼鸟起初是灰白色',
        body: '大红鹳刚孵化时披着灰白色绒羽。它从食物中获得类胡萝卜素，经过身体处理后将色素用于羽毛等部位。羽色还会随年龄和换羽状态变化，不能只凭粉色深浅判断年龄。',
      },
      {
        key: 'bill',
        label: '喙的结构',
        title: '倒着头在水里过滤',
        body: '取食时，大红鹳把喙倒转着放入浅水，舌部推动水流。喙缘的细密结构帮助分离食物和水；长腿让它能在较深的浅水区缓步觅食。',
      },
      {
        key: 'feeding',
        label: '水中食物',
        title: '一口水里藏着食物',
        body: '大红鹳会滤取小型甲壳动物、软体动物及藻类等食物，食物组成随湿地条件变化。它有时用脚搅动底泥，再把喙伸进水中取食。',
      },
      {
        key: 'breeding',
        label: '湿地育雏',
        title: '泥墩上养育幼鸟',
        body: '大红鹳在繁殖地聚群，用泥堆成隆起的巢。亲鸟照顾幼鸟，并以消化道产生的营养分泌物喂养早期雏鸟。雏鸟的喙和取食能力需要逐步发育。',
      },
      {
        key: 'conservation',
        label: '保护湿地',
        title: '保留水位变化的空间',
        body: '2018 年评估、2019 年修订发表的 IUCN 全球记录将大红鹳列为无危。湿地排水、水污染和繁殖地干扰仍会影响地方种群，保护需要兼顾觅食水域和安静的繁殖地。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '粉色羽毛从食物而来',
        body: 'Pallas 于 1811 年描述了这个物种，现用学名为 Phoenicopterus roseus。刚孵化的雏鸟是灰白色，食物中的类胡萝卜素经过身体处理，才参与形成粉色羽毛。它与羽色更浓的美洲红鹳是不同物种。',
      },
    ],
    "keyFacts": [
      '成鸟多为淡粉白色，喙尖和飞羽为黑色。',
      '雏鸟刚孵化时披着灰白色绒羽。',
      '食物中的类胡萝卜素参与形成粉色羽毛。',
      '取食时把喙倒转入水，过滤小动物及藻类。',
      '繁殖时聚群，用泥堆成隆起的巢。',
    ],
    "threats": [
      "湿地排水和水体污染。",
      "繁殖地干扰及水位异常。"
    ],
    "conservationActions": [
      "保留浅水湿地和泥滩。",
      "减少繁殖地干扰并监测水位。"
    ],
    "featuredStats": [
      {
        "key": "chick",
        "label": "雏鸟绒羽",
        "value": "灰白色"
      },
      {
        "key": "food",
        "label": "取食方式",
        "value": "滤食"
      }
    ],
    "sources": [
      {
        "title": "IOC World Bird List — 鸊鷉与红鹳分类",
        "url": "https://www.worldbirdnames.org/bow/grebes/",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "圣迭戈动物园 — 红鹳羽色、滤食与育雏",
        "url": "https://animals.sandiegozoo.org/animals/flamingo/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife International — 大红鹳全球档案",
        "url": "https://datazone.birdlife.org/species/factsheet/greater-flamingo-phoenicopterus-roseus",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN — 2018 年评估的 2019 年修订版",
        "url": "https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T22697360A155527405.en",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "BirdLife DataZone — 公开评估历史数据",
        "url": "https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/3769/history",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Phoenicopterus roseus 的命名作者与年份',
        url: 'https://www.gbif.org/species/4352332',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/greater-flamingo/01-cover.webp",
      "alt": "大红鹳位于画面右侧远处，完整身体及可见附肢周围留有背景。",
      "focalPoint": {
        "x": 0.95,
        "y": 0.4
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/greater-flamingo/02-body.webp",
          "title": "淡粉白色成鸟",
          "alt": "大红鹳站在沙洲上，粉色长腿与黑尖粉喙清晰可见。",
          "caption": "AI 生成外形重建；不用于测量身高。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/greater-flamingo/03-chick.webp",
          "title": "灰白色的雏鸟",
          "alt": "淡粉色大红鹳站在灰白绒羽雏鸟身旁。",
          "caption": "AI 生成育幼情景；不是同一个体变色的连续记录。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/greater-flamingo/04-feeding.webp",
          "title": "倒转喙部滤食",
          "alt": "大红鹳弯下长颈，将倒转的喙伸入浅水。",
          "caption": "AI 生成滤食情景；未显示喙内微细结构。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/greater-flamingo/05-flight.webp",
          "title": "黑色飞羽展开",
          "alt": "大红鹳在潟湖上方飞行，颈向前伸、长腿向后伸。",
          "caption": "AI 生成飞行情景；翼姿不作运动学测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/greater-flamingo/06-habitat.webp",
          "title": "潟湖中的鸟群",
          "alt": "浅水潟湖和盐沼之间有一群远处的大红鹳。",
          "caption": "AI 生成生境重建；鸟群数量不代表调查结果。",
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
