export interface MicrobeImage { readonly src: string; readonly alt: string; readonly width: number; readonly height: number; }

export const microbeImages: Readonly<Record<string, MicrobeImage>> = {
  "saccharomyces-cerevisiae": {
    "src": "./images/microbes/saccharomyces-cerevisiae/01-observation.webp",
    "alt": "酿酒酵母：椭圆细胞与相连的小芽。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "streptococcus-thermophilus": {
    "src": "./images/microbes/streptococcus-thermophilus/01-observation.webp",
    "alt": "嗜热链球菌：球形细胞组成的短链。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "lactobacillus-delbrueckii": {
    "src": "./images/microbes/lactobacillus-delbrueckii/01-observation.webp",
    "alt": "德氏乳杆菌：杆形细胞及短链，保加利亚亚种的简化形态。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "bifidobacterium-bifidum": {
    "src": "./images/microbes/bifidobacterium-bifidum/01-observation.webp",
    "alt": "双歧双歧杆菌：Y 形、V 形和普通杆形细胞。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "escherichia-coli": {
    "src": "./images/microbes/escherichia-coli/01-observation.webp",
    "alt": "大肠杆菌：圆端短杆细胞，不描绘菌株特异结构。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "salmonella-enterica": {
    "src": "./images/microbes/salmonella-enterica/01-observation.webp",
    "alt": "肠道沙门菌：杆形细胞与分布在表面的细长鞭毛。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "streptococcus-mutans": {
    "src": "./images/microbes/streptococcus-mutans/01-observation.webp",
    "alt": "变异链球菌：多串球形细胞链，不代表完整牙菌斑。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "giardia-duodenalis": {
    "src": "./images/microbes/giardia-duodenalis/01-observation.webp",
    "alt": "蓝氏贾第鞭毛虫：梨形滋养体、两个细胞核与四对鞭毛。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "paramecium-caudatum": {
    "src": "./images/microbes/paramecium-caudatum/01-observation.webp",
    "alt": "大草履虫：长形细胞、周边短纤毛与口沟。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "euglena-gracilis": {
    "src": "./images/microbes/euglena-gracilis/01-observation.webp",
    "alt": "眼虫：梭形细胞、绿色叶绿体、红色眼点与长鞭毛。AI 科学重建，配色示意，不按比例。",
    "width": 1536,
    "height": 1024
  }
};

export const microbeStoryImages: Readonly<Record<string, MicrobeImage>> = {
  "saccharomyces-cerevisiae": {
    "src": "./images/microbes/saccharomyces-cerevisiae/02-story.webp",
    "alt": "酿酒酵母：亲子观察面团和面包，放大窗口展示椭圆细胞与小芽。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "streptococcus-thermophilus": {
    "src": "./images/microbes/streptococcus-thermophilus/02-story.webp",
    "alt": "嗜热链球菌：亲子观察酸奶，放大窗口展示球形细胞短链。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "lactobacillus-delbrueckii": {
    "src": "./images/microbes/lactobacillus-delbrueckii/02-story.webp",
    "alt": "德氏乳杆菌：牛奶与酸奶的比较，放大窗口展示杆形细胞和球形细胞链。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "bifidobacterium-bifidum": {
    "src": "./images/microbes/bifidobacterium-bifidum/02-story.webp",
    "alt": "双歧双歧杆菌：亲子阅读身体图，放大窗口展示肠道中的分枝杆形细胞。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "escherichia-coli": {
    "src": "./images/microbes/escherichia-coli/02-story.webp",
    "alt": "大肠杆菌：家长陪孩子洗手，放大窗口展示肠道里的圆端短杆细胞。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "salmonella-enterica": {
    "src": "./images/microbes/salmonella-enterica/02-story.webp",
    "alt": "肠道沙门菌：亲子隔着玻璃观察乌龟，放大窗口展示杆形细胞与细长鞭毛。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "streptococcus-mutans": {
    "src": "./images/microbes/streptococcus-mutans/02-story.webp",
    "alt": "变异链球菌：家长帮助孩子刷牙，放大窗口展示牙齿表面薄膜和球形细胞链。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "giardia-duodenalis": {
    "src": "./images/microbes/giardia-duodenalis/02-story.webp",
    "alt": "蓝氏贾第鞭毛虫：亲子在溪边使用自己的水瓶，放大窗口对照包囊和滋养体。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "paramecium-caudatum": {
    "src": "./images/microbes/paramecium-caudatum/02-story.webp",
    "alt": "大草履虫：亲子通过显微镜观察，放大窗口展示短纤毛、口沟和内部小泡。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  },
  "euglena-gracilis": {
    "src": "./images/microbes/euglena-gracilis/02-story.webp",
    "alt": "眼虫：阳光下的水域，放大窗口展示绿色叶绿体、红色眼点和长鞭毛。AI 科普插画，非显微照片，不按比例。",
    "width": 1536,
    "height": 1024
  }
};
