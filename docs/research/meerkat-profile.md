# 狐獴（*Suricata suricatta*）完整物种档案研究

> 研究日期：2026-09-04  
> 目标条目：`species-suricata-suricatta` / `meerkat`  
> 分类口径：Mammal Diversity Database 当前接受名  
> 全球保护口径：IUCN Red List 2015 正式评估  
> 证据原则：分类、保护和贸易采用权威数据库；行为、食性、繁殖和生命史优先采用同行评审原始研究；所有局地数字保留地点、时期和样本边界。

## 实施结论

1. 接受学名为 *Suricata suricatta* (von Schreber, 1776)，英文主名为 `Meerkat`。产品中文主名沿用 TODO 的“狐獴”，六阶分类为动物界、脊索动物门、哺乳纲、食肉目、獴科、狐獴属。[S01][S02]
2. 当前可核验的全球 IUCN 正式评估为 `LC`、`Stable`、2015 年发布，评估日期为 2015-02-28。LC 条目没有威胁等级判据代码，`criteria` 应省略，而不是填入 `A`、`B` 或字符串 `LC`。具名评估人为 N. R. Jordan 与 E. Do Linh San。[S03]
3. 原生国家严格写安哥拉、博茨瓦纳、纳米比亚和南非。莱索托只有旧文献推测，2015 年评估明确说尚无记录，不应进入 `countries`。[S01][S03]
4. 狐獴栖息于南部非洲干旱、开阔而有短草及稀疏木本植物的地带。IUCN 生境表列有热荒漠，但正文又说它不见于“真正的沙漠”；页面应写“半干旱草地、稀树草原、灌丛和荒漠边缘”，不要概括成“只生活在沙漠”。[S03][S04]
5. 成体头体长可稳定落为 24.5 至 29.0 厘米，尾长另为 19.0 至 24.0 厘米。历史样本中雄性平均 731 克、范围 626 至 797 克，雌性平均 720 克、范围 620 至 969 克。合并展示范围可用 620 至 969 克，但必须说明来自旧物种账户引用的样本，而非现代全分布区抽样。[S06]
6. 寿命不宜塞入 `metrics.lifespanYears`。南喀拉哈里长期研究资料记载优势雌性可活到约 12 年，等级相关生存差异又受群外活动风险影响；AnAge 的 20.6 年是圈养最高记录。两者都不是“典型野外寿命范围”。[S15][S16]
7. TODO 中“轮流站上高处放哨”可保留为通俗概括，但应改写为“不同成员相继承担抬高警戒”。野外研究发现接替行为，却没有固定顺序、等额班次或专职哨兵。体况、最近觅食收益、年龄、性别、支配地位、群体大小、捕食风险和幼崽是否随队都会改变个体贡献。[S08][S10][S11]
8. 放哨叫声能减少警戒重叠和无人警戒时段，也能让觅食者降低自身抬头警戒；原始研究同时明确否定了叫声维持“严格轮班”的解释。[S09]
9. 狐獴是昼行性、合作繁殖的社会性獴类。南喀拉哈里研究群通常含一对优势繁殖者与多个助手，群体规模资料跨度约 2 至 50 只。优势雌性占大多数成功繁殖，但下位雌性并非永久不育；助手会守洞、递食、哺乳，并在实验支持的意义上调整活猎物处理方式，帮助幼崽学习。[S04][S13][S14][S19]
10. IUCN 2015 年没有识别全物种主要威胁，全球趋势判为稳定，且没有成熟个体总数。南喀拉哈里长期研究后来发现结核病、降雨和极端高温会影响一个研究种群的群体延续或种群过程；这些结果不能直接升级为全分布区受威胁结论。[S03][S17][S18]
11. CITES 在线名录在本次检索中未列出 *Suricata suricatta*。这只说明本种不在 CITES 附录中，不代表跨境贸易、饲养、捕捉或运输不受国家及地方法律约束。[S05]
12. 六张图均按 1536 × 1024 写实科学情景设计。封面必须只有一只完整狐獴，直立于画面右侧，鼻端、耳、两只前爪、两只后足和黑色尾尖全部留在源图内；左 40% 保持安静背景，后续仍需按封面规则逐视口验收。

## 名称、slug 与六阶分类

### 建议字段

| 字段 | 建议值 | 证据与边界 |
| --- | --- | --- |
| `id` | `species-suricata-suricatta` | 延续仓库的学名式稳定 ID。 |
| `slug` | `meerkat` | 与 MDD 英文主名一致。[S01] |
| `names.zh` | `狐獴` | TODO 已采用该名，香港特区政府动物资料页也使用“狐獴”。[S02] |
| `names.en` | `Meerkat` | MDD 英文主名。[S01] |
| `names.aliases` | `Suricate`、`Slender-tailed Meerkat`、`Gray Meerkat` | MDD 列出的其他英文俗名。[S01] |
| `scientificName` | `Suricata suricatta` | MDD 当前接受名；命名人为 von Schreber, 1776。[S01] |

### 产品六阶分类

| 阶元 | 学名 | 中文名 | 依据 |
| --- | --- | --- | --- |
| kingdom | Animalia | 动物界 | MDD 与 IUCN。[S01][S03] |
| phylum | Chordata | 脊索动物门 | IUCN；产品补齐六阶路径。[S03] |
| class | Mammalia | 哺乳纲 | MDD 与 IUCN。[S01][S03] |
| order | Carnivora | 食肉目 | MDD 与 IUCN。[S01][S03] |
| family | Herpestidae | 獴科 | MDD 与 IUCN。[S01][S03] |
| genus | Suricata | 狐獴属 | MDD 接受属；中文属名按“狐獴”直译。[S01][S02] |

MDD 还列出 Feliformia、Mungosinae 等中间阶元，但当前 `SpeciesTaxonomy` 只接收六阶，不能把亚目或亚科错塞进 `order` 或 `family`。1994 年物种账户沿用过时的 `viverrid` 宽泛称呼，只可用于其形态和生命史资料，分类应以当前 MDD 为准。[S01][S06]

MDD 把历史命名的多个亚种名列为本种异名。当前资料不足以支持在产品中给每张分布图或每幅生成图指定亚种；本档案只做到种级。[S01]

## IUCN、数量趋势与国际贸易

### 全球正式评估

| 字段 | 值 | 说明 |
| --- | --- | --- |
| `system` | `IUCN Red List` | 仓库固定保护体系。 |
| `code` | `LC` | Least Concern，无危。[S03] |
| `trend` | `stable` | 2015 全球评估的 Current Population Trend。[S03] |
| `assessedYear` | `2015` | 评估日期 2015-02-28，2015 年发布。[S03] |
| `criteria` | 省略 | LC 评估没有受威胁判据代码；不写 `A2`、`B1` 等。[S03] |
| `assessor` | `Jordan, N. R. & Do Linh San, E. (IUCN Red List, assessed 2015-02-28)` | 评估原文具名评估人。评审人为 J. W. Duckworth 与 M. Hoffmann。[S03] |
| 全球成熟个体数 | 未给出 | 不设置 `estimatedMatureIndividuals`。[S03] |
| 世代长度 | 6 年 | IUCN 附加数据字段；世代长度不是平均寿命。[S03] |

IUCN 将其列为 LC 的理由是分布相对广、进入多个保护地、没有识别出全物种主要威胁。MDD 当前物种页仍显示 LC，但这不是一次 2026 年新评估；页面必须保留 2015 年的评估年份。[S01][S03]

### 局地数量不能冒充全球趋势

2015 评估没有全球种群估算。它引用的喀拉哈里跨境公园南非一侧密度从 1994 年 4 月的 1.00 只/平方千米降至 1995 年 5 月的 0.32 只/平方千米，并把变化与降雨减少联系起来。[S03]

这个 13 个月、单地点的对比可以说明密度会随环境波动，却不能改写为以下任一种说法：

- “全球数量减少了 68%”；
- “狐獴全球密度为 0.32 至 1.00 只/平方千米”；
- “Stable 与观测矛盾”。

全球 `stable` 是 2015 年评估结论，局地密度波动和未来气候风险则需要独立呈现。[S03][S18]

### CITES

CITES 官方在线 Checklist 在 2026-09-04 以接受名和属名检索均未得到本种附录记录。[S05] 产品可写“未列入 CITES 附录”，但不能写“允许自由买卖”。IUCN 2015 年只说当时小规模宠物贸易没有证据影响野生种群；区域评估仍建议记录和监管捕捉及宠物贸易。[S03][S04]

## 分布、地图与生境

### 原生国家

| 国家 | 范围限定 |
| --- | --- |
| 安哥拉 | 仅极西南部边缘，IUCN 称为非常小的侵入范围。[S03] |
| 博茨瓦纳 | 主要为西南部。[S03] |
| 纳米比亚 | 西部和南部。[S03] |
| 南非 | 北部和西部。[S03] |

MDD 的国家级分布同样是安哥拉、博茨瓦纳、纳米比亚和南非。[S01] 国家列表只能表示存在记录，不能把四国全部国土连续填成适生区。莱索托不进入列表，因为 IUCN 只记载过低地分布推测，并明确注明截至评估时没有记录。[S03]

