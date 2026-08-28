# 普通章鱼（*Octopus vulgaris*）档案研究

- 检索与核验日期：2026-08-28
- 推荐展示中文名：**普通章鱼**
- 推荐展示英文名：**Common Octopus**
- 当前接受名：***Octopus vulgaris* Cuvier, 1797**
- WoRMS AphiaID：**140605**
- 推荐 slug：`common-octopus`
- IUCN：**LC，无危；趋势 Unknown；评估日期 2016-04-08；发布于 2018 年和 Red List 2018-2 版**
- 物种边界：本档案只写 ***O. vulgaris* sensu stricto**，即地中海和东北大西洋谱系；旧资料中的东亚、加勒比、巴西、南非、澳大利亚等记录不能直接并入
- 使用范围：把 `docs/todo.md` 中“普通章鱼 *Octopus vulgaris*”落实为完整物种记录、六段故事、四项展示数字、1 张封面与 5 张详情图

## 可落库结论

普通章鱼是无外壳、无鳍的底栖八腕头足类。成体有八条肌肉质腕，每腕两列吸盘；体表借色素胞、反光结构和皮肤乳突快速改变明暗、花纹与立体纹理。它常利用岩缝、石块下方或软底上的固体材料筑穴，外出捕捉蟹类、双壳类、腹足类等底栖动物。地中海野外图像分析显示，它会匹配附近物体的关键视觉特征，并非把整个背景逐像素复制。[FAO 2014](https://www.fao.org/4/i3489e/i3489e.pdf) [Josef et al. 2012](https://doi.org/10.1371/journal.pone.0037579) [Katsanevakis & Verriopoulos 2004](https://doi.org/10.3989/scimar.2004.68n1147)

结构化保护字段建议写：

```ts
conservation('LC', 'unknown', 2016)
```

IUCN 原始评估 PDF 写明 `Date Assessed: April 8, 2016`、`Year Published: 2018`，引用归入 Red List 2018-2 版。**2014 不是评估年份**；它是该评估引用的 FAO 头足类目录年份。字段 `assessedYear` 因此应填 2016，不填 2014 或 2018。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en) [IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/918906.pdf)

