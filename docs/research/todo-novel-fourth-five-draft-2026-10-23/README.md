# 新奇动物第四批五种制作草稿

日期：2026-10-23。历史草稿于 2026-10-24 接续完成，正式结果见[第四批完成记录](../todo-novel-fourth-five-2026-10-24.md)。以下保留当时研究和图片阻塞记录。

本批选 N017 透明中层章鱼、N018 八腕鱿鱼、N019 珍珠章鱼、N020 七腕章鱼、N031 大红水母。[content.json](./content.json) 保存五种的简介、形态、食物、分布、发现命名、观察主题与逐项来源；[image-prompts.json](./image-prompts.json) 保存一张封面和五张观察图所需的三十条提示词。

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

## 图片阻塞与后续验收

内置 image_gen 的前三个请求均返回 HTTP 429、`usage_limit_reached`，没有生成任何图片；工具当时提示约 10 小时后恢复。三十条提示词是制作输入，不能当作生成成功的证据。

本次已询问是否允许按 imagegen 技能切换 CLI/API；尚未获得授权，未执行备用调用。该方式需要 `OPENAI_API_KEY` 并产生 API 费用。默认继续使用内置工具。

恢复制作后仍需逐图检查、转换并保留三十张 WebP，测量完整封面主体边界与哈希，添加主体表和 fixture，检查九档视口及静态模拟，接入档案和来源覆盖记录，并运行 `npm test`。通过后再更新清单数量和完成状态。当前仅校验草稿 JSON、候选去重与提示词覆盖；没有运行应用测试或声称图像验收完成。
