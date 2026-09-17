# European Robin image set

2026-09-17 使用内置 image_gen 生成一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行文件位于 `public/images/species/european-robin/`。

资料与分类取舍见[五鸟核验记录](../../../../../docs/research/five-birds-kookaburra-to-robin-2026-09-17.md)。全球保护等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：橙红色的胸前。
- `03-observation.webp`：落叶间找食物。
- `04-observation.webp`：张开嘴唱歌。
- `05-observation.webp`：幼鸟还没有红胸。
- `06-observation.webp`：浅水里洗羽毛。

## 封面检查

首次收录，无旧封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 785, "top": 135, "right": 1385, "bottom": 843}`，大小 600×708 像素，中心位于源宽 70.6%。边界包含嘴、头顶、翅缘、可见脚趾和尾羽；枝条自然遮挡部分不补画。左 40% 为环境，主体四周有背景余量。

focalPoint 为 `{"x":0.7,"y":0.5}`；运行封面 SHA-256：`52fdb059ca1130577f4a8e902da0673d1f8dd8c6da1a3e4ef305b5d25eeedd6c`。首页和档案共用该封面。

按 2026-09-16 的全幅铺满规则验证：320×760、390×760、1366×768、1920×900、2560×900、3840×900 均用 object-fit: cover；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 的图像范围覆盖整个 hero。对应 hash 与完整源主体边界纳入轮播测试。边缘裁切是现有布局的行为，不声称移动端或宽屏中全身可见，也不沿用旧版 24 px 全身安全区结论。

## 限制与处理

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或等比例比较。图库局部景别可裁切尾部；脚趾可能被枝条遮挡，不用于逐趾计数。静态图片不证明鸣声或完整捕猎过程。封面已检查原始 PNG 和原尺寸 WebP；图库复查运行图片联系表。使用 npm run convert:webp 转换并检查解码、尺寸与哈希；验收后删除工作区临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `4cf6a533c89d3311a1d8be42dc1a7de59b1108a3e5ab02050ef6ae0c10a8089f` | `52fdb059ca1130577f4a8e902da0673d1f8dd8c6da1a3e4ef305b5d25eeedd6c` |
| 02 | `373e4e353cce0c1fee5df992dd8561ad51a8b44a28691627d1d83dd6e23dafeb` | `1597f406cbaaa2677ded68e4f7e2ba0491801e86b99d32daa6e36d5bd22e3754` |
| 03 | `014fd868f19c68811b4cb80606aa94d6cb3adea6cfb822e072e48f8a3b45ff55` | `93277306b3f7b21b9e1307bdef2ed24837d9d81d4be2a839a340b903f0d25029` |
| 04 | `20f02401acdba35475a576101a003079ef6c3486769ebfa8ab234b5d208533ed` | `6c4f978f59bf5e9c408a2ba37040cea6a2126d43c01067288e831a9ef329f6ec` |
| 05 | `bbd8ced95b9649c00cdafc6f6190016d223ee832631fbe73aa1fe895a75e4a66` | `be5ef51c6c2200384427d78d333d9a03d8a777baa9a38cbf4c2cf32804e11812` |
| 06 | `0fd43f4921f8a0270c1625373925f0915d278616ecc6c96456a634f558727935` | `41170c66e85110344d176249877d83b99729e502db3f99638f525c58aa2af57e` |

## 当前 hero 几何记录

主体大小指未截去部分前的投影尺寸（CSS px）。初始端点为 1.04 倍，前后进入端点 1.025 倍，前后离开端点 1.015 倍；各动画终点恢复 1 倍或淡出。六视口的这些端点均覆盖整个 hero，边缘允许裁切。

| 视口 | settled 主体大小 | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 445.31×525.47 | Pass |
| 390×760 | 445.31×525.47 | Pass |
| 1366×768 | 533.59×629.64 | Pass |
| 1920×900 | 750.00×885.00 | Pass |
| 2560×900 | 1000.00×1180.00 | Pass |
| 3840×900 | 1500.00×1770.00 | Pass |

2026-09-17：生成、目视检查和当前 hero 覆盖验收完成。分类与档案测试 191 项、轮播测试 277 项、图片转换测试 1 项、构建与子路径测试 3 项通过。未启动浏览器。
