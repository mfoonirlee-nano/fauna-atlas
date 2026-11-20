import type { Species } from '../types';

export interface SpeciesImageFrame {
  readonly id: string;
  readonly kind: 'cover' | 'gallery' | 'learning';
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

  const frames = [...cover, ...gallery];
  const seen = new Set(frames.map((frame) => frame.image));
  const withdrawn = new Set([
    item.pendingMedia?.assets.image,
    ...(item.pendingMedia?.assets.gallery ?? []).map((image) => image.image),
  ]);
  for (const illustration of item.learning?.illustrations ?? []) {
    if (seen.has(illustration.image) || withdrawn.has(illustration.image)) continue;
    seen.add(illustration.image);
    frames.push({
      id: `${item.slug}:learning:${illustration.image}`,
      kind: 'learning',
      ...illustration,
    });
  }
  return frames;
}
