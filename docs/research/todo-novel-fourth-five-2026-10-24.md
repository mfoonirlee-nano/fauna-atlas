# 新奇动物第四批五种

2026-10-24 完成 N017 透明中层章鱼、N018 八腕鱿鱼、N019 珍珠章鱼、N020 七腕章鱼、N031 大红水母。正式目录从 815 增至 820 份档案，本轮累计 20/100，剩余 80 种。

承接[2026-10-23 草稿](todo-novel-fourth-five-draft-2026-10-23/README.md)。今日重新访问五种 MBARI 物种简介，复核形态、食谱、分布与生活方式；其他研究来源保留草稿原访问日期，不把未重新访问的页面标为今日核实。

## 分类与证据边界

| 编号 | 接受学名 | 目 / 科 / 属 | 拟用等级 |
| --- | --- | --- | --- |
| N017 | *Japetella diaphana* | Octopoda / Amphitretidae / Japetella | LC，GBIF / Catalogue of Life 等级入口；未独立核实评估日期 |
| N018 | *Octopoteuthis deletron* | Oegopsida / Octopoteuthidae / Octopoteuthis | DD，WoRMS 关联 IUCN；未独立核实评估日期 |
| N019 | *Muusoctopus robustus* | Octopoda / Enteroctopodidae / Muusoctopus | LC，GBIF / Catalogue of Life 等级入口；未独立核实评估日期 |
| N020 | *Haliphron atlanticus* | Octopoda / Alloposidae / Haliphron | LC，WoRMS 关联 IUCN；未独立核实评估日期 |
| N031 | *Tiburonia granrojo* | Semaeostomeae / Ulmaridae / Tiburonia | 未核实全球评估，NE 仅作资料占位 |

前四种为 Animalia / Mollusca / Cephalopoda；大红水母为 Animalia / Cnidaria / Scyphozoa。统一阶元中文名应复用正式目录已有值：Octopoda 八腕目、Oegopsida 开眼目、Enteroctopodidae 巨蛸科、Semaeostomeae 旗口水母目、Ulmaridae 洋须水母科。新科与新属未核实规范中文名时保留拉丁名加阶元，不编造规范名称。2026-10-22 的候选查询快照保持原日期。

透明中层章鱼采用 [MBARI 的本种介绍](https://www.mbari.org/animal/midwater-octopus/)及 [2020 年本种生活史研究](https://www.sciencedirect.com/science/article/abs/pii/S0967063720301527)。另检索到的 2011 年透明与色素实验使用 *Japetella heathi*，本次不把该实验直接写成本种实验证据，也不擅自合并两个种。抱卵持续时间属于研究估计，不写成完整连续追踪结果。

八腕鱿鱼成年时留下八条腕，两条捕食触手在发育中吸收；具体食谱保留空值。[Bush（2012）的断腕研究](https://www.int-res.com/articles/meps2012/458/m458p133.pdf)记录牵拉与断裂位置，不能简写成任何刺激都会断腕。[FAO](https://www.fao.org/4/i1920e/i1920e06.pdf)以东北太平洋为主要分布，并单列秘鲁外海可能离散记录；不采用其他数据库较宽的东西大洋合并范围。

珍珠章鱼的温泉育幼来自 [MBARI 章鱼花园项目](https://www.mbari.org/project/the-octopus-garden/)。当地约 3,200 米深、周边约 1.6℃、部分巢位接近 11℃以及不到两年的孵育记录，均属研究地点结果，不扩成全球温度与寿命范围。场景采用温水渗流岩缝，不画冒烟的黑烟囱。

七腕章鱼仍有八条腕，雄性交接腕可藏入右眼下方囊中。[2017 年原研究](https://www.nature.com/articles/srep44952)结合原位影像与馆藏胃内容物支持胶质动物食物；利用水母作防御等解释保留推测语气。图集拟采用雌性，不能用少露一条腕的生成图证明雄性结构。

大红水母的四至七条口腕见 [MBARI 2003 年介绍](https://www.mbari.org/news/big-red-jelly-surprises-scientists/)，食谱仍不确定。[现行 MBARI 简介](https://www.mbari.org/animal/big-red-jelly/)与[水族馆介绍](https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/big-red-jelly)的尺寸、水深范围不同，草稿保留来源差异，未写入统一数值指标。口腕数因个体而异，提示词中的六条仅用于一个重建个体。

## 图片与验收

内置 image_gen 本次生成 30 张图，无 CLI/API 调用。每种保留一张封面及五张观察图，存放于 `public/images/species/<slug>/`。所有运行图实际解码为 1536×1024；逐图 SHA-256、源图尺寸、提示词与局限保存在各物种的 `src/assets/source/species/<slug>/`。

检查 30 张源图与 30 张运行图的联系表，原分辨率检查五张源封面和五张运行封面。封面边界包含全部可见腕端、鳍尖、外套膜或伞缘；主体中心均在源宽 60% 以右。腕部遮挡、褶皱及透明组织细节不作为解剖鉴定依据。新增物种没有旧运行封面。

几何验收覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900，以及桌面内容增高 160px。五种合计 80 个视口/高度组合，逐项包含 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；当前动画只改变透明度，最小主体间距均不低于 24 CSS px。逐种检查 390、761、1920、3840 宽的静态图片栏模拟。

静态几何和图片模拟不验证浏览器字体、完整页面排版或实际内容高度。按项目要求未启动浏览器。

## 检查记录

2026-10-26 接续收尾，完整 `npm test` 通过，包含物种档案、资料覆盖、分类、地图交互、轮播、图片查看器、生产构建及 `test:dist-subpath` 的图片路径与 JavaScript 体积预算检查。首次沙箱运行因 Vite 监听端口返回 EPERM 而停滞；获准在沙箱外重跑后退出码为 0。`git diff --check` 通过。

本次复核 30 张运行 WebP 的实际解码尺寸与 SHA-256，均与已有验收记录一致；复查运行图联系表和五种封面的 390、761、1920、3840 宽静态图片栏模拟。源 PNG 的检查沿用 2026-10-24 历史记录，本次未重新生成或检查已移除的源 PNG。图像和封面边界未改动。

清理档案中的制作说明，并同步待办清单与资料覆盖统计：本轮完成 20/100 种，全图册 820 份档案。
