# 双角犀鸟（*Buceros bicornis*）完整档案研究

- 检索与核验日期：2026-09-03
- 推荐中文名：**双角犀鸟**
- 推荐英文名：**Great Hornbill**
- 接受学名：***Buceros bicornis* Linnaeus, 1758**
- 建议 `slug`：`great-hornbill`
- 使用范围：新增完整 `Species`，约束 1 张封面和 5 张详情图
- 证据口径：分类采用 AviList v2025b；全球保护字段采用 IUCN/BirdLife 当前已发布记录；体尺采用 IUCN SSC 犀鸟专家组和中国林草主管部门公开值。局地研究结果不外推成全分布区常数。

## 实施结论

1. AviList v2025b 接受 *Buceros bicornis*，归入犀鸟目 `Bucerotiformes`、犀鸟科 `Bucerotidae`、犀鸟属 `Buceros`。IUCN 记录命名人为 Linnaeus, 1758，英文主名为 Great Hornbill。[S01][S02]
2. 中国现行国家重点保护野生动物名录使用“双角犀鸟”，并列为国家一级重点保护野生动物。“大犀鸟”及英文别名 Great Indian Hornbill、Great Pied Hornbill 可用于检索，不能替代主名。[S10][S11][S13]
3. 当前已发布全球评估为 **VU、Decreasing、2020、A3cd+4cd**。BirdLife 页面显示该物种正在重评；产品只能写已发布的 2020 结果，不能预测重评结论。[S02][S03][S04]
4. 2020 评估估计全球有 **13,000 至 27,000 只成熟个体**，数据质量为 poor、推导方式为 inferred。该数字来自多地密度和适生生境的谨慎外推，不是同期全球普查。[S02][S04]
5. 评估采用 18.3 年世代长度，并预计未来三代约 54.9 年内下降 **30% 至 49%**。判据中的 `c` 指栖息地面积或质量下降，`d` 指实际或潜在利用，包括捕猎。[S02][S04]
6. BirdLife 当前记录的 12 个原生、现存、留居国家为孟加拉国、不丹、柬埔寨、中国、印度、印度尼西亚、老挝、马来西亚、缅甸、尼泊尔、泰国和越南。[S05]
7. 主要生境为热带、亚热带湿润低地林和湿润山地林。它也利用混交落叶林、保留大树的种植园和乡村园地；后两类不能被写成与连续老龄林等价的替代生境。[S02][S06][S07]
8. IUCN SSC 犀鸟专家组给出的成鸟体长为雄鸟 121 至 150 厘米、雌鸟 112 至 125 厘米；体重为雄鸟 2.610 至 3.900 千克、雌鸟 2.157 至 3.350 千克。中国林草主管部门公开资料给出 146 至 160 厘米翼展；该翼展范围没有附原始样本表，应作为展示值，不当作已知生理极限。[S08][S09]
9. 成年雄鸟有红虹膜、黑色眼周裸皮和较大的低平盔突，盔突边缘带黑色并在前端形成双尖；成年雌鸟有白至蓝白虹膜、红或粉红眼周裸皮，盔突较小且没有雄鸟式黑边。两性均有黑色体羽、白色翼带、白尾和宽黑色近尾端带；颈部和白羽可被尾脂腺分泌物染黄。[S02][S08]
10. 它以果实为主，尤其利用无花果，也吃樟科、番荔枝科、楝科和肉豆蔻科果实；食谱还包括昆虫、两栖类、爬行动物、小型哺乳动物、小鸟和鸟卵。当前 schema 没有 `frugivore`，应把 `diet.types` 写成 `omnivore`，再在描述中说明食果占主导。[S02][S07]
11. 雌鸟进入天然树洞后封窄洞口，只留下递食缝；雄鸟向洞内供应食物。IUCN 记录平均占巢期约 120 天，范围 102 至 144 天，多数巢最终育成一只幼鸟。封壁画面应使用粗糙有机质外观，避免整齐砖砌或水泥质感；不同资料对混入的食物、植物碎屑和泥土比例缺少统一量化，图注不列配方。[S02][S07][S12]
12. 繁殖期个体活动范围可缩至约 0.7 至 7 平方千米；泰国非繁殖期记录过 138 平方千米。两组数字来自不同研究条件，适合解释季节性移动差异，不适合相除后宣称固定倍数。[S02][S07]
13. 主要威胁是低地森林清除和破碎化、选择性砍伐大型食物树与巢树、为食物和装饰物捕猎、宠物贸易及掏取雏鸟。2000 至 2012 年树冠分析估计其分布区在三代尺度上损失约 26.1% 森林；狩猎使实际种群下降可能高于单用森林损失得到的数值。[S02][S04]
14. 双角犀鸟列入 CITES 附录 I。保护行动应集中于大片低地林和大树、反捕猎与贸易执法、标准化种群监测、天然巢洞修复、社区巢树守护，以及在严格评估后使用人工巢箱。泰国和印度已有社区守巢与巢洞管理案例。[S02][S11]

## 名称与六阶分类

| 字段 | 推荐值 | 依据与边界 |
| --- | --- | --- |
| `names.zh` | 双角犀鸟 | 中国国家名录现行名称。[S10] |
| `names.en` | Great Hornbill | AviList 与 IUCN 主名。[S01][S02] |
| `aliases` | 大犀鸟、Great Indian Hornbill、Great Pied Hornbill | 只作检索别名；“大犀鸟”可能产生泛称歧义。[S11][S13] |
| `scientificName` | `Buceros bicornis` | 字段只放二名法；命名人和年份进入关键事实。[S01][S02] |

| 分类阶元 | 学名 | 中文名 |
| --- | --- | --- |
| 界 | Animalia | 动物界 |
| 门 | Chordata | 脊索动物门 |
| 纲 | Aves | 鸟纲 |
| 目 | Bucerotiformes | 犀鸟目 |
| 科 | Bucerotidae | 犀鸟科 |
| 属 | Buceros | 犀鸟属 |

AviList v2025b 直接支持鸟纲以下的目、科、属和物种口径；IUCN 评估列出 Animalia、Chordata、Aves、Bucerotiformes、Bucerotidae，并确认学名和命名信息。[S01][S02]

## IUCN、数量与趋势

推荐实现：

```ts
conservation: conservation('VU', 'decreasing', 2020, 'A3cd+4cd')
```

