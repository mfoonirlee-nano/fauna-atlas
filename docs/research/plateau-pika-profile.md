# 高原鼠兔完整物种档案研究

- 分类单元：`Ochotona curzoniae` (B. H. Hodgson, 1857)
- 主中文名：高原鼠兔
- 英文名：Plateau Pika
- 研究日期：2026-08-23
- 用途：为 `src/data/species.ts` 的完整物种档案和六张原创图像提供可追溯底稿
- 证据口径：分类与英文名优先采用 Mammal Diversity Database，中文名采用中国官方红色名录，全球受胁状态采用当前 IUCN 记录，生态和管理判断优先采用同行评审的原始研究，政策现状采用中国主管部门资料

## 编辑结论

高原鼠兔是兔形目鼠兔科动物，不是啮齿动物。Mammal Diversity Database 接受名为 `Ochotona curzoniae`，英文主名为 Plateau Pika，并列 Black-lipped Pika 为其他常用名。中国生态环境部与中国科学院发布的《中国生物多样性红色名录·脊椎动物卷（2020）》使用中文名“高原鼠兔”，因此产品主名应保持“高原鼠兔”，“黑唇鼠兔”和 Black-lipped Pika 进入别名数组。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001154/) [中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

当前 IUCN 全球等级为无危 `LC`，趋势为下降。2019 条目是 2016 年评估的修订版，只更新了分布图，所以仓库 `assessedYear` 应填 `2016`，不能填修订发布年 `2019`。IUCN 没有掌握全范围总体数量，下降趋势来自对大范围毒杀造成下降的推断。档案不能把“无危”改写成“数量稳定”，也不能添加全球成熟个体数。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)

把高原鼠兔称为“青藏高原关键种”有实证基础，但必须保留边界。支持证据包括：一些穴居鸟和蜥蜴利用洞道，未毒杀样地的鸟类丰富度和数量较高，藏狐在一处区域高度依赖高原鼠兔，活跃洞道附近的入渗率高于洞道坍塌的毒杀地。反面与限制同样重要：跨样地研究不是全部随机的前后对照；春季毒杀后的当年秋季鸟类调查未必检测到整体鸟量差异；植物、土壤和牧草结果随密度、植被、放牧史、季节和尺度改变。因此“关键种”适合作为综合生态标签，不是法律保护等级，也不表示任意密度都产生净收益。[Smith and Foggin 1999](https://doi.org/10.1111/j.1469-1795.1999.tb00069.x) [Lai and Smith 2003](https://doi.org/10.1023/A:1024161409110) [Arthur et al. 2008](https://doi.org/10.1016/j.biocon.2008.05.010) [Harris et al. 2014](https://doi.org/10.1644/14-MAMM-A-021) [Wilson and Smith 2015](https://doi.org/10.1007/s13280-014-0568-x)

灭鼠争议不能写成二选一。高密度高原鼠兔会取食、剪切植物并增加裸地，部分研究记录到植被盖度、草本生物量或牧草质量下降。另一方面，高密度常出现在低矮、稀疏、土壤贫瘠或长期重牧的草地，相关性不能证明鼠兔是退化的初始原因。实地控制可在一周内显著降低鼠兔数量，但部分种群在一个繁殖季内恢复，且研究没有稳定检出季末牧草收益。当前最稳妥的产品表述是：先按地点同时监测鼠兔、有效洞口、植被、土壤、牲畜和依赖洞道的物种，再决定是否干预；现有证据不支持不分密度和生境的全面毒杀。[Pech et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01287.x) [Harris et al. 2015](https://doi.org/10.1371/journal.pone.0132897) [Wang et al. 2026](https://doi.org/10.1016/j.isci.2026.115159) [国家林业和草原局 2025 年昌都调查](https://www.forestry.gov.cn/lyj/1/cybhdt/20250808/637325.html)

## 名称与分类口径

### 接受名与常用名

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| `scientificName` | `Ochotona curzoniae` | MDD 当前接受名 |
| `names.zh` | 高原鼠兔 | 中国官方红色名录和仓库 TODO 使用的主名 |
| `names.en` | Plateau Pika | MDD 英文主名 |
| `aliases` | 黑唇鼠兔；Black-lipped Pika | 对应黑色鼻端和唇缘的常用名；黑唇不是可靠的单一鉴定特征 |

MDD 把 `seiana` 作为异名纳入，指出其模式产地可能被错误标注；该处理依据鼠兔属 `Ochotona` 亚属的多位点系统发育研究。档案没有展示异名史的字段，不必把 `seiana` 或 `melanostoma` 放入公众别名。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001154/) [Lissovsky, Yatsentyuk and Koju 2018](https://doi.org/10.1111/zsc.12325)

命名年份存在来源差异。MDD 根据原始出版物使用 1857，IUCN 记录写作 Hodgson, 1858。仓库 `Species` schema 不存命名人和年份，因此该差异不会进入数据对象；若未来展示命名信息，应另做文献学核验，不要静默混用。[Hodgson 1857 original description](https://www.biodiversitylibrary.org/page/40262867) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001154/)

### 分类图谱

| 分类阶元 | 学名 | 中文名 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Mammalia | 哺乳纲 |
| 目 | Lagomorpha | 兔形目 |
| 科 | Ochotonidae | 鼠兔科 |
| 属 | Ochotona | 鼠兔属 |
| 种 | Ochotona curzoniae | 高原鼠兔 |

本物种会给分类图谱新增兔形目、鼠兔科和鼠兔属三个分类单元。图谱和正文不得使用“高原啮齿动物”“害鼠属于啮齿目”等错误表达。鼠兔与兔、野兔同属兔形目；其上颌门齿结构和分类历史均不同于啮齿目。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001154/)

## 保护状态

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| system | IUCN Red List | 仓库固定值 |
| code | `LC` | 当前全球等级为无危 |
| trend | `decreasing` | IUCN 当前趋势为下降 |
| assessedYear | `2016` | 2019 记录是 2016 评估的修订版 |
| criteria | 不填 | 无危条目不需要伪造受胁准则 |
| assessor | IUCN | 由现有 helper 统一生成 |

完整引用为 Smith and Liu 2019, *Ochotona curzoniae* (amended version of 2016 assessment), The IUCN Red List of Threatened Species 2019, e.T41258A160699229。IUCN 给出的降级依据不是标准化全范围普查，而是对广泛控制造成下降的推断。页面同时记录本物种分布广、进入多个保护地，因而仍评为无危。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)

中国《生物多样性红色名录·脊椎动物卷（2020）》也把高原鼠兔列为无危 `LC`。这是中国区域评估，不能替代或解释 IUCN 的全球趋势字段。该官方名录没有把它标为中国特有种；档案也不应虚构国家重点保护野生动物等级。[生态环境部与中国科学院公告](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/t20230522_1030745.html) [名录 PDF](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

## 分布、海拔与地图口径

### 全球范围

IUCN 记录分布贯穿青藏高原，从尼泊尔北部和印度锡金向北进入中国西藏，并延伸到四川西部、青海、新疆南部和甘肃。国家字段为中国、印度和尼泊尔，海拔范围为 3,000 至 5,000 米，估算分布范围 `EOO` 为 2,742,910 平方千米。EOO 是范围几何指标，不是实际占用面积，也不能推算数量。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)

MDD 的概述同样覆盖青藏高原及邻近甘肃、青海、四川、锡金和尼泊尔东部，但结构化国家字段给尼泊尔加了问号。建议产品 `countries` 采用 IUCN 明确列出的三国，并在 `range` 文字里保留 MDD 对尼泊尔记录的分类或分布不确定标记。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001154/)

建议 `endemicTo: ['青藏高原及其毗邻高地']`。这里的“特有”指自然分布局限于一个跨国高原地理单元，不是“中国特有种”。`center: { lat: 33.5, lng: 91.5 }` 只用于地图初始焦点，不代表种群密度中心或精确几何中心。

