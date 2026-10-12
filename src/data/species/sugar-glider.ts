import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sugar-glider",
  "slug": "sugar-glider",
  "names": {
    "zh": "蜜袋鼯",
    "en": "Sugar Glider"
  },
  "scientificName": "Petaurus breviceps",
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
      "scientificName": "Diprotodontia",
      "zhName": "双门齿目"
    },
    "family": {
      "scientificName": "Petauridae",
      "zhName": "袋鼯科"
    },
    "genus": {
      "scientificName": "Petaurus",
      "zhName": "袋鼯属"
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
    "assessor": '数据库列 LC；是否已按拆分后的物种范围重评、独立评估日期及全球趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "澳大利亚东部大分水岭沿海一侧"
    ],
    "countries": [],
    "range": "澳大利亚东部大分水岭沿海一侧；主要生活在桉树林与疏林。"
  },
  "habitats": [
    {
      "name": "桉树林与疏林",
      "realm": "terrestrial",
      "description": '澳大利亚东部大分水岭沿海一侧的桉树林与疏林。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "树液",
      "花蜜",
      "花粉",
      "昆虫"
    ],
    "description": "食物包括树液、花蜜、花粉、昆虫。"
  },
  "tags": [
    "蜜袋鼯",
    "桉树林与疏林"
  ],
  "summary": '蜜袋鼯夜间吃树液、花蜜和昆虫，白天在树洞休息。四肢间的皮膜帮助滑翔，长尾协助稳定和转向。',
  "description": '蜜袋鼯夜间在澳大利亚东部沿海一侧的桉树林、疏林活动，吃树液、花蜜、花粉和昆虫。前后肢之间的皮膜展开后帮助它从树间滑翔，长尾保持稳定、协助转向。白天它在铺叶的树洞里休息，有时与同伴共巢。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '展开皮膜',
      body: '看看前后肢之间的皮膜。蜜袋鼯从高处跃出后借它滑翔，长尾巴帮助保持稳定和转向。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '抱住树干',
      body: '收起皮膜后，它用爪抓住树皮攀爬。细树枝和粗树干都是它活动的地方。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '白天住树洞',
      body: '蜜袋鼯主要在夜间活动，白天在铺有叶子的树洞里休息，也会和同伴共用巢穴。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '树上的食物',
      body: '它取食树液、花蜜、花粉和昆虫。图中展示舔食树液的情景。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '长长的尾巴',
      body: '找找身体后面的毛尾巴。滑翔时，它用尾巴帮助稳定身体；停在枝上时，皮膜折在身侧。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '哺乳动物多样性数据库列全球等级为 LC（无危）。这个等级是否已按拆分后的物种范围重评，尚未确认，独立评估日期和趋势也未确认。树洞和相连林木是它休息、滑翔所需的生活空间。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '熟悉的蜜袋鼯后来分成三种',
      body: 'Waterhouse 在 1838 年发表 Petaurus breviceps 这个名称。2021 年出版的分类研究把过去广义的蜜袋鼯分成三种，今天本种限于澳大利亚东部大分水岭沿海一侧。旧资料所写的新几内亚和塔斯马尼亚范围不能直接沿用，长得像蜜袋鼯的滑翔动物仍要分别辨认。',
    },
  ],
  "keyFacts": [
    "看看前后肢之间的皮膜。蜜袋鼯从高处跃出后借它滑翔，长尾巴帮助保持稳定和转向。",
    "收起皮膜后，它用爪抓住树皮攀爬。细树枝和粗树干都是它活动的地方。",
    "蜜袋鼯主要在夜间活动，白天在铺有叶子的树洞里休息，也会和同伴共用巢穴。",
    "它取食树液、花蜜、花粉和昆虫。图中展示舔食树液的情景。",
    "找找身体后面的毛尾巴。滑翔时，它用尾巴帮助稳定身体；停在枝上时，皮膜折在身侧。"
  ],
  "threats": [],
  "conservationActions": [
    "保护桉树林与疏林，观察时不捕捉、不驱赶。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "桉树林与疏林"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "展开皮膜"
    },
    {
      "key": "conservation",
      "label": "保护等级",
      "value": "无危",
      "note": "采用拆分后的 Petaurus breviceps，分布限澳大利亚东部沿海侧，不沿用旧资料的新几内亚与塔斯马尼亚范围。MDD 列 LC；尚未核实该等级与拆分后范围的评估衔接、独立评估日期及趋势。"
    }
  ],
  "media": {
    "image": "./images/species/sugar-glider/01-cover.webp",
    "alt": "蜜袋鼯及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sugar-glider/02-observation.webp",
        "alt": "蜜袋鼯：展开皮膜",
        "title": "展开皮膜",
        "caption": "AI 生成科学情景重建。看看前后肢之间的皮膜。蜜袋鼯从高处跃出后借它滑翔，长尾巴帮助保持稳定和转向。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sugar-glider/03-observation.webp",
        "alt": "蜜袋鼯：抱住树干",
        "title": "抱住树干",
        "caption": "AI 生成科学情景重建。收起皮膜后，它用爪抓住树皮攀爬。细树枝和粗树干都是它活动的地方。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sugar-glider/04-observation.webp",
        "alt": "蜜袋鼯：白天住树洞",
        "title": "白天住树洞",
        "caption": "AI 生成科学情景重建。蜜袋鼯主要在夜间活动，白天在铺有叶子的树洞里休息，也会和同伴共用巢穴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sugar-glider/05-observation.webp",
        "alt": "蜜袋鼯：树上的食物",
        "title": "树上的食物",
        "caption": "AI 生成科学情景重建。它取食树液、花蜜、花粉和昆虫。图中展示舔食树液的情景。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sugar-glider/06-observation.webp",
        "alt": "蜜袋鼯：长长的尾巴",
        "title": "长长的尾巴",
        "caption": "AI 生成科学情景重建。找找身体后面的毛尾巴。滑翔时，它用尾巴帮助稳定身体；停在枝上时，皮膜折在身侧。",
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
      "title": "Australian Museum：Sugar Glider",
      "url": "https://australian.museum/learn/animals/mammals/sugar-glider/",
      "kind": "general",
      "accessedAt": "2026-09-23"
    },
    {
      "title": "MDD：Petaurus breviceps",
      "url": "https://www.mammaldiversity.org/taxon/1000344/",
      "kind": "conservation",
      "accessedAt": "2026-09-23"
    },
    {
      "title": "NSW：Gliding possums",
      "url": "https://www.environment.nsw.gov.au/topics/animals-and-plants/native-animals/native-animal-facts/land-mammals/gliding-possums",
      "kind": "ecology",
      "accessedAt": "2026-09-23"
    },
    {
      title: 'GBIF：蜜袋鼯的科学命名记录',
      url: 'https://www.gbif.org/species/2440043',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-23",
  "updatedAt": "2026-09-23"
} as const satisfies Species;

export default profile;