IUCN 在 2020 年 9 月 8 日完成评估，2020 年发布。`assessedYear` 不能写成资料访问年 2026，也不能因 BirdLife 的重评提示而改成未发布年份。[S02][S03]

`A3cd+4cd` 表示未来三代和跨过去至未来三代的下降达到 VU 口径。评估把未来三代下降暂定为 30% 至 49%；它没有证明某个精确百分比。三代约 54.9 年来自 18.3 年世代长度，不是平均寿命。[S02][S04]

`metrics.estimatedMatureIndividuals` 可填 `[13000, 27000]`。评估先综合保护地内外多项密度研究，再把总体估算放进 20,000 至 49,999 只总个体的展示档位，并折算为 13,000 至 27,000 只成熟个体。不要把 23,000 至 71,000 的初步外推范围误填为成熟个体数。[S02][S04]

## 分布、生境与活动

推荐分布字段：

```ts
distribution: {
  realms: ['terrestrial'],
  continents: ['亚洲'],
  regions: [
    '喜马拉雅南麓与印度东北部',
    '印度西高止山脉',
    '中国西南边境',
    '大陆东南亚',
    '马来半岛与苏门答腊',
  ],
  countries: [
    '孟加拉国', '不丹', '柬埔寨', '中国', '印度', '印度尼西亚',
    '老挝', '马来西亚', '缅甸', '尼泊尔', '泰国', '越南',
  ],
  range:
    '破碎分布于南亚和东南亚的湿润森林，从喜马拉雅南麓、印度东北部和西高止山脉，经中国西南边境与中南半岛，延伸至马来半岛和印度尼西亚苏门答腊。',
  center: { lat: 19, lng: 96 },
}
```

`center` 只服务地图取景，不能解释为数量中心。中国记录集中在云南西部和西南边境；IUCN 还保留藏东南罕见记录的历史概括，产品不应把整个云南或西藏涂成连续占域。[S02][S05][S07]

推荐生境：

1. `热带与亚热带湿润低地林`，`isPrimary: true`。连续林冠、结果大树和大型天然树洞共同支撑觅食与繁殖。[S02][S06]
2. `湿润山地林与混交落叶林`。南印度记录至至少 1,560 米，泰国记录至 2,000 米；海拔字段可用 `[0, 2000]` 表达评估边界，不代表最适带。[S02][S04][S07]
3. `保留大树的种植园与乡村园地`。相邻连续森林、成熟巢树和食物树决定可利用性；单一种植园或无大树农田不能画成完整替代生境。[S06][S07]

推荐 `activity`：`['昼行性', '树冠层活动', '繁殖期活动范围收缩', '非繁殖期追随果源广域移动']`。BirdLife 把它列为非迁徙种；跨林块或岛屿追随结果树属于局地和季节性移动，不应写成固定季节迁徙。[S03][S07][S08]

## 外形、体尺与翼展

| 字段 | 推荐值 | 证据边界 |
| --- | --- | --- |
| `measurements.length` | 112 至 150 cm | 合并专家组的雌雄范围；雌鸟 112 至 125，雄鸟 121 至 150。[S08] |
| `measurements.weight` | 2.157 至 3.9 kg | 合并专家组的雌雄范围；雄鸟上限高于雌鸟。[S08] |
| `measurements.wingspan` | 146 至 160 cm | 中国林草主管部门公开值；缺少原始样本表，不能称全球极值。[S09] |
| `metrics.elevationM` | `[0, 2000]` | IUCN 当前记录边界；不是常见海拔的频数分布。[S02][S04] |

图像必须保留的雄鸟锚点：巨大黄喙、低平黄色盔突、盔突前端双尖与黑边、红虹膜、黑眼周、黑体、白翼带、白尾及宽黑色近尾端带、被尾脂染成黄奶油色的颈部。[S02][S08]

雌鸟的可判别锚点是白至蓝白虹膜、红或粉红眼周、较小盔突且没有雄鸟式黑色轮廓线。雌鸟不是缩小版红眼雄鸟。幼鸟盔突要经过约五年才发育成熟；没有年龄证据时不要给幼鸟画完整成年盔突。[S02][S08]

## 食性、繁殖与生态作用

食谱以果实为主，无花果在多地研究中占重要位置。它会吞食核果和带假种皮果实，也捕食昆虫、蛙、蜥蜴、蛇、小型哺乳动物、小鸟和鸟卵。页面可称“以果实为主的杂食动物”，不能写成纯素食、专食无花果或顶级捕食者。[S02][S07]

双角犀鸟吞下果实后在林间移动并排出或吐出种子，能够连接分散的结果树和更新地点。该作用受果实种类、种子处理方式和移动距离影响；一张取果图只能展示潜在传播链条的一步，不能证明图中果实已经成功萌发。[S02][S07]

雌鸟在天然洞穴内繁殖，封窄入口后依赖雄鸟从缝外递食。IUCN 汇总的平均占巢期约 120 天，范围 102 至 144 天；雏鸟约在雌鸟入洞 40 天后孵出，多数巢产生一只雏鸟。不同纬度的繁殖起始月不同，不应把云南 3 至 6 月写成全分布区统一日历。[S02][S07][S13]

## 四项精选数据

| `key` | `label` | `value` | `unit` | `note` |
| --- | --- | --- | --- | --- |
| `mature-population` | 全球成熟个体 | `13,000–27,000` | 只 | 2020 IUCN 的 poor/inferred 外推，不是同步普查。[S02][S04] |
| `projected-decline` | 未来三代预计下降 | `30–49` | `%` | 三代约 54.9 年；区间为疑似趋势档位。[S02][S04] |
| `adult-mass` | 成鸟体重 | `2.157–3.900` | `kg` | 合并两性；雄鸟和雌鸟范围不同。[S08] |
| `nesting-period` | 占巢期 | `102–144` | 天 | 多地汇总范围，平均约 120 天。[S02][S07] |

翼展 146 至 160 厘米可进入 `measurements` 和 `metrics`，但不优先做统计卡。其公开来源没有样本量和测量方法，证据强度低于 IUCN 数量字段和专家组两性体重。[S09]

## 六段故事文案

下列六段可进入 `storySections`；每段与同序号图片对应。

