import type { Species } from '../../types/species.ts';

const profile = {
  "id": "frilled-shark",
  "slug": "frilled-shark",
  "names": {
    "zh": "皱鳃鲨",
    "en": "Frilled Shark"
  },
  "scientificName": "Chlamydoselachus anguineus",
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
      "scientificName": "Chondrichthyes",
      "zhName": "软骨鱼纲"
    },
    "order": {
      "scientificName": "Hexanchiformes",
      "zhName": "六鳃鲨目"
    },
    "family": {
      "scientificName": "Chlamydoselachidae",
      "zhName": "皱鳃鲨科"
    },
    "genus": {
      "scientificName": "Chlamydoselachus",
      "zhName": "皱鳃鲨属"
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
    "assessedYear": 2023,
    "assessor": '全球等级为 LC（无危），评估日期 2023-05-04，依据 FishBase 记录；澳大利亚报告也列全球 LC。当前种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "大西洋与太平洋的陆架外缘和陆坡"
    ],
    "countries": [
      "日本",
      "新西兰",
      "澳大利亚",
      "美国"
    ],
    "range": '大西洋与太平洋有分散记录，生活在部分陆架外缘和陆坡深水中。'
  },
  "habitats": [
    {
      "name": "深水陆坡与陆架外缘",
      "realm": "marine",
      "description": '大西洋与太平洋部分陆架外缘及陆坡的深水环境。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "鱿鱼",
      "硬骨鱼",
      "其他鲨鱼"
    ],
    "description": "摄食鱿鱼、硬骨鱼和其他鲨鱼。弯曲的三尖齿与口部形态可在资料图中查看，不把生成图作为精确齿数或摄食机制的证据。"
  },
  "tags": [
    "皱鳃鲨",
    "深水陆坡与陆架外缘"
  ],
  "summary": '皱鳃鲨在深水吃鱼和鱿鱼，细长身体只有一枚靠后背鳍。头后六对鳃裂形成皱褶，雌性产出幼鲨。',
  "description": '皱鳃鲨在大西洋与太平洋部分陆架外缘、陆坡深水中生活，吃鱿鱼、硬骨鱼和其他鲨鱼。深褐到灰褐身体细长，嘴位于头前端，六对鳃裂中第一对下缘在喉部相连，形成皱褶。只有一枚靠后的背鳍，口里有弯曲三尖齿。胚胎在母体内依靠卵黄发育，雌性产幼鲨。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '头后的六对皱褶鳃裂',
      body: '身体细长，体色深褐至灰褐，口部位于头的前端。它有六对鳃裂，第一对鳃裂的下缘在喉部相连，形成皱褶外观；背鳍只有一枚且位置靠后。它仍是鲨鱼，长形外观不表示鳗鱼。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '深水陆坡与陆架外缘',
      body: '大西洋与太平洋有分散记录，本种生活在陆架外缘和陆坡深水中。国家列表列代表地点，深海重建图的照明不表示自然光线。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '摄食鱿鱼、硬骨鱼和其他鲨鱼。弯曲的三尖齿与口部形态可在资料图中查看，不把生成图作为精确齿数或摄食机制的证据。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '胚胎在母体内发育，主要依靠卵黄营养，雌性产出幼鲨。寿命与妊娠时长资料仍有限。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Chlamydoselachus anguineus，属于六鳃鲨目、皱鳃鲨科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '全球保护等级为 LC（无危），评估日期为 2023-05-04，依据 FishBase 记录；澳大利亚报告也列全球 LC，种群趋势尚未确认。共读可观察鳃裂、鳍和口部，精确计数与测量需要真实资料。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '像披肩的鳃与像蛇的身体',
      body: 'Garman 在 1884 年发表 Chlamydoselachus anguineus 的科学描述。属名联系像披肩一样围在喉部的第一对鳃裂，种名 anguineus 是拉丁语“像蛇的”，指细长身体。中文“皱鳃”也提示喉部皱褶，这些名称形容外形，它实际仍是鲨鱼。',
    },
  ],
  "keyFacts": [
    '身体细长，体色深褐至灰褐，口部位于头的前端。它有六对鳃裂，第一对鳃裂的下缘在喉部相连，形成皱褶外观；背鳍只有一枚且位置靠后。它仍是鲨鱼，长形外观不表示鳗鱼。',
    '胚胎在母体内发育，主要依靠卵黄营养，雌性产出幼鲨。寿命与妊娠时长资料仍有限。',
    '图片为 AI 科学情景重建，尺度非实测；静图不代表连续动作。',
  ],
  "threats": [
    "深水拖网、延绳钓等渔业的兼捕"
  ],
  "conservationActions": [
    "记录深水兼捕并管理作业水深与渔具"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "头后的六对皱褶鳃裂"
    }
  ],
  "media": {
    "image": "./images/species/frilled-shark/01-cover.webp",
    "alt": "皱鳃鲨及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/frilled-shark/02-observation.webp",
        "title": "深水中的细长身体",
        "alt": "皱鳃鲨：深水中的细长身体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整身体重建，观察头、鳍与尾的相对位置。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-shark/03-observation.webp",
        "title": "头后的皱褶鳃裂",
        "alt": "皱鳃鲨：头后的皱褶鳃裂，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部侧面重建；六对鳃裂依据物种资料，生成细节不能代替计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-shark/04-observation.webp",
        "title": "口部与弯曲的齿",
        "alt": "皱鳃鲨：口部与弯曲的齿，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。口部放大教学重建，非实测比例。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-shark/05-observation.webp",
        "title": "靠后的背鳍与尾部",
        "alt": "皱鳃鲨：靠后的背鳍与尾部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整侧面重建，单枚背鳍的位置由资料解释。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/frilled-shark/06-observation.webp",
        "title": "陆坡上的深水环境",
        "alt": "皱鳃鲨：陆坡上的深水环境，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。环境重建，人工照明效果不表示自然光照。",
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
      "title": "FishBase：形态、分类与卵黄营养的生殖资料",
      "url": "https://www.fishbase.se/summary/Chlamydoselachus-anguineus.html",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "澳大利亚渔业研究报告：分布、栖息环境、兼捕与全球等级",
      "url": "https://www.fish.gov.au/docs/SharkReport/2023_FRDC_Chlamydoselachus_anguinea_final.pdf",
      "kind": "conservation",
      "accessedAt": "2026-10-10"
    },
    {
      title: 'ETYFish：皱鳃鲨学名含义',
      url: 'https://etyfish.org/chlamydoselachidae/',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
