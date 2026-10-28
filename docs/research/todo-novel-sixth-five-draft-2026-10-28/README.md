# 新奇动物第六批制作草稿

本文件保留首次访问受阻时的制作计划与证据，不作为最终完成报告。与 main 重复内容的最终整合、来源和公开状态见[第六批研究记录](../todo-novel-sixth-five-2026-10-28.md)。下述阻塞是当时的观察，不代表目前所有来源仍不可访问。

按软体动物表中未完成项的顺序选取 N008、N013、N023、N024、N025。历史分类及异名摘录见 [planning-snapshot.json](planning-snapshot.json)，来自 2026-10-22 的选题核查，不冒充本日重新查询。2026-10-28 将五个接受名及快照中的异名与当前档案学名作精确比较，未发现重叠；此检查不能替代种界研究。

## 逐种核查与图片计划

每种制作一张完整主体偏右的封面及五张观察图。下列是待核实的观察选题，不是已经完成的影像或事实验收。

| 编号与选题 | 分类草稿与必须核查的问题 | 五张观察图选题 |
| --- | --- | --- |
| N008 紫毯章鱼 Tremoctopus violaceus | Cephalopoda / Octopoda / Tremoctopodidae；先阅读两篇 PMC 文献核实与 T. gracilis 的种界、性别及图版鉴定，不能按社交媒体颜色选图。 | 雌性完整外形、背侧腕间膜、膜收拢姿态、腕与吸盘、开阔水层环境；性别与姿态均须由本种资料支持。 |
| N013 龙骨新月贝 Neomenia carinata | Solenogastres / 省略目 / Neomeniidae；中文名暂作标签，核查腹沟、骨针、食谱与标本尺度，不填旧 Neomeniamorpha。 | 蠕虫状外形、背侧隆起、腹面足沟、骨针结构、底栖环境；结构示意与自然场景分开，不能伪造显微比例尺。 |
| N023 条纹睡衣乌贼 Sepioloidea lineolata | Cephalopoda / Sepiida / Sepiadariidae；复核水族馆与 CSIRO 的形态、分布、分类差异，不因英文俗名改写成普通鱿鱼。 | 黑白条纹、眼部外观、拨沙姿态、埋沙露眼、沙底完整外形。 |
| N024 长突太阳能海蛞蝓 Phyllodesmium longicirrum | Gastropoda / Nudibranchia / Myrrhinidae；核对旧网页科名与现用口径；区分完整共生藻与盗食叶绿体。 | 完整外形、扁平背突、褐色斑点、与食物的关系、共生藻示意；不得把体表图像当作细胞鉴定。 |
| N025 绿叶海天牛 Elysia chlorotica | Gastropoda / 历史 GBIF 快照未设目 / Plakobranchidae；核对项目现有同属路径与现代口径；不将旧水平基因转移假说当定论。 | 叶状侧足、头部嗅角、分枝消化腺示意、藻类食物、完整侧面；不能写成植物或仅靠阳光生活。 |

所有测量、保护现状、命名故事、分布和行为均需逐条来源支持。未核实的数值不填；NE 如需采用，应明确表示缺乏可追溯评估资料，而非声称已排除全球评估。

## 当前阻塞

2026-10-28 对 api.gbif.org、pmc.ncbi.nlm.nih.gov、www.eu-nomen.eu、www.aquariumofpacific.org、seaslugforum.net 的只读请求均返回 `Tunnel connection failed: 403 Forbidden`。运行实例的网络策略为 enforced，未配置自定义允许域名。属于代理访问限制，不能据此认定来源失效。

环境配置草稿已保存本批所需的来源域名：api.gbif.org、www.gbif.org、pmc.ncbi.nlm.nih.gov、www.eu-nomen.eu、obis.org、www.marinespecies.org、www.aquariumofpacific.org、www.cmar.csiro.au、seaslugforum.net、www.seaslugforum.net。保存草稿不代表运行实例已经放行。须在环境设置保存应用后重新请求；遇到来源重定向，再按实际目的地诊断。

## 恢复后完成步骤

1. 重试来源请求，读取正文，逐种复核接受名、完整异名、种界和项目内共用阶元中文名称；保存本次查询证据。
2. 编写五份独立档案，涵盖发现与命名故事、形态、生态和五项观察主题，按字段记录来源及实际访问日期。
3. 在形态证据充分后制作五张封面和二十五张观察图，检查源图及最终 WebP；明确生成图或结构示意的性质，记录实际尺寸、哈希及完整主体边界。
4. 登记目录、封面主体表及唯一对应的测试 fixture；按图片规则检查九档视口、动画端点及图片栏模拟，不启动浏览器。
5. 运行完整 npm test，检查生产 JS 预算和子路径图片访问；不得提高预算来掩盖新增内容造成的回归。
6. 全部通过后更新逐种图片记录与本批研究报告，勾选五项 TODO，更新总数和分组数量。当前五项保持未完成。
