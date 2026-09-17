# Common Raven image set

2026-09-17 使用内置 image_gen 生成一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行文件位于 `public/images/species/common-raven/`。

资料与分类取舍见[五鸟核验记录](../../../../../docs/research/five-birds-kookaburra-to-robin-2026-09-17.md)。全球保护等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：黑色嘴巴和喉羽。
- `03-observation.webp`：张开翅膀看尾巴。
- `04-observation.webp`：在地上寻找食物。
- `05-observation.webp`：岩壁上的枝条巢。
- `06-observation.webp`：两只渡鸦。

## 封面检查

首次收录，无旧封面。源 PNG 与运行 WebP 均为 1536×1024，按原始分辨率目视检查。完整主体边界为 `{"left": 710, "top": 60, "right": 1440, "bottom": 910}`，大小 730×850 像素，中心位于源宽 70.0%。边界包含嘴、头顶、翅缘、可见脚趾和尾羽；枝条自然遮挡部分不补画。左 40% 为环境，主体四周有背景余量。

focalPoint 为 `{"x":0.7,"y":0.5}`；运行封面 SHA-256：`69fd429bfac8357fcf67c1f3f7333cbfdbfce35368d249331b844670ef0837d9`。首页和档案共用该封面。

按 2026-09-16 的全幅铺满规则验证：320×760、390×760、1366×768、1920×900、2560×900、3840×900 均用 object-fit: cover；settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 的图像范围覆盖整个 hero。对应 hash 与完整源主体边界纳入轮播测试。边缘裁切是现有布局的行为，不声称移动端或宽屏中全身可见，也不沿用旧版 24 px 全身安全区结论。

## 限制与处理

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或等比例比较。图库局部景别可裁切尾部；脚趾可能被枝条遮挡，不用于逐趾计数。静态图片不证明鸣声或完整捕猎过程。封面已检查原始 PNG 和原尺寸 WebP；图库复查运行图片联系表。使用 npm run convert:webp 转换并检查解码、尺寸与哈希；验收后删除工作区临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `02e3c7b4e266a6012c2659fef5de3163b6ffa584bbf592d9e3c29e8651ea97de` | `69fd429bfac8357fcf67c1f3f7333cbfdbfce35368d249331b844670ef0837d9` |
| 02 | `7ce14c3656fb6d38ba1c2d07c4f83b26f37449f1e7480cb37d0e54926548a4b0` | `26c31186cbcbffca734c4f29c95735981204eb466fa1fe8d0ac8b6851506b229` |
| 03 | `78cf0f04b43d287b56d8c70e59fd985ec827c23b561b7fb22d19717ea6166f27` | `0c46d9c62d3c77e578e1783a8f905ad348923e555a55e760109b4ee83ab09a11` |
| 04 | `d80d0134b1d09dd5c177edd6f7a17938941e897b45c10b94867233e53422fb0b` | `db9b8fd857f363e55a6dc184008380666863eb3cdbd6566e2cb45991e6fcbcac` |
| 05 | `6b6716fb88ca875e4d5f2421c97fbef39c34d33cfa7a3ed61b32c4ab4711fc6d` | `9d1ff1918c02736dacda64efb9dfeecc06b86cdfd3a005c29d3e0a06f564a0e1` |
| 06 | `7fc8292bb7e3392fd9f36ab5a3659add6b6e5a9460c3849451021a860fba905a` | `1728fb0ff10b663cee45b9f92c755162f960c39547454741564b14b45a687fc0` |

## 当前 hero 几何记录

主体大小指未截去部分前的投影尺寸（CSS px）。初始端点为 1.04 倍，前后进入端点 1.025 倍，前后离开端点 1.015 倍；各动画终点恢复 1 倍或淡出。六视口的这些端点均覆盖整个 hero，边缘允许裁切。

| 视口 | settled 主体大小 | 六状态覆盖 |
| --- | --- | --- |
| 320×760 | 541.80×630.86 | Pass |
| 390×760 | 541.80×630.86 | Pass |
| 1366×768 | 649.21×755.92 | Pass |
| 1920×900 | 912.50×1062.50 | Pass |
| 2560×900 | 1216.67×1416.67 | Pass |
| 3840×900 | 1825.00×2125.00 | Pass |

2026-09-17：生成、目视检查和当前 hero 覆盖验收完成。分类与档案测试 191 项、轮播测试 277 项、图片转换测试 1 项、构建与子路径测试 3 项通过。未启动浏览器。
