# 西印度洋矛尾鱼（*Latimeria chalumnae*）完整档案研究

- 检索与核验日期：2026-08-25
- 推荐展示中文名：**西印度洋矛尾鱼**
- 推荐英文主名：**West Indian Ocean Coelacanth**
- 当前有效学名：***Latimeria chalumnae* Smith, 1939**；作者名不加括号
- 宽泛俗名：**腔棘鱼**。该词也可指腔棘鱼目或整个现生、化石类群，不能单独用来区分两个现生种
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面和 5 张详情图规定可核验的物种、生态与保护边界
- 证据标准：有效名与作者优先采用 Eschmeyer’s Catalog of Fishes、WoRMS 和 ITIS；全球灭绝风险采用 IUCN 当前条目；国际贸易制度采用 CITES 现行附录；分类、生态和生活史采用官方科研机构资料及同行评议原始研究
- 时间口径：本文所称“当前”截至 **2026-08-25**。IUCN 的评估年、CITES 附录生效日、NOAA 五年审查发布日和网页更新日分别记录
- 种界边界：本文只描述西印度洋种 *L. chalumnae*，不把印度尼西亚矛尾鱼 *L. menadoensis* 的地点、颜色、体尺、保护等级或图像混入主记录
- 地图边界：`center` 只用于打开西印度洋宽域视图，不代表洞穴、聚集点、繁殖地点或保护区精确坐标

## 结论摘要

### 主名应精确到西印度洋种

Eschmeyer’s Catalog of Fishes 在线版更新于 2026 年 8 月 13 日，明确给出 `Current status: Valid as Latimeria chalumnae Smith 1939`，科为 Latimeriidae。原始描述发表于 1939 年，模式产地为南非东伦敦西南、约 40 英寻水深，正模为 ELM 47。作者和年份没有因改属而改变，因此写作 ***Latimeria chalumnae* Smith, 1939**，不加括号。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=23925)

ITIS 把 `West Indian Ocean coelacanth` 列为该有效种的英文普通名；NOAA 使用 `African Coelacanth`。中国科学院古脊椎动物与古人类研究所使用“非洲拉蒂迈鱼”，中国政府水生野生动物名录采用“矛尾鱼科 Latimeriidae”和“矛尾鱼属所有种 Latimeria spp.”。仓库推荐把范围和属名合并成“西印度洋矛尾鱼”，英文对应 `West Indian Ocean Coelacanth`；“非洲拉蒂迈鱼”和 `African Coelacanth` 放入别名。[ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=649768) [中国科学院古脊椎动物与古人类研究所](https://ivpp.cas.cn/xwdt/kyjz/201811/t20181103_5155252.html) [中国政府物种名称文件](https://www.gov.cn/gbgl/b470a262dca84ffe82c8801a395b3f47/files/af474214d05542f3bf33edbdd5a7703c.pdf)

“腔棘鱼”适合作为搜索别名，不适合作为唯一主名。腔棘鱼目现存两个有效种，另一个是分布于印度尼西亚的 ***Latimeria menadoensis***。WoRMS 同时接受这两个种；Pouyaud 等 1999 年以遗传和形态证据描述印度尼西亚种。两者不能用一张来源不明的蓝色或褐色水下照片互相替代。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxlist&tName=Latimeria) [Pouyaud et al. 1999](https://doi.org/10.1016/S0764-4469(99)80061-4)

### 分类路径固定为肉鳍鱼纲

推荐分类链为：

```text
Animalia > Chordata > Sarcopterygii > Coelacanthiformes > Latimeriidae > Latimeria > Latimeria chalumnae
动物界 > 脊索动物门 > 肉鳍鱼纲 > 腔棘鱼目 > 矛尾鱼科 > 矛尾鱼属 > 西印度洋矛尾鱼
```

NOAA 当前物种页逐阶列出 Animalia、Chordata、Sarcopterygii、Coelacanthiformes、Latimeriidae、Latimeria 和 chalumnae。它是肉鳍鱼，不是辐鳍鱼、软骨鱼，也不是四足动物的现生祖先。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/african-coelacanth)

