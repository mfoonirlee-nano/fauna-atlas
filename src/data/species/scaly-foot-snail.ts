import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-chrysomallon-squamiferum",
    "slug": "scaly-foot-snail",
    "names": {
      "zh": "鳞足螺",
      "en": "Scaly-foot Snail",
      "aliases": []
    },
    "scientificName": "Chrysomallon squamiferum",
    "taxonomy": {
      "kingdom": {
        "scientificName": "Animalia",
        "zhName": "动物界"
      },
      "phylum": {
        "scientificName": "Mollusca",
        "zhName": "软体动物门"
      },
      "class": {
        "scientificName": "Gastropoda",
        "zhName": "腹足纲"
      },
      "order": {
        "scientificName": "Neomphalida",
        "zhName": "新脐目"
      },
      "family": {
        "scientificName": "Peltospiridae",
        "zhName": "铠螺科"
      },
      "genus": {
        "scientificName": "Chrysomallon",
        "zhName": "鳞足螺属"
      }
    },
    "measurements": {},
    "metrics": {},
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "conservation": {
      "system": "IUCN Red List",
      "code": "EN",
      "label": {
        "zh": "濒危",
        "en": "Endangered"
      },
      "trend": "unknown",
      "assessedYear": 2018,
      "criteria": "B2ab(iii)",
      "assessor": "Sigwart、Chen 与 Thomas；2018-01-31 评估，2019 年发布。日期由 SeaLifeBase 收录的 IUCN 记录核对。"
    },
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [],
      "regions": [
        "印度洋",
        "西南印度洋海岭",
        "中央印度洋海岭",
        "卡尔斯伯格海岭"
      ],
      "countries": [],
      "endemicTo": [
        "印度洋深海热液区"
      ],
      "range": "印度洋深海热液区特有种。2026 年研究已从三条洋中脊的至少 8 处热液区采集到本种，覆盖西南印度洋海岭、中央印度洋海岭和卡尔斯伯格海岭。2019 年资料中的“三处热液区”是当时的已知范围。"
    },
    "habitats": [
      {
        "name": "深海热液弥散流区",
        "realm": "marine",
        "description": '鳞足螺生活在热液与寒冷海水混合的海底环境中，依赖化学物质供应和共生细菌。它所在混合水层的温度与喷口最热流体的温度不同。',
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "bacterivore"
      ],
      "foods": [
        "食道腺内硫氧化共生菌提供的有机营养"
      ],
      "description": '鳞足螺主要靠食道腺细胞内的共生细菌获取营养。细菌通过化学反应获得能量，将无机碳转成可供宿主利用的有机物。'
    },
    "activity": [
      "底栖爬行",
      "化能合成共生",
      "足部鳞片矿化"
    ],
    "tags": [
      "热液区",
      "足部鳞片",
      "硫化铁",
      "共生细菌",
      "濒危"
    ],
    "summary": "鳞足螺的足边覆盖着层层鳞片，部分种群会在鳞片和外壳中沉积硫化铁。它生活在深海热液区，依靠体内的共生细菌获得营养。",
    "description": "低矮的螺壳下面伸出宽大的足，足部边缘排列着鳞片状硬片。同种鳞足螺在不同热液区可以呈现深黑色或浅色外观。",
    "storySections": [
      {
        key: 'identity',
        label: '认识鳞足螺',
        title: '螺壳下面还有一圈鳞片',
        body: '鳞足螺属于腹足纲、新脐目、铠螺科。足部密集的鳞片状硬片与螺壳共同覆盖身体。这些硬片和穿山甲的鳞片来自不同的身体结构。',
      },
      {
        key: 'scales',
        label: '鳞片与矿物',
        title: '铁从周围水中进入鳞片',
        body: '鳞足螺把含硫物质排入鳞片，周围水中的铁离子向内扩散，与硫反应形成硫化铁矿物。矿物可以分布在鳞片内部和表面，鳞片因此含有铁的化合物。',
      },
      {
        key: 'variation',
        label: '不同种群',
        title: '浅色鳞片也属于同一个物种',
        body: 'Kairei 热液区的黑色个体具有硫化铁矿化的鳞片；Solitaire 的浅色个体缺少这种铁矿化。两种外观都属于鳞足螺。环境中的化学条件会影响矿化，因此足部有鳞片不等于鳞片一定含铁。',
      },
      {
        key: 'symbiosis',
        label: '共生营养',
        title: '食道腺中的细菌固定碳',
        body: '食道腺内的硫氧化共生细菌通过化学反应获得能量，为鳞足螺提供有机营养。鳞足螺为细菌提供生活空间和所需物质。发达的循环系统和鳃帮助它在低氧环境中维持这段共生关系。',
      },
      {
        key: 'range',
        label: '热液区之间',
        title: '新调查把已知地点扩展到至少八处',
        body: '2026 年发表的研究覆盖三条印度洋洋中脊的 8 处热液区。研究者把基因组分析与海流模拟结合，发现海流与海底大型转换断层会影响种群间的联系。发现更多地点能补充分布知识，但不等于每处种群都容易在受损后得到补充。',
      },
      {
        key: 'conservation',
        label: '保护热液生境',
        title: '濒危评估关注海底采矿风险',
        body: '2019 年发布的 IUCN 濒危记录对应 2018 年评估，种群趋势未知。评估关注有限的热液生境及潜在海底采矿破坏。2026 年研究补充了新的分布地点，各热液区及其间的联系仍需要保护。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '发现十四年后才有正式学名',
        body: '2001 年，研究者在印度洋深海热液区发现这种足上带鳞片的螺，2003 年在《Science》报道，暂称“鳞足腹足类”。到 2015 年，Chen 等人才正式描述并命名为 Chrysomallon squamiferum。东京大学综合研究博物馆收藏了原始描述使用的副模式标本，让人们能回查命名时所依据的动物。',
      },
    ],
    "keyFacts": [
      "足部有密集的鳞片状硬片。",
      "部分种群的鳞片和壳含有硫化铁。",
      "Solitaire 的浅色个体缺少铁矿化。",
      "食道腺细胞内有化能合成共生菌。",
      "2026 年研究覆盖至少 8 处热液区。",
      "濒危记录对应 2018 年评估、2019 年发布。"
    ],
    "threats": [
      "海底采矿可能破坏热液生境及其化学环境。",
      "不同热液区之间的扩散限制可能影响受损种群的补充。"
    ],
    "conservationActions": [
      "保护活动热液生境，并在评估中考虑种群间联系。",
      "持续开展海底调查，记录新分布点和环境变化。"
    ],
    "featuredStats": [
      {
        "key": "habitat",
        "label": "栖息环境",
        "value": "深海热液"
      },
      {
        "key": "sites",
        "label": "研究采集点",
        "value": "至少 8",
        "unit": "处",
        "note": "2026 年研究；不是 2018 年评估的地点数。"
      },
      {
        "key": "feeding",
        "label": "营养来源",
        "value": "共生细菌"
      },
      {
        "key": "status",
        "label": "保护等级",
        "value": "EN",
        "note": "2018 年评估，2019 年发布。"
      }
    ],
    "sources": [
      {
        "title": "OBIS — 鳞足螺分类归属",
        "url": "https://obis.org/taxon/736932",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "东京大学综合研究博物馆 — 鳞足螺与原始描述",
        "url": "https://www.um.u-tokyo.ac.jp/japanese/UMUTopenlab/en/library/b_14.html",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "JAMSTEC 2019 — 鳞片硫化铁形成机制",
        "url": "https://www.jamstec.go.jp/e/about/press_release/20190910/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "牛津大学 — 鳞足螺分类、解剖与共生研究",
        "url": "https://ora.ox.ac.uk/objects/uuid:0136047f-a09b-4876-bb65-b74dfd7c997d",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "JAMSTEC 2026 — 八处热液区的种群联系",
        "url": "https://www.jamstec.go.jp/e/about/press_release/20260212/",
        "kind": "distribution",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "JAMSTEC 2019 — 鳞足螺列入濒危名录",
        "url": "https://www.jamstec.go.jp/e/about/press_release/20190723/",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "SeaLifeBase — IUCN 等级与实际评估日期",
        "url": "https://www.sealifebase.ca/summary/Chrysomallon-squamiferum",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      }
    ],
    "media": {
      "image": "./images/species/scaly-foot-snail/01-cover.webp",
      "alt": "深色鳞足螺位于画面右侧的海底玄武岩上。",
      "focalPoint": {
        "x": 0.98,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/scaly-foot-snail/02-body.webp",
          "alt": "低矮螺壳下方伸出带鳞片的宽足。",
          "title": "螺壳与鳞足",
          "caption": "AI 生成外形重建；壳纹和鳞片排列不作分类诊断。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/scaly-foot-snail/03-scales.webp",
          "alt": "足部边缘排列着层叠的深色硬片。",
          "title": "足边的鳞片",
          "caption": "AI 生成近景；不能从颜色量取硫化铁含量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/scaly-foot-snail/04-symbiosis.webp",
          "alt": "鳞足螺剖面示意图展示前部的共生组织。",
          "title": "共生菌生活的组织",
          "caption": "AI 生成食道腺位置示意；器官形状和细菌尺度经过简化，非实测切片。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/scaly-foot-snail/05-white-morph.webp",
          "alt": "浅色鳞足螺的足边覆盖乳白色鳞片。",
          "title": "没有铁矿化的浅色个体",
          "caption": "AI 生成 Solitaire 型外观；具体色调不用于判断矿物成分。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/scaly-foot-snail/06-habitat.webp",
          "alt": "深海矿物烟囱附近的岩面上分布着小型螺类。",
          "title": "深海热液生境",
          "caption": "AI 生成生态情景；动物避开直接喷流，图中不表示实测温度或密度。",
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
