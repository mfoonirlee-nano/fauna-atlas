# Malayan Tapir image set

2026-09-10 使用内置 image_gen 生成六张 1536 × 1024 图片。最终运行资产保存在 `public/images/species/malayan-tapir/`，完整提示见 [prompts.json](./prompts.json)。这些图片是 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Animal Diversity Web — 马来貘分类与形态](https://animaldiversity.org/accounts/Tapirus_indicus/)
- [San Diego Zoo — 貘的鼻子、幼崽和生活](https://animals.sandiegozoo.org/animals/tapir)
- [IUCN SSC Tapir Specialist Group — Tapir Tracks 马来貘范围与保护](https://tapirs.org/wp-content/uploads/2018/06/TAPIR-TRACKS-A-Curriculum-Guide-for-Educators.pdf)
- [Animal Diversity Web — 马来貘全球 IUCN 等级](https://animaldiversity.org/accounts/Tapirus_indicus/#conservation)

访问日期：2026-09-10。ADW 支持奇蹄目、貘科、貘属、成体鞍斑、幼崽条纹、短鼻取食与全球 EN。分布采用 IUCN SSC Tapir Specialist Group 的马来半岛、泰国、缅甸与苏门答腊范围，不沿用旧 ADW 文中的越南、柬埔寨。体重采用 ADW 的 250–540 千克范围；未明确测量端点的体长不写成可比较的全长。未核实评估日期和全球趋势，保留空值与 unknown。

## 图集

- `01-cover.webp`：环境封面。
- `02-observation.webp`：身上的白色鞍斑。
- `03-observation.webp`：会弯的短鼻子。
- `04-observation.webp`：幼崽的条纹。
- `05-observation.webp`：水边走一走。
- `06-observation.webp`：沿着树林找食物。

## 封面验收

源图与运行 WebP 均为 1536 × 1024。完整可见主体的保守目测边界为 `{"left": 1078, "top": 328, "right": 1248, "bottom": 426}`，包括短鼻、双耳、躯干、可见四肢与蹄端、尾端。边界中心位于源宽度的 75.7%，左 40% 为环境背景，动物与源图边缘之间保留背景。focalPoint 为 `{"x": 0.83, "y": 0.34}`。

运行封面 SHA-256：`accaddb648d8479cae8cfe65e62d04d34188e48a03ed0a775d3cd5cc4a8e96a8`。

已按原始分辨率静态检查源封面与最终 WebP。封面采用环境远景，外形细节由详情图集呈现。图中遮挡的附肢不补计为可见部分，也不把生成图用于计量、精确趾数或精细解剖证明。

下表按当前 CSS 的 object-fit、object-position 和动画变换计算完整主体到视口边缘、文字及控制面板占位的最小间距，单位为 CSS 像素。每项至少 24 像素。`tests/hero-carousel.test.mjs` 绑定运行哈希、完整主体边界及全部尺寸和动画端点；检查过程不使用浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 55.44 | Pass 49.97 | Pass 52.02 | Pass 53.39 | Pass 52.02 | Pass 53.39 |
| 390x760 | Pass 55.44 | Pass 49.97 | Pass 52.02 | Pass 53.39 | Pass 52.02 | Pass 53.39 |
| 1366x768 | Pass 99.66 | Pass 101.80 | Pass 101.00 | Pass 76.19 | Pass 65.28 | Pass 100.46 |
| 1920x900 | Pass 156.70 | Pass 158.57 | Pass 157.87 | Pass 149.51 | Pass 134.19 | Pass 157.40 |
| 2560x900 | Pass 124.27 | Pass 124.84 | Pass 124.62 | Pass 124.48 | Pass 124.62 | Pass 124.48 |
| 3840x900 | Pass 109.00 | Pass 140.00 | Pass 250.74 | Pass 58.64 | Pass 58.14 | Pass 252.68 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 输出 WebP，转换脚本验证解码和尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。生成源图逐张静态检查；运行图通过静态联系表核对画面、颜色与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `7b8c6d1945a76f45e153bbc29598d8f2566234608e1a0df7a0a4b295abd6dc7b` | `accaddb648d8479cae8cfe65e62d04d34188e48a03ed0a775d3cd5cc4a8e96a8` |
| 02 | `b009a18c68c3d879512f96f228eae0a47227470111265cdf9bbf3288d143d0a9` | `18456a0db5ea69ab32bad0d6b609423df27c374cfcc42c6ec0837f520d5b5c46` |
| 03 | `64fa3e0a0e3f99af7244a19d0a8aad49e783fd6c3369a7fb42a70c6002d89ce2` | `7f2920bd619c66c371dae82566113a13268d7f8a9a09c1cd64b4bd5efef2f5fc` |
| 04 | `4b3d3cc7f320b940a26023458f9589e7454ce7f3c529ad42a7eaaa0cdd385b55` | `b3530102a21d026df205544478d05dea7c22f97922dd739659ee7775b1127e7a` |
| 05 | `b18d9996f9ec783a27f700f5d8efb72ce8b78c78012210e3e7873c2441debdc9` | `48d3df284da4e676633f123f9d64cf9cf84d43531e4375f5bdc6ae279cdb49f3` |
| 06 | `a578d3c9e19124b41606e5226c5e9dcb813d1f67e88082674adc34e3f8437fb1` | `847d9149e587434fc4a540cff2ba612b1af33de1d451510ee7c487f059364a60` |

## 仓库验证

已通过类型检查、`npm test` 全部 221 项测试及其包含的生产构建与子路径资源验证。封面回归覆盖上述全部视口与动画端点，运行图均已静态检查。已移除本批临时 PNG，只保留运行 WebP、提示词和哈希记录。
