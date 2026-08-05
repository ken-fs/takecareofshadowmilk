import type { MetadataRoute } from 'next';
import { GAMES, GAME_CATEGORIES } from '@/data/gamesData';
import { SITE_URL as BASE_URL } from '@/lib/seo';

/*
  A hardcoded date, deliberately. This field used to be `new Date()`, which
  claimed every page on the site had just changed on every deploy — an
  unreliable lastmod gets ignored wholesale, which costs you the field for the
  times you actually need it.

  2026-08-05 is a real date: every game page's embed source, credit block,
  editorial copy, stats block and FAQ were rewritten then. Bump this ONLY when
  page content genuinely changes; leaving it stale is what keeps the signal
  worth reading.

  `changeFrequency` is omitted throughout — Google does not use it.
*/
const LAST_CONTENT_UPDATE = '2026-08-05';

export default function sitemap(): MetadataRoute.Sitemap {
  /*
    No `/game` entry. That route is now a 301 to the flagship game page, and
    listing a redirect in a sitemap spends crawl budget discovering that — the
    destination is already listed below via GAMES.
  */
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: LAST_CONTENT_UPDATE, priority: 1.0 },
    { url: `${BASE_URL}/games`, lastModified: LAST_CONTENT_UPDATE, priority: 0.8 },
    { url: `${BASE_URL}/games/popular`, lastModified: LAST_CONTENT_UPDATE, priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: LAST_CONTENT_UPDATE, priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_CONTENT_UPDATE, priority: 0.5 },
  ];

  // Category pages (5 categories)
  const categoryPages: MetadataRoute.Sitemap = Object.keys(GAME_CATEGORIES).map((id) => ({
    url: `${BASE_URL}/category/${id}`,
    lastModified: LAST_CONTENT_UPDATE,
    priority: 0.6,
  }));

  // Game detail pages (24 entries in GAMES — below the 50-page quality gate)
  const gameDetailPages: MetadataRoute.Sitemap = GAMES.map((g) => ({
    url: `${BASE_URL}/game/${g.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...gameDetailPages];
}
