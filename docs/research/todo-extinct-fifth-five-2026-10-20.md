# 第五批灭绝动物：E021–E025

2026-10-20 核验。五种均以 `Historical and fossil evidence` 与 EX 表达灭绝依据，不填 IUCN 评估年份，不提供当前活体坐标。采用 [NZ Birds Online](https://www.nzbirdsonline.org.nz/) 各物种页中的学名、目科归属、历史范围与记录；[采用表](../../src/assets/source/todo-extinct-fifth-five-adopted-taxonomy.json)保存逐种来源与查询日期。

| 编号 | 物种与来源 | 内容限定 |
| --- | --- | --- |
| E021 | [重脚恐鸟 Pachyornis elephantopus](https://www.nzbirdsonline.org.nz/species/heavy-footed-moa) | 短粗腿、宽脚，植物遗存与古 DNA 的用途；约 15 世纪前后灭绝。 |
| E022 | [高地恐鸟 Megalapteryx didinus](https://www.nzbirdsonline.org.nz/species/upland-moa) | 羽毛覆盖下腿、细长趾；皮肤、羽毛与粪化石提供不同线索。 |
| E023 | [哈斯特鹰 Aquila moorei](https://www.nzbirdsonline.org.nz/species/haasts-eagle) | 旧组合 Harpagornis moorei、Hieraaetus moorei 不另计种；骨骼与猎物骨损伤支持捕食关系，羽色仍有未知。 |
| E024 | [垂耳鸦 Heteralocha acutirostris](https://www.nzbirdsonline.org.nz/species/huia) | 雌雄喙形不同；1907 年为最后接受目击，可能延续到 1920 年代，不作为确切灭绝年。 |
| E025 | [笑鸮 Ninox albifacies](https://www.nzbirdsonline.org.nz/species/laughing-owl) | 旧组合 Sceloglaux albifacies 不另计种；1914 年最后确认标本，估计 1940 年前灭绝，后续传闻不作确认记录。 |

重脚恐鸟属归 Emeidae，沿用本图册“鸸鹋恐鸟科”标签；高地恐鸟归 Megalapterygidae，中文展示标签“高地恐鸟科”。其余三种分别归鹰形目鹰科、雀形目垂耳鸦科、鸮形目鸱鸮科。未将俗名中的“鸦”当作鸦科依据，未将旧学名当作新物种。分类图谱继续只表达分类归属。

每种保留一张封面与五张观察图，图片均标注 AI 生成科学复原示意。外观模型不对应真实馆藏，双视角图不表达雌雄或共处事件。垂耳鸦图集统一以雌鸟为主，雄鸟喙形差异在正文说明；哈斯特鹰羽色采用推测配色。所有环境、光照、姿态及植物细节含复原选择，不从生成图测量。

使用内置 image_gen，未使用 CLI/API 回退。逐张提示词、修订提示词及最终图片验收保存在 `src/assets/source/species/<slug>/`，运行图保存在 `public/images/species/<slug>/`。检查初稿发现部分封面主体过左、高地恐鸟裸腿，以及环境图混入其他物种；分别通过生成工具修订构图、腿部羽被和单物种场景，再按最终图片验收。

## 验证记录

封面源 PNG 与保留 WebP 分别按原分辨率检查；图集源图与运行图通过联系表检查。完整主体边界包含喙、头、翅羽或身体羽被、脚趾及尾端，并绑定实际解码尺寸与 SHA-256。五张封面同步登记至 `cover-subjects.ts`、`original-covers.json` 及各自 `hero-acceptance.json`。

逐种记录九档视口，桌面额外检查内容高度 +160px，共 80 组几何；六种动画端点仅改变透明度，共用同一位置和尺寸，最小主体间距至少 24 CSS px。静态图片栏模拟采用现有 `fitHeroSubject`，移动端按全图 contain。按仓库约定没有打开 GUI 或无头浏览器；这些检查不验证浏览器字体、完整页面排版或实际内容驱动高度。

最终验证：

- `npm run typecheck` 通过；生产构建也执行 `tsc -b` 并通过。
- `npm test` 全部通过，共 1051 项，包含分类与内容、图片、探索、轮播、查看器、列表、微生物及生产资源检查。
- `npm run test:carousel` 单独通过；全量测试再次通过，覆盖新增五种、六张图、哈希、实际解码尺寸、完整主体边距和交互。
- `test:dist-subpath` 5/5 通过，包含生产构建、部署子路径图片访问、独立档案加载与目录字段还原。动物页面脚本共 545,651 字节，低于 550,000 字节上限，未调整预算或打包逻辑。
- 首轮分类检查发现历史证据来源缺少 conservation 类型及目录计数过期，已补齐来源类型并按新增五种更新相关分类分支计数；重跑全量测试无失败。
- `git diff --check` 通过；临时源 PNG、联系表与静态模拟已在验收后清理。

E021–E025 已勾选并移入完成归档。本轮已完成 25，待制作 75；动物目录共 725 份档案，新增 30 张保留 WebP。
