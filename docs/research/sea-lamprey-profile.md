# 海七鳃鳗（*Petromyzon marinus*）完整档案研究

- 检索与核验日期：2026-08-27
- 展示中文名：**海七鳃鳗**；英文主名：**Sea Lamprey**；接受学名：***Petromyzon marinus* Linnaeus, 1758**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并约束 1 张封面、5 张图库图、故事章节、展示数字和来源数组
- 分类口径：WoRMS 采用 `Petromyzonti` 作为纲；ITIS 仍显示 `Cephalaspidomorphi`。仓库六阶元应跟随 WoRMS 的当前鱼类骨架，保留 ITIS 差异说明
- 保护口径：IUCN 当前全球评估为 LC，趋势 stable，评估日期 2022-05-29；东北大西洋和波罗的海区域评估更差，不能覆盖全球字段
- 管理口径：大西洋原生种群需要河流连通和生境保护；上游五大湖种群属于外来入侵种，接受美加联合控制。Lake Ontario、Lake Champlain 和 Finger Lakes 的原生性仍有争论
- 数字原则：海洋型、陆封型、五大湖控制种群和单项实验各有自己的尺度。档案不把最大标本、实验致死量、年度控制指数或区域红色名录改写成全种典型值

## 结论摘要

1. WoRMS 接受 ***Petromyzon marinus* Linnaeus, 1758**，AphiaID 为 101174；ITIS 也把 TSN 159722 标为 valid。推荐分类链为动物界、脊索动物门、七鳃鳗纲、七鳃鳗目、七鳃鳗科、海七鳃鳗属、海七鳃鳗。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=101174) [ITIS](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159722)
2. 台湾鱼类资料库把 `Petromyzon marinus` 的有效中文名列为“海七鰓鰻”，产品使用简体“海七鳃鳗”。“七鳃鳗”也指类群和其他物种，不能作为本种唯一中文主名。FAO 把 `Lake Lamprey` 限定为陆封型英文名，它不是一个独立物种。[台湾鱼类资料库](https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=4&pz=500&vn=) [FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)
3. 海七鳃鳗是无颌脊椎动物，不是鳗鲡。成体有圆形口盘、角质齿和锉状舌，头后每侧七个鳃孔，身体没有鳞片、上下颌或成对胸腹鳍。两枚背鳍与铲形尾鳍构成稳定外形组合。[USGS NAS](https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=836) [U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)
4. FAO 汇编记录的成体总长跨度为 114 至 1,200 毫米；1,200 毫米标本重 2.3 千克。五大湖陆封型最大总长约 600 毫米。这个跨度混合海洋型、陆封型和不同成熟阶段，不能写成“普通成体 11.4 至 120 厘米”。[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)
5. 生活史跨越三类水域。幼体在淡水软沉积物中埋栖并滤食；变态后的寄生阶段进入海洋或大湖；性成熟个体停止摄食，进入河流，在有水流的砾石床筑巢、产卵一次并死亡。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus) [Great Lakes Fishery Commission lifecycle](https://www.glfc.org/sea-lamprey-lifecycle.php)
6. 幼体期通常至少约 5 年，文献记录从 2 年到 19 年以上；五大湖寄生摄食阶段常为 12 至 18 个月，海洋型成体阶段约两年。温度、食物和种群类型改变这些时长，产品不能合并成固定寿命。[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf) [Great Lakes Fishery Commission lifecycle](https://www.glfc.org/sea-lamprey-lifecycle.php)
7. 幼体用口罩和咽部黏液捕获硅藻、细菌和碎屑。寄生阶段用口盘附着大型鱼类，再用舌部角质板锉开组织，摄取血液、体液和少量组织。Great Lakes 实验估计单只造成的宿主损失随鱼种、体型和温度变化，约为 6.8 至 19.3 千克；“每只固定杀死 18 或 20 千克鱼”会删掉实验边界。[USGS feeding study](https://pubs.usgs.gov/publication/1000960) [U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)
8. 迁徙成体一般不表现鲑鱼式出生河归巢。实验显示，幼体释放的气味帮助迁徙个体选择有幼体存活记录的河流；进入繁殖阶段后，雄体性信息素又引导雌体定位。合成组分不能完整复制天然幼体气味，故事不应把单个分子写成全套导航系统。[USGS larval pheromone study](https://www.usgs.gov/publications/direct-behavioral-evidence-unique-bile-acids-released-larval-sea-lamprey-petromyzon-0) [GLFC chemical communication review](https://www.glfc.org/pubs/pdfs/research/Li_ChemosensoryCommunicationThemePaper.pdf)
9. 变态同时改造外形和渗透调节系统。完全变态幼体可直接耐受 35 ppt 海水；实验中的海水个体饮水率为淡水个体的 26 倍，肠道离子转运与吸水能力随变态增强。这些值来自受控实验，不代表野外个体固定饮水量。[Barany et al. 2020](https://pubs.usgs.gov/publication/70211049)
10. IUCN 当前全球条目发表于 2024-2 版，评估日期为 2022-05-29，等级 LC，趋势 stable。仓库使用 `conservation('LC', 'stable', 2022)`，不填威胁准则。[IUCN global assessment DOI](https://doi.org/10.2305/IUCN.UK.2024-2.RLTS.T16781A58298056.en) [IUCN SSC migrant-fish brief](https://iucn.org/sites/default/files/2024-01/freshwater-fishes-of-potential-interest-for-inclusion-in-cms-information-brief.pdf)
11. IUCN LC 没有消除区域风险。OSPAR 仍把东北大西洋 I 至 IV 区的海七鳃鳗列为受威胁或衰退物种；2024 HELCOM 波罗的海评估为 VU。全球、区域和国家评估回答不同问题，不能互相替换。[OSPAR status assessment](https://oap.ospar.org/en/ospar-assessments/committee-assessments/biodiversity-committee/status-assesments/sea-lamprey/) [HELCOM 2024 Red List sheet](https://helcom.fi/wp-content/uploads/2025/12/HELCOM-Red-List-Petromyzon-marinus_II.pdf)
12. 欧盟《栖息地指令》把本种列入附录 II，要求成员国为其划定特别保护区，但现行合并文本排除瑞典种群；伯尔尼公约列入附录 III。OSPAR 清单属于区域保护政策工具。1954 年《大湖渔业公约》则明确授权在公约水域清除或压低海七鳃鳗种群。[EU Habitats Directive, consolidated 2025](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A01992L0043-20250714) [Bern Convention Appendix III](https://rm.coe.int/1680304356) [Convention on Great Lakes Fisheries](https://www.glfc.org/pubs/conv.htm)

## 名称、分类与物种边界

### 接受名和仓库分类链

WoRMS 将 AphiaID 101174 记录为接受名 *Petromyzon marinus* Linnaeus, 1758，并同时标注 marine、brackish 和 freshwater。属名与种加词均由 Linnaeus 在 1758 年原始组合中使用，所以作者名不加括号。[WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=101174)

| 阶元 | 学名 | 中文名 | 落库口径 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | WoRMS、ITIS |
| 门 | Chordata | 脊索动物门 | WoRMS、ITIS |
| 纲 | Petromyzonti | 七鳃鳗纲 | WoRMS 当前骨架；仓库推荐值 |
| 目 | Petromyzontiformes | 七鳃鳗目 | WoRMS、ITIS |
| 科 | Petromyzontidae | 七鳃鳗科 | WoRMS、ITIS |
| 属 | *Petromyzon* | 海七鳃鳗属 | 单型属；FAO catalogue |
| 种 | *Petromyzon marinus* | 海七鳃鳗 | 当前接受名 |

ITIS 仍把本种放在 `Cephalaspidomorphi`。NCBI 的完整谱系又插入 `Cyclostomata` 和 `Hyperoartia`。这些名称反映分类阶元与数据库骨架差异，不代表三个不同物种。仓库只有一个 `class` 字段，使用 WoRMS 的 `Petromyzonti` 可以避免把圆口类群名 `Cyclostomata` 强塞为纲。[ITIS](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159722) [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7757&lvl=0)

### 中文名、英文名和别名

- 中文主名：海七鳃鳗
- 英文主名：Sea Lamprey
- 英文条件别名：Lake Lamprey，只指陆封型
- 检索别名：海七鰓鰻，繁体写法
- 不推荐别名：七鳃鳗。台湾鱼类资料库同时把 *Lampetra fluviatilis* 的中文名列作“七鰓鰻”，单独使用会混种
- 不推荐名称：海鳗、鳗鱼、吸血鳗。前两项会把无颌类误写成鳗鲡目，后一项是宣传性称呼

`Petromyzon` 源自“石头”和“吸”的词根，描述口盘吸附石块的行为；`marinus` 指海洋阶段。词源适合放入故事，不应把它扩写成“只生活在海里”。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)

### 生活史术语

文献对 postmetamorph、juvenile 和 adult 的用法不统一。产品使用以下阶段名：

1. `卵与前幼体`：留在砾石巢间，孵化后顺流进入软沉积区。
2. `幼体 / ammocoete`：埋栖滤食，眼藏在皮下，没有成体口盘和角质齿。
3. `变态体 / transformer`：重塑眼、口盘、消化道、鳃和渗透调节器官。
4. `寄生期幼体 / postmetamorphic juvenile`：进入大湖或海洋，附着宿主摄食。
5. `迁徙与繁殖成体`：停止摄食，进入河流，性成熟、筑巢、产卵并死亡。

普通文献有时把第 4 阶段也称 feeding adult。图片说明必须写明行为和阶段，不能只用“成体”推断它是否摄食。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus) [FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)

## IUCN、区域评估和法律状态

### 全球结构化字段

当前 IUCN 引用为 Ford, M. 2024, *Petromyzon marinus*, 条目 `e.T16781A58298056`。评估日期为 2022-05-29，发布版本为 2024-2。IUCN SSC 迁徙淡水鱼简报把本种列为 LC、stable，并记录跨越 39 个国家。[IUCN global assessment DOI](https://doi.org/10.2305/IUCN.UK.2024-2.RLTS.T16781A58298056.en) [IUCN SSC brief](https://iucn.org/sites/default/files/2024-01/freshwater-fishes-of-potential-interest-for-inclusion-in-cms-information-brief.pdf)

| 字段 | 落库值 | 说明 |
| --- | --- | --- |
| code | `LC` | 全球灭绝风险 |
| trend | `stable` | IUCN 全球趋势，不代表各河流稳定 |
| assessedYear | `2022` | 评估年，不填发布年 2024 |
| criteria | 留空 | LC 条目不需要威胁准则 |

### 区域状态

- OSPAR 2022 状态评估覆盖东北大西洋 I 至 IV 区。评估人员没有发现相较 2009 年的整体改善，仍把阻隔、生境退化、过度捕捞和污染列为主要压力。[OSPAR assessment](https://oap.ospar.org/en/ospar-assessments/committee-assessments/biodiversity-committee/status-assesments/sea-lamprey/)
- HELCOM 的 2024 波罗的海评估为 VU，准则 A2ac、C2a(i)，并列出迁徙阻隔、富营养化和捕捞压力。这个区域等级不能写入全局 `conservation.code`。[HELCOM species sheet](https://helcom.fi/wp-content/uploads/2025/12/HELCOM-Red-List-Petromyzon-marinus_II.pdf)
- 意大利 2013 国家评估把本国单一繁殖种群列为 CR D。该例说明 LC 物种仍可在范围边缘接近消失，不适合充当当前全球数字。[IUCN Italy](https://www.iucn.it/scheda.php?id=1480075494)

### 法律和政策清单

| 制度 | 当前条目 | 法律或政策含义 |
| --- | --- | --- |
| 欧盟《栖息地指令》92/43/EEC | 附录 II，名称后标 `(o)`；瑞典种群除外 | 适用成员国需要为本种指定特别保护区；`(o)` 表示它不在附录 IV 或 V |
| 伯尔尼公约 | 附录 III | 缔约方需要管制利用并维持种群，效果不等同严格禁止所有捕捉 |
| OSPAR | 受威胁和衰退物种清单，区域 I 至 IV | 区域海洋保护和成员方行动依据，不是 IUCN 等级 |
| 1954 年《大湖渔业公约》 | 条约明确点名 *P. marinus* | 美加双方授权 GLFC 在公约区清除或压低该外来种 |

[EU Habitats Directive, consolidated 2025](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A01992L0043-20250714) [Bern Convention Appendix III](https://rm.coe.int/1680304356) [OSPAR feature page](https://www.ospar.org/work-areas/bdc/species-habitats/list-of-threatened-declining-species-habitats/fish/sea-lamprey) [Great Lakes Fisheries Convention](https://www.glfc.org/pubs/conv.htm)

本轮没有找到海七鳃鳗的 CITES 附录条目或 CMS 附录条目。CMS 在 2026 年跨境淡水鱼文件中把它列作需要研究的完整迁徙种，该文件不是附录列名决定。产品不添加 CITES 或 CMS 标签。[CMS current appendices](https://www.cms.int/species/appendix-i-ii-cms) [CMS freshwater-fish paper](https://www.cms.int/sites/default/files/document/2026-01/cms_cop15_doc.25.6.1_rev.1_fresh-water-fish_e.pdf)

### 原生保护与外来控制的边界

| 地理情境 | 身份 | 产品应写的管理目标 |
| --- | --- | --- |
| 大西洋两岸、地中海和相连原生河流 | 原生迁徙鱼 | 恢复河海连通、保护砾石产卵床和细沉积幼体区、改善水质、管理捕捞 |
| Lake Erie、Michigan、Huron、Superior 及相连上游五大湖水系 | 确认外来入侵 | 压低幼体和产卵成体，保护本地鱼类与渔业 |
| Lake Ontario、Lake Champlain、Finger Lakes | 起源有争议 | 研究与管理文件需说明争议；不能把某一方假说写成定论 |

USGS 的当前外来水生物种档案明确写出 Lake Ontario 争论。遗传研究支持冰后自然定殖，历史和瓶颈模型研究支持运河扩散；双方都同意 Niagara Falls 曾阻挡其进入 Lake Erie 和上游四湖，Welland Canal 提供了绕行通道。[USGS NAS](https://nas.er.usgs.gov/queries/greatlakes/FactSheet.aspx?Potential=N&Species_ID=836&Type=1) [Waldman et al. 2004](https://onlinelibrary.wiley.com/doi/10.1577/T03-104.1) [Eshenroder 2014](https://onlinelibrary.wiley.com/doi/10.1080/00028487.2013.879818)

## 分布与生境

### 原生范围和陆封范围

海七鳃鳗分布在北大西洋东西两岸及地中海部分海域。西岸从加拿大纽芬兰一带延伸到美国佛罗里达和墨西哥湾；东岸从挪威、冰岛和波罗的海水系延伸到伊比利亚、亚得里亚海及北非沿岸。FAO 还记录格陵兰西岸。范围中同时存在溯河型和永久淡水陆封型。[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)

建议结构化范围：

```ts
distribution: {
  realms: ['freshwater', 'marine'],
  continents: ['欧洲', '北美洲', '非洲'],
  regions: [
    '北大西洋西岸及入海河流',
    '北大西洋东岸、波罗的海及入海河流',
    '西部和中部地中海、亚得里亚海及北非沿岸',
    '五大湖与其他陆封湖泊种群',
  ],
  countries: [
    '加拿大', '美国', '冰岛', '挪威', '芬兰', '爱沙尼亚', '拉脱维亚', '立陶宛', '波兰', '俄罗斯',
    '英国', '法国', '西班牙', '葡萄牙', '意大利', '克罗地亚', '波黑', '黑山',
    '摩洛哥', '阿尔及利亚', '突尼斯',
  ],
  range:
    '原生范围横跨北大西洋两岸、部分波罗的海和地中海水系；五大湖上游种群属于外来入侵，Lake Ontario 等湖泊的原生性仍有争论。',
  center: { lat: 48, lng: -25 },
}
```

该国家数组采用 FAO 可直接确认的保守集合，不表示完整 IUCN 范围国清单。`center` 只用于打开北大西洋宽域视图，坐标位于海上，不是观测点或分布质心。

### 三套关键生境

1. **产卵河段**：成体需要持续单向水流、充足氧气和砾石、卵石、小石块混合的河床。个体用口盘逐块移动石头，形成浅凹和下游弧形堆石。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)
2. **幼体沉积区**：前幼体顺流进入缓流边缘、潭区或回水带，钻入以粉砂为主、混有细砂和碎屑的软底。木质残体和水生植物可提供表面遮蔽。产卵砾石床与幼体细沉积区都需要保留，不能用一张“石头河床”代表整个淡水阶段。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)
3. **寄生摄食水域**：变态个体进入大湖、大河、河口或海洋，在水层和近底区域寻找宿主。FAO 汇编包含 4,099 米深处标本，但来源可能反映宿主或渔具深度，不能填作主动潜水上限。[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)

仓库没有 `brackish` realm。结构化值使用 freshwater 和 marine，正文补充河口盐度过渡区。

## 外形、鉴别和测量

### 成体与寄生阶段的外部组合

- 身体圆筒状、鳗形，皮肤光滑无鳞；背面和体侧呈灰蓝、黄褐、深褐至黑色斑驳，腹面浅色。
- 头部没有上下颌。圆形口盘布满放射排列的角质齿，中央舌部也有角质齿板。它们属于角质结构，图文不称“骨牙”。
- 每侧眼后有七个独立圆形鳃孔。侧面图只会看到近侧七孔，不应强迫生成图在一个侧面同时显示十四孔。
- 头顶中线只有一个鼻孔，眼位于头部两侧。图像不能生成哺乳动物鼻孔、触须或鲨鱼式鼻孔。
- 身体没有胸鳍和腹鳍。背部有两枚独立背鳍，尾鳍呈铲形；繁殖成熟时两背鳍间距可显得更近。
- 繁殖雄体在第一背鳍前形成绳索状背脊。雌体出现肛鳍样褶。普通寄生阶段图不添加这些性成熟特征。

[USGS NAS identification](https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=836) [FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf) [USGS keratin-denticle explanation](https://www.usgs.gov/news/featured-story/what-sea-lampreys-do-dark-a-valentines-story)

### 幼体与成体不能共用一张形态模板

幼体体色棕褐，眼埋在皮肤下，口部是马蹄形口罩。它没有成熟口盘和角质齿，以身体前端露出沉积物的姿势滤食。变态后，眼、圆形口盘和角质齿出现，背面转为灰蓝，腹面趋白，随后才开始寄生摄食。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)

### 测量数据和落库选择

| 阶段或种群 | 长度或重量 | 证据边界 |
| --- | --- | --- |
| FAO 成体记录 | 114 至 1,200 mm TL | 跨种群和阶段的汇编跨度，不是常见范围 |
| 最大标本 | 1,200 mm TL、2.3 kg | 同一最大个体，不代表平均值 |
| Laurentian Great Lakes 陆封型 | 最大约 600 mm TL | 区域上限，不是全球上限 |
| FWS Great Lakes 成体说明 | 305 至 610 mm | 区域识别范围 |
| 变态体 | 136 至 167 mm TL | FAO 汇编范围 |
| FWS 新变态个体 | 100 至 200 mm | 区域说明 |
| 卵 | 0.8 至 1.3 mm 直径 | FWS 汇编；温度和种群会改变发育速度 |

[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf) [U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)

建议把完整观测跨度写入 `measurements.length`，并在 note 中标明种群混合：

```ts
measurements: {
  length: {
    min: 11.4,
    max: 120,
    unit: 'cm',
    note: 'FAO 成体观测汇编跨度；海洋型与陆封型差异大，不能理解为常见成体范围',
  },
  weight: {
    max: 2.3,
    unit: 'kg',
    note: 'FAO 所列 1.2 米最大标本的湿重；缺少可比的全种成年最小值',
  },
}
```

`metrics.adultLengthCm` 用于直接比较典型成体范围。现有来源只给出混合汇编跨度，建议留空；也应留空 `adultMassKg`、`lifespanYears` 和 `maxDiveDepthM`。

## 食性、生活史和繁殖

### 两套摄食系统

幼体把口罩朝向上游，让呼吸水流携带颗粒进入咽部。黏液捕获硅藻、细菌和有机碎屑，纤毛把食物团送入食道。沉积物中的食物贡献较少。产品可使用 `filter-feeder` 与 `detritivore`。[Mallatt 1981](https://doi.org/10.1111/j.1469-7998.1981.tb04581.x) [U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus)

变态后的寄生个体用口盘建立吸附，再以往复运动的舌齿板锉开宿主表皮。摄入物以血液和体液为主，也可包含组织。Schema 没有 parasite diet type，建议使用 `carnivore`，不要用 `piscivore` 暗示整条吞食鱼类。[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus) [Rovainen 1996](https://doi.org/10.1159/000113208)

```ts
diet: {
  types: ['carnivore', 'filter-feeder', 'detritivore'],
  foods: ['硅藻', '细菌', '有机碎屑', '宿主鱼血液', '宿主体液和少量组织'],
  description:
    '埋栖幼体用黏液滤取水流中的微小颗粒；变态后的寄生阶段附着大型鱼类摄取血液和体液。性成熟迁徙阶段停止摄食。',
}
```

### Great Lakes 宿主损失数字

Swink 汇总 1984 至 1995 年单次攻击实验，比较湖红点鲑、虹鳟和江鳕。较大宿主的死亡率低于小宿主，鱼种和温度也改变结果。实验估计每只海七鳃鳗一年造成的宿主损失约为 6.8 至 19.3 千克。GLFC 常用“最多 18 千克或 40 磅”进行管理传播；该数值属于五大湖实验和模型上限，不能描述大西洋原生宿主的固定死亡量。[Swink 2003](https://pubs.usgs.gov/publication/1000960) [GLFC 2025 control report](https://www.glfc.org/pubs/slcp/annual_reports/ANNUAL_REPORT_2025.pdf)

海七鳃鳗对五大湖湖鳟和其他大型鱼的死亡影响显著。过度捕捞、污染物和食物网变化也参与了历史渔业崩溃，产品应写“重要促成因素”，避免把复杂历史归给单一物种。[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)

### 从卵到一次性繁殖

1. 繁殖成体进入有流速和粗底质的河段。雄体先用口盘搬石，雌体可参与扩建巢穴。
2. 雌体用口盘固定在石头上，雄体附着并缠绕雌体后部；两者排出卵和精，水流把受精卵带入砾石缝隙。
3. 前幼体孵化后顺流漂移到软沉积区并钻入底床。FWS 汇编记录出巢时间为产卵后 11 至 31 天，温度会改变时长。
4. 幼体埋栖数年，随后变态并向海洋或湖泊迁移。
5. 寄生阶段快速生长。个体停止摄食后进入繁殖河流，完成一次产卵并死亡，亲体不护幼。

[U.S. Fish and Wildlife Service](https://www.fws.gov/species/sea-lamprey-petromyzon-marinus) [Great Lakes Fishery Commission lifecycle](https://www.glfc.org/sea-lamprey-lifecycle.php)

FAO 汇编的陆封型怀卵量为每雌 43,997 至 101,932 粒，溯河型为 151,836 至 304,832 粒。体型和生活史造成的差异远大于“每只十万粒”的单值传播口径。[FAO lamprey catalogue](https://www.fao.org/4/i2335e/i2335e.pdf)

## 行为、感官与生理

### 嗅觉串联两段迁徙

Bjerselius 等人在迷宫和天然水流中测试迁徙个体。迁徙期个体偏好含幼体气味的水，成熟后转而响应成熟同类气味；低浓度幼体特有胆汁酸混合物增强上游运动。研究人员据此判断幼体气味标记了能够支持繁殖后代的河流。[Bjerselius et al. 2000](https://www.usgs.gov/publications/direct-behavioral-evidence-unique-bile-acids-released-larval-sea-lamprey-petromyzon-0)

后续研究确认，雌体能在流动河水中沿雄体信息素 3kPZS 的气味羽流上溯数百米。天然雄体气味包含多种成分，比例改变会削弱吸引。产品可以写“嗅觉引导”，不要画一条发光化学轨道或宣称 3kPZS 单独完成全部导航。[Johnson et al. 2012](https://pubs.usgs.gov/publication/70042537) [USGS 2023 pheromone experiments](https://www.usgs.gov/news/featured-story/what-sea-lampreys-do-dark-a-valentines-story)

遗传和行为研究没有发现稳定的出生河归巢。成体用现存幼体气味选择河流，这种策略也帮助五大湖种群在适生支流间扩散。[GLFC chemical communication review](https://www.glfc.org/pubs/pdfs/research/Li_ChemosensoryCommunicationThemePaper.pdf) [USGS dispersal review](https://www.usgs.gov/index.php/publications/a-review-sea-lamprey-dispersal-and-population-structure-great-lakes-and-implications)

### 口盘占用时仍能呼吸

寄生个体把口盘封在宿主体表后，不能再让水从口部单向穿过。鳃囊肌肉改用潮汐式运动，让水从外侧鳃孔进出。口盘因此能持续吸附和摄食。图像应把七孔留在口盘之后，不能画成鲨鱼裂鳃或鳗鲡鳃盖。[Rovainen 1996](https://doi.org/10.1159/000113208)

### 变态预装海水渗透调节能力

Barany 等比较幼体、变态体和完全变态个体。完全变态海七鳃鳗直接进入 35 ppt 海水后全部存活，血浆氯只轻微升高；海水个体饮水率是淡水个体的 26 倍。前肠和后肠 Na+/K+-ATPase 活性在变态中分别增加约 12 倍和 3 倍，帮助吸收离子与水。[Barany et al. 2020](https://pubs.usgs.gov/publication/70211049)

迁徙成体进入淡水后逐步丢失海水耐受。实验中，短期淡水适应个体可承受更高盐度，长期淡水迁徙个体在较低盐度出现渗透调节失败。河口阻隔可能因此减少它们转去另一条河的生理窗口。[Wilson et al. 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4765514/)

### 变态还会拆除胆道

海七鳃鳗在变态期失去胆囊和胆管。研究人员发现成体改变胆汁盐组成，并加强肾脏排泄，从而耐受这种程序性胆道闭锁。该现象适合作为关键事实，不能类比成人类疾病治疗结论。[Yeh et al. 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3604052/)

## 威胁、保护和控制

### 原生范围的主要压力

1. 水坝、堰和水电设施阻断成体上溯，也切断变态个体向海迁移。普通鲑科鱼道未必适合缺乏成对鳍的七鳃鳗。
2. 疏浚、采砂、河道硬化和底床翻动同时破坏产卵砾石与下游细沉积幼体区。
3. 城市、农业和工业污染降低水质，富营养化与低氧改变埋栖幼体环境。
4. 葡萄牙、法国和西班牙等地的传统捕捞会移除溯河成体；管理部门需要按河流状态设定季节和数量限制。
5. 升温、枯水和洪峰时序变化可能让产卵温度窗口与河流流量错位。OSPAR 将气候变化列为可能压力，现有证据不支持统一的全范围损失百分比。

[OSPAR status assessment](https://oap.ospar.org/en/ospar-assessments/committee-assessments/biodiversity-committee/status-assesments/sea-lamprey/) [HELCOM species sheet](https://helcom.fi/wp-content/uploads/2025/12/HELCOM-Red-List-Petromyzon-marinus_II.pdf)

### 原生范围的保护行动

1. 移除失去功能的小型阻隔，或设置适合七鳃鳗吸附、攀移和较弱持续游泳能力的通道。
2. 把保护范围连接海洋、河口、主河道、产卵砾石床和幼体软底区。单独保护巢址无法完成生活史。
3. 限制关键河段的采砂、疏浚和河床整治，维持砾石缝隙、细沉积区与河岸遮蔽。
4. 改善污水处理，控制营养盐和有毒污染物，维持流量与溶氧。
5. 用成体计数、巢穴调查、标准化幼体电捕或沉积采样和 eDNA 组合监测；各指标分别报告检出率和采样努力。
6. 对传统渔业按河流状态实施季节、尺寸、工具和配额管理，并保留捕获量与努力量。

### 五大湖的控制行动

GLFC 和执行机构利用幼体集中在支流底床、繁殖成体集中上溯的生活史弱点开展综合控制。主要工具包括在选定支流施用 TFM，部分地点配合 Bayluscide；屏障阻止上溯；陷阱移除和评估成体；研究团队还测试信息素、警戒气味、电脉冲和不育雄体等补充工具。[GLFC control overview](https://www.glfc.org/control.php)

2025 年控制报告记录 93 条支流和 17 处静水区接受杀七鳃鳗剂处理，73 座屏障运行，工作人员调查 468 条支流和 56 处静水区，并在 29 条支流运行成体评估陷阱。年度指数中，Lake Erie 和 Lake Ontario 低于各自目标，其余三湖高于目标。这些数字是一个管理年度的工作量和模型指数，不能写成全球数量或永久控制成功率。[GLFC 2025 annual report](https://www.glfc.org/pubs/slcp/annual_reports/ANNUAL_REPORT_2025.pdf)

TFM 在规定浓度下选择性杀死海七鳃鳗幼体，管理人员仍需按标准操作程序评估水化学、剂量和非目标物种。产品不写“只伤害海七鳃鳗”或“对其他生物完全无害”。[GLFC control overview](https://www.glfc.org/control.php) [GLFC 2026 standard operating procedures](https://www.glfc.org/sop.php)

## 六段故事建议

### 1. 一条没有颌的脊椎动物

海七鳃鳗用圆形口盘和角质齿取代上下颌。光滑无鳞的身体没有胸鳍和腹鳍，眼后七个鳃孔排成一列。它与鳗鲡只共享细长轮廓，分类和身体结构都相距很远。

### 2. 河床里度过数年童年

幼体把身体埋进粉砂和细砂，只露出口罩迎向水流。黏液截留硅藻、细菌和碎屑；这段滤食生活通常至少持续约五年，个别记录超过十九年。

### 3. 一次变态换掉整套生活方式

变态长出眼和齿盘，也重建鳃、肠道和离子转运系统。完全变态个体已经能承受海水，随后离开河床，进入大湖或海洋寻找宿主。

### 4. 口盘吸住鱼，鳃孔继续泵水

口盘封在宿主体表时，七对鳃囊改从外侧鳃孔吸入和排出水。舌齿板往复锉开组织，个体摄取血液和体液；宿主结局取决于鱼种、体型、温度和水域。

### 5. 气味指向有幼体的河

迁徙个体没有稳定的出生河归巢。幼体气味帮助它们找到曾让后代存活的河流；到达繁殖区后，雄体信息素又把雌体引向巢址。

### 6. 同一个物种，两套相反任务

欧洲和北美大西洋河流修复通道，让原生海七鳃鳗重新抵达产卵床。五大湖上游的管理人员使用药剂、屏障和陷阱压低外来种群。地点决定管理目标，IUCN 的全球 LC 无法替代这张地理判断图。

## 四项 featured stats 建议

| key | 标签 | 值 | 单位 | 必须显示的边界 |
| --- | --- | --- | --- | --- |
| `gill-pores-per-side` | 每侧鳃孔 | 7 | 个 | 两侧共 14 个；侧面图只能看到近侧七孔 |
| `maximum-documented-length` | 最大记录总长 | 1.2 | 米 | FAO 汇编最大标本，重 2.3 千克；不是典型成体 |
| `larval-duration` | 埋栖幼体期记录 | 2 至 19+ | 年 | 通常至少约 5 年；温度、食物和种群改变时长 |
| `anadromous-fecundity` | 溯河型怀卵量 | 15.2 万至 30.5 万 | 粒 | FAO 汇编范围；陆封型约 4.4 万至 10.2 万 |

备选展示数字：五大湖寄生摄食期 12 至 18 个月；Barany 实验中海水个体饮水率为淡水个体 26 倍；2025 年五大湖运行 73 座海七鳃鳗屏障。三者都必须显示地域、实验或年度边界。

## 关键事实候选

1. `Petromyzonti` 是本轮推荐纲名；`Cephalaspidomorphi` 属于 ITIS 使用的另一套骨架。
2. 海七鳃鳗没有上下颌、鳞片或成对鳍，角质齿也不是真正骨质牙。
3. 每侧七个鳃孔让寄生个体在口盘贴住宿主时保持潮汐式呼吸。
4. 幼体没有成体齿盘口器，靠黏液滤取硅藻、细菌和碎屑。
5. 幼体期通常占据生命的大部分，变态才开启寄生和海水阶段。
6. 完全变态个体能直接耐受 35 ppt 海水；这个结论来自受控实验。
7. 迁徙个体利用幼体气味选择河流，成熟雌体再响应雄体性信息素。
8. 海七鳃鳗一般没有鲑鱼式出生河归巢。
9. 口盘也负责搬运巢材，产卵成体逐块移动石头形成巢穴。
10. 雌雄都在一次繁殖后死亡，亲体不护卵或幼体。
11. 全球 IUCN 为 LC、stable；OSPAR 和 HELCOM 记录多个区域的衰退或受威胁状态。
12. 上游五大湖种群属于外来入侵，Lake Ontario 等湖泊的起源仍有争议。
13. 海七鳃鳗在变态期失去胆囊和胆管，并通过胆汁盐变化和肾脏排泄适应。

## 图像准确性和提示词

### 六图共通规格

- 每张源图 1536×1024、3:2、sRGB、不透明；运行时输出 WebP。
- 采用自然史写实水下摄影或河流浅水摄影。画面不放文字、箭头、比例尺、徽标、坐标或发光化学轨迹。
- 成体与寄生阶段锚点：细长圆筒形、光滑无鳞、斑驳灰蓝至黄褐背面、浅色腹面、两枚独立背鳍、铲形尾鳍、无胸鳍和腹鳍。
- 头部锚点：一个中线鼻孔、两只侧眼、每侧七个圆形鳃孔、无鳃盖。02 诊断近照与 03 横侧重建展示正确的完整侧列；其他斜侧帧可让鳃区受透视或沉积物遮挡，但不能展示错误的完整孔列。
- 口盘锚点：圆形吸盘，内部密集放射状黄色至乳白角质齿，中央锉状舌；无上下颌、犬齿、鲨齿或外翻多层肉瓣。
- 图像属于科学约束下的编辑重建，不是鉴定凭证、真实行为记录或分布点证据。

共同排除词：`no eel jaws, no pectoral fins, no pelvic fins, no paired fins, no scales, no operculum, no paired nostrils, no barbels, no shark gill slits, no circular alien maw, no tentacles, no blood spray, no gore, no text, no watermark`。

### 分帧方案

| 文件 | 场景与完整提示词重点 | 科学边界 | 建议焦点 |
| --- | --- | --- | --- |
| `01-open-water-portrait.webp` | 单只完整海七鳃鳗从背上方呈 S 形游动，身体限制在右半幅并露出两枚背鳍和铲形尾 | 背视角完全隐藏鳃孔列；不宣称地点、种群型、性别、阶段或体长 | `{ x: 0.72, y: 0.47 }` |
| `02-oral-disc-and-seven-gill-pores.webp` | 单只个体以前侧三分之二近景转向镜头，口盘、近侧七孔和单一中线鼻孔清楚 | 角质齿为编辑重建，不提供凭证标本级齿式 | `{ x: 0.40, y: 0.50 }` |
| `03-gravel-riffle-nest-building.webp` | 一只性别未定的繁殖期个体在清澈浅河用口盘搬动一块小卵石 | 不画卵、排精、配对或护幼；单帧不证明完成巢穴 | `{ x: 0.66, y: 0.58 }` |
| `04-lake-trout-parasitic-feeding.webp` | 一只寄生阶段个体贴在完整湖鳟体侧，口盘边缘压紧宿主，鳃区受斜角部分遮挡 | 不展示开放伤口、鲜血或宿主死亡；caption 只采用 Lake Erie、Michigan、Huron 与 Superior 的外来管理语境 | `{ x: 0.57, y: 0.49 }` |
| `05-buried-ammocoete-filter-feeding.webp` | 一只棕褐幼体埋在粉砂、细砂和碎屑中，只让无齿口罩与覆沙前端接触水流 | 眼和鳃孔列受皮肤或沉积物遮挡；没有成体齿盘或寄生姿势 | `{ x: 0.33, y: 0.58 }` |
| `06-edna-stream-monitoring.webp` | 两名研究人员在温带河缘采集并过滤水样，画面没有动物、陷阱或药剂 | eDNA 单样不能证明存在、缺失、数量、身份或趋势；不代表完整规程 | `{ x: 0.59, y: 0.52 }` |

### 分帧提示词补充

**01 封面**：`photorealistic underwater natural-history editorial, one entire sea lamprey Petromyzon marinus forming a compact vertical S-curve in the right half, high dorsal view with branchial row fully hidden, two separate dorsal fins, spade-shaped caudal fin, no paired fins, entire left 40 percent calm open-water negative space`。

**02 形态**：`scientific wildlife macro photograph of one living sea lamprey, round oral suction disc facing three-quarter toward camera, dense radial rows of small keratinous horn teeth, rasping tongue centered, one median nostril on top, two small lateral eyes, exactly seven round gill pores on visible side, smooth scaleless skin, no host, no wound`。普通生成模型容易把齿盘画成沙丘蠕虫或七鳃鳗玩具，验收时应与 FAO 口盘线图核对。[FAO plate](https://www.fao.org/4/i2335e/i2335e.pdf)

**03 筑巢**：`one sex-indeterminate breeding sea lamprey in a flowing gravel-bed tributary, oral disc firmly attached to one small rounded pebble while moving it, shallow gravel depression, clear oxygenated current, no mate, no eggs`。

**04 寄生**：`one sea lamprey attached flush to the flank of one large lake trout in an upper-four Great Lakes management-context reconstruction, thin oral-disc rim sealed against fish, branchial row partly hidden by oblique perspective, intact host silhouette, restrained non-graphic editorial, no visible blood, no open wound`。口盘不能悬空张开；附着图不能写成已经杀死宿主，caption 不覆盖起源仍有争议的 Lake Ontario。

**05 幼体**：`one sea lamprey ammocoete larva mostly buried in soft silty fine sand with organic detritus, toothless horseshoe-shaped oral hood at sediment surface facing gentle current, eye and branchial row hidden by skin or fine sediment, muted brown body, no adult suction disc, no teeth`。

**06 监测**：`documentary conservation photograph, exactly two field researchers collecting and filtering a stream-water eDNA sample, no visible animal, trap, net, electrofisher or chemical treatment, no logos, no readable forms`。

### 静态验收

1. 01、02、03、04 的成体外形没有成对鳍、鳞片、颌或鳃盖；02 与 03 提供完整可数的近侧七孔，01 与 04 的斜侧图不展示错误的完整孔列。
2. 02 只出现一个口盘和一个中线鼻孔；角质齿覆盖口盘各区，画面没有外星式同心肉瓣。
3. 03 口盘只吸住一块小卵石，画面不指定性别，也不暗示产卵、护卵或完成巢穴。
4. 04 口盘贴住宿主，斜侧鳃区接触水体；宿主完整，无血腥伤口或死亡姿势。
5. 05 幼体的眼和鳃区受遮挡、口部为无齿口罩，身体埋在软沉积物；画面没有成体齿盘。
6. 06 只显示通用 eDNA 水样采集，不把一次采样写成物种存在、数量、身份或趋势证据。

## 应删除或避免的说法

- 不把海七鳃鳗写成鳗鲡、蛇、盲鳗或软骨鱼纲成员。
- 不用 `Cephalaspidomorphi` 覆盖本轮 WoRMS `Petromyzonti` 纲级口径；来源说明保留数据库差异。
- 不把 `Lake Lamprey` 当成独立种或正式亚种。
- 不说“七对眼睛”。名称中的“七鳃”对应每侧七个鳃孔，眼只有一对。
- 不把角质齿写成骨质牙，也不生成上下颌。
- 不给幼体画成体口盘、可见大眼或寄生攻击。
- 不说所有海七鳃鳗都在海里生活；陆封种群可终生生活在淡水。
- 不写所有个体固定幼体五年、寄生十八个月、寿命十一年或怀卵十万粒。
- 不把 1.2 米、2.3 千克当作平均成体，也不把五大湖 60 厘米上限当作全种上限。
- 不把 4,099 米记录填为主动潜水深度。
- 不写每只固定杀死 18 至 20 千克鱼；该数值来自 Great Lakes 实验和模型上限。
- 不说海七鳃鳗单独造成五大湖渔业崩溃；过度捕捞、污染和食物网变化也参与历史过程。
- 不把幼体气味简化为一个已完全解析的分子配方，也不宣称成体精准返回出生河。
- 不把全球 LC 改写成“各地无风险”；OSPAR、HELCOM 和若干国家记录区域衰退。
- 不把 OSPAR 清单、欧盟附录 II、伯尔尼附录 III 和 IUCN LC 合成一个保护等级。
- 不说欧盟附录 II 等于全面禁捕；该附录的核心是特别保护区指定。
- 不把 CMS 2026 研究清单写成 CMS 附录列名。
- 不在大西洋原生范围推广 TFM、屏障和清除，也不在上游五大湖把该种描述为需要恢复的受威胁原生鱼。
- 不宣布 Lake Ontario、Lake Champlain 或 Finger Lakes 的起源争论已经解决。
- 不声称按规定使用的 TFM 对所有非目标生物绝对无害。

## 实现字段草案

```ts
const SEA_LAMPREY_SOURCE_DATE = '2026-08-27' as const;
const SEA_LAMPREY_CONTENT_DATE = '2026-08-27' as const;

{
  id: 'species-petromyzon-marinus',
  slug: 'sea-lamprey',
  names: {
    zh: '海七鳃鳗',
    en: 'Sea Lamprey',
    aliases: ['海七鰓鰻', 'Lake Lamprey'],
  },
  scientificName: 'Petromyzon marinus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Petromyzonti', '七鳃鳗纲'),
    taxon('Petromyzontiformes', '七鳃鳗目'),
    taxon('Petromyzontidae', '七鳃鳗科'),
    taxon('Petromyzon', '海七鳃鳗属'),
  ),
  conservation: conservation('LC', 'stable', 2022),
  // distribution, habitats, measurements 与 diet 使用上文章节草案
  activity: ['幼体埋栖滤食', '寄生期湖海摄食', '夜间迁徙活动', '溯河产卵', '一次繁殖后死亡'],
  tags: ['无颌脊椎动物', '溯河洄游', '生活史变态', '大西洋原生种', '五大湖外来入侵种', '欧盟附录 II'],
  metrics: {},
  publishedAt: SEA_LAMPREY_CONTENT_DATE,
  updatedAt: SEA_LAMPREY_CONTENT_DATE,
}
```

`summary` 建议：

> 一种跨越河流与海洋的无颌脊椎动物，幼体埋沙滤食，变态后以齿盘附着鱼类；原生河流保护它，五大湖则持续控制它。

`description` 建议：

> 海七鳃鳗用圆形口盘、角质齿和锉状舌取代颌。它在淡水软底中度过数年滤食幼体期，变态后进入海洋或大湖寄生摄食，随后停止进食并溯河完成一次繁殖。全球 IUCN 评估为无危，但欧洲多地仍记录衰退；上游五大湖的外来种群接受美加联合控制。

## 推荐来源数组

```ts
const SEA_LAMPREY_SOURCES = [
  {
    title: 'IUCN Red List: Petromyzon marinus (assessed 2022; published 2024)',
    url: 'https://doi.org/10.2305/IUCN.UK.2024-2.RLTS.T16781A58298056.en',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC: Freshwater fishes of potential interest for inclusion in CMS',
    url: 'https://iucn.org/sites/default/files/2024-01/freshwater-fishes-of-potential-interest-for-inclusion-in-cms-information-brief.pdf',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'WoRMS: Petromyzon marinus, AphiaID 101174',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=101174',
    kind: 'taxonomy',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'ITIS: Petromyzon marinus, TSN 159722',
    url: 'https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=159722',
    kind: 'taxonomy',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Taiwan Fish Database: Petromyzon marinus and Chinese name',
    url: 'https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=4&pz=500&vn=',
    kind: 'taxonomy',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'FAO 2011: Lampreys of the world',
    url: 'https://www.fao.org/4/i2335e/i2335e.pdf',
    kind: 'general',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'U.S. Fish and Wildlife Service: Sea Lamprey species profile',
    url: 'https://www.fws.gov/species/sea-lamprey-petromyzon-marinus',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'USGS Nonindigenous Aquatic Species: Petromyzon marinus',
    url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=836',
    kind: 'distribution',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Great Lakes Fishery Commission: Sea lamprey lifecycle',
    url: 'https://www.glfc.org/sea-lamprey-lifecycle.php',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Bjerselius et al. 2000: Larval bile acids as a migratory pheromone',
    url: 'https://www.usgs.gov/publications/direct-behavioral-evidence-unique-bile-acids-released-larval-sea-lamprey-petromyzon-0',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Johnson et al. 2012: Odor-conditioned rheotaxis toward sea lamprey pheromone',
    url: 'https://pubs.usgs.gov/publication/70042537',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Barany et al. 2020: Osmoregulatory role of the intestine in sea lamprey',
    url: 'https://pubs.usgs.gov/publication/70211049',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Swink 2003: Host selection and lethality of sea lamprey attacks',
    url: 'https://pubs.usgs.gov/publication/1000960',
    kind: 'ecology',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'OSPAR: Sea lamprey status assessment',
    url: 'https://oap.ospar.org/en/ospar-assessments/committee-assessments/biodiversity-committee/status-assesments/sea-lamprey/',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'HELCOM 2024 Red List: Petromyzon marinus',
    url: 'https://helcom.fi/wp-content/uploads/2025/12/HELCOM-Red-List-Petromyzon-marinus_II.pdf',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'EU Council Directive 92/43/EEC: consolidated Habitats Directive',
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A01992L0043-20250714',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Bern Convention: Appendix III protected fauna',
    url: 'https://rm.coe.int/1680304356',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Convention on Great Lakes Fisheries, 1954',
    url: 'https://www.glfc.org/pubs/conv.htm',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
  {
    title: 'Great Lakes Fishery Commission: Sea Lamprey Control in the Great Lakes 2025',
    url: 'https://www.glfc.org/pubs/slcp/annual_reports/ANNUAL_REPORT_2025.pdf',
    kind: 'conservation',
    accessedAt: SEA_LAMPREY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```
