# 土豚（_Orycteropus afer_）完整物种档案研究

- 检索与核验日期：2026-08-30
- 使用范围：`src/data/species.ts` 的土豚物种档案、6 个故事段落、4 张数字卡、1 张封面与 5 张 gallery 图像
- 证据口径：分类与范围国优先采用 Mammal Diversity Database（MDD）；全球保护字段采用 IUCN Red List；贸易地位采用 CITES 原始名录和缔约方大会文件；自然史数字优先采用同行评审原始研究。南非区域评估只负责地方威胁与保护行动，不覆盖全球字段。
- 访问日期写法：本文每项事实后均附来源 URL 和访问日期。代码草案中的事实映射回紧邻的字段表和故事表；`SpeciesSource.accessedAt` 统一为 `2026-08-30`。

## 编辑结论

1. 项目主名使用“土豚”，英文名使用 `Aardvark`，学名使用 _Orycteropus afer_ (Pallas, 1766)。MDD 还收录英文俗名 `Antbear`；该俗名只能放在别名中，不能据此把土豚写成真正食蚁兽。[MDD：_Orycteropus afer_](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30）
2. 六阶分类链为 Animalia 动物界、Chordata 脊索动物门、Mammalia 哺乳纲、Tubulidentata 管齿目、Orycteropodidae 土豚科、_Orycteropus_ 土豚属。MDD 的管齿目页只列土豚科，土豚科页只列 _Orycteropus afer_ 一种现生种，页面可把本种称为“管齿目唯一现生种”。[MDD 物种页](https://www.mammaldiversity.org/taxon/1000520/)；[MDD 管齿目页](https://www.mammaldiversity.org/order/tubulidentata/)；[MDD 土豚科页](https://www.mammaldiversity.org/family/orycteropodidae/)（访问日期均为：2026-08-30）
3. 全球保护字段应为 **LC / unknown / assessed 2014**。IUCN 完成评估的日期是 2014-01-21，2015 是发布批次年份；`assessedYear` 应填 2014。LC 没有 A 至 E 受威胁标准，`criteria` 省略，全球成熟个体数也留空。[IUCN 评估](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[IUCN 评估 PDF](https://www.iucnredlist.org/species/pdf/21286437.pdf)（访问日期均为：2026-08-30）
4. 该评估到 2026 年已超过十年。IUCN 明确规定评估十年后正式过期，但会在新评估发布前继续保留最近记录。产品应显示现有 LC，不应自行改成 NT、VU 或 DD；文案同时提示“评估需要更新、趋势未知”。[IUCN assessment process](https://nrl.iucnredlist.org/assessment/process)；[IUCN supporting information](https://nrl.iucnredlist.org/assessment/supporting-information)（访问日期均为：2026-08-30）
5. 当前 MDD 国家概览列出 42 个国家；结构化 `countries` 采用这份较新的清单。IUCN 2014 评估使用较旧的 40 国清单，南非 2016 区域评估还认为莱索托只有预测范围、缺少记录。产品需要保留“国家概览不等于全国连续占域”的边界，不能把三套年份不同的清单拼成更大的范围。[MDD 物种页](https://www.mammaldiversity.org/taxon/1000520/)；[IUCN 评估](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[SANBI 区域评估](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)（访问日期均为：2026-08-30）
6. 可落库的体型口径采用 2011 年《Handbook of the Mammals of the World》分类处理：成体头体长 **94 至 142 厘米**、体重 **40 至 65 千克**；尾长 **44 至 63 厘米**只放说明，不与头体长相加后再写成结构化长度。[Plazi TreatmentBank：HMW _Orycteropus afer_ treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30）
7. 1988 年 _Mammalian Species_ 专论常被二手资料转述为头体长 100 至 158 厘米、体重 40 至 82 千克。两组数字来自不同综述口径，不能取较小下限和较大上限拼成“94 至 158 厘米、40 至 82 千克”。本档案采用同一 HMW treatment 的成套范围，并把旧范围列为更新风险。[Shoshani, Goldman & Thewissen 1988](https://doi.org/10.2307/3503996)；[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期均为：2026-08-30）
8. 土豚曾在 1975-07-01 列入 CITES 附录 II，缔约方大会于 1992-06-11 将其删除。2026-03-05 生效的现行附录没有列入本种，因此不能把历史附录 II 写成当前保护状态。[CITES 历史名录](https://cites.org/sites/default/files/esp/resources/pub/checklist11/Historia_de_las_inclusiones_en_los_Apendices_de_la_CITES.pdf)；[CITES CoP8 Proposal 12](https://cites.org/sites/default/files/eng/cop/08/prop/E08-Prop-12_Orycteropus.PDF)；[CITES 现行附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)（访问日期均为：2026-08-30）

## 名称、分类与物种边界

### 推荐名称字段

| 字段 | 推荐值 | 依据与边界 |
| --- | --- | --- |
| `names.zh` | `土豚` | 沿用项目 TODO。中文名不用于推断与猪的亲缘关系。 |
| `names.en` | `Aardvark` | MDD 当前英文主名。[MDD](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30） |
| `names.aliases` | `['Antbear']` | MDD 收录的英文俗名。不要加入 `African Anteater` 等未在主来源使用的扩展名。[MDD](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30） |
| `scientificName` | `Orycteropus afer` | 接受名及命名信息为 _Orycteropus afer_ (Pallas, 1766)，原始组合为 _Myrmecophaga afra_。[MDD](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30） |

### 六阶分类链

| 分类阶元 | 拉丁名 | 中文名 | 依据 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | HMW treatment 的结构化分类记录。[Plazi](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30） |
| 门 | Chordata | 脊索动物门 | 同上。[Plazi](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30） |
| 纲 | Mammalia | 哺乳纲 | HMW treatment 的结构化分类记录。[Plazi](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30） |
| 目 | Tubulidentata | 管齿目 | MDD 当前分类口径。[MDD](https://www.mammaldiversity.org/order/tubulidentata/)（访问日期：2026-08-30） |
| 科 | Orycteropodidae | 土豚科 | MDD 当前分类口径。[MDD](https://www.mammaldiversity.org/family/orycteropodidae/)（访问日期：2026-08-30） |
| 属 | _Orycteropus_ | 土豚属 | MDD 当前分类口径。[MDD](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30） |

HMW treatment 列出 18 个曾描述亚种，同时明确指出比较材料不足，许多名称的有效性和分布界线并未解决。2024 年一项区域遗传研究在南非材料中发现区域结构和气候相关分化，但作者没有据此修订亚种；产品应保持种级页面，不给生成图强行分配亚种。[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)；[Epps et al. 2024](https://doi.org/10.1111/ddi.13792)（访问日期均为：2026-08-30）

## IUCN、种群趋势与贸易地位

推荐结构化字段：

```ts
conservation: conservation('LC', 'unknown', 2014),
```

IUCN 将本种评为无危，当前种群趋势记为 `Unknown`。评估没有提供可落库的全球成熟个体数，也没有给 LC 配置受威胁判定标准。IUCN 记录的分布范围广，但强调西非雨林中的分布了解不足，全球种群数量和趋势均未量化。[IUCN 评估](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[IUCN 评估 PDF](https://www.iucnredlist.org/species/pdf/21286437.pdf)（访问日期均为：2026-08-30）

南非 2016 区域评估同样给出 LC，并认为全国数量大概超过 10,000 只；这个数字带有区域推断，不能转成全球 `estimatedMatureIndividuals`。该区域评估同时要求开展长期系统监测，量化猎捕、迫害与气候压力。[SANBI 区域评估](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)（访问日期：2026-08-30）

CITES 历史记录的准确写法是：“1975 年列附录 II，1992 年删除，当前未列”。删除提案认为国际贸易当时并非本种存续的威胁；这不表示本种不受范围国国内法约束，也不能抹去地方猎捕压力。[CITES 历史名录](https://cites.org/sites/default/files/esp/resources/pub/checklist11/Historia_de_las_inclusiones_en_los_Apendices_de_la_CITES.pdf)；[CITES CoP8 Proposal 12](https://cites.org/sites/default/files/eng/cop/08/prop/E08-Prop-12_Orycteropus.PDF)（访问日期均为：2026-08-30）

## 分布、国家数组与地图口径

MDD 当前列出以下 42 个国家：安哥拉、贝宁、博茨瓦纳、布基纳法索、布隆迪、喀麦隆、中非共和国、乍得、科特迪瓦、刚果民主共和国、吉布提、赤道几内亚、厄立特里亚、斯威士兰、埃塞俄比亚、加蓬、冈比亚、加纳、几内亚、几内亚比绍、肯尼亚、莱索托、利比里亚、马拉维、马里、毛里塔尼亚、莫桑比克、纳米比亚、尼日尔、尼日利亚、刚果共和国、卢旺达、塞内加尔、塞拉利昂、索马里、南非、南苏丹、苏丹、坦桑尼亚、乌干达、赞比亚、津巴布韦。[MDD](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30）

范围概括可写为“广布于撒哈拉以南非洲，从西非稀树草原带经中非、东非延伸至南部非洲”。南非区域评估把宏观边界概括为塞内加尔至埃塞俄比亚、向南至南非，并指出本种缺席撒哈拉和纳米布极端荒漠；刚果盆地有分布，西非雨林范围仍不清楚。[SANBI 区域评估](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)（访问日期：2026-08-30）

地图中心建议使用 `{ lat: -2, lng: 24 }`，只作为非洲页面的视口焦点。MDD 明确把国家着色图称为 general overview，并警告多数物种只占一国的部分地区；产品不能把中心点或整国着色解释成实际连续分布面。[MDD](https://www.mammaldiversity.org/taxon/1000520/)（访问日期：2026-08-30）

## 生境与海拔

HMW treatment 记录本种利用草原、稀树草原、半干旱区、灌丛、落叶林和雨林，最高到埃塞俄比亚高地 3,200 米。它避开无法挖掘的沙漠、硬地或多石地；适宜猎物密度和足够深、可挖掘的土壤比单一植被类型更能界定生境。[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30）

建议生境字段：

| `name` | `isPrimary` | 可落库描述 | 来源 |
| --- | ---: | --- | --- |
| 草原、稀树草原与开放灌丛 | `true` | 广布范围中的代表性生境；适宜性取决于蚁、白蚁和可挖土壤，不由“有草”单独决定。 | [HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30） |
| 林地、落叶林与雨林 | 省略 | 可进入林地和雨林；西非雨林内的详细范围仍缺资料，不用封面画面代表全范围。 | [IUCN](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期均为：2026-08-30） |
| 半干旱卡鲁及其他干旱草灌地 | `true` | 能在半干旱地生活并利用洞穴缓冲环境；极端荒漠、硬地和多石地不属于可概括的适宜生境。 | [SANBI](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)；[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期均为：2026-08-30） |

`distribution.realms` 只填 `terrestrial`，`metrics.elevationM` 填 `[0, 3200]`。IUCN 把本种列为陆生、非迁徙物种，海拔范围为 0 至 3,200 米；会游泳或跨过水道的零散行为不足以增加淡水生态域。[IUCN 评估 PDF](https://www.iucnredlist.org/species/pdf/21286437.pdf)（访问日期：2026-08-30）

## 形态、体尺与掘土系统

### 可落库测量

```ts
measurements: {
  length: {
    min: 94,
    max: 142,
    unit: 'cm',
    note: '成体头体长；不含 44—63 cm 的尾',
  },
  weight: {
    min: 40,
    max: 65,
    unit: 'kg',
    note: 'HMW 物种处理采用的成体参考范围',
  },
},
metrics: {
  adultLengthCm: [94, 142],
  adultMassKg: [40, 65],
  elevationM: [0, 3200],
},
```

HMW treatment 描述了强烈拱起的背部、长而可活动的吻、兔耳状长耳、粗壮肌肉肢体、黄色灰至灰褐色稀疏毛被，以及粗基部逐渐收尖的尾。前足四趾、后足五趾，全部带强爪；图像不应出现猪蹄、鳞甲、巨食蚁兽的蓬松尾或象鼻。[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30）

CT 功能形态研究显示，前足内侧两趾在动力行程中承担压碎土体的作用，外侧两趾更像扫土器；后足主要负责推进和扫走松土。该研究检验的是骨骼运动和功能解释，不提供“几秒挖一米”等速度数据。[Endo et al. 2003](https://doi.org/10.1016/S0940-9602(03)80063-8)；[PubMed record](https://pubmed.ncbi.nlm.nih.gov/12924475/)（访问日期均为：2026-08-30）

成体没有门齿和犬齿，通常每侧上下颌各有两枚前臼齿和三枚臼齿，合计 20 枚颊齿。牙齿由六角形牙本质小管组成，缺少保护性釉质，并终生持续生长；生成图应避免露出獠牙、猪齿或整排尖牙。[Christman et al. 2022](https://doi.org/10.3390/ani12070845)；[开放全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC8997031/)（访问日期均为：2026-08-30）

## 食性与觅食

卡鲁一项原始研究为 13 只土豚安装无线电发射器，并近距离跟随其中 4 只习惯化个体。该样地的粪便和觅食观察只记录到蚁与白蚁，蚁在各季节和年份都占优势；_Anoplolepis custodiens_ 最重要，_Trinervitermes trinervoides_ 次之，冬季取食白蚁更频繁。这个结果属于南非一个保护区，不能改写为全非洲“只吃两种昆虫”。[Taylor, Lindsey & Skinner 2002](https://doi.org/10.1006/jare.2001.0854)（访问日期：2026-08-30）

HMW treatment 将全范围食性概括为几乎专食蚁与白蚁，并保留地下甲虫幼虫这一偶见补充。2025 年纳米比亚中部研究证实了一个植物例外：地下约 20 厘米的 _Cucumis humifructus_ 果实由土豚挖出，完整种子随粪粒散布；研究者检查的植株都从土豚粪粒萌发。这个互利关系来自特定植物与样地，不能把瓜果写成所有土豚的日常主食。[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)；[Johnson et al. 2025](https://doi.org/10.1002/ppp3.10638)（访问日期均为：2026-08-30）

推荐字段：

```ts
diet: {
  types: ['insectivore'],
  foods: ['蚁类', '白蚁', '偶见地下甲虫幼虫', '局地地下土豚黄瓜果实'],
  description:
    '主要以嗅觉定位地下蚁巢和白蚁巢，用强壮前爪掘开巢道，再以细长黏舌取食；猎物组成随地区和季节变化，纳米比亚中部还记录到挖食地下 Cucumis humifructus 果实并传播种子的局地例外。',
},
```

## 活动、空间利用与干旱反应

卡鲁八只无线电标记个体的研究显示，土豚主要夜行；冬季会更早出洞、更早回洞、缩短活动时间，少数个体在日落前取食。家域为 133 至 302 公顷，密度约每 1,000 公顷 8 只；三只个体连续使用同一洞穴的平均时长分别为 4.9、6.9 和 8.6 天。所有数字都来自一个卡鲁保护区，不能当作全范围固定值或全球数量。[Taylor & Skinner 2003](https://doi.org/10.1017/S0952836903004217)（访问日期：2026-08-30）

同一研究项目的学位论文记录每晚移动 2.11 至 4.39 千米。该值可以放进关键事实并保留样地限定，不应转成 `topSpeedKph`，也不能推断每天必走同样距离。[Taylor 1998, University of Pretoria repository](https://repository.up.ac.za/items/68c213e0-aa66-4b65-92f8-a62cbad1d4c5)（访问日期：2026-08-30）

卡拉哈里 12 只自由活动成体的约三年生物记录研究发现，食物充足年份维持夜行和稳定的体温节律；干旱、植被生产力下降和体况变差时，个体缩短活动期、增加昼间活动并出现更低且波动更大的体温，多只研究个体死亡。作者把昼行增加解释为能量不足的指标，而不是“炎热让土豚改为正常日行”。[Weyer et al. 2020](https://doi.org/10.3389/fphys.2020.00637)；[开放全文](https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2020.00637/full)（访问日期均为：2026-08-30）

## 繁殖与育幼

野外繁殖资料稀少。HMW treatment 汇总的圈养样本给出平均妊娠 243 天、范围 235 至 258 天、样本量 6，并称通常只生一只幼仔。2026 年一只管理饲养雌兽的病例报告记录妊娠 231 天，并把既有报道范围概括为 213 至 258 天；单例研究不能确定全种发情周期或野外妊娠分布。[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)；[Fallon et al. 2026](https://doi.org/10.1016/j.therwi.2026.100145)（访问日期均为：2026-08-30）

产品可写“管理饲养记录约 7 至 8.5 个月，通常一仔，也有偶见双仔的综述记录；野外繁殖率和育幼时间仍不清楚”。不要写固定 7 个月、每年必生一仔、幼仔两周后必随母活动，或用母幼照片确定性别、日龄、实际亲子关系和窝仔数。[HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)；[_Mammals of Africa_ 章节预览](https://api.pageplace.de/preview/DT0400.9781408189962_A23936085/preview-9781408189962_A23936085.pdf)；[SANBI 区域评估](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)（访问日期均为：2026-08-30）

## 洞穴的生态工程作用

南非三个样地的研究发现，土豚洞内最高温度低于外界，最低温度和相对湿度高于外界；研究记录 27 种脊椎动物使用洞穴，包括 21 种哺乳类、2 种鸟、3 种爬行类和 1 种两栖类。采样偏向哺乳类和夜行种，因此“27”是这套方法记录到的下限式样地数字，不是全非洲完整依赖物种数。[Whittington-Jones, Bernard & Parker 2011](https://doi.org/10.1080/15627020.2011.11407509)（访问日期：2026-08-30）

另一项南非草地研究比较洞口、挖出土堆和未扰动对照。洞口土壤更凉、更干、压实度更低；老洞口的平均植物丰富度高于土堆和对照，新洞口与新土堆则出现相反方向。档案应写“挖掘形成随时间变化的微斑块”，不能写“每个土豚洞都会提高植物多样性”。[Haussmann et al. 2018](https://doi.org/10.1016/j.ecoleng.2018.04.022)；[University of Pretoria repository](https://repository.up.ac.za/handle/2263/65084)（访问日期均为：2026-08-30）

## 威胁与保护行动

IUCN 2014 评估列出人类扩张、生境破坏、食用猎捕以及身体部位用于护符和传统医疗等压力，但没有量化全球下降率。南非区域评估进一步记录农业扩张、因洞穴损坏道路或围栏而遭迫害、肉食和传统用途猎杀，以及干旱对猎物的间接影响；这些地方证据不能替代全球趋势。[IUCN](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[SANBI](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)（访问日期均为：2026-08-30）

2024 年南非、斯威士兰与肯尼亚材料的遗传研究发现，低降水提高景观阻力并预测遗传分化；作者预计干旱化会增加破碎化，建议把土豚出现情况作为干旱化生态变化的监测指标。研究覆盖范围远小于全分布区，不能直接给 42 国划出遗传亚种。[Epps et al. 2024](https://doi.org/10.1111/ddi.13792)（访问日期：2026-08-30）

建议保护行动包括：在保护地内外保留可挖土壤和自然蚁、白蚁密度；用可重复调查、相机陷阱或非侵入粪便遗传方法补齐种群趋势；量化猎捕和迫害；与土地所有者试验摆动门、轮胎通道等野生动物友好围栏；监测干旱、体况和猎物可得性。围栏措施目前主要来自南部非洲实践，实施前应在当地验证。[SANBI](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)；[Epps et al. 2024](https://doi.org/10.1111/ddi.13792)（访问日期均为：2026-08-30）

## 四张 featured stats

| `key` | `label` | `value` | `unit` | `note` | 依据 |
| --- | --- | --- | --- | --- | --- |
| `global-iucn-status` | IUCN 全球等级 | `LC` | 无危 | `2014 年评估；全球种群趋势未知` | [IUCN](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)（访问日期：2026-08-30） |
| `head-body-length` | 成体头体长 | `94—142` | 厘米 | `不含 44—63 厘米的尾` | [HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30） |
| `adult-mass` | 成体体重 | `40—65` | 千克 | `HMW 物种处理采用的参考范围` | [HMW treatment](https://tb.plazi.org/GgServer/html/4B63D44CFF84FFA3E1E4441EF745A934)（访问日期：2026-08-30） |
| `burrow-users` | 洞穴访客记录 | `27` | 种脊椎动物 | `南非三个样地；调查偏向哺乳类与夜行种` | [Whittington-Jones et al. 2011](https://doi.org/10.1080/15627020.2011.11407509)（访问日期：2026-08-30） |

不用寿命、最高速度或全球成熟个体数补足数字卡。现有来源没有稳健的野外寿命范围、可比最高速度或全球数量；把圈养寿命、每晚移动距离和南非区域估计放进这些字段都会改变数字含义。[IUCN](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[SANBI](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)（访问日期均为：2026-08-30）

## 六个故事段落

以下文案可直接转为 `storySections`。每段保留样地、样本和证据边界。

### 01 管齿目最后的现生代表

- `key`: `sole-living-tubulidentate`
- `label`: `分类`
- `title`: `管齿目最后的现生代表`
- `body`: `土豚是管齿目唯一的现生种，也是土豚科和土豚属仅存的现生成员。它的长吻和食蚁习性与食蚁兽、穿山甲形成趋同，英文俗名 Antbear 和中文“豚”都不能用来判断亲缘关系。`
- 依据：MDD 当前管齿目只列土豚科，土豚科只列 _Orycteropus afer_；2025 年眼部研究也将本种明确称为管齿目唯一现生种。[MDD 管齿目](https://www.mammaldiversity.org/order/tubulidentata/)；[MDD 土豚科](https://www.mammaldiversity.org/family/orycteropodidae/)；[Ahnelt et al. 2025](https://doi.org/10.1371/journal.pone.0314252)（访问日期均为：2026-08-30）

### 02 前爪破土，管状牙齿继续生长

- `key`: `digging-and-tubular-teeth`
- `label`: `形态`
- `title`: `前爪破土，管状牙齿继续生长`
- `body`: `前足内侧趾在动力行程中压碎土体，外侧趾把松土扫开，后足负责推进和清土。成体没有门齿和犬齿，通常留下 20 枚由六角形牙本质小管组成的颊齿；它们没有保护性釉质，会持续生长。`
- 依据：CT 骨运动研究负责掘土分工，兽医牙科研究负责牙式、牙本质小管、无釉质和持续生长。[Endo et al. 2003](https://doi.org/10.1016/S0940-9602(03)80063-8)；[Christman et al. 2022](https://doi.org/10.3390/ani12070845)（访问日期均为：2026-08-30）

### 03 地下猎物不是一张固定菜单

- `key`: `selective-myrmecophage`
- `label`: `食性`
- `title`: `地下猎物不是一张固定菜单`
- `body`: `卡鲁一个长期样地的 13 只标记土豚只留下蚁和白蚁食物证据，蚁在各季节占优势，冬季白蚁比例增加。全范围仍有地下甲虫幼虫记录；纳米比亚中部的土豚还会挖食一种地下瓜果并传播种子，所以单点食谱不能变成全非洲定律。`
- 依据：食物样本和季节差异来自 Taylor 等人的南非原始研究；地下果实例外来自 2025 年纳米比亚相机、粪便和萌发实验。[Taylor et al. 2002](https://doi.org/10.1006/jare.2001.0854)；[Johnson et al. 2025](https://doi.org/10.1002/ppp3.10638)（访问日期均为：2026-08-30）

### 04 白昼出现有时是一声能量警报

- `key`: `flexible-clock-under-drought`
- `label`: `活动`
- `title`: `白昼出现有时是一声能量警报`
- `body`: `土豚通常在夜间觅食，冬季可提前出洞。卡拉哈里三年记录中，干旱和食物不足伴随体况下降、体温波动、活动期缩短与昼行增加，多只研究个体随后死亡；因此白昼目击不能直接写成健康种群的固定日行节律。`
- 依据：卡鲁研究负责季节性时刻变化，卡拉哈里生物记录研究负责能量不足、昼行与死亡的关联。[Taylor & Skinner 2003](https://doi.org/10.1017/S0952836903004217)；[Weyer et al. 2020](https://doi.org/10.3389/fphys.2020.00637)（访问日期均为：2026-08-30）

### 05 一个洞改变温度、土壤与邻居

- `key`: `burrow-engineering`
- `label`: `生态作用`
- `title`: `一个洞改变温度、土壤与邻居`
- `body`: `南非三个样地记录 27 种脊椎动物使用土豚洞，洞内的温湿度也比外界缓和。挖掘还形成较凉、较松的土壤微斑块；老洞口和新洞口的植物丰富度变化方向不同，生态工程作用会随洞龄和微位置改变。`
- 依据：洞穴使用与微气候来自 Whittington-Jones 等人，土壤和植物时序效应来自 Haussmann 等人。[Whittington-Jones et al. 2011](https://doi.org/10.1080/15627020.2011.11407509)；[Haussmann et al. 2018](https://doi.org/10.1016/j.ecoleng.2018.04.022)（访问日期均为：2026-08-30）

### 06 无危等级下仍缺一条趋势线

- `key`: `least-concern-unknown-trend`
- `label`: `保护`
- `title`: `无危等级下仍缺一条趋势线`
- `body`: `IUCN 仍把土豚列为无危，但评估完成于 2014 年，全球趋势和成熟个体数都未知。保护工作需要重复监测种群和猎物、减少猎捕与因围栏受损产生的迫害，并跟踪干旱是否切断南部非洲种群之间的基因交流。`
- 依据：全球等级与知识缺口来自 IUCN，地方威胁与围栏行动来自 SANBI，干旱化和基因交流来自区域遗传研究。[IUCN](https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en)；[SANBI](https://speciesstatus.sanbi.org/assessment/last-assessment/2287/)；[Epps et al. 2024](https://doi.org/10.1111/ddi.13792)（访问日期均为：2026-08-30）

## 实施验收

六张图均使用 1536 × 1024、sRGB、无 alpha 通道的源 PNG 和运行时 WebP；完整生成提示、反向约束和再生成检查项见[素材 README](../../src/assets/source/species/aardvark/README.md)。

| 画面 | 源文件 | 运行时文件 | 必检边界 |
| --- | --- | --- | --- |
| 暮色洞口封面 | `src/assets/source/species/aardvark/01-dusk-burrow-foraging-source.png` | `public/images/species/aardvark/01-dusk-burrow-foraging.webp` | 整体入画；长耳、管吻、拱背、粗尾可读 |
| 全身诊断侧影 | `src/assets/source/species/aardvark/02-full-body-diagnostic-profile-source.png` | `public/images/species/aardvark/02-full-body-diagnostic-profile.webp` | 不出现猪蹄、鳞甲、蓬松巨尾或象鼻 |
| 挖开土质丘壁 | `src/assets/source/species/aardvark/03-termite-mound-excavation-source.png` | `public/images/species/aardvark/03-termite-mound-excavation.webp` | 不由画面量化力量、速度或猎物数 |
| 细长舌探入土孔 | `src/assets/source/species/aardvark/04-sticky-tongue-termite-feeding-source.png` | `public/images/species/aardvark/04-sticky-tongue-termite-feeding.webp` | 只有一条连续的舌；不用像素证明黏性或长度 |
| 成体与单只幼体 | `src/assets/source/species/aardvark/05-mother-single-juvenile-source.png` | `public/images/species/aardvark/05-mother-single-juvenile.webp` | 不用画面确定性别、亲子关系、日龄或窝仔数 |
| 白昼地下洞室剖面 | `src/assets/source/species/aardvark/06-daytime-burrow-chamber-cutaway-source.png` | `public/images/species/aardvark/06-daytime-burrow-chamber-cutaway.webp` | 不把剖面当作深度、长度、入口数或土层的测量图 |

落库验收顺序：核对 `Species` 的六阶分类、`LC / unknown / 2014`、42 国、体尺、六段故事、四张数字卡、六张图及近邻来源；确认 `npm run typecheck`、`npm test`、`npm run build` 全部通过，再删除 `docs/todo.md` 中的“土豚 _Orycteropus afer_”条目。
