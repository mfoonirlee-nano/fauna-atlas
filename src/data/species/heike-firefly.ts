import type { Species } from '../../types/species.ts';

const profile = {
  "id": "heike-firefly",
  "slug": "heike-firefly",
  "names": {
    "zh": "红胸水萤",
    "en": "Heike Firefly",
    "aliases": [
      "平家萤",
      "Luciola lateralis（旧组合）"
    ]
  },
  "scientificName": "Aquatica lateralis",
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
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Coleoptera",
      "zhName": "鞘翅目"
    },
    "family": {
      "scientificName": "Lampyridae",
      "zhName": "萤科"
    },
    "genus": {
      "scientificName": "Aquatica",
      "zhName": "水萤属"
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
    "assessor": "未取得可核实的全球物种评估"
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "稻田、湿地与缓流水体"
    ],
    "countries": [
      "日本",
      "韩国",
      "俄罗斯",
      "中国"
    ],
    "range": '分布记录包括日本、朝鲜半岛、俄罗斯东部及中国东北。2024 年属级修订指出，中国种群的鉴定仍需幼虫材料验证，调查时也应区分其他水生萤火虫。',
    "center": {
      "lat": 36,
      "lng": 138
    }
  },
  "habitats": [
    {
      "name": "稻田、湿地与缓流水体",
      "realm": "freshwater",
      "description": '幼虫利用稻田、湿地和缓流水体，在水底活动并捕食淡水螺类。',
      "isPrimary": true
    },
    {
      "name": "湿润土岸与水边植被",
      "realm": "terrestrial",
      "description": "成熟幼虫上岸化蛹，成虫在水边植被和上方空间活动。"
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "淡水螺类"
    ],
    "description": '水生幼虫主要捕食淡水螺类。这个食谱针对幼虫，成虫的生活地点和取食状况不同。'
  },
  "activity": [
    "成虫夜间闪光"
  ],
  "tags": [
    "水中幼虫",
    "稻田、湿地与缓流水体"
  ],
  "summary": "红胸水萤成虫在夜间闪光交流，幼虫却在稻田和湿地的浅水中捕食螺类。它的一生同时依赖水体、岸边土壤和地上的植被。",
  "description": '红胸水萤成虫有红色至粉红色前胸背板、深色鞘翅和腹末发光器官。旧文献常称它为 Luciola lateralis，现用学名为 Aquatica lateralis。幼虫在水中生活，成虫在水边植被及上方空间活动。',
  "storySections": [
    {
      key: 'identity',
      label: '水萤属',
      title: '旧名字指向同一档案',
      body: '本种过去归入熠萤属 Luciola，后来转入水萤属 Aquatica。红胸背板配合黑色鞘翅是观察外形的线索，但近似种仍需更细的形态比较，不能仅凭发光颜色鉴定。',
    },
    {
      key: 'light',
      label: '夜间交流',
      title: '闪光有各自的节奏',
      body: '成虫通过腹部发光器官发出闪光，雌雄利用光信号参与配偶识别。研究记录了闪光中的快速闪烁结构；一张静态亮点照片无法表示闪光节奏和求偶是否成功。',
    },
    {
      key: 'larva',
      label: '水生幼虫',
      title: '在水底寻找小螺',
      body: '幼虫在稻田、湿地及静水或缓流水体底部活动，主要捕食淡水螺类。它的分节身体具有侧面的鳃状结构，不能用长翅成虫的样子来画水中幼虫。',
    },
    {
      key: 'pupation',
      label: '水陆转换',
      title: '上岸后完成蛹期',
      body: '成熟幼虫离水，在岸边湿润土壤中化蛹，之后羽化为成虫。水泥化的岸线即使仍有水，也可能缺少适宜的上岸和化蛹空间。',
    },
    {
      key: 'habitat',
      label: '稻田与湿地',
      title: '浅水和岸边植被一起保留',
      body: '有缓慢水流或静水的稻田和湿地能提供幼虫环境，成虫则在岸边植被和上方空间活动。保留水体、湿润土岸与植物，可以兼顾多个生活阶段。',
    },
    {
      key: 'conservation',
      label: '暗夜与清水',
      title: '减少灯光，保护水边',
      body: '减少照向湿地的夜间照明，维持水质和岸边植被，能保留幼虫与成虫所需的环境。观察时避免采集。全球 IUCN 评估尚未核实，按未评估收录；地区变化还需分别调查。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '同一水萤，前后两个属名',
      body: 'Motschulsky 于 1860 年描述了这个物种，现用学名为 Aquatica lateralis。它曾归入熠萤属，旧称 Luciola lateralis，后来转入水萤属 Aquatica。前胸的红色可以对应中文名“红胸”，但近似种还需更多形态线索才能区分。',
    },
  ],
  "keyFacts": [
    '旧称 Luciola lateralis，现归入水萤属 Aquatica。',
    '雌雄成虫用腹末闪光参与配偶识别。',
    '幼虫在浅水中活动，主要捕食淡水螺类。',
    '成熟幼虫上岸，在湿润土壤中化蛹。',
    '一生依赖浅水、湿润土岸和水边植被。',
  ],
  "threats": [
    "湿地排水、水质恶化和岸线硬化。",
    "夜间人工照明干扰光信号。"
  ],
  "conservationActions": [
    "保护浅水湿地和湿润土岸。",
    "减少照向水边的灯光，不采集萤火虫。"
  ],
  "featuredStats": [
    {
      "key": "trait",
      "label": "观察重点",
      "value": "水中幼虫"
    },
    {
      "key": "development",
      "label": "发育方式",
      "value": "完全变态"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 红胸水萤分类",
      "url": "https://www.gbif.org/species/7360967",
      "kind": "taxonomy",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "Insects — 水萤属综述与分类修订",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10817006/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "eLife — 萤火虫基因组与生活史",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6191289/",
      "kind": "general",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "红胸水萤的闪光与配偶识别",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9918520/",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    }
  ],
  "media": {
    "image": "./images/species/heike-firefly/01-cover.webp",
    "alt": "红胸水萤位于画面右侧，完整主体周围保留环境。",
    "focalPoint": {
      "x": 0.77,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/heike-firefly/02-body.webp",
        "title": "红胸与深色鞘翅",
        "alt": '成虫在草叶上停留，前胸与鞘翅颜色有对比。',
        "caption": "成虫在草叶上停留，前胸与鞘翅颜色有对比。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heike-firefly/03-detail.webp",
        "title": "腹末的发光区域",
        "alt": '发光来自腹部末端的器官，并非整个身体发亮。',
        "caption": "发光来自腹部末端的器官，并非整个身体发亮。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heike-firefly/04-behavior.webp",
        "title": "草茎上的闪光",
        "alt": '成虫停在水边草茎上发光；静态情景不记录真实闪光节奏。',
        "caption": "成虫停在水边草茎上发光；静态情景不记录真实闪光节奏。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heike-firefly/05-life.webp",
        "title": "水中的幼虫",
        "alt": '水下幼虫与水上成虫的生活阶段示意，未按比例展示；幼虫主要捕食淡水螺类。',
        "caption": "水下幼虫与水上成虫的生活阶段示意，未按比例展示；幼虫主要捕食淡水螺类。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heike-firefly/06-habitat.webp",
        "title": "稻田和湿润岸边",
        "alt": '水生幼虫与陆上成虫共同依赖水陆相接的生境。',
        "caption": "水生幼虫与陆上成虫共同依赖水陆相接的生境。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-08",
  "updatedAt": "2026-09-08"
} as const satisfies Species;

export default profile;
