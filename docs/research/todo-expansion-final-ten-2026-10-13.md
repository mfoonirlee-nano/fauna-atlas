# 2026-10-13 收尾十种动物研究与验收

本批接入 10 份档案、10 张封面与 50 张观察图。目录从 590 增至 600 种，本轮新增动物达到 100 种，todo 待制作数为 0。微生物专题继续独立，不计入动物数量。

## 名称与分类

十个双名在 GBIF 名称匹配中均为 EXACT、ACCEPTED。原始响应见 [GBIF 记录](../../src/assets/source/todo-expansion-final-ten-gbif.json)，对照见 [WoRMS 记录](../../src/assets/source/todo-expansion-final-ten-worms.json)，最终路径见[采用分类](../../src/assets/source/todo-expansion-final-ten-adopted-taxonomy.json)。

- 鳞皮腹毛虫：GBIF 缺少纲和目，WoRMS 提供 Chaetonotida 目；采用该修订，纲省略。
- 垂头海索虫：GBIF 的 Solitaria 目与群体生活的本种归属不符，采用 WoRMS 的内肛动物门、Pedicellinidae 科、Pedicellina 属，纲与目省略。
- 微颚动物：GBIF 将 Micrognathozoa 重复列为门和纲。采用 WoRMS 的 Gnathifera 门、Micrognathozoa 纲、Limnognathida 目、Limnognathiidae 科、Limnognathia 属；原始描述将 Micrognathozoa 提为纲，后续文献和数据库存在阶元差异。分类图谱只表达采用口径的归属，不解释为亲缘或演化顺序。
- 鳃曳虫、颚口虫保留缺纲的来源链；南方帚虫保留同时缺纲、缺目的来源链。没有生成占位分类单元。

少见物种的中文标签用于项目展示，不声明为已核实的规范中文通名。科属中文名没有依据时保留科学名称。10 种均以 NE 表示本档案未核实全球 IUCN 评估的资料缺口，不推断安全性或种群趋势。

## 档案与资料

| 中文展示名 | 接受双名 | 本批观察重点 | 图片记录 |
| --- | --- | --- | --- |
| 鳃曳虫 | *Priapulus caudatus* | 找找前端的细棘与后端的指状小管。 | [六图与封面验收](../../src/assets/source/species/priapulus-caudatus/README.md) |
| 鳞皮腹毛虫 | *Lepidodermella squamata* | 找背面的鳞片，再看后端两支黏附管。 | [六图与封面验收](../../src/assets/source/species/scaled-gastrotrich/README.md) |
| 颚口虫 | *Gnathostomula paradoxa* | 先找完整细长身体，再看单独放大的咽部。 | [六图与封面验收](../../src/assets/source/species/paradox-jaw-worm/README.md) |
| 微颚动物 | *Limnognathia maerski* | 找头、短胸部和较大的腹部，再看颚器放大图。 | [六图与封面验收](../../src/assets/source/species/maersk-micrognathozoan/README.md) |
| 潘多拉共生虫 | *Symbion pandora* | 先找宿主的一根刚毛，再找黏附盘和漏斗。 | [六图与封面验收](../../src/assets/source/species/pandora-symbion/README.md) |
| 垂头海索虫 | *Pedicellina cernua* | 数数有几个小杯，再沿着细柄找到相连的匍匐茎。 | [六图与封面验收](../../src/assets/source/species/nodding-entoproct/README.md) |
| 南方帚虫 | *Phoronis australis* | 沿着两端盘卷的触手冠，找找管里的细长身体。 | [六图与封面验收](../../src/assets/source/species/southern-horseshoe-worm/README.md) |
| 水生铁线虫 | *Gordius aquaticus* | 沿着一根完整的线，找它的两个端点。 | [六图与封面验收](../../src/assets/source/species/aquatic-horsehair-worm/README.md) |
| 曼氏血吸虫 | *Schistosoma mansoni* | 在示意中区分粗雄虫、细雌虫、螺和叉尾尾蚴。 | [六图与封面验收](../../src/assets/source/species/manson-blood-fluke/README.md) |
| 蛭态轮虫 | *Adineta vaga* | 看柔软身体和小足，比较伸长与收缩的姿态。 | [六图与封面验收](../../src/assets/source/species/wandering-bdelloid/README.md) |

### 鳃曳虫

身体呈圆柱形，躯干表面有横向环纹，环纹不代表蚯蚓式分节。前端吻部带细棘和口部结构；后端附肢由短柄与许多指状小管组成。 雌雄配子在体外受精，发育经历外形不同的幼体与蜕皮过程。初孵幼体和带甲幼体的结构不同，图库不把成体尾簇移植给幼体。吻部动作需连续影像确认。

