import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import placeholder from '../assets/image-placeholder.webp';
import './AtlasImage.css';

type AtlasImageProps = ImgHTMLAttributes<HTMLImageElement> & { alt: string };

/** A source change starts a fresh load, including when revisiting a cached image. */
export function AtlasImage(props: AtlasImageProps) {
  return <ImageRequest key={`${props.src ?? ''}|${props.srcSet ?? ''}`} {...props} />;
}

function ImageRequest({ alt, onLoad, onError, ...props }: AtlasImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const image = ref.current;
    if (image?.complete) setStatus(image.naturalWidth > 0 ? 'ready' : 'error');
  }, []);

  return (
    <span className="atlas-image" data-status={status}>
      {status !== 'ready' && (
        <img
          className={`atlas-image__placeholder ${props.className ?? ''}`}
          src={placeholder}
          alt=""
          aria-hidden="true"
        />
      )}
      <img
        {...props}
        ref={ref}
        alt={status === 'error' && alt ? `${alt}（图片加载失败）` : alt}
        className={`atlas-image__photo ${props.className ?? ''}`}
        onLoad={(event) => {
          setStatus('ready');
          onLoad?.(event);
        }}
        onError={(event) => {
          setStatus('error');
          onError?.(event);
        }}
      />
    </span>
  );
}
