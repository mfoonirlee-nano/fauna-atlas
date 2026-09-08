# Mandarin Duck image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/mandarin-duck/`。提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [Animal Diversity Web — 鸳鸯](https://animaldiversity.org/accounts/Aix_galericulata/)
- [BirdLife DataZone — 全球评估档案](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/418)
- [BirdLife DataZone — 评估历史](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/418/history)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。封面包含喙、蹼足与尾端。03 对照雌雄；04、05 中的雄鸟仅是场景元素，不能据此推断雄鸟承担孵卵。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部运行 WebP。未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1172, "top": 394, "right": 1266, "bottom": 473}`。主体中心位于源宽度的 79.4%，左侧 40% 为安静背景，主体四周保留环境。

运行封面 SHA-256：`a02217a6ba74ac5de2bd0a072ed28263ec8ea80294d6781d3ee148d4002af8f7`。

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
| 01 | `529e167cf0682cf628687d4b841472e940791e1791c542f522d7509b7b60cf3c` | `a02217a6ba74ac5de2bd0a072ed28263ec8ea80294d6781d3ee148d4002af8f7` |
| 02 | `f625faf76879ccc7899f6f42b1ef6841df0db1984b8b1a59b348ef9619aae830` | `cd6b82fd4dfa63f53e2257dad796fc7b98b860f40616e371800a76a0dc2d9c07` |
| 03 | `d9b004ef38fa9e018103ddef2bc8b017c4b96a58f5d3a542ffeb2a9e719d95ce` | `197b7669e398adfbef27de5139db03ee70ce437682d54562d6ac4363dc0ee41a` |
| 04 | `5b24d7b928ab07c1d8ede4f0415d97cd2369726a0f641c1ff77f3d6a77f5cae5` | `2871d39168b982e76870b34f0e1355975ca972a3cbff223d60a5e4f621044929` |
| 05 | `58ce7160c9db93159c22145cddcc558bd691698784ce2d56c08cc2a6b62871e9` | `aded8f4d51a199d4e2db39cb5995ee2aa5bad5adf69eea84d2a7e1f82e1cfdbc` |
| 06 | `5cae031729bec68c17f91439ad4b6546dcc2a1472331bd0ad0458815a1f085f5` | `0de0497705fb3d3875071a5fdfb8d2a9d5c42ec6a65aba4db42244a4b57345ee` |

## 验证结果

`npm test` 的 193 项测试全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。
