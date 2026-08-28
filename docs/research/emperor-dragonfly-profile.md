# 皇帝蜻蜓物种档案研究

- 研究对象：皇帝蜻蜓 `Anax imperator`
- 目标档案：`species-anax-imperator`
- 最终 slug：`emperor-dragonfly`
- 检索与复核日期：2026-08-28
- 研究范围：接受名称与分类、全球和欧洲保护评估、分布、生境、形态、测量、生活史、行为、食性、威胁、管理、六张图、完整 `Species` 草案、测试和静态资产验证

本文区分全球评估、欧洲区域评估、区域野外研究和实验室结果。区域性体长均值、活动月份、发育时长、移动距离和捕食实验不外推为全物种常数。

## 结论摘要

1. 当前接受学名是 `Anax imperator` Leach, 1815。现代文献也写作 Leach in Brewster, 1815，这表示原始出版物的书目关系，不是另一个分类单元。分类路径为动物界、节肢动物门、昆虫纲、蜻蜓目、蜓科、伟蜓属。[GBIF](https://www.gbif.org/species/5051775)、[NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Anax+imperator) 和 [World Odonata List](https://www.odonatacentral.org/app/#/wol/) 支持这一主干。
2. `names.zh` 沿用项目 TODO 的“皇帝蜻蜓”。科学出版社《昆虫生殖系统》使用“帝王蜻蜓”，可作为中文检索别名；“帝王伟蜓”也可保留为通俗检索词。英文主名用 “Emperor Dragonfly”，英国自然历史博物馆名录还收录 “Blue Emperor”。
3. 全球 IUCN 评估为无危 LC，全球趋势记为 `stable`。Mitra 2016 的全球评估认为本种广布且没有全球性重大威胁。欧洲 2024 区域评估同为 LC，但趋势为增长。结构化字段必须代表全球范围，不能用欧洲 `increasing` 覆盖全球 `stable`。
4. SANBI 导入的全球评估页把评估时间标为 2015 年 3 月，IUCN 于 2016 年发布该记录。`conservation` 因而写 `conservation('LC', 'stable', 2015)`；`assessedYear` 表示评估年份，不是发布年份。
5. 分布横跨非洲、欧洲、阿拉伯半岛、西南亚、中亚，并延伸到印度的若干地区。欧洲北缘近几十年向北扩展。国家数组只列代表性国家，不能当完整名录。
6. `distribution.realms` 应同时包含 `freshwater` 和 `terrestrial`。卵和幼虫依赖淡水，成虫在池岸及周边陆地成熟、休息、觅食和移动。欧洲 IUCN 评估也把系统列为陆地与淡水。
7. 主要繁殖生境是阳光充足、开阔且水生植被丰富的池塘和湖泊。它也利用缓流河段、运河、水库、采石坑、蓄水池及花园池塘等人工水体。人工水体可被利用，不表示任何无植被、受污染或频繁清空的水体都适合完成生活史。
8. 英国识别资料给出的典型成虫体长为 78 mm，英国自然历史博物馆给出的当地翅展为 10.5 cm。这两个数适合展示和识别，不是全球最小值或最大值。诺曼底成熟雄虫和雌虫的均值只在测量注释中保留样本和地区。
9. 成熟雄虫通常有苹果绿色胸部、蓝色腹部和连续的深色背中线；雌虫腹部常为绿色或蓝绿色并带较宽深色背线，少数雌虫也会发蓝。黄色前缘脉 costa、绿色胸部、巨大的相接复眼、四片膜质翅和六足比单独依赖腹部颜色更稳妥。
10. 生命周期为植入水生植物组织的卵、水生幼虫、羽化成虫，没有蛹期。雌虫通常单独产卵，不应画成串珠状裸露卵，也不应画成与雄虫保持串联产卵。
11. 发育周期随纬度、温度和水体条件变化。英国研究证明末龄幼虫可发生兼性滞育；法国西南部三个永久人工池塘中的种群呈两年一代。其他欧洲记录包含一年或两年发育，温暖地点还可能出现更快周期。档案不提供全球固定年限。
12. 水生幼虫以可伸出的捕捉面罩捕获猎物。法国实验用 12 只幼虫和大型溞测得 0.03 至 0.25 m/s 的打击速度；速度随温度变化，捕获成功更受准确性影响。这个区间只描述该实验。
13. 幼虫野外粪便分析记录蜉蝣幼虫、豆娘幼虫、石蛾幼虫、摇蚊和水生半翅目等猎物；受控实验也证明可捕食蝌蚪。成年虫用六足形成捕虫篮，在空中截获飞虫，再用咀嚼式口器处理。没有物种级全球食谱比例。
14. 标记和无线电追踪研究显示成虫会在池塘网络间移动。诺曼底研究中有一只雌虫在距释放池 1,902 m 处被探测到；这是单次研究观测，不是物种最大扩散距离或迁徙距离。
15. 全球评估未识别重大威胁，但局地繁殖地仍会受湿地破坏和水污染影响。管理重点是维持池塘网络、水质、阳光和多层水生植被，分期清淤或修剪，并用蜕壳、幼虫和产卵行为确认繁殖。
16. CITES 2026 年 3 月 5 日生效的附录未列入本种。未列入只表示国际贸易公约当前没有附录管制，不能替代地方保护规则或生境管理。
17. 蜻蜓目是现生有翅昆虫中的早分化支系，但 `Anax imperator` 不是“活化石”，也没有证据证明它自远古以来形态不变。档案可写古老谱系，不能写成存活至今的史前同一个物种。

## 名称、别名与分类

### 可落库名称

| 字段 | 建议值 | 证据与边界 |
| --- | --- | --- |
| `names.zh` | 皇帝蜻蜓 | 沿用 `docs/todo.md`，避免任务名和详情页主名分裂 |
| `names.en` | Emperor Dragonfly | [英国自然历史博物馆 UK Species Inventory](https://www.nhm.ac.uk/our-science/data/uk-species/taxon?tvk=NBNSYS0000005630) 的接受英语名 |
| 中文别名 | 帝王蜻蜓；帝王伟蜓 | 科学出版社《昆虫生殖系统》明确使用“帝王蜻蜓”；“帝王伟蜓”作为按属名翻译的通俗检索词，不主张为唯一规范名 |
| 英文别名 | Blue Emperor | 英国自然历史博物馆名录收录 |
| 接受学名 | `Anax imperator` | GBIF、NCBI、World Odonata List 与 IUCN 一致 |
| 命名人和年份 | Leach, 1815 | 部分现代论文精写 Leach in Brewster, 1815；`scientificName` 字段不包含命名人 |

没有检出统一规定本种中文主名的国家级现行名录。应用因此遵守项目连续性，把有出版物依据的“帝王蜻蜓”放进别名，不把中文名称差异解释成分类差异。

### 接受分类路径

```text
Animalia 动物界
└── Arthropoda 节肢动物门
    └── Insecta 昆虫纲
        └── Odonata 蜻蜓目
            └── Aeshnidae 蜓科
                └── Anax 伟蜓属
                    └── Anax imperator 皇帝蜻蜓
```

### 同物异名只用于检索

GBIF/Catalogue of Life 收录过 `Aeschna azurea`、`Aeschna formosa`、`Aeschna lunata`、`Anax formosa` 及若干种下名称。这些名称适合文献和馆藏检索，不应进入普通名称别名，也不应取代当前 `scientificName`。

## 分布、地图中心与生境

### 结构化分布建议

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| `realms` | `['freshwater', 'terrestrial']` | 幼期水生，成虫利用水体和陆地景观；IUCN 欧洲评估列出两种系统 |
| `continents` | `['欧洲', '非洲', '亚洲']` | 全球评估的范围主干 |
| `regions` | 欧洲大部及北扩区；北非与撒哈拉以南非洲；阿拉伯半岛；西南亚与中亚；印度零散记录区 | 不把欧洲国家清单误作全球完整范围 |
| `countries` | 英国、法国、西班牙、德国、瑞典、土耳其、摩洛哥、阿尔及利亚、肯尼亚、南非、沙特阿拉伯、也门、哈萨克斯坦、印度 | 代表性列表，不是穷尽列表 |
| `center` | `{ lat: 32, lng: 20 }` | 地中海与北非附近的展示焦点，只为地图初始视图 |

[Mitra 2016 全球评估镜像](https://speciesstatus.sanbi.org/assessment/last-assessment/1607/) 把范围概括为整个非洲、欧洲大部、阿拉伯半岛、西南亚和中亚，并列出印度西孟加拉、北阿坎德、马哈拉施特拉和泰米尔纳德的记录。欧洲 2024 评估列出欧洲原生现存国家，并记录北扩趋势。国家数组只需代表地理跨度，不能因未列某国而暗示当地没有记录。

`center` 不是分布中心、密度中心、原产地或物种质心。当前接口只需要一个代表性地图焦点；`lat: 32, lng: 20` 能让首屏同时看到欧洲、非洲和西亚的大部分范围。

### 四类结构化生境

1. **阳光充足且植被丰富的池塘和湖泊**：开阔水面与沉水、浮叶、挺水植物并存，供幼虫隐蔽、雌虫产卵和末龄幼虫攀爬羽化。设置 `isPrimary: true`。
2. **缓流河段、运河和河流回水**：水流较缓、岸线有植物的河段和运河可被利用；“稍有流动”不能扩展成急流主河道。
3. **水库、采石坑和人工池塘**：蓄水池、恢复后的采石坑、花园池塘和其他人工水体都可能支持繁殖，前提仍包括水质、植被和足够的水期。
4. **池岸草地、篱带和树丛**：成虫在水体外成熟、休息、空中觅食和移动。它们依赖淡水繁殖，但不能把成虫生活范围压缩成水面一条线。

欧洲 IUCN 评估把本种生境概括为天然或人工、静水至轻微流水、通常较大、开阔且植被丰富的水体。英国蜻蜓协会物种页列出大型植被池塘和湖泊，也包括运河与缓流河流。档案不写“只生活在大型天然湖泊”。

## 形态、性别和测量

### 成虫识别

- 体形修长而强健，腹部长，胸部宽厚。
- 复眼巨大，在头顶大范围相接；触角很短。
- 胸部通常呈鲜明苹果绿，翅前缘 costa 呈黄色。
- 四片膜质翅分别附着于胸部，左右各一片前翅和一片后翅。四翅不是一对，也不是甲虫式硬鞘翅。
- 六足位于胸部，飞行时可向前弯成捕虫篮。腹端没有螫针。
- 成熟雄虫腹部多呈蓝色，背中线连续而深；雌虫多呈绿色或蓝绿色并带较宽的褐黑背线，少数雌虫也会呈蓝色。
- 雄雌颜色有重叠。图像可以选择典型个体帮助叙事，鉴定文案不能说“蓝色必为雄虫、绿色必为雌虫”。

与小皇帝蜻蜓 `Anax parthenope` 等相似大型蜻蜓比较时，皇帝蜻蜓的苹果绿色胸部和沿腹部延伸的蓝绿底色更适合画面诊断。不能只靠“体型大”或某个颜色值完成鉴定。

### 测量口径

| 数值 | 直接来源 | 可用方式 | 禁止外推 |
| --- | --- | --- | --- |
| 成虫典型体长 78 mm | [British Dragonfly Society](https://british-dragonflies.org.uk/species/emperor-dragonfly/) | `measurements.length.typical` 与展示数字 | 不是全球平均、最小值或最大值 |
| 英国翅展 10.5 cm | [Natural History Museum](https://www.nhm.ac.uk/discover/dragonflies-the-ultimate-hunters.html) | `measurements.wingspan.typical`，注释写明英国口径 | 不是全球极值 |
| 末龄幼虫 45 至 56 mm | British Dragonfly Society | 关键事实和展示数字 | 不等于所有龄期幼虫长度 |
| 诺曼底成熟雄虫 77.2 ± 2.3 mm | [Minot et al. 2019](https://doi.org/10.14411/eje.2019.031) | 测量注释中的地区样本均值 | 不能写进全球范围 |
| 诺曼底成熟雌虫 72.9 ± 2.3 mm | Minot et al. 2019 | 与雄虫均值并列，说明性二型 | 不能推导每只雄虫都比每只雌虫长 |
| 成熟雄虫 0.97 ± 0.07 g；成熟雌虫 1.26 ± 0.09 g | Minot et al. 2019 | 研究段落中的样本均值 | 不建议进入 `measurements.weight` 或 `metrics` |

Minot 等记录了 345 只幼虫、143 个蜕壳和 51 只成熟成虫，并对成功羽化的饲养个体进行测量。成熟雄虫平均更长，成熟雌虫平均更重；刚羽化时两性体重接近，雌虫在成熟期增重更多。这组结果有清楚的地点、样本和生命阶段，不能转换成全球雌雄范围。

### 结构化测量建议

```ts
measurements: {
  length: {
    typical: 78,
    unit: 'mm',
    note:
      'British Dragonfly Society 的识别用典型值。诺曼底研究中成熟雄虫和雌虫均值分别为 77.2 ± 2.3 mm 与 72.9 ± 2.3 mm；这些地区样本均值不是全球范围。',
  },
  wingspan: {
    typical: 10.5,
    unit: 'cm',
    note:
      'Natural History Museum 给出的英国物种识别值，不宣称全球平均或极值。',
  },
},
metrics: {},
```

`metrics` 保持空对象。当前接口只接受标准化最小和最大范围，而可靠来源在此提供的是典型值或地区均值。用典型值伪造 `[min, max]` 会让筛选和比较产生错误含义。

## 生命周期、羽化与行为

### 不完全变态

1. 雌虫用产卵器把卵插入浮叶或其他水生植物组织，通常独自产卵。
2. 孵化后的水生幼虫多次蜕皮，在水草和底部结构中捕食。
3. 末龄幼虫爬出水面，固定在芦苇或其他挺水基质上。
4. 成虫从幼虫外骨骼背部裂口羽化，扩展并硬化四翅，留下空蜕。

整个序列没有蛹和茧。空蜕保留六足、翅芽、头部和裂开的胸部，但没有活体组织。第 06 张图只展示羽化后留下的一个空蜕，不把成虫重新塞回壳中。

### 末龄滞育和发育周期

[Corbet 1955](https://doi.org/10.1038/175338b0) 在英国种群中发现末龄幼虫通常在夏季进入、随后滞育并把变态推迟到春季，使羽化相对同步。[Corbet 1956](https://doi.org/10.1242/jeb.33.1.1a) 进一步证明这种滞育具有兼性：约 23°C 下，滞育个体从末龄蜕皮到变态约需 105 天，非滞育个体约 30 天；光周期变化参与诱导和避免滞育。这些是特定实验和英国田野背景，不是全球发育日历。

[Cayrou 与 Céréghino 2005](https://doi.org/10.1002/aqc.739) 在法国西南部三个永久人工池塘记录两年发育周期，并讨论欧洲其他地区的一年或两年周期。温暖地区还报告过更快发育。建议文案写“欧洲种群常见一年或两年，法国西南部研究池塘为两年”，不写“所有个体必须水下生活两年”。

[Preuss et al. 2024](https://doi.org/10.1098/rsfs.2023.0076) 用十个标本研究羽化前足部和口器的硬化顺序，发现跗爪较早着色硬化，有助于末龄幼虫在羽化基质上抓牢。这项小样本形态研究支持“抓附很关键”，不提供全球羽化成功率。

### 池塘巡逻、产卵和陆地移动

[Consiglio 1976](https://natuurtijdschriften.nl/pub/591350) 在意大利中部一个小池塘标记雄虫，记录雄虫占据全部或部分池面、巡逻并驱赶其他雄虫。领地时段持续不到 1 分钟到 93 分钟，说明个体使用会变化；不能写“每只雄虫全天独占一整口池塘”。

雌虫通常单独把卵插入浮叶植物，不需要在图中加入伴飞或串联雄虫。成年雄虫更常停留在水体附近，雌虫可进入周围陆地景观。[Minot et al. 2021](https://doi.org/10.1111/fwb.13632) 在诺曼底五个池塘研究 87 只标记成虫，无线电追踪发现雌虫在陆地基质中离池更远；一只雌虫在距释放池 1,902 m 处被探测到。研究支持保护池塘网络与周边陆地，但 1,902 m 不是全物种最大移动距离。

[Minot 与 Husté 2022](https://doi.org/10.3390/d14020068) 比较法国西北部七个种群以及西西里、捷克、瑞士和英国样本，发现大部分样本间分化低、基因流较高；英国样本相对分化，提示英吉利海峡可能构成屏障。样本集中在欧洲，不能外推非洲和亚洲所有种群。

## 食性与捕食

### 水生幼虫

[Cloarec 1977](https://natuurtijdschriften.nl/pub/591417) 对法国布列塔尼一个池塘的幼虫粪粒进行逐月分析，记录蜉蝣幼虫、豆娘 `Coenagrion`、石蛾 `Phryganea`、摇蚊、水生半翅目 `Plea` 以及其他水生无脊椎动物。食物构成随猎物丰度、大小、微生境和竞争变化。该研究证明猎物多样，不提供全球固定比例。

[Quenta Herrera et al. 2018](https://doi.org/10.1002/ece3.3975) 以法国 Rillé 湖采集的 12 只幼虫和大型溞进行 15、20、30°C 实验。幼虫体长 2.31 至 4.30 cm，捕捉面罩速度为 0.03 至 0.25 m/s；温度影响速度，捕获成功主要取决于准确性。档案可讲“快速伸出面罩”，不能把 0.25 m/s 写成物种全球最高速度。

[Stav et al. 2007](https://doi.org/10.1007/s10750-006-0388-5) 在人工池塘实验中证明幼虫能够捕食绿蟾蜍蝌蚪，并引发非消耗性行为效应。这是受控实验，不能据此把蝌蚪写成全球主要食物。

### 成年虫

成年虫追逐飞行昆虫，用六足在胸前形成捕虫篮，再以咀嚼式口器处理猎物。[Josten et al. 2022](https://doi.org/10.1002/jmor.21497) 用十只实验室饲养成虫研究口器，四只参与高速摄影，记录 182 次对固定家蝇的摄食循环。研究支持咬、切、输送的口器机制，不代表野外饮食中家蝇的比例。

结构化食性写作：

```ts
diet: {
  types: ['carnivore', 'insectivore'],
  foods: [
    '蜉蝣、豆娘、石蛾和摇蚊等水生昆虫幼体',
    '小型甲壳动物等水生无脊椎动物',
    '蝌蚪等条件性脊椎动物猎物',
    '摇蚊、蝇类和其他飞行昆虫',
    '其他蜻蜓等机会性大型飞虫',
  ],
  description:
    '幼虫在水中用可伸出的捕捉面罩伏击多种水生猎物，成虫在空中用六足截获飞虫后以咀嚼式口器处理。野外食谱随地点、季节、猎物大小和可获得性变化；蝌蚪捕食和实验室家蝇摄食不能解释为全球主要食物比例。',
},
```

## 保护状态、威胁与管理

### 全球与区域评估分开

| 评估 | 范围 | 状态与趋势 | 落库方式 |
| --- | --- | --- | --- |
| [Mitra 2016](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T59812A72311295.en) | 全球 | 2015 年 3 月评估，LC，稳定；2016 年发布 | `conservation('LC', 'stable', 2015)` |
| [Vinko et al. 2024](https://doi.org/10.2305/IUCN.UK.2024-1.RLTS.T59812A208815239.en) | 欧洲与 EU27 | LC，增长；评估日期 2022-10-13 | 只写进区域叙述，不覆盖全球字段 |
| [CITES 2026 附录](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | 国际贸易公约 | 未列入 | 描述性事实，不创建另一套状态 |

全球评估镜像的理由是本种广布且没有全球性重大威胁。欧洲评估指出本种在欧洲大部常见，北方范围扩张，种群增加且没有特定区域威胁。两个结论并不冲突：全球字段概括整个范围，欧洲趋势只描述区域。

SANBI 导入页的评估头标记 “Mar 2015”，IUCN DOI 属于 2016-3 发布版本。当前接口的 `assessedYear` 因而填 2015；描述和来源标题保留 2016 发布信息，避免把两个日期混用。

### 威胁字段建议

建议使用有范围限制的短句：

- “局地湿地排水、填埋和水体重塑会移除繁殖水体。”
- “水污染可降低水质并改变幼虫及其猎物群落；全球效应尚未量化。”
- “一次性清除全部沉水、浮叶和挺水植物会同时损失产卵、隐蔽和羽化结构。”
- “孤立水体和周边陆地结构简化可能削弱池塘网络功能；欧洲样本仍显示较高基因流。”
- “气候变暖与欧洲北扩相符，但干旱和水体提前干涸可能在局地压缩幼虫完成发育的水期；不能只写成单向利好。”

不建议把天敌捕食、某一次蝌蚪实验或某种鱼类观察升级为全球保护威胁。全球 IUCN 当前仍为 LC。

### 保护与管理行动

- 保护由开阔水面、沉水植物、浮叶植物和挺水植物组成的多层水体结构。
- 控制岸边过度遮阴，同时保留一部分岸草、芦苇和其他稳固羽化基质。
- 分区、分年清淤和修剪，避免同一时间清空整口池塘或整个池塘网络。
- 维持水质，按当地法规管理营养盐、污水和农药径流。
- 保留池塘之间的草地、篱带和休息结构，使成虫能觅食和移动。
- 监测时同时记录蜕壳、幼虫、产卵雌虫和新羽化成虫。只看到巡逻雄虫不能证明当地繁殖成功。
- 对人工水体记录水期、水深变化、植被覆盖、鱼类、管理日期和干涸事件。
- 定期复核全球 IUCN、欧洲或国家红色名录、CITES 与地方湿地规定。

### 监测数据字段建议

除 `Species` 页面字段外，后续观察或公民科学数据至少保存：

- 原始学名、鉴定人、鉴定置信度和照片或标本凭证。
- 日期、时间、经纬度、坐标精度、观察时长和搜索面积。
- 生命阶段：幼虫、蜕壳、未成熟成虫、成熟成虫。
- 性别与判定依据，避免只按蓝绿颜色二分。
- 行为：巡逻、觅食、交配、单独产卵、羽化或仅飞越。
- 繁殖证据等级，蜕壳和幼虫应高于单次成虫目击。
- 水体类型、永久或季节性、水深、水温及干涸日期。
- 沉水、浮叶、挺水植物覆盖和开阔水面比例。
- 遮阴、岸线管理、清淤、污染、农药或营养盐线索。
- 鱼类和两栖类是否出现，只记观察，不预设因果。
- 天气、风速和设备类型；无线电追踪数据要保存发射器、定位误差和失联规则。

## 六段故事建议

### 1. `name-and-four-wings`

- label：名字与谱系
- title：帝王之名属于现生蜻蜓，不是史前物种标签
- body：皇帝蜻蜓属于蜻蜓目、蜓科、伟蜓属。蜻蜓目代表现生有翅昆虫中较早分化的一支，成虫保留四片能分别控制的膜质翅；这不表示 `Anax imperator` 自远古起从未改变，也不应把它称为活化石。

### 2. `blue-male-green-female`

- label：颜色与识别
- title：蓝腹雄虫和绿腹雌虫，只是常见组合
- body：成熟雄虫常见蓝色腹部和连续深色背线，雌虫常见绿色或蓝绿色腹部与较宽褐黑背线，但雌虫也可能发蓝。苹果绿色胸部、黄色翅前缘、相接复眼、四翅和六足需要一起进入识别。

### 3. `two-worlds-no-pupa`

- label：水陆生活史
- title：水下多次蜕皮，爬上芦苇直接成为成虫
- body：雌虫把卵插入水生植物组织，幼虫在水中捕食和生长。末龄幼虫爬出水面，成虫从背部裂口羽化，留下空蜕。过程中没有蛹或茧；发育需一年、两年或更短取决于地区和条件。

### 4. `underwater-ballistic-mask`

- label：幼虫捕食
- title：捕捉面罩先追求命中，再追求速度
- body：幼虫把折叠在头下的捕捉面罩迅速伸向猎物。法国 12 只幼虫实验测得 0.03 至 0.25 m/s，温度改变速度，捕获成功更受准确性影响。这个实验区间不能写成全球最高攻击速度。

### 5. `territory-and-oviposition`

- label：池面行为
- title：雄虫巡池，雌虫独自把卵藏进植物
- body：雄虫可在池面巡逻并驱赶闯入者，领地使用却会随个体和时段变化。雌虫通常独自在浮叶植物上产卵，把卵插入组织而非排成水面卵串。成虫还能离开水边，在池塘网络间觅食和移动。

### 6. `range-expansion-and-pond-network`

- label：分布与保护
- title：全球无危，不等于每一口繁殖池都安全
- body：本种横跨非洲、欧洲和亚洲，欧洲北缘仍在扩展；全球和欧洲评估均为无危。局地排水、污染和彻底清除水草仍会让一处繁殖地失效。保护池塘网络、水质、植被与周边陆地，比只统计飞过的成虫更有意义。

## 摘要、描述与关键事实草案

`summary`：

> 横跨非洲、欧洲和亚洲的大型蜓科捕食者，幼虫生活在植被丰富的淡水中，雄虫常以蓝腹绿胸在池面巡逻。

`description`：

> 皇帝蜻蜓是蜓科伟蜓属的大型蜻蜓，典型成虫体长约 78 毫米，英国识别资料记录翅展约 10.5 厘米。成熟雄虫常见苹果绿色胸部、蓝色腹部和连续深色背线，雌虫多为绿色或蓝绿色，但颜色存在重叠。雌虫把卵插入水生植物组织，水生幼虫用可伸出的捕捉面罩猎取多种无脊椎动物，末龄幼虫爬上挺水植物后直接羽化，没有蛹期。成虫在空中捕食飞虫，雄虫可巡逻池面，雌虫会进入周边陆地和池塘网络。本种分布于非洲、欧洲、阿拉伯半岛、西南亚、中亚和印度部分地区；全球 IUCN 评估为无危且趋势稳定，欧洲区域种群正在增加。局地水体破坏、污染和一次性清除全部水草仍会损害繁殖地。

`keyFacts` 建议：

1. 当前接受学名是 `Anax imperator` Leach, 1815。
2. 接受分类路径为 `Animalia / Arthropoda / Insecta / Odonata / Aeshnidae / Anax`。
3. 英国识别资料给出的典型成虫体长为 78 mm、翅展为 10.5 cm；二者都不是全球极值。
4. 成虫有四片独立膜质翅、六足、短触角和在头顶大范围相接的复眼。
5. 雄虫常见蓝腹，雌虫常见绿或蓝绿色腹部，但颜色有重叠。
6. 雌虫通常单独把卵插入浮叶或其他水生植物组织。
7. 生命周期为卵、水生幼虫和成虫，属于不完全变态，没有蛹期。
8. British Dragonfly Society 给出的末龄幼虫长度为 45 至 56 mm。
9. 英国种群的末龄幼虫可发生兼性滞育；发育周期随地区和条件变化。
10. 水生幼虫捕食多种水生无脊椎动物，受控实验还证明可捕食蝌蚪。
11. 成虫在空中截获飞虫，再用咀嚼式口器处理。
12. 诺曼底池塘网络研究中，一只雌虫在距释放池 1,902 m 处被探测到；这不是最大扩散距离。
13. 分布横跨欧洲、非洲和亚洲，欧洲北缘近几十年向北扩展。
14. 全球 IUCN 为 LC、趋势稳定；欧洲区域同为 LC、趋势增长。
15. CITES 当前未列入本种，不能据此推断地方无保护要求。

## 四项展示数字

```ts
featuredStats: [
  {
    key: 'typical-adult-length',
    label: '典型成虫体长',
    value: '78',
    unit: 'mm',
    note:
      'British Dragonfly Society 的识别值，不宣称全球平均、最小值或最大值。',
  },
  {
    key: 'uk-wingspan',
    label: '英国识别翅展',
    value: '10.5',
    unit: 'cm',
    note:
      'Natural History Museum 的英国物种值，不宣称全球极值。',
  },
  {
    key: 'final-instar-length',
    label: '末龄幼虫',
    value: '45–56',
    unit: 'mm',
    note:
      'British Dragonfly Society 物种页范围，只指末龄幼虫。',
  },
  {
    key: 'tracked-female-distance',
    label: '单只雌虫追踪距离',
    value: '1,902',
    unit: 'm',
    note:
      'Minot et al. 2021 诺曼底研究中的一只雌虫观测，不是最大扩散或迁徙距离。',
  },
],
```

## 六张图的科学场景与精确提示词

### 统一技术要求

- 输出必须是 1536×1024 像素、3:2 横图、sRGB，运行时转为不透明 RGB WebP。
- 采用自然史编辑摄影或可信科学复原质感，不使用插画标签、文字、箭头、标尺、地图、水印、边框或拼贴。
- 封面主体置于右侧三分之一，并为 16:9 中心裁切保留完整头、胸、腹、四翅和六足。
- 所有成年虫必须有且只有四片膜质翅，左右各一片前翅和一片后翅；必须有且只有六足。
- 成年虫复眼在头顶大范围相接，触角短，胸部苹果绿，翅前缘 costa 呈黄色；没有螫针。
- 雄虫采用蓝色腹部和连续深色背中线。雌虫采用绿色或蓝绿色腹部和较宽褐黑背线，但正文保留颜色重叠边界。
- 不用多余肢体、融合翅、蝴蝶触角、甲虫鞘翅、外露尾鳃、血液、撕裂猎物或夸张运动模糊掩盖解剖。

### 01 `adult-male-pond-portrait`

用途：封面和雄虫识别。文件：`01-adult-male-pond-portrait.webp`。

```text
Create an exact 1536 by 1024 pixel, 3:2 horizontal, sRGB natural-history editorial wildlife photograph of exactly one mature male Emperor Dragonfly, Anax imperator, perched diagonally on a single reed at the edge of a sunny, open, well-vegetated freshwater pond. Place the complete dragonfly in the right third of the frame and leave calm, softly blurred pond and vegetation as negative space on the left; keep the entire animal safe inside a centered 16:9 crop. Show an apple-green thorax, blue abdomen with one continuous narrow dark mid-dorsal stripe, blue-green compound eyes meeting broadly across the top of the head, very short antennae, and yellow costal veins along the leading edges. Show exactly four transparent membranous wings with dense realistic venation, one forewing and one hindwing on each side, and exactly six jointed legs gripping the reed. The abdomen is long and straight without a stinger. Soft summer daylight, realistic scale, high anatomical clarity, no other dragonflies, no prey, no text, no arrows, no labels, no border, no collage, no watermark, no extra or fused wings, no missing legs, no butterfly antennae, no beetle elytra.
```

### 02 `female-pondweed-oviposition`

用途：单独内生式产卵。文件：`02-female-pondweed-oviposition.webp`。

```text
Create an exact 1536 by 1024 pixel, 3:2 horizontal, sRGB natural-history editorial wildlife photograph of exactly one mature female Emperor Dragonfly, Anax imperator, alone on floating pondweed at the surface of a sunny freshwater pond. Show her abdomen lowered so the ovipositor touches and inserts into living plant tissue at the waterline; the eggs remain invisible inside the plant. Show no male and no tandem pair. Give her an apple-green thorax, a green to blue-green abdomen with a broad dark brown-black mid-dorsal stripe, green compound eyes meeting broadly across the top of the head, short antennae, and yellow costal veins. Show exactly four transparent, densely veined wings, one forewing and one hindwing on each side, and exactly six legs holding the pondweed. Keep her whole body, all wings, and all legs visible. Natural reflections and sparse floating vegetation, realistic scale and anatomy, no exposed egg strings, no loose eggs on the water, no submerged adult, no second dragonfly, no text, no labels, no border, no collage, no watermark, no stinger, no extra limbs or wings.
```

### 03 `vegetated-pond-patrol`

用途：雄虫池面巡逻与繁殖生境。文件：`03-vegetated-pond-patrol.webp`。

```text
Create an exact 1536 by 1024 pixel, 3:2 horizontal, sRGB natural-history editorial action photograph of exactly one mature male Emperor Dragonfly, Anax imperator, making a low patrol flight above an open sunny pond with a balanced mosaic of clear water, submerged plants, floating leaves, and emergent reeds. Show the complete dragonfly in a shallow banked turn with an apple-green thorax, blue abdomen carrying one continuous dark mid-dorsal stripe, large blue-green compound eyes meeting on top, short antennae, and yellow costal veins. Show exactly four separate transparent membranous wings with dense realistic venation and exactly six legs tucked forward beneath the thorax. Keep the anatomy sharp enough to count all wings and legs; use only slight background motion, not motion blur across the animal. No rival male, no female, no mating, no prey, no swarm, no territorial collision, no text, no arrows, no labels, no map, no border, no collage, no watermark, no extra or fused wings, no stinger.
```

### 04 `aerial-prey-interception`

用途：成虫空中捕食的接近阶段。文件：`04-aerial-prey-interception.webp`。

```text
Create an exact 1536 by 1024 pixel, 3:2 horizontal, sRGB high-speed natural-history editorial photograph of exactly one mature male Emperor Dragonfly, Anax imperator, tracking exactly one small non-biting midge in open air above a pond margin. The dragonfly and midge remain clearly separated before contact; show no capture, bite, blood, damage, or prey held in the legs. The dragonfly has an apple-green thorax, blue abdomen with one continuous dark mid-dorsal stripe, compound eyes meeting broadly on top, short antennae, yellow costal veins, exactly four separate transparent densely veined wings, and exactly six legs beginning to angle forward as a prey basket. Keep the entire dragonfly and the single midge sharply readable, with at least one dragonfly head length of empty air between them. Soft blurred reeds and water in the background, realistic scale, no other insects, no swarm, no web, no gore, no text, no arrows, no labels, no border, no collage, no watermark, no missing or extra anatomy, no stinger.
```

### 05 `underwater-final-instar-larva`

用途：末龄水生幼虫。文件：`05-underwater-final-instar-larva.webp`。

```text
Create an exact 1536 by 1024 pixel, 3:2 horizontal, sRGB scientifically accurate underwater natural-history photograph of exactly one final-instar Emperor Dragonfly larva, Anax imperator, resting in profile among submerged pond plants and fine detritus. Show a robust elongated hawker larva in mottled olive-brown, approximately 45 to 56 millimetres long in plausible relation to the plant stems, with a broad head, two large rounded compound eyes, short antennae, exactly six jointed walking legs, compact external wing pads only, and a segmented abdomen ending without three external leaf-like tail gills. The prehensile labial mask is folded naturally beneath the head, not a mammal jaw and not a long tongue. Show no adult wings, no pupa, no cocoon, no prey capture, no fish, no tadpole, no blood, and no fantasy bubbles. Natural shallow freshwater light, realistic sediment and vegetation, high anatomical clarity, no text, no arrows, no labels, no border, no collage, no watermark, no extra limbs.
```

### 06 `emergence-exuvia-on-reed`

用途：羽化完成后留下的空蜕。文件：`06-emergence-exuvia-on-reed.webp`。

```text
Create an exact 1536 by 1024 pixel, 3:2 horizontal, sRGB natural-history macro photograph of exactly one empty Emperor Dragonfly final-instar exuvia, Anax imperator, clinging above the waterline to a single vertical reed at dawn after emergence has finished. Show a dry hollow olive-brown to tan larval shell with a broad head, large empty eye cases, short antennae, exactly six rigid legs gripping the reed, compact wing pads, and a clearly split dorsal thorax through which the adult emerged. The abdomen ends without three external leaf-like tail gills. The exuvia must visibly be empty and motionless. Show no living adult, no second exuvia, no larva inside, no pupa, no cocoon, no discarded adult wing, no text, no arrows, no labels, no border, no collage, no watermark, no extra legs. Use soft dawn pond light and shallow depth of field while keeping the full empty shell sharp.
```

### 建议媒体字段

```ts
media: {
  image:
    './images/species/emperor-dragonfly/01-adult-male-pond-portrait.webp',
  alt: '一只绿胸蓝腹的皇帝蜻蜓成熟雄虫完整停在阳光池塘边的芦苇上',
  focalPoint: { x: 0.7, y: 0.5 },
  credit: 'Fauna Atlas · AI 生成原创图像',
  gallery: [
    {
      image:
        './images/species/emperor-dragonfly/02-female-pondweed-oviposition.webp',
      alt: '一只绿腹皇帝蜻蜓雌虫独自在浮叶植物组织中产卵',
      title: '藏进植物组织的卵',
      caption:
        '雌虫通常单独进行内生式产卵；卵位于植物组织内，不形成水面裸露卵串。',
      focalPoint: { x: 0.5, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成原创图像',
    },
    {
      image:
        './images/species/emperor-dragonfly/03-vegetated-pond-patrol.webp',
      alt: '一只皇帝蜻蜓雄虫在开阔且水生植被丰富的池塘上低空巡逻',
      title: '植被池塘上的巡逻',
      caption:
        '雄虫可在繁殖水体上巡逻；一张飞行图不能证明领地持续时间或当地繁殖成功。',
      focalPoint: { x: 0.52, y: 0.44 },
      credit: 'Fauna Atlas · AI 生成原创图像',
    },
    {
      image:
        './images/species/emperor-dragonfly/04-aerial-prey-interception.webp',
      alt: '一只皇帝蜻蜓雄虫在空中接近一只尚未接触的摇蚊',
      title: '接触之前的空中拦截',
      caption:
        '成虫用六足形成捕虫篮截获飞虫；画面停在接触前，不暗示摇蚊占野外食谱的固定比例。',
      focalPoint: { x: 0.5, y: 0.46 },
      credit: 'Fauna Atlas · AI 生成原创图像',
    },
    {
      image:
        './images/species/emperor-dragonfly/05-underwater-final-instar-larva.webp',
      alt: '一只褐绿色皇帝蜻蜓末龄幼虫伏在浅水池塘的沉水植物间',
      title: '水下的末龄捕食者',
      caption:
        '末龄幼虫有六足和短翅芽，没有成虫翅或豆娘式外露尾鳃；捕捉面罩折叠在头下。',
      focalPoint: { x: 0.5, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成原创图像',
    },
    {
      image:
        './images/species/emperor-dragonfly/06-emergence-exuvia-on-reed.webp',
      alt: '一个空的皇帝蜻蜓末龄幼虫蜕壳抓附在水面上方的芦苇上',
      title: '羽化留下的空蜕',
      caption:
        '裂开的胸背和空壳记录一次完成的羽化；画面中没有活体成虫、蛹或茧。',
      focalPoint: { x: 0.5, y: 0.52 },
      credit: 'Fauna Atlas · AI 生成原创图像',
    },
  ],
},
```

## 可直接落库的来源数组

```ts
const EMPEROR_DRAGONFLY_SOURCE_DATE = '2026-08-28' as const;
const EMPEROR_DRAGONFLY_CONTENT_DATE = '2026-08-28' as const;

const EMPEROR_DRAGONFLY_SOURCES = [
  {
    title: 'GBIF / Catalogue of Life: Anax imperator',
    url: 'https://www.gbif.org/species/5051775',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'NCBI Taxonomy Browser: Anax imperator',
    url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Anax+imperator',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Odonata Central: World Odonata List',
    url: 'https://www.odonatacentral.org/app/#/wol/',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum UK Species Inventory: Anax imperator',
    url: 'https://www.nhm.ac.uk/our-science/data/uk-species/taxon?tvk=NBNSYS0000005630',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: '嵇保中《昆虫生殖系统》目录: 帝王蜻蜓 Anax imperator',
    url: 'https://www.ecsponline.com/book/2016/yz/9787030407573-001001-curved-sam-v001.pdf',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'British Dragonfly Society: Emperor Dragonfly',
    url: 'https://british-dragonflies.org.uk/species/emperor-dragonfly/',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Natural History Museum: Dragonflies, the ultimate hunters',
    url: 'https://www.nhm.ac.uk/discover/dragonflies-the-ultimate-hunters.html',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Mitra 2016: IUCN global assessment of Anax imperator',
    url: 'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T59812A72311295.en',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'SANBI Species Status mirror: Anax imperator global assessment',
    url: 'https://speciesstatus.sanbi.org/assessment/last-assessment/1607/',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Vinko et al. 2024: IUCN European assessment of Anax imperator',
    url: 'https://doi.org/10.2305/IUCN.UK.2024-1.RLTS.T59812A208815239.en',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'CITES Appendices effective 5 March 2026',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Clement et al. 2022: Phylogeny, migration and geographic range size evolution of Anax dragonflies',
    url: 'https://academic.oup.com/zoolinnean/article/194/3/858/6343162',
    kind: 'taxonomy',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Minot et al. 2019: Biometry of Anax imperator from larval development to adults',
    url: 'https://doi.org/10.14411/eje.2019.031',
    kind: 'general',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Corbet 1955: Synchronization of emergence in Anax imperator',
    url: 'https://doi.org/10.1038/175338b0',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Corbet 1956: Environmental factors influencing diapause in Anax imperator',
    url: 'https://doi.org/10.1242/jeb.33.1.1a',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Cayrou and Céréghino 2005: Life-cycle phenology of Anax imperator in artificial ponds',
    url: 'https://doi.org/10.1002/aqc.739',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Preuss et al. 2024: Cuticular tanning supports dragonfly emergence',
    url: 'https://doi.org/10.1098/rsfs.2023.0076',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Consiglio 1976: Territorial behaviour of Anax imperator',
    url: 'https://natuurtijdschriften.nl/pub/591350',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Minot et al. 2021: Habitat use and movements of Anax imperator in a pond network',
    url: 'https://doi.org/10.1111/fwb.13632',
    kind: 'distribution',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Minot and Husté 2022: Population genetics of Anax imperator across European sites',
    url: 'https://doi.org/10.3390/d14020068',
    kind: 'distribution',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title: 'Cloarec 1977: Feeding of Anax imperator larvae in the wild',
    url: 'https://natuurtijdschriften.nl/pub/591417',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Quenta Herrera et al. 2018: Temperature effects on ballistic prey capture by Anax imperator larvae',
    url: 'https://doi.org/10.1002/ece3.3975',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Stav et al. 2007: Direct and indirect effects of Anax imperator nymphs on tadpoles',
    url: 'https://doi.org/10.1007/s10750-006-0388-5',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
  {
    title:
      'Josten et al. 2022: Functional morphology of adult feeding in Anax imperator',
    url: 'https://doi.org/10.1002/jmor.21497',
    kind: 'ecology',
    accessedAt: EMPEROR_DRAGONFLY_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

### 来源使用边界

- GBIF、NCBI 与 World Odonata List 决定接受分类，不以照片平台的自由标签替代。
- 全球 IUCN DOI 决定结构化保护状态；SANBI 官方物种状态门户补足可访问的理由与全球分布文字。
- 欧洲 2024 评估只支持欧洲范围、趋势、生境和海拔信息。
- BDS 与 NHM 数值用于地区识别。论文中的样本均值和实验值保留地点、样本与处理条件。
- CITES 附录和 Checklist 只支持“当前未列入”，不支持“无风险”。
- 论文给出的 `Anax` 系统发育范围估计不作为 IUCN EOO，也不进入 `distribution.range` 的面积字段。

## 完整 Species 草案

以下对象按 `src/types/species.ts` 的当前接口编写。六个媒体路径与资产目录、来源 README 和运行时 WebP 一致。

```ts
{
  id: 'species-anax-imperator',
  slug: 'emperor-dragonfly',
  names: {
    zh: '皇帝蜻蜓',
    en: 'Emperor Dragonfly',
    aliases: ['帝王蜻蜓', '帝王伟蜓', 'Blue Emperor'],
  },
  scientificName: 'Anax imperator',
  taxonomy: animalTaxonomy(
    taxon('Arthropoda', '节肢动物门'),
    taxon('Insecta', '昆虫纲'),
    taxon('Odonata', '蜻蜓目'),
    taxon('Aeshnidae', '蜓科'),
    taxon('Anax', '伟蜓属'),
  ),
  conservation: conservation('LC', 'stable', 2015),
  distribution: {
    realms: ['freshwater', 'terrestrial'],
    continents: ['欧洲', '非洲', '亚洲'],
    countries: [
      '英国',
      '法国',
      '西班牙',
      '德国',
      '瑞典',
      '土耳其',
      '摩洛哥',
      '阿尔及利亚',
      '肯尼亚',
      '南非',
      '沙特阿拉伯',
      '也门',
      '哈萨克斯坦',
      '印度',
    ],
    regions: [
      '欧洲大部及近几十年的北扩区域',
      '北非和撒哈拉以南非洲',
      '阿拉伯半岛',
      '西南亚和中亚',
      '印度的零散记录区域',
    ],
    range:
      '分布从整个非洲延伸到欧洲大部、阿拉伯半岛、西南亚、中亚和印度部分地区；欧洲北缘近几十年向北扩展。国家数组只列代表性国家，不是完整名录。',
    center: { lat: 32, lng: 20 },
  },
  habitats: [
    {
      name: '阳光充足且植被丰富的池塘和湖泊',
      realm: 'freshwater',
      description:
        '开阔水面与沉水、浮叶、挺水植物并存，为幼虫提供隐蔽和猎物，为雌虫提供产卵组织，也为末龄幼虫提供羽化支点。',
      isPrimary: true,
    },
    {
      name: '缓流河段、运河和河流回水',
      realm: 'freshwater',
      description:
        '可利用水流较缓且岸线植被发育的运河、河段和回水区；不把急流主河道列为典型生境。',
    },
    {
      name: '水库、采石坑和人工池塘',
      realm: 'freshwater',
      description:
        '蓄水池、恢复后的采石坑和花园池塘等人工水体也可支持繁殖，前提是保有合适水期、水质和植被结构。',
    },
    {
      name: '池岸草地、篱带和树丛',
      realm: 'terrestrial',
      description:
        '成虫在水体周边的陆地景观成熟、休息、空中觅食并在池塘之间移动；观察到成虫不等于水体内已经繁殖。',
    },
  ],
  measurements: {
    length: {
      typical: 78,
      unit: 'mm',
      note:
        'British Dragonfly Society 的识别用典型值。诺曼底研究中成熟雄虫和雌虫均值分别为 77.2 ± 2.3 mm 与 72.9 ± 2.3 mm；这些地区样本均值不是全球范围。',
    },
    wingspan: {
      typical: 10.5,
      unit: 'cm',
      note:
        'Natural History Museum 给出的英国物种识别值，不宣称全球平均或极值。',
    },
  },
  diet: {
    types: ['carnivore', 'insectivore'],
    foods: [
      '蜉蝣、豆娘、石蛾和摇蚊等水生昆虫幼体',
      '小型甲壳动物等水生无脊椎动物',
      '蝌蚪等条件性脊椎动物猎物',
      '摇蚊、蝇类和其他飞行昆虫',
      '其他蜻蜓等机会性大型飞虫',
    ],
    description:
      '幼虫在水中用可伸出的捕捉面罩伏击多种水生猎物，成虫在空中用六足截获飞虫后以咀嚼式口器处理。野外食谱随地点、季节、猎物大小和可获得性变化；蝌蚪捕食和实验室家蝇摄食不能解释为全球主要食物比例。',
  },
  activity: [
    '雄虫在繁殖水体上巡逻和驱赶同类',
    '雌虫单独把卵插入水生植物组织',
    '成虫在空中追踪和截获飞虫',
    '成虫在池塘网络和周边陆地间移动',
    '水生幼虫伏击水生猎物',
    '末龄幼虫爬出水面羽化',
  ],
  tags: [
    '蜻蜓目',
    '蜓科',
    '淡水幼虫',
    '空中捕食',
    '不完全变态',
    '内生式产卵',
    '池塘网络',
    '广布种',
    'IUCN无危',
  ],
  summary:
    '横跨非洲、欧洲和亚洲的大型蜓科捕食者，幼虫生活在植被丰富的淡水中，雄虫常以蓝腹绿胸在池面巡逻。',
  description:
    '皇帝蜻蜓是蜓科伟蜓属的大型蜻蜓，典型成虫体长约 78 毫米，英国识别资料记录翅展约 10.5 厘米。成熟雄虫常见苹果绿色胸部、蓝色腹部和连续深色背线，雌虫多为绿色或蓝绿色，但颜色存在重叠。雌虫把卵插入水生植物组织，水生幼虫用可伸出的捕捉面罩猎取多种无脊椎动物，末龄幼虫爬上挺水植物后直接羽化，没有蛹期。成虫在空中捕食飞虫，雄虫可巡逻池面，雌虫会进入周边陆地和池塘网络。本种分布于非洲、欧洲、阿拉伯半岛、西南亚、中亚和印度部分地区；全球 IUCN 评估为无危且趋势稳定，欧洲区域种群正在增加。局地水体破坏、污染和一次性清除全部水草仍会损害繁殖地。',
  storySections: [
    {
      key: 'name-and-four-wings',
      label: '名字与谱系',
      title: '帝王之名属于现生蜻蜓，不是史前物种标签',
      body:
        '皇帝蜻蜓属于蜻蜓目、蜓科、伟蜓属。蜻蜓目代表现生有翅昆虫中较早分化的一支，成虫保留四片能分别控制的膜质翅；这不表示 Anax imperator 自远古起从未改变，也不应把它称为活化石。',
    },
    {
      key: 'blue-male-green-female',
      label: '颜色与识别',
      title: '蓝腹雄虫和绿腹雌虫，只是常见组合',
      body:
        '成熟雄虫常见蓝色腹部和连续深色背线，雌虫常见绿色或蓝绿色腹部与较宽褐黑背线，但雌虫也可能发蓝。苹果绿色胸部、黄色翅前缘、相接复眼、四翅和六足需要一起进入识别。',
    },
    {
      key: 'two-worlds-no-pupa',
      label: '水陆生活史',
      title: '水下多次蜕皮，爬上芦苇直接成为成虫',
      body:
        '雌虫把卵插入水生植物组织，幼虫在水中捕食和生长。末龄幼虫爬出水面，成虫从背部裂口羽化，留下空蜕。过程中没有蛹或茧；发育需一年、两年或更短取决于地区和条件。',
    },
    {
      key: 'underwater-ballistic-mask',
      label: '幼虫捕食',
      title: '捕捉面罩先追求命中，再追求速度',
      body:
        '幼虫把折叠在头下的捕捉面罩迅速伸向猎物。法国 12 只幼虫实验测得 0.03 至 0.25 m/s，温度改变速度，捕获成功更受准确性影响。这个实验区间不能写成全球最高攻击速度。',
    },
    {
      key: 'territory-and-oviposition',
      label: '池面行为',
      title: '雄虫巡池，雌虫独自把卵藏进植物',
      body:
        '雄虫可在池面巡逻并驱赶闯入者，领地使用却会随个体和时段变化。雌虫通常独自在浮叶植物上产卵，把卵插入组织而非排成水面卵串。成虫还能离开水边，在池塘网络间觅食和移动。',
    },
    {
      key: 'range-expansion-and-pond-network',
      label: '分布与保护',
      title: '全球无危，不等于每一口繁殖池都安全',
      body:
        '本种横跨非洲、欧洲和亚洲，欧洲北缘仍在扩展；全球和欧洲评估均为无危。局地排水、污染和彻底清除水草仍会让一处繁殖地失效。保护池塘网络、水质、植被与周边陆地，比只统计飞过的成虫更有意义。',
    },
  ],
  keyFacts: [
    '当前接受学名是 Anax imperator Leach, 1815。',
    '英国识别资料给出的典型成虫体长为 78 mm、翅展为 10.5 cm；二者都不是全球极值。',
    '成虫有四片独立膜质翅、六足、短触角和在头顶大范围相接的复眼。',
    '雄虫常见蓝腹，雌虫常见绿或蓝绿色腹部，但颜色有重叠。',
    '雌虫通常单独把卵插入浮叶或其他水生植物组织。',
    '生命周期为卵、水生幼虫和成虫，属于不完全变态，没有蛹期。',
    'British Dragonfly Society 给出的末龄幼虫长度为 45 至 56 mm。',
    '英国种群的末龄幼虫可发生兼性滞育；发育周期随地区和条件变化。',
    '水生幼虫捕食多种水生无脊椎动物，受控实验还证明可捕食蝌蚪。',
    '成虫在空中截获飞虫，再用咀嚼式口器处理。',
    '诺曼底池塘网络研究中，一只雌虫在距释放池 1,902 m 处被探测到；这不是最大扩散距离。',
    '分布横跨欧洲、非洲和亚洲，欧洲北缘近几十年向北扩展。',
    '全球 IUCN 为 LC、趋势稳定；欧洲区域同为 LC、趋势增长。',
    'CITES 当前未列入本种，不能据此推断地方无保护要求。',
  ],
  threats: [
    '局地湿地排水、填埋和水体重塑会移除繁殖水体',
    '水污染会改变幼虫和猎物群落，全球效应尚未量化',
    '一次性清除全部水生植物会损失产卵、隐蔽和羽化结构',
    '孤立水体和周边陆地结构简化可能削弱池塘网络功能',
    '干旱和水体提前干涸可能缩短局地幼虫可用水期',
  ],
  conservationActions: [
    '保护开阔水面与沉水、浮叶、挺水植物组成的多层结构',
    '控制过度遮阴并保留一部分稳固的挺水羽化基质',
    '分区分年清淤和修剪，避免同时清空整个池塘网络',
    '按当地法规控制污水、营养盐和农药径流',
    '保留池塘之间可供成虫觅食、休息和移动的陆地结构',
    '用蜕壳、幼虫和产卵行为监测繁殖，不只统计飞行成虫',
    '定期复核 IUCN、CITES、区域红色名录和地方湿地规定',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'typical-adult-length',
      label: '典型成虫体长',
      value: '78',
      unit: 'mm',
      note:
        'British Dragonfly Society 的识别值，不宣称全球平均、最小值或最大值。',
    },
    {
      key: 'uk-wingspan',
      label: '英国识别翅展',
      value: '10.5',
      unit: 'cm',
      note:
        'Natural History Museum 的英国物种值，不宣称全球极值。',
    },
    {
      key: 'final-instar-length',
      label: '末龄幼虫',
      value: '45–56',
      unit: 'mm',
      note:
        'British Dragonfly Society 物种页范围，只指末龄幼虫。',
    },
    {
      key: 'tracked-female-distance',
      label: '单只雌虫追踪距离',
      value: '1,902',
      unit: 'm',
      note:
        'Minot et al. 2021 诺曼底研究中的一只雌虫观测，不是最大扩散或迁徙距离。',
    },
  ],
  media: {
    image:
      './images/species/emperor-dragonfly/01-adult-male-pond-portrait.webp',
    alt: '一只绿胸蓝腹的皇帝蜻蜓成熟雄虫完整停在阳光池塘边的芦苇上',
    focalPoint: { x: 0.7, y: 0.5 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image:
          './images/species/emperor-dragonfly/02-female-pondweed-oviposition.webp',
        alt: '一只绿腹皇帝蜻蜓雌虫独自在浮叶植物组织中产卵',
        title: '藏进植物组织的卵',
        caption:
          '雌虫通常单独进行内生式产卵；卵位于植物组织内，不形成水面裸露卵串。',
        focalPoint: { x: 0.5, y: 0.54 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/emperor-dragonfly/03-vegetated-pond-patrol.webp',
        alt: '一只皇帝蜻蜓雄虫在开阔且水生植被丰富的池塘上低空巡逻',
        title: '植被池塘上的巡逻',
        caption:
          '雄虫可在繁殖水体上巡逻；一张飞行图不能证明领地持续时间或当地繁殖成功。',
        focalPoint: { x: 0.52, y: 0.44 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/emperor-dragonfly/04-aerial-prey-interception.webp',
        alt: '一只皇帝蜻蜓雄虫在空中接近一只尚未接触的摇蚊',
        title: '接触之前的空中拦截',
        caption:
          '成虫用六足形成捕虫篮截获飞虫；画面停在接触前，不暗示摇蚊占野外食谱的固定比例。',
        focalPoint: { x: 0.5, y: 0.46 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/emperor-dragonfly/05-underwater-final-instar-larva.webp',
        alt: '一只褐绿色皇帝蜻蜓末龄幼虫伏在浅水池塘的沉水植物间',
        title: '水下的末龄捕食者',
        caption:
          '末龄幼虫有六足和短翅芽，没有成虫翅或豆娘式外露尾鳃；捕捉面罩折叠在头下。',
        focalPoint: { x: 0.5, y: 0.54 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
      {
        image:
          './images/species/emperor-dragonfly/06-emergence-exuvia-on-reed.webp',
        alt: '一个空的皇帝蜻蜓末龄幼虫蜕壳抓附在水面上方的芦苇上',
        title: '羽化留下的空蜕',
        caption:
          '裂开的胸背和空壳记录一次完成的羽化；画面中没有活体成虫、蛹或茧。',
        focalPoint: { x: 0.5, y: 0.52 },
        credit: 'Fauna Atlas · AI 生成原创图像',
      },
    ],
  },
  sources: EMPEROR_DRAGONFLY_SOURCES,
  publishedAt: EMPEROR_DRAGONFLY_CONTENT_DATE,
  updatedAt: EMPEROR_DRAGONFLY_CONTENT_DATE,
}
```

## 测试守卫建议

### 身份、名称与分类

- `getSpeciesBySlug('emperor-dragonfly')` 返回 `id === 'species-anax-imperator'`。
- `names.zh`、`names.en` 和 `scientificName` 严格等于“皇帝蜻蜓”、“Emperor Dragonfly”和 `Anax imperator`。
- `aliases` 至少包含“帝王蜻蜓”、“帝王伟蜓”和 “Blue Emperor”。
- 分类路径严格为 `Animalia / Arthropoda / Insecta / Odonata / Aeshnidae / Anax`，中文路径严格为动物界、节肢动物门、昆虫纲、蜻蜓目、蜓科、伟蜓属。
- 不把 Leach, 1815 拼进 `scientificName` 字段。

### 保护状态与范围

- `conservation.code === 'LC'` 且 `conservation.trend === 'stable'`。
- `conservation.assessedYear === 2015`，且不含 `criteria`；测试说明 SANBI 评估头为 2015 年 3 月，IUCN 于 2016 年发布。
- 欧洲 `increasing` 只出现在叙述和关键事实，不覆盖全球结构化趋势。
- 描述保留“CITES 当前未列入”，但不把 CITES 状态塞入 IUCN 字段。
- `distribution.realms` 同时含 `freshwater` 和 `terrestrial`，`continents` 严格含欧洲、非洲和亚洲。
- `range` 明确列出非洲、欧洲、阿拉伯半岛、西南亚、中亚和印度部分地区，并写国家列表非完整名录。
- `center` 严格为 `{ lat: 32, lng: 20 }`，测试说明它只是展示焦点。

### 生境、测量与食性

- 生境严格为四项，只有“阳光充足且植被丰富的池塘和湖泊”设置 `isPrimary: true`。
- 三项生境为 `freshwater`，一项池岸景观为 `terrestrial`。
- `measurements.length.typical === 78`、单位为 `mm`；`measurements.wingspan.typical === 10.5`、单位为 `cm`。
- 两个测量注释都声明地区识别口径，不使用 `min` 或 `max` 伪造范围。
- `metrics` 保持空对象，不出现由典型值复制的 `adultLengthCm` 或 `wingspanCm`。
- `diet.types` 严格包含 `carnivore` 和 `insectivore`。
- 食物同时覆盖水生昆虫幼体、小型水生无脊椎动物、条件性蝌蚪猎物和成年虫的飞行昆虫。
- 描述不能把实验室家蝇、蝌蚪或某一粪便研究中的猎物写成全球固定主要比例。

### 生活史、行为与故事

- 关键事实必须写卵、水生幼虫、成虫和“没有蛹期”。
- 产卵文案必须是雌虫单独把卵插入植物组织，不出现串联产卵或水面裸露卵串。
- 末龄幼虫长度保留 45 至 56 mm，不能复制成所有幼虫的体长。
- `featuredStats` 严格四项；1,902 m 的注释必须写单只雌虫、诺曼底研究和非最大距离。
- `storySections` 长度严格为 6，key 集合严格为：

  ```ts
  [
    'name-and-four-wings',
    'blue-male-green-female',
    'two-worlds-no-pupa',
    'underwater-ballistic-mask',
    'territory-and-oviposition',
    'range-expansion-and-pond-network',
  ];
  ```

- 每段 `label`、`title` 和 `body` 非空，key 不重复。
- 文案不出现“活化石”“自史前未改变”“固定两年水生期”或“雌虫一定绿色”。

### 来源与日期

- `EMPEROR_DRAGONFLY_SOURCES` 的 URL 全部唯一，`accessedAt` 全部为 `2026-08-28`。
- 来源数组覆盖 `taxonomy`、`distribution`、`ecology`、`conservation` 和 `general` 五类。
- 至少保留 GBIF、NCBI、World Odonata List、全球 IUCN、欧洲 IUCN、CITES、BDS、NHM、Minot 生物测量、Corbet 滞育、Cayrou 生活史、Minot 移动、Cloarec 食性、Quenta 捕食和 Josten 口器来源。
- `publishedAt` 与 `updatedAt` 均为 `2026-08-28`。

### 媒体与静态资产

- 封面加 gallery 共 6 张，路径和顺序严格为：

  ```text
  01-adult-male-pond-portrait.webp
  02-female-pondweed-oviposition.webp
  03-vegetated-pond-patrol.webp
  04-aerial-prey-interception.webp
  05-underwater-final-instar-larva.webp
  06-emergence-exuvia-on-reed.webp
  ```

- 封面 `focalPoint.x` 约为 0.7，其余焦点均在 0 到 1。
- 六张图的 `alt` 非空；五张 gallery 图的 `title` 与 `caption` 非空。
- 第 04 张替代文字和 caption 必须保留“尚未接触”或等价限定。
- 第 06 张必须写“空蜕”，不得声称画面中有活体成虫。
- 源 PNG、运行时 WebP 和 README 中的 01 至 06 编号及主题一一对应。

## 静态资产与 README 验证

### 目录约定

```text
src/assets/source/species/emperor-dragonfly/
├── 01-adult-male-pond-portrait-source.png
├── 02-female-pondweed-oviposition-source.png
├── 03-vegetated-pond-patrol-source.png
├── 04-aerial-prey-interception-source.png
├── 05-underwater-final-instar-larva-source.png
├── 06-emergence-exuvia-on-reed-source.png
└── README.md

public/images/species/emperor-dragonfly/
├── 01-adult-male-pond-portrait.webp
├── 02-female-pondweed-oviposition.webp
├── 03-vegetated-pond-patrol.webp
├── 04-aerial-prey-interception.webp
├── 05-underwater-final-instar-larva.webp
└── 06-emergence-exuvia-on-reed.webp
```

物种 README 应记录六个场景的用途、生成提示词、来源边界、已知限制、压缩步骤和运行时对应文件。`src/assets/source/README.md` 的索引还应新增该物种条目。README 不应声称 AI 图像本身是观察记录或分类凭证。

### 可执行验证

1. 用项目现有静态资产测试确认六个文件都可解码。
2. 用 ImageMagick `identify` 或等效非浏览器工具确认每张运行时图是 1536×1024、WebP、sRGB 且无 alpha。
3. 对六个源 PNG 和六个运行时 WebP 分别计算 SHA-256；每组六个哈希都应唯一。
4. 检查 PNG 和 WebP 编号、主题及数量严格一一对应。
5. 运行项目测试、类型检查和构建；不启动 GUI 或无头浏览器。

建议的只读检查：

```bash
identify -format '%f %m %wx%h %[colorspace] %[channels]\n' \
  public/images/species/emperor-dragonfly/*.webp

shasum -a 256 \
  src/assets/source/species/emperor-dragonfly/*-source.png \
  public/images/species/emperor-dragonfly/*.webp
```

### 人工科学复核

- 01：只有一只成熟雄虫，四翅、六足、绿胸、蓝腹、深色背线和黄色 costa 清楚。
- 02：只有一只雌虫，无雄虫；产卵器接触植物组织，卵不可见，无裸露卵串。
- 03：只有一只雄虫低空巡逻，水体同时有开阔水面和多层植物，不画成群迁徙或打斗。
- 04：只有一只雄虫和一只摇蚊，二者尚未接触，六足尚未夹住猎物。
- 05：只有一只末龄幼虫，六足、翅芽、无成虫翅、无蛹、无三片外露尾鳃。
- 06：只有一个空蜕，胸背裂开、壳内无活体；不出现成虫、蛹、茧或第二个蜕壳。

## 分类计数与 TODO 变更

完整集成数据、测试和六张运行时图片后：

- 物种档案总数从 66 变为 67。
- 昆虫纲后代物种数从 4 变为 5。
- 新分类单元 `Odonata`、`Aeshnidae` 和 `Anax` 各有 1 个后代物种档案。
- `docs/todo.md` 顶部总数改为 67，昆虫纲改为 5，剩余从 12 改为 11。
- 皇帝蜻蜓条目改为完成；下一个未完成动物应为家蚕 `Bombyx mori`。

只写完本研究文件不代表 TODO 已完成。必须等 `Species` 对象、来源常量、六张图、源图 README、目录索引、测试、类型检查和构建全部通过后再勾选。

## 事实护栏与常见误解

1. **全球稳定与欧洲增长不是冲突。** 结构化字段代表全球，欧洲趋势只作区域说明。
2. **评估年与发布年分开。** SANBI 导入页的评估头为 2015 年 3 月，IUCN 发布版本为 2016；`assessedYear` 填 2015。
3. **无危不等于局地无风险。** 池塘被排干、污染或彻底清除水草时，当地繁殖仍会失败。
4. **CITES 未列入不等于没有地方规则。**
5. **地图焦点不是分布中心。** `{ lat: 32, lng: 20 }` 只控制首屏。
6. **国家数组不是完整名录。** 缺少某国不代表没有记录。
7. **幼期与成虫跨两个生态域。** 页面应同时标为淡水和陆地。
8. **四片翅各自独立。** 不画成一对翅、甲虫鞘翅或蝴蝶式鳞翅。
9. **六足都长在胸部。** 腹部没有腿，也没有螫针。
10. **蓝雄绿雌是常见型，不是绝对规则。** 雌虫可能发蓝。
11. **黄色 costa 是实用识别线索。** 不把整片翅染黄。
12. **雌虫通常单独内生式产卵。** 卵在植物组织内，不是水面卵串。
13. **生命周期没有蛹或茧。** 末龄幼虫直接羽化为成虫。
14. **45 至 56 mm 只指末龄幼虫。**
15. **一年或两年发育是区域口径。** 温度、纬度和水体条件会改变周期。
16. **105 天与 30 天来自约 23°C 的滞育实验。** 不能当全球幼虫期。
17. **0.03 至 0.25 m/s 来自 12 只法国幼虫和大型溞实验。** 不能当最大攻击速度。
18. **蝌蚪捕食有实验依据，不代表全球主要猎物。**
19. **固定家蝇摄食说明口器机制，不代表野外家蝇比例。**
20. **1,902 m 是一只雌虫的追踪观测。** 不写成最大扩散或迁徙距离。
21. **欧洲样本中的高基因流不能外推非洲和亚洲。**
22. **雄虫会巡逻，但并非每只全天独占整个池塘。**
23. **飞过水面不等于当地繁殖。** 蜕壳、幼虫和产卵行为提供更强证据。
24. **蜻蜓目是早分化有翅昆虫谱系，不代表本种是活化石。**
25. **“欧洲最大”需要区域和比较口径。** 页面只写大型蜻蜓，不写全球最大。
