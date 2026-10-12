import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-eunice-aphroditois",
    "slug": "bobbit-worm",
    "names": {
      "zh": "博比特虫",
      "en": "Bobbit Worm",
      "aliases": [
        "博比特沙蚕"
      ]
    },
    "scientificName": "Eunice aphroditois",
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "taxonomy": {
      "kingdom": {
        "scientificName": "Animalia",
        "zhName": "动物界"
      },
      "phylum": {
        "scientificName": "Annelida",
        "zhName": "环节动物门"
      },
      "class": {
        "scientificName": "Polychaeta",
        "zhName": "多毛纲"
      },
      "order": {
        "scientificName": "Eunicida",
        "zhName": "矶沙蚕目"
      },
      "family": {
        "scientificName": "Eunicidae",
        "zhName": "矶沙蚕科"
      },
      "genus": {
        "scientificName": "Eunice",
        "zhName": "矶沙蚕属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "NE",
      "label": {
        "zh": "未评估",
        "en": "Not Evaluated"
      },
      "trend": "unknown",
      "assessor": "SeaLifeBase 收录的全球 IUCN 状态为未评估；未填写评估年份，全球种群趋势未知。"
    },
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [
        "亚洲"
      ],
      "regions": [
        "印度尼西亚蓝碧海峡的行为研究地点",
        "暖水浅海的历史记录"
      ],
      "countries": [
        "印度尼西亚"
      ],
      "range": '2016 年，研究者在印度尼西亚苏拉威西蓝碧海峡观察了鉴定为 Eunice aphroditois 的个体。历史文献把多个海区的大型矶沙蚕归入过这个学名，分类修订指出旧记录仍需复核。蓝碧海峡是已发表行为研究的地点，全部分布范围尚待厘清。'
    },
    "habitats": [
      {
        "name": "砂质海床与珊瑚碎屑",
        "realm": "marine",
        "description": "把身体藏在松散沉积物的洞穴中，洞口附近可有低矮珊瑚块和碎石。",
        "isPrimary": true
      }
    ],
    "measurements": {},
    "metrics": {},
    "diet": {
      "types": [
        "carnivore"
      ],
      "foods": [
        "小型鱼类"
      ],
      "description": '研究者观察到它从洞口探出前端，用颚抓住游近的小鱼，再把猎物拖入洞中。这是已记录的捕食方式，食物范围仍需继续调查。'
    },
    "activity": [
      "洞穴伏击",
      "夜间探出洞口捕猎"
    ],
    "tags": [
      "多毛纲",
      "沙中伏击",
      "刚毛",
      "海床",
      "分类待复核"
    ],
    "summary": "博比特虫把长身体藏在海床里，头部附肢露在洞口。小鱼靠近时，它会探出前端，用颚抓住猎物并拖回洞内。",
    "description": "它有细长的分节身体，两侧生着带刚毛的疣足。光线照到体表时可见金属般的色泽；洞口外露出的前端，只是身体的一小部分。",
    "storySections": [
      {
        key: 'identity',
        label: '认识博比特虫',
        title: '一个俗名背后的鉴定问题',
        body: '博比特虫所对应的学名为 Eunice aphroditois，属于环节动物门、多毛纲。过去，不少大型矶沙蚕曾共用这个学名，旧记录仍需检查。研究者会观察刚毛、颚器等细节，单看颜色和体长难以确认物种。',
      },
      {
        key: 'ambush',
        label: '沙中伏击',
        title: '大部分身体藏在洞里',
        body: '2016 年蓝碧海峡研究观察到，个体白天埋在松散海床中，头部五根细长附肢伸到洞外。感知猎物后，它们用颚抓住鱼，再把猎物拖入洞穴。',
      },
      {
        key: 'night',
        label: '夜间捕食',
        title: '从洞口探出更长的前端',
        body: '同一研究还记录了夜间行为：博比特虫会从洞内探出身体前端，抓取经过的猎物。白天伏击和夜间探身捕猎都以洞穴为依托，观察时段会影响人们看到的姿态。',
      },
      {
        key: 'bristles',
        label: '分节与刚毛',
        title: '身体两侧的细毛束',
        body: '多毛类的许多体节两侧有疣足，疣足上带刚毛。仔细观察时能把这些柔软的侧部结构与昆虫的关节足区分开。研究者会检查刚毛和颚器等细节，区分外形相似的种类。',
      },
      {
        key: 'neighbors',
        label: '猎物的反应',
        title: '鱼也会朝洞口喷水',
        body: '在蓝碧海峡，研究者看到眶棘鲈属的鱼发现博比特虫后朝它喷水，其他鱼有时也会加入。论文把这种行为称为“围攻”。这项有趣的记录来自当地鱼群，更广泛的鱼类反应仍需观察。',
      },
      {
        key: 'conservation',
        label: '记录与保护',
        title: '先确认物种，再统计数量',
        body: 'SeaLifeBase 将本种的全球 IUCN 状态记为未评估。分类身份和隐蔽生活都增加了调查难度。记录洞穴、生境与标本鉴定信息，有助于区分不同大型矶沙蚕并建立可比较的种群资料。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '旧名字下的大型沙蚕仍需复查',
        body: 'Pallas 于 1788 年描述了这个物种，现用学名为 Eunice aphroditois。过去多个海区的大型矶沙蚕曾共用这个学名。2016 年蓝碧海峡研究还拍到鱼向伏击者的洞口喷水；如今鉴定旧记录时，需要结合刚毛和颚器等细节。',
      },
    ],
    "keyFacts": [
      "属于环节动物门、多毛纲。",
      "身体两侧的刚毛与昆虫的足不同。",
      "伏击时大部分身体藏在沉积物中。",
      "行为研究记录了用颚抓鱼并拖入洞穴。",
      "历史上以本名鉴定的大型个体需要复核。",
      "全球 IUCN 状态按未评估收录。"
    ],
    "threats": [
      "目前缺乏可量化的全球种群趋势与本种主要威胁资料。"
    ],
    "conservationActions": [
      "调查砂质海床时保留地点、生境与物种鉴定依据。",
      "复核历史标本，避免混合不同大型矶沙蚕的分布记录。"
    ],
    "featuredStats": [
      {
        "key": "appendages",
        "label": "头部细长附肢",
        "value": "5",
        "unit": "根",
        "note": "2016 年行为研究描述；图像不用于计数鉴定。"
      },
      {
        "key": "home",
        "label": "活动依托",
        "value": "海床洞穴"
      },
      {
        "key": "food",
        "label": "观察到的猎物",
        "value": "小型鱼类"
      },
      {
        "key": "status",
        "label": "全球评估",
        "value": "未评估"
      }
    ],
    "sources": [
      {
        "title": "OBIS — 博比特虫分类归属",
        "url": "https://obis.org/taxon/130053",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Lachat 与 Haag-Wackernagel 2016 — 鱼类围攻与博比特虫捕食",
        "url": "https://www.nature.com/articles/srep33187",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Zanol 等 2021 — 矶沙蚕目系统分类与多样性",
        "url": "https://www.mdpi.com/1424-2818/13/2/74",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "澳大利亚博物馆 — 多毛类的身体结构",
        "url": "https://australian.museum/learn/animals/worms/polychaetes/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "SeaLifeBase — Eunice aphroditois 全球评估状态",
        "url": "https://www.sealifebase.ca/summary/SpeciesSummary.php?id=39505&lang=English",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Eunice aphroditois 的命名作者与年份',
        url: 'https://www.gbif.org/species/5198482',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/bobbit-worm/01-cover.webp",
      "alt": "博比特虫完整的分节身体在画面右侧沙地上弯曲，头部附肢与尾端可见。",
      "focalPoint": {
        "x": 0.88,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/bobbit-worm/02-body.webp",
          "title": "分节的长身体",
          "alt": "铜褐色博比特虫弯曲在沙地上，两侧排列着细刚毛。",
          "caption": "AI 生成外形重建；体节数量、色泽与比例不作鉴定依据。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bobbit-worm/03-ambush.webp",
          "title": "洞口的伏击者",
          "alt": "博比特虫从沙洞中露出头部与细长附肢。",
          "caption": "AI 生成伏击情景；大部分身体藏在沉积物内。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bobbit-worm/04-feeding.webp",
          "title": "小鱼经过洞口",
          "alt": "小鱼从博比特虫洞口上方游过，虫体前端略微探出。",
          "caption": "AI 生成捕食前情景；不对应某次实验或攻击距离测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bobbit-worm/05-bristles.webp",
          "title": "体节两侧的刚毛",
          "alt": "放大的虫体中段两侧伸出细小的刚毛束。",
          "caption": "AI 生成结构示意；疣足和刚毛细节经过简化，不作显微鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/bobbit-worm/06-habitat.webp",
          "title": "砂底与珊瑚碎屑",
          "alt": "海床上散布着碎石、低矮珊瑚块和小洞口。",
          "caption": "AI 生成生境重建；不对应具体地理坐标。",
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
