import type { Species } from '../../types/species.ts';

const profile = {
  "id": "saola",
  "slug": "saola",
  "names": {
    "zh": "中南大羚",
    "en": "Saola",
    "aliases": [
      "武广牛",
      "索拉羚"
    ]
  },
  "scientificName": "Pseudoryx nghetinhensis",
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
      "scientificName": "Artiodactyla",
      "zhName": "偶蹄目"
    },
    "family": {
      "scientificName": "Bovidae",
      "zhName": "牛科"
    },
    "genus": {
      "scientificName": "Pseudoryx",
      "zhName": "中南大羚属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": 'CR',
    "label": {
      "zh": '极危',
      "en": 'Critically Endangered'
    },
    "trend": "unknown",
    "assessor": 'WWF 与 IUCN 均将本种列为极度濒危动物；该评估的确切日期与当前全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "越南与老挝安南山脉"
    ],
    "countries": [
      "越南",
      "老挝"
    ],
    "range": '越南与老挝安南山脉的部分湿润常绿林。'
  },
  "habitats": [
    {
      "name": "湿润常绿林",
      "realm": "terrestrial",
      "description": '越南和老挝安南山脉干季不明显的湿润常绿林。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "森林植物的叶片"
    ],
    "description": '摄取植物性食物，具体野外食谱与比例仍有资料限制。'
  },
  "tags": [
    "中南大羚",
    "湿润常绿林"
  ],
  "summary": '中南大羚在安南山脉常绿林吃植物，雌雄都有两根细长角和白色脸纹。野外记录少，很多生活细节仍未知。',
  "description": '中南大羚生活在越南和老挝安南山脉的湿润常绿林，以植物为食。雌雄都有细长、近乎平行的角，褐色身体带白色面部斑纹与腿部标记。真实野外记录很少，相机影像、短期圈养记录和村落中的遗存为研究提供线索，繁殖和群体生活仍有许多未知。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '两根长角和白脸纹',
      body: '中南大羚有两根细长、近乎平行的角，褐色身体上带白色面部斑纹和腿部标记。雌雄都可有角，学名为 Pseudoryx nghetinhensis，属于牛科。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它生活在安南山脉的湿润常绿林。相机影像、早期短期圈养记录和村落中的遗存提供线索，真实野外记录仍很少。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它摄取植物性食物。植物旁的重建图不能确认画中某种植物就是本种食物。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '幼仔由母体产出，随后吃奶。繁殖和育幼资料有限，每胎数量、妊娠期与繁殖季仍需更多本种研究。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '中南大羚也叫武广牛、索拉羚。IUCN 与 WWF 将它列为极危动物，套索陷阱和森林破碎威胁着它的生存。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护安南山脉常绿林，减少套索陷阱与森林破碎。重建图不能当作新的野外记录、饮水点或行动路线。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '猎人家中的长角头骨',
      body: '1992 年，越南林业部门与 WWF 联合调查，在猎人家里发现带长直角的头骨，科学家由此确认此前未正式描述的牛科动物。Dung 等人在 1993 年发表 Pseudoryx nghetinhensis。Saola 在当地语言中有“纺锤角”的意思；“武广牛”这个别名也保留了调查地武广的线索。当地人此前已有认识，科学描述的日期不等于人类首次见到它。',
    },
  ],
  "keyFacts": [
    'AI 形态重建；雌雄都有两根长角，外形比例不能实测。',
    '情景重建，不能当作新的野外照片或活动证据。',
    '完整角尖可见，斑纹与角长不供测量或个体识别。',
    '环境示意，未确认画中植物为本种特定食物。',
    '重建位置不代表实测饮水点或固定行动路线。',
    '中南大羚也叫武广牛、索拉羚。IUCN 与 WWF 将它列为极危动物，套索陷阱和森林破碎威胁着它的生存。',
    'IUCN 与 WWF 将本种列为极危；该评估的确切日期与当前全球种群趋势尚未确认。',
  ],
  "threats": [
    "钢丝套索捕猎",
    "森林栖息地改变"
  ],
  "conservationActions": [
    '保护湿润常绿林及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "湿润常绿林"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "两根长角和白脸纹"
    },
    {
      "key": "conservation",
      "label": '保护等级',
      "value": '极危（CR）',
      "note": 'IUCN 与 WWF 将本种列为极危；该评估的确切日期与当前全球种群趋势尚未确认。'
    }
  ],
  "media": {
    "image": "./images/species/saola/01-cover.webp",
    "alt": "中南大羚及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/saola/02-observation.webp",
        "title": "两根长角和白脸纹",
        "alt": "中南大羚：两根长角和白脸纹，AI 生成科学情景重建",
        "caption": 'AI 生成科学情景重建。雌雄都有两根长角，角尖、白色脸纹和身体比例用于外观观察，不能实测。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saola/03-observation.webp",
        "title": "森林中的身体轮廓",
        "alt": "中南大羚：森林中的身体轮廓，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。情景重建，不能当作新的野外照片或活动证据。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saola/04-observation.webp",
        "title": "沿着角看到尖端",
        "alt": "中南大羚：沿着角看到尖端，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整角尖可见，斑纹与角长不供测量或个体识别。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saola/05-observation.webp",
        "title": "常绿林的植被",
        "alt": "中南大羚：常绿林的植被，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。环境示意，未确认画中植物为本种特定食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/saola/06-observation.webp",
        "title": "林间溪流旁",
        "alt": "中南大羚：林间溪流旁，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。重建位置不代表实测饮水点或固定行动路线。",
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
      "title": "GBIF：接受学名与分类入口",
      "url": "https://www.gbif.org/species/4262655",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "密歇根大学 ADW：中南大羚",
      "url": "https://animaldiversity.org/accounts/Pseudoryx_nghetinhensis/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WWF：中南大羚的形态、范围与保护",
      "url": "https://www.worldwildlife.org/species/saola/",
      "kind": "conservation",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'Nature 1993：越南新牛科动物的原始描述',
      url: 'https://www.nature.com/articles/363443a0',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
    {
      title: 'IUCN SSC：加强中南大羚搜寻工作的声明',
      url: 'https://iucn.org/news/species-survival-commission/202108/iucn-ssc-experts-urge-immediate-action-find-saola-its-too-late',
      kind: 'conservation',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
