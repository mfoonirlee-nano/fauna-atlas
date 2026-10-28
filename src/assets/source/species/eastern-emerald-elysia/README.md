# 绿叶海天牛图片集

2026-10-27 复核返修。当前六张图片为参考资料支持的 AI 科学重建；不作为摄影、物种鉴定、显微测量或连续行为证据。保护评估为独立的 UNVERIFIED 状态，不属于 IUCN NE。

## 生物学修正与参考范围

按 Sea Slug Forum 本种全身照片重画六张：侧足为与身体相连的柔软组织，去除凸起植物叶脉和僵硬中肋，改为不规则斑驳内部分枝与小斑点，嗅角呈卷管状。

参考：[选题研究资料：Elysia chlorotica](https://seaslugforum.net/showall/elyschlo)。本次已读取正文并查看其中的本种照片；来源响应与当前运行图哈希见 [biological-review.json](./biological-review.json)。

最终生成/编辑提示、旧运行图与新源图哈希见 [prompts.json](./prompts.json)，实际尺寸与运行图哈希见 [image-acceptance.json](./image-acceptance.json)。返修过程中剔除的候选图不进入六张保留集。工具原始 PNG 留在 `/workspace/generated_images/`；项目内临时输入已在转换核对后删除。

## 当前运行素材

| 文件 | 实际解码尺寸 | WebP SHA-256 |
| --- | --- | --- |
| 01-cover.webp | 1536×1024 | `9eaf683a8ed2ca459d732da26d915f5a142c455d2ede1aabccdd74be33342322` |
| 02-observation.webp | 1536×1024 | `94a1fb9317c2ccf2dff0ea2663e2acf3eae34a8f7ad7f03e83920e9035a09104` |
| 03-observation.webp | 1536×1024 | `eef19f99338dde346a4d664297efad11469982cc8082b20d4c0f04e8ee10efe1` |
| 04-observation.webp | 1536×1024 | `2eed3fbcdb1bd20546720574205fa5d9abbb50dc7c2e163400276d99cc6a9eee` |
| 05-observation.webp | 1536×1024 | `6e3302bebc2fa9ee22bc16f0eaf38f3c426710b461115e43bdd20a11c646490c` |
| 06-observation.webp | 1536×1024 | `73b5826ce97e897598d169377a069371394625c082c51a51668385ca56908392` |

## 封面构图与适配

运行封面完整轮廓边界为 (512, 160, 1507, 867)，包括嗅角、触角、尾部、足或外套膜的所有可见外缘。源图与运行图原分辨率分别检查；宽高为 1536×1024，focalPoint=(0.7,0.5)。主体水平中心为 65.72%，左侧主要为低细节背景。

边界、尺寸和当前哈希同步到 cover-subjects.ts 与 original-covers.json。旧封面与返修封面的主体尺寸及各视口结果见 [hero-acceptance.json](./hero-acceptance.json)。检查 320、390、761、900、1100、1366、1920、2560、3840 宽度及桌面内容增高 160px；六种透明度端点共用几何，最小间距均不低于 24 CSS px。逐种查看 390、761、1920、3840 的图片栏静态模拟。静态模拟不验证浏览器字体或完整页面，按仓库规定未启动浏览器。