建议地图焦点 `{ lat: -25.5, lng: 21 }` 只用于把视图落在南部非洲西部内陆，不是分布质心、模式产地或密度最高点。

### 生境口径

IUCN 正文描述的是有短草和稀疏木本植物的干旱开阔地，排除真正的沙漠、森林和山地。其附录生境分类同时勾选干旱稀树草原、干灌丛、地中海型灌丛、热带或亚热带干草地，以及热荒漠。[S03] 区域评估还记录开阔平原、河床、石质地带、稀树草原和部分农村或农业景观中的出现，但没有证明耕地质量等同天然生境。[S04]

建议 `habitats`：

1. **干旱稀树草原与短草开阔地**，主要生境。短草和稀疏灌木保持视野，并有可挖掘土壤和洞穴避难。[S03][S04]
2. **半干旱草地与喀拉哈里沙地**，主要生境。沙丘间平地、干河床和邻近开阔地均可使用；“喀拉哈里沙漠”是地理称呼，不应推成真正无植被沙漠。[S03][S04]
3. **干旱灌丛与卡鲁型开阔地**。需要保持开阔结构，不包括密闭林地。[S03][S04]
4. **荒漠边缘与受改造开放景观**。只作次要生境；农业或农村记录不证明这类景观没有生态代价。[S04]

不要填写没有跨全分布区依据的海拔范围。MDD 异名材料中个别模式地点海拔也不能当成本种上下限。[S01]

## 外形、体尺与寿命

### 可落库形态

| 项目 | 值 | 证据边界 |
| --- | --- | --- |
| 成体头体长 | 245–290 mm | 1994 物种账户引用 Smithers 1971；不含尾。[S06] |
| 尾长 | 190–240 mm | 单独展示，不与头体长两端机械相加成“总长范围”。[S06] |
| 雄性体重 | 平均 731 g，626–797 g | 旧样本汇总，不能视为现代全分布区参数。[S06] |
| 雌性体重 | 平均 720 g，620–969 g | 同上；范围重叠，不应渲染明显性别二型。[S06] |
| 合并体重展示 | 620–969 g | 仅作为 schema 的保守合并范围，note 必须保留两性原始均值和范围。[S06] |
| 野外寿命上限线索 | 优势雌性可达约 12 年 | 南喀拉哈里长期研究系统中的观察，不是所有等级的典型寿命。[S19] |
| 圈养最高纪录 | 20.6 年 | AnAge 标为高质量、大样本基础的圈养最高纪录，不是野外期望寿命。[S16] |

识别组合包括细长身体和四肢、尖吻、圆额、小型新月形耳、黑色眼斑、灰褐至沙黄色被毛、后背暗色横纹、细而渐尖且末端发黑的尾，以及每足四趾和发达前爪。南部种群通常比西部和西北干旱区更深色。[S06]

生成图不要加入蓬松狐尾、五趾、人形手掌、浣熊式整脸面罩或醒目的性别体型差异。黑眼斑可以作为识别特征，但本次没有找到能支持“眼斑必然用于吸收眩光”的原始实验，页面不要给它指定功能。

### 数值字段取舍

```ts
measurements: {
  length: {
    min: 24.5,
    max: 29,
    unit: 'cm',
    note: '成体头体长，不含另长19–24厘米的尾；旧物种账户引用Smithers 1971。',
  },
  weight: {
    min: 620,
    max: 969,
    unit: 'g',
    note: '历史样本合并范围；雄性平均731克、626–797克，雌性平均720克、620–969克。',
  },
},
metrics: {
  adultLengthCm: [24.5, 29],
  adultMassKg: [0.62, 0.969],
},
```

`height`、`topSpeedKph`、`elevationM` 和 `lifespanYears` 均省略。没有标准肩高或经核验速度数据；寿命资料混合社会等级、失踪风险和圈养纪录，不构成适合排序的同口径区间。[S15][S16]

## 食性、活动与掘食

狐獴以动物性食物为主，核心是昆虫及其他无脊椎动物，也取食爬行动物、小型哺乳类、鸟类和少量植物材料。[S03][S04][S07] `diet.types` 建议同时使用 `insectivore` 和 `carnivore`，不把少量植物记录夸大成以植物为主的杂食者。

南喀拉哈里 1 至 7 月的原始食性研究中，昆虫出现频率为 78.1%，昆虫幼体占全部记录 33.4%，成体鞘翅目占 27.5%；爬行动物占食物体积 19.9%，出现频率 9.2%。研究还发现月份间食物构成变化，结论是狐獴会随猎物可获得性调整菜单。[S07]

这些比例属于一个地点、一个年度的半年样本，不能写成全物种全年固定配方。

活动字段建议：

- 昼行性，白天离开夜宿洞穴觅食，夜间返回洞系。[S04][S06]
- 觅食时经常以发达前爪掘土；早期野外研究观察到可挖至约 20 厘米寻找猎物。这个深度来自具体研究场景，不是每次掘食深度。[S08]
- 掘食个体把头埋入土中时难以持续监视环境，因此会穿插地面扫描；群体也会出现抬高警戒。[S08]
- 日程会随季节、温度、降雨和食物条件改变，不填写固定“每天觅食 X 小时”的物种常数。[S07][S18]

不要写“天生免疫所有蛇毒或蝎毒”。教学实验显示助手会调整递给幼崽的猎物状态，但没有证明本种对所有毒液免疫。[S13]

## 社会结构、繁殖与育幼

### 群体与繁殖份额

区域物种账户和南喀拉哈里研究都把狐獴描述为合作繁殖、稳定而有领地的群居獴类，群体可从少数个体到约 50 只。群体通常有一对优势繁殖者与多个下位成员；下位成员多为优势者后代，也可能有非近亲移入雄性，不能把群体写成完全封闭的纯血缘家庭。[S04][S10][S17][S19]

南喀拉哈里研究记录优势雌性产生超过 80% 能活到独立期的幼崽。该百分比来自长期研究种群，不是整个分布区恒定比例。下位雌性仍会受孕和生产，优势与下位孕雌都可能杀死竞争者幼崽；所以“只有女王能生育”是错误类比。[S14]

### 繁殖与育幼时间线

- 南喀拉哈里研究把妊娠期按约 70 天回推；AnAge 综合值为 77 天。编辑文案用“约 10 至 11 周”，并注明来源口径不同，不把 70 至 77 天写成个体生理极差。[S14][S16]
- 长期研究资料报道优势繁殖对一年最多可有 3 窝、每窝 2 至 7 仔；这里的“最多”受降雨、体况和研究地点影响，不等于典型年产仔量。[S19]
- 新生幼崽最初约 3 周留在地下繁殖洞。群体其他成员可整日留守，其他成员外出觅食；守洞会带来体重代价。[S08][S14]
- 幼崽随群外出后，助手会递送无脊椎动物和小型脊椎动物，依赖期可延续到约 90 日。研究没有发现固定“保姆阶级”，个体贡献会随年龄、性别、地位、群体大小和窝仔需求变化。[S10]
- 观察与实验表明，助手会依据幼崽乞食叫声所反映的年龄改变猎物处理方式，从较安全、失能的猎物逐步过渡到更完整的活猎物，从而加快猎物处理技能学习。这满足该研究采用的操作性“教学”标准，不表示狐獴像人类一样有课程、语言解释或对幼崽心智状态的复杂理解。[S13]

## 放哨、接替与叫声的证据边界

### “轮流”可以写到哪一步

| 说法 | 结论 | 原始证据 |
| --- | --- | --- |
| 觅食群中常有一只成员到土丘、枯树或其他高点警戒 | 可写 | 1999 年野外研究直接观察；并区分抬高警戒、洞口警戒和觅食中的短扫描。[S08] |
| 不同成员会相继接替抬高警戒 | 可写 | 前一只离开后通常很快有其他成员补上；同一个体很少连续承担两次长时警戒。[S08] |
| 所有成年个体每次都公平轮岗 | 不可写 | 多数群体的成年成员通常都曾参与，但个体贡献不同，优势雌性较少。[S08][S10] |
| 群体有固定班表或稳定接班顺序 | 不可写 | 原始序列分析没有发现固定顺序；论文明确写“apparently no regular rota”。[S08] |
| 放哨叫声让严格轮班得以执行 | 不可写 | 叫声改善协调，却不调节严格轮班。[S09] |
| 狐獴有专职、终身的哨兵阶级 | 不可写 | 年龄、性别、体重、地位和群体大小解释部分变化；长期重复性低，观察尺度遗传率约 0.01。[S10] |
| 放哨是纯粹利他或纯粹自私 | 不可写 | 早期实验支持饱食和即时安全收益，幼崽在场又会提高助手警戒；一个动机标签不能覆盖全部情境。[S08][S11] |

### 三类警戒不要混为一个指标

1999 年研究把行为分为：[S08]

1. **抬高警戒**：个体爬到土丘或枯树等高点，长时间扫描。六个研究群的平均警戒段为 `267.6 ± 74.9 秒`，这里的误差为 SE。
2. **洞口警戒**：靠近洞口的警戒，平均 `109.3 ± 34.0 秒`。
3. **觅食地面扫描**：觅食中短暂停顿抬头，平均 `20.2 ± 1.41 秒`，且不按群体成员协调。

