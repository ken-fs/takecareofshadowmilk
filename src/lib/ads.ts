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

// Sidebar 300x250, rendered inside the existing <Sidebar /> component.
export const SIDEBAR: AdSlot = {
  key: "eda4e6812a4dc9958f2b10bf47ee4929", // 300x250 banner
  width: 300,
  height: 250,
};

// Adsterra's invoke.js host. Usually www.highperformanceformat.com, but the
// snippet from GET CODE may use a different host — if so, change this.
export const INVOKE_HOST = "www.highperformanceformat.com";
