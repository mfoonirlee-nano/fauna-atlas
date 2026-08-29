# 大西洋海神海蛞蝓（*Glaucus atlanticus*）档案研究

- 检索与核验日期：2026-08-29
- 推荐展示中文名：**大西洋海神海蛞蝓**
- 推荐展示英文名：**Atlantic Blue Sea Slug**
- 当前接受名：***Glaucus atlanticus* Forster, 1777**
- WoRMS AphiaID：**140022**
- 推荐 slug：`atlantic-blue-sea-slug`
- IUCN：**NE，未评估；趋势 unknown；不填评估年份或准则**
- 分类口径：本物种是细长、鳃突单列排列的 ***G. atlanticus***。不要把体形较短、鳃突多列的 ***Glaucilla marginata*** 或其他 *Glaucilla* 物种混入图片、分布和生态数据
- 使用范围：把 `docs/todo.md` 中“大西洋海神海蛞蝓 *Glaucus atlanticus*”落实为完整物种档案、六段故事、四项展示数字、1 张封面与 5 张详情图

## 可落库结论

大西洋海神海蛞蝓是一种终生生活在海洋表层的裸鳃类。它吞入空气并把气体留在胃腔，倒置悬挂在海气界面下方。蓝色足面和腹面朝向天空，银白色真背面朝向深水。它并非主动横渡大洋的强游泳者，风、海流、表层辐合带和环流共同决定其大尺度漂移。[Churchill et al. 2014a](https://doi.org/10.1071/IS13038) [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5)

主要野外猎物是同样漂在海面的刺胞动物，包括僧帽水母属 *Physalia*、帆水母 *Velella velella* 和银币水母 *Porpita porpita*。被吞下而尚未发射的刺丝囊可进入鳃突末端的刺胞囊，在专门细胞内保存并用于防御，这叫盗刺细胞或 kleptocnidy。资料支持“可能造成疼痛性刺伤，避免徒手触碰”，不支持“比僧帽水母更毒”“主动筛选并浓缩最强毒刺”或“对人必然致命”。[Thompson & Bennett 1969](https://doi.org/10.1126/science.166.3912.1532) [Thompson & Bennett 1970](https://doi.org/10.1111/j.1096-3642.1970.tb00735.x) [Goodheart et al. 2018](https://doi.org/10.1186/s12983-018-0289-2) [Yamamoto et al. 2025](https://doi.org/10.1002/ecy.70062)

结构化保护字段建议写：

```ts
conservation('NE', 'unknown')
```

截至检索日，IUCN Red List 公开检索没有该分类单元的正式评估页。IUCN 不把 NE 分类单元作为已评估记录发布，因此这里的 `NE` 是产品对“尚未评估”的明确表达，不是 IUCN 发布的一份 NE 评估。它也不等于 DD。DD 表示已经评估但资料不足，NE 表示尚未经过 IUCN 评估。[IUCN species search](https://www.iucnredlist.org/search?query=Glaucus%20atlanticus&searchType=species) [IUCN FAQ](https://nrl.iucnredlist.org/about/faqs) [IUCN Categories and Criteria](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf)

体长字段推荐采用文献汇总的最大报道值 **43 毫米**。WoRMS 的说明文字另写“可达 6 厘米”，但没有在该记录中给出标本、测量口径或原始出处。西南大西洋一次搁浅事件的具体样本多在 15 至 35 毫米。为了避免把缺少测量背景的 6 厘米当成规范化上限，`measurements.length.max` 建议填 43 毫米，并在注释中保留 WoRMS 的差异。不要虚构成年最小值、典型体重或寿命。[Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Naturalis Pelagic Molluscs](https://pelagic-molluscs.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=116646) [Pinotti et al. 2019](https://doi.org/10.1590/0001-3765201920180154)

## 分类、名称与物种边界

### 接受名与六级分类

MolluscaBase 经 WoRMS 接受 ***Glaucus atlanticus* Forster, 1777**，AphiaID 140022。该记录标为海生，不标为淡水、半咸水或陆生。[WoRMS accepted taxon](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022)

| 分类阶元 | 学名 | 推荐中文 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Mollusca | 软体动物门 |
| 纲 | Gastropoda | 腹足纲 |
| 目 | Nudibranchia | 裸鳃目 |
| 科 | Glaucidae | 海神鳃科 |
| 属 | *Glaucus* | 海神鳃属 |
| 种 | *Glaucus atlanticus* | 大西洋海神海蛞蝓 |

WoRMS 的完整链还经过 Heterobranchia、Euthyneura、Ringipleura、Nudipleura、Aeolidina 和 Aeolidioidea 等中间分类阶元。仓库只需要 kingdom、phylum、class、order、family、genus 六层，不能用 Heterobranchia 覆盖 class，也不能用 Aeolidina 覆盖 order。[WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140022)

### 中文名与英文名

项目 TODO 已采用“大西洋海神海蛞蝓”，台湾海洋保育署和台湾生物多样性网络也可用于中文检索核验。英文主名建议用 Atlantic Blue Sea Slug，常见别名包括 Blue Dragon、Blue Glaucus、Sea Swallow、Blue Sea Dragon 和 Blue Angel。[台湾海洋保育署](https://www.oca.gov.tw/ch/home.jsp?dataserno=202202240024&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386) [台湾生物多样性网络](https://www.tbn.org.tw/taxa/14360400-1030-41a4-a736-981189b75319)

### 与 *Glaucilla* 的边界

2014 年的系统学修订在当时的属级口径下，把四个较小的隐蔽种写作 *Glaucus marginatus*、*G. bennettae*、*G. mcfarlanei* 和 *G. thompsoni*。当前 WoRMS 已接受组合 ***Glaucilla marginata***、***Glaucilla bennettae***、***Glaucilla mcfarlanei*** 和 ***Glaucilla thompsoni***。实施时应采用当前数据库的属名，同时把 2014 年论文看作形态和分子物种界证据，不能机械复制其旧组合。[Churchill et al. 2014a](https://doi.org/10.1071/IS13038) [WoRMS, *Glaucilla marginata*](https://www.marinespecies.org/aphia.php?p=taxdetails&id=534056)

大西洋海神海蛞蝓的关键诊断包括：

- 细长、扁平的身体和明显渐尖的长尾，头部短而不突出。
- 两根短口触角和两根很短的嗅角，不画脊椎动物式大眼。
- 每侧四组鳃突。前三组生在明显的侧向柄上，最后一组小而无柄，贴近尾部。
- 每一鳃突组沿支轴单列排列，即 uniseriate。常见“三对翅膀”说法只数了前三组显眼的柄状结构，漏掉后方小组。
- 鳃突为细长圆锥形，基部银蓝，尖端深蓝。
- 足底中央有一条纵向银色带，这是 2014 年修订列出的诊断特征之一。
- 生殖系统具有阴茎刺。该内部特征不需要在通常的外观图中显示。

较小的 *Glaucilla* 物种通常身体短、尾短，鳃突在每个簇中多列而密集。不能用这种“蓝色绒球”外形代替本种。2014 年研究还给出 COI 和 16S 分子诊断位点，说明单靠蓝色不能鉴定物种。[Churchill et al. 2014a](https://doi.org/10.1071/IS13038)

**三组与四组的稳妥表述**：1990 年行为论文概述为每侧 3 至 4 个簇；2014 年系统学重描述明确写每侧 4 组，前三组有柄，最后一组无柄。第四组小而靠后，在照片中容易被尾部或前方鳃突遮住。产品文案不要只写“三对翅膀”，建议固定为：**每侧有三组显眼的有柄鳃突，另有一组较小的后方无柄鳃突，共四组；左右对应时，前三组形成常被俗称为“三对蓝翼”的六个侧向结构。**[Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Churchill et al. 2014a](https://doi.org/10.1071/IS13038)

2014 年论文内部还有一个需要保留的文字冲突：摘要和物种诊断均把本种写成 `uniseriate`，同篇外部解剖段却出现一次 `multiseriate`。论文对近似种的比较、核心诊断和后续资料都采用单列特征，因此结构化文案和图像验收仍按“鳃突沿支轴单列”处理，同时不要把那一处相反文字隐藏成不存在的证据一致性。

## IUCN 状态与保护字段

| 项目 | 建议值 | 理由 |
| --- | --- | --- |
| `code` | `NE` | IUCN 公开检索未找到正式物种评估 |
| `trend` | `unknown` | 没有可外推至全球的种群趋势资料 |
| `assessedYear` | 不填 | 查询日期不是评估年份，NE 也没有评估年 |
| `criteria` | 不填 | 没有适用的 IUCN 准则字符串 |
| `estimatedMatureIndividuals` | 不填 | 没有全球成熟个体估计 |
| `threats` | `[]` | 尚无经过物种级量化或排序的全球威胁 |

IUCN 定义中的 NE 和 DD 不能互换。IUCN 搜索无结果只支持“未找到评估记录”，不支持 LC、DD、种群稳定或安全。页面应写清：**IUCN 尚未评估，全球数量和趋势未知。**[IUCN species search](https://www.iucnredlist.org/search?query=Glaucus%20atlanticus&searchType=species) [IUCN Categories and Criteria](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf)

## 分布、海流与生境

### 全球范围不是全球随机交配

系统学样本支持本种横跨热带和亚热带大西洋、印度洋与太平洋。随后一项群体遗传研究分析了来自五个副热带环流区的 98 个个体，即北大西洋、南大西洋、北太平洋、南太平洋和印度洋。结果不支持一个全球完全随机交配种群。非洲与欧亚大陆、美洲大陆，以及北极和南大洋的冷水，都会限制洋盆间基因流；同一洋盆内的连接相对更强。[Churchill et al. 2014a](https://doi.org/10.1071/IS13038) [Churchill et al. 2014b](https://doi.org/10.1007/s00227-014-2389-7)

地中海西部和中部有可信记录，但这不等于整个地中海都是连续高密度核心区。WoRMS 的分布条目还覆盖加勒比海、墨西哥湾、夏威夷、新西兰、莫桑比克、南非的大西洋与印度洋岸，以及其他热带或亚热带海域。结构化 `countries` 只能列代表性有凭证的沿岸国家，不能让国家列表看起来像它主要生活在领海或海滩。[WoRMS accepted taxon](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022)

### 风、环流与搁浅

本种是 holoplanktonic 或全生活史远洋表层动物，正常生境不依赖海底底质。巴西南部和乌拉圭沿岸记录显示，暖流、季节性副热带辐合、风和风暴可以把表层动物推入陆架并冲上岸。2017 年事件中的个体体长约 15 至 35 毫米，局部可达每延米 20 只。这个数字描述一次风暴后的搁浅带，不是全球密度，也不能证明种群暴增。[Pinotti et al. 2019](https://doi.org/10.1590/0001-3765201920180154)

海滩因此应标作**搁浅地点**，不是 primary habitat。单次大规模上岸也不能直接判为气候变化、污染、繁殖聚集或种群崩溃，必须同时记录风、海流、海温、猎物和观测努力量。

### 推荐 distribution

```ts
distribution: {
  realms: ['marine'],
  continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
  regions: [
    '北大西洋副热带环流区',
    '南大西洋副热带环流区',
    '北太平洋副热带环流区',
    '南太平洋副热带环流区',
    '印度洋副热带环流区',
    '西部与中部地中海零散海面记录',
  ],
  countries: [
    '澳大利亚',
    '新西兰',
    '南非',
    '莫桑比克',
    '印度',
    '日本',
    '中国',
    '美国',
    '墨西哥',
    '巴西',
    '乌拉圭',
    '西班牙',
    '阿尔及利亚',
    '突尼斯',
  ],
  range:
    '分布于大西洋、印度洋和太平洋的热带与亚热带海气界面，五个副热带环流区均有分子采样。不同洋盆间存在基因流屏障，不能写成全球完全随机交配种群。西部和中部地中海有零散记录；沿岸与海滩观察多由风、海流和风暴输送形成。国家列表仅列代表性有凭证沿岸国家，不是完整名录。',
  center: { lat: 32, lng: -65 },
}
```

`center` 取百慕大附近的北大西洋海面，方便地图镜头展示，也与现代自然史观察地点相近。它不是分布质心、模式产地或种群中心。

### 推荐 habitats

1. **热带与亚热带海气界面，primary，marine**：倒置悬挂在海面薄层下，吞入空气维持浮力，与其他蓝色表层漂浮生物共同出现。
2. **副热带环流与表层辐合带，marine**：海流和风可同时聚集本种、猎物和其他漂浮物。聚集强度随时间和海况改变。
3. **风驱外陆架与近岸表层水，marine**：风暴或持续向岸风可把个体输送至陆架、浪区和海滩。这里是暂时运输带和搁浅终点，不是典型底栖或潮间带生境。

## 外形、体尺与朝向

### 外部形态

- 成体无外壳、无鱼鳍、无章鱼式腕、无海兔式宽大侧足，也无典型多枝背鳃花冠。
- 身体细长而扁，尾部逐渐尖细。银白和蓝色来自自然组织反射与色素，不是生物发光。
- 前端只有短小口触角和嗅角。眼很小，不应表现成卡通大眼或明显脊椎动物眼球。
- 每侧四组鳃突，前三组位于长柄上并形成六个显眼侧向结构，第四组较小且无柄。
- 每组鳃突沿支轴单列，不画成多层密集羽毛、珊瑚分枝或龙翼。
- 真背面朝下，通常银白；蓝色足底与腹面朝上，足中央保留纵向银色带。

[Churchill et al. 2014a](https://doi.org/10.1071/IS13038)

### 体尺口径

推荐 measurements：

```ts
measurements: {
  length: {
    max: 43,
    unit: 'mm',
    note:
      'Ross & Quetin 汇总及 Naturalis 物种页采用的最大报道体长。WoRMS 说明文字另写可达 6 cm，但未给测量个体和原始口径；15–35 mm 是巴西、乌拉圭一次搁浅事件的样本范围，不是全种成年范围。',
  },
}
```

不建议填 `metrics.adultLengthCm`。43 毫米是最大报道值，不是成年范围；15 至 35 毫米是单次事件样本；“常见约 3 至 4 厘米”适合概述，不足以形成可排序的全球成年区间。体重、寿命、游速、潜水深度和成熟个体数都留空。[Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Naturalis Pelagic Molluscs](https://pelagic-molluscs.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=116646) [Pinotti et al. 2019](https://doi.org/10.1590/0001-3765201920180154)

## 倒置漂浮与反向保护色

大西洋海神海蛞蝓吞下空气，把气泡留在几丁质化的胃腔中。气体提供主要浮力，扁平身体、鳃突与海面薄层共同帮助它维持位置。鳃突不是外置气球，也不能画一个透明泡囊把动物吊住。[Churchill et al. 2014a](https://doi.org/10.1071/IS13038) [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5) [Yamamoto et al. 2025](https://doi.org/10.1002/ecy.70062)

它以腹面朝上的姿态悬在海面下。对从空中向下看的观察者，蓝色足面靠近蓝色海面；对从水下向上看的观察者，银白真背面接近受光水面。这个颜色和朝向符合反向保护色的解释，但尚无针对本种捕食风险的直接实验。页面可以说“通常被解释为反向保护色”，不能说已经证明能减少某一固定比例的捕食。[Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Churchill et al. 2014a](https://doi.org/10.1071/IS13038)

本种能沿海面薄层移动并借鳃突操控猎物，但不是强游泳者。全球分布主要由风驱表流和环流塑造。不要给它鱼式推进、翅膀拍击、主动深潜或精准跨洋导航能力。

## 食性、捕食与盗刺细胞

### 野外核心食谱

推荐 diet：

```ts
diet: {
  types: ['carnivore'],
  foods: ['僧帽水母属 Physalia', '帆水母 Velella velella', '银币水母 Porpita porpita'],
  description:
    '海面肉食者，主要捕食与其共同漂流的刺胞动物。它可爬到猎物下方啃食水螅体，并用前部鳃突抓握和调整猎物。未发射的刺丝囊可经消化系统转移到鳃突末端的刺胞囊中，用于防御。水族实验观察到更广的机会性捕食，但不能据此把鱼类写成固定野外食物。',
}
```

Thompson 与 Bennett 的实验和解剖资料记录其摄食 *Velella*、*Physalia* 和 *Porpita*，并把来自 *Physalia* 的刺丝囊用于防御。Helm 在百慕大观察到一个体同时吃 *Physalia* 和 *Velella*，它爬到猎物下方取食水螅体，并用鳃突固定或转动食物。单个实验个体不能给出野外猎物比例。[Thompson & Bennett 1969](https://doi.org/10.1126/science.166.3912.1532) [Thompson & Bennett 1970](https://doi.org/10.1111/j.1096-3642.1970.tb00735.x) [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5)

2025 年研究在日本样本中观察到前部鳃突像手一样抓握活体猎物，组织切片也在鳃突末端的刺胞囊和刺细胞吞噬细胞中找到来自 *Physalia* 的刺丝囊。水族投喂时，个体吃了多种刺胞动物，也捕捉活白饵鱼，但不吃所试栉水母。作者据此提出更广的机会性捕食能力，同时明确指出野外食谱仍需肠道内容物或分子方法核验。档案可写“水族条件下捕捉小鱼”，不能把鱼类放进核心 foods。[Yamamoto et al. 2025](https://doi.org/10.1002/ecy.70062)

### 盗刺细胞机制与安全边界

“盗刺细胞”不是简单吸收溶解的毒液。较准确的过程是：

1. 捕食刺胞动物时吞入尚未发射的完整刺丝囊。
2. 刺丝囊通过消化道分支转移到鳃突末端。
3. 专门的 cnidophage 细胞在 cnidosac 中容纳这些刺丝囊。
4. 受扰时，鳃突末端保存的刺丝囊可排出或发射，形成防御。

不同裸鳃类和不同猎物的刺丝囊类型、成熟过程与保留时间并不相同。Goodheart 等人的比较解剖支持 cnidosac 与 kleptocnide 的一般机制，但不应据此为本种虚构固定毒量。[Goodheart et al. 2018](https://doi.org/10.1186/s12983-018-0289-2)

可写安全提示：搁浅个体仍可能保留可发射刺丝囊，避免徒手触摸，用照片和位置记录代替抓取。不能写：

- “毒性必定超过僧帽水母”。
- “会主动挑选最毒的刺丝囊并把毒力放大若干倍”。
- “触碰必然致命”或给出没有病例资料支持的致死率。
- “自身制造僧帽水母毒液”。

## 繁殖与早期生活史

### 同时雌雄同体与交配

本种是同时雌雄同体，两个个体都具有雌性和雄性生殖系统。Ross 与 Quetin 只观察了三对 *G. atlanticus*：交配从头部和腹面接触开始，随后生殖器伸出并缠合，两只动物尽量让鳃突避开对方，最后并排悬在海气界面。三对从开始至分离约 43 至 59 分钟，阴茎完全回缩可延至 61 分钟。这个样本极小，适合写“有限实验观察为 43 至 59 分钟”，不适合作固定种级时长。[Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Churchill et al. 2014a](https://doi.org/10.1071/IS13038)

阴茎刺可能帮助两个漂浮个体在不稳定海面保持连接，但这仍是功能解释。普通图片无需显示生殖器或阴茎刺，也不应把交配画成互相刺伤或捕食。

### 卵带、胚胎与面盘幼体

Ross 与 Quetin 的实验个体释放短而直的胶质卵带，长约 5.0 至 17.5 毫米、直径约 0.3 毫米，卵带在容器中缓慢下沉。每个卵囊约 60 至 75 微米宽、75 至 97 微米长。19°C 条件下，卵裂在数小时内开始，约 48 至 60 小时出现担轮幼体阶段，约第 3 天孵出半具壳的浮游摄食型面盘幼体，幼壳起初呈卵圆形，数日后盘卷。研究中的幼体在缺食条件下游泳 7 至 11 天后死亡，实验没有完成变态或全生活史。[Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242)

同一研究在开始产卵 3 至 4 天后记录到每小时 4 至 6 条卵带、每条 36 至 96 个胚胎，以及每天约 3,300 至 8,900 个胚胎。产卵随近期食物供应变化，这些数字不是每只成体的固定产量。

Helm 的百慕大单个体在 12 小时内释放 658 条卵带，平均每条 16.06 个胚胎，合计约 10,567 个胚胎。多数卵带直接进入水中并在培养皿中下沉，少数落在 *Velella* 残骸上，但是否主动附着无法确定。这个结果与较早实验的速率和每带胚胎数差异很大，说明个体、食物、采后状态和实验设置都会影响数字。[Helm 2021](https://doi.org/10.1007/s12526-021-01233-5)

页面应采用以下边界：

- 写“可释放自由下沉的短直卵带，文献也记录卵带落在猎物残骸上”。
- 不写“所有卵都固定附在僧帽水母或帆水母上”。
- 不把卵带画成底栖裸鳃类常见的螺旋花边卵带。
- “约 3 天孵化”必须保留 19°C 实验条件。
- 幼体有幼壳，成体无壳。不要把有壳面盘幼体画成缩小的蓝色成体。
- 野外繁殖季、成熟年龄、寿命、幼体如何重返海面，以及自然死亡率均未知，不填推测值。

## 威胁、保护与监测

### 为什么结构化 threats 留空

当前资料没有全球数量、世代长度、成熟个体数或标准化长期趋势，也没有经过量化和排序的物种级主要威胁。把塑料、气候变化、旅游采集、海滩清理或猎物减少直接列为既定全球威胁，会超过现有证据。因此建议：

```ts
threats: []
```

这不表示“没有风险”，而是表示目前不足以给结构化威胁下定论。页面正文可以说明以下研究问题及其边界：

- 北太平洋垃圾带研究发现多类专性海面生物与漂浮塑料受相似物理过程聚集，但 Glaucus 只鉴定到属级，样本稀少，也没有测量塑料对本种的伤害。该研究支持监测海面生态系统，不支持把塑料写成本种已证实的首要威胁。[Chong et al. 2023](https://doi.org/10.1371/journal.pbio.3001646)
- 2026 年生态位模型预测中高排放情景下适生区可能向高纬扩展，赤道附近部分区域的适生性可能下降。模型使用出现点与环境变量，描述潜在适生性，不是观测到的数量增长、恢复或灭绝风险。[Ferreira & da Silva 2026](https://doi.org/10.1016/j.rsma.2026.105068)
- 局地搁浅数量受风和海流强烈影响。单次上岸多、少或缺失都不能直接作为全球趋势指标。[Pinotti et al. 2019](https://doi.org/10.1590/0001-3765201920180154)

### 推荐 conservationActions

这些是项目基于证据缺口提出的监测和减害建议，不是 IUCN 保护计划：

1. 在五个副热带环流区使用可比较的表层拖网、视觉航线和搁浅记录，保存采样努力量、季节与海况。
2. 同步记录 *Physalia*、*Velella*、*Porpita* 等猎物、风、表层流、海温、锋面和表层辐合，避免把运输变化误判为种群变化。
3. 为异常搁浅保留全身照片、尺标、坐标精度、时间、组织或凭证标本，并用形态和 DNA 区分 *Glaucus* 与 *Glaucilla*。
4. 研究微塑料、化学污染物和漂浮垃圾对摄食、发育与刺丝囊保留的实际影响，不先假定效应方向或强度。
5. 对发现者提供“不徒手触摸、不要带走、保持距离拍照并报告位置”的非接触记录指引。
6. 减少海洋表层塑料和化学污染，保护 neuston 食物网；把这写成生态系统层面的预防行动，不写成已经证明能恢复本种数量。

## 推荐 sources 常量

```ts
const ATLANTIC_BLUE_SEA_SLUG_CONTENT_DATE = '2026-08-29';
const ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE = '2026-08-29';

const ATLANTIC_BLUE_SEA_SLUG_SOURCES = [
  {
    title: 'MolluscaBase via WoRMS, Glaucus atlanticus, AphiaID 140022',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'WoRMS classification API, Glaucus atlanticus',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140022',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'MolluscaBase via WoRMS, Glaucilla marginata, AphiaID 534056',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=534056',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Churchill, Valdés & Ó Foighil 2014, Molecular and morphological systematics of neustonic nudibranchs',
    url: 'https://doi.org/10.1071/IS13038',
    kind: 'taxonomy',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Churchill et al. 2014, Afro-Eurasia and the Americas present barriers to gene flow',
    url: 'https://doi.org/10.1007/s00227-014-2389-7',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List species search, Glaucus atlanticus',
    url: 'https://www.iucnredlist.org/search?query=Glaucus%20atlanticus&searchType=species',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List FAQ, treatment of Not Evaluated taxa',
    url: 'https://nrl.iucnredlist.org/about/faqs',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List Categories and Criteria, Version 3.1',
    url: 'https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Ross & Quetin 1990, Mating behavior and spawning in two neustonic nudibranchs',
    url: 'https://www.biodiversitylibrary.org/part/143242',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Helm 2021, Natural history of neustonic animals in the Sargasso Sea',
    url: 'https://doi.org/10.1007/s12526-021-01233-5',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Thompson & Bennett 1969, Physalia nematocysts in Glaucus',
    url: 'https://doi.org/10.1126/science.166.3912.1532',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Thompson & Bennett 1970, Observations on Australian Glaucidae',
    url: 'https://doi.org/10.1111/j.1096-3642.1970.tb00735.x',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Goodheart et al. 2018, Comparative morphology and evolution of the cnidosac in Cladobranchia',
    url: 'https://doi.org/10.1186/s12983-018-0289-2',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Yamamoto et al. 2025, Blue angels have devil hands',
    url: 'https://doi.org/10.1002/ecy.70062',
    kind: 'ecology',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Pinotti, Bom & Muxagata 2019, Occurrence and ecology along the Southwestern Atlantic coast',
    url: 'https://doi.org/10.1590/0001-3765201920180154',
    kind: 'distribution',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Naturalis Pelagic Molluscs 2.0, Glaucus atlanticus',
    url: 'https://pelagic-molluscs.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=116646',
    kind: 'general',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Chong et al. 2023, High concentrations of floating neustonic life in the plastic-rich North Pacific Garbage Patch',
    url: 'https://doi.org/10.1371/journal.pbio.3001646',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Ferreira & da Silva 2026, House of the blue dragon',
    url: 'https://doi.org/10.1016/j.rsma.2026.105068',
    kind: 'conservation',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
  {
    title: 'Taiwan Ocean Conservation Administration, Glaucus atlanticus',
    url: 'https://www.oca.gov.tw/ch/home.jsp?dataserno=202202240024&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386',
    kind: 'general',
    accessedAt: ATLANTIC_BLUE_SEA_SLUG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 可直接用于 `species.ts` 的完整字段建议

```ts
{
  id: 'species-glaucus-atlanticus',
  slug: 'atlantic-blue-sea-slug',
  names: {
    zh: '大西洋海神海蛞蝓',
    en: 'Atlantic Blue Sea Slug',
    aliases: ['蓝龙海蛞蝓', 'Blue Dragon', 'Blue Glaucus', 'Sea Swallow', 'Blue Sea Dragon', 'Blue Angel'],
  },
  scientificName: 'Glaucus atlanticus',
  taxonomy: animalTaxonomy(
    taxon('Mollusca', '软体动物门'),
    taxon('Gastropoda', '腹足纲'),
    taxon('Nudibranchia', '裸鳃目'),
    taxon('Glaucidae', '海神鳃科'),
    taxon('Glaucus', '海神鳃属'),
  ),
  conservation: conservation('NE', 'unknown'),
  distribution: {
    realms: ['marine'],
    continents: ['亚洲', '欧洲', '非洲', '北美洲', '南美洲', '大洋洲'],
    regions: [
      '北大西洋副热带环流区',
      '南大西洋副热带环流区',
      '北太平洋副热带环流区',
      '南太平洋副热带环流区',
      '印度洋副热带环流区',
      '西部与中部地中海零散海面记录',
    ],
    countries: [
      '澳大利亚',
      '新西兰',
      '南非',
      '莫桑比克',
      '印度',
      '日本',
      '中国',
      '美国',
      '墨西哥',
      '巴西',
      '乌拉圭',
      '西班牙',
      '阿尔及利亚',
      '突尼斯',
    ],
    range:
      '分布于大西洋、印度洋和太平洋的热带与亚热带海气界面，五个副热带环流区均有分子采样。不同洋盆间存在基因流屏障，不能写成全球完全随机交配种群。西部和中部地中海有零散记录；沿岸与海滩观察多由风、海流和风暴输送形成。国家列表仅列代表性有凭证沿岸国家，不是完整名录。',
    center: { lat: 32, lng: -65 },
  },
  habitats: [
    {
      name: '热带与亚热带海气界面',
      realm: 'marine',
      description:
        '终生生活在海面薄层，吞入空气后倒置悬挂，蓝色足面朝天、银白真背面朝向深水；与僧帽水母、帆水母、银币水母等表层漂浮生物相遇。',
      isPrimary: true,
    },
    {
      name: '副热带环流与表层辐合带',
      realm: 'marine',
      description:
        '风、表层流和锋面会共同聚集本种、猎物和其他漂浮物，局地浓度随季节与海况显著变化。',
    },
    {
      name: '风驱外陆架与近岸表层水',
      realm: 'marine',
      description:
        '持续向岸风或风暴可把远洋表层个体送入陆架、浪区并造成搁浅；海滩是运输终点，不是本种正常底栖生境。',
    },
  ],
  measurements: {
    length: {
      max: 43,
      unit: 'mm',
      note:
        'Ross & Quetin 汇总及 Naturalis 物种页采用的最大报道体长。WoRMS 说明文字另写可达 6 cm，但未给测量个体和原始口径；15–35 mm 是巴西、乌拉圭一次搁浅事件的样本范围，不是全种成年范围。',
    },
  },
  diet: {
    types: ['carnivore'],
    foods: ['僧帽水母属 Physalia', '帆水母 Velella velella', '银币水母 Porpita porpita'],
    description:
      '海面肉食者，主要捕食与其共同漂流的刺胞动物。它可爬到猎物下方啃食水螅体，并用前部鳃突抓握和调整猎物。未发射的刺丝囊可经消化系统转移到鳃突末端的刺胞囊中，用于防御。水族实验观察到更广的机会性捕食，但不能据此把鱼类写成固定野外食物。',
  },
  activity: [
    '吞入空气并倒置悬挂在海气界面',
    '随风驱表流和副热带环流漂移',
    '用前部鳃突抓握和操控猎物',
    '捕食海面刺胞动物',
    '把猎物刺丝囊保存在鳃突末端',
    '同时雌雄同体并相互交配',
    '释放短直卵带并产生浮游摄食型面盘幼体',
  ],
  tags: ['软体动物', '裸鳃类', '海洋表层漂浮者', '海面生物', '刺胞动物捕食者', '盗刺细胞', 'IUCN 未评估'],
  summary:
    '一种倒置悬挂在热带和亚热带海面的蓝银色裸鳃类，主要捕食僧帽水母等表层刺胞动物，并把猎物未发射的刺丝囊保存在鳃突末端用于防御。',
  description:
    '大西洋海神海蛞蝓是终生生活在海气界面的海生腹足类。它吞入空气维持浮力，蓝色足面朝向天空，银白真背面朝向深水，主要随风和表层海流漂移。细长身体每侧有四组单列鳃突，前三组长在明显侧柄上，后方还有一组较小的无柄鳃突，这使它区别于体短、鳃突多列的 Glaucilla。它捕食 Physalia、Velella 和 Porpita 等刺胞动物，把未发射刺丝囊转移至鳃突末端的刺胞囊用于防御，因此搁浅个体也不应徒手触碰。本种同时雌雄同体，实验观察记录了短直卵带和带幼壳的浮游摄食型面盘幼体。IUCN 尚未评估，全球数量和趋势未知。',
  storySections: [
    {
      key: 'glaucus-not-glaucilla',
      label: '分类与辨认',
      title: '三对蓝翼后面还有第四组鳃突',
      body:
        '它每侧有四组单列鳃突，前三组位于长侧柄上，最后一组小而贴近尾部。常见的三对蓝翼只数了显眼结构；体短、鳃突多列的 Glaucilla 属近似种不能替代本种。',
    },
    {
      key: 'upside-down-at-surface',
      label: '海面生境',
      title: '把天空当作脚下',
      body:
        '它吞入空气，把气泡留在胃腔，倒置悬挂在海面薄层下。蓝色足面朝天，银白真背面朝向深水；风和表层海流比游泳更能决定它到达哪里。',
    },
    {
      key: 'reverse-countershading',
      label: '颜色与朝向',
      title: '蓝面向上，银面向下',
      body:
        '从空中俯视时，蓝色足面靠近海色；从水下仰视时，银白背面靠近受光水面。这通常被解释为适应倒置生活的反向保护色，但尚无本种捕食风险实验可量化效果。',
    },
    {
      key: 'kleptocnidy',
      label: '捕食与防御',
      title: '把猎物的刺丝囊送到鳃突尖端',
      body:
        '它啃食 Physalia、Velella 和 Porpita，把尚未发射的完整刺丝囊转移到鳃突末端的刺胞囊。保存的刺丝囊可用于防御；这不是自行制造毒液，也没有证据证明毒性必定超过猎物。',
    },
    {
      key: 'egg-strings-and-veligers',
      label: '繁殖与发育',
      title: '短直卵带沉向水中',
      body:
        '两个同时雌雄同体的个体相互交配。实验中释放的卵带短而直，可自由下沉；19°C 条件下约第 3 天孵出带幼壳的浮游摄食型面盘幼体，野外时间表和成熟年龄仍未知。',
    },
    {
      key: 'drift-stranding-monitoring',
      label: '搁浅与监测',
      title: '海滩记录的是运输结果',
      body:
        '向岸风、表层流和风暴会把远洋个体推入浪区。一次海滩聚集不能证明种群增加或减少；照片、尺标、风流数据、猎物记录和物种级鉴定共同决定这条记录能说明什么。',
    },
  ],
  keyFacts: [
    '大西洋海神海蛞蝓是终生生活在海洋表层的裸鳃类，不是鱼、幼龙或底栖海蛞蝓。',
    '它吞入空气并倒置悬挂，蓝色足面朝天，银白真背面朝向深水。',
    '每侧四组鳃突中，前三组位于长柄上，第四组小而无柄；每组鳃突沿支轴单列排列。',
    '分子样本覆盖五个副热带环流区，但大陆和冷水限制洋盆间基因流。',
    '野外核心猎物包括 Physalia、Velella 和 Porpita 等海面刺胞动物。',
    '未发射的猎物刺丝囊可保存在鳃突末端用于防御，搁浅个体也不应徒手触碰。',
    '本种同时雌雄同体；三对实验观察中的交配持续约 43 至 59 分钟。',
    '短直卵带可自由下沉；19°C 实验条件下约第 3 天孵出带幼壳的面盘幼体。',
    'IUCN 尚未评估，全球数量、趋势、寿命和野外繁殖季均未知。',
  ],
  threats: [],
  conservationActions: [
    '在五个副热带环流区使用可比较的表层拖网、视觉航线和搁浅记录，保存采样努力量、季节与海况',
    '同步记录 Physalia、Velella、Porpita 等猎物、风、表层流、海温、锋面和表层辐合',
    '为异常搁浅保留全身照片、尺标、坐标精度、时间、组织或凭证标本，并用形态和 DNA 区分 Glaucus 与 Glaucilla',
    '研究微塑料、化学污染物和漂浮垃圾对摄食、发育与刺丝囊保留的实际影响',
    '向发现者提供不徒手触摸、不带走、保持距离拍照并报告位置的非接触记录指引',
    '减少海洋表层塑料和化学污染，保护 neuston 食物网，并把它作为生态系统层面的预防行动',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'reported-maximum-length',
      label: '最大报道体长',
      value: '43',
      unit: '毫米',
      note: '文献汇总值；WoRMS 另写可达 6 厘米但没有给出标本和测量口径',
    },
    {
      key: 'subtropical-gyres-sampled',
      label: '分子采样环流区',
      value: '5',
      unit: '个',
      note: '北、南大西洋，北、南太平洋和印度洋副热带环流区，不代表五个孤立物种',
    },
    {
      key: 'observed-copulation-duration',
      label: '实验交配时长',
      value: '43 至 59',
      unit: '分钟',
      note: '仅三对个体的有限观察，不是固定种级时长',
    },
    {
      key: 'veliger-hatching-at-19c',
      label: '实验孵化',
      value: '约 3',
      unit: '天',
      note: '19°C 实验条件下孵出带幼壳的浮游摄食型面盘幼体，不是野外固定孵化期',
    },
  ],
  media: {
    image: './images/species/atlantic-blue-sea-slug/01-ocean-surface-cover.webp',
    alt: '一只完整的大西洋海神海蛞蝓倒置悬在热带开阔海面下，蓝色足面朝向天空',
    focalPoint: { x: 0.72, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image: './images/species/atlantic-blue-sea-slug/02-uniseriate-cerata-field-marks.webp',
        alt: '从上方看到大西洋海神海蛞蝓的蓝色足面、中央银色纵带和每侧四组单列鳃突',
        title: '单列鳃突与足底银带',
        caption: '前三组鳃突位于明显侧柄，尾部还有一组小型无柄鳃突；画面用于形态解释，不替代标本鉴定。',
        focalPoint: { x: 0.53, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/atlantic-blue-sea-slug/03-upside-down-surface-film.webp',
        alt: '从水下侧面看一只大西洋海神海蛞蝓紧贴海面薄层倒置漂浮，银白真背面朝下',
        title: '倒置悬在海气界面',
        caption: '胃腔内吞入的空气维持主要浮力；鳃突不是外置气球，画面也不代表主动深潜。',
        focalPoint: { x: 0.61, y: 0.36 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/atlantic-blue-sea-slug/04-physalia-underside-feeding.webp',
        alt: '一只大西洋海神海蛞蝓在小型僧帽水母下方取食水螅体并用前部鳃突固定猎物',
        title: '在猎物下方取食',
        caption: '本种会捕食 Physalia 并保存未发射刺丝囊；画面不表示毒力增强、胜负或固定猎物比例。',
        focalPoint: { x: 0.59, y: 0.48 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/atlantic-blue-sea-slug/05-straight-egg-string-release.webp',
        alt: '一只大西洋海神海蛞蝓在海面下释放数条短而直的透明卵带，卵带向水中缓慢下沉',
        title: '自由下沉的短直卵带',
        caption: '实验记录的卵带约 5.0 至 17.5 毫米；画面不表示所有卵带都自由漂流或从不落在猎物残骸上。',
        focalPoint: { x: 0.58, y: 0.42 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/atlantic-blue-sea-slug/06-noncontact-stranding-record.webp',
        alt: '浪线浅水中一只搁浅的大西洋海神海蛞蝓，远处研究者只用相机和尺标记录而不触碰',
        title: '不接触的搁浅记录',
        caption: '搁浅反映风与表层流的运输结果，不是正常海滩生境，也不能单独证明种群增加或下降。',
        focalPoint: { x: 0.67, y: 0.73 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: ATLANTIC_BLUE_SEA_SLUG_SOURCES,
  featured: true,
  publishedAt: ATLANTIC_BLUE_SEA_SLUG_CONTENT_DATE,
  updatedAt: ATLANTIC_BLUE_SEA_SLUG_CONTENT_DATE,
}
```

`metrics` 刻意为空。不要为了排序把 43 毫米复制为成年体长范围，也不要把海面生境写入 `maxDiveDepthM`。`threats` 刻意为空，保护行动是研究和生态系统预防建议，不是 IUCN 计划。

## 六张图片的生成与验收规格

### 全组技术规格

- 输出：每张 **1536 × 1024 px**，横向 3:2，opaque sRGB，无 alpha，适合转换为 WebP。
- 风格：写实自然史摄影感的科学情景重建，真实海水、表面张力和组织材质，不用插画描边、文字、标签、箭头、水印或信息图排版。
- 署名：`Fauna Atlas · AI 生成科学情景重建`。
- 个体尺度：成年主体约 3 至 4 厘米。除交配图外不需要第二只，本组没有交配场景。
- 身体：无壳、细长、扁平、尾部渐尖；小而钝的头，两根短口触角和两根很短的嗅角。
- 鳃突：每侧四组，前三组在明显长侧柄上，第四组较小且无柄；所有鳃突沿支轴单列，单根呈细长圆锥形，银蓝基部、深蓝尖端。
- 朝向：蓝色足面和腹面朝向天空与海面，足底正中有纵向银色带；银白真背面朝向水下。
- 全组禁区：不能画成 *Glaucilla* 的短体、短尾和鳃突密集多列簇；不能出现鱼鳍、鱼尾、章鱼腕、海兔耳、外壳、龙头、龙翼、羽毛、珊瑚枝、背鳃花冠、明显大眼、生物发光、霓虹蓝、魔法粒子、重复身体或左右鳃突数量混乱。

### 01 `01-ocean-surface-cover.webp`

- 场景：平静但有细小波纹的热带开阔海面，从天空一侧近乎垂直俯看。一只完整成体位于画面右侧，蓝色足面朝镜头，左侧留干净负空间供标题排版。
- 必须有：完整细长身体、长尖尾、三组显眼侧柄和后方第四小组、单列鳃突、足底中央银带。海面下可有很淡的真实阴影，不出现海底。
- 焦点：`{ x: 0.72, y: 0.53 }`。
- prompt core：`photorealistic natural-history reconstruction, top-down view through a calm tropical open-ocean surface, one complete Glaucus atlanticus on the right, animal floating upside down with blue ventral foot facing sky, longitudinal silver stripe along center of foot, slender flattened shellless body, long tapering tail, four ceratal groups per side with first three on obvious peduncles and small fourth sessile posterior group, every ceratal group uniseriate, conical silver-blue cerata with dark cobalt tips, clean negative space on left, natural daylight, realistic 3–4 cm scale, no seabed`。
- 额外禁区：不要让银白真背面朝上，不要把海面画成透明水族箱顶板，不要出现手、船、沙滩、文字或第二只动物。

### 02 `02-uniseriate-cerata-field-marks.webp`

- 场景：近距离俯视蓝色足面，整只动物仍在画内，形态标志清楚但没有标签。
- 必须有：足底中央纵向银带；每侧四组鳃突，前三组有柄、后组无柄；每个支轴只有一列鳃突；两根短口触角与两根很短嗅角。
- 焦点：`{ x: 0.53, y: 0.52 }`。
- prompt core：`field-identification macro photograph of one complete Glaucus atlanticus at the ocean surface, exact top-down view of upward-facing ventral foot, blue to blue-brown foot margins and a crisp longitudinal medial silver stripe, slender elongated body and tapering tail, bilateral four ceratal groups, anterior three groups pedunculate and posterior fourth group small and sessile, strictly one row of tapered cerata along each branch, short oral tentacles and very short rhinophores, documentary daylight, no labels`。
- 额外禁区：不要用编号、箭头、解剖切面或刻度；不要生成三行以上鳃突、对称的六片实心翅或章鱼吸盘。

### 03 `03-upside-down-surface-film.webp`

- 场景：摄影机在水下，略侧仰视海面。一只成体紧贴表面薄层倒置悬挂，蓝色足面靠近海面，银白真背面朝镜头和深水。
- 必须有：细微弯曲的水面 meniscus，身体没有外置气囊；海面光自然穿透，能读出银白背面和向上折起的蓝色边缘。
- 焦点：`{ x: 0.61, y: 0.36 }`。
- prompt core：`underwater oblique side view looking up at one Glaucus atlanticus immediately beneath the air–sea interface, upside-down natural posture, blue ventral foot touching the surface film above, true silver-white dorsum facing downward toward camera, subtle realistic meniscus around the animal, elongated shellless body, tapering tail, uniseriate lateral cerata, open blue water below, natural sunlight, scientifically accurate scale`。
- 额外禁区：不要画一个可见大气泡绑在身体外，不要画潜水、拍翼游泳、海底、珊瑚或水族箱玻璃；不要颠倒蓝面和银面。

### 04 `04-physalia-underside-feeding.webp`

- 场景：海气界面下，一只本种爬在一只小型 *Physalia* 的下方，口部接近水螅体，前部鳃突抓住并调整猎物。画面避免密集长触手遮挡主体。
- 必须有：动物仍是腹面朝海面的倒置姿态；*Physalia* 的浮囊在海面，取食发生在其下侧水螅体；二者尺度可信。
- 焦点：`{ x: 0.59, y: 0.48 }`。
- prompt core：`photorealistic scientific reconstruction at the open-ocean surface, one anatomically accurate Glaucus atlanticus crawling beneath a small Physalia sp., mouth feeding on underside zooids, anterior cerata visibly bracing and manipulating the prey, blue ventral foot oriented toward sky, silver dorsum toward depth, realistic relative scale and surface light, clear non-gory behavior, limited tentacles so anatomy remains visible`。
- 额外禁区：不要画英雄战斗、巨型僧帽水母、触手把海蛞蝓捆住、爆炸或发光毒液、尖牙、吸管、吞下整个浮囊、血液、人物触摸或“毒力更强”视觉隐喻。

### 05 `05-straight-egg-string-release.webp`

- 场景：一只成体倒置悬在海面，身体后方刚释放数条短直透明胶质卵带，卵带离开海面后缓慢向水中下沉。
- 必须有：卵带约 5.0 至 17.5 毫米，相对 3 至 4 厘米成体的尺度合理；只画少数条，内部卵非常细小，不做微观放大。
- 焦点：`{ x: 0.58, y: 0.42 }`。
- prompt core：`natural-history macro reconstruction of one Glaucus atlanticus upside down beneath the ocean surface releasing a few short straight translucent gelatinous egg strings, each string roughly 5–17.5 mm relative to a 3–4 cm adult, strings slowly sinking into open water, blue ventral foot up and silver dorsum down, accurate uniseriate cerata, calm documentary lighting, no substrate`。
- 额外禁区：不要画螺旋花边卵带、长绳缠绕猎物、葡萄大小的卵、已成形蓝色幼体、海底附着、育幼、卵群发光、解剖开口或文字箭头。

### 06 `06-noncontact-stranding-record.webp`

- 场景：海滩浪线的极浅水中有一只完整个体。远处研究者蹲在安全距离外，用相机和放在个体旁但不接触的尺标记录。可在更远处有一只小型 *Physalia*，但不让人靠近。
- 必须有：动物仍湿润并保留正确鳃突结构；人物双手远离动物；画面明确是科学记录而非捡拾、救援或触摸体验。
- 焦点：`{ x: 0.67, y: 0.73 }`。
- prompt core：`photorealistic beach-stranding documentation scene, one wet anatomically accurate Glaucus atlanticus in a shallow wash line, complete elongated body and uniseriate ceratal groups visible, a field researcher several feet away photographing without touching, a small scale marker placed nearby but not contacting the animal, optional distant small Physalia, natural overcast coastal light, calm evidence-recording mood`。
- 额外禁区：不要出现裸手拿取、脚踩、儿童围观、玻璃罐、捕捞网、救生表演、大量成群个体或垃圾堆；不能用画面暗示海滩是常驻生境、单次搁浅证明种群暴增或研究者已确认死因。

## HTTPS sources 与使用边界

| 来源 | 类型 | 可支撑内容 | 使用限制 |
| --- | --- | --- | --- |
| [WoRMS accepted taxon, AphiaID 140022](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022) | 当前分类权威库 | 接受名、命名人、AphiaID、海生属性、分布条目 | 说明文字的 6 cm 缺少标本和测量口径 |
| [WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140022) | 当前分类权威库 | 完整分类链与仓库六级映射 | 中间阶元不能覆盖 class 或 order |
| [WoRMS, *Glaucilla marginata*](https://www.marinespecies.org/aphia.php?p=taxdetails&id=534056) | 当前分类权威库 | *Glaucilla marginata* 的当前接受组合 | 不提供 *G. atlanticus* 的完整物种诊断 |
| [Churchill, Valdés & Ó Foighil 2014](https://doi.org/10.1071/IS13038) | 原始系统学论文 | 分子物种界、单列鳃突、四组鳃突、足底银带、全球热带亚热带范围 | 论文属级组合早于当前 WoRMS，近似种现多归 *Glaucilla* |
| [Churchill et al. 2014, phylogeography](https://doi.org/10.1007/s00227-014-2389-7) | 原始群体遗传论文 | 五个副热带环流区、98 个体、洋盆间基因流屏障 | 五环流采样不等于每处均匀或连续高密度 |
| [IUCN species search](https://www.iucnredlist.org/search?query=Glaucus%20atlanticus&searchType=species) | 官方检索 | 截至访问日未找到正式评估记录 | 无结果不能证明 LC、稳定或无风险 |
| [IUCN FAQ](https://nrl.iucnredlist.org/about/faqs) | 官方方法说明 | Red List 不收录尚未评估分类单元的解释 | NE 是产品表达，不是一份 IUCN 评估 |
| [IUCN Categories and Criteria](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf) | 官方标准 | NE 与 DD 定义 | 不提供本种评估 |
| [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) | 原始繁殖实验 | 交配、卵带、胚胎、19°C 孵化、43 mm 文献最大值 | 三对交配和少数实验个体，不能作固定种级速率 |
| [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5) | 原始自然史观察 | 百慕大取食、猎物操控、吞气漂浮、单个体产卵 | 主要是少量现场和水族观察，不是全球统计 |
| [Thompson & Bennett 1969](https://doi.org/10.1126/science.166.3912.1532) | 原始实验论文 | 保存并使用 *Physalia* 刺丝囊防御 | 不支持“毒力必定超过猎物” |
| [Thompson & Bennett 1970](https://doi.org/10.1111/j.1096-3642.1970.tb00735.x) | 原始生态和形态论文 | *Velella*、*Physalia*、*Porpita* 食物与人身接触风险 | 历史分类组合需按当前 WoRMS 更新 |
| [Goodheart et al. 2018](https://doi.org/10.1186/s12983-018-0289-2) | 原始比较解剖论文 | cnidosac、cnidophage 与 kleptocnide 机制 | 跨类群比较不能给本种固定毒量 |
| [Yamamoto et al. 2025](https://doi.org/10.1002/ecy.70062) | 原始行为与组织学论文 | 鳃突抓握、*Physalia* 刺丝囊、广食性水族实验 | 白饵鱼捕食是水族观察，野外食谱尚未验证 |
| [Pinotti et al. 2019](https://doi.org/10.1590/0001-3765201920180154) | 原始分布生态论文 | 西南大西洋、风暴输送、15 至 35 mm 搁浅样本 | 单次事件不能外推全球密度或趋势 |
| [Naturalis Pelagic Molluscs 2.0](https://pelagic-molluscs.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=116646) | 博物馆专题数据库 | 43 mm 最大体长、形态和发育概述 | 部分内容汇编旧文献，关键实验优先引原始论文 |
| [Chong et al. 2023](https://doi.org/10.1371/journal.pbio.3001646) | 原始海面群落调查 | 漂浮塑料与 neuston 同受表层物理过程聚集 | Glaucus 只到属级且稀少，没有本种塑料伤害试验 |
| [Ferreira & da Silva 2026](https://doi.org/10.1016/j.rsma.2026.105068) | 原始生态位模型 | 气候情景下潜在适生区向高纬扩展 | 预测适生性不是观测数量、种群趋势或保护收益 |
| [台湾海洋保育署](https://www.oca.gov.tw/ch/home.jsp?dataserno=202202240024&id=522&mcustomize=ocamaritime_view.jsp&parentpath=0%2C298%2C386) | 政府科普与中文名称 | 中文检索名、安全提示 | 不替代系统学和 IUCN 来源 |

以上来源均于 **2026-08-29** 访问或复核。

## 字段与证据矩阵

| 字段或叙事 | 建议值 | 主要证据 | 不得越界 |
| --- | --- | --- | --- |
| 接受名 | *Glaucus atlanticus* Forster, 1777 | [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022) | 不用 *Glaucilla atlanticus* |
| 六级分类 | Animalia / Mollusca / Gastropoda / Nudibranchia / Glaucidae / *Glaucus* | [WoRMS API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140022) | 不把 Heterobranchia 当 class |
| 物种边界 | 细长、足底银带、鳃突单列 | [Churchill et al. 2014a](https://doi.org/10.1071/IS13038) | 不混入多列鳃突的 *Glaucilla* |
| IUCN | `NE / unknown`，年份与准则留空 | [IUCN search](https://www.iucnredlist.org/search?query=Glaucus%20atlanticus&searchType=species) [IUCN criteria](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf) | NE 不等于 DD 或 LC |
| 分布 | 三大洋热带亚热带，五个副热带环流区有分子样本 | [Churchill et al. 2014b](https://doi.org/10.1007/s00227-014-2389-7) | 不写全球随机交配或各处均匀 |
| 生境 | 海气界面、环流与表层辐合带 | [Churchill et al. 2014a](https://doi.org/10.1071/IS13038) [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5) | 海滩不是 primary habitat |
| 朝向 | 蓝色足面朝天，银白真背面朝深水 | [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) | 不能把“蓝背银腹”按正常游姿绘制 |
| 浮力 | 吞入空气并保存在胃腔 | [Churchill et al. 2014a](https://doi.org/10.1071/IS13038) [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5) | 不画外置大气囊或主动深潜 |
| 体长 | 最大报道 43 mm | [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) [Naturalis](https://pelagic-molluscs.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?id=116646) | 6 cm 保留来源差异，不作规范化上限 |
| 野外核心猎物 | *Physalia*、*Velella*、*Porpita* | [Thompson & Bennett 1970](https://doi.org/10.1111/j.1096-3642.1970.tb00735.x) [Helm 2021](https://doi.org/10.1007/s12526-021-01233-5) | 水族捕鱼不作固定野外食谱 |
| 盗刺细胞 | 完整未发射刺丝囊进入鳃突末端 cnidosac | [Goodheart et al. 2018](https://doi.org/10.1186/s12983-018-0289-2) [Yamamoto et al. 2025](https://doi.org/10.1002/ecy.70062) | 不写吸收毒液或毒性必定增强 |
| 繁殖 | 同时雌雄同体，相互交配 | [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) | 43 至 59 分钟仅三对实验观察 |
| 卵带 | 5.0 至 17.5 mm 的短直胶质带，可自由下沉 | [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) | 不画底栖螺旋卵带或固定附着规则 |
| 孵化 | 19°C 下约第 3 天出现带幼壳面盘幼体 | [Ross & Quetin 1990](https://www.biodiversitylibrary.org/part/143242) | 不外推野外固定孵化期 |
| 威胁 | 结构化列表留空 | 当前证据范围 | 不把塑料或气候模型写成已证实全球威胁 |
| 全球数量与趋势 | 留空、unknown | 当前证据范围 | 不从搁浅数量外推全球变化 |

## 实施与静态验收建议

1. 数据对象使用 19 个唯一 HTTPS 来源，`accessedAt` 均为 `2026-08-29`。
2. `conservation` 必须是 `NE / unknown`，`assessedYear`、`criteria` 和 `metrics.estimatedMatureIndividuals` 都不存在。
3. 分类链严格为 `Animalia / Mollusca / Gastropoda / Nudibranchia / Glaucidae / Glaucus`，并在叙事中保留当前 *Glaucilla* 属级口径。
4. `measurements.length.max` 为 43 mm，note 同时出现“WoRMS 6 cm 缺少标本与口径”和“15 至 35 mm 是一次搁浅样本”。`metrics` 不含 `adultLengthCm`。
5. `diet.foods` 只含 *Physalia*、*Velella* 和 *Porpita*。小鱼只在水族实验边界中出现。
6. `threats` 为空；正文与保护行动不得把塑料、气候变化或搁浅写成已量化的全球下降原因。
7. `storySections` 恰好 6 段，封面加 gallery 5 张共 6 个唯一 WebP 路径。
8. 六张源 PNG 与运行时 WebP 都应为 1536 × 1024、opaque sRGB、可解码。用 `file`、ImageMagick `identify` 和静态资产检查验收，不启动 GUI 或浏览器。
9. 01、02、03、04、05、06 的成体都必须有细长尾、每侧四组鳃突、前三组有柄、后组小而无柄，且所有鳃突单列。任何一张出现多列密集簇，都应判为近似种错配。
10. 01、02、03、04、05 中蓝色足面均朝海面，银白真背面均朝水下。06 是搁浅情景，不能用姿态反推正常游姿。
11. 完成数据、图片、素材说明、测试和构建后，才能删除 TODO。研究底稿本身不等于动物已完成。

## 关键不确定性与暂不落库内容

1. **IUCN**：公开检索未找到评估。NE 是产品对未评估状态的表达，不是 IUCN 发布记录；不填评估年、准则或下降率。
2. **体长上限**：可追溯文献汇总支持 43 毫米，WoRMS 说明文字写 6 厘米但缺少测量背景。后续若找到 6 厘米的凭证标本与原始测量，可重新评估 structured max。
3. **常见体长**：3 至 4 厘米适合概述，15 至 35 毫米来自一次区域搁浅。当前不足以建立全球成年 min/max。
4. **全球丰度**：五个环流区有遗传采样不等于数量调查。没有成熟个体数、世代长度或全球趋势。
5. **地中海边界**：有可信零散记录，但连续分布、季节常见度和长期趋势仍需物种级凭证。
6. **反向保护色**：颜色与朝向符合保护色解释，缺少针对本种的捕食实验，不能量化效果。
7. **浮力贡献**：吞入空气是明确机制。鳃突、体形和表面张力可能协助稳定，但各因素贡献没有物种级定量。
8. **野外食谱**：三类刺胞动物是核心资料。水族条件下捕小鱼显示行为能力，不证明鱼类是常规野外食物。
9. **毒性比较**：可造成疼痛性刺伤，但没有直接比较证明保存后的刺丝囊比 *Physalia* 原组织更毒，也没有可靠的固定致死风险数字。
10. **卵带附着**：实验既见自由下沉，也见少量落在猎物残骸上。是否主动选择附着、野外比例和生态作用不明。
11. **产卵率**：不同实验个体差异很大并受进食状态影响，不把每小时卵带数或每日胚胎数做 featured stat。
12. **孵化与幼体**：约 3 天只适用于 19°C 实验。完整幼体期、变态触发、返回海面的机制和野外存活率未知。
13. **寿命与成熟**：没有可靠成年寿命或成熟年龄，不填 `metrics.lifespanYears`。
14. **气候变化**：2026 年结果是生态位预测。潜在高纬扩展不等于已经观测到种群增加，也不能证明增温对本种总体有利。
15. **塑料污染**：海面生物与漂浮塑料共享汇聚区，但尚无本种摄入、毒理、繁殖或存活效应的物种级量化。
16. **鳃突排列原文冲突**：2014 年论文的摘要与诊断写 `uniseriate`，外部解剖段有一次 `multiseriate`。档案采用论文核心诊断的单列口径，并把这处内部冲突保留供后续图版和标本复核。
