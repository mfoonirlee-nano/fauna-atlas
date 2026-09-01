# 紫海胆（Strongylocentrotus purpuratus）物种档案研究

> 研究截止：2026-09-01
> 用途：Fauna Atlas 物种页、结构化 `Species` 字段与六幅 1536 × 1024 科学情景图
> 证据口径：接受名和现行高阶分类采用 WoRMS；中文名采用机构馆藏与政府物种名录；分布、形态、发育、生态和胁迫优先采用本种原始论文、机构标本记录及官方长期监测。旧综述只用于它明确汇总的范围、尺寸和历史研究入口，不把局地样点、实验处理或模型估计外推成全种定律。

## 1. 结论摘要

WoRMS 接受名为 *Strongylocentrotus purpuratus* (Stimpson, 1857)，AphiaID 240747。Stimpson 最初以 *Echinus purpuratus* 描述本种，模式产地为 San Francisco；命名人置于括号内正是因为本种后来移入 *Strongylocentrotus*。WoRMS 当前链中的目为 Camarodonta，不是旧馆藏页和 1999 年综述仍沿用的 Echinoida。[S01][S02][S03][S04]

项目固定六级分类应写为 Animalia、Echinodermata、Echinoidea、Camarodonta、Strongylocentrotidae、*Strongylocentrotus*。`animalTaxonomy` 自动补 Animalia，代码只传门、纲、目、科、属五项。中文可写动物界、棘皮动物门、海胆纲、拱齿目、球海胆科、球海胆属；其中“球海胆属”是依据同属中文种名形成的项目工作译名，拉丁学名才是稳定键。[S01][S02][S06]

臺大动物博物馆把该学名对应为“紫海膽”，国立自然科学博物馆馆藏采用“加州紫海膽”。项目简体主名推荐“紫海胆”，把“加州紫海胆”放入别名；页面标题和检索词必须始终绑定 *S. purpuratus*。中国农业农村部资料也把东亚的 *Heliocidaris crassispina* 称作“紫海胆”，因此脱离学名使用中文名会造成物种混淆。[S05][S06][S07]

可信范围为北美太平洋岸：阿拉斯加 Torch Bay 向南，经加拿大不列颠哥伦比亚、美国华盛顿—俄勒冈—加利福尼亚，至墨西哥下加利福尼亚 Isla Cedros。它以暴露或半遮蔽岩岸的潮间带种群最常见，官方综述也汇总了约 160 米深的采集记录；“潮间带常见”和“最深记录”不能拼成一个均匀占据的 0—160 米带。[S08][S09]

主要生境是受中到强浪涌影响的下部岩石潮间带，也见于浅水岩礁和海藻林、潮池、巨砾区、鳗草床潮池与砂岩平台。个体常贴伏于岩面、裂隙或圆形凹坑；软岩凹坑可被持续扩大，但凹坑形成速度强烈依赖岩性，不能把每个凹坑都解释成当前个体独立“凿成的家”。[S08][S18][S19]

身体主体是由碳酸钙骨板构成的近圆形壳（test），外覆可动棘、管足和微小叉棘。官方综述给出的壳径常见值约 50 毫米，记录最大 104 毫米，棘通常不超过 25 毫米；成体和棘通常亮紫，幼小海胆可呈淡绿色。壳径不含棘尖，不能用“总刺展宽”替换，也不能把 50 毫米写成所有地区的成体均值。[S08][S11]

管足用可逆黏附在浪区固定身体，并可主动脱附以移动。加利福尼亚三个岩性种群的实验显示，管足吸盘面积和黏附性能随来源种群、基质及实验室饲养而变；任何单一黏附力都不是物种常数。棘会生长和修复，也能在凹坑中支撑身体、磨蚀岩面。叉棘不是幼棘：本种具多种叉棘，球状叉棘含分泌腺细胞，并会对上游捕食者化学线索出现张开反应；现有证据不支持把它包装成对人类有确定危险的“毒刺”。[S12][S13][S14][S15][S16][S19]

口位于口面中央，亚里士多德提灯固定五枚辐射对称、持续生长并保持切削边缘的牙齿。紫海胆以大型藻类和藻屑为主，也处理海带碎屑，因此 schema 可用 `herbivore` 与 `detritivore`，不宜简化成“只吃活海带”。牙齿刮食和吞入软岩颗粒、棘的磨蚀都会参与生物侵蚀，二者份额随岩性和实验条件改变。[S17][S18][S19][S20]

紫海胆既是海藻林消费者，也是海藻碎屑的加工者。北加州 2014 年前后的长期记录显示，海洋热浪、海星捕食者损失和紫海胆暴发与牛尾藻林转为海胆荒地同期发生；研究者没有把崩塌归因于一个单独驱动。南蒙特雷湾的 22 年序列则发现，2014 年可见海胆暴发主要来自觅食行为转变，而非当时的存活或补充量跃升。页面应讲“由环境、捕食、密度和行为共同塑造的局地状态转变”，不能写“紫海胆到处摧毁海藻林”。[S22][S23][S24]

资源匮乏的荒地个体可维持存活，但其形态和能量分配不同。2017 年蒙特雷 83 个样点中，荒地个体相对体型的提灯更长、性腺状况更低；这是该地三年前形成的海藻林—荒地镶嵌景观结果，不是可以目测给全范围个体贴上的永久型态标签。[S21]

本种雌雄异体并把配子释放入水体，受精在体外发生。俄勒冈三个种群连续四个年度的研究发现主要产卵在 12 月下旬至 3 月，但繁殖时序受地点、食物、温度和水动力影响，不能作为整条海岸统一日历。胚胎发育成浮游长腕幼体（pluteus）；形态分期从四腕、八腕到幼体左侧形成成体原基，原基内出现幼体后期的棘、壳板和管足结构，变态后成为五辐射幼胆。实验培养常见浮游期约 1—3 个月，温度、食物和批次会改变进度，不能当作野外每只幼体的固定漂流时长。[S08][S26][S27][S28]

寿命证据必须分层。1967 年标记研究直接证明部分个体一年后壳径缩小，因此体型不能可靠换算年龄，只能判断本种相对长寿；后续生长曲线与年龄研究常给出 45—50 年或“超过 50 年”的最大寿命估计，但并非已知出生年份个体的直接寿命纪录。`metrics.lifespanYears` 应留空，正文可写“模型估计可超过 50 年，直接已知年龄上限未建立”，也不得套用红海胆超过百年的结果。[S09][S30][S31][S32]

截至 2026-09-01，对 IUCN Red List 当前检索以接受名精确查询没有找到本种评估页。项目可用 `NE / unknown` 表示“未找到全球评估”，不填评估年份和标准；这不是 IUCN 发布了一份“NE 评估”，更不等于无危、稳定或种群很多。[S33][S34]

已证实的风险大多是局地事件或实验反应：2011 年北中加州约 100 千米岩岸发生包括紫海胆在内的无脊椎动物大规模死亡；早期胚胎、长腕幼体对温度和碳酸盐化学处理有可测响应；荒地状态会降低性腺状况。它们支持监测死亡、补充、体况和水文，不支持推断全物种下降。合理监测组合是固定深度的重复 SCUBA 带状样带、壳径频率、海藻与底栖盖度、捕食者和病损记录，再与航空/卫星海藻冠层、温度、pH、溶氧和招募收集器配对。[S21][S29][S35][S36][S37][S38][S39][S40]

## 2. 证据层级与外推规则

本档案按以下顺序使用证据：

- **现行权威名录。** 接受名、作者、AphiaID 和固定分类以 WoRMS 当前记录为准；OBIS 只作分类及出现记录发现入口。[S01][S02][S41]
- **本种原始论文。** 实验、野外样带、标记、组织学和发育分期只支持论文中的种群、时期和处理；明确标注 `Strongylocentrotus purpuratus` 才进入物种事实。
- **机构一手记录。** 博物馆馆藏支持中文名和标本信息；CDFW 监测页支持真实监测体系；不把机构图片的视觉印象转换成未报告数值。[S05][S06][S38]
- **官方综述。** DFO 1999 文献综述可承载它明确汇总的范围、深度、尺寸和栖地，但其中 Echinoida 是旧分类，且所有引用的旧实验仍应保留来源和时期。[S08]
- **局地生态时间序列。** 北加州牛尾藻、南蒙特雷湾巨藻和南加州恢复研究互相补充，却不能合并成一条覆盖全分布区的因果链。[S22][S24][S25]

以下字段本轮不补齐：总种群量、成熟个体数、全球种群趋势、全球统一密度、固定繁殖季、精确性成熟年龄、成体体重、全种平均壳径、已知年龄上限、普适温度或 pH 阈值、全球海藻林损失归因、捕食者完整清单和任何当前渔获限额。

## 3. 命名、接受名与固定六级分类

### 3.1 名称决策

| 字段 | 推荐值 | 证据与边界 |
|---|---|---|
| 中文主名 | 紫海胆 | 臺大动物博物馆馆藏把该学名对应为“紫海膽”；项目转为简体。[S05] |
| 中文别名 | 加州紫海胆 | 国立自然科学博物馆馆藏名，可帮助与东亚同名种消歧。[S06] |
| 英文主名 | Purple Sea Urchin | WoRMS/OBIS 俗名及臺大馆藏英文名。[S05][S41] |
| 接受名与命名人 | *Strongylocentrotus purpuratus* (Stimpson, 1857) | WoRMS 接受记录，AphiaID 240747。[S01] |
| 原组合 | *Echinus purpuratus* Stimpson, 1857 | 原始描述与 Smithsonian 模式标本目录。[S03][S04] |
| 模式产地 | San Francisco | Smithsonian 目录列 USNM 2495 和 San Francisco；不把模式产地当分布中心。[S04] |
| `scientificName` | `Strongylocentrotus purpuratus` | schema 只存二名法，不附作者。 |
| `id` | `species-strongylocentrotus-purpuratus` | 项目键，无自然史含义。 |
| `slug` | `purple-sea-urchin` | 采用英语通行名。 |

### 3.2 中文名消歧

“紫海胆”不是跨地区唯一俗名。农业农村部水产种质资料把 *Heliocidaris crassispina* 也列为“紫海胆”，并把 *Mesocentrotus nudus* 的俗名列作“紫海胆/大连紫海胆”。因此搜索别名不能只按中文字符串合并记录；页面、图像生成、来源检索和导入去重都应以 `Strongylocentrotus purpuratus` 或 AphiaID 240747 为主键。[S07]

### 3.3 固定六级链

