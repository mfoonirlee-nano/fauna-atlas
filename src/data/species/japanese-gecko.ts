import type { Species } from '../../types/species.ts';

const profile = {
  "id": "japanese-gecko",
  "slug": "japanese-gecko",
  "names": {
    "zh": "多疣壁虎",
    "en": "Japanese Gecko",
    "aliases": [
      "日本壁虎"
    ]
  },
  "scientificName": "Gekko japonicus",
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
      "scientificName": "Reptilia",
      "zhName": "爬行纲"
    },
    "family": {
      "scientificName": "Gekkonidae",
      "zhName": "壁虎科"
    },
    "genus": {
      "scientificName": "Gekko",
      "zhName": "壁虎属"
    },
    "order": {
      "scientificName": "Squamata",
      "zhName": "有鳞目"
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
    "assessor": "熊本市动植物园物种资料注明全球 IUCN LC。当前引用未独立核实评估日期与种群趋势，因此不补写年份或稳定趋势；局部保护状况可以不同。"
  },
  "distribution": {
    "realms": [
      "terrestrial"
    ],
    "continents": [
      "亚洲"
    ],
    "regions": [
      "建筑墙面、缝隙与附近植被"
    ],
    "countries": [
      "中国",
      "日本",
      "韩国"
    ],
    "range": "主要分布于中国东部、日本和韩国南部，能在住宅、旧街区等人类建筑周围生活。各地出现范围与季节不同，不能把所有墙上的壁虎都认作本种。",
    "center": {
      "lat": 31.3,
      "lng": 120.6
    }
  },
  "habitats": [
    {
      "name": "建筑墙面、缝隙与附近植被",
      "realm": "terrestrial",
      "description": "主要分布于中国东部、日本和韩国南部，能在住宅、旧街区等人类建筑周围生活。各地出现范围与季节不同，不能把所有墙上的壁虎都认作本种。",
      "isPrimary": true
    }
  ],
  "measurements": {},
  "diet": {
    "types": [
      "insectivore"
    ],
    "foods": [
      "昆虫",
      "其他小型无脊椎动物"
    ],
    "description": "它捕食昆虫等小型无脊椎动物，夜间可在灯光附近寻找猎物。灯边的一次停留不能说明它只吃飞蛾，也不要为了观察而给它投喂。"
  },
  "tags": [
    "多疣壁虎",
    "建筑墙面、缝隙与附近植被"
  ],
  "summary": "多疣壁虎常在夜间爬上墙面捕食小虫，脚趾上的微细结构帮助它附着。",
  "description": "多疣壁虎体色多为灰褐色，背部散布小疣粒，四肢末端有展开的脚趾。相近壁虎需要比较鳞片等细节，墙面、体色或一张远照不能独立确定种名。多疣壁虎主要在夜间活动，白天可藏在缝隙里。趾下微细刚毛帮助附着，爬墙不是靠吸盘吸住；普通照片看不清刚毛的微观结构。遇到捕食者时它可能断尾，随后再生，观察时不要触碰或拉尾巴。雌壁虎产卵，研究记录每窝通常两枚卵。幼体孵出后已有四肢和尾巴，逐渐生长，不经历蝌蚪或蛹的阶段。图中卵和幼体分别展示不同阶段，非同一窝的成长记录。",
  "storySections": [
    {
      "key": "appearance",
      "label": "外形观察",
      "title": "从外形辨认",
      "body": "多疣壁虎体色多为灰褐色，背部散布小疣粒，四肢末端有展开的脚趾。相近壁虎需要比较鳞片等细节，墙面、体色或一张远照不能独立确定种名。"
    },
    {
      "key": "movement",
      "label": "活动与环境",
      "title": "在生活场景中观察",
      "body": "多疣壁虎主要在夜间活动，白天可藏在缝隙里。趾下微细刚毛帮助附着，爬墙不是靠吸盘吸住；普通照片看不清刚毛的微观结构。遇到捕食者时它可能断尾，随后再生，观察时不要触碰或拉尾巴。"
    },
    {
      "key": "feeding",
      "label": "食物与身体",
      "title": "怎样寻找食物",
      "body": "它捕食昆虫等小型无脊椎动物，夜间可在灯光附近寻找猎物。灯边的一次停留不能说明它只吃飞蛾，也不要为了观察而给它投喂。"
    },
    {
      "key": "life-cycle",
      "label": "成长与生活史",
      "title": "从幼体到成体",
      "body": "雌壁虎产卵，研究记录每窝通常两枚卵。幼体孵出后已有四肢和尾巴，逐渐生长，不经历蝌蚪或蛹的阶段。图中卵和幼体分别展示不同阶段，非同一窝的成长记录。"
    },
    {
      "key": "taxonomy",
      "label": "分类与范围",
      "title": "学名指向的范围",
      "body": "本档案限定为 Gekko japonicus，采用爬行纲、有鳞目、壁虎科、壁虎属的关系。多疣壁虎与铅山壁虎等近缘种分别记录，不因都住在墙上而合并。"
    },
    {
      "key": "conservation",
      "label": "保护与共读",
      "title": "辨认与观察任务",
      "body": "辨认问题：它展开的脚趾在身体哪个位置？观察任务：在原处远看一只壁虎，画下头、四肢与完整尾巴；不捕捉、不照强光，不诱发断尾。"
    },
    {
      "key": "discovery-naming",
      "label": "发现与命名",
      "title": "多疣壁虎的学名与记录",
      "body": "本种名称记录可追溯到 1836 年，如今使用 Gekko japonicus。当前 Reptile Database 按命名法规把作者归为 Duméril 与 Bibron，GBIF 仍记作 Schlegel；本档案注明这一来源差异，名称年份不当作人类首次见到壁虎的时间。"
    }
  ],
  "keyFacts": [
    "多疣壁虎体色多为灰褐色，背部散布小疣粒，四肢末端有展开的脚趾。相近壁虎需要比较鳞片等细节，墙面、体色或一张远照不能独立确定种名。",
    "它捕食昆虫等小型无脊椎动物，夜间可在灯光附近寻找猎物。灯边的一次停留不能说明它只吃飞蛾，也不要为了观察而给它投喂。",
    "雌壁虎产卵，研究记录每窝通常两枚卵。幼体孵出后已有四肢和尾巴，逐渐生长，不经历蝌蚪或蛹的阶段。图中卵和幼体分别展示不同阶段，非同一窝的成长记录。"
  ],
  "threats": [
    "栖息地改变",
    "人为干扰"
  ],
  "conservationActions": [
    "按场所规则在原处观察，为动物保留取食、休息和繁殖空间。"
  ],
  "metrics": {},
  "featuredStats": [
    {
      "key": "habitat",
      "label": "生活环境",
      "value": "建筑墙面、缝隙与附近植被"
    },
    {
      "key": "observation",
      "label": "观察重点",
      "value": "背上的小疣粒"
    }
  ],
  "media": {
    "image": "./images/species/japanese-gecko/01-cover.webp",
    "alt": "多疣壁虎及其生活环境，AI 生成科学情景重建",
    "focalPoint": {
      "x": 0.7,
      "y": 0.5
    },
    "credit": "Fauna Atlas · AI 生成科学情景重建",
    "gallery": [
      {
        "image": "./images/species/japanese-gecko/02-observation.webp",
        "title": "背上的小疣粒",
        "alt": "多疣壁虎：背上的小疣粒，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。观察背部纹理；近缘种辨认还需要鳞片等细节。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-gecko/03-observation.webp",
        "title": "展开的脚趾",
        "alt": "多疣壁虎：展开的脚趾，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。玻璃上的视角展示趾部，微细刚毛没有按真实尺度画出。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-gecko/04-observation.webp",
        "title": "夜间寻找小虫",
        "alt": "多疣壁虎：夜间寻找小虫，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。重建捕食情景，静图不能证明实际捕食动作或食谱频率。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-gecko/05-observation.webp",
        "title": "缝隙里的卵",
        "alt": "多疣壁虎：缝隙里的卵，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示卵期，放大重建、非实测比例；不翻动缝隙寻找卵。",
        "focalPoint": {
          "x": 0.5,
          "y": 0.5
        },
        "credit": "Fauna Atlas · AI 生成科学情景重建"
      },
      {
        "image": "./images/species/japanese-gecko/06-observation.webp",
        "title": "幼体的完整尾巴",
        "alt": "多疣壁虎：幼体的完整尾巴，AI 生成科学情景重建",
        "caption": "AI 生成科学情景重建。展示幼体外形，不代表刚孵出的实测尺寸。",
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
      "title": "GBIF：接受学名与分类链",
      "url": "https://www.gbif.org/species/2447295",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "壁虎基因组、趾垫与断尾再生",
      "url": "https://doi.org/10.1038/ncomms10033",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "城市微栖息地研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6394305/",
      "kind": "distribution",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "卵与发育研究",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9026794/",
      "kind": "ecology",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "Reptile Database：分类与命名对照",
      "url": "https://reptile-database.reptarium.cz/Gekko/japonicus",
      "kind": "taxonomy",
      "accessedAt": "2026-10-14"
    },
    {
      "title": "熊本市动植物园：IUCN 等级",
      "url": "https://www.ezooko.jp/rel_dgram/pub/detail.aspx?bk=1&c_id=30&id=277&pg=5",
      "kind": "conservation",
      "accessedAt": "2026-10-14"
    }
  ],
  "featured": true,
  "publishedAt": "2026-10-14",
  "updatedAt": "2026-10-14"
} as const satisfies Species;

export default profile;
