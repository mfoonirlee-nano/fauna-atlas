import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sea-firefly",
  "slug": "sea-firefly",
  "names": {
    "zh": "海萤",
    "en": "Sea Firefly"
  },
  "scientificName": "Vargula hilgendorfii",
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
      "scientificName": "Ostracoda",
      "zhName": "介形纲"
    },
    "order": {
      "scientificName": "Myodocopida",
      "zhName": "筋柄目"
    },
    "family": {
      "scientificName": "Cypridinidae",
      "zhName": "海萤科"
    },
    "genus": {
      "scientificName": "Vargula",
      "zhName": "海萤属"
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
      "marine"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "日本近岸海域"
    ],
    "countries": [
      "日本"
    ],
    "range": "日本近岸沙泥底有本种记录，研究地点包含九州天草和大阪湾；不把局部调查当作全球分布边界。"
  },
  "habitats": [
    {
      "name": "近岸沙底",
      "realm": "marine",
      "description": "日本近岸沙泥底有本种记录，研究地点包含九州天草和大阪湾；不把局部调查当作全球分布边界。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "动物性食物"
    ],
    "description": "取食动物性食物。原始行为研究记录在鱼尸上取食；不据重建图限定完整食谱。"
  },
  "tags": [
    "海萤",
    "近岸沙底"
  ],
  "summary": '海萤夜间游动，日间可藏在沙泥底。它把蓝色发光分泌物释放到水中，雌性在壳内携带卵和胚胎。',
  "description": '海萤是日本近岸沙泥底记录到的小甲壳动物，身体藏在双瓣外壳内，附肢从腹侧开口伸出，帮助游动。它日间可藏在底质中，夜间活动，研究记录过在鱼尸上取食。蓝光来自释放到水里的发光分泌物，外壳不会持续发光。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '像小盒子的壳',
      body: '双瓣外壳包围身体，附肢从腹侧开口伸出。属于甲壳类，名称里的萤不表示萤火虫。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '夜晚游出沙底',
      body: '它有夜间活动记录，附肢帮助游动。划动过程要结合连续自然影像观察。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '水里的蓝光',
      body: '蓝光来自释放到水中的分泌物。外壳本身不会持续发出蓝光。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '沙粒之间',
      body: '它日间可隐藏在底质中。图中沙粒与动物的大小不是测量尺度。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '壳内的育幼空间',
      body: '雌性在壳内育幼腔携带卵和胚胎。天草研究记录了当地生活史的季节变化，不能据此确定所有地点的繁殖季。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '名字里的“萤”来自水中的蓝光',
      body: 'Müller 在 1890 年发表了海萤的科学描述，今天采用 Vargula hilgendorfii。中文名“海萤”提示它释放到水中的蓝色发光分泌物，它实际是甲壳动物。天草的生活史研究还记录了雌性在壳内育幼腔携带卵与胚胎，季节性结果只适用于研究地点。',
    },
  ],
  "keyFacts": [
    '双瓣外壳包围身体，附肢从腹侧开口伸出。属于甲壳类，名称里的萤不表示萤火虫。',
    '它有夜间活动记录，附肢帮助游动。划动过程要结合连续自然影像观察。',
    '雌性在壳内育幼腔携带卵和胚胎。天草研究记录了当地生活史的季节变化，不能据此确定所有地点的繁殖季。',
  ],
  "threats": [
    '全球物种级威胁排序尚未确认。',
  ],
  "conservationActions": [
    '结合自然影像和研究资料认识蓝色发光分泌物。',
    '减少沿岸污染，不取走活体。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近岸沙底"
    },
    {
      "key": "structure",
      "label": "观察重点",
      "value": "像小盒子的壳"
    }
  ],
  "media": {
    "image": "./images/species/sea-firefly/01-cover.webp",
    "alt": "海萤及其栖息环境，AI 生成科学情景重建，放大展示，非实测比例",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sea-firefly/02-observation.webp",
        "title": "像小盒子的壳",
        "alt": "海萤：像小盒子的壳，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。双瓣外壳包围身体，附肢从腹侧开口伸出。属于甲壳类，名称里的萤不表示萤火虫。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-firefly/03-observation.webp",
        "title": "夜晚游出沙底",
        "alt": "海萤：夜晚游出沙底，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。本种有夜间活动记录，附肢帮助游动。静态重建不能展示连续划动或速度。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-firefly/04-observation.webp",
        "title": "水里的蓝光",
        "alt": "海萤：水里的蓝光，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。发光来自释放到水中的分泌物，示意将光团与身体分开展示。外壳本身不持续发出蓝色霓虹光。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-firefly/05-observation.webp",
        "title": "沙粒之间",
        "alt": "海萤：沙粒之间，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。日间可隐藏在底质中，放大图没有实物比例尺，沙粒与动物比例不用于测量。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-firefly/06-observation.webp",
        "title": "壳内的育幼空间",
        "alt": "海萤：壳内的育幼空间，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。雌性在壳内育幼腔携带卵和胚胎。图中卵为结构重建，不用于计数；天草研究的季节性不能套用所有地点。",
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
      "title": "日本底栖生物学会：海萤生活史研究",
      "url": "https://www.jstage.jst.go.jp/article/benthos1996/57/2/57_2_103/_pdf",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "大阪湾沙滩海萤栖息地研究",
      "url": "https://www.jstage.jst.go.jp/article/jila/75/5/75_451/_article",
      "kind": "distribution",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "海萤形态与行为原始录像研究",
      "url": "https://cir.nii.ac.jp/crid/1361981470929203200",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "NOAA COPEPEDIA：分类入口",
      "url": "https://www.st.nmfs.noaa.gov/nauplius/media/copepedia/taxa/T4071355/",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF：海萤的科学命名记录',
      url: 'https://www.gbif.org/species/8058329',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
