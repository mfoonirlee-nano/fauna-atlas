import type { Species } from '../../types/species.ts';

const profile = {
  "id": "menelaus-blue-morpho",
  "slug": "menelaus-blue-morpho",
  "names": {
    "zh": "大蓝闪蝶",
    "en": "Menelaus Blue Morpho",
    "aliases": [
      "蓝闪蝶"
    ]
  },
  "scientificName": "Morpho menelaus",
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
      "scientificName": "Insecta",
      "zhName": "昆虫纲"
    },
    "order": {
      "scientificName": "Lepidoptera",
      "zhName": "鳞翅目"
    },
    "family": {
      "scientificName": "Nymphalidae",
      "zhName": "蛱蝶科"
    },
    "genus": {
      "scientificName": "Morpho",
      "zhName": "闪蝶属"
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
    "assessor": "全球等级核验范围见保护章节；未确认独立评估日期和全球趋势"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "南美洲",
      "北美洲"
    ],
    "regions": [
      "南美洲热带森林及部分中美洲地区"
    ],
    "countries": [],
    "range": "本种含多个亚种，多数分布在南美洲；amathonte 亚种见于部分中美洲地区。图集表现本种的典型雄蝶外观，不声称代表全部亚种。"
  },
  "habitats": [
    {
      "name": "热带森林与林间空隙",
      "realm": "terrestrial",
      "description": '大蓝闪蝶在热带森林和林间空隙飞行，成蝶吸食果汁，幼虫在食用植物上取食叶片。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "成熟或发酵果实的汁液"
    ],
    "description": "成蝶用喙吸取果实汁液；幼虫以植物叶片为食，成蝶和幼虫取食方式不同。"
  },
  "tags": [
    "大蓝闪蝶",
    "翅膀正反的花纹"
  ],
  "summary": "雄性大蓝闪蝶展开翅膀时呈亮蓝色，合翅后露出带眼斑的褐色下表面。蓝色与翅鳞微细结构对光线的反射有关。",
  "description": '雄性大蓝闪蝶的翅膀上表面亮蓝、边缘较深，下表面以褐色为主，带一圈圈眼斑。飞行时两面交替显露，光照和观察角度也影响蓝色光泽；不同亚种和雌雄个体的花纹有差别。',
  "storySections": [
    {
      key: 'open',
      label: '生活与认识',
      title: '打开翅膀看蓝色',
      body: '雄蝶展开前后翅时，上表面的亮蓝色与深色边缘显露出来。',
    },
    {
      key: 'closed',
      label: '生活与认识',
      title: '合上翅膀看眼斑',
      body: '合翅时常露出褐色下表面，上面有一圈圈眼斑。开翅与合翅展示的是翅膀两面的差别。',
    },
    {
      key: 'fruit',
      label: '生活与认识',
      title: '用细喙吸果汁',
      body: '成蝶把细长的喙伸向果实汁液。它的幼虫会咀嚼植物叶片，长成蝴蝶后用不同的口器取食。',
    },
    {
      key: 'blue',
      label: '生活与认识',
      title: '转个角度看蓝光',
      body: '翅膀鳞片的微细结构影响光的反射，让蓝色随观察角度改变。',
    },
    {
      key: 'forest',
      label: '生活与认识',
      title: '在林间飞过',
      body: '大蓝闪蝶在热带森林飞行，翅膀上下表面会交替显露。',
    },
    {
      key: 'conservation',
      label: '生活与认识',
      title: '保留热带森林',
      body: '尚未确认大蓝闪蝶的全球物种级 IUCN 评估，全球等级为未评估（NE），仍需更多资料判断种群状况。森林及幼虫食用的植物提供生活环境。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '同一片翅膀的两种外观',
      body: 'Linnaeus 于 1758 年描述了这个物种，现用学名为 Morpho menelaus。大蓝闪蝶的亮蓝色与翅鳞微细结构反射光线有关，合翅后却常只见褐色眼斑。这是上下表面不同的花纹；它包含多个亚种，雌雄之间也有差异，不能只凭一张雄蝶图概括全部个体。',
    },
  ],
  "keyFacts": [
    '雄蝶翅膀上表面亮蓝，边缘呈深色。',
    '合翅时常露出带眼斑的褐色下表面。',
    '成蝶吸食果汁，幼虫咀嚼植物叶片。',
    '翅鳞的微细结构反射光线，蓝色会随观察角度改变。',
    '飞行时，翅膀上下表面交替显露。',
  ],
  "threats": [
    "森林栖息地丧失"
  ],
  "conservationActions": [
    "保留热带森林",
    "保护幼虫食用植物"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "翅膀正反的花纹"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "热带森林与林间空隙"
    }
  ],
  "media": {
    "image": "./images/species/menelaus-blue-morpho/01-cover.webp",
    "alt": "大蓝闪蝶的完整身体与生活环境",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/menelaus-blue-morpho/02-observation.webp",
        "title": "展开的蓝色翅膀",
        "alt": "雄性大蓝闪蝶展开蓝色翅面，边缘呈深色",
        "caption": "AI 生成科学情景重建。雄性大蓝闪蝶展开蓝色翅面，边缘呈深色。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/menelaus-blue-morpho/03-observation.webp",
        "title": "合翅后的褐色眼斑",
        "alt": "大蓝闪蝶合拢翅膀，褐色下表面有环形眼斑",
        "caption": 'AI 生成科学情景重建。大蓝闪蝶合拢翅膀，褐色下表面有环形眼斑。与开翅图分别生成，用于比较翅膀两面，不能当作同一只蝶连续变色的记录。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/menelaus-blue-morpho/04-observation.webp",
        "title": "吸食果汁",
        "alt": "合翅的大蓝闪蝶在落果上伸出细喙",
        "caption": "AI 生成科学情景重建。合翅的大蓝闪蝶在落果上伸出细喙。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/menelaus-blue-morpho/05-observation.webp",
        "title": "翅面的蓝色光泽",
        "alt": "近看大蓝闪蝶翅面的蓝色反光和深色边缘",
        "caption": 'AI 生成科学情景重建。近看大蓝闪蝶翅面的蓝色反光和深色边缘。画面展示翅面光泽，生成纹理不能作为翅鳞显微结构的证据。',
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/menelaus-blue-morpho/06-observation.webp",
        "title": "林间飞行",
        "alt": "雄性大蓝闪蝶在热带林间展开蓝色翅膀",
        "caption": "AI 生成科学情景重建。雄性大蓝闪蝶在热带林间展开蓝色翅膀。",
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
      "title": "Harvard MCZ：Morpho menelaus 分类",
      "url": "https://mczbase.mcz.harvard.edu/name/Morpho%20menelaus",
      "kind": "taxonomy",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Smithsonian National Museum of Natural History：大蓝闪蝶的结构色",
      "url": "https://www.smithsonianmag.com/blogs/national-museum-of-natural-history/2023/12/12/celebrate-the-holiday-season-with-the-museums-stunning-collection-of-blue-specimens/",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Amazonian Butterflies：大蓝闪蝶野外食物与生境",
      "url": "https://www.amazonian-butterflies.net/families/?tx_psbfieldguide_fg%5Baction%5D=show&tx_psbfieldguide_fg%5Bcontroller%5D=Species&tx_psbfieldguide_fg%5Bspecies%5D=130",
      "kind": "ecology",
      "accessedAt": "2026-09-14"
    },
    {
      "title": "Butterflies and Moths of North America：亚种及分布范围",
      "url": "https://www.butterfliesandmoths.org/species/morpho-menelaus-amathonte",
      "kind": "distribution",
      "accessedAt": "2026-09-14"
    },
    {
      title: 'GBIF：Morpho menelaus 的命名作者与年份',
      url: 'https://www.gbif.org/species/5133523',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-14",
  "updatedAt": "2026-09-14"
} as const satisfies Species;

export default profile;