1. **盔突写着成年与性别**：双角犀鸟的黄色大喙上方托着低平盔突。成年雄鸟红眼、黑眼周，盔突更大并带黑边；成年雌鸟白至蓝白眼、红色眼周，盔突较小。颈部的黄奶油色来自带色尾脂对浅色羽毛的染色。[S02][S08]
2. **果树把森林连成路线**：无花果和其他肉质果实把双角犀鸟吸引到树冠。它吞食、移动并处理种子，也会捕捉小型动物。非繁殖期个体能跨越大片森林追随短暂的结果高峰。[S02][S07]
3. **树洞只留一条缝**：雌鸟进入大型天然树洞后封窄入口，雄鸟把果实和动物性食物从缝外递入。占巢过程平均约四个月；巢树倒下或雄鸟被猎杀，洞内雌鸟和雏鸟会同时失去保障。[S02][S07]
4. **白色翼带在飞行中展开**：宽翼拍动时能产生远处可闻的振翼声。展开的翅膀露出白色带纹，白尾横过宽黑带；这些场标能把它与同域其他大型犀鸟区分开。[S08][S12]
5. **大鸟需要大片森林**：大型结果树供食，大型空洞树供巢，林块之间的连续性供季节移动。选择性砍伐即使留下绿色树冠，也可能先移除最重要的巢树和食物树。[S02][S07]
6. **守住一棵巢树，也要守住周围森林**：泰国和印度的项目让社区守护者监测天然巢，并修复部分受损洞穴。巢树保护能提高单巢安全，长期恢复仍需要反捕猎、大片低地林和持续种群监测。[S02]

## 威胁与保护行动

### `threats`

1. 农业、种植园、住房和道路扩张造成湿润低地林清除、退化与破碎化。[S02]
2. 选择性砍伐和老树死亡移除大型结果树、夜栖树及天然洞穴巢树。[S02][S07]
3. 捕猎者为食物、脂肪、盔突和尾羽猎杀成鸟；固定果树和重复使用的巢洞增加可预测性。[S02]
4. 宠物贸易与掏取雏鸟直接破坏繁殖；CITES 附录 I 仍不能替代地方执法。[S02][S11]
5. 小型孤立林块难以支撑非繁殖期广域移动，保护地外密度常显著低于连续森林。[S02][S04]

### `conservationActions`

1. 保护和连接大片低地与山地湿润林，优先保留大型结果树、巢树和已知夜栖地。[S02]
2. 采用可比方法监测成熟个体、巢占用、繁殖结果、范围收缩与保护地外移动。[S02][S03]
3. 与社区共同减少捕猎和掏巢，执行国家一级保护与 CITES 附录 I 的许可和贸易管制。[S10][S11]
4. 培训并支付社区巢树守护者，公开记录监测方法；捐助金额或“认养”数量不能代替繁殖成效数据。[S02]
5. 由专业人员评估后修复受损天然洞穴或设置适配巢箱，并比较入住率、孵化和出飞结果。[S02]
6. 保留圈养种群的谱系和遗传管理；只有在威胁受控、栖息地适宜和风险评估完成后，才考虑补充或重引入。[S02]

## 六张图像方案

共同规格：1536×1024、3:2、不透明 RGB、写实自然史摄影；禁止文字、标志、水印、边框、幻想盔突、多余鸟、笼舍和投喂台。所有场景都是代表性重建，不表示实名地点、个体、巢或研究结果。

### 01 封面：`01-canopy-perch-cover-source.png`

- 运行文件：`./images/species/great-hornbill/01-canopy-perch-cover.webp`
- 场景：一只完整成年雄鸟停在成熟湿润森林树冠枝条上，主体位于右侧，左侧保留安静林景。
- `alt`：`一只完整的雄性双角犀鸟停在湿润森林右侧树枝上，巨大黄黑喙盔、折叠双翼、双足和白尾黑带均在画内，左侧留出林冠背景。`
- `title`：`雨林树冠上的双角犀鸟`
- `caption`：`成年雄鸟具有红虹膜、黑眼周和带黑边的较大盔突；本图中的眼部因远景尺寸不足以独立判色。`
- 最终 `focalPoint`：`{ x: 0.751, y: 0.417 }`
- 生成提示词：

```text
Use case: photorealistic-natural. Asset type: Fauna Atlas species cover. One complete adult male Great Hornbill Buceros bicornis perched naturally on a diagonal branch in mature South and Southeast Asian tropical moist forest; anatomically accurate huge yellow curved bill, low flat yellow casque with black edges and two forward points, red iris with black orbital skin, black body, creamy yellow oil-stained neck, white wing band, complete white tail with one broad black subterminal band, both feet gripping the branch. Wide 3:2 editorial wildlife photograph, 1536x1024; place the complete bird on the right with its visual center at x=0.68 or farther right; keep the left 40 percent quiet, dark and low-detail for hero copy; leave real forest background around bill, casque, back, feet and tail. Soft filtered morning light, restrained forest greens, natural feather detail. No crop of any body part, no second bird, no fruit, no nest, no human, no text, logo, watermark, border, fantasy color, oversized solid casque or extra horns.
```

最终源图为 1536×1024、不透明 8-bit indexed-color PNG；运行文件为同尺寸 YUV WebP。2026-09-03 检查快照的源 PNG SHA-256 为 `0fe20b8bd3a869cb99fd43b23dc5d2094fa6e5af1c69ff6d65aacf847f61399c`，运行时 WebP SHA-256 为 `24c14fb5074994fb3ddc816f7dc23b46ccd5cc450928c11bebc52436972acf1c`。原尺寸复核采用向外取整的保守完整主体框 `B=[975,297,1120,618]`；边界包括喙尖、盔突、头顶、折叠双翼、双足和尾端，中心横坐标为源图宽度的 68.2%。主体位于右侧，`x=0..614` 的左 40% 没有第二只鸟。湿润森林、黑体、黄染颈、白翼带和白尾黑带可信；红虹膜在远景中不足以独立判色，侧视角只清楚显示双尖盔突的一侧，不能把封面当作眼色或盔突横截面的教学图。[S02][S08]

按仓库当前 `object-fit: cover` 与动画端点公式，`focalPoint: { x: 0.751, y: 0.417 }` 在 6 个目标视口、6 个静态端点形成 36 项完整主体检查。全部净空超过 24 CSS px；最紧一项为 3840×900、`scale(1.04)` 初始帧的底部 31.1 px。先前 `{ x: 0.69, y: 0.44 }` 在同一状态把上边缘推到 -5.4 px，因此不能使用。完整计算和文件哈希记录在素材 README。

