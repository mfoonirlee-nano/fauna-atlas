# 袋食蚁兽 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，事实与保护等级证据范围见[本批核验记录](../../../../../docs/research/todo-cross-group-five-2026-09-22.md)。

## 封面检查

首次收录，没有旧版线上封面。首轮候选主体约为 1135×725 px（边界 275,160,1410,885），水平中心不足 60%，且尾巴进入左侧文字区，已弃用。第二轮尾毛触及右边缘，第三轮通过。 源 PNG 和运行 WebP 均为 1536×1024。目视完整主体边界为 `(682, 257, 1463, 725)`，主体 781×468 px，水平中心为源宽 69.8%。左侧 40% 为环境背景，完整主体与源图边缘之间保留背景。

已按原始分辨率检查源封面与运行 WebP，并用联系表检查图库。焦点 `{"x":0.7,"y":0.5}`，轮播与物种档案共用 `01-cover.webp`。封面 SHA-256：`39158841a67e2822ce6eb16dfeaddc086aac1abb23956b40a6a74eacfaf3910c`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。覆盖计算包含焦点与中心缩放，各状态均覆盖画布。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 579.65×347.34 | Pass |
| 390×760 | 579.65×347.34 | Pass |
| 1366×768 | 694.56×416.20 | Pass |
| 1920×900 | 976.25×585.00 | Pass |
| 2560×900 | 1301.67×780.00 | Pass |
| 3840×900 | 1952.50×1170.00 | Pass |

当前布局允许边缘裁切，移动端和超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。按项目要求未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于精确测量或物种鉴定。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `3138b8a5ec573201bcf6bdecd8c8da6a2fdddb341bf43d2d26748288db5459ff` | `39158841a67e2822ce6eb16dfeaddc086aac1abb23956b40a6a74eacfaf3910c` |
| 02 | `624ea5861326ad75576c1ada5197440a58bab4f73f40d5f25983e0c7de90acc8` | `48f3a6438834ea6e6b1ba2a05cf509f22a25fcb1e77f7cea2e0ce538cd0d02df` |
| 03 | `5a48a29a5c35ebc93ab3fe30400851bae2a4983d411e480f635999cf687ee7c7` | `a358253f3523f7ed601b1c5cbf107542fc81cdacbfb207176a9cf41c87c146f8` |
| 04 | `399114aaefde7184bbdb66aa606db91d8910ebadbef267ff89ac01f408959fe6` | `1d3875fe6964621ef233ef6ccb21a84aab5a7931bacb17fe2eeecc173599d717` |
| 05 | `17866152fde36a87784fccacf6aedc040eefc0b53da10a36b58bd095ebbbf3ce` | `b538d5e4cf751cdc22f0d0f587aa174c7cd0c3232f998f180071866412051dea` |
| 06 | `4f8c8a4b47a85399ae1fe4b23ed4b04b74e1289e472c116b09b68be09f1a72c0` | `2174877a50220419bc70f9a85af8f6252fdcebd5ce84c724b7a29035684d1cc4` |

使用项目 cwebp 流程验证转换、解码和尺寸。验收后仅保留六张 WebP 与制作记录。
