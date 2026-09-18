# Leopard Tortoise image set

2026-09-18 使用内置 image_gen 逐张生成，一张封面和五张图库图。完整提示见 [prompts.json](./prompts.json)。运行文件位于 `public/images/species/leopard-tortoise/`。

资料与分类取舍见[本批核验记录](../../../../../docs/research/five-animals-crocodile-to-tortoise-2026-09-18.md)。

## 图库

- `02-observation.webp`：浅色壳上的深色斑纹。
- `03-observation.webp`：低头吃草。
- `04-observation.webp`：粗粗的腿向前迈。
- `05-observation.webp`：到阴凉处休息。
- `06-observation.webp`：小龟的花纹。

## 封面检查

首次收录，无旧运行封面。 源 PNG 与运行 WebP 均为 1536×1024，已按原始分辨率目视检查。完整主体边界为 `{"left": 637, "top": 268, "right": 1479, "bottom": 866}`，大小 842×598 像素，中心位于源宽 68.9%。边界包括头部、喙端、可见四肢、背甲与尾端；自然遮挡的部分不补画。主体四周有真实背景，左 40% 留给文字。

focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`31b20c875644f703b21af08ea49288813aa68900be0f4ef10b75c59f0bbf4fcc`。首页与物种档案共用这一张封面。

按 2026-09-16 全幅铺满规则检查六个视口和六个状态：settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。对应缩放为 1、1.04、1.025、1.015、1.025、1.015，均以中心缩放，保持覆盖；终点恢复 1 倍或淡出。现有布局允许边缘裁切，不声称移动端或宽屏中全身可见。下表记录裁切前的主体投影尺寸，不沿用旧版 24 px 全身安全区结论。

| 视口 | settled 主体大小（CSS px） | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 624.92×443.83 | Pass |
| 390×760 | 624.92×443.83 | Pass |
| 1366×768 | 748.81×531.82 | Pass |
| 1920×900 | 1052.50×747.50 | Pass |
| 2560×900 | 1403.33×996.67 | Pass |
| 3840×900 | 2105.00×1495.00 | Pass |

## 图像记录与限制

封面 PNG 与 WebP 按原始分辨率检查；图库按转换前后联系表检查。AI 图片用于形态和生活场景说明，不是实拍、同一个体的连续动作记录或等比例对照。图库局部图可裁切身体；脚趾自然遮挡，不用于逐趾计数。静态游泳姿势不代表完整动作过程。提示词描述期望场景，采用情况以最终画面为准。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `5c79400789d26f2929048be2f724d8c1c00d9b327bea344964ca805641f905e9` | `31b20c875644f703b21af08ea49288813aa68900be0f4ef10b75c59f0bbf4fcc` |
| 02 | `febc8690402695a6dd5b7effa1ad939a3800d1827fa672ffb19e32b130a8af4a` | `95488f77769b4d97fcd032341cd759abab86da42c3834cdb29f9b0e8819325e2` |
| 03 | `a2d96944f1513b8cda114e0455cfa858e65d1ba78eba9563876fbc838e56202f` | `cebbc9d6e4a1836275566bab94a095f63b0ed2da7b0c5ff6d38bd7080535d8de` |
| 04 | `91f2506d25a71f5abba329c45cc9992a49d081d36e2060d0327215125e2a28e9` | `a439471517ddf16bf06cb2958d0e06b8c2e9e3deb20ff825f4b6b0f5c8d759d5` |
| 05 | `1f9b22ad440a9842a59bb5e880e410215725a18b7f844516a5b5c1658a11eb69` | `c0adef69994d49e46b67da8413162b89127073f7d44a4bbb95149c65dd6466d9` |
| 06 | `44c77dc4c137417bdc96fbde9adcdf841dda728d2a0ebe5a7357b7b5fcffd9f9` | `23d3554400d966751c9577d7c457d9f6f492d96e84e0c3ab123add2c9d61bcf0` |

2026-09-18 验收：生成完成；源图与运行图片目视检查完成；当前全幅 hero 的六视口、动画覆盖检查通过。分类与档案测试 193 项、轮播测试 287 项、图片转换测试 1 项、构建及子路径测试 3 项通过，类型检查通过。未启动浏览器。清理工作区临时 PNG，只保留六张运行 WebP、提示词和哈希记录。
