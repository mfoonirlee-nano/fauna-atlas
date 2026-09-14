# 滑龟到白氏树蛙：五物种制作依据

核验日期：2026-09-14。对应 todo 接下来五个未完成选题。每种突出一个可指认的特点，图片标注为 AI 生成科学情景重建。

## 分类与资料差异

爬行动物采用 The Reptile Database 的物种界限与科、属归属，保留项目的爬行纲、有鳞目及龟鳖目阶元。两栖动物采用 AMNH Amphibian Species of the World 的现行名称。生态资料中的旧分类不覆盖这些归属。

| 物种 | 本次名称与归属 | 处理的差异 |
| --- | --- | --- |
| 滑龟 | Trachemys scripta；Emydidae / Trachemys | 档案为种级，六张图展示红耳亚种 T. s. elegans，正文与图注说明范围。 |
| 豹纹守宫 | Eublepharis macularius；Eublepharidae / Eublepharis | ADW 旧页列 Gekkonidae；采用爬行动物数据库的睑虎科，不沿用其旧科级归属。 |
| 伞蜥 | Chlamydosaurus kingii；Agamidae / Chlamydosaurus | 延续仓库 Agamidae 的中文名“鬣蜥科”。 |
| 玉米蛇 | Pantherophis guttatus；Colubridae / Pantherophis | ADW 仍把 emoryi 当作亚种；数据库已独立成种，不将其墨西哥范围并入玉米蛇。 |
| 白氏树蛙 | Pelodryas caerulea；Pelodryadidae / Pelodryas | AMNH 收录 2025 年属级调整；保留 Litoria caerulea、Ranoidea caerulea 为检索别名，todo 注明旧名。 |

分类来源：[滑龟](https://reptile-database.reptarium.cz/Trachemys/scripta)、[豹纹守宫](https://reptile-database.reptarium.cz/Eublepharis/macularius)、[伞蜥](https://reptile-database.reptarium.cz/Chlamydosaurus/kingii)、[玉米蛇](https://reptile-database.reptarium.cz/Pantherophis/guttatus)、[AMNH 白氏树蛙](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pelodryadidae/Pelodryas/Pelodryas-caerulea)。

中文“澳雨蛙科”沿用澳雨蛙这一名称；GBIF 的中文俗名仍保留“澳雨蛙亚科”，其记录的阶元已为科。Pelodryas 的“澳雨蛙属”是本项目展示译名，未作为正式中文命名标准引用，分类身份以 AMNH 的拉丁名与阶元为准。[GBIF](https://www.gbif.org/species/4817039)

## 文案与图片重点

- 滑龟：晒背、有蹼脚趾、红耳亚种头侧红斑，幼体与成体的食物比例差异。避免把人为引入范围写成原生范围。[ADW](https://animaldiversity.org/accounts/Trachemys_scripta/)
- 豹纹守宫：尾部储脂、活动眼睑、带爪且无黏附趾垫的脚趾；幼体横带与成体斑点。展示野生型，不把人工繁育颜色当作野外常态。伊朗记录有争议，不列入确定分布国。[San Diego Zoo](https://animals.sandiegozoo.org/animals/leopard-gecko)、[ADW](https://animaldiversity.org/accounts/Eublepharis_macularius/)、[Lee Richardson Zoo](https://www.leerichardsonzoo.org/leopardgecko)
- 伞蜥：颈褶平时收拢，防御或同类交流时展开；攀树、后肢奔跑、地面捕虫。开合图分别生成，不声称连续行为实拍。[ADW](https://animaldiversity.org/accounts/Chlamydosaurus_kingii/)、[北领地政府观察资料](https://nt.gov.au/__data/assets/pdf_file/0007/200032/frilled-lizard.pdf)
- 玉米蛇：完整无分叉身体、地面曲行、爬枝和躲藏；以小动物为食。蜕皮场景为教育重建，不声称记录同一个体的蜕皮过程。[ADW](https://animaldiversity.org/accounts/Pantherophis_guttatus/)
- 白氏树蛙：圆盘状趾端、横向瞳孔、树洞休息、夜间捕食和积水中繁殖；不同颜色图不作为同一个体的连续变色证据。[Australian Museum](https://australian.museum/learn/animals/frogs/green-tree-frog/)、[Perth Zoo](https://perthzoo.wa.gov.au/animal/green-tree-frog)

尾部储脂另据 [2015 年豹纹守宫尾部研究](https://pubmed.ncbi.nlm.nih.gov/25935709/)；玉米蛇蜕皮另据 [新泽西州野生动物部门档案](https://www.nj.gov/dep/fgw/ensp/pdf/end-thrtened/cornsnake.pdf)。

## 保护等级与字段限制

五种均有 LC 来源：滑龟采用 [ITIS 引用](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=173819)，ADW 正文也列 LC，但其旧状态组件显示 LR/NT，不能把两个年代的字段混为一条评估。豹纹守宫采用 [Lee Richardson Zoo](https://www.leerichardsonzoo.org/leopardgecko)，伞蜥采用 [Potawatomi Zoo](https://potawatomizoo.org/animal/frilled-lizard/)，玉米蛇采用 [ADW](https://animaldiversity.org/accounts/Pantherophis_guttatus/)，白氏树蛙采用 [Australian Museum](https://australian.museum/learn/animals/frogs/green-tree-frog/)。

未核实独立评估日期及全球趋势，不填 assessedYear，trend 使用 unknown。地方减少记录不推导全球下降趋势。体长、寿命和繁殖天数未统一测量口径，本批不填写数值范围。

图像限制：这些图片用于外形与生活场景观察，不替代标本鉴定，不用来数鳞片、精确测量或推断拍摄地点。封面完整主体边界、运行哈希、六视口及动画端点结果在各物种图片 README 中记录。
