import { useId } from 'react';
import type { MicrobeTopic } from './content';

export function MicrobeDiagram({ item }: { item: MicrobeTopic }) {
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
    </svg>
    <figcaption>{item.feature} · 简化示意，不按比例</figcaption>
  </figure>;
}
