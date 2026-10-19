# 第二批五种灭绝动物制作记录

2026-10-19：本批制作 E006–E010：斯特勒海牛、大角鹿、加勒比僧海豹、福克兰狼、蓝马羚。五份物种档案各配一张封面与五张观察图，动物目录由 705 增至 710。

## 分类与来源

五次 GBIF 查询返回种阶元、ACCEPTED、EXACT。采用的完整响应见 [GBIF 查询记录](../../src/assets/source/todo-extinct-next-five-taxonomy-match.json)。命名作者与年份采用该响应；中文属名作为展示标签，不另增分类阶元。

| 编号 | 学名 | 目／科 | 时间记录的限定 |
| --- | --- | --- | --- |
| E006 | Hydrodamalis gigas | 海牛目／儒艮科 | 1741 为斯特勒观察年，1780 为命名署年；NHM 采用 1768 为灭绝年 |
| E007 | Megaloceros giganteus | 偶蹄目／鹿科 | 较晚化石约距今 8,000 年，不等于最后个体死亡的精确时间 |
| E008 | Neomonachus tropicalis | 食肉目／海豹科 | 最后确认目击 1952 年；NOAA 2008 年认定灭绝并发布除名决定 |
| E009 | Dusicyon australis | 食肉目／犬科 | 博物馆称最后个体据报于 1876 年遭杀；保留“据报”限定 |
| E010 | Hippotragus leucophaeus | 偶蹄目／牛科 | 约 1799–1800 年灭绝；2023 年研究重新鉴定馆藏，未发现活体 |

斯特勒海牛参考 [NHM 物种与历史说明](https://www.nhm.ac.uk/discover/stellers-sea-cow-first-historical-extinction-of-marine-mammal-at-human-hands.html)，辅以 [ADW 外形资料](https://animaldiversity.org/accounts/Hydrodamalis_gigas/)。保留浅海食藻、无齿和前肢、尾鳍特征，未填写游速或完整生活史。没有确认的软组织可作为精确皮肤复原依据。

大角鹿参考 [NHM 化石与牙齿研究说明](https://www.nhm.ac.uk/discover/irish-elk-giant-deer.html)及 [2005 年分类研究](https://www.nature.com/articles/nature04134)。图集只复原成年雄鹿；掌状鹿角、头骨与颈肩的依据不同于毛色推测。洞穴绘画可供讨论，不能当作彩色照片。

加勒比僧海豹参考 [NOAA 2008 年复核报告](https://repository.library.noaa.gov/view/noaa/17045/noaa_17045_DS1.pdf)及[同年宣布灭绝和除名资料](https://www.federalregister.gov/documents/2008/10/28/E8-25704/endangered-and-threatened-species-final-rule-to-remove-the-caribbean-monk-seal-from-the-federal-list)。报告使用旧组合 Monachus tropicalis；本批按 GBIF 采用 Neomonachus。命名署年按 GBIF 为 Gray, 1850；NOAA 叙述引用 Gray 1849 的早期文献，两者不混为活体发现年份。食性由近缘种及骨骼比较推测，正文保留不确定性。

福克兰狼参考[当地博物馆历史与遗存记录](https://falklands-museum.com/the-warrah)及 [ADW 外形与资料缺口](https://animaldiversity.org/accounts/Dusicyon_australis/)。未沿用 ADW 列出的全部历史食物名称或将灰狼群猎方式套入本种；2010 年的遗骨发现不作为活体重现。

蓝马羚采用 [2023 年古 DNA 原始研究](https://link.springer.com/article/10.1007/s42991-023-00373-4)及 [NHM 馆藏说明](https://www.nhm.ac.uk/discover/news/2023/september/horns-in-museum-collection-from-extinct-bluebuck-antelope.html)。只将 2023 年研究所确认的角称为经 DNA 鉴定的标本，不声称图画代表那件馆藏，或把当时的已验证标本数量当作永久总数。

## 状态、范围与复原

本批采用博物馆、政府和原始研究提供的灭绝依据，没有为五种动物声称独立 IUCN 评估。原模型只允许 IUCN Red List，现增加仅能搭配 EX 的 Historical and fossil evidence；类型禁止该分支填写 assessedYear 和 criteria。页面显示灭绝依据，正文分别说明命名、末次记录及宣布年份。决定见 [ADR 0003](../adr/0003-extinction-evidence.md)。

历史范围写入 distribution.range 与 regions，不加当前活体地图代表坐标。缺少核实的测量数据时，measurements 与 metrics 留空。分类图谱仍只表达分类归属。

本批图片由内置 imagegen 逐张生成，均注明 AI 科学复原示意。五种分别安排外形比例、外部特征、构想的外观模型、历史环境和两个观察方向。外观模型不对应真实馆藏；未使用生成的骨骼细节作为化石证据。最终提示词保存于各物种 prompts.json。

## 图片验收

30 张保留 WebP 实际解码尺寸均为 1536×1024，每种恰好一张封面与五张观察图。最终提示词、编辑参考图哈希、PNG 与运行 WebP 哈希分别记录于物种目录，未使用 CLI/API 回退。

四种封面经过内置构图编辑：斯特勒海牛、大角鹿和加勒比僧海豹调整主体整体大小与位置，福克兰狼整体右移；蓝马羚首版通过。斯特勒海牛全组另改为依据早期观察复原的短钩状前肢。首版不合适的图没有进入保留图集。

最终源封面与运行封面分别经原分辨率目视检查；五种的源图集、运行图集联系表分别检查。各封面按运行像素测量完整边界，包含角、耳、鼻吻、足部、尾与鳍缘，写入 cover-subjects.ts、original-covers.json，并绑定当前运行 SHA-256。

五种各检查九档运行图片栏模拟，并计算桌面内容增高 160px 的情况，共 80 组静态几何。settled、initial、forward-enter、forward-leave、backward-enter、backward-leave 共用当前仅透明度动画的几何，主体在这些计算尺寸中保留至少 24 CSS px 间距。逐帧尺寸与边界见各图片集 hero-acceptance.json。

按仓库要求未启动浏览器。静态几何和模拟不验证浏览器字体、完整页面排版或实际内容驱动高度。

## 验证结果

`npm test` 全部通过，包含分类、档案加载、来源文案、分类图谱、地理探索、轮播交互、710 种封面与六图集、图片查看、目录分页和微生物隔离检查。生产构建、子路径图片访问、初始 JavaScript 预算与独立档案加载检查通过。新增回归检查覆盖历史与化石灭绝依据、无评估年份、历史范围无当前坐标，以及末次记录和复原限制。

类型检查通过，`git diff --check` 通过。临时 PNG 已移除，项目仅保留本批 30 张 WebP。todo 的 E006–E010 已移入完成归档；本轮累计完成 10 种，待制作 90 种。
