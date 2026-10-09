# 2026-10-09：拓展清单接续十五种

本批按活动清单顺序制作十种哺乳动物与前五种鸟类。档案以具体学名定位，少见中文名称作为项目展示标签；图片为 AI 科学情景重建，不能替代野外观察、鉴定或实测比例。

## 资料与分类口径

2026-10-09 对十五个学名实读 GBIF species/match API，均返回接受种名。GBIF 名称匹配用于查重与定位，分类链结合项目已有口径和下表修正。完整查询结果见 [taxonomy-match.json](../../src/assets/source/todo15-taxonomy-match.json)。

| 物种 | 核实范围与限制 |
| --- | --- |
| 海地沟齿鼩 *Solenodon paradoxus* | [ADW](https://animaldiversity.org/accounts/Solenodon_paradoxus/)支持伊斯帕尼奥拉岛、长吻、毛少的尾与夜间活动。[MDD](https://www.mammaldiversity.org/taxon/1003840/)核对 Eulipotyphla / Solenodontidae / Solenodon，替代 GBIF 与旧 ADW 的 Soricomorpha。[PNAS 原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC6926037/)支持口腔毒液；不将功能假说写成每次捕食的既定过程。植物性食物记录有分歧，不录入固定杂食比例。 |
| 好望角金毛鼹 *Chrysochloris asiatica* | [ADW](https://animaldiversity.org/accounts/Chrysochloris_asiatica/)支持南非西部、地下生活、鼻端裸露区、退化覆盖的眼与挖掘足。[中耳振动实验](https://doi.org/10.1242/jeb.01989)支持中耳对振动的响应，不以耳廓缺失推断听觉缺失。避免套用近似种繁殖与隧道参数。 |
| 塞拉亚跗猴 *Tarsius tarsier* | [当前 MDD](https://www.mammaldiversity.org/taxon/1000926/)采用 Selayar Tarsier，科为 Tarsiidae；[IUCN 灵长类专家组论文](https://www.primate-sg.org/storage/pdf/PC31_Shekelle_et_al_Two_new_tarsiers.pdf)的检索摘要支持塞拉亚范围与旧广义谱系拆分，全文获取超时。本批分布限定塞拉亚岛，旧 [ADW](https://animaldiversity.org/accounts/Tarsius_tarsier/)仅用于保守外形与夜行、捕食特点，排除其北苏拉威西等广义范围、繁殖参数与整岛群体行为。中文名为项目限定标签，保留“跗猴”别名。 |
| 普通吸血蝠 *Desmodus rotundus* | [ADW](https://animaldiversity.org/accounts/Desmodus_rotundus/)支持叶口蝠科、短吻、发达拇指、地面活动与血液食性。取食由成人解释，图集采用闭口、飞行和安静栖息情景。 |
| 猪鼻蝠 *Craseonycteris thonglongyai* | [ADW](https://animaldiversity.org/accounts/Craseonycteris_thonglongyai/)支持泰国与缅甸、石灰岩洞、猪样鼻、头体长 29–33 mm、体重 1.7–2 g。其前臂字段单位有排版错误，未采用；不使用未经校准的蜂或硬币同尺度比较。 |
| 大兔唇蝠 *Noctilio leporinus* | [ADW](https://animaldiversity.org/accounts/Noctilio_leporinus/)支持兔唇蝠科、分开的上唇、大后足与水面捕鱼。图集为橙褐雄性外形，不把雄性色彩套给全部雌性；食谱随地点和季节变化。 |
| 巨獭鼩 *Potamogale velox* | [ADW](https://animaldiversity.org/accounts/Potamogale_velox/)支持非洲森林溪流、侧扁尾、无蹼足和夜间捕食。[MDD](https://www.mammaldiversity.org/taxon/1000488/)采用 Potamogalidae，旧 ADW 与 GBIF 的 Tenrecidae 不复制到图谱。早期圈养后存活天数不作为寿命。 |
| 中南大羚 *Pseudoryx nghetinhensis* | [WWF](https://www.worldwildlife.org/species/saola/)支持越南与老挝安南山脉、两根长角、白脸纹和套索压力。野外记录稀少，不编造群体、速度、繁殖参数或具体摄食植物，图像不得作为新野外证据。 |
| 草原黏鼠 *Lagostomus maximus* | [ADW](https://animaldiversity.org/accounts/Lagostomus_maximus/)支持毛丝鼠科、南美平原、黑白脸纹与群居洞穴。中文名为项目展示标签，保留“平原黏鼠”别名，与山地黏鼠属分开。 |
| 东部长吻针鼹 *Zaglossus bartoni* | [ADW](https://animaldiversity.org/accounts/Zaglossus_bartoni/)支持新几内亚高地、长弯吻、蚯蚓食性与单孔目。产卵和哺乳分别说明，不把短吻针鼹的蚂蚁食谱直接套用。 |
| 美洲蛇鹈 *Anhinga anhinga* | [康奈尔生活史](https://www.allaboutbirds.org/guide/Anhinga/lifehistory)与[识别](https://www.allaboutbirds.org/guide/Anhinga/id)支持长颈直嘴、水下取食和出水晾翼。主要展示雄性成鸟，分类采用 Suliformes / Anhingidae / Anhinga。 |
| 普通潜鸟 *Gavia immer* | [ADW](https://animaldiversity.org/accounts/Gavia_immer/)支持潜鸟目、繁殖与非繁殖羽、后置腿足、湖泊繁殖与近岸越冬。图库分别标注阶段，不采用旧寿命记录作为当前最高寿命。 |
| 暴风海燕 *Hydrobates pelagicus* | [RSPB](https://www.rspb.org.uk/birds-and-wildlife/storm-petrel)支持深色身体、白腰、非叉尾、海面觅食。英国 Amber 属地区类别，不能转换为全球 IUCN 代码。采用 Procellariiformes / Hydrobatidae / Hydrobates。 |
| 普通鹈燕 *Pelecanoides urinatrix* | [NZ Birds Online](https://www.nzbirdsonline.org.nz/species/common-diving-petrel)与[澳大利亚南极计划](https://www.antarctica.gov.au/about-antarctica/animals/flying-birds/petrels-and-shearwaters/common-diving-petrel/)支持短翼、海岛繁殖、小型甲壳动物食性与翼推进潜游。本项目采用 GBIF 的 Pelecanoididae 科口径；NZ Birds Online 使用 Procellariidae，差异明确记录，不建立双重科归属。不把地方样本潜深设为全物种极值。 |
| 橙脚冢雉 *Megapodius reinwardt* | [NT 政府](https://nt.gov.au/environment/animals/wildlife-in-nt/scrubfowl)支持地面觅食与巢丘，[巢丘原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9332330/)支持有机材料分解热，[Earthwatch](https://www.climatewatch.org.au/species/birds/orange-footed-scrubfowl)提供形态与育幼说明。剖面注明示意、非实测比例，不画成亲鸟坐巢或喂食雏鸟。 |

本批没有取得当前全球物种级 IUCN 独立评估与年份，按项目 NE 占位规则处理，assessor、共读与状态说明均注明未核实；NE 不表示动物安全或实际未受评估。WWF 的中南大羚濒危描述仍在正文保留。全球种群趋势不录入，代表国家不表示完整范围。

## 图片验收

本批保留 90 张独立 WebP，一种一张封面和五张观察图；90 个运行图 SHA-256 均不相同，总大小 19,293,124 字节。源图与最终 WebP 均实际解码为 1536×1024。每种的最终提示词、源图和运行图哈希、边界与九档几何结果分别保存在图片目录的 prompts.json、README.md 和 hero-acceptance.json。暴风海燕五张图经内置 image_gen 修正过宽的上翼白条，保留原始提示词及修正提示词。

逐组查看全部源图与保留 WebP 的六图联系表，封面另以原分辨率检查。普通潜鸟最后一张标注为繁殖羽与非繁殖羽的阶段对照；橙脚冢雉剖面图标注示意与非实测比例。图像中的毛色、鼻部、爪趾和羽纹仍不能用于鉴定或精细计数。

| 封面 | 完整主体边界（源像素） | 主体大小 | 水平中心 |
| --- | --- | --- | --- |
| [海地沟齿鼩](../../src/assets/source/species/hispaniolan-solenodon/README.md) | (500, 175, 1495, 800) | 995×625 | 64.94% |
| [好望角金毛鼹](../../src/assets/source/species/cape-golden-mole/README.md) | (585, 240, 1460, 825) | 875×585 | 66.57% |
| [塞拉亚跗猴](../../src/assets/source/species/selayar-tarsier/README.md) | (710, 20, 1300, 985) | 590×965 | 65.43% |
| [普通吸血蝠](../../src/assets/source/species/common-vampire-bat/README.md) | (660, 115, 1480, 920) | 820×805 | 69.66% |
| [猪鼻蝠](../../src/assets/source/species/kittis-hog-nosed-bat/README.md) | (640, 145, 1360, 795) | 720×650 | 65.10% |
| [大兔唇蝠](../../src/assets/source/species/greater-bulldog-bat/README.md) | (625, 25, 1370, 895) | 745×870 | 64.94% |
| [巨獭鼩](../../src/assets/source/species/giant-otter-shrew/README.md) | (425, 300, 1515, 730) | 1090×430 | 63.15% |
| [中南大羚](../../src/assets/source/species/saola/README.md) | (675, 40, 1445, 950) | 770×910 | 69.01% |
| [草原黏鼠](../../src/assets/source/species/plains-viscacha/README.md) | (490, 150, 1500, 815) | 1010×665 | 64.78% |
| [东部长吻针鼹](../../src/assets/source/species/eastern-long-beaked-echidna/README.md) | (495, 135, 1455, 865) | 960×730 | 63.48% |
| [美洲蛇鹈](../../src/assets/source/species/anhinga/README.md) | (595, 40, 1415, 955) | 820×915 | 65.43% |
| [普通潜鸟](../../src/assets/source/species/common-loon/README.md) | (570, 295, 1500, 695) | 930×400 | 67.38% |
| [暴风海燕](../../src/assets/source/species/european-storm-petrel/README.md) | (685, 150, 1465, 810) | 780×660 | 69.99% |
| [普通鹈燕](../../src/assets/source/species/common-diving-petrel/README.md) | (655, 135, 1485, 890) | 830×755 | 69.66% |
| [橙脚冢雉](../../src/assets/source/species/orange-footed-scrubfowl/README.md) | (625, 100, 1445, 905) | 820×805 | 67.38% |

对 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900 九档图片栏逐种计算并查看静态模拟，共 135 帧。完整主体边界均位于面板内，最小边距至少 24 CSS px。settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点采用相同几何；现有 CSS 只改变透明度。新增十五条 cover-subjects 记录与十五条唯一 original-covers fixture，均绑定保留 WebP 哈希。

按仓库约定没有启动浏览器。静态图片栏模拟与几何测试不能验证浏览器字体、内容驱动的实际高度或完整页面排版。

## 验证结果

- `npm test` 全部通过，803 项检查、0 失败，包含物种与分类、图片转换、轮播边界、图片查看器、分类浏览、物种列表、微生物隔离、生产构建和部署子路径图片可达性。
- 生产构建通过 TypeScript 检查；首屏动物页及其静态依赖合计 549,969 字节，通过现有 550,000 字节预算，预算上限保持原值。完整档案继续按物种分别加载。
- `git diff --check` 通过。六图数量、WebP 解码尺寸、哈希唯一性及 README 中的运行图哈希通过检查。
- 动物目录由 505 增至 520；本轮累计完成 20 种，活动清单余 80 种。完成项已移入完成归档，图片索引同步新增十五项。
- 验收后删除本批 90 张临时源 PNG，保留 WebP 和文字记录。
