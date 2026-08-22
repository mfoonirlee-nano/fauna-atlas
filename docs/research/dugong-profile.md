# 儒艮（*Dugong dugon*）完整档案研究

- 检索与核验日期：2026-08-22
- 展示中文名：**儒艮**；英文名：**Dugong**；可检索英文别名：**Sea Cow**
- 使用范围：为 `src/data/species.ts` 新增一条完整 `Species` 记录，并为 1 张封面与 5 张详情图划定科学边界
- 证据标准：分类采用 Society for Marine Mammalogy 与 ASM Mammal Diversity Database；全球状态采用 IUCN 原始评估 DOI；现状和保护采用 2025 年 CMS 全球评估、政府名录和同行评审原始研究
- 时间口径：全球 IUCN 字段代表 **2015-07-12** 的评估，2019 年只发布修订版。中国区域信息补到 2025 年访谈研究，监测方法补到 2026 年 8 月
- 数字边界：全球总量未知。2025 年 CMS 报告给出澳大利亚约 166,000 ± SE 21,500 只和阿拉伯/波斯湾约 5,000 只等区域估计，但其他大片分布区仍缺少可比调查，不能把区域数字相加成全球总量或成熟个体数

## 结论摘要

### 当前接受一个现生种，不采用旧资料中的亚种名