| 项目字段 | 学名 | 推荐中文 | WoRMS 阶元 | 决策 |
|---|---|---|---|---|
| kingdom | Animalia | 动物界 | Kingdom | `animalTaxonomy` 自动补齐。[S02] |
| phylum | Echinodermata | 棘皮动物门 | Phylum | 直接采用。[S02] |
| class | Echinoidea | 海胆纲 | Class | 直接采用。[S02] |
| order | Camarodonta | 拱齿目 | Order | 采用 WoRMS 当前阶元；不沿用 Echinoida。[S02] |
| family | Strongylocentrotidae | 球海胆科 | Family | 拉丁名来自 WoRMS；中文见国立自然科学博物馆馆藏。[S02][S06] |
| genus | *Strongylocentrotus* | 球海胆属 | Genus | 拉丁名直接采用；中文为项目工作译名。 |

~~~ts
taxonomy: animalTaxonomy(
  taxon('Echinodermata', '棘皮动物门'),
  taxon('Echinoidea', '海胆纲'),
  taxon('Camarodonta', '拱齿目'),
  taxon('Strongylocentrotidae', '球海胆科'),
  taxon('Strongylocentrotus', '球海胆属'),
)
~~~

旧资料写 Echinoida 不代表同一页面可以任选两个目。臺大馆藏和 DFO 综述保留的是当时分类；WoRMS 当前 `AphiaClassificationByAphiaID/240747` 把本种放在 Camarodonta。项目要求当前固定六级链，应只用 Camarodonta，并在来源说明中保留历史差异。[S02][S05][S08]

## 4. 分布、深度与地图口径

### 4.1 水平范围

DFO 对历史记录的汇总把本种范围写为阿拉斯加 Torch Bay 至墨西哥下加利福尼亚 Isla Cedros。Ebert 2010 的野外数据覆盖 29.93°N 至 50.47°N，约为当时报导纬度范围的 65%，并以 Torch Bay 58.33°N 和南加州—下加利福尼亚记录讨论边界；该研究没有采遍完整范围，不能以它的样点端点替换物种端点。[S08][S09]

推荐结构化区域：

- 阿拉斯加东南部和不列颠哥伦比亚外海岩岸；[S08]
- 美国华盛顿与俄勒冈岩岸；[S08][S09]
- 加利福尼亚北、中、南部潮间带及浅水岩礁；[S08][S22][S24]
- 墨西哥下加利福尼亚北段至 Isla Cedros；[S08]
- 北美东北太平洋沿岸，不涂满远洋水体。[S08][S41]

`center: { lat: 38, lng: -124 }` 只是让地图聚焦北美太平洋岸中段，不是模式产地、密度中心或分布几何中心。若以后画范围，应沿海岸显示狭长、间断带，而不是填充美国、加拿大和墨西哥整块国土。

### 4.2 垂直范围

本种在潮间带最常见，尤其是中到强浪涌的下部潮间带。DFO 同一综述汇总的最深采集为 160 米；这条深水记录说明物种并非严格潮间带生物，却不说明各深度都常见，也不适合写进 `metrics.maxDiveDepthM`——该字段语义更像主动潜水深度。[S08]

推荐文案：“常见于北美太平洋岸暴露或半遮蔽的岩石潮间带，尤以下部潮间带为主；也有浅水岩礁及最深约 160 米的采集记录。”[S08]

### 4.3 分布字段草案

~~~ts
distribution: {
  realms: ['marine'],
  continents: ['北美洲'],
  regions: [
    '阿拉斯加东南部与不列颠哥伦比亚太平洋岸',
    '美国华盛顿、俄勒冈和加利福尼亚岩岸',
    '墨西哥下加利福尼亚北段至 Isla Cedros',
    '北美东北太平洋潮间带与浅水岩礁',
  ],
  countries: ['美国', '加拿大', '墨西哥'],
  range:
    '沿北美太平洋岸由阿拉斯加 Torch Bay 向南，经不列颠哥伦比亚和美国西海岸至墨西哥下加利福尼亚 Isla Cedros；以岩石潮间带最常见，另有约 160 米深的采集记录。',
  center: { lat: 38, lng: -124 },
}
~~~

以上国家是海岸分布标签，不代表种群受国界切割。中心点和区域字符串都不能用于计算面积、占有区或全球趋势。[S08][S09]

## 5. 生境

| 生境 | 可支持描述 | 不应外推 |
|---|---|---|
| 暴露或半遮蔽岩岸下部潮间带 | 常见于中到强浪涌或潮流冲刷的岩面、裂隙和凹坑。[S08][S12] | 不给出普适浪高、流速或附着力阈值。 |
| 浅水岩礁与海藻林 | 以巨藻或牛尾藻为代表的海藻林及其岩礁镶嵌；南加州实验场景多在约 3—20 米，蒙特雷形态研究在 5—20 米。[S20][S21] | 两个研究的深度不是全种首选深度。 |
| 海胆荒地 | 宏藻稀少、结壳藻占优、海胆高密度的局地状态；可与海藻林形成斑块镶嵌。[S21][S24] | “荒地个体”不是独立种群或固定形态型。 |
| 潮池、巨砾、鳗草床潮池与砂岩平台 | DFO 汇总的附加生境记录。[S08] | 不把鳗草床写成全范围主要生境。 |
| 更深岩底 | 最深约 160 米采集证明可进入深水。[S08] | 记录深度不等于常见丰度带。 |

~~~ts
habitats: [
  {
    name: '浪涌岩石潮间带',
    realm: 'marine',
    isPrimary: true,
    description:
      '常见于暴露或半遮蔽海岸的下部潮间带，在岩面、裂隙和凹坑中利用管足与棘抵抗中到强浪涌；没有可外推到全范围的统一水动力阈值。',
  },
  {
    name: '浅水岩礁与海藻林',
    realm: 'marine',
    description:
      '出现在巨藻或牛尾藻林的岩礁底部，摄取活体宏藻和漂落藻屑；消费者密度、行为、捕食者与海洋环境共同影响海藻林是否转为海胆荒地。',
  },
  {
    name: '海胆荒地与结壳藻岩面',
    realm: 'marine',
    description:
      '在局地宏藻资源贫乏、结壳藻占优的岩礁上可形成高密度聚集；荒地个体常见较低性腺状况和相对更长的提灯，但结果具有地点与时期边界。',
  },
]
~~~

## 6. 外形、尺寸、管足、棘与叉棘

### 6.1 外形与尺寸

本种为规则海胆：口面朝底，反口面向上，壳由骨板构成并呈近圆至略五角的轮廓。DFO 汇总指出壳形高低和圆—五角轮廓会变化；身体和棘通常亮紫，幼小个体偶见淡绿色。图像应让紫色来自棘与可见表面，而不是画成一只光滑紫球。[S08][S11]

尺寸必须标明测量对象：

| 指标 | 证据值 | 结构化处理 |
|---|---:|---|
| 常见壳径 | 约 50 mm | 可写 `typical: 5 cm`，注明是综述汇总的常见值，不是全范围统计均值。[S08] |
| 最大记录壳径 | 104 mm | 写 `max: 10.4 cm`；不含棘。[S08] |
| 棘长 | 通常不超过 25 mm | 放说明或正文，不与壳径相加。[S08] |
| 成体体重 | 未建立 | 不填 `weight` 或 `adultMassKg`。 |

~~~ts
measurements: {
  length: {
    typical: 5,
    max: 10.4,
    unit: 'cm',
    note:
      '壳径（test diameter），不含棘；官方综述汇总常见约 50 mm、记录最大 104 mm。不同地点和资源条件会改变体型分布。',
  },
}
~~~

`metrics.adultLengthCm` 不建议填 `[5, 10.4]`：5 厘米是汇总的常见值，10.4 厘米是极值，它们不是一个可用于筛选的典型成体区间。[S08]

### 6.2 管足

管足末端圆盘分泌黏附物，可暂时牢固附着并主动脱离，兼顾抗浪与移动。Narvaez、Stark 与 Russell 比较加利福尼亚花岗岩、泥岩和砂岩种群，发现泥岩来源个体的吸盘面积和最大单位面积黏附性能高于砂岩来源个体；互换基质后，各实验组连同对照在实验室都缩小吸盘面积。结果证明种群与环境可塑性重要，也提醒实验室数值会被圈养条件改变。[S12]

图像可显示五条步带上伸出的半透明管足、末端小圆盘和部分管足贴附岩面。不要把管足画成章鱼吸盘触手、昆虫腿、统一长度的毛，也不要用一张静态图声称黏附力、移动速度或浪高阈值。[S12]

### 6.3 棘

棘是可动的钙质结构，会磨损、断裂和修复。Ebert 对 *S. purpuratus* 棘的标记与切除实验直接研究了生长和修复；后续岩性实验又证明棘在凹坑内会造成可测的岩面磨蚀。棘不只是“防御针”，也参与支撑、运动接触和生物侵蚀，但各功能份额随姿态和底质改变。[S13][S19]

### 6.4 叉棘

叉棘是棘间独立的微小钳状附肢。本种拥有主要海胆叉棘类型以及 claviform 型；球状叉棘的分泌腺细胞已由电镜和组织化学研究描述。实验中，上游向日葵海星的化学线索可让紫海胆伸展并张开球状叉棘，支持其参与对捕食者线索的反应。[S14][S15][S16]

“有分泌腺”不等于可以写“刺伤人会中毒”。本轮没有找到能量化本种对人临床危害的直接研究；页面和图像只写结构与观察到的反应，不渲染注毒、喷毒或致命性。[S14][S15]

## 7. 亚里士多德提灯、食性与岩石生物侵蚀

### 7.1 五枚持续生长的牙齿

口面中央的亚里士多德提灯是一套骨片、肌肉和牙齿组成的咀嚼器。对 *S. purpuratus* 的解剖和生物矿化研究显示，提灯锚定五枚辐射排列、持续生长并维持切削边缘的牙齿；每枚牙可区分切削尖端、轴部和生长端。图像应把五牙保留在完整提灯中，不能画成五颗独立脊椎动物牙或一个有上下颌的嘴。[S17]

### 7.2 不只是“吃活海带”

Yorke、Page 与 Miller 用同位素标记巨藻碎屑进行野外实验，直接证明海胆会破碎并摄取海带碎屑，从而改变其他底栖消费者可获得的藻屑。结合海藻林和荒地研究，本种可概括为以宏藻为主的植食兼碎屑食者；`diet.types` 使用 `['herbivore', 'detritivore']`，食物列活体大型藻类、漂落海带碎屑、结壳与叶状藻表面资源，不写“纯粹食草”或“只吃巨藻”。[S20][S21]

~~~ts
diet: {
  types: ['herbivore', 'detritivore'],
  foods: ['活体大型藻类', '漂落的海带与其他宏藻碎屑', '结壳藻和叶状藻表面资源'],
  description:
    '用亚里士多德提灯的五枚牙齿刮取宏藻和岩面食物，也摄取并破碎漂落海带碎屑；食物供应会改变提灯相对尺寸、性腺投入和觅食行为。',
}
~~~

### 7.3 凹坑与生物侵蚀

