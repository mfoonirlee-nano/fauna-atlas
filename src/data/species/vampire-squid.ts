import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-vampyroteuthis-infernalis",
    "slug": "vampire-squid",
    "names": {
      "zh": "幽灵蛸",
      "en": "Vampire Squid",
      "aliases": [
        "吸血鬼乌贼"
      ]
    },
    "scientificName": "Vampyroteuthis infernalis",
    "taxonomy": {
      "kingdom": {
        "scientificName": "Animalia",
        "zhName": "动物界"
      },
      "phylum": {
        "scientificName": "Mollusca",
        "zhName": "软体动物门"
      },
      "class": {
        "scientificName": "Cephalopoda",
        "zhName": "头足纲"
      },
      "order": {
        "scientificName": "Vampyromorpha",
        "zhName": "幽灵蛸目"
      },
      "family": {
        "scientificName": "Vampyroteuthidae",
        "zhName": "幽灵蛸科"
      },
      "genus": {
        "scientificName": "Vampyroteuthis",
        "zhName": "幽灵蛸属"
      }
    },
    "measurements": {
      "length": {
        "max": 30,
        "unit": "cm",
        "note": "MBARI 列出的最大全长；不含伸展的取食细丝。"
      }
    },
    "metrics": {},
    "featured": true,
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "conservation": {
      "system": "IUCN Red List",
      "code": "NE",
      "label": {
        "zh": "未评估",
        "en": "Not Evaluated"
      },
      "trend": "unknown",
      "assessor": '尚未确认可引用的 IUCN 全球评估；“未评估”表示资料缺口，不能据此判断种群安全。'
    },
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [],
      "regions": [
        "全球热带与温带海域"
      ],
      "countries": [],
      "range": '幽灵蛸生活在全球热带和温带海洋的中层水体，常见于含氧量低的水层。MBARI 列出的典型观察深度为 600 至 900 米，其他深度也有分布。'
    },
    "habitats": [
      {
        "name": "深海低氧中层水体",
        "realm": "marine",
        "description": "在远离海底的水层中悬浮，收集上层海洋下沉的有机颗粒。",
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "detritivore"
      ],
      "foods": [
        "海雪中的浮游生物残骸",
        "粪粒",
        "黏液团中的有机碎屑",
        "随颗粒聚集的小型浮游动物"
      ],
      "description": "伸出细长丝状结构收集海雪，再用腕部刮取并以黏液团聚颗粒，送入口中。食物以有机碎屑为主，也可能包括附着其上的小型动物。"
    },
    "activity": [
      "中层悬浮",
      "丝状结构收集海雪",
      "发光防御"
    ],
    "tags": [
      "深海",
      "低氧",
      "海雪",
      "腕间膜",
      "生物发光"
    ],
    "summary": "幽灵蛸在低氧深海伸出细丝，收集缓缓下沉的海雪。遇到威胁时，它会把腕间膜翻起包住身体，还能释放发光黏液。",
    "description": "暗红褐色的身体两侧长着小鳍，八条腕之间连着宽阔的薄膜。腕内侧排列着柔软的指状突起，收集食物的细丝则能伸出身体很远。",
    "storySections": [
      {
        key: 'identity',
        label: '认识幽灵蛸',
        title: '八条腕连着一层薄膜',
        body: '幽灵蛸属于头足纲、幽灵蛸目，有八条相连的腕和一对可收回的细丝。腕内侧的柔软指状突起帮助搬运食物。它主要吃海雪中的有机碎屑。',
      },
      {
        key: 'feeding',
        label: '收集海雪',
        title: '细丝带回下沉的碎屑',
        body: '海雪包含浮游生物残骸、粪粒和黏液等有机物。幽灵蛸把细丝伸进水中，让颗粒附着其上，随后把细丝收回并从腕间拉过。腕部产生的黏液把碎屑聚成团，柔软的突起再把食团送向嘴。',
      },
      {
        key: 'oxygen',
        label: '低氧生活',
        title: '悬浮着等待食物',
        body: '幽灵蛸常见于“氧最小带”，也就是海中含氧量很低的水层。它悬浮着收集漂来的食物，耗能较少，适合氧供应有限的环境。MBARI 列出的典型观察深度为 600 至 900 米，这个范围并非全部分布深度。',
      },
      {
        key: 'cloak',
        label: '翻起腕间膜',
        title: '把柔软的身体藏进腕间膜',
        body: '受到威胁时，幽灵蛸能把相连的腕向后翻起，包住头和外套膜，改变身体轮廓。翻出的腕内侧带有柔软的肉质突起。',
      },
      {
        key: 'light',
        label: '发光防御',
        title: '腕尖亮起，还能释放发光黏液',
        body: '幽灵蛸的腕尖能发出蓝色闪光。持续受到威胁时，它还能释放发光黏液，干扰捕食者。它没有许多其他头足动物用于喷墨的墨囊。',
      },
      {
        key: 'research',
        label: '深海观察',
        title: '机器人帮助研究者看清取食过程',
        body: '研究者把遥控潜水器的水下记录、活体观察和显微检查结合起来，确认了幽灵蛸收集海雪的过程。全球 IUCN 评估尚未核实，种群趋势未知。深海水体及食物颗粒的连续记录能帮助了解它的生存环境。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '名字神秘，食物是海雪',
        body: 'Chun 于 1903 年描述了这个物种，现用学名为 Vampyroteuthis infernalis。人们对它的取食方式曾了解很少。后来，研究者结合深潜机器人、活体观察和显微检查，看清它用细丝收集海雪、用黏液将碎屑聚成食团的过程。',
      },
    ],
    "keyFacts": [
      '有八条腕和一对可收回的取食细丝。',
      '以海雪中的有机碎屑为主要食物。',
      '宽阔的腕间膜能翻起包裹身体。',
      '腕内侧的突起柔软，不是硬刺。',
      '腕尖能发光，也能释放发光黏液。',
      '典型观察深度约 600至900 米。',
    ],
    "threats": [
      "全球种群趋势及物种级威胁仍需持续调查。"
    ],
    "conservationActions": [
      "持续记录中层水体的溶氧与有机颗粒供应。",
      "结合水下影像与标本研究，更新分布和生活史资料。"
    ],
    "featuredStats": [
      {
        "key": "arms",
        "label": "腕的数量",
        "value": "8",
        "unit": "条"
      },
      {
        "key": "filaments",
        "label": "取食细丝",
        "value": "2",
        "unit": "条"
      },
      {
        "key": "depth",
        "label": "典型观察深度",
        "value": "600–900",
        "unit": "米",
        "note": "MBARI 资料；不是最大潜深。"
      },
      {
        "key": "food",
        "label": "主要食物",
        "value": "海雪"
      }
    ],
    "sources": [
      {
        "title": "OBIS — 幽灵蛸分类归属",
        "url": "https://obis.org/taxon/141887",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "MBARI — 幽灵蛸外形、低氧生境与防御",
        "url": "https://www.mbari.org/animal/vampire-squid/",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Hoving 与 Robison 2012 — 氧最小带中的碎屑取食",
        "url": "https://doi.org/10.1098/rspb.2012.1357",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "MBARI — 水下与活体取食观察",
        "url": "https://www.mbari.org/news/mbari-researchers-discover-what-vampire-squids-eat-its-not-what-you-think/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "WoRMS — 幽灵蛸接受名与异名",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=141887",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Vampyroteuthis infernalis 的命名作者与年份',
        url: 'https://www.gbif.org/species/2290924',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/vampire-squid/01-cover.webp",
      "alt": "小型暗红色幽灵蛸悬浮在右侧深海水体中，腕和鳍均完整可见。",
      "focalPoint": {
        "x": 0.88,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/vampire-squid/02-body.webp",
          "alt": "幽灵蛸的大眼、小鳍与宽阔腕间膜近景。",
          "title": "相连的八条腕",
          "caption": "AI 生成外形重建；腕部褶皱和突起排列经过简化。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/vampire-squid/03-feeding.webp",
          "alt": "幽灵蛸伸出一条细丝，周围漂着细小颗粒。",
          "title": "细丝收集海雪",
          "caption": "AI 生成取食情景；另一条细丝收回，颗粒尺寸与细丝长度不作测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/vampire-squid/04-cloak.webp",
          "alt": "幽灵蛸将腕间膜翻起，露出柔软的指状突起。",
          "title": "翻起腕间膜",
          "caption": "AI 生成防御姿态；柔软突起不代表硬刺。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/vampire-squid/05-light.webp",
          "alt": "幽灵蛸腕端附近漂着蓝色微光黏液。",
          "title": "发光的黏液",
          "caption": "AI 生成防御示意；发光亮度、持续时间和云团形状不作实测依据。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/vampire-squid/06-habitat.webp",
          "alt": "深暗海水中漂着有机颗粒，远处悬浮着幽灵蛸。",
          "title": "中层水体中的海雪",
          "caption": "AI 生成深海生境；不表示特定采样地点或颗粒密度。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        }
      ]
    }
  } as const satisfies Species;

export default profile;
