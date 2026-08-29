# 仿刺参（Apostichopus japonicus）物种档案研究

> 研究截止：2026-08-29
> 用途：Fauna Atlas 物种页内容、结构化字段与六张自然史图的科学约束
> 证据策略：分类采用 WoRMS 当前接受名和 2017 年属级修订；严格的 *A. japonicus* 指修订后的红色型及骨片鉴定材料。2017 年以前把红、绿、黑三种颜色型合在 *A. japonicus* 名下的资料，只有在材料明确为红色型时才作为本种直接证据。其余旧资料标作“历史广义种证据”，不把数值直接移入本种结构化字段。

## 1. 结论摘要

仿刺参的当前接受名是 *Apostichopus japonicus* (Selenka, 1867)，WoRMS AphiaID 为 241776。当前六级分类链是 Animalia、Echinodermata、Holothuroidea、Synallactida、Stichopodidae、*Apostichopus*。[WoRMS taxon record](https://www.marinespecies.org/aphia.php?p=taxdetails&id=241776)；[WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/241776)

这个名字存在影响整页内容的分类断点。2017 年针对日本材料的模式标本与馆藏标本修订认定，过去合在同一物种下的红、绿、黑三种颜色型归入两个有效种：红色型属于 *A. japonicus*；绿色型和黑色型属于 *A. armatus*。两种最可靠的差别位于背侧体壁的微小骨片：*A. japonicus* 的退化桌形骨片边缘平滑，*A. armatus* 则以有刺边缘为主。触手、疣足、管足和泄殖腔骨片彼此相似，活体颜色或普通照片不能完成可靠种级鉴定。这个“两种”结论只描述该修订处理的日本三色型材料，不是 *Apostichopus* 属的全球有效种总数。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)；[WoRMS genus list](https://www.marinespecies.org/aphia.php?p=taxlist&tName=Apostichopus)

中国生态环境部 HJ 1260-2022 附录表列出中文名“仿刺参”、学名 *Apostichopus japonicus* 和刺参科；“刺参”适合作为中文别名。[生态环境部 HJ 1260-2022](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202207/W020220719527543090538.pdf)

IUCN 评估给出 EN、A2bd、decreasing，评估日期为 2010-05-19，2013 年发布。评估依据捕捞量和开发强度推定历史广义种在 30 至 50 年间下降至少 60%。这份评估早于 2017 年拆分，所用中国、韩国、俄罗斯和日本资料混合了现在的两个物种。产品仍应展示 IUCN 的正式等级，但必须把“分类口径早于拆分”写进说明，不能把 60% 当作严格 *A. japonicus* 的当前种群普查结果。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)

