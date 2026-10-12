import type { Species } from '../../types/species.ts';

import { animalTaxonomy, conservation, taxon } from './shared.js';

const profile = {
    id: 'species-trichoplax-adhaerens', slug: 'trichoplax-adhaerens',
    names: { zh: '黏丝盘虫', en: 'Trichoplax', aliases: ['黏盘虫'] },
    scientificName: 'Trichoplax adhaerens',
    taxonomy: animalTaxonomy(taxon('Placozoa', '扁盘动物门'), taxon('Uniplacotomia', 'Uniplacotomia纲'), taxon('Trichoplacea', 'Trichoplacea目'), taxon('Trichoplacidae', '盘虫科'), taxon('Trichoplax', '盘虫属')),
    conservation: conservation('NE', 'unknown'),
    distribution: { realms: ['marine'], continents: [], regions: ['海洋附着基质'], countries: [], range: '本种的完整野外范围尚未核实。扁盘动物门在温暖近岸海域有广泛记录，但其中包含多个隐蔽谱系，不能全部归入本种。' },
    habitats: [{ name: '海洋附着表面', realm: 'marine', description: '沿浸水基质上的微藻层移动和取食；培养观察常使用玻璃表面。', isPrimary: true }],
    measurements: {},
    diet: { types: ['herbivore'], foods: ['微藻'], description: '在腹面下方分解微藻并吸收释放的物质。培养实验中的藻类食物不代表完整野外食谱。' },
    activity: ['纤毛滑行', '取食时停顿', '分裂繁殖'],
    tags: ['扁盘动物', '多细胞', '没有神经元', '体外消化', '纤毛滑行'],
    summary: '黏丝盘虫像一片会变形的透明薄片。它没有神经元和肌肉，却能用纤毛滑行，在藻类上方停下，分解并吸收食物。',
    description: '黏丝盘虫是微小的海洋多细胞动物，身体像半透明薄片，上下表皮之间分布其他细胞。它没有头、口或肠道，也没有神经元和肌肉，靠腹面纤毛在附着表面滑行。遇到藻类时，它停下来，在身体下方释放消化物质并吸收食物。培养中可观察到身体分裂成两个个体。',
    storySections: [
      {
        key: 'identity',
        label: '认识黏丝盘虫',
        title: '一片会变形的多细胞动物',
        body: '黏丝盘虫的身体扁平、半透明，轮廓会随活动改变。它由许多细胞组成，没有头、口、肠道、神经元或肌肉。2022 年高阶分类研究将它归入扁盘动物门、Uniplacotomia纲、Trichoplacea目、盘虫科、盘虫属。',
      },
      {
        key: 'gliding',
        label: '纤毛滑行',
        title: '用腹面的纤毛贴着表面移动',
        body: '腹面细胞上的纤毛摆动，帮助黏丝盘虫沿基质滑行。显微观察中，相邻纤毛的摆动并不完全同步，但方向能配合身体移动。它也会转向、改变轮廓或折起身体。',
      },
      {
        key: 'feeding',
        label: '体外消化',
        title: '把藻细胞留在身体下方分解',
        body: '2015年的活细胞成像研究发现，黏丝盘虫滑到藻类上方后会停止纤毛摆动。靠近藻细胞的亲脂细胞释放颗粒，使藻细胞破裂；动物在原地吸收食物，随后恢复滑行。消化发生在腹面与基质之间，不需要把食物送进肠道。',
      },
      {
        key: 'coordination',
        label: '细胞协调',
        title: '全身停下，局部释放颗粒',
        body: '研究者同时记录到全身停止滑行与藻类附近的局部分泌，说明不同细胞之间需要传递信息。没有神经元不等于细胞各自行动。2015年论文提出细胞信号机制的候选解释，尚不能只凭这组观察确定全部协调通路。',
      },
      {
        key: 'fission',
        label: '分裂繁殖',
        title: '一片身体分成两片',
        body: '实验培养中，黏丝盘虫可以通过分裂增加个体数量。身体拉开后，连接处逐渐变细，最终分离。分裂时长随条件改变，扁盘动物门还存在其他繁殖过程的研究记录。',
      },
      {
        key: 'range',
        label: '分布与保护',
        title: '先分清相似的盘虫',
        body: '研究者已在不同海域发现多个外形相似的扁盘动物谱系，不能把全门的采集地图直接当成黏丝盘虫的范围。本种完整范围仍需物种鉴定支持。本种尚无已核实的 IUCN 全球评估与种群趋势。减少近岸污染、保留附着基质是栖息地保护建议，尚非本种威胁的量化结论。',
      },
      {
        key: 'discovery-naming',
        label: '发现与命名',
        title: '1883 年在海水水族箱中被研究',
        body: 'Schulze 在 1883 年描述并命名 Trichoplax adhaerens，研究材料来自奥地利的海水水族箱。名称对应扁平、带纤毛且能附着滑行的外形。此后它一度较少受到关注，二十世纪六十年代重新成为研究对象；没有神经元却能协调移动和取食，使它持续吸引细胞与演化研究。',
      },
    ],
    keyFacts: ['属于扁盘动物门，是多细胞动物。', '没有神经元和肌肉。', '靠腹面纤毛沿基质滑行。', '在身体外分解藻细胞。', '培养中可以通过分裂繁殖。', '相似外形不足以判定不同盘虫的物种。'],
    threats: ['本种具体威胁及影响程度尚待调查。'],
    conservationActions: ['减少近岸污染，保留附着基质。', '结合显微观察和分子鉴定记录分布。'],
    metrics: {},
    featuredStats: [{ key: 'phylum', label: '所属门', value: '扁盘动物门' }, { key: 'movement', label: '移动方式', value: '纤毛滑行' }, { key: 'digestion', label: '消化位置', value: '体外', note: '腹面与基质之间。' }, { key: 'reproduction', label: '培养繁殖', value: '分裂', note: '不设固定周期。' }],
    media: { image: './images/species/trichoplax-adhaerens/01-biofilm-cover.webp', alt: '一片完整的半透明黏丝盘虫位于画面右侧的水下生物膜表面。', focalPoint: { x: 0.92, y: 0.35 }, credit: 'Fauna Atlas · AI 生成科学情景重建',
      gallery: [
        {"image": "./images/species/trichoplax-adhaerens/02-body.webp", "alt": "半透明的黏丝盘虫呈不规则薄片状，内部可见颗粒状纹理。", "title": "薄片状的身体", "caption": "AI生成显微外形示意，细胞纹理与轮廓不能用于物种鉴定。", "focalPoint": {"x": 0.5, "y": 0.5}, "credit": "Fauna Atlas · AI 生成科学情景重建"},
        {"image": "./images/species/trichoplax-adhaerens/03-ciliary-gliding.webp", "alt": "薄片状身体的剖面下方有细纤毛，与平坦基质接触。", "title": "腹面纤毛与基质", "caption": "AI生成结构示意，细胞层厚度、纤毛数量和比例经过简化。", "focalPoint": {"x": 0.5, "y": 0.5}, "credit": "Fauna Atlas · AI 生成科学情景重建"},
        {"image": "./images/species/trichoplax-adhaerens/04-external-feeding.webp", "alt": "黏丝盘虫腹面下方有完整与破裂的藻细胞。", "title": "身体下方的体外消化", "caption": "AI生成取食机制示意，分泌颗粒与藻细胞比例不代表实测尺度。", "focalPoint": {"x": 0.5, "y": 0.5}, "credit": "Fauna Atlas · AI 生成科学情景重建"},
        {"image": "./images/species/trichoplax-adhaerens/05-fission.webp", "alt": "两片不规则的半透明身体仍由细窄组织相连。", "title": "分裂中的连接处", "caption": "AI生成分裂形态示意，不是连续显微录像或固定时间点。", "focalPoint": {"x": 0.5, "y": 0.5}, "credit": "Fauna Atlas · AI 生成科学情景重建"},
        {"image": "./images/species/trichoplax-adhaerens/06-coastal-habitat.webp", "alt": "浅海石块表面附有褐绿色生物膜，水中透入柔和光线。", "title": "浅海的附着表面", "caption": "AI生成栖息环境示意，不对应本种确定采集点；此尺度不展示微小盘虫。", "focalPoint": {"x": 0.5, "y": 0.5}, "credit": "Fauna Atlas · AI 生成科学情景重建"},
      ],
    },
    sources: [
      { title: 'Tessler等2022 — 扁盘动物门高阶分类', url: 'https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2022.1016357/full', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'NCBI Taxonomy — 黏丝盘虫分类路径', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=10228', kind: 'taxonomy', accessedAt: '2026-09-07' },
      { title: 'Smith等2015 — 没有突触的盘虫如何协调取食', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0136098', kind: 'ecology', accessedAt: '2026-09-07' },
      { title: 'World Placozoa Database — 形态、谱系多样性与分布记录限制', url: 'https://www.marinespecies.org/placozoa/', kind: 'distribution', accessedAt: '2026-09-07' },
      {
        title: 'Senatore et al. 2016: early-diverging animals and Trichoplax research history',
        url: 'https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2016.00481/full',
        kind: 'taxonomy',
        accessedAt: '2026-10-11',
      },
    ],
    featured: true, publishedAt: '2026-09-07', updatedAt: '2026-09-07',
  } as const satisfies Species;

export default profile;