Russell、Gibbs 与 Duwan 的一年实验把不同岩性凹坑形成速率分开：沉积岩可在数月出现明显加深，按实测速率推算形成中等凹坑可能少于 5 年，而花岗岩可超过 100 年；主要机制是摄食岩石颗粒。这个时间尺度是岩性与实验条件下的推算，不是凹坑年龄测定法。[S18]

Narvaez 与 Russell 的 11 周 2 × 2 实验进一步分离岩性和食物供应。砂岩处理中约 31.09% 的总侵蚀来自棘磨蚀，泥岩仅约 1.30%；两者不是物种固定比例。页面可说牙齿摄食和棘磨损都参与，不能给所有岸礁套用“约三分之一由棘造成”。[S19]

## 8. 海藻林、海胆荒地与状态转变

### 8.1 消费者与碎屑加工者

在有宏藻的岩礁，紫海胆可取食附着藻体，也可等待和处理海带碎屑。Yorke 等的标记藻屑实验说明海胆会把大块藻屑切碎，并改变碎屑向其他底栖消费者的可用性；因此它不只是“清空海藻的啃食者”，也是沿海碎屑通道的一环。[S20]

### 8.2 北加州 2014 年转变

Rogers-Bennett 与 Catton 整合 1999—2018 年潜水调查、海藻冠层和温度资料。北加州在 2013—2015 年海洋热浪、海星捕食者损失与紫海胆增长后，由牛尾藻林转向大尺度海胆荒地；部分站点 2015 年紫海胆超过历史数量 30 倍，汇总均值一度出现约 60 倍跃升。作者明确保留多个压力相对作用的不确定性。[S22]

McPherson 等用 34 年卫星影像和潜水数据发现，北加州相关区域 2014—2015 年海藻冠层损失超过 95%，荒地随后持续多年。95% 是特定区域、时间窗口和冠层遥感指标，不是紫海胆全分布区的海藻损失比例，也不是本种导致损失的单因素份额。[S23]

### 8.3 南蒙特雷湾的行为证据

Smith 与 Tinker 分析 22 年 PISCO 时间序列，并连续三年记录觅食状态。南蒙特雷湾 2014 年的可见紫海胆暴发主要由个体从隐蔽、被动摄食转向暴露、主动放牧以及空间移动驱动，而不是同步的存活或补充跃升；后来海胆向浅水移动又与部分斑块恢复相关。密度变化、行为变化和空间再分配必须分开监测。[S24]

### 8.4 荒地个体并非“僵尸”

Smith 与 Garcia 在蒙特雷半岛 83 个 5—20 米岩礁样点，将八条 5 米放射样带、藻类盖度、壳径和解剖测量配对。荒地个体相对壳径的提灯更长，性腺重量更低；结果支持资源限制下的能量分配与形态可塑性，不证明个体停止代谢、永久不繁殖或无法恢复。[S21]

南加州另有长期样带记录：海胆大规模死亡后，原荒地在数月到年份尺度重新出现海藻主导状态。这说明降低放牧压力可能触发恢复，却不意味着任意地点清除海胆都会自动恢复；海藻繁殖体、底质、温度、捕食者和重复干预都会改变结果。[S25]

页面推荐因果句：

> 在部分东北太平洋岩礁，海洋热浪、捕食者损失和紫海胆密度或觅食行为转变可共同把海藻林推向海胆荒地；不同地区的触发因素和恢复路径并不相同。[S22][S23][S24][S25]

## 9. 繁殖、长腕幼体与变态

### 9.1 配子释放与季节

紫海胆雌雄异体，成体把卵或精子释放入水中并体外受精。图像中雌雄外观不能可靠区分，精卵云也不能证明某一帧已经受精。[S08][S26]

Gonor 在俄勒冈中部三个地点连续跟踪四个年度，月度测量性腺指数并检查卵巢切片，发现种群内年度周期同步，主要排放发生在 12 月下旬至 3 月。这是约 44°45′N 的俄勒冈结果；加州深度梯度和温度—食物研究报告不同窗口，项目不提供全范围固定产卵月份。[S26]

### 9.2 从胚胎到 pluteus

受精卵经卵裂、囊胚、原肠胚和棱柱幼体进入长腕幼体。Smith 等以活体观察、共聚焦和连续切片建立七个从长腕期到变态的阶段：四腕、八腕、前庭内陷、原基启动、五角盘、进阶原基和管足突出。后期原基在幼体左侧建立五辐射幼体结构；“八腕幼体直接缩成小海胆”会漏掉原基和变态。[S27]

Heyland 与 Hodin 又把晚期原基的软组织和骨骼结构分开分期，直接观察到未来幼胆的棘、壳板和管足原基。不同温度、投喂和批次出现异时性；其“浮游 1—3 个月后变态”是培养经验范围，不是野外漂流计时器。[S28]

推荐生命周期顺序：

1. 雌雄成体向水中释放配子，体外受精。[S08][S26]
2. 胚胎卵裂并形成游泳原肠胚、棱柱幼体。[S08]
3. 进入具有长腕和钙质骨杆的摄食性 pluteus，四腕后可发展为八腕。[S27]
4. 幼体左侧形成成体原基，原基内出现五辐射幼胆的壳板、棘和管足。[S27][S28]
5. 获得适当底栖线索后变态，幼体组织重组为小型五辐射幼胆。[S28]

### 9.3 早期阶段的环境边界

Hammond 与 Hofmann 比较不同纬度亲本来源的原肠胚和四腕幼体热反应；种群间热应激基因反应范围不同，实验最大反应约在 25 °C 左右。该温度是受控实验的生理反应点，不能写成野外统一致死温度。[S29]

Yu 等依据加利福尼亚上升流环境 pH 设计四腕幼体实验，显示低 pH 会影响发育和形态；Place 与 Smith 在更强人工酸化处理中又发现卵裂减慢不一定由常见细胞周期检查点直接造成。早期阶段确实可响应碳酸盐化学，但结果随处理、亲本、温度和食物改变，不能直接转换成物种灭绝风险。[S36][S37]

## 10. 寿命边界

### 10.1 直接证据

Ebert 1967 把标记并测量的紫海胆放回俄勒冈 Sunset Bay 潮池，一年后发现许多个体壳径缩小。直接结论是“体型不必随年龄单调增加，壳径不能可靠判龄”，以及本种相对长寿；论文没有提供一个出生已知个体活到 50 年的记录。[S30]

### 10.2 模型估计

随后以四环素标记、生长函数和地点曲线推算的资料常把最大年龄估为约 45—50 年。Ebert 2010 的纬度梯度研究又显示生长和存活没有简单纬度规律；Bodnar 与 Coffman 将本种作为“估计最大寿命超过 50 年”的中长寿海胆研究组织修复。这里的“超过 50 年”是生长模型和文献综合估计，不是硬上限或平均寿命。[S09][S31][S32]

### 10.3 Schema 决策

~~~ts
metrics: {
  // lifespanYears deliberately omitted:
  // >50 years is an estimated maximum-life boundary, not a known-age range.
}
~~~

正文建议：“紫海胆可能存活数十年；生长模型给出的最大寿命估计约 45—50 年或更高，但直接已知年龄上限仍未建立。”[S30][S31][S32]

不采用“平均 20 年”、`[20, 50]` 或 `[0, 50]`。前者缺少本轮可复核的直接种群年龄结构，后两者会把平均、极值估计和数学下界混为一个规范化范围。

## 11. IUCN、威胁与监测

### 11.1 IUCN 状态

截至 2026-09-01，以接受名 *Strongylocentrotus purpuratus* 在 IUCN Red List 当前物种检索中没有找到评估页。IUCN FAQ 说明 Red List 收录经过全球评估的物种，并可按学名检索；无结果只说明本轮没有发现全球评估，不说明种群安全。[S33][S34]

~~~ts
conservation: {
  system: 'IUCN Red List',
  code: 'NE',
  label: { zh: '未评估', en: 'Not Evaluated' },
  trend: 'unknown',
  assessor: 'IUCN Red List',
  // assessedYear and criteria intentionally absent for NE.
}
~~~

项目的 `NE` 是缺失评估的表示层约定，不应写成“IUCN 评为未评估”。`trend` 必须为 `unknown`，也不从局地暴发推断全球增加。

### 11.2 已知压力及证据边界

| 压力或事件 | 可支持结论 | 边界 |
|---|---|---|
| 局地大规模死亡 | 2011 年北中加州约 100 km 岩岸的多个无脊椎动物出现异常死亡，潮间带紫海胆在受影响带近乎功能性消失。[S35] | 病因未完全确定；不能外推为全种下降。 |
| 海洋热浪与食物网改变 | 北加州海洋热浪、海星捕食者损失和紫海胆暴发与海藻林崩塌同期发生。[S22][S23] | 对海胆而言既可能增加可见密度，也会造成长期食物匮乏；不是单向“气候让海胆减少”。 |
| 荒地资源限制 | 蒙特雷荒地个体性腺状况更低、提灯相对更长。[S21] | 是体况与能量分配证据，不是死亡率或全球繁殖率。 |
| 高温暴露 | 早期发育阶段在实验温度梯度中出现死亡和热应激响应，来源种群反应不同。[S29] | 实验处理不能直接设成野外阈值。 |
| 低 pH / 高 pCO₂ | 胚胎和四腕幼体的发育、形态和细胞能量过程会对实验酸化响应。[S36][S37] | 不同实验结果与机制不同，不能直接写成全球种群衰退。 |
| 采捕与恢复性移除 | 历史上存在紫海胆商业或试验采捕，当前加州也把局地移除列为海藻林恢复工具。[S08][S38] | 规章会变化；本档案不陈述 2026 年袋限、许可或开放区。 |

`threats` 应把每项写成“局地或潜在压力＋未知全球后果”，不使用 IUCN 式定量严重度。紫海胆也可能是管理行动的目标消费者；“威胁紫海胆”和“紫海胆对海藻林的压力”是两个方向，不能混成同一保护叙事。[S22][S38]

### 11.3 监测设计

CDFW 将加州海藻林监测分为历史航空调查、Landsat 卫星冠层、无人机近岸冠层和长期 SCUBA 亚潮带项目。遥感能量化冠层面积，却看不到海底紫海胆、隐蔽个体、壳径、性腺或结壳藻；潜水样带补足底栖密度和群落结构，但空间范围较小。[S38]

PISCO/RCCA 等加州海洋保护区监测使用固定站点和带状样带，在多个深度重复记录海胆密度与尺寸、海带、鱼类、底质和盖度。近期跨 105 个站点、1999—2021 年的分析使用约 5、12、20 米深度和 30 × 2 米 SCUBA 样带，说明长期比较必须保留站点、深度、样带面积和年份，而不是只报“每平方米多少只”。[S39][S40]

建议每次监测至少记录：

