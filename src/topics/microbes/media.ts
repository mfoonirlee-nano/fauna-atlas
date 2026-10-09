export interface MicrobeImage { readonly src: string; readonly alt: string; readonly width: number; readonly height: number; }

export const microbeImages: Readonly<Record<string, MicrobeImage>> = {};
