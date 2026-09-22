# 莱氏拟乌贼 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。提示词和修订记录见 [prompts.json](./prompts.json)，事实来源见[本批核验记录](../../../../../docs/research/todo-ten-2026-09-22.md)。

## 封面检查

首次收录，没有旧版线上封面。 源 PNG 和运行 WebP 均为 1536×1024。目视完整主体边界为 `(718, 94, 1490, 874)`，主体 772×780 px，水平中心为源宽 71.9%。左侧 40% 为环境背景，完整主体与源图边缘之间保留背景。

已按原始分辨率检查生成封面和运行 WebP，并用联系表复查压缩后的图库。焦点 `{"x":0.7,"y":0.5}`；轮播和物种档案共用 `01-cover.webp`。运行封面 SHA-256：`77131be940d3ebfdaffab6f67c5394c621534ec9ea5ad484aaec434266764bf1`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 呈现。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；中心缩放分别为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)，各状态覆盖画布，无平移露底。

| 视口 | 首轮候选主体 CSS px | 最终主体 CSS px | 六状态覆盖 |
| --- | --- | --- | --- |
| 320×760 | 无旧版 | 572.97×578.91 | Pass |
| 390×760 | 无旧版 | 572.97×578.91 | Pass |
| 1366×768 | 无旧版 | 686.56×693.67 | Pass |
| 1920×900 | 无旧版 | 965.00×975.00 | Pass |
| 2560×900 | 无旧版 | 1286.67×1300.00 | Pass |
| 3840×900 | 无旧版 | 1930.00×1950.00 | Pass |

尺寸为裁切前投影。当前布局允许边缘裁切，移动端和超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区验收。按项目要求未启动浏览器。

## 图像范围

侧鳍沿胴体大部分长度展开；收拢的腕与触腕相互遮挡，画面不用于逐腕计数。卵图是产卵环境，不表示亲体守卵。 图片为 AI 科学情景重建，不是连续实拍，也不用于精确测量或物种鉴定。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `bb739f0383fdd8076d94fe0492e98211dfe3e1b05f46d921d1bade81ae0270f3` | `77131be940d3ebfdaffab6f67c5394c621534ec9ea5ad484aaec434266764bf1` |
| 02 | `b0f845bf38453e6637b80a4195689ec1e7edd3f50e8cd101927c11b7acdcfee6` | `87fb99aeb933f3f4966b65c7def6ab572adf83d025a42d8d65aaec1a4492dad4` |
| 03 | `06f29a4e54c3dcf77bd998aaea1be379cf6f0b1afbe3628c6be0c9c9af0baee7` | `cc3c0e52cc0a8a3e22401f7abe9a202658a9726f43a2395e9040a97660616242` |
| 04 | `35e92d6efea30ffda14f1dc54eb38517f0fee1200d8828c1480558be6431dace` | `03c747b5154295586ebf890eada366238af56d723bb8a2ac301125a360ccde20` |
| 05 | `e57fc71d53f202df81dcfaf21af2137e4331f176d5ccad26f4f1967248b6e852` | `86805fde51ca4aeccffed46cf64e67b45f403101a4e9880efdac267d18733c27` |
| 06 | `0817743cda5d77fec5fd9c6c62c949002dbac9c7581f82fddb039dc8cb76db58` | `32b8189e10aeeb4e48d01b8aaa930273043b7e555e3d1ad55a700618b2566375` |

使用项目 cwebp 流程检查转换、解码和尺寸；验收后仅保留六张 WebP 与制作记录。
