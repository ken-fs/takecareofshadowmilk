/**
 * Snapshot of public Scratch project statistics, keyed by project id.
 *
 * Every number here was read from api.scratch.mit.edu/projects/<id> on the date
 * in SCRATCH_STATS_AS_OF. They are real measured values, unlike the `rating` and
 * `plays` fields in gamesData, which are editorial placeholders and must never be
 * published as if measured.
 *
 * Because these change over time, anything rendering them must show the as-of
 * date alongside — see ScratchStats in game/[slug]/page.tsx. Stating "68,797
 * plays" with no date is a claim that quietly becomes false.
 *
 * To refresh: re-fetch each id and update both the rows and the as-of date. Do
 * not hand-edit individual numbers to look better; a stat you cannot re-derive
 * from the API is worse than no stat.
 */

export const SCRATCH_STATS_AS_OF = '2026-08-05';

export interface ScratchStats {
  /** Scratch's own play counter for the project page. */
  views: number;
  /** Scratch "loves" — its equivalent of a like. */
  loves: number;
  /** How many times this project has itself been remixed. */
  remixes: number;
  /** ISO date the project was first shared publicly. */
  shared: string;
}

export const SCRATCH_STATS: Record<number, ScratchStats> = {
  1206876997: { views: 876294, loves: 9232, remixes: 871, shared: '2025-08-16' },
  1207007542: { views: 68797, loves: 836, remixes: 15, shared: '2025-08-17' },
  1207094046: { views: 30860, loves: 358, remixes: 2, shared: '2025-08-18' },
  1207373782: { views: 19007, loves: 239, remixes: 2, shared: '2025-08-18' },
  1207505946: { views: 11415, loves: 119, remixes: 2, shared: '2025-08-19' },
  1207179986: { views: 11040, loves: 159, remixes: 6, shared: '2025-08-18' },
  1207086308: { views: 9699, loves: 14, remixes: 1, shared: '2025-08-17' },
  1207350965: { views: 9651, loves: 75, remixes: 1, shared: '2025-08-18' },
  1208084312: { views: 6677, loves: 90, remixes: 1, shared: '2025-08-21' },
  1208344487: { views: 4928, loves: 47, remixes: 0, shared: '2025-08-21' },
  1207714438: { views: 4172, loves: 33, remixes: 1, shared: '2025-08-20' },
  1208396387: { views: 2095, loves: 37, remixes: 1, shared: '2025-08-21' },
  1207380313: { views: 2019, loves: 55, remixes: 2, shared: '2025-08-19' },
  1208159039: { views: 1908, loves: 24, remixes: 0, shared: '2025-08-21' },
  1207373967: { views: 1754, loves: 34, remixes: 2, shared: '2025-08-18' },
  1207503015: { views: 1592, loves: 30, remixes: 1, shared: '2025-08-19' },
  1207996152: { views: 1350, loves: 136, remixes: 1, shared: '2025-08-21' },
  1207530067: { views: 632, loves: 9, remixes: 0, shared: '2025-08-19' },
  1207766068: { views: 417, loves: 15, remixes: 0, shared: '2025-08-20' },
  1207844706: { views: 306, loves: 12, remixes: 1, shared: '2025-08-20' },
  1207993329: { views: 271, loves: 15, remixes: 0, shared: '2025-08-20' },
  1207138547: { views: 196, loves: 16, remixes: 0, shared: '2025-08-18' },
  1209290797: { views: 195, loves: 7, remixes: 0, shared: '2025-08-25' },
  1264738581: { views: 21, loves: 2, remixes: 0, shared: '2026-01-14' },
};

export function getScratchStats(projectId?: number): ScratchStats | undefined {
  return projectId === undefined ? undefined : SCRATCH_STATS[projectId];
}

/** '68,797' — grouping only; no rounding, so the figure stays checkable. */
export function formatCount(n: number): string {
  return n.toLocaleString('en-US');
}

/** '17 August 2025' from an ISO date, without pulling in a date library. */
export function formatSharedDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
