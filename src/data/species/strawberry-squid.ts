import type { Species } from '../../types/species.ts';

const profile = {
  "id": "strawberry-squid",
  "slug": "strawberry-squid",
  "names": {
    "zh": "草莓鱿鱼",
    "en": "Strawberry Squid"
  },
  "scientificName": "Histioteuthis heteropsis",
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
      "scientificName": "Oegopsida",
      "zhName": "开眼目"
    },
    "family": {
      "scientificName": "Histioteuthidae",
      "zhName": "帆乌贼科"
    },
    "genus": {
      "scientificName": "Histioteuthis",
      "zhName": "帆乌贼属"
    }
  },
  "conservation": {
    "system": "IUCN Red List",
    "code": "LC",
    "label": {
      "zh": "无危",
      "en": "Least Concern"
    },
    "trend": "unknown",
    "assessor": "采用 2010 年评估的 LC（无危）；WoRMS 提供 IUCN 等级，SeaLifeBase 检索摘要提供评估日期。原 IUCN 页本次无法读取，全球趋势保留 unknown。",
    "assessedYear": 2010
  },
  "distribution": {
    "realms": [
      "marine"
    ],
    "continents": [],
    "regions": [
      "东太平洋中层水域"
    ],
    "countries": [],
    "range": '生活在东太平洋中层水域，白天常见于约 200 至 1,000 米深处，夜间可向较浅水层移动。'
  },
  "habitats": [
    {
      "name": "深海中层水域",
      "realm": "marine",
      "description": '生活在东太平洋中层水体，白天常见于约 200 至 1,000 米深处，夜间可向较浅水层移动。',
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "carnivore"
    ],
    "foods": [
      "虾",
      "鱼",
      "其他鱿鱼"
    ],
    "description": "捕食虾、鱼和其他鱿鱼，利用两眼对不同光照条件的适应寻找食物。"
  },
  "tags": [
    "草莓鱿鱼",
    "深海中层水域"
  ],
  "summary": '草莓鱿鱼生活在东太平洋中层水域，两眼大小不同：大左眼利用上方微光，小右眼寻找下方黑暗中的发光点。',
  "description": '草莓鱿鱼的左眼较大，镜片常带黄色，右眼较小；两眼适合观察不同光照方向。它可倾斜、头朝下悬游，捕食虾、鱼和其他鱿鱼。体表还有小型发光器，帮助减弱从下方看到的轮廓。红色身体在观察灯下鲜明，在深海自然环境中则显得更暗。',
  "storySections": [
    {
      key: 'observation-1',
      label: '左眼',
      title: '大左眼收集上方微光',
      body: '较大的左眼常有黄色镜片，能利用上方传来的微光辨认猎物轮廓。眼睛的大小和方向与中层水域的光照条件有关。',
    },
    {
      key: 'observation-2',
      label: '右眼',
      title: '小右眼寻找下方发光点',
      body: '右眼较小，适合探测下方暗水中的生物发光。两眼面向不同光照方向，承担互补的观察任务。',
    },
    {
      key: 'observation-3',
      label: '悬游',
      title: '倾斜姿态让大眼朝上',
      body: '草莓鱿鱼可倾斜身体、头部朝下，让大左眼向上观察。这是可出现的悬游姿态，游动与取食时仍会调整身体。',
    },
    {
      key: 'observation-4',
      label: '发光器',
      title: '小型发光器减弱身体轮廓',
      body: '体表分布小型发光器，可帮助减弱从下方看到的轮廓。实际亮度和发光器排列需要观察与测量，不能从外观重建推算。',
    },
    {
      key: 'observation-5',
      label: '附肢',
      title: '鳍、腕与触腕帮助运动和捕食',
      body: '鳍位于外套膜两侧，头前有腕和触腕，帮助控制运动与接近猎物。触腕伸展程度会随行为改变。',
    },
    {
      key: 'conservation',
      label: '保护',
      title: '全球等级来自 2010 年评估',
      body: '现有来源列本种 2010 年评估为无危，全球种群趋势尚未核实。深海观察记录有助于了解活动和分布，但局部影像还不能代表全球数量。',
    },
    {
      key: 'discovery-naming',
      label: '发现与命名',
      title: '1913 年命名的两眼不对称鱿鱼',
      body: 'S. S. Berry 在 1913 年正式命名草莓鱿鱼，现用名称为 Histioteuthis heteropsis。红色身体和点状发光器使它具有草莓般的外观；真正特别的是两眼结构不同。后来的深海观察把大左眼朝上、小右眼朝下的分工，与微光和生物发光联系起来。',
    },
  ],
  "keyFacts": [
    "草莓鱿鱼两侧的眼睛大小不同：左眼大，右眼小。",
    "捕食虾、鱼和其他鱿鱼，利用两眼对不同光照条件的适应寻找食物。"
  ],
  "threats": [
    "本次未核实全球种群趋势；不把局部观察记录当作种群数量。"
  ],
  "conservationActions": [
    "通过研究机构的自然影像认识深海动物，减少进入海洋的垃圾。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "栖息环境",
      "value": "深海中层水域"
    },
    {
      "key": "observation",
      "label": "观察提示",
      "value": "大大的左眼"
    },
    {
      "key": "status",
      "label": "全球保护等级",
      "value": "无危",
      "note": '2010 年评估为无危；全球趋势尚未核实。'
    }
  ],
  "media": {
    "image": "./images/species/strawberry-squid/01-cover.webp",
    "alt": "草莓鱿鱼及其栖息环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/strawberry-squid/02-observation.webp",
        "title": "大大的左眼",
        "alt": "草莓鱿鱼：大大的左眼",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。本图展示左侧的大眼睛，镜片常带黄色。大眼能利用上方传来的微光寻找猎物轮廓。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/strawberry-squid/03-observation.webp",
        "title": "另一边的小眼睛",
        "alt": "草莓鱿鱼：另一边的小眼睛",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。本图展示右侧较小的眼睛。它能寻找下方暗水中的生物发光，两张侧面图用于比较结构，不是同一次转身的连拍。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/strawberry-squid/04-observation.webp",
        "title": "头朝下悬游",
        "alt": "草莓鱿鱼：头朝下悬游",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。草莓鱿鱼可在水中倾斜、头部朝下，大左眼向上观察。画面表现一种姿态，不代表它始终如此游动。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/strawberry-squid/05-observation.webp",
        "title": "身上的发光器",
        "alt": "草莓鱿鱼：身上的发光器",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。身体表面分布着小型发光器，可帮助减弱从下方看到的轮廓。图中的点状结构和亮度属于重建，不能作为发光器排列图谱。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/strawberry-squid/06-observation.webp",
        "title": "鳍与腕",
        "alt": "草莓鱿鱼：鳍与腕",
        "caption": "AI 生成科学情景重建。放大展示，非实测比例。找找外套膜两侧的鳍，再看头部前方的腕与触腕。触腕伸展程度会变化，图中长度不能用来实测身体比例。",
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
      "title": "MBARI：眼睛、发光器与栖息环境",
      "url": "https://www.mbari.org/animal/strawberry-squid/",
      "kind": "ecology",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "蒙特雷湾水族馆：分布与食物",
      "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/strawberry-squid",
      "kind": "general",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "WoRMS：接受学名与帆乌贼科",
      "url": "https://www.marinespecies.org/aphia.php?id=341868&p=taxdetails",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "OBIS：六级分类归属",
      "url": "https://obis.org/taxon/341868",
      "kind": "taxonomy",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "IUCN：2014 年发布的评估记录",
      "url": "https://www.iucnredlist.org/species/162925/953880",
      "kind": "conservation",
      "accessedAt": "2026-10-09"
    },
    {
      "title": "SeaLifeBase：等级与 2010 年评估日期（检索摘要）",
      "url": "https://www.sealifebase.org/summary/58125",
      "kind": "conservation",
      "accessedAt": "2026-10-09"
    },
    {
      title: 'GBIF: Histioteuthis heteropsis (S.S.Berry, 1913) nomenclatural record',
      url: 'https://www.gbif.org/species/2290654',
      kind: 'taxonomy',
      accessedAt: '2026-10-11',
    },
  ],
  "featured": true,
  "publishedAt": "2026-10-09",
  "updatedAt": "2026-10-09"
} as const satisfies Species;

export default profile;
