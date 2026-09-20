# todo 最后五种动物核验

核验日期：2026-09-20。新增斑马鱼、霓虹脂鲤、蓝绿光鳃鱼、麝凤蝶、赫克力士长戟大兜虫。每份档案围绕一个可指认特征，配一张封面和五张图库图。

## 分类与保护状态

| 物种 | 目／科／属 | 全球等级 | 依据 |
| --- | --- | --- | --- |
| Danio rerio | Cypriniformes／Danionidae／Danio | LC，评估于 2009-10-09 | [FishBase 等级](https://fishbase.se/summary/danio-frankei)、[Danionidae](https://fishbase.se/summary/FamilySummary.php?ID=749) |
| Paracheirodon innesi | Characiformes／Acestrorhamphidae／Paracheirodon | LC，评估于 2021-03-04 | [FishBase](https://www.fishbase.se/Fieldguide/FieldGuideSummary.php?c_code=604&genusname=Paracheirodon&speciesname=innesi) |
| Chromis viridis | Perciformes／Pomacentridae／Chromis | LC，评估于 2021-09-23 | [FishBase](https://fishbase.se/Fieldguide/FieldGuideSummary.php?c_code=036&genusname=Chromis&speciesname=viridis) |
| Byasa alcinous | Lepidoptera／Papilionidae／Byasa | LC | [GBIF／Catalogue of Life](https://www.gbif.org/taxon/NZGW)、[IUCN 发布记录](https://www.gbif.org/zh/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3/taxon/121971564) |
| Dynastes hercules | Coleoptera／Scarabaeidae／Dynastes | NE | [ADW](https://animaldiversity.org/accounts/Dynastes_hercules/)、[UF/IFAS](https://ask.ifas.ufl.edu/publication/IN1142) |

鱼纲沿用仓库 Actinopterygii。雀鲷科的上级沿用现有小丑鱼档案的 Perciformes，不在本批迁移整个科。斑马鱼使用 FishBase 的 Danionidae，旧 ADW、ITIS 的 Cyprinidae 仅用于解释历史差异。霓虹脂鲤采用 Acestrorhamphidae，不照搬旧观赏鱼页面的 Characidae。

麝凤蝶的 2020 是已核实的发布年份，尚未独立核实评估日期，assessedYear 留空。GBIF 页面直接访问返回 403，分类及 LC 通过搜索索引核对；日本标本网络支持物种名及科属。部分旧亚种有拆分处理，本批不拼接旧广义分布。五种种群趋势均记 unknown，不从全球等级推断稳定；体型和寿命缺少统一口径，暂不填数字。

## 观察内容与取舍

斑马鱼突出沿身体延伸的深浅条纹、结群和缓流浅水环境。图库只展示野生型，不把荧光实验品系当作野外外观。生态依据 [ADW](https://animaldiversity.org/accounts/Danio_rerio/)。孟加拉国区域 NT 不是本种全球等级，不混用。

霓虹脂鲤展示体侧蓝色亮带、银白前腹和后部红色，避免混成宝莲灯鱼。森林支流、落叶及树根环境参考 [Seriously Fish](https://www.seriouslyfish.com/species/paracheirodon-innesi)；蓝色是反射色，相关研究见[亮带光学结构论文](https://arxiv.org/abs/2406.07819)，不写作生物发光。

蓝绿光鳃鱼展示珊瑚上方群游、分叉尾鳍及枝杈藏身处。生活环境与群游资料参考 [Nausicaa](https://www.nausicaa.fr/en/my-visit/animals/blue-green-damselfish) 和上表 FishBase。图片不用于鳍条计数或区分所有近缘种。

麝凤蝶以长尾突为主，补充花上取食、雌蝶和幼虫。寄主依据[马兜铃取食记录](https://www.jstage.jst.go.jp/article/jjapbot/73/6/73_73_6_9298/_article/-char/en)。不把寄主植物作为儿童可触摸或食用材料推荐。标本依据[日本国立科学博物馆网络](https://science-net.kahaku.go.jp/search/detail?cls=collect11&pkey=842696)。

长戟大兜虫展示雄虫头角和胸角、无角雌虫、朽木幼虫及成虫取食水果。UF/IFAS 说明该物种复合群存在分类争议；本批以瓜德罗普、多米尼克的指名类群作场景，不合并旧中南美洲广义分布和最大尺寸。雌虫首轮图鞘翅过浅，重新生成深色有刻点的版本。性别与生活阶段不是等比例大小对照。

## 图像与验证

内置 image_gen 逐张生成，共保留 30 张 1536×1024 WebP。斑马鱼、蓝绿光鳃鱼、麝凤蝶和长戟大兜虫首轮封面侵入左侧文字区，重新生成后采用；霓虹脂鲤首轮通过。提示词、哈希、完整主体边界与各视口主体投影见各物种图片目录 README。

按 2026-09-16 全幅 hero 规则验收，允许边缘裁切，不声称移动端全身可见。未启动浏览器。

验证完成：类型检查、生产构建、图片转换测试 1 项、轮播测试 307 项、子路径测试 3 项通过。分类与档案测试首轮 193/196 通过，更新新增物种影响的数量断言和评估日期例外后，余下 3 项定向复测全部通过。未启动浏览器。