页面主故事谈的是第一类。不能把每次抬头都算成“站上高处放哨”。

### 为什么看起来像轮班，却不是排班

在七群序列资料中，没有现存抬高警戒者时，另一只个体开始警戒的概率约为已有警戒者时的两倍；两只同时上岗时通常有一只很快结束。研究还通过缩短警戒段和补食改变个体下一次上岗的间隔。一次补食实验中，10 只狐獴当天的抬高警戒时间增加约 30%；连续 30 天补食实验里，补食个体上岗频率约为匹配对照的三倍。[S08]

这组结果支持“个体依据当前是否已有警戒者和自身觅食状态作决定”。它不支持中央指挥、互惠记账或固定排班，也不能把鸡蛋补食效应外推成野外所有食物增益的固定百分比。[S08]

### 放哨叫声能证明什么

Manser 对六群、42 只个体的观察和回放实验发现，抬高警戒者发出持续叫声时，觅食成员减少自身警戒，其他个体较少同时上岗，警戒重叠和无人警戒时段都下降。[S09] 这说明叫声提供“有人在看”的动态信息并改善协调。

另一个实验显示警报声的声学结构会随捕食者类型和紧迫度变化，但声学差异不应翻译成人类式固定句子。[S12] 静态图最多表现“张口发声的警戒者与正在反应的群体”，不能证明图中声音类别、紧迫等级、接收者认知或真正捕食事件。

## 威胁、风险与保护行动

### 有证据支持的分层表述

| 层级 | 结论 | 不可外推范围 |
| --- | --- | --- |
| 全球 IUCN 2015 | 没有识别主要威胁，趋势稳定，分布广且进入多个保护地。[S03] | 不是“永远安全”，也不是 2026 年重新评估。 |
| 宠物捕捉 | 2015 年评估称小规模宠物贸易没有证据影响野生种群；区域评估称局地捕捉资料多为轶闻并建议监管。[S03][S04] | 不能写成已量化的全球下降驱动，也不能说完全无风险。 |
| 土地利用 | 区域评估提出灌溉农业可能减少猎物和生态系统工程动物，证据与影响量级有限。[S04] | 不能把所有农业景观列为已证实主要威胁。 |
| 气候 | 2025 年南喀拉哈里长期资料把降雨、植被生产力、觅食效率、体况、繁殖与生存连接起来；极热天也降低觅食表现。[S18] | 一个长期研究点不能给出全物种未来下降百分比。 |
| 结核病 | 1993 至 2019 年一个南喀拉哈里研究种群中，54 个观察到结局的群体有 63% 在临床 *Mycobacterium suricattae* 感染背景下失败。[S17] | 群体失败比例不是个体感染率、死亡率或全球种群威胁比例。 |

2015 IUCN 把相关结核病原暂写为“probably *Mycobacterium bovis*”。后续南喀拉哈里研究明确处理狐獴特异的 *M. suricattae*。[S03][S17] 档案应采用后来的病原鉴定，同时保留它目前只在重点研究种群中得到充分量化的边界。

### 建议 `threats`

- `2015年全球评估未识别主要威胁，但评估距今较久且没有全球成熟个体估算`
- `降雨不足和极端高温可通过猎物、觅食效率与体况影响南喀拉哈里种群，尚无全分布区下降比例`
- `Mycobacterium suricattae结核病可导致南喀拉哈里长期研究群失败，全球流行范围与种群效应未量化`
- `灌溉农业、土地改造与生态系统工程动物减少可能降低局地猎物和洞穴资源，证据主要来自区域评估`
- `局地宠物捕捉和贸易有轶闻记录，但对野生种群的规模效应未知`
- `国家级分布宽而监测密度不均，局地下降可能被全球LC标签掩盖`

### 建议 `conservationActions`

- `维持并连通喀拉哈里跨境公园等大型保护地内的天然开阔半干旱生境`
- `用重复、可比较的调查监测四个范围国的占域、群体数和密度，不把单年波动当长期趋势`
- `在长期研究点同步记录降雨、极端高温、植被生产力、体况、繁殖和生存`
- `监测Mycobacterium suricattae的空间范围、传播途径和群体层影响，并与全球威胁评估分开报告`
- `量化宠物捕捉、国内贸易和跨境流通，按国家法律监管野生来源个体`
- `在农业和放牧景观保留洞穴系统、可挖掘土壤、短草开阔地及无脊椎动物猎物基础`
- `更新全球IUCN评估，补充成熟个体数、趋势置信度和各范围国威胁差异`

## 可用数字与不可用数字

| 数字 | 产品用法 | 限定 |
| --- | --- | --- |
| 24.5–29.0 cm | `measurements.length`、`adultLengthCm`、精选数据 | 头体长，不含尾；旧样本。[S06] |
| 620–969 g | `measurements.weight`、`adultMassKg` | 合并两性历史范围，note 保留两性细目。[S06] |
| 19–24 cm | 正文或关键事实 | 尾长，不加进头体长字段。[S06] |
| 2–50 只 | 精选数据或社会章节 | 多项南喀拉哈里研究与区域账户的观察跨度，不是最佳群体大小。[S04][S19] |
| 267.6 ± 74.9 s | 精选数据 | 六群抬高警戒段均值 ± SE，不是固定班长。[S08] |
| 55.6% 与 12.0% | 放哨正文 | 公园五群与捕食者较少农场八群的中位覆盖率对比，不是物种范围。[S08] |
| 约 70 日；综合值 77 日 | 繁殖正文 | 不合成为个体范围；编辑可写约 10–11 周。[S14][S16] |
| 每窝 2–7 仔、每年最多 3 窝 | 繁殖正文 | 南喀拉哈里长期研究系统的上限式概述。[S19] |
| 优势雌性最长约 12 年 | 寿命正文 | 单长期研究系统、特定社会等级。[S19] |
| 圈养最高 20.6 年 | 关键事实或正文 | 纪录值，不能放进野外典型寿命范围。[S16] |
| 世代长度 6 年 | 保护正文 | IUCN 推定的世代长度，不等于平均寿命。[S03] |
| 1.00 → 0.32 只/km² | IUCN数量正文 | 一个公园、13个月、降雨减少背景。[S03] |
| 63% 群体失败伴临床 TB | 威胁正文 | 54 个已知结局群体的局地结果，不是全球感染率。[S17] |

不得填写全球成熟个体数、全球密度、全分布区寿命区间、标准肩高、最高速度或海拔上下限。

## 页面文案建议

### `summary`

> 狐獴是南部非洲干旱开阔地的昼行性獴类。觅食群中常有一只成员登上土丘或枯木警戒，其他成员会相继接替，但研究没有发现固定班表或等额轮岗。

### `description`

> 狐獴以昆虫和其他小型动物为食，群体通常由一对优势繁殖者、后代及其他助手组成。成员会守洞、给幼崽递食，也会在觅食时承担抬高警戒。警戒者的持续叫声能减少其他成员重复抬头和警戒空档；谁上岗、站多久，则会随体况、年龄、性别、社会地位、群体大小和风险改变。IUCN 2015 年将本种评为无危、趋势稳定，但没有估算全球成熟个体数，后续局地研究还显示气候和结核病需要持续监测。

### `tags`

```ts
[
  '哺乳纲',
  '食肉目',
  '獴科',
  '南部非洲',
  '昼行性',
  '合作繁殖',
  '群居动物',
  '放哨行为',
  '警报叫声',
  '掘洞',
  '食虫动物',
  'IUCN无危',
]
```

## 六个故事章节

### 1. `open-country-not-empty-desert`｜分布｜不是一片没有生命的沙海

> 狐獴分布在安哥拉最西南缘、博茨瓦纳西南部、纳米比亚西部和南部，以及南非北部和西部。它偏好有短草、稀疏灌木和可挖掘土壤的干旱开阔地，并非真正无植被沙漠的专属动物。国家名只表示有记录，不能把四国全境都画成连续栖息地。[S01][S03]

### 2. `prey-below-the-surface`｜食性｜把脸埋进土里寻找今天的猎物

> 昆虫及其幼体构成食物核心，蝎、蛛、多足类、蜥蜴和其他小型脊椎动物也会进入菜单。掘食让眼睛暂时离开地平线，这正是地面扫描和抬高警戒能与觅食相互配合的场景。局地食性比例随月份改变，不能把一项半年研究写成全年固定食谱。[S07][S08]

### 3. `alternation-without-a-rota`｜行为｜会接替，不等于有排班表

> 前一只警戒者回到地面后，另一名成员通常很快补上；同一个体很少连续承担两次长时警戒。这让观察者看见“轮流”，但序列分析没有发现固定接班顺序。饱食、体况、年龄、性别、地位和群体大小都会改变贡献，群体中也没有终身专职的哨兵。[S08][S10]

### 4. `the-watchmans-call`｜交流｜叫声告诉伙伴“现在有人在看”

