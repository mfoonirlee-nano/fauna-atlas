import type { Species } from '../../types/species.ts';

const profile = {
  "id": "eurasian-magpie",
  "slug": "eurasian-magpie",
  "names": {
    "zh": "喜鹊",
    "en": "Eurasian Magpie",
    "aliases": [
      "欧亚喜鹊",
      "普通喜鹊"
    ]
  },
  "scientificName": "Pica pica",
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
      "scientificName": "Corvidae",
      "zhName": "鸦科"
    },
    "genus": {
      "scientificName": "Pica",
      "zhName": "鹊属"
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
    "assessor": "IUCN（由 EEA EUNIS 转引）"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "欧洲",
      "亚洲"
    ],
    "regions": [
      "欧洲与亚洲部分地区"
    ],
    "countries": [
      "英国",
      "法国",
      "德国",
      "西班牙",
      "俄罗斯"
    ],
    "range": '欧亚喜鹊 Pica pica 分布于欧洲及亚洲部分地区，利用林缘、农田和城镇绿地。东方喜鹊 Pica serica 等已拆分为其他物种，分布另计；地图中心只代表欧洲。',
    "center": {
      "lat": 52,
      "lng": 2
    }
  },
  "habitats": [
    {
      "name": "林缘与城镇绿地",
      "realm": "terrestrial",
      "description": "喜鹊能在有树木、灌木和开阔地的环境中觅食与筑巢。草地适合寻找地面食物，树木提供停歇和筑巢的位置。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "昆虫",
      "其他小动物",
      "种子",
      "果实"
    ],
    "description": "喜鹊取食昆虫等小动物，也吃种子、果实和其他可获得的食物，食谱会随季节变化。"
  },
  "tags": [
    "喜鹊",
    "长尾巴和白羽毛"
  ],
  "summary": "喜鹊的长尾伸出身体后方，头和胸部黑色，肩部与腹部白色。长尾和白色羽毛是辨认它的线索。",
  "description": '欧亚喜鹊的头和胸黑色，肩部、腹部有白羽，翅尾在合适角度泛蓝绿色光泽。它是杂食鸟类，在草地找食物，常用树枝在树上筑带顶巢。',
  "storySections": [
    {
      key: 'tail',
      label: '生活与认识',
      title: '尾巴拖出长长一截',
      body: '喜鹊的尾巴很长，停在枝上时，常能看到尾羽伸出身体后方。它的头和胸部是黑色，肩部与腹部有白羽。',
    },
    {
      key: 'shine',
      label: '生活与认识',
      title: '黑羽里还有蓝绿色',
      body: '在合适的光线和角度下，翅膀与尾羽会泛出蓝绿色光泽。换个方向看，这些羽毛又可能显得很暗。图集用自然侧光展示这种外观，不把每只喜鹊画成同样鲜亮的颜色。',
    },
    {
      key: 'foraging',
      label: '生活与认识',
      title: '低头找一找',
      body: '喜鹊常在地面走动，寻找昆虫和其他食物。看草地图时，先找它朝下的嘴，再看看周围的短草和落叶。它也吃植物食物，是杂食鸟类。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '把树枝带回去',
      body: '喜鹊用树枝等材料筑巢，常在树上搭出有顶部遮盖的巢。图中的鸟衔着一根细枝；这里只展示搬运材料的一个姿势，不把静态图片当成完整筑巢过程。',
    },
    {
      key: 'identity',
      label: '生活与认识',
      title: '名字相近，学名不同',
      body: '“喜鹊”在日常语言中可能指外形相似的几种鸟。这份档案对应 Pica pica。IOC 将东方喜鹊 Pica serica 从原来的广义喜鹊中拆出，因此不能把中国各地常见的喜鹊都归到这份档案里。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '留下一处筑巢的地方',
      body: '欧洲环境署 EUNIS 列出的全球 IUCN 等级为无危。共读时仍可以从身边的环境出发：保留树木和灌木，繁殖期少打扰鸟巢。不要为了看幼鸟而攀树或拆巢。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“喜鹊”这个日常名有多个对象',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Pica pica。“喜鹊”可指外形相似的几种鸟。IOC 已把东方喜鹊 Pica serica 从旧的广义喜鹊中拆出，Pica pica 对应欧亚喜鹊，阅读旧地图时需要检查物种范围。',
    },
  ],
  "keyFacts": [
    '尾羽很长，伸出身体后方。',
    '翅尾随光照和角度呈蓝绿色光泽。',
    '吃小动物，也吃种子和果实。',
    '用树枝等材料在树上筑带顶的巢。',
    '欧亚喜鹊与东方喜鹊是不同的物种。',
  ],
  "threats": [
    "局部树木与灌丛减少",
    "筑巢期干扰"
  ],
  "conservationActions": [
    "保留树木和灌丛",
    "减少繁殖期对鸟巢的干扰"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "长尾巴和白羽毛"
    },
    {
      "key": "food",
      "label": "食物",
      "value": "昆虫"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "林缘与城镇绿地"
    }
  ],
  "media": {
    "image": "./images/species/eurasian-magpie/01-cover.webp",
    "alt": "喜鹊与生活环境的全身场景",
    "focalPoint": {
      "x": 0.77,
      "y": 0.31
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/eurasian-magpie/02-observation.webp",
        "alt": "喜鹊侧身站在枝上，长尾、白色肩斑和腹部可见",
        "title": "长尾巴和白肚皮",
        "caption": "AI 生成科学情景重建。喜鹊侧身站在枝上，长尾、白色肩斑和腹部可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-magpie/03-observation.webp",
        "alt": "喜鹊背部与尾羽在侧光下呈现蓝绿色光泽",
        "title": "羽毛会泛蓝绿色",
        "caption": "AI 生成科学情景重建。喜鹊背部与尾羽在侧光下呈现蓝绿色光泽。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-magpie/04-observation.webp",
        "alt": "喜鹊低头在短草间寻找昆虫等食物",
        "title": "在草地上找食物",
        "caption": "AI 生成科学情景重建。喜鹊低头在短草间寻找昆虫等食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-magpie/05-observation.webp",
        "alt": "喜鹊用嘴衔着一根细枝，准备带去筑巢",
        "title": "衔着细树枝",
        "caption": "AI 生成科学情景重建。喜鹊用嘴衔着一根细枝，准备带去筑巢。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/eurasian-magpie/06-observation.webp",
        "alt": "喜鹊飞过林缘，展开的翅膀露出白色羽区",
        "title": "展翅时的白羽",
        "caption": "AI 生成科学情景重建。喜鹊飞过林缘，展开的翅膀露出白色羽区。",
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
      "title": "EEA EUNIS — 喜鹊分类与全球 IUCN 等级",
      "url": "https://eunis.eea.europa.eu/species/Pica%20pica",
      "kind": "conservation",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "IOC World Bird List — 喜鹊复合群的物种拆分",
      "url": "https://www.worldbirdnames.org/new/updates/species-updates/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "RSPB — 喜鹊的羽色与生活",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/magpie",
      "kind": "ecology",
      "accessedAt": "2026-09-10"
    },
    {
      "title": "Cornell Lab — 欧亚喜鹊食物、栖地与筑巢",
      "url": "https://www.allaboutbirds.org/guide/Eurasian_Magpie/lifehistory",
      "kind": "ecology",
      "accessedAt": "2026-09-10"
    },
    {
      title: 'GBIF：Pica pica 的命名作者与年份',
      url: 'https://www.gbif.org/species/5229490',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-10",
  "updatedAt": "2026-09-10"
} as const satisfies Species;

export default profile;