### 02 雌雄外形：`02-adult-sex-comparison-source.png`

- 运行文件：`./images/species/great-hornbill/02-adult-sex-comparison.webp`
- `alt`：`一雄一雌两只成年双角犀鸟完整并排停栖，左鸟深红虹膜、黑眼周且盔突较大并带黑边，右鸟淡蓝白虹膜、红粉眼周且盔突较小并无黑边。`
- `title`：`成年雌雄的眼色与盔突`
- `caption`：`成年雄鸟通常有深红虹膜、黑眼周和带黑边的大盔突；成年雌鸟有白至蓝白虹膜、红粉眼周和较小盔突；画面只用于展示组合识别特征。`
- 建议 `focalPoint`：`{ x: 0.50, y: 0.49 }`
- 提示词：

```text
Use case: photorealistic-natural. Asset type: Fauna Atlas morphology comparison. Exactly two complete adult Great Hornbills Buceros bicornis perched on one broad branch in mature tropical moist forest, same scale and unobstructed. Left bird is an adult male with red iris, black orbital skin, a large low flat yellow casque with clear black front and rear edges and two forward points. Right bird is an adult female, slightly smaller, with a white to pale blue-white iris surrounded by red-pink orbital skin, a smaller yellow casque with no male-like black rim. Both birds have black bodies, creamy pale necks with restrained yellow oil staining, white wing bands and complete white tails crossed by one broad black subterminal band. Documentary field-guide clarity, 1536x1024, 3:2. No juvenile, no two males, no red iris on female, no black orbital skin on female, no identical casques, no cropped bill, feet or tail, no text, labels, arrows, logo or watermark.
```

初版 `exec-12411a81-63d9-46d6-9fdc-f6f89836c71d.png` 因两鸟都呈雄鸟式眼部和盔突而拒绝。第一修订 `exec-7a7e7815-335a-45d6-a86f-be19649f2b69.png` 已缩小右鸟盔突并改浅虹膜，但雄鸟虹膜和雌鸟眼周颜色仍不足，继续拒绝。最终版 `exec-3e5621e1-f458-449d-9fd1-ae3e2d66bdf4.png` 在原尺寸 PNG 与 WebP 中清楚显示左雄鸟的深红虹膜、黑眼周和较大黑边盔突，以及右雌鸟的淡蓝白虹膜、红粉眼周和较小无黑边盔突；两鸟全身均在画内。源 PNG SHA-256 为 `8aa923b5782f6841b9bc04bdf6b718e2adf5a6d35c26673d8ae7a9e74a672b7a`，运行时 WebP SHA-256 为 `bb0822bcf7ec87ee0fcffda5357ebf02fdb25061a207307b9110380d8b228ffe`。画面通过形态接入，但仍是科学情景重建，不是标本、校准色卡或体尺对照。[S08]

### 03 封巢递果：`03-sealed-cavity-feeding-source.png`

- 运行文件：`./images/species/great-hornbill/03-sealed-cavity-feeding.webp`
- `alt`：`雄性双角犀鸟在高大树干外，将一枚果实递向封窄的树洞巢口，洞内露出雌鸟白眼和喙尖。`
- `title`：`树洞只留下递食缝`
- `caption`：`雌鸟在洞内封窄入口后依赖雄鸟递食；粗糙封壁与窄缝为代表性重建，不表示材料的固定配方。`
- 建议 `focalPoint`：`{ x: 0.58, y: 0.49 }`
- 提示词：

```text
Use case: photorealistic-natural. Asset type: Fauna Atlas breeding-behavior image. A mature tropical moist forest tree with one natural high trunk cavity whose entrance has been reduced by a rough irregular gray-brown organic seal wall to one narrow vertical feeding slit, not smooth mud bricks and not cement. Exactly one complete adult male Great Hornbill Buceros bicornis clings or perches outside, red iris and black orbital skin visible, passing exactly one small whole fig through the slit with the tip of his huge yellow bill. Inside the dark cavity show only the adult female's bill tip and one correctly pale white to blue-white iris surrounded by red-pink orbital skin; keep her body concealed. Accurate black-and-white plumage and male casque, restrained yellow oil staining, no direct bill fusion. Documentary natural-history photograph, 1536x1024, 3:2. No chick visible, no egg, no second male, no red iris on female, no open round hole, no ladder, human, nest box, masonry, text, logo or watermark.
```

初版 `exec-0aaee9b1-95ee-40cf-8110-465794b197b2.png` 因洞内雌鸟眼色和封壁轮廓不清而拒绝。封壁修订 `exec-2f7cf839-ccff-4ee4-9173-cd83065cc7c5.png` 保留粗糙有机封壁，但雌雄眼色仍不足；中间输出 `exec-f00cf2f6-6191-41ea-99c7-4caab2262f2a.png` 未采用。最终版 `exec-8c16c631-9df2-49b5-afa3-751e6641f6fd.png` 在原尺寸 PNG 与 WebP 中显示外侧雄鸟的红虹膜、洞内雌鸟的淡蓝白虹膜、一枚果实、窄缝和区别于树皮的粗糙灰褐有机封壁。源 PNG SHA-256 为 `9c75da78684a1277f7336f37e695fbf5b0321748e245c558262bc07a83aa01af`，运行时 WebP SHA-256 为 `a8c928e85f63dadeaf2065798ba952871d7e0d76b475547e46ac36036eb8d66b`。画面通过接入；它不支持推定具体巢位、繁殖阶段、递食结果或封壁材料比例。[S08][S12]

### 04 树冠取果：`04-canopy-fig-toss-source.png`

- 运行文件：`./images/species/great-hornbill/04-canopy-fig-toss.webp`
- `alt`：`一只雄性双角犀鸟在结果树冠张喙抛接一枚小果实。`
- `title`：`追随树冠的果实脉冲`
- `caption`：`双角犀鸟以果实为主，也摄取小型动物；图中抛接动作不证明这枚果实最终完成种子传播。`
- 建议 `focalPoint`：`{ x: 0.57, y: 0.46 }`
- 提示词：

