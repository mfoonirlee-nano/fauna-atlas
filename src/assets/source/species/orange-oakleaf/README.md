# Orange Oakleaf image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 科学情景重建图片。运行资源在 `public/images/species/orange-oakleaf/`，最终生成提示词和编辑提示词见 [prompts.json](./prompts.json)。图片不对应定位野外照片。

## 资料与视觉限制

- [NCBI — 枯叶蛱蝶分类](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=311037&lin=f&lvl=3&mode=Info)
- [Butterflies of India — 枯叶蛱蝶与寄主记录](https://www.ifoundbutterflies.org/node/3302)
- [枯叶伪装的捕食实验](https://pubmed.ncbi.nlm.nih.gov/39382079/)
- [枯叶蛱蝶成虫的取食行为实验](https://pmc.ncbi.nlm.nih.gov/articles/PMC3740915/)

资料访问日期：2026-09-08。未取得可核实的全球 IUCN 物种评估，按 NE 收录，趋势未知，不填评估年份。NE 不表示没有生存风险。 未核实的体长、体重与寿命数值留空。

封面缩小主体以避开手机轮播面板。05 展示成蝶吸食果汁，而非幼虫；图注与成图一致。翅腹面的个体花纹仅作情景重建。

## 压缩与静态检查

使用仓库 `convert:webp` 脚本，通过 `cwebp -q 82 -m 6 -mt` 压缩为运行 WebP；未使用 TinyPNG。按原始分辨率检查了封面源 PNG 与运行 WebP，并检查图库源图和运行资源。转换脚本验证尺寸与解码；临时源 PNG 验收后删除，只保留本记录中的源哈希。未启动浏览器。

## 封面验收

源与运行图均为 1536 × 1024，focalPoint 为 `{"x": 0.86, "y": 0.28}`。原始分辨率目测保守全主体边界为 `{"left": 1163, "top": 347, "right": 1264, "bottom": 431}`，包含姿态下可见的头、触角、足、翅缘、角及腹末附肢；没有把头部边界当作全身边界。主体中心为源宽度的 79.0%，左侧 40% 留作环境背景，主体与源图边缘之间有真实背景。

运行封面 SHA-256：`aa7325ce319110d80ee24a88fa6ff6bf7b850b97987bb29321aeee7170ac5b92`。

`tests/hero-carousel.test.mjs` 绑定运行图哈希和完整主体边界。`npm run test:carousel` 已通过，检查下列视口与动画端点，主体距视口边缘、正文及轮播面板至少 24 CSS 像素；本封面最小间距约 64.6 CSS 像素。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 390 × 760 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1366 × 768 | Pass | Pass | Pass | Pass | Pass | Pass |
| 1920 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 2560 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |
| 3840 × 900 | Pass | Pass | Pass | Pass | Pass | Pass |

## Accepted hashes

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `598084f9c6eba07c5eab51ba26600c4ebbcf3f4a20f49199260942c24ebc0ecf` | `aa7325ce319110d80ee24a88fa6ff6bf7b850b97987bb29321aeee7170ac5b92` |
| 02 | `ad51cef3f1136591d2c1154192b45c6f7bc3316be3574059991aa25f8e5d810a` | `393a148dc9269f4c17dccc15c7ece04c5da70239d207c3856b61fe32150460e9` |
| 03 | `07b8e07236e1f1675f4b359e1a622a8df0d0bae3fb79e910c9cc200c406061de` | `d094e813486d8257100538e4212c183ce205be747f7ac112b630084694c11843` |
| 04 | `400913dafa62b56808232c44164a03528d76aa339d71c938ed0290b56c875cee` | `8868396b5ae351be66973edde4d2320fd019eba1f2fb99df195ca0415241c908` |
| 05 | `0adceb5ed1ab2931b1f9ca12e21928ebd1629fbb960528737270293817269730` | `ffb9855e31464da69c3c4509550dfca63d4df957690204bdc4a9665eebb08d28` |
| 06 | `8167ef8ddf0aed5bfb966f9442f09ed274d0429dc2ccff8b18505d89e05fab04` | `6c8e90e381b1da8478fd37be7ca8028ac20706be3a4bee1d2bbd0fd4fc758847` |

## 验证结果

`npm test` 的 206 项测试全部通过，包含分类归属、运行图片尺寸和哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 提示主代码块超过 500 kB；本次未修改打包结构。
