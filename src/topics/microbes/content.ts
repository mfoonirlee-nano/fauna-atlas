export type MicrobeGroup = 'bacteria' | 'fungus' | 'protist';
export type DiagramKind = 'budding' | 'chain' | 'rods' | 'branched' | 'giardia' | 'cilia' | 'flagellum';

export interface MicrobeTopic {
  readonly slug: string;
  readonly name: string;
  readonly scientificName: string;
  readonly group: MicrobeGroup;
  readonly diagram: DiagramKind;
  readonly feature: string;
  readonly question: string;
  readonly introduction: string;
  readonly observation: string;
  readonly connection: string;
  readonly parentNote: string;
  readonly sources: readonly { readonly title: string; readonly url: string }[];
}

export const groupLabels: Record<MicrobeGroup, string> = {
  bacteria: '细菌', fungus: '真菌', protist: '单细胞真核生物',
};

export const microbeTopics: readonly MicrobeTopic[] = [
  {
    slug: 'saccharomyces-cerevisiae', name: '酿酒酵母', scientificName: 'Saccharomyces cerevisiae',
    group: 'fungus', diagram: 'budding', feature: '出芽', question: '面团里的气泡从哪里来？',
    introduction: '酿酒酵母是一种单细胞真菌。发酵时，它利用糖并产生二氧化碳；面团留住这些气体，就会鼓起来。',
    observation: '找找椭圆形细胞旁的小芽。出芽是它繁殖的一种方式；一粒干酵母中有许多细胞，肉眼看不到单个细胞。',
    connection: '请成人用食品级酵母演示面团发起，比较前后体积，再看看面包里的小孔。',
    parentNote: '观察面团时使用食品级酵母，按包装说明操作。孩子可以看体积变化和成品的小孔；生面粉和生面团可能带有致病微生物，不尝生面团。',
    sources: [{ title: 'Saccharomyces Genome Database：认识酵母', url: 'https://wiki.yeastgenome.org/index.php/What_are_yeast%3F' }],
  },
  {
    slug: 'streptococcus-thermophilus', name: '嗜热链球菌', scientificName: 'Streptococcus thermophilus',
    group: 'bacteria', diagram: 'chain', feature: '球形细胞排成链', question: '酸奶怎么变酸、变稠？',
    introduction: '嗜热链球菌是酸奶发酵常用的细菌之一。它与德氏乳杆菌保加利亚亚种一起参与发酵，利用乳糖产生乳酸。',
    observation: '沿着示意图找一串圆形细胞。链的长短会变化，仅凭排列方式不能确定细菌的物种。',
    connection: '与成人一起看酸奶包装上的菌种名称，找找有没有嗜热链球菌。',
    parentNote: '可以和孩子一起看酸奶包装，找找菌种名称。发酵需要选定的菌种和受控工艺，买来的酸奶按包装要求保存。',
    sources: [{ title: '酸奶菌共同发酵研究', url: 'https://pubmed.ncbi.nlm.nih.gov/24936380/' }],
  },
  {
    slug: 'lactobacillus-delbrueckii', name: '德氏乳杆菌', scientificName: 'Lactobacillus delbrueckii',
    group: 'bacteria', diagram: 'rods', feature: '杆形细胞', question: '一杯酸奶里，有哪些发酵菌？',
    introduction: '本篇介绍德氏乳杆菌的保加利亚亚种（Lactobacillus delbrueckii subsp. bulgaricus）。它是常用的酸奶发酵菌，与嗜热链球菌属于不同物种。',
    observation: '比较杆形细胞与上一种的圆形细胞。它们都很小，需要显微观察；形状只能作为观察线索。',
    connection: '在酸奶包装上找“保加利亚乳杆菌”，把这个名字与本篇的亚种学名对应起来。',
    parentNote: '这里讲的是保加利亚亚种（Lactobacillus delbrueckii subsp. bulgaricus）的酸奶发酵作用。德氏乳杆菌的其他亚种或菌株，需要分别了解。',
    sources: [{ title: '保加利亚亚种与酸奶生产研究', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3022021/' }],
  },
  {
    slug: 'bifidobacterium-bifidum', name: '两歧双歧杆菌', scientificName: 'Bifidobacterium bifidum',
    group: 'bacteria', diagram: 'branched', feature: '分枝形态', question: '身体里也有微小生命吗？',
    introduction: '研究人员在人类肠道的微生物群中发现过两歧双歧杆菌。我们的身体里生活着多种微生物，它们的组成因人而异。',
    observation: '看看分枝杆形示意，找找像字母 Y 的轮廓。细胞形态会变化，不是每个细胞都长得一样。',
    connection: '指一指肚子，说说“身体里也有肉眼看不到的生命”。不需要通过取样来证明。',
    parentNote: '本篇用来认识肠道里的生活。菌株、产品和使用人群可能不同，益生菌的效果需要具体研究，不能只凭物种名称判断。',
    sources: [{ title: 'CICC：两歧双歧杆菌中文名与学名', url: 'https://www.china-cicc.org/cicc/detail2/?sid=13221' },
      { title: '人类肠道双歧杆菌多样性研究', url: 'https://pubmed.ncbi.nlm.nih.gov/19168652/' },
      { title: 'USP：两歧双歧杆菌形态', url: 'https://doi.usp.org/USPNF/USPNF_M13098_02_01.html' }],
  },
  {
    slug: 'escherichia-coli', name: '大肠杆菌', scientificName: 'Escherichia coli',
    group: 'bacteria', diagram: 'rods', feature: '同种不同菌株', question: '名字一样，作用也一样吗？',
    introduction: '大肠杆菌可生活在人和动物的肠道中，也能出现在食物、水和环境里。多数类型无害，但有些类型会引起疾病。',
    observation: '找找杆状的细胞。示意图的颜色和形状不能告诉我们某个菌株是否致病。',
    connection: '把观察接到一个日常动作：上厕所后、吃东西前，请成人帮助用肥皂和流动水洗手。',
    parentNote: '多数大肠杆菌类型无害，部分类型能致病。孩子可以练习便后、吃东西前洗手；家长不安排培养手印或厕所样本。',
    sources: [{ title: 'CDC：大肠杆菌介绍', url: 'https://www.cdc.gov/ecoli/about/index.html' }],
  },
  {
    slug: 'salmonella-enterica', name: '肠道沙门菌', scientificName: 'Salmonella enterica',
    group: 'bacteria', diagram: 'rods', feature: '传播机会', question: '手碰过动物后要做什么？',
    introduction: '肠道沙门菌是一种细菌。接触动物、它们的生活区域或受污染的食物后，细菌可能通过手等途径进入口中。',
    observation: '用“动物生活区域 → 手 → 食物”的顺序讲传播机会。不要用示意图判断哪只动物带菌。',
    connection: '接触动物及其用品后，先洗手，再吃东西。与成人一起练习这两个动作的顺序。',
    parentNote: '5 岁以下孩子通过图片认识爬行动物和两栖动物，不直接接触它们及其生活环境。动物看起来健康，也可能携带沙门菌。',
    sources: [{ title: 'CDC：沙门菌介绍', url: 'https://www.cdc.gov/salmonella/about/index.html' },
      { title: 'CDC：爬行动物与两栖动物', url: 'https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html' }],
  },
  {
    slug: 'streptococcus-mutans', name: '变异链球菌', scientificName: 'Streptococcus mutans',
    group: 'bacteria', diagram: 'chain', feature: '牙菌斑与产酸', question: '牙齿为什么会出现蛀牙？',
    introduction: '变异链球菌是与龋齿相关的口腔细菌之一。牙菌斑中的细菌利用糖产生酸，反复的酸作用会损伤牙齿表面。',
    observation: '比较球形细胞组成的链。牙菌斑包含多种微生物，不能把一串细胞当作整个牙菌斑。',
    connection: '早晚请成人帮助刷牙。认识牙齿表面，看看牙刷怎样清洁不同的位置。',
    parentNote: '牙菌斑里有多种微生物。龋齿和细菌、饮食及时间等因素有关，家长帮助孩子建立刷牙习惯，避免用恐吓或责怪来催促。',
    sources: [{ title: 'NIDCR：口腔微生物', url: 'https://www.nidcr.nih.gov/news-events/nidcr-news/2024/exploring-mouths-microbial-wonders' },
      { title: 'NIDCR：龋齿', url: 'https://www.nidcr.nih.gov/health-info/tooth-decay' }],
  },
  {
    slug: 'giardia-duodenalis', name: '蓝氏贾第鞭毛虫', scientificName: 'Giardia duodenalis',
    group: 'protist', diagram: 'giardia', feature: '双核与鞭毛', question: '清澈的水一定能喝吗？',
    introduction: '蓝氏贾第鞭毛虫是单细胞真核寄生生物，可生活在感染者的肠道中。人吞入被它污染的水或食物后可能感染。',
    observation: '示意图画的是滋养体，显示两个细胞核和鞭毛；两个核不是眼睛。它还有外形不同的包囊阶段。',
    connection: '游泳时不吞水，不喝未经处理的溪水。水是否能饮用，要看水源与处理方式。',
    parentNote: '文献中还常见 Giardia lamblia、Giardia intestinalis 这两个同物异名。图里展示的滋养体和包囊属于不同阶段；名字里的“虫”不表示它属于动物图鉴。',
    sources: [{ title: 'CDC：贾第鞭毛虫介绍', url: 'https://www.cdc.gov/giardia/about/index.html' },
      { title: 'CDC DPDx：生活史与结构', url: 'https://www.cdc.gov/dpdx/giardiasis/index.html' }],
  },
  {
    slug: 'paramecium-caudatum', name: '大草履虫', scientificName: 'Paramecium caudatum',
    group: 'protist', diagram: 'cilia', feature: '纤毛', question: '没有脚，它怎样游动？',
    introduction: '大草履虫是一种生活在水中的单细胞真核生物。细胞表面有许多纤毛，纤毛的运动帮助它游动。',
    observation: '沿细胞轮廓找短短的纤毛。成人可选择注明物种的显微视频，和孩子找找游动与转弯的时刻。',
    connection: '把它当作水中生命来认识。看到水里有生物，并不能据此判断水是否可以饮用。',
    parentNote: '用注明物种的显微影像继续观察纤毛和游动。家长不安排幼儿收集或培养未知水样；是否能饮用，还要看水源与处理方式。',
    sources: [{ title: 'Carolina：大草履虫与纤毛运动', url: 'https://www.carolina.com/protozoa/paramecium-caudatum-living/131554.pr' }],
  },
  {
    slug: 'euglena-gracilis', name: '眼虫', scientificName: 'Euglena gracilis',
    group: 'protist', diagram: 'flagellum', feature: '鞭毛与叶绿体', question: '绿色的小细胞怎样移动？',
    introduction: '本篇认识的是纤细裸藻（Euglena gracilis），属于常被叫作“眼虫”的一类单细胞真核生物。它具有叶绿体，能进行光合作用，也能借助伸出细胞的鞭毛游动。',
    observation: '找找长鞭毛、细胞内的叶绿体和眼点。眼点参与感光相关过程，不是像人眼一样看图像的眼睛。',
    connection: '与大草履虫比较：一边找长鞭毛，一边找许多短纤毛。两张图的大小不能拿来比较真实尺寸。',
    parentNote: '眼点和相关感光结构参与对光的反应，不能像人眼那样成像。插画的绿色用来提示叶绿体，水的颜色本身不能说明饮水安全。',
    sources: [{ title: '中国科学院淡水藻种库：纤细裸藻名称', url: 'https://algae.ihb.ac.cn/Products/ProductDetail.aspx?product=478' },
      { title: 'Carolina：眼虫与鞭毛运动', url: 'https://www.carolina.com/algae/euglena-gracilis-living/152800.pr' },
      { title: '眼虫感光机制研究', url: 'https://pubs.rsc.org/En/content/articlehtml/2012/ib/c1ib00115a' }],
  },
];