```text
Use case: photorealistic-natural. Asset type: Fauna Atlas feeding-behavior image. Exactly one complete adult male Great Hornbill Buceros bicornis perched in the canopy beside a naturally fruiting tropical fig branch, head tilted slightly upward while tossing exactly one small ripe fig immediately above the open bill before swallowing. Accurate red iris and black orbital skin, huge yellow bill, low flat yellow casque with black edges and two forward points, black body, creamy yellow-stained neck, white wing band and complete white tail with broad black subterminal band. Keep several attached figs on the branch and show no hand or feeder. Documentary high-canopy wildlife photograph, 1536x1024, 3:2, soft natural light. No invented giant fruit, no fruit pile, no extra birds, no prey, no crop of tail or casque, no text, logo or watermark.
```

证据边界：果实只表现广义小型肉质果，不应在没有植物鉴定特征时把图注写成某个确定无花果种。[S02][S07]

原版 `exec-efd9ecfc-9797-4dea-a41f-3c11ca64c7a5.png` 因雄鸟虹膜呈褐黄色而拒绝。最终版 `exec-fd644ded-562b-4797-aa61-a3b4d90fd7ce.png` 保留完整鸟体、抛起的一枚果实和结果枝，并把雄鸟虹膜修正为红色；源 PNG SHA-256 为 `e2c12bf27dd6d746c5aa184c0d4c22f609a867af11e923c219eb5d8175ff45b4`，运行时 WebP SHA-256 为 `7393c09af49a4df76448345f3b1d2791cccca5197e0032d480440c448c10b982`。原尺寸复核通过；枝叶和果实没有足够特征支持植物种鉴定。

### 05 展翼飞行：`05-full-wing-flight-source.png`

- 运行文件：`./images/species/great-hornbill/05-full-wing-flight.webp`
- `alt`：`一只成年双角犀鸟在雾气森林上方完整展翼飞行，宽翼白带和白尾黑带清楚可见。`
- `title`：`宽翼掠过森林上空`
- `caption`：`飞行时展开的白色翼带与白尾黑带形成醒目标记；单帧图像不能呈现其可远闻的振翼声。`
- 建议 `focalPoint`：`{ x: 0.55, y: 0.47 }`
- 提示词：

```text
Use case: photorealistic-natural. Asset type: Fauna Atlas flight morphology image. Exactly one complete adult Great Hornbill Buceros bicornis flying across a mist-softened tropical forest valley in a shallow three-quarter side view, both broad rounded wings fully extended from tip to tip, separated primary feathers, correct white bands across the flight feathers, black body, creamy yellow-stained neck, huge yellow bill and low flat casque, complete white tail spread behind with one broad black subterminal band. Leave clear air around both wing tips, bill, casque and tail. Documentary telephoto wildlife photograph, 1536x1024, 3:2, restrained light and color. No eagle-like hooked bill, no narrow falcon wings, no extra tail feathers, no duplicate wings, no second bird, no crop, no text, logo or watermark.
```

证据边界：画面重建飞行场标，不表示速度、高度、路线或迁徙。[S03][S08]

原版 `exec-d804bd8f-4c28-4e4c-bf6a-f80f4a79ffe3.png` 因针状初级飞羽和机械重复的白色羽端而拒绝。最终版 `exec-f238471b-7c08-40f4-aef3-ad9c16eff2b3.png` 显示一只完整飞鸟、自然渐宽的分离初级飞羽、连续白色翼带和白尾黑带；源 PNG SHA-256 为 `0dfb3353c20547cbb6c40fd32b836d0014310b0836120326a328219d170d24c0`，运行时 WebP SHA-256 为 `f787b762c323fd6250f2be909e8177a4612598b1a17d70937c10d61c483649e2`。原尺寸复核通过；静帧仍不提供振翼声、速度、高度或路线证据。[S03][S08][S12]

### 06 社区巢树守护：`06-community-nest-guardians-source.png`

- 运行文件：`./images/species/great-hornbill/06-community-nest-guardians.webp`
- `alt`：`两名社区监测员在成熟雨林林下观察一棵高大洞穴树，相邻树冠停着一只完整的雄性双角犀鸟。`
- `title`：`社区守护巢树`
- `caption`：`泰国与印度的项目曾培训巢树守护者监测并保护野外犀鸟巢；本图为非特定地点的代表性重建，不表示巢内繁殖结果。`
- 建议 `focalPoint`：`{ x: 0.62, y: 0.50 }`
- 提示词：

```text
Use case: photorealistic-natural. Asset type: Fauna Atlas Great Hornbill gallery image. A wide documentary wildlife-conservation scene in mature South and Southeast Asian tropical moist lowland forest: one immense old emergent tree with a small natural cavity high in the trunk; exactly two small community nest guardians on the forest floor at a clearly non-invasive distance, one using binoculars and one writing in a field notebook; exactly one complete adult male Great Hornbill Buceros bicornis perched in the adjacent upper canopy, anatomically accurate huge yellow bill, low flat yellow casque with black edges and two forward points, red iris with black orbital skin, black body, white wing band, white tail with broad black subterminal band, yellow oil-stained neck; people and bird fully visible, no contact. Soft overcast morning, restrained greens and browns, museum natural-history editorial photography, 1536x1024, 3:2. No nest opening, ladder, climbing, handling, bait, feeding, flash, drone, trap, cage, telemetry device, text, logo, watermark, fantasy color, extra people or extra birds.
```

证据边界：图像综合 IUCN 记录的社区守巢模式，不复原具体项目、民族服饰、人员、监测设备、巢位或成功率。[S02]

## 封面完整主体边界验收计划

1. 生成最终 WebP 后记录源 PNG 尺寸、运行时 WebP SHA-256、最终 `focalPoint` 和原图像素坐标中的完整主体边界。边界必须包括盔突、喙尖、头顶、背部、两翼外缘、双足和尾端；树枝不计入动物边界。
2. 在源 PNG 与运行时 WebP 原分辨率下逐项核对雄鸟形态：黄黑喙盔、黑体、黄染颈、白翼带、白尾黑带。眼色若像素不足，只记录“不可判读”，不凭提示词判定红虹膜已经画出。
3. 使用提交后的 `focalPoint: { x: 0.751, y: 0.417 }`，在 320×760、390×760、1366×768、1920×900、2560×900 和 3840×900 六个视口模拟 `object-fit: cover`。分别检查定格、初始、向前和向后进出动画端点。
4. 每个裁切中让完整主体边界距可视边缘至少 24 CSS px，同时检查鸟体不进入左侧标题、简介和按钮区，不被右侧轮播面板遮挡。3840×900 是当前候选的约束视口；若精测主体高度无法同时留出上下 24 px，重新生成更小主体版本。
5. `focalPoint` 只控制取景位置。任何身体部位在源图缺失、运行时裁掉或被界面遮挡时，调整源构图或增加响应式 art direction；不能把数值改动本身当作通过证据。
6. 在 `tests/hero-carousel.test.mjs` 增加双角犀鸟完整主体案例，运行 `npm run test:carousel`。遵守仓库验证约束，只用测试和静态图像裁切检查，不启动 GUI 或无头浏览器。

