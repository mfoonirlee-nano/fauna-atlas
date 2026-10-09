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
