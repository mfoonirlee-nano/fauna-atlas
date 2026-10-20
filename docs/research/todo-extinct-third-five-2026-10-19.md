# 第三批五种灭绝动物研究与验收记录

2026-10-19 核验资料，2026-10-20 完成 todo 的 E011–E015：小兔耳袋狸、南方豚足袋狸、卡罗来纳鹦鹉、拉布拉多鸭、白令鸬鹚。五份档案各配一张封面与五张观察图，动物目录从 710 增至 715。首次生成因额度返回 429；10 月 20 日重试后使用内置 image_gen 完成，未采用 CLI/API 回退。

## 分类口径

[GBIF 原始查询记录](../../src/assets/source/todo-extinct-third-five-taxonomy-match.json)保留五次响应：前四种返回种阶元、ACCEPTED、EXACT；`Urile perspicillatus` 返回 EXACT、SYNONYM，接受名为 `Phalacrocorax perspicillatus`（acceptedUsageKey 2481902）。不能把五次查询统称为接受名匹配。

白令鸬鹚草稿采用现代组合 `Urile perspicillatus (Pallas, 1811)`，依据 [2024 年馆藏原始研究](https://bioone.org/journals/bulletin-of-the-british-ornithologists-club/volume-144/issue-1/bboc.v144i1.2024.a2/Specimens-of-the-extinct-Spectacled-Cormorant-Urile-perspicillatus/10.25226/bboc.v144i1.2024.a2.pdf)，并以 [2026 年线粒体原始研究](https://link.springer.com/article/10.1186/s12862-026-02585-x)补充证据。后者于 2026-09-03 发布接受稿，研究者从两件遗骨获得完整线粒体基因组，支持归入 Urile；不再沿用“尚无分子样本”的旧说法。GBIF 与这一属级口径的差异需要在接入时保留说明。

| 编号 | 物种 | 目／科 | 末次记录与灭绝时间的限定 |
| --- | --- | --- | --- |
| E011 | 小兔耳袋狸 Macrotis leucura | 袋狸目／兔耳袋狸科 | 北领地 2026 年材料称部分地区似乎存活至 1960 年代；1967 年发现的是年代不明的头骨 |
| E012 | 南方豚足袋狸 Chaeropus ecaudatus | 袋狸目／豚足袋狸科 | 2019 年拆分后须限定本种；泛指豚足袋狸的“约 1950 年代”不能直接用作本种灭绝年 |
| E013 | 卡罗来纳鹦鹉 Conuropsis carolinensis | 鹦形目／鹦鹉科 | 1918 年为最后已知圈养个体死亡年，不等于精确的野外灭绝年 |
| E014 | 拉布拉多鸭 Camptorhynchus labradorius | 雁形目／鸭科 | 1875 年有留存标本记录；1878 年报道的残余标本后来遗失，现不能重新鉴定 |
| E015 | 白令鸬鹚 Urile perspicillatus | 鲣鸟目／鸬鹚科 | 最后确认报道来自 1840 年代；通常估计 1850 年代灭绝，保留估计措辞 |

## 物种证据与复原边界

### E011 小兔耳袋狸

北领地政府 [2026 年 3 月物种材料](https://nt.gov.au/_media/docs/environment/animals/threatened-animals/current/lesser-bilby.pdf)列为灭绝，描述灰褐色背部、较浅腹部、白尾、细长吻部及兔状大耳。材料记录沙丘和沙原环境、夜行与洞穴栖居；研究者掌握的生活史及胃内容物样本有限。西部历史分布主要来自原住民生态知识，部分地区似乎持续到 1960 年代。1967 年鹰巢中的头骨没有确定死亡年代，不能写作当年确认活体。

复原需保留白尾，避免套用大兔耳袋狸的黑白尾纹。外观可参考该文件的 MAGNT 标本照片；采食姿态与洞内活动属于场景推测，图注需说明。

### E012 南方豚足袋狸

[2019 年分类修订原始摘要](https://pubmed.ncbi.nlm.nih.gov/31716448/)将旧豚足袋狸分成 C. ecaudatus 与 C. yirratji，前者含两个亚种。[2020 年新模式标本论文](https://journals.australian.museum/travouillon-2020-rec-aust-mus-723-7780/)指定澳大利亚博物馆 PA422 为 C. ecaudatus 新模式标本；这项工作处理命名依据，没有发现存活动物。

PA422 的采集者与采集日期不明，标签地点仅为墨累河，见[原论文标本条目](https://media.australian.museum/media/dd/documents/1761_complete.d9fd937.pdf)。博物馆博客提及的 1857 年米尔杜拉附近材料不能直接套给 PA422。[2019 年研究团队说明](https://visit.museum.wa.gov.au/learn/news-stories/wa-and-uk-researchers-discover-new-species-extinct-australian-mammal)将豚足袋狸视为小型食草哺乳动物，同时指出两种牙齿不同、食性可能有别；草稿可保留植物性食物的概括，不指定南方种的草种与食物比例。

研究团队在[博物馆说明](https://australian.museum/blog/amri-news/a-new-type-of-pig-footed-bandicoot/)中描述细长四肢、大耳及功能趾减少：前足两枚、后足一枚主要承重趾，爪呈蹄状。说明中的约 1950 年代针对豚足袋狸泛称；拆分后不能移用为南方种的精确末年。复原保留长尾，原始命名标本缺尾不代表本种无尾；不把北方种更长的足部比例套入南方种。毛色与软组织细节仍需在生成前比对本种皮张，不能从新模式头骨推导。

### E013 卡罗来纳鹦鹉

[Smithsonian 图书馆说明](https://blog.library.si.edu/blog/2014/07/04/carolina-parakeet-a-splendor-of-beauty-gone-forever/)记载最后圈养个体于 1918 年死亡；本次正文访问受该站限制，搜索索引仍显示该句。使用可读的[原始历史记录数据论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC6019437/)交叉核实这一时间，并区分圈养死亡与不同可信度的后期野外报道。该研究整理 1564–1944 年文献和标本记录，数据时间上限不代表 1944 年存在经确认的活体。

[完整基因组原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9830951/)描述绿色身体、黄色头部、橙红色脸部及浅色喙。图集可采用这一外观，配长尾与林地场景；皮张与历史彩绘不能确定活体在所有光照下的色值。群体取食场景需要标为复原，避免把疾病假说写作已确定的单一灭绝原因。

### E014 拉布拉多鸭

Smithsonian [《美国国家博物馆公报》130，第 66 页](https://repository.si.edu/bitstreams/6d40137f-6042-4a9c-9c0f-d6365750bddd/download)区分 1875 年长岛留存标本与 1878 年 Elmira 报道：后者只余头颈，后来遗失，作者明确说明无法核验。采用“19 世纪后期灭绝”，另列两种证据，不把 1878 年写作无争议的最后个体死亡年。

Smithsonian 的[解剖原始研究](https://repository.si.edu/bitstreams/0ac3b3d9-37df-4d33-837d-813e93035e3d/download)描述成年雄鸟颊羽与喙部，提供软质喙缘、向末端稍宽的形态依据；[历史馆藏雄鸟图版](https://repository.si.edu/bitstreams/c59d450e-f8dc-4a91-bb6f-9bc13faf66c7/download)可供核对黑白分区。拟定图集以成年雄鸟为主，不能把雄鸟羽色用于雌鸟或幼鸟。食性、繁殖地与灭绝成因存在资料缺口，不复原确定的巢区或具体捕食过程。

### E015 白令鸬鹚

NHM 研究团队的[2024 年馆藏研究说明](https://www.nhm.ac.uk/discover/news/2024/march/rediscovering-worlds-largest-cormorant.html)记录六件皮张与九十余块骨骼、1840 年代最后确认报道，以及对飞行能力的争论。现生历史皮张来自科曼多尔群岛；日本更早的化石记录不能画成近代仍有该处分布。研究者对灭绝成因保留不确定性，狩猎与引入狐狸可写为可能参与的压力。

外形优先核对 2024 年原始论文的皮张与骨骼图版，保留大型鸬鹚体态和眼周裸皮；旧图中的颜色与饰羽受季节、制皮和画家处理影响。图集宜使用岸边站立、游泳或静态外观观察，避免用飞行镜头宣称能飞，也不写作确定不会飞。生成的外观模型不能称为真实馆藏照片。

## 图片与封面验收

30 张运行 WebP 均经实际解码，尺寸为 1536×1024，每种恰好六张。最终提示词、编辑提示词、编辑参考图 SHA-256、源 PNG 与运行 WebP SHA-256 记录于各物种目录。图片统一注明 AI 科学复原示意；模型不对应真实馆藏，双视图不表示雌雄或自然共处场景。

小兔耳袋狸首版长尾侵入左侧文字区，内置编辑整体缩放右移。南方豚足袋狸修订直立姿态和分叉蹄状后足，全身图改为低位四足姿态，前足两个功能趾、后足突出单个主要承重趾；头部观察图改为局部特写。其余三种封面首次生成通过。首次新增，无旧运行封面；初版候选和接受版的主体像素大小及运行大小分别记录在图片集 README。

最终源封面与运行封面分别经原分辨率检查，五套源图与五套运行图联系表分别检查。五种完整主体边界覆盖耳尖或喙、折叠翅缘、足部、尾尖及须缘，写入 cover-subjects.ts 与 original-covers.json，并绑定运行哈希。

各物种九档静态图片栏模拟使用运行 WebP 和当前 fitHeroSubject；几何计算另含桌面内容增高 160px 的情况，五种合计 80 组。settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 共用当前透明度动画几何，均保留至少 24 CSS px 的主体间距。逐帧记录见各物种 hero-acceptance.json；目视模拟未见主体截断。

按仓库要求未启动浏览器。静态几何和模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。

## 目录加载与验证

新增后动物页面 JavaScript 为 550,966 字节，超出原有 550,000 字节预算。将现有中文词组字典复用于共享分类名称文本，保留目录全部字段和按需加载的独立档案；复测动物页面为 548,932 字节，未提高预算。构建中的逐字段还原测试覆盖全部 715 种。

`npm test` 全部通过，包含分类与档案、文案来源记录、分类图谱、地理探索、715 种六图集及封面尺寸和哈希、轮播交互、图片查看、目录分页、微生物隔离及子路径构建预算检查。补充回归检查覆盖本批 EX 历史依据、无评估年份和当前代表坐标、1967 年头骨年龄不明、2019 年拆分与新模式日期、1918 年圈养记录、1878 年遗失标本及 Urile 分类采用差异。类型检查与 git diff --check 通过。

临时 PNG 验收后移除；每种保留六张 WebP。E011–E015 已勾选并移入完成归档，本轮累计完成 15 种，待制作 85 种。
