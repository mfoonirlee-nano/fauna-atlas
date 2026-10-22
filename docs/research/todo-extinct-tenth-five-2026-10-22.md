# 第十批灭绝动物：E046–E050

2026-10-22 核验。五种采用 `Historical and fossil evidence` 与 EX，不填 IUCN 评估年份或当前活体坐标。代表性化石时期不作为精确灭绝时间。

| 编号 | 物种与直接资料 | 内容与证据限定 |
| --- | --- | --- |
| E046 | [板龙 Plateosaurus trossingensis](https://doi.org/10.1080/14772019.2024.2335387) | 晚三叠世；观察长颈、抓握前肢和强壮后腿。模式标本重描述提供骨骼比较，软组织与肤色仍需推测。 |
| E047 | [伯尼萨特禽龙 Iguanodon bernissartensis](https://collections.naturalsciences.be/ssh-paleontology/masterpieces/bernissart) | 早白垩世；拇指刺与承重手指不同。旧式直立拖尾装架反映研究史，采用较水平的脊柱和离地尾部复原。 |
| E048 | [沃克氏副栉龙 Parasaurolophus walkeri](https://dinomuseum.ca/2021/01/the-real-parasaurolophus) | 晚白垩世；空心头冠的通道支持共鸣解释，不能恢复真实叫声；末端无开口，不作呼吸管复原。 |
| E049 | [连接埃德蒙顿龙 Edmontosaurus annectens](https://www.si.edu/object/nmnhpaleobiology_3441011) | 晚白垩世；尾椎与皮肤印痕记录局部形态，不能直接给出全身颜色。其他种的软组织冠不套入本种。 |
| E050 | [巨型甲龙 Ankylosaurus magniventris](https://doi.org/10.1139/facets-2017-0063) | 晚白垩世；骨甲、头骨与尾锤来自不同标本，完整体形与甲片排列包含比较复原。尾锤不画成长刺。 |

## 分类与命名

[原始 GBIF／PBDB 查询](../../src/assets/source/todo-extinct-tenth-five-taxonomy.json)与[采用表](../../src/assets/source/todo-extinct-tenth-five-adopted-taxonomy.json)保留查询日期、返回内容和采用理由。沿用 GBIF 基线，省略未设置的纲与目，不把 PBDB 中的非一致阶元路径混入现有图谱。

- 板龙：GBIF 将所查名称导向 P. erlenbergiensis；本次采用 [ICZN 2019 年模式种裁决](https://biotaxa.org/bzn/article/view/56408)、2024 年模式标本研究及 PBDB 的 P. trossingensis，归板龙科。
- 伯尼萨特禽龙：采用 Iguanodon bernissartensis、禽龙科；比利时自然科学研究所资料确认产区、时期及骨架研究史。[NHM 发现史](https://www.nhm.ac.uk/discover/the-discovery-of-iguanodon.html)解释旧装架与后续姿态修正。
- 沃克氏副栉龙：GBIF 将 Lambeosauridae 列为科；PBDB 与博物馆资料采用 Hadrosauridae／Lambeosaurinae。本档案采用鸭嘴龙科，不将赖氏龙亚科升为科。
- 连接埃德蒙顿龙：GBIF 回到旧属名 Claosaurus annectens；本次采用 Smithsonian 与 PBDB 的 Edmontosaurus annectens、鸭嘴龙科。旧组合不另计物种。
- 巨型甲龙：GBIF 与 PBDB 的种名、甲龙科一致。解剖细节采用 Arbour 与 Mallon 2017 年研究。

每份档案独立记录发现与命名，区分属名史、具体种的命名年份及后续研究；共读文案审核表同步覆盖这五份档案。

## 图片与验收

使用内置 image_gen 制作，每种一张封面、五张观察图。最终提示词和修订、逐图源图与 WebP 哈希、实际尺寸、封面完整主体边界及轮播几何存于 `src/assets/source/species/<slug>/`。最终运行图片存于 `public/images/species/<slug>/`。

图集均为 AI 科学复原示意。颜色、软组织与植物布景含推测；外观模型不对应真实馆藏。未将不同年代、地区的物种放入同一自然场景，也不从生成图片推断精确趾数。

板龙封面初稿的尾部侵入左侧文字区，重新调整到右侧；三张侧面观察图修订完整尾端。新增物种没有既有封面，保留初稿与修订提示词作为比较记录。

验收按源图检查、运行 WebP 检查、几何与静态模拟分别记录。没有打开 GUI 或无头浏览器；静态检查不能验证浏览器字体、完整页面排版或实际内容驱动的图片栏高度。

逐种记录：[板龙](../../src/assets/source/species/plateosaurus-trossingensis/README.md)、[伯尼萨特禽龙](../../src/assets/source/species/iguanodon-bernissartensis/README.md)、[沃克氏副栉龙](../../src/assets/source/species/parasaurolophus-walkeri/README.md)、[连接埃德蒙顿龙](../../src/assets/source/species/edmontosaurus-annectens/README.md)、[巨型甲龙](../../src/assets/source/species/ankylosaurus-magniventris/README.md)。各目录的 `prompts.json` 保存最终提示词，`revisions.json` 保存存在修订的场景及原提示词。部分模型提示词返回了环境中的全身复原，档案按实际画面使用“全身外形复原”标题；仅副栉龙带底座场景称为外观模型。

最终保留 30 张 WebP，合计 10,201,694 字节。封面按实际尺寸验收：板龙1774×887，其余1672×941；连接埃德蒙顿龙与巨型甲龙的侧面观察图为1672×941，其余观察图为1536×1024。没有为统一比例拉伸图片。

最终验证：

- `npm test`：1078 项通过，包含分类、档案、共读文案审核、目录、图谱、轮播、图片查看、生产构建和子路径资源检查。
- 其中 `test:carousel`：758 项资源与几何检查、8 项交互检查通过；`test:dist-subpath`：5 项通过。
- `npm run typecheck` 与生产构建通过；动物页面脚本共549,497字节，保持550,000字节预算。全目录字段还原检查通过。
- 检查每种六张源 PNG 与六张运行 WebP 联系表，按原分辨率检查五种封面的源图与运行图。检查390、761、1920、3840宽的前景图片栏静态模拟；九档视口与内容高度增加160px共16组几何记录覆盖六种动画端点，最小间距24 CSS px。
- 补齐灭绝依据的来源类型，更新目录总数、动物界与脊索动物门的数量断言，保留分类与证据限定回归检查。
- `git diff --check` 通过。验收后清理本批工作区临时 PNG、联系表与模拟文件，每种保留六张运行 WebP。

目录现有750份物种档案；本轮TODO完成50种、剩余50种。
