# 身边动物湿地鸟类五种：研究与验收

2026-10-15。本批接续 todo 的小䴙䴘、普通鸬鹚、白骨顶、黑水鸡和池鹭；每种包含独立物种档案、一张封面和五张观察图。完成后本轮累计 20/100，待制作 80；全图册 620 份物种档案。

## 分类核验

五种在 GBIF strict match 中均为 ACCEPTED、EXACT，原始响应见[核验 JSON](../../src/assets/source/todo-common-wetland-five-taxonomy-match.json)。新增前按科学名称与原有 615 份档案查重。

| 档案 | 学名 | GBIF key | 目、科、属 |
| --- | --- | --- | --- |
| 小䴙䴘 | Tachybaptus ruficollis | 2482048 | Podicipediformes → Podicipedidae → Tachybaptus |
| 普通鸬鹚 | Phalacrocorax carbo | 2481890 | Suliformes → Phalacrocoracidae → Phalacrocorax |
| 白骨顶 | Fulica atra | 2474377 | Gruiformes → Rallidae → Fulica |
| 黑水鸡 | Gallinula chloropus | 5228199 | Gruiformes → Rallidae → Gallinula |
| 池鹭 | Ardeola bacchus | 2480907 | Pelecaniformes → Ardeidae → Ardeola |

五种均为动物界、脊索动物门、鸟纲。小䴙䴘与已有凤头䴙䴘分属不同属，中文分类单元字形沿用图册的“䴙䴘”。黑水鸡范围限定 G. chloropus，不合并已拆分的美洲 G. galeata。池鹭采用 GBIF 的鹈形目，不照搬部分旧地区数据库中的鹳形目。亚种和季节羽色不另计物种。

## 研究与共读

- 小䴙䴘：[香港湿地公园](https://www.wetlandpark.gov.hk/tc/biodiversity/beauty-of-wetlands/wildlife/tachybaptus-ruficollis)支持繁殖羽和潜水取食；[香港观鸟会](https://avifauna.hkbws.org.hk/species/0070/009000)支持成幼外形、分布及香港记录；[Canal & River Trust](https://canalrivertrust.org.uk/things-to-do/canal-and-river-wildlife/a-spotters-guide-to-waterway-wildlife/little-grebe)支持浮巢、双亲孵卵与背负幼鸟。共读比较幼鸟头纹和成鸟脸颊，等鸟自行浮出水面。
- 普通鸬鹚：[RSPB](https://www.rspb.org.uk/birds-and-wildlife/cormorant)支持黑色身体、捕鱼与展翅；[BTO](https://www.bto.org/learn/about-birds/birdfacts/cormorant)支持筑巢、孵卵与幼体发育；[ADW](https://animaldiversity.org/accounts/Phalacrocorax_carbo/)提供分布和生活史。避免将羽毛概括为完全不防水；只说明展翅晾羽，不从单张图推断机制或时长。
- 白骨顶：[RSPB](https://www.rspb.org.uk/birds-and-wildlife/eurasian-coot)支持白嘴额甲、瓣状趾和食物；[BTO](https://www.bto.org/learn/about-birds/birdfacts/coot)支持水下取食和繁殖；[香港观鸟会](https://avifauna.hkbws.org.hk/species/0060/007800)补充中国附近地区记录。瓣状趾与鸭的连蹼分开解释。
- 黑水鸡：[RSPB](https://www.rspb.org.uk/birds-and-wildlife/moorhen)支持嘴色、胁纹、尾下白色与活动；[BTO](https://www.bto.org/learn/about-birds/birdfacts/moorhen)支持水陆觅食与双亲孵卵；[Cornell 的美洲近缘种说明](https://www.allaboutbirds.org/guide/Common_Gallinule/)仅用于拆分对照，不把美洲种的繁殖、数量资料直接移入黑水鸡档案。
- 池鹭：[NParks](https://www.nparks.gov.sg/florafaunaweb/fauna/5/4/546)支持季节羽色和迁徙；[香港观鸟会物种资料](https://avifauna.hkbws.org.hk/species/0170/022900)支持白翅、非繁殖羽辨认限制与香港留居和迁徙并存；[巢群监测](https://www.hkbws.org.hk/web/chi/documents/report/egret_summer_report_2010.pdf)支持树上集群繁殖。等待自行起飞，不以惊飞展示白翅。

命名作者和年份来自 GBIF 记录：Pallas 1764、Linnaeus 1758（普通鸬鹚、白骨顶、黑水鸡）、Bonaparte 1855（池鹭）。命名年份不写成人类首次发现时间。地图统一采用香港湿地附近的代表点，仅用于探索，不是野外观察记录或完整分布范围。

## 保护状态

小䴙䴘采用香港观鸟会明列的全球 IUCN LC；普通鸬鹚、白骨顶、黑水鸡采用 BTO 明列的全球 LC；池鹭采用[香港渔护署数据库](https://www.afcd.gov.hk/english/conservation/hkbiodiversity/database/popup_record.php?id=3325)与香港观鸟会的全球 LC。未独立确认物种评估日期，保留无评估年份；全球趋势统一保留 unknown。小䴙䴘的香港观鸟会资料提到下降，但未在此核对对应全球评估版本。英国绿、琥珀名单与新加坡地区红名单不当作全球 IUCN 等级，网页更新时间不作评估年份。

## 图片记录

使用内置 image_gen 按独立情景生成，每种六张，最终提示、输入和运行尺寸及 SHA-256 记录在各物种 prompts.json。所有图片标明 AI 科学情景重建；足趾、眼色和羽色细节不用于精确鉴定或解剖测量。游泳时水面以下的身体不可见，不将水面遮挡算作图边裁切。阶段和季节分别标注。

- [小䴙䴘图片记录](../../src/assets/source/species/little-grebe/README.md)
- [普通鸬鹚图片记录](../../src/assets/source/species/great-cormorant/README.md)
- [白骨顶图片记录](../../src/assets/source/species/eurasian-coot/README.md)
- [黑水鸡图片记录](../../src/assets/source/species/common-moorhen/README.md)
- [池鹭图片记录](../../src/assets/source/species/chinese-pond-heron/README.md)

封面源 PNG 和保留 WebP 原始分辨率分别检查，图库分别检查源图与运行联系图。测量完整可见主体轮廓，实际解码 WebP 尺寸和哈希绑定唯一 original-covers fixture，并同步 cover-subjects。使用当前 fitting 规则制作九组视口图片栏模拟，桌面另计算内容增高 160px，六个透明度端点共享几何。未启动 GUI 或无头浏览器；静态几何与模拟不验证字体、完整页面排版或真实内容高度。

## 验证

`npm run typecheck` 通过。`npm test` 中的全部测试组分组复验通过，共 925 项、0 失败：分类与文案 232 项、轮播几何与资源 628 项、轮播交互 8 项，以及部署、图片转换、分类探索、地理探索、图片查看器、品牌、目录、微生物与构建子路径检查。封面元数据追加处的逗号遗漏已修正，并通过类型与轮播复验。

`npm run test:dist-subpath` 的 5 项检查通过，包含生产构建、子路径图片可达性、目录与完整档案一致性及原有 JavaScript 预算。30 张运行 WebP 的哈希与 prompts.json 一致，五张封面同时匹配 fixture。文档相对链接和 `git diff --check` 通过。

已目视检查五种源图、运行图以及 45 组图片栏模拟；全部封面源与运行尺寸为 1536×1024。临时 PNG、联系图和模拟图完成验收后清理，保留运行 WebP 和文字、哈希记录。浏览器字体与完整页面排版仍未验证。
