# African Grey Parrot image set

2026-09-16 使用内置 image_gen 制作，一张封面和五张图库图片。最终提示见 [prompts.json](./prompts.json)，运行素材位于 `public/images/species/african-grey-parrot/`。

资料与分类取舍见[五鸟资料核验](../../../../../docs/research/five-birds-emu-to-lovebird-2026-09-16.md)。全球等级有来源支持，独立评估日期未核实，assessedYear 留空。

## 图库

- `02-observation.webp`：灰羽毛里的红尾巴。
- `03-observation.webp`：用嘴打开食物。
- `04-observation.webp`：住进树洞。
- `05-observation.webp`：和同伴待在一起。
- `06-observation.webp`：细看灰色羽毛。

## 封面验收

首次收录，无旧封面对照。源 PNG 与运行 WebP 均为 1536×1024；按原始分辨率目视检查两者。完整主体边界为 `{'left': 752, 'top': 86, 'right': 1435, 'bottom': 894}`，大小 683×808 源像素，中心位于源宽 71.2%。边界包含头顶、嘴尖、可见脚趾、翅缘及尾羽；草和树枝自然遮挡的部分不补画。左 40% 为环境，动物四周有背景余量。

focalPoint：`{"x":0.7,"y":0.5}`。运行封面 SHA-256：`550d9f9c46dc9485ed853f44eb8726fc227fc214ab44231b7f3e556a320a7e3d`。首页与物种档案使用同一封面，通过 coverSubjects 的完整主体边界拟合安全区。

已逐张查看生成图，复核运行 WebP 联系表及静态安全区检查图，未启动浏览器。几何验证涵盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave；主体动画只改变透明度，六端点几何相同。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 148.77×176.00 | 85.61 | 48.00 | 40.00 | Pass |
| 390x760 | 148.77×176.00 | 120.61 | 48.00 | 40.00 | Pass |
| 1366x768 | 361.79×428.00 | 96.00 | 150.27 | 48.00 | Pass |
| 1920x900 | 473.37×560.00 | 96.00 | 238.52 | 48.00 | Pass |
| 2560x900 | 473.37×560.00 | 96.00 | 404.92 | 48.00 | Pass |
| 3840x900 | 473.37×560.00 | 96.00 | 737.72 | 48.00 | Pass |

## 限制与压缩

图片为 AI 生成科学情景重建，不代表实拍、同一个体的连续行为或物种间等比例比较。近景与取食场景可裁去无关部位；脚趾可能受草或枝条遮挡，不用遮挡图逐一数趾。静态安全区图用于检查身体边界与页面区域的间距，不代替浏览器截图。图库实际景别可能比提示更宽，以最终图及配文为准。

使用 npm run convert:webp 首次转换，检查解码、尺寸和哈希。不重复压缩运行 WebP；验收后清理临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `a38ad462f1f7b67112da59efa968492934219fb43b6465d4946d8a5978f2e379` | `550d9f9c46dc9485ed853f44eb8726fc227fc214ab44231b7f3e556a320a7e3d` |
| 02 | `a418b721ee161b3b570c34d8b0c062ffdce3e0920255f77f5d2d702b0748229a` | `750f0ae49c50b14d41e49e1760edeb141da44a355fa744d6a625f05d7a2cf3be` |
| 03 | `228ac9e8bb7d410445ba2f5dac70052ae6c9300322243f2fbb7fd55bac180f0a` | `23673001d1e4651acffb1a81469c43a53c607766913274cea4e1535402f22aa4` |
| 04 | `25253a77b5af4c4c1095b9ba3862ad708b57a6cf6e0a22d826b42fce5f765310` | `9ad43bcff0c3eb253766ce7bec444251d8324b7ded746c90209d17ad3d274ec3` |
| 05 | `86de2f51b0e57fb4c52ab57fd1d2535f3dd76249ca4528a811f5908550cc0c3f` | `c3181fed66b1a962b2a82da99eac1eae5ef0b7491bc516ee149bf340890c9eaf` |
| 06 | `cd50092facc5101e90a8917784a5d4ce71ebc405e582ab9de48755e86a975e9e` | `9694aab0e1cdfaed1b55aa592b0f1551b6da3f35def96d0180b5543de36c8b3c` |

## 最终验证

2026-09-16：生成完成、目视检查完成、封面验收通过。分类与档案测试 190 项、轮播测试 272 项、图片转换测试 1 项、生产构建与子路径测试 3 项通过。构建包含 TypeScript 检查；每种六张 WebP 的尺寸、解码、独立哈希与提示词文件名已核对。
