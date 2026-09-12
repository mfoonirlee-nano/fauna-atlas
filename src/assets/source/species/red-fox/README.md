# Red Fox image set

2026-09-12 使用内置 image_gen 生成一张封面和五张观察图，均为 1536 × 1024。运行资产保存在 `public/images/species/red-fox/`。完整提示见 [prompts.json](./prompts.json)。图片为 AI 生成科学情景重建，不代表实拍地点或野外观察记录。

## 内容依据

- [Animal Diversity Web — 赤狐分类与分布](https://animaldiversity.org/accounts/Vulpes_vulpes/)
- [Animal Diversity Web — 赤狐形态、捕食和食谱](https://animaldiversity.org/accounts/Vulpes_vulpes/)
- [Animal Diversity Web — 赤狐全球 IUCN 等级](https://animaldiversity.org/accounts/Vulpes_vulpes/)
- [NPS — 赤狐的听觉与扑猎](https://www.nps.gov/articles/red-fox.htm)

访问日期：2026-09-12。ADW 支持分类、原生及引入范围、杂食与全球 LC；NPS 支持多种毛色、听觉和扑猎。45.5–90 厘米为头体长，不含尾，不写入全长比较。澳大利亚引入种群与原生分布区分。未核实独立评估日期和全球种群趋势，assessedYear 留空，trend 记为 unknown；不以网页更新日期代替评估年份。

## 图集

- `01-cover.webp`：完整动物与生活环境。
- `02-observation.webp`：尖耳朵和蓬松尾巴。
- `03-observation.webp`：停下来听一听。
- `04-observation.webp`：跃起扑向地面。
- `05-observation.webp`：前爪落到草地。
- `06-observation.webp`：林缘的小路。

已逐张静态检查生成图中的物种外形、动作与图注。动作前后图为独立生成的姿势示意，不能视为连续实拍；不使用图片证明精确趾数、测量值或捕猎成功。

## 封面验收

按原始分辨率检查临时 PNG 和最终运行 WebP，均为 1536 × 1024。完整可见主体保守目测边界为 `{"left": 1144, "top": 408, "right": 1262, "bottom": 480}`，包括耳尖、鼻尖与胡须、躯干、可见足爪及白色尾尖。边界中心位于源宽度的 78.3%，左 40% 保留环境背景，完整主体与源边缘之间有真实背景。focalPoint 为 `{"x": 0.82, "y": 0.35}`。

运行封面 SHA-256：`a50656b23476bf2e44834e3aa7edea5e4cdedb388e94e0438b5e0265bfaccb2f`。

初版位置未通过安全区域间距检查，已用内置 image_gen 调整位置并重新测量。编辑提示保存在 prompts.json 的 coverEdits；边界依据最终画面测量，不使用提示词中的目标坐标代替验收。

封面采用远景，身体细节由观察图展示。遮挡的附肢不补计为可见部分。以下按仓库 CSS 的 object-fit、object-position、动画缩放与平移计算完整主体到视口边缘、文字及控制面板的最小间距，单位为 CSS 像素，所有值至少 24。检查不启动浏览器。

| Viewport | Settled | Initial | Forward enter | Forward leave | Backward enter | Backward leave |
| --- | --- | --- | --- | --- | --- | --- |
| 320x760 | Pass 33.75 | Pass 34.70 | Pass 34.34 | Pass 34.11 | Pass 34.34 | Pass 34.11 |
| 390x760 | Pass 33.75 | Pass 34.70 | Pass 34.34 | Pass 34.11 | Pass 34.34 | Pass 34.11 |
| 1366x768 | Pass 53.06 | Pass 53.34 | Pass 53.23 | Pass 53.16 | Pass 53.23 | Pass 53.16 |
| 1920x900 | Pass 93.00 | Pass 92.32 | Pass 92.57 | Pass 92.75 | Pass 92.57 | Pass 92.75 |
| 2560x900 | Pass 42.33 | Pass 39.63 | Pass 104.33 | Pass 41.32 | Pass 40.64 | Pass 72.47 |
| 3840x900 | Pass 274.00 | Pass 274.24 | Pass 276.77 | Pass 134.50 | Pass 105.50 | Pass 278.47 |

## 压缩与验收哈希

使用 `npm run convert:webp -- <本批源图>`，由 cwebp q82、m6 转换并验证解码与尺寸。未使用 TinyPNG，不重复压缩已接受的 WebP。运行图通过静态联系表核对画面与图注，封面另按原始分辨率检查。

| Image | Source SHA-256 | Runtime SHA-256 |
| --- | --- | --- |
| 01 | `74798e40ee93ff6a0c170f1889a3780613cd0e69f8ed4348dc0cb2b548beebec` | `a50656b23476bf2e44834e3aa7edea5e4cdedb388e94e0438b5e0265bfaccb2f` |
| 02 | `5c7e35f86c02b5ea100fe9f7f1ed6049dab30f903f7c040fd5a8053625241311` | `a73bf5c36e7f044e6e1251f3d4ee05139d46b7308741f5bed70e13a28632fbaa` |
| 03 | `8294834949c15acbd1585f0a2cff84a0f8fc31fb7f5cc5e68bc5217983a5e1d3` | `c6ed96d54bec58a35400468ede1ae12d079592be30a5bce83cd8e11f3d9c9fc7` |
| 04 | `ae3d11a3074efb59c1bae0914ac862f6faa0e7334fd0ac1cd7142437c387c3d9` | `ac3b0bb28bedf998c653c7f7e60c1919a65d30f3ab04298bc46c620b0a75436a` |
| 05 | `e4ec08d5d77ec2c9a6bc0ab5c249a577dfc8f386e81112e27e03bf2dfb9eed9e` | `219da287de49a0a8abeb6f71b275da742d3ba345ae46275519e4ecbdc0ee7556` |
| 06 | `f12454a124ea5f7f0021a69ecb4e350d2b77a31bc3eef88b89d2d4ae68f1f985` | `d800f1b1fd27200c4b7a528ec047ea9eb8c11f4b8135f2b81d4adf6d8c0f79ed` |

## 仓库验证

2026-09-12 通过类型检查、生产构建及 222 项测试。`npm test` 中前 220 项通过，最后两项子路径测试因沙箱禁止监听 127.0.0.1 而中断；以 `node --test tests/dist-subpath.test.mjs` 在沙箱外重跑，两项通过。未启动 GUI 或无头浏览器。封面回归绑定运行哈希、完整主体边界及全部视口与动画端点。已将本批临时 PNG 移出仓库，只保留 WebP、提示词与验收记录。
