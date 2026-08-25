# 长江江豚（_Neophocaena asiaeorientalis_）完整物种档案研究

- 检索与核验日期：2026-08-25
- 展示中文名：**长江江豚**；英文名：**Yangtze Finless Porpoise**；学名：_Neophocaena asiaeorientalis_ (Pilleri & Gihr, 1972)
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供科学边界
- 证据标准：接受名、种界与自然范围优先采用 Mammal Diversity Database（MDD）v2.5；保护等级追溯 IUCN 原始评估及鲸类专家组；国内法律与最新数量采用中国政府原文；体型、遗传、丰度、食性、声学、繁殖、生境与威胁采用同行评审原始研究
- 时间口径：本文所称“当前”截至 **2026-08-25**。2025 年专项调查结果由农业农村部在 2026-01-30 国新办发布会上公布
- 核心分类边界：全文的长江江豚专指 MDD v2.5 拆分后的长江淡水种 _N. asiaeorientalis_，不包含海生东亚江豚 _N. sunameri_ 或印太江豚 _N. phocaenoides_

## 编辑结论

1. 产品采用 MDD v2.5 的三种江豚属口径：_N. asiaeorientalis_ 只指长江中下游淡水种，英文名用 **Yangtze Finless Porpoise**。MDD 明列其范围为中国长江中下游，并注明它曾包含现已拆出的 _N. sunameri_。[MDD taxon 1006446](https://www.mammaldiversity.org/taxon/1006446/)
2. 海洋哺乳动物学会 2026 年清单仍把长江江豚和东亚江豚列为 _N. asiaeorientalis_ 的两个亚种。委员会认为 2018 年基因组研究支持强分化和淡水适应，却缺少长江口潜在接触区样本，尚不能排除距离隔离效应。页面要标明采用 MDD 版本，不能写“所有权威已经一致接受三种拆分”。[Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [Zhou et al. 2018](https://doi.org/10.1038/s41467-018-03722-x)
3. 结构化保护字段推荐 **CR / decreasing / assessed 2012 / A3b+4b**。这是 IUCN 对长江评估单元 _N. a. asiaeorientalis_ 的旧亚种评估，地理和生物边界与 MDD 当前长江种吻合。IUCN 另有 **EN / decreasing / assessed 2017 / A2bcde+3bcde+4bcde** 的广义 _N. asiaeorientalis_ 物种评估；它同时覆盖长江和中国、日本、韩国沿海种群，不能直接代表本页当前种界。[IUCN Yangtze assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T43205774A45893487.en) [IUCN broad-species assessment](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T41754A50381766.en)
4. 2025 年专项调查估算自然种群为 **1,426 头**，比 2022 年估算增加 **177 头**。这是调查估计的全龄自然种群总量，不是逐头名录、成熟个体数或无误差精确计数；公开发布信息未附置信区间。不要填 `estimatedMatureIndividuals`，也不要自行把官方趋势改成 IUCN `increasing`。[新华社转述国新办发布会](https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html)
5. 国内法律字段应写“**国家一级重点保护野生动物**”。2021 年《国家重点保护野生动物名录》以“长江江豚 _Neophocaena asiaeorientalis_”列入一级；国内法等级和 IUCN 灭绝风险属于两套制度，不能互换。[国家林草局、农业农村部 2021 年第 3 号公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) [名录附件 PDF](https://www.forestry.gov.cn/html/main/main_5461/20210205122239482485322/file/20210205122347636743107.pdf)
6. 现行 CITES 附录把 _N. asiaeorientalis_ 列入附录 I；CMS 页面按旧广义种口径列附录 II，自 1979 年生效。两者分别管理国际贸易和迁徙物种合作，不等同于 IUCN CR，也不能据 CMS 条目声称长江淡水种跨国迁徙。[CITES Appendices, effective 2026-03-05](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CMS species page](https://www.cms.int/species/neophocaena-asiaeorientalis)
7. 体型展示采用多年份、两类生境的长江江豚实测成体样本包络：身长 **131—168 厘米**、体重取整 **33—83 千克**。131 厘米来自雌性成体分组阈值，168 厘米与约 83 千克是该研究样本中的实测上端；妊娠、性别、体况、样地和测量年份都会改变体重。字段注释必须保留“样本包络”，不能升级成全种绝对最小—最大值。[Nabi et al. 2018](https://doi.org/10.1093/conphys/coy072) [Nabi et al. 2019](https://doi.org/10.3389/fphys.2019.00792)
8. 图像识别依赖一组特征：圆钝额部、几乎没有突出的吻、头顶单一呼吸孔、无背鳍、背部中央狭窄的瘤粒脊、灰色光滑皮肤、胸鳍和水平尾叶。长江样本的背部脊宽 **0.2—0.8 厘米**（n=39）；它不是低矮背鳍。嘴线自然上弯形成“微笑”观感，不能据此表现人类式情绪或露齿笑。[Gao & Zhou 1995](https://www.mammal.cn/CN/Y1995/V15/I2/81) [Jefferson 2002 review](https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf)

## 名称、分类与种界

### 推荐名称字段

| 字段 | 推荐值 | 边界 |
| --- | --- | --- |
| `names.zh` | `长江江豚` | 中国政府名录和行动计划采用的名称，也能排除海生江豚。 |
| `names.en` | `Yangtze Finless Porpoise` | MDD v2.5 的标准英文名。 |
| `names.aliases` | `江豚`、`江猪`、`微笑天使`、`Yangtze River Finless Porpoise` | “江豚”范围过宽，“江猪”是地方俗称，“微笑天使”是文化昵称；三者只作检索别名，正文首段给出限定。 |
| `scientificName` | `Neophocaena asiaeorientalis` | MDD v2.5 接受名；作者为 Pilleri & Gihr, 1972，原始组合是 _Neomeris asiaeorientalis_。[MDD](https://www.mammaldiversity.org/taxon/1006446/) |

“Narrow-ridged Finless Porpoise”在 SMM 和 IUCN 旧资料中通常指包含长江与东亚沿海两个单元的广义种，不应作为本页当前英文主名。“Finless Porpoise”也可泛指江豚属成员，只能作为历史检索词。

### 完整分类与仓库显示口径

| 层级 | 当前分类 | 中文 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Mammalia | 哺乳纲 |
| 目 | Artiodactyla | 偶蹄目 |
| 亚目 | Cetacea | 鲸类 |
| 下目 | Odontoceti | 齿鲸类 |
| 科 | Phocoenidae | 鼠海豚科 |
| 属 | _Neophocaena_ | 江豚属 |
| 种 | _Neophocaena asiaeorientalis_ | 长江江豚 |

MDD 把 Cetacea 放在 Artiodactyla 下，Odontoceti 再置于 Cetacea 内。[MDD](https://www.mammaldiversity.org/taxon/1006446/) 仓库 `SpeciesTaxonomy` 只有一个“目”字段，现有蓝鲸和宽吻海豚页面采用 `taxon('Cetacea', '鲸目')` 维持分类图谱中的鲸类节点。长江江豚对象沿用这个界面简化；正文和 `keyFacts` 说明完整系统位置，避免把 Cetacea 与 Artiodactyla 写成平行阶元。

### MDD 与 SMM 的分歧

MDD v2.5 采用三个现生江豚属物种：

- _N. asiaeorientalis_：长江中下游淡水种；
- _N. sunameri_：东亚沿海种；
- _N. phocaenoides_：印太沿海种。

MDD 的长江页面注明“split from _N. phocaenoides_; previously included _N. sunameri_”，范围国只有中国。[MDD](https://www.mammaldiversity.org/taxon/1006446/) 2018 年群体基因组研究比较 48 只江豚，长江样本形成清楚的遗传簇，并发现与渗透调节、肾功能及淡水适应相关的选择信号；作者据此提出把长江与海生窄脊型提升为两个物种。[Zhou et al. 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC5893588/)

SMM 2026 仍保留广义 _N. asiaeorientalis_ 及两个亚种 _N. a. asiaeorientalis_、_N. a. sunameri_。委员会指出，2018 年研究没有覆盖长江口潜在接触区，因而暂不接受种级提升。[SMM 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) 产品应把这写成“资料版本分歧”，不把任何一方描述成错误，也不根据一张照片把海生个体回溯成当前长江种。

## IUCN 保护状态：按当前种界选择同域旧评估

### 结构化字段

```ts
conservation: conservation('CR', 'decreasing', 2012, 'A3b+4b')
```

IUCN 在 2012 年完成长江单元评估，以 _Neophocaena asiaeorientalis asiaeorientalis_ 的亚种阶元发布于 2013-1 批次。等级为 **Critically Endangered（CR）**，趋势 **decreasing**，标准 **A3b+4b**。2013 是发布批次和专家组公告年份；`assessedYear` 应填 2012。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T43205774A45893487.en) [IUCN CSG announcement](https://iucn-csg.org/yangtze-finless-porpoise-is-listed-as-critically-endangered/)

该评估单元的自然范围正好对应 MDD v2.5 当前长江种。IUCN 鲸类专家组现行状态表仍把 Yangtze Finless Porpoise 列在 CR 亚种栏。[IUCN CSG status table](https://iucn-csg.org/red-list-status-of-cetaceans/) 在没有针对三种拆分框架的新评估前，CR 是本页最贴合生物边界的展示值。

### 不能直接套用的 2017 广义种评估

IUCN 2017 年的 _N. asiaeorientalis_ 评估为 **EN / decreasing / A2bcde+3bcde+4bcde**，覆盖中国、日本和韩国的长江与沿海窄脊江豚。[IUCN broad-species assessment](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T41754A50381766.en) MDD 页面自动显示的 EN 来自这条同名旧记录；学名字符串相同，评估边界却比当前 MDD 物种更宽。

产品不能同时在一个 `conservation` 对象里表达两套边界。推荐做法是：

- 结构化卡片显示同域旧评估 **CR / decreasing / 2012 / A3b+4b**；
- `description`、`storySections` 和 `keyFacts` 解释 2017 广义种 EN；
- `sources` 同时保留两条 IUCN 记录；
- 未来 IUCN 若按三种框架重评，替换结构化字段并更新 `updatedAt`。

2025 年丰度上升不自动覆盖 IUCN `decreasing`。红色名录趋势来自完整评估，新的连续调查要经过风险标准、代长和种群结构分析后才能改变官方字段。

## 最新丰度与数字边界

### 四次可比节点

| 调查 | 自然种群估计 | 方法和限制 |
| --- | ---: | --- |
| 2006 | 约 1,800 头；长江干流 1,225 头 | 干流双船目视航线调查与湖区资料；历史种界使用长江亚种名称。[Zhao et al. 2008](https://doi.org/10.1016/j.biocon.2008.09.005) |
| 2012 | 约 1,040 头；干流 505、鄱阳湖约 450、洞庭湖约 90 | 干流估计 95% CI 348—662；研究据连续资料判断下降加速。[Mei et al. 2014](https://doi.org/10.1016/j.biocon.2014.02.033) |
| 2017 | 1,012 头（95% CI 791—1,233）；干流 445、鄱阳湖 457、洞庭湖 110 | 研究认为干流快速下降放缓，但分布碎片化仍明显。[Huang et al. 2020](https://doi.org/10.1016/j.biocon.2019.108315) |
| 2022 | 1,249 头 | 农业农村部全流域科考结果；官方称相对 2017 首次实现止跌回升。[农业农村部](https://cjyzbgs.moa.gov.cn/gzdt/202304/t20230426_6426280.htm) |
| 2025 | 1,426 头；比 2022 增 177 头 | 专项调查结果在国新办发布；截至核验日，公开简报未附分区值、置信区间和完整方法论文。[新华社](https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html) |

2025 的 1,426 适合放进 `featuredStats`，注释写“专项调查估算的全龄自然种群”。它不适合 `metrics.estimatedMatureIndividuals`，原因有三：官方数字没有限定成熟个体；没有公开精确年龄结构换算；调查估计存在观测和模型误差。`1,426` 也不支持“已经脱离极危”或“保护任务完成”的结论。

## 国内法律、CITES 与 CMS

### 中国法律与行动计划

2021 年修订的《国家重点保护野生动物名录》把长江江豚列为 **一级**。这项法律地位适用于国内保护和许可管理，不是 IUCN CR 的中文翻译。[国家林草局、农业农村部公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html)

农业农村部等八部门与中国科学院联合发布《长江江豚拯救行动计划（2026—2035 年）》。计划以自然种群和栖息地就地保护为核心，迁地保护与人工繁育为辅助，部署涉水活动监管、生境修复、风险清理、智慧监测、应急救护、迁地能力、野化放归、人工繁育、科研和科普十项行动。[农业农村部行动计划](https://cjyzbgs.moa.gov.cn/gzdt/202512/t20251231_6480313.htm)

“迁地保护”在本物种语境中常指与长江生态过程相近的半自然故道种群，不等于水族馆展示。2023 年中国首次把 4 头来自天鹅洲故道迁地种群的江豚分批放归长江；其中两头先经历约两年野外适应训练，放归后继续跟踪。[农业农村部 2023](https://cjyzbgs.moa.gov.cn/gzdt/202304/t20230426_6426280.htm) 2025 年同行评审研究报告了其中两头雄性成功释放后的监测结果，支持“分阶段适应—放归—跟踪”流程。[Qiu et al. 2025](https://doi.org/10.1098/rsbl.2024.0719)

### 国际公约

| 制度 | 列入状态 | 准确表达 |
| --- | --- | --- |
| CITES | _N. asiaeorientalis_ 附录 I | 国际商业贸易受到最严格约束；附录 I 不是“任何科研、救护或跨境移动绝对禁止”。[2026 附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) |
| CMS | 广义 _N. asiaeorientalis_ 附录 II，自 1979 年 | 条目沿用覆盖海生东亚种群的旧广义分类；长江种是中国特有淡水种，CMS 列名不能用来证明它跨国迁徙。[CMS](https://www.cms.int/species/neophocaena-asiaeorientalis) |

## 自然分布、地图与生境

### 当前自然范围

MDD v2.5 将范围限定为中国长江中下游。[MDD](https://www.mammaldiversity.org/taxon/1006446/) 中国 2026—2035 行动计划进一步列出长江中下游干流、洞庭湖、鄱阳湖和少数支流。[农业农村部](https://cjyzbgs.moa.gov.cn/gzdt/202512/t20251231_6480313.htm) 因此结构化字段应当：

- `realms: ['freshwater']`，不加 `marine`；
- `countries: ['中国']`，`endemicTo: ['中国长江中下游水系']`；
- 范围文字列明干流、两湖及保持水文连通的少数支流和汊江；
- 不把海生 _N. sunameri_ 的黄海、东海、日本或韩国范围拼入地图；
- `center` 只作长江中下游视窗焦点，不表示丰度中心、模式产地或实时观测位置。

半自然故道种群属于保护体系，不应涂进“原生连续范围”。动物园或繁育中心中的个体也不构成引入野生种群。

### 三组原生生境

1. **长江中下游干流的自然岸带、洲滩与汇流区，primary**：2017 年调查发现江豚偏向坡度较缓的自然岸带和洲滩，常围绕沙洲分布。[农业农村部 2018 发布会实录](https://cjyzbgs.moa.gov.cn/ztzl/201904/t20190428_6220353.htm) 一项干扰较低的故道研究在本地尺度识别出 7—12 米水深、坡度小于 2°及中高鱼密度的偏好组合；这些阈值不能无条件覆盖全流域。[Mei et al. 2017](https://doi.org/10.1016/j.ecolmodel.2016.12.020)
2. **鄱阳湖、洞庭湖与季节性湖槽，primary**：湖区面积、水深、鱼类和船只重叠会随水位强烈改变。鄱阳湖 2018—2020 年十次调查显示，低、中水位时江豚由主湖体进入支流，高水位时返回主湖；适宜水深随水位期从约 4—8 米、6—12 米变到 7—20 米。[Liu et al. 2022](https://english.ihb.cas.cn/sourcedb/thesisn/202409/t20240911_688325.html)
3. **江湖连接口、通江支流与汊江走廊**：这些狭窄通道维持主江、湖泊和地方觅食区之间的季节移动。长江—鄱阳湖连接口 2020—2022 年共 834 个录音日中，93% 的天数检测到江豚声呐；船流较低时声学活动更高，显示连接廊道和干扰管理同等重要。[Duan et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10559091/)

“偏好 7—12 米”来自单一保护故道，“4—20 米”来自鄱阳湖不同水位期。产品适合讲随水文移动的弹性生境，不宜给全种一个固定最佳水深。

## 外形、体型与图像鉴别

### 必须组合出现的特征

- 身体短粗而流线，额部圆钝；吻突很短，侧面看不到宽吻海豚式清楚“瓶鼻”。
- 头顶一个呼吸孔；没有鱼类鳃裂、鳞片或须鲸板。
- **完全没有背鳍**。背中线只有低矮狭窄的瘤粒脊，从中背延向尾柄。
- 长江 39 件样本的背脊宽 0.2—0.8 厘米；远景不必逐粒刻画，近景要呈不规则小瘤粒带，不能变成锯齿或硬甲。[Gao & Zhou 1995](https://www.mammal.cn/CN/Y1995/V15/I2/81) [Jefferson 2002 review](https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf)
- 体色由深灰、铅灰到中灰，腹侧可略浅；水下和湿皮会改变明暗。不要统一画成白色、粉色、蓝色或虎鲸式黑白块。
- 两侧胸鳍与水平尾叶符合齿鲸结构；尾叶上下摆动，不能画成鱼类竖直尾鳍。
- 嘴线轻微上弯形成文化昵称“微笑天使”，不露人类牙齿，不夸大嘴角，也不把表情写成情绪测量。

与 TODO 中宽吻海豚的对照很明确：宽吻海豚有突出短粗吻和高镰形背鳍；长江江豚吻不突出且无背鳍。白鱀豚则有细长吻和小背鳍。图片只要出现清楚瓶鼻或三角背鳍，即判为物种错误。

### 可展示的体型口径

长江江豚的常见科普体型数字混合幼体、成体、海生亚种和记录极值。多年份健康研究直接记录鄱阳湖与天鹅洲故道江豚，并按体长、性别以及妊娠/泌乳状态划分生命阶段。后续参考区间研究采用成年雄性 ≥138 厘米、成年雌性 ≥131 厘米的分组阈值；样本中成体体长上端为 168 厘米，成体体重约 32.7—83.4 千克。[Nabi et al. 2018](https://doi.org/10.1093/conphys/coy072) [Nabi et al. 2019](https://doi.org/10.3389/fphys.2019.00792)

推荐展示为：

```ts
measurements: {
  length: {
    min: 131,
    max: 168,
    unit: 'cm',
    note: '鄱阳湖与天鹅洲多年份研究的审慎成体样本包络；131 厘米是雌性成体分组阈值，168 厘米是该样本实测上端，不是全种绝对极值。',
  },
  weight: {
    min: 33,
    max: 83,
    unit: 'kg',
    note: '同一研究体系的成体实测值取整包络；性别、妊娠、体况、样地和年份都会影响体重。',
  },
}
```

`metrics` 可以镜像这两个区间供比较，但前端详情必须继续显示测量注释。不要采用“平均 1.30 米、39.1 千克”作为成体指标：相关汇总没有把混合生命阶段平均值限定为成体。也不填 `lifespanYears`、`topSpeedKph` 或 `maxDiveDepthM`，现有资料不足以提供跨生境、可排序的稳健值。

## 食性、回声定位与活动

### 鱼食性顶级捕食者

鄱阳湖研究分析了 24 只江豚的血液稳定同位素、8 只搁浅个体肌肉和 13 只个体粪便中的猎物 DNA。结果支持“广食性顶级捕食者”，主要取食半洄游和非洄游淡水鱼；两类鱼的贡献随采样组织代表的时间窗口和季节性鱼类丰度变化。[Yang et al. 2021](https://doi.org/10.1111/fwb.13692)

因此 `diet.types` 同时使用 `carnivore` 和 `piscivore`，`foods` 按生态类别列“半洄游淡水鱼”“定居性淡水鱼”“湖泊与干流小型鱼类”。不要把圈养菜单里的具体鱼种写成全流域固定食谱，也不要把“顶级捕食者”理解成只捕大型鱼。

### 依靠声音读河流

长江浑浊水体限制远距离视觉，江豚发出窄带高频点击，利用回声定位导航、寻找鱼群和完成捕食接近。一项两只成年圈养长江江豚的听觉诱发电位研究显示，高频声音从头部前方和下颌脂肪垫方向传入时反应最好；样本仅两只，适合说明接收路径，不宜生成精确全种听力阈值卡。[Mooney et al. 2014](https://doi.org/10.1242/jeb.091470)

彭泽港口一处连续声学研究记录 3,372 个点击串，其中 190 个捕食嗡鸣；傍晚和夜间点击、嗡鸣多于白昼，168 次声学遭遇中 89.3% 涉及单只个体。[Wang et al. 2014](https://doi.org/10.1371/journal.pone.0097907) 这是一个港口和一个季节的结果。产品可写“昼夜均会活动，部分地点傍晚与夜间觅食更强”，不能给全种贴“严格夜行”标签。

回声定位不可画成蓝色光束、可见声波圆环或额头激光。画面可用动物朝向鱼群、浑水颗粒和近距离捕食姿态暗示声音感知。

### 个体与小群

江豚可独游，也会组成随觅食、水位和母幼关系变化的小群。1993 年长江调查中 1—5 只的群体占约 88%；现代港口声学研究则频繁记录单只个体。[Zhang et al. 1993](https://www.mammal.cn/EN/Y1993/V13/I4/260) [Wang et al. 2014](https://doi.org/10.1371/journal.pone.0097907) 页面不应把一次三只或五只目击描述成永久家庭、固定首领或整群同步迁徙。

## 繁殖与母幼

圈养长江江豚的血浆孕酮监测和超声研究跟踪 7 只雌性、4 次可用于内分泌估算的妊娠。妊娠中位估计约 346—397 天，作者概括为 **约 12 个月**；分娩主要集中在 5—7 月，既有资料显示交配主要在 4—8 月。[Zeng et al. 2022](https://doi.org/10.3354/esr01179)

2019 年三只圈养个体的纵向粪便激素研究验证了非侵入式妊娠监测：孕酮代谢物突然上升可提示妊娠，临产前约四个月出现明显下降；样本很小，不能把浓度曲线外推成野外每只个体的精确预产算法。[Hao et al. 2019](https://doi.org/10.3389/fendo.2019.00606)

图像以一只成体和一只幼体并游表现长期母幼投入。画面本身不能确认性别、亲缘、年龄或哺乳行为；不要安排人类式拥抱、牵鳍、骑背或外露乳房。幼体比例可约为成体的一半至三分之二，保留钝头、无背鳍和水平尾叶。

## 威胁与保护行动

### 证据支持的压力

农业农村部 2018 年发布会列出水域污染、工程建设、航运、过度捕捞和非法采砂，并指出这些活动压缩栖息地、降低质量、加剧碎片化和干扰通讯。[发布会实录](https://cjyzbgs.moa.gov.cn/ztzl/201904/t20190428_6220353.htm) 同行评审研究可进一步分开机制和证据强度：

1. **渔具伤害与非法捕捞**：刺网、滚钩、电捕鱼等会造成缠绕、创伤和直接死亡；捕捞还会减少鱼类猎物。长江十年禁渔降低了捕捞压力，执法和鱼类恢复仍需持续。
2. **航运与水下噪声**：2006、2012、2017 调查与船舶空间资料显示，近岸优选生境与上行大船航线高度重叠；江豚可能向食物较少、流速更高的中槽移动。[Mei et al. 2021](https://doi.org/10.1016/j.biocon.2021.109132) 船撞尸检证据有限，文案应把“噪声、回避和生境挤压”置于确证层，把所有死亡笼统归于船撞会夸大证据。
3. **采砂、疏浚与岸线硬化**：改变洲滩、缓坡、支汊和鱼类栖息地，也能增加船只与江豚在剩余水道的重叠。
4. **江湖连通与极端低水位**：湖泊快速退水会切断通道、形成孤立浅水斑块并增加搁浅风险。鄱阳湖模型在干旱情景下识别出大面积高风险区，适合指导巡查，不代表每次低水位都产生同一死亡数。[Li et al. 2022](https://doi.org/10.3390/rs14102455)
5. **污染物**：长江江豚组织中检测到多种痕量元素；风险随元素、组织、年龄和地点变化，不能从检出直接推导统一死亡率。[Xiong et al. 2019](https://doi.org/10.1016/j.scitotenv.2019.06.031)
6. **分布碎片化与小群隔离**：干流局部空缺、湖江走廊受阻和小群隔离会降低迁移、配偶交换与灾害恢复能力。2017 调查虽显示总体下降放缓，仍把碎片化列为核心担忧。[Huang et al. 2020](https://doi.org/10.1016/j.biocon.2019.108315)

### 推荐保护行动

- 落实长江重点水域常年禁渔，持续打击电、毒、炸、滚钩和其他高风险非法作业，监测鱼类群落恢复而不只统计执法次数。
- 保护并恢复自然岸带、缓坡、洲滩、支汊、汇流区和江湖连接口；涉水工程评价必须覆盖季节水位与累积影响。
- 把上行船舶约束在指定航道，评估船速、流量、噪声和夜间活动的组合，避免用单一“禁船”口号替代分段管理。[Mei et al. 2021](https://doi.org/10.1016/j.biocon.2021.109132)
- 结合双船目视航线、固定和移动被动声学、环境 DNA、遗传及健康检查；每个数量卡同时记录调查年份、覆盖范围和不确定性。
- 在鄱阳湖、洞庭湖和低水位高风险区建立预警、巡查与应急救护网络，保留通往深水槽和干流的通道。
- 坚持就地保护为核心；半自然故道种群承担保险、技术试验和适度补充功能，不能替代原生干流与湖泊修复。
- 野化放归使用健康评估、渐进适应、行为与捕食能力检查、遗传匹配及放归后追踪，失败预案与成功指标在行动前确定。
- 维护人工繁育和遗传资源技术，同时限制近交、疾病和驯化风险；公开区分自然、迁地和人工繁育三类数量。
- 执行国家一级保护、CITES 附录 I 与 CMS 合作义务；公众观察保持距离，不追逐、触摸、投喂或擅自救援。

## 可录入的 metrics 与 featuredStats

### 数值字段

```ts
metrics: {
  adultLengthCm: [131, 168],
  adultMassKg: [33, 83],
}
```

两个区间是同行评审多年份研究中的成体样本包络，比较视图只能将其理解为审慎展示范围。以下字段留空：

- `estimatedMatureIndividuals`：1,426 是全龄自然种群估计；
- `lifespanYears`：没有适合全种排序的典型寿命区间；
- `topSpeedKph`：缺少标准化野外最高速度；
- `maxDiveDepthM`：河流与湖泊水深限制不等于生理最大潜深；
- `elevationM`：河流纵向高程不是该物种有意义的跨物种生态指标。

### 推荐四张数字卡

| 标签 | 值 | 限定语 | 来源 |
| --- | ---: | --- | --- |
| 2025 自然种群估算 | 1,426 头 | 专项调查全龄估计；不是成熟个体数，公开简报未给置信区间 | [国新办发布会信息](https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html) |
| 较 2022 年估算增加 | 177 头 | 两次调查的官方比较，不是逐头连续追踪 | [同上](https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html) |
| 长江样本背部脊宽 | 0.2—0.8 厘米 | n=39；是瘤粒脊，不是背鳍 | [Gao & Zhou 1995](https://www.mammal.cn/CN/Y1995/V15/I2/81)；[Jefferson 2002 review](https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf) |
| 妊娠期估计 | 约 12 个月 | 圈养个体孕酮与超声研究的小样本估计 | [Zeng et al. 2022](https://doi.org/10.3354/esr01179) |

## 六个故事角度

### 01 从海洋祖先到长江淡水种

基因组研究把长江个体分成独立遗传簇，并发现淡水适应选择信号。MDD 据此采用长江种与海生东亚种拆分；SMM 等待长江口接触区样本。故事重点是快速分化、淡水适应和分类证据边界。[Zhou et al. 2018](https://doi.org/10.1038/s41467-018-03722-x) [SMM 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

### 02 没有背鳍，靠一条瘤粒脊划过水面

长江江豚圆钝、无突出吻，也没有背鳍；狭窄瘤粒脊在滚动换气时短暂露出。自然上弯的嘴线带来“微笑天使”昵称，图文保持动物行为解释，不赋予固定人类情绪。[Gao & Zhou 1995](https://www.mammal.cn/CN/Y1995/V15/I2/81) [Jefferson 2002 review](https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf)

### 03 在浑水里用高频点击追鱼

声音承担导航和捕食的核心感知任务。港口研究记录到点击串与捕食嗡鸣随时段和鱼类变化；鄱阳湖食性研究则显示半洄游、定居鱼类在不同时间窗口中的贡献变化。[Wang et al. 2014](https://doi.org/10.1371/journal.pone.0097907) [Yang et al. 2021](https://doi.org/10.1111/fwb.13692)

### 04 水位重画湖泊，江豚跟着通道移动

鄱阳湖低、中水位时，江豚从主湖进入支流；高水位时回到主湖。保护区边界需要跟随水位、深槽和连接走廊调整，固定一块水面不足以覆盖全年核心生境。[Liu et al. 2022](https://english.ihb.cas.cn/sourcedb/thesisn/202409/t20240911_688325.html)

### 05 约一年妊娠，把恢复速度压在生命史上

圈养激素与超声资料把妊娠估为约 12 个月，分娩多在 5—7 月。母幼图像可展示长期投入；种群数量回升仍受繁殖速度和幼体存活制约，不能用一次调查增长推断快速脱险。[Zeng et al. 2022](https://doi.org/10.3354/esr01179)

### 06 从 1,012 到 1,426：回升有证据，风险仍在

官方估计从 2017 年 1,012 增至 2022 年 1,249，再到 2025 年 1,426。禁渔、栖息地行动、迁地保险种群和科学放归共同推进；调查误差、年龄结构、碎片化与旧 IUCN 评估仍要求谨慎解读。[农业农村部行动计划](https://cjyzbgs.moa.gov.cn/gzdt/202512/t20251231_6480313.htm) [2025 专项调查发布](https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html)

## 建议的完整 `Species` 对象

```ts
const YANGTZE_FINLESS_PORPOISE_SOURCE_DATE = '2026-08-25' as const;
const YANGTZE_FINLESS_PORPOISE_CONTENT_DATE = '2026-08-25' as const;

const YANGTZE_FINLESS_PORPOISE_SOURCES = [
  {
    title: 'Mammal Diversity Database v2.5 — Neophocaena asiaeorientalis',
    url: 'https://www.mammaldiversity.org/taxon/1006446/',
    kind: 'taxonomy',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Society for Marine Mammalogy 2026 — List of Marine Mammal Species and Subspecies',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2018 — Population genomics and freshwater adaptation of finless porpoises',
    url: 'https://doi.org/10.1038/s41467-018-03722-x',
    kind: 'taxonomy',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'IUCN — Yangtze Finless Porpoise assessment (boundary-matched legacy subspecies)',
    url: 'https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T43205774A45893487.en',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'IUCN — Narrow-ridged Finless Porpoise assessment (legacy broad species)',
    url: 'https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T41754A50381766.en',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Cetacean Specialist Group — Red List Status of Cetaceans',
    url: 'https://iucn-csg.org/red-list-status-of-cetaceans/',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '国家林草局、农业农村部 — 国家重点保护野生动物名录（2021 年第 3 号）',
    url: 'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '农业农村部 — 长江江豚拯救行动计划（2026—2035 年）发布实施',
    url: 'https://cjyzbgs.moa.gov.cn/gzdt/202512/t20251231_6480313.htm',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '农业农村部 2023 — 我国迁地保护长江江豚首次放归长江',
    url: 'https://cjyzbgs.moa.gov.cn/gzdt/202304/t20230426_6426280.htm',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '农业农村部 2018 — 长江江豚科学考察及珍稀物种拯救行动发布会',
    url: 'https://cjyzbgs.moa.gov.cn/ztzl/201904/t20190428_6220353.htm',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: '新华社 — 2025 年专项调查估算长江江豚 1,426 头',
    url: 'https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zhao et al. 2008 — Abundance and conservation status in the Yangtze River',
    url: 'https://doi.org/10.1016/j.biocon.2008.09.005',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mei et al. 2014 — The Yangtze finless porpoise: on an accelerating path to extinction?',
    url: 'https://doi.org/10.1016/j.biocon.2014.02.033',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Huang et al. 2020 — Population survey showing hope for recovery',
    url: 'https://doi.org/10.1016/j.biocon.2019.108315',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Liu et al. 2022 — Seasonal movements in Poyang Lake',
    url: 'https://doi.org/10.1016/j.scitotenv.2021.150782',
    kind: 'distribution',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mei et al. 2017 — Habitat preference in a minimally disturbed environment',
    url: 'https://doi.org/10.1016/j.ecolmodel.2016.12.020',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Duan et al. 2023 — Biosonar activity at the Yangtze–Poyang junction',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10559091/',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Yang et al. 2021 — Temporal variation in diet and semi-migratory fish',
    url: 'https://doi.org/10.1111/fwb.13692',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Wang et al. 2014 — Diel rhythms of biosonar behavior',
    url: 'https://doi.org/10.1371/journal.pone.0097907',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zhang et al. 1993 — Population in the middle and lower Yangtze reaches',
    url: 'https://www.mammal.cn/EN/Y1993/V13/I4/260',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mooney et al. 2014 — Hearing pathways in the Yangtze finless porpoise',
    url: 'https://doi.org/10.1242/jeb.091470',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Zeng et al. 2022 — Pregnancy diagnosis and fetal monitoring',
    url: 'https://doi.org/10.3354/esr01179',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Hao et al. 2019 — Non-invasive fecal steroid monitoring of reproductive status',
    url: 'https://doi.org/10.3389/fendo.2019.00606',
    kind: 'ecology',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Gao & Zhou 1995 — Geographic variation of external measurements and three finless porpoise subspecies',
    url: 'https://www.mammal.cn/CN/Y1995/V15/I2/81',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Jefferson 2002 — Preliminary analysis of geographic variation in finless porpoise cranial morphometrics',
    url: 'https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Nabi et al. 2018 — Biological state, habitat and physiological measurements',
    url: 'https://doi.org/10.1093/conphys/coy072',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Nabi et al. 2019 — Hematologic and biochemical reference intervals by age, sex, season and location',
    url: 'https://doi.org/10.3389/fphys.2019.00792',
    kind: 'general',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Mei et al. 2021 — Mitigating shipping effects on freshwater cetaceans',
    url: 'https://doi.org/10.1016/j.biocon.2021.109132',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Li et al. 2022 — Stranding risk under low-water scenarios in Poyang Lake',
    url: 'https://doi.org/10.3390/rs14102455',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Xiong et al. 2019 — Trace elements in Yangtze finless porpoise tissues',
    url: 'https://doi.org/10.1016/j.scitotenv.2019.06.031',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Qiu et al. 2025 — Rebuilding the critically endangered Yangtze finless porpoise population: successful release from an ex situ conservation programme',
    url: 'https://doi.org/10.1098/rsbl.2024.0719',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
  {
    title: 'Convention on Migratory Species — Neophocaena asiaeorientalis',
    url: 'https://www.cms.int/species/neophocaena-asiaeorientalis',
    kind: 'conservation',
    accessedAt: YANGTZE_FINLESS_PORPOISE_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-neophocaena-asiaeorientalis',
  slug: 'yangtze-finless-porpoise',
  names: {
    zh: '长江江豚',
    en: 'Yangtze Finless Porpoise',
    aliases: ['江豚', '江猪', '微笑天使', 'Yangtze River Finless Porpoise'],
  },
  scientificName: 'Neophocaena asiaeorientalis',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Cetacea', '鲸目'), // repository UI simplification; MDD places Cetacea within Artiodactyla
    taxon('Phocoenidae', '鼠海豚科'),
    taxon('Neophocaena', '江豚属'),
  ),
  // Boundary-matched IUCN Yangtze assessment; the 2017 broad-species EN record also included marine N. sunameri.
  conservation: conservation('CR', 'decreasing', 2012, 'A3b+4b'),
  distribution: {
    realms: ['freshwater'],
    continents: ['亚洲'],
    regions: ['长江中下游干流', '鄱阳湖', '洞庭湖', '少数通江支流、汊江与江湖连接水道'],
    countries: ['中国'],
    endemicTo: ['中国长江中下游水系'],
    range:
      '中国特有，现存自然种群分布于长江中下游干流、鄱阳湖、洞庭湖及少数保持水文连通的支流、汊江和江湖连接水道；不包含东亚沿海的 Neophocaena sunameri。',
    center: { lat: 30.1, lng: 115.7 },
  },
  habitats: [
    {
      name: '长江中下游自然岸带、洲滩与汇流区',
      realm: 'freshwater',
      description:
        '利用缓坡自然岸线、沙洲两侧、支汊和汇流形成的中等水深与较缓流速水域；鱼类丰富度和船舶干扰共同影响实际使用。',
      isPrimary: true,
    },
    {
      name: '鄱阳湖、洞庭湖与季节性湖槽',
      realm: 'freshwater',
      description:
        '湖泊水位涨落会重画深槽、浅滩和鱼群分布；江豚随水位在主湖体、支流和通道间季节移动。',
      isPrimary: true,
    },
    {
      name: '江湖连接口、通江支流与汊江走廊',
      realm: 'freshwater',
      description:
        '连接干流、湖泊和地方觅食区的狭窄水道维持移动与种群连通，对水深、岸线工程、船流和噪声变化敏感。',
    },
  ],
  measurements: {
    length: {
      min: 131,
      max: 168,
      unit: 'cm',
      note: '鄱阳湖与天鹅洲多年份研究的审慎成体样本包络；131 厘米是雌性成体分组阈值，168 厘米是该样本实测上端，不是全种绝对极值。',
    },
    weight: {
      min: 33,
      max: 83,
      unit: 'kg',
      note: '同一研究体系的成体实测值取整包络；性别、妊娠、体况、样地和年份都会影响体重。',
    },
  },
  diet: {
    types: ['carnivore', 'piscivore'],
    foods: ['半洄游淡水鱼', '定居性淡水鱼', '湖泊与干流小型鱼类'],
    description:
      '作为长江中下游水域的广食性鱼食顶级捕食者，随季节、水位和鱼群可用性改变半洄游与定居鱼类的相对摄食比例，并借助高频回声定位在浑浊水体中追踪猎物。',
  },
  activity: [
    '短暂滚动出水换气，因无背鳍而难以目视追踪',
    '频繁使用高频点击导航、搜寻鱼群并完成捕食接近',
    '可独游或组成随觅食和母幼关系变化的小群',
    '昼夜均会活动，部分地点傍晚与夜间觅食声学活动更强',
    '随湖泊水位在主湖体、支流和连接水道间季节移动',
    '趋向鱼类较丰富、流速较缓的岸带、洲滩和汇流水域',
  ],
  tags: [
    '中国特有',
    '长江中下游',
    'IUCN 极危（2012 亚种评估）',
    '国家一级重点保护野生动物',
    'CITES 附录 I',
    'CMS 附录 II（旧广义种口径）',
    '淡水齿鲸',
    '无背鳍',
    '回声定位',
  ],
  summary: '没有背鳍的长江特有淡水鼠海豚，以高频回声定位在干流—湖泊网络追逐鱼群；专项调查显示数量回升，同域 IUCN 评估仍为极危。',
  description:
    '长江江豚是中国长江中下游特有的淡水鼠海豚。MDD v2.5 将它与海生东亚江豚拆为两个物种，SMM 仍保留亚种处理，因此历史资料必须先核对分类边界。它以圆钝头部、几乎不存在的吻突、无背鳍和狭窄瘤粒脊区别于宽吻海豚，依靠高频回声定位在浑浊干流、湖泊和连接水道中追逐鱼群。2025 年专项调查估算自然种群 1,426 头，比 2022 年增加 177 头；该数字是全龄调查估计，不能替代成熟个体数或自动改变 2012 年同域 IUCN CR、decreasing 评估。禁渔、岸线与江湖廊道修复、航运管理、声学监测、半自然故道保险种群和科学放归需要长期并行。',
  storySections: [
    {
      key: 'freshwater-species-boundary',
      label: '种界与适应',
      title: '从海洋祖先进入长江，淡水种界仍在检验',
      body: '群体基因组把长江个体分成清楚的遗传簇，并发现渗透调节与肾功能相关的淡水适应信号。MDD v2.5 因此把长江江豚与海生东亚江豚拆开；SMM 等待长江口潜在接触区的补充取样。本页采用 MDD 口径，同时保留这项分歧。',
    },
    {
      key: 'finless-dorsal-ridge',
      label: '外形识别',
      title: '没有背鳍，一条瘤粒脊短暂划过水面',
      body: '长江江豚的额部圆钝、吻突几乎不突出，背中线只有狭窄低矮的瘤粒脊。长江样本脊宽仅 0.2—0.8 厘米，滚动换气后很快消失在浑水中。嘴线自然上弯带来“微笑天使”昵称，却不能当成人类式情绪证据。',
    },
    {
      key: 'sound-guided-fishing',
      label: '声音与觅食',
      title: '在看不远的水里，用高频点击追随鱼群',
      body: '浑浊长江压缩视觉距离，高频回声定位承担导航、目标探测和捕食接近。鄱阳湖食性资料显示它在半洄游与定居鱼类之间灵活取食；港口声学记录中的点击串和捕食嗡鸣则随时段与鱼类可用性变化。声呐发生在听觉世界里，不会发出可见蓝光。',
    },
    {
      key: 'water-level-corridors',
      label: '水文生境',
      title: '湖面每年重画，核心生境跟着水位移动',
      body: '鄱阳湖低、中水位时，江豚从主湖体进入支流；高水位时返回主湖。水深、鱼类和人类活动共同移动，固定保护边界很容易错过季节核心区。深槽、支汊和江湖连接口要作为一个动态网络管理。',
    },
    {
      key: 'year-long-pregnancy',
      label: '繁殖与母幼',
      title: '约一年妊娠，让每一次母幼同行都很重要',
      body: '圈养激素和超声研究把妊娠估为约 12 个月，分娩多集中在 5—7 月。较慢的繁殖节律意味着种群回升依赖成年雌性、幼体和育幼水域长期存活；一张母幼图只能重建代表场景，不能证明个体亲缘或行为细节。',
    },
    {
      key: 'recovery-with-caveats',
      label: '保护进展',
      title: '从 1,012 到 1,426，回升值得记录，极危风险仍需核算',
      body: '官方估计从 2017 年 1,012 头增至 2022 年 1,249 头，2025 年专项调查又报 1,426 头。禁渔和系统保护取得可见进展；公开简报仍缺分区置信区间，年龄结构、干流碎片化、极端低水位和航运压力也没有消失。结构化状态继续使用与当前种界同域的 IUCN CR 评估。',
    },
  ],
  keyFacts: [
    'MDD v2.5 把 Neophocaena asiaeorientalis 限定为中国长江中下游淡水种，并把海生东亚江豚处理为 N. sunameri。',
    'SMM 2026 仍将长江和东亚沿海单元列为广义 N. asiaeorientalis 的两个亚种，理由包括长江口潜在接触区取样不足。',
    '结构化 IUCN 字段采用与当前种界同域的旧亚种评估：CR、decreasing、2012、A3b+4b；2017 广义种 EN 评估还包含海生单元。',
    '2025 年专项调查估算自然种群 1,426 头，比 2022 年增加 177 头；这是全龄估计，不能填作成熟个体数。',
    '长江江豚是国家一级重点保护野生动物，同时列 CITES 附录 I；CMS 附录 II 条目沿用旧广义种口径。',
    '它没有背鳍，长江样本的背部瘤粒脊宽仅 0.2—0.8 厘米；瓶鼻、镰形背鳍或竖直鱼尾都属于图像错误。',
    '审慎的实测成体样本包络为身长 131—168 厘米、体重约 33—83 千克；数值不表示全种绝对极值。',
    '鄱阳湖江豚随水位在主湖体、支流和连接水道之间季节移动，适宜水深会随水文期改变。',
    '它主要捕食半洄游和定居淡水鱼，结合被动听觉与高频回声定位在浑水中追踪猎物。',
    '圈养内分泌和超声资料估计妊娠约 12 个月；慢生命史要求长期保护成年雌性、幼体和育幼生境。',
    '本仓库把 Cetacea 简化显示为“鲸目”；完整分类把鲸类置于偶蹄目 Artiodactyla 内。',
  ],
  threats: [
    '刺网、滚钩、电捕鱼及其他合法或非法渔具造成兼捕、缠绕、创伤和直接死亡',
    '历史过度捕捞与鱼类群落退化减少半洄游和定居鱼类猎物',
    '密集航运、水下噪声和近岸航线重叠引发回避、通讯干扰与优选生境挤压',
    '非法采砂、疏浚、港口工程和岸线硬化破坏洲滩、缓坡、支汊与鱼类栖息地',
    '水文改变、江湖连通下降和极端低水位增加廊道中断、浅水围困与搁浅风险',
    '工业、农业和城市污染物在食物网与组织中累积，形成长期健康压力',
    '干流分布空缺和小群隔离削弱迁移、配偶交换及局地灾害后的恢复能力',
  ],
  conservationActions: [
    '落实长江重点水域常年禁渔，持续打击电、毒、炸、滚钩和其他高风险非法作业',
    '保护并修复自然岸带、洲滩、支汊、汇流区与江湖连接口，按季节水位管理核心生境',
    '约束船舶使用指定航道，分江段评估船速、流量、夜间活动和累积水下噪声',
    '结合双船目视航线、被动声学、环境 DNA、遗传与健康监测，并公开调查不确定性',
    '在鄱阳湖、洞庭湖和极端低水位高风险区建立预警、巡查、救护与深水通道维护机制',
    '坚持就地保护为核心，以半自然故道保险种群和人工繁育作为辅助而非栖息地替代',
    '按健康、行为、遗传和捕食能力开展渐进野化放归，实施放归后追踪和失败预案',
    '控制工程与污染累积影响，维持鱼类资源和完整食物网，定期复核种群分区与连通性',
    '执行国家一级保护、CITES 与 CMS 管理要求，倡导不追逐、不触摸、不投喂的公众观察',
  ],
  metrics: {
    adultLengthCm: [131, 168],
    adultMassKg: [33, 83],
  },
  featuredStats: [
    {
      key: 'wild-population-2025',
      label: '2025 自然种群估算',
      value: '1,426',
      unit: '头',
      note: '专项调查全龄估计；不是成熟个体数，公开简报未给置信区间',
    },
    {
      key: 'increase-since-2022',
      label: '较 2022 年估算增加',
      value: '177',
      unit: '头',
      note: '两次专项调查的官方比较，不是逐头连续追踪',
    },
    {
      key: 'dorsal-ridge-width',
      label: '长江样本背部脊宽',
      value: '0.2—0.8',
      unit: '厘米',
      note: 'n=39；是瘤粒脊，不是背鳍',
    },
    {
      key: 'gestation',
      label: '妊娠期估计',
      value: '约 12',
      unit: '个月',
      note: '圈养个体孕酮与超声研究的小样本估计',
    },
  ],
  media: {
    image: './images/species/yangtze-finless-porpoise/01-yangtze-channel-portrait.webp',
    alt: '浑浊长江淡水中，一只完整灰色长江江豚从右向左游过，圆钝无喙头部、无背鳍背线、胸鳍和水平尾叶可见',
    focalPoint: { x: 0.72, y: 0.54 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/yangtze-finless-porpoise/02-rounded-head-and-dorsal-ridge.webp',
        alt: '斜俯水下视角中，一只完整长江江豚的圆钝头部、一枚近侧胸鳍、狭窄瘤粒脊和水平尾叶清楚可见，背部没有背鳍',
        title: '无背鳍的一条狭脊',
        caption: '长江样本的瘤粒脊宽仅 0.2—0.8 厘米；近景用低矮不规则纹理表现，不能画成小背鳍或锯齿。',
        focalPoint: { x: 0.53, y: 0.52 },
      },
      {
        image: './images/species/yangtze-finless-porpoise/03-connected-river-lake-habitat.webp',
        alt: '相连的长江式干流与湖泊水道、天然沙洲和湿地岸带占据大部画面，一只小比例长江江豚在深水通道内换气',
        title: '水位重画的江湖通道',
        caption: '江豚随水位在主湖、支流和连接水道间移动；画面重建通用连通水域，不声称是精确地点或调查记录。',
        focalPoint: { x: 0.69, y: 0.6 },
      },
      {
        image: './images/species/yangtze-finless-porpoise/04-surface-breath.webp',
        alt: '平静绿褐色淡水中，恰好一只长江江豚完成短暂滚动换气，圆钝前额、单个头顶呼吸孔和无背鳍背弧露出水面',
        title: '一次低而快的水面换气',
        caption: '江豚只短暂露出头部和一段背弧；稀薄呼气雾不能用来推算换气间隔、潜水时长或健康状态。',
        focalPoint: { x: 0.54, y: 0.51 },
      },
      {
        image: './images/species/yangtze-finless-porpoise/05-mother-and-calf-travel.webp',
        alt: '斜俯浑浊淡水中，一大一小两只长江江豚同向游动并保持清楚水隙，两套无背鳍背线与水平双叶尾鳍完整分离',
        title: '成体与幼体同行',
        caption: '约一年妊娠使每次育幼投入都很重要；重建画面不据外观确认成体性别、亲缘、幼体年龄或哺乳行为。',
        focalPoint: { x: 0.52, y: 0.54 },
      },
      {
        image: './images/species/yangtze-finless-porpoise/06-passive-acoustic-monitoring.webp',
        alt: '两名穿救生衣的研究人员在一艘小型科考船上操作采集设备，并用单根缆线把一个水听器垂直下放至河水中',
        title: '在低能见度里持续聆听',
        caption: '被动声学能记录点击活动；一次设备部署不能单独证明江豚的出现、缺席、身份或未经模型校正的个体数量。',
        focalPoint: { x: 0.48, y: 0.63 },
      },
    ],
  },
  sources: YANGTZE_FINLESS_PORPOISE_SOURCES,
  featured: true,
  publishedAt: YANGTZE_FINLESS_PORPOISE_CONTENT_DATE,
  updatedAt: YANGTZE_FINLESS_PORPOISE_CONTENT_DATE,
}
```

## 最终六图资产方案与生成记录

研究阶段的备选场景经过视觉迭代后收敛为以下实现。最终接受的完整提示词、替换记录、源文件到运行时文件的映射，统一保存在[源资产说明](../../src/assets/source/species/yangtze-finless-porpoise/README.md)，避免研究稿与资产流水线重复维护。

| # | 运行时文件 | 场景与证据边界 |
| --- | --- | --- |
| 01 | `01-yangtze-channel-portrait.webp` | 封面：一只完整成体从斜俯水下视角游过，左侧保留文案空间；圆钝头、无背鳍背线、单侧胸鳍与水平尾叶可辨。 |
| 02 | `02-rounded-head-and-dorsal-ridge.webp` | 形态：一只完整成体的圆钝头、贴背狭窄瘤粒脊和水平尾叶；不把狭脊画成背鳍。 |
| 03 | `03-connected-river-lake-habitat.webp` | 生境：连通干流、湖槽、沙洲和湿地岸带占主体，深水通道内恰好一只小比例江豚；不冒充精确地点。 |
| 04 | `04-surface-breath.webp` | 换气：平静淡水中恰好一只江豚短暂滚动换气；呼气雾轻薄，不推算换气间隔或健康状态。 |
| 05 | `05-mother-and-calf-travel.webp` | 母幼：一大一小两只完整江豚同向水下游动并保持水隙；不据外观确认性别、亲缘、年龄或哺乳。 |
| 06 | `06-passive-acoustic-monitoring.webp` | 监测：两名穿救生衣的研究人员、一艘小船、一个水听器和采集设备；画面没有江豚，也不把一次部署当作出现或丰度证据。 |

## 全套静态图像 QA

1. 每只动物都没有三角形、镰形或低矮突出背鳍；狭脊只是贴背的瘤粒带。
2. 额部圆钝，吻突几乎不存在；出现瓶鼻、长喙或白鱀豚式细长吻即淘汰。
3. 头顶只出现一个呼吸孔；没有鳃裂、鳞片、双喷气孔或须鲸板。
4. 胸鳍左右合理，尾叶水平且有中央缺刻；不得画成鱼类竖直尾鳍或四片尾叶。
5. 体色在铅灰至中灰范围，腹侧可渐浅；禁止虎鲸黑白块、粉红河豚或海豚腹斑。
6. 嘴线自然且闭合，不露牙，不加人类嘴唇、酒窝、眉毛或夸张笑容。
7. 水体是浑浊淡水；不得出现珊瑚礁、热带蓝海、海浪地平线或海洋鱼群。
8. 声呐不以光束、发光圆环、文字标注或科幻 HUD 呈现。
9. 场景 01、02、03、04 各恰好一只；场景 05 恰好一大一小；场景 06 不出现动物。
10. 母幼图不出现骑背、牵鳍、人类式拥抱或外露哺乳器官；研究图不接触、捕捉或投喂动物。
11. 研究设备尺寸、线缆入水和人物姿势符合小船作业；研究人员必须穿救生衣。
12. 每张图保持纪录片语气，不给虚构个体、地点、调查日期或保护成效加可验证标签。

## 不可写入的常见误区

- “长江江豚和韩国、日本沿海江豚属于同一个当前物种”：不符合本文采用的 MDD v2.5 口径；SMM 的两亚种方案要作为分歧另述。
- “所有分类委员会都已经接受 _N. sunameri_ 拆分”：错误。SMM 仍认为长江口接触区取样不足。
- “IUCN 当前物种评估是 CR 2013”：字段采用的是 2012 年完成、2013 批次发布的同域旧亚种评估；必须说明阶元与年份。
- “MDD 显示 EN，所以长江江豚只能写 EN”：MDD 关联的是覆盖海生单元的 2017 广义种评估，边界不匹配当前 MDD 长江种。
- “2025 年有精确 1,426 只成年江豚”：1,426 是专项调查的全龄自然种群估计，不是精确逐头或成熟个体数。
- “2025 数量上升，因此 IUCN 趋势已经改为 increasing”：没有新的 IUCN 重评，结构化趋势继续记录 2012 评估的 decreasing。
- “国家一级等于 IUCN 一级/CR”：国内法律保护等级和全球灭绝风险评估是两套制度。
- “CMS 附录 II 证明它跨国洄游”：CMS 条目沿用旧广义种；当前长江种为中国特有淡水种。
- “CITES 附录 I 禁止所有研究、救护和移动”：附录约束国际贸易，依法许可的非商业活动另有程序。
- “背上的瘤粒脊是一枚退化背鳍”：错误。图像必须保持无背鳍。
- “微笑说明江豚很开心、亲人或欢迎触摸”：嘴线形态不测量情绪，也不支持接近、投喂或追逐。
- “长江江豚严格夜行”：一个港口样地的傍晚和夜间声学活动较强，不能覆盖所有地点和季节。
- “江豚始终生活在 7—12 米深水”：该范围来自特定故道；鄱阳湖适宜水深随水位期约从 4—8 米变到 7—20 米。
- “平均 1.30 米、39.1 千克就是成体标准”：相关汇总混合生命阶段；本档案改用标明样本边界的成体实测包络。
- “半自然故道就是水族馆圈养”或“迁地种群可以替代长江生境”：故道是保险和技术平台，就地保护仍是行动计划核心。
- “一次三只同游就是永久家庭”：群体随觅食、水位和母幼关系变化，图片不能证明永久社会结构。

## 来源清单与使用边界

| 来源 | 主要用途 | 使用边界 |
| --- | --- | --- |
| [MDD v2.5 taxon 1006446](https://www.mammaldiversity.org/taxon/1006446/) | 接受名、作者、三种拆分、完整高阶分类、中国和长江中下游范围 | 页面显示的 EN 链接来自旧广义 IUCN 记录，不能据学名字符串判断评估同域 |
| [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) | 两亚种替代分类、长江口取样缺口、Artiodactyla—Cetacea 层级 | 与 MDD 有版本分歧；不能混成“已达共识” |
| [Zhou et al. 2018](https://doi.org/10.1038/s41467-018-03722-x) | 48 只样本群体基因组、长江遗传簇、淡水适应和拆种提案 | 缺少长江口潜在接触区样本；适应候选基因不等于每项生理机制已经实验确认 |
| [IUCN Yangtze assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T43205774A45893487.en) | CR、decreasing、2012、A3b+4b | 评估阶元是旧亚种；本页采用它是因为范围与 MDD 当前长江种吻合 |
| [IUCN broad-species assessment](https://doi.org/10.2305/IUCN.UK.2017-3.RLTS.T41754A50381766.en) | EN、decreasing、2017、A2bcde+3bcde+4bcde | 同时覆盖长江和东亚沿海窄脊种群，不进入本页结构化主状态 |
| [IUCN CSG status table](https://iucn-csg.org/red-list-status-of-cetaceans/) | 当前专家组仍列 Yangtze Finless Porpoise 为 CR 亚种 | 汇总表不能替代完整评估文本 |
| [国家重点保护野生动物名录公告](https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html) | 国家一级法律地位 | 国内法律等级不等于 IUCN |
| [农业农村部 2026—2035 行动计划](https://cjyzbgs.moa.gov.cn/gzdt/202512/t20251231_6480313.htm) | 当前范围、2017/2022 数量、就地为主与十项行动 | 2025-12-31 页面只给 2025 调查初步恢复结论，1,426 后由国新办公布 |
| [农业农村部 2023 放归通报](https://cjyzbgs.moa.gov.cn/gzdt/202304/t20230426_6426280.htm) | 2022 年估计 1,249、4 头迁地种群个体分批放归及后续跟踪安排 | 官方通报不是种群估算方法论文；4 头放归不能外推为普遍成功率 |
| [农业农村部 2018 发布会](https://cjyzbgs.moa.gov.cn/ztzl/201904/t20190428_6220353.htm) | 2017 全流域科考、自然岸带与洲滩分布、污染、工程、航运、捕捞和采砂压力 | 发布会汇总不能替代各机制的同行评审因果研究 |
| [新华社 2026-01-30](https://www.xinhuanet.com/politics/20260130/597b750309264e9186ac584acd6de664/c.html) | 农业农村部发布的 2025 估计 1,426、较 2022 增 177 | 公开稿未附完整调查方法、分区数和置信区间 |
| [Zhao et al. 2008](https://doi.org/10.1016/j.biocon.2008.09.005) | 2006 干流丰度与调查基线 | 不是当前数量，方法和探测条件需与后续调查对齐 |
| [Mei et al. 2014](https://doi.org/10.1016/j.biocon.2014.02.033) | 2012 干流 505、两湖估计和加速下降 | 历史节点，不覆盖禁渔后的回升 |
| [Huang et al. 2020](https://doi.org/10.1016/j.biocon.2019.108315) | 2017 总量、分区、置信区间与碎片化 | “decline slowed”不等于当时已确认全域增长 |
| [Liu et al. 2022](https://doi.org/10.1016/j.scitotenv.2021.150782) | 鄱阳湖十次调查、季节移动、水深和动态保护 | 水深范围属于鄱阳湖特定水文期，不外推全流域 |
| [Mei et al. 2017](https://doi.org/10.1016/j.ecolmodel.2016.12.020) | 低干扰故道的水深、坡度和鱼密度组合 | 单一保护故道模型，不是物种全域阈值 |
| [Duan et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10559091/) | 2020—2022 年长江—鄱阳湖连接口被动声学记录及船流相关性 | 声学检出不等于个体计数；单一连接口不能代表全流域活动模式 |
| [Yang et al. 2021](https://doi.org/10.1111/fwb.13692) | 鄱阳湖稳定同位素与粪便 DNA、半洄游/定居鱼 | 地点和时间样本有限，不给全流域固定鱼种清单 |
| [Wang et al. 2014](https://doi.org/10.1371/journal.pone.0097907) | 港口点击串、捕食嗡鸣、单只遭遇和昼夜差异 | 一个港口、一个时段；不能定义全种夜行性或固定群型 |
| [Zhang et al. 1993](https://www.mammal.cn/EN/Y1993/V13/I4/260) | 历史调查中 1—5 只群体约占 88% | 采用旧分类与历史调查条件；不支持当前永久群体结构或历史丰度外推 |
| [Mooney et al. 2014](https://doi.org/10.1242/jeb.091470) | 两只成年个体的听觉接收方向 | 小样本圈养研究，不生成全种统一听阈指标 |
| [Zeng et al. 2022](https://doi.org/10.3354/esr01179) | 孕酮、超声、约 12 个月妊娠与分娩季节 | 圈养小样本，不能作为野外每只个体精确预产公式 |
| [Hao et al. 2019](https://doi.org/10.3389/fendo.2019.00606) | 三只圈养个体的非侵入粪便类固醇纵向监测 | 小样本方法研究，不能外推野外个体的统一激素阈值或预产算法 |
| [Gao & Zhou 1995](https://www.mammal.cn/CN/Y1995/V15/I2/81) | 长江样本背部脊宽 0.2—0.8 厘米及江豚外部形态地理变异 | n=39 的长江样本，不把样本范围外推成所有个体的绝对范围 |
| [Jefferson 2002](https://lkcnhm.nus.edu.sg/wp-content/uploads/sites/10/2020/12/s10rbz003-014.pdf) | 江豚颅骨形态地理变异及对 Gao & Zhou 外部形态结果的综述 | 综述和颅骨形态分析不能替代直接软组织测量 |
| [Nabi et al. 2018](https://doi.org/10.1093/conphys/coy072) | 鄱阳湖与天鹅洲多年份体长、体重和生命阶段样本 | 结构化体型是研究样本包络，不是绝对物种极值 |
| [Nabi et al. 2019](https://doi.org/10.3389/fphys.2019.00792) | 按年龄、性别、季节和地点建立血液学与生化参考区间时采用的生命阶段分组 | 体长阈值用于研究分组，不等于野外法定成熟标准 |
| [Mei et al. 2021](https://doi.org/10.1016/j.biocon.2021.109132) | 船舶—近岸生境重叠、回避与航道管理 | 船撞尸检证据有限；重点是分布和生境挤压机制 |
| [Li et al. 2022](https://doi.org/10.3390/rs14102455) | 鄱阳湖低水位围困与搁浅风险模型 | 情景模型不提供每次干旱的实际死亡率 |
| [Xiong et al. 2019](https://doi.org/10.1016/j.scitotenv.2019.06.031) | 长江江豚组织痕量元素 | 检出与富集不等于统一死亡因果或全域暴露水平 |
| [Qiu et al. 2025](https://doi.org/10.1098/rsbl.2024.0719) | 分阶段适应、释放与放归后监测 | 两只雄性案例，不证明所有迁地个体都适合放归 |
| [CITES 2026 附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | _N. asiaeorientalis_ 附录 I | 国际贸易制度，不是 IUCN 风险等级 |
| [CMS species page](https://www.cms.int/species/neophocaena-asiaeorientalis) | 广义种附录 II，自 1979 年 | 分类口径陈旧；不用于长江种跨国迁徙推断 |

## 完成清单

- [x] 采用 MDD v2.5 当前长江种界，并记录 SMM 两亚种替代方案与取样缺口。
- [x] 固定同域 IUCN 字段为 `CR / decreasing / 2012 / A3b+4b`，单列 2017 广义种 EN 记录。
- [x] 核验国家一级、CITES 附录 I 和 CMS 附录 II，区分三套制度。
- [x] 纳入 2025 官方估计 1,426 和较 2022 增 177，明确全龄、调查估计与未公开置信区间。
- [x] 用同行评审多年份样本建立带注释的体长、体重包络，不填成熟个体数、寿命、速度或潜深。
- [x] 覆盖自然范围、生境、食性、声学、活动、繁殖、威胁、保护行动与六个故事段落。
- [x] 给出匹配 `src/types/species.ts` 的完整对象、来源常量、1 张封面与 5 张详情媒体字段。
- [x] 在源资产说明中记录最终六图提示词、迭代结果、逐图验收和全套形态 QA。
- [x] 将对象并入 `src/data/species.ts`，确认 `id`、`slug`、媒体路径和故事 `key` 唯一。
- [x] 生成并静态检查 6 张 WebP，按提示词数量、形态、水体和人物安全逐项验收。
- [x] 运行测试、类型检查和构建；不得用浏览器或界面截图替代静态资产检查。
