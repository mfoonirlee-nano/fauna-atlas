# 马氏树袋鼠 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，物种事实及来源范围见[本批核验记录](../../../../../docs/research/todo-cross-group-ten-2026-09-22.md)。

## 封面检查

首次收录，无旧版线上封面。首轮封面通过源图构图检查。 源 PNG 与运行 WebP 均为 1536×1024。目视完整主体边界为 `(817, 89, 1396, 934)`，主体 579×845 px，水平中心为源宽 72.0%。边界包含姿态中可见的尾、足、鳍、刺或触角；主体外缘留有背景，左侧 40% 供文字使用。

已检查源封面和运行 WebP 的原始分辨率，以及图库联系表。焦点 `{"x":0.7,"y":0.5}`，轮播与档案共用 `01-cover.webp`。封面 SHA-256：`cfa8e0aae8c962c29c8db6e9550a9c188a9abb7d420b4865ff52d7e9de934710`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 429.73×627.15 | Pass |
| 390×760 | 429.73×627.15 | Pass |
| 1366×768 | 514.92×751.48 | Pass |
| 1920×900 | 723.75×1056.25 | Pass |
| 2560×900 | 965.00×1408.33 | Pass |
| 3840×900 | 1447.50×2112.50 | Pass |

当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于物种鉴定或精确测量。图库中的局部特写不要求全身入画。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `1d6d233e8c59659b38b33e78716324e60641a62cce414fdac23e799fcfb8bdff` | `cfa8e0aae8c962c29c8db6e9550a9c188a9abb7d420b4865ff52d7e9de934710` |
| 02 | `1d713c4077f072863bbe747f1edf276131fac9a67fb1f585b3582c8d228d793b` | `aeb26e2b3ad0ec4f3a26010856dd13d1a9073f6901b833de465a29dfb144917b` |
| 03 | `db0d76d3453405ab6559103e940ec33403da07e9e15b8c94b7032a190593d2c1` | `67dc033203b7cdef1fb195511d9164ad67a7cff40b6f8a2b525e8b1fc43a3b47` |
| 04 | `0a7a27299892435b3d2b6b0d728fbf0cab07d73fa8e69c18c033f941de1d3e86` | `ee0e4373f0f7d1404dc883ff1f7f648c6c2cfb405b99c91b1f71d3b00ba1671d` |
| 05 | `bc9dd34312cc5d3a3767db11f1bf7b50a34006d278743ae5a4b5fa2eacec19b2` | `26bcc5434fd47ef2c3b57ab9b09583e2f38a58ed346becff09f55d8f47ab5b1b` |
| 06 | `03305d81cffec3d655590afcb68c5c5f245f47cf75814e878a66b1c7371a1252` | `dbd9595768a44a532194219f96c6ab369d56a55ddf6cc37621ebe3768cce9784` |

使用项目 cwebp 流程校验转换、解码和尺寸。验收后仅保留六张 WebP 和制作记录。
