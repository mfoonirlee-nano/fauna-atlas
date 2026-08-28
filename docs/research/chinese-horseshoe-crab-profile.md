# 中华鲎（_Tachypleus tridentatus_）完整档案研究

- 检索、内容与访问日期：2026-08-27
- 展示中文名：**中华鲎**
- 英文主名：**Chinese Horseshoe Crab**
- 接受学名：**_Tachypleus tridentatus_ (Leach, 1819)**
- IUCN 英文主名：**Tri-spine Horseshoe Crab**
- 推荐 slug：`chinese-horseshoe-crab`
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面、5 张图库图、6 段故事、4 个展示数字和来源数组
- 证据口径：分类采用 WoRMS 当前骨架；全球保护等级、趋势、评估年、准则、范围与三代窗口采用 IUCN 原始评估；中国保护级别采用国务院批准的 2021 年国家重点保护野生动物名录；体尺、形态、食性、行为、繁殖和血淋巴机制采用物种级原始论文；鲎试剂用途边界采用 FDA、USP 与原始凝固级联研究
- 核心边界：本档案只写 _T. tridentatus_。不得把美洲鲎 _Limulus polyphemus_、圆尾鲎 _Carcinoscorpius rotundicauda_ 或南方鲎 _Tachypleus gigas_ 的分布、体尺、采血制度、卵与候鸟关系直接移植过来

## 结论摘要