### 建议区域数组

1. 青藏高原中部与西部高寒草地
2. 青海、甘肃南部和四川西部高寒草地
3. 西藏与新疆南部高原地带
4. 印度锡金和尼泊尔北部毗邻高地

不要把祁连山、三江源、羌塘或某个保护区写成全物种唯一核心区。它们可以在故事或保护行动中作为实例，但 `regions` 需要覆盖三国范围。

## 栖息地

IUCN 把高原鼠兔列为陆生、掘洞生活的植食动物，适生类型包括温带草地和寒冷荒漠，文字概括为高寒荒漠、草原和草甸。仓库所有 habitat 的 `realm` 均应为 `terrestrial`。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)

1. **高寒草甸**：低矮莎草、禾草和杂类草提供食物，土壤允许构筑多入口洞道。建议标为 `isPrimary`。
2. **高寒草原**：植被更疏、风力更强，鼠兔仍依赖开阔视野、可挖掘土层和洞道避险。
3. **高寒荒漠与退化草地镶嵌**：可利用草地与小片裸地的边缘。能够出现于退化地不等于它只生活在严重退化草场，也不证明它造成了原始退化。

一个 2 公顷高寒草甸研究区的空间分析显示，鼠兔活动与莎草草甸和土壤洼地之间的边缘联系最强，洞口数量的解释力较小，单独的莎草面积也不是强预测因子。该结果说明草地、洞道和开阔边缘形成资源镶嵌，不能把一个地点的边缘偏好写成全范围硬规则。[Paruchuri et al. 2019](https://doi.org/10.1093/jmammal/gyz085)

图像必须表现低矮、开阔、可挖掘的高原草地。不要把主体放进乱石坡、巨石堆或高山碎石缝，那更像岩栖鼠兔的典型场景。洞口应小而自然，周围可以有少量新土和裸斑，不要画成大型土丘、鼢鼠丘或灾难化“荒漠化现场”。

## 形态、色型与稳定测量值

### 外形组合

高原鼠兔体型短粗，颈部不显，四肢短，耳朵短而圆，尾极短且外观不明显。鼻端和唇缘通常呈深褐至黑色，耳后可见锈褐色斑，耳缘较浅。背部以沙褐、黄褐或偏红褐为主，腹面淡黄白、污白至浅灰白。印度动物调查局的官方物种检索把“沙褐背部、污白腹面、锈色耳斑、黑色鼻端和唇”列作识别组合。[Zoological Survey of India, Fauna of Sikkim](https://faunaofindia.nic.in/PDFVolumes/sfs/044/index.pdf)

季节和个体会改变色调。冬毛较长、较软，整体可更浅、更偏沙黄或灰白；夏毛较短，背色可更暖、更深。黑色唇缘并非每只个体都同样醒目，也不能单凭它排除拉达克鼠兔或其他近似种。图像要同时控制体型、短圆耳、无显尾、耳后锈斑、浅耳缘、开阔草地和素材来源。[Handbook of the Mammals of the World species account](https://www.asau.ru/files/pdf/1501160.pdf) [Mammal Diversity Database reference images](https://www.mammaldiversity.org/taxon/1001154/)

IUCN 给出的体长为 14.0 至 19.2 厘米。海北长期生活史研究的 287 个成年记录均值约 149 克；体重范围受年龄、季节、地点和判龄影响，产品只展示“成年约 150 克”，不把单一种群的极值写成全球范围。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en) [Nie, Liu and Chen 2022](https://doi.org/10.1002/ece3.8548)

| 字段 | 建议值 | 能否进入 `metrics` | 边界 |
| --- | --- | --- | --- |
| 体长 | 14.0 至 19.2 cm | 是，`adultLengthCm: [14, 19.2]` | IUCN 使用 body length；不进一步解释为头体长或全长 |
| 成年体重 | 典型约 150 g | 否，`adultMassKg` 留空 | 海北长期研究的成年均值约 149 g，不提供全球范围 |
| 海拔 | 3,000 至 5,000 m | 是，`elevationM: [3000, 5000]` | IUCN 全球记录范围 |
| 寿命 | 不录入 | 否 | 现有值来自单个长期研究种群，不能当全球稳定范围 |
| 全球成熟个体数 | 不录入 | 否 | IUCN 明确缺少总体数量资料 |

图像拒绝项包括长鼠尾、长兔耳、仓鼠颊囊、突出的巨大门齿、旱獭体型、豚鼠或水豚轮廓、家兔花斑、足趾或肢体数量错误。高原鼠兔的“黑唇”不能扩展成整张黑脸、黑眼罩或熊猫式斑块。

## 食性与越冬

高原鼠兔是植食动物。草、莎草、杂类草和豆科植物构成基本食谱，地下根部也可在资源不足时被利用。三类草甸的冬季胃内容物镜检显示，食物组成随植被可利用量和质量改变，食物短缺时采用的植物种类更宽。具体植物排序和百分比属于采样地点，不能写成全球固定菜单。[Liu et al. 2009](https://www.mammal.cn/EN/Y2009/V29/I1/12)

2023 年多草甸研究把食物质量与鼠兔密度、生活史联系起来，发现高蛋白植物在高放牧水平草地相对丰富，高原鼠兔偏好高蛋白食物。该结果支持“食物质量和放牧共同影响密度”，不支持“牦牛一定帮助鼠兔”或“鼠兔与牲畜从不竞争”。2025 年粪便饮食研究进一步显示，随草地退化加重，鼠兔和牦牛的食物重叠增加，竞争强度应写成条件性结果。[Wu et al. 2023](https://doi.org/10.1093/jmammal/gyad063) [Li et al. 2025](https://doi.org/10.1016/j.gecco.2024.e03373)

高原鼠兔不冬眠。历时 13 年的 PNAS 研究发现，它们在冬季降低活动、体温和能量消耗；部分地点的个体还会吃牦牛粪，研究通过直接观察和胃内容物中的牦牛 DNA 支持这一行为。牦牛粪属于部分种群的补充资源，不应把食性类型改成杂食，也不能画成所有个体的主要食物。[Speakman et al. 2021](https://doi.org/10.1073/pnas.2100707118) [中国科学院动物研究所研究说明](https://ioz.cas.cn/gb2018/xwdt/kyjz/202107/t20210723_6147307.html)

建议 `foods` 使用功能类群，不把单个地点的植物学名堆进产品数组：

- 高寒草甸的禾草与莎草
- 高山杂类草和豆科植物
- 叶、茎和嫩芽
- 根及其他地下植物部分
- 部分种群冬季利用的牦牛粪补充资源

## 活动、洞道与社会行为

高原鼠兔以昼行为主，不冬眠。2023 年野外相机研究记录到暖季双峰、冷季单峰的日活动模式，并发现温度等天气条件会改变活动时间。这个结果适合支持“白昼活动并随季节和天气调整”，不应把某个小时段写成全物种固定作息。[Zhou et al. 2023](https://doi.org/10.3390/ani13101689)

它们在多入口洞道周围活动。洞道承担避开捕食者、筑巢、越冬和维持家族活动范围的功能。洞口数量不是个体数量：一只鼠兔会使用多个入口，一套洞道也可由多个家族成员使用。管理和图像文案不能把“100 个有效洞口”直接换算成“100 只鼠兔”。[Smith and Wang 1991](https://doi.org/10.2307/1382094) [Pech et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01287.x)

青海湖附近标记种群显示，家族占据相对独立的活动范围和多入口洞道；部分家族为一雄一雌，另一些为一雄与两只或更多雌性。繁殖季出生的幼体留在出生范围，家族内互动以亲和为主，家族间具有领地冲突。2022 年对一个连续种群两年的研究同样记录到每个家族一至五只成体和多种配偶制度。产品可写“社会性家族群、家族间领地性强”，不要写成严格终生单配，也不要根据一张家庭图判断性别、亲子或配偶关系。[Smith and Wang 1991](https://doi.org/10.2307/1382094) [Smith and Dobson 2022](https://doi.org/10.1016/j.anbehav.2021.11.014)

## 繁殖与生活史

IUCN 旧汇总写繁殖季可从 4 月延续到 8 月，每年 3 至 5 胎、每胎 2 至 8 仔，并写幼体可在出生当年繁殖。较新的长期研究和海拔比较显示明显的地点差异，不能把这组旧值当成全球定律。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)

海北种群长期标记与追踪记录中，96% 的繁殖发生于 4 至 6 月，典型每年两胎；窝仔数 1 至 7，平均约 4.6；研究中从幼体持续追踪的雌性没有在出生当年繁殖，首次繁殖平均约 12 个月。该种群平均寿命约 16.3 个月，最长记录约 2.55 年。所有数值都属于一处研究种群，不应进入全球 `lifespanYears`。[Nie, Liu and Chen 2022](https://doi.org/10.1002/ece3.8548)

三个海拔种群的比较进一步说明地理变化：较低海拔种群繁殖季更长、胎数和平均窝仔数较高，高海拔种群的生活史更慢。产品正文适合写“春夏繁殖，产仔数和繁殖次数随海拔和地点改变”，不适合用单个繁殖数字做 featured stat。[Qu et al. 2019](https://doi.org/10.1186/s12983-019-0329-6)

## 生态作用与“关键种”证据边界

### 捕食者的食物基础

高原鼠兔是多种高原食肉动物和猛禽的猎物。藏狐研究提供了最强的局部证据之一：在一个研究区域，藏狐出现概率在缺少鼠兔处接近零，绝大多数粪样含鼠兔成分。该研究支持“藏狐在该区域高度依赖高原鼠兔”，不能外推成所有捕食者在整个青藏高原都专食鼠兔。[Harris et al. 2014](https://doi.org/10.1644/14-MAMM-A-021)

### 洞道为其他物种提供结构

未毒杀和毒杀样地的标准化鸟类调查显示，未毒杀样地的鸟类丰富度和数量较高，尤其涉及利用洞道筑巢的雪雀和捕食者。研究为关键种假说提供支持，但样地比较并非随机施药的严格前后实验，毒杀历史也可能与其他环境条件共同变化。[Lai and Smith 2003](https://doi.org/10.1023/A:1024161409110)

Naqu 的后续研究得到更细的结果。春季控制降低鼠兔超过 90%，当年秋季鼠兔已恢复，整体鸟类数量没有检出处理差异；雪雀仍与洞口密度呈正相关。该结果不否定洞道关系，却说明毒杀后洞道坍塌、鸟类响应和鼠兔恢复存在不同时间尺度，也说明放牧会混入影响。[Arthur et al. 2008](https://doi.org/10.1016/j.biocon.2008.05.010)

### 水分入渗

Wilson 和 Smith 在多个地点完成 54 次入渗试验。活跃洞口附近的入渗率最高，有鼠兔但不贴近洞口的草地次之，毒杀后洞道坍塌的草地最低。研究直接测量的是点位入渗率，没有直接测量坡面径流、侵蚀、河流洪峰或下游供水。档案可以写“洞道可提高局地土壤入渗”，不能写“高原鼠兔防止洪水”或给出全高原固定百分比。[Wilson and Smith 2015](https://doi.org/10.1007/s13280-014-0568-x)

### 植物、土壤与密度依赖

洞口周围的取食、剪切、排泄、掘土和新旧裸斑会改变植物竞争和土壤条件。单洞尺度研究在中等洞密度草甸记录到洞口附近可利用养分和植物生物量差异；剪切实验记录到植物高度下降、盖度和物种丰富度上升、总生物量无显著变化，并出现禾草下降、杂类草上升。结果同时包含多样性收益和牧草质量代价。[Sun et al. 2016](https://doi.org/10.1016/j.ecoleng.2015.12.034) [Zhang et al. 2020](https://doi.org/10.1016/j.rama.2020.01.010)

一个高寒草甸的四个洞口密度等级研究发现，植物盖度随干扰增强下降，丰富度、均匀度和不同功能群的生物量呈非线性变化。研究使用每 625 平方米 8、19、27 和 39 个活跃洞口作为地点内分级。洞口计数方法、草地类型和放牧背景会改变对应关系，这四级不能变成跨区域统一控制阈值。[Pang and Guo 2018](https://doi.org/10.1111/grs.12199)

### 关键种标签的允许表达

允许：

- 高原鼠兔常被视为青藏高原高寒草地的关键种和生态系统工程者。
- 洞道、掘土、取食和捕食关系会影响鸟类、捕食者、植物、土壤和水分入渗。
- 多条作用路径有原始研究支持，但效应方向和强度受密度、地点、季节、放牧史及尺度影响。

不允许：

- 高原鼠兔在任何密度下都能改善草原。
- 消灭高原鼠兔必然造成高原生态系统崩溃。
- 单张洞口照片可以证明土壤肥力、入渗率或生物多样性上升。
- “关键种”是中国法定保护等级。

2023 年《Nature Climate Change》研究把高原鼠兔与两种利用其洞道的雪雀共同建模，发现三者在部分区域的气候风险格局相似，并提出高原鼠兔可作为这组共演化物种的气候保护伞。该结论针对模型、采样种群和两种雪雀，不能扩展成它能代表青藏高原所有生物。[Chen et al. 2023](https://doi.org/10.1038/s41558-023-01772-8) [中国科学院研究说明](https://english.cas.cn/newsroom/news--archives/2023/research-news/202308/t20230814_1127785.shtml)

## 灭鼠政策、牧业冲突与证据边界

### 为什么会被控制

高原鼠兔会吃草、剪切高大植物、挖洞并产生裸斑。高密度群体可能减少牲畜可用牧草、增加牲畜踩洞风险，并与退化草地同时出现。中国草原管理长期把它纳入有害生物防控。2025 年国家林草主管部门仍在部署草原鼠害监测和风险区划，说明“控制政策已经停止”不符合现实。[国家林业和草原局 2025 年昌都调查](https://www.forestry.gov.cn/lyj/1/cybhdt/20250808/637325.html) [全国主要草原有害生物 2025 年部署](https://www.forestry.gov.cn/c/www/slyhswfz/621544.jhtml)

### 短期杀灭不等于长期修复

Naqu 配对样地研究中，春季投药一周内数量下降 84% 至 97%，但处理与未处理种群到秋季已无明显差异；围栏内季末站立植物生物量没有因鼠兔控制而增加，全年牲畜放牧区的生物量反而低于以冬季放牧为主的围栏内区域。研究支持“控制能短期减量，但恢复快，牧草收益未被检出”，不支持“任何毒杀都永远无效”。研究无法区分原地繁殖和外部迁入对恢复的贡献。[Pech et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01287.x)

青海 12 处围栏与鼠兔减量实验跟踪四年，记录到裸地、侵蚀指标和植被盖度的适度改善，但各植物物种的生产力反应不一致，禁牧也没有提高所有适口多年生禾草的年生产。研究地点按初始条件选择，并非从区域内随机抽取。它说明局地减量可出现物理场地改善，也说明不能用单一生物量指标概括恢复。[Harris et al. 2015](https://doi.org/10.1371/journal.pone.0132897)

### 长期、多地点资料仍有边界

2026 年一项研究汇总青海 22 个生态区、1,460 个观测单元和 2005 至 2018 年资料，报告单独控制高原鼠兔没有提高适口牧草生物量，回避型植物增加，并通过结构方程得到对草地稳定性的弱间接负效应。结果不支持把鼠兔控制当成通用单一修复工具。边界是：监测网络主要位于青海东南部，模型只解释 13% 的稳定性变化，研究没有现场直接测量鼠兔食谱，也没有量化地方执行差异。[Wang et al. 2026](https://doi.org/10.1016/j.isci.2026.115159)

### 可落入档案的管理判断

1. 鼠兔数量、洞口、裸地和低矮植被常同时变化，单次相关调查不能确定因果起点。
2. 高密度可能造成牧草和裸地成本，低至中等密度可能维持洞道、捕食和微地形功能。
3. 毒杀可迅速减量，但补充繁殖和迁入会缩短效果；必须跟踪至少完整繁殖季和越冬期。
4. 管理评估要同时记录适口与不适口植物、牲畜利用、土壤、捕食者、穴居鸟和非目标死亡。
5. 先处理过牧、植被恢复和土壤条件，再决定是否对局部高风险斑块实施定点干预。
6. 任何阈值必须绑定调查方法、草地类型、季节和管理目标；不能把单篇论文的洞口数直接全国套用。
7. 产品不展示毒饵、尸体或具体施药方式，避免把争议政策包装成无条件保护行动。

## 威胁

1. **大范围毒杀和持续控制**：IUCN 把迫害或控制列为影响多数分布范围的持续威胁，并据此推断全球趋势下降。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)
2. **过度放牧与草地退化**：牲畜压力会缩短植被、改变食物质量和土壤条件，也会提高鼠兔与牲畜食物重叠。鼠兔可能加速已经退化的局部斑块，但不能把初始原因全归给鼠兔。[Pech et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01287.x) [Li et al. 2025](https://doi.org/10.1016/j.gecco.2024.e03373)
3. **非目标生态影响**：毒杀会削减捕食者食物、让洞道逐渐坍塌，并可能影响利用洞道的鸟类。具体影响依赖毒剂、施用范围、洞道持续时间和群落背景。[Lai and Smith 2003](https://doi.org/10.1023/A:1024161409110) [Arthur et al. 2008](https://doi.org/10.1016/j.biocon.2008.05.010)
4. **气候变化**：种群基因组和生态位模型提示西南部部分种群未来适应风险较高，东北部可能保留气候避难所。它是模型预测，不应与 IUCN 当前下降原因混为一谈。[Chen et al. 2023](https://doi.org/10.1038/s41558-023-01772-8)
5. **监测不足**：IUCN 没有全范围总体数量，洞口计数、目视计数和相机估算又不能直接互换，容易让管理目标建立在不一致基线上。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)

## 保护与管理行动

1. 按 IUCN 建议收缩不分地点的灭绝式控制，保留代表性鼠兔种群、完整洞道系统和捕食者食物基础。[IUCN Red List assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)
2. 统一目视个体、有效洞口、占域、植被盖度、生物量和裸地的调查协议，明确每个指标不能直接互换。[国家林业和草原局 2025 年昌都调查](https://www.forestry.gov.cn/lyj/1/cybhdt/20250808/637325.html)
3. 在干预前后设置可比对照并跨越繁殖季、越冬期和多年尺度，监测数量恢复、牧草组成、土壤入渗、穴居鸟、捕食者和非目标死亡。[Pech et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01287.x) [Wang et al. 2026](https://doi.org/10.1016/j.isci.2026.115159)
4. 优先调整牲畜密度、季节轮牧和退化草地恢复，避免把鼠兔当作唯一退化驱动。[Harris et al. 2015](https://doi.org/10.1371/journal.pone.0132897)
5. 若局部风险评估确认需要减量，采用有边界、有期限、可复核的定点方案，保留生态避难斑块并设置停止条件；不要采用全景观清除目标。
6. 在雪雀繁殖地、藏狐重要食物区和水土敏感区提高干预门槛，先查清洞道依赖和捕食关系。[Lai and Smith 2003](https://doi.org/10.1023/A:1024161409110) [Harris et al. 2014](https://doi.org/10.1644/14-MAMM-A-021)
7. 把气候适应、连通性和东北部潜在避难所纳入长期规划，同时复核模型预测而不是直接划定保护地。[Chen et al. 2023](https://doi.org/10.1038/s41558-023-01772-8)
8. 面向公众明确它是兔形目原生动物，解释关键种效应和牧业成本可以同时成立，减少“害鼠”或“无害萌宠”两种单一叙事。

## 可稳定展示的指标

| 展示项 | 建议值 | 来源与限定 |
| --- | --- | --- |
| IUCN | 无危，下降 | 2016 评估，2019 修订仅更新分布图；下降由毒杀影响推断 |
| 体长 | 14.0 至 19.2 cm | IUCN 物种记录 |
| 成年体重 | 约 150 g | 海北长期研究的成年均值约 149 g，不作为全球范围 |
| 海拔 | 3,000 至 5,000 m | IUCN 全球分布范围 |

`featuredStats` 建议只保留这四项。不要加入固定胎数、寿命、固定家庭大小、固定日活动时段、全国数量或洞口到个体的换算值。

## 六个故事章节草稿

### 1. 名字像鼠，分类却属于兔形目

高原鼠兔身形短粗，短圆耳贴近头部，尾巴几乎看不见。鼻端和唇缘常呈黑色，耳后有锈褐斑，沙褐背毛向浅色腹部过渡。名字中的“鼠”描述小体型，不代表分类；它与兔和野兔同属兔形目。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1001154/) [Zoological Survey of India, Fauna of Sikkim](https://faunaofindia.nic.in/PDFVolumes/sfs/044/index.pdf)

### 2. 草甸边缘连着一套家族洞道

高原鼠兔在低矮草甸、裸地小洼斑和洞口交错处活动。一个家族使用多入口洞道，洞内用于避险、筑巢和越冬，地面则提供食物和视野。洞口数不能直接等于个体数，家族也不只有一种配偶制度。[Paruchuri et al. 2019](https://doi.org/10.1093/jmammal/gyz085) [Smith and Wang 1991](https://doi.org/10.2307/1382094)

### 3. 不冬眠，用更低开支熬过寒季

冬天的高原鼠兔仍会出洞，却降低活动、体温和能量消耗。部分与牦牛共存的种群还会吃牦牛粪补充资源，研究同时获得直接影像和胃内容物 DNA 证据。这是地点相关的越冬策略，不是把植食动物改写成杂食动物。[Speakman et al. 2021](https://doi.org/10.1073/pnas.2100707118)

### 4. 捕食者和穴居鸟沿着洞道相连

高原鼠兔为藏狐等捕食者提供食物，废弃或活跃洞道也可供雪雀等鸟类利用。未毒杀样地常记录到更多鸟类，但毒杀后的短期调查并非每次都出现整体鸟量差异。食物网、洞道寿命和观察时间共同决定结果。[Lai and Smith 2003](https://doi.org/10.1023/A:1024161409110) [Arthur et al. 2008](https://doi.org/10.1016/j.biocon.2008.05.010) [Harris et al. 2014](https://doi.org/10.1644/14-MAMM-A-021)

### 5. 生态工程有收益，也有密度代价

掘洞能提高局地水分入渗，排泄、翻土和剪切会制造植物与土壤镶嵌。高密度时，取食和裸斑也可能降低盖度或牧草质量。没有一个洞口阈值能脱离草地类型、放牧史、季节和计数方法，直接套用到整个青藏高原。[Wilson and Smith 2015](https://doi.org/10.1007/s13280-014-0568-x) [Pang and Guo 2018](https://doi.org/10.1111/grs.12199) [Zhang et al. 2020](https://doi.org/10.1016/j.rama.2020.01.010)

### 6. 从全面灭除转向分区、长期监测

投药能在数天内降低数量，部分种群却在当年秋季恢复，牧草收益也不稳定。长期资料同样没有支持一种措施适用于所有地点。有效管理需要先测鼠兔、植被、牲畜和依赖洞道的物种，再做分区决策，并为任何干预设置对照、期限和停止条件。[Pech et al. 2007](https://doi.org/10.1111/j.1365-2664.2007.01287.x) [Wang et al. 2026](https://doi.org/10.1016/j.isci.2026.115159) [国家林业和草原局 2025 年昌都调查](https://www.forestry.gov.cn/lyj/1/cybhdt/20250808/637325.html)

## 关键事实草稿

1. 高原鼠兔属于兔形目鼠兔科，不属于啮齿目。
2. MDD 接受名为 `Ochotona curzoniae`，英文主名 Plateau Pika，Black-lipped Pika 为常用名。
3. 中国官方红色名录使用“高原鼠兔”，并把中国区域等级评为无危。
4. 当前 IUCN 全球等级为无危、趋势下降；2019 记录是 2016 评估的修订版本。
5. IUCN 明确缺少全范围总体数量，下降趋势主要从广泛毒杀推断。
6. 分布覆盖中国、印度和尼泊尔的青藏高原及毗邻高地，IUCN 海拔范围为 3,000 至 5,000 米。
7. 体长约 14.0 至 19.2 厘米，尾巴外观不明显，成年体重典型约 150 克。
8. 鼻端和唇缘通常较黑，耳后有锈色斑，背部沙褐至红褐，腹面淡黄白至浅灰白。
9. 它是昼行、不冬眠的植食动物，食谱随地点、季节和草地状况改变。
10. 部分种群会在冬季利用牦牛粪补充资源，这一行为有直接观察和 DNA 证据。
11. 家族使用多入口洞道，家族大小和配偶制度会变化，不能概括成严格单配。
12. 高原鼠兔常被视为青藏高原关键种，但植物、土壤、牧草和鸟类效应受密度与环境制约。
13. 毒杀可迅速降低数量，部分种群一个繁殖季内恢复，长期牧草收益并不稳定。
14. “关键种”和“有牧业冲突”可以同时成立，管理必须基于分区和长期对照监测。

## 六个图像场景与科学约束

统一资产规格：1536 × 1024 像素、横向 3:2、自然历史纪录片质感、写实摄影式科学重建。源文件使用 `*-source.png`，运行时文件使用同名 `.webp`。六图均不得出现文字、水印、logo、品牌、经纬度或可识别真实项目标牌。

| 序号与文件名 | 动物和人物计数 | 构图与可见特征 | 允许表达 | 证据边界 |
| --- | --- | --- | --- | --- |
| `01-alpine-meadow-portrait` | 恰好 1 只成年高原鼠兔 | 主体位于右侧三分之一，低机位，靠近小型自然洞口；左侧保留标题负空间。短圆耳、无显尾、沙褐背、浅腹、黑鼻唇、耳后锈斑 | 高寒草甸、体型和洞居生活 | 单图不证明种群密度、草地健康或关键种效应 |
| `02-black-lip-and-ear-markings` | 恰好 1 只成年高原鼠兔 | 侧前方三分之四近景，显示短圆浅缘耳、锈色耳后斑、黑色鼻端和唇缘、短肢与爪足 | 形态识别组合和兔形目轮廓 | 黑唇不是单一可靠鉴定点；不声称凭图排除所有近似鼠兔 |
| `03-burrow-meadow-mosaic` | 恰好 1 只远处鼠兔 | 生境占画面约 90%，低矮莎草草甸、小片裸地、数个大小自然的洞口；鼠兔只作比例尺 | 多入口洞道与草甸边缘镶嵌 | 洞口数不等于个体数；不画巨大土丘，不把草地画成全面荒漠化 |
| `04-forb-and-grass-feeding` | 恰好 1 只成年高原鼠兔 | 洞口附近低头吃新鲜禾草、莎草或杂类草；前足自然着地，食物保持小尺度 | 植食和季节性草地菜单 | 不画干草堆，不指定植物物种，不画牦牛粪作为典型主食 |
| `05-family-at-shared-burrow` | 恰好 1 只成体加 3 只较小幼体 | 四只位于同一多入口洞道附近，保持自然警戒与取食姿势，幼体体型明显较小 | 社会性家族群和幼体留在出生范围 | 不判断成体性别、实际亲子、配偶关系或严格单配；不要增加第五只 |
| `06-nonlethal-density-monitoring` | 恰好 2 名研究人员加 1 只远处鼠兔 | 两人使用样方框、记录板和手持计数器统计有效洞口与植被盖度；远处仅一只鼠兔，人物不接触动物 | 分区监测、植被与洞口联合调查 | 不出现毒饵、尸体、捕兽夹、注射、抓握、项目品牌或真实坐标 |

### 统一外形提示词

每张提示词都应重复以下约束，不能只依赖第一张图建立角色：

- small stocky plateau pika, a lagomorph, not a rodent
- short neck, short limbs, rounded short ears with pale margins
- inconspicuous tail, sandy brown to warm ochre dorsal coat
- pale yellow-gray to gray-white belly
- small rusty patch behind each ear
- dark brown to black nose tip and lip margins, not a fully black face
- natural quadrupedal stance, short clawed feet
- open low alpine meadow with diggable soil at high elevation

### 统一负面约束

- no long rat tail
- no long rabbit ears
- no guinea pig, hamster, marmot, capybara or domestic rabbit anatomy
- no cheek pouches, oversized exposed incisors or human-like hands
- no rocky talus as the primary habitat
- no piebald domestic-rabbit markings
- no extra animals, duplicate heads, extra limbs, fused bodies or incorrect digits
- no dramatic disaster landscape unless the scene explicitly requires it
- no anthropomorphic smile, waving, clothing or staged pet pose
- no text, watermark, logo, poison, corpse, trap or animal handling

### 图像静态验收

1. 六张源 PNG 和六张运行时 WebP 均为 1536 × 1024，横向 3:2。
2. 逐图人工计数动物和人物，与表格精确一致。
3. 逐图检查耳长、尾部、黑唇范围、耳后斑、四肢和物种轮廓。
4. 封面左侧必须保留可读标题负空间，焦点建议 `{ x: 0.72, y: 0.56 }`。
5. 洞口保持小型、自然且尺度一致；不能以洞口数暗示个体数。
6. 家族图只支持“同一洞道附近出现成体与幼体”，图说不得添加性别或亲缘判断。
7. 监测图只表现非致死性调查，不表现具体控制技术。
8. alt、title、caption 与实际计数、动作和证据边界逐项一致。

## 主要来源清单

### 分类、命名、保护和分布

- [Mammal Diversity Database: Ochotona curzoniae](https://www.mammaldiversity.org/taxon/1001154/)
- [Hodgson 1857 original description](https://www.biodiversitylibrary.org/page/40262867)
- [Lissovsky, Yatsentyuk and Koju 2018: Multilocus phylogeny and taxonomy](https://doi.org/10.1111/zsc.12325)
- [IUCN Red List: amended 2019 version of the 2016 assessment](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en)
- [生态环境部、中国科学院：中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)
- [Zoological Survey of India: Fauna of Sikkim](https://faunaofindia.nic.in/PDFVolumes/sfs/044/index.pdf)

### 生活史、食性和行为

- [Smith and Wang 1991: Social relationships of adult black-lipped pikas](https://doi.org/10.2307/1382094)
- [Smith and Dobson 2022: Social complexity in plateau pikas](https://doi.org/10.1016/j.anbehav.2021.11.014)
- [Nie, Liu and Chen 2022: Life-history traits and fitness](https://doi.org/10.1002/ece3.8548)
- [Qu et al. 2019: Altitude-linked population divergence](https://doi.org/10.1186/s12983-019-0329-6)
- [Paruchuri et al. 2019: Microhabitat use](https://doi.org/10.1093/jmammal/gyz085)
- [Zhou et al. 2023: Daily and seasonal activity](https://doi.org/10.3390/ani13101689)
- [Liu et al. 2009: Winter food selection](https://www.mammal.cn/EN/Y2009/V29/I1/12)
- [Speakman et al. 2021: Winter energy suppression and yak feces](https://doi.org/10.1073/pnas.2100707118)
- [Wu et al. 2023: Protein availability, density and life history](https://doi.org/10.1093/jmammal/gyad063)
- [Li et al. 2025: Diet shifts and overlap under degradation](https://doi.org/10.1016/j.gecco.2024.e03373)

### 生态作用、控制和管理

- [Smith and Foggin 1999: Keystone-species synthesis](https://doi.org/10.1111/j.1469-1795.1999.tb00069.x)
- [Lai and Smith 2003: Pika control and native bird diversity](https://doi.org/10.1023/A:1024161409110)
- [Arthur et al. 2008: Grazing, pikas and avian biodiversity](https://doi.org/10.1016/j.biocon.2008.05.010)
- [Harris et al. 2014: Tibetan fox dependence](https://doi.org/10.1644/14-MAMM-A-021)
- [Wilson and Smith 2015: Pika poisoning and water infiltration](https://doi.org/10.1007/s13280-014-0568-x)
- [Pang and Guo 2018: Disturbance levels, plant diversity and biomass](https://doi.org/10.1111/grs.12199)
- [Zhang et al. 2020: Clipping and plant community](https://doi.org/10.1016/j.rama.2020.01.010)
- [Pech et al. 2007: Population response to control](https://doi.org/10.1111/j.1365-2664.2007.01287.x)
- [Harris et al. 2015: Livestock exclosure and pika reduction](https://doi.org/10.1371/journal.pone.0132897)
- [Chen et al. 2023: Burrow-sharing mammals and birds under climate change](https://doi.org/10.1038/s41558-023-01772-8)
- [Wang et al. 2026: Long-term control and grassland response](https://doi.org/10.1016/j.isci.2026.115159)
- [国家林业和草原局 2025 年昌都高原鼠兔调查](https://www.forestry.gov.cn/lyj/1/cybhdt/20250808/637325.html)

## `SpeciesSource` 研究候选集

以下 26 条是研究阶段用于保留主张、反向结果和限定条件的候选集，不是最终实现快照。产品最终选取 23 条直接支撑展示内容的来源，见 [`PLATEAU_PIKA_SOURCES`](../../src/data/species.ts)；上方 28 条主要研究来源继续作为扩展证据库保留。

```ts
const PLATEAU_PIKA_SOURCE_DATE = '2026-08-23' as const;

const candidatePlateauPikaSources = [
  {
    title: 'Mammal Diversity Database: Ochotona curzoniae',
    url: 'https://www.mammaldiversity.org/taxon/1001154/',
    kind: 'taxonomy',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Ochotona curzoniae, amended 2019 version of the 2016 assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41258A160699229.en',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List, Vertebrates Volume 2020',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Zoological Survey of India: Fauna of Sikkim, plateau pika diagnosis',
    url: 'https://faunaofindia.nic.in/PDFVolumes/sfs/044/index.pdf',
    kind: 'general',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith and Wang 1991: Social relationships of adult black-lipped pikas',
    url: 'https://doi.org/10.2307/1382094',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith and Dobson 2022: Social complexity in plateau pikas',
    url: 'https://doi.org/10.1016/j.anbehav.2021.11.014',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Nie, Liu and Chen 2022: Life-history traits and fitness',
    url: 'https://doi.org/10.1002/ece3.8548',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Qu et al. 2019: Altitude-linked divergence in plateau pika populations',
    url: 'https://doi.org/10.1186/s12983-019-0329-6',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Paruchuri et al. 2019: Microhabitat use by plateau pikas',
    url: 'https://doi.org/10.1093/jmammal/gyz085',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2023: Daily and seasonal activity patterns',
    url: 'https://doi.org/10.3390/ani13101689',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2009: Winter food selection by plateau pikas',
    url: 'https://www.mammal.cn/EN/Y2009/V29/I1/12',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Speakman et al. 2021: Winter energy suppression and use of yak feces',
    url: 'https://doi.org/10.1073/pnas.2100707118',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2023: Protein availability, density and life history',
    url: 'https://doi.org/10.1093/jmammal/gyad063',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Li et al. 2025: Dietary shifts under grassland degradation',
    url: 'https://doi.org/10.1016/j.gecco.2024.e03373',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Smith and Foggin 1999: Keystone status on the Tibetan Plateau',
    url: 'https://doi.org/10.1111/j.1469-1795.1999.tb00069.x',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Lai and Smith 2003: Pika control and native bird diversity',
    url: 'https://doi.org/10.1023/A:1024161409110',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Arthur et al. 2008: Grazing, plateau pikas and avian biodiversity',
    url: 'https://doi.org/10.1016/j.biocon.2008.05.010',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Harris et al. 2014: Tibetan fox dependence on plateau pikas',
    url: 'https://doi.org/10.1644/14-MAMM-A-021',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wilson and Smith 2015: Pika poisoning and water infiltration',
    url: 'https://doi.org/10.1007/s13280-014-0568-x',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Pang and Guo 2018: Disturbance levels, plant diversity and biomass',
    url: 'https://doi.org/10.1111/grs.12199',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 2020: Clipping by plateau pikas and plant communities',
    url: 'https://doi.org/10.1016/j.rama.2020.01.010',
    kind: 'ecology',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Pech et al. 2007: Population dynamics and response to control',
    url: 'https://doi.org/10.1111/j.1365-2664.2007.01287.x',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Harris et al. 2015: Livestock exclosure and pika reduction experiment',
    url: 'https://doi.org/10.1371/journal.pone.0132897',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Chen et al. 2023: Burrow-sharing mammals and birds under climate change',
    url: 'https://doi.org/10.1038/s41558-023-01772-8',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2026: Long-term pika control and grassland response',
    url: 'https://doi.org/10.1016/j.isci.2026.115159',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
  {
    title: 'National Forestry and Grassland Administration 2025: Changdu plateau pika survey',
    url: 'https://www.forestry.gov.cn/lyj/1/cybhdt/20250808/637325.html',
    kind: 'conservation',
    accessedAt: PLATEAU_PIKA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段 `Species` 对象草稿

该对象按 `Species` schema 映射研究结论，保留为研究阶段草稿，不是最终实现快照。最终字段见 [`src/data/species.ts`](../../src/data/species.ts)，图片路径、焦点和图说见 [`plateau-pika` 素材 README](../../src/assets/source/species/plateau-pika/README.md)。

```ts
const plateauPika = {
  id: 'species-ochotona-curzoniae',
  slug: 'plateau-pika',
  names: {
    zh: '高原鼠兔',
    en: 'Plateau Pika',
    aliases: ['黑唇鼠兔', 'Black-lipped Pika'],
  },
  scientificName: 'Ochotona curzoniae',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Lagomorpha', '兔形目'),
    taxon('Ochotonidae', '鼠兔科'),
    taxon('Ochotona', '鼠兔属'),
  ),
  conservation: conservation('LC', 'decreasing', 2016),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '青藏高原中部与西部高寒草地',
      '青海、甘肃南部和四川西部高寒草地',
      '西藏与新疆南部高原地带',
      '印度锡金和尼泊尔北部毗邻高地',
    ],
    countries: ['中国', '印度', '尼泊尔'],
    endemicTo: ['青藏高原及其毗邻高地'],
    range:
      '分布贯穿青藏高原及其毗邻高地，从尼泊尔北部和印度锡金向北进入中国西藏，并延伸至青海、甘肃南部、四川西部和新疆南部。IUCN 明确列出中国、印度和尼泊尔；MDD 的结构化国家字段对尼泊尔记录保留问号。海拔通常在 3,000 至 5,000 米。',
    center: { lat: 33.5, lng: 91.5 },
  },
  habitats: [
    {
      name: '高寒草甸',
      realm: 'terrestrial',
      description:
        '低矮莎草、禾草和杂类草提供食物，开阔视野和可挖掘土壤支持多入口家族洞道。',
      isPrimary: true,
    },
    {
      name: '高寒草原',
      realm: 'terrestrial',
      description:
        '植被较疏、风力较强的开阔高原草地，鼠兔利用洞道避险、筑巢和越冬。',
    },
    {
      name: '高寒荒漠与退化草地镶嵌',
      realm: 'terrestrial',
      description:
        '可利用低矮植被、小片裸地和土壤洼斑的边缘；出现于退化地不证明鼠兔是草地原始退化原因。',
    },
  ],
  measurements: {
    length: {
      min: 14,
      max: 19.2,
      unit: 'cm',
      note: 'IUCN 记录的体长范围；不进一步解释为头体长或全长',
    },
    weight: {
      typical: 150,
      unit: 'g',
      note: '海北长期研究的成年均值约 149 克；不作为全球范围',
    },
  },
  diet: {
    types: ['herbivore'],
    foods: [
      '高寒草甸的禾草与莎草',
      '高山杂类草和豆科植物',
      '叶、茎和嫩芽',
      '根及其他地下植物部分',
      '部分种群冬季利用的牦牛粪补充资源',
    ],
    description:
      '植食动物，取食禾草、莎草、杂类草、豆科植物和部分地下植物；食谱随地点、季节、食物质量和草地状况改变。部分与牦牛共存的种群会在冬季利用牦牛粪补充资源，但该行为不改变其植食类型。',
  },
  activity: [
    '以昼行为主，不冬眠，日活动节律随季节、温度和天气改变',
    '家族使用相对独立的多入口洞道和地面活动范围，家族间具有领地性',
    '在低矮草甸、裸地小斑和洞口边缘交错处取食、警戒和快速避险',
    '冬季降低活动、体温和能量消耗，部分种群利用牦牛粪补充资源',
    '春夏繁殖，繁殖季长度、胎数和窝仔数随地点与海拔改变',
  ],
  tags: [
    '兔形目',
    '青藏高原',
    '高寒草地',
    '植食动物',
    '昼行性',
    '不冬眠',
    '社会性家族群',
    '掘洞动物',
    '生态系统工程者',
    '关键种',
    'IUCN 无危',
    '全球趋势下降',
  ],
  summary:
    '生活在青藏高原开阔高寒草地、以家族洞道连接植物、土壤、穴居鸟和捕食者，却长期卷入牧草竞争与灭鼠争议的小型兔形目动物。',
  description:
    '高原鼠兔是青藏高原及毗邻高地的社会性兔形目动物，不是啮齿动物。它体长约 14.0 至 19.2 厘米，短圆耳、无明显尾，沙褐背毛与浅色腹毛之间常可见黑色鼻唇和锈色耳后斑。家族在低矮草甸和小片裸地交错处使用多入口洞道，白昼取食禾草、莎草和杂类草，冬季不冬眠，而是降低活动与能量消耗；部分种群还会利用牦牛粪补充资源。洞道、掘土、取食和排泄会改变局地植物、土壤和水分入渗，鼠兔又是藏狐等捕食者的食物，洞道可供雪雀等动物利用，因此常被视为青藏高原关键种。高密度鼠兔也可能减少牧草和扩大裸斑。现有研究显示毒杀能短期减量，却常出现快速恢复，长期牧草收益随地点改变；保护和牧业管理都需要基于密度、草地状态、牲畜压力及关联物种进行分区监测。',
  storySections: [
    {
      key: 'lagomorph-body',
      label: '形态',
      title: '名字像鼠，分类却属于兔形目',
      body:
        '高原鼠兔身形短粗，短圆耳贴近头部，尾巴几乎看不见。鼻端和唇缘常呈黑色，耳后有锈褐斑，沙褐背毛向浅色腹部过渡。名字中的“鼠”描述小体型，不代表分类；它与兔和野兔同属兔形目。',
    },
    {
      key: 'family-burrows',
      label: '社会',
      title: '草甸边缘连着一套家族洞道',
      body:
        '高原鼠兔在低矮草甸、裸地小洼斑和洞口交错处活动。一个家族使用多入口洞道，洞内用于避险、筑巢和越冬，地面则提供食物和视野。洞口数不能直接等于个体数，家族也不只有一种配偶制度。',
    },
    {
      key: 'winter-budget',
      label: '越冬',
      title: '不冬眠，用更低开支熬过寒季',
      body:
        '冬天的高原鼠兔仍会出洞，却降低活动、体温和能量消耗。部分与牦牛共存的种群还会吃牦牛粪补充资源，研究同时获得直接影像和胃内容物 DNA 证据。这是地点相关的越冬策略，不改变其植食类型。',
    },
    {
      key: 'food-web-and-burrows',
      label: '食物网',
      title: '捕食者和穴居鸟沿着洞道相连',
      body:
        '高原鼠兔为藏狐等捕食者提供食物，废弃或活跃洞道也可供雪雀等鸟类利用。未毒杀样地常记录到更多鸟类，但毒杀后的短期调查并非每次都出现整体鸟量差异。食物网、洞道寿命和观察时间共同决定结果。',
    },
    {
      key: 'density-dependent-engineering',
      label: '生态工程',
      title: '生态工程有收益，也有密度代价',
      body:
        '掘洞能提高局地水分入渗，排泄、翻土和剪切会制造植物与土壤镶嵌。高密度时，取食和裸斑也可能降低盖度或牧草质量。没有一个洞口阈值能脱离草地类型、放牧史、季节和计数方法，直接套用到整个青藏高原。',
    },
    {
      key: 'monitor-before-control',
      label: '管理',
      title: '从全面灭除转向分区、长期监测',
      body:
        '投药能在数天内降低数量，部分种群却在当年秋季恢复，牧草收益也不稳定。长期资料同样没有支持一种措施适用于所有地点。有效管理需要先测鼠兔、植被、牲畜和依赖洞道的物种，再做分区决策，并为任何干预设置对照、期限和停止条件。',
    },
  ],
  keyFacts: [
    '高原鼠兔属于兔形目鼠兔科，不属于啮齿目。',
    'MDD 接受名为 Ochotona curzoniae，英文主名 Plateau Pika，Black-lipped Pika 为常用名。',
    '当前 IUCN 全球等级为无危、趋势下降；2019 记录是 2016 年评估的修订版本。',
    'IUCN 没有全范围总体数量，下降趋势主要从广泛毒杀的影响推断。',
    '自然分布覆盖中国、印度和尼泊尔的青藏高原及毗邻高地，海拔约 3,000 至 5,000 米。',
    '体长约 14.0 至 19.2 厘米，成年体重典型约 150 克，尾巴外观不明显。',
    '鼻端和唇缘通常较黑，耳后有锈色斑，背部沙褐至红褐，腹面淡黄白至浅灰白。',
    '它是昼行、不冬眠的植食动物，部分种群会在冬季利用牦牛粪补充资源。',
    '家族使用多入口洞道，家族大小和配偶制度会变化，不能概括成严格单配。',
    '洞道、掘土、取食和捕食关系影响其他物种与土壤，但效应受密度、地点和放牧史制约。',
    '毒杀可迅速降低数量，部分种群一个繁殖季内恢复，长期牧草收益并不稳定。',
    '关键种作用和牧业成本可以同时成立，管理需要分区和长期对照监测。',
  ],
  threats: [
    '把高原鼠兔视为害兽而实施的大范围毒杀、持续迫害和局部清除',
    '过度放牧、植被缩短、土壤贫瘠和草地退化对食物与洞道环境的改变',
    '毒杀造成捕食者食物减少、洞道坍塌和利用洞道物种受影响的非目标生态风险',
    '气候变化可能使西南部部分种群面临更高的适应和连通性风险',
    '全范围数量资料和可比长期监测不足，导致管理基线与阈值不稳定',
  ],
  conservationActions: [
    '收缩不分地点的灭绝式控制，保留代表性种群、完整洞道和捕食者食物基础',
    '统一个体、有效洞口、占域、植被盖度、生物量和裸地的调查协议',
    '在干预前后设置可比对照，并跨越繁殖季、越冬期和多年尺度跟踪恢复',
    '优先调整牲畜密度、季节轮牧和退化草地恢复，避免把鼠兔视为唯一退化驱动',
    '局部减量必须有风险分区、期限、生态避难斑块、停止条件和非目标监测',
    '在雪雀繁殖地、藏狐重要食物区和水土敏感区提高干预门槛',
    '把气候适应、连通性和潜在气候避难所纳入长期保护规划',
    '向公众说明它属于兔形目，并同时呈现关键种作用与牧业冲突的证据边界',
  ],
  metrics: {
    adultLengthCm: [14, 19.2],
    elevationM: [3000, 5000],
  },
  featuredStats: [
    {
      key: 'iucn-status',
      label: 'IUCN',
      value: '无危',
      note: '全球趋势下降；2016 年评估，2019 年修订仅更新分布图',
    },
    {
      key: 'body-length',
      label: '体长',
      value: '14.0 至 19.2',
      unit: '厘米',
      note: '尾部外观不明显',
    },
    {
      key: 'adult-mass',
      label: '成年体重',
      value: '约 150',
      unit: '克',
      note: '海北长期研究的成年均值约 149 克，不作为全球范围',
    },
    {
      key: 'elevation',
      label: '分布海拔',
      value: '3,000 至 5,000',
      unit: '米',
      note: 'IUCN 全球记录范围',
    },
  ],
  media: {
    image: './images/species/plateau-pika/01-alpine-meadow-portrait.webp',
    alt: '一只沙褐色高原鼠兔停在高寒草甸的小型洞口旁，短圆耳和黑色鼻唇清晰可见',
    focalPoint: { x: 0.72, y: 0.56 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/plateau-pika/02-black-lip-and-ear-markings.webp',
        alt: '一只高原鼠兔的侧前方近景，显示短圆浅缘耳、锈色耳后斑和黑色鼻唇',
        title: '黑唇之外的识别组合',
        caption:
          '短圆耳、无显尾、沙褐背毛、浅色腹面、锈色耳后斑和黑色鼻唇共同构成外形组合；黑唇本身不能可靠排除所有近似鼠兔。',
        focalPoint: { x: 0.54, y: 0.48 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/plateau-pika/03-burrow-meadow-mosaic.webp',
        alt: '低矮高寒草甸与小片裸地间分布着数个自然洞口，远处有一只高原鼠兔',
        title: '草甸边缘和多入口洞道',
        caption:
          '洞口、低矮植被和小片裸地形成活动镶嵌。洞口数量不能直接换算个体数，画面也不用于判断草地退化原因。',
        focalPoint: { x: 0.58, y: 0.55 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/plateau-pika/04-forb-and-grass-feeding.webp',
        alt: '一只高原鼠兔在洞口附近低头取食低矮禾草和高山杂类草',
        title: '跟着资源变化的草地菜单',
        caption:
          '高原鼠兔取食禾草、莎草和杂类草，具体食谱随地点、季节、食物质量和草地状态改变；画中植物不作物种鉴定。',
        focalPoint: { x: 0.48, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/plateau-pika/05-family-at-shared-burrow.webp',
        alt: '一只成年高原鼠兔和三只较小幼体分布在同一组草甸洞口旁',
        title: '共享洞道的家族成员',
        caption:
          '高原鼠兔组成社会性家族群。这幅场景只表现成体与幼体相邻，不用于判断成体性别、实际亲子、配偶关系或严格单配。',
        focalPoint: { x: 0.52, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/plateau-pika/06-nonlethal-density-monitoring.webp',
        alt: '两名研究人员在高寒草甸用样方和记录板调查洞口与植被，远处有一只高原鼠兔',
        title: '先测量，再决定如何管理',
        caption:
          '个体、有效洞口、植被和裸地需要联合调查。该概念场景不对应某个真实项目，也不展示毒饵、抓捕或具体控制技术。',
        focalPoint: { x: 0.49, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: plateauPikaSources,
  featured: true,
  publishedAt: '2026-08-23',
  updatedAt: '2026-08-23',
} as const satisfies Species;
```

## TODO 收尾验收

### 研究与数据

- [x] 主中文名、英文主名、别名和接受名已按官方或权威分类来源核验。
- [x] 分类图谱明确新增兔形目、鼠兔科、鼠兔属，且正文排除啮齿目误写。
- [x] IUCN 记录区分 2016 评估年与 2019 修订发布年，趋势设为 `decreasing`。
- [x] 全球无成熟个体数，`estimatedMatureIndividuals` 留空。
- [x] 长度、体重和海拔都有来源与方法边界，未添加全球寿命。
- [x] 生活史冲突按地点和海拔解释，没有把单一种群数值推广为全球定律。
- [x] 关键种结论拆分为鸟类、捕食者、洞道、入渗、植物和土壤证据。
- [x] 灭鼠政策同时记录短期减量、快速恢复、局地改善、长期不确定性和现行监测政策。
- [x] `SpeciesSource` 和完整 `Species` 对象草稿已提供。

### 图像与资源

- [x] 建立 `src/assets/source/species/plateau-pika/README.md`，写入六图提示词、证据边界和验收结果。
- [x] 生成六张 1536 × 1024 的 `*-source.png`，逐张确认动物与人物计数。
- [x] 检查短圆耳、无显尾、黑唇范围、耳后锈斑、足部和四肢，不接受啮齿动物或家兔轮廓。
- [x] 依仓库流程压缩源 PNG，并生成质量参数一致的运行时 WebP。
- [x] 在 `public/images/species/plateau-pika/` 放置六张 WebP，文件名与对象草稿一致。
- [x] 对 PNG 与 WebP 执行尺寸、格式、alpha、文件大小和静态视觉检查。
- [x] 确认封面左侧负空间、焦点和所有图库 alt、title、caption 与画面一致。

### 代码、测试和 TODO

- [x] 把 `PLATEAU_PIKA_SOURCES`、高原鼠兔物种对象和日期常量落入 `src/data/species.ts`。
- [x] 确认新分类单元恰好为 Lagomorpha、Ochotonidae、Ochotona 三个，不重复创建 Animalia、Chordata 和 Mammalia。
- [x] 更新 `tests/taxonomy.test.mjs` 的物种数、分类节点数、哺乳纲和祖先聚合预期。
- [x] 为 slug、六张媒体路径、IUCN 年份与趋势、metrics 和图片 credit 增加针对性断言。
- [x] 更新 `src/assets/source/README.md` 索引。
- [x] 从 `docs/todo.md` 删除“高原鼠兔”未完成项，并更新现有物种档案数、哺乳纲数量和剩余数量。
- [x] 运行测试、类型检查、生产构建和 `git diff --check`。
- [x] 检查构建产物包含六张高原鼠兔 WebP，且不存在缺失或重名资源。

只有代码、资源、测试、TODO 和构建产物全部通过后，才能把这个动物视为完成。研究文档中的 `[x]` 只表示证据底稿已经收齐，不代表实现验收已经结束。
