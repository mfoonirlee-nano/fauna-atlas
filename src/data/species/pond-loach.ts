import type { Species } from '../../types/species.ts';

const profile = {
  "id": "pond-loach",
  "slug": "pond-loach",
  "names": {
    "zh": "泥鳅",
    "en": "Pond Loach"
  },
  "scientificName": "Misgurnus anguillicaudatus",
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
      "scientificName": "Actinopterygii",
      "zhName": "辐鳍鱼纲"
    },
    "order": {
      "scientificName": "Cypriniformes",
      "zhName": "鲤形目"
    },
    "family": {
      "scientificName": "Cobitidae",
      "zhName": "鳅科"
    },
    "genus": {
      "scientificName": "Misgurnus",
      "zhName": "泥鳅属"
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
    "assessedYear": 2011,
    "assessor": "FishBase 转录 IUCN 全球 LC，评估日期为 2011-09-20；全球种群趋势未独立核实。"
  },
  "distribution": {
    "realms": [
      "freshwater"
    ],
    "continents": [],
    "regions": [
      "东亚原生淡水水域"
    ],
    "countries": [],
    "range": '原生于中国、日本、朝鲜半岛和邻近东亚水系，利用河流、湖泊、池塘和稻田。北美等地另有引入种群。'
  },
  "habitats": [
    {
      "name": "泥底淡水与稻田",
      "realm": "freshwater",
      "description": '泥底淡水和稻田提供小动物，泥鳅会在底部与落叶附近觅食，也到水面吞入空气。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "蠕虫",
      "小型甲壳动物",
      "昆虫幼虫"
    ],
    "description": '泥鳅吃泥底和落叶附近的蠕虫、小型甲壳动物、昆虫幼虫等水生小动物。'
  },
  "tags": [
    "泥鳅",
    "泥底淡水与稻田"
  ],
  "summary": '泥鳅身体细长，嘴周围有五对须，圆尾与深色斑纹容易观察。它用鳃呼吸，也能吞空气辅助换气。',
  "description": '泥鳅在泥底和落叶附近找蠕虫、小型甲壳动物与昆虫幼虫。吞入的空气可经后肠辅助气体交换；它产卵并在体外受精，早期幼鱼形态与成体不同。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '嘴周围的小须与细长身体',
      body: '身体细长，黄褐至棕色底色带深斑，尾鳍较圆，嘴周围有五对须。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '泥底淡水与稻田',
      body: '东亚河流、湖泊、池塘和稻田是原生生活环境，USGS 另记录了北美等地的引入种群。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '泥底与落叶附近的小动物',
      body: '泥鳅在泥底与落叶附近吃蠕虫、小型甲壳动物和昆虫幼虫。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '产卵后在体外受精',
      body: '泥鳅产卵，在体外受精，早期幼鱼的须和鱼鳍会随发育变化。',
    },
    {
      key: 'taxonomy',
      label: '分类归属',
      title: '鳅科中的泥鳅',
      body: '泥鳅的学名为 Misgurnus anguillicaudatus，属于辐鳍鱼纲、鲤形目和鳅科。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '全球无危，趋势尚未确认',
      body: '全球 IUCN 等级为无危，FishBase 转引的评估日期为 2011-09-20。全球种群趋势尚未确认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '后肠也参与呼吸',
      body: 'Cantor 于 1842 年描述了这个物种，现用学名为 Misgurnus anguillicaudatus。2024 年研究用组织切片和影像分析泥鳅的消化道，讨论消化与呼吸区域的分工。泥鳅除鳃呼吸外，还能吞入空气，经后肠辅助气体交换，水面姿态图不能展示内部过程。',
    },
  ],
  "keyFacts": [
    '嘴周围有五对须，身体细长。',
    '尾鳍较圆，体表有深色斑纹。',
    '在泥底与落叶附近取食小动物。',
    '用鳃呼吸，也可吞入空气经后肠辅助换气。',
    '产卵并在体外受精。',
  ],
  "threats": [
    "人为引入可影响原生水生生态"
  ],
  "conservationActions": [
    "保护原生湿地和淡水生境",
    "不将养殖或观赏个体放入野外"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "嘴周围的小须与细长身体"
    }
  ],
  "media": {
    "image": "./images/species/pond-loach/01-cover.webp",
    "alt": "泥鳅及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/pond-loach/02-observation.webp",
        "title": "细长身体与圆尾",
        "alt": '细长身体与圆尾，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。成体全身侧面外观。图像尺度未经实测，单幅图只能展示姿态。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-loach/03-observation.webp",
        "title": "嘴边的小须",
        "alt": '嘴边的小须，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。放大重建，不用于须的准确计数。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-loach/04-observation.webp",
        "title": "泥底与落叶",
        "alt": '泥底与落叶，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。底部栖息情景，非实地记录。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-loach/05-observation.webp",
        "title": "靠近水面的姿态",
        "alt": '靠近水面的姿态，AI 生成科学情景重建',
        "caption": 'AI 生成科学情景重建。不以静图证明肠呼吸，也不展示内部器官。观察活体时不要进行离水或缺氧实验。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/pond-loach/06-observation.webp",
        "title": "水草根旁的鱼鳍",
        "alt": '水草根旁的鱼鳍，AI 生成科学情景重建',
        "caption": "AI 生成科学情景重建。斜上方观察成体身体与小鳍。",
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
      "title": "FishBase：分类、分布与全球保护评估日期",
      "url": "https://www.fishbase.se/summary/Misgurnus-anguillicaudatus.html",
      "kind": "general",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "2024 原始研究：泥鳅消化道与肠呼吸",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11201251/",
      "kind": "ecology",
      "accessedAt": "2026-10-11"
    },
    {
      "title": "USGS：泥鳅引入记录与原生范围",
      "url": "https://nas.er.usgs.gov/queries/greatLakes/FactSheet.aspx?H=&Potential=N&Species_ID=498&Type=0",
      "kind": "distribution",
      "accessedAt": "2026-10-11"
    },
    {
      title: 'GBIF：Misgurnus anguillicaudatus 的命名作者与年份',
      url: 'https://www.gbif.org/species/2367919',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-11",
  "updatedAt": "2026-10-11"
} as const satisfies Species;

export default profile;
