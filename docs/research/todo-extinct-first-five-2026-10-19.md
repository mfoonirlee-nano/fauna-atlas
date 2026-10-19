# 首批五种灭绝动物制作记录

2026-10-19：制作 E001–E005，新增渡渡鸟、罗德里格斯孤鸽、旅鸽、大海雀和袋狼。每种一份物种档案、一张封面和五张观察图；动物目录由 700 增至 705。分类原始响应见 [GBIF 查询记录](../../src/assets/source/todo-extinct-first-five-taxonomy-match.json)。

## 分类与历史记录

GBIF 的五次查询均返回种阶元、ACCEPTED、EXACT、99 分匹配。采用项目既有分类口径；中文属名用于展示，不把灭绝动物另设为分类阶元。

| 编号 | 采用学名 | 分类归属 | 历史记录的限定 |
| --- | --- | --- | --- |
| E001 | Raphus cucullatus | 鸟纲／鸽形目／鸠鸽科／渡渡鸟属 | 17 世纪灭绝；1662 为可靠末次记录之一，更晚记录存在讨论 |
| E002 | Pezophaps solitaria | 鸟纲／鸽形目／鸠鸽科／孤鸽属 | 18 世纪灭绝；不以某次目击指定灭绝年 |
| E003 | Ectopistes migratorius | 鸟纲／鸽形目／鸠鸽科／旅鸽属 | Martha 于 1914-09-01 在圈养中死亡；不以这天替代野外种群消失过程 |
| E004 | Pinguinus impennis | 鸟纲／鸻形目／海雀科／大海雀属 | 1844 为最后已知繁殖对遭捕杀；另有 1852 年目击记录 |
| E005 | Thylacinus cynocephalus | 哺乳纲／袋鼬目／袋狼科／袋狼属 | 最后确认圈养个体于 1936-09-07 死亡，1986 年宣布灭绝 |

渡渡鸟与孤鸽的分类、命名史采用 [2024 年原始研究](https://doi.org/10.1093/zoolinnean/zlae086)，并与 GBIF 核对。孤鸽翅部骨质突起的用途采用 [Hume 与 Steel 的原始研究](https://doi.org/10.1111/bij.12087)，以研究推断表述，不把具体争斗动作写成实测事实。

渡渡鸟外形、历史环境与复原限制参考 [伦敦自然历史博物馆](https://www.nhm.ac.uk/discover/the-dodo-bird-the-real-facts-about-this-icon-of-extinction.html)。孤鸽与渡渡鸟生活于不同岛屿；图集没有将它们放进同一自然场景。

旅鸽外形、食物与历史范围参考 [Smithsonian 物种资料](https://www.si.edu/spotlight/passenger-pigeon)；Martha 的记录参考 [馆藏部门说明](https://naturalhistory.si.edu/research/vertebrate-zoology/birds/collections-overview/martha-last-passenger-pigeon)。图集示意雄鸟，Martha 为雌鸟，不以雄鸟复原图冒充她的影像。

大海雀采用 [NHM 历史记录](https://www.nhm.ac.uk/discover/worlds-collide-great-auk.html)及[密歇根大学 ADW](https://animaldiversity.org/accounts/Pinguinus_impennis/)。采用繁殖羽，说明其眼前白斑随羽色阶段而变；不用与企鹅相似的外形改变其海雀科归属。

袋狼采用[塔斯马尼亚公园部门](https://parks.tas.gov.au/discovery-and-learning/wildlife/tasmanian-tiger)及[澳大利亚博物馆](https://australian.museum/learn/australia-over-time/extinct-animals/the-thylacine/)的资料。区分大陆及新几内亚的早期记录和塔斯马尼亚晚期记录，未提供代表当前活体目击的坐标。

## 灭绝状态与模型

现有 Species 模型已支持 EX，页面也已有“已灭绝”标签。本批用正文和历史记录统计表达年代、证据与复原限制，无须改变保护状态字段或页面行为。历史分布写入 range 和 regions，不添加当前分布中心。缺少可靠尺寸、寿命与速度数据时，measurements 与 metrics 留空。

鸟类保护状态字段采用 2016 年发表的历史 IUCN 评估，明确不声称为最新版本；袋狼采用同年发表、2012 年评估的记录。评估年与最后目击、死亡、宣布灭绝年分别处理。

- [渡渡鸟 IUCN 历史评估](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T22690059A93259513.en)
- [孤鸽 IUCN 历史评估](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T22690062A93259685.en)
- [旅鸽 IUCN 历史评估](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T22690733A93285636.en)
- [大海雀 IUCN 历史评估](https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T22694856A93472944.en)
- [袋狼 IUCN 历史评估](https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T21866A21949291.en)

部分 DOI 页面在网页工具中访问失败；采用可检索的历史评估记录，结合博物馆及政府资料交叉确认 EX，不推断最新评估日期。GBIF 原始查询响应另行保留。各档案 sources 列出采用来源和访问日期。

## 图片与验收

全部使用内置 image_gen。30 张保留 WebP 的实际解码尺寸均为 1536×1024。每种的 prompts.json 保存最终提示词；编辑过的封面另保留生成提示词与参考图哈希。没有使用 CLI/API 回退。

每种图集依次呈现封面、外形比例、外部特征、外观模型、历史环境和两个观察方向。特征图首版误混其他物种，已整张重做；骨骼候选存在不适合教学的细节，均弃用，改为外观模型示意，并同步修正标题与图注。模型图没有冒充真实馆藏。

旅鸽与袋狼封面先重新生成，再编辑整体位置，解决长尾伸入左侧留白的问题。最终封面按运行图像素测量完整主体，绑定 SHA-256，同步记录至 cover-subjects.ts 和 original-covers.json。源与运行封面分别检查，源图与 WebP 联系表分别检查。

五种动物各完成九档图片栏模拟目视检查，桌面另算内容增高 160px；共 80 组静态几何。六种 settled／enter／leave 端点共用当前仅透明度动画的几何，完整主体均保留至少 24 CSS px 间距。逐物种像素边界、源和运行哈希及各图片栏尺寸见对应图片集 README 与 hero-acceptance.json。

按仓库要求未启动浏览器。静态几何和模拟不验证浏览器字体、完整页面排版或真实内容驱动高度。

## 验证结果

`npm test` 全部通过，包含分类、档案加载、文案来源、分类图谱、轮播交互与全目录封面、生产构建及子路径资源检查。生产构建通过初始 JavaScript 和独立档案加载预算。新增回归检查区分灭绝事件、评估年、历史范围和复原图说明。`git diff --check` 通过。
