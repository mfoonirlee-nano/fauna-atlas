import type { Species } from '../../types/species.ts';

const profile = {
  "id": "corn-snake",
  "slug": "corn-snake",
  "names": {
    "zh": "玉米蛇",
    "en": "Corn Snake",
    "aliases": [
      "玉米锦蛇",
      "红鼠蛇",
      "Elaphe guttata"
    ]
  },
  "scientificName": "Pantherophis guttatus",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
    },
    "family": {
      "scientificName": "Colubridae",
      "zhName": "游蛇科"
    },
    "genus": {
      "scientificName": "Pantherophis",
      "zhName": "美洲鼠蛇属"
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
    "assessor": "IUCN；全球等级见来源，独立评估日期与全球趋势未核实"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "美国东部与东南部"
    ],
    "countries": [
      "美国"
    ],
    "range": '原生分布以美国东部和东南部为主，栖息于林地、林缘和草地等环境。Pantherophis emoryi 已独立成种，分布另计。',
    "center": {
      "lat": 33,
      "lng": -83
    }
  },
  "habitats": [
    {
      "name": "林地、林缘与草地",
      "realm": "terrestrial",
      "description": '玉米蛇利用林地、林缘和草地，能在地面移动，也能攀爬枝条。树皮下、洞穴与其他缝隙提供休息位置。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "小型啮齿动物",
      "鸟类",
      "蜥蜴"
    ],
    "description": "玉米蛇捕食小型啮齿动物，也会取食鸟类和蜥蜴；名字里的玉米不是它的主食。"
  },
  "activity": [
    "常在黄昏和夜间活动，随温度调整"
  ],
  "tags": [
    "玉米蛇",
    "把身体弯起来前进"
  ],
  "summary": "玉米蛇用肌肉和腹部鳞片配合地面支撑向前移动，也能爬上枝条。常见个体背上有带深色边缘的红褐斑块。",
  "description": '玉米蛇常见橙褐底色，背上有带深色边缘的红褐斑块。它藏在树皮下或洞穴中休息，外出捕食小动物，也会蜕去外层旧皮。它没有毒液，受到惊扰仍可能咬人，观察时应保持距离。',
  "storySections": [
    {
      key: 'move',
      label: '生活与认识',
      title: '把身体弯起来前进',
      body: '玉米蛇弯曲身体向前移动，肌肉与腹部鳞片配合地面获得支撑。',
    },
    {
      key: 'tongue',
      label: '生活与认识',
      title: '伸出分叉的舌头',
      body: '蛇用分叉舌采集周围的化学信息，再送到口腔内的感受器官，帮助了解环境。舌头不是用来叮人的。',
    },
    {
      key: 'climb',
      label: '生活与认识',
      title: '沿着树枝爬',
      body: '玉米蛇能攀爬，用身体贴住粗糙枝条，在不同接触点获得支撑。',
    },
    {
      key: 'shelter',
      label: '生活与认识',
      title: '藏在树皮和缝隙里',
      body: '它会在树皮下、洞穴或其他隐蔽处休息，出来寻找猎物。玉米蛇吃小动物，不以玉米为食。',
    },
    {
      key: 'skin',
      label: '生活与认识',
      title: '长大时蜕下旧皮',
      body: '玉米蛇会蜕去外层旧皮，换上新的外层皮肤。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '给林缘留下藏身处',
      body: '玉米蛇全球属无危。保护林地边缘和藏身空间，减少道路伤害与人为捕捉，有助于维持野外种群。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字里有玉米，食物是小动物',
      body: 'Linnaeus 于 1766 年描述了这个物种，现用学名为 Pantherophis guttatus。玉米蛇捕食啮齿动物、鸟和蜥蜴，玉米不是它的主食。它用分叉舌采集化学信息，身体肌肉和腹部鳞片则配合地面支撑，帮助这条没有四肢的蛇移动。',
    },
  ],
  "keyFacts": [
    "玉米蛇在地面移动时，身体会出现弯曲。",
    "蛇伸出舌头采集周围的化学信息，再送到口腔内的感受器官。",
    "玉米蛇也会攀爬，用身体贴住粗糙枝条。",
    "它会在树皮下、洞穴或其他隐蔽处休息，出来寻找猎物。",
    "玉米蛇会蜕去外层旧皮。"
  ],
  "threats": [
    "栖息地改变",
    "道路交通",
    "野外捕捉"
  ],
  "conservationActions": [
    "保护林缘栖息地",
    "减少道路伤害",
    "不捕捉野生蛇类"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "把身体弯起来前进"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "小型啮齿动物"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林地、林缘与草地"
    }
  ],
  "media": {
    "image": "./images/species/corn-snake/01-cover.webp",
    "alt": "落叶上弯曲身体的玉米蛇",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/corn-snake/02-observation.webp",
        "title": "弯曲身体向前爬",
        "alt": "玉米蛇在落叶上形成宽大的弯曲，头尾完整可见",
        "caption": "AI 生成科学情景重建。玉米蛇在落叶上形成宽大的弯曲，头尾完整可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/corn-snake/03-observation.webp",
        "title": "伸出分叉舌头",
        "alt": "玉米蛇头部近景，分叉舌头伸出口外",
        "caption": "AI 生成科学情景重建。玉米蛇头部近景，分叉舌头伸出口外。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/corn-snake/04-observation.webp",
        "title": "沿低枝攀爬",
        "alt": "玉米蛇用身体贴住粗糙的低矮枝条",
        "caption": "AI 生成科学情景重建。玉米蛇用身体贴住粗糙的低矮枝条。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/corn-snake/05-observation.webp",
        "title": "躲在树皮下面",
        "alt": "玉米蛇藏在松动树皮旁，头部与部分身体可见",
        "caption": "AI 生成科学情景重建。玉米蛇藏在松动树皮旁，头部与部分身体可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/corn-snake/06-observation.webp",
        "title": "小蛇和蜕下的皮",
        "alt": "幼年玉米蛇停在一段空的蜕皮旁",
        "caption": 'AI 生成科学情景重建。幼年玉米蛇停在一段空的蜕皮旁。蛇与蜕皮同处一张示意图，不能当作某一个体蜕皮过程的实拍。',
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
    "title": "新泽西州野生动物部门：玉米蛇蜕皮",
    "url": "https://www.nj.gov/dep/fgw/ensp/pdf/end-thrtened/cornsnake.pdf",
    "kind": "ecology",
    "accessedAt": "2026-09-14"
},
    {
      "title": "The Reptile Database：玉米蛇分类与物种界限",
      "url": "https://reptile-database.reptarium.cz/Pantherophis/guttatus",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：玉米蛇生活史",
      "url": "https://animaldiversity.org/accounts/Pantherophis_guttatus/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Animal Diversity Web：玉米蛇全球保护等级",
      "url": "https://animaldiversity.org/accounts/Pantherophis_guttatus/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Pantherophis guttatus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2455615',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
