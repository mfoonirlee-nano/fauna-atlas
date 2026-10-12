import type { Species } from '../../types/species.ts';

const profile = {
  "id": "alpine-newt",
  "slug": "alpine-newt",
  "names": {
    "zh": "高山蝾螈",
    "en": "Alpine Newt"
  },
  "scientificName": "Ichthyosaura alpestris",
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
      "scientificName": "Caudata",
      "zhName": "有尾目"
    },
    "family": {
      "scientificName": "Salamandridae",
      "zhName": "蝾螈科"
    },
    "genus": {
      "scientificName": "Ichthyosaura",
      "zhName": "高山蝾螈属"
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
    "assessor": '名称与分布依 AMNH 当前口径，排除已拆分的近缘种；LC 为所引 EUNIS 全球评估记录，拆分后的独立评估日期与种群趋势尚未确认。'
  },
  "distribution": {
    "realms": [
      "freshwater",
      "terrestrial"
    ],
    "continents": [
      "欧洲"
    ],
    "regions": [
      "欧洲中部及邻近地区的池塘和林地"
    ],
    "countries": [
      "德国",
      "法国",
      "比利时",
      "波兰"
    ],
    "range": "欧洲中部及邻近地区的池塘和林地。国家列表仅列代表性分布地。"
  },
  "habitats": [
    {
      "name": "欧洲中部及邻近地区的池塘和林地",
      "realm": "freshwater",
      "description": "欧洲中部及邻近地区的池塘和林地。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫幼虫",
      "小型甲壳动物",
      "其他小型无脊椎动物"
    ],
    "description": "食物包括昆虫幼虫、小型甲壳动物、其他小型无脊椎动物。"
  },
  "tags": [
    "高山蝾螈",
    "尾巴帮助游泳"
  ],
  "summary": '高山蝾螈在池塘繁殖、捕食，也在潮湿林地藏身。繁殖期雄性背部蓝灰，腹面橙红，雌性外观不同。',
  "description": '高山蝾螈生活在欧洲中部及邻近地区的池塘和林地。繁殖季它在水中摆动侧扁尾巴，捕食小型无脊椎动物；陆地阶段常藏在潮湿隐蔽处。雄性背部带蓝灰色，腹面橙红、通常无明显斑点；雌性常有褐灰或斑驳背部，缺少雄性繁殖期的低背嵴。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '尾巴帮助游泳',
      body: '高山蝾螈在水里摆动侧扁的尾巴。图中为繁殖期雄性，背部带蓝灰色。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '橙色的肚皮',
      body: '高山蝾螈的腹面呈橙红色，通常没有明显斑点，体侧则有暗色斑点。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '雌性的外形',
      body: '雌性背部常呈褐灰色或带斑驳花纹，没有繁殖期雄性那样的低背嵴。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '也在陆地生活',
      body: '高山蝾螈会在池塘繁殖，也在附近林地活动，陆地阶段常躲在潮湿隐蔽处。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '水草旁停一停',
      body: '它在池塘里捕食小型无脊椎动物。看看尾巴和四条小腿怎样摆放。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保留清洁池塘和周围林地，避免把蝾螈搬到别处水体。旧资料包含的部分近缘种已有拆分，分布与保护记录需要结合现行物种范围理解。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '北阿尔卑斯山的模式记录',
      body: 'Laurenti 在 1768 年以 Triton alpestris 描述高山蝾螈，原始模式产地记录在奥地利北阿尔卑斯山的厄策尔山附近。后来研究者调整它所属的属，采用 Ichthyosaura alpestris。早期名称与山地记录有关，但它的生活还包括池塘繁殖和陆地隐蔽两个阶段。',
    },
  ],
  "keyFacts": [
    "高山蝾螈在水里摆动侧扁的尾巴。图中为繁殖期雄性，背部带蓝灰色。",
    "高山蝾螈的腹面呈橙红色，通常没有明显斑点，体侧则有暗色斑点。",
    "雌性背部常呈褐灰色或带斑驳花纹，没有繁殖期雄性那样的低背嵴。",
    "高山蝾螈会在池塘繁殖，也在附近林地活动，陆地阶段常躲在潮湿隐蔽处。",
    "它在池塘里捕食小型无脊椎动物。看看尾巴和四条小腿怎样摆放。"
  ],
  "threats": [
    "繁殖水体消失与污染",
    "两栖动物疾病传播"
  ],
  "conservationActions": [
    "保留清洁池塘和周围林地，不把蝾螈搬到别处的水体。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "尾巴帮助游泳"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "欧洲中部及邻近地区的池塘和林地"
    }
  ],
  "media": {
    "image": "./images/species/alpine-newt/01-cover.webp",
    "alt": "高山蝾螈在栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/alpine-newt/02-observation.webp",
        "title": "尾巴帮助游泳",
        "alt": "高山蝾螈：尾巴帮助游泳",
        "caption": "AI 生成科学情景重建。高山蝾螈在水里摆动侧扁的尾巴。图中为繁殖期雄性，背部带蓝灰色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpine-newt/03-observation.webp",
        "title": "橙色的肚皮",
        "alt": "高山蝾螈：橙色的肚皮",
        "caption": "AI 生成科学情景重建。高山蝾螈的腹面呈橙红色，通常没有明显斑点，体侧则有暗色斑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpine-newt/04-observation.webp",
        "title": "雌性的外形",
        "alt": "高山蝾螈：雌性的外形",
        "caption": "AI 生成科学情景重建。雌性背部常呈褐灰色或带斑驳花纹，没有繁殖期雄性那样的低背嵴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpine-newt/05-observation.webp",
        "title": "也在陆地生活",
        "alt": "高山蝾螈：也在陆地生活",
        "caption": "AI 生成科学情景重建。高山蝾螈会在池塘繁殖，也在附近林地活动，陆地阶段常躲在潮湿隐蔽处。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/alpine-newt/06-observation.webp",
        "title": "水草旁停一停",
        "alt": "高山蝾螈：水草旁停一停",
        "caption": "AI 生成科学情景重建。它在池塘里捕食小型无脊椎动物。看看尾巴和四条小腿怎样摆放。",
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
      "title": "AMNH：高山蝾螈现行名称与分布",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Salamandridae/Pleurodelinae/Ichthyosaura/Ichthyosaura-alpestris",
      "kind": "taxonomy",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "Froglife：高山蝾螈雌雄与水陆生活",
      "url": "https://www.froglife.org/info-advice/amphibians-and-reptiles/alpine-newt/",
      "kind": "ecology",
      "accessedAt": "2026-09-21"
    },
    {
      "title": "欧洲环境署 EUNIS：全球与欧洲保护状态",
      "url": "https://eunis.eea.europa.eu/species/Ichthyosaura%20alpestris",
      "kind": "conservation",
      "accessedAt": "2026-09-21"
    }
  ],
  "featured": true,
  "publishedAt": "2026-09-21",
  "updatedAt": "2026-09-21"
} as const satisfies Species;

export default profile;
