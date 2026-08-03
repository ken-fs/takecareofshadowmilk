import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/*
  This is the live robots.txt. A static public/robots.txt also existed and was
  never served — the App Router route always wins — so it was deleted rather
  than left to rot with a stale http:// apex Sitemap line.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'AdsBot-Google',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
