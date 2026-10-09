# 2026-10-09：拓展清单首批五种动物

本批按活动清单建议的首批顺序制作双足蚓蜥、大鳗螈、斑点银鲛、强壮海鞘和海萤。活动清单中的 Siren lacertina 采用“大鳗螈”中文展示名，学名用于定位物种。

## 资料与分类口径

| 物种 | 资料范围与限定 |
| --- | --- |
| 双足蚓蜥 *Bipes biporus* | [密歇根大学 ADW](https://animaldiversity.org/accounts/Bipes_biporus/)支持下加利福尼亚半岛范围、地下生活、环状鳞片、两只五趾前足和后肢缺失。[爬行动物数据库](https://reptile-database.reptarium.cz/Bipes/biporus)核对 Bipedidae 科与 Squamata 目。ADW 表头误把 Amphisbaenia 放在科级，未采用。GBIF 名称匹配将 Squamata 放在纲级且缺目，未直接复制这个链，沿用项目 Reptilia 纲、Squamata 目口径。 |
| 大鳗螈 *Siren lacertina* | [ADW](https://animaldiversity.org/accounts/Siren_lacertina/)支持美国东南部淡水生活、成年外鳃、两只四趾前足与后肢缺失，并记录肺呼吸和植物性食物。旧页的繁殖和守卵叙述本批没有采用。[AMNH 两栖物种数据库](https://amphibiansoftheworld.amnh.org/Amphibia/Caudata/Sirenidae/Siren/Siren-lacertina)核对接受学名及 Amphibia / Caudata / Sirenidae / Siren。 |
| 斑点银鲛 *Hydrolagus colliei* | [佛罗里达博物馆](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/spotted-ratfish/)支持钝吻、大眼、胸鳍、尾部、背鳍毒棘、齿板、食物与东北太平洋分布。[Harvard MCZ](https://mczbase.mcz.harvard.edu/name/Hydrolagus%20colliei)支持项目采用的 Chondrichthyes 纲、Holocephali 亚纲、Chimaeriformes 目口径；GBIF / WoRMS 使用 Holocephali 纲，本批不混用。图中成鱼为雌性形态重建，卵鞘场景不表示守卵。 |
| 强壮海鞘 *Ciona robusta* | [Smithsonian NEMESIS](https://invasions.si.edu/nemesis/calnemo/species_summary/-701)支持单体附着、两个水管口、滤食及引入范围，原生范围保留争议。[研究综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8450388/)支持有尾幼体、附着变态以及旧名 C. intestinalis type A；type B 对应 C. intestinalis，不混用其记录。使用 Chordata / Ascidiacea / Phlebobranchia / Cionidae / Ciona，成体没有脊柱。 |
| 海萤 *Vargula hilgendorfii* | [日本底栖生物学会生活史研究](https://www.jstage.jst.go.jp/article/benthos1996/57/2/57_2_103/_pdf)支持天草海岸、沙泥底、夜间活动与壳内育幼。[大阪湾研究](https://www.jstage.jst.go.jp/article/jila/75/5/75_451/_article)补充地点与底质，未把局部调查参数当作全物种常数。[原始录像研究](https://cir.nii.ac.jp/crid/1361981470929203200)支持附肢、取食与蓝色发光分泌物。采用 Arthropoda / Ostracoda / Myodocopida / Cypridinidae / Vargula，外壳本身不持续发光。放大重建不供计数、测量或鉴定。 |

2026-10-09 实读 GBIF 名称匹配 API，五个学名均返回接受种名，usageKey 分别为 5222409、2432068、5215461、4356092、8058329。分类链采用上表说明的项目口径，不把来源差异转换为额外图谱关系。中文少见类群名称作为项目展示标签，学名为物种定位依据。

五种保护状态采用项目 NE 占位规则：本次未核实全球物种级 IUCN 评估，未填评估年份，未推断全球种群趋势。博物馆旧页中的 LC 不能直接代表当前评估。

## 图片与验收记录

使用内置 image_gen 逐张生成。每种保留一张封面及五张观察图，文件位于 `public/images/species/<slug>/`，提示词与哈希保存在对应来源目录的 `prompts.json`。

图片集：

- [双足蚓蜥](../../src/assets/source/species/mexican-mole-lizard/README.md)
- [大鳗螈](../../src/assets/source/species/greater-siren/README.md)
- [斑点银鲛](../../src/assets/source/species/spotted-ratfish/README.md)
- [强壮海鞘](../../src/assets/source/species/robust-sea-squirt/README.md)
- [海萤](../../src/assets/source/species/sea-firefly/README.md)

源图检查：六图源图联系表覆盖全部最终场景，五张封面按原分辨率检查。海鞘封面初版水管口偏黄，编辑为浅色边缘并保留红色小斑点；最终编辑图另作原分辨率复核。

运行图检查：五张封面 WebP 按原分辨率查看，五组六图联系表检查全部最终场景。30 张 WebP 均为实际解码 1536×1024，各有独立 SHA-256。提示词保留临时 PNG 哈希及源图、运行图尺寸。海鞘观察图 05 为成体与幼体阶段对照，银鲛观察图 06 为成鱼与卵鞘情景对照；图注说明比例和行为限定。

几何检查：五张封面完整主体边界同步于主体表及唯一 fixture，绑定当前 WebP 哈希。九档视口共 45 组计算均达到 24 CSS px 最小边距；初始、前进与后退 enter/leave 动画端点只改变透明度，沿用相同几何。海萤边界包含细长附肢末端，未使用头部或壳体局部边界代替完整主体。

视觉模拟：查看全部 45 个静态图片栏模拟，以最终 WebP 和当前 fitHeroSubject、移动端 contain 规则制作，背景为同一封面的模糊暗化副本。主体与面板边缘留有背景，文案与控件采用现有独立布局区域。按仓库要求不启动浏览器；静态几何与图片栏模拟不验证浏览器字体、实际内容高度或完整页面排版。

## 验证结果

- `npm run typecheck` 通过。
- `npm test` 全部 787 项通过，含分类与档案、轮播几何、独立微生物专题、生产构建、子路径资源及首屏 JavaScript 预算检查。
- 30 张图的实际解码尺寸、独立哈希、每种六图以及提示词记录核对通过。
- 活动 TODO 剩余 95 个唯一物种，完成归档新增 5 种；目录总数为 505。
- `git diff --check` 通过。来源目录保留 README、提示词和几何验收记录，临时 PNG 在验收后清理。

首次完整测试发现新图片 README 缺少旧验收工具读取的哈希表，已补齐。旧测试把当前 TODO 假定为空，已改为核对 95 个未完成动物、排除已完成档案与微生物选题；最终完整测试通过。首屏构建预算沿用现有上限，本批没有改动打包方案。
