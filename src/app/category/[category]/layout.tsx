import type { Metadata } from 'next';
import { GAME_CATEGORIES, getGamesByCategory, type GameCategory } from '@/data/gamesData';
import {
  buildMetadata,
  jsonLdScript,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
} from '@/lib/seo';

type Props = { params: { category: string } };

export function generateStaticParams() {
  return Object.keys(GAME_CATEGORIES).map((category) => ({ category }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = GAME_CATEGORIES[params.category as keyof typeof GAME_CATEGORIES];

  if (!category) {
    return { title: 'Category not found', robots: { index: false, follow: true } };
  }

  const count = getGamesByCategory(category.id as GameCategory).length;

  return buildMetadata({
    title: `${category.name} — ${count} Free Games to Play`,
    description: `${category.blurb} ${count} games, free and playable in your browser with no download.`,
    path: `/category/${category.id}`,
  });
}

export default function CategoryLayout({
  children,
  params,
}: Props & { children: React.ReactNode }) {
  const category = GAME_CATEGORIES[params.category as keyof typeof GAME_CATEGORIES];
  if (!category) return <>{children}</>;

  const games = getGamesByCategory(category.id as GameCategory);

  /* CollectionPage + ItemList: describes what this page actually is — a listing
     of N games — rather than claiming to be a game itself. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/category/${category.id}#page`,
    url: absoluteUrl(`/category/${category.id}`),
    name: category.name,
    description: category.blurb,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: games.length,
      itemListElement: games.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absoluteUrl(`/game/${g.slug}`),
        name: g.name,
      })),
    },
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Games', path: '/games' },
    { name: category.name, path: `/category/${category.id}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {children}
    </>
  );
}
