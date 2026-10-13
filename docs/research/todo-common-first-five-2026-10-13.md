# 身边动物首批五种：研究与验收

2026-10-13。本批完成家猫、家马、家驴、家牛和绵羊。项目从 600 份增加到 605 份物种档案，本轮 100 个选题完成 5 个，剩余 95 个；完成项移入[本轮归档](todo-common-completed-2026-10-13.md)。

## 分类与内容范围

以项目既有 GBIF 分类链为基线，通过名称匹配 API 逐种核验；五个候选均为 EXACT、ACCEPTED，命名人为 Linnaeus，年份为 1758。完整响应保存在 [taxonomy-match.json](../../src/assets/source/todo-common-first-five-taxonomy-match.json)。五种都是哺乳纲动物，家猫属于食肉目、猫科，家马与家驴属于奇蹄目、马科，家牛与绵羊属于偶蹄目、牛科。

| 档案 | 接受学名 | GBIF | 本批内容范围 |
| --- | --- | --- | --- |
| 家猫 | Felis catus | [2435035](https://www.gbif.org/species/2435035) | 家猫；品种、毛色与野化状态不另计物种 |
| 家马 | Equus caballus | [2440886](https://www.gbif.org/species/2440886) | 家养马；说明其他资料中的野马下驯化形式写法 |
| 家驴 | Equus asinus | [2440891](https://www.gbif.org/species/2440891) | 家驴；与 Equus africanus asinus 写法对照 |
| 家牛 | Bos taurus | [2441022](https://www.gbif.org/species/2441022) | 普通家牛；区分水牛、瘤牛处理与野生原牛 |
| 绵羊 | Ovis aries | [2441110](https://www.gbif.org/species/2441110) | 家养绵羊；区分山羊与野生羊类 |

NE 表示本档案未收录适用于所述家养范围的红色名录评估，不宣称五种野生祖先都未评估，不用非洲野驴的极危或原牛的灭绝状态替代家养动物范围。家养品种不新增物种节点。资料中的早期驯养史与 1758 年正式命名分开叙述，未补写未经核实的精确驯化时间。

## 科普与共读资料

家猫档案说明胡须感受近处物体、可伸缩的爪与抓挠行为，图库选择橘色短毛猫作为一个外观例子。成年母猫与已经睁眼的幼猫分别标注，不当作新生幼猫。遗传研究支持家猫与近东野猫祖先的联系。

资料：[ADW：家猫生活与分布](https://animaldiversity.org/accounts/Felis_catus/)、[Cats Protection：胡须与触觉](https://www.cats.org.uk/cats-blog/why-do-cats-have-whiskers)、[Cats Protection：抓挠](https://www.cats.org.uk/help-and-advice/cat-behaviour/scratching)、[家猫近东起源原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5612713/)。

家马档案从完整单蹄、鬃毛和吃草切入，说明后肠微生物参与利用草料。连续影像才能判断完整步态；图库里的母马与幼驹不提供未经核实的月龄。

资料：[ADW：家马形态、生活与分布](https://animaldiversity.org/accounts/Equus_caballus/)、[明尼苏达大学：马蹄](https://extension.umn.edu/agriculture/animals-and-livestock/horse/caring-for-your-horses-hooves)、[明尼苏达大学：草料与后肠发酵](https://extension.umn.edu/agriculture/animals-and-livestock/horse/ten-things-you-should-know-about-feeding-the-mature-horse)。

家驴档案以长耳、短鬃毛和尾端毛簇与家马比较，说明同伴关系和家养范围。耳朝向或暂时停步不足以判断“生气”或“固执”。取食图用于观察，不能当作饲喂配方。

资料：[ADW：家驴与野驴资料对照](https://animaldiversity.org/accounts/Equus_asinus/)、[The Donkey Sanctuary：家驴照护手册](https://www.aspcapro.org/sites/default/files/donkey-care-handbook-5th-edition.pdf)。手册提供尾端毛簇、同伴联系、取食与祖先范围；旧资料的野驴分类不替代本批 GBIF 接受名称。

家牛档案说明分趾蹄、胃的四个室与反刍，小牛早期吃奶，瘤胃随食物和微生物群变化发育。休息图不证明当时正在反刍。无角与不同花色用于外观比较，不作为品种鉴定证据。

资料：[ADW：家牛与旧分类范围](https://animaldiversity.org/accounts/Bos_taurus/)、[明尼苏达大学：反刍消化与幼牛发育](https://extension.umn.edu/agriculture/animals-and-livestock/dairy/the-ruminant-digestive-system)。

绵羊档案说明羊毛、群体取食、反刍与幼羔成长，图库选择白色无角母羊，正文保留品种毛色、被毛、角与尾长的差异。Ovis 与 Capra 为不同属，不能只用卷毛或是否有角作万能辨认规则。

资料：[ADW：绵羊生活、群居与繁殖](https://animaldiversity.org/accounts/Ovis_aries/)、[宾州州立大学：绵羊与品种、饲养环境](https://extension.psu.edu/animals-and-livestock/sheep)。ADW 标题和分类范围含旧的野生羊类用法，本档案只取家养内容。

每份档案有独立的发现与命名章节、辨认问题、观察任务、来源与家养范围说明。文案按 stop-slop 检查；全文审阅记录扩展到 605 种。

## 图片与封面

内置 image_gen 为 30 个独立场景逐张生成，一种仅保留一张封面和五张观察 WebP。首版五张封面的尾巴或身体进入左侧留白区，逐张编辑全身位置和比例；调整后重新按像素检查。家驴耳朵特写接近顶边，扩大取景后保留两只完整耳朵及上方背景。

临时源封面和保留 WebP 分别按原分辨率查看，源图库与运行图库分别通过六图联系表检查。全部保留 WebP 实际解码为 1536×1024。各图片 README 与 prompts.json 记录原提示词、修订提示词、源与运行图哈希、实际解码尺寸；首版临时候选不进入运行图集。

五种完整主体边界分别包含可见耳尖、鼻口、胡须或毛缘、蹄或爪和尾端，水平中心均超过源宽的 60%，左 40% 为背景。边界、实际尺寸与哈希同步到 cover-subjects 和唯一 original-covers fixture。

直接调用当前 fitHeroSubject 验证 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900，桌面另验证内容加高 160px。45 张图片栏模拟通过目视检查。桌面完整主体最小间距至少 24 CSS px，手机使用全图 contain 和 24px 内缩；六种透明度动画端点共用相同几何。

按项目规则未启动浏览器。静态几何和图片栏模拟不能验证浏览器字体、完整页面排版或实际内容驱动高度。

## 验证

类型检查与 `npm test` 全部通过，共 902 项测试、0 失败。`test:carousel` 覆盖 605 种动物的六图、哈希绑定、实际解码尺寸和全主体间距；构建与 `test:dist-subpath` 验证图片路径、子路径部署、完整档案懒加载和目录数据还原。动物页面 JavaScript 为 549,843 字节，低于保持不变的 550,000 字节预算。

新增五种使动物页面 JavaScript 超出 550,000 字节预算。构建时将分类名称表打包为分隔文本，并缩写重复的中文“属”字，加载后还原完整名称；特殊分隔符保留数组表达。目录和完整档案继续分别加载，预算上限保持原值。

旧批次测试曾把“整个 TODO 无待办”作为完成条件。本轮清单已经登记 100 个新选题，旧断言改为检查上一轮归档与已完成物种不再待办，并保留当前待办学名去重与目录排除检查。

临时 PNG、首版候选、联系表与图片栏模拟在验收后清理。保留 30 张 WebP、各物种 README、最终提示词与源图哈希、封面验收 JSON。
