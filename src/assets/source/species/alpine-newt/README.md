# 高山蝾螈 image set

2026-09-21 使用内置 image_gen 逐张生成，一张封面和五张图库图。最终生成或编辑提示词见 [prompts.json](./prompts.json)，事实来源见[第三批核验记录](../../../../../docs/research/todo-third-ten-2026-09-21.md)。

## 封面检查

首次收录，无旧版线上封面。源图和运行 WebP 均为 1536×1024。首轮候选主体边界为 `(395, 256, 1475, 754)`，大小 1080×498 px；最终完整可见主体边界为 `(715, 150, 1475, 868)`，大小 760×718 px，水平中心位于源宽 71.3%。边界包括当前姿态下可见的吻端、足尖、尾端、鳍尖、翅缘或触角、触手。左侧 40% 为环境背景，完整可见主体与源图边缘留有背景间隔。遮挡处不补造身体部分。

源 PNG 与运行封面均按原始分辨率目视检查；五张图库图在转换前后分别通过联系表检查。焦点为 `{"x":0.7,"y":0.5}`，轮播和档案共用此封面。运行封面 SHA-256：`b379e361630fe8d08d2b88d7e6be3fd4c2da1df77d58fcca0e850c498860aa4a`。

## 六视口与动画验收

采用 2026-09-16 全幅 object-fit: cover 呈现。settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 中心缩放分别为 1、1.04、1.025、1.015、1.025、1.015。六视口各六状态均覆盖画布，无平移露底；对应哈希和边界纳入轮播测试。

| 视口 | 首轮主体 CSS px | 最终主体 CSS px | 六状态覆盖 |
| --- | --- | --- | --- |
| 320×760 | 801.56×369.61 | 564.06×532.89 | Pass |
| 390×760 | 801.56×369.61 | 564.06×532.89 | Pass |
| 1366×768 | 960.47×442.88 | 675.89×638.53 | Pass |
| 1920×900 | 1350.00×622.50 | 950.00×897.50 | Pass |
| 2560×900 | 1800.00×830.00 | 1266.67×1196.67 | Pass |
| 3840×900 | 2700.00×1245.00 | 1900.00×1795.00 | Pass |

表内尺寸是裁切前投影。源构图保留左侧文案背景；运行时允许边缘裁切，移动端和超宽屏不保证全身可见。本表不表示通过旧版 24 px 全身安全区或浏览器截图验收。未启动浏览器。

## 图像范围与限制

图片为 AI 科学情景重建，不是野外实拍；不同场景不表示同一个体的连续动作，不用于精确大小比较或附肢计数。叶片、树皮和海底仅提供环境参照。文字按实际图像说明性别、姿态和遮挡。使用项目 cwebp 流程转换并检查解码和尺寸，未调用 TinyPNG。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01-cover.webp | `0520026bd3c0470d174646b1871b7d614b2a2d0f67314fe4307c8031f6f3aff0` | `b379e361630fe8d08d2b88d7e6be3fd4c2da1df77d58fcca0e850c498860aa4a` |
| 02-observation.webp | `07aa29c948694dcacabcaebf8c233dcf7f863600962e3a22c9d8ee8657bf999a` | `ce1a9ea99cba2be6d64702b4a6ff7a6b34c653d934e18fafa91efcbaaa6b841d` |
| 03-observation.webp | `9de0cd2537c4a0bfb1131e5042283f643085dc7766604ddb6d589591a69ff37d` | `74c35cbef139d0b225e149677a4ed90faa95a64ac98f7ba6fbc6873ce11d8841` |
| 04-observation.webp | `5c9198e892959c2e24abb58f690bdc87e9ce6e2c983f070cec3b4c5106da6865` | `54961d51bd5d49ba0cc635892baba9312ceaa0a9665b6be72fe27fa3cd50dbf2` |
| 05-observation.webp | `5028dec55bf01f350cbcf88021cf5c1d22f9bae38eab66142179cba0b13974b0` | `a67bd461ac861dccddb292d7f19f4449d6b4bdf1700d42fc8aa2cfac87cee0c6` |
| 06-observation.webp | `85004a8a9696608d21c4765cd2072239e112898df5c003acb90da3a7d8ca41bc` | `cd9bf724d76bae5816953a7273a1848c6135c38d78281bd9b2714894db09add3` |

生成、源图和运行图检查完成。验收后清理临时 PNG，仅保留六张 WebP 与记录。

## 2026-09-21 图库修正

使用内置 image_gen 编辑 `02-observation.webp` 与 `06-observation.webp`，去除背嵴的波浪和锯齿轮廓，改为低而平滑的黄色黑斑薄脊。依据 [Froglife 高山蝾螈资料](https://www.froglife.org/info-advice/amphibians-and-reptiles/alpine-newt/)。保留游泳和水草旁停留的原有姿态及环境。逐张检查生成 PNG 与转换后 WebP 的完整分辨率，确认平滑背嵴、完整尾部及构图，尺寸均为 1536×1024。上表哈希和 prompts.json 已更新；封面未变，保留原封面验收记录。