> 警戒者会在值守期间持续发声。观察和回放实验显示，听到叫声的觅食者较少自行抬头或同时上岗，群体的警戒重叠和无人警戒时段随之减少。叫声改善协调，却没有维持严格轮班；警报声随风险变化，也不能逐句翻译成人类语言。[S09][S12]

### 5. `helpers-at-burrow-and-prey`｜育幼｜一窝幼崽调用整个群体的时间

> 幼崽最初约三周留在地下，一名成员可留守洞口一整天，其他成员外出觅食。幼崽出洞后，助手会递送猎物，并随幼崽成长改变活猎物处理方式。实验支持这会加快幼崽学习，但守洞、递食和放哨都不是固定阶级的终身工作。[S08][S10][S13][S14]

### 6. `least-concern-with-local-signals`｜保护｜无危不等于数据已经齐全

> 2015 年全球评估判为无危、趋势稳定，没有成熟个体估算，也未识别主要威胁。此后一个南喀拉哈里长期研究点显示，降雨、极热和结核病能影响体况、繁殖、生存或群体延续。局地机制不等于全球下降，却说明更新评估不能只沿用一枚旧标签。[S03][S17][S18]

## 推荐关键事实

- MDD 当前接受名是 *Suricata suricatta* (von Schreber, 1776)，英文主名为 Meerkat。[S01]
- 六阶分类为 Animalia、Chordata、Mammalia、Carnivora、Herpestidae、Suricata。[S01][S03]
- 原生国家只有安哥拉、博茨瓦纳、纳米比亚和南非；莱索托没有确认记录。[S03]
- IUCN 全球等级为 LC，趋势稳定，评估日期为 2015-02-28。[S03]
- LC 条目不带受威胁判据代码，全球成熟个体数也未给出。[S03]
- IUCN 使用 6 年世代长度；这不是平均寿命。[S03]
- CITES 在线名录未列本种，但国内和地方野生动物及贸易法规仍可适用。[S05]
- 成体头体长 24.5 至 29 厘米，尾另长 19 至 24 厘米。[S06]
- 历史样本雄性平均 731 克、雌性平均 720 克，两性范围高度重叠。[S06]
- 黑眼斑、后背暗色横纹、四趾前爪和黑色尾尖是可见识别组合。[S06]
- 昆虫及其他无脊椎动物是食物主体，小型脊椎动物和少量植物材料也会被取食。[S03][S04][S07]
- 狐獴昼行，掘食时会穿插短促地面扫描。[S04][S08]
- 群体资料跨度约 2 至 50 只，通常包含优势繁殖对和多个助手。[S04][S19]
- 南喀拉哈里优势雌性产生大多数存活到独立期的幼崽，下位雌性仍可能繁殖。[S14]
- 幼崽最初约三周留在地下，其他成员可守洞，随后会给随队幼崽递食。[S08][S14]
- 助手会随幼崽成长调整猎物处理方式，实验支持这构成操作性教学。[S13]
- 抬高警戒、洞口警戒和觅食中的地面扫描是三种不同观察类别。[S08]
- 成员会相继承担抬高警戒，但没有固定接班顺序或等额轮班。[S08][S09]
- 警戒叫声减少其他成员的重复警戒、值守重叠和无人警戒空档。[S09]
- 放哨贡献受营养状态、年龄、性别、地位、群体大小、捕食环境和幼崽在场影响。[S08][S10][S11]
- 南喀拉哈里长期资料中优势雌性可活到约 12 年；圈养最高纪录为 20.6 年，二者都不是典型野外寿命范围。[S16][S19]
- 2015 全球评估未识别主要威胁，后来局地研究仍发现气候与 *M. suricattae* 结核病的种群过程影响。[S03][S17][S18]

## 应删除或避免的说法

- “每一只狐獴每天按固定顺序轮流站岗。”
- “狐獴群有专职哨兵，其他成员从不放哨。”
- “放哨完全无私”或“放哨完全自私”。
- “叫声是排班命令”或把一种叫声直接翻译成固定人类句子。
- “狐獴只住在没有植物的沙漠。”
- “安哥拉、博茨瓦纳、纳米比亚、南非全境都有连续分布。”
- “莱索托是确认原生国家。”
- “狐獴对所有蛇毒、蝎毒免疫。”
- “所有群体固定 30 只”或“每群都由一个纯血缘家庭组成。”
- “只有优势雌性有生殖能力。”
- “狐獴野外寿命为 20.6 年”或“典型寿命 12 至 20.6 年”。
- “IUCN 在 2026 年重新评估为无危。”
- “全球数量稳定，所以每个地区都没有下降。”
- “未列入 CITES，所以可以自由捕捉和买卖。”
- “结核病导致全球 63% 的狐獴群灭亡。”

## 六幅 1536 × 1024 写实图像场景

### 全组共同解剖与风格约束

- 成体应有细长躯干、长而细的四肢、尖吻、圆额、小型新月耳、黑眼斑、沙灰至灰褐被毛、后背细暗横纹、细长渐尖的黑色尾尖。
- 每足四趾，前爪较长并适于掘土；不要画成人手、五趾、猫爪或大型犬科足。
- 尾不蓬松，面部没有浣熊式整面黑罩，耳不尖长，身体不肥圆。
- 写实自然光、地面视角、真实毛发与沙土纹理，不加文字、信息图、拟人服装、望远镜、帽子、武器或戏剧化特效。
- 除场景明确要求外，不出现额外狐獴。个体数必须可逐一计数，不用模糊背景动物补群体气氛。
- 生成像素只重建可见姿态和空间关系，不能证明叫声、轮班顺序、亲缘、社会等级、疾病、动机或长期趋势。

### 01 `01-upright-sentinel-cover-source.png`｜封面：右侧一只完整直立狐獴

**场景目标**：恰好一只成年狐獴，以自然双足直立姿势站在低矮土丘上，位于画面右侧。左侧留下安静的短草和稀疏灌木背景。

**生成提示词**：

```text
Photorealistic scientific wildlife portrait, 3:2 landscape, 1536 x 1024. Exactly one adult meerkat, Suricata suricatta, standing naturally upright on both hind feet on a low sandy mound in open southern African semi-arid short grassland. Place the animal on the right side with its visual center near 72 percent of image width. Show the entire animal in the source frame: complete pointed muzzle, both small crescent ears, both black eye patches, both forepaws held naturally near the chest, both hind feet, the full slender tapering tail down to its black tip, and real background clearance around every outer edge. Sandy gray-brown coat with subtle dark transverse bands across the lower back, slim limbs, four toes and long front claws. Keep the left 40 percent quiet and low contrast for title text, with sparse grass, a few distant shrubs, soft early-morning natural light, eye-level wildlife photography, realistic anatomy, deep enough focus to keep all feet and tail tip sharp. No other animals.
```

**避免项**：额外狐獴；主体居中或偏左；头、耳、前爪、后足或尾尖出框；蓬松尾；五趾；人形站姿；双臂展开；卡通笑脸；浓密森林；无植被沙丘；文字、水印、项圈。

**建议媒体字段**：

```ts
{
  image: './images/species/meerkat/01-upright-sentinel-cover.webp',
  alt: '一只完整成年狐獴在画面右侧的低矮土丘上自然直立，鼻端、双耳、两只前爪、两只后足和黑色尾尖均在画内，左侧留出安静的半干旱短草地',
  focalPoint: { x: 0.74, y: 0.53 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
}
```

**可见验收**：动物数严格为 1；主体可见边界中心位于源图宽度 60% 以右；完整外轮廓周围有背景；直立而非坐姿；尾尖可见；左 40% 无高对比灌木或动物。

**证据边界**：直立高处是抬高警戒的常见姿态，但单幅图不能确认这只个体正在值守、发声、发现捕食者或处于接班序列。[S08]

### 02 `02-full-body-diagnostic-profile-source.png`｜形态：一只完整侧面行走个体

**场景目标**：恰好一只成体四足行走，完整展示细长体形、四趾前爪、后背横纹和黑尾尖。

**生成提示词**：

```text
Photorealistic scientific field-guide image, 3:2 landscape, 1536 x 1024. Exactly one adult meerkat, Suricata suricatta, in a clean left-facing full lateral walking pose on firm sandy soil. Keep the complete animal visible from nose to black tail tip, including all four feet. Slender body, long thin legs, pointed muzzle, rounded forehead, small crescent-shaped dark ears, distinct black eye patch, sandy gray-tan close coat, subtle dark transverse bands across the rear back, slim non-bushy tapering tail, four toes on each visible foot and enlarged curved front claws. Open semi-arid grassland background, neutral daylight, natural scale, sharp anatomical detail, no dramatic behavior, no other animals.
```

**避免项**：直立姿势；重叠四肢；尾部截断；蓬松狐尾；五趾；斑马式粗条纹；浣熊面罩；明显雌雄二型；尺标、文字、水印。

**媒体字段**：

```ts
{
  image: './images/species/meerkat/02-full-body-diagnostic-profile.webp',
  alt: '一只完整成年狐獴在沙地上侧身四足行走，尖吻、黑眼斑、四只足、后背暗色横纹、细长尾和黑色尾尖均清楚可见',
  title: '细长躯体、掘土前爪和黑色尾尖',
  caption: '形态重建呈现种级识别组合；画面不能测量头体长、尾长或体重，也不能判断个体性别、年龄、亚种或来源地。',
  focalPoint: { x: 0.5, y: 0.56 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
}
```

