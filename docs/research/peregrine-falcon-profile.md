# 游隼（*Falco peregrinus*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**游隼**
- 推荐展示英文名：**Peregrine Falcon**
- 接受学名：***Falco peregrinus* Tunstall, 1771**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图规定科学边界
- 分类口径：IOC World Bird List v15.2
- 保护口径：结构化字段只记录 IUCN/BirdLife 2021 全球评估；中国区域红色名录、中国法律、CITES 与 CMS 分开说明
- 数字口径：成熟个体数来自 BirdLife 2021 的初步全球外推，资料质量为 `poor`，推导方式为 `suspected`；体尺采用 Cornell 北美两性共同范围
- 速度口径：`320 km/h` 只作为有来源的高空俯冲科普值；野外雷达实测、训练鸟试验、气动模型与科普报道不能混成一个“固定最高速度”

## 结论摘要

### 名称、分类与亚种

IOC v15.2 接受 ***Falco peregrinus***，英文名为 **Peregrine Falcon**，分类路径为动物界、脊索动物门、鸟纲、隼形目、隼科、隼属。中国 2021 年《国家重点保护野生动物名录》和中国 2020 红色名录都采用中文名 **游隼**。[IOC World Bird List v15.2](https://www.worldbirdnames.org/new/bow/falcons/) [国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) [中国生物多样性红色名录：脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

“花梨鹰”是中国区域性旧名，可作检索别名；CITES 使用的英文俗名还包括 **Peregrine** 和历史性的 **Duck Hawk**。产品主名仍应使用“游隼 / Peregrine Falcon”。[吉林省野生动物名称对照](https://jllc.jl.gov.cn/zsdw/ysdwjhfyzx/ysdw_zcfg/201902/t20190220_2914871.html) [CITES species index](https://cites.org/sites/default/files/eng/resources/pub/checklist11/CITES_species_index.pdf)

推荐名称字段：

```ts
names: {
  zh: '游隼',
  en: 'Peregrine Falcon',
  aliases: ['花梨鹰', 'Peregrine', 'Duck Hawk'],
}
```

IOC v15.2 承认 **18 个亚种**：

| 亚种 | IOC v15.2 分布摘要 |
| --- | --- |
| *F. p. tundrius* | 阿拉斯加至格陵兰 |
| *F. p. pealei* | 阿留申群岛至阿拉斯加南部、加拿大西南部 |
| *F. p. anatum* | 北美苔原以南至墨西哥北部 |
| *F. p. cassini* | 南美洲西部至火地岛及福克兰群岛 |
| *F. p. peregrinus* | 欧亚大陆北部苔原以南地区 |
| *F. p. calidus* | 拉普兰至西伯利亚东北部 |
| *F. p. japonensis* | 西伯利亚东北部至日本 |
| *F. p. brookei* | 地中海地区至高加索和伊朗北部 |
| *F. p. peregrinator* | 巴基斯坦、印度、斯里兰卡至中国南部和东部 |
| *F. p. furuitii* | 日本小笠原群岛 |
| *F. p. madens* | 佛得角群岛 |
| *F. p. minor* | 摩洛哥、毛里塔尼亚及撒哈拉以南非洲 |
| *F. p. radama* | 马达加斯加和科摩罗 |
| *F. p. ernesti* | 菲律宾、大巽他群岛、新几内亚及附近岛屿、俾斯麦群岛 |
| *F. p. macropus* | 澳大利亚 |
| *F. p. nesiotes* | 所罗门群岛、瓦努阿图、新喀里多尼亚和斐济 |
| *F. p. babylonicus* | 伊朗东部至蒙古和巴基斯坦 |
| *F. p. pelegrinoides* | 加那利群岛、北非至阿拉伯半岛和伊朗西南部 |

部分旧资料写 19 个亚种，原因包括名录版本变化，以及拟游隼群在物种和亚种层面的处理差异。IOC v15.2 把 *pelegrinoides* 纳入游隼，并保留 *babylonicus* 为另一亚种。页面可以写“IOC v15.2 承认 18 个亚种”，不要把旧版 19 亚种口径混入结构化文案。[IOC falcons list](https://www.worldbirdnames.org/new/bow/falcons/)

### 全球 IUCN：LC、increasing、2021、无 criteria code

BirdLife International 的 2021 全球评估将游隼列为 **Least Concern（LC，无危）**，全球趋势为 **Increasing（上升）**。记录没有受胁标准代码，结构化字段应省略 `criteria`。[IUCN global assessment](https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T45354964A206217909.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details)

- IUCN taxon ID：`45354964`
- 当前全球 assessment ID：`206217909`
- 评估版本：`2021-3`
- DOI：`10.2305/IUCN.UK.2021-3.RLTS.T45354964A206217909.en`
- category / trend / year / criteria：`LC / increasing / 2021 / 无`

```ts
conservation: conservation('LC', 'increasing', 2021)
```

BirdLife 给出的全球成熟个体初步估算为 **248,000 至 478,000**。评估先汇总美国和加拿大约 72,000 只个体、北非 2,290 至 2,900 对、欧洲 16,100 至 31,100 对，再依据欧洲约占全球分布区 13% 作外推。BirdLife 将 `popQuality` 标为 **poor**，将 `popDerivation` 标为 **suspected**，并写明需要进一步验证。产品可把该区间写入 `metrics.estimatedMatureIndividuals`，但文案必须称其为“低质量初步估算”，不能写成全球同步普查结果。[BirdLife assessment history](https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details) [CITES CoP20 Prop. 17 supporting statement](https://cites.org/sites/default/files/documents/E-CoP20-Prop-17.pdf)

### 全球、中国和公约使用四套口径

中国生态环境部与中国科学院发布的《中国生物多样性红色名录：脊椎动物卷（2020）》把游隼列为 **NT（近危）**。该结论描述中国区域风险，不能覆盖 IUCN 全球 `LC / increasing / 2021` 字段。[中国生物多样性红色名录：脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

中国 2021 年《国家重点保护野生动物名录》把游隼列为**国家二级重点保护野生动物**。法律等级规定猎捕、利用、运输、人工繁育和救护等管理要求，它不等同于灭绝风险等级。[国家林业和草原局、农业农村部公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [名录附件](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)

CITES 当前把游隼列入**附录 I**。加拿大和美国曾在 CoP20 提议把它转入附录 II；缔约方把提案修改为野生来源零出口配额后进行秘密表决，最终以 61 票赞成、74 票反对、7 票弃权否决。因此，2026 年 3 月 5 日生效的 CoP20 修订没有改变游隼的附录 I 身份。[CITES 2026 Appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [Canada official CoP20 outcomes](https://www.canada.ca/en/environment-climate-change/services/convention-international-trade-endangered-species/conference-of-parties/20-species-proposal-outcomes.html)

CMS 自 1979 年起把游隼列入**附录 II**。CMS 附录 II关注迁徙种群跨国合作，CITES 附录 I 管理国际贸易。两个“附录”不能互换。[CMS species page](https://www.cms.int/species/falco-peregrinus)

## 分布、迁徙与生境

### 除南极洲外六大洲广布

IOC 把游隼概括为世界性广布。Cornell 记录它出现于除南极洲外的各大洲和许多海岛；BirdLife 的常规、繁殖、越冬与通道国家清单覆盖两百多个国家和地区。亚马孙盆地内部、撒哈拉腹地和部分广阔无巢址平原并非连续高密度分布区，全球分布图也不能解释为每个地点都有稳定繁殖种群。[IOC v15.2](https://www.worldbirdnames.org/new/bow/falcons/) [Cornell overview](https://www.allaboutbirds.org/guide/Peregrine_Falcon) [BirdLife](https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details)

中国位于多条种群分布和迁徙范围内。IOC 将 *peregrinator* 的范围延伸至中国南部和东部，将 *japonensis* 的范围写至日本，并将 *babylonicus* 的范围写至蒙古；北方 *calidus* 等种群还会南迁。中国各地记录同时包含繁殖鸟、留鸟、旅鸟和冬候鸟。产品宜写“中国多地有繁殖、迁徙停歇或越冬记录，居留型随地区和种群改变”，不要把全国都描述成全年常见。[IOC falcons list](https://www.worldbirdnames.org/new/bow/falcons/) [中国科学院动物研究所迁徙研究](https://ioz.cas.cn/gb2018/xwdt/kyjz/202103/t20210303_5968528.html)

推荐结构化分布：

- `realms: ['terrestrial']`。游隼常在海岸、岛屿、泥滩、湖岸和河谷捕食，但它以陆地巢址和空中捕猎为生活史主体。
- `continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲']`。
- `regions` 覆盖北极与北方森林带、欧洲和地中海、亚洲、非洲、美洲及澳大拉西亚。
- `countries` 采用代表性常规范围国家，在 `range` 中注明非穷举。
- 不设置 `distribution.center`。单点无法代表跨六洲、包含留居和洲际迁徙种群的范围。

### 迁徙策略随纬度与种群改变

BirdLife 将全种汇总标签写为 `Full Migrant`，正文同时指出温带和北极种群迁徙，低纬度和南半球种群倾向留居。北方个体可从北美迁往南美、从欧洲迁往非洲、从北亚迁往南亚和印度尼西亚；迁徙个体多单独或成对飞行。[BirdLife ecology](https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details)

Gu 等人在 56 只北极游隼的六年卫星追踪中识别出五条主要迁徙路线。西部两个研究种群平均迁徙约 3,600 千米，东部四个研究种群平均约 6,400 千米；这些数字只代表论文中的北极样本。研究还发现路线具有种群和个体重复性，并预测欧亚西部北极种群可能受未来变暖影响。[Gu et al. 2021, Nature](https://doi.org/10.1038/s41586-021-03265-0) [中国科学院动物研究所研究说明](https://ioz.cas.cn/gb2018/xwdt/kyjz/202103/t20210303_5968528.html)

安全文案是“高纬种群可作洲际长距离迁徙，中低纬和南半球种群多留居或作局地移动”。页面不能把 `Full Migrant` 解释成每只游隼都迁徙。

### 推荐生境

BirdLife 把繁殖期岩壁、山峰等岩石地带列为 `major`，并列出苔原、草地、荒漠、灌丛、温带和热带干林、城市、海崖、岛屿、泥滩、盐沼、湖泊、河流及沼泽。Cornell 在北美记录了崖壁、海岸、河流、城市高层建筑和迁徙期开放生境。产品可压缩为五类：[BirdLife habitats](https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details) [Cornell life history](https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory)

1. **崖壁、岩峰与峡谷**：主要自然繁殖环境；裸岩台提供浅刮巢位，高处也便于起飞和观察。
2. **海岸、海岛、泥滩与湿地边缘**：迁徙和越冬期常有密集滨鸟、水鸟及海鸟猎物；部分种群在海崖繁殖。
3. **苔原、草地、灌丛和荒漠开阔地**：北方繁殖区和内陆猎场需要开阔空域及可用巢台。
4. **河谷、湖岸和疏林边缘**：水域与林缘集中鸟类，崖岸或高大结构可供停栖。
5. **城市高层建筑、桥梁、塔架与采石场**：人工结构可替代崖壁；鸽类等城市鸟类提供猎物，碰撞和夜间照明同时带来新风险。

## 形态、体尺、食性与活动

### 体尺与辨识

Cornell 给出的北美两性共同范围为：

- 体长 **36 至 49 厘米**。
- 体重 **530 至 1,600 克**。
- 翼展 **100 至 110 厘米**。

雌鸟通常大于雄鸟，亚种间也有体型和羽色差异。产品应在 `note` 中标明“Cornell 北美两性共同范围”，不能把这组数字写成 18 亚种的全球极值。[Cornell identification](https://www.allaboutbirds.org/guide/Peregrine_Falcon/id)

典型成鸟具有蓝灰至石板灰上体、深色头罩和粗黑髭纹、浅色喉胸、腹部横斑、黄色蜡膜与脚、长而尖的双翼。幼鸟上体偏褐，下体以纵纹为主。亚种色型跨度很大，生成图应表现一个泛化成鸟，不标注具体亚种。[Cornell identification](https://www.allaboutbirds.org/guide/Peregrine_Falcon/id)

### 以飞鸟为主的机会性肉食者

游隼主要在空中捕捉鸟类。Cornell 的北美记录涵盖滨鸟、鸭、鸽、海鸥、䴙䴘、海燕和鸣禽，也记录蝙蝠；它偶尔会从其他猛禽处夺取鱼或啮齿动物等猎物。全球食谱随地点和季节改变，城市种群常利用原鸽，海岸种群常利用滨鸟和海鸟。[Cornell life history](https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory)

推荐食性字段：

- `types: ['carnivore']`
- `foods`: 鸽与鸠、滨鸟、鸭及其他水鸟、海鸟、鸣禽、蝙蝠
- 描述中写“以鸟类为主，也利用蝙蝠及少量其他脊椎动物”，不要写成只吃鸽子。

### 典型昼行，城市灯光扩展低光活动

游隼以视觉引导捕猎，通常归为昼行性。它会从高处守望、在高空缓慢拍翼或翱翔，再俯冲、水平追逐或从鸟群中截取目标。挪威一项城市红外相机研究记录了 93 次狩猎出动，多数集中在晨昏，其中 17% 发生于天黑至黎明之间；作者认为人工光可能帮助夜间捕猎。产品可写“以昼行和晨昏活动为主，受人工照明影响的城市个体可在夜间捕猎”，不能把夜猎推广到所有种群。[Cornell behavior](https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory) [Time 2016](https://doi.org/10.15845/on.v39i0.1048)

## 俯冲速度的证据边界

### 可展示的公共值

Cornell 的概览页写游隼高空狩猎俯冲“可达约 **320 km/h（200 mph）**”，生活史页还转述过更高的计算值。中国科学院动物研究所的 2021 年研究说明采用“接近 390 km/h”的科普表述。两类页面都在描述极端俯冲场景，不代表平飞速度、常见捕猎速度或每只个体的上限。[Cornell overview](https://www.allaboutbirds.org/guide/Peregrine_Falcon) [中国科学院动物研究所](https://ioz.cas.cn/gb2018/xwdt/kyjz/202103/t20210303_5968528.html)

产品建议采用：

```ts
metrics: {
  topSpeedKph: 320,
}
```

对应统计卡必须写：

```ts
{
  key: 'stoop-speed',
  label: '高空俯冲报道可达',
  value: '320',
  unit: '千米/小时',
  note: 'Cornell 的圆整科普值；不是持续平飞速度，实测结果受高度、角度和采样方法影响',
}
```

### 原始研究为何给出不同数字

Alerstam 用追踪雷达记录四次野生猛禽俯冲。游隼在 40 至 110 秒俯冲中的 10 秒区间平均速度约 25 m/s，最高 10 秒区间为 31 至 39 m/s，即约 112 至 140 km/h。10 秒平均会抹平短时峰值，而且研究中的俯冲高度、角度和狩猎决策也限制速度；这组数据不等于物种机械上限。[Alerstam 1987](https://doi.org/10.1111/j.1474-919X.1987.tb03207.x)

Tucker 的“ideal falcon”论文建立了气动和重力模型。论文明确写到当时的极端速度估计最高达 157 m/s，但缺少准确测量。模型结果说明潜在能力，不能替代自由生活个体的野外测速。[Tucker 1998](https://doi.org/10.1242/jeb.201.3.403)

Schmitz、Ponitz 等人让训练游隼在 60 米高坝前俯冲，再用立体高速摄影和 1:1 模型研究姿态、升阻力与涡流。受场地高度限制，这类试验重点是气动机制，并未建立全种统一最高速度。[Ponitz et al. 2014](https://doi.org/10.1371/journal.pone.0086506)

因此，档案可以称游隼为“俯冲速度纪录的代表物种”或“常被称为最快动物”，并展示有来源的 320 km/h 圆整值。档案不应把 390 km/h 写成经过统一野外协议验证的全种固定纪录，也不应把俯冲速度与水平飞行速度并列比较。

## 繁殖

游隼通常不搭建枝巢。亲鸟会在崖台、建筑台面或其他基质上刮出浅凹，也会利用桥梁、塔架、采石场和人工巢箱。缺少天然崖壁的地区还可能利用其他大型鸟类遗留的巢。[Cornell life history](https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory)

Cornell 的北美参考值为：

- 每年通常 1 窝。
- 每窝 2 至 5 枚卵。
- 孵化期 29 至 32 天。
- 雏鸟留巢期 35 至 42 天。

这些数字适合统计卡或故事正文，页面需标明北美通用参考范围，不能据此判断一张生成图中的巢是否成功繁殖。

## DDT 衰退、恢复与现存威胁

### 北美恢复案例

20 世纪中期，DDT 及其代谢物在食物链中累积。DDE 干扰卵壳形成，薄壳更易在孵化期破裂；其他繁殖影响包括坏卵、孵化失败和异常亲鸟行为。美国东部繁殖种群一度消失，美国西部种群较历史水平下降 80% 至 90%；北美 1975 年降至 324 对巢区记录。美国 1972 年禁用 DDT，随后保护机构实施圈养繁育、放归、巢址保护和长期监测。美国鱼类及野生动物管理局在 1999 年确认恢复目标达到或超过，并把美国游隼从《濒危物种法》名录移除；当时阿拉斯加、加拿大和美国西部至少有 1,425 对已知占域配对。[USFWS 1999 delisting](https://www.fws.gov/press-release/1999-08/peregrine-falcon-back-babbit-announces-removal-worlds-fastest-bird-endangered) [USFWS final rule](https://www.fws.gov/sites/default/files/federal_register_document/99-21959.pdf)

这个案例来自北美法律和监测体系。产品可以写“禁用 DDT 与繁育放归推动北美恢复”，不能写成一个单一措施在全球同步恢复所有亚种。

### 现存威胁

BirdLife 当前威胁表记录的持续压力包括非法捕捉和迫害、农林化学品、油污、风能设施、道路、输配电线路、繁殖地娱乐活动、部分土地利用变化和气候相关影响。多数全球影响等级为 `negligible` 或 `unknown`，这表示现有全球证据没有显示它们把全种推近受胁阈值；区域种群仍可能承受明显损失。[BirdLife threats](https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details)

荷兰 2025 年同行评审研究把 2016 至 2017 年和 2020 至 2023 年的游隼死亡与 HPAI H5 暴发对照。2023 年送检死鸟中 28/32 检出 HPAI H5，研究者认为 HPAI 对荷兰种群构成严重威胁。该结果属于荷兰区域证据，不能直接改写 2021 全球趋势。[Caliendo et al. 2025](https://doi.org/10.3390/v17010024)

推荐威胁字段：

1. 为鹰猎贸易非法捕捉成鸟、盗取雏鸟和卵，以及针对猛禽的射杀、投毒和巢毁。
2. 有机氯农药及其他污染物造成的繁殖、生理和食物链风险；历史 DDT 影响说明顶级鸟类捕食者对持久性污染物敏感。
3. 与玻璃幕墙、建筑、车辆、风机、电线和其他结构碰撞，以及配电设施触电。
4. 攀岩、摄影、施工和缺乏规范的研究活动在繁殖期干扰巢址。
5. 风能、道路、采石和高密度建设选址改变巢区、猎场或飞行通道。
6. 海鸟、滨鸟和湿地鸟类猎物下降，连同油污、火情和局地生境退化。
7. HPAI 等疾病对部分区域种群造成新增死亡；全球范围和长期人口效应仍需监测。

### 推荐保护行动

- 保护自然崖巢、城市巢台、主要猎场和迁徙停歇地，并按当地繁殖时间设置干扰缓冲区。
- 执行反盗猎、反巢盗和 CITES 附录 I 贸易管制；用封闭脚环、芯片、许可和谱系记录追踪合法人工繁育个体。
- 持续监测持久性有机污染物、重金属和新兴化学物；保留对高风险农药的限制。
- 改造高风险电力设施，降低玻璃、车辆、线路和风机碰撞风险；能源项目先避开巢区和高使用率飞行通道。
- 在合适的人工结构上提供稳定基质或巢箱，并制定幼鸟坠落、施工冲突和公众观察的现场方案。
- 用巢区占用率、繁殖成功、年龄别生存和标准化迁徙监测评估趋势；卫星追踪只在许可和动物福利方案下实施。
- 在 HPAI 暴发区加强死鸟检测、猎物死亡监测和安全尸体处置，并避免让未经检验的病死鸟暴露给猛禽。
- 中国项目按国家二级重点保护野生动物要求管理救护、科研、人工繁育、利用和巢区施工。

## 六段故事文案

下列六段可进入 `storySections`，顺序对应六张图的叙事进程。

1. **黑头罩下的空中猎手**：成鸟蓝灰色上体、深色头罩和粗黑髭纹构成醒目的面部图案，浅色腹部布满横斑。长而尖的双翼适合快速飞行，雌鸟通常比雄鸟大；亚种和年龄会改变羽色深浅。
2. **俯冲速度没有一个万能数字**：游隼从高处收拢双翼进入狩猎俯冲，重力、气动外形和起始高度共同影响速度。320 km/h 是 Cornell 使用的圆整科普值，野外雷达、训练鸟试验和模型给出不同结果，平飞速度也低得多。
3. **高楼复制了一块崖台**：城市建筑、桥梁和塔架提供类似岩壁的高位平台，鸽类又提供稳定猎物。人工结构也带来玻璃碰撞、车辆、施工和灯光风险；城市适应不等于城市环境没有代价。
4. **大多数猎物在空中被截住**：游隼常从高位观察，再俯冲或水平追逐飞鸟。鸽、滨鸟、鸭、海鸟和鸣禽都会进入食谱，部分种群也捕食蝙蝠；具体猎物由当地季节性鸟群决定。
5. **北方个体把“游”写进名字**：北极和高纬种群可跨洲迁徙，低纬度与南半球种群多留居。对 56 只北极游隼的追踪识别出五条主要路线，研究种群的平均迁徙距离约 3,600 或 6,400 千米。
6. **一次恢复不能替代持续监测**：禁用 DDT、圈养繁育和放归推动北美种群恢复，全球评估现为 LC 且趋势上升。非法捕捉、碰撞、污染、巢区干扰和 HPAI 仍在不同地区发生；中国区域红色名录为 NT，法律保护等级为国家二级。

## 六张图像资产设计

目标路径：

- PNG 源文件：`src/assets/source/species/peregrine-falcon/*-source.png`
- WebP 运行文件：`public/images/species/peregrine-falcon/*.webp`
- 统一尺寸：1536 × 1024，3:2，不透明 RGB，无文字、标志或水印

共同成鸟锚点：中型而紧凑的隼，蓝灰至石板灰上体，深色头罩和粗黑髭纹，白至淡黄喉胸，腹部细横斑，黄色蜡膜、眼圈和裸露鳞状跗跖，黄色趾和黑爪，长尖双翼，较短而带横纹的尾。不要画成鹰科猛禽的宽圆翼、分指状翼尖或覆羽跗跖，也不要锁定具体亚种。

### 01 封面：`01-cliff-portrait.webp`

- 画面：恰好一只完整成年游隼站在画面右侧海岸崖缘，侧身看向左侧开阔海面和远方海蚀崖；黑头罩、髭纹、黄色蜡膜和脚清晰，左侧保留标题空间。
- 叙事：对应“黑头罩下的空中猎手”。
- 科学边界：画面代表泛化成鸟，不指向命名地点、个体、亚种或巢区。
- 提示词核心：`one complete adult Peregrine Falcon Falco peregrinus perched on a weathered coastal cliff ledge, slate blue-gray upperparts, dark hood and bold black moustachial marks, pale barred underparts, yellow cere eye-ring and bare scaled legs, bird around x=0.72, open sea and distant sea cliffs on the left, documentary natural-history photograph, 1536x1024, 3:2, no text`

### 02 俯冲：`02-high-speed-stoop.webp`

- 画面：恰好一只完整成鸟在宽阔天空中作陡角俯冲，双翼后掠但仍可辨识轮廓，远处地景提供高度感；没有速度线、爆炸云或仪表数字。
- 叙事：对应“俯冲速度没有一个万能数字”。
- 科学边界：静态图不能证明速度、加速度、命中结果或世界纪录。
- 提示词核心：`exactly one complete adult Peregrine Falcon in a steep controlled hunting stoop through open sky, swept pointed wings, compact falcon body, dark hood and moustache visible, distant generalized cliffs far below for altitude context, realistic aerodynamic posture, no prey, no speed lines, no contrails, no text or numbers, documentary wildlife photograph, 1536x1024, 3:2`

### 03 城市巢台：`03-urban-nest-ledge.webp`

- 画面：恰好一只成鸟守在高层建筑安静的碎石巢台旁，浅巢凹内恰好三枚斑驳卵；背景城市虚化，没有雏鸟、枝巢或靠近的人。
- 叙事：对应“高楼复制了一块崖台”。
- 科学边界：建筑代表城市巢址类型，三枚卵处于 Cornell 记录的 2 至 5 枚范围内；画面不代表真实地址、孵化结果或推荐公众接近巢位。
- 提示词核心：`exactly one adult Peregrine Falcon guarding exactly three mottled eggs in a shallow gravel scrape on a sheltered high-rise building ledge, safe broad platform, distant soft-focus city skyline, no nestlings, no stick nest, no people, no leg bands, documentary urban wildlife photograph, 1536x1024, 3:2, no text`

### 04 空中追猎：`04-aerial-bird-hunt.webp`

- 画面：恰好一只成鸟从后上方接近恰好一只健康飞行的原鸽，双方完整且相距至少一个游隼体长；没有接触、伤口、羽毛飞散或血液。
- 叙事：对应“大多数猎物在空中被截住”。
- 科学边界：画面只表现一次可能的追逐，不能证明捕获成功，也不能把原鸽写成唯一猎物。
- 提示词核心：`exactly one adult Peregrine Falcon pursuing exactly one healthy flying Rock Pigeon in open sky, falcon approaching from above and behind, both birds complete and separated by at least one falcon body length, no contact, no injury, no loose feathers, realistic scale and flight anatomy, documentary wildlife photograph, 1536x1024, 3:2, no text`

### 05 海岸迁徙：`05-migration-coastline.webp`

- 画面：宽阔海岸、泥滩、河口和远处岬角占画面主体，恰好一只完整游隼沿岸飞行；不画鸟群箭头、地图线或文字。
- 叙事：对应“北方个体把‘游’写进名字”。
- 科学边界：画面代表可能的海岸迁徙和停歇地形，不证明具体路线、距离、日期或个体来源。
- 提示词核心：`wide generalized temperate coastline during autumn migration, tidal mudflats, estuary, low dunes and distant headland, exactly one complete Peregrine Falcon flying along the coast, habitat occupies most of the frame, no flock, no map arrows, no route lines, documentary landscape wildlife photograph, 1536x1024, 3:2, no text`

### 06 远距崖巢监测：`06-cliff-monitoring.webp`

- 画面：恰好两名小型调查人员在远处使用一台三脚架单筒望远镜和一本记录册，远方崖壁上恰好一只成鸟停栖；人与鸟之间保留明显距离。
- 叙事：对应“一次恢复不能替代持续监测”。
- 科学边界：画面只表现低干扰监测，不代表真实项目、巢位、占域结果或趋势；不出现攀爬、抓握、诱饵、无人机或近巢摄影。
- 提示词核心：`exactly two raptor ecologists conducting non-invasive distance monitoring of exactly one adult Peregrine Falcon on a remote cliff, one tripod-mounted spotting scope and one notebook, observers small at far left and complete falcon on distant ledge at mid-right, wide safety buffer, no climbing, handling, lure, drone or nest approach, documentary conservation photograph, 1536x1024, 3:2, no text`

## 集成就绪内容方案

### 推荐关键事实

1. IOC v15.2 承认游隼 18 个亚种；旧版资料可能写 19 个。
2. IUCN/BirdLife 2021 全球评估为 `LC / increasing`，没有 criteria code。
3. 248,000 至 478,000 只成熟个体是 `poor / suspected` 的初步外推，不是同期全球普查。
4. Cornell 的北美参考体尺为体长 36 至 49 厘米、体重 0.53 至 1.6 千克、翼展 100 至 110 厘米。
5. 320 km/h 是高空俯冲的圆整科普值，不能代表平飞速度或每次野外捕猎。
6. 高纬种群可远距离迁徙，低纬度和南半球种群多留居。
7. DDT 禁用、圈养繁育和放归共同推动北美恢复；现存区域风险包括非法捕捉、碰撞、污染、巢区干扰和 HPAI。
8. 中国红色名录列为 NT，国家重点保护等级为二级；CITES 列附录 I，CMS 列附录 II。

### 推荐日期常量

```ts
const PEREGRINE_FALCON_SOURCE_DATE = '2026-08-26' as const;
const PEREGRINE_FALCON_CONTENT_DATE = '2026-08-26' as const;
```

### 推荐来源数组

```ts
const PEREGRINE_FALCON_SOURCES = [
  {
    title: 'IOC World Bird List v15.2: Seriemas and Falcons',
    url: 'https://www.worldbirdnames.org/new/bow/falcons/',
    kind: 'taxonomy',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List: Falco peregrinus, 2021 global assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T45354964A206217909.en',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Peregrine Falcon Falco peregrinus',
    url: 'https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab: Peregrine Falcon Identification',
    url: 'https://www.allaboutbirds.org/guide/Peregrine_Falcon/id',
    kind: 'general',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab: Peregrine Falcon Life History',
    url: 'https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'USFWS: Peregrine Falcon recovery and 1999 federal delisting',
    url: 'https://www.fws.gov/press-release/1999-08/peregrine-falcon-back-babbit-announces-removal-worlds-fastest-bird-endangered',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'USFWS 1999 final rule removing the American Peregrine Falcon from the federal endangered list',
    url: 'https://www.fws.gov/sites/default/files/federal_register_document/99-21959.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Gu et al. 2021: Climate-driven flyway changes and memory-based long-distance migration',
    url: 'https://doi.org/10.1038/s41586-021-03265-0',
    kind: 'distribution',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Alerstam 1987: Radar observations of the peregrine stoop',
    url: 'https://doi.org/10.1111/j.1474-919X.1987.tb03207.x',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Tucker 1998: Gliding flight of ideal falcons during diving and pull-out',
    url: 'https://doi.org/10.1242/jeb.201.3.403',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Time 2016: Hunting activity by urban Peregrine Falcons',
    url: 'https://doi.org/10.15845/on.v39i0.1048',
    kind: 'ecology',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates 2020',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'China National Key Protected Wild Animals List 2021',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'CMS: Falco peregrinus species page',
    url: 'https://www.cms.int/species/falco-peregrinus',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
  {
    title: 'Caliendo et al. 2025: HPAI and Peregrine Falcon decline in the Netherlands',
    url: 'https://doi.org/10.3390/v17010024',
    kind: 'conservation',
    accessedAt: PEREGRINE_FALCON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

### 可粘贴 `Species` 对象草案

```ts
{
  id: 'species-falco-peregrinus',
  slug: 'peregrine-falcon',
  names: {
    zh: '游隼',
    en: 'Peregrine Falcon',
    aliases: ['花梨鹰', 'Peregrine', 'Duck Hawk'],
  },
  scientificName: 'Falco peregrinus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Falconiformes', '隼形目'),
    taxon('Falconidae', '隼科'),
    taxon('Falco', '隼属'),
  ),
  conservation: conservation('LC', 'increasing', 2021),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
    regions: [
      '北极苔原、北方森林带与北大西洋岛屿',
      '欧洲、地中海与北非',
      '西亚、中亚、南亚、东亚与东南亚',
      '北美、中美洲、加勒比与南美洲',
      '撒哈拉以南非洲、马达加斯加与西印度洋岛屿',
      '澳大利亚、新几内亚与西南太平洋岛屿',
    ],
    countries: [
      '加拿大',
      '美国',
      '墨西哥',
      '巴西',
      '秘鲁',
      '智利',
      '阿根廷',
      '英国',
      '法国',
      '西班牙',
      '德国',
      '挪威',
      '瑞典',
      '芬兰',
      '俄罗斯',
      '摩洛哥',
      '阿尔及利亚',
      '埃及',
      '肯尼亚',
      '南非',
      '马达加斯加',
      '土耳其',
      '伊朗',
      '哈萨克斯坦',
      '蒙古',
      '中国',
      '日本',
      '韩国',
      '巴基斯坦',
      '印度',
      '斯里兰卡',
      '菲律宾',
      '印度尼西亚',
      '澳大利亚',
      '巴布亚新几内亚',
      '斐济',
    ],
    range:
      '除南极洲外六大洲均有分布，范围涵盖北极苔原、温带山地和海岸、热带岛屿、非洲、南美洲及澳大拉西亚。高纬种群可作洲际迁徙，低纬度和南半球种群多留居或局地移动。中国多地有繁殖、迁徙停歇或越冬记录。国家列表只列代表性常规范围，不含完整通道、偶见和迷鸟记录。',
  },
  habitats: [
    {
      name: '崖壁、岩峰与峡谷',
      realm: 'terrestrial',
      description:
        '主要自然繁殖环境；裸岩台可容纳浅刮巢，高处便于起飞、守望和进入开阔猎场。',
      isPrimary: true,
    },
    {
      name: '海岸、海岛、泥滩与湿地边缘',
      realm: 'terrestrial',
      description:
        '迁徙和越冬期可利用滨鸟、水鸟及海鸟集中的开阔空域，部分种群也在海崖和近岸岛屿繁殖。',
    },
    {
      name: '苔原、草地、灌丛与荒漠开阔地',
      realm: 'terrestrial',
      description:
        '北方繁殖区和内陆猎场提供开阔飞行空间，岩丘、土崖或人工高点可充当巢位与停栖点。',
    },
    {
      name: '河谷、湖岸与疏林边缘',
      realm: 'terrestrial',
      description:
        '水域和林缘汇集鸟类猎物，崖岸、大树遗留巢或高大结构可提供繁殖与休息位置。',
    },
    {
      name: '城市高层建筑、桥梁、塔架与采石场',
      realm: 'terrestrial',
      description:
        '人工结构能模拟崖壁，鸽类等城市鸟类提供猎物；玻璃、车辆、施工和夜间照明也形成风险。',
    },
  ],
  measurements: {
    length: {
      min: 36,
      max: 49,
      unit: 'cm',
      note: 'Cornell 北美两性共同范围，不代表 18 亚种全球极值',
    },
    weight: {
      min: 0.53,
      max: 1.6,
      unit: 'kg',
      note: 'Cornell 北美两性共同范围；雌鸟通常较大',
    },
    wingspan: {
      min: 100,
      max: 110,
      unit: 'cm',
      note: 'Cornell 北美两性共同范围',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['鸽与鸠', '滨鸟', '鸭及其他水鸟', '海鸟', '鸣禽', '蝙蝠'],
    description:
      '以空中捕捉鸟类为主，猎物可包括鸽、滨鸟、鸭、海鸟和鸣禽，也会捕食蝙蝠并偶尔利用少量其他脊椎动物；食谱随地区和季节改变。',
  },
  activity: [
    '以昼行和晨昏活动为主',
    '从高位守望或在高空搜索猎物',
    '用俯冲、水平追逐和鸟群截击捕猎',
    '城市灯光下可出现夜间捕猎',
    '高纬种群可长距离迁徙',
    '低纬和南半球种群多留居',
  ],
  tags: [
    '全球广布',
    '隼形目',
    '空中猎手',
    '高速俯冲',
    '部分种群迁徙',
    '城市适应',
    'IUCN 无危',
    '中国国家二级重点保护野生动物',
    'CITES 附录 I',
    'CMS 附录 II',
  ],
  summary:
    '除南极洲外六大洲广布的空中猎手。游隼以尖翼追击飞鸟，并以高空狩猎俯冲闻名；高纬种群远距离迁徙，部分低纬种群留居。',
  description:
    '游隼利用崖壁、海岸、湿地边缘、开阔地和城市高层结构繁殖或捕猎。它主要在空中截取鸟类，典型成鸟具有蓝灰上体、深色头罩、粗黑髭纹和腹部横斑。Cornell 采用 320 千米/小时作为高空俯冲的圆整科普值；野外雷达、训练鸟试验和气动模型给出不同结果，因此该数字不代表平飞或每次捕猎。2021 年 IUCN/BirdLife 全球评估为 LC、趋势上升，成熟个体初步估算为 248,000 至 478,000，资料质量为 poor。中国 2020 红色名录列为 NT，2021 年国家重点保护野生动物名录列为二级。禁用 DDT、圈养繁育和放归推动了北美恢复，非法捕捉、碰撞、污染、巢区干扰及区域性 HPAI 风险仍需管理。',
  storySections: [
    {
      key: 'hood-and-pointed-wings',
      label: '形态',
      title: '黑头罩下的空中猎手',
      body:
        '成鸟蓝灰色上体、深色头罩和粗黑髭纹构成醒目的面部图案，浅色腹部布满横斑。长而尖的双翼适合快速飞行，雌鸟通常比雄鸟大；亚种和年龄会改变羽色深浅。',
    },
    {
      key: 'stoop-speed-evidence',
      label: '飞行',
      title: '俯冲速度没有一个万能数字',
      body:
        '游隼从高处收拢双翼进入狩猎俯冲，重力、气动外形和起始高度共同影响速度。320 千米/小时是 Cornell 使用的圆整科普值，野外雷达、训练鸟试验和模型给出不同结果，平飞速度也低得多。',
    },
    {
      key: 'urban-cliff-analogue',
      label: '城市生态',
      title: '高楼复制了一块崖台',
      body:
        '城市建筑、桥梁和塔架提供类似岩壁的高位平台，鸽类又提供稳定猎物。人工结构也带来玻璃碰撞、车辆、施工和灯光风险；城市种群需要巢台管理与低干扰观察。',
    },
    {
      key: 'aerial-bird-hunter',
      label: '食性',
      title: '大多数猎物在空中被截住',
      body:
        '游隼常从高位观察，再俯冲或水平追逐飞鸟。鸽、滨鸟、鸭、海鸟和鸣禽都会进入食谱，部分种群也捕食蝙蝠；具体猎物由当地季节性鸟群决定。',
    },
    {
      key: 'latitude-and-migration',
      label: '迁徙',
      title: '北方个体把“游”写进名字',
      body:
        '北极和高纬种群可跨洲迁徙，低纬度与南半球种群多留居。对 56 只北极游隼的追踪识别出五条主要路线，研究种群的平均迁徙距离约 3,600 或 6,400 千米。',
    },
    {
      key: 'recovery-and-vigilance',
      label: '保护',
      title: '一次恢复不能替代持续监测',
      body:
        '禁用 DDT、圈养繁育和放归推动北美种群恢复，全球评估现为 LC 且趋势上升。非法捕捉、碰撞、污染、巢区干扰和 HPAI 仍在不同地区发生；中国区域红色名录为 NT，法律保护等级为国家二级。',
    },
  ],
  keyFacts: [
    'IOC World Bird List v15.2 承认游隼 18 个亚种；旧版资料可能写 19 个。',
    'IUCN/BirdLife 2021 年全球评估为无危，趋势上升，没有受胁标准代码。',
    '全球成熟个体初步估算为 248,000 至 478,000，BirdLife 将资料质量标为 poor、推导方式标为 suspected。',
    'Cornell 北美参考体尺为体长 36 至 49 厘米、体重 0.53 至 1.6 千克、翼展 100 至 110 厘米。',
    '320 千米/小时是高空俯冲的圆整科普值，不能代表平飞速度或每次野外捕猎。',
    '高纬种群可远距离迁徙，低纬度和南半球种群多留居。',
    '禁用 DDT、圈养繁育和放归共同推动北美种群恢复。',
    '中国红色名录列为近危，国家重点保护等级为二级；CITES 列附录 I，CMS 列附录 II。',
  ],
  threats: [
    '为鹰猎贸易非法捕捉成鸟、盗取雏鸟和卵，以及针对猛禽的射杀、投毒和巢毁',
    '有机氯农药及其他污染物造成繁殖、生理和食物链风险',
    '与玻璃幕墙、建筑、车辆、风机、电线和其他结构碰撞，以及配电设施触电',
    '攀岩、摄影、施工和缺乏规范的研究活动在繁殖期干扰巢址',
    '风能、道路、采石和高密度建设选址改变巢区、猎场或飞行通道',
    '海鸟、滨鸟和湿地鸟类猎物下降，连同油污、火情和局地生境退化',
    'HPAI 等疾病对部分区域种群造成新增死亡，全球范围和长期影响仍需监测',
  ],
  conservationActions: [
    '保护自然崖巢、城市巢台、主要猎场和迁徙停歇地，并按当地繁殖时间设置干扰缓冲区',
    '执行反盗猎、反巢盗和 CITES 附录 I 贸易管制，追踪合法人工繁育个体',
    '持续监测持久性有机污染物、重金属和新兴化学物，保留对高风险农药的限制',
    '改造高风险电力设施并降低玻璃、车辆、线路和风机碰撞风险',
    '能源与采石项目避让巢区、高使用率猎场和主要飞行通道',
    '在合适人工结构上提供稳定巢台，并制定幼鸟坠落、施工冲突和公众观察方案',
    '用巢区占用率、繁殖成功、年龄别生存和标准化迁徙监测评估趋势',
    '在 HPAI 暴发区加强死鸟检测、猎物死亡监测和安全尸体处置',
    '在中国按国家二级重点保护野生动物要求管理救护、科研、人工繁育、利用和巢区施工',
  ],
  metrics: {
    adultLengthCm: [36, 49],
    adultMassKg: [0.53, 1.6],
    wingspanCm: [100, 110],
    topSpeedKph: 320,
    estimatedMatureIndividuals: [248000, 478000],
  },
  featuredStats: [
    {
      key: 'stoop-speed',
      label: '高空俯冲报道可达',
      value: '320',
      unit: '千米/小时',
      note: 'Cornell 圆整科普值；不是持续平飞速度，实测受高度、角度和采样方法影响',
    },
    {
      key: 'mature-population',
      label: '全球成熟个体初步估算',
      value: '24.8万至47.8万',
      note: 'BirdLife 2021，资料质量 poor、推导方式 suspected',
    },
    {
      key: 'incubation',
      label: '孵化期',
      value: '29至32',
      unit: '天',
      note: 'Cornell 北美参考范围',
    },
    {
      key: 'arctic-migration',
      label: '北极样本平均迁徙',
      value: '3,600或6,400',
      unit: '千米',
      note: 'Gu 等 2021 研究中的西部短程组与东部长程组，不代表全种',
    },
  ],
  media: {
    image: './images/species/peregrine-falcon/01-cliff-portrait.webp',
    alt: '海岸崖缘上，一只完整成年游隼站在画面右侧，蓝灰上体、深色头罩、粗黑髭纹和黄色脚清晰，左侧为开阔海面与远方海蚀崖',
    focalPoint: { x: 0.72, y: 0.5 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/peregrine-falcon/02-high-speed-stoop.webp',
        alt: '一只完整成年游隼在宽阔天空中作陡角俯冲，长尖双翼后掠，远处地景提供高度感',
        title: '速度取决于俯冲条件',
        caption:
          '320 千米/小时是有来源的圆整科普值；静态图不能测量速度，野外实测也受高度、角度和采样方法影响。',
        focalPoint: { x: 0.56, y: 0.43 },
      },
      {
        image: './images/species/peregrine-falcon/03-urban-nest-ledge.webp',
        alt: '一只成年游隼守在高层建筑宽阔碎石巢台旁，浅巢凹内恰好有三枚斑驳卵，远处城市背景虚化，没有雏鸟或枝巢',
        title: '碎石浅巢中的三枚卵',
        caption:
          '游隼不搭枝巢，而是在基质上刮出浅凹；图中三枚卵处于 Cornell 记录的每窝 2 至 5 枚范围内。',
        focalPoint: { x: 0.6, y: 0.5 },
      },
      {
        image: './images/species/peregrine-falcon/04-aerial-bird-hunt.webp',
        alt: '一只成年游隼从后上方接近一只健康飞行的原鸽，双方完整且保持距离，没有接触或伤口',
        title: '在空中截取飞鸟',
        caption:
          '游隼主要捕捉鸟类；原鸽只是城市常见猎物之一，滨鸟、鸭、海鸟和鸣禽也会进入地区性食谱。',
        focalPoint: { x: 0.54, y: 0.46 },
      },
      {
        image: './images/species/peregrine-falcon/05-migration-coastline.webp',
        alt: '宽阔海岸、泥滩和河口上空，一只完整游隼沿海岸线飞行，远处岬角隐约可见',
        title: '迁徙与留居并存',
        caption:
          '高纬种群可跨洲迁徙，低纬度和南半球种群多留居；画面不指向具体路线或个体来源。',
        focalPoint: { x: 0.64, y: 0.4 },
      },
      {
        image: './images/species/peregrine-falcon/06-cliff-monitoring.webp',
        alt: '远距离视角下，两名调查人员在左侧使用一台三脚架望远镜和记录册，一只成年游隼停在远方崖壁上',
        title: '用长期监测守住恢复成果',
        caption:
          '远距观察可以记录巢区占用和活动并减少干扰；单次观察不能证明繁殖成功或种群趋势。',
        focalPoint: { x: 0.68, y: 0.44 },
      },
    ],
  },
  sources: PEREGRINE_FALCON_SOURCES,
  featured: true,
  publishedAt: PEREGRINE_FALCON_CONTENT_DATE,
  updatedAt: PEREGRINE_FALCON_CONTENT_DATE,
}
```

## 实施检查清单

- [x] 在来源常量之后加入 `PEREGRINE_FALCON_SOURCES`。
- [x] 在 `species` 数组加入 `peregrine-falcon` 对象。
- [x] 为 `Falconiformes`、`Falconidae` 和 `Falco` 增加分类图谱后代计数断言。
- [x] 验证 `Aves` 物种档案计数增加 1。
- [x] 生成并检查六张 1536 × 1024 PNG 源图。
- [x] 转换六张同名 WebP 运行图并检查尺寸、色彩模式和路径配对。
- [x] 为身份、分类、保护、数值、故事、媒体、来源和日期增加契约测试。
- [x] 从 `docs/todo.md` 删除游隼，并更新总数、鸟纲数量和剩余数量。

## 核心不确定性

1. **最高速度缺少统一野外协议。** 320 km/h 和接近 390 km/h 来自不同展示与试验口径；野外雷达对四次俯冲的 10 秒区间峰值低得多。产品使用 320 km/h 时必须保留俯冲、圆整科普值和方法限制。
2. **全球成熟个体区间质量低。** 248,000 至 478,000 来自区域数据和范围比例外推。BirdLife 标为 `poor / suspected`，并要求进一步验证。
3. **亚种数取决于分类口径。** IOC v15.2 为 18；2021 年中国科学院科普材料仍引用 19。产品应锁定 IOC v15.2。
4. **全球上升趋势掩盖区域压力。** 2021 全球趋势为 increasing，中国区域评估为 NT；荷兰研究还记录 HPAI 相关下降。三个结论的时间和空间尺度不同。
5. **CITES CoP20 没有完成降级。** 2025 年附录 I 转附录 II 提案遭否决，2026 当前身份仍为附录 I。实现时不要把提案文字误当最终决议。
6. **中国分布包含多种居留型。** 不同亚种和种群在中国繁殖、过境或越冬。当前资料不足以用一个全国标签概括全年状态。
