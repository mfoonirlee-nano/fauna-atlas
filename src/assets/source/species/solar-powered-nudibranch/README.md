# 长突太阳能海蛞蝓图片集

2026-10-27 复核返修。当前六张图片为参考资料支持的 AI 科学重建；不作为摄影、物种鉴定、显微测量或连续行为证据。保护评估为独立的 UNVERIFIED 状态，不属于 IUCN NE。

## 生物学修正与参考范围

按 Sea Slug Forum 的正常个体照片重画六张：细长平滑嗅角、宽扁且姿态不规则的背突、褐色斑区。排除页面中损伤再生的异常个体作为结构参考。取食软珊瑚的记录与共生藻获取途径的推测分开表述。

参考：[选题研究资料：Phyllodesmium longicirrum](https://seaslugforum.net/showall/phyllong)。本次已读取正文并查看其中的本种照片；来源响应与当前运行图哈希见 [biological-review.json](./biological-review.json)。

最终生成/编辑提示、旧运行图与新源图哈希见 [prompts.json](./prompts.json)，实际尺寸与运行图哈希见 [image-acceptance.json](./image-acceptance.json)。返修过程中剔除的候选图不进入六张保留集。工具原始 PNG 留在 `/workspace/generated_images/`；项目内临时输入已在转换核对后删除。

## 当前运行素材

| 文件 | 实际解码尺寸 | WebP SHA-256 |
| --- | --- | --- |
| 01-cover.webp | 1536×1024 | `ab6704f230c797b38d51555b724c700f29aa2e148a601b3bf51cca81b13f5581` |
| 02-observation.webp | 1536×1024 | `88dbbfbe8a3b4ed7ba2c63154815507f046c28149a41905be7244e85ff34b5f0` |
| 03-observation.webp | 1536×1024 | `93fc9bcbae940ddceeac888d4ef7087348367e60921caf31c4bbf07108f4ce7d` |
| 04-observation.webp | 1536×1024 | `d1bedefb160056d1195435f4d8f930550fa175d1fb41013b154c91f2419f6a8d` |
| 05-observation.webp | 1536×1024 | `b0cc4ffae001a7757b5694216b18e3ad126ea786ad272b9d95a77521829780d9` |
| 06-observation.webp | 1536×1024 | `4a525b3fd09cf1030c3e760f758019b07b41a524fa11a6d773b793dfdaa7d097` |

## 封面构图与适配

运行封面完整轮廓边界为 (552, 235, 1432, 750)，包括嗅角、触角、尾部、足或外套膜的所有可见外缘。源图与运行图原分辨率分别检查；宽高为 1536×1024，focalPoint=(0.7,0.5)。主体水平中心为 64.58%，左侧主要为低细节背景。

边界、尺寸和当前哈希同步到 cover-subjects.ts 与 original-covers.json。旧封面与返修封面的主体尺寸及各视口结果见 [hero-acceptance.json](./hero-acceptance.json)。检查 320、390、761、900、1100、1366、1920、2560、3840 宽度及桌面内容增高 160px；六种透明度端点共用几何，最小间距均不低于 24 CSS px。逐种查看 390、761、1920、3840 的图片栏静态模拟。静态模拟不验证浏览器字体或完整页面，按仓库规定未启动浏览器。
