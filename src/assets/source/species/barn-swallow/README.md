# Barn Swallow image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/barn-swallow/`。提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Animal Diversity Web — 家燕](https://animaldiversity.org/accounts/Hirundo_rustica/)
- [Cornell Lab — 家燕生活史](https://www.allaboutbirds.org/guide/Barn_Swallow/lifehistory)
- [BirdLife DataZone — 全球评估档案](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/7116)
- [BirdLife DataZone — 评估历史](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/7116/history)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。封面包含喙、足与尾端。尾羽长度因个体而异，生成图不用于测量比例。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部运行 WebP。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1172, "top": 358, "right": 1262, "bottom": 420}`。主体中心位于源宽度的 79.2%，左侧 40% 为安静背景，主体四周保留环境。

运行封面 SHA-256：`a93909baf070c9a764c9675255e83a4d2e950b24ed560086d49a9c1de54ce15b`。

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
| 01 | `2312090a8840952333d7a54907de3cd89bca51633c08dd0d575cd25055708c32` | `a93909baf070c9a764c9675255e83a4d2e950b24ed560086d49a9c1de54ce15b` |
| 02 | `db49a04c5b192db78ab97332ace50e8852ab1dcf52e1a0cc959ad00d5e8a629c` | `52cec94fe793efcc7922a29f0ea926f0c9e82e9bd39a5eeb40b43c81525d7c14` |
| 03 | `7eb1bb82b426e3380b5c99f668c759b277e75dea342e52632a14a2904a498900` | `304be62f3717245355f5a6b1944d1df43901f525ac9e007713a172da357daba6` |
| 04 | `9f13a558cd0d97bff58574ab5ea53e3890b145edd747ca5dfa4f348ef22e50e1` | `aebc71080d27281a393ec8caedf0803a33fcbd6350e112390f0bb50dbdfa211c` |
| 05 | `40b1ac8a51312646ce0d6a4cee5543477582867d49f14246ffe199e67d2de7df` | `ebea75ad6932e31b653d82f1e8d92f53eda2abb7c01b8ad8daf723189bda10ba` |
| 06 | `23dafd73c553cbfdafc769d6b0a7197296530bf36e5c520cdcb0d0c745b09f15` | `82cd632148bbdecd800236fef645e298ea15c4b4385b49dfde2a7cc37a96b21d` |

## 验证结果

`npm test` 的 193 项测试全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。
