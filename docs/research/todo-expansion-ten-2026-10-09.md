# 2026-10-09：五种鸟类与五种爬行动物

本批按活动清单顺序制作大响蜜鴷、红交嘴雀、丘鹬、大林鸱、茶色蟆口鸱、瘰鳞蛇、天堂金花蛇、卵食蛇、鼋和平胸龟。图像为 AI 科学情景重建，性别、阶段与放大场景分别标注。

## 资料范围

十个学名的 GBIF species/match 查询均返回 EXACT、ACCEPTED。名称查询只用于定位，分类阶元按项目口径核对。原始结果见 [taxonomy-match.json](../../src/assets/source/todo-expansion-ten-taxonomy-match.json)。

| 物种 | 依据与限定 |
| --- | --- |
| 大响蜜鴷 *Indicator indicator* | [ADW](https://animaldiversity.org/accounts/Indicator_indicator/)核对外形、蜂蜡食性与巢寄生；[剑桥研究团队](https://www.cam.ac.uk/research/news/how-humans-and-wild-birds-collaborate-to-get-precious-resources-of-honey-and-wax)核对莫桑比克的人鸟声音合作。引导行为不由静态图证明，也不采用旧资料中未充分证实的蜜獾互动。 |
| 红交嘴雀 *Loxia curvirostra* | [ADW](https://animaldiversity.org/accounts/Loxia_curvirostra/)核对嘴尖交错、雄雌与幼鸟差异；[康奈尔](https://www.allaboutbirds.org/guide/Red_Crossbill/lifehistory)核对针叶树种子与繁殖。不同种群、食物与叫声类型分开。 |
| 丘鹬 *Scolopax rusticola* | [RSPB](https://www.rspb.org.uk/birds-and-wildlife/woodcock)核对长直嘴、林地与探土取食。英国地区标签和数量不转换为全球 IUCN 状态。 |
| 大林鸱 *Nyctibius grandis* | [ADW](https://animaldiversity.org/accounts/Nyctibius_grandis/)核对夜行捕食、白天停栖伪装、宽口裂与一枚卵的天然巢位。GBIF 采用林鸱目，排除旧 ADW 的广义夜鹰目。 |
| 茶色蟆口鸱 *Podargus strigoides* | [BirdLife Australia](https://birdlife.org.au/bird-profiles/tawny-frogmouth/)核对澳大利亚范围、灰色型、夜行与枝条平台巢。本批采用 GBIF 的 Caprimulgiformes / Podargidae 归属，不把旧广义夜鹰目资料套给林鸱。足爪不采用猫头鹰模板；灰色型不代表全部个体。 |
| 瘰鳞蛇 *Acrochordus javanicus* | [Reptile Database](https://reptile-database.reptarium.cz/Acrochordus/javanicus)限定东南亚范围与产出幼蛇；[ADW](https://animaldiversity.org/accounts/Acrochordus_javanicus/)仅用于松弛皮肤、颗粒鳞片与水中取食，排除其广义分布。 |
| 天堂金花蛇 *Chrysopelea paradisi* | [Reptile Database](https://reptile-database.reptarium.cz/Chrysopelea/paradisi)核对分类、树栖与产卵；[运动捕捉研究](https://www.nature.com/articles/s41567-020-0935-4)核对变扁和空中波动，连续动作参考论文附带录像。 |
| 卵食蛇 *Dasypeltis scabra* | [Reptile Database](https://reptile-database.reptarium.cz/Dasypeltis/scabra)核对物种与游蛇科；[SANBI](https://biodiversityadvisor.sanbi.org/search/detail/80882)检索资料核对鸟卵食性、脊椎突起破壳与本种产卵。食物鸟卵不标为蛇卵。 |
| 鼋 *Pelochelys cantorii* | [IUCN 2021 评估入口](https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T135458600A1076984.en)与 [WCS 湄公河项目](https://newsroom.wcs.org/News-Releases/articleType/ArticleView/articleId/10178/Over-150-Asian-Giant-Softshell-Turtles-Return-to-the-Wild.aspx)核对物种、栖地压力与幼鼋保护。旧项目的 EN 不直接作为当前状态，放归数量不代表全球种群数量。 |
| 平胸龟 *Platysternon megacephalum* | [TFTSG 当前物种目录](https://iucn-tftsg.org/cbftt/)已分别列出 P. megacephalum、P. peguense 与 P. baiseensis；本档案采用中国南部范围。[2025 检查表](https://iucn-tftsg.org/wp-content/uploads/crm.10.checklist.atlas_.v10.2025.pdf)核对中国范围；[保护报告](https://iucn-tftsg.org/wp-content/uploads/file/Top%2025/TCC_2025_Turtles-in-Trouble.low_.rez_.pdf)支持头不能缩回壳。旧广义评估不直接套给拆分后的种。 |

本批未取得各物种当前全球独立评估全文与完整年份核验，沿用项目 NE 占位，状态说明明确限定。NE 不表示物种安全或实际上从未受评估。尺寸、寿命、速度与全球种群数量不填未经核实的极值。

## 图片与验证

逐种图片记录保存提示词、源图与运行图哈希、实际解码尺寸、完整主体边界和九档图片栏几何。静态几何和图片栏模拟不能验证浏览器字体、内容驱动的实际高度或完整页面排版。按项目要求不启动浏览器。

### 图像验收

60 张源图先逐组查看，60 张运行 WebP 再按六图联系表复核；十张封面源图和运行图另以原分辨率检查。三张封面候选因尾端裁切、后足触边或主体偏左而重新生成，最终候选的提示词与废弃候选哈希分别保留。

全部图片实测为 1536×1024，运行图总计 14,131,022 字节。60 个运行图 SHA-256 均不同，并与逐种 prompts.json 匹配；临时 PNG 的 60 个哈希也逐一核对。源图主体边界分别写入 cover-subjects.ts 与 original-covers.json，新增物种只登记在 original fixture。

十种各九档图片栏模拟均已查看；当前 fitHeroSubject 与移动端 contain 计算共 90 项通过，完整主体边距至少为 24 CSS px。六个动画端点采用当前 CSS 的同一几何，透明度变化不改变边界。没有修改图片栏布局或动画。

| 物种 | 图片与封面记录 |
| --- | --- |
| 大响蜜鴷 | [六图记录](../../src/assets/source/species/greater-honeyguide/README.md) |
| 红交嘴雀 | [六图记录](../../src/assets/source/species/red-crossbill/README.md) |
| 丘鹬 | [六图记录](../../src/assets/source/species/eurasian-woodcock/README.md) |
| 大林鸱 | [六图记录](../../src/assets/source/species/great-potoo/README.md) |
| 茶色蟆口鸱 | [六图记录](../../src/assets/source/species/tawny-frogmouth/README.md) |
| 瘰鳞蛇 | [六图记录](../../src/assets/source/species/javan-file-snake/README.md) |
| 天堂金花蛇 | [六图记录](../../src/assets/source/species/paradise-flying-snake/README.md) |
| 卵食蛇 | [六图记录](../../src/assets/source/species/common-egg-eater/README.md) |
| 鼋 | [六图记录](../../src/assets/source/species/cantors-giant-softshell-turtle/README.md) |
| 平胸龟 | [六图记录](../../src/assets/source/species/big-headed-turtle/README.md) |

### 目录打包

新增数据沿用独立档案加载。目录序列化将重复的 slug 单词写入共享字典，并把分类学名和中文名的重复数组包装改为分隔字符串；遇到分隔符保留原数组。加载时还原原始字段；目录摘要和档案仍由 species.ts 单一来源生成。既有全字段 roundtrip 检查覆盖此转换，JavaScript 预算保持原限值。

### 测试结果

运行 npm test：部署脚本 4 项、图像转换 1 项、分类与档案 221 项、分类浏览 4 项、封面几何 538 项、轮播交互 8 项、图片查看 4 项、品牌图标 2 项、物种列表 22 项、微生物专题 5 项通过。初次生产检查发现动物页面超出既有预算，已通过目录表示修复；重跑 npm run test:dist-subpath 后 4 项全部通过，包含 TypeScript、生产构建、全部 530 份档案的独立加载与全字段目录还原。

最终动物页面及其静态依赖为 545,670 字节（限值 550,000），动物页面单块为 344,143 字节（限值 350,000）。入口为 200,656 字节，微生物页面及依赖为 220,781 字节。预算未调整。git diff --check 通过。

完成后删除本批 60 张临时 PNG；保留 60 张 WebP、提示词、源图与运行图哈希、解码尺寸和验收记录。todo 现有 70 项待制作，本轮完成归档 30 项，目录共 530 种动物。全球保护状态仍采用已说明的资料占位；未核验浏览器字体、内容驱动高度和完整页面排版。
