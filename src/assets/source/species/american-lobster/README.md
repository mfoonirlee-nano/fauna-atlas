# American Lobster image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/american-lobster/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验见 [五物种资料核验](../../../../../docs/research/five-animals-lobster-to-leopard-2026-09-14.md)。

## 内容来源

- [NOAA Fisheries：美洲螯龙虾](https://www.fisheries.noaa.gov/species/american-lobster)
- [Animal Diversity Web：Homarus americanus](https://animaldiversity.org/accounts/Homarus_americanus/)
- [Encyclopedia of Life：IUCN 转载数据](https://media.eol.org/pages/46505674/data?resource_id=5)

IUCN 数据转载记录为无危、趋势稳定；这不代表每个海区的资源状况相同。渔业管理会限制捕捞规格，并保护抱卵雌虾。独立评估日期未单独核实，未填 assessedYear。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：形状不同的大螯。美洲螯龙虾前方一宽一窄的两只大螯。
- `03-observation.webp`：沿海底行走。美洲螯龙虾在石块之间的海底行走。
- `04-observation.webp`：岩缝里的藏身处。美洲螯龙虾从岩石缝隙向外伸出触角和螯。
- `05-observation.webp`：一节节的腹部与尾扇。美洲螯龙虾的分节腹部和展开的尾扇。
- `06-observation.webp`：腹部下面的卵。雌性美洲螯龙虾腹部下方附着成团的卵。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量完整主体边界：left=640, top=17, right=1495, bottom=949，主体大小 855x932 源像素，中心位于源宽 69.5%。新物种没有旧封面；左侧 40% 留作环境与文字区域。

focalPoint 为 `{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 按完整主体边界拟合同一 canonical cover；运行 WebP SHA-256：`60f4e516432e1aa57fc9e873a904bd40a58d3959502ea43d5b54b5cf449fa57c`。

六视口检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。现有 CSS 仅改变透明度，六端点几何相同。下表采用未取整 CSS 像素。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 161.46x176.00 | 79.27 | 48.00 | 40.00 | Pass |
| 390x760 | 161.46x176.00 | 114.27 | 48.00 | 40.00 | Pass |
| 1366x768 | 392.64x428.00 | 96.00 | 134.84 | 48.00 | Pass |
| 1920x900 | 513.73x560.00 | 96.00 | 218.33 | 48.00 | Pass |
| 2560x900 | 513.73x560.00 | 96.00 | 384.73 | 48.00 | Pass |
| 3840x900 | 513.73x560.00 | 96.00 | 717.53 | 48.00 | Pass |

静态几何合成图标注完整主体、文字区和面板区；未启动浏览器。完整主体在六个视口的全部端点均保持至少 24 CSS px 安全间距，并在该约束下填满主体容器的一维。

## 目视检查与限制

局部图裁掉部分触角或身体，分别用于观察螯、尾扇和卵；抱卵图不用于推算产卵量。封面触角、足端、双螯和尾扇完整。首次封面的左触角侵入文字区，已编辑重构触角走向；最终提示词见 prompts.json。

已检查生成源图与运行封面原始分辨率，并检查运行图集联系表和六视口静态几何合成图。主体构图及封面安全间距通过验收。

## 压缩与哈希

使用 npm run convert:webp 做首次 WebP 转换，并检查尺寸和解码。临时 PNG 在验收后清理，保留六张 WebP、最终提示词和哈希。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `c2273c44afdc1f6b955dd27e1a00c31a1316cd6b3d132e75caa2773ee1e420d1` | `60f4e516432e1aa57fc9e873a904bd40a58d3959502ea43d5b54b5cf449fa57c` |
| 02 | `1d6ef88033fc9c5561e25d86ae448fceb5cb48172446101af218774eca81d6f9` | `556fcf5942fbd3518695abb5e1c9241e171ce0a1f4ea0e07b07b4745e4b25e2a` |
| 03 | `f96f1fde4b4979bf94ecfeb3141238e8728cf3f83ab6084c5c08635271e24d32` | `d4cd70516049ea692f627059d3cfb63f22a3e3b3743219148996e4c4abfebbc9` |
| 04 | `0afc1ed938a9559c62cbd8a4a03cfa58626e3212574fcbbb8ff3b39b8a5f6dd6` | `e67bb74a7ca687beb9e22a5ac2471aa7e4dd879e94cffa21debaec371ac775aa` |
| 05 | `3da5d6a7db7e2eeb90e416eb108940245324bb352f4432bf37ffaccd28d0040e` | `d7dc4f012e359274955f8a3d45a0f2d785cc1cea139b1c7b58442ce409decf01` |
| 06 | `a4b19c3007d91a570bd3a2559c36cec2164cf04b8e94db73d501c43763646f98` | `804dd3baaf87c3d318841648658dd2f93c9bf79f651a15c62006ad3ad0d08d87` |

## 最终验证

2026-09-14 完成静态验收，测试共 465 项通过。分类与物种资源、轮播完整主体与六视口端点检查通过；生产构建包含 TypeScript 检查。首屏脚本体积检查首次失败后，目录序列化压缩了保护等级、分布与分类字段；随后 test:dist-subpath 三项复测通过，包含全部档案独立加载与目录数据无损还原。首屏入口脚本 344600 bytes，低于 350000 bytes 限额。未启动浏览器。