## 完整 `Species` 草案

```ts
const GREAT_HORNBILL_SOURCE_DATE = '2026-09-03' as const;
const GREAT_HORNBILL_CONTENT_DATE = '2026-09-03' as const;

const GREAT_HORNBILL_SOURCES = [
  {
    title: 'AviList v2025b',
    url: 'https://doi.org/10.2173/avilist.v2025b',
    kind: 'taxonomy',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List 2020: Buceros bicornis',
    url: 'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T22682453A184603863.en',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone: Great Hornbill factsheet',
    url: 'https://datazone.birdlife.org/species/factsheet/great-hornbill-buceros-bicornis',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone API: assessment history',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/history',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone API: countries',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/countries',
    kind: 'distribution',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone API: habitats',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/habitats',
    kind: 'ecology',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'BirdLife DataZone API: range, ecology, threats and actions',
    url: 'https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/text',
    kind: 'ecology',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'IUCN SSC Hornbill Specialist Group: Great hornbill',
    url: 'https://iucnhornbills.org/great-hornbill/',
    kind: 'general',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: '云南省林草局：曲靖查获一只双角犀鸟',
    url: 'https://lcj.yn.gov.cn/html/2016/zuixindongtai_1116/46621.html',
    kind: 'general',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: '国家重点保护野生动物名录',
    url: 'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'CITES Checklist: Buceros bicornis',
    url: 'https://checklist.cites.org/',
    kind: 'conservation',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: 'Birds of the World: Great Hornbill',
    url: 'https://doi.org/10.2173/bow.grehor1.01',
    kind: 'ecology',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
  {
    title: '国家林草局：双角犀鸟，雨林里的曼妙珍禽',
    url: 'https://www.forestry.gov.cn/c/www/dw/362497.jhtml',
    kind: 'general',
    accessedAt: GREAT_HORNBILL_SOURCE_DATE,
  },
] satisfies readonly SpeciesSource[];

const greatHornbill: Species = {
  id: 'species-buceros-bicornis',
  slug: 'great-hornbill',
  names: {
    zh: '双角犀鸟',
    en: 'Great Hornbill',
    aliases: ['大犀鸟', 'Great Indian Hornbill', 'Great Pied Hornbill'],
  },
  scientificName: 'Buceros bicornis',
  taxonomy: {
    kingdom: { scientificName: 'Animalia', zhName: '动物界' },
    phylum: { scientificName: 'Chordata', zhName: '脊索动物门' },
    class: { scientificName: 'Aves', zhName: '鸟纲' },
    order: { scientificName: 'Bucerotiformes', zhName: '犀鸟目' },
    family: { scientificName: 'Bucerotidae', zhName: '犀鸟科' },
    genus: { scientificName: 'Buceros', zhName: '犀鸟属' },
  },
  conservation: conservation('VU', 'decreasing', 2020, 'A3cd+4cd'),
  distribution: {
    realms: ['terrestrial'],
    continents: ['亚洲'],
    regions: [
      '喜马拉雅南麓与印度东北部',
      '印度西高止山脉',
      '中国西南边境',
      '大陆东南亚',
      '马来半岛与苏门答腊',
    ],
    countries: [
      '孟加拉国', '不丹', '柬埔寨', '中国', '印度', '印度尼西亚',
      '老挝', '马来西亚', '缅甸', '尼泊尔', '泰国', '越南',
    ],
    range:
      '破碎分布于南亚和东南亚的湿润森林，从喜马拉雅南麓、印度东北部和西高止山脉，经中国西南边境与中南半岛，延伸至马来半岛和印度尼西亚苏门答腊。',
    center: { lat: 19, lng: 96 },
  },
  habitats: [
    {
      name: '热带与亚热带湿润低地林',
      realm: 'terrestrial',
      description: '连续林冠、结果大树和大型天然树洞共同提供食物、巢位与移动通道。',
      isPrimary: true,
    },
    {
      name: '湿润山地林与混交落叶林',
      realm: 'terrestrial',
      description: '沿山坡利用湿润常绿林和混交落叶林，已知记录从低地延伸至约 2,000 米。',
    },
    {
      name: '保留大树的种植园与乡村园地',
      realm: 'terrestrial',
      description: '只在邻接森林并保有大型巢树和食物树时提供补充生境，不能替代连续成熟林。',
    },
  ],
  measurements: {
    length: {
      min: 112,
      max: 150,
      unit: 'cm',
      note: '雌鸟 112–125 cm；雄鸟 121–150 cm。',
    },
    weight: {
      min: 2.157,
      max: 3.9,
      unit: 'kg',
      note: '雌鸟 2.157–3.350 kg；雄鸟 2.610–3.900 kg。',
    },
    wingspan: {
      min: 146,
      max: 160,
      unit: 'cm',
      note: '中国林草主管部门公开范围，来源未附原始样本表。',
    },
  },
  diet: {
    types: ['omnivore'],
    foods: ['无花果与其他肉质果实', '带假种皮种子', '昆虫', '两栖类与爬行动物', '小型哺乳动物', '小鸟与鸟卵'],
    description: '以树冠果实为主，也机会性捕食小型动物；食物组成随地点、季节和结果树变化。',
  },
  activity: ['昼行性', '树冠层活动', '繁殖期活动范围收缩', '非繁殖期追随果源广域移动'],
  tags: ['鸟类', '犀鸟', '热带森林', '树洞巢', '大型食果鸟', '种子传播者', '易危'],
  summary: '以巨大黄黑喙盔和白尾黑带著称的亚洲大型犀鸟；雌鸟封居树洞，雄鸟从窄缝递食。',
  description:
    '双角犀鸟生活在南亚和东南亚的湿润低地林、山地林及相邻的大树景观。它以果实为主并传播种子，也捕食小型动物。繁殖时雌鸟封窄天然树洞入口，雄鸟承担洞外供食。森林破碎化、大型巢树与食物树损失、捕猎和贸易推动其种群下降。',
  storySections: [
    {
      key: 'casque-and-sex',
      label: '形态',
      title: '盔突写着成年与性别',
      body: '双角犀鸟的黄色大喙上方托着低平盔突。成年雄鸟红眼、黑眼周，盔突更大并带黑边；成年雌鸟白至蓝白眼、红色眼周，盔突较小。颈部的黄奶油色来自带色尾脂对浅色羽毛的染色。',
    },
    {
      key: 'fruit-routes',
      label: '食性',
      title: '果树把森林连成路线',
      body: '无花果和其他肉质果实把双角犀鸟吸引到树冠。它吞食、移动并处理种子，也会捕捉小型动物。非繁殖期个体能跨越大片森林追随短暂的结果高峰。',
    },
    {
      key: 'sealed-cavity',
      label: '繁殖',
      title: '树洞只留一条缝',
      body: '雌鸟进入大型天然树洞后封窄入口，雄鸟把果实和动物性食物从缝外递入。占巢过程平均约四个月；巢树倒下或雄鸟被猎杀，洞内雌鸟和雏鸟会同时失去保障。',
    },
    {
      key: 'flight-pattern',
      label: '飞行',
      title: '白色翼带在飞行中展开',
      body: '宽翼拍动时能产生远处可闻的振翼声。展开的翅膀露出白色带纹，白尾横过宽黑带；这些场标能把它与同域其他大型犀鸟区分开。',
    },
    {
      key: 'large-forest',
      label: '生境',
      title: '大鸟需要大片森林',
      body: '大型结果树供食，大型空洞树供巢，林块之间的连续性供季节移动。选择性砍伐即使留下绿色树冠，也可能先移除最重要的巢树和食物树。',
    },
    {
      key: 'nest-guardians',
      label: '保护',
      title: '守住一棵巢树，也要守住周围森林',
      body: '泰国和印度的项目让社区守护者监测天然巢，并修复部分受损洞穴。巢树保护能提高单巢安全，长期恢复仍需要反捕猎、大片低地林和持续种群监测。',
    },
  ],
  keyFacts: [
    '接受学名为 Buceros bicornis Linnaeus, 1758，归入犀鸟目、犀鸟科、犀鸟属。',
    '全球 IUCN 状态为易危，趋势下降，2020 年判据 A3cd+4cd。',
    '全球成熟个体估计为 13,000 至 27,000 只，数据质量为 poor。',
    '雄鸟红虹膜、黑眼周并有带黑边的大盔突；雌鸟白至蓝白虹膜、红色眼周且盔突较小。',
    '以果实为主，也摄取昆虫、脊椎动物和鸟卵。',
    '雌鸟封居天然树洞，雄鸟从窄缝递食；占巢期平均约 120 天。',
    '中国把双角犀鸟列为国家一级重点保护野生动物；国际贸易受 CITES 附录 I 管制。',
  ],
  threats: [
    '农业、种植园、住房和道路扩张造成湿润森林清除、退化与破碎化。',
    '选择性砍伐和老树死亡移除大型结果树、夜栖树及天然洞穴巢树。',
    '为食物、脂肪、盔突和尾羽捕猎成鸟。',
    '宠物贸易和掏取雏鸟直接破坏繁殖。',
    '小型孤立林块难以支撑非繁殖期广域移动。',
  ],
  conservationActions: [
    '保护并连接大片湿润森林，优先保留大型结果树、巢树和夜栖地。',
    '标准化监测成熟个体、巢占用、繁殖结果、范围收缩和保护地外移动。',
    '与社区共同减少捕猎和掏巢，执行国家一级保护与 CITES 附录 I 管制。',
    '培训并支持社区巢树守护者长期监测野外巢。',
    '专业评估后修复受损天然洞穴或设置适配巢箱，并验证繁殖结果。',
    '保留圈养种群谱系，待威胁受控和栖息地评估完成后再考虑补充或重引入。',
  ],
  metrics: {
    adultLengthCm: [112, 150],
    adultMassKg: [2.157, 3.9],
    wingspanCm: [146, 160],
    elevationM: [0, 2000],
    estimatedMatureIndividuals: [13000, 27000],
  },
  featuredStats: [
    {
      key: 'mature-population',
      label: '全球成熟个体',
      value: '13,000–27,000',
      unit: '只',
      note: '2020 IUCN 的 poor/inferred 外推，不是同步普查。',
    },
    {
      key: 'projected-decline',
      label: '未来三代预计下降',
      value: '30–49',
      unit: '%',
      note: '三代约 54.9 年；属于疑似趋势区间。',
    },
    {
      key: 'adult-mass',
      label: '成鸟体重',
      value: '2.157–3.900',
      unit: 'kg',
      note: '合并两性范围。',
    },
    {
      key: 'nesting-period',
      label: '占巢期',
      value: '102–144',
      unit: '天',
      note: '多地汇总范围，平均约 120 天。',
    },
  ],
  media: {
    image: './images/species/great-hornbill/01-canopy-perch-cover.webp',
    alt: '一只完整的雄性双角犀鸟停在湿润森林右侧树枝上，巨大黄黑喙盔、折叠双翼、双足和白尾黑带均在画内，左侧留出林冠背景。',
    focalPoint: { x: 0.751, y: 0.417 },
    credit: 'Fauna Atlas · AI 生成科学情景重建',
    gallery: [
      {
        image: './images/species/great-hornbill/02-adult-sex-comparison.webp',
        alt: '一雄一雌两只成年双角犀鸟完整并排停栖，左鸟深红虹膜、黑眼周且盔突较大并带黑边，右鸟淡蓝白虹膜、红粉眼周且盔突较小并无黑边。',
        title: '成年雌雄的眼色与盔突',
        caption: '成年雄鸟通常有深红虹膜、黑眼周和带黑边的大盔突；成年雌鸟有白至蓝白虹膜、红粉眼周和较小盔突；画面只用于展示组合识别特征。',
        focalPoint: { x: 0.5, y: 0.49 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/great-hornbill/03-sealed-cavity-feeding.webp',
        alt: '雄性双角犀鸟在高大树干外，将一枚果实递向封窄的树洞巢口，洞内露出雌鸟白眼和喙尖。',
        title: '树洞只留下递食缝',
        caption: '雌鸟在洞内封窄入口后依赖雄鸟递食；粗糙封壁与窄缝为代表性重建，不表示材料的固定配方。',
        focalPoint: { x: 0.58, y: 0.49 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/great-hornbill/04-canopy-fig-toss.webp',
        alt: '一只雄性双角犀鸟在结果树冠张喙抛接一枚小果实。',
        title: '追随树冠的果实脉冲',
        caption: '双角犀鸟以果实为主，也摄取小型动物；图中抛接动作不证明这枚果实最终完成种子传播。',
        focalPoint: { x: 0.57, y: 0.46 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/great-hornbill/05-full-wing-flight.webp',
        alt: '一只成年双角犀鸟在雾气森林上方完整展翼飞行，宽翼白带和白尾黑带清楚可见。',
        title: '宽翼掠过森林上空',
        caption: '飞行时展开的白色翼带与白尾黑带形成醒目标记；单帧图像不能呈现其可远闻的振翼声。',
        focalPoint: { x: 0.55, y: 0.47 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
      {
        image: './images/species/great-hornbill/06-community-nest-guardians.webp',
        alt: '两名社区监测员在成熟雨林林下观察一棵高大洞穴树，相邻树冠停着一只完整的雄性双角犀鸟。',
        title: '社区守护巢树',
        caption: '泰国与印度的项目曾培训巢树守护者监测并保护野外犀鸟巢；本图为非特定地点的代表性重建，不表示巢内繁殖结果。',
        focalPoint: { x: 0.62, y: 0.5 },
        credit: 'Fauna Atlas · AI 生成科学情景重建',
      },
    ],
  },
  sources: GREAT_HORNBILL_SOURCES,
  featured: false,
  publishedAt: GREAT_HORNBILL_CONTENT_DATE,
  updatedAt: GREAT_HORNBILL_CONTENT_DATE,
};
```

