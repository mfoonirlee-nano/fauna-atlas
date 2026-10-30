import type { Species } from '../../types/species.ts';

const profile = {
  "id": "species-alvinella-pompejana",
  "slug": "pompeii-worm",
  "names": {
    "zh": "庞贝虫",
    "en": "Pompeii Worm",
    "aliases": []
  },
  "scientificName": "Alvinella pompejana",
  "taxonomy": {
    "kingdom": {
      "scientificName": "Animalia",
      "zhName": "动物界"
    },
    "phylum": {
      "scientificName": "Annelida",
      "zhName": "环节动物门"
    },
    "class": {
      "scientificName": "Polychaeta",
      "zhName": "多毛纲"
    },
    "family": {
      "scientificName": "Alvinellidae",
      "zhName": "Alvinellidae科"
    },
    "genus": {
      "scientificName": "Alvinella",
      "zhName": "Alvinella属"
    }
  },
  "conservation": {
    "system": "Unverified",
    "code": "UNVERIFIED",
    "label": {
      "zh": "保护评估待核实",
      "en": "Assessment Unverified"
    },
    "trend": "unknown",
    "assessor": "尚未核实可追溯的全球保护评估，不据此推断已经评估或尚未评估。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "countries": [],
    "regions": [
      "东太平洋海隆及相邻热液区"
    ],
    "range": "MBARI 汇总东太平洋海隆、加拉帕戈斯裂谷和太平洋—南极海岭的记录，深度约 1,500—3,500 米。生活地点是热液出口附近的管居微环境，不等于整个身体都浸在同样温度的喷流水中。"
  },
  "habitats": [
    {
      "name": "深海热液烟囱表面",
      "realm": "marine",
      "description": "MBARI 汇总东太平洋海隆、加拉帕戈斯裂谷和太平洋—南极海岭的记录，深度约 1,500—3,500 米。生活地点是热液出口附近的管居微环境，不等于整个身体都浸在同样温度的喷流水中。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "bacterivore"
    ],
    "foods": [
      "细菌"
    ],
    "description": "MBARI 将食物概括为细菌。身体表面与细菌的关系还涉及热液区化学环境，不能把所有附着细菌都画成正在被吞吃的食物，也不能把它与巨型管虫的营养方式直接画等号。"
  },
  "tags": [
    "庞贝虫",
    "深海热液烟囱表面"
  ],
  "summary": "细薄管口伸出灰褐身体和锈红色尖鳃，背面可见绒层般的覆盖。",
  "description": "身体细长而分节，体侧有刚毛，背部可带浅色绒层般的细菌覆盖。前端伸出锈红色、渐尖的鳃，身体后段常留在附着于矿物表面的薄管中；它不是顶着一大朵羽冠的巨型管虫。",
  "storySections": [
    {
      "key": "tube",
      "label": "生活与认识",
      "title": "在烟囱表面住薄管",
      "body": "许多个体可分别住在热液烟囱表面的薄管中。图里露出的前端与管口要分开辨认，藏在管内的身体不作透明剖视或补画。"
    },
    {
      "key": "heat",
      "label": "生活与认识",
      "title": "喷流水温度不是体温",
      "body": "热液出口和周围海水形成很强的温度差。动物所在的小环境会随水流和活动变化，不能把出口温度、管底温度或实验耐受上限当成同一个数。"
    },
    {
      "key": "bacteria",
      "label": "生活与认识",
      "title": "背上的绒层不是毛皮",
      "body": "浅色覆盖中有附着细菌，与陆生动物毛皮不同。MBARI 讨论这些细菌与生活环境的联系，本图册不把普通外观重建当成显微细菌图或隔热实验。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "以热液探索认识的蠕虫",
      "body": "接受名记录为 Alvinella pompejana Desbruyères & Laubier, 1980。后来的潜器影像和遗传研究持续补充不同热液地点的记录；正式名称并不证明每一张只标到 Alvinella 属的照片都完成了种级鉴定。"
    }
  ],
  "keyFacts": [
    "细薄管口伸出灰褐身体和锈红色尖鳃，背面可见绒层般的覆盖。",
    "许多个体可分别住在热液烟囱表面的薄管中。图里露出的前端与管口要分开辨认，藏在管内的身体不作透明剖视或补画。"
  ],
  "threats": [
    "热液栖息地受到扰动时可能影响附着群落"
  ],
  "conservationActions": [
    "保留热液区及标本的对应记录",
    "将环境温度和动物实际耐受证据分开说明"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "在烟囱表面住薄管"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "深海热液烟囱表面"
    }
  ],
  "media": {
    "image": "./images/species/pompeii-worm/01-cover.webp",
    "alt": "庞贝虫全貌（AI 生成科学重建）",
    "credit": "Fauna Atlas · AI 生成科学重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "gallery": [
      {
        "image": "./images/species/pompeii-worm/02-observation.webp",
        "title": "管口的锈红色尖鳃",
        "alt": "庞贝虫：管口的锈红色尖鳃（AI 生成科学重建）",
        "caption": "AI 生成科学重建。管口的锈红色尖鳃；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/pompeii-worm/03-observation.webp",
        "title": "可见背部与浅色绒层",
        "alt": "庞贝虫：可见背部与浅色绒层（AI 生成科学重建）",
        "caption": "AI 生成科学重建。可见背部与浅色绒层；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/pompeii-worm/04-observation.webp",
        "title": "分居两个薄管的蠕虫",
        "alt": "庞贝虫：分居两个薄管的蠕虫（AI 生成科学重建）",
        "caption": "AI 生成科学重建。分居两个薄管的蠕虫；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/pompeii-worm/05-observation.webp",
        "title": "较少伸出的前端",
        "alt": "庞贝虫：较少伸出的前端（AI 生成科学重建）",
        "caption": "AI 生成科学重建。较少伸出的前端；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      },
      {
        "image": "./images/species/pompeii-worm/06-observation.webp",
        "title": "热液矿物表面的管居蠕虫",
        "alt": "庞贝虫：热液矿物表面的管居蠕虫（AI 生成科学重建）",
        "caption": "AI 生成科学重建。热液矿物表面的管居蠕虫；不作为自然摄影、物种鉴定、显微测量或连续行为证据。",
        "credit": "Fauna Atlas · AI 生成科学重建"
      }
    ]
  },
  "sources": [
    {
      "title": "物种资料与参考影像：Pompeii Worm",
      "url": "https://www.mbari.org/animal/pompeii-worm/",
      "kind": "ecology",
      "accessedAt": "2026-10-30"
    },
    {
      "title": "GBIF：接受名、命名作者、异名与分类",
      "url": "https://api.gbif.org/v1/species/2324365",
      "kind": "taxonomy",
      "accessedAt": "2026-10-30"
    },
    {
      "title": "WoRMS：接受名与分类对照",
      "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=336171",
      "kind": "taxonomy",
      "accessedAt": "2026-10-30"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-30",
  "updatedAt": "2026-10-30"
} as const satisfies Species;

export default profile;
