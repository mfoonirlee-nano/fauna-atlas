# 四种鱼与草龟：研究及验收

2026-10-17。本批完成鲶、黄颡鱼、乌鳢、尼罗罗非鱼和草龟，每种新增一份物种档案、一张封面和五张观察图。本轮累计 45/100，待制作 55；全图册 645 份物种档案，身边动物选题中的鱼类已完成。

## 名称与分类口径

五个候选在 GBIF strict match 中均为 ACCEPTED、EXACT，新增前与已有 640 份档案按接受学名查重。保留[原始响应与采用的分类链](../../src/assets/source/todo-common-fish-turtle-five-taxonomy-match.json)。

| 档案 | 接受学名 | GBIF key | 图册采用的目、科、属 | 全球 IUCN 等级与评估年 |
| --- | --- | --- | --- | --- |
| 鲶 | Silurus asotus | 2337594 | Siluriformes → Siluridae → Silurus | LC，2020 |
| 黄颡鱼 | Tachysurus fulvidraco | 6168091 | Siluriformes → Bagridae → Tachysurus | LC，2011 |
| 乌鳢 | Channa argus | 4284921 | Perciformes → Channidae → Channa | LC，2020 |
| 尼罗罗非鱼 | Oreochromis niloticus | 4285694 | Perciformes → Cichlidae → Oreochromis | LC，2020 |
| 草龟 | Mauremys reevesii | 2443597 | Testudines → Geoemydidae → Mauremys | EN，2011 |

