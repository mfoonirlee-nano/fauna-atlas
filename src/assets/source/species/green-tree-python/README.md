# Green Tree Python image set

2026-09-14 使用内置 image_gen 制作一张封面和五张观察图。最终提示见 [prompts.json](./prompts.json)，运行资产位于 `public/images/species/green-tree-python/`。

图片为 AI 生成科学情景重建，不代表实拍地点、精确测量或连续行为。内容依据见[五物种资料核验](../../../../../docs/research/five-animals-tree-frog-to-arctic-fox-2026-09-14.md)。

所列资料支持档案中的全球等级，但未单独核实评估日期，assessedYear 留空；不以网页访问日或等级调整公告年份代替评估年份。

## 图集

- `01-cover.webp`：完整主体与生活环境。
- `02-observation.webp`：搁在身体上的头。
- `03-observation.webp`：树枝两侧的线圈。
- `04-observation.webp`：黄色的幼蟒。
- `05-observation.webp`：跨过枝条的身体。
- `06-observation.webp`：夜间的伏击姿势。

## 封面验收

源 PNG 与运行 WebP 均为 1536x1024。按原始分辨率检查两者后，目测完整主体边界为 `{"left": 710, "top": 106, "right": 1458, "bottom": 775}`，大小 748x669 源像素，中心位于源宽 70.6%。边界包含可见四肢、趾端或鳍尖、耳尖及尾部等外缘，自然遮挡的部分不虚构轮廓。左 40% 保留环境，主体与源图边缘之间有背景。

初版主体外缘进入左侧留白，已用内置 image_gen 调整位置后重新测量；最终编辑提示保存在 prompts.json。

提交的 focalPoint 为 `{"x":0.7,"y":0.5}`。运行封面 SHA-256：`2cc460a3802ed2c251cfea9e15ee63decaf911886792f8d5f6d5a01c0a44c712`。轮播沿用 hero-subject-frame，以完整主体边界拟合同一 canonical cover。

静态几何检查覆盖六视口的 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave。当前 CSS 仅改变透明度，六端点几何相同。检查完整主体与视口、左侧文字区和轮播面板的间距，同时生成静态区域叠加图供目视复核；未启动浏览器。单位为 CSS px。

| Viewport | Hero 主体大小 | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 196.78x176.00 | 61.61 | 48.00 | 40.00 | Pass |
| 390x760 | 196.78x176.00 | 96.61 | 48.00 | 40.00 | Pass |
| 1366x768 | 478.54x428.00 | 96.00 | 91.89 | 48.00 | Pass |
| 1920x900 | 626.13x560.00 | 96.00 | 162.14 | 48.00 | Pass |
| 2560x900 | 626.13x560.00 | 96.00 | 328.54 | 48.00 | Pass |
| 3840x900 | 626.13x560.00 | 96.00 | 661.34 | 48.00 | Pass |

完整主体在六视口的全部端点保持至少 24 CSS px 间距，并在安全区内填满主体容器的一维。

## 目视检查与限制

采用黄色幼体与绿色成体，不混入北部近似种的红色幼体；盘曲处有自然遮挡，不把分段可见躯干解释成多条蛇。

已检查源图和运行封面的原始分辨率、图集联系表及六视口静态区域叠加图。

## 压缩与哈希

使用 `npm run convert:webp` 首次转换并验证尺寸与解码，不重复压缩运行 WebP。临时 PNG 在验收后清理。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `8b5ab9b52d7cbab0f2d86c509f09a2ede727dc81fe9ca4b7596586c32a832aba` | `2cc460a3802ed2c251cfea9e15ee63decaf911886792f8d5f6d5a01c0a44c712` |
| 02 | `aae15a9614f6f01081c97f9250c024be5caab55aaad0fd6a33a86d7f8b5282c7` | `4b553021e4c355946ddc419d23bb51d6b591d7114529fe6eea22e501c6c2a348` |
| 03 | `79ff13a618a4e38b83c16462f5dd9cffc2b710432fd9f9c8974701ac7ff04ded` | `67015560843ffe0e3c07ccf0cdc031019ec16046b04de6a2348fc3cd2293ef47` |
| 04 | `fae62416041a6903c096447c710545f9ad01671fb0ab10f194580afdc7784a89` | `cdd4a255f40622287af85d6d1a7060d49f477141e26cfc34b314b9e08495f59b` |
| 05 | `7594afd48daf3d9950c583be7108ee233a618ab4c123fc9c0ac9e598e5507025` | `be4bca92a2d06f9653a4ac5d32eaea1d2ed7753c84cc9611b4a4be38b840487c` |
| 06 | `a19c9ec7a9ebb71574f9126bdec849e8d631a1587dc0292a790811e514b0d7c4` | `a2370c0bca2bce0270076d01b4afc13404c0799819bbeb3792c2e8a2348f51f2` |

## 最终验证

2026-09-14：分类与档案测试 186 项、轮播测试 247 项、图片转换测试 1 项、构建与子路径测试 3 项通过。分类测试首次发现评估年份缺失说明未登记，补齐名单后该项复测通过。生产构建含 TypeScript 检查；六视口及全部动画端点的完整主体检查通过，未启动浏览器。每种保留六张独立 WebP，临时 PNG 已清理。
