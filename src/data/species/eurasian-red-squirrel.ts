import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-sciurus-vulgaris",
  "slug": "eurasian-red-squirrel",
  "names": {
    "zh": "欧亚红松鼠",
    "en": "Eurasian Red Squirrel",
    "aliases": [
      "红松鼠",
      "松鼠"
    ]
  },
  "scientificName": "Sciurus vulgaris",
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
      "scientificName": "Rodentia",
      "zhName": "啮齿目"
    },
    "family": {
      "scientificName": "Sciuridae",
      "zhName": "松鼠科"
    },
    "genus": {
      "scientificName": "Sciurus",
      "zhName": "松鼠属"
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
    "assessor": "IUCN（Mammal Diversity Database 引用）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "countries": [
      "英国",
      "俄罗斯",
      "中国"
    ],
    "regions": [
      "欧洲与亚洲北部森林"
    ],
    "range": "分布于欧洲至亚洲北部的森林；所列国家为代表地点，不是完整分布清单。",
    "center": {
      "lat": 55,
      "lng": 40
    }
  },
  "habitats": [
    {
      "name": "针叶林与混交林",
      "description": "在树上攀爬、营巢，也下到地面寻找和储藏食物。",
      "realm": "terrestrial",
      "isPrimary": true
    }
  ],
  "measurements": {
    "weight": {
      "typical": 300,
      "unit": "g",
      "note": "Woodland Trust 所列约重，作为观察参照，不代表全部个体范围。"
    }
  },
  "metrics": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "树木种子",
      "坚果",
      "芽",
      "真菌"
    ],
    "description": "树木种子、坚果、芽、真菌是它的食物。"
  },
  "activity": [
    "日间活动"
  ],
  "tags": [
    "大尾巴",
    "树上与林地"
  ],
  "summary": '欧亚红松鼠用前爪抱住松果，啃开后取出种子。它在树枝间移动时靠蓬松长尾保持平衡，冬天也会出来寻找储藏的食物。',
  "description": '欧亚红松鼠有浅色腹部，背毛从红棕色到深褐色不等，随个体、地区和季节变化。冬季耳尖的毛簇更长，图集展示红棕色个体。',
  "storySections": [
    {
      key: 'tail',
      label: '亲子观察',
      title: '找找蓬松的大尾巴',
      body: '从身体后面沿着毛茸茸的轮廓指到尾尖。尾巴很长，松鼠在树上移动时用它帮助保持平衡。',
    },
    {
      key: 'ears',
      label: '生活与认识',
      title: '耳朵尖上有一撮毛',
      body: '冬季欧亚红松鼠的耳毛簇更长。毛色随个体、地区和季节变化，只看红色毛皮不能认出所有松鼠。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '两只前爪抱住松果',
      body: '松鼠用前爪拿住食物，啃开松果取得种子。它也吃坚果、芽和真菌。看看食物放在什么位置。',
    },
    {
      key: 'climbing',
      label: '生活与认识',
      title: '沿着树干爬',
      body: '松鼠用爪抓住树皮，在树干和树枝间移动，长尾帮助保持平衡。观察图中可以沿爪的位置看看它怎样贴住树干。',
    },
    {
      key: 'winter',
      label: '生活与认识',
      title: '冬天也要找食物',
      body: '欧亚红松鼠不冬眠。它会储藏食物，遇到强风等恶劣天气则在巢中多待一会儿。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给松鼠留下连着的树林',
      body: '全球红色名录等级为无危。英国部分地区的红松鼠仍受灰松鼠竞争、松鼠痘和林地变化影响；全球等级不能代表每个地方的处境。独立评估日期和全球趋势未核实。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '红松鼠也有深褐色毛',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Sciurus vulgaris。“红松鼠”的背毛可从红棕色到深褐色变化，冬季耳尖毛簇更长。它不冬眠，寒冷季节仍会寻找储藏的食物，天气恶劣时多待在巢中。',
    },
  ],
  "keyFacts": [
    "大尾巴帮助它在树上保持平衡。",
    "冬季耳尖毛簇更显眼。",
    "前爪能拿住食物。",
    "欧亚红松鼠不冬眠。",
    "全球无危与当地数量下降可以同时存在。"
  ],
  "threats": [
    "森林减少或破碎化。",
    "英国部分种群受灰松鼠竞争与松鼠痘影响。"
  ],
  "conservationActions": [
    "保护连通的林地。",
    "远处观察，不追赶、不掏树洞。"
  ],
  "featuredStats": [
    {
      "key": "0",
      "label": "观察重点",
      "value": "大尾巴"
    },
    {
      "key": "1",
      "label": "活动地方",
      "value": "树上与林地"
    },
    {
      "key": "2",
      "label": "过冬方式",
      "value": "不冬眠"
    }
  ],
  "sources": [
    {
      "title": "GBIF — 名称与分类归属",
      "url": "https://www.gbif.org/species/8211070",
      "kind": "taxonomy",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Animal Diversity Web — 外形与生活",
      "url": "https://animaldiversity.org/accounts/Sciurus_vulgaris/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Woodland Trust — 红松鼠",
      "url": "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/red-squirrel/",
      "kind": "ecology",
      "accessedAt": "2026-09-09"
    },
    {
      "title": "Mammal Diversity Database — 全球等级",
      "url": "https://www.mammaldiversity.org/taxon/1001701/",
      "kind": "conservation",
      "accessedAt": "2026-09-09"
    }
  ],
  "media": {
    "image": "./images/species/eurasian-red-squirrel/01-cover.webp",
    "alt": "欧亚红松鼠坐在右侧倒木上，身后翘着蓬松尾巴。",
    "focalPoint": {"x": 0.87, "y": 0.31},
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eurasian-red-squirrel/02-body.webp",
        "title": "大尾巴和浅色肚子",
        "alt": "红棕色松鼠侧身坐着，尾巴、耳尖和脚留在画面内。",
        "caption": "红棕色松鼠侧身坐着，尾巴、耳尖和脚留在画面内。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-red-squirrel/03-tail.webp",
        "title": "沿着尾巴指一指",
        "alt": "近景展示松鼠和蓬松的长尾巴。",
        "caption": "近景展示松鼠和蓬松的长尾巴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-red-squirrel/04-feeding.webp",
        "title": "抱住松果",
        "alt": "松鼠用前爪拿住松果，低头啃食。",
        "caption": "松鼠用前爪拿住松果，低头啃食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-red-squirrel/05-climbing.webp",
        "title": "抓住树皮",
        "alt": "松鼠贴着树干攀爬，尾巴向后伸展。",
        "caption": "松鼠贴着树干攀爬，尾巴向后伸展。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-red-squirrel/06-habitat.webp",
        "title": "树林里的住处",
        "alt": "松鼠停在树枝上，周围有针叶树和阔叶树。",
        "caption": "松鼠停在树枝上，周围有针叶树和阔叶树。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      }
    ]
  },
  "featured": true,
  "publishedAt": "2026-09-09",
  "updatedAt": "2026-09-09"
} as const satisfies Species;

export default profile;