## 来源索引与证据限制

所有来源访问日期均为 2026-09-03。

- **[S01]** [AviList Core Team 2026, AviList v2025b](https://doi.org/10.2173/avilist.v2025b)。接受分类口径、英文主名、目科属关系。AviList 不提供生态或数量证据。
- **[S02]** [BirdLife International 2020, IUCN Red List: *Buceros bicornis*](https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T22682453A184603863.en)。全球状态、判据、日期、范围、生境、数量、趋势、繁殖、威胁和行动的正式评估。其部分底层资料来自专家通信和局地研究，不能把每个细节视为全分布区同步测量。
- **[S03]** [BirdLife DataZone 物种页](https://datazone.birdlife.org/species/factsheet/great-hornbill-buceros-bicornis)。当前展示状态、非迁徙属性和“正在重评”提示。重评提示不是新评估结果。
- **[S04]** [BirdLife assessment history API](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/history)。结构化核对 2020、VU、A3cd+4cd、Decreasing、18.3 年世代、13,000 至 27,000 只成熟个体及 poor/inferred 字段。
- **[S05]** [BirdLife country API](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/countries)。12 个原生、现存、留居国家。国家级 presence 不能解释为全国连续分布。
- **[S06]** [BirdLife habitat API](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/habitats)。湿润低地林、湿润山地林、种植园和乡村园地分类。`major` 表示评估分类中的重要生境，不表示人工生境质量等于老龄林。
- **[S07]** [BirdLife range, ecology, threats and actions API](https://bli-prod-fd-dz-eu-bgf5eqfcf2bmgtdn.a02.azurefd.net/species/952/text)。范围细节、食物、活动范围、占巢期、威胁与行动。页面整合多项研究，局地数字保留地点边界。
- **[S08]** [IUCN SSC Hornbill Specialist Group, Great hornbill](https://iucnhornbills.org/great-hornbill/)。两性体长、体重、眼色、眼周皮肤、盔突和羽色。体尺是专家资料页范围，不附个体级原始表。
- **[S09]** [云南省林草局：曲靖查获一只双角犀鸟](https://lcj.yn.gov.cn/html/2016/zuixindongtai_1116/46621.html)。公开 119 至 128 厘米体长、146 至 160 厘米翼展和 2.15 至 4 千克体重。页面未公开样本量和测量方法，因此翼展只作展示范围。
- **[S10]** [国家重点保护野生动物名录](https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf)。双角犀鸟中文名和国家一级保护等级。该等级是中国法律口径，不等于 IUCN 类别。
- **[S11]** [CITES Checklist](https://checklist.cites.org/)。*Buceros bicornis* 为附录 I，列有 Great Indian Hornbill、Great Pied Hornbill 等英文俗名。附录 I 不是“所有活动全面禁止”的同义词，贸易仍按公约及国内许可制度解释。
- **[S12]** [Kemp & Boesman 2020, Birds of the World: Great Hornbill](https://doi.org/10.2173/bow.grehor1.01)。形态、鸣声、活动和繁殖的专业物种账户。它属于权威综合数据库，不是单项原始实验。
- **[S13]** [国家林草局：双角犀鸟，雨林里的曼妙珍禽](https://www.forestry.gov.cn/c/www/dw/362497.jhtml)。中国分布、生境和 3 至 6 月繁殖期概述。该月份描述中国情形，不代表整个物种分布区。

## 交接检查

- [x] 接受学名、六阶分类和中英文主名有来源。
- [x] IUCN 状态、评估年、趋势、判据和成熟个体数有结构化证据。
- [x] 12 个国家、生境、食性、活动、体尺、翼展、威胁与保护行动已映射到 schema。
- [x] 四项 `featuredStats`、六段故事和完整 `Species` 草案齐备。
- [x] 六图文件名、精确提示词、`alt`、`title`、`caption`、建议 `focalPoint` 和证据边界齐备。
- [x] 封面源图与运行时 WebP 完成原图静态复核，记录保守完整主体边界、最终 SHA-256 与 `focalPoint`。
- [x] 02 至 05 的未通过版本与修订链均已记录；最终 PNG/WebP 完成原尺寸复核，旧眼色偏差和飞羽问题不再存在。
- [x] 01 已按六个视口和六个静态动画状态完成 36 项完整主体验收；最小净空 31.1 CSS px。
- [ ] 数据、六图、素材 README、专项测试、类型检查、测试与构建全部通过后，才能移除 `docs/todo.md` 中的双角犀鸟条目。
