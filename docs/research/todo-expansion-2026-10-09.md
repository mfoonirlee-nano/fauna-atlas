# 2026-10-09 动物 TODO 扩展选题核验

本轮为 [TODO](../todo.md) 补入 100 种待制作动物。现有 `src/data/species.ts` 包含 500 个物种学名；新增 100 个学名内部无重复，与现有 500 个学名无交集。此记录用于安排制作顺序，尚未制作物种档案或图片。

## 核验方法与范围

2026-10-09 对每个候选名称调用 [GBIF species/match](https://techdocs.gbif.org/en/openapi/v1/species)，参数为 `name=<候选学名>&strict=true`。100 个返回结果均为 `matchType=EXACT`、`status=ACCEPTED`、`rank=SPECIES`、`kingdom=Animalia`，且 `canonicalName` 与提交学名一致。下表保留返回的 `usageKey` 对应物种链接和门级名称；它记录 GBIF 的查询结果，不直接决定项目分类图谱。

中文名为选题标签，部分暂用类群名称。此轮没有逐项核验中文通名、完整分类链、分布、保护状态和行为，也没有图片验收。制作档案时应补齐这些研究，并复核接受名称与近似种范围；不能把本记录当作完整档案研究。

## 图谱补充方向

将 50 个名额用于节肢及其他无脊椎动物，另外加入 2 种被囊动物。选题包括单板类、尾腔类、全头类、无肺螈、原尾类、双尾类和多个少见昆虫目，补充现有常见鸟兽之外的身体结构。

少见类群选题包括半索、毛颚、动吻、铠甲、鳃曳、腹毛、颚胃、小颚、环口、内肛、帚形和线形动物。它们涉及沉积物间隙、附着生活、复杂颚器与寄生生活史。展示时说明微小、多细胞动物与非动物微生物的区别，并把个体、群体、宿主和黏液房分开标注。

## 需要保留的分类与鉴定限制

- GBIF 本次将 `Sipunculus nudus` 的门返回为 `Sipuncula`；[NCBI 分类链](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6446)将其置于环节动物内。TODO 按环节动物中的星虫类选题，后续完整分类链需按项目口径核对，不能从下表直接创建“星虫门”。
- 小颚动物的阶元在不同资料中有差异。[原始研究者的 SICB 介绍](https://sicb.org/abstracts/an-introduction-to-loricifera-cycliophora-and-gnathometazoa/)将 Micrognathozoa 作为纲介绍，GBIF 本次在门级字段返回该名称。制作时选择并记录项目分类口径，不以缺失阶元为由补造名称。
- `Ciona robusta` 与 `Ciona intestinalis` 的历史混用、月鱼属修订、跗猴的物种范围，需要在制作时复核。新动物必须使用对应物种的参考图，不能套用同属动物的特征。
- `Mengenilla chobauti` 的雌性形态需单独查证，不能照搬其他捻翅虫雌性留在宿主体内的形态。轮虫、海蜘蛛和非典型软体动物也需要分别建立图像参考。

## 100 种名称匹配记录

“门（GBIF 返回）”保留查询时字段；制作分组是工作安排，不是分类阶元。物种链接对应本轮保存的 usageKey。

| 序号 | 制作分组 | 选题标签 | 候选与接受学名 | 门（GBIF 返回） | GBIF 物种记录 |
| ---: | --- | --- | --- | --- | --- |
| 1 | 哺乳动物 | 海地沟齿鼩 | *Solenodon paradoxus* | Chordata | [5219470](https://www.gbif.org/species/5219470) |
| 2 | 哺乳动物 | 好望角金毛鼹 | *Chrysochloris asiatica* | Chordata | [2432182](https://www.gbif.org/species/2432182) |
| 3 | 哺乳动物 | 跗猴 | *Tarsius tarsier* | Chordata | [4266949](https://www.gbif.org/species/4266949) |
| 4 | 哺乳动物 | 普通吸血蝠 | *Desmodus rotundus* | Chordata | [2433298](https://www.gbif.org/species/2433298) |
| 5 | 哺乳动物 | 猪鼻蝠 | *Craseonycteris thonglongyai* | Chordata | [2433358](https://www.gbif.org/species/2433358) |
| 6 | 哺乳动物 | 大兔唇蝠 | *Noctilio leporinus* | Chordata | [2433343](https://www.gbif.org/species/2433343) |
| 7 | 哺乳动物 | 巨獭鼩 | *Potamogale velox* | Chordata | [2432147](https://www.gbif.org/species/2432147) |
| 8 | 哺乳动物 | 中南大羚 | *Pseudoryx nghetinhensis* | Chordata | [4262655](https://www.gbif.org/species/4262655) |
| 9 | 哺乳动物 | 草原黏鼠（中文名待核） | *Lagostomus maximus* | Chordata | [5219945](https://www.gbif.org/species/5219945) |
| 10 | 哺乳动物 | 东部长吻针鼹 | *Zaglossus bartoni* | Chordata | [2433385](https://www.gbif.org/species/2433385) |
| 11 | 鸟类 | 美洲蛇鹈 | *Anhinga anhinga* | Chordata | [2482082](https://www.gbif.org/species/2482082) |
| 12 | 鸟类 | 普通潜鸟 | *Gavia immer* | Chordata | [2481962](https://www.gbif.org/species/2481962) |
| 13 | 鸟类 | 暴风海燕 | *Hydrobates pelagicus* | Chordata | [4408455](https://www.gbif.org/species/4408455) |
| 14 | 鸟类 | 普通鹈燕 | *Pelecanoides urinatrix* | Chordata | [2481418](https://www.gbif.org/species/2481418) |
| 15 | 鸟类 | 橙脚冢雉 | *Megapodius reinwardt* | Chordata | [2482118](https://www.gbif.org/species/2482118) |
| 16 | 鸟类 | 大响蜜鴷 | *Indicator indicator* | Chordata | [5228976](https://www.gbif.org/species/5228976) |
| 17 | 鸟类 | 红交嘴雀 | *Loxia curvirostra* | Chordata | [9629160](https://www.gbif.org/species/9629160) |
| 18 | 鸟类 | 丘鹬 | *Scolopax rusticola* | Chordata | [2481700](https://www.gbif.org/species/2481700) |
| 19 | 鸟类 | 大林鸱 | *Nyctibius grandis* | Chordata | [2496801](https://www.gbif.org/species/2496801) |
| 20 | 鸟类 | 茶色蟆口鸱 | *Podargus strigoides* | Chordata | [2497109](https://www.gbif.org/species/2497109) |
| 21 | 爬行动物 | 双足蚓蜥 | *Bipes biporus* | Chordata | [5222409](https://www.gbif.org/species/5222409) |
| 22 | 爬行动物 | 瘰鳞蛇 | *Acrochordus javanicus* | Chordata | [2472764](https://www.gbif.org/species/2472764) |
| 23 | 爬行动物 | 天堂金花蛇 | *Chrysopelea paradisi* | Chordata | [2457115](https://www.gbif.org/species/2457115) |
| 24 | 爬行动物 | 卵食蛇 | *Dasypeltis scabra* | Chordata | [2456029](https://www.gbif.org/species/2456029) |
| 25 | 爬行动物 | 鼋 | *Pelochelys cantorii* | Chordata | [2442658](https://www.gbif.org/species/2442658) |
| 26 | 爬行动物 | 平胸龟 | *Platysternon megacephalum* | Chordata | [2441884](https://www.gbif.org/species/2441884) |
| 27 | 爬行动物 | 黄斑夜蜥 | *Lepidophyma flavimaculatum* | Chordata | [2451749](https://www.gbif.org/species/2451749) |
| 28 | 爬行动物 | 菲律宾帆蜥 | *Hydrosaurus pustulatus* | Chordata | [5226075](https://www.gbif.org/species/5226075) |
| 29 | 两栖动物 | 鳗螈（中文名待核） | *Siren lacertina* | Chordata | [2432068](https://www.gbif.org/species/2432068) |
| 30 | 两栖动物 | 斑泥螈 | *Necturus maculosus* | Chordata | [2432048](https://www.gbif.org/species/2432048) |
| 31 | 两栖动物 | 红背无肺螈 | *Plethodon cinereus* | Chordata | [2431491](https://www.gbif.org/species/2431491) |
| 32 | 两栖动物 | 尾蟾 | *Ascaphus truei* | Chordata | [2429804](https://www.gbif.org/species/2429804) |
| 33 | 两栖动物 | 奇异多指节蟾 | *Pseudis paradoxa* | Chordata | [2428380](https://www.gbif.org/species/2428380) |
| 34 | 两栖动物 | 锡兰鱼螈 | *Ichthyophis glutinosus* | Chordata | [5218320](https://www.gbif.org/species/5218320) |
| 35 | 两栖动物 | 科基蛙 | *Eleutherodactylus coqui* | Chordata | [2424091](https://www.gbif.org/species/2424091) |
| 36 | 鱼类与其他脊索动物 | 斑点银鲛 | *Hydrolagus colliei* | Chordata | [5215461](https://www.gbif.org/species/5215461) |
| 37 | 鱼类与其他脊索动物 | 皱鳃鲨 | *Chlamydoselachus anguineus* | Chordata | [2420627](https://www.gbif.org/species/2420627) |
| 38 | 鱼类与其他脊索动物 | 欧氏尖吻鲨 | *Mitsukurina owstoni* | Chordata | [2420637](https://www.gbif.org/species/2420637) |
| 39 | 鱼类与其他脊索动物 | 四眼鱼 | *Anableps anableps* | Chordata | [2350683](https://www.gbif.org/species/2350683) |
| 40 | 鱼类与其他脊索动物 | 南美肺鱼 | *Lepidosiren paradoxa* | Chordata | [2441263](https://www.gbif.org/species/2441263) |
| 41 | 鱼类与其他脊索动物 | 大西洋弹涂鱼 | *Periophthalmus barbarus* | Chordata | [2376966](https://www.gbif.org/species/2376966) |
| 42 | 鱼类与其他脊索动物 | 黑鳍冰鱼 | *Chaenocephalus aceratus* | Chordata | [5210343](https://www.gbif.org/species/5210343) |
| 43 | 鱼类与其他脊索动物 | 月鱼 | *Lampris guttatus* | Chordata | [2400463](https://www.gbif.org/species/2400463) |
| 44 | 鱼类与其他脊索动物 | 黑叉齿龙鱼 | *Chiasmodon niger* | Chordata | [2394676](https://www.gbif.org/species/2394676) |
| 45 | 鱼类与其他脊索动物 | 达尔文蝙蝠鱼 | *Ogcocephalus darwini* | Chordata | [5214838](https://www.gbif.org/species/5214838) |
| 46 | 鱼类与其他脊索动物 | 泥鳅 | *Misgurnus anguillicaudatus* | Chordata | [2367919](https://www.gbif.org/species/2367919) |
| 47 | 鱼类与其他脊索动物 | 斑点雀鳝 | *Lepisosteus oculatus* | Chordata | [2346692](https://www.gbif.org/species/2346692) |
| 48 | 鱼类与其他脊索动物 | 塞内加尔多鳍鱼 | *Polypterus senegalus* | Chordata | [4287129](https://www.gbif.org/species/4287129) |
| 49 | 鱼类与其他脊索动物 | 强壮海鞘 | *Ciona robusta* | Chordata | [4356092](https://www.gbif.org/species/4356092) |
| 50 | 鱼类与其他脊索动物 | 巨型尾海鞘（中文名待核） | *Bathochordaeus mcnutti* | Chordata | [9603764](https://www.gbif.org/species/9603764) |
| 51 | 昆虫与其他节肢动物 | 丹麦蜉蝣 | *Ephemera danica* | Arthropoda | [5716472](https://www.gbif.org/species/5716472) |
| 52 | 昆虫与其他节肢动物 | 加州大石蝇 | *Pteronarcys californica* | Arthropoda | [2001399](https://www.gbif.org/species/2001399) |
| 53 | 昆虫与其他节肢动物 | 月斑石蛾 | *Limnephilus lunatus* | Arthropoda | [1442474](https://www.gbif.org/species/1442474) |
| 54 | 昆虫与其他节肢动物 | 普通蝎蛉 | *Panorpa communis* | Arthropoda | [5742495](https://www.gbif.org/species/5742495) |
| 55 | 昆虫与其他节肢动物 | 蛇蛉 | *Raphidia ophiopsis* | Arthropoda | [2006704](https://www.gbif.org/species/2006704) |
| 56 | 昆虫与其他节肢动物 | 捻翅虫 | *Mengenilla chobauti* | Arthropoda | [4480659](https://www.gbif.org/species/4480659) |
| 57 | 昆虫与其他节肢动物 | 欧洲蝼蛄 | *Gryllotalpa gryllotalpa* | Arthropoda | [1716128](https://www.gbif.org/species/1716128) |
| 58 | 昆虫与其他节肢动物 | 喷炮步甲 | *Brachinus crepitans* | Arthropoda | [4474861](https://www.gbif.org/species/4474861) |
| 59 | 昆虫与其他节肢动物 | 豌豆蚜 | *Acyrthosiphon pisum* | Arthropoda | [2077503](https://www.gbif.org/species/2077503) |
| 60 | 昆虫与其他节肢动物 | 猫栉首蚤 | *Ctenocephalides felis* | Arthropoda | [1419472](https://www.gbif.org/species/1419472) |
| 61 | 昆虫与其他节肢动物 | 苜蓿跳虫 | *Sminthurus viridis* | Arthropoda | [5167064](https://www.gbif.org/species/5167064) |
| 62 | 昆虫与其他节肢动物 | 原尾虫 | *Eosentomon transitorium* | Arthropoda | [2119211](https://www.gbif.org/species/2119211) |
| 63 | 昆虫与其他节肢动物 | 双尾虫 | *Campodea staphylinus* | Arthropoda | [2119507](https://www.gbif.org/species/2119507) |
| 64 | 昆虫与其他节肢动物 | 海萤 | *Vargula hilgendorfii* | Arthropoda | [8058329](https://www.gbif.org/species/8058329) |
| 65 | 昆虫与其他节肢动物 | 北方哲水蚤 | *Calanus finmarchicus* | Arthropoda | [5166399](https://www.gbif.org/species/5166399) |
| 66 | 昆虫与其他节肢动物 | 二斑叶螨 | *Tetranychus urticae* | Arthropoda | [2130185](https://www.gbif.org/species/2130185) |
| 67 | 昆虫与其他节肢动物 | 海蜘蛛 | *Nymphon gracile* | Arthropoda | [2117779](https://www.gbif.org/species/2117779) |
| 68 | 昆虫与其他节肢动物 | 无鞭蝎 | *Damon diadema* | Arthropoda | [2181351](https://www.gbif.org/species/2181351) |
| 69 | 昆虫与其他节肢动物 | 蚰蜒 | *Scutigera coleoptrata* | Arthropoda | [5179027](https://www.gbif.org/species/5179027) |
| 70 | 昆虫与其他节肢动物 | 球马陆 | *Glomeris marginata* | Arthropoda | [9728038](https://www.gbif.org/species/9728038) |
| 71 | 其他无脊椎动物 | 新碟贝 | *Neopilina galatheae* | Mollusca | [2306873](https://www.gbif.org/species/2306873) |
| 72 | 其他无脊椎动物 | 毛皮贝（中文名待核） | *Chaetoderma nitidulum* | Mollusca | [5189550](https://www.gbif.org/species/5189550) |
| 73 | 其他无脊椎动物 | 盘鲍 | *Haliotis discus* | Mollusca | [4357763](https://www.gbif.org/species/4357763) |
| 74 | 其他无脊椎动物 | 船蛆 | *Teredo navalis* | Mollusca | [2288847](https://www.gbif.org/species/2288847) |
| 75 | 其他无脊椎动物 | 地纹芋螺 | *Conus geographus* | Mollusca | [5728277](https://www.gbif.org/species/5728277) |
| 76 | 其他无脊椎动物 | 星状海葵 | *Nematostella vectensis* | Cnidaria | [2255972](https://www.gbif.org/species/2255972) |
| 77 | 其他无脊椎动物 | 耳形十字水母 | *Haliclystus auricula* | Cnidaria | [2264667](https://www.gbif.org/species/2264667) |
| 78 | 其他无脊椎动物 | 诱饵管水母（中文名待核） | *Erenna sirena* | Cnidaria | [8902743](https://www.gbif.org/species/8902743) |
| 79 | 其他无脊椎动物 | 卵形瓜水母 | *Beroe ovata* | Ctenophora | [5233152](https://www.gbif.org/species/5233152) |
| 80 | 其他无脊椎动物 | 竖琴海绵 | *Chondrocladia lyra* | Porifera | [7189315](https://www.gbif.org/species/7189315) |
| 81 | 其他无脊椎动物 | 湖沼海绵 | *Spongilla lacustris* | Porifera | [2244988](https://www.gbif.org/species/2244988) |
| 82 | 其他无脊椎动物 | 弗氏食骨虫 | *Osedax frankpressi* | Annelida | [2329594](https://www.gbif.org/species/2329594) |
| 83 | 其他无脊椎动物 | 螠虫（中文名待核） | *Bonellia viridis* | Annelida | [5234395](https://www.gbif.org/species/5234395) |
| 84 | 其他无脊椎动物 | 裸体方格星虫 | *Sipunculus nudus* | Sipuncula | [5234445](https://www.gbif.org/species/5234445) |
| 85 | 其他无脊椎动物 | 蛇发篮海星 | *Gorgonocephalus caputmedusae* | Echinodermata | [2278436](https://www.gbif.org/species/2278436) |
| 86 | 其他无脊椎动物 | 游泳海参 | *Enypniastes eximia* | Echinodermata | [2279457](https://www.gbif.org/species/2279457) |
| 87 | 其他无脊椎动物 | 科瓦列夫斯基柱头虫 | *Saccoglossus kowalevskii* | Hemichordata | [2254481](https://www.gbif.org/species/2254481) |
| 88 | 其他无脊椎动物 | 头翼箭虫 | *Spadella cephaloptera* | Chaetognatha | [2307111](https://www.gbif.org/species/2307111) |
| 89 | 其他无脊椎动物 | 动吻虫 | *Echinoderes dujardinii* | Kinorhyncha | [4282163](https://www.gbif.org/species/4282163) |
| 90 | 其他无脊椎动物 | 铠甲虫 | *Nanaloricus mysticus* | Loricifera | [2501317](https://www.gbif.org/species/2501317) |
| 91 | 其他无脊椎动物 | 鳃曳虫 | *Priapulus caudatus* | Priapulida | [2501343](https://www.gbif.org/species/2501343) |
| 92 | 其他无脊椎动物 | 鳞皮腹毛虫（中文名待核） | *Lepidodermella squamata* | Gastrotricha | [4281692](https://www.gbif.org/species/4281692) |
| 93 | 其他无脊椎动物 | 颚口虫（中文名待核） | *Gnathostomula paradoxa* | Gnathostomulida | [2307163](https://www.gbif.org/species/2307163) |
| 94 | 其他无脊椎动物 | 微颚动物 | *Limnognathia maerski* | Micrognathozoa | [4632630](https://www.gbif.org/species/4632630) |
| 95 | 其他无脊椎动物 | 潘多拉共生虫 | *Symbion pandora* | Cycliophora | [2307136](https://www.gbif.org/species/2307136) |
| 96 | 其他无脊椎动物 | 垂头海索虫（中文名待核） | *Pedicellina cernua* | Entoprocta | [5188746](https://www.gbif.org/species/5188746) |
| 97 | 其他无脊椎动物 | 南方帚虫 | *Phoronis australis* | Phoronida | [5186393](https://www.gbif.org/species/5186393) |
| 98 | 其他无脊椎动物 | 水生铁线虫 | *Gordius aquaticus* | Nematomorpha | [2255445](https://www.gbif.org/species/2255445) |
| 99 | 其他无脊椎动物 | 曼氏血吸虫 | *Schistosoma mansoni* | Platyhelminthes | [5967489](https://www.gbif.org/species/5967489) |
| 100 | 其他无脊椎动物 | 蛭态轮虫 | *Adineta vaga* | Rotifera | [1000794](https://www.gbif.org/species/1000794) |

## 观察主题的来源入口

以下资料支持对应选题方向，后续制作时还需为各物种补充原始研究、分类来源和图片参考。

- [MBARI：发现记录](https://annualreport.mbari.org/2018/story/discovering-animals-never-seen-before)：Bathochordaeus mcnutti 的黏液滤食房、Osedax frankpressi 与鲸骨及细菌共生。
- [MBARI：诱饵管水母](https://www.mbari.org/animal/angler-siphonophore/)：Erenna sirena 的群体与诱捕行为。
- [MBARI：捕食性竖琴海绵](https://www.mbari.org/news/scientists-discover-extraordinary-new-carnivorous-sponge/)：Chondrocladia lyra 的结构、捕食与研究影像。
- [NOAA：游泳海参](https://oceanexplorer.noaa.gov/ocean-fact/what-is-a-headless-chicken-monster/)：Enypniastes eximia 的游泳观察。
- [WoRMS：头翼箭虫](https://www.marinespecies.org/aphia.php?id=105468&p=taxdetails)：Spadella cephaloptera 的接受名称与毛颚动物归属。
- [WoRMS：动吻动物数据库](https://www.marinespecies.org/kinorhyncha/index.php)：海底沉积物中的微小动物。
- [SICB：铠甲、环口与小颚动物](https://sicb.org/abstracts/an-introduction-to-loricifera-cycliophora-and-gnathometazoa/)：Nanaloricus mysticus、Symbion pandora、Limnognathia maerski 的原始研究者介绍；旧文献物种数与阶元不作为当前结论。
- [颚胃动物与腹毛动物线粒体研究](https://pubmed.ncbi.nlm.nih.gov/25796325/)：Gnathostomula paradoxa 与 Lepidodermella squamata 的研究对象和生活环境。

## 文档检查

- 活动待办为 100 项，均未勾选；分组计数为 10、10、8、7、15、20、30，合计 100。
- TODO 与本记录的 100 个学名逐项一致，且与现有 500 种学名查重通过。
- 本轮仅修改选题文档，检查相对链接目标和 Git 差异空白；无需运行应用构建或图片验收。
