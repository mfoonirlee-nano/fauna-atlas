# 身边动物接续五种：研究与验收

2026-10-14。本批完成山羊、家猪、家鸡、原鸽和白鹭，项目从 605 份增加到 610 份物种档案。本轮选题累计完成 10 个，待制作 90 个；完成项移入[本轮归档](todo-common-completed-2026-10-13.md)。

## 分类与内容范围

沿用项目 GBIF 分类口径，五种名称匹配均为 EXACT、ACCEPTED、SPECIES。完整结果保存在 [taxonomy-match.json](../../src/assets/source/todo-common-next-five-taxonomy-match.json)。分类图谱分别归入哺乳纲偶蹄目及鸟纲鸡形目、鸽形目、鹈形目，家养品种不新增种阶节点。

| 档案 | 接受学名 | GBIF | 内容范围 |
| --- | --- | --- | --- |
| 山羊 | Capra hircus | [2441056](https://www.gbif.org/species/2441056) | 家养山羊，与绵羊所在的 Ovis 属比较 |
| 家猪 | Sus scrofa | [7705930](https://www.gbif.org/species/7705930) | 驯化动物主题；接受物种名也包含野猪 |
| 家鸡 | Gallus gallus | [9326020](https://www.gbif.org/species/9326020) | 驯化动物主题；接受物种名也包含红原鸡 |
| 原鸽 | Columba livia | [2495414](https://www.gbif.org/species/2495414) | 野生原鸽及家养、野化后代，分别说明城市场景 |
| 白鹭 | Egretta garzetta | [2480876](https://www.gbif.org/species/2480876) | 小白鹭这一物种，与其他白色鹭鸟区分 |

山羊、家猪和家鸡采用 NE，表示档案未收录适用于所述家养范围的红色名录评估，不否认野生祖先或整个接受物种已有评估。原鸽采用全球 LC，保留 2016 年评估年份；白鹭采用全球 LC，保留 2025 年评估年份。来源：[BTO 原鸽](https://www.bto.org/learn/about-birds/birdfacts/rock-dove)、[原鸽全球评估](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T22690066A155493121.en)、[白鹭全球评估](https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T62774969A154819214.en)。

## 科普与共读资料

山羊档案从短尾、胡须、分趾蹄和取食叶片切入，与绵羊综合比较。品种的角、耳、被毛与尾姿有差异，胡须不作为雌雄判断规则。幼仔与成体分别标注。资料：[密歇根大学 ADW：家山羊](https://animaldiversity.org/accounts/Capra_hircus/)。

家猪档案说明鼻吻探索、拱土和泥水降温，区分家猪饲养范围与野猪、野化猪的分布。图库选择粉红色垂耳外观，不能代表全部品种。资料：[RSPCA：猪的行为与环境](https://www.rspca.org.uk/adviceandwelfare/farm/pigs)、[家猪取食与群居](https://www.rspca.org.uk/adviceandwelfare/farm/farmanimals/pigs/care)、[ADW：Sus scrofa 生活史](https://animaldiversity.org/accounts/Sus_scrofa/)。

家鸡档案区分啄食、刨地、成年羽毛和小鸡绒羽，说明受精卵在适宜条件下通常约 21 天孵化，外观不能判断蛋是否受精。家养形式与红原鸡的接受学名分别说明。资料：[大学推广联合项目：家鸡日常行为](https://poultry.extension.org/articles/poultry-behavior/normal-behaviors-of-chickens-in-small-and-backyard-poultry-flocks/)、[鸡的取食](https://poultry.extension.org/articles/poultry-related-youth-programs/what-does-a-chicken-eat/)、[禽类胚胎与孵化](https://poultry.extension.org/articles/poultry-anatomy/avian-embryology/)、[ADW：原鸡与驯化范围](https://animaldiversity.org/accounts/Gallus_gallus/)。

原鸽档案区分欧洲、北非与亚洲西南部的原生范围，以及世界多地城市中的引入和野化后代。双亲共同育幼，早期鸽乳来自嗉囊；多种羽色不新增物种。资料：[ADW：原鸽形态与分布](https://animaldiversity.org/accounts/Columba_livia/)、[康奈尔鸟类实验室：原鸽生活史](https://www.allaboutbirds.org/guide/Rock_Pigeon/lifehistory)、[康奈尔：鸽类双亲与嗉囊乳](https://www.allaboutbirds.org/guide/Common_Wood-Pigeon/overview)。

白鹭档案以细长黑嘴、黑腿和黄脚辨认，记录香港全年湿地观察场景，并保留其他地区迁徙差异。封面含成年饰羽，巢中幼鸟已长羽，不代表初孵阶段。资料：[香港观鸟会：白鹭](https://avifauna.hkbws.org.hk/species/0170/023500)、[BTO：白鹭觅食与育幼](https://www.bto.org/learn/about-birds/birdfacts/little-egret)、[BirdLife Australia：白鹭](https://birdlife.org.au/bird-profiles/little-egret/)。

五份档案均包含独立发现与命名章节、辨认问题和观察任务。全文与来源覆盖记录扩展至 610 份，文案按 stop-slop 检查。

## 图片与封面

内置 image_gen 为 30 个独立场景逐张生成，每种保留一张封面与五张观察图。山羊首版尾部、家猪首版耳部、原鸽及白鹭首版喙部进入左侧留白区，通过内置编辑调整完整动物的位置与比例，首版不进入运行图集。最终封面 PNG 与保留 WebP 分别以原分辨率检查，源图库和运行图库分别检查六图联系表。全部运行 WebP 实际解码为 1536×1024。

每种图片 README 与 prompts.json 记录提示词、修订、源与运行哈希、实际尺寸与目视边界；cover-subjects 与唯一 original-covers fixture 一致并绑定运行哈希。完整边界包含可见角、耳、鼻吻、喙、尾、羽毛边缘和腿足，主体中心均超过源宽 60%，左 40% 保留背景。

直接调用当前 fitHeroSubject，验证 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900；桌面另计算内容增高 160px。45 张图片栏模拟通过目视检查。桌面完整主体至少保留 24 CSS px 间距，手机全图 contain 并内缩 24px。六种动画端点共用几何，当前 CSS 仅改变透明度。

按仓库要求未启动浏览器。源图检查、几何检查与模拟检查分别完成；静态几何和模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。AI 重建不能用于实测尺寸、精确趾数、年龄或遗传来源。

## 验证与打包

类型检查与 `npm test` 全部通过，910 项测试、0 失败。`test:carousel` 覆盖 610 份档案的六图、封面哈希、实际解码尺寸、主体间距与轮播交互。生产构建与 `test:dist-subpath` 验证子路径图片、懒加载档案及目录字段的完整还原。

构建预算检查起初测得动物页面 JavaScript 为 580,113 字节，超过现有 550,000 字节预算。构建时提取目录中重复中文短语，用未占用的私用字符编码，在 JSON 解析前还原；遇到已有私用字符时保留原文本。保留编辑数据、分类链、搜索字段与预算上限。目录逐字段还原检查通过，最终动物页面 JavaScript 为 545,978 字节。

验收后清理临时 PNG、首版候选、联系表与模拟，保留 30 张 WebP、五套来源与提示词记录、封面验收 JSON、分类匹配结果及本记录。
