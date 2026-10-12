import type { Species } from '../../types/species.ts';

const profile = {
  "id": "red-mason-bee",
  "slug": "red-mason-bee",
  "names": {
    "zh": "红壁蜂",
    "en": "Red Mason Bee"
  },
  "scientificName": "Osmia bicornis",
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
      "scientificName": "Hymenoptera",
      "zhName": "膜翅目"
    },
    "family": {
      "scientificName": "Megachilidae",
      "zhName": "切叶蜂科"
    },
    "genus": {
      "scientificName": "Osmia",
      "zhName": "壁蜂属"
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
    "assessor": '已核实欧洲区域等级为 LC；全球评估尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲",
      "非洲"
    ],
    "regions": [
      "欧洲花园与林缘"
    ],
    "countries": [],
    "range": '分布于古北界多个地区，包括欧洲、亚洲和非洲部分地区；欧洲花园、公园和林缘有常见记录。'
  },
  "habitats": [
    {
      "name": "有花与孔洞的花园、林缘",
      "realm": "terrestrial",
      "description": '有开花植物和筑巢孔洞的花园、公园及林缘。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "nectarivore",
      "herbivore"
    ],
    "foods": [
      "花蜜",
      "花粉"
    ],
    "description": "食物包括花蜜、花粉。"
  },
  "tags": [
    "红壁蜂",
    "用泥封住洞口"
  ],
  "summary": '红壁蜂的雌蜂在茎秆或其他孔洞里筑巢，用泥分隔小室，给每枚卵准备花粉和花蜜。它在春季花间活动。',
  "description": "红壁蜂身上长着姜黄色至锈红色的毛。每只雌蜂各自筑巢，利用空心植物茎或其他孔洞，用泥把巢分成小室，为幼虫准备花粉和花蜜。",
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '用泥封住洞口',
      body: '雌蜂把泥团带回巢，用来筑隔墙和封口。图中的空心茎可作大小参照，放大画面不代表真实体长。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '到花上找食物',
      body: '红壁蜂会拜访苹果等植物的花，取食花蜜并收集花粉。看花朵与蜂的大小关系。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '带回一小团泥',
      body: '雌蜂用口器搬运泥团，脸上的一对突起能帮助整理泥墙。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '借用现成的小孔',
      body: '雌蜂会利用空心茎和木头里的孔洞，每个巢室里放一枚卵和供幼虫吃的食物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '身上的红褐色毛',
      body: '看看腹部的红褐色毛和背上折起的翅膀。雄蜂通常更小，脸上有浅色毛；本组画的是雌蜂。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留花源和可供筑巢的枯茎，观察蜂巢时不拆开泥封。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '用泥分隔育幼小室',
      body: 'Linnaeus 在 1758 年发表 Osmia bicornis 这个名称。“壁蜂”可以联想到雌蜂在孔洞里筑泥墙的行为，每个小室各放一枚卵和一份花粉、花蜜。雌蜂脸前的两处突起也值得观察，它们参与处理筑巢的泥。每只雌蜂独自安排这些小室。',
    },
  ],
  "keyFacts": [
    "雌蜂把泥团带回巢，用来筑隔墙和封口。图中的空心茎可作大小参照，放大画面不代表真实体长。",
    "红壁蜂会拜访苹果等植物的花，取食花蜜并收集花粉。看花朵与蜂的大小关系。",
    "雌蜂用口器搬运泥团，脸上的一对突起能帮助整理泥墙。",
    "雌蜂会利用空心茎和木头里的孔洞，每个巢室里放一枚卵和供幼虫吃的食物。",
    "看看腹部的红褐色毛和背上折起的翅膀。雄蜂通常更小，脸上有浅色毛；本组画的是雌蜂。"
  ],
  "threats": [
    "花源与筑巢孔洞减少",
    "农药暴露等潜在压力"
  ],
  "conservationActions": [
    "保留花源和可供筑巢的枯茎，观察蜂巢时不拆开泥封。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "用泥封住洞口"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有花与孔洞的花园、林缘"
    }
  ],
  "media": {
    "image": "./images/species/red-mason-bee/01-cover.webp",
    "alt": "红壁蜂在有花与孔洞的花园、林缘中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/red-mason-bee/02-observation.webp",
        "title": "用泥封住洞口",
        "alt": "红壁蜂：用泥封住洞口",
        "caption": "AI 生成科学情景重建。雌蜂把泥团带回巢，用来筑隔墙和封口。图中的空心茎可作大小参照，放大画面不代表真实体长。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-mason-bee/03-observation.webp",
        "title": "到花上找食物",
        "alt": "红壁蜂：到花上找食物",
        "caption": "AI 生成科学情景重建。红壁蜂会拜访苹果等植物的花，取食花蜜并收集花粉。看花朵与蜂的大小关系。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-mason-bee/04-observation.webp",
        "title": "带回一小团泥",
        "alt": "红壁蜂：带回一小团泥",
        "caption": "AI 生成科学情景重建。雌蜂用口器搬运泥团，脸上的一对突起能帮助整理泥墙。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-mason-bee/05-observation.webp",
        "title": "借用现成的小孔",
        "alt": "红壁蜂：借用现成的小孔",
        "caption": "AI 生成科学情景重建。雌蜂会利用空心茎和木头里的孔洞，每个巢室里放一枚卵和供幼虫吃的食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/red-mason-bee/06-observation.webp",
        "title": "身上的红褐色毛",
        "alt": "红壁蜂：身上的红褐色毛",
        "caption": "AI 生成科学情景重建。看看腹部的红褐色毛和背上折起的翅膀。雄蜂通常更小，脸上有浅色毛；本组画的是雌蜂。",
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
      "title": "BWARS：红壁蜂分类、分布与筑巢",
      "url": "https://bwars.com/bee/megachilidae/osmia-bicornis",
      "kind": "ecology",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "ITIS：Osmia bicornis 接受名",
      "url": "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=767827",
      "kind": "taxonomy",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "IUCN 欧洲蜂类红色名录：欧洲区域 LC",
      "url": "https://portals.iucn.org/library/sites/library/files/documents/RL-4-019.pdf",
      "kind": "conservation",
      "accessedAt": "2026-09-22"
    },
    {
      "title": "IUCN UK：红壁蜂生活史与识别",
      "url": "https://www.iucn-uk-peatlandprogramme.org/wildlife-explorer/bees-and-wasps/red-mason-bee",
      "kind": "general",
      "accessedAt": "2026-09-22"
    },
    {
      title: 'GBIF：红壁蜂的科学命名记录',
      url: 'https://www.gbif.org/species/5039315',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-22",
  "updatedAt": "2026-09-22"
} as const satisfies Species;

export default profile;
