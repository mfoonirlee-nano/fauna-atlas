# Toucan Barbet image set

2026-09-17 使用内置 image_gen 生成一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行文件位于 `public/images/species/toucan-barbet/`。

资料与分类取舍见[五鸟核验记录](../../../../../docs/research/five-birds-kookaburra-to-robin-2026-09-17.md)。全球保护等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：粗嘴和白条纹。
- `03-observation.webp`：枝头有果子。
- `04-observation.webp`：抓住长苔藓的枝条。
- `05-observation.webp`：树干上的洞。
- `06-observation.webp`：森林里的同伴。

## 封面检查

首次收录，无旧封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 687, "top": 62, "right": 1310, "bottom": 968}`，大小 623×906 像素，中心位于源宽 65.0%。边界包含嘴、头顶、翅缘、可见脚趾和尾羽；枝条自然遮挡部分不补画。左 40% 为环境，主体四周有背景余量。

focalPoint 为 `{"x":0.7,"y":0.5}`；运行封面 SHA-256：`674e397c6d7c7cbe03b9d5bd5cd129f611f181d3892ecf6e08f968d915d12601`。首页和档案共用该封面。

按 2026-09-16 的全幅铺满规则验证：320×760、390×760、1366×768、1920×900、2560×900、3840×900 均用 object-fit: cover；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 的图像范围覆盖整个 hero。对应 hash 与完整源主体边界纳入轮播测试。边缘裁切是现有布局的行为，不声称移动端或宽屏中全身可见，也不沿用旧版 24 px 全身安全区结论。

## 限制与处理

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或等比例比较。图库局部景别可裁切尾部；脚趾可能被枝条遮挡，不用于逐趾计数。静态图片不证明鸣声或完整捕猎过程。封面已检查原始 PNG 和原尺寸 WebP；图库复查运行图片联系表。使用 npm run convert:webp 转换并检查解码、尺寸与哈希；验收后删除工作区临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `bd0a44327fb3693e0d1bb2aa40e7671559a4169d2fd058407cc29c5815293e6d` | `674e397c6d7c7cbe03b9d5bd5cd129f611f181d3892ecf6e08f968d915d12601` |
| 02 | `50f2907358703c1200df193ce34193a6f0aa28cb1cf0c2559e53b9494e124f7a` | `582ff0ff7185482d43b32941413ea9a15aaf9961d5944558538d54a563294743` |
| 03 | `e64c417a98489037bc0f670b0c77582792144a935a9e7857873d6d26e34431e0` | `a960015a516a3ab5935b48afa667808e52a9c7e156bc7e72cbabe3f3fac51f3d` |
| 04 | `ba2f0bc0544a995d43b889b646008621da200c327a46a31715a8825df0f4fbe8` | `0827efef1196459093bd15b4d7cdad2b5258728fb4e0864164537b1689e55bc8` |
| 05 | `e18cd19ad6c1da97649da7dd79d750ed105476aaa961ef7bea61bfba717d9145` | `91cad0eb3ccd0effe8b4624ba27631f231e43892f59c1e7e2775d14ee8624273` |
| 06 | `7481ff44db4ee0c27327d5e9a5b54c0f20aa420e657c9e8ad439418aa1edbeee` | `b192fe2c8a7ea2ffcd2c5b5642484ce8aafb9ec5b7920d0dfb1e5830aed006b2` |

## 当前 hero 几何记录

主体大小指未截去部分前的投影尺寸（CSS px）。初始端点为 1.04 倍，前后进入端点 1.025 倍，前后离开端点 1.015 倍；各动画终点恢复 1 倍或淡出。六视口的这些端点均覆盖整个 hero，边缘允许裁切。

| 视口 | settled 主体大小 | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 462.38×672.42 | Pass |
| 390×760 | 462.38×672.42 | Pass |
| 1366×768 | 554.05×805.73 | Pass |
| 1920×900 | 778.75×1132.50 | Pass |
| 2560×900 | 1038.33×1510.00 | Pass |
| 3840×900 | 1557.50×2265.00 | Pass |

2026-09-17：生成、目视检查和当前 hero 覆盖验收完成。分类与档案测试 191 项、轮播测试 277 项、图片转换测试 1 项、构建与子路径测试 3 项通过。未启动浏览器。
