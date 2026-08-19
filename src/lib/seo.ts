import type { Metadata } from 'next';

/*
  One source of truth for the canonical origin. Every canonical, og:url, sitemap
  entry and JSON-LD @id derives from this. The audit found http:// + apex spread
  across four files while the real origin is https:// + www — that mismatch is
  why 43 URLs pointed at a redirecting address.
*/
export const SITE_URL = 'https://www.takecareofshadowmilk.site';
export const SITE_NAME = 'Take Care of Shadow Milk';

/* The Scratch author of the original game. A person, not an organisation. */
export const GAME_AUTHOR = 'GPE_sb3';

/*
  ACTION REQUIRED: this mailbox must actually exist and be monitored.
  /contact previously offered no way to reach anyone at all, which is a real
  E-E-A-T gap for a site hosting someone else's game. A published address that
  bounces is worse than the original problem — create it or change it here.
*/
export const CONTACT_EMAIL = 'contact@takecareofshadowmilk.site';

export function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/*
  The canonical route for the flagship game. /game used to be a separate page
  running a second-party reimplementation of the same care loop, competing with
  this one for the identical query; it is now a 301 to here (see next.config.js).

  Internal links must point at this constant, never at '/game'. Linking to a
  redirect wastes crawl budget and dilutes the signal for the page that matters.
*/
export const FLAGSHIP_GAME_PATH = '/game/take-care-of-shadow-milk';

/*
  BreadcrumbList JSON-LD. Deep routes (/game/<slug>, /category/<id>) had no
  hierarchy signal at all, so nothing told a crawler that 24 variant pages sit
  under a category rather than floating loose off the root.

  Pass the trail excluding Home, which is always prepended: e.g.
  breadcrumbJsonLd([{ name: 'Games', path: '/games' }, { name: game.name, path }]).
*/
export function breadcrumbJsonLd(
  trail: Array<{ name: string; path: string }>
): Record<string, unknown> {
  const items = [{ name: 'Home', path: '/' }, ...trail];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/*
  Per-route metadata. `path` is required because every route needs its own
  self-referencing canonical — inheriting the root's canonical:'/' is what
  collapsed the whole site into the homepage.
*/
export function buildMetadata({
  title,
  description,
  path,
  ogType = 'website',
}: {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url,
      title,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/* Renders JSON-LD into the server HTML. The old approach appended a script tag
   from useEffect, so the raw HTML shipped zero structured data. */
export function jsonLdScript(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
