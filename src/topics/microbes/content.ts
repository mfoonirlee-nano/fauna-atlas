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
    parentNote: '这是食物制作观察，不是培养未知微生物。按食品包装说明操作，做食物前洗手，不尝生面团。',
    sources: [{ title: 'Saccharomyces Genome Database：认识酵母', url: 'https://wiki.yeastgenome.org/index.php/What_are_yeast%3F' }],
  },
  {
    slug: 'streptococcus-thermophilus', name: '嗜热链球菌', scientificName: 'Streptococcus thermophilus',
    group: 'bacteria', diagram: 'chain', feature: '球形细胞排成链', question: '小圆球能怎样排队？',
    introduction: '嗜热链球菌是酸奶发酵常用的细菌之一。它与德氏乳杆菌保加利亚亚种一起参与发酵，利用乳糖产生乳酸。',
    observation: '沿着示意图找一串圆形细胞。链的长短会变化，仅凭排列方式不能确定细菌的物种。',
    connection: '与成人一起看酸奶包装上的菌种名称，找找有没有嗜热链球菌。',
    parentNote: '这项观察不需要在家培养细菌。酸奶按包装要求保存；“细菌”这个名称本身不代表有害。',
    sources: [{ title: '酸奶菌共同发酵研究', url: 'https://pubmed.ncbi.nlm.nih.gov/24936380/' }],
  },
  {
    slug: 'lactobacillus-delbrueckii', name: '德氏乳杆菌', scientificName: 'Lactobacillus delbrueckii',
    group: 'bacteria', diagram: 'rods', feature: '杆形细胞', question: '它和酸奶里的小圆球一样吗？',
    introduction: '本篇介绍德氏乳杆菌的保加利亚亚种（Lactobacillus delbrueckii subsp. bulgaricus）。它是常用的酸奶发酵菌，与嗜热链球菌属于不同物种。',
    observation: '比较杆形细胞与上一种的圆形细胞。它们都很小，需要显微观察；形状只能作为观察线索。',
    connection: '在酸奶包装上找“保加利亚乳杆菌”，把这个名字与本篇的亚种学名对应起来。',
    parentNote: '发酵作用的介绍针对保加利亚亚种，不能推广到德氏乳杆菌的所有亚种或菌株。',
    sources: [{ title: '保加利亚亚种与酸奶生产研究', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3022021/' }],
  },
  {
    slug: 'bifidobacterium-bifidum', name: '双歧双歧杆菌', scientificName: 'Bifidobacterium bifidum',
    group: 'bacteria', diagram: 'branched', feature: '分枝形态', question: '身体里也有微小生命吗？',
    introduction: '研究人员在人类肠道的微生物群中发现过双歧双歧杆菌。我们的身体里生活着多种微生物，它们的组成因人而异。',
    observation: '看看分枝杆形示意，找找像字母 Y 的轮廓。细胞形态会变化，不是每个细胞都长得一样。',
    connection: '指一指肚子，说说“身体里也有肉眼看不到的生命”。不需要通过取样来证明。',
    parentNote: '认识一种肠道微生物，不等于推荐益生菌产品。不同菌株和产品的作用不能从物种名称或这张示意图推断。',
    sources: [{ title: '人类肠道双歧杆菌多样性研究', url: 'https://pubmed.ncbi.nlm.nih.gov/19168652/' },
      { title: 'USP：双歧双歧杆菌形态', url: 'https://doi.usp.org/USPNF/USPNF_M13098_02_01.html' }],
  },
  {
    slug: 'escherichia-coli', name: '大肠杆菌', scientificName: 'Escherichia coli',
    group: 'bacteria', diagram: 'rods', feature: '同种不同菌株', question: '名字一样，作用也一样吗？',
    introduction: '大肠杆菌可生活在人和动物的肠道中，也能出现在食物、水和环境里。多数类型无害，但有些类型会引起疾病。',
    observation: '找找杆状的细胞。示意图的颜色和形状不能告诉我们某个菌株是否致病。',
    connection: '把观察接到一个日常动作：上厕所后、吃东西前，请成人帮助用肥皂和流动水洗手。',
    parentNote: '不培养手印或厕所污物，也不把所有大肠杆菌叫作坏细菌。洗手帮助减少传播机会。',
    sources: [{ title: 'CDC：大肠杆菌介绍', url: 'https://www.cdc.gov/ecoli/about/index.html' }],
  },
  {
    slug: 'salmonella-enterica', name: '肠道沙门菌', scientificName: 'Salmonella enterica',
    group: 'bacteria', diagram: 'rods', feature: '传播机会', question: '手碰过动物后要做什么？',
    introduction: '肠道沙门菌是一种细菌。接触动物、它们的生活区域或受污染的食物后，细菌可能通过手等途径进入口中。',
    observation: '用“动物生活区域 → 手 → 食物”的顺序讲传播机会。不要用示意图判断哪只动物带菌。',
    connection: '接触动物及其用品后，先洗手，再吃东西。与成人一起练习这两个动作的顺序。',
    parentNote: '爬行动物和两栖动物看起来健康也可能携带沙门菌。5 岁以下孩子用图片观察，不直接接触它们及其生活环境。',
    sources: [{ title: 'CDC：沙门菌介绍', url: 'https://www.cdc.gov/salmonella/about/index.html' },
      { title: 'CDC：爬行动物与两栖动物', url: 'https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html' }],
  },
  {
    slug: 'streptococcus-mutans', name: '变异链球菌', scientificName: 'Streptococcus mutans',
    group: 'bacteria', diagram: 'chain', feature: '牙菌斑与产酸', question: '为什么要帮助牙齿保持清洁？',
    introduction: '变异链球菌是与龋齿相关的口腔细菌之一。牙菌斑中的细菌利用糖产生酸，反复的酸作用会损伤牙齿表面。',
    observation: '比较球形细胞组成的链。牙菌斑包含多种微生物，不能把一串细胞当作整个牙菌斑。',
    connection: '早晚请成人帮助刷牙。认识牙齿表面，看看牙刷怎样清洁不同的位置。',
    parentNote: '龋齿涉及微生物、饮食和时间等因素。不要画成一只小虫啃牙，也不要责怪孩子。',
    sources: [{ title: 'NIDCR：口腔微生物', url: 'https://www.nidcr.nih.gov/news-events/nidcr-news/2024/exploring-mouths-microbial-wonders' },
      { title: 'NIDCR：龋齿', url: 'https://www.nidcr.nih.gov/health-info/tooth-decay' }],
  },
  {
    slug: 'giardia-duodenalis', name: '蓝氏贾第鞭毛虫', scientificName: 'Giardia duodenalis',
    group: 'protist', diagram: 'giardia', feature: '双核与鞭毛', question: '清澈的水一定能喝吗？',
    introduction: '蓝氏贾第鞭毛虫是单细胞真核寄生生物，可生活在感染者的肠道中。人吞入被它污染的水或食物后可能感染。',
    observation: '示意图画的是滋养体，显示两个细胞核和鞭毛；两个核不是眼睛。它还有外形不同的包囊阶段。',
    connection: '游泳时不吞水，不喝未经处理的溪水。水是否能饮用，要看水源与处理方式。',
    parentNote: '资料中也常用 Giardia lamblia、Giardia intestinalis 等同物异名。“虫”字不表示它属于动物，也不表示肉眼能看见它。',
    sources: [{ title: 'CDC：贾第鞭毛虫介绍', url: 'https://www.cdc.gov/giardia/about/index.html' },
      { title: 'CDC DPDx：生活史与结构', url: 'https://www.cdc.gov/dpdx/giardiasis/index.html' }],
  },
  {
    slug: 'paramecium-caudatum', name: '大草履虫', scientificName: 'Paramecium caudatum',
    group: 'protist', diagram: 'cilia', feature: '纤毛', question: '没有脚，它怎样游动？',
    introduction: '大草履虫是一种生活在水中的单细胞真核生物。细胞表面有许多纤毛，纤毛的运动帮助它游动。',
    observation: '沿细胞轮廓找短短的纤毛。成人可选择注明物种的显微视频，和孩子找找游动与转弯的时刻。',
    connection: '把它当作水中生命来认识。看到水里有生物，并不能据此判断水是否可以饮用。',
    parentNote: '本篇不把草履虫作为致病菌代表。优先使用显微影像，不让幼儿收集或培养未知水样。',
    sources: [{ title: 'Carolina：大草履虫与纤毛运动', url: 'https://www.carolina.com/protozoa/paramecium-caudatum-living/131554.pr' }],
  },
  {
    slug: 'euglena-gracilis', name: '眼虫', scientificName: 'Euglena gracilis',
    group: 'protist', diagram: 'flagellum', feature: '鞭毛与叶绿体', question: '绿色的小细胞怎样移动？',
    introduction: '眼虫是一种单细胞真核生物。它具有叶绿体，能进行光合作用，也能借助伸出细胞的鞭毛游动。',
    observation: '找找长鞭毛、细胞内的叶绿体和眼点。眼点参与感光相关过程，不是像人眼一样看图像的眼睛。',
    connection: '与大草履虫比较：一边找长鞭毛，一边找许多短纤毛。两张图的大小不能拿来比较真实尺寸。',
    parentNote: '名字里的“虫”不代表动物归属。饮水安全取决于水源和处理，不能靠水的颜色或是否看起来清澈判断。',
    sources: [{ title: 'Carolina：眼虫与鞭毛运动', url: 'https://www.carolina.com/algae/euglena-gracilis-living/152800.pr' },
      { title: '眼虫感光机制研究', url: 'https://pubs.rsc.org/En/content/articlehtml/2012/ib/c1ib00115a' }],
  },
];
