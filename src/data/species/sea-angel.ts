import type { Species } from '../../types/species.ts';

const profile = {
  "id": "sea-angel",
  "slug": "sea-angel",
  "names": {
    "zh": "裸海蝶",
    "en": "Sea Angel"
  },
  "scientificName": "Clione limacina",
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
      "scientificName": "Gastropoda",
      "zhName": "腹足纲"
    },
    "order": {
      "scientificName": "Pteropoda",
      "zhName": "翼足目"
    },
    "family": {
      "scientificName": "Clionidae",
      "zhName": "裸海蝶科"
    },
    "genus": {
      "scientificName": "Clione",
      "zhName": "裸海蝶属"
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
    "continents": [],
    "regions": [
      "北冰洋与北大西洋冷水域"
    ],
    "countries": [],
    "range": '已核实的核心范围位于北冰洋与北大西洋冷水域。南极 Clione antarctica 和北太平洋近缘种的记录需要分别处理。'
  },
  "habitats": [
    {
      "name": "冷水海洋中上层",
      "realm": "marine",
      "description": '生活在北冰洋与北大西洋冷水的开阔水体中，以翼足持续游泳，接近同域的有壳翼足类猎物。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "海蝶属等有壳翼足类"
    ],
    "description": "捕食有壳翼足类，例如 Limacina helicina；会用口部专门的结构抓住猎物。"
  },
  "tags": [
    "裸海蝶",
    "冷水海洋中上层"
  ],
  "summary": '裸海蝶是北冰洋和北大西洋冷水中的腹足类动物，成体没有贝壳，用透明翼足游泳，并捕食有壳海蝶。',
  "description": '裸海蝶两侧的翼状附肢由足演化而来，摆动时带动身体在水中游动。透明体壁下可见橙红色内部结构，捕食时专门的口部结构抓住 Limacina helicina 等有壳翼足类。南极和北太平洋存在近缘种，不能把所有“海天使”记录归到本种。',
  "storySections": [
    {
      key: 'observation-1',
      label: '翼足',
      title: '足演化成游泳附肢',
      body: '两侧透明翼足由腹足类的足演化而来，摆动时推动身体。名称与外观中的“翅膀”联想指向这一结构。',
    },
    {
      key: 'observation-2',
      label: '体色',
      title: '透明体壁下可见橙红色',
      body: '透明体壁让部分内部结构显露，橙红色与体内色素有关。辨认具体器官仍需解剖或更细的活体观察。',
    },
    {
      key: 'observation-3',
      label: '游泳',
      title: '翼足向上摆动',
      body: '翼足可以向上抬起，改变周围水流。这是完整摆动过程中的一部分，需连续影像才能测量频率和推进效果。',
    },
    {
      key: 'observation-4',
      label: '运动',
      title: '翼足也向下摆动',
      body: '翼足向下运动与其他阶段共同形成游泳动作。身体姿态会随行为改变，不能用一个静止姿态代表全部运动。',
    },
    {
      key: 'observation-5',
      label: '捕食',
      title: '专门口部抓住有壳海蝶',
      body: '成体裸海蝶没有贝壳，却以有壳翼足类为食，例如 Limacina helicina。它用专门口部结构抓住猎物，再进行取食。',
    },
    {
      key: 'conservation',
      label: '保护',
      title: '冷水食物关系仍需调查',
      body: '海洋环境变化可能影响翼足类及其食物关系。本种尚无已核实的全球风险评估与种群趋势，观察应保留冷水生境和猎物关系的物种边界。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1774 年正式命名的冷水海蝶',
      body: 'Phipps 在 1774 年正式命名裸海蝶，现用名称为 Clione limacina。英语常用名 sea angel 来自透明身体和翼足的外观联想，实际它是捕食其他翼足类的海洋腹足动物。现代分类还区分南极及北太平洋近缘种，早期同名记录需要重新核对。',
    },
  ],
  "keyFacts": [
    "裸海蝶用两侧透明的翼状附肢游泳，成体没有贝壳。",
    "捕食有壳翼足类，例如 Limacina helicina；会用口部专门的结构抓住猎物。"
  ],
  "threats": [
    "海洋环境变化可能影响翼足类及其食物关系；本次未核实本种全球趋势。"
  ],
  "conservationActions": [
    "观看自然水下影像，不将冷水海洋动物带离栖息环境。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "冷水海洋中上层"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "水里的小翅膀"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "未评估",
      "note": '尚无已核实的物种级 IUCN 全球评估，种群趋势未知。'
    }
  ],
  "media": {
    "image": "./images/species/sea-angel/01-cover.webp",
    "alt": "裸海蝶及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/sea-angel/02-observation.webp",
        "title": "水里的小翅膀",
        "alt": "裸海蝶：水里的小翅膀",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。两侧的翼状附肢由足演化而来，摆动时帮助裸海蝶在水中游泳。它没有鸟类的羽毛。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-angel/03-observation.webp",
        "title": "透明身体里的颜色",
        "alt": "裸海蝶：透明身体里的颜色",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。透过体壁能看见部分内部结构，橙红色与体内色素有关。生成图不用于识别每一个器官。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-angel/04-observation.webp",
        "title": "翼足向上",
        "alt": "裸海蝶：翼足向上",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。这一幅展示翼足抬起的姿态。与下一幅一起观察上下方向，二者是独立重建的动作对照，不是真实连续帧。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-angel/05-observation.webp",
        "title": "翼足向下",
        "alt": "裸海蝶：翼足向下",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。这一幅展示翼足向下的姿态。配合自然视频看摆动，不能用两张生成图推算游泳速度或摆动频率。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/sea-angel/06-observation.webp",
        "title": "没有壳的捕食者",
        "alt": "裸海蝶：没有壳的捕食者",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。成年裸海蝶没有壳，却会捕食有壳的海蝶。图中较小的螺旋壳动物用于食物关系示意，两者距离和大小不是实测值。",
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
      "title": "太平洋水族馆：裸海蝶生物学",
      "url": "https://www.aquariumofpacific.org/onlinelearningcenter/species/sea_angel",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名",
      "url": "https://marinespecies.org/Berms/aphia.php?id=139178&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "NCBI：翼足类归属",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=71516&mode=Info",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Clione limacina (Phipps, 1774) nomenclatural record',
      url: 'https://www.gbif.org/species/5193700',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
