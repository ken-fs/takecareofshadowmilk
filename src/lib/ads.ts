// Adsterra ad-unit config. Each format created in the Adsterra dashboard gives
// you a "key" (a hex string) via GET CODE. Paste it here. A slot with an empty
// key renders nothing.
//
// This site runs Adsterra only (AdSense was removed 2026-08-19).
//
// The classic Banner code Adsterra hands you looks like:
//   atOptions = { key: 'abc123...', format: 'iframe', height: 250, width: 300, params: {} }
//   <script src="//www.highperformanceformat.com/abc123.../invoke.js"></script>
// We only need the `key` and the size; AdsterraBanner rebuilds the rest.

export type AdSlot = {
  key: string;
  width: number;
  height: number;
};

// 300x250 medium rectangle — rendered in <Sidebar /> (home) and on game pages.
export const SIDEBAR: AdSlot = {
  key: "a2d9b581b0dcae86d361a11ea5a694f4", // 300x250 banner (takecareofshadowmilk.life)
  width: 300,
  height: 250,
};

// 728x90 leaderboard — game pages only; hidden on mobile (fixed-width creative).
export const LEADERBOARD: AdSlot = {
  key: "cedfde86c322cf05f099578597b27599", // 728x90 banner (takecareofshadowmilk.life)
  width: 728,
  height: 90,
};

// Adsterra's invoke.js host. Usually www.highperformanceformat.com, but the
// snippet from GET CODE may use a different host — if so, change this.
// The host must also be allowlisted in public/_headers CSP or ads die silently.
export const INVOKE_HOST = "www.highrevenueformat.com";
