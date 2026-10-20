# 第六批灭绝动物：E026–E030

2026-10-20 核验。五种均采用 `Historical and fossil evidence` 与 EX，不填写 IUCN 评估年份，不给历史范围添加当前活体坐标。[采用表](../../src/assets/source/todo-extinct-sixth-five-adopted-taxonomy.json)保存分类、来源与检索日期。中文名称沿用 todo 选题标签；物种身份以学名确定。

| 编号 | 物种与来源 | 内容与复原限定 |
| --- | --- | --- |
| E026 | [异鹩 Traversia lyalli](https://www.nzbirdsonline.org.nz/species/lyalls-wren) | 最后确认个体记录为 1895 年；岛上野猫扩散，不能讲成一只猫灭绝全种。短圆翅、粗腿与大脚有标本依据，食谱保留推测；图集采用雌鸟外观。 |
| E027 | [奥克兰秋沙鸭 Mergus australis](https://www.nzbirdsonline.org.nz/species/auckland-island-merganser) | 最后确认标本采集于 1902 年 1 月，不等同确切灭绝日期。胃内容物与稳定同位素支持食谱及水域利用；大陆秋沙鸭遗骨归属保留未知。图集采用雄鸟长冠羽。 |
| E028 | [芬氏鸭 Chenonetta finschi](https://www.nzbirdsonline.org.nz/species/finschs-duck) | 波利尼西亚人抵达后灭绝，是否延续到欧洲人时期未定；不用旧组合 Euryanas finschi 另计种。粗腿、小翅与短喙依据骨骼，少量银灰羽毛不能决定完整羽色。 |
| E029 | [南岛巨鹅 Cnemiornis calcitrans](https://www.nzbirdsonline.org.nz/species/south-island-goose) | 欧洲人抵达前灭绝，不指定单一年份。短翅、短尾、厚喙及截平喙端有骨骼依据；不与北岛种合并。羽色含推测。 |
| E030 | [南岛厚嘴鹤 Aptornis defossor](https://www.nzbirdsonline.org.nz/species/south-island-adzebill) | 欧洲定居前灭绝。沿用该来源的鹤形目厚嘴鹤科，名字不意味着鹤科。稳定同位素支持较高营养级，具体猎物保留推测；羽色未知。 |

异鹩归雀形目刺鹩科；秋沙鸭、芬氏鸭和巨鹅归雁形目鸭科。南岛厚嘴鹤采用本次所引 NZ Birds Online 的分类归属；分类图谱只表达归属，不表示演化关系。五种的末次记录、灭绝依据和精确年代未知分开说明。

本次使用内置 image_gen 生成 30 张保留 WebP，未使用 CLI/API 回退。每种一张封面、五张观察图，分别表现外形比例、头喙、外观模型、历史环境和两个观察方向。图片统一标注 AI 科学复原示意；模型不是实际馆藏，双视角不是雌雄配对或真实共处。部分羽色、场景与姿势属于复原选择，不能从生成图测量身体。

逐张提示词、修订提示词、哈希、尺寸与验收见 `src/assets/source/species/<slug>/`；最终图片保留在 `public/images/species/<slug>/`。初稿检查发现南岛厚嘴鹤长喙伸入封面左侧文案区，通过生成工具调整主体位置及大小后重新验收。其余封面检查短翅、大脚、冠羽与喙端形状。

## 验证记录

封面源 PNG 与保留 WebP 分别按原分辨率目视检查；六张源图和六张运行图分别通过联系表检查。逐图核对解码尺寸和 SHA-256；五张封面同步至 cover-subjects.ts、original-covers.json 和各自 hero-acceptance.json。

九档视口及桌面内容高度 +160px，共 80 组几何；动画六种端点只改变透明度，共用位置与尺寸，完整主体至少保留 24 CSS px 间距。按当前 fitHeroSubject 生成并检查每种在 390、761、1920、3840 宽的图片栏模拟，长喙、冠羽和脚趾均在边界内。按仓库约定未运行浏览器；静态几何和模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。

最终检查：

- `npm run typecheck` 通过。
- `npm test` 全部 1056 项通过，包含图片、分类与内容、档案加载、轮播、列表、图谱、微生物及生产资源检查。
- `npm run test:carousel` 专项通过，主测试 738 项、交互 8 项，覆盖新增五种的六张图、封面哈希、解码尺寸和主体间距。
- 最后将奥克兰秋沙鸭的环境标记从陆地修正为海洋与淡水，主栖息地为海湾和河口；随后重新运行 `test:taxonomy`，237 项通过；`test:dist-subpath` 5 项通过并重新生产构建。
- 最终动物页面脚本共 546,971 字节，低于 550,000 字节预算；未调整预算或打包实现。
- `git diff --check` 通过。验收后清理临时 PNG、联系表和图片栏模拟，仅保留 30 张 WebP，共 8,085,790 字节，以及提示词、哈希与验收记录。

E026–E030 已在 todo 勾选并移入完成归档。本轮完成 30，待制作 70；动物目录共 730 份档案。
