import { ADSENSE_PUBLISHER_ID } from '@/lib/seo';

/*
  Served as a route handler rather than a file in public/ so the publisher ID
  stays derived from the same constant as the loader tag in the root layout.
  A drift between the two is precisely what AdSense rejects.

  Doubling as verification: the crawler fetches this as plain text, with no HTML
  parsing and no JS execution involved — which is why it succeeds in cases where
  the <head> snippet check does not.

  Format is fixed by the IAB ads.txt spec: domain, publisher account, account
  type, certification authority ID. Google's CA ID f08c47fec0942fa0 is a
  constant for all publishers, not a per-account secret.
*/
const ADS_TXT = `google.com, ${ADSENSE_PUBLISHER_ID}, DIRECT, f08c47fec0942fa0\n`;

export const dynamic = 'force-static';

export function GET() {
  return new Response(ADS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Crawlers re-check this periodically; a day of caching is plenty and
      // keeps a stale copy from outliving a publisher-ID change for long.
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
