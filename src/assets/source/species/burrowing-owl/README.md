# 穴小鸮 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，事实与保护等级证据范围见[本批核验记录](../../../../../docs/research/todo-cross-group-five-2026-09-22.md)。

## 封面检查

首次收录，没有旧版线上封面。 源 PNG 和运行 WebP 均为 1536×1024。目视完整主体边界为 `(824, 85, 1275, 918)`，主体 451×833 px，水平中心为源宽 68.3%。左侧 40% 为环境背景，完整主体与源图边缘之间保留背景。

已按原始分辨率检查源封面与运行 WebP，并用联系表检查图库。焦点 `{"x":0.7,"y":0.5}`，轮播与物种档案共用 `01-cover.webp`。封面 SHA-256：`84417ffbe922e98614b2bd480414e051e5dc648dc9afda49a3b56edbb8dcc191`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。覆盖计算包含焦点与中心缩放，各状态均覆盖画布。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 334.73×618.24 | Pass |
| 390×760 | 334.73×618.24 | Pass |
| 1366×768 | 401.08×740.81 | Pass |
| 1920×900 | 563.75×1041.25 | Pass |
| 2560×900 | 751.67×1388.33 | Pass |
| 3840×900 | 1127.50×2082.50 | Pass |

当前布局允许边缘裁切，移动端和超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。按项目要求未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于精确测量或物种鉴定。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `ebd832b549d1ec4ef42af2da9b17b5d18a125c857fbe45e94ee9198a18c86076` | `84417ffbe922e98614b2bd480414e051e5dc648dc9afda49a3b56edbb8dcc191` |
| 02 | `196a7d56db2e71e5819181bb04f628ce1c681086dfb4ee804b1f5e9ff8007723` | `f69cfcfa5a60d34139983803469f195d1f507539354664f029e8592ebb37e77b` |
| 03 | `0d679c5ce979013e3e0299cd9e4807102cb6514a165134a1a57cc29c8c2ac4a1` | `482e343d78d46ea04f3e6bea561c24f1ecb45af7f9d31006f2ab3c3e2cf99fbc` |
| 04 | `f7dc1d0472da39b184e09d1fc1547a35e265fca9b9cc70b020cb352ee2d3e78d` | `00b1c66e66eacdc76d564cbbc7ab0ff354138f0028d6fcaa6aee04b643f57212` |
| 05 | `5a33188c2048c4e3e28e367d5538b8011b7e1e0db618a5f71f3ec5cfff2d25de` | `111724cfdd554c673d7fcfa147ea9c6eed3802a8dd26c80ff925a1996bdae933` |
| 06 | `5f0092f1985c83c8fe98511edabcd48eeffd89dbb1c9753b579dfc5f71e75ba1` | `0f4372b66337e271d3aea7dabe7ba76a59b5cf9e83825916861640e4291ca808` |

使用项目 cwebp 流程验证转换、解码和尺寸。验收后仅保留六张 WebP 与制作记录。
