# Common Starfish image set

2026-09-09 使用内置 imagegen 生成并调整六张 1536 × 1024 图片。保留运行图 `public/images/species/common-starfish/`，生成及编辑提示词见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应实拍地点或野外记录。

## 内容依据

- [ADW — 普通海星分类与生活](https://animaldiversity.org/accounts/Asterias_rubens/)
- [MarLIN — 普通海星形态、分布与生态](https://www.marlin.ac.uk/species/detail/1194)
- [Macduff Aquarium — 普通海星未评估状态](https://www.macduff-aquarium.org.uk/explore/fish-finder/common-starfish)

访问日期：2026-09-09。分类沿用仓库棘皮动物门、海星纲口径，新增钳棘目／海盘车科／海盘车属，ADW 支持属种与科目，MarLIN 支持形态和生态。Macduff Aquarium 明确列 NE。10–30 cm 是含腕的常见直径，不填 adultLengthCm。

本次未核实独立全球趋势字段，trend=unknown；不从单个地区或饲养资料推算全球数量。

## 图片范围与限制

封面为小主体远景；身体细节见观察图。03 管足情景重建夸大了可见性，不用于计数、组织结构或精确比例判断；05 为不同颜色个体，不是同一个体连续变色。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。已按原始分辨率查看最终临时输入与运行封面；主体完整，左 40% 以环境背景为主。目测保守完整可见主体边界：`{"left": 1042, "top": 329, "right": 1172, "bottom": 424}`，包括五条腕及腕尖外缘。主体中心位于宽度的 72.1%，不是由 focalPoint 推定。

提交的 focalPoint：`{"x": 0.74, "y": 0.33}`。运行封面 SHA-256：`9140a9e61a050c6666ea2df7ff25c34b86dbf53c11c79fcf6351d9a381e4ca47`。

以下按现有 CSS 的 object-fit、object-position、动画变换和正文／轮播面板占位矩形计算完整主体的最小间距（CSS 像素），每项至少 24。覆盖视口边缘与组件安全区域，未使用浏览器。测试把运行封面哈希与完整主体边界绑定。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 56.18 | Pass 50.75 | Pass 38.38 | Pass 54.14 | Pass 52.78 | Pass 42.61 |
| 390x760 | Pass 56.18 | Pass 50.75 | Pass 52.66 | Pass 54.14 | Pass 52.78 | Pass 54.14 |
| 1366x768 | Pass 94.67 | Pass 102.17 | Pass 101.36 | Pass 43.69 | Pass 32.47 | Pass 100.82 |
| 1920x900 | Pass 155.40 | Pass 157.22 | Pass 156.53 | Pass 103.84 | Pass 88.06 | Pass 156.08 |
| 2560x900 | Pass 119.53 | Pass 119.91 | Pass 119.77 | Pass 119.68 | Pass 119.77 | Pass 119.68 |
| 3840x900 | Pass 47.80 | Pass 46.40 | Pass 228.12 | Pass 46.87 | Pass 46.25 | Pass 182.88 |

## 压缩与验收哈希

静态检查五张源观察图与五张运行观察图；封面另以原始分辨率复核。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，验证解码及尺寸。未使用 TinyPNG，未重复压缩已接受 WebP。验收后删除临时 PNG，仅保留 WebP、提示词和哈希证据。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `948fac8354ce44e64d1b70295ad1fd080a65841a93f1b498cef9df4419998f40` | `9140a9e61a050c6666ea2df7ff25c34b86dbf53c11c79fcf6351d9a381e4ca47` |
| 02 | `98a3d9d571129c8776b7c4aba541ea1f5a0aa3d46a40e0d15931bfadd72d5d74` | `a1ec474c6fe2d62f202857075e29d3f43477cf758c90f1ddf9ea250370d2fba0` |
| 03 | `7b417edaba535ec469b818007aaa5cb74f5be11b1559ddf8948dd7e221f110ab` | `9deb45d7a4f98bb49172c5f807a131066d16be23ba30ee250b75ad4c554b8e72` |
| 04 | `675fa982f1cfcfda70426c281996bd3f4051bf446777e5a065654852d25cf9e7` | `c9c903cf54ab0f87e5355372c3fe880b3cfb4311f30fa61742dabb7270cf08b8` |
| 05 | `3fea07feb843e7d26bad735db673ea3eb786b9d68b5f0373a0e1b208ee3615d1` | `e7e80a6c3c76ea3d7ee75018382f12c377f1a8e6fb4a8a48b0af88a71654df65` |
| 06 | `9409ef4c545016a522a48ad749faccfda881de03ac58382f3eff8bf1a04ee18b` | `346f5d037b11327b17afb799fd7398685adafc9a51ca6760eae4cc0e2007c3b0` |

## 项目验证

`npm run typecheck`、`npm run test:carousel` 与 `npm test` 通过。完整测试含 172 项分类测试及本批六图哈希、尺寸和解码验证，并覆盖首页轮播、目录、图片查看器及构建后的子路径资产访问。生产构建通过，仍提示主 JavaScript chunk 大于 500 kB。
