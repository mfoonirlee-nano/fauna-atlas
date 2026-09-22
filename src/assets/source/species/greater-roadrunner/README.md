# 大走鹃 image set

2026-09-22 使用内置 image_gen 逐张制作一张封面和五张图库图。最终提示词见 [prompts.json](./prompts.json)，物种事实及来源范围见[本批核验记录](../../../../../docs/research/todo-cross-group-ten-2026-09-22.md)。

## 封面检查

首次收录，无旧版线上封面。首轮封面通过源图构图检查。 源 PNG 与运行 WebP 均为 1536×1024。目视完整主体边界为 `(754, 98, 1487, 911)`，主体 733×813 px，水平中心为源宽 72.9%。边界包含姿态中可见的尾、足、鳍、刺或触角；主体外缘留有背景，左侧 40% 供文字使用。

已检查源封面和运行 WebP 的原始分辨率，以及图库联系表。焦点 `{"x":0.7,"y":0.5}`，轮播与档案共用 `01-cover.webp`。封面 SHA-256：`76afda1a3befd07c6089c6f40290bde5c04286731a527ea5da7cb50b5ef645b6`。

## 六视口与动画

采用 2026-09-16 全幅 object-fit: cover 布局。检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave，缩放为 1、1.04、1.025、1.015、1.025、1.015。逐状态结果见 [hero-acceptance.json](./hero-acceptance.json)。

| 视口 | 最终主体 CSS px（裁切前） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 544.02×603.40 | Pass |
| 390×760 | 544.02×603.40 | Pass |
| 1366×768 | 651.87×723.02 | Pass |
| 1920×900 | 916.25×1016.25 | Pass |
| 2560×900 | 1221.67×1355.00 | Pass |
| 3840×900 | 1832.50×2032.50 | Pass |

当前布局允许边缘裁切，移动端与超宽屏不保证全身可见；不沿用旧版 24 px 全身安全区结论。未启动浏览器。

## 图像范围

图片为 AI 科学情景重建，不是连续实拍，不用于物种鉴定或精确测量。图库中的局部特写不要求全身入画。

| 图 | 源 PNG SHA-256 | 运行 WebP SHA-256 |
| --- | --- | --- |
| 01 | `4a9078b56aa1609c6dab86c298f4d5cd76e29c13f939640c2573fc275fc8b627` | `76afda1a3befd07c6089c6f40290bde5c04286731a527ea5da7cb50b5ef645b6` |
| 02 | `d68d27902b51d2b2f063af79818c14b69478d3115b380922a077013ddbcd4a74` | `bcfa22e11eda36aecdd8d91950ce1f208316cfae0df8985ef3adf40d3266324a` |
| 03 | `ebde129a498c6ba652db3348ebe6db0a084b39b519cfc053186b5a15ec6d2095` | `03e858e3c53188fb74f57175c0e8023e7ad60b941c42921d0f43c044dc17f05d` |
| 04 | `cff379832c050807f846fd5ebaf2fa2a63f3341f70891ae323d14c29438b0ded` | `27d32a3c3b10415342680c6b63a54858cb9bbf94ab5dffb637e38c65254e29f3` |
| 05 | `cfa762aa0031a16edc1eba94bb3221800447cb671d6f3c35850f6d3f9db2f734` | `1989e8964100a92a2fe9b1f56643b5b4efb75026c7068863f500d142f9c32bc6` |
| 06 | `f7d7530cd8b94eb8fc189f6f21d5a3541a175504f1f076b23ff2a292025035b2` | `90d93081a77db6bf5b70fd1350edaf3be04ca2a16a854ae3c40c545d4e92e65b` |

使用项目 cwebp 流程校验转换、解码和尺寸。验收后仅保留六张 WebP 和制作记录。
