# Pond Slider image set

2026-09-14 使用内置 image_gen 生成一张封面与五张观察图。最终提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/pond-slider/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。分类差异与字段依据见 [五物种资料核验](../../../../../docs/research/five-herps-2026-09-14.md)。

## 内容来源

- [The Reptile Database：滑龟分类与分布](https://reptile-database.reptarium.cz/Trachemys/scripta)
- [Animal Diversity Web：滑龟生活史](https://animaldiversity.org/accounts/Trachemys_scripta/)
- [ITIS：滑龟分类记录与 LC 引用](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=173819)

来源支持全球 LC；独立评估日期及全球趋势未核实，未填 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：爬出水面。红耳滑龟用前脚抓住木头，向水面上方攀爬。
- `03-observation.webp`：有蹼的脚在划水。红耳滑龟在浅水中游泳，后脚的蹼展开。
- `04-observation.webp`：眼睛后面的红斑。红耳滑龟头部侧面，红色斑块位于眼睛后方。
- `05-observation.webp`：水草也是食物。红耳滑龟在水下取食植物叶片。
- `06-observation.webp`：岸边的小龟。幼年红耳滑龟停在湿润岸边，绿色龟壳上的纹路可见。

## 封面验收

源图与运行 WebP 为 1536×1024。完整主体边界 `{"left": 645, "top": 218, "right": 1405, "bottom": 700}` 包含头部、可见趾端、尾端或颈褶等外部特征，主体大小 760×482 源像素，中心位于源宽 66.7%。新物种无旧封面。已检查最终源图与运行封面的原始分辨率。

focalPoint：`{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 适配同一封面，以完整主体边界计算最大显示尺寸。运行封面 SHA-256：`43dcd52aa088cf0c4bd914faa460aae131d7756f4024218608d80e833b9cdb86`。

以下六视口覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。间距以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 272.00×172.51 | 24.00 | 49.75 | 41.75 | Pass |
| 390×760 | 277.51×176.00 | 56.24 | 48.00 | 40.00 | Pass |
| 1366×768 | 559.68×354.95 | 72.00 | 51.32 | 84.52 | Pass |
| 1920×900 | 825.60×523.60 | 72.00 | 62.40 | 66.20 | Pass |
| 2560×900 | 882.99×560.00 | 96.00 | 200.11 | 48.00 | Pass |
| 3840×900 | 882.99×560.00 | 96.00 | 532.91 | 48.00 | Pass |

静态几何合成图用于检查完整主体与安全区域，不作为浏览器或字体排版截图。图集检查以外形、动作、场景和裁边为范围；细小鳞片和趾垫内部结构不作为精确解剖图使用。

## 压缩与哈希

使用 npm run convert:webp 转换，并检查解码与尺寸。保留六张 WebP，以下源哈希记录最终临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `84681549514f3a3487b8f2b564a748bcedde2fba5ce872491dbc3cf1e3a9f4bf` | `43dcd52aa088cf0c4bd914faa460aae131d7756f4024218608d80e833b9cdb86` |
| 02 | `6c208cf5f1ad938a57df1e7dd0b764fd0a445171ccad9073b03f26ced862b683` | `079c58502c6041426af81cfc384c8388154d5c97a5decdc8a7a17fb8f0581339` |
| 03 | `d759619a00023670ddca1536b196b503174e98ca0e0e7e64a0d20ae9c0d68f4b` | `38b179f13be41855ece23943742c114b10582a2342848cdf60189bb7cf58d3ae` |
| 04 | `5651e1c5cc5b7e0cd2335afaac08459ad99962a976de1da401f6b98bae043736` | `23534783d3a0a00fa70609829aba58aa7b6db36d22d006e9486484632a877f9d` |
| 05 | `3b30870cca8801e7e72fc3c894de3f3e0e80a15197dd8d6e6206cf722b4d9357` | `2c2c7eadd051e87e172d9945de436be79356ba8a91e6cb6667c4374a4f80b8e9` |
| 06 | `3d973718fdd22c60e4d9a5b727c098b36319d3cc7be846e99725eedd0f6a3566` | `456cd2166914c50408a33875232340301bbe555f2f431761afcc4c24c6a5e04f` |

## 目视记录与边界

六张图均展示红耳亚种。水下取食图允许脚和尾部受植物或画面局部遮挡；封面按完整可见轮廓验收。

已检查临时源图、原始分辨率运行封面、运行图集联系表及六视口静态几何合成图。封面主体与视口、文字区和面板均保持至少 24 CSS px 间距。已核对最终源图与运行文件哈希，清理仓库内的临时 PNG；保留生成工具目录原件。

## 仓库验证

2026-09-14：npm test 全部 453 项通过，其中分类与档案 183 项、轮播 232 项、生产子路径与数据还原 3 项。类型检查和生产构建通过。30 张 WebP 的解码、1536×1024 尺寸与独立哈希通过检查，每种恰好保留六张图片。未启动 GUI 或无头浏览器。
