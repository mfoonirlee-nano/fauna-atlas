import type { Species } from '../../types/species.ts';

const profile = {
  "id": "giant-peacock-moth",
  "slug": "giant-peacock-moth",
  "names": {
    "zh": "大孔雀蛾",
    "en": "Giant Peacock Moth",
    "aliases": [
      "大夜孔雀蛾"
    ]
  },
  "scientificName": "Saturnia pyri",
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
      "scientificName": "Lepidoptera",
      "zhName": "鳞翅目"
    },
    "family": {
      "scientificName": "Saturniidae",
      "zhName": "天蚕蛾科"
    },
    "genus": {
      "scientificName": "Saturnia",
      "zhName": "孔雀蛾属"
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
    "assessor": "依据来源所载全球等级；未单独核实评估日期，地方等级另见保护章节"
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
      "欧洲南部及邻近西亚、北非地区"
    ],
    "countries": [],
    "range": "分布于欧洲南部及邻近西亚、北非地区；不同地区的种群状况有差异。"
  },
  "habitats": [
    {
      "name": "有阔叶树的林缘、果园与园地",
      "realm": "terrestrial",
      "description": '林缘、果园和园地中的阔叶树提供幼虫食物，树干等位置可供成蛾白天停留。成虫夜间活动，会受灯光干扰。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "幼虫取食梨树叶",
      "苹果树叶",
      "核桃树叶"
    ],
    "description": "幼虫吃多种阔叶树的叶片；成虫口器退化，依靠幼虫阶段积累的能量活动和繁殖。"
  },
  "tags": [
    "大孔雀蛾",
    "翅膀上的四枚眼状斑"
  ],
  "summary": "大孔雀蛾的前后翅上各有一对眼状斑，幼虫则是带蓝色小突起的绿色毛虫。成虫的眼状斑是翅膀上的花纹。",
  "description": '大孔雀蛾成虫夜里活动，白天常停在树干上。雄蛾用羽毛状触角感知雌蛾的气味信号；幼虫吃树叶，吐丝结成褐色茧，在茧里化蛹后发育成蛾。',
  "storySections": [
    {
      key: 'eyespots',
      label: '生活与认识',
      title: '数一数翅膀上的圆斑',
      body: '两片前翅、两片后翅各有一枚眼状斑，共四枚。真正的眼睛位于头部。',
    },
    {
      key: 'larva',
      label: '生活与认识',
      title: '毛毛虫吃树叶',
      body: '成熟幼虫的绿色身体上有蓝色小突起，突起上长着细毛。它沿树枝爬行，取食叶片。',
    },
    {
      key: 'cocoon',
      label: '生活与认识',
      title: '在茧里变成蛹',
      body: '幼虫吐丝结成褐色茧，在里面化蛹。经过蛹期，成虫才会离开茧。',
    },
    {
      key: 'antennae',
      label: '生活与认识',
      title: '头上有一对触角',
      body: '雄蛾的触角像小羽毛，能感知雌蛾释放的气味信号。',
    },
    {
      key: 'night',
      label: '生活与认识',
      title: '夜里活动的大蛾',
      body: '成虫夜间活动，白天常停在树干等处。它的口器退化，依靠幼虫阶段积累的能量；幼虫才是吃树叶的阶段。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '留下树木和暗一些的夜晚',
      body: 'EUNIS 记录本种尚未接受 IUCN 评估，全球等级为未评估。欧洲部分地区已有下降和地方保护记录；保留幼虫食用的树木，减少农药和夜间灯光干扰，有助于保护它。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“孔雀眼”与不再进食的成蛾',
      body: 'Denis & Schiffermüller 于 1775 年描述了这个物种，现用学名为 Saturnia pyri。翅膀上的四枚眼状斑像孔雀羽毛的花纹，真正的眼睛仍在头部。幼虫吃阔叶树叶，成蛾的口器却已退化，夜间活动和繁殖依靠幼虫时期积累的能量。',
    },
  ],
  "keyFacts": [
    '前后四片翅膀各有一枚眼状斑。',
    '成熟幼虫绿色，蓝色小突起上长有细毛。',
    '幼虫吐丝结成褐色茧，在茧中化蛹。',
    '雄蛾用羽毛状触角感知雌蛾的气味信号。',
    '成虫夜间活动，口器退化，依靠幼虫阶段积累的能量。',
  ],
  "threats": [
    "寄主树减少",
    "农药使用",
    "人工光干扰"
  ],
  "conservationActions": [
    "保留寄主树与结茧空间",
    "减少不必要的夜间照明"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "翅膀上的四枚眼状斑"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "有阔叶树的林缘、果园与园地"
    }
  ],
  "media": {
    "image": "./images/species/giant-peacock-moth/01-cover.webp",
    "alt": "大孔雀蛾的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/giant-peacock-moth/02-observation.webp",
        "title": "四枚眼状斑",
        "alt": "大孔雀蛾展开四片带眼状斑的翅膀",
        "caption": "AI 生成科学情景重建。大孔雀蛾展开四片带眼状斑的翅膀。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-peacock-moth/03-observation.webp",
        "title": "吃梨树叶的幼虫",
        "alt": "绿色大孔雀蛾幼虫在树枝上吃叶子，体表有蓝色突起",
        "caption": "AI 生成科学情景重建。绿色大孔雀蛾幼虫在树枝上吃叶子，体表有蓝色突起。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-peacock-moth/04-observation.webp",
        "title": "树枝旁的褐色茧",
        "alt": "大孔雀蛾褐色丝茧附着在树枝与树皮附近",
        "caption": "AI 生成科学情景重建。大孔雀蛾褐色丝茧附着在树枝与树皮附近。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-peacock-moth/05-observation.webp",
        "title": "雄蛾的羽毛状触角",
        "alt": "雄性大孔雀蛾头部一对羽毛状触角",
        "caption": "AI 生成科学情景重建。雄性大孔雀蛾头部一对羽毛状触角。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/giant-peacock-moth/06-observation.webp",
        "title": "夜里的大孔雀蛾",
        "alt": "夜间的大孔雀蛾停在树干上",
        "caption": "AI 生成科学情景重建。夜间的大孔雀蛾停在树干上。",
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
      "title": "European Environment Agency EUNIS：Saturnia pyri",
      "url": "https://eunis.eea.europa.eu/species/306787",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Associazione Lepidotterologica Italiana：Saturnia pyri 生命周期",
      "url": "https://www.lepidoptera.life/2025/08/01/rubrica-metamorfosi-62-saturnia-pyri/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Naturschutzbund Steiermark：地方保护与威胁",
      "url": "https://www.naturschutzbundsteiermark.at/wiener-nachtpfauenauge-saturnia-pyri/articles/wiener-nachtpfauenauge-saturnia-pyri.html",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Saturnia pyri 的命名作者与年份',
      url: 'https://www.gbif.org/species/1867928',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
