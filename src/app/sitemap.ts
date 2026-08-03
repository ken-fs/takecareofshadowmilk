import type { MetadataRoute } from 'next';
import { GAMES, GAME_CATEGORIES } from '@/data/gamesData';
import { SITE_URL as BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with honest lastModified dates
  // Only set lastModified when you genuinely update the page content
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, priority: 1.0 },
    { url: `${BASE_URL}/game`, priority: 0.9 },
    { url: `${BASE_URL}/games`, priority: 0.8 },
    { url: `${BASE_URL}/games/popular`, priority: 0.7 },
    { url: `${BASE_URL}/about`, priority: 0.5 },
    { url: `${BASE_URL}/contact`, priority: 0.5 },
  ];

  // Category pages (5 categories)
  const categoryPages: MetadataRoute.Sitemap = Object.keys(GAME_CATEGORIES).map((id) => ({
    url: `${BASE_URL}/category/${id}`,
    priority: 0.6,
  }));

  // Game detail pages (32 entries in GAMES — below the 50-page quality gate)
  const gameDetailPages: MetadataRoute.Sitemap = GAMES.map((g) => ({
    url: `${BASE_URL}/game/${g.slug}`,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...gameDetailPages];
}
