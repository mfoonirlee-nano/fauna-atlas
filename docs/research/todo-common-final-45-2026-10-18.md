# 身边动物：最后45种研究与验收

2026-10-18。本批补齐 todo 剩余45种：7种哺乳动物、14种鸟类、2种两栖动物、19种节肢动物与3种其他无脊椎动物。本轮100个选题已收录，图册从655份增至700份物种档案。

每种新增7段故事（含发现与命名）、一张封面和五张观察图。本批共270张独立内置 image_gen 图片，运行资产保存在 `public/images/species/<slug>/`；逐张最终提示、源与运行哈希、实际尺寸保存在 `src/assets/source/species/<slug>/prompts.json`。图片为AI生成科学情景重建，不是实地记录或精确鉴种图。

## 分类、范围与来源

接受学名以本库GBIF基线为主，逐种核对种级匹配、分类链和已有档案，不把属级匹配或同种异名重复计数。保护等级区分全球评估、地区情况及家养范围；未取得可核实评估时说明限制，缺少独立评估日期时保留空值，不用发表年代替。

- 哺乳与两栖9种：见[逐种研究](todo-all-mammals-amphibians-2026-10-18.md)。家双峰驼与家牦牛不套用野生近缘种的等级；花栗鼠使用GBIF接受的 *Tamias sibiricus*，保留 *Eutamias* 对照。黑眶蟾蜍注明2025年复合群拆分证据，历史中国记录不能直接当作狭义种的确证。
- 昆虫11种：见[逐种研究](todo-common-insects-2026-10-18.md)。中华木蜂按黄色胸毛等特征制作；米象命名人与灰蝶年代的来源差异分别保留。幼虫、若虫、蛹和成虫按题材核对，未通过的成虫替代幼体图已重生。
- 其他无脊椎11种：见[逐种研究](todo-all-other-invertebrates-2026-10-18.md)。虾蟹附肢纳入完整主体边界；牡蛎、虾等养殖和市场场景与天然分布分开。不能从图片确认幼体的场景不标精确年龄。
- 鸟类14种：GBIF原始结果见[分类核对](../../src/assets/source/todo-common-birds-final-taxonomy.json)，IUCN发布名录查询见[原始结果](../../src/assets/source/todo-common-birds-final-iucn.json)。生态与辨认主要核对香港观鸟会物种志；该志对香港种群、亚种或季节的记录不推广为整个物种的统一规律。

## 鸟类范围的具体处理