严格 *A. japonicus* 分布在中国、日本、朝鲜半岛和俄罗斯的西北太平洋温带浅海。修订文献给出的北界为萨哈林岛，南界为日本鹿儿岛县。红色型常见于较外海的岩石、卵石和砾石底；旧资料中绿色、黑色型的近岸沙泥底生境属于 *A. armatus*，不进入本页主要生境。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)；[Choe & Ohshima 1961](https://doi.org/10.2331/suisan.27.97)

成体有 20 枚盾状口触手、近圆柱形身体、较平的腹面和纵向排列的管足。它以口触手抓取海床表层沉积物，摄入其中的有机碎屑、微藻和微生物。取食动作和夜间摄食峰来自未按 2017 标准复核的历史广义种实验；页面可以解释沉积食机制，却不能把实验时钟写成严格本种的全球固定节律。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)；[Sun et al. 2015](https://doi.org/10.1016/j.physbeh.2014.11.051)

红色型直接资料支持夏眠和完整幼体序列。1961 年日本研究在高温夏季观察到几乎全部红色型进入夏眠，但没有建立可跨地区使用的固定温度阈值。养殖条件下，红色型完成受精卵、囊胚、原肠胚、耳状幼体、樽形幼体、五触手幼体和稚参阶段；该时间表受水温、饵料和养殖条件影响，不写入全局 metrics。[Choe & Ohshima 1961](https://doi.org/10.2331/suisan.27.97)；[Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x)

本页建议 `measurements: {}` 和 `metrics: {}`。海参会快速伸缩，单次活体长度不具可比性；标准化测量研究只使用了现在归入 *A. armatus* 的绿色和黑色型。没有严格本种的可比成体长度、体重、寿命、成熟年龄或全球种群数量可供结构化排序。[Yamana & Hamano 2006](https://doi.org/10.1111/j.1444-2906.2006.01187.x)

## 2. 命名与六级分类

### 推荐展示名

| 字段 | 推荐值 | 依据与边界 |
|---|---|---|
| 中文名 | 仿刺参 | HJ 1260-2022 官方物种表 |
| 中文别名 | 刺参 | 中国渔业、种质和贸易资料常用；不能与刺参科或其他商品海参混同 |
| 英文名 | Japanese Spiky Sea Cucumber | IUCN 评估使用的英文俗名 |
| 英文别名 | Japanese Sea Cucumber | FAO 和科研资料常用 |
| 接受学名 | *Apostichopus japonicus* (Selenka, 1867) | WoRMS 当前接受名 |
| 原始组合 | *Stichopus japonicus* Selenka, 1867 | 旧文献常见，不能作为当前展示学名 |
| WoRMS AphiaID | 241776 | 稳定外部标识 |
| 页面 slug | japanese-sea-cucumber | 与通行英文名一致 |

中文主名依据[生态环境部 HJ 1260-2022 附录 E，第 84 项](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202207/W020220719527543090538.pdf)。IUCN 使用 Japanese Spiky Sea Cucumber；FAO 图鉴常用 Japanese sea cucumber。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)；[FAO species catalogue](https://www.fao.org/4/i1918e/i1918e.pdf)

### 六级分类

| 级别 | 拉丁名 | 中文建议 |
|---|---|---|
| 界 | Animalia | 动物界 |
| 门 | Echinodermata | 棘皮动物门 |
| 纲 | Holothuroidea | 海参纲 |
| 目 | Synallactida | 辛那参目 |
| 科 | Stichopodidae | 刺参科 |
| 属 | *Apostichopus* | 仿刺参属 |

拉丁分类链采用 [WoRMS classification API](https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/241776)。Synallactida 是 2017 年分子系统学修订建立的目级类群；该研究停止使用并系的旧楯手目 Aspidochirotida。[Miller et al. 2017](https://doi.org/10.1016/j.ympev.2017.02.014)。“辛那参目”是当前中文水产资料采用的译名，拉丁名负责消除译名差异。

IUCN 2010 评估仍把本种列在 Aspidochirotida。这反映评估年代，不应覆盖当前结构化分类。

## 3. 2017 年修订后的物种边界

### 日本三色型归入两个有效种

[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7) 重新检查模式标本和日本国立科学博物馆材料，得出以下边界：

| 历史颜色型 | 2017 年后物种 | 可见线索 | 可靠鉴定 |
|---|---|---|---|
| 红色型 | *Apostichopus japonicus* | 活体通常红至红褐，常见于岩石、卵石和砾石底 | 背侧体壁退化桌形骨片的盘缘平滑、不具刺 |
| 绿色型 | *Apostichopus armatus* | 常见绿色至绿褐，旧资料多记于近岸沙泥底 | 背侧体壁以有刺盘缘的退化桌形骨片为主 |
| 黑色型 | *Apostichopus armatus* | 常见深绿至黑，外形与绿色型相近 | 与绿色型相同，需骨片或可验证的分子鉴定 |

两种都可能出现少量平滑边缘骨片。鉴定要看背侧体壁骨片组合中哪一类占优势，不能只检查一枚骨片。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)

早期同工酶和微卫星研究已经发现红色型与绿、黑色型存在明显遗传分化，并提示生殖隔离；2017 年修订把这些差异落实到两个有效种。[Kanno & Kijima 2003](https://doi.org/10.1046/j.1444-2906.2003.00690.x)；[Kanno et al. 2006](https://doi.org/10.1007/s10126-006-6014-8)

### 本档案的三档证据标签

1. **严格本种直接证据**：2017 年修订后的骨片鉴定材料，或旧研究明确写明红色型。
2. **历史广义种证据**：论文使用 *A. japonicus*，却没有颜色型、骨片或分子凭证。只能支持候选机制，不能给严格本种设定全球数值。
3. **近缘种对照**：旧研究明确使用绿色或黑色型。按当前分类属于 *A. armatus*，只用于解释为什么相关数值被排除。

物种页面的普通照片只能展示“符合严格本种外观的红色个体”，不能充当种级凭证。图片 caption 必须保留这条限制。

## 4. 保护与法规状态

### IUCN 正式字段

| 字段 | 推荐值 |
|---|---|
| system | IUCN Red List |
| code | EN |
| label.zh | 濒危 |
| label.en | Endangered |
| trend | decreasing |
| assessedYear | 2010 |
| criteria | A2bd |
| assessor | IUCN Red List，评估于 2010-05-19，2013 年发布；分类口径早于 2017 年拆分 |

[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en) 依据 A2bd 把广义 *A. japonicus* 评为濒危。`assessedYear` 应写实际评估年份 2010，而不是发布年份 2013。

评估汇总的捕捞量趋势为：俄罗斯约下降 80%，中国超过 95%，韩国约 40%，日本约 30%；据此估算全范围在 30 至 50 年间至少下降 60%。评估同时指出，中国野生资源被认为已大范围消失，尚无证据说明大规模人工繁育和海洋牧场放流已经恢复野生种群。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)

这些数字有三层限制：它们主要来自上岸量而不是统一的水下种群调查；时间终点约在 2005 年；分类口径混合现在的 *A. japonicus* 与 *A. armatus*。页面可展示“历史广义种估计至少下降 60%”，不可写成“当前红色型剩余 40%”。

### CITES

截至 2026-08-29，[CITES Appendices](https://cites.org/eng/app/appendices.php) 未列入 *Apostichopus japonicus*。未列 CITES 只表示当前没有该公约附录管制，不说明捕捞可持续，也不改变 IUCN EN。

## 5. 分布

### 严格本种范围

2017 年修订把 *A. japonicus* 的范围概括为中国、日本、韩国和俄罗斯沿岸的温带浅海，北界到俄罗斯萨哈林岛，南界到日本鹿儿岛县。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7) IUCN 的旧广义范围还写明日本北海道至九州、朝鲜半岛、中国和俄罗斯远东；其中物种边界需要按 2017 标准重核。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)

### 结构化地理建议

~~~ts
distribution: {
  realms: ['marine'],
  continents: ['亚洲'],
  regions: [
    '西北太平洋温带沿岸',
    '日本列岛沿岸（北海道至鹿儿岛）',
    '朝鲜半岛沿岸',
    '俄罗斯远东沿岸与萨哈林岛',
    '中国黄海、渤海及相邻北部温带沿岸',
  ],
  countries: ['中国', '日本', '朝鲜', '韩国', '俄罗斯'],
  range:
    '严格 A. japonicus 分布于西北太平洋温带浅海，包括中国、日本、朝鲜半岛和俄罗斯远东沿岸；2017 年修订给出的北界为萨哈林岛、南界为鹿儿岛县。旧广义分布资料混合 A. armatus，具体地点需以骨片或分子凭证重核。',
  center: { lat: 40.0, lng: 135.0 },
}
~~~

`center` 只给地图一个西北太平洋视口，不是种群中心。不要把养殖、移植或偶见输入记录自动加入原生范围。

## 6. 生境与深度

严格本种的稳妥生境是温带浅海硬底。红色型与较外海的岩石、卵石和砾石底联系紧密；绿色、黑色型常见的近岸沙泥底在当前分类下属于 *A. armatus*。[Choe & Ohshima 1961](https://doi.org/10.2331/suisan.27.97)；[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)

~~~ts
habitats: [
  {
    name: '西北太平洋温带浅海硬底',
    realm: 'marine',
    description:
      '严格本种生活在中国、日本、朝鲜半岛和俄罗斯远东的温带浅海，沿海床表面缓慢移动并摄食沉积物。',
    isPrimary: true,
  },
  {
    name: '岩石、卵石与砾石底',
    realm: 'marine',
    description:
      '红色型常与较外海的岩石、卵石和砾石底联系；石块间隙也可提供高温季节隐蔽位置。',
  },
]
~~~

IUCN 旧评估写有潮间带至约 40 米、上部潮下带聚集，以及幼体利用藻场、海草床和牡蛎床。这些信息没有按 2017 年物种边界重核，适合放在研究缺口，不应变成严格本种的深度上限或幼体必需生境。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)

不要填写 `maxDiveDepthM`。海参在海床生活，不执行脊椎动物式潜水；已知栖息深度也不是潜水能力。

## 7. 形态与可靠识别

### 外部形态

[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7) 对严格 *A. japonicus* 的描述支持以下特征：

- 口偏腹面，周围有 20 枚盾状触手。
- 身体粗壮、近圆柱形，腹面较平。
- 背面两行疣足沿背外侧辐部交错成锯齿状。
- 每条腹外侧辐部有一行较大的圆锥形疣足；背面和侧面还散布较小疣足。
- 腹面中央步带区约有 5 至 6 行管足，两侧各约 4 至 5 行。
- 酒精保存标本背面深红褐，侧面和腹面较浅。活体红色型可呈红、砖红或红褐，光线与收缩状态会改变观感。
- 肛门位于后端，口位于前端。不要给图片添加眼、牙、鳃裂或成对附肢。

### 骨片诊断

成体背侧体壁含退化桌形骨片，柱通常消失；圆至椭圆的盘有 2 至 14 个不规则穿孔，边缘平滑或略不齐，但不具刺。幼体背侧体壁可见带四柱的桌形骨片。*A. armatus* 的成体背侧体壁则以盘缘有刺的退化桌形骨片为主。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)

普通图像无法显示这组显微特征。页面应写“红色和硬底生境是线索，骨片或经验证的分子数据才能确认”。

## 8. 尺寸与结构化测量

仿刺参身体会在短时间内显著伸长和收缩。活体长度与体宽呈负相关，单测一条长度会随姿态大幅变化。标准化研究提出用麻醉长度，或同时测量长度与体宽后估算标准体长。[Yamana & Hamano 2006](https://doi.org/10.1111/j.1444-2906.2006.01187.x)

该研究的 150 只材料是绿色和黑色型，按当前分类属于 *A. armatus*。它能证明“单次长度不可靠”，不能为严格 *A. japonicus* 提供长度范围。FAO 和旧综述中的约 20 或 30 厘米数字也混合历史广义种与不同测量状态。

~~~ts
measurements: {},
metrics: {},
~~~

暂不填写：

- 成体长度和体重。
- 寿命、成熟年龄和生长率。
- 最大深度、移动速度和全球种群数。
- 全球成熟个体数。

这些空白比一个不可比较的收缩体长更准确。

## 9. 食性与取食方式

严格本种有 20 枚盾状触手和腹面口，符合表层沉积食方式。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7) 历史广义种的逐帧实验显示，触手以抓取动作拾起沉积颗粒，再依次送入口中；12 小时明暗实验中夜间摄食和排粪较高，摄食峰在 02:00 至 04:00。[Sun et al. 2015](https://doi.org/10.1016/j.physbeh.2014.11.051)

肠内容物与周围表层沉积物的 16S rRNA 比较发现，两者细菌群落组成不同，作者认为选择性摄食是主要解释，同时承认宿主消化和肠内过程也可能影响结果。[Gao et al. 2014](https://doi.org/10.1371/journal.pone.0100092)

日本鱼排下方的 238 天现场养殖和稳定同位素实验显示，幼参能够利用沉降的鱼场颗粒有机物。这支持有机碎屑摄食和多营养层养殖应用，不说明野外严格本种只吃养殖废物。[Yokoyama 2013](https://doi.org/10.1016/j.aquaculture.2012.10.022)

~~~ts
diet: {
  types: ['detritivore'],
  foods: [
    '海床表层沉积物中的有机碎屑',
    '底栖硅藻与其他微藻',
    '沉积物中的细菌和微生物聚集体',
    '分解中的植物与动物来源颗粒物',
  ],
  description:
    '用 20 枚盾状口触手抓取海床表层沉积物，并选择、消化其中的有机碎屑、微藻和微生物。具体食物组成随地点和季节改变；现有行为与肠内容物研究多采用未按 2017 标准复核的历史广义种。',
}
~~~

不要添加 `omnivore` 或 `herbivore`。沉积物中同时存在植物、动物和微生物来源颗粒，不等于主动捕猎或取食活体大型植物。

## 10. 活动、移动与夏眠

海参靠腹面纵列管足附着和缓慢爬行，取食时反复伸出口触手接触底质。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7) 历史广义种实验记录夜间摄食增强，但实验动物未按新分类复核，不能写成严格本种在所有海域的固定昼夜节律。[Sun et al. 2015](https://doi.org/10.1016/j.physbeh.2014.11.051)

红色型有直接夏眠证据。日本 1961 年研究在高温夏季观察到几乎全部红色型夏眠，绿型则随体型出现不同夏眠比例。[Choe & Ohshima 1961](https://doi.org/10.2331/suisan.27.97) 该结果支持“严格本种会在高温季节显著降低活动”，却不能给出全球统一的起始温度、持续月份或体重损失。

~~~ts
activity: [
  '用腹面纵列管足附着海床并缓慢爬行，以 20 枚口触手连续抓取表层沉积物',
  '日本红色型观察显示，高温夏季可进入活动和摄食显著降低的夏眠状态',
  '历史广义种实验记录夜间摄食增强；严格本种的全球昼夜节律仍待验证',
]
~~~

## 11. 繁殖

仿刺参雌雄异体，外观难以区分性别。单一生殖管开口于身体前端背侧、口和触手后方；成熟个体通过这个生殖孔向水中释放精子或卵，进行外部受精。[Gao & Yang 2015 anatomy chapter](https://doi.org/10.1016/B978-0-12-799953-1.00004-0)

注射神经肽 cubifrin-L 的养殖实验记录到连续行为：个体爬上水槽侧壁，抬起并摆动前端，随后释放配子。雄体约在注射后 60 分钟开始，雌体约 80 分钟开始；这些时间只描述诱导实验，不是自然产卵时钟。[Fujiwara et al. 2010](https://doi.org/10.1007/s12562-010-0262-2)

严格红色型在日本佐世保养殖条件下自发产卵。50 只红色亲参发生 3 次产卵，总计约 1200 万枚卵；同场绿色型发生 9 次、约 1.55 亿枚卵。这个对照来自固定亲本数和特定水槽条件，不能用于推算野外个体产卵量，也不能把绿色型数据并入严格本种。[Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x)

红色型与绿色型的产卵期在日本旧研究中不同，支持它们存在生态和生殖分化。季节随纬度、水温和当地环境变化，页面不写一个全球统一月份。[Choe & Ohshima 1961](https://doi.org/10.2331/suisan.27.97)

## 12. 生命周期

红色型养殖研究直接记录了以下阶段：[Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x)

1. 受精卵与早期卵裂。
2. 囊胚。
3. 原肠胚。
4. 耳状幼体 auricularia，透明、能游动，具有连续弯曲的纤毛带和可见消化道。
5. 樽形幼体 doliolaria，身体短缩，纤毛排列成横带。
6. 五触手幼体 pentactula，形成五枚初生触手并准备附着。
7. 底栖稚参，开始形成更多骨片、管足和成体式底栖生活。

该养殖试验中，早期耳状幼体约在 36 小时出现，樽形幼体约在第 14 至 16 天出现，五触手幼体约在第 16 至 17 天出现，稚参约在第 19 天出现。时间受养殖水温、饵料密度和个体状况影响，只可放入实验注释，不进入全局 featuredStats 或 metrics。[Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x)

红色型幼体在同一实验中的存活率到第 10 天已低于 30%，绿色型仍超过 90%。这说明两个现行物种不能共用一个苗种培育参数，也不能据此判断野外红色型幼体天然存活率。[Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x)

没有严格本种直接资料支持固定的性成熟年龄、最长寿命、世代长度或野外幼体漂流距离，相关字段留空。

## 13. 海床生态作用

作为沉积食者，仿刺参摄入表层沉积物并排出重新加工的颗粒，能改变有机物、微生物和营养盐在海床中的分布。现有定量实验大多没有按 2017 年标准复核物种，页面应把它们写成历史广义 *Apostichopus* 机制，而不是严格红色型的全球效应。

84 天水槽实验发现，海参扰动改变了沉积物磷形态和磷吸附特征，包括提高 NaOH 提取态磷、降低有机磷，并增强部分磷吸附能力。作者据此讨论其在综合多营养层养殖中降低富营养化风险的潜力。[Hou et al. 2018](https://doi.org/10.3354/aei00248)

肠内容物和周围沉积物的微生物差异显示，摄食过程会筛选进入肠道的颗粒和细菌群落。[Gao et al. 2014](https://doi.org/10.1371/journal.pone.0100092) 日本鱼场稳定同位素研究则证明养殖幼参可以同化鱼场沉降颗粒。[Yokoyama 2013](https://doi.org/10.1016/j.aquaculture.2012.10.022)

产品可写“翻动和再加工表层沉积物，参与海床有机物与营养盐循环”。不要写“净化海洋”“吃掉所有污染”或“必然修复富营养化”。实验结果依赖密度、底质、供氧、温度和有机负荷。

## 14. 威胁

IUCN 评估确认核心威胁是高价值海参贸易驱动的过度捕捞。动物移动缓慢、容易从浅海底采集，捕捞强度上升后，上岸量下降可能同时反映资源衰退和渔业行为变化。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)

日本水产厅把海参列为容易遭非法捕捞的高价值水产品，并说明未经许可采捕受严格处罚。这支持把偷捕和非法流通列为当前管理问题。[Japan Fisheries Agency](https://www.jfa.maff.go.jp/j/enoki/mitsuryotaisaku.html)

~~~ts
threats: [
  '高价值干制品贸易和市场需求推动的定向过度捕捞',
  '浅海底栖、移动缓慢且容易采集，使局部种群承受偷捕和非法流通压力',
  '岩石、卵石和砾石底受疏浚、岸线工程、沉积物输入与污染改变；严格本种的种群效应仍缺少定量评估',
  '历史上把 A. japonicus 与 A. armatus 混为一种，导致捕捞趋势、放流效果和真实分布难以分开判断',
  '未经物种、遗传和病原风险核验的苗种放流可能把近缘种或不适配种源引入野生种群；实际影响仍需监测',
]
~~~

高温会触发夏眠并缩短摄食和生长期，但现有严格本种研究不足以把气候变暖量化为全球种群下降幅度。可作为研究优先项，不写成已经算清的灭绝比例。

## 15. 保护与渔业管理行动

[FAO sea cucumber fishery guidelines](https://www.fao.org/4/i1384e/i1384e00.htm) 强调组合使用捕捞许可、禁采区、季节关闭、最小采捕尺寸、渔获监测、执法和利益相关方共管。具体阈值必须按当地种群、渔具和数据校准，不能从另一个海参种直接复制。

~~~ts
conservationActions: [
  '按 2017 年分类重建野外基线：保留照片、背侧体壁骨片、组织样本、地点、深度和底质信息，分别统计 A. japonicus 与 A. armatus',
  '用标准化水下样带和重复季节调查监测密度、体型结构、可见率和采捕量，不只依赖市场上岸量',
  '组合使用许可、总量或努力量限制、季节性禁采、最小采捕尺寸和长期禁采区，并根据本地数据定期复核',
  '保护红色型使用的岩石、卵石和砾石底，降低疏浚、岸线工程、污染和过量沉积物输入',
  '加强港口、市场和线上交易的来源追溯及反偷捕执法，并公开可核验的查获和渔获数据',
  '放流前确认现行物种、亲本来源、遗传多样性和病原状态；放流后设置未放流对照并监测存活、繁殖和遗传影响',
  '推动 IUCN 重新评估，把严格 A. japonicus 与 A. armatus 的分布、捕捞趋势和恢复成效分开处理',
]
~~~

大规模人工繁育产量不等于野生种群恢复。IUCN 评估已经指出，当时没有证据证明中国海洋牧场和人工繁育使野生资源恢复。[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en)

## 16. keyFacts 建议

~~~ts
keyFacts: [
  'WoRMS 接受学名 Apostichopus japonicus (Selenka, 1867)，AphiaID 为 241776。',
  '当前分类采用辛那参目 Synallactida；旧楯手目 Aspidochirotida 已在 2017 年海参纲分子系统修订中停用。',
  '2017 年属级修订把过去的红、绿、黑三种颜色型拆成两个有效种。',
  '红色型属于严格 Apostichopus japonicus，绿色型和黑色型属于 A. armatus。',
  '普通照片中的红色只能提供线索，可靠种级鉴定要检查背侧体壁骨片或经验证的分子标记。',
  '严格 A. japonicus 的退化桌形骨片盘缘平滑、不具刺；A. armatus 以有刺盘缘骨片为主。',
  '两种 Apostichopus 的触手、疣足、管足和泄殖腔骨片相似，不能只取这些部位鉴定。',
  '严格本种分布在中国、日本、朝鲜半岛和俄罗斯远东的西北太平洋温带浅海。',
  '2017 年修订给出的北界是萨哈林岛，南界是日本鹿儿岛县。',
  '红色型常与较外海的岩石、卵石和砾石底联系。',
  '旧资料中绿、黑色型的近岸沙泥底生境属于 A. armatus，不进入本页主要生境。',
  '口位于前端偏腹侧，周围有 20 枚盾状触手。',
  '腹面较平，管足沿纵向步带排列并负责附着和缓慢移动。',
  '它以盾状触手抓取海床表层沉积物，摄食其中的有机碎屑、微藻和微生物。',
  '历史广义种实验记录夜间摄食峰，但严格本种的全球昼夜节律仍未验证。',
  '1961 年日本研究在高温夏季观察到几乎全部红色型进入夏眠。',
  '夏眠不是闭眼睡觉，也不会形成茧；个体收缩、隐蔽并显著降低活动和摄食。',
  '雌雄外观难以区分，配子由前端背侧、口触手后方的单一生殖孔释放。',
  '产卵时个体可抬高并摆动前端，把精子或卵释放到海水中完成外部受精。',
  '严格红色型完成受精卵、囊胚、原肠胚、耳状幼体、樽形幼体、五触手幼体和底栖稚参阶段。',
  '养殖条件下的发育天数和卵数不能直接换算成野外固定参数。',
  '沉积摄食和排泄会再加工海床表层颗粒，参与有机物、微生物和营养盐循环。',
  'IUCN 将历史广义种评为 EN A2bd，趋势 decreasing，实际评估日期为 2010-05-19。',
  'IUCN 估算历史广义种在 30 至 50 年间至少下降 60%；该数字早于 2017 年拆分。',
  '截至 2026-08-29，CITES 附录没有列入本种；未列附录不代表捕捞可持续。',
  '单次活体长度会受收缩影响，绿色、黑色型的标准体长公式不能直接用于严格本种。',
  '现有证据不足以填写严格本种的成体长度、体重、寿命、成熟年龄、最大深度或全球个体数。',
  '苗种放流必须先确认物种、遗传来源和病原状态，并设置长期的放流后对照监测。',
]
~~~

## 17. 六段 storySections 建议

### 01 一个旧名字，两个现行物种

**label**：分类

**title**：红色型和绿色型不再共用一张身份证

**body**：

> 很长时间里，红、绿、黑三种海参都叫 Apostichopus japonicus。2017 年，研究者重新检查模式标本和馆藏骨片，认定红色型才是严格 A. japonicus，绿色型和黑色型属于 A. armatus。这个变化不只改了名字，也改变了哪些养殖、温度和食性实验能直接写进本页。

### 02 红色只是第一条线索

**label**：识别

**title**：答案藏在背侧体壁的微小骨片里

**body**：

> 严格仿刺参的背侧体壁含退化桌形骨片，圆盘边缘平滑、不具刺。近缘 A. armatus 则以有刺边缘的同类骨片为主。活体颜色、底质和外形能帮助筛查，却不能替代骨片组合或经过验证的分子鉴定。一张漂亮照片不等于一份分类凭证。

### 03 二十枚触手扫过海床

**label**：取食

**title**：它捡起的不是沙，而是沙里的食物

**body**：

> 口周围的二十枚盾状触手轮流贴近海床，抓起表层沉积物并送入口中。动物消化其中的有机碎屑、微藻和微生物，再排出重新加工的颗粒。实验还发现肠内和周围沉积物的细菌群落不同，说明取食过程并非毫无选择地吞下一切。

### 04 夏天缩进石缝

**label**：行为

**title**：夏眠改变了我们看到它的机会

**body**：

> 日本早期研究在高温夏季观察到几乎全部红色型进入夏眠。它们收缩身体、减少移动和摄食，并利用岩石或砾石间隙隐蔽。不同海域的温度、食物和水流会改变时间表，所以页面不设一个全球通用的“夏眠开关温度”。

### 05 从透明幼体到底栖稚参

**label**：发育

**title**：五辐身体在变态中逐步出现

**body**：

> 红色型的养殖记录从受精卵一路跟到耳状幼体、樽形幼体、五触手幼体和稚参。耳状幼体在水中游动，五触手阶段开始准备附着，稚参才进入海床生活。水槽里的天数受温度和饵料控制，能够解释发育顺序，却不是野外所有个体共用的日历。

### 06 放流前先回答“放的是谁”

**label**：保护

**title**：苗种数量不能替代物种和遗传核验

**body**：

> 旧养殖体系常把两个现行物种都写作 A. japonicus。若苗种没有骨片、遗传来源和病原记录，放流数量再大也无法判断它是否补充了目标野生种群。有效的增殖需要未放流对照、长期回捕或遗传监测，还要公开存活与繁殖结果。

## 18. 四项 featuredStats 建议

~~~ts
featuredStats: [
  {
    key: 'iucn-status',
    label: 'IUCN 等级',
    value: 'EN',
    note: '评估于 2010 年，准则 A2bd；分类口径早于 2017 年拆分',
  },
  {
    key: 'oral-tentacles',
    label: '口触手',
    value: '20',
    unit: '枚',
    note: '盾状触手，用于抓取海床表层沉积物',
  },
  {
    key: 'former-color-types',
    label: '原三色型现行归属',
    value: '2',
    unit: '种',
    note: '2017 年日本材料修订：三种历史颜色型归入 A. japonicus 与 A. armatus；不是该属全球物种数',
  },
  {
    key: 'historic-decline',
    label: '历史广义种估计下降',
    value: '≥60',
    unit: '%',
    note: 'IUCN 对 30 至 50 年窗口的上岸量推定；混合拆分前两种，不是当前严格本种普查',
  },
]
~~~

`EN` 和 `≥60%` 必须一起显示口径说明。不要用红色型水槽的总卵数、实验发育天数或历史广义种长度替代这四项。

## 19. 完整结构化字段建议

~~~ts
{
  id: 'species-apostichopus-japonicus',
  slug: 'japanese-sea-cucumber',
  names: {
    zh: '仿刺参',
    en: 'Japanese Spiky Sea Cucumber',
    aliases: ['刺参', 'Japanese Sea Cucumber'],
  },
  scientificName: 'Apostichopus japonicus',
  taxonomy: {
    kingdom: { scientificName: 'Animalia', zhName: '动物界' },
    phylum: { scientificName: 'Echinodermata', zhName: '棘皮动物门' },
    class: { scientificName: 'Holothuroidea', zhName: '海参纲' },
    order: { scientificName: 'Synallactida', zhName: '辛那参目' },
    family: { scientificName: 'Stichopodidae', zhName: '刺参科' },
    genus: { scientificName: 'Apostichopus', zhName: '仿刺参属' },
  },
  conservation: {
    system: 'IUCN Red List',
    code: 'EN',
    label: { zh: '濒危', en: 'Endangered' },
    trend: 'decreasing',
    assessedYear: 2010,
    criteria: 'A2bd',
    assessor:
      'IUCN Red List，评估于 2010-05-19，2013 年发布；分类口径早于 2017 年 A. japonicus/A. armatus 拆分',
  },
  distribution: {
    realms: ['marine'],
    continents: ['亚洲'],
    regions: [
      '西北太平洋温带沿岸',
      '日本列岛沿岸（北海道至鹿儿岛）',
      '朝鲜半岛沿岸',
      '俄罗斯远东沿岸与萨哈林岛',
      '中国黄海、渤海及相邻北部温带沿岸',
    ],
    countries: ['中国', '日本', '朝鲜', '韩国', '俄罗斯'],
    range:
      '严格 A. japonicus 分布于西北太平洋温带浅海，包括中国、日本、朝鲜半岛和俄罗斯远东沿岸；2017 年修订给出的北界为萨哈林岛、南界为鹿儿岛县。旧广义分布资料混合 A. armatus，具体地点需以骨片或分子凭证重核。',
    center: { lat: 40.0, lng: 135.0 },
  },
  habitats: [
    {
      name: '西北太平洋温带浅海硬底',
      realm: 'marine',
      description:
        '严格本种生活在中国、日本、朝鲜半岛和俄罗斯远东的温带浅海，沿海床表面缓慢移动并摄食沉积物。',
      isPrimary: true,
    },
    {
      name: '岩石、卵石与砾石底',
      realm: 'marine',
      description:
        '红色型常与较外海的岩石、卵石和砾石底联系；石块间隙也可提供高温季节隐蔽位置。',
    },
  ],
  measurements: {},
  diet: {
    types: ['detritivore'],
    foods: [
      '海床表层沉积物中的有机碎屑',
      '底栖硅藻与其他微藻',
      '沉积物中的细菌和微生物聚集体',
      '分解中的植物与动物来源颗粒物',
    ],
    description:
      '用 20 枚盾状口触手抓取海床表层沉积物，并选择、消化其中的有机碎屑、微藻和微生物。具体食物组成随地点和季节改变；现有行为与肠内容物研究多采用未按 2017 标准复核的历史广义种。',
  },
  activity: [
    '用腹面纵列管足附着海床并缓慢爬行，以 20 枚口触手连续抓取表层沉积物',
    '日本红色型观察显示，高温夏季可进入活动和摄食显著降低的夏眠状态',
    '历史广义种实验记录夜间摄食增强；严格本种的全球昼夜节律仍待验证',
  ],
  tags: ['海洋', '棘皮动物', '温带浅海', '沉积食者', '夏眠', '濒危', '分类修订'],
  summary:
    '西北太平洋温带岩石与砾石底的红色海参，以二十枚盾状触手摄食表层沉积物；2017 年修订后，绿、黑色型已归入 A. armatus。',
  description:
    '仿刺参 Apostichopus japonicus 是西北太平洋的温带底栖棘皮动物。严格本种对应红色型，背侧体壁退化桌形骨片的盘缘平滑；绿色和黑色型属于近缘 A. armatus。它用腹面管足移动，以二十枚盾状触手抓取沉积物中的有机碎屑、微藻和微生物，并在高温季节进入夏眠。IUCN 仍把拆分前广义种评为濒危，因此页面同时展示正式等级和分类年代限制。',
  metrics: {},
  featured: false,
  publishedAt: '2026-08-29',
  updatedAt: '2026-08-29',
}
~~~

`storySections`、`keyFacts`、`threats`、`conservationActions`、`featuredStats`、`media` 和 `sources` 使用相应章节数组。正文可以写带作者的接受名，`scientificName` 保持纯二名法以符合项目现有数据模式。

## 20. 易错说法与不确定性边界

| 说法 | 判断 | 页面应写 |
|---|---|---|
| “红、绿、黑只是同种的颜色差异” | 错 | 2017 年修订把红色型归入 *A. japonicus*，绿、黑色型归入 *A. armatus* |
| “一张红色海参照片就能确认物种” | 错 | 颜色和硬底是线索，可靠鉴定需背侧体壁骨片或经验证的分子数据 |
| “楯手目是当前接受目名” | 过时 | 当前采用 Synallactida；旧 IUCN 和水产文献保留 Aspidochirotida 是年代痕迹 |
| “中国全部刺参养殖研究都适用于本种” | 错 | 大量研究材料为绿色型，按现行分类属于 *A. armatus* |
| “严格本种主要住近岸沙泥底” | 证据错配 | 这是旧资料对绿、黑色型的概括；严格红色型与岩石、卵石和砾石底联系更紧 |
| “它是杂食动物” | 不精确 | 结构化类型用 detritivore；它摄入沉积物中的多来源有机颗粒 |
| “它夜里 02:00 至 04:00 一定摄食” | 过度概括 | 该时段来自历史广义种的受控明暗实验，不是严格本种全球时钟 |
| “夏眠就是钻入沙中睡觉” | 错 | 红色型在高温季节收缩、隐蔽并降低活动；不能添加眼睑、睡姿、茧或固定埋藏深度 |
| “单次长度可代表体型” | 错 | 伸缩使长度与体宽反向变化；标准化公式又只验证了绿、黑色型 |
| “一次产 1200 万枚卵” | 错 | 这是 50 只红色亲参在三次水槽产卵中的总数，不是单只或单次值 |
| “耳状幼体是红色的迷你海参” | 错 | 幼体透明、左右对称并有纤毛带；红色指亲本颜色型，不是幼体色素 |
| “IUCN 的 60% 是当前红色型下降率” | 错 | 它是拆分前广义种、历史上岸量和 30 至 50 年窗口的推定 |
| “养殖产量高说明野生种群恢复” | 错 | IUCN 当时没有发现人工繁育和海洋牧场已恢复中国野生种群的证据 |
| “未列 CITES 说明没有风险” | 错 | CITES 与 IUCN 解决不同问题；本种正式 IUCN 等级仍为 EN |

### 保留空白的字段

- 严格本种可比的成体长度和体重范围。
- 全球成熟个体数与严格本种当前下降比例。
- 严格本种寿命、性成熟年龄和世代长度。
- 全球统一的夏眠温度、繁殖月份和昼夜节律。
- 单只自然产卵量、野外幼体持续期和扩散距离。
- 最大栖息深度或“最大潜水深度”。
- 放流后全球存活率和恢复比例。

## 21. 六张 1536×1024 自然史图

这些简报面向后续图像生成与静态验收。任何生成图都只能标作科学情景重建，不能冒充标本照片、现场记录或骨片鉴定凭证。

### 全组固定约束

- 画幅 1536×1024，3:2 横向，不透明 sRGB，无文字、数字、边框、徽标、水印或签名。
- 写实温带西北太平洋浅海摄影或显微摄影感。水体偏冷绿蓝，底质以灰褐岩石、卵石和砾石为主，不画热带珊瑚礁。
- 成体主体使用严格本种线索：红至深红褐的粗壮圆柱形身体，较平腹面，背外侧两行交错疣足和散布小疣足。
- 不出现绿色或黑色成体作为本种主体。若画面需要近缘对照，必须另做明确标注的科学图，本组六图不使用。
- 口在前端偏腹侧，周围 20 枚短而宽的盾状触手；肛门在后端。不能添加眼、牙、鱼鳍、甲壳、分叉触手或脊椎。
- 腹面管足沿纵向步带密集排列，不能画成昆虫腿、吸盘章鱼腕或全身均匀毛刺。
- 生成像素无法显示可鉴定的显微骨片，caption 必须说明“红色外观符合严格本种，种级身份不能由图像确认”。
- 不出现捕捞者、餐盘、干货、手持、注射或养殖设备，繁殖重建所需的中性水槽侧壁除外。

### 01 封面：砾石底上的红色成体

**主题**：展示严格本种最稳妥的活体外观和硬底生境。

**构图**：低角度宽景，一只完整红褐成体位于右侧三分之一，沿灰色卵石和砾石缓慢移动。左侧保留清洁水体和底质作标题安全区。身体前端略低，后端清楚，疣足与底质尺度一致。

**Prompt 核心**：

> Photorealistic cold-temperate northwest Pacific underwater natural-history scene, one complete red Japanese sea cucumber consistent with strict Apostichopus japonicus moving over grey-brown rock pebbles and coarse gravel. Stout cylindrical dark brick-red to reddish-brown body, flattened underside contacting the substrate, two alternating zig-zag rows of moderate conical dorsal papillae plus smaller scattered papillae, natural soft tissue folds, no exaggerated spikes. Sparse attached brown and green algae, clear cool green-blue water, subdued daylight, scientifically restrained scale, full animal visible, left-side negative space, no tropical coral.

**负面约束**：绿色或黑色主体、沙泥平原、珊瑚礁、巨型尖刺、海胆外形、眼睛、牙齿、触手冠全部外翻、多个融合个体。

### 02 取食：二十枚盾状触手抓取沉积物

**主题**：解释沉积食动作，不把动物画成滤食者。

**构图**：前端近景，口朝向砾石间的一层薄细沉积物。数枚盾状触手贴住底面或正送入口中，其余触手围成完整口冠，可辨认总数 20。腹侧前部管足附着底面。

**Prompt 核心**：

> Scientific photorealistic macro view of the anterior end of a reddish Apostichopus-like sea cucumber deposit-feeding on a thin film of fine surface sediment between gravel. Exactly twenty short broad peltate oral tentacles surround one subventral mouth; several tentacles press and grasp tiny sediment particles, several curl inward toward the mouth, the remainder form a coherent ring. Ventral tube feet attach along longitudinal rows. No suspended filtering fan, no teeth, no biting of large stones, realistic marine detritus and benthic diatom film.

**证据标签**：二十枚盾状触手来自严格本种形态；抓取动作来自历史广义种实验。[Woo et al. 2017](https://doi.org/10.11646/zootaxa.4350.1.7)；[Sun et al. 2015](https://doi.org/10.1016/j.physbeh.2014.11.051)

**负面约束**：枝状滤食触手、章鱼腕、吸食管、可见牙齿、吞下大石、悬浮滤食、超过或少于 20 枚触手。

### 03 腹面：纵列管足与扁平步带

**主题**：展示容易被封面遮住的移动结构。

**构图**：一只红色成体跨过低矮卵石，身体略弯，镜头从前下方斜看腹面。腹面平，中央步带约 5 至 6 行管足，两侧步带各约 4 至 5 行；部分管足伸展并贴附石面，背面疣足只作边缘轮廓。

**Prompt 核心**：

> Oblique underside scientific reconstruction of one red Apostichopus japonicus-like adult bridging two low gravel stones, showing a flattened pale reddish-brown ventral sole. Numerous soft translucent tube feet arranged in clear longitudinal ambulacral rows, approximately five to six rows in the central ambulacral zone and four to five rows in each lateral zone, some podia extended and attached to rock. The body remains soft and cylindrical, dorsal conical papillae visible only along the upper silhouette, natural underwater lighting, no diagram labels.

**负面约束**：章鱼式大吸盘、成对步足、硬甲、全腹面一片均匀孔洞、悬空飞行、翻出的内脏、解剖切面。

### 04 夏眠：石块阴面收缩的红色个体

**主题**：重建严格红色型的高温季节低活动状态。

**构图**：夏季浅海，一只较短、收缩的红褐个体贴在大卵石侧下方阴影处，触手收回，身体没有取食姿势。周围细沉积物未被明显扰动。

**Prompt 核心**：

> Photorealistic scientific reconstruction of summer aestivation in the red form corresponding to strict Apostichopus japonicus. One contracted, shortened dark reddish-brown sea cucumber tucked against the shaded lower side of a large rounded rock among pebbles and gravel, oral tentacles fully withdrawn, low body posture, minimal visible movement, intact moist soft tissue and natural papillae. Warm-season temperate shallow sea suggested by light and sparse algae, but no thermometer or text. The animal is resting and inactive, not dead, injured, buried, or enclosed.

**证据标签**：红色型夏眠来自日本 1961 年观察；具体姿态与石块阴面属于保守情景重建。[Choe & Ohshima 1961](https://doi.org/10.2331/suisan.27.97)

**负面约束**：闭眼睡觉、茧、气泡舱、完全埋沙、腐烂、吐肠、自割、漂浮、固定温度数字、绿色或黑色个体。

### 05 产卵：抬起前端并从单一生殖孔释放配子

**主题**：准确表达产卵姿势和释放位置。

**构图**：侧面中景，一只红色成体后部和管足贴底，前端向上弯起。细薄配子羽流从前端背侧、口触手后方的单一位置释放。口触手没有喷出配子，后端肛门也没有羽流。

**Prompt 核心**：

> Scientifically accurate photorealistic spawning reconstruction of one reddish Japanese sea cucumber in a neutral seawater tank or simple gravel-bottom enclosure. Posterior body and ventral tube feet remain attached while the anterior third rises and gently waves upward. A single narrow pale gamete plume emerges from one dorsal-anterior gonopore immediately behind the mouth and retracted oral tentacles, then disperses softly upward in water. Anatomically intact soft body, one opening only, no mating contact, no dramatic cloud, no human equipment, no text.

**证据标签**：抬前端、摆动和释放配子来自诱导产卵实验；单一前背侧生殖孔来自解剖资料。画面不声称自然同步产卵。[Fujiwara et al. 2010](https://doi.org/10.1007/s12562-010-0262-2)；[Gao & Yang 2015](https://doi.org/10.1016/B978-0-12-799953-1.00004-0)

**负面约束**：从肛门释放、从口喷出、全身多孔喷射、交配接触、卵带、鱼卵团、血液、注射器、巨量遮蔽动物的云团。

### 06 幼体：红色亲本谱系的透明耳状幼体

**主题**：展示严格红色型直接记录的浮游阶段，避免缩小成体。

**构图**：显微摄影式单体特写，一只透明耳状幼体位于暗蓝灰背景中央。连续弯曲纤毛带沿体缘运行，可见口、食道、胃和后肠的大致轮廓。幼体本身不染成红色。

**Prompt 核心**：

> High-resolution scientific light-microscopy reconstruction of one transparent auricularia larva cultured from red Apostichopus parent stock. Bilaterally symmetrical elongated translucent larval body, one continuous sinuous ciliary band tracing lobed margins, visible simple digestive tract with mouth, oesophagus, rounded stomach and posterior intestine, delicate hyaline tissue in seawater, anatomically plausible echinoderm larva, dark neutral blue-grey microscope background, no adult papillae or tube-foot rows, no scale bar or labels.

**证据标签**：阶段序列有红色亲本直接养殖记录；透明外观和结构按论文显微图重建。红色指亲本类型，不表示幼体为红色。[Soliman et al. 2013](https://doi.org/10.1111/j.1365-2109.2011.03078.x)

**负面约束**：红色迷你海参、鱼苗、虾苗、贝壳、五辐成体、20 枚成体触手、巨型疣足、文字箭头、标尺、多个阶段拼贴。

## 22. 媒体字段建议

~~~ts
media: {
  image: './images/species/japanese-sea-cucumber/01-rocky-reef-red-adult-portrait.webp',
  alt: '西北太平洋温带浅海的灰褐砾石底上，一只完整红褐色仿刺参缓慢移动',
  focalPoint: { x: 0.7, y: 0.53 },
  credit: 'Fauna Atlas · AI 生成科学情景重建',
  gallery: [
    {
      image: './images/species/japanese-sea-cucumber/02-peltate-tentacle-sediment-feeding.webp',
      alt: '红褐色海参前端贴近砾石间薄层沉积物，二十枚短而宽的口触手围绕口部，最低处触手接触底质',
      title: '二十枚盾状口触手接触沉积物',
      caption:
        'AI 生成科学情景重建；二十枚盾状触手符合严格 A. japonicus 形态，低处触手接触沉积物只重建历史广义种的候选取食姿态。画面不能证明正在抓取或摄入颗粒，也不能确认个体种级身份、食物组成、动作频率或昼夜节律。',
      focalPoint: { x: 0.52, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/japanese-sea-cucumber/03-ventral-tube-feet-locomotion.webp',
      alt: '红色海参贴附在一块卵石表面，扁平腹面与三条纵向管足带清楚可见',
      title: '扁平腹面与纵列管足',
      caption:
        'AI 生成科学情景重建；管足行列依据分类描述，像素不能用于计数、测量或骨片鉴定，也不能仅凭红色外观确认物种。',
      focalPoint: { x: 0.52, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/japanese-sea-cucumber/04-summer-aestivation-rock-shelter.webp',
      alt: '一只收缩的红褐色海参贴在大卵石阴面，口触手收回，周围是安静砾石底',
      title: '高温季节的低活动状态',
      caption:
        'AI 生成科学情景重建；红色型夏眠有日本历史观察支持，具体石缝、温度和持续时间不能从画面推定。个体没有闭眼、成茧或完全埋藏。',
      focalPoint: { x: 0.58, y: 0.55 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/japanese-sea-cucumber/05-upright-egg-release-reconstruction.webp',
      alt: '一只红色海参抬起身体前端，淡色配子羽流从口触手后方的前背侧单一开口散入海水',
      title: '前端抬起与单一生殖孔释放',
      caption:
        'AI 生成科学情景重建；姿势依据诱导产卵实验，释放位置依据解剖资料。画面不能确定配子性别、数量、自然同步性或产卵时间。',
      focalPoint: { x: 0.5, y: 0.54 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
    {
      image: './images/species/japanese-sea-cucumber/06-auricularia-larva-microscopy.webp',
      alt: '暗蓝灰显微背景中，一只透明耳状幼体具有连续弯曲纤毛带和可见的简单消化道',
      title: '红色亲本谱系的透明耳状幼体',
      caption:
        'AI 生成科学情景重建；红色指亲本颜色型，幼体本身透明。画面不能确定年龄、尺寸、存活率或野外发育速度。',
      focalPoint: { x: 0.5, y: 0.5 },
      credit: 'Fauna Atlas · AI 生成科学情景重建',
    },
  ],
}
~~~

运行时使用 WebP，后续若生成 PNG 源图，应保留同尺寸文件和逐图验收记录。第一张封面不在 gallery 中重复。

## 23. 来源

以下 22 条来源均于 2026-08-29 核对。分类、保护状态、生态机制与图像约束优先采用官方数据库、政府资料、FAO 和原始论文。

### 分类、命名与物种边界

1. **WoRMS. Apostichopus japonicus (Selenka, 1867), AphiaID 241776.** 当前接受名、作者、海洋属性、六级分类摘要和稳定标识。
   https://www.marinespecies.org/aphia.php?p=taxdetails&id=241776

2. **WoRMS REST. AphiaClassificationByAphiaID 241776.** Animalia 至 *Apostichopus japonicus* 的当前完整分类链。
   https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/241776

3. **WoRMS. Taxon list for Apostichopus.** 当前属内接受种列表，用于防止把日本三色型材料的“两种”结论误写成全球属级物种总数。
   https://www.marinespecies.org/aphia.php?p=taxlist&tName=Apostichopus

4. **Miller, A. K. et al. 2017. Molecular phylogeny of extant Holothuroidea (Echinodermata). Molecular Phylogenetics and Evolution 111:110-131.** 停用并系的 Aspidochirotida，建立 Synallactida 等现行目级类群。
   https://doi.org/10.1016/j.ympev.2017.02.014

5. **Woo, S. P. et al. 2017. A taxonomic revision of the genus Apostichopus (Holothuroidea: Stichopodidae) from Japan. Zootaxa 4350:121-135.** 日本三色型材料归入两个有效种、红色型归属、骨片诊断、严格本种外部形态和分布边界。
   https://doi.org/10.11646/zootaxa.4350.1.7

6. **Kanno, M. & Kijima, A. 2003. Genetic differentiation among three color variants of Japanese sea cucumber Stichopus japonicus. Fisheries Science 69:806-812.** 红色型与绿、黑色型的同工酶遗传分化。
   https://doi.org/10.1046/j.1444-2906.2003.00690.x

7. **Kanno, M. et al. 2006. Microsatellite analysis of Japanese sea cucumber, Stichopus (Apostichopus) japonicus, supports reproductive isolation in color variants. Marine Biotechnology 8:672-685.** 颜色型间微卫星分化和生殖隔离证据。
   https://doi.org/10.1007/s10126-006-6014-8

8. **中华人民共和国生态环境部. 2022. HJ 1260-2022 海洋生物水质基准推导技术指南（试行），附录 E.** 第 84 项列出“仿刺参”、*Apostichopus japonicus* 和刺参科。
   https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202207/W020220719527543090538.pdf

### 保护、法规与管理

9. **Hamel, J.-F. & Mercier, A. 2013. Apostichopus japonicus. The IUCN Red List of Threatened Species 2013:e.T180424A1629389.** EN A2bd、decreasing、2010-05-19 评估日期、历史下降推定、范围、捕捞和恢复边界。
   https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en

10. **CITES. Appendices I, II and III.** 核对当前附录未列入本种。
   https://cites.org/eng/app/appendices.php

11. **Purcell, S. W. 2010. Managing sea cucumber fisheries with an ecosystem approach. FAO Fisheries and Aquaculture Technical Paper No. 520.** 捕捞许可、禁采区、季节关闭、最小尺寸、监测和共管框架。
    https://www.fao.org/4/i1384e/i1384e00.htm

12. **Japan Fisheries Agency. Countermeasures against poaching.** 海参作为易遭非法采捕的高价值水产品及日本当前执法背景。
    https://www.jfa.maff.go.jp/j/enoki/mitsuryotaisaku.html

13. **Purcell, S. W., Samyn, Y. & Conand, C. 2012. Commercially important sea cucumbers of the world. FAO Species Catalogue for Fishery Purposes No. 6.** 英文俗名、历史广义种识别、分布、生境和渔业对照；分类口径早于 2017 年拆分。
    https://www.fao.org/4/i1918e/i1918e.pdf

### 形态、行为、繁殖与生态

14. **Choe, S. & Ohshima, Y. 1961. On the morphological and ecological differences between two commercial forms, green and red, of the Japanese common sea cucumber, Stichopus japonicus Selenka. Bulletin of the Japanese Society of Scientific Fisheries 27:97-106.** 红色型硬底联系、繁殖差异和夏眠直接观察。
    https://doi.org/10.2331/suisan.27.97

15. **Soliman, T. et al. 2013. Spontaneous captive breeding and larval development in the green and red variants of the Japanese sea cucumber Apostichopus japonicus. Aquaculture Research 44:738-746.** 红色型自发产卵、阶段序列、发育时间和水槽存活率。
    https://doi.org/10.1111/j.1365-2109.2011.03078.x

16. **Fujiwara, A. et al. 2010. Spawning induced by cubifrin in the Japanese common sea cucumber Apostichopus japonicus. Fisheries Science 76:795-801.** 爬壁、抬起并摆动前端、释放配子的诱导产卵行为。
    https://doi.org/10.1007/s12562-010-0262-2

17. **Gao, F. & Yang, H. 2015. Anatomy. In: The Sea Cucumber Apostichopus japonicus: History, Biology and Aquaculture.** 体壁、步带、消化系统和前端背侧单一生殖孔位置。
    https://doi.org/10.1016/B978-0-12-799953-1.00004-0

18. **Sun, J. et al. 2015. Feeding behavior and digestive physiology in sea cucumber Apostichopus japonicus. Physiology & Behavior 139:336-343.** 盾状触手抓取沉积物、受控明暗周期中的摄食和排粪节律；材料未按 2017 标准复核。
    https://doi.org/10.1016/j.physbeh.2014.11.051

19. **Gao, F. et al. 2014. Bacterial community composition in the gut content and ambient sediment of sea cucumber Apostichopus japonicus revealed by 16S rRNA gene pyrosequencing. PLOS ONE 9:e100092.** 肠内容物和周围沉积物细菌群落差异及选择性摄食解释。
    https://doi.org/10.1371/journal.pone.0100092

20. **Hou, Y.-R. et al. 2018. Bioturbation by sea cucumbers Apostichopus japonicus affects sediment phosphorus forms and sorption characteristics. Aquaculture Environment Interactions 10:201-211.** 84 天实验中的沉积扰动、磷形态和吸附变化。
    https://doi.org/10.3354/aei00248

21. **Yokoyama, H. 2013. Growth and food source of the sea cucumber Apostichopus japonicus cultured below fish cages: Potential for integrated multi-trophic aquaculture. Aquaculture 372-375:28-38.** 238 天日本现场养殖和稳定同位素对鱼场沉降颗粒同化的验证。
    https://doi.org/10.1016/j.aquaculture.2012.10.022

22. **Yamana, Y. & Hamano, T. 2006. New size measurement for the Japanese sea cucumber Apostichopus japonicus estimated from body length and body breadth. Fisheries Science 72:585-589.** 伸缩引起的长度偏差及标准体长方法；材料为现行 *A. armatus* 的绿、黑色型。
    https://doi.org/10.1111/j.1444-2906.2006.01187.x

## 24. 可复制到 species.ts 的来源数组

~~~ts
const JAPANESE_SEA_CUCUMBER_SOURCES = [
  {
    title: 'WoRMS: Apostichopus japonicus (Selenka, 1867), AphiaID 241776',
    url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=241776',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'WoRMS REST: Classification of Apostichopus japonicus, AphiaID 241776',
    url: 'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/241776',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'WoRMS: Taxon list for Apostichopus',
    url: 'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Apostichopus',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Miller et al. 2017: Molecular phylogeny of extant Holothuroidea',
    url: 'https://doi.org/10.1016/j.ympev.2017.02.014',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Woo et al. 2017: A taxonomic revision of the genus Apostichopus',
    url: 'https://doi.org/10.11646/zootaxa.4350.1.7',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Kanno & Kijima 2003: Genetic differentiation among color variants',
    url: 'https://doi.org/10.1046/j.1444-2906.2003.00690.x',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Kanno et al. 2006: Microsatellite evidence for isolation among color variants',
    url: 'https://doi.org/10.1007/s10126-006-6014-8',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'MEE HJ 1260-2022: Chinese marine-organism list including Apostichopus japonicus',
    url: 'https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202207/W020220719527543090538.pdf',
    kind: 'taxonomy',
    accessedAt: '2026-08-29',
  },
  {
    title: 'IUCN Red List 2013: Apostichopus japonicus, e.T180424A1629389',
    url: 'https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en',
    kind: 'conservation',
    accessedAt: '2026-08-29',
  },
  {
    title: 'CITES: Appendices I, II and III',
    url: 'https://cites.org/eng/app/appendices.php',
    kind: 'conservation',
    accessedAt: '2026-08-29',
  },
  {
    title: 'FAO 2010: Managing sea cucumber fisheries with an ecosystem approach',
    url: 'https://www.fao.org/4/i1384e/i1384e00.htm',
    kind: 'conservation',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Japan Fisheries Agency: Countermeasures against poaching',
    url: 'https://www.jfa.maff.go.jp/j/enoki/mitsuryotaisaku.html',
    kind: 'conservation',
    accessedAt: '2026-08-29',
  },
  {
    title: 'FAO 2012: Commercially important sea cucumbers of the world',
    url: 'https://www.fao.org/4/i1918e/i1918e.pdf',
    kind: 'general',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Choe & Ohshima 1961: Differences between green and red commercial forms',
    url: 'https://doi.org/10.2331/suisan.27.97',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Soliman et al. 2013: Captive breeding and larval development of red and green variants',
    url: 'https://doi.org/10.1111/j.1365-2109.2011.03078.x',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Fujiwara et al. 2010: Spawning induced by cubifrin',
    url: 'https://doi.org/10.1007/s12562-010-0262-2',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Gao & Yang 2015: Anatomy of Apostichopus japonicus',
    url: 'https://doi.org/10.1016/B978-0-12-799953-1.00004-0',
    kind: 'general',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Sun et al. 2015: Feeding behavior and digestive physiology',
    url: 'https://doi.org/10.1016/j.physbeh.2014.11.051',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Gao et al. 2014: Gut-content and ambient-sediment bacterial communities',
    url: 'https://doi.org/10.1371/journal.pone.0100092',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Hou et al. 2018: Bioturbation effects on sediment phosphorus',
    url: 'https://doi.org/10.3354/aei00248',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Yokoyama 2013: Growth and food source below fish cages',
    url: 'https://doi.org/10.1016/j.aquaculture.2012.10.022',
    kind: 'ecology',
    accessedAt: '2026-08-29',
  },
  {
    title: 'Yamana & Hamano 2006: Standardized body-size measurement',
    url: 'https://doi.org/10.1111/j.1444-2906.2006.01187.x',
    kind: 'general',
    accessedAt: '2026-08-29',
  },
] as const satisfies readonly SpeciesSource[];
~~~

若实现时需要缩短来源数组，至少保留 WoRMS 两条、Miller 2017、Woo 2017、HJ 1260-2022、IUCN、Choe 1961、Soliman 2013、Sun 2015 和 FAO 管理指南。任何使用旧广义种的来源都不能脱离正文中的分类边界。

## 25. 实现前核对清单

- [x] `scientificName` 使用 *Apostichopus japonicus*，当前目为 Synallactida，不是 Aspidochirotida。
- [x] 中文主名使用 HJ 1260-2022 的“仿刺参”，“刺参”只作别名。
- [x] 严格本种对应红色型；绿色、黑色型按 2017 修订归入 *A. armatus*。
- [x] 不靠普通照片、颜色或地点声称完成种级鉴定。
- [x] 结构化分布写西北太平洋温带中国、日本、朝鲜半岛和俄罗斯远东，并保留旧资料混种警告。
- [x] 主要生境写岩石、卵石和砾石底，不把绿、黑色型沙泥底移入严格本种。
- [x] IUCN 使用 EN、decreasing、2010、A2bd，并注明评估早于 2017 年拆分。
- [x] 历史至少 60% 下降明确为广义种上岸量推定，不包装成当前严格本种普查。
- [x] CITES 未列附录不解释为低风险。
- [x] `diet.types` 只写 `detritivore`，不写 omnivore 或 herbivore。
- [x] `measurements` 和 `metrics` 保持空对象，不移植绿、黑色型标准体长公式或旧广义尺寸。
- [x] 红色型夏眠有直接证据，固定温度阈值和全球月份保持空白。
- [x] 产卵图从前端背侧单一生殖孔释放，不从口、肛门或全身体壁喷出。
- [x] 红色型水槽约 1200 万枚卵是 50 只亲参、三次产卵的总量，不写成个体繁殖力。
- [x] 耳状幼体保持透明和左右对称，不画成红色迷你成体。
- [x] 海床扰动实验标作历史广义种机制，不使用“净化海洋”的绝对说法。
- [x] 管理行动同时覆盖限捕、禁采区、反偷捕、栖息地、分类重核和放流风险。
- [x] 六张图全部写明科学情景重建，红色外观不能替代骨片鉴定。
- [x] 只提供图像 brief 和字段路径，不生成或修改图像资产。
