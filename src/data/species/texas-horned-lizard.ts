import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const TEXAS_HORNED_LIZARD_SOURCE_DATE = '2026-09-04' as const;

const TEXAS_HORNED_LIZARD_CONTENT_DATE = '2026-09-04' as const;

const TEXAS_HORNED_LIZARD_SOURCES = [
  {
    title: 'The Reptile Database: Phrynosoma cornutum',
    url: 'https://reptile-database.reptarium.cz/Phrynosoma/cornutum',
    kind: 'taxonomy',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'ITIS: Phrynosoma cornutum, TSN 173938',
    url: 'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=173938',
    kind: 'taxonomy',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: '國立臺灣博物館典藏：德州角蜥蜴',
    url: 'https://collections.culture.tw/ntm_collectionsweb/collection.aspx?GID=0WM6MA0EMB',
    kind: 'general',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: '国家濒管办 2026：《濒危野生动植物种国际贸易公约》附录（角蜥属所有种）',
    url: 'https://www.forestry.gov.cn/u/cms/www/202603/07094239sawe.pdf',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: '国家濒管办 2026：CITES附录调整公告（2026年3月5日生效）',
    url: 'https://www.forestry.gov.cn/lyj/1/gsgg/20260306/662047.html',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'University of Texas DigiMorph: Phrynosoma cornutum',
    url: 'https://digimorph.geo.utexas.edu/specimens/Phrynosoma_cornutum/whole/',
    kind: 'taxonomy',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2007: Phrynosoma cornutum',
    url: 'https://doi.org/10.2305/IUCN.UK.2007.RLTS.T64072A12741535.en',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Texas Parks and Wildlife Department: Texas Horned Lizard fact sheet',
    url: 'https://tpwd.texas.gov/huntwild/wild/species/thlizard/',
    kind: 'general',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'TPWD Texas Horned Lizard Watch 10-Year Summary: Background',
    url: 'https://tpwd.texas.gov/publications/pwdpubs/pwd_rp_w7000_1442/background/',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'TPWD Texas Horned Lizard Watch 10-Year Summary: Trends',
    url: 'https://tpwd.texas.gov/publications/pwdpubs/pwd_rp_w7000_1442/trends/',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Whitford & Bryant 1979: Behavior of a predator and its harvester-ant prey',
    url: 'https://doi.org/10.2307/1936605',
    kind: 'ecology',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Middendorf & Sherbrooke 1992: Canid elicitation of blood-squirting',
    url: 'https://doi.org/10.2307/1446212',
    kind: 'ecology',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Sherbrooke & Mason 2005: Coyote responses to antipredator compounds',
    url: 'https://digitalcommons.unl.edu/icwdm_usdanwrc/511/',
    kind: 'ecology',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Sherbrooke & Kimball 2024: Antipredator Blood-Squirting Defense in Horned Lizards (Phrynosoma)',
    url: 'https://doi.org/10.1643/h2021139',
    kind: 'ecology',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'TPWD Wildlife Research Highlights 2001: Regional body-size variation',
    url: 'https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_w7000_0280_05_01.pdf',
    kind: 'general',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'TPWD Wildlife Research Highlights 2003: Texas horned lizard nesting study',
    url: 'https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_w7000_0280_08_03.pdf',
    kind: 'ecology',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Montgomery, Mackessy & Moore 2003: Body-size variation from central Mexico to Colorado',
    url: 'https://doi.org/10.1670/208-01AN',
    kind: 'general',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Hughes et al. 2019: Geographic variation in body size and clutch size',
    url: 'https://doi.org/10.1643/CH-19-266',
    kind: 'ecology',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Haney et al. 2022: Museum and citizen-science evidence for range contraction',
    url: 'https://doi.org/10.1655/Herpetologica-D-21-00022',
    kind: 'distribution',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Williams, Rains & Hale 2019: Population genetic structure and reintroduction',
    url: 'https://doi.org/10.7717/peerj.7746',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Finger et al. 2022: Genome-scale lineage divergence and demographic history',
    url: 'https://doi.org/10.1093/gbe/evab260',
    kind: 'taxonomy',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'Hellgren et al. 2010: Burning, grazing, resources and survival in thornscrub',
    url: 'https://doi.org/10.2193/2009-090',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'TPWD: Laws and Regulations Applicable to Nongame Wildlife',
    url: 'https://tpwd.texas.gov/huntwild/wild/wildlife_diversity/habitat_assessment/laws.phtml',
    kind: 'conservation',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
  {
    title: 'SSAR North American species names: Phrynosoma cornutum',
    url: 'https://cnah.org/SSARnames.aspx?alien=0&taxon=99',
    kind: 'taxonomy',
    accessedAt: TEXAS_HORNED_LIZARD_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-phrynosoma-cornutum',
    slug: 'texas-horned-lizard',
    names: {
      zh: '德州角蜥',
      en: 'Texas Horned Lizard',
      aliases: ['德州角蜥蜴', 'Horned Toad', 'Horny Toad'],
    },
    scientificName: 'Phrynosoma cornutum',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Reptilia', '爬行纲'),
      taxon('Squamata', '有鳞目'),
      taxon('Phrynosomatidae', '角蜥科'),
      taxon('Phrynosoma', '角蜥属'),
    ),
    conservation: {
      ...conservation('LC', 'stable', 2007),
      assessor: 'Hammerson, G.A.（IUCN Red List，2007年评估）',
    },
    distribution: {
      realms: ['terrestrial'],
      continents: ['北美洲'],
      regions: [
        '美国南部大平原与德州大部',
        '美国科罗拉多东南部、堪萨斯、俄克拉何马与新墨西哥东部和南部',
        '美国亚利桑那东南角',
        '墨西哥索诺拉东北部、奇瓦瓦、杜兰戈东部、科阿韦拉、新莱昂、塔毛利帕斯、圣路易斯波托西与萨卡特卡斯',
      ],
      countries: ['美国', '墨西哥'],
      range:
        '德州角蜥的原生范围从美国南部大平原和西南部延伸到墨西哥北部与中北部，包括德州大部、俄克拉何马、堪萨斯、新墨西哥东部和南部、科罗拉多东南部和亚利桑那东南角；路易斯安那的记录可能并非原生。北卡罗来纳、佛罗里达等地另有引入记录或种群，不能把这些地点并入原生范围。2022年分析中，VertNet的1960至2019年记录支持东西方向的分布距离收缩，iNaturalist的2000至2019年记录却未在四个方向检出显著下降；资料年代、采样与探测偏差不同，不能把估算速率画成边界逐年平移，也不能把每个旧记录空缺都判作局地灭绝。',
      center: { lat: 31.5, lng: -101 },
    },
    habitats: [
      {
        name: '开阔短草草原与半干旱草地',
        realm: 'terrestrial',
        description:
          '稀疏草丛、裸地和蚁道交错，既让个体晒背、移动和取食，也保留贴地躲藏的斑块。',
        isPrimary: true,
      },
      {
        name: '荒漠灌丛与南德州刺灌丛',
        realm: 'terrestrial',
        description:
          '仙人掌、低矮灌木、草本和开阔地组成不均一遮蔽；管理试验显示火与放牧的效果会随强度、季节和地点改变。',
        isPrimary: true,
      },
      {
        name: '松散沙土与壤土微生境',
        realm: 'terrestrial',
        description:
          '可挖掘基底供浅埋、越冬、隔热和筑巢使用；本种也会利用啮齿动物洞穴或石块下方，不能把生境缩成纯沙漠。',
        isPrimary: true,
      },
    ],
    measurements: {
      length: {
        max: 11.6,
        unit: 'cm',
        note: '跨堪萨斯、德州、新墨西哥与墨西哥样本中，成年雌性最大吻肛长为116.3毫米；11.6厘米是换算后的研究样本最大值，不含尾，也不是物种绝对上限。',
      },
    },
    diet: {
      types: ['insectivore'],
      foods: [
        '收获蚁属（Pogonomyrmex）的原生收获蚁',
        '其他蚂蚁与少量其他小型节肢动物',
      ],
      description:
        '德州角蜥以蚂蚁为主食，尤其利用原生收获蚁。1979年新墨西哥研究中，Pogonomyrmex desertorum与P. rugosus是最重要猎物；个体通常在蚁巢盘和密集觅食纵队之外拾取少量工蚁，短暂停留后继续移动。这项结果不能改写成全分布区固定食谱或单一蚁种依赖。',
    },
    activity: [
      '白天活动，先晒背升温，再在开阔地与稀疏植被间觅食；炎热时会转入阴影或浅埋土中',
      '沿原生收获蚁活动区移动，以短而黏的舌逐只拾取小型猎物',
      '遇扰时可先静止依靠体色隐藏，再逃跑、压低或鼓胀宽扁身体，并把头后长棘朝向威胁',
      '部分近距离犬科攻击会触发眼眶窦喷血；实验不支持把它写成面对所有捕食者都会出现的反应',
      '在松散沙土或壤土中浅埋休息、隔热和越冬，也会使用啮齿动物洞或石下空隙',
      '繁殖季雌性可离开日常活动区挖掘深巢，产卵并回填；南德州研究结果不能代表所有纬度和种群',
    ],
    tags: [
      '爬行纲',
      '有鳞目',
      '角蜥科',
      '北美洲',
      '短草草原',
      '半干旱灌丛',
      '收获蚁',
      '眼眶窦喷血',
      '浅埋',
      '卵生',
      '德州受威胁物种',
      'CITES附录II',
      'IUCN无危',
    ],
    summary:
      '德州角蜥生活在北美开阔草原和半干旱灌丛，以原生收获蚁为重要食物。宽扁身体贴近地面，遇到部分近距离犬科攻击时，还能从眼周喷血防御。',
    description:
      '德州角蜥属于角蜥科，头后的一对长枕棘和身体两侧的两列缘棘是主要识别线索。褐色斑纹与浅色背中线帮助它隐蔽在沙土和枯草间，松散土壤也供它浅埋、越冬和筑巢。它会静止、逃跑、鼓胀或调整头棘方向应对威胁；喷血则有特定触发条件，实验显示血液可使部分犬科产生回避反应，活性成分仍未完全鉴定。全球无危评估与德州州级受威胁等级反映不同尺度的判断。',
    storySections: [
      {
        key: 'native-range-and-introductions',
        label: '分布',
        title: '原生分布与引入记录',
        body: '德州角蜥的原生范围从科罗拉多东南部、堪萨斯和大平原南部穿过德州、新墨西哥东部与南部及亚利桑那东南角，延伸到墨西哥北部和中北部；路易斯安那记录的原生地位存疑。北卡罗来纳、佛罗里达等东南部地点有引入记录或种群，这些记录不属于原生分布的连续延伸。2022年研究发现VertNet的1960至2019年记录到距范围中心的东、西方向距离分别以4.4和1.5千米/年下降，iNaturalist的2000至2019年记录却未在四个方向检出显著下降。两套资料年代、采样与探测偏差不同，速率不代表边界每年整齐平移。',
      },
      {
        key: 'horn-crown-and-side-fringes',
        label: '识别',
        title: '一对长枕棘和两列缘棘组成识别组合',
        body: '德州角蜥头后只有一对特别长的枕棘，喉部有一列增大鳞片，腹部两侧各有两列完整的缘棘；背部特化鳞片带明显棱脊。多数个体还能看到浅色背中线，以及从眼部向下和越过头顶的深色条纹。物种识别要把头棘、体侧缘棘、宽扁体形和色纹合在一起。',
      },
      {
        key: 'harvester-ant-foraging',
        label: '觅食',
        title: '在蚁群之间移动，每处只取少量工蚁',
        body: '1979年研究从日出到日落观察德州角蜥，Pogonomyrmex desertorum与P. rugosus是最重要猎物。蜥蜴较少在蚁巢盘或密集觅食纵队上久留，而是在不同蚁群之间移动，每处通常停留不足15分钟；样本平均日移动46.8米。这种取食节奏可能降低对单一蚁群的集中压力，但一个研究地点和时期不能定义全物种的移动距离、摄食量或食谱比例。',
      },
      {
        key: 'canid-triggered-blood-defense',
        label: '防御',
        title: '喷血需要近距离情境，也偏向特定捕食者',
        body: '眼眶周围静脉窦中的压力升高后，血液可从眼周开口喷出。1992年犬只实验里55只德州角蜥有47只喷血；犬只被限制、无法直接接触时没有喷血，人为触碰与犬只线索同时出现时也只有部分个体响应。2005年郊狼实验支持血浆或全血接触口腔、鼻腔时更容易引发惊跳或回避。2024年生物测定把引发负面口腔反应的活性线索缩小到血浆中表观分子量约800至1,600的未鉴定成分，并支持其与收获蚁食物来源有关；具体化合物和代谢路径仍未确定。研究者因此把它解释为针对部分犬科攻击的近距离、接触阶段防御，不能外推到所有捕食者、每次遭遇、固定成功率或保证逃生。',
      },
      {
        key: 'burial-and-deep-nests',
        label: '地下生活',
        title: '浅埋用于躲藏，产卵巢却能深入土层',
        body: '松散沙土和壤土让德州角蜥能浅埋避热、休息和越冬，也为雌性筑巢提供基底。南德州无线电追踪记录27个巢，巢平均深43厘米、长25厘米，平均窝卵数22枚，平均孵化间隔45天，研究期内还记录到同年第二窝。地点、雌体大小和产卵日期都会影响这些数值。',
      },
      {
        key: 'global-lc-local-declines',
        label: '保护',
        title: '全球无危和德州受威胁同时成立',
        body: 'IUCN在2007年把本种评为无危、趋势稳定，德州仍把它列为受威胁物种；历史下降与采集是记录到的压力。1997至2006年的志愿监测覆盖165个县，却因方法不统一和定量样线样本缩小，无法给出十年密度趋势。土地改变、道路、非选择性杀虫剂与原生收获蚁减少可能共同造成局地压力；红火蚁与下降的空间关联不能单独证明因果。复育还要尊重西、北、南三个主要遗传群的空间结构，不能任意混合来源。国家濒管办2026年现行附录还把角蜥属所有种列入CITES附录II；这表示国际贸易受管制，不等同于IUCN受威胁等级或全面禁采。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1825 年命名的北美角蜥',
        body: 'Harlan 在 1825 年正式命名德州角蜥，现用学名为 Phrynosoma cornutum。英语俗称 horned toad 虽带“蟾蜍”，它实际属于蜥蜴。对眼周喷血的研究后来从行为观察推进到血浆生物测定，但具体活性化合物和代谢路径仍未确定。',
      },
    ],
    keyFacts: [
      '现行分类接受Phrynosoma cornutum (Harlan, 1825)，归入角蜥科角蜥属。',
      '英文主名为 Texas Horned Lizard，中文资料也使用“德州角蜥蜴”。',
      '本种是蜥蜴，不是蟾蜍；Horned Toad和Horny Toad只是英语俗名。',
      '一对长枕棘、喉部一列增大鳞片和腹部两侧各两列完整缘棘构成关键识别组合。',
      '原生分布跨美国和墨西哥；美国东南部部分孤立记录或种群属于引入范围。',
      '2022年分析中，VertNet的1960至2019年记录支持东西方向收缩，iNaturalist的2000至2019年记录却未在四个方向检出显著下降；不能把任一记录空白直接判作局地灭绝。',
      'IUCN 2007年评估为LC、趋势稳定，没有判据代码；这一全球评估已经较旧。',
      '德州目前仍把本种列为受威胁物种，全球等级不能替代州级保护判断。',
      '国家濒管办2026年现行附录把角蜥属所有种（Phrynosoma spp.）列入CITES附录II；这表示国际贸易受管制，不等同于IUCN受威胁等级或全面禁采。',
      '开放草地、半干旱灌丛和带裸地的刺灌丛都能提供活动生境。',
      '松散沙土或壤土支持浅埋、越冬、隔热和筑巢；本种也会利用洞穴与石下空隙。',
      '德州两个管理区的成年雌雄平均全长约11.5至13.5厘米，地点与性别之间存在差异。',
      '跨墨西哥中部至科罗拉多的230件样本显示体形随纬度变化，不能用一个数字代表所有种群。',
      '收获蚁属的原生蚂蚁是重要猎物，其他蚂蚁和小型节肢动物也会进入食谱。',
      '1979年研究中个体平均日移动46.8米，每个蚁群附近通常停留不足15分钟。',
      '静止、逃跑、压低或鼓胀身体和调整头棘方向都属于喷血之前可用的防御。',
      '1992年受控犬只遭遇中55只里47只喷血；这个85%只属于该实验条件。',
      '犬只无法直接接触时该实验没有记录到喷血，说明视觉或气味线索本身不足以概括触发条件。',
      '2005年郊狼实验支持口腔或鼻腔受体参与对角蜥血液的厌恶反应。',
      '2024年生物测定把引发负面口腔反应的活性线索缩小到血浆中表观分子量约800至1,600的未鉴定成分；收获蚁食物来源得到实验支持，具体化合物和代谢路径仍未确定。',
      '喷血不是眼球破裂，也不能从生成图推断喷射距离、频率、血量或是否成功避敌。',
      '南德州27个巢平均有22枚卵、深43厘米、孵化间隔45天；这些都是特定研究均值。',
      '2019年核微卫星支持西、北、南三大遗传群；2022年nGBS的K=5结果进一步拆出平原内部结构，但作者认为额外结构可能反映距离隔离，并按三个主要群建模。',
      '遗传研究记录了群间混合、基因流和线粒体DNA渗入，没有据此拆分现行物种；复育与圈养繁殖仍应匹配三大来源群。',
    ],
    threats: [
      '集约农业与其他土地改变可转换或破碎开阔生境；现有研究没有把历史范围收缩按各原因定量归因',
      '非选择性杀虫剂及土地利用变化减少原生收获蚁等猎物；红火蚁与下降的关联尚不能单独证明因果',
      '道路死亡与非法采集会直接移除个体；德州州法禁止未经许可取用，处理或迁移须有科学采集许可',
    ],
    conservationActions: [
      '保留连通的原生短草草原、刺灌丛、裸地和松散土壤斑块，避免把生境管理成单一密草或裸地',
      '保护原生收获蚁及其觅食区，减少广谱杀虫剂，并同时监测蚁群与角蜥后再判断因果',
      '用统一样线、占域模型和重复调查更新全原生范围的分布、探测率、密度与长期趋势',
      '记录道路发现、交通量和季节热点，检验限速、警示与通行设施是否降低死亡',
      '执行德州等地的采集和持有限制，不从野外带走、跨区释放或为拍摄反复摆弄个体',
      '复育和圈养繁殖按来源地遗传群配对，并在放归前评估生境、猎物和长期监测能力',
      '把火与放牧作为地点化试验处理，记录强度、季节、植被、蚂蚁和存活率，不套用单一处方',
      '更新2007年的全球IUCN评估，把近年范围收缩、区域趋势和遗传结构纳入证据审查',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'iucn-status',
        label: 'IUCN全球等级',
        value: 'LC',
        unit: '无危',
        note: '2007年评估，趋势稳定；德州仍把本种列为受威胁物种。',
      },
      {
        key: 'maximum-sampled-female-svl',
        label: '研究样本最大吻肛长',
        value: '11.6',
        unit: '厘米',
        note: '跨堪萨斯、德州、新墨西哥与墨西哥的成年雌性样本；不含尾，不是物种绝对上限。',
      },
      {
        key: 'dog-encounter-blood-squirting',
        label: '受控犬只遭遇中喷血',
        value: '47/55',
        unit: '只',
        note: '1992年实验；85%不能外推成所有捕食者或野外遭遇的固定概率。',
      },
      {
        key: 'active-plasma-fraction',
        label: '活性血浆组分表观分子量',
        value: '800–1,600',
        note: '2024年分级与生物测定区间；确切化合物、分子组成和代谢路径仍未确定。',
      },
    ],
    media: {
      image:
        './images/species/texas-horned-lizard/01-open-prairie-cover.webp',
      alt: '开阔沙质短草草原中，恰好一只完整德州角蜥位于画面右侧，宽扁身体、头后长棘、四肢、足部和短尾均在画内，左侧保留安静的裸地与稀疏草丛',
      focalPoint: { x: 0.92, y: 0.415 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {
          image:
            './images/species/texas-horned-lizard/02-full-body-diagnostic-profile.webp',
          alt: '沙质草地上恰好一只完整德州角蜥呈三分之四侧面，宽扁躯干、一对长枕棘、较短侧棘、体侧缘棘和完整短尾清晰可见',
          title: '长枕棘与两列体侧缘棘',
          caption:
            'AI生成科学情景重建；画面表现外部识别组合。部分远侧肢体和细小鳞片互有遮挡，不能据此计数鳞片或足趾，也不能反测体长、体重、性别、年龄或地点。',
          focalPoint: { x: 0.5, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/texas-horned-lizard/03-harvester-ant-feeding.webp',
          alt: '沙地小型蚂蚁路径旁恰好一只完整德州角蜥低头伸出短舌，舌尖接近一只蚂蚁，少量蚂蚁分散经过，头棘、四足和短尾均在画内',
          title: '在收获蚁活动区逐只拾取',
          caption:
            'AI生成科学情景重建；一次伸舌静帧不能鉴定蚂蚁属种，也不能确认捕获、吞咽、当日摄食量、全食谱比例或野外地点。',
          focalPoint: { x: 0.5, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/texas-horned-lizard/04-ocular-sinus-defense.webp',
          alt: '开阔沙地上恰好一只完整德州角蜥站立，眼周向上喷出细短暗红液流和少量液滴，眼部没有伤口，四足、头棘与短尾均完整，画面没有捕食者',
          title: '眼眶窦喷血防御的重建瞬间',
          caption:
            'AI生成科学情景重建；细小液流只表现可能的喷血瞬间。画面没有触发者，不能说明捕食者种类、接触方式、喷射距离、血量、发生频率或防御结果。',
          focalPoint: { x: 0.56, y: 0.53 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/texas-horned-lizard/05-shallow-burial.webp',
          alt: '稀疏短草间恰好一只完整德州角蜥贴伏在松散沙土中，身体边缘覆盖薄层沙粒，头棘、四肢与完整短尾仍可辨认',
          title: '把宽扁身体压入松土',
          caption:
            'AI生成科学情景重建；静帧只表现浅埋开始时的姿态，不能确定温度、持续时间、越冬状态、捕食者存在或隐蔽成效。远侧肢体部分受躯干遮挡，不能据图计数足趾。',
          focalPoint: { x: 0.5, y: 0.56 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
        {
          image:
            './images/species/texas-horned-lizard/06-nesting-dig.webp',
          alt: '短草草原松土上恰好一只完整成年外观德州角蜥在小型浅坑旁以后足拨土，头棘、近侧四肢轮廓和短尾均在画内，画面没有卵或幼体',
          title: '松散土壤中的挖掘动作',
          caption:
            'AI生成科学情景重建；体形、浅坑和拨土动作不能确认性别、怀卵、产卵或巢穴用途，也不能从画面量出巢深、窝卵数或孵化时间。远侧前肢受身体遮挡。',
          focalPoint: { x: 0.51, y: 0.55 },
          credit: 'Fauna Atlas · AI 生成科学情景重建',
        },
      ],
    },
    sources: [
      ...TEXAS_HORNED_LIZARD_SOURCES,
      {
        title: 'GBIF: Phrynosoma cornutum (Harlan, 1825) nomenclatural record',
        url: 'https://www.gbif.org/species/5222413',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: TEXAS_HORNED_LIZARD_CONTENT_DATE,
    updatedAt: TEXAS_HORNED_LIZARD_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
