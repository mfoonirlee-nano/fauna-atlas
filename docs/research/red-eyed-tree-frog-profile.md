# 红眼树蛙（*Agalychnis callidryas*）完整档案研究

- 研究对象：*Agalychnis callidryas* (Cope, 1862)
- 建议 slug：`red-eyed-tree-frog`
- 检索截止日与来源访问日期：2026-08-31
- 用途：完成 `docs/todo.md` 中红眼树蛙条目，支持 `src/data/species.ts`、详情页长文、数字卡、六幅物种图片与静态资产验收
- 证据标准：分类和当前分布以美国自然历史博物馆 *Amphibian Species of the World*（ASW）为主；全球保护状态和贸易法律状态分别使用 IUCN 与 CITES；形态、行为、胚胎孵化、蝌蚪摄食和污染响应尽量回到同行评审原始研究；巴拿马自然史概括使用 Smithsonian Tropical Research Institute（STRI）的机构物种账户
- 排除来源：百科、动物园科普、宠物饲养页、商业繁殖页、新闻转述和没有原始样本边界的数字均不进入推荐字段

来源类型标签：`[官方分类数据库]`、`[官方保护评估]`、`[DOI 注册元数据]`、`[政府间公约]`、`[机构物种账户]`、`[同行评审原始研究]`。编辑推断和保护建议会另行标明。

## 首要边界：2019 年后的物种概念

ASW 当前接受名为 ***Agalychnis callidryas* (Cope, 1862)**，分类链是 Animalia > Chordata > Amphibia > Anura > Phyllomedusidae > *Agalychnis*。原始组合是 *Hyla callidryas* Cope, 1862；仓库 `scientificName` 只保存双名，不并入命名人和年份。[ASW *A. callidryas* account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)

2019 年修订把 ***Agalychnis taylori*** 从 *A. callidryas* 的同物异名中恢复为有效种。ASW 当前把 *A. taylori* 的范围写作墨西哥大西洋低地、伯利兹、危地马拉和洪都拉斯中西部；因此旧资料中“红眼树蛙从墨西哥南部一直分布到哥伦比亚”的说法，不再能无条件用于狭义 *A. callidryas*。ASW 还明确提醒，1967 至 2019 年间采用旧广义物种概念的文献须谨慎使用。[ASW *A. taylori* account](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-taylori)；[ASW *A. callidryas* comment](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)

ASW 的同一 *A. callidryas* 页面存在内部不一致：叙述范围已经排除墨西哥，但结构化 `Natural Resident` 列表仍保留墨西哥。实施时以经 2019 年拆分修订的叙述范围和独立的 *A. taylori* 页面交叉核对，`countries` 不写墨西哥、伯利兹或危地马拉。洪都拉斯横跨两个现行物种范围，红眼树蛙条目只能笼统保留东北部；地图不能把整个国家涂满。[ASW *A. callidryas* distribution](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)；[ASW *A. taylori* distribution](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-taylori)

ASW 还记录了两个未完全收束的边界。哥伦比亚马格达莱纳河谷旧记录现归 ***A. terranova***；2019 年作者提出洪都拉斯东部至哥斯达黎加北部种群可能对应可用名 ***A. helenae***，但没有正式采取该分类动作。当前页面仍按接受名 *A. callidryas* 处理这些尚未拆出的种群，同时保留研究地点，避免把局地实验写成全范围常数。[ASW *A. callidryas* comment](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)

## 可直接采用的结论

### 名称、分类与法律状态

