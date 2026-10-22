# 第十三批灭绝动物：E061–E065

2026-10-22 核验。依 todo 顺序收录滑齿龙、薄板龙、两种沧龙类及长颈龙。五份档案沿用 `Historical and fossil evidence` 与 EX，不填 IUCN 评估年份或当前活体坐标。时期指代表性化石记录，不表示精确灭绝时间。

| 编号 | 物种 | 资料与复原限定 |
| --- | --- | --- |
| E061 | 四鳍滑齿龙 *Liopleurodon ferox* | [NHM R3536](https://data.nhm.ac.uk/dataset/collection-specimens/resource/05ff2255-c38a-40c9-b657-4ccb55ab2feb/record/456993/1791795637995)、[图宾根大学馆藏](https://www.emuseum.uni-tuebingen.de/en/objects/39174/liopleurodon-ferox-reptilia-sauropterygia-plesiosauria)与[奥斯陆大学自然史博物馆](https://www.nhm.uio.no/kunnskapsunivers/paleontologi/forhistoriske-dyr/dinosaurer/samtidig/liopleurodon/)。头骨鉴定、身体比例与标本拼配会影响体长估计，不采用影视尺寸。中文沿用清单标签，不将“四鳍”称为 ferox 的词义。 |
| E062 | 宽尾薄板龙 *Elasmosaurus platyurus* | [Sachs 等2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3733804/)、[2024颈椎研究](https://www.mdpi.com/1424-2818/16/2/106)及[原研究作者科普](https://www.palaeontologyonline.com/?p=3465)。命名标本 ANSP 10081 保存72枚颈椎，其他身体结构缺失较多。鳍肢、躯干与软组织需参考同科近缘种，不将复原画面当成完整标本。 |
| E063 | 霍氏沧龙 *Mosasaurus hoffmannii* | [Street 与 Caldwell 重描述](https://doi.org/10.1017/S0016756816000236)、[NHM](https://www.nhm.ac.uk/discover/what-is-a-mosasaur.html)及[Schulp 等2024拼写讨论](https://repository.naturalis.nl/pub/800447/Schulp-2024-A-nomenclatural-note-on-Mosasaurus-hoffmanni-A.pdf)。后者主张 hoffmanni，本档案沿用 GBIF、NHM 与重描述研究的 hoffmannii，并记录前者为拼写别名；两者不计作两个物种。 |
| E064 | 普氏泰洛龙 *Tylosaurus proriger* | [Zietlow 等2026命名标本重描述](https://zenodo.org/records/20412622)、[Zietlow 2020头骨生长研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC7583613/)与[Smithsonian](https://www.si.edu/object/nmnhpaleobiology_3429206)。新研究比较命名标本 MCZ VPRA 4374，提醒讨论个体生长前应重查种级鉴定。不要将早期归入本种的全部标本用于同一生长序列，不用大吻端单独确定物种或年龄。 |
| E065 | 长颈龙 *Tanystropheus longobardicus* | [2019属级修订](https://palaeo-electronica.org/content/2019/2870-revision-of-tanystropheus)、[2020种级拆分](https://doi.org/10.1016/j.cub.2020.07.025)、[苏黎世大学研究说明](https://news.uzh.ch/en/articles/2020/Tanystropheus.html)及[2021分类研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC8101476/)。本档案只收录小型成熟种；旧资料中的大型个体已另立 T. hydroides，不把其头骨、体长和取食推断直接套用。本种三尖齿与小型带壳动物食性解释分别记录，图中不量取牙尖、颈椎或趾数。 |

[隆德大学保存的尾鳍原研究](https://portal.research.lu.se/en/publications/soft-tissue-preservation-in-a-fossil-marine-lizard-with-a-bilobed/)研究的是近缘属 Prognathodon。本批两种沧龙类的尾鳍以此作比较复原，不声称它们各自保存了完整皮膜；精确鳍缘、比例与颜色仍有限定。

## 分类与文案

[GBIF／PBDB原始查询](../../src/assets/source/todo-extinct-thirteenth-five-taxonomy.json)保留查询日期、URL和响应，[采用表](../../src/assets/source/todo-extinct-thirteenth-five-adopted-taxonomy.json)保留最终界门科属及来源。

- GBIF 五种均匹配目标学名，但 Tylosaurus proriger 被列为旧组合 Macrosaurus proriger 的异名。本档案采用2026原始研究、PBDB与Smithsonian使用的 Tylosaurus 现组合。
- 五种科级归属分别为上龙科、薄板龙科、沧龙科、沧龙科、长颈龙科。GBIF基线未设置纲目，沿用 ADR 0002 省略；PBDB阶元用于对照，不混入本次基线。
- PBDB对霍氏沧龙给出延至古新世的宽泛年龄字段，本次不将其作为跨越白垩纪末期灭绝事件的证据。档案时期按原研究及馆藏采用晚白垩世；其他物种也不直接照搬原始年龄字段。
- 五份档案分别补齐外形、环境、食物、化石证据、灭绝依据、发现与命名，并更新共读文案的五主题来源记录。

## 图片与检查范围

每种一张封面和五张观察图，使用内置 image_gen。运行资产位于 `public/images/species/<slug>/`；提示词、修订、源图与WebP哈希、实际尺寸及逐帧几何位于 `src/assets/source/species/<slug>/`。五张初稿封面头部进入左侧文字区，修订后保留右侧完整主体；长颈龙侧面观察图另行补齐尾端。新增物种没有旧运行封面。

全部画面为AI科学复原示意。身体姿态、皮肤、颜色、鳍膜和海底布景含推测；不展示为真实标本，不据生成图测量骨骼或确定行为。长颈和细长尾部通过完整边界与静态图片栏模拟检查。

不启动GUI或无头浏览器。源图、运行WebP、静态几何和模拟分别检查；这些检查不验证浏览器字体、完整页面排版或实际内容高度。

## 验收结果

- `npm test`：1093项通过，0项失败，覆盖分类、档案、共读文案、图谱、轮播、图片查看、生产构建与子路径资源检查。
- `test:carousel`：773项资源与几何检查、8项交互检查通过；`test:dist-subpath`：5项通过。
- `npm run typecheck`通过。首屏动物页脚本549,830字节，低于550,000字节预算。目录用无包装字符串保存省略中文名的常见摘要，完整摘要例外才使用数组；解码后逐字段还原检查通过。
- 最终保留30张WebP，共5,163,830字节。五张封面实际解码尺寸均为1672×941；各物种目录记录源PNG和运行WebP的尺寸、SHA-256、完整主体边界及初稿比较。
- 分别检查源PNG及运行WebP联系表，按原分辨率检查五张源封面和运行封面；检查390、761、1920、3840宽的图片栏模拟。九档视口和桌面内容高度增加160px共16组，覆盖六种动画端点，最小几何间距24 CSS px。没有启动浏览器；静态检查不验证浏览器字体、完整页面或实际内容高度。
- `git diff --check`通过。验收后清除本批临时PNG、联系表、模拟与研究用PDF，每种保留六张运行图片。

目录现有765份物种档案；本轮todo完成65种、剩余35种，其他古爬行动物剩余2种。
