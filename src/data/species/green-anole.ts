import type { Species } from '../../types/species.ts';

const profile = {
  "id": "green-anole",
  "slug": "green-anole",
  "names": {
    "zh": "绿安乐蜥",
    "en": "Green Anole",
    "aliases": [
      "卡罗来纳安乐蜥"
    ]
  },
  "scientificName": "Anolis carolinensis",
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
      "scientificName": "Anolidae",
      "zhName": "安乐蜥科"
    },
    "genus": {
      "scientificName": "Anolis",
      "zhName": "安乐蜥属"
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
    "assessor": "采用所列机构来源的 IUCN 全球等级；独立评估年份未核实，全球趋势未录入。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "原生于美国东南部；夏威夷、日本小笠原群岛等地有引入种群"
    ],
    "countries": [],
    "range": "原生于美国东南部；夏威夷、日本小笠原群岛等地有引入种群。"
  },
  "habitats": [
    {
      "name": "林缘、灌丛与庭园枝条",
      "realm": "terrestrial",
      "description": '利用林缘、灌丛与庭园中的枝叶攀爬、捕食和展示。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "蜘蛛"
    ],
    "description": "食物包括昆虫、蜘蛛。"
  },
  "tags": [
    "绿安乐蜥",
    "林缘、灌丛与庭园枝条"
  ],
  "summary": '绿安乐蜥在枝叶间捕捉昆虫，趾垫帮助攀爬；雄性会展开粉红色喉扇，用于求偶或领地展示。',
  "description": '绿安乐蜥生活在美国东南部的林缘、灌丛和庭园，也在夏威夷、日本小笠原群岛等地有引入种群。它在枝叶间寻找昆虫和蜘蛛，脚趾上的趾垫帮助抓住枝条。雄性会展开粉红色喉扇，用于求偶或领地展示。身体可以呈绿色或褐色，体色受温度与活动状态等因素影响，细长的尾巴伸在身后。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '雄性的喉扇',
      body: '雄性会在求偶或领地展示时展开粉红色喉扇。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '抓着树枝的脚',
      body: '趾垫有助于沿枝条攀爬。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '也会呈褐色',
      body: '绿安乐蜥也可呈褐色。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '树叶旁的小虫',
      body: '它在枝叶间捕食昆虫和蜘蛛等小动物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '细长的尾巴',
      body: '细长的尾巴伸在身体后方，野外观察时不要抓握或拉扯。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留枝叶与灌丛，在远处观察；不捕捉或放生到原生范围之外。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '种名保留了卡罗来纳的地点',
      body: 'Voigt 在 1832 年发表了绿安乐蜥的科学名称，今天使用 Anolis carolinensis。爬行动物数据库记载，种名 carolinensis 指向发现标本的卡罗来纳地区。数据库还记录，研究者在 2011 年完成了本种的基因组测序，使它成为比较爬行动物、鸟类和哺乳动物基因的研究对象。',
    },
  ],
  "keyFacts": [
    '雄性会在求偶或领地展示时展开粉红色喉扇。',
    '趾垫有助于沿枝条攀爬。',
    '绿安乐蜥也可呈褐色。',
    '它在枝叶间捕食昆虫和蜘蛛等小动物。',
    '细长的尾巴伸在身体后方，野外观察时不要抓握或拉扯。',
  ],
  "threats": [
    "局部栖息环境改变",
    "部分引入地区的外来捕食者"
  ],
  "conservationActions": [
    "保留枝叶与灌丛，在远处观察；不捕捉或放生到原生范围之外。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘、灌丛与庭园枝条"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "雄性的喉扇"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用所列机构来源的 IUCN 全球等级；独立评估年份未核实，全球趋势未录入。"
    }
  ],
  "media": {
    "image": "./images/species/green-anole/01-cover.webp",
    "alt": "绿安乐蜥及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/green-anole/02-observation.webp",
        "alt": "绿安乐蜥：雄性的喉扇",
        "title": "雄性的喉扇",
        "caption": "AI 生成科学情景重建。找找下巴下面展开的粉红色薄扇。雄性会在求偶或领地展示时展开它。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-anole/03-observation.webp",
        "alt": "绿安乐蜥：抓着树枝的脚",
        "title": "抓着树枝的脚",
        "caption": "AI 生成科学情景重建。看放大图里的脚趾怎样贴住树枝。趾垫有助于攀爬，图中细节不用于数趾或测量结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-anole/04-observation.webp",
        "alt": "绿安乐蜥：也会呈褐色",
        "title": "也会呈褐色",
        "caption": "AI 生成科学情景重建。这张重建图里的绿安乐蜥呈褐色。体色会变化；几张独立图片不能证明同一只动物正在变色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-anole/05-observation.webp",
        "alt": "绿安乐蜥：树叶旁的小虫",
        "title": "树叶旁的小虫",
        "caption": "AI 生成科学情景重建。在嘴前的叶片上找找小虫。它会在枝叶间寻找昆虫等小动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/green-anole/06-observation.webp",
        "alt": "绿安乐蜥：细长的尾巴",
        "title": "细长的尾巴",
        "caption": "AI 生成科学情景重建。沿着身体后面找找长尾巴。观察时不要捉它，也不要拉扯尾巴。",
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
      "title": "The Reptile Database：Anolis carolinensis 与 Anolidae 命名",
      "url": "https://reptile-database.reptarium.cz/Anolis/carolinensis",
      "kind": "taxonomy",
      "accessedAt": "2026-09-29"
    },
    {
      "title": "ADW：分布、喉扇、体色与食性",
      "url": "https://animaldiversity.org/accounts/Anolis_carolinensis/",
      "kind": "ecology",
      "accessedAt": "2026-09-29"
    },
    {
      "title": "ADW：IUCN 全球 LC",
      "url": "https://animaldiversity.org/accounts/Anolis_carolinensis/",
      "kind": "conservation",
      "accessedAt": "2026-09-29"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-29",
  "updatedAt": "2026-09-29"
} as const satisfies Species;

export default profile;