- 固定站点、GPS、日期、深度层、样带长度与宽度、观察者和可见度；[S38][S39][S40]
- 紫海胆总数、暴露与隐蔽状态、壳径频率、空壳或病损、可复核影像；[S21][S24][S35]
- 海藻冠层、成体与幼体海带密度、叶状藻/结壳藻/裸岩百分盖度；[S21][S38]
- 主要海胆捕食者和其他海胆的密度，避免把群落变化归给单一物种；[S22][S39]
- 温度、pH、溶氧、浪暴或上升流事件及传感器校准；[S29][S36][S37]
- 招募收集器或幼体指标、性腺指数子样和必要的组织病理；[S21][S35]
- 海藻林恢复或海胆移除区的处理前、处理后和未处理对照，并记录移除强度与复访时间。[S25][S38]

单次高密度不是趋势，单张荒地图也不是因果证据。至少需要跨季节或跨年的同法复测，并把海底样带与冠层遥感对齐。[S22][S23][S38]

## 12. Species 字段映射

| Schema 字段 | 建议 | 来源与理由 |
|---|---|---|
| `id` | `species-strongylocentrotus-purpuratus` | 项目键。 |
| `slug` | `purple-sea-urchin` | 英文通行名。 |
| `names.zh` | `紫海胆` | 臺大馆藏与项目 TODO 口径。[S05] |
| `names.en` | `Purple Sea Urchin` | WoRMS/OBIS 与馆藏俗名。[S05][S41] |
| `names.aliases` | `['加州紫海胆', 'Purple Urchin']` | 中文别名有馆藏凭证；英文简称只作检索词。[S06] |
| `scientificName` | `Strongylocentrotus purpuratus` | WoRMS 接受名去掉命名人。[S01] |
| `taxonomy` | Animalia—Echinodermata—Echinoidea—Camarodonta—Strongylocentrotidae—*Strongylocentrotus* | WoRMS 当前完整链。[S02] |
| `conservation.code` | `NE` | 精确检索未找到 IUCN 评估页；不填年份或标准。[S33][S34] |
| `conservation.trend` | `unknown` | 没有全球趋势证据；局地暴发不能代替全球趋势。[S22][S24] |
| `distribution` | 美国、加拿大、墨西哥的北美太平洋沿岸 | Torch Bay 至 Isla Cedros，潮间带最常见。[S08][S09] |
| `measurements.length` | `typical: 5`, `max: 10.4`, `unit: 'cm'` | 壳径，不含棘；常见值与极值不组成典型范围。[S08] |
| `metrics` | `{}` | 不把壳径常见值—极值、最深采集或寿命模型估计塞入不匹配的规范化字段。 |
| `diet.types` | `['herbivore', 'detritivore']` | 宏藻刮食与海带碎屑实验。[S20][S21] |
| `featuredStats` | 常见壳径、最深采集、五牙、模型寿命边界 | 每项在 note 中保留测量或模型边界。[S08][S17][S31][S32] |
| `storySections` | 6 段 | 外形；管足/棘/叉棘；提灯与食性；海藻林；繁殖发育；证据与监测。 |
| `media` | 1 张封面＋5 张 gallery | 对应第 14 节六幅图。 |

`featuredStats` 可以展示“>50 年（模型估计）”，但 `metrics.lifespanYears` 仍须省略。展示卡容纳限定语，规范化区间不容纳“估计最大值而无可靠最小值”的语义。[S30][S31][S32]

## 13. 研究阶段 Species schema 草案（已归档）

> 本节保留集成前的字段推演，不再是可复制的实现规范。来源组合、`featuredStats`、图片路径与图注在交叉校验后有所收敛；当前真值以 [`src/data/species.ts`](../../src/data/species.ts) 中的 `purple-sea-urchin` 条目为准。

以下片段按当前 `src/types/species.ts` 编写。来源常量先列运行时需要的核心来源；第 16 节保留本研究用到的完整来源表。

~~~ts
const PURPLE_SEA_URCHIN_SOURCE_DATE = '2026-09-01' as const;
const PURPLE_SEA_URCHIN_CONTENT_DATE = '2026-09-01' as const;

