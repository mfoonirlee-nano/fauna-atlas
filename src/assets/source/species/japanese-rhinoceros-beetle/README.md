# Japanese Rhinoceros Beetle image set

2026-09-08 使用内置 imagegen 生成并编辑六张 1536 × 1024 科学情景重建图片。运行资源在 `public/images/species/japanese-rhinoceros-beetle/`，最终生成提示词和编辑提示词见 [prompts.json](./prompts.json)。图片不对应定位野外照片。

## 资料与视觉限制

- [NCBI — 独角仙分类](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=273928&mode=Info)
- [Scientific Reports — 独角仙基因组与角的形成](https://www.nature.com/articles/s41598-023-35246-w)
- [雄性独角仙武器尺寸的力学限制](https://pmc.ncbi.nlm.nih.gov/articles/PMC4046419/)
- [独角仙不同种群角的性能](https://pmc.ncbi.nlm.nih.gov/articles/PMC6835817/)

资料访问日期：2026-09-08。未取得可核实的全球 IUCN 物种评估，按 NE 收录，趋势未知，不填评估年份。NE 不表示没有生存风险。 未核实的体长、体重与寿命数值留空。

03 已修正为两次分叉的头角。其余角部图像受角度与生成细节限制，不用来量测角形或鉴定亚种。05 并列展示幼虫和成虫，不表示成虫照料幼虫。

## 压缩与静态检查

使用仓库 `convert:webp` 脚本，通过 `cwebp -q 82 -m 6 -mt` 压缩为运行 WebP；未使用 TinyPNG。按原始分辨率检查了封面源 PNG 与运行 WebP，并检查图库源图和运行资源。转换脚本验证尺寸与解码；临时源 PNG 验收后删除，只保留本记录中的源哈希。未启动浏览器。

## 封面验收

源与运行图均为 1536 × 1024，focalPoint 为 `{"x": 0.9, "y": 0.35}`。原始分辨率目测保守全主体边界为 `{"left": 1160, "top": 316, "right": 1346, "bottom": 480}`，包含姿态下可见的头、触角、足、翅缘、角及腹末附肢；没有把头部边界当作全身边界。主体中心为源宽度的 81.6%，左侧 40% 留作环境背景，主体与源图边缘之间有真实背景。

运行封面 SHA-256：`1f0f66b4c55d33bcb072be3a26f5b35eb595df35a93846608968bc153a74d85f`。

`tests/hero-carousel.test.mjs` 绑定运行图哈希和完整主体边界。`npm run test:carousel` 已通过，检查下列视口与动画端点，主体距视口边缘、正文及轮播面板至少 24 CSS 像素；本封面最小间距约 33.8 CSS 像素。

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
| 01 | `8264ec661a7852e5f2a4ed95b96f546d48b82fa1e3f11de863ea308dd410e7e8` | `1f0f66b4c55d33bcb072be3a26f5b35eb595df35a93846608968bc153a74d85f` |
| 02 | `6d02b84e536fe680db7b203b90f9ef3467f7dfa4bb7d24dd93c7e38f6f1d2a10` | `07a643bba9198105061a3c83c9810f4d9bf3d98ef5ba71dcbb6352f411460bf0` |
| 03 | `8c91aa7f10a675c21c2846c0be00ce70c3c814fc73bf3bc38cbf7edc04dd41d6` | `3be49a3192c813859fb2f93f8d64cc310b36fce8530403e2118b006a9b73058f` |
| 04 | `8b2eab1398c2391f317678ff359f36c0bf78b3505e38ed74a2f5697aeec25153` | `18e7f3f69f9f5782429831d6062a18d8c939de25198a55294c0ca41b55f9ecdb` |
| 05 | `096b8f58b4d11b6f080408b214ce8e3978bd331e1feaf68f79b29acd860dd74b` | `425c3ca69b7fd5c98f291b2f6060959886c5e0d3825fca87db7782f275295d71` |
| 06 | `510eb577c42c5a396b232e6ec15c895f8d5d186b78c69aea36207281d0fa7c0c` | `37c85c8d05b9d9f5b972cedf9f4b46896d4d45e8ab9a3808ffabe01b5905488b` |

## 验证结果

`npm test` 的 206 项测试全部通过，包含分类归属、运行图片尺寸和哈希、封面裁切、交互逻辑及构建后子路径资源检查。TypeScript 检查与生产构建通过。Vite 提示主代码块超过 500 kB；本次未修改打包结构。