| 档案 | 采用学名 | 范围与主要依据 |
| --- | --- | --- |
| 灰喜鹊 | *Cyanopica cyanus* | [疏林与公园树丛](https://lyj.hunan.gov.cn/lyj/ztzl/gdzt/bnl/201512/t20151229_2836891.html)；[GBIF](https://www.gbif.org/species/7341881) |
| 红嘴鸥 | *Chroicocephalus ridibundus* | [湖泊、河口与海湾](https://avifauna.hkbws.org.hk/species/0110/016300)；[GBIF](https://www.gbif.org/species/6065824) |
| 黑尾鸥 | *Larus crassirostris* | [东亚岩岸与近海](https://avifauna.hkbws.org.hk/species/0110/016900)；[GBIF](https://www.gbif.org/species/2481197) |
| 八哥 | *Acridotheres cristatellus* | [公园草地与村庄](https://avifauna.hkbws.org.hk/species/0380/045000)；[GBIF](https://www.gbif.org/species/2489010) |
| 牛背鹭 | *Bubulcus coromandus* | [牧场、农田与湿草地](https://avifauna.hkbws.org.hk/species/0170/023000)；[GBIF](https://www.gbif.org/species/6066393) |
| 黄雀 | *Spinus spinus* | [林地与冬季树丛](https://avifauna.hkbws.org.hk/species/0450/055500)；[GBIF](https://www.gbif.org/species/6092830) |
| 大嘴乌鸦 | *Corvus macrorhynchos* | [林地与城市树丛](https://avifauna.hkbws.org.hk/species/0260/034200)；[GBIF](https://www.gbif.org/species/2482487) |
| 红嘴蓝鹊 | *Urocissa erythroryncha* | [山林与树木较多的公园](https://avifauna.hkbws.org.hk/species/0260/033400)；[GBIF](https://www.gbif.org/species/6100962) |
| 红耳鹎 | *Pycnonotus jocosus* | [南方花园与林缘](https://avifauna.hkbws.org.hk/species/0290/036000)；[GBIF](https://www.gbif.org/species/2486151) |
| 棕头鸦雀 | *Sinosuthora webbiana* | [芦苇、竹丛与灌草地](https://avifauna.hkbws.org.hk/species/0360/043000)；[GBIF](https://www.gbif.org/species/6100921) |
| 黄鹡鸰 | *Motacilla flava* | [湿草地、田野与水边](https://avifauna.hkbws.org.hk/species/0440/053400)；[GBIF](https://www.gbif.org/species/9701857) |
| 白颊噪鹛 | *Garrulax sannio* | [南方灌丛与林缘](https://avifauna.hkbws.org.hk/species/0370/044400)；[GBIF](https://www.gbif.org/species/2493450) |
| 白腰文鸟 | *Lonchura striata* | [南方草地、农田与灌丛](https://avifauna.hkbws.org.hk/species/0430/053100)；[GBIF](https://www.gbif.org/species/2493618) |
| 白鹡鸰 | *Motacilla alba* | [路边、河岸与开阔地](https://avifauna.hkbws.org.hk/species/0440/053810)；[GBIF](https://www.gbif.org/species/9687165) |

白颊噪鹛采用GBIF的 *Garrulax sannio*，并对照香港鸟类志的 *Pterorhinus sannio*。棕头鸦雀采用 *Sinosuthora webbiana*、林莺科，另记录现代名录的 *Suthora webbiana*、鸦雀科处理，见[BirdLife事实页](https://datazone.birdlife.org/species/factsheet/vinous-throated-parrotbill-suthora-webbiana)。这两项属级或科级处理不增加档案数量。

牛背鹭的候选 *Ardea coromanda* 在GBIF仅返回属级，最终核对并使用种级接受的 [*Bubulcus coromandus*](https://www.gbif.org/species/6066393)，命名记录为Boddaert, 1783。档案限定东方种群，不把旧广义 *B. ibis* 的全球范围和等级不加区分地套用。所引香港物种志列示LC，但未核实独立评估日期及该等级与旧广义范围的对应，档案保留这一限制。

黄鹡鸰明确限定为 *Motacilla flava*（西黄鹡鸰），与 *M. tschutschensis* 分开；香港记录罕见，不能称为中国所有田野的常见鸟。[香港鸟类志](https://avifauna.hkbws.org.hk/species/0440/053400)与[BTO](https://www.bto.org/learn/about-birds/birdfacts/yellow-wagtail)支持范围和生活史。白鹡鸰图示以leucopsis型为主，不代表所有亚种花纹。

灰喜鹊采用东亚范围，与伊比利亚近缘种分开；湖南林业局旧资料中的欧洲广义范围不沿用。合作育幼限于研究过的种群，见[原始研究](https://doi.org/10.1002/jav.03546)。棕头鸦雀的种子与昆虫食谱另核对[荷兰官方风险分析](https://www.nvwa.nl/binaries/nvwa/documenten/dier/dieren-in-de-natuur/exoten/risicobeoordelingen/bruinkopdiksnavelmees/bruinkopdiksnavelmees.pdf)，台湾农业部页面用于外形与群体习性。

全库同名分类单元沿用一致中文名，新档案使用跳蛛科、园蛛科；黄雀的 *Spinus* 采用黄雀属，见[TBN分类路径](https://www.tbn.org.tw/taxa/b75d0ff4-3b92-4cca-b5e3-1a96a6c0a28e)。

## 图片与封面验收

源图检查、几何计算和运行图目视分开完成。每个封面保存实际解码尺寸、WebP SHA-256、完整主体边界和focalPoint，边界包括可见冠羽、嘴或吻、须、角、触角、足、翅与完整尾端。主体中心位于源宽60%以右，左侧保留安静环境。

白鹡鸰和大嘴乌鸦封面修订了尾或嘴进入左侧文案区的问题；红耳鹎幼鸟与红嘴鸥第一冬鸟重新生成，去掉成鸟模板造成的年龄特征冲突。虾类长触须、螳螂触角、花栗鼠尾端和蛙足等不完整候选未用于最终元数据。接受记录保留最终提示及被拒绝候选的哈希和理由。

- 270张WebP分别核对来源记录、实际尺寸和哈希，每种恰有6张且不重复。
- 45张源封面和45张运行封面按原分辨率查看；源与运行观察图通过联系表审查，必要时补看原分辨率细节。
- 每种九个规定视口，以及桌面内容高度增加160px，共720个几何用例；完整主体到图片栏边缘至少24 CSS px。各例记录主体显示尺寸。
- settled、initial、forward/backward enter/leave共6个端点沿用当前无缩放、无平移的前景几何。九视口图片栏静态模拟共405帧已目视检查。
- 修正临时模拟脚本在负小数四舍五入为0时的offset符号拼接；数值几何不变，受影响模拟重新生成检查。

没有启动GUI或无头浏览器。静态几何和图片栏模拟不验证浏览器字体或完整页面排版；AI生成图不能作为精确鉴种证据。临时PNG完成验收后移出仓库，运行图与提示词记录保留。

## 目录编码与构建体积

700份档案使动物页静态JavaScript依赖合计561,445字节，超过既定550,000字节预算。短语字典原来用三字节UTF-8私用字符标记，现改用在源文本中不存在的两字节字符范围，并同步调整替换成本与解码偏移。若源文本包含该范围，继续保留不替换的保护分支；浏览字段、搜索文字与完整档案内容不变。

改后动物页合计546,592字节，减少14,853字节；App分块318,889字节，低于350,000字节单文件预算。保持原预算，未提高阈值。生产目录还原测试逐项比较全部700份档案的浏览字段与分类路径。

## 统一验证

- `npm run typecheck`：通过。
- `npm test`：1022项全部通过，0失败。包含分类与档案、708项轮播/封面几何检查、轮播交互、生产构建、子路径资源、懒加载和JavaScript体积预算。
- 独立静态验收：270张WebP实际尺寸与哈希、每种6张且不重复、45份封面元数据与fixture一致、720个几何用例全部通过。
- 100个完成编号各出现一次，todo无待办；逐种图片README、研究报告及本地链接有效。临时PNG已清理。
- `git diff --check`：通过。

全量日志在本次工作区临时记录中，仓库保留逐种图片、提示词、来源、几何和目视结论。未进行浏览器字体及完整页面视觉验证。
