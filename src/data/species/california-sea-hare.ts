import type { Species } from '../../types/species.ts';

const profile = {
  "id": "california-sea-hare",
  "slug": "california-sea-hare",
  "names": {
    "zh": "加州海兔",
    "en": "California Sea Hare"
  },
  "scientificName": "Aplysia californica",
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
      "scientificName": "Aplysiida",
      "zhName": "海兔目"
    },
    "family": {
      "scientificName": "Aplysiidae",
      "zhName": "海兔科"
    },
    "genus": {
      "scientificName": "Aplysia",
      "zhName": "海兔属"
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
    "assessor": "所引资料列为未评估；不据此推断种群安全。"
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "加利福尼亚北部至加利福尼亚湾的沿岸浅海"
    ],
    "countries": [
      "美国",
      "墨西哥"
    ],
    "range": "加利福尼亚北部至加利福尼亚湾的沿岸浅海。列出的国家为代表性分布地，不是完整名录。"
  },
  "habitats": [
    {
      "name": "加利福尼亚北部至加利福尼亚湾的沿岸浅海",
      "realm": "marine",
      "description": "加利福尼亚北部至加利福尼亚湾的沿岸浅海。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "herbivore"
    ],
    "foods": [
      "红藻",
      "海莴苣",
      "鳗草"
    ],
    "description": "主要取食红藻、海莴苣、鳗草。"
  },
  "tags": [
    "加州海兔",
    "耳朵般的嗅角"
  ],
  "summary": '加州海兔在浅海吃藻类，用腹足爬行。头上的嗅角能感受化学信号，退化的小壳藏在体内。',
  "description": '加州海兔生活在加利福尼亚北部至加利福尼亚湾的沿岸浅海，取食藻类。头上的一对嗅角感受水中化学信号，帮助寻找同伴；身体下方的腹足用于爬行，两侧有可折叠的侧足。它把卵产在细长胶质卵带中，卵带缠绕成团，体内还保留一片退化的小壳。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '耳朵般的嗅角',
      body: '头上的一对嗅角能够感受水中的化学信号，帮助它寻找同伴。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '在石头上吃藻',
      body: '加州海兔吃藻类等植物，常在长有海藻的浅水岩岸活动。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '软身体向前爬',
      body: '它用身体下方的腹足爬行，背部两侧有能折叠的侧足。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '绕成一团的卵带',
      body: '它把卵产在胶质卵带中，许多细长的卵带缠绕成团。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '壳藏在里面',
      body: '它仍有一片退化的内壳，从外面看不到蜗牛那样的螺旋壳。',
    },
    {
      key: 'conservation',
      label: '保护与共读',
      title: '保留生活的地方',
      body: '保护岩岸水质，观察时让海兔留在水中，不刺激它释放墨汁。所引资料列为未评估；不据此推断种群安全。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '海兔保留在体内的小壳',
      body: 'J. G. Cooper 在 1863 年发表 Aplysia californica 这个名称。它头上的嗅角让人容易想到兔耳，实际作用是感受水里的化学信号。这只软体动物也保留着壳，只是壳已经退化并藏在身体内，从外面看不到蜗牛那样的螺旋壳。',
    },
  ],
  "keyFacts": [
    "头上的一对嗅角能够感受水中的化学信号，帮助它寻找同伴。",
    "加州海兔吃藻类等植物，常在长有海藻的浅水岩岸活动。",
    "它用身体下方的腹足爬行，背部两侧有能折叠的侧足。",
    "它把卵产在胶质卵带中，许多细长的卵带缠绕成团。",
    "它仍有一片退化的内壳，从外面看不到蜗牛那样的螺旋壳。"
  ],
  "threats": [
    "沿岸开发",
    "水体污染"
  ],
  "conservationActions": [
    "保护岩岸水质，观察时让海兔留在水中，不刺激它释放墨汁。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "observation",
      "label": "观察重点",
      "value": "耳朵般的嗅角"
    },
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "加利福尼亚北部至加利福尼亚湾的沿岸浅海"
    }
  ],
  "media": {
    "image": "./images/species/california-sea-hare/01-cover.webp",
    "alt": "加州海兔在自然栖息环境中的外形",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/california-sea-hare/02-observation.webp",
        "title": "耳朵般的嗅角",
        "alt": "加州海兔：耳朵般的嗅角",
        "caption": "AI 生成科学情景重建。头上的一对嗅角能够感受水中的化学信号，帮助它寻找同伴。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-hare/03-observation.webp",
        "title": "在石头上吃藻",
        "alt": "加州海兔：在石头上吃藻",
        "caption": "AI 生成科学情景重建。加州海兔吃藻类等植物，常在长有海藻的浅水岩岸活动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-hare/04-observation.webp",
        "title": "软身体向前爬",
        "alt": "加州海兔：软身体向前爬",
        "caption": "AI 生成科学情景重建。它用身体下方的腹足爬行，背部两侧有能折叠的侧足。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-hare/05-observation.webp",
        "title": "绕成一团的卵带",
        "alt": "加州海兔：绕成一团的卵带",
        "caption": "AI 生成科学情景重建。它把卵产在胶质卵带中，许多细长的卵带缠绕成团。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/california-sea-hare/06-observation.webp",
        "title": "壳藏在里面",
        "alt": "加州海兔：壳藏在里面",
        "caption": "AI 生成科学情景重建。它仍有一片退化的内壳，从外面看不到蜗牛那样的螺旋壳。",
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
      "title": "蒙特雷湾水族馆：加州海兔",
      "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-hare",
      "kind": "ecology",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "ADW：加州海兔未评估状态",
      "url": "https://animaldiversity.org/accounts/Aplysia_californica/",
      "kind": "conservation",
      "accessedAt": "2026-09-20"
    },
    {
      "title": "NCBI：海兔目分类",
      "url": "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6500",
      "kind": "taxonomy",
      "accessedAt": "2026-09-20"
    },
    {
      title: 'GBIF：加州海兔的科学命名记录',
      url: 'https://www.gbif.org/species/5191261',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-09-20",
  "updatedAt": "2026-09-20"
} as const satisfies Species;

export default profile;
