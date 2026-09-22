# 红壁蜂 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，事实与保护等级证据范围见[本批核验记录](../../../../../docs/research/todo-cross-group-five-2026-09-22.md)。

## 封面检查

首次收录，没有旧版线上封面。 源 PNG 和运行 WebP 均为 1536×1024。目视完整主体边界为 `(640, 283, 1395, 824)`，主体 755×541 px，水平中心为源宽 66.2%。左侧 40% 为环境背景，完整主体与源图边缘之间保留背景。

已按原始分辨率检查源封面与运行 WebP，并用联系表检查图库。焦点 `{"x":0.7,"y":0.5}`，轮播与物种档案共用 `01-cover.webp`。封面 SHA-256：`8d5c48ca075c988472b2cea37fbb362f6ee45409090b6506fd6c8dfcaea033d0`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。覆盖计算包含焦点与中心缩放，各状态均覆盖画布。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 560.35×401.52 | Pass |
| 390×760 | 560.35×401.52 | Pass |
| 1366×768 | 671.44×481.12 | Pass |
| 1920×900 | 943.75×676.25 | Pass |
| 2560×900 | 1258.33×901.67 | Pass |
| 3840×900 | 1887.50×1352.50 | Pass |

当前布局允许边缘裁切，移动端和超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。按项目要求未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于精确测量或物种鉴定。封巢图首轮缺少足部支撑，已重新生成并复查。本组画雌蜂；花朵、枯茎只作自然大小参照，生成图不保证管径或虫体比例精确。全球保护类别证据范围见核验记录。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `9c940967397b546940efcfaa475ea94d717ba5c22a5e8bebc723a16e38e74cb3` | `8d5c48ca075c988472b2cea37fbb362f6ee45409090b6506fd6c8dfcaea033d0` |
| 02 | `f129410dbd2d618f2cfbc9ef7e05b80050a05ca0bf43049f04c46bbfe892a41d` | `ef0cd32c1fb935c164ecbbbc876a08ae7be2543fa53495bc46653be8295637ed` |
| 03 | `ccf535aad6b4de38450928f5afbf60c11ad465b7d2d708168529e8b4a1f1a249` | `196a5ebf27538c9fb32512ca8b122e10553ee370bbc4531edfbcfd9687f54b84` |
| 04 | `2d0ddebf4902cb342c3b8383ab2f345e2062753ae2dcdba0663d2f20d806bed4` | `1754985567e9cf09738e38ecf52e47a9f8a15eaa0b5e4c688f719831bbebf9fa` |
| 05 | `002b317ced19dc3453a7b0ba1aea79ba500a60845d80f8d3e3ddec7a2a148f5c` | `81e13cde1b9a68d1cf9a11948546e90f091096968ae1dd5b13fb3df8eeeae31f` |
| 06 | `f7eb4d64c747d724eef56ae35b57ad327a314ce71b7db20ef91be4a5d96826ca` | `79e21bbc7590965e84a32ed54eb25365a08fbbd37b932ac8202b604303c77a3a` |

使用项目 cwebp 流程验证转换、解码和尺寸。验收后仅保留六张 WebP 与制作记录。
