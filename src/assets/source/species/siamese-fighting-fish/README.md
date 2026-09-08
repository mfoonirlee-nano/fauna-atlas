# Siamese Fighting Fish image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/siamese-fighting-fish/`。最终提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [ADW — 暹罗斗鱼行为与繁殖](https://animaldiversity.org/accounts/Betta_splendens/)
- [FishBase — IUCN 全球评估记录](https://fishbase.se/country/CountrySpeciesSummary.php?c_code=418&genusname=Betta&speciesname=splendens)
- [ETYFish — 攀鲈目分类](https://etyfish.org/anabantiformes/)
- [University of Florida IFAS — 迷鳃器与泡巢](https://ask.ifas.ufl.edu/publication/FA212)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。采用野生型短鳍外形，不能根据生成图鉴定近缘斗鱼或排除杂交。05 成图包含左侧雌鱼与右侧雄鱼，图注按成图修订，不表示长期配对。03 仅展示水面吞气，未绘制内部迷鳃器；04 的泡巢不证明已有受精卵。分类采用攀鲈目口径，不沿用 ADW 的旧鲈形目位置。

## 压缩与静态检查

六张最终源 PNG 均已通过 TinyPNG 压缩，再用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部最终运行 WebP。未使用浏览器。

## 封面验收

源图与运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.9, "y": 0.42}`。原始分辨率目测的保守全主体边界为 `{"left": 1075, "top": 347, "right": 1268, "bottom": 482}`，包括姿态下可见的吻端、冠突、足部、鱼鳍及完整尾尖。主体中心在源宽度的 76.3%，左侧 40% 留作背景，主体四周留有环境。

运行封面 SHA-256：`40132e9164cef77ccb35e30ef08905240c8bbc01a80d1f84e9e3b3c0701c52ce`。

`tests/hero-carousel.test.mjs` 绑定上述哈希与完整主体边界。`npm run test:carousel` 已通过，检查主体与视口边缘、正文及轮播面板至少 24 CSS 像素的间距。

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
| 01 | `29d49fa696d5098879db95057e30214e4694cc146b84133adb7e2c45213cbc3b` | `40132e9164cef77ccb35e30ef08905240c8bbc01a80d1f84e9e3b3c0701c52ce` |
| 02 | `331ca42e11c3b4b19bc470b302d4896fafc5e8e450fcf310bfd3aad5ac7ad2a1` | `4c2fc478e15519471f2aa717fd1e72c686cfc1cbf93455d14c152e6d68e2c2e1` |
| 03 | `b231af8d245006376dd3fb70ad069c414e462aa0aebde842f05e0e04369498b0` | `94387ab64f94f87ea0d1dcde37666ae96c8c75a4d2e7582ca1e93e92dd560b98` |
| 04 | `88b47424bd7acf0ead2524eaf715a6209818c23397fb668b61ad7cd5e488b8d3` | `a97cbe1a9c940ed241c02294779a6cb76843e4de3713ca157972362e17e80546` |
| 05 | `a2eda7f48c22794e700f774daada47ae9e6857bce28b27d20ca7b5b423157be0` | `13e427413f3497656340fade27a0012b58746d8830e1f8f20b7a6c1e59c7e876` |
| 06 | `81cebb014bcd133e8297b632d0f1b9ac2ffb356bea6eb2ff42344a6dcd359704` | `387362d4ae49c2a0a1fd168b893665b8c5eedbb10708bee5675ef9618ed9805b` |

## 验证结果

`npm test` 的 199 项测试全部通过，包含新增物种分类归属、PNG/WebP 尺寸与哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 仍提示主代码块超过 500 kB；本次未调整打包结构，未启动浏览器。