当前接受学名是 ***Dugong dugon* (P. L. S. Müller, 1776)**，属于动物界、脊索动物门、哺乳纲、海牛目、儒艮科和儒艮属。它是儒艮科唯一现生物种，也是四个现生海牛目物种之一。[MDD v2.5](https://www.mammaldiversity.org/taxon/1000529/) [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) [CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

推荐分类字段：

```ts
taxonomy: animalTaxonomy(
  taxon('Chordata', '脊索动物门'),
  taxon('Mammalia', '哺乳纲'),
  taxon('Sirenia', '海牛目'),
  taxon('Dugongidae', '儒艮科'),
  taxon('Dugong', '儒艮属'),
)
```

2026 年海洋哺乳动物学会清单和 MDD 都没有在本种下接受亚种。旧网页仍会列出 ***D. d. dugon***、***D. d. hemprichii*** 等名字，档案不应采用这些旧亚种组合，也不应据此给不同海区的个体套上亚种标签。[MDD v2.5](https://www.mammaldiversity.org/taxon/1000529/) [Society for Marine Mammalogy 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/)

国家名录使用“儒艮”作为规范中文名。`Sea Cow` 可作为英文检索别名，但它也被用于海牛目其他动物，不适合作为页面主名；“美人鱼”属于文化联想，不是分类名称。[国家重点保护野生动物名录 2021](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml) [CMS facts](https://dugong.cms.int/species/dugong-facts)

### 全球 IUCN 字段：VU、decreasing、2015、A2bcd+4bcd

当前全球记录为 **易危 Vulnerable（VU）**、种群趋势 **下降 decreasing**、评估日期 **2015-07-12**，标准为 **A2bcd+4bcd**。Marsh 和 Sobtzick 在 2019 年发布 amended version，没有进行一次新的 2019 年评估。因此结构化字段应为：[IUCN assessment](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T6909A160756767.en) [CMS COP15 conservation-status paper](https://www.cms.int/sites/default/files/document/2026-01/cms_cop15_doc.20.1_rev.1_conservation-status-migratory-species_e.pdf)

```ts
conservation: conservation('VU', 'decreasing', 2015, 'A2bcd+4bcd')
```

IUCN 的 `A2` 表示过去三个世代或十年中较长的一段发生减少，且减少原因可能尚未停止、理解或逆转；`A4` 跨越过去和未来的相应时期。后缀 `b`、`c`、`d` 分别指适合该分类单元的丰度指数，分布或生境面积、范围、质量的下降，以及实际或潜在利用。产品无需把整套定义塞进摘要，但不能把标准改写成一次全球同步计数。[IUCN Categories and Criteria v3.1](https://portals.iucn.org/library/sites/library/files/documents/RL-2001-001-2nd.pdf)

2025 年 CMS 全球评估指出，IUCN 现有全球分布图需要修订。档案可以继续使用官方 VU 记录，但应在 `updatedAt` 或研究备注中保留更新触发点：IUCN 评估已经超过十年，且区域资料、遗传结构和已知现状发生了变化。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

### 全球没有可用的成熟个体总量

2025 年 CMS 全球评估汇总的区域状况差异很大。澳大利亚估计约 **166,000 ± SE 21,500 只**，阿拉伯/波斯湾约 **5,000 只**；红海现存数量未知，亚洲和太平洋许多区域只知道小型、破碎或数据缺乏的种群。不同区域采用不同年份和方法，调查结果通常不能直接比较。[CMS 2025 executive summary](https://dugong.cms.int/sites/default/files/publication/A%20Global%20Assessment%20of%20Dugong%20Executive%20Summary%20%28005%29.pdf)

因此应保持：

```ts
metrics: {
  // estimatedMatureIndividuals 必须省略：现有资料没有全球成熟个体估计。
}
```

不要使用“全球不足 40,000 只”等网络流传数字。它与 CMS 2025 单独给出的澳大利亚估计已经冲突，也没有覆盖全球的统一方法。澳大利亚数量同样不能代替全球数量或 IUCN 成熟个体字段。

### 中国结论需要同时保留正式等级和“功能性灭绝”的含义

《中国生物多样性红色名录：脊椎动物卷（2020）》把中国区域的儒艮评为 **CR B1ab(i,ii,iii)**。2021 年《国家重点保护野生动物名录》把儒艮列为国家一级重点保护野生动物。这两个口径分别表达中国区域灭绝风险和国内法律保护，不能覆盖全球 IUCN VU 字段。[中国生物多样性红色名录 2020](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) [国家重点保护野生动物名录 2021](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)

2022 年研究访问了海南、广西、广东和福建 66 个渔村的 788 名海洋资源使用者，并复核历史资料。研究记录在 2008 年后没有文献化记录，2000 年后没有经过核实的野外观察；只有三名受访者报告过去五年内的可能目击。作者承认少量幸存个体、错误辨识和回忆误差都不能排除，最后判断中国水域已发生功能性灭绝。[Lin et al. 2022](https://doi.org/10.1098/rsos.211994)

2025 年后续研究访问了 54 个渔村的 841 名渔民。除一宗受访者报告的 2021 年意外捕获外，受访者没有提供 2008 年最后一次搁浅之后的其他记录；研究再次判断中国种群已功能性灭绝。该结果扩大了已知历史分布，却没有证明中国存在可繁殖的现生种群。[Lin et al. 2025](https://doi.org/10.1098/rsos.250486)

“功能性灭绝”在这里表示中国区域已经没有能够维持繁殖与补充的可行种群。它不等于全球灭绝 `EX`，也不证明中国水域最后一只个体已经死亡。邻近海区来的迷行个体、尚未核实的目击或单次捕获不会自动构成一个可维持种群。推荐文案为：

> 两轮大范围访谈与历史资料研究判断，儒艮在中国水域已功能性灭绝；少数未核实记录或迷行个体仍不能完全排除。

CMS 2025 把中国和日本水域描述为数量极低，并指出中国“亚种群”若接受 IUCN 区域评估，几乎肯定会达到 CR。它没有把中国亚种群列成已经完成的 IUCN 正式评估，产品不能把这句建议改写成“国际 IUCN 已评中国种群为 CR”。[CMS 2025 executive summary](https://dugong.cms.int/sites/default/files/publication/A%20Global%20Assessment%20of%20Dugong%20Executive%20Summary%20%28005%29.pdf)

## 分布与生境

儒艮分布在印度洋、西太平洋和红海的热带、亚热带沿岸与岛屿水域。CMS 2025 将其范围概括为约 135 个经度、赤道南北各约 25 个纬度，并列出 48 个范围国家和地区。48 的计数会随法国及其海外地区的计算方式变化，且“范围国家”不等于每个国家当前都保有居民种群。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

`continents` 可用 `['非洲', '亚洲', '大洋洲']`，`realms` 只填 `['marine']`。儒艮终生生活在海水中，不能因为海牛目其他物种会进入河流而添加 `freshwater`。[DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs) [CMS facts](https://dugong.cms.int/species/dugong-facts)

结构化分布建议不罗列 48 个国家。区域清单很长，部分区域只有历史、偶发或不确定记录；一个空的 `countries` 比假装所有国家具有同等现存确定性更安全：

```ts
distribution: {
  realms: ['marine'],
  continents: ['非洲', '亚洲', '大洋洲'],
  regions: [
    '红海与西印度洋沿岸',
    '阿拉伯湾及南亚沿岸',
    '东南亚沿岸与群岛',
    '东亚南部',
    '澳大利亚北部沿岸',
    '西太平洋岛屿水域',
  ],
  countries: [],
  range:
    '分布于印度洋、西太平洋和红海的热带、亚热带沿岸与岛屿水域；现存种群高度不均，澳大利亚是最大堡垒，中国区域已被研究判断为功能性灭绝。',
}
```

CMS 2025 将典型生境概括为水深 **不超过约 20 米**、长有热带或亚热带海草的沿岸水域。儒艮常利用受风浪遮蔽的浅海湾、潟湖、岛屿背风侧、海峡和大陆架浅滩，也能利用更深、更外海的海草地。个体可跨越深水沟移动，不能据此把开阔深海画成常规觅食地。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838) [DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs)

推荐生境字段：

```ts
habitats: [
  {
    name: '热带与亚热带浅海海草床',
    realm: 'marine',
    description:
      '多数生境位于约 20 米以内的沿岸浅水，海草提供主要食物；沙质或泥沙质底部可留下挖掘式觅食痕迹。',
    isPrimary: true,
  },
  {
    name: '受遮蔽海湾、潟湖与岛屿水道',
    realm: 'marine',
    description:
      '避风海湾、潟湖、海峡和岛屿背风水域可同时提供海草食场、换气水面与母仔活动空间。',
  },
  {
    name: '大陆架浅滩与外海海草区',
    realm: 'marine',
    description:
      '在大陆架宽阔且风浪受限的地区，儒艮也会利用离岸和较深的海草地，并在食场之间作长距离移动。',
  },
]
```

## 外形、体尺与图像鉴别

成年儒艮通常呈灰至灰褐色，身体粗壮、纺锤形。它没有背鳍和外露后肢；两枚桨状前鳍位于胸部，尾部是一对水平、中央有缺刻的鲸形尾叶。它靠尾叶上下摆动推进。海牛属动物的尾部更接近圆形桨叶，插画不能把两者混用。[Australian Museum](https://australian.museum/learn/animals/mammals/dugong/) [DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs)

头部圆钝，眼睛小，外耳孔不显眼。宽而肉质的吻部明显向下弯，口朝腹面开，用于贴近海底取食；上唇周围有粗而敏感的触须。鼻孔位于吻部上方，潜水时可闭合。画面中不应出现海豚式长吻、鳃裂、鱼鳞、背鳍或鲸类喷气水柱。[Australian Museum](https://australian.museum/learn/animals/mammals/dugong/) [Reef Authority](https://www.gbrmpa.gov.au/learn/animals/dugong)

成年雄性的短獠牙常露出口外，部分高龄雌性也会露出獠牙；雌性和幼体通常不该带显眼长牙。獠牙应短小，不应画成海象牙或象牙。[Reef Authority](https://www.gbrmpa.gov.au/learn/animals/dugong)

澳大利亚政府资料给出成体可长到约 **3 米**、重约 **400 千克**；昆士兰政府和 CMS 页面给出最大约 **500 千克**。泰国成熟个体研究的平均体长约 2.55 至 2.58 米、平均体重约 250 千克，显示“3 米、500 千克”更适合作为近似上限，不是典型个体定值。[DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs) [Queensland Government](https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/dugongs) [Adulyanukosol et al. data summarized in PeerJ 2020](https://doi.org/10.7717/peerj.10319)

建议使用带注释的展示字段，不把混合来源包装成严格全球范围：

```ts
measurements: {
  length: {
    typical: 2.5,
    max: 3,
    unit: 'm',
    note: '成熟个体研究均值约 2.5 米；政府概览给出的近似最大体长约 3 米。',
  },
  weight: {
    typical: 250,
    max: 500,
    unit: 'kg',
    note: '泰国成熟个体均值约 250 千克；不同官方概览给出的最大值为 400 至 500 千克。',
  },
}
```

`metrics.adultLengthCm` 和 `metrics.adultMassKg` 最好省略。当前资料给出区域均值和跨来源上限，不支持一个无注释的全球成体最小到最大范围。寿命资料也多给出“最高约 70 年”，不是观察到的典型区间，`metrics.lifespanYears` 同样应省略。[Reef Authority](https://www.gbrmpa.gov.au/learn/animals/dugong)

## 食性、取食方式与海草床作用

儒艮是以海草为主食的完全海生植食性哺乳动物。CMS 2025 称它利用分布区十个海草属中的九个，并可能取食约 26 种海草中的多数。它也会在部分地点摄食大型藻类和大型无脊椎动物，不能把“植食性”扩写成“每个种群只吃海草”。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

Moreton Bay 的 48 份粪便样本中，海鞘出现在 73% 的样本，并占湿重约 26%；研究者还观察到主动取食海鞘。这个结果来自分布南缘的一个亚热带种群，作者提出季节性海草不足可能解释当地杂食行为。产品可在食物列表中保留“部分种群偶食海鞘等无脊椎动物”，不能把全种改标为一般杂食动物。[Preen 1995, Journal of Mammalogy](https://doi.org/10.2307/1382325)

推荐食性字段：

```ts
diet: {
  types: ['herbivore'],
  foods: ['海草', '大型藻类（偶见）', '海鞘等大型无脊椎动物（部分种群）'],
  description:
    '主要贴近海底取食海草，可挖出整株或裁切叶片；部分地区也记录到藻类和大型无脊椎动物。',
}
```

儒艮使用两种底栖取食方式。挖掘式取食会连根掘起海草，并在泥沙中留下清楚的沟状觅食痕；裁切式取食只咬取上部，未必留下裸露沟槽。画面或文案不能把每一次取食都说成会留下“儒艮轨迹”。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

Moreton Bay 的野外观察和排除实验显示，持续的大群取食能降低海草密度与生物量，并让生长快、营养质量较高的先锋海草增加。研究者把当地过程称为 cultivation grazing。该结果受地点、海草组合、取食强度和恢复条件限制，不能概括成“儒艮总会修剪并治愈海草床”。[Preen 1995, Marine Ecology Progress Series](https://doi.org/10.3354/meps124201)

昆士兰政府概览给出成年儒艮每天约吃 30 千克海草，Reef Authority 以约体重 7% 表示摄食量。这是便于展示的量级，不是所有年龄、体型、季节和海草质量下的固定日摄食量。[Queensland Government](https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/dugongs) [GBR Outlook Report](https://outlookreport.gbrmpa.gov.au/values/2-biodiversity/24-populations-species-and-groups-species/2416-dugongs)

## 移动、换气、声音与社会边界

儒艮通常单独出现，或以母亲和一只幼仔的组合出现；部分固定食场会形成超过 50 只、甚至数百只的松散聚集。聚集不等于终年稳定的家族群、等级组织或固定“首领”。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

对澳大利亚 70 只儒艮的卫星或 GPS 跟踪显示，26 只在捕获点周边移动不足 15 千米，44 只移动超过 15 千米，最远离捕获点 560 千米。个体行为差异很大。CMS 2025 认为没有证据支持整个区域种群定期往返迁徙，也没有识别出固定迁徙走廊。[Sheppard et al. 2006](https://doi.org/10.1016/j.jembe.2006.01.011) [CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

CMS 把儒艮列入附录 II，是因为一些个体会在相邻沿岸国家之间跨界移动，且全球处于 VU。该法律口径不表示每只儒艮都按季节走一条固定迁徙路线。[CMS species page](https://www.cms.int/species/dugong-dugon)

儒艮必须浮到水面呼吸，常规潜水一般只持续数分钟。呼吸时鼻孔和头顶先接近水面，不会像大型鲸类那样喷出高耸水柱。不要用一个模糊的“最长闭气时间”作为全种极限。[Reef Authority](https://www.gbrmpa.gov.au/learn/animals/dugong)

儒艮会发出叫声作社会交流，母仔之间的联系可能特别重要；CMS 2025 明确把这些声音与导航区分开。画面不要添加海豚式回声定位光环，也不要把叫声称为已译码的语言。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838) [Ichikawa et al. 2006](https://doi.org/10.1121/1.2201468)

## 繁殖、育幼与缓慢恢复

雌性第一次产仔约在 **6 至 17 岁**，妊娠约 **12 至 14 个月**，通常一胎一仔。幼仔出生后很快开始尝试海草，同时继续吃奶；政府概览给出的母仔相伴和哺乳期约 1 至 2 年，产仔间隔约 3 至 7 年。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838) [DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs) [Marsh et al. 1984](https://doi.org/10.1071/ZO9840767)

食物条件会改变成熟、繁殖和幼体存活。CMS 2025 估计，即使自然死亡率低且没有人为死亡，一个儒艮种群每年也很难增长超过 **5%**。新增成年死亡对种群变化最敏感，因为个体成熟晚、妊娠长、通常单仔且哺乳期长。[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838)

Reef Authority 给出的最长寿命量级约 **70 年**。这不代表每只儒艮都能活到 70 岁，也不支持把寿命写成一个无条件的 60 至 70 年典型范围。[Reef Authority](https://www.gbrmpa.gov.au/learn/animals/dugong)

母仔图适合表现一大一小两只同向游动，幼仔靠近母体侧后方或腹侧。不要画双胞胎群、背负幼仔、人类式拥抱或用前鳍牵手。画面本身只能表达代表性育幼场景，不能为一张生成图中的个体确认亲缘和性别。

## 威胁、保护行动与法律

全球威胁的相对强度随地区变化。档案应保留以下直接死亡来源和生境压力：[CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838) [DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs)

1. **渔业相互作用**：刺网、流刺网、鲨网和其他渔具可造成缠绕、窒息和死亡。
2. **捕猎与不可持续利用**：非法捕杀及部分地区不可持续的传统利用会移除恢复缓慢的成年个体。合法传统利用必须按当地法律和共同管理制度单独说明。
3. **海草生境丧失和退化**：疏浚、填海、沿岸建设、底拖、污染、浑浊和陆源沉积会减少海草面积或质量。
4. **船舶碰撞**：浅水食场与航道、休闲船活动重叠时，螺旋桨和船体会造成创伤或死亡。
5. **气候与极端事件**：洪水、热带气旋和海洋热浪可使海草大面积死亡，随后降低繁殖、幼体存活和体况，并迫使部分个体迁移。
6. **次级压力**：噪声、旅游干扰、疾病、寄生虫、污染物、塑料和失去母亲的幼仔会在不同地点增加风险；现有资料不支持统一的全球排序。

1992 年洪水和气旋导致澳大利亚 Hervey Bay 超过 1,000 平方千米海草消失。南部湾区的估计数量从 1988 年 1,753 ± SE 388 只降至 1992 年 71 ± SE 40 只，研究回收 99 具尸体，并记录部分动物移动到 900 千米外。这个案例说明海草崩溃可在数月后引发饥饿、死亡和外移，但它不是全球固定响应比例。[Preen & Marsh 1995](https://doi.org/10.1071/WR9950507)

推荐保护行动：

- 采用可重复的空中、无人机、船只、岸基、照片识别、遗传和访谈调查，分别评估分布、数量、趋势与威胁；不同方法的结果不能直接拼接。
- 绘制并长期监测海草床，保护核心食场和食场之间的连通水域；控制疏浚、填海、底拖、污水、泥沙和锚泊破坏。
- 在高风险水域减少刺网和鲨网缠绕，建立渔民报告、快速响应和搁浅网络，并根据证据调整作业时空和渔具。
- 在浅水海草区设置船速、航线和观赏距离规则，降低碰撞、追逐和噪声干扰。
- 通过 CMS Dugong MOU 推动跨境管理，邀请沿岸社区、原住民传统所有者和渔民参与监测与利用管理。
- 在密度极低的地区，把儒艮纳入海洋巨型动物和海草生态系统的综合保护，避免只等待可见的儒艮记录才保护生境。

国际制度需要分开表达：

- ***Dugong dugon*** 列入 **CITES 附录 I**。该制度限制国际贸易，不是 IUCN 灭绝风险等级。[CITES Appendices, effective 5 March 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf)
- 儒艮自 1979 年列入 **CMS 附录 II**；Dugong MOU 于 2007 年生效，推动范围国间合作。附录 II 不等于 IUCN VU，也不证明所有个体作固定季节迁徙。[CMS species page](https://www.cms.int/species/dugong-dugon) [CMS Dugong MOU](https://www.cms.int/legalinstrument/dugong-mou)
- 中国把儒艮列为 **国家一级重点保护野生动物**；法律名录不会因区域功能性灭绝研究而自动失效。[国家重点保护野生动物名录 2021](https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml)

## 可直接采用的叙事字段

### 摘要与描述

```ts
summary:
  '这只印度洋与西太平洋浅海的海草食客，以向下弯的触须吻部贴底取食；成熟晚、通常单仔，使每一次成年死亡都可能拖慢种群恢复。',
description:
  '儒艮是儒艮科唯一现生物种，终生生活在热带和亚热带海域。它用宽大的下弯吻部挖取或裁切海草，常单独活动或由母亲带着一只幼仔，也能在食场间移动数百千米。全球 IUCN 将其列为易危且趋势下降；研究判断中国水域已功能性灭绝，但这不等于该物种全球灭绝。',
```

### 六个故事章节

```ts
storySections: [
  {
    key: 'seagrass-grazer',
    label: '海草食客',
    title: '向下弯的吻部贴着海底工作',
    body:
      '儒艮主要吃海草。它会连根挖起整株，也会只裁切叶片；只有挖掘式取食必然留下清楚的沟状痕迹。部分地区还记录到藻类和海鞘等无脊椎动物。',
  },
  {
    key: 'coastal-habitat',
    label: '浅海生境',
    title: '海草床决定食场，浅海也带来风险',
    body:
      '多数儒艮生境位于约 20 米以内的热带、亚热带沿岸水域。受遮蔽海湾、潟湖、岛屿水道和大陆架浅滩提供海草，也常与渔网、航道和沿岸工程重叠。',
  },
  {
    key: 'individual-movements',
    label: '个体移动',
    title: '有的留守一片海湾，有的远行数百千米',
    body:
      '70 只澳大利亚儒艮的跟踪研究记录到从不足 15 千米到最远 560 千米的移动。个体差异很大，现有证据不支持整个区域种群沿固定路线同步往返。',
  },
  {
    key: 'slow-life-history',
    label: '缓慢生命史',
    title: '一只幼仔需要多年投入',
    body:
      '雌性第一次产仔约在 6 至 17 岁，妊娠约 12 至 14 个月，通常一胎一仔，母仔可相伴一至两年。即使条件理想，种群年增长也很难超过 5%。',
  },
  {
    key: 'china-loss',
    label: '中国海域',
    title: '保护等级仍在，繁殖种群已经消失',
    body:
      '2022 和 2025 年两轮大范围访谈与历史资料研究判断，儒艮在中国水域已功能性灭绝。少量迷行个体或未核实记录仍不能排除，却不足以证明可维持的种群仍存在。',
  },
  {
    key: 'monitoring',
    label: '监测与保护',
    title: '寻找动物，也要寻找它留下的证据',
    body:
      '空中和无人机调查、渔民访谈、觅食痕迹、粪便 DNA 与海水环境 DNA 可以互相补充。任何单一线索都不能直接给出全球数量，监测必须同时覆盖海草、渔业和船舶风险。',
  },
]
```

### 关键事实、威胁和行动

```ts
keyFacts: [
  '儒艮是儒艮科唯一现生物种，也是四个现生海牛目物种之一。',
  '它用腹面开口、向下弯的吻部挖取或裁切海草；裁切式取食未必留下沟状痕迹。',
  '跟踪研究记录到个体最远离捕获点 560 千米，但没有证据表明整个区域种群固定往返迁徙。',
  '雌性第一次产仔约在 6 至 17 岁，妊娠约 12 至 14 个月，通常一胎一仔。',
  '即使没有人为死亡且环境理想，种群年增长也很难超过 5%。',
  '研究判断中国水域已功能性灭绝；这不等于儒艮在全球灭绝。',
],
threats: [
  '刺网、鲨网和其他渔具造成的缠绕与窒息',
  '捕猎及不可持续利用移除恢复缓慢的成年个体',
  '疏浚、填海、污染、沉积和底拖造成海草床丧失与退化',
  '浅水食场中的船舶碰撞和密集活动干扰',
  '洪水、气旋和海洋热浪引发海草大面积死亡',
],
conservationActions: [
  '采用标准化空中、无人机、遗传和社区调查，分别监测儒艮、海草与威胁',
  '降低高风险水域的刺网和鲨网缠绕，并维持报告、救援和搁浅响应',
  '保护和恢复核心海草床，控制疏浚、填海、底拖、污染、泥沙与锚泊破坏',
  '在浅水海草区管理船速、航线和观赏距离',
  '通过 CMS Dugong MOU 和社区共同管理协调跨境种群保护',
]
```

### 数值字段与四张统计卡

结构化 `metrics` 建议保持空对象。现有可信数字多是上限、区域均值或条件化纪录，不适合无注释排序：

```ts
metrics: {},
featuredStats: [
  {
    key: 'adult-size',
    label: '成体体长',
    value: '约 2.5 米',
    note: '区域成熟个体均值；官方概览给出的近似最大值约 3 米',
  },
  {
    key: 'gestation',
    label: '妊娠期',
    value: '12—14',
    unit: '个月',
    note: '通常一胎一仔',
  },
  {
    key: 'calving-interval',
    label: '产仔间隔',
    value: '3—7',
    unit: '年',
    note: '随种群与食物条件变化',
  },
  {
    key: 'maximum-growth',
    label: '种群年增长上限',
    value: '不超过约 5%',
    note: '理想条件下的模型量级，多数情况更低',
  },
]
```

可把“最远 560 千米”替换其中一张统计卡，但必须写明“澳大利亚 70 只跟踪样本中的纪录”，不能称为全种迁徙距离或典型日移动。

## 六幅图像的科学边界

### 共用形态

- 使用灰至灰褐色、粗壮而流线的身体；皮肤可有自然浅色擦痕。
- 头部圆钝，眼小，吻部宽大并向下弯；鼻孔在吻部上方。
- 两枚桨状前鳍，无背鳍、无后肢；尾部为水平、中央有缺刻的双叶尾鳍。
- 不添加海豚长吻、鱼类竖直尾鳍、海牛圆桨尾、鳃裂、鱼鳞或大型鲸喷水柱。
- 除非明确画成年雄性或高龄雌性，不添加突出獠牙；即使出现，獠牙也应短小。

### 逐幅场景

1. **`01-seagrass-meadow-portrait`**：一只成年儒艮在清澈、受遮蔽的热带浅海海草床上方缓慢游动。镜头同时展示下弯吻部、前鳍和水平尾叶。背景用沙质底部与稀疏到中等密度的海草，不用深海、极地海藻林或纯珊瑚礁替代海草床。
2. **`02-downturned-muzzle-grazing`**：近景展示宽吻贴底、上唇触须接触海草，一条窄沟中可见被掘起的根茎和轻微沉积物云。它代表挖掘式取食；说明中补充裁切式取食未必留下沟槽。不要画成用牙齿咀嚼陆生草。
3. **`03-tropical-seagrass-habitat`**：广角表现避风海湾或岛屿背风水域，浅水海草斑块与沙地交错，岸线可有红树林或低矮热带植被。儒艮可作为小比例剪影；画面不宣称某个具体国家或数量热点。
4. **`04-surface-breath`**：儒艮缓慢上浮，吻部上方鼻孔刚露出水面，背部形成低矮弧线，尾部仍在水下。没有喷气柱、跃水或海豚式高速弓乘。
5. **`05-mother-and-calf`**：一只成体和一只明显较小的幼仔同向游动，幼仔靠近母体侧腹或后侧。画面不显示多仔、背负、牵手或人类式拥抱；标题用“母亲与幼仔的代表性场景”，不把生成图当作已确认亲缘的野外记录。
6. **`06-seagrass-edna-monitoring`**：研究人员在浅海海草区用无菌采水瓶、手套、标签袋和冷藏箱采集海水或海草表面样本，岸边或小船上可见过滤设备。不要画捕捉、束缚或投喂儒艮，也不要加入发光 DNA 双螺旋。环境 DNA 检出只能支持目标 DNA 在采样环境中出现，不能单独给出个体数、精确位置或繁殖状态。[Ozawa et al. 2024](https://doi.org/10.1038/s41598-024-58674-8) [Mousavi-Derazmahalleh et al. 2026](https://doi.org/10.3389/fmamm.2026.1915420)

2024 年琉球研究使用的是海草床中收集的疑似大型植食动物粪便、物种特异 PCR、目击资料和觅食痕迹，不是只舀一瓶海水便确认数量。2026 年新 qPCR 方法在受控条件下显示物种特异性，并在水族馆水样和两个红海野外地点检出儒艮 DNA；11 个海草滚筒样本没有扩增。第六幅图可以表现方法前景，说明中必须保留“需与其他证据结合”的边界。[Ozawa et al. 2024](https://doi.org/10.1038/s41598-024-58674-8) [Mousavi-Derazmahalleh et al. 2026](https://doi.org/10.3389/fmamm.2026.1915420)

## 推荐来源数组

```ts
const DUGONG_SOURCE_DATE = '2026-08-22' as const;

const DUGONG_SOURCES = [
  {
    title: 'Society for Marine Mammalogy — List of Marine Mammal Species and Subspecies (April 2026)',
    url: 'https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/',
    kind: 'taxonomy',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'ASM Mammal Diversity Database v2.5 — Dugong dugon',
    url: 'https://www.mammaldiversity.org/taxon/1000529/',
    kind: 'taxonomy',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'IUCN Red List — Dugong dugon (2015 assessment, amended 2019)',
    url: 'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T6909A160756767.en',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CMS 2025 — A Global Assessment of Dugong Status and Conservation Needs',
    url: 'https://doi.org/10.25903/0ncx-v838',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CMS — Dugong dugon, Appendix II and Dugong MOU',
    url: 'https://www.cms.int/species/dugong-dugon',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CMS Dugong MOU — Dugong facts',
    url: 'https://dugong.cms.int/species/dugong-facts',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Australian Government DCCEEW — Dugongs',
    url: 'https://www.dcceew.gov.au/environment/marine/marine-species/dugongs',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Cherdsukjai et al. 2020 — Age, body weight and body length in wild dugongs',
    url: 'https://doi.org/10.7717/peerj.10319',
    kind: 'general',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Queensland Government — Dugongs',
    url: 'https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/dugongs',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Great Barrier Reef Marine Park Authority — Dugong',
    url: 'https://www.gbrmpa.gov.au/learn/animals/dugong',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Great Barrier Reef Outlook Report 2024 — Dugongs',
    url: 'https://outlookreport.gbrmpa.gov.au/values/2-biodiversity/24-populations-species-and-groups-species/2416-dugongs',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: '国家林业和草原局、农业农村部 — 国家重点保护野生动物名录（2021年第3号）',
    url: 'https://www.forestry.gov.cn/c/www/gkzfwj/546057.jhtml',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: '生态环境部、中国科学院 — 中国生物多样性红色名录·脊椎动物卷（2020；2023发布）',
    url: 'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2022 — Functional extinction of dugongs in China',
    url: 'https://doi.org/10.1098/rsos.211994',
    kind: 'distribution',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Lin et al. 2025 — Interview-based sighting history of dugongs in China',
    url: 'https://doi.org/10.1098/rsos.250486',
    kind: 'distribution',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Sheppard et al. 2006 — Large-scale movement heterogeneity of dugongs',
    url: 'https://doi.org/10.1016/j.jembe.2006.01.011',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Preen 1995 — Dugong foraging and cultivation grazing in Moreton Bay',
    url: 'https://doi.org/10.3354/meps124201',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Preen 1995 — Diet of dugongs: are they omnivores?',
    url: 'https://doi.org/10.2307/1382325',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Ozawa et al. 2024 — Fecal DNA and sighting evidence in the Ryukyu Islands',
    url: 'https://doi.org/10.1038/s41598-024-58674-8',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'Mousavi-Derazmahalleh et al. 2026 — Species-specific qPCR assay for dugong eDNA',
    url: 'https://doi.org/10.3389/fmamm.2026.1915420',
    kind: 'ecology',
    accessedAt: DUGONG_SOURCE_DATE,
  },
  {
    title: 'CITES — Appendices I, II and III (effective 5 March 2026)',
    url: 'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    kind: 'conservation',
    accessedAt: DUGONG_SOURCE_DATE,
  },
] as const satisfies readonly SpeciesSource[];
```

## 来源清单与使用边界

| 来源 | 支持的字段或事实 | 不能据此声称 |
| --- | --- | --- |
| [SMM 2026](https://marinemammalscience.org/science-and-publications/list-marine-mammal-species-subspecies/) | 当前接受名、海牛目、儒艮科、无接受亚种 | 不能用旧亚种名拆分页面 |
| [MDD v2.5](https://www.mammaldiversity.org/taxon/1000529/) | 权威名、分类、印度洋和西太平洋概括分布 | 国家列表不等于每国现存居民种群 |
| [IUCN 2015 / amended 2019](https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T6909A160756767.en) | VU、decreasing、A2bcd+4bcd | 2019 不是新评估；不提供当前全球同步数量 |
| [CMS 2025 global assessment](https://doi.org/10.25903/0ncx-v838) | 最新全球与区域综述、48 范围国、海草生境、生活史、威胁、方法 | 区域估计不能相加成全球总量；旧 IUCN 地图需要修订 |
| [CMS Dugong facts](https://dugong.cms.int/species/dugong-facts) | 公众概览、体型和生活史量级 | 概览数字不是全球硬范围或平均值 |
| [DCCEEW](https://www.dcceew.gov.au/environment/marine/marine-species/dugongs) | 形态、澳大利亚生境、单仔、母仔期、全球威胁 | 澳大利亚现状不能代表亚洲和非洲 |
| [PeerJ 2020](https://doi.org/10.7717/peerj.10319) | 泰国成熟雄雌的地区体长和体重均值 | 地区均值不是全球成体范围 |
| [Queensland Government](https://www.qld.gov.au/environment/plants-animals/conservation/threatened-species/featured-projects/dugongs) | 昆士兰体型和摄食概览 | 每日食量概括值不能套用于每只个体 |
| [Reef Authority](https://www.gbrmpa.gov.au/learn/animals/dugong) | 鼻孔、触须、獠牙、寿命量级、繁殖参数 | 最大值不是典型范围；叫声不等于回声定位 |
| [Great Barrier Reef Outlook 2024](https://outlookreport.gbrmpa.gov.au/values/2-biodiversity/24-populations-species-and-groups-species/2416-dugongs) | 大堡礁区域状态、海草冲击和移动概览 | 区域资料不能替代全球评估 |
| [中国红色名录 2020](https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf) | 中国区域 CR B1ab(i,ii,iii) | 不覆盖全球 VU，也不是 2025 后的新评估 |
| [Lin et al. 2022](https://doi.org/10.1098/rsos.211994) | 788 人访谈、历史资料、功能性灭绝判断 | 无法证明最后一只个体死亡；近期可能目击未核实 |
| [Lin et al. 2025](https://doi.org/10.1098/rsos.250486) | 841 人复查、2021 访谈捕获记录、历史范围扩展 | 单次受访者记录不证明可繁殖种群恢复 |
| [Sheppard et al. 2006](https://doi.org/10.1016/j.jembe.2006.01.011) | 70 只跟踪样本、最长 560 千米、个体差异 | 不能写成全种固定迁徙距离或迁徙路线 |
| [Preen 1995 MEPS](https://doi.org/10.3354/meps124201) | Moreton Bay 的取食影响和 cultivation grazing | 不能外推为所有海草床都会因啃食而改善 |
| [Preen 1995 Journal of Mammalogy](https://doi.org/10.2307/1382325) | Moreton Bay 粪便样本与主动摄食海鞘记录 | 单一边缘种群不能改写全种以海草为主的食性 |
| [Ozawa et al. 2024](https://doi.org/10.1038/s41598-024-58674-8) | 粪便 DNA、目击和觅食痕迹的组合监测 | 不是纯海水 eDNA 数量调查 |
| [2026 qPCR assay](https://doi.org/10.3389/fmamm.2026.1915420) | 物种特异环境 DNA 检测方法与初步野外应用 | 阳性结果不能单独给出个体数或繁殖状态 |
| [CITES 2026](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf) | 附录 I | 不替代 IUCN、CMS 或国内法律等级 |

## 应删除或避免的说法

- “儒艮全球已经灭绝”或把中国功能性灭绝写进全球 `conservation.code`。
- “中国最后一只儒艮已经死亡”。两轮研究都保留漏检、误认和迷行个体的可能。
- “2019 年 IUCN 重新评估为 VU”。正确说法是 2015 年评估、2019 年修订版。
- “全球只剩约 4 万只”或用澳大利亚约 16.6 万只代替全球数量。
- “所有儒艮每年固定迁徙 560 千米”。560 千米来自 70 只澳大利亚样本中的最远记录。
- “它们只吃海草”。部分地区记录藻类和主动摄食海鞘等大型无脊椎动物。
- “每次取食都会留下沟槽”。只有挖掘式取食留下明显沟槽。
- “儒艮会用回声定位导航”。现有综述将叫声解释为社会交流信号。
- “海牛和儒艮外形相同”。儒艮有中央缺刻的水平双叶尾，海牛属是圆桨尾。
- “海水 eDNA 阳性就能计算数量”。目前方法支持检出，数量、距离和繁殖状态仍需其他证据。
- “Dugong dugon hemprichii 是当前接受亚种”。2026 SMM 与 MDD 不接受该亚种清单。

## 更新触发点

- IUCN 发布全球新评估时，重新核对状态、趋势、标准、评估年和分布图。
- IUCN Sirenia Specialist Group 正式评估中国或其他新亚种群时，新增区域状态说明，不覆盖全球字段。
- 中国出现经过照片、遗传、尸体或持续调查核实的新记录时，更新“功能性灭绝”段落，并区分迷行个体与可繁殖种群。
- 2026 年 qPCR 方法积累跨海区重复验证后，再决定是否把 eDNA 从故事性监测案例提升为主要保护行动。
- SMM 或 MDD 接受新的亚种或物种拆分时，重新核对历史图片、区域研究和来源数组。