1. `[官方分类数据库]` 中文主名采用 TODO 的“红眼树蛙”，英文主名采用 `Red-eyed Treefrog`。可收录 `Red-eyed Leaf Frog`、`Red-eyed Multicolored Treefrog` 和 `Gaudy Leaf Frog` 为检索别名，但旧英文俗名的地理使用史可能覆盖现已拆出的 *A. taylori*，不能反过来界定物种。[ASW common names](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)；[STRI/Biota de Panamá account](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
2. `[官方分类数据库]` 当前科级分类是 **Phyllomedusidae**。STRI 旧账户和 CITES 法律清单仍显示 Hylidae，这是资料采用的旧分类标准，不应覆盖仓库当前分类树。[ASW taxonomy](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)；[CITES taxon record](https://cites.org/eng/taxonomy/term/4867)
3. `[官方保护评估 + DOI 注册元数据]` IUCN 现行可识别评估 DOI 为 `10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en`，类别 **Least Concern（LC，无危）**，种群趋势 **decreasing（下降）**。Crossref 的 `issued/published` 日期是 **2016-06-21**，2020-1 是红色名录发布卷期，故仓库推荐 `assessedYear: 2016`，不填受胁类别 criteria。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en)；[Crossref DOI record](https://api.crossref.org/works/10.2305%2FIUCN.UK.2020-1.RLTS.T55290A3028059.en)
4. `[官方保护评估 + 官方分类数据库]` 该 IUCN 评估早于 2019 年 *A. taylori* 复有效名，评估所用物种范围很可能仍是旧广义 *A. callidryas*。页面可以如实显示现行记录的 `LC / decreasing / 2016`，但正文必须说明：这不等于 2019 年后狭义物种已完成独立重评估。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en)；[ASW taxonomic comment](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)
5. `[政府间公约]` CITES 当前物种记录把 *A. callidryas* 列入 **附录 II**；现行附录以 `Agalychnis spp.` 列名并明确包括本种。附录 II 表示国际贸易须受许可证与可持续性监管，不是全面禁贸，也不能据此断言每一只圈养个体来源非法。[CITES taxon record](https://cites.org/eng/taxonomy/term/4867)；[CITES Appendices](https://cites.org/sites/default/files/eng/app/2025/E-Appendices-2025-02-07.pdf)

### 当前分布、海拔与生境

6. `[官方分类数据库]` 2019 年拆分后的叙述范围为：洪都拉斯东北部与尼加拉瓜东部沿加勒比低地向东南至巴拿马中部；哥斯达黎加南部与巴拿马东部的太平洋低地向南到哥伦比亚乔科，并向北延至安蒂奥基亚西部、苏克雷西部和玻利瓦尔北部。已记录海拔从海平面到 **1325 米**。[ASW distribution](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)
7. `[机构物种账户]` 巴拿马账户把主要环境概括为湿润低地森林；成体可能多在林冠或较高植被活动，繁殖期下降到临时或永久池塘周围的树木和灌木。旱季曾在棕榈叶和凤梨科植物中发现个体。“可能多在林冠”不等于严格树冠专性，也不等于成体常驻池水。[STRI/Biota de Panamá habitat and ecology](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
8. `[同行评审原始研究]` 卵团附着在池塘上方的叶片或其他植被，孵化后蝌蚪落入水中。这个生命史横跨陆生植被与淡水两个环境，所以 `distribution.realms` 应同时包括 `terrestrial` 和 `freshwater`。[Warkentin 1995](https://doi.org/10.1073/pnas.92.8.3507)；[Warkentin, Caldwell & McDaniel 2006](https://doi.org/10.1242/jeb.02150)
9. `[同行评审原始研究]` 哥斯达黎加科尔科瓦多国家公园 Sirena 一处林地湿地调查中，研究者记录到的红眼树蛙卵团均位于水面上方不超过 1.52 米。该数值是一个地点、一次调查的微生境结果，不能变成全物种固定产卵高度。[Griffis-Kyle et al. 2023](https://doi.org/10.1111/btp.13162)

### 形态、体尺与颜色变异

10. `[机构物种账户]` 巴拿马成体体形修长，四肢细；雄体小于雌体，账户给出的最大吻肛长为雄 **56 毫米**、雌 **71 毫米**。这些是巴拿马资料的上限，不是经现物种范围重采样后的全球性别范围。[STRI/Biota de Panamá description](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
11. `[同行评审原始研究]` Duellman 的巴拿马 Cerro La Campana 样本中，26 只雄体吻肛长 44.5–50.9 毫米，七只雌体 54.4–66.1 毫米。样本可支持性别体型差异和巴拿马局地量级，不能把 44.5 毫米写成全物种成体下限。[Duellman 1970](https://kuscholarworks.ku.edu/bitstream/1808/25332/1/Duellman_NHMUK_1970.pdf)
12. `[机构物种账户]` 可靠识别组合包括：明亮至深绿色、通常平滑的背面；乳白腹面；鲜红虹膜和垂直瞳孔；带浅黄至亮黄网纹的瞬膜；中度蹼化的手足、大型趾端吸盘；深蓝至紫色体侧配乳白或黄色竖条。体侧条纹数量与宽度变化很大，隐蔽的大腿面可为橙色或蓝色。[STRI/Biota de Panamá description](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
13. `[同行评审原始研究]` 哥斯达黎加太平洋岸种群的腿部颜色从北部橙色过渡到南部紫色，过渡带可见多种色型共存。基因资料显示强烈的距离隔离格局，未支持色型过渡由近期杂交单独造成；表型变化大于单凭遗传和地理距离所能预期。图片应表现一个有出处的色型，不能把橙足、蓝足或紫色体侧写成全范围唯一标准。[Clark et al. 2022](https://doi.org/10.1111/mec.16350)
14. `[机构物种账户]` 刚变态幼蛙可呈绿色或褐色，眼睛最初为黄色，体侧花纹尚未出现；成体色彩在随后数周逐渐显现。不要把所有幼蛙画成成体的等比例缩小版。[STRI/Biota de Panamá development](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
15. `[证据缺口]` 本次没有找到可用于全物种字段的可靠野生成体体重、成熟年龄、世代长度或寿命区间；STRI 也明确写野外成熟时间与寿命未知。`measurements.weight`、`metrics.adultMassKg` 和 `metrics.lifespanYears` 应留空。[STRI/Biota de Panamá development](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)

### 食性、摄食与活动

16. `[机构物种账户]` STRI 明确写本种**成体食谱未知**，只推测取食小型节肢动物。因此产品可写“成体被推测捕食小型陆生节肢动物，缺少物种级野外定量食谱”，不能列出苍蝇、蟋蟀、蛾或甲虫为已证实的野外主食，也不能给比例。[STRI/Biota de Panamá diet](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
17. `[同行评审原始研究]` 巴拿马实验把红眼树蛙蝌蚪描述为水体中层的悬浮摄食者；围隔实验显示它们可影响浮游植物、附着藻和浮游动物。这个结果支持幼体的滤食/刮食生态，不证明自然池塘中每一类食物的固定占比。[Costa & Vonesh 2013](https://doi.org/10.1111/btp.12032)
18. `[机构物种账户]` 蝌蚪常在水柱中近垂直、头朝上悬停，体色可为黄褐、褐、灰或蓝灰，尾鳍透明。该姿势很适合表现悬浮摄食，但不能把一次静止姿势画成永久倒立。[STRI/Biota de Panamá tadpole account](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)
19. `[同行评审原始研究]` 红眼树蛙在湿林池塘植被上形成夜间繁殖集群；雄蛙守住鸣叫位置，发出广告叫声和冲突叫声。页面宜写“繁殖期最清楚记录的成体社交活动发生在夜间池塘周围”，不写“只在夜间活动”。[Caldwell et al. 2010](https://doi.org/10.1016/j.cub.2010.03.069)
20. `[同行评审原始研究]` 雄蛙冲突时会抬高身体并快速屈伸后肢，使所处植物发生颤动。机器人模型和振动回放实验表明，颤动产生的植物基质振动对诱发对手颤动反应既必要又充分；匹配幅度和时长的白噪声振动不能引发同样反应。部分冲突升级为摔跤，研究中有三对连续摔跤超过四小时。这是雄雄竞争，不是求偶舞蹈，也不是所有遭遇的固定结果。[Caldwell et al. 2010](https://doi.org/10.1016/j.cub.2010.03.069)

## 繁殖、发育与振动触发的提前孵化

### 产卵和两阶段生命史

巴拿马的繁殖季大体随雨季，在重雨后的夜晚，雄蛙会在临时或永久池塘周围的树木、灌木上合唱。卵产在水面上方的叶片，外有厚而透明的胶质；蝌蚪孵化后落入池塘继续发育。具体月份随地点和雨季长短变化，不宜做成全物种固定日历。[STRI/Biota de Panamá breeding account](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)；[Warkentin 1995](https://doi.org/10.1073/pnas.92.8.3507)

巴拿马账户称幼体最快约四周可变态，但池塘条件会使幼体期明显变化。这个最短观察值不能写作“蝌蚪期固定四周”；野外成熟年龄仍未知。[STRI/Biota de Panamá development](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)

### 蛇袭击、风险权衡与提前孵化

Warkentin 1995 年的野外实验显示，食卵蛇攻击树上卵团时，胚胎会快速破卵并落入下方水中；未受攻击的胚胎留在卵中更久，而较晚孵化的蝌蚪面对水生捕食者时存活更好。提前孵化因此是一种能逃离当前危险、却把个体更早送入水中风险的有代价防御，不是“越早越好”。[Warkentin 1995](https://doi.org/10.1073/pnas.92.8.3507)；[Warkentin 1999](https://doi.org/10.1111/j.1095-8312.1999.tb01180.x)

巴拿马未受扰动胚胎通常在产卵后约 6–7 天自然孵化；强缺氧时最早约三日龄可孵化，面对捕食者的机械刺激则约从四日龄起出现反应。年龄随温度、地点、亲本和发育阶段变化，字段应写“约”和地点，不把“第 4 天”做成自动触发器。[Cohen et al. 2019](https://doi.org/10.1093/biolinnean/bly214)；[Warkentin et al. 2017](https://doi.org/10.1016/j.anbehav.2017.05.008)

蛇攻击可使胚胎比未受扰动孵化最多提前约 30%。该百分比描述研究中的发育提前幅度，不表示每次攻击都有 30% 的卵孵化，也不是 30% 的存活提升。[Warkentin 2005](https://doi.org/10.1016/j.anbehav.2004.09.019)；[Jung et al. 2019](https://doi.org/10.1242/jeb.206052)

### 胚胎如何判断振动

胚胎并不是看见蛇或听见空气中的“蛇声”。捕食者咬、拉卵团时产生的运动与振动通过胶质卵团和植物传给胚胎。自然蛇袭与暴雨产生的振动频谱和幅度有重叠，因此单一强度或单一频率不能可靠标记危险。[Warkentin 2005](https://doi.org/10.1016/j.anbehav.2004.09.019)；[Caldwell, McDaniel & Warkentin 2009](https://doi.org/10.1242/jeb.026518)

回放实验显示，振动持续时间、振动间隔和频率共同影响孵化决定。2006 年合成刺激实验中，胚胎只对一小段时序组合强烈反应，而非对大多数振动都孵化；2009 年实验进一步显示频率信息要与时序信息组合，才有助于区分捕食与无害扰动。页面可以写“识别一组振动特征”，不能写“只要叶子一震就跳水”。[Warkentin, Caldwell & McDaniel 2006](https://doi.org/10.1242/jeb.02150)；[Caldwell, McDaniel & Warkentin 2009](https://doi.org/10.1242/jeb.026518)

胚胎还会跨多个振动周期采样信息，孵化延迟随线索积累和风险变化；暴雨开头的低强度振动与后续振动间隔能减少误报。这里的“决定”是可测量的胚胎行为调节，不意味着具有人类式推理，也不意味着每个胚胎同步行动。[Warkentin et al. 2007](https://doi.org/10.1242/jeb.001362)；[Caldwell et al. 2010](https://doi.org/10.1016/j.anbehav.2009.11.005)

发育限制同样重要。强缺氧诱导的孵化平均比机械刺激诱导的孵化早约八小时出现；两种反应都在数小时内由 0 增到 100%。这说明早期胚胎即使已经能破卵，也可能尚未具备足够的机械感觉能力来响应袭击线索。[Warkentin et al. 2017](https://doi.org/10.1016/j.anbehav.2017.05.008)

后续功能实验显示，发育中的内耳前庭机械感受和侧线神经丘都参与逃生孵化，二者的重要性随发育阶段和刺激类型改变。应写“用机械感觉系统感知卵团扰动”，不要写“胚胎用耳朵听见蛇”；也不要把侧线或内耳任何一个系统说成唯一传感器。[Jung et al. 2019](https://doi.org/10.1242/jeb.206052)；[Jung, Serrano-Rojas & Warkentin 2020](https://doi.org/10.1242/jeb.236141)

### 破卵机制

高速摄影显示，红眼树蛙胚胎孵化会先摇动、张口，接着在吻端附近破开卵膜，再以肌肉运动退出；一次完整过程约 6.5–49 秒。孵化腺细胞集中于吻部，可快速释放含酶囊泡。画面可以表现胚胎从吻端破膜，不应画成胶质卵团爆炸或蛇把蝌蚪咬出来。[Cohen, Seid & Warkentin 2016](https://doi.org/10.1242/jeb.139519)

2019 年研究区分出两类孵化腺细胞：较早出现的细胞支持低龄胚胎在缺氧下离卵，较晚出现且集中于吻端的细胞维持更后期的逃生孵化能力。胶质和卵膜在整个可孵化期仍保持结构，不是随时间自然腐烂到被动裂开。[Cohen et al. 2019](https://doi.org/10.1093/biolinnean/bly214)

## 威胁、保护与证据边界

IUCN 现行记录为 LC、趋势下降。正式评估理由包括分布较广、推定种群较大、对部分改造生境有一定耐受，并认为下降速度尚未达到受胁类别门槛；但评估早于 2019 年分类拆分，不能把这些判断无损投射到现行每个谱系。[IUCN assessment DOI](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en)；[ASW taxonomic comment](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)

CITES 2010 年列名提案记录了森林丧失与退化、两栖疾病和国际宠物贸易压力，并指出 *A. callidryas* 当时是该属国际贸易中最常见的物种。它采用拆分前的旧分布和分类，适合说明列名历史，不适合提供当前狭义物种的野外数量、当前年度贸易量或主要下降驱动排序。[CITES CoP15 Prop. 13](https://cites.org/sites/default/files/eng/cop/15/prop/E-15-Prop-13.pdf)；[CITES IUCN/TRAFFIC analysis](https://cites.org/sites/default/files/eng/cop/15/inf/E15i-18A.pdf)

2010 至 2012 年 CITES 贸易审查中，进口方申报从尼加拉瓜出口 60,430 只活体，绝大部分申报为圈养繁殖；后续委员会文件讨论了圈养来源代码和可追溯性疑点。数字只能作为该历史三年期的申报量，不能写成当前年贸易量，也不能证明所有申报个体来自野外或所有贸易违法。[CITES AC27 Doc. 17](https://cites.org/sites/default/files/eng/com/ac/27/E-AC27-17.pdf)；[CITES AC29 Inf. 25](https://cites.org/sites/default/files/eng/com/ac/29/inf/E-AC29-Inf-25.pdf)

哥斯达黎加幼体毒理实验显示，本种蝌蚪对杀菌剂百菌清暴露会出现存活和生长影响。一个八日实验中，浓度不低于 60 微克/升降低存活，约 15 微克/升已抑制生长；另一 96 小时实验估算 LC50 为 26.6 微克/升。它们证明实验条件下的敏感性，不等于野外种群已经因该浓度发生可量化下降，也不能把实验 LC50 做成一般水质安全阈值。[Alza, Donnelly & Whitfield 2016](https://doi.org/10.1002/etc.3484)；[Méndez et al. 2016](https://doi.org/10.1007/s11356-016-7301-1)

保护行动宜写成有证据支撑的方向，而不是冒充 IUCN 指定恢复计划：保护并连接湿润森林、繁殖池塘及水面上方植被；控制农业径流和水体污染；监测狭义种及潜在 *A. helenae* 谱系的分布与趋势；国际贸易执行 CITES 许可、来源代码和谱系可追溯性；推动 2019 年拆分后的 IUCN 重评估。这些行动分别回应两阶段生境、实验污染敏感性、分类缺口和贸易记录。[ASW current range](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)；[Alza, Donnelly & Whitfield 2016](https://doi.org/10.1002/etc.3484)；[CITES taxon record](https://cites.org/eng/taxonomy/term/4867)

疾病对本种的种群级影响仍不清楚。旧 STRI 账户讨论壶菌感染和潜在储存宿主角色，CITES 提案把壶菌病列为属级压力，但本次没有找到能把疾病量化为现行狭义 *A. callidryas* 全球下降主因的原始种群研究。产品不应写“对壶菌免疫”“主要因壶菌下降”或“已证实是关键传播源”。[STRI/Biota de Panamá ecology](https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678)；[CITES CoP15 Prop. 13](https://cites.org/sites/default/files/eng/cop/15/prop/E-15-Prop-13.pdf)

## 实现就绪字段

### 名称与分类

```ts
id: 'species-agalychnis-callidryas',
slug: 'red-eyed-tree-frog',
names: {
  zh: '红眼树蛙',
  en: 'Red-eyed Treefrog',
  aliases: [
    'Red-eyed Tree Frog',
    'Red-eyed Leaf Frog',
    'Red-eyed Multicolored Treefrog',
    'Gaudy Leaf Frog',
  ],
},
scientificName: 'Agalychnis callidryas',
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Amphibia', '两栖纲'),
  taxon('Anura', '无尾目'),
  taxon('Phyllomedusidae', '叶泡蛙科'),
  taxon('Agalychnis', '红眼雨蛙属'),
),
```

“叶泡蛙科”和“红眼雨蛙属”是仓库中文编辑节点；可审计的分类锚点是科学名 Phyllomedusidae 与 *Agalychnis*。不要因 CITES 或旧 STRI 页面仍写 Hylidae 而回退当前分类。[ASW taxonomy](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas)

### IUCN 与 CITES

```ts
conservation: conservation('LC', 'decreasing', 2016),
```

| 字段 | 推荐值 | 证据边界 |
| --- | --- | --- |
| `code` | `LC` | 现行 assessment id 3028059 的正式类别。 |
| `trend` | `decreasing` | 现行评估记录的趋势，不表示每个局地谱系都已量化下降。 |
| `assessedYear` | `2016` | DOI `issued/published` 日期；2020-1 是发布卷期。 |
| `criteria` | 省略 | LC 没有受胁类别 A–E criteria 字符串。 |
| `assessor` | helper 默认的 IUCN SSC Amphibian Specialist Group | 与 DOI 标题一致。 |
| CITES | 正文/事实写附录 II | 现有 schema 没有法律状态字段，不混入 IUCN `conservation`。 |

必须在详情正文或 key fact 邻近位置写明：评估早于 2019 年 *A. taylori* 复有效名，狭义种需要重评估。

### 分布、生境与地图

```ts
distribution: {
  realms: ['terrestrial', 'freshwater'],
  continents: ['北美洲', '南美洲'],
  regions: [
    '洪都拉斯东北部与尼加拉瓜东部加勒比低地',
    '哥斯达黎加南部与巴拿马太平洋低地',
    '巴拿马加勒比低地与中部低地',
    '哥伦比亚乔科及西北部低地',
  ],
  countries: ['洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马', '哥伦比亚'],
  range:
    '按 2019 年拆分后的现行分类，分布于洪都拉斯东北部、尼加拉瓜东部，沿中美洲低地经哥斯达黎加和巴拿马延伸到哥伦比亚乔科及西北部，记录海拔为海平面至 1325 米。墨西哥、伯利兹、危地马拉和洪都拉斯中西部种群现归 Agalychnis taylori；马格达莱纳河谷旧记录现归 A. terranova。',
  center: { lat: 9.1, lng: -81.8 },
},
habitats: [
  {
    name: '热带湿润低地森林与林缘植被',
    realm: 'terrestrial',
    isPrimary: true,
    description:
      '成体在树木、灌木和较高植被活动，繁殖期下降到林内池塘周围；巴拿马资料也记录旱季藏身于棕榈叶和凤梨科植物。',
  },
  {
    name: '池塘上方的叶片与胶质卵团',
    realm: 'terrestrial',
    description:
      '卵附着在临时或永久池塘上方的叶片或植被，孵化后蝌蚪直接落入水中。',
  },
  {
    name: '临时与永久森林池塘',
    realm: 'freshwater',
    description:
      '蝌蚪在池塘水柱中发育和悬浮摄食；池塘条件会改变幼体生长、捕食风险和变态时机。',
  },
],
```

`center` 只是哥斯达黎加至巴拿马一带的地图视口焦点，不是分布质心、模式产地、丰度中心或个体坐标。不要把墨西哥纳入当前原生范围，也不要公开繁殖池精确点位。

### 体尺、食性和活动

```ts
measurements: {
  length: {
    max: 7.1,
    unit: 'cm',
    note:
      '巴拿马机构账户所列雌体最大吻肛长；同一账户列雄体最大 5.6 cm。Duellman 的 Cerro La Campana 局地样本为雄 4.45–5.09 cm、雌 5.44–6.61 cm，不代表全物种硬范围。',
  },
},
diet: {
  types: ['carnivore', 'filter-feeder'],
  foods: [
    '成体：推测为小型陆生节肢动物，缺少物种级野外定量食谱',
    '蝌蚪：水柱悬浮颗粒、浮游生物与附着藻，比例随环境变化',
  ],
  description:
    '生命阶段的摄食方式不同。成体被推测捕食小型节肢动物，但野外食谱尚未定量；蝌蚪是水体中层悬浮摄食者，也能刮食附着藻，围隔实验显示其会影响浮游植物、附着藻和浮游动物。',
},
activity: [
  '树栖，繁殖期在森林池塘周围植被活动',
  '繁殖集群与雄性竞争主要在夜间被记录',
  '雄蛙鸣叫并以后肢颤动产生植物基质振动',
  '雄雄冲突可由颤动展示升级为摔跤',
  '陆生卵中的胚胎可依据袭击振动调整孵化时间',
  '蝌蚪在淡水池塘水柱中发育和悬浮摄食',
],
tags: [
  '无尾目',
  '叶泡蛙科',
  '中美洲',
  '哥伦比亚',
  '热带湿润森林',
  '树栖',
  '陆地产卵',
  '池塘蝌蚪',
  '振动通讯',
  '风险诱导孵化',
  'CITES 附录 II',
],
metrics: {
  elevationM: [0, 1325],
},
```

`metrics.adultLengthCm` 最好留空。可核验的全范围体长下限不足，而把巴拿马一个样本与机构最大值拼成全物种范围会制造虚假精度。体重、寿命、成熟年龄、全球成熟个体数也全部留空。

如果产品展示 `carnivore` 和 `filter-feeder` 标签，必须在同屏说明前者是成体推测、后者是蝌蚪实测，不能让读者误以为成年蛙滤食或蝌蚪主要捕食昆虫。

### 推荐摘要、长描述与 key facts

```ts
summary:
  '红眼树蛙是中美洲南部至哥伦比亚湿润森林中的树栖蛙。它把胶质卵团产在池塘上方的叶片，胚胎可综合蛇袭产生的振动时序、频率与幅度，提前破卵落水；这能逃离眼前捕食，却让更幼小的蝌蚪更早面对水中风险。',
description:
  '红眼树蛙属于叶泡蛙科红眼雨蛙属。2019 年 Agalychnis taylori 从其旧广义物种概念中恢复后，现行范围不再包括墨西哥、伯利兹和危地马拉，而从洪都拉斯东北部、尼加拉瓜东部经哥斯达黎加和巴拿马低地延伸到哥伦比亚乔科及西北部。成体有绿色背面、红色虹膜、垂直瞳孔、大型趾端吸盘和彩色体侧，但腿与体侧色型沿地理显著变化。繁殖时卵团附着在池塘上方植被；未受扰动的巴拿马胚胎通常约六至七日孵化，发育达到能力门槛后则可根据捕食者扰动产生的复合机械线索提前离卵。提前孵化不是无代价反射，较幼小的孵化蝌蚪在水中更易受捕食。雄蛙也利用植物基质振动竞争，通过快速屈伸后肢使枝叶颤动。IUCN 现行记录为无危、趋势下降，记录日期 2016 年；该评估早于 2019 年分类拆分，狭义物种仍需重评估。',
keyFacts: [
  '红色虹膜配垂直瞳孔、大型趾端吸盘和绿色背面是可靠识别组合；腿部与体侧颜色会随地理种群变化。',
  '卵不是产在水里，而是包在透明胶质中，附着于池塘上方的叶片或其他植被。',
  '蛇袭产生的卵团运动和振动可触发提前孵化；胚胎组合使用时序、频率、幅度和多周期采样，不是对每次震动都跳水。',
  '提前孵化能逃离食卵捕食者，却使发育较早的蝌蚪更易遭受水生捕食者，形成跨生命阶段风险权衡。',
  '雄蛙竞争时也会用后肢使植物颤动；实验表明特定颤动振动而非任意噪声振动能诱发对手回应。',
  '成体野外食谱尚未被可靠定量；蝌蚪则是有直接研究支持的水柱悬浮摄食者。',
  '2019 年 Agalychnis taylori 恢复为有效种，旧资料里的墨西哥、伯利兹和危地马拉记录不能继续归入现行 A. callidryas。',
  'IUCN 的 LC、下降、2016 记录早于分类拆分；CITES 附录 II 管制国际贸易，但不等于禁贸。',
],
```

### 六个 story candidates

```ts
storySections: [
  {
    key: 'a-variable-color-map',
    label: '不止一种配色',
    title: '红眼不变，腿和体侧却沿海岸换色',
    body:
      '绿色背面、红色虹膜、垂直瞳孔和大型趾端吸盘构成醒目的识别组合，但彩色部分不是统一制服。哥斯达黎加太平洋岸种群的腿色从北部橙色过渡到南部紫色，过渡带还有多种色型共存；体侧竖条的数量和宽度也会变化。',
  },
  {
    key: 'eggs-between-two-worlds',
    label: '悬在两界之间',
    title: '卵在叶上，蝌蚪的世界却在水下',
    body:
      '雌蛙把胶质卵团留在池塘上方的叶片或其他植被。胚胎在空气中发育，孵化后直接落入水里。这个落差让孵化时机成为一次不可逆的栖息地切换：留在卵中与进入池塘，各有不同捕食风险。',
  },
  {
    key: 'vibration-risk-assessment',
    label: '卵中的机械感觉',
    title: '不是一震就逃，而是从振动模式里取样',
    body:
      '蛇咬住、拉扯卵团时会产生运动和振动。达到孵化能力的胚胎会综合振动持续时间、间隔、频率和幅度，并跨多个周期积累信息；暴雨也能强烈摇动卵团，因此只凭“震得很强”会产生许多误报。',
  },
  {
    key: 'early-hatching-tradeoff',
    label: '逃生有代价',
    title: '躲过树上的蛇，更早面对水里的猎手',
    body:
      '遭蛇袭的胚胎能在数秒内破膜落水，比自然孵化最多提前约三成发育时间。它们逃开当前的食卵捕食，却以更幼小的身体进入池塘；实验显示晚孵化蝌蚪面对水生捕食者时更有优势。',
  },
  {
    key: 'male-tremulation-signal',
    label: '会震动的争端',
    title: '雄蛙用整段枝叶传递竞争信号',
    body:
      '冲突中的雄蛙抬高身体，快速屈伸后肢，让所在植物发生颤动。回放实验中，只有包含真实颤动基质振动的刺激能稳定诱发对手颤动回应；任意白噪声振动不行。部分争端会升级为摔跤。',
  },
  {
    key: 'taxon-after-the-split',
    label: '地图被重新切开',
    title: '熟悉的“墨西哥到哥伦比亚”范围已经过时',
    body:
      '2019 年 Agalychnis taylori 从同物异名中恢复，墨西哥、伯利兹、危地马拉和洪都拉斯中西部种群不再属于现行红眼树蛙。IUCN 评估早于这次拆分，页面保留正式 LC 记录，也明确狭义物种尚待重评估。',
  },
],
```

## 六幅图片的证据计划与验收边界

| 画面 | 应表现 | 生物学锚点 | 必须拒绝 |
| --- | --- | --- | --- |
| 1. 夜间主视觉 | 一只完整成体栖在湿润阔叶上；红虹膜、垂直瞳孔、绿色背面、修长四肢和趾端吸盘清楚 | STRI 形态；Caldwell 等夜间繁殖植被场景 | 水平或圆瞳、没有趾端吸盘、箭毒蛙式粗短体形、手持摆拍、把红眼画成发光灯 |
| 2. 外部形态侧视 | 一只完整成体横向抓住细枝，红眼、体侧竖条、长肢与趾端吸盘保持可读；图注明确只代表一个个体 | Clark 等 2022；STRI 形态与颜色变异 | 把一种腿色称为全物种唯一颜色、凭商业“morph”标签命名野外亚种、无依据的荧光霓虹色 |
| 3. 低地湿林池塘 | 一只完整成体在水面上方叶片停栖，画面同时交代浓密植被与小型静水池塘 | STRI 生境；Warkentin 1995 两阶段生命史 | 把重建当作具体地点、繁殖证据、密度估计或全种唯一池塘类型 |
| 4. 夜间蛾类相遇 | 一只完整成体面向一只分离的小型蛾，闭口且没有伸舌，只表现可能的相遇 | STRI 对成体食谱的证据缺口 | 把蛾定为已证实主食、声称捕获成功、食性偏好、食谱比例或通用捕食动作 |
| 5. 叶上卵团 | 厚而透明的胶质卵团附着在水面上方叶片，胚胎可辨，下方是静水池塘 | STRI 繁殖账户；Warkentin 1995 | 泡沫巢、水下产卵、卵散落在干土、虚构亲蛙长期守巢、把卵画成鸟卵硬壳 |
| 6. 蛇袭与逃生孵化 | 一条闭口猫眼蛇接触卵团；三只彼此分开的无肢蝌蚪从未被咬住的卵中落向水面，画面克制、无血腥 | Warkentin 1995、2005；Cohen 等 2016 | 蛇隔空“发声”触发、胚胎看见蛇后同步爆炸、所有卵瞬间孵化、蛇主动把蝌蚪送进水、魔法振动特效 |

图片图注不得写“胚胎听到蛇”“一感到震动就提前孵化”或“第 4 天自动孵化”。建议写：“达到机械感觉孵化能力的胚胎，可综合蛇袭造成的卵团振动模式，提前破膜落入水中；暴雨等无害振动通常不会引发同等反应。”[Warkentin, Caldwell & McDaniel 2006](https://doi.org/10.1242/jeb.02150)；[Caldwell, McDaniel & Warkentin 2009](https://doi.org/10.1242/jeb.026518)

六幅图都应保留来源、生成流程与后期裁切记录。不得为取得参考画面而抓取、移动、刺激野生蛙、卵团或蛇；不得公开精确繁殖点坐标。这里是素材伦理与可追溯性要求，不是额外法律等级断言。

## 应删除或避免的说法

- 不写“自然分布从墨西哥南部到哥伦比亚”；2019 年后的现行范围已把北部种群划给 *A. taylori*。
- 不把 ASW 页面残留的 Mexico `Natural Resident` 结构化值抄进 `countries`；它与同页修订后的叙述范围及 *A. taylori* 页面冲突。
- 不写 Hylidae 为当前科；旧 STRI 与 CITES 法律清单的科名不覆盖 ASW 当前 Phyllomedusidae。
- 不写 IUCN “2020 年评估”；2020-1 是发布卷期，DOI 元数据日期为 2016-06-21。
- 不把 LC 写成“没有威胁”“数量稳定”或“无需保护”；正式趋势是下降，而且评估早于分类拆分。
- 不给 LC 伪造 A–E criteria，也不填写全球种群数量上下限。
- 不把 CITES 附录 II 写成禁止国际贸易；它要求管制、许可和可持续性审查。
- 不把 2010–2012 年 60,430 只贸易申报量写成当前年度交易量或野外捕获数。
- 不写成体体重、野外寿命或成熟年龄；本次没有找到足够证据。
- 不把巴拿马雌体 71 毫米最大值写成“通常 7.1 厘米”，也不把 Cerro La Campana 样本下限当全物种下限。
- 不把红眼、橙足、蓝体侧组合视为全范围唯一配色；腿色、体侧色和竖条均有地理变异。
- 不写“红色大眼用于吓退所有捕食者”；本次没有采用可支持该功能性断言的物种级实验。
- 不列苍蝇、蟋蟀、蛾、甲虫或其他具体类群为已确认野生成体主食；STRI 只写成体食谱未知、推测为小型节肢动物。
- 不把蝌蚪的悬浮摄食套到成体，也不把实验围隔中的食物影响换算成自然固定比例。
- 不写“胚胎看见蛇”“听到蛇”或“闻到蛇”；触发信息来自卵团的机械扰动与振动。
- 不写“一有震动就同步孵化”；胚胎会组合时序、频率、幅度并跨周期采样，雨振动可与袭击信号重叠。
- 不把“最多提前约 30%”写成 30% 的卵孵化、30% 的存活率或固定提前两天。
- 不把提前孵化描写成无代价超能力；较早孵化的幼体更易受水生捕食。
- 不写“卵第 4 天必定能逃”；低氧与机械刺激反应起点不同，个体、地点、温度和发育阶段都会改变时间。
- 不把孵化画成卵团爆炸、自然腐烂或蛇咬出蝌蚪；胚胎在吻部释放孵化酶并主动退出。
- 不把雄蛙颤动当作任意动作造成的噪声或求偶专用舞蹈；实验证实的是雄雄冲突中的特定基质振动信号。
- 不把百菌清实验浓度写成野外种群下降证据、饮用水标准或生态系统安全阈值。
- 不写“对壶菌免疫”或“已证实是疾病传播源”；现行狭义种缺少足够种群级证据。

## 推荐的物种专用 `SpeciesSource[]`

```ts
const RED_EYED_TREE_FROG_SOURCE_DATE = '2026-08-31' as const;
const RED_EYED_TREE_FROG_CONTENT_DATE = '2026-08-31' as const;

const RED_EYED_TREE_FROG_SOURCES = [
  {
    title: 'IUCN SSC Amphibian Specialist Group — Agalychnis callidryas, Red List 2020-1',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en',
    kind: 'conservation',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World 6.2 — Agalychnis callidryas',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas',
    kind: 'distribution',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'AMNH Amphibian Species of the World 6.2 — Agalychnis taylori',
    url: 'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-taylori',
    kind: 'taxonomy',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'CITES — Agalychnis callidryas taxon record',
    url: 'https://cites.org/eng/taxonomy/term/4867',
    kind: 'conservation',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Smithsonian Tropical Research Institute — Biota de Panamá species account',
    url: 'https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678',
    kind: 'general',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Duellman 1970 — The Hylid Frogs of Middle America',
    url: 'https://kuscholarworks.ku.edu/bitstream/1808/25332/1/Duellman_NHMUK_1970.pdf',
    kind: 'general',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Clark et al. 2022 — Genetic isolation by distance underlies colour pattern divergence',
    url: 'https://doi.org/10.1111/mec.16350',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin 1995 — Adaptive plasticity in hatching age',
    url: 'https://doi.org/10.1073/pnas.92.8.3507',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin 1999 — Effects of hatching age on development and hatchling morphology',
    url: 'https://doi.org/10.1111/j.1095-8312.1999.tb01180.x',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin 2005 — Vibrational cues in predator-induced hatching',
    url: 'https://doi.org/10.1016/j.anbehav.2004.09.019',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin, Caldwell & McDaniel 2006 — Temporal pattern cues in vibrational risk assessment',
    url: 'https://doi.org/10.1242/jeb.02150',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin et al. 2007 — Flexible information sampling in vibrational risk assessment',
    url: 'https://doi.org/10.1242/jeb.001362',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Caldwell, McDaniel & Warkentin 2009 — Frequency information in vibration-cued escape hatching',
    url: 'https://doi.org/10.1242/jeb.026518',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Caldwell et al. 2010 — Rain-vibration features reduce false alarms',
    url: 'https://doi.org/10.1016/j.anbehav.2009.11.005',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Caldwell et al. 2010 — Vibrational signaling in agonistic interactions',
    url: 'https://doi.org/10.1016/j.cub.2010.03.069',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Cohen, Seid & Warkentin 2016 — Hatching mechanics and enzyme release',
    url: 'https://doi.org/10.1242/jeb.139519',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Warkentin et al. 2017 — Developmental onset depends on cue type',
    url: 'https://doi.org/10.1016/j.anbehav.2017.05.008',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Cohen et al. 2019 — Two types of hatching gland cells',
    url: 'https://doi.org/10.1093/biolinnean/bly214',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Jung et al. 2019 — Vestibular mechanoreception in snake-attack detection',
    url: 'https://doi.org/10.1242/jeb.206052',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Jung, Serrano-Rojas & Warkentin 2020 — Multimodal mechanosensing in escape hatching',
    url: 'https://doi.org/10.1242/jeb.236141',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Costa & Vonesh 2013 — Tadpole effects on primary producers and zooplankton',
    url: 'https://doi.org/10.1111/btp.12032',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
  {
    title: 'Alza, Donnelly & Whitfield 2016 — Temperature and chlorothalonil effects on larvae',
    url: 'https://doi.org/10.1002/etc.3484',
    kind: 'ecology',
    accessedAt: RED_EYED_TREE_FROG_SOURCE_DATE,
  },
] satisfies readonly SpeciesSource[];
```

源数组只收页面会直接依赖的高价值来源。Crossref、CITES 附录 PDF、历史贸易文件、Méndez 毒理研究和微生境研究仍保留在本文相应段落，不必全部塞入产品来源抽屉。

## 字段与证据矩阵

| 产品主张或字段 | 首要证据 | 交叉核验 | 限定 |
| --- | --- | --- | --- |
| 接受名、科、属 | ASW *A. callidryas* | STRI 仅作旧名检索 | 当前科为 Phyllomedusidae。 |
| 2019 年拆分 | ASW *A. taylori* 与 comment | ASW 两个分布页 | 旧广义文献须按地点复核。 |
| 当前国家与海拔 | ASW 叙述分布 | ASW *A. taylori* 排除范围 | 不采用同页残留的 Mexico 结构化值。 |
| IUCN 类别与趋势 | IUCN assessment DOI | DOI 标题 | 评估物种范围早于拆分。 |
| IUCN 年份 | Crossref `issued/published` | IUCN DOI 卷期 | `2016`，不是 `2020`。 |
| CITES 附录 II | CITES taxon record | 现行 Appendices PDF | 管制贸易，不是禁贸。 |
| 巴拿马性别最大体长 | STRI | Duellman 1970 局地样本 | 不制造全范围下限。 |
| 红眼、垂直瞳孔、趾盘 | STRI | Duellman 1970 | 颜色与条纹仍有地理变异。 |
| 腿色地理变化 | Clark et al. 2022 | STRI 变异说明 | 一个色型不代表全种。 |
| 成体食谱未知 | STRI | 无足够物种级胃含物研究 | 具体猎物只写推测。 |
| 蝌蚪悬浮摄食 | Costa & Vonesh 2013 | STRI 蝌蚪账户 | 围隔效应不是野外固定食物比例。 |
| 夜间繁殖集群 | Caldwell et al. 2010 | STRI 繁殖账户 | 不等于绝对夜行。 |
| 雄蛙颤动信号 | Caldwell et al. 2010 | 机器人与振动回放 | 不同于胚胎逃生线索的行为主体。 |
| 叶上卵与落水 | Warkentin 1995 | STRI | 不是水下卵或泡沫巢。 |
| 提前孵化的风险权衡 | Warkentin 1995、1999 | 后续行为研究 | 逃离一类捕食会增加另一阶段风险。 |
| 时序线索 | Warkentin et al. 2006 | Warkentin et al. 2007 | 不对所有振动反射性孵化。 |
| 频率与雨振动判别 | Caldwell et al. 2009、2010 | Warkentin 2005 | 单一频率或幅度不足。 |
| 感觉系统 | Jung et al. 2019、2020 | 发育起点研究 | 内耳与侧线共同参与，随阶段变化。 |
| 破卵机制 | Cohen et al. 2016、2019 | 高速摄影与细胞研究 | 主动酶释和退出，不是被动爆裂。 |
| 污染敏感性 | Alza et al. 2016；Méndez et al. 2016 | 两种实验设计 | 不能外推为野外下降率。 |

## 实施后的验证要求

1. `rg -n "Agalychnis callidryas|red-eyed-tree-frog|红眼树蛙" src/data/species.ts docs/todo.md`：应出现新物种条目，TODO 对应行应勾选，双名拼写一致。
2. 运行仓库现有测试、TypeScript 类型检查和生产构建。`SpeciesSource.kind` 只能使用现有联合类型；日期必须为 `YYYY-MM-DD`。
3. 静态检查分类链：Phyllomedusidae，不是 Hylidae；`countries` 不得含墨西哥、伯利兹或危地马拉；范围文案须出现 *A. taylori* 拆分提醒。
4. 静态检查保护字段：`LC`、`decreasing`、`2016`，不填 criteria；正文不得把 2020-1 当评估年。
5. 静态检查数值：只填 `elevationM: [0, 1325]`；体长最多可显示巴拿马性别上限和局地样本说明；体重、寿命、成熟年龄与全球数量保持缺省。
6. 静态检查食性：成体必须带“未知/推测”限定；蝌蚪悬浮摄食必须标明生命阶段；不得出现具体野生成体猎物比例。
7. 静态检查胚胎文案：必须同时出现“振动模式/复合线索”和“提前孵化有水生捕食代价”；不得出现“听见蛇”“看到蛇”“任何震动”“必定第 4 天”等绝对说法。
8. 检查六张 WebP 的像素尺寸、透明度、文件大小、解码和路径；不得启动 GUI 或无头浏览器。封面与 gallery 不重复，alt 能区分夜间成体、外部形态、湿林池塘、蛾类相遇、叶上卵团与蛇袭逃生。
9. 图片人工静态验收重点：红色虹膜、垂直瞳孔、大型趾端吸盘、修长四肢；池塘图不冒充具体地点；蛾类相遇不冒充定量食谱；卵团必须在水面上方植被；蛇袭图只表现物理接触，不把静帧当成振动感知证据。
10. 来源链接不得是搜索结果页。至少保留 IUCN、两个 ASW 页面、CITES、STRI、颜色研究、胚胎孵化系列、雄性颤动、蝌蚪摄食和污染研究。

按仓库规则，验证只使用测试、类型检查、构建和静态资产检查，不打开 GUI 或无头浏览器。

## 仍需公开保留的不确定性

- IUCN 页面在本次检索中返回访问限制；类别和趋势按稳定评估记录核验，年份由 DOI 注册元数据区分。若未来取得官方下载版，应再次检查正式 assessment date，但不能直接用卷期 2020-1 覆盖 2016。
- IUCN 评估早于 *A. taylori* 拆分，且洪都拉斯东部至哥斯达黎加北部仍有未正式执行的 *A. helenae* 分类假说。现行 LC 不能代表每个潜在线粒体或地理谱系的独立风险。
- ASW 的分布叙述与结构化国家列表不一致。本文选择与 *A. taylori* 页面相容的叙述范围，并把冲突写入研究档案，便于未来数据修订。
- 多数精细胚胎研究来自巴拿马 Gamboa；它们为现行 *A. callidryas* 提供强证据，但具体日龄、响应阈值和自然孵化时间仍会随地点、温度、亲本与发育阶段改变。
- 成体野外定量食谱、全范围体尺分布、体重、野外寿命、成熟年龄、世代长度和全球数量没有足够物种级数据。留空比从圈养页或近缘种补值更准确。
- 疾病、农药和贸易均有风险证据，但现有资料不足以给现行狭义物种的全球下降驱动排序或归因比例。
