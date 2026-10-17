# 接续淡水动物五种：研究与验收

2026-10-17。本批接续 todo 的青鱼、黄鳝、麦穗鱼、中华鳑鲏和宽鳍鱲，每种新增一份物种档案、一张封面和五张观察图。完成后本轮累计 40/100，待制作 60；全图册 640 份物种档案。

## 分类与内容范围

五种在 GBIF strict match 中均为 ACCEPTED、EXACT。原始响应见[分类核验 JSON](../../src/assets/source/todo-common-next-freshwater-five-taxonomy-match.json)，五个接受学名与原有 635 份档案无重复。

| 档案 | 学名 | GBIF key | 项目采用的科、属 | 全球 IUCN 等级及评估年份 |
| --- | --- | --- | --- | --- |
| 青鱼 | Mylopharyngodon piceus | 2362110 | Cyprinidae → Mylopharyngodon | LC，2020 |
| 黄鳝 | Monopterus albus | 5204081 | Synbranchidae → Monopterus | LC，2020 |
| 麦穗鱼 | Pseudorasbora parva | 2362868 | Cyprinidae → Pseudorasbora | LC，2020 |
| 中华鳑鲏 | Rhodeus sinensis | 2360841 | Cyprinidae → Rhodeus | LC，2011 |
| 宽鳍鱲 | Zacco platypus | 2365787 | Cyprinidae → Zacco | LC，2023 |

