import type { Species } from '../../types/species.ts';

const profile = {
  "id": "coastal-tailed-frog",
  "slug": "coastal-tailed-frog",
  "names": {
    "zh": "尾蟾",
    "en": "Coastal Tailed Frog"
  },
  "scientificName": "Ascaphus truei",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Chordata",
      "zhName": "脊索动物门"
    },
    "order": {
      "scientificName": "Anura",
      "zhName": "无尾目"
    },
    "family": {
      "scientificName": "Ascaphidae",
      "zhName": "尾蟾科"
    },
    "genus": {
      "scientificName": "Ascaphus",
      "zhName": "尾蟾属"
    },
    "class": {
      "scientificName": "Amphibia",
      "zhName": "两栖纲"
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
      "北美洲"
    ],
    "regions": [
      "北美洲太平洋沿岸的山地溪流"
    ],
    "countries": [
      "美国",
      "加拿大"
    ],
    "range": '北美洲太平洋沿岸的部分山地溪流；不包括内陆尾蟾 Ascaphus montanus 的范围。'
  },
  "habitats": [
    {
      "name": "冷凉清澈的森林溪流",
      "realm": "freshwater",
      "description": '北美洲太平洋沿岸冷凉、清澈且常年有水的森林溪流。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "昆虫等小型无脊椎动物（成体）",
      "石面生物膜（蝌蚪）"
    ],
    "description": '成体摄食昆虫等小型无脊椎动物；蝌蚪主要刮食溪石上的生物膜，即附着在石面的微生物与有机物薄层。'
  },
  "tags": [
    "尾蟾",
    "冷凉清澈的森林溪流"
  ],
  "summary": '尾蟾依赖冷凉森林溪流，蝌蚪用吸盘口部贴住石面刮食。成年雄性有尾状交配结构，雌性没有。',
  "description": '尾蟾在北美洲太平洋沿岸冷凉、清澈、常年有水的森林溪流生活。成体头宽扁、瞳孔竖直，吃昆虫等小动物；蝌蚪用腹面宽大吸盘口部贴住溪石，刮食表面生物膜。成年雄性的短尾状突起是交配结构，雌性没有，和蝌蚪真正的尾巴不同。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '成体的宽头与雄性的尾状突起',
      body: '尾蟾成体小，头宽而扁，体色常与溪石相近，瞳孔竖直。成年雄性有短尾状突起，这是交配结构，并非保留的蝌蚪尾巴；成年雌性没有这一突起。',
    },
    {
      key: 'ecology',
      label: '生活环境',
      title: '冷凉清澈的森林溪流',
      body: '它依赖冷凉、清澈、常年有水的森林溪流。蝌蚪腹面的宽大吸盘口部能贴住石面。当前 A. truei 指沿海物种，不能把内陆 A. montanus 的分布并入。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '成体吃昆虫等小型无脊椎动物；蝌蚪主要刮食溪石上的生物膜，即附着在石面的微生物与有机物薄层。两个阶段食物不同。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '本种体内受精，雌性把串状卵附在水下石块底面。蝌蚪在溪流中发育，变态时长出四肢并吸收幼体尾巴。成年雄性的尾状结构与幼体尾巴分别说明。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Ascaphus truei，属于无尾目、尾蟾科。分类图谱说明归属，不表示演化发生的时间。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '先找图中可见的特点',
      body: '保护冷凉溪流、溪石和林荫，不翻动附卵石块。蝌蚪吸盘口部、幼体尾巴与成年雄性突起需要分阶段认识。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '雄性的“尾”与沿海物种范围',
      body: 'Stejneger 在 1899 年描述 Ascaphus truei，原始标本产地为美国华盛顿州 Humptulips。中文“尾蟾”与英文 Tailed Frog 可以联系成年雄性的尾状交配结构。后来内陆的 Ascaphus montanus 被另列为物种，如今 A. truei 对应沿海尾蟾，旧广义分布需要区分。',
    },
  ],
  "keyFacts": [
    '尾蟾成体小，头宽而扁，体色常与溪石相近，瞳孔竖直。成年雄性有短尾状突起，这是交配结构，并非保留的蝌蚪尾巴；成年雌性没有这一突起。',
    '本种体内受精，雌性把串状卵附在水下石块底面。蝌蚪在溪流中发育，变态时长出四肢并吸收幼体尾巴。成年雄性的尾状结构与幼体尾巴分别说明。',
  ],
  "threats": [
    "森林与溪流栖息地改变",
    "水温升高与沉积物增加"
  ],
  "conservationActions": [
    "保护原生栖息环境，保留隐蔽空间，观察时不捕捉或诱发行为。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "冷凉清澈的森林溪流"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "蝌蚪贴住石头的吸盘口部"
    }
  ],
  "media": {
    "image": "./images/species/coastal-tailed-frog/01-cover.webp",
    "alt": "尾蟾及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/coastal-tailed-frog/02-observation.webp",
        "title": "溪石上的成年雌性",
        "alt": "尾蟾：溪石上的成年雌性，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成年雌性重建，没有雄性的短尾状结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/coastal-tailed-frog/03-observation.webp",
        "title": "成年雄性的水边姿态",
        "alt": "尾蟾：成年雄性的水边姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。成年雄性重建，短尾状突起可能因姿态遮挡；其生殖结构含义由资料说明。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/coastal-tailed-frog/04-observation.webp",
        "title": "贴住溪石的蝌蚪",
        "alt": "尾蟾：贴住溪石的蝌蚪，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。水生幼体重建，腹面吸盘口部附着石面；静图不证明吸附力。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/coastal-tailed-frog/05-observation.webp",
        "title": "腹面的吸盘口部",
        "alt": "尾蟾：腹面的吸盘口部，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。腹面观察的教学重建，不按比例，不能用于测量或鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/coastal-tailed-frog/06-observation.webp",
        "title": "变态中的幼蛙",
        "alt": "尾蟾：变态中的幼蛙，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。幼蛙阶段重建，残余幼体尾巴与成年雄性的突起不同。",
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
      "title": "AMNH：沿海尾蟾与尾蟾科归属",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Ascaphidae/Ascaphus/Ascaphus-truei",
      "kind": "taxonomy",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "华盛顿州鱼类与野生动物部门：形态与溪流生活",
      "url": "https://wdfw.wa.gov/species-habitats/species/ascaphus-truei",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "2011 原始研究：蝌蚪刮食石面生物膜",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4553603/",
      "kind": "ecology",
      "accessedAt": "2026-10-10"
    },
    {
      "title": "2019 原始研究：物种区分、雌雄结构与分布",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6417668/",
      "kind": "distribution",
      "accessedAt": "2026-10-10"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-10",
  "updatedAt": "2026-10-10"
} as const satisfies Species;

export default profile;
