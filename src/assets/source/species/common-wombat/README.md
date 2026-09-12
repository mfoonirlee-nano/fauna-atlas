# Bare-nosed Wombat image set

2026-09-12 使用内置 image_gen 生成一张封面和五张观察图，均为 1536 × 1024。运行资产保存在 `public/images/species/common-wombat/`。完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Australian Museum — 裸鼻袋熊分类与分布](https://australian.museum/learn/animals/mammals/bare-nosed-wombat/)
- [Australian Museum — 裸鼻袋熊挖洞、食性与育幼](https://australian.museum/learn/animals/mammals/bare-nosed-wombat/)
- [Australian Museum — 裸鼻袋熊全球 IUCN 等级](https://australian.museum/learn/animals/mammals/bare-nosed-wombat/)

访问日期：2026-09-12。Australian Museum 支持裸鼻袋熊的分类、挖洞、夜间取食和全球 LC。84–115 厘米仅为大陆个体头体长，不含尾，不写入全长比较。此物种不与毛鼻袋熊混用保护等级。未核实独立评估日期和全球种群趋势，assessedYear 留空，trend 记为 unknown；不以网页更新日期代替评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：圆鼻子和短腿。
- `03-observation.webp`：前爪拨开泥土。
- `04-observation.webp`：土往身后去。
- `05-observation.webp`：低头吃草。
- `06-observation.webp`：洞口旁的袋熊。

已逐张静态检查生成图中的物种外形、动作与图注。动作前后图为独立生成的姿势示意，不能视为连续实拍；不使用图片证明精确趾数、测量值或捕猎成功。

## 封面验收

按原始分辨率检查临时 PNG 和最终运行 WebP，均为 1536 × 1024。完整可见主体保守目测边界为 `{"left": 1158, "top": 398, "right": 1275, "bottom": 465}`，包括鼻尖、双耳、躯干、可见四肢与足爪、臀部短尾所在的外缘。边界中心位于源宽度的 79.2%，左 40% 保留环境背景，完整主体与源边缘之间有真实背景。focalPoint 为 `{"x": 0.85, "y": 0.33}`。

运行封面 SHA-256：`b106cfc14f2379d4c91d0263b708580af9935f6ddec16ec37156e4d348a5cb70`。

初版位置未通过安全区域间距检查，已用内置 image_gen 调整位置并重新测量。编辑提示保存在 prompts.json 的 coverEdits；边界依据最终画面测量，不使用提示词中的目标坐标代替验收。

封面采用远景，身体细节由观察图展示。遮挡的附肢不补计为可见部分。以下按仓库 CSS 的 object-fit、object-position、动画缩放与平移计算完整主体到视口边缘、文字及控制面板的最小间距，单位为 CSS 像素，所有值至少 24。检查不启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 44.88 | Pass 46.28 | Pass 45.75 | Pass 45.41 | Pass 45.75 | Pass 45.41 |
| 390x760 | Pass 44.88 | Pass 46.28 | Pass 45.75 | Pass 45.41 | Pass 45.75 | Pass 45.41 |
| 1366x768 | Pass 63.54 | Pass 64.25 | Pass 63.98 | Pass 63.81 | Pass 63.98 | Pass 63.81 |
| 1920x900 | Pass 104.15 | Pass 103.92 | Pass 104.00 | Pass 104.06 | Pass 104.00 | Pass 104.06 |
| 2560x900 | Pass 51.20 | Pass 48.85 | Pass 128.25 | Pass 50.32 | Pass 49.73 | Pass 96.15 |
| 3840x900 | Pass 285.30 | Pass 278.71 | Pass 281.18 | Pass 170.03 | Pass 141.38 | Pass 282.83 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 转换并验证解码与尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。运行图通过静态联系表核对画面与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `ec14dcbe6f767a4050a15963b862ef3ae86efba4c61eec448d0d162f90084171` | `b106cfc14f2379d4c91d0263b708580af9935f6ddec16ec37156e4d348a5cb70` |
| 02 | `3a12185c988ba2fcb2df9d77c2e107a99bbcf206727663fbe63b17fab7e8b10a` | `04d6256fba4d6be23160f1b60cf6b2cca854bcb6185c50a3b6f2803db860811f` |
| 03 | `a30a70fdef66c9de45779783105c69cf06eb7aec7b752c13ab5d5b46bf91984a` | `12ba6b03c791e57da9f8429b9c5151e8735dd5057f72cab89a7257cd65833a58` |
| 04 | `27039cdeb8f1d07754a9708c8ba31e0ffd154dde53717993172c9cd1eb480db8` | `f94012741bf88a9de86275ce010cfffc0d1da6490dd6ef5ba2a3be1c6fb9df8c` |
| 05 | `cdbb20edbfe85893fb669954e464fee66d89e727d1dadce63e5cda1468a39922` | `d6c75e11f5ef71a4847a988a143b539a36916149e9ae603541141540455a88a3` |
| 06 | `eaa43d84d72eb93745cd34a2193c1646f6019996d19f47c84e25c127d966a1ff` | `ba4df3c1a5211506e84278ac1d1b95989953bc977b2af9dbd45cff23d08f1864` |

## 仓库验证

2026-09-12 通过类型检查、生产构建及 222 项测试。`npm test` 中前 220 项通过，最后两项子路径测试因沙箱禁止监听 127.0.0.1 而中断；以 `node --test tests/dist-subpath.test.mjs` 在沙箱外重跑，两项通过。未启动 GUI 或无头浏览器。封面回归绑定运行哈希、完整主体边界及全部视口与动画端点。已将本批临时 PNG 移出仓库，只保留 WebP、提示词与验收记录。
