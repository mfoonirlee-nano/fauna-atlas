# White's Tree Frog image set

2026-09-14 使用内置 image_gen 生成一张封面与五张观察图。最终提示词和修改记录见 [prompts.json](./prompts.json)。运行资产：`public/images/species/whites-tree-frog/`。

AI 生成科学情景重建，不代表实拍地点、连续行为或精确测量。分类差异与字段依据见 [五物种资料核验](../../../../../docs/research/five-herps-2026-09-14.md)。

## 内容来源

- [AMNH Amphibian Species of the World：现行属名与科级归属](https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pelodryadidae/Pelodryas/Pelodryas-caerulea)
- [Australian Museum：外形、繁殖与全球等级](https://australian.museum/learn/animals/frogs/green-tree-frog/)
- [Perth Zoo：白氏树蛙生活习性](https://perthzoo.wa.gov.au/animal/green-tree-frog)
- [Australian Museum：悉尼地区种群减少](https://australian.museum/blog/amri-news/aussie-green-tree-frog-disappearing-act/)

来源支持全球 LC；独立评估日期及全球趋势未核实，未填 assessedYear，trend 使用 unknown。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：贴住树枝的趾端。白氏树蛙前脚握住树枝，圆盘状趾端可见。
- `03-observation.webp`：树洞里休息。白氏树蛙在白天藏身树洞。
- `04-observation.webp`：夜里朝向小蛾。白氏树蛙在夜间枝条上朝向一只小蛾。
- `05-observation.webp`：水边鸣叫。雄性白氏树蛙在雨后水塘旁鸣叫，喉下鸣囊鼓起。
- `06-observation.webp`：褐色背部的个体。一只背部呈橄榄褐色的白氏树蛙停在树枝上。

## 封面验收

源图与运行 WebP 为 1536×1024。完整主体边界 `{"left": 680, "top": 154, "right": 1424, "bottom": 840}` 包含头部、可见趾端、尾端或颈褶等外部特征，主体大小 744×686 源像素，中心位于源宽 68.5%。新物种无旧封面。已检查最终源图与运行封面的原始分辨率。

focalPoint：`{"x":0.7,"y":0.5}`。轮播通过现有 hero-subject-frame 适配同一封面，以完整主体边界计算最大显示尺寸。运行封面 SHA-256：`073227354a300a3b5c49e55fa2bdaa32c0c039956d131e610e03042825951303`。

以下六视口覆盖 settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 六端点。当前 CSS 只改变透明度，六端点几何相同。间距以未取整 CSS 像素计算。

| Viewport | Hero 主体大小（CSS px） | 视口最小间距 | 文字间距 | 面板间距 | 六端点 |
| --- | --- | --- | --- | --- | --- |
| 320×760 | 190.88×176.00 | 64.56 | 48.00 | 40.00 | Pass |
| 390×760 | 190.88×176.00 | 99.56 | 48.00 | 40.00 | Pass |
| 1366×768 | 464.19×428.00 | 96.00 | 99.07 | 48.00 | Pass |
| 1920×900 | 607.35×560.00 | 96.00 | 171.53 | 48.00 | Pass |
| 2560×900 | 607.35×560.00 | 96.00 | 337.93 | 48.00 | Pass |
| 3840×900 | 607.35×560.00 | 96.00 | 670.73 | 48.00 | Pass |

静态几何合成图用于检查完整主体与安全区域，不作为浏览器或字体排版截图。图集检查以外形、动作、场景和裁边为范围；细小鳞片和趾垫内部结构不作为精确解剖图使用。

## 压缩与哈希

使用 npm run convert:webp 转换，并检查解码与尺寸。保留六张 WebP，以下源哈希记录最终临时 PNG。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `b257986cc5c353052b5d2598f4493460bcd5abc9c1c38b133994bb7cb1e15a7a` | `073227354a300a3b5c49e55fa2bdaa32c0c039956d131e610e03042825951303` |
| 02 | `74075996ba42e802527cfb2a15b9a0fa4041f7bf722ac2aed95b3c3353e1c00b` | `7ff538fbe37d24876d90084c4f0d7b1192345c9e03f9c66054c0d3802db59e7b` |
| 03 | `f64774305f5c205bfa42f4ab321d7d2ccb760ceb52a8db18ef2eaf3c058f618f` | `a12ad0e9568e28cc679b7128f69ff502cfa71e1e9bf3704b2de0d2a87898c54e` |
| 04 | `612f5be4cd93713e0c2e917129c7b243d1c10173a87e21308d93b976095e547d` | `dcdf15ce3352f4598b793b25106269180e85b37de3c4775263d0a1e33ab11f58` |
| 05 | `8bac7f45a174a5ae531934726daafc154a1cdee018d368ea94e5d5cae2ceab25` | `765c02750e6099932f5c56fcb5c5d9b19699a92e495573c0ae276e36d8bf71bd` |
| 06 | `6f6496cca0322f8c3d6979a9cf8a3b04cbf614c5f1d84deecc2721e08f515bcd` | `f33e489345a9049be2bb63efe8ec6066320b4fbdcec4d1abd6b42a19b1afc4d4` |

## 目视记录与边界

封面和观察图展示圆盘状趾端；脚趾因姿态与树枝自然遮挡，不用于精确计数。绿色与褐色场景分别生成，未宣称同一个体连续变色。

已检查临时源图、原始分辨率运行封面、运行图集联系表及六视口静态几何合成图。封面主体与视口、文字区和面板均保持至少 24 CSS px 间距。已核对最终源图与运行文件哈希，清理仓库内的临时 PNG；保留生成工具目录原件。

## 仓库验证

2026-09-14：npm test 全部 453 项通过，其中分类与档案 183 项、轮播 232 项、生产子路径与数据还原 3 项。类型检查和生产构建通过。30 张 WebP 的解码、1536×1024 尺寸与独立哈希通过检查，每种恰好保留六张图片。未启动 GUI 或无头浏览器。
