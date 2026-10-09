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

export const microbeTopics: readonly MicrobeTopic[] = [];