资料：[NOAA：鳃曳虫完整标本与结构](https://apps-afsc.fisheries.noaa.gov/refm/reem/set/PreyData.php?NODC=7400010101), [吻部显微结构原始研究](https://pubmed.ncbi.nlm.nih.gov/29865393/), [幼体神经系统与发育研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4685585/), [尾部附肢功能研究](https://www.nature.com/articles/1901216a0)。

### 鳞皮腹毛虫

它是透明的微小多细胞动物，头部较宽，躯干背面覆细鳞，后端分成两支短黏附管。观察纤毛需要腹面视角；图中的着色与器官对比来自人工重建。 本种能产生发育较快的卵和延迟发育的卵。2023 年卵壳研究分别讨论两类卵，不能把不同卵壳结构混画为同一种阶段；图库只示意完整卵与成年个体。

资料：[欧洲腹毛动物名录与原始显微影像](https://pmc.ncbi.nlm.nih.gov/articles/PMC4563153/), [延迟发育卵壳的超微结构研究](https://onlinelibrary.wiley.com/doi/10.1002/jmor.21659)。

### 颚口虫

本种是海底砂粒间生活的无分节微小蠕虫。表皮纤毛与肌肉参与移动，颚器位于前端咽部，包含颚、基板等硬部件；放大示意中的颚不表示外露的大钳。 本种属于颚胃动物，成体具有雌雄生殖结构。所查资料重点讨论形态和咽部功能，本档案不补写未核实的发育时长或幼体外形；图库展示成体的不同姿态。

资料：[咽部超微结构与功能原始研究](https://doi.org/10.1007/s004350050038), [Smithsonian：颚胃动物形态与研究记录](https://repository.si.edu/bitstream/handle/10088/5298/SCtZ-0076-Lo_res.pdf), [NCBI：物种与文献定位](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=66783)。

### 微颚动物

Limnognathia maerski 的身体分为头、可折叠的胸部和较大的腹部。腹面有纤毛列与后端黏附区，咽部有多组颚器硬件。它属于多细胞动物，图中颚器是单独放大的内部结构。 所引形态研究只报告雌性，不能据此把整个类群永久描述为只有雌性。2025 年研究已识别第二个小颚动物物种，因此本种档案不沿用早期的唯一物种说法。

资料：[原始描述：小颚动物与复杂颚器](https://pure.au.dk/portal/en/publications/micrognathozoa-a-new-class-with-complicated-jaws-like-those-of-ro/), [肌肉与颚器结构研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4333266/), [神经与腹面纤毛结构研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5098970/), [2025 年第二种小颚动物研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11836703/)。

### 潘多拉共生虫

最常见的固着取食个体有纤毛漏斗、椭圆躯干和短柄，柄端是黏附盘。它是多细胞环口动物；同样带纤毛漏斗的原生生物不属于本种。 取食个体能在体内产生 Pandora 幼体，幼体释放后在附近形成新的取食个体。另有 Prometheus 幼体、侏儒雄性、雌性和 chordoid 幼体，研究仍有未观察到的环节。图库分别呈现阶段，不把它们合并成一只动物。

资料：[侏儒雄性电镜研究与生活史说明](https://pmc.ncbi.nlm.nih.gov/articles/PMC4398483/), [环口动物研究章节与宿主刚毛影像](https://www.vliz.be/imisdocs/publications/382320.pdf)。

### 垂头海索虫

Pedicellina cernua 的个体由可弯的柄与杯状体组成，杯口周围有细触手。柄从匍匐茎长出，群体包含多个个体；它属于内肛动物，口与肛门均位于触手冠围成的区域。 群体可以出芽形成新个体，研究者也观察到杯状体脱落和重新生长。小芽、完整杯体与缺杯柄属于不同状态，不把匍匐茎当作单个动物的肠道。

资料：[WoRMS：接受名称与分布记录](https://www.marinespecies.org/aphia.php?id=111806&p=taxdetails), [Liverpool：海索虫群体形态调查](https://livrepository.liverpool.ac.uk/3174510/1/504529.pdf), [NOAA 历史调查与形态图](https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/fish-bull/fb30.5.pdf)。

### 南方帚虫

成体身体细长无分节，后端膨大的部位留在管内，前端触手冠有许多细触手。本种成熟触手冠的两个臂会盘卷，不能按沙蚕式羽冠模板生成。 帚形动物具有有性繁殖和发育过程，但本种在所引 WoRMS 记录中仍标注幼体未知。档案不直接复制其他 Phoronis 物种的帽状幼体，也不生成未核实的本种幼体图。

资料：[WoRMS：接受名称、分布和幼体资料缺口](https://www.marinespecies.org/aphia.php?id=128547&p=taxdetails), [筒状海葵与南方帚虫关联的原始研究](https://doi.org/10.1080/12265071.1998.9647407), [Australian Museum：管栖关联影像记录](https://museum-publications.australian.museum/media/dd/Uploads/Documents/35604/ams370_vXV_11_lowres.0a4558f.pdf)。

### 水生铁线虫

成体细长，外表不呈蚯蚓式分节。完整个体的两端要分别寻找；雌雄后端结构可不同，单凭盘绕姿态和体色不足以鉴定到本种。 线形动物通常经历寄生幼期与自由生活的成体阶段。水中的盘绕不等于寄生过程，也不能推断宿主受到何种行为操控。宿主记录须结合重新鉴定的虫体证据。

资料：[Gordius 属修订与 G. aquaticus 鉴定讨论](https://doi.org/10.11646/zootaxa.2533.1.1), [ITIS：水生铁线虫分类记录](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=64229), [加那利群岛生物数据库：本种记录](https://www.biodiversidadcanarias.es/biota/especie/E08208?lang=es&orderByRefer=anioDocumento&orderFormRefer=true)。

### 曼氏血吸虫

雄虫较粗、表面有结节，雌虫较细而长，两者有独立身体。成虫前端有口吸盘和腹吸盘；它们属于扁形动物，不是有环节的蚯蚓。 卵随粪便进入适合的水环境后孵出毛蚴，毛蚴进入合适淡水螺，螺内阶段产生尾蚴。游离尾蚴带叉尾，进入人体皮肤后脱尾，再发育为血管中的成虫。卵有明显侧棘，不能与末端带棘的其他血吸虫卵混用。

资料：[CDC DPDx：成虫形态、卵与生活史](https://www.cdc.gov/dpdx/schistosomiasis/index.html), [CDC Yellow Book：分布与传播说明](https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/schistosomiasis.html)。

### 蛭态轮虫

Adineta vaga 的头部腹面是纤毛区，口前有小耙状结构。身体无硬被甲，后端的细足可伸缩并带短趾；不能按臂尾轮虫模板画出硬壳和两个圆轮式冠。 研究者以雌性孤雌繁殖种群研究本种的干燥耐受和 DNA 修复。2021 年染色体研究与 2022 年卵发生研究修订了早期完全没有减数分裂的解释，不能把旧基因组结论作为定论。

资料：[日本国立环境研究所：Adineta 形态记录](https://www.nies.go.jp/chiiki1/protoz/morpho/rotifera/r-adinet.htm), [染色体级基因组与重组研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC8494291/), [卵发生期间非还原性减数分裂研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9710870/)。

## 图片与封面

内置 image_gen 为每个独立场景生成图片，临时 PNG 经原图检查后转换为 WebP。保留尺寸均为 1536×1024；每种仅保留六张 WebP，封面与图库不重复。最终提示词、源图哈希、运行图哈希、实际解码尺寸和修订提示词分别存入物种图片记录。

源图审核后作了以下修订：海索虫和帚虫封面移除触手末端误画的圆珠；共生虫封面右移，保留完整漏斗、体干和黏附盘；颚口虫三张观察图移除长触角；腹毛虫腹面图改为两列纤毛；血吸虫中间宿主图移除成虫；帚虫关联图增加独立放大的筒状海葵窗口。图注说明显微人工着色、内部结构、宿主、阶段与比例范围，不以静图判断动作或鉴定物种。

十张临时源封面与运行封面分别按原分辨率检查，源与运行图库分别以六图联系表检查。完整主体边界包括细棘、纤毛、触手尖端、足趾、尾部和配对个体；宿主刚毛及基底属于背景。新封面的水平边界中心均超过源图宽度的 60%，左侧保留低干扰背景。

直接调用当前 fitHeroSubject 验证 320×760、390×760、761×760、900×760、1100×768、1366×768、1920×900、2560×900、3840×900；桌面另覆盖内容增高 160px。十张图片栏模拟均已目视检查；桌面完整主体最小间距至少 24 CSS px，手机使用完整源图 contain 和 24px 内缩。initial、前后进入与离开、settled 动画均只有透明度变化，共用这些几何记录。

按项目规则未启动浏览器。静态几何和图片栏模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。

## 验证

类型检查与 `npm test` 全部通过，共 897 项测试、0 失败。其中封面主测试覆盖 600 种动物，包含六图、哈希绑定、实际解码尺寸、九档视口和间距；生产构建、子路径图片访问、完整档案懒加载与压缩目录字段还原检查通过。

600 种目录使首页 JavaScript 首次超过 550,000 字节预算 84 字节。构建编码对展示名等于科学名称的科属只保存一个字符串，解码恢复相同的两个字段，保持档案文案完整。最终动物页面首批 JavaScript 为 549,821 字节，限额保持 550,000；单块限额也保持原值。

临时 PNG、联系表、候选图与面板模拟已清理，最终保留 60 张 WebP、物种图片 README、提示词、哈希及验收 JSON。
