import type { Species } from '../../types/species.ts';

const profile = {
  "id": "kittis-hog-nosed-bat",
  "slug": "kittis-hog-nosed-bat",
  "names": {
    "zh": "猪鼻蝠",
    "en": "Kitti’s Hog-nosed Bat",
    "aliases": [
      "基蒂氏猪鼻蝠",
      "大黄蜂蝠"
    ]
  },
  "scientificName": "Craseonycteris thonglongyai",
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
      "scientificName": "Chiroptera",
      "zhName": "翼手目"
    },
    "family": {
      "scientificName": "Craseonycteridae",
      "zhName": "猪鼻蝠科"
    },
    "genus": {
      "scientificName": "Craseonycteris",
      "zhName": "猪鼻蝠属"
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
      "terrestrial"
    ],
    "continents": [],
    "regions": [
      "泰国西部与缅甸东南部"
    ],
    "countries": [
      "泰国",
      "缅甸"
    ],
    "range": '泰国西部与缅甸东南部的部分地区。'
  },
  "habitats": [
    {
      "name": "石灰岩洞穴",
      "realm": "terrestrial",
      "description": '泰国西部与缅甸东南部的石灰岩洞穴及邻近觅食林地。',
      "isPrimary": true
    }
  ],
  "measurements": {
    "length": {
      "min": 29,
      "max": 33,
      "unit": "mm",
      "note": "成体头体长，ADW 汇总；不含展开翼宽。"
    },
    "weight": {
      "min": 1.7,
      "max": 2,
      "unit": "g",
      "note": "成体体重，ADW 汇总；不是每个个体的固定值。"
    }
  },
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "小型昆虫"
    ],
    "description": '以小昆虫为食，使用回声定位探查环境。'
  },
  "tags": [
    "猪鼻蝠",
    "石灰岩洞穴"
  ],
  "summary": '猪鼻蝠在石灰岩洞穴栖息，到林地上方捕食小昆虫。它有短宽鼻子和较大耳朵，成体体重约 1.7–2 克。',
  "description": '猪鼻蝠在泰国西部和缅甸东南部的石灰岩洞穴栖息，外出到林地上方捕捉小昆虫，用回声定位探查环境。它的短宽鼻部有两个相距明显的鼻孔，耳朵相对身体较大。成体头体长约 29–33 毫米，体重约 1.7–2 克，翅膜由延长的手指等结构支撑。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '像小猪的鼻子',
      body: '它有短宽的鼻子，两个鼻孔相距明显，耳朵相对身体较大。成体头体长约 29–33 毫米，体重约 1.7–2 克；放大图不能用于比较真实大小。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它在石灰岩洞穴栖息，外出到林地上方寻找小型昆虫。翅膜由延长的手指等结构支撑，群栖图不代表洞穴的真实数量。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它以小昆虫为食，用回声定位探查环境。回声定位不能直接从静态飞行图看见。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '它胎生并哺乳，属于猪鼻蝠科。没有外露的尾巴，但不能据此描述为完全没有尾部骨骼；成体外形与内部解剖分别说明。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Craseonycteris thonglongyai。头体长和体重来自物种资料，放大图与岩石纹理不是测量尺度。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护石灰岩洞穴和附近觅食林地，避免惊扰群栖。放大图可以观察鼻孔位置，不能当作真实群体计数或尺寸参照。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '赛育洞穴里采到的小蝙蝠',
      body: '1973 年 10 月，Kitti Thonglongya 带领团队在泰国赛育瀑布附近洞穴采到尚未确认的蝙蝠。Hill 在 1974 年描述 Craseonycteris thonglongyai，确认它代表一个新的哺乳动物科。英文名 Kitti’s Hog-nosed Bat 保留采集者的名字，中文“猪鼻”提示短宽鼻部。',
    },
  ],
  "keyFacts": [
    '局部放大重建，非实测比例；鼻孔之间有较宽的间隔。',
    '安静栖息情景，没有翻动或手持动物。',
    '完整翼尖可见，不能从静态图测量速度或确认悬停。',
    '放大展示，岩石纹理不是校准过的尺寸参照。',
    '群栖环境重建，不代表实际群体数量或密度。',
    '本种为 Craseonycteris thonglongyai。头体长和体重来自物种资料，放大图与岩石纹理不是测量尺度。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "洞穴栖息点干扰",
    "周边林地改变"
  ],
  "conservationActions": [
    '保护石灰岩洞穴及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {
    "adultLengthCm": [
      2.9,
      3.3
    ],
    "adultMassKg": [
      0.0017,
      0.002
    ]
  },
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "石灰岩洞穴"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "像小猪的鼻子"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/kittis-hog-nosed-bat/01-cover.webp",
    "alt": "猪鼻蝠及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/kittis-hog-nosed-bat/02-observation.webp",
        "title": "像小猪的鼻子",
        "alt": "猪鼻蝠：像小猪的鼻子，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。局部放大重建，非实测比例；鼻孔之间有较宽的间隔。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kittis-hog-nosed-bat/03-observation.webp",
        "title": "石灰岩上的栖息姿态",
        "alt": "猪鼻蝠：石灰岩上的栖息姿态，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。安静栖息情景，没有翻动或手持动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kittis-hog-nosed-bat/04-observation.webp",
        "title": "林地上方的飞行",
        "alt": "猪鼻蝠：林地上方的飞行，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整翼尖可见，不能从静态图测量速度或确认悬停。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kittis-hog-nosed-bat/05-observation.webp",
        "title": "小身体与石面",
        "alt": "猪鼻蝠：小身体与石面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。放大展示，岩石纹理不是校准过的尺寸参照。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/kittis-hog-nosed-bat/06-observation.webp",
        "title": "洞壁上的分散个体",
        "alt": "猪鼻蝠：洞壁上的分散个体，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。群栖环境重建，不代表实际群体数量或密度。",
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
      "url": "https://www.gbif.org/species/2433358",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "密歇根大学 ADW：猪鼻蝠",
      "url": "https://animaldiversity.org/accounts/Craseonycteris_thonglongyai/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      title: '泰国自然史学报：猪鼻蝠科学发现与洞穴调查',
      url: 'https://thesiamsociety.org/wp-content/uploads/2020/04/NHBSS_039_1e_Duangkhae_SearchForKittis.pdf',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
