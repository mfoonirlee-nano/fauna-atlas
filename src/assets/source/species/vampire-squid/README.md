# Vampire Squid image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片，无 CLI 回退。源 PNG 在本目录，运行 WebP 在 `public/images/species/vampire-squid/`。

## 提示词与来源

初始生成和尝试的编辑提示词见 [prompts.json](./prompts.json)，最终接受的重新生成或编辑提示词见 [final-edits.json](./final-edits.json)。幽灵蛸封面最终采用重新生成版本；箱水母封面采用初版缩小主体后的版本。

- [OBIS — 幽灵蛸分类归属](https://obis.org/taxon/141887)
- [MBARI — 幽灵蛸外形、低氧生境与防御](https://www.mbari.org/animal/vampire-squid/)
- [Hoving 与 Robison 2012 — 氧最小带中的碎屑取食](https://doi.org/10.1098/rspb.2012.1357)
- [MBARI — 水下与活体取食观察](https://www.mbari.org/news/mbari-researchers-discover-what-vampire-squids-eat-its-not-what-you-think/)
- [WoRMS — 幽灵蛸接受名与异名](https://www.marinespecies.org/aphia.php?p=taxdetails&id=141887)

资料访问日期：2026-09-08。分类目名沿用 OBIS/WoRMS 的 Vampyromorpha。典型观察深度不是最大潜深。未取得可引用的全球 IUCN 评估，暂列 NE，趋势未知；未将地区评估写成全球等级。

## 视觉限制

封面为紧凑侧姿，腕间膜折叠，不能用于计数腕或诊断物种；图集近景补充结构。取食细丝的长度、海雪尺寸和密度经过简化；防御图的柔软突起不代表硬刺。发光黏液的亮度与云团形状为示意。 生境图不对应地理定位照片。全部图片标注 AI 生成科学情景重建。压缩后暗部渐变与细纹有所损失，图像不用于测量。

## 压缩与静态检查

TinyPNG 已压缩全部六张最终源 PNG，随后使用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无本地调色板回退。已按原始分辨率检查生成图、最终封面源 PNG 与全部运行 WebP；未使用浏览器。

## 封面验收

源图尺寸 1536 × 1024，运行图尺寸相同，focalPoint 为 `{"x": 0.88, "y": 0.35}`。原始分辨率目测的保守全主体边界为 `{"left": 1055, "top": 314, "right": 1295, "bottom": 433}`，包含鳍尖、腕尖或全部可见触手末端。主体中心位于源宽度的 76.5%，左侧 40% 为安静水体，主体四周留有真实背景。

运行封面 SHA-256：`1bca74b8338918adc7dd20bf95e44b25ae4fb5aa0ab0bc055c682ace44692658`。

`tests/hero-carousel.test.mjs` 绑定上述哈希和边界，使用现有 CSS 动画端点及页面安全区验证。`npm run test:carousel` 已通过，完整主体与视口边缘、左侧正文和轮播面板均保持至少 24 CSS 像素间距。

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
| 01 | `4baf7a8cc58d18a85c60dd346b37a7219356cb750c4d6daaafe76bf0f30e026c` | `1bca74b8338918adc7dd20bf95e44b25ae4fb5aa0ab0bc055c682ace44692658` |
| 02 | `2206b95b06d287c919700498ebb85ce324dae169f85e069eb39275755727a658` | `fea8c8b2c0aca3d4b24812f2fdd508305a2d5cbb60ad21433f5250e9dea16228` |
| 03 | `121676e2943fbb4c8fad839af402c2e36effd4740ed2ff9ce8b5745cc7fa2bd2` | `db13f0da4cdcd1ce6298ad42885a64891ffcb05adadc93ce8bcce2b9e69dfdc9` |
| 04 | `2363876280428fd4eca513b4c8e0a789ecb06089a4aa6b25a7e4bd4f25b8eab4` | `d1321a4c46ee71ef988eb941143e195b82b951219b4c7aa13e86bf8cc0a06954` |
| 05 | `4e2d2e57cc033bdc9e4061cd15e4835eaa48f5df8526ab96e373c5d56e968f79` | `a3130ba4435a10156b6bb3ec95c6e739f2c212849ef7b4e53f179272df9887de` |
| 06 | `6a463c69cb966b4d2725e4c0fce3cd959e5efab903e99d8ada831ba02935adeb` | `ca1ab2224fc17cafdc0558005c94c7fe9caff33a14b2f6d08314b1ddd38f7cf2` |

## 验证结果

`npm test` 全部 179 项通过，包含新增分类归属、图片尺寸与哈希、轮播完整主体和子路径资源检查。`npm run typecheck` 与生产构建通过。生产构建仍提示现有主代码块超过 500 kB。未启动 GUI 或无头浏览器。
