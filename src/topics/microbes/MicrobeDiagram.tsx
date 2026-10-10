import { useId } from 'react';
import type { DiagramKind, MicrobeTopic } from './content';

export const observationFeatures: Record<DiagramKind, readonly { label: string; text: string; x: number; y: number }[]> = {
  budding: [{ label: '小芽', text: '母细胞旁的小芽会逐渐长大，出芽是酵母繁殖的一种方式。', x: 177, y: 65 }, { label: '母细胞', text: '较大的椭圆是母细胞。它是一个完整的单细胞真菌。', x: 120, y: 125 }],
  chain: [{ label: '单个细胞', text: '每个小圆球代表一个细胞，不是一整串才算一个。', x: 98, y: 105 }, { label: '链状排列', text: '细胞分裂后可以相连成链，长度会变化，不能只靠形状确认物种。', x: 198, y: 86 }],
  rods: [{ label: '杆形细胞', text: '这些短杆分别代表细胞。许多不同细菌都有杆形外观。', x: 141, y: 98 }, { label: '圆钝的两端', text: '示意图把两端画成圆钝轮廓；外观不能告诉我们菌株是否致病。', x: 80, y: 65 }],
  branched: [{ label: '分枝轮廓', text: '部分细胞可能呈 Y 形分枝，形态会随条件变化。', x: 140, y: 84 }, { label: '普通杆形', text: '同一种微生物的细胞也可能呈不同形态，并非都像字母 Y。', x: 217, y: 113 }],
  giardia: [{ label: '两个细胞核', text: '滋养体有两个细胞核，这两个结构不是眼睛。', x: 132, y: 70 }, { label: '四对鞭毛', text: '滋养体有四对鞭毛，参与运动；图中线条做了简化。', x: 230, y: 125 }],
  cilia: [{ label: '短纤毛', text: '许多短纤毛协调摆动，帮助游动，也把食物送向口沟。', x: 75, y: 94 }, { label: '口沟', text: '这个取食区域帮助把微小食物送入细胞。', x: 193, y: 106 }, { label: '伸缩泡', text: '伸缩泡帮助排出多余的水。图中只画了一个作说明。', x: 115, y: 72 }],
  flagellum: [{ label: '长鞭毛', text: '伸出细胞的长鞭毛帮助眼虫游动，和草履虫的短纤毛不同。', x: 259, y: 63 }, { label: '叶绿体', text: '叶绿体参与光合作用。绿色是说明配色，不是鉴定依据。', x: 141, y: 102 }, { label: '眼点', text: '眼点与相关感光结构参与对光的反应，不像人眼一样成像。', x: 200, y: 70 }],
};

export function MicrobeDiagram({ item, activeFeature }: { item: MicrobeTopic; activeFeature?: number }) {
  const titleId = useId();
  return <figure className={`microbe-diagram microbe-diagram--${item.group}`}>
    <svg viewBox="0 0 300 190" role="img" aria-labelledby={titleId}>
      <title id={titleId}>{`${item.name}的${item.feature}简化示意，非显微照片，不按比例`}</title>
      <g className="microbe-diagram__cell">
        {item.diagram === 'budding' && <>
          <ellipse cx="135" cy="108" rx="37" ry="47" transform="rotate(-25 135 108)" />
          <ellipse cx="177" cy="65" rx="22" ry="27" transform="rotate(30 177 65)" />
          <circle className="microbe-diagram__detail" cx="132" cy="109" r="11" />
          <circle className="microbe-diagram__detail" cx="178" cy="65" r="6" />
        </>}
        {item.diagram === 'chain' && [0, 1, 2, 3, 4, 5].map((n) =>
          <circle key={n} cx={65 + n * 33} cy={95 + Math.sin(n) * 12} r="16" />)}
        {item.diagram === 'rods' && [0, 1, 2].map((n) =>
          <rect key={n} x={65 + n * 61} y={60 + n * 9} width="30" height="68" rx="15" transform={`rotate(${n * 25 - 20} ${80 + n * 61} ${94 + n * 9})`} />)}
        {item.diagram === 'branched' && <>
          <path d="M126 147 L126 101 L98 65 Q90 52 101 47 Q111 43 120 56 L140 81 L159 55 Q168 42 179 48 Q188 55 179 66 L153 101 L153 147 Q140 166 126 147Z" />
          <rect x="207" y="80" width="25" height="65" rx="12" transform="rotate(30 219 112)" />
        </>}
        {item.diagram === 'giardia' && <>
          <path d="M150 36 C77 36 93 105 150 147 C207 105 223 36 150 36Z" />
          <ellipse className="microbe-diagram__detail" cx="132" cy="70" rx="8" ry="12" />
          <ellipse className="microbe-diagram__detail" cx="168" cy="70" rx="8" ry="12" />
        </>}
        {item.diagram === 'cilia' && <>
          <path d="M96 52 C144 19 217 52 218 108 C218 153 155 172 108 142 C75 120 66 78 96 52Z" />
          <ellipse className="microbe-diagram__detail" cx="144" cy="94" rx="16" ry="22" />
          <path d="M197 73 Q165 106 193 130" fill="none" />
          <path d="M115 57V87 M100 72H130 M104 61L126 83 M126 61L104 83" fill="none" />
        </>}
        {item.diagram === 'flagellum' && <>
          <path d="M78 135 C100 52 173 34 222 58 C209 119 154 158 78 135Z" />
          {[0, 1, 2, 3].map((n) => <ellipse className="microbe-diagram__detail" key={n} cx={119 + n * 22} cy={115 - n * 13} rx="10" ry="17" transform={`rotate(40 ${119 + n * 22} ${115 - n * 13})`} />)}
          <circle className="microbe-diagram__eyespot" cx="200" cy="70" r="5" />
        </>}
      </g>
      <g className="microbe-diagram__lines">
        {item.diagram === 'giardia' && [0, 1, 2, 3].flatMap((n) => [-1, 1].map((side) =>
          <path key={`${n}-${side}`} d={`M${150 + side * (32 - n * 7)} ${68 + n * 18} Q${150 + side * (95 - n * 12)} ${110 + n * 15} ${150 + side * (115 - n * 25)} ${116 + n * 18}`} />))}
        {item.diagram === 'cilia' && Array.from({ length: 28 }, (_, n) => {
          const angle = n / 28 * Math.PI * 2;
          return <path key={n} d={`M${150 + 72 * Math.cos(angle)} ${96 + 62 * Math.sin(angle)} l${11 * Math.cos(angle)} ${11 * Math.sin(angle)}`} />;
        })}
        {item.diagram === 'flagellum' && <path d="M222 58 C266 31 274 72 246 83 C219 94 252 130 274 111" />}
      </g>
      {activeFeature !== undefined && observationFeatures[item.diagram][activeFeature] && (() => {
        const point = observationFeatures[item.diagram][activeFeature]!;
        return <g className="microbe-diagram__marker" aria-hidden="true"><circle cx={point.x} cy={point.y} r="22" /><text x={point.x + 26} y={point.y - 19}>{activeFeature + 1}</text></g>;
      })()}
    </svg>
    <figcaption>{item.feature} · 简化示意，不按比例</figcaption>
  </figure>;
}
