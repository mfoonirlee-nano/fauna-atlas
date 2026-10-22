# 第十一批灭绝动物：E051–E055

2026-10-22 核验。本批补齐 todo 中最后五种非鸟恐龙。档案使用 `Historical and fossil evidence` 与 EX，保留代表性化石时期，不填 IUCN 评估年份或当前活体坐标。

| 编号 | 物种 | 资料与复原限定 |
| --- | --- | --- |
| E051 | 图特河包头龙 *Euoplocephalus tutus* | [Arbour 与 Currie 2013](https://doi.org/10.1371/journal.pone.0062421)重评头骨、甲环、尾部与旧标本归属。本档案采用恐龙公园组记录，不把所有曾归入包头龙的材料合并。 |
| E052 | 怀俄明肿头龙 *Pachycephalosaurus wyomingensis* | [NHM](https://www.nhm.ac.uk/discover/dino-directory/pachycephalosaurus.html)介绍骨穹、食性及行为解释，[Smithsonian 馆藏](https://www.si.edu/object/nmnhpaleobiology_3448763)记录种名与命名者。骨穹不证明固定的正面撞头行为，食性保留推断限定。 |
| E053 | 短颈潘龙 *Amargasaurus cazaui* | [原始描述英译](https://www.naturalhistory.si.edu/sites/default/files/media/translated_publications/Salgado%26amp%3BBona_91.pdf)、[2022 年骨组织研究](https://doi.org/10.1111/joa.13659)与 [NHM](https://www.nhm.ac.uk/discover/dino-directory/amargasaurus.html)。保留 todo 的中文选题标签，学名确定种级范围；颈棘间的皮帆采用研究解释，精确软组织外形仍属推测。 |
| E054 | 蒙古镰刀龙 *Therizinosaurus cheloniformis* | [NHM](https://www.nhm.ac.uk/discover/dino-directory/therizinosaurus.html)与[福井县立恐龙博物馆前肢资料](https://www.dinosaur.pref.fukui.jp/dino/database_view/detail.php?id=309)。长爪与部分前肢有直接证据，全身比例、小头、羽毛等需要比较近缘种，不能把画面称为完整化石记录。 |
| E055 | 蒙古鹦鹉嘴龙 *Psittacosaurus mongoliensis* | [NHM](https://www.nhm.ac.uk/discover/dino-directory/psittacosaurus.html)、[Sereno 的发现与分类研究](https://www.cambridge.org/core/books/abs/dinosaur-systematics/new-data-on-parrotbeaked-dinosaurs-psittacosaurus/832ED13E8DF140D6D164593FD19DA300)及[皮肤研究](https://doi.org/10.1038/s42003-022-03749-3)。不将未定种标本的尾鬃与颜色直接套用到本种。 |

## 分类口径

[GBIF／PBDB 原始查询](../../src/assets/source/todo-extinct-eleventh-five-taxonomy.json)保留查询日期、URL 和返回内容；[采用表](../../src/assets/source/todo-extinct-eleventh-five-adopted-taxonomy.json)记录最终分类与来源。沿用既有分类基线，不强填该基线未设置的纲与目。

- 包头龙：GBIF 返回旧组合 Stereocephalus 及剑龙科；采用 2013 年原始研究与 PBDB 的 Euoplocephalus／甲龙科。
- 肿头龙：GBIF 返回 Troodon／伤齿龙科；采用 NHM 与 Smithsonian 的 Pachycephalosaurus，科采用 NHM 的肿头龙科。PBDB 未设置科，不据此删除已有博物馆支持的科级归属。
- 短颈潘龙：GBIF 返回梁龙科；采用原始描述、2022 年研究、NHM 与 PBDB 的叉龙科。
- 镰刀龙：GBIF 与 PBDB 种名、镰刀龙科一致。
- 蒙古鹦鹉嘴龙：GBIF 与 NHM 支持鹦鹉嘴龙科；PBDB 未设置科，本档案采用有来源的科名。

PBDB 的宽泛年龄字段仅为查询证据，不直接当作最早出现或精确灭绝时间。各档案独立记录发现与命名，并扩充共读文案审核记录。

## 图片与验证

每种使用内置 image_gen 制作一张封面、五张观察图，均为 AI 科学复原示意。颜色、软组织、植物布景与姿态含推测；不将生成图当作真实馆藏、照片或骨架。完整提示词、源 PNG 与运行 WebP 的哈希及尺寸、完整主体边界与逐帧几何记录存于各物种的素材目录。

首版包头龙、肿头龙与短颈潘龙的封面有身体部位进入左侧文字区，重新生成右侧完整主体构图。蒙古鹦鹉嘴龙封面也重新生成右侧构图；短颈潘龙侧面观察图修订了完整尾端。各目录保存初稿与修订提示词，新增物种没有此前运行封面。

遵循项目要求，不启动 GUI 或无头浏览器。源图、运行 WebP、静态图片栏模拟与几何检查分别记录；这些检查不能验证浏览器字体、完整页面排版或实际内容高度。

最终验证：

- `npm test`：1083 项通过，0 项失败。包含分类、档案、共读文案、图谱、轮播交互、图片查看、生产构建与子路径资源检查。
- `test:carousel`：763 项资源与几何检查、8 项交互检查通过；`test:dist-subpath`：5 项通过。
- `npm run typecheck` 与生产构建通过。动物页脚本共 549,436 字节，低于 550,000 字节预算。目录压缩词典允许中文标点参与重复短语匹配，逐字段还原检查通过。
- 最终保留30张 WebP，共9,647,090字节。封面均为1672×941；短颈潘龙侧面观察图为1774×887，其余图的实际解码尺寸逐项存入图片验收数据。
- 源图联系表、五张原分辨率封面与最终运行 WebP 分别检查；检查五种在390、761、1920、3840宽的图片栏模拟。九档视口和内容高度增加160px共16组，覆盖六种动画端点，最小几何间距24 CSS px。静态检查不验证浏览器字体及完整页面。
- `git diff --check` 通过。验收后移除本批临时PNG、联系表和模拟文件，每种只保留六张运行图片。

目录现有755份物种档案；本轮todo完成55种、剩余45种，非鸟恐龙组完成。
