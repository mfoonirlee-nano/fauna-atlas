import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-giraffa-reticulata",
    "slug": "reticulated-giraffe",
    "names": {
      "zh": "网纹长颈鹿",
      "en": "Reticulated Giraffe",
      "aliases": [
        "索马里长颈鹿",
        "Giraffa camelopardalis reticulata"
      ]
    },
    "scientificName": "Giraffa reticulata",
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
        "scientificName": "Mammalia",
        "zhName": "哺乳纲"
      },
      "order": {
        "scientificName": "Artiodactyla",
        "zhName": "偶蹄目"
      },
      "family": {
        "scientificName": "Giraffidae",
        "zhName": "长颈鹿科"
      },
      "genus": {
        "scientificName": "Giraffa",
        "zhName": "长颈鹿属"
      }
    },
    "conservation": {
      "system": "IUCN Red List",
      "code": "EN",
      "label": {
        "zh": "濒危",
        "en": "Endangered"
      },
      "trend": "decreasing",
      "assessor": "沿用 2018 年以 Giraffa camelopardalis ssp. reticulata 发布的 IUCN 濒危评估及其趋势；2025 年物种分类修订不等于新的红色名录评估。",
      "assessedYear": 2018
    },
    "distribution": {
      "realms": [
        "terrestrial"
      ],
      "continents": [
        "非洲"
      ],
      "regions": [
        "肯尼亚北部与东北部",
        "非洲之角"
      ],
      "countries": [
        "肯尼亚"
      ],
      "range": '主要种群位于肯尼亚北部与东北部。GCF 指出，埃塞俄比亚南部和索马里南部可能仍有小型孤立种群，其现状需要继续调查。',
      "center": {
        "lat": 1.5,
        "lng": 37.5
      }
    },
    "habitats": [
      {
        "name": "干燥稀树草原与灌木林",
        "realm": "terrestrial",
        "description": "在分散的树木和灌丛间寻找叶片，需要连通的觅食空间。",
        "isPrimary": true
      }
    ],
    "measurements": {},
    "metrics": {},
    "diet": {
      "types": [
        "herbivore"
      ],
      "foods": [
        "树叶",
        "嫩枝",
        "花",
        "果实"
      ],
      "description": "用可卷握的长舌和嘴唇取下树木、灌丛上的植物部分，再通过反刍继续咀嚼食物。"
    },
    "activity": [
      "取食树叶",
      "反刍",
      "在林地间移动"
    ],
    "tags": [
      "网状斑纹",
      "长舌",
      "反刍",
      "稀树草原",
      "濒危"
    ],
    "summary": "网纹长颈鹿的褐色斑块之间有细白线，像一张铺在身上的网。它用长舌卷住枝叶，从带刺的枝条间取食。",
    "description": "大块的橙褐色多边形斑纹覆盖颈部和躯干，窄白线勾出斑块边界。长腿支撑身体，头顶有覆着皮肤的骨质角突。",
    "storySections": [
      {
        key: 'identity',
        label: '辨认网纹',
        title: '褐色斑块之间的白线',
        body: '网纹长颈鹿的褐色斑块之间有窄白线，像网格一样。2025 年，IUCN 长颈鹿与㺢㹢狓专家组认可四种长颈鹿的分类，网纹长颈鹿以 Giraffa reticulata 作为独立物种收录。',
      },
      {
        key: 'tongue',
        label: '长舌取叶',
        title: '伸进枝刺之间卷住叶片',
        body: '长颈鹿的舌头约长 45至50 厘米，能卷握枝叶。它配合嘴唇在枝刺之间挑取食物，舌面的乳突帮助应对粗糙的枝叶。这个长度是长颈鹿的一般资料，不是网纹长颈鹿独有的量测范围。',
      },
      {
        key: 'color',
        label: '舌头的颜色',
        title: '外露部分呈深紫色',
        body: '长颈鹿舌头的前部常呈蓝紫色或近黑色，靠近口内的部分较浅。深色素可能减少日晒损伤，其具体作用仍有讨论。',
      },
      {
        key: 'rumination',
        label: '反刍消化',
        title: '吞下后还会再咀嚼',
        body: '网纹长颈鹿属于反刍动物。它会把已经吞下的部分食物返送到嘴里，重新咀嚼，再吞咽。站着缓慢嚼动嘴巴时，它可能正在反刍，并不一定刚从枝头摘下新叶。',
      },
      {
        key: 'range',
        label: '肯尼亚的林地',
        title: '在树木之间寻找下一餐',
        body: '现有主要种群位于肯尼亚北部与东北部。它们取食树木和灌木的叶、嫩枝等植物部分，因此保护草原时也需要保留供其取食的木本植物与相连的活动空间。',
      },
      {
        key: 'conservation',
        label: '社区保护',
        title: '保护区外也有长颈鹿',
        body: '2018 年发布的濒危评估采用亚种名称，2025 年分类修订后还需等待正式的红色名录重评。大量网纹长颈鹿生活在政府保护区之外，因此社区和私人土地管理者也参与栖息地保护。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '网状斑纹与变化中的分类',
        body: 'de Winton 于 1899 年描述了这个物种，现用学名为 Giraffa reticulata。“网纹”可以从斑块间的窄白线看到。它后来长期作为长颈鹿的亚种收录，2025 年 IUCN 专家组认可四种长颈鹿的分类，网纹长颈鹿也按独立物种处理。',
      },
    ],
    "keyFacts": [
      '窄白线分隔褐色多边形斑块。',
      '舌头能卷握枝叶。',
      '长颈鹿的一般舌长约为 45至50 厘米。',
      '会把部分食物返送到嘴里反刍。',
      '主要分布在肯尼亚北部与东北部。',
      '保护状态沿用 2018 年亚种口径的濒危评估。',
    ],
    "threats": [
      "栖息地丧失与破碎化。",
      "非法捕猎。",
      "部分孤立种群缺乏连续调查。"
    ],
    "conservationActions": [
      "与社区和土地管理者共同保留连通的栖息地。",
      "开展反偷猎巡护与重复种群调查。",
      "按四种长颈鹿的分类分别整理保护资料。"
    ],
    "featuredStats": [
      {
        "key": "tongue",
        "label": "长颈鹿舌长约",
        "value": "45—50",
        "unit": "厘米",
        "note": "长颈鹿的一般资料，并非本种专属样本范围。"
      },
      {
        "key": "diet",
        "label": "主要食物",
        "value": "树叶"
      },
      {
        "key": "pattern",
        "label": "斑纹特征",
        "value": "白色网线"
      },
      {
        "key": "assessment",
        "label": "所用评估年份",
        "value": "2018",
        "unit": "年",
        "note": "评估发布时采用亚种口径。"
      }
    ],
    "sources": [
      {
        "title": "IUCN 2025 — 正式认可四种长颈鹿",
        "url": "https://iucn.org/press-release/202508/four-giraffe-species-officially-recognised-major-conservation-reclassification",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "GCF — 网纹长颈鹿外形、分布与保护",
        "url": "https://giraffeconservation.org/giraffe-species/reticulated-giraffe/",
        "kind": "distribution",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "GCF — 长颈鹿舌头的长度、颜色与取食",
        "url": "https://giraffeconservation.org/facts-about-giraffe/how-long-is-a-giraffes-tongue-what-color-is-it/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "GCF — 长颈鹿演化与分类",
        "url": "https://giraffeconservation.org/facts-about-giraffe/evolution-taxonomy-and-scientific-classification/",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "IUCN 2018 — 网纹长颈鹿亚种评估",
        "url": "https://www.iucnredlist.org/species/88420717/88420720",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "GCF — State of Giraffe 2025",
        "url": "https://zenodo.org/records/15698203",
        "kind": "conservation",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Giraffa reticulata 的命名作者与年份',
        url: 'https://www.gbif.org/species/8888736',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/reticulated-giraffe/01-cover.webp",
      "alt": "网纹长颈鹿站在画面右侧远处的草原上，角突、四足与尾巴完整可见。",
      "focalPoint": {
        "x": 0.98,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/reticulated-giraffe/02-body.webp",
          "title": "网纹长颈鹿全身",
          "alt": "长颈鹿站在干草地上，长颈、长腿与网状斑纹清晰可见。",
          "caption": "AI 生成外形重建；不对应已识别的野外个体。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/reticulated-giraffe/03-tongue.webp",
          "title": "卷握枝叶",
          "alt": "网纹长颈鹿伸出深紫色长舌，卷住带叶的细枝。",
          "caption": "AI 生成取食情景；舌长与枝刺间距不作实测依据。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/reticulated-giraffe/04-pattern.webp",
          "title": "白线分隔的斑块",
          "alt": "长颈鹿肩部和躯干上的褐色多边形斑块之间有窄白线。",
          "caption": "AI 生成皮毛近景；斑纹不用于个体识别。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/reticulated-giraffe/05-browsing.webp",
          "title": "树上的一餐",
          "alt": "网纹长颈鹿伸长脖子取食树冠边缘的叶片。",
          "caption": "AI 生成取食情景；树木未作物种级鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/reticulated-giraffe/06-habitat.webp",
          "title": "开阔的稀树草原",
          "alt": "干草地和稀疏树木之间有远处的长颈鹿。",
          "caption": "AI 生成肯尼亚生境重建；不对应地理定位照片。",
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
