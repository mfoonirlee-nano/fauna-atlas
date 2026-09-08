# Two-spotted Cricket image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 科学情景重建图片。运行资源在 `public/images/species/two-spotted-cricket/`，最终生成提示词和编辑提示词见 [prompts.json](./prompts.json)。图片不对应定位野外照片。

## 资料与视觉限制

- [Orthoptera Species File — 双斑蟋蟀](https://orthoptera.speciesfile.org/otus/829311)
- [Journal of Insect Physiology — 前翅运动与鸣声](https://www.sciencedirect.com/science/article/pii/S0022191021001098)
- [双斑蟋蟀鼓膜器官研究](https://pubmed.ncbi.nlm.nih.gov/30828748/)
- [Nature Communications — 蟋蟀翅的发育](https://www.nature.com/articles/s41467-022-28624-x)
- [IUCN — 欧洲直翅目红色名录](https://portals.iucn.org/library/sites/library/files/documents/rl-4-021.pdf)

资料访问日期：2026-09-08。IUCN 欧洲区域评估为 LC，标签标注欧洲；未核实独立评估日期，不以 2016 出版年代替评估年，也不作为全球评估。 未核实的体长、体重与寿命数值留空。

封面重新生成并缩小主体，以保留两根触角。02 和 03 为近景，部分触角越出图片边缘；不将其作为封面。03 未显示可用于解剖识别的鼓膜细节。05 并列展示成虫与若虫，不表示亲子照料。

## 压缩与静态检查

使用仓库 `convert:webp` 脚本，通过 `cwebp -q 82 -m 6 -mt` 压缩为运行 WebP；未使用 TinyPNG。按原始分辨率检查了封面源 PNG 与运行 WebP，并检查图库源图和运行资源。转换脚本验证尺寸与解码；临时源 PNG 验收后删除，只保留本记录中的源哈希。未启动浏览器。

## 封面验收

源与运行图均为 1536 × 1024，focalPoint 为 `{"x": 0.81, "y": 0.23}`。原始分辨率目测保守全主体边界为 `{"left": 1133, "top": 314, "right": 1246, "bottom": 422}`，包含姿态下可见的头、触角、足、翅缘、角及腹末附肢；没有把头部边界当作全身边界。主体中心为源宽度的 77.4%，左侧 40% 留作环境背景，主体与源图边缘之间有真实背景。

运行封面 SHA-256：`eef1c4bc8ca08e6d4fe7d4cd4cfffd2ce7bc56bf43d2b4d036d11c8d30920de8`。

`tests/hero-carousel.test.mjs` 绑定运行图哈希和完整主体边界。`npm run test:carousel` 已通过，检查下列视口与动画端点，主体距视口边缘、正文及轮播面板至少 24 CSS 像素；本封面最小间距约 39.2 CSS 像素。

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
| 01 | `54b4d2c2914f86698bbb99e4102151d8ff3cb05b4d3a4d83dbf9e177ca279545` | `eef1c4bc8ca08e6d4fe7d4cd4cfffd2ce7bc56bf43d2b4d036d11c8d30920de8` |
| 02 | `7409fba20e26a0daaa9f510ccda58f3d7b530f1979d25a572118c188d54f3c5c` | `77fef499b78bf3e3285043c3f6f320d1aad76681679421fab21a739581150c8a` |
| 03 | `393ba45beba992f621c586ff5416e8d2fc089a8ca74da22f2169ebaf249c0ebb` | `e6dfc551326562f8520525c79aab2d8be724408665c26ab77caa5a0afe547181` |
| 04 | `8b5518e330225ba6b19c6319fc1b240d590ff9d5710dff805a9dfc3ca71d6773` | `8021d510d31969f1b0534f5675c693d9605d7f36c3c51bd96b500cd159a6ae47` |
| 05 | `8d1d6a7f6a7c8642f215645da41af6d548a382ed62aa179489643fdced6592db` | `e8d2a5beaebc5717285d2e54afbb26803a3635641db7076e2b15bbc8a024d71e` |
| 06 | `15bfed8251d9ee00ec47689a448df553ed0b8f417b248669b2c299c3838747a4` | `dcd1770785f9617683310ee323ec407057cb391aeaf4f15a368f76a52fea3c02` |

## 验证结果

`npm test` 的 206 项测试全部通过，包含分类归属、运行图片尺寸和哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 提示主代码块超过 500 kB；本次未修改打包结构。