Amemiya 等的基因组研究支持肺鱼是四足动物最近的现生亲缘支系。现生矛尾鱼与肺鱼、四足动物共享更深层的肉鳍鱼祖先，不能称为鱼到陆生脊椎动物之间的“缺失环节”。[Amemiya et al. 2013](https://doi.org/10.1038/nature12027)

### IUCN 当前值很旧，不能当作当前数量调查

IUCN 当前引用仍是 Musick 2000 的 *Latimeria chalumnae* 条目 `e.T11375A3274618`。当前数据库字段为：

```ts
conservation: conservation('CR', 'unknown', 2000, 'A2bcd')
```

- 等级：Critically Endangered，CR，极危
- 种群趋势：Unknown，未知
- 评估日期：2000-06-30；`assessedYear` 写 2000
- 当前网页结构化准则：A2bcd

IUCN 条目正文在本次检索环境返回访问限制，DOI 和条目号可解析，结构化值由 FishBase 当前 IUCN 字段交叉核对。FishBase 标示其所用全球字段版本为 2025-2，并给出 `CR (A2bcd); Date assessed: 30 June 2000`。[IUCN current DOI](https://doi.org/10.2305/IUCN.UK.2000.RLTS.T11375A3274618.en) [FishBase current IUCN field](https://www.fishbase.se/summary/Latimeria-chalumnae.html)

IUCN 2000 年印刷名录的旧表曾写 `A2cd, C2b`。这与当前网页结构化字段不一致。本轮不把两套代码拼成 `A2bcd+C2b`，也不自行重做评估；产品采用当前网页字段 `A2bcd`，并把差异列入后续复核清单。更重要的是，这项全球评估距今已超过 25 年。CR 仍是当前正式等级，但它不证明 2026 年全球只剩某个固定数量，也不能覆盖此后发现的坦桑尼亚、南非和马达加斯加资料。

### IUCN、CITES 与美国 ESA 是三套不同制度

1. **IUCN：CR**。它是全球灭绝风险评估，不是捕捞或贸易许可证。
2. **CITES：附录 I**。2026 年 3 月 5 日生效的现行附录以 ***Latimeria spp.*** 列入附录 I，覆盖 *L. chalumnae* 和 *L. menadoensis*。附录 I 通常禁止以商业目的进行国际贸易，但科研、执法或其他非商业移动仍受严格许可程序约束，不能简写成“任何跨境移动绝对违法”。[CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
3. **美国 ESA：仅坦桑尼亚 DPS 为 Threatened**。NOAA 于 2016 年把坦桑尼亚独特种群段列为受威胁；2025 年五年审查认为暂不改变该法律地位。这不是全物种的 IUCN 等级，也不把其他国家种群自动纳入美国 DPS。[NOAA species profile](https://www.fisheries.noaa.gov/species/african-coelacanth) [NOAA 2025 five-year review](https://www.fisheries.noaa.gov/resource/document/tanzanian-distinct-population-segment-dps-african-coelacanth-5-year-review-2025)

## 现存分布与科学记录史

### 六个国家有记录，稳定种群证据并不等量

可靠记录覆盖科摩罗、肯尼亚、马达加斯加、莫桑比克、南非和坦桑尼亚。Catalog 概括的范围是南非东开普和夸祖鲁-纳塔尔、莫桑比克、坦桑尼亚、科摩罗和马达加斯加；Cooke 等的区域清单补入肯尼亚记录。[Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=23925) [Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541)

国家字段可列六国，但 `range` 必须保留证据差别：

- 科摩罗、南非和坦桑尼亚已有水下观察、照片识别或遗传研究支持的驻留群体。
- 马达加斯加有跨近 1,000 千米海岸的捕获记录和怀孕雌鱼，Cooke 等据此支持存在区域性繁殖种群；其环岛范围仍有大量未调查海岸。
- 莫桑比克和肯尼亚的重要记录包括怀孕雌鱼，却主要来自单次或少量拖网捕获，不能据此给出当前稳定种群数量。
- 没有可靠的全球成熟个体总数，也没有覆盖六国的统一趋势序列。

Lampert 等分析覆盖已知范围的 71 尾成体，发现总体遗传多样性低，并支持南非、坦桑尼亚和科摩罗内部存在分化结构。该结果反驳“所有非科摩罗个体都是偶然漂来的鱼”，但样本仍不足以画出每个种群的封闭边界。[Lampert et al. 2012](https://doi.org/10.1016/j.cub.2012.04.053)

### 1938 年是科学描述起点，不是当地知识起点

- **1938 年，南非东伦敦附近**：模式标本被拖网捕获，随后由 J. L. B. Smith 描述为新种。
- **1952 年，科摩罗昂儒昂岛**：当地渔民捕获的个体使科学界确认科摩罗有现生来源；科摩罗渔民早已认识这种鱼并称其为 `gombessa`。
- **1987 年起，马达加斯加**：后续清单把已知最早记录前推到 1987 年，1990 年代后深置鲨鱼刺网带来更多捕获记录。
- **1991 年，莫桑比克**：一尾怀孕雌鱼被拖网捕获，体内有 26 尾晚期胚胎。
- **2000 年，南非索德瓦纳湾**：水下观察确认可重复识别的个体和驻留群体。
- **2001 年，肯尼亚**：一尾怀卵雌鱼被拖网捕获。
- **2003 年以后，坦桑尼亚**：坦噶和桑给巴尔附近兼捕与 ROV 观察支持当地独立种群。

这些日期是“进入科学记录或得到确认”的时间，不是物种首次抵达当地的时间。地图不应把 1938 年以前的海域画成物种不存在，也不应把每个捕获点扩张成连续、高密度分布区。[Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541)

## 生境、深度与昼夜行为

### 核心观察常在约 100 至 250 米，完整记录不能压成一个固定深度

Grande Comore 的经典潜水器研究在约 150 至 253 米观察到个体，常见位置接近 200 米，水温约 16.5 至 22.8 摄氏度。NOAA 对坦桑尼亚 DPS 的当前概括是约 70 至 140 米的石灰岩深水阶地、洞穴和岩棚；2025 年审查同时整理了科摩罗约 180 至 230 米、南非约 100 至 130 米、马达加斯加约 60 至 500 米的区域差异。[Fricke et al. 1991](https://doi.org/10.1007/BF00007462) [NOAA 2025 five-year review](https://www.fisheries.noaa.gov/resource/document/tanzanian-distinct-population-segment-dps-african-coelacanth-5-year-review-2025)

遥测和捕获资料把局部使用深度扩展到约 40 至 700 米。40 至 60 米记录多为特定区域的捕获或较浅观察，700 米来自 Grande Comore 的夜间活动记录；它们不构成每尾鱼每天都完成的垂直迁移。结构化生境采用“常见直接观察约 100 至 250 米”，正文再保留约 40 至 700 米的区域与方法边界。不宜把 `metrics.maxDiveDepthM` 填成无注释的 700。

### 洞穴是昼间庇护，不是全范围唯一底质

Grande Comore 的个体白天在陡峭火山坡的洞穴内悬停，夜间离开洞穴，单独沿坡面缓慢漂移觅食。洞中可有数尾个体，研究未观察到稳定攻击行为；这只能支持共享庇护空间，不能推断终生群体、等级制、配偶关系或亲子照料。[Fricke et al. 1991](https://doi.org/10.1007/BF00007462)

西印度洋捕获地点还包括南非海底峡谷和深礁、坦桑尼亚石灰岩阶地、马达加斯加陆坡与峡谷边缘，以及邻近软底的拖网点。很多捕获位置可能是渔具作业点，不等于鱼长期栖居的微生境。产品可写“偏好有洞穴、岩棚或裂隙的陡坡和阶地”，不能写“只能生活在火山洞穴”。[ACEP Coelacanth Biology](https://www.acep.co.za/content/view/204/161/) [Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541)

### 可写入 `activity` 的行为

- 白天多在洞穴、岩棚或裂隙内悬停，身体通常不接触底面。
- 黄昏后离开庇护处，夜间沿陡坡和近底水层缓慢漂移觅食。
- 个体会在多个庇护洞穴之间移动，并可重复返回已用地点。
- 配对的肉质偶鳍交替协调，用于稳定和转向；快速受惊时主要靠尾部推进。
- 头下尾上的姿态与近底搜索有关，但不是一直倒立，也不是用鳍在海床行走。

Fricke 等在自然环境中记录到交替的胸鳍与腹鳍运动、缓慢漂游和短时尾部加速。肉质鳍没有被用来“走路”，图像中不应让鳍端承重、长出趾或把鱼撑离海床。[Fricke et al. 1987](https://doi.org/10.1038/329331a0)

## 外形、体尺与图片鉴定边界

### 稳定形态组合

- 身体粗壮，头部宽厚，覆盖厚而粗糙的鳞片。
- 体侧有不规则浅色斑点，可用于同一地点的个体照片识别；斑点不是跨地点单独定种的密码。
- 有两枚背鳍、成对胸鳍和腹鳍、一枚臀鳍及三分叶的尾鳍；尾鳍中央有小型突出叶。
- 配对鳍具有明显肉质基部，第二背鳍和臀鳍也有肉质叶；第一背鳍形态不同，可竖起或折叠。
- 颅骨具有颅间关节，吻部有电感受相关的吻器官；这些内部或细微结构通常不能从宽景图可靠确认。
- 水下灯光和视频常把个体呈现为蓝灰或金属蓝，自然光下可偏浅褐。颜色不能单独区分西印度洋种和印度尼西亚种。

### 体尺采用有边界的上限，不拼接成“典型成体”

NOAA 概括最大长度约 6.5 英尺，即约 198 厘米，体重约 198 磅，即约 89.8 千克；ACEP 概括可达约 2 米并超过 95 千克。Froese 与 Palomares 的 87 尾资料实测全长为 42.5 至 183 厘米，极值模型估计雌鱼约 199 厘米、雄鱼约 168 厘米。模型的置信区间不能改写成已测得的最大个体。[NOAA Fisheries](https://www.fisheries.noaa.gov/species/african-coelacanth) [Froese & Palomares 2000](https://doi.org/10.1023/A:1007602613607)

Cooke 等整理的坦桑尼亚捕获记录体重范围为 5.8 至 105 千克，马达加斯加已测个体为 29.45 至 90 千克。渔具网目、深度、性别和怀孕状态会强烈筛选捕获体尺。结构化字段可保存“约 2 米”和“记录至 105 千克”，但 `note` 必须说明它们是上限或区域捕获极值，不是普通成体范围。[Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541)

普通水下图不能可靠确认性别、年龄、体重、是否怀孕或是哪一个已编号个体。雌鱼通常更粗壮、可长得更大，但外部没有一个足以让生成图标注“成年雌鱼”的单一特征。

## 食性与漂猎方式

西印度洋矛尾鱼是近底肉食者和鱼食者。胃内容物、现场观察及 NOAA 综合资料支持的食物包括深水鱼、鳗形鱼、灯笼鱼、须鲷类等近底鱼，以及乌贼、章鱼和墨鱼等头足类。列出的猎物是已记录菜单，不是每个地区或年龄阶段的固定比例。[ACEP Coelacanth Biology](https://www.acep.co.za/content/view/204/161/) [NOAA Fisheries](https://www.fisheries.noaa.gov/species/african-coelacanth)

它通常借水流缓慢漂移，以各鳍小幅调整姿态，在接近猎物时快速张口吞咽。低速漂游不等于无法快速启动，头下姿态也不证明每次捕食都依靠电感受器。图像可表现一尾鱼接近彼此分离的小型深水鱼或头足类，不表现血液、撕咬、成群围猎或触底奔跑。

## 寿命、成熟与繁殖

### 约百年寿命来自 27 份鳞片重读

Mahé 等用偏振光显微镜重读 27 个跨约 80 年采集的标本鳞片，认为细小环纹近似年生。样本中最高估龄为 84 年，生长模型推断寿命接近 100 年。研究把雄性成熟年龄重估为约 40 至 69 年，雌性为约 58 至 66 年。[Mahé et al. 2021](https://doi.org/10.1016/j.cub.2021.05.054)

这些数字不是对同一批野生个体连续追踪一百年的结果。旧资料曾依据粗大环纹估计约 20 至 48 年；新研究认为粗大环纹约每五年出现一次。产品采用当前重评值，同时在统计卡写明 `n=27`、最高实测估龄 84 年和模型外推边界。

### 约五年妊娠是生长模型重估，不是直接计时

该种体内受精并产下发育完整的幼鱼。更精确的表述是**卵黄营养型胎生**：胚胎在母体内发育，主要依赖大型卵黄，而不是画成哺乳动物式胎盘。Mahé 等把出生体长约 30.8 至 35.8 厘米代入重估的生长曲线，得到接近五年的妊娠期。没有研究者从交配到分娩连续观察同一尾野生雌鱼五年。[Mahé et al. 2021](https://doi.org/10.1016/j.cub.2021.05.054)

已知怀孕雌鱼的晚期胚胎数可从个位数到二十余尾。莫桑比克个体有 26 尾晚期胚胎，桑给巴尔个体有 23 尾充分发育幼鱼。它们是少数被捕母体的记录，不能写成“每胎固定 26 尾”。[Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541)

Lampert 等对仅有的两套可用母体与胚胎材料、14 个微卫星位点进行父权分析，每窝都可由单一雄鱼解释。这支持“两窝各自单父系”，不支持“终生一夫一妻”、稳定配偶或双亲育幼。交配、分娩和野外育幼场仍未被直接观察。[Lampert et al. 2013](https://doi.org/10.1038/ncomms3488)

## 为什么不使用“停止演化”的叙事

现生矛尾鱼属于最早可追溯到泥盆纪的古老支系，且现生体型保留若干与部分化石类群相似的总体结构。这只能说明支系古老和部分形态变化速率较低，不能推出一个现代物种四亿年未变。

Clement 等 2024 年汇总腔棘鱼类系统发育、形态差异和演化速率，显示泥盆纪到后泥盆纪存在显著形态差异转变，连续和计数性状此后仍在变化，化石类群也有多样体型和生态。Lampert 等在现生 *L. chalumnae* 内检测到区域种群分化。数据对象应写“古老支系仍在演化”，不要把“活化石”、直接祖先或“时间停止”做成卖点。[Clement et al. 2024](https://doi.org/10.1038/s41467-024-51238-4) [Lampert et al. 2012](https://doi.org/10.1016/j.cub.2012.04.053)

还要区分“化石记录中曾广布的腔棘鱼类”和“现生 *L. chalumnae* 的历史分布”。不能把古生代或中生代世界各地的腔棘鱼化石画成这个现代种曾全球分布。

## 主要威胁

1. **深置鲨鱼刺网兼捕**：坦桑尼亚和马达加斯加的 `jarifa` 大网目刺网在约 100 至 300 米作业，与矛尾鱼活动深度重叠。NOAA 2025 审查仍把坦桑尼亚 DPS 的鲨鱼刺网兼捕列为最大威胁。[NOAA 2025 five-year review](https://www.fisheries.noaa.gov/resource/document/tanzanian-distinct-population-segment-dps-african-coelacanth-5-year-review-2025) [Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541)
2. **其他深水渔具和偶发拖网**：科摩罗传统深水手线、甲壳类拖网及遗失刺网都产生过捕获。所有已知捕获并不等于所有死亡，报告率和未记录丢弃仍未知。
3. **繁殖雌鱼被选择性捕获**：大网目刺网容易挂住大型个体；坦桑尼亚已知性别的捕获中有多尾怀卵或怀胚雌鱼。极晚成熟和约五年妊娠使这类死亡难以快速补充。
4. **坦桑尼亚局部深水生境工程**：NOAA 指出深水港建设、爆破、航道疏浚、沉积物和污染输入可能破坏坦桑尼亚石灰岩阶地与洞穴。该证据针对坦桑尼亚 DPS，不应扩写成六国都已有相同港口影响。
5. **低遗传多样性和分散小种群**：区域种群分化、低多样性与低补充率会放大随机死亡和局地事件；当前数据不足以给每个种群一个精确灭绝概率。
6. **保护区执行不足**：NOAA 2025 审查指出坦桑尼亚保护区内仍使用大型刺网，现行规则的执行没有消除威胁。设立保护区名称不等于底层渔具已经退出。
7. **标本价值和非法跨境移动**：现代资料不支持存在成熟的定向商业渔业，但科研和收藏价值可能奖励保留尸体或隐瞒来源。CITES 附录 I 管制应与渔民报告激励分开设计，避免按死鱼数量付费。

不把气候变化、塑料、污染或鲨鱼捕食自动列成全物种主要致危原因。它们可能需要监测，但现有资料没有给出覆盖全范围的归因比例；NOAA 也没有把自然捕食认定为坦桑尼亚 DPS 的显著威胁。

## 推荐保护行动

1. 在已确认占用的陡坡、峡谷、阶地和洞穴周边设置可执行的底层渔具禁用区，重点移除约 100 至 300 米的大网目 `jarifa` 刺网，而不是只划纸面边界。
2. 与渔民共同记录时间、粗略海区、深度、渔具、网目、鱼体状态和处置结果；补偿以如实报告和安全改具为条件，不按尸体或标本数量奖励。
3. 为仍存活的兼捕个体建立少搬运、少暴露、快速评估和放归流程。深水鱼可能有压力与温度损伤，不能把“放回海里”直接计为存活。
4. 用 ROV、固定摄像、个体白斑照片识别和标准化 eDNA 共同监测。eDNA 阳性表示附近水体出现目标 DNA，不给出个体数、性别、驻留时间或繁殖状态；阴性也不能单独证明缺失。[Oliver et al. 2024](https://doi.org/10.1098/rsbl.2024.0415)
5. 对深水港、爆破、疏浚、弃土和沉积物输入开展占用生境避让及累积影响评估，并在施工前后用同一方法监测。
6. 维护跨科摩罗、坦桑尼亚、肯尼亚、莫桑比克、南非和马达加斯加的捕获清单、照片目录、组织库和遗传数据标准；任何组织或标本跨境移动先完成 CITES 许可。
7. 优先采集不致死的水样、影像和自然脱落材料。珍稀性本身不能成为捕捉活体供水族馆或博物馆展示的理由。
8. 不公开可让渔具直接定位的洞穴、昼间聚集点和怀孕雌鱼坐标。对外地图使用宽域范围或模糊网格。
9. 推动 IUCN 全物种重新评估，纳入 2000 年以后发现的区域种群、现代生活史重估、兼捕趋势和监测不确定性；正式更新前仍保留现行 CR，不自行改级。

## 推荐的 6 段故事

1. **古老支系仍在继续演化**：用化石形态多样性、连续性状变化和现生种群分化替代“数亿年完全不变”的叙事。
2. **西印度洋种不是印度尼西亚种**：用有效名、分布、两个现生种和图片无法凭颜色定种建立种界。
3. **肉质鳍不是走上陆地的脚**：解释交替鳍运动、悬停、转向和尾部快速启动，明确不在海床行走。
4. **白天进洞，夜间沿坡漂猎**：以 Grande Comore 的潜水器观察讲昼夜节律，同时保留地区和生境差异。
5. **五年妊娠来自鳞片和生长曲线**：解释百年寿命、晚熟、出生体长与妊娠模型，区分模型重估和直接观察。
6. **保护从减少一张深水刺网开始**：把兼捕、怀孕雌鱼、渔民报告、ROV、照片识别和 eDNA 连成可执行行动链。

## 推荐关键事实

1. Catalog of Fishes 当前接受 *Latimeria chalumnae* Smith, 1939，作者名不加括号。
2. 推荐分类链是 Animalia > Chordata > Sarcopterygii > Coelacanthiformes > Latimeriidae > Latimeria。
3. 腔棘鱼目现存两个有效种；印度尼西亚矛尾鱼 *L. menadoensis* 不是本档案的区域变型。
4. IUCN 当前正式等级为 CR，趋势 unknown，评估日为 2000 年 6 月 30 日，当前结构化准则为 A2bcd。
5. CITES 以 *Latimeria* spp. 把整个属列入附录 I；美国 ESA 的 Threatened 只针对坦桑尼亚 DPS。
6. 可靠记录覆盖科摩罗、肯尼亚、马达加斯加、莫桑比克、南非和坦桑尼亚，但各国驻留或繁殖证据强度不同。
7. 直接观察常集中在约 100 至 250 米，区域捕获和遥测约为 40 至 700 米，不能写成单一固定水深。
8. 最大体长约 2 米；105 千克是坦桑尼亚捕获资料中的区域极值，不是普通成体体重。
9. 配对肉质鳍用于稳定和转向，未被观察为在海床承重行走。
10. 它以深水鱼、鳗形鱼和头足类为食，通常在夜间缓慢漂移接近猎物。
11. 27 份鳞片重读支持寿命接近 100 年；雄性约 40 至 69 年、雌性约 58 至 66 年成熟。
12. 约五年妊娠来自生长模型重估；两窝父权样本各为单父系，不能推出终生配偶制。
13. 当前没有可靠的全球成熟个体总数，Grande Comore 或南非局部照片识别数不能外推全球。
14. 坦桑尼亚和马达加斯加的深置鲨鱼刺网兼捕是有直接记录的主要人为压力。

## 应删除或避免的说法

- 不把“腔棘鱼”写成只有一个现生种，也不把 *L. menadoensis* 当作 *L. chalumnae* 的印度尼西亚种群。
- 不写作者为 `(Smith, 1939)`；当前组合与原始描述属名一致，作者名不加括号。
- 不把肉鳍鱼纲写成辐鳍鱼纲、软骨鱼纲或四足动物。
- 不说它是人类、两栖动物或四足动物的直接祖先；肺鱼才是四足动物最近的现生亲缘支系。
- 不把古老支系写成数亿年完全停止演化，不把现代种直接画入所有腔棘鱼化石时代和地点。
- 不把 IUCN 2000 年评估写成 2026 年新评估，不把 CR、CITES 附录 I 和 ESA Threatened 合成一个“最高等级”。
- 不写全球只剩 200、300、500 或任何固定尾数；局部估计、已知标本和全球种群回答不同问题。
- 不把六个记录国都写成已确认、等规模、互相连通的繁殖种群。
- 不写所有个体固定生活在 200 米、400 米或火山洞穴；地区记录约 40 至 700 米且底质不同。
- 不把夜行写成白天绝不出洞，也不把洞中同框个体写成家庭、终生群体或社会等级。
- 不画肉质鳍触底行走、长出脚趾、撑起身体或把鱼拖上陆地。
- 不用蓝色、褐色或白斑单独区分两个现生种；水下灯光会改变体色表现。
- 不写每胎固定 26 尾、不画母鱼带幼鱼游动、不写亲鱼护幼；野外交配、分娩和育幼未被直接观察。
- 不把“约五年妊娠”写成直接计时，也不把两窝单父系扩写为终生一夫一妻。
- 不把 eDNA 阳性写成发现一个稳定种群、精确个体数或繁殖证据。
- 不公开精确洞穴、昼间聚集点、怀孕雌鱼或监测设备坐标。

## 1 张封面与 5 张 gallery 的图像事实边界

六张图都是科学约束下的编辑示意，不是野外事件证据、标本鉴定图或真实点位复刻。运行时目录已与并行素材方案统一为 `public/images/species/coelacanth/`；源图目录为 `src/assets/source/species/coelacanth/`。所有画面禁止文字、标签、水印、品牌、血腥捕食和精确地点线索。

| 帧 | 运行时路径 | 可视事实与证据边界 |
| --- | --- | --- |
| 01 | `./images/species/coelacanth/01-deep-slope-portrait.webp` | 单尾完整成鱼与深水岩坡；普通图像不能确认性别、年龄、体重、已编号个体或遗传种鉴定 |
| 02 | `./images/species/coelacanth/02-lobed-fins-and-three-lobed-tail.webp` | 展示成对肉质鳍、两枚背鳍和三分叶尾；鳍不触底，不生成趾或“走路”姿态 |
| 03 | `./images/species/coelacanth/03-steep-cave-slope-habitat.webp` | 洞穴、岩棚和陡坡表示已知重要生境组合；不能证明所有地区只占用这种底质 |
| 04 | `./images/species/coelacanth/04-night-drift-foraging.webp` | 单尾鱼在夜间缓慢接近彼此分离的深水鱼或头足类；不表现捕获结果、围猎或血液 |
| 05 | `./images/species/coelacanth/05-daytime-cave-shelter-group.webp` | 少数个体在洞内彼此分离悬停；同洞只表示共享庇护空间，不证明家庭、配偶或等级制 |
| 06 | `./images/species/coelacanth/06-rov-video-monitoring.webp` | ROV 或固定摄像开展非致死监测；画面不复制精确洞穴坐标，单次影像不提供全种群趋势 |

### 共同形态锚点

`photorealistic underwater wildlife editorial, West Indian Ocean coelacanth, Latimeria chalumnae, robust deep body, blunt broad head, thick mosaic-like scales, irregular pale white flank blotches, paired fleshy lobed pectoral and pelvic fins, two dorsal fins, one anal fin, distinctive three-part caudal fin with a small projecting central epicaudal lobe, blue-gray appearance under underwater illumination, anatomically coherent, entire fish visible`。

### 共同排除项

`no Indonesian location claim, no color-only species identification, no shark gill slits, no barbels, no sturgeon scutes, no eel body, no ordinary symmetrical forked tail, no four legs, no digits, no fin touching or pushing against seabed, no walking, no fossil skeleton overlay, no aquarium glass, no diver touching fish, no blood, no text, no watermark`。

图像生成或裁切后再按实图重写 `alt` 和测量 `focalPoint`。文件名与提示词不能代替视觉验收。尤其检查第一背鳍、第二背鳍、肉质偶鳍和尾部中央小叶；AI 常把它们合并成普通鱼叉尾或生成多余肢体。

## 研究决策与实现引用

维护者用本文追踪字段取舍、事实边界、来源覆盖和验收依据。生产数据只维护在 `src/data/species.ts`：来源见 `COELACANTH_SOURCES`，完整物种字段见 `slug: 'coelacanth'` 的记录。修改公开文案、来源、日期或媒体元数据时，先改生产文件；研究依据或限制发生变化时，再同步修订本文。本文不再保存完整 TypeScript 快照，以免两份对象产生漂移。

团队已在 2026-08-25 按最终素材完成图像 `alt` 与 `focalPoint` 的静态和视觉验收；维护者每次重生成或裁切后都要重新核对实图。

`metrics` 暂为空。约 2 米和 105 千克是来源口径不同的上限，约 700 米是区域遥测或捕获边界，约 100 年是模型推断；在没有 note 的标准化比较字段里写入这些值会丢失关键语境。`featured: true` 是首页编排选择，不属于物种事实。

## 来源覆盖清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 当前有效名、作者、模式信息 | [Catalog of Fishes](https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=23925) | 当前有效组合、Smith 1939、模式产地和 Latimeriidae；Catalog 的分布摘要不是全球丰度调查 |
| 两个现生有效种 | [WoRMS](https://www.marinespecies.org/aphia.php?p=taxlist&tName=Latimeria) [Pouyaud et al. 1999](https://doi.org/10.1016/S0764-4469(99)80061-4) | *L. chalumnae* 与 *L. menadoensis* 同为有效种；原始描述样本不能支持仅凭颜色鉴定所有影像 |
| 中英文名 | [ITIS](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=649768) [中国科学院古脊椎动物与古人类研究所](https://ivpp.cas.cn/xwdt/kyjz/201811/t20181103_5155252.html) [中国政府名称文件](https://www.gov.cn/gbgl/b470a262dca84ffe82c8801a395b3f47/files/af474214d05542f3bf33edbdd5a7703c.pdf) | 英文主名、非洲拉蒂迈鱼别名、矛尾鱼科和矛尾鱼属中文口径；“西印度洋矛尾鱼”是仓库为精确种界采用的展示组合 |
| IUCN 当前正式字段 | [IUCN DOI](https://doi.org/10.2305/IUCN.UK.2000.RLTS.T11375A3274618.en) [FishBase mirror](https://www.fishbase.se/summary/Latimeria-chalumnae.html) | CR、unknown、2000-06-30、A2bcd；IUCN 正文受访问限制，旧印刷名录的准则代码不同，列入更新风险 |
| CITES | [2026 current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | *Latimeria* spp. 附录 I 和当前生效日；附录 I 不等于任何目的的跨境移动都不存在许可例外 |
| 分类链、当前法律与综合威胁 | [NOAA species profile](https://www.fisheries.noaa.gov/species/african-coelacanth) [2025 five-year review](https://www.fisheries.noaa.gov/resource/document/tanzanian-distinct-population-segment-dps-african-coelacanth-5-year-review-2025) | 完整分类链、体尺概括、坦桑尼亚 DPS、现代生活史和威胁；DPS 结论不能替代全物种 IUCN 评估 |
| 运动 | [Fricke et al. 1987](https://doi.org/10.1038/329331a0) | 自然环境的鳍协调、漂游和尾部启动；没有观察到触底步行 |
| 洞穴、深度与昼夜行为 | [Fricke et al. 1991](https://doi.org/10.1007/BF00007462) [ACEP Biology](https://www.acep.co.za/content/view/204/161/) | Grande Comore 的直接观察和机构综合；局部模式不能强制套到所有区域 |
| 食性 | [ACEP Biology](https://www.acep.co.za/content/view/204/161/) [NOAA species profile](https://www.fisheries.noaa.gov/species/african-coelacanth) | 胃内容物与综合食物清单、夜间漂猎；不提供全范围食物比例 |
| 体尺 | [Froese & Palomares 2000](https://doi.org/10.1023/A:1007602613607) [Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541) | n=87 长度关系和区域捕获体尺；模型极值与渔具筛选记录都不是典型成年范围 |
| 寿命、成熟和妊娠 | [Mahé et al. 2021](https://doi.org/10.1016/j.cub.2021.05.054) | n=27 鳞片、最高估龄 84、寿命约 100、成熟年龄和妊娠约五年；后两者含模型假设 |
| 父权 | [Lampert et al. 2013](https://doi.org/10.1038/ncomms3488) | 两窝、14 个微卫星位点、每窝单父系；不能推出终生配偶制或亲代照料 |
| 种群结构 | [Lampert et al. 2012](https://doi.org/10.1016/j.cub.2012.04.053) | 71 尾成体、低多样性与区域分化；样本不覆盖所有潜在栖息地 |
| 马达加斯加与区域兼捕 | [Cooke et al. 2021](https://doi.org/10.17159/sajs.2021/8541) | 约 1,000 千米捕获跨度、区域种群推断、深置刺网与怀孕雌鱼；捕获记录不等于无偏分布调查 |
| 非致死监测 | [Oliver et al. 2024](https://doi.org/10.1098/rsbl.2024.0415) | 15 份水样中 3 份检出、与 ROV 影像联合验证；eDNA 不能单独估算丰度或繁殖 |
| 演化叙事 | [Amemiya et al. 2013](https://doi.org/10.1038/nature12027) [Clement et al. 2024](https://doi.org/10.1038/s41467-024-51238-4) | 肺鱼与四足动物关系、化石形态差异和演化动态；低速率不等于零演化 |

## 仍然不确定或需后续更新的事项

1. **IUCN 评估已严重过时**：当前正式条目仍是 2000 年评估。任何新版发布都要成套更新等级、趋势、准则、评估日、分布、威胁和保护行动。
2. **IUCN 准则存在版本显示差异**：当前网页字段经镜像为 A2bcd，2000 年印刷名录为 A2cd, C2b。IUCN 开放下载或 API 可用时应直接导出当前 assessment JSON，再确认 `criteria`。
3. **没有可靠全球成熟个体数**：Grande Comore 的局部估计、南非照片识别个体、已知捕获标本和全球成熟个体数不能互换，当前不填 `estimatedMatureIndividuals`。
4. **全球趋势未知**：坦桑尼亚 DPS 的兼捕增加、局部照片重见或单个地点稳定都不能自动替代 IUCN 全范围 `unknown`。
5. **分布受调查和渔具偏差影响**：深潜器调查集中在少数可达地点，捕获记录又取决于渔具。肯尼亚和莫桑比克是否存在稳定繁殖群体仍缺直接监测。
6. **深度不是统一阈值**：约 40 至 700 米混合了捕获、观察和遥测；常见直接观察约 100 至 250 米更适合展示，但也不能定义绝对生理界限。
7. **幼体空间仍不清楚**：40 至 100 厘米个体在调查和兼捕中稀少，可能利用更深或不同生境。不能把所有幼鱼画在成年洞穴或母鱼旁。
8. **寿命与妊娠仍依赖稀有标本模型**：百年寿命证据比旧估计强，但样本仅 27；约五年妊娠还假设胚胎生长可由同一模型解释。
9. **繁殖行为未直接观察**：交配、分娩、出生地点和亲代照料未知；两窝父权材料不能建立整个物种的配偶制度。
10. **体尺上限不统一**：NOAA、ACEP、Froese 模型和区域捕获资料回答不同问题。新极值只有在标本、测量方式、性别和怀孕状态清楚时才更新结构化字段。
11. **图片不能完成种鉴定**：两个现生种外形近似，灯光改变颜色，AI 生成图更不能作为标本证据。caption 必须保持编辑示意边界。
12. **图片焦点已按最终素材验收**：2026-08-25 静态视觉检查后，封面与五张图集依次采用 `(0.62, 0.52)`、`(0.50, 0.50)`、`(0.70, 0.47)`、`(0.56, 0.50)`、`(0.55, 0.50)`、`(0.60, 0.50)`；任何重生成或裁切都要重新复核。
13. **保护行动需要地方共同治理**：单纯禁止渔具而不给安全替代、报告渠道和执行资源，可能把兼捕转为不报告；效果需用统一努力量监测。
14. **地图必须隐藏敏感点位**：精确洞穴、昼间聚集点和怀孕雌鱼位置可提高定向捕捉风险，公共数据只保留宽域。

## 最终实施与测试清单

### 数据集成

- 在 `src/data/species.ts` 顶部新增一次 `COELACANTH_SOURCE_DATE`、`COELACANTH_CONTENT_DATE` 和 `COELACANTH_SOURCES`，对象尾部只引用来源常量。
- 固定 `id: 'species-latimeria-chalumnae'`、`slug: 'coelacanth'`、`scientificName: 'Latimeria chalumnae'`。
- 主名固定为“西印度洋矛尾鱼 / West Indian Ocean Coelacanth”；aliases 保留 TODO 用名“腔棘鱼”、简称“矛尾鱼”、“非洲拉蒂迈鱼”、“African Coelacanth”、“Coelacanth”和 `Gombessa`。正文继续说明前两个中文别名的范围比主名宽。
- 分类路径逐级断言 `Chordata / Sarcopterygii / Coelacanthiformes / Latimeriidae / Latimeria`，不得混入 *L. menadoensis*。
- 保护字段固定为 `conservation('CR', 'unknown', 2000, 'A2bcd')`；搜索确认没有把 CITES、ESA 或旧印刷准则合入 IUCN 字段。
- `distribution.realms` 只有 marine；国家恰好六个；`range` 保留稳定种群证据与少量捕获记录的差别。
- `measurements` 只保存带 note 的约数上限；`metrics` 暂为空，不填 `maxDiveDepthM`、`lifespanYears` 或 `estimatedMatureIndividuals`。
- `storySections` 恰好 6 段，`featuredStats` 恰好 4 项，gallery 恰好 5 张，来源常量恰好 23 条。
- 对 summary、description、story、facts 和 tags 做文本断言，不出现 `活化石`、`missing link`、`直接祖先` 或“用鳍行走”等误导表述。

### 图像与静态资源

- 源目录使用 `src/assets/source/species/coelacanth/`，运行时目录使用 `public/images/species/coelacanth/`；六组文件名与本档案逐字一致。
- 六张源 PNG 与六张运行时 WebP 应为 1536×1024；用 `file`、`identify` 或仓库静态脚本确认格式、尺寸、色彩模式、解码和 alpha，不启动 GUI 或无头浏览器。
- 当前静态 `file` 检查已确认六张 WebP 为 1536×1024 VP8 WebP，六张源 PNG 为 1536×1024 8-bit PNG；这不代替逐图视觉验收。
- 逐图检查：01 单尾完整主体；02 肉质偶鳍、两枚背鳍和三分叶尾；03 陡坡、岩棚或洞口且鱼不触底；04 单尾夜间接近分离猎物且无血；05 少数鱼彼此分离悬停且无亲子暗示；06 ROV 与鱼不接触且无可识别坐标。
- 检查没有普通叉尾、鲨鱼鳃裂、鲟鱼骨板、触须、四肢、趾、触底步行、母幼同行、潜水员触摸、文字或水印。
- 按最终图像重写 alt、title、caption 和 focal point；不要根据文件名猜画面。
- 在物种源图 README 保存最终提示词、排除项、生成日期、PNG 到 WebP 映射、转换参数与静态验收；本研究任务不编辑该 README。

### 分类测试与计数

- 在 `tests/taxonomy.test.mjs` 增加完整档案测试：主名与别名、IUCN 字段、marine realm、六国范围、测量 note、6 段故事、4 项统计、5 张 gallery、23 条来源和六条媒体路径。
- 增加完整路径断言：`Animalia > Chordata > Sarcopterygii > Coelacanthiformes > Latimeriidae > Latimeria > Latimeria chalumnae`。
- 增加种界断言：主学名和 genus 都是 `Latimeria`；数据对象可在比较故事提到 `L. menadoensis`，但分类叶、国家和图片路径不得变成印度尼西亚种。
- 增加来源唯一性、URL 可解析、访问日期格式和来源上限断言；当前草案恰好 23 条，不得超过任务上限。
- 增加媒体路径唯一性和 `.webp` 后缀断言；封面不重复进入 gallery。
- 若当前分支基线仍是 **36 个物种、112 个分类单元节点、148 个总节点**，本轮仅新增西印度洋矛尾鱼后应为 **37 个物种、116 个分类单元节点、153 个总节点**。
- 基线下 `Animalia` 后代物种数应从 36 变为 37，`Chordata` 从 31 变为 32；新建的 `Sarcopterygii`、`Coelacanthiformes`、`Latimeriidae` 和 `Latimeria` 各有 1 个后代物种。
- 并行物种先合入时必须按实际分类树重算，不能为了保留上述数字删除或覆盖其他物种。

### 命令验证

- 运行 `npm run typecheck`，确认 taxon、realm、diet type、source kind、日期和图片路径模板字面量通过 TypeScript。
- 运行 `npm test`，确认完整档案、分类路径、节点计数和既有回归测试通过。
- 运行 `npm run build`，确认六张 WebP 被 Vite 解析并进入构建产物。
- 运行仓库既有压缩或静态资源脚本后，再次检查六张输出尺寸和解码；不把源 PNG 错放进运行时目录。
- 运行 `git diff --check`，审阅 `git diff --stat` 和目标文件清单，确认临时文献、缓存、下载文件和无关改动没有进入提交。

### TODO 收尾顺序

- 只有数据对象、测试、六张源 PNG、六张运行时 WebP、物种素材 README、源图总索引、typecheck、test、build 和静态图像检查全部完成后，才从 `docs/todo.md` 删除 `腔棘鱼 *Latimeria chalumnae*` 条目。
- 仅完成研究文件或部分素材时不提前删除 TODO。
- 删除 TODO 前按当前原文精确匹配，不顺手改动相邻动物。

## 最终实施建议

- 主记录采用“西印度洋矛尾鱼 / West Indian Ocean Coelacanth”和 *Latimeria chalumnae* Smith, 1939；“腔棘鱼”只作宽泛搜索别名。
- 固定分类链为 `Sarcopterygii / Coelacanthiformes / Latimeriidae / Latimeria`，用比较故事明确排除印度尼西亚种。
- 固定 IUCN 结构化值为 `CR / unknown / 2000 / A2bcd`，同时把评估过时和旧印刷准则差异保留在研究说明中。
- 分布列六国，但正文区分水下确认、区域繁殖推断和少量捕获；不填全球成熟个体数。
- 用约 100 至 250 米表达常见直接观察深度，用正文保留约 40 至 700 米的区域方法边界；不填无注释的最大潜深 metrics。
- 用“卵黄营养型胎生”替代哺乳动物式胎盘想象，用 `n=27` 和模型边界解释百年寿命与五年妊娠。
- 六张图围绕深坡肖像、肉质鳍与三分叶尾、洞穴坡面、夜间漂猎、昼间共享庇护和 ROV 监测展开。所有图片保持编辑示意和敏感点位边界。
- 保护叙事聚焦深置刺网兼捕、怀孕雌鱼、保护区执行和非致死监测，不用模糊的全球灾难列表稀释已有直接证据。