分布图必须采用狭义种口径。可靠范围是整个地中海，以及东北和东部中大西洋的欧洲、西北非洲与马卡罗尼西亚沿岸和岛群。亚速尔、马德拉、加那利和佛得角材料已有分子研究支持。东亚“真蛸”现用 ***O. sinensis***；南非至阿姆斯特丹岛的 Type III 在 2026 年系统基因组研究中与狭义普通章鱼分离。旧版“全球广布”地图不适合新页面。[Quinteiro et al. 2020](https://doi.org/10.1371/journal.pone.0230294) [Gleadall 2016](https://doi.org/10.12782/sd.21.1.031) [Emami-Khoyi et al. 2026](https://doi.org/10.1002/ece3.73235)

体型统一使用**外套膜长**。适合展示的保守值是常见约 10 至 25 厘米；历史 FAO 地中海种表给出常见 10 至 20 厘米、最大 23 厘米和常见体重 1 至 3 千克，现代形态资料常以约 25 厘米外套膜长描述大型成体。腕可达外套膜长约 4 至 5.5 倍，柔软腕姿势使“全长”不适合作跨物种排序。[FAO Mediterranean species sheet](https://www.fao.org/fishery/docs/CDrom/ARTFIMED/ArtFiWeb/descript/Species/OCTOCVUL.HTML) [FAO 2014](https://www.fao.org/4/i3489e/i3489e.pdf) [Senckenberg Marinvert](https://marinvert.senckenberg.science/octopus-vulgaris/)

寿命应写“约 1 至 2 年估计”，不能写成每只固定两岁。中东大西洋 20 只产后个体的喙增量研究支持约一年生活史，圈养可更长；不同温度、地点、性别和年龄读取方法会改变结果。[FAO 2014](https://www.fao.org/4/i3489e/i3489e.pdf) [Perales-Raya et al. 2014](https://doi.org/10.1007/s10750-013-1602-x) [Hermosilla et al. 2010](https://doi.org/10.1093/icesjms/fsq047)

雌体把许多约 2.5 × 1 毫米的小卵编成卵串，附在洞穴内硬基质上，持续清洁、通水和防卫直至孵化。历史资料常写 10 万至 50 万枚；加利西亚 1,418 个体研究估算成熟雌体潜在繁殖力平均 221,447 ± 116,031 个卵母细胞，显示地点和体型差异很大。19°C 人工强水流系统约一个月孵化只代表该实验条件，不是野外通用孵化期。[Otero et al. 2007](https://doi.org/10.1016/j.fishres.2007.01.007) [Deryckere et al. 2020](https://doi.org/10.1186/s12861-020-00212-6)

孵化体是会游泳的浮游幼体，不是缩小比例的长腕成体。21.2°C 实验中，幼体第 47 至 54 日开始着底，第 60 日成为底栖幼体；该阶段持续时间有明显温度依赖。页面可概括为“浮游阶段持续数周至数月”，并把 47 至 54 日标为指定温度下的培养结果。[Villanueva 1995](https://doi.org/10.1139/f95-853)

## 分类、名称与狭义种界

### 接受名与分类归属

WoRMS 接受 ***Octopus vulgaris* Cuvier, 1797**，AphiaID 140605，英文俗名包括 Common Octopus、Common Atlantic Octopus 和 Common European Octopus。项目沿用 TODO 中的“普通章鱼”，英文使用 FAO 的 Common Octopus。[WoRMS taxon](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140605) [WoRMS vernaculars](https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/140605)

| 等级 | 学名 | 推荐中文 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Mollusca | 软体动物门 |
| 纲 | Cephalopoda | 头足纲 |
| 目 | Octopoda | 八腕目 |
| 科 | Octopodidae | 章鱼科 |
| 属 | *Octopus* | 章鱼属 |
| 种 | *Octopus vulgaris* | 普通章鱼 |

该链直接对应仓库六级 taxonomy。Coleoidea 是 subclass，Octopodiformes 是 superorder，Incirrata 是 suborder，不能覆盖仓库的 class 或 order。[WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140605)

### 为什么不能再写成全球广布

“*Octopus vulgaris* complex”是一组外形相似、长期被混用同一名称的谱系。当前最稳妥的 ***O. vulgaris* sensu stricto** 指地中海和东北大西洋谱系。产品应作如下处理：

1. 地中海和东北大西洋为确认核心范围。
2. 亚速尔、马德拉、加那利和佛得角群岛可纳入，2020 年研究直接采样并确认这些东北大西洋种群。
3. 东亚个体使用 *O. sinensis*，不把日本“ma-dako”或中文“真蛸”作为本种别名。
4. 加勒比广义型、巴西型和澳大利亚型已有独立命名或强烈的独立种证据，不能进入本种地图。
5. 2026 年的 338 个核标记加完整线粒体基因组分析把南非和阿姆斯特丹岛 Type III 与地中海、东北大西洋狭义种分开；该南半球谱系的正式名称尚未解决。
6. 2018 年 IUCN 评估沿用当时的宽种概念，列出的全球国家和“广布”理由不能直接复制到狭义种页面。保护等级仍是当前发布的物种记录，但范围叙事要注明分类错位。

[Amor et al. 2017](https://doi.org/10.1111/zsc.12207) [Quinteiro et al. 2020](https://doi.org/10.1371/journal.pone.0230294) [Gleadall 2016](https://doi.org/10.12782/sd.21.1.031) [Emami-Khoyi et al. 2026](https://doi.org/10.1002/ece3.73235)

## IUCN 状态与字段解释

IUCN 评估的准确拆分如下：

| 项目 | 值 | 落库规则 |
| --- | --- | --- |
| 类别 | Least Concern, LC | `code: 'LC'` |
| 趋势 | Unknown | `trend: 'unknown'` |
| 评估日期 | 2016-04-08 | `assessedYear: 2016` |
| 发布年份 | 2018 | 只放 source title 或正文 |
| Red List 版本 | 2018-2 | 只放 source title 或正文 |
| 评估作者 | Allcock, Headlam & Allen | 保留在来源标题即可 |
| IUCN taxon / assessment | T162571 / A918906 | 用 DOI 固定引用 |

IUCN PDF 的 `Year Published: 2018` 和 `Date Assessed: April 8, 2016` 是两项不同字段。2014 年 FAO 目录出现在评估参考文献中，不是 IUCN assessment year。LC 评估没有需要写入的威胁标准，`criteria` 留空。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en)

该 IUCN 评估还使用旧的广义物种范围，并以“广布”支持 LC。2016 年后多项系统学结果已拆出若干谱系，因此页面必须同时保留两点：正式状态仍显示 LC，趋势未知；评估的范围和分类基础需要更新，不能据此断言狭义种所有地方种群稳定。

## 分布与生境

### 推荐字段

```ts
distribution: {
  realms: ['marine'],
  continents: ['欧洲', '非洲'],
  regions: [
    '地中海',
    '东北大西洋欧洲沿岸',
    '西北非洲与东部中大西洋沿岸',
    '亚速尔、马德拉、加那利与佛得角群岛',
  ],
  countries: [
    '葡萄牙',
    '西班牙',
    '法国',
    '意大利',
    '希腊',
    '摩洛哥',
  ],
  range:
    '狭义普通章鱼分布于地中海和东北至东部中大西洋，包括欧洲、西北非洲沿岸及马卡罗尼西亚岛群。历史上归入本种的东亚、加勒比、巴西、南非与澳大利亚种群属于其他物种或待正式命名谱系，未计入此范围。',
  center: { lat: 37, lng: 3 },
}
```

`countries` 只列代表性范围国，不是完整名录。`center` 是地图镜头焦点，不是种群中心或范围几何中心。[Quinteiro et al. 2020](https://doi.org/10.1371/journal.pone.0230294) [De Luca et al. 2016](https://doi.org/10.1371/journal.pone.0149496)

### 生境

适合落库的三项 habitat：

1. **浅海岩礁、岩缝与洞穴，primary，marine**：成体借天然缝隙、石块和固体遮蔽物形成巢穴，白天常留在巢中。
2. **沙底、泥沙底与碎石底，marine**：软底本身不排斥本种，但能否找到石块、贝壳或其他坚固材料搭建庇护所，会限制局地分布。
3. **海草床、藻场与人工硬质结构邻近海底，marine**：只写机会性利用，不写成唯一或必需生境。

狭义种属于沿岸底栖或 merobenthic 物种，从潮间带到陆架约 200 至 250 米均有记录，常见观察和捕捞集中在 100 米以内。不要把 250 米写成精确潜水极限。[FAO 2014](https://www.fao.org/4/i3489e/i3489e.pdf) [CEFAS cephalopod guide](https://www.nmbaqcs.org/media/qlqksxx1/cephalopod-guide-cefas.pdf) [Katsanevakis & Verriopoulos 2004](https://doi.org/10.3989/scimar.2004.68n1147)

## 外形与体尺

### 诊断特征

- 无外露壳、无鳍、无 cirri，也没有蓝环章鱼式规则亮蓝环。
- 宽椭圆至囊状的肌肉质外套膜，头比外套膜窄。
- 八条粗壮腕围绕口部，腕长约为外套膜长 4 至 5.5 倍，每腕两列圆形吸盘。
- 雄体第三右腕为交接腕，比对侧第三腕短。
- 漏斗位于头和外套膜腹侧开口之间，用于呼吸水流、喷射运动、排墨等。
- 强光下瞳孔收成水平狭缝，弱光下明显扩张。
- 灰、黄、棕红等颜色与斑驳花纹会随状态改变；皮肤乳突能让表面从较平滑变为突起纹理。

[FAO Mediterranean species sheet](https://www.fao.org/fishery/docs/CDrom/ARTFIMED/ArtFiWeb/descript/Species/OCTOCVUL.HTML) [Senckenberg Marinvert](https://marinvert.senckenberg.science/octopus-vulgaris/)

### 体尺口径

推荐 measurements：

```ts
measurements: {
  length: {
    min: 10,
    max: 25,
    unit: 'cm',
    note:
      '常见成体外套膜长的约数范围，不是含腕全长或自然极值；历史 FAO 地中海资料为常见 10–20 cm、最大 23 cm，当前形态资料常以约 25 cm 描述大型成体。',
  },
  weight: {
    min: 1,
    max: 3,
    unit: 'kg',
    note:
      '历史 FAO 地中海种表的常见体重，不是狭义种全球成体范围；季节、性别、胃内容物和含水状态会改变体重。',
  },
}
```

建议不填 `metrics.adultLengthCm`。仓库的统一体长排序无法表达“外套膜长”，会让章鱼与脊椎动物全长发生口径错配。历史 10 千克上限和约 40 厘米外套膜的罕见记录可能混入旧广义种资料，不进入 normalized metrics 或 featured stat。

## 食性、巢穴与行为

推荐 diet：

```ts
diet: {
  types: ['carnivore'],
  foods: [
    '蟹类等甲壳动物',
    '双壳类',
    '腹足类',
    '小型鱼类与其他底栖动物',
  ],
  description:
    '机会性底栖捕食者，主要用腕、腕间膜与两列吸盘控制蟹类和贝类，再由腕冠中央的喙和齿舌处理食物。食谱随地点、体型和猎物供应改变，巢口贝壳堆会偏向保存硬壳猎物。',
}
```

法国地中海巢穴残骸研究记录至少 22 种软体动物和多种蟹类，估算软体动物约占残骸食谱的 80%。这个数字来自一个地点的巢口硬壳残骸，水流会带走较轻的甲壳，软体猎物也不一定全部带回巢中，因此不能写成全球固定食谱比例。[Ambrose & Nelson 1983](https://doi.org/10.1111/j.1439-0485.1983.tb00299.x)

可写入 activity 的行为：

- 多数时间与一个或多个巢穴相连，能更换巢穴，也会在局地范围内往返觅食。
- 地中海许多地点以夜间活动为主，白天常隐蔽；活动节律会随地点、捕食风险和食物变化，不写“严格夜行”。
- 用腕和吸盘探索、抓握和搬动物体，喙藏在八腕中央，不会像脊椎动物嘴部一样外露追咬。
- 通过色素胞等皮肤结构快速改变花纹，皮肤乳突改变表面纹理，用于伪装和交流。
- 巢口常见吃剩的贝壳和甲壳残骸，称作 midden；它是取食线索，不是完整食谱普查。
- 遇险时可喷墨、喷水快速后退或缩入狭缝；不能把所有移动都画成持续高速喷射。

[Arechavala-Lopez et al. 2018](https://doi.org/10.1093/icesjms/fsy014) [Josef et al. 2012](https://doi.org/10.1371/journal.pone.0037579) [Katsanevakis & Verriopoulos 2004](https://doi.org/10.3989/scimar.2004.68n1147)

## 繁殖、寿命与早期生活史

普通章鱼雌雄异体，采用一次性或终末繁殖策略。雄体以第三右腕的交接腕传递精荚。雌体在洞穴顶面或其他硬基质挂起大量小卵串，整个胚胎期持续清洁、通水和防卫，孵化后进入衰老并死亡。不要画共同育幼、雄体守卵或多个成体共同照顾卵串。[FAO 2014](https://www.fao.org/4/i3489e/i3489e.pdf) [Deryckere et al. 2020](https://doi.org/10.1186/s12861-020-00212-6)

| 项目 | 可写值 | 限定 |
| --- | --- | --- |
| 寿命 | 约 1 至 2 年估计 | 中东大西洋产后个体研究支持约一年；圈养和地区差异存在 |
| 卵尺寸 | 约 2.5 × 1 mm | 小卵型狭义种的实验材料 |
| 产卵量 | 约 10 万至 50 万 | 历史综合范围，不是每只固定窝卵数 |
| 加利西亚潜在繁殖力 | 221,447 ± 116,031 个卵母细胞 | 1,418 个体研究的地方样本估计 |
| 实验孵化 | 约 1 个月，19°C | 人工海水、强水流、昏暗环境；不能推广为野外固定孵化期 |
| 浮游阶段 | 数周至数月 | 温度与食物影响显著 |
| 实验着底 | 第 47 至 54 日，21.2°C | 培养条件；第 60 日成为底栖幼体 |

[Otero et al. 2007](https://doi.org/10.1016/j.fishres.2007.01.007) [Deryckere et al. 2020](https://doi.org/10.1186/s12861-020-00212-6) [Villanueva 1995](https://doi.org/10.1139/f95-853) [Perales-Raya et al. 2014](https://doi.org/10.1007/s10750-013-1602-x)

“paralarva”应译作**浮游幼体**或保留“副幼体”术语说明。刚孵化个体有短腕和少量吸盘，外形更像具有大外套膜和大眼的小型游泳头足类；随着吸盘增加和腕加长，才逐步转为底栖幼体。不要用昆虫式“幼虫”、鱼形尾部或长腕迷你成体表现。

## 威胁与保护行动

IUCN 评估把无管制捕捞列为主要威胁，并认为重度压力集中在部分地点；同时给出全球趋势 Unknown。由于该评估采用过宽物种概念，不能用其旧范围推断狭义种每个渔场安全，也不能把地方渔获下降写成全球下降比例。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en)

推荐 threats：

1. 地笼、罐壶、拖网、刺网、手钓与潜捕等高强度定向渔业，地方管理不足时会压低繁殖个体数量。
2. 软底拖网和沿岸工程破坏巢穴、硬质庇护物与产卵基质。
3. 海水增温、低氧和上升流变化会影响生长、成熟、孵化速度和浮游幼体存活，效应具有地区性。
4. 物种复合群长期混名，使渔获统计、分布记录和评估范围错配。
5. 海洋污染、遗失渔具与洞穴内废弃物可造成局地风险，但现有物种级全球量化有限。

推荐 conservationActions：

1. 按地区设置最小上市重量、禁渔期、禁渔区和渔具限制，并用当地成熟与招募数据校准。
2. 保护产卵季雌体及高密度巢穴区，避免清除洞穴和人工硬质庇护结构时连带破坏卵串。
3. 统一记录捕捞努力量、外套膜长、体重、性别和成熟阶段，不只统计总吨数。
4. 给渔获和馆藏保留照片、组织或遗传凭证，逐步拆分 *O. vulgaris* complex 的历史记录。
5. 监测浮游幼体、着底招募、温度、溶氧和上升流，不用单年成体渔获量代表完整种群趋势。
6. 保留岩礁、海草床、碎石底与软底固体庇护物的组合，维持觅食和筑穴空间。

## 六张图片的科学事实边界

所有图片都标为“AI 生成科学情景重建”，不充当野外凭证、模式标本或精确行为实验记录。取景限定地中海或东北大西洋，不使用东亚、加勒比、巴西、南非或澳大利亚照片作为狭义种参考。

### 01 `01-rocky-reef-adult-portrait.webp`

- 场景：地中海浅海岩礁，一只完整成体停在岩石表面，周围保留开阔水体与自然海底背景。
- 必须有：宽椭圆肌肉质外套膜、两只眼、八腕、每腕两列吸盘、自然斑驳棕灰或棕红色、少量皮肤乳突。
- 禁区：不要画九条或更多腕、触手棒、外壳、侧鳍、蓝色发光环、鱼尾；强光画面瞳孔用水平狭缝。

### 02 `02-chromatophore-papillae-camouflage.webp`

- 场景：同一只动物贴近岩石和藻类，近景表现花纹与皮肤纹理变化。
- 必须有：斑驳、网纹或破碎轮廓，局部乳突隆起；花纹匹配附近物体的关键特征。
- 禁区：不要画彩虹渐变、霓虹发光、蓝环章鱼规则圆环、爬行动物鳞片或透明变色薄膜；不要声称复制整幅背景。

### 03 `03-rock-crevice-den-and-midden.webp`

- 场景：沙泥或碎石底，一处由石块、贝壳等固体材料形成的洞口，入口附近散落少量双壳、腹足类和蟹壳残骸。
- 必须有：单只章鱼、清晰庇护空间、尺度合理的少量硬壳残骸。
- 禁区：不要画成整齐花园、垃圾收藏展、巨大骨堆或与多个成体共享的“社区巢穴”；midden 不能代表完整食谱。

### 04 `04-crab-capture-and-sucker-use.webp`

- 场景：海底一只章鱼用腕和腕间膜包住一只中小型蟹，吸盘接触猎物。
- 必须有：喙藏在八腕中央，捕食主要由腕、吸盘和腕间膜完成。
- 禁区：不要画外露尖牙、毒刺、鱼叉舌、巨大的可见钻孔或血腥撕咬；不要把蟹画到超过章鱼身体数倍。

### 05 `05-female-egg-brooding-and-ventilation.webp`

- 场景：一只雌体独处洞穴，顶部硬基质垂挂大量密集的小卵串，雌体向卵串通水。
- 必须有：卵约 2 至 3 毫米量级、数量很多、串状附着、单亲照护。
- 禁区：不要画葡萄大小的少数卵、自由漂浮卵、雄雌共同守卵、已长出长腕的幼体围绕母体或明亮开放水域里的产卵仪式。

### 06 `06-pelagic-paralarva.webp`

- 场景：开放水体中的一只微小浮游幼体，可用桡足类或微型甲壳类提供尺度。
- 必须有：相对较大的外套膜和眼、恰好八条短腕、少量近端吸盘、轻微透明感与少数色素胞，不接触海底；图像不据像素固定孵化日龄或精确吸盘数。
- 禁区：不要画成长腕迷你成体、鱼尾幼体、外壳幼体、昆虫幼虫或整齐同步鱼群；不能用一帧静态图宣称精确漂流距离或阶段天数。

### 六图共同禁区

1. 成体图 01 至 05 都是恰好八腕、每腕两列吸盘；早期浮游幼体图 06 是恰好八条短腕并带少量近端吸盘，不用图像判定精确孵化日龄或吸盘数。任何一图都不能混入乌贼或鱿鱼的两条捕食触手。
2. 无外壳、无鳍、无 cirri、无规则亮蓝环。
3. 漏斗在头与外套膜腹侧之间，不从背部、腕尖或眼旁喷水。
4. 喙位于腕冠中央并通常被遮住，不画成外露鸟喙或脊椎动物上下颌。
5. 颜色和乳突可快速变化，但保持海洋动物组织质感，不加荧光魔法效果。
6. 封面和行为图只用单只成体；普通章鱼通常独居，交配或争斗需有直接情境才出现第二只。

## 推荐四项 featuredStats

| key | label | value | unit | note |
| --- | --- | --- | --- | --- |
| `arms` | 腕的数量 | `8` | 条 | 每腕两列吸盘；不是 6 腕加 2 触手 |
| `common-mantle-length` | 常见外套膜长 | `10–25` | cm | 约数口径，不是含腕全长或自然极值 |
| `potential-fecundity` | 潜在繁殖力 | `约 10万–50万` | 枚 | 历史综合范围；加利西亚样本均值约 22.1 万 |
| `planktonic-settlement` | 实验着底起始 | `47–54` | 日 | 21.2°C 培养条件，明显受温度影响 |

寿命可放正文或 keyFacts，不建议同时与卵量、孵化期拼成没有条件说明的“惊人数字”。

## HTTPS sources 表

| 来源 | 类型 | 可支撑内容 | 使用限制 |
| --- | --- | --- | --- |
| [WoRMS accepted taxon, AphiaID 140605](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140605) | 分类权威库 | 接受学名、命名人、AphiaID | 不提供完整生态叙事 |
| [WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140605) | 分类权威库 | 六个分类单元及中间阶元 | 仓库只取 kingdom 至 genus 的对应阶元 |
| [WoRMS vernaculars](https://www.marinespecies.org/rest/AphiaVernacularsByAphiaID/140605) | 分类权威库 | 英文俗名 | `ma-dako` 来自旧种界，不作狭义种别名 |
| [FAO, Cephalopods of the World Vol. 3, 2014](https://www.fao.org/4/i3489e/i3489e.pdf) | 联合国权威目录 | 诊断、分布、生境、体型、生活史、渔业 | 物种复合群拆分仍在继续，分布需用新系统学收紧 |
| [FAO Mediterranean species sheet](https://www.fao.org/fishery/docs/CDrom/ARTFIMED/ArtFiWeb/descript/Species/OCTOCVUL.HTML) | 联合国权威种表 | 常见外套膜长、体重、卵量、浮游期、底质 | 历史页含日本渔业，不能用作当前分布边界 |
| [IUCN, Allcock et al. 2018](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en) | 官方全球评估 | LC、Unknown、2016-04-08 评估、2018 发布 | 使用旧广义种范围；2014 是参考文献年份，不是评估年 |
| [IUCN assessment PDF](https://www.iucnredlist.org/species/pdf/918906.pdf) | 官方评估原件 | 评估日期、发布年份、理由、威胁与行动 | 直接核对元数据时优先此 PDF |
| [Amor et al. 2017](https://doi.org/10.1111/zsc.12207) | 原始系统学论文 | 复合群形态诊断及其与分子谱系的一致性 | 不能视作所有谱系最终命名完成 |
| [Gleadall 2016](https://doi.org/10.12782/sd.21.1.031) | 原始系统学论文 | 东亚普通章鱼使用 *O. sinensis* | 只解决东亚名称，不定义全部复合群 |
| [Quinteiro et al. 2020](https://doi.org/10.1371/journal.pone.0230294) | 原始群体遗传论文 | 狭义种、东北大西洋与马卡罗尼西亚范围 | 群岛样本不能自动补齐所有沿岸国家 |
| [De Luca et al. 2016](https://doi.org/10.1371/journal.pone.0149496) | 原始群体遗传论文 | 地中海和邻近东北大西洋群体结构 | 论文正文沿用当时更宽的全球名称史 |
| [Emami-Khoyi et al. 2026](https://doi.org/10.1002/ece3.73235) | 原始系统基因组论文 | 南非与阿姆斯特丹岛 Type III 和狭义种分离 | Type III 的正式物种名称尚未解决 |
| [Katsanevakis & Verriopoulos 2004](https://doi.org/10.3989/scimar.2004.68n1147) | 原始野外论文 | 软底筑穴、固体庇护材料限制局地分布 | 希腊地点结果，不等于全范围定量阈值 |
| [Arechavala-Lopez et al. 2018](https://doi.org/10.1093/icesjms/fsy014) | 原始追踪论文 | 人工改变海岸的巢穴、移动和局地活动空间 | 地方 home range 不作全种固定值 |
| [Josef et al. 2012](https://doi.org/10.1371/journal.pone.0037579) | 原始野外图像实验 | 花纹匹配附近物体的选定特征 | 同时研究两个物种；本种样点在意大利卡普里 |
| [Ambrose & Nelson 1983](https://doi.org/10.1111/j.1439-0485.1983.tb00299.x) | 原始野外食性论文 | 软体动物、蟹类、midden 与钻孔 | 80% 是法国地中海巢口硬壳残骸估计 |
| [Otero et al. 2007](https://doi.org/10.1016/j.fishres.2007.01.007) | 原始繁殖论文 | 加利西亚繁殖期、成熟、潜在繁殖力和卵母细胞尺寸 | 地方渔业样本，不作全球平均 |
| [Deryckere et al. 2020](https://doi.org/10.1186/s12861-020-00212-6) | 原始胚胎实验 | 卵尺寸、卵串、母体照护、19°C 约一月孵化 | 人工海水强水流系统，不代表野外孵化期 |
| [Villanueva et al. 2021](https://doi.org/10.3389/fmars.2021.645738) | 原始幼体形态论文 | 刚孵化幼体的短腕、约三枚近端吸盘与 Kölliker 器官 | 只支撑孵化期形态，不用生成图像反推精确日龄 |
| [Villanueva 1995](https://doi.org/10.1139/f95-853) | 原始幼体培养论文 | 21.2°C 下第 47 至 54 日着底、第 60 日底栖 | 温度、饵料和培养条件影响阶段长度 |
| [Perales-Raya et al. 2014](https://doi.org/10.1007/s10750-013-1602-x) | 原始年龄论文 | 中东大西洋产后个体约一年生活史 | 样本 20 只且依赖喙增量解释 |
| [Hermosilla et al. 2010](https://doi.org/10.1093/icesjms/fsq047) | 原始年龄验证论文 | 成体短期实验中 stylet 增量约每日形成 | 尚未覆盖完整生命期和全部体型 |
| [Senckenberg Marinvert](https://marinvert.senckenberg.science/octopus-vulgaris/) | 博物馆形态资料 | 外套膜、腕长、两列吸盘、漏斗、瞳孔与照片参照 | 作为图像和形态核验，不替代系统学论文 |

## 不确定性与实现检查

1. **IUCN 年份**：字段用 2016。2018 是发表年和版本年份；2014 是 FAO 参考文献年份。三者不能互换。
2. **保护状态的分类滞后**：LC 是正式状态，但其旧广义范围包含如今已拆出的谱系。文案注明需要更新，不自行改成 DD 或 NE。
3. **狭义分布边缘**：地中海、东北大西洋和马卡罗尼西亚最稳固；南非 Type III 已显示独立，正式名称仍未落定。旧记录中的更南界和离散岛屿需逐条凭证复核。
4. **体尺**：10 至 25 厘米是外套膜长的展示约数。外套膜长、腕长、全长和体重不能互换；历史最大值可能受旧物种复合群口径影响。
5. **寿命**：约 1 至 2 年是估计范围。喙或 stylet 增量的日周期验证、磨损和圈养环境都会影响结果。
6. **产卵量**：10 万至 50 万是宽综合范围；221,447 ± 116,031 是加利西亚潜在卵母细胞数，不等于每只雌体最终成功孵化数。
7. **孵化时间**：19°C 约一月来自人工强水流系统。自然孵化受温度与母体通水影响，不能只写“30 天”。
8. **浮游幼体期**：21.2°C 下 47 至 54 日开始着底是单项培养结果。页面概述使用“数周至数月”，细节卡保留温度。
9. **活动时间**：地中海常见夜行和白天守穴，但地点、捕食风险与食物会改变节律，不写“严格夜行”。
10. **图像身份**：东亚、加勒比、巴西、南非和澳大利亚常见“common octopus”照片可能属于其他谱系，不能直接当作狭义种参考图。

落库前静态检查：分类归属只含六个 schema 阶元；`conservation` 为 `LC / unknown / 2016`；分布没有东亚、美洲、南非或澳大利亚；体长注释明确外套膜长；01 至 05 的成体恰好八腕、每腕两列吸盘，06 的早期浮游幼体恰好八条短腕并带少量近端吸盘，图像元数据不固定孵化日龄或精确吸盘数；卵图和浮游幼体图保留实验或阶段限定；所有 sources 使用 HTTPS。
