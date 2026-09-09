# Walrus image set

2026-09-09 使用内置 imagegen 生成并调整六张 1536 × 1024 图片。保留运行图 `public/images/species/walrus/`，生成及编辑提示词见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不对应实拍地点或野外记录。

## 内容依据

- [ADW — 海象分类、形态与取食](https://animaldiversity.org/accounts/Odobenus_rosmarus/)
- [WWF — 海象保护现状及全球 IUCN 2016 等级](https://www.arcticwwf.org/site/assets/files/1541/walrus-report-2018-screen.pdf)
- [USFWS — 太平洋海象种群评估（地区资料）](https://www.fws.gov/sites/default/files/documents/Pacific-Walrus-Stock-Assessment-Report-2023.pdf)

访问日期：2026-09-09。ADW 支持物种分类与形态。WWF 2018 报告引用全种 2016 发布的 IUCN VU 评估；未取得独立评估日期，assessedYear 留空，不将发布日期代入。USFWS 2023 报告仅支持太平洋地区生态与海冰影响，不据此填写全球数量或趋势。未采用 ADW 旧状态及旧三亚种口径。

本次未核实独立全球趋势字段，trend=unknown；不从单个地区或饲养资料推算全球数量。

## 图片范围与限制

图中个体不指定亚种；长牙长短不能单独确定年龄或性别。04 只表现海底觅食场景，不展示吸食过程，不将长牙当作挖掘工具。06 为母幼情景重建，无实际亲缘凭证。

## 封面验收

源图和运行 WebP 均为 1536 × 1024。已按原始分辨率查看最终临时输入与运行封面；主体完整，左 40% 以环境背景为主。目测保守完整可见主体边界：`{"left": 1122, "top": 378, "right": 1320, "bottom": 474}`，包括头、长牙、胡须与所有可见鳍状肢。主体中心位于宽度的 79.5%，不是由 focalPoint 推定。

提交的 focalPoint：`{"x": 0.88, "y": 0.34}`。运行封面 SHA-256：`d12ce22d749d2a9bd21e2be743442bb7abc3c95cbdf9388fb086fea39400933a`。

以下按现有 CSS 的 object-fit、object-position、动画变换和正文／轮播面板占位矩形计算完整主体的最小间距（CSS 像素），每项至少 24。覆盖视口边缘与组件安全区域，未使用浏览器。测试把运行封面哈希与完整主体边界绑定。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 38.20 | Pass 39.33 | Pass 38.91 | Pass 38.63 | Pass 38.91 | Pass 38.63 |
| 390x760 | Pass 38.20 | Pass 39.33 | Pass 38.91 | Pass 38.63 | Pass 38.91 | Pass 38.63 |
| 1366x768 | Pass 56.97 | Pass 57.41 | Pass 57.24 | Pass 57.13 | Pass 57.24 | Pass 57.13 |
| 1920x900 | Pass 96.70 | Pass 96.17 | Pass 96.37 | Pass 96.50 | Pass 96.37 | Pass 96.50 |
| 2560x900 | Pass 44.27 | Pass 41.64 | Pass 66.75 | Pass 43.28 | Pass 42.62 | Pass 43.28 |
| 3840x900 | Pass 219.00 | Pass 254.40 | Pass 275.14 | Pass 78.67 | Pass 49.12 | Pass 276.84 |

## 压缩与验收哈希

静态检查五张源观察图与五张运行观察图；封面另以原始分辨率复核。使用 `npm run convert:webp -- <本批源图>`，cwebp q82、m6，验证解码及尺寸。未使用 TinyPNG，未重复压缩已接受 WebP。验收后删除临时 PNG，仅保留 WebP、提示词和哈希证据。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `ec0520c88cea672ce97a72df08590aed4d66be3d4f5deacdbd1073a7ef3fe4fe` | `d12ce22d749d2a9bd21e2be743442bb7abc3c95cbdf9388fb086fea39400933a` |
| 02 | `8d3cf698a7c98e4576a0302cb2c2f6680fd02d5959f071c12eb274ffee5f02fe` | `7c8fc69d42116080420bbd820a0914e2940d783ec0d78cb98e802c7df1795fb2` |
| 03 | `3676e2a73905a3ee6e234a5f6046ab81bc9109828e0d2262a68957a964f824bf` | `2a0f3c959cc9017c7cec44470be50a4b4201ac176aab00b5a84daf323cb9dc43` |
| 04 | `606bd3fef35247027ccb16c9aa96264c61a2a683a52e4b2bbbac2ce2f8261d11` | `c07d5eefcb7859facb048d8fb2c4312fbcd7d8972c365f2cfe53548dd8f33756` |
| 05 | `e0298e2b3f24a41539cda58c20931ad034fcf0c89c40d631e8130d5c6dbb4267` | `65aa04f5380ec396324055b2d204d9f27a13d8678321de594e928c1695e7d643` |
| 06 | `13ed27a4774b7afea9ffc33bc10ce1459e084ff4b9549949ba1baa4e537478bb` | `682159f5aa8503c4c461685ac8c91edb554b977d25cb887040a6c57dfc0c7362` |

## 项目验证

`npm run typecheck`、`npm run test:carousel` 与 `npm test` 通过。完整测试含 172 项分类测试及本批六图哈希、尺寸和解码验证，并覆盖首页轮播、目录、图片查看器及构建后的子路径资产访问。生产构建通过，仍提示主 JavaScript chunk 大于 500 kB。
