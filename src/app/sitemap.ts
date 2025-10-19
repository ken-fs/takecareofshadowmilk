import type { MetadataRoute } from 'next';
import { GAMES, GAME_CATEGORIES } from '@/data/gamesData';

const BASE_URL = 'http://takecareofshadowmilk.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/game`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/games`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/games/popular`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.keys(GAME_CATEGORIES).map((id) => ({
    url: `${BASE_URL}/category/${id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const gameDetailPages: MetadataRoute.Sitemap = GAMES.map((g) => ({
    url: `${BASE_URL}/game/${g.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...gameDetailPages];
}

