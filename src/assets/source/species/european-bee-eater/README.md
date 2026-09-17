# European Bee-eater image set

2026-09-17 使用内置 image_gen 生成一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行文件位于 `public/images/species/european-bee-eater/`。

资料与分类取舍见[五鸟核验记录](../../../../../docs/research/five-birds-kookaburra-to-robin-2026-09-17.md)。全球保护等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：黄色喉部和长嘴。
- `03-observation.webp`：飞起来捉虫。
- `04-observation.webp`：把食物带回枝头。
- `05-observation.webp`：沙坡上的洞口。
- `06-observation.webp`：和同伴停一停。

## 封面检查

首次收录，无旧封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 815, "top": 62, "right": 1330, "bottom": 979}`，大小 515×917 像素，中心位于源宽 69.8%。边界包含嘴、头顶、翅缘、可见脚趾和尾羽；枝条自然遮挡部分不补画。左 40% 为环境，主体四周有背景余量。

focalPoint 为 `{"x":0.7,"y":0.5}`；运行封面 SHA-256：`d258f527fc1e3e79fb7cebde6a0f997f7f435254f68562a7d05dff120f67d324`。首页和档案共用该封面。

按 2026-09-16 的全幅铺满规则验证：320×760、390×760、1366×768、1920×900、2560×900、3840×900 均用 object-fit: cover；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 的图像范围覆盖整个 hero。对应 hash 与完整源主体边界纳入轮播测试。边缘裁切是现有布局的行为，不声称移动端或宽屏中全身可见，也不沿用旧版 24 px 全身安全区结论。

## 限制与处理

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或等比例比较。图库局部景别可裁切尾部；脚趾可能被枝条遮挡，不用于逐趾计数。静态图片不证明鸣声或完整捕猎过程。封面已检查原始 PNG 和原尺寸 WebP；图库复查运行图片联系表。使用 npm run convert:webp 转换并检查解码、尺寸与哈希；验收后删除工作区临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `9cc091ae50176ef2b6a7fbc53af714564523d8a7b271060144a04ac92b9597b7` | `d258f527fc1e3e79fb7cebde6a0f997f7f435254f68562a7d05dff120f67d324` |
| 02 | `2a403a2d58e9d8ab6d9b50153f9e6dc66c53f5442d591f1cc65db78e604f7f07` | `ac3ac43c2385ea4532458b21f0b88b7b6bf8773b509eb41ea3312d026a81ff05` |
| 03 | `ac5beacfe7c0515cf24defbe698775caf9e8962703a5262f6671acb097995e67` | `bbdb0029d195d38530d9dc5b7463b2a048871f3ddda81bcf4b836f1fcc689bd5` |
| 04 | `fc4060db278eaefa61fa5c5838a5207f38a53d56f1b33e420b82e879f4d17e97` | `6616fcc08fcbe5ce9e314c4dfec0714c997cefe7a8e14e96eb1eab9ee5f4c5e0` |
| 05 | `66cbce7f0cb819826a8dcf110911659c53e70581c9815bf43fcf267b791916f4` | `18ea36748035b9d2c8a3dd3be2b534101ec1c53e357deeda2d3defacafb2335f` |
| 06 | `d1c237285442d5ca83516469a79d54326f17e6ba32605922f17125c24ff6346c` | `29c7455fea26c18e3739f8c845e0ffd2c0d6bb71fd72a23d434f67cf11075cf5` |

## 当前 hero 几何记录

主体大小指未截去部分前的投影尺寸（CSS px）。初始端点为 1.04 倍，前后进入端点 1.025 倍，前后离开端点 1.015 倍；各动画终点恢复 1 倍或淡出。六视口的这些端点均覆盖整个 hero，边缘允许裁切。

| 视口 | settled 主体大小 | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 382.23×680.59 | Pass |
| 390×760 | 382.23×680.59 | Pass |
| 1366×768 | 458.00×815.51 | Pass |
| 1920×900 | 643.75×1146.25 | Pass |
| 2560×900 | 858.33×1528.33 | Pass |
| 3840×900 | 1287.50×2292.50 | Pass |

2026-09-17：生成、目视检查和当前 hero 覆盖验收完成。分类与档案测试 191 项、轮播测试 277 项、图片转换测试 1 项、构建与子路径测试 3 项通过。未启动浏览器。
