# 东非黑白疣猴 image set

2026-09-21 使用内置 image_gen 逐张生成一张封面和五张图库图。最终提示词与修订前提示词见 [prompts.json](./prompts.json)，事实来源见[本批核验记录](../../../../../docs/research/todo-next-five-2026-09-21.md)。

## 封面检查

首次收录，没有旧版线上封面。源 PNG 与运行 WebP 都是 1536×1024。目视完整可见主体边界为 `(790, 37, 1267, 1000)`，主体 477×963 px，水平中心为源宽 67.0%。左侧 40% 留作安静背景，源图边缘与主体之间保留背景。

已检查生成源图；封面与压缩后的 WebP 按原始分辨率检查，图库转换后用联系表复查。焦点 `{"x":0.7,"y":0.5}`，轮播和物种档案共用 `01-cover.webp`。运行封面 SHA-256：`2fdedf2c6fcb8870dc97a6e24d8066ca374602fea7bab4e1ef5f5308e9dd8feb`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 呈现。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；中心缩放分别为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)，各状态均覆盖画布，无平移露底。

| 视口 | 首轮候选主体 CSS px | 最终主体 CSS px | 六状态覆盖 |
| --- | --- | --- | --- |
| 320×760 | 无旧版 | 354.02×714.73 | Pass |
| 390×760 | 无旧版 | 354.02×714.73 | Pass |
| 1366×768 | 无旧版 | 424.21×856.42 | Pass |
| 1920×900 | 无旧版 | 596.25×1203.75 | Pass |
| 2560×900 | 无旧版 | 795.00×1605.00 | Pass |
| 3840×900 | 无旧版 | 1192.50×2407.50 | Pass |

尺寸为裁切前投影。当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；这不是旧版 24 px 全身安全区验收。按项目要求未启动浏览器。

## 图像范围

封面包含头部、白色披毛、可见手脚和长尾末端。图库 03、05、06 有局部尾端出画，仅用于取食、幼仔与群居观察，不作为全身参考。图片均为 AI 科学情景重建，不是连续实拍，也不用于精确测量。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `67ab320f9c470c904a17dccf1f66c3b91bbdf0c3ba675ecc8a13b1be19b0ad43` | `2fdedf2c6fcb8870dc97a6e24d8066ca374602fea7bab4e1ef5f5308e9dd8feb` |
| 02 | `ce8acd6f755f4b802c41ccecab872f3a521a8bc6ac5af6b9a36d953cee4e1e82` | `1a8cb9406b464f4a8eb7861e3b91a8ef9d17f6becbb3b7f6f6ad4db26981bd79` |
| 03 | `5258377f6f43eb334d75c5b39125061c56142561cc77cf52db7f9e85fb99adfa` | `2136f14d5ba28a17d5ae3f7b5699f88293b3f32802c261dc2c853a047d4e4f6a` |
| 04 | `76c2489dabaa7b85aa19cba1bc0f6dbcb0b8c16468939e4ec3104e03b528322c` | `b64cd687893bc320e47b1820e7489efb86e21f9573381e8a58ba77a4d78b9d61` |
| 05 | `0ee1653b932e5081df7d25c13eb715e8b8f0205bd72238c2f05ef3903dc47089` | `5f8ed6927eb15d95ed7137c25bcabad2cad9ab87a967eb0f742a09526f0cbff2` |
| 06 | `221afc453cf1afa6c3f0538711069da09048e01b0a04d26d294b1d3aaa6a0e11` | `d7bfcd084b376ef44d494b28137894626bd21e4dd3ea746e58430f2af95a9d6b` |

使用项目 cwebp 流程转换并检查尺寸、解码，验收后只保留六张 WebP 与制作记录。
