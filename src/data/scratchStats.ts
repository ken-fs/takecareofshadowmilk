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

export const SCRATCH_STATS_AS_OF = '2026-11-04';

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
  1206876997: { views: 899770, loves: 9594, remixes: 898, shared: '2025-08-16' },
  1207007542: { views: 70111, loves: 853, remixes: 15, shared: '2025-08-17' },
  1207094046: { views: 31663, loves: 374, remixes: 3, shared: '2025-08-18' },
  1207373782: { views: 19649, loves: 253, remixes: 2, shared: '2025-08-18' },
  1207505946: { views: 11657, loves: 123, remixes: 2, shared: '2025-08-19' },
  1207179986: { views: 11719, loves: 181, remixes: 7, shared: '2025-08-18' },
  1207086308: { views: 9955, loves: 15, remixes: 1, shared: '2025-08-17' },
  1207350965: { views: 9810, loves: 78, remixes: 1, shared: '2025-08-18' },
  1208084312: { views: 6950, loves: 95, remixes: 1, shared: '2025-08-21' },
  1208344487: { views: 5046, loves: 47, remixes: 0, shared: '2025-08-21' },
  1207714438: { views: 4440, loves: 33, remixes: 1, shared: '2025-08-20' },
  1208396387: { views: 2139, loves: 39, remixes: 0, shared: '2025-08-21' },
  1207380313: { views: 2337, loves: 61, remixes: 2, shared: '2025-08-19' },
  1208159039: { views: 2114, loves: 25, remixes: 0, shared: '2025-08-21' },
  1207373967: { views: 1862, loves: 36, remixes: 2, shared: '2025-08-18' },
  1207503015: { views: 1682, loves: 32, remixes: 1, shared: '2025-08-19' },
  1207996152: { views: 1738, loves: 150, remixes: 2, shared: '2025-08-21' },
  1207530067: { views: 704, loves: 9, remixes: 0, shared: '2025-08-19' },
  1207766068: { views: 421, loves: 15, remixes: 0, shared: '2025-08-20' },
  1207844706: { views: 333, loves: 12, remixes: 1, shared: '2025-08-20' },
  1207993329: { views: 288, loves: 15, remixes: 0, shared: '2025-08-20' },
  1207138547: { views: 232, loves: 21, remixes: 0, shared: '2025-08-18' },
  1209290797: { views: 201, loves: 7, remixes: 0, shared: '2025-08-25' },
  1264738581: { views: 36, loves: 2, remixes: 0, shared: '2026-01-14' },
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
