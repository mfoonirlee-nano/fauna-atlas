import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-electrophorus-electricus',
    slug: 'electric-eel',
    names: { zh: '电鳗', en: 'Electric Eel', aliases: ['普通电鳗', 'Common Electric Eel'] },
    scientificName: 'Electrophorus electricus',
    taxonomy: animalTaxonomy(
      taxon('Chordata', '脊索动物门'),
      taxon('Actinopterygii', '辐鳍鱼纲'),
      taxon('Gymnotiformes', '电鳗目'),
      taxon('Gymnotidae', '裸背电鳗科'),
      taxon('Electrophorus', '电鳗属'),
    ),
    conservation: conservation('LC', 'unknown', 2020),
    distribution: {
      realms: ['freshwater'], continents: ['南美洲'],
      regions: ['圭亚那地盾', '苏里南河流', '圭亚那与法属圭亚那河流', '巴西北部地盾水系'],
      countries: ['圭亚那', '苏里南', '法国（法属圭亚那）', '巴西'],
      range: '按 2019 年物种修订，Electrophorus electricus 分布于南美洲北部圭亚那地盾。此前把整个亚马孙与奥里诺科流域电鳗合并为一个物种的广义范围，不能直接用于本种。',
      center: { lat: 4.5, lng: -56.5 },
    },
    habitats: [{ name: '地盾淡水河流', realm: 'freshwater', description: '生活在圭亚那地盾河流中，已知栖息水域包括清水、岩石河床与急流相邻环境。', isPrimary: true }],
    measurements: { length: { max: 100, unit: 'cm', note: '2019年修订论文检查标本的最大总长；不是全种最大体长。旧资料的2米以上记录可能涵盖后来拆分的其他物种。' } },
    diet: { types: ['piscivore', 'carnivore'], foods: ['小鱼', '水生无脊椎动物'], description: '用电感受寻找周围动物，在捕食时发出强电脉冲制伏猎物，再用嘴吞入。' },
    activity: ['电定位', '强电捕猎', '水面呼吸'],
    tags: ['弱电定位', '强电放电', '空气呼吸', '圭亚那地盾', '电鳗目'],
    summary: '电鳗用弱电脉冲探查周围，捕猎或防御时发出强电脉冲。它还要浮到水面吞入空气，通过口腔内的组织获取氧气。',
    description: '电鳗有深色细长身体、钝头和小眼睛，用腹侧延伸的长臀鳍前进、后退或悬停。它发出弱电脉冲并感知电场变化，探查附近物体；捕猎和防御时则发出强电脉冲。它还必须浮到水面吞入空气，靠血管丰富的口腔组织吸收氧气。2019 年修订后，本种的已知范围限于圭亚那地盾。',
    storySections: [
      {
        key: 'identity',
        label: '外形与分类',
        title: '沿着腹侧找长鱼鳍',
        body: '电鳗属于电鳗目、裸背电鳗科、电鳗属。它没有背鳍和腹鳍，长臀鳍沿身体下缘延伸。2019年研究区分出Electrophorus electricus、E. varii和E. voltai三个物种，其中 E. electricus 对应这里介绍的电鳗。',
      },
      {
        key: 'sensing',
        label: '弱电定位',
        title: '用微弱电脉冲探查周围',
        body: '电鳗向水中发出弱电脉冲，体表的电感受器接收附近物体引起的电场变化，帮助它定位。电鳗还会使用电信号交流。真实水下放电不会出现插画里常画的发光闪电。',
      },
      {
        key: 'hunting',
        label: '强电捕猎',
        title: '靠近猎物时发出强电脉冲',
        body: '捕食和防御时，电鳗会发出强电脉冲。2019年研究对一条总长76厘米的本种个体测得480伏；这是单个样本的记录，不能当作全种上限。同一研究的860伏记录属于伏打电鳗E. voltai。',
      },
      {
        key: 'organs',
        label: '放电器官',
        title: '体内的细胞一起放电',
        body: '电鳗的放电器官含有特化的放电细胞，细胞协同活动产生电位差。它有主放电器官、亨特氏器官和萨克斯氏器官。主放电器官与亨特氏器官前部参与强放电，萨克斯氏器官与亨特氏器官后部参与弱放电。',
      },
      {
        key: 'breathing',
        label: '空气呼吸',
        title: '游到水面吸一口空气',
        body: '电鳗必须到水面吞入空气。口腔内的褶皱扩大了交换气体的面积，丰富的血管帮助它获取氧气。这种呼吸方式让它能利用含氧较低的水域，但本种的分布仍应按圭亚那地盾的调查记录理解。',
      },
      {
        key: 'conservation',
        label: '分布与保护',
        title: '分清物种，再记录河流中的变化',
        body: 'FishBase所列IUCN状态为无危（LC），评估日期为2020年8月12日；全球种群趋势尚未核实。调查者需要按修订后的物种鉴定记录分布与数量，并监测河流水质和栖息地变化。旧名称下汇总的数据不能直接代表本种现状。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1766 年名称在拆种后继续使用',
        body: '林奈在 1766 年正式命名电鳗，现用名称为 Electrophorus electricus。长期以来，这个名称覆盖了很广的南美种群。2019 年研究把电鳗属区分为 E. electricus、E. varii 和 E. voltai 三个物种，本种范围随之收窄；同一研究中 860 伏的记录属于 E. voltai，不能转给本种。',
      },
    ],
    keyFacts: ['用弱电脉冲完成电定位。', '强电脉冲用于捕猎与防御。', '需要浮到水面吞入空气。', '480伏来自2019年研究中的一个76厘米样本。', '860伏纪录属于同属的伏打电鳗。'],
    threats: ['河流水质与栖息地改变属于需要监测的潜在压力，现有资料尚未确定本种受到影响的强度。', '旧资料常混合三个物种，限制了对本种数量变化的判断。'],
    conservationActions: ['保护河流水质及河岸植被，并记录栖息地变化。', '调查时核对物种身份，让分布和种群监测采用一致口径。'],
    metrics: {},
    featuredStats: [
      { key: 'voltage', label: '单样本放电', value: '480', unit: '伏', note: '2019年研究：一条76厘米个体，不是物种上限。' },
      { key: 'breathing', label: '呼吸方式', value: '吞入空气', note: '口腔组织参与气体交换。' },
      { key: 'status', label: '保护等级', value: 'LC', note: 'FishBase转列IUCN，2020年评估。' },
    ],
    media: {
      image: './images/species/electric-eel/01-river-cover.webp',
      alt: '一条深色电鳗在画面右上方的黄绿色河水中游动，尾部弯回，头部和完整身体留在画内。',
      focalPoint: { x: 0.97, y: 0.38 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        { image: './images/species/electric-eel/02-body-profile.webp', alt: '电鳗侧面外形，可见深色长身体、黄橙色喉部和腹侧的长臀鳍。', title: '辨认长身体和臀鳍', caption: 'AI生成外形重建；体色、比例及鳍条仅作示意，不能用于区分电鳗属三个物种。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/electric-eel/03-anal-fin.webp', alt: '电鳗腹侧近景，长臀鳍沿身体下方展开。', title: '沿腹侧延伸的长鳍', caption: 'AI生成局部结构示意；身体有意裁出画面，不代表实测鳍条数量和运动轨迹。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/electric-eel/04-surface-breath.webp', alt: '电鳗抬起钝头，嘴端接近河水表面。', title: '到水面吞入空气', caption: 'AI生成呼吸情景；不展示口腔内部的气体交换过程。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/electric-eel/05-foraging.webp', alt: '一条电鳗在河床上方接近一条小鱼。', title: '接近水中的猎物', caption: 'AI生成觅食情景；图中没有可见电场，不能用静态画面确认放电时间或强度。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
        { image: './images/species/electric-eel/06-river-habitat.webp', alt: '热带森林围绕着淡水河流，水流经过河床上的岩石。', title: '圭亚那地盾的河流环境', caption: 'AI生成栖息地重建；不对应某个实际采样地点。', focalPoint: { x: 0.5, y: 0.5 }, credit: 'Fauna Atlas · AI 生成科学情景重建' },
      ],
    },
    sources: [
      { title: 'de Santana et al. 2019 — 电鳗属三个物种、分布与放电测量', url: 'https://www.nature.com/articles/s41467-019-11690-z', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Smithsonian National Zoo — Electric eel（属级生理介绍；旧分布不沿用）', url: 'https://nationalzoo.si.edu/animals/electric-eel', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'Smithsonian — Scientists triple number of known electric eel species', url: 'https://www.si.edu/es/newsdesk/releases/smithsonian-scientists-triple-number-known-electric-eel-species', kind: 'distribution', accessedAt: '2026-09-07' },
      { title: 'FishBase — Electrophorus electricus（分类与LC，搜索索引核实2020年评估）', url: 'https://fishbase.org/summary/SpeciesSummary.php?genusname=Electrophorus&speciesname=electricus', kind: 'conservation', accessedAt: '2026-09-07' },
      {
        title: 'GBIF: Electrophorus electricus (Linnaeus, 1766) nomenclatural record',
        url: 'https://www.gbif.org/species/2401958',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
