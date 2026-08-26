# 喙头蜥（*Sphenodon punctatus*）完整档案研究

- 检索与核验日期：2026-08-26
- 推荐展示中文名：**喙头蜥**
- 接受英文名：**Tuatara**
- 接受学名：***Sphenodon punctatus* (Gray, 1842)**
- 使用范围：为 `src/data/species.ts` 新增完整 `Species` 记录，并约束 1 张封面与 5 张详情图的科学内容
- 分类口径：The Reptile Database；中国国家濒科委的 CITES 中文附录用于中文目、科、属名
- 保护口径：IUCN 2019 全球评估（2019-2 发布）；新西兰 2025 NZTCS 评估（2026 年发布）另列，不能混成一个等级
- 数字边界：2.5 亿年是谱系分化估计，不是现生物种或个体年龄；32 是自然残存岛屿数，约 10 个恢复种群和约 10 万只总个体都是 2020 年论文快照

文中每个事实段末尾均列出直接来源。除另行注明外，所有链接的访问日期均为 **2026-08-26**；同一日期也写入文末推荐 `SpeciesSource[]`。

## 结论摘要

1. 当前接受一个现生种 ***Sphenodon punctatus* (Gray, 1842)**，属于爬行纲、喙头目、楔齿蜥科、楔齿蜥属。它不是蜥蜴，不应放入有鳞目。喙头目也常写作 Sphenodontia，但仓库分类路径宜采用 The Reptile Database 和 CITES 使用的 **Rhynchocephalia**。[The Reptile Database](https://reptile-database.reptarium.cz/front.front/species?genus=sphenodon&species=punctatus) [中国国家濒科委 2026 CITES 附录](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf)
2. 2010 年遗传学重评不支持把北兄弟岛种群继续列作独立种 ***Sphenodon guntheri***。该名字应放在分类史中；北兄弟岛种群仍有清楚的遗传独特性，应作为独立保护管理单元保存，不能因并种而随意混群。[Hay et al. 2010](https://doi.org/10.1007/s10592-009-9952-7) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
3. IUCN 当前全球记录为 **LC，无危**，种群趋势 **Unknown，未知**；直接评估 PDF 给出的评估日期为 2019 年 2 月 25 日，结果收录于 2019-2 版。仓库字段应写 `conservation('LC', 'unknown', 2019)`，不传 `criteria`。[IUCN 2019 assessment](https://www.iucnredlist.org/species/pdf/120191347.pdf) [IUCN DOI](https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T131735762A120191347.en)
4. 最新国家级结论不同。新西兰 2025 NZTCS 评估把本种列为 **At Risk – Uncommon**，限定词为 **CI（Climate Impact）、CD（Conservation Dependent）、RR（Range Restricted）、Rel（Relict）**，相对上一轮为 No change。DOC 物种网页尚未同步这次分类调整；当前国家等级以 NZTCS 50 为准。[Hitchmough et al. 2026, NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf)
5. IUCN 评估列约 **55,000 只成熟个体**，2020 年基因组论文则汇总约 **100,000 只总个体**。两个数字的年龄口径和资料时间不同，不能相加，也不应把 10 万只写成成熟个体数。建议不填 `metrics.estimatedMatureIndividuals`。[IUCN 2019 assessment](https://www.iucnredlist.org/species/pdf/120191347.pdf) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
6. 自然残存种群来自新西兰东北部北岛外海与 Cook Strait / Marlborough Sounds 一带的 **32 座岛屿**。2020 年论文另记约 10 个经迁地恢复建立的岛屿或大陆围栏保护区种群。范围文案必须区分“自然残存地”和“恢复地”。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)
7. 主要生境是有松软可掘土壤的海岸森林和灌丛，常与海鸟繁殖群落形成镶嵌。海鸟输入养分，提高无脊椎动物与小型蜥蜴等猎物密度；向阳、开阔、土壤保持湿润的坡面是产卵微生境。realm 只写 `terrestrial`。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)
8. 成年雄性约 0.5 米，体重可达 1.5 千克，雌性通常更小。雄性颈背和尾部的软质三角皮褶更发达，可在求偶或争斗时竖起；这不是恐龙式骨板。喙头蜥没有外耳孔，颌缘“牙齿”是不会更换的骨性突起。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara)
9. 它是行为性体温调节者，论文汇总的最适体温为 **16–21°C**。成体多在夜间活动，也会白天晒太阳；幼体常改用日间和低矮树栖活动来减少被成体捕食的风险。不能写成严格夜行、恒温或冬眠。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9) [DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)
10. 所谓“第三只眼”是头顶的头顶眼或松果体复合体感光器官。单只新生个体的组织学研究观察到类角膜结构、退化晶状体和简单视网膜；后续比较基因组研究发现非视觉视蛋白，并指出该器官不能形成图像。幼体头顶可见淡色斑点，数月后被鳞片和色素覆盖。它不是成年体外露的眼球，也不是喙头蜥独有的神秘视觉器官。[Ung and Molteno 2004](https://doi.org/10.1111/j.1442-9071.2004.00912.x) [Romero and de Souza 2025](https://doi.org/10.1093/gbe/evaf058) [Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara)
11. 巢温决定后代性别，较高温度产生更多雄性，较低温度产生更多雌性。恒温实验得到的 1:1 枢纽温度在北兄弟岛约 21.6°C、Takapourewa / Stephens Island 约 22.0°C；该值随种群和实验条件变化，不能把 22°C 写成全种不可变开关。[Mitchell et al. 2006](https://doi.org/10.1186/1742-9994-3-9)
12. 野生雌性并非每年产卵。Takapourewa 研究汇总的平均窝间隔约 4 年、平均 9–10 枚卵；自然孵化需 11–16 个月。窝间隔、窝卵数和枢纽温度均有岛间差异，产品正文必须保留地点限定。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [DOC husbandry manual](https://www.doc.govt.nz/Documents/science-and-technical/TSOP21.pdf)
13. “活化石”只能作为历史性比喻。约 2.5 亿年前分开的是喙头蜥谱系与有鳞目谱系；基因组仍显示持续的转座元件活动、祖征与衍征并存，以及中等且有间断的分子演化。推荐标签写“喙头目唯一现生种”或“演化遗存”，不写“2 亿年完全没有进化”。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
14. DOC 公众资料估计平均寿命约 60 年、可达约 100 年；基因组论文说可能超过 100 年。骨组织年龄研究能可靠辨认的年轮只到约 35 年，并只支持潜在寿命超过 60 年，因此 100 年级别应写作可能值，不应作为精确的野外最大纪录或 `lifespanYears` 范围。[Castanet et al. 1988](https://www.jstor.org/stable/3892195) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

## 名称、分类与物种边界

### 接受分类

| 分类阶元 | 学名 | 中文名 | 依据 |
| --- | --- | --- | --- |
| 界 | Animalia | 动物界 | 项目通用节点 |
| 门 | Chordata | 脊索动物门 | 项目通用节点 |
| 纲 | Reptilia | 爬行纲 | The Reptile Database；CITES |
| 目 | Rhynchocephalia | 喙头目 | The Reptile Database；中国国家濒科委 |
| 科 | Sphenodontidae | 楔齿蜥科 | The Reptile Database；中国国家濒科委 |
| 属 | Sphenodon | 楔齿蜥属 | The Reptile Database；中国国家濒科委 |
| 种 | Sphenodon punctatus | 喙头蜥 | The Reptile Database；仓库 TODO 采用的展示名 |

[The Reptile Database](https://reptile-database.reptarium.cz/front.front/species?genus=sphenodon&species=punctatus) 接受 ***Sphenodon punctatus* (Gray, 1842)**，列出 Higher Taxa 为 Sphenodontidae、Rhynchocephalia，没有接受种下单元。[中国国家濒科委 2026 CITES 中文附录](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf) 使用“喙头目、楔齿蜥科、楔齿蜥属所有种”。项目展示名继续采用 `docs/todo.md` 的“喙头蜥”，搜索别名可加入“楔齿蜥”。

推荐名称字段：

```ts
names: {
  zh: '喙头蜥',
  en: 'Tuatara',
  aliases: ['楔齿蜥'],
}
```

“Tuatara”来自 te reo Māori，资料通常解释为“背上的峰”或“有棘的背”，指雄性背部可竖起的三角皮褶。皮褶不是硬质棘板，也不应用这个词源推导任何超出形态的文化叙事。[DOC atlas](https://www.doc.govt.nz/our-work/reptiles-and-frogs-distribution/atlas/atlas-details/?SpeciesID=13232) [Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara)

### 一个现生种，多个管理单元

The Reptile Database 把 ***Sphenodon guntheri* Buller, 1877** 与 ***S. punctatus reischeki*** 列入 *S. punctatus* 的异名，不接受现生亚种。Hay 等使用线粒体和核遗传资料重评 26 个种群，认为现存地理群体不足以支持两个物种；DOC 随后采用一个物种的口径。[The Reptile Database](https://reptile-database.reptarium.cz/front.front/species?genus=sphenodon&species=punctatus) [Hay et al. 2010](https://doi.org/10.1007/s10592-009-9952-7) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)

并种不等于遗传差异消失。2020 年全基因组研究发现北部、Takapourewa 与北兄弟岛之间存在强种群结构；北兄弟岛种群高度近交并经历严重瓶颈，却仍保有 8,480 个该研究识别的私有等位基因。论文支持同物异名处理，同时明确建议把北兄弟岛种群继续作为独立保护单元。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

产品边界：

- 不设置亚种字段；
- 不把 *S. guntheri* 写成第二个现生物种；
- 可以在分类故事中写“曾被拆分”；
- 保护行动必须保留地理遗传单元，不能提议任意跨岛混群。

## 全球与国家保护状态

### IUCN 全球字段

当前直接评估记录：

- 等级：Least Concern，LC，无危；
- 趋势：Unknown，未知；
- 评估日期：2019-02-25；
- 发布版本：2019-2；
- 成熟个体估计：约 55,000；
- criteria：空，LC 不写受胁标准。

[IUCN 2019 assessment PDF](https://www.iucnredlist.org/species/pdf/120191347.pdf) [IUCN DOI](https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T131735762A120191347.en)

推荐：

```ts
conservation: conservation('LC', 'unknown', 2019)
```

发布年不能代替 schema 要求的评估年。趋势未知也不能被 DOC 某些恢复种群的增长，或 NZTCS 表中的 “No change” 改成 stable；“No change”指国家等级相对上一轮未变，不是 IUCN 的全球趋势字段。

### 新西兰 2025 NZTCS

2026 年发布的 NZTCS 50 明确声明取代以前的爬行动物国家清单。表 8 将 *S. punctatus* 放在 At Risk 的 Uncommon 类，限定词如下：

| 代码 | 含义 | 档案解释 |
| --- | --- | --- |
| CI | Climate Impact | 巢温性别决定和低温生态使气候风险需要持续评估 |
| CD | Conservation Dependent | 安全状态依赖捕食者清除、围栏和持续生物安全 |
| RR | Range Restricted | 自然残存地集中于有限离岸岛屿 |
| Rel | Relict | 现分布只覆盖历史范围的一小部分 |

[Hitchmough et al. 2026, NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf)

DOC 物种网页尚未同步 2025 年分类。该页面的体型、食性和威胁信息可用，但国家等级必须采用最新评估。产品以 IUCN 字段驱动全球徽章，并在故事或标签中另写“新西兰 2025：At Risk – Uncommon（CI、CD、RR、Rel）”。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf)

### 数量口径

IUCN 的约 55,000 是成熟个体估计。2020 年基因组论文图 1 汇总约 100,000 只总个体，并把 32 个自然残存岛屿与约 10 个迁地恢复种群画在同一时点。两者不是同一次同步普查，也不是同一年龄口径。[IUCN 2019 assessment](https://www.iucnredlist.org/species/pdf/120191347.pdf) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

推荐省略：

```ts
metrics: {
  // estimatedMatureIndividuals 不填；单点估计和总个体快照不适合拼成范围
}
```

若正文需要数字，写：“IUCN 2019 估计约 55,000 只成熟个体；2020 年论文汇总约 100,000 只总个体，定义与时间不同。”

### CITES 与国内保护

2026 年 3 月 5 日生效的 CITES 新版附录仍把 ***Sphenodon* spp.** 列入附录 I，因此当前唯一现生种 *S. punctatus* 在列。附录 I 代表国际贸易须受特别严格管制、通常只在例外情况下获准，不等于任何情形下都绝对禁止移动。[中国国家濒科委 2026 CITES 附录](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf) [CITES glossary](https://cites.org/eng/node/12644)

DOC 记录本种 1895 年已获得法律保护，是新西兰最早受保护的本土动物之一。这个年份适合写保护史，不应写成 CITES 列入年份。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)

## 分布与生境

### 原生范围、自然残存地与恢复地

亚化石证据显示喙头蜥过去遍布新西兰大陆。自然残存种群目前集中在北岛东北海岸从 Northland 到 Bay of Plenty 的离岸岛屿，以及 Cook Strait / Marlborough Sounds 一带岛屿。DOC 和 2020 年论文均使用 32 个自然残存岛屿的口径。[DOC atlas](https://www.doc.govt.nz/our-work/reptiles-and-frogs-distribution/atlas/atlas-details/?SpeciesID=13232) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

捕食者清除、人工孵化、幼体暂养和迁地放归又建立了岛屿及带防捕食围栏的大陆保护区种群。2020 年论文给出“约 10 个”恢复种群；这个数字是论文时点快照，不应包装成 2026 年实时总数。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9) [NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf)

推荐：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['大洋洲'],
  regions: [
    '北岛东北部离岸岛屿',
    'Cook Strait 与 Marlborough Sounds 岛屿',
    '迁地恢复的无捕食者岛屿与大陆围栏保护区',
  ],
  countries: ['新西兰'],
  endemicTo: ['新西兰'],
  range:
    '历史上遍布新西兰大陆；自然残存种群现限于北岛东北部外海和 Cook Strait / Marlborough Sounds 一带的 32 座岛屿，另有经迁地恢复建立的无捕食者岛屿及大陆围栏保护区种群。',
}
```

不设置单一 `center`。一个点无法同时表达北部离岛、Cook Strait 自然群体与多个恢复地。

### 三种 terrestrial 生境

DOC 恢复计划列出的有利条件包括海岸森林或灌丛、较开阔的林下层、可掘洞的松软土壤、较高湿度、无外来哺乳动物、丰富的无脊椎动物和小型脊椎动物，以及朝北、向阳、土壤保持湿润的筑巢地。海鸟殖民地还能通过营养输入提高土壤肥力和猎物丰度。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)

推荐：

1. **海岸森林与灌丛洞穴地**，`terrestrial`，`isPrimary: true`：林下较开阔、土壤松软，成体可挖洞或利用既有洞穴，植被提供遮蔽和温湿度缓冲。
2. **海鸟繁殖岛镶嵌生境**，`terrestrial`：海鸟洞穴、草地和灌丛相间；海鸟输入养分，间接增加无脊椎动物和小型蜥蜴等猎物。不能写成喙头蜥必须与海鸟同住一个洞。
3. **向阳筑巢坡面与林缘空地**，`terrestrial`：偏北、开阔、能获得太阳热量且下层土壤仍保持湿润，是雌性挖掘巢穴的关键繁殖微生境。

站立水体不是必要条件，且本种不以水域为主要生活空间，不能加入 `freshwater`。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)

## 体型、外形与牙列

### 推荐测量字段

DOC 当前物种页只给出成年雄性约 0.5 米、 fully grown 时可达 1.5 千克，没有提供可直接合并的全种成体最小值。历史 DOC atlas 另列雄性最大总长 610 毫米、最大 1,300 克，雌性很少超过 500 克，但该 atlas 已标注不再维护。产品应采用当前页的近似值，不把两个时代的最大值拼成成体范围。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [DOC atlas](https://www.doc.govt.nz/our-work/reptiles-and-frogs-distribution/atlas/atlas-details/?SpeciesID=13232)

```ts
measurements: {
  length: {
    typical: 0.5,
    unit: 'm',
    note: 'DOC 对 fully grown 成年雄性的近似全长；不是雌雄合并范围。',
  },
  weight: {
    max: 1.5,
    unit: 'kg',
    note: 'DOC 当前页给出的成年雄性可达值；雌性通常更小。',
  },
}
```

不建议填写 `metrics.adultLengthCm` 或 `metrics.adultMassKg`。schema 的二元组看似成体总体范围，而可靠来源提供的是雄性近似值和上限。

### 图像必须保留的外部特征

- 低伏而结实的躯干，较大的角形头部，短而有力的四肢和长粗、逐渐变细的尾；
- 细小颗粒状鳞片，常见橄榄绿、灰褐、棕色或局部橙红，带不规则浅色斑点；
- 从头后、颈背延至背部和尾部的三角形软皮褶，雄性更高，平时可伏下，展示时竖起；
- 侧位眼睛，不出现外耳孔；
- 趾端有爪，完整四肢图中每只可见足不得生成多余趾；
- 体态不是鬣蜥、巨蜥、鳄鱼或小型恐龙，不出现喉垂、角、骨板、鳄甲或分叉蛇舌。

[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [DOC atlas](https://www.doc.govt.nz/our-work/reptiles-and-frogs-distribution/atlas/atlas-details/?SpeciesID=13232) [Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara)

### 不是可替换的普通牙齿

喙头蜥下颌一排骨性齿突闭合时嵌入上颌两排之间的沟槽，颌骨还可前后运动形成剪切。Auckland Zoo 明确说明这些“牙齿”是颌骨延伸，磨损后不会替换；老年个体会转向较软的食物。准确文案是“颌缘骨性齿突”，不能画成蛇毒牙或哺乳动物式牙根，也不能写“不断换牙”。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara)

## 演化、体温与寿命

### 2.5 亿年是谱系节点

基因组系统发育估计喙头蜥谱系与蛇、蜥蜴所属有鳞目谱系约在 2.5 亿年前分开。喙头类在中生代曾广布且物种丰富，现只剩 *S. punctatus*。该数值描述两个谱系最后共同祖先的大致年代，不是本种从那时起以同一形态存在，更不是个体寿命。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

同一研究发现喙头蜥是其取样中分子演化最慢的鳞龙类，但也记录中等演化速率、间断式演化、近期仍活跃的转座元件，以及祖征与衍征并存。推荐说“古老谱系的唯一现生代表”或“系统发育遗存”；若保留“活化石”，必须紧接一句“并非停止进化”。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

### 低温活动不是恒温

喙头蜥依靠选择洞穴、阴影和日照位置调节体温。基因组论文汇总的最适体温为 16–21°C，称其为已研究爬行动物中最低的最适体温。DOC 公众页说持续高于 25°C 的恒温条件不利，但这不是“达到 25°C 即死亡”的硬阈值。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)

1998 年野外静息代谢实验在 10–15°C 测量个体；成年体在 13°C 的代谢率约等于同体型蜥蜴在相同 13°C 下的预期值。后续实验又显示，从 12°C 升至 30°C 时，耗氧、二氧化碳产生和蒸发失水至少增加 3.5 倍。证据支持低温适应和明显的温度效应，不支持“所有爬行动物中代谢最低”或无条件的“比蜥蜴代谢低”。[Thompson and Daugherty 1998](https://doi.org/10.1016/S1095-6433(97)00459-5) [Jarvie et al.](https://doi.org/10.1086/698495)

成年个体多在温暖、潮湿的夜间活动，也会白天晒太阳；寒冷时可留在洞中。幼体常日行和低矮树栖，可能降低与会捕食幼体的夜行成体相遇。档案应写“成体夜间为主、幼体活动节律不同”，不写整个物种严格夜行或冬眠。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

### 寿命证据的上限

DOC 面向公众的概括为平均约 60 年、可达约 100 年，并称持续生长到约 35 岁。IUCN 2019 直接评估给出的最大记录寿命为 91 年，同时注明最长时间受研究的个体仍然存活，真实寿命上限不清楚。1988 年骨组织年轮研究认为年轮大致按年形成，但指骨年轮信号较早停止，股骨也只清楚到约 35 年；研究据此和已知长期存活资料判断潜在寿命超过 60 年，不能用骨年轮精确验证百岁个体。[IUCN 2019 assessment](https://www.iucnredlist.org/species/pdf/120191347.pdf) [Castanet et al. 1988](https://www.jstor.org/stable/3892195) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)

2020 年论文写“可能超过 100 年”，并提出若干与长寿相关的候选基因，但作者要求进一步功能研究。产品可写“常被估计约 60 年，可能达到或超过 100 年；高龄年龄判定困难”，不写“确定活到 200 年”“不会衰老”或“已找到长寿基因开关”。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

因此省略：

```ts
metrics: {
  // lifespanYears 不填；约 60 年和约 100 年不是群体最小值与最大值
}
```

## 头顶眼、感觉与昼夜适应

Ung 与 Molteno 对一只新生喙头蜥的组织切片观察到类角膜结构、退化晶状体和简单视网膜。单一样本足以描述该标本的显微结构，却不能证明物种层面的视觉功能。Romero 与 de Souza 2025 年在喙头蜥及多种蜥蜴中比较非视觉视蛋白，并明确指出这种器官不能形成图像。它是感光器官，不是第三套成像视觉。[Ung and Molteno 2004](https://doi.org/10.1111/j.1442-9071.2004.00912.x) [Romero and de Souza 2025](https://doi.org/10.1093/gbe/evaf058)

幼体头顶可见一个浅色“parietal spot”，之后数月会被鳞片和色素盖住。成年个体图像不应画出外露眼球；幼体特写也只能给出皮下淡色圆斑。资料推测它参与日长或节律感知，但具体功能仍未完全解决，不能赋予方向判断、捕食者侦测或“看见过去未来”等生理能力。[Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara) [Romero and de Souza 2025](https://doi.org/10.1093/gbe/evaf058)

喙头蜥头顶眼并非独有。多种蜥蜴也保有头顶眼，2025 年研究正是通过喙头蜥和蜥蜴的比较分析非视觉视蛋白。产品卖点应是“发达、非成像的头顶感光器官”，不能写“地球上唯一有三只眼的动物”。[Romero and de Souza 2025](https://doi.org/10.1093/gbe/evaf058)

## 食性与行为

### 食性

DOC 汇总的主要猎物为甲虫、wētā、蚯蚓、千足虫和蜘蛛；也吃等足类、小型蜥蜴、海鸟蛋和雏鸟，偶尔捕食幼年同类。恢复计划强调小而会动的猎物，海鸟对喙头蜥的重要性还包括营养输入带来的间接猎物增益。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)

推荐：

```ts
diet: {
  types: ['carnivore', 'insectivore'],
  foods: [
    '甲虫和 wētā',
    '蜘蛛、千足虫与等足类',
    '蚯蚓和其他软体无脊椎动物',
    '小型蜥蜴',
    '海鸟蛋和雏鸟',
    '偶尔的幼年同类',
  ],
  description:
    '以夜行无脊椎动物为主的机会型捕食者，也取食小型蜥蜴、海鸟蛋与雏鸟，偶有同类相食；上下颌骨性齿突和前后剪切动作能处理坚硬几丁质猎物，磨损后不会换牙。',
}
```

不要加入果实、叶或种子来凑“杂食”。现有高可信来源只支持动物性食物。

### 活动、洞穴和社交边界

成年个体通常使用自己的洞穴或海鸟旧洞，主要夜间觅食，白天可晒太阳。雄性在交配季占据领域，用竖背褶、抬高身体、绕行、追逐或咬斗展示；聚集在高密度岛屿不等于合作捕猎或稳定群居。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)

推荐 `activity`：

```ts
activity: [
  '成体夜间活动为主，暖湿夜晚最活跃',
  '白天晒太阳并用洞穴缓冲温湿度',
  '幼体常日行并利用低矮植被或树干',
  '雄性繁殖季领域性明显，以背褶和姿态展示',
  '行为性体温调节，最适体温约 16–21°C',
]
```

## 繁殖与温度依赖性别决定

### 岛屿、性别与年份差异

最完整的长期资料来自 Takapourewa / Stephens Island。恢复计划记录雄性约在吻肛长 180 毫米时成熟，雌性约 13 岁、吻肛长约 170 毫米开始繁殖；CITES 周期审查用更宽松的“约 15 岁”。产品用“约 13–15 岁，种群和个体有差异”，不要把 Takapourewa 单点当全种定律。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [CITES periodic review](https://cites.org/sites/default/files/eng/com/ac/28/E-AC28-20-03-07.pdf)

Takapourewa 的交配多在 1–3 月，产卵在 10–12 月。野生雌性卵黄形成缓慢，平均约 4 年产一窝；平均窝卵数约 9–10。DOC 饲养手册显示明显岛间差异：Lady Alice Island 平均 7.9 枚、范围 5–13；Takapourewa 平均 9.4 枚、范围 1–18；北兄弟岛平均 6.5 枚、范围 4–8。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [DOC husbandry manual](https://www.doc.govt.nz/Documents/science-and-technical/TSOP21.pdf)

雌性在向阳土坡挖小巢，产下软壳卵后回填，并只守护数日。自然胚胎发育约 11–16 个月，较暖巢通常更早孵化；人工恒温可缩短时间，因此不能用圈养最快纪录替代野外孵化期。幼体最初数月更偏日行，一年内逐渐开始挖洞并转向夜行。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [DOC husbandry manual](https://www.doc.govt.nz/Documents/science-and-technical/TSOP21.pdf)

### 22°C 不是全种固定开关

Mitchell 等在 18–23°C 或 24°C 恒温下测试当时分别称为 *S. guntheri* 和 *S. punctatus* 的两个 Cook Strait 种群，均发现雌到雄的 Type IB 模式。北兄弟岛枢纽温度为 21.6°C，Takapourewa 为 22.0°C，两个反应曲线显著不同；北部种群资料更少，估计值还可能更高。作者认为野外结果支持这一雌到雄模式，但也说明实验资料尚不能完全排除 23–24°C 以上存在第二次性别转换。[Mitchell et al. 2006](https://doi.org/10.1186/1742-9994-3-9)

稳妥文案：

> 胚胎经历的巢温决定性别，较高温度产生更多雄性，较低温度产生更多雌性。约 22°C 是两个 Cook Strait 研究种群的近似枢纽，不是整个物种固定不变的开关。

北兄弟岛研究捕获 477 只个体，成体约 60% 为雄性，并用气候模型评估更暖巢温可能进一步偏雄。该结果来自一个 4 公顷隔离种群，适合说明风险机制，不应写成“所有喙头蜥种群已经 60% 为雄性”。[Mitchell et al. 2010](https://doi.org/10.1111/j.1365-2486.2009.01964.x)

图像中的巢建议恰好显示 **7 枚**软壳白卵。7 枚落在多个岛屿的自然范围内，但 caption 必须说明这是科学重建时点，不代表全种固定窝卵数、孵化成功数或后代性别。

## Māori 关系与保护史

喙头蜥是许多 Māori 群体重视的 taonga；具体 kaitiakitanga 与岛屿、iwi 和 hapū 的关系有关，不能把某一群体的叙事概括为全体 Māori 的统一信仰。2020 年基因组项目与对北部岛屿种群承担 kaitiakitanga 的 Ngātiwai 合作，并把获取、利益分享和数据责任纳入研究设计。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

Takapourewa 种群的 kaitiaki 是 Ngāti Koata；DOC 记录迁移到奥克兰展示机构的个体还通过正式交接把日常精神与文化照护责任交给 Ngāti Whātua Ōrākei。档案可据此说明现代保护依赖 iwi 参与，不能把这些关系改写成普通“利益相关者咨询”。[DOC conservation blog](https://blog.doc.govt.nz/2020/08/29/tuatara-tales-from-sealife-kelly-tarltons/)

“Tuatara”意指背部皮褶的 te reo Māori 名称，适合保留为英文展示名。DOC 记载 1895 年法律保护是本种现代保护史的早期节点；CITES 现将整个属列入附录 I。[DOC atlas](https://www.doc.govt.nz/our-work/reptiles-and-frogs-distribution/atlas/atlas-details/?SpeciesID=13232) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [中国国家濒科委 2026 CITES 附录](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf)

## 威胁与保护行动

### 证据支持的威胁

1. **外来鼠类捕食和招募失败**：kiore 会吃卵和小幼体，成年个体即使暂时存活，种群也可能因长期缺少补充而消失。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)
2. **鼠类再次入侵**：船只、装备和非法登陆可把鼠带回无捕食者岛屿；生物安全失守可能迅速逆转数十年恢复成果。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)
3. **小鼠改变食物网**：小鼠取食种子和小型无脊椎动物，降低喙头蜥猎物和岛屿生态系统质量；清除大型捕食者后也不能忽略小鼠。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf)
4. **火灾、踩踏和生境改变**：小岛缓冲能力弱，火、非法登陆踩踏和植被改变会同时损伤洞穴、食物与向阳巢地。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)
5. **气候变暖与性别偏斜**：增温可改变巢温和孵化时间，并因雌到雄型温度依赖性别决定提高雄性比例；风险大小依种群、巢址和行为调节能力而变。[Mitchell et al. 2006](https://doi.org/10.1186/1742-9994-3-9) [Mitchell et al. 2010](https://doi.org/10.1111/j.1365-2486.2009.01964.x)
6. **低遗传多样性与强种群结构**：多个岛屿内部多样性低，北兄弟岛经历严重瓶颈；孤立群体不能依靠自然基因流恢复。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
7. **非法捕捉与贸易需求**：远离大陆降低风险但没有消除盗捕；本种从 1895 年起受国内保护，整个属受 CITES 附录 I 管制。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/) [中国国家濒科委 2026 CITES 附录](https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf)

### 对应保护行动

- 在自然岛屿、恢复岛屿和大陆围栏保护区清除或持续压制鼠类及其他外来哺乳动物；
- 对船只、行李、食品、建筑材料和科研装备执行严格检疫，监测鼠类再入侵并准备快速响应；
- 保护海岸森林、灌丛、海鸟群落、松软洞穴土壤和向阳湿润巢地，控制火源与非法踩踏；
- 长期监测成体、幼体招募、巢温、孵化成功、性别比和疾病，不用成体数量掩盖招募失败；
- 依地理遗传结构管理种源，北兄弟岛继续独立管理，任何混群或迁地前都做遗传与疾病风险评估；
- 在需要时使用人工孵化、幼体暂养和迁地建立保障种群，同时记录巢温和目标性别，避免把圈养加速生长当默认方案；
- 评估遮阴、巢址管理或向较冷地点迁移等气候适应措施，并按种群数据决定，不设全国统一温度阈值；
- 与相关 iwi、hapū 和 kaitiaki 共同决定研究、取样、数据使用、迁地和展示，延续获取与利益分享责任；
- 执行 Wildlife Act 与 CITES 附录 I 管制，打击非法捕捉和国际贸易。

上述行动对应 NZTCS 的 CD、CI、RR 和 Rel 四项限定词，也与 DOC 恢复计划、2020 年种群基因组和温度性别研究一致。[NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf) [DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)

## 推荐关键事实与数字

1. 喙头蜥是喙头目唯一现生种，不是蜥蜴，也不是恐龙。[The Reptile Database](https://reptile-database.reptarium.cz/front.front/species?genus=sphenodon&species=punctatus) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
2. 喙头蜥谱系与有鳞目谱系约在 2.5 亿年前分开；这是谱系节点，不是本种年龄。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
3. 自然残存种群分布于 32 座离岸岛屿；2020 年另有约 10 个迁地恢复的岛屿或大陆保护区种群。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
4. 2020 年论文汇总约 10 万只总个体；IUCN 2019 估计约 5.5 万只成熟个体，两个口径不能合并。[IUCN 2019 assessment](https://www.iucnredlist.org/species/pdf/120191347.pdf) [Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9)
5. 成年雄性约 0.5 米，体重可达 1.5 千克；雌性通常更小。[DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)
6. 最适体温约 16–21°C，成体夜间为主但也白天晒太阳。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9) [DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)
7. 新生个体头顶眼的组织切片显示退化晶状体和简单视网膜；比较基因组资料支持其感光但不能形成图像。[Ung and Molteno 2004](https://doi.org/10.1111/j.1442-9071.2004.00912.x) [Romero and de Souza 2025](https://doi.org/10.1093/gbe/evaf058)
8. 下颌一排骨性齿突嵌入上颌两排之间，并用前后颌运动剪切食物；磨损后不会换牙。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [Auckland Zoo](https://www.aucklandzoo.co.nz/animals/tuatara)
9. Takapourewa 野生雌性平均约 4 年产一窝，平均 9–10 枚；岛间差异明显。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf) [DOC husbandry manual](https://www.doc.govt.nz/Documents/science-and-technical/TSOP21.pdf)
10. 自然孵化约 11–16 个月，属于爬行动物中很长的胚胎发育期。[DOC recovery plan](https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf)
11. 较暖巢温产生更多雄性，较冷产生更多雌性；约 22°C 只是两个 Cook Strait 研究种群的近似枢纽。[Mitchell et al. 2006](https://doi.org/10.1186/1742-9994-3-9)
12. DOC 估计寿命平均约 60 年、可达约 100 年；高龄个体难以精确测龄，不能把 100 年当严格最大值。[Castanet et al. 1988](https://www.jstor.org/stable/3892195) [DOC Tuatara](https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/)
13. IUCN 为 LC、趋势未知；新西兰 2025 国家评估为 At Risk – Uncommon，且保护依赖、受气候影响、范围受限、属于遗存分布。[IUCN 2019 assessment](https://www.iucnredlist.org/species/pdf/120191347.pdf) [NZTCS 50](https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf)
14. 喙头蜥是 Māori taonga；具体研究与迁地保护必须尊重相关 iwi、hapū 的 kaitiakitanga。[Gemmell et al. 2020](https://www.nature.com/articles/s41586-020-2561-9) [DOC conservation blog](https://blog.doc.govt.nz/2020/08/29/tuatara-tales-from-sealife-kelly-tarltons/)

## 不应写入档案的无限定说法

- 不写“蜥蜴”“古蜥蜴”或“恐龙后代”；它与蜥蜴同属鳞龙类，但属于独立的喙头目。
- 不写“有两个现生种”；*S. guntheri* 是历史分类名，北兄弟岛保留管理单元地位。
- 不把 IUCN LC 改成 At Risk，也不把 NZTCS At Risk – Uncommon 改成 IUCN 等级。
- 不把 NZTCS 的 No change 写成全球种群 stable；IUCN 趋势是 unknown。
- 不把约 10 万只总个体写成成熟个体，不与 5.5 万只成熟个体相加。
- 不把 32 写成 2026 年所有野外地点总数；它指自然残存岛屿，恢复种群另算。
- 不写“2.5 亿年没有变化”“活了 2.5 亿年”或“比恐龙更古老所以没有进化”。
- 不画或写成硬质恐龙背板；背部“棘”是可伏可竖的软质皮褶。
- 不在成年体头顶画一只外露眼球；头顶眼不能形成图像，幼体也只见淡色皮下斑。
- 不写“唯一有第三只眼的动物”或赋予超自然视觉；多种蜥蜴也有头顶眼。
- 不写“牙齿终生更新”；齿突是颌骨延伸，磨损后不替换。
- 不写“严格夜行”或“冬眠”；成体会日间晒太阳，幼体常日行、低矮树栖。
- 不写“22°C 以下全雌、以上全雄”的全种硬阈值；枢纽和过渡区随种群及孵化条件变化。
- 不写“每年产 9–10 枚”；Takapourewa 平均约 4 年一窝，窝卵数有岛间和个体差异。
- 不把人工恒温约 6 个月孵化写成自然孵化期；野外约 11–16 个月。
- 不写“确定能活 200 年”“不会衰老”或“长寿基因已经证明机制”；百岁级寿命仍是近似或可能值。
- 不把气候风险写成所有种群已经无法产生雌性；现有证据支持风险机制和局地雄性偏斜，不支持全国统一结局。
- 不把所有 Māori 对喙头蜥的关系概括成一种信仰；使用具体 iwi、地点和 kaitiakitanga 关系。
- 不把 CITES 附录 I 简化成任何国际移动都绝对禁止；其含义是特别严格管制并只在例外情况下许可。

## 研究阶段的六图候选方案

以下内容记录生成前的候选构图，不是最终资源清单。实际生成时放弃了幼体头顶斑和可见巢卵两幅高误读风险画面，改为夜间接近 wētā 与不露卵的覆土场景；监测图也收敛为一名巡护员和一个隧道状装置。最终文件名、提示词、观察结果与产品图注以[图像审计](../../src/assets/source/species/tuatara/README.md)为准，下列候选路径不得再作为运行时资源契约。

### 统一约束

- 全部 1536 × 1024，3:2 横图；写实自然史摄影感，不加文字、图标、标签、品牌或水印。
- 每张以一只 *Sphenodon punctatus* 为主，除巢图和科研人员外不出现第二只动物；生境图不必展示海鸟本体。
- 体态低伏结实，头部大而角形，四肢短壮，尾长而粗后渐细；皮肤灰褐、橄榄绿或棕色，带浅色斑点。
- 背褶是低矮三角软皮褶，不是鬣蜥高帆、鳄鱼甲片或恐龙骨板；不出现喉垂、鼻角、颊部大鳞或叉舌。
- 不显示外耳孔；成年体不显示第三只外露眼球。
- 完整足可见时避免多趾、融合趾或缺趾；每只可见足保持五个有爪趾，但构图不为展示趾数而扭曲关节。
- 不出现笼养玻璃箱、宠物抚摸、实验室白大褂、成群游客、鼠与喙头蜥同框或血腥捕食。

### 01 封面：海岸灌丛中的成年雄性

- 文件：`01-coastal-scrub-adult-male-portrait-source.png` → `01-coastal-scrub-adult-male-portrait.webp`
- 场景：凉湿的新西兰海岸森林与灌丛林缘，苔藓、蕨类、裸土和低矮本土灌木；晨后柔光，不是热带雨林。
- 主体：一只完整成年雄性位于画面右侧，朝左，头和眼清楚；橄榄灰褐斑驳，体态低伏，雄性背褶适度竖起。
- 必须：全身和尾尖基本可见，无外耳孔，背褶连续但柔软。
- 避免：鬣蜥喉垂、恐龙站姿、鲜绿色热带蜥蜴、夸张骨刺。

### 02 雌性：无外耳孔与低背褶

- 文件：`02-adult-female-field-marks-source.png` → `02-adult-female-field-marks.webp`
- 场景：林下落叶与苔藓覆盖的平缓地面，漫射日光。
- 主体：一只成年雌性完整侧身站立，身形较雄性小，背褶低矮伏下，灰褐与橄榄斑点形成保护色。
- 必须：头侧无外耳孔，四肢和长尾完整；侧位眼和颌缘轮廓清楚。
- 避免：用腹部膨大或卵外露来刻板标示雌性，避免把低背褶画成完全没有背部皮褶。

### 03 生境：海鸟岛的洞穴镶嵌

- 文件：`03-seabird-island-burrow-habitat-source.png` → `03-seabird-island-burrow-habitat.webp`
- 场景：宽景展示海岸森林、灌丛、草地林缘、松软土壤和数个空洞口；地面有落叶、苔藓和海鸟殖民地造成的肥沃感，但不出现可识别海鸟。
- 主体：一只较小的成年喙头蜥位于中右侧洞口附近，环境占画面大部。
- 必须：地形能同时解释洞穴、晒太阳空地和植被遮蔽。
- 避免：沙漠、裸岩海滩、积雪高山、海水中游泳、洞穴内挤着喙头蜥与海鸟。

### 04 幼体：日间与头顶淡色斑

- 文件：`04-hatchling-parietal-spot-source.png` → `04-hatchling-parietal-spot.webp`
- 场景：白天，一只幼体停在低矮苔藓木段上，背景为虚化的林缘草本和蕨类。
- 主体：三分之二侧上方近景，头顶可见一个细小、扁平、皮下淡色圆斑；幼体体形纤细、尾长、眼睛正常。
- 必须：caption 说明这是头顶感光器官在幼体皮下的外部提示，不是成像眼球。
- 避免：头顶凸起、眼睑、瞳孔、眼白或发光效果；不把它画成三眼怪物。

### 05 繁殖：向阳巢穴与七枚软壳卵

- 文件：`05-sunny-nest-seven-eggs-source.png` → `05-sunny-nest-seven-eggs.webp`
- 场景：朝阳林缘坡面，一只雌性在浅挖土巢旁，巢内恰好七枚乳白色、椭圆、略带柔软质感的卵清楚可数。
- 主体：雌性不压住卵，前肢接近回填动作；巢土下层湿润，表面受阳光照射。
- 必须：画面是科学重建，caption 说明七枚不代表固定窝卵数或最终孵化成功数。
- 避免：硬壳鸟蛋光泽、圆形龟蛋、雏体破壳、亲子照、雄性共同护巢、超过或少于七枚清楚可见卵。

### 06 保护：无接触的种群与生物安全监测

- 文件：`06-predator-free-sanctuary-monitoring-source.png` → `06-predator-free-sanctuary-monitoring.webp`
- 场景：无捕食者岛屿或大陆围栏保护区的凉湿林缘，一只喙头蜥在洞口前；远后方恰好两名穿低调户外服的研究人员。
- 动作：一人用小型手持天线或望远观察器记录个体，一人在记录板上填写数据；旁边只有一个封闭的生物安全检查箱，不触碰动物。
- 必须：人与动物保持距离，表现长期监测、围栏或岛屿生物安全，不伪造具体 DOC 标识。
- 避免：抱持、抓尾、注射、游客围观、敞开的运输箱、鼠夹夹到动物、任何机构 logo。

## 推荐的物种专用 `SpeciesSource[]`

```ts
const TUATARA_SOURCE_DATE = '2026-08-26' as const;
const TUATARA_CONTENT_DATE = '2026-08-26' as const;

const TUATARA_SOURCES = [
  {
    title: 'IUCN Red List: Sphenodon punctatus (2019 assessment)',
    url: 'https://doi.org/10.2305/IUCN.UK.2019-2.RLTS.T131735762A120191347.en',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand DOC: Conservation status of reptiles in Aotearoa New Zealand, 2025',
    url: 'https://www.doc.govt.nz/globalassets/documents/science-and-technical/nztcs50.pdf',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'China CITES Scientific Authority: 2026 CITES appendices Chinese edition',
    url: 'https://www.cites.org.cn/citesgy/fl/202604/P020260401624252070602.pdf',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'The Reptile Database: Sphenodon punctatus',
    url: 'https://reptile-database.reptarium.cz/front.front/species?genus=sphenodon&species=punctatus',
    kind: 'taxonomy',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Hay et al. 2010: Genetic diversity and taxonomy, reassessment of tuatara species designation',
    url: 'https://doi.org/10.1007/s10592-009-9952-7',
    kind: 'taxonomy',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Gemmell et al. 2020: The tuatara genome reveals ancient features of amniote evolution',
    url: 'https://www.nature.com/articles/s41586-020-2561-9',
    kind: 'general',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand DOC: Tuatara species page',
    url: 'https://www.doc.govt.nz/nature/native-animals/reptiles-and-frogs/tuatara/',
    kind: 'general',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand DOC: Tuatara Recovery Plan 2001-2011',
    url: 'https://www.doc.govt.nz/globalassets/documents/science-and-technical/tsrp47.pdf',
    kind: 'distribution',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'New Zealand DOC: Tuatara captive management plan and husbandry manual',
    url: 'https://www.doc.govt.nz/Documents/science-and-technical/TSOP21.pdf',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Mitchell et al. 2006: Temperature-dependent sex determination in tuatara',
    url: 'https://doi.org/10.1186/1742-9994-3-9',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Mitchell et al. 2010: Climate warming, sex ratios and management on North Brother Island',
    url: 'https://doi.org/10.1111/j.1365-2486.2009.01964.x',
    kind: 'conservation',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Thompson and Daugherty 1998: Metabolism of tuatara',
    url: 'https://doi.org/10.1016/S1095-6433(97)00459-5',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Jarvie et al.: Warm-temperature effects on tuatara metabolism and water loss',
    url: 'https://doi.org/10.1086/698495',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Ung and Molteno 2004: Tuatara parietal-eye histology',
    url: 'https://doi.org/10.1111/j.1442-9071.2004.00912.x',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Romero and de Souza 2025: Pineal nonvisual opsins and the tuatara parietal eye',
    url: 'https://doi.org/10.1093/gbe/evaf058',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Castanet et al. 1988: Skeletochronological age and growth in tuatara',
    url: 'https://www.jstor.org/stable/3892195',
    kind: 'ecology',
    accessedAt: TUATARA_SOURCE_DATE,
  },
  {
    title: 'Auckland Zoo: Tuatara anatomy, parietal eye and life history',
    url: 'https://www.aucklandzoo.co.nz/animals/tuatara',
    kind: 'general',
    accessedAt: TUATARA_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 研究阶段的 `species.ts` 字段草案

正文、分类和保护字段用于实现参考；其中 `media` 是生成前草案，已经被实际资源与图像审计取代。最终 `focalPoint`、alt、caption 和文件路径以 `src/data/species.ts` 为准。

```ts
{
  id: 'species-sphenodon-punctatus',
  slug: 'tuatara',
  names: {
    zh: '喙头蜥',
    en: 'Tuatara',
    aliases: ['楔齿蜥'],
  },
  scientificName: 'Sphenodon punctatus',
  taxonomy: animalTaxonomy(
    taxon('Chordata', '脊索动物门'),
    taxon('Reptilia', '爬行纲'),
    taxon('Rhynchocephalia', '喙头目'),
    taxon('Sphenodontidae', '楔齿蜥科'),
    taxon('Sphenodon', '楔齿蜥属'),
  ),
  conservation: conservation('LC', 'unknown', 2019),
  distribution: {
    realms: ['terrestrial'],
    continents: ['大洋洲'],
    regions: [
      '北岛东北部离岸岛屿',
      'Cook Strait 与 Marlborough Sounds 岛屿',
      '迁地恢复的无捕食者岛屿与大陆围栏保护区',
    ],
    countries: ['新西兰'],
    endemicTo: ['新西兰'],
    range:
      '历史上遍布新西兰大陆；自然残存种群现限于北岛东北部外海和 Cook Strait / Marlborough Sounds 一带的 32 座岛屿，另有经迁地恢复建立的无捕食者岛屿及大陆围栏保护区种群。',
  },
  habitats: [
    {
      name: '海岸森林与灌丛洞穴地',
      realm: 'terrestrial',
      description:
        '林下较开阔、土壤松软，成体可挖洞或利用既有洞穴；植被和洞穴共同提供遮蔽与温湿度缓冲。',
      isPrimary: true,
    },
    {
      name: '海鸟繁殖岛镶嵌生境',
      realm: 'terrestrial',
      description:
        '海鸟洞穴、草地、森林和灌丛相间；海鸟输入养分，间接提高无脊椎动物与小型蜥蜴等猎物丰度。',
    },
    {
      name: '向阳筑巢坡面与林缘空地',
      realm: 'terrestrial',
      description:
        '偏北、开阔而能受日照，下层土壤仍保持湿润，是雌性挖掘巢穴和卵长期发育的关键繁殖微生境。',
    },
  ],
  measurements: {
    length: {
      typical: 0.5,
      unit: 'm',
      note: 'DOC 对 fully grown 成年雄性的近似全长；不是雌雄合并范围。',
    },
    weight: {
      max: 1.5,
      unit: 'kg',
      note: 'DOC 当前页给出的成年雄性可达值；雌性通常更小。',
    },
  },
  diet: {
    types: ['carnivore', 'insectivore'],
    foods: [
      '甲虫和 wētā',
      '蜘蛛、千足虫与等足类',
      '蚯蚓和其他软体无脊椎动物',
      '小型蜥蜴',
      '海鸟蛋和雏鸟',
      '偶尔的幼年同类',
    ],
    description:
      '以夜行无脊椎动物为主的机会型捕食者，也取食小型蜥蜴、海鸟蛋与雏鸟，偶有同类相食；上下颌骨性齿突和前后剪切动作能处理坚硬几丁质猎物，磨损后不会换牙。',
  },
  activity: [
    '成体夜间活动为主，暖湿夜晚最活跃',
    '白天晒太阳并用洞穴缓冲温湿度',
    '幼体常日行并利用低矮植被或树干',
    '雄性繁殖季领域性明显，以背褶和姿态展示',
    '行为性体温调节，最适体温约 16–21°C',
  ],
  tags: [
    '喙头目唯一现生种',
    '新西兰特有种',
    '演化遗存',
    '头顶感光器官',
    '低温适应',
    '温度依赖性别决定',
    'CITES 附录 I',
    '新西兰 At Risk – Uncommon',
  ],
  summary:
    '新西兰离岛与围栏保护区里的喙头目唯一现生种，以低温活动、头顶感光器官和漫长孵化期延续古老谱系。',
  description:
    '喙头蜥是新西兰特有的爬行动物，也是喙头目唯一现生种，与蜥蜴和蛇的谱系约在 2.5 亿年前分开。成年雄性约 0.5 米，背部软皮褶可在展示时竖起；没有外耳孔，颌缘骨性齿突磨损后不再替换。它适应 16–21°C 的低体温，成体多夜行而幼体常日行。IUCN 2019 评估为 LC、趋势未知，新西兰 2025 评估为 At Risk – Uncommon，种群仍依赖捕食者清除、生物安全、遗传单元保护和气候适应管理。',
  storySections: [
    {
      key: 'lineage',
      label: '演化位置',
      title: '古老谱系并没有停在 2.5 亿年前',
      body: '喙头蜥不是蜥蜴，而是喙头目唯一现生种。约 2.5 亿年表示它与有鳞目谱系分开的时间；基因组仍保留近期活动的重复序列和祖征、衍征组合，所以“活化石”只能是演化遗存的比喻。',
    },
    {
      key: 'cool-body',
      label: '低温生理',
      title: '十六至二十一摄氏度的行为性体温调节',
      body: '喙头蜥通过洞穴、阴影和日照位置调节体温，最适体温约 16–21°C。成体在暖湿夜晚最活跃，也会白天晒太阳；幼体常改用日间和低矮树栖活动，降低与会捕食幼体的成体相遇。',
    },
    {
      key: 'parietal-eye',
      label: '头顶感光',
      title: '有晶状体和简化视网膜，却不能形成图像',
      body: '所谓第三只眼是松果体复合体的头顶感光器官。幼体可见淡色皮下斑，之后被鳞片和色素覆盖；它表达非视觉视蛋白，但不是外露眼球，也不能像两只侧眼那样成像。',
    },
    {
      key: 'jaw-and-diet',
      label: '剪切牙列',
      title: '一排下颌齿突在两排上颌齿突之间滑动',
      body: '颌缘“牙齿”是不会替换的骨性突起，下颌还能前后运动，形成处理甲虫和 wētā 外骨骼的剪切。食谱以无脊椎动物为主，也包括小型蜥蜴、海鸟蛋和雏鸟，偶有同类相食。',
    },
    {
      key: 'reproduction',
      label: '漫长繁殖',
      title: '四年一窝和十六个月都要保留地点与条件',
      body: 'Takapourewa 雌性平均约四年产一窝、平均九至十枚，其他岛屿不同；自然孵化需 11–16 个月。较暖巢温产生更多雄性，约 22°C 只是两个 Cook Strait 种群的近似枢纽。',
    },
    {
      key: 'guardianship',
      label: '共同守护',
      title: '保护种群，也保护各岛屿的关系与差异',
      body: '喙头蜥是 Māori taonga。Ngātiwai 参与基因组项目并对北部种群承担 kaitiakitanga，Ngāti Koata 是 Takapourewa 种群的 kaitiaki；捕食者清除、迁地和遗传管理都应与相关 iwi、hapū 共同决定。',
    },
  ],
  keyFacts: [
    '喙头蜥是喙头目唯一现生种，不是蜥蜴，也不是恐龙。',
    '喙头蜥谱系与有鳞目谱系约在 2.5 亿年前分开；这个数字不是本种或个体年龄。',
    '自然残存种群位于 32 座离岸岛屿，2020 年另有约 10 个迁地恢复种群。',
    'IUCN 2019 评估为 LC、趋势未知；新西兰 2025 国家评估为 At Risk – Uncommon。',
    '成年雄性约 0.5 米、可达 1.5 千克，雄性软质背褶更高并能竖起。',
    '最适体温约 16–21°C；成体夜间为主，幼体常日行并利用低矮植被。',
    '头顶眼有晶状体和简化视网膜，能感光却不能形成图像。',
    '没有外耳孔；颌缘骨性齿突磨损后不会替换。',
    '下颌一排齿突嵌入上颌两排之间，前后颌运动产生剪切。',
    'Takapourewa 雌性平均约四年产一窝、平均九至十枚，但岛间差异明显。',
    '自然孵化约 11–16 个月，人工恒温的更短纪录不能替代野外周期。',
    '较高巢温产生更多雄性，较低巢温产生更多雌性；22°C 不是全种固定开关。',
    '寿命常估计约 60 年并可能达到或超过 100 年，高龄个体难以精确测龄。',
    '北兄弟岛不再被列作独立种，但仍应作为独立保护管理单元。',
  ],
  threats: [
    'kiore 及其他鼠类捕食卵和幼体，造成长期招募失败',
    '船只、装备和非法登陆导致外来哺乳动物再次入侵',
    '小鼠降低种子和无脊椎动物资源，改变岛屿食物网',
    '火灾、踩踏与植被改变破坏洞穴、觅食地和向阳巢地',
    '气候变暖改变巢温、孵化物候并可能造成雄性偏斜',
    '岛屿种群低遗传多样性、严重瓶颈和自然基因流缺失',
    '非法捕捉及收藏和国际贸易需求',
  ],
  conservationActions: [
    '清除或持续控制鼠类及其他外来哺乳动物，维持无捕食者岛屿和围栏保护区',
    '对船只、行李、食品、材料和科研装备执行严格生物安全并监测再入侵',
    '保护海岸森林、灌丛、海鸟群落、松软洞穴土壤和向阳湿润巢地',
    '长期监测数量、幼体招募、巢温、孵化成功、性别比、疾病和遗传多样性',
    '按地理遗传结构管理种源，北兄弟岛继续作为独立保护单元',
    '在需要时使用人工孵化、幼体暂养和审慎迁地建立保障种群',
    '按种群数据评估遮阴、巢址管理或向较冷地点迁移等气候适应措施',
    '与相关 iwi、hapū 和 kaitiaki 共同决定取样、数据使用、迁地与展示',
    '执行新西兰国内保护法与 CITES 附录 I 国际贸易管制',
  ],
  metrics: {},
  featuredStats: [
    {
      key: 'lineage-split',
      label: '与有鳞目谱系分开',
      value: '约 2.5 亿',
      unit: '年前',
      note: '基因组系统发育估计；不是现生物种或个体年龄',
    },
    {
      key: 'optimal-body-temperature',
      label: '最适体温',
      value: '16–21',
      unit: '°C',
      note: '行为性体温调节；持续高温不利，但不存在简单的 25°C 即死阈值',
    },
    {
      key: 'natural-incubation',
      label: '自然孵化期',
      value: '11–16',
      unit: '个月',
      note: '野外巢温会波动；人工恒温可更短',
    },
    {
      key: 'natural-refuge-islands',
      label: '自然残存岛屿',
      value: '32',
      unit: '座',
      note: '不含后来建立的迁地恢复种群；2020 年论文另记约 10 个恢复种群',
    },
  ],
  media: {
    image: './images/species/tuatara/01-coastal-scrub-adult-male-portrait.webp',
    alt: '凉湿新西兰海岸灌丛林缘，一只橄榄灰褐斑驳、软质背褶适度竖起的成年雄性喙头蜥完整朝左站立',
    focalPoint: { x: 0.7, y: 0.53 },
    credit: 'Fauna Atlas · AI 生成原创图像',
    gallery: [
      {
        image: './images/species/tuatara/02-adult-female-field-marks.webp',
        alt: '林下落叶和苔藓地面上，一只灰褐橄榄斑点、低矮背褶且头侧没有外耳孔的成年雌性喙头蜥完整侧身站立',
        title: '低背褶与无外耳孔',
        caption: '雌性通常比雄性小、背褶较低；无外耳孔是与多数蜥蜴区分的外部线索之一。',
        focalPoint: { x: 0.57, y: 0.56 },
      },
      {
        image: './images/species/tuatara/03-seabird-island-burrow-habitat.webp',
        alt: '海岸森林、灌丛、草地林缘与松软土洞形成宽景，一只小型喙头蜥停在中右侧空洞口附近',
        title: '海鸟岛上的洞穴镶嵌',
        caption: '海鸟殖民地通过营养输入提高土壤肥力与猎物丰度；洞穴、遮蔽地和向阳空地共同构成生境。',
        focalPoint: { x: 0.67, y: 0.65 },
      },
      {
        image: './images/species/tuatara/04-hatchling-parietal-spot.webp',
        alt: '白天苔藓木段上的幼年喙头蜥近景，头顶只有一个细小扁平的皮下淡色圆斑而没有外露第三眼球',
        title: '幼体头顶的感光斑',
        caption: '淡色斑提示皮下头顶眼的位置；该器官能感光但不能形成图像，数月后会被鳞片和色素覆盖。',
        focalPoint: { x: 0.48, y: 0.43 },
      },
      {
        image: './images/species/tuatara/05-sunny-nest-seven-eggs.webp',
        alt: '朝阳林缘湿润土巢旁的一只雌性喙头蜥，浅巢内恰好七枚乳白色椭圆软壳卵清楚可数',
        title: '漫长孵化从向阳土巢开始',
        caption: '七枚是落在自然范围内的重建时点，不代表全种固定窝卵数、孵化成功数或后代性别。',
        focalPoint: { x: 0.52, y: 0.61 },
      },
      {
        image: './images/species/tuatara/06-predator-free-sanctuary-monitoring.webp',
        alt: '无捕食者保护区林缘，一只喙头蜥停在洞口，两名研究人员在远处用手持天线和记录板进行无接触监测',
        title: '把招募、性别与再入侵一起监测',
        caption: '安全种群依赖持续生物安全、幼体招募和巢温性别比监测；画面不代表具体地点、机构或真实调查批次。',
        focalPoint: { x: 0.58, y: 0.6 },
      },
    ],
  },
  sources: TUATARA_SOURCES,
  featured: true,
  publishedAt: TUATARA_CONTENT_DATE,
  updatedAt: TUATARA_CONTENT_DATE,
}
```

## 实施后的图像口径

- 封面：`01-coastal-forest-adult-male-portrait.webp`，一只成年雄性与一个背景洞口；喉部皮肤形成明显褶皱，但产品文案不把它命名为诊断性喉垂。
- 雌性：`02-adult-female-field-marks.webp`，一只低伏个体；较低背褶只用于重建雌性外观，不能单凭该帧确认性别。
- 生境：`03-seabird-island-burrow-habitat.webp`，一只喙头蜥、海岸坡地和多个洞口；没有海鸟，也不判定洞穴由谁挖掘或是否共享。
- 觅食：`04-nocturnal-weta-foraging.webp`，一只喙头蜥接近一只 wētā；画面停在接触前，不证明捕获或食谱比例。
- 筑巢：`05-nesting-slope-female.webp`，一只雌性在扰动土壤旁覆土；没有可见卵，不能推出卵数、巢深、孵化期或后代性别。
- 监测：`06-predator-free-island-monitoring.webp`，一只喙头蜥、一名巡护员和一个黑色隧道状装置；不代表指定设备、标准流程、检测结果或无鼠状态。

六张发布图均为 1536 × 1024 WebP，并与同名 `*-source.png` 一一对应。没有一幅图显示成年外露第三眼；足部被地面或肢体遮挡的画面也不作为趾数解剖证据。

## 实施核对表

- ID 使用 `species-sphenodon-punctatus`，slug 和资源目录使用 `tuatara`。
- 中文名写“喙头蜥”，英文名写 Tuatara，alias 只加“楔齿蜥”。
- 分类路径为 Reptilia → Rhynchocephalia → Sphenodontidae → Sphenodon，不进入 Squamata。
- 保护字段写 `LC / unknown / 2019`，不出现 `criteria`；国家等级另写 2025 At Risk – Uncommon（CI、CD、RR、Rel）。
- `distribution.realms` 只写 `terrestrial`；32 座自然残存岛屿与迁地恢复种群分开。
- `measurements` 只保存雄性约 0.5 米和最大 1.5 千克的限定值；不填成体标准化 length、mass 范围。
- 不填 `estimatedMatureIndividuals` 或 `lifespanYears`；数量和寿命留在带定义说明的故事与关键事实。
- `diet.types` 使用 carnivore、insectivore，不加入 herbivore 或 omnivore。
- 恰好 6 个 `storySections`、4 个 `featuredStats`、1 张封面和 5 张 gallery。
- 六图不把背褶画作硬质恐龙背板，也不显示成年外露第三眼球；封面可见的喉部褶皱不解释为诊断性喉垂。
- 最终六图依次为成年雄性、成年雌性、洞穴生境、接近 wētā、无可见卵的覆土场景和一名巡护员的监测场景。
- 已按实际图像复核完整尾、背褶、足部遮挡、洞口、猎物间距、巢土、人员和装置数量，并据此修订 alt、caption 与 focalPoint；图像审计保留精确提示词和限制。
- 所有来源 URL 为 HTTPS，五种 `SourceKind` 均覆盖，访问日期统一为 2026-08-26。

## 仍需保留的不确定性

- IUCN 直接评估 PDF 给出 2019-02-25；schema 保存 2019。未来若 IUCN 重评，应同时更新等级、趋势、数量和年份，不能只改页面更新时间。
- IUCN 的约 55,000 只成熟个体与 2020 论文的约 100,000 只总个体来自不同定义和时点，当前没有可安全拼接的统一区间。
- DOC 公众页尚未同步 2025 分类；公众页其他自然史信息仍可使用，但国家等级以 NZTCS 50 的 At Risk – Uncommon 为准。
- 约 22°C 的枢纽温度来自两个 Cook Strait 种群的恒温实验。北部种群、自然日温波动和母体选巢行为会改变结果，不能外推为全种固定阈值。
- 百岁级寿命受到官方资料和基因组论文支持，但高龄个体精确测龄困难。档案应保留“约”“可能”，不设置严格最大寿命。
- “活化石”不是分类或生理事实。图文若使用，只能指喙头目唯一现生代表的遗存地位，并明确它持续演化。
