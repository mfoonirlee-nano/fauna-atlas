# 中华菊头蝠完整物种档案研究

- 分类单元：`Rhinolophus sinicus` K. Andersen, 1905
- 主中文名：中华菊头蝠
- 英文名：Chinese Rufous Horseshoe Bat
- 研究日期：2026-08-24
- 用途：为 `src/data/species.ts` 的完整物种档案和六张原创图像提供可追溯底稿
- 证据口径：分类与英文名采用 Mammal Diversity Database，全球等级采用 IUCN 2019 评估，中国区域等级采用生态环境部与中国科学院官方名录；形态和自然史优先使用权威物种专论及物种级原始研究

## 编辑结论

Mammal Diversity Database 接受 `Rhinolophus sinicus`，英文主名为 Chinese Rufous Horseshoe Bat，另列 Chinese Horseshoe Bat 和 Little Nepalese Horseshoe Bat。生态环境部与中国科学院发布的《中国生物多样性红色名录·脊椎动物卷（2020）》使用“中华菊头蝠”，因此产品沿用 TODO 中的中文主名。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1004746/) [中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

当前分类口径已经把 `Rhinolophus septentrionalis` 排除在 `R. sinicus` 之外。2013 年中国种群研究仍把它当成中华菊头蝠北方亚种；2019 年靶向重测序研究支持更窄的物种边界，MDD 随后采用拆分结果。档案不能继续把云南 `septentrionalis` 的体型、叫声或分布无条件并入中华菊头蝠。[Mao et al. 2013](https://doi.org/10.1371/journal.pone.0056777) [Mao et al. 2019](https://doi.org/10.1016/j.ympev.2019.106551) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1004746/)

IUCN 当前全球等级为无危 `LC`，评估者为 Sun，评估年为 2019。研究期间无法从受 Cloudflare 和 API 令牌保护的当前事实表直接抽取种群趋势字段；对象草稿暂用 `unknown`，实现前需要二次核对该单一字段。公开资料只支持“分布广、部分地点常见”，不能据此填成 `stable`。中国官方 2020 区域名录同样评为 `LC`；区域等级不替代 IUCN 全球字段。[IUCN 2019 assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41529A22005184.en) [生态环境部与中国科学院公告](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/t20230522_1030745.html)

中华菊头蝠适合讲述鼻叶、恒频回声定位、洞穴栖息和湿润山地森林之间的联系。现有资料对繁殖数字、全球数量、寿命和迁移距离缺乏物种级证据，产品不应补写窝仔数、寿命或全球种群规模。湖南湘西 16 个洞穴的 12,942 蝠次观察能支持当地集群冬眠和隐蔽夏季繁育栖点，不能代表五国全部种群。[Wu et al. 2022](https://doi.org/10.5846/stxb202011162947)

冠状病毒研究必须保留样本、宿主和病毒的层次。云南一处中华菊头蝠群体的纵向调查从肛拭子和粪样检出多种 SARS 相关冠状病毒，并从粪样分离出 WIV1；细胞实验显示 WIV1 可利用人、果子狸和中华菊头蝠 ACE2。证据支持该地点的中华菊头蝠携带 SARS-CoV 相关病毒，不支持“每只中华菊头蝠带毒”，也不证明它是 SARS-CoV-2 的直接来源。RaTG13 的宿主记录为中菊头蝠 `Rhinolophus affinis`，不应错写成中华菊头蝠。[Ge et al. 2013](https://doi.org/10.1038/nature12711) [Hu et al. 2017](https://doi.org/10.1371/journal.ppat.1006698) [Zhou et al. 2020](https://doi.org/10.1038/s41586-020-2012-7)

## 名称与分类口径

### 接受名、英文名与别名

| 字段 | 建议值 | 依据与边界 |
| --- | --- | --- |
| `scientificName` | `Rhinolophus sinicus` | MDD 当前接受名 |
| `names.zh` | 中华菊头蝠 | 中国官方红色名录与仓库 TODO 使用的主名 |
| `names.en` | Chinese Rufous Horseshoe Bat | MDD 英文主名 |
| `aliases` | Chinese Horseshoe Bat；Little Nepalese Horseshoe Bat；鲁氏菊头蝠（旧称） | 前两个来自 MDD；“鲁氏菊头蝠”只作为旧中文用名，不表示当前接受名仍是 `R. rouxii` |

Andersen 于 1905 年把它描述为 `Rhinolophus rouxi sinicus`，模式产地为安徽旌德一带。后续形态、核型和遗传研究支持独立种地位。公众档案不需要展开全部组合名史，但可以在名称章节说明“旧称不等于当前分类”。[Andersen 1905 original description](https://www.biodiversitylibrary.org/page/31207559) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1004746/)

### 当前拆分边界

MDD 的说明写明 `R. sinicus` 过去包含 `R. septentrionalis`。2013 年研究把中国样本分为东部、中部、海南和云南四组，当时仍使用两个亚种；云南组体型更大、回声定位频率更低。2019 年研究用约 1,500 个核基因位点解析近缘类群，支持把 `septentrionalis` 作为独立种。旧专论中的两亚种范围和合并量测需要标注历史口径。[Mao et al. 2013](https://doi.org/10.1371/journal.pone.0056777) [Mao et al. 2019](https://doi.org/10.1016/j.ympev.2019.106551)

当前档案不得使用以下写法：

- “中华菊头蝠北方亚种 `R. s. septentrionalis`”
- “中华菊头蝠在云南的低频大体型亚种”
- 把旧范围内所有云南样本自动归入 `R. sinicus`
- 把鲁氏菊头蝠 `R. rouxii` 当作当前接受名

### 分类图谱

| 分类阶元 | 学名 | 中文名 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Mammalia | 哺乳纲 |
| 目 | Chiroptera | 翼手目 |
| 科 | Rhinolophidae | 菊头蝠科 |
| 属 | Rhinolophus | 菊头蝠属 |
| 种 | Rhinolophus sinicus | 中华菊头蝠 |

该物种为分类图谱新增翼手目、菊头蝠科和菊头蝠属三个分类单元。翼手目是具有持续动力飞行能力的哺乳动物类群；分类图谱只表达归属，不把“第二大目”等物种数排名写成固定生物学特征。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1004746/)

## 保护状态

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| system | IUCN Red List | 仓库固定值 |
| code | `LC` | 当前全球等级为无危 |
| trend | `unknown` | 暂定；实现前需从 IUCN 当前事实表二次核对 |
| assessedYear | `2019` | 当前评估引用年份 |
| criteria | 不填 | 无危条目不添加受胁准则 |
| assessor | IUCN | 由仓库 helper 统一生成 |

完整引用为 Sun 2019, *Rhinolophus sinicus*, The IUCN Red List of Threatened Species 2019, e.T41529A22005184。MDD 当前页面也显示 IUCN Least Concern。`LC` 说明全球灭绝风险未达到受胁阈值，不等于各处洞穴安全，也不等于数量稳定。[IUCN 2019 assessment DOI](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41529A22005184.en) [Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1004746/)

生态环境部与中国科学院官方 PDF 第 20 页、序号 360 记录“中华菊头蝠 `Rhinolophus sinicus` LC”。该记录是中国区域评估。中国等级与全球等级当前一致，但二者的范围和评估过程不同。[中国生物多样性红色名录·脊椎动物卷（2020）](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

现有权威资料没有给出全球成熟个体数。`estimatedMatureIndividuals` 必须留空。局地洞穴计数、蝠次和样本数不能换算为全球数量。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964) [Wu et al. 2022](https://doi.org/10.5846/stxb202011162947)

## 分布、海拔与地图口径

### 当前全球范围

MDD 的当前国家字段包括中国、印度、缅甸、尼泊尔和越南，生物地理界跨古北界与东洋界。权威物种专论把范围概括为北印度、尼泊尔、缅甸北部、中国中南部与东南部，以及越南北部至中部。旧专论仍把云南 `septentrionalis` 放在本种之内；当前地图文案需要排除该旧亚种的无条件并入。[Mammal Diversity Database](https://www.mammaldiversity.org/taxon/1004746/) [Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

建议 `regions`：

1. 中国中南部、东南部与西南部湿润山地
2. 喜马拉雅东段和北印度山地
3. 尼泊尔中东部山地
4. 缅甸北部湿润森林
5. 越南北部至中部山地

`center: { lat: 27.5, lng: 105 }` 只作为亚洲地图初始焦点。它不代表种群中心、模式产地或精确范围几何中心。

### 海拔

2019 年专论给出 500 至 2,769 米，并指出高海拔记录较常见。该专论保留 `septentrionalis` 亚种，因此范围属于较宽的历史物种概念。产品可以把 500 至 2,769 米作为带注释的展示值；若要写入用于筛选比较的 `metrics.elevationM`，实现者应先从当前 IUCN 或更新后的分布资料核对拆分后的范围。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

## 生境与栖息地依赖

中华菊头蝠在降雨较多的山地森林中活动。资料也记录了尼泊尔受扰森林、缅甸浓密湿润热带林和竹林。它能进入次生林或林农镶嵌，不表示森林结构和昆虫资源可以消失。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

洞穴、废弃隧道、寺庙、房屋、井和树洞都可作为日栖点。洞穴在许多研究地区承担冬眠、繁育和群居功能；山地森林提供夜间取食空间。档案应把“白天栖点”和“夜间觅食生境”分开，避免把一张洞内照片概括为全部生活空间。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964) [Bats in China species account](https://www.bio.bris.ac.uk/research/bats/China/rhinolophussinicus.htm)

湘西 16 个喀斯特洞穴的研究记录 12,942 蝠次。当地个体多在距洞口 150 至 200 米、距洞底 6 至 10 米的洞顶栖息，秋季聚集冬眠，翌年 3 月末苏醒。研究者也发现夏季繁育栖点位于难以进入的洞段。百分比和季节来自湘西种群，不能套到印度、尼泊尔、缅甸或越南。[Wu et al. 2022](https://doi.org/10.5846/stxb202011162947)

建议 habitat：

1. **湿润山地森林**：提供夜飞昆虫、林缘和林下的取食空间，设为 `isPrimary`。
2. **洞穴与废弃隧道**：提供白天休息、冬眠和部分繁育栖点；温度、湿度、黑暗和低干扰共同决定可用性。
3. **次生林、竹林与林农镶嵌**：本种可在受扰景观活动，但仍需要可用栖点与连续的取食结构。
4. **建筑、井与树洞栖点**：属于补充栖点类型，不代表整个种群依赖建筑。

## 形态与测量边界

中华菊头蝠体型中等。背毛多为木褐色，可带红褐色调，腹面稍浅。耳朵较小，缺少耳屏。鼻端具有菊头蝠科典型的复杂鼻叶：宽的马蹄形下部包围鼻孔，中央鞍状叶近乎平行，后方披针叶在尖端前收窄。下唇有三条纵沟。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

飞行时可见宽而圆的膜翼和连接后肢的尾膜。倒挂休息时，它常把翼膜收拢在身体两侧或包住躯干。图像不能给它画上鸟羽、长鼠尾、啮齿动物门齿或吸血蝙蝠式裸脸。

| 测量 | 来源值 | 证据边界 | 建议进入字段 |
| --- | --- | --- | --- |
| 头体长 | 43 至 53.5 mm | 2019 专论的宽物种概念仍含 `septentrionalis` | 可进入 `measurements.length`，注释历史口径；不进入 normalized metrics |
| 尾长 | 21.5 至 30 mm | 同上 | 不单独展示，schema 无尾长字段 |
| 耳长 | 15.8 至 20 mm | 同上 | 用于图像校验，不进入 metrics |
| 前臂长 | 43 至 56 mm | 同上，可能混入拆分种 | 不作为当前全球范围 |
| 前臂长 | 44.8 至 51.5 mm | 中国捕获的 13 只 `R. sinicus` | 可做 featured stat，注明地区样本与 n=13 |
| 体重 | 10 至 12.5 g | 四川 4 只个体 | 可进入 `measurements.weight`，注明不是全球范围 |

中国 13 只样本的叫声频率和前臂长都与中菊头蝠 `R. affinis` 有重叠。形态识别需要组合鼻叶、第三指指骨比例、体型和遗传信息；产品不能把一条频率或红褐毛色写成绝对鉴定方法。[Bats in China species account](https://www.bio.bris.ac.uk/research/bats/China/rhinolophussinicus.htm)

## 食性与觅食

中华菊头蝠是食虫动物。权威专论记录它在空中追捕昆虫，也会从停栖点出击。现有物种级资料不足以给出覆盖五国的固定昆虫目比例，因此 `foods` 应使用功能描述，不堆砌某个洞穴或月份的猎物名录。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

2026 年一项江西山地农业生态系统研究用粪便 DNA 条形码调查中华菊头蝠与皮氏菊头蝠，显示两种蝙蝠的食谱和害虫捕食随月份改变。论文中的“204 个植物属”等结果涉及两种蝙蝠和一个保护区，不能全部归给中华菊头蝠，也不能外推为全球固定服务量。[Zhou et al. 2026](https://doi.org/10.1016/j.agee.2026.110330)

建议 foods：

- 夜间活动的飞行昆虫
- 林下、林缘与冠层附近的小型昆虫
- 从停栖点出击捕获的昆虫
- 局地农业景观中的部分害虫类群

## 活动、社会与繁殖

中华菊头蝠在黄昏后离开栖点，夜间觅食。较冷地区的种群冬眠。雄性可单独栖息，群体规模从少数到数百只；繁殖季雌性会组成产仔群。专论没有提供可靠的孕期、胎数、断奶期或性成熟年龄，档案不应借用其他菊头蝠的数据。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

湘西种群从 9 月中下旬开始聚集冬眠，翌年 3 月底苏醒。当地夏季繁育栖点隐蔽。该研究支持“部分温带种群集群冬眠”和“繁育期依赖低干扰洞段”，不能把具体日期设成全分布区作息。[Wu et al. 2022](https://doi.org/10.5846/stxb202011162947)

一张洞顶群像无法判断个体性别、怀孕、亲子或配偶关系。图说可以写“群栖个体”或“冬眠聚集”，不能根据生成图宣称“母亲与幼仔”。

## 回声定位

中华菊头蝠发出 FM-CF-FM 型叫声：短促调频起始段连接长恒频段，末端再接短调频段。中国和海南记录的峰值频率约 79 至 87 kHz，越南记录约 80 kHz。中国 13 只手持个体的最强能量频率为 80 至 88.2 kHz。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964) [Bats in China species account](https://www.bio.bris.ac.uk/research/bats/China/rhinolophussinicus.htm)

2017 年跨中国和越南的研究发现静息频率随纬度、性别和群体间距离变化，叫声差异没有与所测遗传距离、气候或体型形成简单相关。产品应写“约 80 至 88 kHz 且随地点和性别变化”，不能把 85 kHz 当作物种密码。[Xie et al. 2017](https://doi.org/10.1111/eth.12627)

菊头蝠从鼻孔发出叫声，复杂鼻叶参与声束定向。恒频段帮助它在植被密集的空间检测昆虫翼拍造成的频率变化。图库可以用简洁频谱或说明图表达 FM-CF-FM 结构，但不要把超声波画成肉眼可见的蓝色能量束。

## 冠状病毒宿主研究的证据边界

### 样本检出证明什么

2011 至 2012 年，研究者在云南昆明一处中华菊头蝠群体采集 117 份肛拭子或粪样，27 份经 PCR 和测序确认含 SARS 相关冠状病毒序列。研究者用细胞色素 b 序列核验阳性样本的宿主物种。该结果证明这处群体在采样期排出或携带相关病毒 RNA，不代表五国所有个体具有相同感染率。[Ge et al. 2013](https://doi.org/10.1038/nature12711)

2011 至 2015 年同一洞穴的后续监测从 602 份消化道样本检出 64 份 SARS 相关冠状病毒阳性，其中 57 份的宿主遗传标记指向中华菊头蝠。研究显示一个洞穴内存在多种病毒基因组合；采样地点、季节和宿主群落都会影响检出结果。[Hu et al. 2017](https://doi.org/10.1371/journal.ppat.1006698)

### 分离与受体实验证明什么

Ge 等人从粪样分离出活的 WIV1。细胞实验显示 WIV1 能利用人、果子狸和中华菊头蝠 ACE2 进入细胞。该实验说明病毒具有跨物种受体使用潜力，不等于野外已经发生直接蝙蝠到人的传播，也不提供传播频率。[Ge et al. 2013](https://doi.org/10.1038/nature12711)

### SARS-CoV 与 SARS-CoV-2 不能混写

上述中华菊头蝠研究聚焦 SARS-CoV 相关病毒。2020 年公布的 RaTG13 与 SARS-CoV-2 亲缘较近，其样本宿主为中菊头蝠 `Rhinolophus affinis`。现有证据不能把中华菊头蝠称为 SARS-CoV-2 的直接祖先、零号宿主或已证实来源。[Zhou et al. 2020](https://doi.org/10.1038/s41586-020-2012-7)

产品允许的表达：

- “部分中华菊头蝠种群携带多样的 SARS-CoV 相关冠状病毒。”
- “粪样分离的 WIV1 能在细胞实验中利用人 ACE2。”
- “病毒检出、储存宿主判定、直接祖先和实际溢出是不同证据层次。”

产品拒绝的表达：

- “中华菊头蝠传播新冠”
- “中华菊头蝠就是 SARS-CoV-2 的天然宿主”
- “洞穴里的蝙蝠都带致命病毒”
- “消灭蝙蝠可以消除冠状病毒风险”

## 威胁

权威专论没有识别全范围重大威胁，但指出局地栖点干扰和一般性生境丧失。`LC` 不应掩盖洞穴群体的集中风险：一个洞穴在冬眠或繁育期受扰，可以同时影响许多个体。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

建议 threats：

- 洞穴、废弃隧道和其他群体栖点受到封堵、开采、施工或频繁进入干扰
- 湿润山地森林损失与破碎化减少夜间取食空间和昆虫资源
- 冬眠和繁育季的人为照明、噪声与近距离活动迫使群体耗能或迁离
- 缺少跨国、按当前拆分口径开展的种群趋势与栖点监测
- 疾病污名引发的驱赶或扑杀风险，以及不规范采样造成的人员和动物暴露风险

最后一项属于风险管理判断，不是 IUCN 已量化的全球威胁。正文应写成预防原则，不宣称已经发生大范围扑杀。

## 保护与监测行动

建议 conservationActions：

- 建立重要洞穴和隧道栖点名录，记录季节、群体规模和同洞物种
- 在冬眠与繁育期设置安静区，限制照明、爆破、旅游和重复进入
- 保留洞口周边湿润森林、林缘和水体，维持夜间取食通道
- 修复或封护洞穴时让蝙蝠专家先评估气流、温湿度与出入口
- 用统一声学、红外计数和遗传鉴定协议监测，并把 `R. septentrionalis` 排除在当前统计之外
- 病毒监测采用非致死采样、个人防护、去污染和最少处理时间
- 向公众说明病毒序列检出与实际传播风险的差别，反对因污名驱赶或扑杀蝙蝠
- 补充繁殖、迁移、食谱和五国种群趋势研究，避免用单洞结果代表全物种

保护栖点与病原监测可以同时开展。降低人进入高密度栖点的频率、规范采样并维持健康种群，比无差别驱赶更符合保护和公共卫生目标。

## 可稳定展示的指标

| 指标 | 建议值 | 边界 |
| --- | --- | --- |
| IUCN | 无危，2019 | 趋势暂用未知，待事实表二次核对 |
| 前臂长 | 44.8 至 51.5 mm | 中国 13 只样本，不是全球极值 |
| 体重 | 10 至 12.5 g | 四川 4 只样本，不是全球范围 |
| 回声定位峰值 | 约 80 至 88.2 kHz | 中国手持个体 n=13；随地点与性别变化，不能单独鉴定物种 |
| 海拔 | 500 至 2,769 m | 2019 宽物种概念仍含 `septentrionalis`，展示时必须注释 |

不展示寿命、全球数量、窝仔数、迁移距离或飞行速度。现有物种级来源不足以支持这些数值。

## 六个故事章节草稿

### 1. 鼻叶把声音送进夜色

中华菊头蝠鼻端的马蹄形鼻叶包围鼻孔，中央鞍状叶和后方披针叶共同构成复杂轮廓。它从鼻孔发出超声，鼻叶参与声束定向。红褐毛色会变化，鼻叶、耳朵、体型和叫声需要组合判断物种。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

### 2. 长恒频段捕捉昆虫翼拍

叫声由短调频段、长恒频段和末端调频段组成，最强能量多落在约 80 至 88 kHz。群体、纬度和性别都会改变静息频率。一个数字不能代替形态或遗传鉴定。[Xie et al. 2017](https://doi.org/10.1111/eth.12627)

### 3. 洞穴和森林组成一套生活空间

白天，中华菊头蝠在洞穴、隧道、建筑或树洞休息；黄昏后，它进入湿润山地森林、林缘和林下捕捉昆虫。只保护洞口或只保留林地都无法完整覆盖栖息需求。[Burgin 2019 species treatment](https://doi.org/10.5281/zenodo.3808964)

### 4. 冬眠和繁育需要低干扰洞段

湘西研究记录当地群体从秋季开始聚集冬眠，翌春苏醒，夏季繁育栖点位于隐蔽洞段。该时间表属于一处地区，保护行动可以据当地监测划定安静期。[Wu et al. 2022](https://doi.org/10.5846/stxb202011162947)

### 5. 一份阳性粪样不是一只危险动物

云南纵向调查从部分粪样和肛拭子检出多样的 SARS-CoV 相关病毒，并分离出 WIV1。样本检出、细胞受体实验、野外传播和人类疫情来源需要不同证据。中华菊头蝠不能被简化成病毒标签。[Ge et al. 2013](https://doi.org/10.1038/nature12711)

### 6. 保护洞穴也能减少不必要接触

季节性封护、低干扰监测、非致死采样和洞口森林保护可以降低人蝠接触，同时保留食虫蝙蝠。驱赶或扑杀会破坏群体，也无法消除广泛存在于野生动物中的病毒演化过程。

## 关键事实草稿

- 中华菊头蝠属于翼手目菊头蝠科，接受名为 `Rhinolophus sinicus`。
- 英文主名为 Chinese Rufous Horseshoe Bat；Chinese Horseshoe Bat 和 Little Nepalese Horseshoe Bat 是其他英文名。
- 当前分类口径已把 `Rhinolophus septentrionalis` 拆出，旧亚种资料不能无条件合并。
- 自然分布覆盖中国、印度、缅甸、尼泊尔和越南，不是中国特有种。
- IUCN 2019 全球等级和中国 2020 区域等级均为无危。
- 全球成熟个体数、寿命和可靠繁殖数字没有可展示的物种级资料。
- 湿润山地森林提供取食空间，洞穴和隧道常承担休息、冬眠与繁育功能。
- 它在黄昏后出飞，夜间捕捉昆虫，也会从停栖点出击。
- 回声定位叫声呈 FM-CF-FM 结构，峰值频率随地点和性别变化。
- 中国 13 只样本的前臂长为 44.8 至 51.5 毫米，四川 4 只样本重 10 至 12.5 克；两组数字都不是全球范围。
- 云南局部种群的样本检出多种 SARS-CoV 相关冠状病毒，WIV1 可在细胞实验中利用人 ACE2。
- 现有证据不支持把中华菊头蝠称为 SARS-CoV-2 的直接来源；RaTG13 的宿主记录为中菊头蝠。
- 洞穴干扰和山地森林丧失可威胁局地群体，冬眠和繁育期需要更严格的低干扰管理。

## 六个图像场景与科学约束

以下场景是研究阶段方案。实现采用了更严格的无接触六图契约；实际文件、最终提示词、个体计数和验收结果以 `src/assets/source/species/chinese-rufous-horseshoe-bat/README.md` 为准。

所有图像使用 3:2 横幅、1536 × 1024、自然历史摄影质感。图像需要保持中等体型菊头蝠轮廓、木褐至红褐背毛、较浅腹毛、较小无耳屏耳朵、宽圆膜翼、尾膜和复杂马蹄形鼻叶。鼻叶不能画成一片直立叶子或猪鼻。

### 统一外形提示词

`Chinese rufous horseshoe bat, Rhinolophus sinicus, medium-sized Asian horseshoe bat, wood-brown to warm rufous-brown fur with a paler underside, small rounded ears without a tragus, elaborate flesh-colored horseshoe-shaped noseleaf around the nostrils, nearly parallel-sided central sella, narrow pointed lancet behind it, broad rounded dark gray-brown membrane wings, complete tail membrane, accurate bat feet and thumbs, natural anatomy`

### 统一负面约束

`no vampire fangs, no blood, no rodent incisors, no mouse tail, no fox face, no pig snout, no bird feathers, no giant rabbit ears, no missing tail membrane, no extra wings, no extra legs, no malformed toes, no human-like hands, no glowing eyes, no visible blue sonar beams, no virus icons, no biohazard symbols, no hazmat suits, no cages, no injury, no text, no labels, no watermark, no logo`

### 1. 封面：洞口与湿润山地森林

画面：一只中华菊头蝠倒挂在洞口右侧岩顶，翼膜自然收拢，鼻叶与小耳清晰；洞外可见朦胧湿润山地森林，左侧保留标题负空间。画面只出现一只蝙蝠。

提示词：

`Wide 3:2 natural-history photograph at blue hour, exactly one Chinese rufous horseshoe bat Rhinolophus sinicus hanging upside down from the rocky ceiling on the right side of a limestone cave entrance, wings folded naturally around its medium-sized wood-brown body, paler belly, small rounded ears without tragus, anatomically accurate flesh-colored horseshoe noseleaf with central sella and pointed lancet clearly visible, misty wet montane forest outside the cave, soft cool dusk light and warm reflected cave light, generous uncluttered dark negative space on the left for interface text, sharp animal and realistic stone texture, no other bats, no people. Apply the unified negative constraints.`

科学约束：倒挂姿势由双足承担；双翼收拢，不把翼当作手臂撑地；洞外森林只说明生境组合，不对应真实地点。

### 2. 形态：马蹄形鼻叶近景

画面：一只静止倒挂个体的侧前方近景，完整头部与躯干入镜，鼻叶、无耳屏小耳和红褐毛色可辨。画面只出现一只蝙蝠。

提示词：

`Wide 3:2 scientific wildlife portrait, exactly one live Chinese rufous horseshoe bat Rhinolophus sinicus hanging calmly from a limestone ledge, three-quarter front view with the whole head and torso visible, detailed flesh-colored horseshoe-shaped noseleaf encircling the nostrils, nearly parallel central sella, narrow lancet tapering behind it, small rounded ears without tragus, wood-brown fur with a subtle rufous tint and paler chest, folded dark membrane wings, neutral cave background with shallow depth of field, documentary lighting, no human contact, no other animals. Apply the unified negative constraints.`

科学约束：鼻叶保持三维褶皱，不能变成花瓣、鼻角或一片直叶；不根据毛色宣称唯一鉴定。

### 3. 行为：黄昏出飞与森林边缘

画面：三只中华菊头蝠从小型洞口飞向湿润林缘，主体蝙蝠轮廓完整，另外两只分布在不同距离。画面恰好三只蝙蝠。

提示词：

`Wide 3:2 high-speed natural-history photograph at dusk, exactly three Chinese rufous horseshoe bats emerging from a small limestone cave toward a wet montane forest edge, one foreground bat fully visible in level flight with broad rounded membrane wings, complete tail membrane, small ears and horseshoe noseleaf, two smaller bats at separate distances with no overlap, dark green forest canopy and open flight corridor, realistic motion frozen without blur on the foreground animal, no huge swarm, no people or buildings. Apply the unified negative constraints.`

科学约束：出飞发生在黄昏；画面不宣称群体固定为三只，也不把远处个体用于精细鉴定。

### 4. 声学：林下机动飞行

画面：一只中华菊头蝠穿过枝叶间隙捕捉一只小型飞蛾，双翼和尾膜完整。画面不绘制可见声波。

提示词：

`Wide 3:2 nocturnal wildlife photograph, exactly one Chinese rufous horseshoe bat Rhinolophus sinicus maneuvering through a natural gap in dense wet montane forest understory, broad rounded wings and full tail membrane anatomically complete, mouth closed, elaborate noseleaf pointing forward, one small moth flying just ahead, moonlit leaves and soft infrared-style fill light, realistic cluttered-space flight, no visible sonar waves, no infographic overlay, no other bats. Apply the unified negative constraints.`

科学约束：飞蛾只代表昆虫猎物；不把超声画成光束；图说可解释 FM-CF-FM，但图像本身不是声谱。

### 5. 季节：洞穴冬眠小群

画面：四只中华菊头蝠分别倒挂在深洞顶，翼膜包拢身体，彼此不重叠。画面恰好四只。

提示词：

`Wide 3:2 low-light cave documentary photograph, exactly four Chinese rufous horseshoe bats hibernating upside down from a cool limestone cave ceiling, each bat spatially separate and fully countable, feet attached to rock, wings folded around compact wood-brown bodies, small ears and horseshoe noseleaves visible on the two nearest individuals, subtle condensation and dark undisturbed cave depth, no touching, no flight, no pups, no people, no artificial lights in frame. Apply the unified negative constraints.`

科学约束：图说写“部分较冷地区种群冬眠”；不得判断性别、亲子或繁殖状态；不把湘西日期推广至全范围。

### 6. 保护：非致死测量与记录

画面：两名受训研究人员在洞外布帐内检查一只中华菊头蝠，其中一人戴丁腈手套轻托个体，另一人用卡尺测前臂并记录。只出现一只蝙蝠和两名研究人员。

提示词：

`Wide 3:2 conservation fieldwork photograph, exactly two trained bat biologists and exactly one Chinese rufous horseshoe bat at a clean temporary field station outside a cave at night, one biologist wearing clean nitrile gloves gently supports the calm bat with wings naturally folded, the second biologist measures the forearm with small calipers and writes on a clipboard, both wear plain headlamps pointed away from the animal and simple protective masks, accurate horseshoe noseleaf and wood-brown fur, organized sampling cloth and disinfectant bottle in background, no needle, no blood, no restraint board, no cage, no crowd, no logos. Apply the unified negative constraints.`

科学约束：呈现短时、非致死、低干扰处理；不要显示注射、剪翼、笼养或徒手接触；场景不对应真实项目。

### 图像静态验收

- [ ] 六张图均为 1536 × 1024，PNG 源文件与 WebP 运行时文件一一对应。
- [ ] 逐张核对动物和人物数量，拒绝隐藏、重叠或残缺个体。
- [ ] 封面一只，出飞图三只，冬眠图四只，保护图两人一蝠。
- [ ] 每只主体都有两翼、两足、完整尾膜、两耳和一套鼻叶，没有额外肢体。
- [ ] 鼻叶包含马蹄部、鞍状部和披针叶，未画成猪鼻、花瓣或单片叶。
- [ ] 倒挂个体以足抓住洞顶；休息翼膜收拢，飞行翼膜展开。
- [ ] 所有画面无文字、病毒图标、危险符号、血液和吸血鬼意象。
- [ ] alt、title、caption 只描述画面可见内容，不从生成图判断性别、亲子或感染状态。

## 主要来源清单

### 分类、命名、保护和分布

1. [Mammal Diversity Database: Rhinolophus sinicus](https://www.mammaldiversity.org/taxon/1004746/)
2. [Andersen 1905 original description](https://www.biodiversitylibrary.org/page/31207559)
3. [Mao et al. 2013: Lineage divergence and historical gene flow](https://doi.org/10.1371/journal.pone.0056777)
4. [Mao et al. 2019: Targeted resequencing and species relationships](https://doi.org/10.1016/j.ympev.2019.106551)
5. [IUCN 2019 assessment](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41529A22005184.en)
6. [生态环境部与中国科学院 2023 年公告](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/t20230522_1030745.html)
7. [中国生物多样性红色名录·脊椎动物卷（2020）PDF](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf)

### 形态、活动、食性和栖息

8. [Burgin 2019: Handbook of the Mammals of the World species treatment](https://doi.org/10.5281/zenodo.3808964)
9. [Bats in China: Rhinolophus sinicus account](https://www.bio.bris.ac.uk/research/bats/China/rhinolophussinicus.htm)
10. [Xie et al. 2017: Geographic variation in echolocation calls](https://doi.org/10.1111/eth.12627)
11. [Wu et al. 2022: Roost ecology in 16 caves of Xiangxi](https://doi.org/10.5846/stxb202011162947)
12. [Zhou et al. 2026: Seasonal diets in a South China agroecosystem](https://doi.org/10.1016/j.agee.2026.110330)

### 冠状病毒宿主证据与边界

13. [Ge et al. 2013: Isolation of WIV1 and ACE2 use](https://doi.org/10.1038/nature12711)
14. [Hu et al. 2017: Five-year surveillance of one Yunnan cave](https://doi.org/10.1371/journal.ppat.1006698)
15. [Zhou et al. 2020: RaTG13 from Rhinolophus affinis](https://doi.org/10.1038/s41586-020-2012-7)

## `SpeciesSource` 研究候选集

```ts
const CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE = '2026-08-24' as const;

const CHINESE_RUFOUS_HORSESHOE_BAT_SOURCES = [
  {
    title: 'Mammal Diversity Database: Rhinolophus sinicus',
    url: 'https://www.mammaldiversity.org/taxon/1004746/',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Andersen 1905: Original description of Rhinolophus rouxi sinicus',
    url: 'https://www.biodiversitylibrary.org/page/31207559',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2013: Lineage divergence and historical gene flow',
    url: 'https://doi.org/10.1371/journal.pone.0056777',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2019: Relationships among six horseshoe bat taxa',
    url: 'https://doi.org/10.1016/j.ympev.2019.106551',
    kind: 'taxonomy',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'IUCN 2019: Rhinolophus sinicus assessment',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T41529A22005184.en',
    kind: 'conservation',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'China Biodiversity Red List: Vertebrates, 2020',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Burgin 2019: Chinese Rufous Horseshoe Bat species treatment',
    url: 'https://doi.org/10.5281/zenodo.3808964',
    kind: 'general',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Bats in China: Rhinolophus sinicus morphology and calls',
    url: 'https://www.bio.bris.ac.uk/research/bats/China/rhinolophussinicus.htm',
    kind: 'general',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Xie et al. 2017: Geographic variation in echolocation calls',
    url: 'https://doi.org/10.1111/eth.12627',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Wu et al. 2022: Roost ecology and population conservation in Xiangxi',
    url: 'https://doi.org/10.5846/stxb202011162947',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2026: Seasonal diet and pest predation in South China',
    url: 'https://doi.org/10.1016/j.agee.2026.110330',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Ge et al. 2013: Isolation of a bat SARS-like coronavirus using ACE2',
    url: 'https://doi.org/10.1038/nature12711',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Hu et al. 2017: SARS-related coronavirus diversity in one Yunnan cave',
    url: 'https://doi.org/10.1371/journal.ppat.1006698',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
  {
    title: 'Zhou et al. 2020: SARS-CoV-2-related coronavirus from R. affinis',
    url: 'https://doi.org/10.1038/s41586-020-2012-7',
    kind: 'ecology',
    accessedAt: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段 `Species` 对象草稿

该对象按当前 `Species` schema 映射研究结论。IUCN 趋势和拆分后的海拔范围仍需实现者二次核对。图片路径、焦点和图说可在生成后按实际画面微调。

```ts
const chineseRufousHorseshoeBat = {
  id: 'species-rhinolophus-sinicus',
  slug: 'chinese-rufous-horseshoe-bat',
  names: {
    zh: '中华菊头蝠',
    en: 'Chinese Rufous Horseshoe Bat',
    aliases: ['Chinese Horseshoe Bat', 'Little Nepalese Horseshoe Bat', '鲁氏菊头蝠（旧称）'],
  },
  scientificName: 'Rhinolophus sinicus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Mammalia', '哺乳纲'),
    taxon('Chiroptera', '翼手目'),
    taxon('Rhinolophidae', '菊头蝠科'),
    taxon('Rhinolophus', '菊头蝠属'),
  ),
  conservation: conservation('LC', 'unknown', 2019),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '中国中南部、东南部与西南部湿润山地',
      '喜马拉雅东段和北印度山地',
      '尼泊尔中东部山地',
      '缅甸北部湿润森林',
      '越南北部至中部山地',
    ],
    countries: ['中国', '印度', '缅甸', '尼泊尔', '越南'],
    range:
      '分布于中国中南部、东南部和西南部，以及北印度、尼泊尔、缅甸北部与越南北部至中部的湿润山地。当前分类口径已把 Rhinolophus septentrionalis 拆出，旧资料中的云南范围需要重新核对。2019 年宽物种概念记录海拔 500 至 2,769 米。',
    center: { lat: 27.5, lng: 105 },
  },
  habitats: [
    {
      name: '湿润山地森林',
      realm: 'terrestrial',
      description:
        '降雨较多的山地林、林缘和林下提供夜飞昆虫与可机动的取食空间。',
      isPrimary: true,
    },
    {
      name: '洞穴与废弃隧道',
      realm: 'terrestrial',
      description:
        '黑暗、温湿度合适且少受干扰的洞段承担白天休息、冬眠和部分繁育功能。',
    },
    {
      name: '次生林、竹林与林农镶嵌',
      realm: 'terrestrial',
      description:
        '可在受扰山地景观活动，但仍依赖可用栖点、森林结构和持续的昆虫资源。',
    },
    {
      name: '建筑、井与树洞栖点',
      realm: 'terrestrial',
      description:
        '部分个体利用寺庙、房屋、井和树洞；这些补充栖点不能代表全部种群。',
    },
  ],
  measurements: {
    length: {
      min: 43,
      max: 53.5,
      unit: 'mm',
      note: '2019 专论的头体长；来源仍采用包含 R. septentrionalis 的宽物种概念',
    },
    weight: {
      min: 10,
      max: 12.5,
      unit: 'g',
      note: '四川 4 只个体的地区样本，不作为全球范围',
    },
  },
  diet: {
    types: ['insectivore'],
    foods: [
      '夜间活动的飞行昆虫',
      '林下、林缘与冠层附近的小型昆虫',
      '从停栖点出击捕获的昆虫',
      '局地农业景观中的部分害虫类群',
    ],
    description:
      '在湿润山地森林和林缘空中追捕昆虫，也会从停栖点出击。食谱随地点和季节改变，单个农业生态系统的猎物比例不能外推至五国范围。',
  },
  activity: [
    '黄昏后离开栖点，夜间在森林、林缘和林农镶嵌中捕食昆虫',
    '从鼻孔发出 FM-CF-FM 型超声叫声，峰值频率随地点和性别变化',
    '白天单独或成群栖息于洞穴、隧道、建筑、井和树洞',
    '较冷地区的种群冬眠，繁育期雌性可组成大型产仔群',
    '用宽圆翼在植被密集空间机动飞行，并在空中追捕或从停栖点出击',
  ],
  tags: [
    '翼手目',
    '菊头蝠科',
    '亚洲',
    '湿润山地森林',
    '洞穴栖息',
    '夜行性',
    '食虫动物',
    '回声定位',
    'FM-CF-FM 叫声',
    '部分种群冬眠',
    'IUCN 无危',
    '种群趋势待核对',
  ],
  summary:
    '以复杂马蹄形鼻叶发出恒频超声，在湿润山地森林捕虫，并把洞穴的低干扰环境用于休息、冬眠和繁育的亚洲菊头蝠。',
  description:
    '中华菊头蝠是分布于中国、印度、缅甸、尼泊尔和越南的中型食虫蝙蝠。木褐至红褐背毛、较浅腹毛、小耳和复杂马蹄形鼻叶构成外形组合。它在黄昏后离开洞穴、隧道或其他栖点，以宽圆翼穿过湿润山地森林的林缘和林下，发出短调频段连接长恒频段的 FM-CF-FM 叫声来定位昆虫。较冷地区的种群会冬眠，繁育期雌性可组成产仔群，但现有资料不足以给出覆盖全范围的繁殖数字。云南局部种群的样本曾检出多种 SARS-CoV 相关冠状病毒；这些结果不证明中华菊头蝠是 SARS-CoV-2 的直接来源，也不能成为驱赶或扑杀的理由。保护重点是低干扰栖点、洞口周边森林和规范的非致死监测。',
  storySections: [
    {
      key: 'noseleaf-sound',
      label: '形态',
      title: '鼻叶把声音送进夜色',
      body:
        '马蹄形鼻叶包围鼻孔，中央鞍状叶和后方披针叶形成复杂轮廓。中华菊头蝠从鼻孔发出超声，鼻叶参与声束定向。红褐毛色会变化，物种鉴定需要同时查看鼻叶、体型、翼指和遗传信息。',
    },
    {
      key: 'cf-call',
      label: '声学',
      title: '长恒频段捕捉昆虫翼拍',
      body:
        '叫声由短调频段、长恒频段和末端调频段组成，最强能量多在约 80 至 88 千赫。群体、纬度和性别都会改变频率，一个数字不能代替形态或遗传鉴定。',
    },
    {
      key: 'cave-and-forest',
      label: '生境',
      title: '洞穴和森林组成一套生活空间',
      body:
        '白天，中华菊头蝠在洞穴、隧道、建筑或树洞休息；黄昏后，它进入湿润山地森林、林缘和林下捕捉昆虫。栖点和取食地之间的通道也需要保留。',
    },
    {
      key: 'seasonal-roost',
      label: '季节',
      title: '冬眠和繁育需要低干扰洞段',
      body:
        '湘西研究记录当地群体从秋季聚集冬眠，翌春苏醒，夏季繁育栖点位于隐蔽洞段。具体时间属于地区种群，保护人员应依据每处洞穴的监测划定安静期。',
    },
    {
      key: 'virus-evidence',
      label: '证据边界',
      title: '一份阳性粪样不是一只危险动物',
      body:
        '云南纵向调查从部分粪样和肛拭子检出 SARS-CoV 相关病毒，并从粪样分离出 WIV1。样本检出、细胞受体实验、野外传播和疫情来源需要不同证据，不能把整个物种缩写成病毒标签。',
    },
    {
      key: 'roost-and-health',
      label: '保护',
      title: '保护洞穴也能减少不必要接触',
      body:
        '季节性封护、低干扰监测、非致死采样和洞口森林保护可以减少人蝠接触。规范调查同时保护群体并提高病原数据质量，无差别驱赶会破坏栖点和长期监测。',
    },
  ],
  keyFacts: [
    '中华菊头蝠属于翼手目菊头蝠科，接受名为 Rhinolophus sinicus。',
    '当前分类口径已把 Rhinolophus septentrionalis 拆出，旧亚种资料不能无条件合并。',
    '分布覆盖中国、印度、缅甸、尼泊尔和越南，不是中国特有种。',
    'IUCN 2019 全球等级与中国 2020 区域等级均为无危；全球趋势仍需从当前事实表二次核对。',
    '湿润山地森林提供取食空间，洞穴和隧道常承担休息、冬眠与繁育功能。',
    '它在黄昏后出飞，夜间捕捉昆虫，也会从停栖点出击。',
    '回声定位叫声呈 FM-CF-FM 结构，峰值频率随地点和性别变化。',
    '中国 13 只样本的前臂长为 44.8 至 51.5 毫米，不能当作全球极值。',
    '四川 4 只样本重 10 至 12.5 克，现有资料不支持全球体重范围。',
    '云南局部种群样本检出多种 SARS-CoV 相关冠状病毒，WIV1 可在细胞实验中利用人 ACE2。',
    '现有证据不支持把中华菊头蝠称为 SARS-CoV-2 的直接来源，RaTG13 的宿主记录为中菊头蝠。',
    '洞穴干扰和山地森林丧失可威胁局地群体，冬眠和繁育期需要低干扰管理。',
  ],
  threats: [
    '洞穴、废弃隧道和其他群体栖点受到封堵、开采、施工或频繁进入干扰',
    '湿润山地森林损失与破碎化减少夜间取食空间和昆虫资源',
    '冬眠和繁育季的人为照明、噪声与近距离活动迫使群体耗能或迁离',
    '缺少跨国、按当前拆分口径开展的种群趋势与栖点监测',
    '疾病污名引发驱赶或扑杀，以及不规范采样增加人员和动物暴露风险',
  ],
  conservationActions: [
    '建立重要洞穴和隧道栖点名录，记录季节、群体规模和同洞物种',
    '在冬眠与繁育期设置安静区，限制照明、爆破、旅游和重复进入',
    '保留洞口周边湿润森林、林缘和水体，维持夜间取食通道',
    '修复或封护洞穴前评估气流、温湿度和出入口，避免把蝙蝠封在洞内',
    '用统一声学、红外计数和遗传鉴定协议监测，并排除 R. septentrionalis 的混入',
    '病毒监测采用非致死采样、个人防护、去污染和最少处理时间',
    '向公众说明病毒序列检出与实际传播风险的差别，反对因污名驱赶或扑杀',
    '补充繁殖、迁移、食谱和五国种群趋势研究，避免单洞结果代表全物种',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'iucn-status',
      label: 'IUCN',
      value: '无危',
      note: '2019 年全球评估；趋势字段待当前事实表二次核对',
    },
    {
      key: 'forearm-length',
      label: '前臂长',
      value: '44.8 至 51.5',
      unit: '毫米',
      note: '中国 13 只样本，不是全球极值',
    },
    {
      key: 'body-mass',
      label: '体重',
      value: '10 至 12.5',
      unit: '克',
      note: '四川 4 只样本，不是全球范围',
    },
    {
      key: 'echolocation-peak',
      label: '回声定位峰值',
      value: '约 80 至 88.2',
      unit: '千赫',
      note: '中国手持个体 n=13；随地点和性别变化',
    },
  ],
  media: {
    image: './images/species/chinese-rufous-horseshoe-bat/01-cave-forest-portrait.webp',
    alt: '一只红褐色中华菊头蝠倒挂在石灰岩洞口，身后是黄昏中的湿润山地森林',
    focalPoint: { x: 0.72, y: 0.48 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/chinese-rufous-horseshoe-bat/02-horseshoe-noseleaf.webp',
        alt: '一只倒挂中华菊头蝠的侧前方近景，马蹄形鼻叶、小耳和红褐毛色清晰可见',
        title: '把超声送出鼻孔的复杂鼻叶',
        caption:
          '马蹄部、鞍状部和披针叶共同构成鼻叶；毛色与频率都会变化，不能依靠单一特征完成物种鉴定。',
        focalPoint: { x: 0.53, y: 0.46 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-rufous-horseshoe-bat/03-emergence-at-forest-edge.webp',
        alt: '三只中华菊头蝠在黄昏从小型洞口飞向湿润森林边缘',
        title: '黄昏连接栖点与取食地',
        caption:
          '中华菊头蝠在黄昏后离开日栖点，进入森林、林缘和林农镶嵌捕食昆虫；三只只代表画面计数。',
        focalPoint: { x: 0.54, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-rufous-horseshoe-bat/04-echolocation-in-clutter.webp',
        alt: '一只中华菊头蝠展开宽圆膜翼穿过湿润林下枝叶，前方有一只小飞蛾',
        title: '在枝叶间监听昆虫翼拍',
        caption:
          'FM-CF-FM 叫声适合在植被密集空间探测昆虫；画面没有把超声画成肉眼可见的光束。',
        focalPoint: { x: 0.48, y: 0.51 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-rufous-horseshoe-bat/05-hibernation-colony.webp',
        alt: '四只中华菊头蝠分开倒挂在深洞顶，翼膜收拢包住身体',
        title: '低干扰洞段里的冬眠小群',
        caption:
          '部分较冷地区种群会冬眠。具体聚集时间随地区变化，画面不能用于判断个体性别或繁殖状态。',
        focalPoint: { x: 0.51, y: 0.46 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image: './images/species/chinese-rufous-horseshoe-bat/06-nonlethal-health-surveillance.webp',
        alt: '两名戴防护用品的研究人员在洞外短时测量一只翼膜收拢的中华菊头蝠',
        title: '低干扰测量与规范健康监测',
        caption:
          '非致死采样、个人防护、去污染和短处理时间同时保护研究人员与蝙蝠；场景不对应真实项目。',
        focalPoint: { x: 0.5, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: CHINESE_RUFOUS_HORSESHOE_BAT_SOURCES,
  featured: true,
  publishedAt: '2026-08-24',
  updatedAt: '2026-08-24',
} as const satisfies Species;
```

## TODO 收尾验收

### 研究与数据

- [x] 接受名、中文主名、英文主名和别名已按 MDD 与中国官方名录核验。
- [x] 当前分类边界明确排除 `Rhinolophus septentrionalis`。
- [x] IUCN 全球等级和评估年已核验，趋势字段标记为实现前二次核对。
- [x] 中国官方 2020 区域等级已从 PDF 第 20 页核验为 `LC`。
- [x] 国家范围按 MDD 使用中国、印度、缅甸、尼泊尔和越南。
- [x] 测量值区分宽历史物种概念、地区样本和全球范围。
- [x] 食性、活动、冬眠和繁殖内容没有借用其他菊头蝠物种数字。
- [x] 回声定位频率保留地点、性别和识别重叠边界。
- [x] 冠状病毒章节区分样本检出、宿主核验、病毒分离、受体实验和实际溢出。
- [x] 档案明确排除“中华菊头蝠是 SARS-CoV-2 直接来源”的无证据表述。
- [x] `SpeciesSource` 候选集和完整 `Species` 对象草稿已提供。

### 图像与资源

- [x] 建立 `src/assets/source/species/chinese-rufous-horseshoe-bat/README.md`，写入实际六图提示词与验收结果。
- [x] 生成六张 1536 × 1024 的 `*-source.png`，逐张确认动物与人物计数。
- [x] 检查鼻叶、耳朵、翼膜、尾膜、足和倒挂姿势，不接受啮齿动物、鸟或吸血鬼轮廓。
- [x] 依仓库流程压缩源 PNG，并生成运行时 WebP。
- [x] 在 `public/images/species/chinese-rufous-horseshoe-bat/` 放置六张 WebP。
- [x] 对 PNG 与 WebP 执行尺寸、格式、alpha、文件大小和静态视觉检查。
- [x] 确认封面左侧负空间、焦点和所有图库文案与画面一致。

### 代码、测试和 TODO

- [x] 当前 IUCN 趋势字段无法经事实表或 API 直接抽取，保守锁定为 `unknown`，不由 `LC` 推断为稳定。
- [x] 把来源数组、中华菊头蝠物种对象和日期常量落入 `src/data/species.ts`。
- [x] 确认新分类单元恰好为 Chiroptera、Rhinolophidae、Rhinolophus 三个。
- [x] 更新 `tests/taxonomy.test.mjs` 的物种数、分类节点数、哺乳纲和祖先聚合预期。
- [x] 为 slug、六张媒体路径、IUCN 年份、拆分口径、图片 credit 和关键字段增加断言。
- [x] 更新 `src/assets/source/README.md` 索引。
- [x] 从 `docs/todo.md` 删除中华菊头蝠，并更新现有物种档案数、哺乳纲数量和剩余数量。
- [x] 运行测试、类型检查、生产构建和 `git diff --check`。
- [x] 检查构建产物包含六张 WebP，且不存在缺失或重名资源。

研究稿中的 `[x]` 表示证据底稿已经核对；图像、代码、测试、TODO 和构建全部通过后，才能把该物种视为完成。