本批 GBIF 响应均缺少纲，沿用图册现有辐鳍鱼纲 Actinopterygii，参考 [ADW 的分类链](https://animaldiversity.org/accounts/Cyprinus_carpio/classification/)，不把它写成本次 GBIF 响应字段。四种鲤形目鱼维持 GBIF 的鲤科口径；FishBase 分别采用 Xenocyprididae、Gobionidae 或 Acheilognathidae，档案注明差别。黄鳝采用合鳃鱼目及合鳃鱼科，不混入鳗鲡属。

保护等级与日期按 FishBase 当前全球 IUCN 字段记录，五种趋势均保留 unknown，未用养殖量、地方红色名录或引入地管理状态推断全球野生趋势。青鱼页面列评估日期为 2020-04-02，黄鳝为 2020-11-10，麦穗鱼为 2020-04-14，中华鳑鲏为 2011-01-21，宽鳍鱲为 2023-01-11；发表或数据库版本年份与评估年分别处理。

## 资料与共读内容

- 青鱼：[美国鱼类与野生动物管理局](https://www.fws.gov/species/black-carp-mylopharyngodon-piceus)、[FAO 综合养鱼资料](https://www.fao.org/4/AC264E/AC264E01.htm)及 [FishBase](https://www.fishbase.se/summary/Mylopharyngodon-piceus.html)。写明成鱼螺贝食物、幼鱼食物变化、咽齿位置与流水繁殖条件，图中不外露咽齿。
- 黄鳝：[ADW](https://animaldiversity.org/accounts/Monopterus_albus/)、[2021 名称研究](https://pubmed.ncbi.nlm.nih.gov/33903352/)、[USGS 物种范围说明](https://nas.er.usgs.gov/Queries/FactSheet.aspx?SpeciesID=974)及 [FishBase](https://www.fishbase.se/summary/Monopterus-albus.html)。介绍缺少成对鳍、空气呼吸和先雌后雄；内容聚焦中国及东亚黄鳝，提示旧广义分布涉及物种复合群，不直接合并 M. javanensis 等名称下的全部记录。
- 麦穗鱼：[USGS 物种档案](https://nas.er.usgs.gov/queries/greatlakes/FactSheet.aspx?Species_ID=3650)及 [FishBase](https://www.fishbase.se/summary/Pseudorasbora-parva.html)。观察上位小嘴、体侧暗纹、黏性卵与守护产卵位置；原生和引入水域分别说明。卵图按共读放大展示，比例未经实测。
- 中华鳑鲏：[FishBase](https://www.fishbase.se/summary/Rhodeus-sinensis.html)、[本种杂食性与捕食幼虾的实验](https://www.sciencedirect.com/science/article/pii/S2352513424005957)、[朝鲜半岛种群基因组研究](https://pubmed.ncbi.nlm.nih.gov/42728659/)。图注明确普通体色、繁殖期雄鱼、带产卵管的雌鱼与幼鱼；蚌为活体宿主，未把空壳或人工剖面画成真实繁殖照片，也未把关系概括成必然互利。
- 宽鳍鱲：[2024 基因组原始研究](https://www.nature.com/articles/s41597-024-03163-w)、[2023 系统地理原始研究](https://www.frontiersin.org/journals/ecology-and-evolution/articles/10.3389/fevo.2023.1142810/full)及 [FishBase](https://www.fishbase.se/summary/Zacco-platypus.html)。明确与马口鱼不同，并提醒中国南方旧广义记录涉及尖鳍鱲等近缘种；不照搬旧宽泛分布。普通体色和繁殖期雄鱼分别展示。

每份档案保留独立的发现与命名章节、来源、辨认问题与观察任务；地图坐标仅作探索代表点。

## 图片、构图与模拟

30 张运行图片均由内置 image_gen 分别生成，通过项目脚本首次转换为 WebP，保留在 `public/images/species/` 对应五个目录。最终提示、源图及运行图哈希、实际尺寸见各物种图片集中的 prompts.json。没有复用其他物种图片，也没有重复压缩已接受的 WebP。

| 图片集与验收 | 最终提示词 |
| --- | --- |
| [青鱼](../../src/assets/source/species/black-carp/README.md) | [prompts.json](../../src/assets/source/species/black-carp/prompts.json) |
| [黄鳝](../../src/assets/source/species/asian-swamp-eel/README.md) | [prompts.json](../../src/assets/source/species/asian-swamp-eel/prompts.json) |
| [麦穗鱼](../../src/assets/source/species/topmouth-gudgeon/README.md) | [prompts.json](../../src/assets/source/species/topmouth-gudgeon/prompts.json) |
| [中华鳑鲏](../../src/assets/source/species/chinese-bitterling/README.md) | [prompts.json](../../src/assets/source/species/chinese-bitterling/prompts.json) |
| [宽鳍鱲](../../src/assets/source/species/pale-chub/README.md) | [prompts.json](../../src/assets/source/species/pale-chub/prompts.json) |

逐种按原始分辨率检查封面 PNG 与运行 WebP，并查看五张图库源图与运行联系图。五个首版封面候选均侵入左侧留白，使用 image_gen 缩小主体并右移后重新验收。最终封面均为 1536×1024；完整边界包含嘴、全部可见鱼鳍与尾端，左侧 40% 留作安静背景，主体中心均在源图宽度 60% 右侧。五份 README、hero-acceptance.json、cover-subjects 与 original-covers fixture 绑定相同边界和运行哈希。

已查看五种动物各九组图片栏模拟，覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900。桌面另外计算内容增高 160px，共 80 组几何记录；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个动画端点共享几何，完整主体最小留边均至少 24 CSS px。移动端整图 contain，桌面在独立图片栏内最大化主体。

未启动 GUI 或无头浏览器。静态几何与图片栏模拟不验证浏览器字体、完整页面排版或真实内容高度。AI 图片用于观察外形和环境，不能用于精确鉴种、鳍条计数或胚胎阶段判断。

## 验证

- `npm run typecheck` 通过。
- `npm test` 执行全部 962 项检查，其中 960 项通过；最后两项子路径检查因沙箱禁止监听本地端口而报 EPERM。随后在沙箱外重跑 `npm run test:dist-subpath`，5 项全部通过，原两项失败已验证解决，无代码失败遗留。
- `npm run test:carousel` 随全套测试通过：648 项几何与资源检查、8 项交互检查，覆盖全部 640 份物种档案，以及本批封面的完整右侧主体构图、六张运行图片与哈希。
- 生产构建与子路径检查通过，确认图片可达、延迟加载档案完整、目录字段和分类阶元一致，并满足现有 JavaScript 预算；未提高预算。
- 30 张运行 WebP 的 SHA-256、实际解码尺寸，以及新增图片集和研究文档的本地链接通过检查；`git diff --check` 通过。

已将本批五项移入完成归档并更新 todo 数量。本轮完成 40/100、待制作 60，全图册 640 份物种档案。30 张临时 PNG 已移出仓库，运行 WebP、最终提示及文字和几何验收记录保留。浏览器字体与完整页面排版未验证。
