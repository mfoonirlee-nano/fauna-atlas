# 身边动物：十种昆虫

2026-10-15。接续现有 620 份档案，本批制作十份独立物种档案及每种一张封面、五张观察图。原清单的编号不变，完成后总数为 630；100 个身边动物选题累计完成 30，剩余 70。

## 学名、范围与命名

十个 GBIF strict match 均为 EXACT、ACCEPTED，且与现有目录没有重复；原始结果保留在 [taxonomy-match JSON](../../src/assets/source/todo-common-insect-ten-taxonomy-match.json)。GBIF 作为分类口径，不把出现记录数当作种群数量。

| 中文名 | 接受双名 | 接受名称与命名作者 | GBIF |
| --- | --- | --- | --- |
| 中华剑角蝗 | *Acrida cinerea* | Acrida cinerea (Thunberg, 1815) | [5099473](https://www.gbif.org/species/5099473) |
| 斑衣蜡蝉 | *Lycorma delicatula* | Lycorma delicatula (White, 1845) | [5157899](https://www.gbif.org/species/5157899) |
| 中华蝈螽 | *Gampsocleis sinensis* | Gampsocleis sinensis (Walker, 1869) | [1694565](https://www.gbif.org/species/1694565) |
| 亚洲细蟌 | *Ischnura asiatica* | Ischnura asiatica (Brauer, 1865) | [1423350](https://www.gbif.org/species/1423350) |
| 日本弓背蚁 | *Camponotus japonicus* | Camponotus japonicus Mayr, 1866 | [5034161](https://www.gbif.org/species/5034161) |
| 赭黄蜻蜓 | *Orthetrum testaceum* | Orthetrum testaceum (Burmeister, 1839) | [1428590](https://www.gbif.org/species/1428590) |
| 赤蜻 | *Crocothemis servilia* | Crocothemis servilia (Drury, 1773) | [1427734](https://www.gbif.org/species/1427734) |
| 黄蜻 | *Pantala flavescens* | Pantala flavescens (Fabricius, 1798) | [1427855](https://www.gbif.org/species/1427855) |
| 异色瓢虫 | *Harmonia axyridis* | Harmonia axyridis (Pallas, 1773) | [4989904](https://www.gbif.org/species/4989904) |
| 柑橘凤蝶 | *Papilio xuthus* | Papilio xuthus Linnaeus, 1767 | [1937819](https://www.gbif.org/species/1937819) |

清单原写“中华螽斯（Gampsocleis sinensis）”，按学名保留选题并改用名录中的“中华蝈螽”。Tettigonia chinensis 另为一种，不作同物异名。“蝈蝈”俗称不能把短翅的 Gampsocleis gratiosa 资料移植给长翅的 G. sinensis。Ischnura asiatica 沿用清单名“亚洲细蟌”，记录台湾用名“亚东细蟌”；TaiEOL 正文的旧作者写法与 GBIF 接受记录有差异，命名作者以 GBIF 为准。

## 内容证据与边界

- 中华剑角蝗：植物取食研究与河北、山东观察资料分别支持食性和地区记录；绿色、褐色及若虫形态不另计物种。不借一只个体推断蝗灾。
- 斑衣蜡蝉：前几个若虫龄期黑底白斑，末龄增加红色，成虫合翅与展翅外观不同，卵块另图。没有蛹期；美国月份与 2014 年地区首次记录不写成全球通则。
- 中华蝈螽：分类与翅长有明确文献，野外食谱比例未查实。diet.types 和 foods 留空；取食与鸣叫只以螽斯类共有行为作说明，图库相应注明范围。不补具体食量、发育天数或鸣声频率。
- 亚洲细蟌与三种蜻科：均为蜻蜓目，水生若虫与离水羽化分开说明。细蟌类三片叶状尾鳃与蜻科无外露叶状尾鳃作对照；幼体、细节与捕食情景不是本种标本鉴定证据。共同生活史依据 [British Dragonfly Society](https://british-dragonflies.org.uk/odonata/life-cycle-and-biology/)。成虫近缘种不能只凭蓝尾或红色身体鉴定。
- 日本弓背蚁：采用土中筑巢资料，英文 carpenter ant 不推导为吃木材。工蚁、无足幼虫、茧分开，巢室标为内部剖面重建。
- 黄蜻：全球宽分布与迁移研究分别引用；风场模型不是每只个体完成同一路线的追踪证据。临时积水场景不作为真实繁殖地点记录。
- 异色瓢虫：同种多色型、卵、幼虫、蛹、成虫分开；斑点不能表示年龄。亚洲原产与引入地区生态影响分开，不建议捕捉后异地放生。
- 柑橘凤蝶：芸香科叶片是幼虫食物，成蝶取花蜜；早龄鸟粪状与末龄绿色分开，眼状斑不是真眼。蛹色受环境影响，不用一张蛹图定义全部个体。

## 保护状态

亚洲细蟌、赭黄蜻蜓、赤蜻、黄蜻采用台湾生物多样性网络明确标作“国际红皮书”的 LC。未查实独立评估日期与全球趋势，保持年份缺省、trend unknown，测试记录相应有来源的例外；台湾地区日期和网页更新日期不代替全球评估日期。黄蜻 IUCN PDF 的检索摘录支持 LC，但原文读取返回 403，故不据此推断评估年或趋势。

另六种采用项目 NE 占位口径，表示本批未确认可引用的全球物种级评估，不声称从未被评估。不以农业害虫、园林天敌、地区常见或新加坡地区红皮书替代全球等级。

## 图片验收

每种保留六张 WebP。封面检查生成 PNG 原图与运行 WebP，图库分别检查源、运行联系图，记录最终提示、实际尺寸和 SHA-256。完整主体边界包含可见触角、足、翅与腹端，横向中心至少 60%；同一封面共用在 hero 和详情页。

首轮斑衣蜡蝉的末龄若虫、卵块误生成成虫，已重做；中华蝈螽长翅与触角留边不合要求的图片也重做。所有最终图片为 AI 科学情景重建；真实地点、连续成长记录和精确翅脉、足节不能由这些图片证明。

逐种记录在 `src/assets/source/species/<slug>/README.md`、`prompts.json` 与 `hero-acceptance.json`。每张运行封面解码后确认尺寸，匹配 cover-subjects 和唯一 original-covers 哈希 fixture。源 PNG 仅在验收完成后清理，工具生成目录保留。

九组视口为 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900；桌面另算内容增加 160px。移动端全图 contain，桌面最大化完整主体，六个透明度端点共用几何，边缘至少 24 CSS px。

未启动浏览器。静态几何与图片栏模拟不验证浏览器字体、完整页面排版或真实内容高度。

## 来源

### 中华剑角蝗

- [中华剑角蝗内共生菌研究：宿主食性背景](https://pmc.ncbi.nlm.nih.gov/articles/PMC3542064/)（ecology）
- [河北采集与植物纤维利用研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9147371/)（distribution）
- [山东野外生物学观察索引](https://agris.fao.org/search/en/providers/122431/records/6472510253aa8c89630609a4)（general）

### 斑衣蜡蝉

- [Penn State：斑衣蜡蝉识别、寄主与生活史](https://extension.psu.edu/spotted-lanternfly-management-guide)（ecology）

### 中华蝈螽

- [Orthoptera Species File：原组合与文献](https://orthoptera.speciesfile.org/otus/849694)（taxonomy）
- [台湾生物多样性网络：中华蝈螽](https://www.tbn.org.tw/taxa/c7c79e33-6e2c-4a0d-a457-900a8568e747)（general）
- [长翅中华蝈螽与短翅近缘种的比较](https://doi.org/10.11646/zootaxa.2780.1.4)（general）
- [四川华稿溪直翅目调查](https://www.faunajournal.com/vol2Issue1/Issue_feb_2015/2-2-37.1.pdf)（distribution）

### 亚洲细蟌

- [台湾生命大百科：亚东细蟌形态与栖地](https://taieol.tw/pages/108334/articles)（general）
- [NParks：蜻蜓目生活史与湿地观察](https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf)（ecology）
- [台湾生物多样性网络：国际红皮书等级](https://www.tbn.org.tw/taxa/db43a9f2-b585-4ffb-b0e8-70af5c18f438)（conservation）

### 日本弓背蚁

- [AntWiki：形态、土巢与原始命名文献](https://antwiki.org/wiki/Camponotus_japonicus)（general）
- [日本弓背蚁腺体化学研究：生态背景](https://pmc.ncbi.nlm.nih.gov/articles/PMC10380308/)（ecology）
- [JST：蚂蚁与蜜露研究介绍](https://sj.jst.go.jp/publications/media/2017sw.pdf)（ecology）

### 赭黄蜻蜓

- [NParks：赭黄蜻蜓形态与栖地](https://www.nparks.gov.sg/florafaunaweb/fauna/1/1/1196)（general）
- [NParks：蜻蜓目生活史](https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf)（ecology）
- [台湾生物多样性网络：国际红皮书等级](https://www.tbn.org.tw/taxa/4b1f5678-22ef-4262-895b-f60ca5df4b8d)（conservation）

### 赤蜻

- [NParks：赤蜻外形、分布与停栖行为](https://www.nparks.gov.sg/florafaunaweb/fauna/5/6/5611)（general）
- [NParks：蜻蜓目生活史](https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf)（ecology）
- [台湾生物多样性网络：国际红皮书等级](https://www.tbn.org.tw/taxa/58ba26ce-0821-49c8-bdc8-a60338406436)（conservation）

### 黄蜻

- [SANBI：黄蜻全球范围与地区评估边界](https://speciesstatus.sanbi.org/assessment/last-assessment/1680/)（distribution）
- [黄蜻迁移路径与风场模型研究](https://arxiv.org/abs/2206.11226)（ecology）
- [IUCN：黄蜻全球评估原文](https://pureportal.inbo.be/files/123966529/Pantala_flavescens.pdf)（conservation）
- [NParks：蜻蜓目生活史](https://www.nparks.gov.sg/docs/default-source/sbwr-wetlands-newsletter/wetlands-newsletter--vol-13-no-3-dec-2006.pdf)（general）
- [台湾生物多样性网络：国际红皮书等级](https://www.tbn.org.tw/taxa/a1b6a2c8-d224-4009-b22f-8e7f426300b6)（conservation）

### 异色瓢虫

- [UC IPM：异色瓢虫形态、生活史与食性](https://ipm.ucanr.edu/natural-enemies/multicolored-asian-lady-beetle/)（ecology）
- [UC ANR：原产范围与引入地区影响](https://ucanr.edu/blog/pests-urban-landscape/article/multicolored-asian-lady-beetle-bad)（distribution）

### 柑橘凤蝶

- [台湾生命大百科：柑橘凤蝶外形、分布与寄主](https://taieol.tw/pages/104327/articles)（general）
- [幼虫龄期伪装变化的原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3386895/)（ecology）
- [Notch 与 Delta 调节幼虫体色图案研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC7347997/)（ecology）
- [蛹保护色与环境条件研究](https://www.sciencedirect.com/science/article/pii/S0022191006000813)（ecology）

## 最终图像对照补充

柑橘凤蝶的两张成虫图在最终对照中发现翅纹偏向近缘种，使用内置 image_gen 及 Alpsdake 的 CC BY-SA 3.0 参考照片修正为本种的黑底浅色放射条纹；两张改编重建图按同协议分享，署名、参考链接与修改记录保留在物种图片 README、prompts.json 和图片 credit。图库保留卵、两龄期幼虫、蛹四张观察图。赭黄蜻蜓与赤蜻的雌雄合照、成虫与蜕皮图按最终可见内容修订图注，不声称刚羽化。

亚洲细蟌的属名用异痣蟌属，并记录亚东细蟌、东亚异痣蟌两个地区用名；中文属名核对[西江流域大型底栖无脊椎动物研究附表](https://www.biodiversity-science.net/fileup/1005-0094/SUPPL/supplFile_art_20240816155117.pdf)。

## 最终验证

- `npm run typecheck` 通过。
- `npm test` 完整通过，共 936 项检查，含分类与内容 233 项、630 种封面及轮播几何、交互、生产构建、部署子路径与资源预算检查。
- 十种各六张 WebP，共 60 张；实际解码均为 1536×1024，共 9,145,492 字节。完整主体中心最小为源宽的 66.31%。
- 十种共 160 组图片栏几何场景，涵盖九组视口及桌面内容增加 160px；六个透明度端点共用几何，至少保留 24 CSS px 间距。原图、运行图与静态图片栏模拟分别检查。
- 新增后页面 JavaScript 曾达到 551,643 字节，扩展共享目录的中文短语表容量至 1024，并同步碰撞保护和解码范围后为 545,033 字节，预算为 550,000。生产测试逐项对照全部 630 份浏览字段及分类链，完整物种资料继续独立加载。
- 清单 70 个待办、完成归档 30 项；目录共 630 种。60 张临时源 PNG 已在验收后从仓库清理；内置工具生成目录保留原始结果。`git diff --check` 通过。

静态模拟没有验证浏览器字体、完整页面排版或实际内容高度；按仓库约定未启动浏览器。
