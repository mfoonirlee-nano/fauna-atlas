# Greater Flamingo image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/greater-flamingo/`。完整提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [IOC World Bird List — 鸊鷉与红鹳分类](https://www.worldbirdnames.org/bow/grebes/)
- [圣迭戈动物园 — 红鹳羽色、滤食与育雏](https://animals.sandiegozoo.org/animals/flamingo/)
- [BirdLife International — 大红鹳全球档案](https://datazone.birdlife.org/species/factsheet/greater-flamingo-phoenicopterus-roseus)
- [IUCN — 2018 年评估的 2019 年修订版](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T22697360A155527405.en)
- [BirdLife DataZone — 公开评估历史数据](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/3769/history)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。羽色、幼鸟绒羽与滤食动作经过重建，不能据图判断年龄或滤片的微观结构。

## 压缩与静态检查

TinyPNG 已压缩六张源 PNG，随后通过仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查生成图、压缩后的封面源 PNG 和全部运行 WebP。压缩会损失细纹；未使用浏览器。

## 封面验收

源图和运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1236, "top": 336, "right": 1292, "bottom": 434}`，包括尾端、足部及喙端等外缘。主体中心位于源宽度的 82.3%，左侧 40% 为安静背景，主体四周保留真实环境。

运行封面 SHA-256：`4d36e7b70bf05c972fcb54caa51fb602ee21c1ba6a34f11431c2f975858a8c85`。

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
| 01 | `bd2bf7e319c05653fe4042f602ef613c60651ccfd011b1ab273b983daf84f7ee` | `4d36e7b70bf05c972fcb54caa51fb602ee21c1ba6a34f11431c2f975858a8c85` |
| 02 | `f8360e6ddb964941758a2830f36a5b615a4ba68b038debeaa6619cd9410a9f87` | `ed66c3a8fb6b3a8f923fcd7b3d84d4b914101db9e1638c597a1e571527ef4831` |
| 03 | `b88123679c8fba24dc1efc981888abb8ad2b82fcd2c9e276fcab15bc7471b7a3` | `d55f7b8547c46c4c197bdb35154fdfeea104ba9853563ac6bcdef2cb6115c3dd` |
| 04 | `8a64c2b92b305850e6626bde0c35517662c449986314054ff0e670e2a3fa3bf0` | `a45fa7a67ecaabf8a1492db62730ce61d3f7e565aa7f8c5c08e742e4e82f940d` |
| 05 | `70827797193cba6ecc1e05c54ca131a7133eca56e1454336cafb18bc3df610b5` | `4e58182ac7a305d37ce89c64b7240b2a17bc66cd65c7ae667f4fe6e9abb22879` |
| 06 | `ada7dd889f1c1262389fd68c001766baac3b1fe3310fafa44e6e25ddd4074637` | `cc7a71860dec80272ec718192984ed69a5ed4318f30f499f20b41b0af61a3789` |

## 验证结果

`npm test` 全部通过，覆盖分类、图片尺寸与哈希、封面完整主体及子路径资源。生产构建与 TypeScript 检查通过。构建提示主代码块超过 500 kB；未启动 GUI 或无头浏览器。
