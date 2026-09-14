# Common Leopard Gecko image set

2026-09-14 使用内置 image_gen 生成一张封面与五张观察图。最终提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/leopard-gecko/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。分类差异与字段依据见 [五物种资料核验](../../../../../docs/research/five-herps-2026-09-14.md)。

## 内容来源

- [The Reptile Database：豹纹守宫分类与分布](https://reptile-database.reptarium.cz/Eublepharis/macularius)
- [San Diego Zoo：外形与生活习性](https://animals.sandiegozoo.org/animals/leopard-gecko)
- [Animal Diversity Web：眼睑与带爪脚趾](https://animaldiversity.org/accounts/Eublepharis_macularius/)
- [Lee Richardson Zoo：全球等级与幼体花纹](https://www.leerichardsonzoo.org/leopardgecko)
- [2015 年研究：豹纹守宫尾部脂肪储存](https://pubmed.ncbi.nlm.nih.gov/25935709/)

来源支持全球 LC；独立评估日期及全球趋势未核实，未填 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：粗尾巴从上面看。豹纹守宫在岩石上停留，粗厚尾巴弯在身体旁。
- `03-observation.webp`：从石缝探出头。豹纹守宫躲在岩石缝中，头部和前脚露在外面。
- `04-observation.webp`：黄昏寻找蟋蟀。豹纹守宫朝向地面上的一只蟋蟀。
- `05-observation.webp`：带小爪的脚趾。豹纹守宫前脚踩在粗糙岩石上，趾端的小爪可见。
- `06-observation.webp`：幼体身上的横带。幼年豹纹守宫身上有深浅相间的横带。

## 封面验收

源图与运行 WebP 为 1536×1024。完整主体边界 `{"left": 650, "top": 490, "right": 1480, "bottom": 700}` 包含头部、可见趾端、尾端或颈褶等外部特征，主体大小 830×210 源像素，中心位于源宽 69.3%。新物种无旧封面。已检查最终源图与运行封面的原始分辨率。

focalPoint：`{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 适配同一封面，以完整主体边界计算最大显示尺寸。运行封面 SHA-256：`418baa359b7ce29765f31a4cdf29ba35b8f3f4aea72ed8895ec80d84448fbc2e`。

以下六视口覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。间距以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 272.00×68.82 | 24.00 | 101.59 | 93.59 | Pass |
| 390×760 | 342.00×86.53 | 24.00 | 92.73 | 84.73 | Pass |
| 1366×768 | 559.68×141.61 | 72.00 | 51.32 | 191.20 | Pass |
| 1920×900 | 825.60×208.89 | 72.00 | 62.40 | 223.56 | Pass |
| 2560×900 | 1132.80×286.61 | 72.00 | 75.20 | 184.69 | Pass |
| 3840×900 | 1747.20×442.06 | 72.00 | 100.80 | 106.97 | Pass |

静态几何合成图用于检查完整主体与安全区域，不作为浏览器或字体排版截图。图集检查以外形、动作、场景和裁边为范围；细小鳞片和趾垫内部结构不作为精确解剖图使用。

## 压缩与哈希

使用 npm run convert:webp 转换，并检查解码与尺寸。保留六张 WebP，以下源哈希记录最终临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `d55a774022b5650e9da738ab1119b82a90157fb1def9b51a27f51def9d45f883` | `418baa359b7ce29765f31a4cdf29ba35b8f3f4aea72ed8895ec80d84448fbc2e` |
| 02 | `8919b216044f3608c2e63737af41ebf6eda552c373fa7b1ff3f51635130a941f` | `007069541edaa55d1383cbde20e03ef45db557342ef18cd791e953ed712cae7a` |
| 03 | `ce719cd11f43f08c157131181acd7c0faeb77e50fcf760fd8fe28a5b00253a02` | `2e2720244c19f6eb032939d5d48944c04b9aae6de6933c6ba8349d447ebedde5` |
| 04 | `f120c7c8974fda013e75c98d6215d0dfe210fbac93884efee6aba304d38f2f61` | `6599e06f6d34909201ff6a7f0347c55bd5c3bc1769dffd0c86adc7de5c39ddcf` |
| 05 | `40e47d6a6797a41c4dc1123d85b640b4fbb51b8ba4bf19fa614343c83fc63491` | `1ae6b5aa5ab9b13ca3b6f1cb2abd88c64669114d2c1528ca891200810d1f2763` |
| 06 | `761dc3839681102aa3a56a02be2eace55ea11fc3e7af5b800bf3ed5328ab6557` | `66448d2509e8e52392a3c3066434833ddb26a19c0225d0c671a5bdc916db1585` |

## 目视记录与边界

首张候选封面尾尖碰到右边缘，编辑后补足尾尖与背景间距。尾部环纹用于认识外形，不据此数鳞片。幼体与成体图不代表同一个体的成长记录。

已检查临时源图、原始分辨率运行封面、运行图集联系表及六视口静态几何合成图。封面主体与视口、文字区和面板均保持至少 24 CSS px 间距。已核对最终源图与运行文件哈希，清理仓库内的临时 PNG；保留生成工具目录原件。

## 仓库验证

2026-09-14：npm test 全部 453 项通过，其中分类与档案 183 项、轮播 232 项、生产子路径与数据还原 3 项。类型检查和生产构建通过。30 张 WebP 的解码、1536×1024 尺寸与独立哈希通过检查，每种恰好保留六张图片。未启动 GUI 或无头浏览器。
