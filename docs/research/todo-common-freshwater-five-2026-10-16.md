# 身边动物淡水鱼五种：研究与验收

2026-10-16。本批接续 todo 的鲤、草鱼、鲢、马口鱼和鳙，每种制作一份物种档案、一张封面和五张观察图。完成后本轮累计 35/100，待制作 65；全图册 635 份物种档案。

## 分类与范围

五种在 GBIF strict match 中均为 ACCEPTED、EXACT。原始响应见[分类核验 JSON](../../src/assets/source/todo-common-freshwater-five-taxonomy-match.json)。新增前按学名与原有 630 份档案查重。

| 档案 | 学名 | GBIF key | 项目采用的科、属 |
| --- | --- | --- | --- |
| 鲤 | Cyprinus carpio | 4286975 | Cyprinidae → Cyprinus |
| 草鱼 | Ctenopharyngodon idella | 2362030 | Cyprinidae → Ctenopharyngodon |
| 鲢 | Hypophthalmichthys molitrix | 2362473 | Cyprinidae → Hypophthalmichthys |
| 马口鱼 | Opsariichthys bidens | 2365479 | Cyprinidae → Opsariichthys |
| 鳙 | Hypophthalmichthys nobilis | 2362486 | Cyprinidae → Hypophthalmichthys |

