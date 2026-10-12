import type { Species } from '../../types/species.ts';

const profile = {
  "id": "ceylon-caecilian",
  "slug": "ceylon-caecilian",
  "names": {
    "zh": "锡兰鱼螈",
    "en": "Ceylon Caecilian"
  },
  "scientificName": "Ichthyophis glutinosus",
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
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
    },
    "order": {
      "scientificName": "Gymnophiona",
      "zhName": "蚓螈目"
    },
    "family": {
      "scientificName": "Ichthyophiidae",
      "zhName": "鱼螈科"
    },
    "genus": {
      "scientificName": "Ichthyophis",
      "zhName": "鱼螈属"
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
    "assessor": '全球保护等级及评估年份尚未确认；NE 表示资料不完整，不表示本种安全或实际未受评估。全球种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "terrestrial",
      "freshwater"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "斯里兰卡中部与南部"
    ],
    "countries": [
      "斯里兰卡"
    ],
    "range": '斯里兰卡中部与南部的特有种；印度等其他地区的旧同名记录可能属于其他物种。',
    "endemicTo": [
      "斯里兰卡"
    ]
  },
  "habitats": [
    {
      "name": "湿润林地土壤与邻近淡水",
      "realm": "terrestrial",
      "description": '斯里兰卡中部、南部的湿润林地土壤及幼体发育所需的邻近淡水。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蚯蚓等土壤无脊椎动物（成体）",
      "水生小动物（幼体）"
    ],
    "description": '成体吃蚯蚓等土壤小动物，水生幼体吃水中的小型动物。'
  },
  "tags": [
    "锡兰鱼螈",
    "湿润林地土壤与邻近淡水"
  ],
  "summary": '锡兰鱼螈成体在湿土找小动物，幼体在淡水发育。无足身体有黄色侧纹，雌性在陆地湿巢产卵并护卵。',
  "description": '锡兰鱼螈只在斯里兰卡中部、南部生活，成体在湿润土壤中找蚯蚓等小动物，幼体在淡水发育。身体细长无足，深褐到紫褐皮肤两侧有黄纵纹和表面环沟，头有小眼与感觉触突。雌性在水边湿润陆地巢产卵、护卵，幼体孵出后入水，随后变态为地下生活的成体。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '无足身体侧面的黄线',
      body: '成体身体细长且没有四肢，深褐至紫褐色皮肤两侧有黄色纵纹，表面有环状沟。头部有小眼与感觉触突。它是两栖动物；环沟不表示蚯蚓那样的身体分节。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '湿润林地土壤与邻近淡水',
      body: '本种为斯里兰卡特有种，接受分布为岛内中部和南部。成体多在湿润土壤中生活，幼体在淡水中发育。旧资料中来自印度或其他地区的同名记录可能涉及其他物种。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '成体吃蚯蚓等土壤小动物，水生幼体吃水中的小型动物。野外观察不翻土或接触动物。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '雌性在靠近水体的湿润陆地巢中产卵并护卵。孵出的幼体入水，有尾鳍，随后变态为地下生活的成体。1987 年培养研究区分了幼体较明显的眼睛、尾鳍，以及成体的触突、环沟和黄色侧纹。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Ichthyophis glutinosus，属于蚓螈目、鱼螈科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '保留湿土与邻近淡水，不翻挖巢穴。成体黄色侧纹、触突与水生幼体尾鳍需要分阶段认识，皮肤环沟不表示蚯蚓式身体分节。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1754 年图中的标本与“锡兰”旧称',
      body: 'Linnaeus 在 1758 年以 Caecilia glutinosa 描述本种，今天采用 Ichthyophis glutinosus。描述所对应的标本也出现在他 1754 年发表的图中，模式标本仍有瑞典博物馆记录。中文“锡兰”使用斯里兰卡的旧称，印度等地的旧同名记录可能属于其他物种。',
    },
  ],
  "keyFacts": [
    '成体身体细长且没有四肢，深褐至紫褐色皮肤两侧有黄色纵纹，表面有环状沟。头部有小眼与感觉触突。它是两栖动物；环沟不表示蚯蚓那样的身体分节。',
    '雌性在靠近水体的湿润陆地巢中产卵并护卵。孵出的幼体入水，有尾鳍，随后变态为地下生活的成体。1987 年培养研究区分了幼体较明显的眼睛、尾鳍，以及成体的触突、环沟和黄色侧纹。',
    '图片为 AI 科学情景重建，尺度非实测；静图不代表连续动作。',
  ],
  "threats": [
    "湿润土壤和林地栖息环境改变"
  ],
  "conservationActions": [
    "保留湿润林地与相邻水体"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "无足身体侧面的黄线"
    }
  ],
  "media": {
    "image": "./images/species/ceylon-caecilian/01-cover.webp",
    "alt": "锡兰鱼螈及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/ceylon-caecilian/02-observation.webp",
        "title": "落叶间的黄色侧纹",
        "alt": "锡兰鱼螈：落叶间的黄色侧纹，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体重建，观察侧面的黄色纵纹。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ceylon-caecilian/03-observation.webp",
        "title": "头部的小眼与触突",
        "alt": "锡兰鱼螈：头部的小眼与触突，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体头部放大重建，不按比例，不能用于鉴定或器官测量。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ceylon-caecilian/04-observation.webp",
        "title": "土壤中的身体",
        "alt": "锡兰鱼螈：土壤中的身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。地下环境剖面教学重建，剖面不代表真实暴露的巢穴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ceylon-caecilian/05-observation.webp",
        "title": "陆地巢中的护卵",
        "alt": "锡兰鱼螈：陆地巢中的护卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雌性与卵的繁殖重建，卵留在湿润陆地巢中。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/ceylon-caecilian/06-observation.webp",
        "title": "淡水中的幼体",
        "alt": "锡兰鱼螈：淡水中的幼体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水生幼体重建，尾鳍和成体的短尾分别说明。",
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
      "title": "AMNH：本种归属、斯里兰卡分布与旧名范围",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Ichthyophiidae/Ichthyophis/Ichthyophis-glutinosus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "密歇根大学 ADW：形态、食物与护卵资料",
      "url": "https://animaldiversity.org/accounts/Ichthyophis_glutinosus/",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "Breckenridge 等 1987：本种幼体与变态研究",
      "url": "https://doi.org/10.1111/jzo.1987.211.3.437",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
