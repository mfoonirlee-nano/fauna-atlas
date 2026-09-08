# Oriental Fire-bellied Toad image set

2026-09-08 使用内置 imagegen 生成六张 1536 × 1024 图片。源 PNG 在本目录，运行 WebP 在 `public/images/species/oriental-fire-bellied-toad/`。最终提示词见 [prompts.json](./prompts.json)。

## 资料与视觉限制

- [ADW — 东方铃蟾生活史](https://animaldiversity.org/accounts/Bombina_orientalis/)
- [AMNH — 分类与分布](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Bombinatoridae/Bombina/Bombina-orientalis)
- [Seneca Park Zoo — 东方铃蟾](https://senecaparkzoo.org/fire-bellied-toad/)

资料访问日期：2026-09-08。全部图片标注 AI 生成科学情景重建，不对应定位野外照片。03 已重做为伏地拱背、前肢遮眼的铃蟾反射，05 已重做为尚未长腿的蝌蚪。蝌蚪外形不作为近缘种鉴定依据；03 的姿态也不表示所有个体受到威胁时都会采用同样角度。分布采用 AMNH，未采用 ADW 中泰国及日本的旧范围。

## 压缩与静态检查

六张最终源 PNG 均已通过 TinyPNG 压缩，再用仓库脚本 `cwebp -q 82 -m 6 -mt` 转为 WebP，无调色板回退。已按原始分辨率检查压缩后的封面源 PNG 和全部最终运行 WebP。未使用浏览器。

## 封面验收

源图与运行图均为 1536 × 1024。focalPoint 为 `{"x": 0.95, "y": 0.4}`。原始分辨率目测的保守全主体边界为 `{"left": 1151, "top": 337, "right": 1265, "bottom": 412}`，包括姿态下可见的吻端、冠突、足部、鱼鳍及完整尾尖。主体中心在源宽度的 78.6%，左侧 40% 留作背景，主体四周留有环境。

运行封面 SHA-256：`0b679936cd106e12f96a4f1b068f8ebf6e42db7af349102c076febe02ede6255`。

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
| 01 | `82b9a759b8c9c34cad891050395e0f30ed502507b26b7253a38303a8d0dba86a` | `0b679936cd106e12f96a4f1b068f8ebf6e42db7af349102c076febe02ede6255` |
| 02 | `ef13786575f71b9af406aa122ee49f1f1ef2e628755c143a5e968ae86eee5df0` | `b3bce69436a492f66120635005e52c2db04a8b71ecef8aad7d4fbfe56dff8b80` |
| 03 | `63799f73099fc8a1e0b5256ed13ce99cd26b3d58458478f9113190567566bf67` | `cd2f2d9f7bc472f51082ca6da85c1aa1b06376544bbb944e0adc3c47406c1c3f` |
| 04 | `4283e70d8632c1227a3663b1f1f55c0a2f4205d4ffc0b96cc561f865ba16c1c9` | `75d6ece8c9c30ffbf2ed2e3ea311303d9fd0db9047cd6a7e2263b3dbbaa4e939` |
| 05 | `a17b60704bc41f8c31c75dd0c73faa63c9bb33e57db5abb8416a91123f4527f1` | `b9fc94ad2e5ae5dec3382fd781ffd1f933c5675660ed691425525ee8c97d4674` |
| 06 | `c83e1cd33175179dd283fa06add676341992ed4f50b75160dc8626550f34858b` | `d7d12060a38d22d4cc20d43399026577003e3663e118e6c701d93f2dc9b4f736` |

## 评估日期范围

已核对资料中的全球 IUCN 类别，未核实独立评估日期，故 `assessedYear` 留空。高冠变色龙 DOI 中的 2012 年是发布年份，不据此填写评估年份；东方铃蟾与大白鲨采用动物园、博物馆引用的类别。种群趋势未核实，保持 `unknown`。

## 验证结果

`npm test` 的 199 项测试全部通过，包含新增物种分类归属、PNG/WebP 尺寸与哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 仍提示主代码块超过 500 kB；本次未调整打包结构，未启动浏览器。
