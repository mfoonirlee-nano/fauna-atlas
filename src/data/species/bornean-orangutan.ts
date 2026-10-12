import type { Species } from '../../types/species.ts';

const profile = {
  "id": "bornean-orangutan",
  "slug": "bornean-orangutan",
  "names": {
    "zh": "婆罗洲猩猩",
    "en": "Bornean Orangutan"
  },
  "scientificName": "Pongo pygmaeus",
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
      "scientificName": "Primates",
      "zhName": "灵长目"
    },
    "family": {
      "scientificName": "Hominidae",
      "zhName": "人科"
    },
    "genus": {
      "scientificName": "Pongo",
      "zhName": "猩猩属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "CR",
    "label": {
      "zh": "极危",
      "en": "Critically Endangered"
    },
    "trend": "unknown",
    "assessor": "IUCN；等级来源与适用范围见来源记录"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "婆罗洲"
    ],
    "countries": [
      "印度尼西亚",
      "马来西亚"
    ],
    "range": '野生种群限于婆罗洲的印度尼西亚和马来西亚部分，利用低地雨林及沼泽森林。苏门答腊猩猩与达巴努里猩猩属于其他物种，分布另计。',
    "center": {
      "lat": 0.5,
      "lng": 114
    }
  },
  "habitats": [
    {
      "name": "低地雨林与沼泽森林",
      "realm": "terrestrial",
      "description": '低地雨林和沼泽森林提供果实与连通的树冠。猩猩用手和脚抓握枝条，在树上移动和搭建枝叶巢。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "果实",
      "叶片",
      "树皮",
      "昆虫"
    ],
    "description": "婆罗洲猩猩以果实为主食，也吃叶片、树皮和昆虫。它们在森林里寻找不同季节成熟的食物，长臂和抓握足帮助它们在树枝之间移动。"
  },
  "activity": [
    "主要在白天活动"
  ],
  "tags": [
    "婆罗洲猩猩",
    "伸向树枝的长臂"
  ],
  "summary": "婆罗洲猩猩用长臂和能抓握的脚趾在树上活动，寻找果实并搭建枝叶巢。它们身披红褐色长毛，部分成年雄性长有宽大的颊垫。",
  "description": '婆罗洲猩猩的雌性没有成年雄性那样宽大的颊垫，部分成年雄性也尚未发育出颊垫。幼仔长期依靠母亲，跟随她学习寻找食物、抓握树枝和搭建休息巢。',
  "storySections": [
    {
      key: 'arms',
      label: '生活与认识',
      title: '长臂抓住树枝',
      body: '婆罗洲猩猩移动时会用手和脚抓握枝条，让不同肢体分担重量。静态图中的单手悬挂姿势，只表示一个动作瞬间。',
    },
    {
      key: 'identity',
      label: '生活与认识',
      title: '红褐色毛与宽脸颊',
      body: '红褐色长毛和长臂是猩猩的显眼特点。部分成年雄性有宽大的颊垫，雌性没有这种大颊垫。婆罗洲猩猩与黑猩猩、其他岛屿的猩猩各属不同物种。',
    },
    {
      key: 'food',
      label: '生活与认识',
      title: '在树上找果实',
      body: '果实是猩猩的重要食物，它们也会吃叶、树皮和昆虫。长臂和能抓握的手脚帮助它们在树上寻找、拿取食物。',
    },
    {
      key: 'nest',
      label: '生活与认识',
      title: '用枝叶搭个休息处',
      body: '猩猩用树枝和叶子搭建树上的休息巢。幼仔在跟随母亲的多年生活中学习搭巢和取食。',
    },
    {
      key: 'young',
      label: '生活与认识',
      title: '跟着母亲慢慢学',
      body: '猩猩幼仔长期依赖母亲，会贴住她的身体，跟随她在树上生活。母幼之间的相处也让幼仔学习森林里的活动。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保住婆罗洲的森林',
      body: '婆罗洲猩猩的全球保护等级为极危。毁林、森林破碎化、火灾和猎杀威胁它们的生存；保护森林、恢复相连的树冠与减少非法捕捉都很重要。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '树上的枝叶巢',
      body: 'Linnaeus 于 1760 年描述了这个物种，现用学名为 Pongo pygmaeus。婆罗洲猩猩的野生家园只在婆罗洲。它们用枝条和叶子搭建树上休息巢；幼仔跟随母亲多年，连搭巢的方法也要在这段时间里学习。',
    },
  ],
  "keyFacts": [
    "婆罗洲猩猩移动时会用手和脚抓握枝条，让不同肢体分担重量。",
    "红褐色长毛和长臂是猩猩的显眼特点。",
    "果实占猩猩食物的重要部分，它们也会吃叶、树皮和昆虫。",
    "猩猩会用树枝和叶子搭建树上的休息巢。",
    "猩猩幼仔长期依赖母亲，在亲近的母幼关系中学习森林生活。"
  ],
  "threats": [
    "毁林与生境破碎化",
    "森林火灾",
    "猎杀与非法捕捉"
  ],
  "conservationActions": [
    "保护原生森林",
    "恢复森林连通性",
    "减少非法交易并监测野生群体"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "伸向树枝的长臂"
    },
    {
      "key": "food",
      "label": "主要食物",
      "value": "果实"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "低地雨林与沼泽森林"
    }
  ],
  "media": {
    "image": "./images/species/bornean-orangutan/01-cover.webp",
    "alt": "婆罗洲猩猩在生活环境中的完整身体",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/bornean-orangutan/02-observation.webp",
        "title": "长臂伸向树枝",
        "alt": "雌性婆罗洲猩猩用长臂抓住上方树枝",
        "caption": "AI 生成科学情景重建。雌性婆罗洲猩猩用长臂抓住上方树枝。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bornean-orangutan/03-observation.webp",
        "title": "雄性的宽脸颊",
        "alt": "成年雄性婆罗洲猩猩脸颊两侧有宽大颊垫",
        "caption": "AI 生成科学情景重建。成年雄性婆罗洲猩猩脸颊两侧有宽大颊垫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bornean-orangutan/04-observation.webp",
        "title": "树上的果实",
        "alt": "雌性婆罗洲猩猩坐在树枝上取食果实",
        "caption": "AI 生成科学情景重建。雌性婆罗洲猩猩坐在树枝上取食果实。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bornean-orangutan/05-observation.webp",
        "title": "搭建枝叶巢",
        "alt": "婆罗洲猩猩在树上整理枝条和叶子",
        "caption": "AI 生成科学情景重建。婆罗洲猩猩在树上整理枝条和叶子。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/bornean-orangutan/06-observation.webp",
        "title": "母亲身边的幼仔",
        "alt": "婆罗洲猩猩母亲坐在树枝上，幼仔依附在身边",
        "caption": "AI 生成科学情景重建。婆罗洲猩猩母亲坐在树枝上，幼仔依附在身边。",
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
      "title": "ASM Mammal Diversity Database：婆罗洲猩猩",
      "url": "https://www.mammaldiversity.org/taxon/1000722/",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Smithsonian National Zoo：猩猩的外形与生活",
      "url": "https://nationalzoo.si.edu/animals/orangutan",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "San Diego Zoo：猩猩的树巢与学习",
      "url": "https://zoonooz.sandiegozoo.org/zoonooz/great-apes-of-asia/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "ASM MDD 转引 IUCN：极危等级",
      "url": "https://www.mammaldiversity.org/taxon/1000722/",
      "kind": "conservation",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Pongo pygmaeus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5219532',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
