# Corn Snake image set

2026-09-14 使用内置 image_gen 生成一张封面与五张观察图。最终提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/corn-snake/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。分类差异与字段依据见 [五物种资料核验](../../../../../docs/research/five-herps-2026-09-14.md)。

## 内容来源

- [The Reptile Database：玉米蛇分类与物种界限](https://reptile-database.reptarium.cz/Pantherophis/guttatus)
- [Animal Diversity Web：玉米蛇生活史](https://animaldiversity.org/accounts/Pantherophis_guttatus/)
- [Animal Diversity Web：玉米蛇全球保护等级](https://animaldiversity.org/accounts/Pantherophis_guttatus/)
- [新泽西州野生动物部门：玉米蛇蜕皮](https://www.nj.gov/dep/fgw/ensp/pdf/end-thrtened/cornsnake.pdf)

来源支持全球 LC；独立评估日期及全球趋势未核实，未填 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：弯曲身体向前爬。玉米蛇在落叶上形成宽大的弯曲，头尾完整可见。
- `03-observation.webp`：伸出分叉舌头。玉米蛇头部近景，分叉舌头伸出口外。
- `04-observation.webp`：沿低枝攀爬。玉米蛇用身体贴住粗糙的低矮枝条。
- `05-observation.webp`：躲在树皮下面。玉米蛇藏在松动树皮旁，头部与部分身体可见。
- `06-observation.webp`：小蛇和蜕下的皮。幼年玉米蛇停在一段空的蜕皮旁。

## 封面验收

源图与运行 WebP 为 1536×1024。完整主体边界 `{"left": 696, "top": 114, "right": 1480, "bottom": 999}` 包含头部、可见趾端、尾端或颈褶等外部特征，主体大小 784×885 源像素，中心位于源宽 70.8%。新物种无旧封面。已检查最终源图与运行封面的原始分辨率。

focalPoint：`{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 适配同一封面，以完整主体边界计算最大显示尺寸。运行封面 SHA-256：`c1617fb686e57d81408a3459c37f60d7311c10fe402eb5043555d438bb3f8f78`。

以下六视口覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。间距以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 155.91×176.00 | 82.04 | 48.00 | 40.00 | Pass |
| 390×760 | 155.91×176.00 | 117.04 | 48.00 | 40.00 | Pass |
| 1366×768 | 379.15×428.00 | 96.00 | 141.58 | 48.00 | Pass |
| 1920×900 | 496.09×560.00 | 96.00 | 227.15 | 48.00 | Pass |
| 2560×900 | 496.09×560.00 | 96.00 | 393.55 | 48.00 | Pass |
| 3840×900 | 496.09×560.00 | 96.00 | 726.35 | 48.00 | Pass |

静态几何合成图用于检查完整主体与安全区域，不作为浏览器或字体排版截图。图集检查以外形、动作、场景和裁边为范围；细小鳞片和趾垫内部结构不作为精确解剖图使用。

## 压缩与哈希

使用 npm run convert:webp 转换，并检查解码与尺寸。保留六张 WebP，以下源哈希记录最终临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `35092aebcc4eb4da3dc8fdc2c9165b7ad103c6ba1cd5495889ac21620c3a8a72` | `c1617fb686e57d81408a3459c37f60d7311c10fe402eb5043555d438bb3f8f78` |
| 02 | `ee77e005e350587056cf4bb0ac6a1381cc6552672c0f546a0a65a36c625459bb` | `b0d7854fd39fd0e5e9c5785a8524f02f58bb0250fd0f923c5e795126162e8178` |
| 03 | `8a42cc5fedeed2d0fceea85f0bed1fab731f78ddd557083c73435738b7a5c036` | `74f307071101310da7258fb7175aeb7c4c3373adec4912f04ad2eebc03a2a89f` |
| 04 | `ba4046a65899367ab9b945e3f09bac46237d719b6d868dca7e5ca3409abfc908` | `aea19f0517458411d70d2f61be0a3b2c65ca58d2b702852f0b8a27807f8cdf99` |
| 05 | `bfff3c5f98ea067e9e5e53a6801bc2080f47a3d082f70d6259e406e82713d37c` | `31b12a3b4626cdf32f02c5b484c27dca36e2340ee0a6e9e100ccc7ebdc3cae1a` |
| 06 | `6e9b85ee1306a7d9c9efae8e2339bbc58206c3840ccf1f3cde09eed51efdd3a3` | `849684c448fd62c822d9eaf73fbcf1e4a395147d5837e0724f65918d17cc673b` |

## 目视记录与边界

首张候选封面左侧枝叶过于清晰，编辑后虚化左侧背景。最终尾尖仍靠近源图右下方，但有真实背景间距，轮播完整主体边界涵盖尾尖。蜕皮图为局部教育场景，不表示同一只蛇的连续蜕皮记录。

已检查临时源图、原始分辨率运行封面、运行图集联系表及六视口静态几何合成图。封面主体与视口、文字区和面板均保持至少 24 CSS px 间距。已核对最终源图与运行文件哈希，清理仓库内的临时 PNG；保留生成工具目录原件。

## 仓库验证

2026-09-14：npm test 全部 453 项通过，其中分类与档案 183 项、轮播 232 项、生产子路径与数据还原 3 项。类型检查和生产构建通过。30 张 WebP 的解码、1536×1024 尺寸与独立哈希通过检查，每种恰好保留六张图片。未启动 GUI 或无头浏览器。
