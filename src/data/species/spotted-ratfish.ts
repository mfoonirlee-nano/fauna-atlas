import type { Species } from '../../types/species.ts';

const profile = {
  "id": "spotted-ratfish",
  "slug": "spotted-ratfish",
  "names": {
    "zh": "斑点银鲛",
    "en": "Spotted Ratfish"
  },
  "scientificName": "Hydrolagus colliei",
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
      "scientificName": "Chondrichthyes",
      "zhName": "软骨鱼纲"
    },
    "order": {
      "scientificName": "Chimaeriformes",
      "zhName": "银鲛目"
    },
    "family": {
      "scientificName": "Chimaeridae",
      "zhName": "银鲛科"
    },
    "genus": {
      "scientificName": "Hydrolagus",
      "zhName": "兔银鲛属"
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
      "marine"
    ],
    "continents": [
      "北美洲"
    ],
    "regions": [
      "东北太平洋"
    ],
    "countries": [
      "美国",
      "加拿大",
      "墨西哥"
    ],
    "range": "分布于阿拉斯加至下加利福尼亚沿岸，常在泥底或岩底附近活动。"
  },
  "habitats": [
    {
      "name": "近底海域",
      "realm": "marine",
      "description": "分布于阿拉斯加至下加利福尼亚沿岸，常在泥底或岩底附近活动。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "贝类",
      "蟹",
      "虾",
      "多毛类",
      "小型底栖鱼"
    ],
    "description": '取食贝类、蟹、虾、多毛类、小型底栖鱼。'
  },
  "tags": [
    "斑点银鲛",
    "近底海域"
  ],
  "summary": '斑点银鲛在海底附近寻找贝类和甲壳动物。宽胸鳍、细长尾巴与浅色斑点容易辨认，背鳍前有带毒的棘。',
  "description": '斑点银鲛在阿拉斯加至下加利福尼亚沿岸的泥底、岩底附近寻找贝类、蟹、虾等动物，用齿板处理食物。它有大眼睛、钝短吻和宽阔的三角形胸鳍，光滑皮肤带浅斑，尾巴细长。第一背鳍前有带毒的棘，观察时不要接触。',
  "storySections": [
    {
      key: 'observation-1',
      label: '生活与认识',
      title: '大眼睛与短吻',
      body: '头部有大眼睛和钝短吻，光滑皮肤带浅色斑点。',
    },
    {
      key: 'observation-2',
      label: '生活与认识',
      title: '宽胸鳍和长尾',
      body: '胸鳍宽而呈三角形，尾部细长。雄性头部还有与交配有关的结构，雌性没有。',
    },
    {
      key: 'observation-3',
      label: '生活与认识',
      title: '背鳍前的棘',
      body: '第一背鳍前有一根带毒棘，可能造成疼痛伤口。通过影像观察，不接触活体。',
    },
    {
      key: 'observation-4',
      label: '生活与认识',
      title: '海底的食物',
      body: '贴近海底寻找贝类、甲壳类等食物，齿板帮助处理食物。',
    },
    {
      key: 'observation-5',
      label: '生活与认识',
      title: '卵鞘留在海底',
      body: '雌性产下带保护外鞘的卵，卵鞘最终留在海底。成鱼与卵鞘的并置图不表示守卵行为。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '学名中的“水兔”',
      body: 'Lay 与 Bennett 在 1839 年以 Chimaera colliei 描述本种，后来采用 Hydrolagus colliei。属名 Hydrolagus 来自希腊语“水”和“兔”，对应像兔的头部外观；中文名“斑点”则提示皮肤上的浅斑。它属于软骨鱼中的全头类，“水兔”形容头部外观。',
    },
  ],
  "keyFacts": [
    '头部有大眼睛和钝短吻，光滑皮肤带浅色斑点。',
    '胸鳍宽而呈三角形，尾部细长。雄性头部还有与交配有关的结构，雌性没有。',
    '雌性产下带保护外鞘的卵，卵鞘最终留在海底。成鱼与卵鞘的并置图不表示守卵行为。',
  ],
  "threats": [
    '全球物种级威胁排序尚未确认。',
  ],
  "conservationActions": [
    '用已有自然影像观察，不接触背鳍前的带毒棘。',
    '减少海域污染，不取走活体。',
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "近底海域"
    },
    {
      "key": "structure",
      "label": "观察重点",
      "value": "大眼睛与短吻"
    }
  ],
  "media": {
    "image": "./images/species/spotted-ratfish/01-cover.webp",
    "alt": "斑点银鲛及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/spotted-ratfish/02-observation.webp",
        "title": "大眼睛与短吻",
        "alt": "斑点银鲛：大眼睛与短吻，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。头部有大眼睛和钝短吻，光滑皮肤带浅色斑点。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-ratfish/03-observation.webp",
        "title": "宽胸鳍和长尾",
        "alt": "斑点银鲛：宽胸鳍和长尾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。胸鳍宽而呈三角形，尾部细长。成鱼图展示雌性形态重建，没有雄性头部交配结构。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-ratfish/04-observation.webp",
        "title": "背鳍前的棘",
        "alt": "斑点银鲛：背鳍前的棘，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。第一背鳍前有一根带毒棘，观察以影像为主，不接触活体。微小结构比例为重建。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-ratfish/05-observation.webp",
        "title": "海底的食物",
        "alt": "斑点银鲛：海底的食物，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。贴近海底寻找贝类、甲壳类等食物，齿板帮助处理食物。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/spotted-ratfish/06-observation.webp",
        "title": "卵鞘留在海底",
        "alt": "斑点银鲛：卵鞘留在海底，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。雌性产下带保护外鞘的卵。图中成鱼和卵鞘作情景对照，不表示成鱼守卵，也不依据图判断胚胎阶段。",
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
      "title": "佛罗里达博物馆：斑点银鲛形态与生态",
      "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/spotted-ratfish/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "Harvard MCZ：软骨鱼纲与全头亚纲分类链",
      "url": "https://mczbase.mcz.harvard.edu/name/Hydrolagus%20colliei",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名",
      "url": "https://www.marinespecies.org/aphia.php?id=271406&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
