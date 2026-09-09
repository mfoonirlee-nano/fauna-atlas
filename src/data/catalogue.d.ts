declare module 'virtual:species-catalogue' {
  export const species: readonly import('../types/species').SpeciesSummary[];
  export function loadSpecies(slug: string): Promise<import('../types/species').Species>;
}