四种鱼的实时 GBIF 响应缺少纲，图册沿用辐鳍鱼纲 Actinopterygii，与既有共享目级分类单元一致；参考 [ADW 分类链](https://animaldiversity.org/accounts/Cyprinus_carpio/classification/)。乌鳢沿用 GBIF 的鲈形目，档案注明 FishBase 使用攀鲈目 Anabantiformes，尼罗罗非鱼也沿用 GBIF 鲈形目，档案注明 FishBase 丽鱼目 Cichliformes 的不同处理。

草龟的 GBIF 原始响应把 Testudines 放在纲，且缺少目。图册参照 [Reptile Database 的龟鳖目归属](https://reptile-database.reptarium.cz/Mauremys/reevesii)，沿用现有龟类的爬行纲 Reptilia → 龟鳖目 Testudines，不创建一个与现有龟鳖目重名的纲级分类单元。JSON 保留原始响应，并另列采用链及理由，不把修订字段冒充成 GBIF 返回值。

四种鱼的评估日期按 FishBase 全球 IUCN 字段记录：鲶 2020-02-17、黄颡鱼 2011-01-19、乌鳢 2020-02-24、尼罗罗非鱼 2020-04-06。草龟采用 IUCN 龟类专家组物种研究所列 2011 全球 EN 评估。五种趋势均保留 unknown，未用养殖量或引入地影响推断全球原生种群趋势。

## 研究与共读内容

- 鲶：[FishBase](https://www.fishbase.se/summary/Silurus-asotus.html)、[2024 鲶属原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11298680/)及[日本水产研究原始发育资料](https://www.fra.go.jp/home/kenkyushokai/intercoop/ujnr/files/ujnr_poceedings_spawning_maturation1999.pdf)。写明成鱼两对须、早期幼鱼可有三对须，以及小背鳍、长臀鳍和无鳞皮肤。区分鲶的具体物种与“鲶鱼”统称，不把怀头鲶的成鱼下颌须数套到本种。
- 黄颡鱼：[FishBase](https://www.fishbase.se/summary/Tachysurus-fulvidraco.html)。观察四对须、脂鳍、分叉尾鳍与黄黑体色，分别说明近底食物和雄鱼护卵；与鲶和口孵罗非鱼比较。
- 乌鳢：[FishBase](https://www.fishbase.se/summary/Channa-argus.html)、[USGS](https://nas.er.usgs.gov/queries/factsheet.aspx?lv=true&speciesid=2265)及[2018 空气呼吸原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5861356/)。介绍鳃上辅助呼吸、伏击与亲鱼守护，区分原生水域和引入水域，不安排离水试验。
- 尼罗罗非鱼：[FAO 物种研究](https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_niletilapia.htm)与 [FishBase](https://www.fishbase.se/summary/Oreochromis-niloticus.html)。原生背景取非洲，并注明西亚部分水域的原生记录；区分物种、养殖杂交群体与市场统称。介绍尾鳍竖纹和雌鱼口孵；闭口外观本身不证明口内含卵，图库没有透视头部或把成鱼张嘴画成食卵过程。
- 草龟：[IUCN 龟类专家组物种研究](https://iucn-tftsg.org/cbftt/species-accounts/mauremys-reevesii-050/)、[完整研究 PDF](https://iucn-tftsg.org/wp-content/uploads/file/Accounts/crm_5_050_reevesii_v1_2011.pdf)、[Reptile Database](https://reptile-database.reptarium.cz/Mauremys/reevesii)及[2025 湖北巢址原始研究](https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.71630)。观察三条背甲纵棱、颈纹、晒背与陆地产卵，记录捕捉和栖息地改变等野生压力，不用宠物市场数量推断野外状态。

每份档案包含独立的发现与命名章节、来源、辨认问题和观察任务。地图坐标仅作探索代表点；不添加未经核实的体长、体重、寿命或游速数值。

## 图片与验收记录

使用内置 image_gen 分别生成六张图，再用项目脚本首次转换为 WebP；最终运行文件位于 `public/images/species/` 的以下五个目录。最终提示、输入与运行尺寸和哈希逐张保留。

| 图片集与验收 | 最终提示词 |
| --- | --- |
| [鲶](../../src/assets/source/species/amur-catfish/README.md) | [prompts.json](../../src/assets/source/species/amur-catfish/prompts.json) |
| [黄颡鱼](../../src/assets/source/species/yellow-catfish/README.md) | [prompts.json](../../src/assets/source/species/yellow-catfish/prompts.json) |
| [乌鳢](../../src/assets/source/species/northern-snakehead/README.md) | [prompts.json](../../src/assets/source/species/northern-snakehead/prompts.json) |
| [尼罗罗非鱼](../../src/assets/source/species/nile-tilapia/README.md) | [prompts.json](../../src/assets/source/species/nile-tilapia/prompts.json) |
| [草龟](../../src/assets/source/species/reeves-turtle/README.md) | [prompts.json](../../src/assets/source/species/reeves-turtle/prompts.json) |

鲶的首轮提示混入了成鱼第二对下颌须；核对发育资料后，重新编辑成鱼候选并检查最终图。黄颡鱼和鲶的封面边界包含全部最外侧须尖，草龟包含所有可见爪、头、尾及背甲。鲶、黄颡鱼和乌鳢的封面候选侵入左侧留白，重新调整构图；尼罗罗非鱼与草龟首版封面通过构图检查。五种均首次入库，无旧运行封面对照。

五张封面 PNG 与运行 WebP 已分别按原始分辨率检查，图库源图和运行图已查看联系图。实际解码尺寸均为 1536×1024；完整轮廓、源图位置与运行哈希分别记录于各物种 README、prompts.json 和 hero-acceptance.json，并与 cover-subjects 及 original-covers fixture 一致。

已逐种检查九组图片栏静态模拟，覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900。桌面另计算内容增高 160px，共 80 组几何记录；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个动画端点共享几何，完整主体最小间距均至少 24 CSS px。移动端全图 contain，桌面在独立图片栏内最大化主体。

未启动 GUI 或无头浏览器；静态几何和图片栏模拟不验证浏览器字体、完整页面排版或真实内容高度。AI 生成图不用于精确鉴种、须和鳍条计数或内部解剖。

## 验证

- `npm run typecheck` 通过。
- `npm test` 在允许监听本地端口的环境执行，967 项全部通过，0 失败。
- `npm run test:carousel` 随全套测试通过：653 项资源与几何检查、8 项轮播交互检查，覆盖全部 645 份物种档案和本批完整右侧封面轮廓。
- `npm run test:dist-subpath` 随全套测试通过，含生产构建、子路径图片可达性、目录与延迟档案一致性及现有 JavaScript 预算；未提高预算。
- 30 张运行 WebP 的哈希、实际尺寸及图片集 README 中的接受哈希逐行一致；新增图片集、todo 与研究归档的本地链接检查通过；`git diff --check` 通过。

本批五项已移入完成归档，本轮完成 45/100、待制作 55，全图册 645 份物种档案。已将仓库内 30 张临时 PNG 移出，仅保留运行 WebP、最终提示、文字和几何验收记录。浏览器字体与完整页面排版未验证。
