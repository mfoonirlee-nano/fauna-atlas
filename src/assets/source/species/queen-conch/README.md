# 女王凤凰螺图片集

2026-10-27 复核返修。当前六张图片为参考资料支持的 AI 科学重建；不作为摄影、物种鉴定、显微测量或连续行为证据。保护评估为独立的 UNVERIFIED 状态，不属于 IUCN NE。

## 生物学修正与参考范围

按 NOAA 正文、插图和活体照片重画六张，移除巨大裙状足与圆盘状厣，改为软体大部分缩入壳口的静止姿态；04 单独重画为未展开宽外唇的幼体。06 不再声称展示足与厣的运动。ESA 受威胁标签与未核实的 IUCN 全球评估分开记录。

参考：[选题研究资料：Aliger gigas](https://www.fisheries.noaa.gov/species/queen-conch/science)。本次已读取正文并查看其中的本种照片；来源响应与当前运行图哈希见 [biological-review.json](./biological-review.json)。

最终生成/编辑提示、旧运行图与新源图哈希见 [prompts.json](./prompts.json)，实际尺寸与运行图哈希见 [image-acceptance.json](./image-acceptance.json)。返修过程中剔除的候选图不进入六张保留集。工具原始 PNG 留在 `/workspace/generated_images/`；项目内临时输入已在转换核对后删除。

## 当前运行素材

| 文件 | 实际解码尺寸 | WebP SHA-256 |
| --- | --- | --- |
| 01-cover.webp | 1536×1024 | `1b269d0f3ab69e71c74f1bd1c7c71014f5e9228d52579795d2b2c9609cf8c1f8` |
| 02-observation.webp | 1536×1024 | `0325a69aaf05587589948ec9b89403e863f58843ecde290cee401efe2857eb5a` |
| 03-observation.webp | 1536×1024 | `99dff9df54e9663a278521b8e3b09d9cfc2b2a429dab022dd472b9d1158b5688` |
| 04-observation.webp | 1536×1024 | `bddceeaf5e580aa7e45b09401e08d46b23ee6eb44ff06d88f80070db72b79849` |
| 05-observation.webp | 1536×1024 | `6edbd360bd1cc990d3dd69be8e8765d37fa2bdfae68c210cd28313b5ede0edcd` |
| 06-observation.webp | 1536×1024 | `b234ec338421403853afefd68fbf8452fb3f5ee7a03cb4f72ef7bb8226d19cb0` |

## 封面构图与适配

运行封面完整轮廓边界为 (628, 88, 1475, 752)，包括嗅角、触角、尾部、足或外套膜的所有可见外缘。源图与运行图原分辨率分别检查；宽高为 1536×1024，focalPoint=(0.7,0.5)。主体水平中心为 68.46%，左侧主要为低细节背景。

边界、尺寸和当前哈希同步到 cover-subjects.ts 与 original-covers.json。旧封面与返修封面的主体尺寸及各视口结果见 [hero-acceptance.json](./hero-acceptance.json)。检查 320、390、761、900、1100、1366、1920、2560、3840 宽度及桌面内容增高 160px；六种透明度端点共用几何，最小间距均不低于 24 CSS px。逐种查看 390、761、1920、3840 的图片栏静态模拟。静态模拟不验证浏览器字体或完整页面，按仓库规定未启动浏览器。
