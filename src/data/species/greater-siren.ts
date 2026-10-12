import type { Species } from '../../types/species.ts';

const profile = {
  "id": "greater-siren",
  "slug": "greater-siren",
  "names": {
    "zh": "大鳗螈",
    "en": "Greater Siren"
  },
  "scientificName": "Siren lacertina",
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
      "scientificName": "Sirenidae",
      "zhName": "鳗螈科"
    },
    "genus": {
      "scientificName": "Siren",
      "zhName": "鳗螈属"
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
      "美国东南部"
    ],
    "countries": [
      "美国"
    ],
    "range": "生活在美国东南部池塘、沼泽和植被丰富的淡水中，常藏在水底根系附近。"
  },
  "habitats": [
    {
      "name": "淡水湿地",
      "realm": "freshwater",
      "description": "生活在美国东南部池塘、沼泽和植被丰富的淡水中，常藏在水底根系附近。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "omnivore"
    ],
    "foods": [
      "水生无脊椎动物",
      "植物性物质"
    ],
    "description": '取食水生无脊椎动物、植物性物质。'
  },
  "tags": [
    "大鳗螈",
    "淡水湿地"
  ],
  "summary": "大鳗螈成年仍有外鳃，只有两只小前脚，长身体生活在淡水里。",
  "description": '大鳗螈在美国东南部植被丰富的池塘和沼泽生活，常藏在水底树根、沉木旁。成年仍有羽状外鳃，也有肺，能到水面吞入空气。前足各有四趾，后肢缺失，侧扁的长尾帮助水中活动。它摄取水生无脊椎动物，也有取食植物性物质的记录。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '头后的鳃',
      body: '头两侧保留羽状外鳃，鳃位于小前肢之前。成年外鳃属于本种正常形态。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '长尾巴和小前脚',
      body: '前足各有四趾，后肢缺失，尾部侧扁。它属于两栖动物。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '水底的藏身处',
      body: '它常在水底植被、树根和沉木旁隐蔽，细长身体能在这些空间里弯动。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '来到水面',
      body: '除外鳃外，它也有肺，可到水面吞入空气。呼吸过程需要结合连续自然影像观察。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '水底寻找食物',
      body: '食谱含水生无脊椎动物，研究也记录了植物性物质。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '旧英文俗名里的“泥鳗”',
      body: 'Österdam 在 1766 年发表 Siren lacertina 的科学描述，原记载的产地在北美卡罗来纳地区。长身体曾让它获得 Mud Eel，即“泥鳗”这样的英文俗名。大鳗螈实际属于两栖动物，成体保留外鳃，不能用鳗鱼的生活史解释它。',
    },
  ],
  "keyFacts": [
    '头两侧保留羽状外鳃，鳃位于小前肢之前。成年外鳃属于本种正常形态。',
    '前足各有四趾，后肢缺失，尾部侧扁。它属于两栖动物。',
    '食谱含水生无脊椎动物，研究也记录了植物性物质。',
  ],
  "threats": [
    '全球物种级威胁排序尚未确认。',
  ],
  "conservationActions": [
    '用已有自然影像观察，不搬动水底藏身物。',
    '减少淡水污染，不取走活体。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "淡水湿地"
    },
    {
      "key": "structure",
      "label": "观察重点",
      "value": "头后的鳃"
    }
  ],
  "media": {
    "image": "./images/species/greater-siren/01-cover.webp",
    "alt": "大鳗螈及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/greater-siren/02-observation.webp",
        "title": "头后的鳃",
        "alt": "大鳗螈：头后的鳃，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头两侧保留羽状外鳃，鳃位于小前肢之前。成年外鳃属于本种正常形态。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-siren/03-observation.webp",
        "title": "长尾巴和小前脚",
        "alt": "大鳗螈：长尾巴和小前脚，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。前足各有四趾，后肢缺失，尾部侧扁。它属于两栖动物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-siren/04-observation.webp",
        "title": "水底的藏身处",
        "alt": "大鳗螈：水底的藏身处，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。常在水底植被、树根和沉木旁隐蔽，身体弯曲姿态为重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-siren/05-observation.webp",
        "title": "来到水面",
        "alt": "大鳗螈：来到水面，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。除鳃外，它也有肺，可到水面吞入空气；不能据生成图判断一次呼吸过程。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/greater-siren/06-observation.webp",
        "title": "水底寻找食物",
        "alt": "大鳗螈：水底寻找食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。食谱含水生无脊椎动物，也有植物性物质的研究记录，不把它限定为只吃动物。",
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
      "title": "ADW：大鳗螈形态、呼吸与食性",
      "url": "https://animaldiversity.org/accounts/Siren_lacertina/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "AMNH：接受学名与完整分类链",
      "url": "https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Sirenidae/Siren/Siren-lacertina",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
