# 网纹蟒（*Malayopython reticulatus*）完整档案研究

- 检索与核验日期：2026-08-21
- 展示中文名：**网纹蟒**；英文名：**Reticulated Python**；旧学名检索别名：***Python reticulatus***、***Broghammerus reticulatus***
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图提供科学边界
- 证据标准：分类采用 The Reptile Database 与同行评议系统学研究；保护和贸易采用 IUCN、CITES 及缔约方官方文件；形态、食性、繁殖、感官和监测数字采用政府资料或同行评议原始研究
- 时间口径：本文所称“当前”截至 **2026-08-21**。IUCN 的评估年份、发布年份和 CITES 当前附录生效日期分别记录，不互相替代
- 地理与安全边界：分布只到国家、岛群和区域尺度；`center` 只是地图视图焦点，不是丰度中心或观察点。图像不表现攻击人类、徒手抓蛇、公开巢址或可定位的调查点

## 结论摘要

### 名称、分类与亚种边界

仓库主记录应采用 ***Malayopython reticulatus* (Schneider, 1801)**，分类归属为动物界—脊索动物门—爬行纲—有鳞目—蟒科—马来蟒属。The Reptile Database 当前接受这一组合，并列出指名亚种 ***M. r. reticulatus***、塞拉亚尔岛的 ***M. r. saputrai*** 与坦那占卑岛的 ***M. r. jampeanus***；NCBI Taxonomy 同样把 *Python reticulatus*、*Broghammerus reticulatus* 和原始组合 *Boa reticulata* 置于当前名称之下。[The Reptile Database](https://reptile-database.reptarium.cz/Malayopython/reticulatus) [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1496311&mode=Info)

属名不能因 IUCN 评估正文沿用 ***Python reticulatus*** 而倒退。2014 年蟒总科系统发育研究支持使用 ***Malayopython***；2002 年修订描述了两个岛屿亚种，但 2017 年覆盖 89 份样本的线粒体系统地理研究又发现 34 个单倍型和显著区域结构，尤其提示菲律宾、苏拉威西、婆罗洲与大陆/巽他区域不宜当成完全同质的管理单元。后者的作者也明确把结果视为保护与后续分类研究的起点，因此产品不能自行提升种、拆分新亚种，或把宠物贸易中的 “dwarf / super dwarf” 当成正式分类单元。[Reynolds et al. 2014](https://doi.org/10.1016/j.ympev.2013.11.011) [Auliya et al. 2002](https://doi.org/10.1007/s00114-002-0320-4) [Murray-Dickson et al. 2017](https://doi.org/10.1371/journal.pone.0182049)

### IUCN 当前公开状态：2011 年评估，2018-2 发布

截至检索日，IUCN 当前公开全球记录为 **无危 Least Concern（LC）**，种群趋势 **未知 Unknown**。正式文件的 `Date Assessed` 是 **2011-09-02**，而引用卷期为 2018-2；因此仓库必须实现：

```ts
conservation: conservation('LC', 'unknown', 2011)
```

不能把 2018 填入 `assessedYear`，也不能为 LC 擅自补一个 criteria。IUCN 的全球理由是分布广、适应性强，并在部分受重度利用区域仍较常见；同一评估同时指出越南、老挝和柬埔寨部分地区因过度利用与生境丧失出现地方性下降。LC 是全球灭绝风险分类，不表示“没有威胁”、没有局地衰退或可以不监测；而 2011 年评估也不是 2026 年的同步种群调查。[IUCN Red List — *Python reticulatus*](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en)

### CITES 附录 II：受监管贸易，不是全面禁贸

网纹蟒当前列入 **CITES 附录 II**。2026 年 3 月 5 日生效的现行附录以蟒科的上级列名覆盖本种；附录 II 国际贸易需要遵守许可和无害性判定要求，但不等于附录 I，也不等于所有国际贸易一律禁止。CITES Trade Database 2026.1 仍能检索到截至 2024 年、以皮张等为单位的多国贸易申报，说明贸易管理是当前议题；申报单位、进口国与出口国报告并不适合直接相加成“每年全球捕杀量”。[CITES — Appendices I, II and III, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [CITES Trade Database](https://trade.cites.org/en/cites_trade/)

IUCN SSC 2016 报告曾把印度尼西亚与马来西亚当时每年从野外取得的网纹蟒概括为约 30 万条；这是有地区和年代限定的历史贸易量，不是今天的全球种群数或 2026 年年捕获量。马来西亚提交给 CITES 动物委员会的管理报告主张半岛种群常见、可用配额和收获样本监测管理；这一缔约方结论也不能外推到菲律宾岛群或中南半岛的所有种群。[IUCN SSC 2016 — Sustainable management of trade in reticulated python skins](https://doi.org/10.2305/IUCN.CH.2016.SSC-OP.61.en) [Malaysia/PERHILITAN — Management of the Reticulated Python in Peninsular Malaysia](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf)

## 分布与地图边界

网纹蟒横跨南亚东缘与东南亚：孟加拉国、尼科巴群岛、缅甸、中南半岛、马来半岛、新加坡、菲律宾和印度尼西亚众多岛屿构成其主要范围。IUCN 的原生国家字段列出孟加拉国、文莱、柬埔寨、印度、印度尼西亚、老挝、马来西亚、缅甸、菲律宾、新加坡、泰国和越南；印度的可靠核心范围应写成尼科巴群岛，印度大陆单条记录可能只是来自缅甸或孟加拉国的游移个体，不能画成连续大陆种群。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) [The Reptile Database](https://reptile-database.reptarium.cz/Malayopython/reticulatus)

东帝汶口径必须保留不确定性：2011 IUCN 评估将其标为 “Possibly Extinct”，而当前 The Reptile Database 仍把 Timor-Leste 列入分布。实现中的 `countries` 采用 IUCN 明确列出的现存原生国家，`range` 再写“东帝汶有历史记录、IUCN 评估时可能已绝迹，需新调查确认”，不要无证据宣布已经灭绝或仍有繁殖种群。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) [The Reptile Database](https://reptile-database.reptarium.cz/Malayopython/reticulatus)

推荐 `center: { lat: 3, lng: 112 }`，只用于打开东南亚全域地图；它不是分布几何中心、遗传中心、最大密度点或婆罗洲调查坐标。菲律宾、苏拉威西、婆罗洲和大陆/巽他样本具有显著遗传结构，因此地图可以画连续的物种级范围，却不能暗示全范围是一个自由混合的单一种群。[Murray-Dickson et al. 2017](https://doi.org/10.1371/journal.pone.0182049)

## 生境、活动与环境适应

IUCN 记录的自然生境包括雨林、林地及相邻草地，并强调河流、溪流与湖泊；也有种植园、乡村花园、城市区域和排水系统等人工环境记录。结构化 `realms` 应同时使用 `terrestrial` 和 `freshwater`：网纹蟒是陆生蛇类，却频繁利用淡水与河岸，不应标成严格水栖、海生或只生活在原始雨林。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) [Singapore NParks — Reticulated Python](https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/) [Malaysia/PERHILITAN report](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf)

它善游泳，曾是喀拉喀托火山群岛早期重新定殖的脊椎动物之一；这能解释跨水道分布和河岸场景，却不能推导成“终生生活在水中”。小型个体更容易利用树枝与灌丛，体型增大后活动更偏地面；新加坡政府资料仍将其概括为陆生且善攀爬，所以第 03 图应明确是幼体或小个体，不能把全种画成专性树栖蛇。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) [Singapore NParks](https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/) [Malaysia/PERHILITAN report](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf)

人类改造环境的容忍度随地点和体型变化。苏门答腊收获样本显示，小个体以及多数雄蛇、初熟雌蛇常以与人共栖的鼠类为食，能利用村落和农业镶嵌；IUCN 同时指出超过约 4 米的大个体更依赖有隐蔽层和大型猎物的结构复杂生境。因此“能进城市水道”不能被改写成油棕园、硬化沟渠或无林城市对所有年龄和体型都同样适宜。[Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) [IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en)

## 体型、外形与辨识

网纹蟒被 IUCN 和同行评议研究称为世界最长的现生蛇种，但“最长的种”不是“普通成体都接近纪录长度”。超过千条南苏门答腊收获样本的研究覆盖约 1.5 米到超过 6 米的吻肛长和约 1—75 千克体重，并显示雌蛇显著大于雄蛇；北、南苏门答腊的成熟体型和样本构成也不同。文献还混用吻肛长、全长、皮张长度、活体测量和历史传闻，当前 schema 又不能按性别、亚种、地点和测量方法拆分，因此本档案不把单一“典型 3.5 米”或 9—10 米传闻硬编码为全种成体范围，也不填写体重范围。[Shine et al. 1998](https://doi.org/10.1046/j.1365-2435.1998.00179.x) [Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) [Natusch et al. 2016](https://doi.org/10.1371/journal.pone.0158397)

野生型视觉识别应稳定表现以下组合，而不是依赖“巨大”二字：[Philippines DENR WildALERT — Reticulated Python](https://www.wildalert.ph/s/302) [CITES/TRAFFIC wildlife identification guide](https://www.traffic.org/site/assets/files/13443/cn_identification_final.pdf) [Singapore NParks](https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/)

- 头部较长、与颈部区分明显；虹膜橙褐，瞳孔垂直，吻端与唇缘不应画成钝圆缅甸蟒头型。
- 头顶有一条窄暗色中线，眼后各有暗纹斜向口角；上、下唇鳞可见成列热感窝，但不是牙孔、鼻孔或发光器官。
- 背景为黄褐、赭褐至橄榄褐，黑褐线条互相连接成菱形与多边形“网”，包围较浅的黄褐中心；体侧有小型浅色/白色斑，腹面奶油色。
- 鳞片可在自然光下有轻微虹彩；身体细长而肌肉发达，尾部逐渐变细。不要套用缅甸蟒彼此分离的大块鞍斑，也不要用白化、虎纹等人工选育宠物色型代表野外种群。

## 感官、捕食与食性变化

蟒类唇鳞热感窝能感受红外辐射。网纹蟒的圈养实验显示，热刺激会参与警戒、转头、攻击与咬住猎物后的头部搜索，但视觉、化学和机械线索也共同参与；电生理研究把窝器官描述为温热感受器，部分神经元同时对红外和触碰响应。因此可以写“感知温暖猎物的热辐射”，不能画成热射线、发光孔或像相机一样生成可见彩色热像。[de Cock Buning et al. 1978](https://doi.org/10.1163/002829678X00198) [de Cock Buning et al. 1981](https://doi.org/10.1007/BF00710682)

网纹蟒咬住猎物后以身体盘绕施压。对 48 条圈养网纹蟒的实验测得峰值缠绕压力约 8.27—53.77 kPa，并随蛇体直径增加；研究提出循环受阻和神经压力效应等可能机制，但后者是待检验假说，不能把“压碎骨头”“只靠窒息”或 “red-out 必然致死”写成已确定的唯一机制。[Penning, Dartez & Moon 2015](https://doi.org/10.1242/jeb.127449)

食性随体型显著改变。超过千条南苏门答腊个体的胃内容研究显示，小蛇以鼠类为主，约在 3—4 米体型段后逐步转向穿山甲、豪猪、灵长类、鼷鹿和野猪等更大的哺乳动物；猎物频率和相对大小同时随蛇体改变。这是地区性收获样本，不表示每条大型网纹蟒都会捕食清单中的每一种动物，也不支持把人类设为典型猎物。[Shine et al. 1998](https://doi.org/10.1046/j.1365-2435.1998.00179.x)

## 繁殖与生活史

网纹蟒卵生，雌蛇通常比雄蛇更大。北苏门答腊 784 条收获样本的研究得到平均窝卵数 **24.2 枚**，并推断雌蛇约每 **2—4 年**繁殖一次；繁殖季节、成熟体型和样本结构在赤道南北两侧已有差异。两个数字可作为带地点限定的展示统计，不能改写成“每窝固定 24 枚”或“每年繁殖”。[Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8)

雌蛇盘绕卵团并守护/孵护的行为可以进入第 05 图，但核心来源没有给出可全范围通用的精确孵化天数，也不足以证明本种一定以肌肉颤抖产热。画面可参考苏门答腊约两打卵的均值，只让少量白色革质卵从盘绕间可见；不要画开放鸟巢、硬壳彩蛋、群体育幼、热浪特效或“每窝上百枚”的夸张场景。[Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8)

## 种群监测、利用与证据强度

这种大型伏击蛇极其隐蔽，直接估算野外丰度并不容易。2026 年在马来西亚沙巴一处保护地进行的五年研究共完成 527 次河岸调查，标准化调查捕获 83 条、全部方法合计 159 条，重捕 25 条；平均探测概率仅约 **20%** 且受月相影响，数据仍不足以建立稳健的丰度模型。由此不能得出“全球只剩 159 条”，也不能把一次调查未见蛇当作局地灭绝；第 06 图应表现重复、非接触的夜间河岸视觉调查，而非抓捕秀。[Burger et al. 2026](https://doi.org/10.1038/s41598-026-57269-9)

另一条证据路径是重复测量收获个体。2016 年研究比较苏门答腊相同收集设施在 1995 与 2015 年的 4,200 余条网纹蟒，未发现样本数量、平均体型、窝卵数、成熟体型或“巨型个体”比例下降，作者据此认为这些地点和时期的收获表面上可持续。它不是全球种群普查，也不能证明所有配额、来源申报或岛屿种群都可持续；收获努力、贸易路径和地区遗传单元仍需独立核验。[Natusch et al. 2016](https://doi.org/10.1371/journal.pone.0158397) [Murray-Dickson et al. 2017](https://doi.org/10.1371/journal.pone.0182049)

## 推荐保护行动

1. 以 CITES 附录 II 的无害性判定为核心，按出口来源、地区、性别、吻肛长、成熟度和收获努力长期记录，而不是只看年度配额是否用完。[CITES current appendices](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [Burger et al. 2026](https://doi.org/10.1038/s41598-026-57269-9)
2. 对合法野外采集、圈养繁殖和再出口建立可审计的来源追踪，核对皮张、肉、活体和其他贸易单位，降低跨境转运、来源洗白与重复计数风险。[CITES Trade Database](https://trade.cites.org/en/cites_trade/) [IUCN SSC 2016](https://doi.org/10.2305/IUCN.CH.2016.SSC-OP.61.en)
3. 把菲律宾、婆罗洲、苏拉威西及大陆/巽他区域的遗传结构纳入配额、样本追踪和保护单元设计；在更完整的核基因组和地理采样出现前，不自行修改分类。[Murray-Dickson et al. 2017](https://doi.org/10.1371/journal.pone.0182049)
4. 保护河岸林、林下隐蔽层、湿地连接和大型猎物资源，尤其避免把“大蛇能利用种植园”误作清除复杂生境的依据。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en)
5. 在传统丰度调查难以奏效时，组合标准化河岸重复调查、标记重捕与收获样本人口学趋势；报告探测概率、努力量和地区边界。[Burger et al. 2026](https://doi.org/10.1038/s41598-026-57269-9) [Natusch et al. 2016](https://doi.org/10.1371/journal.pone.0158397)
6. 建立由受训人员执行的人蛇冲突响应和安全转移流程，减少恐惧性捕杀；不鼓励公众靠近、投喂、徒手抓持或自行搬运大型个体。[Singapore NParks](https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/)

## 推荐的故事章节

1. **不是斑点，是一张网**：从头顶中线、眼后纹、相连菱形网纹和虹彩鳞片建立可靠辨识，排除缅甸蟒鞍斑与宠物色型。
2. **唇缘的一排热感窝**：解释被动感受热辐射如何与视觉、气味和触觉协同，不把热感窝画成超能力特效。
3. **身体长大，菜单也换挡**：以苏门答腊胃内容研究呈现从鼠类到较大哺乳动物的体型相关食性变化。
4. **会爬树，也会跨水道**：幼体上枝、成体沿河岸和善游泳的能力，共同解释从雨林到岛屿城市水道的广阔生态幅。
5. **两打卵，不是一年一窝**：雌蛇盘绕孵护、北苏门答腊平均 24.2 枚与 2—4 年繁殖间隔都必须带地区限制。
6. **看不见，不等于不存在**：从沙巴五年河岸调查的约 20% 探测率，进入贸易样本监测、遗传追踪与 CITES 管理。

## 推荐的关键事实

1. 当前接受学名为 *Malayopython reticulatus*；IUCN 评估中的 *Python reticulatus* 是旧组合。
2. 它是世界最长的现生蛇种，但普通成体、性别、亚种和地区体型差异很大，不能用传闻极值代表全种。
3. 唇鳞上的热感窝被动感受猎物热辐射，并与视觉、化学和机械线索共同工作。
4. 小个体在苏门答腊样本中主要食鼠，约 3—4 米后食谱转向更大的哺乳动物。
5. 北苏门答腊样本平均每窝 24.2 枚卵，雌蛇约每 2—4 年繁殖一次；两者都不是全范围固定常数。
6. 全球 IUCN 为 LC、趋势未知；当前 CITES 附录 II 监管国际贸易，LC 与附录 II 回答的是不同问题。

## 应删除或避免的说法

- 不写 `assessedYear: 2018` 或 `trend: stable`；IUCN 正确口径是 2011 年评估、趋势 unknown。
- 不把 CITES 附录 II 写成“濒危等级”、附录 I 或“全面禁贸”；它是国际贸易监管制度。
- 不写“全球种群稳定”或给全球个体数；IUCN 趋势未知，2026 年实地研究也说明可靠丰度估算非常困难。
- 不把苏门答腊 1995—2015 收获样本未见下降外推成“全球捕捉绝对可持续”。
- 不把马来西亚缔约方的常见度、配额或管理结论外推到菲律宾、苏拉威西和中南半岛。
- 不把印度大陆画成已确认的连续繁殖范围；尼科巴群岛证据更稳，单次大陆记录可能是游移个体。
- 不断言东帝汶已经灭绝或仍有现存繁殖种群；IUCN 的 “Possibly Extinct” 需要新调查解决。
- 不把宠物贸易 “dwarf / super dwarf” 地域型、白化或虎纹色型当作正式亚种或野外标准形态。
- 不使用 9—10 米历史传闻、皮张长度或未说明测量法的极值填 `measurements.length`；不混用吻肛长与全长。
- 不把 1—75 千克的地区收获样本包络写成普通成体体重，也不填未经野外验证的固定寿命或速度。
- 不写“缠绕一定压碎骨头”或“只靠窒息”；实验支持压力随体径增大，致死机制可并存且部分仍是假说。
- 不写热感窝会发射红外线、生成可见热像或让蛇在完全没有其他线索时“看穿一切”。
- 不把约 24.2 枚写成固定窝卵数，不写每年繁殖，更不写每窝必有上百枚。
- 不断言本种已证实通过肌肉颤抖为卵产热；当前核心证据只稳健支持盘绕与孵护。
- 不以人类为典型猎物，不做吞人、绞杀、血腥猎杀或研究人员徒手抓持的图片。

## 量化字段取舍

| 字段 | 推荐值 | 口径与理由 |
| --- | --- | --- |
| `measurements.length` | 不填 | “世界最长蛇种”是物种层级的相对地位，不等于普通成体范围；现有研究跨性别、地区并混有吻肛长/全长口径，当前 schema 无法无损表达。[Shine et al. 1998](https://doi.org/10.1046/j.1365-2435.1998.00179.x) [Natusch et al. 2016](https://doi.org/10.1371/journal.pone.0158397) |
| `measurements.weight` | 不填 | 南苏门答腊样本约 1—75 kg 是研究样本包络，不是全种典型成体范围；雌雄和地区差异显著。[Shine et al. 1998](https://doi.org/10.1046/j.1365-2435.1998.00179.x) |
| `metrics.adultLengthCm` | 不填 | 不把“约 3.5 m”粗略均值或纪录个体转成统一成体上下界，也不混用 SVL 与全长。 |
| `metrics.adultMassKg` | 不填 | 没有可同时代表性别、亚种、地区和取样方式的成体质量范围。 |
| `metrics.lifespanYears` | 不填 | 未核得可用于全种的野外寿命范围；圈养纪录不能替代野外寿命。 |
| `metrics.elevationM` | 不填 | IUCN 结构字段可见 0—1,000 m，而马来西亚报告概括多在 1,500 m 以下；两者并非统一测得的全范围硬上限。 |
| `metrics.topSpeedKph` | 不填 | 没有统一、可复核的最高速度测量。 |
| `metrics.estimatedMatureIndividuals` | 不填 | IUCN 未给全球成熟个体估计；贸易量、收获样本数和调查捕获数都不是全球丰度。 |
| `featuredStats.length-rank` | 世界最长 | 物种层级的相对长度地位；明确不代表普通成体或精确最大值。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) |
| `featuredStats.clutch-mean` | 24.2 枚 | 北苏门答腊收获样本平均值，随雌体大小和地区变化。[Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) |
| `featuredStats.reproductive-interval` | 2—4 年 | 北苏门答腊研究推断的雌蛇繁殖间隔，不是每条蛇的固定周期。[Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) |
| `featuredStats.survey-detectability` | 约 20% | 沙巴单一保护地五年河岸调查的平均探测概率，且受月相影响；不是全球可见率。[Burger et al. 2026](https://doi.org/10.1038/s41598-026-57269-9) |

## 6 幅图像内容建议与生成提示词

六图统一规格：**1536 × 1024、横向 3:2、自然历史纪录摄影、野生型个体、无文字、无水印、无品牌标识**。共同形态锚点：**elongated muscular python; elongated distinct head; orange-brown iris with vertical pupil; one narrow dark midline on crown and dark stripe from each eye toward mouth corner; rows of small heat-sensing pits on upper and lower labial scales; tan, ochre and olive-brown ground color; interconnected black-brown diamond and polygon network enclosing pale gold centers; small cream-white lateral spots; cream belly; subtle natural iridescence**。共同拒绝项：**no Burmese-python saddle blotches, no anaconda rosettes, no cobra hood, no venom fangs, no horns, no albino or designer morph, no extra heads or limbs, no exaggerated monster scale, no gore**。

| 序号与文件 | 场景与可直接生成的提示词 | 科学边界与拒绝项 |
| --- | --- | --- |
| 01 `01-rainforest-riverbank-portrait.webp` | **Wide 3:2 documentary wildlife photograph at blue-gold dawn in a Southeast Asian lowland rainforest riverbank. One complete adult wild-type reticulated python rests in an elongated loose S-curve on wet roots and leaf litter beside calm freshwater, head and anterior body sharply visible on the right third, long body continuing naturally through the frame, left third softly open for page title, humid mist, realistic scale texture and restrained iridescence, eye-level 85 mm natural-history photography.** | 封面同时表现陆地与淡水，但蛇不下水追人；全身比例连贯，主体右置。拒绝巨兽压满河道、攻击姿态、缅甸蟒鞍斑、宠物色型。[IUCN](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) [Philippines DENR WildALERT](https://www.wildalert.ph/s/302) |
| 02 `02-net-pattern-and-labial-pits.webp` | **Wide 3:2 scientific macro portrait of a calm wild-type reticulated python's head and first body loop on a shaded rainforest floor. Three-quarter side view shows the narrow crown midline, dark eye-to-mouth stripe, orange-brown vertical-pupil eye, multiple small labial heat pits as shallow natural depressions, and the linked black-brown reticulation enclosing gold and cream centers. Soft diffuse daylight, high anatomical detail, realistic scales, shallow depth of field.** | 热感窝是唇鳞小凹穴，不发光、不喷射红外线；只展示真实头纹与鳞片虹彩。拒绝大圆孔、第二鼻孔、毒牙、热像叠图或霓虹 VFX。[de Cock Buning et al. 1978](https://doi.org/10.1163/002829678X00198) [CITES/TRAFFIC guide](https://www.traffic.org/site/assets/files/13443/cn_identification_final.pdf) |
| 03 `03-arboreal-juvenile.webp` | **Wide 3:2 documentary photograph of one slender juvenile wild-type reticulated python moving along a sturdy low horizontal branch over dense Southeast Asian riparian understory, body gripping the branch in several natural curves, head testing the air, river glint far below through foliage, overcast rainforest light, branch strong enough to support the animal, full body continuity and realistic juvenile proportions.** | 明确幼体/小个体和低枝，表达攀爬能力而非专性树栖。拒绝成年巨蛇悬在细藤、鸟巢捕食、飞行姿势或多条蛇社群。[Singapore NParks](https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/) [Malaysia/PERHILITAN report](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf) |
| 04 `04-plantation-edge-rat-ambush.webp` | **Wide 3:2 low-light natural-history scene at the edge of a Southeast Asian oil-palm smallholding and secondary vegetation. One modest-sized wild-type reticulated python lies cryptically coiled beneath fallen fronds beside a rat travel path; one brown commensal rat is visible several body lengths away and has not been struck. Dusk, damp leaf litter, realistic camouflage, quiet ecological tension, no contact and no injury.** | 以小个体—鼠类—改造环境的地区性证据为主题，不展示咬杀或血。拒绝把油棕单一种植园画成对所有体型都优质的完整生境，也不要画宠物鼠或成群猎物。[Shine et al. 1998](https://doi.org/10.1046/j.1365-2435.1998.00179.x) [Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) |
| 05 `05-female-coiled-around-eggs.webp` | **Wide 3:2 intimate but non-invasive documentary view inside a humid concealed cavity beneath a naturally fallen tree trunk at a Sumatran forest edge. One large female wild-type reticulated python is tightly but naturally coiled around a clutch of roughly two dozen white leathery oval eggs; only five or six eggs are partly visible between her coils. Calm guarding posture, humid leaf substrate, anatomically continuous body, soft reflected daylight from the entrance.** | “约两打”只代表北苏门答腊均值；卵为白色革质、被盘绕遮蔽。拒绝开放鸟巢、硬壳彩蛋、幼蛇同时孵出、雄蛇协助、上百枚卵、热浪或肌肉颤抖特效。[Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) |
| 06 `06-nocturnal-riverside-survey.webp` | **Wide 3:2 ethical field-research documentary at night on a forest river in Sabah, Malaysia. Two trained researchers wearing neutral field clothing and life jackets move slowly in a small open survey boat, using one modest handheld survey light to scan the vegetated bank without touching wildlife. A partial wild-type reticulated python is cryptically visible among roots above the waterline, several metres away; one researcher records the observation on a waterproof clipboard. Moonlit canopy, realistic low light, no capture gear.** | 对齐 2026 年河岸视觉调查：非接触、重复调查、蛇难以发现。拒绝抓捕、搬运、套索、徒手触摸、强光直射眼睛、摆拍合影、具体坐标或动物贴标。[Burger et al. 2026](https://doi.org/10.1038/s41598-026-57269-9) |

### 素材集成说明

- 源图放入 `src/assets/source/species/reticulated-python/`，文件名分别为上述基名加 `-source.png`；运行时图放入 `public/images/species/reticulated-python/`，保留同基名并改为 `.webp`。
- 源图应为 1536 × 1024、8-bit sRGB PNG、无 alpha；运行时文件为有损 WebP、无 alpha，可按仓库约定用 `cwebp -q 82 -m 6 -mt` 转换。
- 在 `src/assets/source/species/reticulated-python/README.md` 保存生成日期、六帧用途、最终提示词、共同形态锚点、每帧拒绝项、转换参数与静态验收结果；在源素材总索引中补链接。
- `01` 只作封面；`02`—`06` 恰好组成五张 gallery，不重复封面。代码路径必须是 `./images/species/reticulated-python/<basename>.webp`。
- 建议信用统一为 `Fauna Atlas · AI 生成原创图像`。下方 `focalPoint` 是按提示词构图给出的暂定值；图像生成、裁切和 WebP 转换完成后，必须针对真实像素重新复核。
- 静态验收应确认六张图尺寸、色彩空间、alpha、WebP 可解码、主体比例和网纹连续性；依仓库规则不启动 GUI 或无头浏览器。

## 可直接用于 `species.ts` 的字段建议

下面对象覆盖当前 `Species` 全部必填字段。它刻意把无法无损规范化的体型、寿命、速度、海拔和全球数量留空；媒体文件名与六图方案一致。

```ts
const RETICULATED_PYTHON_SOURCE_DATE = '2026-08-21' as const;
const RETICULATED_PYTHON_CONTENT_DATE = '2026-08-21' as const;

const RETICULATED_PYTHON_SOURCES = [
  {
    title: 'IUCN Red List — Python reticulatus (assessed 2011; published 2018-2)',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database — Malayopython reticulatus',
    url: 'https://reptile-database.reptarium.cz/Malayopython/reticulatus',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy — Malayopython reticulatus',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1496311&mode=Info',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Reynolds et al. 2014 — Toward a Tree-of-Life for the boas and pythons',
    url: 'https://doi.org/10.1016/j.ympev.2013.11.011',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Auliya et al. 2002 — Review of the reticulated python and description of new subspecies',
    url: 'https://doi.org/10.1007/s00114-002-0320-4',
    kind: 'taxonomy',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'CITES Trade Database version 2026.1 — Malayopython reticulatus',
    url: 'https://trade.cites.org/en/cites_trade/',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Malaysia/PERHILITAN 2021 — Management of the Reticulated Python in Peninsular Malaysia',
    url: 'https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC 2016 — Sustainable management of trade in reticulated python skins in Indonesia and Malaysia',
    url: 'https://doi.org/10.2305/IUCN.CH.2016.SSC-OP.61.en',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Murray-Dickson et al. 2017 — Phylogeography and conservation implications',
    url: 'https://doi.org/10.1371/journal.pone.0182049',
    kind: 'distribution',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Shine et al. 1998 — Sex, body size and food habits in free-ranging reticulated pythons',
    url: 'https://doi.org/10.1046/j.1365-2435.1998.00179.x',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Shine et al. 1999 — Reticulated pythons in Sumatra: biology, harvesting and sustainability',
    url: 'https://doi.org/10.1016/S0006-3207(98)00068-8',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Natusch et al. 2016 — Jungle Giants: assessing sustainable harvesting',
    url: 'https://doi.org/10.1371/journal.pone.0158397',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Burger et al. 2026 — Efficacy of field-based surveys for giant snakes in Malaysia',
    url: 'https://doi.org/10.1038/s41598-026-57269-9',
    kind: 'conservation',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Penning, Dartez & Moon 2015 — Scaling of constriction pressure',
    url: 'https://doi.org/10.1242/jeb.127449',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'de Cock Buning et al. 1978 — Feeding behaviour and thermoreceptors',
    url: 'https://doi.org/10.1163/002829678X00198',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'de Cock Buning et al. 1981 — Python pit organs analyzed as warm receptors',
    url: 'https://doi.org/10.1007/BF00710682',
    kind: 'ecology',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Singapore NParks — Reticulated Python',
    url: 'https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/',
    kind: 'general',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'Philippines DENR WildALERT — Reticulated Python',
    url: 'https://www.wildalert.ph/s/302',
    kind: 'general',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
  {
    title: 'CITES/TRAFFIC — Identification guide to wildlife commonly found in trade',
    url: 'https://www.traffic.org/site/assets/files/13443/cn_identification_final.pdf',
    kind: 'general',
    accessedAt: RETICULATED_PYTHON_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

{
  id: 'species-malayopython-reticulatus',
  slug: 'reticulated-python',
  names: {
    zh: '网纹蟒',
    en: 'Reticulated Python',
    aliases: ['Python reticulatus', 'Broghammerus reticulatus'],
  },
  scientificName: 'Malayopython reticulatus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Squamata', '有鳞目'),
    taxon('Pythonidae', '蟒科'),
    taxon('Malayopython', '马来蟒属'),
  ),
  conservation: conservation('LC', 'unknown', 2011),
  distribution: {
    realms: ['terrestrial', 'freshwater'],
    continents: ['亚洲'],
    regions: ['南亚东缘与中南半岛', '马来半岛与新加坡', '巽他群岛与华莱西亚', '菲律宾群岛', '尼科巴群岛'],
    countries: ['孟加拉国', '文莱', '柬埔寨', '印度（尼科巴群岛）', '印度尼西亚', '老挝', '马来西亚', '缅甸', '菲律宾', '新加坡', '泰国', '越南'],
    range:
      '分布于孟加拉国东南部、尼科巴群岛、缅甸和中南半岛，向南经马来半岛、新加坡延伸到菲律宾与印度尼西亚众多岛屿；印度大陆记录可能为游移个体，尚无可靠的连续繁殖种群证据；东帝汶有历史记录，但 2011 IUCN 评估标为可能已绝迹，需新调查确认。',
    center: { lat: 3, lng: 112 },
  },
  habitats: [
    {
      name: '热带雨林与湿润林地',
      realm: 'terrestrial',
      description: '利用低地雨林、林下隐蔽层和林缘；复杂植被为伏击、隐蔽和大型猎物提供条件，较大个体尤其依赖结构完整度。',
      isPrimary: true,
    },
    {
      name: '河流、溪流、湖泊与河岸湿地',
      realm: 'freshwater',
      description: '善游泳并常沿淡水和河岸移动、隐蔽或捕食；跨水道能力也帮助其到达东南亚岛屿。',
      isPrimary: true,
    },
    {
      name: '次生林、灌丛与相邻草地',
      realm: 'terrestrial',
      description: '可利用受扰林地和林缘镶嵌，但适宜度随植被结构、猎物、体型和地区改变，不能等同完整原生林。',
    },
    {
      name: '种植园、乡村花园与城市水道',
      realm: 'terrestrial',
      description: '小型个体可借助共栖鼠类利用农业与城市环境；大型个体需要更充分的遮蔽和大型猎物，硬化环境不是全生命周期的替代生境。',
    },
  ],
  measurements: {},
  diet: {
    types: ['carnivore'],
    foods: ['鼠类与其他小型哺乳动物', '穿山甲、豪猪与灵长类等中型哺乳动物', '鼷鹿、野猪和鹿类等较大型猎物', '鸟类及其他机会性脊椎动物猎物'],
    description: '机会性肉食；苏门答腊样本显示食谱随体型显著变化，小个体主要取食鼠类，约 3—4 米后逐渐转向更大的哺乳动物。猎物清单来自地区样本，不代表每个种群或每条蛇都会捕食全部项目。',
  },
  activity: [
    '多在夜间隐蔽活动，以伏击接近的猎物为主',
    '咬住猎物后用身体盘绕施压，可能同时影响呼吸与循环',
    '善游泳并常利用河流、溪流、湖泊、城市水道及相邻河岸',
    '幼体和小型个体较常攀上低枝；大型个体更多利用地面与水边',
    '雌蛇盘绕并孵护卵团；繁殖时间和频率随地区与个体而变',
  ],
  tags: ['东南亚', '蟒科', '世界最长蛇种', '热感窝', '缠绕捕食', '卵生', 'CITES附录II', '全球无危'],
  summary: '东南亚雨林、河岸与城市水道间的世界最长蛇种，以真正的网状斑纹、唇鳞热感窝和随体型改变的猎物谱著称。',
  description:
    '网纹蟒是马来蟒属的大型蟒蛇，野生型黑褐线条在黄褐底色上连接成精细网纹。它用唇鳞热感窝与其他感官发现温暖猎物，咬住后以盘绕压力压制；小个体多食鼠类，长大后能转向更大的哺乳动物。它善游泳、能攀爬，也能进入种植园和城市水道，但大型个体仍需要复杂植被与足够猎物。全球 IUCN 为无危、趋势未知，而皮革、食用、药用和活体贸易使 CITES 附录 II 管理、地区遗传追踪与长期监测持续重要。',
  storySections: [
    {
      key: 'living-reticulation',
      label: '野生型辨识',
      title: '不是斑点，是一张会移动的网',
      body: '头顶窄暗线、眼后斜纹与身上相连的黑褐菱形共同构成“网纹”。浅色中心、体侧白斑和自然虹彩会随光线变化，却不会变成缅甸蟒彼此分离的鞍斑；白化与虎纹则是人工选育色型。',
    },
    {
      key: 'labial-heat-pits',
      label: '热感窝',
      title: '唇缘的小凹穴，读取温暖猎物',
      body: '上下唇鳞的一排小窝被动感受红外热辐射，并与视觉、气味和触碰信息共同引导转头、攻击和咬后搜索。它们不是发光器官，也不会向外发射可见热射线。',
    },
    {
      key: 'diet-shift',
      label: '体型与食谱',
      title: '身体长大，菜单也跟着换挡',
      body: '苏门答腊胃内容样本中，小蛇主要捕食鼠类；约到 3—4 米体型段后，豪猪、灵长类、鼷鹿和野猪等较大猎物所占比重增加。食谱变化让不同体型使用人类改造环境的能力也不相同。',
    },
    {
      key: 'climbing-and-water',
      label: '树枝与水道',
      title: '会爬低枝，也能跨过海峡',
      body: '幼体轻巧，能沿低枝和灌丛移动；体型增大后更多留在地面和水边。强游泳能力让网纹蟒利用河流、湖泊和城市水道，也帮助它在东南亚岛屿之间形成广阔却遗传分化的分布。',
    },
    {
      key: 'eggs-and-interval',
      label: '繁殖投入',
      title: '两打卵，不等于一年一窝',
      body: '雌蛇盘绕卵团进行孵护。北苏门答腊样本平均每窝 24.2 枚，但繁殖间隔约 2—4 年；地点、季节、体型和营养都会改变繁殖表现，任何一个数字都不是全种固定日历。',
    },
    {
      key: 'monitoring-and-trade',
      label: '监测与贸易',
      title: '看不见，不等于不存在',
      body: '沙巴五年的密集河岸调查仍只有约 20% 平均探测概率，说明单靠野外目击很难估算种群。重复调查、收获样本人口学、来源追踪和遗传单元需要一起进入 CITES 无害性判定，才能区分真实变化与观测偏差。',
    },
  ],
  keyFacts: [
    '当前接受学名是 Malayopython reticulatus；Python reticulatus 是 IUCN 文件沿用的旧组合。',
    '它是世界最长的现生蛇种，但性别、地区和亚种体型差异很大，传闻极值不能代表普通成体。',
    '唇鳞热感窝被动感受猎物热辐射，并与视觉、化学和机械线索共同工作。',
    '苏门答腊样本中小个体主要食鼠，约 3—4 米后逐步转向更大的哺乳动物。',
    '北苏门答腊样本平均每窝 24.2 枚卵，雌蛇约每 2—4 年繁殖一次。',
    '全球 IUCN 为无危、趋势未知；CITES 附录 II 另行监管国际贸易。',
  ],
  threats: [
    '为皮革、肉、传统药用和宠物市场进行的野外采集及不可持续的地方性过度利用',
    '来源洗白、跨境转运、申报单位不一致和缺乏地区追踪削弱贸易管理',
    '雨林、河岸林和林下结构被农业扩张、种植园与城市化简化，尤其影响大型个体',
    '恐惧、家禽或宠物损失引发的冲突性捕杀与不安全搬运',
    '全球 LC 掩盖中南半岛地方性下降及菲律宾、婆罗洲、苏拉威西等遗传单元的独立风险',
  ],
  conservationActions: [
    '按 CITES 附录 II 开展可审计的无害性判定、许可和配额复核',
    '记录收获来源、努力量、性别、吻肛长与成熟度，重复比较人口学指标',
    '用可追溯标识和遗传工具核验野生、圈养与再出口来源，减少洗白和跨区替代',
    '按菲律宾、婆罗洲、苏拉威西及大陆/巽他等遗传结构设计监测与管理单元',
    '保护河岸林、林下隐蔽层、湿地连接和大型猎物，避免用人工生境替代完整生态结构',
    '由受训人员处理人蛇冲突并开展公众安全教育，减少徒手抓持和恐惧性捕杀',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'length-rank',
      label: '长度地位',
      value: '世界最长',
      note: '指现生蛇种的相对地位，不代表普通成体或一个无争议的精确最大值',
    },
    {
      key: 'clutch-mean',
      label: '平均窝卵数',
      value: '24.2',
      unit: '枚',
      note: '北苏门答腊收获样本均值，随雌蛇体型与地区变化',
    },
    {
      key: 'reproductive-interval',
      label: '雌蛇繁殖间隔',
      value: '2—4',
      unit: '年',
      note: '北苏门答腊研究推断，不是全种固定周期',
    },
    {
      key: 'survey-detectability',
      label: '河岸调查探测率',
      value: '约 20',
      unit: '%',
      note: '沙巴单一保护地五年研究的平均值，受月相影响',
    },
  ],
  media: {
    image: './images/species/reticulated-python/01-rainforest-riverbank-portrait.webp',
    alt: '晨雾中的东南亚雨林河岸，一条完整的野生型成年网纹蟒沿湿润树根呈松散 S 形停卧，主体位于画面右侧',
    focalPoint: { x: 0.7, y: 0.62 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/reticulated-python/02-net-pattern-and-labial-pits.webp',
        alt: '野生型网纹蟒头部与前段身体特写，可见头顶窄暗线、眼后纹、橙褐色竖瞳和上下唇鳞的小型热感窝',
        title: '一张网，从头顶延伸到全身',
        caption: '相连网纹是野生型辨识核心；唇鳞热感窝是浅小凹穴，不会发光或发射可见射线。',
        focalPoint: { x: 0.52, y: 0.5 },
      },
      {
        image: './images/species/reticulated-python/03-arboreal-juvenile.webp',
        alt: '一条纤细的幼年野生型网纹蟒沿东南亚河岸林的粗壮低枝移动，远处叶隙可见水面',
        title: '小体型更容易走上枝头',
        caption: '幼体和小型个体能利用低枝与灌丛；这不表示大型成体或整个物种是专性树栖。',
        focalPoint: { x: 0.56, y: 0.48 },
      },
      {
        image: './images/species/reticulated-python/04-plantation-edge-rat-ambush.webp',
        alt: '黄昏的油棕园与次生植被交界，一条中小型野生型网纹蟒隐蔽在落叶下，远处鼠类沿固定路径经过且尚未接触',
        title: '鼠类把小蛇带到人类环境边缘',
        caption: '苏门答腊样本中小个体主要食鼠；能利用农业镶嵌，不代表单一种植园可替代大型个体需要的复杂生境。',
        focalPoint: { x: 0.62, y: 0.62 },
      },
      {
        image: './images/species/reticulated-python/05-female-coiled-around-eggs.webp',
        alt: '隐蔽的林缘根洞内，一条大型雌性野生型网纹蟒盘绕卵团，只有数枚白色革质卵从身体间局部露出',
        title: '盘绕卵团的雌蛇',
        caption: '北苏门答腊平均约 24.2 枚卵、繁殖间隔约 2—4 年；画面不是全范围固定窝卵数。',
        focalPoint: { x: 0.5, y: 0.57 },
      },
      {
        image: './images/species/reticulated-python/06-nocturnal-riverside-survey.webp',
        alt: '沙巴森林河流的夜间，两名穿救生衣的研究人员乘小船进行非接触河岸视觉调查，数米外一条网纹蟒局部隐蔽在树根植被中',
        title: '重复寻找一条难以看见的蛇',
        caption: '沙巴五年研究的平均探测概率约 20%；研究人员只观察记录，不捕捉、不搬运，也不公开具体点位。',
        focalPoint: { x: 0.52, y: 0.62 },
      },
    ],
  },
  sources: RETICULATED_PYTHON_SOURCES,
  publishedAt: RETICULATED_PYTHON_CONTENT_DATE,
  updatedAt: RETICULATED_PYTHON_CONTENT_DATE,
}
```

是否设置 `featured: true` 属于首页编排选择，不是物种事实，因此不在研究建议中预设。

## 来源清单

| 主题 | 直接来源 | 本文用途与限制 |
| --- | --- | --- |
| 当前分类 | [The Reptile Database](https://reptile-database.reptarium.cz/Malayopython/reticulatus) [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1496311&mode=Info) | 接受名、作者、高阶分类、三个亚种、同物异名和国家范围；数据库分布不自动解决东帝汶现存状态或印度大陆繁殖证据 |
| 属级系统学 | [Reynolds et al. 2014](https://doi.org/10.1016/j.ympev.2013.11.011) | 支持 *Malayopython*；系统发育分类不替代地区保护评估 |
| 亚种修订 | [Auliya et al. 2002](https://doi.org/10.1007/s00114-002-0320-4) | 描述 *saputrai* 与 *jampeanus*；后续遗传结构仍提示分类需继续研究 |
| 全球 IUCN | [Stuart et al. — IUCN 2018-2](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T183151A1730027.en) | 全球 LC、趋势 unknown、2011 评估、范围、生境、地方性下降与利用；旧组合 *Python reticulatus* 不改变当前接受名，旧评估也不是当前普查 |
| 当前 CITES | [Appendices effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) [Trade Database](https://trade.cites.org/en/cites_trade/) | 附录 II 与当前申报记录；不同单位和报告方不可直接相加成全球捕获量 |
| 贸易管理 | [IUCN SSC 2016](https://doi.org/10.2305/IUCN.CH.2016.SSC-OP.61.en) [Malaysia/PERHILITAN 2021](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-14-03-A.pdf) | 印度尼西亚/马来西亚历史利用、半岛马来西亚管理建议和生境概括；有明确年代与地区限制 |
| 系统地理 | [Murray-Dickson et al. 2017](https://doi.org/10.1371/journal.pone.0182049) | 89 份样本、34 个单倍型、地区谱系与管理单元启示；线粒体数据和不均匀采样不足以由产品自行拆种 |
| 食性与体型 | [Shine et al. 1998](https://doi.org/10.1046/j.1365-2435.1998.00179.x) | 南苏门答腊超过千条收获个体的体型与胃内容；样本来源、地点和测量口径不可外推成全种典型值 |
| 繁殖与收获生物学 | [Shine et al. 1999](https://doi.org/10.1016/S0006-3207(98)00068-8) | 北苏门答腊 784 条样本、平均 24.2 枚卵、2—4 年间隔、鼠类与改造生境；地区性结果 |
| 重复收获样本 | [Natusch et al. 2016](https://doi.org/10.1371/journal.pone.0158397) | 苏门答腊 1995/2015、4,200 余条样本的趋势比较；“表面可持续”只覆盖相应地点、时期、设施与指标 |
| 当前野外监测 | [Burger et al. 2026](https://doi.org/10.1038/s41598-026-57269-9) | 沙巴五年、527 次调查、约 20% 探测率及建模限制；单保护地结果不是全球探测率 |
| 捕食力学 | [Penning et al. 2015](https://doi.org/10.1242/jeb.127449) | 48 条圈养网纹蟒的压力范围与体径关系；神经 “red-out” 是提出的可能机制，不是唯一已证实结论 |
| 热感受 | [de Cock Buning et al. 1978](https://doi.org/10.1163/002829678X00198) [de Cock Buning et al. 1981](https://doi.org/10.1007/BF00710682) | 圈养行为和窝器官电生理；支持多感官协同，不支持可见热像或发射红外线 |
| 政府辨识与生境 | [Singapore NParks](https://biodiversitysg.nparks.gov.sg/our-biodiversity/reptiles/snakes/reticulated-python/) [Philippines DENR WildALERT](https://www.wildalert.ph/s/302) | 野生型外形、攀爬与共存安全；科普概括不替代原始体型或种群研究 |
| 中文贸易辨识 | [CITES/TRAFFIC identification guide](https://www.traffic.org/site/assets/files/13443/cn_identification_final.pdf) | 中文名、头纹、体纹、唇窝和附录辨识；其中历史最大长度概括不进入结构化字段 |

## 仍然不确定或需后续更新的事项

1. **IUCN 记录很旧**：当前公开条目仍是 2011 年评估、2018-2 发布。新评估一旦出现，应同时更新 category、trend、assessedYear、range、threats 和可能的 criteria，不能只改年份。
2. **全球丰度未知**：贸易量、收获设施样本和沙巴调查捕获数都不能替代全球成熟个体估计；`estimatedMatureIndividuals` 应继续留空。
3. **亚种与保护单元未完全解决**：当前分类承认三个亚种，2017 年线粒体研究又显示更复杂的地区结构；更新需等待更完整的核基因组、模式材料和正式分类修订。
4. **印度大陆与东帝汶状态需新证据**：印度大陆记录可能为游移个体；东帝汶在 IUCN 评估时为可能已绝迹。产品只能保留不确定性，不能自行补画范围。
5. **体型口径不可混用**：吻肛长、全长、皮张长度、圈养个体和历史纪录不是一个指标。若未来要填 `measurements`，必须选定测量方法并同时按性别、地区说明。
6. **野外寿命与海拔上限不足**：圈养寿命不能替代野外寿命；IUCN 与地区管理文件的海拔概括也不构成统一全范围硬上限。
7. **收获可持续性必须持续复核**：苏门答腊 20 年比较是重要证据，但不自动覆盖捕获努力变化、非法来源、其他岛屿谱系或未来市场压力。
8. **探测率不是常数**：约 20% 来自沙巴一处保护地并受月相影响；其他生境、季节和调查方法需重新估计。
9. **孵卵产热未在核心资料中得到物种级确认**：实现只写盘绕与孵护，不添加肌肉颤抖产热、固定孵化温度或可见热浪。
10. **图片 focal point 必须实图复核**：当前数值来自构图计划；任何生成重试、裁切或尺寸变化都可能移动主体。

## TODO 更新约定

只有以下项目全部落地并通过验证后，才从 `docs/todo.md` 删除一行 `网纹蟒（Malayopython reticulatus）  `：

1. 六张源 PNG 与素材 README 已保存，六张运行时 WebP 已生成并通过尺寸、色彩空间、alpha 和解码检查；
2. `species.ts` 的来源常量、完整物种对象和六条媒体路径已接入；
3. 分类单元数量、物种字段、故事数、统计数与素材路径测试已更新；
4. `npm run typecheck`、`npm test`、`npm run build` 与 `git diff --check` 全部通过。

不要在研究或只生成部分素材时提前删除。删除后应确认 `docs/todo.md` 的首个剩余条目是 `中国大鲵（Andrias davidianus）`。
