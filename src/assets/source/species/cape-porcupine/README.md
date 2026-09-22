# 南非豪猪 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，物种事实及来源范围见[本批核验记录](../../../../../docs/research/todo-cross-group-ten-2026-09-22.md)。

## 封面检查

首次收录，无旧版线上封面。首轮封面通过源图构图检查。 源 PNG 与运行 WebP 均为 1536×1024。目视完整主体边界为 `(699, 218, 1491, 833)`，主体 792×615 px，水平中心为源宽 71.3%。边界包含姿态中可见的尾、足、鳍、刺或触角；主体外缘留有背景，左侧 40% 供文字使用。

已检查源封面和运行 WebP 的原始分辨率，以及图库联系表。焦点 `{"x":0.7,"y":0.5}`，轮播与档案共用 `01-cover.webp`。封面 SHA-256：`b6ca6c38bf366d7fc806c2f3a6ed250737c0b427217580c83c8d13e8d28fa8a7`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 587.81×456.45 | Pass |
| 390×760 | 587.81×456.45 | Pass |
| 1366×768 | 704.34×546.93 | Pass |
| 1920×900 | 990.00×768.75 | Pass |
| 2560×900 | 1320.00×1025.00 | Pass |
| 3840×900 | 1980.00×1537.50 | Pass |

当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于物种鉴定或精确测量。图库中的局部特写不要求全身入画。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `4066ef774997c145764c9aff9c417c22a3a5cc1a39222df236cb66fc0360bb55` | `b6ca6c38bf366d7fc806c2f3a6ed250737c0b427217580c83c8d13e8d28fa8a7` |
| 02 | `88fa1ea86e308a9bb565093b4a77bdce6ea11a7cd53451885b761bfee9e79a03` | `1070c83c5b130bcf0d1b2aea34b33c2feff2bbde85bd7c6a9e8378c38ffd32e8` |
| 03 | `08701c7abfa193ec8d88c135e84d71f9451995203a795f81128232e652d77796` | `734381fee47f46d796a75d3eefcdd2f8a0e3f6f7d2508544ee67f2aec6c8ac0e` |
| 04 | `89cfd3a8f2c206615b80c8c07521a9d5ff867cd590e9d81dd3114487d0f7e246` | `e7287e215c9861b622de7ec9a69f824e9a9ce2729f4038ef79ad5af0f1e525ae` |
| 05 | `e2a7aafe4019da6141939040a1af971a0131b4fc1473496e48c62490a3234093` | `64d6bc29e41f46dec2705617114f3e75ef32de55e0f8d79eae5e286015a7fdcc` |
| 06 | `0aac62cee7cb2762d21bd184d31b3c808cf5ba04fdae310d89d2d499dac67f3c` | `5451532918e3d0a35f26d05f28f4f5eb229b0371f4cddd59df89400949ce8ae8` |

使用项目 cwebp 流程校验转换、解码和尺寸。验收后仅保留六张 WebP 和制作记录。