const PURPLE_SEA_URCHIN_SOURCES = [
  {
    title:
      'WoRMS: Strongylocentrotus purpuratus (Stimpson, 1857), AphiaID 240747',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=240747',
    kind: 'taxonomy',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'WoRMS REST: complete classification for AphiaID 240747',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/240747',
    kind: 'taxonomy',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'National Taiwan University Museum: 紫海膽 collection record',
    url: 'https://collections.culture.tw/ntum_collectionsweb/collection.aspx?GID=MYMBMCM2',
    kind: 'taxonomy',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'National Museum of Natural Science: 加州紫海膽 collection record',
    url: 'https://www.nmns.edu.tw/collect/catalog/detail/?id=34432',
    kind: 'taxonomy',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'DFO 1999: review of purple sea urchin biology and fisheries',
    url: 'https://publications.gc.ca/collections/collection_2015/mpo-dfo/Fs70-1-1999-163-eng.pdf',
    kind: 'distribution',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Ebert 2010: demographic patterns along a latitudinal gradient',
    url: 'https://doi.org/10.3354/meps08547',
    kind: 'distribution',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Narvaez et al. 2024: tube-foot morphological and mechanical plasticity',
    url: 'https://doi.org/10.1093/iob/obae022',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Mao et al. 2016: tooth anatomy and biomineralization',
    url: 'https://doi.org/10.1016/j.aanat.2015.06.004',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Russell et al. 2018: bioerosion by pit-forming sea urchins',
    url: 'https://doi.org/10.1371/journal.pone.0191278',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Yorke et al. 2019: sea urchins mediate kelp-detritus availability',
    url: 'https://doi.org/10.1098/rspb.2019.0846',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Smith & Garcia 2021: morphology under contrasting resource availability',
    url: 'https://doi.org/10.7717/peerj.11352',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Rogers-Bennett & Catton 2019: heatwave and multiple-stressor kelp collapse',
    url: 'https://doi.org/10.1038/s41598-019-51114-y',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Smith & Tinker 2022: foraging behavior drives reef-patch transitions',
    url: 'https://doi.org/10.1111/ele.14064',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Gonor 1973: Oregon reproductive cycles',
    url: 'https://doi.org/10.1016/0022-0981(73)90037-3',
    kind: 'ecology',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Smith et al. 2008: larval stages of Strongylocentrotus purpuratus',
    url: 'https://doi.org/10.1002/jmor.10618',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Heyland & Hodin 2014: late-larval and juvenile-rudiment staging',
    url: 'https://doi.org/10.1186/1471-213X-14-22',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Ebert 1967: negative growth and longevity',
    url: 'https://doi.org/10.1126/science.157.3788.557',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Bodnar & Coffman 2016: tissue regeneration and lifespan context',
    url: 'https://doi.org/10.1111/acel.12487',
    kind: 'general',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List search: Strongylocentrotus purpuratus',
    url: 'https://nrl.iucnredlist.org/search',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Jurgens et al. 2015: rocky-shore mass mortality across 100 km',
    url: 'https://doi.org/10.1371/journal.pone.0126280',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'CDFW: kelp monitoring, restoration, and research',
    url: 'https://wildlife.ca.gov/Conservation/Marine/Kelp/Monitoring',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
  {
    title: 'Giraldo-Ospina et al. 2025: California kelp and urchin monitoring',
    url: 'https://doi.org/10.1002/eap.3092',
    kind: 'conservation',
    accessedAt: PURPLE_SEA_URCHIN_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];

const purpleSeaUrchin = {
  id: 'species-strongylocentrotus-purpuratus',
  slug: 'purple-sea-urchin',
  // Chinese names are institution-backed; scientificName disambiguates East Asian namesakes. [S05][S06][S07]
  names: {
    zh: '紫海胆',
    en: 'Purple Sea Urchin',
    aliases: ['加州紫海胆', 'Purple Urchin'],
  },
  scientificName: 'Strongylocentrotus purpuratus', // [S01]
  taxonomy: animalTaxonomy(
    taxon('Echinodermata', '棘皮动物门'),
    taxon('Echinoidea', '海胆纲'),
    taxon('Camarodonta', '拱齿目'),
    taxon('Strongylocentrotidae', '球海胆科'),
    taxon('Strongylocentrotus', '球海胆属'),
  ), // [S02]
  // No IUCN assessment page found on the access date; this is a project fallback, not an IUCN-published NE assessment. [S33][S34]
  conservation: {
    system: 'IUCN Red List',
    code: 'NE',
    label: { zh: '未评估', en: 'Not Evaluated' },
    trend: 'unknown',
    assessor: 'IUCN Red List',
  },
  // Coastal range and 160 m are occurrence bounds, not uniform occupancy. [S08][S09]
  distribution: {
    realms: ['marine'],
    continents: ['北美洲'],
    regions: [
      '阿拉斯加东南部与不列颠哥伦比亚太平洋岸',
      '美国华盛顿、俄勒冈和加利福尼亚岩岸',
      '墨西哥下加利福尼亚北段至 Isla Cedros',
      '北美东北太平洋潮间带与浅水岩礁',
    ],
    countries: ['美国', '加拿大', '墨西哥'],
    range:
      '沿北美太平洋岸由阿拉斯加 Torch Bay 向南，经不列颠哥伦比亚和美国西海岸至墨西哥下加利福尼亚 Isla Cedros；以岩石潮间带最常见，另有约 160 米深的采集记录。',
    center: { lat: 38, lng: -124 },
  },
  habitats: [
    {
      name: '浪涌岩石潮间带',
      realm: 'marine',
      description:
        '常见于暴露或半遮蔽海岸的下部潮间带，在岩面、裂隙和凹坑中利用管足与棘抵抗中到强浪涌；没有可外推到全范围的统一水动力阈值。',
      isPrimary: true,
    }, // [S08][S12]
    {
      name: '浅水岩礁与海藻林',
      realm: 'marine',
      description:
        '出现在巨藻或牛尾藻林的岩礁底部，摄取活体宏藻和漂落藻屑；消费者密度、行为、捕食者与海洋环境共同影响海藻林是否转为海胆荒地。',
    }, // [S20][S22][S24]
    {
      name: '海胆荒地与结壳藻岩面',
      realm: 'marine',
      description:
        '在局地宏藻资源贫乏、结壳藻占优的岩礁上可形成高密度聚集；荒地个体常见较低性腺状况和相对更长的提灯，但结果具有地点与时期边界。',
    }, // [S21]
  ],
  // Test diameter excludes spines; 5 cm is a common value and 10.4 cm a reported maximum. [S08]
  measurements: {
    length: {
      typical: 5,
      max: 10.4,
      unit: 'cm',
      note:
        '壳径（test diameter），不含棘；官方综述汇总常见约 50 mm、记录最大 104 mm。不同地点和资源条件会改变体型分布。',
    },
  },
  diet: {
    types: ['herbivore', 'detritivore'],
    foods: ['活体大型藻类', '漂落的海带与其他宏藻碎屑', '结壳藻和叶状藻表面资源'],
    description:
      '用亚里士多德提灯的五枚牙齿刮取宏藻和岩面食物，也摄取并破碎漂落海带碎屑；食物供应会改变提灯相对尺寸、性腺投入和觅食行为。',
  }, // [S17][S20][S21]
  activity: [
    '管足可逆黏附并主动脱附，配合棘在岩面移动和抵抗浪涌', // [S12]
    '用五牙提灯刮食宏藻、藻屑和岩面资源', // [S17][S20]
    '可在软岩凹坑中持续扩大容身空间，牙齿摄食与棘磨蚀共同参与', // [S18][S19]
    '觅食姿态会在隐蔽被动摄食与暴露主动放牧之间转变', // [S24]
    '雌雄成体向水中释放配子并体外受精', // [S08][S26]
  ],
  tags: ['北美太平洋岸', '岩石潮间带', '海藻林消费者', '海胆荒地', '长腕幼体'],
  summary: '浪涌岩岸上的紫色刮食者，能连接海藻碎屑通道，也会参与海藻林与海胆荒地的局地转换。', // [S20][S22][S24]
  description:
    '紫海胆是北美太平洋岸常见的规则海胆。近圆形钙质壳外覆亮紫色棘、可逆黏附的管足和微小叉棘，口面的亚里士多德提灯用五枚持续生长的牙齿刮取宏藻、藻屑与岩面食物。它在海藻林中处理漂落海带，也能在资源贫乏的海胆荒地维持较长时间；密度、觅食行为、捕食者和海洋热环境共同决定局地岩礁状态。', // [S08][S12][S17][S20][S21][S22][S24]
  storySections: [
    {
      key: 'form',
      label: '外形与尺度',
      title: '壳径不包括那圈紫色棘',
      body:
        '近圆形壳由钙质骨板组成，成体与棘通常亮紫，幼小个体偶见淡绿。常见壳径约 5 厘米，记录最大 10.4 厘米；棘通常不超过 2.5 厘米。比较尺寸时只用壳的最大直径，不能把棘尖跨度算进去。',
    }, // [S08][S11]
    {
      key: 'appendages',
      label: '管足、棘与叉棘',
      title: '三套附肢各有分工',
      body:
        '管足末端以可逆黏附固定和移动，棘支撑身体并在凹坑中磨蚀岩面，棘间的微小叉棘则是独立钳状结构。不同岩性种群的管足吸盘和黏附性能并不相同；球状叉棘含分泌腺，并会对捕食者化学线索张开。',
    }, // [S12][S14][S15][S19]
    {
      key: 'feeding',
      label: '提灯与食性',
      title: '五枚牙齿持续更新切削边缘',
      body:
        '亚里士多德提灯锚定五枚持续生长的牙齿。它们刮取活体宏藻和岩面食物，也把漂落海带切碎并摄入。软岩凹坑的扩大同时包含牙齿摄食岩粒和棘的磨蚀，所占份额随岩性改变。',
    }, // [S17][S18][S19][S20]
    {
      key: 'kelp-forest',
      label: '海藻林生态',
      title: '密度之外，行为也会改变岩礁',
      body:
        '北加州海藻林崩塌与海洋热浪、捕食者损失和紫海胆暴发同期发生；南蒙特雷湾的长期记录则显示，2014 年显眼的海胆暴发主要来自觅食行为和空间位置转变。海胆荒地不是单一物种在所有海岸重复的固定结局。',
    }, // [S22][S23][S24]
    {
      key: 'life-cycle',
      label: '繁殖与发育',
      title: '透明长腕幼体里形成五辐射幼胆',
      body:
        '雌雄成体把配子释放到水中并体外受精。胚胎发育成四腕、八腕等长腕幼体，幼体左侧逐步形成含壳板、棘和管足的成体原基，再经变态成为幼胆。实验培养的浮游期常约一至三个月，温度、食物和批次都会改变进度。',
    }, // [S26][S27][S28]
    {
      key: 'evidence',
      label: '寿命与监测',
      title: '长寿估计不能替代已知年龄',
      body:
        '标记研究发现壳径可以缩小，所以大个体未必更老。生长模型把最大寿命估到约 45—50 年或更高，却没有建立直接已知年龄上限。监测因此应重复测量壳径频率、密度、体况、海藻盖度和环境，而不是从一张照片或一次尺寸调查推断年龄与趋势。',
    }, // [S30][S31][S32][S38][S40]
  ],
  keyFacts: [
    'WoRMS 接受名为 Strongylocentrotus purpuratus (Stimpson, 1857)，当前目为 Camarodonta。', // [S01][S02]
    '北美太平洋岸由阿拉斯加 Torch Bay 延伸至墨西哥 Isla Cedros，以岩石潮间带最常见。', // [S08][S09]
    '常见壳径约 5 厘米、记录最大 10.4 厘米；壳径不包括棘。', // [S08]
    '管足黏附性能随来源种群、岩性和实验条件改变。', // [S12]
    '亚里士多德提灯含五枚持续生长并保持切削边缘的牙齿。', // [S17]
    '它既刮食宏藻，也摄取和破碎海带碎屑。', // [S20]
    '长腕幼体在左侧成体原基内形成未来幼胆的五辐射结构。', // [S27][S28]
    '最大寿命超过 50 年属于模型估计，不是直接已知年龄纪录。', // [S30][S31][S32]
  ],
  threats: [
    '全球威胁和种群趋势尚无 IUCN 评估；局地暴发或死亡均不能代表全范围。', // [S33][S34][S35]
    '北中加州曾发生跨约 100 千米岩岸的局地大规模死亡，病因和全范围影响未确定。', // [S35]
    '胚胎和长腕幼体会对实验高温及低 pH 处理产生生理和发育响应，野外阈值仍不统一。', // [S29][S36][S37]
    '海胆荒地的长期宏藻匮乏会降低性腺状况并改变提灯相对尺寸，但不等于必然死亡。', // [S21]
    '局地采捕或恢复性移除若缺少前后对照和复访，可能无法区分干预效果与自然波动。', // [S25][S38]
  ],
  conservationActions: [
    '在固定站点和深度层重复 SCUBA 带状样带，记录密度、壳径频率、暴露状态和病损。', // [S39][S40]
    '把海底海胆、海藻和捕食者样带与航空或卫星海藻冠层时间序列配对。', // [S22][S23][S38]
    '同步记录温度、pH、溶氧、浪暴和上升流，保留传感器校准与采样努力。', // [S29][S36][S37]
    '用招募收集器或幼体指标区分成体移动、存活变化与新个体补充。', // [S24]
    '对海胆移除或海藻恢复设置处理前、处理后与未处理对照，并长期复访。', // [S25][S38]
    '发布站点、样带面积、深度、年份和尺寸原始数据，避免仅报告无努力量的密度。', // [S21][S39][S40]
  ],
  // No normalized adult-size interval or known-age lifespan interval is supported. [S08][S30][S31][S32]
  metrics: {},
  featuredStats: [
    {
      key: 'common-test-diameter',
      label: '常见壳径',
      value: '5',
      unit: 'cm',
      note: '官方综述汇总的常见值；不含棘，也不是全范围均值。',
    }, // [S08]
    {
      key: 'deepest-collection',
      label: '最深采集记录',
      value: '160',
      unit: 'm',
      note: '深水记录边界；本种仍以潮间带最常见。',
    }, // [S08]
    {
      key: 'lantern-teeth',
      label: '提灯牙齿',
      value: '5',
      unit: '枚',
      note: '辐射排列、持续生长并维持切削边缘。',
    }, // [S17]
    {
      key: 'estimated-maximum-lifespan',
      label: '最大寿命估计',
      value: '>50',
      unit: '年',
      note: '生长模型与文献估计；不是直接已知年龄上限。',
    }, // [S30][S31][S32]
  ],
  media: {
    image:
      './images/species/purple-sea-urchin/01-wave-swept-kelp-reef-cover.webp',
    alt: '东北太平洋浅水巨藻林岩礁上，一只亮紫色紫海胆以管足和短棘贴附在岩面凹坑边缘',
    focalPoint: { x: 0.67, y: 0.58 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image:
          './images/species/purple-sea-urchin/02-tube-feet-spines-pedicellariae.webp',
        alt: '紫海胆表面近距离科学重建，显示紫色棘之间成列伸出的半透明管足和微小钳状叉棘',
        title: '棘间还有管足与叉棘',
        caption:
          '微距重建区分三类附肢；静态图不能测量黏附力、叉棘分泌物、棘长或不同附肢的自然密度。',
        focalPoint: { x: 0.53, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/purple-sea-urchin/03-lantern-grazing-and-rock-pit.webp',
        alt: '紫海胆口面贴近砂岩凹坑边缘的非血腥剖视重建，可见完整亚里士多德提灯的五枚牙齿刮取薄藻膜',
        title: '五枚牙齿在岩面工作',
        caption:
          '教学剖视把提灯、藻膜和软岩接触放在同一画面；不能由此量出摄食率、凹坑年龄或牙齿与棘的侵蚀份额。',
        focalPoint: { x: 0.55, y: 0.57 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/purple-sea-urchin/04-broadcast-spawning-surge-channel.webp',
        alt: '浪涌岩礁上相邻的数只紫海胆向水中释放淡色和橙紫色配子云，棘与管足仍贴附岩面',
        title: '把配子交给流动海水',
        caption:
          '合理的群体排放重建；外观不能可靠判定雌雄，单帧也不能证明受精、月份、同步范围或成功率。',
        focalPoint: { x: 0.58, y: 0.47 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/purple-sea-urchin/05-pluteus-larva-with-juvenile-rudiment.webp',
        alt: '透明紫海胆八腕长腕幼体的显微科学重建，细长骨杆支撑腕部，左侧成体原基内可见幼棘和管足原基',
        title: '长腕幼体里正在形成幼胆',
        caption:
          '显微结构重建强调八腕、骨杆和左侧成体原基；颜色与相对比例不用于判龄，单帧不能给出浮游时长或变态成功率。',
        focalPoint: { x: 0.52, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image:
          './images/species/purple-sea-urchin/06-kelp-barren-transect-monitoring.webp',
        alt: '一条连续加利福尼亚岩礁由左侧巨藻林过渡到右侧结壳藻海胆荒地，潜水研究者沿样带记录紫海胆和海藻',
        title: '用同一尺度复测海藻林与荒地',
        caption:
          '连续岩礁监测情景展示样带、壳径与盖度记录；不是同一地点的真实前后对照，也不能由一帧判断因果或全球趋势。',
        focalPoint: { x: 0.59, y: 0.53 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: PURPLE_SEA_URCHIN_SOURCES,
  featured: true,
  publishedAt: PURPLE_SEA_URCHIN_CONTENT_DATE,
  updatedAt: PURPLE_SEA_URCHIN_CONTENT_DATE,
} satisfies Species;
~~~

这份对象有意不调用仓库的通用 `conservation()` 辅助函数，以免给 `NE` 填入虚构年份。若集成时该辅助函数已支持无年份 NE，可改用辅助函数，但输出对象必须保持 `assessedYear` 和 `criteria` 缺省。

## 14. 研究阶段六图方案（已由最终资产方案替代）

> 本节记录早期场景探索，不代表已接受资产。最终六图采用封面成体、外部附肢、口面五牙、海带林—荒地边界、八腕幼体和样方监测。最终 basename、可接受观察、提示词、处理命令与 SHA-256 见 [`src/assets/source/species/purple-sea-urchin/README.md`](../../src/assets/source/species/purple-sea-urchin/README.md)。

六图统一为横向 3:2、1536 × 1024、不透明 sRGB。画面不含文字、标签、箭头、图例、数值、标尺、品牌、水印、边框、分屏或拼贴。图 02、03、05 明确属于科学重建，不伪装成野外实拍；图 04 和图 06 属于合理情景重建，不对应一个声称真实的地点与日期。

### 图 01：浪涌海藻林岩礁封面

**文件名。** `01-wave-swept-kelp-reef-cover.webp`

**最终提示词。**

> 1536x1024 horizontal 3:2, opaque sRGB, scientifically grounded underwater natural-history photography of one adult Strongylocentrotus purpuratus on a shallow rocky reef in a northeast Pacific giant-kelp forest. Place the main sea urchin on the right two-thirds and leave quieter blue-green water and softly receding kelp stipes on the left for editorial copy space. Show a low rounded to subtly pentagonal test covered in dense short movable spines, vivid but natural deep violet and purple rather than neon, approximately palm-sized relative to the nearby kelp holdfast. The animal sits partly within a shallow irregular rock depression on dark gray reef, with a few translucent tube feet visibly gripping the rock between spines. Include one small torn brown kelp fragment near the oral side, natural surge-bent kelp blades, suspended particles and filtered coastal light. Realistic California-current kelp-forest scale, restrained color, no extreme density. No red sea urchin, long black spines, tropical coral, sandy seafloor, human hand, aquarium glass, face, eyes, shell like a snail, starfish arms, purple plastic texture, glowing colors, text, labels, arrows, scale bar, logo, watermark, border, split screen, or collage.

**必须可见。** 一个亮紫但不霓虹的规则海胆、较短密棘、岩面浅凹坑、少量管足、海带和岩礁；主体不能与红海胆或长棘海胆混淆。[S08][S11]

**事实限制。** 场景只能证明可视结构和合理生境，不能据此判定地点、壳径、年龄、性别、密度、取食率或海藻林状态。海带碎片表示可利用食物，不表示这一帧已观察到摄食。[S08][S20]

### 图 02：管足、棘与叉棘微距

**文件名。** `02-tube-feet-spines-pedicellariae.webp`

**最终提示词。**

> 1536x1024 horizontal 3:2, opaque sRGB, museum-quality macro scientific reconstruction of the living surface of Strongylocentrotus purpuratus underwater. Fill the frame with a curved section of a purple sea urchin test while preserving a clear sense of the whole surface. Show three distinct appendage classes at believable relative scale: numerous tapered articulated purple calcium-carbonate spines emerging from tubercles; rows of soft translucent lavender-gray tube feet extending farther between spines, several ending in small circular adhesive discs contacting a rough rock edge; and a limited number of much smaller stalked jaw-like pedicellariae among the spine bases, each with a tiny closed or slightly open multi-valved head. Use gentle side lighting, natural wet texture and shallow depth of field while keeping one cluster sharply resolved. The pedicellariae must remain far smaller than the main spines and must not resemble extra juvenile spines. No magnifying inset, labels, arrows, letters, fluorescent false color, giant claws, insect legs, octopus suckers, needles injecting fluid, visible venom droplets, human skin, wound, blood, text, logo, watermark, border, split panels, or collage.

**必须可见。** 锥形紫棘、带末端圆盘的柔软管足和明显更小的钳状叉棘，三者不能合并成同一种触手。[S12][S14][S16]

**事实限制。** 附肢密度和颜色为教学性重建；单帧不能测量黏附力、棘修复率、叉棘分泌物或捕食者反应，也不能声称对人有毒。[S12][S13][S14][S15]

### 图 03：五牙提灯刮食与岩石凹坑

**文件名。** `03-lantern-grazing-and-rock-pit.webp`

**最终提示词。**

> 1536x1024 horizontal 3:2, opaque sRGB, non-gory scientific cutaway reconstruction of the oral underside of one Strongylocentrotus purpuratus braced over the edge of a shallow sandstone pit. Use a low oblique viewpoint that keeps the purple spines and several tube feet in contact with the rock while revealing a clean educational window through the oral surface. Inside the window show one coherent Aristotle's lantern apparatus, pentaradial and mechanically integrated, with exactly five slender curved mineralized teeth converging toward the central downward-facing mouth; only the cutting tips contact a thin brown-green algal film on the sandstone. Add a few minute scraped mineral grains and a small detached kelp fragment nearby, without dramatizing excavation. The five teeth are parts of one jaw apparatus, continuously aligned, not five loose vertebrate teeth. Natural underwater lighting, restrained anatomical colors, no blood or exposed soft-tissue gore. No upper and lower jaw, incisors, fangs, tongue, beak, drill bit, sparks, chisel, tunnel, perfectly circular hole, piles of rubble, oversized teeth, labels, callout lines, arrows, chemical formula, text, scale bar, logo, watermark, border, panels, or collage.

**必须可见。** 完整提灯中的五枚牙、向下口面、薄藻膜、砂岩浅凹坑、贴岩管足与棘。[S17][S18][S19]

**事实限制。** 剖视只解释结构关系。它不能证明某凹坑由该个体独立形成、侵蚀速率、凹坑年龄、摄入岩粒量，或牙齿与棘的固定贡献比例。[S18][S19]

### 图 04：浪涌水道中的群体排放

**文件名。** `04-broadcast-spawning-surge-channel.webp`

**最终提示词。**

> 1536x1024 horizontal 3:2, opaque sRGB, scientifically restrained underwater spawning scene of several Strongylocentrotus purpuratus on a wave-swept northeast Pacific rocky reef. Show six to eight natural deep-purple, short-spined urchins firmly attached to uneven dark rock with tube feet and spines, separated rather than stacked. Two adjacent adults release subtle gamete clouds upward from the aboral surface into a visible but gentle surge: one diffuse pale cream plume and one cloud of tiny muted amber particles, both quickly dispersing and remaining translucent. Keep the adults externally indistinguishable in shape and color. Add sparse low algal turf and a few kelp blades moving in the same current direction. Natural coastal light, realistic particle scale, no dramatic smoke. No eggs visible as fish eggs, embryos, babies, mating embrace, genital anatomy, sex symbols, synchronized release by every animal, opaque clouds hiding the reef, fluorescent colors, black smoker, bubbles from mouths, text, month label, arrows, charts, logo, watermark, border, split screen, or collage.

**必须可见。** 多只同种紫海胆、反口面向上扩散的两类细微配子云、同向浪涌和牢固贴岩姿态。[S08][S26]

**事实限制。** 配子颜色是克制的可视化选择，不用于现场辨性。单帧不能证明已经受精、产卵月份、同步范围、配子浓度或幼体产量；俄勒冈 12 月下旬至 3 月窗口不能变成所有地点的季节标签。[S26]

### 图 05：带成体原基的八腕长腕幼体

**文件名。** `05-pluteus-larva-with-juvenile-rudiment.webp`

**最终提示词。**

> 1536x1024 horizontal 3:2, opaque sRGB, high-detail scientific microscopy reconstruction of a single late Strongylocentrotus purpuratus pluteus larva suspended in dark teal seawater. Center one transparent bilaterally organized eight-arm pluteus, with long slender arms supported by delicate continuous calcitic skeletal rods, a visible curved digestive tract and fine ciliated band implied along arm edges. On the larva's anatomical left side, show one compact developing juvenile rudiment integrated inside the body wall, containing a subtle pentaradial arrangement of tiny primary spine primordia, test plates and early tube-foot structures. Keep the rudiment smaller than the larval body and preserve the contrast between bilateral larva and five-rayed juvenile structures. Soft transmitted-light look, restrained translucent beige and violet-gray tissues, scientifically plausible, not fluorescent microscopy. No adult purple sphere inside the larva, fully formed long spines, more or fewer than eight main arms, vertebrate bones, face, eyes, mouth with teeth, labels, arrows, stage numbers, timeline, scale bar, text, microscope UI, logo, watermark, border, inset, split screen, or collage.

**必须可见。** 双侧对称八腕外形、连续骨杆、幼体左侧的小型五辐射成体原基，以及原基内的幼棘、壳板和管足前体。[S27][S28]

**事实限制。** 这是显微结构重建，不是自然色照片。相对比例、颜色和腕的姿态不能用于判龄；画面不证明 1—3 个月浮游期、野外温度、食物条件、定居线索或变态成功率。[S27][S28]

### 图 06：海藻林—荒地连续岩礁样带

**文件名。** `06-kelp-barren-transect-monitoring.webp`

**最终提示词。**

> 1536x1024 horizontal 3:2, opaque sRGB, realistic scientific SCUBA monitoring scene on one continuous California rocky reef, not a before-and-after composite. The left side of the same natural reef supports a moderate giant-kelp stand with tall brown stipes, understory foliose algae and scattered purple sea urchins partly sheltered in crevices. Across the center, the habitat grades into a right-side patch dominated by pink-gray encrusting coralline algae, low macroalgal cover and many exposed Strongylocentrotus purpuratus at varied sizes; keep densities countable and non-carpet-like. One unbranded research diver hovers above without touching animals, laying a straight transect tape along the continuous reef and holding a small caliper near, but not yet on, one urchin. A compact camera records the belt. Natural blue-green light, realistic kelp motion and perspective. No split-screen seam, time-lapse, labels, numbers readable on tape, colored data overlays, dead kelp pile, apocalyptic barren, identical cloned urchins, culling, hammer, collection bag, feeding predator, text, arrows, chart, logo, watermark, border, or collage.

**必须可见。** 同一连续岩礁上的海藻林—结壳藻荒地梯度、不同尺寸和隐蔽状态的紫海胆、样带、卡尺和相机。[S21][S24][S38][S39][S40]

**事实限制。** 左右差异是同时存在的空间斑块，不是处理前后、历史重现或全球典型密度。单帧不能区分补充、移动和死亡，也不能归因海藻变化；有效结论需要固定面积、深度、日期与复测。[S22][S24][S38][S39][S40]

## 15. 图像与文案的共同禁区

- 不把 *S. purpuratus* 与 *Heliocidaris crassispina*、*Mesocentrotus nudus*、红海胆或长棘海胆混为一图；学名和短密紫棘同时控制识别。[S01][S07][S08]
- 不把旧分类 Echinoida 写进当前 `order`，也不把 Camarodonta 当俗名或亚目。[S02][S08]
- 不把壳径、含棘总宽和高度混用；5 厘米是常见壳径，10.4 厘米是记录最大壳径，棘通常不超过 2.5 厘米。[S08]
- 不把管足画成章鱼触手，不把叉棘画成第二圈棘，不用一张图给黏附力或“毒性”定量。[S12][S14][S15][S16]
- 不把亚里士多德提灯画成上下颌、鸟喙、五颗松散牙或金属钻头；五牙属于一个完整咀嚼器。[S17]
- 不写“只吃海带”。宏藻刮食、漂落海带碎屑和岩面资源均有证据，食物组成随生境改变。[S20][S21]
- 不把凹坑画成瞬间钻出的圆洞，不用软岩实验速率推算花岗岩凹坑年龄，也不给牙齿与棘固定侵蚀比例。[S18][S19]
- 不写“紫海胆单独导致北加州海藻林崩塌”。海洋热浪、海星捕食者损失、海胆数量和行为均参与，贡献随区域改变。[S22][S23][S24][S40]
- 不用“僵尸海胆”代替荒地体况。资源受限个体性腺较小、提灯相对更长，但仍有代谢、移动与环境响应。[S21]
- 不把群体排放画成体内受精、交配或育幼；外观不能可靠辨认雌雄，俄勒冈繁殖季不外推至全范围。[S08][S26]
- 不把 pluteus 画成带棘的小圆海胆。长腕幼体先保持双侧体制，幼胆五辐射结构在左侧原基内形成。[S27][S28]
- 不把 1—3 个月当野外固定幼体漂流期，不把实验温度或 pH 处理写成物种统一阈值。[S28][S29][S36][S37]
- 不把 45—50 年或超过 50 年写成已知个体纪录、平均寿命或硬上限；`metrics.lifespanYears` 留空。[S30][S31][S32]
- 不把 IUCN 搜索无结果写成“无危”，不添加评估年份、标准或全球稳定趋势。[S33][S34]
- 不从局地暴发、局地大规模死亡或一次恢复项目推断全球数量方向。[S22][S25][S35][S38]

## 16. 编号来源

以下来源均于 **2026-09-01** 检索。DOI 链接指向论文原始出版记录；机构和数据库链接指向相应官方记录或原始技术报告。

- **[S01]** WoRMS（动态数据库；2026-09-01 检索）. *Strongylocentrotus purpuratus* (Stimpson, 1857), AphiaID 240747, accepted record. <https://www.marinespecies.org/aphia.php?p=taxdetails&id=240747>；**支持范围：**接受名、命名人、AphiaID 和接受状态。
- **[S02]** WoRMS REST（动态数据库；2026-09-01 检索）. Complete Aphia classification for AphiaID 240747. <https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/240747>；**支持范围：**Animalia—Echinodermata—Echinoidea—Camarodonta—Strongylocentrotidae—*Strongylocentrotus* 的现行分类链，以及 Camarodonta 对旧 Echinoida 的项目取代。
- **[S03]** Stimpson, W. 1857. *On the Crustacea and Echinodermata of the Pacific shores of North America*. Original description of *Echinus purpuratus*, p. 526. <https://doi.org/10.5962/bhl.title.59693>；**支持范围：**原组合、命名年份和原始描述出处。
- **[S04]** Downey, M. E. 1968. *Catalog of Recent Echinoid Type Specimens in the U.S. National Museum, Smithsonian Institution, and the Museum of Comparative Zoology, Harvard University*. <https://doi.org/10.5479/si.03629236.264>；**支持范围：**USNM 2495 模式标本、San Francisco 模式产地和 *Echinus purpuratus* 原组合凭证。
- **[S05]** 國立臺灣大學博物館群（馆藏记录；2026-09-01 检索）. 紫海膽馆藏 MZ20220030006：*Strongylocentrotus purpuratus*. <https://collections.culture.tw/ntum_collectionsweb/collection.aspx?GID=MYMBMCM2>；**支持范围：**中文主名“紫海胆”、英文俗名和学名绑定；页面所列旧目名不用于现行分类。
- **[S06]** 國立自然科學博物館（馆藏记录；2026-09-01 检索）. 加州紫海膽馆藏 007635-00016. <https://www.nmns.edu.tw/collect/catalog/detail/?id=34432>；**支持范围：**中文别名“加州紫海胆”、中文科名“球海胆科”和 Point Loma 馆藏地点。
- **[S07]** 中华人民共和国农业农村部. 2021. *水产养殖种质资源基本情况普查*. <https://www.moa.gov.cn/xw/bmdt/202107/P020210729522344049650.pdf>；**支持范围：***Heliocidaris crassispina* 与 *Mesocentrotus nudus* 也使用“紫海胆”俗名，证明中文名必须用学名消歧。
- **[S08]** Workman, G. D. 1999. *A review of the biology and fisheries for the purple sea urchin (Strongylocentrotus purpuratus, Stimpson, 1857) and discussion of the assessment needs for a proposed fishery*. DFO Canadian Stock Assessment Secretariat Research Document 99/163. <https://publications.gc.ca/collections/collection_2015/mpo-dfo/Fs70-1-1999-163-eng.pdf>；**支持范围：**Torch Bay—Isla Cedros 范围、潮间带常见与 160 米采集、岩岸和附加生境、壳径常见 50 毫米/最大 104 毫米、棘长与颜色、体外受精及历史采捕；其 Echinoida 只作旧分类记录。
- **[S09]** Ebert, T. A. 2010. Demographic patterns of the purple sea urchin *Strongylocentrotus purpuratus* along a latitudinal gradient, 1985–1987. *Marine Ecology Progress Series* 406:105–120. <https://doi.org/10.3354/meps08547>；**支持范围：**29.93—50.47°N 样带、完整范围端点讨论、地点间生长与存活差异及无简单纬度规律；不代表全范围普查。
- **[S10]** Drumm, D. T. et al. 2016. *An annotated checklist of the marine macroinvertebrates of Alaska*. NOAA Professional Paper NMFS 19. <https://doi.org/10.7755/PP.19>；**支持范围：**阿拉斯加机构核对记录、Gulf of Alaska 边界和约 161 米历史深度汇总；不用于密度或常见深度。
- **[S11]** Multi-Agency Rocky Intertidal Network / University of California, Santa Cruz（持续更新；2026-09-01 检索）. *Strongylocentrotus purpuratus* target-species record and identification notes. <https://marine.ucsc.edu/target/strongylocentrotus/>；**支持范围：**规则海胆壳、成幼体颜色、棘/管足/叉棘的现场识别和机构尺寸概览；不提供实验机制。
- **[S12]** Narvaez, C. A., Stark, A. Y. & Russell, M. P. 2024. Morphological and mechanical tube feet plasticity among populations of sea urchin (*Strongylocentrotus purpuratus*). *Integrative Organismal Biology* 6:obae022. <https://doi.org/10.1093/iob/obae022>；**支持范围：**管足可逆黏附、不同岩性来源种群的吸盘面积与黏附性能差异，以及实验室饲养造成的形态变化。
- **[S13]** Ebert, T. A. 1967. Growth and repair of spines in the sea urchin *Strongylocentrotus purpuratus*. *Biological Bulletin* 133:141–149. <https://doi.org/10.2307/1539799>；**支持范围：**本种棘的生长、断裂后修复和使用棘结构判读生长的限制。
- **[S14]** O'Connell, M. G., Alender, C. B. & Wood, E. M. 1974. A fine structure study of venom gland cells in globiferous pedicellariae from *Strongylocentrotus purpuratus*. *Journal of Morphology* 142:411–431. <https://doi.org/10.1002/jmor.1051420405>；**支持范围：**球状叉棘分泌腺细胞的电镜和组织化学结构；不支持人类临床毒性结论。
- **[S15]** Phillips, D. W. 1978. Chemical mediation of invertebrate defensive behaviors and the ability to distinguish between foraging and inactive predators. *Marine Biology*. <https://doi.org/10.1007/BF00391136>；**支持范围：**上游捕食者化学线索引发紫海胆球状叉棘伸展和张开；仅限实验行为反应。
- **[S16]** Burke, R. D. et al. 2006. A genomic view of the sea urchin nervous system. *Developmental Biology* 300:434–460. <https://doi.org/10.1016/j.ydbio.2006.08.007>；**支持范围：**本种棘、管足和叉棘的感觉—反应背景，以及四类主要叉棘和 claviform 型的结构清单。
- **[S17]** Mao, Y., Satchell, P. G., Luan, X. & Diekwisch, T. G. H. 2016. SM50 repeat-polypeptides self-assemble into discrete matrix subunits and promote appositional calcium carbonate crystal growth during sea urchin tooth biomineralization. *Annals of Anatomy* 203:38–46. <https://doi.org/10.1016/j.aanat.2015.06.004>；**支持范围：**完整亚里士多德提灯、五枚辐射排列且持续生长的牙、牙尖—轴—生长端结构及生物矿化。
- **[S18]** Russell, M. P., Gibbs, V. K. & Duwan, E. 2018. Bioerosion by pit-forming, temperate-reef sea urchins: history, rates and broader implications. *PLOS ONE* 13:e0191278. <https://doi.org/10.1371/journal.pone.0191278>；**支持范围：**不同岩性凹坑侵蚀速率、软岩和花岗岩推算时间差，以及摄入岩石颗粒的主要机制；速率只适用于研究条件。
- **[S19]** Narvaez, C. A. & Russell, M. P. 2024. Effects of rock type and food availability on bioerosion by the purple sea urchin, *Strongylocentrotus purpuratus*. *Integrative and Comparative Biology*. <https://doi.org/10.1093/icb/icae060>；**支持范围：**11 周岩性 × 食物实验、牙齿摄食与棘磨蚀共同作用，以及砂岩 31.09%/泥岩 1.30% 的实验特定棘磨蚀份额。
- **[S20]** Yorke, C. E., Page, H. M. & Miller, R. J. 2019. Sea urchins mediate the availability of kelp detritus to benthic consumers. *Proceedings of the Royal Society B* 286:20190846. <https://doi.org/10.1098/rspb.2019.0846>；**支持范围：**标记巨藻碎屑的摄取和破碎、紫海胆作为植食兼碎屑食者及对其他底栖消费者藻屑可用性的影响。
- **[S21]** Smith, J. G. & Garcia, S. C. 2021. Variation in purple sea urchin (*Strongylocentrotus purpuratus*) morphological traits in relation to resource availability. *PeerJ* 9:e11352. <https://doi.org/10.7717/peerj.11352>；**支持范围：**蒙特雷 83 个 5—20 米样点、荒地相对更长提灯与更低性腺状况、结壳藻占优和样带—解剖监测方法；结果只限当地 2017 年镶嵌景观。
- **[S22]** Rogers-Bennett, L. & Catton, C. A. 2019. Marine heat wave and multiple stressors tip bull kelp forest to sea urchin barrens. *Scientific Reports* 9:15050. <https://doi.org/10.1038/s41598-019-51114-y>；**支持范围：**北加州 1999—2018 时间序列、海洋热浪、海星捕食者损失、紫海胆增长和牛尾藻林崩塌的同期关系，以及局地 30 倍/60 倍密度边界；不支持单因果。
- **[S23]** McPherson, M. L. et al. 2021. Large-scale shift in the structure of a kelp forest ecosystem co-occurs with an epizootic and marine heatwave. *Communications Biology* 4:298. <https://doi.org/10.1038/s42003-021-01827-6>；**支持范围：**北加州 34 年遥感与潜水记录、2014—2015 年超过 95% 的区域冠层损失及多年持续性；不代表全分布区。
- **[S24]** Smith, J. G. & Tinker, M. T. 2022. Alternations in the foraging behaviour of a primary consumer drive patch transition dynamics in a temperate rocky reef ecosystem. *Ecology Letters* 25:1827–1838. <https://doi.org/10.1111/ele.14064>；**支持范围：**南蒙特雷湾 22 年序列、2014 年觅食行为转变而非同步人口统计跃升，以及移动与斑块恢复关系。
- **[S25]** Williams, J. P. et al. 2021. Sea urchin mass mortality rapidly restores kelp forest communities. *Marine Ecology Progress Series* 664:117–131. <https://doi.org/10.3354/meps13680>；**支持范围：**南加州 2011—2020 年监测中海胆死亡后原荒地向海藻主导状态转换；不证明任何地点移除都必然成功。
- **[S26]** Gonor, J. J. 1973. Reproductive cycles in Oregon populations of the echinoid, *Strongylocentrotus purpuratus*. I. Annual gonad growth and ovarian gametogenic cycles. *Journal of Experimental Marine Biology and Ecology* 12:45–64. <https://doi.org/10.1016/0022-0981(73)90037-3>；**支持范围：**俄勒冈三个地点四个年度的性腺周期，以及 12 月下旬至 3 月主要排放窗口；不外推为全范围固定繁殖季。
- **[S27]** Smith, M. M., Cruz Smith, L., Cameron, R. A. & Urry, L. A. 2008. The larval stages of the sea urchin, *Strongylocentrotus purpuratus*. *Journal of Morphology* 269:713–733. <https://doi.org/10.1002/jmor.10618>；**支持范围：**四腕至管足突出七阶段、四腕/八腕形态和幼体左侧成体原基的建立。
- **[S28]** Heyland, A. & Hodin, J. 2014. A detailed staging scheme for late larval development in *Strongylocentrotus purpuratus* focused on readily-visible juvenile structures within the rudiment. *BMC Developmental Biology* 14:22. <https://doi.org/10.1186/1471-213X-14-22>；**支持范围：**原基软组织与骨骼分期、幼棘/壳板/管足前体、培养中约 1—3 个月浮游期及温度、食物、批次造成的异时性。
- **[S29]** Hammond, L. M. & Hofmann, G. E. 2010. Thermal tolerance of *Strongylocentrotus purpuratus* early life history stages: mortality, stress-induced gene expression and biogeographic patterns. *Marine Biology* 157:2677–2687. <https://doi.org/10.1007/s00227-010-1528-z>；**支持范围：**原肠胚和四腕幼体的实验热反应、来源种群差异及约 25 °C 最大应激反应背景；不提供野外统一致死阈值。
- **[S30]** Ebert, T. A. 1967. Negative growth and longevity in the purple sea urchin *Strongylocentrotus purpuratus*. *Science* 157:557–558. <https://doi.org/10.1126/science.157.3788.557>；**支持范围：**俄勒冈标记个体一年后可缩小、壳径不能可靠判龄和“相对长寿”的直接结论；不支持 50 年已知年龄。
- **[S31]** Grupe, B. M. 2006. *Purple sea urchins (Strongylocentrotus purpuratus) in and out of pits: the effects of microhabitat on population structure, morphology, growth, and mortality*. University of Oregon M.S. thesis. <https://scholarsbank.uoregon.edu/items/cc866cac-9e55-42ff-83ec-bde5f7c112a0/full>；**支持范围：**四环素标记和地点生长曲线产生约 45—50 年最大年龄估计，以及凹坑内外生长、形态和死亡差异；属于模型估计。
- **[S32]** Bodnar, A. G. & Coffman, J. A. 2016. Maintenance of somatic tissue regeneration with age in short- and long-lived species of sea urchins. *Aging Cell* 15:778–787. <https://doi.org/10.1111/acel.12487>；**支持范围：**不同寿命海胆的组织修复比较，以及紫海胆“最大寿命估计超过 50 年”的文献背景；不建立出生已知上限。
- **[S33]** IUCN Red List（动态数据库；2026-09-01 检索）. Search page used for an exact scientific-name search of *Strongylocentrotus purpuratus*. <https://nrl.iucnredlist.org/search>；**支持范围：**截至检索日没有找到本种全球评估页这一负面检索结果；不支持“无危”。
- **[S34]** IUCN Red List（2026-09-01 检索）. Frequently asked questions: assessment coverage and species search. <https://nrl.iucnredlist.org/about/faqs>；**支持范围：**Red List 评估覆盖和学名检索解释，用于界定“无结果”与正式 NE 评估的差别。
- **[S35]** Jurgens, L. J. et al. 2015. Patterns of mass mortality among rocky shore invertebrates across 100 km of northeastern Pacific coastline. *PLOS ONE* 10:e0126280. <https://doi.org/10.1371/journal.pone.0126280>；**支持范围：**2011 年北中加州约 100 千米岩岸大规模死亡及受影响带紫海胆局地功能性消失；病因和全球影响未定。
- **[S36]** Yu, P. C., Matson, P. G., Martz, T. R. & Hofmann, G. E. 2011. The ocean acidification seascape and its relationship to the performance of calcifying marine invertebrates: laboratory experiments on the development of urchin larvae framed by environmentally relevant pCO₂/pH. *Journal of Experimental Marine Biology and Ecology* 400:288–295. <https://doi.org/10.1016/j.jembe.2011.02.016>；**支持范围：**以上升流环境 pH 为背景的四腕幼体酸化实验及发育、形态反应；不支持全种未来趋势。
- **[S37]** Place, S. P. & Smith, B. W. 2012. Effects of seawater acidification on cell cycle control mechanisms in *Strongylocentrotus purpuratus* embryos. *PLOS ONE* 7:e34068. <https://doi.org/10.1371/journal.pone.0034068>；**支持范围：**pH 约 7.0、7.5、8.0 实验中的卵裂与细胞周期指标，以及低 pH 作用机制的不确定性；处理值不是野外阈值。
- **[S38]** California Department of Fish and Wildlife（持续更新；2026-09-01 检索）. Monitoring, restoration, and research of kelp and other marine algae. <https://wildlife.ca.gov/Conservation/Marine/Kelp/Monitoring>；**支持范围：**航空、Landsat、无人机和 SCUBA 监测体系，海胆移除作为局地恢复工具，以及紫海胆现场机构照片；不承载当前采捕限额。
- **[S39]** California Ocean Protection Council. 2022. *Monitoring and Evaluation of Kelp Forest Ecosystems*. <https://www.opc.ca.gov/webmaster/_media_library/2022/05/R_MPA-3.pdf>；**支持范围：**PISCO/RCCA 的 30 × 2 米样带、多深度重复、海胆尺寸、海藻/无脊椎盖度和鱼类群落记录方法。
- **[S40]** Giraldo-Ospina, A., Bell, T., Carr, M. H. & Caselle, J. E. 2025. Drivers of spatiotemporal variability in a marine foundation species. *Ecological Applications* 35:e3092. <https://doi.org/10.1002/eap.3092>；**支持范围：**1999—2021 年 105 个站点、约 5/12/20 米深度和 30 × 2 米 SCUBA 样带，以及海藻、海胆、温度、营养盐与波能的组合分析；模型关系不等同实验因果。
- **[S41]** Ocean Biodiversity Information System（动态数据库；2026-09-01 检索）. *Strongylocentrotus purpuratus*, taxon 240747. <https://obis.org/taxon/240747>；**支持范围：**WoRMS 分类交叉核对、英文俗名和出现记录发现入口；未经凭证清洗的点位不用于绝对范围、深度或趋势。

## 17. 集成与验证清单

- [x] 把 `PURPLE_SEA_URCHIN_SOURCE_DATE`、`PURPLE_SEA_URCHIN_CONTENT_DATE` 和 `PURPLE_SEA_URCHIN_SOURCES` 加入 `src/data/species.ts`，保持 URL 唯一。
- [x] 把 `slug: 'purple-sea-urchin'` 的物种对象加入数组；确认 `animalTaxonomy` 生成 Animalia，且固定六级链的 `order` 为 Camarodonta。
- [x] 检查 `NE` 对象没有 `assessedYear` 或 `criteria`，`trend` 为 `unknown`。
- [x] 保持 `metrics: {}`；不把 5—10.4 厘米写成典型成体范围，也不填 `lifespanYears` 或 `maxDiveDepthM`。
- [x] 生成六张 1536 × 1024、不透明 sRGB 原图，逐张检查物种识别、五牙、八腕和无文字水印。
- [x] 输出六张对应 WebP，确认封面不在 gallery 重复，路径与 `media` 完全一致。
- [x] 用静态资产检查确认每张 WebP 为 1536 × 1024、无 alpha；不启动 GUI 或浏览器。
- [x] 运行类型检查、测试与构建；确认全部来源 URL 为 HTTPS 且无重复。
- [x] 集成完成后再更新 `docs/todo.md` 的紫海胆条目和计数；本研究稿本身不提前修改 TODO。

### 完成标准

物种条目只有在以下条件同时满足时才算完成：接受名和六级分类采用 WoRMS 当前记录；中文名带学名消歧；范围、深度和尺寸保留测量边界；管足、棘、叉棘、提灯、食性、生态、繁殖和长腕幼体均有来源；寿命和 IUCN 缺口没有被假数字填平；六张图通过尺寸、色彩、透明度和科学禁区检查；`Species` 对象通过类型检查、测试和构建。[S01][S02][S05][S08][S12][S17][S20][S22][S26][S28][S30][S33]
