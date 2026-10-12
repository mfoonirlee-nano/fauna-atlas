import type { Species } from '../../types/species.ts';

const profile = {
  "id": "heart-cockle",
  "slug": "heart-cockle",
  "names": {
    "zh": "心形鸟蛤",
    "en": "Heart Cockle"
  },
  "scientificName": "Corculum cardissa",
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
      "scientificName": "Bivalvia",
      "zhName": "双壳纲"
    },
    "order": {
      "scientificName": "Cardiida",
      "zhName": "鸟蛤目"
    },
    "family": {
      "scientificName": "Cardiidae",
      "zhName": "鸟蛤科"
    },
    "genus": {
      "scientificName": "Corculum",
      "zhName": "心鸟蛤属"
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
    "assessor": "本次未核实全球物种级 IUCN 评估，沿用项目 NE 占位口径；不表示没有保护风险。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "亚洲",
      "大洋洲"
    ],
    "regions": [
      "印度洋与西太平洋热带浅海"
    ],
    "countries": [],
    "range": "生活在印度洋与西太平洋的热带浅海，常见于光照可达的珊瑚礁浅滩与砂砾底。法国自然历史博物馆的东帝汶标本记录提供了一个具体地点；该地点不代表完整分布。"
  },
  "habitats": [
    {
      "name": "珊瑚礁浅滩",
      "realm": "marine",
      "description": '栖居热带浅海珊瑚礁浅滩与砂砾底，利用可接收光照的位置，部分壳体可埋入沉积物。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "filter-feeder"
    ],
    "foods": [
      "悬浮微粒",
      "共生藻提供的光合产物"
    ],
    "description": "通过滤食摄取水中悬浮微粒，也从组织里的共生藻获得光合产物；共生藻需要光。"
  },
  "tags": [
    "心形鸟蛤",
    "珊瑚礁浅滩"
  ],
  "summary": '心形鸟蛤生活在印度洋和西太平洋热带浅海，两片壳合拢后从特定方向看呈心形。壳后部的透光区域还能把光送给组织中的共生藻。',
  "description": '心形鸟蛤属于双壳类，壳面放射纹从壳顶伸向壳缘，立体轮廓随观察角度改变。它可部分埋入砂砾或珊瑚碎屑，露出的区域仍能接收光；除过滤悬浮微粒外，还能利用体内共生藻的光合产物。壳体透光结构因此关系到这套营养方式。',
  "storySections": [
    {
      key: 'observation-1',
      label: '壳形',
      title: '心形来自两片壳的立体结构',
      body: '合拢的双壳从前后方向可见心形轮廓，侧面轮廓则不同。心形来自立体壳体，不是每一片壳都具有平面心形。',
    },
    {
      key: 'observation-2',
      label: '壳纹',
      title: '放射纹从壳顶伸向壳缘',
      body: '细纹从壳顶附近向边缘展开，壳面不同部位可呈浅粉与乳白。壳纹、形态与其他细节共同用于物种比较。',
    },
    {
      key: 'observation-3',
      label: '透光',
      title: '光穿过壳的局部区域',
      body: '壳后部有透光区域，使光到达组织中的共生藻。实际光传输结构需要专门测量，肉眼所见外观只能提供部分线索。',
    },
    {
      key: 'observation-4',
      label: '共生',
      title: '共生藻需要浅海光照',
      body: '心形鸟蛤生活在光照可达的浅海，部分壳体可埋入沉积物，露出区域继续接收光。共生藻提供光合产物，鸟蛤同时也过滤水中微粒。',
    },
    {
      key: 'observation-5',
      label: '保护',
      title: '砂砾底与活体应留在原处',
      body: '砂砾与珊瑚碎屑构成栖身基质，观察时可保持距离，避免翻动或取走活体。全球物种级威胁排序尚未核实，具体影响仍需当地调查。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1758 年的名称与现代透光研究',
      body: '林奈在 1758 年正式命名心形鸟蛤，现用学名为 Corculum cardissa。心形轮廓使它容易引起注意，后来研究更关注壳体如何传光给共生藻。2024 年发表的光传输研究继续解释这一结构与光合共生的关系。',
    },
  ],
  "keyFacts": [
    "属于双壳纲，身体由两片贝壳包围。",
    "心形轮廓随观察角度改变。",
    "组织中的共生藻利用穿过壳体的光。"
  ],
  "threats": [
    "本次未核实全球物种级威胁排序。"
  ],
  "conservationActions": [
    "通过影像观察，保留来源与物种限定。",
    "减少水域污染，野外观察不取走活体。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "shell",
      "label": "贝壳",
      "value": "两片"
    },
    {
      "key": "light",
      "label": "观察重点",
      "value": "透光区域"
    }
  ],
  "media": {
    "image": "./images/species/heart-cockle/01-cover.webp",
    "alt": "心形鸟蛤及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/heart-cockle/02-observation.webp",
        "title": "两片壳合成的轮廓",
        "alt": "心形鸟蛤：两片壳合成的轮廓",
        "caption": "AI 生成科学情景重建。从前后方向观察合拢的壳，可以看见心形轮廓。换到侧面后，轮廓会变化；不把每片壳都画成平面的爱心。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heart-cockle/03-observation.webp",
        "title": "壳面上的放射纹",
        "alt": "心形鸟蛤：壳面上的放射纹",
        "caption": "AI 生成科学情景重建。细纹从壳顶附近向壳缘展开。沿着纹路找壳缘，再看看不同部位的浅粉色与乳白色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heart-cockle/04-observation.webp",
        "title": "壳上透光的地方",
        "alt": "心形鸟蛤：壳上透光的地方",
        "caption": "AI 生成科学情景重建。壳后部有透光区域，光可以到达组织里的共生藻。生成图重建透光外观，不能展示或测量壳内的光学结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heart-cockle/05-observation.webp",
        "title": "留在浅滩的阳光里",
        "alt": "心形鸟蛤：留在浅滩的阳光里",
        "caption": "AI 生成科学情景重建。它生活在光照可达的浅海。部分壳体可埋入沉积物，露出的区域仍能接收光。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/heart-cockle/06-observation.webp",
        "title": "把贝壳放回环境中",
        "alt": "心形鸟蛤：把贝壳放回环境中",
        "caption": "AI 生成科学情景重建。在砂砾和珊瑚碎屑之间找出贝壳轮廓。看图片时比较角度，野外观察不翻动活贝或取走活体。",
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
      "title": "西澳博物馆：壳体形态与光合共生",
      "url": "https://museum.wa.gov.au/online-collections/names/corculum-cardissa",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "心形鸟蛤壳体光传输研究",
      "url": "https://doi.org/10.1038/s41467-024-53110-x",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "法国自然历史博物馆：东帝汶标本",
      "url": "https://science.mnhn.fr/institution/mnhn/collection/im/item/2024-14208",
      "kind": "distribution",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名与分类",
      "url": "https://www.marinespecies.org/aphia.php?id=216387&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Corculum cardissa (Linnaeus, 1758) nomenclatural record',
      url: 'https://www.gbif.org/species/5729116',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
