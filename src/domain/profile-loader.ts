import type { Species } from '../types/species';

/** A cancelled or superseded request must never open an old profile. */
export function createProfileLoader(fetchProfile: (slug: string) => Promise<Species>) {
  let revision = 0;
  const cache = new Map<string, Species>();
  return {
    cancel() { revision += 1; },
    async load(slug: string): Promise<Species | undefined> {
      const request = ++revision;
      try {
        const profile = cache.get(slug) ?? await fetchProfile(slug);
        cache.set(slug, profile);
        return request === revision ? profile : undefined;
      } catch (error) {
        if (request === revision) throw error;
        return undefined;
      }
    },
  };
}