**证据边界**：颜色在分布区内会变化，图中沙灰色不是全物种固定色标；旧样本体尺不能从生成图反测。[S06]

### 03 `03-foraging-group-one-sentinel-source.png`｜觅食：一只警戒，三只掘食

**场景目标**：恰好四只成年狐獴。一只完整个体站在低土丘上抬高警戒，另外三只分散于近处掘食，空间关系清楚。

**生成提示词**：

```text
Photorealistic behavioral ecology scene, 3:2 landscape, 1536 x 1024. Exactly four adult meerkats in open southern Kalahari semi-arid short grassland. One complete meerkat stands upright on a low mound as a raised sentinel, scanning away from the group. Exactly three other complete meerkats are spaced several body lengths apart on all fours, digging or nosing into separate small patches of sandy soil. Keep all four individuals countable and anatomically separate, with every head, foot and tail tip visible. Correct sandy gray-brown coats, black eye patches, subtle dark back bands, slender black-tipped tails and four-toed digging feet. Natural mid-morning light, documentary wildlife photography, no predator visible, no extra animals.
```

**避免项**：超过或少于四只；两只同时直立；成员排成整齐队列；身体融合；群体簇拥摆拍；固定工作制服；夸张深坑；捕食者；文字或动作箭头。

**媒体字段**：

```ts
{
  image: './images/species/meerkat/03-foraging-group-one-sentinel.webp',
  alt: '四只成年狐獴在半干旱短草地觅食，其中一只在低土丘上完整直立警戒，另外三只分散在沙地上掘食',
  title: '掘食群中的一名抬高警戒者',
  caption: '画面重建一次常见的觅食与警戒并行情景；它不能证明四只个体按固定顺序轮班、贡献相等或每个时刻都有人值守。',
  focalPoint: { x: 0.53, y: 0.53 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
}
```

**证据边界**：原始研究证实成员相继警戒，却也记录无警戒空档、场地差异和个体贡献差异。[S08][S09][S10]

### 04 `04-alarm-call-group-response-source.png`｜交流：警戒者发声，群体转向洞口

**场景目标**：恰好四只狐獴。一只在土丘上张口发声，三只停止掘食并朝附近逃生洞方向转身；不画可识别捕食者。

**生成提示词**：

```text
Photorealistic wildlife behavior reconstruction, 3:2 landscape, 1536 x 1024. Exactly four meerkats in open semi-arid southern African habitat. One complete adult stands upright on a sandy mound with mouth naturally open in a brief call, head angled toward the sky. Exactly three complete group members on the ground have paused digging and turned toward nearby small bolt-hole entrances, alert but not yet in a chaotic sprint. Keep every animal separate and countable, with full tails and feet visible. Correct meerkat anatomy and sandy gray-tan markings, sparse short grass, natural hard daylight, documentary realism. Leave the cause of alarm outside the frame. No visible predator, no extra animals, no sound-wave graphics.
```

**避免项**：猛禽或蛇入镜；尖叫式大口；全员直立；戏剧化恐慌；卡通声波；字幕；超过四只；尾足截断；洞穴像人工管道。

**媒体字段**：

```ts
{
  image: './images/species/meerkat/04-alarm-call-group-response.webp',
  alt: '四只狐獴处在开阔沙地，一只完整成体在土丘上张口发声，另外三只停止掘食并转向附近逃生洞口',
  title: '警戒叫声之后的转向',
  caption: '代表性重建显示发声个体与群体反应同处一景；静态画面无法确认声音类型、紧迫等级、先后因果、捕食者类别或成员是否真的听见。',
  focalPoint: { x: 0.55, y: 0.51 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
}
```

**证据边界**：声音实验支持叫声影响警戒协调，警报结构也随风险变化；像素不能呈现声学结构或实验因果。[S09][S12]

### 05 `05-helper-provisions-pup-source.png`｜育幼：助手递食给出洞幼崽

**场景目标**：恰好一只成体与一只已出洞幼崽，成体把一只小型甲虫幼虫递向乞食幼崽。

**生成提示词**：

```text
Photorealistic close behavioral scene, 3:2 landscape, 1536 x 1024. Exactly two meerkats beside a natural sandy burrow entrance: one complete adult helper on all fours offering a small pale beetle larva from its mouth, and one smaller post-emergence pup reaching toward the prey. Show both complete animals with all feet and both full black-tipped tails visible and no body overlap. Correct sandy gray-brown meerkat anatomy, black eye patches, subtle back bands, four toes and digging claws. Low natural morning light, realistic dry grass and soil, documentary wildlife photography, no other animals.
```

**避免项**：第三只狐獴；哺乳姿势；人手递食；碗或人工饲料；巨型昆虫；蝎子毒刺特写；卡通亲子表情；身体融合；尾足出框。

**媒体字段**：

```ts
{
  image: './images/species/meerkat/05-helper-provisions-pup.webp',
  alt: '一只完整成年狐獴在天然洞口旁把小型甲虫幼虫递向一只完整的出洞幼崽，两只个体的四足和黑色尾尖均在画内',
  title: '助手把猎物递给幼崽',
  caption: '递食是合作育幼的一部分；单帧画面不能确认成体亲缘或社会地位，也不能证明这次递食属于实验定义的教学、猎物仍活着或幼崽随后学会处理。',
  focalPoint: { x: 0.52, y: 0.58 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
}
```

**证据边界**：教学结论来自按幼崽年龄调整活猎物处理的观察与实验，不是看到任何一次递食即可判定。[S13]

### 06 `06-babysitter-with-pups-at-burrow-source.png`｜守洞：一只成体与三只幼崽

**场景目标**：恰好一只完整成体留在自然洞口，恰好三只可独立计数的幼崽在洞口附近；不出现外出觅食群。

**生成提示词**：

```text
Photorealistic cooperative breeding scene, 3:2 landscape, 1536 x 1024. Exactly one complete adult meerkat resting alert beside a natural burrow entrance, with exactly three small meerkat pups clustered near the entrance in open southern African semi-arid grassland. Make all four animals individually countable and anatomically separate. Show the adult from nose to both hind feet and full black-tipped tail; show every pup's head and body without hidden duplicates. Correct sandy gray-tan coats, dark eye patches, small crescent ears and natural size differences. Soft early-morning light, realistic excavated soil and sparse grass, documentary field photography. No other meerkats, no humans, no fences.
```

**避免项**：超过三只幼崽；繁殖雌性王冠；人工育婴箱；叼幼崽；正在哺乳；群体背景；身体融合；洞口像混凝土管；文字、水印。

**媒体字段**：

```ts
{
  image: './images/species/meerkat/06-babysitter-with-pups-at-burrow.webp',
  alt: '一只完整成年狐獴守在天然洞口旁，恰好三只可独立计数的幼崽聚在洞口附近，四只个体均有清楚边界',
  title: '其他成员外出时的守洞者',
  caption: '守洞场景重建采用三只幼崽以便清楚计数；三只不代表固定窝仔数，画面也不能确认成体身份、守护时长、亲缘、哺乳或群体其他成员正在何处。',
  focalPoint: { x: 0.51, y: 0.58 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
}
```

**证据边界**：研究记录个体整日守洞及其体重代价，但一帧图不能测出持续时间、能量成本或照护效果。[S08][S10][S14]

### 六图统一静态验收

- 源 PNG 与运行时 WebP 均应为 1536 × 1024；转换后逐张原尺寸检查眼、趾、爪、耳、尾尖和个体分离。
- 01 动物数为 1；02 为 1；03 为 4；04 为 4；05 为 2；06 为 4，其中幼崽严格 3 只。
- 所有要求完整主体的图都要保留鼻端、耳、可见四足和尾尖，不接受被草、同伴或画框截断来规避解剖检查。
- 不通过模糊背景再加无法计数的狐獴，不把直立姿势自动写成已确认放哨。
- 03 不得画成整齐交接队列；04 不得用可视声波；05 不得把递食本身标成已证实教学；06 不得把三仔写成平均窝仔数。

## 封面完整主体验收计划

01 只是研究阶段规格，尚未有像素证据，不能提前标记为通过。生成后应按 `src/assets/source/README.md` 的 Species cover rule 执行：

1. 在源 PNG 上记录完整主体边界，确认其视觉中心位于源图宽度 60% 以右，并记录主体外侧真实背景净空。
2. 转换为运行时 WebP 后记录 SHA-256、源尺寸和最终 `focalPoint`；本稿的 `{ x: 0.74, y: 0.53 }` 只是起始建议。
3. 在 `320×760`、`390×760`、`1366×768`、`1920×900`、`2560×900`、`3840×900` 六个视口检查稳定帧与初始、前进、后退的进入和离开端点。
4. 每个状态都要让鼻端、两耳、两前爪、两后足和尾尖距英雄区边缘至少 24 CSS px，并避开左侧文案和右侧轮播面板。
5. 如果单张 3:2 图无法在全部比例保持完整主体，应重新构图，或先实现断点级 art direction 与回归覆盖，不能只调 `object-position` 后宣称通过。

