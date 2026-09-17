# Laughing Kookaburra image set

2026-09-17 使用内置 image_gen 生成一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行文件位于 `public/images/species/laughing-kookaburra/`。

资料与分类取舍见[五鸟核验记录](../../../../../docs/research/five-birds-kookaburra-to-robin-2026-09-17.md)。全球保护等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：粗粗的嘴巴。
- `03-observation.webp`：从高处往下看。
- `04-observation.webp`：嘴里捉着小虫。
- `05-observation.webp`：树洞旁的鸟。
- `06-observation.webp`：张嘴鸣叫。

## 封面检查

首次收录，无旧封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 675, "top": 55, "right": 1312, "bottom": 968}`，大小 637×913 像素，中心位于源宽 64.7%。边界包含嘴、头顶、翅缘、可见脚趾和尾羽；枝条自然遮挡部分不补画。左 40% 为环境，主体四周有背景余量。

focalPoint 为 `{"x":0.7,"y":0.5}`；运行封面 SHA-256：`da5a30f03b1392b46f3fd15cb25476a4bc607dbc67fdb51a27b86ad757c4c8c6`。首页和档案共用该封面。

按 2026-09-16 的全幅铺满规则验证：320×760、390×760、1366×768、1920×900、2560×900、3840×900 均用 object-fit: cover；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 的图像范围覆盖整个 hero。对应 hash 与完整源主体边界纳入轮播测试。边缘裁切是现有布局的行为，不声称移动端或宽屏中全身可见，也不沿用旧版 24 px 全身安全区结论。

## 限制与处理

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或等比例比较。图库局部景别可裁切尾部；脚趾可能被枝条遮挡，不用于逐趾计数。静态图片不证明鸣声或完整捕猎过程。封面已检查原始 PNG 和原尺寸 WebP；图库复查运行图片联系表。使用 npm run convert:webp 转换并检查解码、尺寸与哈希；验收后删除工作区临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `0138f5ffab48b96d9dcaa05a5cf4aac4f9096f15b1235bf90e98a8e0f1b8be01` | `da5a30f03b1392b46f3fd15cb25476a4bc607dbc67fdb51a27b86ad757c4c8c6` |
| 02 | `008738613308c6da5f31b854eb74962f152a7f097258ff7beb7314442c5b4a0f` | `c0613c4c0158d9de17554b31db5063c7763729e1e322b2247f7bb987f34c6d49` |
| 03 | `eef5fc12861b661e1dab5d967b51566243c7ac82c0ffc91fa040220f88be201e` | `b13b62ab0b547c5eca1e927806d5f6f9ea3134247140062fa7114f5776ed79e2` |
| 04 | `891ad34ed797d738af8856fe32da98b0f748ab78195e1368466fdee4d5f5d3ed` | `dded7340e2a37684eaf1af2396ff7dd06de9221914235d1cd9b61e33d9cc185c` |
| 05 | `41f914d183fd064d4be0f16bfab0bf263e1439451ea86d00aa69a690ecff6bb6` | `825f8cb08c7250b9cf9f307a7ec97238e70e6cfcd00141b9f9f063c2d4d56a5f` |
| 06 | `1234c4363c698f653cb6b53afb29dd5c977e54c42d01a7dc2da56de8d3b0020b` | `71a8c042b1fc25c07593b6bba1b8e430532077c7b4966af0d2bdcfd0fc7a1283` |

## 当前 hero 几何记录

主体大小指未截去部分前的投影尺寸（CSS px）。初始端点为 1.04 倍，前后进入端点 1.025 倍，前后离开端点 1.015 倍；各动画终点恢复 1 倍或淡出。六视口的这些端点均覆盖整个 hero，边缘允许裁切。

| 视口 | settled 主体大小 | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 472.77×677.62 | Pass |
| 390×760 | 472.77×677.62 | Pass |
| 1366×768 | 566.50×811.95 | Pass |
| 1920×900 | 796.25×1141.25 | Pass |
| 2560×900 | 1061.67×1521.67 | Pass |
| 3840×900 | 1592.50×2282.50 | Pass |

2026-09-17：生成、目视检查和当前 hero 覆盖验收完成。分类与档案测试 191 项、轮播测试 277 项、图片转换测试 1 项、构建与子路径测试 3 项通过。未启动浏览器。
