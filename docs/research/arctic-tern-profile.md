# 北极燕鸥（*Sterna paradisaea*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**北极燕鸥**
- 推荐展示英文名：**Arctic Tern**
- 接受学名：***Sterna paradisaea* Pontoppidan, 1763**
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面与 5 张详情图的科学内容
- 分类口径：IOC World Bird List v15.2；中文名来自同版本多语言表
- 保护口径：全球状态采用 BirdLife/IUCN 2018 评估；欧洲区域评估、国家和繁殖地监测只作补充，不能覆盖全球字段
- 数字边界：70,900 千米来自 2007—2008 年回收的 11 条光照地理定位轨迹，不是每只北极燕鸥的固定年迁徙里程

## 结论摘要

1. IOC v15.2 接受 ***Sterna paradisaea* Pontoppidan, 1763**，列于鸻形目、鸥科、燕鸥属。IOC 主表在该种之后直接进入下一物种，没有列出种下分类单元；挪威极地研究所也明确称其为**单型种，没有获承认的亚种**。IOC 多语言表使用简体中文“北极燕鸥”、繁体中文“北極燕鷗”和英文 “Arctic Tern”。[IOC gulls list](https://www.worldbirdnames.org/new/bow/gulls/) [IOC master lists](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)
2. 正式全球字段应写成 `conservation('LC', 'decreasing', 2018)`，不传 `criteria`。BirdLife/IUCN 2018 评估认为其分布和种群都远高于受胁阈值，下降幅度也不被认为达到三世代内 30%，所以列为无危；这不代表种群稳定或各繁殖地没有风险。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)
3. 2018 评估引用的全球数量是**超过 2,000,000 只全部年龄个体**，并非闭合的成熟个体区间。BirdLife 当前页面把成熟个体数显示为 Unknown；旧欧洲估计也只是区域繁殖对或区域成熟个体数。因此不应给 `metrics.estimatedMatureIndividuals` 填一个伪精确的上下限。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)
4. 本种是**完整迁徙型物种（full migrant）**。它在北半球环北极和亚北极的海岸、岛屿、苔原、林线及部分内陆湿地繁殖；非繁殖季跨越大西洋、太平洋和印度洋，在南大洋活动，许多个体利用南极浮冰缘。繁殖与越冬范围之间不存在一条适用于所有种群的固定航线。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [IOC gulls list](https://www.worldbirdnames.org/new/bow/gulls/) [Wong et al. 2021](https://doi.org/10.3354/meps13779)
5. Egevang 等在东北格陵兰部署 50 台、冰岛部署 20 台光照地理定位器，次年取得 10 只格陵兰鸟和 1 只冰岛鸟的可用迁徙资料。11 只追踪鸟离开繁殖地至返回期间平均移动 **70,900 千米**，范围 **59,500—81,600 千米**；北返平均 **40 天**，南下平均 **93 天**。设备位置误差约 185 千米，赤道春秋分和极昼还会造成缺测，路径步长也会影响累计距离；这些数值不能外推成全种、所有种群或每只个体的固定常数。[Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107) [open full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC2836663/)
6. Cornell 给出的体长为 **28—39 厘米**、体重 **90—120 克**、翼展 **65—75 厘米**。繁殖成鸟有薄而通红的喙、极短红腿、完整黑色头顶、细长尖翼和长而深分叉的尾；非繁殖成鸟额白、黑色头顶缩小，喙和腿转黑。图像必须把季节羽色分开，不能给南极非繁殖场景套用繁殖期红喙。[Cornell Lab identification](https://www.allaboutbirds.org/guide/Arctic_Tern/id)
7. 主要食物是小鱼和甲壳类，也取食昆虫、软体动物及其他小型无脊椎动物；以水面啄取、接触式点水和近水面浅扎水为主。它不是深潜海鸟，也不用足爪抓鱼。[Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)
8. 繁殖巢是近水地面的浅刮巢。挪威极地研究所的高纬生活史资料给出：**每窝一至两枚卵，偶尔三枚；双亲孵化 21—22 天**。Cornell 与 BTO 汇总的区间略宽，反映地点和数据口径差异；项目的特色统计采用前一组内部一致、来源明确的 21—22 天，不拼接成新的范围。[Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/) [Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory) [BTO BirdFacts](https://www.bto.org/learn/about-birds/birdfacts/arctic-tern)
9. 全球 LC 与局地失败可以同时成立。食物短缺、渔业改变关键猎物、繁殖地干扰、取卵、外来美洲水貂等地面捕食者，以及气候驱动的海温、海冰和生境变化，都可能造成局地下降、连续繁殖失败或繁殖群落消失。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)
10. 2026 年 6 月 27 日生效的 CMS 附录只把 ***Sterna paradisaea* 的大西洋种群**列入附录 II，不能把全种写成 CMS Appendix II。AEWA 表 1 覆盖“西欧亚繁殖／大西洋非繁殖”种群，同样不是全球所有种群。当前官方 CITES 附录中没有找到北极燕鸥的物种级或更高分类群包含性列名；如产品不展示“未列入”，可直接省略 CITES 标签。[CMS 2026 appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) [AEWA MOP9 Table 1 document](https://www.unep-aewa.org/sites/default/files/document/aewa_mop9_16_proposed_amendments.pdf) [CITES Checklist](https://checklist.cites.org/)

## 名称、分类与种下口径

### 接受分类

| 分类阶元 | 学名 | 中文名 | 依据 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 项目通用节点 |
| 门 | Chordata | 脊索动物门 | 项目通用节点 |
| 纲 | Aves | 鸟纲 | IOC v15.2 |
| 目 | Charadriiformes | 鸻形目 | IOC v15.2 |
| 科 | Laridae | 鸥科 | IOC v15.2 |
| 属 | Sterna | 燕鸥属 | IOC v15.2 |
| 种 | Sterna paradisaea | 北极燕鸥 | IOC v15.2 |

IOC v15.2 完整种与亚种表把 Arctic Tern 作为一个物种行，下一行即进入下一物种，没有附属的 subspecies 行。挪威极地研究所独立写明 “monotypic with little geographical variation”。产品可明确说“单型种；IOC v15.2 不承认亚种”，但不能把单型理解为所有繁殖群体在行为、路线或遗传上毫无差异。[IOC master lists](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)

IOC 多语言表对应名称为：

- 简体中文：北极燕鸥；
- 繁体中文：北極燕鷗；
- 英文：Arctic Tern。

推荐字段：

```ts
names: {
  zh: '北极燕鸥',
  en: 'Arctic Tern',
  aliases: ['北極燕鷗'],
}
```

“Sea Swallow”等英语俗称并非分类名，而且可能泛指多种燕鸥，不建议加入结构化别名。[IOC master lists](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/) [BTO BirdFacts](https://www.bto.org/learn/about-birds/birdfacts/arctic-tern)

## 全球保护状态与数量

### 正式 IUCN/BirdLife 字段

BirdLife 是鸟类 IUCN 红色名录评估机构。当前全球记录沿用 2018 年评估：

- 等级：Least Concern，**LC，无危**；
- 趋势：**Decreasing，下降**；
- 评估年份：**2018**；
- 标准：页面为空；LC 没有需要写入 `criteria` 的受胁标准字符串；
- 世代长度：13.4 年；
- 迁徙状态：Full Migrant；
- 繁殖期分布面积（EOO）：约 64,800,000 平方千米；
- 非繁殖期分布面积（EOO）：约 126,000,000 平方千米。

[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)

推荐结构化字段：

```ts
conservation: conservation('LC', 'decreasing', 2018)
```

不要写第四个空字符串参数，也不要自行补 `A2`。评估的 LC 理由是：范围远大于范围标准阈值；种群总量很大；现有证据不支持十年或三世代内超过 30% 的全球下降。这里的“不超过受胁阈值”不是“没有下降”。

### 全球数量的可编码边界

2018 评估引用 Wetlands International 2015 的**超过 2,000,000 只个体**。这是全部年龄个体的开放下界，不是成熟个体的闭合区间。BirdLife 的旧欧洲资料曾给出 564,000—906,000 对，折算 1,130,000—1,810,000 只成熟个体；它只代表欧洲，不是全球估计。BirdLife 当前页面又把全球 mature individuals 显示为 Unknown，因此不能把欧洲数值或开放下界塞进全球成熟个体字段。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)

推荐：

```ts
metrics: {
  adultLengthCm: [28, 39],
  adultMassKg: [0.09, 0.12],
  wingspanCm: [65, 75],
  // estimatedMatureIndividuals 不填
}
```

欧洲 2021 区域红色名录的繁殖数量、等级和趋势不能覆盖全球 2018 字段。区域评估与全球评估使用不同空间范围、时间窗和资料，出现不同方向并不矛盾。[BirdLife European assessment PDF](https://birdlifedata.blob.core.windows.net/sub-global/3271_sterna_paradisaea.pdf)

## 分布与生境

### 繁殖与非繁殖范围

IOC v15.2 把繁殖范围概括为：格陵兰、冰岛、不列颠群岛及欧洲北部，经俄罗斯北部、西伯利亚东北部、萨哈林和堪察加，延伸到阿留申群岛、阿拉斯加、加拿大北极和亚北极地区，向南到詹姆斯湾、加拿大东南部以及美国纽约附近。BirdLife 的概括是环北极繁殖，局部南至法国布列塔尼和美国马萨诸塞。两者都说明它不只在北极圈内繁殖，也不只在海岸繁殖。[IOC gulls list](https://www.worldbirdnames.org/new/bow/gulls/) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)

非繁殖季越过赤道进入南大洋，使用从南美洲、非洲南端外海到南极浮冰缘的广阔水域；不同繁殖种群可经大西洋、太平洋或印度洋。南极海冰边缘是重要但并非每只鸟唯一、全年固定的“越冬点”。在北半球繁殖季对应的南半球夏季，北极燕鸥处于非繁殖期。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107) [Alerstam et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6745660/)

推荐 `distribution`：

```ts
distribution: {
  realms: ['marine', 'terrestrial', 'freshwater'],
  continents: ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲', '南极洲'],
  regions: [
    '环北极与亚北极繁殖带',
    '北大西洋与北太平洋',
    '南大西洋、南印度洋与南太平洋',
    '南大洋与南极浮冰缘',
  ],
  countries: ['加拿大', '美国', '丹麦', '冰岛', '英国', '法国', '挪威', '瑞典', '芬兰', '俄罗斯'],
  range:
    '在北半球环北极与亚北极海岸、岛屿、苔原、林线及部分内陆湿地繁殖；作为完整迁徙型物种跨越大西洋、太平洋和印度洋，非繁殖季主要利用南大洋及南极浮冰缘。',
}
```

国家数组只列代表性繁殖国家和管辖地。跨越南大洋的公海活动不应硬塞进一个国家列表；不设置 `center`，也不设置 `endemicTo`。

### 生境

BirdLife 和 Cornell 支持三种结构化 realm。海洋是迁徙、非繁殖和重要觅食环境；陆地用于地面繁殖；淡水包括繁殖地附近的湖泊、池塘、河流与内陆湿地。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory)

推荐生境：

1. **海岸、陆架海与开阔远洋表层**，`marine`，`isPrimary: true`：近岸湾、河口、外海锋面和南大洋高生产力水域是觅食和迁徙主体环境；非繁殖期常利用浮冰缘与开水带。
2. **低植被海岸、岛屿与苔原地面**，`terrestrial`：在沙砾滩、岸脊、岩地、低草地、泥炭地和苔原近水地面筑浅刮巢；也可在开阔北方林地繁殖。
3. **湖泊、池塘、河流及内陆湿地**，`freshwater`：部分种群在湖岛、河心洲、河岸、沼泽和淡水湖附近繁殖、取食，不应被“纯海鸟”标签抹掉。

北极燕鸥会换用邻近繁殖地，某年参加繁殖的比例也随食物和融雪变化。单次空巢调查不能直接等同于个体全部死亡或全球数量下降。[Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)

## 外形、体尺与鉴别边界

Cornell 的两性合并测量为：

| 字段 | 推荐值 | 说明 |
| --- | --- | --- |
| `measurements.length` | 28—39 cm | 两性合并，受尾羽与测量姿态影响 |
| `measurements.weight` | 90—120 g | 两性合并的常用范围 |
| `measurements.wingspan` | 65—75 cm | 两性合并 |
| `metrics.adultLengthCm` | `[28, 39]` | 用于粗粒度比较 |
| `metrics.adultMassKg` | `[0.09, 0.12]` | 从 90—120 g 换算 |
| `metrics.wingspanCm` | `[65, 75]` | 与展示范围一致 |
| `metrics.lifespanYears` | 不填 | 31 年或 34 年是不同环志体系的最低已知长寿记录，不是寿命闭区间 |
| `metrics.topSpeedKph` | 不填 | 迁徙地速受风和停歇定义影响 |
| `metrics.maxDiveDepthM` | 不填 | 主要是表层和约半米级浅扎水，不适合包装成物种极限潜深 |

[Cornell Lab identification](https://www.allaboutbirds.org/guide/Arctic_Tern/id) [BTO BirdFacts](https://www.bto.org/learn/about-birds/birdfacts/arctic-tern)

图像和正文应共同保留以下形态：

- 身体纤细，头小而圆、额部较陡；两翼长、窄、尖且轮廓有角度。
- 繁殖成鸟头顶至后颈黑色，背和腹面浅灰，喙细直且通体红色，腿极短而红；长尾深分叉，停栖时尾常越过合拢翼尖。
- 非繁殖成鸟额部白，黑色头顶缩至眼后和后脑，喙、腿转黑，并可见暗色腕斑。
- 幼鸟额白、头顶黑色模糊，背部具鳞状斑纹；不能画成缩小版的完整繁殖成鸟。
- 与普通燕鸥相比，繁殖期北极燕鸥的喙通常更细短且通红、腿更短、尾更长，翼下更银白半透明；单张生成图仍不能充当可核验的野外鉴定证据。

[Cornell Lab identification](https://www.allaboutbirds.org/guide/Arctic_Tern/id)

## 食性、觅食与活动

主要食物是小鱼，如玉筋鱼、鲱、鳕和胡瓜鱼类，也吃磷虾等甲壳类、昆虫、软体动物、多毛类和其他小型无脊椎动物。食谱随海区和纬度变化；挪威极地研究所指出，斯瓦尔巴等最北繁殖区可能比低纬种群更依赖甲壳类。不能把“磷虾”写成所有种群全年唯一主食。[Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)

典型方式是先悬停或低飞定位，再从水面啄取、接触点水或扎到水面下很浅处；也会在空中捕捉昆虫，并与其他海鸟共同利用掠食鱼群赶到表层的小鱼。Cornell 描述的扎水深度约 20 英寸，约 0.5 米，支持“浅扎水”而不是深水追逐。[Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory)

建议：

```ts
diet: {
  types: ['piscivore', 'carnivore'],
  foods: ['玉筋鱼等小型鱼类', '鲱、鳕与胡瓜鱼类', '磷虾等甲壳类', '昆虫', '软体动物与多毛类'],
  description:
    '以小鱼和甲壳类为主，也取食昆虫、软体动物及其他小型无脊椎动物；多在水面啄取、接触点水或近水面浅扎水，食谱随海区、季节和繁殖纬度改变。',
}
```

活动标签可用“完整迁徙型”“远洋长距离迁徙”“水面觅食与浅扎水”“繁殖期领域防卫”“地面集群或单对繁殖”。不要加入“昼行专性”或“终生不停飞”等绝对描述。

## 繁殖与育幼

北极燕鸥在近水的砂砾、岩地、短草或苔藓上利用天然浅洼或刮出浅窝，偶尔在边缘加入草、细石和贝壳碎片。可单对繁殖，也常形成从少量到数百对的群落；亲鸟会猛烈俯冲驱赶接近者。[Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/) [Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory)

项目采用下列内部一致的高纬生活史口径：

- 每窝**一至两枚卵，偶尔三枚**；
- 雌雄共同孵化 **21—22 天**；
- 雏鸟约三日龄离开巢窝，在群落地面活动；
- 双亲继续喂食约三周，直至幼鸟能够飞行；
- 约 3—4 岁达到性成熟。

[Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)

Cornell 汇总为 1—3 枚、孵化 21—23 天、巢雏期 21—28 天；BTO 列出的孵化范围还可宽至 20—24 天。三个来源不是互相否定，而是地理范围、样本和摘要方式不同。产品特色统计要保留“21—22 天”的来源口径，不应取不同来源端点拼成 20—24 天再把它说成更精确的全球规律。[Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory) [BTO BirdFacts](https://www.bto.org/learn/about-birds/birdfacts/arctic-tern)

产卵时点受纬度、融雪和食物显著影响。斯瓦尔巴通常六月下旬开始，不能把它扩写成整个环北极范围固定的全球繁殖日期。恶劣天气、晚融雪和食物不足可导致当年不繁殖或高卵雏死亡。[Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)

## 迁徙：可以展示的数字与限定

### Egevang 等 2010 年的 11 条轨迹

研究在 2007 年给东北格陵兰 50 只、冰岛 20 只繁殖成鸟安装光照地理定位器。次年回收并获得 10 只格陵兰鸟、1 只冰岛鸟的迁徙资料；其中 10 台提供完整一年轨迹，另 1 台提供半年资料。设备本体 1.4 克，连腿环等约 2.0 克，约为成鸟体重的 1.9%。[Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107) [open full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC2836663/)

可展示结果：

| 指标 | 研究结果 | 限定 |
| --- | --- | --- |
| 离开繁殖地至返回的移动距离 | 平均 70,900 km；59,500—81,600 km | 排除繁殖季内部移动；11 只追踪鸟，不是全种常数 |
| 南下迁徙 | 平均 34,600 km；93 天 | 格陵兰组表格的时长均值为 93 天，冰岛唯一个体为 80 天 |
| 北返迁徙 | 平均 25,700 km；40 天 | 格陵兰组 36—46 天，冰岛唯一个体 41 天 |
| 南大洋阶段移动 | 平均 10,900 km | 追踪鸟在非繁殖海区仍持续移动 |

北返平均只用 40 天，南下平均约 93 天，虽然北返距离仍有南下的约四分之三。研究认为顺风系统、路线和停留策略参与造成差异；不能把 40 天换算成鸟在所有时段不休息的固定空速。[Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107)

### 不能省略的方法局限

光照地理定位通过日出日落估算位置。该研究引用的飞行海鸟位置精度约为 185 千米；春秋分附近纬度不可用，高纬极昼也会造成位置空缺。研究者在有效点之间插值并计算大圆距离，累计里程随路径步长和轨迹曲折尺度改变。作者因此把数值视为保守的最低估计，同时明确说它们不能与使用不同方法的研究直接比较。[Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107)

70,900 千米不能写进通用 `metrics`：现有 schema 无法同时保存样本量、繁殖地、年份、设备误差和统计范围。它适合放在带完整注释的 `featuredStats`。

### 后续研究揭示的种群与个体差异

波罗的海 8 只个体的 12 个完整年周期显示约 50,000 千米的年度回路，并经印度洋、塔斯曼海等更偏东的南大洋路线；样本和光照定位精度不足以支持严格的全种定量比较。[Alerstam et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6745660/)

Wong 等追踪北美 5 个繁殖群落的 53 只鸟，识别出大西洋西非、大西洋巴西和太平洋沿岸等南下路线，以及大西洋和太平洋中洋北返路线。各群落迁徙时点相差可达一至两个月；另一项比较还发现个体差异可大于群落间差异。因此“大西洋 S 形航线”是某些追踪群体的结果，不是北极燕鸥唯一航线。[Wong et al. 2021](https://doi.org/10.3354/meps13779) [Wong et al. 2022](https://doi.org/10.1007/s00300-022-03043-2)

媒体常见的 96,000 千米来自法恩群岛项目的一只追踪鸟估算，也受光照定位和路径累计方法限制。它可以作为单鸟案例背景，不能取代 11 鸟研究的统计结果，更不能写成所有北极燕鸥每年的“世界纪录”。[Natural History Society of Northumbria](https://www.nhsn.org.uk/an-update-on-the-farne-islands-arctic-terns/)

## 威胁、保护与国际协定

### 主要威胁

1. **关键猎物短缺与渔业压力**：玉筋鱼等小型鱼的补充量受海温影响，渔业捕捞可叠加食物不足；北极燕鸥不一定能在繁殖期迅速切换到等价猎物，局地会连续繁殖失败。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)
2. **气候变化与海冰、生境转移**：海温、融雪、风场、风暴和南极海冰变化会改变繁殖时间、猎物和迁徙期资源；方向和强度因地区而异，不能写成单一确定结果。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107)
3. **繁殖地干扰与生境退化**：步行者、犬、车辆、岸线工程和反复接近会使地面巢受踩踏、暴露或弃巢；屏障岛和低海拔岸滩还承受侵蚀及淹水。[Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory) [BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)
4. **外来捕食者与本地捕食压力**：外来美洲水貂可显著降低岛屿繁殖成功；北极狐、贼鸥和大型鸥也会捕食卵雏，但本地捕食者不是应被全球无差别清除的“外来害兽”。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)
5. **取卵和其他直接利用**：部分地区持续的取卵会降低繁殖成功，严重时促使繁殖群落放弃地点。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)
6. **渔业意外影响和污染**：BirdLife 把大规模渔业的非目标影响列为正在发生但严重度未定的威胁；缠绕、油污和海洋垃圾风险应按地点描述，不虚构全球死亡比例。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)

LC 不等于稳定，更不代表各地安全。全球趋势是 decreasing；与此同时，一些地区可稳定或增加，另一些繁殖地会下降、连续失败或消失。北极燕鸥常换巢址、不同年份不一定都尝试繁殖，也使简单计数更难解释。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea) [Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)

### 推荐保护行动

- 对繁殖岛、沙洲和岸滩实施季节性封闭、犬只管理和清晰缓冲区，避免踩巢与反复惊飞。
- 在有证据的岛屿清除或控制外来美洲水貂等捕食者，并设置生物安全措施防止重新入侵。
- 监管取卵和其他直接利用，把允许量与繁殖成功、群落规模及长期趋势挂钩。
- 以生态系统方式管理玉筋鱼等关键饵料鱼，避免食物低谷年份叠加高捕捞压力。
- 长期监测繁殖对、实际参繁比例、繁殖成功、成幼鸟生存和巢址转移，避免把单一群落空缺直接当作全种损失。
- 协调跨洋追踪和南大洋观测，监测迁徙停歇区、上升流和海冰边缘的长期变化。
- 减少海洋塑料、遗失渔具、油污和繁殖地垃圾；现场调查保持距离，不用无人机低空追逐群落。

### CMS、AEWA 与 CITES

- **CMS**：现行附录自 2026-06-27 生效，Appendix II 条目是 `Sterna paradisaea (Atlantic populations)`。标签若要使用，必须写“CMS 附录 II（大西洋种群）”，不能只写“全种列入附录 II”。[CMS 2026 appendices](https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf) [CMS notice](https://www.cms.int/news/2026012-revised-cms-appendices)
- **AEWA**：Table 1 覆盖 `Western Eurasia (bre) / Atlantic (nbr)`，即西欧亚繁殖、大西洋非繁殖种群，当前表中为 C 栏 category 1。它不能代表北美、北太平洋或全球全部种群。[AEWA MOP9 Table 1 document](https://www.unep-aewa.org/sites/default/files/document/aewa_mop9_16_proposed_amendments.pdf) [AEWA species list](https://www.unep-aewa.org/species)
- **CITES**：官方 Checklist 与现行附录没有检出 *Sterna paradisaea*；Laridae 的包含性列名也不覆盖整个科。若正文写“未列入 CITES 附录”，应同时保留 2026-08-26 的检索日期；不要写成“CITES 未评估”，因为 CITES 是贸易列名制度，不是灭绝风险评估。[CITES Checklist](https://checklist.cites.org/) [CITES-listed species database](https://cites.org/eng/node/10288)

## 推荐关键事实

1. IOC v15.2 把北极燕鸥列为单型种，不承认亚种。[IOC master lists](https://www.worldbirdnames.org/new/ioc-lists/master-list-2/)
2. IUCN/BirdLife 2018 全球评估为 LC、趋势下降，LC 不等于稳定或所有局地种群安全。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en)
3. 它是完整迁徙型物种，在环北极和亚北极繁殖，非繁殖季跨洋到南大洋和南极浮冰缘。[BirdLife DataZone](https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea)
4. 11 只格陵兰与冰岛追踪鸟平均移动 70,900 千米，范围 59,500—81,600 千米；该样本不能代表全种或每只鸟的固定年里程。[Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107)
5. 同一研究中北返平均 40 天，南下平均 93 天；路线、风场和停留策略共同影响速度差异。[Egevang et al. 2010](https://doi.org/10.1073/pnas.0909493107)
6. 繁殖成鸟有薄而通红的喙、极短红腿和长而深分叉的尾；非繁殖期喙腿转黑、额部变白。[Cornell Lab identification](https://www.allaboutbirds.org/guide/Arctic_Tern/id)
7. 每窝一至两枚卵，偶尔三枚；雌雄共同孵化 21—22 天。[Norwegian Polar Institute](https://npolar.no/en/species/arctic-tern/)
8. 主要从水面或近水面浅扎水捕捉小鱼与甲壳类，不是用足爪抓鱼的深潜猎手。[Cornell Lab life history](https://www.allaboutbirds.org/guide/Arctic_Tern/lifehistory)

## 不应写入档案的无限定说法

- “所有北极燕鸥每年迁徙 70,900 千米”——这是 11 只追踪鸟的均值。
- “每只都飞 96,000 千米”——这是单鸟光照定位案例，不能外推。
- “固定沿非洲西岸往返”——其他种群和同群个体使用巴西、太平洋、印度洋等路线。
- “只在北极圈内、只在海岸繁殖”——南限可到约 50°N，并利用内陆湖泊、河流和湿地。
- “在南极繁殖”——南大洋与浮冰缘是非繁殖期使用区，繁殖在北半球。
- “全年红喙红腿”——非繁殖成鸟喙腿黑、额白。
- “LC 所以数量稳定、没有保护问题”——正式全球趋势为 decreasing，局地可连续失败或消失。
- “CMS 附录 II 保护整个物种”——现行条目只写大西洋种群。
- “CITES 未评估”——应说未列入附录，而不是套用风险评估术语。

## 六张图的科学边界

所有画面为科学约束下的原创重建，不代表真实个体、真实监测记录或精确迁徙轨迹。输出统一为 **1536 × 1024、3:2 横幅**。

| 文件名 | 科学场景 | 必须出现 | 必须避免 |
| --- | --- | --- | --- |
| `01-arctic-coast-breeding-adult.webp` | 封面：北极或亚北极低植被海岸，一只繁殖成鸟低飞，主体偏右、左侧留标题空间 | 完整两翼、细长尖翼、黑色头顶、薄而全红的喙、浅灰身体、短红腿、长而深分叉尾 | 黑色喙尖、鸥类粗喙、短宽翼、裁切翼尖、冰山奇观、第二只鸟、文字水印 |
| `02-flight-field-marks.webp` | 一只繁殖成鸟在清晰侧下视角飞行，用姿态展示鉴别点 | 红喙、腿短、长而深分叉的尾、银灰翼下，两翼与尾均完整 | 普通燕鸥式黑喙尖、黑腿、非繁殖额白、额外翅腿、标签箭头或文字 |
| `03-antarctic-pack-ice-migration.webp` | 南大洋宽景，一只非繁殖成鸟沿破碎浮冰缘和开水带飞行或短暂停栖 | 生境占画面至少 80%；白额、缩小黑帽、黑喙黑腿；浮冰是海冰而非陆地冰川 | 红喙红腿的繁殖羽、企鹅群、巨大冰山旅游场景、地图箭头、声称这是固定唯一越冬点 |
| `04-shallow-plunge-foraging.webp` | 一只鸟在近水面浅扎水捕食一条合理大小的小鱼 | 浅水或表层动作清楚，水花克制，鱼小于喙—头尺度的合理比例 | 深水追逐、完全没入数米、足爪抓鱼、巨大鱼、血液、第二只鸟 |
| `05-ground-scrape-and-two-eggs.webp` | 低矮苔原或砂砾岸地面浅刮巢，恰好两枚斑驳卵，一只亲鸟在旁 | 地面浅窝、恰好两枚橄榄褐或浅黄褐底深斑卵、低植被和近水背景 | 三枚以上卵、树巢、悬崖巢、篮状大巢、雏鸟、第二只成鸟、人手触卵 |
| `06-distance-colony-monitoring.webp` | 宽景繁殖地，一只亲鸟或单个巢在前景，恰好两名调查人员远距离观察 | 人员在 30—50 米外，以三脚架望远镜和记录板工作；人与巢之间有连续缓冲空间 | 靠近抓鸟、触卵、无人机低飞、游客自拍、投喂、额外人员、把画面当真实计数证据 |

六图共同形态总检：**one slender compact tern; exactly two long narrow angular wings; one long deeply forked tail; one thin straight bill; very short legs; breeding adult with full black cap and all-red bill/legs, nonbreeding adult with white forehead and black bill/legs; no black bill tip on breeding adult, gull-like heavy bill, raptor talons, teeth, extra wings, extra legs, clipped wing tips, text, labels, map arrows, or watermark**。

## 推荐来源数组

以下来源覆盖测试所需的 `taxonomy`、`conservation`、`ecology`、`general` 和 `distribution` 五类。对象只引用同一常量，不重复内联。

```ts
const ARCTIC_TERN_SOURCE_DATE = '2026-08-26' as const;
const ARCTIC_TERN_CONTENT_DATE = '2026-08-26' as const;

const ARCTIC_TERN_SOURCES = [
  {
    title: 'IOC World Bird List v15.2 — Gulls, Terns, Skimmers',
    url: 'https://www.worldbirdnames.org/new/bow/gulls/',
    kind: 'taxonomy',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'IOC World Bird List v15.2 — Master and multilingual lists',
    url: 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
    kind: 'taxonomy',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Sterna paradisaea (2018 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en',
    kind: 'conservation',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone — Arctic Tern Sterna paradisaea',
    url: 'https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea',
    kind: 'general',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'BTO BirdFacts — Arctic Tern',
    url: 'https://www.bto.org/learn/about-birds/birdfacts/arctic-tern',
    kind: 'general',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Cornell Lab — Arctic Tern identification and measurements',
    url: 'https://www.allaboutbirds.org/guide/Arctic_Tern/id',
    kind: 'general',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Norwegian Polar Institute — Arctic tern life history',
    url: 'https://npolar.no/en/species/arctic-tern/',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Egevang et al. 2010 — Tracking of Arctic terns reveals longest animal migration',
    url: 'https://doi.org/10.1073/pnas.0909493107',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Alerstam et al. 2019 — Arctic tern migrations from the Baltic Sea',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6745660/',
    kind: 'ecology',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'Wong et al. 2021 — Migratory routes and timing among North American colonies',
    url: 'https://doi.org/10.3354/meps13779',
    kind: 'distribution',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'CMS — Appendices I and II effective 27 June 2026',
    url: 'https://www.cms.int/sites/default/files/basic_page_documents/revised-appendices_cop15_e.pdf',
    kind: 'conservation',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
  {
    title: 'AEWA MOP9 — Table 1 population listing for Arctic Tern',
    url: 'https://www.unep-aewa.org/sites/default/files/document/aewa_mop9_16_proposed_amendments.pdf',
    kind: 'conservation',
    accessedAt: ARCTIC_TERN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

`focalPoint` 是按构图目标给出的暂定值；六张运行时图生成并裁切后，必须按实际主体位置复核。

```ts
{
  id: 'species-sterna-paradisaea',
  slug: 'arctic-tern',
  names: {
    zh: '北极燕鸥',
    en: 'Arctic Tern',
    aliases: ['北極燕鷗'],
  },
  scientificName: 'Sterna paradisaea',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Aves', '鸟纲'),
    taxon('Charadriiformes', '鸻形目'),
    taxon('Laridae', '鸥科'),
    taxon('Sterna', '燕鸥属'),
  ),
  conservation: conservation('LC', 'decreasing', 2018),
  distribution: {
    realms: ['marine', 'terrestrial', 'freshwater'],
    continents: ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲', '南极洲'],
    regions: [
      '环北极与亚北极繁殖带',
      '北大西洋与北太平洋',
      '南大西洋、南印度洋与南太平洋',
      '南大洋与南极浮冰缘',
    ],
    countries: ['加拿大', '美国', '丹麦', '冰岛', '英国', '法国', '挪威', '瑞典', '芬兰', '俄罗斯'],
    range:
      '在北半球环北极与亚北极海岸、岛屿、苔原、林线及部分内陆湿地繁殖；作为完整迁徙型物种跨越大西洋、太平洋和印度洋，非繁殖季主要利用南大洋及南极浮冰缘。',
  },
  habitats: [
    {
      name: '海岸、陆架海与开阔远洋表层',
      realm: 'marine',
      description: '近岸湾、河口、外海锋面和南大洋高生产力水域构成主要觅食与迁徙环境；非繁殖期常利用浮冰缘和开水带。',
      isPrimary: true,
    },
    {
      name: '低植被海岸、岛屿与苔原地面',
      realm: 'terrestrial',
      description: '在砂砾滩、岸脊、岩地、低草地、泥炭地和苔原近水地面筑浅刮巢，也可使用开阔北方林地。',
    },
    {
      name: '湖泊、池塘、河流及内陆湿地',
      realm: 'freshwater',
      description: '部分种群在湖岛、河心洲、河岸和淡水湿地附近繁殖，并在湖泊、池塘与河流表层取食。',
    },
  ],
  measurements: {
    length: { min: 28, max: 39, unit: 'cm', note: 'Cornell 两性合并范围。' },
    weight: { min: 90, max: 120, unit: 'g', note: 'Cornell 两性合并范围。' },
    wingspan: { min: 65, max: 75, unit: 'cm', note: 'Cornell 两性合并范围。' },
  },
  diet: {
    types: ['piscivore', 'carnivore'],
    foods: ['玉筋鱼等小型鱼类', '鲱、鳕与胡瓜鱼类', '磷虾等甲壳类', '昆虫', '软体动物与多毛类'],
    description:
      '以小鱼和甲壳类为主，也取食昆虫、软体动物及其他小型无脊椎动物；多在水面啄取、接触点水或近水面浅扎水，食谱随海区、季节和繁殖纬度改变。',
  },
  activity: ['完整迁徙型', '远洋长距离迁徙', '水面觅食与浅扎水', '繁殖期领域防卫', '地面集群或单对繁殖'],
  tags: ['环极海鸟', '跨赤道迁徙', '南极浮冰缘', '地面筑巢', '单型种', 'IUCN 无危但趋势下降'],
  summary: '在北半球高纬繁殖、沿全球海洋追随夏季到达南极浮冰缘的长距离迁徙海鸟。',
  description:
    '北极燕鸥是没有获承认亚种的完整迁徙型海鸟。它以细长尖翼、极短腿和深叉长尾跨越大西洋、太平洋与印度洋，在北半球环北极及亚北极繁殖，非繁殖季利用南大洋和南极浮冰缘。IUCN/BirdLife 2018 全球评估为 LC、趋势下降；无危不等于稳定，部分繁殖群落会因食物短缺、捕食、干扰和气候变化连续失败或消失。',
  storySections: [
    {
      key: 'identity',
      label: '名称与分类',
      title: '一个没有获承认亚种的环极物种',
      body: 'IOC v15.2 接受 Sterna paradisaea，中文名北极燕鸥、英文名 Arctic Tern，并不列种下分类单元。它是单型种，但不同繁殖群体仍可表现出明显的迁徙路线和时间差异。',
    },
    {
      key: 'field-marks',
      label: '飞行鉴别',
      title: '红喙、短腿和一把长而深分叉的尾',
      body: '繁殖成鸟的喙薄而通红，红腿极短，黑色头顶延至后颈；长窄尖翼下方银灰，长尾深分叉。非繁殖期额部变白、喙腿转黑，图像和文字不能混用两套季节羽色。',
    },
    {
      key: 'migration',
      label: '跨洋迁徙',
      title: '70,900 千米是一组轨迹，不是物种刻度',
      body: 'Egevang 等追踪的 11 只格陵兰和冰岛鸟平均移动 70,900 千米，范围 59,500—81,600 千米；北返平均 40 天、南下 93 天。光照定位误差、缺测和样本来源限制了外推，其他种群可走太平洋或印度洋路线。',
    },
    {
      key: 'feeding',
      label: '表层觅食',
      title: '在浪尖和浅水层捕捉小鱼',
      body: '它先悬停或低飞定位，再从水面啄取或浅扎水捕捉玉筋鱼、鲱等小鱼，也吃甲壳类、昆虫和软体动物。猎物随海区变化；它不是深潜海鸟，也不用足爪抓鱼。',
    },
    {
      key: 'breeding',
      label: '地面繁殖',
      title: '两枚卵可以只藏在一处浅窝里',
      body: '巢是砂砾、苔藓或短草地面的浅刮窝。每窝一至两枚卵，偶尔三枚，双亲共同孵化 21—22 天；融雪、食物和天气会改变产卵时点及当年是否繁殖。',
    },
    {
      key: 'conservation',
      label: '局地风险',
      title: '全球无危，繁殖地仍会失去幼鸟',
      body: '全球 LC 与 decreasing 可以同时成立。保护要守住地面巢的季节缓冲区，清除有证据的岛屿外来捕食者，维持关键饵料鱼，并把繁殖成功、参繁比例和巢址转移纳入长期监测。',
    },
  ],
  keyFacts: [
    'IOC v15.2 把北极燕鸥列为单型种，不承认亚种。',
    'IUCN/BirdLife 2018 全球评估为 LC、趋势下降；LC 不等于稳定或所有繁殖地安全。',
    '它是完整迁徙型物种，在环北极和亚北极繁殖，非繁殖季跨洋到南大洋及南极浮冰缘。',
    '11 只格陵兰与冰岛追踪鸟平均移动 70,900 千米，范围 59,500—81,600 千米，不能外推为全种或每只个体的固定里程。',
    '同一研究中北返平均 40 天，南下平均 93 天，路线、风场和停留策略共同影响速度。',
    '繁殖成鸟有通红的薄喙、极短红腿和长而深分叉的尾，非繁殖期喙腿转黑、额部变白。',
    '每窝一至两枚卵，偶尔三枚；雌雄共同孵化 21—22 天。',
    '主要从水面或近水面浅扎水捕捉小鱼与甲壳类，不用足爪抓鱼。',
  ],
  threats: [
    '海温变化与渔业压力共同造成玉筋鱼等关键猎物短缺',
    '气候变化改变融雪、风暴、繁殖地、迁徙期资源和南极海冰',
    '游客、犬只、车辆与岸线工程干扰或破坏地面巢',
    '外来美洲水貂等岛屿捕食者降低繁殖成功',
    '部分地区取卵导致繁殖成功下降或群落弃址',
    '渔业意外影响、塑料、遗失渔具和油污',
  ],
  conservationActions: [
    '对繁殖岛、沙洲和岸滩实行季节性缓冲、犬只管理与踩巢防护',
    '在有证据的岛屿控制或清除外来捕食者，并防止重新入侵',
    '监管取卵和其他直接利用，使利用强度服从长期繁殖监测',
    '以生态系统方式管理玉筋鱼等关键饵料鱼，避免食物低谷叠加高捕捞',
    '长期监测繁殖对、参繁比例、繁殖成功、生存和巢址转移',
    '开展跨洋追踪与南大洋观测，监测停歇区、上升流和海冰边缘变化',
    '减少海洋塑料、遗失渔具、油污及繁殖地垃圾',
  ],
  metrics: {
    adultLengthCm: [28, 39],
    adultMassKg: [0.09, 0.12],
    wingspanCm: [65, 75],
  },
  featuredStats: [
    {
      key: 'tracked-annual-distance',
      label: '11 只追踪鸟平均移动',
      value: '70,900',
      unit: '千米',
      note: '59,500—81,600 千米；格陵兰 10 只、冰岛 1 只，不代表全种、所有种群或每只个体的固定年里程',
    },
    {
      key: 'northbound-duration',
      label: '追踪鸟北返平均用时',
      value: '40',
      unit: '天',
      note: '同一研究的南下平均为 93 天；不能换算成全程不停飞的固定空速',
    },
    {
      key: 'wingspan',
      label: '翼展',
      value: '65—75',
      unit: '厘米',
      note: 'Cornell 两性合并范围',
    },
    {
      key: 'incubation',
      label: '孵化期',
      value: '21—22',
      unit: '天',
      note: '双亲孵化；每窝一至两枚卵，偶尔三枚',
    },
  ],
  media: {
    image: './images/species/arctic-tern/01-arctic-coast-breeding-adult.webp',
    alt: '北极海岸上空，一只黑色头顶、通红细喙、短红腿和深叉长尾的繁殖期北极燕鸥展开长窄双翼低飞',
    focalPoint: { x: 0.7, y: 0.47 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/arctic-tern/02-flight-field-marks.webp',
        alt: '一只繁殖期北极燕鸥侧向飞行，清楚露出通红细喙、短腿、银灰长窄双翼和长而深分叉的尾',
        title: '飞行中的鉴别点',
        caption: '繁殖成鸟的红喙没有普通燕鸥常见的黑色尖端，腿更短，深叉尾更长；生成重建仍不能替代野外多特征鉴定。',
        focalPoint: { x: 0.52, y: 0.48 },
      },
      {
        image: './images/species/arctic-tern/03-antarctic-pack-ice-migration.webp',
        alt: '南大洋开水带和破碎南极浮冰占据宽景，一只白额、黑喙黑腿的非繁殖期北极燕鸥沿浮冰缘飞行',
        title: '抵达南极浮冰缘',
        caption: '许多个体在南半球夏季利用南大洋浮冰缘，但种群、年份和个体路线不同；这里不是全种唯一固定越冬点。',
        focalPoint: { x: 0.58, y: 0.42 },
      },
      {
        image: './images/species/arctic-tern/04-shallow-plunge-foraging.webp',
        alt: '一只北极燕鸥在近水面浅水层扎水捕食一条小鱼，身体刚触及表层并激起少量水花',
        title: '只扎入表层',
        caption: '它会从水面啄食或浅扎水捕捉小鱼，也摄食甲壳类与昆虫；不是以足爪抓鱼的深潜猎手。',
        focalPoint: { x: 0.51, y: 0.52 },
      },
      {
        image: './images/species/arctic-tern/05-ground-scrape-and-two-eggs.webp',
        alt: '北极海岸低植被砂砾地的地面浅刮巢中恰好有两枚深色斑驳卵，一只北极燕鸥亲鸟守在旁边',
        title: '地面浅窝里的两枚卵',
        caption: '每窝通常一至两枚卵，偶尔三枚；双亲共同孵化 21—22 天，产卵时间随纬度、融雪和食物变化。',
        focalPoint: { x: 0.51, y: 0.59 },
      },
      {
        image: './images/species/arctic-tern/06-distance-colony-monitoring.webp',
        alt: '北极燕鸥繁殖地宽景中，两名调查人员在远距离以三脚架望远镜和记录板观察一个地面巢',
        title: '把距离留给繁殖群落',
        caption: '繁殖监测需要记录参繁比例、成功率和巢址转移，同时保持缓冲距离；这幅重建不代表真实数量或趋势。',
        focalPoint: { x: 0.53, y: 0.52 },
      },
    ],
  },
  sources: ARCTIC_TERN_SOURCES,
  featured: true,
  publishedAt: ARCTIC_TERN_CONTENT_DATE,
  updatedAt: ARCTIC_TERN_CONTENT_DATE,
}
```

## 实施核对表

- 新增分类节点 `Charadriiformes / 鸻形目`、`Laridae / 鸥科`、`Sterna / 燕鸥属`；复用 `Animalia`、`Chordata` 和 `Aves`。
- 名称必须是北极燕鸥／Arctic Tern，alias 只有 `北極燕鷗`；正文明确“单型种，没有获承认亚种”。
- 保护字段必须是 `LC / decreasing / 2018`，对象中不能出现 `criteria`。
- `distribution.realms` 按 `marine / terrestrial / freshwater` 写齐，不设置 `center` 或 `endemicTo`。
- 不填 `estimatedMatureIndividuals`；超过 2,000,000 只只作为带“全部年龄个体、开放下界”的正文信息。
- 恰好 6 个 `storySections`、4 个 `featuredStats`、1 张封面和 5 张 gallery。
- 70,900 千米的 label 或 note 必须同时写明 11 只、59,500—81,600 千米和不可外推到全种／所有个体。
- 迁徙正文保留北返 40 天、南下 93 天的研究限定；不把 96,000 千米单鸟案例写进结构化统计。
- 繁殖正文保留“一至两枚，偶尔三枚”和“孵化 21—22 天”。
- 六张资产完成后逐图核对季节羽色、翼尾数量、红喙是否误加黑尖、两枚卵、调查人员距离和实际 `focalPoint`。
- 数据、运行时 WebP、源图文档、测试、类型检查、构建与静态图像检查全部通过后，才从 `docs/todo.md` 删除北极燕鸥一行。