## `SpeciesSource` 草稿

```ts
const MEERKAT_SOURCE_DATE = '2026-09-04' as const;
const MEERKAT_CONTENT_DATE = '2026-09-04' as const;

const MEERKAT_SOURCES = [
  {
    title: 'Mammal Diversity Database — Suricata suricatta',
    url: 'https://www.mammaldiversity.org/taxon/1006070/',
    kind: 'taxonomy',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: '香港動植物公園 — 狐獴',
    url: 'https://www.hkzbg.gov.hk/tc/animals/mammals/animals_12.html',
    kind: 'general',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2015 — Suricata suricatta',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T41624A45209377.en',
    kind: 'conservation',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'EWT/SANBI Regional Red List — Suricata suricatta',
    url: 'https://ewt.org/wp-content/uploads/2022/11/38.-Suricate-Suricata-suricatta_LC.pdf',
    kind: 'conservation',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist of Species',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'van Staaden 1994 — Suricata suricatta, Mammalian Species 483',
    url: 'https://doi.org/10.2307/3504085',
    kind: 'general',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Doolan & Macdonald 1996 — Diet and foraging behaviour of group-living meerkats',
    url: 'https://doi.org/10.1111/j.1469-7998.1996.tb05472.x',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Clutton-Brock et al. 1999 — Selfish Sentinels in Cooperative Mammals',
    url: 'https://doi.org/10.1126/science.284.5420.1640',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Manser 1999 — Response of foraging group members to sentinel calls',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1689937/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Houslay, Nielsen & Clutton-Brock 2021 — Genetic and nongenetic sources of cooperative behaviour',
    url: 'https://doi.org/10.1111/evo.14383',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Santema & Clutton-Brock 2013 — Helpers increase sentinel behaviour in the presence of pups',
    url: 'https://doi.org/10.1016/j.anbehav.2012.12.029',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Manser 2001 — Alarm-call structure varies with predator type and urgency',
    url: 'https://doi.org/10.1098/rspb.2001.1773',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Thornton & McAuliffe 2006 — Teaching in wild meerkats',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16840701/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Young & Clutton-Brock 2006 — Infanticide and reproductive sharing',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1686192/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Cram et al. 2018 — Rank-related contrasts in longevity',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30174185/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'AnAge — Suricata suricatta longevity and life history',
    url: 'https://genomics.senescence.info/species/entry.php?species=Suricata_suricatta',
    kind: 'general',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Duncan, Manser & Clutton-Brock 2021 — Causes of group failure in meerkats',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8571573/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Thorley et al. 2025 — Linking climate variability to meerkat demography',
    url: 'https://doi.org/10.1002/ecm.70021',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
  {
    title: 'Dubuc & Clutton-Brock 2019 — Male immigration triggers increased growth in subordinate females',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6374659/',
    kind: 'ecology',
    accessedAt: MEERKAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段 `Species` 对象草稿

```ts
{
  id: 'species-suricata-suricatta',
  slug: 'meerkat',
  names: {
    zh: '狐獴',
    en: 'Meerkat',
    aliases: ['Suricate', 'Slender-tailed Meerkat', 'Gray Meerkat'],
  },
  scientificName: 'Suricata suricatta',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Carnivora', '食肉目'),
    taxon('Herpestidae', '獴科'),
    taxon('Suricata', '狐獴属'),
  ),
  conservation: {
    ...conservation('LC', 'stable', 2015),
    assessor:
      'Jordan, N. R. & Do Linh San, E.（IUCN Red List，评估于2015-02-28）',
  },
  distribution: {
    realms: ['terrestrial'],
    continents: ['非洲'],
    regions: [
      '南部非洲西部干旱内陆',
      '喀拉哈里盆地与邻近半干旱地带',
      '安哥拉极西南缘',
      '纳米比亚西部和南部',
      '博茨瓦纳西南部',
      '南非北部和西部',
    ],
    countries: ['安哥拉', '博茨瓦纳', '纳米比亚', '南非'],
    range:
      '分布于南部非洲西部内陆，包括纳米比亚西部和南部、博茨瓦纳西南部、南非北部和西部，并仅延伸至安哥拉极西南缘。国家字段表示存在记录而非全国连续分布；莱索托只有旧推测且截至2015年评估没有确认记录。',
    center: { lat: -25.5, lng: 21 },
  },
  habitats: [
    {
      name: '干旱稀树草原与短草开阔地',
      realm: 'terrestrial',
      description:
        '短草、稀疏木本植物和可挖掘土壤构成主要觅食与避难环境。',
      isPrimary: true,
    },
    {
      name: '半干旱草地与喀拉哈里沙地',
      realm: 'terrestrial',
      description:
        '包括沙丘间平地、干河床和邻近开阔地；不等同真正无植被沙漠。',
      isPrimary: true,
    },
    {
      name: '干旱灌丛与卡鲁型开阔地',
      realm: 'terrestrial',
      description:
        '利用保持开阔结构的干灌丛和石质地带，不进入密闭森林或山地。',
    },
    {
      name: '荒漠边缘与受改造开放景观',
      realm: 'terrestrial',
      description:
        '可在部分农村和农业景观出现，但记录存在不表示质量等同天然生境。',
    },
  ],
  measurements: {
    length: {
      min: 24.5,
      max: 29,
      unit: 'cm',
      note: '成体头体长，不含另长19–24厘米的尾；旧物种账户引用Smithers 1971。',
    },
    weight: {
      min: 620,
      max: 969,
      unit: 'g',
      note: '历史样本合并范围；雄性平均731克、626–797克，雌性平均720克、620–969克。',
    },
  },
  diet: {
    types: ['insectivore', 'carnivore'],
    foods: [
      '甲虫成虫与幼虫',
      '其他昆虫及幼体',
      '蜘蛛与蝎',
      '蜈蚣与马陆',
      '蜥蜴和其他小型爬行动物',
      '局地或季节性小型哺乳类与鸟类',
      '少量植物材料',
    ],
    description:
      '以昆虫和其他无脊椎动物为主，也取食小型脊椎动物及少量植物材料；南喀拉哈里研究显示食物组成随月份和猎物可获得性变化，局地比例不是全物种固定菜单。',
  },
  activity: [
    '昼行性，白天离洞觅食，夜间返回洞穴系统',
    '以发达前爪掘取地下猎物，掘食期间穿插短促地面扫描',
    '觅食群中常由一只成员到土丘或枯树等高处警戒，其他成员相继参与但没有固定轮班顺序',
    '警戒者的持续叫声会改变其他成员的觅食与警戒分配',
    '日程和觅食表现随季节、降雨、温度及食物条件变化',
  ],
  tags: [
    '哺乳纲',
    '食肉目',
    '獴科',
    '南部非洲',
    '昼行性',
    '合作繁殖',
    '群居动物',
    '放哨行为',
    '警报叫声',
    '掘洞',
    '食虫动物',
    'IUCN无危',
  ],
  summary:
    '狐獴是南部非洲干旱开阔地的昼行性獴类。觅食群中常有一只成员登上土丘或枯木警戒，其他成员会相继接替，但研究没有发现固定班表或等额轮岗。',
  description:
    '狐獴以昆虫和其他小型动物为食，群体通常由一对优势繁殖者、后代及其他助手组成。成员会守洞、给幼崽递食，也会在觅食时承担抬高警戒。警戒者的持续叫声能减少其他成员重复抬头和警戒空档；谁上岗、站多久，则会随体况、年龄、性别、社会地位、群体大小和风险改变。IUCN 2015年将本种评为无危、趋势稳定，但没有估算全球成熟个体数，后续局地研究还显示气候和结核病需要持续监测。',
  storySections: [
    {
      key: 'open-country-not-empty-desert',
      label: '分布',
      title: '不是一片没有生命的沙海',
      body: '狐獴分布在安哥拉最西南缘、博茨瓦纳西南部、纳米比亚西部和南部，以及南非北部和西部。它偏好有短草、稀疏灌木和可挖掘土壤的干旱开阔地，并非真正无植被沙漠的专属动物。国家名只表示有记录，不能把四国全境都画成连续栖息地。',
    },
    {
      key: 'prey-below-the-surface',
      label: '食性',
      title: '把脸埋进土里寻找今天的猎物',
      body: '昆虫及其幼体构成食物核心，蝎、蛛、多足类、蜥蜴和其他小型脊椎动物也会进入菜单。掘食让眼睛暂时离开地平线，这正是地面扫描和抬高警戒能与觅食相互配合的场景。局地食性比例随月份改变，不能把一项半年研究写成全年固定食谱。',
    },
    {
      key: 'alternation-without-a-rota',
      label: '行为',
      title: '会接替，不等于有排班表',
      body: '前一只警戒者回到地面后，另一名成员通常很快补上；同一个体很少连续承担两次长时警戒。这让观察者看见“轮流”，但序列分析没有发现固定接班顺序。饱食、体况、年龄、性别、地位和群体大小都会改变贡献，群体中也没有终身专职的哨兵。',
    },
    {
      key: 'the-watchmans-call',
      label: '交流',
      title: '叫声告诉伙伴“现在有人在看”',
      body: '警戒者会在值守期间持续发声。观察和回放实验显示，听到叫声的觅食者较少自行抬头或同时上岗，群体的警戒重叠和无人警戒时段随之减少。叫声改善协调，却没有维持严格轮班；警报声随风险变化，也不能逐句翻译成人类语言。',
    },
    {
      key: 'helpers-at-burrow-and-prey',
      label: '育幼',
      title: '一窝幼崽调用整个群体的时间',
      body: '幼崽最初约三周留在地下，一名成员可留守洞口一整天，其他成员外出觅食。幼崽出洞后，助手会递送猎物，并随幼崽成长改变活猎物处理方式。实验支持这会加快幼崽学习，但守洞、递食和放哨都不是固定阶级的终身工作。',
    },
    {
      key: 'least-concern-with-local-signals',
      label: '保护',
      title: '无危不等于数据已经齐全',
      body: '2015年全球评估判为无危、趋势稳定，没有成熟个体估算，也未识别主要威胁。此后一个南喀拉哈里长期研究点显示，降雨、极热和结核病能影响体况、繁殖、生存或群体延续。局地机制不等于全球下降，却说明更新评估不能只沿用一枚旧标签。',
    },
  ],
  keyFacts: [
    'MDD当前接受名是Suricata suricatta (von Schreber, 1776)，英文主名为Meerkat。',
    '原生国家为安哥拉、博茨瓦纳、纳米比亚和南非；莱索托没有确认记录。',
    'IUCN全球等级为LC、趋势稳定，评估日期为2015-02-28，没有判据代码或全球成熟个体估算。',
    'CITES在线名录未列本种，但国内和地方野生动物及贸易法规仍可适用。',
    '成体头体长24.5至29厘米，尾另长19至24厘米。',
    '历史样本雄性平均731克、雌性平均720克，两性范围高度重叠。',
    '黑眼斑、后背暗色横纹、四趾前爪和黑色尾尖构成可见识别组合。',
    '昆虫及其他无脊椎动物是食物主体，也取食小型脊椎动物和少量植物材料。',
    '群体资料跨度约2至50只，通常包含优势繁殖对和多个助手。',
    '成员会相继承担抬高警戒，但没有固定接班顺序、等额轮班或专职哨兵。',
    '抬高警戒、洞口警戒和觅食中的地面扫描是三种不同观察类别。',
    '警戒叫声减少其他成员的重复警戒、值守重叠和无人警戒空档。',
    '放哨贡献受营养状态、年龄、性别、地位、群体大小、捕食环境和幼崽在场影响。',
    '南喀拉哈里优势雌性产生大多数活到独立期的幼崽，下位雌性仍可能繁殖。',
    '幼崽最初约三周留在地下，其他成员可守洞，出洞后助手会递食。',
    '助手随幼崽成长调整活猎物处理方式，实验支持这构成操作性教学。',
    '南喀拉哈里资料中优势雌性可活到约12年，圈养最高纪录为20.6年；二者都不是典型野外寿命范围。',
    '2015全球评估未识别主要威胁，后续局地研究仍发现气候和结核病会影响种群过程。',
  ],
  threats: [
    '2015年全球评估未识别主要威胁，但评估距今较久且没有全球成熟个体估算',
    '降雨不足和极端高温可通过猎物、觅食效率与体况影响南喀拉哈里种群，尚无全分布区下降比例',
    'Mycobacterium suricattae结核病可导致南喀拉哈里长期研究群失败，全球流行范围与种群效应未量化',
    '灌溉农业、土地改造与生态系统工程动物减少可能降低局地猎物和洞穴资源，证据主要来自区域评估',
    '局地宠物捕捉和贸易有轶闻记录，但对野生种群的规模效应未知',
    '国家级分布宽而监测密度不均，局地下降可能被全球LC标签掩盖',
  ],
  conservationActions: [
    '维持并连通喀拉哈里跨境公园等大型保护地内的天然开阔半干旱生境',
    '用重复、可比较的调查监测四个范围国的占域、群体数和密度，不把单年波动当长期趋势',
    '在长期研究点同步记录降雨、极端高温、植被生产力、体况、繁殖和生存',
    '监测Mycobacterium suricattae的空间范围、传播途径和群体层影响，并与全球威胁评估分开报告',
    '量化宠物捕捉、国内贸易和跨境流通，按国家法律监管野生来源个体',
    '在农业和放牧景观保留洞穴系统、可挖掘土壤、短草开阔地及无脊椎动物猎物基础',
    '更新全球IUCN评估，补充成熟个体数、趋势置信度和各范围国威胁差异',
  ],
  metrics: {
    adultLengthCm: [24.5, 29],
    adultMassKg: [0.62, 0.969],
  },
  featuredStats: [
    {
      key: 'iucn-status',
      label: 'IUCN全球等级',
      value: 'LC',
      unit: '无危',
      note: '2015年评估，趋势稳定；没有全球成熟个体估算。',
    },
    {
      key: 'head-body-length',
      label: '成体头体长',
      value: '24.5–29.0',
      unit: '厘米',
      note: '不含另长19至24厘米的尾；旧物种账户引用历史样本。',
    },
    {
      key: 'social-group-size',
      label: '观察群体规模',
      value: '2–50',
      unit: '只',
      note: '区域账户与南喀拉哈里研究的跨度，不是固定或最佳群体大小。',
    },
    {
      key: 'raised-guard-bout',
      label: '抬高警戒段',
      value: '267.6 ± 74.9',
      unit: '秒',
      note: '1999年研究六群的均值 ± SE，不是固定班长。',
    },
  ],
  media: {
    image: './images/species/meerkat/01-upright-sentinel-cover.webp',
    alt: '一只完整成年狐獴在画面右侧的低矮土丘上自然直立，鼻端、双耳、两只前爪、两只后足和黑色尾尖均在画内，左侧留出安静的半干旱短草地',
    focalPoint: { x: 0.74, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image: './images/species/meerkat/02-full-body-diagnostic-profile.webp',
        alt: '一只完整成年狐獴在沙地上侧身四足行走，尖吻、黑眼斑、四只足、后背暗色横纹、细长尾和黑色尾尖均清楚可见',
        title: '细长躯体、掘土前爪和黑色尾尖',
        caption:
          '形态重建呈现种级识别组合；画面不能测量头体长、尾长或体重，也不能判断个体性别、年龄、亚种或来源地。',
        focalPoint: { x: 0.5, y: 0.56 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/meerkat/03-foraging-group-one-sentinel.webp',
        alt: '四只成年狐獴在半干旱短草地觅食，其中一只在低土丘上完整直立警戒，另外三只分散在沙地上掘食',
        title: '掘食群中的一名抬高警戒者',
        caption:
          '画面重建一次常见的觅食与警戒并行情景；它不能证明四只个体按固定顺序轮班、贡献相等或每个时刻都有人值守。',
        focalPoint: { x: 0.53, y: 0.53 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/meerkat/04-alarm-call-group-response.webp',
        alt: '四只狐獴处在开阔沙地，一只完整成体在土丘上张口发声，另外三只停止掘食并转向附近逃生洞口',
        title: '警戒叫声之后的转向',
        caption:
          '代表性重建显示发声个体与群体反应同处一景；静态画面无法确认声音类型、紧迫等级、先后因果、捕食者类别或成员是否真的听见。',
        focalPoint: { x: 0.55, y: 0.51 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/meerkat/05-helper-provisions-pup.webp',
        alt: '一只完整成年狐獴在天然洞口旁把小型甲虫幼虫递向一只完整的出洞幼崽，两只个体的四足和黑色尾尖均在画内',
        title: '助手把猎物递给幼崽',
        caption:
          '递食是合作育幼的一部分；单帧画面不能确认成体亲缘或社会地位，也不能证明这次递食属于实验定义的教学、猎物仍活着或幼崽随后学会处理。',
        focalPoint: { x: 0.52, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/meerkat/06-babysitter-with-pups-at-burrow.webp',
        alt: '一只完整成年狐獴守在天然洞口旁，恰好三只可独立计数的幼崽聚在洞口附近，四只个体均有清楚边界',
        title: '其他成员外出时的守洞者',
        caption:
          '守洞场景重建采用三只幼崽以便清楚计数；三只不代表固定窝仔数，画面也不能确认成体身份、守护时长、亲缘、哺乳或群体其他成员正在何处。',
        focalPoint: { x: 0.51, y: 0.58 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: MEERKAT_SOURCES,
  featured: true,
  publishedAt: MEERKAT_CONTENT_DATE,
  updatedAt: MEERKAT_CONTENT_DATE,
} as const satisfies Species;
```

## 来源索引与证据限制

所有来源访问日期均为 2026-09-04。

- **[S01]** [Mammal Diversity Database: *Suricata suricatta*](https://www.mammaldiversity.org/taxon/1006070/)。当前接受名、命名人、英文主名、目科属、中间阶元、异名、国家和 LC 展示状态。国家地图是概览，不能按整国解释连续分布。
- **[S02]** [香港動植物公園：狐獴](https://www.hkzbg.gov.hk/tc/animals/mammals/animals_12.html)。公共机构使用的中文主名与学名配对。它不是分类修订或行为实验来源。
- **[S03]** [Jordan & Do Linh San 2015, IUCN Red List: *Suricata suricatta*](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T41624A45209377.en)。全球 LC、stable、评估日期、具名评估人、四个原生国家、范围、生境、世代长度、局地密度、威胁与保护地。正式评估年份是 2015，不是网页访问年。
- **[S04]** [Endangered Wildlife Trust / SANBI Regional Red List: *Suricata suricatta*](https://ewt.org/wp-content/uploads/2022/11/38.-Suricate-Suricata-suricatta_LC.pdf)。南非、莱索托和斯威士兰区域账户，汇总群体规模、生境、食物、育幼、区域威胁和行动。区域趋势“未知但可能稳定”不能覆盖全球 `stable` 字段。
- **[S05]** [CITES Checklist of Species](https://checklist.cites.org/)。以接受名和属名检索附录记录。本次未检出是负面名录证据，不等于其他贸易法规不适用。
- **[S06]** [van Staaden 1994, “Suricata suricatta”, Mammalian Species 483](https://doi.org/10.2307/3504085)。头体长、尾长、两性体重和形态综合。账户引用更早样本，并使用过时的宽泛分类称呼，因此不用于当前科属裁定。
- **[S07]** [Doolan & Macdonald 1996, diet and foraging behaviour](https://doi.org/10.1111/j.1469-7998.1996.tb05472.x)。南喀拉哈里 1 至 7 月食性与季节变化。昆虫、幼体、鞘翅目和爬行动物比例只适用于研究地点和时期。
- **[S08]** [Clutton-Brock et al. 1999, “Selfish Sentinels in Cooperative Mammals”](https://doi.org/10.1126/science.284.5420.1640)。抬高警戒、洞口警戒、地面扫描、持续时间、接替序列、补食实验、体况和场地差异。标题不意味着后续文案可以把所有警戒动机概括成“纯自私”。
- **[S09]** [Manser 1999, sentinel calls and forager response](https://pmc.ncbi.nlm.nih.gov/articles/PMC1689937/)。六群、42 只个体的观察与回放实验，支持叫声降低觅食者警戒、减少重叠与空档，同时明确不支持严格轮班。
- **[S10]** [Houslay, Nielsen & Clutton-Brock 2021, cooperative-behaviour variation](https://doi.org/10.1111/evo.14383)。19 年资料中守洞、递食与放哨随年龄、性别、地位和群体大小变化；12,333 次记录涉及 1,776 只、40 群。低遗传率不等于行为没有任何遗传基础。
- **[S11]** [Santema & Clutton-Brock 2013, pup presence and sentinel behaviour](https://doi.org/10.1016/j.anbehav.2012.12.029)。幼崽随队时助手增加放哨和双足警戒，补充早期即时自利解释。单一研究不能定量整个分布区的幼崽效应。
- **[S12]** [Manser 2001, alarm-call structure, predator type and urgency](https://doi.org/10.1098/rspb.2001.1773)。警报声学结构随捕食者类型和紧迫度改变。不能把声学类别翻译成固定人类词句。
- **[S13]** [Thornton & McAuliffe 2006, “Teaching in wild meerkats”](https://pubmed.ncbi.nlm.nih.gov/16840701/)。观察与实验支持助手按幼崽成长调整活猎物处理，从而加快技能学习。“教学”采用行为学操作定义，不要求人类式意图推理。
- **[S14]** [Young & Clutton-Brock 2006, infanticide and reproductive sharing](https://pmc.ncbi.nlm.nih.gov/articles/PMC1686192/)。16 群、248 窝的南喀拉哈里资料，包含约 70 日妊娠、幼崽前三周地下期、优势与下位雌性繁殖冲突。超过 80% 的成功幼崽由优势雌性产生，是局地长期研究结果。
- **[S15]** [Cram et al. 2018, rank-related longevity contrasts](https://pubmed.ncbi.nlm.nih.gov/30174185/)。优势者较长寿却端粒缩短更快，差异与下位个体群外活动风险有关。研究强调社会等级和群外活动会改变生存，不能把一个统一寿命区间套给所有个体。
- **[S16]** [AnAge: *Suricata suricatta*](https://genomics.senescence.info/species/entry.php?species=Suricata_suricatta)。圈养最高 20.6 年、77 日妊娠和来源索引。最高纪录不等于典型寿命，数据库平均项也不能覆盖局地原始研究。
- **[S17]** [Duncan, Manser & Clutton-Brock 2021, causes of group failure](https://pmc.ncbi.nlm.nih.gov/articles/PMC8571573/)。1993 至 2019 年、98 群的南喀拉哈里长期研究，量化群体延续和 *Mycobacterium suricattae* 相关失败。群体失败不是个体死亡率或全球威胁比例。
- **[S18]** [Thorley et al. 2025, climate variability and meerkat demography](https://doi.org/10.1002/ecm.70021)。2002 至 2023 年为主的单地点长期资料，把降雨、植被生产力、觅食、体况、繁殖和生存连接起来，并分析高温作用。作者明确依赖相关性路径和情景推断，不能给出全物种必然下降预测。
- **[S19]** [Dubuc & Clutton-Brock 2019, male immigration and subordinate female growth](https://pmc.ncbi.nlm.nih.gov/articles/PMC6374659/)。南喀拉哈里长期研究背景汇总群体 2 至 50 只、优势繁殖对一年最多 3 窝且每窝 2 至 7 仔、优势雌性可活到约 12 年。它们是研究系统背景值，不是全分布区典型值。

## 实现与 TODO 交接

1. 新增 `MEERKAT_SOURCE_DATE`、`MEERKAT_CONTENT_DATE` 和 19 项 `MEERKAT_SOURCES`，所有 `accessedAt` 为 `2026-09-04`。
2. 新增上述 `species-suricata-suricatta`。保护字段严格为 LC、stable、2015、无 `criteria`，并保留具名 assessor。
3. `countries` 顺序固定为安哥拉、博茨瓦纳、纳米比亚、南非；不要添加莱索托。
4. `metrics` 只放 `adultLengthCm` 与 `adultMassKg`。寿命、群体规模、警戒时长、世代长度和局地密度只作有 note 的展示数据。
5. 六个故事键顺序固定为 `open-country-not-empty-desert`、`prey-below-the-surface`、`alternation-without-a-rota`、`the-watchmans-call`、`helpers-at-burrow-and-prey`、`least-concern-with-local-signals`。
6. 四项精选数据键顺序固定为 `iucn-status`、`head-body-length`、`social-group-size`、`raised-guard-bout`。
7. 生成六张图后再新增素材 README、全局素材索引和运行时 WebP；先完成原尺寸检查，再执行封面完整主体验收与专项测试。
8. 数据、图片、测试、类型检查、构建和全量测试全部通过后，才能删除 `docs/todo.md` 中的狐獴条目并更新物种计数。

## 交接检查表

### 研究底稿

- [x] 接受学名、命名人、中英文主名、别名与六阶分类已分别说明。
- [x] IUCN code、trend、assessedYear、criteria 缺省理由和具名 assessor 已核定。
- [x] 四个原生国家、莱索托排除理由、地图中心边界和生境矛盾已处理。
- [x] 头体长、尾长、两性体重与外形识别组合已核定。
- [x] 野外等级相关寿命与圈养最高纪录已分开，未生成虚假寿命区间。
- [x] 食性、昼行活动、掘食、群体结构、繁殖、守洞、递食和教学已有来源。
- [x] “相继接替”与“固定轮班”已明确区分，并覆盖补食、叫声、年龄、性别、地位、群体大小和幼崽效应。
- [x] 全球无主要威胁与局地气候、结核病、农业和宠物贸易信号已分层。
- [x] CITES 未列与“自由贸易”的错误推论已分开。
- [x] 可用和不可用数值、六段故事、关键事实、威胁、行动和完整 `Species` 草稿齐备。

### 图像规格

- [x] 六幅图均有文件名、1536 × 1024 写实提示词、避免项、媒体字段、可见验收和证据边界。
- [x] 封面严格为一只完整直立狐獴在右侧，左 40% 留白，并列出全视口验收计划。
- [x] 六图个体数固定，形态约束覆盖四趾前爪、黑眼斑、后背横纹、细长黑尾尖和非蓬松尾。
- [x] 行为图没有把静态姿态推成固定轮班、声学因果、教学或窝仔数证据。

### 落库前验收

- [ ] 六张源 PNG 与六张运行时 WebP 已生成并按原尺寸检查。
- [ ] 封面已记录源图主体边界、WebP SHA-256、最终 `focalPoint` 和六视口动画端点结果。
- [ ] `src/data/species.ts` 已写入来源数组与完整对象。
- [ ] 图像集 README、全局素材索引和英雄轮播完整主体测试已更新。
- [ ] 分类测试、类型检查、生产构建、全量测试和 `git diff --check` 全部通过。
- [ ] `docs/todo.md` 的狐獴行与全局计数只在前述步骤全部完成后更新。
