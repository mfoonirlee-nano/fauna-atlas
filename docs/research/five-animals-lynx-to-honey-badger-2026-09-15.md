# 欧亚猞猁至蜜獾：五份物种档案资料核验

核验日期：2026-09-15。按 `docs/todo.md` 尚未完成的顺序制作。

| 物种 | 科／属 | 全球等级 | 观察内容与依据 |
| --- | --- | --- | --- |
| 欧亚猞猁 Lynx lynx | Felidae／Lynx | LC 无危 | 短尾、耳簇、雪地脚掌与独居：[IUCN 猫科专家组](https://www.catsg.org/living-species-eurasianlynx) |
| 灰狼 Canis lupus | Canidae／Canis | LC 无危 | 外形和食性：[ADW](https://animaldiversity.org/accounts/Canis_lupus/)；全球等级及稳定趋势：[IUCN 犬科专家组](https://www.canids.org/species/view/PREKLD895731)；家庭群体、育幼与嚎叫：[美国国家公园管理局](https://www.nps.gov/articles/life-of-a-wolf.htm) |
| 非洲野犬 Lycaon pictus | Canidae／Lycaon | EN 濒危 | 斑块、圆耳、群居与育幼：[ADW](https://animaldiversity.org/accounts/Lycaon_pictus/)；现存分布、下降趋势与威胁：[IUCN 犬科专家组](https://www.canids.org/species/view/African-wild-dog) |
| 斑鬣狗 Crocuta crocuta | Hyaenidae／Crocuta | LC 无危 | 分类、前高后低的轮廓与幼崽毛色：[ADW](https://animaldiversity.org/accounts/Crocuta_crocuta/)；捕猎、群体交流与保护：[圣迭戈动物园](https://animals.sandiegozoo.org/animals/spotted-hyena) |
| 蜜獾 Mellivora capensis | Mustelidae／Mellivora | LC 无危 | 分类、等级与威胁：[ADW](https://animaldiversity.org/accounts/Mellivora_capensis/)；毛色、掘土、育幼：[圣迭戈动物园](https://animals.sandiegozoo.org/animals/honey-badger-ratel) |

## 口径与限制

- 五种均归入动物界、脊索动物门、哺乳纲、食肉目；分类图谱记录物种，不拆分亚种。斑鬣狗归鬣狗科，蜜獾归鼬科。
- 全球等级与地方种群处境分开。未单独核实红色名录评估日期，`assessedYear` 留空；访问日期不代替评估日期。
- 灰狼专家组页面记载全球趋势稳定，非洲野犬页面记载下降。欧亚猞猁和斑鬣狗未核实统一的全球趋势，保留 `unknown`。
- 蜜獾 ADW 正文记录下降，动物园页面用“Stable”概括保护状况；档案采用 ADW 的趋势描述，未将动物园状态标签当作全球评估更新。
- 斑鬣狗 ADW 正文保留旧的 Lower Risk／Conservation dependent 描述，当前链接字段为 Least Concern；结合动物园的非受胁说明，使用 LC，不沿用旧类别。
- 灰狼亲子共读聚焦抬头姿势与同伴联络，不把嚎叫与月亮绑定，也不把野生家庭群体写成固定的争夺首领故事。蜜獾内容不宣称免疫蜂蜇或蛇毒。
- 未核实统一可比较的体长、体重和寿命口径，数值字段留空。图片不作大小测量依据。
- 图片使用内置 image_gen 独立生成，为科学情景重建；不代表同一个体的连续行为或实拍记录。各物种目录保留最终提示词、运行图片哈希与封面验收。

灰狼专家组页面的浏览工具打开失败，随后通过 HTTP 获取正文，确认全球 LC 与稳定趋势。旧黄石公园 `wolves.htm` 返回 404，改用已读取的国家公园管理局生态基础页面。
