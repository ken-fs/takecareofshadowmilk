// Adsterra ad-unit config. Each format created in the Adsterra dashboard gives
// you a "key" (a hex string) via GET CODE. Paste it here. A slot with an empty
// key renders nothing, so this file is safe to ship before you're ready — the
// ad only appears once the key is filled in.
//
// IMPORTANT: this site's AdSense is still under review. Do NOT fill the key
// (i.e. do not make Adsterra ads appear) until AdSense's review completes —
// live third-party ads during review can get AdSense rejected. Fill the key
// only after AdSense is approved (they can then coexist) or after you decide to
// drop AdSense.
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
  key: "", // <-- paste your 300x250 banner key here (see the warning above)
  width: 300,
  height: 250,
};

// Adsterra's invoke.js host. Usually www.highperformanceformat.com, but the
// snippet from GET CODE may use a different host — if so, change this.
export const INVOKE_HOST = "www.highperformanceformat.com";
