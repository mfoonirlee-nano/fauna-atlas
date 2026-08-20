# 红袋鼠（*Osphranter rufus*）完整档案研究

- 检索与核验日期：2026-08-20
- 展示中文名：**红袋鼠**；英文名：**Red Kangaroo**；可检索别名：**红大袋鼠、赤大袋鼠、Blue Flier、Plains Kangaroo**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供科学边界
- 证据标准：分类优先采用 ASM Mammal Diversity Database（MDD）和 Australian Faunal Directory（AFD/ABRS）；全球状态采用 IUCN 原始评估 DOI；澳大利亚法律与商业捕获管理采用联邦和州政府现行页面/计划；形态、运动、繁殖和种群动力学采用同行评审物种综述与原始研究
- 时间口径：本文所称“当前”截至 **2026-08-20**。IUCN 的评估日期、Red List 发布卷期、联邦受威胁名录和各州捕获计划分别记录，不能互相替代
- 地理与数字边界：红袋鼠数量随降雨和干旱剧烈起伏；州级航空调查只覆盖商业管理区，不能拼成貌似精确的全球或全国同步总数。地图 `center` 只是澳大利亚内陆尺度的视图焦点

## 结论摘要

### 当前接受名是 *Osphranter rufus*，不是继续把旧组合当主名

