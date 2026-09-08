# Common Hippopotamus image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/hippopotamus/`。

## 提示词与资料

初始生成、封面编辑和最终采用版本见 [prompts.json](./prompts.json)。资料访问日期：2026-09-08。

- [Mammal Diversity Database — 河马分类](https://www.mammaldiversity.org/taxon/1006390/)
- [圣迭戈动物园 — 河马的水下生活与取食](https://animals.sandiegozoo.org/animals/hippo)
- [Animal Diversity Web — 河马形态、分布与皮肤](https://animaldiversity.org/accounts/Hippopotamus_amphibius/)
- [IUCN — 河马全球评估](https://www.iucnredlist.org/species/10103/18567364)
- [CITES — 河马种群评估与贸易资料审议](https://cites.org/sites/default/files/documents/E-CoP19-89-01_0.pdf)

本页采用 Mammal Diversity Database 分类。全球 VU、稳定趋势对应 2016 年评估、2017 年发表的红色名录记录，CITES 文件核对了时间与地域差异。3.3—5 米体长换算为 330—500 厘米；屏息时间没有转换为潜深。

## 视觉限制

封面使用远处沙岸上的完整侧姿，嘴、耳、足和尾端全部纳入边界，远侧腿有自然重叠。04 用较清澈水体表现触底步态，透明度、足部姿态与尘沙为情景简化。03 展示浮出呼吸，没有量测换气间隔。06 的个体数不代表实际种群密度。 全部图片标注 AI 生成科学情景重建，不对应定位野外照片。压缩会损失细纹与暗部渐变。

## 压缩与静态检查

TinyPNG 已压缩全部六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP，确认完整轮廓与图集场景；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.35}`。原始分辨率目测的保守全主体边界为 `{"left": 1140, "top": 372, "right": 1294, "bottom": 440}`，包括全部可见外缘附肢与尾端。主体中心位于源宽度的 79.2%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`56e93675c7dc76de596f9820289aac31f1c71fe2d81606438eb7670b3a6c78a7`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界。`npm run test:carousel` 验证完整主体与视口边缘、正文和轮播面板保持至少 24 CSS 像素间距，结果如下。

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
| 01 | `2a7cda70faf2d5aa9706d03512b9def2a4064f77a9f051a23ee9e6bb11c19c60` | `56e93675c7dc76de596f9820289aac31f1c71fe2d81606438eb7670b3a6c78a7` |
| 02 | `9478eb37826897593c53871e73aab19111f6ca6160151c2b27324e2d2a1e6642` | `5ecab16cba63a43c0abea2a46e881a14cda4e8c4886b12f5732bfdae9993076b` |
| 03 | `cd9b56b7030793ce5e56d8d55978fb2c4813fba5f42ab94ba8a0c5519679c8f2` | `d60f296f2c5e80207dc419d0f946038f3445121fd5047bd84182e785516e7c63` |
| 04 | `9fb38d6a7405d2e3dc884e07c12c1d8fdd9fc4be068d68560e2c3900e6cd437e` | `2483084e9761bac41cd8d0856d85b624248489d12125ca2d0e90afd27e55b639` |
| 05 | `6a608285396d4556f40e2dc754e108dd859b32f81368660a21acaca92355bd97` | `de233c2b4b15fcd3fd7699f47b43e279f471a353f466e5eb525448d9f9680890` |
| 06 | `e81941ace5b097af4c7f12bdf1e7acaefa837b13744a084b6e9fc9d80a719726` | `300b0cbd85a5eef157402aea2d4bb381b6f3fab478b790d85af685f5d044faad` |

## 验证结果

`npm test` 全部 182 项通过，覆盖分类计数、三个新分类分支、18 张图片及其源文件的尺寸和哈希、封面完整主体与子路径资源。生产构建与 TypeScript 检查通过。构建仍提示现有主代码块超过 500 kB；未启动 GUI 或无头浏览器。
