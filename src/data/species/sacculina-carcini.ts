import type { Species } from '../../types/species.ts';

const profile = {
    "id": "species-sacculina-carcini",
    "slug": "sacculina-carcini",
    "names": {
      "zh": "蟹奴",
      "en": "Crab Hacker Barnacle",
      "aliases": []
    },
    "scientificName": "Sacculina carcini",
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
        "scientificName": "Thecostraca",
        "zhName": "鞘甲纲"
      },
      "order": {
        "scientificName": "Rhizocephala",
        "zhName": "根头目"
      },
      "family": {
        "scientificName": "Sacculinidae",
        "zhName": "蟹奴科"
      },
      "genus": {
        "scientificName": "Sacculina",
        "zhName": "蟹奴属"
      }
    },
    "measurements": {},
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
      "assessor": "未核实到本种全球 IUCN 评估；暂记 NE，不设评估年份。"
    },
    "distribution": {
      "realms": [
        "marine"
      ],
      "continents": [
        "欧洲"
      ],
      "regions": [
        "东北大西洋沿岸",
        "地中海"
      ],
      "countries": [
        "英国",
        "爱尔兰"
      ],
      "range": '蟹奴的原生记录从斯堪的纳维亚沿岸向南延伸至地中海，英国和爱尔兰也有多处记录。它寄生于浅海蟹类；寄生者的实际分布需要单独调查，欧洲绿蟹的全球入侵地点未必都有蟹奴。'
    },
    "habitats": [
      {
        "name": "浅海蟹类宿主体内与腹下",
        "realm": "marine",
        "description": "幼体在水中生活；进入宿主后，蟹奴在蟹体内扩展吸收组织，并从腹下伸出繁殖囊体。",
        "isPrimary": true
      }
    ],
    "diet": {
      "types": [
        "carnivore"
      ],
      "foods": [
        "从蟹宿主体内吸收的营养物质"
      ],
      "description": '成体通过体内分枝的根状组织吸收蟹宿主的营养。它没有吞食猎物的口和消化道。'
    },
    "activity": [
      "幼体浮游",
      "成体内寄生",
      "腹下囊体繁殖"
    ],
    "tags": [
      "寄生藤壶",
      "根状组织",
      "繁殖囊体",
      "蟹类宿主",
      "海洋"
    ],
    "summary": "蟹奴长大后失去分节外形和附肢，在蟹体内伸展根状组织吸收营养。蟹腹下露出的软囊，承担着它的繁殖工作。",
    "description": "蟹奴是藤壶的亲属，属于鞘甲纲。幼体仍保留甲壳动物的特征，成体却变成体内的吸收网络与体外的繁殖囊体。",
    "storySections": [
      {
        key: 'identity',
        label: '认识蟹奴',
        title: '蟹腹下藏着藤壶的亲属',
        body: '蟹奴属于节肢动物门、鞘甲纲，与岸边的藤壶有亲缘关系。成体没有硬壳和步足，幼体却保留甲壳动物特征。研究者结合幼体形态和分子资料确认分类；Høeg 等人的修订把这类动物归入根头目。',
      },
      {
        key: 'interna',
        label: '体内生活',
        title: '根状组织伸入宿主身体',
        body: '蟹奴进入蟹体内后，长出称为 interna 的分枝组织，伸展在宿主体腔和组织之间，从中取得营养。“根状”形容这套动物组织的外形。',
      },
      {
        key: 'externa',
        label: '腹下囊体',
        title: '露在外面的部分负责繁殖',
        body: '蟹奴称为 externa 的外部软囊从宿主腹部下方露出，经穿过体壁的短柄连接内部组织。囊体负责繁殖，可呈奶油色至褐色，外形为扁椭圆形。它与蟹自身的卵块不同，同一只蟹也可能因多重感染出现多个囊体。',
      },
      {
        key: 'larvae',
        label: '幼体与定居',
        title: '从浮游幼体进入寄生生活',
        body: '蟹奴经历无节幼体和金星幼体等阶段。雌性幼体在合适的蟹体表定居，把将要发育的寄生组织送入宿主体内。雄性幼体则与雌性的外部囊体发生联系，参与受精。雌雄的发育路径各不相同。',
      },
      {
        key: 'host',
        label: '宿主变化',
        title: '宿主的繁殖与行为受到影响',
        body: '雄蟹和雌蟹都可能感染蟹奴。感染会抑制宿主繁殖、影响蜕壳，一些雄蟹的腹部外形还会变得像雌蟹。研究者观察到宿主照料蟹奴囊体的行为，但这项观察并未说明蟹奴通过哪个脑区影响宿主。',
      },
      {
        key: 'conservation',
        label: '分布与观察',
        title: '记录宿主，也记录寄生者',
        body: '蟹奴的全球 IUCN 评估尚未核实，种群趋势未知。调查者需要记录宿主身份、地点和腹下囊体特征，并区分近似寄生种。浅海生境和长期物种记录能帮助研究这种寄生关系。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '外形变了，幼体仍留下分类线索',
        body: 'Thompson 于 1836 年描述了这个物种，现用学名为 Sacculina carcini。长大的蟹奴只剩蟹体内的分枝组织和腹下软囊，看不出普通藤壶的样子。幼体的甲壳动物特征和后来的分子研究帮助研究者确认了它的分类归属。',
      },
    ],
    "keyFacts": [
      '蟹奴是寄生的藤壶亲属。',
      '成体分为体内吸收组织和体外繁殖囊体。',
      '腹下软囊与蟹的卵块不同。',
      '雄蟹和雌蟹都可能感染。',
      '幼体保留甲壳动物特征。',
      '原生记录从斯堪的纳维亚沿岸延伸到地中海。',
    ],
    "threats": [
      "本种全球数量变化和威胁程度缺少已核实资料。"
    ],
    "conservationActions": [
      "调查时同时鉴定宿主与寄生者。",
      "保留浅海生境，并记录采样位置与感染情况。"
    ],
    "featuredStats": [
      {
        "key": "body",
        "label": "成体结构",
        "value": "内外两部"
      },
      {
        "key": "feeding",
        "label": "营养方式",
        "value": "寄生吸收"
      },
      {
        "key": "host",
        "label": "常见宿主",
        "value": "欧洲绿蟹"
      },
      {
        "key": "status",
        "label": "保护等级",
        "value": "NE"
      }
    ],
    "sources": [
      {
        "title": "OBIS — Sacculina carcini 分类归属",
        "url": "https://obis.org/taxon/134805",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "Høeg 等 — 根头类分子分类修订（根头目口径）",
        "url": "https://academic.oup.com/zoolinnean/article/190/2/632/5648055",
        "kind": "taxonomy",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "2022 — 蟹奴内寄生生活的基因组适应",
        "url": "https://tbg.senckenberg.de/wp-content/uploads/2022/10/Genome-Biology-and-Evolution.pdf",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "MarLIN — 蟹奴形态、生活史与分布",
        "url": "https://www.marlin.ac.uk/species/detail/2233",
        "kind": "general",
        "accessedAt": "2026-09-08"
      },
      {
        "title": "2014 — 多个外囊与多重感染",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4222215/",
        "kind": "ecology",
        "accessedAt": "2026-09-08"
      },
      {
        title: 'GBIF：Sacculina carcini 的命名作者与年份',
        url: 'https://www.gbif.org/species/5166612',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    "media": {
      "image": "./images/species/sacculina-carcini/01-cover.webp",
      "alt": "蟹腹下露出黄色蟹奴囊体，完整宿主位于画面右侧。",
      "focalPoint": {
        "x": 0.93,
        "y": 0.35
      },
      "credit": "Fauna Atlas · AI 生成科学情景重建",
      "gallery": [
        {
          "image": "./images/species/sacculina-carcini/02-externa.webp",
          "alt": "蟹腹下的浅黄色软囊连接在宿主体壁附近。",
          "title": "外部繁殖囊体",
          "caption": "AI 生成外囊近景；腹部细节经过简化，不能用于物种鉴定。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/sacculina-carcini/03-interna.webp",
          "alt": "蟹体剖面内的分枝组织连接到腹下囊体。",
          "title": "体内根状组织",
          "caption": "AI 生成剖面示意；为展示连接关系，外囊与宿主的距离和连接柄长度经过夸张，分枝与器官比例不代表实测解剖位置。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/sacculina-carcini/04-larva.webp",
          "alt": "透明的浮游幼体伸出带刚毛的附肢。",
          "title": "浮游幼体",
          "caption": "AI 生成无节幼体示意；细毛数量和比例不能用于鉴定或测量。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/sacculina-carcini/05-host.webp",
          "alt": "海底蟹的腹下可见寄生囊体，附肢靠近腹部。",
          "title": "宿主与囊体",
          "caption": "AI 生成宿主姿态；静态配图不能证明照料行为的过程。",
          "focalPoint": {
            "x": 0.5,
            "y": 0.5
          },
          "credit": "Fauna Atlas · AI 生成科学情景重建"
        },
        {
          "image": "./images/species/sacculina-carcini/06-habitat.webp",
          "alt": "浅海岩石与海藻之间有一只小蟹。",
          "title": "浅海宿主生境",
          "caption": "AI 生成生境重建；不对应采集地点，背面看不到寄生囊体。",
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
