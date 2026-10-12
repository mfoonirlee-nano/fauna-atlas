import type { Species } from '../../types/species.ts';

const profile = {
  "id": "japanese-rhinoceros-beetle",
  "slug": "japanese-rhinoceros-beetle",
  "names": {
    "zh": "独角仙",
    "en": "Japanese Rhinoceros Beetle",
    "aliases": [
      "双叉犀金龟"
    ]
  },
  "scientificName": "Trypoxylus dichotomus",
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
      "scientificName": "Scarabaeidae",
      "zhName": "金龟科"
    },
    "genus": {
      "scientificName": "Trypoxylus",
      "zhName": "叉犀金龟属"
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
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "阔叶林与腐殖土"
    ],
    "countries": [
      "中国",
      "日本",
      "韩国"
    ],
    "range": '分布于东亚及邻近亚洲地区，包括中国、日本和朝鲜半岛等地。不同地理种群的体形和角形有差异，日本种群只是整个物种的一部分。',
    "center": {
      "lat": 32,
      "lng": 120
    }
  },
  "habitats": [
    {
      "name": "阔叶林与腐殖土",
      "realm": "terrestrial",
      "description": '成虫利用阔叶树干上渗汁的位置；幼虫在林下腐殖土和腐解植物物质中生活。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "metrics": {},
  "diet": {
    "types": [
      "herbivore",
      "detritivore"
    ],
    "foods": [
      "树汁",
      "腐殖质",
      "腐解植物物质"
    ],
    "description": "成虫取食树干渗出的树汁；幼虫在腐殖土和腐解植物物质中生活取食，两个阶段利用的食物不同。"
  },
  "activity": [
    "傍晚与夜间活动"
  ],
  "tags": [
    "分叉角角力",
    "阔叶林与腐殖土"
  ],
  "summary": "雄性独角仙用分叉的长头角伸到对手身下，再尝试把对手掀离树干。角力常发生在有树汁的地点，雌虫也会到这些位置取食。",
  "description": "独角仙属于金龟科，雄虫长有夸张的头角和较短的前胸角，雌虫没有这样的长角。幼虫是生活在腐殖质中的蛴螬，与树干上披着硬鞘翅的成虫外形不同。",
  "storySections": [
    {
      key: 'identity',
      label: '雌雄差异',
      title: '长角主要属于雄虫',
      body: '雄虫的头角长而分叉，前胸还有较短的角；雌虫不长同样的夸张长角。雄虫间也有大小差异，不能把小角雄虫或雌虫都当作未成年的个体。',
    },
    {
      key: 'combat',
      label: '树干角力',
      title: '把头角伸到对手下面',
      body: '雄虫争夺有树汁的树干位置时，会用头角挑起对手，尝试让对方失去抓握。头角的形状与承受争斗中的力有关，长角不是用来刺穿猎物的捕食器官。',
    },
    {
      key: 'sap',
      label: '成虫食物',
      title: '守住一处渗汁的树皮',
      body: '成虫到树皮伤口附近吸食渗出的汁液，雌虫也会来取食。雄虫守住这样的地点，可增加与雌虫相遇的机会；食物位置因此也成为争斗位置。',
    },
    {
      key: 'larva',
      label: '腐土中的幼虫',
      title: '幼虫把身体弯成弧形',
      body: '白色幼虫有褐色头壳和三对胸足，常蜷成 C 形，在腐殖质中取食。它没有成虫的长角与鞘翅，不能只凭一张蛴螬图片确认是哪一种金龟。',
    },
    {
      key: 'life',
      label: '完全变态',
      title: '蛹期之后才穿上鞘翅',
      body: '独角仙经历卵、幼虫、蛹和成虫四个阶段。蛹在土中发育，羽化后成为甲虫；成虫的角形与幼虫期生长条件和个体发育有关，不是出土后再换一套更大的壳。',
    },
    {
      key: 'conservation',
      label: '保留林地',
      title: '树汁与腐土都需要保留',
      body: '阔叶树提供成虫取食位置，林下腐解物质提供幼虫生活空间，保护需要兼顾这两个阶段。独角仙的全球 IUCN 评估尚未核实，按未评估收录。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '“独角”也有雌雄差异',
      body: 'Linnaeus 于 1771 年描述了这个物种，现用学名为 Trypoxylus dichotomus。雄虫头上的长角分叉，前胸还有一根较短的角；雌虫没有同样的长角。雄虫用这套结构挑起对手，争夺渗出树汁的位置。',
    },
  ],
  "keyFacts": [
    '雄虫有分叉长头角和短前胸角，雌虫没有同样的长角。',
    '雄虫用头角挑起对手，争夺树汁位置。',
    '成虫吸食树汁，幼虫取食腐解植物物质。',
    '白色幼虫有褐色头壳、三对胸足，常弯成 C 形。',
    '经历卵、幼虫、蛹和成虫四个阶段。',
  ],
  "threats": [
    "阔叶林减少和林下腐殖层清除。",
    "局部过度采集。"
  ],
  "conservationActions": [
    "保留老树与适量落叶腐殖层。",
    "不为采集独角仙破坏树皮或挖掘幼虫栖地。"
  ],
  "featuredStats": [
    {
      "key": "trait",
      "label": "观察重点",
      "value": "分叉角角力"
    },
    {
      "key": "development",
      "label": "发育方式",
      "value": "完全变态"
    }
  ],
  "sources": [
    {
      "title": "NCBI — 独角仙分类",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=273928&mode=Info",
      "kind": "taxonomy",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "Scientific Reports — 独角仙基因组与角的形成",
      "url": "https://www.nature.com/articles/s41598-023-35246-w",
      "kind": "general",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "雄性独角仙武器尺寸的力学限制",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4046419/",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      "title": "独角仙不同种群角的性能",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6835817/",
      "kind": "ecology",
      "accessedAt": "2026-09-08"
    },
    {
      title: 'GBIF：Trypoxylus dichotomus 的命名作者与年份',
      url: 'https://www.gbif.org/species/1076217',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "media": {
    "image": "./images/species/japanese-rhinoceros-beetle/01-cover.webp",
    "alt": "独角仙位于画面右侧，完整主体周围保留环境。",
    "focalPoint": {
      "x": 0.9,
      "y": 0.35
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/japanese-rhinoceros-beetle/02-body.webp",
        "title": "雄虫的完整外形",
        "alt": '雄虫用六足抓住树皮，头角和前胸角可见。',
        "caption": "雄虫用六足抓住树皮，头角和前胸角可见。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-rhinoceros-beetle/03-detail.webp",
        "title": "分叉头角与前胸角",
        "alt": '头角末端分叉，较短的前胸角与其配合参与争斗。',
        "caption": "头角末端分叉，较短的前胸角与其配合参与争斗。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-rhinoceros-beetle/04-behavior.webp",
        "title": "树汁附近的对手",
        "alt": '雄虫在树汁取食位置相遇，可能展开角力。',
        "caption": "雄虫在树汁取食位置相遇，可能展开角力。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-rhinoceros-beetle/05-life.webp",
        "title": "腐殖土里的蛴螬",
        "alt": '成虫与腐殖土里的幼虫并列展示不同生命阶段，不表示成虫照料幼虫。',
        "caption": "成虫与腐殖土里的幼虫并列展示不同生命阶段，不表示成虫照料幼虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-rhinoceros-beetle/06-habitat.webp",
        "title": "阔叶林与落叶层",
        "alt": '成虫与幼虫分别利用树干和林下腐殖质。',
        "caption": "成虫与幼虫分别利用树干和林下腐殖质。",
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
