# todo 余下七种哺乳动物与两种两栖动物

核查日期：2026-10-18。目标为九份独立物种档案，每种一张封面和五张观察图。图片统一为内置 image_gen 生成的科学情景重建，不作为实地观测记录、亚种鉴定或行为测量证据。

## 分类与范围

采用本库现有 GBIF 分类链。九个查询的原始响应和 IUCN 发布于 GBIF 的名录响应保存在[原始资料](../../src/assets/source/todo-all-mammals-amphibians-taxonomy-iucn.json)。添加前检索现有学名与别名，没有重复档案。

| 档案 | 采用学名 | GBIF 接受记录 | 范围说明 |
| --- | --- | --- | --- |
| 赤腹松鼠 | Callosciurus erythraeus | [2437394](https://www.gbif.org/species/2437394) | 丽松鼠属，与欧亚红松鼠分开；毛色不作为亚种诊断。 |
| 黄鼬 | Mustela sibirica | [5218972](https://www.gbif.org/species/5218972) | 与日本鼬分别记录。 |
| 双峰驼 | Camelus bactrianus | [2441238](https://www.gbif.org/species/2441238) | 本页限定家养范围，野骆驼 C. ferus 的 CR 不套给家双峰驼。 |
| 牦牛 | Bos grunniens | [2441019](https://www.gbif.org/species/2441019) | 本页限定家养范围，与野牦牛 B. mutus 分开。 |
| 马鹿 | Cervus elaphus | [2440958](https://www.gbif.org/species/2440958) | 采用西方马鹿范围；加拿大马鹿 C. canadensis 和亚洲近缘群不能按旧中文名称整批并入。 |
| 小麂 | Muntiacus reevesi | [2440946](https://www.gbif.org/species/2440946) | 原生与欧洲引入范围分开，保留近缘麂鉴定局限。 |
| 西伯利亚花栗鼠 | Tamias sibiricus | [2437450](https://www.gbif.org/species/2437450) | GBIF 将目标名 Eutamias sibiricus 作为异名；IUCN 的 Eutamias 组合保留在来源中，不重复建档。 |
| 黑眶蟾蜍 | Duttaphrynus melanostictus | [2422538](https://www.gbif.org/species/2422538) | 沿用 GBIF 广义名称，记录复合群及新研究的范围冲突。 |
| 泽陆蛙 | Fejervarya multistriata | [2430411](https://www.gbif.org/species/2430411) | 保留旧泽蛙记录可能混有川村陆蛙等近缘种的局限。 |

花鼠属中文名参考[中国兽类名录 2024](https://cdn.sciengine.com/doi/pdf/46E010F42A7D4C96877CD3FB59901108)，头棱蟾属中文名参考[中国科学院昆明动物研究所中国两栖类](https://www.amphibiachina.org/species/47)。

[2025 年 Nature Communications 原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11706960/)区分印度次大陆的真 D. melanostictus 与东南亚谱系；[ASW 条目](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Bufonidae/Duttaphrynus/Duttaphrynus-melanostictus)记录后续分类讨论。因此档案说明历史中国和东南亚记录不能自动确认为狭义种，地图代表点放在印度次大陆，图库也不承担复合群内鉴种。

## 保育证据

家双峰驼和家牦牛使用 NE，不记录评估年份。七个野生目标的 IUCN-GBIF 接受记录为 LC；名录不能证明每个地区都常见，也不能证明评估完成年份。

- 黄鼬：[IUCN 原始评估作者上传版](https://www.researchgate.net/publication/332440345_Mustela_sibirica_The_IUCN_Red_List_of_Threatened_Species)给出 2015-03-03 评估、2016 年发表。档案记录 assessedYear=2015。
- 小麂：[IUCN 原始评估作者上传版](https://www.researchgate.net/publication/332440237_Muntiacus_reevesi_Reeves%27_Muntjac_THE_IUCN_RED_LIST_OF_THREATENED_SPECIES)给出 2016-03-31 评估。档案记录 assessedYear=2016。
- 马鹿：[IUCN 全文](https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T55997072A142404453.en)给出 2015-10-12 评估、2018 年发表、2019 年勘误，全球趋势 increasing。
- 赤腹松鼠、花栗鼠、黑眶蟾蜍和泽陆蛙的独立评估日期本次没有核实。档案保留 LC、unknown 趋势和空年份，并明确资料边界。黑眶蟾蜍保育等级沿用广义评估范围。泽陆蛙的较早文献曾引用 DD，[IUCN 2023-1 类别变化表](https://nc.iucnredlist.org/redlist/content/attachment_files/2023-1_RL_Table_7.pdf)明确记录泽陆蛙由 DD 调为 LC，表中的 N 表示非真实风险变化；此处采用 LC，不把变化解释为种群恢复；没有把发表年填成评估年。

## 内容来源

赤腹松鼠参考 [Mammalian Species 形态与生态综述](https://www.science.smith.edu/departments/Biology/VHAYSSEN/msi/pdf/902_Callosciurus_erythraeus.pdf)。黄鼬参考 [Mammalian Species 专篇](https://academic.oup.com/mspecies/article/50/966/109/5102491)。这些资料及 ADW 条目支持外形、食物和生活史描述；本批未复制精确体长、体重、寿命或种群数字。

家双峰驼范围依据 [MDD](https://www.mammaldiversity.org/taxon/1006382/)及[野骆驼名称原始论文](https://doi.org/10.1017/S0030605322000114)。ADW 的旧双峰驼页混合家野范围，仅用于外形与生理共通特征，不用于家双峰驼保育和天然分布。

家牦牛参考 FAO《The Yak》的[起源与分布](https://www.fao.org/4/ad347e/ad347e05.htm)、[品种与命名](https://www.fao.org/4/ad347e/ad347e06.htm)、[饲养管理](https://www.fao.org/4/ad347e/ad347e0j.htm)。书中较早的全球数量估计没有搬入当前档案。

马鹿参考 [NatureScot 生境、食物及群体描述](https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/deer)与 IUCN 的物种范围。小麂参考 [ADW](https://animaldiversity.org/accounts/Muntiacus_reevesi/)、MDD 和原始 IUCN 评估。花栗鼠参考 [ASM](https://www.mammalogy.org/image-library/eutamias-sibiricus-4919)、[引入种群分布综述](https://doi.org/10.1111/mam.12117)和 [ADW](https://animaldiversity.org/accounts/Tamias_sibiricus/)。

两栖类的命名记录采用 AMNH 的 ASW。泽陆蛙生境参考[上海农田水体原始研究](https://doi.org/10.1016/j.agee.2019.04.003)，变态参考 [2026 年尾吸收研究](https://pubmed.ncbi.nlm.nih.gov/41875788/)。图中蝌蚪、卵带和亲子组合都是教学情景，不能据同框推断个体关系或确证种名。

## 影像与验证

每种提示词、源图及运行图尺寸与 SHA-256 记录在对应 `src/assets/source/species/<slug>/prompts.json`。封面边界包含可见须端、角尖、耳、足及尾端；一张封面同时用于桌面与移动端。

验收按当前 `fitHeroSubject` 检查九个规定视口，并检查七个桌面视口增加 160 CSS px 内容高度的情况。每例保留 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六个端点。动画不改变主体几何，要求完整主体与图片栏边缘至少相隔 24 CSS px。

原分辨率源封面、运行 WebP、源观察图联系图和运行联系图分别检查，并检查静态图片栏模拟。没有启动浏览器；几何和静态模拟不能验证浏览器字体或完整页面排版。全库集成后的类型、轮播、分类与生产预算测试由本批总验收报告记录。

本组最终验收：54 张 WebP 的实际解码尺寸、SHA-256 和六图唯一性全部通过；九种共 144 个几何案例通过 24 CSS px 间距要求。原分辨率源封面及运行图、18 份源/运行联系图、81 个静态图片栏模拟已完成目视检查。小麂第 5 张观察图已纠正成体性别；54 个仓库临时 PNG 已移除。
