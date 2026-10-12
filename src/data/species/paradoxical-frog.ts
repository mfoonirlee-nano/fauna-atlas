import type { Species } from '../../types/species.ts';

const profile = {
  "id": "paradoxical-frog",
  "slug": "paradoxical-frog",
  "names": {
    "zh": "奇异多指节蟾",
    "en": "Paradoxical Frog"
  },
  "scientificName": "Pseudis paradoxa",
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
      "scientificName": "Anura",
      "zhName": "无尾目"
    },
    "family": {
      "scientificName": "Hylidae",
      "zhName": "雨蛙科"
    },
    "genus": {
      "scientificName": "Pseudis",
      "zhName": "多指节蟾属"
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
      "freshwater"
    ],
    "continents": [
      "南美洲",
      "北美洲"
    ],
    "regions": [
      "南美洲北部与特立尼达岛"
    ],
    "countries": [
      "哥伦比亚",
      "委内瑞拉",
      "圭亚那",
      "苏里南",
      "法国",
      "巴西",
      "秘鲁",
      "玻利维亚",
      "特立尼达和多巴哥"
    ],
    "range": '南美洲北部及特立尼达岛的部分淡水湿地与池塘。其他种的旧亚种记录需与本种区分。'
  },
  "habitats": [
    {
      "name": "植被丰富的淡水池塘",
      "realm": "freshwater",
      "description": '南美洲北部及特立尼达岛植被丰富的淡水池塘和湿地。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫等小型无脊椎动物（成体）"
    ],
    "description": "成蛙取食昆虫等小型无脊椎动物；蝌蚪和成蛙属于不同发育阶段，不能从成蛙食性推断蝌蚪食性。"
  },
  "tags": [
    "奇异多指节蟾",
    "植被丰富的淡水池塘"
  ],
  "summary": '奇异多指节蟾在淡水植物间活动。蝌蚪总长可超过成蛙吻肛长，变态时吸收长尾，两个阶段长度口径不同。',
  "description": '奇异多指节蟾在南美洲北部及特立尼达岛的淡水池塘、湿地生活，常在水生植物间活动，成蛙吃昆虫等小动物。成蛙绿褐带深斑，眼睛较高，后腿有力，后足有蹼。蝌蚪总长可超过成蛙从吻到肛的长度，但包含尾巴；变态后尾部被吸收。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '大蝌蚪与小成蛙',
      body: '成蛙的眼睛偏高，后腿有力，后足趾间有蹼，体色常为绿褐色并带深色斑纹。它属于雨蛙科，名称中的“蟾”不表示蟾蜍科。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '植被丰富的淡水池塘',
      body: '它在南美洲北部及特立尼达岛的淡水湿地、池塘生活，常在水生植物间活动。属内其他种的旧亚种记录不能直接合并。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '成蛙取食昆虫等小型无脊椎动物；蝌蚪和成蛙属于不同发育阶段，不能从成蛙食性推断蝌蚪食性。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '卵在水中发育为蝌蚪，蝌蚪生长后再变态为蛙。大型蝌蚪的总长包含长尾，能超过成蛙的吻肛长；变态时尾部吸收，不能把两种长度口径当作同一项体长。特立尼达研究记录了本种的幼体生长与变态。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Pseudis paradoxa，属于无尾目、雨蛙科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '保留池塘水生植物与幼体发育空间。共读可比较大蝌蚪与成蛙，教学并置图不是实测比例，也不是同一个体的连续记录。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '早期动物图与大蝌蚪的对照',
      body: 'Linnaeus 在 1758 年以 Rana paradoxa 描述本种，产地记录为苏里南，今天采用 Pseudis paradoxa。描述还参考了 Seba 和 Merian 更早发表的动物图。中文“奇异”可以联系大蝌蚪与较短成蛙的对照，不过蝌蚪总长包含尾巴，成蛙吻肛长不包含尾巴，两种测量口径需要分开。',
    },
  ],
  "keyFacts": [
    '成蛙的眼睛偏高，后腿有力，后足趾间有蹼，体色常为绿褐色并带深色斑纹。它属于雨蛙科，名称中的“蟾”不表示蟾蜍科。',
    '卵在水中发育为蝌蚪，蝌蚪生长后再变态为蛙。大型蝌蚪的总长包含长尾，能超过成蛙的吻肛长；变态时尾部吸收，不能把两种长度口径当作同一项体长。特立尼达研究记录了本种的幼体生长与变态。',
    '图片为 AI 科学情景重建，尺度非实测；静图不代表连续动作。',
  ],
  "threats": [
    "淡水湿地改变与水质下降"
  ],
  "conservationActions": [
    "保留水生植被与湿地环境"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "大蝌蚪与小成蛙"
    }
  ],
  "media": {
    "image": "./images/species/paradoxical-frog/01-cover.webp",
    "alt": "奇异多指节蟾及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/paradoxical-frog/02-observation.webp",
        "title": "浮叶上的成蛙",
        "alt": "奇异多指节蟾：浮叶上的成蛙，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体外形重建，可找眼睛、后腿和趾间蹼。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paradoxical-frog/03-observation.webp",
        "title": "水线上的眼睛",
        "alt": "奇异多指节蟾：水线上的眼睛，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体头部观察，不用静图推断呼吸过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paradoxical-frog/04-observation.webp",
        "title": "水中的大型蝌蚪",
        "alt": "奇异多指节蟾：水中的大型蝌蚪，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。蝌蚪阶段重建，总长包含尾巴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paradoxical-frog/05-observation.webp",
        "title": "蝌蚪与成蛙对照",
        "alt": "奇异多指节蟾：蝌蚪与成蛙对照，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼体与成体的教学并置，不是实测比例，也不是同一个体的连续记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/paradoxical-frog/06-observation.webp",
        "title": "从上方看后足",
        "alt": "奇异多指节蟾：从上方看后足，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成体背面观察，细小趾部形态不能替代鉴定。",
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
      "title": "Downie 等 2010：特立尼达成蛙与变态后期个体的食性研究",
      "url": "https://www.thebhs.org/publications/the-herpetological-journal/volume-20-number-2-april-2010/579-08-the-diet-of-the-paradoxical-frog-i-pseudis-paradoxa-i-in-trinidad-west-indies",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "AMNH：接受名称、分类与当前分布",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Hylidae/Hylinae/Pseudis/Pseudis-paradoxa",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "British Herpetological Society：特立尼达幼体生长与变态研究",
      "url": "https://www.thebhs.org/publications/the-herpetological-journal/volume-19-number-1-january-2009/537-02-the-paradoxical-frog-i-pseudis-paradoxa-i-larval-habitat-growth-and-metamorphosis",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "Zootaxa 2022：亚马孙蝌蚪的本种形态描述",
      "url": "https://treatment.plazi.org/id/B31987BBFF80FFA9E0D05704891FF97F/5",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'AMNH：奇异多指节蟾原名与早期图像引用',
      url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Hylidae/Pseudis/Pseudis-paradoxa',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