仓库主记录应采用 ***Osphranter rufus* (Desmarest, 1822)**，分类为动物界—脊索动物门—哺乳纲—双门齿目—袋鼠科—*Osphranter* 属。MDD v2.5 与 AFD 均接受这个组合；AFD 明确把 ***Macropus rufus*** 列为异名，MDD 也注明该种由 *Macropus* 移入 *Osphranter*。2019 年分子与形态整合研究进一步支持把旧 *Macropus* 复合群中的 *Osphranter*、*Notamacropus* 与狭义 *Macropus* 分开处理。[MDD v2.5](https://www.mammaldiversity.org/taxon/1000292/) [AFD taxon concept](https://biodiversity.org.au/afd/taxa/7e6e134b-2bc7-43c4-b23a-6e3f420f57ad) [Celik et al. 2019](https://doi.org/10.1093/zoolinnean/zlz005)

旧名并不是“另一个已经灭绝或被拆出的物种”。IUCN 2016-2 的现行评估仍以当时通行的 ***Macropus rufus*** 发布，指的就是今天的 *Osphranter rufus*；因此 IUCN DOI 可以继续支撑状态字段，但 `scientificName`、`taxonomy.genus`、`id` 和用户可见来源标题应采用当前接受名，并在标题中注明 IUCN 的旧组合。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T40567A21953534.en) [MDD](https://www.mammaldiversity.org/taxon/1000292/)

同行评审物种综述把本种视为**单型种**，当前不承认现生亚种。历史上的 *M. r. occidentalis*、*M. r. pallidus* 等名称不能直接变成产品中的地区亚种，也不能仅凭红色或蓝灰色被毛给图片贴亚种标签。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

中文属名没有像科学名那样统一的国际命名权威；若 schema 必须填写 `zhName`，建议用较常见、且能与旧“大袋鼠属 *Macropus*”区分的“**毛袋鼠属**”。这只是界面标签，分类判断以 *Osphranter* 为准。

### IUCN：LC、趋势 stable、评估年 2015；2016-2 是发布卷期

截至核验日，最新可追溯的 IUCN 全球记录仍为 **无危 Least Concern（LC）**、种群趋势 **稳定 stable**。DOI 注册元数据给出的 assessment/issued 日期是 **2015-06-15**，而正式引用属于 *The IUCN Red List of Threatened Species 2016-2*。因此结构化字段应为：

```ts
conservation: conservation('LC', 'stable', 2015)
```

不能把 2016 填成 `assessedYear`。LC 记录没有应抄入本 schema 的威胁标准字符串，`criteria` 应省略，不能自行写 `A`、`B` 或“not applicable”。评估依据是分布广、种群大、多个保护地有分布、没有已识别的全域主要威胁和当时判断的稳定趋势。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T40567A21953534.en) [Crossref DOI metadata](https://api.crossref.org/works/10.2305%2FIUCN.UK.2016-2.RLTS.T40567A21953534.en) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

这项评估已超过十年，不能被描述为“2026 年重新确认稳定”。更准确的说法是：**当前公开条目仍是 2015 年 LC / stable，尚未发现取代它的新全球重评**。红袋鼠在 2024 年曾被公众提名按澳大利亚 EPBC Act 列为 Vulnerable；联邦 Threatened Species Scientific Committee 在 2025 优先清单判断中认为证据不足以确定全物种正在下降，未把它列入优先评估清单。这不是一次完成的 IUCN 重评，也不是“政府证明它永远安全”。[DCCEEW — nominations not prioritised](https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment)

澳大利亚联邦当前说明“没有袋鼠物种列作国家受威胁物种”。这与各州把本土袋鼠作为受保护动物、并在许可、配额和福利规范下允许捕获并不矛盾。产品 `conservation` 只能保存全球 IUCN LC；“联邦未列威胁”“州法保护”“商业捕获物种”是三种不同法律/管理信息。[DCCEEW — exporting Australian native plants and animals](https://www.dcceew.gov.au/environment/wildlife-trade/natives)

## 分布与生境

红袋鼠是澳大利亚特有种，分布于**澳大利亚大陆的中部与内陆干旱、半干旱带**。它在大陆中纬度范围很广，却不是沿海和全大陆均匀铺开的物种；热带北部湿润区、东部和东南部湿润沿海带、最密闭的森林及塔斯马尼亚不属于核心原生分布。产品中用 `countries: ['澳大利亚']` 即可，州名不必伪装成完整逐县清单。[MDD](https://www.mammaldiversity.org/taxon/1000292/) [Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

适宜生境不是“纯沙漠”三个字，而是能在雨后或局部水分条件下提供绿色草本、同时有遮阴或避热位置的开阔镶嵌景观：

- **开阔平原、短草地和稀树草原**是最典型的觅食面；红袋鼠通常偏好开阔地和低矮灌丛，过密灌木会妨碍快速移动。
- **低灌丛、盐生藜科灌丛、mulga/mallee 疏林与开阔林地**在旱季提供食物、遮阴和局地避难。名称中的“红”和“袋鼠”都不意味着只生活在红沙丘。
- **沙漠与牧区**可以进入，但仍需要可食绿色芽、草本或灌木；完全无植被的高大裸沙丘不是代表性背景。
- 资源条件好时多数个体只作局部移动；干旱和零散降雨会改变密度空间格局，少数个体可移动几十甚至上百千米。它不是每年沿固定路线集体迁徙的草原有蹄类。[Queensland WTMP 2023–27](https://www.dcceew.gov.au/sites/default/files/documents/qld-wildlife-trade-management-plan-export-macropod-2023-2027.pdf) [Pople et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01344.x) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

推荐地图焦点 `center: { lat: -25, lng: 134 }`，只用于打开澳大利亚内陆视图；它不是分布几何中心、数量中心、观测点或放归地点。

## 体型、两性差异与野外辨识

红袋鼠是现生最大的有袋类，且两性体型差异极大。同行评审物种综述给出：成年雄兽体重约 **45—85 千克**、头体长 **94—160 厘米**、尾长 **70—115 厘米**；成年雌兽通常 **18—36 千克**、头体长 **75—110 厘米**、尾长 **65—90 厘米**。澳大利亚博物馆用极值式概览给出雄兽可至约 92 千克、雌兽约 39 千克，适合在正文保留为机构记录的更宽上限，却不应把 92 千克写成普通雄兽体重。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011) [Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/)

`measurements.length` 应明确是**头体长、不含尾**，采用 75—160 厘米；尾长另写在 note。把头体与尾巴相加后再称“体长”，会与其他物种字段的口径冲突。`measurements.weight` 可采用成体常用的 18—85 千克联合包络，并在 note 分列雌雄；更高博物馆极值只放正文，不宜让排序字段看似适用于所有成体。

关键外形线索如下：[Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

- 头相对小，耳朵长而尖，眼大而深色；吻部前端有暗黑、近乎无毛的鼻镜。
- 吻侧具有本种很重要的**黑白对比斑**，并有一条宽的浅色条纹从嘴角向耳下延伸。不能只靠“红色大袋鼠”识别。
- 后肢和狭长后足极发达，前肢明显较短；大型成年雄兽肩胸和前臂会比雌兽强壮，但仍不是灵长类手臂。
- 尾巴长、粗壮、肌肉发达并逐渐收尖，慢行时可承重和推进，跳跃时帮助平衡；不是细鼠尾、抓握尾或永远悬空的装饰。
- 腹面、肢端和尾部通常比躯干浅，足与趾部可显得较深；远端尾部可有数道不显眼的暗色毛带，但不应夸张成浣熊环尾。

雄兽通常呈红褐、橙红或沙红，雌兽通常呈蓝灰或烟灰，因此“blue flier”可作历史英文别名；但体色同时受地区和个体影响。西澳雄兽可较浅，澳大利亚中部和部分西部雌雄都可能偏红，少数个体还会出现常见性别配色的反转。**雌性不是必须蓝灰、雄性也不是统一鲜红**；图片可用典型配色帮助辨认，却不能把颜色当成单一性别鉴定标准。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

## 食性、雨水脉冲与水分

成体是以**短而绿色的草**为核心的植食性草食者，常选择草丛基部的新芽和雨后绿色草本；会吃阔叶草本/杂类草，旱季草类不足时增加藜科灌木和其他灌木叶的比例。食谱随地点、季节、性别和繁殖状态变化，因此 `foods` 应包含草、阔叶草本与旱季灌木，不写成“只吃草”或“主要吃树叶”。[Queensland WTMP 2023–27](https://www.dcceew.gov.au/sites/default/files/documents/qld-wildlife-trade-management-plan-export-macropod-2023-2027.pdf) [Newsome 1980](https://doi.org/10.1111/j.1365-2028.1980.tb00268.x) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

绿色草本和叶片能提供大量水分，红袋鼠在得到足够含水食物时可以较长时间不饮自由水；**这不等于它从不喝水**。有水时会饮水，干旱时食物数量和含水量同步下降，营养不足往往比单一口渴更直接地压低繁殖和存活。[Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/) [Perth Zoo](https://perthzoo.wa.gov.au/animal/red-kangaroo)

长期资料表明，降雨、绿色牧草量、密度与捕获共同影响局地增长率。严重干旱时，幼兽、小个体和大型雄兽的死亡尤其高，局部数量可下降超过 50%，恢复到旱前密度可能需要多年。它是对不稳定干旱环境的适应，不是“干旱越严重越繁盛”。[Jonzén et al. 2005](https://doi.org/10.1111/j.1365-2656.2005.00915.x) [Jonzén et al. 2010](https://doi.org/10.1111/j.1365-2656.2009.01601.x) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

## 活动、热调节与运动

红袋鼠主要从下午后段、黄昏到夜间觅食，炎热白天多在树下或其他阴影中休息；冬季、阴天和较凉条件下可白天活动，所以“严格夜行”过度绝对。野外比较研究发现红袋鼠比西部灰袋鼠能在更高辐射热负荷下保持暴露，但仍会使用阴影，不能因此把典型生境画成完全没有任何遮蔽物。[Roberts et al. 2016](https://doi.org/10.1080/23328940.2016.1163452)

热负荷很高时会喘息，并把唾液舔涂在前臂皮肤上；前臂表浅血管网的血流增加，唾液蒸发帮助散热。这是生理调节行为，不是洗澡、受伤流液或用爪子喝水。它也会用脚刨出浅浅的“hip hole”再侧卧休息，但不是挖地下洞穴居住。[Needham, Dawson & Hales 1974](https://doi.org/10.1016/0300-9629(74)90568-4) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

运动必须区分两种步态：

- **慢速五足式移动（pentapedal gait）**：两只前足先落地，粗壮尾巴随后接地并产生推进力，两只后足成对向前摆。五只红袋鼠的力板实验显示，尾巴提供的推进力可与前后肢合计相当；“第五条腿”是功能比喻，动物仍只有四肢。[O’Connor et al. 2014](https://doi.org/10.1098/rsbl.2014.0381)
- **快速双足跳跃**：两条后肢同步蹬伸，身体前倾，尾巴向后作为平衡器；弹性肌腱回收能量，使高速跳跃的单位距离成本不会像一般四足奔跑那样持续增加。同行评审综述只稳健支持短时速度**超过 40 km/h**，并没有为产品提供统一“最高 70 km/h”的测试值，因此不填 `metrics.topSpeedKph`。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

## 松散小群、警戒与雄性竞争

红袋鼠会形成 mob，但不是有固定成员和终身领袖的紧密兽群。研究汇总的常见群体是 **2—10 只**，其中 **2—4 只最常见**；个体不断加入、离开，资源丰富处或雨后可暂时聚成更大群。母兽与幼兽是最稳定的社会纽带；独行的大雄兽也很常见。群居能让个体减少警戒、增加取食时间，但不能把临时聚集解释成固定家庭群。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

成年雄兽不以边界明确的领地统治一块土地，优势主要与体型有关。雌兽发情时，雄兽会直立展示、前臂抓抱或推搡；升级后的格斗可由尾巴承重，两只后足同时向对手腹部踢击。图片应表现仪式化竞争，不加拳击手套、人类拳法、血腥撕咬或永久“一夫一妻”。受惊个体也会以后足跺地或发出强烈咳声警示周围同类。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

## 繁殖接力：短妊娠不等于短育幼

红袋鼠在条件合适时全年可繁殖，是随雨水与食物变化的机会性繁殖者；春夏常见出生高峰，但严重干旱会延迟性成熟、抑制发情、增加幼兽死亡。通常每胎 **1 只**，双胎仅属少见记录。[Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

经典原始观察给出的妊娠期为 **32—34 天**，新生幼兽约 **750 毫克**，无毛、眼耳未发育完全，却有足以爬向育儿袋的前肢。幼兽约 150 日龄才常把头探出袋外，约 190—235 日龄开始短暂出袋，约 **235—240 日龄**永久出袋，此后仍可哺乳到约 12 个月。产品应把“约 33 天”标成妊娠，不要误写成出生后一个月就独立。[Sharman & Pilton 1964](https://doi.org/10.1111/j.1469-7998.1964.tb05152.x) [Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/)

母兽产后约两天可再次交配；新胚胎发育至囊胚后在前一只幼兽持续占袋哺乳时进入**胚胎滞育**。条件良好时，一只雌兽可同时照料一只袋外仍吃奶的 young-at-foot、一只袋内幼兽，并携带一枚休眠胚胎。不同乳腺/乳头可为不同年龄幼兽分泌不同成分的乳汁。图像最多能直接看见袋外幼兽与从袋口探头的袋内幼兽；休眠胚胎不能画成腹部透视的“第三只宝宝”。[Sharman & Pilton 1964](https://doi.org/10.1111/j.1469-7998.1964.tb05152.x) [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)

## 威胁、种群波动与保护行动

IUCN 当前判断是“没有已识别的全域主要威胁”，因此产品不能把红袋鼠写成正在全球濒危崩溃；同样也不能因 LC 就删除所有管理风险。最准确的分层是：

1. **自然与气候驱动的强烈波动**：降雨不足导致绿色牧草下降，干旱会抑制繁殖并造成局部大幅死亡；气候变化若增加长期干旱、极端热或火灾，会放大风险。联邦 2025 判断仍认为现有证据不足以确认全物种下降。[DCCEEW nomination decision](https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment) [Jonzén et al. 2010](https://doi.org/10.1111/j.1365-2656.2009.01601.x)
2. **土地利用的双向影响**：集约农业、城市扩张和密闭林地转化会损失边缘生境；另一方面，清林形成牧草、牲畜水点和捕食者控制曾使一些牧区密度增加。不能把所有农业变化统一写成“有利”或“有害”。[Queensland WTMP 2023–27](https://www.dcceew.gov.au/sites/default/files/documents/qld-wildlife-trade-management-plan-export-macropod-2023-2027.pdf)
3. **放牧竞争与外来动物**：食物紧缺时，家畜、野兔和野山羊与红袋鼠的食谱重叠会加大绿色牧草压力；这通常是干旱条件下的局地交互作用，不是单一的全球灭绝原因。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)
4. **捕获与非商业控制**：红袋鼠在新南威尔士、昆士兰、南澳和西澳属于商业捕获管理物种。现行方案通过航空调查、区域配额、许可、标签、回报和福利规范管理；捕获不是自动等于“偷猎”，但如果估算、阈值或旱年调整失效，就会与自然死亡叠加。[DCCEEW wildlife trade plans](https://www.dcceew.gov.au/environment/wildlife-trade/commercial/management-plans) [NSW kangaroo management](https://www.environment.nsw.gov.au/topics/animals-and-plants/wildlife-management/kangaroo-management)
5. **道路、围栏和其他局地死亡**：道路撞击、围栏缠挂、无许可杀死和栖息地碎片化可造成局地影响，但本次没有找到能把这些量化为全域主要下降原因的资料，不应排在干旱—食物动力之前。

保护行动应强调**适应性管理**，而不是把 LC 理解为“不用保护”：

- 保持标准化航空调查、调查误差公开和多年可比的管理区时间序列；不要用某一年雨后高峰代表长期承载力。
- 将干旱、绿色牧草量和最低密度阈值写进年度配额；种群低时降低或暂停捕获，而不是机械套用固定百分比。NSW 常规红袋鼠配额约为调查估计的 17%，这是一个州的规则，不是全国固定安全率。
- 保留国家公园和其他禁捕区作为人口、年龄结构与遗传参照；监测捕获的性别、年龄和体型结构，而不只统计总数。
- 保护开阔原生草地、低灌丛、阴影树和干旱避难地，控制牲畜与野兔在食物不足期的叠加压力；人工水点的生态效应随景观而异，不能把“多建水槽”列成通用保护措施。
- 在道路和围栏热点改进可见性、通行设计与救援响应；持续执行许可、标签、可追溯与人道操作规范。
- 把降雨情景和气候变化纳入捕获模型。原始人口模型提示平均降雨若显著降低，过去在既有雨型下可持续的捕获比例可能不再安全；这是模型风险警示，不是对未来数量的确定预言。[Jonzén et al. 2010](https://doi.org/10.1111/j.1365-2656.2009.01601.x)

## 推荐关键事实

1. 当前接受名是 *Osphranter rufus*；*Macropus rufus* 是 IUCN 旧评估仍使用的同物异名组合，不是另一个物种。
2. 当前正式 IUCN 为 `LC / stable / 2015`；2016-2 是发布卷期，LC 不填 criteria。[IUCN](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T40567A21953534.en)
3. 红袋鼠是澳大利亚大陆内陆干旱、半干旱带的特有种，不原生于塔斯马尼亚，也不是湿润沿海和热带雨林物种。[MDD](https://www.mammaldiversity.org/taxon/1000292/)
4. 雄兽约 45—85 千克、头体长 94—160 厘米；雌兽通常 18—36 千克、75—110 厘米，性别体型范围必须分列。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011)
5. 黑白吻侧斑和嘴角通向耳下的宽浅色条纹，比单纯“雄红雌灰”更可靠；体色有明显地区和个体例外。
6. 食物以短绿色草为主，也吃阔叶草本，并在干旱时增加藜科和其他灌木；能从植物取水不等于从不饮水。
7. 慢行时尾巴像功能性的第五条腿提供支撑与推进；快速移动才改用双足同步跳跃。[O’Connor et al. 2014](https://doi.org/10.1098/rsbl.2014.0381)
8. 常见 mob 只有 2—4 只，成员不断加入、离开；母幼纽带最稳定，成年雄兽可独行，不能画成固定大家庭。
9. 妊娠仅 32—34 天，但幼兽约 235—240 天才永久出袋，并继续哺乳；短妊娠不等于短育幼。[Sharman & Pilton 1964](https://doi.org/10.1111/j.1469-7998.1964.tb05152.x)
10. 条件良好时雌兽可同时有一只袋外幼兽、一只袋内幼兽和一枚休眠胚胎；三个阶段并非三只都能从外部看见。
11. 全球 LC 与干旱造成的局地暴跌可以同时成立；州级商业调查数也不能替代全国或全球同步种群估计。
12. 商业捕获须置于航空监测、年度配额、低密度阈值、许可、禁捕区和人道规范中理解；NSW 的 17% 不是全国通用常数。

## 应删除或避免的说法

- 不继续把 `Macropus rufus` 作为当前主学名；保留为旧组合和检索别名。
- 不把 IUCN 发布卷期 2016-2 写成 `assessedYear: 2016`；评估日期是 2015-06-15。
- 不给 LC 添加自造 criteria，也不把联邦“未列受威胁”说成新的 IUCN 评估。
- 不写“2026 年 IUCN 认定种群稳定”；当前公开状态来自 2015 年评估。
- 不写全国或全球精确现存数量。商业管理区年度估计漏掉未调查区域，并随降雨剧烈变化。
- 不把所有雄兽画成鲜红、所有雌兽画成蓝灰；典型配色有地区和个体例外。
- 不只用毛色鉴定；必须保留黑白吻侧斑、浅色嘴角条纹、长尖耳、长后足和粗壮渐尖尾。
- 不把红袋鼠画成矮壮、短后腿、细尾的 wallaroo，也不画成鹿蹄、兔足或鼠尾。
- 不写“从不喝水”；应写绿色食物可显著满足水分需求，有水时仍会饮水。
- 不写“只吃草”或“主要吃树叶”；以短绿色草为主，阔叶草本和旱季灌木是重要补充。
- 不写“严格夜行”；凉爽季节和条件下可白天活动。
- 不写“每群几十到几百只”作为常态；常见群 2—4，只在资源集中时出现更大临时聚集。
- 不写“固定母系领袖”“终身配偶”或“雄兽守卫领地”；群体松散、雄性优势偏体型、交配制为等级化多配。
- 不把慢行的“第五条腿”画成真实多出一条腿；尾巴是第五个承重点和推进器。
- 不填 `topSpeedKph: 70`。本次核得的同行评审综述只支持短时超过 40 km/h，没有统一测试最大值。
- 不把妊娠 33 天写成独立年龄；永久出袋约 235—240 天，之后仍继续哺乳。
- 不把胚胎滞育画成透明腹部里的完整小袋鼠，也不让一只雌兽的育儿袋同时伸出两只大幼兽。
- 不把合法配额捕获一律称作偷猎，也不因 LC 就称商业捕获“必然没有影响”；管理结论取决于调查、阈值、旱年调整和合规。
- 不把人工水点当作无条件保护行动；它能改变密度、放牧压力与捕食关系，效果依景观而异。

## 量化字段取舍

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `measurements.length` | 75—160 cm | 成体头体长，不含尾；雄 94—160、雌 75—110 cm。尾长另在 note 写雄 70—115、雌 65—90 cm。[Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011) |
| `metrics.adultLengthCm` | `[75, 160]` | 与展示字段保持同一头体长口径，不把尾长相加。 |
| `measurements.weight` | 18—85 kg | 常用成体联合包络；雄 45—85、雌通常 18—36 kg。澳大利亚博物馆的 92/39 kg 极值只在正文保留。 |
| `metrics.adultMassKg` | `[18, 85]` | 用于排序的联合包络；必须由 note/事实卡同时显示明显的性别双峰。 |
| `metrics.lifespanYears` | 不填 | 本次未核到足以区分野外典型寿命、野外极值和圈养极值的一致一手数据；不采用科普页“up to 23 years”作为范围。 |
| `metrics.topSpeedKph` | 不填 | 综述支持短时超过 40 km/h，却不是统一测得的物种最大值；70 km/h 等流行数字缺少本次要求的原始依据。 |
| `metrics.estimatedMatureIndividuals` | 不填 | IUCN 未给出适合落库的当前全球成熟个体区间；州级商业区航空估计既非全球也非全澳同步普查。 |
| `featuredStats.adult-male-mass` | 45—85 kg | 成体雄兽常用范围，不能与雌兽混成“普通个体”。 |
| `featuredStats.adult-female-mass` | 18—36 kg | 成体雌兽通常范围；体现显著性别差异。 |
| `featuredStats.gestation` | 32—34 天 | 原始观察妊娠期，不是育幼期。[Sharman & Pilton 1964](https://doi.org/10.1111/j.1469-7998.1964.tb05152.x) |
| `featuredStats.permanent-pouch-exit` | 约 235—240 天 | 永久出袋窗口；此后仍可继续哺乳。 |

## 6 幅观察图内容与验收线索

| 序号与文件 | 建议场景 | 必须表现的物种/行为线索 | 应拒绝的错误 |
| --- | --- | --- | --- |
| 01 `01-inland-plain-portrait.webp` | 封面：晨光下的澳大利亚内陆开阔平原，一只完整大型成年雄兽侧前方警戒，主体在右侧并给左侧标题留白 | 红褐短毛、浅腹面、小头、长尖耳、大深色眼；黑鼻与黑白吻侧斑、嘴角至耳下浅条；强壮肩胸、短前臂、巨大后肢、狭长后足、粗壮渐尖长尾；四肢和尾尖都完整入框 | 灰袋鼠式无明显黑白脸斑、wallaroo 式矮壮短腿、鹿蹄、兔子比例、细鼠尾、白尾鹿尾、额外肢体；不要只给半身而裁掉后足或尾巴 |
| 02 `02-rainfall-grazing.webp` | 一只蓝灰色成体在局地降雨后低头选择仍扎根土壤的短绿色草芽，周围整体仍是干旱草地而非青翠牧场 | 浅腹面与黑白脸纹；自然取食姿态，前足可轻触地面，尾巴稳定身体；可见短草、新芽和稀疏旱生植被；不凭蓝灰被毛断定性别 | 把个体做成幼兽体型或强行标成雌兽；吃肉、啃高树枝、农场干草堆或手工投喂；整幅画成雨林或欧洲绿色草场 |
| 03 `03-inland-rangeland-habitat.webp` | 生境大景：一只小比例成体位于草地—低灌丛—远处疏林的开阔内陆镶嵌中，作为尺度线索 | 动物完整但不抢占画面；干草、低灌丛、红土排水线、疏林和开阔跑动通道共同表现生境结构 | 把个体做成近景主角、无植物裸沙丘、热带雨林、非洲稀树草原动物或乌鲁鲁旅游合影 |
| 04 `04-airborne-hopping.webp` | 一只成体从左向右完成普通快速跳跃的腾空阶段 | **只有四肢一尾**；两条后肢同步推进但轮廓可分别辨认，两只后足和整条尾巴都离地，尾巴只作空中平衡；前肢也应分别可读 | 尾巴接地推进、把慢速五足式步态混进快速跳跃、一脚奔跑、兔式蹦跳、融合或额外肢体、夸张超级英雄式飞跃 |
| 05 `05-female-and-pouch-joey.webp` | 一只完整成年雌兽站在低灌丛前，恰好一只已长毛幼兽只把头与双耳探出育儿袋 | 育儿袋位于腹面，弧形袋缘与轻微阴影可读并包住幼兽头部基部；幼兽颈、肩、四肢、躯干和尾均不可见；无成年雄兽“守护家庭” | 幼兽头像贴在未断开的腹部毛皮上、袋口像人造口袋、袋中多颗头、袋外第二只幼兽、透明腹部显示休眠胚胎、外露乳头或奶瓶 |
| 06 `06-ground-transect-monitoring.webp` | 两名工作人员用双筒望远镜、记录板与一台观测镜，在标准化地面样线上远距离记录一只红袋鼠 | 恰好两人、一台观测镜和一只完整远处成体；人与动物之间留有大段开阔地，设备不接触动物；表现观察而非宣称全国数量 | 触摸、投喂、捕捉、标记、麻醉或射杀；额外人员、额外袋鼠、车辆巡游、胜利式摆拍，或把一次目击画成全国趋势信息图 |

六图共同形态总检：**exactly two forelimbs, two very large hind limbs, two long narrow hind feet, one thick muscular tapering tail; small head, long pointed ears, large dark eyes; dusky-black rhinarium; diagnostic black-and-white muzzle/cheek pattern with broad pale stripe from mouth corner toward below the ear; pale underside; short soft coat; no hooves, antlers, rodent tail, boxing gloves or extra limbs**。典型雄兽红褐、典型雌兽蓝灰只是起点，允许地区色差；任何图都不能靠体色而丢掉脸部鉴别纹。

## 可直接用于 `species.ts` 的字段建议

下面对象覆盖当前 `Species` 必填字段，并已与最终六幅资产的文件名、构图和 `focalPoint` 同步。

```ts
const RED_KANGAROO_SOURCE_DATE = '2026-08-20' as const;
const RED_KANGAROO_CONTENT_DATE = '2026-08-20' as const;

const RED_KANGAROO_SOURCES = [
  {
    title: 'IUCN Red List — Macropus rufus (accepted today as Osphranter rufus; assessed 2015)',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T40567A21953534.en',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Osphranter rufus',
    url: 'https://www.mammaldiversity.org/taxon/1000292/',
    kind: 'taxonomy',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Australian Faunal Directory — Osphranter rufus accepted taxon concept',
    url: 'https://biodiversity.org.au/afd/taxa/7e6e134b-2bc7-43c4-b23a-6e3f420f57ad',
    kind: 'taxonomy',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Celik et al. 2019 — Systematics of the Macropus complex',
    url: 'https://doi.org/10.1093/zoolinnean/zlz005',
    kind: 'taxonomy',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Freedman et al. 2020 — Osphranter rufus (Mammalian Species)',
    url: 'https://doi.org/10.1093/mspecies/seaa011',
    kind: 'general',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Australian Museum — Red Kangaroo',
    url: 'https://australian.museum/learn/animals/mammals/red-kangaroo/',
    kind: 'general',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Queensland Wildlife Trade Management Plan 2023–2027 — commercially harvested macropods',
    url: 'https://www.dcceew.gov.au/sites/default/files/documents/qld-wildlife-trade-management-plan-export-macropod-2023-2027.pdf',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Current wildlife trade management plans',
    url: 'https://www.dcceew.gov.au/environment/wildlife-trade/commercial/management-plans',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'DCCEEW — Red kangaroo EPBC nomination not prioritised',
    url: 'https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'NSW Government — Kangaroo management and population monitoring',
    url: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/wildlife-management/kangaroo-management',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'O’Connor et al. 2014 — The kangaroo tail propels pentapedal locomotion',
    url: 'https://doi.org/10.1098/rsbl.2014.0381',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Sharman & Pilton 1964 — Life history and reproduction of the red kangaroo',
    url: 'https://doi.org/10.1111/j.1469-7998.1964.tb05152.x',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Needham, Dawson & Hales 1974 — Forelimb blood flow and saliva spreading',
    url: 'https://doi.org/10.1016/0300-9629(74)90568-4',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Roberts et al. 2016 — Continent-wide analysis of kangaroo shade requirements',
    url: 'https://doi.org/10.1080/23328940.2016.1163452',
    kind: 'ecology',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
  {
    title: 'Jonzén et al. 2010 — Stochastic demography and red kangaroo population dynamics',
    url: 'https://doi.org/10.1111/j.1365-2656.2009.01601.x',
    kind: 'conservation',
    accessedAt: RED_KANGAROO_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-osphranter-rufus',
  slug: 'red-kangaroo',
  names: {
    zh: '红袋鼠',
    en: 'Red Kangaroo',
    aliases: ['红大袋鼠', '赤大袋鼠', 'Blue Flier', 'Plains Kangaroo', 'Macropus rufus'],
  },
  scientificName: 'Osphranter rufus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Diprotodontia', '双门齿目'),
    taxon('Macropodidae', '袋鼠科'),
    taxon('Osphranter', '毛袋鼠属'),
  ),
  conservation: conservation('LC', 'stable', 2015),
  distribution: {
    realms: ['terrestrial'],
    continents: ['大洋洲'],
    regions: ['澳大利亚大陆内陆', '澳大利亚干旱区', '澳大利亚半干旱牧区'],
    countries: ['澳大利亚'],
    endemicTo: ['澳大利亚'],
    range:
      '澳大利亚大陆中部与内陆中纬度的干旱、半干旱带；广布于开阔平原、草地、低灌丛、mulga/mallee 疏林和有绿色草本的沙漠景观，但不原生于塔斯马尼亚，湿润沿海、热带雨林和最密闭森林也不是核心分布。',
    center: { lat: -25, lng: 134 },
  },
  habitats: [
    {
      name: '开阔平原、短草地与稀树草原',
      realm: 'terrestrial',
      description: '最典型的觅食生境；短绿色草、阔叶草本、开阔视野和可快速跳跃的通道共同决定适宜度。',
      isPrimary: true,
    },
    {
      name: '低灌丛、盐生灌丛与内陆疏林',
      realm: 'terrestrial',
      description: '利用 mulga、mallee、藜科灌丛和开阔林地中的食物与阴影；过密灌木和闭合森林通常不利于快速移动。',
    },
    {
      name: '有植被的沙漠与半干旱牧区镶嵌',
      realm: 'terrestrial',
      description: '随零散降雨利用短暂绿色斑块和旱季避难地；完全无植物的裸沙丘不是完整生境。',
    },
  ],
  measurements: {
    length: {
      min: 75,
      max: 160,
      unit: 'cm',
      note: '成体头体长，不含尾；雄 94—160 cm、雌 75—110 cm；尾长雄 70—115 cm、雌 65—90 cm',
    },
    weight: {
      min: 18,
      max: 85,
      unit: 'kg',
      note: '成体常用联合包络；雄 45—85 kg、雌通常 18—36 kg；博物馆概览的更高个体极值不作为典型上限',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: ['短而绿色的草与新芽', '阔叶草本和杂类草', '藜科灌木及其他旱季灌木叶'],
    description: '以短绿色草为核心，按季节、地点、性别和繁殖状态选择阔叶草本；草类不足时增加藜科和其他灌木。绿色植物可满足大量水分需求，但有水时仍会饮水。',
  },
  activity: [
    '主要从下午后段、黄昏到夜间取食，炎热白天多在阴影中休息',
    '慢行时以前足、后足与承重推进的尾巴组成五足式步态，快速移动时改用双足同步跳跃',
    '常形成 2—10 只的松散 mob，2—4 只最常见，成员不断加入和离开',
    '多数个体在资源充足时较定居，干旱或零散降雨可促使少数个体远距离移动',
    '雄兽优势主要随体型建立，会以直立展示、前臂抓抱和尾部支撑踢击竞争交配机会',
  ],
  tags: ['澳大利亚特有种', '现生最大有袋类', '干旱区草食者', '五足式慢行', '胚胎滞育', '松散小群', 'IUCN 无危'],
  summary: '澳大利亚内陆最大的现生有袋类：它追随雨后绿色草本，以粗尾推动慢行，并用胚胎滞育把繁殖接力交给不可预测的旱地节律。',
  description:
    '红袋鼠是澳大利亚大陆干旱、半干旱开阔地的特有大型草食者。雄兽通常红褐而体型可达雌兽两倍以上，雌兽多为蓝灰，但地区色差使黑白吻侧斑比毛色更可靠。它在黄昏和夜间选择短绿色草，慢行时尾巴像功能性的第五条腿推进，快速时再以两条后肢同步跳跃。小群成员松散变动；雌兽则可同时照料袋外幼兽、袋内幼兽和休眠胚胎。全球当前仍列 IUCN 无危，但数量随降雨和干旱强烈起伏，商业捕获必须依靠长期航空监测、年度阈值和旱年降额。',
  storySections: [
    {
      key: 'identity-and-dimorphism',
      label: '身份与两性差异',
      title: '不只是一只红色的大袋鼠',
      body: '接受名已从 Macropus rufus 调整为 Osphranter rufus。雄兽通常红褐、肩胸强壮，雌兽通常蓝灰且体重不到大型雄兽一半；地区色差却会打破这套配色。黑白吻侧斑、嘴角浅条、长尖耳、狭长后足和粗壮渐尖尾才是更稳妥的组合线索。',
    },
    {
      key: 'rain-and-forage',
      label: '雨与牧草',
      title: '绿色不是背景，而是人口开关',
      body: '它优先啃食短绿色草和新芽，也会取食阔叶草本，旱季再增加藜科与其他灌木。零散降雨把内陆景观切成短暂的优质斑块；长期干旱则使食物和植物水分一起下降，先压低繁殖，再造成幼兽和大型雄兽的大量死亡。',
    },
    {
      key: 'tail-powered-motion',
      label: '尾部推进',
      title: '慢下来，尾巴才真正成为一条腿',
      body: '快速时两条后肢同步跳跃，尾巴向后平衡；低速取食移动时，前足先落地，粗尾随后承重并向后推地，两只后足一起摆到前方。力板实验显示尾巴的推进力可与四肢合计相当，但动物在解剖上仍只有四条腿。',
    },
    {
      key: 'heat-and-water',
      label: '热与水',
      title: '阴影、夜色和一层前臂唾液',
      body: '红袋鼠比灰袋鼠更能承受开阔地的辐射热，却仍在炎热白天寻找阴影。高热时它会喘息，并把唾液涂到血管丰富的前臂让蒸发带走热量；绿色植物能提供大量水分，但“耐旱”从来不等于不喝水或不怕长期干旱。',
    },
    {
      key: 'reproductive-relay',
      label: '繁殖接力',
      title: '33 天妊娠之后，还有近一年的母乳时间',
      body: '约 750 毫克的新生幼兽在 32—34 天妊娠后爬入育儿袋，却要约 235—240 天才永久出袋，并继续吃奶。条件好时，母兽能同时有袋外幼兽、袋内幼兽和休眠囊胚；不同乳腺甚至能为两个年龄阶段提供不同配方的乳汁。',
    },
    {
      key: 'adaptive-management',
      label: '监测与管理',
      title: '无危，不代表可以脱离雨水谈配额',
      body: '红袋鼠仍广布且数量大，但局地可在旱年骤降。商业管理区用航空调查、年度配额、许可、标签和禁捕区控制利用；真正稳健的管理还必须把调查误差、绿色牧草、种群低阈值、年龄性别结构和未来降雨变化一起带入决定。',
    },
  ],
  keyFacts: [
    '当前接受名是 Osphranter rufus；Macropus rufus 是 IUCN 旧评估沿用的同物异名组合。',
    'IUCN 当前公开记录为 2015 年评估的无危、趋势稳定；2016-2 是发布卷期。',
    '雄兽约 45—85 千克，雌兽通常 18—36 千克；红褐与蓝灰是典型而非绝对配色。',
    '吻侧黑白斑和从嘴角通向耳下的宽浅条，比“毛是不是红色”更可靠。',
    '慢行时粗尾产生的推进力可与前后肢合计相当，快速时才以双足同步跳跃。',
    '妊娠 32—34 天，幼兽约 235—240 天永久出袋；母兽可同时照料两个可见年龄阶段并携带休眠胚胎。',
  ],
  threats: [
    '长期干旱和绿色牧草丧失抑制繁殖并造成强烈局地死亡；气候变化可能放大干旱、热和火灾风险',
    '集约农业、城市扩张、道路与围栏造成边缘生境损失、碎片化和局地死亡',
    '食物不足时家畜、野兔和野山羊加剧草本资源竞争与过度放牧',
    '商业捕获和非商业控制若未随调查误差、低密度阈值与旱年死亡及时调整，会叠加种群压力',
    '无许可杀死和福利规范执行不足造成不可审计的额外死亡',
  ],
  conservationActions: [
    '维持标准化航空调查、公开误差与多年可比的管理区时间序列',
    '按种群低阈值、绿色牧草和干旱条件动态降低或暂停年度捕获配额',
    '保留国家公园和其他禁捕区，并监测捕获区与参照区的年龄、性别、体型和遗传结构',
    '保护原生短草地、低灌丛、阴影树和干旱避难地，减少食物不足期的牲畜与野兔叠加压力',
    '在道路和围栏热点改进通行、可见性与救援响应，减少撞击和缠挂',
    '执行许可、标签、回报、可追溯和人道操作规范，并把未来降雨情景纳入捕获模型',
  ],
  metrics: {
    adultLengthCm: [75, 160],
    adultMassKg: [18, 85],
  },
  featuredStats: [
    {
      key: 'adult-male-mass',
      label: '成体雄兽体重',
      value: '45—85',
      unit: '千克',
      note: '常用范围；博物馆极端个体可更重',
    },
    {
      key: 'adult-female-mass',
      label: '成体雌兽体重',
      value: '18—36',
      unit: '千克',
      note: '通常范围，显示显著性别差异',
    },
    {
      key: 'gestation',
      label: '妊娠期',
      value: '32—34',
      unit: '天',
      note: '短妊娠之后仍有长期袋内发育与哺乳',
    },
    {
      key: 'permanent-pouch-exit',
      label: '永久出袋',
      value: '约 235—240',
      unit: '日龄',
      note: '出袋后仍继续随母并哺乳',
    },
  ],
  media: {
    image: './images/species/red-kangaroo/01-inland-plain-portrait.webp',
    alt: '澳大利亚内陆开阔平原上，一只完整的红褐色成年雄性红袋鼠在晨光中警戒，主体位于画面右侧',
    focalPoint: { x: 0.72, y: 0.58 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/red-kangaroo/02-rainfall-grazing.webp',
        alt: '雨后内陆草地上，一只完整的蓝灰色成年红袋鼠低头啃食仍扎根土壤的短绿色草芽',
        title: '追随雨后的绿色新芽',
        caption: '短绿草是核心食物；阔叶草本与旱季灌木会随地点和季节进入菜单，蓝灰被毛也不能单独判定性别。',
        focalPoint: { x: 0.52, y: 0.58 },
      },
      {
        image: './images/species/red-kangaroo/03-inland-rangeland-habitat.webp',
        alt: '开阔内陆平原由干草、低灌丛、红土排水线与远处疏林组成，一只红袋鼠在右侧远处显得很小',
        title: '雨水切出的旱地镶嵌',
        caption: '红袋鼠利用能提供绿色草本、开阔通道和阴影的草地—灌丛—疏林镶嵌；画面是泛化生境，不是具体地点。',
        focalPoint: { x: 0.66, y: 0.58 },
      },
      {
        image: './images/species/red-kangaroo/04-airborne-hopping.webp',
        alt: '一只红褐色成年红袋鼠在内陆平原完成双足同步跳跃，双后足和粗长尾巴都离开地面',
        title: '快速时，让尾巴留在空中',
        caption: '快速跳跃由两条后肢同步推进，尾巴在空中平衡；只有低速五足式移动时，尾巴才会接地承重与推进。',
        focalPoint: { x: 0.54, y: 0.5 },
      },
      {
        image: './images/species/red-kangaroo/05-female-and-pouch-joey.webp',
        alt: '内陆低灌丛前，一只完整的灰褐色成年雌性红袋鼠站立，单只长毛幼兽只把头和双耳探出育儿袋',
        title: '育儿袋里的漫长发育',
        caption: '约 33 天妊娠只是开始；幼兽约 235—240 日龄才永久出袋，之后仍会随母并继续哺乳。',
        focalPoint: { x: 0.55, y: 0.56 },
      },
      {
        image: './images/species/red-kangaroo/06-ground-transect-monitoring.webp',
        alt: '两名生态工作人员在内陆样线上用双筒望远镜、记录板和一台观测镜远距离记录右侧的一只红袋鼠',
        title: '保持距离的标准化计数',
        caption: '长期调查与公开误差支撑适应性管理；单次地面目击既不能换算全国数量，也不能确认全物种趋势。',
        focalPoint: { x: 0.52, y: 0.58 },
      },
    ],
  },
  sources: RED_KANGAROO_SOURCES,
  featured: true,
  publishedAt: RED_KANGAROO_CONTENT_DATE,
  updatedAt: RED_KANGAROO_CONTENT_DATE,
}
```

## 来源—结论映射

| 主题 | 主要来源 | 支撑范围与边界 |
| --- | --- | --- |
| 当前分类 | [MDD v2.5](https://www.mammaldiversity.org/taxon/1000292/)；[AFD](https://biodiversity.org.au/afd/taxa/7e6e134b-2bc7-43c4-b23a-6e3f420f57ad)；[Celik et al. 2019](https://doi.org/10.1093/zoolinnean/zlz005) | 接受名 *Osphranter rufus*、旧组合 *Macropus rufus*、属级调整与分类链；中文属名只是界面标签 |
| 全球红色名录 | [IUCN 2016-2 assessment](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T40567A21953534.en)；[Crossref metadata](https://api.crossref.org/works/10.2305%2FIUCN.UK.2016-2.RLTS.T40567A21953534.en) | LC、stable、2015-06-15 与发布卷期 2016-2 的区分；评估沿用旧学名 |
| 当前澳大利亚法律背景 | [DCCEEW native wildlife export](https://www.dcceew.gov.au/environment/wildlife-trade/natives)；[DCCEEW nomination decision](https://www.dcceew.gov.au/environment/biodiversity/threatened/nominations/species-not-prioritised-assessment) | 未列联邦受威胁物种、公众提名未优先、商业出口需获批管理计划；不是 IUCN 重评 |
| 综合物种档案 | [Freedman et al. 2020](https://doi.org/10.1093/mspecies/seaa011) | 体型分性别、形态、被毛地区差异、分布、生境、食性、活动、群体、格斗、繁殖和保护综述 |
| 官方识别与生活史 | [Australian Museum](https://australian.museum/learn/animals/mammals/red-kangaroo/) | 当前学名、体型极值、脸纹、生境、食性、约 33 天妊娠、约 235 天出袋；极值不作典型值 |
| 当前州级捕获框架 | [DCCEEW plans index](https://www.dcceew.gov.au/environment/wildlife-trade/commercial/management-plans)；[NSW current management](https://www.environment.nsw.gov.au/topics/animals-and-plants/wildlife-management/kangaroo-management)；[Queensland plan](https://www.dcceew.gov.au/sites/default/files/documents/qld-wildlife-trade-management-plan-export-macropod-2023-2027.pdf) | 管理州、航空调查、配额、许可、禁捕区、旱年与食物动力；NSW 17% 不能外推全国 |
| 五足式慢行 | [O’Connor et al. 2014](https://doi.org/10.1098/rsbl.2014.0381) | 五只红袋鼠力板实验、尾部接触次序、支撑与推进；不能画真实第五肢 |
| 繁殖与育儿袋发育 | [Sharman & Pilton 1964](https://doi.org/10.1111/j.1469-7998.1964.tb05152.x) | 32—34 天妊娠、约 750 mg 新生幼兽、出袋时间、产后交配与滞育；来自经典圈养观察，环境节律另以野外资料限定 |
| 热调节 | [Needham et al. 1974](https://doi.org/10.1016/0300-9629(74)90568-4)；[Roberts et al. 2016](https://doi.org/10.1080/23328940.2016.1163452) | 前臂血流与唾液涂布、阴影选择和跨大陆微气候模型；辐射温度不是气温或致死阈值 |
| 降雨与人口管理 | [Jonzén et al. 2005](https://doi.org/10.1111/j.1365-2656.2005.00915.x)；[Jonzén et al. 2010](https://doi.org/10.1111/j.1365-2656.2009.01601.x)；[Pople et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01344.x) | 降雨、食物、捕获和密度共同影响局地动力；未来降雨情景是模型风险，不是确定预测 |

## 后续维护检查

1. IUCN 条目已陈旧。若发布新评估，应成组复核接受名、code、trend、assessedYear、criteria、范围、威胁和评估理由，不能只换年份。
2. AFD、MDD 与澳大利亚州计划已大量采用 *Osphranter rufus*，但个别现行 PDF 仍写 *Macropus rufus*；这通常是命名更新滞后，不代表两个管理物种。
3. 联邦 2025 “证据不足以确定下降”的优先清单决定不等于种群趋势已被重新评成 stable；若未来进入正式 EPBC 评估，需单独记录结论与日期。
4. 商业管理区数字每年更新且区域会变。若产品未来展示数量，必须同时保存州、管理区、调查年、调查方法和置信区间，并禁止把各州部分范围简单相加成“全球总数”。
5. 六图生成后逐图检查四肢数、后足形状、尾部粗细/接地、吻侧黑白斑、雌雄比例和育儿袋内容；AI 常把 pentapedal 误画成五条腿，也常给袋内幼兽增加多余头部。
6. `Blue Flier` 是雌兽常见蓝灰形态的历史英文别名，不应作为另一个物种、亚种或所有雌兽的固定颜色标签。
