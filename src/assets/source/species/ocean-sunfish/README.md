# Ocean Sunfish image set

2026-09-14 使用内置 image_gen 制作一张封面与五张观察图。最终提示词及编辑原因见 [prompts.json](./prompts.json)。运行资产位于 `public/images/species/ocean-sunfish/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。资料核验及分类、保护状态边界见 [五物种资料核验](../../../../../docs/research/five-animals-2026-09-14.md)。

## 内容来源

- [Monterey Bay Aquarium：翻车鱼形态、食物与全球等级](https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish)
- [Australian Museum：Mola mola 辨识与分类](https://australian.museum/learn/animals/fishes/ocean-sunfish-mola-mola/)
- [Marine Biology：翻车鱼海面行为与清洁互动](https://pmc.ncbi.nlm.nih.gov/articles/PMC3460849/)
- [Monterey Bay Aquarium：翻车鱼全球易危](https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish)

机构资料支持全球 VU；未确认独立评估日期和全球趋势。

## 图集

- `01-cover.webp`：完整身体与生活环境。
- `02-observation.webp`：上下伸出的鱼鳍。翻车鱼侧面完整显示背鳍和臀鳍。
- `03-observation.webp`：短宽的舵鳍。翻车鱼身体后部呈短宽的波浪形边缘。
- `04-observation.webp`：海面附近侧身。翻车鱼在海面附近侧身停留。
- `05-observation.webp`：朝向水母。翻车鱼游近一只小水母。
- `06-observation.webp`：小鱼清洁身体。几条小型清洁鱼靠近翻车鱼体表。

## 封面验收

源图与运行 WebP 均为 1536x1024。目视测量的完整主体边界 `{'left': 668, 'top': 33, 'right': 1434, 'bottom': 984}`，主体大小 766x951 源像素，中心位于源宽 68.4%。边界包含可见尾端、足端、鳍尖、吻齿或触角。新物种无旧封面。左侧 40% 保留环境，主体中心位于右侧 60% 以外。

focalPoint 为 `{"x":0.7,"y":0.5}`；轮播使用现有 hero-subject-frame 按完整主体边界适配同一封面。运行封面 SHA-256：`69d9fd6960c9492e583c676e986d543c94f72f8757930cfac641a8084f8754a2`。

六个视口均检查 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。下表以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320x760 | 141.76x176.00 | 89.12 | 48.00 | 40.00 | Pass |
| 390x760 | 141.76x176.00 | 124.12 | 48.00 | 40.00 | Pass |
| 1366x768 | 344.74x428.00 | 96.00 | 158.79 | 48.00 | Pass |
| 1920x900 | 451.06x560.00 | 96.00 | 249.67 | 48.00 | Pass |
| 2560x900 | 451.06x560.00 | 96.00 | 416.07 | 48.00 | Pass |
| 3840x900 | 451.06x560.00 | 96.00 | 748.87 | 48.00 | Pass |

静态几何合成图按现有主体容器比例拟合 canonical cover，标出完整主体、文字区与面板区；它不是浏览器截图。所有目标视口中，完整主体与视口、文字区和面板保持至少 24 CSS px 间距。

## 目视记录与限制

观察图 03 有意展示后部局部；清洁鱼为情景重建，不用于清洁鱼或寄生虫鉴定。

已检查最终生成源图和运行封面的原始分辨率，复核运行图集联系表及六视口静态几何合成图。完整主体、关键颜色和观察场景通过目视检查。

## 压缩与哈希

使用 `npm run convert:webp` 进行首次 WebP 转换并检查解码与尺寸，不重复压缩已接受的 WebP。已清理仓库中的临时 PNG；保留六张运行 WebP、提示词和哈希记录。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `39d16900fd015bfae5fae99e690808b6444d0b9fa43f49693f430803ca1d6c2a` | `69d9fd6960c9492e583c676e986d543c94f72f8757930cfac641a8084f8754a2` |
| 02 | `a2ef9730c138cc4392cac67878447d025403c91a4f211aa1bb3c5d6baa659092` | `d4d027a9abb2c3bc9ec5603026ef23848d6c20034b7ac786679935d43540f286` |
| 03 | `65b20b5be6becfc455ddfa880e2e49cab406b32c9f65bfbc9db37c9385f639b6` | `55b0eeebb20f3a4f781f5cef75e6970069210b9130be01325de1cb5f0b14733f` |
| 04 | `8161899d80090f9f548ce06478f610c34829e7611ba106ac7f2f6efbf4b8d4cb` | `1589fa80318f4adf986ea5bd4ac3605f40a7d5c0d6d3bff35fc222914ab56c78` |
| 05 | `30bdc3ded9a344f5edb381df09842239af08c236766b1d9fa6d94b1bb5504179` | `8a6d95a420b208c92b5a3ad70fd4e57e7b48a9884d1d5fe9c048b3be892712ab` |
| 06 | `9516e1dd43a23cd6fcef44adfb66156a51e422b915c8d1dedd23e3f2d71286e5` | `d88ad2d2c7d9bea95f2c1dd05d90888869c1f77ce8e7d1e126decd8a7e883926` |

## 最终验证

2026-09-14 完成静态验收。测试共 459 项通过；首次全套运行发现的首屏脚本体积超限已通过目录字段压缩修复，随后 `npm run test:dist-subpath` 三项复测通过，包含 TypeScript 检查、生产构建、子路径资源访问、脚本体积限制与目录数据无损还原。未启动浏览器。
