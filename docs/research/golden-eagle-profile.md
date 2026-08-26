# 金雕（*Aquila chrysaetos*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**金雕**
- 推荐展示英文名：**Golden Eagle**
- 接受学名：***Aquila chrysaetos* (Linnaeus, 1758)**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图规定科学边界
- 分类口径：IOC World Bird List v15.2；中文名同时核对 IOC v15.2 多语言表
- 保护口径：结构化字段只记录 IUCN/BirdLife 2021 全球评估；欧洲与中国区域评估、国际公约及中国法律等级另行说明
- 数字口径：全球成熟个体数是 BirdLife 2021 的推断区间，资料质量标为 `poor`；北美尺寸来自 Cornell 两性共同参考范围，不冒充六亚种的全球极值
- 时间口径：本文所称“当前”截至 **2026-08-26**；评估年、数据年和检索年不得互换

## 结论摘要

### 名称、接受名与分类

IOC v15.2 接受 ***Aquila chrysaetos***，英文名为 **Golden Eagle**，分布摘要为北美、中美洲与古北界广布。分类路径为动物界—脊索动物门—鸟纲—鹰形目—鹰科—雕属。IOC 多语言表中的简体中文名是 **金雕**，繁体中文名是 **金鵰**；产品应写 `zh: '金雕'`，把 `金鵰` 作为检索别名。“金鹰”在中文语境中常作普通词或机构名，不建议收入物种别名。[IOC World Bird List v15.2](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [IOC raptors list](https://www.worldbirdnames.org/new/bow/raptors/)

推荐名称字段：

```ts
names: {
  zh: '金雕',
  en: 'Golden Eagle',
  aliases: ['金鵰'],
}
```

IOC v15.2 承认六个亚种，适合放在研究说明中，不应给无明确产地的生成图强行指定亚种：

| 亚种 | IOC v15.2 分布摘要 |
| --- | --- |
| *A. c. chrysaetos* | 欧洲至亚洲中北部 |
| *A. c. kamtschatica* | 亚洲东北部 |
| *A. c. japonica* | 朝鲜半岛与日本 |
| *A. c. daphanea* | 中亚 |
| *A. c. homeyeri* | 伊比利亚半岛、北非，经中东至伊朗与乌兹别克斯坦 |
| *A. c. canadensis* | 阿拉斯加、加拿大、美国西部至墨西哥中西部 |

产品目前没有亚种字段。页面可写“IOC v15.2 承认六亚种”，不能把全种尺寸、趋势或分布自动归到任一亚种。

### 全球 IUCN：LC、stable、2021、无 criteria code

BirdLife International 的 2021 全球评估将金雕列为 **Least Concern（LC，无危）**，全球趋势为 **Stable（稳定）**。记录没有受胁标准代码，因此结构化字段应省略 `criteria`，不能填 `LC`、空字符串或中国区域评估标准。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22696060A202078899.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos)

```ts
conservation: conservation('LC', 'stable', 2021)
```

BirdLife 的判断依据是：分布范围极大，全球趋势看似稳定，种群也远高于受胁等级的规模阈值。评估把全球成熟个体放在 **85,000—160,000** 区间；该数字的质量字段是 `poor`，推导方式是 `inferred`。其依据包括 Partners in Flight 的全球个体估计和欧洲繁殖对估计再外推，并明确要求进一步验证。产品可以在带方法说明的统计卡中展示该区间，也可填入 `metrics.estimatedMatureIndividuals`，但不能写成“2021 年普查到 8.5万—16万只”。[BirdLife assessment history](https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos)

### 全球、欧洲与中国是三套空间口径

BirdLife 的 2021 欧洲评估把欧洲繁殖种群列为 **LC / increasing**，估算 **19,200—25,600** 只成熟个体；EU28 口径则为 **10,400—12,500** 只成熟个体且趋势上升。这些区域数字不能取代全球 IUCN 字段。[European Red List of Birds 2021](https://www.birdlife.org/wp-content/uploads/2022/05/BirdLife-European-Red-List-of-Birds-2021.pdf.pdf)

中国生态环境部与中国科学院发布的《中国生物多样性红色名录—脊椎动物卷（2020）》把金雕列为 **VU**，标准为 **A2bcde+3bcde+4bcde,C2a(i)**。这是一项中国区域评估，不是 IUCN 全球状态。[中国生物多样性红色名录—脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [发布公告](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/t20230522_1030745.html)

2021 年《国家重点保护野生动物名录》把金雕列为**国家一级重点保护野生动物**。法律保护等级不等于红色名录灭绝风险等级，也不能写进 `conservation.code`。[国家林业和草原局、农业农村部公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [名录附件](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

## 分布、迁徙与生境

### 跨北半球的常规范围

金雕横跨古北界和新北界，并延伸到北非、西亚、喜马拉雅—青藏高原、东北亚、日本列岛及墨西哥。北美繁殖范围主要覆盖阿拉斯加、加拿大和美国西部，向南到墨西哥中西部；欧洲、北非与亚洲分布多呈山地、丘陵和开阔地带的斑块。IOC、BirdLife 与 CMS 的国家清单合计很长，其中还包含通道、越冬或偶见记录，产品的 `countries` 应明确为代表性常规范围国家，不应声称是完整国别名录。[IOC v15.2](https://www.worldbirdnames.org/new/bow/raptors/) [BirdLife](https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos) [CMS](https://www.cms.int/species/aquila-chrysaetos)

金雕不是所有个体都长距离迁徙。多数中低纬度成鸟留居或作局地、垂直移动；阿拉斯加、加拿大北部、芬诺斯堪的纳维亚和俄罗斯北部等高纬种群会南迁。北美追踪研究在落基山脉东缘识别出高使用率走廊，一部分个体的夏、冬活动区却在走廊两端广泛散开。安全文案是“部分高纬种群迁徙，留居、扩散和季节移动并存”，不能把 BirdLife 的 `Full Migrant` 汇总标签解释成每只金雕都迁徙。[Birds of the World](https://doi.org/10.2173/bow.goleag.02) [Bedrosian et al. 2018](https://doi.org/10.1371/journal.pone.0205204) [USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos)

推荐结构化分布：

- `realms: ['terrestrial']`。金雕可沿河谷活动或掠食水边动物，但不以淡水或海洋作为生活史主体。
- `continents: ['亚洲', '欧洲', '北美洲', '非洲']`。
- `regions` 应覆盖北美北方与西部、欧洲山地与北欧、北非—西亚、中亚—喜马拉雅、东北亚，而不是只写一个“北半球”。
- `countries` 采用代表性常规范围国家，并在 `range` 中注明非穷举；不要把所有迷鸟国家收入筛选字段。
- 不设置 `distribution.center`。单点无法代表跨两大动物地理界、随季节与年龄变化的分布，也会被误读为丰度中心。

### 推荐生境

BirdLife 把温带草地列为 `major` 生境，还记录岩石地带、干旱及高海拔灌丛、热荒漠、北方林和温带林。USFWS 将其概括为从苔原、草地、间断森林与林灌镶嵌，一直延伸到荒漠和峡谷；共同条件是开阔视野、可利用猎物以及附近的山坡、崖壁、岩台或大树。金雕通常回避连续密林和高密度开发区。[BirdLife](https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos) [USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos)

1. **温带草原、草甸与欧亚草原**：主要觅食生境；开阔地面有利于发现野兔、旱獭、地松鼠等猎物。
2. **山地、崖壁、岩峰与峡谷**：提供山脊升力、观察点及崖台巢址；“山地猛禽”不等于只生活在高山。
3. **荒漠、半荒漠与干旱灌丛**：北美西南部、北非、西亚和中亚常见的开阔猎场，猎物密度会随降水和植被改变。
4. **苔原、高山草甸与林线以上开阔地**：高纬繁殖与高海拔活动环境；不能把终年冰雪当成所有北方巢区的固定背景。
5. **疏林、林缘与河岸镶嵌景观**：大树可供筑巢和停栖，林缘可供狩猎；连续封闭林冠通常不利于地面猎物搜索。

## 外形、尺寸与图像鉴别边界

### 成年与幼年羽色

成鸟通体以深褐色为主，后头和后颈有金褐色羽毛；“金”集中在头后部和颈背，不是全身金黄，也不是白头海雕式白头。喙末端深色，蜡膜与足为黄色，跗跖一直有羽毛覆盖。雌鸟平均大于雄鸟，但单幅画面不能仅凭大小判定性别。[USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos) [Cornell identification](https://www.allaboutbirds.org/guide/Golden_Eagle/id)

幼鸟和亚成鸟也以深褐色为主，尾基与初级飞羽基部常有界线较清楚的白斑，尾端保留宽暗带。白斑会随年龄变化，且某些观察角度不完全可见。生成图若标为成鸟，应去掉规则的白色翼斑和白尾基；若标为幼鸟，则必须同时保留深色尾端带，不能画成白尾海雕。[Cornell identification](https://www.allaboutbirds.org/guide/Golden_Eagle/id)

飞行轮廓为长而宽的双翼、分开的“手指状”翼尖、相对较小的前伸头部和较长尾部。滑翔与盘旋时双翼可轻微上举成浅 V；不要画成秃鹫的短尾、海雕的巨大前伸头部或隼类尖窄翼。[Cornell identification](https://www.allaboutbirds.org/guide/Golden_Eagle/id)

### 量化字段建议

Cornell 北美物种指南给出的两性共同范围为体长 **70—84 厘米**、体重 **3,000—6,125 克**、翼展 **185—220 厘米**。这些数值适合当前 schema 的比较字段，但来源以北美个体为主，不是六亚种的全球极值包络。[Cornell identification](https://www.allaboutbirds.org/guide/Golden_Eagle/id)

| 字段 | 推荐值 | 边界说明 |
| --- | --- | --- |
| `measurements.length` | 70—84 cm | Cornell 两性共同范围；不作性别判定。 |
| `measurements.weight` | 3—6.125 kg | Cornell 两性共同范围；季节、胃内容物和个体状态会改变体重。 |
| `measurements.wingspan` | 185—220 cm | Cornell 两性共同范围。 |
| `metrics.adultLengthCm` | `[70, 84]` | 用于粗粒度比较。 |
| `metrics.adultMassKg` | `[3, 6.125]` | 用于粗粒度比较。 |
| `metrics.wingspanCm` | `[185, 220]` | 与展示范围一致。 |
| `metrics.estimatedMatureIndividuals` | `[85000, 160000]` | BirdLife 2021 的低质量推断区间；必须在统计卡说明方法。 |
| `metrics.elevationM` | 暂不填 | BirdLife 评估史写 0—4000 米，现行生态文本又记录喜马拉雅最高 6200 米；一个无注释字段无法区分常规范围与极端记录。 |
| `metrics.lifespanYears` | 不填 | “野外约 30 年”是可达寿命概述，不是群体寿命范围。 |
| `metrics.topSpeedKph` | 不填 | 网络常见高速数字混合俯冲、风助地速与测量条件，不适合无条件排序。 |

## 翱翔、狩猎与食性

金雕依靠热气流和山脊抬升气流减少长距离飞行中的拍翼需求。迁徙鸟常在白天沿崖线、山脊和陡坡移动，滑翔时在上升气流之间转换。它们并非一直高空盘旋，也会贴近地面低飞、从岩石或树木伏击。画面可以表现风塑草和云影，不能把气流画成发光螺旋或固定导航轨迹。[USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos) [Bedrosian et al. 2018](https://doi.org/10.1371/journal.pone.0205204)

食性随地区和季节改变。常见猎物包括兔、野兔、地松鼠、旱獭和草原犬鼠，也捕食鸟类、爬行动物及其他中小型脊椎动物，并利用腐肉。`diet.types` 适合写 `carnivore`；不能因它吃腐肉就写成专性食腐动物，也不能把一种猎物设成全球固定主食。[USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos) [Birds of the World](https://doi.org/10.2173/bow.goleag.02)

金雕通常单独或成对活动。它从高空、低空或停栖点寻找地面猎物，俯冲时伸出双足抓取；自然狩猎失败很常见。图像应表现接近或追猎，不需要血腥接触，也不能画成以喙先咬住猎物。

## 繁殖、巢址与幼鸟

配对个体会在繁殖领域内保有一个以上备用巢，在不同年份使用、维护或扩大。巢多位于崖台或大树，也可出现在塔架等人工结构；部分缺乏崖壁和大树的开阔地区还记录到地面巢。产品应把崖巢作为清晰的代表性场景，不把它写成唯一巢型。[USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos) [BirdLife](https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos)

USFWS 汇总的窝卵数为 **1—4 枚**，两枚最常见；孵化期约 **41—45 天**，双亲都会孵卵，雌鸟承担多数时间。幼鸟约在孵化后 **6.5—12 周**离巢，随后仍依赖亲鸟一段时间。Cornell 北美资料给出的单季通常为一窝，巢和时间数据会随纬度、食物与天气改变。[USFWS](https://www.fws.gov/species/golden-eagle-aquila-chrysaetos) [Cornell life history](https://www.allaboutbirds.org/guide/Golden_Eagle/lifehistory)

长寿、晚熟和较低的年幼鸟产出让成鸟与亚成鸟额外死亡具有累积效应。产品可以解释恢复速度受生活史限制，不能凭一个巢的雏数推断整个种群生产力。

## 威胁、保护等级与行动

### 证据边界

BirdLife 当前全球威胁表列出持续的电力线、可再生能源、迫害控制、部分土地利用变化、污染、疾病及气候相关生境改变。全球状态仍为 LC，这只表示尚未触发全球受胁阈值，不表示每个区域安全，也不表示人为死亡可以无限增加。[BirdLife](https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos)

美国西部的一项整合种群模型估计，已确定死因样本中，金雕一岁以后约 **74%** 的死亡与人类活动有关；主要形式包括射杀、碰撞、触电和中毒。该结果来自美国西部，不能直接当作全球比例。研究同时指出，当前额外死亡已接近模型估计的可持续上限，新增损失若无缓解可能不可持续。[Millsap et al. 2022](https://doi.org/10.1002/eap.2544)

北美 38 个州、1,210 只白头海雕与金雕的铅研究发现，两种鹰的反复铅暴露都很常见；模型估计现有铅中毒水平使金雕种群年增长率降低约 **0.8%**。铅弹碎片留在猎物尸体或内脏堆中，是食腐金雕的暴露路径之一。该研究覆盖北美，不能写成全球所有地区的同一暴露率。[Slabe et al. 2022](https://doi.org/10.1126/science.abj3068) [USGS publication record](https://www.usgs.gov/publications/demographic-implications-lead-poisoning-eagles-across-north-america)

加州 Altamont Pass 风能区死亡个体的同位素与遗传分析表明，至少四分之一来自当地以外的新近迁入者，模型显示局地表面稳定依赖大陆尺度补充。这个案例说明局地产能项目可影响远距离来源种群，但不能外推为每座风机都造成相同死亡率。[Katzner et al. 2017](https://doi.org/10.1111/cobi.12836)

### 推荐威胁字段

1. 非法射杀、投毒、捕捉及针对猛禽的迫害；强度随国家和土地利用制度改变。
2. 配电杆触电，以及电线、车辆、风机和其他结构碰撞。
3. 摄入含铅弹药碎片的尸体或内脏，并接触抗凝血灭鼠剂等污染物。
4. 风能、油气、矿业、道路及高密度开发的不当选址，造成死亡、干扰或有效生境损失。
5. 草地、灌丛与开放林地转化、破碎或不适当植被演替，连同关键猎物下降。
6. 繁殖巢、夜栖地和主要觅食地附近的人为干扰。
7. 干旱、火情和气候相关生境变化对猎物、繁殖与移动的区域性影响；全球幅度仍不确定。

### 推荐保护行动

- 保护繁殖领域、崖巢、大树巢、主要夜栖点、觅食地和迁徙走廊，按当地证据设置季节性缓冲区。
- 在高风险地段优先改造配电杆，隔离裸露带电部件并采用适合大型猛禽的安全间距；新建线路从设计阶段避开高使用率地点。[USFWS Golden Eagle Science](https://www.fws.gov/project/golden-eagle-science-west)
- 以非铅弹药、猎后内脏和未回收尸体处理等措施减少铅暴露，并用现场监测验证效果。
- 风能项目先避让高密度繁殖地、狩猎区和迁徙通道，再通过项目前调查、运行期死亡监测、适用的停机或其他缓解及补偿措施管理剩余风险。
- 执行反盗猎、反投毒和贸易管制；跨行政区共享死亡、救护、执法与标记追踪资料。
- 维护开阔生境和本地猎物群落，避免把全面造林、过度放牧或完全弃牧当成所有地区的通用方案。
- 使用巢占用率、繁殖成功、年龄别生存、卫星追踪和标准化调查监测趋势，保留方法、年份和空间范围。
- 中国项目执行国家一级重点保护野生动物的许可和干扰管控；国际贸易遵守 CITES 附录 II，迁徙种群合作可参照 CMS 附录 II。[CMS](https://www.cms.int/species/aquila-chrysaetos) [CITES Appendices](https://cites.org/eng/app/appendices.php)

## 六段故事文案

下列六段可原样进入 `storySections`，顺序同时对应六张图的叙事进程。

1. **金色只落在后颈**：成鸟并非通体金黄。深褐色体羽之间，后头和后颈的金褐羽在侧光下最醒目；幼鸟的尾基与翼下还常有界线清楚的白斑。羽色能提示年龄阶段，单幅图却不足以精确判龄。
2. **山脊把风送到翼下**：金雕借热气流和山脊抬升气流滑翔，沿开阔地形搜索猎物或迁徙。高纬种群可远距离南迁，许多中低纬成鸟则留居；一个物种内部同时存在迁徙、扩散和局地移动。
3. **猎场不只在高山**：草原、荒漠灌丛、苔原和疏林边缘都能成为猎场。兔、野兔、地松鼠和旱獭常占食谱重要位置，鸟类、爬行动物及腐肉也会被利用，具体组合取决于当地能找到什么。
4. **一片领域，几个备用巢**：一对金雕可在繁殖领域内维护多个巢，崖台、大树和少数人工结构都可能承载多年增筑的枝巢。通常一窝一至四枚卵，两枚最常见；漫长孵化和育幼限制了损失后的补充速度。
5. **全球无危，不等于处处安全**：2021 年全球评估是 LC、趋势稳定，欧洲区域趋势上升；中国 2020 红色名录却将金雕列为 VU，并实行国家一级重点保护。不同空间尺度回答不同问题，不能用一个标签遮住区域风险。
6. **许多死亡本可避免**：触电、碰撞、射杀和中毒会叠加到这种长寿猛禽身上。高风险电杆改造、减少含铅弹药残留、能源项目避让与监测、繁殖地低干扰管理，都针对可识别且可降低的风险。

## 六张图像资产：已接受文件与科学约束

六张资产已于 2026-08-26 生成并完成静态检查。PNG 源文件位于 `src/assets/source/species/golden-eagle/*-source.png`，WebP 运行文件位于 `public/images/species/golden-eagle/*.webp`；两套文件均为 **1536 × 1024、3:2、不透明 RGB、无文字**。完整最终提示词、修订记录和技术验证见 [`src/assets/source/species/golden-eagle/README.md`](../../src/assets/source/species/golden-eagle/README.md)。

共同成鸟锚点是深褐体羽、局限于后头和后颈的金褐羽、深色钩喙与黄色蜡膜、暗褐眼、黄色趾、黑爪、覆盖到趾基的跗跖羽、长宽双翼、分指状初级飞羽及较长圆尾。六图均排除白头白尾、幼鸟式大块白翼斑、裸露鳞状跗跖、猎鹰脚绊、标志、地图、文字和水印。图中个体、巢、狩猎、地点、观察者和调查结果均为代表性重建。

### 01 封面：`01-alpine-ridge-portrait.webp`

- **接受画面**：恰好一只完整成鸟站在画面右侧高山岩石上，金褐后颈、深褐身体、钩喙、覆羽跗跖和黄色趾可见；左侧保留标题空间。
- **提示词核心**：`one complete adult Golden Eagle Aquila chrysaetos on a weathered alpine rock ridge, localized golden-buff rear crown and nape, dark chocolate-brown body, feathered tarsi, bird around x=0.70, quiet mountain sky and ridge on the left, documentary natural-history photograph, 1536x1024, 3:2, no text`
- **边界**：不代表命名地点或命名个体；白头、白尾、全身金黄、裸跗跖或裁掉足尾均不合格。

### 02 成鸟飞行鉴别：`02-adult-flight-field-marks.webp`

- **接受画面**：恰好一只成鸟在开放山坡上空侧倾滑翔，双侧长宽翼、分指状翼尖、圆形带纹长尾和金褐后颈完整留在安全裁切区。
- **提示词核心**：`one complete adult Golden Eagle Aquila chrysaetos gliding and gently banking over an open mountain slope, slightly elevated three-quarter dorsal view, two broad long wings with fingered primaries, rounded subtly barred tail, visible golden nape, no large white patches, documentary flight photograph, 1536x1024, 3:2, no text`
- **边界**：本图展示成鸟场标，不再承担幼鸟白斑示意；不得出现白头、白尾基、大块白翼斑、窄尖隼翼或第二只鸟。

### 03 开放山地生境：`03-open-mountain-habitat.webp`

- **接受画面**：开阔草坡、岩壁、浅沟和远山占据主体；恰好一只小型完整成鸟停在中右侧岩石上。
- **提示词核心**：`wide generalized Holarctic upland landscape, broad treeless grass slopes, broken rocky crags, shallow ravine and scattered low scrub, exactly one small complete adult Golden Eagle perched on a middle-right outcrop, habitat at least 88 percent of visual attention, 1536x1024, 3:2, no text`
- **边界**：它只重建一种开阔山地生境，不代表整个环北区范围或真实占域记录；不画密林、城市、道路、巢或第二只鸟。

### 04 野兔狩猎接近：`04-hare-hunting-approach.webp`

- **接受画面**：恰好一只成鸟低空接近恰好一只奔跑野兔，双方之间保留开阔地面，没有接触、伤口或血液。
- **提示词核心**：`exactly one adult Golden Eagle Aquila chrysaetos making a low controlled hunting approach toward exactly one healthy running mountain hare across open upland grass and heath, both animals complete, separated by at least one eagle body length, no contact, no injury, 1536x1024, 3:2, no text`
- **边界**：只能说明一次可能的哺乳动物追猎，不能证明捕获成功，也不能把野兔写成唯一猎物。

### 05 崖台巢与幼鸟：`05-cliff-eyrie-and-eaglet.webp`

- **接受画面**：恰好一只覆羽跗跖的成鸟站在一个崖台枝巢旁，巢内恰好一只较大幼鸟；没有卵、猎物或第二只成鸟。
- **提示词核心**：`exactly one adult Golden Eagle Aquila chrysaetos attending exactly one older eaglet at one broad stick eyrie on a secluded cliff ledge, adult with golden nape and feathered tarsi, eaglet with pale down mixed with emerging dark juvenile feathers, no egg or prey, distant documentary view, 1536x1024, 3:2, no text`
- **边界**：画面不能证明亲缘、亲鸟性别、窝卵数或繁殖成功；崖台也不是唯一巢址。

### 06 远距离猛禽监测：`06-distance-raptor-monitoring.webp`

- **接受画面**：恰好两名小型观察者在远处使用一台三脚架单筒望远镜和一本记录册，恰好一只完整成鸟滑翔越过宽阔山谷；人与鸟之间保留明显距离缓冲。
- **提示词核心**：`exactly two raptor ecologists conducting non-invasive distance monitoring of exactly one adult Golden Eagle Aquila chrysaetos over a broad open mountain valley, one tripod-mounted spotting scope and one notebook, observers small at far left and complete eagle mid-right, no nest, handling, lure, drone or infrastructure, 1536x1024, 3:2, no text`
- **边界**：它只表现低干扰监测方法，不代表真实项目、人员、巢位、出现记录、丰度或趋势结果；不得出现接近、抓握、投喂、诱饵或无人机。

## 集成就绪内容方案

### 推荐关键事实

1. IOC v15.2 接受六个亚种；物种级主名仍是 *Aquila chrysaetos* / Golden Eagle / 金雕。
2. 全球 IUCN 字段为 `LC / stable / 2021`，没有 criteria code。
3. BirdLife 的 85,000—160,000 只成熟个体是低质量推断区间，不是同期全球普查。
4. 成年金雕深褐色，金褐色集中在后头和后颈；幼鸟常有白色尾基和初级飞羽基部白斑。
5. 部分高纬种群长距离迁徙，许多中低纬个体留居或只作局地、垂直移动。
6. 金雕利用草原、山地、荒漠灌丛、苔原和疏林边缘，不是只生活在雪山。
7. 全球 LC 与中国 VU、国家一级重点保护可以同时成立，因为空间与制度口径不同。

### 推荐日期常量

```ts
const GOLDEN_EAGLE_SOURCE_DATE = '2026-08-26' as const;
const GOLDEN_EAGLE_CONTENT_DATE = '2026-08-26' as const;
```

### 推荐来源数组

```ts
const GOLDEN_EAGLE_SOURCES = [
  {
    title: 'IOC World Bird List v15.2 — Master, Raptor and Multilingual Lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Aquila chrysaetos (2021 global assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22696060A202078899.en',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Golden Eagle Aquila chrysaetos',
    url: 'https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'BirdLife International 2021 — European Red List of Birds',
    url: 'https://www.birdlife.org/wp-content/uploads/2022/05/BirdLife-European-Red-List-of-Birds-2021.pdf.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Katzner et al. 2020 — Golden Eagle, Birds of the World v2.0',
    url: 'https://doi.org/10.2173/bow.goleag.02',
    kind: 'ecology',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Golden Eagle identification and measurements',
    url: 'https://www.allaboutbirds.org/guide/Golden_Eagle/id',
    kind: 'general',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish & Wildlife Service — Golden Eagle species profile',
    url: 'https://www.fws.gov/species/golden-eagle-aquila-chrysaetos',
    kind: 'ecology',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Aquila chrysaetos',
    url: 'https://www.cms.int/species/aquila-chrysaetos',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List — Vertebrates (2020)',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'China 2021 — List of National Key Protected Wild Animals',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Bedrosian et al. 2018 — Migration corridors of adult Golden Eagles',
    url: 'https://doi.org/10.1371/journal.pone.0205204',
    kind: 'distribution',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Millsap et al. 2022 — Survival, causes of death and allowable take',
    url: 'https://doi.org/10.1002/eap.2544',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Slabe et al. 2022 — Demographic implications of lead poisoning for eagles',
    url: 'https://doi.org/10.1126/science.abj3068',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
  {
    title: 'Katzner et al. 2017 — Golden Eagle fatalities and wind-energy consequences',
    url: 'https://doi.org/10.1111/cobi.12836',
    kind: 'conservation',
    accessedAt: GOLDEN_EAGLE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

### 完整 `Species` 对象草案

六个媒体路径已经与现存资产一一核对；焦点坐标仍是内容草案，集成时应结合产品实际裁切复核。

```ts
{
  id: 'species-aquila-chrysaetos',
  slug: 'golden-eagle',
  names: {
    zh: '金雕',
    en: 'Golden Eagle',
    aliases: ['金鵰'],
  },
  scientificName: 'Aquila chrysaetos',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Accipitriformes', '鹰形目'),
    taxon('Accipitridae', '鹰科'),
    taxon('Aquila', '雕属'),
  ),
  conservation: conservation('LC', 'stable', 2021),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲', '欧洲', '北美洲', '非洲'],
    regions: [
      '阿拉斯加、加拿大与北美西部',
      '欧洲山地、北欧与地中海地区',
      '北非与西亚',
      '中亚草原、荒漠山地与青藏高原—喜马拉雅',
      '蒙古、西伯利亚、东北亚与日本列岛',
    ],
    countries: [
      '加拿大',
      '美国',
      '墨西哥',
      '俄罗斯',
      '中国',
      '蒙古',
      '哈萨克斯坦',
      '吉尔吉斯斯坦',
      '塔吉克斯坦',
      '乌兹别克斯坦',
      '阿富汗',
      '巴基斯坦',
      '印度',
      '尼泊尔',
      '不丹',
      '日本',
      '朝鲜',
      '韩国',
      '挪威',
      '瑞典',
      '芬兰',
      '英国',
      '西班牙',
      '法国',
      '意大利',
      '希腊',
      '土耳其',
      '伊朗',
      '摩洛哥',
      '阿尔及利亚',
      '突尼斯',
      '埃及',
    ],
    range:
      '广布于北美、欧洲、北非和亚洲北部至中部，并延伸到西亚、中亚、喜马拉雅—青藏高原、东北亚、日本及墨西哥中西部。许多中低纬成鸟留居，高纬种群可南迁，幼鸟还会远距离扩散。国家列表为代表性常规范围，不含完整的通道、偶见和迷鸟记录。',
  },
  habitats: [
    {
      name: '温带草原、草甸与欧亚草原',
      realm: 'terrestrial',
      description:
        '主要觅食环境；开阔视野和地面猎物让金雕能从高空、低空或停栖点发现兔、野兔、地松鼠和旱獭。',
      isPrimary: true,
    },
    {
      name: '山地、崖壁、岩峰与峡谷',
      realm: 'terrestrial',
      description:
        '山脊和崖壁产生可利用的抬升气流，岩台可供筑巢；金雕也使用丘陵及低海拔崖地，不只生活在高山。',
    },
    {
      name: '荒漠、半荒漠与干旱灌丛',
      realm: 'terrestrial',
      description:
        '北美西南部、北非、西亚和中亚常见的开阔猎场；降水、植被和猎物波动会改变使用强度。',
    },
    {
      name: '苔原、高山草甸与林线以上开阔地',
      realm: 'terrestrial',
      description:
        '供高纬和高海拔种群繁殖、狩猎及季节移动；北方巢区并非全年覆盖冰雪。',
    },
    {
      name: '疏林、林缘与河岸镶嵌景观',
      realm: 'terrestrial',
      description:
        '大树可承载枝巢，林缘和开阔斑块可供狩猎；连续密林和高密度开发区通常不利。',
    },
  ],
  measurements: {
    length: {
      min: 70,
      max: 84,
      unit: 'cm',
      note: 'Cornell 北美物种指南的两性共同范围，不代表六亚种全球极值',
    },
    weight: {
      min: 3,
      max: 6.125,
      unit: 'kg',
      note: 'Cornell 北美物种指南的两性共同范围；雌鸟平均大于雄鸟',
    },
    wingspan: {
      min: 185,
      max: 220,
      unit: 'cm',
      note: 'Cornell 北美物种指南的两性共同范围',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: [
      '兔与野兔',
      '地松鼠与草原犬鼠',
      '旱獭及其他中小型哺乳动物',
      '鸟类',
      '爬行动物',
      '腐肉',
    ],
    description:
      '机会性肉食猛禽，常捕食兔、野兔、地松鼠、旱獭等地面动物，也取食鸟类、爬行动物及腐肉；食谱随地区、季节和猎物供应改变。',
  },
  activity: [
    '昼行性',
    '通常单独或成对活动',
    '利用热气流和山脊升力翱翔',
    '从空中、低空或停栖点狩猎',
    '部分高纬种群长距离迁徙',
    '幼鸟可远距离扩散',
  ],
  tags: [
    '北半球',
    '鹰形目',
    '大型猛禽',
    '开阔地猎手',
    '部分种群迁徙',
    'IUCN 无危',
    '中国国家一级重点保护野生动物',
    'CITES 附录 II',
    'CMS 附录 II',
  ],
  summary:
    '横跨北美、欧洲、北非和亚洲开阔地带的大型猛禽。成鸟深褐，后颈金褐；部分高纬种群远距离迁徙。全球评估为无危且趋势稳定，中国区域评估为易危。',
  description:
    '金雕利用草原、山地、荒漠灌丛、苔原和疏林边缘寻找地面猎物，并借助热气流和山脊升力作低成本滑翔。成鸟以深褐色为主，金褐色集中在后头和后颈；幼鸟常有白色尾基和初级飞羽基部白斑。一对金雕可在繁殖领域内维护多个备用巢，巢址包括崖台、大树和少数人工结构。2021 年 IUCN/BirdLife 全球评估为 LC、趋势稳定，成熟个体估算为 85,000—160,000，但资料质量低且来自推断；中国 2020 红色名录则列为 VU。触电、碰撞、射杀、中毒、能源设施选址和开放生境变化仍需区域性管理。',
  storySections: [
    {
      key: 'golden-nape-and-age',
      label: '形态与年龄',
      title: '金色只落在后颈',
      body:
        '成鸟并非通体金黄。深褐色体羽之间，后头和后颈的金褐羽在侧光下最醒目；幼鸟的尾基与翼下还常有界线清楚的白斑。羽色能提示年龄阶段，单幅图却不足以精确判龄。',
    },
    {
      key: 'uplift-and-movement',
      label: '飞行与迁徙',
      title: '山脊把风送到翼下',
      body:
        '金雕借热气流和山脊抬升气流滑翔，沿开阔地形搜索猎物或迁徙。高纬种群可远距离南迁，许多中低纬成鸟则留居；一个物种内部同时存在迁徙、扩散和局地移动。',
    },
    {
      key: 'open-ground-hunter',
      label: '生境与食性',
      title: '猎场不只在高山',
      body:
        '草原、荒漠灌丛、苔原和疏林边缘都能成为猎场。兔、野兔、地松鼠和旱獭常占食谱重要位置，鸟类、爬行动物及腐肉也会被利用，具体组合取决于当地能找到什么。',
    },
    {
      key: 'alternate-eyries',
      label: '繁殖',
      title: '一片领域，几个备用巢',
      body:
        '一对金雕可在繁殖领域内维护多个巢，崖台、大树和少数人工结构都可能承载多年增筑的枝巢。通常一窝一至四枚卵，两枚最常见；漫长孵化和育幼限制了损失后的补充速度。',
    },
    {
      key: 'status-at-different-scales',
      label: '评估尺度',
      title: '全球无危，不等于处处安全',
      body:
        '2021 年全球评估是 LC、趋势稳定，欧洲区域趋势上升；中国 2020 红色名录却将金雕列为 VU，并实行国家一级重点保护。不同空间尺度回答不同问题，不能用一个标签遮住区域风险。',
    },
    {
      key: 'preventable-mortality',
      label: '保护',
      title: '许多死亡本可避免',
      body:
        '触电、碰撞、射杀和中毒会叠加到这种长寿猛禽身上。高风险电杆改造、减少含铅弹药残留、能源项目避让与监测、繁殖地低干扰管理，都针对可识别且可降低的风险。',
    },
  ],
  keyFacts: [
    'IOC World Bird List v15.2 承认金雕的六个亚种。',
    'IUCN/BirdLife 2021 年全球评估为无危，趋势稳定，未触发受胁标准代码。',
    '全球成熟个体估算为 85,000—160,000，但 BirdLife 将资料质量标为 poor、推导方式标为 inferred。',
    '成鸟深褐，金褐色集中在后头和后颈；幼鸟常有白色尾基和翼部白斑。',
    '部分高纬种群长距离迁徙，许多中低纬个体留居或只作局地移动。',
    '一对金雕可在同一繁殖领域内维护并轮换使用多个巢。',
    '中国 2020 红色名录列为易危，2021 年国家重点保护野生动物名录列为一级。',
    'CITES 与 CMS 均将金雕列入附录 II；两个公约的附录体系分别管理国际贸易与迁徙物种合作。',
  ],
  threats: [
    '非法射杀、投毒、捕捉及针对猛禽的迫害',
    '配电杆触电，以及电线、车辆、风机和其他结构碰撞',
    '摄入含铅弹药碎片的尸体或内脏，并接触抗凝血灭鼠剂等污染物',
    '风能、油气、矿业、道路及高密度开发的不当选址造成死亡、干扰或有效生境损失',
    '草地、灌丛和开放林地转化、破碎或植被结构改变，以及关键猎物下降',
    '繁殖巢、夜栖地和主要觅食地附近的人为干扰',
    '干旱、火情和气候相关生境变化对猎物、繁殖与移动的区域性影响',
  ],
  conservationActions: [
    '保护繁殖领域、巢址、夜栖点、主要觅食地和迁徙走廊，并按当地证据设置季节性缓冲区',
    '在高风险地段优先改造配电杆，隔离裸露带电部件并采用适合大型猛禽的安全间距',
    '以非铅弹药、猎后内脏和未回收尸体处理等措施减少铅暴露，并监测效果',
    '风能和其他能源项目先避让高使用率地点，再管理和补偿剩余风险',
    '执行反盗猎、反投毒和贸易管制，跨行政区共享死亡、救护、执法与追踪资料',
    '维护开阔生境和本地猎物群落，依据地区证据管理放牧、植被演替与火情',
    '用巢占用率、繁殖成功、年龄别生存、卫星追踪和标准化调查监测趋势',
    '在中国按国家一级重点保护野生动物要求管理许可、救护、利用和巢区干扰',
  ],
  metrics: {
    adultLengthCm: [70, 84],
    adultMassKg: [3, 6.125],
    wingspanCm: [185, 220],
    estimatedMatureIndividuals: [85000, 160000],
  },
  featuredStats: [
    {
      key: 'wingspan',
      label: '北美参考翼展',
      value: '185—220',
      unit: '厘米',
      note: 'Cornell 两性共同范围，不是六亚种全球极值',
    },
    {
      key: 'mass',
      label: '北美参考体重',
      value: '3—6.125',
      unit: '千克',
      note: 'Cornell 两性共同范围；雌鸟平均较大',
    },
    {
      key: 'incubation',
      label: '孵化期约',
      value: '41—45',
      unit: '天',
      note: '双亲都会孵卵，雌鸟承担多数时间',
    },
    {
      key: 'mature-population',
      label: '全球成熟个体估算',
      value: '8.5万—16万',
      note: 'BirdLife 2021 低质量推断区间，不是同期全球普查',
    },
  ],
  media: {
    image: './images/species/golden-eagle/01-alpine-ridge-portrait.webp',
    alt: '清晨岩脊上，一只完整成年金雕站在画面右侧，深褐体羽与后颈局部金褐羽清晰，左侧是开阔山谷和天空',
    focalPoint: { x: 0.7, y: 0.52 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/golden-eagle/02-adult-flight-field-marks.webp',
        alt: '一只完整成年金雕在开放山坡上空侧倾滑翔，长宽双翼、分指状翼尖、圆形带纹尾和金褐后颈清晰',
        title: '长宽翼与圆形长尾',
        caption:
          '成鸟没有幼鸟式大块白翼斑和白尾基；滑翔时长宽双翼、分指状翼尖和较长圆尾构成主要轮廓。',
        focalPoint: { x: 0.59, y: 0.46 },
      },
      {
        image: './images/species/golden-eagle/03-open-mountain-habitat.webp',
        alt: '开阔草坡、岩壁、浅沟和远山占据画面，一只小型完整成年金雕停在中右侧岩石上',
        title: '开放山地留下猎场与巢台',
        caption:
          '草坡、低灌丛、岩壁和沟谷形成可供搜索猎物、停栖与筑巢的镶嵌景观。',
        focalPoint: { x: 0.67, y: 0.48 },
      },
      {
        image: './images/species/golden-eagle/04-hare-hunting-approach.webp',
        alt: '开阔山地草坡上，一只成年金雕低空接近一只奔跑野兔，二者之间仍有明显距离，没有接触',
        title: '从开阔地锁定地面猎物',
        caption:
          '兔、野兔、地松鼠和旱獭常是重要猎物，鸟类、爬行动物和腐肉也会进入地区性食谱。',
        focalPoint: { x: 0.51, y: 0.49 },
      },
      {
        image: './images/species/golden-eagle/05-cliff-eyrie-and-eaglet.webp',
        alt: '远距离视角下，一只成年金雕站在崖台枝巢旁，巢内一只较大幼鸟长出部分深褐幼羽',
        title: '一个领域可以有多个巢',
        caption:
          '配对个体会维护备用巢；崖台是代表性巢址，大树和少数人工结构也能承载枝巢。',
        focalPoint: { x: 0.55, y: 0.52 },
      },
      {
        image: './images/species/golden-eagle/06-distance-raptor-monitoring.webp',
        alt: '宽阔山谷左侧，两名小型观察者在远处使用一台三脚架望远镜和记录册，一只完整成年金雕在右侧滑翔',
        title: '把距离留给巢区和猛禽',
        caption:
          '远距离观察可减少干扰并记录活动；单次观察不能替代标准化长期监测，也不能证明种群趋势。',
        focalPoint: { x: 0.7, y: 0.39 },
      },
    ],
  },
  sources: GOLDEN_EAGLE_SOURCES,
  featured: true,
  publishedAt: GOLDEN_EAGLE_CONTENT_DATE,
  updatedAt: GOLDEN_EAGLE_CONTENT_DATE,
},
```

## 不确定性与暂不落库项

1. **评估日**：已确认全球评估记录为 2021 年，schema 只需年份；本研究没有把 DOI 的发布日期误写成 IUCN 现场评估日。
2. **成熟个体区间**：85,000—160,000 是 BirdLife 的低质量推断。若产品不希望排序字段携带难以显示的方法警告，可从 `metrics` 移除，只留带注释的 `featuredStats`。
3. **海拔**：BirdLife 评估史字段写最高 4000 米，生态文本另记喜马拉雅 6200 米记录。两者分别像常规范围上限与极端观察值；在找到可追溯原始记录前，不填 `metrics.elevationM`。
4. **尺寸**：70—84 厘米、3—6.125 千克、185—220 厘米来自 Cornell 北美指南，不代表六亚种全球极值，也不能仅凭尺寸判定性别或亚种。
5. **分布国家**：对象只列代表性常规范围国家。BirdLife/CMS 还列出更多常驻、越冬、通道或偶见国家；筛选产品若要求完整清单，应另行按 occurrence status 导出并去除迷鸟记录。
6. **迁徙标签**：BirdLife 汇总标签为 `Full Migrant`，生态资料清楚显示留居与迁徙种群并存。产品采用“部分高纬种群迁徙”，不把标签字面外推到所有个体。
7. **保护法规**：CITES 附录 II、CMS 附录 II 和中国国家一级重点保护是不同制度。它们均不改变全球 `conservation.code`。
8. **图像证据边界**：第 6 图只重建远距离观察方法，不提供真实出现记录、巢位、丰度或趋势。图中观察者也不代表命名机构或项目。

## 实施与验收 TODO

- [x] 在 `src/data/species.ts` 加入两项日期常量、`GOLDEN_EAGLE_SOURCES` 和完整对象；保持 `criteria` 与 `distribution.center` 缺省。
- [x] 确认 `species-aquila-chrysaetos`、`golden-eagle` 和六个媒体路径在仓库中唯一。
- [x] 已生成恰好 6 张 1536 × 1024 PNG 源图并转换为同尺寸 WebP；源文件与运行文件一一对应。
- [x] 已按资产 README 记录检查物种形态、鸟只和人员数量、完整解剖、猎物间距、巢内对象、无文字水印和 3:2 尺寸。
- [x] 第 6 图采用远距离猛禽观察场景，不再表现容易被误读为工程规范的配电设施。
- [x] 依据最终图像主体位置设置 `focalPoint`；封面焦点保留头、足和金褐后颈。
- [x] 运行静态资产检查、TypeScript 类型检查、测试和生产构建；按仓库约定未用 GUI 或无头浏览器验收。
- [x] 通过数据契约检查六段故事、1 张封面与 5 张图库图，图库不重复封面。
- [x] 核对档案将全球 LC、中国 VU、欧洲上升与中国国家一级保护分开表述。
- [x] 核对 85,000—160,000 的展示带“2021 推断、质量低、非同期普查”说明。
- [x] 于 2026-08-26 查看 IUCN/BirdLife、IOC、CITES、CMS 和中国官方名录，并分别保留评估与法规口径。
