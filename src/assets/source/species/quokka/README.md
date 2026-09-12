# Quokka image set

2026-09-12 使用内置 image_gen 生成一张封面和五张观察图，均为 1536 × 1024。运行资产保存在 `public/images/species/quokka/`。完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [ASM Mammal Diversity Database — 短尾矮袋鼠分类](https://www.mammaldiversity.org/taxon/1000310/)
- [Australian Museum — 短尾矮袋鼠生活与分布](https://australian.museum/learn/animals/mammals/quokka/)
- [Australian Museum — 短尾矮袋鼠全球 IUCN 等级](https://australian.museum/learn/animals/mammals/quokka/)
- [Perth Zoo — 短尾矮袋鼠食性与栖地](https://perthzoo.wa.gov.au/data/animals/quokka)

访问日期：2026-09-12。Australian Museum 与 Perth Zoo 支持野生西澳范围、夜间活动、跳跃、植物食性及全球 VU；ASM 支持属科归属。40–54 厘米为不含尾的身体长度，不写入全长比较。嘴角形状不作为情绪证据。未核实独立评估日期和全球种群趋势，assessedYear 留空，trend 记为 unknown；不以网页更新日期代替评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：大后脚和小前爪。
- `03-observation.webp`：弯下腿准备跳。
- `04-observation.webp`：后脚一起离地。
- `05-observation.webp`：伸嘴吃叶子。
- `06-observation.webp`：灌丛旁休息。

已逐张静态检查生成图中的物种外形、动作与图注。动作前后图为独立生成的姿势示意，不能视为连续实拍；不使用图片证明精确趾数、测量值或捕猎成功。

## 封面验收

按原始分辨率检查临时 PNG 和最终运行 WebP，均为 1536 × 1024。完整可见主体保守目测边界为 `{"left": 1116, "top": 347, "right": 1238, "bottom": 444}`，包括耳尖、鼻尖与胡须、躯干、前爪、大后脚、完整尾巴。边界中心位于源宽度的 76.6%，左 40% 保留环境背景，完整主体与源边缘之间有真实背景。focalPoint 为 `{"x": 0.83, "y": 0.37}`。

运行封面 SHA-256：`95c64650fa2d44ab25777d7749d7a5f143106ff562dc87da8ea72096a2c6d2b9`。

封面采用远景，身体细节由观察图展示。遮挡的附肢不补计为可见部分。以下按仓库 CSS 的 object-fit、object-position、动画缩放与平移计算完整主体到视口边缘、文字及控制面板的最小间距，单位为 CSS 像素，所有值至少 24。检查不启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 60.47 | Pass 62.49 | Pass 61.73 | Pass 61.23 | Pass 61.73 | Pass 61.23 |
| 390x760 | Pass 60.47 | Pass 62.49 | Pass 61.73 | Pass 61.23 | Pass 61.73 | Pass 61.23 |
| 1366x768 | Pass 87.93 | Pass 89.60 | Pass 88.98 | Pass 88.56 | Pass 88.98 | Pass 88.56 |
| 1920x900 | Pass 145.60 | Pass 147.02 | Pass 146.49 | Pass 146.13 | Pass 146.49 | Pass 146.13 |
| 2560x900 | Pass 118.47 | Pass 118.81 | Pass 118.68 | Pass 118.59 | Pass 118.68 | Pass 118.59 |
| 3840x900 | Pass 204.00 | Pass 238.80 | Pass 248.38 | Pass 63.51 | Pass 63.06 | Pass 250.35 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 转换并验证解码与尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。运行图通过静态联系表核对画面与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `15540d88b7104c0cd38d54aba8b5b1c553f41efe82dd89064dc4ca1203d4e1df` | `95c64650fa2d44ab25777d7749d7a5f143106ff562dc87da8ea72096a2c6d2b9` |
| 02 | `b8b5d7b9021cb6d15988d571e318a71f11aa44bae65cabf369a6259a866787a1` | `4fa0852013c6e749743f44733195d8a4fd07f69a1c919b445ad94ab73b37aafc` |
| 03 | `c0536e91d48902a3c143eea059b265e660343397833ffc14c6712dcd5cf73fa5` | `5792b6e30d43f6fe1bb5d3961bcb33625c1dba857cbd568434205576fa1f443e` |
| 04 | `47fc6cec2ee1391554e03a5b5b4496575fc95d31ecd76596d8bf7632e9b81227` | `8c44a8cd301fd68d08fe2860b2739fba89eff09374cee137ae71b75a2e60ea00` |
| 05 | `0474a1eff0361429541ccb0232af4a6474e14d25c2760c5da17292bf8d961872` | `85863947f458205d444e4df7c11ee693a129c609ea2f3b1ed1166c9e9a431bf6` |
| 06 | `4b937153a2d935bca5a590e14e06a9aed0735a451c64873e009c0d3372787f91` | `3407713e3d0bd461bae55f086e97b5a41088eb189ac1d2bec4365953935153ce` |

## 仓库验证

2026-09-12 通过类型检查、生产构建及 222 项测试。`npm test` 中前 220 项通过，最后两项子路径测试因沙箱禁止监听 127.0.0.1 而中断；以 `node --test tests/dist-subpath.test.mjs` 在沙箱外重跑，两项通过。未启动 GUI 或无头浏览器。封面回归绑定运行哈希、完整主体边界及全部视口与动画端点。已将本批临时 PNG 移出仓库，只保留 WebP、提示词与验收记录。

## 2026-09-12 regenerated cover

Retained the regenerated `01-cover.webp` and the five existing gallery images. The image set contains six WebPs. Final prompt and source hash: [cover-regeneration.json](./cover-regeneration.json).

Runtime SHA-256: `16e397dee01abe7fc9b996e4663d377b0f8bb10493b217476a0572790d37913d`. Source and runtime dimensions: 1536×1024. Reviewed full-subject bounds (left, top, right, bottom): `[830, 115, 1510, 925]`. Original-resolution source and runtime inspection completed before temporary PNG archival.

The user removed the separate responsive hero images. Their previous six-viewport acceptance is withdrawn. The carousel now uses this same main cover; full-body crop acceptance in the existing carousel remains pending.
