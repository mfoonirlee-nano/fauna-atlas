# 新奇动物第六批五种

本批选择 N008 紫毯章鱼、N013 龙骨新月贝、N023 条纹睡衣乌贼、N024 长突太阳能海蛞蝓和 N025 绿叶海天牛。已完成五份独立档案、五张封面和二十五张观察图。正式目录由 825 增至 830 份，本轮制作进度由 25/100 增至 30/100，TODO 已按验证结果勾选。

## 名称、分类与来源

2026-10-28 重新查询 GBIF 接受名、完整异名列表和 IUCN 类别转录，保存[本批快照](../../src/assets/source/todo-novel-sixth-five-taxonomy.json)。五种均精确匹配接受种；历史选题快照保留在[先前研究草稿](todo-novel-sixth-five-draft-2026-10-28/README.md)，不以旧快照冒充本次查询。

| 编号 | 学名 | 采用的纲 / 目 / 科 |
| --- | --- | --- |
| N008 | Tremoctopus violaceus | Cephalopoda / Octopoda / Tremoctopodidae |
| N013 | Neomenia carinata | Solenogastres / 省略目 / Neomeniidae |
| N023 | Sepioloidea lineolata | Cephalopoda / Sepiida / Sepiadariidae |
| N024 | Phyllodesmium longicirrum | Gastropoda / Nudibranchia / Myrrhinidae |
| N025 | Elysia chlorotica | Gastropoda / Sacoglossa / Plakobranchidae |

复用项目已有阶元的中文名。Neomenia 的中文选题名未确认为规范名；新设科、属没有核实通行中文名时保留拉丁名称加阶元。Neomenia 不补旧目名。Elysia 的 GBIF 路径未设置目级，采用 Sea Slug Forum 的 Sacoglossa 与项目既有叶羊海天牛的囊舌目口径；不将这个补充解释为新增目。

### 逐种证据边界

