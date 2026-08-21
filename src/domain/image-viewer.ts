import type { Species } from '../types';

export interface SpeciesImageFrame {
  readonly id: string;
  readonly kind: 'cover' | 'gallery';
  readonly image: NonNullable<Species['media']['image']>;
  readonly alt: string;
  readonly title: string;
  readonly caption: string;
  readonly focalPoint?: { readonly x: number; readonly y: number };
  readonly credit?: string;
}

export function buildSpeciesImageFrames(item: Species): readonly SpeciesImageFrame[] {
  const cover: SpeciesImageFrame[] = item.media.image
    ? [
        {
          id: `${item.slug}:cover`,
          kind: 'cover',
          image: item.media.image,
          alt: item.media.alt,
          title: '物种肖像',
          caption: item.summary,
          focalPoint: item.media.focalPoint,
          credit: item.media.credit,
        },
      ]
    : [];

  const gallery = (item.media.gallery ?? []).map(
    (image, index): SpeciesImageFrame => ({
      id: `${item.slug}:gallery:${index + 1}`,
      kind: 'gallery',
      image: image.image,
      alt: image.alt,
      title: image.title,
      caption: image.caption ?? item.summary,
      focalPoint: image.focalPoint,
      credit: image.credit ?? item.media.credit,
    }),
  );

  return [...cover, ...gallery];
}
