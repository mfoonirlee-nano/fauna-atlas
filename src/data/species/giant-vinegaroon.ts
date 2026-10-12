import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-mastigoproctus-giganteus",
    "slug": "giant-vinegaroon",
    "names": {
      "zh": "美洲巨鞭蝎",
      "en": "Giant Vinegaroon",
      "aliases": []
    },
    "scientificName": "Mastigoproctus giganteus",
    "taxonomy": {
      "kingdom": {
        "scientificName": "Animalia",
        "zhName": "动物界"
      },
      "phylum": {
        "scientificName": "Arthropoda",
        "zhName": "节肢动物门"
      },
      "class": {
        "scientificName": "Arachnida",
        "zhName": "蛛形纲"
      },
      "order": {
        "scientificName": "Thelyphonida",
        "zhName": "有鞭目"
      },
      "family": {
        "scientificName": "Thelyphonidae",
        "zhName": "鞭蝎科"
      },
      "genus": {
        "scientificName": "Mastigoproctus",
        "zhName": "巨鞭蝎属"
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
      "assessor": "未核实到本种全球IUCN评估；暂记NE，不设评估年份。"
    },
    "measurements": {},
    "metrics": {},
    "threats": [
      "本种全球种群趋势与具体威胁程度尚待调查。"
    ],
    "conservationActions": [
      "保留林下落叶、石块与土壤中的隐蔽空间。",
      "记录采集地点并核对物种身份，积累分布资料。"
    ],
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "北美洲"
      ],
      "regions": [
        "墨西哥中部",
        "莫雷洛斯州"
      ],
      "countries": [
        "墨西哥"
      ],
      "endemicTo": [
        "墨西哥"
      ],
      "range": '2018 年分类修订将过去称作 Mastigoproctus giganteus 的动物拆分为多个物种。现行狭义本种分布在墨西哥莫雷洛斯州；美国佛罗里达、亚利桑那和得克萨斯等地的旧记录涉及其他种。',
      "center": {
        "lat": 18.9,
        "lng": -99.2
      }
    },
    "habitats": [
      {
        "name": "林下落叶与土壤隐蔽处",
        "realm": "terrestrial",
        "description": '本种生活在墨西哥中部。鞭蝎类常利用石块、落叶和土壤中的隐蔽空间，狭义本种的详细生境仍需当地调查。',
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "carnivore",
        "insectivore"
      ],
      "foods": [
        "昆虫等小型节肢动物"
      ],
      "description": '鞭蝎用粗壮的触肢夹持昆虫等小型节肢动物，再用口前的螯肢处理食物。莫雷洛斯种群的野外食物比例仍需研究。'
    },
    "activity": [
      "夜间活动",
      "前足探测",
      "触肢捕猎"
    ],
    "tags": [
      "有鞭目",
      "醋酸防御",
      "感觉前足",
      "无毒针",
      "墨西哥"
    ],
    "summary": "美洲巨鞭蝎伸出细长的前足探路，用粗壮触肢抓住猎物。受到威胁时，它能从腹末喷出带醋酸气味的防御液。",
    "description": '美洲巨鞭蝎有深褐色身体和细长的鞭状尾丝，尾端没有蝎子的毒针。现行分类中的 Mastigoproctus giganteus 指墨西哥莫雷洛斯州的种群。',
    "storySections": [
      {
        key: 'identity',
        label: '认识美洲巨鞭蝎',
        title: '同一个旧学名下曾有多个物种',
        body: '过去，研究者把美国南部和墨西哥多地的巨鞭蝎都称作 Mastigoproctus giganteus。2018 年修订将它们分为多个物种，狭义的 M. giganteus 对应墨西哥莫雷洛斯州种群。查阅旧资料时，需要先确认记录中的动物属于哪一种。',
      },
      {
        key: 'body',
        label: '身体外形',
        title: '粗触肢与细尾丝',
        body: '鞭蝎属于蛛形纲、有鞭目。头胸部前方的粗壮触肢帮助捕食，腹部末端延伸出细长尾丝。尾丝末端没有毒针，喷液出口位于腹末、靠近尾丝基部。',
      },
      {
        key: 'sensing',
        label: '前足探路',
        title: '第一对足承担感觉工作',
        body: '第一对足细长，鞭蝎会向前伸出，像探杆一样接触周围表面。其余三对足承担主要的行走工作。这些探测附肢是足，蛛形动物没有昆虫那样的触角。',
      },
      {
        key: 'feeding',
        label: '抓住猎物',
        title: '用触肢控制小型节肢动物',
        body: '靠近昆虫等小型节肢动物后，鞭蝎用粗壮触肢夹持猎物，再用螯肢处理食物。图中的蟋蟀展示这种捕食姿态，莫雷洛斯种群的具体食物偏好仍需野外调查。',
      },
      {
        key: 'defense',
        label: '喷液防御',
        title: '从腹末释放带酸味的液体',
        body: '鞭蝎腹末的一对腺体储存含醋酸的防御液，遇到威胁时向外喷出，带有类似醋的酸味。早期化学研究使用物种拆分前的 M. giganteus 名称，研究中的酸含量和射程未必适用于现行狭义本种。',
      },
      {
        key: 'conservation',
        label: '分布与保护',
        title: '用现行物种名重新整理记录',
        body: '狭义本种的全球 IUCN 评估尚未核实，种群趋势未知。调查者需要记录地点和形态，区分近亲后再比较当地数量变化。保留林下隐蔽空间有助于保护其生境，具体威胁程度仍需当地研究。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '旧学名为何分成多个物种',
        body: 'Lucas 于 1835 年描述了这个物种，现用学名为 Mastigoproctus giganteus。这个名称后来曾用于美国南部到墨西哥多地的巨鞭蝎。2018 年修订重新比较标本，将其中不同种类分开，狭义本种的范围也收缩到墨西哥莫雷洛斯州。',
      },
    ],
    "keyFacts": [
      "现行狭义本种分布在墨西哥莫雷洛斯州。",
      "属于蛛形纲、有鞭目。",
      "第一对足主要用于感觉，其余三对用于行走。",
      "用粗壮触肢控制猎物。",
      "鞭状尾丝没有毒针。",
      "防御液从腹末靠近尾丝基部的出口喷出。"
    ],
    "featuredStats": [
      {
        "key": "range",
        "label": "现行分布",
        "value": "莫雷洛斯",
        "note": "墨西哥；采用拆分后的物种范围。"
      },
      {
        "key": "walking",
        "label": "行走足",
        "value": "3",
        "unit": "对"
      },
      {
        "key": "defense",
        "label": "防御方式",
        "value": "喷液"
      },
      {
        "key": "status",
        "label": "保护等级",
        "value": "NE",
        "note": "未核实全球评估。"
      }
    ],
    "sources": [
      {
        "title": "Barrales-Alcalá等2018 — 巨鞭蝎复合群系统修订",
        "url": "https://www.biodiversitylibrary.org/bibliography/191467",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "2026年Mastigoproctus新种研究 — 墨西哥物种分布表",
        "url": "https://www.mdpi.com/2813-3323/4/2/9",
        "kind": "distribution",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Eisner等1961 — 广义巨鞭蝎防御液研究",
        "url": "https://www.sciencedirect.com/science/article/pii/0022191061900543",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Schmidt等2000 — 广义巨鞭蝎腹末腺体分泌物",
        "url": "https://www.sciencedirect.com/science/article/pii/S0022191099001304",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "佛罗里达大学IFAS — 鞭蝎外形与生活史，旧分类口径",
        "url": "https://ask.ifas.ufl.edu/publication/IN890",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Mastigoproctus giganteus 的命名作者与年份',
        url: 'https://www.gbif.org/species/2127943',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/giant-vinegaroon/01-cover.webp",
      "alt": "一只完整的美洲巨鞭蝎位于画面右侧的林下地表，细长尾丝和足伸在身体周围。",
      "focalPoint": {
        "x": 0.92,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/giant-vinegaroon/02-body.webp",
          "alt": "深褐色鞭蝎展开触肢和足，腹末伸出细长尾丝。",
          "title": "触肢与鞭状尾丝",
          "caption": "AI生成外形示意；触肢棘与细足细节不能用于区分近似种。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/giant-vinegaroon/03-sensory-legs.webp",
          "alt": "鞭蝎在落叶上伸出细长的第一对足。",
          "title": "用前足探路",
          "caption": "AI生成感觉前足示意；不表示实测探测距离或运动轨迹。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/giant-vinegaroon/04-defense.webp",
          "alt": "鞭蝎转向腹末，附近可见示意防御液的细小液滴。",
          "title": "腹末的防御液",
          "caption": "AI生成防御情景；液滴不表示实测射程、浓度或喷射时序。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/giant-vinegaroon/05-prey.webp",
          "alt": "鞭蝎用粗壮触肢夹住一只小型蟋蟀。",
          "title": "用触肢抓住猎物",
          "caption": "AI生成捕食姿态；蟋蟀不是本种野外偏食的证据。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/giant-vinegaroon/06-habitat.webp",
          "alt": "墨西哥中部林下铺着落叶，石块之间留有阴暗缝隙。",
          "title": "莫雷洛斯的林下",
          "caption": "AI生成栖息地重建，不对应地理定位照片。",
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
