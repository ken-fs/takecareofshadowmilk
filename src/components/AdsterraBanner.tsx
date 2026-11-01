'use client';

import { useEffect, useRef } from 'react';
import { INVOKE_HOST, type AdSlot } from '@/lib/ads';

// Adsterra's Banner code sets a single global `atOptions` then loads invoke.js,
// which renders where the script tag sits. Two banners on one page would clobber
// each other's `atOptions`. To isolate them we render each unit inside its own
// srcdoc iframe — its own document, its own globals.
export function AdsterraBanner({ slot, className }: { slot: AdSlot; className?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe || !slot.key) return;
    const html = `<!doctype html><html><head><meta charset="utf-8">
<style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style>
</head><body>
<script type="text/javascript">
atOptions={key:'${slot.key}',format:'iframe',height:${slot.height},width:${slot.width},params:{}};
</${''}script>
<script type="text/javascript" src="//${INVOKE_HOST}/${slot.key}/invoke.js"></${''}script>
</body></html>`;
    // Fill srcdoc only once the slot is actually on screen (or close). srcdoc ignores loading="lazy",
    // so a CSS-hidden unit (the 728x90 on phones, a collapsed or breakpoint-hidden 300x250) used to
    // load anyway: impressions for ads nobody could see (found 2026-10-31, game-template-next 591544b).
    // A display:none element never intersects, so a hidden unit now never loads.
    if (!("IntersectionObserver" in window)) {
      if (iframe.offsetParent) iframe.srcdoc = html;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          iframe.srcdoc = html;
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(iframe);
    return () => io.disconnect();
  }, [slot.key, slot.width, slot.height]);

  // Nothing to show until a key is configured.
  if (!slot.key) return null;

  return (
    <iframe
      ref={ref}
      width={slot.width}
      height={slot.height}
      title="Advertisement"
      aria-hidden="true"
      tabIndex={-1}
      scrolling="no"
      style={{ border: 0, display: 'block', margin: '0 auto', maxWidth: '100%' }}
      className={className}
    />
  );
}
