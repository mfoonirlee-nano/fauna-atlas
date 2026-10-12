import type { Species } from '../../types/species.ts';

const profile = {
  "id": "common-blackbird",
  "slug": "common-blackbird",
  "names": {
    "zh": "乌鸫",
    "en": "Common Blackbird"
  },
  "scientificName": "Turdus merula",
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
      "scientificName": "Passeriformes",
      "zhName": "雀形目"
    },
    "family": {
      "scientificName": "Turdidae",
      "zhName": "鸫科"
    },
    "genus": {
      "scientificName": "Turdus",
      "zhName": "鸫属"
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
    "assessor": "采用来源所列 IUCN 全球等级，独立评估年份未核实。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "欧洲、北非与亚洲部分地区；澳大利亚和新西兰有引入种群"
    ],
    "countries": [],
    "range": "欧洲、北非与亚洲部分地区；澳大利亚和新西兰有引入种群。"
  },
  "habitats": [
    {
      "name": "林地、灌丛与花园",
      "realm": "terrestrial",
      "description": '利用林地、公园和灌丛等环境，在草地与落叶层觅食，在树枝上停栖和鸣唱。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "蚯蚓",
      "昆虫",
      "浆果"
    ],
    "description": '取食昆虫、蚯蚓等小动物，也吃果实。'
  },
  "tags": [
    "乌鸫",
    "林地、灌丛与花园"
  ],
  "summary": '雄性乌鸫常在枝头鸣唱，地面和落叶层则提供昆虫、蚯蚓与果实；雌鸟多为褐色。',
  "description": '成年雄性乌鸫羽毛黑，嘴呈黄橙色，眼外有细细的黄色圈。雌鸟多为褐色，胸前可有较淡的斑纹，嘴的颜色也较暗。它在草地上走动或跳跃，在落叶间找昆虫、蚯蚓，也吃果实；繁殖季常从较高的枝头鸣唱。Turdus merula 分布于欧洲、北非和亚洲部分地区，在澳大利亚、新西兰也有引入种群。中国常见的 Turdus mandarinus 在现代分类中另列为一种。',
  "storySections": [
    {
      key: 'observation-1',
      label: '身体特点',
      title: '黄嘴与黄色眼圈',
      body: '成年雄性羽毛黑，嘴呈黄橙色，眼外有细细的黄色圈。',
    },
    {
      key: 'observation-2',
      label: '身体特点',
      title: '草地上找食物',
      body: '乌鸫会在地面走动或跳跃，停下来寻找食物。',
    },
    {
      key: 'observation-3',
      label: '身体特点',
      title: '褐色的雌鸟',
      body: '成年雌性多为褐色，胸前可见较淡的斑纹，嘴的颜色也较暗。',
    },
    {
      key: 'observation-4',
      label: '生活习性',
      title: '翻开落叶',
      body: '乌鸫会翻动落叶寻找昆虫等小动物，也吃蚯蚓和果实。',
    },
    {
      key: 'observation-5',
      label: '栖息与生活',
      title: '枝头鸣唱',
      body: '雄鸟常从较高的停栖处鸣唱，繁殖季节更容易听见。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保留灌木与落叶中的觅食空间，观察鸟巢时保持距离，不触碰巢和幼鸟。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '同一个中文名下要分清物种',
      body: '林奈在 1758 年发表了 Turdus merula，这个科学名称沿用至今。“乌鸫”的“乌”与成年雄性黑色羽毛相对应，雌鸟的羽色却多为褐色。中国常见的乌鸫 Turdus mandarinus 在现代分类中另列为一种，读到旧文献中的“乌鸫”时，还需对照学名和记载地点。',
    },
  ],
  "keyFacts": [
    '成年雄性羽毛黑，嘴呈黄橙色，眼外有细细的黄色圈。',
    '乌鸫会在地面走动或跳跃，停下来寻找食物。',
    '成年雌性多为褐色，胸前可见较淡的斑纹，嘴的颜色也较暗。',
    '乌鸫会翻动落叶寻找昆虫等小动物，也吃蚯蚓和果实。',
    '雄鸟常从较高的停栖处鸣唱，繁殖季节更容易听见。',
    '林奈在 1758 年发表了 Turdus merula，这个科学名称沿用至今。“乌鸫”的“乌”与成年雄性黑色羽毛相对应，雌鸟的羽色却多为褐色。中国常见的乌鸫 Turdus mandarinus 在现代分类中另列为一种，读到旧文献中的“乌鸫”时，还需对照学名和记载地点。',
  ],
  "threats": [
    "栖息环境改变",
    "局部巢位受扰"
  ],
  "conservationActions": [
    "保留灌木与落叶中的觅食空间，观察鸟巢时保持距离，不触碰巢和幼鸟。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林地、灌丛与花园"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "黄嘴与黄色眼圈"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用来源所列 IUCN 全球等级，独立评估年份未核实。"
    }
  ],
  "media": {
    "image": "./images/species/common-blackbird/01-cover.webp",
    "alt": "乌鸫及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/common-blackbird/02-observation.webp",
        "alt": "乌鸫：黄嘴与黄色眼圈",
        "title": "黄嘴与黄色眼圈",
        "caption": "AI 生成科学情景重建。这是成年雄性。找找黑色羽毛间的黄橙色嘴，再看看眼睛外面细细的黄色圈。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-blackbird/03-observation.webp",
        "alt": "乌鸫：草地上找食物",
        "title": "草地上找食物",
        "caption": "AI 生成科学情景重建。看看它的脚落在哪里。乌鸫会在地面走动或跳跃，停下来寻找食物；单张图不表示连续动作。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-blackbird/04-observation.webp",
        "alt": "乌鸫：褐色的雌鸟",
        "title": "褐色的雌鸟",
        "caption": "AI 生成科学情景重建。这张图展示成年雌性。它的羽毛多为褐色，胸前可见较淡的斑纹，嘴也不像成年雄鸟那样鲜亮。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-blackbird/05-observation.webp",
        "alt": "乌鸫：翻开落叶",
        "title": "翻开落叶",
        "caption": "AI 生成科学情景重建。找找嘴边翻起的叶子。乌鸫会在落叶间寻找昆虫等小动物，也吃蚯蚓和果实。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/common-blackbird/06-observation.webp",
        "alt": "乌鸫：枝头鸣唱",
        "title": "枝头鸣唱",
        "caption": "AI 生成科学情景重建。看看雄鸟张开的嘴。它常从较高的停栖处鸣唱，繁殖季节更容易听见。",
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
      "title": "丹麦自然历史博物馆：分类与 IUCN 2024 记录",
      "url": "https://collections.snm.ku.dk/en/object/NHMD138396",
      "kind": "conservation",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "RSPB：乌鸫外形与行为",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/blackbird",
      "kind": "ecology",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "Animal Diversity Web：Turdus merula",
      "url": "https://animaldiversity.org/accounts/Turdus_merula/",
      "kind": "distribution",
      "accessedAt": "2026-09-27"
    },
    {
      "title": "ITIS：Turdus mandarinus 分类区分",
      "url": "https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=1277028",
      "kind": "taxonomy",
      "accessedAt": "2026-09-27"
    },
    {
      title: 'GBIF：Turdus merula 的学名与描述作者',
      url: 'https://www.gbif.org/species/2490719',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-27",
  "updatedAt": "2026-09-27"
} as const satisfies Species;

export default profile;
