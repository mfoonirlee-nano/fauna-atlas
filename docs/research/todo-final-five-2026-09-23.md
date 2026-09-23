# todo 最后五种核验记录（2026-09-23）

本批补齐欧洲鲽、豉甲、孔雀蜘蛛、鹅颈藤壶、丰年鲎虫。todo 共 100/100 项完成，站内共 400 份物种档案。

每种包含一张封面与五张图库，共 30 张独立 WebP，均为 1536×1024。使用内置 image_gen 生成及修正，原分辨率检查源图与封面 WebP；图库 WebP 通过联系表及单张复核。最终提示词、图片哈希、主体边界及六种视口投影尺寸保存在各物种的图片记录中。临时 PNG 不纳入版本库。

图片属于 AI 生成科学情景重建，不用于实拍证明、精确比例或微细物种鉴别。豉甲两张图重做以去除误导性浅色边纹；藤壶群体改为水下附着姿态；欧洲鲽、藤壶和鲎虫封面经重做或构图编辑后保留完整主体。

## 欧洲鲽 · Pleuronectes platessa

MarLIN 支持眼位、斑点、食性与英国沿岸生境。本轮未核实全球 IUCN 等级，NE 为仓库缺省记录，不代表无危。

- [MarLIN：Plaice](https://www.marlin.ac.uk/species/detail/2172)

## 豉甲 · Gyrinus natator

豉甲也可泛指豉甲科，本档案仅指 Gyrinus natator。它与 G. substriatus 等近似种的区别不能靠生成图确认。英国区域记录不代表全球状态；本轮未核实全球 IUCN 等级，NE 不代表无危。

- [JNCC：英国水生甲虫评估](https://data.jncc.gov.uk/data/e80beaf2-456c-4178-8f91-16c2ef01368d/SpeciesStatus-1-Coleoptera-WEB-2010.pdf)
- [Manaaki Whenua：Gyrinus](https://www.landcareresearch.co.nz/tools-and-resources/identification/freshwater-invertebrates-guide/identification-guide-what-freshwater-invertebrate-is-this/jointed-legs/insects-and-springtails/larval-beetles/whirlygig-beetle-gyrinus-2/)
- [豉甲复眼研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5380007/)
- [捷克 Gyrinus natator 记录与鉴别](https://klapalekiana.cz/en/klapalekiana/volume-57-3-4/2327/the-whirligig-beetle-gyrinus-natator-coleoptera-gyrinidae-in-the-czech-republic-with-notes-on-the-identification-of-the-species.html)

## 孔雀蜘蛛 · Maratus volans

孔雀蜘蛛是多个 Maratus 物种的通称，本档案限定 Maratus volans。展示姿势来自本种求偶研究，取食说明采用跳蛛科资料。本轮未核实全球 IUCN 等级，NE 不代表无危。

- [Australian Museum：Jumping spiders](https://australian.museum/learn/animals/spiders/jumping-spiders/)
- [Maratus volans 多模态求偶研究](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0025390)

## 鹅颈藤壶 · Lepas anatifera

采用 Lepas anatifera；资料中的 Lepas (Lepas) anatifera 含亚属写法，指同一物种。鞘甲纲沿用仓库口径，目采用 Scalpellomorpha。本轮未核实全球 IUCN 等级，NE 不代表无危。

- [MarLIN：Common goose barnacle](https://www.marlin.ac.uk/species/detail/2058)
- [NCBI：Lepas anatifera 分类路径](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=37710)
- [Lepas anatifera 线粒体基因组研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9225761/)

## 丰年鲎虫 · Triops cancriformis

采用 Triops cancriformis，不与海水中的鲎或丰年虾混同。Buglife 列全球未评估；英国区域受威胁信息不替代全球等级。不沿用“同一物种两亿年不变”的说法。

- [Buglife：Tadpole Shrimp](https://www.buglife.org.uk/bugs/bug-directory/tadpole-shrimp/)
- [Triops cancriformis 性系统研究](https://www.nature.com/articles/hdy201510)
- [Natural History Museum：Triops cancriformis](https://uksi-sandbox.nhm.ac.uk/taxon.php?linkKey=NBNSYS0000032970)

## 构建与验收

新增五份档案使入口脚本达到 约 350.6 KB，超过 350,000 bytes 限制。目录编码复用固定格式的图片替代文本，解码时恢复完整文字；保留原有体积限制和逐物种按需加载，完整档案不变。完整 npm test 通过，共 652 项测试，其中分类与加载 205 项、轮播 407 项、物种列表 22 项、构建产物 3 项。生产构建与类型检查通过；入口 JS 为 349,168 bytes，低于原限制。30 张 WebP 共 5,861,788 bytes；图片数量、尺寸、解码、唯一哈希及验收记录一致。未启动浏览器。