1. WoRMS 接受 _Tachypleus tridentatus_ (Leach, 1819)，AphiaID 238270；原始组合为 _Limulus tridentatus_ Leach, 1819。仓库分类链采用 Arthropoda、Merostomata、Xiphosurida、Limulidae、_Tachypleus_。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=238270)
2. 中文主名用“中华鲎”，兼顾 TODO 和大陆公众语境；“中国鲎”是中国国家保护名录和香港政府常用名，“三棘鲎”是台湾及部分专业资料常用名。三者可进入 aliases。“马蹄蟹”“鲎”“Horseshoe Crab”会泛指多种现生鲎，不进入结构化别名。
3. IUCN 原始评估日期为 2018-07-22，2019 年发布勘误版，全球等级 **Endangered**，准则 **A4bcd**，趋势 **decreasing**。`assessedYear` 应写 2018。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en)
4. IUCN 推断在约 60 年、即三代的窗口内，物种在分布区重要部分持续减少至少 50%。证据综合了约 1980 年起的历史估计和未来至少 20 年的预测；这个比例不是一次全球同步普查的点估计。
5. IUCN 采用北部种群 20.25 年世代长度，三代为 60.75 年并取整到约 60 年。南部种群可能更早成熟，因此不能把 20.25 年当作每只中华鲎固定寿命或初次繁殖年龄。
6. 原生国家按 IUCN 为中国、日本、越南、菲律宾、马来西亚、文莱和印度尼西亚；香港、台湾在评估中单列记录，落库时归入中国并在 regions 与 range 明写。韩国济州 1979 年单雌记录没有关联繁殖地或育幼地，IUCN 不把它计入稳定分布范围。
7. IUCN 将本种系统标为 Marine 与 Terrestrial。成体、亚成体和幼体主要使用海洋及潮间带环境；高位沙滩产卵环节解释了 terrestrial realm。离水暴露不把它变成陆生节肢动物。
8. 可靠体尺上限来自有明确测量口径的资料：IUCN 汇总沙巴罕见雌体总长 85.0 cm，含尾剑；菲律宾巴拉望 108 只成体样本中，雌体最大 4.33 kg、前体宽 360 mm，雄体最大 1.65 kg、前体宽 297 mm。地域、性别和测量部位差异很大，85 cm 不能写成普通成体体长。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en) [Baylon & Alcantara-Creencia 2022](https://doi.org/10.31398/tpjf/29.2.2022-0017)
9. 雄体通常较小，前体前缘有两处凹入且正面较拱；第二、第三对前体附肢末端膨大成抱钩，后体边缘六枚活动棘较显著。雌体前缘无凹入、正面较平、附肢不改造成抱钩，三枚活动棘会退化或缺失。最终判性仍应结合生殖厣，而不是只看大小。
10. “三棘”指后体末端常见的三枚固定小棘，但巴拉望和印度尼西亚物种级研究都记录到 0 至 3 枚或单棘形态。识别应合并后体棘、尾剑横截面与表面小刺、前体轮廓、性别和地理来源，不能只数三枚小棘。
11. 幼体是潮滩底栖杂食者。胃含物研究记录摇蚊幼虫、多毛类、寡毛类、小蟹和薄壳双壳类；稳定同位素研究支持多毛类、甲壳类、双壳类等混合食物，并显示海草相关食物网提供重要碳源。这个结果不等于中华鲎以整株海草为主食。[Kwan et al. 2015](https://doi.org/10.1007/s00227-015-2647-3) [Zhou & Morton 2004](https://doi.org/10.1080/0022293031000155377)
12. 成体在近岸海床生活并季节性靠岸繁殖。雌体在高潮线附近的沙质上部潮间带挖卵窝，雄体抱附并在排卵后外部受精；胚胎在沙中发育。日本研究显示孵化幼体集中在春潮高潮前后离沙入水，这是地点性潮汐节律，不是全分布区统一日历。[Maeda et al. 2000](https://doi.org/10.5179/benthos.55.15)
13. 氧合血淋巴呈蓝色，因为血蓝蛋白以铜离子可逆结合氧；血蓝蛋白承担运氧。TAL 的关键材料是变形细胞裂解物及其凝固因子。蓝色本身不触发检测，两套机制不能混写。[Xu et al. 2020](https://doi.org/10.1016/j.aquaculture.2019.734576) [Iwanaga 2007](https://doi.org/10.2183/pjab.83.110)
14. TAL 通过因子 C 对革兰阴性菌脂多糖内毒素的响应启动凝固级联。含因子 G 的制剂还会响应 `(1→3)-β-D-葡聚糖`。FDA 认可的 ST72 标准把来源限定为 _L. polyphemus_ 或 _T. tridentatus_ 的变形细胞裂解物，并明确该方法不适用于细菌内毒素以外的热原。它不能证明样品无菌，也不是病毒、癌症或所有病原体的通用检测。[FDA ST72](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfstandards/detail.cfm?standard__identification_no=40962)
15. “活化石”只能当作古老体型方案与形态保守性的通俗简称。现生四种鲎不是四亿多年不变的同一种动物；分子系统学把亚洲现生种的分化放在古近纪，中华鲎基因组也记录持续的基因组演化。[Obst et al. 2012](https://doi.org/10.1016/j.ympev.2011.08.025) [Zhou et al. 2020](https://doi.org/10.1186/s12864-020-6488-1)
16. 主要威胁是成体捕捞及生物医药利用、食用捕捞尤其对抱卵雌体的选择、兼捕，以及围填海、养殖工程、岸线建设、海砂开采和污染造成的产卵地与育幼地丧失。长成熟期和地点性育幼地使恢复缓慢。
17. 中国大陆自 2021 年把“中国鲎”列为国家二级重点保护野生动物。该国内保护级别不等于 CITES 附录；截至 2026-08-27，CITES 官方物种清单检索不到 _T. tridentatus_ 附录记录。[国家林业和草原局名录 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf) [CITES Checklist](https://checklist.cites.org/)

## 名称、分类与物种边界

### 接受分类链

| 阶元 | 学名 | 中文名 | 落库口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 仓库固定 |
| 门 | Arthropoda | 节肢动物门 | WoRMS |
| 纲 | Merostomata | 肢口纲 | WoRMS 当前记录；公众材料也常写“鲎纲” |
| 目 | Xiphosurida | 剑尾目 | WoRMS 当前记录 |
| 科 | Limulidae | 鲎科 | WoRMS 当前记录 |
| 属 | _Tachypleus_ | 东方鲎属 | 接受属 |
| 种 | _T. tridentatus_ | 中华鲎 | 接受种 |

中国 2021 年保护名录沿用监管文件自身的高阶分类排布。仓库采用 WoRMS 的 Merostomata、Xiphosurida、Limulidae，避免把监管名录与数据库骨架的层级差异误写成不同物种。

```ts
names: {
  zh: '中华鲎',
  en: 'Chinese Horseshoe Crab',
  aliases: ['中国鲎', '三棘鲎', 'Tri-spine Horseshoe Crab'],
},
scientificName: 'Tachypleus tridentatus',
taxonomy: animalTaxonomy(
  taxon('Arthropoda', '节肢动物门'),
  taxon('Merostomata', '肢口纲'),
  taxon('Xiphosurida', '剑尾目'),
  taxon('Limulidae', '鲎科'),
  taxon('Tachypleus', '东方鲎属'),
),
```

### 名称字段

- **中华鲎**：产品主名，与 TODO 一致，现代中文公众资料广泛使用
- **中国鲎**：中国国家保护名录和香港政府使用的规范名，适合进入别名
- **三棘鲎**：台湾政府和部分学术资料常用名，对应 IUCN 的 Tri-spine Horseshoe Crab
- **Chinese Horseshoe Crab**：产品英文主名，与既定 slug 一致，也是 IUCN 收录名
- **Tri-spine Horseshoe Crab**：IUCN 勘误版的英文主名，进入 aliases
- **Japanese Horseshoe Crab**：历史英文名之一；IUCN 勘误后不再作为主名。它还会误导读者把分布缩到日本，不进入 aliases
- **鲎、Horseshoe Crab、马蹄蟹、King Crab**：可能泛指多种现生鲎，或与真正的 king crabs 混淆，不进入 aliases
- **夫妻鱼、鸳鸯蟹**：地区俗名常借产卵时雄体抱附雌体形成，容易制造终生配偶叙事，不进入 aliases

### 四种现生鲎必须分开

| 接受种 | 推荐英文名 | 主要分布边界 | 本档案不得借用的内容 |
| --- | --- | --- | --- |
| _Tachypleus tridentatus_ | Tri-spine / Chinese Horseshoe Crab | 日本至中国沿海，再到越南、菲律宾、婆罗洲与印度尼西亚部分海岸 | 本档案主体 |
| _Tachypleus gigas_ | Coastal Horseshoe Crab | 南亚和东南亚暖水海岸，部分区域与本种重叠 | 不借用其体尺、南亚国家清单或产卵资料 |
| _Carcinoscorpius rotundicauda_ | Mangrove Horseshoe Crab | 南亚至东南亚红树林和河口，北达香港 | 不借用圆形尾剑横截面、红树林偏好或毒性传闻 |
| _Limulus polyphemus_ | Atlantic / American Horseshoe Crab | 北美大西洋岸与墨西哥湾 | 不借用特拉华湾卵与迁徙滨鸟关系、美国采血制度或 LAL 管理数据 |

四种现生鲎的体型方案相似，但分子系统研究支持四个独立现生种。香港政府目前确认本地有 _T. tridentatus_ 和 _C. rotundicauda_；旧资料中的 _T. gigas_ 记录存在误认问题。任何旧捕获记录都要先核对凭证、图像或分子鉴定。[Obst et al. 2012](https://doi.org/10.1016/j.ympev.2011.08.025) [香港生物多样性资讯站](https://bih.gov.hk/en/fast-facts/iconic-species/index-id-14.html)

## IUCN 保护等级、趋势、年份与准则

| 字段 | 值 | 证据边界 |
| --- | --- | --- |
| code | `EN` | 全球等级 Endangered |
| trend | `decreasing` | IUCN 当前趋势 |
| assessedYear | `2018` | 评估日 2018-07-22；2019 是发布年 |
| criteria | `A4bcd` | 过去与未来相连的三代减少 |
| generation length | 20.25 年 | 北部分布区评估参数；南部可能更短 |
| three-generation window | 60.75 年，评估取整约 60 年 | 评估窗口，不是寿命 |
| inferred reduction | `≥50%` | 分布区重要部分的综合推断，不是同步全球普查 |

`A4` 处理同时跨越过去与未来的种群减少，且原因可能尚未停止、尚未完全理解或不可逆。小写字母代表 IUCN 使用的证据类型：`b` 是适当丰度指数，`c` 是分布范围、生境面积或质量下降，`d` 是实际或潜在开发利用。不能把 `bcd` 扩写成每个国家都完成了三套相同实验。

结构化字段直接写：

```ts
conservation: conservation('EN', 'decreasing', 2018, 'A4bcd'),
```

评估综合约 1980 年开始的历史估计与未来至少 20 年的预测，推断约三代内减少至少 50%。不同国家的监测强度和数据类型不一，全球没有一项可供产品展示的精确现存总数。

## 分布国家、realm 与范围边界

### 国家与区域

结构化 countries 建议固定为：

```ts
['中国', '日本', '越南', '菲律宾', '马来西亚', '文莱', '印度尼西亚']
```

范围细分：

- 日本南部本州、四国和北部九州的间断海岸，历史核心包括濑户内海；IUCN 北界为冈山县笠冈
- 中国浙江、福建、广东、广西和海南沿海，并包括香港、台湾、澎湖与金门相关记录
- 越南沿海，尤其北部湾和历史上的中部海岸记录
- 菲律宾巴拉望与苏禄海岛岸
- 马来西亚沙巴、砂拉越及文莱湾沿岸
- 印度尼西亚爪哇北岸、苏门答腊部分海岸与北苏拉威西；IUCN 不把南爪哇海岸列为已知范围

分布呈间断斑块，不是上述国家每一段海岸都适合。IUCN 把 1979 年韩国济州附近单一雌体视为范围外偶见，因为附近没有已知产卵或育幼地；countries 不加入韩国。[IUCN Red List](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en)

### realm 选择

```ts
realms: ['marine', 'terrestrial']
```

IUCN 原始评估明确标记 Marine 与 Terrestrial。这个组合对应一条跨潮线生活史：

- 成体、亚成体和幼体是近岸海洋与潮间带底栖动物
- 雌体把卵埋入高潮线附近沙中，胚胎在暴露的上部潮间带发育
- terrestrial 只覆盖产卵海滩环节，不表示成体迁入内陆或用空气呼吸

### 四类生境

1. **浅海沙泥质海床**：成体主要栖息和觅食环境，IUCN 资料把已知深度概括为 0 至 40 m；产卵季成体向岸靠近。
2. **潮间带沙泥滩与海草斑块**：小型幼体的育幼、藏身和觅食场。海草可支撑食物网，但中华鲎不需要在每个地点直接躲进密海草中。
3. **浅水潮下带过渡区**：较大幼体和亚成体随生长逐渐离开潮滩，在近岸软底继续觅食，再进入更深海床。
4. **上部潮间带沙质产卵滩**：雌体在高潮可到达、沙粒和含水条件合适的位置掘窝，卵在沙中发育；岸线硬化会直接切断这个环节。

北部种群常见沙泥滩和海草育幼地，南部也可使用更沙质、邻近珊瑚礁的海岸。图像不应把单一香港泥滩画成整个分布区唯一景观。

## 外形、性别差异与可靠体尺

### 身体结构

- **前体 prosoma**：宽大的马蹄形背甲覆盖口、眼和六对前体附肢；小型螯肢位于口前，其余附肢围绕口排列
- **后体 opisthosoma**：近六角形，左右缘有活动棘，后端常见三枚固定小棘；三个固定小棘存在个体变异
- **尾剑 telson**：细长、硬直，横截面呈三角或近三角形，表面棱上可见细小刺；主要用于转向、支撑和翻身，不是带毒刺针
- **腹面鳃部**：后体第一对附肢形成生殖厣，后面五对为书鳃。准确写法是“五对书鳃”，不是六对书鳃
- **口与取食**：没有甲壳类式大颚。附肢基部的颚基在移动时夹碎和磨碎食物，再送入口中

中华鲎与螃蟹都属于节肢动物，但中华鲎不是甲壳类真蟹。面向公众可写“海生铰口类节肢动物”，避免把现代系统位置简化成“就是蜘蛛”或“就是螃蟹”。

### 性别差异

菲律宾国家渔业研究机构期刊的物种级形态研究确认以下组合：[Baylon & Alcantara-Creencia 2022](https://doi.org/10.31398/tpjf/29.2.2022-0017)

| 特征 | 成年雄体 | 成年雌体 | 限定 |
| --- | --- | --- | --- |
| 整体体型 | 通常较小 | 通常较大 | 单只大小不能独立判性 |
| 前体前缘 | 左右各有凹入 | 无凹入 | 本种成年阶段醒目线索 |
| 前体正面 | 较拱 | 较平 | 需合适视角 |
| 第二、第三对前体附肢 | 末端膨大成半螯式抱钩 | 保持普通螯状 | 雄体用来抱附雌体 |
| 后体活动棘 | 六枚较显著 | 只有三枚保持长形，其余退化或缺失 | 幼体也可能呈雄体式长棘，不能据此判幼体性别 |
| 生殖厣 | 雄性生殖孔和厣形态 | 雌性生殖孔和厣形态 | 直接检查时最可靠 |

“雄鲎永远趴在雌鲎背上”“夫妻终生不分”没有物种级证据。抱附是繁殖情境中的位置固定行为，不能从一次成对捕获推断终身配偶关系。

### 体尺边界

```ts
measurements: {
  length: {
    max: 85,
    unit: 'cm',
    note: 'IUCN 汇总的沙巴罕见成年雌体总长，包含尾剑；不是普通成体体长，也不是统一方法得到的全球最大值。',
  },
  weight: {
    max: 4.33,
    unit: 'kg',
    note: '菲律宾巴拉望 Honda Bay 样本中成年雌体最大体重；这是当地样本上限，不是全球最大体重。',
  },
},
metrics: {},
```

Honda Bay 样本共 68 只雄体和 40 只雌体。雄体前体宽 181 至 297 mm、体重 0.46 至 1.65 kg；雌体前体宽 208 至 360 mm、体重 1.02 至 4.33 kg。雌体所有主要测量均显著大于雄体。跨区域表格又显示雌体前体宽可达 417 mm，说明地域和采样组成会明显改变范围。

沙巴斗湖另一项原始研究测量 154 只雄体和 67 只雌体：雄体总长 41.0 至 65.7 cm，雌体 47.5 至 79.5 cm，五项体尺均为雌体显著更大。IUCN 汇总的 85.0 cm 来自沙巴另一地点的罕见雌体，不能替代斗湖样本范围。[Manca et al. 2017](https://doi.org/10.1016/j.japb.2017.04.011)

不填 `metrics.adultLengthCm` 或 `adultMassKg`，因为当前来源没有可直接跨地区标准化的全球成体范围。封面可画大型雌体，但不应用 85 cm 上限塑造所有个体。

## 食性与潮汐活动

### 幼体食性

香港胃含物研究只检查 9 只中华鲎幼体和 2 只圆尾鲎幼体，样本很小，但它提供直接物种级食物记录。中华鲎幼体取食摇蚊幼虫、多毛类、寡毛类、小蟹和薄壳双壳类，并在该地点表现选择性底栖取食。[Zhou & Morton 2004](https://doi.org/10.1080/0022293031000155377)

后续稳定同位素研究覆盖第 VI 至 XI 龄幼体，支持由多毛类、甲壳类和双壳类组成的混合食物。组织碳来源与海草覆盖泥滩的基础生产相关，说明海草及附生物支撑食物网；同位素不能证明幼体把整株海草当作固定主食。[Kwan et al. 2015](https://doi.org/10.1007/s00227-015-2647-3)

推荐结构化字段使用 `omnivore`，并在说明中写“以小型底栖无脊椎动物为中心的混合食性”。不要写成只吃腐肉的清道夫，也不要借用美洲鲎成体在特拉华湾的食谱。

### 活动节律

- 香港育幼滩的幼体在潮水退去、底质暴露约一小时后开始爬出，活动数量随后达到峰值，回潮时多数重新钻沙；这是地点性研究，不是全球固定时刻
- 香港政府资料同样概括幼体低潮出泥觅食、高潮埋藏避敌
- 成体大部分时间在海床活动，繁殖季向合适岸段移动
- 生长依赖一次次蜕皮；香港政府资料用约 17 次蜕皮概括从孵化到性成熟的本地生活史
- 尾剑帮助翻身，书鳃参与水中气体交换和游动；观察到翻倒个体时不要剪掉或抓住尾剑拖行

“夜行性”“只在满月产卵”“所有地区六月繁殖”都过度统一。纬度、水温、季风和潮汐会改变当地时间表。

## 繁殖、胚胎与幼体

### 从海床到沙中卵窝

成体平时生活在海床。繁殖时，较小雄体用抱钩固定在雌体后方，雌体在高潮可到达的上部潮间带沙中挖窝并排卵，雄体在体外释放精子。一个繁殖季可出现多次上岸和多个卵窝，但当前档案不填固定窝卵数，避免把某一海湾或另一鲎种的数据推广到全范围。

日本物种级研究发现，胚胎在上部潮间带沙中发育，孵化幼体离开沙层的时间集中在春潮高潮附近，多数发生在高潮前约 1 小时到高潮后约 2 小时。这个结果说明潮水能帮助幼体进入海中，不应改写为所有种群使用同一月相和同一小时。[Maeda et al. 2000](https://doi.org/10.5179/benthos.55.15)

北部湾研究同时调查中华鲎和圆尾鲎，不能把摘要里的六月至七月峰值写给中华鲎。作者在月度样点只找到 4 窝中华鲎卵，另有 1 窝来自预调查，数量太少，因此没有报告中华鲎的月度序列。可安全使用的物种级局地数据是：中华鲎卵直径约 3.0 至 3.3 mm，已测卵窝深约 7 至 8 cm，每窝 195 至 573 枚。它们是北部湾少量卵窝记录，不是全范围固定窝卵数。[Kwan et al. 2022](https://doi.org/10.1007/s11802-022-5164-2)

### 幼体成长

刚孵化幼体约 0.5 cm，仍保留近似三叶形轮廓。香港政府用约 17 次蜕皮、约十年到性成熟概括本地成长；IUCN 针对北部范围则讨论雌体约 13 至 14 年才成熟，并采用 20.25 年世代长度。两组数字来自不同口径，不能拼成全球精确时间轴。[香港渔农自然护理署](https://www.afcd.gov.hk/english/conservation/con_mar/con_mar_hor/con_mar_hor_life/con_mar_hor_life_large.html)

幼体在潮间带觅食和埋藏，随体型增大逐步转入浅潮下带；亚成体最终进入成体海床。产卵滩、幼体泥滩、浅水过渡区和成体海床缺一段，局地种群都可能中断补充。

## 蓝色血淋巴与鲎试剂的准确边界

### 蓝色来自血蓝蛋白

中华鲎循环液叫血淋巴。物种级实验资料指出，血蓝蛋白约占血浆蛋白的 90% 至 95%；血蓝蛋白的双铜位点可逆结合氧，氧合状态呈蓝色。铜参与的是运氧蛋白化学，不是“血液含铜所以有毒”，也不是 TAL 显色或凝胶反应的直接原因。[Xu et al. 2020](https://doi.org/10.1016/j.aquaculture.2019.734576)

### TAL 来自变形细胞凝固级联

Tachypleus Amebocyte Lysate 的名称指中华鲎变形细胞裂解物。经典级联可按以下边界说明：

1. 革兰阴性菌脂多糖与因子 C 结合并激活这个丝氨酸蛋白酶原。
2. 活化因子 C 激活因子 B。
3. 因子 B 把凝固酶原转成凝固酶。
4. 凝固酶切割凝固蛋白，形成凝胶；显色法则读取人工底物释放的信号。
5. 因子 G 是另一条入口，响应 `(1→3)-β-D-葡聚糖`，最后汇入凝固酶原环节。

物种级原始研究直接证明 _T. tridentatus_ 因子 C 与脂多糖结合是其活化所需条件。[Nakamura et al. 1988](https://doi.org/10.1093/oxfordjournals.jbchem.a122276) Iwanaga 的生化综述汇总了因子 C、B、G、凝固酶原和凝固蛋白的级联关系。[Iwanaga 2007](https://doi.org/10.2183/pjab.83.110)

### 检测用途与医药叙事边界

FDA 认可的 ANSI/AAMI ST72:2019 标准允许在医疗器械、部件或原材料的细菌内毒素检测中使用来自 _L. polyphemus_ 或 _T. tridentatus_ 的变形细胞裂解物，并明确排除细菌内毒素以外的热原。由此可直接得出：

- TAL 检测限定样品中的革兰阴性菌内毒素，不等于检测所有活菌
- 通过内毒素检测不等于证明无菌
- TAL 不能检测病毒、癌症或所有炎症来源
- 因子 G 对葡聚糖的响应可能造成特定试剂干扰或另一路灵敏度，需按试剂设计和药典方法处理
- 重组因子 C 与重组级联试剂提供非动物来源路径；采用哪种方法必须遵守目标市场的药典、验证和监管要求，而不是由宣传语替代验证

USP `<86>` 提供使用重组试剂的细菌内毒素检测章节与适用框架。[USP Chapter 86 FAQ](https://www.usp.org/sites/default/files/usp/document/press-releases/gss_sa_004_f_chapter86_2023-08_final.pdf) 本档案可以写“重组方法有望降低对野生鲎的依赖”，不能写“全球已经完全替代天然裂解物”。

关于采血，IUCN 2019 评估记录亚洲供应链曾存在放干血液并导致死亡的做法。它是评估时点的重要威胁证据，不宜改写成 2026 年每家工厂、每个国家都采取同一流程。图像不展示采血操作，避免把伤害过程包装成医疗奇观。

中华鲎免疫蛋白、抗菌肽或血蓝蛋白的体外研究不等于批准的人体疗法。不可写“蓝血能治癌”“吃鲎能治病”“注射鲎血增强免疫”。

## “活化石”的科学边界

鲎类化石记录古老，现生种也保留显著保守的马蹄形前体、具棘后体和尾剑体型方案。公众可在加引号和限定语时使用“活化石”。

需要同时说明：

- 古老的是更大的演化支系和体型方案，不是现生 _T. tridentatus_ 物种已经存在四亿多年
- 四种现生鲎是独立物种，亚洲三个现生种的分子分化发生在古近纪，时间远晚于最早鲎类化石
- 形态保守不代表停止演化；现生种仍有地域遗传结构、基因复制、免疫基因变化和适应性差异
- 中华鲎基因组研究识别到全基因组复制和扩展的先天免疫相关基因家族，正好反驳“基因几亿年没有变化”

推荐表述：“中华鲎所属鲎类支系有非常古老的化石历史，外形方案长期保守，因此常被称为‘活化石’；现生中华鲎本身仍持续演化。”

## 威胁与保护行动

### 主要威胁

1. **生物医药原料捕捞**：成体被用于 TAL 原料；历史上部分亚洲供应链的致死处理加剧损失。
2. **食用和全体利用**：食肉、食卵和甲壳利用会直接移除繁殖个体；对抱卵雌体的选择会进一步压低有效繁殖输出。
3. **兼捕**：底拖网、刺网和其他近岸渔具可捕获成体和亚成体；废弃渔具继续缠绕。
4. **产卵滩丧失**：围填海、港口、海堤和岸线硬化阻断成体进入高位沙滩，也改变波浪、沙粒和含水条件。
5. **育幼地退化**：养殖工程、潮沟改造、海砂开采和海草或泥滩损失破坏幼体觅食与埋藏环境。
6. **污染与沿海干扰**：工业、农业和城市输入改变沉积物及水质；夜间照明、噪声和高强度人类进入也会增加局地压力。
7. **恢复速度慢**：成熟晚、幼体招募低、繁殖和育幼地呈斑块状，使被清空地点难以快速自然补回。

海平面上升与沿海挤压可能加剧上部潮间带损失，但当前核心评估主要基于捕捞和生境丧失。正文不把模型风险写成已经观测到的全球统一结果。

### 保护与管理

- 保护相连的成体海床、浅潮下带、幼体育幼滩和产卵沙滩，不只圈住一个泥滩点位
- 禁止或严格管理受保护种的捕捞、持有、运输和交易，并记录兼捕、释放与死亡
- 保护天然潮汐、水文和沉积物输送，避免用硬质工程把修复简化为堆沙
- 标准化监测产卵对、卵窝、各龄幼体密度、成体性别比、渔获努力和生境质量
- 保留地区遗传结构；增殖放流前核验亲本来源、疾病风险、承载力和长期监测能力
- 推动经监管认可和充分验证的重组内毒素检测方法，降低原料需求
- 与渔民、沿海社区、药品和器械行业共同追踪供应链，避免把压力转移到监测较弱国家

中国大陆的法律状态写为“国家二级重点保护野生动物”。香港政府页也明确说明中华鲎为内地国家二级保护物种。[香港生物多样性资讯站](https://bih.gov.hk/en/fast-facts/iconic-species/index-id-14.html) 截至访问日，CITES 官方清单没有本种附录记录；产品不能添加 CITES I、II 或 III 标签。

## 四个展示数字

```ts
featuredStats: [
  {
    key: 'recorded-total-length',
    label: '罕见雌体总长记录',
    value: '85.0',
    unit: '厘米',
    note: 'IUCN 汇总的沙巴记录，包含尾剑；不是普通成体体长。',
  },
  {
    key: 'northern-generation-length',
    label: '北部估算世代长度',
    value: '20.25',
    unit: '年',
    note: 'IUCN 评估参数；南部种群可能更短。',
  },
  {
    key: 'assessed-reduction',
    label: '三代推断减少',
    value: '≥50',
    unit: '%',
    note: '约 60 年窗口内分布区重要部分的综合推断，不是同步全球普查。',
  },
  {
    key: 'hong-kong-molts',
    label: '香港成长概括',
    value: '约 17',
    unit: '次蜕皮',
    note: '香港政府本地生活史概括；成长速度随纬度和环境变化。',
  },
],
```

## 六段故事与六图方案

| 序号 | 故事 | 画面 | 必须保留 | 证据边界 |
| --- | --- | --- | --- | --- |
| 01 封面 | 古老体型仍在演化 | 东亚浅海沙泥底，一只成年中华鲎侧前方全身肖像 | 马蹄形前体、具棘后体、三角截面长尾剑，橄榄褐色自然背甲 | “活化石”只写体型方案和支系历史，不画化石复活或恐龙同框 |
| 02 | 海床上的觅食轨迹 | 浅海沙泥底，一只成体沿弯曲扰动痕迹移动 | 身体贴底、附肢运动、尾剑完整，沉积物留下自然浅痕 | 成体食谱资料较少；不在画面指定猎物或固定食物比例 |
| 03 | 雄体的抱钩 | 暮色高潮线，较小雄体抱附在大型雌体后方 | 雌体更大；雄体前缘凹入，第二、第三对附肢为抱钩 | 不只凭尺寸判性，不写终生夫妻关系 |
| 04 | 沙下卵窝 | 上部潮间带沙滩的解释性剖面，完整卵簇埋在湿沙中 | 卵在沙中、无成体埋在窝内，沙粒与含水层次清楚 | 可参考北部湾 7 至 8 cm 小样本；不把 195 至 573 枚画成全球固定窝卵数 |
| 05 | 幼体的退潮餐桌 | 海草斑块旁的沙泥滩，一只小型幼体沿浅水沟活动 | 幼体小、边缘棘较长，画面有潮痕和可埋藏软底 | 海草表示食物网基础与生境，不画成幼体吞食整株海草 |
| 06 | 蓝色运氧与变形细胞 | 科学概念图把氧合血蓝蛋白与变形细胞颗粒分开表现 | 蓝色来自血蓝蛋白；TAL 因子来自变形细胞 | 不画活体采血，不暗示抗癌、万能抗菌或证明无菌 |

建议文件名：

```text
01-shallow-seabed-adult-portrait.webp
02-seabed-foraging-trail.webp
03-spawning-pair-at-tide-line.webp
04-buried-egg-cluster-cutaway.webp
05-juvenile-nursery-mudflat.webp
06-blue-hemolymph-and-amebocytes.webp
```

所有图片信用固定为 `Fauna Atlas · AI 生成原创图像`。图片本身不得承担论文没有直接支持的微观机制证明；06 是概念性实验场景，不是监管方法的逐步操作图。

## 可直接落库的完整 `Species` 对象

```ts
{
  id: 'species-tachypleus-tridentatus',
  slug: 'chinese-horseshoe-crab',
  names: {
    zh: '中华鲎',
    en: 'Chinese Horseshoe Crab',
    aliases: ['中国鲎', '三棘鲎', 'Tri-spine Horseshoe Crab'],
  },
  scientificName: 'Tachypleus tridentatus',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Merostomata', '肢口纲'),
    taxon('Xiphosurida', '剑尾目'),
    taxon('Limulidae', '鲎科'),
    taxon('Tachypleus', '东方鲎属'),
  ),
  conservation: conservation('EN', 'decreasing', 2018, 'A4bcd'),
  distribution: {
    realms: ['marine', 'terrestrial'],
    continents: ['亚洲'],
    regions: [
      '日本南部本州、四国、北部九州与濑户内海',
      '中国浙江、福建、广东、广西和海南沿海',
      '香港、台湾、澎湖与金门沿岸',
      '越南沿海与北部湾',
      '菲律宾巴拉望与苏禄海',
      '马来西亚沙巴和砂拉越、文莱湾',
      '印度尼西亚爪哇北岸、苏门答腊与北苏拉威西部分海岸',
    ],
    countries: ['中国', '日本', '越南', '菲律宾', '马来西亚', '文莱', '印度尼西亚'],
    range:
      '原生于东亚至东南亚西太平洋和东印度洋边缘的间断浅海海岸：北界到日本冈山县笠冈，向南经中国东南沿海、越南、菲律宾、婆罗洲到印度尼西亚爪哇北岸、苏门答腊和北苏拉威西。韩国济州单一历史雌体记录没有关联繁殖或育幼地，不计入稳定范围。',
    center: { lat: 22.5, lng: 115 },
  },
  habitats: [
    {
      name: '近岸浅海沙泥质海床',
      realm: 'marine',
      description: '成体主要栖息与觅食环境，已知深度约 0 至 40 米；繁殖季成体从海床向合适海岸移动。',
      isPrimary: true,
    },
    {
      name: '潮间带沙泥滩与海草斑块',
      realm: 'marine',
      description: '小型幼体在退潮时爬出觅食，回潮时钻入湿软底质；海草及附生食物网可提供重要碳源。',
    },
    {
      name: '浅潮下带软底过渡区',
      realm: 'marine',
      description: '较大幼体和亚成体离开潮间带后的生长、觅食通道，连接育幼地与成体海床。',
    },
    {
      name: '上部潮间带沙质产卵滩',
      realm: 'terrestrial',
      description: '高潮可达的沙滩让雌体掘窝产卵，胚胎在沙中发育；岸线硬化和采砂会切断这一环节。',
    },
  ],
  measurements: {
    length: {
      max: 85,
      unit: 'cm',
      note: 'IUCN 汇总的沙巴罕见成年雌体总长，包含尾剑；不是普通成体体长，也不是统一方法得到的全球最大值。',
    },
    weight: {
      max: 4.33,
      unit: 'kg',
      note: '菲律宾巴拉望 Honda Bay 样本中成年雌体最大体重；这是当地样本上限，不是全球最大体重。',
    },
  },
  diet: {
    types: ['omnivore'],
    foods: ['多毛类', '摇蚊等昆虫幼虫', '小型甲壳类', '薄壳双壳类', '寡毛类', '沉积有机物与海草相关食物网来源'],
    description:
      '幼体以小型底栖无脊椎动物为中心取食混合食物。胃含物记录昆虫幼虫、环节动物、小蟹和薄壳双壳类；稳定同位素显示多种底栖猎物与海草相关碳源共同贡献，不能据此写成专吃海草。',
  },
  activity: [
    '成体在近岸海床爬行、掘入软底并季节性向产卵岸段移动',
    '幼体在退潮底质暴露后出泥觅食，回潮时多数重新钻沙',
    '雄体用第二、第三对前体附肢形成的抱钩固定在雌体后方参与外部受精',
    '幼体经多次蜕皮逐步转入浅潮下带，亚成体最终进入更深海床',
    '用尾剑支撑、转向和翻身，五对书鳃参与水中气体交换与游动',
  ],
  tags: ['东亚与东南亚海岸', 'IUCN 濒危', '国家二级保护', '潮间带育幼', '沙滩产卵', '蓝色血淋巴', '鲎试剂'],
  summary: '在东亚至东南亚浅海、育幼泥滩与产卵沙滩之间完成漫长生活史，以含铜血蓝蛋白运氧的濒危海生铰口类。',
  description:
    '中华鲎不是螃蟹，而是保留马蹄形前体、具棘后体和长尾剑的海生铰口类节肢动物。成体平时生活在近岸海床，繁殖时返回上部潮间带沙滩；幼体又依赖沙泥质育幼滩，经多年蜕皮后才转入海中。氧合血蓝蛋白让血淋巴呈蓝色，变形细胞中的凝固级联则成为 TAL 细菌内毒素试剂的基础，两套机制不能混写。捕捞与海岸开发同时切断成体、卵、幼体和亚成体环节，IUCN 因此在 2018 年按 EN A4bcd 评估其全球风险。',
  storySections: [
    {
      key: 'chelicerate-not-crab',
      label: '分类与演化',
      title: '马蹄形背甲下，不是一只蟹',
      body: '中华鲎属于海生铰口类节肢动物，身体由马蹄形前体、具棘后体和尾剑组成。鲎类的化石历史很古老，现生中华鲎却不是四亿多年不变的同一物种；分子系统和基因组都记录了持续分化与演化。',
    },
    {
      key: 'sex-and-claspers',
      label: '性别与抱附',
      title: '较小雄体把两对附肢改成抱钩',
      body: '成年雄体前体前缘有两处凹入，第二、第三对附肢末端膨大成抱钩；成年雌体通常更大，前缘完整且附肢保持普通螯状。抱钩在繁殖时固定位置，不证明一对中华鲎终生相伴。',
    },
    {
      key: 'eggs-to-offshore',
      label: '繁殖与成长',
      title: '卵埋在沙里，幼体长在潮滩',
      body: '高潮把抱附的雌雄带到合适沙滩，雌体掘窝排卵，雄体在外部完成受精。幼体孵出后进入潮间带育幼地，经历多次蜕皮，再依次转向浅潮下带和成体海床；不同纬度有各自的繁殖日历。',
    },
    {
      key: 'low-tide-foraging',
      label: '食性与潮汐',
      title: '退潮后，软泥里是一张混合菜单',
      body: '幼体在潮水退去后爬出，寻找昆虫幼虫、多毛类、小型甲壳类和薄壳双壳类，回潮时重新埋藏。海草为这张食物网输入碳和栖息结构，但稳定同位素证据不能改写成中华鲎专门啃食整株海草。',
    },
    {
      key: 'blue-blood-and-tal',
      label: '生理与检测',
      title: '蓝色负责运氧，凝固级联侦测内毒素',
      body: '血蓝蛋白以铜可逆结合氧，使氧合血淋巴呈蓝色；变形细胞中的因子 C、因子 B 与凝固酶原则构成 TAL 反应。规范用途是限定条件下的细菌内毒素检测，它不证明无菌，也不是治疗癌症或感染的药物。',
    },
    {
      key: 'four-linked-habitats',
      label: '保护',
      title: '要保住的不是一个点，而是四段海岸',
      body: '成体海床、浅潮下带、幼体育幼滩和上部产卵沙滩必须保持连通。只放流幼体却继续硬化岸线，或只保护沙滩却放任成体捕捞，都无法修复完整生活史。',
    },
  ],
  keyFacts: [
    'WoRMS 接受 Tachypleus tridentatus (Leach, 1819)，原始组合为 Limulus tridentatus。',
    'IUCN 评估日为 2018-07-22，全球等级 EN A4bcd，趋势 decreasing。',
    '四种现生鲎是四个物种；中华鲎资料不能与美洲鲎、圆尾鲎或南方鲎混用。',
    '后体末端常见三枚固定小棘，但数量会变异，物种鉴定必须组合多个特征。',
    '五对书鳃负责水中气体交换；尾剑主要用于转向、支撑和翻身，不是毒刺。',
    '蓝色来自含铜血蓝蛋白，TAL 反应来自变形细胞凝固级联。',
    '中国大陆将中国鲎列为国家二级保护野生动物；截至 2026-08-27 未列入 CITES 附录。',
  ],
  threats: [
    '为鲎试剂原料、食用、卵和甲壳利用而捕捞成体，尤其选择抱卵雌体',
    '底拖网、刺网及其他近岸渔具造成兼捕、损伤和死亡',
    '围填海、港口、海堤和岸线硬化破坏或阻断上部潮间带产卵滩',
    '海水养殖工程、潮沟改造、海砂开采和海草退化损害幼体育幼地',
    '工业、农业和城市污染改变近岸水质与沉积物环境',
    '成熟晚、招募低和栖息地斑块化导致局地种群恢复缓慢',
  ],
  conservationActions: [
    '保护并连通成体海床、浅潮下带、幼体育幼滩和上部产卵沙滩',
    '执行国家二级保护规定，管理捕捞、持有、运输、交易与供应链来源',
    '记录并减少底拖网、刺网和废弃渔具兼捕，建立安全释放与死亡监测',
    '长期监测产卵对、卵窝、各龄幼体密度、成体性别比和生境质量',
    '修复自然潮汐、水文与沉积物过程，避免用岸线硬化替代生态修复',
    '增殖放流前核验亲本遗传来源、疾病风险、生境承载力与后续成活',
    '采用经药典和监管验证的重组内毒素检测方法，降低对野生鲎原料的需求',
  ],
  metrics: {},
  featuredStats: [
    { key: 'recorded-total-length', label: '罕见雌体总长记录', value: '85.0', unit: '厘米', note: 'IUCN 汇总的沙巴记录，包含尾剑。' },
    { key: 'northern-generation-length', label: '北部估算世代长度', value: '20.25', unit: '年', note: 'IUCN 评估参数；南部可能更短。' },
    { key: 'assessed-reduction', label: '三代推断减少', value: '≥50', unit: '%', note: '约 60 年内分布区重要部分的综合推断。' },
    { key: 'hong-kong-molts', label: '香港成长概括', value: '约 17', unit: '次蜕皮', note: '香港政府本地生活史概括。' },
  ],
  media: {
    image: './images/species/chinese-horseshoe-crab/01-shallow-seabed-adult-portrait.webp',
    alt: '东亚浅海沙泥底上一只橄榄褐色成年中华鲎，马蹄形前体、具棘后体和完整长尾剑清楚可见',
    focalPoint: { x: 0.63, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/chinese-horseshoe-crab/02-seabed-foraging-trail.webp',
        alt: '浅海沙泥底上一只成年中华鲎沿弯曲扰动痕迹移动，身体贴底而完整尾剑拖在后方',
        title: '海床上的觅食轨迹',
        caption: '成体在海床移动和翻动软底；现有证据不足以把它的食谱写成固定比例。',
        focalPoint: { x: 0.61, y: 0.56 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-horseshoe-crab/03-spawning-pair-at-tide-line.webp',
        alt: '暮色高潮线附近，一只较小雄性中华鲎抱附在大型雌体后方，雄体前缘凹入而尾剑完整',
        title: '雄体的抱钩',
        caption: '雄体抱附、雌体掘窝、外部受精；成对出现不表示终生配偶。',
        focalPoint: { x: 0.56, y: 0.56 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-horseshoe-crab/04-buried-egg-cluster-cutaway.webp',
        alt: '中华鲎上部潮间带产卵滩的科学剖面，完整卵簇埋在含水湿沙中，画面没有成体埋在窝内',
        title: '沙下的卵窝',
        caption: '北部湾少量中华鲎卵窝深约 7 至 8 厘米；深度和窝卵数不能外推为全球定值。',
        focalPoint: { x: 0.53, y: 0.56 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-horseshoe-crab/05-juvenile-nursery-mudflat.webp',
        alt: '退潮沙泥质育幼滩的海草斑块旁，一只小型中华鲎幼体沿浅水沟活动并准备钻入湿沙',
        title: '幼体的退潮餐桌',
        caption: '海草支撑食物网与生境；幼体的混合食物以小型底栖无脊椎动物为中心。',
        focalPoint: { x: 0.58, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-horseshoe-crab/06-blue-hemolymph-and-amebocytes.webp',
        alt: '中华鲎蓝色血淋巴科学概念图，含铜血蓝蛋白运氧与颗粒状变形细胞被分成两个清楚区域',
        title: '蓝色运氧，级联检测',
        caption: '蓝色来自氧合血蓝蛋白；TAL 凝固因子储存在变形细胞中，两套机制功能不同。',
        focalPoint: { x: 0.55, y: 0.51 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: [
    { title: 'WoRMS: Tachypleus tridentatus, AphiaID 238270', url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=238270', kind: 'taxonomy', accessedAt: '2026-08-27' },
    { title: 'IUCN Red List: Tachypleus tridentatus', url: 'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en', kind: 'conservation', accessedAt: '2026-08-27' },
    { title: 'CITES Checklist of Species', url: 'https://checklist.cites.org/', kind: 'conservation', accessedAt: '2026-08-27' },
    { title: '国家重点保护野生动物名录：国家二级保护中国鲎', url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf', kind: 'conservation', accessedAt: '2026-08-27' },
    { title: '香港生物多样性资讯站：Chinese Horseshoe Crab', url: 'https://bih.gov.hk/en/fast-facts/iconic-species/index-id-14.html', kind: 'general', accessedAt: '2026-08-27' },
    { title: '香港渔农自然护理署：Horseshoe Crab Life History and Behaviour', url: 'https://www.afcd.gov.hk/english/conservation/con_mar/con_mar_hor/con_mar_hor_life/con_mar_hor_life_large.html', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Identification and Morphology of Tachypleus tridentatus and Carcinoscorpius rotundicauda from Honda Bay', url: 'https://doi.org/10.31398/tpjf/29.2.2022-0017', kind: 'taxonomy', accessedAt: '2026-08-27' },
    { title: 'Tri-spine horseshoe crab in Sabah: adult body sizes and population estimate', url: 'https://doi.org/10.1016/j.japb.2017.04.011', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'A dual stable isotope study for diet composition of juvenile Chinese horseshoe crab', url: 'https://doi.org/10.1007/s00227-015-2647-3', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'The diets of juvenile Tachypleus tridentatus and Carcinoscorpius rotundicauda in Hong Kong', url: 'https://doi.org/10.1080/0022293031000155377', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'The Behaviour of Juvenile Tachypleus tridentatus on a Nursery Beach at Shui Hau Wan', url: 'https://doi.org/10.1023/B:HYDR.0000033085.71861.63', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Ecology of Hatched Larvae of Tachypleus tridentatus in Relation to the Physical Environment', url: 'https://doi.org/10.5179/benthos.55.15', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Spatiotemporal Distribution of Asian Horseshoe Crab Eggs in Northern Beibu Gulf', url: 'https://doi.org/10.1007/s11802-022-5164-2', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Effects of copper supplement on immune function and blood chemistry in adult Tachypleus tridentatus', url: 'https://doi.org/10.1016/j.aquaculture.2019.734576', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Interaction between lipopolysaccharide and factor C from Tachypleus tridentatus hemocytes', url: 'https://doi.org/10.1093/oxfordjournals.jbchem.a122276', kind: 'ecology', accessedAt: '2026-08-27' },
    { title: 'Biochemical principle of Limulus test for detecting bacterial endotoxins', url: 'https://doi.org/10.2183/pjab.83.110', kind: 'general', accessedAt: '2026-08-27' },
    { title: 'FDA Recognized Standard ANSI AAMI ST72:2019', url: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfstandards/detail.cfm?standard__identification_no=40962', kind: 'general', accessedAt: '2026-08-27' },
    { title: 'USP General Chapter 86 Bacterial Endotoxins Test Using Recombinant Reagents FAQ', url: 'https://www.usp.org/sites/default/files/usp/document/press-releases/gss_sa_004_f_chapter86_2023-08_final.pdf', kind: 'general', accessedAt: '2026-08-27' },
    { title: 'Molecular phylogeny of extant horseshoe crabs indicates Paleogene diversification of Asian species', url: 'https://doi.org/10.1016/j.ympev.2011.08.025', kind: 'taxonomy', accessedAt: '2026-08-27' },
    { title: 'The draft genome of Tachypleus tridentatus reveals its evolutionary scenario and innate immunity', url: 'https://doi.org/10.1186/s12864-020-6488-1', kind: 'general', accessedAt: '2026-08-27' },
  ],
  featured: true,
  publishedAt: '2026-08-27',
  updatedAt: '2026-08-27',
},
```

## 来源分工与可信度说明

1. [WoRMS, AphiaID 238270](https://www.marinespecies.org/aphia.php?p=taxdetails&id=238270)：接受名、命名者、原始组合和当前分类骨架。
2. [IUCN Red List 原始评估](https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en)：EN A4bcd、评估日、趋势、三代窗口、范围国家、系统、威胁和全球保护行动。
3. [CITES Checklist](https://checklist.cites.org/)：截至访问日未检出本种附录记录。缺席结论必须连同访问日期保存。
4. [中国国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)：中国鲎的国家二级保护级别。
5. [香港生物多样性资讯站](https://bih.gov.hk/en/fast-facts/iconic-species/index-id-14.html)：香港使用名、三段身体、繁殖、幼体、威胁和国家二级保护公众说明。
6. [香港渔农自然护理署生活史页](https://www.afcd.gov.hk/english/conservation/con_mar/con_mar_hor/con_mar_hor_life/con_mar_hor_life_large.html)：0.5 cm 孵化幼体、约 17 次蜕皮和香港本地体尺记录。
7. [Baylon & Alcantara-Creencia 2022](https://doi.org/10.31398/tpjf/29.2.2022-0017)：巴拉望凭证样本、雌雄形态、体尺和三棘变异；菲律宾国家渔业研究机构期刊原始论文。
8. [Manca et al. 2017](https://doi.org/10.1016/j.japb.2017.04.011)：沙巴成年体尺和当地种群估计。
9. [Kwan et al. 2015](https://doi.org/10.1007/s00227-015-2647-3)：幼体稳定同位素食性和海草覆盖潮滩食物网。
10. [Zhou & Morton 2004](https://doi.org/10.1080/0022293031000155377)：香港幼体胃含物和选择性底栖取食。
11. [Chiu & Morton 2004](https://doi.org/10.1023/B:HYDR.0000033085.71861.63)：香港育幼滩幼体退潮活动和回潮埋藏。
12. [Maeda et al. 2000](https://doi.org/10.5179/benthos.55.15)：日本沙中孵化幼体与春潮高潮的关系。
13. [Kwan et al. 2022](https://doi.org/10.1007/s11802-022-5164-2)：北部湾两种鲎卵的物种核验、中华鲎局地卵径、埋深和窝卵数；论文的月度峰值主要来自圆尾鲎，不能套用给中华鲎。
14. [Xu et al. 2020](https://doi.org/10.1016/j.aquaculture.2019.734576)：中华鲎血蓝蛋白、铜与蓝色血淋巴的物种级实验依据。
15. [Nakamura et al. 1988](https://doi.org/10.1093/oxfordjournals.jbchem.a122276)：中华鲎因子 C 与脂多糖结合及活化。
16. [Iwanaga 2007](https://doi.org/10.2183/pjab.83.110)：因子 C、B、G、凝固酶原和凝固蛋白的生化级联。
17. [FDA ST72](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfstandards/detail.cfm?standard__identification_no=40962)：动物来源、适用对象和“细菌内毒素以外热原不适用”的监管边界。
18. [USP `<86>` FAQ](https://www.usp.org/sites/default/files/usp/document/press-releases/gss_sa_004_f_chapter86_2023-08_final.pdf)：重组试剂的药典框架。
19. [Obst et al. 2012](https://doi.org/10.1016/j.ympev.2011.08.025)：四种现生鲎、亚洲种古近纪分化和“活化石”边界。
20. [Zhou et al. 2020](https://doi.org/10.1186/s12864-020-6488-1)：中华鲎基因组、全基因组复制和先天免疫基因。

## 必须避免的错误断言

1. 不把四种现生鲎写成同一种“鲎”，也不把美洲鲎的特拉华湾生态、LAL 采血制度或候鸟关系移植给中华鲎。
2. 不把 IUCN 发布年 2019 写成评估年；正确 `assessedYear` 是 2018。
3. 不把 EN A4bcd 的 `≥50%` 写成当年全球精确数量减少，或写成所有国家都有同样降幅。
4. 不把韩国济州单一历史记录加入稳定分布国家，也不把范围铺满东亚和东南亚每一段海岸。
5. 不把 85 cm 当作普通成体长度；它是含尾剑的沙巴罕见雌体记录。
6. 不以三枚固定小棘单独鉴定本种；0 至 3 枚变异已有物种级记录。
7. 不只凭体型或活动棘判性；幼体棘形会像雄体，成体应合并前缘、抱钩和生殖厣。
8. 不把尾剑写成毒刺，不画动物用尾剑捕猎，也不鼓励抓尾剑搬运。
9. 不写六对书鳃；后体六对附肢中第一对是生殖厣，后五对才是书鳃。
10. 不把幼体写成专食海草、专食腐肉或专吃贝类；物种级证据支持地点和龄期可变的混合底栖食物。
11. 不把香港退潮行为或日本春潮孵化时刻写成全球固定日历；北部湾论文的六月至七月峰值主要来自圆尾鲎，更不能写给中华鲎。
12. 不把约 17 次蜕皮、约十年成熟与 IUCN 北部 13 至 14 年成熟拼成一条精确全球时间线。
13. 不写血液因为“铜很多”自动呈蓝色；准确机制是血蓝蛋白双铜位点在氧合状态下显蓝。
14. 不把蓝色血淋巴与 TAL 凝固机制混成一件事；运氧蛋白和变形细胞级联功能不同。
15. 不写 TAL 能检测所有细菌、病毒、癌症或一切热原，也不把通过内毒素测试写成已经证明无菌。
16. 不把体外免疫蛋白研究写成获批疗法，不鼓励食用、注射或自行提取鲎血。
17. 不把 IUCN 2019 记录的亚洲历史致死采血方式写成 2026 年所有国家、所有企业的统一现状。
18. 不把中国国家二级保护等同于 CITES II；截至 2026-08-27，CITES 官方清单没有本种附录记录。
19. 不把“活化石”扩写成中华鲎物种四亿多年毫无变化；古老的是支系和保守体型方案。
20. 不把增殖放流当成生境保护的替代品；产卵滩、育幼滩、浅潮下带和成体海床必须一起保留。
