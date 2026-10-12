import type { SpeciesSource, Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const CHAMBERED_NAUTILUS_SOURCE_DATE = '2026-08-28' as const;

const CHAMBERED_NAUTILUS_CONTENT_DATE = '2026-08-28' as const;

const CHAMBERED_NAUTILUS_SOURCES = [
  {
    title: 'WoRMS/MolluscaBase — Nautilus pompilius (accepted; AphiaID 216384)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=216384',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST — full classification of Nautilus pompilius',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/216384',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'ICZN Opinion 2426 — neotype designation for Nautilus pompilius',
    url: 'https://doi.org/10.21805/bzn.v75.a063',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Saunders et al. 2017 — neotype and geographic variation in Nautilus pompilius',
    url: 'https://doi.org/10.4003/006.035.0102',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Barord et al. 2023 — three new Nautilus species and revised N. pompilius diagnosis',
    url: 'https://doi.org/10.3897/zookeys.1143.84427',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Nautilus pompilius suluensis (junior subjective synonym)',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=1902961',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'WoRMS — Nautilus genus record and accepted children',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=204549',
    kind: 'taxonomy',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Combosch et al. 2017 — population genomic structure across the Indo-Pacific',
    url: 'https://doi.org/10.1111/mec.14344',
    kind: 'distribution',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Williams et al. 2015 — genetic structure around Australia and the Philippines',
    url: 'https://doi.org/10.1111/mec.13255',
    kind: 'distribution',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Vandepas et al. 2016 — revisited phylogeography of Nautilus pompilius',
    url: 'https://doi.org/10.1002/ece3.2248',
    kind: 'distribution',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'FAO 2005 — Cephalopods of the World, Volume 1',
    url: 'https://www.fao.org/4/a0150e/a0150e00.htm',
    kind: 'general',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2021 — Nautilus genome, pinhole eye and shell biomineralization',
    url: 'https://doi.org/10.1038/s41559-021-01448-6',
    kind: 'general',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search — Nautilus pompilius',
    url: 'https://www.iucnredlist.org/search?query=Nautilus%20pompilius&searchType=species',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ — treatment of species absent from the Red List',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'CITES CoP17 Proposal 48 — inclusion of Nautilidae in Appendix II',
    url: 'https://cites.org/sites/default/files/eng/cop/17/prop/060216/E-CoP17-Prop-48%20Rev.pdf',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'NOAA Fisheries — Chambered Nautilus status and conservation',
    url: 'https://www.fisheries.noaa.gov/species/chambered-nautilus',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'NOAA 2017 — Endangered Species Act status review for the Chambered Nautilus',
    url: 'https://repository.library.noaa.gov/view/noaa/16079',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: '农业农村部、国家林业和草原局 — 国家重点保护野生动物名录（2021）',
    url: 'https://yyj.moa.gov.cn/gzdt/202102/P020210205564727206658.pdf',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Dunstan et al. 2010 — Philippine fishery decline versus an unfished population',
    url: 'https://doi.org/10.1016/j.fishres.2010.06.015',
    kind: 'conservation',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Dunstan et al. 2011 — life history and demographics at Osprey Reef',
    url: 'https://doi.org/10.1371/journal.pone.0016312',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Dunstan et al. 2011 — vertical distribution and migration patterns',
    url: 'https://doi.org/10.1371/journal.pone.0016311',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Dunstan et al. 2011 — population size, demography and BRUVS monitoring',
    url: 'https://doi.org/10.1371/journal.pone.0016716',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Hurley et al. 1978 — adjustable pinhole eye of Nautilus',
    url: 'https://doi.org/10.1002/jez.1402050106',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'von Byern et al. 2012 — adhesive mechanism of suckerless digital tentacles',
    url: 'https://doi.org/10.1016/j.zool.2011.08.002',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Basil et al. 2005 — rhinophores and tentacles in odor orientation',
    url: 'https://doi.org/10.1080/10236240500310096',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Westermann et al. 2004 — aquarium shell growth and chamber formation by X-ray',
    url: 'https://doi.org/10.1002/jez.a.116',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Ward & Chamberlain 1983 — chamber formation and cameral liquid removal',
    url: 'https://doi.org/10.1038/304057a0',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Neil & Askew 2018 — swimming mechanics and jet-propulsion efficiency',
    url: 'https://doi.org/10.1098/rsos.170467',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Wells et al. 1992 — behavior and physiology at low oxygen tension',
    url: 'https://doi.org/10.1017/S0025315400037723',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
  {
    title: 'Tsujino & Shigeta 2012 — response to phragmocone and siphuncle damage',
    url: 'https://doi.org/10.1111/j.1502-3931.2012.00306.x',
    kind: 'ecology',
    accessedAt: CHAMBERED_NAUTILUS_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const profile = {
    id: 'species-nautilus-pompilius',
    slug: 'chambered-nautilus',
    names: {
      zh: '鹦鹉螺',
      en: 'Chambered Nautilus',
      aliases: [
        '珍珠鹦鹉螺',
        '帝王鹦鹉螺',
        'Pearly Nautilus',
        'Emperor Nautilus',
        'Nautilus pompilius suluensis',
      ],
    },
    scientificName: 'Nautilus pompilius',
    taxonomy: animalTaxonomy(
      taxon('Mollusca', '软体动物门'),
      taxon('Cephalopoda', '头足纲'),
      taxon('Nautilida', '鹦鹉螺目'),
      taxon('Nautilidae', '鹦鹉螺科'),
      taxon('Nautilus', '鹦鹉螺属'),
    ),
    conservation: conservation('NE', 'unknown'),
    distribution: {
      realms: ['marine'],
      continents: ['亚洲', '大洋洲'],
      regions: [
        '印度尼西亚安汶及邻近东部岛弧',
        '菲律宾群岛与苏禄海',
        '帝汶海至西澳大利亚外礁的种界争议区',
        '帕劳群岛的种界争议区',
      ],
      countries: ['印度尼西亚', '菲律宾'],
      range:
        '当前种界以印度尼西亚安汶的新模标本与现代诊断为锚，菲律宾苏禄海型已作为 Nautilus pompilius 的同物异名处理。群体基因组研究把西澳大利亚、印度尼西亚、菲律宾和帕劳样本归入同一大支，但 WoRMS 仍把西澳相关的 Nautilus repertus 与帕劳的 Nautilus belauensis 列为地位待查，故目前保守确认范围只把印度尼西亚和菲律宾列作保守确认国家。2023 年研究已把斐济、瓦努阿图和美属萨摩亚的旧记录分别拆为 Nautilus vitiensis、N. vanuatuensis 与 N. samoaensis，旧版广布地图不能继续沿用。',
      center: { lat: -3.7, lng: 128.2 },
    },
    habitats: [
      {
        name: '陡峭外礁坡与海岛礁壁',
        realm: 'marine',
        description:
          '已确认和历史研究地点多为海岛外缘陡坡，动物沿硬底、岩棚和急剧加深的水体活动。温度与壳体耐压共同限制可利用深度，大片超过壳体耐压范围的深水也会隔开种群。',
        isPrimary: true,
      },
      {
        name: '礁坡下缘的碎石、沙泥与粉砂底',
        realm: 'marine',
        description:
          '近底层碎石和细沉积物汇集动物残骸与甲壳类蜕壳，也为嗅觉定向觅食提供场景；出现记录不能推出固定底质偏好或单一食物来源。',
      },
      {
        name: '礁壁邻近的昏暗中深层水体',
        realm: 'marine',
        description:
          '许多观测集中在约 100 至 500 米，历史 Osprey Reef 跟踪扩展到约 100 至 700 米。后一范围来自一个旧称 N. pompilius 的地点，当前种界仍需复核，不能当作全种每日固定深度。',
      },
    ],
    measurements: {
      length: {
        min: 10,
        max: 22,
        unit: 'cm',
        note:
          '跨地点成熟个体最大壳径的约数范围，不是软体体长或普通个体的固定尺寸。安汶样本约 18.7–20.7 cm，菲律宾苏禄海矮小型约 10–12.6 cm；分类口径会改变范围。',
      },
    },
    diet: {
      types: ['carnivore'],
      foods: [
        '鱼类与其他动物残骸',
        '甲壳类及其蜕壳',
        '小型鱼类组织',
        '其他底栖无脊椎动物',
      ],
      description:
        '鹦鹉螺以腐食为主，也会机会性捕捉小型动物。成体用嗅突在较远处追踪水中气味，再让口侧触手样附肢接触食物；这些附肢没有吸盘或钩，靠纵脊分泌的黏性物质附着。圈养食谱和诱饵响应不能直接换算成野外食物比例。',
    },
    activity: [
      '靠可转向的漏斗喷出水流，能向前、向后或侧向缓慢游动',
      '连室细管从新形成壳室中缓慢移除液体，维持长期浮力平衡，而非为每次升降快速泵水',
      '用嗅突处理远场气味，用口侧无吸盘黏性触手样附肢完成近场搜索与抓持',
      '常贴近陡峭礁坡和海底轮廓移动，深海盆地会阻隔相邻海岛种群',
      '部分地点呈昼夜垂直移动，模式会随地点、温度、饥饿和个体状态变化',
      '历史 Osprey Reef 跟踪记录夜间在约 100 至 700 米持续移动，白天也可在深处觅食',
      '遭扰时可把软体缩入壳口，并用坚韧头巾遮住开口',
    ],
    tags: [
      '软体动物门',
      '头足纲',
      '外壳头足类',
      '盘卷壳',
      '壳室浮力',
      '针孔眼',
      '无吸盘触手',
      '嗅觉定向',
      '喷射推进',
      '深礁坡',
      '晚熟',
      '单枚大卵',
      'IUCN未评估',
      'CITES附录II',
      '国家一级保护',
    ],
    summary:
      '现生少数保留完整外壳的头足类之一，软体只住在盘卷壳最外侧体室，旧壳室承担浮力；它用无晶状体针孔眼、九十余条无吸盘触手样附肢和嗅觉在昏暗礁坡活动。',
    description:
      '鹦鹉螺 Nautilus pompilius 属于软体动物门头足纲。成体壳最大直径约 10 至 22 厘米，地点差异与近年的种界拆分使这个范围不能代表普通个体。身体只占最外侧体室，后方约三十个旧壳室由隔壁分开；贯穿隔壁的连室细管缓慢移除新壳室液体，漏斗则负责即时喷水推进，两套结构不能混为一根“喷水管”。它的眼没有晶状体，九十余条细长附肢没有吸盘，口侧纵脊用黏性分泌物抓持食物。多种方法把性成熟估在约 10 至 17 年，寿命至少约 20 年；雌体一次附着一枚大卵，圈养胚胎孵化记录为 269 至 362 日，幼体以有壳小型个体直接孵出，不经历浮游幼体期。IUCN 2026-1 仍未收录本种，全球种群趋势未知。整个鹦鹉螺科列入 CITES 附录 II，美国自 2018 年按 ESA 列为受威胁物种，中国名录把鹦鹉螺列为国家一级重点保护野生动物。',
    storySections: [
      {
        key: 'species-boundary',
        label: '种界与分布',
        title: '新研究缩小了旧鹦鹉螺范围',
        body: '早期资料把西太平洋多个孤立海岛种群都归入 Nautilus pompilius。研究者用安汶新模标本、壳形和群体基因组重新核对后，于 2023 年把斐济、美属萨摩亚和瓦努阿图群体分别命名为 N. vitiensis、N. samoaensis 与 N. vanuatuensis。菲律宾苏禄海矮小型目前仍并入本种；西澳大利亚和帕劳名称在 WoRMS 中保留“地位待查”。目前保守确认范围采用印度尼西亚和菲律宾。',
      },
      {
        key: 'hydrostatic-shell',
        label: '壳室与运动',
        title: '壳室调浮力，漏斗管游动',
        body: '软体生活在最外侧的大体室，生长时向壳口增建新壳并在身后封出隔壁。贯穿旧壳室的连室细管以渗透过程缓慢移除液体，让含气壳室构成恒定体积的静水装置；它不会在一次上浮前迅速把海水泵出。头部下方的漏斗接收外套腔水流并改变喷射方向，负责即时推进。',
      },
      {
        key: 'pinhole-senses',
        label: '感觉与抓持',
        title: '针孔眼收光，黏性触手接住食物',
        body: '鹦鹉螺眼没有晶状体和封闭角膜，海水可进入开放眼腔；可调小孔控制入光，却不能据此断言它只能看见明暗。嗅突承担远场气味定向，靠近来源后，口侧指状触手样附肢接手搜索。它们没有章鱼式吸盘或钩，纵向黏附脊分泌以中性黏多糖为主的胶状物，再靠肌肉收缩和触手回缩脱离。',
      },
      {
        key: 'slope-movements',
        label: '礁坡与深度',
        title: '陡坡提供通道，深盆地切断种群',
        body: '鹦鹉螺沿海岛外礁陡坡往返于不同深度，温度、低氧、食物和壳体耐压共同设下边界。Osprey Reef 跟踪记录过夜间约 100 至 700 米的连续移动，白天个体既可停在约 200 米，也可进入更深水层觅食；这处历史称作 N. pompilius 的群体仍有种界问题。其他地点呈现不同节律，尚无全种统一的昼夜深度变化模式。',
      },
      {
        key: 'slow-reproduction',
        label: '生长与繁殖',
        title: '一枚卵要孵近一年，一个世代要等十余年',
        body: '野外重捕与圈养壳室研究给出的成熟估计跨约 10 至 17 年，成熟个体的再次捕获支持寿命至少约 20 年；方法、种群和旧分类口径造成宽区间。雌体把大卵逐枚附在硬物上，圈养记录的胚胎期为 269 至 362 日，孵化时已有约七个壳室。野外从未直接记录产卵地点或完整胚胎发育，孵化幼体不是浮游幼体，也没有成体产卵后立即死亡的证据。',
      },
      {
        key: 'shell-trade',
        label: '贸易与保护',
        title: '晚熟与孤立种群使捕捞后恢复缓慢',
        body: '晚熟、单枚大卵、海岛种群隔离和跨深海扩散困难，使捕捞后恢复速度跟不上壳饰品需求。菲律宾访谈与单位努力捕获量资料报告部分渔场自 1980 年代以来下降可达约 80%，这是地方结果，不是全球精确降幅。CITES 自 2017 年管制整个鹦鹉螺科的国际贸易，美国 ESA 与中国国家名录另给本种法定保护；IUCN 尚未完成全球评估。管理者仍需核验物种、来源与许可，并用标准化诱饵摄像和标记重捕追踪地方种群。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1758 年的名称由安汶新模标本固定',
        body: '林奈于 1758 年命名鹦鹉螺，现用学名为 Nautilus pompilius。后来的安汶新模标本固定了这一名称所指的物种。2023 年研究把斐济、美属萨摩亚和瓦努阿图的旧记录分别拆为三个独立种，苏禄海矮小型则仍并入本种。',
      },
    ],
    keyFacts: [
      '当前接受学名是 Nautilus pompilius Linnaeus, 1758，安汶新模标本固定了名称所指。',
      '分类链采用 Mollusca、Cephalopoda、Nautilida、Nautilidae 与 Nautilus。',
      'Nautilus pompilius suluensis 当前作为本种的次异名处理。',
      '2023 年研究把斐济、美属萨摩亚和瓦努阿图旧记录拆成三个独立物种。',
      '西澳大利亚的 N. repertus 与帕劳的 N. belauensis 仍属地位待查，不能直接并入确认国家列表。',
      '成熟个体壳最大直径跨地点约 10 至 22 cm，苏禄海矮小型与安汶样本差异明显。',
      '软体只占最外侧体室，成体后方有约三十个含气旧壳室。',
      '连室细管贯穿隔壁并缓慢移除壳室液体，不能与头部漏斗混称为 siphon。',
      '漏斗通过喷射水流推进并改变方向，壳室不为每次游动快速泵水。',
      '眼睛没有晶状体，开放小孔可随光强改变直径。',
      '九十余条触手样附肢没有吸盘或钩，部分指状附肢具有黏性纵脊。',
      '嗅突负责较远距离的气味定向，指状附肢参与接近食物后的搜索与接触。',
      '食物以动物残骸和甲壳类蜕壳为主，也会机会性捕捉小型动物。',
      '昼夜垂直移动因地点和个体状态变化，不存在全种统一的每日深度表。',
      '成熟估计约 10 至 17 年，寿命至少约 20 年；两个数字都不是直接读取的全种固定年龄。',
      '雌体逐枚附着大卵，圈养胚胎记录 269 至 362 日，野外产卵地点仍未知。',
      '幼体带壳直接孵出，不经历浮游幼体阶段；图集卵图属于圈养条件科学重建。',
      'IUCN 未收录意味着 NE 与趋势未知，不能翻译成无危或数据缺乏。',
      'Nautilidae spp. 列入 CITES 附录 II，美国 ESA 自 2018 年把本种列为受威胁。',
      '中国 2021 年国家重点保护野生动物名录把鹦鹉螺列为一级。',
    ],
    threats: [
      '国际贝壳、首饰和镶嵌制品需求推动针对完整活体壳的深水诱捕',
      '约十余年才成熟且逐枚产卵，使捕捞后的世代补充速度很慢',
      '海岛种群被超过壳体耐压深度的海盆隔开，局部消失后难从邻岛补回',
      '物种外观相似与种界持续修订会让贸易记录、配额和执法识别出现错配',
      '菲律宾部分地方渔场报告单位努力捕获量大幅下降，区域过捕证据不能外推为统一全球比例',
      '底栖渔具、爆炸或毒捕鱼法会损伤礁坡生境并造成非目标死亡',
      '海洋增暖、酸化和低氧变化可能改变适生深度与造壳，但物种级量化证据仍有限',
    ],
    conservationActions: [
      '执行 CITES 附录 II 的来源核验、非致危性判断、许可和贸易数据记录',
      '把整壳、切片、首饰与镶嵌制品纳入海关识别，不只检查活体标本',
      '按 2023 年后的物种边界重新核对历史标本、分布图和贸易来源',
      '在印度尼西亚与菲律宾重点渔区限制或停止定向捕捞，并记录单位努力捕获量',
      '用标准化诱饵远程摄像、照片壳纹识别和标记重捕比较地方丰度与体型结构',
      '保护陡峭外礁坡、近底觅食带和潜在产卵硬基质，减少破坏性渔法',
      '建立跨海岛遗传和形态参考库，区分本种、三个新种及地位待查种群',
      '向游客和零售商说明完美整壳通常来自捕杀，减少无可追溯装饰壳需求',
      '把温度、溶氧、酸化和深度分布纳入长期监测，避免把单地点短期变化当作全种趋势',
    ],
    metrics: {},
    featuredStats: [
      {
        key: 'mature-shell-diameter',
        label: '成熟壳最大直径',
        value: '约 10–22',
        unit: 'cm',
        note: '跨安汶、菲律宾苏禄海型及相关地点的约数范围；种界与地点会改变分布，不是普通成体固定尺寸。',
      },
      {
        key: 'age-at-maturity',
        label: '成熟年龄估计',
        value: '约 10–17',
        unit: '年',
        note: '综合野外重捕、壳室形成和圈养研究的宽范围；不同方法与旧物种口径不能合成一个精确年龄。',
      },
      {
        key: 'minimum-longevity',
        label: '寿命量级',
        value: '至少约 20',
        unit: '年',
        note: '成熟后多年重捕与生长模型支持的保守量级，不是直接测得的个体寿命纪录或上限。',
      },
      {
        key: 'captive-embryonic-period',
        label: '圈养胚胎期',
        value: '269–362',
        unit: '日',
        note: '表层水族条件下的孵化记录；野外产卵地点、温压条件和胚胎期仍未直接观察。',
      },
    ],
    media: {
      image:
        './images/species/chambered-nautilus/01-steep-reef-adult-portrait.webp',
      alt: '昏暗深蓝外礁陡坡旁，一只完整成年鹦鹉螺位于画面右侧，奶油色红褐条纹盘卷壳、斑驳头巾、针孔眼与细长无吸盘触手样附肢可见',
      focalPoint: { x: 0.72, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成原创图像',
      gallery: [
        {
          image:
            './images/species/chambered-nautilus/02-pinhole-eye-and-suckerless-cirri.webp',
          alt: '鹦鹉螺头部与壳口近景，单侧开放针孔眼、斑驳革质头巾和大量细长无吸盘触手样附肢位于中央，画面没有章鱼式吸盘',
          title: '针孔眼旁，是一圈无吸盘触手',
          caption:
            '眼孔调节入光，嗅突与指状附肢分担远近场搜索；生成近景只重建外形，不能判定视觉分辨率或精确附肢数。',
          focalPoint: { x: 0.57, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chambered-nautilus/03-seafloor-carrion-foraging.webp',
          alt: '夜间深礁坡碎石底上，一只鹦鹉螺从右侧接近一尾无外伤的小型鱼类残骸，细长无吸盘附肢尚未接触鱼体，周围没有诱饵笼或渔具',
          title: '先循气味，再接近残骸',
          caption:
            '动物残骸与甲壳类蜕壳是已知食物；这一帧只表现合理腐食情景，不证明捕获、偏好或野外食谱比例。',
          focalPoint: { x: 0.56, y: 0.58 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chambered-nautilus/04-nighttime-vertical-movement.webp',
          alt: '深蓝水柱与右侧近垂直礁壁之间，一只小比例完整鹦鹉螺在中层水体向上倾斜游动，画面没有箭头、深度数字或重复个体',
          title: '一次升降，不是一张固定时刻表',
          caption:
            '部分地点记录到数百米垂直移动，节律随地点和状态改变；画面不代表统一深度、速度或每晚必然上浮。',
          focalPoint: { x: 0.55, y: 0.46 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chambered-nautilus/05-chambered-shell-cutaway.webp',
          alt: '无文字博物馆式鹦鹉螺壳体剖视重建，软体位于最外侧体室，弯曲隔壁分出多个旧壳室，一条细长连室结构贯穿隔壁',
          title: '身体住一室，旧壳室托起全身',
          caption:
            '剖视图区分缓慢调节壳室液体的连室细管与即时喷水推进的漏斗；壳室数、液面和结构细节属于概念重建。',
          focalPoint: { x: 0.54, y: 0.5 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
        {
          image:
            './images/species/chambered-nautilus/06-captive-egg-development.webp',
          alt: '研究水槽深蓝背景中，一枚乳白色厚壁鹦鹉螺卵囊单独附着在深色多孔岩块上，一只带条纹小盘卷壳的近孵化幼体从顶端开口探出',
          title: '圈养记录里，一枚卵孵了近一年',
          caption:
            '野外产卵地点仍未直接观察；画面重建圈养近孵化阶段，不表示天然基质、固定孵化期或浮游幼体。',
          focalPoint: { x: 0.58, y: 0.49 },
          credit: 'Fauna Atlas · AI 生成原创图像',
        },
      ],
    },
    sources: [
      ...CHAMBERED_NAUTILUS_SOURCES,
      {
        title: 'GBIF: Nautilus pompilius Linnaeus, 1758 nomenclatural record',
        url: 'https://www.gbif.org/species/2289202',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true,
    publishedAt: CHAMBERED_NAUTILUS_CONTENT_DATE,
    updatedAt: CHAMBERED_NAUTILUS_CONTENT_DATE,
  } as const satisfies Species;

export default profile;