本批 GBIF 实时响应缺少纲。图册沿用现有鲤形目档案的辐鳍鱼纲 Actinopterygii，参照 [ADW 的鲤分类链](https://animaldiversity.org/accounts/Cyprinus_carpio/classification/)，保持共享鲤形目的上级一致；并未把该纲伪称为本次 GBIF 响应字段。科级沿用项目 GBIF 的广义鲤科基线。FishBase 等较新的口径把马口鱼等部分鱼类放在 Xenocyprididae，本批在档案分类说明中记录差异，不把两种科级口径拼接到一个科节点。

[USGS 的锦鲤资料](https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=3294)区分 C. carpio 和接受种 C. rubrofuscus；鲤档案不把锦鲤、东亚全部野生鲤或商品“鲤鱼”都并入 C. carpio。地图代表点设在欧洲养殖场景附近，不把商品名当作中国原生分布证据。草鱼采用 GBIF 的 C. idella，保留 FAO 旧页 C. idellus 的拼写差异。鳙的旧属名 Aristichthys 仅用于检索说明。马口鱼限定 O. bidens，不混入近缘种的分布；旧地区研究的范围以研究地点为限。

## 研究与共读

- 鲤：[FAO](https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_commoncarp.htm)支持嘴旁两对须、长背鳍、杂食与黏卵；共读比较嘴和鳍，不按颜色鉴定养殖品系。
- 草鱼：[FAO](https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_grasscarp.htm)支持成鱼食草、鱼苗食浮游动物及流水繁殖条件；共读区分不同生活阶段的食物。
- 鲢：[FAO](https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_silvercarp.htm)支持低位眼、滤食和非黏性漂移卵；不为演示跳跃惊扰鱼，也不把滤食写成处理任何污染的能力。
- 马口鱼：[清弋江原始研究](https://zoolstud.sinica.edu.tw/Journals/51.4/476.pdf)支持溪流、砾石底、食性随体型变化及本地成长繁殖；[中研院保存的标本资料](https://fishdb.sinica.edu.tw/eng/specimendetail.php?id=NTOUP200802-192)用于核对学名和地区记录。单一地点的寿命、繁殖季和体长分界不推广为全国常数。雌雄体色参照 [FishBase](https://www.fishbase.se/summary/Opsariichthys-bidens.html)。
- 鳙：[FAO](https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_bigheadcarp.htm)支持大头、斑驳体侧、浮游动物食物与流水中的半浮性卵；与鲢的食物偏好作比较，不写成互不重叠。

五种均保留测量空值，不把最大纪录写成常见体长。命名作者和年份来自 GBIF，命名时间不表述为人类首次发现时间。地图点用于探索，不代表实测出现点或完整范围。

## 全球保护状态

FishBase 当前页面明列的全球 IUCN 等级与评估日期如下。IUCN 直连本次未能读取，采用可读的 FishBase 明列值，不把直连当作已独立核实的评估正文；全球趋势保留 unknown。评估年份来自页面的 Date assessed，不采用页面更新时间。

| 档案 | 等级 | 评估日期 | 对照资料 |
| --- | --- | --- | --- |
| 鲤 | LC | 2022-06-09 | [FishBase](https://www.fishbase.se/summary/Cyprinus-carpio.html) |
| 草鱼 | LC | 2020-03-30 | [FishBase](https://www.fishbase.se/summary/Ctenopharyngodon-idella.html) |
| 鲢 | NT | 2011-01-20 | [FishBase](https://www.fishbase.se/summary/Hypophthalmichthys-molitrix.html) |
| 马口鱼 | LC | 2020-04-01 | [FishBase](https://www.fishbase.se/summary/Opsariichthys-bidens.html) |
| 鳙 | DD | 2010-09-02 | [FishBase](https://www.fishbase.se/summary/Hypophthalmichthys-nobilis.html) |

养殖产量、菜市场可见性和野生种群等级分别说明。鲤旧版 2008 年资料与当前 FishBase 明列的 2022 年评估不同，档案不混用年份与等级。

## 图片与验收

使用内置 image_gen，逐个情景独立生成，标明 AI 科学情景重建。卵为放大情景，未按实测比例绘制；不用于精确物种鉴定、鳍条计数、鳃耙或胚胎解剖。幼鱼、雌雄和取食场景分别标注，静图不表示连续运动或实测记录。

图片记录、最终提示及哈希：

- [鲤](../../src/assets/source/species/common-carp/README.md)
- [草鱼](../../src/assets/source/species/grass-carp/README.md)
- [鲢](../../src/assets/source/species/silver-carp/README.md)
- [马口鱼](../../src/assets/source/species/chinese-hooksnout-carp/README.md)
- [鳙](../../src/assets/source/species/bighead-carp/README.md)

源图检查：五张封面 PNG 在原始分辨率检查，五套图库使用源图联系图逐张检查。鲤、鲢、马口鱼和鳙首次候选侵入左侧留白，使用内置 image_gen 调整主体大小和位置；草鱼首次候选通过。五张最终源封面与 30 张运行 WebP 均为 1536×1024。

运行图片检查：五张 WebP 封面在原始分辨率分别检查，五套图库另检查运行联系图。运行尺寸由 ImageMagick 实际解码读取，30 张运行哈希与 prompts.json 一致；五张封面的完整可见主体边界、尺寸与唯一 original-covers fixture 及 cover-subjects 一致，fixture 绑定当前 WebP 哈希。首次入库，没有旧运行封面可对照。

几何与模拟：检查 45 组图片栏模拟，覆盖 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900 和 3840×900。移动端全图 contain，桌面主体最大化；桌面另计算内容增加 160px 的情景，总计 80 组几何记录。六个透明度动画端点共享几何，主体最小间距至少 24 CSS px。未启动 GUI 或无头浏览器；静态模拟不验证浏览器字体、完整页面排版或真实内容高度。

## 验证

- `npm run typecheck` 通过。
- `npm run test:carousel` 通过：643 项轮播几何与资源检查、8 项轮播交互检查，覆盖全部 635 种动物及本批新增封面构图。
- `npm test` 通过，共 957 项、0 失败，包含分类、文案、物种档案、地图探索、图片查看器、微生物和构建子路径检查。本批新增一项集成检查，核对物种边界、分阶段食物、保护状态及六张图片的运行哈希。
- `npm run test:dist-subpath` 随全套测试通过，含生产构建、子路径图片可达性、目录与完整档案一致性及现有 JavaScript 预算；未提高预算。
- 30 张运行 WebP 的哈希、实际尺寸、文档相对链接与 `git diff --check` 通过。

todo 已移出本批五项并更新完成归档，本轮完成 35/100、待制作 65，全图册 635 份物种档案。验收后清理仓库内 30 张临时 PNG、联系图、模拟图与辅助脚本，保留运行 WebP 和文字、哈希、几何记录。浏览器字体与完整页面排版仍未验证。
