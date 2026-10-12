import type { Species } from '../../types/species.ts';

const profile = {
  "id": "european-storm-petrel",
  "slug": "european-storm-petrel",
  "names": {
    "zh": "暴风海燕",
    "en": "European Storm Petrel"
  },
  "scientificName": "Hydrobates pelagicus",
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
      "scientificName": "Aves",
      "zhName": "鸟纲"
    },
    "order": {
      "scientificName": "Procellariiformes",
      "zhName": "鹱形目"
    },
    "family": {
      "scientificName": "Hydrobatidae",
      "zhName": "海燕科"
    },
    "genus": {
      "scientificName": "Hydrobates",
      "zhName": "海燕属"
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
      "marine"
    ],
    "continents": [],
    "regions": [
      "东北大西洋及地中海周边繁殖岛屿"
    ],
    "countries": [
      "英国",
      "爱尔兰"
    ],
    "range": '东北大西洋及地中海周边繁殖岛屿与邻近海域。'
  },
  "habitats": [
    {
      "name": "远洋与岩岛",
      "realm": "marine",
      "description": '海上觅食水域，以及东北大西洋和地中海周边岛屿的岩隙等繁殖处。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "浮游动物",
      "小鱼",
      "甲壳动物"
    ],
    "description": '摄食浮游动物、小鱼和甲壳动物，脚触水不表示每次都获得食物。'
  },
  "tags": [
    "暴风海燕",
    "远洋与岩岛"
  ],
  "summary": '暴风海燕在海面找小动物，觅食时脚可轻触水面。深色身体有白腰斑，尾端近方，利用海岛岩隙繁殖。',
  "description": '暴风海燕在东北大西洋和地中海周边岛屿繁殖，平时在海面附近寻找浮游动物、小鱼和甲壳动物。觅食时双翼抬起，脚可轻触水面。小身体深褐近黑，腰有白斑，尾端近方，嘴上有管状鼻孔。岩隙等隐蔽处提供繁殖空间。',
  "storySections": [
    {
      key: 'appearance',
      label: '外形观察',
      title: '白色腰斑',
      body: '暴风海燕体形小，羽毛深褐近黑，腰部有白斑，尾端近方而非深叉。嘴上有管状鼻孔，是鹱形目海鸟的一项观察特点。',
    },
    {
      key: 'movement',
      label: '生活环境',
      title: '在栖息地活动',
      body: '它在海面附近飞行，觅食时双翼抬起，脚可轻触水面。成年鸟利用岩隙繁殖，海上觅食与出入繁殖地是不同活动。',
    },
    {
      key: 'feeding',
      label: '食物与身体',
      title: '寻找食物',
      body: '它摄食浮游动物、小鱼和甲壳动物，脚触水不表示每次都获得食物。',
    },
    {
      key: 'life-cycle',
      label: '生活史',
      title: '繁殖与幼体',
      body: '它产卵并在岛上繁殖。地面与洞隙生活让繁殖地外来捕食者成为需要关注的因素，观察者应使用不干扰巢区的方式。',
    },
    {
      key: 'taxonomy',
      label: '分类与范围',
      title: '名称对应的物种',
      body: '本种为 Hydrobates pelagicus，属于鹱形目、海燕科。RSPB 的 Amber 是英国地区保护类别，与全球 IUCN 等级范围不同。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '观察与保护',
      body: '保护繁殖岛屿的洞隙，减少外来捕食者影响，观察时不打开或惊扰巢穴。白腰斑、近方尾端和嘴上管状鼻孔可以结合资料辨认。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '白腰斑之外还要看尾端',
      body: 'Linnaeus 在 1758 年发表了本种的科学描述，今天采用 Hydrobates pelagicus。中文名“暴风海燕”对应这种海上活动的小海鸟。它的白腰斑也出现在某些其他海燕身上，近方形尾端能帮助与白腰叉尾海燕区分，不能只凭一块白斑认种。',
    },
  ],
  "keyFacts": [
    '完整飞行姿态，尾端近方；不套用白腰叉尾海燕的叉尾。',
    '觅食姿态示意，静态图不能确认正在取食。',
    '局部放大重建，非实测比例，不供解剖鉴定。',
    '繁殖环境示意，不展示人为打开巢穴。',
    '从下方观察翼纹，画面不用于辨认年龄或个体。',
    '本种为 Hydrobates pelagicus，属于鹱形目、海燕科。RSPB 的 Amber 是英国地区保护类别，与全球 IUCN 等级范围不同。',
    '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。',
  ],
  "threats": [
    "岛上外来捕食者",
    "繁殖地干扰"
  ],
  "conservationActions": [
    '保护远洋与岩岛及天然隐蔽空间，观察时保留安静距离。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "远洋与岩岛"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "白色腰斑"
    },
    {
      "key": "conservation",
      "label": "评估资料",
      "value": "尚未核实",
      "note": '全球保护等级、确切评估日期与种群趋势尚未确认，资料不足不能说明本种安全。'
    }
  ],
  "media": {
    "image": "./images/species/european-storm-petrel/01-cover.webp",
    "alt": "暴风海燕及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/european-storm-petrel/02-observation.webp",
        "title": "白色腰斑",
        "alt": "暴风海燕：白色腰斑，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。完整飞行姿态，尾端近方；不套用白腰叉尾海燕的叉尾。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-storm-petrel/03-observation.webp",
        "title": "脚尖碰到海面",
        "alt": "暴风海燕：脚尖碰到海面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。觅食姿态示意，静态图不能确认正在取食。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-storm-petrel/04-observation.webp",
        "title": "嘴上的管状鼻孔",
        "alt": "暴风海燕：嘴上的管状鼻孔，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。局部放大重建，非实测比例，不供解剖鉴定。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-storm-petrel/05-observation.webp",
        "title": "岩隙旁",
        "alt": "暴风海燕：岩隙旁，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。繁殖环境示意，不展示人为打开巢穴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/european-storm-petrel/06-observation.webp",
        "title": "翅膀下面的浅色带",
        "alt": "暴风海燕：翅膀下面的浅色带，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。从下方观察翼纹，画面不用于辨认年龄或个体。",
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
      "url": "https://www.gbif.org/species/4408455",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "RSPB：暴风海燕形态、尺寸与海面取食",
      "url": "https://www.rspb.org.uk/birds-and-wildlife/storm-petrel",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
