# 第八批灭绝动物：E036–E040

2026-10-20 核验。雷龙、路氏迷惑龙、脆弱异特龙、蒙古伶盗龙与巨大恐爪龙采用 `Historical and fossil evidence` 与 EX，不填 IUCN 评估年份，不添加当前活体代表坐标。代表时期、化石产区与精确灭绝时间分开说明。

| 编号 | 物种与直接资料 | 内容限定 |
| --- | --- | --- |
| E036 | [雷龙 Brontosaurus excelsus](https://www.nhm.ac.uk/discover/brontosaurus-reinstating-a-prehistoric-icon.html) | 晚侏罗世北美，Marsh 1879 命名。2015 年研究支持将雷龙属与迷惑龙属分开；旧组合 Apatosaurus excelsus 不另计种。柱状四肢支持陆地活动，头部和软组织含复原选择。 |
| E037 | [路氏迷惑龙 Apatosaurus louisae](https://carnegiemnh.org/the-two-headed-dinosaur/) | 晚侏罗世北美，Holland 1915 命名，种名纪念 Louisa Carnegie。卡内基博物馆头骨展示曾修订；不沿用高而钝的错误头型，也不说展架来自单一完整个体。 |
| E038 | [脆弱异特龙 Allosaurus fragilis](https://www.nhm.ac.uk/discover/dino-directory/allosaurus.html) | 晚侏罗世北美，Marsh 1877 命名。比较眼上突起、三指前肢与后腿；不将骨床中多个个体直接解释成合作围猎，不混入其他异特龙种的修订结论。 |
| E039 | [蒙古伶盗龙 Velociraptor mongoliensis](https://www.amnh.org/explore/news-blogs/velociraptor-feather-evidence) | 晚白垩世蒙古，Osborn 1924 命名。前臂羽茎附着突起提供直接羽毛证据；完整羽色、纹路与羽毛分布仍未知。足爪功能保留讨论，不照搬电影剖腹攻击和大型无羽外观。 |
| E040 | [巨大恐爪龙 Deinonychus antirrhopus](https://www.nhm.ac.uk/discover/dino-directory/deinonychus.html) | 早白垩世北美，Ostrom 1969 命名。以长尾、第二趾爪与骨骼观察切入；本种没有直接羽毛证据，图中羽被依据近缘类群比较复原，不能与伶盗龙直接证据混为一谈。 |

采用 [Tschopp 等 2015 年梁龙科修订原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC4393826/)，以 [Europe PMC 全文接口](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4393826/fullTextXML)读取对应论文，核对雷龙与迷惑龙的处理。该研究支持两个属有效，不能仅凭生成图颜色或体型分辨其分类。头、颈和软组织复原不表达每个细节都有直接化石证据。

补充来源包括 [Yale Peabody 雷龙标本与复原](https://peabody.yale.edu/activity/explore-highlights-coloring-book)、[NPS 模式标本说明](https://www.nps.gov/subjects/fossils/fossil-type-specimens-in-parks.htm)、[Carnegie 路氏迷惑龙名称](https://carnegiemnh.org/jurassic-days-specimen-scavenger-hunt/)、[AMNH 脆弱异特龙头骨记录](https://digitalcollections.amnh.org/archive/Mounted-skull-of-Allosaurus-fragilis--American-Museum-of-Natural-History-2URM1T1DZIAK.html)、[NHM 伶盗龙足爪和外形讨论](https://www.nhm.ac.uk/discover/velociraptor-facts.html)及 [Ostrom 1969 年骨骼研究](https://elischolar.library.yale.edu/peabody_museum_natural_history_bulletin/30/)。

## 分类采用

[GBIF 原始匹配](../../src/assets/source/todo-extinct-eighth-five-gbif.json)、[PBDB 原始查询](../../src/assets/source/todo-extinct-eighth-five-pbdb.json)与[逐种采用表](../../src/assets/source/todo-extinct-eighth-five-adopted-taxonomy.json)保留查询日期和差异。五种 GBIF 均为 EXACT/ACCEPTED，沿用其界、门、科、属与种身份；其链没有纲与目，继续按 ADR 0002 省略，不将 Dinosauria 等未定阶元分类群强填为纲或目。

雷龙与迷惑龙归梁龙科，异特龙归异特龙科，伶盗龙与恐爪龙归驰龙科。PBDB 对脆弱异特龙返回未指定科，本档案采用 GBIF 的 Allosauridae，并以 NHM 分类说明交叉核对；PBDB 返回的 Saurischia、Reptilia 等 class 标签不混入当前 GBIF 路径。分类图谱只表达归属，不表示生存年代或演化时间。

## 图片与验证

使用内置 image_gen，保留图片在 `public/images/species/<slug>/`，每种一张封面和五张观察图。最终提示词、修订、采用键与验收保存在 `src/assets/source/species/<slug>/`。图片统一标注 AI 科学复原示意，头颈软组织、鳞色、羽色、花纹、姿态和植物布景含推测；模型不是实际馆藏，双视角不表示性别差异或真实相遇。不同年代与地区的物种不置于同一自然场景。

新增后首次生产构建的动物页面脚本为 550,122 字节，超出 550,000 字节预算。目录编码增加“英文名等于学名”的复用标记，在客户端恢复完整英文名，保留全部内容字段与预算上限；修订后的初步构建为 549,853 字节。最终目录还原与预算检查随全量测试验证。

五种图片验收分别见[雷龙](../../src/assets/source/species/brontosaurus-excelsus/README.md)、[路氏迷惑龙](../../src/assets/source/species/apatosaurus-louisae/README.md)、[脆弱异特龙](../../src/assets/source/species/allosaurus-fragilis/README.md)、[蒙古伶盗龙](../../src/assets/source/species/velociraptor-mongoliensis/README.md)与[巨大恐爪龙](../../src/assets/source/species/deinonychus-antirrhopus/README.md)。共 30 张 WebP，合计 8,647,224 字节，实际解码均为 1536×1024。

我分别检查源图与运行图联系表、原分辨率封面，并以运行 WebP 检查 390、761、1920、3840 宽的静态图片栏模拟。修订了初稿主体偏左、伶盗龙尾端伸入左侧以及两种蜥脚类的前足细节。前足以柱状外形作简化示意，图中细节不用于推断骨件或爪的精确数量。每种封面在九档视口与桌面内容高度 +160px 共 16 组几何检查中通过；六个透明度动画端点共用位置与尺寸，完整主体至少留出 24 CSS px。

验证结果：

- `npm run test:carousel`：756 项通过（748 项几何与资源检查、8 项交互检查）。
- `npm test`：1066 项通过，包含分类、档案、轮播、生产构建、子路径资源及完整目录字段还原。
- 最后三张观察图修订后再次运行 `npm run test:dist-subpath`：5 项通过；构建复制的最终 WebP 与 public 中的哈希一致。
- `npm run typecheck` 与 `git diff --check` 通过。
- 最终动物页面加载脚本为 549,853 字节，低于 550,000 字节上限；未调高预算。
- 源图与运行图逐张核对 SHA-256、实际尺寸，每种仅保留六张 WebP。验收后删除临时 PNG、被弃候选联系表与模拟文件。

按仓库约定没有打开 GUI 或无头浏览器。静态几何与图片栏模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。目录现有 740 份物种档案，todo 本轮累计完成 40 种、剩余 60 种。