- **紫毯章鱼：** [2022 年地中海形态与遗传研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC8749848/)与[墨西哥湾研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC7854555/)核对严格种义。雌性的大腕膜、性别差异与远洋生活分开说明。不根据色彩鉴定 T. violaceus 与 T. gracilis，不把少数胃内容物残留推广成全种稳定食谱。图集为雌性形态重建，不是经过遗传鉴定的本种照片。
- **龙骨新月贝：** [WoRMS](https://www.marinespecies.org/aphia.php?p=taxdetails&id=140560)与 [PESI](https://www.eu-nomen.eu/portal/taxon.php?GUID=urn%3Alsid%3Amarinespecies.org%3Ataxname%3A140560)核对 Tullberg 1875 年命名与原始文献。[2024 年遗传研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11488289/)解释沟腹类在软体动物中的位置。查看了 WoRMS 所列阿尔沃兰海标本影像作为体型参考，未将其复制进运行资源。体表、腹面图是结构重建；标本的 7 mm 长度及 350–365 m 深度不填成全种成体指标。未核实本种食谱，食物、测量和地图坐标均不臆填。
- **条纹睡衣乌贼：** [澳大利亚博物馆](https://australian.museum/learn/animals/molluscs/striped-pyjama-squid-sepioloidea-lineolata-quoy-and-gaimard-1832/)核实条纹、黄色眼部、沙底海草环境和埋沙伏击虾鱼的行为。[CSIRO](https://www.cmar.csiro.au/data/caab/taxon_report.cfm?caab_code=23608001)提供接受名、标本位置与书目。水族馆、MarineBio 的访问失败没有记成成功访问，也没有用于替代已读取的博物馆来源。
- **长突太阳能海蛞蝓：** [Sea Slug Forum](https://seaslugforum.net/showall/phyllong)支持扁平背突、Sarcophyton 食物及完整共生藻。共生藻来自软珊瑚的具体途径仍按原文保留推测。旧页面使用 Glaucidae，档案采用本次 GBIF 的 Myrrhinidae；不照搬旧科名。没有核实规范英文俗名时以学名作为英文标签。
- **绿叶海天牛：** [Sea Slug Forum](https://seaslugforum.net/showall/elyschlo)核实叶状侧足、分枝消化腺、Vaucheria 食物及北美盐沼环境。[2022 年研究综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9642861/)讨论盗食叶绿体及基因转移假说的证据争议，避免沿用旧论坛讨论中已被质疑的确定语气。保留叶绿体不等于保留整个共生藻，更不等于动物成为植物。

## 保护状态

GBIF 转录的 IUCN 条目给条纹睡衣乌贼 DD，指向[评估 903030](https://www.iucnredlist.org/species/162499/903030)。[GBIF 来源条目](https://api.gbif.org/v1/species/176600347)与[类别查询](https://api.gbif.org/v1/species/2290668/iucnRedListCategory)均读取成功；IUCN 原页返回 403。因此保留 DD，同时明确独立评估日期、种群趋势未核实，不把名录抓取时间当评估年份。

其余四种 GBIF 类别查询为 NE。档案用 NE 表示本次未核实可追溯评估的资料缺口，不据此证明全球没有评估，也不声称没有保护风险。没有可靠来源的体重、寿命、速度和繁殖数量不填入指标。

## 目录编码

新增物种后，首轮构建的动物页面静态依赖 JS 总量为 550,775 字节，超过原有 550,000 字节限制。分类字典优先给高频分类单元分配短索引，重复的完整分类路径共享元组，空别名数组使用可逆标记。保留字段还原检查与原有体积上限，未靠提高预算通过检查。

## 配图与验证

使用内置 image_gen 制作，全部运行图为 1536 × 1024 WebP。没有把生成图当作已鉴定的自然照片、显微图或连续行为记录。逐种提示词、源图/运行图哈希、实际尺寸与完整主体边界见：

- [紫毯章鱼](../../src/assets/source/species/violet-blanket-octopus/README.md)
- [龙骨新月贝](../../src/assets/source/species/neomenia-carinata/README.md)
- [条纹睡衣乌贼](../../src/assets/source/species/striped-pyjama-squid/README.md)
- [长突太阳能海蛞蝓](../../src/assets/source/species/long-cirrus-solar-slug/README.md)
- [绿叶海天牛](../../src/assets/source/species/eastern-emerald-elysia/README.md)

紫毯章鱼封面初稿左侧腕影响安静背景区，重新编辑了完整构图。长突太阳能海蛞蝓初稿的嗅角被画出明显片状环纹，封面和五张观察图均重新编辑；检查最终源图和 WebP 后保留。最终逐种检查六图联系表和封面原分辨率，30 张图均验证尺寸、哈希和解码。原始生成 PNG 留在工作区仓库外，项目不保留临时 PNG。

每张封面按最终 WebP 测量完整主体边界，绑定运行主体表和唯一 fixture。九档规定视口及桌面内容增高 160px 组成每种 16 个视口/高度组合，每项覆盖六种端点，共 480 项几何检查；最小净距为 24 CSS px，允许浮点误差 1e-6。另检查了每种在 390、761、1920、3840 宽下的图片栏模拟。静态几何与模拟不验证浏览器字体、整页排版或实际内容高度，未启动浏览器。

## 测试结果

执行完整 `npm test` 工作流。首轮分类测试发现原目录总数断言仍为 825，更新为 830，并按新增五种更新相关软体动物分支计数及新增分支断言。新增回归检查覆盖省略目级、未知食谱不臆填、共生藻与叶绿体区别、近似种证据边界及 DD 日期缺口。

重新执行后，部署脚本、图片转换、分类/文案/档案、分类浏览和地图子套件共 275 项通过。轮播曾在资源及主体元数据还未全部写入时失败；完成资源后重跑轮播及工作流剩余所有子套件，共 887 项通过。最终各子套件合计 1162 项通过，无剩余失败、跳过或取消；并非声称第一次完整命令就通过。

`npm run test:dist-subpath` 包含类型检查、生产构建及五项生产检查，均通过：目录逐字段还原、独立档案加载、子路径图片访问及 JS 预算得到验证。动物页面静态依赖 JS 总量为 549,982 字节，小于 550,000 字节上限；余量仅 18 字节，后续增加目录仍需重新检查编码预算。没有提高预算。

`git diff --check` 通过，最终复核本批图片数量、哈希、实际尺寸、相对文档链接及 TODO 的 30/70 数量。
