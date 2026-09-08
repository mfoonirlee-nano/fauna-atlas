# Budgerigar image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/budgerigar/`。完整提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [IOC World Bird List — 鹦鹉分类](https://www.worldbirdnames.org/bow/parrots/)
- [澳大利亚博物馆 — 虎皮鹦鹉](https://australian.museum/learn/animals/birds/budgerigar/)
- [研究 — 虎皮鹦鹉把习得人声加入鸣唱](https://pubmed.ncbi.nlm.nih.gov/40024383/)
- [研究 — 联络叫声与鸣唱的学习](https://pmc.ncbi.nlm.nih.gov/articles/PMC3087398/)
- [BirdLife International — 虎皮鹦鹉全球档案](https://datazone.birdlife.org/species/factsheet/budgerigar-melopsittacus-undulatus)
- [BirdLife DataZone — 公开评估历史数据](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/1489/history)

分类交叉核对：[ITIS Melopsittacus](https://itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=177596)，归入 Psittaculidae。

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。鸣叫与取食图采用近景裁切，部分尾端接近画面边缘；图像不能证明个体会模仿人声。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP。压缩会损失细纹；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1216, "top": 302, "right": 1297, "bottom": 453}`，包括尾端、足部及喙端等外缘。主体中心位于源宽度的 81.8%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`60a0c527e5cefb24e0fbab50d5fe12c50f47cccfaff28da1b002f5897ff1677e`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界。`npm run test:carousel` 已验证完整主体与视口边缘、正文和轮播面板保持至少 24 CSS 像素间距。

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
| 01 | `60b719a6844337ee8fed28b81940d205b580a241eb387c0c9c6109fd4a3575ae` | `60a0c527e5cefb24e0fbab50d5fe12c50f47cccfaff28da1b002f5897ff1677e` |
| 02 | `de761d10750c84299a45bcc9d4dbb6286465148a442f522e89e5c2727a7922ce` | `517aefbec626709ec7db4f9fd521c72ad4357106d3860761e60c59ec8c2f6a94` |
| 03 | `f920c22bfee48f0730c8577f8dbf4d8aee16fb360bb9e926493fe558a5851c65` | `8e9a4980836b57f03e7771f192b1ce6a6e9f06726de2a149cbf2fae1e641b3ba` |
| 04 | `cce2d58d48baf1c660adca5de7f0625d1ace882ca4169dafdecc5dbf8bc4482d` | `d68843076c8c82f79a021276e52dbb1e498355766f721c649f8178729f7c9d97` |
| 05 | `4d760f4f1fa7fc0ee085b2b78b747bf98f18dd99df72a5c113fbf97eab793b74` | `0d34fdc6509ef0e6d88e33503ff53005e08ea5889b8a6f3ad8ed96668996e5ba` |
| 06 | `92f2e8d4bc2331be001b092e093ff6b76219cd5e4b2012e5275c4c8ece0dbbdd` | `a3e8e2fa68818e67423fe795b50b0657b1221dbc8daeef9db511eeda30ff3fb4` |

## 验证结果

`npm test` 全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。
